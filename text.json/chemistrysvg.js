
// ChemistrySvgDiagrams.js
// Black & white SVG diagrams matching entries in ChemistryDiagramsRegistry
// Categories implemented: Chemical Reactions, Stoichiometry & Moles

class ChemistrySvgDiagrams {

    // ============================================================
    // ===== 3. CHEMICAL REACTIONS ================================
    // ============================================================

    // Generated from registry: balancedEquationDiagram
    // reaction: '2H2 + O2 → 2H2O'
    // options: showReactants, showProducts, showMolecules, showCoefficients, showArrow
    static balancedEquationDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="500" viewBox="0 0 1000 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>Balanced Chemical Equation - Water Formation</metadata>
<g fill="none" stroke="#000000">

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Balanced Chemical Equation – Water Formation</text>
<text x="500" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">2H₂  +  O₂  →  2H₂O</text>

<!-- ── REACTANTS SECTION ── -->
<text x="250" y="95" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">REACTANTS</text>

<!-- Molecule: H2 (first copy) - coefficient 2 means draw two -->
<!-- H2 molecule #1 -->
<circle cx="130" cy="160" r="18" fill="#ffffff" stroke="#000000" stroke-width="2"/>
<text x="130" y="165" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">H</text>
<line x1="148" y1="160" x2="172" y2="160" stroke="#000000" stroke-width="2"/>
<circle cx="190" cy="160" r="18" fill="#ffffff" stroke="#000000" stroke-width="2"/>
<text x="190" y="165" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">H</text>
<text x="160" y="200" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H₂ molecule #1</text>

<!-- H2 molecule #2 -->
<circle cx="130" cy="250" r="18" fill="#ffffff" stroke="#000000" stroke-width="2"/>
<text x="130" y="255" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">H</text>
<line x1="148" y1="250" x2="172" y2="250" stroke="#000000" stroke-width="2"/>
<circle cx="190" cy="250" r="18" fill="#ffffff" stroke="#000000" stroke-width="2"/>
<text x="190" y="255" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">H</text>
<text x="160" y="290" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H₂ molecule #2</text>

<!-- Coefficient label 2H2 -->
<rect x="60" y="135" width="32" height="24" fill="#eeeeee" stroke="#000000" stroke-width="1" rx="3"/>
<text x="76" y="152" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">2</text>

<!-- Plus sign -->
<text x="245" y="215" font-family="Arial" font-size="28" fill="#000000" text-anchor="middle" font-weight="bold">+</text>

<!-- O2 molecule -->
<circle cx="300" cy="200" r="22" fill="#ffffff" stroke="#000000" stroke-width="2"/>
<text x="300" y="206" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">O</text>
<line x1="322" y1="200" x2="348" y2="200" stroke="#000000" stroke-width="2.5"/>
<line x1="322" y1="196" x2="348" y2="196" stroke="#000000" stroke-width="2.5"/>
<circle cx="370" cy="200" r="22" fill="#ffffff" stroke="#000000" stroke-width="2"/>
<text x="370" y="206" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">O</text>
<text x="335" y="240" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">O₂ molecule (double bond)</text>

<!-- Coefficient 1 (implicit) -->
<rect x="265" y="175" width="28" height="24" fill="#eeeeee" stroke="#000000" stroke-width="1" rx="3"/>
<text x="279" y="192" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">1</text>

<!-- ── ARROW ── -->
<line x1="430" y1="210" x2="540" y2="210" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="485" y="200" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">reaction</text>

<!-- ── PRODUCTS SECTION ── -->
<text x="730" y="95" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">PRODUCTS</text>

<!-- H2O molecule #1 -->
<circle cx="610" cy="170" r="22" fill="#ffffff" stroke="#000000" stroke-width="2"/>
<text x="610" y="176" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">O</text>
<!-- O-H bonds at angles -->
<line x1="592" y1="158" x2="572" y2="140" stroke="#000000" stroke-width="2"/>
<circle cx="558" cy="128" r="15" fill="#ffffff" stroke="#000000" stroke-width="2"/>
<text x="558" y="133" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">H</text>
<line x1="628" y1="158" x2="648" y2="140" stroke="#000000" stroke-width="2"/>
<circle cx="662" cy="128" r="15" fill="#ffffff" stroke="#000000" stroke-width="2"/>
<text x="662" y="133" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">H</text>
<text x="610" y="215" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H₂O molecule #1</text>
<text x="610" y="229" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">104.5° bond angle</text>

<!-- H2O molecule #2 -->
<circle cx="830" cy="170" r="22" fill="#ffffff" stroke="#000000" stroke-width="2"/>
<text x="830" y="176" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">O</text>
<line x1="812" y1="158" x2="792" y2="140" stroke="#000000" stroke-width="2"/>
<circle cx="778" cy="128" r="15" fill="#ffffff" stroke="#000000" stroke-width="2"/>
<text x="778" y="133" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">H</text>
<line x1="848" y1="158" x2="868" y2="140" stroke="#000000" stroke-width="2"/>
<circle cx="882" cy="128" r="15" fill="#ffffff" stroke="#000000" stroke-width="2"/>
<text x="882" y="133" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">H</text>
<text x="830" y="215" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H₂O molecule #2</text>

<!-- Coefficient 2H2O -->
<rect x="555" y="135" width="32" height="24" fill="#eeeeee" stroke="#000000" stroke-width="1" rx="3"/>
<text x="571" y="152" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">2</text>

<!-- ── ATOM COUNT VERIFICATION (balancing check) ── -->
<rect x="60" y="310" width="880" height="130" fill="#f8f8f8" stroke="#000000" stroke-width="1" rx="4"/>
<text x="500" y="334" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Atom Balance Verification</text>
<line x1="100" y1="342" x2="900" y2="342" stroke="#888888" stroke-width="1"/>
<text x="140" y="362" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Element</text>
<text x="340" y="362" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Reactants side</text>
<text x="560" y="362" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Products side</text>
<text x="760" y="362" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Balanced?</text>

<text x="140" y="386" font-family="Arial" font-size="12" fill="#000000">Hydrogen (H)</text>
<text x="340" y="386" font-family="Arial" font-size="12" fill="#000000">2 × 2 = 4 atoms</text>
<text x="560" y="386" font-family="Arial" font-size="12" fill="#000000">2 × 2 = 4 atoms</text>
<text x="760" y="386" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">✓ Yes</text>

<text x="140" y="408" font-family="Arial" font-size="12" fill="#000000">Oxygen (O)</text>
<text x="340" y="408" font-family="Arial" font-size="12" fill="#000000">1 × 2 = 2 atoms</text>
<text x="560" y="408" font-family="Arial" font-size="12" fill="#000000">2 × 1 = 2 atoms</text>
<text x="760" y="408" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">✓ Yes</text>

<text x="140" y="430" font-family="Arial" font-size="11" fill="#444444">Law of Conservation of Mass: atoms are neither created nor destroyed in a chemical reaction.</text>

</g>
</svg>`;

    // Generated from registry: reactionTypesDiagram
    // reactionType: 'synthesis', showAllTypes=true, showExamples=true, showPatterns=true
    static reactionTypesDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="800" viewBox="0 0 1000 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>Types of Chemical Reactions</metadata>
<g fill="none" stroke="#000000">

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Types of Chemical Reactions</text>

<!-- ── 1. SYNTHESIS ── A + B → AB -->
<rect x="30" y="55" width="460" height="155" fill="#f9f9f9" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="260" y="78" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">1. SYNTHESIS  (A + B → AB)</text>
<!-- Pattern -->
<rect x="55" y="92" width="40" height="32" fill="#dddddd" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="75" y="113" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A</text>
<text x="110" y="113" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle">+</text>
<rect x="130" y="92" width="40" height="32" fill="#dddddd" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="150" y="113" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">B</text>
<line x1="178" y1="108" x2="220" y2="108" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<rect x="228" y="90" width="60" height="36" fill="#aaaaaa" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="258" y="113" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">AB</text>
<!-- Example -->
<text x="55" y="145" font-family="Arial" font-size="12" fill="#000000">Example:  2Na  +  Cl₂  →  2NaCl</text>
<text x="55" y="163" font-family="Arial" font-size="11" fill="#555555">Two or more substances combine to form a single product.</text>
<text x="55" y="181" font-family="Arial" font-size="11" fill="#555555">Also called: combination reaction.</text>

<!-- ── 2. DECOMPOSITION ── AB → A + B -->
<rect x="510" y="55" width="460" height="155" fill="#f9f9f9" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="740" y="78" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">2. DECOMPOSITION  (AB → A + B)</text>
<rect x="535" y="90" width="60" height="36" fill="#aaaaaa" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="565" y="113" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">AB</text>
<line x1="600" y1="108" x2="642" y2="108" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<rect x="650" y="92" width="40" height="32" fill="#dddddd" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="670" y="113" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A</text>
<text x="705" y="113" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle">+</text>
<rect x="720" y="92" width="40" height="32" fill="#dddddd" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="740" y="113" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">B</text>
<text x="535" y="145" font-family="Arial" font-size="12" fill="#000000">Example:  2H₂O₂  →  2H₂O  +  O₂</text>
<text x="535" y="163" font-family="Arial" font-size="11" fill="#555555">A single compound breaks down into two or more simpler substances.</text>
<text x="535" y="181" font-family="Arial" font-size="11" fill="#555555">Often requires energy input (heat, light, electricity).</text>

<!-- ── 3. SINGLE DISPLACEMENT ── A + BC → AC + B -->
<rect x="30" y="230" width="460" height="155" fill="#f9f9f9" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="260" y="253" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">3. SINGLE DISPLACEMENT  (A + BC → AC + B)</text>
<rect x="50" y="267" width="28" height="28" fill="#dddddd" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="64" y="286" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">A</text>
<text x="92" y="286" font-family="Arial" font-size="14">+</text>
<rect x="104" y="267" width="48" height="28" fill="#bbbbbb" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="128" y="286" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">BC</text>
<line x1="158" y1="281" x2="196" y2="281" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<rect x="202" y="267" width="48" height="28" fill="#999999" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="226" y="286" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">AC</text>
<text x="262" y="286" font-family="Arial" font-size="14">+</text>
<rect x="274" y="267" width="28" height="28" fill="#eeeeee" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="288" y="286" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">B</text>
<text x="50" y="318" font-family="Arial" font-size="12" fill="#000000">Example:  Zn  +  2HCl  →  ZnCl₂  +  H₂</text>
<text x="50" y="336" font-family="Arial" font-size="11" fill="#555555">A more reactive element displaces a less reactive one from a compound.</text>
<text x="50" y="354" font-family="Arial" font-size="11" fill="#555555">Activity series determines which element displaces which.</text>
<text x="50" y="372" font-family="Arial" font-size="11" fill="#555555">Zn displaces H; A (Zn) replaces B (H) in compound BC (HCl).</text>

<!-- ── 4. DOUBLE DISPLACEMENT ── AB + CD → AD + CB -->
<rect x="510" y="230" width="460" height="155" fill="#f9f9f9" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="740" y="253" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">4. DOUBLE DISPLACEMENT  (AB + CD → AD + CB)</text>
<rect x="530" y="267" width="36" height="28" fill="#cccccc" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="548" y="286" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">AB</text>
<text x="580" y="286" font-family="Arial" font-size="14">+</text>
<rect x="592" y="267" width="36" height="28" fill="#aaaaaa" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="610" y="286" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">CD</text>
<line x1="634" y1="281" x2="670" y2="281" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<rect x="676" y="267" width="36" height="28" fill="#999999" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="694" y="286" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">AD</text>
<text x="724" y="286" font-family="Arial" font-size="14">+</text>
<rect x="736" y="267" width="36" height="28" fill="#dddddd" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="754" y="286" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">CB</text>
<text x="530" y="318" font-family="Arial" font-size="12" fill="#000000">Example:  AgNO₃  +  NaCl  →  AgCl↓  +  NaNO₃</text>
<text x="530" y="336" font-family="Arial" font-size="11" fill="#555555">Ions of two compounds exchange partners. Often produces</text>
<text x="530" y="354" font-family="Arial" font-size="11" fill="#555555">a precipitate (↓), gas (↑), or water.</text>
<text x="530" y="372" font-family="Arial" font-size="11" fill="#555555">Also called: metathesis or exchange reaction.</text>

<!-- ── 5. COMBUSTION ── -->
<rect x="30" y="405" width="460" height="145" fill="#f9f9f9" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="260" y="428" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">5. COMBUSTION  (fuel + O₂ → CO₂ + H₂O + energy)</text>
<!-- flame icon -->
<path d="M100,510 Q90,480 110,465 Q105,490 120,475 Q115,500 130,488 Q122,510 130,520 Q110,525 100,510Z" fill="#cccccc" stroke="#000000" stroke-width="1.5"/>
<text x="175" y="468" font-family="Arial" font-size="12" fill="#000000">Example:  CH₄  +  2O₂  →  CO₂  +  2H₂O</text>
<text x="55" y="490" font-family="Arial" font-size="11" fill="#555555">Rapid reaction of a fuel with oxygen releasing heat and light.</text>
<text x="55" y="508" font-family="Arial" font-size="11" fill="#555555">Complete combustion: CO₂ + H₂O (sufficient O₂).</text>
<text x="55" y="526" font-family="Arial" font-size="11" fill="#555555">Incomplete combustion: CO + soot (insufficient O₂).</text>
<text x="55" y="540" font-family="Arial" font-size="11" fill="#555555">Always exothermic — energy is released as products form.</text>

<!-- ── 6. ACID-BASE (NEUTRALIZATION) ── -->
<rect x="510" y="405" width="460" height="145" fill="#f9f9f9" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="740" y="428" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">6. NEUTRALIZATION  (acid + base → salt + water)</text>
<text x="530" y="460" font-family="Arial" font-size="12" fill="#000000">Example:  HCl  +  NaOH  →  NaCl  +  H₂O</text>
<text x="530" y="480" font-family="Arial" font-size="11" fill="#555555">An acid and a base react to produce a salt and water.</text>
<text x="530" y="498" font-family="Arial" font-size="11" fill="#555555">Net ionic:  H⁺  +  OH⁻  →  H₂O</text>
<text x="530" y="516" font-family="Arial" font-size="11" fill="#555555">pH moves toward 7 (neutral) as reaction proceeds.</text>
<text x="530" y="534" font-family="Arial" font-size="11" fill="#555555">Commonly used in titrations to determine concentration.</text>

<!-- ── SUMMARY TABLE ── -->
<rect x="30" y="565" width="940" height="210" fill="#f0f0f0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="500" y="588" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Summary Table – Reaction Patterns</text>
<line x1="50" y1="596" x2="950" y2="596" stroke="#888888" stroke-width="1"/>

<!-- Headers -->
<text x="80"  y="614" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Type</text>
<text x="230" y="614" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">General Pattern</text>
<text x="460" y="614" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Key Clue</text>
<text x="680" y="614" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Example</text>

<line x1="50" y1="620" x2="950" y2="620" stroke="#aaaaaa" stroke-width="0.8"/>

<text x="80"  y="638" font-family="Arial" font-size="11" fill="#000000">Synthesis</text>
<text x="230" y="638" font-family="Arial" font-size="11" fill="#000000">A + B → AB</text>
<text x="460" y="638" font-family="Arial" font-size="11" fill="#000000">Few reactants, one product</text>
<text x="680" y="638" font-family="Arial" font-size="11" fill="#000000">2Na + Cl₂ → 2NaCl</text>

<text x="80"  y="658" font-family="Arial" font-size="11" fill="#000000">Decomposition</text>
<text x="230" y="658" font-family="Arial" font-size="11" fill="#000000">AB → A + B</text>
<text x="460" y="658" font-family="Arial" font-size="11" fill="#000000">One reactant, many products</text>
<text x="680" y="658" font-family="Arial" font-size="11" fill="#000000">2H₂O₂ → 2H₂O + O₂</text>

<text x="80"  y="678" font-family="Arial" font-size="11" fill="#000000">Single Displace.</text>
<text x="230" y="678" font-family="Arial" font-size="11" fill="#000000">A + BC → AC + B</text>
<text x="460" y="678" font-family="Arial" font-size="11" fill="#000000">Element replaces element</text>
<text x="680" y="678" font-family="Arial" font-size="11" fill="#000000">Zn + 2HCl → ZnCl₂ + H₂</text>

<text x="80"  y="698" font-family="Arial" font-size="11" fill="#000000">Double Displace.</text>
<text x="230" y="698" font-family="Arial" font-size="11" fill="#000000">AB + CD → AD + CB</text>
<text x="460" y="698" font-family="Arial" font-size="11" fill="#000000">Ions swap partners</text>
<text x="680" y="698" font-family="Arial" font-size="11" fill="#000000">AgNO₃ + NaCl → AgCl + NaNO₃</text>

<text x="80"  y="718" font-family="Arial" font-size="11" fill="#000000">Combustion</text>
<text x="230" y="718" font-family="Arial" font-size="11" fill="#000000">Fuel + O₂ → CO₂ + H₂O</text>
<text x="460" y="718" font-family="Arial" font-size="11" fill="#000000">O₂ as reactant, heat released</text>
<text x="680" y="718" font-family="Arial" font-size="11" fill="#000000">CH₄ + 2O₂ → CO₂ + 2H₂O</text>

<text x="80"  y="738" font-family="Arial" font-size="11" fill="#000000">Neutralization</text>
<text x="230" y="738" font-family="Arial" font-size="11" fill="#000000">Acid + Base → Salt + H₂O</text>
<text x="460" y="738" font-family="Arial" font-size="11" fill="#000000">Acid + base present</text>
<text x="680" y="738" font-family="Arial" font-size="11" fill="#000000">HCl + NaOH → NaCl + H₂O</text>

<line x1="50" y1="748" x2="950" y2="748" stroke="#aaaaaa" stroke-width="0.8"/>
<text x="500" y="766" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">All reactions obey: Law of Conservation of Mass and Law of Conservation of Energy.</text>

</g>
</svg>`;

    // Generated from registry: oxidationNumbersDiagram
    // compound: 'H2SO4', showCompound, showNumbers, showRules
    static oxidationNumbersDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Oxidation Numbers – Sulfuric Acid H2SO4</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Oxidation Numbers – Sulfuric Acid (H₂SO₄)</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Assigning oxidation states to each atom in the compound</text>

<!-- ── COMPOUND DIAGRAM ── -->
<!-- Large formula display -->
<text x="400" y="130" font-family="Arial" font-size="48" fill="#000000" text-anchor="middle" font-weight="bold">H₂SO₄</text>

<!-- Arrows pointing to each element with oxidation number -->
<!-- H: oxidation number +1 -->
<line x1="310" y1="115" x2="280" y2="80" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
<rect x="210" y="52" width="66" height="26" fill="#eeeeee" stroke="#000000" stroke-width="1" rx="3"/>
<text x="243" y="70" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">H: +1</text>
<text x="243" y="46" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(each H atom)</text>

<!-- S: oxidation number +6 -->
<line x1="400" y1="108" x2="400" y2="75" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
<rect x="363" y="50" width="74" height="26" fill="#cccccc" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="400" y="68" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">S: +6</text>

<!-- O: oxidation number -2 -->
<line x1="470" y1="115" x2="510" y2="80" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
<rect x="515" y="52" width="70" height="26" fill="#eeeeee" stroke="#000000" stroke-width="1" rx="3"/>
<text x="550" y="70" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">O: −2</text>
<text x="550" y="46" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(each O atom)</text>

<!-- ── CHARGE BALANCE CALCULATION ── -->
<rect x="50" y="155" width="700" height="130" fill="#f5f5f5" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="400" y="178" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Charge Balance Verification (Neutral Compound → Sum = 0)</text>
<line x1="70" y1="185" x2="730" y2="185" stroke="#888888" stroke-width="1"/>

<text x="80"  y="207" font-family="Arial" font-size="13" fill="#000000">Hydrogen (H):</text>
<text x="230" y="207" font-family="Arial" font-size="13" fill="#000000">2 atoms × (+1) =</text>
<text x="430" y="207" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">+2</text>

<text x="80"  y="228" font-family="Arial" font-size="13" fill="#000000">Sulfur (S):</text>
<text x="230" y="228" font-family="Arial" font-size="13" fill="#000000">1 atom  × (+6) =</text>
<text x="430" y="228" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">+6</text>

<text x="80"  y="249" font-family="Arial" font-size="13" fill="#000000">Oxygen (O):</text>
<text x="230" y="249" font-family="Arial" font-size="13" fill="#000000">4 atoms × (−2) =</text>
<text x="430" y="249" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">−8</text>

<line x1="400" y1="256" x2="500" y2="256" stroke="#000000" stroke-width="1"/>
<text x="80"  y="272" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Total:</text>
<text x="230" y="272" font-family="Arial" font-size="13" fill="#000000">(+2) + (+6) + (−8) =</text>
<text x="430" y="272" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">0 ✓  (neutral molecule)</text>

<!-- ── RULES FOR OXIDATION NUMBERS ── -->
<text x="400" y="315" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Rules for Assigning Oxidation Numbers</text>
<rect x="50" y="322" width="340" height="238" fill="#f9f9f9" stroke="#000000" stroke-width="1" rx="4"/>
<text x="70" y="346" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">General Rules:</text>
<text x="70" y="366" font-family="Arial" font-size="11" fill="#000000">1. Pure element: oxidation number = 0</text>
<text x="70" y="384" font-family="Arial" font-size="11" fill="#000000">   e.g. Na(s), O₂(g), Fe(s) → all = 0</text>
<text x="70" y="404" font-family="Arial" font-size="11" fill="#000000">2. Monatomic ion = its charge</text>
<text x="70" y="422" font-family="Arial" font-size="11" fill="#000000">   e.g. Na⁺ = +1,  Cl⁻ = −1</text>
<text x="70" y="442" font-family="Arial" font-size="11" fill="#000000">3. In compounds: H = +1 (usually)</text>
<text x="70" y="460" font-family="Arial" font-size="11" fill="#000000">   Exception: metal hydrides H = −1</text>
<text x="70" y="480" font-family="Arial" font-size="11" fill="#000000">4. In compounds: O = −2 (usually)</text>
<text x="70" y="498" font-family="Arial" font-size="11" fill="#000000">   Exceptions: peroxides O = −1</text>
<text x="70" y="516" font-family="Arial" font-size="11" fill="#000000">5. Sum of all ox. numbers:</text>
<text x="70" y="532" font-family="Arial" font-size="11" fill="#000000">   Neutral compound → 0</text>
<text x="70" y="548" font-family="Arial" font-size="11" fill="#000000">   Polyatomic ion → ion charge</text>

<rect x="410" y="322" width="340" height="238" fill="#f9f9f9" stroke="#000000" stroke-width="1" rx="4"/>
<text x="430" y="346" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Common Oxidation States:</text>
<text x="430" y="368" font-family="Arial" font-size="11" fill="#000000">Group 1 metals (Li,Na,K …)   always +1</text>
<text x="430" y="388" font-family="Arial" font-size="11" fill="#000000">Group 2 metals (Mg,Ca …)    always +2</text>
<text x="430" y="408" font-family="Arial" font-size="11" fill="#000000">Fluorine (F)                          always −1</text>
<text x="430" y="428" font-family="Arial" font-size="11" fill="#000000">Halogens (Cl,Br,I)               usually −1</text>
<text x="430" y="448" font-family="Arial" font-size="11" fill="#000000">Oxygen (O)                          usually −2</text>
<text x="430" y="468" font-family="Arial" font-size="11" fill="#000000">Hydrogen (H)                       usually +1</text>
<text x="430" y="490" font-family="Arial" font-size="11" fill="#000000">Transition metals vary (e.g. Fe: +2, +3)</text>
<text x="430" y="510" font-family="Arial" font-size="11" fill="#000000">Sulfur (S) can be: −2, 0, +4, +6</text>
<text x="430" y="530" font-family="Arial" font-size="11" fill="#444444">In H₂SO₄: S is at its highest state (+6)</text>
<text x="430" y="550" font-family="Arial" font-size="11" fill="#444444">making H₂SO₄ a strong oxidizing agent.</text>

</g>
</svg>`;

    // Generated from registry: redoxReactionDiagram
    // reaction: 'Zn + Cu²⁺ → Zn²⁺ + Cu'
    // options: showElectronTransfer, showOxidationStates, showHalfReactions
    static redoxReactionDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Redox Reaction – Zn + Cu²⁺ → Zn²⁺ + Cu</metadata>
<g fill="none" stroke="#000000">

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-bw-s" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
    <polygon points="0 0, 8 2.5, 0 5" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Redox Reaction: Zn + Cu²⁺ → Zn²⁺ + Cu</text>
<text x="500" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Electron transfer between zinc and copper ions</text>

<!-- ── LEFT: Zinc atom (reactant) ── -->
<circle cx="160" cy="230" r="55" fill="#f0f0f0" stroke="#000000" stroke-width="2.5"/>
<text x="160" y="222" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">Zn</text>
<text x="160" y="242" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">oxidation state: 0</text>
<text x="160" y="305" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Zinc atom (solid)</text>

<!-- ── RIGHT: Cu²⁺ ion (reactant) ── -->
<circle cx="700" cy="230" r="55" fill="#dddddd" stroke="#000000" stroke-width="2.5"/>
<text x="700" y="218" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">Cu²⁺</text>
<text x="700" y="240" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">oxidation state: +2</text>
<text x="700" y="305" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Copper(II) ion (aq)</text>

<!-- ── ELECTRON TRANSFER ARROW (2e⁻) ── -->
<path d="M 220,205 Q 430,150 640,205" stroke="#000000" stroke-width="2.5" fill="none" marker-end="url(#arrow-bw)" stroke-dasharray="8,4"/>
<text x="430" y="160" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">2e⁻ transfer</text>
<text x="430" y="176" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(electrons flow from Zn to Cu²⁺)</text>

<!-- ── PRODUCTS ── -->
<!-- Zn²⁺ ion -->
<circle cx="160" cy="450" r="55" fill="#aaaaaa" stroke="#000000" stroke-width="2"/>
<text x="160" y="438" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">Zn²⁺</text>
<text x="160" y="458" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">oxidation state: +2</text>
<text x="160" y="523" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Zinc ion (aq)</text>

<!-- Cu atom -->
<circle cx="700" cy="450" r="55" fill="#f5f5f5" stroke="#000000" stroke-width="2"/>
<text x="700" y="442" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">Cu</text>
<text x="700" y="462" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">oxidation state: 0</text>
<text x="700" y="523" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Copper metal (solid)</text>

<!-- Vertical arrows reactant→product -->
<line x1="160" y1="287" x2="160" y2="390" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="700" y1="287" x2="700" y2="390" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- OXIDIZED / REDUCED labels -->
<rect x="30" y="355" width="110" height="26" fill="#eeeeee" stroke="#000000" stroke-width="1" rx="3"/>
<text x="85" y="373" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">OXIDIZED</text>
<text x="85" y="395" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">loses electrons</text>

<rect x="800" y="355" width="110" height="26" fill="#eeeeee" stroke="#000000" stroke-width="1" rx="3"/>
<text x="855" y="373" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">REDUCED</text>
<text x="855" y="395" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">gains electrons</text>

<!-- ── HALF REACTIONS BOX ── -->
<rect x="350" y="380" width="310" height="150" fill="#f5f5f5" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="505" y="402" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Half Reactions</text>
<line x1="370" y1="410" x2="640" y2="410" stroke="#888888" stroke-width="1"/>
<text x="370" y="430" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Oxidation:</text>
<text x="370" y="448" font-family="Arial" font-size="12" fill="#000000">Zn → Zn²⁺ + 2e⁻</text>
<text x="370" y="464" font-family="Arial" font-size="11" fill="#555555">(Zn is the REDUCING AGENT)</text>
<text x="370" y="486" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Reduction:</text>
<text x="370" y="504" font-family="Arial" font-size="12" fill="#000000">Cu²⁺ + 2e⁻ → Cu</text>
<text x="370" y="520" font-family="Arial" font-size="11" fill="#555555">(Cu²⁺ is the OXIDIZING AGENT)</text>

<!-- OIL RIG mnemonic -->
<rect x="820" y="460" width="160" height="76" fill="#eeeeee" stroke="#000000" stroke-width="1" rx="4"/>
<text x="900" y="478" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">OIL RIG</text>
<text x="900" y="496" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Oxidation Is Loss</text>
<text x="900" y="512" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Reduction Is Gain</text>
<text x="900" y="528" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(of electrons)</text>

<!-- Net change summary -->
<text x="500" y="570" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Overall: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)     ΔG° &lt; 0  (spontaneous)</text>

</g>
</svg>`;

    // Generated from registry: combustionReactionDiagram
    // fuel: 'CH4', combustionType: 'complete'
    // options: showReactants, showProducts, showFlame, showEnergy
    static combustionReactionDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Combustion Reaction – Complete Combustion of Methane</metadata>
<g fill="none" stroke="#000000">

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Complete Combustion of Methane (CH₄)</text>
<text x="500" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">CH₄  +  2O₂  →  CO₂  +  2H₂O  +  energy</text>

<!-- ── REACTANTS ── -->
<text x="200" y="90" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">REACTANTS</text>

<!-- CH4 molecule -->
<circle cx="145" cy="185" r="22" fill="#f0f0f0" stroke="#000000" stroke-width="2"/>
<text x="145" y="191" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">C</text>
<!-- 4 H atoms -->
<circle cx="145" cy="143" r="13" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<text x="145" y="148" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<line x1="145" y1="163" x2="145" y2="156" stroke="#000000" stroke-width="1.5"/>
<circle cx="145" cy="227" r="13" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<text x="145" y="232" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<line x1="145" y1="207" x2="145" y2="214" stroke="#000000" stroke-width="1.5"/>
<circle cx="105" cy="185" r="13" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<text x="105" y="190" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<line x1="123" y1="185" x2="118" y2="185" stroke="#000000" stroke-width="1.5"/>
<circle cx="185" cy="185" r="13" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<text x="185" y="190" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<line x1="167" y1="185" x2="172" y2="185" stroke="#000000" stroke-width="1.5"/>
<text x="145" y="260" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">CH₄ (methane)</text>
<text x="145" y="276" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">tetrahedral</text>

<!-- Plus -->
<text x="232" y="195" font-family="Arial" font-size="24" fill="#000000" text-anchor="middle">+</text>

<!-- 2 O2 molecules -->
<!-- O2 #1 -->
<circle cx="268" cy="175" r="16" fill="#ffffff" stroke="#000000" stroke-width="2"/>
<text x="268" y="180" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">O</text>
<line x1="284" y1="172" x2="298" y2="172" stroke="#000000" stroke-width="2"/>
<line x1="284" y1="178" x2="298" y2="178" stroke="#000000" stroke-width="2"/>
<circle cx="314" cy="175" r="16" fill="#ffffff" stroke="#000000" stroke-width="2"/>
<text x="314" y="180" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">O</text>
<text x="291" y="205" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">O₂ #1</text>
<!-- O2 #2 -->
<circle cx="268" cy="228" r="16" fill="#ffffff" stroke="#000000" stroke-width="2"/>
<text x="268" y="233" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">O</text>
<line x1="284" y1="225" x2="298" y2="225" stroke="#000000" stroke-width="2"/>
<line x1="284" y1="231" x2="298" y2="231" stroke="#000000" stroke-width="2"/>
<circle cx="314" cy="228" r="16" fill="#ffffff" stroke="#000000" stroke-width="2"/>
<text x="314" y="233" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">O</text>
<text x="291" y="258" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">O₂ #2</text>

<!-- ── FLAME ── -->
<!-- stylised flame shape -->
<path d="M490,320 Q475,275 490,245 Q498,225 488,200 Q510,230 508,255 Q525,215 520,185 Q545,220 535,258 Q550,230 548,205 Q568,240 558,278 Q572,255 568,235 Q590,270 580,310 Q590,340 570,360 Q555,380 530,385 Q505,387 490,370 Q472,355 478,335 Q483,326 490,320Z" fill="#cccccc" stroke="#000000" stroke-width="1.5"/>
<!-- inner lighter flame -->
<path d="M505,330 Q498,305 505,285 Q512,268 508,255 Q520,272 518,290 Q528,268 525,248 Q540,268 535,290 Q546,272 543,258 Q558,278 550,305 Q556,288 552,275 Q568,298 558,325 Q565,342 550,355 Q536,366 518,366 Q502,362 498,348 Q502,338 505,330Z" fill="#eeeeee" stroke="#000000" stroke-width="1"/>
<text x="530" y="408" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Combustion Flame</text>
<text x="530" y="424" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">~1000°C (complete)</text>

<!-- Energy output arrows -->
<line x1="595" y1="280" x2="650" y2="255" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="680" y="252" font-family="Arial" font-size="11" fill="#000000">Heat (890 kJ/mol)</text>
<line x1="595" y1="300" x2="650" y2="320" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="660" y="325" font-family="Arial" font-size="11" fill="#000000">Light energy</text>

<!-- Reaction arrow -->
<line x1="350" y1="200" x2="420" y2="200" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="385" y="192" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">ignition</text>

<!-- ── PRODUCTS ── -->
<text x="810" y="90" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">PRODUCTS</text>
<text x="810" y="108" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">(complete combustion)</text>

<!-- CO2 molecule -->
<circle cx="735" cy="175" r="18" fill="#ffffff" stroke="#000000" stroke-width="2"/>
<text x="735" y="180" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">O</text>
<line x1="753" y1="172" x2="771" y2="172" stroke="#000000" stroke-width="2"/>
<line x1="753" y1="178" x2="771" y2="178" stroke="#000000" stroke-width="2"/>
<circle cx="785" cy="175" r="20" fill="#cccccc" stroke="#000000" stroke-width="2"/>
<text x="785" y="181" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">C</text>
<line x1="805" y1="172" x2="823" y2="172" stroke="#000000" stroke-width="2"/>
<line x1="805" y1="178" x2="823" y2="178" stroke="#000000" stroke-width="2"/>
<circle cx="835" cy="175" r="18" fill="#ffffff" stroke="#000000" stroke-width="2"/>
<text x="835" y="180" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">O</text>
<text x="785" y="212" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">CO₂ (carbon dioxide)</text>
<text x="785" y="228" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">linear, double bonds</text>

<!-- Plus -->
<text x="785" y="258" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle">+</text>

<!-- 2 H2O molecules -->
<circle cx="755" cy="300" r="16" fill="#aaaaaa" stroke="#000000" stroke-width="2"/>
<text x="755" y="305" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">O</text>
<line x1="743" y1="290" x2="732" y2="279" stroke="#000000" stroke-width="1.5"/>
<circle cx="724" cy="272" r="11" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<text x="724" y="277" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">H</text>
<line x1="767" y1="290" x2="778" y2="279" stroke="#000000" stroke-width="1.5"/>
<circle cx="786" cy="272" r="11" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<text x="786" y="277" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">H</text>
<text x="755" y="335" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H₂O #1</text>

<circle cx="835" cy="300" r="16" fill="#aaaaaa" stroke="#000000" stroke-width="2"/>
<text x="835" y="305" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">O</text>
<line x1="823" y1="290" x2="812" y2="279" stroke="#000000" stroke-width="1.5"/>
<circle cx="804" cy="272" r="11" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<text x="804" y="277" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">H</text>
<line x1="847" y1="290" x2="858" y2="279" stroke="#000000" stroke-width="1.5"/>
<circle cx="866" cy="272" r="11" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<text x="866" y="277" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">H</text>
<text x="835" y="335" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H₂O #2</text>

<!-- from flame to products arrow -->
<line x1="595" y1="270" x2="695" y2="200" stroke="#000000" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#arrow-bw)"/>
<line x1="595" y1="290" x2="695" y2="295" stroke="#000000" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#arrow-bw)"/>

<!-- ── COMPARISON TABLE ── -->
<rect x="30" y="440" width="940" height="140" fill="#f5f5f5" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="500" y="462" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Complete vs Incomplete Combustion</text>
<line x1="50" y1="470" x2="950" y2="470" stroke="#888888" stroke-width="1"/>
<text x="80"  y="490" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Condition</text>
<text x="300" y="490" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">O₂ supply</text>
<text x="480" y="490" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Carbon product</text>
<text x="680" y="490" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Flame</text>
<text x="830" y="490" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Energy released</text>

<text x="80"  y="512" font-family="Arial" font-size="11" fill="#000000">Complete</text>
<text x="300" y="512" font-family="Arial" font-size="11" fill="#000000">Excess / sufficient</text>
<text x="480" y="512" font-family="Arial" font-size="11" fill="#000000">CO₂ (only)</text>
<text x="680" y="512" font-family="Arial" font-size="11" fill="#000000">Blue / clear</text>
<text x="830" y="512" font-family="Arial" font-size="11" fill="#000000">Maximum</text>

<text x="80"  y="534" font-family="Arial" font-size="11" fill="#000000">Incomplete</text>
<text x="300" y="534" font-family="Arial" font-size="11" fill="#000000">Limited / insufficient</text>
<text x="480" y="534" font-family="Arial" font-size="11" fill="#000000">CO + C (soot)</text>
<text x="680" y="534" font-family="Arial" font-size="11" fill="#000000">Yellow / smoky</text>
<text x="830" y="534" font-family="Arial" font-size="11" fill="#000000">Less than maximum</text>

<text x="50" y="558" font-family="Arial" font-size="11" fill="#444444">Balanced equation: CH₄ + 2O₂ → CO₂ + 2H₂O   ΔH = −890 kJ/mol  (exothermic)</text>
<text x="50" y="572" font-family="Arial" font-size="11" fill="#444444">Incomplete: 2CH₄ + 3O₂ → 2CO + 4H₂O   (carbon monoxide – toxic product)</text>

</g>
</svg>`;

    // Generated from registry: precipitationReactionDiagram
    // reaction: 'AgNO3 + NaCl → AgCl + NaNO3'
    // options: showSolutions, showPrecipitate, showIons, showMixing
    static precipitationReactionDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Precipitation Reaction – Silver Chloride</metadata>
<g fill="none" stroke="#000000">

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Precipitation Reaction – Silver Chloride</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">AgNO₃(aq)  +  NaCl(aq)  →  AgCl(s)↓  +  NaNO₃(aq)</text>

<!-- ── Beaker 1: AgNO3 solution ── -->
<!-- beaker outline -->
<path d="M60,100 L60,340 Q60,360 80,360 L220,360 Q240,360 240,340 L240,100" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- liquid fill (light) -->
<rect x="62" y="180" width="176" height="178" fill="#eeeeee" stroke="none"/>
<line x1="60" y1="180" x2="240" y2="180" stroke="#888888" stroke-width="1" stroke-dasharray="3,3"/>
<!-- top rim -->
<line x1="50" y1="100" x2="250" y2="100" stroke="#000000" stroke-width="2.5"/>
<text x="150" y="80" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">AgNO₃(aq)</text>
<text x="150" y="95" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">silver nitrate solution</text>

<!-- Ag+ ions (larger circles) -->
<circle cx="100" cy="220" r="10" fill="#cccccc" stroke="#000000" stroke-width="1.5"/>
<text x="100" y="225" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Ag⁺</text>
<circle cx="150" cy="240" r="10" fill="#cccccc" stroke="#000000" stroke-width="1.5"/>
<text x="150" y="245" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Ag⁺</text>
<circle cx="200" cy="215" r="10" fill="#cccccc" stroke="#000000" stroke-width="1.5"/>
<text x="200" y="220" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Ag⁺</text>
<circle cx="120" cy="290" r="10" fill="#cccccc" stroke="#000000" stroke-width="1.5"/>
<text x="120" y="295" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Ag⁺</text>
<!-- NO3- ions (smaller) -->
<circle cx="170" cy="270" r="8" fill="#f5f5f5" stroke="#000000" stroke-width="1"/>
<text x="170" y="274" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">NO₃⁻</text>
<circle cx="95" cy="315" r="8" fill="#f5f5f5" stroke="#000000" stroke-width="1"/>
<text x="95" y="319" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">NO₃⁻</text>
<circle cx="205" cy="305" r="8" fill="#f5f5f5" stroke="#000000" stroke-width="1"/>
<text x="205" y="309" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">NO₃⁻</text>

<text x="150" y="385" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Ions in solution:</text>
<text x="150" y="400" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Ag⁺  and  NO₃⁻</text>

<!-- ── MIXING ARROW ── -->
<line x1="255" y1="225" x2="355" y2="225" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="305" y="215" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">mix</text>

<!-- ── Beaker 2: NaCl solution ── -->
<path d="M360,100 L360,340 Q360,360 380,360 L520,360 Q540,360 540,340 L540,100" stroke="#000000" stroke-width="2.5" fill="none"/>
<rect x="362" y="180" width="176" height="178" fill="#f0f0f0" stroke="none"/>
<line x1="360" y1="180" x2="540" y2="180" stroke="#888888" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="350" y1="100" x2="550" y2="100" stroke="#000000" stroke-width="2.5"/>
<text x="450" y="80" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">NaCl(aq)</text>
<text x="450" y="95" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">sodium chloride solution</text>

<!-- Na+ ions -->
<circle cx="390" cy="230" r="9" fill="#eeeeee" stroke="#000000" stroke-width="1.5"/>
<text x="390" y="235" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">Na⁺</text>
<circle cx="450" cy="250" r="9" fill="#eeeeee" stroke="#000000" stroke-width="1.5"/>
<text x="450" y="255" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">Na⁺</text>
<circle cx="510" cy="225" r="9" fill="#eeeeee" stroke="#000000" stroke-width="1.5"/>
<text x="510" y="230" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">Na⁺</text>
<!-- Cl- ions -->
<circle cx="420" cy="295" r="10" fill="#aaaaaa" stroke="#000000" stroke-width="1.5"/>
<text x="420" y="300" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Cl⁻</text>
<circle cx="480" cy="270" r="10" fill="#aaaaaa" stroke="#000000" stroke-width="1.5"/>
<text x="480" y="275" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Cl⁻</text>
<circle cx="395" cy="320" r="10" fill="#aaaaaa" stroke="#000000" stroke-width="1.5"/>
<text x="395" y="325" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Cl⁻</text>

<text x="450" y="385" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Ions in solution:</text>
<text x="450" y="400" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Na⁺  and  Cl⁻</text>

<!-- ── REACTION ARROW ── -->
<line x1="555" y1="225" x2="610" y2="225" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="583" y="215" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">react</text>

<!-- ── Beaker 3: mixed – precipitate forms ── -->
<path d="M625,100 L625,340 Q625,360 645,360 L795,360 Q815,360 815,340 L815,100" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- upper clear layer -->
<rect x="627" y="160" width="186" height="100" fill="#f5f5f5" stroke="none"/>
<!-- lower precipitate layer -->
<rect x="627" y="260" width="186" height="98" fill="#cccccc" stroke="none"/>
<line x1="625" y1="260" x2="815" y2="260" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<line x1="615" y1="100" x2="825" y2="100" stroke="#000000" stroke-width="2.5"/>
<text x="720" y="80" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">After Mixing</text>

<!-- Precipitate particles -->
<rect x="650" y="270" width="8" height="8" fill="#888888" stroke="#000000" stroke-width="1"/>
<rect x="668" y="285" width="8" height="8" fill="#888888" stroke="#000000" stroke-width="1"/>
<rect x="690" y="275" width="8" height="8" fill="#888888" stroke="#000000" stroke-width="1"/>
<rect x="712" y="290" width="8" height="8" fill="#888888" stroke="#000000" stroke-width="1"/>
<rect x="735" y="268" width="8" height="8" fill="#888888" stroke="#000000" stroke-width="1"/>
<rect x="760" y="283" width="8" height="8" fill="#888888" stroke="#000000" stroke-width="1"/>
<rect x="670" y="308" width="8" height="8" fill="#888888" stroke="#000000" stroke-width="1"/>
<rect x="698" y="316" width="8" height="8" fill="#888888" stroke="#000000" stroke-width="1"/>
<rect x="725" y="305" width="8" height="8" fill="#888888" stroke="#000000" stroke-width="1"/>
<rect x="748" y="318" width="8" height="8" fill="#888888" stroke="#000000" stroke-width="1"/>
<rect x="775" y="295" width="8" height="8" fill="#888888" stroke="#000000" stroke-width="1"/>
<!-- Settling arrow -->
<line x1="720" y1="200" x2="720" y2="258" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)" stroke-dasharray="5,3"/>
<text x="750" y="235" font-family="Arial" font-size="11" fill="#000000">settling</text>

<!-- spectator ions in solution (upper clear layer) -->
<text x="650" y="180" font-family="Arial" font-size="9" fill="#555555">Na⁺</text>
<text x="690" y="195" font-family="Arial" font-size="9" fill="#555555">NO₃⁻</text>
<text x="740" y="178" font-family="Arial" font-size="9" fill="#555555">Na⁺</text>
<text x="770" y="195" font-family="Arial" font-size="9" fill="#555555">NO₃⁻</text>

<text x="720" y="385" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">AgCl(s) precipitate ↓</text>
<text x="720" y="400" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">NaNO₃(aq) remains</text>

<!-- ── NET IONIC & EXPLANATION ── -->
<rect x="40" y="425" width="820" height="150" fill="#f5f5f5" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="450" y="447" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Ionic Equations and Explanation</text>
<line x1="60" y1="455" x2="840" y2="455" stroke="#888888" stroke-width="1"/>

<text x="60" y="474" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Molecular equation:</text>
<text x="60" y="492" font-family="Arial" font-size="12" fill="#000000">AgNO₃(aq) + NaCl(aq) → AgCl(s)↓ + NaNO₃(aq)</text>

<text x="60" y="512" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Complete ionic equation:</text>
<text x="60" y="530" font-family="Arial" font-size="12" fill="#000000">Ag⁺(aq) + NO₃⁻(aq) + Na⁺(aq) + Cl⁻(aq) → AgCl(s)↓ + Na⁺(aq) + NO₃⁻(aq)</text>

<text x="60" y="550" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Net ionic equation:</text>
<text x="60" y="568" font-family="Arial" font-size="12" fill="#000000">Ag⁺(aq) + Cl⁻(aq) → AgCl(s)↓     Ksp(AgCl) = 1.8 × 10⁻¹⁰  (very insoluble)</text>

</g>
</svg>`;

    // Generated from registry: acidBaseNeutralizationDiagram
    // acid: 'HCl', base: 'NaOH'
    // options: showReactants, showProducts, showIons, showWaterFormation
    static acidBaseNeutralizationDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Acid-Base Neutralization – HCl + NaOH</metadata>
<g fill="none" stroke="#000000">

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Acid-Base Neutralization</text>
<text x="500" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">HCl(aq)  +  NaOH(aq)  →  NaCl(aq)  +  H₂O(l)</text>

<!-- ── REACTANT: HCl acid ── -->
<rect x="40" y="80" width="200" height="260" fill="#f5f5f5" stroke="#000000" stroke-width="2" rx="6"/>
<text x="140" y="105" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">HCl (Acid)</text>
<text x="140" y="122" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">strong acid, fully ionises</text>
<line x1="60" y1="130" x2="220" y2="130" stroke="#aaaaaa" stroke-width="1"/>

<!-- H+ and Cl- ions in acid -->
<circle cx="90"  cy="158" r="12" fill="#dddddd" stroke="#000000" stroke-width="1.5"/>
<text x="90"  cy="162" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" y="162">H⁺</text>
<circle cx="130" cy="170" r="14" fill="#aaaaaa" stroke="#000000" stroke-width="1.5"/>
<text x="130" y="175" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Cl⁻</text>
<circle cx="175" cy="155" r="12" fill="#dddddd" stroke="#000000" stroke-width="1.5"/>
<text x="175" y="160" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H⁺</text>
<circle cx="95"  cy="210" r="14" fill="#aaaaaa" stroke="#000000" stroke-width="1.5"/>
<text x="95"  y="215" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Cl⁻</text>
<circle cx="155" cy="205" r="12" fill="#dddddd" stroke="#000000" stroke-width="1.5"/>
<text x="155" y="210" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H⁺</text>
<circle cx="185" cy="220" r="14" fill="#aaaaaa" stroke="#000000" stroke-width="1.5"/>
<text x="185" y="225" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Cl⁻</text>

<text x="140" y="258" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">HCl → H⁺ + Cl⁻</text>
<text x="140" y="276" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">pH &lt; 7  (acidic)</text>
<text x="140" y="294" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Donates H⁺ ions</text>
<text x="140" y="312" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(Brønsted-Lowry acid)</text>
<text x="140" y="330" font-family="Arial" font-size="10" fill="#777777" text-anchor="middle">Turns litmus red</text>

<!-- ── REACTANT: NaOH base ── -->
<rect x="300" y="80" width="200" height="260" fill="#f0f0f0" stroke="#000000" stroke-width="2" rx="6"/>
<text x="400" y="105" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">NaOH (Base)</text>
<text x="400" y="122" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">strong base, fully ionises</text>
<line x1="320" y1="130" x2="480" y2="130" stroke="#aaaaaa" stroke-width="1"/>

<!-- Na+ and OH- ions -->
<circle cx="340" cy="158" r="12" fill="#eeeeee" stroke="#000000" stroke-width="1.5"/>
<text x="340" y="163" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Na⁺</text>
<circle cx="385" cy="168" r="14" fill="#bbbbbb" stroke="#000000" stroke-width="1.5"/>
<text x="385" y="173" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">OH⁻</text>
<circle cx="440" cy="155" r="12" fill="#eeeeee" stroke="#000000" stroke-width="1.5"/>
<text x="440" y="160" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Na⁺</text>
<circle cx="350" cy="210" r="14" fill="#bbbbbb" stroke="#000000" stroke-width="1.5"/>
<text x="350" y="215" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">OH⁻</text>
<circle cx="420" cy="205" r="12" fill="#eeeeee" stroke="#000000" stroke-width="1.5"/>
<text x="420" y="210" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Na⁺</text>
<circle cx="460" cy="220" r="14" fill="#bbbbbb" stroke="#000000" stroke-width="1.5"/>
<text x="460" y="225" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">OH⁻</text>

<text x="400" y="258" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">NaOH → Na⁺ + OH⁻</text>
<text x="400" y="276" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">pH &gt; 7  (basic)</text>
<text x="400" y="294" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Donates OH⁻ ions</text>
<text x="400" y="312" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(Brønsted-Lowry base)</text>
<text x="400" y="330" font-family="Arial" font-size="10" fill="#777777" text-anchor="middle">Turns litmus blue</text>

<!-- ── REACTION ARROW ── -->
<line x1="510" y1="210" x2="595" y2="210" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="552" y="200" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">neutralise</text>

<!-- ── WATER FORMATION DETAIL ── -->
<rect x="600" y="140" width="200" height="120" fill="#f8f8f8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="700" y="163" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Water Formation</text>
<!-- H+ -->
<circle cx="660" cy="220" r="16" fill="#dddddd" stroke="#000000" stroke-width="2"/>
<text x="660" y="225" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H⁺</text>
<!-- OH- -->
<circle cx="740" cy="220" r="20" fill="#bbbbbb" stroke="#000000" stroke-width="2"/>
<text x="740" y="226" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">OH⁻</text>
<!-- arrow between -->
<line x1="678" y1="220" x2="718" y2="220" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- products below -->
<line x1="700" y1="270" x2="700" y2="310" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<circle cx="700" cy="340" r="24" fill="#aaaaaa" stroke="#000000" stroke-width="2"/>
<text x="700" y="336" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H₂O</text>
<text x="700" y="352" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">water</text>

<!-- ── PRODUCTS SECTION ── -->
<rect x="820" y="80" width="155" height="260" fill="#f5f5f5" stroke="#000000" stroke-width="2" rx="6"/>
<text x="897" y="105" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Products</text>
<line x1="835" y1="113" x2="960" y2="113" stroke="#aaaaaa" stroke-width="1"/>
<text x="897" y="140" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">NaCl(aq)</text>
<text x="897" y="158" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">sodium chloride</text>
<text x="897" y="174" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(table salt)</text>
<text x="897" y="195" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">+</text>
<text x="897" y="218" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">H₂O(l)</text>
<text x="897" y="236" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">water</text>
<line x1="835" y1="248" x2="960" y2="248" stroke="#aaaaaa" stroke-width="1"/>
<text x="897" y="266" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">pH ≈ 7</text>
<text x="897" y="284" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(neutral solution)</text>
<text x="897" y="302" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Litmus: purple</text>
<text x="897" y="320" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Exothermic: ΔH&lt;0</text>

<!-- ── NET IONIC & SPECTATORS ── -->
<rect x="40" y="380" width="940" height="190" fill="#f5f5f5" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="500" y="402" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Ionic Analysis</text>
<line x1="60" y1="410" x2="960" y2="410" stroke="#888888" stroke-width="1"/>

<text x="60" y="430" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Molecular equation:</text>
<text x="60" y="448" font-family="Arial" font-size="12" fill="#000000">HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)</text>

<text x="60" y="470" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Complete ionic equation:</text>
<text x="60" y="488" font-family="Arial" font-size="12" fill="#000000">H⁺(aq) + Cl⁻(aq) + Na⁺(aq) + OH⁻(aq) → Na⁺(aq) + Cl⁻(aq) + H₂O(l)</text>

<text x="60" y="510" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Net ionic equation:</text>
<text x="60" y="528" font-family="Arial" font-size="12" fill="#000000">H⁺(aq) + OH⁻(aq) → H₂O(l)</text>

<text x="60" y="548" font-family="Arial" font-size="11" fill="#555555">Spectator ions: Na⁺ and Cl⁻ — they do not participate in the actual reaction.</text>
<text x="60" y="564" font-family="Arial" font-size="11" fill="#555555">This net ionic equation applies to ALL strong acid + strong base neutralizations.</text>

</g>
</svg>`;

    // Generated from registry: collisionTheoryDiagram
    // options: showParticles, showCollisions, showActivationEnergy, showOrientation
    static collisionTheoryDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Collision Theory Diagram</metadata>
<g fill="none" stroke="#000000">

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Collision Theory</text>
<text x="500" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">For a reaction to occur: particles must collide with (1) sufficient energy AND (2) correct orientation</text>

<!-- ── CASE 1: SUCCESSFUL COLLISION ── -->
<rect x="30" y="72" width="290" height="220" fill="#f8f8f8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="175" y="96" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">✓ Successful Collision</text>
<text x="175" y="112" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Correct orientation + sufficient energy</text>

<!-- Particle A approaches B -->
<circle cx="80"  cy="180" r="22" fill="#cccccc" stroke="#000000" stroke-width="2"/>
<text x="80"  y="185" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">A</text>
<line x1="102" y1="180" x2="128" y2="180" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<circle cx="180" cy="180" r="22" fill="#888888" stroke="#000000" stroke-width="2"/>
<text x="180" y="185" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">B</text>
<line x1="158" y1="180" x2="132" y2="180" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- collision burst -->
<line x1="232" y1="180" x2="245" y2="180" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- Product AB -->
<rect x="255" y="164" width="46" height="32" fill="#444444" stroke="#000000" stroke-width="2" rx="3"/>
<text x="278" y="184" font-family="Arial" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">AB</text>
<text x="175" y="225" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Reaction OCCURS</text>
<text x="175" y="242" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">E_kinetic ≥ E_activation</text>
<text x="175" y="258" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">A + B → AB  + energy</text>
<text x="175" y="276" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">New bonds formed</text>

<!-- ── CASE 2: INSUFFICIENT ENERGY ── -->
<rect x="355" y="72" width="290" height="220" fill="#f8f8f8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="500" y="96" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">✗ Insufficient Energy</text>
<text x="500" y="112" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Correct orientation but too slow</text>

<circle cx="400" cy="180" r="22" fill="#cccccc" stroke="#000000" stroke-width="2"/>
<text x="400" y="185" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">A</text>
<!-- slow arrow -->
<line x1="422" y1="180" x2="436" y2="180" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)" stroke-dasharray="3,2"/>

<circle cx="490" cy="180" r="22" fill="#888888" stroke="#000000" stroke-width="2"/>
<text x="490" y="185" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">B</text>
<line x1="468" y1="180" x2="454" y2="180" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)" stroke-dasharray="3,2"/>

<!-- bounce back -->
<line x1="556" y1="180" x2="590" y2="168" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)" stroke-dasharray="4,3"/>
<line x1="556" y1="180" x2="590" y2="192" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)" stroke-dasharray="4,3"/>
<text x="610" y="175" font-family="Arial" font-size="10" fill="#000000">A</text>
<text x="610" y="195" font-family="Arial" font-size="10" fill="#000000">B</text>

<text x="500" y="225" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">No reaction — bounce off</text>
<text x="500" y="242" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">E_kinetic &lt; E_activation</text>
<text x="500" y="258" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Particles remain unreacted</text>

<!-- ── CASE 3: WRONG ORIENTATION ── -->
<rect x="680" y="72" width="290" height="220" fill="#f8f8f8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="825" y="96" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">✗ Wrong Orientation</text>
<text x="825" y="112" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Sufficient energy but wrong angle</text>

<!-- A from above, B from side - wrong orientation -->
<circle cx="785" cy="145" r="22" fill="#cccccc" stroke="#000000" stroke-width="2"/>
<text x="785" y="150" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">A</text>
<line x1="785" y1="167" x2="785" y2="185" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<circle cx="850" cy="195" r="22" fill="#888888" stroke="#000000" stroke-width="2"/>
<text x="850" y="200" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">B</text>
<line x1="828" y1="195" x2="810" y2="195" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- X mark -->
<line x1="812" y1="175" x2="826" y2="189" stroke="#000000" stroke-width="3"/>
<line x1="826" y1="175" x2="812" y2="189" stroke="#000000" stroke-width="3"/>

<text x="825" y="240" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">No reaction — glancing blow</text>
<text x="825" y="257" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Active sites not aligned</text>
<text x="825" y="274" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Only a fraction of collisions</text>
<text x="825" y="291" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">have correct geometry</text>

<!-- ── ACTIVATION ENERGY DIAGRAM ── -->
<rect x="30" y="312" width="500" height="265" fill="#f5f5f5" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="280" y="335" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Energy Profile – Activation Energy (Ea)</text>

<!-- Axes -->
<line x1="70" y1="530" x2="500" y2="530" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="70" y1="530" x2="70"  y2="350" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="290" y="555" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Reaction Progress →</text>
<text x="45" y="445" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" transform="rotate(-90,45,445)">Energy</text>

<!-- Energy curve: reactants plateau → hill → products plateau -->
<!-- reactant level at y=480; peak at y=390; product level at y=510 -->
<path d="M90,480 L140,480 Q175,478 200,430 Q230,380 265,375 Q300,370 320,375 Q345,380 370,430 Q390,478 420,505 L490,505"
      stroke="#000000" stroke-width="2.5" fill="none"/>

<!-- Reactant level line (dashed) -->
<line x1="70" y1="480" x2="175" y2="480" stroke="#555555" stroke-width="1" stroke-dasharray="4,3"/>
<text x="48" y="484" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">R</text>

<!-- Product level line (dashed) -->
<line x1="380" y1="505" x2="495" y2="505" stroke="#555555" stroke-width="1" stroke-dasharray="4,3"/>
<text x="500" y="509" font-family="Arial" font-size="10" fill="#555555">P</text>

<!-- Peak level line (dashed) -->
<line x1="70" y1="373" x2="270" y2="373" stroke="#888888" stroke-width="1" stroke-dasharray="4,3"/>

<!-- Ea arrow (reactant level to peak) -->
<line x1="110" y1="480" x2="110" y2="378" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="110" y1="480" x2="110" y2="376" stroke="#000000" stroke-width="1.5"/>
<text x="118" y="432" font-family="Arial" font-size="11" fill="#000000">Ea</text>
<text x="118" y="446" font-family="Arial" font-size="10" fill="#555555">(activation</text>
<text x="118" y="458" font-family="Arial" font-size="10" fill="#555555">energy)</text>

<!-- ΔH arrow (reactant to product) -->
<line x1="450" y1="480" x2="450" y2="508" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="460" y="498" font-family="Arial" font-size="11" fill="#000000">ΔH</text>
<text x="460" y="512" font-family="Arial" font-size="10" fill="#555555">(exo: -ve)</text>

<!-- Transition state label -->
<text x="265" y="365" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Transition State</text>
<text x="265" y="378" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">[A···B]‡</text>

<!-- ── FACTORS AFFECTING RATE ── -->
<rect x="550" y="312" width="420" height="265" fill="#f5f5f5" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="760" y="335" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Factors Affecting Reaction Rate</text>
<line x1="570" y1="343" x2="950" y2="343" stroke="#888888" stroke-width="1"/>

<text x="570" y="363" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">1. Concentration ↑</text>
<text x="570" y="380" font-family="Arial" font-size="11" fill="#555555">More particles per volume → more frequent collisions</text>

<text x="570" y="400" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">2. Temperature ↑</text>
<text x="570" y="417" font-family="Arial" font-size="11" fill="#555555">Particles move faster → more energetic collisions</text>
<text x="570" y="433" font-family="Arial" font-size="11" fill="#555555">More particles exceed Ea (Maxwell-Boltzmann)</text>

<text x="570" y="453" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">3. Surface Area ↑</text>
<text x="570" y="470" font-family="Arial" font-size="11" fill="#555555">Smaller particles expose more surface → more collisions</text>

<text x="570" y="490" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">4. Catalyst (added)</text>
<text x="570" y="507" font-family="Arial" font-size="11" fill="#555555">Provides alternative pathway with lower Ea</text>
<text x="570" y="523" font-family="Arial" font-size="11" fill="#555555">Not consumed in reaction; increases rate</text>

<text x="570" y="543" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">5. Nature of Reactants</text>
<text x="570" y="560" font-family="Arial" font-size="11" fill="#555555">Bond type and strength affect Ea required</text>

</g>
</svg>`;

    // ============================================================
    // ===== 4. STOICHIOMETRY & MOLES =============================
    // ============================================================

    // Generated from registry: moleDiagram
    // substance: 'Carbon', showParticles, showAvogadroNumber, showMolarMass, showScale
    static moleDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Mole Concept Diagram – Carbon</metadata>
<g fill="none" stroke="#000000">

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">The Mole Concept – Carbon (C)</text>
<text x="450" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">1 mole = 6.022 × 10²³ particles (Avogadro's Number)</text>

<!-- ── AVOGADRO NUMBER BOX ── -->
<rect x="280" y="70" width="340" height="68" fill="#eeeeee" stroke="#000000" stroke-width="2" rx="6"/>
<text x="450" y="97" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">N_A = 6.022 × 10²³</text>
<text x="450" y="117" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">particles per mole  (mol⁻¹)</text>
<text x="450" y="131" font-family="Arial" font-size="11" fill="#777777" text-anchor="middle">Named after Amedeo Avogadro (1776–1856)</text>

<!-- ── CARBON ATOM ── -->
<circle cx="120" cy="250" r="60" fill="#dddddd" stroke="#000000" stroke-width="2.5"/>
<text x="120" y="238" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">C</text>
<text x="120" y="258" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Carbon</text>
<text x="120" y="274" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">A_r = 12.01</text>
<text x="120" y="328" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">1 atom of C</text>
<text x="120" y="345" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">mass = 12.01 / N_A</text>
<text x="120" y="360" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">= 1.99 × 10⁻²³ g</text>

<!-- Multiply arrow -->
<line x1="188" y1="250" x2="248" y2="250" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="218" y="240" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">× N_A</text>

<!-- ── MOLE PILE of atoms representation ── -->
<ellipse cx="380" cy="290" rx="80" ry="25" fill="#cccccc" stroke="#000000" stroke-width="1.5"/>
<!-- stacked circles to represent a "pile" of atoms -->
<circle cx="340" cy="265" r="10" fill="#aaaaaa" stroke="#000000" stroke-width="1"/>
<circle cx="358" cy="255" r="10" fill="#aaaaaa" stroke="#000000" stroke-width="1"/>
<circle cx="377" cy="250" r="10" fill="#aaaaaa" stroke="#000000" stroke-width="1"/>
<circle cx="396" cy="254" r="10" fill="#aaaaaa" stroke="#000000" stroke-width="1"/>
<circle cx="415" cy="263" r="10" fill="#aaaaaa" stroke="#000000" stroke-width="1"/>
<circle cx="350" cy="240" r="8"  fill="#bbbbbb" stroke="#000000" stroke-width="1"/>
<circle cx="368" cy="233" r="8"  fill="#bbbbbb" stroke="#000000" stroke-width="1"/>
<circle cx="387" cy="230" r="8"  fill="#bbbbbb" stroke="#000000" stroke-width="1"/>
<circle cx="405" cy="237" r="8"  fill="#bbbbbb" stroke="#000000" stroke-width="1"/>
<circle cx="360" cy="221" r="6"  fill="#cccccc" stroke="#000000" stroke-width="1"/>
<circle cx="378" cy="215" r="6"  fill="#cccccc" stroke="#000000" stroke-width="1"/>
<circle cx="394" cy="221" r="6"  fill="#cccccc" stroke="#000000" stroke-width="1"/>
<text x="380" y="328" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">1 mole of C atoms</text>
<text x="380" y="345" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">= 6.022 × 10²³ atoms</text>
<text x="380" y="361" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">= 12.01 g (molar mass)</text>

<!-- Arrow to balance -->
<line x1="468" y1="250" x2="535" y2="250" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="501" y="240" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">weighs</text>

<!-- ── BALANCE showing 12.01 g ── -->
<!-- balance platform -->
<rect x="540" y="270" width="120" height="10" fill="#888888" stroke="#000000" stroke-width="1.5"/>
<!-- pile on balance -->
<ellipse cx="600" cy="268" rx="42" ry="12" fill="#cccccc" stroke="#000000" stroke-width="1"/>
<text x="600" y="252" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">12.01 g</text>
<!-- scale stand -->
<line x1="600" y1="280" x2="600" y2="320" stroke="#000000" stroke-width="3"/>
<path d="M560,320 Q600,310 640,320" stroke="#000000" stroke-width="2" fill="none"/>
<text x="600" y="345" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Molar Mass</text>
<text x="600" y="361" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">M = 12.01 g/mol</text>

<!-- ── SCALE COMPARISON ── -->
<rect x="660" y="160" width="220" height="260" fill="#f5f5f5" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="770" y="182" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Scale Perspective</text>
<line x1="680" y1="190" x2="860" y2="190" stroke="#888888" stroke-width="1"/>
<text x="680" y="212" font-family="Arial" font-size="11" fill="#000000">1 mole of pennies would</text>
<text x="680" y="228" font-family="Arial" font-size="11" fill="#000000">cover Earth's surface to</text>
<text x="680" y="244" font-family="Arial" font-size="11" fill="#000000">a depth of 300 metres.</text>
<line x1="680" y1="254" x2="860" y2="254" stroke="#dddddd" stroke-width="1"/>
<text x="680" y="272" font-family="Arial" font-size="11" fill="#000000">1 mole of water = 18 g</text>
<text x="680" y="288" font-family="Arial" font-size="11" fill="#000000">= about 18 mL (≈ 18 cm³)</text>
<line x1="680" y1="298" x2="860" y2="298" stroke="#dddddd" stroke-width="1"/>
<text x="680" y="316" font-family="Arial" font-size="11" fill="#000000">1 mole of air molecules</text>
<text x="680" y="332" font-family="Arial" font-size="11" fill="#000000">at STP occupies 22.4 L</text>
<line x1="680" y1="342" x2="860" y2="342" stroke="#dddddd" stroke-width="1"/>
<text x="680" y="360" font-family="Arial" font-size="11" fill="#000000">Mole: bridge between</text>
<text x="680" y="376" font-family="Arial" font-size="11" fill="#000000">atomic scale and lab scale</text>
<text x="680" y="400" font-family="Arial" font-size="10" fill="#777777">N_A chosen so that</text>
<text x="680" y="414" font-family="Arial" font-size="10" fill="#777777">M(g/mol) = A_r (amu)</text>

<!-- ── KEY FORMULA BOX ── -->
<rect x="30" y="400" width="610" height="170" fill="#f0f0f0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="335" y="422" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Key Mole Relationships</text>
<line x1="50" y1="430" x2="620" y2="430" stroke="#888888" stroke-width="1"/>

<text x="50" y="452" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Number of moles:</text>
<text x="50" y="470" font-family="Arial" font-size="12" fill="#000000">n = m / M          (mass in g, molar mass in g/mol)</text>

<text x="50" y="494" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Number of particles:</text>
<text x="50" y="512" font-family="Arial" font-size="12" fill="#000000">N = n × N_A       (N_A = 6.022 × 10²³ mol⁻¹)</text>

<text x="50" y="536" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Molar volume (ideal gas, STP):</text>
<text x="50" y="554" font-family="Arial" font-size="12" fill="#000000">V = n × 22.4 L    (0°C, 1 atm)</text>

</g>
</svg>`;

    // Generated from registry: stoichiometryMapDiagram
    // options: showMass, showMoles, showVolume, showParticles, showConversionFactors
    static stoichiometryMapDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Stoichiometry Conversion Map</metadata>
<g fill="none" stroke="#000000">

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-bw-r" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto">
    <polygon points="10 0, 0 3, 10 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Stoichiometry Conversion Pathways</text>
<text x="500" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Interconverting mass, moles, volume, and number of particles</text>

<!-- ══ CENTRAL NODE: MOLES ══ -->
<ellipse cx="500" cy="350" rx="90" ry="55" fill="#cccccc" stroke="#000000" stroke-width="3"/>
<text x="500" y="342" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">MOLES</text>
<text x="500" y="362" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">(n)</text>
<text x="500" y="378" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">unit: mol</text>

<!-- ══ NODE: MASS ══ -->
<rect x="80" y="135" width="160" height="75" fill="#eeeeee" stroke="#000000" stroke-width="2" rx="8"/>
<text x="160" y="166" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">MASS</text>
<text x="160" y="184" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">(m)</text>
<text x="160" y="200" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">unit: grams (g)</text>

<!-- ══ NODE: PARTICLES ══ -->
<rect x="760" y="135" width="160" height="75" fill="#eeeeee" stroke="#000000" stroke-width="2" rx="8"/>
<text x="840" y="160" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">PARTICLES</text>
<text x="840" y="178" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">(N)</text>
<text x="840" y="198" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">atoms/molecules/ions</text>

<!-- ══ NODE: VOLUME (gas) ══ -->
<rect x="80" y="530" width="160" height="75" fill="#eeeeee" stroke="#000000" stroke-width="2" rx="8"/>
<text x="160" y="558" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">VOLUME</text>
<text x="160" y="575" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">(V) – gas</text>
<text x="160" y="593" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">unit: litres (L)</text>

<!-- ══ NODE: VOLUME (solution) ══ -->
<rect x="760" y="530" width="160" height="75" fill="#eeeeee" stroke="#000000" stroke-width="2" rx="8"/>
<text x="840" y="555" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">VOLUME</text>
<text x="840" y="572" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">(V) – solution</text>
<text x="840" y="590" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">unit: litres (L)</text>

<!-- ══ ARROWS: Mass ↔ Moles ══ -->
<!-- Mass → Moles (÷ M) -->
<line x1="240" y1="200" x2="415" y2="312" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<rect x="270" y="238" width="110" height="30" fill="#ffffff" stroke="#888888" stroke-width="1" rx="3"/>
<text x="325" y="250" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">÷ Molar Mass (M)</text>
<text x="325" y="263" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">n = m / M</text>

<!-- Moles → Mass (× M) -->
<line x1="415" y1="312" x2="240" y2="200" stroke="#000000" stroke-width="1" stroke-dasharray="5,3" marker-end="url(#arrow-bw-r)"/>
<rect x="165" y="268" width="110" height="30" fill="#ffffff" stroke="#888888" stroke-width="1" rx="3"/>
<text x="220" y="280" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">× Molar Mass (M)</text>
<text x="220" y="293" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">m = n × M</text>

<!-- ══ ARROWS: Particles ↔ Moles ══ -->
<!-- Particles → Moles (÷ NA) -->
<line x1="760" y1="200" x2="588" y2="312" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<rect x="628" y="238" width="116" height="30" fill="#ffffff" stroke="#888888" stroke-width="1" rx="3"/>
<text x="686" y="250" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">÷ Avogadro (N_A)</text>
<text x="686" y="263" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">n = N / N_A</text>

<!-- Moles → Particles (× NA) -->
<line x1="588" y1="312" x2="760" y2="200" stroke="#000000" stroke-width="1" stroke-dasharray="5,3" marker-end="url(#arrow-bw-r)"/>
<rect x="720" y="268" width="116" height="30" fill="#ffffff" stroke="#888888" stroke-width="1" rx="3"/>
<text x="778" y="280" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">× Avogadro (N_A)</text>
<text x="778" y="293" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">N = n × N_A</text>

<!-- ══ ARROWS: Gas Volume ↔ Moles ══ -->
<!-- Gas Volume → Moles (÷ 22.4) -->
<line x1="240" y1="543" x2="415" y2="393" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<rect x="255" y="455" width="120" height="30" fill="#ffffff" stroke="#888888" stroke-width="1" rx="3"/>
<text x="315" y="467" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">÷ 22.4 L/mol</text>
<text x="315" y="480" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">n = V / 22.4 (STP)</text>

<!-- Moles → Gas Volume (× 22.4) -->
<line x1="415" y1="393" x2="240" y2="543" stroke="#000000" stroke-width="1" stroke-dasharray="5,3" marker-end="url(#arrow-bw-r)"/>
<rect x="152" y="455" width="100" height="30" fill="#ffffff" stroke="#888888" stroke-width="1" rx="3"/>
<text x="202" y="467" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">× 22.4 L/mol</text>
<text x="202" y="480" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">V = n × 22.4</text>

<!-- ══ ARROWS: Solution Volume ↔ Moles ══ -->
<!-- Solution → Moles (× C) -->
<line x1="760" y1="543" x2="588" y2="393" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<rect x="625" y="455" width="120" height="30" fill="#ffffff" stroke="#888888" stroke-width="1" rx="3"/>
<text x="685" y="467" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">× Concentration</text>
<text x="685" y="480" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">n = C × V</text>

<!-- Moles → Solution Volume (÷ C) -->
<line x1="588" y1="393" x2="760" y2="543" stroke="#000000" stroke-width="1" stroke-dasharray="5,3" marker-end="url(#arrow-bw-r)"/>
<rect x="740" y="455" width="100" height="30" fill="#ffffff" stroke="#888888" stroke-width="1" rx="3"/>
<text x="790" y="467" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">÷ Concentration</text>
<text x="790" y="480" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">V = n / C</text>

<!-- ══ STOICHIOMETRY RATIO (mole ↔ mole via balanced eq) ══ -->
<rect x="355" y="440" width="290" height="52" fill="#dddddd" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="500" y="461" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Mole Ratio (from balanced equation)</text>
<text x="500" y="479" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">× (coeff_B / coeff_A)  converts n_A → n_B</text>

<!-- loop arrow for mole ratio -->
<path d="M440,405 Q440,440 500,445 Q560,450 560,405" stroke="#000000" stroke-width="1.5" fill="none" stroke-dasharray="6,3" marker-end="url(#arrow-bw)"/>

<!-- ══ FORMULA SUMMARY ══ -->
<rect x="30" y="620" width="940" height="68" fill="#f5f5f5" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="500" y="640" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Summary Formulae</text>
<text x="60"  y="658" font-family="Arial" font-size="11" fill="#000000">n = m/M</text>
<text x="180" y="658" font-family="Arial" font-size="11" fill="#000000">m = n × M</text>
<text x="310" y="658" font-family="Arial" font-size="11" fill="#000000">N = n × N_A</text>
<text x="460" y="658" font-family="Arial" font-size="11" fill="#000000">V(gas) = n × 22.4</text>
<text x="630" y="658" font-family="Arial" font-size="11" fill="#000000">n(soln) = C × V</text>
<text x="790" y="658" font-family="Arial" font-size="11" fill="#000000">Mole ratio from equation</text>
<text x="60"  y="676" font-family="Arial" font-size="10" fill="#555555">n: moles  m: mass(g)  M: molar mass(g/mol)  N_A: 6.022×10²³  C: conc(mol/L)  V: vol(L)</text>

</g>
</svg>`;

    // Generated from registry: limitingReagentDiagram
    // reaction: '2H2 + O2 → 2H2O', H2Amount=3, O2Amount=1
    // options: showReactants, showProducts, showExcess, showLimiting
    static limitingReagentDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Limiting Reagent – 2H2 + O2 → 2H2O</metadata>
<g fill="none" stroke="#000000">

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Limiting Reagent: 2H₂ + O₂ → 2H₂O</text>
<text x="500" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Given: 3 mol H₂  and  1 mol O₂  — Which runs out first?</text>

<!-- ── REACTANTS BEFORE REACTION ── -->
<text x="160" y="88" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Before Reaction</text>

<!-- H2 molecules (3 mol → draw 3 symbols) -->
<rect x="30" y="100" width="260" height="200" fill="#f5f5f5" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="160" y="122" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">H₂:  3 mol</text>

<!-- draw 3 H2 molecules (each as H-H pair) -->
<circle cx="80"  cy="160" r="14" fill="#dddddd" stroke="#000000" stroke-width="1.5"/>
<text x="80"  y="165" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<line x1="94" y1="160" x2="106" y2="160" stroke="#000000" stroke-width="2"/>
<circle cx="120" cy="160" r="14" fill="#dddddd" stroke="#000000" stroke-width="1.5"/>
<text x="120" y="165" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<text x="100" y="185" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">H₂ #1</text>

<circle cx="80"  cy="225" r="14" fill="#dddddd" stroke="#000000" stroke-width="1.5"/>
<text x="80"  y="230" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<line x1="94" y1="225" x2="106" y2="225" stroke="#000000" stroke-width="2"/>
<circle cx="120" cy="225" r="14" fill="#dddddd" stroke="#000000" stroke-width="1.5"/>
<text x="120" y="230" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<text x="100" y="248" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">H₂ #2</text>

<circle cx="165" cy="160" r="14" fill="#dddddd" stroke="#000000" stroke-width="1.5"/>
<text x="165" y="165" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<line x1="179" y1="160" x2="191" y2="160" stroke="#000000" stroke-width="2"/>
<circle cx="205" cy="160" r="14" fill="#dddddd" stroke="#000000" stroke-width="1.5"/>
<text x="205" y="165" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<text x="185" y="185" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">H₂ #3</text>

<!-- O2 molecule (1 mol → 1 symbol) -->
<rect x="30" y="310" width="260" height="120" fill="#f5f5f5" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="160" y="332" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">O₂:  1 mol</text>
<circle cx="110" cy="380" r="18" fill="#ffffff" stroke="#000000" stroke-width="2"/>
<text x="110" y="385" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">O</text>
<line x1="128" y1="377" x2="150" y2="377" stroke="#000000" stroke-width="2"/>
<line x1="128" y1="383" x2="150" y2="383" stroke="#000000" stroke-width="2"/>
<circle cx="168" cy="380" r="18" fill="#ffffff" stroke="#000000" stroke-width="2"/>
<text x="168" y="385" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">O</text>
<text x="139" y="410" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">O₂ #1</text>

<!-- ── STOICHIOMETRY ANALYSIS ── -->
<rect x="308" y="100" width="290" height="335" fill="#f0f0f0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="453" y="124" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Stoichiometry Analysis</text>
<line x1="325" y1="132" x2="580" y2="132" stroke="#888888" stroke-width="1"/>
<text x="325" y="152" font-family="Arial" font-size="12" fill="#000000">Balanced equation:</text>
<text x="325" y="170" font-family="Arial" font-size="12" fill="#000000">2H₂ + O₂ → 2H₂O</text>
<text x="325" y="190" font-family="Arial" font-size="11" fill="#555555">Mole ratio: 2 mol H₂ per 1 mol O₂</text>
<line x1="325" y1="200" x2="580" y2="200" stroke="#cccccc" stroke-width="1"/>

<text x="325" y="220" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Step 1: Given amounts</text>
<text x="325" y="238" font-family="Arial" font-size="11" fill="#000000">Available H₂ = 3 mol</text>
<text x="325" y="254" font-family="Arial" font-size="11" fill="#000000">Available O₂ = 1 mol</text>
<line x1="325" y1="264" x2="580" y2="264" stroke="#cccccc" stroke-width="1"/>

<text x="325" y="284" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Step 2: O₂ needed for all H₂</text>
<text x="325" y="302" font-family="Arial" font-size="11" fill="#000000">3 mol H₂ × (1 mol O₂ / 2 mol H₂)</text>
<text x="325" y="318" font-family="Arial" font-size="11" fill="#000000">= 1.5 mol O₂ needed</text>
<text x="325" y="334" font-family="Arial" font-size="11" fill="#000000">But only 1 mol O₂ available!</text>
<line x1="325" y1="344" x2="580" y2="344" stroke="#cccccc" stroke-width="1"/>

<text x="325" y="364" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Step 3: Identify Limiting Reagent</text>
<rect x="325" y="372" width="248" height="28" fill="#cccccc" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="449" y="391" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">O₂ is the LIMITING REAGENT</text>
<text x="325" y="418" font-family="Arial" font-size="11" fill="#000000">H₂ that reacts = 1 mol O₂ × 2 = 2 mol</text>
<text x="325" y="434" font-family="Arial" font-size="11" fill="#000000">H₂O produced = 1 mol O₂ × 2 = 2 mol</text>

<!-- ── REACTION ARROW ── -->
<line x1="610" y1="265" x2="675" y2="265" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="642" y="255" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">react</text>

<!-- ── AFTER REACTION ── -->
<text x="840" y="88" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">After Reaction</text>

<!-- Products: 2 H2O molecules -->
<rect x="685" y="100" width="300" height="200" fill="#f5f5f5" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="835" y="122" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">H₂O produced: 2 mol</text>

<circle cx="735" cy="175" r="18" fill="#999999" stroke="#000000" stroke-width="2"/>
<text x="735" y="181" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">O</text>
<line x1="719" y1="163" x2="705" y2="150" stroke="#000000" stroke-width="1.5"/>
<circle cx="697" cy="143" r="12" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<text x="697" y="148" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">H</text>
<line x1="751" y1="163" x2="765" y2="150" stroke="#000000" stroke-width="1.5"/>
<circle cx="773" cy="143" r="12" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<text x="773" y="148" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">H</text>
<text x="735" y="207" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">H₂O #1</text>

<circle cx="870" cy="175" r="18" fill="#999999" stroke="#000000" stroke-width="2"/>
<text x="870" y="181" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">O</text>
<line x1="854" y1="163" x2="840" y2="150" stroke="#000000" stroke-width="1.5"/>
<circle cx="832" cy="143" r="12" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<text x="832" y="148" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">H</text>
<line x1="886" y1="163" x2="900" y2="150" stroke="#000000" stroke-width="1.5"/>
<circle cx="908" cy="143" r="12" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<text x="908" y="148" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">H</text>
<text x="870" y="207" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">H₂O #2</text>

<!-- Excess H2 (1 mol remaining) -->
<rect x="685" y="310" width="300" height="90" fill="#f5f5f5" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="835" y="332" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Excess H₂: 1 mol remaining</text>
<circle cx="745" cy="365" r="13" fill="#dddddd" stroke="#000000" stroke-width="1.5"/>
<text x="745" y="370" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">H</text>
<line x1="758" y1="365" x2="772" y2="365" stroke="#000000" stroke-width="1.5"/>
<circle cx="785" cy="365" r="13" fill="#dddddd" stroke="#000000" stroke-width="1.5"/>
<text x="785" y="370" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">H</text>
<text x="800" y="370" font-family="Arial" font-size="11" fill="#555555">← excess (unreacted)</text>

<!-- O2 depleted label -->
<rect x="685" y="410" width="300" height="50" fill="#cccccc" stroke="#000000" stroke-width="2" rx="5"/>
<text x="835" y="432" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">O₂: 0 mol — fully consumed</text>
<text x="835" y="450" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(Limiting Reagent)</text>

<!-- ── SUMMARY ── -->
<rect x="30" y="468" width="940" height="112" fill="#f0f0f0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="500" y="490" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Summary</text>
<line x1="50" y1="498" x2="950" y2="498" stroke="#888888" stroke-width="1"/>
<text x="60"  y="516" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Limiting reagent:</text>
<text x="200" y="516" font-family="Arial" font-size="12" fill="#000000">O₂ (1 mol) — runs out first and stops the reaction</text>
<text x="60"  y="536" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Excess reagent:</text>
<text x="200" y="536" font-family="Arial" font-size="12" fill="#000000">H₂ — 1 mol unreacted (3 – 2 = 1 mol remaining)</text>
<text x="60"  y="556" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Products formed:</text>
<text x="200" y="556" font-family="Arial" font-size="12" fill="#000000">2 mol H₂O (theoretical yield determined by limiting reagent)</text>
<text x="60"  y="572" font-family="Arial" font-size="11" fill="#555555">To find limiting reagent: divide available moles by stoichiometric coefficient for each reactant — smallest value is limiting.</text>

</g>
</svg>`;

    // Generated from registry: percentYieldDiagram
    // theoreticalYield: 10, actualYield: 8.5
    // options: showTheoretical, showActual, showComparison, showCalculation
    static percentYieldDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Percent Yield Diagram</metadata>
<g fill="none" stroke="#000000">

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Percent Yield</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Theoretical: 10 g  vs  Actual: 8.5 g  →  % Yield = 85%</text>

<!-- ── BAR CHART COMPARISON ── -->
<!-- Axes -->
<line x1="80" y1="80" x2="80" y2="390" stroke="#000000" stroke-width="2"/>
<line x1="80" y1="390" x2="550" y2="390" stroke="#000000" stroke-width="2"/>

<!-- Y axis ticks and labels (0 to 10 g) -->
<line x1="75" y1="390" x2="80" y2="390" stroke="#000000" stroke-width="1.5"/>
<text x="68" y="394" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">0</text>
<line x1="75" y1="359" x2="80" y2="359" stroke="#000000" stroke-width="1.5"/>
<text x="68" y="363" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">1</text>
<line x1="75" y1="328" x2="80" y2="328" stroke="#000000" stroke-width="1.5"/>
<text x="68" y="332" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">2</text>
<line x1="75" y1="297" x2="80" y2="297" stroke="#000000" stroke-width="1.5"/>
<text x="68" y="301" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">3</text>
<line x1="75" y1="266" x2="80" y2="266" stroke="#000000" stroke-width="1.5"/>
<text x="68" y="270" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">4</text>
<line x1="75" y1="235" x2="80" y2="235" stroke="#000000" stroke-width="1.5"/>
<text x="68" y="239" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">5</text>
<line x1="75" y1="204" x2="80" y2="204" stroke="#000000" stroke-width="1.5"/>
<text x="68" y="208" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">6</text>
<line x1="75" y1="173" x2="80" y2="173" stroke="#000000" stroke-width="1.5"/>
<text x="68" y="177" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">7</text>
<line x1="75" y1="142" x2="80" y2="142" stroke="#000000" stroke-width="1.5"/>
<text x="68" y="146" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">8</text>
<line x1="75" y1="111" x2="80" y2="111" stroke="#000000" stroke-width="1.5"/>
<text x="68" y="115" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">9</text>
<line x1="75" y1="80"  x2="80" y2="80"  stroke="#000000" stroke-width="1.5"/>
<text x="68" y="84"  font-family="Arial" font-size="11" fill="#000000" text-anchor="end">10</text>

<!-- Y axis label -->
<text x="30" y="235" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" transform="rotate(-90,30,235)">Yield (g)</text>

<!-- THEORETICAL YIELD BAR: 10 g = full height (80 to 390 = 310px for 10 g; 31px per g) -->
<!-- 10 g → bar from y=390 upward 310px → top at y=80 -->
<rect x="130" y="80" width="100" height="310" fill="#888888" stroke="#000000" stroke-width="2"/>
<text x="180" y="72" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">10.0 g</text>
<text x="180" y="415" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Theoretical</text>
<text x="180" y="431" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Yield</text>

<!-- ACTUAL YIELD BAR: 8.5 g → 8.5×31 = 263.5px → top at 390-263.5 = 126.5 ≈ 127 -->
<rect x="300" y="127" width="100" height="263" fill="#cccccc" stroke="#000000" stroke-width="2"/>
<text x="350" y="119" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">8.5 g</text>
<text x="350" y="415" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Actual</text>
<text x="350" y="431" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Yield</text>

<!-- Difference bracket between the two bars -->
<line x1="230" y1="80"  x2="230" y2="127" stroke="#000000" stroke-width="1.5"/>
<line x1="226" y1="80"  x2="234" y2="80"  stroke="#000000" stroke-width="1.5"/>
<line x1="226" y1="127" x2="234" y2="127" stroke="#000000" stroke-width="1.5"/>
<text x="246" y="97"  font-family="Arial" font-size="11" fill="#000000">Δ = 1.5 g</text>
<text x="246" y="112" font-family="Arial" font-size="10" fill="#555555">(loss)</text>

<!-- % yield label on actual bar -->
<text x="350" y="200" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">85%</text>

<!-- dashed line at actual yield height across both bars -->
<line x1="80" y1="127" x2="490" y2="127" stroke="#555555" stroke-width="1" stroke-dasharray="5,4"/>

<!-- ── CALCULATION BOX ── -->
<rect x="460" y="80" width="310" height="205" fill="#f5f5f5" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="615" y="104" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Calculation</text>
<line x1="480" y1="112" x2="750" y2="112" stroke="#888888" stroke-width="1"/>

<text x="480" y="132" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Formula:</text>
<text x="480" y="152" font-family="Arial" font-size="13" fill="#000000">% Yield = (Actual / Theoretical)</text>
<text x="480" y="170" font-family="Arial" font-size="13" fill="#000000">                × 100%</text>
<line x1="480" y1="180" x2="750" y2="180" stroke="#cccccc" stroke-width="1"/>

<text x="480" y="200" font-family="Arial" font-size="12" fill="#000000">% Yield = (8.5 / 10) × 100%</text>
<text x="480" y="220" font-family="Arial" font-size="12" fill="#000000">         = 0.85 × 100%</text>
<rect x="480" y="232" width="268" height="30" fill="#cccccc" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="614" y="252" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">% Yield = 85%</text>

<!-- ── CAUSES OF YIELD LOSS ── -->
<rect x="30" y="455" width="740" height="130" fill="#f5f5f5" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="400" y="477" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Why Actual Yield Is Less Than Theoretical Yield</text>
<line x1="50" y1="485" x2="750" y2="485" stroke="#888888" stroke-width="1"/>
<text x="50" y="504" font-family="Arial" font-size="11" fill="#000000">• Incomplete reaction: equilibrium not fully reached</text>
<text x="50" y="522" font-family="Arial" font-size="11" fill="#000000">• Side reactions: reactants form unwanted by-products</text>
<text x="50" y="540" font-family="Arial" font-size="11" fill="#000000">• Product loss during separation, filtration, or transfer</text>
<text x="50" y="558" font-family="Arial" font-size="11" fill="#000000">• Measurement errors and impure starting materials</text>
<text x="400" y="576" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">A 100% yield is theoretically possible but rarely achieved in practice.</text>

</g>
</svg>`;

    // Generated from registry: empiricalFormulaDerivation
    // compound: 'glucose', percentComposition: {C:40, H:6.7, O:53.3}
    // options: showPercentages, showMoles, showRatio, showFormula
    static empiricalFormulaDerivationSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="700" viewBox="0 0 900 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Empirical Formula Determination – Glucose</metadata>
<g fill="none" stroke="#000000">

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Empirical Formula Determination – Glucose</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">From percent composition to simplest whole-number ratio</text>

<!-- ── STEP FLOW ── -->
<!-- Steps arranged as: Step 1 → Step 2 → Step 3 → Step 4 →  Result -->

<!-- Step 1: Percent composition -->
<rect x="30" y="75" width="190" height="145" fill="#eeeeee" stroke="#000000" stroke-width="2" rx="6"/>
<text x="125" y="98"  font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Step 1</text>
<text x="125" y="113" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">% Composition</text>
<line x1="50" y1="120" x2="200" y2="120" stroke="#aaaaaa" stroke-width="1"/>
<text x="50" y="140" font-family="Arial" font-size="13" fill="#000000">C:  40.0 %</text>
<text x="50" y="158" font-family="Arial" font-size="13" fill="#000000">H:    6.7 %</text>
<text x="50" y="176" font-family="Arial" font-size="13" fill="#000000">O:  53.3 %</text>
<text x="50" y="196" font-family="Arial" font-size="10" fill="#555555">Sum = 100 %</text>
<text x="50" y="212" font-family="Arial" font-size="10" fill="#555555">Assume 100 g sample</text>

<!-- Arrow 1→2 -->
<line x1="222" y1="148" x2="258" y2="148" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- Step 2: Convert to moles -->
<rect x="260" y="75" width="190" height="145" fill="#eeeeee" stroke="#000000" stroke-width="2" rx="6"/>
<text x="355" y="98"  font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Step 2</text>
<text x="355" y="113" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Grams → Moles (÷ M)</text>
<line x1="278" y1="120" x2="432" y2="120" stroke="#aaaaaa" stroke-width="1"/>
<text x="278" y="140" font-family="Arial" font-size="12" fill="#000000">C: 40/12.01 = 3.33 mol</text>
<text x="278" y="158" font-family="Arial" font-size="12" fill="#000000">H: 6.7/1.008 = 6.65 mol</text>
<text x="278" y="176" font-family="Arial" font-size="12" fill="#000000">O: 53.3/16.00 = 3.33 mol</text>
<text x="278" y="200" font-family="Arial" font-size="10" fill="#555555">Divide each mass by the</text>
<text x="278" y="214" font-family="Arial" font-size="10" fill="#555555">atomic mass (g/mol)</text>

<!-- Arrow 2→3 -->
<line x1="452" y1="148" x2="488" y2="148" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- Step 3: Divide by smallest -->
<rect x="490" y="75" width="190" height="145" fill="#eeeeee" stroke="#000000" stroke-width="2" rx="6"/>
<text x="585" y="98"  font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Step 3</text>
<text x="585" y="113" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Divide by Smallest</text>
<line x1="508" y1="120" x2="662" y2="120" stroke="#aaaaaa" stroke-width="1"/>
<text x="508" y="138" font-family="Arial" font-size="11" fill="#555555">Smallest = 3.33 mol (C or O)</text>
<text x="508" y="156" font-family="Arial" font-size="12" fill="#000000">C: 3.33/3.33 = 1.00</text>
<text x="508" y="174" font-family="Arial" font-size="12" fill="#000000">H: 6.65/3.33 = 2.00</text>
<text x="508" y="192" font-family="Arial" font-size="12" fill="#000000">O: 3.33/3.33 = 1.00</text>
<text x="508" y="212" font-family="Arial" font-size="10" fill="#555555">Ratios are whole numbers</text>

<!-- Arrow 3→4 -->
<line x1="682" y1="148" x2="718" y2="148" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- Step 4: Empirical formula -->
<rect x="720" y="75" width="160" height="145" fill="#cccccc" stroke="#000000" stroke-width="2" rx="6"/>
<text x="800" y="98"  font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Step 4</text>
<text x="800" y="113" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Empirical Formula</text>
<line x1="738" y1="120" x2="862" y2="120" stroke="#aaaaaa" stroke-width="1"/>
<text x="800" y="155" font-family="Arial" font-size="28" fill="#000000" text-anchor="middle" font-weight="bold">CH₂O</text>
<text x="800" y="180" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">C:H:O = 1:2:1</text>
<text x="738" y="205" font-family="Arial" font-size="11" fill="#555555">M(CH₂O) = 30.03 g/mol</text>

<!-- ── DETAILED CALCULATION TABLE ── -->
<rect x="30" y="248" width="840" height="220" fill="#f5f5f5" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="450" y="270" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Detailed Calculation Table</text>
<line x1="50" y1="278" x2="850" y2="278" stroke="#888888" stroke-width="1"/>

<!-- Header row -->
<text x="70"  y="297" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Element</text>
<text x="175" y="297" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">% Mass</text>
<text x="275" y="297" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Mass in 100 g</text>
<text x="415" y="297" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Atomic Mass</text>
<text x="545" y="297" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Moles (÷M)</text>
<text x="660" y="297" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Ratio (÷smallest)</text>
<text x="790" y="297" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Whole #</text>
<line x1="50" y1="305" x2="850" y2="305" stroke="#aaaaaa" stroke-width="1"/>

<!-- Carbon row -->
<text x="70"  y="330" font-family="Arial" font-size="12" fill="#000000">Carbon (C)</text>
<text x="175" y="330" font-family="Arial" font-size="12" fill="#000000">40.0 %</text>
<text x="275" y="330" font-family="Arial" font-size="12" fill="#000000">40.0 g</text>
<text x="415" y="330" font-family="Arial" font-size="12" fill="#000000">12.01 g/mol</text>
<text x="545" y="330" font-family="Arial" font-size="12" fill="#000000">3.331 mol</text>
<text x="660" y="330" font-family="Arial" font-size="12" fill="#000000">3.331/3.331 = 1.00</text>
<text x="790" y="330" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">1</text>

<!-- Hydrogen row -->
<text x="70"  y="358" font-family="Arial" font-size="12" fill="#000000">Hydrogen (H)</text>
<text x="175" y="358" font-family="Arial" font-size="12" fill="#000000">6.7 %</text>
<text x="275" y="358" font-family="Arial" font-size="12" fill="#000000">6.7 g</text>
<text x="415" y="358" font-family="Arial" font-size="12" fill="#000000">1.008 g/mol</text>
<text x="545" y="358" font-family="Arial" font-size="12" fill="#000000">6.647 mol</text>
<text x="660" y="358" font-family="Arial" font-size="12" fill="#000000">6.647/3.331 = 2.00</text>
<text x="790" y="358" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">2</text>

<!-- Oxygen row -->
<text x="70"  y="386" font-family="Arial" font-size="12" fill="#000000">Oxygen (O)</text>
<text x="175" y="386" font-family="Arial" font-size="12" fill="#000000">53.3 %</text>
<text x="275" y="386" font-family="Arial" font-size="12" fill="#000000">53.3 g</text>
<text x="415" y="386" font-family="Arial" font-size="12" fill="#000000">16.00 g/mol</text>
<text x="545" y="386" font-family="Arial" font-size="12" fill="#000000">3.331 mol</text>
<text x="660" y="386" font-family="Arial" font-size="12" fill="#000000">3.331/3.331 = 1.00</text>
<text x="790" y="386" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">1</text>

<line x1="50" y1="396" x2="850" y2="396" stroke="#aaaaaa" stroke-width="1"/>
<rect x="600" y="400" width="240" height="30" fill="#cccccc" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="720" y="420" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Empirical Formula: CH₂O</text>
<text x="50" y="455" font-family="Arial" font-size="11" fill="#555555">Note: if ratios are not whole numbers (e.g. 1.5), multiply all by a factor (e.g. ×2) to get whole numbers.</text>

<!-- ── ROUNDING RULES ── -->
<rect x="30" y="490" width="840" height="90" fill="#f0f0f0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="450" y="512" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Rounding Guide for Mole Ratios</text>
<line x1="50" y1="520" x2="850" y2="520" stroke="#888888" stroke-width="1"/>
<text x="50" y="540" font-family="Arial" font-size="12" fill="#000000">If ratio ends in .0 or is within 0.1 of a whole number → round directly (e.g. 2.02 → 2)</text>
<text x="50" y="558" font-family="Arial" font-size="12" fill="#000000">If ratio ≈ 0.5 → multiply all ratios by 2  |  If ≈ 0.33 → multiply by 3  |  If ≈ 0.25 → multiply by 4</text>
<text x="50" y="576" font-family="Arial" font-size="11" fill="#555555">Example: ratio 1.5 : 1.0 → ×2 → 3 : 2  (always get smallest whole-number ratio)</text>

<!-- ── COMPARISON NOTE ── -->
<rect x="30" y="600" width="840" height="80" fill="#eeeeee" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="450" y="622" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Empirical vs Molecular Formula for Glucose</text>
<text x="50" y="643" font-family="Arial" font-size="12" fill="#000000">Empirical: CH₂O   (M = 30.03 g/mol)     Molecular: C₆H₁₂O₆   (M = 180.16 g/mol)</text>
<text x="50" y="663" font-family="Arial" font-size="12" fill="#000000">Multiple: 180.16 / 30.03 ≈ 6    →    Molecular formula = (CH₂O) × 6 = C₆H₁₂O₆</text>

</g>
</svg>`;

    // Generated from registry: molecularFormulaVsEmpirical
    // empiricalFormula: 'CH2O', molecularFormula: 'C6H12O6'
    // options: showEmpirical, showMolecular, showMultiple, showMolarMass
    static molecularFormulaVsEmpiricalSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Molecular vs Empirical Formula – Glucose</metadata>
<g fill="none" stroke="#000000">

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Molecular vs Empirical Formula</text>
<text x="450" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Empirical: CH₂O  —  Molecular: C₆H₁₂O₆  (Glucose)</text>

<!-- ── EMPIRICAL FORMULA BOX ── -->
<rect x="40" y="75" width="350" height="240" fill="#f5f5f5" stroke="#000000" stroke-width="2" rx="6"/>
<text x="215" y="100" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">EMPIRICAL FORMULA</text>
<text x="215" y="120" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Simplest whole-number ratio of atoms</text>
<line x1="60" y1="128" x2="370" y2="128" stroke="#aaaaaa" stroke-width="1"/>
<text x="215" y="175" font-family="Arial" font-size="44" fill="#000000" text-anchor="middle" font-weight="bold">CH₂O</text>
<text x="215" y="207" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">C : H : O  =  1 : 2 : 1</text>
<text x="215" y="227" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Molar mass = 30.03 g/mol</text>
<text x="60" y="248" font-family="Arial" font-size="11" fill="#555555">Atoms per unit: 1C, 2H, 1O</text>
<text x="60" y="265" font-family="Arial" font-size="11" fill="#555555">Cannot be simplified further</text>
<text x="60" y="282" font-family="Arial" font-size="11" fill="#555555">Determined from % composition</text>
<text x="60" y="298" font-family="Arial" font-size="11" fill="#555555">May or may not = molecular formula</text>

<!-- ── MOLECULAR FORMULA BOX ── -->
<rect x="510" y="75" width="360" height="240" fill="#eeeeee" stroke="#000000" stroke-width="2" rx="6"/>
<text x="690" y="100" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">MOLECULAR FORMULA</text>
<text x="690" y="120" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Actual number of atoms in one molecule</text>
<line x1="528" y1="128" x2="852" y2="128" stroke="#aaaaaa" stroke-width="1"/>
<text x="690" y="175" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle" font-weight="bold">C₆H₁₂O₆</text>
<text x="690" y="207" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">C : H : O  =  6 : 12 : 6</text>
<text x="690" y="227" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Molar mass = 180.16 g/mol</text>
<text x="528" y="248" font-family="Arial" font-size="11" fill="#555555">Atoms per molecule: 6C, 12H, 6O</text>
<text x="528" y="265" font-family="Arial" font-size="11" fill="#555555">= Empirical formula × n (n=6)</text>
<text x="528" y="282" font-family="Arial" font-size="11" fill="#555555">Requires molecular mass data</text>
<text x="528" y="298" font-family="Arial" font-size="11" fill="#555555">Used in structural chemistry</text>

<!-- ── MULTIPLIER ARROW ── -->
<line x1="392" y1="195" x2="508" y2="195" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<rect x="400" y="178" width="100" height="30" fill="#ffffff" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="450" y="192" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">× n = 6</text>
<line x1="508" y1="220" x2="392" y2="220" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arrow-bw)"/>
<text x="450" y="237" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">÷ n</text>

<!-- ── MULTIPLE n CALCULATION ── -->
<rect x="40" y="340" width="820" height="100" fill="#f0f0f0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="450" y="362" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Finding the Whole-Number Multiple (n)</text>
<line x1="60" y1="370" x2="840" y2="370" stroke="#888888" stroke-width="1"/>
<text x="60"  y="390" font-family="Arial" font-size="12" fill="#000000">n = Molar Mass of Molecular Formula / Molar Mass of Empirical Formula</text>
<text x="60"  y="408" font-family="Arial" font-size="12" fill="#000000">n = 180.16 g/mol  /  30.03 g/mol  =  6.00  →  n = 6</text>
<text x="60"  y="426" font-family="Arial" font-size="11" fill="#555555">Molecular formula = (CH₂O)₆ = C₆H₁₂O₆     Always a positive integer.</text>

<!-- ── EXAMPLES TABLE ── -->
<rect x="40" y="460" width="820" height="125" fill="#f5f5f5" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="450" y="482" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">More Examples: Empirical vs Molecular Formula</text>
<line x1="60" y1="490" x2="840" y2="490" stroke="#888888" stroke-width="1"/>

<text x="80"  y="510" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Compound</text>
<text x="280" y="510" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Empirical</text>
<text x="430" y="510" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Molecular</text>
<text x="600" y="510" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">n</text>
<text x="650" y="510" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Notes</text>
<line x1="60" y1="516" x2="840" y2="516" stroke="#aaaaaa" stroke-width="1"/>

<text x="80"  y="534" font-family="Arial" font-size="11" fill="#000000">Glucose</text>
<text x="280" y="534" font-family="Arial" font-size="11" fill="#000000">CH₂O</text>
<text x="430" y="534" font-family="Arial" font-size="11" fill="#000000">C₆H₁₂O₆</text>
<text x="600" y="534" font-family="Arial" font-size="11" fill="#000000">6</text>
<text x="650" y="534" font-family="Arial" font-size="11" fill="#555555">Sugar</text>

<text x="80"  y="554" font-family="Arial" font-size="11" fill="#000000">Hydrogen peroxide</text>
<text x="280" y="554" font-family="Arial" font-size="11" fill="#000000">HO</text>
<text x="430" y="554" font-family="Arial" font-size="11" fill="#000000">H₂O₂</text>
<text x="600" y="554" font-family="Arial" font-size="11" fill="#000000">2</text>
<text x="650" y="554" font-family="Arial" font-size="11" fill="#555555">Bleach active</text>

<text x="80"  y="574" font-family="Arial" font-size="11" fill="#000000">Benzene</text>
<text x="280" y="574" font-family="Arial" font-size="11" fill="#000000">CH</text>
<text x="430" y="574" font-family="Arial" font-size="11" fill="#000000">C₆H₆</text>
<text x="600" y="574" font-family="Arial" font-size="11" fill="#000000">6</text>
<text x="650" y="574" font-family="Arial" font-size="11" fill="#555555">Aromatic hydrocarbon</text>

</g>
</svg>`;



    // ============================================================
    // ===== 5. ENERGETICS & THERMOCHEMISTRY ======================
    // ============================================================

    // Generated from registry: enthalpyProfileDiagram
    // reactionType: exothermic, activationEnergy: 80, enthalpyChange: -100
    static enthalpyProfileDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Enthalpy Profile Diagram - Exothermic</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Enthalpy Profile Diagram</text>
<text x="450" y="52" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Exothermic Reaction</text>

<!-- Axes -->
<!-- Y-axis: Enthalpy -->
<line x1="100" y1="60" x2="100" y2="520" stroke="#000000" stroke-width="2" marker-end="url(#arr)"/>
<text x="60" y="295" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,60,295)">Enthalpy (H)</text>

<!-- X-axis: Reaction coordinate -->
<line x1="100" y1="520" x2="840" y2="520" stroke="#000000" stroke-width="2" marker-end="url(#arr)"/>
<text x="470" y="555" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Reaction Coordinate →</text>

<!-- Reactants level: y=260 -->
<!-- Products level: y=380  (lower = exothermic, ΔH=-100) -->
<!-- Transition state peak: y=130  (activation energy=80 above reactants) -->

<!-- Reactants horizontal line -->
<line x1="120" y1="260" x2="250" y2="260" stroke="#000000" stroke-width="3"/>
<!-- Transition state horizontal line -->
<line x1="420" y1="130" x2="520" y2="130" stroke="#000000" stroke-width="2" stroke-dasharray="6,4"/>
<!-- Products horizontal line -->
<line x1="680" y1="380" x2="820" y2="380" stroke="#000000" stroke-width="3"/>

<!-- Energy profile curve (smooth) -->
<path d="M 250,260 C 310,260 360,260 420,135 C 480,10 520,10 520,135 C 520,135 580,135 640,380 C 680,380 680,380 680,380" stroke="#000000" stroke-width="3" fill="none"/>

<!-- showTransitionState: dashed vertical from peak to reactant level -->
<line x1="470" y1="130" x2="470" y2="260" stroke="#444444" stroke-width="1" stroke-dasharray="5,4"/>

<!-- showActivationEnergy: brace/arrow from reactants to peak -->
<line x1="320" y1="260" x2="320" y2="130" stroke="#000000" stroke-width="2" marker-end="url(#arr)" marker-start="url(#arr-rev)"/>
<text x="332" y="202" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Ea</text>
<text x="332" y="217" font-family="Arial" font-size="11" fill="#000000">(80 kJ)</text>

<!-- showEnthalpyChange: arrow from reactants to products level -->
<line x1="580" y1="260" x2="580" y2="380" stroke="#000000" stroke-width="2" marker-end="url(#arr)" marker-start="url(#arr-rev)"/>
<text x="592" y="326" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">ΔH</text>
<text x="592" y="341" font-family="Arial" font-size="11" fill="#000000">= −100 kJ</text>

<!-- showReactants label -->
<text x="185" y="250" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Reactants</text>

<!-- showProducts label -->
<text x="750" y="370" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Products</text>

<!-- Transition state label -->
<text x="470" y="115" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-style="italic">Transition State</text>
<text x="470" y="100" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">[activated complex]</text>

<!-- Info box -->
<rect x="30" y="430" width="300" height="80" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="42" y="450" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Key Points:</text>
<text x="42" y="468" font-family="Arial" font-size="11" fill="#000000">• Exothermic: products lower than reactants</text>
<text x="42" y="484" font-family="Arial" font-size="11" fill="#000000">• Ea = activation energy (always positive)</text>
<text x="42" y="500" font-family="Arial" font-size="11" fill="#000000">• ΔH = H(products) − H(reactants)</text>

<defs>
  <marker id="arr" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
  <marker id="arr-rev" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto">
    <polygon points="10 0,0 3,10 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: bornHaberCycleDiagram
    // compound: NaCl
    static bornHaberCycleDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="800" viewBox="0 0 1000 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>Born-Haber Cycle - NaCl</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Born-Haber Cycle — NaCl</text>
<text x="500" y="58" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Energy cycle for ionic compound formation</text>

<!-- Y-axis label -->
<text x="30" y="420" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,30,420)">Enthalpy (kJ mol⁻¹)</text>
<line x1="70" y1="80" x2="70" y2="730" stroke="#000000" stroke-width="1.5" marker-end="url(#arr2)"/>

<!-- ---- Energy levels (horizontal lines) ---- -->
<!-- Na(s) + ½Cl₂(g)  →  reference level y=690 -->
<!-- Na(g) + ½Cl₂(g)  →  sublimation +108  y=570 -->
<!-- Na(g) + Cl(g)     →  atomisation of Cl +122  y=450 -->
<!-- Na⁺(g) + Cl(g) + e⁻ →  ionisation +496  y=280 -->
<!-- Na⁺(g) + Cl⁻(g)   →  electron affinity −349  y=370 -->
<!-- NaCl(s)           →  formation −411  y=720 (below reference) -->

<!-- Level 1: Na(s) + ½Cl₂(g)  y=650 -->
<line x1="200" y1="650" x2="450" y2="650" stroke="#000000" stroke-width="3"/>
<text x="165" y="654" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">Na(s) + ½Cl₂(g)</text>

<!-- Level 2: Na(g) + ½Cl₂(g)  y=530 -->
<line x1="200" y1="530" x2="450" y2="530" stroke="#000000" stroke-width="2.5"/>
<text x="165" y="534" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">Na(g) + ½Cl₂(g)</text>

<!-- Level 3: Na(g) + Cl(g)  y=415 -->
<line x1="200" y1="415" x2="450" y2="415" stroke="#000000" stroke-width="2.5"/>
<text x="165" y="419" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">Na(g) + Cl(g)</text>

<!-- Level 4: Na⁺(g) + Cl(g) + e⁻  y=240 -->
<line x1="540" y1="240" x2="790" y2="240" stroke="#000000" stroke-width="2.5"/>
<text x="810" y="244" font-family="Arial" font-size="11" fill="#000000">Na⁺(g) + Cl(g) + e⁻</text>

<!-- Level 5: Na⁺(g) + Cl⁻(g)  y=350 -->
<line x1="540" y1="350" x2="790" y2="350" stroke="#000000" stroke-width="2.5"/>
<text x="810" y="354" font-family="Arial" font-size="11" fill="#000000">Na⁺(g) + Cl⁻(g)</text>

<!-- Level 6: NaCl(s)  y=710 -->
<line x1="540" y1="710" x2="790" y2="710" stroke="#000000" stroke-width="3"/>
<text x="810" y="714" font-family="Arial" font-size="11" fill="#000000">NaCl(s)</text>

<!-- ---- Step arrows ---- -->
<!-- Sublimation: level1 → level2 (upward on left side) -->
<line x1="325" y1="645" x2="325" y2="535" stroke="#000000" stroke-width="2" marker-end="url(#arr2)"/>
<text x="337" y="595" font-family="Arial" font-size="11" fill="#000000">ΔH_sub</text>
<text x="337" y="609" font-family="Arial" font-size="11" fill="#000000">= +108</text>

<!-- Atomisation Cl: level2 → level3 (upward) -->
<line x1="325" y1="525" x2="325" y2="420" stroke="#000000" stroke-width="2" marker-end="url(#arr2)"/>
<text x="337" y="476" font-family="Arial" font-size="11" fill="#000000">ΔH_at</text>
<text x="337" y="490" font-family="Arial" font-size="11" fill="#000000">= +122</text>

<!-- Bridge level3 → level4 (ionisation: going right and up) -->
<line x1="450" y1="415" x2="540" y2="415" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="540" y1="415" x2="540" y2="245" stroke="#000000" stroke-width="2" marker-end="url(#arr2)"/>
<text x="486" y="408" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">IE</text>
<text x="555" y="336" font-family="Arial" font-size="11" fill="#000000">= +496</text>

<!-- Electron affinity: level4 → level5 (downward) -->
<line x1="665" y1="245" x2="665" y2="345" stroke="#000000" stroke-width="2" marker-end="url(#arr2)"/>
<text x="677" y="300" font-family="Arial" font-size="11" fill="#000000">EA</text>
<text x="677" y="314" font-family="Arial" font-size="11" fill="#000000">= −349</text>

<!-- Lattice enthalpy: level5 → level6 (downward) -->
<line x1="665" y1="355" x2="665" y2="705" stroke="#000000" stroke-width="2" marker-end="url(#arr2)"/>
<text x="677" y="540" font-family="Arial" font-size="11" fill="#000000">ΔH_latt</text>
<text x="677" y="555" font-family="Arial" font-size="11" fill="#000000">= −787</text>

<!-- Enthalpy of formation: level1 directly to NaCl(s) (outer arrow, dashed) -->
<line x1="200" y1="658" x2="200" y2="714" stroke="#000000" stroke-width="2" stroke-dasharray="8,4" marker-end="url(#arr2)"/>
<text x="90" y="690" font-family="Arial" font-size="11" fill="#000000">ΔH_f</text>
<text x="82" y="704" font-family="Arial" font-size="11" fill="#000000">= −411</text>

<!-- Bridge NaCl bottom to level6 -->
<line x1="440" y1="710" x2="540" y2="710" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>

<!-- Info box -->
<rect x="80" y="745" width="830" height="42" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="90" y="762" font-family="Arial" font-size="11" fill="#000000" font-weight="bold">Hess's Law applied: ΔH_f = ΔH_sub + ΔH_at + IE + EA + ΔH_latt</text>
<text x="90" y="778" font-family="Arial" font-size="11" fill="#000000">−411 = +108 + 122 + 496 + (−349) + (−787) kJ mol⁻¹  ✓</text>

<defs>
  <marker id="arr2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: hesssLawDiagram
    // reaction: C + O2 → CO2
    static hesssLawDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Hess's Law Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Hess's Law</text>
<text x="500" y="58" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Alternative pathways have the same overall enthalpy change</text>

<!-- Three corners of the triangle cycle -->
<!-- Top: C(s) + O₂(g)  x=500, y=130 -->
<!-- Bottom-left: CO(g) + ½O₂(g)  x=160, y=480 -->
<!-- Bottom-right: CO₂(g)  x=840, y=480 -->

<!-- Corner boxes -->
<rect x="370" y="105" width="260" height="50" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="5"/>
<text x="500" y="125" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">C(s) + O₂(g)</text>
<text x="500" y="143" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Reactants</text>

<rect x="30" y="455" width="260" height="50" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="5"/>
<text x="160" y="475" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">CO(g) + ½O₂(g)</text>
<text x="160" y="493" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Intermediate</text>

<rect x="710" y="455" width="260" height="50" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="5"/>
<text x="840" y="475" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">CO₂(g)</text>
<text x="840" y="493" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Product</text>

<!-- showDirectRoute: Top → Bottom-right (direct arrow) -->
<line x1="620" y1="148" x2="790" y2="456" stroke="#000000" stroke-width="3" marker-end="url(#arr3)"/>
<text x="740" y="295" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Route 1</text>
<text x="740" y="312" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">ΔH₁ = −394 kJ</text>
<text x="740" y="327" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(Direct combustion)</text>

<!-- showIndirectRoute: Top → Bottom-left → Bottom-right -->
<!-- Top → Bottom-left -->
<line x1="380" y1="148" x2="260" y2="456" stroke="#000000" stroke-width="2.5" stroke-dasharray="10,5" marker-end="url(#arr3)"/>
<text x="285" y="310" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Route 2a</text>
<text x="285" y="326" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">ΔH₂ = −111 kJ</text>

<!-- Bottom-left → Bottom-right -->
<line x1="290" y1="480" x2="710" y2="480" stroke="#000000" stroke-width="2.5" stroke-dasharray="10,5" marker-end="url(#arr3)"/>
<text x="500" y="470" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Route 2b</text>
<text x="500" y="452" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">ΔH₃ = −283 kJ</text>

<!-- showCalculation box -->
<rect x="280" y="545" width="440" height="110" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="500" y="565" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Hess's Law Calculation</text>
<line x1="295" y1="572" x2="705" y2="572" stroke="#AAAAAA" stroke-width="1"/>
<text x="295" y="590" font-family="Arial" font-size="12" fill="#000000">Route 1:  ΔH₁ = −394 kJ mol⁻¹</text>
<text x="295" y="608" font-family="Arial" font-size="12" fill="#000000">Route 2:  ΔH₂ + ΔH₃ = −111 + (−283) = −394 kJ mol⁻¹</text>
<text x="295" y="630" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">∴ ΔH₁ = ΔH₂ + ΔH₃  (Path independent)</text>

<!-- showEnergies labels at corners -->
<text x="500" y="93" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">H = 0 (reference)</text>

<defs>
  <marker id="arr3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: bondEnthalpyDiagram
    // reaction: H₂ + Cl₂ → 2HCl
    static bondEnthalpyDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Bond Enthalpy Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Bond Enthalpy Diagram</text>
<text x="500" y="58" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">H₂ + Cl₂ → 2HCl</text>

<!-- Y-axis -->
<line x1="80" y1="70" x2="80" y2="560" stroke="#000000" stroke-width="1.5" marker-end="url(#arr4)"/>
<text x="38" y="315" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" transform="rotate(-90,38,315)">Enthalpy</text>

<!-- X-axis -->
<line x1="80" y1="560" x2="920" y2="560" stroke="#000000" stroke-width="1.5" marker-end="url(#arr4)"/>

<!-- Step labels on x-axis -->
<text x="200" y="580" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Reactants</text>
<text x="500" y="580" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Atoms (gaseous)</text>
<text x="800" y="580" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Products</text>

<!-- ---- Energy levels ---- -->
<!-- Reactants: H₂ + Cl₂  y=380 -->
<line x1="120" y1="380" x2="300" y2="380" stroke="#000000" stroke-width="3"/>
<text x="210" y="368" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H₂ + Cl₂</text>

<!-- Atoms: H(g) + H(g) + Cl(g) + Cl(g)  y=140  (bonds broken = +436 + +243) -->
<line x1="360" y1="140" x2="640" y2="140" stroke="#000000" stroke-width="2.5"/>
<text x="500" y="120" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2H(g) + 2Cl(g)</text>
<text x="500" y="135" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(all bonds broken)</text>

<!-- Products: 2HCl  y=270  (bonds formed: 2 × 432 = 864 → net from atoms) -->
<line x1="700" y1="270" x2="880" y2="270" stroke="#000000" stroke-width="3"/>
<text x="790" y="258" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2HCl(g)</text>

<!-- showBondBreaking: arrow from reactants up to atoms -->
<!-- H₂ bond broken: left part -->
<line x1="180" y1="375" x2="400" y2="145" stroke="#000000" stroke-width="2" stroke-dasharray="7,4" marker-end="url(#arr4)"/>
<text x="240" y="265" font-family="Arial" font-size="11" fill="#000000">H−H: +436 kJ</text>
<text x="240" y="280" font-family="Arial" font-size="11" fill="#000000">Cl−Cl: +243 kJ</text>
<text x="240" y="295" font-family="Arial" font-size="11" fill="#000000" font-style="italic">Bond Breaking</text>
<text x="240" y="309" font-family="Arial" font-size="11" fill="#000000" font-style="italic">(endothermic)</text>

<!-- showBondForming: arrow from atoms down to products -->
<line x1="600" y1="145" x2="780" y2="265" stroke="#000000" stroke-width="2" stroke-dasharray="7,4" marker-end="url(#arr4)"/>
<text x="710" y="205" font-family="Arial" font-size="11" fill="#000000">2×H−Cl: −864 kJ</text>
<text x="710" y="220" font-family="Arial" font-size="11" fill="#000000" font-style="italic">Bond Forming</text>
<text x="710" y="234" font-family="Arial" font-size="11" fill="#000000" font-style="italic">(exothermic)</text>

<!-- showNetChange: double-headed arrow reactants to products -->
<line x1="305" y1="380" x2="695" y2="380" stroke="#888888" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="700" y1="380" x2="700" y2="275" stroke="#000000" stroke-width="2" marker-end="url(#arr4)" marker-start="url(#arr4r)"/>
<text x="720" y="334" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">ΔH</text>
<text x="720" y="349" font-family="Arial" font-size="12" fill="#000000">= −185 kJ</text>

<!-- showEnergyValues summary box -->
<rect x="80" y="600" width="840" height="80" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="100" y="620" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Calculation:</text>
<text x="100" y="638" font-family="Arial" font-size="12" fill="#000000">Bonds broken: E(H−H) + E(Cl−Cl) = 436 + 243 = +679 kJ mol⁻¹</text>
<text x="100" y="655" font-family="Arial" font-size="12" fill="#000000">Bonds formed: 2 × E(H−Cl) = 2 × 432 = −864 kJ mol⁻¹</text>
<text x="100" y="672" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">ΔH = +679 + (−864) = −185 kJ mol⁻¹  (exothermic)</text>

<defs>
  <marker id="arr4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
  <marker id="arr4r" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto">
    <polygon points="10 0,0 3,10 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: latticeEnthalpyDiagram
    // compound: MgO
    static latticeEnthalpyDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="700" viewBox="0 0 800 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Lattice Enthalpy Diagram - MgO</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Lattice Enthalpy — MgO</text>
<text x="400" y="58" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Energy change when gaseous ions form an ionic lattice</text>

<!-- Y-axis -->
<line x1="90" y1="80" x2="90" y2="620" stroke="#000000" stroke-width="1.5" marker-end="url(#arr5)"/>
<text x="45" y="360" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" transform="rotate(-90,45,360)">Enthalpy (kJ mol⁻¹)</text>

<!-- showGaseousIons: top level  y=150 -->
<line x1="200" y1="150" x2="600" y2="150" stroke="#000000" stroke-width="3"/>
<text x="400" y="135" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Mg²⁺(g) + O²⁻(g)</text>
<text x="400" y="120" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Gaseous ions (separated)</text>

<!-- showSolidLattice: bottom level  y=550 -->
<line x1="200" y1="550" x2="600" y2="550" stroke="#000000" stroke-width="3"/>
<text x="400" y="570" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">MgO(s)</text>
<text x="400" y="586" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Ionic lattice</text>

<!-- showEnergyChange: big downward arrow with lattice enthalpy value -->
<line x1="400" y1="155" x2="400" y2="540" stroke="#000000" stroke-width="3" marker-end="url(#arr5)"/>
<text x="420" y="360" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">ΔH_latt</text>
<text x="420" y="378" font-family="Arial" font-size="13" fill="#000000">= −3791 kJ mol⁻¹</text>
<text x="420" y="394" font-family="Arial" font-size="12" fill="#555555">(very exothermic)</text>

<!-- Dotted separator line -->
<line x1="110" y1="350" x2="700" y2="350" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="4,4"/>

<!-- Ion diagrams (showFactorsAffecting) -->
<!-- Mg²⁺ ion symbol -->
<circle cx="235" cy="340" r="22" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="235" y="345" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Mg²⁺</text>
<text x="235" y="378" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">r = 72 pm</text>
<text x="235" y="393" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">charge = +2</text>

<!-- O²⁻ ion symbol -->
<circle cx="565" cy="340" r="28" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="565" y="345" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">O²⁻</text>
<text x="565" y="378" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">r = 140 pm</text>
<text x="565" y="393" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">charge = −2</text>

<!-- Factors affecting lattice enthalpy box -->
<rect x="90" y="615" width="620" height="72" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="105" y="634" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Factors Affecting Lattice Enthalpy:</text>
<text x="105" y="652" font-family="Arial" font-size="11" fill="#000000">• Higher ionic charge → greater lattice enthalpy  (MgO &gt; NaCl)</text>
<text x="105" y="669" font-family="Arial" font-size="11" fill="#000000">• Smaller ionic radius → greater lattice enthalpy  (closer ions = stronger attraction)</text>

<defs>
  <marker id="arr5" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: enthalpyOfSolutionDiagram
    // solute: NaCl
    static enthalpyOfSolutionDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Enthalpy of Solution - NaCl</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Enthalpy of Solution — NaCl</text>
<text x="500" y="58" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Lattice breaking + hydration of ions</text>

<!-- Y-axis -->
<line x1="80" y1="75" x2="80" y2="570" stroke="#000000" stroke-width="1.5" marker-end="url(#arr6)"/>
<text x="40" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" transform="rotate(-90,40,330)">Enthalpy (kJ mol⁻¹)</text>

<!-- ---- Energy levels ---- -->
<!-- Level A: NaCl(s) reference  y=480 -->
<line x1="120" y1="480" x2="340" y2="480" stroke="#000000" stroke-width="3"/>
<text x="230" y="468" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">NaCl(s)</text>

<!-- Level B: Na⁺(g) + Cl⁻(g)  y=160  (lattice broken: +787 kJ) -->
<line x1="120" y1="160" x2="500" y2="160" stroke="#000000" stroke-width="2.5"/>
<text x="310" y="148" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Na⁺(g) + Cl⁻(g)</text>
<text x="310" y="133" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Gaseous ions</text>

<!-- Level C: Na⁺(aq) + Cl⁻(aq)  y=420  (dissolved: endothermic overall +3 kJ) -->
<line x1="660" y1="420" x2="880" y2="420" stroke="#000000" stroke-width="3"/>
<text x="770" y="408" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Na⁺(aq) + Cl⁻(aq)</text>
<text x="770" y="438" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Aqueous ions</text>

<!-- showLatticeBreaking: arrow from NaCl up to gaseous ions -->
<line x1="200" y1="475" x2="200" y2="165" stroke="#000000" stroke-width="2" stroke-dasharray="8,4" marker-end="url(#arr6)"/>
<text x="90" y="330" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">ΔH_latt</text>
<text x="90" y="345" font-family="Arial" font-size="12" fill="#000000">= +787 kJ</text>
<text x="90" y="360" font-family="Arial" font-size="11" fill="#555555">(endothermic)</text>

<!-- showHydration: arrow from gaseous ions down to aqueous ions -->
<line x1="460" y1="160" x2="740" y2="415" stroke="#000000" stroke-width="2" stroke-dasharray="8,4" marker-end="url(#arr6)"/>
<text x="650" y="285" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">ΔH_hyd</text>
<text x="650" y="300" font-family="Arial" font-size="12" fill="#000000">= −784 kJ</text>
<text x="650" y="315" font-family="Arial" font-size="11" fill="#555555">(exothermic)</text>

<!-- showNetChange: arrow from NaCl(s) to aqueous ions -->
<line x1="340" y1="480" x2="660" y2="425" stroke="#000000" stroke-width="2.5" marker-end="url(#arr6)"/>
<text x="500" y="475" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">ΔH_sol = +3 kJ mol⁻¹</text>
<text x="500" y="491" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(slightly endothermic)</text>

<!-- showWaterMolecules: H₂O molecules around ion symbol -->
<!-- Na⁺ hydration illustration -->
<circle cx="420" cy="550" r="18" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<text x="420" y="555" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Na⁺</text>
<!-- water molecules around it -->
<text x="390" y="530" font-family="Arial" font-size="10" fill="#000000">H₂O</text>
<text x="450" y="530" font-family="Arial" font-size="10" fill="#000000">H₂O</text>
<text x="390" y="578" font-family="Arial" font-size="10" fill="#000000">H₂O</text>
<text x="450" y="578" font-family="Arial" font-size="10" fill="#000000">H₂O</text>
<text x="420" y="525" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">H₂O</text>
<text x="420" y="585" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">H₂O</text>
<text x="420" y="608" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Ion-dipole attractions</text>

<!-- Energy equation -->
<rect x="550" y="530" width="390" height="60" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="565" y="550" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">ΔH_sol = ΔH_latt(breaking) + ΔH_hyd</text>
<text x="565" y="568" font-family="Arial" font-size="12" fill="#000000">= +787 + (−784) = +3 kJ mol⁻¹</text>

<defs>
  <marker id="arr6" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: entropyDiagram
    // process: ice melting
    static entropyDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Entropy Diagram - Ice Melting</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Entropy — Disorder and Randomness</text>
<text x="450" y="58" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Process: Ice Melting (H₂O(s) → H₂O(l))</text>

<!-- showBefore: Left panel — Ice (ordered) -->
<rect x="60" y="80" width="340" height="380" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="6"/>
<text x="230" y="108" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Before: Ice H₂O(s)</text>
<text x="230" y="125" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Ordered crystal lattice</text>

<!-- Ice lattice: regular grid of molecules -->
<!-- Row 1 -->
<circle cx="140" cy="175" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="185" cy="175" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="230" cy="175" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="275" cy="175" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="320" cy="175" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<!-- Row 2 -->
<circle cx="140" cy="225" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="185" cy="225" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="230" cy="225" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="275" cy="225" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="320" cy="225" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<!-- Row 3 -->
<circle cx="140" cy="275" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="185" cy="275" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="230" cy="275" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="275" cy="275" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="320" cy="275" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<!-- Row 4 -->
<circle cx="140" cy="325" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="185" cy="325" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="230" cy="325" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="275" cy="325" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="320" cy="325" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<!-- Bond lines between molecules -->
<line x1="150" y1="175" x2="175" y2="175" stroke="#000000" stroke-width="1"/>
<line x1="195" y1="175" x2="220" y2="175" stroke="#000000" stroke-width="1"/>
<line x1="240" y1="175" x2="265" y2="175" stroke="#000000" stroke-width="1"/>
<line x1="285" y1="175" x2="310" y2="175" stroke="#000000" stroke-width="1"/>
<line x1="140" y1="185" x2="140" y2="215" stroke="#000000" stroke-width="1"/>
<line x1="185" y1="185" x2="185" y2="215" stroke="#000000" stroke-width="1"/>
<line x1="230" y1="185" x2="230" y2="215" stroke="#000000" stroke-width="1"/>
<line x1="275" y1="185" x2="275" y2="215" stroke="#000000" stroke-width="1"/>
<line x1="320" y1="185" x2="320" y2="215" stroke="#000000" stroke-width="1"/>

<text x="230" y="380" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Low disorder</text>
<text x="230" y="398" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">S = 41 J K⁻¹ mol⁻¹</text>
<text x="230" y="440" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">S (low)</text>

<!-- Arrow: process -->
<line x1="420" y1="270" x2="490" y2="270" stroke="#000000" stroke-width="3" marker-end="url(#arr7)"/>
<text x="455" y="258" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">+ΔS</text>
<text x="455" y="295" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Heat added</text>

<!-- showAfter: Right panel — Water (disordered) -->
<rect x="500" y="80" width="340" height="380" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="6"/>
<text x="670" y="108" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">After: Water H₂O(l)</text>
<text x="670" y="125" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Random, mobile molecules</text>

<!-- Water: randomly scattered molecules -->
<circle cx="540" cy="175" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="610" cy="155" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="660" cy="195" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="725" cy="165" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="790" cy="185" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="555" cy="240" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="630" cy="260" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="700" cy="230" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="770" cy="255" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="520" cy="310" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="580" cy="290" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="645" cy="320" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="720" cy="300" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<circle cx="800" cy="320" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<!-- Velocity arrows on some -->
<line x1="545" y1="175" x2="562" y2="162" stroke="#000000" stroke-width="1.5" marker-end="url(#arr7)"/>
<line x1="615" y1="150" x2="628" y2="140" stroke="#000000" stroke-width="1.5" marker-end="url(#arr7)"/>
<line x1="665" y1="200" x2="680" y2="210" stroke="#000000" stroke-width="1.5" marker-end="url(#arr7)"/>
<line x1="558" y1="245" x2="545" y2="258" stroke="#000000" stroke-width="1.5" marker-end="url(#arr7)"/>

<text x="670" y="380" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">High disorder</text>
<text x="670" y="398" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">S = 70 J K⁻¹ mol⁻¹</text>
<text x="670" y="440" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">S (high)</text>

<!-- showEntropyValue: ΔS calculation -->
<rect x="150" y="490" width="600" height="90" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="450" y="512" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Entropy Change for Ice Melting</text>
<text x="170" y="533" font-family="Arial" font-size="12" fill="#000000">ΔS = S(products) − S(reactants) = 70 − 41 = +29 J K⁻¹ mol⁻¹</text>
<text x="170" y="552" font-family="Arial" font-size="12" fill="#000000">ΔS &gt; 0 → increase in disorder (solid → liquid) → favourable</text>
<text x="170" y="571" font-family="Arial" font-size="11" fill="#555555">General trend: S(g) &gt;&gt; S(l) &gt; S(s)</text>

<defs>
  <marker id="arr7" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: gibbsFreeEnergyDiagram
    // deltaH=-50, deltaS=100, temperature=298
    static gibbsFreeEnergyDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Gibbs Free Energy Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Gibbs Free Energy</text>
<text x="450" y="58" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Predicting spontaneity: ΔG = ΔH − TΔS</text>

<!-- showEquation: central equation box -->
<rect x="280" y="75" width="340" height="55" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="6"/>
<text x="450" y="100" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">ΔG = ΔH − TΔS</text>
<text x="450" y="120" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">If ΔG &lt; 0: spontaneous  |  ΔG &gt; 0: non-spontaneous</text>

<!-- showValues: calculation for given values -->
<rect x="280" y="155" width="340" height="75" fill="#FAFAFA" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="296" y="175" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Given values (T = 298 K):</text>
<text x="296" y="193" font-family="Arial" font-size="12" fill="#000000">ΔH = −50 kJ mol⁻¹,  ΔS = +100 J K⁻¹ mol⁻¹</text>
<text x="296" y="211" font-family="Arial" font-size="12" fill="#000000">ΔG = −50 − (298 × 0.100) = −50 − 29.8 = −79.8 kJ</text>

<!-- showSpontaneity label -->
<text x="450" y="256" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">∴ ΔG = −79.8 kJ mol⁻¹  → Spontaneous ✓</text>

<!-- showTemperatureEffect: 4-quadrant table -->
<rect x="80" y="280" width="740" height="200" fill="#FAFAFA" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="450" y="302" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Effect of ΔH and ΔS on Spontaneity</text>

<!-- Table header -->
<line x1="80" y1="310" x2="820" y2="310" stroke="#000000" stroke-width="1"/>
<line x1="80" y1="340" x2="820" y2="340" stroke="#000000" stroke-width="1"/>
<line x1="80" y1="370" x2="820" y2="370" stroke="#000000" stroke-width="1"/>
<line x1="80" y1="400" x2="820" y2="400" stroke="#000000" stroke-width="1"/>
<line x1="80" y1="430" x2="820" y2="430" stroke="#000000" stroke-width="1"/>
<line x1="80" y1="460" x2="820" y2="460" stroke="#000000" stroke-width="1"/>
<!-- Vertical dividers -->
<line x1="200" y1="310" x2="200" y2="480" stroke="#000000" stroke-width="1"/>
<line x1="360" y1="310" x2="360" y2="480" stroke="#000000" stroke-width="1"/>
<line x1="560" y1="310" x2="560" y2="480" stroke="#000000" stroke-width="1"/>

<!-- Headers -->
<text x="140" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">ΔH</text>
<text x="280" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">ΔS</text>
<text x="460" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">ΔG (= ΔH − TΔS)</text>
<text x="690" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Spontaneous?</text>

<!-- Row 1 -->
<text x="140" y="358" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">−</text>
<text x="280" y="358" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<text x="460" y="358" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Always −</text>
<text x="690" y="358" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Always spontaneous ★</text>
<!-- Row 2 -->
<text x="140" y="388" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<text x="280" y="388" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">−</text>
<text x="460" y="388" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Always +</text>
<text x="690" y="388" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Never spontaneous</text>
<!-- Row 3 -->
<text x="140" y="418" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">−</text>
<text x="280" y="418" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">−</text>
<text x="460" y="418" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">− at low T, + at high T</text>
<text x="690" y="418" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Low T only</text>
<!-- Row 4 -->
<text x="140" y="448" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<text x="280" y="448" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<text x="460" y="448" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+ at low T, − at high T</text>
<text x="690" y="448" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">High T only</text>

<!-- Units note -->
<text x="450" y="510" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Note: ΔH in kJ mol⁻¹, ΔS in J K⁻¹ mol⁻¹ — convert ΔS to kJ (÷1000) before substituting</text>
<text x="450" y="528" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Transition temperature: T = ΔH / ΔS  (where ΔG = 0)</text>

<!-- Star note for current example -->
<rect x="80" y="545" width="740" height="38" fill="#F0F0F0" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="90" y="561" font-family="Arial" font-size="12" fill="#000000">★ Current example: ΔH = −, ΔS = + → spontaneous at ALL temperatures (Case 1)</text>
<text x="90" y="577" font-family="Arial" font-size="12" fill="#000000">   ΔG = −79.8 kJ mol⁻¹ at 298 K</text>

</g>
</svg>`;

    // ============================================================
    // ===== 6. CHEMICAL KINETICS =================================
    // ============================================================

    // Generated from registry: reactionRateGraphDiagram
    // order: 1
    static reactionRateGraphDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Reaction Rate Graph - 1st Order</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Reaction Rate — Concentration vs Time</text>
<text x="450" y="52" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">First-Order Reaction</text>

<!-- Axes -->
<line x1="100" y1="60" x2="100" y2="490" stroke="#000000" stroke-width="2" marker-end="url(#arr8)"/>
<line x1="100" y1="490" x2="820" y2="490" stroke="#000000" stroke-width="2" marker-end="url(#arr8)"/>
<text x="55" y="280" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,55,280)">[A] concentration</text>
<text x="460" y="530" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Time →</text>

<!-- Initial concentration label -->
<line x1="95" y1="110" x2="108" y2="110" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="114" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">[A]₀</text>

<!-- showConcentrationDecrease: first-order exponential decay curve -->
<!-- C(t) = C₀ × e^(-kt); plotted from x=100 to x=800, y=110 to y=480 -->
<path d="M 100,110 C 170,140 220,175 300,235 C 380,295 430,330 510,375 C 590,420 640,445 720,468 C 760,480 790,485 800,487" stroke="#000000" stroke-width="3" fill="none"/>

<!-- showTangent: tangent line at t=0 -->
<line x1="100" y1="110" x2="290" y2="430" stroke="#555555" stroke-width="1.5" stroke-dasharray="6,4"/>
<text x="305" y="445" font-family="Arial" font-size="11" fill="#555555">initial rate</text>
<text x="305" y="460" font-family="Arial" font-size="11" fill="#555555">(tangent at t=0)</text>

<!-- showHalfLife: t½ markers -->
<!-- First half-life: [A]₀ → [A]₀/2 at x≈300, y=235 then cross-hair -->
<line x1="100" y1="235" x2="300" y2="235" stroke="#777777" stroke-width="1" stroke-dasharray="5,4"/>
<line x1="300" y1="235" x2="300" y2="490" stroke="#777777" stroke-width="1" stroke-dasharray="5,4"/>
<text x="88" y="239" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">[A]₀/2</text>
<text x="300" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">t½</text>

<!-- Second half-life: at x≈500, y=375 -->
<line x1="100" y1="375" x2="510" y2="375" stroke="#777777" stroke-width="1" stroke-dasharray="5,4"/>
<line x1="510" y1="375" x2="510" y2="490" stroke="#777777" stroke-width="1" stroke-dasharray="5,4"/>
<text x="88" y="379" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">[A]₀/4</text>
<text x="510" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">2t½</text>

<!-- showRate label -->
<text x="640" y="380" font-family="Arial" font-size="12" fill="#000000">Rate = k[A]</text>
<text x="640" y="396" font-family="Arial" font-size="11" fill="#555555">(1st order)</text>

<!-- showConstantHalfLife annotation -->
<text x="360" y="465" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">constant t½ = ln2/k</text>

<!-- Info box -->
<rect x="100" y="543" width="700" height="45" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="115" y="562" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">1st Order Kinetics:</text>
<text x="115" y="578" font-family="Arial" font-size="11" fill="#000000">[A] = [A]₀ e^(−kt)  |  t½ = ln(2)/k = 0.693/k  |  Rate = k[A]  (independent of initial concentration)</text>

<defs>
  <marker id="arr8" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: rateEquationDiagram
    // reaction: A + B → C, k=0.05, orderA=2, orderB=1
    static rateEquationDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Rate Equation Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Rate Equation</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">A + B → C  |  Rate = k[A]²[B]</text>

<!-- Main rate equation box -->
<rect x="220" y="75" width="460" height="70" fill="#F0F0F0" stroke="#000000" stroke-width="2.5" rx="8"/>
<text x="450" y="108" font-family="Arial" font-size="24" fill="#000000" text-anchor="middle" font-weight="bold">Rate = k[A]²[B]¹</text>
<text x="450" y="133" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Overall order = 2 + 1 = 3</text>

<!-- showOrders: annotation of each part -->
<!-- k label -->
<line x1="295" y1="170" x2="295" y2="145" stroke="#000000" stroke-width="1.5" marker-end="url(#arr9)"/>
<text x="295" y="187" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">k</text>
<text x="295" y="204" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">rate constant</text>
<text x="295" y="219" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">temp. dependent</text>

<!-- [A] label -->
<line x1="390" y1="170" x2="390" y2="145" stroke="#000000" stroke-width="1.5" marker-end="url(#arr9)"/>
<text x="390" y="187" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">[A]</text>
<text x="390" y="204" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">concentration</text>
<text x="390" y="219" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">of A (mol dm⁻³)</text>

<!-- ² label -->
<line x1="475" y1="170" x2="475" y2="145" stroke="#000000" stroke-width="1.5" marker-end="url(#arr9)"/>
<text x="475" y="187" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">²</text>
<text x="475" y="204" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">order w.r.t. A</text>
<text x="475" y="219" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(2nd order)</text>

<!-- [B] label -->
<line x1="580" y1="170" x2="580" y2="145" stroke="#000000" stroke-width="1.5" marker-end="url(#arr9)"/>
<text x="580" y="187" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">[B]¹</text>
<text x="580" y="204" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1st order in B</text>
<text x="580" y="219" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(linear)</text>

<!-- showUnits: units box -->
<rect x="80" y="250" width="350" height="130" fill="#FAFAFA" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="255" y="272" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Units of k</text>
<text x="100" y="292" font-family="Arial" font-size="12" fill="#000000">rate = k[A]ⁿ  →  k = rate / [A]ⁿ</text>
<text x="100" y="310" font-family="Arial" font-size="12" fill="#000000">Units: (mol dm⁻³ s⁻¹) / (mol dm⁻³)ⁿ</text>
<line x1="95" y1="318" x2="415" y2="318" stroke="#CCCCCC" stroke-width="1"/>
<text x="100" y="336" font-family="Arial" font-size="11" fill="#000000">0th order: mol dm⁻³ s⁻¹</text>
<text x="100" y="354" font-family="Arial" font-size="11" fill="#000000">1st order: s⁻¹</text>
<text x="100" y="372" font-family="Arial" font-size="11" fill="#000000">2nd order: mol⁻¹ dm³ s⁻¹</text>
<text x="100" y="373" font-family="Arial" font-size="11" fill="#555555"></text>
<text x="255" y="376" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">3rd order: mol⁻² dm⁶ s⁻¹  (this reaction)</text>

<!-- showCalculation: numerical example -->
<rect x="470" y="250" width="380" height="130" fill="#FAFAFA" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="660" y="272" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Example Calculation</text>
<text x="485" y="292" font-family="Arial" font-size="12" fill="#000000">k = 0.05 mol⁻² dm⁶ s⁻¹</text>
<text x="485" y="310" font-family="Arial" font-size="12" fill="#000000">[A] = 0.2 mol dm⁻³,  [B] = 0.5 mol dm⁻³</text>
<line x1="480" y1="318" x2="840" y2="318" stroke="#CCCCCC" stroke-width="1"/>
<text x="485" y="336" font-family="Arial" font-size="12" fill="#000000">Rate = 0.05 × (0.2)² × (0.5)</text>
<text x="485" y="354" font-family="Arial" font-size="12" fill="#000000">     = 0.05 × 0.04 × 0.5</text>
<text x="485" y="372" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">     = 1.0 × 10⁻³ mol dm⁻³ s⁻¹</text>

<!-- showEquation: general form -->
<rect x="80" y="410" width="740" height="80" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="450" y="432" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">General Rate Equation Form</text>
<text x="450" y="454" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Rate = k[A]ᵐ[B]ⁿ   where m, n are experimentally determined orders</text>
<text x="450" y="475" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Orders CANNOT be deduced from stoichiometric equation — must be found from experiments</text>

<!-- Determination methods note -->
<text x="450" y="532" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">How to find orders experimentally:</text>
<text x="450" y="552" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Double [A] keeping [B] constant: if rate ×4 → 2nd order; if ×2 → 1st order; unchanged → 0th order</text>
<text x="450" y="570" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Graphical: [A] vs t (0th), ln[A] vs t (1st), 1/[A] vs t (2nd) — straight line identifies the order</text>

<defs>
  <marker id="arr9" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: reactionOrderGraphs
    // showZeroOrder, showFirstOrder, showSecondOrder comparison
    static reactionOrderGraphsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1100" height="700" viewBox="0 0 1100 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Reaction Order Graphs</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="550" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Reaction Order Graphs</text>
<text x="550" y="54" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Concentration–time and linearisation plots for 0th, 1st and 2nd order reactions</text>

<!-- ===== ROW 1: [A] vs time ===== -->
<text x="550" y="82" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Row 1: [A] vs Time</text>

<!-- Panel 1A: 0th order [A] vs t -->
<text x="185" y="102" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Zero Order</text>
<line x1="80" y1="110" x2="80" y2="260" stroke="#000000" stroke-width="1.5" marker-end="url(#arrO)"/>
<line x1="80" y1="260" x2="290" y2="260" stroke="#000000" stroke-width="1.5" marker-end="url(#arrO)"/>
<text x="52" y="190" font-family="Arial" font-size="10" fill="#000000" transform="rotate(-90,52,190)">[A]</text>
<text x="185" y="278" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Time</text>
<!-- 0th order: straight line decreasing -->
<line x1="90" y1="120" x2="280" y2="255" stroke="#000000" stroke-width="2.5"/>
<text x="185" y="235" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Straight line</text>
<text x="185" y="248" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">slope = −k</text>

<!-- Panel 1B: 1st order [A] vs t -->
<text x="550" y="102" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">First Order</text>
<line x1="445" y1="110" x2="445" y2="260" stroke="#000000" stroke-width="1.5" marker-end="url(#arrO)"/>
<line x1="445" y1="260" x2="655" y2="260" stroke="#000000" stroke-width="1.5" marker-end="url(#arrO)"/>
<text x="415" y="190" font-family="Arial" font-size="10" fill="#000000" transform="rotate(-90,415,190)">[A]</text>
<text x="550" y="278" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Time</text>
<!-- 1st order: exponential decay curve -->
<path d="M 455,120 C 480,150 500,185 540,215 C 570,238 600,252 645,258" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="550" y="235" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Exponential decay</text>
<text x="550" y="248" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">constant t½</text>

<!-- Panel 1C: 2nd order [A] vs t -->
<text x="915" y="102" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Second Order</text>
<line x1="810" y1="110" x2="810" y2="260" stroke="#000000" stroke-width="1.5" marker-end="url(#arrO)"/>
<line x1="810" y1="260" x2="1020" y2="260" stroke="#000000" stroke-width="1.5" marker-end="url(#arrO)"/>
<text x="780" y="190" font-family="Arial" font-size="10" fill="#000000" transform="rotate(-90,780,190)">[A]</text>
<text x="915" y="278" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Time</text>
<!-- 2nd order: faster initial decay than 1st order -->
<path d="M 820,120 C 835,155 845,190 865,220 C 890,245 930,256 1010,259" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="915" y="235" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Steeper initial decline</text>
<text x="915" y="248" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">increasing t½</text>

<!-- ===== ROW 2: Linearised plots ===== -->
<text x="550" y="315" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Row 2: Linearised Graphs (to identify order)</text>

<!-- Panel 2A: 0th order — [A] vs t (same as row1, already linear) -->
<text x="185" y="338" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">[A] vs t  → straight line</text>
<line x1="80" y1="345" x2="80" y2="490" stroke="#000000" stroke-width="1.5" marker-end="url(#arrO)"/>
<line x1="80" y1="490" x2="290" y2="490" stroke="#000000" stroke-width="1.5" marker-end="url(#arrO)"/>
<text x="52" y="420" font-family="Arial" font-size="10" fill="#000000" transform="rotate(-90,52,420)">[A]</text>
<text x="185" y="508" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Time</text>
<line x1="90" y1="355" x2="280" y2="482" stroke="#000000" stroke-width="2.5"/>
<text x="185" y="472" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">slope = −k</text>
<rect x="82" y="353" width="195" height="12" fill="none" stroke="#AAAAAA" stroke-width="0.8" stroke-dasharray="3,2"/>

<!-- Panel 2B: 1st order — ln[A] vs t (straight line) -->
<text x="550" y="338" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">ln[A] vs t  → straight line</text>
<line x1="445" y1="345" x2="445" y2="490" stroke="#000000" stroke-width="1.5" marker-end="url(#arrO)"/>
<line x1="445" y1="490" x2="655" y2="490" stroke="#000000" stroke-width="1.5" marker-end="url(#arrO)"/>
<text x="415" y="420" font-family="Arial" font-size="10" fill="#000000" transform="rotate(-90,415,420)">ln[A]</text>
<text x="550" y="508" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Time</text>
<line x1="455" y1="358" x2="645" y2="480" stroke="#000000" stroke-width="2.5"/>
<text x="550" y="472" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">slope = −k</text>
<rect x="447" y="356" width="195" height="12" fill="none" stroke="#AAAAAA" stroke-width="0.8" stroke-dasharray="3,2"/>

<!-- Panel 2C: 2nd order — 1/[A] vs t (straight line) -->
<text x="915" y="338" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1/[A] vs t  → straight line</text>
<line x1="810" y1="345" x2="810" y2="490" stroke="#000000" stroke-width="1.5" marker-end="url(#arrO)"/>
<line x1="810" y1="490" x2="1020" y2="490" stroke="#000000" stroke-width="1.5" marker-end="url(#arrO)"/>
<text x="780" y="420" font-family="Arial" font-size="10" fill="#000000" transform="rotate(-90,780,420)">1/[A]</text>
<text x="915" y="508" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Time</text>
<line x1="820" y1="480" x2="1010" y2="358" stroke="#000000" stroke-width="2.5"/>
<text x="915" y="472" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">slope = +k</text>
<rect x="812" y="356" width="195" height="12" fill="none" stroke="#AAAAAA" stroke-width="0.8" stroke-dasharray="3,2"/>

<!-- showComparison: summary table -->
<rect x="80" y="530" width="940" height="155" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="550" y="550" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Summary Comparison</text>
<line x1="80" y1="556" x2="1020" y2="556" stroke="#CCCCCC" stroke-width="1"/>
<!-- headers -->
<text x="200" y="572" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Property</text>
<text x="420" y="572" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Zero Order</text>
<text x="620" y="572" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">First Order</text>
<text x="870" y="572" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Second Order</text>
<line x1="80" y1="578" x2="1020" y2="578" stroke="#CCCCCC" stroke-width="1"/>
<!-- Row 1 -->
<text x="200" y="594" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Rate equation</text>
<text x="420" y="594" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Rate = k</text>
<text x="620" y="594" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Rate = k[A]</text>
<text x="870" y="594" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Rate = k[A]²</text>
<!-- Row 2 -->
<text x="200" y="613" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Integrated form</text>
<text x="420" y="613" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">[A] = [A]₀ − kt</text>
<text x="620" y="613" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">ln[A] = ln[A]₀ − kt</text>
<text x="870" y="613" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1/[A] = 1/[A]₀ + kt</text>
<!-- Row 3 -->
<text x="200" y="632" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Half-life</text>
<text x="420" y="632" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">t½ = [A]₀/2k (varies)</text>
<text x="620" y="632" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">t½ = ln2/k (constant)</text>
<text x="870" y="632" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">t½ = 1/(k[A]₀) (varies)</text>
<!-- Row 4 -->
<text x="200" y="651" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Units of k</text>
<text x="420" y="651" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">mol dm⁻³ s⁻¹</text>
<text x="620" y="651" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">s⁻¹</text>
<text x="870" y="651" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">mol⁻¹ dm³ s⁻¹</text>
<!-- Row 5 -->
<text x="200" y="670" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Linearised plot</text>
<text x="420" y="670" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">[A] vs t</text>
<text x="620" y="670" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">ln[A] vs t</text>
<text x="870" y="670" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1/[A] vs t</text>

<defs>
  <marker id="arrO" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0,8 3,0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: arrheniusEquationDiagram
    // activationEnergy: 75
    static arrheniusEquationDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Arrhenius Equation Plot</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Arrhenius Equation</text>
<text x="450" y="54" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">k = Ae^(−Ea/RT)   →   ln(k) vs 1/T gives a straight line</text>

<!-- showEquation box -->
<rect x="260" y="68" width="380" height="55" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="6"/>
<text x="450" y="92" font-family="Arial" font-size="17" fill="#000000" text-anchor="middle" font-weight="bold">ln(k) = ln(A) − Eₐ/R × (1/T)</text>
<text x="450" y="112" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">y = c + m·x  form  |  slope = −Ea/R</text>

<!-- Axes for ln(k) vs 1/T plot -->
<line x1="100" y1="145" x2="100" y2="490" stroke="#000000" stroke-width="2" marker-end="url(#arrA)"/>
<line x1="100" y1="490" x2="700" y2="490" stroke="#000000" stroke-width="2" marker-end="url(#arrA)"/>
<text x="55" y="320" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,55,320)">ln(k)</text>
<text x="400" y="525" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">1/T (K⁻¹) →</text>
<text x="715" y="494" font-family="Arial" font-size="11" fill="#555555">increasing T →</text>

<!-- Axis note: 1/T decreases left to right means T increases -->
<text x="145" y="508" font-family="Arial" font-size="10" fill="#777777">high T (small 1/T)</text>
<text x="565" y="508" font-family="Arial" font-size="10" fill="#777777">low T (large 1/T)</text>

<!-- showGraph: Arrhenius line (negative slope) -->
<line x1="140" y1="165" x2="670" y2="470" stroke="#000000" stroke-width="3"/>

<!-- y-intercept label: ln(A) -->
<circle cx="100" cy="135" r="4" fill="#000000"/>
<line x1="100" y1="135" x2="135" y2="135" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
<text x="142" y="139" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">y-intercept = ln(A)</text>

<!-- showFrequencyFactor label -->
<rect x="700" y="150" width="185" height="80" fill="#FAFAFA" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="792" y="170" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">A = frequency factor</text>
<text x="792" y="188" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(pre-exponential)</text>
<text x="792" y="206" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">related to collision</text>
<text x="792" y="221" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">frequency &amp; orientation</text>

<!-- showActivationEnergy: slope annotation -->
<!-- Slope triangle -->
<line x1="250" y1="232" x2="500" y2="232" stroke="#555555" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="500" y1="232" x2="500" y2="375" stroke="#555555" stroke-width="1.5" stroke-dasharray="5,3"/>
<!-- Slope label -->
<text x="375" y="225" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Δ(1/T)</text>
<text x="520" y="310" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Δln(k)</text>
<text x="380" y="330" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">slope = −Eₐ/R</text>
<text x="380" y="348" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Eₐ = −R × slope</text>
<text x="380" y="365" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">= −8.314 × slope</text>

<!-- Given Ea -->
<rect x="700" y="255" width="185" height="50" fill="#F0F0F0" stroke="#000000" stroke-width="1" rx="4"/>
<text x="792" y="275" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Eₐ = 75 kJ mol⁻¹</text>
<text x="792" y="294" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">slope = −75000/8.314</text>
<text x="792" y="308" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">= −9020 K</text>

<!-- Info box -->
<rect x="100" y="543" width="700" height="48" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="115" y="562" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Key relationships:</text>
<text x="115" y="580" font-family="Arial" font-size="11" fill="#000000">Higher T → larger k → faster rate  |  Higher Eₐ → steeper slope → k more sensitive to temperature change</text>

<defs>
  <marker id="arrA" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: maxwellBoltzmannDistribution
    // temperature: 298, activationEnergy: 50
    static maxwellBoltzmannDistributionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Maxwell-Boltzmann Distribution</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Maxwell-Boltzmann Distribution</text>
<text x="450" y="54" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Distribution of molecular kinetic energies — T = 298 K, Eₐ = 50 kJ mol⁻¹</text>

<!-- Axes -->
<line x1="80" y1="70" x2="80" y2="460" stroke="#000000" stroke-width="2" marker-end="url(#arrM)"/>
<line x1="80" y1="460" x2="820" y2="460" stroke="#000000" stroke-width="2" marker-end="url(#arrM)"/>
<text x="40" y="270" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" transform="rotate(-90,40,270)">Number of molecules</text>
<text x="450" y="495" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Kinetic energy →</text>

<!-- Origin label -->
<text x="70" y="478" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">O</text>
<line x1="80" y1="460" x2="80" y2="460" stroke="#000000" stroke-width="1"/>

<!-- showCurve: T1=298K curve (main) -->
<!-- Bell-shaped curve: rises from origin, peaks around x=250, then falls asymptotically -->
<path d="M 85,458 C 90,450 110,420 150,360 C 185,308 210,260 250,195 C 265,175 280,160 300,155 C 320,150 340,153 360,163 C 400,188 440,240 490,300 C 545,365 600,410 660,440 C 700,455 740,460 800,461" stroke="#000000" stroke-width="3" fill="none"/>

<!-- Peak marker -->
<line x1="300" y1="155" x2="300" y2="460" stroke="#888888" stroke-width="1" stroke-dasharray="5,4"/>
<text x="300" y="475" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Most probable</text>
<text x="300" y="489" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">energy</text>

<!-- Mean energy marker -->
<line x1="370" y1="155" x2="370" y2="460" stroke="#555555" stroke-width="1" stroke-dasharray="3,3"/>
<text x="370" y="145" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">mean</text>

<!-- showActivationEnergy: Ea vertical line -->
<line x1="580" y1="80" x2="580" y2="460" stroke="#000000" stroke-width="2.5" stroke-dasharray="8,5"/>
<text x="580" y="72" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Eₐ</text>
<text x="595" y="100" font-family="Arial" font-size="11" fill="#000000">= 50 kJ mol⁻¹</text>

<!-- showAreaAboveEa: cross-hatch the area to the right of Ea under the curve -->
<!-- Simplified: draw a shaded polygon for the area -->
<path d="M 580,380 C 610,420 640,440 680,450 C 710,458 750,460 800,461 L 800,460 L 580,460 Z" fill="none" stroke="#000000" stroke-width="0.5"/>
<!-- Cross-hatch lines for shading -->
<line x1="580" y1="440" x2="600" y2="420" stroke="#000000" stroke-width="0.8"/>
<line x1="590" y1="452" x2="620" y2="422" stroke="#000000" stroke-width="0.8"/>
<line x1="605" y1="455" x2="640" y2="420" stroke="#000000" stroke-width="0.8"/>
<line x1="620" y1="457" x2="660" y2="417" stroke="#000000" stroke-width="0.8"/>
<line x1="640" y1="458" x2="680" y2="418" stroke="#000000" stroke-width="0.8"/>
<line x1="660" y1="459" x2="700" y2="419" stroke="#000000" stroke-width="0.8"/>
<line x1="680" y1="459" x2="720" y2="419" stroke="#000000" stroke-width="0.8"/>
<line x1="700" y1="460" x2="740" y2="420" stroke="#000000" stroke-width="0.8"/>
<line x1="720" y1="460" x2="760" y2="420" stroke="#000000" stroke-width="0.8"/>
<line x1="740" y1="460" x2="780" y2="420" stroke="#000000" stroke-width="0.8"/>
<line x1="760" y1="460" x2="800" y2="420" stroke="#000000" stroke-width="0.8"/>
<line x1="780" y1="460" x2="800" y2="440" stroke="#000000" stroke-width="0.8"/>
<text x="700" y="440" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Molecules</text>
<text x="700" y="454" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">with E ≥ Eₐ</text>

<!-- showTemperatureEffect: higher temperature curve T2 -->
<path d="M 85,458 C 92,448 115,415 160,355 C 200,300 230,255 270,205 C 295,175 320,155 355,148 C 380,144 405,148 430,160 C 470,182 510,220 560,275 C 610,330 660,390 720,430 C 750,445 780,455 800,460" stroke="#333333" stroke-width="2" fill="none" stroke-dasharray="12,5"/>

<!-- T2 label -->
<text x="360" y="138" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">T₂ &gt; T₁</text>
<text x="305" y="145" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">T₁=298K</text>

<!-- Legend -->
<line x1="90" y1="510" x2="130" y2="510" stroke="#000000" stroke-width="3"/>
<text x="138" y="514" font-family="Arial" font-size="12" fill="#000000">T₁ = 298 K (lower temperature)</text>
<line x1="430" y1="510" x2="470" y2="510" stroke="#333333" stroke-width="2" stroke-dasharray="8,4"/>
<text x="478" y="514" font-family="Arial" font-size="12" fill="#000000">T₂ &gt; T₁ (higher temperature)</text>

<text x="90" y="540" font-family="Arial" font-size="11" fill="#555555">At higher T: curve flattens and shifts right → larger fraction of molecules has E ≥ Eₐ → faster reaction</text>
<text x="90" y="558" font-family="Arial" font-size="11" fill="#555555">Area under both curves is equal (same number of molecules). Catalyst lowers Eₐ, shifting the Eₐ line left.</text>

<defs>
  <marker id="arrM" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: catalystEffectDiagram
    static catalystEffectDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Catalyst Effect on Activation Energy</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Effect of a Catalyst on Activation Energy</text>
<text x="450" y="54" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Catalyst provides alternative pathway with lower Eₐ — ΔH remains unchanged</text>

<!-- Axes -->
<line x1="100" y1="70" x2="100" y2="490" stroke="#000000" stroke-width="2" marker-end="url(#arrC)"/>
<line x1="100" y1="490" x2="820" y2="490" stroke="#000000" stroke-width="2" marker-end="url(#arrC)"/>
<text x="55" y="285" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,55,285)">Enthalpy (H)</text>
<text x="460" y="525" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Reaction Coordinate →</text>

<!-- Reactants level: y=310 -->
<line x1="120" y1="310" x2="250" y2="310" stroke="#000000" stroke-width="3"/>
<text x="185" y="298" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Reactants</text>

<!-- Products level: y=420 (exothermic) -->
<line x1="680" y1="420" x2="800" y2="420" stroke="#000000" stroke-width="3"/>
<text x="740" y="408" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Products</text>

<!-- showUncatalyzed: high activation energy profile -->
<!-- Uncatalyzed peak at y=100 -->
<path d="M 250,310 C 310,310 355,305 410,105 C 460,10 510,10 560,105 C 610,300 650,320 680,420" stroke="#000000" stroke-width="3" fill="none"/>
<text x="460" y="90" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-style="italic">Uncatalyzed</text>
<text x="460" y="78" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">transition state</text>

<!-- showCatalyzed: lower activation energy profile (dashed) -->
<!-- Catalyzed peak at y=190 -->
<path d="M 250,310 C 295,310 330,305 370,195 C 400,120 440,115 480,195 C 520,285 570,330 680,420" stroke="#000000" stroke-width="2.5" fill="none" stroke-dasharray="10,5"/>
<text x="425" y="165" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-style="italic">Catalyzed</text>
<text x="425" y="153" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">transition state</text>

<!-- showActivationEnergyDifference: Ea labels -->
<!-- Ea uncatalyzed: from reactants (310) to peak (100) -->
<line x1="570" y1="310" x2="570" y2="105" stroke="#000000" stroke-width="2" marker-end="url(#arrC)" marker-start="url(#arrCr)"/>
<text x="595" y="215" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Eₐ</text>
<text x="595" y="230" font-family="Arial" font-size="11" fill="#000000">(uncatalyzed)</text>

<!-- Ea catalyzed: from reactants (310) to catalyzed peak (190) -->
<line x1="620" y1="310" x2="620" y2="195" stroke="#000000" stroke-width="2" marker-end="url(#arrC)" marker-start="url(#arrCr)" stroke-dasharray="6,3"/>
<text x="650" y="258" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Eₐ'</text>
<text x="650" y="273" font-family="Arial" font-size="11" fill="#000000">(catalyzed)</text>
<text x="650" y="288" font-family="Arial" font-size="11" fill="#555555">Eₐ' &lt; Eₐ</text>

<!-- showEnthalpyUnchanged: double-headed ΔH arrow (same for both) -->
<line x1="740" y1="310" x2="740" y2="424" stroke="#000000" stroke-width="2" marker-end="url(#arrC)" marker-start="url(#arrCr)"/>
<text x="760" y="372" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">ΔH</text>
<text x="760" y="387" font-family="Arial" font-size="11" fill="#555555">unchanged</text>

<!-- Horizontal dashed reference lines -->
<line x1="250" y1="310" x2="740" y2="310" stroke="#BBBBBB" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="680" y1="420" x2="740" y2="420" stroke="#BBBBBB" stroke-width="1" stroke-dasharray="4,3"/>

<!-- Info box -->
<rect x="100" y="540" width="700" height="50" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="115" y="560" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Key Principles:</text>
<text x="115" y="578" font-family="Arial" font-size="11" fill="#000000">Catalyst lowers Eₐ → more molecules have sufficient energy → faster rate. Catalyst regenerated; ΔH &amp; equilibrium position unchanged.</text>

<!-- Legend -->
<line x1="100" y1="515" x2="140" y2="515" stroke="#000000" stroke-width="3"/>
<text x="148" y="519" font-family="Arial" font-size="12" fill="#000000">Uncatalyzed pathway</text>
<line x1="400" y1="515" x2="440" y2="515" stroke="#000000" stroke-width="2.5" stroke-dasharray="8,4"/>
<text x="448" y="519" font-family="Arial" font-size="12" fill="#000000">Catalyzed pathway</text>

<defs>
  <marker id="arrC" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
  <marker id="arrCr" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto">
    <polygon points="10 0,0 3,10 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: reactionMechanismDiagram
    // steps: 2
    static reactionMechanismDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Reaction Mechanism Diagram - 2 steps</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Reaction Mechanism Diagram</text>
<text x="500" y="54" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">2-Step mechanism with intermediate — energy profile</text>

<!-- Axes -->
<line x1="80" y1="70" x2="80" y2="490" stroke="#000000" stroke-width="2" marker-end="url(#arrR)"/>
<line x1="80" y1="490" x2="900" y2="490" stroke="#000000" stroke-width="2" marker-end="url(#arrR)"/>
<text x="42" y="285" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" transform="rotate(-90,42,285)">Enthalpy (H)</text>
<text x="490" y="525" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Reaction Coordinate →</text>

<!-- Energy levels -->
<!-- Reactants: A + B  y=340 -->
<line x1="100" y1="340" x2="220" y2="340" stroke="#000000" stroke-width="3"/>
<text x="160" y="328" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">A + B</text>
<text x="160" y="356" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Reactants</text>

<!-- TS1: first transition state  y=140 -->
<line x1="295" y1="140" x2="375" y2="140" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="335" y="125" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-style="italic">[TS1]‡</text>

<!-- Intermediate: AB*  y=265 -->
<line x1="430" y1="265" x2="550" y2="265" stroke="#000000" stroke-width="2.5"/>
<text x="490" y="250" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">AB*</text>
<text x="490" y="283" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Intermediate</text>

<!-- TS2: second transition state  y=195 (RDS - higher) -->
<line x1="600" y1="195" x2="690" y2="195" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="645" y="180" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-style="italic">[TS2]‡</text>

<!-- Products: C + D  y=390 -->
<line x1="760" y1="390" x2="880" y2="390" stroke="#000000" stroke-width="3"/>
<text x="820" y="378" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">C + D</text>
<text x="820" y="406" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Products</text>

<!-- Energy profile curve (2-step, 2 peaks) -->
<path d="M 220,340 C 255,340 275,340 295,145 C 315,10 375,10 400,145 C 425,265 430,268 490,268 C 550,268 565,268 600,200 C 625,130 660,120 695,200 C 720,270 760,370 760,390" stroke="#000000" stroke-width="3" fill="none"/>

<!-- showIntermediates annotation -->
<line x1="490" y1="275" x2="490" y2="350" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="505" y="320" font-family="Arial" font-size="11" fill="#000000">intermediate</text>
<text x="505" y="334" font-family="Arial" font-size="11" fill="#555555">(real species)</text>

<!-- showTransitionStates annotation -->
<line x1="335" y1="145" x2="335" y2="210" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="260" y="215" font-family="Arial" font-size="11" fill="#000000">transition state</text>
<text x="260" y="229" font-family="Arial" font-size="11" fill="#555555">(cannot isolate)</text>

<!-- showRateDeterminingStep: label on Step 2 (larger Ea) -->
<!-- Ea step 1: reactants to TS1 -->
<line x1="200" y1="340" x2="200" y2="140" stroke="#777777" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arrR)"/>
<text x="165" y="245" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Ea₁</text>
<text x="165" y="260" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Step 1</text>

<!-- Ea step 2: intermediate to TS2 (larger — RDS) -->
<line x1="570" y1="265" x2="570" y2="195" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arrR)"/>
<text x="590" y="235" font-family="Arial" font-size="11" fill="#000000">Ea₂</text>

<!-- RDS banner -->
<rect x="600" y="145" width="120" height="36" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="660" y="162" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">RDS — Step 2</text>
<text x="660" y="175" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">highest Ea determines rate</text>

<!-- Overall ΔH -->
<line x1="830" y1="340" x2="830" y2="393" stroke="#000000" stroke-width="2" marker-end="url(#arrR)" marker-start="url(#arrRr)"/>
<text x="848" y="372" font-family="Arial" font-size="12" fill="#000000">ΔH</text>

<!-- showEnergyProfile stepwise labels -->
<text x="260" y="430" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Step 1</text>
<text x="260" y="447" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">A + B → AB*</text>
<text x="260" y="462" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(fast)</text>

<text x="670" y="430" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Step 2</text>
<text x="670" y="447" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">AB* → C + D</text>
<text x="670" y="462" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(slow — RDS)</text>

<!-- Info box -->
<rect x="80" y="555" width="840" height="60" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="100" y="574" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Key Concepts:</text>
<text x="100" y="592" font-family="Arial" font-size="11" fill="#000000">• Intermediates appear in mechanism but not overall equation  • Transition states are energy maxima (‡)  • RDS has highest activation energy</text>
<text x="100" y="608" font-family="Arial" font-size="11" fill="#000000">• Rate equation determined by slow step (RDS): overall rate = k₂[AB*]  • Intermediate concentration from fast equilibrium step</text>

<defs>
  <marker id="arrR" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
  <marker id="arrRr" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto">
    <polygon points="10 0,0 3,10 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: halfLifeDiagram
    // initialConcentration: 100, halfLife: 10
    static halfLifeDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Half-Life Diagram - First Order</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Half-Life Diagram</text>
<text x="450" y="54" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">First-order reaction — [A]₀ = 100 mol dm⁻³, t½ = 10 min</text>

<!-- Axes -->
<line x1="100" y1="70" x2="100" y2="480" stroke="#000000" stroke-width="2" marker-end="url(#arrH)"/>
<line x1="100" y1="480" x2="820" y2="480" stroke="#000000" stroke-width="2" marker-end="url(#arrH)"/>
<text x="55" y="280" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" transform="rotate(-90,55,280)">[A] / mol dm⁻³</text>
<text x="460" y="515" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Time / min →</text>

<!-- showConcentrationCurve: exponential decay -->
<!-- [A]₀=100 at x=100, halves every t½=10min (scaled: 10min = 120px) -->
<!-- y scale: 100 units → 370px, so [A]=100 → y=110, [A]=50 → y=295, [A]=25 → y=387, [A]=12.5 → y=434 -->
<path d="M 100,110 C 140,150 180,210 220,295 C 255,362 275,390 340,433 C 390,458 440,468 580,476 C 650,478 730,479 800,480" stroke="#000000" stroke-width="3" fill="none"/>

<!-- showHalfLives: t½ = 10 → at x=220 (t=10), at x=340 (t=20), at x=460 (t=30) -->
<!-- Half-life 1: t=10min, [A]=50 -->
<line x1="100" y1="295" x2="220" y2="295" stroke="#777777" stroke-width="1" stroke-dasharray="5,4"/>
<line x1="220" y1="295" x2="220" y2="480" stroke="#777777" stroke-width="1" stroke-dasharray="5,4"/>
<text x="88" y="299" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">50</text>
<text x="220" y="496" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">t½=10</text>

<!-- Half-life 2: t=20min, [A]=25 -->
<line x1="100" y1="387" x2="340" y2="387" stroke="#777777" stroke-width="1" stroke-dasharray="5,4"/>
<line x1="340" y1="387" x2="340" y2="480" stroke="#777777" stroke-width="1" stroke-dasharray="5,4"/>
<text x="88" y="391" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">25</text>
<text x="340" y="496" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">2t½=20</text>

<!-- Half-life 3: t=30min, [A]=12.5 -->
<line x1="100" y1="433" x2="460" y2="433" stroke="#777777" stroke-width="1" stroke-dasharray="5,4"/>
<line x1="460" y1="433" x2="460" y2="480" stroke="#777777" stroke-width="1" stroke-dasharray="5,4"/>
<text x="88" y="437" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">12.5</text>
<text x="460" y="496" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">3t½=30</text>

<!-- [A]₀ label -->
<text x="88" y="114" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">100</text>
<line x1="95" y1="110" x2="108" y2="110" stroke="#000000" stroke-width="1.5"/>

<!-- showConstantHalfLife: equal time intervals annotation -->
<line x1="100" y1="445" x2="220" y2="445" stroke="#000000" stroke-width="2" marker-end="url(#arrH)" marker-start="url(#arrHr)"/>
<text x="160" y="440" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">t½</text>
<line x1="220" y1="445" x2="340" y2="445" stroke="#000000" stroke-width="2" marker-end="url(#arrH)" marker-start="url(#arrHr)"/>
<text x="280" y="440" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">t½</text>
<line x1="340" y1="445" x2="460" y2="445" stroke="#000000" stroke-width="2" marker-end="url(#arrH)" marker-start="url(#arrHr)"/>
<text x="400" y="440" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">t½</text>
<text x="270" y="428" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">constant t½ (1st order only)</text>

<!-- Formulae box -->
<rect x="520" y="100" width="340" height="120" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="690" y="120" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">First-Order Half-Life</text>
<line x1="530" y1="126" x2="850" y2="126" stroke="#CCCCCC" stroke-width="1"/>
<text x="535" y="144" font-family="Arial" font-size="12" fill="#000000">t½ = ln(2) / k = 0.693 / k</text>
<text x="535" y="162" font-family="Arial" font-size="12" fill="#000000">k = ln(2) / t½ = 0.0693 min⁻¹</text>
<text x="535" y="180" font-family="Arial" font-size="12" fill="#000000">[A] = [A]₀ × (½)ⁿ  (n = no. half-lives)</text>
<text x="535" y="198" font-family="Arial" font-size="11" fill="#555555">t½ is independent of initial [A]</text>
<text x="535" y="213" font-family="Arial" font-size="11" fill="#555555">(diagnostic feature of 1st order)</text>

<!-- Summary box -->
<rect x="100" y="535" width="700" height="52" fill="#F0F0F0" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="115" y="554" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Half-Life Summary by Order:</text>
<text x="115" y="572" font-family="Arial" font-size="11" fill="#000000">0th: t½ = [A]₀/2k (decreases with time)  |  1st: t½ = 0.693/k (CONSTANT)  |  2nd: t½ = 1/(k[A]₀) (increases with time)</text>

<defs>
  <marker id="arrH" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
  <marker id="arrHr" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto">
    <polygon points="10 0,0 3,10 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // ============================================================
    // ===== 7. CHEMICAL EQUILIBRIUM ==============================
    // ============================================================

    // Generated from registry: equilibriumDiagram
    // reaction: N2 + 3H2 ⇌ 2NH3
    static equilibriumDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Chemical Equilibrium Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Chemical Equilibrium</text>
<text x="450" y="54" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">N₂(g) + 3H₂(g) ⇌ 2NH₃(g)  — rates become equal at equilibrium</text>

<!-- Axes -->
<line x1="100" y1="70" x2="100" y2="460" stroke="#000000" stroke-width="2" marker-end="url(#arrEq)"/>
<line x1="100" y1="460" x2="780" y2="460" stroke="#000000" stroke-width="2" marker-end="url(#arrEq)"/>
<text x="55" y="270" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" transform="rotate(-90,55,270)">Rate of reaction</text>
<text x="440" y="495" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Time →</text>

<!-- Equilibrium reached vertical marker -->
<line x1="480" y1="75" x2="480" y2="460" stroke="#888888" stroke-width="1.5" stroke-dasharray="8,5"/>
<text x="480" y="68" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Equilibrium reached</text>

<!-- showForwardRate: high initial, decreasing to equilibrium -->
<path d="M 110,100 C 160,115 220,145 300,195 C 370,240 420,275 480,310" stroke="#000000" stroke-width="3" fill="none"/>
<!-- Flat after equilibrium -->
<line x1="480" y1="310" x2="760" y2="310" stroke="#000000" stroke-width="3"/>
<text x="370" y="210" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Forward rate</text>
<text x="370" y="226" font-family="Arial" font-size="11" fill="#555555">(decreasing)</text>
<text x="620" y="298" font-family="Arial" font-size="12" fill="#000000">Forward = Reverse</text>

<!-- showReverseRate: low initial, increasing to equilibrium -->
<path d="M 110,430 C 160,415 220,390 300,365 C 370,345 420,330 480,310" stroke="#333333" stroke-width="2.5" fill="none" stroke-dasharray="10,5"/>
<!-- Flat after equilibrium -->
<line x1="480" y1="310" x2="760" y2="310" stroke="#333333" stroke-width="2.5" stroke-dasharray="10,5"/>
<text x="370" y="390" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Reverse rate</text>
<text x="370" y="406" font-family="Arial" font-size="11" fill="#555555">(increasing)</text>

<!-- showEquilibriumPoint: dot at intersection -->
<circle cx="480" cy="310" r="6" fill="#000000"/>
<text x="510" y="320" font-family="Arial" font-size="12" fill="#000000">Equilibrium</text>
<text x="510" y="336" font-family="Arial" font-size="11" fill="#555555">point</text>

<!-- showConcentrations panel (bottom) -->
<rect x="100" y="508" width="660" height="80" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="430" y="527" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">At equilibrium:</text>
<text x="120" y="547" font-family="Arial" font-size="12" fill="#000000">• Forward rate = Reverse rate (dynamic equilibrium)</text>
<text x="120" y="565" font-family="Arial" font-size="12" fill="#000000">• Concentrations of reactants and products remain CONSTANT (not necessarily equal)</text>
<text x="120" y="580" font-family="Arial" font-size="12" fill="#000000">• Closed system required  |  Macroscopic properties unchanged</text>

<!-- Legend -->
<line x1="100" y1="475" x2="140" y2="475" stroke="#000000" stroke-width="3"/>
<text x="148" y="479" font-family="Arial" font-size="12" fill="#000000">Forward reaction rate</text>
<line x1="400" y1="475" x2="440" y2="475" stroke="#333333" stroke-width="2.5" stroke-dasharray="8,4"/>
<text x="448" y="479" font-family="Arial" font-size="12" fill="#000000">Reverse reaction rate</text>

<defs>
  <marker id="arrEq" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: equilibriumConstantDiagram
    // reaction: aA + bB ⇌ cC + dD
    static equilibriumConstantDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Equilibrium Constant Expression</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Equilibrium Constant Expressions</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Kc and Kp for: aA + bB ⇌ cC + dD</text>

<!-- showKcExpression -->
<rect x="80" y="75" width="740" height="120" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="6"/>
<text x="450" y="98" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Kc — Equilibrium Constant in Terms of Concentration</text>
<text x="450" y="128" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ</text>
<text x="450" y="155" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Units depend on (c+d) − (a+b)  |  Temperature dependent  |  Products over reactants (equilibrium concentrations only)</text>
<text x="450" y="175" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Large Kc (&gt;&gt;1): products favoured  |  Small Kc (&lt;&lt;1): reactants favoured  |  Kc ≈ 1: neither strongly favoured</text>

<!-- showKpExpression -->
<rect x="80" y="215" width="740" height="115" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="6"/>
<text x="450" y="238" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Kp — Equilibrium Constant in Terms of Partial Pressure</text>
<text x="450" y="265" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Kp = (pC)ᶜ(pD)ᵈ / (pA)ᵃ(pB)ᵇ</text>
<text x="450" y="292" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Units: Pa^Δn or atm^Δn, where Δn = (c+d)−(a+b)  |  Used for gaseous equilibria</text>
<text x="450" y="310" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Relationship: Kp = Kc × (RT)^Δn   where Δn = moles of gaseous products − moles of gaseous reactants</text>

<!-- showExample: N2 + 3H2 ⇌ 2NH3 -->
<rect x="80" y="350" width="740" height="130" fill="#FAFAFA" stroke="#AAAAAA" stroke-width="1.5" rx="5"/>
<text x="450" y="372" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Worked Example: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)</text>
<line x1="90" y1="380" x2="810" y2="380" stroke="#CCCCCC" stroke-width="1"/>
<text x="100" y="398" font-family="Arial" font-size="12" fill="#000000">Kc = [NH₃]² / ([N₂][H₂]³)     units: (mol dm⁻³)² / (mol dm⁻³)(mol dm⁻³)³ = mol⁻² dm⁶</text>
<text x="100" y="416" font-family="Arial" font-size="12" fill="#000000">Kp = (pNH₃)² / (pN₂)(pH₂)³   Δn = 2 − (1+3) = −2   units: Pa⁻² (or atm⁻²)</text>
<text x="100" y="434" font-family="Arial" font-size="12" fill="#000000">If [N₂]=0.5, [H₂]=1.5, [NH₃]=0.3 mol dm⁻³:  Kc = (0.3)² / (0.5 × 1.5³) = 0.09 / 1.6875 = 0.053</text>
<text x="100" y="452" font-family="Arial" font-size="12" fill="#555555">Kc &lt; 1 → equilibrium lies towards reactants — not much NH₃ formed at this temperature</text>
<text x="100" y="470" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Remember: solids and pure liquids are NOT included in K expressions</text>

<!-- showUnits reminder -->
<rect x="80" y="500" width="740" height="78" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="100" y="520" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Key Rules:</text>
<text x="100" y="538" font-family="Arial" font-size="11" fill="#000000">• Only equilibrium concentrations/pressures used (not initial)  • K only changes with temperature  • Adding catalyst does NOT change K</text>
<text x="100" y="556" font-family="Arial" font-size="11" fill="#000000">• Changing pressure or concentration shifts position but K value stays the same (at constant T)</text>
<text x="100" y="572" font-family="Arial" font-size="11" fill="#000000">• If reaction reversed: K becomes 1/K  |  If multiplied by n: K becomes Kⁿ</text>

</g>
</svg>`;

    // Generated from registry: leChatellierPrincipleDiagram
    // stress: concentration
    static leChatellierPrincipleDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Le Chatelier's Principle</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Le Chatelier's Principle</text>
<text x="500" y="55" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">"If a stress is applied to a system at equilibrium, the system shifts to oppose that stress"</text>

<!-- showOriginalEquilibrium: central reaction -->
<rect x="300" y="70" width="400" height="50" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="6"/>
<text x="500" y="93" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">N₂(g) + 3H₂(g) ⇌ 2NH₃(g)</text>
<text x="500" y="110" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">ΔH = −92 kJ mol⁻¹ (exothermic)</text>

<!-- Three stress panels arranged vertically -->

<!-- ===== Panel 1: CONCENTRATION ===== -->
<rect x="40" y="140" width="920" height="155" fill="#FAFAFA" stroke="#000000" stroke-width="1.5" rx="6"/>
<text x="500" y="162" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">1. Change in Concentration</text>

<!-- showStress: adding N₂ -->
<rect x="60" y="173" width="200" height="40" fill="#EEEEEE" stroke="#888888" stroke-width="1" rx="4"/>
<text x="160" y="190" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Stress:</text>
<text x="160" y="206" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Add N₂ (increase [N₂])</text>

<!-- Arrow right -->
<line x1="268" y1="193" x2="308" y2="193" stroke="#000000" stroke-width="2.5" marker-end="url(#arrL)"/>

<!-- showShift -->
<rect x="315" y="173" width="280" height="40" fill="#EEEEEE" stroke="#888888" stroke-width="1" rx="4"/>
<text x="455" y="190" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Shift: →  Forward direction</text>
<text x="455" y="206" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">to use up excess N₂</text>

<!-- Arrow right -->
<line x1="603" y1="193" x2="643" y2="193" stroke="#000000" stroke-width="2.5" marker-end="url(#arrL)"/>

<!-- showNewEquilibrium -->
<rect x="650" y="173" width="280" height="40" fill="#EEEEEE" stroke="#888888" stroke-width="1" rx="4"/>
<text x="790" y="190" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">New Equilibrium:</text>
<text x="790" y="206" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">more NH₃, less N₂ &amp; H₂  |  K unchanged</text>

<!-- Row 2: removing product -->
<text x="160" y="242" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Remove NH₃</text>
<line x1="268" y1="237" x2="308" y2="237" stroke="#000000" stroke-width="2" marker-end="url(#arrL)"/>
<text x="455" y="242" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Shift forward, more product made</text>
<line x1="603" y1="237" x2="643" y2="237" stroke="#000000" stroke-width="2" marker-end="url(#arrL)"/>
<text x="790" y="242" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">[reactants] decrease, [NH₃] lower than original</text>
<text x="500" y="283" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Note: concentration of added species always higher in new equilibrium; removed species always lower</text>

<!-- ===== Panel 2: PRESSURE ===== -->
<rect x="40" y="310" width="920" height="140" fill="#FAFAFA" stroke="#000000" stroke-width="1.5" rx="6"/>
<text x="500" y="332" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">2. Change in Pressure (gases only)</text>

<rect x="60" y="343" width="200" height="40" fill="#EEEEEE" stroke="#888888" stroke-width="1" rx="4"/>
<text x="160" y="360" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Stress:</text>
<text x="160" y="376" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Increase pressure</text>
<line x1="268" y1="363" x2="308" y2="363" stroke="#000000" stroke-width="2.5" marker-end="url(#arrL)"/>
<rect x="315" y="343" width="280" height="40" fill="#EEEEEE" stroke="#888888" stroke-width="1" rx="4"/>
<text x="455" y="360" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Shift: →  Fewer moles of gas</text>
<text x="455" y="376" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">1+3=4 mol → 2 mol  (forward)</text>
<line x1="603" y1="363" x2="643" y2="363" stroke="#000000" stroke-width="2.5" marker-end="url(#arrL)"/>
<rect x="650" y="343" width="280" height="40" fill="#EEEEEE" stroke="#888888" stroke-width="1" rx="4"/>
<text x="790" y="360" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">More NH₃ at higher pressure</text>
<text x="790" y="376" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Decrease pressure → reverse, more N₂ + H₂</text>

<text x="500" y="438" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">If Δn(gas) = 0, pressure has no effect. Inert gas at constant volume: no effect. At constant P: concentration diluted.</text>

<!-- ===== Panel 3: TEMPERATURE ===== -->
<rect x="40" y="455" width="920" height="140" fill="#FAFAFA" stroke="#000000" stroke-width="1.5" rx="6"/>
<text x="500" y="477" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">3. Change in Temperature</text>

<rect x="60" y="488" width="200" height="40" fill="#EEEEEE" stroke="#888888" stroke-width="1" rx="4"/>
<text x="160" y="505" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Stress:</text>
<text x="160" y="521" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Increase temperature</text>
<line x1="268" y1="508" x2="308" y2="508" stroke="#000000" stroke-width="2.5" marker-end="url(#arrL)"/>
<rect x="315" y="488" width="280" height="40" fill="#EEEEEE" stroke="#888888" stroke-width="1" rx="4"/>
<text x="455" y="505" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Shift: ←  Endothermic direction</text>
<text x="455" y="521" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">absorbs heat: reverses here (ΔH&lt;0 → reverse)</text>
<line x1="603" y1="508" x2="643" y2="508" stroke="#000000" stroke-width="2.5" marker-end="url(#arrL)"/>
<rect x="650" y="488" width="280" height="40" fill="#EEEEEE" stroke="#888888" stroke-width="1" rx="4"/>
<text x="790" y="505" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Less NH₃ at higher T</text>
<text x="790" y="521" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">K DECREASES for exothermic reactions</text>

<text x="500" y="582" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Temperature is the ONLY factor that changes K. Catalyst: no effect on position or K, reaches equilibrium faster.</text>

<!-- Bottom note -->
<rect x="40" y="605" width="920" height="80" fill="#F0F0F0" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="500" y="624" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Summary: What changes K vs what changes equilibrium position</text>
<text x="60" y="643" font-family="Arial" font-size="11" fill="#000000">Changes K: Temperature only</text>
<text x="60" y="660" font-family="Arial" font-size="11" fill="#000000">Changes position (not K): Concentration, Pressure (gases), Removing products/reactants</text>
<text x="60" y="677" font-family="Arial" font-size="11" fill="#000000">No effect on K or position: Catalyst, Inert gas at constant volume</text>

<defs>
  <marker id="arrL" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: pressureEquilibriumDiagram
    // reaction: N2 + 3H2 ⇌ 2NH3
    static pressureEquilibriumDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Pressure Effect on Equilibrium</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Effect of Pressure on Equilibrium</text>
<text x="500" y="55" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">N₂(g) + 3H₂(g) ⇌ 2NH₃(g)   —   Δn(gas) = 2 − 4 = −2</text>

<!-- showMoleComparison: reaction annotation -->
<rect x="250" y="70" width="500" height="55" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="5"/>
<text x="500" y="92" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">1 + 3 = 4 moles gas  ⇌  2 moles gas</text>
<text x="500" y="115" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Reactant side has MORE moles of gas → increased pressure favours forward reaction</text>

<!-- showLowPressure: left panel -->
<rect x="50" y="145" width="400" height="310" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="6"/>
<text x="250" y="168" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Low Pressure</text>
<text x="250" y="185" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(larger volume)</text>

<!-- Large box -->
<rect x="80" y="198" width="340" height="200" fill="#FAFAFA" stroke="#000000" stroke-width="2"/>
<!-- More N₂ and H₂ molecules (scattered widely) -->
<text x="110" y="230" font-family="Arial" font-size="14" fill="#000000">N₂</text>
<text x="280" y="225" font-family="Arial" font-size="14" fill="#000000">H₂</text>
<text x="160" y="270" font-family="Arial" font-size="14" fill="#000000">H₂</text>
<text x="340" y="275" font-family="Arial" font-size="14" fill="#000000">N₂</text>
<text x="120" y="330" font-family="Arial" font-size="14" fill="#000000">H₂</text>
<text x="270" y="345" font-family="Arial" font-size="14" fill="#000000">H₂</text>
<text x="350" y="340" font-family="Arial" font-size="14" fill="#000000">H₂</text>
<text x="195" y="380" font-family="Arial" font-size="14" fill="#000000">NH₃</text>
<text x="320" y="390" font-family="Arial" font-size="14" fill="#555555">NH₃</text>
<text x="250" y="185" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">fewer NH₃ molecules</text>

<!-- Mole count -->
<text x="250" y="420" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Equilibrium: less NH₃ favoured</text>
<text x="250" y="437" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Position shifted LEFT at low P</text>

<!-- showShift arrow in middle -->
<line x1="460" y1="300" x2="540" y2="300" stroke="#000000" stroke-width="3"/>
<line x1="460" y1="285" x2="430" y2="300" stroke="#000000" stroke-width="2" marker-end="url(#arrP)"/>
<line x1="540" y1="315" x2="570" y2="300" stroke="#000000" stroke-width="2" marker-end="url(#arrP)"/>
<text x="500" y="280" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">↑ Pressure</text>
<text x="500" y="295" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">shift →</text>
<text x="500" y="328" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">↓ Pressure</text>
<text x="500" y="343" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">shift ←</text>

<!-- showHighPressure: right panel -->
<rect x="550" y="145" width="400" height="310" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="6"/>
<text x="750" y="168" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">High Pressure</text>
<text x="750" y="185" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(smaller volume)</text>

<!-- Smaller box (compressed) -->
<rect x="600" y="198" width="300" height="200" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<!-- More NH₃ molecules clustered -->
<text x="615" y="228" font-family="Arial" font-size="14" fill="#000000">NH₃</text>
<text x="690" y="222" font-family="Arial" font-size="14" fill="#000000">NH₃</text>
<text x="760" y="230" font-family="Arial" font-size="14" fill="#000000">NH₃</text>
<text x="620" y="275" font-family="Arial" font-size="14" fill="#000000">NH₃</text>
<text x="700" y="268" font-family="Arial" font-size="14" fill="#000000">NH₃</text>
<text x="780" y="278" font-family="Arial" font-size="14" fill="#000000">NH₃</text>
<text x="625" y="340" font-family="Arial" font-size="13" fill="#000000">N₂</text>
<text x="690" y="355" font-family="Arial" font-size="13" fill="#000000">H₂</text>
<text x="775" y="348" font-family="Arial" font-size="13" fill="#000000">H₂</text>

<text x="750" y="420" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Equilibrium: more NH₃ favoured</text>
<text x="750" y="437" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Position shifted RIGHT at high P</text>

<!-- Info box -->
<rect x="50" y="470" width="900" height="115" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="70" y="490" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Rules for Pressure Effects:</text>
<text x="70" y="510" font-family="Arial" font-size="11" fill="#000000">• Increase pressure → equilibrium shifts towards side with FEWER moles of gas (reduces volume/pressure)</text>
<text x="70" y="528" font-family="Arial" font-size="11" fill="#000000">• Decrease pressure → shifts towards side with MORE moles of gas</text>
<text x="70" y="546" font-family="Arial" font-size="11" fill="#000000">• If Δn(gas) = 0 (equal moles on both sides): pressure change has NO effect on position</text>
<text x="70" y="564" font-family="Arial" font-size="11" fill="#000000">• Adding inert/noble gas at constant volume: partial pressures unchanged → no effect on equilibrium position</text>
<text x="70" y="575" font-family="Arial" font-size="11" fill="#000000">• K value is NOT affected by pressure changes (only temperature changes K)</text>

<defs>
  <marker id="arrP" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: temperatureEquilibriumDiagram
    // reactionType: exothermic
    static temperatureEquilibriumDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Temperature Effect on Equilibrium</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Effect of Temperature on Equilibrium</text>
<text x="500" y="55" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Exothermic reaction: A ⇌ B   ΔH = −ve  |  Temperature is the ONLY factor that changes K</text>

<!-- Reaction with enthalpy annotation -->
<rect x="300" y="68" width="400" height="55" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="5"/>
<text x="500" y="90" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">A(g)  ⇌  B(g)    ΔH = −50 kJ mol⁻¹</text>
<text x="500" y="110" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Forward reaction is exothermic (releases heat)</text>

<!-- showLowTemp: left panel -->
<rect x="50" y="140" width="420" height="280" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="6"/>
<text x="260" y="163" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Low Temperature</text>
<text x="260" y="180" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(e.g., 300 K)</text>

<!-- Bar chart: [A] vs [B] -->
<!-- [A] bar -->
<rect x="100" y="250" width="80" height="120" fill="#BBBBBB" stroke="#000000" stroke-width="1.5"/>
<text x="140" y="382" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">[A]</text>
<text x="140" y="240" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">0.3 mol dm⁻³</text>
<!-- [B] bar -->
<rect x="290" y="200" width="80" height="170" fill="#555555" stroke="#000000" stroke-width="1.5"/>
<text x="330" y="382" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">[B]</text>
<text x="330" y="190" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">0.7 mol dm⁻³</text>
<!-- baseline -->
<line x1="80" y1="370" x2="420" y2="370" stroke="#000000" stroke-width="1.5"/>

<text x="260" y="405" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Kc = 0.7/0.3 ≈ 2.3  (large)</text>
<text x="260" y="422" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Products favoured</text>
<text x="260" y="438" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Position lies to the right</text>

<!-- Middle arrow panel -->
<text x="500" y="245" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">↑ T</text>
<line x1="490" y1="260" x2="490" y2="310" stroke="#000000" stroke-width="2.5" marker-end="url(#arrT)"/>
<text x="510" y="290" font-family="Arial" font-size="11" fill="#000000">increase</text>
<text x="510" y="305" font-family="Arial" font-size="11" fill="#000000">shift ←</text>
<text x="490" y="345" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">↓ T</text>
<line x1="490" y1="360" x2="490" y2="310" stroke="#000000" stroke-width="2.5" marker-end="url(#arrTr)"/>
<text x="510" y="345" font-family="Arial" font-size="11" fill="#000000">decrease</text>
<text x="510" y="360" font-family="Arial" font-size="11" fill="#000000">shift →</text>

<!-- showHighTemp: right panel -->
<rect x="530" y="140" width="420" height="280" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="6"/>
<text x="740" y="163" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">High Temperature</text>
<text x="740" y="180" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(e.g., 700 K)</text>

<!-- Bar chart: more [A], less [B] -->
<rect x="580" y="210" width="80" height="160" fill="#BBBBBB" stroke="#000000" stroke-width="1.5"/>
<text x="620" y="382" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">[A]</text>
<text x="620" y="200" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">0.6 mol dm⁻³</text>
<rect x="770" y="290" width="80" height="80" fill="#555555" stroke="#000000" stroke-width="1.5"/>
<text x="810" y="382" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">[B]</text>
<text x="810" y="280" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">0.4 mol dm⁻³</text>
<line x1="560" y1="370" x2="900" y2="370" stroke="#000000" stroke-width="1.5"/>

<text x="740" y="405" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Kc = 0.4/0.6 ≈ 0.67  (smaller)</text>
<text x="740" y="422" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Reactants favoured</text>
<text x="740" y="438" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Position shifts left at high T</text>

<!-- showEnthalpyChange + showShift info box -->
<rect x="50" y="440" width="900" height="140" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="70" y="460" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Key Principles for Temperature Effects:</text>
<line x1="60" y1="466" x2="940" y2="466" stroke="#CCCCCC" stroke-width="1"/>
<text x="70" y="484" font-family="Arial" font-size="12" fill="#000000">• Increasing T → equilibrium shifts in the ENDOTHERMIC direction (absorbs heat, opposing the change)</text>
<text x="70" y="502" font-family="Arial" font-size="12" fill="#000000">• For exothermic (ΔH&lt;0): increasing T → shifts REVERSE (←) → more reactants → K decreases</text>
<text x="70" y="520" font-family="Arial" font-size="12" fill="#000000">• For endothermic (ΔH&gt;0): increasing T → shifts FORWARD (→) → more products → K increases</text>
<text x="70" y="538" font-family="Arial" font-size="12" fill="#000000">• Decreasing T: opposite effects in both cases</text>
<text x="70" y="556" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">• Temperature is the ONLY factor that changes the value of K (Kc or Kp)</text>
<text x="70" y="572" font-family="Arial" font-size="11" fill="#555555">Haber process compromise: high T (fast rate) but lower yield — catalyst used at 450°C to balance rate and yield</text>

<defs>
  <marker id="arrT" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
  <marker id="arrTr" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto">
    <polygon points="10 0,0 3,10 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: equilibriumPositionGraph
    // reaction: A ⇌ B
    static equilibriumPositionGraphSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Equilibrium Position Graph</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Reaching Chemical Equilibrium</text>
<text x="450" y="54" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Concentration changes over time for A ⇌ B (starting with A only)</text>

<!-- Axes -->
<line x1="100" y1="70" x2="100" y2="460" stroke="#000000" stroke-width="2" marker-end="url(#arrEP)"/>
<line x1="100" y1="460" x2="780" y2="460" stroke="#000000" stroke-width="2" marker-end="url(#arrEP)"/>
<text x="55" y="270" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" transform="rotate(-90,55,270)">Concentration / mol dm⁻³</text>
<text x="440" y="493" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Time →</text>

<!-- Equilibrium reached vertical marker -->
<line x1="460" y1="75" x2="460" y2="460" stroke="#888888" stroke-width="1.5" stroke-dasharray="8,5"/>
<text x="460" y="68" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Equilibrium</text>

<!-- Y-axis tick marks -->
<line x1="95" y1="110" x2="108" y2="110" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="114" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">[A]₀</text>
<line x1="95" y1="280" x2="108" y2="280" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="284" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">[A]eq</text>
<line x1="95" y1="340" x2="108" y2="340" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="344" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">[B]eq</text>

<!-- showReactantCurve: [A] decreases from [A]₀ to [A]eq -->
<path d="M 110,110 C 155,120 210,160 280,210 C 340,255 390,272 460,280" stroke="#000000" stroke-width="3" fill="none"/>
<!-- Flat [A] after equilibrium -->
<line x1="460" y1="280" x2="760" y2="280" stroke="#000000" stroke-width="3"/>
<text x="290" y="195" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">[A]</text>
<text x="290" y="210" font-family="Arial" font-size="11" fill="#555555">(decreasing)</text>

<!-- showProductCurve: [B] increases from 0 to [B]eq -->
<path d="M 110,455 C 155,445 210,410 280,365 C 340,330 390,345 460,340" stroke="#333333" stroke-width="2.5" fill="none" stroke-dasharray="10,5"/>
<!-- Flat [B] after equilibrium -->
<line x1="460" y1="340" x2="760" y2="340" stroke="#333333" stroke-width="2.5" stroke-dasharray="10,5"/>
<text x="300" y="375" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">[B]</text>
<text x="300" y="390" font-family="Arial" font-size="11" fill="#555555">(increasing)</text>

<!-- showEquilibriumLine: dashed constant lines after equilibrium (already drawn above) -->
<!-- Horizontal dashes connecting [A]eq and [B]eq to y-axis -->
<line x1="100" y1="280" x2="460" y2="280" stroke="#888888" stroke-width="1" stroke-dasharray="4,4"/>
<line x1="100" y1="340" x2="460" y2="340" stroke="#888888" stroke-width="1" stroke-dasharray="4,4"/>

<!-- showRates: rate curves -->
<!-- Second axes panel -->
<line x1="100" y1="510" x2="780" y2="510" stroke="#000000" stroke-width="1.5" marker-end="url(#arrEP)"/>
<line x1="100" y1="510" x2="100" y2="570" stroke="#000000" stroke-width="1.5"/>
<text x="85" y="515" font-family="Arial" font-size="9" fill="#000000" text-anchor="end">Rate</text>
<!-- Forward rate (high then decreases) -->
<path d="M 110,518 C 175,522 280,530 380,537 C 420,540 445,542 460,543" stroke="#000000" stroke-width="2" fill="none"/>
<line x1="460" y1="543" x2="760" y2="543" stroke="#000000" stroke-width="2"/>
<!-- Reverse rate (zero, then increases) -->
<path d="M 110,565 C 175,558 280,552 380,547 C 420,545 445,544 460,543" stroke="#333333" stroke-width="1.5" fill="none" stroke-dasharray="6,3"/>
<line x1="460" y1="543" x2="760" y2="543" stroke="#333333" stroke-width="1.5" stroke-dasharray="6,3"/>
<text x="250" y="530" font-family="Arial" font-size="9" fill="#000000">Forward rate</text>
<text x="250" y="562" font-family="Arial" font-size="9" fill="#000000">Reverse rate</text>
<text x="590" y="536" font-family="Arial" font-size="9" fill="#000000">Equal rates</text>

<!-- Labels post-equilibrium -->
<text x="615" y="268" font-family="Arial" font-size="12" fill="#000000">[A] constant</text>
<text x="615" y="328" font-family="Arial" font-size="12" fill="#000000">[B] constant</text>

<!-- Info box top right -->
<rect x="540" y="80" width="235" height="130" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="657" y="100" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Equilibrium Features</text>
<line x1="548" y1="105" x2="768" y2="105" stroke="#CCCCCC" stroke-width="1"/>
<text x="550" y="122" font-family="Arial" font-size="11" fill="#000000">• Dynamic (not static)</text>
<text x="550" y="140" font-family="Arial" font-size="11" fill="#000000">• Closed system required</text>
<text x="550" y="158" font-family="Arial" font-size="11" fill="#000000">• Concentrations constant</text>
<text x="550" y="176" font-family="Arial" font-size="11" fill="#000000">• Forward = reverse rate</text>
<text x="550" y="194" font-family="Arial" font-size="11" fill="#000000">• No net change in [A] or [B]</text>

<defs>
  <marker id="arrEP" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: heterogeneousEquilibriumDiagram
    // reaction: CaCO3(s) ⇌ CaO(s) + CO2(g)
    static heterogeneousEquilibriumDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Heterogeneous Equilibrium</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Heterogeneous Equilibrium</text>
<text x="450" y="55" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">CaCO₃(s) ⇌ CaO(s) + CO₂(g)  — equilibrium involving multiple phases</text>

<!-- Reaction box -->
<rect x="200" y="70" width="500" height="50" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="5"/>
<text x="450" y="95" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">CaCO₃(s)  ⇌  CaO(s)  +  CO₂(g)</text>
<text x="450" y="112" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Endothermic decomposition of limestone — ΔH = +178 kJ mol⁻¹</text>

<!-- showPhaseLabels: Three phase diagrams -->

<!-- CaCO3(s) illustration -->
<rect x="50" y="150" width="240" height="200" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="5"/>
<text x="170" y="173" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">CaCO₃(s)</text>
<text x="170" y="190" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Solid — ordered lattice</text>
<!-- Lattice grid -->
<rect x="80" y="200" width="180" height="120" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<!-- Grid dots -->
<circle cx="110" cy="225" r="7" fill="#AAAAAA" stroke="#000000" stroke-width="1"/>
<circle cx="150" cy="225" r="7" fill="#AAAAAA" stroke="#000000" stroke-width="1"/>
<circle cx="190" cy="225" r="7" fill="#AAAAAA" stroke="#000000" stroke-width="1"/>
<circle cx="230" cy="225" r="7" fill="#AAAAAA" stroke="#000000" stroke-width="1"/>
<circle cx="110" cy="260" r="7" fill="#888888" stroke="#000000" stroke-width="1"/>
<circle cx="150" cy="260" r="7" fill="#888888" stroke="#000000" stroke-width="1"/>
<circle cx="190" cy="260" r="7" fill="#888888" stroke="#000000" stroke-width="1"/>
<circle cx="230" cy="260" r="7" fill="#888888" stroke="#000000" stroke-width="1"/>
<circle cx="110" cy="295" r="7" fill="#AAAAAA" stroke="#000000" stroke-width="1"/>
<circle cx="150" cy="295" r="7" fill="#AAAAAA" stroke="#000000" stroke-width="1"/>
<circle cx="190" cy="295" r="7" fill="#AAAAAA" stroke="#000000" stroke-width="1"/>
<circle cx="230" cy="295" r="7" fill="#AAAAAA" stroke="#000000" stroke-width="1"/>
<text x="170" y="340" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Ca²⁺ &amp; CO₃²⁻ ions</text>
<text x="170" y="360" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">NOT in K expression</text>

<!-- CaO(s) illustration -->
<rect x="330" y="150" width="240" height="200" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="5"/>
<text x="450" y="173" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">CaO(s)</text>
<text x="450" y="190" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Solid — fixed concentration</text>
<rect x="360" y="200" width="180" height="120" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<circle cx="390" cy="230" r="8" fill="#AAAAAA" stroke="#000000" stroke-width="1"/>
<circle cx="435" cy="230" r="8" fill="#AAAAAA" stroke="#000000" stroke-width="1"/>
<circle cx="480" cy="230" r="8" fill="#AAAAAA" stroke="#000000" stroke-width="1"/>
<circle cx="390" cy="270" r="6" fill="#CCCCCC" stroke="#000000" stroke-width="1"/>
<circle cx="435" cy="270" r="6" fill="#CCCCCC" stroke="#000000" stroke-width="1"/>
<circle cx="480" cy="270" r="6" fill="#CCCCCC" stroke="#000000" stroke-width="1"/>
<circle cx="390" cy="305" r="8" fill="#AAAAAA" stroke="#000000" stroke-width="1"/>
<circle cx="435" cy="305" r="8" fill="#AAAAAA" stroke="#000000" stroke-width="1"/>
<circle cx="480" cy="305" r="8" fill="#AAAAAA" stroke="#000000" stroke-width="1"/>
<text x="450" y="335" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Ca²⁺ &amp; O²⁻ ions</text>
<text x="450" y="356" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">NOT in K expression</text>

<!-- CO2(g) illustration -->
<rect x="610" y="150" width="240" height="200" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="5"/>
<text x="730" y="173" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">CO₂(g)</text>
<text x="730" y="190" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Gas — variable concentration</text>
<!-- Gas molecules scattered -->
<circle cx="650" cy="225" r="8" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="650" cy="225" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle" dy="4">CO₂</text>
<circle cx="710" cy="245" r="8" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="710" y="249" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">CO₂</text>
<circle cx="790" cy="220" r="8" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="790" y="224" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">CO₂</text>
<circle cx="670" cy="295" r="8" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="670" y="299" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">CO₂</text>
<circle cx="750" cy="310" r="8" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="750" y="314" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">CO₂</text>
<!-- velocity arrows -->
<line x1="657" y1="220" x2="672" y2="210" stroke="#000000" stroke-width="1.5" marker-end="url(#arrHet)"/>
<line x1="718" y1="240" x2="730" y2="250" stroke="#000000" stroke-width="1.5" marker-end="url(#arrHet)"/>
<text x="730" y="356" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">IN K expression</text>

<!-- showKpExpression -->
<rect x="50" y="370" width="800" height="100" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="450" y="392" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Kp and Kc Expressions</text>
<text x="450" y="415" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">Kp = pCO₂     Kc = [CO₂]</text>
<text x="450" y="440" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Solids have constant concentration = 1 (by convention) → omitted from K expression</text>
<text x="450" y="457" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Kp has units of pressure (Pa or atm)  |  Kc has units of mol dm⁻³</text>

<!-- Key points box -->
<rect x="50" y="490" width="800" height="95" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="70" y="510" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Rules for Heterogeneous Equilibria:</text>
<text x="70" y="530" font-family="Arial" font-size="11" fill="#000000">• Pure solids and pure liquids are NOT included in equilibrium constant expressions (activity = 1)</text>
<text x="70" y="548" font-family="Arial" font-size="11" fill="#000000">• Adding more solid does NOT affect equilibrium position or K (as long as some solid is present)</text>
<text x="70" y="566" font-family="Arial" font-size="11" fill="#000000">• Other examples: H₂O(l) ⇌ H⁺(aq) + OH⁻(aq)  [water omitted]  |  Fe₃O₄(s)+4H₂(g)⇌3Fe(s)+4H₂O(g)</text>
<text x="70" y="578" font-family="Arial" font-size="11" fill="#555555">Temperature increases K (endothermic): higher T → more CO₂ formed → higher Kp</text>

<defs>
  <marker id="arrHet" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0,8 3,0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;






    // ============================================================
    // ===== 10. ORGANIC CHEMISTRY ================================
    // ============================================================

    // Generated from registry: homologousSeriesDiagram
    // series: alkanes
    // options: showMembers=true, showGeneralFormula=true, showTrends=true, showStructures=true
    static homologousSeriesDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="800" viewBox="0 0 1000 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>Homologous Series - Alkanes</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Homologous Series — Alkanes</text>
<text x="500" y="58" font-family="Arial" font-size="13" fill="#444444" text-anchor="middle">General Formula: CₙH₂ₙ₊₂</text>

<!-- Table header -->
<rect x="30" y="75" width="940" height="36" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="80"  y="98" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Name</text>
<text x="220" y="98" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Molecular Formula</text>
<text x="420" y="98" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Structural Formula (condensed)</text>
<text x="720" y="98" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Boiling Pt (°C)</text>
<text x="870" y="98" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">State (25°C)</text>

<!-- Row borders -->
<rect x="30" y="111" width="940" height="32" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
<rect x="30" y="143" width="940" height="32" fill="#F5F5F5" stroke="#000000" stroke-width="1"/>
<rect x="30" y="175" width="940" height="32" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
<rect x="30" y="207" width="940" height="32" fill="#F5F5F5" stroke="#000000" stroke-width="1"/>
<rect x="30" y="239" width="940" height="32" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
<rect x="30" y="271" width="940" height="32" fill="#F5F5F5" stroke="#000000" stroke-width="1"/>
<rect x="30" y="303" width="940" height="32" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
<rect x="30" y="335" width="940" height="32" fill="#F5F5F5" stroke="#000000" stroke-width="1"/>

<!-- Methane -->
<text x="80"  y="132" font-family="Arial" font-size="12" fill="#000000">Methane (n=1)</text>
<text x="220" y="132" font-family="Arial" font-size="12" fill="#000000">CH₄</text>
<text x="420" y="132" font-family="Arial" font-size="12" fill="#000000">CH₄</text>
<text x="720" y="132" font-family="Arial" font-size="12" fill="#000000">−161.5</text>
<text x="870" y="132" font-family="Arial" font-size="12" fill="#000000">Gas</text>

<!-- Ethane -->
<text x="80"  y="164" font-family="Arial" font-size="12" fill="#000000">Ethane (n=2)</text>
<text x="220" y="164" font-family="Arial" font-size="12" fill="#000000">C₂H₆</text>
<text x="420" y="164" font-family="Arial" font-size="12" fill="#000000">CH₃−CH₃</text>
<text x="720" y="164" font-family="Arial" font-size="12" fill="#000000">−88.6</text>
<text x="870" y="164" font-family="Arial" font-size="12" fill="#000000">Gas</text>

<!-- Propane -->
<text x="80"  y="196" font-family="Arial" font-size="12" fill="#000000">Propane (n=3)</text>
<text x="220" y="196" font-family="Arial" font-size="12" fill="#000000">C₃H₈</text>
<text x="420" y="196" font-family="Arial" font-size="12" fill="#000000">CH₃−CH₂−CH₃</text>
<text x="720" y="196" font-family="Arial" font-size="12" fill="#000000">−42.1</text>
<text x="870" y="196" font-family="Arial" font-size="12" fill="#000000">Gas</text>

<!-- Butane -->
<text x="80"  y="228" font-family="Arial" font-size="12" fill="#000000">Butane (n=4)</text>
<text x="220" y="228" font-family="Arial" font-size="12" fill="#000000">C₄H₁₀</text>
<text x="420" y="228" font-family="Arial" font-size="12" fill="#000000">CH₃−(CH₂)₂−CH₃</text>
<text x="720" y="228" font-family="Arial" font-size="12" fill="#000000">−0.5</text>
<text x="870" y="228" font-family="Arial" font-size="12" fill="#000000">Gas</text>

<!-- Pentane -->
<text x="80"  y="260" font-family="Arial" font-size="12" fill="#000000">Pentane (n=5)</text>
<text x="220" y="260" font-family="Arial" font-size="12" fill="#000000">C₅H₁₂</text>
<text x="420" y="260" font-family="Arial" font-size="12" fill="#000000">CH₃−(CH₂)₃−CH₃</text>
<text x="720" y="260" font-family="Arial" font-size="12" fill="#000000">36.1</text>
<text x="870" y="260" font-family="Arial" font-size="12" fill="#000000">Liquid</text>

<!-- Hexane -->
<text x="80"  y="292" font-family="Arial" font-size="12" fill="#000000">Hexane (n=6)</text>
<text x="220" y="292" font-family="Arial" font-size="12" fill="#000000">C₆H₁₄</text>
<text x="420" y="292" font-family="Arial" font-size="12" fill="#000000">CH₃−(CH₂)₄−CH₃</text>
<text x="720" y="292" font-family="Arial" font-size="12" fill="#000000">68.7</text>
<text x="870" y="292" font-family="Arial" font-size="12" fill="#000000">Liquid</text>

<!-- Heptane -->
<text x="80"  y="324" font-family="Arial" font-size="12" fill="#000000">Heptane (n=7)</text>
<text x="220" y="324" font-family="Arial" font-size="12" fill="#000000">C₇H₁₆</text>
<text x="420" y="324" font-family="Arial" font-size="12" fill="#000000">CH₃−(CH₂)₅−CH₃</text>
<text x="720" y="324" font-family="Arial" font-size="12" fill="#000000">98.4</text>
<text x="870" y="324" font-family="Arial" font-size="12" fill="#000000">Liquid</text>

<!-- Octane -->
<text x="80"  y="356" font-family="Arial" font-size="12" fill="#000000">Octane (n=8)</text>
<text x="220" y="356" font-family="Arial" font-size="12" fill="#000000">C₈H₁₈</text>
<text x="420" y="356" font-family="Arial" font-size="12" fill="#000000">CH₃−(CH₂)₆−CH₃</text>
<text x="720" y="356" font-family="Arial" font-size="12" fill="#000000">125.7</text>
<text x="870" y="356" font-family="Arial" font-size="12" fill="#000000">Liquid</text>

<!-- Column dividers -->
<line x1="200" y1="75" x2="200" y2="367" stroke="#000000" stroke-width="1"/>
<line x1="400" y1="75" x2="400" y2="367" stroke="#000000" stroke-width="1"/>
<line x1="700" y1="75" x2="700" y2="367" stroke="#000000" stroke-width="1"/>
<line x1="850" y1="75" x2="850" y2="367" stroke="#000000" stroke-width="1"/>

<!-- Trends section -->
<text x="500" y="405" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">Trends in the Homologous Series</text>

<!-- Trend arrows and boxes -->
<rect x="30" y="420" width="210" height="100" stroke="#000000" stroke-width="1.5" fill="#F0F0F0" rx="4"/>
<text x="135" y="440" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Each member differs by:</text>
<text x="135" y="460" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+CH₂ (one methylene unit)</text>
<text x="135" y="480" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+14 g/mol in M.W.</text>
<text x="135" y="500" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Same general formula</text>

<rect x="260" y="420" width="210" height="100" stroke="#000000" stroke-width="1.5" fill="#F0F0F0" rx="4"/>
<text x="365" y="440" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Increasing down series:</text>
<text x="365" y="460" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">↑ Boiling point</text>
<text x="365" y="480" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">↑ Molecular mass</text>
<text x="365" y="500" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">↑ Viscosity</text>

<rect x="490" y="420" width="210" height="100" stroke="#000000" stroke-width="1.5" fill="#F0F0F0" rx="4"/>
<text x="595" y="440" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Decreasing down series:</text>
<text x="595" y="460" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">↓ Flammability</text>
<text x="595" y="480" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">↓ Volatility</text>
<text x="595" y="500" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">↓ Reactivity</text>

<rect x="720" y="420" width="240" height="100" stroke="#000000" stroke-width="1.5" fill="#F0F0F0" rx="4"/>
<text x="840" y="440" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Similar properties:</text>
<text x="840" y="460" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Same functional group</text>
<text x="840" y="480" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Similar reactions</text>
<text x="840" y="500" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Gradual physical change</text>

<!-- Structural formula drawings for methane and ethane -->
<text x="500" y="560" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Structural Representations</text>

<!-- Methane structural -->
<text x="120" y="590" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Methane CH₄</text>
<!-- C center at 120,630 -->
<text x="120" y="638" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">C</text>
<line x1="120" y1="615" x2="120" y2="605" stroke="#000000" stroke-width="2"/>
<text x="120" y="603" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H</text>
<line x1="120" y1="645" x2="120" y2="655" stroke="#000000" stroke-width="2"/>
<text x="120" y="668" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H</text>
<line x1="105" y1="632" x2="95" y2="632" stroke="#000000" stroke-width="2"/>
<text x="88" y="636" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H</text>
<line x1="135" y1="632" x2="145" y2="632" stroke="#000000" stroke-width="2"/>
<text x="152" y="636" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H</text>

<!-- Ethane structural -->
<text x="330" y="590" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Ethane C₂H₆</text>
<text x="305" y="638" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">C</text>
<text x="355" y="638" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">C</text>
<line x1="315" y1="632" x2="345" y2="632" stroke="#000000" stroke-width="2"/>
<!-- Left C bonds -->
<line x1="305" y1="615" x2="305" y2="605" stroke="#000000" stroke-width="2"/>
<text x="305" y="602" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H</text>
<line x1="305" y1="645" x2="305" y2="655" stroke="#000000" stroke-width="2"/>
<text x="305" y="668" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H</text>
<line x1="290" y1="632" x2="280" y2="632" stroke="#000000" stroke-width="2"/>
<text x="273" y="636" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H</text>
<!-- Right C bonds -->
<line x1="355" y1="615" x2="355" y2="605" stroke="#000000" stroke-width="2"/>
<text x="355" y="602" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H</text>
<line x1="355" y1="645" x2="355" y2="655" stroke="#000000" stroke-width="2"/>
<text x="355" y="668" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H</text>
<line x1="370" y1="632" x2="380" y2="632" stroke="#000000" stroke-width="2"/>
<text x="387" y="636" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H</text>

<!-- Info box -->
<rect x="550" y="580" width="400" height="100" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="560" y="600" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Key Properties of Alkanes:</text>
<text x="560" y="618" font-family="Arial" font-size="11" fill="#000000">• Saturated hydrocarbons (single C−C bonds only)</text>
<text x="560" y="634" font-family="Arial" font-size="11" fill="#000000">• Relatively unreactive (no functional group)</text>
<text x="560" y="650" font-family="Arial" font-size="11" fill="#000000">• Undergo combustion and free radical substitution</text>
<text x="560" y="666" font-family="Arial" font-size="11" fill="#000000">• London dispersion forces increase with chain length</text>

<!-- Boiling point trend graph -->
<text x="500" y="730" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Boiling Point Trend</text>
<line x1="50" y1="760" x2="50" y2="790" stroke="#000000" stroke-width="2"/>
<line x1="50" y1="790" x2="490" y2="790" stroke="#000000" stroke-width="2"/>
<text x="30" y="765" font-family="Arial" font-size="10" fill="#000000">bp</text>
<text x="270" y="780" font-family="Arial" font-size="10" fill="#000000">↑</text>
<!-- Trend line (rising) -->
<polyline points="60,788 120,783 180,776 240,769 300,761 360,754 420,748 480,742" stroke="#000000" stroke-width="2.5" fill="none" stroke-dasharray="none"/>
<text x="490" y="745" font-family="Arial" font-size="10" fill="#000000">↗ increases</text>
<text x="270" y="790" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">n (carbon number) →</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: structuralIsomersDiagram
    // molecularFormula: C4H10
    // options: showAllIsomers=true, showNaming=true, showDifferences=true
    static structuralIsomersDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Structural Isomers - C4H10</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Structural Isomers — C₄H₁₀</text>
<text x="500" y="54" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">Same molecular formula (C₄H₁₀), different structural arrangements</text>

<!-- Dividing line between the two isomers -->
<line x1="500" y1="70" x2="500" y2="520" stroke="#AAAAAA" stroke-width="1.5" stroke-dasharray="6,4"/>

<!-- ===== ISOMER 1: n-Butane ===== -->
<text x="250" y="90" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">Isomer 1: n-Butane</text>
<text x="250" y="110" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">(butane / normal butane)</text>

<!-- n-Butane structural formula: C1-C2-C3-C4 chain -->
<!-- C1 at x=80, C2 at x=160, C3 at x=240, C4 at x=320; y=200 -->
<!-- C atoms -->
<text x="80"  y="208" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<text x="165" y="208" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<text x="250" y="208" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<text x="335" y="208" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<!-- C-C bonds -->
<line x1="92" y1="202" x2="152" y2="202" stroke="#000000" stroke-width="2"/>
<line x1="177" y1="202" x2="237" y2="202" stroke="#000000" stroke-width="2"/>
<line x1="262" y1="202" x2="322" y2="202" stroke="#000000" stroke-width="2"/>
<!-- H on C1 (3 H's) -->
<line x1="80" y1="186" x2="80" y2="176" stroke="#000000" stroke-width="1.5"/>
<text x="80"  y="172" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<line x1="65"  y1="202" x2="55" y2="202" stroke="#000000" stroke-width="1.5"/>
<text x="47"  y="206" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<line x1="80" y1="218" x2="80" y2="228" stroke="#000000" stroke-width="1.5"/>
<text x="80"  y="240" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<!-- H on C2 (2 H's) -->
<line x1="165" y1="186" x2="165" y2="176" stroke="#000000" stroke-width="1.5"/>
<text x="165" y="172" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<line x1="165" y1="218" x2="165" y2="228" stroke="#000000" stroke-width="1.5"/>
<text x="165" y="240" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<!-- H on C3 (2 H's) -->
<line x1="250" y1="186" x2="250" y2="176" stroke="#000000" stroke-width="1.5"/>
<text x="250" y="172" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<line x1="250" y1="218" x2="250" y2="228" stroke="#000000" stroke-width="1.5"/>
<text x="250" y="240" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<!-- H on C4 (3 H's) -->
<line x1="335" y1="186" x2="335" y2="176" stroke="#000000" stroke-width="1.5"/>
<text x="335" y="172" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<line x1="350" y1="202" x2="360" y2="202" stroke="#000000" stroke-width="1.5"/>
<text x="368" y="206" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<line x1="335" y1="218" x2="335" y2="228" stroke="#000000" stroke-width="1.5"/>
<text x="335" y="240" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>

<!-- Condensed formula -->
<text x="250" y="285" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">CH₃−CH₂−CH₂−CH₃</text>

<!-- Properties box -->
<rect x="50" y="310" width="380" height="130" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="240" y="330" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Properties of n-Butane:</text>
<text x="70"  y="350" font-family="Arial" font-size="11" fill="#000000">• IUPAC name: butane</text>
<text x="70"  y="368" font-family="Arial" font-size="11" fill="#000000">• Straight (unbranched) carbon chain</text>
<text x="70"  y="386" font-family="Arial" font-size="11" fill="#000000">• Boiling point: −0.5 °C</text>
<text x="70"  y="404" font-family="Arial" font-size="11" fill="#000000">• More surface area → stronger London forces</text>
<text x="70"  y="422" font-family="Arial" font-size="11" fill="#000000">• Higher boiling point than isobutane</text>

<!-- ===== ISOMER 2: Isobutane ===== -->
<text x="750" y="90" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">Isomer 2: Isobutane</text>
<text x="750" y="110" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">(2-methylpropane)</text>

<!-- Isobutane: central C at 750,200; branch up and 3 arms left/right/down -->
<!-- Central C -->
<text x="750" y="208" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<!-- Left CH3 -->
<text x="640" y="208" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<line x1="652" y1="202" x2="738" y2="202" stroke="#000000" stroke-width="2"/>
<!-- Right CH3 -->
<text x="860" y="208" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<line x1="762" y1="202" x2="848" y2="202" stroke="#000000" stroke-width="2"/>
<!-- Top CH3 (branch) -->
<text x="750" y="128" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<line x1="750" y1="136" x2="750" y2="188" stroke="#000000" stroke-width="2"/>
<!-- Bottom H on central C -->
<line x1="750" y1="218" x2="750" y2="228" stroke="#000000" stroke-width="1.5"/>
<text x="750" y="240" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>

<!-- H on left C (CH3) -->
<line x1="640" y1="186" x2="640" y2="176" stroke="#000000" stroke-width="1.5"/>
<text x="640" y="172" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<line x1="625" y1="202" x2="615" y2="202" stroke="#000000" stroke-width="1.5"/>
<text x="607" y="206" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<line x1="640" y1="218" x2="640" y2="228" stroke="#000000" stroke-width="1.5"/>
<text x="640" y="240" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>

<!-- H on right C (CH3) -->
<line x1="860" y1="186" x2="860" y2="176" stroke="#000000" stroke-width="1.5"/>
<text x="860" y="172" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<line x1="875" y1="202" x2="885" y2="202" stroke="#000000" stroke-width="1.5"/>
<text x="893" y="206" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<line x1="860" y1="218" x2="860" y2="228" stroke="#000000" stroke-width="1.5"/>
<text x="860" y="240" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>

<!-- H on top C (CH3) -->
<line x1="735" y1="122" x2="725" y2="112" stroke="#000000" stroke-width="1.5"/>
<text x="718" y="108" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<line x1="765" y1="122" x2="775" y2="112" stroke="#000000" stroke-width="1.5"/>
<text x="782" y="108" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<line x1="750" y1="110" x2="750" y2="100" stroke="#000000" stroke-width="1.5"/>
<text x="750" y="96" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>

<!-- Condensed formula -->
<text x="750" y="285" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">CH₃−CH(CH₃)−CH₃</text>

<!-- Properties box -->
<rect x="560" y="310" width="380" height="130" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="750" y="330" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Properties of Isobutane:</text>
<text x="578" y="350" font-family="Arial" font-size="11" fill="#000000">• IUPAC name: 2-methylpropane</text>
<text x="578" y="368" font-family="Arial" font-size="11" fill="#000000">• Branched carbon chain</text>
<text x="578" y="386" font-family="Arial" font-size="11" fill="#000000">• Boiling point: −11.7 °C</text>
<text x="578" y="404" font-family="Arial" font-size="11" fill="#000000">• Less surface area → weaker London forces</text>
<text x="578" y="422" font-family="Arial" font-size="11" fill="#000000">• Lower boiling point than n-butane</text>

<!-- Bottom comparison box -->
<rect x="100" y="460" width="800" height="110" fill="#EFEFEF" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="500" y="482" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Comparing the Two Isomers</text>
<text x="120" y="502" font-family="Arial" font-size="11" fill="#000000">• Same molecular formula C₄H₁₀ and same molecular mass (58 g/mol)</text>
<text x="120" y="520" font-family="Arial" font-size="11" fill="#000000">• Different connectivity of atoms → different structural formulas</text>
<text x="120" y="538" font-family="Arial" font-size="11" fill="#000000">• Different physical properties (boiling point, density, etc.)</text>
<text x="120" y="556" font-family="Arial" font-size="11" fill="#000000">• Branching reduces surface area → lower intermolecular forces → lower boiling point</text>

</g>
</svg>`;

    // Generated from registry: stereoisomersDiagram
    // isomerType: geometric
    // options: showCisTransIsomers=true, show3DStructures=true, showDifferences=true
    static stereoisomersDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Stereoisomers - Geometric Isomers</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Stereoisomers — Geometric (Cis/Trans) Isomers</text>
<text x="500" y="55" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">Example: but-2-ene (C₄H₈) — restricted rotation about C=C double bond</text>

<!-- Condition for geometric isomerism -->
<rect x="300" y="65" width="400" height="30" fill="#EEEEEE" stroke="#AAAAAA" stroke-width="1" rx="3"/>
<text x="500" y="85" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Condition: two different groups on each carbon of the C=C bond</text>

<!-- Divider -->
<line x1="500" y1="105" x2="500" y2="530" stroke="#AAAAAA" stroke-width="1.5" stroke-dasharray="6,4"/>

<!-- ===== CIS BUT-2-ENE ===== -->
<text x="250" y="125" font-family="Arial" font-size="17" fill="#000000" text-anchor="middle" font-weight="bold">cis-but-2-ene</text>
<text x="250" y="145" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">(Z)-but-2-ene</text>
<text x="250" y="163" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">Similar groups on SAME side</text>

<!-- C=C double bond cis: C2 at 200,280; C3 at 300,280 -->
<!-- Double bond lines -->
<line x1="215" y1="276" x2="285" y2="276" stroke="#000000" stroke-width="2.5"/>
<line x1="215" y1="284" x2="285" y2="284" stroke="#000000" stroke-width="2.5"/>
<!-- C atoms -->
<text x="200" y="288" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<text x="300" y="288" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<!-- CH3 groups: BOTH above (same side = cis) -->
<line x1="192" y1="270" x2="155" y2="238" stroke="#000000" stroke-width="2"/>
<text x="148" y="232" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">CH₃</text>
<line x1="308" y1="270" x2="345" y2="238" stroke="#000000" stroke-width="2"/>
<text x="352" y="232" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">CH₃</text>
<!-- H groups: BOTH below -->
<line x1="192" y1="294" x2="155" y2="326" stroke="#000000" stroke-width="2"/>
<text x="145" y="338" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H</text>
<line x1="308" y1="294" x2="345" y2="326" stroke="#000000" stroke-width="2"/>
<text x="355" y="338" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H</text>

<!-- Labels for positions -->
<text x="155" y="255" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">same side</text>
<text x="345" y="255" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">same side</text>
<!-- Brace/bracket indicating same side -->
<path d="M 140,230 Q 250,195 360,230" stroke="#000000" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
<text x="250" y="200" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">CH₃ groups: SAME side ✓</text>

<!-- Properties cis -->
<rect x="50" y="360" width="380" height="100" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="240" y="380" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">cis Properties:</text>
<text x="68" y="400" font-family="Arial" font-size="11" fill="#000000">• Polar molecule (dipole moments don't cancel)</text>
<text x="68" y="418" font-family="Arial" font-size="11" fill="#000000">• Higher boiling point: 3.7 °C</text>
<text x="68" y="436" font-family="Arial" font-size="11" fill="#000000">• More soluble in polar solvents</text>
<text x="68" y="454" font-family="Arial" font-size="11" fill="#000000">• Less stable (steric strain)</text>

<!-- ===== TRANS BUT-2-ENE ===== -->
<text x="750" y="125" font-family="Arial" font-size="17" fill="#000000" text-anchor="middle" font-weight="bold">trans-but-2-ene</text>
<text x="750" y="145" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">(E)-but-2-ene</text>
<text x="750" y="163" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">Similar groups on OPPOSITE sides</text>

<!-- C=C double bond trans: C2 at 700,280; C3 at 800,280 -->
<line x1="715" y1="276" x2="785" y2="276" stroke="#000000" stroke-width="2.5"/>
<line x1="715" y1="284" x2="785" y2="284" stroke="#000000" stroke-width="2.5"/>
<text x="700" y="288" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<text x="800" y="288" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<!-- CH3 on C2 above, CH3 on C3 below (opposite = trans) -->
<line x1="692" y1="270" x2="655" y2="238" stroke="#000000" stroke-width="2"/>
<text x="648" y="232" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">CH₃</text>
<line x1="808" y1="294" x2="845" y2="326" stroke="#000000" stroke-width="2"/>
<text x="852" y="338" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">CH₃</text>
<!-- H on C2 below, H on C3 above -->
<line x1="692" y1="294" x2="655" y2="326" stroke="#000000" stroke-width="2"/>
<text x="645" y="338" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H</text>
<line x1="808" y1="270" x2="845" y2="238" stroke="#000000" stroke-width="2"/>
<text x="855" y="232" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H</text>

<!-- Labels for trans -->
<path d="M 640,235 Q 750,295 862,335" stroke="#000000" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
<text x="750" y="355" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">CH₃ groups: OPPOSITE sides ✓</text>

<!-- Properties trans -->
<rect x="560" y="380" width="380" height="100" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="750" y="400" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">trans Properties:</text>
<text x="578" y="420" font-family="Arial" font-size="11" fill="#000000">• Non-polar molecule (dipole moments cancel)</text>
<text x="578" y="438" font-family="Arial" font-size="11" fill="#000000">• Lower boiling point: 0.9 °C</text>
<text x="578" y="456" font-family="Arial" font-size="11" fill="#000000">• Less soluble in polar solvents</text>
<text x="578" y="474" font-family="Arial" font-size="11" fill="#000000">• More stable (less steric strain)</text>

<!-- Comparison / summary box -->
<rect x="80" y="500" width="840" height="120" fill="#EFEFEF" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="500" y="522" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Key Points About Geometric Isomerism</text>
<text x="100" y="544" font-family="Arial" font-size="11" fill="#000000">• Both have identical molecular formula C₄H₈ and same connectivity (bonds in same order)</text>
<text x="100" y="562" font-family="Arial" font-size="11" fill="#000000">• Differ ONLY in spatial arrangement — cannot interconvert without breaking bonds</text>
<text x="100" y="580" font-family="Arial" font-size="11" fill="#000000">• Required conditions: (1) C=C double bond present  (2) Each C of double bond must carry 2 DIFFERENT groups</text>
<text x="100" y="598" font-family="Arial" font-size="11" fill="#000000">• E/Z nomenclature (IUPAC): E = entgegen (opposite), Z = zusammen (together) — based on priority rules</text>
<text x="100" y="616" font-family="Arial" font-size="11" fill="#000000">• Different physical and (sometimes) chemical properties due to different spatial arrangements</text>

</g>
</svg>`;

    // Generated from registry: functionalGroupsDiagram
    // options: showAlcohol=true, showCarboxylicAcid=true, showAldehyde=true, showKetone=true, showEster=true, showAmine=true, showAmide=true
    static functionalGroupsDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1100" height="900" viewBox="0 0 1100 900"
 preserveAspectRatio="xMidYMid meet">
<metadata>Organic Functional Groups</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="550" y="32" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Organic Functional Groups</text>
<text x="550" y="54" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">R = alkyl group (carbon chain); the functional group determines chemical behaviour</text>

<!-- Grid: 4 columns, 2 rows of group boxes -->
<!-- Row 1: Alcohol, Carboxylic Acid, Aldehyde, Ketone -->
<!-- Row 2: Ester, Amine, Amide, (Info) -->

<!-- ===== ALCOHOL ===== -->
<rect x="20" y="70" width="240" height="185" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="140" y="92" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Alcohol</text>
<text x="140" y="110" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">−OH (hydroxyl group)</text>
<!-- Structure: R-O-H -->
<text x="80"  y="155" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">R</text>
<line x1="90" y1="149" x2="108" y2="149" stroke="#000000" stroke-width="2"/>
<text x="118" y="155" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">O</text>
<line x1="128" y1="149" x2="146" y2="149" stroke="#000000" stroke-width="2"/>
<text x="155" y="155" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">H</text>
<text x="140" y="182" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">e.g. CH₃OH (methanol)</text>
<text x="140" y="200" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">Suffix: -ol</text>
<text x="140" y="220" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">H-bonding; high bp; soluble</text>
<line x1="30" y1="230" x2="250" y2="230" stroke="#BBBBBB" stroke-width="1"/>
<text x="140" y="245" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Reacts: oxidation, esterification</text>

<!-- ===== CARBOXYLIC ACID ===== -->
<rect x="280" y="70" width="240" height="185" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="400" y="92" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Carboxylic Acid</text>
<text x="400" y="110" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">−COOH (carboxyl group)</text>
<!-- Structure: R-C(=O)-OH -->
<text x="330" y="155" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">R</text>
<line x1="341" y1="149" x2="358" y2="149" stroke="#000000" stroke-width="2"/>
<text x="368" y="155" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<line x1="378" y1="149" x2="396" y2="149" stroke="#000000" stroke-width="2"/>
<text x="406" y="155" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">O</text>
<line x1="416" y1="149" x2="434" y2="149" stroke="#000000" stroke-width="2"/>
<text x="443" y="155" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">H</text>
<!-- C=O double bond downward -->
<line x1="364" y1="163" x2="364" y2="178" stroke="#000000" stroke-width="2"/>
<line x1="372" y1="163" x2="372" y2="178" stroke="#000000" stroke-width="2"/>
<text x="368" y="192" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">O</text>
<text x="400" y="215" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">e.g. CH₃COOH (ethanoic acid)</text>
<text x="400" y="233" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">Suffix: -oic acid; weak acid</text>
<text x="400" y="248" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Reacts: esterification, neutralisation</text>

<!-- ===== ALDEHYDE ===== -->
<rect x="540" y="70" width="240" height="185" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="660" y="92" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Aldehyde</text>
<text x="660" y="110" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">−CHO (at end of chain)</text>
<!-- Structure: R-CHO -->
<text x="600" y="155" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">R</text>
<line x1="612" y1="149" x2="630" y2="149" stroke="#000000" stroke-width="2"/>
<text x="640" y="155" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<line x1="650" y1="149" x2="668" y2="149" stroke="#000000" stroke-width="2"/>
<text x="677" y="155" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">H</text>
<!-- C=O double bond downward -->
<line x1="636" y1="163" x2="636" y2="178" stroke="#000000" stroke-width="2"/>
<line x1="644" y1="163" x2="644" y2="178" stroke="#000000" stroke-width="2"/>
<text x="640" y="192" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">O</text>
<text x="660" y="215" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">e.g. HCHO (methanal)</text>
<text x="660" y="233" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">Suffix: -al; reducing agent</text>
<text x="660" y="248" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Reacts: oxidation → acid, Tollens'</text>

<!-- ===== KETONE ===== -->
<rect x="800" y="70" width="270" height="185" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="935" y="92" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Ketone</text>
<text x="935" y="110" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">C=O (in middle of chain)</text>
<!-- Structure: R-CO-R' -->
<text x="870" y="155" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">R</text>
<line x1="882" y1="149" x2="900" y2="149" stroke="#000000" stroke-width="2"/>
<text x="910" y="155" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<line x1="920" y1="149" x2="938" y2="149" stroke="#000000" stroke-width="2"/>
<text x="950" y="155" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">R'</text>
<!-- C=O double bond downward -->
<line x1="906" y1="163" x2="906" y2="178" stroke="#000000" stroke-width="2"/>
<line x1="914" y1="163" x2="914" y2="178" stroke="#000000" stroke-width="2"/>
<text x="910" y="192" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">O</text>
<text x="935" y="215" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">e.g. CH₃COCH₃ (propanone)</text>
<text x="935" y="233" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">Suffix: -one; NOT reducing agent</text>
<text x="935" y="248" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Reacts: nucleophilic addition</text>

<!-- ===== ESTER ===== -->
<rect x="20" y="275" width="240" height="185" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="140" y="297" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Ester</text>
<text x="140" y="315" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">−COO− (ester linkage)</text>
<!-- Structure: R-COO-R' -->
<text x="60" y="360" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">R</text>
<line x1="72" y1="354" x2="90" y2="354" stroke="#000000" stroke-width="2"/>
<text x="100" y="360" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<line x1="110" y1="354" x2="128" y2="354" stroke="#000000" stroke-width="2"/>
<text x="138" y="360" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">O</text>
<line x1="148" y1="354" x2="166" y2="354" stroke="#000000" stroke-width="2"/>
<text x="178" y="360" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">R'</text>
<!-- C=O double bond downward -->
<line x1="96" y1="368" x2="96" y2="383" stroke="#000000" stroke-width="2"/>
<line x1="104" y1="368" x2="104" y2="383" stroke="#000000" stroke-width="2"/>
<text x="100" y="397" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">O</text>
<text x="140" y="420" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">e.g. CH₃COOCH₃</text>
<text x="140" y="438" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">Suffix: -yl -anoate; fruity smell</text>
<text x="140" y="453" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Reacts: hydrolysis (acid/alkali)</text>

<!-- ===== AMINE ===== -->
<rect x="280" y="275" width="240" height="185" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="400" y="297" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Amine</text>
<text x="400" y="315" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">−NH₂ (amino group)</text>
<!-- Structure: R-NH2 -->
<text x="350" y="375" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">R</text>
<line x1="362" y1="369" x2="380" y2="369" stroke="#000000" stroke-width="2"/>
<text x="390" y="375" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">N</text>
<!-- Two N-H bonds -->
<line x1="400" y1="363" x2="414" y2="350" stroke="#000000" stroke-width="2"/>
<text x="422" y="346" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H</text>
<line x1="400" y1="379" x2="414" y2="392" stroke="#000000" stroke-width="2"/>
<text x="422" y="402" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H</text>
<text x="400" y="425" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">e.g. CH₃NH₂ (methylamine)</text>
<text x="400" y="443" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">Suffix: -amine; basic (lone pair)</text>
<text x="400" y="458" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Reacts: acid-base, amide formation</text>

<!-- ===== AMIDE ===== -->
<rect x="540" y="275" width="240" height="185" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="660" y="297" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Amide</text>
<text x="660" y="315" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">−CONH₂ (amide group)</text>
<!-- Structure: R-CO-NH2 -->
<text x="590" y="370" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">R</text>
<line x1="602" y1="364" x2="620" y2="364" stroke="#000000" stroke-width="2"/>
<text x="630" y="370" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<line x1="640" y1="364" x2="658" y2="364" stroke="#000000" stroke-width="2"/>
<text x="668" y="370" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">N</text>
<!-- N-H bonds -->
<line x1="678" y1="358" x2="692" y2="345" stroke="#000000" stroke-width="2"/>
<text x="700" y="341" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H</text>
<line x1="678" y1="374" x2="692" y2="387" stroke="#000000" stroke-width="2"/>
<text x="700" y="397" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H</text>
<!-- C=O -->
<line x1="626" y1="378" x2="626" y2="393" stroke="#000000" stroke-width="2"/>
<line x1="634" y1="378" x2="634" y2="393" stroke="#000000" stroke-width="2"/>
<text x="630" y="407" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">O</text>
<text x="660" y="432" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">e.g. CH₃CONH₂ (ethanamide)</text>
<text x="660" y="450" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">Suffix: -amide; peptide bond</text>
<text x="660" y="465" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Reacts: hydrolysis; nylon synthesis</text>

<!-- Summary / key box -->
<rect x="800" y="275" width="270" height="185" fill="#EFEFEF" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="935" y="297" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Carbonyl Group C=O</text>
<text x="935" y="315" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">Present in: Aldehyde, Ketone,</text>
<text x="935" y="330" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">Carboxylic Acid, Ester, Amide</text>
<line x1="815" y1="338" x2="1060" y2="338" stroke="#BBBBBB" stroke-width="1"/>
<text x="935" y="357" font-family="Arial" font-size="11" fill="#000000" font-weight="bold" text-anchor="middle">Distinguishing Tests:</text>
<text x="820" y="377" font-family="Arial" font-size="10" fill="#000000">Aldehyde: Tollens' (silver mirror)</text>
<text x="820" y="395" font-family="Arial" font-size="10" fill="#000000">Aldehyde: Fehling's (brick-red ppt)</text>
<text x="820" y="413" font-family="Arial" font-size="10" fill="#000000">Alcohol: Na metal (fizzes H₂)</text>
<text x="820" y="431" font-family="Arial" font-size="10" fill="#000000">Carboxylic acid: Na₂CO₃ (CO₂)</text>
<text x="820" y="449" font-family="Arial" font-size="10" fill="#000000">Amine: litmus paper (basic)</text>

<!-- Bottom summary table header -->
<rect x="20" y="478" width="1050" height="30" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="100" y="498" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Group</text>
<text x="260" y="498" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Formula</text>
<text x="430" y="498" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Example</text>
<text x="620" y="498" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Prefix/Suffix</text>
<text x="830" y="498" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Key Reaction</text>

<!-- Table rows -->
<rect x="20" y="508" width="1050" height="26" fill="#FFFFFF" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="100" y="525" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Alcohol</text>
<text x="260" y="525" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">R−OH</text>
<text x="430" y="525" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">ethanol C₂H₅OH</text>
<text x="620" y="525" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">-ol</text>
<text x="830" y="525" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Oxidation, esterification</text>

<rect x="20" y="534" width="1050" height="26" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="100" y="551" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Carboxylic Acid</text>
<text x="260" y="551" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">R−COOH</text>
<text x="430" y="551" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">ethanoic acid CH₃COOH</text>
<text x="620" y="551" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">-oic acid</text>
<text x="830" y="551" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Esterification, neutralisation</text>

<rect x="20" y="560" width="1050" height="26" fill="#FFFFFF" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="100" y="577" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Aldehyde</text>
<text x="260" y="577" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">R−CHO</text>
<text x="430" y="577" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">ethanal CH₃CHO</text>
<text x="620" y="577" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">-al</text>
<text x="830" y="577" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Oxidation (gives acid)</text>

<rect x="20" y="586" width="1050" height="26" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="100" y="603" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Ketone</text>
<text x="260" y="603" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">R−CO−R'</text>
<text x="430" y="603" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">propanone CH₃COCH₃</text>
<text x="620" y="603" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">-one</text>
<text x="830" y="603" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Nucleophilic addition</text>

<rect x="20" y="612" width="1050" height="26" fill="#FFFFFF" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="100" y="629" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Ester</text>
<text x="260" y="629" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">R−COO−R'</text>
<text x="430" y="629" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">methyl ethanoate</text>
<text x="620" y="629" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">-yl -anoate</text>
<text x="830" y="629" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Hydrolysis (acid or alkali)</text>

<rect x="20" y="638" width="1050" height="26" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="100" y="655" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Amine</text>
<text x="260" y="655" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">R−NH₂</text>
<text x="430" y="655" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">methylamine CH₃NH₂</text>
<text x="620" y="655" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">-amine</text>
<text x="830" y="655" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Acid-base, amide formation</text>

<rect x="20" y="664" width="1050" height="26" fill="#FFFFFF" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="100" y="681" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Amide</text>
<text x="260" y="681" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">R−CONH₂</text>
<text x="430" y="681" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">ethanamide CH₃CONH₂</text>
<text x="620" y="681" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">-amide</text>
<text x="830" y="681" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Hydrolysis, peptide linkage</text>

<!-- Column dividers for table -->
<line x1="185" y1="478" x2="185" y2="690" stroke="#AAAAAA" stroke-width="1"/>
<line x1="345" y1="478" x2="345" y2="690" stroke="#AAAAAA" stroke-width="1"/>
<line x1="520" y1="478" x2="520" y2="690" stroke="#AAAAAA" stroke-width="1"/>
<line x1="720" y1="478" x2="720" y2="690" stroke="#AAAAAA" stroke-width="1"/>

<!-- Bottom info -->
<rect x="20" y="700" width="1050" height="45" fill="#EFEFEF" stroke="#AAAAAA" stroke-width="1" rx="3"/>
<text x="540" y="720" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Remember: Functional groups determine chemical reactivity. The R group (alkyl chain) affects physical properties like boiling point and solubility.</text>
<text x="540" y="738" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">Polar functional groups (−OH, −COOH, −NH₂) form hydrogen bonds → higher boiling points and greater water solubility</text>

</g>
</svg>`;

    // Generated from registry: reactionMechanismOrganic
    // reactionType: nucleophilic_substitution
    // options: showCurlyArrows=true, showIntermediates=true, showProducts=true, showCharges=true
    static reactionMechanismOrganicSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Nucleophilic Substitution Mechanism</metadata>
<g fill="none" stroke="#000000">

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="curly-arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="500" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Nucleophilic Substitution Mechanism (SN2)</text>
<text x="500" y="54" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">CH₃Br + OH⁻ → CH₃OH + Br⁻  (haloalkane + hydroxide nucleophile)</text>

<!-- ===== STEP 1 LABEL ===== -->
<text x="150" y="95" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">REACTANTS</text>

<!-- Nucleophile: HO- (left side) -->
<text x="60" y="185" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">HO</text>
<text x="97" y="178" font-family="Arial" font-size="12" fill="#000000">−</text>
<!-- Lone pair dots on O -->
<text x="46" y="183" font-family="Arial" font-size="14" fill="#000000">:</text>

<!-- CH3Br substrate: C at center 320, Br at 420 -->
<text x="300" y="192" font-family="Arial" font-size="16" fill="#000000" font-weight="bold" text-anchor="middle">CH₃</text>
<line x1="318" y1="183" x2="360" y2="183" stroke="#000000" stroke-width="2"/>
<text x="375" y="192" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">Br</text>
<!-- δ+ and δ- charges on substrate -->
<text x="308" y="168" font-family="Arial" font-size="13" fill="#000000">δ+</text>
<text x="366" y="168" font-family="Arial" font-size="13" fill="#000000">δ−</text>

<!-- Curly arrow 1: from lone pair on O to C (electron pair donation) -->
<path d="M 96,182 C 160,150 220,160 298,180" stroke="#000000" stroke-width="2" fill="none" marker-end="url(#curly-arrow)" stroke-dasharray="none"/>
<text x="195" y="148" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">nucleophile attacks C</text>

<!-- Curly arrow 2: from C-Br bond to Br (bond breaking) -->
<path d="M 362,183 C 390,170 420,160 450,175" stroke="#000000" stroke-width="2" fill="none" marker-end="url(#curly-arrow)"/>
<text x="430" y="155" font-family="Arial" font-size="11" fill="#000000">C−Br bond breaks</text>

<!-- ===== TRANSITION STATE ===== -->
<text x="500" y="95" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">TRANSITION STATE</text>
<text x="500" y="113" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">(pentacoordinate, inversion of configuration)</text>

<!-- Bracket for TS -->
<text x="480" y="190" font-family="Arial" font-size="26" fill="#000000">[</text>
<!-- HO partially bonded: dashes -->
<text x="500" y="192" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">HO</text>
<line x1="524" y1="183" x2="546" y2="183" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
<text x="556" y="192" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">C</text>
<!-- 3H substituents on central C in trigonal bipyramidal (inverted umbrella) -->
<line x1="556" y1="175" x2="546" y2="158" stroke="#000000" stroke-width="1.5"/>
<text x="542" y="153" font-family="Arial" font-size="11" fill="#000000">H</text>
<line x1="556" y1="175" x2="568" y2="160" stroke="#000000" stroke-width="1.5"/>
<text x="572" y="155" font-family="Arial" font-size="11" fill="#000000">H</text>
<line x1="556" y1="195" x2="556" y2="215" stroke="#000000" stroke-width="1.5"/>
<text x="556" y="228" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<!-- partial bond to Br -->
<line x1="566" y1="183" x2="588" y2="183" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
<text x="598" y="192" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">Br</text>
<text x="618" y="190" font-family="Arial" font-size="26" fill="#000000">]</text>
<!-- charge on TS -->
<text x="625" y="175" font-family="Arial" font-size="12" fill="#000000">‡</text>
<!-- partial charges -->
<text x="500" y="165" font-family="Arial" font-size="11" fill="#555555">δ−</text>
<text x="596" y="165" font-family="Arial" font-size="11" fill="#555555">δ−</text>

<!-- Overall reaction arrow -->
<line x1="440" y1="183" x2="476" y2="183" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="638" y1="183" x2="680" y2="183" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- ===== PRODUCTS ===== -->
<text x="830" y="95" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">PRODUCTS</text>

<!-- CH3OH -->
<text x="700" y="192" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">CH₃</text>
<line x1="726" y1="183" x2="748" y2="183" stroke="#000000" stroke-width="2"/>
<text x="758" y="192" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">OH</text>

<text x="800" y="192" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">+</text>

<!-- Br- leaving group -->
<text x="825" y="192" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">Br</text>
<text x="853" y="183" font-family="Arial" font-size="12" fill="#000000">−</text>

<!-- Inversion note -->
<text x="730" y="230" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">methanol</text>
<text x="840" y="230" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">bromide ion</text>
<text x="830" y="250" font-family="Arial" font-size="11" fill="#444444">(leaving group)</text>

<!-- Energy profile -->
<text x="500" y="300" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Energy Profile (SN2)</text>
<!-- Axes -->
<line x1="100" y1="440" x2="900" y2="440" stroke="#000000" stroke-width="2"/>
<line x1="100" y1="290" x2="100" y2="450" stroke="#000000" stroke-width="2"/>
<text x="500" y="468" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Reaction Coordinate →</text>
<text x="75" y="370" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" transform="rotate(-90,75,370)">Energy</text>

<!-- Energy curve: reactants plateau → single transition state peak → products plateau -->
<polyline points="120,415 200,415 250,380 320,340 400,300 450,295 500,320 550,355 600,390 680,410 800,410 880,410" 
  stroke="#000000" stroke-width="2.5" fill="none"/>

<!-- Reactants label -->
<text x="175" y="408" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Reactants</text>
<!-- TS peak label -->
<text x="450" y="283" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Transition State ‡</text>
<line x1="450" y1="290" x2="450" y2="300" stroke="#000000" stroke-width="1" stroke-dasharray="3,2"/>
<!-- Products label -->
<text x="820" y="403" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Products</text>

<!-- Activation energy brace -->
<line x1="200" y1="415" x2="200" y2="320" stroke="#000000" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="450" y1="415" x2="450" y2="297" stroke="#000000" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="205" y1="340" x2="445" y2="340" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="445" y1="340" x2="205" y2="340" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="325" y="335" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Ea (activation energy)</text>

<!-- ΔH brace -->
<line x1="810" y1="415" x2="810" y2="320" stroke="#000000" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="190" y1="415" x2="808" y2="415" stroke="#000000" stroke-width="1.5"/>
<line x1="190" y1="412" x2="808" y2="412" stroke="#000000" stroke-width="1.5"/>
<text x="500" y="432" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">ΔH rxn (products lower = exothermic)</text>

<!-- Info box -->
<rect x="30" y="480" width="440" height="100" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="250" y="500" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">SN2 Mechanism Key Points:</text>
<text x="45" y="520" font-family="Arial" font-size="11" fill="#000000">• One step — concerted (bond forms and breaks simultaneously)</text>
<text x="45" y="538" font-family="Arial" font-size="11" fill="#000000">• Inversion of configuration (Walden inversion) at chiral centre</text>
<text x="45" y="556" font-family="Arial" font-size="11" fill="#000000">• Rate = k[substrate][nucleophile] — bimolecular</text>
<text x="45" y="574" font-family="Arial" font-size="11" fill="#000000">• Favoured by: primary substrates, strong nucleophiles</text>

<rect x="520" y="480" width="440" height="100" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="740" y="500" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Curly Arrow Rules:</text>
<text x="535" y="520" font-family="Arial" font-size="11" fill="#000000">• Arrow represents movement of an electron PAIR</text>
<text x="535" y="538" font-family="Arial" font-size="11" fill="#000000">• Tail starts at electron source (lone pair or bond)</text>
<text x="535" y="556" font-family="Arial" font-size="11" fill="#000000">• Head points to where electrons go (new bond or atom)</text>
<text x="535" y="574" font-family="Arial" font-size="11" fill="#000000">• Half-headed arrows (fish-hook) = single electron movement</text>

</g>
</svg>`;

    // Generated from registry: additionReactionDiagram
    // alkene: ethene, reagent: HBr
    // options: showDoubleBond=true, showReagent=true, showMechanism=true, showProduct=true
    static additionReactionDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Electrophilic Addition - Ethene + HBr</metadata>
<g fill="none" stroke="#000000">

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="500" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Electrophilic Addition — Ethene + HBr</text>
<text x="500" y="54" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">CH₂=CH₂  +  HBr  →  CH₃CH₂Br  (bromoethane)</text>

<!-- ===== STEP 1: Electrophile approaches pi bond ===== -->
<text x="170" y="88" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Step 1: Electrophile Approaches</text>

<!-- Ethene with double bond: C1 at 100,160; C2 at 200,160 -->
<text x="90" y="168" font-family="Arial" font-size="15" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<text x="200" y="168" font-family="Arial" font-size="15" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<!-- Double bond (two lines) -->
<line x1="103" y1="160" x2="188" y2="160" stroke="#000000" stroke-width="2.5"/>
<line x1="103" y1="168" x2="188" y2="168" stroke="#000000" stroke-width="2.5"/>
<!-- H on C1 -->
<line x1="90" y1="148" x2="80" y2="132" stroke="#000000" stroke-width="2"/>
<text x="74" y="127" font-family="Arial" font-size="12" fill="#000000">H</text>
<line x1="80" y1="172" x2="68" y2="186" stroke="#000000" stroke-width="2"/>
<text x="60" y="196" font-family="Arial" font-size="12" fill="#000000">H</text>
<!-- H on C2 -->
<line x1="205" y1="148" x2="216" y2="132" stroke="#000000" stroke-width="2"/>
<text x="220" y="127" font-family="Arial" font-size="12" fill="#000000">H</text>
<line x1="210" y1="172" x2="222" y2="186" stroke="#000000" stroke-width="2"/>
<text x="227" y="196" font-family="Arial" font-size="12" fill="#000000">H</text>

<!-- HBr approaching from above: H at 145,100; Br at 200,100 -->
<text x="140" y="112" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">H</text>
<line x1="154" y1="106" x2="174" y2="106" stroke="#000000" stroke-width="2"/>
<text x="180" y="112" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">Br</text>
<!-- δ charges -->
<text x="140" y="98" font-family="Arial" font-size="12" fill="#000000">δ+</text>
<text x="180" y="98" font-family="Arial" font-size="12" fill="#000000">δ−</text>

<!-- Curly arrow from pi bond to H -->
<path d="M 145,162 C 145,135 145,118 148,110" stroke="#000000" stroke-width="2" fill="none" marker-end="url(#arrow-bw)"/>
<text x="110" y="140" font-family="Arial" font-size="10" fill="#444444">π electrons</text>
<text x="110" y="152" font-family="Arial" font-size="10" fill="#444444">attack H</text>

<!-- ===== STEP 2: Carbocation intermediate ===== -->
<text x="500" y="88" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Step 2: Carbocation Intermediate</text>

<!-- Arrow from step 1 to step 2 -->
<line x1="255" y1="162" x2="325" y2="162" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- C1-H3 (CH3 left) -->
<text x="370" y="168" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">CH₃</text>
<line x1="395" y1="162" x2="415" y2="162" stroke="#000000" stroke-width="2"/>
<!-- C2+ (carbocation) -->
<text x="430" y="168" font-family="Arial" font-size="15" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<text x="442" y="155" font-family="Arial" font-size="13" fill="#000000">+</text>
<!-- two H on C+ -->
<line x1="430" y1="148" x2="420" y2="132" stroke="#000000" stroke-width="2"/>
<text x="414" y="127" font-family="Arial" font-size="12" fill="#000000">H</text>
<line x1="436" y1="148" x2="448" y2="132" stroke="#000000" stroke-width="2"/>
<text x="452" y="127" font-family="Arial" font-size="12" fill="#000000">H</text>
<!-- Br- nearby -->
<text x="490" y="112" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">Br</text>
<text x="514" y="102" font-family="Arial" font-size="12" fill="#000000">−</text>
<!-- Curly arrow Br- to C+ -->
<path d="M 494,114 C 480,130 468,148 448,158" stroke="#000000" stroke-width="2" fill="none" marker-end="url(#arrow-bw)"/>
<text x="510" y="140" font-family="Arial" font-size="10" fill="#444444">Br⁻ attacks</text>
<text x="510" y="152" font-family="Arial" font-size="10" fill="#444444">carbocation</text>

<!-- ===== STEP 3: Product ===== -->
<text x="820" y="88" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Step 3: Product Formed</text>

<!-- Arrow from step 2 to step 3 -->
<line x1="555" y1="162" x2="625" y2="162" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- Bromoethane: CH3-CH2-Br -->
<text x="660" y="168" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">CH₃</text>
<line x1="685" y1="162" x2="705" y2="162" stroke="#000000" stroke-width="2"/>
<text x="715" y="168" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">CH₂</text>
<line x1="740" y1="162" x2="760" y2="162" stroke="#000000" stroke-width="2"/>
<text x="770" y="168" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">Br</text>

<text x="770" y="195" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">bromoethane</text>

<!-- Overall equation -->
<rect x="50" y="240" width="900" height="50" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="500" y="262" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Overall Equation:</text>
<text x="500" y="283" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">CH₂=CH₂  +  HBr  →  CH₃CH₂Br</text>

<!-- Energy profile for electrophilic addition -->
<text x="500" y="330" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Reaction Energy Profile (2 steps, carbocation intermediate)</text>
<line x1="80" y1="520" x2="920" y2="520" stroke="#000000" stroke-width="2"/>
<line x1="80" y1="340" x2="80" y2="530" stroke="#000000" stroke-width="2"/>
<text x="500" y="548" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Reaction Coordinate →</text>
<text x="60" y="435" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" transform="rotate(-90,60,435)">Energy</text>

<!-- Two-hump profile: reactants → TS1 → intermediate → TS2 → products -->
<polyline points="100,490 180,490 260,430 340,450 420,390 500,450 580,420 660,445 740,480 860,480"
  stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Labels -->
<text x="140" y="483" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Reactants</text>
<text x="258" y="420" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">TS1</text>
<text x="340" y="443" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Carbocation</text>
<text x="340" y="455" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Intermediate</text>
<text x="420" y="380" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">TS2</text>
<text x="820" y="472" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Product</text>

<!-- Notes box -->
<rect x="30" y="555" width="440" height="35" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="3"/>
<text x="38" y="570" font-family="Arial" font-size="11" fill="#000000">Electrophilic addition: alkenes are nucleophilic (π electrons)</text>
<text x="38" y="584" font-family="Arial" font-size="11" fill="#000000">HBr is electrophile (H is δ+ end that attacks π bond first)</text>
<rect x="520" y="555" width="440" height="35" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="3"/>
<text x="528" y="570" font-family="Arial" font-size="11" fill="#000000">Markovnikov's rule: H adds to less substituted C</text>
<text x="528" y="584" font-family="Arial" font-size="11" fill="#000000">More stable (more substituted) carbocation is intermediate</text>

</g>
</svg>`;

    // Generated from registry: substitutionReactionDiagram
    // substrate: haloalkane, nucleophile: OH-
    static substitutionReactionDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Nucleophilic Substitution - Haloalkane + OH-</metadata>
<g fill="none" stroke="#000000">

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="500" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Nucleophilic Substitution — Haloalkane + OH⁻</text>
<text x="500" y="54" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">R−X  +  OH⁻  →  R−OH  +  X⁻     (X = halogen leaving group)</text>

<!-- Compare SN1 vs SN2 side by side -->
<line x1="500" y1="70" x2="500" y2="480" stroke="#AAAAAA" stroke-width="1.5" stroke-dasharray="6,4"/>
<text x="250" y="90" font-family="Arial" font-size="16" fill="#000000" font-weight="bold" text-anchor="middle">SN1 Mechanism</text>
<text x="250" y="108" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">(unimolecular — tertiary substrates)</text>
<text x="750" y="90" font-family="Arial" font-size="16" fill="#000000" font-weight="bold" text-anchor="middle">SN2 Mechanism</text>
<text x="750" y="108" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">(bimolecular — primary substrates)</text>

<!-- SN1 Step 1: ionisation -->
<text x="30" y="135" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Step 1: Ionisation (slow, rate-determining)</text>
<!-- R-Br → R+ + Br- -->
<text x="60" y="175" font-family="Arial" font-size="14" fill="#000000">(CH₃)₃C</text>
<line x1="130" y1="168" x2="150" y2="168" stroke="#000000" stroke-width="2"/>
<text x="157" y="175" font-family="Arial" font-size="14" fill="#000000">Br</text>
<line x1="195" y1="168" x2="235" y2="168" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="255" y="175" font-family="Arial" font-size="14" fill="#000000">(CH₃)₃C</text>
<text x="320" y="163" font-family="Arial" font-size="13" fill="#000000">+</text>
<text x="340" y="175" font-family="Arial" font-size="14" fill="#000000">+  Br</text>
<text x="374" y="163" font-family="Arial" font-size="12" fill="#000000">−</text>
<text x="200" y="155" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">slow</text>

<!-- SN1 Step 2: nucleophile attacks carbocation -->
<text x="30" y="210" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Step 2: Nucleophilic attack (fast)</text>
<text x="60" y="250" font-family="Arial" font-size="14" fill="#000000">(CH₃)₃C</text>
<text x="130" y="240" font-family="Arial" font-size="13" fill="#000000">+</text>
<text x="155" y="250" font-family="Arial" font-size="14" fill="#000000">+  :OH</text>
<text x="204" y="240" font-family="Arial" font-size="12" fill="#000000">−</text>
<line x1="225" y1="244" x2="265" y2="244" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="275" y="250" font-family="Arial" font-size="14" fill="#000000">(CH₃)₃C</text>
<line x1="345" y1="244" x2="365" y2="244" stroke="#000000" stroke-width="2"/>
<text x="375" y="250" font-family="Arial" font-size="14" fill="#000000">OH</text>
<text x="250" y="232" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">fast</text>

<!-- SN1 rate law -->
<rect x="30" y="280" width="420" height="55" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="3"/>
<text x="240" y="300" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">SN1 Rate Law:</text>
<text x="240" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Rate = k₁[substrate]</text>
<text x="240" y="328" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">(nucleophile not in rate equation — fast step)</text>

<!-- SN1 stereochemistry note -->
<rect x="30" y="345" width="420" height="55" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="3"/>
<text x="240" y="365" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Stereochemistry:</text>
<text x="240" y="383" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Racemic mixture (nucleophile attacks both faces</text>
<text x="240" y="395" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">of planar carbocation equally)</text>

<!-- SN2 (right side) — concerted -->
<text x="520" y="135" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Single Step: Concerted</text>
<!-- HO- attacking, Br- leaving -->
<text x="530" y="175" font-family="Arial" font-size="14" fill="#000000">:OH</text>
<text x="563" y="163" font-family="Arial" font-size="12" fill="#000000">−</text>
<text x="580" y="175" font-family="Arial" font-size="14" fill="#000000">+</text>
<text x="598" y="175" font-family="Arial" font-size="14" fill="#000000">CH₃</text>
<line x1="628" y1="168" x2="648" y2="168" stroke="#000000" stroke-width="2"/>
<text x="655" y="175" font-family="Arial" font-size="14" fill="#000000">Br</text>
<line x1="695" y1="168" x2="735" y2="168" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="748" y="175" font-family="Arial" font-size="14" fill="#000000">CH₃</text>
<line x1="778" y1="168" x2="798" y2="168" stroke="#000000" stroke-width="2"/>
<text x="805" y="175" font-family="Arial" font-size="14" fill="#000000">OH</text>
<text x="850" y="175" font-family="Arial" font-size="14" fill="#000000">+  Br</text>
<text x="884" y="163" font-family="Arial" font-size="12" fill="#000000">−</text>

<!-- SN2 Transition state -->
<text x="520" y="220" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Transition State:</text>
<!-- [HO---CH3---Br]- -->
<text x="530" y="258" font-family="Arial" font-size="13" fill="#000000">[ HO</text>
<line x1="570" y1="252" x2="590" y2="252" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="600" y="258" font-family="Arial" font-size="13" fill="#000000">CH₃</text>
<line x1="630" y1="252" x2="650" y2="252" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="658" y="258" font-family="Arial" font-size="13" fill="#000000">Br ]</text>
<text x="696" y="246" font-family="Arial" font-size="12" fill="#000000">‡</text>
<text x="530" y="238" font-family="Arial" font-size="10" fill="#555555">partial bonds (dashed)</text>

<!-- SN2 rate law -->
<rect x="520" y="280" width="430" height="55" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="3"/>
<text x="735" y="300" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">SN2 Rate Law:</text>
<text x="735" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Rate = k₂[substrate][nucleophile]</text>
<text x="735" y="328" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">(both species in rate equation)</text>

<!-- SN2 stereochemistry note -->
<rect x="520" y="345" width="430" height="55" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="3"/>
<text x="735" y="365" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Stereochemistry:</text>
<text x="735" y="383" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Complete inversion of configuration</text>
<text x="735" y="395" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(Walden inversion — backside attack only)</text>

<!-- Comparison table -->
<rect x="30" y="415" width="940" height="30" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="150" y="435" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Feature</text>
<text x="360" y="435" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">SN1</text>
<text x="750" y="435" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">SN2</text>
<line x1="280" y1="415" x2="280" y2="545" stroke="#AAAAAA" stroke-width="1"/>
<line x1="560" y1="415" x2="560" y2="545" stroke="#AAAAAA" stroke-width="1"/>

<rect x="30" y="445" width="940" height="25" fill="#FFFFFF" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="150" y="462" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Mechanism</text>
<text x="360" y="462" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">2 steps (via carbocation)</text>
<text x="750" y="462" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1 step (concerted)</text>

<rect x="30" y="470" width="940" height="25" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="150" y="487" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Substrate</text>
<text x="360" y="487" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Tertiary (3°) preferred</text>
<text x="750" y="487" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Primary (1°) preferred</text>

<rect x="30" y="495" width="940" height="25" fill="#FFFFFF" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="150" y="512" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Stereochemistry</text>
<text x="360" y="512" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Racemic mixture</text>
<text x="750" y="512" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Inversion (Walden)</text>

<rect x="30" y="520" width="940" height="25" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="150" y="537" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Rate law</text>
<text x="360" y="537" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Rate = k[substrate]</text>
<text x="750" y="537" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Rate = k[substrate][nucleophile]</text>

<!-- Info footer -->
<rect x="30" y="555" width="940" height="35" fill="#EFEFEF" stroke="#AAAAAA" stroke-width="1" rx="3"/>
<text x="500" y="575" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Common nucleophiles: OH⁻, CN⁻, NH₃, Cl⁻, Br⁻, I⁻  |  Common leaving groups: I⁻ > Br⁻ > Cl⁻ > F⁻  |  Polar aprotic solvents favour SN2</text>

</g>
</svg>`;

    // Generated from registry: eliminationReactionDiagram
    // substrate: bromoethane, base: OH-
    static eliminationReactionDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Elimination Reaction - Bromoethane + OH-</metadata>
<g fill="none" stroke="#000000">

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="500" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Elimination Reaction — Bromoethane + OH⁻</text>
<text x="500" y="54" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">CH₃CH₂Br  +  OH⁻  →  CH₂=CH₂  +  H₂O  +  Br⁻</text>

<!-- Substrate: CH3-CH2-Br -->
<text x="150" y="100" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Substrate: bromoethane</text>
<!-- C1 at 120,160; C2 at 220,160 -->
<text x="110" y="168" font-family="Arial" font-size="15" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<line x1="123" y1="162" x2="205" y2="162" stroke="#000000" stroke-width="2"/>
<text x="215" y="168" font-family="Arial" font-size="15" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<line x1="228" y1="162" x2="260" y2="162" stroke="#000000" stroke-width="2"/>
<text x="272" y="168" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">Br</text>
<!-- H on C1 (3H) -->
<line x1="110" y1="148" x2="100" y2="132" stroke="#000000" stroke-width="2"/>
<text x="93" y="128" font-family="Arial" font-size="12" fill="#000000">H</text>
<line x1="97" y1="165" x2="80" y2="170" stroke="#000000" stroke-width="2"/>
<text x="70" y="174" font-family="Arial" font-size="12" fill="#000000">H</text>
<line x1="110" y1="178" x2="100" y2="194" stroke="#000000" stroke-width="2"/>
<text x="93" y="206" font-family="Arial" font-size="12" fill="#000000">H</text>
<!-- H on C2 (2H) -->
<line x1="215" y1="148" x2="205" y2="132" stroke="#000000" stroke-width="2"/>
<text x="198" y="128" font-family="Arial" font-size="12" fill="#000000">H</text>
<line x1="215" y1="178" x2="205" y2="194" stroke="#000000" stroke-width="2"/>
<text x="198" y="206" font-family="Arial" font-size="12" fill="#000000">H</text>
<!-- δ- on Br -->
<text x="290" y="150" font-family="Arial" font-size="12" fill="#000000">δ−</text>

<!-- Base OH- approaching β-H (H on C1) -->
<text x="40" y="130" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">:OH</text>
<text x="72" y="120" font-family="Arial" font-size="12" fill="#000000">−</text>
<!-- Curly arrow 1: from base lone pair to β-H -->
<path d="M 70,128 C 90,125 95,128 100,130" stroke="#000000" stroke-width="2" fill="none" marker-end="url(#arrow-bw)"/>
<!-- Curly arrow 2: from C1-H bond to C1-C2 bond (forming pi bond) -->
<path d="M 104,130 C 108,148 115,158 135,160" stroke="#000000" stroke-width="2" fill="none" marker-end="url(#arrow-bw)"/>
<!-- Curly arrow 3: from C-Br bond to Br -->
<path d="M 230,162 C 248,155 260,152 268,158" stroke="#000000" stroke-width="2" fill="none" marker-end="url(#arrow-bw)"/>

<!-- Labels for arrows -->
<text x="30" y="225" font-family="Arial" font-size="11" fill="#444444">① Base removes β-H</text>
<text x="30" y="241" font-family="Arial" font-size="11" fill="#444444">② C−H electrons form π bond</text>
<text x="30" y="257" font-family="Arial" font-size="11" fill="#444444">③ C−Br bond breaks heterolytically</text>

<!-- Arrow to products -->
<line x1="350" y1="162" x2="420" y2="162" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="385" y="150" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">elimination</text>

<!-- Products -->
<!-- Ethene double bond -->
<text x="500" y="100" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Products</text>
<text x="460" y="168" font-family="Arial" font-size="15" fill="#000000" font-weight="bold">C</text>
<line x1="472" y1="158" x2="506" y2="158" stroke="#000000" stroke-width="2.5"/>
<line x1="472" y1="166" x2="506" y2="166" stroke="#000000" stroke-width="2.5"/>
<text x="516" y="168" font-family="Arial" font-size="15" fill="#000000" font-weight="bold">C</text>
<!-- H on ethene carbons -->
<line x1="460" y1="148" x2="452" y2="132" stroke="#000000" stroke-width="2"/>
<text x="446" y="128" font-family="Arial" font-size="12" fill="#000000">H</text>
<line x1="460" y1="178" x2="452" y2="194" stroke="#000000" stroke-width="2"/>
<text x="446" y="206" font-family="Arial" font-size="12" fill="#000000">H</text>
<line x1="525" y1="148" x2="533" y2="132" stroke="#000000" stroke-width="2"/>
<text x="537" y="128" font-family="Arial" font-size="12" fill="#000000">H</text>
<line x1="525" y1="178" x2="533" y2="194" stroke="#000000" stroke-width="2"/>
<text x="537" y="206" font-family="Arial" font-size="12" fill="#000000">H</text>
<text x="490" y="230" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">ethene</text>

<text x="580" y="168" font-family="Arial" font-size="16" fill="#000000">+</text>
<text x="610" y="168" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">H₂O</text>
<text x="665" y="168" font-family="Arial" font-size="16" fill="#000000">+</text>
<text x="695" y="168" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">Br</text>
<text x="721" y="158" font-family="Arial" font-size="12" fill="#000000">−</text>

<!-- Elimination vs Substitution competition -->
<rect x="30" y="280" width="940" height="200" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="500" y="302" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Elimination vs Substitution Competition</text>
<text x="500" y="320" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">The same reagents (haloalkane + OH⁻) can give substitution OR elimination products depending on conditions</text>

<!-- Two columns -->
<line x1="500" y1="328" x2="500" y2="475" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="4,3"/>

<!-- Substitution conditions -->
<text x="250" y="348" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Favours Substitution (SN2):</text>
<text x="60" y="370" font-family="Arial" font-size="11" fill="#000000">• Dilute aqueous OH⁻ (water as solvent)</text>
<text x="60" y="388" font-family="Arial" font-size="11" fill="#000000">• Low temperature</text>
<text x="60" y="406" font-family="Arial" font-size="11" fill="#000000">• Primary haloalkane</text>
<text x="60" y="424" font-family="Arial" font-size="11" fill="#000000">• OH⁻ acts as nucleophile</text>
<text x="60" y="442" font-family="Arial" font-size="11" fill="#000000">• Product: alcohol (R−OH)</text>
<rect x="50" y="455" width="410" height="25" fill="#EEEEEE" stroke="#AAAAAA" rx="3"/>
<text x="255" y="472" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">R−Br + OH⁻ → R−OH + Br⁻</text>

<!-- Elimination conditions -->
<text x="750" y="348" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Favours Elimination (E2):</text>
<text x="520" y="370" font-family="Arial" font-size="11" fill="#000000">• Concentrated ethanolic OH⁻ (ethanol as solvent)</text>
<text x="520" y="388" font-family="Arial" font-size="11" fill="#000000">• High temperature</text>
<text x="520" y="406" font-family="Arial" font-size="11" fill="#000000">• Tertiary haloalkane</text>
<text x="520" y="424" font-family="Arial" font-size="11" fill="#000000">• OH⁻ acts as base (removes β-H)</text>
<text x="520" y="442" font-family="Arial" font-size="11" fill="#000000">• Product: alkene (R=R')</text>
<rect x="515" y="455" width="440" height="25" fill="#EEEEEE" stroke="#AAAAAA" rx="3"/>
<text x="735" y="472" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">R−Br + OH⁻ → alkene + H₂O + Br⁻</text>

<!-- Zaitsev's rule -->
<rect x="30" y="495" width="940" height="70" fill="#EFEFEF" stroke="#000000" stroke-width="1" rx="4"/>
<text x="500" y="515" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Zaitsev's Rule (for elimination with multiple β-H positions):</text>
<text x="500" y="535" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">The major product of an elimination reaction is the most substituted (most stable) alkene</text>
<text x="500" y="553" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">e.g. 2-bromobutane → but-2-ene (major) and but-1-ene (minor)</text>

</g>
</svg>`;

    // Generated from registry: polymerizationDiagram
    // polymerType: addition, monomer: ethene
    static polymerizationDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Polymerization - Addition and Condensation Polymers</metadata>
<g fill="none" stroke="#000000">

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="500" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Polymerization Reactions</text>
<text x="500" y="54" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">Addition polymerization (ethene) and Condensation polymerization (nylon/polyester)</text>

<!-- Divider -->
<line x1="500" y1="68" x2="500" y2="530" stroke="#AAAAAA" stroke-width="1.5" stroke-dasharray="6,4"/>

<!-- ===== ADDITION POLYMERIZATION ===== -->
<text x="250" y="88" font-family="Arial" font-size="16" fill="#000000" font-weight="bold" text-anchor="middle">Addition Polymerization</text>
<text x="250" y="106" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">Monomer: ethene (CH₂=CH₂) → poly(ethene)</text>

<!-- Monomer: ethene -->
<text x="250" y="140" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Monomer unit:</text>
<!-- C=C double bond -->
<text x="190" y="175" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">H₂C</text>
<line x1="218" y1="166" x2="270" y2="166" stroke="#000000" stroke-width="2.5"/>
<line x1="218" y1="174" x2="270" y2="174" stroke="#000000" stroke-width="2.5"/>
<text x="275" y="175" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">CH₂</text>

<!-- Arrow down with conditions -->
<line x1="250" y1="190" x2="250" y2="220" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="262" y="208" font-family="Arial" font-size="11" fill="#000000">high P, high T</text>
<text x="262" y="220" font-family="Arial" font-size="11" fill="#000000">Ziegler-Natta catalyst</text>

<!-- Repeating unit bracket notation -->
<text x="250" y="250" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Repeating unit:</text>
<!-- [−CH₂−CH₂−]n -->
<text x="165" y="290" font-family="Arial" font-size="20" fill="#000000">−[</text>
<text x="192" y="290" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">CH₂</text>
<line x1="218" y1="282" x2="238" y2="282" stroke="#000000" stroke-width="2"/>
<text x="243" y="290" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">CH₂</text>
<text x="272" y="290" font-family="Arial" font-size="20" fill="#000000">]</text>
<text x="285" y="278" font-family="Arial" font-size="14" fill="#000000" font-style="italic">n</text>
<text x="298" y="290" font-family="Arial" font-size="14" fill="#000000">−</text>

<!-- Conditions box -->
<rect x="30" y="310" width="420" height="70" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="240" y="330" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Conditions:</text>
<text x="48" y="350" font-family="Arial" font-size="11" fill="#000000">• High pressure (~200 atm), high temperature (~200°C)</text>
<text x="48" y="368" font-family="Arial" font-size="11" fill="#000000">• Catalyst (Ziegler-Natta: TiCl₄/Al(C₂H₅)₃) or radical initiator</text>

<!-- Key points -->
<rect x="30" y="390" width="420" height="100" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="240" y="410" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Key Features — Addition Polymers:</text>
<text x="48" y="430" font-family="Arial" font-size="11" fill="#000000">• Only one type of monomer (alkene)</text>
<text x="48" y="448" font-family="Arial" font-size="11" fill="#000000">• Double bond opens — no small molecule lost</text>
<text x="48" y="466" font-family="Arial" font-size="11" fill="#000000">• Very long chain; many thousands of repeat units</text>
<text x="48" y="484" font-family="Arial" font-size="11" fill="#000000">• Examples: HDPE, LDPE, PVC, polypropylene, PTFE</text>

<!-- ===== CONDENSATION POLYMERIZATION ===== -->
<text x="750" y="88" font-family="Arial" font-size="16" fill="#000000" font-weight="bold" text-anchor="middle">Condensation Polymerization</text>
<text x="750" y="106" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">Example: nylon-6,6 (diamine + diacid)</text>

<!-- Diamine monomer -->
<text x="750" y="140" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Two monomers:</text>

<text x="530" y="172" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Diamine:</text>
<text x="610" y="172" font-family="Arial" font-size="13" fill="#000000">H₂N−(CH₂)₆−NH₂</text>
<text x="610" y="188" font-family="Arial" font-size="10" fill="#555555">hexane-1,6-diamine</text>

<text x="530" y="215" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Diacid:</text>
<text x="610" y="215" font-family="Arial" font-size="13" fill="#000000">HOOC−(CH₂)₄−COOH</text>
<text x="610" y="231" font-family="Arial" font-size="10" fill="#555555">hexanedioic acid (adipic acid)</text>

<!-- Arrow -->
<line x1="750" y1="244" x2="750" y2="274" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="762" y="262" font-family="Arial" font-size="11" fill="#000000">−H₂O lost each link</text>

<!-- Amide linkage / repeating unit -->
<text x="750" y="298" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Repeating unit (amide linkage):</text>
<!-- Nylon-6,6 repeat unit -->
<text x="530" y="335" font-family="Arial" font-size="20" fill="#000000">−[</text>
<text x="554" y="335" font-family="Arial" font-size="12" fill="#000000">NH−(CH₂)₆−NH</text>
<line x1="650" y1="326" x2="664" y2="326" stroke="#000000" stroke-width="2"/>
<text x="668" y="335" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">C</text>
<line x1="678" y1="319" x2="678" y2="310" stroke="#000000" stroke-width="2"/>
<line x1="686" y1="319" x2="686" y2="310" stroke="#000000" stroke-width="2"/>
<text x="682" y="307" font-family="Arial" font-size="12" fill="#000000">O</text>
<line x1="686" y1="326" x2="700" y2="326" stroke="#000000" stroke-width="2"/>
<text x="704" y="335" font-family="Arial" font-size="12" fill="#000000">(CH₂)₄</text>
<line x1="746" y1="326" x2="760" y2="326" stroke="#000000" stroke-width="2"/>
<text x="764" y="335" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">C</text>
<line x1="774" y1="319" x2="774" y2="310" stroke="#000000" stroke-width="2"/>
<line x1="782" y1="319" x2="782" y2="310" stroke="#000000" stroke-width="2"/>
<text x="778" y="307" font-family="Arial" font-size="12" fill="#000000">O</text>
<text x="790" y="335" font-family="Arial" font-size="20" fill="#000000">]</text>
<text x="805" y="323" font-family="Arial" font-size="14" fill="#000000" font-style="italic">n</text>
<text x="820" y="335" font-family="Arial" font-size="14" fill="#000000">−</text>
<text x="680" y="358" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">amide bond −CO−NH−</text>

<!-- Byproduct H2O -->
<text x="750" y="380" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Byproduct: H₂O (one molecule per linkage formed)</text>

<!-- Key features condensation -->
<rect x="520" y="395" width="430" height="105" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="735" y="415" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Key Features — Condensation Polymers:</text>
<text x="535" y="435" font-family="Arial" font-size="11" fill="#000000">• Two different bifunctional monomers (or one with both groups)</text>
<text x="535" y="453" font-family="Arial" font-size="11" fill="#000000">• Small molecule (H₂O, HCl, MeOH) eliminated each bond</text>
<text x="535" y="471" font-family="Arial" font-size="11" fill="#000000">• Amide bond (−CONH−): nylon, proteins</text>
<text x="535" y="489" font-family="Arial" font-size="11" fill="#000000">• Ester bond (−COO−): polyester (PET, Terylene)</text>

<!-- Comparison summary at bottom -->
<rect x="30" y="508" width="940" height="80" fill="#EFEFEF" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="500" y="528" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Summary Comparison</text>
<line x1="350" y1="533" x2="350" y2="582" stroke="#AAAAAA" stroke-width="1"/>
<line x1="500" y1="533" x2="500" y2="582" stroke="#AAAAAA" stroke-width="1"/>
<text x="175" y="548" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Feature</text>
<text x="425" y="548" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Addition</text>
<text x="720" y="548" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Condensation</text>
<text x="175" y="568" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Monomer</text>
<text x="425" y="568" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">alkene (one type)</text>
<text x="720" y="568" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">2 bifunctional monomers</text>
<text x="175" y="583" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Byproduct</text>
<text x="425" y="583" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">none</text>
<text x="720" y="583" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H₂O (or HCl)</text>

</g>
</svg>`;

    // Generated from registry: aromaticStructureDiagram
    // compound: benzene
    // options: showResonanceStructures=true, showDelocalizedModel=true, showBondLengths=true, showStability=true
    static aromaticStructureDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG 20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Benzene Structure - Resonance and Delocalization</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Benzene — Resonance and Delocalization</text>
<text x="500" y="54" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">Molecular formula: C₆H₆  |  All C−C bond lengths equal: 140 pm (between single 154 pm and double 134 pm)</text>

<!-- ===== RESONANCE STRUCTURES (Kekulé) ===== -->
<text x="500" y="82" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Kekulé Resonance Structures (showResonanceStructures)</text>

<!-- Structure 1 (left): hexagon with alternating single/double bonds -->
<!-- Hexagon vertices at center 185,195, r=65 -->
<!-- Top: 185,130; TopR: 241,163; BotR: 241,227; Bot: 185,260; BotL: 129,227; TopL: 129,163 -->
<!-- C atoms at vertices -->
<text x="185" y="128" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">C</text>
<text x="247" y="163" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">C</text>
<text x="247" y="231" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">C</text>
<text x="185" y="266" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">C</text>
<text x="123" y="231" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">C</text>
<text x="123" y="163" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">C</text>
<!-- Single bonds (thin) alternating -->
<line x1="191" y1="134" x2="241" y2="163" stroke="#000000" stroke-width="2"/>
<line x1="247" y1="170" x2="247" y2="224" stroke="#000000" stroke-width="4.5"/>
<line x1="247" y1="231" x2="247" y2="225" stroke="#000000" stroke-width="2"/>
<line x1="241" y1="237" x2="191" y2="261" stroke="#000000" stroke-width="2"/>
<line x1="179" y1="261" x2="129" y2="237" stroke="#000000" stroke-width="4.5"/>
<line x1="123" y1="230" x2="123" y2="170" stroke="#000000" stroke-width="2"/>
<line x1="129" y1="163" x2="179" y2="134" stroke="#000000" stroke-width="4.5"/>
<!-- Actually draw proper hexagon with alternating double bonds -->
<!-- Let me draw clean lines -->
<!-- Sides: top-right (double), right (single), bot-right (double), bot-left (single), left (double), top-left (single) -->
<!-- Single bonds -->
<line x1="186" y1="133" x2="241" y2="166" stroke="#000000" stroke-width="2"/>
<line x1="241" y1="234" x2="186" y2="262" stroke="#000000" stroke-width="2"/>
<line x1="127" y1="234" x2="127" y2="167" stroke="#000000" stroke-width="2"/>
<!-- Double bonds (parallel lines offset outward) -->
<!-- Top-right side: double -->
<line x1="248" y1="168" x2="248" y2="232" stroke="#000000" stroke-width="2"/>
<line x1="254" y1="171" x2="254" y2="229" stroke="#000000" stroke-width="2"/>
<!-- Bottom side: double -->
<line x1="184" y1="263" x2="130" y2="235" stroke="#000000" stroke-width="2"/>
<line x1="184" y1="269" x2="128" y2="241" stroke="#000000" stroke-width="2"/>
<!-- Top-left side: double -->
<line x1="130" y1="163" x2="184" y2="134" stroke="#000000" stroke-width="2"/>
<line x1="125" y1="167" x2="181" y2="138" stroke="#000000" stroke-width="2"/>

<!-- H atoms (pointing outward) -->
<text x="185" y="112" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<line x1="185" y1="128" x2="185" y2="116" stroke="#000000" stroke-width="1"/>
<text x="265" y="158" font-family="Arial" font-size="11" fill="#000000">H</text>
<text x="265" y="240" font-family="Arial" font-size="11" fill="#000000">H</text>
<text x="185" y="284" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<line x1="185" y1="268" x2="185" y2="280" stroke="#000000" stroke-width="1"/>
<text x="95" y="240" font-family="Arial" font-size="11" fill="#000000">H</text>
<text x="95" y="158" font-family="Arial" font-size="11" fill="#000000">H</text>

<!-- Resonance arrow -->
<text x="310" y="200" font-family="Arial" font-size="20" fill="#000000">⟷</text>

<!-- Structure 2 (right): other Kekulé with swapped double/single bonds, center 420,195 -->
<text x="420" y="128" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">C</text>
<text x="482" y="163" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">C</text>
<text x="482" y="231" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">C</text>
<text x="420" y="266" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">C</text>
<text x="358" y="231" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">C</text>
<text x="358" y="163" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">C</text>
<!-- Swapped: top-right single, right double, bot-right single, bot-left double, left single, top-left double -->
<!-- Single bonds -->
<line x1="421" y1="133" x2="476" y2="166" stroke="#000000" stroke-width="2"/>
<line x1="476" y1="234" x2="421" y2="262" stroke="#000000" stroke-width="2"/>
<line x1="363" y1="166" x2="363" y2="232" stroke="#000000" stroke-width="2"/>
<!-- Double bonds -->
<line x1="483" y1="169" x2="483" y2="229" stroke="#000000" stroke-width="2"/>
<line x1="489" y1="172" x2="489" y2="226" stroke="#000000" stroke-width="2"/>
<line x1="419" y1="265" x2="365" y2="237" stroke="#000000" stroke-width="2"/>
<line x1="419" y1="271" x2="363" y2="243" stroke="#000000" stroke-width="2"/>
<line x1="365" y1="161" x2="419" y2="132" stroke="#000000" stroke-width="2"/>
<line x1="360" y1="165" x2="416" y2="136" stroke="#000000" stroke-width="2"/>
<!-- H atoms -->
<text x="420" y="112" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<text x="500" y="158" font-family="Arial" font-size="11" fill="#000000">H</text>
<text x="500" y="240" font-family="Arial" font-size="11" fill="#000000">H</text>
<text x="420" y="284" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<text x="330" y="240" font-family="Arial" font-size="11" fill="#000000">H</text>
<text x="330" y="158" font-family="Arial" font-size="11" fill="#000000">H</text>

<!-- ===== DELOCALIZED MODEL ===== -->
<text x="750" y="82" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Delocalized Model (Circle Notation)</text>

<!-- Hexagon for delocalized model, center 750,195 -->
<line x1="750" y1="130" x2="806" y2="163" stroke="#000000" stroke-width="2.5"/>
<line x1="806" y1="163" x2="806" y2="227" stroke="#000000" stroke-width="2.5"/>
<line x1="806" y1="227" x2="750" y2="260" stroke="#000000" stroke-width="2.5"/>
<line x1="750" y1="260" x2="694" y2="227" stroke="#000000" stroke-width="2.5"/>
<line x1="694" y1="227" x2="694" y2="163" stroke="#000000" stroke-width="2.5"/>
<line x1="694" y1="163" x2="750" y2="130" stroke="#000000" stroke-width="2.5"/>
<!-- Circle inside -->
<circle cx="750" cy="195" r="35" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- H atoms -->
<text x="750" y="112" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<text x="824" y="158" font-family="Arial" font-size="11" fill="#000000">H</text>
<text x="824" y="240" font-family="Arial" font-size="11" fill="#000000">H</text>
<text x="750" y="280" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H</text>
<text x="668" y="240" font-family="Arial" font-size="11" fill="#000000">H</text>
<text x="668" y="158" font-family="Arial" font-size="11" fill="#000000">H</text>
<!-- Label -->
<text x="750" y="300" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">Circle = 6 delocalized π electrons</text>
<text x="750" y="316" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">(spread over all 6 carbon atoms)</text>

<!-- Bond length data -->
<rect x="530" y="335" width="420" height="80" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="740" y="355" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Bond Length Evidence (showBondLengths):</text>
<text x="545" y="375" font-family="Arial" font-size="12" fill="#000000">• C−C single bond: 154 pm</text>
<text x="545" y="393" font-family="Arial" font-size="12" fill="#000000">• C=C double bond: 134 pm</text>
<text x="545" y="411" font-family="Arial" font-size="12" fill="#000000">• Benzene C−C bond: 140 pm (intermediate ← delocalization)</text>

<!-- Stability evidence -->
<rect x="30" y="335" width="480" height="80" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="270" y="355" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Stability Evidence (showStability):</text>
<text x="45" y="375" font-family="Arial" font-size="12" fill="#000000">• Enthalpy of hydrogenation lower than expected for 3 double bonds</text>
<text x="45" y="393" font-family="Arial" font-size="12" fill="#000000">• Expected: 3 × (−120) = −360 kJ/mol; Actual: −208 kJ/mol</text>
<text x="45" y="411" font-family="Arial" font-size="12" fill="#000000">• Delocalization energy ≈ 152 kJ/mol (extra stability)</text>

<!-- Electrophilic aromatic substitution -->
<rect x="30" y="430" width="940" height="120" fill="#EFEFEF" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="500" y="452" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Reactions: Electrophilic Aromatic Substitution (EAS) — not addition</text>
<text x="500" y="472" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">Benzene preferentially undergoes substitution (to preserve aromatic stability) rather than addition</text>
<line x1="50" y1="480" x2="950" y2="480" stroke="#BBBBBB" stroke-width="1"/>
<!-- 3 columns -->
<text x="170" y="500" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Nitration</text>
<text x="170" y="518" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">C₆H₆ + HNO₃ →</text>
<text x="170" y="534" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">C₆H₅NO₂ + H₂O</text>
<text x="170" y="550" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">conc. H₂SO₄/HNO₃, 50°C</text>
<line x1="320" y1="482" x2="320" y2="545" stroke="#AAAAAA" stroke-width="1"/>
<text x="500" y="500" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Halogenation (Friedel-Crafts)</text>
<text x="500" y="518" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">C₆H₆ + Br₂ →</text>
<text x="500" y="534" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">C₆H₅Br + HBr</text>
<text x="500" y="550" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">AlBr₃ catalyst (Lewis acid)</text>
<line x1="680" y1="482" x2="680" y2="545" stroke="#AAAAAA" stroke-width="1"/>
<text x="820" y="500" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Sulfonation</text>
<text x="820" y="518" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">C₆H₆ + H₂SO₄ →</text>
<text x="820" y="534" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">C₆H₅SO₃H + H₂O</text>
<text x="820" y="550" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">fuming H₂SO₄, heat</text>

<!-- Bottom info -->
<rect x="30" y="560" width="940" height="50" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="3"/>
<text x="500" y="580" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Hückel's Rule: A molecule is aromatic if it is cyclic, planar, fully conjugated, and has (4n+2) π electrons (n=integer)</text>
<text x="500" y="598" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">Benzene: 6 π electrons (n=1) ✓ — benzene ring appears in many drugs, dyes, polymers and natural products</text>

</g>
</svg>`;

    // Generated from registry: esterificationDiagram
    // acid: ethanoic acid, alcohol: ethanol
    static esterificationDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Esterification - Ethanoic Acid + Ethanol</metadata>
<g fill="none" stroke="#000000">

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="500" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Esterification Reaction</text>
<text x="500" y="54" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">Carboxylic acid + Alcohol ⇌ Ester + Water  (reversible, H⁺ catalyst)</text>

<!-- Overall equation banner -->
<rect x="50" y="65" width="900" height="42" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="500" y="83" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">CH₃COOH  +  C₂H₅OH  ⇌  CH₃COOC₂H₅  +  H₂O</text>
<text x="500" y="100" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">ethanoic acid  +  ethanol  ⇌  ethyl ethanoate  +  water</text>

<!-- ===== REACTANTS ===== -->
<text x="230" y="135" font-family="Arial" font-size="15" fill="#000000" font-weight="bold" text-anchor="middle">Reactants</text>

<!-- Ethanoic acid structural formula -->
<text x="110" y="160" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Ethanoic acid</text>
<!-- CH3 - C(=O) - OH -->
<text x="60" y="200" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">CH₃</text>
<line x1="88" y1="192" x2="108" y2="192" stroke="#000000" stroke-width="2"/>
<text x="118" y="200" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">C</text>
<line x1="128" y1="192" x2="148" y2="192" stroke="#000000" stroke-width="2"/>
<text x="155" y="200" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">O</text>
<line x1="165" y1="192" x2="185" y2="192" stroke="#000000" stroke-width="2"/>
<text x="194" y="200" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">H</text>
<!-- C=O double bond -->
<line x1="114" y1="208" x2="114" y2="228" stroke="#000000" stroke-width="2"/>
<line x1="122" y1="208" x2="122" y2="228" stroke="#000000" stroke-width="2"/>
<text x="118" y="242" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">O</text>
<!-- Circle/highlight the OH that will be lost -->
<circle cx="175" cy="193" r="22" stroke="#000000" stroke-width="2" fill="none" stroke-dasharray="4,3"/>
<text x="175" y="250" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">−OH lost</text>

<!-- Plus sign -->
<text x="250" y="205" font-family="Arial" font-size="22" fill="#000000" font-weight="bold">+</text>

<!-- Ethanol structural formula -->
<text x="355" y="160" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Ethanol</text>
<!-- H - O - CH2 - CH3 -->
<text x="285" y="200" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">H</text>
<line x1="296" y1="192" x2="316" y2="192" stroke="#000000" stroke-width="2"/>
<text x="320" y="200" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">O</text>
<line x1="330" y1="192" x2="355" y2="192" stroke="#000000" stroke-width="2"/>
<text x="362" y="200" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">CH₂</text>
<line x1="388" y1="192" x2="408" y2="192" stroke="#000000" stroke-width="2"/>
<text x="418" y="200" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">CH₃</text>
<!-- Circle H that will be lost -->
<circle cx="289" cy="193" r="16" stroke="#000000" stroke-width="2" fill="none" stroke-dasharray="4,3"/>
<text x="289" y="225" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">−H lost</text>

<!-- Big reaction arrow with conditions -->
<line x1="455" y1="195" x2="540" y2="195" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="540" y1="205" x2="455" y2="205" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="497" y="183" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">conc. H₂SO₄</text>
<text x="497" y="225" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">heat, reflux</text>
<text x="497" y="237" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">(reversible)</text>

<!-- ===== PRODUCTS ===== -->
<text x="760" y="135" font-family="Arial" font-size="15" fill="#000000" font-weight="bold" text-anchor="middle">Products</text>

<!-- Ethyl ethanoate structural formula -->
<text x="660" y="160" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Ethyl ethanoate</text>
<!-- CH3 - C(=O) - O - CH2CH3 -->
<text x="560" y="200" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">CH₃</text>
<line x1="590" y1="192" x2="608" y2="192" stroke="#000000" stroke-width="2"/>
<text x="618" y="200" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">C</text>
<line x1="628" y1="192" x2="650" y2="192" stroke="#000000" stroke-width="2"/>
<text x="658" y="200" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">O</text>
<line x1="668" y1="192" x2="692" y2="192" stroke="#000000" stroke-width="2"/>
<text x="700" y="200" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">CH₂</text>
<line x1="724" y1="192" x2="742" y2="192" stroke="#000000" stroke-width="2"/>
<text x="752" y="200" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">CH₃</text>
<!-- C=O -->
<line x1="614" y1="208" x2="614" y2="228" stroke="#000000" stroke-width="2"/>
<line x1="622" y1="208" x2="622" y2="228" stroke="#000000" stroke-width="2"/>
<text x="618" y="242" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">O</text>
<!-- Box the ester linkage -->
<rect x="607" y="178" width="70" height="35" stroke="#000000" stroke-width="1.5" fill="none" stroke-dasharray="3,2"/>
<text x="642" y="230" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">ester linkage</text>

<!-- Plus sign -->
<text x="810" y="205" font-family="Arial" font-size="22" fill="#000000" font-weight="bold">+</text>

<!-- Water -->
<text x="880" y="160" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Water</text>
<text x="880" y="205" font-family="Arial" font-size="20" fill="#000000" font-weight="bold" text-anchor="middle">H₂O</text>
<text x="880" y="230" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">condensate</text>

<!-- Mechanism arrows showing bond formation and cleavage -->
<rect x="30" y="280" width="940" height="130" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="500" y="302" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Mechanism Summary (acid-catalyzed)</text>

<text x="50" y="325" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Step 1:</text>
<text x="105" y="325" font-family="Arial" font-size="12" fill="#000000">Protonation of the C=O of carboxylic acid by H⁺ catalyst → activated carbonyl</text>
<text x="50" y="345" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Step 2:</text>
<text x="105" y="345" font-family="Arial" font-size="12" fill="#000000">Nucleophilic attack of alcohol oxygen on activated carbonyl carbon</text>
<text x="50" y="365" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Step 3:</text>
<text x="105" y="365" font-family="Arial" font-size="12" fill="#000000">Proton transfers and loss of water (from −OH of original acid)</text>
<text x="50" y="385" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Step 4:</text>
<text x="105" y="385" font-family="Arial" font-size="12" fill="#000000">Deprotonation regenerates H⁺ catalyst and gives ester product</text>

<!-- Equilibrium and yield -->
<rect x="30" y="420" width="460" height="115" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="260" y="440" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Equilibrium Considerations (Kc ≈ 4):</text>
<text x="48" y="462" font-family="Arial" font-size="11" fill="#000000">• Reaction is reversible — reaches equilibrium</text>
<text x="48" y="480" font-family="Arial" font-size="11" fill="#000000">• Yield ≈ 67% at equilibrium</text>
<text x="48" y="498" font-family="Arial" font-size="11" fill="#000000">• To increase yield: remove water (distillation)</text>
<text x="48" y="516" font-family="Arial" font-size="11" fill="#000000">• Or use excess of one reactant (Le Chatelier)</text>
<text x="48" y="528" font-family="Arial" font-size="10" fill="#555555">• Use anhydrous conditions to prevent hydrolysis</text>

<!-- Properties of product -->
<rect x="510" y="420" width="460" height="115" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="740" y="440" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Properties of Ethyl Ethanoate:</text>
<text x="528" y="462" font-family="Arial" font-size="11" fill="#000000">• Fruity smell (found in nail polish remover)</text>
<text x="528" y="480" font-family="Arial" font-size="11" fill="#000000">• Boiling point: 77.1 °C</text>
<text x="528" y="498" font-family="Arial" font-size="11" fill="#000000">• Less soluble in water than parent alcohol/acid</text>
<text x="528" y="516" font-family="Arial" font-size="11" fill="#000000">• Reverse reaction (hydrolysis) with H₂O + H⁺</text>
<text x="528" y="534" font-family="Arial" font-size="11" fill="#000000">• Saponification: irreversible hydrolysis with NaOH</text>

<!-- Naming rule box -->
<rect x="30" y="545" width="940" height="45" fill="#EFEFEF" stroke="#AAAAAA" stroke-width="1" rx="3"/>
<text x="500" y="565" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Naming Rule: [alkyl group from alcohol]-yl  +  [acid chain]-anoate</text>
<text x="500" y="582" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">e.g. methanol + propanoic acid → methyl propanoate  |  propan-1-ol + methanoic acid → propyl methanoate</text>

</g>
</svg>`;

    // Generated from registry: chiralityDiagram
    // molecule: lactic acid
    // options: showChiralCenter=true, showEnantiomers=true, showMirrorPlane=true, showRotation=true
    static chiralityDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Chirality and Optical Isomers - Lactic Acid</metadata>
<g fill="none" stroke="#000000">

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="500" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Chirality and Optical Isomers — Lactic Acid</text>
<text x="500" y="54" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">2-hydroxypropanoic acid  |  Molecular formula: C₃H₆O₃  |  One chiral centre (C2)</text>

<!-- Mirror plane (vertical dashed line) -->
<line x1="500" y1="72" x2="500" y2="550" stroke="#000000" stroke-width="2" stroke-dasharray="10,6"/>
<text x="500" y="65" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Mirror Plane</text>

<!-- ===== L-lactic acid (left enantiomer) ===== -->
<text x="250" y="90" font-family="Arial" font-size="16" fill="#000000" font-weight="bold" text-anchor="middle">L-(−)-lactic acid</text>
<text x="250" y="108" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">(S)-2-hydroxypropanoic acid</text>
<text x="250" y="124" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">Rotates plane-polarized light LEFT</text>

<!-- Wedge-dash notation for L-lactic acid -->
<!-- Central chiral C at 250, 270 -->
<!-- COOH above (in plane, line) -->
<line x1="250" y1="252" x2="250" y2="198" stroke="#000000" stroke-width="2"/>
<text x="250" y="188" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">COOH</text>
<!-- CH3 below (in plane, line) -->
<line x1="250" y1="288" x2="250" y2="342" stroke="#000000" stroke-width="2"/>
<text x="250" y="358" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">CH₃</text>
<!-- OH left (wedge bond — coming toward viewer) -->
<polygon points="250,270 180,240 180,250" fill="#000000" stroke="#000000" stroke-width="0.5"/>
<text x="162" y="250" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">OH</text>
<!-- H right (dashed bond — going away from viewer) -->
<line x1="250" y1="270" x2="330" y2="260" stroke="#000000" stroke-width="2" stroke-dasharray="5,4"/>
<text x="342" y="264" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">H</text>
<!-- Chiral C marker -->
<text x="238" y="275" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">C</text>
<circle cx="248" cy="270" r="18" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="248" y="310" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">chiral centre (C2)</text>

<!-- Bond legend (wedge = toward viewer, dashed = away) -->
<rect x="30" y="380" width="200" height="60" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="3"/>
<text x="130" y="398" font-family="Arial" font-size="10" fill="#000000" font-weight="bold" text-anchor="middle">Bond Notation:</text>
<polygon points="40,420 80,412 80,420" fill="#000000" stroke="#000000" stroke-width="0.5"/>
<text x="100" y="420" font-family="Arial" font-size="10" fill="#000000">= toward viewer</text>
<line x1="40" y1="435" x2="80" y2="435" stroke="#000000" stroke-width="2" stroke-dasharray="4,3"/>
<text x="100" y="438" font-family="Arial" font-size="10" fill="#000000">= away from viewer</text>

<!-- ===== D-lactic acid (right enantiomer) ===== -->
<text x="750" y="90" font-family="Arial" font-size="16" fill="#000000" font-weight="bold" text-anchor="middle">D-(+)-lactic acid</text>
<text x="750" y="108" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">(R)-2-hydroxypropanoic acid</text>
<text x="750" y="124" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">Rotates plane-polarized light RIGHT</text>

<!-- Wedge-dash for D-lactic acid (mirror of L): OH on right (wedge), H on left (dashed) -->
<line x1="750" y1="252" x2="750" y2="198" stroke="#000000" stroke-width="2"/>
<text x="750" y="188" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">COOH</text>
<line x1="750" y1="288" x2="750" y2="342" stroke="#000000" stroke-width="2"/>
<text x="750" y="358" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">CH₃</text>
<!-- OH right (wedge) -->
<polygon points="750,270 820,240 820,250" fill="#000000" stroke="#000000" stroke-width="0.5"/>
<text x="838" y="250" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">OH</text>
<!-- H left (dashed) -->
<line x1="750" y1="270" x2="670" y2="260" stroke="#000000" stroke-width="2" stroke-dasharray="5,4"/>
<text x="657" y="264" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">H</text>
<!-- Chiral C marker -->
<text x="738" y="275" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">C</text>
<circle cx="748" cy="270" r="18" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="748" y="310" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">chiral centre (C2)</text>

<!-- Mirror reflection arrows -->
<line x1="370" y1="270" x2="432" y2="270" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="630" y1="270" x2="568" y2="270" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="500" y="268" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">mirror images</text>

<!-- Fischer projections -->
<text x="500" y="400" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Fischer Projection Equivalents</text>

<!-- L Fischer: vertical chain, horizontal substituents -->
<text x="250" y="432" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">L-lactic acid</text>
<!-- Vertical line -->
<line x1="250" y1="445" x2="250" y2="510" stroke="#000000" stroke-width="2"/>
<!-- Horizontal line at junction -->
<line x1="218" y1="477" x2="282" y2="477" stroke="#000000" stroke-width="2"/>
<!-- Group labels -->
<text x="250" y="443" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">COOH</text>
<text x="200" y="481" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">HO</text>
<text x="295" y="481" font-family="Arial" font-size="12" fill="#000000">H</text>
<text x="250" y="524" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">CH₃</text>
<!-- In Fischer: horizontal bonds come toward viewer, vertical go away -->
<text x="250" y="542" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Horizontal → toward viewer</text>

<!-- D Fischer -->
<text x="750" y="432" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">D-lactic acid</text>
<line x1="750" y1="445" x2="750" y2="510" stroke="#000000" stroke-width="2"/>
<line x1="718" y1="477" x2="782" y2="477" stroke="#000000" stroke-width="2"/>
<text x="750" y="443" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">COOH</text>
<text x="700" y="481" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">H</text>
<text x="795" y="481" font-family="Arial" font-size="12" fill="#000000">OH</text>
<text x="750" y="524" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">CH₃</text>
<text x="750" y="542" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">OH swapped to other side</text>

<!-- Key facts summary -->
<rect x="30" y="565" width="940" height="120" fill="#EFEFEF" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="500" y="585" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Key Facts about Chirality and Optical Isomers</text>
<line x1="500" y1="592" x2="500" y2="678" stroke="#AAAAAA" stroke-width="1"/>
<!-- Left column -->
<text x="45" y="608" font-family="Arial" font-size="11" fill="#000000">• A chiral molecule has a non-superimposable mirror image</text>
<text x="45" y="626" font-family="Arial" font-size="11" fill="#000000">• A chiral centre = C bonded to 4 DIFFERENT groups</text>
<text x="45" y="644" font-family="Arial" font-size="11" fill="#000000">• Enantiomers are non-superimposable mirror images</text>
<text x="45" y="662" font-family="Arial" font-size="11" fill="#000000">• A racemic mixture (racemate) = 50:50 mix → no net rotation</text>
<text x="45" y="678" font-family="Arial" font-size="11" fill="#000000">• Plane-polarized light used in polarimetry to distinguish them</text>
<!-- Right column -->
<text x="515" y="608" font-family="Arial" font-size="11" fill="#000000">• Enantiomers have identical physical properties except optical rotation</text>
<text x="515" y="626" font-family="Arial" font-size="11" fill="#000000">• They may differ in biological/pharmacological activity</text>
<text x="515" y="644" font-family="Arial" font-size="11" fill="#000000">• (+) = dextrorotatory = rotates light clockwise</text>
<text x="515" y="662" font-family="Arial" font-size="11" fill="#000000">• (−) = laevorotatory = rotates light anticlockwise</text>
<text x="515" y="678" font-family="Arial" font-size="11" fill="#000000">• R/S notation (Cahn-Ingold-Prelog rules) assigns absolute config.</text>

</g>
</svg>`;

    // ============================================================
    // ===== 12. INORGANIC CHEMISTRY ==============================
    // ============================================================

    // Generated from registry: periodicTrendsDiagram
    // trend: electronegativity
    // options: showPeriodicTable=true, showArrows=true, showValues=true, showExplanation=true
    static periodicTrendsDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1100" height="700" viewBox="0 0 1100 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Periodic Table Trends - Electronegativity</metadata>
<g fill="none" stroke="#000000">

<defs>
  <marker id="arrow-bw" markerWidth="12" markerHeight="12" refX="10" refY="3" orient="auto">
    <polygon points="0 0, 12 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="550" y="30" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Electronegativity Trends in the Periodic Table</text>
<text x="550" y="52" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">Pauling scale values shown | Trend: increases across period (→) and up a group (↑)</text>

<!-- ===== PERIODIC TABLE GRID (main-group elements only, simplified) ===== -->
<!-- Period labels on left -->
<text x="28" y="118" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">P1</text>
<text x="28" y="158" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">P2</text>
<text x="28" y="198" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">P3</text>
<text x="28" y="238" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">P4</text>

<!-- Group labels on top (G1-G8/18) -->
<text x="65"  y="80" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">G1</text>
<text x="105" y="80" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">G2</text>
<text x="505" y="80" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">G13</text>
<text x="545" y="80" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">G14</text>
<text x="585" y="80" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">G15</text>
<text x="625" y="80" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">G16</text>
<text x="665" y="80" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">G17</text>
<text x="705" y="80" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">G18</text>

<!-- Helper macro: element box at (x, y) 36x36 -->
<!-- Row 1: H (G1), He (G18) -->
<rect x="47" y="90" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#FFFFFF"/>
<text x="65" y="105" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">H</text>
<text x="65" y="118" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">2.20</text>

<rect x="687" y="90" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#EEEEEE"/>
<text x="705" y="105" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">He</text>
<text x="705" y="118" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">—</text>

<!-- Row 2: Li, Be, B, C, N, O, F, Ne -->
<rect x="47" y="130" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#FFFFFF"/>
<text x="65" y="145" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Li</text>
<text x="65" y="158" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">0.98</text>

<rect x="87" y="130" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#FFFFFF"/>
<text x="105" y="145" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Be</text>
<text x="105" y="158" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">1.57</text>

<rect x="487" y="130" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#FFFFFF"/>
<text x="505" y="145" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">B</text>
<text x="505" y="158" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">2.04</text>

<rect x="527" y="130" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#FFFFFF"/>
<text x="545" y="145" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">C</text>
<text x="545" y="158" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">2.55</text>

<rect x="567" y="130" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#FFFFFF"/>
<text x="585" y="145" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">N</text>
<text x="585" y="158" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">3.04</text>

<rect x="607" y="130" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#DDDDDD"/>
<text x="625" y="145" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">O</text>
<text x="625" y="158" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">3.44</text>

<rect x="647" y="130" width="36" height="36" stroke="#000000" stroke-width="2" fill="#AAAAAA"/>
<text x="665" y="145" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">F</text>
<text x="665" y="158" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">3.98</text>

<rect x="687" y="130" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#EEEEEE"/>
<text x="705" y="145" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Ne</text>
<text x="705" y="158" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">—</text>

<!-- Row 3: Na, Mg, Al, Si, P, S, Cl, Ar -->
<rect x="47" y="170" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#FFFFFF"/>
<text x="65" y="185" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Na</text>
<text x="65" y="198" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">0.93</text>

<rect x="87" y="170" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#FFFFFF"/>
<text x="105" y="185" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Mg</text>
<text x="105" y="198" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">1.31</text>

<rect x="487" y="170" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#FFFFFF"/>
<text x="505" y="185" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Al</text>
<text x="505" y="198" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">1.61</text>

<rect x="527" y="170" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#FFFFFF"/>
<text x="545" y="185" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Si</text>
<text x="545" y="198" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">1.90</text>

<rect x="567" y="170" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#FFFFFF"/>
<text x="585" y="185" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">P</text>
<text x="585" y="198" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">2.19</text>

<rect x="607" y="170" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#CCCCCC"/>
<text x="625" y="185" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">S</text>
<text x="625" y="198" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">2.58</text>

<rect x="647" y="170" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#AAAAAA"/>
<text x="665" y="185" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Cl</text>
<text x="665" y="198" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">3.16</text>

<rect x="687" y="170" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#EEEEEE"/>
<text x="705" y="185" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Ar</text>
<text x="705" y="198" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">—</text>

<!-- Row 4: K, Ca, Ga, Ge, As, Se, Br, Kr -->
<rect x="47" y="210" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#FFFFFF"/>
<text x="65" y="225" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">K</text>
<text x="65" y="238" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">0.82</text>

<rect x="87" y="210" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#FFFFFF"/>
<text x="105" y="225" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Ca</text>
<text x="105" y="238" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">1.00</text>

<rect x="487" y="210" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#FFFFFF"/>
<text x="505" y="225" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Ga</text>
<text x="505" y="238" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">1.81</text>

<rect x="527" y="210" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#FFFFFF"/>
<text x="545" y="225" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Ge</text>
<text x="545" y="238" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">2.01</text>

<rect x="567" y="210" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#FFFFFF"/>
<text x="585" y="225" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">As</text>
<text x="585" y="238" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">2.18</text>

<rect x="607" y="210" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#DDDDDD"/>
<text x="625" y="225" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Se</text>
<text x="625" y="238" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">2.55</text>

<rect x="647" y="210" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#BBBBBB"/>
<text x="665" y="225" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Br</text>
<text x="665" y="238" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">2.96</text>

<rect x="687" y="210" width="36" height="36" stroke="#000000" stroke-width="1.2" fill="#EEEEEE"/>
<text x="705" y="225" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Kr</text>
<text x="705" y="238" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">—</text>

<!-- Shading legend -->
<rect x="30" y="266" width="15" height="15" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
<text x="50" y="278" font-family="Arial" font-size="10" fill="#000000">Low EN (~1)</text>
<rect x="130" y="266" width="15" height="15" fill="#AAAAAA" stroke="#000000" stroke-width="1"/>
<text x="150" y="278" font-family="Arial" font-size="10" fill="#000000">High EN (~3-4)</text>
<text x="240" y="278" font-family="Arial" font-size="10" fill="#444444">  (F = 3.98 highest; Cs = 0.79 lowest)</text>

<!-- TREND ARROWS -->
<!-- Across period arrow (→) -->
<line x1="47" y1="62" x2="700" y2="62" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="375" y="56" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Electronegativity INCREASES →</text>

<!-- Down group arrow (↓ = decreases going down) -->
<line x1="760" y1="90" x2="760" y2="248" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="820" y="170" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">EN</text>
<text x="820" y="186" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">decreases</text>
<text x="820" y="202" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">down</text>
<text x="820" y="218" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">group ↓</text>

<!-- Explanation section -->
<rect x="30" y="295" width="700" height="160" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="380" y="318" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Explanation of Trends (showExplanation)</text>
<line x1="40" y1="323" x2="720" y2="323" stroke="#BBBBBB" stroke-width="1"/>
<text x="50" y="343" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Across a period (increasing EN):</text>
<text x="60" y="361" font-family="Arial" font-size="11" fill="#000000">• Nuclear charge (protons) increases → stronger pull on bonding electrons</text>
<text x="60" y="379" font-family="Arial" font-size="11" fill="#000000">• Atomic radius decreases → bonding electrons held closer → stronger attraction</text>
<text x="60" y="397" font-family="Arial" font-size="11" fill="#000000">• Shielding approximately constant across period</text>
<text x="50" y="420" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Down a group (decreasing EN):</text>
<text x="60" y="440" font-family="Arial" font-size="11" fill="#000000">• Atomic radius increases (more electron shells) → bonding electrons further from nucleus</text>
<text x="60" y="456" font-family="Arial" font-size="11" fill="#000000">• Increased shielding from inner shells → reduced effective nuclear charge felt by bonding pair</text>

<!-- Other periodic trends summary table -->
<rect x="740" y="295" width="330" height="260" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="905" y="316" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Other Periodic Trends</text>
<rect x="750" y="322" width="310" height="22" fill="#DDDDDD" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="810" y="337" font-family="Arial" font-size="11" fill="#000000" font-weight="bold" text-anchor="middle">Property</text>
<text x="980" y="337" font-family="Arial" font-size="11" fill="#000000" font-weight="bold" text-anchor="middle">Trend</text>
<line x1="920" y1="322" x2="920" y2="548" stroke="#AAAAAA" stroke-width="1"/>

<text x="810" y="358" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Atomic radius</text>
<text x="980" y="358" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">← ↑ decreases</text>
<text x="810" y="376" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Ionisation energy</text>
<text x="980" y="376" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">→ ↑ increases</text>
<text x="810" y="394" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Electron affinity</text>
<text x="980" y="394" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">→ ↑ increases</text>
<text x="810" y="412" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Metallic character</text>
<text x="980" y="412" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">← ↓ increases</text>
<text x="810" y="430" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Non-metallic char.</text>
<text x="980" y="430" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">→ ↑ increases</text>
<text x="810" y="448" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Electronegativity</text>
<text x="980" y="448" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">→ ↑ increases</text>
<text x="810" y="466" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Nuclear charge</text>
<text x="980" y="466" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">→ always increases</text>
<text x="810" y="484" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Shielding</text>
<text x="980" y="484" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">↓ increases</text>
<text x="810" y="502" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Reactivity (metals)</text>
<text x="980" y="502" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">← ↓ increases</text>
<text x="905" y="534" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">→ = across period, ↑ = up group</text>
<text x="905" y="548" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">← = left in period, ↓ = down group</text>

<!-- Electronegativity differences and bonding -->
<rect x="30" y="465" width="700" height="90" fill="#EFEFEF" stroke="#000000" stroke-width="1" rx="4"/>
<text x="380" y="485" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Electronegativity Difference and Bond Type</text>
<text x="50" y="506" font-family="Arial" font-size="11" fill="#000000">• ΔEN = 0  (same atom):  Non-polar covalent bond  e.g. Cl₂, H₂</text>
<text x="50" y="524" font-family="Arial" font-size="11" fill="#000000">• ΔEN = 0.4–1.7:  Polar covalent bond  e.g. H−Cl (ΔEN=0.96), H−F (ΔEN=1.78)</text>
<text x="50" y="542" font-family="Arial" font-size="11" fill="#000000">• ΔEN &gt; 1.7:  Ionic bond (electron transfer)  e.g. NaCl (ΔEN=2.23), MgO (ΔEN=2.13)</text>

<!-- Footer note -->
<rect x="30" y="567" width="700" height="40" fill="#F5F5F5" stroke="#AAAAAA" rx="3"/>
<text x="380" y="582" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Pauling scale (most common): F = 3.98 (highest), Cs = 0.79 (lowest), noble gases typically not assigned</text>
<text x="380" y="597" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">Mulliken, Allred-Rochow scales also used — relative order the same</text>

</g>
</svg>`;

    // Generated from registry: transitionMetalComplexDiagram
    // complex: [Cu(NH3)4(H2O)2]2+
    static transitionMetalComplexDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="800" viewBox="0 0 800 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>Transition Metal Complex - [Cu(NH3)4(H2O)2]2+</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="32" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">Coordination Complex: [Cu(NH₃)₄(H₂O)₂]²⁺</text>
<text x="400" y="52" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">Octahedral geometry | Coordination number: 6 | Cu oxidation state: +2</text>

<!-- Central metal ion: Cu2+ at center 400, 400 -->
<circle cx="400" cy="380" r="35" fill="#FFFFFF" stroke="#000000" stroke-width="2.5"/>
<text x="400" y="376" font-family="Arial" font-size="16" fill="#000000" font-weight="bold" text-anchor="middle">Cu</text>
<text x="400" y="392" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2+</text>

<!-- Octahedral ligand positions:
     Top (axial): H2O at 400, 215
     Bottom (axial): H2O at 400, 545
     Left (equatorial): NH3 at 215, 380
     Right (equatorial): NH3 at 585, 380
     Front-left (equatorial): NH3 at 255, 500
     Front-right (equatorial): NH3 at 545, 500  -->

<!-- Dative/coordinate bonds (arrows from ligand to Cu) -->
<!-- Top -->
<line x1="400" y1="345" x2="400" y2="268" stroke="#000000" stroke-width="2.5"/>
<!-- Bottom -->
<line x1="400" y1="415" x2="400" y2="492" stroke="#000000" stroke-width="2.5"/>
<!-- Left -->
<line x1="365" y1="380" x2="268" y2="380" stroke="#000000" stroke-width="2.5"/>
<!-- Right -->
<line x1="435" y1="380" x2="532" y2="380" stroke="#000000" stroke-width="2.5"/>
<!-- Front-left (perspective diagonal) -->
<line x1="372" y1="408" x2="298" y2="462" stroke="#000000" stroke-width="2.5"/>
<!-- Front-right (perspective diagonal) -->
<line x1="428" y1="408" x2="502" y2="462" stroke="#000000" stroke-width="2.5"/>

<!-- Ligand 1: H2O (top axial) -->
<ellipse cx="400" cy="240" rx="38" ry="22" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="400" y="245" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">H₂O</text>
<text x="400" y="215" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">axial</text>

<!-- Ligand 2: H2O (bottom axial) -->
<ellipse cx="400" cy="520" rx="38" ry="22" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="400" y="525" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">H₂O</text>
<text x="400" y="552" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">axial</text>

<!-- Ligand 3: NH3 (left equatorial) -->
<ellipse cx="232" cy="380" rx="38" ry="22" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="232" y="385" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">NH₃</text>
<text x="232" y="408" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">equatorial</text>

<!-- Ligand 4: NH3 (right equatorial) -->
<ellipse cx="568" cy="380" rx="38" ry="22" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="568" y="385" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">NH₃</text>
<text x="568" y="408" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">equatorial</text>

<!-- Ligand 5: NH3 (front-left equatorial) -->
<ellipse cx="278" cy="478" rx="38" ry="22" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="278" y="483" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">NH₃</text>
<text x="278" y="508" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">equatorial</text>

<!-- Ligand 6: NH3 (front-right equatorial) -->
<ellipse cx="522" cy="478" rx="38" ry="22" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="522" y="483" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">NH₃</text>
<text x="522" y="508" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">equatorial</text>

<!-- Lone pair donation arrows (showing coordinate bonds, dashed → solid) -->
<text x="400" y="330" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">lone pair →</text>
<text x="335" y="365" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">lone pair →</text>
<text x="465" y="365" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">← lone pair</text>

<!-- Overall charge label -->
<text x="450" y="352" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">²⁺</text>

<!-- Info panels -->
<rect x="30" y="570" width="340" height="150" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="200" y="590" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Complex Details:</text>
<text x="45" y="612" font-family="Arial" font-size="11" fill="#000000">• Central ion: Cu²⁺  (d⁹ electron configuration)</text>
<text x="45" y="630" font-family="Arial" font-size="11" fill="#000000">• Coordination number: 6</text>
<text x="45" y="648" font-family="Arial" font-size="11" fill="#000000">• Geometry: octahedral (4 equatorial + 2 axial)</text>
<text x="45" y="666" font-family="Arial" font-size="11" fill="#000000">• Ligands: 4 × NH₃ (monodentate) + 2 × H₂O (monodentate)</text>
<text x="45" y="684" font-family="Arial" font-size="11" fill="#000000">• Overall charge: 2+ (Cu²⁺ + neutral ligands)</text>
<text x="45" y="702" font-family="Arial" font-size="11" fill="#000000">• Deep blue color (d-d transition absorbs red/orange light)</text>

<rect x="390" y="570" width="380" height="150" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="580" y="590" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Ligand Properties:</text>
<text x="405" y="612" font-family="Arial" font-size="11" fill="#000000">• NH₃: Lewis base, donates lone pair via N atom</text>
<text x="405" y="630" font-family="Arial" font-size="11" fill="#000000">• H₂O: Lewis base, donates lone pair via O atom</text>
<text x="405" y="648" font-family="Arial" font-size="11" fill="#000000">• Both are monodentate (one donor atom each)</text>
<text x="405" y="666" font-family="Arial" font-size="11" fill="#000000">• NH₃ is stronger field ligand than H₂O (spectrochemical series)</text>
<text x="405" y="684" font-family="Arial" font-size="11" fill="#000000">• [Cu(H₂O)₆]²⁺ + 4NH₃ ⇌ [Cu(NH₃)₄(H₂O)₂]²⁺ + 4H₂O</text>
<text x="405" y="702" font-family="Arial" font-size="11" fill="#000000">• Ligand substitution: NH₃ displaces H₂O (Kstab large)</text>

<!-- Oxidation state note -->
<rect x="220" y="730" width="360" height="55" fill="#EFEFEF" stroke="#000000" stroke-width="1" rx="3"/>
<text x="400" y="750" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Oxidation State Calculation:</text>
<text x="400" y="770" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Cu oxidation state + 4(0) + 2(0) = +2  ∴ Cu = +2</text>

</g>
</svg>`;


    // ============================================================
    // ===== 8. ACIDS & BASES =====================================
    // ============================================================

    // Generated from registry: phScaleDiagram
    // type: ph_scale
    // options: showScale, showExamples, showColors, showHConcentration
    static phScaleDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>pH Scale Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">pH Scale</text>
<text x="500" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">pH 0–14 with common substances and H⁺ concentration</text>

<!-- pH Scale bar (0-14), x: 50 to 950, each unit = ~64px -->
<!-- Shade segments with gray gradients: 0-6=acid, 7=neutral, 8-14=base -->
<!-- ACID region -->
<rect x="50" y="80" width="448" height="50" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<!-- NEUTRAL -->
<rect x="498" y="80" width="64" height="50" fill="#CCCCCC" stroke="#000000" stroke-width="1.5"/>
<!-- BASE region -->
<rect x="562" y="80" width="438" height="50" fill="#F5F5F5" stroke="#000000" stroke-width="1.5"/>

<!-- pH tick marks and numbers 0–14 -->
<!-- Each unit = (950-50)/14 = 64.28px -->
<line x1="50"  y1="130" x2="50"  y2="145" stroke="#000000" stroke-width="2"/>
<text x="50"  y="160" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">0</text>
<line x1="114" y1="130" x2="114" y2="145" stroke="#000000" stroke-width="2"/>
<text x="114" y="160" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1</text>
<line x1="178" y1="130" x2="178" y2="145" stroke="#000000" stroke-width="2"/>
<text x="178" y="160" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">2</text>
<line x1="243" y1="130" x2="243" y2="145" stroke="#000000" stroke-width="2"/>
<text x="243" y="160" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">3</text>
<line x1="307" y1="130" x2="307" y2="145" stroke="#000000" stroke-width="2"/>
<text x="307" y="160" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">4</text>
<line x1="371" y1="130" x2="371" y2="145" stroke="#000000" stroke-width="2"/>
<text x="371" y="160" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">5</text>
<line x1="436" y1="130" x2="436" y2="145" stroke="#000000" stroke-width="2"/>
<text x="436" y="160" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">6</text>
<line x1="500" y1="130" x2="500" y2="145" stroke="#000000" stroke-width="2"/>
<text x="500" y="160" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">7</text>
<line x1="564" y1="130" x2="564" y2="145" stroke="#000000" stroke-width="2"/>
<text x="564" y="160" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">8</text>
<line x1="629" y1="130" x2="629" y2="145" stroke="#000000" stroke-width="2"/>
<text x="629" y="160" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">9</text>
<line x1="693" y1="130" x2="693" y2="145" stroke="#000000" stroke-width="2"/>
<text x="693" y="160" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">10</text>
<line x1="757" y1="130" x2="757" y2="145" stroke="#000000" stroke-width="2"/>
<text x="757" y="160" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">11</text>
<line x1="821" y1="130" x2="821" y2="145" stroke="#000000" stroke-width="2"/>
<text x="821" y="160" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">12</text>
<line x1="886" y1="130" x2="886" y2="145" stroke="#000000" stroke-width="2"/>
<text x="886" y="160" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">13</text>
<line x1="950" y1="130" x2="950" y2="145" stroke="#000000" stroke-width="2"/>
<text x="950" y="160" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">14</text>

<!-- Region labels -->
<text x="270" y="110" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">ACIDIC</text>
<text x="500" y="110" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">NEUTRAL</text>
<text x="740" y="110" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">BASIC (ALKALINE)</text>

<!-- H+ concentration row (showHConcentration) -->
<text x="50" y="185" font-family="Arial" font-size="11" fill="#000000" font-weight="bold">[H⁺] (mol/L):</text>
<text x="50"  y="200" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">10⁰</text>
<text x="114" y="200" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">10⁻¹</text>
<text x="178" y="200" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">10⁻²</text>
<text x="243" y="200" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">10⁻³</text>
<text x="307" y="200" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">10⁻⁴</text>
<text x="371" y="200" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">10⁻⁵</text>
<text x="436" y="200" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">10⁻⁶</text>
<text x="500" y="200" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">10⁻⁷</text>
<text x="564" y="200" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">10⁻⁸</text>
<text x="629" y="200" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">10⁻⁹</text>
<text x="693" y="200" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">10⁻¹⁰</text>
<text x="757" y="200" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">10⁻¹¹</text>
<text x="821" y="200" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">10⁻¹²</text>
<text x="886" y="200" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">10⁻¹³</text>
<text x="950" y="200" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">10⁻¹⁴</text>

<!-- Common substances (showExamples) -->
<!-- Acid examples - arrows pointing up to scale -->
<!-- Battery acid pH~1 -->
<line x1="114" y1="80" x2="114" y2="260" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="114" y="275" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Battery</text>
<text x="114" y="288" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Acid (~1)</text>

<!-- Lemon juice pH~2 -->
<line x1="178" y1="80" x2="178" y2="310" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="178" y="325" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Lemon</text>
<text x="178" y="338" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Juice (~2)</text>

<!-- Vinegar pH~3 -->
<line x1="243" y1="80" x2="243" y2="260" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="243" y="275" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Vinegar</text>
<text x="243" y="288" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">(~3)</text>

<!-- Coffee pH~5 -->
<line x1="371" y1="80" x2="371" y2="310" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="371" y="325" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Coffee</text>
<text x="371" y="338" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">(~5)</text>

<!-- Pure water pH=7 -->
<line x1="500" y1="80" x2="500" y2="260" stroke="#000000" stroke-width="2" stroke-dasharray="4,3"/>
<text x="500" y="275" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Pure</text>
<text x="500" y="288" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Water (7)</text>

<!-- Baking soda pH~9 -->
<line x1="629" y1="80" x2="629" y2="310" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="629" y="325" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Baking</text>
<text x="629" y="338" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Soda (~9)</text>

<!-- Ammonia pH~11 -->
<line x1="757" y1="80" x2="757" y2="260" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="757" y="275" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Ammonia</text>
<text x="757" y="288" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">(~11)</text>

<!-- Bleach pH~13 -->
<line x1="886" y1="80" x2="886" y2="310" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="886" y="325" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Bleach</text>
<text x="886" y="338" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">(~13)</text>

<!-- Formula box -->
<rect x="50" y="390" width="380" height="65" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="62" y="410" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Key Relationships:</text>
<text x="62" y="428" font-family="Arial" font-size="11" fill="#000000">pH = -log[H⁺]     pOH = -log[OH⁻]</text>
<text x="62" y="446" font-family="Arial" font-size="11" fill="#000000">pH + pOH = 14     Kw = [H⁺][OH⁻] = 1×10⁻¹⁴</text>

<!-- Increasing acidity / basicity arrows -->
<line x1="50" y1="360" x2="490" y2="360" stroke="#000000" stroke-width="2" marker-end="url(#arr)"/>
<text x="270" y="378" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Increasing Acidity →</text>
<line x1="950" y1="360" x2="510" y2="360" stroke="#000000" stroke-width="2" marker-end="url(#arr)"/>
<text x="730" y="378" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">← Increasing Basicity</text>

<defs>
  <marker id="arr" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: acidBaseTheoriesDiagram
    // type: acid_base_theories
    // options: showArrhenius, showBronstedLowry, showLewis, showExamples
    static acidBaseTheoriesDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="800" viewBox="0 0 1000 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>Acid-Base Theories Comparison</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Acid-Base Theories</text>
<text x="500" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Arrhenius · Brønsted-Lowry · Lewis</text>

<!-- Column headers -->
<rect x="30" y="65" width="290" height="36" fill="#DDDDDD" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="175" y="88" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Arrhenius Theory</text>
<rect x="355" y="65" width="290" height="36" fill="#DDDDDD" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="500" y="88" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Brønsted-Lowry Theory</text>
<rect x="680" y="65" width="290" height="36" fill="#DDDDDD" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="825" y="88" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Lewis Theory</text>

<!-- ===== ARRHENIUS ===== -->
<rect x="30" y="110" width="290" height="580" fill="#FAFAFA" stroke="#000000" stroke-width="1.5" rx="3"/>

<text x="175" y="138" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Definition</text>
<line x1="50" y1="142" x2="300" y2="142" stroke="#AAAAAA" stroke-width="1"/>
<text x="50" y="160" font-family="Arial" font-size="11" fill="#000000">Acid: produces H⁺ in water</text>
<text x="50" y="176" font-family="Arial" font-size="11" fill="#000000">Base: produces OH⁻ in water</text>

<text x="175" y="210" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Examples (Acid)</text>
<line x1="50" y1="214" x2="300" y2="214" stroke="#AAAAAA" stroke-width="1"/>
<rect x="50" y="222" width="250" height="50" fill="#EEEEEE" stroke="#999999" stroke-width="1" rx="3"/>
<text x="175" y="241" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">HCl → H⁺ + Cl⁻</text>
<text x="175" y="260" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(hydrochloric acid)</text>

<text x="175" y="300" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Examples (Base)</text>
<line x1="50" y1="304" x2="300" y2="304" stroke="#AAAAAA" stroke-width="1"/>
<rect x="50" y="312" width="250" height="50" fill="#EEEEEE" stroke="#999999" stroke-width="1" rx="3"/>
<text x="175" y="331" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">NaOH → Na⁺ + OH⁻</text>
<text x="175" y="350" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(sodium hydroxide)</text>

<text x="175" y="390" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Limitation</text>
<line x1="50" y1="394" x2="300" y2="394" stroke="#AAAAAA" stroke-width="1"/>
<text x="50" y="412" font-family="Arial" font-size="11" fill="#000000">Only applies to aqueous</text>
<text x="50" y="428" font-family="Arial" font-size="11" fill="#000000">solutions. Cannot explain</text>
<text x="50" y="444" font-family="Arial" font-size="11" fill="#000000">NH₃ as a base (no OH⁻).</text>

<text x="175" y="480" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Scope</text>
<line x1="50" y1="484" x2="300" y2="484" stroke="#AAAAAA" stroke-width="1"/>
<text x="50" y="500" font-family="Arial" font-size="11" fill="#000000">Narrowest definition.</text>
<text x="50" y="516" font-family="Arial" font-size="11" fill="#000000">Applies to water only.</text>

<!-- ===== BRONSTED-LOWRY ===== -->
<rect x="355" y="110" width="290" height="580" fill="#FAFAFA" stroke="#000000" stroke-width="1.5" rx="3"/>

<text x="500" y="138" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Definition</text>
<line x1="375" y1="142" x2="625" y2="142" stroke="#AAAAAA" stroke-width="1"/>
<text x="375" y="160" font-family="Arial" font-size="11" fill="#000000">Acid: proton (H⁺) donor</text>
<text x="375" y="176" font-family="Arial" font-size="11" fill="#000000">Base: proton (H⁺) acceptor</text>

<text x="500" y="210" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Proton Transfer Example</text>
<line x1="375" y1="214" x2="625" y2="214" stroke="#AAAAAA" stroke-width="1"/>
<rect x="375" y="222" width="250" height="80" fill="#EEEEEE" stroke="#999999" stroke-width="1" rx="3"/>
<text x="500" y="241" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">HCl + H₂O → H₃O⁺ + Cl⁻</text>
<text x="385" y="258" font-family="Arial" font-size="10" fill="#555555">acid    base   conj.  conj.</text>
<text x="385" y="273" font-family="Arial" font-size="10" fill="#555555">                acid   base</text>
<!-- proton transfer arrow -->
<line x1="420" y1="238" x2="460" y2="238" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arr)"/>
<text x="440" y="232" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">H⁺</text>

<text x="500" y="328" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Conjugate Pairs</text>
<line x1="375" y1="332" x2="625" y2="332" stroke="#AAAAAA" stroke-width="1"/>
<text x="375" y="350" font-family="Arial" font-size="11" fill="#000000">HCl / Cl⁻   (acid/conj. base)</text>
<text x="375" y="366" font-family="Arial" font-size="11" fill="#000000">H₂O / H₃O⁺ (base/conj. acid)</text>

<text x="500" y="406" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Advantage</text>
<line x1="375" y1="410" x2="625" y2="410" stroke="#AAAAAA" stroke-width="1"/>
<text x="375" y="428" font-family="Arial" font-size="11" fill="#000000">Works in non-aqueous</text>
<text x="375" y="444" font-family="Arial" font-size="11" fill="#000000">solvents. Explains NH₃</text>
<text x="375" y="460" font-family="Arial" font-size="11" fill="#000000">as a base (accepts H⁺).</text>

<text x="500" y="498" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Scope</text>
<line x1="375" y1="502" x2="625" y2="502" stroke="#AAAAAA" stroke-width="1"/>
<text x="375" y="520" font-family="Arial" font-size="11" fill="#000000">Broader than Arrhenius.</text>
<text x="375" y="536" font-family="Arial" font-size="11" fill="#000000">Requires a proton.</text>

<!-- ===== LEWIS ===== -->
<rect x="680" y="110" width="290" height="580" fill="#FAFAFA" stroke="#000000" stroke-width="1.5" rx="3"/>

<text x="825" y="138" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Definition</text>
<line x1="700" y1="142" x2="950" y2="142" stroke="#AAAAAA" stroke-width="1"/>
<text x="700" y="160" font-family="Arial" font-size="11" fill="#000000">Acid: electron pair acceptor</text>
<text x="700" y="176" font-family="Arial" font-size="11" fill="#000000">Base: electron pair donor</text>

<text x="825" y="210" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Example Reaction</text>
<line x1="700" y1="214" x2="950" y2="214" stroke="#AAAAAA" stroke-width="1"/>
<rect x="700" y="222" width="250" height="70" fill="#EEEEEE" stroke="#999999" stroke-width="1" rx="3"/>
<text x="825" y="244" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">BF₃  +  :NH₃  →  F₃B–NH₃</text>
<text x="710" y="262" font-family="Arial" font-size="10" fill="#555555">Lewis  Lewis</text>
<text x="710" y="277" font-family="Arial" font-size="10" fill="#555555">acid    base</text>
<!-- electron pair arrow -->
<line x1="800" y1="255" x2="778" y2="255" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arr)"/>
<text x="790" y="248" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">e⁻ pair</text>

<text x="825" y="322" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">More Examples</text>
<line x1="700" y1="326" x2="950" y2="326" stroke="#AAAAAA" stroke-width="1"/>
<text x="700" y="344" font-family="Arial" font-size="11" fill="#000000">Acid: BF₃, AlCl₃, H⁺, Fe³⁺</text>
<text x="700" y="360" font-family="Arial" font-size="11" fill="#000000">Base: NH₃, H₂O, F⁻, OH⁻</text>

<text x="825" y="400" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Advantage</text>
<line x1="700" y1="404" x2="950" y2="404" stroke="#AAAAAA" stroke-width="1"/>
<text x="700" y="422" font-family="Arial" font-size="11" fill="#000000">Broadest definition.</text>
<text x="700" y="438" font-family="Arial" font-size="11" fill="#000000">Does not require H.</text>
<text x="700" y="454" font-family="Arial" font-size="11" fill="#000000">Explains coordination</text>
<text x="700" y="470" font-family="Arial" font-size="11" fill="#000000">chemistry.</text>

<text x="825" y="508" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Scope</text>
<line x1="700" y1="512" x2="950" y2="512" stroke="#AAAAAA" stroke-width="1"/>
<text x="700" y="530" font-family="Arial" font-size="11" fill="#000000">Widest — any e⁻-pair</text>
<text x="700" y="546" font-family="Arial" font-size="11" fill="#000000">interaction qualifies.</text>

<!-- Venn-like scope note at bottom -->
<rect x="30" y="710" width="940" height="60" fill="#F0F0F0" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="500" y="733" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Scope (widest → narrowest):</text>
<text x="500" y="754" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Lewis ⊃ Brønsted-Lowry ⊃ Arrhenius   (all Arrhenius acids/bases are Brønsted-Lowry; all B-L are Lewis)</text>

<defs>
  <marker id="arr" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: conjugateAcidBasePairs
    // type: conjugate_pairs | acid: HCl | base: NH3
    // options: showProtonTransfer, showForward, showReverse, showPairs
    static conjugateAcidBasePairsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Conjugate Acid-Base Pairs</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Conjugate Acid-Base Pairs</text>
<text x="500" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Related by single proton (H⁺) transfer</text>

<!-- ===== Example 1: HCl + H2O ===== -->
<text x="500" y="85" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Example 1: Strong Acid</text>

<!-- Species boxes -->
<rect x="60" y="100" width="130" height="50" fill="#EEEEEE" stroke="#000000" stroke-width="2" rx="4"/>
<text x="125" y="122" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">HCl</text>
<text x="125" y="142" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">acid</text>

<rect x="260" y="100" width="130" height="50" fill="#EEEEEE" stroke="#000000" stroke-width="2" rx="4"/>
<text x="325" y="122" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">H₂O</text>
<text x="325" y="142" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">base</text>

<rect x="560" y="100" width="130" height="50" fill="#F5F5F5" stroke="#000000" stroke-width="2" rx="4"/>
<text x="625" y="122" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">H₃O⁺</text>
<text x="625" y="142" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">conj. acid</text>

<rect x="760" y="100" width="130" height="50" fill="#F5F5F5" stroke="#000000" stroke-width="2" rx="4"/>
<text x="825" y="122" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">Cl⁻</text>
<text x="825" y="142" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">conj. base</text>

<!-- Plus and arrow symbols -->
<text x="205" y="132" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle">+</text>
<text x="510" y="132" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle">→</text>
<text x="710" y="132" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle">+</text>

<!-- Proton transfer arrow (showProtonTransfer) -->
<path d="M 125,98 Q 225,60 325,98" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arr2)"/>
<text x="225" y="58" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H⁺ transfer</text>

<!-- Conjugate pair brackets (showPairs) -->
<!-- Pair 1: HCl / Cl⁻ -->
<line x1="60" y1="165" x2="890" y2="165" stroke="#AAAAAA" stroke-width="0.5"/>
<line x1="60" y1="165" x2="60" y2="190" stroke="#000000" stroke-width="2"/>
<line x1="890" y1="165" x2="890" y2="190" stroke="#000000" stroke-width="2"/>
<line x1="60" y1="190" x2="890" y2="190" stroke="#000000" stroke-width="2" marker-mid="url(#arr2)"/>
<!-- label pair under bracket -->
<text x="475" y="185" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Conjugate pair 1: HCl / Cl⁻   (differ by H⁺)</text>

<!-- Pair 2: H2O / H3O+ -->
<line x1="260" y1="200" x2="690" y2="200" stroke="#000000" stroke-width="2"/>
<line x1="260" y1="200" x2="260" y2="215" stroke="#000000" stroke-width="2"/>
<line x1="690" y1="200" x2="690" y2="215" stroke="#000000" stroke-width="2"/>
<text x="475" y="230" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Conjugate pair 2: H₂O / H₃O⁺   (differ by H⁺)</text>

<!-- ===== Example 2: NH3 + H2O ===== -->
<text x="500" y="275" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Example 2: Weak Base (Amphoteric water)</text>

<rect x="60" y="290" width="130" height="50" fill="#EEEEEE" stroke="#000000" stroke-width="2" rx="4"/>
<text x="125" y="312" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">NH₃</text>
<text x="125" y="332" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">base</text>

<rect x="260" y="290" width="130" height="50" fill="#EEEEEE" stroke="#000000" stroke-width="2" rx="4"/>
<text x="325" y="312" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">H₂O</text>
<text x="325" y="332" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">acid</text>

<rect x="560" y="290" width="130" height="50" fill="#F5F5F5" stroke="#000000" stroke-width="2" rx="4"/>
<text x="625" y="312" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">NH₄⁺</text>
<text x="625" y="332" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">conj. acid</text>

<rect x="760" y="290" width="130" height="50" fill="#F5F5F5" stroke="#000000" stroke-width="2" rx="4"/>
<text x="825" y="312" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">OH⁻</text>
<text x="825" y="332" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">conj. base</text>

<text x="205" y="322" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle">+</text>
<text x="510" y="322" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle">⇌</text>
<text x="710" y="322" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle">+</text>

<path d="M 325,288 Q 425,250 560,288" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arr2)"/>
<text x="442" y="248" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">H⁺ transfer</text>

<!-- Info box -->
<rect x="30" y="460" width="940" height="110" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="50" y="480" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Rules for Conjugate Pairs:</text>
<text x="50" y="498" font-family="Arial" font-size="11" fill="#000000">• A conjugate acid is formed when a base gains an H⁺</text>
<text x="50" y="515" font-family="Arial" font-size="11" fill="#000000">• A conjugate base is formed when an acid loses an H⁺</text>
<text x="50" y="532" font-family="Arial" font-size="11" fill="#000000">• Strong acid → very weak conjugate base   |   Weak acid → moderately strong conjugate base</text>
<text x="50" y="549" font-family="Arial" font-size="11" fill="#000000">• Ka × Kb = Kw = 1×10⁻¹⁴  (for a conjugate acid-base pair)</text>

<defs>
  <marker id="arr2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: strongWeakAcidsDiagram
    // type: strong_weak_acids | strongAcid: HCl | weakAcid: CH3COOH
    // options: showDissociation, showIons, showMolecules, showComparison
    static strongWeakAcidsDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Strong vs Weak Acids</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Strong vs Weak Acids</text>
<text x="500" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Degree of dissociation comparison</text>

<!-- ===== STRONG ACID — HCl ===== -->
<rect x="30" y="70" width="440" height="360" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="4"/>
<text x="250" y="95" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">STRONG ACID — HCl</text>
<line x1="50" y1="102" x2="450" y2="102" stroke="#AAAAAA" stroke-width="1"/>

<!-- Equation -->
<text x="250" y="128" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">HCl(aq)  →  H⁺(aq)  +  Cl⁻(aq)</text>
<text x="250" y="146" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Complete dissociation (≈100%)</text>

<!-- Before dissociation (showMolecules) -->
<text x="110" y="175" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Before</text>
<!-- HCl molecules -->
<circle cx="80" cy="205" r="14" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="80" y="210" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">HCl</text>
<circle cx="120" cy="205" r="14" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="120" y="210" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">HCl</text>
<circle cx="80" cy="240" r="14" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="80" y="245" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">HCl</text>
<circle cx="120" cy="240" r="14" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="120" y="245" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">HCl</text>
<circle cx="160" cy="222" r="14" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="160" y="227" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">HCl</text>

<!-- Arrow -->
<line x1="200" y1="222" x2="240" y2="222" stroke="#000000" stroke-width="3" marker-end="url(#arr3)"/>
<text x="220" y="215" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">100%</text>

<!-- After dissociation (showIons) -->
<text x="340" y="175" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">After</text>
<circle cx="270" cy="200" r="12" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="270" y="204" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">H⁺</text>
<circle cx="310" cy="200" r="12" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="310" y="204" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Cl⁻</text>
<circle cx="350" cy="200" r="12" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="350" y="204" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">H⁺</text>
<circle cx="390" cy="200" r="12" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="390" y="204" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Cl⁻</text>
<circle cx="270" cy="235" r="12" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="270" y="239" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">H⁺</text>
<circle cx="310" cy="235" r="12" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="310" y="239" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Cl⁻</text>
<circle cx="350" cy="235" r="12" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="350" y="239" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">H⁺</text>
<circle cx="390" cy="235" r="12" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="390" y="239" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Cl⁻</text>
<!-- no undissociated molecules -->
<text x="330" y="270" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">(no HCl remains)</text>

<!-- Properties -->
<text x="50" y="306" font-family="Arial" font-size="11" fill="#000000">• Ka is very large (≫1)</text>
<text x="50" y="322" font-family="Arial" font-size="11" fill="#000000">• Low pH for given concentration</text>
<text x="50" y="338" font-family="Arial" font-size="11" fill="#000000">• Good electrical conductor</text>
<text x="50" y="354" font-family="Arial" font-size="11" fill="#000000">• Examples: HCl, HBr, HI, H₂SO₄, HNO₃, HClO₄</text>
<text x="50" y="370" font-family="Arial" font-size="11" fill="#000000">• Equilibrium lies far to the right (→)</text>

<!-- ===== WEAK ACID — CH3COOH ===== -->
<rect x="530" y="70" width="440" height="360" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="4"/>
<text x="750" y="95" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">WEAK ACID — CH₃COOH</text>
<line x1="550" y1="102" x2="950" y2="102" stroke="#AAAAAA" stroke-width="1"/>

<text x="750" y="128" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">CH₃COOH(aq) ⇌ H⁺(aq) + CH₃COO⁻(aq)</text>
<text x="750" y="146" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Partial dissociation (~1% for 0.1 M)</text>

<!-- Before (lots of molecules) -->
<text x="650" y="175" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Before</text>
<circle cx="600" cy="205" r="16" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="600" y="209" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Ac</text>
<circle cx="640" cy="205" r="16" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="640" y="209" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Ac</text>
<circle cx="680" cy="205" r="16" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="680" y="209" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Ac</text>
<circle cx="600" cy="240" r="16" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="600" y="244" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Ac</text>
<circle cx="640" cy="240" r="16" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="640" y="244" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Ac</text>

<!-- Partial arrow -->
<line x1="710" y1="222" x2="750" y2="222" stroke="#000000" stroke-width="3" marker-end="url(#arr3)"/>
<line x1="750" y1="232" x2="710" y2="232" stroke="#000000" stroke-width="1.5" marker-end="url(#arr3)"/>
<text x="730" y="212" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">~1%</text>

<!-- After (mostly molecules, few ions) -->
<text x="860" y="175" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">After</text>
<circle cx="775" cy="205" r="16" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="775" y="209" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Ac</text>
<circle cx="815" cy="205" r="16" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="815" y="209" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Ac</text>
<circle cx="855" cy="205" r="16" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="855" y="209" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Ac</text>
<circle cx="775" cy="240" r="16" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="775" y="244" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Ac</text>
<!-- only 1 pair of ions -->
<circle cx="895" cy="200" r="11" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="895" y="204" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">H⁺</text>
<circle cx="920" cy="220" r="11" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="920" y="224" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Ac⁻</text>
<text x="850" y="270" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">(most CH₃COOH intact)</text>

<text x="550" y="306" font-family="Arial" font-size="11" fill="#000000">• Ka is small (≪1, e.g. Ka = 1.8×10⁻⁵)</text>
<text x="550" y="322" font-family="Arial" font-size="11" fill="#000000">• Higher pH than strong acid (same conc.)</text>
<text x="550" y="338" font-family="Arial" font-size="11" fill="#000000">• Poor electrical conductor</text>
<text x="550" y="354" font-family="Arial" font-size="11" fill="#000000">• Examples: CH₃COOH, HF, HCN, H₂CO₃</text>
<text x="550" y="370" font-family="Arial" font-size="11" fill="#000000">• Equilibrium lies left (⇌)</text>

<!-- Comparison table (showComparison) -->
<rect x="30" y="450" width="940" height="130" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="500" y="470" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Comparison</text>
<line x1="50" y1="478" x2="950" y2="478" stroke="#AAAAAA" stroke-width="1"/>
<!-- Headers -->
<text x="200" y="495" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Property</text>
<text x="500" y="495" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Strong Acid (HCl)</text>
<text x="790" y="495" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Weak Acid (CH₃COOH)</text>
<line x1="50" y1="500" x2="950" y2="500" stroke="#CCCCCC" stroke-width="1"/>
<text x="200" y="515" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Dissociation</text>
<text x="500" y="515" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Complete (100%)</text>
<text x="790" y="515" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Partial (&lt;5%)</text>
<text x="200" y="533" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Ka value</text>
<text x="500" y="533" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Very large (≫1)</text>
<text x="790" y="533" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Small (≪1)</text>
<text x="200" y="551" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Conductivity</text>
<text x="500" y="551" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">High</text>
<text x="790" y="551" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Low</text>
<text x="200" y="569" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Equilibrium</text>
<text x="500" y="569" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">→ (far right)</text>
<text x="790" y="569" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">⇌ (left-favoring)</text>

<defs>
  <marker id="arr3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: bufferSolutionDiagram
    // type: buffer_solution | buffer: CH3COOH/CH3COONa
    // options: showComponents, showAcidAddition, showBaseAddition, showpHStability
    static bufferSolutionDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Buffer Solution Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Buffer Solution</text>
<text x="500" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">CH₃COOH / CH₃COO⁻Na⁺ — resisting pH change</text>

<!-- ===== BUFFER COMPONENTS (showComponents) ===== -->
<rect x="280" y="70" width="440" height="120" fill="#F5F5F5" stroke="#000000" stroke-width="2" rx="4"/>
<text x="500" y="92" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Buffer Components</text>
<line x1="300" y1="98" x2="700" y2="98" stroke="#AAAAAA" stroke-width="1"/>
<text x="500" y="118" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Weak acid:  CH₃COOH  (acetic acid)</text>
<text x="500" y="136" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Conjugate base:  CH₃COO⁻  (acetate ion)</text>
<text x="500" y="156" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Equilibrium:  CH₃COOH  ⇌  H⁺  +  CH₃COO⁻     (Ka = 1.8×10⁻⁵,  pH ≈ 4.74)</text>
<text x="500" y="174" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Henderson-Hasselbalch:  pH = pKa + log([A⁻]/[HA])</text>

<!-- Central buffer beaker -->
<rect x="420" y="220" width="160" height="120" fill="#EEEEEE" stroke="#000000" stroke-width="3" rx="6"/>
<text x="500" y="268" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">BUFFER</text>
<text x="500" y="286" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">CH₃COOH</text>
<text x="500" y="302" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">CH₃COO⁻</text>
<text x="500" y="325" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">pH ≈ 4.74</text>

<!-- ===== ACID ADDITION (showAcidAddition) ===== -->
<rect x="50" y="220" width="290" height="250" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="4"/>
<text x="195" y="244" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Adding Strong Acid (HCl)</text>
<line x1="70" y1="250" x2="320" y2="250" stroke="#AAAAAA" stroke-width="1"/>

<!-- Arrow from acid addition to buffer -->
<line x1="340" y1="280" x2="418" y2="280" stroke="#000000" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#arr4)"/>
<text x="379" y="272" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">HCl added</text>

<text x="70" y="275" font-family="Arial" font-size="11" fill="#000000">Added: H⁺ (from HCl)</text>
<text x="70" y="295" font-family="Arial" font-size="11" fill="#000000">Buffer responds:</text>
<rect x="70" y="303" width="250" height="40" fill="#EEEEEE" stroke="#999999" stroke-width="1" rx="3"/>
<text x="195" y="320" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">CH₃COO⁻ + H⁺ → CH₃COOH</text>
<text x="195" y="336" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">(base neutralizes added acid)</text>

<text x="70" y="365" font-family="Arial" font-size="11" fill="#000000">• Added H⁺ is consumed by CH₃COO⁻</text>
<text x="70" y="382" font-family="Arial" font-size="11" fill="#000000">• [CH₃COOH] increases slightly</text>
<text x="70" y="399" font-family="Arial" font-size="11" fill="#000000">• [CH₃COO⁻] decreases slightly</text>
<text x="70" y="416" font-family="Arial" font-size="11" fill="#000000">• pH barely changes (stays ≈ 4.74)</text>

<!-- pH stability box -->
<rect x="70" y="430" width="250" height="30" fill="#DDDDDD" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="195" y="449" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">pH change: minimal (±0.1)</text>

<!-- ===== BASE ADDITION (showBaseAddition) ===== -->
<rect x="660" y="220" width="290" height="250" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="4"/>
<text x="805" y="244" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Adding Strong Base (NaOH)</text>
<line x1="680" y1="250" x2="930" y2="250" stroke="#AAAAAA" stroke-width="1"/>

<line x1="582" y1="280" x2="658" y2="280" stroke="#000000" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#arr4)"/>
<text x="620" y="272" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">NaOH added</text>

<text x="680" y="275" font-family="Arial" font-size="11" fill="#000000">Added: OH⁻ (from NaOH)</text>
<text x="680" y="295" font-family="Arial" font-size="11" fill="#000000">Buffer responds:</text>
<rect x="680" y="303" width="250" height="40" fill="#EEEEEE" stroke="#999999" stroke-width="1" rx="3"/>
<text x="805" y="320" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O</text>
<text x="805" y="336" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">(acid neutralizes added base)</text>

<text x="680" y="365" font-family="Arial" font-size="11" fill="#000000">• Added OH⁻ is consumed by CH₃COOH</text>
<text x="680" y="382" font-family="Arial" font-size="11" fill="#000000">• [CH₃COO⁻] increases slightly</text>
<text x="680" y="399" font-family="Arial" font-size="11" fill="#000000">• [CH₃COOH] decreases slightly</text>
<text x="680" y="416" font-family="Arial" font-size="11" fill="#000000">• pH barely changes (stays ≈ 4.74)</text>

<rect x="680" y="430" width="250" height="30" fill="#DDDDDD" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="805" y="449" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">pH change: minimal (±0.1)</text>

<!-- pH Stability chart (showpHStability) -->
<rect x="50" y="500" width="900" height="180" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="500" y="522" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">pH Stability Comparison</text>

<!-- Axes -->
<line x1="120" y1="540" x2="920" y2="540" stroke="#000000" stroke-width="2"/>
<line x1="120" y1="670" x2="120" y2="540" stroke="#000000" stroke-width="2"/>
<text x="520" y="558" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Amount of acid/base added →</text>
<text x="80" y="605" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" transform="rotate(-90,80,605)">pH</text>

<!-- Buffer line (flat) -->
<line x1="140" y1="600" x2="700" y2="600" stroke="#000000" stroke-width="3"/>
<text x="730" y="600" font-family="Arial" font-size="11" fill="#000000">Buffer (flat)</text>

<!-- Water/unbuffered line (steep) -->
<line x1="140" y1="660" x2="400" y2="545" stroke="#000000" stroke-width="2" stroke-dasharray="6,4"/>
<text x="730" y="555" font-family="Arial" font-size="11" fill="#555555">Unbuffered</text>
<text x="730" y="568" font-family="Arial" font-size="11" fill="#555555">(steep change)</text>

<defs>
  <marker id="arr4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: titrationCurveDiagram
    // type: titration_curve | titration: strong_acid_strong_base
    // options: showCurve, showEquivalencePoint, showIndicatorRange
    static titrationCurveDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Titration Curve - Strong Acid/Strong Base</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">Titration Curve — Strong Acid / Strong Base</text>
<text x="450" y="48" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">HCl (analyte) titrated with NaOH (titrant)</text>

<!-- Axes -->
<line x1="100" y1="520" x2="800" y2="520" stroke="#000000" stroke-width="2.5"/>
<line x1="100" y1="60" x2="100" y2="520" stroke="#000000" stroke-width="2.5"/>
<text x="450" y="548" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Volume of NaOH added (mL)</text>
<text x="30" y="290" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,30,290)">pH</text>

<!-- Y-axis ticks: pH 0-14 -->
<line x1="96" y1="520" x2="104" y2="520" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="524" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">0</text>
<line x1="96" y1="484" x2="104" y2="484" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="488" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">2</text>
<line x1="96" y1="448" x2="104" y2="448" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="452" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">4</text>
<line x1="96" y1="412" x2="104" y2="412" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="416" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">6</text>
<line x1="96" y1="376" x2="104" y2="376" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="380" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">7</text>
<line x1="96" y1="340" x2="104" y2="340" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="344" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">8</text>
<line x1="96" y1="304" x2="104" y2="304" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="308" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">10</text>
<line x1="96" y1="268" x2="104" y2="268" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="272" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">12</text>
<line x1="96" y1="232" x2="104" y2="232" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="236" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">14</text>

<!-- X-axis ticks: 0-50 mL -->
<line x1="100" y1="516" x2="100" y2="524" stroke="#000000" stroke-width="1.5"/>
<text x="100" y="535" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">0</text>
<line x1="240" y1="516" x2="240" y2="524" stroke="#000000" stroke-width="1.5"/>
<text x="240" y="535" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">10</text>
<line x1="380" y1="516" x2="380" y2="524" stroke="#000000" stroke-width="1.5"/>
<text x="380" y="535" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">20</text>
<line x1="450" y1="516" x2="450" y2="524" stroke="#000000" stroke-width="1.5"/>
<text x="450" y="535" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">25</text>
<line x1="520" y1="516" x2="520" y2="524" stroke="#000000" stroke-width="1.5"/>
<text x="520" y="535" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">30</text>
<line x1="660" y1="516" x2="660" y2="524" stroke="#000000" stroke-width="1.5"/>
<text x="660" y="535" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">40</text>
<line x1="800" y1="516" x2="800" y2="524" stroke="#000000" stroke-width="1.5"/>
<text x="800" y="535" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">50</text>

<!-- Titration curve (showCurve): strong acid/strong base sigmoid -->
<!-- Starting at ~pH 1 (y=502), rising slowly, then steep jump at equivalence (25mL), leveling at ~pH 13 -->
<path d="
  M 100,502
  C 150,500 200,498 240,496
  C 280,494 340,492 380,490
  C 410,488 435,484 440,480
  C 444,472 447,460 448,448
  C 449,420 449,400 450,376
  C 451,352 451,330 452,308
  C 453,290 456,272 460,262
  C 466,248 475,238 490,232
  C 520,222 580,218 640,216
  C 700,214 760,212 800,210
" stroke="#000000" stroke-width="3.5" fill="none"/>

<!-- Equivalence point marker (showEquivalencePoint) -->
<circle cx="450" cy="376" r="7" fill="#000000" stroke="#000000" stroke-width="2"/>
<!-- Dashed lines to axes -->
<line x1="100" y1="376" x2="450" y2="376" stroke="#555555" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="450" y1="376" x2="450" y2="520" stroke="#555555" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="460" y="370" font-family="Arial" font-size="11" fill="#000000">Equivalence</text>
<text x="460" y="384" font-family="Arial" font-size="11" fill="#000000">Point (pH 7)</text>
<text x="460" y="398" font-family="Arial" font-size="10" fill="#555555">V = 25 mL</text>

<!-- Indicator range (showIndicatorRange): phenolphthalein pH 8.2-10 -->
<rect x="100" y="304" width="700" height="36" fill="none" stroke="#555555" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="810" y="318" font-family="Arial" font-size="10" fill="#000000">Phenolphthalein</text>
<text x="810" y="332" font-family="Arial" font-size="10" fill="#000000">(pH 8.2–10)</text>

<!-- Methyl orange pH 3.1-4.4 -->
<rect x="100" y="468" width="700" height="22" fill="none" stroke="#999999" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="810" y="484" font-family="Arial" font-size="10" fill="#555555">Methyl orange (pH 3–4.4)</text>

<!-- Steep region label -->
<text x="500" y="295" font-family="Arial" font-size="11" fill="#000000">Steep region</text>
<text x="500" y="310" font-family="Arial" font-size="11" fill="#000000">(rapid pH change)</text>
<line x1="500" y1="315" x2="463" y2="350" stroke="#000000" stroke-width="1.5" marker-end="url(#arr5)"/>

<!-- Region annotations -->
<text x="200" y="480" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Buffer region</text>
<text x="650" y="200" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Excess NaOH</text>

<defs>
  <marker id="arr5" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: indicatorDiagram
    // type: indicators
    // options: showMultipleIndicators, showColorChanges, showpHRanges, showpKaValues
    static indicatorDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Acid-Base Indicators</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Acid-Base Indicators</text>
<text x="500" y="48" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Color change ranges, pKa values</text>

<!-- pH scale header bar -->
<text x="220" y="74" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Indicator</text>
<text x="390" y="74" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">pKa</text>
<text x="500" y="74" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Color change (acid form → base form)</text>

<!-- pH axis 0-14 along top -->
<line x1="440" y1="82" x2="960" y2="82" stroke="#000000" stroke-width="2"/>
<!-- 0 to 14, x: 440 to 960, per unit = (960-440)/14 = 37.1px -->
<text x="440" y="97" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">0</text>
<text x="477" y="97" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">1</text>
<text x="514" y="97" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">2</text>
<text x="551" y="97" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">3</text>
<text x="588" y="97" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">4</text>
<text x="625" y="97" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">5</text>
<text x="662" y="97" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">6</text>
<text x="699" y="97" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">7</text>
<text x="736" y="97" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">8</text>
<text x="773" y="97" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">9</text>
<text x="810" y="97" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">10</text>
<text x="847" y="97" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">11</text>
<text x="884" y="97" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">12</text>
<text x="921" y="97" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">13</text>
<text x="958" y="97" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">14</text>

<!-- pH = x offset formula: x = 440 + pH * 37.14 -->
<!-- Each row: name, pKa, color labels, bar -->

<!-- Row 1: Methyl Violet pH 0-1.6 -->
<text x="220" y="126" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Methyl Violet</text>
<text x="390" y="126" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">~0.8</text>
<text x="445" y="126" font-family="Arial" font-size="10" fill="#000000">Yellow</text>
<!-- bar: pH 0-1.6 → x=440 to x=440+59=499 (transition ~480) -->
<rect x="440" y="110" width="59" height="20" fill="#CCCCCC" stroke="#000000" stroke-width="1.5"/>
<!-- solid gray for "yellow", hatch for "violet" -->
<rect x="499" y="110" width="461" height="20" fill="#888888" stroke="#000000" stroke-width="1.5"/>
<text x="630" y="126" font-family="Arial" font-size="10" fill="#FFFFFF">Violet</text>

<!-- Row 2: Methyl Orange pH 3.1-4.4 -->
<text x="220" y="160" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Methyl Orange</text>
<text x="390" y="160" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">3.5</text>
<text x="445" y="160" font-family="Arial" font-size="10" fill="#000000">Red</text>
<!-- bar: 0-3.1=x440-555 | 3.1-4.4 transition | 4.4+ yellow -->
<rect x="440" y="144" width="115" height="20" fill="#555555" stroke="#000000" stroke-width="1.5"/>
<!-- transition zone -->
<rect x="555" y="144" width="52" height="20" fill="#AAAAAA" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,2"/>
<text x="581" y="160" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">trans.</text>
<rect x="607" y="144" width="353" height="20" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<text x="700" y="160" font-family="Arial" font-size="10" fill="#000000">Yellow</text>

<!-- Row 3: Methyl Red pH 4.4-6.2 -->
<text x="220" y="194" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Methyl Red</text>
<text x="390" y="194" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">5.1</text>
<text x="445" y="194" font-family="Arial" font-size="10" fill="#000000">Red</text>
<rect x="440" y="178" width="163" height="20" fill="#555555" stroke="#000000" stroke-width="1.5"/>
<rect x="603" y="178" width="66" height="20" fill="#AAAAAA" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,2"/>
<rect x="669" y="178" width="291" height="20" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<text x="750" y="194" font-family="Arial" font-size="10" fill="#000000">Yellow</text>

<!-- Row 4: Litmus pH 5.0-8.0 -->
<text x="220" y="228" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Litmus</text>
<text x="390" y="228" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">6.5</text>
<text x="445" y="228" font-family="Arial" font-size="10" fill="#000000">Red</text>
<rect x="440" y="212" width="185" height="20" fill="#555555" stroke="#000000" stroke-width="1.5"/>
<rect x="625" y="212" width="111" height="20" fill="#AAAAAA" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,2"/>
<rect x="736" y="212" width="224" height="20" fill="#888888" stroke="#000000" stroke-width="1.5"/>
<text x="820" y="228" font-family="Arial" font-size="10" fill="#FFFFFF">Blue</text>

<!-- Row 5: Bromothymol Blue pH 6.0-7.6 -->
<text x="220" y="262" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Bromothymol Blue</text>
<text x="390" y="262" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">7.1</text>
<text x="445" y="262" font-family="Arial" font-size="10" fill="#000000">Yellow</text>
<rect x="440" y="246" width="222" height="20" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<rect x="662" y="246" width="59" height="20" fill="#AAAAAA" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,2"/>
<rect x="721" y="246" width="239" height="20" fill="#888888" stroke="#000000" stroke-width="1.5"/>
<text x="820" y="262" font-family="Arial" font-size="10" fill="#FFFFFF">Blue</text>

<!-- Row 6: Phenol Red pH 6.8-8.4 -->
<text x="220" y="296" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Phenol Red</text>
<text x="390" y="296" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">7.9</text>
<text x="445" y="296" font-family="Arial" font-size="10" fill="#000000">Yellow</text>
<rect x="440" y="280" width="252" height="20" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<rect x="692" y="280" width="59" height="20" fill="#AAAAAA" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,2"/>
<rect x="751" y="280" width="209" height="20" fill="#555555" stroke="#000000" stroke-width="1.5"/>
<text x="830" y="296" font-family="Arial" font-size="10" fill="#FFFFFF">Red</text>

<!-- Row 7: Phenolphthalein pH 8.2-10.0 -->
<text x="220" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Phenolphthalein</text>
<text x="390" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">9.1</text>
<text x="445" y="330" font-family="Arial" font-size="10" fill="#000000">Colorless</text>
<rect x="440" y="314" width="304" height="20" fill="#FFFFFF" stroke="#AAAAAA" stroke-width="1.5"/>
<rect x="744" y="314" width="67" height="20" fill="#AAAAAA" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,2"/>
<rect x="811" y="314" width="149" height="20" fill="#888888" stroke="#000000" stroke-width="1.5"/>
<text x="870" y="330" font-family="Arial" font-size="10" fill="#FFFFFF">Pink</text>

<!-- Row 8: Alizarin Yellow pH 10.1-12.0 -->
<text x="220" y="364" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Alizarin Yellow</text>
<text x="390" y="364" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">11.0</text>
<text x="445" y="364" font-family="Arial" font-size="10" fill="#000000">Yellow</text>
<rect x="440" y="348" width="374" height="20" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<rect x="814" y="348" width="74" height="20" fill="#AAAAAA" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,2"/>
<rect x="888" y="348" width="72" height="20" fill="#555555" stroke="#000000" stroke-width="1.5"/>
<text x="924" y="364" font-family="Arial" font-size="10" fill="#FFFFFF">Red</text>

<!-- Neutral line at pH 7 -->
<line x1="699" y1="100" x2="699" y2="375" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,3"/>
<text x="699" y="392" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">pH 7</text>

<!-- Legend -->
<rect x="50" y="420" width="900" height="130" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="500" y="442" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">How Indicators Work</text>
<text x="70" y="464" font-family="Arial" font-size="11" fill="#000000">• Indicators are weak acids/bases: HIn ⇌ H⁺ + In⁻  (different colors for acid/base form)</text>
<text x="70" y="482" font-family="Arial" font-size="11" fill="#000000">• Transition range ≈ pKa ± 1  (color change visible to human eye within this range)</text>
<text x="70" y="500" font-family="Arial" font-size="11" fill="#000000">• Choose indicator whose transition range includes the titration equivalence point</text>
<text x="70" y="518" font-family="Arial" font-size="11" fill="#000000">• Phenolphthalein: colorless (acid) → pink (base)  —  best for strong acid/strong base titrations</text>
<text x="70" y="536" font-family="Arial" font-size="11" fill="#000000">• Methyl orange: red (acid) → yellow (base)  —  useful for weak base titrations</text>

</g>
</svg>`;

    // Generated from registry: kaKbRelationship
    // type: ka_kb | conjugatePair: NH4+/NH3
    // options: showKaExpression, showKbExpression, showRelationship, showCalculation
    static kaKbRelationshipSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Ka and Kb Relationship</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Ka × Kb = Kw</text>
<text x="450" y="48" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Acid-base constant relationship for conjugate pair NH₄⁺ / NH₃</text>

<!-- Central relationship box -->
<rect x="300" y="62" width="300" height="60" fill="#DDDDDD" stroke="#000000" stroke-width="3" rx="6"/>
<text x="450" y="90" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">Ka × Kb = Kw</text>
<text x="450" y="112" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Ka × Kb = 1.0 × 10⁻¹⁴ (at 25°C)</text>

<!-- ===== Ka Expression (showKaExpression) ===== -->
<rect x="30" y="150" width="380" height="220" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="4"/>
<text x="220" y="172" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Ka — Acid Dissociation Constant</text>
<line x1="50" y1="178" x2="390" y2="178" stroke="#AAAAAA" stroke-width="1"/>
<text x="220" y="200" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Reaction:  NH₄⁺  ⇌  H⁺  +  NH₃</text>

<!-- Ka expression fraction -->
<text x="100" y="228" font-family="Arial" font-size="12" fill="#000000">Ka  =</text>
<line x1="160" y1="230" x2="280" y2="230" stroke="#000000" stroke-width="2"/>
<text x="220" y="225" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">[H⁺][NH₃]</text>
<text x="220" y="248" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">[NH₄⁺]</text>

<text x="50" y="278" font-family="Arial" font-size="12" fill="#000000">Ka(NH₄⁺)  =  5.6 × 10⁻¹⁰</text>
<text x="50" y="298" font-family="Arial" font-size="11" fill="#555555">pKa  =  –log(Ka)  =  9.25</text>
<text x="50" y="318" font-family="Arial" font-size="11" fill="#555555">Weak acid: Ka ≪ 1, equilibrium left</text>
<text x="50" y="338" font-family="Arial" font-size="11" fill="#555555">NH₄⁺ is the conjugate acid of NH₃</text>

<!-- ===== Kb Expression (showKbExpression) ===== -->
<rect x="490" y="150" width="380" height="220" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="4"/>
<text x="680" y="172" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Kb — Base Dissociation Constant</text>
<line x1="510" y1="178" x2="850" y2="178" stroke="#AAAAAA" stroke-width="1"/>
<text x="680" y="200" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Reaction:  NH₃  +  H₂O  ⇌  NH₄⁺  +  OH⁻</text>

<!-- Kb expression fraction -->
<text x="560" y="228" font-family="Arial" font-size="12" fill="#000000">Kb  =</text>
<line x1="620" y1="230" x2="760" y2="230" stroke="#000000" stroke-width="2"/>
<text x="690" y="225" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">[NH₄⁺][OH⁻]</text>
<text x="690" y="248" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">[NH₃]</text>

<text x="510" y="278" font-family="Arial" font-size="12" fill="#000000">Kb(NH₃)  =  1.8 × 10⁻⁵</text>
<text x="510" y="298" font-family="Arial" font-size="11" fill="#555555">pKb  =  –log(Kb)  =  4.75</text>
<text x="510" y="318" font-family="Arial" font-size="11" fill="#555555">Weak base: Kb ≪ 1, equilibrium left</text>
<text x="510" y="338" font-family="Arial" font-size="11" fill="#555555">NH₃ is the conjugate base of NH₄⁺</text>

<!-- ===== Relationship derivation (showRelationship) ===== -->
<rect x="30" y="390" width="840" height="90" fill="#EEEEEE" stroke="#000000" stroke-width="2" rx="4"/>
<text x="450" y="412" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Derivation of Ka × Kb = Kw</text>
<text x="50" y="434" font-family="Arial" font-size="12" fill="#000000">Adding both equilibria:  NH₄⁺ ⇌ H⁺ + NH₃   +   NH₃ + H₂O ⇌ NH₄⁺ + OH⁻</text>
<text x="50" y="454" font-family="Arial" font-size="12" fill="#000000">Net:  H₂O ⇌ H⁺ + OH⁻   →   K = Kw   →   Ka(NH₄⁺) × Kb(NH₃) = 1.0 × 10⁻¹⁴</text>
<text x="50" y="470" font-family="Arial" font-size="11" fill="#555555">Therefore:  pKa + pKb = pKw = 14  (at 25°C)</text>

<!-- ===== Calculation (showCalculation) ===== -->
<rect x="30" y="498" width="840" height="80" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="450" y="518" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Verification</text>
<text x="50" y="540" font-family="Arial" font-size="12" fill="#000000">Ka × Kb  =  (5.6 × 10⁻¹⁰)  ×  (1.8 × 10⁻⁵)  =  1.008 × 10⁻¹⁴  ≈  Kw  ✓</text>
<text x="50" y="560" font-family="Arial" font-size="12" fill="#000000">pKa + pKb  =  9.25  +  4.75  =  14.00  =  pKw  ✓</text>

</g>
</svg>`;

    // Generated from registry: saltHydrolysisDiagram
    // type: salt_hydrolysis | salt: NH4Cl
    // options: showIons, showWaterReaction, showpHEffect, showExplanation
    static saltHydrolysisDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Salt Hydrolysis</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Salt Hydrolysis</text>
<text x="450" y="48" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">pH of salt solutions — example: NH₄Cl</text>

<!-- ===== IONS (showIons) ===== -->
<rect x="30" y="65" width="840" height="70" fill="#F5F5F5" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="450" y="85" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Step 1: Dissolution of Salt</text>
<text x="450" y="108" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">NH₄Cl(s)  →  NH₄⁺(aq)  +  Cl⁻(aq)</text>
<text x="450" y="126" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Complete ionic dissociation (NH₄Cl is a soluble salt)</text>

<!-- Ion assessment -->
<rect x="30" y="150" width="380" height="130" fill="#FAFAFA" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="220" y="170" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">NH₄⁺ ion (from weak base NH₃)</text>
<line x1="50" y1="176" x2="390" y2="176" stroke="#AAAAAA" stroke-width="1"/>
<text x="50" y="195" font-family="Arial" font-size="11" fill="#000000">• Conjugate acid of weak base (NH₃)</text>
<text x="50" y="212" font-family="Arial" font-size="11" fill="#000000">• Hydrolyzes water → acidic solution</text>
<text x="50" y="229" font-family="Arial" font-size="11" fill="#000000">• Ka(NH₄⁺) = 5.6 × 10⁻¹⁰</text>
<text x="50" y="246" font-family="Arial" font-size="11" fill="#000000">• Acts as a Brønsted-Lowry ACID</text>
<text x="50" y="265" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">→ Makes solution ACIDIC</text>

<rect x="490" y="150" width="380" height="130" fill="#FAFAFA" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="680" y="170" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Cl⁻ ion (from strong acid HCl)</text>
<line x1="510" y1="176" x2="850" y2="176" stroke="#AAAAAA" stroke-width="1"/>
<text x="510" y="195" font-family="Arial" font-size="11" fill="#000000">• Conjugate base of strong acid (HCl)</text>
<text x="510" y="212" font-family="Arial" font-size="11" fill="#000000">• Does NOT hydrolyze (negligible Kb)</text>
<text x="510" y="229" font-family="Arial" font-size="11" fill="#000000">• Very weak base — Ka(HCl) is huge</text>
<text x="510" y="246" font-family="Arial" font-size="11" fill="#000000">• Spectator ion in hydrolysis</text>
<text x="510" y="265" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">→ No effect on pH</text>

<!-- ===== Water reaction (showWaterReaction) ===== -->
<rect x="30" y="296" width="840" height="80" fill="#EEEEEE" stroke="#000000" stroke-width="2" rx="4"/>
<text x="450" y="316" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Step 2: Hydrolysis Reaction (showWaterReaction)</text>
<text x="450" y="340" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">NH₄⁺  +  H₂O  ⇌  NH₃  +  H₃O⁺</text>
<text x="450" y="365" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Ammonium ion donates H⁺ to water → produces H₃O⁺ (acidic)</text>

<!-- ===== pH Effect (showpHEffect) ===== -->
<rect x="30" y="390" width="500" height="100" fill="#FAFAFA" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="280" y="410" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">pH Calculation for 0.1 M NH₄Cl</text>
<text x="50" y="432" font-family="Arial" font-size="11" fill="#000000">Ka(NH₄⁺) = Kw / Kb(NH₃) = (10⁻¹⁴) / (1.8×10⁻⁵) = 5.6×10⁻¹⁰</text>
<text x="50" y="452" font-family="Arial" font-size="11" fill="#000000">[H⁺] = √(Ka × C) = √(5.6×10⁻¹⁰ × 0.1) = √(5.6×10⁻¹¹) = 7.5×10⁻⁶</text>
<text x="50" y="472" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">pH = –log(7.5×10⁻⁶) ≈ 5.1  (acidic, as expected)</text>

<!-- Salt type summary table (showExplanation) -->
<rect x="550" y="390" width="320" height="180" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="710" y="412" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Salt Type Summary</text>
<line x1="565" y1="418" x2="855" y2="418" stroke="#AAAAAA" stroke-width="1"/>
<text x="565" y="436" font-family="Arial" font-size="10" fill="#000000" font-weight="bold">Salt from</text>
<text x="720" y="436" font-family="Arial" font-size="10" fill="#000000" font-weight="bold">Hydrolysis</text>
<text x="830" y="436" font-family="Arial" font-size="10" fill="#000000" font-weight="bold">pH</text>
<line x1="565" y1="440" x2="855" y2="440" stroke="#CCCCCC" stroke-width="1"/>
<text x="565" y="456" font-family="Arial" font-size="10" fill="#000000">Strong acid + Strong base</text>
<text x="720" y="456" font-family="Arial" font-size="10" fill="#000000">None</text>
<text x="830" y="456" font-family="Arial" font-size="10" fill="#000000">≈ 7</text>
<text x="565" y="474" font-family="Arial" font-size="10" fill="#000000">Strong acid + Weak base</text>
<text x="720" y="474" font-family="Arial" font-size="10" fill="#000000">Cation hydrolyzes</text>
<text x="830" y="474" font-family="Arial" font-size="10" fill="#000000">&lt; 7</text>
<text x="565" y="492" font-family="Arial" font-size="10" fill="#000000">Weak acid + Strong base</text>
<text x="720" y="492" font-family="Arial" font-size="10" fill="#000000">Anion hydrolyzes</text>
<text x="830" y="492" font-family="Arial" font-size="10" fill="#000000">&gt; 7</text>
<text x="565" y="510" font-family="Arial" font-size="10" fill="#000000">Weak acid + Weak base</text>
<text x="720" y="510" font-family="Arial" font-size="10" fill="#000000">Both hydrolyze</text>
<text x="830" y="510" font-family="Arial" font-size="10" fill="#000000">depends</text>
<rect x="558" y="520" width="295" height="20" fill="#DDDDDD" stroke="#000000" stroke-width="1" rx="2"/>
<text x="705" y="534" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle" font-weight="bold">NH₄Cl: strong acid + weak base → pH &lt; 7</text>

</g>
</svg>`;

    // ============================================================
    // ===== 9. REDOX & ELECTROCHEMISTRY ==========================
    // ============================================================

    // Generated from registry: oxidationStatesDiagram
    // type: oxidation_states | compound: K2Cr2O7
    // options: showCompound, showRules, showCalculation, showVerification
    static oxidationStatesDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="700" viewBox="0 0 900 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Oxidation States Assignment</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Oxidation States</text>
<text x="450" y="48" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Assigning oxidation numbers — example: K₂Cr₂O₇ (potassium dichromate)</text>

<!-- Rules box (showRules) -->
<rect x="30" y="65" width="840" height="210" fill="#F5F5F5" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="450" y="86" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Rules for Assigning Oxidation Numbers</text>
<line x1="50" y1="92" x2="850" y2="92" stroke="#AAAAAA" stroke-width="1"/>
<!-- Two-column rules -->
<text x="50" y="112" font-family="Arial" font-size="11" fill="#000000">1. Free element: oxidation number = 0  (e.g., Na, O₂, H₂)</text>
<text x="50" y="130" font-family="Arial" font-size="11" fill="#000000">2. Monatomic ion: oxidation number = ion charge  (e.g., Na⁺ = +1, Cl⁻ = –1)</text>
<text x="50" y="148" font-family="Arial" font-size="11" fill="#000000">3. Oxygen: usually –2 (except peroxide –1, F₂O +2)</text>
<text x="50" y="166" font-family="Arial" font-size="11" fill="#000000">4. Hydrogen: +1 with nonmetals; –1 in metal hydrides</text>
<text x="50" y="184" font-family="Arial" font-size="11" fill="#000000">5. Halogens: usually –1 (except when bonded to O or more EN halogen)</text>
<text x="50" y="202" font-family="Arial" font-size="11" fill="#000000">6. Alkali metals (Group 1): always +1</text>
<text x="50" y="220" font-family="Arial" font-size="11" fill="#000000">7. Alkaline earth metals (Group 2): always +2</text>
<text x="50" y="244" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">8. Sum of all oxidation numbers = overall charge of species (0 for neutral, = charge for ion)</text>

<!-- Compound display (showCompound) -->
<rect x="30" y="292" width="840" height="100" fill="#EEEEEE" stroke="#000000" stroke-width="2" rx="4"/>
<text x="450" y="314" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Compound: K₂Cr₂O₇  (neutral molecule, overall charge = 0)</text>

<!-- Atom labels with oxidation numbers -->
<text x="450" y="348" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">K₂   Cr₂   O₇</text>
<text x="380" y="378" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">+1 each</text>
<text x="450" y="378" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">+6 each</text>
<text x="520" y="378" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">–2 each</text>

<!-- Calculation (showCalculation) -->
<rect x="30" y="408" width="840" height="130" fill="#FAFAFA" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="450" y="430" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Step-by-Step Calculation</text>
<line x1="50" y1="436" x2="850" y2="436" stroke="#AAAAAA" stroke-width="1"/>
<text x="50" y="456" font-family="Arial" font-size="12" fill="#000000">Let oxidation state of Cr = x</text>
<text x="50" y="476" font-family="Arial" font-size="12" fill="#000000">K contribution:  2 × (+1) = +2</text>
<text x="50" y="494" font-family="Arial" font-size="12" fill="#000000">O contribution:  7 × (–2) = –14</text>
<text x="50" y="512" font-family="Arial" font-size="12" fill="#000000">Cr contribution:  2x</text>
<text x="50" y="530" font-family="Arial" font-size="12" fill="#000000">Equation:  +2  +  2x  +  (–14)  =  0</text>
<text x="420" y="456" font-family="Arial" font-size="12" fill="#000000">⟹  2x = 14 – 2 = 12</text>
<text x="420" y="480" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">⟹  x = +6  (Chromium is +6)</text>

<!-- Verification (showVerification) -->
<rect x="30" y="555" width="840" height="60" fill="#DDDDDD" stroke="#000000" stroke-width="2" rx="4"/>
<text x="450" y="576" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Verification</text>
<text x="450" y="600" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">2(+1)  +  2(+6)  +  7(–2)  =  +2  +  +12  +  (–14)  =  0  ✓  (neutral molecule)</text>

<!-- Oxidation state number line -->
<text x="50" y="640" font-family="Arial" font-size="11" fill="#555555">Common oxidation states of Cr: –2, 0, +2, +3, +6 — here Cr is in the highest common state (+6)</text>

</g>
</svg>`;

    // Generated from registry: halfReactionDiagram
    // type: half_reactions | reaction: MnO4- + Fe2+ → Mn2+ + Fe3+ | medium: acidic
    // options: showOxidationHalf, showReductionHalf, showBalancing, showOverall
    static halfReactionDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="800" viewBox="0 0 1000 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>Half-Reaction Method</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Half-Reaction Method</text>
<text x="500" y="48" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Balancing: MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺  (acidic medium)</text>

<!-- Unbalanced reaction -->
<rect x="30" y="62" width="940" height="46" fill="#EEEEEE" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="500" y="82" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Unbalanced:  MnO₄⁻  +  Fe²⁺  →  Mn²⁺  +  Fe³⁺</text>
<text x="500" y="100" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Identify: Mn changes 7→2 (reduction); Fe changes 2→3 (oxidation)</text>

<!-- ===== REDUCTION HALF (showReductionHalf) ===== -->
<rect x="30" y="122" width="460" height="280" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="4"/>
<text x="260" y="144" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Reduction Half-Reaction</text>
<text x="260" y="162" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">(Mn: +7 → +2, gains 5e⁻)</text>
<line x1="50" y1="168" x2="470" y2="168" stroke="#AAAAAA" stroke-width="1"/>

<text x="50" y="188" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Step 1:</text>
<text x="120" y="188" font-family="Arial" font-size="12" fill="#000000">Balance Mn:   MnO₄⁻  →  Mn²⁺</text>

<text x="50" y="210" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Step 2:</text>
<text x="120" y="210" font-family="Arial" font-size="12" fill="#000000">Balance O with H₂O:</text>
<text x="120" y="228" font-family="Arial" font-size="12" fill="#000000">MnO₄⁻  →  Mn²⁺  +  4H₂O</text>

<text x="50" y="250" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Step 3:</text>
<text x="120" y="250" font-family="Arial" font-size="12" fill="#000000">Balance H with H⁺ (acidic):</text>
<text x="120" y="268" font-family="Arial" font-size="12" fill="#000000">8H⁺  +  MnO₄⁻  →  Mn²⁺  +  4H₂O</text>

<text x="50" y="290" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Step 4:</text>
<text x="120" y="290" font-family="Arial" font-size="12" fill="#000000">Balance charge with e⁻:</text>
<text x="120" y="308" font-family="Arial" font-size="12" fill="#000000">Left: +8 – 1 = +7;  Right: +2</text>
<text x="120" y="326" font-family="Arial" font-size="12" fill="#000000">Add 5e⁻ to left:</text>
<rect x="50" y="330" width="400" height="30" fill="#DDDDDD" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="250" y="350" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">5e⁻ + 8H⁺ + MnO₄⁻ → Mn²⁺ + 4H₂O</text>
<text x="260" y="393" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Mn reduced (+7→+2): CATHODE process</text>

<!-- ===== OXIDATION HALF (showOxidationHalf) ===== -->
<rect x="510" y="122" width="460" height="280" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="4"/>
<text x="740" y="144" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Oxidation Half-Reaction</text>
<text x="740" y="162" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">(Fe: +2 → +3, loses 1e⁻)</text>
<line x1="530" y1="168" x2="950" y2="168" stroke="#AAAAAA" stroke-width="1"/>

<text x="530" y="188" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Step 1:</text>
<text x="600" y="188" font-family="Arial" font-size="12" fill="#000000">Balance Fe:   Fe²⁺  →  Fe³⁺</text>

<text x="530" y="210" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Step 2:</text>
<text x="600" y="210" font-family="Arial" font-size="12" fill="#000000">No O or H to balance here</text>

<text x="530" y="232" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Step 3:</text>
<text x="600" y="232" font-family="Arial" font-size="12" fill="#000000">Balance charge with e⁻:</text>
<text x="600" y="250" font-family="Arial" font-size="12" fill="#000000">Left: +2;  Right: +3</text>
<text x="600" y="268" font-family="Arial" font-size="12" fill="#000000">Add 1e⁻ to right:</text>

<rect x="530" y="278" width="400" height="30" fill="#DDDDDD" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="730" y="298" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Fe²⁺  →  Fe³⁺  +  e⁻</text>
<text x="740" y="393" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Fe oxidized (+2→+3): ANODE process</text>

<!-- ===== BALANCING (showBalancing) ===== -->
<rect x="30" y="420" width="940" height="120" fill="#EEEEEE" stroke="#000000" stroke-width="2" rx="4"/>
<text x="500" y="442" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Step 5: Equalize Electrons Transferred</text>
<line x1="50" y1="448" x2="950" y2="448" stroke="#AAAAAA" stroke-width="1"/>
<text x="50" y="468" font-family="Arial" font-size="12" fill="#000000">Reduction half uses 5e⁻; oxidation half produces 1e⁻</text>
<text x="50" y="488" font-family="Arial" font-size="12" fill="#000000">Multiply oxidation half × 5:</text>
<text x="300" y="488" font-family="Arial" font-size="12" fill="#000000">5Fe²⁺  →  5Fe³⁺  +  5e⁻</text>
<text x="50" y="508" font-family="Arial" font-size="12" fill="#000000">Reduction half × 1:</text>
<text x="300" y="508" font-family="Arial" font-size="12" fill="#000000">5e⁻ + 8H⁺ + MnO₄⁻  →  Mn²⁺ + 4H₂O</text>
<text x="50" y="528" font-family="Arial" font-size="12" fill="#000000">Electrons cancel ✓ (5e⁻ on each side)</text>

<!-- ===== OVERALL (showOverall) ===== -->
<rect x="30" y="556" width="940" height="110" fill="#DDDDDD" stroke="#000000" stroke-width="2.5" rx="4"/>
<text x="500" y="578" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Step 6: Overall Balanced Equation</text>
<line x1="50" y1="584" x2="950" y2="584" stroke="#AAAAAA" stroke-width="1"/>
<text x="500" y="610" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">MnO₄⁻  +  5Fe²⁺  +  8H⁺  →  Mn²⁺  +  5Fe³⁺  +  4H₂O</text>

<!-- Charge check -->
<text x="50" y="640" font-family="Arial" font-size="11" fill="#000000">Charge check: Left: –1 + 5(2) + 8(1) = –1+10+8 = +17;  Right: +2 + 5(3) + 0 = 2+15 = +17  ✓</text>
<text x="50" y="658" font-family="Arial" font-size="11" fill="#000000">Atom check: Mn: 1=1 ✓   Fe: 5=5 ✓   O: 4=4 ✓   H: 8=8 ✓</text>

</g>
</svg>`;

    // Generated from registry: electrochemicalSeriesDiagram
    // type: electrochemical_series
    // options: showElectrodes, showPotentials, showReducingAgents, showOxidizingAgents
    static electrochemicalSeriesDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="800" viewBox="0 0 900 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>Electrochemical Series</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Electrochemical Series</text>
<text x="450" y="48" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Standard electrode (reduction) potentials E° (V) at 25°C, 1 atm, 1 M</text>

<!-- Column headers -->
<rect x="30" y="62" width="840" height="28" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="60" y="81" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Half-Reaction (Reduction)</text>
<text x="590" y="81" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">E° (V)</text>
<text x="700" y="81" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Oxidizing agent</text>
<text x="830" y="81" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Reducing agent</text>

<!-- Data rows — alternating backgrounds -->
<!-- Row: F2 -->
<rect x="30" y="90" width="840" height="22" fill="#F0F0F0" stroke="none"/>
<text x="45" y="106" font-family="Arial" font-size="11" fill="#000000">F₂ + 2e⁻  →  2F⁻</text>
<text x="590" y="106" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">+2.87</text>
<text x="700" y="106" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">F₂ (strongest)</text>
<text x="830" y="106" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">F⁻ (weakest)</text>

<!-- MnO4- -->
<rect x="30" y="112" width="840" height="22" fill="#FAFAFA" stroke="none"/>
<text x="45" y="128" font-family="Arial" font-size="11" fill="#000000">MnO₄⁻ + 8H⁺ + 5e⁻  →  Mn²⁺ + 4H₂O</text>
<text x="590" y="128" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">+1.51</text>

<!-- Cl2 -->
<rect x="30" y="134" width="840" height="22" fill="#F0F0F0" stroke="none"/>
<text x="45" y="150" font-family="Arial" font-size="11" fill="#000000">Cl₂ + 2e⁻  →  2Cl⁻</text>
<text x="590" y="150" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">+1.36</text>

<!-- Cr2O7 2- -->
<rect x="30" y="156" width="840" height="22" fill="#FAFAFA" stroke="none"/>
<text x="45" y="172" font-family="Arial" font-size="11" fill="#000000">Cr₂O₇²⁻ + 14H⁺ + 6e⁻  →  2Cr³⁺ + 7H₂O</text>
<text x="590" y="172" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">+1.33</text>

<!-- O2 -->
<rect x="30" y="178" width="840" height="22" fill="#F0F0F0" stroke="none"/>
<text x="45" y="194" font-family="Arial" font-size="11" fill="#000000">O₂ + 4H⁺ + 4e⁻  →  2H₂O</text>
<text x="590" y="194" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">+1.23</text>

<!-- Br2 -->
<rect x="30" y="200" width="840" height="22" fill="#FAFAFA" stroke="none"/>
<text x="45" y="216" font-family="Arial" font-size="11" fill="#000000">Br₂ + 2e⁻  →  2Br⁻</text>
<text x="590" y="216" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">+1.07</text>

<!-- Ag+ -->
<rect x="30" y="222" width="840" height="22" fill="#F0F0F0" stroke="none"/>
<text x="45" y="238" font-family="Arial" font-size="11" fill="#000000">Ag⁺ + e⁻  →  Ag</text>
<text x="590" y="238" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">+0.80</text>

<!-- Fe3+ -->
<rect x="30" y="244" width="840" height="22" fill="#FAFAFA" stroke="none"/>
<text x="45" y="260" font-family="Arial" font-size="11" fill="#000000">Fe³⁺ + e⁻  →  Fe²⁺</text>
<text x="590" y="260" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">+0.77</text>

<!-- Cu2+ -->
<rect x="30" y="266" width="840" height="22" fill="#F0F0F0" stroke="none"/>
<text x="45" y="282" font-family="Arial" font-size="11" fill="#000000">Cu²⁺ + 2e⁻  →  Cu</text>
<text x="590" y="282" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">+0.34</text>

<!-- SHE — H+ reference line -->
<rect x="30" y="288" width="840" height="24" fill="#CCCCCC" stroke="#000000" stroke-width="1.5"/>
<text x="45" y="305" font-family="Arial" font-size="11" fill="#000000" font-weight="bold">2H⁺ + 2e⁻  →  H₂   ◄ STANDARD HYDROGEN ELECTRODE (SHE)</text>
<text x="590" y="305" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">0.00</text>

<!-- Pb2+ -->
<rect x="30" y="312" width="840" height="22" fill="#F0F0F0" stroke="none"/>
<text x="45" y="328" font-family="Arial" font-size="11" fill="#000000">Pb²⁺ + 2e⁻  →  Pb</text>
<text x="590" y="328" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">–0.13</text>

<!-- Ni2+ -->
<rect x="30" y="334" width="840" height="22" fill="#FAFAFA" stroke="none"/>
<text x="45" y="350" font-family="Arial" font-size="11" fill="#000000">Ni²⁺ + 2e⁻  →  Ni</text>
<text x="590" y="350" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">–0.25</text>

<!-- Fe2+ -->
<rect x="30" y="356" width="840" height="22" fill="#F0F0F0" stroke="none"/>
<text x="45" y="372" font-family="Arial" font-size="11" fill="#000000">Fe²⁺ + 2e⁻  →  Fe</text>
<text x="590" y="372" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">–0.44</text>

<!-- Zn2+ -->
<rect x="30" y="378" width="840" height="22" fill="#FAFAFA" stroke="none"/>
<text x="45" y="394" font-family="Arial" font-size="11" fill="#000000">Zn²⁺ + 2e⁻  →  Zn</text>
<text x="590" y="394" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">–0.76</text>

<!-- Al3+ -->
<rect x="30" y="400" width="840" height="22" fill="#F0F0F0" stroke="none"/>
<text x="45" y="416" font-family="Arial" font-size="11" fill="#000000">Al³⁺ + 3e⁻  →  Al</text>
<text x="590" y="416" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">–1.66</text>

<!-- Mg2+ -->
<rect x="30" y="422" width="840" height="22" fill="#FAFAFA" stroke="none"/>
<text x="45" y="438" font-family="Arial" font-size="11" fill="#000000">Mg²⁺ + 2e⁻  →  Mg</text>
<text x="590" y="438" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">–2.37</text>

<!-- Na+ -->
<rect x="30" y="444" width="840" height="22" fill="#F0F0F0" stroke="none"/>
<text x="45" y="460" font-family="Arial" font-size="11" fill="#000000">Na⁺ + e⁻  →  Na</text>
<text x="590" y="460" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">–2.71</text>

<!-- Li+ -->
<rect x="30" y="466" width="840" height="22" fill="#FAFAFA" stroke="none"/>
<text x="45" y="482" font-family="Arial" font-size="11" fill="#000000">Li⁺ + e⁻  →  Li</text>
<text x="590" y="482" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">–3.04</text>
<text x="700" y="482" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Li⁺ (weakest)</text>
<text x="830" y="482" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Li (strongest)</text>

<!-- border around table -->
<rect x="30" y="90" width="840" height="398" fill="none" stroke="#000000" stroke-width="1.5"/>

<!-- Arrows (showReducingAgents / showOxidizingAgents) -->
<line x1="875" y1="96" x2="875" y2="480" stroke="#000000" stroke-width="2" marker-end="url(#arr6)"/>
<text x="895" y="290" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" transform="rotate(90,895,290)">Reducing ability ↑</text>
<line x1="15" y1="480" x2="15" y2="96" stroke="#000000" stroke-width="2" marker-end="url(#arr6)"/>
<text x="-5" y="290" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" transform="rotate(-90,-5,290)">Oxidizing ability ↑</text>

<!-- Info box -->
<rect x="30" y="508" width="840" height="120" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="450" y="528" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Using the Electrochemical Series</text>
<text x="50" y="550" font-family="Arial" font-size="11" fill="#000000">• A species higher in the series (more positive E°) will oxidize a species lower in the series</text>
<text x="50" y="568" font-family="Arial" font-size="11" fill="#000000">• E°cell = E°cathode – E°anode;  if E°cell &gt; 0, the reaction is spontaneous</text>
<text x="50" y="586" font-family="Arial" font-size="11" fill="#000000">• Standard conditions: 25°C, all concentrations 1 M, all gases at 1 atm</text>
<text x="50" y="604" font-family="Arial" font-size="11" fill="#000000">• The SHE (standard hydrogen electrode) is assigned E° = 0.00 V by convention</text>
<text x="50" y="622" font-family="Arial" font-size="11" fill="#000000">• ΔG° = –nFE°cell;  ln K = nFE°/RT  (links thermodynamics and electrochemistry)</text>

<defs>
  <marker id="arr6" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: galvanicCellDiagram
    // type: galvanic_cell | anode: Zn | cathode: Cu
    // options: showAnode, showCathode, showSaltBridge, showElectronFlow, showIonFlow, showVoltmeter
    static galvanicCellDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Galvanic Cell - Zn/Cu</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Galvanic (Voltaic) Cell — Zn/Cu</text>
<text x="500" y="48" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Spontaneous electrochemical cell producing electricity  |  E°cell = +1.10 V</text>

<!-- ===== ANODE (Zn) — LEFT (showAnode) ===== -->
<!-- Beaker outline -->
<rect x="60" y="200" width="280" height="260" fill="#FFFFFF" stroke="#000000" stroke-width="3" rx="4"/>
<!-- Solution label -->
<text x="200" y="420" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">ZnSO₄(aq)</text>
<!-- Zn electrode -->
<rect x="180" y="130" width="40" height="160" fill="#AAAAAA" stroke="#000000" stroke-width="2.5"/>
<text x="200" y="120" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Zn</text>
<text x="200" y="108" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">ANODE (–)</text>
<!-- Zn ions dissolving into solution -->
<circle cx="130" cy="300" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="130" y="305" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Zn²⁺</text>
<circle cx="160" cy="340" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="160" y="345" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Zn²⁺</text>
<circle cx="250" cy="310" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="250" y="315" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Zn²⁺</text>
<!-- SO4 ions -->
<circle cx="100" cy="360" r="10" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="100" y="365" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">SO₄²⁻</text>
<circle cx="270" cy="370" r="10" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="270" y="375" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">SO₄²⁻</text>

<!-- Anode reaction box -->
<rect x="40" y="485" width="300" height="55" fill="#EEEEEE" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="190" y="504" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Oxidation (Anode):</text>
<text x="190" y="525" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Zn  →  Zn²⁺  +  2e⁻</text>

<!-- ===== CATHODE (Cu) — RIGHT (showCathode) ===== -->
<rect x="660" y="200" width="280" height="260" fill="#FFFFFF" stroke="#000000" stroke-width="3" rx="4"/>
<text x="800" y="420" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">CuSO₄(aq)</text>
<!-- Cu electrode -->
<rect x="780" y="130" width="40" height="160" fill="#888888" stroke="#000000" stroke-width="2.5"/>
<text x="800" y="120" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Cu</text>
<text x="800" y="108" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">CATHODE (+)</text>
<!-- Cu2+ ions in solution being deposited -->
<circle cx="720" cy="290" r="10" fill="#CCCCCC" stroke="#000000" stroke-width="1.5"/>
<text x="720" y="295" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Cu²⁺</text>
<circle cx="750" cy="350" r="10" fill="#CCCCCC" stroke="#000000" stroke-width="1.5"/>
<text x="750" y="355" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Cu²⁺</text>
<circle cx="850" cy="310" r="10" fill="#CCCCCC" stroke="#000000" stroke-width="1.5"/>
<text x="850" y="315" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Cu²⁺</text>
<circle cx="880" cy="370" r="10" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="880" y="375" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">SO₄²⁻</text>
<circle cx="700" cy="370" r="10" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="700" y="375" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">SO₄²⁻</text>

<!-- Cathode reaction box -->
<rect x="660" y="485" width="300" height="55" fill="#EEEEEE" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="810" y="504" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Reduction (Cathode):</text>
<text x="810" y="525" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Cu²⁺  +  2e⁻  →  Cu</text>

<!-- ===== SALT BRIDGE (showSaltBridge) ===== -->
<!-- Salt bridge arch -->
<path d="M 340,220 Q 500,120 660,220" fill="none" stroke="#000000" stroke-width="4"/>
<!-- Salt bridge interior fill -->
<path d="M 350,224 Q 500,130 650,224 L 650,240 Q 500,145 350,240 Z" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="500" y="170" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Salt Bridge</text>
<text x="500" y="186" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(KNO₃ solution)</text>

<!-- Ion flow in salt bridge (showIonFlow) -->
<!-- K+ flowing right -->
<line x1="440" y1="188" x2="500" y2="188" stroke="#000000" stroke-width="1.5" marker-end="url(#arr7)"/>
<text x="470" y="202" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">K⁺ →</text>
<!-- NO3- flowing left -->
<line x1="560" y1="195" x2="500" y2="195" stroke="#000000" stroke-width="1.5" marker-end="url(#arr7)"/>
<text x="530" y="208" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">← NO₃⁻</text>

<!-- ===== VOLTMETER (showVoltmeter) ===== -->
<circle cx="500" cy="75" r="28" fill="#FFFFFF" stroke="#000000" stroke-width="2.5"/>
<text x="500" y="70" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">V</text>
<text x="500" y="86" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">1.10 V</text>

<!-- ===== ELECTRON FLOW (showElectronFlow) ===== -->
<!-- Wire: anode electrode top → left → voltmeter bottom-left → voltmeter bottom-right → cathode -->
<line x1="200" y1="130" x2="200" y2="80" stroke="#000000" stroke-width="2.5"/>
<line x1="200" y1="80" x2="472" y2="80" stroke="#000000" stroke-width="2.5" marker-end="url(#arr7)"/>
<line x1="528" y1="80" x2="800" y2="80" stroke="#000000" stroke-width="2.5" marker-end="url(#arr7)"/>
<line x1="800" y1="80" x2="800" y2="130" stroke="#000000" stroke-width="2.5"/>
<!-- electron labels -->
<text x="330" y="70" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">e⁻ →</text>
<text x="670" y="70" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">e⁻ →</text>

<!-- Cell notation -->
<rect x="340" y="555" width="320" height="50" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="3"/>
<text x="500" y="575" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Cell Notation:</text>
<text x="500" y="596" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)</text>

<!-- E°cell note -->
<text x="500" y="646" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">E°cell = E°cathode – E°anode = +0.34 – (–0.76) = +1.10 V  (spontaneous, ΔG &lt; 0)</text>

<defs>
  <marker id="arr7" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: electrolyticCellDiagram
    // type: electrolytic_cell | electrolyte: molten NaCl
    // options: showAnode, showCathode, showBattery, showElectronFlow, showProducts
    static electrolyticCellDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Electrolytic Cell — Molten NaCl</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Electrolytic Cell</text>
<text x="500" y="48" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Non-spontaneous cell — electrolysis of molten NaCl (external power required)</text>

<!-- ===== BATTERY (showBattery) ===== -->
<rect x="430" y="65" width="140" height="60" fill="#EEEEEE" stroke="#000000" stroke-width="3" rx="6"/>
<text x="500" y="90" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">BATTERY</text>
<text x="500" y="110" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+ | –</text>
<!-- Terminal lines -->
<line x1="430" y1="95" x2="220" y2="95" stroke="#000000" stroke-width="3"/>
<line x1="220" y1="95" x2="220" y2="155" stroke="#000000" stroke-width="3"/>
<line x1="570" y1="95" x2="780" y2="95" stroke="#000000" stroke-width="3"/>
<line x1="780" y1="95" x2="780" y2="155" stroke="#000000" stroke-width="3"/>
<!-- Battery polarity -->
<text x="380" y="90" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">–</text>
<text x="615" y="90" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">+</text>

<!-- ===== CELL BODY ===== -->
<rect x="130" y="200" width="740" height="280" fill="#FFFFFF" stroke="#000000" stroke-width="3" rx="6"/>
<!-- Electrolyte label -->
<text x="500" y="440" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Molten NaCl  (Na⁺ + Cl⁻ ions, freely mobile)</text>
<!-- Na+ and Cl- ions scattered -->
<circle cx="260" cy="310" r="11" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="260" y="315" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Na⁺</text>
<circle cx="320" cy="360" r="11" fill="#AAAAAA" stroke="#000000" stroke-width="1.5"/>
<text x="320" y="365" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Cl⁻</text>
<circle cx="400" cy="300" r="11" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="400" y="305" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Na⁺</text>
<circle cx="500" cy="350" r="11" fill="#AAAAAA" stroke="#000000" stroke-width="1.5"/>
<text x="500" y="355" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Cl⁻</text>
<circle cx="580" cy="290" r="11" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="580" y="295" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Na⁺</text>
<circle cx="660" cy="360" r="11" fill="#AAAAAA" stroke="#000000" stroke-width="1.5"/>
<text x="660" y="365" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Cl⁻</text>
<circle cx="740" cy="310" r="11" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="740" y="315" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Na⁺</text>

<!-- ===== CATHODE (-) — LEFT (showCathode) ===== -->
<rect x="200" y="155" width="40" height="200" fill="#888888" stroke="#000000" stroke-width="2.5"/>
<text x="220" y="148" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">CATHODE</text>
<text x="220" y="164" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(–)</text>
<!-- Na atoms forming at cathode (showProducts) -->
<circle cx="170" cy="245" r="11" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="170" y="250" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Na</text>
<circle cx="148" cy="280" r="11" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="148" y="285" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Na</text>
<text x="150" y="320" font-family="Arial" font-size="10" fill="#000000">Na(l)</text>
<text x="150" y="335" font-family="Arial" font-size="10" fill="#000000">deposited</text>
<!-- Na+ ion moving toward cathode -->
<line x1="280" y1="310" x2="243" y2="310" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arr8)"/>
<text x="262" y="302" font-family="Arial" font-size="10" fill="#555555">Na⁺→</text>

<!-- ===== ANODE (+) — RIGHT (showAnode) ===== -->
<rect x="760" y="155" width="40" height="200" fill="#888888" stroke="#000000" stroke-width="2.5"/>
<text x="780" y="148" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">ANODE</text>
<text x="780" y="164" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(+)</text>
<!-- Cl2 gas bubbles (showProducts) -->
<circle cx="830" cy="240" r="12" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="830" y="245" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Cl₂</text>
<circle cx="850" cy="270" r="9" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="850" y="275" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">Cl₂</text>
<text x="850" y="310" font-family="Arial" font-size="10" fill="#000000">Cl₂(g)</text>
<text x="850" y="325" font-family="Arial" font-size="10" fill="#000000">evolved</text>
<!-- Cl- ion moving toward anode -->
<line x1="720" y1="310" x2="757" y2="310" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arr8)"/>
<text x="738" y="302" font-family="Arial" font-size="10" fill="#555555">← Cl⁻</text>

<!-- Electron flow (showElectronFlow) -->
<text x="340" y="88" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">← e⁻</text>
<text x="660" y="88" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">e⁻ →</text>

<!-- Reaction boxes -->
<rect x="30" y="510" width="400" height="55" fill="#EEEEEE" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="230" y="530" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Cathode (Reduction):</text>
<text x="230" y="552" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Na⁺ + e⁻  →  Na(l)</text>

<rect x="570" y="510" width="400" height="55" fill="#EEEEEE" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="770" y="530" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Anode (Oxidation):</text>
<text x="770" y="552" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2Cl⁻  →  Cl₂(g) + 2e⁻</text>

<!-- Overall -->
<rect x="200" y="590" width="600" height="40" fill="#DDDDDD" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="500" y="610" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Overall:  2NaCl(l)  →  2Na(l)  +  Cl₂(g)</text>
<text x="500" y="628" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(industrial process — Downs cell)</text>

<text x="500" y="660" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">External power forces non-spontaneous reaction to occur (ΔG &gt; 0)</text>

<defs>
  <marker id="arr8" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: cellPotentialDiagram
    // type: cell_potential | cathode: Cu2+/Cu E=+0.34 | anode: Zn/Zn2+ E=-0.76
    // options: showHalfCells, showPotentials, showCalculation, showSpontaneity
    static cellPotentialDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="700" viewBox="0 0 900 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Cell Potential Calculation</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Cell Potential</text>
<text x="450" y="48" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">E°cell = E°cathode – E°anode</text>

<!-- Formula banner -->
<rect x="250" y="62" width="400" height="42" fill="#DDDDDD" stroke="#000000" stroke-width="2.5" rx="6"/>
<text x="450" y="82" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">E°cell = E°cathode – E°anode</text>
<text x="450" y="97" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">(reduction potential at cathode minus reduction potential at anode)</text>

<!-- ===== HALF CELLS (showHalfCells) ===== -->
<!-- Anode (Zn) -->
<rect x="50" y="125" width="340" height="220" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="4"/>
<text x="220" y="147" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Anode Half-Cell (Zn)</text>
<line x1="70" y1="154" x2="370" y2="154" stroke="#AAAAAA" stroke-width="1"/>
<text x="220" y="176" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Zn(s)  →  Zn²⁺(aq)  +  2e⁻</text>
<text x="220" y="196" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">(oxidation — electrons flow out)</text>

<!-- Potentials -->
<rect x="70" y="212" width="280" height="60" fill="#EEEEEE" stroke="#999999" stroke-width="1" rx="3"/>
<text x="210" y="232" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Standard reduction potential:</text>
<text x="210" y="256" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">E°(Zn²⁺/Zn) = –0.76 V</text>

<text x="70" y="298" font-family="Arial" font-size="12" fill="#000000">• Zn is oxidized (loses e⁻)</text>
<text x="70" y="316" font-family="Arial" font-size="12" fill="#000000">• Negative E°: less tendency to be reduced</text>
<text x="70" y="334" font-family="Arial" font-size="12" fill="#000000">• Strong reducing agent</text>

<!-- Cathode (Cu) -->
<rect x="510" y="125" width="340" height="220" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="4"/>
<text x="680" y="147" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Cathode Half-Cell (Cu)</text>
<line x1="530" y1="154" x2="830" y2="154" stroke="#AAAAAA" stroke-width="1"/>
<text x="680" y="176" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Cu²⁺(aq)  +  2e⁻  →  Cu(s)</text>
<text x="680" y="196" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">(reduction — electrons flow in)</text>

<rect x="530" y="212" width="280" height="60" fill="#EEEEEE" stroke="#999999" stroke-width="1" rx="3"/>
<text x="670" y="232" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Standard reduction potential:</text>
<text x="670" y="256" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">E°(Cu²⁺/Cu) = +0.34 V</text>

<text x="530" y="298" font-family="Arial" font-size="12" fill="#000000">• Cu²⁺ is reduced (gains e⁻)</text>
<text x="530" y="316" font-family="Arial" font-size="12" fill="#000000">• Positive E°: greater tendency to be reduced</text>
<text x="530" y="334" font-family="Arial" font-size="12" fill="#000000">• Good oxidizing agent</text>

<!-- Arrow between cells -->
<text x="450" y="240" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle">→</text>
<text x="450" y="258" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">e⁻ flow</text>

<!-- ===== CALCULATION (showCalculation) ===== -->
<rect x="50" y="366" width="800" height="140" fill="#EEEEEE" stroke="#000000" stroke-width="2" rx="4"/>
<text x="450" y="388" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Calculation of E°cell</text>
<line x1="70" y1="394" x2="830" y2="394" stroke="#AAAAAA" stroke-width="1"/>
<text x="70" y="416" font-family="Arial" font-size="13" fill="#000000">E°cell  =  E°cathode  –  E°anode</text>
<text x="70" y="440" font-family="Arial" font-size="13" fill="#000000">E°cell  =  E°(Cu²⁺/Cu)  –  E°(Zn²⁺/Zn)</text>
<text x="70" y="464" font-family="Arial" font-size="13" fill="#000000">E°cell  =  (+0.34 V)  –  (–0.76 V)</text>
<text x="70" y="488" font-family="Arial" font-size="15" fill="#000000" font-weight="bold">E°cell  =  +1.10 V</text>

<!-- ===== SPONTANEITY (showSpontaneity) ===== -->
<rect x="50" y="524" width="800" height="140" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="450" y="546" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Spontaneity and Thermodynamic Links</text>
<line x1="70" y1="552" x2="830" y2="552" stroke="#AAAAAA" stroke-width="1"/>
<text x="70" y="574" font-family="Arial" font-size="12" fill="#000000">• E°cell &gt; 0  →  Reaction is spontaneous (galvanic cell)  ✓</text>
<text x="70" y="594" font-family="Arial" font-size="12" fill="#000000">• ΔG° = –nFE°cell  =  –2 × 96485 × 1.10  =  –212,270 J  =  –212 kJ  (spontaneous)</text>
<text x="70" y="614" font-family="Arial" font-size="12" fill="#000000">• ln K = nFE°/(RT) = (2 × 96485 × 1.10)/(8.314 × 298) = 85.9   →   K = e^85.9 ≈ 2.3×10³⁷</text>
<text x="70" y="634" font-family="Arial" font-size="11" fill="#555555">• n = number of electrons transferred; F = Faraday's constant (96,485 C/mol)</text>
<text x="70" y="652" font-family="Arial" font-size="11" fill="#555555">• E°cell &lt; 0 → non-spontaneous; requires external voltage to drive (electrolytic cell)</text>

</g>
</svg>`;

    // Generated from registry: nernstEquationDiagram
    // type: nernst_equation | cell: Zn/Cu
    // options: showEquation, showStandardPotential, showConcentrationEffect, showCalculation
    static nernstEquationDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Nernst Equation</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Nernst Equation</text>
<text x="450" y="48" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Cell potential under non-standard conditions — Zn/Cu cell</text>

<!-- ===== Equation (showEquation) ===== -->
<rect x="150" y="62" width="600" height="80" fill="#DDDDDD" stroke="#000000" stroke-width="2.5" rx="6"/>
<text x="450" y="88" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">E = E° – (RT/nF) × ln Q</text>
<text x="450" y="112" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">At 25°C:   E = E° – (0.0257/n) × ln Q</text>
<text x="450" y="130" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Or:   E = E° – (0.0592/n) × log₁₀ Q</text>

<!-- Variable key -->
<rect x="30" y="162" width="420" height="130" fill="#FAFAFA" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="240" y="182" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Variable Key</text>
<line x1="50" y1="188" x2="430" y2="188" stroke="#AAAAAA" stroke-width="1"/>
<text x="50" y="208" font-family="Arial" font-size="12" fill="#000000">E   = cell potential under non-standard conditions</text>
<text x="50" y="226" font-family="Arial" font-size="12" fill="#000000">E°  = standard cell potential (+1.10 V for Zn/Cu)</text>
<text x="50" y="244" font-family="Arial" font-size="12" fill="#000000">n   = moles of electrons transferred (2 for Zn/Cu)</text>
<text x="50" y="262" font-family="Arial" font-size="12" fill="#000000">Q   = reaction quotient = [Zn²⁺]/[Cu²⁺]</text>
<text x="50" y="280" font-family="Arial" font-size="12" fill="#000000">R = 8.314 J/(mol·K);  F = 96485 C/mol</text>

<!-- Standard potential reminder (showStandardPotential) -->
<rect x="480" y="162" width="390" height="130" fill="#FAFAFA" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="675" y="182" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Standard Cell Potential</text>
<line x1="500" y1="188" x2="850" y2="188" stroke="#AAAAAA" stroke-width="1"/>
<text x="500" y="208" font-family="Arial" font-size="12" fill="#000000">Zn/Cu reaction:</text>
<text x="500" y="226" font-family="Arial" font-size="12" fill="#000000">Zn + Cu²⁺  ⇌  Zn²⁺  +  Cu</text>
<text x="500" y="244" font-family="Arial" font-size="12" fill="#000000">Q = [Zn²⁺] / [Cu²⁺]</text>
<text x="500" y="262" font-family="Arial" font-size="12" fill="#000000">Standard: [Zn²⁺] = [Cu²⁺] = 1 M</text>
<text x="500" y="280" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">E° = +1.10 V</text>

<!-- ===== Concentration effect (showConcentrationEffect) ===== -->
<rect x="30" y="312" width="840" height="120" fill="#EEEEEE" stroke="#000000" stroke-width="2" rx="4"/>
<text x="450" y="334" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Effect of Concentration on Cell Potential</text>
<line x1="50" y1="340" x2="850" y2="340" stroke="#AAAAAA" stroke-width="1"/>
<text x="50" y="362" font-family="Arial" font-size="12" fill="#000000">• Increasing [Cu²⁺] (reactant): Q decreases → E increases (cell more positive)</text>
<text x="50" y="380" font-family="Arial" font-size="12" fill="#000000">• Increasing [Zn²⁺] (product): Q increases → E decreases (cell less positive)</text>
<text x="50" y="398" font-family="Arial" font-size="12" fill="#000000">• At equilibrium: E = 0, Q = K  →  ln K = nFE°/RT  (can calculate K from E°)</text>
<text x="50" y="416" font-family="Arial" font-size="12" fill="#000000">• Concentration cells: same half-cells, different concentrations → small voltage from concentration gradient</text>

<!-- ===== Calculation example (showCalculation) ===== -->
<rect x="30" y="450" width="840" height="130" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="450" y="472" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Example Calculation</text>
<text x="50" y="494" font-family="Arial" font-size="11" fill="#555555">Find E when [Zn²⁺] = 0.10 M and [Cu²⁺] = 2.0 M (at 25°C)</text>
<text x="50" y="514" font-family="Arial" font-size="12" fill="#000000">Q = [Zn²⁺]/[Cu²⁺] = 0.10/2.0 = 0.050</text>
<text x="50" y="534" font-family="Arial" font-size="12" fill="#000000">E = E° – (0.0592/n) × log Q = 1.10 – (0.0592/2) × log(0.050)</text>
<text x="50" y="554" font-family="Arial" font-size="12" fill="#000000">E = 1.10 – (0.0296) × (–1.301) = 1.10 + 0.039 = 1.139 V</text>
<text x="50" y="572" font-family="Arial" font-size="11" fill="#555555">Higher [Cu²⁺] increases driving force → E &gt; E° as expected</text>

</g>
</svg>`;

    // Generated from registry: faradaysLawDiagram
    // type: faradays_laws
    // options: showFirstLaw, showSecondLaw, showCalculations, showExample
    static faradaysLawDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Faraday's Laws of Electrolysis</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Faraday's Laws of Electrolysis</text>
<text x="500" y="48" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Quantitative relationships in electrolysis</text>

<!-- Key formula banner -->
<rect x="200" y="62" width="600" height="40" fill="#DDDDDD" stroke="#000000" stroke-width="2.5" rx="6"/>
<text x="500" y="82" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">m = (M × I × t) / (n × F)</text>
<text x="500" y="97" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">m = mass deposited (g);  M = molar mass;  I = current (A);  t = time (s);  n = electrons per ion;  F = 96485 C/mol</text>

<!-- ===== FIRST LAW (showFirstLaw) ===== -->
<rect x="30" y="118" width="460" height="220" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="4"/>
<text x="260" y="140" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">First Law</text>
<line x1="50" y1="146" x2="470" y2="146" stroke="#AAAAAA" stroke-width="1"/>
<text x="50" y="168" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Statement:</text>
<text x="50" y="186" font-family="Arial" font-size="12" fill="#000000">"The mass of substance deposited or</text>
<text x="50" y="204" font-family="Arial" font-size="12" fill="#000000">dissolved at an electrode is proportional</text>
<text x="50" y="222" font-family="Arial" font-size="12" fill="#000000">to the quantity of electricity passed."</text>
<text x="50" y="250" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">m ∝ Q     where Q = I × t</text>
<text x="50" y="268" font-family="Arial" font-size="12" fill="#000000">Q = charge (coulombs, C)</text>
<text x="50" y="286" font-family="Arial" font-size="12" fill="#000000">I = current (amperes, A)</text>
<text x="50" y="304" font-family="Arial" font-size="12" fill="#000000">t = time (seconds, s)</text>
<text x="50" y="324" font-family="Arial" font-size="11" fill="#555555">Double the charge → double the mass deposited</text>

<!-- ===== SECOND LAW (showSecondLaw) ===== -->
<rect x="510" y="118" width="460" height="220" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="4"/>
<text x="740" y="140" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Second Law</text>
<line x1="530" y1="146" x2="950" y2="146" stroke="#AAAAAA" stroke-width="1"/>
<text x="530" y="168" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Statement:</text>
<text x="530" y="186" font-family="Arial" font-size="12" fill="#000000">"For the same quantity of electricity,</text>
<text x="530" y="204" font-family="Arial" font-size="12" fill="#000000">the masses of different substances</text>
<text x="530" y="222" font-family="Arial" font-size="12" fill="#000000">deposited are proportional to their</text>
<text x="530" y="240" font-family="Arial" font-size="12" fill="#000000">equivalent weights (M/n)."</text>
<text x="530" y="268" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">m ∝ M/n  (equivalent weight)</text>
<text x="530" y="286" font-family="Arial" font-size="12" fill="#000000">M = molar mass (g/mol)</text>
<text x="530" y="304" font-family="Arial" font-size="12" fill="#000000">n = electrons transferred per atom</text>
<text x="530" y="324" font-family="Arial" font-size="11" fill="#555555">1 Faraday = 96485 C = 1 mol of electrons</text>

<!-- ===== CALCULATIONS (showCalculations) ===== -->
<rect x="30" y="356" width="940" height="80" fill="#EEEEEE" stroke="#000000" stroke-width="2" rx="4"/>
<text x="500" y="378" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Combined Formula</text>
<text x="50" y="400" font-family="Arial" font-size="13" fill="#000000">m = (M × I × t) / (n × F)   where F = 96485 C/mol (Faraday's constant)</text>
<text x="50" y="422" font-family="Arial" font-size="13" fill="#000000">Equivalently: moles deposited = Q / (n × F) = (I × t) / (n × F)</text>

<!-- ===== EXAMPLE (showExample) ===== -->
<rect x="30" y="454" width="940" height="220" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="500" y="476" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Worked Example</text>
<line x1="50" y1="482" x2="950" y2="482" stroke="#AAAAAA" stroke-width="1"/>
<text x="50" y="502" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Problem:</text>
<text x="50" y="520" font-family="Arial" font-size="12" fill="#000000">How much copper (Cu) is deposited when a current of 2.0 A is passed through CuSO₄ solution for 30 minutes?</text>
<text x="50" y="540" font-family="Arial" font-size="12" fill="#000000">M(Cu) = 63.5 g/mol;  n = 2 (Cu²⁺ + 2e⁻ → Cu);  F = 96485 C/mol</text>
<text x="50" y="560" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Solution:</text>
<text x="50" y="578" font-family="Arial" font-size="12" fill="#000000">Q = I × t = 2.0 A × (30 × 60 s) = 2.0 × 1800 = 3600 C</text>
<text x="50" y="598" font-family="Arial" font-size="12" fill="#000000">m = (M × Q) / (n × F) = (63.5 × 3600) / (2 × 96485)</text>
<text x="50" y="618" font-family="Arial" font-size="12" fill="#000000">m = 228600 / 192970 = 1.185 g</text>
<text x="50" y="640" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">m ≈ 1.19 g of Cu deposited</text>
<text x="50" y="662" font-family="Arial" font-size="11" fill="#555555">Verify: moles Cu = 1.19/63.5 = 0.01874 mol  →  charge = 0.01874 × 2 × 96485 = 3618 C ≈ 3600 C ✓</text>

</g>
</svg>`;

    // Generated from registry: corrosionDiagram
    // type: corrosion | metal: iron
    // options: showAnodeArea, showCathodeArea, showRustFormation, showConditions
    static corrosionDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Corrosion of Iron</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Corrosion of Iron</text>
<text x="500" y="48" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Rusting as an electrochemical process — requires O₂ and H₂O</text>

<!-- Iron surface (large rectangle) -->
<rect x="80" y="180" width="840" height="120" fill="#CCCCCC" stroke="#000000" stroke-width="3"/>
<text x="500" y="248" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">Iron Surface (Fe)</text>

<!-- Water droplet / electrolyte film -->
<ellipse cx="500" cy="165" rx="300" ry="40" fill="#EEEEEE" stroke="#000000" stroke-width="2" stroke-dasharray="6,3"/>
<text x="500" y="150" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Water film (electrolyte) with dissolved O₂</text>

<!-- ===== ANODE AREA (showAnodeArea) ===== -->
<rect x="100" y="150" width="200" height="180" fill="#AAAAAA" stroke="#000000" stroke-width="2.5" stroke-dasharray="0"/>
<text x="200" y="170" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">ANODE AREA</text>
<text x="200" y="188" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(Fe dissolves)</text>

<!-- Fe2+ ions leaving surface -->
<circle cx="145" cy="215" r="12" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="145" y="220" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Fe²⁺</text>
<line x1="145" y1="202" x2="145" y2="168" stroke="#000000" stroke-width="1.5" marker-end="url(#arr9)"/>
<circle cx="185" cy="225" r="12" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="185" y="230" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Fe²⁺</text>
<line x1="185" y1="212" x2="200" y2="170" stroke="#000000" stroke-width="1.5" marker-end="url(#arr9)"/>

<!-- Anode reaction -->
<rect x="100" y="340" width="200" height="45" fill="#EEEEEE" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="200" y="358" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Oxidation (Anode):</text>
<text x="200" y="376" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Fe → Fe²⁺ + 2e⁻</text>

<!-- ===== CATHODE AREA (showCathodeArea) ===== -->
<rect x="700" y="150" width="200" height="180" fill="#AAAAAA" stroke="#000000" stroke-width="2.5"/>
<text x="800" y="170" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">CATHODE AREA</text>
<text x="800" y="188" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(O₂ reduced)</text>

<!-- O2 arriving -->
<circle cx="820" cy="140" r="12" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="820" y="145" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">O₂</text>
<line x1="820" y1="152" x2="800" y2="170" stroke="#000000" stroke-width="1.5" marker-end="url(#arr9)"/>
<!-- OH- forming -->
<circle cx="760" cy="215" r="12" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="760" y="220" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">OH⁻</text>
<circle cx="840" cy="225" r="12" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="840" y="230" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">OH⁻</text>

<!-- Cathode reaction -->
<rect x="700" y="340" width="200" height="55" fill="#EEEEEE" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="800" y="358" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Reduction (Cathode):</text>
<text x="800" y="376" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">O₂+2H₂O+4e⁻→4OH⁻</text>

<!-- Electron flow through iron (showElectronFlow) -->
<line x1="300" y1="240" x2="700" y2="240" stroke="#000000" stroke-width="3" stroke-dasharray="8,4" marker-end="url(#arr9)"/>
<text x="500" y="232" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">e⁻ flow through metal →</text>

<!-- ===== RUST FORMATION (showRustFormation) ===== -->
<rect x="350" y="62" width="300" height="55" fill="#EEEEEE" stroke="#000000" stroke-width="2" rx="4"/>
<text x="500" y="82" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Rust Formation</text>
<text x="500" y="100" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Fe²⁺ + 2OH⁻ → Fe(OH)₂  →  Fe₂O₃·xH₂O (rust)</text>
<text x="500" y="114" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">(ferrous hydroxide, then oxidized to hydrated iron oxide)</text>

<!-- Ion migration arrow -->
<line x1="300" y1="175" x2="500" y2="155" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arr9)"/>
<text x="395" y="160" font-family="Arial" font-size="10" fill="#555555">Fe²⁺ migrates</text>
<line x1="700" y1="175" x2="500" y2="155" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arr9)"/>
<text x="615" y="160" font-family="Arial" font-size="10" fill="#555555">OH⁻ migrates</text>

<!-- ===== CONDITIONS (showConditions) ===== -->
<rect x="30" y="418" width="940" height="160" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="500" y="440" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Conditions Affecting Corrosion Rate</text>
<line x1="50" y1="446" x2="950" y2="446" stroke="#AAAAAA" stroke-width="1"/>
<text x="50" y="466" font-family="Arial" font-size="11" fill="#000000">• Both O₂ and H₂O are required (neither alone causes rusting)</text>
<text x="50" y="484" font-family="Arial" font-size="11" fill="#000000">• Salt increases rate: electrolyte lowers resistance, increases ionic conduction</text>
<text x="50" y="502" font-family="Arial" font-size="11" fill="#000000">• Acid increases rate: lower pH increases Fe²⁺ formation; coal dust / acid rain accelerate</text>
<text x="50" y="520" font-family="Arial" font-size="11" fill="#000000">• Prevention: painting, galvanizing (Zn coat), cathodic protection, stainless steel alloys</text>
<text x="50" y="538" font-family="Arial" font-size="11" fill="#000000">• Galvanizing uses sacrificial Zn (active metal) — Zn oxidizes preferentially, protecting Fe</text>
<text x="50" y="556" font-family="Arial" font-size="11" fill="#000000">• Tin-plated iron: tin is cathodic to iron — if tin coating broken, iron oxidizes FASTER</text>

<defs>
  <marker id="arr9" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: fuelCellDiagram
    // type: fuel_cell | fuelType: hydrogen
    // options: showAnode, showCathode, showElectrolyte, showReactions, showProducts
    static fuelCellDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Hydrogen Fuel Cell</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Hydrogen Fuel Cell</text>
<text x="500" y="48" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Continuous conversion of chemical energy to electrical energy</text>

<!-- External circuit (load) -->
<rect x="380" y="62" width="240" height="50" fill="#EEEEEE" stroke="#000000" stroke-width="2.5" rx="5"/>
<text x="500" y="84" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">LOAD</text>
<text x="500" y="102" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(motor, device, etc.)</text>

<!-- ===== ANODE — LEFT (showAnode) ===== -->
<rect x="120" y="140" width="100" height="320" fill="#888888" stroke="#000000" stroke-width="3"/>
<text x="170" y="130" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">ANODE</text>
<text x="170" y="146" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(–)</text>

<!-- H2 feed arrow -->
<line x1="50" y1="300" x2="118" y2="300" stroke="#000000" stroke-width="2.5" marker-end="url(#arr10)"/>
<text x="80" y="288" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">H₂</text>
<text x="80" y="305" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">fuel in</text>

<!-- H2 molecules splitting -->
<circle cx="145" cy="250" r="10" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="145" y="255" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">H₂</text>
<circle cx="155" cy="310" r="10" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="155" y="315" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">H₂</text>
<!-- H+ protons crossing -->
<circle cx="230" cy="270" r="9" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="230" y="275" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">H⁺</text>
<circle cx="240" cy="320" r="9" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="240" y="325" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">H⁺</text>
<circle cx="225" cy="370" r="9" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="225" y="375" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">H⁺</text>

<!-- ===== ELECTROLYTE — CENTRE (showElectrolyte) ===== -->
<rect x="340" y="140" width="320" height="320" fill="#F5F5F5" stroke="#000000" stroke-width="3"/>
<text x="500" y="175" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">ELECTROLYTE</text>
<text x="500" y="193" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">(proton exchange membrane)</text>
<text x="500" y="212" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Only H⁺ can pass through</text>
<!-- H+ moving right arrows -->
<line x1="360" y1="270" x2="540" y2="270" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arr10)"/>
<line x1="360" y1="300" x2="540" y2="300" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arr10)"/>
<line x1="360" y1="330" x2="540" y2="330" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arr10)"/>
<line x1="360" y1="360" x2="540" y2="360" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arr10)"/>
<text x="450" y="395" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H⁺ →</text>
<text x="450" y="412" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(proton migration)</text>

<!-- ===== CATHODE — RIGHT (showCathode) ===== -->
<rect x="780" y="140" width="100" height="320" fill="#888888" stroke="#000000" stroke-width="3"/>
<text x="830" y="130" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">CATHODE</text>
<text x="830" y="146" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(+)</text>

<!-- O2 feed arrow -->
<line x1="950" y1="300" x2="882" y2="300" stroke="#000000" stroke-width="2.5" marker-end="url(#arr10)"/>
<text x="915" y="288" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">O₂</text>
<text x="915" y="305" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">air/O₂ in</text>
<!-- O2 molecules -->
<circle cx="840" cy="260" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="840" y="265" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">O₂</text>
<circle cx="845" cy="340" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="845" y="345" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">O₂</text>

<!-- ===== PRODUCTS (showProducts) — water out ===== -->
<line x1="830" y1="462" x2="830" y2="520" stroke="#000000" stroke-width="2.5" marker-end="url(#arr10)"/>
<text x="830" y="536" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">H₂O</text>
<text x="830" y="552" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">water out</text>

<!-- Electron flow through external circuit -->
<line x1="170" y1="140" x2="170" y2="87" stroke="#000000" stroke-width="3"/>
<line x1="170" y1="87" x2="378" y2="87" stroke="#000000" stroke-width="3" marker-end="url(#arr10)"/>
<line x1="622" y1="87" x2="830" y2="87" stroke="#000000" stroke-width="3" marker-end="url(#arr10)"/>
<line x1="830" y1="87" x2="830" y2="140" stroke="#000000" stroke-width="3"/>
<text x="270" y="78" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">e⁻ →</text>
<text x="730" y="78" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">e⁻ →</text>

<!-- ===== REACTIONS (showReactions) ===== -->
<rect x="30" y="500" width="380" height="55" fill="#EEEEEE" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="220" y="520" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Anode (Oxidation):</text>
<text x="220" y="540" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">H₂  →  2H⁺  +  2e⁻</text>

<rect x="590" y="500" width="380" height="55" fill="#EEEEEE" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="780" y="520" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Cathode (Reduction):</text>
<text x="780" y="540" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">½O₂  +  2H⁺  +  2e⁻  →  H₂O</text>

<rect x="200" y="574" width="600" height="32" fill="#DDDDDD" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="500" y="594" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Overall:  H₂  +  ½O₂  →  H₂O  (ΔG° = –237 kJ/mol)</text>
<text x="500" y="650" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Advantages: high efficiency (~60%+), only water emission, continuous operation with fuel supply</text>

<defs>
  <marker id="arr10" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: batteryDiagram
    // type: battery | batteryType: lead-acid
    // options: showDischarging, showCharging, showReactions, showElectrodes
    static batteryDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="800" viewBox="0 0 1000 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>Lead-Acid Battery</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Lead-Acid Battery</text>
<text x="500" y="48" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Rechargeable battery — used in automobiles (12V = 6 cells in series)</text>

<!-- Battery outline -->
<rect x="150" y="80" width="700" height="380" fill="#FFFFFF" stroke="#000000" stroke-width="4" rx="10"/>
<!-- Battery terminals -->
<rect x="290" y="56" width="80" height="30" fill="#888888" stroke="#000000" stroke-width="2" rx="3"/>
<text x="330" y="74" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">– (Pb)</text>
<rect x="630" y="56" width="80" height="30" fill="#888888" stroke="#000000" stroke-width="2" rx="3"/>
<text x="670" y="74" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">+ (PbO₂)</text>

<!-- Electrolyte: H2SO4 -->
<rect x="170" y="100" width="660" height="350" fill="#EEEEEE" stroke="none" rx="8"/>
<text x="500" y="432" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">H₂SO₄ electrolyte (dilute sulfuric acid, ~37%)</text>
<!-- H+ and SO42- ions -->
<circle cx="320" cy="320" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="320" y="325" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">H⁺</text>
<circle cx="400" cy="350" r="13" fill="#CCCCCC" stroke="#000000" stroke-width="1.5"/>
<text x="400" y="354" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">SO₄²⁻</text>
<circle cx="560" cy="330" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="560" y="335" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">H⁺</text>
<circle cx="660" cy="350" r="13" fill="#CCCCCC" stroke="#000000" stroke-width="1.5"/>
<text x="660" y="354" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">SO₄²⁻</text>
<circle cx="480" cy="280" r="10" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="480" y="285" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">H⁺</text>

<!-- ===== ELECTRODES (showElectrodes) ===== -->
<!-- Negative electrode: Pb (spongy lead) -->
<rect x="240" y="110" width="120" height="300" fill="#777777" stroke="#000000" stroke-width="2.5"/>
<text x="300" y="280" font-family="Arial" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="bold">Pb</text>
<text x="300" y="298" font-family="Arial" font-size="11" fill="#FFFFFF" text-anchor="middle">(spongy)</text>
<text x="300" y="135" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Neg. plate</text>

<!-- Positive electrode: PbO2 -->
<rect x="640" y="110" width="120" height="300" fill="#555555" stroke="#000000" stroke-width="2.5"/>
<text x="700" y="280" font-family="Arial" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="bold">PbO₂</text>
<text x="700" y="298" font-family="Arial" font-size="11" fill="#FFFFFF" text-anchor="middle">(lead dioxide)</text>
<text x="700" y="135" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Pos. plate</text>

<!-- ===== DISCHARGING (showDischarging) ===== -->
<rect x="30" y="490" width="460" height="160" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="4"/>
<text x="260" y="512" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Discharging (Galvanic)</text>
<line x1="50" y1="518" x2="470" y2="518" stroke="#AAAAAA" stroke-width="1"/>
<text x="50" y="540" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Anode (–):</text>
<text x="50" y="558" font-family="Arial" font-size="12" fill="#000000">Pb + SO₄²⁻ → PbSO₄ + 2e⁻</text>
<text x="50" y="578" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Cathode (+):</text>
<text x="50" y="596" font-family="Arial" font-size="12" fill="#000000">PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O</text>
<text x="50" y="618" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Overall:</text>
<text x="50" y="636" font-family="Arial" font-size="12" fill="#000000">Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O</text>
<text x="50" y="642" font-family="Arial" font-size="11" fill="#555555">(E° ≈ 2.0 V per cell)</text>

<!-- ===== CHARGING (showCharging) ===== -->
<rect x="510" y="490" width="460" height="160" fill="#FAFAFA" stroke="#000000" stroke-width="2" rx="4"/>
<text x="740" y="512" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Charging (Electrolytic)</text>
<line x1="530" y1="518" x2="950" y2="518" stroke="#AAAAAA" stroke-width="1"/>
<text x="530" y="540" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Cathode (–):</text>
<text x="530" y="558" font-family="Arial" font-size="12" fill="#000000">PbSO₄ + 2e⁻ → Pb + SO₄²⁻</text>
<text x="530" y="578" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Anode (+):</text>
<text x="530" y="596" font-family="Arial" font-size="12" fill="#000000">PbSO₄ + 2H₂O → PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻</text>
<text x="530" y="618" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Overall (reverse):</text>
<text x="530" y="636" font-family="Arial" font-size="12" fill="#000000">2PbSO₄ + 2H₂O → Pb + PbO₂ + 2H₂SO₄</text>

<!-- ===== REACTIONS summary / electron flow arrows ===== -->
<!-- Discharge electron flow label -->
<line x1="290" y1="86" x2="610" y2="86" stroke="#000000" stroke-width="2.5" stroke-dasharray="6,4" marker-end="url(#arr11)"/>
<text x="450" y="78" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">e⁻ flow (discharge) →</text>

<!-- Application note -->
<rect x="30" y="670" width="940" height="110" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="500" y="692" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Key Facts</text>
<text x="50" y="712" font-family="Arial" font-size="11" fill="#000000">• Lead-acid battery: 6 cells × 2V = 12V; widely used in vehicles for starter motors</text>
<text x="50" y="730" font-family="Arial" font-size="11" fill="#000000">• During discharge: H₂SO₄ consumed, PbSO₄ forms on both electrodes, density of acid decreases</text>
<text x="50" y="748" font-family="Arial" font-size="11" fill="#000000">• During charging: external current reverses reactions, H₂SO₄ regenerated, electrodes restored</text>
<text x="50" y="766" font-family="Arial" font-size="11" fill="#000000">• State of charge monitored by electrolyte density; fully charged ≈ 1.28 g/cm³, discharged ≈ 1.10 g/cm³</text>

<defs>
  <marker id="arr11" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;




    // ============================================================
    // ===== 1. ATOMIC STRUCTURE ==================================
    // ============================================================

    // Registry key: atomicStructureDiagram
    // element: Carbon (6p, 6n, 6e)  shells: 2,4
    // options: showNucleus, showElectronShells, showLabels, showCharges
    static atomicStructureDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Carbon Atom Structure</metadata>
<defs>
  <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0,8 3,0 6" fill="#000000"/>
  </marker>
</defs>
<g font-family="Arial" fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Carbon Atom Structure</text>
<text x="350" y="58" font-size="13" fill="#555555" text-anchor="middle">Atomic Number 6 · 6 protons · 6 neutrons · 6 electrons</text>

<!-- Shell 2 (L-shell, r=200) -->
<circle cx="350" cy="370" r="200" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>
<text x="555" y="330" font-size="12" fill="#000000">L-shell (n=2)</text>

<!-- Shell 1 (K-shell, r=100) -->
<circle cx="350" cy="370" r="100" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>
<text x="455" y="345" font-size="12" fill="#000000">K-shell (n=1)</text>

<!-- Nucleus -->
<circle cx="350" cy="370" r="40" fill="#DDDDDD" stroke="#000000" stroke-width="2.5"/>
<text x="350" y="362" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">6p⁺</text>
<text x="350" y="378" font-size="12" fill="#000000" text-anchor="middle">6n⁰</text>

<!-- showLabels: nucleus label -->
<text x="350" y="422" font-size="11" fill="#000000" text-anchor="middle">Nucleus (12C)</text>

<!-- K-shell electrons (2 electrons at 90° and 270°) -->
<!-- e1 top -->
<circle cx="350" cy="270" r="9" fill="#000000"/>
<text x="365" y="268" font-size="11" fill="#000000">e⁻</text>
<!-- e2 bottom -->
<circle cx="350" cy="470" r="9" fill="#000000"/>
<text x="365" y="474" font-size="11" fill="#000000">e⁻</text>

<!-- L-shell electrons (4 electrons at 0°,90°,180°,270° on r=200) -->
<!-- e3 right -->
<circle cx="550" cy="370" r="9" fill="#000000"/>
<text x="562" y="367" font-size="11" fill="#000000">e⁻</text>
<!-- e4 top -->
<circle cx="350" cy="170" r="9" fill="#000000"/>
<text x="365" y="168" font-size="11" fill="#000000">e⁻</text>
<!-- e5 left -->
<circle cx="150" cy="370" r="9" fill="#000000"/>
<text x="104" y="367" font-size="11" fill="#000000">e⁻</text>
<!-- e6 bottom -->
<circle cx="350" cy="570" r="9" fill="#000000"/>
<text x="365" y="574" font-size="11" fill="#000000">e⁻</text>

<!-- showCharges: charge legend -->
<rect x="30" y="600" width="280" height="80" fill="#F5F5F5" stroke="#AAAAAA" rx="4"/>
<text x="42" y="620" font-size="12" fill="#000000" font-weight="bold">Charge Legend:</text>
<text x="42" y="638" font-size="11" fill="#000000">p⁺ = proton (+1 charge)</text>
<text x="42" y="654" font-size="11" fill="#000000">n⁰ = neutron (0 charge)</text>
<text x="42" y="670" font-size="11" fill="#000000">e⁻ = electron (−1 charge)  Net charge = 0</text>

<!-- Electron count legend -->
<rect x="390" y="600" width="280" height="80" fill="#F5F5F5" stroke="#AAAAAA" rx="4"/>
<text x="402" y="620" font-size="12" fill="#000000" font-weight="bold">Electron Configuration:</text>
<text x="402" y="638" font-size="11" fill="#000000">K-shell (n=1): 2 electrons</text>
<text x="402" y="654" font-size="11" fill="#000000">L-shell (n=2): 4 electrons</text>
<text x="402" y="670" font-size="11" fill="#000000">Notation: 2, 4</text>

</g>
</svg>`;

    // Registry key: electronConfigurationDiagram
    // element: Iron (Z=26)  config: [Ar] 3d6 4s2
    // options: showOrbitals, showSpinArrows, showNotation
    static electronConfigurationDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Electron Configuration - Iron</metadata>
<defs>
  <marker id="arrowUp" markerWidth="6" markerHeight="8" refX="3" refY="7" orient="0deg">
    <polygon points="0 8,3 0,6 8" fill="#000000"/>
  </marker>
  <marker id="arrowDown" markerWidth="6" markerHeight="8" refX="3" refY="1" orient="0deg">
    <polygon points="0 0,3 8,6 0" fill="#000000"/>
  </marker>
</defs>
<g font-family="Arial" fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Electron Configuration — Iron (Fe)</text>
<text x="450" y="57" font-size="13" fill="#555555" text-anchor="middle">Atomic Number 26 · [Ar] 3d⁶ 4s²</text>

<!-- Column headers -->
<text x="60" y="90" font-size="13" fill="#000000" font-weight="bold">Sublevel</text>
<text x="180" y="90" font-size="13" fill="#000000" font-weight="bold">Orbital boxes</text>
<text x="620" y="90" font-size="13" fill="#000000" font-weight="bold">Electrons</text>
<text x="730" y="90" font-size="13" fill="#000000" font-weight="bold">Notation</text>

<!-- Helper macro: orbital box = 36×44 rect, spin-up arrow, spin-down arrow -->
<!-- Row y positions: 1s=120, 2s=175, 2p=230, 3s=285, 3p=340, 3d=395, 4s=450 -->

<!-- ---- 1s (2e) ---- -->
<text x="60" y="148" font-size="14" fill="#000000" font-weight="bold">1s</text>
<rect x="170" y="118" width="36" height="44" stroke="#000000" stroke-width="1.5"/>
<!-- up arrow -->
<line x1="182" y1="155" x2="182" y2="128" stroke="#000000" stroke-width="2"/>
<polygon points="178,133 182,121 186,133" fill="#000000" stroke="none"/>
<!-- down arrow -->
<line x1="196" y1="125" x2="196" y2="152" stroke="#000000" stroke-width="2"/>
<polygon points="192,147 196,159 200,147" fill="#000000" stroke="none"/>
<text x="620" y="148" font-size="13" fill="#000000">2</text>
<text x="730" y="148" font-size="13" fill="#000000">1s²</text>

<!-- ---- 2s (2e) ---- -->
<text x="60" y="203" font-size="14" fill="#000000" font-weight="bold">2s</text>
<rect x="170" y="173" width="36" height="44" stroke="#000000" stroke-width="1.5"/>
<line x1="182" y1="210" x2="182" y2="183" stroke="#000000" stroke-width="2"/>
<polygon points="178,188 182,176 186,188" fill="#000000" stroke="none"/>
<line x1="196" y1="180" x2="196" y2="207" stroke="#000000" stroke-width="2"/>
<polygon points="192,202 196,214 200,202" fill="#000000" stroke="none"/>
<text x="620" y="203" font-size="13" fill="#000000">2</text>
<text x="730" y="203" font-size="13" fill="#000000">2s²</text>

<!-- ---- 2p (6e) ---- -->
<text x="60" y="258" font-size="14" fill="#000000" font-weight="bold">2p</text>
<!-- 3 boxes each with 2 electrons -->
<rect x="170" y="228" width="36" height="44" stroke="#000000" stroke-width="1.5"/>
<line x1="182" y1="265" x2="182" y2="238" stroke="#000000" stroke-width="2"/>
<polygon points="178,243 182,231 186,243" fill="#000000" stroke="none"/>
<line x1="196" y1="235" x2="196" y2="262" stroke="#000000" stroke-width="2"/>
<polygon points="192,257 196,269 200,257" fill="#000000" stroke="none"/>

<rect x="212" y="228" width="36" height="44" stroke="#000000" stroke-width="1.5"/>
<line x1="224" y1="265" x2="224" y2="238" stroke="#000000" stroke-width="2"/>
<polygon points="220,243 224,231 228,243" fill="#000000" stroke="none"/>
<line x1="238" y1="235" x2="238" y2="262" stroke="#000000" stroke-width="2"/>
<polygon points="234,257 238,269 242,257" fill="#000000" stroke="none"/>

<rect x="254" y="228" width="36" height="44" stroke="#000000" stroke-width="1.5"/>
<line x1="266" y1="265" x2="266" y2="238" stroke="#000000" stroke-width="2"/>
<polygon points="262,243 266,231 270,243" fill="#000000" stroke="none"/>
<line x1="280" y1="235" x2="280" y2="262" stroke="#000000" stroke-width="2"/>
<polygon points="276,257 280,269 284,257" fill="#000000" stroke="none"/>
<text x="620" y="258" font-size="13" fill="#000000">6</text>
<text x="730" y="258" font-size="13" fill="#000000">2p⁶</text>

<!-- ---- 3s (2e) ---- -->
<text x="60" y="313" font-size="14" fill="#000000" font-weight="bold">3s</text>
<rect x="170" y="283" width="36" height="44" stroke="#000000" stroke-width="1.5"/>
<line x1="182" y1="320" x2="182" y2="293" stroke="#000000" stroke-width="2"/>
<polygon points="178,298 182,286 186,298" fill="#000000" stroke="none"/>
<line x1="196" y1="290" x2="196" y2="317" stroke="#000000" stroke-width="2"/>
<polygon points="192,312 196,324 200,312" fill="#000000" stroke="none"/>
<text x="620" y="313" font-size="13" fill="#000000">2</text>
<text x="730" y="313" font-size="13" fill="#000000">3s²</text>

<!-- ---- 3p (6e) ---- -->
<text x="60" y="368" font-size="14" fill="#000000" font-weight="bold">3p</text>
<rect x="170" y="338" width="36" height="44" stroke="#000000" stroke-width="1.5"/>
<line x1="182" y1="375" x2="182" y2="348" stroke="#000000" stroke-width="2"/>
<polygon points="178,353 182,341 186,353" fill="#000000" stroke="none"/>
<line x1="196" y1="345" x2="196" y2="372" stroke="#000000" stroke-width="2"/>
<polygon points="192,367 196,379 200,367" fill="#000000" stroke="none"/>
<rect x="212" y="338" width="36" height="44" stroke="#000000" stroke-width="1.5"/>
<line x1="224" y1="375" x2="224" y2="348" stroke="#000000" stroke-width="2"/>
<polygon points="220,353 224,341 228,353" fill="#000000" stroke="none"/>
<line x1="238" y1="345" x2="238" y2="372" stroke="#000000" stroke-width="2"/>
<polygon points="234,367 238,379 242,367" fill="#000000" stroke="none"/>
<rect x="254" y="338" width="36" height="44" stroke="#000000" stroke-width="1.5"/>
<line x1="266" y1="375" x2="266" y2="348" stroke="#000000" stroke-width="2"/>
<polygon points="262,353 266,341 270,353" fill="#000000" stroke="none"/>
<line x1="280" y1="345" x2="280" y2="372" stroke="#000000" stroke-width="2"/>
<polygon points="276,367 280,379 284,367" fill="#000000" stroke="none"/>
<text x="620" y="368" font-size="13" fill="#000000">6</text>
<text x="730" y="368" font-size="13" fill="#000000">3p⁶</text>

<!-- ---- 3d (6e out of 10) — Hund's rule: 4 half-filled + 2 paired ---- -->
<text x="60" y="423" font-size="14" fill="#000000" font-weight="bold">3d</text>
<!-- 5 boxes; first 4 have only spin-up (Hund's), 5th has up+down pair, but Fe=3d6 means: box1=↑↓, boxes2-6=↑ -->
<!-- Actually Fe 3d6: 1 paired + 4 half: box1 paired, box2-5 single up -->
<!-- box1: paired -->
<rect x="170" y="393" width="36" height="44" stroke="#000000" stroke-width="1.5"/>
<line x1="182" y1="430" x2="182" y2="403" stroke="#000000" stroke-width="2"/>
<polygon points="178,408 182,396 186,408" fill="#000000" stroke="none"/>
<line x1="196" y1="400" x2="196" y2="427" stroke="#000000" stroke-width="2"/>
<polygon points="192,422 196,434 200,422" fill="#000000" stroke="none"/>
<!-- boxes 2-5: single spin-up -->
<rect x="212" y="393" width="36" height="44" stroke="#000000" stroke-width="1.5"/>
<line x1="230" y1="430" x2="230" y2="403" stroke="#000000" stroke-width="2"/>
<polygon points="226,408 230,396 234,408" fill="#000000" stroke="none"/>
<rect x="254" y="393" width="36" height="44" stroke="#000000" stroke-width="1.5"/>
<line x1="272" y1="430" x2="272" y2="403" stroke="#000000" stroke-width="2"/>
<polygon points="268,408 272,396 276,408" fill="#000000" stroke="none"/>
<rect x="296" y="393" width="36" height="44" stroke="#000000" stroke-width="1.5"/>
<line x1="314" y1="430" x2="314" y2="403" stroke="#000000" stroke-width="2"/>
<polygon points="310,408 314,396 318,408" fill="#000000" stroke="none"/>
<rect x="338" y="393" width="36" height="44" stroke="#000000" stroke-width="1.5"/>
<line x1="356" y1="430" x2="356" y2="403" stroke="#000000" stroke-width="2"/>
<polygon points="352,408 356,396 360,408" fill="#000000" stroke="none"/>
<text x="620" y="423" font-size="13" fill="#000000">6</text>
<text x="730" y="423" font-size="13" fill="#000000">3d⁶</text>

<!-- ---- 4s (2e) ---- -->
<text x="60" y="478" font-size="14" fill="#000000" font-weight="bold">4s</text>
<rect x="170" y="448" width="36" height="44" stroke="#000000" stroke-width="1.5"/>
<line x1="182" y1="485" x2="182" y2="458" stroke="#000000" stroke-width="2"/>
<polygon points="178,463 182,451 186,463" fill="#000000" stroke="none"/>
<line x1="196" y1="455" x2="196" y2="482" stroke="#000000" stroke-width="2"/>
<polygon points="192,477 196,489 200,477" fill="#000000" stroke="none"/>
<text x="620" y="478" font-size="13" fill="#000000">2</text>
<text x="730" y="478" font-size="13" fill="#000000">4s²</text>

<!-- showNotation: full notation box -->
<rect x="30" y="520" width="840" height="60" fill="#F5F5F5" stroke="#AAAAAA" rx="4"/>
<text x="42" y="542" font-size="13" fill="#000000" font-weight="bold">Full Notation:</text>
<text x="160" y="542" font-size="13" fill="#000000">1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²</text>
<text x="42" y="564" font-size="12" fill="#000000">Condensed: [Ar] 3d⁶ 4s²   |   Total electrons: 26   |   Hund's Rule: maximum spin multiplicity in degenerate orbitals</text>

<!-- Spin key -->
<line x1="830" y1="120" x2="830" y2="93" stroke="#000000" stroke-width="2"/>
<polygon points="826,98 830,86 834,98" fill="#000000" stroke="none"/>
<text x="842" y="115" font-size="11" fill="#000000">Spin-up (↑)</text>
<line x1="830" y1="148" x2="830" y2="175" stroke="#000000" stroke-width="2"/>
<polygon points="826,170 830,182 834,170" fill="#000000" stroke="none"/>
<text x="842" y="168" font-size="11" fill="#000000">Spin-down (↓)</text>

</g>
</svg>`;

    // Registry key: orbitalShapesDiagram
    // orbitals: 1s, 2p, 3d, 4f
    // options: show3D, showNodes, showLabels
    static orbitalShapesDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Atomic Orbital Shapes</metadata>
<g font-family="Arial" fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="35" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Atomic Orbital Shapes</text>
<text x="500" y="57" font-size="13" fill="#555555" text-anchor="middle">s, p, d, f orbital geometries and node structure</text>

<!-- === 1s orbital (sphere) === -->
<!-- center: 125, 200 -->
<text x="125" y="90" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">1s</text>
<circle cx="125" cy="195" r="65" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<!-- 3D shading ellipse -->
<ellipse cx="125" cy="185" rx="40" ry="20" fill="#DDDDDD" stroke="none" opacity="0.7"/>
<text x="125" y="199" font-size="14" fill="#000000" text-anchor="middle">1s</text>
<text x="125" y="285" font-size="12" fill="#000000" text-anchor="middle">Spherical</text>
<text x="125" y="300" font-size="11" fill="#555555" text-anchor="middle">0 angular nodes</text>
<!-- nucleus dot -->
<circle cx="125" cy="195" r="4" fill="#000000"/>

<!-- === 2p orbital (dumbbell along y-axis) === -->
<!-- center: 330, 200 -->
<text x="330" y="90" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">2p</text>
<!-- pz lobe (up) -->
<ellipse cx="330" cy="140" rx="32" ry="55" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<!-- pz lobe (down) -->
<ellipse cx="330" cy="252" rx="32" ry="55" fill="#CCCCCC" stroke="#000000" stroke-width="2"/>
<!-- nodal plane line -->
<line x1="270" y1="196" x2="390" y2="196" stroke="#000000" stroke-width="1" stroke-dasharray="5,4"/>
<text x="396" y="200" font-size="10" fill="#000000">nodal plane</text>
<!-- nucleus -->
<circle cx="330" cy="196" r="4" fill="#000000"/>
<!-- axis labels -->
<text x="330" y="82" font-size="11" fill="#000000" text-anchor="middle">+z</text>
<text x="330" y="320" font-size="11" fill="#000000" text-anchor="middle">−z</text>
<text x="330" y="340" font-size="12" fill="#000000" text-anchor="middle">Dumbbell (pz shown)</text>
<text x="330" y="355" font-size="11" fill="#555555" text-anchor="middle">1 angular node</text>
<!-- three-lobe indicator -->
<text x="330" y="370" font-size="10" fill="#555555" text-anchor="middle">px, py, pz degenerate</text>

<!-- === 3d orbital (d_z2: two lobes + torus) === -->
<!-- center: 570, 200 -->
<text x="570" y="90" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">3d</text>
<!-- dz2: two lobes along z -->
<ellipse cx="570" cy="128" rx="28" ry="68" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<ellipse cx="570" cy="264" rx="28" ry="68" fill="#CCCCCC" stroke="#000000" stroke-width="2"/>
<!-- torus ring in equatorial plane -->
<ellipse cx="570" cy="196" rx="52" ry="18" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<!-- nucleus -->
<circle cx="570" cy="196" r="4" fill="#000000"/>
<!-- nodal cones (dashed lines at 54.7°) -->
<line x1="530" y1="156" x2="570" y2="196" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="610" y1="156" x2="570" y2="196" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="530" y1="236" x2="570" y2="196" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="610" y1="236" x2="570" y2="196" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
<text x="570" y="350" font-size="12" fill="#000000" text-anchor="middle">dz² shown</text>
<text x="570" y="365" font-size="11" fill="#555555" text-anchor="middle">2 angular nodes</text>
<text x="570" y="380" font-size="10" fill="#555555" text-anchor="middle">5 degenerate d orbitals</text>

<!-- === 4f orbital (complex: 3 lobes per side illustration) === -->
<!-- center: 830, 200 -->
<text x="830" y="90" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">4f</text>
<!-- Simplified fz3: 3-lobe upper half, 3-lobe lower half + nodal planes -->
<!-- Upper primary lobe -->
<ellipse cx="830" cy="118" rx="22" ry="50" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<!-- Upper side lobes -->
<ellipse cx="797" cy="148" rx="20" ry="32" fill="#CCCCCC" stroke="#000000" stroke-width="2" transform="rotate(-40,797,148)"/>
<ellipse cx="863" cy="148" rx="20" ry="32" fill="#CCCCCC" stroke="#000000" stroke-width="2" transform="rotate(40,863,148)"/>
<!-- Lower primary lobe -->
<ellipse cx="830" cy="274" rx="22" ry="50" fill="#CCCCCC" stroke="#000000" stroke-width="2"/>
<!-- Lower side lobes -->
<ellipse cx="797" cy="244" rx="20" ry="32" fill="#EEEEEE" stroke="#000000" stroke-width="2" transform="rotate(40,797,244)"/>
<ellipse cx="863" cy="244" rx="20" ry="32" fill="#EEEEEE" stroke="#000000" stroke-width="2" transform="rotate(-40,863,244)"/>
<!-- nucleus -->
<circle cx="830" cy="196" r="4" fill="#000000"/>
<!-- nodal planes -->
<line x1="768" y1="196" x2="892" y2="196" stroke="#000000" stroke-width="1" stroke-dasharray="5,3"/>
<text x="830" y="350" font-size="12" fill="#000000" text-anchor="middle">fz³ simplified</text>
<text x="830" y="365" font-size="11" fill="#555555" text-anchor="middle">3 angular nodes</text>
<text x="830" y="380" font-size="10" fill="#555555" text-anchor="middle">7 degenerate f orbitals</text>

<!-- Shading key -->
<rect x="30" y="610" width="940" height="75" fill="#F5F5F5" stroke="#AAAAAA" rx="4"/>
<text x="42" y="632" font-size="13" fill="#000000" font-weight="bold">Key:</text>
<rect x="95" y="620" width="18" height="18" fill="#EEEEEE" stroke="#000000" stroke-width="1"/>
<text x="118" y="633" font-size="12" fill="#000000">Positive phase lobe</text>
<rect x="280" y="620" width="18" height="18" fill="#CCCCCC" stroke="#000000" stroke-width="1"/>
<text x="303" y="633" font-size="12" fill="#000000">Negative phase lobe</text>
<circle cx="480" cy="629" r="4" fill="#000000"/>
<text x="490" y="633" font-size="12" fill="#000000">Nucleus position</text>
<line x1="600" y1="629" x2="640" y2="629" stroke="#000000" stroke-width="1" stroke-dasharray="5,3"/>
<text x="648" y="633" font-size="12" fill="#000000">Angular node (nodal plane/cone)</text>
<text x="42" y="670" font-size="11" fill="#555555">Angular nodes = l (quantum number).  s: l=0, p: l=1, d: l=2, f: l=3.  Total nodes = n−1.  Radial nodes = n−l−1.</text>

</g>
</svg>`;

    // Registry key: isotopeDiagram
    // element: Carbon  isotopes: 12,13,14
    // options: showNuclei, showMassNumbers, showNeutronDifference
    static isotopeDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Carbon Isotopes</metadata>
<g font-family="Arial" fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="35" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Carbon Isotopes</text>
<text x="500" y="57" font-size="13" fill="#555555" text-anchor="middle">Same element (same protons), different neutrons (different mass numbers)</text>

<!-- ===== Carbon-12 (6p, 6n) ===== cx=167 -->
<text x="167" y="95" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">¹²C  Carbon-12</text>

<!-- Shell 2 -->
<circle cx="167" cy="270" r="115" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<!-- Shell 1 -->
<circle cx="167" cy="270" r="58" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<!-- Nucleus: 6p + 6n -->
<circle cx="167" cy="270" r="30" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="167" y="264" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">6p⁺</text>
<text x="167" y="280" font-size="11" fill="#000000" text-anchor="middle">6n⁰</text>
<!-- K-shell 2e -->
<circle cx="167" cy="212" r="7" fill="#000000"/>
<circle cx="167" cy="328" r="7" fill="#000000"/>
<!-- L-shell 4e -->
<circle cx="282" cy="270" r="7" fill="#000000"/>
<circle cx="52" cy="270" r="7" fill="#000000"/>
<circle cx="167" cy="155" r="7" fill="#000000"/>
<circle cx="167" cy="385" r="7" fill="#000000"/>

<!-- showMassNumbers -->
<rect x="75" y="415" width="184" height="52" fill="#F5F5F5" stroke="#AAAAAA" rx="3"/>
<text x="167" y="433" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Mass Number: 12</text>
<text x="167" y="451" font-size="11" fill="#000000" text-anchor="middle">6 protons + 6 neutrons</text>
<text x="167" y="490" font-size="12" fill="#555555" text-anchor="middle">Stable · 98.9% natural abundance</text>

<!-- ===== Carbon-13 (6p, 7n) ===== cx=500 -->
<text x="500" y="95" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">¹³C  Carbon-13</text>

<circle cx="500" cy="270" r="115" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<circle cx="500" cy="270" r="58" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<!-- Nucleus slightly larger (7n) -->
<circle cx="500" cy="270" r="33" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="500" y="264" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">6p⁺</text>
<text x="500" y="280" font-size="11" fill="#000000" text-anchor="middle">7n⁰</text>
<circle cx="500" cy="212" r="7" fill="#000000"/>
<circle cx="500" cy="328" r="7" fill="#000000"/>
<circle cx="615" cy="270" r="7" fill="#000000"/>
<circle cx="385" cy="270" r="7" fill="#000000"/>
<circle cx="500" cy="155" r="7" fill="#000000"/>
<circle cx="500" cy="385" r="7" fill="#000000"/>

<rect x="408" y="415" width="184" height="52" fill="#F5F5F5" stroke="#AAAAAA" rx="3"/>
<text x="500" y="433" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Mass Number: 13</text>
<text x="500" y="451" font-size="11" fill="#000000" text-anchor="middle">6 protons + 7 neutrons</text>
<text x="500" y="490" font-size="12" fill="#555555" text-anchor="middle">Stable · 1.1% natural abundance</text>

<!-- ===== Carbon-14 (6p, 8n) ===== cx=833 -->
<text x="833" y="95" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">¹⁴C  Carbon-14</text>

<circle cx="833" cy="270" r="115" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<circle cx="833" cy="270" r="58" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<circle cx="833" cy="270" r="36" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="833" y="264" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">6p⁺</text>
<text x="833" y="280" font-size="11" fill="#000000" text-anchor="middle">8n⁰</text>
<circle cx="833" cy="212" r="7" fill="#000000"/>
<circle cx="833" cy="328" r="7" fill="#000000"/>
<circle cx="948" cy="270" r="7" fill="#000000"/>
<circle cx="718" cy="270" r="7" fill="#000000"/>
<circle cx="833" cy="155" r="7" fill="#000000"/>
<circle cx="833" cy="385" r="7" fill="#000000"/>

<rect x="741" y="415" width="184" height="52" fill="#F5F5F5" stroke="#AAAAAA" rx="3"/>
<text x="833" y="433" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Mass Number: 14</text>
<text x="833" y="451" font-size="11" fill="#000000" text-anchor="middle">6 protons + 8 neutrons</text>
<text x="833" y="490" font-size="12" fill="#555555" text-anchor="middle">Radioactive · β⁻ decay · t½ = 5730 yr</text>

<!-- showNeutronDifference: comparison band -->
<rect x="30" y="520" width="940" height="60" fill="#F5F5F5" stroke="#AAAAAA" rx="4"/>
<text x="500" y="542" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Neutron Difference</text>
<text x="500" y="562" font-size="12" fill="#000000" text-anchor="middle">¹²C→¹³C: +1 neutron  |  ¹²C→¹⁴C: +2 neutrons  |  Electron configuration identical for all isotopes (same Z=6)</text>

<!-- Vertical dividers -->
<line x1="333" y1="75" x2="333" y2="510" stroke="#CCCCCC" stroke-width="1"/>
<line x1="667" y1="75" x2="667" y2="510" stroke="#CCCCCC" stroke-width="1"/>

</g>
</svg>`;

    // Registry key: ionFormationDiagram
    // element: Sodium  ionType: cation  charge: +1
    // options: showBefore, showAfter, showElectronTransfer, showCharges
    static ionFormationDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Sodium Ion Formation</metadata>
<defs>
  <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>
<g font-family="Arial" fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Sodium Ion Formation (Na → Na⁺)</text>
<text x="450" y="57" font-size="13" fill="#555555" text-anchor="middle">Loss of one valence electron to form a cation</text>

<!-- ===== BEFORE: Neutral Na atom ===== -->
<text x="185" y="90" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">BEFORE: Na atom</text>
<text x="185" y="108" font-size="12" fill="#555555" text-anchor="middle">11 protons · 11 electrons</text>

<!-- Shell 3 (M) -->
<circle cx="185" cy="295" r="145" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="338" y="255" font-size="11" fill="#555555">M (n=3)</text>
<!-- Shell 2 (L) -->
<circle cx="185" cy="295" r="98" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="288" y="268" font-size="11" fill="#555555">L (n=2)</text>
<!-- Shell 1 (K) -->
<circle cx="185" cy="295" r="48" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="237" y="285" font-size="11" fill="#555555">K</text>
<!-- Nucleus -->
<circle cx="185" cy="295" r="28" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="185" y="289" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">11p⁺</text>
<text x="185" y="304" font-size="11" fill="#000000" text-anchor="middle">12n⁰</text>

<!-- K-shell 2e -->
<circle cx="185" cy="247" r="7" fill="#000000"/>
<circle cx="185" cy="343" r="7" fill="#000000"/>
<!-- L-shell 8e -->
<circle cx="283" cy="295" r="7" fill="#000000"/>
<circle cx="87"  cy="295" r="7" fill="#000000"/>
<circle cx="254" cy="226" r="7" fill="#000000"/>
<circle cx="116" cy="364" r="7" fill="#000000"/>
<circle cx="185" cy="197" r="7" fill="#000000"/>
<circle cx="185" cy="393" r="7" fill="#000000"/>
<circle cx="254" cy="364" r="7" fill="#000000"/>
<circle cx="116" cy="226" r="7" fill="#000000"/>
<!-- M-shell 1e (valence) — highlighted with larger circle + dashed ring -->
<circle cx="330" cy="295" r="9" fill="#000000"/>
<circle cx="330" cy="295" r="15" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,2"/>
<text x="332" y="248" font-size="11" fill="#000000">valence e⁻</text>

<!-- showCharges -->
<text x="185" y="470" font-size="14" fill="#000000" text-anchor="middle">Charge: 0</text>
<text x="185" y="490" font-size="12" fill="#555555" text-anchor="middle">Config: 2,8,1</text>

<!-- ===== Arrow showing electron loss ===== -->
<line x1="390" y1="295" x2="510" y2="295" stroke="#000000" stroke-width="3" marker-end="url(#arrow)"/>
<text x="450" y="280" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">− e⁻</text>
<text x="450" y="318" font-size="11" fill="#555555" text-anchor="middle">(ionisation)</text>

<!-- showElectronTransfer: departing electron -->
<circle cx="450" cy="348" r="8" fill="#FFFFFF" stroke="#000000" stroke-width="2" stroke-dasharray="3,2"/>
<text x="450" y="370" font-size="10" fill="#000000" text-anchor="middle">lost e⁻</text>

<!-- ===== AFTER: Na⁺ ion ===== -->
<text x="700" y="90" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">AFTER: Na⁺ ion</text>
<text x="700" y="108" font-size="12" fill="#555555" text-anchor="middle">11 protons · 10 electrons</text>

<!-- Shell 2 only (no M-shell) -->
<circle cx="700" cy="295" r="98" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="803" y="268" font-size="11" fill="#555555">L (n=2)</text>
<circle cx="700" cy="295" r="48" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="752" y="285" font-size="11" fill="#555555">K</text>
<!-- Nucleus (same) -->
<circle cx="700" cy="295" r="28" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="700" y="289" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">11p⁺</text>
<text x="700" y="304" font-size="11" fill="#000000" text-anchor="middle">12n⁰</text>

<!-- K-shell 2e -->
<circle cx="700" cy="247" r="7" fill="#000000"/>
<circle cx="700" cy="343" r="7" fill="#000000"/>
<!-- L-shell 8e -->
<circle cx="798" cy="295" r="7" fill="#000000"/>
<circle cx="602" cy="295" r="7" fill="#000000"/>
<circle cx="769" cy="226" r="7" fill="#000000"/>
<circle cx="631" cy="364" r="7" fill="#000000"/>
<circle cx="700" cy="197" r="7" fill="#000000"/>
<circle cx="700" cy="393" r="7" fill="#000000"/>
<circle cx="769" cy="364" r="7" fill="#000000"/>
<circle cx="631" cy="226" r="7" fill="#000000"/>

<!-- showCharges: charge indicator -->
<text x="700" y="470" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Charge: +1</text>
<text x="700" y="490" font-size="12" fill="#555555" text-anchor="middle">Config: 2,8 (isoelectronic with Ne)</text>

<!-- Info box -->
<rect x="30" y="520" width="840" height="60" fill="#F5F5F5" stroke="#AAAAAA" rx="4"/>
<text x="450" y="540" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Ionisation: Na → Na⁺ + e⁻</text>
<text x="450" y="562" font-size="12" fill="#000000" text-anchor="middle">Proton number unchanged (still Na).  Fewer electrons than protons → net positive charge.  Smaller ionic radius than atom.</text>

</g>
</svg>`;

    // Registry key: ionizationEnergyGraph
    // period: 3
    // options: showTrend, showNobleGases, showExplanation
    static ionizationEnergyGraphSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Ionization Energy - Period 3</metadata>
<defs>
  <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>
<g font-family="Arial" fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">First Ionisation Energy — Period 3</text>
<text x="450" y="57" font-size="13" fill="#555555" text-anchor="middle">Energy required to remove one electron from gaseous atom (kJ mol⁻¹)</text>

<!-- Graph axes -->
<!-- y: 80 (top) to 480 (bottom) = 400px for 0–2500 kJ/mol => 1 unit = 0.16px -->
<!-- x: 100 (left, Na) to 820 (right, Ar) = 8 elements, spacing = 102.86px -->
<line x1="100" y1="80" x2="100" y2="480" stroke="#000000" stroke-width="2"/>
<line x1="100" y1="480" x2="840" y2="480" stroke="#000000" stroke-width="2"/>

<!-- y-axis labels -->
<text x="90" y="484" font-size="11" fill="#000000" text-anchor="end">0</text>
<text x="90" y="404" font-size="11" fill="#000000" text-anchor="end">500</text>
<text x="90" y="324" font-size="11" fill="#000000" text-anchor="end">1000</text>
<text x="90" y="244" font-size="11" fill="#000000" text-anchor="end">1500</text>
<text x="90" y="164" font-size="11" fill="#000000" text-anchor="end">2000</text>
<text x="90" y="100" font-size="11" fill="#000000" text-anchor="end">2500</text>
<!-- gridlines -->
<line x1="100" y1="404" x2="840" y2="404" stroke="#CCCCCC" stroke-width="1"/>
<line x1="100" y1="324" x2="840" y2="324" stroke="#CCCCCC" stroke-width="1"/>
<line x1="100" y1="244" x2="840" y2="244" stroke="#CCCCCC" stroke-width="1"/>
<line x1="100" y1="164" x2="840" y2="164" stroke="#CCCCCC" stroke-width="1"/>

<!-- y-axis title -->
<text x="30" y="280" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,30,280)">1st Ionisation Energy (kJ mol⁻¹)</text>

<!-- x-axis title -->
<text x="470" y="530" font-size="13" fill="#000000" text-anchor="middle">Element (Period 3)</text>

<!-- Data: Period 3 IE1 values (approx kJ/mol)
     Na=496, Mg=738, Al=578, Si=786, P=1012, S=1000, Cl=1251, Ar=1520
     y = 480 - IE/2500*400
-->
<!-- Na: 496 → y=480-79=401   x=185 -->
<!-- Mg: 738 → y=480-118=362  x=285 -->
<!-- Al: 578 → y=480-92=388   x=385 -->
<!-- Si: 786 → y=480-126=354  x=485 -->
<!-- P : 1012→ y=480-162=318  x=585 -->
<!-- S : 1000→ y=480-160=320  x=685 -->
<!-- Cl: 1251→ y=480-200=280  x=785 -->
<!-- Ar (noble gas): 1520→ y=480-243=237  shown dashed -->

<!-- Data line -->
<polyline points="185,401 285,362 385,388 485,354 585,318 685,320 785,280" stroke="#000000" stroke-width="2.5" fill="none"/>

<!-- Data points -->
<circle cx="185" cy="401" r="6" fill="#000000"/>
<circle cx="285" cy="362" r="6" fill="#000000"/>
<circle cx="385" cy="388" r="6" fill="#000000"/>
<circle cx="485" cy="354" r="6" fill="#000000"/>
<circle cx="585" cy="318" r="6" fill="#000000"/>
<circle cx="685" cy="320" r="6" fill="#000000"/>
<circle cx="785" cy="280" r="6" fill="#000000"/>

<!-- x-axis labels -->
<text x="185" y="498" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Na</text>
<text x="185" y="512" font-size="10" fill="#555555" text-anchor="middle">(11)</text>
<text x="285" y="498" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Mg</text>
<text x="285" y="512" font-size="10" fill="#555555" text-anchor="middle">(12)</text>
<text x="385" y="498" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Al</text>
<text x="385" y="512" font-size="10" fill="#555555" text-anchor="middle">(13)</text>
<text x="485" y="498" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Si</text>
<text x="485" y="512" font-size="10" fill="#555555" text-anchor="middle">(14)</text>
<text x="585" y="498" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">P</text>
<text x="585" y="512" font-size="10" fill="#555555" text-anchor="middle">(15)</text>
<text x="685" y="498" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">S</text>
<text x="685" y="512" font-size="10" fill="#555555" text-anchor="middle">(16)</text>
<text x="785" y="498" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Cl</text>
<text x="785" y="512" font-size="10" fill="#555555" text-anchor="middle">(17)</text>

<!-- Value annotations -->
<text x="185" y="393" font-size="10" fill="#000000" text-anchor="middle">496</text>
<text x="285" y="354" font-size="10" fill="#000000" text-anchor="middle">738</text>
<text x="385" y="380" font-size="10" fill="#000000" text-anchor="middle">578</text>
<text x="485" y="346" font-size="10" fill="#000000" text-anchor="middle">786</text>
<text x="585" y="310" font-size="10" fill="#000000" text-anchor="middle">1012</text>
<text x="685" y="312" font-size="10" fill="#000000" text-anchor="middle">1000</text>
<text x="785" y="272" font-size="10" fill="#000000" text-anchor="middle">1251</text>

<!-- showExplanation: anomaly annotations -->
<!-- Al dip (Al lower than Mg: s vs p subshell) -->
<line x1="335" y1="388" x2="300" y2="430" stroke="#555555" stroke-width="1" stroke-dasharray="3,2"/>
<text x="220" y="445" font-size="10" fill="#000000">Al 3p¹ easier to remove</text>
<text x="220" y="458" font-size="10" fill="#000000">than Mg 3s²</text>

<!-- S dip (S lower than P: paired electron repulsion) -->
<line x1="685" y1="320" x2="660" y2="360" stroke="#555555" stroke-width="1" stroke-dasharray="3,2"/>
<text x="580" y="378" font-size="10" fill="#000000">S 3p⁴ paired e⁻ repulsion</text>
<text x="580" y="391" font-size="10" fill="#000000">lowers IE vs P 3p³</text>

<!-- showTrend: overall trend arrow -->
<line x1="150" y1="140" x2="820" y2="100" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4" marker-end="url(#arrow)"/>
<text x="420" y="132" font-size="11" fill="#555555" text-anchor="middle">General increase across period →</text>

</g>
</svg>`;

    // Registry key: atomicRadiusTrends
    // options: showPeriodicTable, showArrows, showExplanation
    static atomicRadiusTrendsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Atomic Radius Trends</metadata>
<defs>
  <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
  <marker id="arrowW" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#FFFFFF"/>
  </marker>
</defs>
<g font-family="Arial" fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="35" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Atomic Radius Trends in the Periodic Table</text>
<text x="500" y="57" font-size="13" fill="#555555" text-anchor="middle">Radius decreases across a period; increases down a group</text>

<!-- Simplified periodic table grid: Periods 1–4, Groups 1–18 -->
<!-- Cell size: 48×38, left margin=50, top margin=80 -->
<!-- Shading: larger radius = lighter fill, smaller = darker -->

<!-- Helper: period row headers -->
<text x="38" y="116" font-size="11" fill="#555555" text-anchor="end">Period 1</text>
<text x="38" y="154" font-size="11" fill="#555555" text-anchor="end">Period 2</text>
<text x="38" y="192" font-size="11" fill="#555555" text-anchor="end">Period 3</text>
<text x="38" y="230" font-size="11" fill="#555555" text-anchor="end">Period 4</text>

<!-- Group labels -->
<text x="74" y="78" font-size="10" fill="#555555" text-anchor="middle">1</text>
<text x="894" y="78" font-size="10" fill="#555555" text-anchor="middle">18</text>
<text x="74" y="67" font-size="9" fill="#555555" text-anchor="middle">IA</text>

<!-- Period 1: H(53), He(31) -->
<rect x="50" y="88" width="48" height="36" fill="#EEEEEE" stroke="#000000" stroke-width="1"/>
<text x="74" y="104" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">H</text>
<text x="74" y="117" font-size="9" fill="#555555" text-anchor="middle">53 pm</text>

<rect x="866" y="88" width="48" height="36" fill="#BBBBBB" stroke="#000000" stroke-width="1"/>
<text x="890" y="104" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">He</text>
<text x="890" y="117" font-size="9" fill="#555555" text-anchor="middle">31 pm</text>

<!-- Period 2: Li(167), Be(112), B(87), C(77), N(75), O(73), F(71), Ne(69) -->
<rect x="50" y="126" width="48" height="36" fill="#F5F5F5" stroke="#000000" stroke-width="1"/>
<text x="74" y="142" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Li</text>
<text x="74" y="155" font-size="9" fill="#555555" text-anchor="middle">167</text>

<rect x="106" y="126" width="48" height="36" fill="#EEEEEE" stroke="#000000" stroke-width="1"/>
<text x="130" y="142" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Be</text>
<text x="130" y="155" font-size="9" fill="#555555" text-anchor="middle">112</text>

<!-- s block gap for d block: period 2 no d block shown simply -->
<rect x="530" y="126" width="48" height="36" fill="#DDDDDD" stroke="#000000" stroke-width="1"/>
<text x="554" y="142" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">B</text>
<text x="554" y="155" font-size="9" fill="#555555" text-anchor="middle">87</text>

<rect x="586" y="126" width="48" height="36" fill="#CCCCCC" stroke="#000000" stroke-width="1"/>
<text x="610" y="142" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">C</text>
<text x="610" y="155" font-size="9" fill="#555555" text-anchor="middle">77</text>

<rect x="642" y="126" width="48" height="36" fill="#CCCCCC" stroke="#000000" stroke-width="1"/>
<text x="666" y="142" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">N</text>
<text x="666" y="155" font-size="9" fill="#555555" text-anchor="middle">75</text>

<rect x="698" y="126" width="48" height="36" fill="#BBBBBB" stroke="#000000" stroke-width="1"/>
<text x="722" y="142" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">O</text>
<text x="722" y="155" font-size="9" fill="#555555" text-anchor="middle">73</text>

<rect x="754" y="126" width="48" height="36" fill="#BBBBBB" stroke="#000000" stroke-width="1"/>
<text x="778" y="142" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">F</text>
<text x="778" y="155" font-size="9" fill="#555555" text-anchor="middle">71</text>

<rect x="866" y="126" width="48" height="36" fill="#AAAAAA" stroke="#000000" stroke-width="1"/>
<text x="890" y="142" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Ne</text>
<text x="890" y="155" font-size="9" fill="#555555" text-anchor="middle">69</text>

<!-- Period 3: Na(191), Mg(145), Al(118), Si(111), P(98), S(88), Cl(79), Ar(71) -->
<rect x="50" y="164" width="48" height="36" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
<text x="74" y="180" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Na</text>
<text x="74" y="193" font-size="9" fill="#555555" text-anchor="middle">191</text>

<rect x="106" y="164" width="48" height="36" fill="#F0F0F0" stroke="#000000" stroke-width="1"/>
<text x="130" y="180" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Mg</text>
<text x="130" y="193" font-size="9" fill="#555555" text-anchor="middle">145</text>

<rect x="530" y="164" width="48" height="36" fill="#EEEEEE" stroke="#000000" stroke-width="1"/>
<text x="554" y="180" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Al</text>
<text x="554" y="193" font-size="9" fill="#555555" text-anchor="middle">118</text>

<rect x="586" y="164" width="48" height="36" fill="#DDDDDD" stroke="#000000" stroke-width="1"/>
<text x="610" y="180" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Si</text>
<text x="610" y="193" font-size="9" fill="#555555" text-anchor="middle">111</text>

<rect x="642" y="164" width="48" height="36" fill="#CCCCCC" stroke="#000000" stroke-width="1"/>
<text x="666" y="180" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">P</text>
<text x="666" y="193" font-size="9" fill="#555555" text-anchor="middle">98</text>

<rect x="698" y="164" width="48" height="36" fill="#CCCCCC" stroke="#000000" stroke-width="1"/>
<text x="722" y="180" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">S</text>
<text x="722" y="193" font-size="9" fill="#555555" text-anchor="middle">88</text>

<rect x="754" y="164" width="48" height="36" fill="#BBBBBB" stroke="#000000" stroke-width="1"/>
<text x="778" y="180" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Cl</text>
<text x="778" y="193" font-size="9" fill="#555555" text-anchor="middle">79</text>

<rect x="866" y="164" width="48" height="36" fill="#AAAAAA" stroke="#000000" stroke-width="1"/>
<text x="890" y="180" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Ar</text>
<text x="890" y="193" font-size="9" fill="#555555" text-anchor="middle">71</text>

<!-- Period 4 selected: K(243), Ca(194) -->
<rect x="50" y="202" width="48" height="36" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="74" y="218" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">K</text>
<text x="74" y="231" font-size="9" fill="#555555" text-anchor="middle">243</text>

<rect x="106" y="202" width="48" height="36" fill="#F5F5F5" stroke="#000000" stroke-width="1"/>
<text x="130" y="218" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Ca</text>
<text x="130" y="231" font-size="9" fill="#555555" text-anchor="middle">194</text>

<!-- showArrows: trend arrows -->
<!-- Across-period arrow (left to right = decreasing) -->
<line x1="130" y1="290" x2="880" y2="290" stroke="#000000" stroke-width="3" marker-end="url(#arrow)"/>
<text x="505" y="310" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Decreasing atomic radius →</text>
<text x="505" y="328" font-size="11" fill="#555555" text-anchor="middle">More protons → greater nuclear charge → electrons pulled closer</text>

<!-- Down-group arrow -->
<line x1="30" y1="120" x2="30" y2="248" stroke="#000000" stroke-width="3" marker-end="url(#arrow)"/>
<text x="22" y="190" font-size="11" fill="#000000" text-anchor="middle" transform="rotate(-90,22,190)">Increasing radius ↓</text>

<!-- showExplanation -->
<rect x="50" y="355" width="900" height="110" fill="#F5F5F5" stroke="#AAAAAA" rx="4"/>
<text x="500" y="375" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Explanation of Trends</text>
<text x="70" y="397" font-size="12" fill="#000000" font-weight="bold">Across a period (→):</text>
<text x="70" y="414" font-size="11" fill="#000000">Nuclear charge increases (+1 proton each element) while electrons added to same shell. Greater attraction pulls electrons inward → radius decreases.</text>
<text x="70" y="435" font-size="12" fill="#000000" font-weight="bold">Down a group (↓):</text>
<text x="70" y="452" font-size="11" fill="#000000">Each period adds a new electron shell farther from nucleus. Shielding by inner electrons reduces effective nuclear charge on valence shell → radius increases.</text>

<!-- Shade key -->
<rect x="50" y="490" width="900" height="40" fill="none" stroke="#AAAAAA" rx="4"/>
<text x="70" y="508" font-size="12" fill="#000000" font-weight="bold">Shade key:</text>
<rect x="170" y="492" width="30" height="22" fill="#FFFFFF" stroke="#000000"/>
<text x="205" y="508" font-size="11" fill="#000000">Largest radius</text>
<rect x="290" y="492" width="30" height="22" fill="#CCCCCC" stroke="#000000"/>
<text x="325" y="508" font-size="11" fill="#000000">Medium</text>
<rect x="400" y="492" width="30" height="22" fill="#888888" stroke="#000000"/>
<text x="435" y="508" font-size="11" fill="#000000">Smallest radius</text>
<text x="570" y="508" font-size="11" fill="#555555">(Values in picometres, pm = 10⁻¹² m)</text>

</g>
</svg>`;

    // Registry key: electronAffinityDiagram
    // element: Chlorine
    // options: showEnergyLevel, showElectronAddition, showEnergyChange
    static electronAffinityDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Electron Affinity - Chlorine</metadata>
<defs>
  <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>
<g font-family="Arial" fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Electron Affinity — Chlorine</text>
<text x="400" y="57" font-size="13" fill="#555555" text-anchor="middle">Cl(g) + e⁻ → Cl⁻(g)   ΔH = −349 kJ mol⁻¹</text>

<!-- Energy axis (vertical) -->
<line x1="150" y1="80" x2="150" y2="500" stroke="#000000" stroke-width="2"/>
<text x="60" y="295" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,60,295)">Energy</text>
<!-- axis ticks -->
<line x1="145" y1="180" x2="155" y2="180" stroke="#000000" stroke-width="1.5"/>
<line x1="145" y1="320" x2="155" y2="320" stroke="#000000" stroke-width="1.5"/>
<line x1="145" y1="420" x2="155" y2="420" stroke="#000000" stroke-width="1.5"/>
<text x="143" y="184" font-size="11" fill="#555555" text-anchor="end">high</text>
<text x="143" y="324" font-size="11" fill="#555555" text-anchor="end">0</text>
<text x="143" y="424" font-size="11" fill="#555555" text-anchor="end">low</text>

<!-- showEnergyLevel: Cl(g) + e⁻  at y=320 (reference zero) -->
<line x1="180" y1="320" x2="420" y2="320" stroke="#000000" stroke-width="3"/>
<text x="300" y="312" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Cl(g) + e⁻</text>

<!-- showEnergyChange: Cl⁻(g) at y=420 (lower energy, exothermic) -->
<line x1="420" y1="420" x2="660" y2="420" stroke="#000000" stroke-width="3"/>
<text x="540" y="412" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Cl⁻(g)</text>

<!-- Reaction arrow (step down) -->
<line x1="420" y1="320" x2="420" y2="416" stroke="#000000" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#arrow)"/>

<!-- ΔH label -->
<text x="440" y="368" font-size="13" fill="#000000">ΔEA = −349 kJ mol⁻¹</text>
<text x="440" y="385" font-size="11" fill="#555555">(exothermic — energy released)</text>

<!-- Curly brace for energy difference -->
<path d="M 480,320 Q 498,320 498,370 Q 498,420 480,420" stroke="#000000" stroke-width="1.5" fill="none"/>

<!-- showElectronAddition: electron being added -->
<circle cx="240" cy="268" r="10" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="240" y="273" font-size="11" fill="#000000" text-anchor="middle">e⁻</text>
<line x1="240" y1="278" x2="270" y2="310" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arrow)"/>
<text x="195" y="260" font-size="11" fill="#000000">incoming electron</text>

<!-- Electron configuration diagram -->
<text x="540" y="480" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Cl: [Ne] 3s² 3p⁵ + e⁻ → [Ne] 3s² 3p⁶</text>

<!-- 3p orbitals before -->
<text x="230" y="530" font-size="12" fill="#000000">Before:</text>
<rect x="290" y="512" width="34" height="30" stroke="#000000" stroke-width="1.5"/>
<line x1="301" y1="537" x2="301" y2="520" stroke="#000000" stroke-width="2"/>
<polygon points="298,524 301,514 304,524" fill="#000000" stroke="none"/>
<line x1="313" y1="518" x2="313" y2="535" stroke="#000000" stroke-width="2"/>
<polygon points="310,531 313,540 316,531" fill="#000000" stroke="none"/>

<rect x="330" y="512" width="34" height="30" stroke="#000000" stroke-width="1.5"/>
<line x1="341" y1="537" x2="341" y2="520" stroke="#000000" stroke-width="2"/>
<polygon points="338,524 341,514 344,524" fill="#000000" stroke="none"/>
<line x1="353" y1="518" x2="353" y2="535" stroke="#000000" stroke-width="2"/>
<polygon points="350,531 353,540 356,531" fill="#000000" stroke="none"/>

<!-- 3rd p box: half filled -->
<rect x="370" y="512" width="34" height="30" stroke="#000000" stroke-width="1.5"/>
<line x1="381" y1="537" x2="381" y2="520" stroke="#000000" stroke-width="2"/>
<polygon points="378,524 381,514 384,524" fill="#000000" stroke="none"/>
<text x="405" y="532" font-size="12" fill="#555555">3p⁵</text>

<!-- Arrow to after -->
<line x1="440" y1="527" x2="475" y2="527" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/>

<!-- After: 3p fully filled -->
<text x="488" y="530" font-size="12" fill="#000000">After:</text>
<rect x="535" y="512" width="34" height="30" stroke="#000000" stroke-width="1.5"/>
<line x1="546" y1="537" x2="546" y2="520" stroke="#000000" stroke-width="2"/>
<polygon points="543,524 546,514 549,524" fill="#000000" stroke="none"/>
<line x1="558" y1="518" x2="558" y2="535" stroke="#000000" stroke-width="2"/>
<polygon points="555,531 558,540 561,531" fill="#000000" stroke="none"/>
<rect x="575" y="512" width="34" height="30" stroke="#000000" stroke-width="1.5"/>
<line x1="586" y1="537" x2="586" y2="520" stroke="#000000" stroke-width="2"/>
<polygon points="583,524 586,514 589,524" fill="#000000" stroke="none"/>
<line x1="598" y1="518" x2="598" y2="535" stroke="#000000" stroke-width="2"/>
<polygon points="595,531 598,540 601,531" fill="#000000" stroke="none"/>
<rect x="615" y="512" width="34" height="30" stroke="#000000" stroke-width="1.5"/>
<line x1="626" y1="537" x2="626" y2="520" stroke="#000000" stroke-width="2"/>
<polygon points="623,524 626,514 629,524" fill="#000000" stroke="none"/>
<line x1="638" y1="518" x2="638" y2="535" stroke="#000000" stroke-width="2"/>
<polygon points="635,531 638,540 641,531" fill="#000000" stroke="none"/>
<text x="658" y="532" font-size="12" fill="#555555">3p⁶</text>

</g>
</svg>`;

    // ============================================================
    // ===== 2. CHEMICAL BONDING ==================================
    // ============================================================

    // Registry key: ionicBondingDiagram
    // compound: NaCl  cation: Na+  anion: Cl-
    // options: showElectronTransfer, showIons, showElectrostaticAttraction, showLattice=false
    static ionicBondingDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Ionic Bonding - NaCl</metadata>
<defs>
  <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>
<g font-family="Arial" fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Ionic Bonding — NaCl</text>
<text x="450" y="57" font-size="13" fill="#555555" text-anchor="middle">Electron transfer from Na to Cl forming Na⁺ and Cl⁻</text>

<!-- ==== Na atom (left) ==== -->
<text x="155" y="88" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Sodium Atom (Na)</text>
<!-- outer shell -->
<circle cx="155" cy="240" r="110" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<circle cx="155" cy="240" r="70"  stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<circle cx="155" cy="240" r="35"  stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<!-- nucleus -->
<circle cx="155" cy="240" r="22" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="155" y="244" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Na</text>
<!-- inner electrons -->
<circle cx="155" cy="205" r="5" fill="#000000"/>
<circle cx="155" cy="275" r="5" fill="#000000"/>
<!-- L shell 8e -->
<circle cx="225" cy="240" r="5" fill="#000000"/>
<circle cx="85"  cy="240" r="5" fill="#000000"/>
<circle cx="204" cy="191" r="5" fill="#000000"/>
<circle cx="106" cy="289" r="5" fill="#000000"/>
<circle cx="155" cy="170" r="5" fill="#000000"/>
<circle cx="155" cy="310" r="5" fill="#000000"/>
<circle cx="204" cy="289" r="5" fill="#000000"/>
<circle cx="106" cy="191" r="5" fill="#000000"/>
<!-- valence e highlighted -->
<circle cx="265" cy="240" r="8" fill="#000000"/>
<circle cx="265" cy="240" r="14" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,2"/>

<!-- ==== Arrow showing electron transfer ==== -->
<line x1="320" y1="240" x2="560" y2="240" stroke="#000000" stroke-width="2.5" stroke-dasharray="4,3" marker-end="url(#arrow)"/>
<text x="440" y="222" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">e⁻ transfer</text>

<!-- ==== Cl atom (right) ==== -->
<text x="730" y="88" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Chlorine Atom (Cl)</text>
<circle cx="730" cy="240" r="110" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<circle cx="730" cy="240" r="70"  stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<circle cx="730" cy="240" r="35"  stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<circle cx="730" cy="240" r="22" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="730" y="244" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Cl</text>
<!-- K 2e -->
<circle cx="730" cy="205" r="5" fill="#000000"/>
<circle cx="730" cy="275" r="5" fill="#000000"/>
<!-- L 8e -->
<circle cx="800" cy="240" r="5" fill="#000000"/>
<circle cx="660" cy="240" r="5" fill="#000000"/>
<circle cx="779" cy="191" r="5" fill="#000000"/>
<circle cx="681" cy="289" r="5" fill="#000000"/>
<circle cx="730" cy="170" r="5" fill="#000000"/>
<circle cx="730" cy="310" r="5" fill="#000000"/>
<circle cx="779" cy="289" r="5" fill="#000000"/>
<circle cx="681" cy="191" r="5" fill="#000000"/>
<!-- M shell 7e (one gap to receive Na's electron) -->
<circle cx="840" cy="240" r="5" fill="#000000"/>
<circle cx="819" cy="179" r="5" fill="#000000"/>
<circle cx="730" cy="130" r="5" fill="#000000"/>
<circle cx="641" cy="179" r="5" fill="#000000"/>
<circle cx="620" cy="240" r="5" fill="#000000"/>
<circle cx="641" cy="301" r="5" fill="#000000"/>
<circle cx="730" cy="350" r="5" fill="#000000"/>
<!-- gap highlighted (dashed circle at 819,301) -->
<circle cx="819" cy="301" r="8" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,2"/>

<!-- Result row -->
<text x="155" y="395" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Na⁺</text>
<text x="155" y="415" font-size="12" fill="#555555" text-anchor="middle">11p, 10e → +1 charge</text>
<text x="440" y="400" font-size="13" fill="#000000" text-anchor="middle">electrostatic attraction</text>
<!-- attraction arrows -->
<line x1="220" y1="420" x2="350" y2="440" stroke="#000000" stroke-width="2" stroke-dasharray="4,3"/>
<line x1="580" y1="440" x2="660" y2="420" stroke="#000000" stroke-width="2" stroke-dasharray="4,3"/>
<text x="730" y="395" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Cl⁻</text>
<text x="730" y="415" font-size="12" fill="#555555" text-anchor="middle">17p, 18e → −1 charge</text>

<!-- showElectrostaticAttraction: double-headed arrow between ions -->
<line x1="260" y1="460" x2="620" y2="460" stroke="#000000" stroke-width="2.5"/>
<polygon points="253,456 240,460 253,464" fill="#000000" stroke="none"/>
<polygon points="627,456 640,460 627,464" fill="#000000" stroke="none"/>
<text x="440" y="455" font-size="12" fill="#000000" text-anchor="middle">Ionic bond (electrostatic)</text>

<!-- Info box -->
<rect x="30" y="490" width="840" height="90" fill="#F5F5F5" stroke="#AAAAAA" rx="4"/>
<text x="450" y="512" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Ionic Bond Summary</text>
<text x="50" y="532" font-size="11" fill="#000000">• Metal (Na) loses electron → forms cation (Na⁺)  |  Non-metal (Cl) gains electron → forms anion (Cl⁻)</text>
<text x="50" y="550" font-size="11" fill="#000000">• Opposite charges attract: the electrostatic force between ions IS the ionic bond</text>
<text x="50" y="568" font-size="11" fill="#000000">• NaCl forms a giant ionic lattice (not discrete molecules) — high melting point, conducts when molten/dissolved</text>

</g>
</svg>`;

    // Registry key: covalentBondingDiagram
    // molecule: H2O  bondType: single
    // options: showElectronSharing, showLonePairs, showBondingPairs, showDotCross
    static covalentBondingDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Covalent Bonding - Water</metadata>
<g font-family="Arial" fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Covalent Bonding — Water (H₂O)</text>
<text x="400" y="57" font-size="13" fill="#555555" text-anchor="middle">Electron sharing to achieve full outer shells</text>

<!-- ===== Dot-cross diagram (showDotCross) ===== -->
<text x="400" y="90" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Dot-Cross Diagram</text>

<!-- Oxygen atom circle (centre) -->
<circle cx="400" cy="220" r="60" stroke="#000000" stroke-width="2"/>
<text x="400" y="225" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">O</text>

<!-- Oxygen's own electrons (dots ●): 6 valence electrons -->
<!-- Lone pair 1 (top) -->
<circle cx="375" cy="163" r="5" fill="#000000"/>
<circle cx="425" cy="163" r="5" fill="#000000"/>
<!-- Lone pair 2 (bottom) -->
<circle cx="375" cy="277" r="5" fill="#000000"/>
<circle cx="425" cy="277" r="5" fill="#000000"/>
<!-- 2 bonding electrons from O: left and right positions used by H overlap -->

<!-- H atom LEFT -->
<circle cx="245" cy="220" r="40" stroke="#000000" stroke-width="2"/>
<text x="245" y="225" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">H</text>

<!-- H atom RIGHT -->
<circle cx="555" cy="220" r="40" stroke="#000000" stroke-width="2"/>
<text x="555" y="225" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">H</text>

<!-- showBondingPairs: shared electron pairs in overlap regions -->
<!-- Left O–H bond: O electron (dot) + H electron (cross) -->
<circle cx="310" cy="220" r="5" fill="#000000"/>           <!-- O electron (dot) -->
<text x="332" y="225" font-size="14" fill="#000000">×</text> <!-- H electron (cross) -->

<!-- Right O–H bond -->
<circle cx="478" cy="220" r="5" fill="#000000"/>
<text x="496" y="225" font-size="14" fill="#000000">×</text>

<!-- showLonePairs: labels -->
<text x="400" y="148" font-size="11" fill="#000000" text-anchor="middle">lone pair</text>
<text x="400" y="300" font-size="11" fill="#000000" text-anchor="middle">lone pair</text>
<text x="400" y="134" font-size="11" fill="#555555" text-anchor="middle">(non-bonding)</text>

<!-- Bond angle reference line -->
<line x1="285" y1="220" x2="515" y2="220" stroke="#555555" stroke-width="1" stroke-dasharray="4,3"/>
<text x="400" y="215" font-size="10" fill="#555555" text-anchor="middle">—</text>

<!-- ===== Structural representation ===== -->
<text x="400" y="360" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Structural Formula</text>
<!-- H – O – H with bent geometry (104.5°) -->
<!-- O at 400,430; H-left at 320,470; H-right at 480,470 -->
<circle cx="400" cy="430" r="18" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="400" y="435" font-size="13" fill="#000000" text-anchor="middle">O</text>
<circle cx="310" cy="478" r="14" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="310" y="483" font-size="13" fill="#000000" text-anchor="middle">H</text>
<circle cx="490" cy="478" r="14" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="490" y="483" font-size="13" fill="#000000" text-anchor="middle">H</text>
<!-- bonds -->
<line x1="387" y1="444" x2="320" y2="466" stroke="#000000" stroke-width="2.5"/>
<line x1="413" y1="444" x2="480" y2="466" stroke="#000000" stroke-width="2.5"/>
<!-- bond angle arc -->
<path d="M 335,462 Q 400,430 465,462" stroke="#000000" stroke-width="1" fill="none" stroke-dasharray="3,2"/>
<text x="400" y="458" font-size="11" fill="#000000" text-anchor="middle">104.5°</text>
<!-- lone pair marks on O -->
<text x="372" y="420" font-size="13" fill="#000000">: :</text>

<!-- Info box -->
<rect x="30" y="515" width="740" height="70" fill="#F5F5F5" stroke="#AAAAAA" rx="4"/>
<text x="400" y="534" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Covalent Bond Key Points</text>
<text x="50" y="552" font-size="11" fill="#000000">• Each bond = 1 shared pair of electrons (one from each atom)</text>
<text x="50" y="568" font-size="11" fill="#000000">• O achieves full outer shell (8e).  Each H achieves 2e (helium configuration).  Lone pairs repel bonding pairs: bent shape.</text>

</g>
</svg>`;

    // Registry key: lewisStructureDiagram
    // molecule: CO2
    // options: showValenceElectrons, showBonds, showLonePairs, showFormalCharges=false
    static lewisStructureDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="500" viewBox="0 0 700 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>Lewis Structure - CO2</metadata>
<g font-family="Arial" fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Lewis Structure — CO₂</text>
<text x="350" y="57" font-size="13" fill="#555555" text-anchor="middle">Carbon dioxide: linear geometry, 16 valence electrons total</text>

<!-- Electron count -->
<text x="350" y="82" font-size="12" fill="#555555" text-anchor="middle">O (6e) + C (4e) + O (6e) = 16 valence electrons</text>

<!-- ===== Dot-cross / Lewis diagram ===== -->
<!-- O left: cx=130  C centre: cx=350  O right: cx=570 -->

<!-- Left O atom -->
<circle cx="130" cy="220" r="45" stroke="#000000" stroke-width="2"/>
<text x="130" y="225" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">O</text>

<!-- Left O lone pairs (2 pairs remaining) -->
<circle cx="82"  cy="198" r="4" fill="#000000"/><circle cx="70"  cy="214" r="4" fill="#000000"/>
<circle cx="82"  cy="242" r="4" fill="#000000"/><circle cx="70"  cy="226" r="4" fill="#000000"/>

<!-- C centre -->
<circle cx="350" cy="220" r="45" stroke="#000000" stroke-width="2"/>
<text x="350" y="225" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">C</text>

<!-- Right O atom -->
<circle cx="570" cy="220" r="45" stroke="#000000" stroke-width="2"/>
<text x="570" y="225" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">O</text>

<!-- Right O lone pairs -->
<circle cx="618" cy="198" r="4" fill="#000000"/><circle cx="630" cy="214" r="4" fill="#000000"/>
<circle cx="618" cy="242" r="4" fill="#000000"/><circle cx="630" cy="226" r="4" fill="#000000"/>

<!-- showBonds: double bonds as two parallel lines -->
<!-- Left C=O double bond -->
<line x1="178" y1="213" x2="302" y2="213" stroke="#000000" stroke-width="2.5"/>
<line x1="178" y1="227" x2="302" y2="227" stroke="#000000" stroke-width="2.5"/>

<!-- Right C=O double bond -->
<line x1="398" y1="213" x2="522" y2="213" stroke="#000000" stroke-width="2.5"/>
<line x1="398" y1="227" x2="522" y2="227" stroke="#000000" stroke-width="2.5"/>

<!-- Bond labels -->
<text x="240" y="205" font-size="11" fill="#555555" text-anchor="middle">double bond</text>
<text x="460" y="205" font-size="11" fill="#555555" text-anchor="middle">double bond</text>

<!-- showLonePairs: labelling -->
<text x="55" y="290" font-size="11" fill="#000000" text-anchor="middle">lone pairs (2)</text>
<text x="645" y="290" font-size="11" fill="#000000" text-anchor="middle">lone pairs (2)</text>

<!-- Structural formula row -->
<text x="350" y="340" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">O=C=O</text>
<text x="350" y="362" font-size="12" fill="#555555" text-anchor="middle">Linear molecule · Bond angle 180°</text>

<!-- Electron count check -->
<rect x="50" y="385" width="600" height="90" fill="#F5F5F5" stroke="#AAAAAA" rx="4"/>
<text x="350" y="405" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Electron Count Verification</text>
<text x="70" y="425" font-size="11" fill="#000000">Each O: 2 lone pairs (4e) + 2 bonding pairs shared (2e) = 8e ✓ (octet complete)</text>
<text x="70" y="443" font-size="11" fill="#000000">C: 4 bonding pairs shared = 8e ✓ (octet complete)</text>
<text x="70" y="461" font-size="11" fill="#000000">Total: 4 lone pairs × 2e + 2 double bonds × 4e = 8 + 8 = 16e ✓</text>

</g>
</svg>`;

    // Registry key: vsepirTheoryDiagram
    // molecule: CH4  geometry: tetrahedral
    // options: show3DShape, showBondAngles, showLonePairs, showElectronPairs
    static vsepirTheoryDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>VSEPR - Methane Tetrahedral</metadata>
<defs>
  <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0,8 3,0 6" fill="#000000"/>
  </marker>
</defs>
<g font-family="Arial" fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">VSEPR Theory — Methane (CH₄)</text>
<text x="350" y="57" font-size="13" fill="#555555" text-anchor="middle">4 bonding pairs, 0 lone pairs → Tetrahedral geometry</text>

<!-- 3D tetrahedral representation -->
<!-- C at centre: 350,310 -->
<!-- H positions: top(350,170), front-left(220,410), front-right(480,410), back(350,420 with wedge) -->

<!-- Central C atom -->
<circle cx="350" cy="310" r="22" fill="#DDDDDD" stroke="#000000" stroke-width="2.5"/>
<text x="350" y="316" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">C</text>

<!-- Bond to H-top (normal line) -->
<line x1="350" y1="288" x2="350" y2="188" stroke="#000000" stroke-width="2.5"/>
<circle cx="350" cy="175" r="16" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="350" y="180" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">H</text>

<!-- Bond to H-left (solid wedge coming forward-left) -->
<!-- wedge: fat triangle -->
<polygon points="336,318 220,398 230,420" fill="#000000" stroke="none"/>
<circle cx="218" cy="412" r="16" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="218" y="417" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">H</text>

<!-- Bond to H-right (solid wedge coming forward-right) -->
<polygon points="364,318 480,398 470,420" fill="#000000" stroke="none"/>
<circle cx="482" cy="412" r="16" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="482" y="417" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">H</text>

<!-- Bond to H-back (dashed line going behind) -->
<line x1="350" y1="332" x2="350" y2="430" stroke="#000000" stroke-width="2" stroke-dasharray="6,4"/>
<circle cx="350" cy="445" r="16" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="350" y="450" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">H</text>

<!-- showBondAngles: 109.5° arc and label -->
<path d="M 335,185 Q 310,265 226,392" stroke="#000000" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
<text x="256" y="288" font-size="13" fill="#000000" font-weight="bold">109.5°</text>

<!-- Bond angle arc (H-top to H-right) -->
<path d="M 366,187 Q 430,265 470,395" stroke="#000000" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
<text x="455" y="280" font-size="13" fill="#000000" font-weight="bold">109.5°</text>

<!-- showElectronPairs: label each bond as bonding pair -->
<text x="303" y="240" font-size="10" fill="#555555">BP</text>
<text x="258" y="362" font-size="10" fill="#555555">BP</text>
<text x="432" y="362" font-size="10" fill="#555555">BP</text>
<text x="357" y="393" font-size="10" fill="#555555">BP</text>

<!-- Key: wedge notation -->
<rect x="30" y="490" width="310" height="80" fill="#F5F5F5" stroke="#AAAAAA" rx="4"/>
<text x="42" y="510" font-size="12" fill="#000000" font-weight="bold">3D Bond Notation:</text>
<line x1="42" y1="528" x2="95" y2="528" stroke="#000000" stroke-width="2.5"/>
<text x="105" y="532" font-size="11" fill="#000000">Ordinary bond (in plane)</text>
<polygon points="42,554 95,546 95,562" fill="#000000" stroke="none"/>
<text x="105" y="558" font-size="11" fill="#000000">Wedge bond (towards viewer)</text>
<line x1="42" y1="578" x2="95" y2="578" stroke="#000000" stroke-width="2" stroke-dasharray="6,4"/>
<text x="105" y="582" font-size="11" fill="#000000">Dashed bond (away from viewer)</text>

<!-- VSEPR Table for reference -->
<rect x="360" y="490" width="310" height="135" fill="#F5F5F5" stroke="#AAAAAA" rx="4"/>
<text x="515" y="510" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">VSEPR Shape Summary</text>
<text x="375" y="528" font-size="11" fill="#000000">BP=2, LP=0: Linear (180°)</text>
<text x="375" y="546" font-size="11" fill="#000000">BP=3, LP=0: Trigonal planar (120°)</text>
<text x="375" y="564" font-size="11" fill="#000000" font-weight="bold">BP=4, LP=0: Tetrahedral (109.5°) ← CH₄</text>
<text x="375" y="582" font-size="11" fill="#000000">BP=3, LP=1: Trigonal pyramidal (107°)</text>
<text x="375" y="600" font-size="11" fill="#000000">BP=2, LP=2: Bent/V-shape (104.5°)</text>
<text x="375" y="618" font-size="11" fill="#555555">BP=bonding pair  LP=lone pair</text>

</g>
</svg>`;

    // Registry key: polarityDiagram
    // molecule: H2O  polar: true
    // options: showDipoles, showPartialCharges, showNetDipole, showElectronegativity
    static polarityDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Molecular Polarity - Water</metadata>
<defs>
  <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
  <marker id="arrowLg" markerWidth="12" markerHeight="12" refX="11" refY="4" orient="auto">
    <polygon points="0 0,12 4,0 8" fill="#000000"/>
  </marker>
</defs>
<g font-family="Arial" fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Molecular Polarity — Water (H₂O)</text>
<text x="400" y="57" font-size="13" fill="#555555" text-anchor="middle">Net dipole moment ≠ 0 → polar molecule</text>

<!-- Molecule: bent shape  O at 400,240  H-left 295,310  H-right 505,310 -->
<!-- O atom -->
<circle cx="400" cy="240" r="28" fill="#DDDDDD" stroke="#000000" stroke-width="2.5"/>
<text x="400" y="246" font-size="17" fill="#000000" text-anchor="middle" font-weight="bold">O</text>

<!-- H atoms -->
<circle cx="285" cy="318" r="20" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="285" y="324" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">H</text>
<circle cx="515" cy="318" r="20" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="515" y="324" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">H</text>

<!-- Bonds -->
<line x1="380" y1="259" x2="300" y2="302" stroke="#000000" stroke-width="2.5"/>
<line x1="420" y1="259" x2="500" y2="302" stroke="#000000" stroke-width="2.5"/>

<!-- showPartialCharges: δ+ on H, δ- on O -->
<text x="258" y="310" font-size="16" fill="#000000" font-weight="bold">δ+</text>
<text x="530" y="310" font-size="16" fill="#000000" font-weight="bold">δ+</text>
<text x="404" y="210" font-size="16" fill="#000000" font-weight="bold">δ−</text>

<!-- showDipoles: individual bond dipole arrows pointing from δ+ to δ- (towards O) -->
<!-- Left H→O dipole arrow along bond -->
<line x1="298" y1="304" x2="372" y2="263" stroke="#000000" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrow)"/>
<text x="295" y="272" font-size="10" fill="#000000">μ₁</text>

<!-- Right H→O dipole arrow -->
<line x1="502" y1="304" x2="428" y2="263" stroke="#000000" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrow)"/>
<text x="510" y="272" font-size="10" fill="#000000">μ₂</text>

<!-- showNetDipole: resultant arrow pointing upward from O -->
<line x1="400" y1="208" x2="400" y2="138" stroke="#000000" stroke-width="4" marker-end="url(#arrowLg)"/>
<text x="415" y="170" font-size="13" fill="#000000" font-weight="bold">Net μ</text>
<text x="415" y="186" font-size="11" fill="#555555">(1.85 D)</text>

<!-- Bond angle -->
<path d="M 303,306 Q 400,260 497,306" stroke="#000000" stroke-width="1" fill="none" stroke-dasharray="4,3"/>
<text x="400" y="290" font-size="12" fill="#000000" text-anchor="middle">104.5°</text>

<!-- showElectronegativity: EN values -->
<text x="180" y="395" font-size="13" fill="#000000" font-weight="bold">Electronegativities (Pauling):</text>
<text x="180" y="416" font-size="13" fill="#000000">O = 3.44   H = 2.20   ΔEN = 1.24 (polar covalent)</text>

<!-- Comparison with CO2 (non-polar) -->
<rect x="30" y="440" width="740" height="130" fill="#F5F5F5" stroke="#AAAAAA" rx="4"/>
<text x="400" y="462" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Polar vs Non-Polar Comparison</text>

<!-- CO2 sketch -->
<text x="180" y="490" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">CO₂ (non-polar linear)</text>
<text x="110" y="515" font-size="11" fill="#000000">δ−  O=C=O  δ−</text>
<!-- dipoles cancel -->
<line x1="120" y1="528" x2="148" y2="528" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow)"/>
<line x1="196" y1="528" x2="168" y2="528" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow)"/>
<text x="158" y="545" font-size="10" fill="#555555" text-anchor="middle">dipoles cancel → μ=0</text>

<!-- Divider -->
<line x1="380" y1="455" x2="380" y2="560" stroke="#CCCCCC" stroke-width="1"/>

<text x="570" y="490" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">H₂O (polar bent)</text>
<text x="570" y="515" font-size="11" fill="#000000" text-anchor="middle">Asymmetric: dipoles add → μ≠0</text>
<text x="570" y="533" font-size="11" fill="#000000" text-anchor="middle">Polar molecule: solvent for ionic compounds</text>
<text x="570" y="551" font-size="11" fill="#555555" text-anchor="middle">ΔEN &gt; 1.7 = ionic;  0.4–1.7 = polar cov.;  &lt;0.4 = non-polar</text>

</g>
</svg>`;

    // Registry key: hybridizationDiagram
    // centralAtom: Carbon  hybridization: sp3
    // options: showAtomicOrbitals, showHybridOrbitals, showEnergyLevels, show3DShape
    static hybridizationDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="700" viewBox="0 0 900 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>sp3 Hybridization - Carbon</metadata>
<defs>
  <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>
<g font-family="Arial" fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">sp³ Hybridization — Carbon</text>
<text x="450" y="57" font-size="13" fill="#555555" text-anchor="middle">One 2s and three 2p orbitals mix to form four equivalent sp³ hybrid orbitals</text>

<!-- ===== Energy level diagram (showEnergyLevels) ===== -->
<!-- Left: unhybridised C    Right: hybridised C -->
<text x="200" y="90" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Unhybridised C</text>
<text x="680" y="90" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">sp³ Hybridised C</text>

<!-- 2p level (higher energy) y=170 -->
<text x="80" y="175" font-size="12" fill="#555555">2p</text>
<!-- 3 boxes for 2p -->
<rect x="110" y="152" width="40" height="36" stroke="#000000" stroke-width="1.5"/>
<line x1="125" y1="183" x2="125" y2="160" stroke="#000000" stroke-width="2"/>
<polygon points="121,165 125,153 129,165" fill="#000000" stroke="none"/>
<!-- 2px half-filled -->
<rect x="158" y="152" width="40" height="36" stroke="#000000" stroke-width="1.5"/>
<line x1="173" y1="183" x2="173" y2="160" stroke="#000000" stroke-width="2"/>
<polygon points="169,165 173,153 177,165" fill="#000000" stroke="none"/>
<!-- 2py half-filled -->
<rect x="206" y="152" width="40" height="36" stroke="#000000" stroke-width="1.5"/>
<!-- 2pz empty -->

<!-- 2s level y=240 -->
<text x="80" y="255" font-size="12" fill="#555555">2s</text>
<rect x="158" y="232" width="40" height="36" stroke="#000000" stroke-width="1.5"/>
<line x1="170" y1="263" x2="170" y2="240" stroke="#000000" stroke-width="2"/>
<polygon points="166,245 170,233 174,245" fill="#000000" stroke="none"/>
<line x1="184" y1="237" x2="184" y2="260" stroke="#000000" stroke-width="2"/>
<polygon points="180,255 184,267 188,255" fill="#000000" stroke="none"/>

<!-- Arrow: hybridisation -->
<line x1="300" y1="220" x2="430" y2="220" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow)"/>
<text x="365" y="210" font-size="12" fill="#000000" text-anchor="middle">hybridise</text>
<text x="365" y="240" font-size="11" fill="#555555" text-anchor="middle">(mix 1s + 3p)</text>

<!-- 4 sp3 orbitals (all same energy, y=200) -->
<text x="570" y="185" font-size="12" fill="#555555">sp³</text>
<!-- 4 boxes each with one electron (promote + hybridise) -->
<rect x="590" y="185" width="40" height="36" stroke="#000000" stroke-width="1.5"/>
<line x1="605" y1="216" x2="605" y2="193" stroke="#000000" stroke-width="2"/>
<polygon points="601,198 605,186 609,198" fill="#000000" stroke="none"/>
<rect x="638" y="185" width="40" height="36" stroke="#000000" stroke-width="1.5"/>
<line x1="653" y1="216" x2="653" y2="193" stroke="#000000" stroke-width="2"/>
<polygon points="649,198 653,186 657,198" fill="#000000" stroke="none"/>
<rect x="686" y="185" width="40" height="36" stroke="#000000" stroke-width="1.5"/>
<line x1="701" y1="216" x2="701" y2="193" stroke="#000000" stroke-width="2"/>
<polygon points="697,198 701,186 705,198" fill="#000000" stroke="none"/>
<rect x="734" y="185" width="40" height="36" stroke="#000000" stroke-width="1.5"/>
<line x1="749" y1="216" x2="749" y2="193" stroke="#000000" stroke-width="2"/>
<polygon points="745,198 749,186 753,198" fill="#000000" stroke="none"/>

<!-- ===== showAtomicOrbitals: orbital shape diagrams ===== -->
<text x="200" y="310" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Atomic Orbitals Mixed</text>

<!-- 2s sphere -->
<circle cx="100" cy="380" r="30" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="100" y="385" font-size="12" fill="#000000" text-anchor="middle">2s</text>

<text x="143" y="385" font-size="16" fill="#000000">+</text>

<!-- 2px dumbbell -->
<ellipse cx="178" cy="368" rx="15" ry="28" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<ellipse cx="178" cy="393" rx="15" ry="28" fill="#CCCCCC" stroke="#000000" stroke-width="1.5"/>
<text x="178" y="433" font-size="11" fill="#555555" text-anchor="middle">2px</text>

<text x="208" y="385" font-size="16" fill="#000000">+</text>

<!-- 2py dumbbell (horizontal) -->
<ellipse cx="227" cy="380" rx="28" ry="12" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<ellipse cx="255" cy="380" rx="28" ry="12" fill="#CCCCCC" stroke="#000000" stroke-width="1.5"/>
<text x="241" y="433" font-size="11" fill="#555555" text-anchor="middle">2py</text>

<text x="290" y="385" font-size="16" fill="#000000">+</text>

<!-- 2pz dumbbell (diagonal suggest) -->
<ellipse cx="318" cy="365" rx="18" ry="28" fill="#EEEEEE" stroke="#000000" stroke-width="1.5" transform="rotate(30,318,380)"/>
<ellipse cx="318" cy="395" rx="18" ry="28" fill="#CCCCCC" stroke="#000000" stroke-width="1.5" transform="rotate(30,318,380)"/>
<text x="318" y="433" font-size="11" fill="#555555" text-anchor="middle">2pz</text>

<!-- Arrow to hybrid -->
<line x1="360" y1="380" x2="420" y2="380" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow)"/>

<!-- showHybridOrbitals: 4 sp3 lobes -->
<text x="550" y="310" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">4 sp³ Hybrid Orbitals</text>
<text x="550" y="328" font-size="11" fill="#555555" text-anchor="middle">(equal energy, 109.5° apart)</text>
<!-- 4 teardrop-shaped orbitals pointing tetrahedrally -->
<!-- Top -->
<ellipse cx="550" cy="348" rx="18" ry="38" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="550" y="350" font-size="10" fill="#000000" text-anchor="middle">sp³</text>
<!-- Left -->
<ellipse cx="490" cy="400" rx="38" ry="18" fill="#EEEEEE" stroke="#000000" stroke-width="2" transform="rotate(-30,490,400)"/>
<text x="466" y="410" font-size="10" fill="#000000">sp³</text>
<!-- Right -->
<ellipse cx="610" cy="400" rx="38" ry="18" fill="#EEEEEE" stroke="#000000" stroke-width="2" transform="rotate(30,610,400)"/>
<text x="618" y="410" font-size="10" fill="#000000">sp³</text>
<!-- Bottom -->
<ellipse cx="550" cy="435" rx="18" ry="38" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="550" y="445" font-size="10" fill="#000000" text-anchor="middle">sp³</text>
<!-- nucleus -->
<circle cx="550" cy="398" r="8" fill="#000000"/>

<!-- show3DShape: methane tetrahedral sketch -->
<text x="450" y="510" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Resulting Shape: Tetrahedral (CH₄)</text>
<circle cx="450" cy="560" r="15" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="450" y="565" font-size="11" fill="#000000" text-anchor="middle">C</text>
<line x1="450" y1="545" x2="450" y2="520" stroke="#000000" stroke-width="2"/>
<circle cx="450" cy="512" r="10" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<text x="450" y="516" font-size="10" fill="#000000" text-anchor="middle">H</text>
<polygon points="438,565 380,600 388,616" fill="#000000" stroke="none"/>
<circle cx="375" cy="610" r="10" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<text x="375" y="614" font-size="10" fill="#000000" text-anchor="middle">H</text>
<polygon points="462,565 520,600 512,616" fill="#000000" stroke="none"/>
<circle cx="525" cy="610" r="10" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<text x="525" y="614" font-size="10" fill="#000000" text-anchor="middle">H</text>
<line x1="450" y1="575" x2="450" y2="640" stroke="#000000" stroke-width="2" stroke-dasharray="6,3"/>
<circle cx="450" cy="650" r="10" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<text x="450" y="654" font-size="10" fill="#000000" text-anchor="middle">H</text>

<!-- Info note -->
<rect x="680" y="490" width="200" height="90" fill="#F5F5F5" stroke="#AAAAAA" rx="4"/>
<text x="780" y="510" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">sp³ Key Facts</text>
<text x="695" y="528" font-size="10" fill="#000000">• 1s + 3p → 4 sp³</text>
<text x="695" y="544" font-size="10" fill="#000000">• Bond angle: 109.5°</text>
<text x="695" y="560" font-size="10" fill="#000000">• Example: CH₄, NH₃, H₂O</text>
<text x="695" y="576" font-size="10" fill="#000000">• sp²: 120° (C₂H₄)</text>

</g>
</svg>`;

    // Registry key: molecularOrbitalDiagram
    // molecule: O2
    // options: showAtomicOrbitals, showMolecularOrbitals, showElectronFilling, showBondOrder
    static molecularOrbitalDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="700" viewBox="0 0 900 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Molecular Orbital Diagram - O2</metadata>
<g font-family="Arial" fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Molecular Orbital Diagram — O₂</text>
<text x="450" y="57" font-size="13" fill="#555555" text-anchor="middle">Bond order = 2 · Paramagnetic (2 unpaired electrons)</text>

<!-- Column headers -->
<text x="140" y="90" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">O atom (L)</text>
<text x="450" y="90" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Molecular Orbitals</text>
<text x="760" y="90" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">O atom (R)</text>

<!-- Energy axis -->
<line x1="45" y1="110" x2="45" y2="590" stroke="#000000" stroke-width="1.5"/>
<text x="28" y="350" font-size="12" fill="#000000" text-anchor="middle" transform="rotate(-90,28,350)">Energy</text>

<!-- showAtomicOrbitals: left O atomic levels -->
<!-- 2p (y=200) -->
<text x="60" y="205" font-size="11" fill="#555555">2p</text>
<line x1="80" y1="200" x2="200" y2="200" stroke="#000000" stroke-width="2"/>
<rect x="95" y="184" width="30" height="28" stroke="#000000" stroke-width="1.5"/>
<line x1="105" y1="207" x2="105" y2="190" stroke="#000000" stroke-width="2"/>
<polygon points="102,194 105,183 108,194" fill="#000000" stroke="none"/>
<line x1="118" y1="187" x2="118" y2="204" stroke="#000000" stroke-width="2"/>
<polygon points="115,200 118,210 121,200" fill="#000000" stroke="none"/>

<rect x="133" y="184" width="30" height="28" stroke="#000000" stroke-width="1.5"/>
<line x1="143" y1="207" x2="143" y2="190" stroke="#000000" stroke-width="2"/>
<polygon points="140,194 143,183 146,194" fill="#000000" stroke="none"/>
<line x1="156" y1="187" x2="156" y2="204" stroke="#000000" stroke-width="2"/>
<polygon points="153,200 156,210 159,200" fill="#000000" stroke="none"/>

<rect x="171" y="184" width="30" height="28" stroke="#000000" stroke-width="1.5"/>
<line x1="181" y1="207" x2="181" y2="190" stroke="#000000" stroke-width="2"/>
<polygon points="178,194 181,183 184,194" fill="#000000" stroke="none"/>
<!-- last 2p box: 1 electron (3rd has only 1 for O) — actually O has 4 electrons in 2p: two paired and two singles per Hund -->
<!-- O 2p4: box1 paired, box2 single, box3 single -->
<!-- already drawn box1 paired above; box2,3 corrected to single -->

<!-- 2s (y=320) -->
<text x="60" y="325" font-size="11" fill="#555555">2s</text>
<line x1="80" y1="320" x2="200" y2="320" stroke="#000000" stroke-width="2"/>
<rect x="125" y="304" width="30" height="28" stroke="#000000" stroke-width="1.5"/>
<line x1="136" y1="327" x2="136" y2="310" stroke="#000000" stroke-width="2"/>
<polygon points="133,315 136,304 139,315" fill="#000000" stroke="none"/>
<line x1="148" y1="307" x2="148" y2="324" stroke="#000000" stroke-width="2"/>
<polygon points="145,320 148,330 151,320" fill="#000000" stroke="none"/>

<!-- Dashed lines from left AO to MO -->
<line x1="200" y1="200" x2="290" y2="265" stroke="#999999" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="200" y1="200" x2="290" y2="165" stroke="#999999" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="200" y1="320" x2="290" y2="400" stroke="#999999" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="200" y1="320" x2="290" y2="490" stroke="#999999" stroke-width="1" stroke-dasharray="4,3"/>

<!-- showMolecularOrbitals -->
<!-- σ*2p (antibonding, high energy y=120) -->
<text x="450" y="115" font-size="11" fill="#000000" text-anchor="middle">σ*2p (antibonding)</text>
<line x1="310" y1="130" x2="590" y2="130" stroke="#000000" stroke-width="2"/>
<rect x="425" y="114" width="50" height="28" stroke="#000000" stroke-width="1.5"/>

<!-- π*2p (antibonding, y=165) — degenerate pair -->
<text x="450" y="160" font-size="11" fill="#000000" text-anchor="middle">π*2p  (×2 degenerate)</text>
<line x1="310" y1="175" x2="590" y2="175" stroke="#000000" stroke-width="2"/>
<rect x="400" y="159" width="40" height="28" stroke="#000000" stroke-width="1.5"/>
<!-- showElectronFilling: 2 electrons in π* (one per box, Hund's) -->
<line x1="415" y1="182" x2="415" y2="165" stroke="#000000" stroke-width="2"/>
<polygon points="412,169 415,158 418,169" fill="#000000" stroke="none"/>
<rect x="450" y="159" width="40" height="28" stroke="#000000" stroke-width="1.5"/>
<line x1="465" y1="182" x2="465" y2="165" stroke="#000000" stroke-width="2"/>
<polygon points="462,169 465,158 468,169" fill="#000000" stroke="none"/>

<!-- π2p (bonding, y=255) — degenerate pair -->
<text x="450" y="250" font-size="11" fill="#000000" text-anchor="middle">π2p  (×2 degenerate)</text>
<line x1="310" y1="265" x2="590" y2="265" stroke="#000000" stroke-width="2"/>
<rect x="400" y="249" width="40" height="28" stroke="#000000" stroke-width="1.5"/>
<line x1="412" y1="272" x2="412" y2="255" stroke="#000000" stroke-width="2"/>
<polygon points="409,259 412,248 415,259" fill="#000000" stroke="none"/>
<line x1="428" y1="252" x2="428" y2="269" stroke="#000000" stroke-width="2"/>
<polygon points="425,265 428,275 431,265" fill="#000000" stroke="none"/>
<rect x="450" y="249" width="40" height="28" stroke="#000000" stroke-width="1.5"/>
<line x1="462" y1="272" x2="462" y2="255" stroke="#000000" stroke-width="2"/>
<polygon points="459,259 462,248 465,259" fill="#000000" stroke="none"/>
<line x1="478" y1="252" x2="478" y2="269" stroke="#000000" stroke-width="2"/>
<polygon points="475,265 478,275 481,265" fill="#000000" stroke="none"/>

<!-- σ2p (bonding, y=330) -->
<text x="450" y="325" font-size="11" fill="#000000" text-anchor="middle">σ2p (bonding)</text>
<line x1="310" y1="340" x2="590" y2="340" stroke="#000000" stroke-width="2"/>
<rect x="425" y="324" width="50" height="28" stroke="#000000" stroke-width="1.5"/>
<line x1="438" y1="347" x2="438" y2="330" stroke="#000000" stroke-width="2"/>
<polygon points="435,334 438,323 441,334" fill="#000000" stroke="none"/>
<line x1="462" y1="327" x2="462" y2="344" stroke="#000000" stroke-width="2"/>
<polygon points="459,340 462,350 465,340" fill="#000000" stroke="none"/>

<!-- σ*2s (antibonding, y=415) -->
<text x="450" y="410" font-size="11" fill="#000000" text-anchor="middle">σ*2s (antibonding)</text>
<line x1="310" y1="425" x2="590" y2="425" stroke="#000000" stroke-width="2"/>
<rect x="425" y="409" width="50" height="28" stroke="#000000" stroke-width="1.5"/>
<line x1="438" y1="432" x2="438" y2="415" stroke="#000000" stroke-width="2"/>
<polygon points="435,419 438,408 441,419" fill="#000000" stroke="none"/>
<line x1="462" y1="412" x2="462" y2="429" stroke="#000000" stroke-width="2"/>
<polygon points="459,425 462,435 465,425" fill="#000000" stroke="none"/>

<!-- σ2s (bonding, y=490) -->
<text x="450" y="485" font-size="11" fill="#000000" text-anchor="middle">σ2s (bonding)</text>
<line x1="310" y1="500" x2="590" y2="500" stroke="#000000" stroke-width="2"/>
<rect x="425" y="484" width="50" height="28" stroke="#000000" stroke-width="1.5"/>
<line x1="438" y1="507" x2="438" y2="490" stroke="#000000" stroke-width="2"/>
<polygon points="435,494 438,483 441,494" fill="#000000" stroke="none"/>
<line x1="462" y1="487" x2="462" y2="504" stroke="#000000" stroke-width="2"/>
<polygon points="459,500 462,510 465,500" fill="#000000" stroke="none"/>

<!-- Right O atomic levels (mirror) -->
<text x="700" y="205" font-size="11" fill="#555555">2p</text>
<line x1="700" y1="200" x2="820" y2="200" stroke="#000000" stroke-width="2"/>
<rect x="710" y="184" width="30" height="28" stroke="#000000" stroke-width="1.5"/>
<line x1="721" y1="207" x2="721" y2="190" stroke="#000000" stroke-width="2"/>
<polygon points="718,194 721,183 724,194" fill="#000000" stroke="none"/>
<line x1="734" y1="187" x2="734" y2="204" stroke="#000000" stroke-width="2"/>
<polygon points="731,200 734,210 737,200" fill="#000000" stroke="none"/>
<rect x="748" y="184" width="30" height="28" stroke="#000000" stroke-width="1.5"/>
<line x1="759" y1="207" x2="759" y2="190" stroke="#000000" stroke-width="2"/>
<polygon points="756,194 759,183 762,194" fill="#000000" stroke="none"/>
<line x1="772" y1="187" x2="772" y2="204" stroke="#000000" stroke-width="2"/>
<polygon points="769,200 772,210 775,200" fill="#000000" stroke="none"/>
<rect x="786" y="184" width="30" height="28" stroke="#000000" stroke-width="1.5"/>
<line x1="797" y1="207" x2="797" y2="190" stroke="#000000" stroke-width="2"/>
<polygon points="794,194 797,183 800,194" fill="#000000" stroke="none"/>

<text x="700" y="325" font-size="11" fill="#555555">2s</text>
<line x1="700" y1="320" x2="820" y2="320" stroke="#000000" stroke-width="2"/>
<rect x="745" y="304" width="30" height="28" stroke="#000000" stroke-width="1.5"/>
<line x1="756" y1="327" x2="756" y2="310" stroke="#000000" stroke-width="2"/>
<polygon points="753,315 756,304 759,315" fill="#000000" stroke="none"/>
<line x1="768" y1="307" x2="768" y2="324" stroke="#000000" stroke-width="2"/>
<polygon points="765,320 768,330 771,320" fill="#000000" stroke="none"/>

<!-- Dashed lines right AO → MO -->
<line x1="700" y1="200" x2="610" y2="265" stroke="#999999" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="700" y1="200" x2="610" y2="165" stroke="#999999" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="700" y1="320" x2="610" y2="400" stroke="#999999" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="700" y1="320" x2="610" y2="490" stroke="#999999" stroke-width="1" stroke-dasharray="4,3"/>

<!-- showBondOrder -->
<rect x="30" y="610" width="840" height="70" fill="#F5F5F5" stroke="#AAAAAA" rx="4"/>
<text x="450" y="632" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Bond Order Calculation</text>
<text x="50" y="652" font-size="12" fill="#000000">Bonding e⁻: σ2s(2) + σ2p(2) + π2p(4) = 8   |   Antibonding e⁻: σ*2s(2) + π*2p(2) = 4</text>
<text x="50" y="672" font-size="12" fill="#000000">Bond Order = (8 − 4) / 2 = 2  (double bond)   |   2 unpaired e⁻ in π*2p → O₂ is PARAMAGNETIC</text>

</g>
</svg>`;

    // Registry key: hydrogenBondingDiagram
    // molecules: water
    // options: showMolecules, showHydrogenBonds, showDipoles, showPartialCharges
    static hydrogenBondingDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Hydrogen Bonding - Water</metadata>
<defs>
  <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>
<g font-family="Arial" fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Hydrogen Bonding — Water</text>
<text x="450" y="57" font-size="13" fill="#555555" text-anchor="middle">Intermolecular H-bonds between δ+ H and lone pair on δ− O</text>

<!-- ===== Water molecule 1 (top-left) ===== -->
<!-- O at 220,180  H-L at 155,230  H-R at 285,230 -->
<circle cx="220" cy="180" r="22" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="220" y="186" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">O</text>
<circle cx="148" cy="230" r="15" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="148" y="235" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">H</text>
<circle cx="292" cy="230" r="15" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="292" y="235" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">H</text>
<line x1="205" y1="196" x2="160" y2="220" stroke="#000000" stroke-width="2.5"/>
<line x1="235" y1="196" x2="280" y2="220" stroke="#000000" stroke-width="2.5"/>
<!-- showPartialCharges -->
<text x="134" y="222" font-size="12" fill="#000000">δ+</text>
<text x="298" y="222" font-size="12" fill="#000000">δ+</text>
<text x="226" y="158" font-size="12" fill="#000000">δ−</text>
<!-- lone pairs on O1 (top) -->
<text x="196" y="162" font-size="12" fill="#000000">: :</text>

<!-- showDipoles: arrow pointing from H (δ+) to O (δ-) along bond -->
<line x1="160" y1="224" x2="204" y2="198" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arrow)"/>

<!-- ===== Water molecule 2 (right) — H-bond acceptor ===== -->
<!-- O at 550,280  H-L at 485,330  H-R at 615,330 -->
<circle cx="550" cy="280" r="22" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="550" y="286" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">O</text>
<circle cx="478" cy="330" r="15" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="478" y="335" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">H</text>
<circle cx="622" cy="330" r="15" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="622" y="335" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">H</text>
<line x1="535" y1="296" x2="490" y2="320" stroke="#000000" stroke-width="2.5"/>
<line x1="565" y1="296" x2="610" y2="320" stroke="#000000" stroke-width="2.5"/>
<text x="464" y="322" font-size="12" fill="#000000">δ+</text>
<text x="628" y="322" font-size="12" fill="#000000">δ+</text>
<text x="556" y="258" font-size="12" fill="#000000">δ−</text>
<text x="526" y="262" font-size="12" fill="#000000">: :</text>

<!-- ===== Water molecule 3 (bottom) ===== -->
<circle cx="330" cy="420" r="22" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="330" cy="426" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">O</text>
<text x="330" y="427" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">O</text>
<circle cx="265" cy="468" r="15" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="265" y="473" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">H</text>
<circle cx="395" cy="468" r="15" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="395" y="473" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">H</text>
<line x1="315" y1="436" x2="273" y2="458" stroke="#000000" stroke-width="2.5"/>
<line x1="345" y1="436" x2="387" y2="458" stroke="#000000" stroke-width="2.5"/>
<text x="251" y="458" font-size="12" fill="#000000">δ+</text>
<text x="401" y="458" font-size="12" fill="#000000">δ+</text>
<text x="336" y="400" font-size="12" fill="#000000">δ−</text>
<text x="306" y="408" font-size="12" fill="#000000">: :</text>

<!-- showHydrogenBonds: dashed lines between molecules -->
<!-- H-bond 1: H of mol1 (right H, 292,230) to lone pair on O of mol2 (550,280) -->
<line x1="305" y1="230" x2="528" y2="270" stroke="#000000" stroke-width="2" stroke-dasharray="8,5"/>
<text x="415" y="248" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">H···O</text>
<text x="415" y="264" font-size="10" fill="#555555" text-anchor="middle">hydrogen bond</text>

<!-- H-bond 2: H of mol2 (left H, 478,330) to lone pair on O of mol3 (330,420) -->
<line x1="465" y1="338" x2="344" y2="408" stroke="#000000" stroke-width="2" stroke-dasharray="8,5"/>
<text x="396" y="380" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">H···O</text>

<!-- H-bond 3: H of mol1 (left H, 148,230) to O of mol3 (330,420) slightly diagonal -->
<line x1="155" y1="240" x2="312" y2="408" stroke="#000000" stroke-width="2" stroke-dasharray="8,5"/>

<!-- Info box -->
<rect x="30" y="510" width="840" height="70" fill="#F5F5F5" stroke="#AAAAAA" rx="4"/>
<text x="450" y="530" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Hydrogen Bond Requirements & Properties</text>
<text x="50" y="550" font-size="11" fill="#000000">• Requires: H bonded to N, O, or F (highly electronegative) + lone pair on N, O, or F of adjacent molecule</text>
<text x="50" y="568" font-size="11" fill="#000000">• Energy: ~20 kJ mol⁻¹ (stronger than London/dipole-dipole; weaker than covalent ~400 kJ mol⁻¹)</text>
<text x="50" y="586" font-size="11" fill="#000000">• Consequences: high bp of H₂O (100°C vs −62°C expected), ice less dense than water, DNA base pairing</text>

</g>
</svg>`;

    // Registry key: intermolecularForcesDiagram
    // options: showLondonForces, showDipoleDipole, showHydrogenBonding, showStrengthComparison
    static intermolecularForcesDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Types of Intermolecular Forces</metadata>
<defs>
  <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>
<g font-family="Arial" fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="35" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Types of Intermolecular Forces</text>
<text x="500" y="57" font-size="13" fill="#555555" text-anchor="middle">London dispersion · Dipole–dipole · Hydrogen bonding</text>

<!-- Divider lines -->
<line x1="333" y1="70" x2="333" y2="530" stroke="#CCCCCC" stroke-width="1"/>
<line x1="666" y1="70" x2="666" y2="530" stroke="#CCCCCC" stroke-width="1"/>

<!-- ===== 1. London Dispersion Forces ===== -->
<text x="167" y="88" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">London Dispersion</text>
<text x="167" y="106" font-size="11" fill="#555555" text-anchor="middle">(van der Waals, induced dipole)</text>

<!-- Instantaneous dipole -->
<text x="167" y="140" font-size="12" fill="#000000" text-anchor="middle">Instantaneous dipole:</text>
<!-- atom 1: electron cloud shifted left -->
<ellipse cx="110" cy="195" rx="42" ry="30" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<ellipse cx="95" cy="190" rx="22" ry="16" fill="#CCCCCC" stroke="none"/>
<text x="110" y="199" font-size="12" fill="#000000" text-anchor="middle">He</text>
<text x="80" y="183" font-size="11" fill="#000000">δ−</text>
<text x="130" y="183" font-size="11" fill="#000000">δ+</text>
<!-- arrow showing dipole direction -->
<line x1="82" y1="210" x2="102" y2="210" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow)"/>

<!-- atom 2: induced opposite dipole -->
<ellipse cx="224" cy="195" rx="42" ry="30" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<ellipse cx="239" cy="190" rx="22" ry="16" fill="#CCCCCC" stroke="none"/>
<text x="224" y="199" font-size="12" fill="#000000" text-anchor="middle">He</text>
<text x="238" y="183" font-size="11" fill="#000000">δ−</text>
<text x="198" y="183" font-size="11" fill="#000000">δ+</text>
<!-- attraction dashed line -->
<line x1="155" y1="195" x2="180" y2="195" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
<text x="167" y="243" font-size="11" fill="#000000" text-anchor="middle">attractive interaction</text>

<!-- Time-averaged -->
<text x="167" y="275" font-size="12" fill="#000000" text-anchor="middle">Time-averaged: symmetric</text>
<ellipse cx="110" cy="310" rx="42" ry="30" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="110" y="315" font-size="12" fill="#000000" text-anchor="middle">He</text>
<ellipse cx="224" cy="310" rx="42" ry="30" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="224" y="315" font-size="12" fill="#000000" text-anchor="middle">He</text>
<line x1="155" y1="310" x2="180" y2="310" stroke="#000000" stroke-width="1" stroke-dasharray="3,3"/>
<text x="167" y="355" font-size="11" fill="#555555" text-anchor="middle">No permanent dipole</text>

<!-- Key facts -->
<rect x="30" y="370" width="275" height="90" fill="#F5F5F5" stroke="#AAAAAA" rx="3"/>
<text x="42" y="390" font-size="11" fill="#000000" font-weight="bold">London / LDF:</text>
<text x="42" y="408" font-size="10" fill="#000000">• All molecules (non-polar too)</text>
<text x="42" y="424" font-size="10" fill="#000000">• Increases with molar mass / size</text>
<text x="42" y="440" font-size="10" fill="#000000">• Due to temporary electron fluctuations</text>
<text x="42" y="456" font-size="10" fill="#000000">• Weakest of the three (typically &lt;5 kJ/mol)</text>

<!-- ===== 2. Dipole–Dipole ===== -->
<text x="500" y="88" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Dipole–Dipole</text>
<text x="500" y="106" font-size="11" fill="#555555" text-anchor="middle">(permanent dipoles)</text>

<text x="500" y="140" font-size="12" fill="#000000" text-anchor="middle">Aligned arrangement (lower energy):</text>
<!-- HCl molecule 1 -->
<circle cx="385" cy="195" r="20" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="385" y="200" font-size="12" fill="#000000" text-anchor="middle">H</text>
<circle cx="430" cy="195" r="20" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="430" y="200" font-size="12" fill="#000000" text-anchor="middle">Cl</text>
<line x1="405" y1="195" x2="410" y2="195" stroke="#000000" stroke-width="2"/>
<text x="385" y="175" font-size="11" fill="#000000">δ+</text>
<text x="428" y="175" font-size="11" fill="#000000">δ−</text>
<!-- attraction to molecule 2 -->
<line x1="452" y1="195" x2="470" y2="195" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
<!-- HCl molecule 2 -->
<circle cx="490" cy="195" r="20" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="490" y="200" font-size="12" fill="#000000" text-anchor="middle">H</text>
<circle cx="535" cy="195" r="20" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="535" y="200" font-size="12" fill="#000000" text-anchor="middle">Cl</text>
<line x1="510" y1="195" x2="515" y2="195" stroke="#000000" stroke-width="2"/>
<text x="490" y="175" font-size="11" fill="#000000">δ+</text>
<text x="533" y="175" font-size="11" fill="#000000">δ−</text>
<!-- dipole arrows -->
<line x1="395" y1="212" x2="422" y2="212" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow)"/>
<line x1="500" y1="212" x2="527" y2="212" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow)"/>
<text x="500" y="240" font-size="11" fill="#000000" text-anchor="middle">δ+ end attracted to δ− end</text>

<!-- Repulsive arrangement -->
<text x="500" y="275" font-size="12" fill="#000000" text-anchor="middle">Anti-parallel (higher energy):</text>
<circle cx="385" cy="310" r="20" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="385" y="315" font-size="12" fill="#000000" text-anchor="middle">H</text>
<circle cx="430" cy="310" r="20" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="430" y="315" font-size="12" fill="#000000" text-anchor="middle">Cl</text>
<line x1="405" y1="310" x2="410" y2="310" stroke="#000000" stroke-width="2"/>
<circle cx="535" cy="310" r="20" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="535" y="315" font-size="12" fill="#000000" text-anchor="middle">H</text>
<circle cx="490" cy="310" r="20" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="490" y="315" font-size="12" fill="#000000" text-anchor="middle">Cl</text>
<line x1="510" y1="310" x2="515" y2="310" stroke="#000000" stroke-width="2"/>
<!-- repulsion zigzag -->
<line x1="452" y1="310" x2="468" y2="310" stroke="#000000" stroke-width="2" stroke-dasharray="2,2"/>
<text x="500" y="348" font-size="11" fill="#555555" text-anchor="middle">repulsive (δ− close to δ−)</text>

<rect x="363" y="370" width="275" height="90" fill="#F5F5F5" stroke="#AAAAAA" rx="3"/>
<text x="375" y="390" font-size="11" fill="#000000" font-weight="bold">Dipole–Dipole:</text>
<text x="375" y="408" font-size="10" fill="#000000">• Polar molecules only</text>
<text x="375" y="424" font-size="10" fill="#000000">• Permanent δ+/δ− attractions</text>
<text x="375" y="440" font-size="10" fill="#000000">• Stronger than London forces alone</text>
<text x="375" y="456" font-size="10" fill="#000000">• Example: HCl, SO₂, CH₃Cl (~2–20 kJ/mol)</text>

<!-- ===== 3. Hydrogen Bonding ===== -->
<text x="833" y="88" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Hydrogen Bonding</text>
<text x="833" y="106" font-size="11" fill="#555555" text-anchor="middle">(special dipole-dipole)</text>

<text x="833" y="140" font-size="12" fill="#000000" text-anchor="middle">H–F···H–F example:</text>
<!-- HF molecule 1 -->
<circle cx="725" cy="195" r="15" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="725" y="200" font-size="12" fill="#000000" text-anchor="middle">H</text>
<circle cx="768" cy="195" r="20" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="768" y="200" font-size="12" fill="#000000" text-anchor="middle">F</text>
<line x1="740" y1="195" x2="748" y2="195" stroke="#000000" stroke-width="2"/>
<text x="725" y="177" font-size="12" fill="#000000">δ+</text>
<text x="768" y="177" font-size="12" fill="#000000">δ−</text>
<!-- lone pair dots on F -->
<circle cx="754" cy="180" r="3" fill="#000000"/>
<circle cx="782" cy="180" r="3" fill="#000000"/>

<!-- H-bond (dashed, short distance) -->
<line x1="790" y1="195" x2="818" y2="195" stroke="#000000" stroke-width="2.5" stroke-dasharray="6,4"/>
<text x="804" y="214" font-size="10" fill="#000000" text-anchor="middle">H-bond</text>

<!-- HF molecule 2 -->
<circle cx="838" cy="195" r="15" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="838" y="200" font-size="12" fill="#000000" text-anchor="middle">H</text>
<circle cx="880" cy="195" r="20" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="880" y="200" font-size="12" fill="#000000" text-anchor="middle">F</text>
<line x1="853" y1="195" x2="860" y2="195" stroke="#000000" stroke-width="2"/>
<text x="838" y="177" font-size="12" fill="#000000">δ+</text>
<text x="880" y="177" font-size="12" fill="#000000">δ−</text>
<circle cx="866" cy="180" r="3" fill="#000000"/>
<circle cx="895" cy="180" r="3" fill="#000000"/>

<!-- Condition label -->
<text x="833" y="255" font-size="11" fill="#000000" text-anchor="middle">Requires: H bonded to N, O, or F</text>
<text x="833" y="270" font-size="11" fill="#000000" text-anchor="middle">+ lone pair on adjacent N/O/F</text>

<!-- DNA / water note -->
<text x="833" y="300" font-size="11" fill="#555555" text-anchor="middle">Examples: H₂O, HF, NH₃, DNA</text>

<rect x="696" y="370" width="275" height="90" fill="#F5F5F5" stroke="#AAAAAA" rx="3"/>
<text x="708" y="390" font-size="11" fill="#000000" font-weight="bold">Hydrogen Bonding:</text>
<text x="708" y="408" font-size="10" fill="#000000">• N–H, O–H, or F–H donor</text>
<text x="708" y="424" font-size="10" fill="#000000">• Lone pair acceptor N, O, F</text>
<text x="708" y="440" font-size="10" fill="#000000">• Strongest intermolecular force</text>
<text x="708" y="456" font-size="10" fill="#000000">• ~10–40 kJ/mol; explains H₂O anomalies</text>

<!-- showStrengthComparison: bar chart -->
<text x="500" y="555" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Relative Strength Comparison</text>
<!-- Bars: London=1, Dipole=2, H-bond=4 (relative) -->
<text x="160" y="578" font-size="12" fill="#000000" text-anchor="middle">London</text>
<rect x="100" y="560" width="120" height="18" fill="#AAAAAA" stroke="#000000" stroke-width="1"/>
<text x="230" y="575" font-size="11" fill="#000000">~1–5 kJ/mol</text>

<text x="480" y="578" font-size="12" fill="#000000" text-anchor="middle">Dipole–Dipole</text>
<rect x="380" y="556" width="200" height="18" fill="#777777" stroke="#000000" stroke-width="1"/>
<text x="590" y="571" font-size="11" fill="#000000">~2–20 kJ/mol</text>

<text x="800" y="578" font-size="12" fill="#000000" text-anchor="middle">H-Bonding</text>
<rect x="700" y="552" width="260" height="18" fill="#444444" stroke="#000000" stroke-width="1"/>
<text x="968" y="567" font-size="11" fill="#000000">~10–40</text>

<text x="500" y="605" font-size="11" fill="#555555" text-anchor="middle">All IMFs are weaker than covalent bonds (~200–400 kJ/mol) — they affect physical properties, not molecular formula</text>

</g>
</svg>`;

    // Registry key: crystalLatticeDiagram
    // compound: NaCl  latticeType: face-centered cubic
    // options: show3DStructure, showUnitCell, showIons, showCoordinationNumber
    static crystalLatticeDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="800" viewBox="0 0 800 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>NaCl Crystal Lattice</metadata>
<g font-family="Arial" fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">NaCl Crystal Lattice</text>
<text x="400" y="57" font-size="13" fill="#555555" text-anchor="middle">Face-centred cubic arrangement · Giant ionic lattice</text>

<!-- ===== 3D Isometric unit cell ===== -->
<!-- Using isometric projection: right=+x 60°, back=+y 120°, up=+z 90° -->
<!-- Base cube: front-bottom-left origin at (200,520) edge=140px -->
<!-- Isometric offsets: right: (+140,0), up: (0,-140), back: (-70,-49) approx 30° -->

<!-- Lattice edges (back) -->
<line x1="200" y1="520" x2="130" y2="471" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<line x1="340" y1="520" x2="270" y2="471" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<line x1="130" y1="471" x2="270" y2="471" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<line x1="200" y1="380" x2="130" y2="331" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<line x1="130" y1="471" x2="130" y2="331" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<line x1="270" y1="471" x2="270" y2="331" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<line x1="130" y1="331" x2="270" y2="331" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>

<!-- Lattice edges (front) -->
<line x1="200" y1="520" x2="340" y2="520" stroke="#000000" stroke-width="2"/>
<line x1="340" y1="520" x2="340" y2="380" stroke="#000000" stroke-width="2"/>
<line x1="340" y1="380" x2="200" y2="380" stroke="#000000" stroke-width="2"/>
<line x1="200" y1="380" x2="200" y2="520" stroke="#000000" stroke-width="2"/>
<!-- top face front edges -->
<line x1="200" y1="380" x2="270" y2="331" stroke="#000000" stroke-width="2"/>
<line x1="340" y1="380" x2="270" y2="331" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<line x1="340" y1="520" x2="270" y2="471" stroke="#000000" stroke-width="2"/>

<!-- ===== showIons: Cl⁻ (large, hollow) at corners + Na⁺ (small, filled) at edge centres ===== -->
<!-- Corner ions (Cl⁻ large r=16): 8 corners of cube -->
<!-- front-bottom-left(200,520) front-bottom-right(340,520) front-top-left(200,380) front-top-right(340,380) -->
<!-- back-bottom-left(130,471) back-bottom-right(270,471) back-top-left(130,331) back-top-right(270,331) -->
<circle cx="200" cy="520" r="16" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<circle cx="340" cy="520" r="16" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<circle cx="200" cy="380" r="16" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<circle cx="340" cy="380" r="16" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<circle cx="130" cy="471" r="16" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<circle cx="270" cy="471" r="16" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<circle cx="130" cy="331" r="16" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<circle cx="270" cy="331" r="16" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>

<!-- Na⁺ ions (small r=10, filled) at edge midpoints -->
<!-- front face edges midpoints: (270,520),(340,450),(270,380),(200,450) -->
<circle cx="270" cy="520" r="10" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<circle cx="340" cy="450" r="10" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<circle cx="270" cy="380" r="10" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<circle cx="200" cy="450" r="10" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<!-- face centre: (270,450) -->
<circle cx="270" cy="450" r="10" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<!-- body centre (unit cell): (235,450) approx -->
<circle cx="235" cy="450" r="10" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>

<!-- showUnitCell: unit cell outline already drawn above -->
<!-- highlight with thick outline note -->
<text x="90" y="560" font-size="11" fill="#000000">Unit cell</text>
<line x1="100" y1="555" x2="185" y2="530" stroke="#000000" stroke-width="1" stroke-dasharray="3,2"/>

<!-- Ion labels -->
<text x="130" y="485" font-size="12" fill="#000000">Cl⁻</text>
<text x="232" y="445" font-size="11" fill="#000000">Na⁺</text>

<!-- showCoordinationNumber: label with 6 arrows -->
<text x="540" y="240" font-size="14" fill="#000000" font-weight="bold">Coordination Number = 6</text>
<text x="540" y="260" font-size="12" fill="#555555">Each ion surrounded by 6 of opposite charge</text>
<!-- Central Na+ -->
<circle cx="590" cy="340" r="12" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<text x="590" y="344" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>
<!-- 6 Cl- around it (top, bottom, left, right, front, back representations) -->
<circle cx="590" cy="280" r="16" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="590" y="284" font-size="9" fill="#000000" text-anchor="middle">Cl⁻</text>
<circle cx="590" cy="400" r="16" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="590" y="404" font-size="9" fill="#000000" text-anchor="middle">Cl⁻</text>
<circle cx="530" cy="340" r="16" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="530" y="344" font-size="9" fill="#000000" text-anchor="middle">Cl⁻</text>
<circle cx="650" cy="340" r="16" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="650" y="344" font-size="9" fill="#000000" text-anchor="middle">Cl⁻</text>
<circle cx="560" cy="312" r="14" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<text x="560" y="316" font-size="8" fill="#000000" text-anchor="middle">Cl⁻</text>
<circle cx="620" cy="368" r="14" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<text x="620" y="372" font-size="8" fill="#000000" text-anchor="middle">Cl⁻</text>
<!-- bond lines -->
<line x1="590" y1="328" x2="590" y2="298" stroke="#000000" stroke-width="1.5"/>
<line x1="590" y1="352" x2="590" y2="382" stroke="#000000" stroke-width="1.5"/>
<line x1="578" y1="340" x2="548" y2="340" stroke="#000000" stroke-width="1.5"/>
<line x1="602" y1="340" x2="632" y2="340" stroke="#000000" stroke-width="1.5"/>
<line x1="582" y1="332" x2="570" y2="320" stroke="#000000" stroke-width="1.5"/>
<line x1="598" y1="348" x2="612" y2="360" stroke="#000000" stroke-width="1.5"/>

<!-- Info box -->
<rect x="30" y="640" width="740" height="140" fill="#F5F5F5" stroke="#AAAAAA" rx="4"/>
<text x="400" y="662" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">NaCl Lattice Properties</text>
<text x="50" y="682" font-size="11" fill="#000000">• Giant ionic lattice: alternating Na⁺ and Cl⁻ ions extending in all 3 dimensions</text>
<text x="50" y="700" font-size="11" fill="#000000">• Ratio Na⁺ : Cl⁻ = 1:1 (empirical formula NaCl)</text>
<text x="50" y="718" font-size="11" fill="#000000">• Each ion has 6 nearest neighbours of opposite charge (octahedral, CN=6)</text>
<text x="50" y="736" font-size="11" fill="#000000">• High melting point (801°C): strong electrostatic forces hold lattice together</text>
<text x="50" y="754" font-size="11" fill="#000000">• Conducts electricity when molten or dissolved (ions free to move); solid does not conduct</text>

</g>
</svg>`;

    // Registry key: metallicBondingDiagram
    // metal: Sodium
    // options: showCations, showElectronSea, showDelocalization, showProperties
    static metallicBondingDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Metallic Bonding - Electron Sea</metadata>
<defs>
  <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0,8 3,0 6" fill="#000000"/>
  </marker>
</defs>
<g font-family="Arial" fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Metallic Bonding — Electron Sea Model</text>
<text x="450" y="57" font-size="13" fill="#555555" text-anchor="middle">Delocalised electrons surround a lattice of positive metal ions</text>

<!-- showElectronSea: grey background representing sea of electrons -->
<rect x="40" y="75" width="640" height="420" fill="#EEEEEE" stroke="#000000" stroke-width="2" rx="8"/>
<text x="360" y="98" font-size="13" fill="#000000" text-anchor="middle" font-style="italic">Sea of delocalised electrons (e⁻)</text>

<!-- showCations: grid of Na+ ions (3×3) -->
<!-- cx positions: 120,240,360,480,600  cy positions: 160,270,380,490 -->
<!-- Row 1 -->
<circle cx="130" cy="165" r="30" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="130" y="161" font-size="11" fill="#000000" text-anchor="middle">Na⁺</text>
<text x="130" y="175" font-size="9" fill="#555555" text-anchor="middle">11p, 10e</text>

<circle cx="250" cy="165" r="30" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="250" y="161" font-size="11" fill="#000000" text-anchor="middle">Na⁺</text>
<text x="250" y="175" font-size="9" fill="#555555" text-anchor="middle">11p, 10e</text>

<circle cx="370" cy="165" r="30" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="370" y="161" font-size="11" fill="#000000" text-anchor="middle">Na⁺</text>
<text x="370" y="175" font-size="9" fill="#555555" text-anchor="middle">11p, 10e</text>

<circle cx="490" cy="165" r="30" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="490" y="161" font-size="11" fill="#000000" text-anchor="middle">Na⁺</text>
<text x="490" y="175" font-size="9" fill="#555555" text-anchor="middle">11p, 10e</text>

<circle cx="610" cy="165" r="30" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="610" y="161" font-size="11" fill="#000000" text-anchor="middle">Na⁺</text>
<text x="610" y="175" font-size="9" fill="#555555" text-anchor="middle">11p, 10e</text>

<!-- Row 2 -->
<circle cx="130" cy="290" r="30" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="130" y="286" font-size="11" fill="#000000" text-anchor="middle">Na⁺</text>
<circle cx="250" cy="290" r="30" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="250" y="286" font-size="11" fill="#000000" text-anchor="middle">Na⁺</text>
<circle cx="370" cy="290" r="30" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="370" y="286" font-size="11" fill="#000000" text-anchor="middle">Na⁺</text>
<circle cx="490" cy="290" r="30" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="490" y="286" font-size="11" fill="#000000" text-anchor="middle">Na⁺</text>
<circle cx="610" cy="290" r="30" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="610" y="286" font-size="11" fill="#000000" text-anchor="middle">Na⁺</text>

<!-- Row 3 -->
<circle cx="130" cy="415" r="30" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="130" y="411" font-size="11" fill="#000000" text-anchor="middle">Na⁺</text>
<circle cx="250" cy="415" r="30" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="250" y="411" font-size="11" fill="#000000" text-anchor="middle">Na⁺</text>
<circle cx="370" cy="415" r="30" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="370" y="411" font-size="11" fill="#000000" text-anchor="middle">Na⁺</text>
<circle cx="490" cy="415" r="30" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="490" y="411" font-size="11" fill="#000000" text-anchor="middle">Na⁺</text>
<circle cx="610" cy="415" r="30" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="610" y="411" font-size="11" fill="#000000" text-anchor="middle">Na⁺</text>

<!-- showDelocalization: electrons scattered randomly between ions with directional arrows -->
<circle cx="190" cy="227" r="5" fill="#000000"/>
<line x1="196" y1="224" x2="218" y2="220" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow)"/>

<circle cx="310" cy="200" r="5" fill="#000000"/>
<line x1="315" y1="197" x2="340" y2="185" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow)"/>

<circle cx="430" cy="240" r="5" fill="#000000"/>
<line x1="436" y1="244" x2="460" y2="255" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow)"/>

<circle cx="185" cy="355" r="5" fill="#000000"/>
<line x1="180" y1="352" x2="158" y2="340" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow)"/>

<circle cx="320" cy="340" r="5" fill="#000000"/>
<line x1="326" y1="337" x2="350" y2="325" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow)"/>

<circle cx="540" cy="350" r="5" fill="#000000"/>
<line x1="545" y1="347" x2="568" y2="338" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow)"/>

<circle cx="200" cy="480" r="5" fill="#000000"/>
<line x1="205" y1="477" x2="228" y2="465" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow)"/>

<circle cx="450" cy="470" r="5" fill="#000000"/>
<line x1="444" y1="468" x2="420" y2="460" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow)"/>

<circle cx="570" cy="480" r="5" fill="#000000"/>
<line x1="576" y1="478" x2="598" y2="470" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow)"/>

<!-- e- labels -->
<text x="178" y="222" font-size="10" fill="#000000">e⁻</text>
<text x="298" y="196" font-size="10" fill="#000000">e⁻</text>
<text x="418" y="236" font-size="10" fill="#000000">e⁻</text>
<text x="173" y="350" font-size="10" fill="#000000">e⁻</text>
<text x="308" y="336" font-size="10" fill="#000000">e⁻</text>
<text x="528" y="346" font-size="10" fill="#000000">e⁻</text>

<!-- showProperties panel -->
<rect x="695" y="75" width="185" height="420" fill="#F5F5F5" stroke="#AAAAAA" rx="4"/>
<text x="787" y="100" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Properties</text>
<text x="707" y="120" font-size="11" fill="#000000" font-weight="bold">Electrical conductivity:</text>
<text x="707" y="135" font-size="10" fill="#000000">Delocalised e⁻ flow</text>
<text x="707" y="148" font-size="10" fill="#000000">freely → conducts</text>

<text x="707" y="172" font-size="11" fill="#000000" font-weight="bold">Thermal conductivity:</text>
<text x="707" y="187" font-size="10" fill="#000000">Mobile e⁻ transfer</text>
<text x="707" y="200" font-size="10" fill="#000000">kinetic energy rapidly</text>

<text x="707" y="224" font-size="11" fill="#000000" font-weight="bold">Malleability:</text>
<text x="707" y="239" font-size="10" fill="#000000">Layers of ions slide;</text>
<text x="707" y="252" font-size="10" fill="#000000">e⁻ sea re-accommodates</text>

<text x="707" y="276" font-size="11" fill="#000000" font-weight="bold">Ductility:</text>
<text x="707" y="291" font-size="10" fill="#000000">Drawn into wire; non-</text>
<text x="707" y="304" font-size="10" fill="#000000">directional bonding</text>

<text x="707" y="328" font-size="11" fill="#000000" font-weight="bold">Lustre:</text>
<text x="707" y="343" font-size="10" fill="#000000">Free e⁻ reflect light</text>
<text x="707" y="356" font-size="10" fill="#000000">at surface</text>

<text x="707" y="380" font-size="11" fill="#000000" font-weight="bold">High melting point:</text>
<text x="707" y="395" font-size="10" fill="#000000">Strong electrostatic</text>
<text x="707" y="408" font-size="10" fill="#000000">attraction cation↔e⁻</text>
<text x="707" y="421" font-size="10" fill="#000000">sea throughout lattice</text>
<text x="707" y="446" font-size="10" fill="#555555">Transition metals:</text>
<text x="707" y="459" font-size="10" fill="#555555">d-electrons contribute</text>
<text x="707" y="472" font-size="10" fill="#555555">→ stronger/harder</text>

<!-- Summary -->
<rect x="40" y="510" width="640" height="70" fill="#F5F5F5" stroke="#AAAAAA" rx="4"/>
<text x="360" y="530" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Metallic Bond Summary</text>
<text x="55" y="550" font-size="11" fill="#000000">Na → Na⁺ + e⁻  (valence electron leaves ion, enters delocalised sea)</text>
<text x="55" y="567" font-size="11" fill="#000000">Bond = electrostatic attraction between Na⁺ cations and the surrounding sea of delocalised electrons (non-directional)</text>

</g>
</svg>`;

}

export { ChemistrySvgDiagrams };
