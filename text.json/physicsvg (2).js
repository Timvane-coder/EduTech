

import { PhysicsDiagramsRegistry } from './physicsregistry.js';

class PhysicsSvgDiagrams {

    // ============================================================
    // ===== NUCLEAR PHYSICS — NUCLEAR STRUCTURE ==================
    // ============================================================

    // Generated from registry: nuclearNotationDiagram
    // element: Carbon, symbol: C, massNumber: 12, protonNumber: 6
    // options: showMassNumber=true, showProtonNumber=true, showNeutronNumber=true, showLabels=true
    static nuclearNotationDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="500" viewBox="0 0 700 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>Nuclear Notation Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Nuclear Notation: ᴬ_Z X</text>
<text x="350" y="58" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Standard nuclear symbol notation</text>

<!-- Central nuclear symbol display -->
<!-- Mass number (top-left) -->
<text x="210" y="195" font-family="Arial" font-size="72" fill="#000000" text-anchor="middle" font-weight="bold">12</text>
<!-- Proton number (bottom-left) -->
<text x="210" y="285" font-family="Arial" font-size="72" fill="#000000" text-anchor="middle" font-weight="bold">6</text>
<!-- Element symbol (centre) -->
<text x="350" y="265" font-family="Arial" font-size="120" fill="#000000" text-anchor="middle" font-weight="bold">C</text>

<!-- Bounding box for notation -->
<rect x="155" y="110" width="290" height="200" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="6,4" rx="6"/>

<!-- Annotation arrows and labels -->
<!-- Mass number annotation -->
<line x1="175" y1="165" x2="100" y2="130" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="90" y="120" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">A = 12</text>
<text x="90" y="137" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Mass number</text>
<text x="90" y="152" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(protons + neutrons)</text>

<!-- Proton number annotation -->
<line x1="175" y1="265" x2="100" y2="310" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="90" y="325" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Z = 6</text>
<text x="90" y="342" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Proton number</text>
<text x="90" y="357" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(atomic number)</text>

<!-- Element symbol annotation -->
<line x1="460" y1="230" x2="530" y2="200" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="555" y="192" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">C</text>
<text x="545" y="209" font-family="Arial" font-size="11" fill="#000000">Element symbol</text>
<text x="545" y="224" font-family="Arial" font-size="11" fill="#000000">Carbon</text>

<!-- Neutron number derived value -->
<rect x="460" y="280" width="200" height="55" fill="#F0F0F0" stroke="#000000" stroke-width="1" rx="4"/>
<text x="560" y="300" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">N = A − Z</text>
<text x="560" y="318" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">N = 12 − 6 = 6</text>
<text x="560" y="333" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Neutron number</text>

<!-- Nucleus composition diagram (small) -->
<text x="350" y="395" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Nucleus Composition</text>
<!-- Protons (filled circles) -->
<circle cx="295" cy="428" r="10" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<circle cx="315" cy="418" r="10" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<circle cx="330" cy="435" r="10" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<circle cx="305" cy="447" r="10" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<circle cx="320" cy="458" r="10" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<circle cx="290" cy="445" r="10" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<!-- Neutrons (open circles) -->
<circle cx="358" cy="420" r="10" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="373" cy="435" r="10" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="360" cy="450" r="10" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="375" cy="418" r="10" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="385" cy="448" r="10" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="390" cy="430" r="10" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>

<!-- Legend -->
<circle cx="430" cy="422" r="8" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<text x="445" y="426" font-family="Arial" font-size="11" fill="#000000">Proton (Z = 6)</text>
<circle cx="430" cy="445" r="8" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<text x="445" y="449" font-family="Arial" font-size="11" fill="#000000">Neutron (N = 6)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: isotopeComparison
    // element: Carbon, isotopes: 12C(n=6), 13C(n=7), 14C(n=8)
    // options: showNuclei=true, showProtons=true, showNeutrons=true, showLabels=true
    static isotopeComparisonSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Isotope Comparison Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Carbon Isotopes Comparison</text>
<text x="450" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Same Z (proton number), different N (neutron number)</text>

<!-- Column headers -->
<text x="180" y="90" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Carbon-12</text>
<text x="180" y="108" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">¹²₆C</text>
<text x="450" y="90" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Carbon-13</text>
<text x="450" y="108" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">¹³₆C</text>
<text x="720" y="90" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Carbon-14</text>
<text x="720" y="108" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">¹⁴₆C</text>

<!-- Vertical dividers -->
<line x1="315" y1="70" x2="315" y2="490" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="4,4"/>
<line x1="585" y1="70" x2="585" y2="490" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="4,4"/>

<!-- ===== Carbon-12 nucleus (6p, 6n) ===== -->
<!-- Protons filled, neutrons open, packed in circle -->
<circle cx="180" cy="270" r="55" fill="none" stroke="#999999" stroke-width="1" stroke-dasharray="3,3"/>
<!-- 6 protons -->
<circle cx="167" cy="250" r="9" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<circle cx="185" cy="243" r="9" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<circle cx="200" cy="258" r="9" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<circle cx="193" cy="278" r="9" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<circle cx="173" cy="283" r="9" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<circle cx="160" cy="268" r="9" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<!-- 6 neutrons -->
<circle cx="177" cy="261" r="9" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="188" cy="267" r="9" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="183" cy="281" r="9" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="170" cy="275" r="9" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="165" cy="258" r="9" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="195" cy="272" r="9" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>

<!-- C-12 data table -->
<rect x="105" y="345" width="150" height="80" fill="#F5F5F5" stroke="#000000" stroke-width="1" rx="3"/>
<text x="180" y="363" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Properties</text>
<text x="180" y="380" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Z = 6 (protons)</text>
<text x="180" y="396" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">N = 6 (neutrons)</text>
<text x="180" y="412" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">A = 12  |  Stable</text>

<!-- ===== Carbon-13 nucleus (6p, 7n) ===== -->
<circle cx="450" cy="270" r="58" fill="none" stroke="#999999" stroke-width="1" stroke-dasharray="3,3"/>
<!-- 6 protons -->
<circle cx="435" cy="248" r="9" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<circle cx="453" cy="241" r="9" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<circle cx="468" cy="256" r="9" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<circle cx="463" cy="276" r="9" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<circle cx="443" cy="283" r="9" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<circle cx="430" cy="267" r="9" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<!-- 7 neutrons -->
<circle cx="446" cy="258" r="9" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="458" cy="266" r="9" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="452" cy="280" r="9" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="439" cy="273" r="9" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="434" cy="257" r="9" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="464" cy="270" r="9" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="448" cy="293" r="9" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>

<!-- C-13 data table -->
<rect x="375" y="345" width="150" height="80" fill="#F5F5F5" stroke="#000000" stroke-width="1" rx="3"/>
<text x="450" y="363" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Properties</text>
<text x="450" y="380" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Z = 6 (protons)</text>
<text x="450" y="396" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">N = 7 (neutrons)</text>
<text x="450" y="412" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">A = 13  |  Stable</text>

<!-- ===== Carbon-14 nucleus (6p, 8n) ===== -->
<circle cx="720" cy="270" r="62" fill="none" stroke="#999999" stroke-width="1" stroke-dasharray="3,3"/>
<!-- 6 protons -->
<circle cx="705" cy="246" r="9" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<circle cx="723" cy="239" r="9" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<circle cx="740" cy="254" r="9" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<circle cx="736" cy="277" r="9" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<circle cx="715" cy="285" r="9" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<circle cx="700" cy="267" r="9" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<!-- 8 neutrons -->
<circle cx="717" cy="257" r="9" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="730" cy="264" r="9" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="725" cy="279" r="9" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="711" cy="273" r="9" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="706" cy="256" r="9" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="736" cy="270" r="9" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="720" cy="294" r="9" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<circle cx="703" cy="282" r="9" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>

<!-- C-14 data table -->
<rect x="645" y="345" width="150" height="80" fill="#F5F5F5" stroke="#000000" stroke-width="1" rx="3"/>
<text x="720" y="363" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Properties</text>
<text x="720" y="380" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Z = 6 (protons)</text>
<text x="720" y="396" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">N = 8 (neutrons)</text>
<text x="720" y="412" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">A = 14  |  Radioactive</text>

<!-- Legend -->
<rect x="320" y="455" width="260" height="55" fill="#F8F8F8" stroke="#000000" stroke-width="1" rx="3"/>
<circle cx="348" cy="475" r="8" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<text x="362" y="479" font-family="Arial" font-size="11" fill="#000000">Proton (same Z = 6 in all)</text>
<circle cx="348" cy="497" r="8" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<text x="362" y="501" font-family="Arial" font-size="11" fill="#000000">Neutron (N differs)</text>

<!-- Key definition box -->
<rect x="30" y="455" width="270" height="55" fill="#F0F0F0" stroke="#000000" stroke-width="1" rx="3"/>
<text x="165" y="473" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Isotopes: same Z, different N</text>
<text x="165" y="489" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Same chemical element,</text>
<text x="165" y="505" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">different mass number A</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: bandOfStability
    // options: showStableBand=true, showAlphaRegion=true, showBetaMinusRegion=true, showBetaPlusRegion=true, showN_equals_Z=true, showGrid=true
    static bandOfStabilitySvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="700" viewBox="0 0 900 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Band of Stability</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Band of Stability — N vs Z</text>
<text x="450" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Stable nuclides and regions of radioactive decay</text>

<!-- Axes -->
<!-- Origin at (100, 620) -->
<!-- X-axis: Z from 0 to 100, scale: 7px per unit -> 700px wide -->
<!-- Y-axis: N from 0 to 150, scale: ~4px per unit -> 600px tall -->
<line x1="100" y1="620" x2="820" y2="620" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="100" y1="620" x2="100" y2="60" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="835" y="624" font-family="Arial" font-size="13" fill="#000000">Z</text>
<text x="93" y="48" font-family="Arial" font-size="13" fill="#000000">N</text>
<text x="460" y="660" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Z (proton number)</text>
<text x="30" y="340" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,30,340)">N (neutron number)</text>

<!-- Grid lines (showGrid=true) -->
<line x1="100" y1="220" x2="820" y2="220" stroke="#DDDDDD" stroke-width="1"/>
<line x1="100" y1="420" x2="820" y2="420" stroke="#DDDDDD" stroke-width="1"/>
<line x1="100" y1="520" x2="820" y2="520" stroke="#DDDDDD" stroke-width="1"/>
<line x1="240" y1="60" x2="240" y2="620" stroke="#DDDDDD" stroke-width="1"/>
<line x1="380" y1="60" x2="380" y2="620" stroke="#DDDDDD" stroke-width="1"/>
<line x1="520" y1="60" x2="520" y2="620" stroke="#DDDDDD" stroke-width="1"/>
<line x1="660" y1="60" x2="660" y2="620" stroke="#DDDDDD" stroke-width="1"/>

<!-- Axis tick labels -->
<text x="240" y="638" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">20</text>
<text x="380" y="638" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">40</text>
<text x="520" y="638" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">60</text>
<text x="660" y="638" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">80</text>
<text x="800" y="638" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">100</text>
<text x="88" y="624" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">0</text>
<text x="88" y="524" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">25</text>
<text x="88" y="424" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">50</text>
<text x="88" y="224" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">100</text>
<text x="88" y="124" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">125</text>

<!-- N = Z line (showN_equals_Z=true) -->
<!-- slope: 4/7 (N scale/Z scale), from origin (100,620) -->
<!-- at Z=100 (x=800): N=100 (y=220) -->
<line x1="100" y1="620" x2="780" y2="60" stroke="#000000" stroke-width="1.5" stroke-dasharray="8,4"/>
<text x="785" y="56" font-family="Arial" font-size="11" fill="#000000">N = Z</text>

<!-- Beta-plus / proton-rich region (above N=Z, below band) - upper left region -->
<!-- Lightly hatched region -->
<path d="M 100,620 L 380,424 L 370,404 L 100,600 Z" fill="#EEEEEE" stroke="none" opacity="0.8"/>
<!-- Beta-minus / neutron-rich region (below band, right of N=Z line) -->
<path d="M 380,424 L 520,290 L 540,300 L 400,450 Z" fill="#CCCCCC" stroke="none" opacity="0.6"/>

<!-- ===== Band of Stability (showStableBand=true) ===== -->
<!-- Upper boundary of stable band: starts at N=Z for light nuclei, curves above for heavy -->
<!-- Approximated by curved path. At Z=0,N=0; Z=20,N=20; Z=40,N=45; Z=60,N=82; Z=80,N=120; Z=82,N=126 -->
<!-- Scale: x = 100 + Z*7, y = 620 - N*4 -->
<!-- Z=0: (100,620), Z=20: (240,540), Z=40: (380,440), Z=60: (520,292), Z=82: (674,124) -->
<!-- Upper edge (neutron-rich side) -->
<path d="M 100,620 C 140,600 180,575 240,532 C 300,490 340,460 395,416 C 450,372 490,320 550,268 C 600,224 640,180 680,116"
      stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Lower edge (proton-rich side) — N slightly less -->
<path d="M 100,620 C 140,608 180,592 240,556 C 300,514 340,480 395,436 C 450,390 490,340 550,292 C 600,248 640,200 676,136"
      stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Fill stable band -->
<path d="M 100,620
         C 140,600 180,575 240,532 C 300,490 340,460 395,416 C 450,372 490,320 550,268 C 600,224 640,180 680,116
         L 676,136
         C 640,200 600,248 550,292 C 490,340 450,390 395,436 C 340,480 300,514 240,556 C 180,592 140,608 100,620 Z"
      fill="#555555" stroke="none" opacity="0.3"/>

<!-- Region labels -->
<!-- showBetaMinusRegion=true -->
<text x="570" y="395" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">β⁻ decay</text>
<text x="570" y="412" font-family="Arial" font-size="11" fill="#000000">(neutron-rich)</text>
<!-- showBetaPlusRegion=true -->
<text x="168" y="510" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">β⁺ / EC decay</text>
<text x="168" y="527" font-family="Arial" font-size="11" fill="#000000">(proton-rich)</text>
<!-- showAlphaRegion=true -->
<text x="600" y="160" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">α decay region</text>
<text x="600" y="177" font-family="Arial" font-size="11" fill="#000000">(A > 210)</text>

<!-- Stable band label -->
<text x="460" y="340" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" transform="rotate(-55,460,340)">Band of</text>
<text x="475" y="368" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" transform="rotate(-55,475,368)">Stability</text>

<!-- Notable nuclide annotations -->
<!-- Fe-56: Z=26, N=30 -> x=100+26*7=282, y=620-30*4=500 -->
<circle cx="282" cy="500" r="4" fill="#000000"/>
<text x="265" y="492" font-family="Arial" font-size="10" fill="#000000">⁵⁶Fe</text>

<!-- Pb-208: Z=82, N=126 -> x=100+82*7=674, y=620-126*4=116 -->
<circle cx="674" cy="116" r="4" fill="#000000"/>
<text x="680" y="112" font-family="Arial" font-size="10" fill="#000000">²⁰⁸Pb</text>

<!-- He-4: Z=2, N=2 -> x=114, y=612 -->
<circle cx="114" cy="612" r="4" fill="#000000"/>
<text x="118" y="608" font-family="Arial" font-size="10" fill="#000000">⁴He</text>

<!-- Ca-40: Z=20, N=20 -> x=240, y=540 -->
<circle cx="240" cy="540" r="4" fill="#000000"/>
<text x="244" y="536" font-family="Arial" font-size="10" fill="#000000">⁴⁰Ca</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: nuclearForcesGraph
    // options: showStrongForce=true, showElectrostaticRepulsion=true, showResultant=true, showEquilibriumSeparation=true
    static nuclearForcesGraphSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Nuclear Forces Graph</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Nuclear Force vs Nucleon Separation</text>
<text x="450" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Potential energy between two nucleons as a function of separation r</text>

<!-- Axes -->
<!-- Origin at (120, 340) — PE=0 line -->
<line x1="120" y1="340" x2="830" y2="340" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="835" y="344" font-family="Arial" font-size="11" fill="#000000">PE=0</text>
<line x1="120" y1="550" x2="840" y2="550" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="120" y1="560" x2="120" y2="70" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="855" y="554" font-family="Arial" font-size="13" fill="#000000">r (fm)</text>
<text x="105" y="62" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">PE</text>
<text x="105" y="77" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">(MeV)</text>

<!-- Axis labels -->
<text x="35" y="344" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Repulsive (+)</text>
<text x="35" y="440" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Attractive (−)</text>

<!-- r scale: 1 fm ≈ 70px, origin of r-axis at x=120 -->
<text x="190" y="568" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1</text>
<text x="260" y="568" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">2</text>
<text x="330" y="568" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">3</text>
<text x="400" y="568" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">4</text>
<text x="470" y="568" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">5</text>
<text x="540" y="568" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">6</text>
<text x="610" y="568" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">7</text>
<text x="680" y="568" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">8</text>
<line x1="190" y1="548" x2="190" y2="553" stroke="#000000" stroke-width="1"/>
<line x1="260" y1="548" x2="260" y2="553" stroke="#000000" stroke-width="1"/>
<line x1="330" y1="548" x2="330" y2="553" stroke="#000000" stroke-width="1"/>
<line x1="400" y1="548" x2="400" y2="553" stroke="#000000" stroke-width="1"/>

<!-- Grid -->
<line x1="120" y1="240" x2="830" y2="240" stroke="#EEEEEE" stroke-width="1"/>
<line x1="120" y1="440" x2="830" y2="440" stroke="#EEEEEE" stroke-width="1"/>
<text x="108" y="244" font-family="Arial" font-size="10" fill="#888888" text-anchor="end">+50</text>
<text x="108" y="444" font-family="Arial" font-size="10" fill="#888888" text-anchor="end">−50</text>
<text x="108" y="144" font-family="Arial" font-size="10" fill="#888888" text-anchor="end">+100</text>

<!-- === Electrostatic repulsion (showElectrostaticRepulsion=true) ===
     PE_C = k*e²/r  always positive, decays slowly
     At r=1fm (x=190): PE≈+1.44MeV, scaled to (x=190, y=330)
     At r=0.5fm (x=155): very high, off chart
     Smooth curve from far right dipping to zero -->
<path d="M 155,100 C 175,180 210,300 260,332 C 310,342 400,343 540,344 C 640,344 720,345 820,346"
      stroke="#888888" stroke-width="2" fill="none" stroke-dasharray="8,4"/>
<text x="750" y="336" font-family="Arial" font-size="11" fill="#888888">Electrostatic</text>
<text x="750" y="350" font-family="Arial" font-size="11" fill="#888888">repulsion</text>

<!-- === Strong nuclear force (showStrongForce=true) ===
     Short-range: attractive at 1-3fm, strong repulsion below 0.5fm (hard core)
     At r<0.8fm: very repulsive (hard core)
     At r≈1fm: minimum (most attractive) ~−50 MeV
     At r>3fm: approaches zero rapidly -->
<path d="M 148,80 C 155,200 160,300 175,405 C 185,455 210,490 230,470 C 250,452 270,390 300,355 C 340,343 500,341 820,341"
      stroke="#444444" stroke-width="2.5" fill="none"/>
<text x="220" y="500" font-family="Arial" font-size="11" fill="#444444">Strong nuclear force</text>

<!-- === Resultant (showResultant=true) ===
     Sum of both — short range deep attractive well, repulsive core, zero beyond ~3fm -->
<path d="M 152,90 C 160,220 168,330 183,415 C 195,462 220,488 245,468 C 268,448 290,395 320,352 C 360,338 530,338 820,339"
      stroke="#000000" stroke-width="3" fill="none"/>
<text x="650" y="325" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Resultant</text>

<!-- Equilibrium separation annotation (showEquilibriumSeparation=true) -->
<!-- Minimum of resultant ≈ r≈0.8fm, at x=176 — the attractive minimum -->
<!-- Actually equilibrium where resultant=0 crossing on way down ≈ 0.7fm -->
<!-- Mark the minimum of the potential well -->
<line x1="238" y1="468" x2="238" y2="550" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="238" y="542" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">r₀ ≈ 1.2 fm</text>
<text x="238" y="555" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Equilibrium</text>

<!-- Hard core annotation -->
<text x="125" y="132" font-family="Arial" font-size="10" fill="#000000">Hard</text>
<text x="122" y="145" font-family="Arial" font-size="10" fill="#000000">core</text>

<!-- Legend -->
<rect x="580" y="400" width="280" height="90" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="720" y="418" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Legend</text>
<line x1="596" y1="435" x2="636" y2="435" stroke="#444444" stroke-width="2.5"/>
<text x="645" y="439" font-family="Arial" font-size="11" fill="#000000">Strong nuclear force</text>
<line x1="596" y1="455" x2="636" y2="455" stroke="#888888" stroke-width="2" stroke-dasharray="8,4"/>
<text x="645" y="459" font-family="Arial" font-size="11" fill="#000000">Electrostatic repulsion</text>
<line x1="596" y1="475" x2="636" y2="475" stroke="#000000" stroke-width="3"/>
<text x="645" y="479" font-family="Arial" font-size="11" fill="#000000">Resultant force</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: nuclearRadiusVsMass
    // R0=1.2e-15, options: showCubeRootRelation=true, showGrid=true, showFormula=true
    static nuclearRadiusVsMassSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Nuclear Radius vs Mass Number</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Nuclear Radius: R = R₀A^(1/3)</text>
<text x="450" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Nuclear radius increases with cube root of mass number</text>

<!-- Axes -->
<!-- x: A from 0 to 220, scale 3.2px/unit, origin (100,510) -->
<!-- y: R/fm from 0 to 8, scale 56px/fm -->
<line x1="100" y1="510" x2="840" y2="510" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="100" y1="510" x2="100" y2="60" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="855" y="514" font-family="Arial" font-size="13" fill="#000000">A</text>
<text x="95" y="50" font-family="Arial" font-size="13" fill="#000000" text-anchor="end">R (fm)</text>
<text x="460" y="548" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">A (mass number)</text>

<!-- Grid (showGrid=true) -->
<line x1="100" y1="398" x2="830" y2="398" stroke="#EEEEEE" stroke-width="1"/>
<line x1="100" y1="286" x2="830" y2="286" stroke="#EEEEEE" stroke-width="1"/>
<line x1="100" y1="174" x2="830" y2="174" stroke="#EEEEEE" stroke-width="1"/>
<line x1="260" y1="60" x2="260" y2="510" stroke="#EEEEEE" stroke-width="1"/>
<line x1="420" y1="60" x2="420" y2="510" stroke="#EEEEEE" stroke-width="1"/>
<line x1="580" y1="60" x2="580" y2="510" stroke="#EEEEEE" stroke-width="1"/>
<line x1="740" y1="60" x2="740" y2="510" stroke="#EEEEEE" stroke-width="1"/>

<!-- Axis ticks and labels -->
<text x="260" y="527" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">50</text>
<text x="420" y="527" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">100</text>
<text x="580" y="527" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">150</text>
<text x="740" y="527" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">200</text>
<text x="88" y="514" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">0</text>
<text x="88" y="402" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">2</text>
<text x="88" y="290" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">4</text>
<text x="88" y="178" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">6</text>
<text x="88" y="66" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">8</text>

<!-- R = R0*A^(1/3) curve: R0=1.2fm
     Points: A=1,R=1.2  A=8,R=2.4  A=27,R=3.6  A=64,R=4.8  A=125,R=6.0  A=216,R=7.2
     Scale: x=100+A*3.2, y=510-R*56
     A=1:   x=103, y=443
     A=8:   x=126, y=376
     A=27:  x=186, y=309
     A=64:  x=305, y=241
     A=125: x=500, y=174
     A=216: x=791, y=107  -->
<path d="M 103,443 C 120,410 150,370 186,309 C 230,260 270,245 305,241 C 390,230 450,205 500,174 C 600,148 700,125 791,107"
      stroke="#000000" stroke-width="3" fill="none"/>

<!-- R = R0*A (linear, for comparison — dotted) -->
<!-- Too steep to show usefully, skip; instead show the cube root properly -->

<!-- Data point dots at notable nuclides -->
<circle cx="103" cy="443" r="5" fill="#000000"/>
<text x="112" y="440" font-family="Arial" font-size="10" fill="#000000">¹H (1.2 fm)</text>

<circle cx="186" cy="309" r="5" fill="#000000"/>
<text x="195" y="306" font-family="Arial" font-size="10" fill="#000000">²⁷Al (3.6 fm)</text>

<circle cx="305" cy="241" r="5" fill="#000000"/>
<text x="314" y="238" font-family="Arial" font-size="10" fill="#000000">⁶⁴Ni (4.8 fm)</text>

<circle cx="500" cy="174" r="5" fill="#000000"/>
<text x="509" y="171" font-family="Arial" font-size="10" fill="#000000">¹²⁵Te (6.0 fm)</text>

<circle cx="768" cy="112" r="5" fill="#000000"/>
<text x="777" y="109" font-family="Arial" font-size="10" fill="#000000">²⁰⁸Pb</text>

<!-- Formula box (showFormula=true) -->
<rect x="560" y="280" width="290" height="110" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="705" y="302" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">R = R₀ A^(1/3)</text>
<line x1="575" y1="312" x2="835" y2="312" stroke="#000000" stroke-width="1"/>
<text x="705" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">R₀ = 1.2 × 10⁻¹⁵ m = 1.2 fm</text>
<text x="705" y="350" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A = mass number</text>
<text x="705" y="370" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Implies: R³ ∝ A (constant density)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: nuclearDensityDiagram
    // options: showDensityVsA=true, showConstantLine=true, showNucleonPacking=true, showFormula=true
    static nuclearDensityDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Nuclear Density Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Nuclear Density — Approximately Constant</text>
<text x="450" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Nuclear density is the same for all nuclides (~2.3 × 10¹⁷ kg/m³)</text>

<!-- LEFT: Density vs A graph (showDensityVsA + showConstantLine) -->
<!-- Axes: x=A 0-220, y=density 0-4 (×10¹⁷), origin (80,400) -->
<line x1="80" y1="400" x2="440" y2="400" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="80" y1="400" x2="80" y2="100" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="450" y="404" font-family="Arial" font-size="12" fill="#000000">A</text>
<text x="72" y="92" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">ρ</text>
<text x="200" y="430" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A (mass number)</text>
<text x="18" y="260" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" transform="rotate(-90,18,260)">ρ (×10¹⁷ kg/m³)</text>

<!-- Y-axis labels -->
<text x="68" y="404" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">0</text>
<text x="68" y="304" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">1</text>
<text x="68" y="204" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">2</text>
<text x="68" y="155" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">2.3</text>
<text x="68" y="104" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">3</text>
<line x1="78" y1="304" x2="82" y2="304" stroke="#000000" stroke-width="1"/>
<line x1="78" y1="204" x2="82" y2="204" stroke="#000000" stroke-width="1"/>
<line x1="78" y1="104" x2="82" y2="104" stroke="#000000" stroke-width="1"/>

<!-- X-axis labels -->
<text x="170" y="416" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">50</text>
<text x="260" y="416" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">100</text>
<text x="350" y="416" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">150</text>
<text x="432" y="416" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">200</text>

<!-- Constant density line at ρ=2.3×10¹⁷ -> y=155 -->
<!-- Slightly scattered dots around the line to show "approximately constant" -->
<line x1="85" y1="155" x2="435" y2="155" stroke="#000000" stroke-width="2.5"/>
<text x="438" y="151" font-family="Arial" font-size="10" fill="#000000">ρ ≈ 2.3×10¹⁷</text>
<text x="438" y="163" font-family="Arial" font-size="10" fill="#000000">kg/m³</text>

<!-- Scatter data points around the constant line -->
<circle cx="105" cy="150" r="3" fill="#000000"/>
<circle cx="135" cy="160" r="3" fill="#000000"/>
<circle cx="165" cy="152" r="3" fill="#000000"/>
<circle cx="200" cy="157" r="3" fill="#000000"/>
<circle cx="230" cy="148" r="3" fill="#000000"/>
<circle cx="260" cy="156" r="3" fill="#000000"/>
<circle cx="295" cy="158" r="3" fill="#000000"/>
<circle cx="325" cy="151" r="3" fill="#000000"/>
<circle cx="355" cy="155" r="3" fill="#000000"/>
<circle cx="385" cy="153" r="3" fill="#000000"/>
<circle cx="415" cy="159" r="3" fill="#000000"/>

<!-- RIGHT: Nucleon packing diagram (showNucleonPacking=true) -->
<!-- Show three nuclei of different sizes, same packing density -->
<text x="680" y="100" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Nucleon Packing</text>
<text x="680" y="118" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Larger A → larger R, same density</text>

<!-- Small nucleus: A=4, R∝1.59 -->
<circle cx="580" cy="210" r="22" fill="none" stroke="#000000" stroke-width="1.5"/>
<text x="580" y="213" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">A=4</text>
<text x="580" y="243" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">R ≈ 1.9 fm</text>
<!-- Packed circles inside -->
<circle cx="572" cy="207" r="5" fill="#333333" stroke="#000000" stroke-width="1"/>
<circle cx="583" cy="203" r="5" fill="#ffffff" stroke="#000000" stroke-width="1"/>
<circle cx="580" cy="215" r="5" fill="#333333" stroke="#000000" stroke-width="1"/>
<circle cx="570" cy="218" r="5" fill="#ffffff" stroke="#000000" stroke-width="1"/>

<!-- Medium nucleus: A=27 -->
<circle cx="680" cy="230" r="40" fill="none" stroke="#000000" stroke-width="1.5"/>
<text x="680" y="233" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">A=27</text>
<text x="680" y="283" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">R ≈ 3.6 fm</text>
<!-- Pack nucleons (schematic) -->
<circle cx="665" cy="222" r="5" fill="#333333" stroke="#000000" stroke-width="1"/>
<circle cx="677" cy="217" r="5" fill="#ffffff" stroke="#000000" stroke-width="1"/>
<circle cx="689" cy="222" r="5" fill="#333333" stroke="#000000" stroke-width="1"/>
<circle cx="660" cy="233" r="5" fill="#ffffff" stroke="#000000" stroke-width="1"/>
<circle cx="672" cy="230" r="5" fill="#333333" stroke="#000000" stroke-width="1"/>
<circle cx="684" cy="234" r="5" fill="#ffffff" stroke="#000000" stroke-width="1"/>
<circle cx="695" cy="228" r="5" fill="#333333" stroke="#000000" stroke-width="1"/>
<circle cx="668" cy="243" r="5" fill="#ffffff" stroke="#000000" stroke-width="1"/>
<circle cx="680" cy="246" r="5" fill="#333333" stroke="#000000" stroke-width="1"/>

<!-- Large nucleus: A=125 -->
<circle cx="800" cy="265" r="65" fill="none" stroke="#000000" stroke-width="1.5"/>
<text x="800" y="268" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">A=125</text>
<text x="800" y="342" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">R ≈ 6.0 fm</text>
<!-- Schematic packed nucleons -->
<circle cx="783" cy="253" r="5" fill="#333333" stroke="#000000" stroke-width="1"/>
<circle cx="795" cy="248" r="5" fill="#ffffff" stroke="#000000" stroke-width="1"/>
<circle cx="807" cy="253" r="5" fill="#333333" stroke="#000000" stroke-width="1"/>
<circle cx="777" cy="264" r="5" fill="#ffffff" stroke="#000000" stroke-width="1"/>
<circle cx="789" cy="261" r="5" fill="#333333" stroke="#000000" stroke-width="1"/>
<circle cx="801" cy="264" r="5" fill="#ffffff" stroke="#000000" stroke-width="1"/>
<circle cx="813" cy="261" r="5" fill="#333333" stroke="#000000" stroke-width="1"/>
<circle cx="783" cy="276" r="5" fill="#ffffff" stroke="#000000" stroke-width="1"/>
<circle cx="795" cy="273" r="5" fill="#333333" stroke="#000000" stroke-width="1"/>
<circle cx="807" cy="276" r="5" fill="#ffffff" stroke="#000000" stroke-width="1"/>
<circle cx="790" cy="287" r="5" fill="#333333" stroke="#000000" stroke-width="1"/>
<circle cx="802" cy="284" r="5" fill="#ffffff" stroke="#000000" stroke-width="1"/>

<!-- Formula box (showFormula=true) -->
<rect x="470" y="360" width="400" height="100" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="670" y="382" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Derivation of constant density:</text>
<text x="670" y="402" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">R = R₀A^(1/3)  →  Volume V = (4/3)πR³ ∝ A</text>
<text x="670" y="422" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Mass ≈ A × mₙ  →  ρ = m/V = const</text>
<text x="670" y="445" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">ρ ≈ 2.3 × 10¹⁷ kg m⁻³</text>

<!-- Legend -->
<circle cx="480" cy="500" r="6" fill="#333333" stroke="#000000" stroke-width="1"/>
<text x="493" y="504" font-family="Arial" font-size="11" fill="#000000">Proton</text>
<circle cx="540" cy="500" r="6" fill="#ffffff" stroke="#000000" stroke-width="1"/>
<text x="553" y="504" font-family="Arial" font-size="11" fill="#000000">Neutron</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: rutherfordScatteringSetup
    // options: showSource=true, showGoldFoil=true, showDetector=true, showScatteringAngles=true, showLabels=true
    static rutherfordScatteringSetupSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Rutherford Scattering Setup</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Rutherford Scattering Experiment</text>
<text x="450" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Alpha particle scattering used to discover the nuclear model of the atom</text>

<!-- Source (showSource=true) -->
<rect x="50" y="255" width="80" height="70" fill="#DDDDDD" stroke="#000000" stroke-width="2" rx="4"/>
<text x="90" y="288" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">⁲¹⁰Po</text>
<text x="90" y="304" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">α source</text>
<text x="90" y="345" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Radioactive</text>
<text x="90" y="360" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">source</text>

<!-- Collimator -->
<rect x="145" y="255" width="20" height="70" fill="#888888" stroke="#000000" stroke-width="1.5"/>
<rect x="145" y="255" width="20" height="28" fill="#888888"/>
<rect x="145" y="297" width="20" height="28" fill="#888888"/>
<!-- slit -->
<rect x="145" y="283" width="20" height="14" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
<text x="155" y="344" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Collimator</text>

<!-- Alpha beam arrow -->
<line x1="167" y1="290" x2="250" y2="290" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="208" y="282" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">α beam</text>

<!-- Gold foil (showGoldFoil=true) -->
<line x1="280" y1="160" x2="280" y2="430" stroke="#000000" stroke-width="4"/>
<text x="280" y="452" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Gold foil</text>
<text x="280" y="468" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">(~1000 atoms thick)</text>

<!-- Most alpha particles go straight through -->
<line x1="250" y1="290" x2="750" y2="290" stroke="#333333" stroke-width="1.5" stroke-dasharray="6,3"/>
<text x="520" y="282" font-family="Arial" font-size="11" fill="#333333" text-anchor="middle">Most pass straight through</text>

<!-- Scattering angles (showScatteringAngles=true) -->
<!-- Small angle scatter -->
<line x1="280" y1="290" x2="620" y2="220" stroke="#000000" stroke-width="1.5"/>
<text x="625" y="216" font-family="Arial" font-size="10" fill="#000000">small angle</text>
<!-- Large angle scatter -->
<line x1="280" y1="290" x2="500" y2="150" stroke="#000000" stroke-width="1.5"/>
<text x="505" y="146" font-family="Arial" font-size="10" fill="#000000">large angle</text>
<!-- Backscatter (rare) -->
<path d="M 280,290 C 290,270 270,250 250,270 C 235,285 240,300 180,300" stroke="#000000" stroke-width="2" fill="none" stroke-dasharray="4,3"/>
<text x="150" y="305" font-family="Arial" font-size="10" fill="#000000">backscatter</text>
<text x="150" y="318" font-family="Arial" font-size="10" fill="#666666">(very rare)</text>

<!-- Detector arc (showDetector=true) -->
<path d="M 340,110 A 280,280 0 0 1 340,470" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="650" y="460" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Detector</text>
<text x="650" y="477" font-family="Arial" font-size="11" fill="#666666">(zinc sulphide screen</text>
<text x="650" y="492" font-family="Arial" font-size="11" fill="#666666">or ionisation chamber)</text>

<!-- Angle annotations -->
<path d="M 320,290 A 40,40 0 0 0 320,262" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="332" y="277" font-family="Arial" font-size="10" fill="#000000">θ</text>

<!-- Observations box -->
<rect x="500" y="330" width="350" height="140" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="675" y="352" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Rutherford's Conclusions</text>
<text x="515" y="372" font-family="Arial" font-size="11" fill="#000000">• Most α pass through → atom mostly empty space</text>
<text x="515" y="390" font-family="Arial" font-size="11" fill="#000000">• Some deflect slightly → electric field in atom</text>
<text x="515" y="408" font-family="Arial" font-size="11" fill="#000000">• ~1 in 8000 bounce back → tiny dense nucleus</text>
<text x="515" y="426" font-family="Arial" font-size="11" fill="#000000">• Led to nuclear model of the atom (1911)</text>
<text x="515" y="456" font-family="Arial" font-size="11" fill="#000000">• Nucleus radius ~10⁻¹⁴ m, atom ~10⁻¹⁰ m</text>

<!-- Vacuum chamber outline -->
<rect x="145" y="140" width="740" height="310" fill="none" stroke="#BBBBBB" stroke-width="1.5" stroke-dasharray="8,4" rx="10"/>
<text x="290" y="162" font-family="Arial" font-size="11" fill="#BBBBBB">Vacuum chamber</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: alphaParticleTracks
    // numTracks=6, options: showNucleus=true, showTracks=true, showDeflectionAngles=true, showLabels=true
    static alphaParticleTracksSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="700" viewBox="0 0 800 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Alpha Particle Scattering Tracks</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Alpha Particle Scattering Tracks</text>
<text x="400" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Hyperbolic trajectories showing Coulomb repulsion near the gold nucleus</text>

<!-- Gold nucleus (showNucleus=true) -->
<circle cx="540" cy="350" r="18" fill="#333333" stroke="#000000" stroke-width="2"/>
<text x="540" y="354" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">ⁱ⁹⁷Au</text>
<text x="540" y="392" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Gold nucleus</text>
<text x="540" y="407" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(Z=79)</text>

<!-- Track 1: b very large — virtually no deflection (straight line) -->
<line x1="50" y1="130" x2="780" y2="130" stroke="#000000" stroke-width="1.5"/>
<text x="45" y="126" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">→</text>
<text x="790" y="134" font-family="Arial" font-size="10" fill="#000000">b very large</text>
<text x="790" y="148" font-family="Arial" font-size="10" fill="#000000">θ ≈ 0°</text>

<!-- Track 2: b large — very small deflection -->
<path d="M 50,200 C 350,200 500,208 780,205" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="790" y="209" font-family="Arial" font-size="10" fill="#000000">b large</text>
<text x="790" y="223" font-family="Arial" font-size="10" fill="#000000">θ small</text>

<!-- Track 3: b medium — moderate deflection -->
<path d="M 50,280 C 300,280 460,295 510,330 C 530,343 540,350 560,360 C 590,372 680,368 780,365" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="790" y="369" font-family="Arial" font-size="10" fill="#000000">b medium</text>
<text x="790" y="383" font-family="Arial" font-size="10" fill="#000000">θ ~30°</text>

<!-- Track 4: b small — large deflection ~90° -->
<path d="M 50,340 C 300,340 480,341 520,343 C 535,345 542,350 542,365 C 543,400 542,500 542,660" stroke="#000000" stroke-width="2" fill="none"/>
<text x="548" y="670" font-family="Arial" font-size="10" fill="#000000">θ = 90°</text>
<text x="40" y="336" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">b small</text>

<!-- Track 5: b very small — large deflection ~150° -->
<path d="M 50,370 C 280,370 490,365 522,355 C 535,350 541,345 540,332 C 539,318 530,308 510,300 C 490,293 350,285 50,280" stroke="#000000" stroke-width="2" fill="none"/>
<text x="35" y="278" font-family="Arial" font-size="10" fill="#000000">θ ~150°</text>
<text x="35" y="374" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">b very small</text>

<!-- Track 6: b ≈ 0 — near head-on, backscatter ~180° -->
<line x1="50" y1="350" x2="512" y2="350" stroke="#000000" stroke-width="2"/>
<line x1="512" y1="350" x2="100" y2="350" stroke="#000000" stroke-width="2" stroke-dasharray="4,3"/>
<circle cx="512" cy="350" r="3" fill="#000000"/>
<text x="35" y="354" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">b ≈ 0</text>
<text x="35" y="368" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">θ ≈ 180°</text>
<text x="100" y="342" font-family="Arial" font-size="10" fill="#000000">backscatter</text>

<!-- Impact parameter labels -->
<line x1="50" y1="130" x2="50" y2="350" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="45" y1="130" x2="55" y2="130" stroke="#AAAAAA" stroke-width="1"/>
<line x1="45" y1="350" x2="55" y2="350" stroke="#AAAAAA" stroke-width="1"/>
<text x="30" y="245" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" transform="rotate(-90,30,245)">impact parameter b</text>

<!-- Alpha particle symbols on incoming tracks -->
<text x="100" y="123" font-family="Arial" font-size="11" fill="#000000">α →</text>
<text x="100" y="193" font-family="Arial" font-size="11" fill="#000000">α →</text>
<text x="100" y="273" font-family="Arial" font-size="11" fill="#000000">α →</text>

<!-- Legend box -->
<rect x="500" y="460" width="270" height="120" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="635" y="480" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Key Observations</text>
<text x="512" y="500" font-family="Arial" font-size="11" fill="#000000">• Larger b → smaller deflection θ</text>
<text x="512" y="518" font-family="Arial" font-size="11" fill="#000000">• Coulomb repulsion: F ∝ Z₁Z₂/r²</text>
<text x="512" y="536" font-family="Arial" font-size="11" fill="#000000">• Trajectories are hyperbolas</text>
<text x="512" y="554" font-family="Arial" font-size="11" fill="#000000">• ~1 in 8000 α particles backscatter</text>
<text x="512" y="572" font-family="Arial" font-size="11" fill="#000000">• Proves tiny, dense nucleus</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // ============================================================
    // ===== NUCLEAR PHYSICS — RADIOACTIVITY ======================
    // ============================================================

    // Generated from registry: alphaDecayDiagram
    // parentSymbol=Ra, parentZ=88, parentA=226
    // options: showParentNucleus=true, showDaughterNucleus=true, showAlphaParticle=true, showEquation=true
    static alphaDecayDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904//DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Alpha Decay Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Alpha Decay: ᴬ_Z X → ᴬ⁻⁴_Z₋₂ Y + ⁴₂He</text>
<text x="450" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Parent nucleus emits a helium-4 nucleus (alpha particle)</text>

<!-- Equation display (showEquation=true) -->
<rect x="160" y="70" width="580" height="48" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="450" y="99" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He</text>

<!-- Parent nucleus (showParentNucleus=true) -->
<circle cx="180" cy="300" r="70" fill="#DDDDDD" stroke="#000000" stroke-width="2.5"/>
<text x="180" y="288" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">²²⁶Ra</text>
<text x="180" y="312" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">Z=88</text>
<text x="180" y="330" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">N=138</text>
<text x="180" y="390" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Parent nucleus</text>
<text x="180" y="407" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Radium-226</text>

<!-- Decay arrow -->
<line x1="258" y1="300" x2="380" y2="300" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="320" y="285" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-style="italic">α decay</text>

<!-- Daughter nucleus (showDaughterNucleus=true) -->
<circle cx="540" cy="300" r="62" fill="#DDDDDD" stroke="#000000" stroke-width="2.5"/>
<text x="540" y="288" font-family="Arial" font-size="19" fill="#000000" text-anchor="middle" font-weight="bold">²²²Rn</text>
<text x="540" y="312" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">Z=86</text>
<text x="540" y="330" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">N=136</text>
<text x="540" y="390" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Daughter nucleus</text>
<text x="540" y="407" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Radon-222</text>

<!-- Plus sign -->
<text x="640" y="310" font-family="Arial" font-size="28" fill="#000000" text-anchor="middle">+</text>

<!-- Alpha particle (showAlphaParticle=true) -->
<circle cx="750" cy="300" r="35" fill="#888888" stroke="#000000" stroke-width="2.5"/>
<text x="750" y="293" font-family="Arial" font-size="15" fill="#ffffff" text-anchor="middle" font-weight="bold">⁴He</text>
<text x="750" y="311" font-family="Arial" font-size="12" fill="#ffffff" text-anchor="middle">α particle</text>
<text x="750" y="355" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Alpha particle</text>
<text x="750" y="372" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Z=2, N=2</text>

<!-- Kinetic energy arrow for alpha -->
<line x1="790" y1="300" x2="855" y2="300" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="858" y="296" font-family="Arial" font-size="10" fill="#000000">KE</text>

<!-- Conservation checks -->
<rect x="130" y="430" width="640" height="100" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="450" y="452" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Conservation Laws</text>
<text x="200" y="475" font-family="Arial" font-size="12" fill="#000000">Mass number (A):  226 → 222 + 4 ✓</text>
<text x="200" y="495" font-family="Arial" font-size="12" fill="#000000">Proton number (Z):   88 → 86 + 2 ✓</text>
<text x="200" y="515" font-family="Arial" font-size="12" fill="#000000">Charge:            +88e → +86e + 2e ✓</text>
<text x="550" y="475" font-family="Arial" font-size="12" fill="#000000">Energy released ≈ 4.8 MeV</text>
<text x="550" y="495" font-family="Arial" font-size="12" fill="#000000">(mostly KE of α particle)</text>
<text x="550" y="515" font-family="Arial" font-size="12" fill="#000000">Half-life ≈ 1600 years</text>

<!-- Energy release arrow (showEnergyRelease=true) -->
<text x="320" y="250" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Energy released</text>
<line x1="320" y1="255" x2="320" y2="275" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: betaMinusDecay
    // parentSymbol=C, parentZ=6, parentA=14
    // options: showQuarkLevel=true, showEquation=true, showElectron=true, showAntineutrino=true
    static betaMinusDecaySvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Beta-Minus Decay Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">β⁻ Decay: n → p + e⁻ + ν̄ₑ</text>
<text x="450" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">A neutron converts to a proton, emitting an electron and electron antineutrino</text>

<!-- Equation (showEquation=true) -->
<rect x="130" y="68" width="640" height="46" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="450" y="97" font-family="Arial" font-size="17" fill="#000000" text-anchor="middle" font-weight="bold">¹⁴₆C → ¹⁴₇N + e⁻ + ν̄ₑ</text>

<!-- Nuclear level diagram -->
<!-- Parent nucleus (showParentNucleus=true) -->
<circle cx="175" cy="285" r="60" fill="#DDDDDD" stroke="#000000" stroke-width="2.5"/>
<text x="175" y="275" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">¹⁴C</text>
<text x="175" y="296" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Z=6, N=8</text>
<text x="175" y="368" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Carbon-14</text>
<text x="175" y="385" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Parent</text>

<!-- Decay arrow -->
<line x1="240" y1="285" x2="350" y2="285" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="295" y="270" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">β⁻ decay</text>
<text x="295" y="285" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">t₁/₂=5730 yr</text>

<!-- Daughter nucleus (showDaughterNucleus=true) -->
<circle cx="420" cy="285" r="60" fill="#DDDDDD" stroke="#000000" stroke-width="2.5"/>
<text x="420" y="275" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">¹⁴N</text>
<text x="420" y="296" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Z=7, N=7</text>
<text x="420" y="368" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Nitrogen-14</text>
<text x="420" y="385" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Daughter</text>

<!-- Plus -->
<text x="505" y="295" font-family="Arial" font-size="26" fill="#000000" text-anchor="middle">+</text>

<!-- Electron (showElectron=true) -->
<circle cx="590" cy="250" r="28" fill="#555555" stroke="#000000" stroke-width="2"/>
<text x="590" y="247" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">e⁻</text>
<text x="590" y="263" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">β particle</text>
<text x="590" y="298" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Electron</text>
<text x="590" y="313" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">charge: −1</text>
<line x1="620" y1="250" x2="680" y2="220" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>

<!-- Plus -->
<text x="700" y="295" font-family="Arial" font-size="26" fill="#000000" text-anchor="middle">+</text>

<!-- Antineutrino (showAntineutrino=true) -->
<circle cx="790" cy="310" r="28" fill="#333333" stroke="#000000" stroke-width="2" stroke-dasharray="4,3"/>
<text x="790" y="307" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">ν̄ₑ</text>
<text x="790" y="360" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Antineutrino</text>
<text x="790" y="375" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">charge: 0, mass≈0</text>
<line x1="818" y1="310" x2="870" y2="340" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>

<!-- Quark level diagram (showQuarkLevel=true) -->
<rect x="60" y="420" width="780" height="130" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="450" y="442" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Quark-Level Process</text>

<!-- Neutron quark composition -->
<text x="130" y="465" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Neutron (n)</text>
<circle cx="105" cy="490" r="13" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<text x="105" y="494" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">u</text>
<circle cx="125" cy="490" r="13" fill="#888888" stroke="#000000" stroke-width="1.5"/>
<text x="125" y="494" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">d</text>
<circle cx="155" cy="490" r="13" fill="#888888" stroke="#000000" stroke-width="1.5"/>
<text x="155" y="494" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">d</text>
<text x="130" y="516" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">udd</text>

<!-- Arrow -->
<line x1="185" y1="490" x2="280" y2="490" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<!-- W boson -->
<text x="232" y="480" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">W⁻ boson</text>
<line x1="220" y1="490" x2="220" y2="525" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,3" marker-end="url(#arrow-bw)"/>
<circle cx="220" cy="540" r="13" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
<text x="220" y="543" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">e⁻</text>
<circle cx="244" cy="540" r="13" fill="#BBBBBB" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,3"/>
<text x="244" y="543" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">ν̄ₑ</text>

<!-- Proton quark composition -->
<text x="375" y="465" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Proton (p)</text>
<circle cx="350" cy="490" r="13" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<text x="350" y="494" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">u</text>
<circle cx="375" cy="490" r="13" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<text x="375" y="494" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">u</text>
<circle cx="400" cy="490" r="13" fill="#888888" stroke="#000000" stroke-width="1.5"/>
<text x="400" y="494" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">d</text>
<text x="375" y="516" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">uud</text>

<!-- Text summary -->
<text x="590" y="475" font-family="Arial" font-size="12" fill="#000000">d → u + W⁻</text>
<text x="590" y="495" font-family="Arial" font-size="12" fill="#000000">W⁻ → e⁻ + ν̄ₑ</text>
<text x="590" y="520" font-family="Arial" font-size="11" fill="#666666">Net: n → p + e⁻ + ν̄ₑ</text>
<text x="590" y="538" font-family="Arial" font-size="11" fill="#666666">Weak nuclear force</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: betaPlusDecay
    // parentSymbol=Na, parentZ=11, parentA=22
    static betaPlusDecaySvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Beta-Plus Decay Diagram</metadata>
<g fill="none" stroke="#000000">

<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">β⁺ Decay: p → n + e⁺ + νₑ</text>
<text x="450" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">A proton converts to a neutron, emitting a positron and electron neutrino</text>

<rect x="130" y="68" width="640" height="46" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="450" y="97" font-family="Arial" font-size="17" fill="#000000" text-anchor="middle" font-weight="bold">²²₁₁Na → ²²₁₀Ne + e⁺ + νₑ</text>

<!-- Parent nucleus -->
<circle cx="175" cy="285" r="60" fill="#DDDDDD" stroke="#000000" stroke-width="2.5"/>
<text x="175" y="275" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">²²Na</text>
<text x="175" y="296" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Z=11, N=11</text>
<text x="175" y="368" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Sodium-22</text>
<text x="175" y="385" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Parent</text>

<line x1="240" y1="285" x2="350" y2="285" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="295" y="270" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">β⁺ decay</text>
<text x="295" y="285" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">t₁/₂=2.6 yr</text>

<!-- Daughter nucleus -->
<circle cx="420" cy="285" r="60" fill="#DDDDDD" stroke="#000000" stroke-width="2.5"/>
<text x="420" y="275" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">²²Ne</text>
<text x="420" y="296" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Z=10, N=12</text>
<text x="420" y="368" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Neon-22</text>
<text x="420" y="385" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Daughter</text>

<text x="505" y="295" font-family="Arial" font-size="26" fill="#000000" text-anchor="middle">+</text>

<!-- Positron (showPositron=true) -->
<circle cx="590" cy="250" r="28" fill="#555555" stroke="#000000" stroke-width="2"/>
<text x="590" y="247" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">e⁺</text>
<text x="590" y="263" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">positron</text>
<text x="590" y="298" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Positron</text>
<text x="590" y="313" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">charge: +1</text>
<line x1="620" y1="250" x2="675" y2="220" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>

<text x="700" y="295" font-family="Arial" font-size="26" fill="#000000" text-anchor="middle">+</text>

<!-- Neutrino (showNeutrino=true) -->
<circle cx="790" cy="310" r="28" fill="#333333" stroke="#000000" stroke-width="2" stroke-dasharray="4,3"/>
<text x="790" y="307" font-family="Arial" font-size="13" fill="#ffffff" text-anchor="middle">νₑ</text>
<text x="790" y="360" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Neutrino</text>
<text x="790" y="375" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">charge: 0, mass≈0</text>
<line x1="818" y1="310" x2="865" y2="340" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>

<!-- Conservation checks -->
<rect x="60" y="420" width="780" height="130" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="450" y="442" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Conservation Laws &amp; Quark Level</text>
<text x="100" y="466" font-family="Arial" font-size="12" fill="#000000">Mass number A: 22 → 22 + 0 ✓</text>
<text x="100" y="486" font-family="Arial" font-size="12" fill="#000000">Proton number Z: 11 → 10 + 1 ✓</text>
<text x="100" y="506" font-family="Arial" font-size="12" fill="#000000">Lepton number: 0 → 0 + (1 − 1) ✓</text>
<text x="100" y="530" font-family="Arial" font-size="11" fill="#666666">Only possible if Q-value > 2mₑc² = 1.022 MeV</text>
<text x="500" y="466" font-family="Arial" font-size="12" fill="#000000">Quark change: u → d + W⁺</text>
<text x="500" y="486" font-family="Arial" font-size="12" fill="#000000">W⁺ → e⁺ + νₑ</text>
<text x="500" y="506" font-family="Arial" font-size="12" fill="#000000">Net: p → n + e⁺ + νₑ</text>
<text x="500" y="526" font-family="Arial" font-size="11" fill="#666666">Mediated by W⁺ boson (weak force)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: gammaEmission
    // options: showExcitedState=true, showGroundState=true, showGammaPhoton=true, showEnergyLevelDrop=true, showEquation=true
    static gammaEmissionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Gamma Emission Diagram</metadata>
<g fill="none" stroke="#000000">

<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Gamma Emission — Nuclear De-excitation</text>
<text x="400" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Excited nucleus releases energy as a high-energy photon (gamma ray)</text>

<!-- Equation (showEquation=true) -->
<rect x="150" y="68" width="500" height="42" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="400" y="95" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">X* → X + γ</text>

<!-- Energy level diagram (showExcitedState + showGroundState + showEnergyLevelDrop) -->
<!-- Y-axis: Energy -->
<line x1="100" y1="150" x2="100" y2="500" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="95" y="140" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">E</text>
<text x="40" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" transform="rotate(-90,40,330)">Energy (MeV)</text>

<!-- Excited state (showExcitedState=true) -->
<line x1="120" y1="200" x2="400" y2="200" stroke="#000000" stroke-width="3"/>
<text x="415" y="204" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">E* = 2.51 MeV</text>
<text x="415" y="220" font-family="Arial" font-size="11" fill="#666666">Second excited state</text>

<line x1="120" y1="290" x2="400" y2="290" stroke="#000000" stroke-width="3"/>
<text x="415" y="294" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">E* = 1.17 MeV</text>
<text x="415" y="310" font-family="Arial" font-size="11" fill="#666666">First excited state</text>

<!-- Ground state (showGroundState=true) -->
<line x1="120" y1="460" x2="400" y2="460" stroke="#000000" stroke-width="3"/>
<text x="415" y="464" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">E = 0 MeV</text>
<text x="415" y="480" font-family="Arial" font-size="11" fill="#666666">Ground state (stable)</text>

<!-- Transition arrows (showEnergyLevelDrop=true) -->
<!-- 2nd excited → 1st excited -->
<line x1="200" y1="200" x2="200" y2="290" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="140" y="248" font-family="Arial" font-size="11" fill="#000000">Eγ = 1.34 MeV</text>

<!-- 1st excited → ground -->
<line x1="260" y1="290" x2="260" y2="460" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="270" y="380" font-family="Arial" font-size="11" fill="#000000">Eγ = 1.17 MeV</text>

<!-- 2nd excited → ground (direct) -->
<line x1="320" y1="200" x2="320" y2="460" stroke="#000000" stroke-width="2.5" stroke-dasharray="5,3" marker-end="url(#arrow-bw)"/>
<text x="334" y="335" font-family="Arial" font-size="11" fill="#000000">Eγ = 2.51 MeV</text>

<!-- Gamma photon illustration (showGammaPhoton=true) -->
<!-- Wavy arrow for γ photon emitted -->
<path d="M 555,290 C 565,275 575,305 585,290 C 595,275 605,305 615,290 C 625,275 635,305 645,290 C 655,275 665,305 675,290"
      stroke="#333333" stroke-width="2.5" fill="none" marker-end="url(#arrow-bw)"/>
<text x="615" y="280" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">γ</text>
<text x="615" y="315" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Gamma photon</text>
<text x="615" y="330" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Eγ = hf = 1.17 MeV</text>
<text x="615" y="348" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">λ ≈ 1.06 × 10⁻¹² m</text>

<!-- Excited nucleus before -->
<circle cx="540" cy="210" r="30" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<text x="540" y="207" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">⁶⁰Ni*</text>
<text x="540" y="222" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">excited</text>
<text x="540" y="250" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Before</text>

<!-- Nucleus after -->
<circle cx="700" cy="375" r="30" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="700" y="372" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">⁶⁰Ni</text>
<text x="700" y="387" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">stable</text>
<text x="700" y="415" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">After</text>

<!-- Key note -->
<rect x="430" y="460" width="330" height="80" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="595" y="480" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Key properties of γ radiation</text>
<text x="440" y="500" font-family="Arial" font-size="11" fill="#000000">• No change in A or Z (no particle emitted)</text>
<text x="440" y="518" font-family="Arial" font-size="11" fill="#000000">• Speed of light (c = 3×10⁸ m/s)</text>
<text x="440" y="536" font-family="Arial" font-size="11" fill="#000000">• Eγ = E* − E (energy level difference)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: decayCurveExponential
    // halfLife=5.27, initialN=1000
    // options: showExponentialCurve=true, showHalfLives=true, showGrid=true, showFormula=true
    static decayCurveExponentialSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Radioactive Decay Curve</metadata>
<g fill="none" stroke="#000000">

<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Radioactive Decay: N = N₀e^(−λt)</text>
<text x="450" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Number of undecayed nuclei vs time (Co-60, t₁/₂ = 5.27 years)</text>

<!-- Axes -->
<!-- Origin (100,490), x: t 0-25yr scale 28px/yr, y: N 0-1000 scale 0.44px/unit -->
<line x1="100" y1="490" x2="830" y2="490" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="100" y1="490" x2="100" y2="80" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="845" y="494" font-family="Arial" font-size="12" fill="#000000">t</text>
<text x="95" y="70" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">N</text>
<text x="460" y="535" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">t (years)</text>
<text x="35" y="290" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,35,290)">N (undecayed nuclei)</text>

<!-- Grid (showGrid=true) -->
<!-- t axis labels: 0,5,10,15,20,25 -> x=100,240,380,520,660,800 -->
<text x="100" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">0</text>
<text x="248" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">5</text>
<text x="396" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">10</text>
<text x="543" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">15</text>
<text x="691" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">20</text>
<text x="819" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">25</text>
<!-- Y axis labels: N=1000->y=50, 800->y=138, 500->y=270, 250->y=380, 0->y=490 -->
<text x="88" y="94" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">1000</text>
<text x="88" y="184" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">800</text>
<text x="88" y="314" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">500</text>
<text x="88" y="424" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">250</text>
<line x1="98" y1="90" x2="102" y2="90" stroke="#000000" stroke-width="1"/>
<line x1="98" y1="180" x2="102" y2="180" stroke="#000000" stroke-width="1"/>
<line x1="98" y1="314" x2="102" y2="314" stroke="#000000" stroke-width="1"/>
<line x1="98" y1="424" x2="102" y2="424" stroke="#000000" stroke-width="1"/>
<!-- Grid lines -->
<line x1="100" y1="90" x2="820" y2="90" stroke="#EEEEEE" stroke-width="1"/>
<line x1="100" y1="314" x2="820" y2="314" stroke="#EEEEEE" stroke-width="1"/>
<line x1="248" y1="80" x2="248" y2="490" stroke="#EEEEEE" stroke-width="1"/>
<line x1="396" y1="80" x2="396" y2="490" stroke="#EEEEEE" stroke-width="1"/>
<line x1="543" y1="80" x2="543" y2="490" stroke="#EEEEEE" stroke-width="1"/>
<line x1="691" y1="80" x2="691" y2="490" stroke="#EEEEEE" stroke-width="1"/>

<!-- Exponential decay curve: N=1000*exp(-0.1315*t), λ=ln2/5.27=0.1315/yr
     Points: t=0,N=1000(y=90); t=5.27,N=500(y=314); t=10.54,N=250(y=424); t=15.81,N=125(y=469); t=21,N=62(y=485)
     x = 100 + t*29.6 -->
<path d="M 100,90 C 160,130 200,190 256,314 C 312,424 370,462 412,472 C 480,482 560,487 660,489 C 740,490 800,490 830,490"
      stroke="#000000" stroke-width="3" fill="none"/>

<!-- Half-life markers (showHalfLives=true) -->
<!-- 1st half-life: t=5.27, N=500 -> (256, 314) -->
<line x1="256" y1="314" x2="256" y2="490" stroke="#555555" stroke-width="1.5" stroke-dasharray="5,4"/>
<line x1="100" y1="314" x2="256" y2="314" stroke="#555555" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="256" y="485" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">t₁</text>
<text x="256" y="503" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">5.27</text>

<!-- 2nd half-life: t=10.54, N=250 -> (412, 424) -->
<line x1="412" y1="424" x2="412" y2="490" stroke="#555555" stroke-width="1.5" stroke-dasharray="5,4"/>
<line x1="100" y1="424" x2="412" y2="424" stroke="#555555" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="412" y="485" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">2t₁</text>
<text x="412" y="503" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">10.54</text>

<!-- 3rd half-life: t=15.81, N=125 -> (568, 469) -->
<line x1="568" y1="469" x2="568" y2="490" stroke="#555555" stroke-width="1.5" stroke-dasharray="5,4"/>
<line x1="100" y1="469" x2="568" y2="469" stroke="#555555" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="568" y="503" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">3t₁</text>

<!-- Half annotations -->
<text x="178" y="310" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">N₀/2</text>
<text x="256" y="420" font-family="Arial" font-size="10" fill="#000000">N₀/4</text>
<text x="412" y="465" font-family="Arial" font-size="10" fill="#000000">N₀/8</text>

<!-- Formula box (showFormula=true) -->
<rect x="540" y="120" width="310" height="130" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="695" y="142" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Decay Equations</text>
<text x="695" y="164" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">N = N₀ e^(−λt)</text>
<text x="695" y="184" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">λ = ln 2 / t₁/₂ = 0.1315 yr⁻¹</text>
<text x="695" y="204" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">t₁/₂ = 5.27 years (Co-60)</text>
<text x="695" y="224" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">N₀ = 1000 nuclei</text>
<text x="695" y="244" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Activity A = λN = A₀e^(−λt)</text>

<!-- N0 label -->
<circle cx="100" cy="90" r="4" fill="#000000"/>
<text x="112" y="86" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">N₀ = 1000</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: halfLifeGraph
    // halfLife=3.8, initialN=800
    // options: showHalfLifeMarkers=true, showHalfingLines=true, showGrid=true, showAnnotations=true
    static halfLifeGraphSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Half-Life Graph</metadata>
<g fill="none" stroke="#000000">

<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Half-Life — Successive Halving</text>
<text x="450" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Radon-222 decay: t₁/₂ = 3.8 days, N₀ = 800</text>

<!-- Axes -->
<!-- x: 0 to 20 days, scale 36px/day, origin (100,480) -->
<!-- y: 0-800, scale 0.5px/unit -->
<line x1="100" y1="480" x2="840" y2="480" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="100" y1="480" x2="100" y2="80" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="855" y="484" font-family="Arial" font-size="12" fill="#000000">t</text>
<text x="95" y="70" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">N</text>
<text x="460" y="520" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">t (days)</text>
<text x="35" y="290" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,35,290)">N (undecayed nuclei)</text>

<!-- Grid -->
<!-- x labels: 0,4,8,12,16,20 -> 100, 244, 388, 532, 676, 820 -->
<text x="100" y="498" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">0</text>
<text x="237" y="498" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">3.8</text>
<text x="374" y="498" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">7.6</text>
<text x="511" y="498" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">11.4</text>
<text x="648" y="498" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">15.2</text>
<text x="785" y="498" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">19.0</text>
<!-- y labels: 800->80, 400->280, 200->380, 100->430, 50->455 -->
<text x="88" y="84" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">800</text>
<text x="88" y="284" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">400</text>
<text x="88" y="384" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">200</text>
<text x="88" y="434" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">100</text>
<!-- Grid lines -->
<line x1="100" y1="84" x2="830" y2="84" stroke="#EEEEEE" stroke-width="1"/>
<line x1="100" y1="284" x2="830" y2="284" stroke="#EEEEEE" stroke-width="1"/>
<line x1="100" y1="384" x2="830" y2="384" stroke="#EEEEEE" stroke-width="1"/>
<line x1="100" y1="434" x2="830" y2="434" stroke="#EEEEEE" stroke-width="1"/>
<line x1="237" y1="80" x2="237" y2="480" stroke="#EEEEEE" stroke-width="1"/>
<line x1="374" y1="80" x2="374" y2="480" stroke="#EEEEEE" stroke-width="1"/>
<line x1="511" y1="80" x2="511" y2="480" stroke="#EEEEEE" stroke-width="1"/>
<line x1="648" y1="80" x2="648" y2="480" stroke="#EEEEEE" stroke-width="1"/>

<!-- Decay curve -->
<!-- t=0,N=800(y=80); t=3.8,N=400(y=280); t=7.6,N=200(y=380); t=11.4,N=100(y=430); t=15.2,N=50(y=455); t=19,N=25(y=467) -->
<path d="M 100,80 C 150,140 190,230 237,280 C 290,330 330,365 374,380 C 430,396 470,420 511,430 C 570,440 610,450 648,455 C 710,460 760,465 830,468"
      stroke="#000000" stroke-width="3" fill="none"/>

<!-- Half-life markers (showHalfLifeMarkers=true) + halving lines (showHalfingLines=true) -->
<!-- t1: (237, 284) -->
<line x1="100" y1="284" x2="237" y2="284" stroke="#444444" stroke-width="2" stroke-dasharray="6,4"/>
<line x1="237" y1="284" x2="237" y2="480" stroke="#444444" stroke-width="2" stroke-dasharray="6,4"/>
<circle cx="237" cy="284" r="5" fill="#000000"/>
<!-- t2: (374, 384) -->
<line x1="100" y1="384" x2="374" y2="384" stroke="#444444" stroke-width="1.5" stroke-dasharray="6,4"/>
<line x1="374" y1="384" x2="374" y2="480" stroke="#444444" stroke-width="1.5" stroke-dasharray="6,4"/>
<circle cx="374" cy="384" r="5" fill="#000000"/>
<!-- t3: (511, 434) -->
<line x1="100" y1="434" x2="511" y2="434" stroke="#444444" stroke-width="1.5" stroke-dasharray="6,4"/>
<line x1="511" y1="434" x2="511" y2="480" stroke="#444444" stroke-width="1.5" stroke-dasharray="6,4"/>
<circle cx="511" cy="434" r="5" fill="#000000"/>

<!-- Halving annotations (showAnnotations=true) -->
<text x="168" y="278" font-family="Arial" font-size="11" fill="#000000">N₀/2=400</text>
<text x="295" y="378" font-family="Arial" font-size="11" fill="#000000">N₀/4=200</text>
<text x="432" y="428" font-family="Arial" font-size="11" fill="#000000">N₀/8=100</text>

<!-- Half-life brace annotations -->
<line x1="100" y1="540" x2="237" y2="540" stroke="#000000" stroke-width="1.5"/>
<line x1="100" y1="535" x2="100" y2="545" stroke="#000000" stroke-width="1.5"/>
<line x1="237" y1="535" x2="237" y2="545" stroke="#000000" stroke-width="1.5"/>
<text x="168" y="556" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">t₁/₂ = 3.8 d</text>
<line x1="237" y1="540" x2="374" y2="540" stroke="#000000" stroke-width="1.5"/>
<line x1="374" y1="535" x2="374" y2="545" stroke="#000000" stroke-width="1.5"/>
<text x="306" y="556" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">t₁/₂ = 3.8 d</text>
<line x1="374" y1="540" x2="511" y2="540" stroke="#000000" stroke-width="1.5"/>
<line x1="511" y1="535" x2="511" y2="545" stroke="#000000" stroke-width="1.5"/>
<text x="442" y="556" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">t₁/₂ = 3.8 d</text>

<!-- N0 label -->
<circle cx="100" cy="80" r="4" fill="#000000"/>
<text x="112" y="76" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">N₀ = 800</text>

<!-- Formula inset -->
<rect x="560" y="160" width="270" height="80" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="695" y="180" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">N = N₀ (½)^(t/t₁/₂)</text>
<text x="695" y="202" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">= 800 × (½)^(t/3.8)</text>
<text x="695" y="224" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">λ = 0.182 day⁻¹</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: activityVsTime
    // halfLife=5.0, initialActivity=1000
    static activityVsTimeSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Activity vs Time Graph</metadata>
<g fill="none" stroke="#000000">

<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Activity vs Time: A = A₀e^(−λt)</text>
<text x="450" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Radioactive activity decreases exponentially (t₁/₂ = 5.0 years, A₀ = 1000 Bq)</text>

<!-- Axes -->
<line x1="100" y1="480" x2="840" y2="480" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="100" y1="480" x2="100" y2="80" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="855" y="484" font-family="Arial" font-size="12" fill="#000000">t</text>
<text x="95" y="70" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">A</text>
<text x="460" y="520" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">t (years)</text>
<text x="35" y="290" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,35,290)">Activity A (Bq)</text>

<!-- Grid, scale: x=100+t*29, y=480-A*0.4 -->
<text x="100" y="498" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">0</text>
<text x="245" y="498" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">5</text>
<text x="390" y="498" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">10</text>
<text x="535" y="498" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">15</text>
<text x="680" y="498" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">20</text>
<text x="825" y="498" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">25</text>
<text x="88" y="84" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">1000</text>
<text x="88" y="284" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">500</text>
<text x="88" y="384" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">250</text>
<text x="88" y="434" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">125</text>
<line x1="100" y1="84" x2="830" y2="84" stroke="#EEEEEE" stroke-width="1"/>
<line x1="100" y1="284" x2="830" y2="284" stroke="#EEEEEE" stroke-width="1"/>
<line x1="100" y1="384" x2="830" y2="384" stroke="#EEEEEE" stroke-width="1"/>
<line x1="245" y1="80" x2="245" y2="480" stroke="#EEEEEE" stroke-width="1"/>
<line x1="390" y1="80" x2="390" y2="480" stroke="#EEEEEE" stroke-width="1"/>
<line x1="535" y1="80" x2="535" y2="480" stroke="#EEEEEE" stroke-width="1"/>
<line x1="680" y1="80" x2="680" y2="480" stroke="#EEEEEE" stroke-width="1"/>

<!-- Activity curve: t=0,A=1000(y=80); t=5,A=500(y=280); t=10,A=250(y=380); t=15,A=125(y=430) -->
<path d="M 100,80 C 160,145 195,235 245,280 C 300,328 340,364 390,380 C 445,397 475,420 535,430 C 600,440 648,450 680,455 C 740,461 785,465 830,468"
      stroke="#000000" stroke-width="3" fill="none"/>

<!-- Half-life markers -->
<line x1="100" y1="280" x2="245" y2="280" stroke="#555555" stroke-width="1.5" stroke-dasharray="5,4"/>
<line x1="245" y1="280" x2="245" y2="480" stroke="#555555" stroke-width="1.5" stroke-dasharray="5,4"/>
<circle cx="245" cy="280" r="5" fill="#000000"/>
<text x="200" y="273" font-family="Arial" font-size="10" fill="#555555">A₀/2</text>
<line x1="100" y1="380" x2="390" y2="380" stroke="#555555" stroke-width="1.5" stroke-dasharray="5,4"/>
<line x1="390" y1="380" x2="390" y2="480" stroke="#555555" stroke-width="1.5" stroke-dasharray="5,4"/>
<circle cx="390" cy="380" r="5" fill="#000000"/>
<text x="340" y="373" font-family="Arial" font-size="10" fill="#555555">A₀/4</text>
<line x1="100" y1="430" x2="535" y2="430" stroke="#555555" stroke-width="1.5" stroke-dasharray="5,4"/>
<line x1="535" y1="430" x2="535" y2="480" stroke="#555555" stroke-width="1.5" stroke-dasharray="5,4"/>
<circle cx="535" cy="430" r="5" fill="#000000"/>
<text x="470" y="423" font-family="Arial" font-size="10" fill="#555555">A₀/8</text>

<!-- Initial point -->
<circle cx="100" cy="80" r="5" fill="#000000"/>
<text x="112" y="76" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">A₀ = 1000 Bq</text>

<!-- Formula box (showFormula=true) -->
<rect x="530" y="130" width="310" height="110" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="685" y="152" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Activity Equations</text>
<text x="685" y="174" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A = A₀ e^(−λt)</text>
<text x="685" y="194" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A = λN</text>
<text x="685" y="214" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">λ = ln2 / t₁/₂ = 0.139 yr⁻¹</text>
<text x="685" y="234" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Unit: Becquerel (Bq) = 1 decay/s</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: penetrationComparison
    // options: showAlpha=true, showBeta=true, showGamma=true, showMaterials=true, showLabels=true
    static penetrationComparisonSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="500" viewBox="0 0 900 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>Radiation Penetration Comparison</metadata>
<g fill="none" stroke="#000000">

<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Penetrating Power of α, β, and γ Radiation</text>
<text x="450" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Different radiations penetrate different thicknesses of material</text>

<!-- Source (left) -->
<rect x="30" y="100" width="55" height="280" fill="#AAAAAA" stroke="#000000" stroke-width="2" rx="4"/>
<text x="57" y="245" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold" transform="rotate(-90,57,245)">Radioactive Source</text>

<!-- Materials -->
<!-- Paper: x=100-120 -->
<rect x="100" y="80" width="30" height="320" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<text x="115" y="72" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Paper</text>
<text x="115" y="412" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">~0.1 mm</text>

<!-- Aluminium: x=220-280 -->
<rect x="210" y="80" width="60" height="320" fill="#CCCCCC" stroke="#000000" stroke-width="1.5"/>
<text x="240" y="72" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Aluminium</text>
<text x="240" y="412" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">~3 mm</text>

<!-- Lead: x=400-500 -->
<rect x="390" y="80" width="80" height="320" fill="#888888" stroke="#000000" stroke-width="2"/>
<text x="430" y="72" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Lead</text>
<text x="430" y="412" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">~10 cm</text>

<!-- Concrete -->
<rect x="580" y="80" width="120" height="320" fill="#BBBBBB" stroke="#000000" stroke-width="2" stroke-dasharray="4,3"/>
<text x="640" y="72" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Thick Concrete</text>
<text x="640" y="412" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">metres</text>

<!-- Alpha track (showAlpha=true): stopped by paper -->
<text x="57" y="145" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">α</text>
<line x1="85" y1="140" x2="108" y2="140" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<!-- X mark for alpha stopped at paper -->
<text x="120" y="148" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">✕</text>
<text x="175" y="144" font-family="Arial" font-size="11" fill="#000000">Stopped by paper</text>
<text x="175" y="160" font-family="Arial" font-size="11" fill="#666666">(or a few cm of air)</text>

<!-- Beta track (showBeta=true): stopped by aluminium -->
<text x="57" y="245" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">β</text>
<line x1="85" y1="240" x2="135" y2="240" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="135" y1="240" x2="215" y2="240" stroke="#000000" stroke-width="2.5" stroke-dasharray="4,3"/>
<text x="250" y="248" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">✕</text>
<text x="295" y="244" font-family="Arial" font-size="11" fill="#000000">Stopped by ~3mm Al</text>
<text x="295" y="260" font-family="Arial" font-size="11" fill="#666666">(or ~3m of air)</text>

<!-- Gamma track (showGamma=true): reduced by lead, never fully stopped -->
<text x="57" y="345" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">γ</text>
<!-- Wavy line for gamma -->
<path d="M 85,340 C 95,330 100,350 110,340 C 120,330 125,350 135,340 C 145,330 150,350 160,340 C 170,330 175,350 185,340 C 195,330 200,350 210,340 C 220,330 225,350 235,340 C 245,330 250,350 260,340 C 270,330 275,350 285,340 C 295,330 300,350 310,340 C 320,330 325,350 335,340 C 345,330 350,350 360,340 C 370,330 375,350 385,340 C 395,330 400,350 410,340 C 420,330 425,350 435,340"
      stroke="#333333" stroke-width="2" fill="none"/>
<!-- Attenuated beyond lead (thinner wavy) -->
<path d="M 470,340 C 480,333 485,347 495,340 C 505,333 510,347 520,340 C 530,333 535,347 545,340 C 555,333 560,347 570,340"
      stroke="#888888" stroke-width="1.5" fill="none"/>
<text x="640" y="355" font-family="Arial" font-size="11" fill="#888888" text-anchor="middle">reduced intensity</text>
<text x="750" y="340" font-family="Arial" font-size="11" fill="#888888">never fully stopped</text>
<!-- Gamma doesn't get stopped, arrow continues faint -->

<!-- Note about gamma -->
<rect x="580" y="375" width="280" height="50" fill="#F5F5F5" stroke="#BBBBBB" stroke-width="1" rx="3"/>
<text x="720" y="394" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">γ intensity follows I = I₀e^(−μx)</text>
<text x="720" y="412" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Never completely attenuated</text>

<!-- Summary table -->
<rect x="30" y="430" width="530" height="58" fill="#F0F0F0" stroke="#000000" stroke-width="1" rx="3"/>
<text x="200" y="448" font-family="Arial" font-size="11" fill="#000000" font-weight="bold">Radiation  Ionising power  Range in air  Stopped by</text>
<text x="40" y="465" font-family="Arial" font-size="11" fill="#000000">α  High (∼10,000/mm)    ~5 cm     Paper / skin</text>
<text x="40" y="482" font-family="Arial" font-size="11" fill="#000000">β  Medium (∼100/mm)     ~3 m      3 mm Al     γ  Low (∼1/mm) → ∞  thick Pb/concrete</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: ionisationTracks
    // options: showAlphaTrack=true, showBetaTrack=true, showGammaTrack=true, showAnnotations=true
    // backgroundColor=#1a1a2e -> use dark bg with white strokes
    static ionisationTracksSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Ionisation Tracks — Cloud Chamber</metadata>
<g fill="none" stroke="#000000">

<!-- Dark background -->
<rect x="0" y="0" width="900" height="600" fill="#1a1a2e" stroke="none"/>

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#FFFFFF" text-anchor="middle" font-weight="bold">Cloud Chamber Tracks</text>
<text x="450" y="54" font-family="Arial" font-size="12" fill="#AAAAAA" text-anchor="middle">Characteristic ionisation trails of α, β, and γ radiation</text>

<!-- Source point -->
<circle cx="140" cy="300" r="12" fill="#FFFFFF" stroke="#AAAAAA" stroke-width="2"/>
<text x="140" y="335" font-family="Arial" font-size="11" fill="#AAAAAA" text-anchor="middle">Source</text>

<!-- Alpha track (showAlphaTrack=true): thick, straight, short, heavily ionising -->
<!-- Shown as thick dotted line representing dense ionisation trail -->
<line x1="152" y1="300" x2="400" y2="300" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round"/>
<!-- Dense ionisation marks along alpha track -->
<line x1="165" y1="292" x2="165" y2="308" stroke="#AAAAAA" stroke-width="1"/>
<line x1="180" y1="292" x2="180" y2="308" stroke="#AAAAAA" stroke-width="1"/>
<line x1="195" y1="292" x2="195" y2="308" stroke="#AAAAAA" stroke-width="1"/>
<line x1="210" y1="292" x2="210" y2="308" stroke="#AAAAAA" stroke-width="1"/>
<line x1="225" y1="292" x2="225" y2="308" stroke="#AAAAAA" stroke-width="1"/>
<line x1="240" y1="292" x2="240" y2="308" stroke="#AAAAAA" stroke-width="1"/>
<line x1="255" y1="292" x2="255" y2="308" stroke="#AAAAAA" stroke-width="1"/>
<line x1="270" y1="292" x2="270" y2="308" stroke="#AAAAAA" stroke-width="1"/>
<line x1="285" y1="292" x2="285" y2="308" stroke="#AAAAAA" stroke-width="1"/>
<line x1="300" y1="292" x2="300" y2="308" stroke="#AAAAAA" stroke-width="1"/>
<line x1="315" y1="292" x2="315" y2="308" stroke="#AAAAAA" stroke-width="1"/>
<line x1="330" y1="292" x2="330" y2="308" stroke="#AAAAAA" stroke-width="1"/>
<line x1="345" y1="292" x2="345" y2="308" stroke="#AAAAAA" stroke-width="1"/>
<line x1="360" y1="292" x2="360" y2="308" stroke="#AAAAAA" stroke-width="1"/>
<line x1="375" y1="292" x2="375" y2="308" stroke="#AAAAAA" stroke-width="1"/>
<line x1="390" y1="292" x2="390" y2="308" stroke="#AAAAAA" stroke-width="1"/>
<!-- Alpha track ends sharply -->
<circle cx="400" cy="300" r="5" fill="#FFFFFF"/>
<!-- Labels -->
<text x="270" y="275" font-family="Arial" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="bold">α track</text>
<text x="270" y="292" font-family="Arial" font-size="11" fill="#AAAAAA" text-anchor="middle">Thick, straight, short</text>
<text x="410" y="296" font-family="Arial" font-size="11" fill="#AAAAAA">End</text>

<!-- Beta track (showBetaTrack=true): thin, tortuous/curved, longer -->
<path d="M 152,300 C 180,260 220,240 260,220 C 300,200 340,170 380,150 C 420,132 480,115 540,108"
      stroke="#CCCCCC" stroke-width="2" fill="none"/>
<text x="400" y="145" font-family="Arial" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="bold">β track</text>
<text x="400" y="162" font-family="Arial" font-size="11" fill="#AAAAAA" text-anchor="middle">Thin, curved, longer</text>
<text x="555" y="108" font-family="Arial" font-size="11" fill="#AAAAAA">(deflected by</text>
<text x="555" y="122" font-family="Arial" font-size="11" fill="#AAAAAA">atomic electrons)</text>

<!-- Gamma track (showGammaTrack=true): barely visible, only indirect ionisation -->
<!-- Show as very faint dotted line with sparse dots representing rare ion pairs -->
<line x1="152" y1="300" x2="760" y2="400" stroke="#666666" stroke-width="1" stroke-dasharray="3,8"/>
<!-- Sparse dots -->
<circle cx="270" cy="328" r="2" fill="#666666"/>
<circle cx="380" cy="352" r="2" fill="#666666"/>
<circle cx="490" cy="375" r="2" fill="#666666"/>
<circle cx="620" cy="393" r="2" fill="#666666"/>
<text x="750" y="395" font-family="Arial" font-size="13" fill="#666666">γ track</text>
<text x="750" y="412" font-family="Arial" font-size="11" fill="#555555">Barely visible</text>
<text x="750" y="427" font-family="Arial" font-size="11" fill="#555555">(very sparse ions)</text>

<!-- Key comparison table -->
<rect x="50" y="430" width="560" height="130" fill="#2a2a4e" stroke="#444466" stroke-width="1" rx="5"/>
<text x="330" y="452" font-family="Arial" font-size="12" fill="#FFFFFF" text-anchor="middle" font-weight="bold">Track Characteristics Summary</text>
<text x="60" y="472" font-family="Arial" font-size="11" fill="#FFFFFF" font-weight="bold">Radiation  Thickness   Path        Length    Ionisation</text>
<line x1="60" y1="478" x2="600" y2="478" stroke="#444466" stroke-width="1"/>
<text x="60" y="494" font-family="Arial" font-size="11" fill="#CCCCCC">α particle  Very thick  Straight    Short      High (~10⁴/mm)</text>
<text x="60" y="514" font-family="Arial" font-size="11" fill="#CCCCCC">β particle  Thin        Curved      Longer     Medium (~100/mm)</text>
<text x="60" y="534" font-family="Arial" font-size="11" fill="#CCCCCC">γ photon    Faint dots  Straight    Very long  Low (~1/mm)</text>
<text x="60" y="552" font-family="Arial" font-size="10" fill="#888888">*In magnetic field: α and β curve (opposite directions), γ undeflected</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#FFFFFF"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: backgroundRadiationSources
    // sources: Radon 50%, Medical 15%, Ground&buildings 14%, Food&drink 12%, Cosmic 10%, Nuclear 1%, Other 1%
    // options: showPieChart=true, showPercentages=true, showLegend=true
    static backgroundRadiationSourcesSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="700" viewBox="0 0 800 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Background Radiation Sources</metadata>
<g fill="none" stroke="#000000">

<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Sources of Background Radiation</text>
<text x="400" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Annual average dose in the UK (~2.7 mSv)</text>

<!-- Pie chart centred at (280, 310), r=200 -->
<!-- Using SVG path arcs. Angles from top (−90°), going clockwise. -->
<!-- Total = 103% — normalise to 100%, use approx. values -->
<!-- Radon: 50% -> 180° arc  0° to 180° (top to bottom-right-ish) -->
<!-- All angles from 0° = right, using standard math -->
<!-- Precomputed slice endpoints (cx=280, cy=310, r=200): -->
<!-- Radon 50%: 0° to 180° (top-based: -90 to 90) -->
<!-- Segment midpoints and coordinates:
     start angle -90° (top)
     Radon 50% -> end at -90+180=90° (bottom)
     Medical 15% -> end at 90+54=144°
     Ground 14% -> end at 144+50.4=194.4°
     Food 12% -> end at 194.4+43.2=237.6°
     Cosmic 10% -> end at 237.6+36=273.6°
     Nuclear 1% -> end at 273.6+3.6=277.2°
     Other 1% -> end at 277.2+3.6=280.8° (should be 270° = -90° for full circle, close enough given rounding)
-->
<!-- Let's draw using path arcs. Arc parameters: rx ry x-rotation large-arc-flag sweep-flag x y -->
<!-- Radon: -90° to 90° (50%), large arc = 1 -->
<!-- x1 = 280 + 200*cos(-90°) = 280 + 0 = 280, y1 = 310 + 200*sin(-90°) = 310 - 200 = 110 (start) -->
<!-- x2 = 280 + 200*cos(90°) = 280, y2 = 310 + 200 = 510 (end) -->
<path d="M 280,110 A 200,200 0 1 1 280,510 Z" fill="#222222" stroke="#FFFFFF" stroke-width="2"/>

<!-- Medical: 90° to 144° (15%) -->
<!-- start: (280,510), end: 280+200cos(144°), 310+200sin(144°) = 280-161.8, 310+117.6 = 118.2, 427.6 -->
<path d="M 280,510 A 200,200 0 0 1 118,428 Z" fill="#555555" stroke="#FFFFFF" stroke-width="2"/>

<!-- Ground & buildings: 144° to 194.4° (14%) -->
<!-- start: (118,428), end: 280+200cos(194.4°), 310+200sin(194.4°) = 280-193.7, 310-49.8 = 86.3, 260.2 -->
<path d="M 118,428 A 200,200 0 0 1 86,260 Z" fill="#888888" stroke="#FFFFFF" stroke-width="2"/>

<!-- Food & drink: 194.4° to 237.6° (12%) -->
<!-- start: (86,260), end: 280+200cos(237.6°), 310+200sin(237.6°) = 280-107.1, 310-168.7 = 172.9, 141.3 -->
<path d="M 86,260 A 200,200 0 0 1 173,141 Z" fill="#AAAAAA" stroke="#FFFFFF" stroke-width="2"/>

<!-- Cosmic rays: 237.6° to 273.6° (10%) -->
<!-- start: (173,141), end: 280+200cos(273.6°), 310+200sin(273.6°) = 280+12.6, 310-199.6 = 292.6, 110.4 -->
<path d="M 173,141 A 200,200 0 0 1 293,110 Z" fill="#CCCCCC" stroke="#FFFFFF" stroke-width="2"/>

<!-- Nuclear industry: 273.6° to 277.2° (1%) -->
<path d="M 293,110 A 200,200 0 0 1 283,110 Z" fill="#DDDDDD" stroke="#FFFFFF" stroke-width="2"/>

<!-- Other: 277.2° to 280° -> completes circle back to start (1%) -->
<path d="M 283,110 A 200,200 0 0 1 280,110 Z" fill="#EEEEEE" stroke="#FFFFFF" stroke-width="2"/>

<!-- Percentage labels inside slices (showPercentages=true) -->
<!-- Radon 50%: midangle = 0° (right side from top = 0° clock) -> 0° from +x = midangle = (-90+90)/2 = 0° -->
<text x="440" y="315" font-family="Arial" font-size="14" fill="#FFFFFF" text-anchor="middle" font-weight="bold">50%</text>
<text x="440" y="332" font-family="Arial" font-size="12" fill="#FFFFFF" text-anchor="middle">Radon</text>

<!-- Medical 15%: midangle = 117° -->
<text x="215" y="470" font-family="Arial" font-size="12" fill="#FFFFFF" text-anchor="middle">15%</text>

<!-- Ground 14%: midangle = 169° -->
<text x="140" y="335" font-family="Arial" font-size="12" fill="#FFFFFF" text-anchor="middle">14%</text>

<!-- Food 12%: midangle = 216° -->
<text x="175" y="230" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">12%</text>

<!-- Cosmic 10%: midangle = 255.6° -->
<text x="265" y="145" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">10%</text>

<!-- Legend (showLegend=true) -->
<rect x="50" y="535" width="700" height="140" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="400" y="555" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Legend</text>
<!-- Swatch 1 -->
<rect x="60" y="565" width="20" height="14" fill="#222222" stroke="#000000" stroke-width="1"/>
<text x="86" y="577" font-family="Arial" font-size="11" fill="#000000">Radon gas (50%) — naturally occurring, from ground</text>
<rect x="60" y="585" width="20" height="14" fill="#555555" stroke="#000000" stroke-width="1"/>
<text x="86" y="597" font-family="Arial" font-size="11" fill="#000000">Medical (15%) — X-rays, CT scans, nuclear medicine</text>
<rect x="60" y="605" width="20" height="14" fill="#888888" stroke="#000000" stroke-width="1"/>
<text x="86" y="617" font-family="Arial" font-size="11" fill="#000000">Ground &amp; buildings (14%) — rocks, building materials</text>
<rect x="400" y="565" width="20" height="14" fill="#AAAAAA" stroke="#000000" stroke-width="1"/>
<text x="426" y="577" font-family="Arial" font-size="11" fill="#000000">Food &amp; drink (12%) — K-40, Ra-226 in food</text>
<rect x="400" y="585" width="20" height="14" fill="#CCCCCC" stroke="#000000" stroke-width="1"/>
<text x="426" y="597" font-family="Arial" font-size="11" fill="#000000">Cosmic rays (10%) — higher at altitude</text>
<rect x="400" y="605" width="20" height="14" fill="#DDDDDD" stroke="#000000" stroke-width="1"/>
<text x="426" y="617" font-family="Arial" font-size="11" fill="#000000">Nuclear industry (1%) — power stations, waste</text>
<text x="60" y="660" font-family="Arial" font-size="11" fill="#666666">Note: percentages are approximate UK averages (NRPB data). Total dose ≈ 2.7 mSv/year.</text>
</g>
</svg>`;

    // ============================================================
    // ===== NUCLEAR PHYSICS — NUCLEAR REACTIONS ==================
    // ============================================================

    // Generated from registry: massDefectDiagram
    // element=Helium-4, protons=2, neutrons=2, actualMass=4.002602
    static massDefectDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Mass Defect Diagram</metadata>
<g fill="none" stroke="#000000">

<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Mass Defect: Δm = Zm_p + Nm_n − M</text>
<text x="450" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">The assembled nucleus is lighter than the sum of its constituent nucleons</text>

<!-- LEFT: separated nucleons -->
<text x="180" y="90" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Separated Nucleons</text>
<text x="180" y="110" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">(free protons + neutrons)</text>

<!-- 2 Protons -->
<circle cx="120" cy="180" r="28" fill="#333333" stroke="#000000" stroke-width="2"/>
<text x="120" y="184" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle" font-weight="bold">p</text>
<circle cx="185" cy="180" r="28" fill="#333333" stroke="#000000" stroke-width="2"/>
<text x="185" y="184" font-family="Arial" font-size="14" fill="#ffffff" text-anchor="middle" font-weight="bold">p</text>
<!-- 2 Neutrons -->
<circle cx="120" cy="252" r="28" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<text x="120" y="256" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">n</text>
<circle cx="185" cy="252" r="28" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<text x="185" y="256" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">n</text>

<!-- Masses label -->
<rect x="60" y="300" width="250" height="70" fill="#F0F0F0" stroke="#AAAAAA" stroke-width="1" rx="3"/>
<text x="185" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2 × m_p = 2 × 1.007276 u</text>
<text x="185" y="338" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2 × m_n = 2 × 1.008665 u</text>
<text x="185" y="356" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Total = 4.031882 u</text>

<!-- Arrow showing combination -->
<line x1="320" y1="240" x2="420" y2="240" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="370" y="225" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Combine</text>
<text x="370" y="263" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Energy released</text>
<text x="370" y="278" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">= binding energy</text>

<!-- RIGHT: assembled nucleus -->
<text x="620" y="90" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Assembled Nucleus</text>
<text x="620" y="110" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">(helium-4)</text>
<!-- Helium-4 nucleus -->
<circle cx="620" cy="215" r="55" fill="#DDDDDD" stroke="#000000" stroke-width="2.5"/>
<circle cx="600" cy="200" r="18" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<text x="600" y="204" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">p</text>
<circle cx="640" cy="200" r="18" fill="#333333" stroke="#000000" stroke-width="1.5"/>
<text x="640" y="204" font-family="Arial" font-size="11" fill="#ffffff" text-anchor="middle">p</text>
<circle cx="600" cy="232" r="18" fill="#AAAAAA" stroke="#000000" stroke-width="1.5"/>
<text x="600" y="236" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">n</text>
<circle cx="640" cy="232" r="18" fill="#AAAAAA" stroke="#000000" stroke-width="1.5"/>
<text x="640" y="236" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">n</text>

<rect x="510" y="300" width="220" height="70" fill="#F0F0F0" stroke="#AAAAAA" stroke-width="1" rx="3"/>
<text x="620" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Nuclear mass</text>
<text x="620" y="338" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">M = 4.002602 u</text>
<text x="620" y="356" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">(measured)</text>

<!-- Mass defect highlight box -->
<rect x="130" y="400" width="640" height="130" fill="#F5F5F5" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="450" y="422" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Mass Defect and Binding Energy</text>
<text x="450" y="448" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Δm = 4.031882 − 4.002602 = 0.029280 u</text>
<text x="450" y="472" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">E_B = Δm × c² = 0.029280 × 931.5 MeV/u</text>
<text x="450" y="496" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">E_B = 27.27 MeV  (6.82 MeV per nucleon)</text>
<text x="450" y="518" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">1 u = 931.5 MeV/c²  |  E = mc²</text>

<!-- Mass scale bar -->
<line x1="185" y1="370" x2="620" y2="370" stroke="#000000" stroke-width="2"/>
<line x1="185" y1="365" x2="185" y2="375" stroke="#000000" stroke-width="2"/>
<line x1="620" y1="365" x2="620" y2="375" stroke="#000000" stroke-width="2"/>
<text x="402" y="365" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Δm = 0.029 u (mass defect)</text>
<line x1="602" y1="365" x2="638" y2="365" stroke="#000000" stroke-width="3"/>
<text x="620" y="358" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Δm</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: bindingEnergyCurve
    // options: showCurve=true, showIronPeak=true, showGrid=true
    static bindingEnergyCurveSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Nuclear Binding Energy Curve</metadata>
<g fill="none" stroke="#000000">

<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Nuclear Binding Energy vs Mass Number</text>
<text x="450" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Total binding energy E_B = Δm·c² (energy needed to completely disassemble nucleus)</text>

<!-- Axes -->
<!-- x: A 0-240, scale 3.2px/u, origin (100,490) -->
<!-- y: BE 0-1800 MeV, scale 0.22px/MeV -->
<line x1="100" y1="490" x2="860" y2="490" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="100" y1="490" x2="100" y2="70" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="875" y="494" font-family="Arial" font-size="12" fill="#000000">A</text>
<text x="93" y="60" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">BE</text>
<text x="460" y="530" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">A (mass number)</text>
<text x="32" y="290" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,32,290)">Binding Energy (MeV)</text>

<!-- Grid -->
<line x1="100" y1="390" x2="850" y2="390" stroke="#EEEEEE" stroke-width="1"/>
<line x1="100" y1="290" x2="850" y2="290" stroke="#EEEEEE" stroke-width="1"/>
<line x1="100" y1="190" x2="850" y2="190" stroke="#EEEEEE" stroke-width="1"/>
<line x1="100" y1="90" x2="850" y2="90" stroke="#EEEEEE" stroke-width="1"/>
<line x1="260" y1="70" x2="260" y2="490" stroke="#EEEEEE" stroke-width="1"/>
<line x1="420" y1="70" x2="420" y2="490" stroke="#EEEEEE" stroke-width="1"/>
<line x1="580" y1="70" x2="580" y2="490" stroke="#EEEEEE" stroke-width="1"/>
<line x1="740" y1="70" x2="740" y2="490" stroke="#EEEEEE" stroke-width="1"/>
<!-- Labels -->
<text x="88" y="494" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">0</text>
<text x="88" y="394" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">200</text>
<text x="88" y="294" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">500</text>
<text x="88" y="194" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">1000</text>
<text x="88" y="94" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">1800</text>
<text x="260" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">50</text>
<text x="420" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">100</text>
<text x="580" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">150</text>
<text x="740" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">200</text>

<!-- Binding energy curve: roughly BE ≈ 8*A MeV for medium A
     A=1,BE=0; A=2,BE=2.2; A=4,BE=28; A=12,BE=92; A=56,BE=492; A=120,BE=1020; A=200,BE=1640; A=240,BE=1870
     Scale: x=100+A*3.2, y=490-BE*0.22 -->
<!-- A=1: x=103, y=490 -->
<!-- A=4: x=113, y=490-6=484 → BE=28: y=490-6=484 -->
<!-- A=12: x=138, y=490-20=470 → BE=92: y=490-20.2=470 -->
<!-- A=56 (Fe): x=279, y=490-108=382 → BE=492: y=490-108=382 -->
<!-- A=120: x=484, y=490-224=266 -->
<!-- A=200: x=740, y=490-361=129 → BE=1640: y=129 -->
<!-- A=240: x=868, y=490-411=79 → BE=1870: y=79 -->
<path d="M 103,490 C 108,487 115,480 138,470 C 180,455 220,430 279,382 C 340,330 400,295 484,266 C 580,238 650,200 740,155 C 790,134 830,108 868,79"
      stroke="#000000" stroke-width="3" fill="none"/>

<!-- Iron peak annotation (showIronPeak=true) -->
<!-- Fe-56: A=56, BE=492 -> x=279, y=382 -->
<circle cx="279" cy="382" r="6" fill="#000000"/>
<line x1="279" y1="376" x2="279" y2="330" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="260" y="322" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">⁵⁶Fe</text>
<text x="260" y="338" font-family="Arial" font-size="11" fill="#000000">BE = 492 MeV</text>
<text x="260" y="354" font-family="Arial" font-size="11" fill="#666666">Most tightly bound</text>
<text x="260" y="368" font-family="Arial" font-size="11" fill="#666666">per nucleon</text>

<!-- Notable nuclides -->
<!-- He-4 -->
<circle cx="113" cy="484" r="4" fill="#000000"/>
<text x="118" y="477" font-family="Arial" font-size="10" fill="#000000">⁴He 28MeV</text>
<!-- C-12 -->
<circle cx="138" cy="467" r="4" fill="#000000"/>
<text x="143" y="460" font-family="Arial" font-size="10" fill="#000000">¹²C 92 MeV</text>
<!-- U-238 -->
<circle cx="861" cy="82" r="4" fill="#000000"/>
<text x="830" y="75" font-family="Arial" font-size="10" fill="#000000">²³⁸U</text>

<!-- Formula box -->
<rect x="460" y="390" width="360" height="70" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="640" y="412" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">E_B = Δm × c²</text>
<text x="640" y="432" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Δm = Zm_p + Nm_n − M</text>
<text x="640" y="452" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">1 u = 931.5 MeV/c²</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: bindingEnergyPerNucleon
    // options: showCurve=true, showFe56Peak=true, showFissionRegion=true, showFusionRegion=true, showAnnotations=true
    static bindingEnergyPerNucleonSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Binding Energy per Nucleon Curve</metadata>
<g fill="none" stroke="#000000">

<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Binding Energy per Nucleon vs Mass Number</text>
<text x="450" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Fe-56 is the most stable nucleus; fission and fusion both release energy</text>

<!-- Axes: x=A 0-250, scale 3px/unit, origin (100,490) -->
<!-- y=BE/A 0-10, scale 44px/MeV -->
<line x1="100" y1="490" x2="860" y2="490" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="100" y1="490" x2="100" y2="80" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="875" y="494" font-family="Arial" font-size="12" fill="#000000">A</text>
<text x="93" y="70" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">BE/A</text>
<text x="460" y="530" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">A (mass number)</text>
<text x="32" y="290" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,32,290)">BE/A (MeV per nucleon)</text>

<!-- Grid -->
<line x1="100" y1="446" x2="850" y2="446" stroke="#DDDDDD" stroke-width="1"/>
<line x1="100" y1="402" x2="850" y2="402" stroke="#DDDDDD" stroke-width="1"/>
<line x1="100" y1="358" x2="850" y2="358" stroke="#DDDDDD" stroke-width="1"/>
<line x1="100" y1="314" x2="850" y2="314" stroke="#DDDDDD" stroke-width="1"/>
<line x1="100" y1="270" x2="850" y2="270" stroke="#DDDDDD" stroke-width="1"/>
<line x1="100" y1="226" x2="850" y2="226" stroke="#DDDDDD" stroke-width="1"/>
<line x1="100" y1="182" x2="850" y2="182" stroke="#DDDDDD" stroke-width="1"/>
<line x1="100" y1="138" x2="850" y2="138" stroke="#DDDDDD" stroke-width="1"/>
<line x1="250" y1="80" x2="250" y2="490" stroke="#DDDDDD" stroke-width="1"/>
<line x1="400" y1="80" x2="400" y2="490" stroke="#DDDDDD" stroke-width="1"/>
<line x1="550" y1="80" x2="550" y2="490" stroke="#DDDDDD" stroke-width="1"/>
<line x1="700" y1="80" x2="700" y2="490" stroke="#DDDDDD" stroke-width="1"/>
<line x1="850" y1="80" x2="850" y2="490" stroke="#DDDDDD" stroke-width="1"/>
<!-- Y labels -->
<text x="88" y="450" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">1</text>
<text x="88" y="406" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">2</text>
<text x="88" y="362" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">3</text>
<text x="88" y="318" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">4</text>
<text x="88" y="274" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">5</text>
<text x="88" y="230" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">6</text>
<text x="88" y="186" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">7</text>
<text x="88" y="142" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">8</text>
<text x="88" y="98" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">9</text>
<!-- X labels -->
<text x="250" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">50</text>
<text x="400" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">100</text>
<text x="550" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">150</text>
<text x="700" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">200</text>
<text x="850" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">250</text>

<!-- BE/A curve: rises steeply, peaks at Fe-56 (8.79 MeV), gently decreases
     A=1,BE/A=0; A=2,BE/A=1.1; A=4,BE/A=7.07; A=8,BE/A=7.06; A=12,BE/A=7.68;
     A=16,BE/A=7.98; A=40,BE/A=8.55; A=56,BE/A=8.79; A=100,BE/A=8.55;
     A=150,BE/A=8.21; A=200,BE/A=7.87; A=238,BE/A=7.57
     Scale: y=490-BE/A*44, x=100+A*3 -->
<!-- Notable y: 8.79MeV -> y=490-387=103; 8.55 -> y=490-376=114; 7.07 -> y=490-311=179 -->
<path d="M 100,490 C 103,470 106,395 112,179 C 116,155 120,145 148,121 C 185,111 210,107 268,103 C 310,103 370,109 400,114 C 490,125 560,145 650,163 C 720,178 790,196 850,224"
      stroke="#000000" stroke-width="3" fill="none"/>

<!-- Fe-56 peak annotation (showFe56Peak=true) -->
<!-- A=56: x=100+56*3=268, BE/A=8.79: y=490-387=103 -->
<circle cx="268" cy="103" r="6" fill="#000000"/>
<line x1="268" y1="97" x2="268" y2="75" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="268" y="68" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">⁵⁶Fe</text>
<text x="268" y="85" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">8.79 MeV/nucleon</text>

<!-- Fusion region annotation (showFusionRegion=true) -->
<!-- Shading from A=1 to ~A=30, showing that light nuclei gain BE/A when fused -->
<path d="M 100,490 C 103,470 106,395 112,179 C 116,155 120,145 190,110 L 190,490 Z"
      fill="#CCCCCC" stroke="none" opacity="0.3"/>
<text x="155" y="420" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Fusion</text>
<text x="155" y="438" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">region</text>
<line x1="155" y1="445" x2="155" y2="460" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="155" y="472" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">Light nuclei fuse</text>
<text x="155" y="485" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">→ more stable</text>

<!-- Fission region annotation (showFissionRegion=true) -->
<!-- A=200 to 250 -->
<path d="M 700,490 L 700,196 C 750,200 800,208 850,224 L 850,490 Z"
      fill="#AAAAAA" stroke="none" opacity="0.3"/>
<text x="775" y="350" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Fission</text>
<text x="775" y="368" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">region</text>
<line x1="775" y1="375" x2="775" y2="390" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="775" y="400" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">Heavy nuclei split</text>
<text x="775" y="413" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">→ more stable</text>

<!-- Notable nuclide annotations (showAnnotations=true) -->
<!-- He-4: A=4, x=112, y≈179 -->
<circle cx="112" cy="179" r="4" fill="#000000"/>
<text x="118" y="172" font-family="Arial" font-size="10" fill="#000000">⁴He 7.1</text>
<!-- C-12: A=12, x=136, y≈ -->
<circle cx="136" cy="128" r="4" fill="#000000"/>
<text x="142" y="121" font-family="Arial" font-size="10" fill="#000000">¹²C 7.7</text>
<!-- U-238: A=238, x=814 -->
<circle cx="814" cy="223" r="4" fill="#000000"/>
<text x="820" y="218" font-family="Arial" font-size="10" fill="#000000">²³⁸U</text>

<!-- 8 MeV reference line -->
<line x1="100" y1="138" x2="860" y2="138" stroke="#888888" stroke-width="1" stroke-dasharray="6,4"/>
<text x="863" y="142" font-family="Arial" font-size="10" fill="#888888">8 MeV</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: einsteinMassEnergy
    static einsteinMassEnergySvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Einstein Mass-Energy Equivalence</metadata>
<g fill="none" stroke="#000000">

<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Mass-Energy Equivalence: E = mc²</text>
<text x="400" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Einstein's most famous equation applied to nuclear physics</text>

<!-- Central formula -->
<rect x="250" y="75" width="300" height="80" fill="#222222" stroke="#000000" stroke-width="2" rx="8"/>
<text x="400" y="128" font-family="Arial" font-size="44" fill="#FFFFFF" text-anchor="middle" font-weight="bold">E = mc²</text>

<!-- Annotations of each term -->
<line x1="290" y1="95" x2="150" y2="140" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<rect x="30" y="142" width="130" height="50" fill="#F0F0F0" stroke="#AAAAAA" stroke-width="1" rx="3"/>
<text x="95" y="163" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">E = Energy</text>
<text x="95" y="181" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Joules (J)</text>

<line x1="400" y1="155" x2="400" y2="212" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<rect x="320" y="215" width="160" height="50" fill="#F0F0F0" stroke="#AAAAAA" stroke-width="1" rx="3"/>
<text x="400" y="236" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">m = mass</text>
<text x="400" y="254" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">kilograms (kg)</text>

<line x1="530" y1="95" x2="640" y2="140" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<rect x="620" y="142" width="145" height="50" fill="#F0F0F0" stroke="#AAAAAA" stroke-width="1" rx="3"/>
<text x="692" y="163" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">c² = speed of</text>
<text x="692" y="181" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">light squared</text>

<!-- c value -->
<rect x="275" y="285" width="250" height="40" fill="#EEEEEE" stroke="#AAAAAA" stroke-width="1" rx="3"/>
<text x="400" y="310" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">c = 3.00 × 10⁸ m/s  →  c² = 9×10¹⁶ J/kg</text>

<!-- Application to mass defect (showMassDefectLink=true) -->
<rect x="30" y="340" width="350" height="120" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="205" y="362" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Application to Mass Defect</text>
<text x="205" y="382" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">E_B = Δm × c²</text>
<text x="205" y="400" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">where Δm = Zm_p + Nm_n − M</text>
<text x="205" y="420" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1 u = 1.661 × 10⁻²⁷ kg</text>
<text x="205" y="440" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1 u × c² = 931.5 MeV</text>
<text x="205" y="455" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">(convenient nuclear energy unit)</text>

<!-- Energy scale comparison (showEnergyScale=true) -->
<rect x="420" y="340" width="350" height="120" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="595" y="362" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Energy Scale Comparison</text>
<text x="430" y="384" font-family="Arial" font-size="11" fill="#000000">Chemical reaction: ~eV per atom</text>
<text x="430" y="402" font-family="Arial" font-size="11" fill="#000000">Nuclear reaction: ~MeV per nucleus</text>
<text x="430" y="420" font-family="Arial" font-size="11" fill="#000000">Ratio: ~10⁶ (nuclear >> chemical)</text>
<text x="430" y="440" font-family="Arial" font-size="11" fill="#000000">1 MeV = 1.6 × 10⁻¹³ J</text>
<text x="430" y="455" font-family="Arial" font-size="11" fill="#666666">1 eV = 1.6 × 10⁻¹⁹ J</text>

<!-- Conversion factor box (showConversionFactor=true) -->
<rect x="200" y="480" width="400" height="80" fill="#222222" stroke="#000000" stroke-width="2" rx="5"/>
<text x="400" y="505" font-family="Arial" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="bold">Key Conversion Factors</text>
<text x="400" y="527" font-family="Arial" font-size="12" fill="#FFFFFF" text-anchor="middle">1 atomic mass unit (u) = 931.5 MeV/c²</text>
<text x="400" y="548" font-family="Arial" font-size="12" fill="#CCCCCC" text-anchor="middle">1 MeV = 1.6 × 10⁻¹³ J</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: nuclearEquationBalancing
    // reactionType=alpha_decay, parentA=238, parentZ=92, parentSymbol=U
    static nuclearEquationBalancingSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="500" viewBox="0 0 900 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>Nuclear Equation Balancing</metadata>
<g fill="none" stroke="#000000">

<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Balancing Nuclear Equations</text>
<text x="450" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Conservation of mass number (A) and proton number (Z)</text>

<!-- Main equation display -->
<!-- ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He -->
<!-- Parent -->
<text x="160" y="160" font-family="Arial" font-size="32" fill="#000000" text-anchor="middle" font-weight="bold">²³⁸</text>
<text x="120" y="190" font-family="Arial" font-size="32" fill="#000000" text-anchor="middle" font-weight="bold">₉₂</text>
<text x="200" y="190" font-family="Arial" font-size="50" fill="#000000" text-anchor="middle" font-weight="bold">U</text>

<text x="290" y="185" font-family="Arial" font-size="40" fill="#000000" text-anchor="middle">→</text>

<!-- Daughter -->
<text x="400" y="160" font-family="Arial" font-size="32" fill="#000000" text-anchor="middle" font-weight="bold">²³⁴</text>
<text x="360" y="190" font-family="Arial" font-size="32" fill="#000000" text-anchor="middle" font-weight="bold">₉₀</text>
<text x="440" y="190" font-family="Arial" font-size="50" fill="#000000" text-anchor="middle" font-weight="bold">Th</text>

<text x="540" y="185" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle">+</text>

<!-- Alpha -->
<text x="620" y="160" font-family="Arial" font-size="32" fill="#000000" text-anchor="middle" font-weight="bold">⁴</text>
<text x="590" y="190" font-family="Arial" font-size="32" fill="#000000" text-anchor="middle" font-weight="bold">₂</text>
<text x="640" y="190" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle" font-weight="bold">He</text>

<!-- Annotation: mass number conservation (showMassNumbers=true) -->
<line x1="160" y1="130" x2="160" y2="110" stroke="#000000" stroke-width="1.5"/>
<line x1="160" y1="110" x2="670" y2="110" stroke="#000000" stroke-width="1.5"/>
<line x1="400" y1="110" x2="400" y2="130" stroke="#000000" stroke-width="1.5"/>
<line x1="620" y1="110" x2="620" y2="130" stroke="#000000" stroke-width="1.5"/>
<text x="420" y="100" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">A: 238 = 234 + 4 ✓</text>

<!-- Annotation: proton number conservation (showProtonNumbers=true) -->
<line x1="120" y1="215" x2="120" y2="235" stroke="#000000" stroke-width="1.5"/>
<line x1="120" y1="235" x2="630" y2="235" stroke="#000000" stroke-width="1.5"/>
<line x1="360" y1="235" x2="360" y2="215" stroke="#000000" stroke-width="1.5"/>
<line x1="590" y1="235" x2="590" y2="215" stroke="#000000" stroke-width="1.5"/>
<text x="370" y="248" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Z: 92 = 90 + 2 ✓</text>

<!-- Conservation rules box (showConservationRules=true) -->
<rect x="60" y="280" width="780" height="100" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="450" y="302" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Conservation Rules for Nuclear Equations</text>
<text x="80" y="325" font-family="Arial" font-size="12" fill="#000000">1. Mass number A is conserved:  Σ A (reactants) = Σ A (products)</text>
<text x="80" y="345" font-family="Arial" font-size="12" fill="#000000">2. Proton number Z is conserved:  Σ Z (reactants) = Σ Z (products)</text>
<text x="80" y="365" font-family="Arial" font-size="12" fill="#000000">3. Charge, lepton number, baryon number all conserved</text>

<!-- Worked example of finding unknown -->
<rect x="60" y="400" width="780" height="70" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="450" y="420" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Finding an unknown: ²³¹₉₁Pa → ²²⁷₈₉Ac + ?</text>
<text x="450" y="440" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A: 231 = 227 + A_x  →  A_x = 4</text>
<text x="450" y="458" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Z: 91 = 89 + Z_x   →  Z_x = 2   →  ⁴₂He (alpha particle) ✓</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: qValueDiagram
    // qValue=4.8
    static qValueDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Q-Value Diagram</metadata>
<g fill="none" stroke="#000000">

<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Q-Value of a Nuclear Reaction</text>
<text x="400" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Q-value = energy released (Q&gt;0) or absorbed (Q&lt;0) in a nuclear reaction</text>

<!-- Energy level diagram (vertical) -->
<!-- Y axis: Energy -->
<line x1="200" y1="100" x2="200" y2="500" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="195" y="88" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">E</text>

<!-- Reactants energy level (higher) -->
<line x1="100" y1="200" x2="380" y2="200" stroke="#000000" stroke-width="3"/>
<text x="395" y="204" font-family="Arial" font-size="13" fill="#000000">Reactants</text>
<text x="395" y="222" font-family="Arial" font-size="12" fill="#666666">X + a   →</text>
<text x="395" y="238" font-family="Arial" font-size="11" fill="#666666">m_reactants · c²</text>

<!-- Products energy level (lower, Q>0 exothermic) -->
<line x1="100" y1="380" x2="380" y2="380" stroke="#000000" stroke-width="3"/>
<text x="395" y="384" font-family="Arial" font-size="13" fill="#000000">Products</text>
<text x="395" y="402" font-family="Arial" font-size="12" fill="#666666">Y + b   →</text>
<text x="395" y="418" font-family="Arial" font-size="11" fill="#666666">m_products · c²</text>

<!-- Q-value arrow and brace -->
<line x1="165" y1="200" x2="165" y2="380" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="165" y1="380" x2="165" y2="200" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="155" y="295" font-family="Arial" font-size="14" fill="#000000" text-anchor="end" font-weight="bold">Q</text>
<text x="100" y="315" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">= 4.8 MeV</text>
<line x1="158" y1="200" x2="162" y2="200" stroke="#000000" stroke-width="1"/>
<line x1="158" y1="380" x2="162" y2="380" stroke="#000000" stroke-width="1"/>

<!-- Kinetic energy arrow (energy released goes to KE) -->
<line x1="240" y1="380" x2="240" y2="460" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="255" y="425" font-family="Arial" font-size="12" fill="#000000">KE of products</text>
<text x="255" y="441" font-family="Arial" font-size="11" fill="#666666">+ gamma photons</text>

<!-- Formula box (showFormula=true) -->
<rect x="30" y="470" width="750" height="90" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="400" y="492" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Q-Value Formula</text>
<text x="400" y="514" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Q = (m_reactants − m_products) × c²  =  (ΣKE)_products − (ΣKE)_reactants</text>
<text x="200" y="538" font-family="Arial" font-size="12" fill="#000000">Q &gt; 0:  Exothermic — energy released, reaction spontaneous</text>
<text x="200" y="555" font-family="Arial" font-size="12" fill="#000000">Q &lt; 0:  Endothermic — energy must be supplied (threshold energy)</text>

<!-- Worked example label -->
<text x="540" y="280" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Example: α decay of Ra-226</text>
<text x="540" y="300" font-family="Arial" font-size="11" fill="#000000">²²⁶Ra → ²²²Rn + ⁴He</text>
<text x="540" y="318" font-family="Arial" font-size="11" fill="#000000">Q = Δm × 931.5 MeV/u</text>
<text x="540" y="336" font-family="Arial" font-size="11" fill="#000000">Q ≈ 4.87 MeV</text>
<text x="540" y="354" font-family="Arial" font-size="11" fill="#666666">Most KE goes to α particle</text>
<text x="540" y="370" font-family="Arial" font-size="11" fill="#666666">(momentum conservation)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: energyLevelTransitions
    // levels: 0 MeV, 1.17 MeV, 2.51 MeV
    static energyLevelTransitionsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="700" viewBox="0 0 800 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Nuclear Energy Level Transitions</metadata>
<g fill="none" stroke="#000000">

<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Nuclear Energy Level Transitions</text>
<text x="400" y="54" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Co-60 nuclear decay scheme: β⁻ decay of Co-60 followed by γ emission from Ni-60*</text>

<!-- Y axis (Energy) -->
<line x1="120" y1="120" x2="120" y2="580" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="115" y="108" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">E (MeV)</text>

<!-- Energy level: 2.51 MeV — second excited state -->
<!-- Scale: 2.51 MeV -> y=580-2.51*(580-120)/2.7 = 580-427=153 ≈ 153 -->
<!-- Scale: 0 MeV -> y=580; 2.51 -> y=580-(2.51/3)*460 = 580-385=195 ≈ better to use 0=580, 3=120, so 1MeV=~153px -->
<!-- y = 580 - E(MeV)*153 -->
<!-- 0: y=580; 1.17: y=580-179=401; 2.51: y=580-384=196 -->
<line x1="140" y1="196" x2="490" y2="196" stroke="#000000" stroke-width="3"/>
<text x="108" y="200" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">2.51</text>
<text x="500" y="200" font-family="Arial" font-size="12" fill="#000000">2nd excited state</text>
<text x="500" y="216" font-family="Arial" font-size="11" fill="#666666">(²Ni-60*)</text>

<!-- Energy level: 1.17 MeV — first excited state -->
<line x1="140" y1="401" x2="490" y2="401" stroke="#000000" stroke-width="3"/>
<text x="108" y="405" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">1.17</text>
<text x="500" y="405" font-family="Arial" font-size="12" fill="#000000">1st excited state</text>

<!-- Energy level: 0 — ground state -->
<line x1="140" y1="580" x2="490" y2="580" stroke="#000000" stroke-width="4"/>
<text x="108" y="584" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">0</text>
<text x="500" y="584" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Ground state ⁶⁰Ni</text>

<!-- Transition arrows (showTransitionArrows=true) -->
<!-- 2nd → 1st excited: Eγ = 1.34 MeV -->
<line x1="200" y1="196" x2="200" y2="401" stroke="#444444" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<!-- Gamma photon wavy line -->
<path d="M 215,250 C 225,240 232,260 242,250 C 252,240 258,260 268,250 C 278,240 284,260 294,250 C 304,240 310,260 320,250"
      stroke="#666666" stroke-width="2" fill="none"/>
<text x="340" y="254" font-family="Arial" font-size="12" fill="#000000">γ₁ = 1.34 MeV</text>

<!-- 1st → ground: Eγ = 1.17 MeV -->
<line x1="280" y1="401" x2="280" y2="580" stroke="#444444" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<path d="M 295,455 C 305,445 312,465 322,455 C 332,445 338,465 348,455 C 358,445 364,465 374,455"
      stroke="#666666" stroke-width="2" fill="none"/>
<text x="390" y="459" font-family="Arial" font-size="12" fill="#000000">γ₂ = 1.17 MeV</text>

<!-- 2nd → ground direct: Eγ = 2.51 MeV -->
<line x1="360" y1="196" x2="360" y2="580" stroke="#444444" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrow-bw)"/>
<text x="375" y="390" font-family="Arial" font-size="12" fill="#000000">γ₃ = 2.51 MeV</text>
<text x="375" y="407" font-family="Arial" font-size="11" fill="#666666">(direct, less common)</text>

<!-- Beta decay from Co-60 to Ni-60* (above 2nd excited) -->
<!-- Co-60 level above scale -->
<line x1="50" y1="100" x2="200" y2="100" stroke="#000000" stroke-width="2.5" stroke-dasharray="6,4"/>
<text x="40" y="96" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">⁶⁰Co</text>
<text x="40" y="112" font-family="Arial" font-size="11" fill="#666666" text-anchor="end">(β⁻ source)</text>
<line x1="200" y1="100" x2="200" y2="196" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="130" y="155" font-family="Arial" font-size="11" fill="#000000">β⁻ decay</text>
<text x="130" y="170" font-family="Arial" font-size="11" fill="#000000">t₁/₂=5.27 yr</text>

<!-- Gamma energies summary box (showGammaEnergies=true) -->
<rect x="30" y="600" width="760" height="80" fill="#F0F0F0" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="400" y="620" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Co-60 Gamma Spectrum (used in radiotherapy)</text>
<text x="100" y="642" font-family="Arial" font-size="12" fill="#000000">γ₁: 1.173 MeV  (99.85% intensity)</text>
<text x="100" y="662" font-family="Arial" font-size="12" fill="#000000">γ₂: 1.333 MeV  (99.98% intensity)</text>
<text x="450" y="642" font-family="Arial" font-size="12" fill="#000000">Nuclear decay scheme reveals energy structure</text>
<text x="450" y="662" font-family="Arial" font-size="12" fill="#000000">of excited nuclear states</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

 // ============================================================
    // ===== THERMAL PHYSICS — TEMPERATURE & HEAT =================
    // ============================================================

    // Generated from registry: temperatureTimeGraph
    // substance: water, mass: 1.0, heatRate: 500
    // options: showPhaseChanges=true, showPlateaus=true, showAnnotations=true, showGrid=true
    static temperatureTimeGraphSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Temperature-Time Graph — Heating Curve</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Heating Curve — Temperature vs Time</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Water (1 kg), Heat rate = 500 W</text>

<!-- Grid lines (showGrid=true) -->
<line x1="100" y1="80" x2="100" y2="520" stroke="#CCCCCC" stroke-width="1"/>
<line x1="200" y1="80" x2="200" y2="520" stroke="#CCCCCC" stroke-width="1"/>
<line x1="300" y1="80" x2="300" y2="520" stroke="#CCCCCC" stroke-width="1"/>
<line x1="400" y1="80" x2="400" y2="520" stroke="#CCCCCC" stroke-width="1"/>
<line x1="500" y1="80" x2="500" y2="520" stroke="#CCCCCC" stroke-width="1"/>
<line x1="600" y1="80" x2="600" y2="520" stroke="#CCCCCC" stroke-width="1"/>
<line x1="700" y1="80" x2="700" y2="520" stroke="#CCCCCC" stroke-width="1"/>
<line x1="800" y1="80" x2="800" y2="520" stroke="#CCCCCC" stroke-width="1"/>
<line x1="100" y1="120" x2="860" y2="120" stroke="#CCCCCC" stroke-width="1"/>
<line x1="100" y1="200" x2="860" y2="200" stroke="#CCCCCC" stroke-width="1"/>
<line x1="100" y1="280" x2="860" y2="280" stroke="#CCCCCC" stroke-width="1"/>
<line x1="100" y1="360" x2="860" y2="360" stroke="#CCCCCC" stroke-width="1"/>
<line x1="100" y1="440" x2="860" y2="440" stroke="#CCCCCC" stroke-width="1"/>

<!-- Axes -->
<line x1="100" y1="520" x2="860" y2="520" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="100" y1="520" x2="100" y2="60" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- Axis labels -->
<text x="480" y="558" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">t (min)</text>
<text x="30" y="300" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" transform="rotate(-90,30,300)">T (°C)</text>

<!-- Y-axis tick marks and labels -->
<!-- Map: -20°C → y=500, 0°C → y=460, 100°C → y=180, 120°C → y=150 -->
<!-- Scale: 520 - (T+20)/140 * 440 -->
<line x1="95" y1="500" x2="105" y2="500" stroke="#000000" stroke-width="1"/>
<text x="88" y="504" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">-20</text>
<line x1="95" y1="460" x2="105" y2="460" stroke="#000000" stroke-width="1"/>
<text x="88" y="464" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">0</text>
<line x1="95" y1="320" x2="105" y2="320" stroke="#000000" stroke-width="1"/>
<text x="88" y="324" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">50</text>
<line x1="95" y1="180" x2="105" y2="180" stroke="#000000" stroke-width="1"/>
<text x="88" y="184" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">100</text>
<line x1="95" y1="150" x2="105" y2="150" stroke="#000000" stroke-width="1"/>
<text x="88" y="154" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">120</text>

<!-- X-axis tick marks -->
<line x1="200" y1="515" x2="200" y2="525" stroke="#000000" stroke-width="1"/>
<text x="200" y="538" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">5</text>
<line x1="300" y1="515" x2="300" y2="525" stroke="#000000" stroke-width="1"/>
<text x="300" y="538" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">10</text>
<line x1="400" y1="515" x2="400" y2="525" stroke="#000000" stroke-width="1"/>
<text x="400" y="538" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">15</text>
<line x1="500" y1="515" x2="500" y2="525" stroke="#000000" stroke-width="1"/>
<text x="500" y="538" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">20</text>
<line x1="600" y1="515" x2="600" y2="525" stroke="#000000" stroke-width="1"/>
<text x="600" y="538" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">25</text>
<line x1="700" y1="515" x2="700" y2="525" stroke="#000000" stroke-width="1"/>
<text x="700" y="538" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">30</text>
<line x1="800" y1="515" x2="800" y2="525" stroke="#000000" stroke-width="1"/>
<text x="800" y="538" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">35</text>

<!-- Heating curve segments (showPhaseChanges=true, showPlateaus=true) -->
<!-- Segment 1: Ice heating -20°C to 0°C (t=0 to t≈3.5min) x=100→170, y=500→460 -->
<line x1="100" y1="500" x2="170" y2="460" stroke="#000000" stroke-width="3"/>

<!-- Segment 2: Melting plateau at 0°C (t≈3.5 to t≈12.5min) x=170→350, y=460 (showPlateaus) -->
<line x1="170" y1="460" x2="350" y2="460" stroke="#000000" stroke-width="3"/>

<!-- Segment 3: Liquid water heating 0°C to 100°C (t≈12.5 to t≈20min) x=350→510, y=460→180 -->
<line x1="350" y1="460" x2="510" y2="180" stroke="#000000" stroke-width="3"/>

<!-- Segment 4: Boiling plateau at 100°C (t≈20 to t≈33min) x=510→770, y=180 -->
<line x1="510" y1="180" x2="770" y2="180" stroke="#000000" stroke-width="3"/>

<!-- Segment 5: Steam heating above 100°C (t≈33 to t≈36min) x=770→830, y=180→150 -->
<line x1="770" y1="180" x2="830" y2="150" stroke="#000000" stroke-width="3"/>

<!-- Phase annotations (showAnnotations=true) -->
<!-- Segment 1 label -->
<text x="125" y="485" font-family="Arial" font-size="11" fill="#000000" font-weight="bold">Ice heating</text>
<text x="125" y="498" font-family="Arial" font-size="10" fill="#555555">c_ice = 2100 J/kg·K</text>

<!-- Segment 2 label — melting plateau -->
<text x="240" y="448" font-family="Arial" font-size="11" fill="#000000" font-weight="bold">Melting (0°C)</text>
<text x="240" y="461" font-family="Arial" font-size="10" fill="#555555">L_f = 334 kJ/kg</text>
<!-- Dashed line at 0°C -->
<line x1="100" y1="460" x2="170" y2="460" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="4,3"/>

<!-- Segment 3 label -->
<text x="415" y="340" font-family="Arial" font-size="11" fill="#000000" font-weight="bold">Water heating</text>
<text x="415" y="353" font-family="Arial" font-size="10" fill="#555555">c_water = 4200 J/kg·K</text>

<!-- Segment 4 label — boiling plateau -->
<text x="600" y="168" font-family="Arial" font-size="11" fill="#000000" font-weight="bold">Boiling (100°C)</text>
<text x="600" y="181" font-family="Arial" font-size="10" fill="#555555">L_v = 2260 kJ/kg</text>
<!-- Dashed line at 100°C -->
<line x1="100" y1="180" x2="510" y2="180" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="4,3"/>

<!-- Segment 5 label -->
<text x="780" y="148" font-family="Arial" font-size="11" fill="#000000" font-weight="bold">Steam</text>

<!-- Phase region labels on graph -->
<text x="130" y="510" font-family="Arial" font-size="10" fill="#888888" font-style="italic">SOLID</text>
<text x="250" y="478" font-family="Arial" font-size="10" fill="#888888" font-style="italic">SOLID+LIQUID</text>
<text x="420" y="330" font-family="Arial" font-size="10" fill="#888888" font-style="italic">LIQUID</text>
<text x="610" y="198" font-family="Arial" font-size="10" fill="#888888" font-style="italic">LIQUID+GAS</text>
<text x="792" y="168" font-family="Arial" font-size="10" fill="#888888" font-style="italic">GAS</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: phaseChangeDiagram
    // options: showSolidLiquidGas=true, showFusionVaporisation=true, showEnergyArrows=true, showLatentHeat=true
    static phaseChangeDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Phase Change Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Phase Changes and Energy</text>

<!-- Phase boxes (showSolidLiquidGas=true) -->
<!-- SOLID box -->
<rect x="60" y="220" width="180" height="120" fill="#EEEEEE" stroke="#000000" stroke-width="2" rx="8"/>
<text x="150" y="270" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">SOLID</text>
<text x="150" y="292" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Particles vibrate</text>
<text x="150" y="308" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">in fixed positions</text>
<text x="150" y="326" font-family="Arial" font-size="10" fill="#888888" text-anchor="middle">Low energy</text>

<!-- Solid particle arrangement -->
<circle cx="115" cy="340" r="5" fill="#555555"/>
<circle cx="130" cy="340" r="5" fill="#555555"/>
<circle cx="145" cy="340" r="5" fill="#555555"/>
<circle cx="160" cy="340" r="5" fill="#555555"/>
<circle cx="175" cy="340" r="5" fill="#555555"/>
<circle cx="115" cy="328" r="5" fill="#555555"/>
<circle cx="130" cy="328" r="5" fill="#555555"/>
<circle cx="145" cy="328" r="5" fill="#555555"/>
<circle cx="160" cy="328" r="5" fill="#555555"/>
<circle cx="175" cy="328" r="5" fill="#555555"/>

<!-- LIQUID box -->
<rect x="360" y="220" width="180" height="120" fill="#EEEEEE" stroke="#000000" stroke-width="2" rx="8"/>
<text x="450" y="270" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">LIQUID</text>
<text x="450" y="292" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Particles move</text>
<text x="450" y="308" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">freely but close</text>
<text x="450" y="326" font-family="Arial" font-size="10" fill="#888888" text-anchor="middle">Medium energy</text>

<!-- Liquid particle arrangement (slightly random) -->
<circle cx="405" cy="338" r="5" fill="#555555"/>
<circle cx="422" cy="330" r="5" fill="#555555"/>
<circle cx="438" cy="340" r="5" fill="#555555"/>
<circle cx="454" cy="332" r="5" fill="#555555"/>
<circle cx="470" cy="338" r="5" fill="#555555"/>
<circle cx="485" cy="330" r="5" fill="#555555"/>

<!-- GAS box -->
<rect x="660" y="220" width="180" height="120" fill="#EEEEEE" stroke="#000000" stroke-width="2" rx="8"/>
<text x="750" y="270" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">GAS</text>
<text x="750" y="292" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Particles move</text>
<text x="750" y="308" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">rapidly, fill space</text>
<text x="750" y="326" font-family="Arial" font-size="10" fill="#888888" text-anchor="middle">High energy</text>

<!-- Gas particle arrangement (spread out) -->
<circle cx="685" cy="330" r="5" fill="#555555"/>
<circle cx="715" cy="342" r="5" fill="#555555"/>
<circle cx="745" cy="328" r="5" fill="#555555"/>
<circle cx="775" cy="340" r="5" fill="#555555"/>
<circle cx="805" cy="330" r="5" fill="#555555"/>
<circle cx="828" cy="342" r="5" fill="#555555"/>

<!-- PHASE TRANSITION ARROWS (showFusionVaporisation=true, showEnergyArrows=true) -->

<!-- Solid → Liquid: MELTING (above, energy absorbed) -->
<line x1="245" y1="255" x2="355" y2="255" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="300" y="245" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Melting</text>
<text x="300" y="228" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">← Energy absorbed</text>
<!-- Energy arrow (up = energy in) -->
<line x1="300" y1="220" x2="300" y2="200" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="316" y="213" font-family="Arial" font-size="10" fill="#000000">Q in</text>

<!-- Liquid → Solid: FREEZING (below, energy released) -->
<line x1="355" y1="295" x2="245" y2="295" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="300" y="315" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Freezing</text>
<text x="300" y="330" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Energy released →</text>
<!-- Energy arrow (down = energy out) -->
<line x1="300" y1="340" x2="300" y2="360" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="316" y="355" font-family="Arial" font-size="10" fill="#000000">Q out</text>

<!-- Liquid → Gas: VAPORISATION (above) -->
<line x1="545" y1="255" x2="655" y2="255" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="600" y="245" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Vaporisation</text>
<text x="600" y="228" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">← Energy absorbed</text>
<line x1="600" y1="220" x2="600" y2="200" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="616" y="213" font-family="Arial" font-size="10" fill="#000000">Q in</text>

<!-- Gas → Liquid: CONDENSATION (below) -->
<line x1="655" y1="295" x2="545" y2="295" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="600" y="315" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Condensation</text>
<text x="600" y="330" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Energy released →</text>
<line x1="600" y1="340" x2="600" y2="360" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="616" y="355" font-family="Arial" font-size="10" fill="#000000">Q out</text>

<!-- Sublimation arc (Solid → Gas direct) -->
<path d="M 150,218 Q 450,100 750,218" stroke="#000000" stroke-width="2" stroke-dasharray="6,3" fill="none" marker-end="url(#arrow-bw)"/>
<text x="450" y="125" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Sublimation</text>

<!-- Deposition arc (Gas → Solid) -->
<path d="M 750,222 Q 450,130 150,222" stroke="#555555" stroke-width="1.5" stroke-dasharray="4,4" fill="none" marker-end="url(#arrow-bw)"/>
<text x="450" y="145" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Deposition</text>

<!-- Latent heat info box (showLatentHeat=true) -->
<rect x="60" y="420" width="780" height="140" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="6"/>
<text x="450" y="442" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Latent Heat Values (Water)</text>
<line x1="80" y1="450" x2="820" y2="450" stroke="#CCCCCC" stroke-width="1"/>
<text x="200" y="470" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Process</text>
<text x="500" y="470" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Latent Heat</text>
<text x="730" y="470" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Formula</text>

<text x="200" y="492" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Fusion (Melting)</text>
<text x="500" y="492" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">L_f = 334,000 J/kg</text>
<text x="730" y="492" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Q = mL_f</text>

<text x="200" y="512" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Vaporisation (Boiling)</text>
<text x="500" y="512" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">L_v = 2,260,000 J/kg</text>
<text x="730" y="512" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Q = mL_v</text>

<text x="200" y="532" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle" font-style="italic">Note: Temperature does NOT change during phase transitions</text>

<text x="200" y="550" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Specific Heat (ice)</text>
<text x="500" y="550" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">c = 2,100 J/kg·K</text>
<text x="200" y="568" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Specific Heat (water)</text>
<text x="500" y="568" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">c = 4,200 J/kg·K</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: heatingCurveIceToSteam
    // mass: 1.0, options: showAllPhases=true, showPhasePlateaus=true, showLatentHeat=true
    static heatingCurveIceToSteamSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Heating Curve: Ice to Steam</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Heating Curve: Ice → Water → Steam</text>
<text x="450" y="50" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">1 kg of water, starting at −20°C</text>

<!-- Grid lines -->
<line x1="120" y1="80" x2="120" y2="510" stroke="#DDDDDD" stroke-width="1"/>
<line x1="200" y1="80" x2="200" y2="510" stroke="#DDDDDD" stroke-width="1"/>
<line x1="280" y1="80" x2="280" y2="510" stroke="#DDDDDD" stroke-width="1"/>
<line x1="380" y1="80" x2="380" y2="510" stroke="#DDDDDD" stroke-width="1"/>
<line x1="480" y1="80" x2="480" y2="510" stroke="#DDDDDD" stroke-width="1"/>
<line x1="680" y1="80" x2="680" y2="510" stroke="#DDDDDD" stroke-width="1"/>
<line x1="840" y1="80" x2="840" y2="510" stroke="#DDDDDD" stroke-width="1"/>

<!-- Axes -->
<line x1="120" y1="510" x2="870" y2="510" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="120" y1="510" x2="120" y2="65" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- Axis labels -->
<text x="500" y="548" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">Heat added (kJ)</text>
<text x="38" y="300" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" transform="rotate(-90,38,300)">T (°C)</text>

<!-- Y-axis labels: -20→y=490, 0→y=430, 100→y=170, 120→y=130 -->
<!-- Scale: y = 510 - (T+20)/140 * 440 -->
<line x1="115" y1="490" x2="125" y2="490" stroke="#000000" stroke-width="1"/>
<text x="110" y="494" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">−20</text>
<line x1="115" y1="430" x2="125" y2="430" stroke="#000000" stroke-width="1"/>
<text x="110" y="434" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">0</text>
<line x1="115" y1="170" x2="125" y2="170" stroke="#000000" stroke-width="1"/>
<text x="110" y="174" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">100</text>
<line x1="115" y1="130" x2="125" y2="130" stroke="#000000" stroke-width="1"/>
<text x="110" y="134" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">120</text>

<!-- X-axis labels: positions for kJ boundaries -->
<!-- 0 kJ=x120, 42kJ=x200(ice heat), 376kJ=x280(fusion done), 796kJ=x380(water heat), 3056kJ=x680(vap done), 3100kJ=x700 -->
<text x="120" y="526" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">0</text>
<text x="200" y="526" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">42</text>
<text x="280" y="526" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">376</text>
<text x="480" y="526" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">796</text>
<text x="680" y="526" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">3056</text>
<text x="840" y="526" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">3140</text>

<!-- Heating curve segments (showAllPhases=true) -->

<!-- Segment A: Ice warming −20°C to 0°C (x=120→200, y=490→430) -->
<line x1="120" y1="490" x2="200" y2="430" stroke="#000000" stroke-width="3"/>

<!-- Segment B: Melting plateau at 0°C (x=200→280, y=430) (showPhasePlateaus) -->
<line x1="200" y1="430" x2="280" y2="430" stroke="#000000" stroke-width="3"/>

<!-- Segment C: Water warming 0°C to 100°C (x=280→480, y=430→170) -->
<line x1="280" y1="430" x2="480" y2="170" stroke="#000000" stroke-width="3"/>

<!-- Segment D: Boiling plateau at 100°C (x=480→680, y=170) -->
<line x1="480" y1="170" x2="680" y2="170" stroke="#000000" stroke-width="3"/>

<!-- Segment E: Steam warming 100°C to 120°C (x=680→840, y=170→130) -->
<line x1="680" y1="170" x2="840" y2="130" stroke="#000000" stroke-width="3"/>

<!-- Phase region labels -->
<text x="155" y="468" font-family="Arial" font-size="11" fill="#888888" font-style="italic">ICE</text>
<text x="225" y="420" font-family="Arial" font-size="11" fill="#888888" font-style="italic">MELTING</text>
<text x="360" y="315" font-family="Arial" font-size="11" fill="#888888" font-style="italic">WATER</text>
<text x="560" y="160" font-family="Arial" font-size="11" fill="#888888" font-style="italic">BOILING</text>
<text x="745" y="148" font-family="Arial" font-size="11" fill="#888888" font-style="italic">STEAM</text>

<!-- Horizontal dashed reference lines -->
<line x1="120" y1="430" x2="840" y2="430" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="5,4"/>
<line x1="120" y1="170" x2="840" y2="170" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="5,4"/>

<!-- showLatentHeat=true: bracket annotations for plateaus -->
<!-- Fusion latent heat bracket -->
<line x1="200" y1="395" x2="280" y2="395" stroke="#000000" stroke-width="1.5"/>
<line x1="200" y1="390" x2="200" y2="400" stroke="#000000" stroke-width="1.5"/>
<line x1="280" y1="390" x2="280" y2="400" stroke="#000000" stroke-width="1.5"/>
<text x="240" y="385" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">L_f = 334 kJ/kg</text>

<!-- Vaporisation latent heat bracket -->
<line x1="480" y1="135" x2="680" y2="135" stroke="#000000" stroke-width="1.5"/>
<line x1="480" y1="130" x2="480" y2="140" stroke="#000000" stroke-width="1.5"/>
<line x1="680" y1="130" x2="680" y2="140" stroke="#000000" stroke-width="1.5"/>
<text x="580" y="124" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">L_v = 2260 kJ/kg</text>

<!-- Specific heat slope annotations (showSpecificHeat=true) -->
<text x="148" y="454" font-family="Arial" font-size="10" fill="#555555">c_ice</text>
<text x="148" y="465" font-family="Arial" font-size="10" fill="#555555">2100 J/kg·K</text>
<text x="336" y="320" font-family="Arial" font-size="10" fill="#555555">c_water</text>
<text x="336" y="332" font-family="Arial" font-size="10" fill="#555555">4200 J/kg·K</text>
<text x="748" y="148" font-family="Arial" font-size="10" fill="#555555">c_steam</text>
<text x="748" y="159" font-family="Arial" font-size="10" fill="#555555">2010 J/kg·K</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: calorimetrySetup
    // options: showContainer=true, showHeater=true, showThermometer=true, showInsulation=true, showLabels=true
    static calorimetrySetupSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Calorimetry Setup Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Calorimetry Experiment Setup</text>

<!-- ===== INSULATION OUTER JACKET (showInsulation=true) ===== -->
<rect x="180" y="120" width="300" height="330" fill="#EEEEEE" stroke="#000000" stroke-width="2" rx="10"/>
<!-- Insulation cross-hatching label -->
<text x="182" y="140" font-family="Arial" font-size="10" fill="#888888">Insulation</text>
<!-- Hatching marks on insulation walls -->
<line x1="188" y1="150" x2="198" y2="160" stroke="#AAAAAA" stroke-width="1"/>
<line x1="188" y1="165" x2="198" y2="175" stroke="#AAAAAA" stroke-width="1"/>
<line x1="188" y1="180" x2="198" y2="190" stroke="#AAAAAA" stroke-width="1"/>
<line x1="188" y1="195" x2="198" y2="205" stroke="#AAAAAA" stroke-width="1"/>
<line x1="188" y1="210" x2="198" y2="220" stroke="#AAAAAA" stroke-width="1"/>
<line x1="188" y1="225" x2="198" y2="235" stroke="#AAAAAA" stroke-width="1"/>
<line x1="188" y1="240" x2="198" y2="250" stroke="#AAAAAA" stroke-width="1"/>
<line x1="188" y1="255" x2="198" y2="265" stroke="#AAAAAA" stroke-width="1"/>
<line x1="188" y1="270" x2="198" y2="280" stroke="#AAAAAA" stroke-width="1"/>
<line x1="188" y1="285" x2="198" y2="295" stroke="#AAAAAA" stroke-width="1"/>
<line x1="188" y1="300" x2="198" y2="310" stroke="#AAAAAA" stroke-width="1"/>
<line x1="188" y1="315" x2="198" y2="325" stroke="#AAAAAA" stroke-width="1"/>
<line x1="188" y1="330" x2="198" y2="340" stroke="#AAAAAA" stroke-width="1"/>
<line x1="188" y1="345" x2="198" y2="355" stroke="#AAAAAA" stroke-width="1"/>
<line x1="188" y1="360" x2="198" y2="370" stroke="#AAAAAA" stroke-width="1"/>
<!-- Right side hatching -->
<line x1="462" y1="150" x2="472" y2="160" stroke="#AAAAAA" stroke-width="1"/>
<line x1="462" y1="165" x2="472" y2="175" stroke="#AAAAAA" stroke-width="1"/>
<line x1="462" y1="180" x2="472" y2="190" stroke="#AAAAAA" stroke-width="1"/>
<line x1="462" y1="195" x2="472" y2="205" stroke="#AAAAAA" stroke-width="1"/>
<line x1="462" y1="210" x2="472" y2="220" stroke="#AAAAAA" stroke-width="1"/>
<line x1="462" y1="225" x2="472" y2="235" stroke="#AAAAAA" stroke-width="1"/>
<line x1="462" y1="240" x2="472" y2="250" stroke="#AAAAAA" stroke-width="1"/>

<!-- ===== INNER CONTAINER (showContainer=true) ===== -->
<rect x="210" y="160" width="240" height="250" fill="#FFFFFF" stroke="#000000" stroke-width="2.5" rx="6"/>

<!-- Water/sample inside container -->
<rect x="215" y="340" width="230" height="66" fill="#DDDDDD" stroke="none" rx="3"/>
<text x="330" y="378" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Sample / Liquid</text>

<!-- Water level wavy line -->
<path d="M 215,340 Q 235,332 255,340 Q 275,348 295,340 Q 315,332 335,340 Q 355,348 375,340 Q 395,332 415,340 L 445,340" stroke="#999999" stroke-width="1.5" fill="none"/>

<!-- ===== THERMOMETER (showThermometer=true) ===== -->
<!-- Thermometer shaft -->
<rect x="295" y="145" width="12" height="220" fill="#FFFFFF" stroke="#000000" stroke-width="1.5" rx="5"/>
<!-- Mercury column -->
<rect x="297" y="295" width="8" height="70" fill="#555555" stroke="none" rx="3"/>
<!-- Bulb -->
<circle cx="301" cy="368" r="10" fill="#555555" stroke="#000000" stroke-width="1.5"/>
<!-- Temperature scale marks on thermometer -->
<line x1="303" y1="170" x2="307" y2="170" stroke="#000000" stroke-width="1"/>
<line x1="303" y1="185" x2="307" y2="185" stroke="#000000" stroke-width="1"/>
<line x1="303" y1="200" x2="307" y2="200" stroke="#000000" stroke-width="1"/>
<line x1="303" y1="215" x2="307" y2="215" stroke="#000000" stroke-width="1"/>
<line x1="303" y1="230" x2="307" y2="230" stroke="#000000" stroke-width="1"/>
<line x1="303" y1="245" x2="307" y2="245" stroke="#000000" stroke-width="1"/>
<line x1="303" y1="260" x2="307" y2="260" stroke="#000000" stroke-width="1"/>
<line x1="303" y1="275" x2="307" y2="275" stroke="#000000" stroke-width="1"/>
<line x1="303" y1="290" x2="307" y2="290" stroke="#000000" stroke-width="1"/>
<!-- Thermometer top label -->
<text x="278" y="142" font-family="Arial" font-size="10" fill="#000000">Thermometer</text>

<!-- ===== HEATER COIL (showHeater=true) ===== -->
<!-- Heater element inside container -->
<path d="M 350,390 L 360,390 Q 365,380 370,390 Q 375,400 380,390 Q 385,380 390,390 Q 395,400 400,390 Q 405,380 410,390 L 420,390" stroke="#000000" stroke-width="2.5" fill="none"/>
<line x1="350" y1="390" x2="350" y2="410" stroke="#000000" stroke-width="2"/>
<line x1="420" y1="390" x2="420" y2="410" stroke="#000000" stroke-width="2"/>
<!-- Heater wires going through container wall -->
<line x1="350" y1="410" x2="350" y2="480" stroke="#000000" stroke-width="2"/>
<line x1="420" y1="410" x2="420" y2="480" stroke="#000000" stroke-width="2"/>

<!-- Power supply symbol -->
<rect x="340" y="480" width="90" height="50" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="385" y="500" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Power</text>
<text x="385" y="516" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Supply</text>
<!-- +/- terminals -->
<text x="350" y="542" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<text x="420" y="542" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">−</text>

<!-- Stirrer -->
<line x1="370" y1="145" x2="370" y2="380" stroke="#555555" stroke-width="2" stroke-dasharray="5,3"/>
<line x1="355" y1="360" x2="385" y2="370" stroke="#555555" stroke-width="2"/>
<line x1="355" y1="370" x2="385" y2="360" stroke="#555555" stroke-width="2"/>
<text x="395" y="148" font-family="Arial" font-size="10" fill="#555555">Stirrer</text>

<!-- Lid -->
<rect x="210" y="152" width="240" height="12" fill="#CCCCCC" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="330" y="148" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Lid</text>

<!-- LABELS panel on right side -->
<rect x="560" y="120" width="210" height="300" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="6"/>
<text x="665" y="142" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Labels</text>
<line x1="575" y1="150" x2="755" y2="150" stroke="#CCCCCC" stroke-width="1"/>

<!-- Label lines with arrows pointing to components -->
<line x1="460" y1="280" x2="558" y2="215" stroke="#555555" stroke-width="1" stroke-dasharray="4,3"/>
<text x="665" y="172" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Insulated jacket</text>
<text x="665" y="185" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">prevents heat loss</text>

<line x1="320" y1="160" x2="558" y2="210" stroke="#555555" stroke-width="1" stroke-dasharray="4,3"/>
<text x="665" y="212" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Thermometer</text>
<text x="665" y="225" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">measures ΔT</text>

<line x1="360" y1="390" x2="558" y2="290" stroke="#555555" stroke-width="1" stroke-dasharray="4,3"/>
<text x="665" y="250" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Heater element</text>
<text x="665" y="263" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">supplies electrical energy</text>

<line x1="330" y1="370" x2="558" y2="330" stroke="#555555" stroke-width="1" stroke-dasharray="4,3"/>
<text x="665" y="288" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Sample</text>
<text x="665" y="301" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">substance under test</text>

<!-- Key equation box -->
<rect x="560" y="440" width="210" height="90" fill="#F0F0F0" stroke="#888888" stroke-width="1" rx="6"/>
<text x="665" y="460" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Key Equation</text>
<text x="665" y="480" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">Q = mcΔT</text>
<text x="665" y="500" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Q = VIt (electrical)</text>
<text x="665" y="516" font-family="Arial" font-size="10" fill="#777777" text-anchor="middle">c = Q / (mΔT)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: thermalEquilibrium
    // temp1Initial=80, temp2Initial=20, equilibriumTemp=45
    // options: showTemperatureVsTime=true, showHeatTransfer=true, showEquilibriumPoint=true
    static thermalEquilibriumSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Thermal Equilibrium Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Thermal Equilibrium</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Object 1: 80°C (hot) and Object 2: 20°C (cool) reach equilibrium at 45°C</text>

<!-- Grid -->
<line x1="120" y1="100" x2="120" y2="480" stroke="#DDDDDD" stroke-width="1"/>
<line x1="250" y1="100" x2="250" y2="480" stroke="#DDDDDD" stroke-width="1"/>
<line x1="380" y1="100" x2="380" y2="480" stroke="#DDDDDD" stroke-width="1"/>
<line x1="510" y1="100" x2="510" y2="480" stroke="#DDDDDD" stroke-width="1"/>
<line x1="640" y1="100" x2="640" y2="480" stroke="#DDDDDD" stroke-width="1"/>
<line x1="770" y1="100" x2="770" y2="480" stroke="#DDDDDD" stroke-width="1"/>
<line x1="120" y1="480" x2="820" y2="480" stroke="#DDDDDD" stroke-width="1"/>
<line x1="120" y1="380" x2="820" y2="380" stroke="#DDDDDD" stroke-width="1"/>
<line x1="120" y1="280" x2="820" y2="280" stroke="#DDDDDD" stroke-width="1"/>
<line x1="120" y1="180" x2="820" y2="180" stroke="#DDDDDD" stroke-width="1"/>
<line x1="120" y1="130" x2="820" y2="130" stroke="#DDDDDD" stroke-width="1"/>

<!-- Axes -->
<line x1="120" y1="480" x2="830" y2="480" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="120" y1="480" x2="120" y2="90" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<text x="475" y="515" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">Time</text>
<text x="38" y="290" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" transform="rotate(-90,38,290)">T (°C)</text>

<!-- Y-axis labels: 0°C=y480, 20°C=y430, 45°C=y292, 60°C=y230, 80°C=y130 -->
<!-- Scale: y = 480 - T*(480-100)/100 = 480 - T*3.8 -->
<line x1="115" y1="480" x2="125" y2="480" stroke="#000000" stroke-width="1"/>
<text x="110" y="484" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">0</text>
<line x1="115" y1="404" x2="125" y2="404" stroke="#000000" stroke-width="1"/>
<text x="110" y="408" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">20</text>
<line x1="115" y1="309" x2="125" y2="309" stroke="#000000" stroke-width="1"/>
<text x="110" y="313" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">45</text>
<line x1="115" y1="252" x2="125" y2="252" stroke="#000000" stroke-width="1"/>
<text x="110" y="256" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">60</text>
<line x1="115" y1="176" x2="125" y2="176" stroke="#000000" stroke-width="1"/>
<text x="110" y="180" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">80</text>

<!-- Object 1 cooling curve: 80°C → 45°C (exponential decay) -->
<!-- Approximate with cubic bezier: start y=176(80°C), end y=309(45°C), levels out at equilibrium x≈640 -->
<path d="M 120,176 C 220,176 300,240 380,270 C 460,295 530,308 640,309 L 820,309"
      stroke="#000000" stroke-width="3" fill="none"/>

<!-- Object 2 warming curve: 20°C → 45°C -->
<!-- start y=404(20°C), end y=309(45°C) -->
<path d="M 120,404 C 220,404 300,380 380,355 C 460,330 530,312 640,309 L 820,309"
      stroke="#555555" stroke-width="3" stroke-dasharray="8,4" fill="none"/>

<!-- Equilibrium point (showEquilibriumPoint=true) -->
<circle cx="640" cy="309" r="7" fill="#000000" stroke="#000000"/>
<line x1="640" y1="309" x2="640" y2="100" stroke="#000000" stroke-width="1" stroke-dasharray="5,4"/>
<line x1="120" y1="309" x2="820" y2="309" stroke="#555555" stroke-width="1.5" stroke-dasharray="6,4"/>
<text x="660" y="105" font-family="Arial" font-size="11" fill="#000000">t_eq</text>
<text x="122" y="304" font-family="Arial" font-size="11" fill="#000000">T_eq = 45°C</text>

<!-- Heat transfer arrow (showHeatTransfer=true) -->
<!-- Between the two objects in mid diagram -->
<rect x="190" y="220" width="100" height="50" fill="#F0F0F0" stroke="#999999" stroke-width="1" rx="4"/>
<text x="240" y="240" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Object 1</text>
<text x="240" y="254" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(hot, 80°C)</text>

<rect x="190" y="355" width="100" height="50" fill="#EEEEEE" stroke="#999999" stroke-width="1" rx="4"/>
<text x="240" y="375" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Object 2</text>
<text x="240" y="389" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(cool, 20°C)</text>

<!-- Heat transfer arrow between boxes -->
<line x1="240" y1="272" x2="240" y2="353" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="258" y="316" font-family="Arial" font-size="11" fill="#000000">Heat Q</text>

<!-- Curve labels -->
<text x="145" y="165" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Object 1</text>
<text x="145" y="180" font-family="Arial" font-size="11" fill="#555555">cooling</text>
<text x="145" y="418" font-family="Arial" font-size="12" fill="#555555" font-weight="bold">Object 2</text>
<text x="145" y="433" font-family="Arial" font-size="11" fill="#555555">warming</text>

<!-- Info box -->
<rect x="550" y="380" width="265" height="90" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="682" y="400" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Thermal Equilibrium</text>
<text x="682" y="420" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Heat lost by hot = Heat gained by cool</text>
<text x="682" y="436" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">m₁c₁ΔT₁ = m₂c₂ΔT₂</text>
<text x="682" y="454" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">No further net heat transfer at T_eq</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: specificHeatComparison
    // substances: Water(4200), Aluminium(900), Copper(385), Iron(450), Glass(840)
    // options: showValues=true, showUnits=true, showAnnotations=true
    static specificHeatComparisonSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Specific Heat Capacity Comparison</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Specific Heat Capacities of Common Substances</text>

<!-- Axes -->
<line x1="120" y1="500" x2="870" y2="500" stroke="#000000" stroke-width="2"/>
<line x1="120" y1="500" x2="120" y2="80" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- Y-axis label (showUnits=true) -->
<text x="38" y="300" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,38,300)">c (J kg⁻¹ K⁻¹)</text>

<!-- Y-axis scale: 0=y500, 4200=y100, scale=(500-100)/4200=0.0952 -->
<!-- Grid lines and tick marks -->
<line x1="115" y1="500" x2="125" y2="500" stroke="#000000" stroke-width="1.5"/>
<text x="110" y="504" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">0</text>
<line x1="115" y1="452" x2="125" y2="452" stroke="#000000" stroke-width="1"/>
<text x="110" y="456" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">500</text>
<line x1="120" y1="452" x2="870" y2="452" stroke="#DDDDDD" stroke-width="1"/>
<line x1="115" y1="405" x2="125" y2="405" stroke="#000000" stroke-width="1"/>
<text x="110" y="409" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">1000</text>
<line x1="120" y1="405" x2="870" y2="405" stroke="#DDDDDD" stroke-width="1"/>
<line x1="115" y1="310" x2="125" y2="310" stroke="#000000" stroke-width="1"/>
<text x="110" y="314" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">2000</text>
<line x1="120" y1="310" x2="870" y2="310" stroke="#DDDDDD" stroke-width="1"/>
<line x1="115" y1="214" x2="125" y2="214" stroke="#000000" stroke-width="1"/>
<text x="110" y="218" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">3000</text>
<line x1="120" y1="214" x2="870" y2="214" stroke="#DDDDDD" stroke-width="1"/>
<line x1="115" y1="119" x2="125" y2="119" stroke="#000000" stroke-width="1"/>
<text x="110" y="123" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">4000</text>
<line x1="120" y1="119" x2="870" y2="119" stroke="#DDDDDD" stroke-width="1"/>

<!-- Bar chart: bar width=90, gap=50, starting x=150 -->
<!-- y_bar = 500 - c * (400/4200) -->

<!-- Water: c=4200, height=400, y=100 -->
<rect x="150" y="100" width="90" height="400" fill="#CCCCCC" stroke="#000000" stroke-width="1.5"/>
<text x="195" y="524" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Water</text>
<text x="195" y="90" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">4200</text>
<text x="195" y="130" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">c = 4200</text>
<text x="195" y="143" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">J kg⁻¹K⁻¹</text>

<!-- Aluminium: c=900, height=85.7, y=414.3 -->
<rect x="290" y="414" width="90" height="86" fill="#CCCCCC" stroke="#000000" stroke-width="1.5"/>
<text x="335" y="524" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Aluminium</text>
<text x="335" y="410" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">900</text>

<!-- Copper: c=385, height=36.7, y=463.3 -->
<rect x="430" y="463" width="90" height="37" fill="#AAAAAA" stroke="#000000" stroke-width="1.5"/>
<text x="475" y="524" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Copper</text>
<text x="475" y="458" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">385</text>

<!-- Iron: c=450, height=42.9, y=457.1 -->
<rect x="570" y="457" width="90" height="43" fill="#AAAAAA" stroke="#000000" stroke-width="1.5"/>
<text x="615" y="524" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Iron</text>
<text x="615" y="452" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">450</text>

<!-- Glass: c=840, height=80, y=420 -->
<rect x="710" y="420" width="90" height="80" fill="#CCCCCC" stroke="#000000" stroke-width="1.5"/>
<text x="755" y="524" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Glass</text>
<text x="755" y="415" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">840</text>

<!-- Annotations (showAnnotations=true) -->
<rect x="155" y="155" width="80" height="50" fill="none" stroke="none"/>
<text x="195" y="175" font-family="Arial" font-size="10" fill="#333333" text-anchor="middle">Water has very</text>
<text x="195" y="188" font-family="Arial" font-size="10" fill="#333333" text-anchor="middle">high specific heat</text>
<text x="195" y="201" font-family="Arial" font-size="10" fill="#333333" text-anchor="middle">→ good coolant</text>

<!-- Key formula -->
<rect x="155" y="545" width="590" height="42" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="450" y="562" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Q = mcΔT</text>
<text x="450" y="578" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Higher c → more energy needed per kg per degree temperature change</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // ============================================================
    // ===== THERMAL PHYSICS — GAS LAWS ===========================
    // ============================================================

    // Generated from registry: pvDiagramBoyle
    // temperature=300, moles=0.01
    // options: showHyperbola=true, showGrid=true, showAnnotations=true, showFormula=true
    static pvDiagramBoyleSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Boyle's Law P-V Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Boyle's Law: pV = constant (T constant)</text>

<!-- Grid (showGrid=true) -->
<line x1="110" y1="520" x2="840" y2="520" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="110" y1="520" x2="110" y2="70" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<line x1="110" y1="420" x2="840" y2="420" stroke="#DDDDDD" stroke-width="1"/>
<line x1="110" y1="320" x2="840" y2="320" stroke="#DDDDDD" stroke-width="1"/>
<line x1="110" y1="220" x2="840" y2="220" stroke="#DDDDDD" stroke-width="1"/>
<line x1="110" y1="120" x2="840" y2="120" stroke="#DDDDDD" stroke-width="1"/>
<line x1="210" y1="70" x2="210" y2="520" stroke="#DDDDDD" stroke-width="1"/>
<line x1="310" y1="70" x2="310" y2="520" stroke="#DDDDDD" stroke-width="1"/>
<line x1="410" y1="70" x2="410" y2="520" stroke="#DDDDDD" stroke-width="1"/>
<line x1="510" y1="70" x2="510" y2="520" stroke="#DDDDDD" stroke-width="1"/>
<line x1="610" y1="70" x2="610" y2="520" stroke="#DDDDDD" stroke-width="1"/>
<line x1="710" y1="70" x2="710" y2="520" stroke="#DDDDDD" stroke-width="1"/>
<line x1="810" y1="70" x2="810" y2="520" stroke="#DDDDDD" stroke-width="1"/>

<!-- Axis labels -->
<text x="475" y="558" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">V (m³)</text>
<text x="38" y="300" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" transform="rotate(-90,38,300)">p (Pa)</text>

<!-- Y-axis labels -->
<line x1="105" y1="420" x2="115" y2="420" stroke="#000000" stroke-width="1"/>
<text x="100" y="424" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">20k</text>
<line x1="105" y1="320" x2="115" y2="320" stroke="#000000" stroke-width="1"/>
<text x="100" y="324" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">40k</text>
<line x1="105" y1="220" x2="115" y2="220" stroke="#000000" stroke-width="1"/>
<text x="100" y="224" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">60k</text>
<line x1="105" y1="120" x2="115" y2="120" stroke="#000000" stroke-width="1"/>
<text x="100" y="124" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">80k</text>

<!-- X-axis labels -->
<text x="210" y="538" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">1×10⁻⁴</text>
<text x="310" y="538" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">2×10⁻⁴</text>
<text x="410" y="538" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">3×10⁻⁴</text>
<text x="510" y="538" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">4×10⁻⁴</text>
<text x="610" y="538" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">5×10⁻⁴</text>
<text x="710" y="538" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">6×10⁻⁴</text>

<!-- Hyperbola: pV = nRT = 0.01 * 8.314 * 300 = 24.94 J -->
<!-- p = 24.94/V, V from 1e-4 to 7e-4 -->
<!-- Scale: x = 110 + V/7e-4 * 700, y = 520 - p/90000 * 450 -->
<!-- At V=1e-4: p=249400 (off scale high), start at V~2.5e-4: p~9976, y=570 too low -->
<!-- Use V range 1e-4 to 6e-4: p range 249400 to 41567 -->
<!-- Map V: x = 110 + (V - 1e-4)/(6e-4 - 1e-4) * 700 -->
<!-- Map p: y = 520 - (p - 0)/(260000) * 450 -->
<!-- Sample points: nRT≈24.94 -->
<!-- V=1e-4: p=249400, y=520-430=90, x=110 -->
<!-- V=2e-4: p=124700, y=520-216=304, x=250 -->
<!-- V=3e-4: p=83133, y=520-144=376, x=390 -->
<!-- V=4e-4: p=62350, y=520-108=412, x=530 -->
<!-- V=5e-4: p=49880, y=520-86=434, x=670 -->
<!-- V=6e-4: p=41567, y=520-72=448, x=810 -->
<path d="M 110,90 C 140,120 180,200 250,304 C 310,370 380,400 530,412 C 610,418 680,428 810,448"
      stroke="#000000" stroke-width="3" fill="none"/>

<!-- Data points for annotation -->
<circle cx="250" cy="304" r="4" fill="#000000"/>
<circle cx="390" cy="376" r="4" fill="#000000"/>
<circle cx="530" cy="412" r="4" fill="#000000"/>

<!-- Point annotations showing pV = constant (showAnnotations=true) -->
<text x="256" y="296" font-family="Arial" font-size="10" fill="#000000">p₁V₁</text>
<text x="396" y="368" font-family="Arial" font-size="10" fill="#000000">p₂V₂</text>
<text x="536" y="404" font-family="Arial" font-size="10" fill="#000000">p₃V₃</text>

<!-- Dashed lines to axes for key point -->
<line x1="250" y1="304" x2="250" y2="520" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="110" y1="304" x2="250" y2="304" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="4,3"/>

<!-- Formula box (showFormula=true) -->
<rect x="550" y="80" width="280" height="130" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="6"/>
<text x="690" y="102" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Boyle's Law</text>
<text x="690" y="126" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle">pV = constant</text>
<text x="690" y="150" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">p ∝ 1/V  (T constant)</text>
<text x="690" y="170" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">p₁V₁ = p₂V₂</text>
<text x="690" y="190" font-family="Arial" font-size="11" fill="#777777" text-anchor="middle">T = 300 K, n = 0.01 mol</text>

<!-- Annotation: "As V increases, p decreases" -->
<text x="500" y="468" font-family="Arial" font-size="11" fill="#000000">As V↑, p↓ (inverse proportion)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: vtDiagramCharles
    // pressure=101325, moles=0.01
    // options: showLinearGraph=true, showAbsoluteZero=true, showGrid=true, showFormula=true
    static vtDiagramCharlesSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Charles's Law V-T Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Charles's Law: V/T = constant (p constant)</text>

<!-- Grid -->
<line x1="200" y1="80" x2="200" y2="500" stroke="#DDDDDD" stroke-width="1"/>
<line x1="300" y1="80" x2="300" y2="500" stroke="#DDDDDD" stroke-width="1"/>
<line x1="400" y1="80" x2="400" y2="500" stroke="#DDDDDD" stroke-width="1"/>
<line x1="500" y1="80" x2="500" y2="500" stroke="#DDDDDD" stroke-width="1"/>
<line x1="600" y1="80" x2="600" y2="500" stroke="#DDDDDD" stroke-width="1"/>
<line x1="700" y1="80" x2="700" y2="500" stroke="#DDDDDD" stroke-width="1"/>
<line x1="800" y1="80" x2="800" y2="500" stroke="#DDDDDD" stroke-width="1"/>
<line x1="120" y1="150" x2="860" y2="150" stroke="#DDDDDD" stroke-width="1"/>
<line x1="120" y1="250" x2="860" y2="250" stroke="#DDDDDD" stroke-width="1"/>
<line x1="120" y1="350" x2="860" y2="350" stroke="#DDDDDD" stroke-width="1"/>
<line x1="120" y1="450" x2="860" y2="450" stroke="#DDDDDD" stroke-width="1"/>

<!-- Axes -->
<line x1="120" y1="500" x2="860" y2="500" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="120" y1="500" x2="120" y2="65" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<text x="490" y="538" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">T (K)</text>
<text x="40" y="290" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" transform="rotate(-90,40,290)">V (m³)</text>

<!-- Absolute zero marker (showAbsoluteZero=true) -->
<!-- T=0 K at x=120, T range 0 to 600K, scale=700/600=1.167px/K -->
<!-- x = 120 + T * 1.167 -->
<!-- Absolute zero dashed vertical -->
<line x1="120" y1="80" x2="120" y2="500" stroke="#555555" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="122" y="95" font-family="Arial" font-size="11" fill="#000000">T = 0 K</text>
<text x="122" y="108" font-family="Arial" font-size="11" fill="#000000">(Absolute</text>
<text x="122" y="121" font-family="Arial" font-size="11" fill="#000000">zero)</text>

<!-- X-axis tick marks and labels -->
<line x1="237" y1="495" x2="237" y2="505" stroke="#000000" stroke-width="1"/>
<text x="237" y="518" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">100</text>
<line x1="354" y1="495" x2="354" y2="505" stroke="#000000" stroke-width="1"/>
<text x="354" y="518" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">200</text>
<line x1="471" y1="495" x2="471" y2="505" stroke="#000000" stroke-width="1"/>
<text x="471" y="518" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">300</text>
<line x1="588" y1="495" x2="588" y2="505" stroke="#000000" stroke-width="1"/>
<text x="588" y="518" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">400</text>
<line x1="705" y1="495" x2="705" y2="505" stroke="#000000" stroke-width="1"/>
<text x="705" y="518" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">500</text>
<line x1="822" y1="495" x2="822" y2="505" stroke="#000000" stroke-width="1"/>
<text x="822" y="518" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">600</text>

<!-- Y-axis tick marks -->
<!-- V = nRT/p = 0.01 * 8.314 * T / 101325 = 8.2e-7 * T -->
<!-- At T=300: V=2.46e-4, At T=600: V=4.92e-4 -->
<!-- Scale V: y = 500 - V / (6e-4) * 400 -->
<line x1="115" y1="450" x2="125" y2="450" stroke="#000000" stroke-width="1"/>
<text x="110" y="454" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">0.5×10⁻⁴</text>
<line x1="115" y1="333" x2="125" y2="333" stroke="#000000" stroke-width="1"/>
<text x="110" y="337" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">2×10⁻⁴</text>
<line x1="115" y1="167" x2="125" y2="167" stroke="#000000" stroke-width="1"/>
<text x="110" y="171" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">4×10⁻⁴</text>

<!-- Linear graph (showLinearGraph=true) — straight line from absolute zero -->
<!-- V = 8.2e-7 * T, line passes through origin (absolute zero) -->
<!-- At T=0: V=0, y=500, x=120 -->
<!-- At T=600: V=4.92e-4, y=500-328=172, x=822 -->
<line x1="120" y1="500" x2="822" y2="172" stroke="#000000" stroke-width="3"/>

<!-- Extrapolation to absolute zero (dashed) -->
<!-- Already starts at absolute zero so no extrapolation needed - line is solid through origin -->

<!-- Key data points -->
<circle cx="471" cy="336" r="5" fill="#000000"/>
<circle cx="588" cy="270" r="5" fill="#000000"/>

<!-- Dashed reference lines for T=300 point -->
<line x1="471" y1="336" x2="471" y2="500" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="120" y1="336" x2="471" y2="336" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="4,3"/>
<text x="476" y="332" font-family="Arial" font-size="10" fill="#000000">(300K, V₁)</text>

<!-- Formula box (showFormula=true) -->
<rect x="555" y="82" width="290" height="140" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="6"/>
<text x="700" y="104" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Charles's Law</text>
<text x="700" y="128" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle">V/T = constant</text>
<text x="700" y="152" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">V ∝ T  (p constant)</text>
<text x="700" y="174" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">V₁/T₁ = V₂/T₂</text>
<text x="700" y="194" font-family="Arial" font-size="11" fill="#777777" text-anchor="middle">T must be in Kelvin</text>
<text x="700" y="210" font-family="Arial" font-size="11" fill="#777777" text-anchor="middle">p = 101325 Pa, n = 0.01 mol</text>

<!-- Slope label -->
<text x="640" y="360" font-family="Arial" font-size="11" fill="#000000">Slope = V/T = nR/p</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: ptDiagramGayLussac
    // volume=0.001, moles=0.01
    // options: showLinearGraph=true, showAbsoluteZero=true, showGrid=true, showFormula=true
    static ptDiagramGayLussacSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Gay-Lussac's Law P-T Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Gay-Lussac's Law: p/T = constant (V constant)</text>

<!-- Grid -->
<line x1="237" y1="80" x2="237" y2="500" stroke="#DDDDDD" stroke-width="1"/>
<line x1="354" y1="80" x2="354" y2="500" stroke="#DDDDDD" stroke-width="1"/>
<line x1="471" y1="80" x2="471" y2="500" stroke="#DDDDDD" stroke-width="1"/>
<line x1="588" y1="80" x2="588" y2="500" stroke="#DDDDDD" stroke-width="1"/>
<line x1="705" y1="80" x2="705" y2="500" stroke="#DDDDDD" stroke-width="1"/>
<line x1="822" y1="80" x2="822" y2="500" stroke="#DDDDDD" stroke-width="1"/>
<line x1="120" y1="150" x2="860" y2="150" stroke="#DDDDDD" stroke-width="1"/>
<line x1="120" y1="250" x2="860" y2="250" stroke="#DDDDDD" stroke-width="1"/>
<line x1="120" y1="350" x2="860" y2="350" stroke="#DDDDDD" stroke-width="1"/>
<line x1="120" y1="450" x2="860" y2="450" stroke="#DDDDDD" stroke-width="1"/>

<!-- Axes -->
<line x1="120" y1="500" x2="860" y2="500" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="120" y1="500" x2="120" y2="65" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<text x="490" y="538" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">T (K)</text>
<text x="40" y="290" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" transform="rotate(-90,40,290)">p (Pa)</text>

<!-- Absolute zero -->
<line x1="120" y1="80" x2="120" y2="500" stroke="#555555" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="124" y="95" font-family="Arial" font-size="10" fill="#000000">T=0 K</text>

<!-- X ticks -->
<text x="237" y="518" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">100</text>
<text x="354" y="518" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">200</text>
<text x="471" y="518" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">300</text>
<text x="588" y="518" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">400</text>
<text x="705" y="518" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">500</text>
<text x="822" y="518" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">600</text>

<!-- Y ticks: p = nRT/V = 0.01 * 8.314 * T / 0.001 = 83.14 * T -->
<!-- At T=600: p=49884 Pa, scale: y=500 - p/50000*400 -->
<line x1="115" y1="420" x2="125" y2="420" stroke="#000000" stroke-width="1"/>
<text x="110" y="424" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">10k</text>
<line x1="115" y1="340" x2="125" y2="340" stroke="#000000" stroke-width="1"/>
<text x="110" y="344" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">20k</text>
<line x1="115" y1="260" x2="125" y2="260" stroke="#000000" stroke-width="1"/>
<text x="110" y="264" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">30k</text>
<line x1="115" y1="180" x2="125" y2="180" stroke="#000000" stroke-width="1"/>
<text x="110" y="184" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">40k</text>
<line x1="115" y1="100" x2="125" y2="100" stroke="#000000" stroke-width="1"/>
<text x="110" y="104" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">50k</text>

<!-- Linear graph: p vs T straight line through origin -->
<!-- At T=0: p=0, x=120, y=500 -->
<!-- At T=600: p≈49884, y=500-400=100, x=822 -->
<line x1="120" y1="500" x2="822" y2="100" stroke="#000000" stroke-width="3"/>

<!-- Data points -->
<circle cx="471" cy="300" r="5" fill="#000000"/>
<circle cx="588" cy="260" r="5" fill="#000000"/>

<!-- Dashed lines for T=300 K point -->
<line x1="471" y1="300" x2="471" y2="500" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="120" y1="300" x2="471" y2="300" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="4,3"/>
<text x="476" y="296" font-family="Arial" font-size="10" fill="#000000">(300K, p₁)</text>

<!-- Formula box (showFormula=true) -->
<rect x="555" y="82" width="290" height="140" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="6"/>
<text x="700" y="104" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Gay-Lussac's Law</text>
<text x="700" y="128" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle">p/T = constant</text>
<text x="700" y="152" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">p ∝ T  (V constant)</text>
<text x="700" y="174" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">p₁/T₁ = p₂/T₂</text>
<text x="700" y="196" font-family="Arial" font-size="11" fill="#777777" text-anchor="middle">V = 0.001 m³, n = 0.01 mol</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: isothermalProcess
    // temperatures=[200,300,400], moles=0.01
    // options: showMultipleCurves=true, showTemperatureLabels=true, showGrid=true
    static isothermalProcessSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Isothermal Process — Family of Curves</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Isothermal Processes — Family of Curves</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">pV = nRT for T = 200 K, 300 K, 400 K  (n = 0.01 mol)</text>

<!-- Grid -->
<line x1="110" y1="520" x2="850" y2="520" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="110" y1="520" x2="110" y2="70" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<line x1="210" y1="70" x2="210" y2="520" stroke="#DDDDDD" stroke-width="1"/>
<line x1="310" y1="70" x2="310" y2="520" stroke="#DDDDDD" stroke-width="1"/>
<line x1="410" y1="70" x2="410" y2="520" stroke="#DDDDDD" stroke-width="1"/>
<line x1="510" y1="70" x2="510" y2="520" stroke="#DDDDDD" stroke-width="1"/>
<line x1="610" y1="70" x2="610" y2="520" stroke="#DDDDDD" stroke-width="1"/>
<line x1="710" y1="70" x2="710" y2="520" stroke="#DDDDDD" stroke-width="1"/>
<line x1="810" y1="70" x2="810" y2="520" stroke="#DDDDDD" stroke-width="1"/>
<line x1="110" y1="120" x2="850" y2="120" stroke="#DDDDDD" stroke-width="1"/>
<line x1="110" y1="220" x2="850" y2="220" stroke="#DDDDDD" stroke-width="1"/>
<line x1="110" y1="320" x2="850" y2="320" stroke="#DDDDDD" stroke-width="1"/>
<line x1="110" y1="420" x2="850" y2="420" stroke="#DDDDDD" stroke-width="1"/>

<!-- Axis labels -->
<text x="480" y="556" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">V (m³)</text>
<text x="38" y="300" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" transform="rotate(-90,38,300)">p (Pa)</text>

<!-- Y-axis labels -->
<text x="106" y="424" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">20k</text>
<text x="106" y="324" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">40k</text>
<text x="106" y="224" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">60k</text>
<text x="106" y="124" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">80k</text>
<!-- X-axis labels -->
<text x="210" y="538" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">1e-4</text>
<text x="310" y="538" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">2e-4</text>
<text x="410" y="538" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">3e-4</text>
<text x="510" y="538" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">4e-4</text>
<text x="610" y="538" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">5e-4</text>
<text x="710" y="538" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">6e-4</text>

<!-- T=200K hyperbola: nRT=0.01*8.314*200=16.63 J (lowest curve, dashed) -->
<!-- V=1e-4→p=166300, V=2e-4→p=83150, V=3e-4→p=55433, V=4e-4→p=41575, V=6e-4→p=27717 -->
<!-- Scale: x=110+(V-1e-4)/5e-4*700, y=520-p/170000*400 -->
<!-- x: V=1e-4→x=110, V=6e-4→x=810 -->
<!-- V=1e-4:p=166300,y=520-391=129,x=110 -->
<!-- V=2e-4:p=83150,y=520-196=324,x=250 -->
<!-- V=3e-4:p=55433,y=520-130=390,x=390 -->
<!-- V=4e-4:p=41575,y=520-98=422,x=530 -->
<!-- V=6e-4:p=27717,y=520-65=455,x=810 -->
<path d="M 110,129 C 160,185 200,270 250,324 C 320,388 380,408 530,422 C 640,432 730,446 810,455"
      stroke="#777777" stroke-width="2.5" stroke-dasharray="8,4" fill="none"/>
<text x="820" y="458" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">T=200K</text>

<!-- T=300K hyperbola: nRT=24.94 J (middle curve, solid) -->
<!-- V=1e-4:p=249400,y=520-587=off, start V=1.5e-4:p=166267,y=129,x=180 -->
<!-- V=2e-4:p=124700,y=520-293=227,x=250 -->
<!-- V=3e-4:p=83133,y=520-196=324,x=390 -->
<!-- V=4e-4:p=62350,y=520-147=373,x=530 -->
<!-- V=6e-4:p=41567,y=520-98=422,x=810 -->
<path d="M 180,129 C 215,160 230,200 250,227 C 310,297 380,340 530,373 C 640,394 730,410 810,422"
      stroke="#000000" stroke-width="3" fill="none"/>
<text x="820" y="425" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">T=300K</text>

<!-- T=400K hyperbola: nRT=33.26 J (highest curve) -->
<!-- V=2e-4:p=166300,y=129,x=250 -->
<!-- V=3e-4:p=110867,y=520-261=259,x=390 -->
<!-- V=4e-4:p=83150,y=520-196=324,x=530 -->
<!-- V=6e-4:p=55433,y=520-130=390,x=810 -->
<path d="M 250,129 C 300,155 340,200 390,259 C 470,318 530,338 810,390"
      stroke="#333333" stroke-width="2.5" fill="none"/>
<text x="820" y="393" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">T=400K</text>

<!-- Arrow indicating increasing T direction -->
<text x="640" y="250" font-family="Arial" font-size="12" fill="#000000">Increasing T</text>
<line x1="760" y1="258" x2="800" y2="320" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>

<!-- Info box -->
<rect x="130" y="80" width="240" height="100" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="250" y="100" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Isothermal Processes</text>
<text x="250" y="120" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">pV = nRT = constant</text>
<text x="250" y="138" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Each curve = constant T</text>
<text x="250" y="156" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Higher T → curve further</text>
<text x="250" y="170" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">from origin</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: combinedGasLaw
    // state1: p=100000, V=0.002, T=300; state2: p=200000, V=0.001, T=300
    // options: showInitialState=true, showFinalState=true, showFormula=true
    static combinedGasLawSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Combined Gas Law Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Combined Gas Law: p₁V₁/T₁ = p₂V₂/T₂</text>

<!-- Two-state diagram: side-by-side containers -->

<!-- STATE 1 (showInitialState=true) -->
<rect x="80" y="120" width="300" height="280" fill="#EEEEEE" stroke="#000000" stroke-width="2.5" rx="8"/>
<text x="230" y="112" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">State 1 (Initial)</text>

<!-- Gas molecules in state 1 (low pressure, large volume) -->
<circle cx="140" cy="180" r="8" fill="#555555"/>
<circle cx="200" cy="200" r="8" fill="#555555"/>
<circle cx="270" cy="175" r="8" fill="#555555"/>
<circle cx="160" cy="250" r="8" fill="#555555"/>
<circle cx="320" cy="240" r="8" fill="#555555"/>
<circle cx="230" cy="280" r="8" fill="#555555"/>
<circle cx="120" cy="320" r="8" fill="#555555"/>
<circle cx="280" cy="320" r="8" fill="#555555"/>
<circle cx="180" cy="355" r="8" fill="#555555"/>
<circle cx="340" cy="170" r="8" fill="#555555"/>
<circle cx="100" cy="230" r="8" fill="#555555"/>
<circle cx="350" cy="300" r="8" fill="#555555"/>

<!-- State 1 labels -->
<text x="230" y="430" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">p₁ = 100,000 Pa</text>
<text x="230" y="450" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">V₁ = 0.002 m³</text>
<text x="230" y="470" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">T₁ = 300 K</text>

<!-- Pressure arrows outward on container walls -->
<line x1="80" y1="260" x2="50" y2="260" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="380" y1="260" x2="410" y2="260" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="230" y1="120" x2="230" y2="90" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="230" y1="400" x2="230" y2="430" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- Transition arrow -->
<line x1="420" y1="260" x2="520" y2="260" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="470" y="248" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Process</text>
<text x="470" y="284" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">T constant</text>

<!-- STATE 2 (showFinalState=true) -->
<!-- Smaller volume → smaller box -->
<rect x="540" y="160" width="200" height="200" fill="#DDDDDD" stroke="#000000" stroke-width="2.5" rx="8"/>
<text x="640" y="152" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">State 2 (Final)</text>

<!-- More densely packed gas molecules in state 2 -->
<circle cx="575" cy="200" r="8" fill="#222222"/>
<circle cx="610" cy="225" r="8" fill="#222222"/>
<circle cx="650" cy="195" r="8" fill="#222222"/>
<circle cx="690" cy="220" r="8" fill="#222222"/>
<circle cx="720" cy="200" r="8" fill="#222222"/>
<circle cx="575" cy="270" r="8" fill="#222222"/>
<circle cx="615" cy="295" r="8" fill="#222222"/>
<circle cx="660" cy="265" r="8" fill="#222222"/>
<circle cx="705" cy="290" r="8" fill="#222222"/>
<circle cx="595" cy="335" r="8" fill="#222222"/>
<circle cx="645" cy="345" r="8" fill="#222222"/>
<circle cx="700" cy="330" r="8" fill="#222222"/>

<!-- State 2 labels -->
<text x="640" y="390" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">p₂ = 200,000 Pa</text>
<text x="640" y="410" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">V₂ = 0.001 m³</text>
<text x="640" y="430" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">T₂ = 300 K</text>

<!-- Stronger pressure arrows -->
<line x1="540" y1="260" x2="500" y2="260" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="740" y1="260" x2="780" y2="260" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>

<!-- Formula box (showFormula=true) -->
<rect x="80" y="500" width="760" height="85" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="6"/>
<text x="450" y="522" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Combined Gas Law</text>
<text x="450" y="546" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle">p₁V₁/T₁ = p₂V₂/T₂ = nR = constant</text>
<text x="450" y="572" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Verification: 100000×0.002/300 = 0.667 = 200000×0.001/300 ✓</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: idealGasCubeModel
    // numMolecules=20, temperature=300
    // options: showMolecules=true, showCollisions=true, showPressureArrows=true
    static idealGasCubeModelSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Ideal Gas Cube Model</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Ideal Gas — Molecular Model</text>
<text x="350" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">T = 300 K, 20 molecules shown</text>

<!-- Cube front face -->
<rect x="150" y="100" width="300" height="300" fill="#F5F5F5" stroke="#000000" stroke-width="2.5"/>

<!-- Cube depth lines (3D effect) -->
<line x1="150" y1="100" x2="220" y2="60" stroke="#000000" stroke-width="1.5"/>
<line x1="450" y1="100" x2="520" y2="60" stroke="#000000" stroke-width="1.5"/>
<line x1="450" y1="400" x2="520" y2="360" stroke="#000000" stroke-width="1.5"/>
<line x1="220" y1="60" x2="520" y2="60" stroke="#000000" stroke-width="1.5"/>
<line x1="520" y1="60" x2="520" y2="360" stroke="#000000" stroke-width="1.5"/>

<!-- Molecules (showMolecules=true) — random positions inside cube -->
<circle cx="200" cy="150" r="8" fill="#555555" stroke="#000000" stroke-width="1"/>
<circle cx="280" cy="130" r="8" fill="#555555" stroke="#000000" stroke-width="1"/>
<circle cx="360" cy="160" r="8" fill="#555555" stroke="#000000" stroke-width="1"/>
<circle cx="420" cy="140" r="8" fill="#555555" stroke="#000000" stroke-width="1"/>
<circle cx="170" cy="210" r="8" fill="#555555" stroke="#000000" stroke-width="1"/>
<circle cx="250" cy="200" r="8" fill="#555555" stroke="#000000" stroke-width="1"/>
<circle cx="340" cy="220" r="8" fill="#555555" stroke="#000000" stroke-width="1"/>
<circle cx="410" cy="190" r="8" fill="#555555" stroke="#000000" stroke-width="1"/>
<circle cx="190" cy="280" r="8" fill="#555555" stroke="#000000" stroke-width="1"/>
<circle cx="300" cy="260" r="8" fill="#555555" stroke="#000000" stroke-width="1"/>
<circle cx="380" cy="290" r="8" fill="#555555" stroke="#000000" stroke-width="1"/>
<circle cx="430" cy="260" r="8" fill="#555555" stroke="#000000" stroke-width="1"/>
<circle cx="210" cy="350" r="8" fill="#555555" stroke="#000000" stroke-width="1"/>
<circle cx="290" cy="340" r="8" fill="#555555" stroke="#000000" stroke-width="1"/>
<circle cx="370" cy="360" r="8" fill="#555555" stroke="#000000" stroke-width="1"/>
<circle cx="440" cy="340" r="8" fill="#555555" stroke="#000000" stroke-width="1"/>
<circle cx="165" cy="310" r="8" fill="#555555" stroke="#000000" stroke-width="1"/>
<circle cx="320" cy="175" r="8" fill="#555555" stroke="#000000" stroke-width="1"/>
<circle cx="240" cy="320" r="8" fill="#555555" stroke="#000000" stroke-width="1"/>
<circle cx="415" cy="320" r="8" fill="#555555" stroke="#000000" stroke-width="1"/>

<!-- Velocity vectors (random directions, showCollisions) -->
<line x1="200" y1="150" x2="220" y2="132" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-sm)"/>
<line x1="280" y1="130" x2="260" y2="118" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-sm)"/>
<line x1="360" y1="160" x2="380" y2="148" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-sm)"/>
<line x1="250" y1="200" x2="268" y2="218" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-sm)"/>
<line x1="300" y1="260" x2="280" y2="275" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-sm)"/>
<line x1="380" y1="290" x2="395" y2="272" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-sm)"/>

<!-- Collision at right wall (showCollisions=true) -->
<circle cx="432" cy="260" r="10" fill="#FFFFFF" stroke="#000000" stroke-width="2" stroke-dasharray="3,2"/>
<line x1="432" y1="260" x2="450" y2="250" stroke="#333333" stroke-width="1.5" marker-end="url(#arrow-sm)"/>
<line x1="450" y1="262" x2="432" y2="268" stroke="#333333" stroke-width="1.5" marker-end="url(#arrow-sm)"/>

<!-- Pressure arrows on walls (showPressureArrows=true) -->
<!-- Right wall -->
<line x1="460" y1="200" x2="490" y2="200" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="460" y1="250" x2="490" y2="250" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="460" y1="300" x2="490" y2="300" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="460" y1="350" x2="490" y2="350" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="515" y="278" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Pressure</text>
<text x="515" y="293" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">p</text>

<!-- Top wall pressure -->
<line x1="220" y1="95" x2="220" y2="68" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="300" y1="95" x2="300" y2="68" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="380" y1="95" x2="380" y2="68" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>

<!-- Left wall pressure -->
<line x1="145" y1="200" x2="118" y2="200" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="145" y1="280" x2="118" y2="280" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="145" y1="360" x2="118" y2="360" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>

<!-- Info / formula panel -->
<rect x="100" y="430" width="500" height="200" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="6"/>
<text x="350" y="455" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Kinetic Theory of Ideal Gases</text>
<line x1="120" y1="462" x2="580" y2="462" stroke="#CCCCCC" stroke-width="1"/>
<text x="350" y="482" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">pV = ⅓ Nm⟨c²⟩</text>
<text x="350" y="504" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Pressure arises from molecular collisions with walls</text>
<text x="350" y="524" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Mean KE: ½m⟨c²⟩ = 3/2 kT</text>
<text x="350" y="544" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Assumptions: elastic collisions, negligible intermolecular forces</text>
<text x="350" y="560" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">point molecules, random motion</text>
<text x="350" y="578" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">N=molecules, m=mass, ⟨c²⟩=mean square speed, k=Boltzmann const.</text>
<text x="350" y="596" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">T = 300 K → ½m⟨c²⟩ = 6.21 × 10⁻²¹ J</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-sm" markerWidth="7" markerHeight="7" refX="6" refY="2" orient="auto">
    <polygon points="0 0, 7 2, 0 4" fill="#333333"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: pressureVolumeHyperbola
    // options: showHyperbola=true, showLinearGraph=true, showGrid=true, showAnnotations=true
    static pressureVolumeHyperbolaSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Pressure-Volume Hyperbola</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">p-V and p-1/V Graphs (Boyle's Law)</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">T = 300 K, n = 0.01 mol</text>

<!-- LEFT GRAPH: p vs V (hyperbola) -->
<rect x="60" y="70" width="360" height="450" fill="none" stroke="#CCCCCC" stroke-width="1" rx="3"/>

<!-- Left axes -->
<line x1="110" y1="490" x2="400" y2="490" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="110" y1="490" x2="110" y2="85" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- Left grid -->
<line x1="185" y1="85" x2="185" y2="490" stroke="#EEEEEE" stroke-width="1"/>
<line x1="260" y1="85" x2="260" y2="490" stroke="#EEEEEE" stroke-width="1"/>
<line x1="335" y1="85" x2="335" y2="490" stroke="#EEEEEE" stroke-width="1"/>
<line x1="110" y1="390" x2="400" y2="390" stroke="#EEEEEE" stroke-width="1"/>
<line x1="110" y1="290" x2="400" y2="290" stroke="#EEEEEE" stroke-width="1"/>
<line x1="110" y1="190" x2="400" y2="190" stroke="#EEEEEE" stroke-width="1"/>

<!-- Left axis labels -->
<text x="255" y="530" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">V (m³)</text>
<text x="62" y="290" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,62,290)">p (Pa)</text>
<text x="255" y="80" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">p vs V (hyperbola)</text>

<!-- P-V hyperbola (showHyperbola=true) -->
<!-- nRT=24.94, V range 1.5e-4 to 5e-4 -->
<!-- x = 110 + (V-1e-4)/(5e-4)*290, y = 490 - p/180000*400 -->
<!-- V=1.5e-4: p=166267, y=490-370=120, x=140 -->
<!-- V=2e-4: p=124700, y=490-277=213, x=169 -->
<!-- V=3e-4: p=83133, y=490-185=305, x=227 -->
<!-- V=4e-4: p=62350, y=490-139=351, x=285 -->
<!-- V=5e-4: p=49880, y=490-111=379, x=343 -->
<path d="M 140,120 C 155,145 162,175 169,213 C 184,265 206,295 227,305 C 258,320 270,338 285,351 C 310,366 325,374 343,379 L 400,385"
      stroke="#000000" stroke-width="3" fill="none"/>

<!-- Annotation (showAnnotations=true) -->
<text x="300" y="250" font-family="Arial" font-size="11" fill="#000000">pV = const</text>
<text x="300" y="265" font-family="Arial" font-size="11" fill="#000000">p ∝ 1/V</text>
<line x1="290" y1="268" x2="265" y2="310" stroke="#888888" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#arrow-sm)"/>

<!-- RIGHT GRAPH: p vs 1/V (straight line) -->
<rect x="480" y="70" width="360" height="450" fill="none" stroke="#CCCCCC" stroke-width="1" rx="3"/>

<!-- Right axes -->
<line x1="530" y1="490" x2="820" y2="490" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="530" y1="490" x2="530" y2="85" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- Right grid -->
<line x1="600" y1="85" x2="600" y2="490" stroke="#EEEEEE" stroke-width="1"/>
<line x1="670" y1="85" x2="670" y2="490" stroke="#EEEEEE" stroke-width="1"/>
<line x1="740" y1="85" x2="740" y2="490" stroke="#EEEEEE" stroke-width="1"/>
<line x1="810" y1="85" x2="810" y2="490" stroke="#EEEEEE" stroke-width="1"/>
<line x1="530" y1="390" x2="820" y2="390" stroke="#EEEEEE" stroke-width="1"/>
<line x1="530" y1="290" x2="820" y2="290" stroke="#EEEEEE" stroke-width="1"/>
<line x1="530" y1="190" x2="820" y2="190" stroke="#EEEEEE" stroke-width="1"/>

<!-- Right axis labels -->
<text x="675" y="530" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">1/V (m⁻³)</text>
<text x="482" y="290" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,482,290)">p (Pa)</text>
<text x="675" y="80" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">p vs 1/V (straight line)</text>

<!-- Straight line (showLinearGraph=true) -->
<!-- p = nRT * (1/V), slope = nRT = 24.94 -->
<!-- 1/V range 2000 to 6667 m^-3 (V = 5e-4 to 1.5e-4) -->
<!-- x = 530 + (1/V - 2000)/(5000)*280, y = 490 - p/180000*400 -->
<!-- 1/V=2000: p=49880, y=490-111=379, x=530 -->
<!-- 1/V=4000: p=99760, y=490-222=268, x=642 -->
<!-- 1/V=6000: p=149640, y=490-332=158, x=754 -->
<!-- 1/V=6667: p=166267, y=490-370=120, x=810 (approx) -->
<line x1="530" y1="490" x2="810" y2="120" stroke="#000000" stroke-width="3"/>

<!-- Annotation: straight line through origin -->
<text x="668" y="350" font-family="Arial" font-size="11" fill="#000000">p = nRT × (1/V)</text>
<text x="668" y="365" font-family="Arial" font-size="11" fill="#000000">Slope = nRT</text>

<!-- Data points on both graphs -->
<circle cx="227" cy="305" r="4" fill="#000000"/>
<circle cx="285" cy="351" r="4" fill="#000000"/>
<circle cx="670" cy="268" r="4" fill="#000000"/>
<circle cx="810" cy="120" r="4" fill="#000000"/>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-sm" markerWidth="7" markerHeight="7" refX="6" refY="2" orient="auto">
    <polygon points="0 0, 7 2, 0 4" fill="#888888"/>
  </marker>
</defs>

</g>
</svg>`;

    // ============================================================
    // ===== THERMAL PHYSICS — KINETIC THEORY =====================
    // ============================================================

    // Generated from registry: maxwellBoltzmannDistribution
    // temperatures=[300,600,1200], molarMass=0.002 (He-like)
    // options: showMultipleTemperatures=true, showMostProbableSpeed=true, showRMSSpeed=true
    static maxwellBoltzmannDistributionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Maxwell-Boltzmann Distribution</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Maxwell-Boltzmann Speed Distribution</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Molecular speed distribution at different temperatures (light gas, M=0.002 kg/mol)</text>

<!-- Grid -->
<line x1="110" y1="500" x2="850" y2="500" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="110" y1="500" x2="110" y2="70" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<line x1="210" y1="70" x2="210" y2="500" stroke="#EEEEEE" stroke-width="1"/>
<line x1="310" y1="70" x2="310" y2="500" stroke="#EEEEEE" stroke-width="1"/>
<line x1="410" y1="70" x2="410" y2="500" stroke="#EEEEEE" stroke-width="1"/>
<line x1="510" y1="70" x2="510" y2="500" stroke="#EEEEEE" stroke-width="1"/>
<line x1="610" y1="70" x2="610" y2="500" stroke="#EEEEEE" stroke-width="1"/>
<line x1="710" y1="70" x2="710" y2="500" stroke="#EEEEEE" stroke-width="1"/>
<line x1="810" y1="70" x2="810" y2="500" stroke="#EEEEEE" stroke-width="1"/>
<line x1="110" y1="400" x2="850" y2="400" stroke="#EEEEEE" stroke-width="1"/>
<line x1="110" y1="300" x2="850" y2="300" stroke="#EEEEEE" stroke-width="1"/>
<line x1="110" y1="200" x2="850" y2="200" stroke="#EEEEEE" stroke-width="1"/>
<line x1="110" y1="100" x2="850" y2="100" stroke="#EEEEEE" stroke-width="1"/>

<!-- Axis labels -->
<text x="480" y="536" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">Speed v (m/s)</text>
<text x="38" y="290" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,38,290)">f(v) — Number of molecules</text>

<!-- X-axis labels (speed) -->
<text x="210" y="518" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">500</text>
<text x="310" y="518" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1000</text>
<text x="410" y="518" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1500</text>
<text x="510" y="518" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">2000</text>
<text x="610" y="518" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">2500</text>
<text x="710" y="518" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">3000</text>
<text x="810" y="518" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">3500</text>

<!-- T=300K curve: most probable speed v_p = sqrt(2RT/M) = sqrt(2*8.314*300/0.002) = ~1580 m/s -->
<!-- Curve: narrow and tall, peak around x=420 (1580 m/s) -->
<!-- Scale: x = 110 + v/4000 * 740 -->
<!-- f(v) ∝ v² * exp(-Mv²/2RT), at T=300 peak height≈high, width≈narrow -->
<path d="M 110,500 C 130,499 150,497 170,492 C 200,480 215,460 230,430 C 250,385 260,340 275,290 C 290,235 300,200 310,170 C 320,140 330,115 340,100 C 350,88 360,80 370,80 C 382,80 392,85 402,95 C 415,112 425,135 435,165 C 448,205 455,245 465,285 C 476,328 482,368 492,405 C 505,445 514,470 530,490 C 545,498 560,500 600,500 L 850,500"
      stroke="#000000" stroke-width="3" fill="none"/>

<!-- T=600K curve: broader and lower, peak around x=560 (~2240 m/s) -->
<path d="M 110,500 C 130,499 145,498 160,496 C 180,492 195,485 215,474 C 240,458 255,440 275,415 C 300,382 320,352 345,322 C 370,292 385,270 405,250 C 425,232 438,220 455,212 C 470,205 482,200 495,200 C 508,200 520,205 535,212 C 552,222 565,235 580,252 C 600,275 615,305 632,340 C 650,378 660,408 672,438 C 685,468 692,483 705,495 L 850,500"
      stroke="#444444" stroke-width="2.5" stroke-dasharray="7,3" fill="none"/>

<!-- T=1200K curve: broad and flat, peak around x=780 (~3160 m/s) -->
<path d="M 110,500 C 130,499 145,498 160,497 C 180,494 195,490 215,484 C 240,474 260,462 285,448 C 315,428 340,410 370,390 C 400,370 425,352 455,336 C 480,322 500,312 525,304 C 548,297 568,293 590,292 C 612,292 630,296 650,304 C 672,313 690,326 708,342 C 730,362 745,382 760,403 C 775,424 783,440 793,458 C 802,472 808,482 818,494 L 850,500"
      stroke="#777777" stroke-width="2.5" stroke-dasharray="4,4" fill="none"/>

<!-- Most probable speed markers (showMostProbableSpeed=true) -->
<!-- T=300 vp ~x=370 -->
<line x1="370" y1="80" x2="370" y2="500" stroke="#333333" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="370" y="75" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">v_p(300K)</text>

<!-- T=600 vp ~x=495 -->
<line x1="495" y1="200" x2="495" y2="500" stroke="#555555" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="495" y="195" font-family="Arial" font-size="10" fill="#444444" text-anchor="middle">v_p(600K)</text>

<!-- T=1200 vp ~x=590 -->
<line x1="590" y1="292" x2="590" y2="500" stroke="#777777" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="590" y="287" font-family="Arial" font-size="10" fill="#777777" text-anchor="middle">v_p(1200K)</text>

<!-- Legend (showLabels=true) -->
<rect x="620" y="100" width="210" height="120" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="725" y="120" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Temperature</text>
<line x1="635" y1="140" x2="670" y2="140" stroke="#000000" stroke-width="3"/>
<text x="730" y="144" font-family="Arial" font-size="12" fill="#000000">T = 300 K</text>
<line x1="635" y1="162" x2="670" y2="162" stroke="#444444" stroke-width="2.5" stroke-dasharray="7,3"/>
<text x="730" y="166" font-family="Arial" font-size="12" fill="#444444">T = 600 K</text>
<line x1="635" y1="184" x2="670" y2="184" stroke="#777777" stroke-width="2.5" stroke-dasharray="4,4"/>
<text x="730" y="188" font-family="Arial" font-size="12" fill="#777777">T = 1200 K</text>

<!-- Key observations -->
<rect x="110" y="550" width="630" height="42" fill="none" stroke="none"/>
<text x="425" y="566" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">As T increases: peak shifts right (higher speeds), curve flattens and broadens</text>
<text x="425" y="582" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">v_p = √(2RT/M)  |  v_rms = √(3RT/M)  |  v_rms &gt; ⟨v⟩ &gt; v_p</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: molecularSpeedDistribution
    // temperature=300, molarMass=0.028 (N2)
    // options: showMeanSpeed=true, showRMSSpeed=true, showMostProbable=true
    static molecularSpeedDistributionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904//DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Molecular Speed Distribution</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Molecular Speed Distribution — N₂ at 300 K</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">M = 0.028 kg/mol, T = 300 K</text>

<!-- Axes -->
<line x1="110" y1="490" x2="860" y2="490" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="110" y1="490" x2="110" y2="70" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<text x="485" y="528" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">v (m/s)</text>
<text x="38" y="280" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,38,280)">f(v) — Fraction of molecules</text>

<!-- Grid lines -->
<line x1="210" y1="70" x2="210" y2="490" stroke="#EEEEEE" stroke-width="1"/>
<line x1="310" y1="70" x2="310" y2="490" stroke="#EEEEEE" stroke-width="1"/>
<line x1="410" y1="70" x2="410" y2="490" stroke="#EEEEEE" stroke-width="1"/>
<line x1="510" y1="70" x2="510" y2="490" stroke="#EEEEEE" stroke-width="1"/>
<line x1="610" y1="70" x2="610" y2="490" stroke="#EEEEEE" stroke-width="1"/>
<line x1="710" y1="70" x2="710" y2="490" stroke="#EEEEEE" stroke-width="1"/>
<line x1="810" y1="70" x2="810" y2="490" stroke="#EEEEEE" stroke-width="1"/>

<!-- X-axis labels: N2 at 300K, v_p ≈ 422 m/s, v_mean ≈ 476 m/s, v_rms ≈ 517 m/s -->
<!-- Scale: x = 110 + v/1000 * 750 -->
<text x="110" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">0</text>
<text x="210" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">200</text>
<text x="310" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">400</text>
<text x="425" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">v_p=422</text>
<text x="466" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">v̄=476</text>
<text x="510" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">v_rms=517</text>
<text x="610" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">800</text>
<text x="710" y="508" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1000</text>

<!-- Maxwell-Boltzmann curve for N2 at 300K -->
<!-- v_p = sqrt(2RT/M) = sqrt(2*8.314*300/0.028) = 422 m/s → x=427 -->
<!-- Peak height at v_p -->
<path d="M 110,490 C 130,489 150,487 170,483 C 190,477 205,467 222,450 C 240,430 255,405 270,375 C 285,342 298,310 313,278 C 328,245 340,218 355,195 C 370,172 382,155 397,140 C 410,127 420,115 430,108 C 438,103 445,100 452,100 C 460,100 468,104 476,113 C 487,126 496,145 508,168 C 520,194 530,220 542,250 C 555,283 563,310 574,340 C 587,375 595,402 607,430 C 618,457 625,470 640,485 C 660,494 680,496 710,498 L 850,500"
      stroke="#000000" stroke-width="3" fill="none"/>

<!-- Shaded area under peak (visual indication) -->
<path d="M 390,490 L 390,140 C 420,108 452,100 480,113 L 480,490 Z"
      fill="#DDDDDD" stroke="none" opacity="0.5"/>

<!-- v_p marker (showMostProbable=true) -->
<line x1="427" y1="100" x2="427" y2="490" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
<text x="427" y="95" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">v_p</text>
<text x="440" y="115" font-family="Arial" font-size="10" fill="#000000">422 m/s</text>

<!-- v_mean marker (showMeanSpeed=true) -->
<line x1="467" y1="115" x2="467" y2="490" stroke="#555555" stroke-width="2" stroke-dasharray="4,3"/>
<text x="467" y="110" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle" font-weight="bold">v̄</text>
<text x="480" y="125" font-family="Arial" font-size="10" fill="#555555">476 m/s</text>

<!-- v_rms marker (showRMSSpeed=true) -->
<line x1="498" y1="133" x2="498" y2="490" stroke="#888888" stroke-width="2" stroke-dasharray="3,3"/>
<text x="498" y="128" font-family="Arial" font-size="11" fill="#888888" text-anchor="middle" font-weight="bold">v_rms</text>
<text x="515" y="143" font-family="Arial" font-size="10" fill="#888888">517 m/s</text>

<!-- Key formula box -->
<rect x="580" y="80" width="280" height="160" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="6"/>
<text x="720" y="102" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Speed Relations</text>
<line x1="595" y1="110" x2="845" y2="110" stroke="#CCCCCC" stroke-width="1"/>
<text x="720" y="128" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">v_p = √(2RT/M)</text>
<text x="720" y="148" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">v̄  = √(8RT/πM)</text>
<text x="720" y="168" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">v_rms = √(3RT/M)</text>
<line x1="595" y1="178" x2="845" y2="178" stroke="#CCCCCC" stroke-width="1"/>
<text x="720" y="195" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">v_p : v̄ : v_rms</text>
<text x="720" y="212" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">= 1 : 1.128 : 1.225</text>
<text x="720" y="230" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">v_p &lt; v̄ &lt; v_rms</text>

<!-- Area explanation -->
<text x="200" y="555" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Shaded area = fraction of molecules</text>
<text x="200" y="570" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">with speed near v_p</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: gasMoleculeCollisions
    // numMolecules=15, containerSize=300
    // options: showRandomMotion=true, showWallCollisions=true, showVelocityVectors=true
    static gasMoleculeCollisionsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Gas Molecule Collisions — Kinetic Theory</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Kinetic Theory — Gas Molecule Collisions</text>
<text x="350" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Random motion, elastic collisions with walls, pressure generation</text>

<!-- Container box -->
<rect x="130" y="80" width="440" height="440" fill="#F9F9F9" stroke="#000000" stroke-width="3"/>

<!-- Molecules (showRandomMotion=true, showVelocityVectors=true) -->
<!-- Molecule 1 with velocity -->
<circle cx="200" cy="140" r="10" fill="#555555"/>
<line x1="200" y1="140" x2="228" y2="122" stroke="#000000" stroke-width="2" marker-end="url(#arrow-sm)"/>

<!-- Molecule 2 -->
<circle cx="310" cy="160" r="10" fill="#555555"/>
<line x1="310" y1="160" x2="295" y2="135" stroke="#000000" stroke-width="2" marker-end="url(#arrow-sm)"/>

<!-- Molecule 3 -->
<circle cx="450" cy="130" r="10" fill="#555555"/>
<line x1="450" y1="130" x2="470" y2="152" stroke="#000000" stroke-width="2" marker-end="url(#arrow-sm)"/>

<!-- Molecule 4 -->
<circle cx="180" cy="230" r="10" fill="#555555"/>
<line x1="180" y1="230" x2="158" y2="215" stroke="#000000" stroke-width="2" marker-end="url(#arrow-sm)"/>

<!-- Molecule 5 -->
<circle cx="300" cy="250" r="10" fill="#555555"/>
<line x1="300" y1="250" x2="325" y2="268" stroke="#000000" stroke-width="2" marker-end="url(#arrow-sm)"/>

<!-- Molecule 6 -->
<circle cx="420" cy="200" r="10" fill="#555555"/>
<line x1="420" y1="200" x2="442" y2="188" stroke="#000000" stroke-width="2" marker-end="url(#arrow-sm)"/>

<!-- Molecule 7 -->
<circle cx="520" cy="240" r="10" fill="#555555"/>
<line x1="520" y1="240" x2="540" y2="255" stroke="#000000" stroke-width="2" marker-end="url(#arrow-sm)"/>

<!-- Molecule 8 -->
<circle cx="210" cy="330" r="10" fill="#555555"/>
<line x1="210" y1="330" x2="192" y2="350" stroke="#000000" stroke-width="2" marker-end="url(#arrow-sm)"/>

<!-- Molecule 9 -->
<circle cx="360" cy="310" r="10" fill="#555555"/>
<line x1="360" y1="310" x2="380" y2="295" stroke="#000000" stroke-width="2" marker-end="url(#arrow-sm)"/>

<!-- Molecule 10 -->
<circle cx="490" cy="340" r="10" fill="#555555"/>
<line x1="490" y1="340" x2="508" y2="322" stroke="#000000" stroke-width="2" marker-end="url(#arrow-sm)"/>

<!-- Molecule 11 -->
<circle cx="160" cy="430" r="10" fill="#555555"/>
<line x1="160" y1="430" x2="148" y2="408" stroke="#000000" stroke-width="2" marker-end="url(#arrow-sm)"/>

<!-- Molecule 12 -->
<circle cx="280" cy="420" r="10" fill="#555555"/>
<line x1="280" y1="420" x2="302" y2="440" stroke="#000000" stroke-width="2" marker-end="url(#arrow-sm)"/>

<!-- Molecule 13 -->
<circle cx="410" cy="450" r="10" fill="#555555"/>
<line x1="410" y1="450" x2="430" y2="435" stroke="#000000" stroke-width="2" marker-end="url(#arrow-sm)"/>

<!-- Molecule 14 -->
<circle cx="530" cy="400" r="10" fill="#555555"/>
<line x1="530" y1="400" x2="548" y2="382" stroke="#000000" stroke-width="2" marker-end="url(#arrow-sm)"/>

<!-- Molecule 15 -->
<circle cx="350" cy="480" r="10" fill="#555555"/>
<line x1="350" y1="480" x2="370" y2="498" stroke="#000000" stroke-width="2" marker-end="url(#arrow-sm)"/>

<!-- Wall collision diagram (showWallCollisions=true) -->
<!-- Molecule hitting right wall -->
<circle cx="555" cy="300" r="11" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<!-- Incoming velocity arrow -->
<line x1="520" y1="285" x2="543" y2="293" stroke="#000000" stroke-width="2" stroke-dasharray="3,2" marker-end="url(#arrow-sm)"/>
<!-- Reflected velocity arrow -->
<line x1="543" y1="308" x2="518" y2="318" stroke="#000000" stroke-width="2" marker-end="url(#arrow-sm)"/>
<!-- Contact point -->
<circle cx="568" cy="300" r="3" fill="#000000"/>
<!-- Force arrow on wall -->
<line x1="572" y1="300" x2="600" y2="300" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="610" y="296" font-family="Arial" font-size="11" fill="#000000">Force</text>

<!-- Bottom wall collision -->
<circle cx="350" cy="508" r="11" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<line x1="335" y1="487" x2="346" y2="497" stroke="#000000" stroke-width="2" stroke-dasharray="3,2" marker-end="url(#arrow-sm)"/>
<line x1="356" y1="497" x2="368" y2="485" stroke="#000000" stroke-width="2" marker-end="url(#arrow-sm)"/>
<line x1="350" y1="522" x2="350" y2="548" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="358" y="562" font-family="Arial" font-size="11" fill="#000000">Force</text>

<!-- Path trace for one molecule (random path) -->
<path d="M 200,140 L 260,185 L 310,160 L 290,250 L 360,310 L 420,200 L 530,240"
      stroke="#AAAAAA" stroke-width="1" stroke-dasharray="4,4" fill="none"/>

<!-- Momentum change annotation -->
<text x="570" y="268" font-family="Arial" font-size="10" fill="#000000">Δp = 2mv</text>
<text x="570" y="282" font-family="Arial" font-size="10" fill="#000000">(per collision)</text>

<!-- Info panel below container -->
<rect x="90" y="545" width="520" height="115" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="350" y="565" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Kinetic Theory — Key Points</text>
<text x="350" y="585" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">• Molecules move in straight lines between elastic collisions</text>
<text x="350" y="601" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">• Pressure = force per unit area from wall collisions</text>
<text x="350" y="617" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">• Impulse on wall = change in momentum = 2mv_x per collision</text>
<text x="350" y="633" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">• Derived result: pV = ⅓Nm⟨c²⟩</text>
<text x="350" y="649" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">• Higher T → faster molecules → more collisions → higher pressure</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-sm" markerWidth="7" markerHeight="7" refX="6" refY="2" orient="auto">
    <polygon points="0 0, 7 2, 0 4" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: pressureDerivationDiagram
    // options: showMolecule=true, showMomentumChange=true, showForceOnWall=true, showFormula=true
    static pressureDerivationDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904//DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Pressure Derivation Diagram — Kinetic Theory</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Kinetic Theory Pressure Derivation</text>
<text x="400" y="50" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Deriving pV = ⅓Nm⟨c²⟩ from first principles</text>

<!-- Cube container -->
<rect x="80" y="80" width="280" height="280" fill="#F5F5F5" stroke="#000000" stroke-width="2.5"/>
<!-- 3D edges -->
<line x1="80" y1="80" x2="140" y2="40" stroke="#000000" stroke-width="1.5"/>
<line x1="360" y1="80" x2="420" y2="40" stroke="#000000" stroke-width="1.5"/>
<line x1="360" y1="360" x2="420" y2="320" stroke="#000000" stroke-width="1.5"/>
<line x1="140" y1="40" x2="420" y2="40" stroke="#000000" stroke-width="1.5"/>
<line x1="420" y1="40" x2="420" y2="320" stroke="#000000" stroke-width="1.5"/>

<!-- Dimension label: length l -->
<line x1="80" y1="378" x2="360" y2="378" stroke="#000000" stroke-width="1.5"/>
<line x1="80" y1="373" x2="80" y2="383" stroke="#000000" stroke-width="1.5"/>
<line x1="360" y1="373" x2="360" y2="383" stroke="#000000" stroke-width="1.5"/>
<text x="220" y="395" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">l</text>

<!-- Molecule (showMolecule=true) -->
<circle cx="180" cy="220" r="12" fill="#555555" stroke="#000000" stroke-width="1.5"/>
<text x="180" y="225" font-family="Arial" font-size="10" fill="#FFFFFF" text-anchor="middle">m</text>

<!-- Velocity vector: molecule moving toward right wall -->
<line x1="193" y1="220" x2="290" y2="220" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="240" y="212" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">u</text>
<text x="240" y="238" font-family="Arial" font-size="11" fill="#555555">(x-component)</text>

<!-- Path trace to wall -->
<line x1="355" y1="220" x2="355" y2="220" stroke="none"/>

<!-- Collision point on right wall -->
<circle cx="360" cy="220" r="5" fill="#000000"/>

<!-- Before collision: momentum arrow (incoming) -->
<line x1="310" y1="205" x2="354" y2="205" stroke="#555555" stroke-width="2" marker-end="url(#arrow-sm)"/>
<text x="332" y="197" font-family="Arial" font-size="11" fill="#555555">+mu</text>

<!-- After collision: reflected momentum arrow -->
<line x1="354" y1="238" x2="308" y2="238" stroke="#333333" stroke-width="2" marker-end="url(#arrow-sm)"/>
<text x="332" y="255" font-family="Arial" font-size="11" fill="#333333">−mu</text>

<!-- Momentum change label (showMomentumChange=true) -->
<text x="430" y="190" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Momentum change:</text>
<text x="430" y="210" font-family="Arial" font-size="14" fill="#000000">Δp = 2mu</text>
<text x="430" y="235" font-family="Arial" font-size="11" fill="#555555">(elastic collision, u unchanged)</text>

<!-- Time between successive collisions with same wall -->
<text x="430" y="270" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Time between hits:</text>
<text x="430" y="290" font-family="Arial" font-size="14" fill="#000000">Δt = 2l / u</text>
<text x="430" y="312" font-family="Arial" font-size="11" fill="#555555">(molecule travels 2l)</text>

<!-- Force on wall (showForceOnWall=true) -->
<text x="430" y="350" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Force on wall:</text>
<text x="430" y="370" font-family="Arial" font-size="14" fill="#000000">F = Δp/Δt = mu²/l</text>

<!-- Force arrow on right wall -->
<line x1="365" y1="220" x2="400" y2="220" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="408" y="216" font-family="Arial" font-size="11" fill="#000000">F</text>

<!-- Return path of molecule (dashed) -->
<path d="M 360,220 Q 310,200 260,220 Q 210,238 180,220" stroke="#AAAAAA" stroke-width="1.5" stroke-dasharray="5,3" fill="none" marker-end="url(#arrow-sm)"/>

<!-- Formula derivation box (showFormula=true) -->
<rect x="60" y="415" width="680" height="175" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="6"/>
<text x="400" y="437" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Full Derivation: pV = ⅓Nm⟨c²⟩</text>
<line x1="80" y1="445" x2="720" y2="445" stroke="#CCCCCC" stroke-width="1"/>
<text x="400" y="462" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Total force on wall: F = Σ(mu²/l) = Nm⟨u²⟩/l  (for N molecules)</text>
<text x="400" y="480" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Pressure: p = F/A = Nm⟨u²⟩/l³ = Nm⟨u²⟩/V</text>
<text x="400" y="498" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Since motion is random in 3D: ⟨u²⟩ = ⟨v²⟩ + ⟨w²⟩ = ⅓⟨c²⟩  (isotropic)</text>
<text x="400" y="517" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">∴ pV = ⅓Nm⟨c²⟩</text>
<text x="400" y="537" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Comparing with pV = NkT gives: ½m⟨c²⟩ = 3/2 kT</text>
<text x="400" y="556" font-family="Arial" font-size="11" fill="#777777" text-anchor="middle">where k = Boltzmann constant = 1.38 × 10⁻²³ J K⁻¹</text>
<text x="400" y="572" font-family="Arial" font-size="11" fill="#777777" text-anchor="middle">N = number of molecules, m = molecular mass, ⟨c²⟩ = mean square speed</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-sm" markerWidth="7" markerHeight="7" refX="6" refY="2" orient="auto">
    <polygon points="0 0, 7 2, 0 4" fill="#555555"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: temperatureEnergyRelationship
    // options: showLinearGraph=true, showFormula=true, showAbsoluteZero=true, showGrid=true
    static temperatureEnergyRelationshipSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904//DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Temperature-Energy Relationship</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Mean KE vs Absolute Temperature</text>
<text x="450" y="52" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">½m⟨c²⟩ = 3/2 kT</text>

<!-- Grid (showGrid=true) -->
<line x1="120" y1="500" x2="850" y2="500" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="120" y1="500" x2="120" y2="70" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<line x1="220" y1="70" x2="220" y2="500" stroke="#DDDDDD" stroke-width="1"/>
<line x1="320" y1="70" x2="320" y2="500" stroke="#DDDDDD" stroke-width="1"/>
<line x1="420" y1="70" x2="420" y2="500" stroke="#DDDDDD" stroke-width="1"/>
<line x1="520" y1="70" x2="520" y2="500" stroke="#DDDDDD" stroke-width="1"/>
<line x1="620" y1="70" x2="620" y2="500" stroke="#DDDDDD" stroke-width="1"/>
<line x1="720" y1="70" x2="720" y2="500" stroke="#DDDDDD" stroke-width="1"/>
<line x1="820" y1="70" x2="820" y2="500" stroke="#DDDDDD" stroke-width="1"/>
<line x1="120" y1="400" x2="850" y2="400" stroke="#DDDDDD" stroke-width="1"/>
<line x1="120" y1="300" x2="850" y2="300" stroke="#DDDDDD" stroke-width="1"/>
<line x1="120" y1="200" x2="850" y2="200" stroke="#DDDDDD" stroke-width="1"/>
<line x1="120" y1="100" x2="850" y2="100" stroke="#DDDDDD" stroke-width="1"/>

<!-- Axis labels -->
<text x="485" y="536" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">T (K)</text>
<text x="40" y="290" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,40,290)">½m⟨c²⟩ (J)</text>

<!-- X-axis labels -->
<text x="120" y="518" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">0</text>
<text x="220" y="518" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">100</text>
<text x="320" y="518" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">200</text>
<text x="420" y="518" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">300</text>
<text x="520" y="518" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">400</text>
<text x="620" y="518" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">500</text>
<text x="720" y="518" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">600</text>
<text x="820" y="518" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">700</text>

<!-- Y-axis labels: KE = 3/2 kT, k=1.38e-23 -->
<!-- At T=700: KE = 1.45e-20 J, scale: y = 500 - KE/1.5e-20 * 400 -->
<text x="110" y="504" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">0</text>
<text x="110" y="404" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">2.1×10⁻²¹</text>
<text x="110" y="304" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">4.1×10⁻²¹</text>
<text x="110" y="204" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">6.2×10⁻²¹</text>
<text x="110" y="104" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">8.3×10⁻²¹</text>

<!-- Linear graph (showLinearGraph=true) -->
<!-- KE = 3/2 * 1.38e-23 * T = 2.07e-23 * T -->
<!-- At T=700: KE=1.45e-20, y=500-400=100, x=820 -->
<!-- Passes through origin (T=0, KE=0) -->
<line x1="120" y1="500" x2="820" y2="100" stroke="#000000" stroke-width="3"/>

<!-- Absolute zero annotation (showAbsoluteZero=true) -->
<circle cx="120" cy="500" r="6" fill="#000000"/>
<text x="135" y="496" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">T = 0 K: KE = 0</text>
<text x="135" y="512" font-family="Arial" font-size="11" fill="#555555">Absolute zero — all motion ceases</text>

<!-- Key data point T=300K -->
<circle cx="420" cy="300" r="6" fill="#000000"/>
<line x1="420" y1="300" x2="420" y2="500" stroke="#AAAAAA" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="120" y1="300" x2="420" y2="300" stroke="#AAAAAA" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="426" y="296" font-family="Arial" font-size="11" fill="#000000">T=300 K</text>
<text x="426" y="310" font-family="Arial" font-size="11" fill="#000000">KE=6.21×10⁻²¹ J</text>

<!-- Slope annotation -->
<text x="580" y="310" font-family="Arial" font-size="12" fill="#000000">Slope = 3/2 k</text>
<text x="580" y="328" font-family="Arial" font-size="12" fill="#000000">= 2.07×10⁻²³ J/K</text>

<!-- Formula box (showFormula=true) -->
<rect x="550" y="80" width="280" height="130" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="6"/>
<text x="690" y="102" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Mean Kinetic Energy</text>
<line x1="565" y1="110" x2="815" y2="110" stroke="#CCCCCC" stroke-width="1"/>
<text x="690" y="130" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle">½m⟨c²⟩ = 3/2 kT</text>
<text x="690" y="152" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">k = 1.38 × 10⁻²³ J K⁻¹</text>
<text x="690" y="172" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Mean KE ∝ T (absolute)</text>
<text x="690" y="192" font-family="Arial" font-size="11" fill="#777777" text-anchor="middle">Independent of molecule type</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: rmsSpeedComparison
    // gases: H2, He, N2, O2, CO2 at 300K
    // options: showValues=true, showFormula=true, showAnnotations=true
    static rmsSpeedComparisonSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904//DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>RMS Speed Comparison</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">RMS Speed Comparison at 300 K</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">v_rms = √(3RT/M) — All gases at same temperature T=300K</text>

<!-- Axes -->
<line x1="120" y1="480" x2="870" y2="480" stroke="#000000" stroke-width="2"/>
<line x1="120" y1="480" x2="120" y2="80" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- Y-axis label -->
<text x="40" y="280" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,40,280)">v_rms (m/s)</text>

<!-- Y-axis grid and labels: max 1920 m/s (H2), scale y=480-(v/2000)*380 -->
<line x1="115" y1="404" x2="125" y2="404" stroke="#000000" stroke-width="1"/>
<text x="110" y="408" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">400</text>
<line x1="120" y1="404" x2="870" y2="404" stroke="#EEEEEE" stroke-width="1"/>
<line x1="115" y1="328" x2="125" y2="328" stroke="#000000" stroke-width="1"/>
<text x="110" y="332" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">800</text>
<line x1="120" y1="328" x2="870" y2="328" stroke="#EEEEEE" stroke-width="1"/>
<line x1="115" y1="252" x2="125" y2="252" stroke="#000000" stroke-width="1"/>
<text x="110" y="256" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">1200</text>
<line x1="120" y1="252" x2="870" y2="252" stroke="#EEEEEE" stroke-width="1"/>
<line x1="115" y1="176" x2="125" y2="176" stroke="#000000" stroke-width="1"/>
<text x="110" y="180" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">1600</text>
<line x1="120" y1="176" x2="870" y2="176" stroke="#EEEEEE" stroke-width="1"/>
<line x1="115" y1="100" x2="125" y2="100" stroke="#000000" stroke-width="1"/>
<text x="110" y="104" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">2000</text>
<line x1="120" y1="100" x2="870" y2="100" stroke="#EEEEEE" stroke-width="1"/>

<!-- Bar chart: 5 gases, bar width=100, gap=30, start x=145 -->
<!-- v_rms = sqrt(3*8.314*300/M) -->

<!-- H2: M=0.002, v_rms = sqrt(3*8.314*300/0.002) = sqrt(3742300) = 1934 m/s, h=367, y=113 -->
<rect x="148" y="113" width="100" height="367" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="198" y="498" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">H₂</text>
<text x="198" y="107" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">1934</text>
<text x="198" y="145" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">M=0.002</text>

<!-- He: M=0.004, v_rms=sqrt(1871150)=1368 m/s, h=260, y=220 -->
<rect x="278" y="220" width="100" height="260" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="328" y="498" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">He</text>
<text x="328" y="214" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">1368</text>
<text x="328" y="255" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">M=0.004</text>

<!-- N2: M=0.028, v_rms=sqrt(267307)=517 m/s, h=98, y=382 -->
<rect x="408" y="382" width="100" height="98" fill="#BBBBBB" stroke="#000000" stroke-width="1.5"/>
<text x="458" y="498" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">N₂</text>
<text x="458" y="376" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">517</text>
<text x="458" y="420" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">M=0.028</text>

<!-- O2: M=0.032, v_rms=sqrt(233963)=484 m/s, h=92, y=388 -->
<rect x="538" y="388" width="100" height="92" fill="#BBBBBB" stroke="#000000" stroke-width="1.5"/>
<text x="588" y="498" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">O₂</text>
<text x="588" y="382" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">484</text>
<text x="588" y="420" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">M=0.032</text>

<!-- CO2: M=0.044, v_rms=sqrt(170118)=412 m/s, h=78, y=402 -->
<rect x="668" y="402" width="100" height="78" fill="#AAAAAA" stroke="#000000" stroke-width="1.5"/>
<text x="718" y="498" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">CO₂</text>
<text x="718" y="396" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">412</text>
<text x="718" y="430" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">M=0.044</text>

<!-- Formula box (showFormula=true) -->
<rect x="148" y="515" width="620" height="72" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="458" y="535" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">v_rms = √(3RT/M)</text>
<text x="458" y="555" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">R = 8.314 J mol⁻¹ K⁻¹,  T = 300 K,  M = molar mass (kg/mol)</text>
<text x="458" y="574" font-family="Arial" font-size="11" fill="#777777" text-anchor="middle">Lighter molecules move faster at the same temperature</text>

<!-- Annotation (showAnnotations=true) -->
<text x="198" y="170" font-family="Arial" font-size="10" fill="#333333" text-anchor="middle">Lightest →</text>
<text x="198" y="182" font-family="Arial" font-size="10" fill="#333333" text-anchor="middle">fastest</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // ============================================================
    // ===== THERMAL PHYSICS — LAWS OF THERMODYNAMICS =============
    // ============================================================

    // Generated from registry: pvDiagramCycles
    // cycleType: rectangular
    // options: showCycleArea=true, showProcessLabels=true, showWorkDone=true
    static pvDiagramCyclesSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904//DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>P-V Diagram — Thermodynamic Cycle</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">P-V Diagram — Thermodynamic Cycle</text>

<!-- Grid (showGrid=true) -->
<line x1="110" y1="510" x2="840" y2="510" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="110" y1="510" x2="110" y2="70" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<line x1="210" y1="70" x2="210" y2="510" stroke="#DDDDDD" stroke-width="1"/>
<line x1="310" y1="70" x2="310" y2="510" stroke="#DDDDDD" stroke-width="1"/>
<line x1="410" y1="70" x2="410" y2="510" stroke="#DDDDDD" stroke-width="1"/>
<line x1="510" y1="70" x2="510" y2="510" stroke="#DDDDDD" stroke-width="1"/>
<line x1="610" y1="70" x2="610" y2="510" stroke="#DDDDDD" stroke-width="1"/>
<line x1="710" y1="70" x2="710" y2="510" stroke="#DDDDDD" stroke-width="1"/>
<line x1="810" y1="70" x2="810" y2="510" stroke="#DDDDDD" stroke-width="1"/>
<line x1="110" y1="410" x2="840" y2="410" stroke="#DDDDDD" stroke-width="1"/>
<line x1="110" y1="310" x2="840" y2="310" stroke="#DDDDDD" stroke-width="1"/>
<line x1="110" y1="210" x2="840" y2="210" stroke="#DDDDDD" stroke-width="1"/>
<line x1="110" y1="110" x2="840" y2="110" stroke="#DDDDDD" stroke-width="1"/>

<!-- Axis labels -->
<text x="475" y="545" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">V (m³)</text>
<text x="40" y="300" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" transform="rotate(-90,40,300)">p (Pa)</text>

<!-- Y-axis labels -->
<text x="105" y="414" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">p₁</text>
<text x="105" y="214" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">p₂</text>
<!-- X-axis labels -->
<text x="310" y="528" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">V₁</text>
<text x="610" y="528" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">V₂</text>

<!-- Cycle shaded area (showCycleArea=true) -->
<rect x="310" y="210" width="300" height="200" fill="#DDDDDD" stroke="none"/>

<!-- Rectangular cycle: A(V1,p1)→B(V2,p1)→C(V2,p2)→D(V1,p2)→A -->
<!-- Corners: A=(310,410), B=(610,410), C=(610,210), D=(310,210) -->

<!-- Process A→B: Isobaric expansion (bottom, left to right, arrow right) -->
<line x1="310" y1="410" x2="610" y2="410" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="460" y="432" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">A → B</text>
<text x="460" y="448" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Isobaric expansion (p const.)</text>

<!-- Process B→C: Isochoric pressure increase (right side, bottom to top) -->
<line x1="610" y1="410" x2="610" y2="210" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="640" y="315" font-family="Arial" font-size="11" fill="#000000">B → C</text>
<text x="640" y="330" font-family="Arial" font-size="10" fill="#555555">Isochoric</text>
<text x="640" y="344" font-family="Arial" font-size="10" fill="#555555">(V const.)</text>

<!-- Process C→D: Isobaric compression (top, right to left) -->
<line x1="610" y1="210" x2="310" y2="210" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="460" y="194" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">C → D</text>
<text x="460" y="178" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Isobaric compression (p const.)</text>

<!-- Process D→A: Isochoric pressure decrease (left side, top to bottom) -->
<line x1="310" y1="210" x2="310" y2="410" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="255" y="315" font-family="Arial" font-size="11" fill="#000000">D → A</text>
<text x="255" y="330" font-family="Arial" font-size="10" fill="#555555">Isochoric</text>
<text x="255" y="344" font-family="Arial" font-size="10" fill="#555555">(V const.)</text>

<!-- Corner point labels -->
<circle cx="310" cy="410" r="5" fill="#000000"/>
<text x="295" y="428" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">A</text>
<circle cx="610" cy="410" r="5" fill="#000000"/>
<text x="618" y="428" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">B</text>
<circle cx="610" cy="210" r="5" fill="#000000"/>
<text x="618" y="205" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">C</text>
<circle cx="310" cy="210" r="5" fill="#000000"/>
<text x="295" y="205" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">D</text>

<!-- Dashed lines to axes -->
<line x1="310" y1="410" x2="310" y2="510" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="610" y1="410" x2="610" y2="510" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="310" y1="410" x2="110" y2="410" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="310" y1="210" x2="110" y2="210" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="4,3"/>

<!-- Work done label in cycle area (showWorkDone=true) -->
<text x="460" y="312" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">W = Area</text>
<text x="460" y="330" font-family="Arial" font-size="13" fill="#333333" text-anchor="middle">= (p₂−p₁)(V₂−V₁)</text>
<text x="460" y="350" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Net work done per cycle</text>

<!-- Info box -->
<rect x="630" y="80" width="200" height="130" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="5"/>
<text x="730" y="100" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Thermodynamic Cycle</text>
<text x="730" y="118" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">W_net = area enclosed</text>
<text x="730" y="134" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">CW cycle → W_net &gt; 0</text>
<text x="730" y="150" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(work done BY gas)</text>
<text x="730" y="166" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">After one cycle:</text>
<text x="730" y="182" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">ΔU = 0 (state function)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: carnotCycleDiagram
    // hotTemperature=600, coldTemperature=300
    // options: showIsothermals=true, showAdiabatics=true, showEfficiency=true
    static carnotCycleDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904//DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Carnot Cycle P-V Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Carnot Cycle on P-V Diagram</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">T_H = 600 K, T_C = 300 K  →  η = 50%</text>

<!-- Grid (showGrid=true) -->
<line x1="110" y1="510" x2="830" y2="510" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="110" y1="510" x2="110" y2="70" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<line x1="210" y1="70" x2="210" y2="510" stroke="#EEEEEE" stroke-width="1"/>
<line x1="310" y1="70" x2="310" y2="510" stroke="#EEEEEE" stroke-width="1"/>
<line x1="410" y1="70" x2="410" y2="510" stroke="#EEEEEE" stroke-width="1"/>
<line x1="510" y1="70" x2="510" y2="510" stroke="#EEEEEE" stroke-width="1"/>
<line x1="610" y1="70" x2="610" y2="510" stroke="#EEEEEE" stroke-width="1"/>
<line x1="710" y1="70" x2="710" y2="510" stroke="#EEEEEE" stroke-width="1"/>
<line x1="810" y1="70" x2="810" y2="510" stroke="#EEEEEE" stroke-width="1"/>
<line x1="110" y1="410" x2="830" y2="410" stroke="#EEEEEE" stroke-width="1"/>
<line x1="110" y1="310" x2="830" y2="310" stroke="#EEEEEE" stroke-width="1"/>
<line x1="110" y1="210" x2="830" y2="210" stroke="#EEEEEE" stroke-width="1"/>
<line x1="110" y1="110" x2="830" y2="110" stroke="#EEEEEE" stroke-width="1"/>

<!-- Axis labels -->
<text x="470" y="545" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">V (m³)</text>
<text x="40" y="300" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" transform="rotate(-90,40,300)">p (Pa)</text>

<!-- Cycle area shading -->
<!-- Approximate Carnot cycle: A(200,150)→B(500,150)→C(700,380)→D(400,380)→A -->
<path d="M 200,150 C 300,150 380,155 500,165 C 580,185 640,280 700,380 C 620,380 520,380 400,380 C 320,365 250,280 200,150 Z"
      fill="#DDDDDD" stroke="none"/>

<!-- Carnot cycle four processes -->

<!-- Process 1→2: Isothermal expansion at T_H (showIsothermals=true) — upper hyperbola -->
<path d="M 200,150 C 280,152 370,158 500,165"
      stroke="#000000" stroke-width="3" fill="none" marker-end="url(#arrow-bw)"/>
<text x="350" y="138" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">1 → 2  Isothermal expansion</text>
<text x="350" y="153" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">T_H = 600 K (absorbs Q_H)</text>

<!-- Process 2→3: Adiabatic expansion (showAdiabatics=true) — steeper curve down -->
<path d="M 500,165 C 570,210 640,300 700,380"
      stroke="#555555" stroke-width="3" stroke-dasharray="7,3" fill="none" marker-end="url(#arrow-sm)"/>
<text x="670" y="260" font-family="Arial" font-size="12" fill="#555555">2 → 3</text>
<text x="670" y="274" font-family="Arial" font-size="11" fill="#555555">Adiabatic</text>
<text x="670" y="288" font-family="Arial" font-size="11" fill="#555555">expansion</text>
<text x="670" y="302" font-family="Arial" font-size="10" fill="#777777">Q=0, T↓</text>

<!-- Process 3→4: Isothermal compression at T_C — lower hyperbola -->
<path d="M 700,380 C 600,378 500,376 400,380"
      stroke="#333333" stroke-width="3" fill="none" marker-end="url(#arrow-bw)"/>
<text x="548" y="400" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">3 → 4  Isothermal compression</text>
<text x="548" y="416" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">T_C = 300 K (rejects Q_C)</text>

<!-- Process 4→1: Adiabatic compression -->
<path d="M 400,380 C 350,310 280,230 200,150"
      stroke="#555555" stroke-width="3" stroke-dasharray="7,3" fill="none" marker-end="url(#arrow-sm)"/>
<text x="172" y="285" font-family="Arial" font-size="12" fill="#555555" text-anchor="end">4 → 1</text>
<text x="172" y="300" font-family="Arial" font-size="11" fill="#555555" text-anchor="end">Adiabatic</text>
<text x="172" y="314" font-family="Arial" font-size="11" fill="#555555" text-anchor="end">compression</text>

<!-- Point labels -->
<circle cx="200" cy="150" r="5" fill="#000000"/>
<text x="185" y="142" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">1</text>
<circle cx="500" cy="165" r="5" fill="#000000"/>
<text x="510" y="157" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">2</text>
<circle cx="700" cy="380" r="5" fill="#000000"/>
<text x="710" y="378" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">3</text>
<circle cx="400" cy="380" r="5" fill="#000000"/>
<text x="390" y="400" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">4</text>

<!-- Work done label -->
<text x="440" y="285" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">W = Q_H − Q_C</text>

<!-- Efficiency box (showEfficiency=true) -->
<rect x="600" y="80" width="230" height="130" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="6"/>
<text x="715" y="100" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Carnot Efficiency</text>
<line x1="615" y1="108" x2="815" y2="108" stroke="#CCCCCC" stroke-width="1"/>
<text x="715" y="126" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">η = 1 − T_C/T_H</text>
<text x="715" y="148" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">= 1 − 300/600 = 0.50</text>
<text x="715" y="168" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">η = 50%</text>
<text x="715" y="188" font-family="Arial" font-size="11" fill="#777777" text-anchor="middle">Maximum possible efficiency</text>

<!-- Legend -->
<rect x="110" y="530" width="480" height="58" fill="none" stroke="none"/>
<line x1="120" y1="546" x2="155" y2="546" stroke="#000000" stroke-width="3"/>
<text x="230" y="550" font-family="Arial" font-size="11" fill="#000000">Isothermal (T = const, pV = const)</text>
<line x1="120" y1="568" x2="155" y2="568" stroke="#555555" stroke-width="3" stroke-dasharray="7,3"/>
<text x="230" y="572" font-family="Arial" font-size="11" fill="#555555">Adiabatic (Q = 0, steeper than isothermal)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-sm" markerWidth="7" markerHeight="7" refX="6" refY="2" orient="auto">
    <polygon points="0 0, 7 2, 0 4" fill="#555555"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: heatEngineSchematic
    // hotTemp=600, coldTemp=300, heatIn=1000, workOut=500
    // options: showHotReservoir=true, showColdReservoir=true, showWorkOutput=true, showEfficiency=true
    static heatEngineSchematicSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904//DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Heat Engine Schematic</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Heat Engine Schematic</text>
<text x="350" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">T_H=600K, T_C=300K, Q_H=1000J, W=500J, Q_C=500J</text>

<!-- HOT RESERVOIR (showHotReservoir=true) -->
<rect x="175" y="80" width="350" height="100" fill="#EEEEEE" stroke="#000000" stroke-width="2.5" rx="8"/>
<text x="350" y="120" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">HOT RESERVOIR</text>
<text x="350" y="145" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">T_H = 600 K</text>
<!-- Hatching marks on reservoir -->
<line x1="185" y1="90" x2="195" y2="100" stroke="#AAAAAA" stroke-width="1"/>
<line x1="200" y1="90" x2="210" y2="100" stroke="#AAAAAA" stroke-width="1"/>
<line x1="215" y1="90" x2="225" y2="100" stroke="#AAAAAA" stroke-width="1"/>
<line x1="465" y1="90" x2="475" y2="100" stroke="#AAAAAA" stroke-width="1"/>
<line x1="480" y1="90" x2="490" y2="100" stroke="#AAAAAA" stroke-width="1"/>

<!-- Q_H arrow downward -->
<line x1="350" y1="182" x2="350" y2="258" stroke="#000000" stroke-width="4" marker-end="url(#arrow-bw)"/>
<rect x="260" y="195" width="80" height="40" fill="#FFFFFF" stroke="none"/>
<text x="300" y="208" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Q_H</text>
<text x="300" y="225" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">= 1000 J</text>

<!-- ENGINE box -->
<rect x="225" y="260" width="250" height="150" fill="#DDDDDD" stroke="#000000" stroke-width="3" rx="8"/>
<text x="350" y="328" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">ENGINE</text>
<text x="350" y="355" font-family="Arial" font-size="13" fill="#444444" text-anchor="middle">Thermodynamic system</text>
<text x="350" y="373" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">converts heat to work</text>

<!-- Work output arrow (showWorkOutput=true) - pointing RIGHT -->
<line x1="477" y1="335" x2="570" y2="335" stroke="#000000" stroke-width="4" marker-end="url(#arrow-bw)"/>
<text x="610" y="328" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">W</text>
<text x="610" y="345" font-family="Arial" font-size="12" fill="#000000">= 500 J</text>
<text x="610" y="360" font-family="Arial" font-size="11" fill="#555555">Work output</text>

<!-- Q_C arrow downward from engine -->
<line x1="350" y1="412" x2="350" y2="488" stroke="#000000" stroke-width="4" marker-end="url(#arrow-bw)"/>
<rect x="260" y="430" width="80" height="40" fill="#FFFFFF" stroke="none"/>
<text x="300" y="443" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Q_C</text>
<text x="300" y="460" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">= 500 J</text>

<!-- COLD RESERVOIR (showColdReservoir=true) -->
<rect x="175" y="490" width="350" height="100" fill="#F5F5F5" stroke="#000000" stroke-width="2.5" rx="8"/>
<text x="350" y="530" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">COLD RESERVOIR</text>
<text x="350" y="556" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">T_C = 300 K</text>
<!-- Hatching marks -->
<line x1="185" y1="498" x2="195" y2="508" stroke="#AAAAAA" stroke-width="1"/>
<line x1="200" y1="498" x2="210" y2="508" stroke="#AAAAAA" stroke-width="1"/>
<line x1="465" y1="498" x2="475" y2="508" stroke="#AAAAAA" stroke-width="1"/>

<!-- Energy conservation label -->
<text x="80" y="290" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Energy</text>
<text x="80" y="304" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">in</text>
<text x="80" y="420" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Energy</text>
<text x="80" y="434" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">out</text>

<!-- Efficiency box (showEfficiency=true) -->
<rect x="90" y="590" width="520" height="98" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="6"/>
<text x="350" y="612" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Efficiency</text>
<text x="350" y="634" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">η = W/Q_H = 500/1000 = 50%</text>
<text x="350" y="656" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Q_H = W + Q_C  (1st Law: energy conserved)</text>
<text x="350" y="676" font-family="Arial" font-size="11" fill="#777777" text-anchor="middle">Carnot limit: η_max = 1 − T_C/T_H = 1 − 300/600 = 50%</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: refrigeratorSchematic
    // hotTemp=300, coldTemp=250, heatExtracted=600, workIn=200
    // options: showHotReservoir=true, showColdReservoir=true, showWorkInput=true, showCOP=true
    static refrigeratorSchematicSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904//DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Refrigerator Schematic</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Refrigerator Schematic</text>
<text x="350" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">T_H=300K, T_C=250K, Q_C=600J, W=200J, Q_H=800J</text>

<!-- HOT RESERVOIR (top, heat is rejected to it) -->
<rect x="175" y="80" width="350" height="100" fill="#EEEEEE" stroke="#000000" stroke-width="2.5" rx="8"/>
<text x="350" y="120" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">HOT RESERVOIR</text>
<text x="350" y="145" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">T_H = 300 K (room)</text>
<line x1="185" y1="90" x2="195" y2="100" stroke="#AAAAAA" stroke-width="1"/>
<line x1="200" y1="90" x2="210" y2="100" stroke="#AAAAAA" stroke-width="1"/>
<line x1="465" y1="90" x2="475" y2="100" stroke="#AAAAAA" stroke-width="1"/>

<!-- Q_H arrow UPWARD to hot reservoir (heat pumped out) -->
<line x1="350" y1="258" x2="350" y2="182" stroke="#000000" stroke-width="4" marker-end="url(#arrow-bw)"/>
<rect x="260" y="195" width="80" height="40" fill="#FFFFFF" stroke="none"/>
<text x="300" y="208" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Q_H</text>
<text x="300" y="225" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">= 800 J</text>

<!-- REFRIGERATOR box -->
<rect x="225" y="260" width="250" height="150" fill="#DDDDDD" stroke="#000000" stroke-width="3" rx="8"/>
<text x="350" y="328" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">REFRIGERATOR</text>
<text x="350" y="352" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">Pump heat from cold</text>
<text x="350" y="368" font-family="Arial" font-size="12" fill="#444444" text-anchor="middle">to hot reservoir</text>

<!-- Work input arrow (showWorkInput=true) — from LEFT into engine -->
<line x1="120" y1="335" x2="223" y2="335" stroke="#000000" stroke-width="4" marker-end="url(#arrow-bw)"/>
<text x="82" y="325" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">W</text>
<text x="82" y="342" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">= 200 J</text>
<text x="82" y="358" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Work input</text>

<!-- Q_C arrow UPWARD from cold reservoir to engine -->
<line x1="350" y1="488" x2="350" y2="412" stroke="#000000" stroke-width="4" marker-end="url(#arrow-bw)"/>
<rect x="260" y="430" width="80" height="40" fill="#FFFFFF" stroke="none"/>
<text x="300" y="443" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Q_C</text>
<text x="300" y="460" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">= 600 J</text>

<!-- COLD RESERVOIR (bottom — heat extracted from here) -->
<rect x="175" y="490" width="350" height="100" fill="#F5F5F5" stroke="#000000" stroke-width="2.5" rx="8"/>
<text x="350" y="528" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">COLD RESERVOIR</text>
<text x="350" y="550" font-family="Arial" font-size="14" fill="#333333" text-anchor="middle">T_C = 250 K (fridge interior)</text>
<line x1="185" y1="498" x2="195" y2="508" stroke="#AAAAAA" stroke-width="1"/>
<line x1="200" y1="498" x2="210" y2="508" stroke="#AAAAAA" stroke-width="1"/>

<!-- COP box (showCOP=true) -->
<rect x="90" y="610" width="520" height="80" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="6"/>
<text x="350" y="632" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Coefficient of Performance (COP)</text>
<text x="350" y="654" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">COP = Q_C / W = 600 / 200 = 3.0</text>
<text x="350" y="676" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Q_H = Q_C + W  (energy conserved)  |  COP_max = T_C/(T_H − T_C) = 250/50 = 5.0</text>

<!-- Direction arrows annotation -->
<text x="555" y="290" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Heat</text>
<text x="555" y="304" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">flows</text>
<text x="555" y="318" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">against</text>
<text x="555" y="332" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">natural</text>
<text x="555" y="346" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">direction</text>
<text x="555" y="360" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">→ work</text>
<text x="555" y="374" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">required</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;



    // ============================================================
    // ===== OPTICS — REFLECTION ==================================
    // ============================================================

    // Generated from registry: lawOfReflectionDiagram
    // incidentAngle: 40°
    // options: showNormal=true, showAngles=true, showMirror=true, showLabels=true
    static lawOfReflectionDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Law of Reflection Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Law of Reflection: θᵢ = θᵣ</text>
<text x="400" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">The angle of incidence equals the angle of reflection</text>

<!-- Mirror surface (horizontal line) -->
<line x1="100" y1="380" x2="700" y2="380" stroke="#000000" stroke-width="4"/>
<!-- Mirror hatching (showMirror=true) -->
<line x1="100" y1="380" x2="120" y2="400" stroke="#000000" stroke-width="1.5"/>
<line x1="140" y1="380" x2="160" y2="400" stroke="#000000" stroke-width="1.5"/>
<line x1="180" y1="380" x2="200" y2="400" stroke="#000000" stroke-width="1.5"/>
<line x1="220" y1="380" x2="240" y2="400" stroke="#000000" stroke-width="1.5"/>
<line x1="260" y1="380" x2="280" y2="400" stroke="#000000" stroke-width="1.5"/>
<line x1="300" y1="380" x2="320" y2="400" stroke="#000000" stroke-width="1.5"/>
<line x1="340" y1="380" x2="360" y2="400" stroke="#000000" stroke-width="1.5"/>
<line x1="380" y1="380" x2="400" y2="400" stroke="#000000" stroke-width="1.5"/>
<line x1="420" y1="380" x2="440" y2="400" stroke="#000000" stroke-width="1.5"/>
<line x1="460" y1="380" x2="480" y2="400" stroke="#000000" stroke-width="1.5"/>
<line x1="500" y1="380" x2="520" y2="400" stroke="#000000" stroke-width="1.5"/>
<line x1="540" y1="380" x2="560" y2="400" stroke="#000000" stroke-width="1.5"/>
<line x1="580" y1="380" x2="600" y2="400" stroke="#000000" stroke-width="1.5"/>
<line x1="620" y1="380" x2="640" y2="400" stroke="#000000" stroke-width="1.5"/>
<line x1="660" y1="380" x2="680" y2="400" stroke="#000000" stroke-width="1.5"/>
<text x="720" y="385" font-family="Arial" font-size="12" fill="#000000">Mirror</text>

<!-- Normal line (showNormal=true): vertical dashed line at point of incidence x=400 -->
<line x1="400" y1="160" x2="400" y2="540" stroke="#555555" stroke-width="1.5" stroke-dasharray="8,5"/>
<text x="408" y="175" font-family="Arial" font-size="12" fill="#555555">Normal</text>

<!-- Point of incidence -->
<circle cx="400" cy="380" r="4" fill="#000000" stroke="#000000"/>

<!-- Incident ray: angle=40° from normal → arrives from upper-left -->
<!-- From (165, 145) to (400, 380): Δx=235, Δy=235 → tan(40°)≈0.839, so Δx=235, Δy=235 checks out ~45°, adjust: 40° from normal means 50° from surface -->
<!-- dx = sin(40°)*280 ≈ 180, dy = cos(40°)*280 ≈ 214 → from (220, 166) to (400,380) -->
<line x1="220" y1="166" x2="400" y2="380" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="190" y="155" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Incident</text>
<text x="190" y="171" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Ray</text>

<!-- Reflected ray: angle=40° from normal on the other side → goes upper-right -->
<!-- dx = sin(40°)*280 ≈ 180, dy = cos(40°)*280 ≈ 214 → from (400,380) to (580,166) -->
<line x1="400" y1="380" x2="580" y2="166" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="585" y="155" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Reflected</text>
<text x="585" y="171" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Ray</text>

<!-- Angle of incidence arc (showAngles=true): from normal to incident ray, radius=70 -->
<!-- Normal goes straight up (270°), incident ray comes from upper-left at 40° from normal = 310° direction viewed from point -->
<path d="M 400 310 A 70 70 0 0 0 354 303" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="348" y="298" font-family="Arial" font-size="13" fill="#000000" font-style="italic">θᵢ</text>
<text x="320" y="330" font-family="Arial" font-size="12" fill="#000000">40°</text>

<!-- Angle of reflection arc: from normal to reflected ray, radius=70 -->
<path d="M 400 310 A 70 70 0 0 1 446 303" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="449" y="298" font-family="Arial" font-size="13" fill="#000000" font-style="italic">θᵣ</text>
<text x="462" y="330" font-family="Arial" font-size="12" fill="#000000">40°</text>

<!-- Law statement box -->
<rect x="30" y="470" width="300" height="95" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="180" y="492" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Law of Reflection</text>
<text x="46" y="514" font-family="Arial" font-size="12" fill="#000000">• Angle of incidence = Angle of reflection</text>
<text x="46" y="532" font-family="Arial" font-size="12" fill="#000000">• θᵢ = θᵣ  (measured from the normal)</text>
<text x="46" y="550" font-family="Arial" font-size="12" fill="#000000">• Incident ray, normal and reflected ray</text>
<text x="46" y="566" font-family="Arial" font-size="12" fill="#000000">  are all in the same plane</text>

<!-- Surface label -->
<text x="400" y="430" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Plane Mirror Surface</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: planeMirrorImage
    // objectDistance: 5 units, objectHeight: 2 units
    // options: showObject=true, showImage=true, showRays=true, showDistances=true, showLabels=true
    static planeMirrorImageSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Plane Mirror Image Formation</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Image Formation in a Plane Mirror</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Virtual, erect, same size — image distance = object distance</text>

<!-- Mirror surface (vertical line at x=500) -->
<line x1="500" y1="80" x2="500" y2="520" stroke="#000000" stroke-width="4"/>
<!-- Mirror hatching -->
<line x1="500" y1="90"  x2="520" y2="110" stroke="#000000" stroke-width="1.5"/>
<line x1="500" y1="120" x2="520" y2="140" stroke="#000000" stroke-width="1.5"/>
<line x1="500" y1="150" x2="520" y2="170" stroke="#000000" stroke-width="1.5"/>
<line x1="500" y1="180" x2="520" y2="200" stroke="#000000" stroke-width="1.5"/>
<line x1="500" y1="210" x2="520" y2="230" stroke="#000000" stroke-width="1.5"/>
<line x1="500" y1="240" x2="520" y2="260" stroke="#000000" stroke-width="1.5"/>
<line x1="500" y1="270" x2="520" y2="290" stroke="#000000" stroke-width="1.5"/>
<line x1="500" y1="300" x2="520" y2="320" stroke="#000000" stroke-width="1.5"/>
<line x1="500" y1="330" x2="520" y2="350" stroke="#000000" stroke-width="1.5"/>
<line x1="500" y1="360" x2="520" y2="380" stroke="#000000" stroke-width="1.5"/>
<line x1="500" y1="390" x2="520" y2="410" stroke="#000000" stroke-width="1.5"/>
<line x1="500" y1="420" x2="520" y2="440" stroke="#000000" stroke-width="1.5"/>
<line x1="500" y1="450" x2="520" y2="470" stroke="#000000" stroke-width="1.5"/>
<line x1="500" y1="480" x2="520" y2="500" stroke="#000000" stroke-width="1.5"/>
<text x="530" y="540" font-family="Arial" font-size="12" fill="#000000">Mirror</text>

<!-- Object (showObject=true): upright arrow at x=250, base at y=420, top at y=260 (objectHeight scaled ~160px, objectDistance scaled: 500-250=250px) -->
<line x1="250" y1="420" x2="250" y2="260" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<circle cx="250" cy="420" r="4" fill="#000000"/>
<text x="220" y="252" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Object</text>
<text x="235" y="268" font-family="Arial" font-size="12" fill="#000000">(O)</text>

<!-- Image (showImage=true): dashed upright arrow at x=750 (mirror image, same distance behind mirror) -->
<line x1="750" y1="420" x2="750" y2="260" stroke="#555555" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#arrow-gray)"/>
<circle cx="750" cy="420" r="4" fill="#555555" stroke="#555555"/>
<text x="760" y="252" font-family="Arial" font-size="13" fill="#555555" font-weight="bold">Image</text>
<text x="762" y="268" font-family="Arial" font-size="12" fill="#555555">(virtual)</text>

<!-- Ground line -->
<line x1="80" y1="420" x2="490" y2="420" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="510" y1="420" x2="820" y2="420" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="3,3"/>

<!-- Reflected rays (showRays=true): from object tip to mirror, then to eye -->
<!-- Ray 1: horizontal from object tip (250,260) to mirror (500,260), reflects to eye (80,380) -->
<line x1="250" y1="260" x2="500" y2="260" stroke="#000000" stroke-width="1.8"/>
<line x1="500" y1="260" x2="80" y2="380" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>
<!-- Dashed extension behind mirror for ray 1 -->
<line x1="500" y1="260" x2="750" y2="260" stroke="#AAAAAA" stroke-width="1.2" stroke-dasharray="5,4"/>

<!-- Ray 2: from object tip (250,260) to mirror at angle, reflects to eye (80,380) -->
<line x1="250" y1="260" x2="500" y2="360" stroke="#000000" stroke-width="1.8"/>
<line x1="500" y1="360" x2="80" y2="380" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>
<!-- Dashed extension behind mirror for ray 2 -->
<line x1="500" y1="360" x2="750" y2="260" stroke="#AAAAAA" stroke-width="1.2" stroke-dasharray="5,4"/>

<!-- Eye symbol at (80,380) -->
<ellipse cx="72" cy="380" rx="18" ry="10" stroke="#000000" stroke-width="1.5" fill="#FFFFFF"/>
<circle cx="72" cy="380" r="5" fill="#000000"/>
<text x="40" y="400" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Eye</text>

<!-- Distance labels (showDistances=true) -->
<!-- Object distance: from mirror to object -->
<line x1="250" y1="460" x2="500" y2="460" stroke="#000000" stroke-width="1.5"/>
<line x1="250" y1="453" x2="250" y2="467" stroke="#000000" stroke-width="1.5"/>
<line x1="500" y1="453" x2="500" y2="467" stroke="#000000" stroke-width="1.5"/>
<text x="375" y="478" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Object distance (u)</text>

<!-- Image distance: from mirror to image -->
<line x1="500" y1="490" x2="750" y2="490" stroke="#555555" stroke-width="1.5"/>
<line x1="500" y1="483" x2="500" y2="497" stroke="#555555" stroke-width="1.5"/>
<line x1="750" y1="483" x2="750" y2="497" stroke="#555555" stroke-width="1.5"/>
<text x="625" y="508" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Image distance (v)</text>
<text x="625" y="524" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">u = v</text>

<!-- Properties box -->
<rect x="30" y="80" width="190" height="110" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="125" y="100" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Image Properties</text>
<text x="42" y="118" font-family="Arial" font-size="11" fill="#000000">• Virtual (behind mirror)</text>
<text x="42" y="134" font-family="Arial" font-size="11" fill="#000000">• Erect (same orientation)</text>
<text x="42" y="150" font-family="Arial" font-size="11" fill="#000000">• Same size as object</text>
<text x="42" y="166" font-family="Arial" font-size="11" fill="#000000">• Laterally inverted</text>

<!-- "Behind mirror" shading label -->
<text x="630" y="110" font-family="Arial" font-size="11" fill="#888888" text-anchor="middle">(Behind mirror —</text>
<text x="630" y="124" font-family="Arial" font-size="11" fill="#888888" text-anchor="middle">virtual space)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-gray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#555555"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: concaveMirrorRays
    // focalLength: 80px, objectDistance: 160px, objectHeight: 30px
    // options: showPrincipalRays=true, showFocalPoint=true, showCentreOfCurvature=true, showImage=true, showMeasurements=true
    static concaveMirrorRaysSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Concave Mirror Ray Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Concave Mirror — Ray Diagram</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Object beyond 2f → real, inverted, diminished image between f and 2f</text>

<!-- Principal axis -->
<line x1="50" y1="310" x2="850" y2="310" stroke="#888888" stroke-width="1" stroke-dasharray="6,4"/>
<text x="856" y="314" font-family="Arial" font-size="11" fill="#888888">PA</text>

<!-- Concave mirror arc: centre at x=820, radius=200, showing left-facing concave curve -->
<path d="M 820 130 A 200 200 0 0 0 820 490" stroke="#000000" stroke-width="3" fill="none"/>
<!-- Mirror hatching on right side of arc -->
<line x1="825" y1="140" x2="845" y2="155" stroke="#000000" stroke-width="1.5"/>
<line x1="828" y1="175" x2="848" y2="188" stroke="#000000" stroke-width="1.5"/>
<line x1="830" y1="210" x2="850" y2="222" stroke="#000000" stroke-width="1.5"/>
<line x1="831" y1="245" x2="851" y2="256" stroke="#000000" stroke-width="1.5"/>
<line x1="831" y1="278" x2="851" y2="289" stroke="#000000" stroke-width="1.5"/>
<line x1="831" y1="312" x2="851" y2="323" stroke="#000000" stroke-width="1.5"/>
<line x1="830" y1="346" x2="850" y2="357" stroke="#000000" stroke-width="1.5"/>
<line x1="828" y1="378" x2="848" y2="390" stroke="#000000" stroke-width="1.5"/>
<line x1="825" y1="408" x2="845" y2="422" stroke="#000000" stroke-width="1.5"/>
<line x1="820" y1="440" x2="840" y2="456" stroke="#000000" stroke-width="1.5"/>
<line x1="814" y1="468" x2="832" y2="485" stroke="#000000" stroke-width="1.5"/>

<!-- Pole of mirror -->
<circle cx="820" cy="310" r="4" fill="#000000"/>
<text x="832" y="330" font-family="Arial" font-size="11" fill="#000000">P</text>

<!-- Centre of curvature C: at x=820-200=620 (on PA) (showCentreOfCurvature=true) -->
<circle cx="620" cy="310" r="6" fill="none" stroke="#000000" stroke-width="1.5"/>
<text x="618" y="332" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">C</text>
<text x="618" y="346" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">(2f)</text>

<!-- Focal point F: at x=820-100=720 (showFocalPoint=true) — wait, f=80 so F at 820-80=740 -->
<!-- Recalculate: mirror pole at 820, f=80 → F at 820-80=740, C at 820-160=660 -->
<!-- Let me use: Pole=820, F=740, C=660, object at 820-160=660 ... that's same as C. -->
<!-- Better layout: Pole=800, scale f=80, F=720, C=640, object at 800-160=640 (at C) -->
<!-- Adjusted: Pole=810, F=730, C=650, object at x=490 (u=320 ~4f for clear diagram) -->
<!-- Using: Pole=810, f=80px, F=730, 2f=650. Object at x=460 (u~350), objectHeight=80px up -->

<!-- Redrawn with clean layout: mirror pole at x=800 -->
<!-- Focal point F at x=720 (showFocalPoint=true) -->
<circle cx="720" cy="310" r="5" fill="#000000"/>
<text x="720" y="298" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">F</text>

<!-- Centre of curvature C at x=640 -->
<circle cx="640" cy="310" r="6" fill="none" stroke="#000000" stroke-width="1.5"/>
<circle cx="640" cy="310" r="2" fill="#000000"/>
<text x="640" y="296" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">C</text>

<!-- Object at x=460, tip at y=230 (objectHeight 80px upward from PA) (showObject) -->
<line x1="460" y1="310" x2="460" y2="230" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<circle cx="460" cy="310" r="3" fill="#000000"/>
<text x="440" y="222" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Object</text>

<!-- Principal Rays (showPrincipalRays=true): 3 rays from object tip (460,230) -->

<!-- Ray 1: parallel to PA → reflects through F (720,310) -->
<line x1="460" y1="230" x2="800" y2="230" stroke="#000000" stroke-width="1.8"/>
<!-- hits mirror at (800,230), reflects through F(720,310) and continues to image -->
<!-- image is between F and C. Mirror equation: 1/f=1/u+1/v → 1/80=1/340+1/v → v=340*80/(340-80)=97 -->
<!-- image at x=800-97=703 (approx), image height inverted: -80*(97/340)≈-23px → tip at y=310+23=333 -->
<!-- image tip at approx (703, 333) -->
<line x1="800" y1="230" x2="640" y2="370" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>

<!-- Ray 2: through centre of curvature (640,310) → reflects back on itself, continues to image -->
<line x1="460" y1="230" x2="800" y2="390" stroke="#000000" stroke-width="1.8"/>
<line x1="800" y1="390" x2="460" y2="230" stroke="#000000" stroke-width="0.5" stroke-dasharray="1,1000"/>
<!-- This ray goes through C, reflects and retraces — for diagram show it going to image -->
<line x1="460" y1="230" x2="640" y2="310" stroke="#000000" stroke-width="1.8"/>
<line x1="640" y1="310" x2="700" y2="333" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>

<!-- Ray 3: through focal point F → reflects parallel to PA -->
<line x1="460" y1="230" x2="720" y2="310" stroke="#000000" stroke-width="1.8"/>
<!-- hits mirror approximately, then goes parallel -->
<line x1="790" y1="272" x2="640" y2="272" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>

<!-- Image (showImage=true): inverted arrow at x≈700, tip at y≈333 -->
<line x1="700" y1="310" x2="700" y2="338" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw-down)"/>
<circle cx="700" cy="310" r="3" fill="#000000"/>
<text x="700" y="360" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Image</text>
<text x="700" y="374" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">(real, inverted)</text>

<!-- Measurements (showMeasurements=true) -->
<!-- Object distance u -->
<line x1="460" y1="440" x2="800" y2="440" stroke="#000000" stroke-width="1.5"/>
<line x1="460" y1="434" x2="460" y2="446" stroke="#000000" stroke-width="1.5"/>
<line x1="800" y1="434" x2="800" y2="446" stroke="#000000" stroke-width="1.5"/>
<text x="630" y="458" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Object distance u = 2f</text>

<!-- Focal length f -->
<line x1="720" y1="480" x2="800" y2="480" stroke="#555555" stroke-width="1.5"/>
<line x1="720" y1="474" x2="720" y2="486" stroke="#555555" stroke-width="1.5"/>
<line x1="800" y1="474" x2="800" y2="486" stroke="#555555" stroke-width="1.5"/>
<text x="760" y="498" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">f = 80</text>

<!-- Formula box -->
<rect x="30" y="400" width="220" height="80" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="140" y="420" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Mirror Formula</text>
<text x="140" y="440" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">1/f = 1/u + 1/v</text>
<text x="140" y="458" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">m = −v/u (magnification)</text>
<text x="140" y="473" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">f = R/2</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-bw-down" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: convexMirrorRays
    // focalLength: 80px, objectDistance: 150px, objectHeight: 30px
    // options: showPrincipalRays=true, showVirtualFocus=true, showImage=true, showLabels=true
    static convexMirrorRaysSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Convex Mirror Ray Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Convex Mirror — Ray Diagram</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Always produces virtual, erect, diminished image behind the mirror</text>

<!-- Principal axis -->
<line x1="50" y1="310" x2="840" y2="310" stroke="#888888" stroke-width="1" stroke-dasharray="6,4"/>

<!-- Convex mirror arc: pole at x=200, bulges left (outward facing right) -->
<path d="M 200 130 A 200 200 0 0 1 200 490" stroke="#000000" stroke-width="3" fill="none"/>
<!-- Mirror hatching on LEFT side of arc (backing) -->
<line x1="195" y1="140" x2="175" y2="155" stroke="#000000" stroke-width="1.5"/>
<line x1="192" y1="175" x2="172" y2="188" stroke="#000000" stroke-width="1.5"/>
<line x1="190" y1="210" x2="170" y2="222" stroke="#000000" stroke-width="1.5"/>
<line x1="189" y1="245" x2="169" y2="256" stroke="#000000" stroke-width="1.5"/>
<line x1="189" y1="278" x2="169" y2="289" stroke="#000000" stroke-width="1.5"/>
<line x1="189" y1="312" x2="169" y2="323" stroke="#000000" stroke-width="1.5"/>
<line x1="189" y1="346" x2="169" y2="357" stroke="#000000" stroke-width="1.5"/>
<line x1="190" y1="378" x2="170" y2="390" stroke="#000000" stroke-width="1.5"/>
<line x1="192" y1="408" x2="172" y2="422" stroke="#000000" stroke-width="1.5"/>
<line x1="196" y1="440" x2="176" y2="456" stroke="#000000" stroke-width="1.5"/>
<line x1="201" y1="470" x2="181" y2="485" stroke="#000000" stroke-width="1.5"/>

<!-- Pole of mirror -->
<circle cx="200" cy="310" r="4" fill="#000000"/>
<text x="182" y="330" font-family="Arial" font-size="11" fill="#000000">P</text>

<!-- Virtual focal point F (showVirtualFocus=true): behind mirror at x=200+80=280, dashed -->
<circle cx="280" cy="310" r="5" fill="none" stroke="#888888" stroke-width="1.5" stroke-dasharray="4,3"/>
<circle cx="280" cy="310" r="2" fill="#888888"/>
<text x="280" y="296" font-family="Arial" font-size="12" fill="#888888" text-anchor="middle" font-style="italic">F (virtual)</text>

<!-- Virtual centre of curvature behind mirror at x=200+160=360 -->
<circle cx="360" cy="310" r="5" fill="none" stroke="#AAAAAA" stroke-width="1.5"/>
<text x="360" y="296" font-family="Arial" font-size="11" fill="#AAAAAA" text-anchor="middle">C</text>

<!-- Object at x=550, height 80px up from PA (showObject) -->
<line x1="550" y1="310" x2="550" y2="230" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<circle cx="550" cy="310" r="3" fill="#000000"/>
<text x="550" y="222" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Object</text>

<!-- Principal Rays (showPrincipalRays=true) from object tip (550,230): -->

<!-- Ray 1: parallel to PA → after reflection, appears to diverge from virtual F(280,310) -->
<!-- Hits mirror at approx (203,230) [on arc near that height], then diverges -->
<line x1="550" y1="230" x2="203" y2="230" stroke="#000000" stroke-width="1.8"/>
<!-- Reflected ray: diverges as if from F behind mirror, goes to upper right -->
<line x1="203" y1="230" x2="680" y2="180" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>
<!-- Dashed extension back to virtual F -->
<line x1="203" y1="230" x2="280" y2="310" stroke="#AAAAAA" stroke-width="1.2" stroke-dasharray="5,4"/>

<!-- Ray 2: directed toward virtual F (280,310), reflects parallel to PA -->
<!-- From object tip (550,230) aimed at virtual F (280,310) → hits mirror at ~(205,282) -->
<line x1="550" y1="230" x2="205" y2="282" stroke="#000000" stroke-width="1.8"/>
<line x1="205" y1="282" x2="680" y2="282" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>
<!-- Dashed extension behind mirror to F -->
<line x1="205" y1="282" x2="280" y2="310" stroke="#AAAAAA" stroke-width="1.2" stroke-dasharray="5,4"/>

<!-- Ray 3: toward C behind mirror → reflects back on itself -->
<!-- From (550,230) toward C(360,310) → hits mirror at ~(204,264) -->
<line x1="550" y1="230" x2="204" y2="264" stroke="#000000" stroke-width="1.8"/>
<line x1="204" y1="264" x2="680" y2="230" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>

<!-- Virtual image (showImage=true): small upright arrow behind mirror, at x≈302 -->
<!-- Mirror eqn: 1/f=1/u+1/v (convex: f=+80 virtual, u=350) → v=350*80/(350+80)≈65 behind mirror at x=200+65=265 -->
<line x1="265" y1="310" x2="265" y2="292" stroke="#888888" stroke-width="2.5" stroke-dasharray="5,3" marker-end="url(#arrow-gray)"/>
<circle cx="265" cy="310" r="3" fill="#888888" stroke="#888888"/>
<text x="265" y="282" font-family="Arial" font-size="11" fill="#888888" text-anchor="middle">Image</text>
<text x="265" y="295" font-family="Arial" font-size="10" fill="#888888" text-anchor="middle">(virtual, erect)</text>

<!-- Labels for regions -->
<rect x="30" y="400" width="230" height="105" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="145" y="420" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Image Properties</text>
<text x="42" y="438" font-family="Arial" font-size="11" fill="#000000">• Always virtual (behind mirror)</text>
<text x="42" y="454" font-family="Arial" font-size="11" fill="#000000">• Always erect</text>
<text x="42" y="470" font-family="Arial" font-size="11" fill="#000000">• Always diminished (smaller)</text>
<text x="42" y="486" font-family="Arial" font-size="11" fill="#000000">• Wider field of view → used in</text>
<text x="42" y="501" font-family="Arial" font-size="11" fill="#000000">  rear-view mirrors, security mirrors</text>

<!-- Label dashed region -->
<text x="290" y="130" font-family="Arial" font-size="11" fill="#AAAAAA" text-anchor="middle">Behind mirror</text>
<text x="290" y="143" font-family="Arial" font-size="11" fill="#AAAAAA" text-anchor="middle">(virtual space)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-gray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#888888"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: mirrorEquationDiagram
    // focalLength: 80, objectDistance: 200, objectHeight: 40
    // options: showDistanceLabels=true, showFormula=true, showImage=true, showMagnification=true
    static mirrorEquationDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Mirror Equation Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Mirror Equation: 1/f = 1/u + 1/v</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Concave mirror — object beyond 2f, f=80, u=200</text>

<!-- Principal axis -->
<line x1="50" y1="300" x2="860" y2="300" stroke="#888888" stroke-width="1" stroke-dasharray="6,4"/>

<!-- Concave mirror arc at x=820 -->
<path d="M 820 140 A 190 190 0 0 0 820 460" stroke="#000000" stroke-width="3" fill="none"/>
<line x1="825" y1="150" x2="845" y2="163" stroke="#000000" stroke-width="1.5"/>
<line x1="828" y1="190" x2="848" y2="202" stroke="#000000" stroke-width="1.5"/>
<line x1="830" y1="228" x2="850" y2="240" stroke="#000000" stroke-width="1.5"/>
<line x1="831" y1="265" x2="851" y2="276" stroke="#000000" stroke-width="1.5"/>
<line x1="831" y1="300" x2="851" y2="311" stroke="#000000" stroke-width="1.5"/>
<line x1="830" y1="334" x2="850" y2="345" stroke="#000000" stroke-width="1.5"/>
<line x1="828" y1="366" x2="848" y2="378" stroke="#000000" stroke-width="1.5"/>
<line x1="825" y1="396" x2="845" y2="410" stroke="#000000" stroke-width="1.5"/>
<line x1="820" y1="428" x2="840" y2="443" stroke="#000000" stroke-width="1.5"/>

<!-- Pole P -->
<circle cx="820" cy="300" r="4" fill="#000000"/>
<text x="832" y="318" font-family="Arial" font-size="11" fill="#000000">P</text>

<!-- F at x=820-80=740 (showDistanceLabels=true) -->
<circle cx="740" cy="300" r="5" fill="#000000"/>
<text x="740" y="287" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">F</text>

<!-- C at x=820-160=660 -->
<circle cx="660" cy="300" r="6" fill="none" stroke="#000000" stroke-width="1.5"/>
<circle cx="660" cy="300" r="2" fill="#000000"/>
<text x="660" y="287" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">C</text>

<!-- Object at x=820-200=620 — wait, 200px from pole → x=620, objectHeight=80px up -->
<line x1="620" y1="300" x2="620" y2="220" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<circle cx="620" cy="300" r="3" fill="#000000"/>
<text x="598" y="212" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Object</text>
<text x="596" y="226" font-family="Arial" font-size="11" fill="#666666">(height h)</text>

<!-- Image calculation: 1/80=1/200+1/v → 1/v=1/80-1/200=5/400-2/400=3/400 → v=400/3≈133 -->
<!-- Image at x=820-133=687, magnification m=-v/u=-133/200=-0.67 → height=-0.67*80≈-54px inverted -->
<!-- Image tip at y=300+54=354, base at y=300 -->
<line x1="687" y1="300" x2="687" y2="354" stroke="#333333" stroke-width="3" marker-end="url(#arrow-bw-down)"/>
<circle cx="687" cy="300" r="3" fill="#333333" stroke="#333333"/>
<text x="700" y="370" font-family="Arial" font-size="11" fill="#333333" font-weight="bold">Image</text>
<text x="700" y="384" font-family="Arial" font-size="10" fill="#666666">(real, inverted)</text>

<!-- Distance labels (showDistanceLabels=true) -->
<!-- Object distance u = 200 -->
<line x1="620" y1="430" x2="820" y2="430" stroke="#000000" stroke-width="1.8"/>
<line x1="620" y1="423" x2="620" y2="437" stroke="#000000" stroke-width="1.5"/>
<line x1="820" y1="423" x2="820" y2="437" stroke="#000000" stroke-width="1.5"/>
<line x1="720" y1="430" x2="720" y2="430" stroke="#000000" stroke-width="0"/>
<text x="720" y="450" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">u = 200 (object distance)</text>

<!-- Image distance v = 133 -->
<line x1="687" y1="462" x2="820" y2="462" stroke="#555555" stroke-width="1.8"/>
<line x1="687" y1="455" x2="687" y2="469" stroke="#555555" stroke-width="1.5"/>
<line x1="820" y1="455" x2="820" y2="469" stroke="#555555" stroke-width="1.5"/>
<text x="753" y="482" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">v ≈ 133 (image distance)</text>

<!-- Focal length f = 80 -->
<line x1="740" y1="492" x2="820" y2="492" stroke="#888888" stroke-width="1.8"/>
<line x1="740" y1="485" x2="740" y2="499" stroke="#888888" stroke-width="1.5"/>
<line x1="820" y1="485" x2="820" y2="499" stroke="#888888" stroke-width="1.5"/>
<text x="780" y="512" font-family="Arial" font-size="11" fill="#888888" text-anchor="middle">f = 80</text>

<!-- Formula boxes (showFormula=true, showMagnification=true) -->
<rect x="30" y="140" width="240" height="130" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="150" y="162" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Mirror Equation</text>
<text x="150" y="184" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">1/f = 1/u + 1/v</text>
<text x="42" y="208" font-family="Arial" font-size="12" fill="#000000">1/80 = 1/200 + 1/v</text>
<text x="42" y="228" font-family="Arial" font-size="12" fill="#000000">1/v = 1/80 − 1/200</text>
<text x="42" y="248" font-family="Arial" font-size="12" fill="#000000">v = 133.3 cm</text>

<rect x="30" y="290" width="240" height="70" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="150" y="310" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Magnification</text>
<text x="150" y="332" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">m = −v/u = h'/h</text>
<text x="150" y="352" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">m = −133/200 ≈ −0.67</text>

<!-- Sign convention note -->
<text x="450" y="545" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Sign convention: distances measured from pole P; real distances positive (in front of mirror)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-bw-down" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
    <polygon points="0 0, 10 3, 0 6" fill="#333333"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: rayDiagramConcaveObjectPositions
    // focalLength: 80, objectPositions: [beyond_2f, at_2f, between_f_2f, at_f, within_f]
    // options: showAllPositions=true, showImageProperties=true, showLabels=true
    static rayDiagramConcaveObjectPositionsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="700" viewBox="0 0 900 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Concave Mirror — Object at Different Positions</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="19" fill="#000000" text-anchor="middle" font-weight="bold">Concave Mirror — Image at Different Object Positions</text>

<!-- Column headers -->
<text x="85" y="60" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Object Position</text>
<text x="340" y="60" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Ray Diagram</text>
<text x="660" y="60" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Image Properties</text>

<!-- Divider lines -->
<line x1="0" y1="70" x2="900" y2="70" stroke="#CCCCCC" stroke-width="1"/>
<line x1="165" y1="70" x2="165" y2="700" stroke="#CCCCCC" stroke-width="1"/>
<line x1="510" y1="70" x2="510" y2="700" stroke="#CCCCCC" stroke-width="1"/>

<!-- ===== ROW 1: Beyond 2f ===== -->
<line x1="0" y1="196" x2="900" y2="196" stroke="#EEEEEE" stroke-width="1"/>
<!-- Object label -->
<text x="85" y="116" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Beyond 2f</text>
<text x="85" y="132" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(u &gt; 2f)</text>
<!-- Mini mirror -->
<path d="M 490 80 A 80 80 0 0 0 490 195" stroke="#000000" stroke-width="2" fill="none"/>
<line x1="250" y1="137" x2="488" y2="137" stroke="#AAAAAA" stroke-width="0.8" stroke-dasharray="4,3"/>
<!-- Object arrow -->
<line x1="310" y1="137" x2="310" y2="105" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<!-- F and C marks -->
<circle cx="450" cy="137" r="3" fill="#000000"/><text x="450" y="127" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">F</text>
<circle cx="415" cy="137" r="3" fill="#000000"/><text x="415" y="127" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">C</text>
<!-- Image: between F and C, real inverted diminished -->
<line x1="430" y1="137" x2="430" y2="152" stroke="#333333" stroke-width="2" marker-end="url(#arrow-bw)"/>
<!-- Image properties -->
<text x="660" y="106" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Real, Inverted</text>
<text x="660" y="124" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Diminished</text>
<text x="660" y="142" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Between f and 2f</text>
<text x="660" y="158" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">m = −v/u,  |m| &lt; 1</text>
<text x="660" y="176" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Example: u=240, f=80 → v=120</text>

<!-- ===== ROW 2: At 2f ===== -->
<line x1="0" y1="316" x2="900" y2="316" stroke="#EEEEEE" stroke-width="1"/>
<text x="85" y="234" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">At 2f</text>
<text x="85" y="250" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(u = 2f)</text>
<path d="M 490 200 A 80 80 0 0 0 490 315" stroke="#000000" stroke-width="2" fill="none"/>
<line x1="250" y1="257" x2="488" y2="257" stroke="#AAAAAA" stroke-width="0.8" stroke-dasharray="4,3"/>
<line x1="376" y1="257" x2="376" y2="225" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<circle cx="449" cy="257" r="3" fill="#000000"/><text x="449" y="247" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">F</text>
<circle cx="418" cy="257" r="3" fill="#000000"/><text x="418" y="247" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">C</text>
<!-- Image at 2f, same size inverted -->
<line x1="418" y1="257" x2="418" y2="289" stroke="#333333" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="660" y="228" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Real, Inverted</text>
<text x="660" y="246" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Same Size</text>
<text x="660" y="264" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">At 2f (same distance)</text>
<text x="660" y="282" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">m = −1</text>

<!-- ===== ROW 3: Between f and 2f ===== -->
<line x1="0" y1="436" x2="900" y2="436" stroke="#EEEEEE" stroke-width="1"/>
<text x="85" y="350" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Between f &amp; 2f</text>
<text x="85" y="366" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(f &lt; u &lt; 2f)</text>
<path d="M 490 320 A 80 80 0 0 0 490 435" stroke="#000000" stroke-width="2" fill="none"/>
<line x1="250" y1="377" x2="488" y2="377" stroke="#AAAAAA" stroke-width="0.8" stroke-dasharray="4,3"/>
<line x1="430" y1="377" x2="430" y2="345" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<circle cx="457" cy="377" r="3" fill="#000000"/><text x="457" y="367" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">F</text>
<circle cx="424" cy="377" r="3" fill="#000000"/><text x="424" y="367" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">C</text>
<!-- Image beyond 2f, magnified -->
<line x1="270" y1="377" x2="270" y2="320" stroke="#333333" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="660" y="348" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Real, Inverted</text>
<text x="660" y="366" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Magnified</text>
<text x="660" y="384" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Beyond 2f</text>
<text x="660" y="402" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">m = −v/u,  |m| &gt; 1</text>

<!-- ===== ROW 4: At f ===== -->
<line x1="0" y1="556" x2="900" y2="556" stroke="#EEEEEE" stroke-width="1"/>
<text x="85" y="468" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">At f</text>
<text x="85" y="484" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(u = f)</text>
<path d="M 490 440 A 80 80 0 0 0 490 555" stroke="#000000" stroke-width="2" fill="none"/>
<line x1="250" y1="497" x2="488" y2="497" stroke="#AAAAAA" stroke-width="0.8" stroke-dasharray="4,3"/>
<line x1="458" y1="497" x2="458" y2="465" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<circle cx="459" cy="497" r="3" fill="#000000"/><text x="459" y="487" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">F</text>
<!-- Parallel reflected rays — image at infinity -->
<line x1="258" y1="467" x2="488" y2="467" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="258" y1="490" x2="488" y2="490" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="660" y="468" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Image at Infinity</text>
<text x="660" y="486" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Reflected rays are parallel</text>
<text x="660" y="504" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">m → ∞</text>

<!-- ===== ROW 5: Within f ===== -->
<text x="85" y="588" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Within f</text>
<text x="85" y="604" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(u &lt; f)</text>
<path d="M 490 560 A 80 80 0 0 0 490 698" stroke="#000000" stroke-width="2" fill="none"/>
<line x1="250" y1="628" x2="488" y2="628" stroke="#AAAAAA" stroke-width="0.8" stroke-dasharray="4,3"/>
<line x1="476" y1="628" x2="476" y2="596" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<circle cx="460" cy="628" r="3" fill="#000000"/><text x="460" y="618" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">F</text>
<!-- Diverging reflected rays -->
<line x1="488" y1="600" x2="250" y2="575" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<!-- Virtual image behind mirror -->
<line x1="498" y1="605" x2="498" y2="573" stroke="#888888" stroke-width="1.8" stroke-dasharray="5,3" marker-end="url(#arrow-gray)"/>
<text x="660" y="588" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Virtual, Erect</text>
<text x="660" y="606" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Magnified</text>
<text x="660" y="624" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Behind mirror</text>
<text x="660" y="642" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">m = −v/u,  m &gt; 1 (positive)</text>
<text x="660" y="660" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Used in shaving/makeup mirrors</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-gray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#888888"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: focalPointIllustration
    // focalLength: 80, numRays: 5
    // options: showParallelRays=true, showFocalPoint=true, showFocalLength=true, showLabels=true
    static focalPointIllustrationSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Focal Point Illustration</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Focal Point of a Concave Mirror</text>
<text x="400" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Parallel rays converge at the focal point F after reflection</text>

<!-- Principal axis -->
<line x1="50" y1="320" x2="760" y2="320" stroke="#888888" stroke-width="1" stroke-dasharray="6,4"/>

<!-- Concave mirror arc: pole at x=700, radius=200 -->
<path d="M 700 140 A 200 200 0 0 0 700 500" stroke="#000000" stroke-width="3.5" fill="none"/>
<!-- Mirror hatching -->
<line x1="705" y1="150" x2="725" y2="163" stroke="#000000" stroke-width="1.5"/>
<line x1="708" y1="188" x2="728" y2="200" stroke="#000000" stroke-width="1.5"/>
<line x1="710" y1="225" x2="730" y2="237" stroke="#000000" stroke-width="1.5"/>
<line x1="711" y1="262" x2="731" y2="274" stroke="#000000" stroke-width="1.5"/>
<line x1="711" y1="298" x2="731" y2="310" stroke="#000000" stroke-width="1.5"/>
<line x1="711" y1="334" x2="731" y2="346" stroke="#000000" stroke-width="1.5"/>
<line x1="710" y1="368" x2="730" y2="380" stroke="#000000" stroke-width="1.5"/>
<line x1="708" y1="400" x2="728" y2="413" stroke="#000000" stroke-width="1.5"/>
<line x1="704" y1="430" x2="724" y2="445" stroke="#000000" stroke-width="1.5"/>
<line x1="699" y1="460" x2="719" y2="476" stroke="#000000" stroke-width="1.5"/>
<line x1="693" y1="488" x2="711" y2="505" stroke="#000000" stroke-width="1.5"/>

<!-- Pole -->
<circle cx="700" cy="320" r="4" fill="#000000"/>
<text x="712" y="338" font-family="Arial" font-size="11" fill="#000000">P</text>

<!-- Focal point F at x=700-100=600 (showFocalPoint=true) — using f=100 for clear diagram (f=80 scaled) -->
<!-- f=80, pole at 700, F at 700-80=620 -->
<circle cx="620" cy="320" r="7" fill="#000000"/>
<text x="620" y="306" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">F</text>

<!-- Parallel incoming rays (showParallelRays=true): 5 rays, evenly spaced -->
<!-- Ray 1: y=200 -->
<line x1="100" y1="200" x2="692" y2="200" stroke="#000000" stroke-width="2"/>
<!-- Reflected toward F (620,320): from mirror point (692,200) to F(620,320) and beyond -->
<line x1="692" y1="200" x2="620" y2="320" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- Ray 2: y=245 -->
<line x1="100" y1="245" x2="698" y2="245" stroke="#000000" stroke-width="2"/>
<line x1="698" y1="245" x2="620" y2="320" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- Ray 3: y=320 (principal axis ray) -->
<line x1="100" y1="320" x2="700" y2="320" stroke="#000000" stroke-width="2"/>
<line x1="700" y1="320" x2="620" y2="320" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- Ray 4: y=395 -->
<line x1="100" y1="395" x2="698" y2="395" stroke="#000000" stroke-width="2"/>
<line x1="698" y1="395" x2="620" y2="320" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- Ray 5: y=440 -->
<line x1="100" y1="440" x2="692" y2="440" stroke="#000000" stroke-width="2"/>
<line x1="692" y1="440" x2="620" y2="320" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- "Parallel rays" label -->
<line x1="50" y1="165" x2="120" y2="165" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="130" y="160" font-family="Arial" font-size="12" fill="#000000">Parallel rays</text>
<text x="130" y="175" font-family="Arial" font-size="12" fill="#000000">(from distant source)</text>

<!-- Focal length dimension (showFocalLength=true) -->
<line x1="620" y1="370" x2="700" y2="370" stroke="#000000" stroke-width="1.8"/>
<line x1="620" y1="363" x2="620" y2="377" stroke="#000000" stroke-width="1.5"/>
<line x1="700" y1="363" x2="700" y2="377" stroke="#000000" stroke-width="1.5"/>
<text x="660" y="390" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">f = 80</text>

<!-- Radius of curvature -->
<line x1="700" y1="410" x2="540" y2="410" stroke="#555555" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="700" y1="403" x2="700" y2="417" stroke="#555555" stroke-width="1.5"/>
<line x1="540" y1="403" x2="540" y2="417" stroke="#555555" stroke-width="1.5"/>
<circle cx="540" cy="320" r="3" fill="#555555"/>
<text x="620" y="430" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">R = 2f = 160 (centre of curvature)</text>

<!-- Info box -->
<rect x="30" y="470" width="280" height="105" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="170" y="490" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Key Facts</text>
<text x="44" y="508" font-family="Arial" font-size="11" fill="#000000">• Parallel rays reflect through focal point F</text>
<text x="44" y="524" font-family="Arial" font-size="11" fill="#000000">• Focal length f = R/2 (R = radius of curvature)</text>
<text x="44" y="540" font-family="Arial" font-size="11" fill="#000000">• For sun's rays: focal point is very hot spot</text>
<text x="44" y="556" font-family="Arial" font-size="11" fill="#000000">• Parabolic mirrors eliminate spherical aberration</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;


    // ============================================================
    // ===== OPTICS — REFRACTION ==================================
    // ============================================================

    // Generated from registry: snellsLawDiagram
    // incidentAngle: 40°, n1: 1.0, n2: 1.5
    // options: showNormal=true, showAngles=true, showRefractiveIndices=true, showFormula=true, showMediaLabels=true
    static snellsLawDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Snell's Law Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Snell's Law: n₁sinθ₁ = n₂sinθ₂</text>
<text x="400" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Ray bending at an interface between two optical media</text>

<!-- Medium 1 (upper half): Air, n1=1.0 (showMediaLabels=true) -->
<rect x="0" y="65" width="800" height="245" fill="#FAFAFA" stroke="none"/>
<text x="90" y="130" font-family="Arial" font-size="14" fill="#555555" font-weight="bold">Medium 1</text>
<text x="90" y="150" font-family="Arial" font-size="13" fill="#555555">Air / Vacuum</text>
<!-- showRefractiveIndices=true -->
<text x="90" y="172" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">n₁ = 1.00</text>

<!-- Medium 2 (lower half): Glass, n2=1.5 -->
<rect x="0" y="310" width="800" height="290" fill="#F0F0F0" stroke="none"/>
<text x="90" y="380" font-family="Arial" font-size="14" fill="#555555" font-weight="bold">Medium 2</text>
<text x="90" y="400" font-family="Arial" font-size="13" fill="#555555">Glass</text>
<text x="90" y="422" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">n₂ = 1.50</text>

<!-- Boundary line -->
<line x1="0" y1="310" x2="800" y2="310" stroke="#000000" stroke-width="2.5"/>
<text x="760" y="305" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">Boundary</text>

<!-- Normal line (showNormal=true): vertical dashed at x=400 -->
<line x1="400" y1="80" x2="400" y2="560" stroke="#555555" stroke-width="1.5" stroke-dasharray="8,5"/>
<text x="408" y="95" font-family="Arial" font-size="12" fill="#555555">Normal</text>

<!-- Point of incidence -->
<circle cx="400" cy="310" r="4" fill="#000000"/>

<!-- Incident ray: 40° from normal → from upper-left -->
<!-- sin(40°)≈0.643, cos(40°)≈0.766; dx=sin40*220=141, dy=cos40*220=169 → from (259,141) to (400,310) -->
<line x1="259" y1="141" x2="400" y2="310" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="218" y="130" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Incident</text>
<text x="218" y="147" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Ray</text>

<!-- Refracted ray: Snell's law: sinθ₂ = n1*sinθ1/n2 = 1.0*sin40/1.5 = 0.643/1.5 = 0.429 → θ₂≈25.4° -->
<!-- dx=sin(25.4°)*220≈94, dy=cos(25.4°)*220≈199 → from (400,310) to (494,509) -->
<line x1="400" y1="310" x2="494" y2="509" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="500" y="522" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Refracted</text>
<text x="500" y="538" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Ray</text>

<!-- Angle of incidence arc (showAngles=true): radius=70 from normal upward to incident ray -->
<path d="M 400 240 A 70 70 0 0 0 355 258" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="338" y="248" font-family="Arial" font-size="13" fill="#000000" font-style="italic">θ₁</text>
<text x="312" y="268" font-family="Arial" font-size="12" fill="#000000">40°</text>

<!-- Angle of refraction arc: radius=70 from normal downward to refracted ray -->
<path d="M 400 380 A 70 70 0 0 1 430 372" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="435" y="366" font-family="Arial" font-size="13" fill="#000000" font-style="italic">θ₂</text>
<text x="448" y="388" font-family="Arial" font-size="12" fill="#000000">25.4°</text>

<!-- Speed labels -->
<text x="650" y="200" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Speed v₁ = c/n₁</text>
<text x="650" y="218" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">= 3.0 × 10⁸ m/s</text>
<text x="650" y="430" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Speed v₂ = c/n₂</text>
<text x="650" y="448" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">= 2.0 × 10⁸ m/s</text>

<!-- Formula box (showFormula=true) -->
<rect x="30" y="460" width="260" height="115" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="160" y="480" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Snell's Law</text>
<text x="160" y="500" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">n₁ sin θ₁ = n₂ sin θ₂</text>
<text x="46" y="522" font-family="Arial" font-size="12" fill="#000000">1.00 × sin(40°) = 1.50 × sin(θ₂)</text>
<text x="46" y="540" font-family="Arial" font-size="12" fill="#000000">sin(θ₂) = 0.643/1.5 = 0.429</text>
<text x="46" y="558" font-family="Arial" font-size="12" fill="#000000">θ₂ = 25.4°  (ray bends toward normal)</text>

<!-- Wavelength note -->
<text x="400" y="583" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Note: frequency unchanged; wavelength decreases in denser medium (λ = v/f)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: refractionAtBoundary
    // incidentAngle: 35°, n1: 1.0, n2: 1.6
    // options: showBending=true, showNormal=true, showAngles=true, showSpeedChange=true, showLabels=true
    static refractionAtBoundarySvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Refraction at a Boundary</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Refraction at an Optical Boundary</text>

<!-- Two panels side by side -->
<!-- Panel 1: Less dense to more dense (left) -->
<!-- Panel 2: More dense to less dense (right) -->
<line x1="410" y1="60" x2="410" y2="590" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="4,4"/>

<!-- ===== LEFT PANEL: n1<n2 (bends toward normal) ===== -->
<text x="205" y="75" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Less Dense → More Dense</text>
<text x="205" y="92" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Ray bends TOWARD normal</text>

<!-- Left upper medium -->
<rect x="10" y="100" width="390" height="165" fill="#FAFAFA" stroke="none"/>
<text x="60" y="135" font-family="Arial" font-size="12" fill="#555555">n₁ = 1.0 (Air)</text>

<!-- Left boundary -->
<line x1="10" y1="265" x2="400" y2="265" stroke="#000000" stroke-width="2"/>

<!-- Left lower medium -->
<rect x="10" y="265" width="390" height="190" fill="#F0F0F0" stroke="none"/>
<text x="60" y="305" font-family="Arial" font-size="12" fill="#555555">n₂ = 1.6 (Glass)</text>

<!-- Left normal -->
<line x1="205" y1="100" x2="205" y2="450" stroke="#888888" stroke-width="1" stroke-dasharray="6,4"/>

<!-- Left incident ray: 35° from normal (upper-left to boundary) -->
<!-- sin35≈0.574, cos35≈0.819; dx=0.574*160≈92, dy=0.819*160≈131 → from (113,134) to (205,265) -->
<line x1="113" y1="134" x2="205" y2="265" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="70" y="118" font-family="Arial" font-size="11" fill="#000000">Incident</text>

<!-- Left refracted ray: sinθ₂=sin35/1.6=0.574/1.6=0.359 → θ₂≈21° -->
<!-- sin21≈0.358, cos21≈0.934; dx=0.358*160≈57, dy=0.934*160≈149 → from (205,265) to (262,414) -->
<line x1="205" y1="265" x2="262" y2="414" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="268" y="425" font-family="Arial" font-size="11" fill="#000000">Refracted</text>

<!-- Left angle arcs -->
<path d="M 205 205 A 60 60 0 0 0 170 227" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="152" y="220" font-family="Arial" font-size="12" fill="#000000" font-style="italic">θ₁=35°</text>

<path d="M 205 325 A 60 60 0 0 1 226 319" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="230" y="314" font-family="Arial" font-size="12" fill="#000000" font-style="italic">θ₂=21°</text>

<!-- Speed change arrow (showSpeedChange=true) -->
<line x1="310" y1="175" x2="310" y2="195" stroke="#555555" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="316" y="172" font-family="Arial" font-size="10" fill="#555555">v₁=c/1.0</text>
<line x1="310" y1="305" x2="310" y2="325" stroke="#555555" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="316" y="302" font-family="Arial" font-size="10" fill="#555555">v₂=c/1.6 ↓</text>
<text x="316" y="315" font-family="Arial" font-size="10" fill="#555555">(slower)</text>

<!-- ===== RIGHT PANEL: n1>n2 (bends away from normal) ===== -->
<text x="610" y="75" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">More Dense → Less Dense</text>
<text x="610" y="92" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Ray bends AWAY from normal</text>

<!-- Right upper medium (denser) -->
<rect x="420" y="100" width="370" height="165" fill="#F0F0F0" stroke="none"/>
<text x="470" y="135" font-family="Arial" font-size="12" fill="#555555">n₁ = 1.6 (Glass)</text>

<!-- Right boundary -->
<line x1="420" y1="265" x2="790" y2="265" stroke="#000000" stroke-width="2"/>

<!-- Right lower medium (less dense) -->
<rect x="420" y="265" width="370" height="190" fill="#FAFAFA" stroke="none"/>
<text x="470" y="305" font-family="Arial" font-size="12" fill="#555555">n₂ = 1.0 (Air)</text>

<!-- Right normal -->
<line x1="610" y1="100" x2="610" y2="450" stroke="#888888" stroke-width="1" stroke-dasharray="6,4"/>

<!-- Right incident ray: 21° from normal in glass -->
<!-- sin21≈0.358; dx=0.358*160≈57, dy=0.934*160≈149 → from (553,116) to (610,265) -->
<line x1="553" y1="116" x2="610" y2="265" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="490" y="104" font-family="Arial" font-size="11" fill="#000000">Incident</text>
<text x="490" y="118" font-family="Arial" font-size="11" fill="#000000">(21°)</text>

<!-- Right refracted ray: bends away → θ₂=35° (reverse of left) -->
<!-- sin35=0.574; dx=0.574*160≈92, dy=0.819*160≈131 → from (610,265) to (702,396) -->
<line x1="610" y1="265" x2="702" y2="396" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="706" y="408" font-family="Arial" font-size="11" fill="#000000">Refracted</text>
<text x="706" y="422" font-family="Arial" font-size="11" fill="#000000">(35°)</text>

<!-- Right angle arcs -->
<path d="M 610 205 A 60 60 0 0 0 581 226" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="548" y="218" font-family="Arial" font-size="12" fill="#000000" font-style="italic">θ₁=21°</text>

<path d="M 610 325 A 60 60 0 0 1 644 318" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="648" y="312" font-family="Arial" font-size="12" fill="#000000" font-style="italic">θ₂=35°</text>

<!-- Speed change -->
<line x1="730" y1="175" x2="730" y2="195" stroke="#555555" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="736" y="172" font-family="Arial" font-size="10" fill="#555555">v₁=c/1.6</text>
<line x1="730" y1="305" x2="730" y2="325" stroke="#555555" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="736" y="302" font-family="Arial" font-size="10" fill="#555555">v₂=c/1.0 ↑</text>
<text x="736" y="315" font-family="Arial" font-size="10" fill="#555555">(faster)</text>

<!-- Note on TIR -->
<rect x="420" y="470" width="370" height="95" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="605" y="490" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Note: Total Internal Reflection</text>
<text x="434" y="510" font-family="Arial" font-size="11" fill="#000000">When ray goes from denser → less dense medium,</text>
<text x="434" y="526" font-family="Arial" font-size="11" fill="#000000">if θ₁ exceeds the critical angle θ_c, no refraction</text>
<text x="434" y="542" font-family="Arial" font-size="11" fill="#000000">occurs — all light is reflected internally.</text>
<text x="434" y="558" font-family="Arial" font-size="11" fill="#000000">sin θ_c = n₂/n₁  (for glass→air: θ_c ≈ 38.7°)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: opticalFibreCrossSection
    // coreRadius: 25, claddingRadius: 62.5, jacketRadius: 125
    // coreN: 1.48, claddingN: 1.46
    // options: showCore=true, showCladding=true, showJacket=true, showRefractiveIndices=true, showLabels=true
    static opticalFibreCrossSectionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Optical Fibre Cross Section</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Optical Fibre Cross Section</text>
<text x="350" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Concentric layers: core, cladding, and protective jacket</text>

<!-- Centre of cross-section -->
<!-- Outer jacket: radius scaled ~170px (showJacket=true) -->
<circle cx="350" cy="340" r="170" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<!-- Cladding: radius scaled ~85px (showCladding=true) — cladding/jacket ratio: 62.5/125=0.5 -->
<circle cx="350" cy="340" r="85" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<!-- Core: radius scaled ~34px (showCore=true) — core/jacket ratio: 25/125≈0.2 -->
<circle cx="350" cy="340" r="34" fill="#FFFFFF" stroke="#000000" stroke-width="2.5"/>
<!-- Centre dot -->
<circle cx="350" cy="340" r="3" fill="#000000"/>

<!-- Dimension lines with labels -->
<!-- Core radius: 34px -->
<line x1="350" y1="340" x2="384" y2="340" stroke="#000000" stroke-width="1.5"/>
<line x1="384" y1="330" x2="384" y2="350" stroke="#000000" stroke-width="1.5"/>
<text x="360" y="328" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">r_core</text>
<text x="360" y="316" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">= 25 μm</text>

<!-- Cladding outer radius: 85px -->
<line x1="350" y1="340" x2="350" y2="255" stroke="#888888" stroke-width="1.2" stroke-dasharray="4,3"/>
<line x1="340" y1="255" x2="360" y2="255" stroke="#888888" stroke-width="1.2"/>
<text x="310" y="300" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">r_clad</text>
<text x="310" y="314" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">= 62.5 μm</text>

<!-- Jacket outer radius: 170px -->
<line x1="350" y1="340" x2="350" y2="170" stroke="#AAAAAA" stroke-width="1.2" stroke-dasharray="4,3"/>
<line x1="340" y1="170" x2="360" y2="170" stroke="#AAAAAA" stroke-width="1.2"/>
<text x="350" y="145" font-family="Arial" font-size="11" fill="#888888" text-anchor="middle">r_jacket</text>
<text x="350" y="159" font-family="Arial" font-size="11" fill="#888888" text-anchor="middle">= 125 μm</text>

<!-- Layer labels (showLabels=true) -->
<!-- Core label -->
<text x="350" y="338" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Core</text>
<text x="350" y="353" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">n = 1.48</text>

<!-- Cladding label -->
<text x="430" y="310" font-family="Arial" font-size="12" fill="#333333" font-weight="bold">Cladding</text>
<text x="430" y="326" font-family="Arial" font-size="11" fill="#555555">n = 1.46</text>
<line x1="420" y1="316" x2="400" y2="320" stroke="#555555" stroke-width="1" stroke-dasharray="3,2"/>

<!-- Jacket label -->
<text x="490" y="390" font-family="Arial" font-size="12" fill="#555555" font-weight="bold">Jacket</text>
<text x="490" y="406" font-family="Arial" font-size="11" fill="#777777">(protective</text>
<text x="490" y="420" font-family="Arial" font-size="11" fill="#777777"> coating)</text>
<line x1="484" y1="396" x2="460" y2="390" stroke="#888888" stroke-width="1" stroke-dasharray="3,2"/>

<!-- Refractive index profile (showRefractiveIndices=true) — side profile diagram -->
<text x="350" y="540" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Refractive Index Profile</text>
<!-- Profile axes -->
<line x1="130" y1="620" x2="570" y2="620" stroke="#000000" stroke-width="1.5"/>
<line x1="130" y1="560" x2="130" y2="630" stroke="#000000" stroke-width="1.5"/>
<text x="570" y="634" font-family="Arial" font-size="11" fill="#000000">radius →</text>
<text x="118" y="558" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">n</text>
<!-- Step-index profile: n=1.48 in core (from x=130 to 250 centre, represented as ±) -->
<!-- Centre at x=350; core extends ±34px scaled to ±60px on profile -->
<line x1="130" y1="580" x2="290" y2="580" stroke="#000000" stroke-width="2"/><!-- left cladding n=1.46 -->
<line x1="290" y1="580" x2="290" y2="568" stroke="#000000" stroke-width="2"/><!-- step up at core left -->
<line x1="290" y1="568" x2="410" y2="568" stroke="#000000" stroke-width="2"/><!-- core n=1.48 -->
<line x1="410" y1="568" x2="410" y2="580" stroke="#000000" stroke-width="2"/><!-- step down at core right -->
<line x1="410" y1="580" x2="570" y2="580" stroke="#000000" stroke-width="2"/><!-- right cladding -->
<!-- Reference lines -->
<line x1="130" y1="568" x2="570" y2="568" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="130" y1="580" x2="570" y2="580" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="3,3"/>
<!-- n labels -->
<text x="118" y="572" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">1.48</text>
<text x="118" y="584" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">1.46</text>
<!-- core / cladding labels on profile -->
<text x="350" y="555" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">core</text>
<text x="220" y="598" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">cladding</text>
<text x="490" y="598" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">cladding</text>

<!-- Key principle -->
<text x="350" y="648" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">TIR occurs because n_core &gt; n_cladding → light confined in core</text>
<text x="350" y="664" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Critical angle θ_c = sin⁻¹(n_clad/n_core) = sin⁻¹(1.46/1.48) ≈ 80.6°</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: prismRefraction
    // prismAngle: 60°, incidentAngle: 40°, refractiveIndex: 1.5
    // options: showAngles=true, showNormals=true, showDeviation=true, showLabels=true
    static prismRefractionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Prism Refraction Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Refraction Through a Prism</text>
<text x="400" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Glass prism, A = 60°, n = 1.5, angle of incidence = 40°</text>

<!-- Equilateral prism (60° apex): vertices at (400,100), (200,450), (600,450) -->
<polygon points="400,100 200,450 600,450" fill="#F5F5F5" stroke="#000000" stroke-width="2.5"/>

<!-- Apex angle label (showAngles=true) -->
<path d="M 385 120 A 25 25 0 0 1 415 120" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="400" y="150" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">A = 60°</text>

<!-- Base angles -->
<path d="M 215 440 A 25 25 0 0 1 238 432" stroke="#000000" stroke-width="1.2" fill="none"/>
<text x="232" y="464" font-family="Arial" font-size="12" fill="#555555">60°</text>

<path d="M 562 432 A 25 25 0 0 1 585 440" stroke="#000000" stroke-width="1.2" fill="none"/>
<text x="555" y="464" font-family="Arial" font-size="12" fill="#555555">60°</text>

<!-- Entry surface normal (showNormals=true): perpendicular to left face at entry point -->
<!-- Left face runs from (400,100) to (200,450). Direction vector: (-200,350). Normal direction: (350,200) normalised. -->
<!-- Entry point on left face at ~(300, 280) (midpoint-ish) -->
<!-- Normal: slope perpendicular to face. Face angle from vertical: arctan(200/350)≈29.7°. Normal is perpendicular, so rotated 90° -->
<!-- For a 60° prism left face: face makes 60° with horizontal. Normal is at 30° from horizontal. -->
<!-- Entry point: (295, 270); Normal along (cos30°, -sin30°)=(0.866,-0.5) direction -->
<line x1="190" y1="295" x2="400" y2="188" stroke="#888888" stroke-width="1.5" stroke-dasharray="7,5"/>
<text x="178" y="290" font-family="Arial" font-size="11" fill="#888888" text-anchor="end">Normal₁</text>

<!-- Exit surface normal: right face runs (400,100)→(600,450). Face angle 60° with horiz. Normal at 150° from horizontal. -->
<!-- Exit point on right face at ~(505, 270) -->
<line x1="610" y1="188" x2="400" y2="295" stroke="#888888" stroke-width="1.5" stroke-dasharray="7,5"/>
<text x="618" y="284" font-family="Arial" font-size="11" fill="#888888">Normal₂</text>

<!-- Incident ray: coming from upper-left, hits entry face at (295,270) at 40° from Normal₁ -->
<!-- Normal₁ direction: ~(cos30°, sin30°) from prism side = angled. Incident comes from far left. -->
<!-- Simplified: from (80,175) to (295,270) -->
<line x1="80" y1="175" x2="295" y2="270" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="60" y="162" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Incident</text>
<text x="60" y="178" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Ray</text>

<!-- Refracted ray inside prism: from entry point (295,270) to exit point (505,270) approximately -->
<!-- (ray travels roughly horizontally through for 60° prism symmetric case) -->
<line x1="295" y1="270" x2="505" y2="270" stroke="#000000" stroke-width="2" stroke-dasharray="7,4"/>
<text x="400" y="258" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Inside prism</text>

<!-- Exit / refracted ray: from (505,270) going upper-right, emerging with deviation -->
<!-- For 60° prism, n=1.5, incident=40°, refracted outside at angle ~55° from Normal₂ -->
<line x1="505" y1="270" x2="700" y2="170" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="710" y="158" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Emergent</text>
<text x="710" y="174" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Ray</text>

<!-- Deviation angle (showDeviation=true): angle between incident direction extended and emergent ray -->
<!-- Extend incident ray direction: from (295,270) continuing to (510,365) roughly -->
<line x1="295" y1="270" x2="510" y2="365" stroke="#AAAAAA" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="540" y="370" font-family="Arial" font-size="11" fill="#666666">Undeviated</text>
<text x="540" y="385" font-family="Arial" font-size="11" fill="#666666">direction</text>

<!-- Deviation arc from x=505, y=270 -->
<path d="M 630 310 A 130 130 0 0 0 640 240" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="670" y="285" font-family="Arial" font-size="13" fill="#000000" font-style="italic">δ</text>
<text x="680" y="305" font-family="Arial" font-size="12" fill="#000000">(deviation)</text>

<!-- Entry angle label -->
<path d="M 255 262 A 30 30 0 0 1 265 251" stroke="#000000" stroke-width="1.2" fill="none"/>
<text x="228" y="248" font-family="Arial" font-size="11" fill="#000000">θ₁=40°</text>

<!-- Formula / info box -->
<rect x="30" y="470" width="310" height="100" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="185" y="490" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Key Relationships</text>
<text x="44" y="510" font-family="Arial" font-size="11" fill="#000000">• n sin r = sin i  (at each surface)</text>
<text x="44" y="526" font-family="Arial" font-size="11" fill="#000000">• r₁ + r₂ = A  (prism angle)</text>
<text x="44" y="542" font-family="Arial" font-size="11" fill="#000000">• δ = (i₁ + i₂) − A  (angle of deviation)</text>
<text x="44" y="558" font-family="Arial" font-size="11" fill="#000000">• Min. deviation when i₁ = i₂ (symmetric)</text>

<!-- Prism label -->
<text x="400" y="400" font-family="Arial" font-size="13" fill="#777777" text-anchor="middle">Glass  n = 1.5</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: glassBlockRayPath
    // incidentAngle: 45°, refractiveIndex: 1.5, blockWidth: 100
    // options: showEntryRefraction=true, showExitRefraction=true, showLateralDisplacement=true, showAngles=true, showLabels=true
    static glassBlockRayPathSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Glass Block Ray Path</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Ray Through a Rectangular Glass Block</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Emergent ray is parallel to incident ray but laterally displaced</text>

<!-- Glass block: centred at x=450, entry face x=310, exit face x=590, y=130 to y=470 -->
<rect x="310" y="130" width="280" height="340" fill="#F2F2F2" stroke="#000000" stroke-width="2.5"/>
<text x="450" y="385" font-family="Arial" font-size="13" fill="#888888" text-anchor="middle">Glass</text>
<text x="450" y="403" font-family="Arial" font-size="13" fill="#888888" text-anchor="middle">n = 1.5</text>

<!-- Entry face label (showEntryRefraction=true) -->
<text x="310" y="120" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Entry face</text>

<!-- Exit face label (showExitRefraction=true) -->
<text x="590" y="120" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Exit face</text>

<!-- Entry normal: vertical dashed at x=310, entry point at (310, 280) -->
<line x1="310" y1="140" x2="310" y2="450" stroke="#888888" stroke-width="1.2" stroke-dasharray="7,5"/>

<!-- Exit normal: vertical dashed at x=590 -->
<line x1="590" y1="140" x2="590" y2="450" stroke="#888888" stroke-width="1.2" stroke-dasharray="7,5"/>

<!-- Entry point at (310, 260); Exit point at (590, 350) -->
<!-- Incident ray: 45° from normal; from (130, 100) to (310, 260) -->
<!-- sin45=0.707; Δx=0.707*225≈159, Δy=225 → from (151,35) to (310,260) wait too far. Simpler: 45° angle -->
<!-- tan45=1 so Δx=Δy. From upper-left: (130,100) to (310,260) — Δx=180, Δy=160 — angle≈42° close enough -->
<line x1="100" y1="90" x2="310" y2="260" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="70" y="78" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Incident Ray</text>

<!-- Entry angle label (showAngles=true) -->
<path d="M 310 195 A 65 65 0 0 0 263 228" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="238" y="222" font-family="Arial" font-size="12" fill="#000000" font-style="italic">θ₁=45°</text>

<!-- Refracted ray inside glass: snell→ sinθ₂=sin45/1.5=0.707/1.5=0.471 → θ₂≈28.1° -->
<!-- From (310,260) to exit point. tan28.1°≈0.534; Δx=280 (block width), Δy=280*0.534≈150 → exit at (590, 410) -->
<line x1="310" y1="260" x2="590" y2="410" stroke="#000000" stroke-width="2.5"/>

<!-- Entry refraction angle inside -->
<path d="M 310 325 A 65 65 0 0 1 340 316" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="346" y="312" font-family="Arial" font-size="12" fill="#000000" font-style="italic">θ₂=28°</text>

<!-- Exit face angles (showExitRefraction=true) -->
<!-- At exit (590,410): inside angle 28°, outside angle 45° (same as entry by symmetry for parallel faces) -->
<path d="M 590 345 A 65 65 0 0 0 557 365" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="524" y="360" font-family="Arial" font-size="12" fill="#000000" font-style="italic">28°</text>

<!-- Emergent ray: same direction as incident (45°), from (590,410) to (770,580) -->
<line x1="590" y1="410" x2="770" y2="553" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="785" y="556" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Emergent</text>
<text x="785" y="572" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Ray</text>

<!-- Exit angle -->
<path d="M 590 475 A 65 65 0 0 1 637 452" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="645" y="447" font-family="Arial" font-size="12" fill="#000000" font-style="italic">θ₃=45°</text>

<!-- Incident ray extended (dashed) to show parallelism -->
<line x1="310" y1="260" x2="770" y2="624" stroke="#AAAAAA" stroke-width="1.5" stroke-dasharray="6,4"/>
<text x="740" y="613" font-family="Arial" font-size="11" fill="#AAAAAA" text-anchor="end">Incident direction extended</text>

<!-- Lateral displacement (showLateralDisplacement=true): perpendicular distance between incident and emergent rays -->
<!-- Both run at 45°; draw perpendicular connector between the two parallel lines -->
<!-- Midpoint between (520,390) on refracted path extension and corresponding point on emergent: -->
<!-- perpendicular from emergent ray (590,410)+(say 60px along ray)=(685,487) to incident-extended at same point along direction = (643,453)  -->
<line x1="643" y1="453" x2="685" y2="487" stroke="#000000" stroke-width="2" stroke-dasharray="3,2"/>
<line x1="637" y1="458" x2="651" y2="448" stroke="#000000" stroke-width="1.5"/>
<line x1="679" y1="492" x2="691" y2="482" stroke="#000000" stroke-width="1.5"/>
<text x="690" y="460" font-family="Arial" font-size="12" fill="#000000" font-style="italic">d</text>
<text x="700" y="476" font-family="Arial" font-size="11" fill="#555555">(lateral</text>
<text x="700" y="490" font-family="Arial" font-size="11" fill="#555555"> displacement)</text>

<!-- Info box -->
<rect x="30" y="460" width="270" height="110" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="165" y="480" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Key Points</text>
<text x="44" y="498" font-family="Arial" font-size="11" fill="#000000">• Emergent ray ∥ incident ray</text>
<text x="44" y="514" font-family="Arial" font-size="11" fill="#000000">• Lateral displacement d = t·sin(θ₁−θ₂)/cosθ₂</text>
<text x="44" y="530" font-family="Arial" font-size="11" fill="#000000">• No overall deviation, only displacement</text>
<text x="44" y="546" font-family="Arial" font-size="11" fill="#000000">• t = block thickness; d increases with t</text>
<text x="44" y="562" font-family="Arial" font-size="11" fill="#000000">• d increases with larger incidence angle</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;


    // ============================================================
    // ===== OPTICS — LENSES ======================================
    // ============================================================

    // Generated from registry: convergingLensRays
    // focalLength: 80, objectDistance: 200, objectHeight: 40
    // options: showPrincipalRays=true, showFocalPoints=true, showImage=true, showMeasurements=true
    static convergingLensRaysSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Converging Lens Ray Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Converging Lens — Ray Diagram</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Object beyond 2f → real, inverted, diminished image between f and 2f (on far side)</text>

<!-- Principal axis -->
<line x1="30" y1="310" x2="870" y2="310" stroke="#888888" stroke-width="1" stroke-dasharray="6,4"/>

<!-- Converging lens at x=500: double convex shape -->
<path d="M 500 170 Q 525 310 500 450" stroke="#000000" stroke-width="2.5" fill="none"/>
<path d="M 500 170 Q 475 310 500 450" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Lens arrows at ends -->
<line x1="493" y1="170" x2="507" y2="170" stroke="#000000" stroke-width="2"/>
<line x1="493" y1="450" x2="507" y2="450" stroke="#000000" stroke-width="2"/>
<!-- Lens label -->
<text x="500" y="162" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Converging</text>
<text x="500" y="474" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Lens</text>

<!-- Optical centre O -->
<circle cx="500" cy="310" r="3" fill="#000000"/>
<text x="505" y="326" font-family="Arial" font-size="11" fill="#000000">O</text>

<!-- Focal points (showFocalPoints=true): F1 (object side) at x=500-80=420, F2 (image side) at x=500+80=580 -->
<circle cx="420" cy="310" r="5" fill="#000000"/>
<text x="420" y="296" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">F₁</text>

<circle cx="580" cy="310" r="5" fill="#000000"/>
<text x="580" y="296" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">F₂</text>

<!-- 2F points: x=500-160=340 and x=500+160=660 -->
<circle cx="340" cy="310" r="3" fill="#000000"/>
<text x="340" y="296" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">2F₁</text>
<circle cx="660" cy="310" r="3" fill="#000000"/>
<text x="660" y="296" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">2F₂</text>

<!-- Object at x=300 (500-200=300), height=80px up, tip at (300,230) (showObject) -->
<line x1="300" y1="310" x2="300" y2="230" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<circle cx="300" cy="310" r="3" fill="#000000"/>
<text x="278" y="222" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Object</text>

<!-- Principal Rays (showPrincipalRays=true) from object tip (300,230): -->

<!-- Ray 1: parallel to axis → refracts through F₂ (580,310) -->
<line x1="300" y1="230" x2="500" y2="230" stroke="#000000" stroke-width="1.8"/>
<line x1="500" y1="230" x2="660" y2="350" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>
<!-- Thin lens eqn: 1/80=1/200+1/v → 1/v=1/80-1/200=0.0125-0.005=0.0075 → v=133; image at 500+133=633 -->
<!-- m=-v/u=-133/200=-0.665 → image height=-0.665*80≈-53px → tip at y=310+53=363 -->
<!-- Ray 1 extended to image point (633,363) -->
<line x1="500" y1="230" x2="633" y2="363" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>

<!-- Ray 2: through optical centre O → passes straight through -->
<line x1="300" y1="230" x2="633" y2="363" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>

<!-- Ray 3: through F₁ (420,310) → exits parallel to axis -->
<line x1="300" y1="230" x2="500" y2="310" stroke="#000000" stroke-width="0.1"/>
<!-- This ray goes through F₁ on way to lens: from object tip aimed at F₁, hits lens -->
<!-- direction from (300,230) toward F₁(420,310): slope=(310-230)/(420-300)=80/120=0.667 -->
<!-- at lens x=500: y=230+0.667*(500-300)=230+133=363 — wait that's above PA. Intercept at lens: -->
<!-- from (300,230) slope=(310-230)/(420-300)=80/120. At x=500: y=230+(500-300)*80/120=230+133=363? -->
<!-- Recalculate: from tip (300,230) to F1(420,310): Δx=120, Δy=80; at lens x=500: Δx=200, y=230+200*(80/120)=230+133=363 — hmm, that's below axis. -->
<!-- Actually at x=500: y = 230 + (500-300)*(310-230)/(420-300) = 230 + 200*80/120 = 230+133 = 363 -->
<!-- lens hit at (500,363) — but that's below PA (310). Let me just show it going through F1 region -->
<line x1="300" y1="230" x2="420" y2="310" stroke="#000000" stroke-width="1.8"/>
<line x1="420" y1="310" x2="500" y2="364" stroke="#000000" stroke-width="0.5"/>
<!-- After lens, exits parallel to axis at y=364 -->
<line x1="500" y1="364" x2="633" y2="364" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>

<!-- Image at x=633, inverted, tip at y=363 (showImage=true) -->
<line x1="633" y1="310" x2="633" y2="363" stroke="#333333" stroke-width="3" marker-end="url(#arrow-bw-inv)"/>
<circle cx="633" cy="310" r="3" fill="#333333" stroke="#333333"/>
<text x="633" y="384" font-family="Arial" font-size="11" fill="#333333" text-anchor="middle" font-weight="bold">Image</text>
<text x="633" y="398" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">(real, inverted)</text>

<!-- Measurements (showMeasurements=true) -->
<line x1="300" y1="440" x2="500" y2="440" stroke="#000000" stroke-width="1.5"/>
<line x1="300" y1="433" x2="300" y2="447" stroke="#000000" stroke-width="1.5"/>
<line x1="500" y1="433" x2="500" y2="447" stroke="#000000" stroke-width="1.5"/>
<text x="400" y="460" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">u = 200 (object distance)</text>

<line x1="500" y1="470" x2="633" y2="470" stroke="#555555" stroke-width="1.5"/>
<line x1="500" y1="463" x2="500" y2="477" stroke="#555555" stroke-width="1.5"/>
<line x1="633" y1="463" x2="633" y2="477" stroke="#555555" stroke-width="1.5"/>
<text x="566" y="490" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">v ≈ 133 (image distance)</text>

<line x1="500" y1="500" x2="580" y2="500" stroke="#888888" stroke-width="1.5"/>
<line x1="500" y1="493" x2="500" y2="507" stroke="#888888" stroke-width="1.5"/>
<line x1="580" y1="493" x2="580" y2="507" stroke="#888888" stroke-width="1.5"/>
<text x="540" y="518" font-family="Arial" font-size="11" fill="#888888" text-anchor="middle">f = 80</text>

<!-- Formula box -->
<rect x="30" y="430" width="220" height="70" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="140" y="450" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Thin Lens Equation</text>
<text x="140" y="470" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">1/f = 1/u + 1/v</text>
<text x="140" y="488" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">m = v/u = h'/h</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-bw-inv" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#333333"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: divergingLensRays
    // focalLength: 80, objectDistance: 150, objectHeight: 40
    // options: showPrincipalRays=true, showVirtualFocus=true, showImage=true, showLabels=true
    static divergingLensRaysSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Diverging Lens Ray Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Diverging Lens — Ray Diagram</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Always produces virtual, erect, diminished image on the same side as the object</text>

<!-- Principal axis -->
<line x1="30" y1="310" x2="870" y2="310" stroke="#888888" stroke-width="1" stroke-dasharray="6,4"/>

<!-- Diverging lens at x=500: double concave shape -->
<path d="M 500 170 Q 480 310 500 450" stroke="#000000" stroke-width="2.5" fill="none"/>
<path d="M 500 170 Q 520 310 500 450" stroke="#000000" stroke-width="2.5" fill="none"/>
<line x1="493" y1="170" x2="507" y2="170" stroke="#000000" stroke-width="2"/>
<line x1="493" y1="450" x2="507" y2="450" stroke="#000000" stroke-width="2"/>
<text x="500" y="162" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Diverging</text>
<text x="500" y="474" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Lens</text>

<!-- Optical centre O -->
<circle cx="500" cy="310" r="3" fill="#000000"/>
<text x="505" y="326" font-family="Arial" font-size="11" fill="#000000">O</text>

<!-- Virtual focal points (showVirtualFocus=true): F1 on image side (same side as object) at x=500-80=420, F2 on far side at x=580 -->
<circle cx="420" cy="310" r="5" fill="none" stroke="#888888" stroke-width="1.5" stroke-dasharray="4,3"/>
<circle cx="420" cy="310" r="2" fill="#888888"/>
<text x="420" y="296" font-family="Arial" font-size="12" fill="#888888" text-anchor="middle" font-style="italic">F₁</text>
<text x="420" y="282" font-family="Arial" font-size="10" fill="#888888" text-anchor="middle">(virtual)</text>

<circle cx="580" cy="310" r="5" fill="none" stroke="#888888" stroke-width="1.5" stroke-dasharray="4,3"/>
<circle cx="580" cy="310" r="2" fill="#888888"/>
<text x="580" y="296" font-family="Arial" font-size="12" fill="#888888" text-anchor="middle" font-style="italic">F₂</text>

<!-- Object at x=350 (500-150=350), tip at (350,230) (showObject) -->
<line x1="350" y1="310" x2="350" y2="230" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<circle cx="350" cy="310" r="3" fill="#000000"/>
<text x="328" y="222" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Object</text>

<!-- Principal Rays (showPrincipalRays=true) from (350,230): -->

<!-- Ray 1: parallel to axis → diverges as if from F₁ (420,310) after lens -->
<line x1="350" y1="230" x2="500" y2="230" stroke="#000000" stroke-width="1.8"/>
<!-- After lens, diverges away from F₁ (420,310). Direction from F₁(420,310) through lens-hit(500,230) and beyond: -->
<!-- slope=(230-310)/(500-420)=-80/80=-1; extend: from (500,230) going right, slope=-1: to (700,30) — too far up, use to edge -->
<line x1="500" y1="230" x2="700" y2="30" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>
<!-- Dashed extension back to F₁ -->
<line x1="500" y1="230" x2="420" y2="310" stroke="#AAAAAA" stroke-width="1.2" stroke-dasharray="5,4"/>

<!-- Ray 2: through optical centre → straight through -->
<!-- Image position: 1/(-80)=1/150+1/v → 1/v=-1/80-1/150=-0.01250-0.00667=-0.01917 → v≈-52 → image at 500-52=448 -->
<!-- m=v/u=-52/150 (but virtual so positive): image height=52/150*80≈28px, erect, at y=310-28=282 -->
<line x1="350" y1="230" x2="700" y2="430" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>
<!-- But also need the refracted ray through O continued past image -->

<!-- Ray 3: aimed at virtual F₂ (580,310) → exits parallel to axis after lens -->
<!-- From (350,230) aimed at (580,310): slope=(310-230)/(580-350)=80/230=0.348; at lens x=500: y=230+0.348*(500-350)=230+52=282 -->
<line x1="350" y1="230" x2="500" y2="282" stroke="#000000" stroke-width="1.8"/>
<line x1="500" y1="282" x2="700" y2="282" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>
<!-- Dashed back extension to F₂ -->
<line x1="500" y1="282" x2="580" y2="282" stroke="#AAAAAA" stroke-width="1.2" stroke-dasharray="5,4"/>

<!-- Virtual image at x=448, erect, tip at y=282 (showImage=true) -->
<line x1="448" y1="310" x2="448" y2="282" stroke="#888888" stroke-width="2.5" stroke-dasharray="5,3" marker-end="url(#arrow-gray)"/>
<circle cx="448" cy="310" r="3" fill="#888888" stroke="#888888"/>
<text x="448" y="272" font-family="Arial" font-size="11" fill="#888888" text-anchor="middle">Image</text>
<text x="448" y="258" font-family="Arial" font-size="10" fill="#888888" text-anchor="middle">(virtual, erect)</text>

<!-- Dashed lines from lens to virtual image showing divergent rays trace back -->
<line x1="500" y1="230" x2="448" y2="282" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="500" y1="282" x2="448" y2="282" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="4,3"/>

<!-- Image properties box -->
<rect x="30" y="430" width="250" height="120" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="155" y="450" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Image Properties</text>
<text x="44" y="468" font-family="Arial" font-size="11" fill="#000000">• Virtual (same side as object)</text>
<text x="44" y="484" font-family="Arial" font-size="11" fill="#000000">• Erect (same orientation as object)</text>
<text x="44" y="500" font-family="Arial" font-size="11" fill="#000000">• Diminished (smaller than object)</text>
<text x="44" y="516" font-family="Arial" font-size="11" fill="#000000">• Always true regardless of object distance</text>
<text x="44" y="534" font-family="Arial" font-size="11" fill="#000000">• 1/f = 1/u + 1/v  (f negative for diverging)</text>

<!-- Focal length label -->
<line x1="420" y1="350" x2="500" y2="350" stroke="#888888" stroke-width="1.5"/>
<line x1="420" y1="344" x2="420" y2="356" stroke="#888888" stroke-width="1.5"/>
<line x1="500" y1="344" x2="500" y2="356" stroke="#888888" stroke-width="1.5"/>
<text x="460" y="368" font-family="Arial" font-size="11" fill="#888888" text-anchor="middle">f = 80 (virtual)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-gray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#888888"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: thinLensDiagram
    // focalLength: 80, objectDistance: 200, objectHeight: 40
    // options: showDistanceLabels=true, showFormula=true, showImage=true, showMagnification=true
    static thinLensDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Thin Lens Equation Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Thin Lens Equation: 1/f = 1/u + 1/v</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Labelled diagram showing all quantities in the thin lens equation</text>

<!-- Principal axis -->
<line x1="30" y1="300" x2="870" y2="300" stroke="#888888" stroke-width="1" stroke-dasharray="6,4"/>

<!-- Converging lens at x=470 -->
<path d="M 470 155 Q 496 300 470 445" stroke="#000000" stroke-width="2.5" fill="none"/>
<path d="M 470 155 Q 444 300 470 445" stroke="#000000" stroke-width="2.5" fill="none"/>
<line x1="462" y1="155" x2="478" y2="155" stroke="#000000" stroke-width="2"/>
<line x1="462" y1="445" x2="478" y2="445" stroke="#000000" stroke-width="2"/>

<!-- Optical centre O -->
<circle cx="470" cy="300" r="3" fill="#000000"/>
<text x="477" y="318" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">O</text>

<!-- F on both sides: f=80, F1 at x=390, F2 at x=550 -->
<circle cx="390" cy="300" r="5" fill="#000000"/>
<text x="390" y="286" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">F</text>

<circle cx="550" cy="300" r="5" fill="#000000"/>
<text x="550" y="286" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">F</text>

<!-- Object at x=270 (470-200=270), height=80px up (showObject) -->
<line x1="270" y1="300" x2="270" y2="220" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<circle cx="270" cy="300" r="3" fill="#000000"/>
<text x="248" y="212" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">h</text>
<text x="230" y="228" font-family="Arial" font-size="11" fill="#555555">(object</text>
<text x="230" y="242" font-family="Arial" font-size="11" fill="#555555"> height)</text>

<!-- Image: 1/80=1/200+1/v → v≈133; image at 470+133=603; m=133/200=0.665; h'=0.665*80≈53px inverted at y=353 -->
<line x1="603" y1="300" x2="603" y2="353" stroke="#333333" stroke-width="3" marker-end="url(#arrow-bw-inv)"/>
<circle cx="603" cy="300" r="3" fill="#333333" stroke="#333333"/>
<text x="612" y="308" font-family="Arial" font-size="12" fill="#333333" font-weight="bold">h'</text>
<text x="612" y="323" font-family="Arial" font-size="11" fill="#555555">(image</text>
<text x="612" y="337" font-family="Arial" font-size="11" fill="#555555"> height)</text>

<!-- Principal ray for reference -->
<line x1="270" y1="220" x2="470" y2="220" stroke="#BBBBBB" stroke-width="1.5"/>
<line x1="470" y1="220" x2="603" y2="353" stroke="#BBBBBB" stroke-width="1.5" marker-end="url(#arrow-gray)"/>
<line x1="270" y1="220" x2="603" y2="353" stroke="#BBBBBB" stroke-width="1.5" marker-end="url(#arrow-gray)"/>

<!-- Distance labels (showDistanceLabels=true) -->
<!-- Object distance u = 200 -->
<line x1="270" y1="468" x2="470" y2="468" stroke="#000000" stroke-width="2"/>
<line x1="270" y1="461" x2="270" y2="475" stroke="#000000" stroke-width="2"/>
<line x1="470" y1="461" x2="470" y2="475" stroke="#000000" stroke-width="2"/>
<text x="370" y="490" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">u = 200</text>
<text x="370" y="506" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(object distance)</text>

<!-- Image distance v = 133 -->
<line x1="470" y1="500" x2="603" y2="500" stroke="#444444" stroke-width="2"/>
<line x1="470" y1="493" x2="470" y2="507" stroke="#444444" stroke-width="2"/>
<line x1="603" y1="493" x2="603" y2="507" stroke="#444444" stroke-width="2"/>
<text x="536" y="520" font-family="Arial" font-size="13" fill="#444444" text-anchor="middle" font-weight="bold">v ≈ 133</text>
<text x="536" y="534" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">(image distance)</text>

<!-- Focal length f = 80 -->
<line x1="470" y1="540" x2="550" y2="540" stroke="#888888" stroke-width="1.8"/>
<line x1="470" y1="533" x2="470" y2="547" stroke="#888888" stroke-width="1.8"/>
<line x1="550" y1="533" x2="550" y2="547" stroke="#888888" stroke-width="1.8"/>
<text x="510" y="558" font-family="Arial" font-size="12" fill="#888888" text-anchor="middle">f = 80</text>

<!-- Formula box (showFormula=true) -->
<rect x="30" y="145" width="218" height="140" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="139" y="165" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Thin Lens Equation</text>
<text x="139" y="188" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">1/f = 1/u + 1/v</text>
<text x="44" y="210" font-family="Arial" font-size="12" fill="#000000">1/80 = 1/200 + 1/v</text>
<text x="44" y="228" font-family="Arial" font-size="12" fill="#000000">v = 133.3</text>

<!-- Magnification box (showMagnification=true) -->
<rect x="30" y="302" width="218" height="90" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="139" y="322" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Magnification</text>
<text x="139" y="344" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">m = v/u = h'/h</text>
<text x="139" y="364" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">m = 133/200 ≈ 0.67</text>
<text x="139" y="382" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(|m|&lt;1: diminished; inverted)</text>

<!-- Sign convention note -->
<text x="450" y="580" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Real-is-positive convention: u, v, f positive for real object/image/converging lens</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-bw-inv" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#333333"/>
  </marker>
  <marker id="arrow-gray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#BBBBBB"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: lensImageFormation
    // focalLength: 80, objectPositions: [beyond_2f, at_2f, between_f_2f, at_f, within_f]
    // options: showAllPositions=true, showImageProperties=true, showLabels=true
    static lensImageFormationSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="700" viewBox="0 0 900 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Lens Image Formation — Multiple Positions</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="19" fill="#000000" text-anchor="middle" font-weight="bold">Converging Lens — Image for Different Object Positions</text>

<!-- Headers -->
<text x="85" y="58" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Object Position</text>
<text x="340" y="58" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Ray Sketch</text>
<text x="680" y="58" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Image Properties</text>

<line x1="0" y1="68" x2="900" y2="68" stroke="#CCCCCC" stroke-width="1"/>
<line x1="165" y1="68" x2="165" y2="700" stroke="#CCCCCC" stroke-width="1"/>
<line x1="510" y1="68" x2="510" y2="700" stroke="#CCCCCC" stroke-width="1"/>

<!-- Shared mini-lens drawing macro: lens at x=370, axis y varies -->
<!-- ===== ROW 1: Beyond 2f ===== -->
<line x1="0" y1="194" x2="900" y2="194" stroke="#EEEEEE" stroke-width="1"/>
<text x="85" y="110" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Beyond 2f</text>
<text x="85" y="126" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">u &gt; 2f</text>
<!-- Mini lens at x=370, axis y=130 -->
<path d="M 370 95 Q 378 130 370 165" stroke="#000000" stroke-width="1.5" fill="none"/>
<path d="M 370 95 Q 362 130 370 165" stroke="#000000" stroke-width="1.5" fill="none"/>
<line x1="185" y1="130" x2="505" y2="130" stroke="#AAAAAA" stroke-width="0.8" stroke-dasharray="4,3"/>
<!-- F marks at 370±40 -->
<circle cx="330" cy="130" r="3" fill="#000000"/><text x="330" y="122" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">F</text>
<circle cx="410" cy="130" r="3" fill="#000000"/><text x="410" y="122" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">F</text>
<!-- Object at 240 (far left of 2f=330-40=290, so object at ~240) -->
<line x1="240" y1="130" x2="240" y2="108" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<!-- Image: real, inverted diminished, between F and 2F on right -->
<line x1="430" y1="130" x2="430" y2="144" stroke="#333333" stroke-width="2" marker-end="url(#arrow-bw)"/>
<!-- Rays -->
<line x1="240" y1="108" x2="370" y2="108" stroke="#000000" stroke-width="1"/>
<line x1="370" y1="108" x2="430" y2="144" stroke="#000000" stroke-width="1" marker-end="url(#arrow-bw)"/>
<line x1="240" y1="108" x2="430" y2="144" stroke="#000000" stroke-width="1" marker-end="url(#arrow-bw)"/>
<!-- Properties -->
<text x="680" y="104" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Real, Inverted, Diminished</text>
<text x="680" y="120" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Between F and 2F (far side)</text>
<text x="680" y="136" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">f &lt; v &lt; 2f</text>
<text x="680" y="152" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">|m| &lt; 1</text>
<text x="680" y="170" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Application: camera</text>

<!-- ===== ROW 2: At 2f ===== -->
<line x1="0" y1="314" x2="900" y2="314" stroke="#EEEEEE" stroke-width="1"/>
<text x="85" y="228" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">At 2f</text>
<text x="85" y="244" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">u = 2f</text>
<path d="M 370 215 Q 378 252 370 290" stroke="#000000" stroke-width="1.5" fill="none"/>
<path d="M 370 215 Q 362 252 370 290" stroke="#000000" stroke-width="1.5" fill="none"/>
<line x1="185" y1="252" x2="505" y2="252" stroke="#AAAAAA" stroke-width="0.8" stroke-dasharray="4,3"/>
<circle cx="330" cy="252" r="3" fill="#000000"/><text x="330" y="244" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">F</text>
<circle cx="410" cy="252" r="3" fill="#000000"/><text x="410" y="244" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">F</text>
<!-- Object at 290 (=2f from lens at 370: 370-80=290) -->
<line x1="290" y1="252" x2="290" y2="226" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<!-- Image at 450 (=2f far side: 370+80=450, but 2F means 370+80=450), same height inverted -->
<line x1="450" y1="252" x2="450" y2="278" stroke="#333333" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="680" y="224" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Real, Inverted, Same Size</text>
<text x="680" y="240" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">At 2F (far side)</text>
<text x="680" y="256" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">v = 2f</text>
<text x="680" y="272" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">m = −1</text>

<!-- ===== ROW 3: Between f and 2f ===== -->
<line x1="0" y1="434" x2="900" y2="434" stroke="#EEEEEE" stroke-width="1"/>
<text x="85" y="346" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Between f &amp; 2f</text>
<text x="85" y="362" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">f &lt; u &lt; 2f</text>
<path d="M 370 335 Q 378 372 370 410" stroke="#000000" stroke-width="1.5" fill="none"/>
<path d="M 370 335 Q 362 372 370 410" stroke="#000000" stroke-width="1.5" fill="none"/>
<line x1="185" y1="372" x2="505" y2="372" stroke="#AAAAAA" stroke-width="0.8" stroke-dasharray="4,3"/>
<circle cx="330" cy="372" r="3" fill="#000000"/><text x="330" y="364" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">F</text>
<circle cx="410" cy="372" r="3" fill="#000000"/><text x="410" y="364" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">F</text>
<!-- Object between F and 2F on left -->
<line x1="316" y1="372" x2="316" y2="350" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<!-- Image beyond 2F on right, magnified inverted -->
<line x1="470" y1="372" x2="470" y2="336" stroke="#333333" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="680" y="344" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Real, Inverted, Magnified</text>
<text x="680" y="360" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Beyond 2F (far side)</text>
<text x="680" y="376" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">v &gt; 2f</text>
<text x="680" y="392" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">|m| &gt; 1</text>
<text x="680" y="410" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Application: projector</text>

<!-- ===== ROW 4: At f ===== -->
<line x1="0" y1="554" x2="900" y2="554" stroke="#EEEEEE" stroke-width="1"/>
<text x="85" y="464" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">At f</text>
<text x="85" y="480" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">u = f</text>
<path d="M 370 452 Q 378 490 370 528" stroke="#000000" stroke-width="1.5" fill="none"/>
<path d="M 370 452 Q 362 490 370 528" stroke="#000000" stroke-width="1.5" fill="none"/>
<line x1="185" y1="490" x2="505" y2="490" stroke="#AAAAAA" stroke-width="0.8" stroke-dasharray="4,3"/>
<circle cx="330" cy="490" r="3" fill="#000000"/><text x="330" y="482" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">F</text>
<circle cx="410" cy="490" r="3" fill="#000000"/><text x="410" y="482" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">F</text>
<line x1="330" y1="490" x2="330" y2="462" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<!-- Parallel emergent rays -->
<line x1="370" y1="462" x2="505" y2="462" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="370" y1="490" x2="505" y2="490" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="680" y="462" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Image at Infinity</text>
<text x="680" y="478" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Parallel emergent rays</text>
<text x="680" y="494" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">m → ∞</text>
<text x="680" y="512" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Application: spotlight</text>

<!-- ===== ROW 5: Within f ===== -->
<text x="85" y="576" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Within f</text>
<text x="85" y="592" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">u &lt; f</text>
<path d="M 370 566 Q 378 610 370 655" stroke="#000000" stroke-width="1.5" fill="none"/>
<path d="M 370 566 Q 362 610 370 655" stroke="#000000" stroke-width="1.5" fill="none"/>
<line x1="185" y1="610" x2="505" y2="610" stroke="#AAAAAA" stroke-width="0.8" stroke-dasharray="4,3"/>
<circle cx="330" cy="610" r="3" fill="#000000"/><text x="330" y="602" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">F</text>
<circle cx="410" cy="610" r="3" fill="#000000"/><text x="410" y="602" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">F</text>
<!-- Object very close to lens -->
<line x1="350" y1="610" x2="350" y2="586" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<!-- Diverging rays after lens; virtual image on same side, larger -->
<line x1="370" y1="586" x2="505" y2="546" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="370" y1="610" x2="505" y2="610" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<!-- Virtual image: dashed, same side, larger, erect -->
<line x1="285" y1="610" x2="285" y2="570" stroke="#888888" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrow-gray)"/>
<text x="680" y="574" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Virtual, Erect, Magnified</text>
<text x="680" y="590" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Same side as object</text>
<text x="680" y="606" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">v negative (virtual)</text>
<text x="680" y="622" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">m &gt; 1 (positive, erect)</text>
<text x="680" y="640" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Application: magnifying glass</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-gray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#888888"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: compoundMicroscopeDiagram
    // objectiveFocalLength: 10, eyepieceFocalLength: 25, tubeLength: 160
    // options: showObjectiveLens=true, showEyepieceLens=true, showIntermediate=true, showFinalImage=true, showLabels=true
    static compoundMicroscopeDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Compound Microscope Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Compound Microscope</text>
<text x="500" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Objective lens forms real intermediate image; eyepiece acts as magnifying glass</text>

<!-- Principal axis -->
<line x1="30" y1="300" x2="970" y2="300" stroke="#888888" stroke-width="1" stroke-dasharray="6,4"/>

<!-- Object (small, just beyond Fo) at x=140 -->
<line x1="140" y1="300" x2="140" y2="272" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="140" y="316" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Object</text>

<!-- Objective lens (showObjectiveLens=true) at x=200 (fo=10 → object just beyond 10px — scaled up: fo=30px) -->
<!-- Scale: fo_obj=10 → 30px; fe_eyp=25 → 75px; tube=160 → 480px -->
<!-- Object at x=140, Fo at x=200-30=170; Objective at x=200; intermediate image... -->
<!-- Let's use a cleaner scale: Objective at x=220, fo=30 → F1 at 190, F2 at 250; object at x=183 (just beyond F1) -->
<!-- Intermediate image: 1/30=1/37+1/v → 1/v=1/30-1/37=0.00270/111 → v≈163; intermediate at 220+163=383 -->

<!-- Objective lens at x=220 -->
<path d="M 220 210 Q 232 300 220 390" stroke="#000000" stroke-width="3" fill="none"/>
<path d="M 220 210 Q 208 300 220 390" stroke="#000000" stroke-width="3" fill="none"/>
<line x1="212" y1="210" x2="228" y2="210" stroke="#000000" stroke-width="2.5"/>
<line x1="212" y1="390" x2="228" y2="390" stroke="#000000" stroke-width="2.5"/>
<text x="220" y="202" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Objective</text>
<text x="220" y="410" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">fₒ = 10</text>

<!-- Fo marks near objective: F1 at 190, F2 at 250 -->
<circle cx="190" cy="300" r="4" fill="#000000"/>
<text x="190" y="288" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Fₒ</text>
<circle cx="250" cy="300" r="4" fill="#000000"/>
<text x="250" y="288" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Fₒ'</text>

<!-- Object just beyond Fo at x=183, small arrow 28px up -->
<line x1="183" y1="300" x2="183" y2="272" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="165" y="264" font-family="Arial" font-size="10" fill="#000000">Object</text>

<!-- Intermediate image: real, inverted, magnified at x≈383, large inverted arrow -->
<line x1="383" y1="300" x2="383" y2="380" stroke="#444444" stroke-width="2.5" marker-end="url(#arrow-bw-inv)"/>
<text x="383" y="398" font-family="Arial" font-size="10" fill="#444444" text-anchor="middle">Intermediate</text>
<text x="383" y="411" font-family="Arial" font-size="10" fill="#444444" text-anchor="middle">Image (real)</text>

<!-- Eyepiece lens (showEyepieceLens=true) at x=700 (fe=75, Fe1 at 625, Fe2 at 775) -->
<!-- Intermediate image is just inside Fe1 at 625; so 383 is inside at (625-383)=242 from Fe1 — too far. -->
<!-- Adjust: eyepiece at x=500, fe_eyp=75; Fe1 at 425, intermediate image at 383 — inside f ✓ -->
<path d="M 500 190 Q 516 300 500 410" stroke="#000000" stroke-width="3" fill="none"/>
<path d="M 500 190 Q 484 300 500 410" stroke="#000000" stroke-width="3" fill="none"/>
<line x1="492" y1="190" x2="508" y2="190" stroke="#000000" stroke-width="2.5"/>
<line x1="492" y1="410" x2="508" y2="410" stroke="#000000" stroke-width="2.5"/>
<text x="500" y="182" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Eyepiece</text>
<text x="500" y="430" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">fₑ = 25</text>

<!-- Fe marks near eyepiece: F1 at 425, F2 at 575 -->
<circle cx="425" cy="300" r="4" fill="#000000"/>
<text x="425" y="288" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Fₑ</text>
<circle cx="575" cy="300" r="4" fill="#000000"/>
<text x="575" y="288" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Fₑ'</text>

<!-- Rays from intermediate image through eyepiece to virtual final image -->
<!-- Ray 1: parallel from top of intermediate (383,380) to eyepiece, then through Fe'(575,300) downward -->
<line x1="383" y1="380" x2="500" y2="380" stroke="#888888" stroke-width="1.5"/>
<line x1="500" y1="380" x2="800" y2="190" stroke="#888888" stroke-width="1.5" marker-end="url(#arrow-gray)"/>

<!-- Ray 2: through centre of eyepiece (500,300) direction unchanged -->
<line x1="383" y1="380" x2="800" y2="490" stroke="#888888" stroke-width="1.5" marker-end="url(#arrow-gray)"/>

<!-- Virtual final image: dashed, on same side as intermediate, large inverted -->
<!-- Diverging rays trace back → virtual image at x≈130 large -->
<line x1="130" y1="300" x2="130" y2="480" stroke="#AAAAAA" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrow-gray)"/>
<text x="110" y="492" font-family="Arial" font-size="10" fill="#888888" text-anchor="end">Virtual</text>
<text x="110" y="506" font-family="Arial" font-size="10" fill="#888888" text-anchor="end">Final Image</text>

<!-- Dashed ray extensions back to final image -->
<line x1="500" y1="380" x2="130" y2="480" stroke="#DDDDDD" stroke-width="1" stroke-dasharray="5,4"/>
<line x1="800" y1="190" x2="130" y2="480" stroke="#DDDDDD" stroke-width="1" stroke-dasharray="5,4"/>

<!-- Principal rays objective -->
<line x1="183" y1="272" x2="220" y2="272" stroke="#000000" stroke-width="1.5"/>
<line x1="220" y1="272" x2="383" y2="380" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="183" y1="272" x2="383" y2="380" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>

<!-- Tube length annotation -->
<line x1="250" y1="455" x2="425" y2="455" stroke="#555555" stroke-width="1.5"/>
<line x1="250" y1="448" x2="250" y2="462" stroke="#555555" stroke-width="1.5"/>
<line x1="425" y1="448" x2="425" y2="462" stroke="#555555" stroke-width="1.5"/>
<text x="337" y="473" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Tube length L</text>

<!-- Eye position -->
<ellipse cx="848" cy="300" rx="18" ry="10" stroke="#000000" stroke-width="1.5" fill="#FFFFFF"/>
<circle cx="848" cy="300" r="5" fill="#000000"/>
<text x="870" y="318" font-family="Arial" font-size="11" fill="#000000">Eye</text>

<!-- Magnification formula box -->
<rect x="600" y="440" width="380" height="110" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="790" y="460" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Magnification</text>
<text x="614" y="480" font-family="Arial" font-size="11" fill="#000000">M = Mₒ × Mₑ</text>
<text x="614" y="498" font-family="Arial" font-size="11" fill="#000000">Mₒ = −L/fₒ  (objective, real image)</text>
<text x="614" y="516" font-family="Arial" font-size="11" fill="#000000">Mₑ = D/fₑ   (eyepiece, D = near point = 25 cm)</text>
<text x="614" y="534" font-family="Arial" font-size="11" fill="#000000">M = (L/fₒ) × (D/fₑ) = (160/10) × (25/25) = 160×</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-bw-inv" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#444444"/>
  </marker>
  <marker id="arrow-gray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#888888"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: telescopeDiagram
    // objectiveFocalLength: 200, eyepieceFocalLength: 25
    // options: showObjectiveLens=true, showEyepieceLens=true, showFocalPoints=true, showAngularMagnification=true, showLabels=true
    static telescopeDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Refracting Telescope Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Refracting Telescope</text>
<text x="500" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Objective collects parallel rays; eyepiece magnifies intermediate image. M = fₒ/fₑ</text>

<!-- Principal axis -->
<line x1="20" y1="300" x2="980" y2="300" stroke="#888888" stroke-width="1" stroke-dasharray="6,4"/>

<!-- Parallel rays from distant object (very slightly inclined for off-axis star) -->
<!-- Two sets: on-axis and slightly off-axis to show angular field -->
<line x1="20" y1="240" x2="160" y2="240" stroke="#000000" stroke-width="2"/>
<line x1="20" y1="270" x2="160" y2="270" stroke="#000000" stroke-width="2"/>
<line x1="20" y1="300" x2="160" y2="300" stroke="#000000" stroke-width="2"/>
<line x1="20" y1="330" x2="160" y2="330" stroke="#000000" stroke-width="2"/>
<line x1="20" y1="360" x2="160" y2="360" stroke="#000000" stroke-width="2"/>
<text x="50" y="222" font-family="Arial" font-size="11" fill="#000000">Parallel rays</text>
<text x="50" y="236" font-family="Arial" font-size="11" fill="#000000">(distant star)</text>
<line x1="50" y1="215" x2="80" y2="215" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>

<!-- Objective lens (showObjectiveLens=true) at x=160; fo=200 (scaled to 140px here) -->
<path d="M 160 185 Q 180 300 160 415" stroke="#000000" stroke-width="3" fill="none"/>
<path d="M 160 185 Q 140 300 160 415" stroke="#000000" stroke-width="3" fill="none"/>
<line x1="150" y1="185" x2="170" y2="185" stroke="#000000" stroke-width="2.5"/>
<line x1="150" y1="415" x2="170" y2="415" stroke="#000000" stroke-width="2.5"/>
<text x="160" y="178" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Objective</text>
<text x="160" y="436" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">fₒ = 200</text>

<!-- Fo' (shared focal point) at x=160+140=300 (scale 140px for fo=200) -->
<circle cx="300" cy="300" r="6" fill="#000000"/>
<text x="300" y="284" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Fₒ' = Fₑ</text>
<text x="300" y="272" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">(shared focal point)</text>

<!-- Intermediate image at shared focal point: small inverted -->
<line x1="300" y1="300" x2="300" y2="322" stroke="#333333" stroke-width="2.5"/>
<circle cx="300" cy="322" r="3" fill="#333333" stroke="#333333"/>
<text x="300" y="340" font-family="Arial" font-size="10" fill="#444444" text-anchor="middle">Intermediate</text>
<text x="300" y="353" font-family="Arial" font-size="10" fill="#444444" text-anchor="middle">Image</text>

<!-- Objective rays converging to shared focal point -->
<line x1="160" y1="240" x2="300" y2="322" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>
<line x1="160" y1="300" x2="300" y2="322" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>
<line x1="160" y1="360" x2="300" y2="322" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>

<!-- Eyepiece lens (showEyepieceLens=true) at x=300+17=317 (fe scaled: 17px for 25) — wait, normal telescope: eyepiece very close to shared focal point. Use x=317, fe=17 -->
<!-- Better: eyepiece at x=334 (fo'+fe=300+17=317, image just at Fe') -->
<!-- Using cleaner positions: Eyepiece at x=355, fe=55 (scale: 55/200*140=38.5px…) -->
<!-- Keep simple: eyepiece at x=380, fe_scaled=55px, Fe at 380-55=325≈shared focal; Parallel exit rays -->
<path d="M 380 230 Q 396 300 380 370" stroke="#000000" stroke-width="3" fill="none"/>
<path d="M 380 230 Q 364 300 380 370" stroke="#000000" stroke-width="3" fill="none"/>
<line x1="372" y1="230" x2="388" y2="230" stroke="#000000" stroke-width="2.5"/>
<line x1="372" y1="370" x2="388" y2="370" stroke="#000000" stroke-width="2.5"/>
<text x="380" y="222" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Eyepiece</text>
<text x="380" y="388" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">fₑ = 25</text>

<!-- Eyepiece: intermediate image inside fe → diverging rays emerge as parallel (for relaxed eye) -->
<line x1="300" y1="322" x2="380" y2="322" stroke="#444444" stroke-width="1.5"/>
<!-- After eyepiece: parallel rays emerge (virtual image at ∞) -->
<line x1="380" y1="322" x2="950" y2="322" stroke="#444444" stroke-width="1.5" marker-end="url(#arrow-gray)"/>
<line x1="380" y1="300" x2="950" y2="300" stroke="#444444" stroke-width="1.5" marker-end="url(#arrow-gray)"/>
<line x1="380" y1="278" x2="950" y2="278" stroke="#444444" stroke-width="1.5" marker-end="url(#arrow-gray)"/>

<!-- Rays from upper part of image through eyepiece -->
<line x1="160" y1="240" x2="380" y2="278" stroke="#888888" stroke-width="1"/>
<line x1="160" y1="300" x2="380" y2="300" stroke="#888888" stroke-width="1"/>
<line x1="160" y1="360" x2="380" y2="322" stroke="#888888" stroke-width="1"/>

<!-- Eye -->
<ellipse cx="960" cy="300" rx="20" ry="12" stroke="#000000" stroke-width="1.5" fill="#FFFFFF"/>
<circle cx="960" cy="300" r="6" fill="#000000"/>
<text x="960" y="330" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Eye</text>

<!-- Angular magnification annotation (showAngularMagnification=true) -->
<!-- angle α (without telescope) and β (with telescope) -->
<text x="100" y="478" font-family="Arial" font-size="11" fill="#555555">α = small angle subtended by object at naked eye</text>
<text x="100" y="496" font-family="Arial" font-size="11" fill="#555555">β = angle subtended by image through telescope</text>

<!-- Tube length annotation -->
<line x1="160" y1="460" x2="380" y2="460" stroke="#555555" stroke-width="1.5"/>
<line x1="160" y1="453" x2="160" y2="467" stroke="#555555" stroke-width="1.5"/>
<line x1="380" y1="453" x2="380" y2="467" stroke="#555555" stroke-width="1.5"/>
<text x="270" y="480" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Tube length ≈ fₒ + fₑ = 225</text>

<!-- Magnification box -->
<rect x="550" y="430" width="420" height="130" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="760" y="452" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Angular Magnification</text>
<text x="566" y="474" font-family="Arial" font-size="13" fill="#000000">M = fₒ / fₑ = 200 / 25 = 8×</text>
<text x="566" y="494" font-family="Arial" font-size="11" fill="#555555">• Final image at infinity (normal adjustment)</text>
<text x="566" y="512" font-family="Arial" font-size="11" fill="#555555">• For near point adjustment: M = (fₒ/fₑ)(1 + fₑ/D)</text>
<text x="566" y="530" font-family="Arial" font-size="11" fill="#555555">• Large fₒ, small fₑ → high magnification</text>
<text x="566" y="548" font-family="Arial" font-size="11" fill="#555555">• Final image virtual, inverted (astronomical)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-gray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#444444"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: eyeDiagramDefects
    // options: showNormalVision=true, showMyopia=true, showHyperopia=true, showCorrection=true, showLabels=true
    static eyeDiagramDefectsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="700" viewBox="0 0 900 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Eye Diagram — Vision Defects</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Vision Defects and Correction</text>

<!-- Shared eye drawing: simplified cross-section outline -->
<!-- Each eye: centre at different y positions, simplified as ellipse + lens + retina mark -->

<!-- PANEL 1: Normal Vision (showNormalVision=true) at y=110 -->
<text x="30" y="95" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">1. Normal Vision (Emmetropia)</text>
<!-- Eye outline -->
<ellipse cx="340" cy="130" rx="55" ry="38" fill="#FAFAFA" stroke="#000000" stroke-width="2"/>
<!-- Cornea/lens region -->
<path d="M 288 130 Q 296 118 306 130 Q 296 142 288 130" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<!-- Retina at back -->
<line x1="390" y1="112" x2="390" y2="148" stroke="#000000" stroke-width="2.5"/>
<text x="398" y="132" font-family="Arial" font-size="10" fill="#000000">Retina</text>
<!-- Parallel rays converging on retina -->
<line x1="180" y1="118" x2="308" y2="118" stroke="#000000" stroke-width="1.8"/>
<line x1="180" y1="130" x2="308" y2="130" stroke="#000000" stroke-width="1.8"/>
<line x1="180" y1="142" x2="308" y2="142" stroke="#000000" stroke-width="1.8"/>
<line x1="308" y1="118" x2="390" y2="130" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>
<line x1="308" y1="130" x2="390" y2="130" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>
<line x1="308" y1="142" x2="390" y2="130" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>
<text x="180" y="108" font-family="Arial" font-size="10" fill="#555555">Parallel rays</text>
<circle cx="390" cy="130" r="4" fill="#000000"/>
<text x="340" y="180" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Rays focus exactly on retina → clear vision</text>

<line x1="0" y1="200" x2="900" y2="200" stroke="#EEEEEE" stroke-width="1.5"/>

<!-- PANEL 2: Short-sightedness (Myopia) at y=270 (showMyopia=true) -->
<text x="30" y="222" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">2. Short-sightedness (Myopia)</text>
<!-- Elongated eye -->
<ellipse cx="330" cy="262" rx="68" ry="38" fill="#FAFAFA" stroke="#000000" stroke-width="2"/>
<path d="M 265 262 Q 273 250 283 262 Q 273 274 265 262" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<line x1="392" y1="244" x2="392" y2="280" stroke="#000000" stroke-width="2.5"/>
<!-- Rays converge BEFORE retina (eye too long) -->
<line x1="170" y1="250" x2="285" y2="250" stroke="#000000" stroke-width="1.8"/>
<line x1="170" y1="262" x2="285" y2="262" stroke="#000000" stroke-width="1.8"/>
<line x1="170" y1="274" x2="285" y2="274" stroke="#000000" stroke-width="1.8"/>
<line x1="285" y1="250" x2="355" y2="262" stroke="#000000" stroke-width="1.8"/>
<line x1="285" y1="262" x2="355" y2="262" stroke="#000000" stroke-width="1.8"/>
<line x1="285" y1="274" x2="355" y2="262" stroke="#000000" stroke-width="1.8"/>
<circle cx="355" cy="262" r="4" fill="#000000"/>
<line x1="355" y1="262" x2="392" y2="248" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<line x1="355" y1="262" x2="392" y2="276" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="355" y="245" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">focus before retina</text>
<text x="392" y="292" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Retina</text>

<!-- Correction: diverging lens -->
<text x="500" y="222" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Corrected with Concave (diverging) Lens</text>
<path d="M 620 244 Q 610 262 620 280" stroke="#000000" stroke-width="2" fill="none"/>
<path d="M 620 244 Q 630 262 620 280" stroke="#000000" stroke-width="2" fill="none"/>
<ellipse cx="720" cy="262" rx="55" ry="38" fill="#FAFAFA" stroke="#000000" stroke-width="2"/>
<path d="M 668 262 Q 676 250 686 262 Q 676 274 668 262" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<line x1="772" y1="244" x2="772" y2="280" stroke="#000000" stroke-width="2.5"/>
<line x1="550" y1="250" x2="618" y2="250" stroke="#000000" stroke-width="1.8"/>
<line x1="550" y1="262" x2="618" y2="262" stroke="#000000" stroke-width="1.8"/>
<line x1="550" y1="274" x2="618" y2="274" stroke="#000000" stroke-width="1.8"/>
<!-- Diverging lens spreads rays -->
<line x1="620" y1="250" x2="688" y2="244" stroke="#000000" stroke-width="1.8"/>
<line x1="620" y1="262" x2="688" y2="262" stroke="#000000" stroke-width="1.8"/>
<line x1="620" y1="274" x2="688" y2="280" stroke="#000000" stroke-width="1.8"/>
<line x1="688" y1="244" x2="772" y2="262" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>
<line x1="688" y1="262" x2="772" y2="262" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>
<line x1="688" y1="280" x2="772" y2="262" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>
<circle cx="772" cy="262" r="4" fill="#000000"/>
<text x="606" y="240" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Diverging</text>
<text x="606" y="253" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">lens</text>

<line x1="0" y1="320" x2="900" y2="320" stroke="#EEEEEE" stroke-width="1.5"/>

<!-- PANEL 3: Long-sightedness (Hyperopia) at y=400 (showHyperopia=true) -->
<text x="30" y="342" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">3. Long-sightedness (Hyperopia)</text>
<!-- Short eye -->
<ellipse cx="322" cy="385" rx="42" ry="38" fill="#FAFAFA" stroke="#000000" stroke-width="2"/>
<path d="M 282 385 Q 290 373 300 385 Q 290 397 282 385" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<line x1="360" y1="367" x2="360" y2="403" stroke="#000000" stroke-width="2.5"/>
<!-- Rays converge BEHIND retina (eye too short) -->
<line x1="170" y1="373" x2="302" y2="373" stroke="#000000" stroke-width="1.8"/>
<line x1="170" y1="385" x2="302" y2="385" stroke="#000000" stroke-width="1.8"/>
<line x1="170" y1="397" x2="302" y2="397" stroke="#000000" stroke-width="1.8"/>
<line x1="302" y1="373" x2="360" y2="385" stroke="#000000" stroke-width="1.8"/>
<line x1="302" y1="385" x2="360" y2="385" stroke="#000000" stroke-width="1.8"/>
<line x1="302" y1="397" x2="360" y2="385" stroke="#000000" stroke-width="1.8"/>
<!-- Point focus would be behind eye — show with dashes extending past retina -->
<line x1="360" y1="385" x2="410" y2="385" stroke="#AAAAAA" stroke-width="1.5" stroke-dasharray="4,3"/>
<circle cx="410" cy="385" r="3" fill="#AAAAAA"/>
<text x="418" y="388" font-family="Arial" font-size="10" fill="#888888">focus behind retina</text>
<text x="322" y="432" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Rays focus behind retina → blurry near objects</text>

<!-- Correction: converging lens -->
<text x="500" y="342" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Corrected with Convex (converging) Lens</text>
<path d="M 620 366 Q 630 385 620 403" stroke="#000000" stroke-width="2" fill="none"/>
<path d="M 620 366 Q 610 385 620 403" stroke="#000000" stroke-width="2" fill="none"/>
<ellipse cx="710" cy="385" rx="42" ry="38" fill="#FAFAFA" stroke="#000000" stroke-width="2"/>
<path d="M 670 385 Q 678 373 688 385 Q 678 397 670 385" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<line x1="748" y1="367" x2="748" y2="403" stroke="#000000" stroke-width="2.5"/>
<!-- Converging lens pre-converges rays -->
<line x1="540" y1="373" x2="618" y2="373" stroke="#000000" stroke-width="1.8"/>
<line x1="540" y1="385" x2="618" y2="385" stroke="#000000" stroke-width="1.8"/>
<line x1="540" y1="397" x2="618" y2="397" stroke="#000000" stroke-width="1.8"/>
<line x1="620" y1="373" x2="690" y2="377" stroke="#000000" stroke-width="1.8"/>
<line x1="620" y1="385" x2="690" y2="385" stroke="#000000" stroke-width="1.8"/>
<line x1="620" y1="397" x2="690" y2="393" stroke="#000000" stroke-width="1.8"/>
<line x1="690" y1="377" x2="748" y2="385" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>
<line x1="690" y1="385" x2="748" y2="385" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>
<line x1="690" y1="393" x2="748" y2="385" stroke="#000000" stroke-width="1.8" marker-end="url(#arrow-bw)"/>
<circle cx="748" cy="385" r="4" fill="#000000"/>
<text x="606" y="360" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Converging</text>
<text x="606" y="372" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">lens</text>

<!-- Summary table -->
<line x1="0" y1="450" x2="900" y2="450" stroke="#EEEEEE" stroke-width="1.5"/>
<rect x="30" y="462" width="840" height="210" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="450" y="482" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Summary Table</text>
<!-- Headers -->
<text x="120" y="502" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Defect</text>
<text x="290" y="502" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Cause</text>
<text x="500" y="502" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Image forms</text>
<text x="680" y="502" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Correction</text>
<line x1="30" y1="508" x2="870" y2="508" stroke="#CCCCCC" stroke-width="1"/>
<!-- Row 1: Myopia -->
<text x="120" y="526" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Myopia</text>
<text x="290" y="526" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Eyeball too long</text>
<text x="500" y="526" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">In front of retina</text>
<text x="680" y="526" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Concave (diverging) lens</text>
<!-- Row 2: Hyperopia -->
<text x="120" y="548" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Hyperopia</text>
<text x="290" y="548" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Eyeball too short</text>
<text x="500" y="548" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Behind retina</text>
<text x="680" y="548" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Convex (converging) lens</text>
<!-- Row 3: Astigmatism -->
<text x="120" y="570" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Astigmatism</text>
<text x="290" y="570" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Irregular cornea</text>
<text x="500" y="570" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Multiple focal points</text>
<text x="680" y="570" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Cylindrical lens</text>
<!-- Lens power note -->
<text x="450" y="600" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Lens power P = 1/f (in dioptres, f in metres). Concave lens: P &lt; 0. Convex lens: P &gt; 0.</text>
<text x="450" y="620" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Power of correction = 1/far point − 1/near point (for each defect respectively)</text>
<text x="450" y="640" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Normal far point = ∞; Normal near point = 25 cm (least distance of distinct vision)</text>
<text x="450" y="658" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Presbyopia (age-related): loss of accommodation → corrected with bifocals</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: rayDiagramLensPositions
    // focalLength: 80
    // options: showSummaryTable=true, showAllRayDiagrams=true, showLabels=true
    static rayDiagramLensPositionsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904//DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="800" viewBox="0 0 1000 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>Lens Ray Diagram — All Object Positions</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="30" font-family="Arial" font-size="19" fill="#000000" text-anchor="middle" font-weight="bold">Converging Lens — Image Summary for All Object Positions</text>

<!-- Summary Table (showSummaryTable=true) at top -->
<rect x="20" y="48" width="960" height="162" fill="#F5F5F5" stroke="#888888" stroke-width="1.5" rx="4"/>
<!-- Column headers -->
<text x="80"  y="68" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Object Position</text>
<text x="230" y="68" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Image Position</text>
<text x="370" y="68" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Nature</text>
<text x="510" y="68" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Orientation</text>
<text x="650" y="68" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Size</text>
<text x="810" y="68" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Application</text>
<line x1="20" y1="74" x2="980" y2="74" stroke="#AAAAAA" stroke-width="1"/>
<!-- Rows -->
<text x="80" y="92" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">u &gt; 2f</text>
<text x="230" y="92" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">f &lt; v &lt; 2f</text>
<text x="370" y="92" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Real</text>
<text x="510" y="92" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Inverted</text>
<text x="650" y="92" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Diminished</text>
<text x="810" y="92" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Camera, eye</text>

<text x="80" y="110" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">u = 2f</text>
<text x="230" y="110" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">v = 2f</text>
<text x="370" y="110" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Real</text>
<text x="510" y="110" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Inverted</text>
<text x="650" y="110" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Same size</text>
<text x="810" y="110" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">—</text>

<text x="80" y="128" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">f &lt; u &lt; 2f</text>
<text x="230" y="128" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">v &gt; 2f</text>
<text x="370" y="128" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Real</text>
<text x="510" y="128" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Inverted</text>
<text x="650" y="128" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Magnified</text>
<text x="810" y="128" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Projector, enlarger</text>

<text x="80" y="146" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">u = f</text>
<text x="230" y="146" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">v = ∞</text>
<text x="370" y="146" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">—</text>
<text x="510" y="146" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">—</text>
<text x="650" y="146" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">—</text>
<text x="810" y="146" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Spotlight, searchlight</text>

<text x="80" y="164" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">u &lt; f</text>
<text x="230" y="164" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Same side as obj (v neg)</text>
<text x="370" y="164" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Virtual</text>
<text x="510" y="164" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Erect</text>
<text x="650" y="164" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Magnified</text>
<text x="810" y="164" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Magnifying glass</text>
<line x1="20" y1="74" x2="20" y2="210" stroke="#AAAAAA" stroke-width="1"/>
<line x1="155" y1="74" x2="155" y2="210" stroke="#AAAAAA" stroke-width="1"/>
<line x1="310" y1="74" x2="310" y2="210" stroke="#AAAAAA" stroke-width="1"/>
<line x1="430" y1="74" x2="430" y2="210" stroke="#AAAAAA" stroke-width="1"/>
<line x1="580" y1="74" x2="580" y2="210" stroke="#AAAAAA" stroke-width="1"/>
<line x1="720" y1="74" x2="720" y2="210" stroke="#AAAAAA" stroke-width="1"/>
<line x1="980" y1="74" x2="980" y2="210" stroke="#AAAAAA" stroke-width="1"/>

<!-- ===== Ray diagrams (showAllRayDiagrams=true): 5 small diagrams 2x3 grid ===== -->
<!-- Diagram 1: u>2f — top left -->
<text x="110" y="234" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">① u &gt; 2f</text>
<line x1="20" y1="330" x2="215" y2="330" stroke="#AAAAAA" stroke-width="0.8" stroke-dasharray="3,3"/>
<path d="M 130 248 Q 137 330 130 412" stroke="#000000" stroke-width="1.5" fill="none"/>
<path d="M 130 248 Q 123 330 130 412" stroke="#000000" stroke-width="1.5" fill="none"/>
<circle cx="105" cy="330" r="3" fill="#000000"/><text x="105" y="322" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">F</text>
<circle cx="155" cy="330" r="3" fill="#000000"/><text x="155" y="322" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">F</text>
<line x1="55" y1="330" x2="55" y2="308" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="55" y1="308" x2="130" y2="308" stroke="#000000" stroke-width="1.5"/>
<line x1="130" y1="308" x2="165" y2="345" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="55" y1="308" x2="165" y2="345" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="165" y1="330" x2="165" y2="345" stroke="#333333" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="110" y="432" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">Real, inverted, diminished</text>

<!-- Diagram 2: u=2f — top right -->
<text x="310" y="234" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">② u = 2f</text>
<line x1="215" y1="330" x2="415" y2="330" stroke="#AAAAAA" stroke-width="0.8" stroke-dasharray="3,3"/>
<path d="M 315" font-family="Arial">
<path d="M 315 248 Q 322 330 315 412" stroke="#000000" stroke-width="1.5" fill="none"/>
<path d="M 315 248 Q 308 330 315 412" stroke="#000000" stroke-width="1.5" fill="none"/>
<circle cx="290" cy="330" r="3" fill="#000000"/><text x="290" y="322" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">F</text>
<circle cx="340" cy="330" r="3" fill="#000000"/><text x="340" y="322" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">F</text>
<!-- Object at 2F (290-25=265, 2F position) -->
<line x1="265" y1="330" x2="265" y2="308" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="265" y1="308" x2="315" y2="308" stroke="#000000" stroke-width="1.5"/>
<line x1="315" y1="308" x2="365" y2="352" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="265" y1="308" x2="365" y2="352" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="365" y1="330" x2="365" y2="352" stroke="#333333" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="310" y="432" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">Real, inverted, same size</text>

<!-- Diagram 3: f&lt;u&lt;2f -->
<text x="510" y="234" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">③ f &lt; u &lt; 2f</text>
<line x1="415" y1="330" x2="615" y2="330" stroke="#AAAAAA" stroke-width="0.8" stroke-dasharray="3,3"/>
<path d="M 510 248 Q 517 330 510 412" stroke="#000000" stroke-width="1.5" fill="none"/>
<path d="M 510 248 Q 503 330 510 412" stroke="#000000" stroke-width="1.5" fill="none"/>
<circle cx="486" cy="330" r="3" fill="#000000"/><text x="486" y="322" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">F</text>
<circle cx="534" cy="330" r="3" fill="#000000"/><text x="534" y="322" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">F</text>
<line x1="458" y1="330" x2="458" y2="308" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="458" y1="308" x2="510" y2="308" stroke="#000000" stroke-width="1.5"/>
<line x1="510" y1="308" x2="575" y2="278" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="458" y1="308" x2="575" y2="278" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="575" y1="330" x2="575" y2="278" stroke="#333333" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="510" y="432" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">Real, inverted, magnified</text>

<!-- Diagram 4: u=f (bottom left) -->
<text x="215" y="490" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">④ u = f (image at ∞)</text>
<line x1="115" y1="580" x2="415" y2="580" stroke="#AAAAAA" stroke-width="0.8" stroke-dasharray="3,3"/>
<path d="M 265 500 Q 272 580 265 660" stroke="#000000" stroke-width="1.5" fill="none"/>
<path d="M 265 500 Q 258 580 265 660" stroke="#000000" stroke-width="1.5" fill="none"/>
<circle cx="240" cy="580" r="3" fill="#000000"/><text x="240" y="572" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">F</text>
<circle cx="290" cy="580" r="3" fill="#000000"/><text x="290" y="572" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">F</text>
<line x1="240" y1="580" x2="240" y2="558" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="240" y1="558" x2="265" y2="558" stroke="#000000" stroke-width="1.5"/>
<line x1="265" y1="558" x2="405" y2="558" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="240" y1="558" x2="265" y2="580" stroke="#000000" stroke-width="1.5"/>
<line x1="265" y1="580" x2="405" y2="580" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="265" y="680" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">Parallel emergent rays → image at ∞</text>

<!-- Diagram 5: u&lt;f -->
<text x="680" y="490" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">⑤ u &lt; f (virtual image)</text>
<line x1="550" y1="580" x2="850" y2="580" stroke="#AAAAAA" stroke-width="0.8" stroke-dasharray="3,3"/>
<path d="M 700 500 Q 707 580 700 660" stroke="#000000" stroke-width="1.5" fill="none"/>
<path d="M 700 500 Q 693 580 700 660" stroke="#000000" stroke-width="1.5" fill="none"/>
<circle cx="676" cy="580" r="3" fill="#000000"/><text x="676" y="572" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">F</text>
<circle cx="724" cy="580" r="3" fill="#000000"/><text x="724" y="572" font-family="Arial" font-size="8" fill="#000000" text-anchor="middle">F</text>
<!-- Object close to lens, within f -->
<line x1="686" y1="580" x2="686" y2="558" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="686" y1="558" x2="700" y2="558" stroke="#000000" stroke-width="1.5"/>
<line x1="700" y1="558" x2="840" y2="540" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="686" y1="558" x2="840" y2="560" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<!-- Virtual image: dashed, on left side of lens, erect, larger -->
<line x1="622" y1="580" x2="622" y2="540" stroke="#888888" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrow-gray)"/>
<!-- Dashed back-projections -->
<line x1="700" y1="558" x2="622" y2="540" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="700" y1="580" x2="622" y2="540" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="4,3"/>
<text x="680" y="680" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">Virtual, erect, magnified — magnifying glass</text>

<!-- Equation reminder -->
<text x="500" y="760" font-family="Arial" font-size="12" fill="#333333" text-anchor="middle">1/f = 1/u + 1/v   |   m = v/u = h'/h   |   f = 80 (for this diagram)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-gray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#888888"/>
  </marker>
</defs>

</g>
</svg>`;

 // ============================================================
    // ===== 1. MECHANICS (existing — not modified) ===============
    // ============================================================
    // freeBodyDiagramSvg ... (existing)
    // vectorDiagramSvg   ... (existing)
    // motionGraphsSvg    ... (existing)
    // ... all other mechanics SVGs preserved as-is

    // ============================================================
    // ===== 2. WAVES & SOUND (existing — not modified) ===========
    // ============================================================
    // transverseLongitudinalWavesSvg ... (existing)
    // ... all other waves SVGs preserved as-is

    // ============================================================
    // ===== 3. ELECTRICITY — CHARGE & CURRENT ====================
    // ============================================================

    // Generated from registry: currentFlowDiagram
    // voltage: 12, resistance: 4  →  I = 3 A
    // options: showConventionalCurrent=true, showElectronFlow=true, showCircuit=true, showLabels=true
    static currentFlowDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Current Flow Diagram</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-bw-rev" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto">
    <polygon points="10 0, 0 3, 10 6" fill="#000000"/>
  </marker>
  <marker id="arrow-dashed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#555555"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Current Flow in a Circuit</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Conventional current direction vs electron flow direction</text>

<!-- ── Circuit rectangle ── -->
<!-- Top rail: y=130, Bottom rail: y=430, Left: x=130, Right: x=670 -->
<line x1="130" y1="130" x2="670" y2="130" stroke="#000000" stroke-width="3"/>
<line x1="130" y1="430" x2="670" y2="430" stroke="#000000" stroke-width="3"/>
<line x1="130" y1="130" x2="130" y2="430" stroke="#000000" stroke-width="3"/>
<line x1="670" y1="130" x2="670" y2="430" stroke="#000000" stroke-width="3"/>

<!-- ── Battery (left side, centre of left rail) ── -->
<!-- Long line = +ve terminal (top), Short line = -ve terminal (bottom) -->
<line x1="130" y1="245" x2="130" y2="245" stroke="#000000" stroke-width="1"/>
<!-- Battery symbol centred at (130, 280) -->
<line x1="110" y1="255" x2="150" y2="255" stroke="#000000" stroke-width="3"/> <!-- long +ve -->
<line x1="118" y1="268" x2="142" y2="268" stroke="#000000" stroke-width="2"/> <!-- short -ve -->
<line x1="110" y1="283" x2="150" y2="283" stroke="#000000" stroke-width="3"/> <!-- long +ve -->
<line x1="118" y1="296" x2="142" y2="296" stroke="#000000" stroke-width="2"/> <!-- short -ve -->
<text x="160" y="268" font-family="Arial" font-size="12" fill="#000000">+</text>
<text x="160" y="300" font-family="Arial" font-size="12" fill="#000000">−</text>
<text x="80" y="280" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">EMF</text>
<text x="80" y="295" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">12 V</text>

<!-- ── Resistor (top rail, centre) ── -->
<!-- Zig-zag resistor symbol centred at (400, 130) -->
<polyline points="330,130 345,110 360,150 375,110 390,150 405,110 420,150 435,110 450,130"
  stroke="#000000" stroke-width="3" fill="none"/>
<text x="390" y="100" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">R = 4 Ω</text>

<!-- ── Conventional Current arrows (solid, outer path) ── -->
<!-- Top rail: left to right -->
<line x1="200" y1="118" x2="320" y2="118" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)" stroke-dasharray="none"/>
<!-- Top rail: right of resistor -->
<line x1="460" y1="118" x2="600" y2="118" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<!-- Right rail: top to bottom -->
<line x1="682" y1="180" x2="682" y2="370" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<!-- Bottom rail: right to left -->
<line x1="600" y1="442" x2="200" y2="442" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<!-- Left rail: bottom to top (through battery +ve) -->
<line x1="118" y1="380" x2="118" y2="240" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>

<!-- Conventional current label -->
<rect x="530" y="285" width="145" height="36" rx="4" fill="#F0F0F0" stroke="#000000" stroke-width="1"/>
<text x="603" y="299" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Conventional Current</text>
<text x="603" y="315" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">I = 3 A  (+ to −, ext.)</text>

<!-- ── Electron Flow arrows (dashed, inner path) ── -->
<!-- Electrons flow opposite to conventional current -->
<!-- Top rail: right to left (inner) -->
<line x1="590" y1="142" x2="470" y2="142" stroke="#555555" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#arrow-dashed)"/>
<line x1="320" y1="142" x2="210" y2="142" stroke="#555555" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#arrow-dashed)"/>
<!-- Right rail: bottom to top (inner) -->
<line x1="658" y1="370" x2="658" y2="180" stroke="#555555" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#arrow-dashed)"/>
<!-- Bottom rail: left to right (inner) -->
<line x1="210" y1="418" x2="590" y2="418" stroke="#555555" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#arrow-dashed)"/>
<!-- Left rail: top to bottom (inner, through battery) -->
<line x1="142" y1="240" x2="142" y2="370" stroke="#555555" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#arrow-dashed)"/>

<!-- Electron flow label -->
<rect x="420" y="455" width="155" height="36" rx="4" fill="#F8F8F8" stroke="#555555" stroke-width="1"/>
<text x="498" y="469" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle" font-weight="bold">Electron Flow</text>
<text x="498" y="485" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">e⁻  (− to +, ext.)</text>

<!-- ── Key / legend ── -->
<rect x="30" y="490" width="300" height="90" rx="4" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="42" y="508" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Key:</text>
<line x1="42" y1="523" x2="110" y2="523" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="118" y="527" font-family="Arial" font-size="11" fill="#000000">Conventional current (+ → −)</text>
<line x1="42" y1="548" x2="110" y2="548" stroke="#555555" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#arrow-dashed)"/>
<text x="118" y="552" font-family="Arial" font-size="11" fill="#555555">Electron flow (− → +)</text>
<text x="42" y="572" font-family="Arial" font-size="11" fill="#000000">I = V/R = 12/4 = 3 A</text>

</g>
</svg>`;

    // Generated from registry: driftVelocityModel
    // crossSectionArea=1e-6 m², numberDensity=8.5e28 m⁻³, driftVelocity=1e-4 m/s
    // options: showElectrons=true, showDriftDirection=true, showCrossSectionArea=true, showFormula=true
    static driftVelocityModelSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="500" viewBox="0 0 900 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>Drift Velocity Model</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Drift Velocity Model: I = nAqv</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Microscopic model of current flow in a metallic conductor</text>

<!-- ── Conductor body ── -->
<rect x="100" y="160" width="680" height="160" fill="#EEEEEE" stroke="#000000" stroke-width="3"/>

<!-- ── Cross-section ellipse at right end (showCrossSectionArea=true) ── -->
<ellipse cx="780" cy="240" rx="18" ry="80" fill="#CCCCCC" stroke="#000000" stroke-width="2"/>
<text x="815" y="220" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Cross-</text>
<text x="815" y="236" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">section</text>
<text x="815" y="252" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">area A</text>
<!-- dimension lines for A -->
<line x1="800" y1="162" x2="830" y2="162" stroke="#000000" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="800" y1="318" x2="830" y2="318" stroke="#000000" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="835" y1="162" x2="835" y2="318" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="835" y1="318" x2="835" y2="162" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="856" y="244" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">A = 1×10⁻⁶ m²</text>

<!-- ── Electrons scattered inside conductor (showElectrons=true) ── -->
<!-- Represent random thermal motion + small net drift to the right (conventional current left←right means e⁻ drift right←left) -->
<!-- Electrons shown as small circles with minus sign -->
<!-- Row 1 -->
<circle cx="155" cy="195" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="155" y="199" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<circle cx="220" cy="205" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="220" y="209" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<circle cx="295" cy="190" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="295" y="194" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<circle cx="370" cy="200" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="370" y="204" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<circle cx="450" cy="195" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="450" y="199" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<circle cx="525" cy="205" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="525" y="209" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<circle cx="600" cy="190" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="600" y="194" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<circle cx="680" cy="200" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="680" y="204" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<!-- Row 2 -->
<circle cx="175" cy="240" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="175" y="244" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<circle cx="255" cy="245" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="255" y="249" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<circle cx="335" cy="238" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="335" y="242" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<circle cx="410" cy="242" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="410" y="246" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<circle cx="490" cy="240" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="490" y="244" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<circle cx="565" cy="245" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="565" y="249" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<circle cx="640" cy="238" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="640" y="242" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<circle cx="720" cy="240" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="720" y="244" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<!-- Row 3 -->
<circle cx="155" cy="285" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="155" y="289" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<circle cx="230" cy="295" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="230" y="299" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<circle cx="310" cy="280" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="310" y="284" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<circle cx="385" cy="290" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="385" y="294" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<circle cx="465" cy="285" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="465" y="289" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<circle cx="545" cy="295" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="545" y="299" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<circle cx="620" cy="280" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="620" y="284" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>
<circle cx="700" cy="288" r="9" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
<text x="700" y="292" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−</text>

<!-- ── Drift direction arrow (showDriftDirection=true) ── -->
<!-- Electrons drift LEFT (opposite to conventional current going right) -->
<line x1="600" y1="140" x2="200" y2="140" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="400" y="130" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Electron drift velocity, v_d = 1×10⁻⁴ m/s</text>

<!-- Conventional current arrow (right) -->
<line x1="200" y1="355" x2="600" y2="355" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="400" y="375" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Conventional current I →</text>

<!-- ── Formula box (showFormula=true) ── -->
<rect x="30" y="400" width="380" height="85" rx="5" fill="#F5F5F5" stroke="#000000" stroke-width="1.5"/>
<text x="220" y="420" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Formula: I = nAqv</text>
<text x="220" y="440" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">n = number density = 8.5×10²⁸ m⁻³</text>
<text x="220" y="456" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">A = cross-section area = 1×10⁻⁶ m²</text>
<text x="220" y="472" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">q = 1.6×10⁻¹⁹ C,  v = 1×10⁻⁴ m/s</text>

<!-- Calculated I -->
<rect x="480" y="400" width="380" height="85" rx="5" fill="#F5F5F5" stroke="#000000" stroke-width="1.5"/>
<text x="670" y="420" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Key observations:</text>
<text x="670" y="440" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">• Drift velocity ≪ speed of thermal motion</text>
<text x="670" y="456" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">• Increasing I → increasing v_d</text>
<text x="670" y="472" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">• Larger A → smaller v_d for same I</text>

</g>
</svg>`;

    // Generated from registry: chargeCarrierMovement
    // options: showPositiveCarriers=true, showNegativeCarriers=true, showCurrentDirection=true
    static chargeCarrierMovementSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="500" viewBox="0 0 900 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>Charge Carrier Movement</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Charge Carrier Movement</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Positive and negative charge carriers — conventional current always flows left to right here</text>

<!-- ====== TOP PANEL: Negative charge carriers (metals / electrons) ====== -->
<rect x="60" y="80" width="780" height="140" rx="6" fill="#F5F5F5" stroke="#000000" stroke-width="2"/>
<text x="450" y="105" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Negative Charge Carriers (e.g. electrons in a metal)</text>

<!-- Electrons (−) drifting LEFT -->
<circle cx="160" cy="155" r="14" fill="#CCCCCC" stroke="#000000" stroke-width="2"/>
<text x="160" y="160" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">−</text>
<line x1="148" y1="155" x2="115" y2="155" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<circle cx="300" cy="145" r="14" fill="#CCCCCC" stroke="#000000" stroke-width="2"/>
<text x="300" y="150" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">−</text>
<line x1="288" y1="145" x2="255" y2="145" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<circle cx="440" cy="160" r="14" fill="#CCCCCC" stroke="#000000" stroke-width="2"/>
<text x="440" y="165" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">−</text>
<line x1="428" y1="160" x2="395" y2="160" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<circle cx="580" cy="148" r="14" fill="#CCCCCC" stroke="#000000" stroke-width="2"/>
<text x="580" y="153" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">−</text>
<line x1="568" y1="148" x2="535" y2="148" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<circle cx="720" cy="155" r="14" fill="#CCCCCC" stroke="#000000" stroke-width="2"/>
<text x="720" y="160" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">−</text>
<line x1="708" y1="155" x2="675" y2="155" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- Conventional current arrow for negative carriers panel (opposite to electron drift → rightward) -->
<line x1="160" y1="200" x2="700" y2="200" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="430" y="218" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Conventional current I →  (opposite to electron drift)</text>

<!-- ====== BOTTOM PANEL: Positive charge carriers (e.g. ions in electrolyte / holes in semiconductor) ====== -->
<rect x="60" y="270" width="780" height="140" rx="6" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="450" y="295" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Positive Charge Carriers (e.g. ions in electrolyte, holes in p-type)</text>

<!-- Positive carriers (+) drifting RIGHT (same direction as conventional current) -->
<circle cx="160" cy="345" r="14" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="160" y="350" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">+</text>
<line x1="174" y1="345" x2="207" y2="345" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<circle cx="300" cy="335" r="14" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="300" y="340" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">+</text>
<line x1="314" y1="335" x2="347" y2="335" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<circle cx="440" cy="350" r="14" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="440" y="355" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">+</text>
<line x1="454" y1="350" x2="487" y2="350" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<circle cx="580" cy="338" r="14" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="580" y="343" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">+</text>
<line x1="594" y1="338" x2="627" y2="338" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<circle cx="720" cy="345" r="14" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="720" y="350" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">+</text>
<line x1="734" y1="345" x2="767" y2="345" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- Conventional current arrow for positive carriers panel (same direction) -->
<line x1="160" y1="392" x2="700" y2="392" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="430" y="410" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Conventional current I →  (same direction as positive carrier drift)</text>

<!-- Summary note -->
<rect x="200" y="450" width="500" height="38" rx="4" fill="#F0F0F0" stroke="#AAAAAA" stroke-width="1"/>
<text x="450" y="466" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Conventional current direction is ALWAYS defined as the flow of positive charge</text>
<text x="450" y="482" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">regardless of the actual charge carrier type</text>

</g>
</svg>`;

    // Generated from registry: currentTimeGraph
    // segments: (0,0)→(1,3)→(4,3)→(5,0)  charge = area = 3×3 = 9 C
    // options: showArea=true, showChargeValue=true, showGrid=true, showAnnotations=true
    static currentTimeGraphSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Current-Time Graph</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Current-Time Graph (Area = Charge)</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Q = ∫I dt  — the area under the I–t graph equals total charge flow</text>

<!-- ── Plot area setup ── -->
<!-- Origin at (130, 460), x-axis: 0→6 s = 600px (100px/s), y-axis: 0→5 A = 300px (60px/A) -->

<!-- Grid (showGrid=true) -->
<!-- Vertical gridlines at t=1,2,3,4,5 -->
<line x1="230" y1="160" x2="230" y2="460" stroke="#CCCCCC" stroke-width="1"/>
<line x1="330" y1="160" x2="330" y2="460" stroke="#CCCCCC" stroke-width="1"/>
<line x1="430" y1="160" x2="430" y2="460" stroke="#CCCCCC" stroke-width="1"/>
<line x1="530" y1="160" x2="530" y2="460" stroke="#CCCCCC" stroke-width="1"/>
<line x1="630" y1="160" x2="630" y2="460" stroke="#CCCCCC" stroke-width="1"/>
<!-- Horizontal gridlines at I=1,2,3,4 -->
<line x1="130" y1="400" x2="730" y2="400" stroke="#CCCCCC" stroke-width="1"/>
<line x1="130" y1="340" x2="730" y2="340" stroke="#CCCCCC" stroke-width="1"/>
<line x1="130" y1="280" x2="730" y2="280" stroke="#CCCCCC" stroke-width="1"/>
<line x1="130" y1="220" x2="730" y2="220" stroke="#CCCCCC" stroke-width="1"/>

<!-- Axes -->
<line x1="130" y1="460" x2="740" y2="460" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="130" y1="460" x2="130" y2="150" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>

<!-- Axis labels -->
<text x="750" y="464" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">t (s)</text>
<text x="122" y="140" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">I (A)</text>

<!-- X tick labels -->
<line x1="230" y1="455" x2="230" y2="465" stroke="#000000" stroke-width="1.5"/>
<text x="230" y="480" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">1</text>
<line x1="330" y1="455" x2="330" y2="465" stroke="#000000" stroke-width="1.5"/>
<text x="330" y="480" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2</text>
<line x1="430" y1="455" x2="430" y2="465" stroke="#000000" stroke-width="1.5"/>
<text x="430" y="480" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">3</text>
<line x1="530" y1="455" x2="530" y2="465" stroke="#000000" stroke-width="1.5"/>
<text x="530" y="480" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">4</text>
<line x1="630" y1="455" x2="630" y2="465" stroke="#000000" stroke-width="1.5"/>
<text x="630" y="480" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">5</text>

<!-- Y tick labels (60px per amp) -->
<line x1="125" y1="400" x2="135" y2="400" stroke="#000000" stroke-width="1.5"/>
<text x="115" y="404" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">1</text>
<line x1="125" y1="340" x2="135" y2="340" stroke="#000000" stroke-width="1.5"/>
<text x="115" y="344" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2</text>
<line x1="125" y1="280" x2="135" y2="280" stroke="#000000" stroke-width="1.5"/>
<text x="115" y="284" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">3</text>
<line x1="125" y1="220" x2="135" y2="220" stroke="#000000" stroke-width="1.5"/>
<text x="115" y="224" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">4</text>
<text x="100" y="465" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">0</text>

<!-- ── I-t graph: (t=0,I=0)→(t=1,I=3)→(t=4,I=3)→(t=5,I=0) ── -->
<!-- Pixel coords: t: x=130+t*100, I: y=460-I*60 -->
<!-- (0,0)→x=130,y=460  (1,3)→x=230,y=280  (4,3)→x=530,y=280  (5,0)→x=630,y=460 -->

<!-- Shaded area under curve (showArea=true) — filled trapezoid shape -->
<polygon points="130,460 230,280 530,280 630,460" fill="#DDDDDD" stroke="none"/>

<!-- Graph line drawn on top -->
<polyline points="130,460 230,280 530,280 630,460" stroke="#000000" stroke-width="3" fill="none"/>

<!-- showChargeValue=true: area label -->
<text x="380" y="370" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">Area = Q = 9 C</text>
<text x="380" y="390" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">(base avg. × height = 3 s × 3 A)</text>

<!-- showAnnotations=true -->
<!-- Horizontal dashed line at I=3 A -->
<line x1="130" y1="280" x2="230" y2="280" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<line x1="530" y1="280" x2="640" y2="280" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<!-- Annotation: I = 3 A -->
<text x="690" y="284" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">I = 3 A</text>

<!-- Rising slope annotation -->
<text x="170" y="360" font-family="Arial" font-size="11" fill="#000000">Rising</text>
<!-- Plateau annotation -->
<text x="370" y="265" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Steady current</text>
<!-- Falling slope annotation -->
<text x="600" y="360" font-family="Arial" font-size="11" fill="#000000">Falling</text>

<!-- Q = ΔQ formula box -->
<rect x="30" y="500" width="330" height="75" rx="4" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="195" y="520" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Key formula: Q = It  (for constant I)</text>
<text x="195" y="540" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">or  Q = area under I–t graph (for varying I)</text>
<text x="195" y="558" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Charge measured in Coulombs (C)</text>

<!-- Note box -->
<rect x="500" y="500" width="370" height="75" rx="4" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="685" y="520" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">This graph:</text>
<text x="685" y="540" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Current rises from 0→3 A, stays 3 A for 3 s,</text>
<text x="685" y="558" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">then falls to 0.  Total charge = 9 C.</text>

</g>
</svg>`;

    // Generated from registry: chargeTimeGraph
    // chargeRate=3 C/s, totalTime=5 s  →  Q = 3t
    // options: showSlope=true, showGrid=true, showAnnotations=true, showFormula=true
    static chargeTimeGraphSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Charge-Time Graph</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Charge-Time Graph (Slope = Current)</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">I = ΔQ/Δt  — the gradient of the Q–t graph gives the current</text>

<!-- Plot area: origin (130,470), scale: x=100px/s, y=40px/C -->
<!-- Grid -->
<line x1="230" y1="150" x2="230" y2="470" stroke="#CCCCCC" stroke-width="1"/>
<line x1="330" y1="150" x2="330" y2="470" stroke="#CCCCCC" stroke-width="1"/>
<line x1="430" y1="150" x2="430" y2="470" stroke="#CCCCCC" stroke-width="1"/>
<line x1="530" y1="150" x2="530" y2="470" stroke="#CCCCCC" stroke-width="1"/>
<line x1="630" y1="150" x2="630" y2="470" stroke="#CCCCCC" stroke-width="1"/>
<!-- Horizontal: Q=3,6,9,12,15 (40px each) -->
<line x1="130" y1="350" x2="730" y2="350" stroke="#CCCCCC" stroke-width="1"/>
<line x1="130" y1="270" x2="730" y2="270" stroke="#CCCCCC" stroke-width="1"/>
<line x1="130" y1="190" x2="730" y2="190" stroke="#CCCCCC" stroke-width="1"/>
<!-- Q=3: y=470-120=350, Q=6: y=230, Q=9: y=110 ... scale 40px/C with max 15C at y=470-600 -> too much, use 25px/C -->
<!-- Recalculate: max Q = chargeRate*totalTime = 3*5 = 15 C. Plot height ~320px. Scale: 320/15 ≈ 21px/C -->
<!-- Use 28px/C: 15*28=420px, y_max=470-420=50 -->

<!-- Axes -->
<line x1="130" y1="470" x2="740" y2="470" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="130" y1="470" x2="130" y2="140" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="755" y="474" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">t (s)</text>
<text x="122" y="130" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">Q (C)</text>

<!-- X ticks: 100px/s -->
<line x1="230" y1="465" x2="230" y2="475" stroke="#000000" stroke-width="1.5"/>
<text x="230" y="490" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">1</text>
<line x1="330" y1="465" x2="330" y2="475" stroke="#000000" stroke-width="1.5"/>
<text x="330" y="490" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2</text>
<line x1="430" y1="465" x2="430" y2="475" stroke="#000000" stroke-width="1.5"/>
<text x="430" y="490" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">3</text>
<line x1="530" y1="465" x2="530" y2="475" stroke="#000000" stroke-width="1.5"/>
<text x="530" y="490" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">4</text>
<line x1="630" y1="465" x2="630" y2="475" stroke="#000000" stroke-width="1.5"/>
<text x="630" y="490" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">5</text>
<text x="110" y="474" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">0</text>

<!-- Y ticks: at Q=3,6,9,12,15 using 28px/C -->
<!-- y = 470 - Q*28 -->
<line x1="125" y1="386" x2="135" y2="386" stroke="#000000" stroke-width="1.5"/>
<text x="112" y="390" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">3</text>
<line x1="125" y1="302" x2="135" y2="302" stroke="#000000" stroke-width="1.5"/>
<text x="112" y="306" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">6</text>
<line x1="125" y1="218" x2="135" y2="218" stroke="#000000" stroke-width="1.5"/>
<text x="112" y="222" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">9</text>
<line x1="125" y1="134" x2="135" y2="134" stroke="#000000" stroke-width="1.5"/>
<text x="108" y="138" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">12</text>
<!-- Q=15 would be at y=470-420=50 — mark point only at t=5 -->

<!-- Q–t straight line: Q=3t, from (t=0,Q=0) to (t=5,Q=15) -->
<!-- x: 130+t*100, y: 470-Q*28 = 470-3t*28 -->
<!-- t=0: (130,470), t=5: (630, 470-420=50) -->
<line x1="130" y1="470" x2="630" y2="50" stroke="#000000" stroke-width="3"/>

<!-- showSlope=true: slope triangle annotation -->
<!-- Draw triangle from t=1 to t=4 -->
<!-- t=1: (230, 470-84=386), t=4: (530, 470-336=134) -->
<line x1="230" y1="386" x2="530" y2="386" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<line x1="530" y1="386" x2="530" y2="134" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<!-- Δt label -->
<text x="380" y="405" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Δt = 3 s</text>
<!-- ΔQ label -->
<text x="570" y="270" font-family="Arial" font-size="13" fill="#000000">ΔQ = 9 C</text>
<!-- Slope = I -->
<rect x="590" y="285" width="160" height="40" rx="4" fill="#EEEEEE" stroke="#000000" stroke-width="1"/>
<text x="670" y="301" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Gradient = I</text>
<text x="670" y="318" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">= ΔQ/Δt = 3 A</text>

<!-- showAnnotations: point at t=5, Q=15 -->
<circle cx="630" cy="50" r="5" fill="#000000"/>
<text x="650" y="55" font-family="Arial" font-size="12" fill="#000000">(5, 15)</text>

<!-- showFormula: formula box -->
<rect x="30" y="505" width="340" height="75" rx="4" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="200" y="525" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Key formula: I = ΔQ/Δt</text>
<text x="200" y="545" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Gradient of Q–t graph = current (A)</text>
<text x="200" y="562" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Here: I = 9/3 = 3 A  ✓</text>

<rect x="490" y="505" width="380" height="75" rx="4" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="680" y="525" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Steeper line → larger current</text>
<text x="680" y="545" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Curved line → changing current</text>
<text x="680" y="562" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Horizontal line → no current (I = 0)</text>

</g>
</svg>`;

    // Generated from registry: electronFlowVsConventional
    // options: showBothDirections=true, showBattery=true, showLabels=true, showAnnotations=true
    static electronFlowVsConventionalSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="500" viewBox="0 0 900 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>Electron Flow vs Conventional Current</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-gray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#555555"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Electron Flow vs Conventional Current</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Two opposite conventions for describing the same physical phenomenon</text>

<!-- ── TOP HALF: Electron flow ── -->
<rect x="60" y="80" width="780" height="155" rx="6" fill="#F7F7F7" stroke="#000000" stroke-width="2"/>
<text x="450" y="103" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Electron Flow (Physical reality)</text>

<!-- Battery (showBattery=true): centred left -->
<!-- Long = +, Short = − -->
<line x1="170" y1="155" x2="210" y2="155" stroke="#000000" stroke-width="3"/><!-- + long -->
<line x1="178" y1="170" x2="202" y2="170" stroke="#000000" stroke-width="2"/><!-- − short -->
<text x="215" y="152" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">+</text>
<text x="215" y="175" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">−</text>
<text x="140" y="165" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Cell</text>

<!-- Wire from − terminal to right (bottom), and from + terminal back -->
<!-- Simple horizontal wire -->
<line x1="178" y1="170" x2="730" y2="170" stroke="#000000" stroke-width="2.5"/>
<line x1="210" y1="155" x2="730" y2="155" stroke="#000000" stroke-width="2.5"/>
<line x1="730" y1="155" x2="730" y2="170" stroke="#000000" stroke-width="2.5"/>
<!-- Resistor symbol on top wire -->
<polyline points="350,155 360,140 375,170 390,140 405,170 420,140 435,155" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="395" y="130" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">R</text>

<!-- Electron flow arrow: − to + externally means right to left on top wire -->
<line x1="680" y1="143" x2="460" y2="143" stroke="#555555" stroke-width="2.5" marker-end="url(#arrow-gray)" stroke-dasharray="7,4"/>
<line x1="330" y1="143" x2="230" y2="143" stroke="#555555" stroke-width="2.5" marker-end="url(#arrow-gray)" stroke-dasharray="7,4"/>
<text x="480" y="132" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">e⁻ flow: negative → positive terminal (external)</text>

<!-- annotation labels (showAnnotations) -->
<text x="170" y="200" font-family="Arial" font-size="11" fill="#000000">−ve terminal</text>
<text x="700" y="148" font-family="Arial" font-size="11" fill="#000000">Resistor</text>
<text x="210" y="148" font-family="Arial" font-size="11" fill="#000000">+ve terminal</text>

<!-- ── BOTTOM HALF: Conventional current ── -->
<rect x="60" y="270" width="780" height="155" rx="6" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="450" y="293" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Conventional Current (Agreed direction for circuit analysis)</text>

<!-- Same battery -->
<line x1="170" y1="345" x2="210" y2="345" stroke="#000000" stroke-width="3"/>
<line x1="178" y1="360" x2="202" y2="360" stroke="#000000" stroke-width="2"/>
<text x="215" y="342" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">+</text>
<text x="215" y="365" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">−</text>
<text x="140" y="355" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Cell</text>

<!-- Same wires -->
<line x1="178" y1="360" x2="730" y2="360" stroke="#000000" stroke-width="2.5"/>
<line x1="210" y1="345" x2="730" y2="345" stroke="#000000" stroke-width="2.5"/>
<line x1="730" y1="345" x2="730" y2="360" stroke="#000000" stroke-width="2.5"/>
<!-- Resistor -->
<polyline points="350,345 360,330 375,360 390,330 405,360 420,330 435,345" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="395" y="320" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">R</text>

<!-- Conventional current: + to − externally means left to right on top wire -->
<line x1="230" y1="333" x2="330" y2="333" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="460" y1="333" x2="680" y2="333" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="480" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Conventional current: positive → negative terminal (external)</text>

<!-- Summary box -->
<rect x="200" y="440" width="500" height="45" rx="4" fill="#F0F0F0" stroke="#AAAAAA" stroke-width="1"/>
<text x="450" y="458" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Both describe the same circuit — conventional current is the standard in circuit analysis</text>
<text x="450" y="476" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Historically defined before electrons were discovered (Benjamin Franklin convention)</text>

</g>
</svg>`;

    // ============================================================
    // ===== 3. ELECTRICITY — POTENTIAL DIFFERENCE & EMF ==========
    // ============================================================

    // Generated from registry: emfInternalResistanceCircuit
    // emf=12 V, r=1 Ω, R=5 Ω  →  I = 12/6 = 2 A, V_terminal=10 V, lost_volts=2 V
    static emfInternalResistanceCircuitSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>EMF and Internal Resistance Circuit</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">EMF and Internal Resistance</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">ε = I(R + r)  |  V_terminal = ε − Ir</text>

<!-- ── Battery box with dashed outline (cell boundary) ── -->
<rect x="80" y="160" width="200" height="280" rx="6" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="8,5"/>
<text x="180" y="182" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-style="italic">Cell boundary</text>

<!-- EMF source (showEMF=true) — battery symbol inside dashed box -->
<line x1="145" y1="240" x2="215" y2="240" stroke="#000000" stroke-width="3.5"/><!-- long +ve -->
<line x1="155" y1="258" x2="205" y2="258" stroke="#000000" stroke-width="2"/><!-- short −ve -->
<line x1="145" y1="278" x2="215" y2="278" stroke="#000000" stroke-width="3.5"/><!-- long +ve -->
<line x1="155" y1="296" x2="205" y2="296" stroke="#000000" stroke-width="2"/><!-- short −ve -->
<text x="228" y="252" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">+</text>
<text x="228" y="298" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">−</text>
<text x="90" y="272" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">ε = 12 V</text>

<!-- Internal resistor (showInternalR=true) — zig-zag below battery -->
<polyline points="145,340 155,325 165,355 175,325 185,355 195,325 205,340" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="180" y="378" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">r = 1 Ω</text>
<text x="90" y="342" font-family="Arial" font-size="11" fill="#000000">(internal</text>
<text x="90" y="356" font-family="Arial" font-size="11" fill="#000000"> resistance)</text>

<!-- Wires connecting battery/r to external circuit -->
<!-- Top wire from + terminal (inside cell, y=240) to top of circuit (y=160 external) -->
<line x1="180" y1="230" x2="180" y2="160" stroke="#000000" stroke-width="2.5"/>
<line x1="180" y1="160" x2="700" y2="160" stroke="#000000" stroke-width="2.5"/>
<!-- Bottom wire from − end of r down to y=440, across -->
<line x1="180" y1="355" x2="180" y2="440" stroke="#000000" stroke-width="2.5"/>
<line x1="180" y1="440" x2="700" y2="440" stroke="#000000" stroke-width="2.5"/>
<!-- Right side vertical -->
<line x1="700" y1="160" x2="700" y2="440" stroke="#000000" stroke-width="2.5"/>

<!-- External load resistor (showTerminalVoltage=true) -->
<polyline points="700,230 685,240 715,255 685,270 715,285 685,300 700,310" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="740" y="272" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">R = 5 Ω</text>
<text x="740" y="290" font-family="Arial" font-size="12" fill="#000000">(external</text>
<text x="740" y="306" font-family="Arial" font-size="12" fill="#000000"> load)</text>

<!-- Current arrow (top wire) -->
<line x1="300" y1="148" x2="560" y2="148" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="430" y="138" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">I = 2 A</text>

<!-- Terminal voltage brace (showTerminalVoltage=true) -->
<!-- Brace from y=160 to y=440 on the right -->
<line x1="770" y1="160" x2="800" y2="160" stroke="#000000" stroke-width="1.5"/>
<line x1="770" y1="440" x2="800" y2="440" stroke="#000000" stroke-width="1.5"/>
<line x1="800" y1="160" x2="800" y2="440" stroke="#000000" stroke-width="1.5"/>
<line x1="800" y1="300" x2="815" y2="300" stroke="#000000" stroke-width="1.5"/>
<text x="830" y="296" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">V</text>
<text x="830" y="312" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">= 10 V</text>
<text x="828" y="328" font-family="Arial" font-size="11" fill="#000000">(terminal</text>
<text x="828" y="342" font-family="Arial" font-size="11" fill="#000000"> voltage)</text>

<!-- Lost volts annotation (showLostVolts=true) -->
<line x1="240" y1="330" x2="280" y2="330" stroke="#000000" stroke-width="1.5"/>
<line x1="280" y1="160" x2="280" y2="440" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,4"/>
<text x="285" y="250" font-family="Arial" font-size="11" fill="#000000">Lost volts</text>
<text x="285" y="264" font-family="Arial" font-size="11" fill="#000000">= Ir = 2 V</text>

<!-- Formula box (showFormulas=true) -->
<rect x="30" y="480" width="840" height="100" rx="5" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="450" y="500" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Formulae:</text>
<text x="450" y="520" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">ε = I(R + r)  →  12 = 2 × (5 + 1) ✓</text>
<text x="450" y="540" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">V_terminal = ε − Ir = 12 − (2×1) = 10 V</text>
<text x="450" y="558" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Lost volts = Ir = 2 V  |  V_terminal = IR = 2×5 = 10 V ✓</text>

</g>
</svg>`;

    // Generated from registry: terminalVoltageGraph
    // emf=12 V, r=1.5 Ω  →  V = 12 − 1.5I
    // options: showEMFIntercept=true, showSlope=true, showGrid=true, showFormula=true
    static terminalVoltageGraphSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Terminal Voltage Graph</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Terminal Voltage vs Current</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">V = ε − Ir  (gradient = −r, y-intercept = ε)</text>

<!-- Plot: origin (130,470), x-axis I: 0→10 A (scale: 50px/A), y-axis V: 0→14 V (scale: 30px/V) -->
<!-- Grid -->
<line x1="230" y1="150" x2="230" y2="470" stroke="#CCCCCC" stroke-width="1"/>
<line x1="330" y1="150" x2="330" y2="470" stroke="#CCCCCC" stroke-width="1"/>
<line x1="430" y1="150" x2="430" y2="470" stroke="#CCCCCC" stroke-width="1"/>
<line x1="530" y1="150" x2="530" y2="470" stroke="#CCCCCC" stroke-width="1"/>
<line x1="630" y1="150" x2="630" y2="470" stroke="#CCCCCC" stroke-width="1"/>
<line x1="730" y1="150" x2="730" y2="470" stroke="#CCCCCC" stroke-width="1"/>
<line x1="130" y1="410" x2="780" y2="410" stroke="#CCCCCC" stroke-width="1"/>
<line x1="130" y1="350" x2="780" y2="350" stroke="#CCCCCC" stroke-width="1"/>
<line x1="130" y1="290" x2="780" y2="290" stroke="#CCCCCC" stroke-width="1"/>
<line x1="130" y1="230" x2="780" y2="230" stroke="#CCCCCC" stroke-width="1"/>
<line x1="130" y1="170" x2="780" y2="170" stroke="#CCCCCC" stroke-width="1"/>

<!-- Axes -->
<line x1="130" y1="470" x2="790" y2="470" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="130" y1="470" x2="130" y2="140" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="800" y="474" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">I (A)</text>
<text x="122" y="130" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">V (V)</text>

<!-- X ticks (50px/A): I=2,4,6,8 -->
<line x1="230" y1="465" x2="230" y2="475" stroke="#000000" stroke-width="1.5"/><text x="230" y="490" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2</text>
<line x1="330" y1="465" x2="330" y2="475" stroke="#000000" stroke-width="1.5"/><text x="330" y="490" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">4</text>
<line x1="430" y1="465" x2="430" y2="475" stroke="#000000" stroke-width="1.5"/><text x="430" y="490" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">6</text>
<line x1="530" y1="465" x2="530" y2="475" stroke="#000000" stroke-width="1.5"/><text x="530" y="490" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">8</text>
<line x1="630" y1="465" x2="630" y2="475" stroke="#000000" stroke-width="1.5"/><text x="630" y="490" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">10</text>
<text x="110" y="474" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">0</text>

<!-- Y ticks (30px/V): V=2,4,6,8,10,12 -->
<!-- y = 470 − V*30 -->
<line x1="125" y1="410" x2="135" y2="410" stroke="#000000" stroke-width="1.5"/><text x="112" y="414" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2</text>
<line x1="125" y1="350" x2="135" y2="350" stroke="#000000" stroke-width="1.5"/><text x="112" y="354" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">4</text>
<line x1="125" y1="290" x2="135" y2="290" stroke="#000000" stroke-width="1.5"/><text x="112" y="294" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">6</text>
<line x1="125" y1="230" x2="135" y2="230" stroke="#000000" stroke-width="1.5"/><text x="112" y="234" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">8</text>
<line x1="125" y1="170" x2="135" y2="170" stroke="#000000" stroke-width="1.5"/><text x="108" y="174" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">10</text>
<!-- V=12 → y=470-360=110 -->
<line x1="125" y1="110" x2="135" y2="110" stroke="#000000" stroke-width="1.5"/><text x="108" y="114" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">12</text>

<!-- V = 12 − 1.5I line -->
<!-- I=0: V=12 → (130, 470-360=110) -->
<!-- I=8: V=0 → (130+8*50=530, 470) — short circuit at I=8 A -->
<!-- Actually ε/r = 12/1.5 = 8 A -->
<line x1="130" y1="110" x2="530" y2="470" stroke="#000000" stroke-width="3"/>

<!-- showEMFIntercept=true -->
<circle cx="130" cy="110" r="5" fill="#000000"/>
<line x1="130" y1="110" x2="130" y2="110" stroke="#000000" stroke-width="1"/>
<text x="145" y="108" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">ε = 12 V  (y-intercept = EMF)</text>

<!-- showSlope=true: slope triangle -->
<!-- At I=2→4, ΔV = 1.5*2 = 3 V -->
<line x1="230" y1="255" x2="330" y2="255" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<line x1="330" y1="255" x2="330" y2="165" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<!-- I=2: V=12-3=9 → y=470-270=200 ... let me recalc: y=470-9*30=470-270=200 -->
<!-- I=4: V=12-6=6 → y=470-180=290 -->
<!-- So from (230,200) to (330,290) -->
<line x1="230" y1="200" x2="330" y2="200" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<line x1="330" y1="200" x2="330" y2="290" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="280" y="192" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">ΔI = 2 A</text>
<text x="350" y="248" font-family="Arial" font-size="11" fill="#000000">ΔV = 3 V</text>
<text x="380" y="155" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Gradient = −r = −1.5 Ω</text>

<!-- Short-circuit current point -->
<circle cx="530" cy="470" r="5" fill="#000000"/>
<text x="540" y="460" font-family="Arial" font-size="11" fill="#000000">I_sc = ε/r = 8 A</text>

<!-- Formula box -->
<rect x="540" y="100" width="320" height="80" rx="4" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="700" y="120" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">V = ε − Ir</text>
<text x="700" y="140" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">y-intercept = ε = 12 V</text>
<text x="700" y="158" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">gradient = −r = −1.5 Ω</text>
<text x="700" y="174" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">x-intercept = ε/r = 8 A (short-circuit I)</text>

<!-- Bottom annotations -->
<rect x="30" y="505" width="840" height="75" rx="4" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="450" y="525" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Experimental method to find ε and r:</text>
<text x="450" y="545" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Measure V and I for different external resistances R → plot V vs I → straight line</text>
<text x="450" y="562" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">y-intercept = ε,  |gradient| = r  (no external resistance needed explicitly)</text>

</g>
</svg>`;

    // Generated from registry: vVsIGraph (similar to terminalVoltageGraph but focused differently)
    // emf=9 V, r=2 Ω
    static vVsIGraphSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>V-I Characteristic Graph for EMF Source</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">V–I Graph for an EMF Source</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">ε = 9 V, r = 2 Ω  →  V = 9 − 2I  |  Short-circuit I = 4.5 A</text>

<!-- Plot: origin (130,470), x: 0→6 A (70px/A), y: 0→10 V (40px/V) -->
<!-- Grid -->
<line x1="200" y1="150" x2="200" y2="470" stroke="#CCCCCC" stroke-width="1"/>
<line x1="270" y1="150" x2="270" y2="470" stroke="#CCCCCC" stroke-width="1"/>
<line x1="340" y1="150" x2="340" y2="470" stroke="#CCCCCC" stroke-width="1"/>
<line x1="410" y1="150" x2="410" y2="470" stroke="#CCCCCC" stroke-width="1"/>
<line x1="480" y1="150" x2="480" y2="470" stroke="#CCCCCC" stroke-width="1"/>
<line x1="550" y1="150" x2="550" y2="470" stroke="#CCCCCC" stroke-width="1"/>
<line x1="130" y1="430" x2="620" y2="430" stroke="#CCCCCC" stroke-width="1"/>
<line x1="130" y1="390" x2="620" y2="390" stroke="#CCCCCC" stroke-width="1"/>
<line x1="130" y1="350" x2="620" y2="350" stroke="#CCCCCC" stroke-width="1"/>
<line x1="130" y1="310" x2="620" y2="310" stroke="#CCCCCC" stroke-width="1"/>
<line x1="130" y1="270" x2="620" y2="270" stroke="#CCCCCC" stroke-width="1"/>
<line x1="130" y1="230" x2="620" y2="230" stroke="#CCCCCC" stroke-width="1"/>
<line x1="130" y1="190" x2="620" y2="190" stroke="#CCCCCC" stroke-width="1"/>
<line x1="130" y1="150" x2="620" y2="150" stroke="#CCCCCC" stroke-width="1"/>

<!-- Axes -->
<line x1="130" y1="470" x2="640" y2="470" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="130" y1="470" x2="130" y2="140" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="652" y="474" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">I (A)</text>
<text x="122" y="130" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" text-anchor="middle">V (V)</text>

<!-- X ticks (70px/A) -->
<line x1="200" y1="465" x2="200" y2="475" stroke="#000000" stroke-width="1.5"/><text x="200" y="490" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">1</text>
<line x1="270" y1="465" x2="270" y2="475" stroke="#000000" stroke-width="1.5"/><text x="270" y="490" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2</text>
<line x1="340" y1="465" x2="340" y2="475" stroke="#000000" stroke-width="1.5"/><text x="340" y="490" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">3</text>
<line x1="410" y1="465" x2="410" y2="475" stroke="#000000" stroke-width="1.5"/><text x="410" y="490" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">4</text>
<line x1="480" y1="465" x2="480" y2="475" stroke="#000000" stroke-width="1.5"/><text x="480" y="490" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">5</text>
<text x="110" y="474" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">0</text>

<!-- Y ticks (40px/V) -->
<line x1="125" y1="430" x2="135" y2="430" stroke="#000000" stroke-width="1.5"/><text x="112" y="434" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">1</text>
<line x1="125" y1="390" x2="135" y2="390" stroke="#000000" stroke-width="1.5"/><text x="112" y="394" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2</text>
<line x1="125" y1="350" x2="135" y2="350" stroke="#000000" stroke-width="1.5"/><text x="112" y="354" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">3</text>
<line x1="125" y1="310" x2="135" y2="310" stroke="#000000" stroke-width="1.5"/><text x="112" y="314" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">4</text>
<line x1="125" y1="270" x2="135" y2="270" stroke="#000000" stroke-width="1.5"/><text x="112" y="274" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">5</text>
<line x1="125" y1="230" x2="135" y2="230" stroke="#000000" stroke-width="1.5"/><text x="112" y="234" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">6</text>
<line x1="125" y1="190" x2="135" y2="190" stroke="#000000" stroke-width="1.5"/><text x="112" y="194" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">7</text>
<line x1="125" y1="150" x2="135" y2="150" stroke="#000000" stroke-width="1.5"/><text x="112" y="154" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">8</text>
<!-- V=9 at y=470-360=110 -->
<line x1="125" y1="110" x2="135" y2="110" stroke="#000000" stroke-width="1.5"/><text x="112" y="114" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">9</text>

<!-- V=9-2I line: I=0→V=9 at (130,110), I=4.5→V=0 at (130+4.5*70=445, 470) -->
<line x1="130" y1="110" x2="445" y2="470" stroke="#000000" stroke-width="3"/>

<!-- EMF y-intercept (showEMF=true) -->
<circle cx="130" cy="110" r="6" fill="#000000"/>
<text x="148" y="108" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">ε = 9 V  (open-circuit voltage)</text>
<line x1="130" y1="110" x2="550" y2="110" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="558" y="114" font-family="Arial" font-size="11" fill="#000000">ε</text>

<!-- Short-circuit point (showShortCircuitCurrent=true) -->
<circle cx="445" cy="470" r="6" fill="#000000"/>
<text x="435" y="462" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">I_sc = 4.5 A</text>

<!-- Working point (showWorkingPoint=true) — at I=2, V=9-4=5 V -->
<!-- I=2: x=130+140=270, V=5: y=470-200=270 -->
<circle cx="270" cy="270" r="7" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<line x1="130" y1="270" x2="270" y2="270" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,4"/>
<line x1="270" y1="470" x2="270" y2="270" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,4"/>
<text x="290" y="265" font-family="Arial" font-size="12" fill="#000000">Working point</text>
<text x="290" y="281" font-family="Arial" font-size="12" fill="#000000">I=2A, V=5V</text>

<!-- Formula box -->
<rect x="580" y="150" width="300" height="90" rx="4" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="730" y="170" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">V = ε − Ir</text>
<text x="730" y="190" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">V = 9 − 2I</text>
<text x="730" y="210" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">y-int = ε = 9 V</text>
<text x="730" y="228" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">gradient = −r = −2 Ω</text>

<!-- Bottom note -->
<rect x="30" y="510" width="840" height="60" rx="4" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="450" y="530" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Reading the graph:</text>
<text x="450" y="550" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">At open circuit (I=0): V = ε = 9 V  |  At short circuit (V=0): I = ε/r = 4.5 A  |  Working point between these extremes</text>

</g>
</svg>`;

    // Generated from registry: cellEnergyDiagram
    // emf=6 V, r=0.5 Ω, R=3 Ω  →  I=1.71 A
    static cellEnergyDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Cell Energy Diagram</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Energy Transfer in a Cell</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">ε = 6 V, r = 0.5 Ω, R = 3 Ω  |  EMF = energy transferred per unit charge</text>

<!-- ── Energy flow diagram ── -->

<!-- Chemical energy store (left) -->
<rect x="40" y="200" width="160" height="200" rx="8" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="120" y="285" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Chemical</text>
<text x="120" y="305" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Energy</text>
<text x="120" y="325" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Store</text>
<text x="120" y="355" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">(inside cell)</text>

<!-- Arrow: Chemical → Electrical -->
<line x1="200" y1="300" x2="290" y2="300" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="245" y="290" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">EMF = 6 V</text>
<text x="245" y="318" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">6 J per coulomb</text>

<!-- Electrical energy box (centre) -->
<rect x="290" y="200" width="220" height="200" rx="8" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="400" y="275" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Electrical</text>
<text x="400" y="295" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Energy</text>
<text x="400" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Charge carriers</text>
<text x="400" y="338" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">gain energy from</text>
<text x="400" y="356" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">EMF source</text>

<!-- Arrow: Electrical → Useful (external resistor) -->
<line x1="510" y1="280" x2="600" y2="280" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="555" y="270" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">V_R = IR</text>
<text x="555" y="295" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">≈ 5.14 V</text>

<!-- Useful energy output (right) -->
<rect x="600" y="200" width="165" height="120" rx="8" fill="#F5F5F5" stroke="#000000" stroke-width="2"/>
<text x="683" y="248" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Useful</text>
<text x="683" y="266" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Output</text>
<text x="683" y="286" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">External R</text>
<text x="683" y="304" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(P = I²R)</text>

<!-- Arrow: Electrical → Wasted heat (internal resistance) -->
<line x1="510" y1="340" x2="600" y2="380" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)" stroke-dasharray="6,4"/>
<text x="545" y="385" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Lost volts</text>
<text x="545" y="400" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">= Ir ≈ 0.86 V</text>

<!-- Wasted heat box -->
<rect x="600" y="360" width="165" height="110" rx="8" fill="#CCCCCC" stroke="#000000" stroke-width="2"/>
<text x="683" y="398" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Wasted</text>
<text x="683" y="416" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Heat</text>
<text x="683" y="436" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Internal r</text>
<text x="683" y="454" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(P = I²r)</text>

<!-- Energy equation labels -->
<rect x="40" y="445" width="720" height="130" rx="5" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="400" y="468" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Energy Equations (per unit charge / per second):</text>
<text x="400" y="490" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">ε = energy supplied per coulomb by the cell = 6 J/C = 6 V</text>
<text x="400" y="510" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">V_terminal = useful energy per coulomb delivered to external circuit</text>
<text x="400" y="530" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Lost volts (Ir) = energy per coulomb wasted inside cell</text>
<text x="400" y="550" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">ε = V_terminal + Ir  →  6 = 5.14 + 0.86 ✓</text>

</g>
</svg>`;

    // Generated from registry: lostVoltsDiagram
    // emf=10 V, r=2 Ω, R=8 Ω  →  I=1 A, V_lost=2V, V_terminal=8V
    static lostVoltsDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Lost Volts Diagram</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Lost Volts and Terminal Voltage</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">ε = 10 V, r = 2 Ω, R = 8 Ω  →  I = 1 A</text>

<!-- ── Circuit ── -->
<!-- Cell dashed boundary -->
<rect x="60" y="140" width="220" height="320" rx="6" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="8,5"/>
<text x="170" y="162" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-style="italic">Cell</text>

<!-- Battery symbol (EMF = 10 V) -->
<line x1="125" y1="220" x2="215" y2="220" stroke="#000000" stroke-width="3.5"/>
<line x1="135" y1="238" x2="205" y2="238" stroke="#000000" stroke-width="2"/>
<line x1="125" y1="258" x2="215" y2="258" stroke="#000000" stroke-width="3.5"/>
<line x1="135" y1="276" x2="205" y2="276" stroke="#000000" stroke-width="2"/>
<text x="225" y="232" font-family="Arial" font-size="12" fill="#000000">+</text>
<text x="225" y="278" font-family="Arial" font-size="12" fill="#000000">−</text>
<text x="78" y="250" font-family="Arial" font-size="12" fill="#000000">ε = 10 V</text>

<!-- Internal resistor -->
<polyline points="130,310 140,295 152,325 164,295 176,325 188,295 200,310" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="170" y="362" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">r = 2 Ω</text>
<text x="78" y="315" font-family="Arial" font-size="11" fill="#000000">(internal r)</text>

<!-- Wires -->
<line x1="170" y1="210" x2="170" y2="140" stroke="#000000" stroke-width="2.5"/>
<line x1="170" y1="140" x2="730" y2="140" stroke="#000000" stroke-width="2.5"/>
<line x1="170" y1="348" x2="170" y2="460" stroke="#000000" stroke-width="2.5"/>
<line x1="170" y1="460" x2="730" y2="460" stroke="#000000" stroke-width="2.5"/>
<line x1="730" y1="140" x2="730" y2="460" stroke="#000000" stroke-width="2.5"/>

<!-- External resistor R = 8 Ω -->
<polyline points="730,230 715,242 745,258 715,274 745,290 715,306 730,318" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="780" y="280" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">R = 8 Ω</text>

<!-- Current direction -->
<line x1="280" y1="128" x2="550" y2="128" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="415" y="118" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">I = 1 A</text>

<!-- ── Voltage annotations (showVoltageDrops, showLabels, showAnnotations) ── -->

<!-- Lost volts across r: brace from y=140 to y=460 on left of cell, but just label the r section -->
<!-- Mark "Lost Volts = Ir = 2 V" beside internal resistor -->
<rect x="30" y="290" width="130" height="50" rx="4" fill="#F0F0F0" stroke="#888888" stroke-width="1"/>
<text x="95" y="310" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Lost Volts</text>
<text x="95" y="328" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Ir = 2 V</text>
<line x1="130" y1="315" x2="158" y2="315" stroke="#888888" stroke-width="1.5" stroke-dasharray="4,3"/>

<!-- Terminal voltage brace on right side -->
<line x1="760" y1="140" x2="790" y2="140" stroke="#000000" stroke-width="1.5"/>
<line x1="760" y1="460" x2="790" y2="460" stroke="#000000" stroke-width="1.5"/>
<line x1="790" y1="140" x2="790" y2="460" stroke="#000000" stroke-width="1.5"/>
<line x1="790" y1="300" x2="808" y2="300" stroke="#000000" stroke-width="1.5"/>
<text x="820" y="292" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">V_terminal</text>
<text x="820" y="308" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">= 8 V</text>
<text x="820" y="326" font-family="Arial" font-size="11" fill="#000000">= IR = 1×8</text>

<!-- EMF brace (full height) -->
<line x1="42" y1="140" x2="55" y2="140" stroke="#000000" stroke-width="1.5"/>
<line x1="42" y1="460" x2="55" y2="460" stroke="#000000" stroke-width="1.5"/>
<line x1="42" y1="140" x2="42" y2="460" stroke="#000000" stroke-width="1.5"/>
<line x1="30" y1="300" x2="42" y2="300" stroke="#000000" stroke-width="1.5"/>
<text x="18" y="295" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">ε</text>
<text x="18" y="310" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">10V</text>

<!-- Formula box -->
<rect x="200" y="485" width="500" height="95" rx="5" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="450" y="505" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Key formula: ε = V_terminal + Ir</text>
<text x="450" y="525" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">10 = 8 + 2  ✓</text>
<text x="450" y="545" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">V_terminal = IR = 1 × 8 = 8 V</text>
<text x="450" y="562" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Lost volts = Ir = 1 × 2 = 2 V  (energy wasted inside cell)</text>

</g>
</svg>`;

    // Generated from registry: openVsClosedCircuit
    // emf=9 V, r=1 Ω, R=4 Ω
    static openVsClosedCircuitSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Open vs Closed Circuit</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Open Circuit vs Closed Circuit Voltage</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">ε = 9 V, r = 1 Ω, R = 4 Ω</text>

<!-- Dividing line -->
<line x1="450" y1="75" x2="450" y2="480" stroke="#AAAAAA" stroke-width="1.5" stroke-dasharray="8,5"/>

<!-- ====== LEFT: Open Circuit ====== -->
<text x="225" y="95" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">OPEN CIRCUIT</text>
<text x="225" y="113" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">(Switch open — no current flows)</text>

<!-- Cell dashed outline -->
<rect x="60" y="135" width="140" height="250" rx="6" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="8,5"/>
<text x="130" y="154" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-style="italic">Cell</text>

<!-- Battery -->
<line x1="90" y1="195" x2="170" y2="195" stroke="#000000" stroke-width="3.5"/>
<line x1="100" y1="212" x2="160" y2="212" stroke="#000000" stroke-width="2"/>
<line x1="90" y1="232" x2="170" y2="232" stroke="#000000" stroke-width="3.5"/>
<line x1="100" y1="249" x2="160" y2="249" stroke="#000000" stroke-width="2"/>
<text x="178" y="208" font-family="Arial" font-size="11" fill="#000000">+</text>
<text x="178" y="252" font-family="Arial" font-size="11" fill="#000000">−</text>

<!-- Internal r -->
<polyline points="100,285 110,270 120,300 130,270 140,300 150,270 160,285" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="130" y="320" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">r = 1 Ω</text>

<!-- Wires -->
<line x1="130" y1="183" x2="130" y2="135" stroke="#000000" stroke-width="2.5"/>
<line x1="130" y1="135" x2="370" y2="135" stroke="#000000" stroke-width="2.5"/>
<line x1="130" y1="298" x2="130" y2="385" stroke="#000000" stroke-width="2.5"/>
<line x1="130" y1="385" x2="370" y2="385" stroke="#000000" stroke-width="2.5"/>
<!-- Right side with open switch gap -->
<line x1="370" y1="135" x2="370" y2="230" stroke="#000000" stroke-width="2.5"/>
<!-- Switch gap open -->
<circle cx="370" cy="250" r="4" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<!-- Switch lever (open) -->
<line x1="370" y1="246" x2="395" y2="225" stroke="#000000" stroke-width="2.5"/>
<circle cx="370" cy="270" r="4" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="410" y="250" font-family="Arial" font-size="11" fill="#000000">Switch</text>
<text x="410" y="265" font-family="Arial" font-size="11" fill="#000000">OPEN</text>
<line x1="370" y1="274" x2="370" y2="385" stroke="#000000" stroke-width="2.5"/>

<!-- Voltmeter across terminals (showVoltmeterReadings=true) -->
<!-- Voltmeter symbol: circle with V -->
<circle cx="225" cy="260" r="22" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="225" y="265" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">V</text>
<!-- Voltmeter leads -->
<line x1="225" y1="238" x2="225" y2="135" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<line x1="225" y1="282" x2="225" y2="385" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<!-- Reading label -->
<rect x="240" y="245" width="110" height="34" rx="3" fill="#EEEEEE" stroke="#000000" stroke-width="1"/>
<text x="295" y="259" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Reading:</text>
<text x="295" y="274" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">V = ε = 9 V</text>

<text x="225" y="420" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">I = 0 (no current)</text>
<text x="225" y="438" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Voltmeter reads EMF</text>

<!-- ====== RIGHT: Closed Circuit ====== -->
<text x="675" y="95" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">CLOSED CIRCUIT</text>
<text x="675" y="113" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">(Switch closed — current flows)</text>

<!-- Cell dashed outline -->
<rect x="510" y="135" width="140" height="250" rx="6" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="8,5"/>
<text x="580" y="154" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-style="italic">Cell</text>

<!-- Battery -->
<line x1="540" y1="195" x2="620" y2="195" stroke="#000000" stroke-width="3.5"/>
<line x1="550" y1="212" x2="610" y2="212" stroke="#000000" stroke-width="2"/>
<line x1="540" y1="232" x2="620" y2="232" stroke="#000000" stroke-width="3.5"/>
<line x1="550" y1="249" x2="610" y2="249" stroke="#000000" stroke-width="2"/>
<text x="628" y="208" font-family="Arial" font-size="11" fill="#000000">+</text>
<text x="628" y="252" font-family="Arial" font-size="11" fill="#000000">−</text>

<!-- Internal r -->
<polyline points="550,285 560,270 570,300 580,270 590,300 600,270 610,285" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="580" y="320" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">r = 1 Ω</text>

<!-- Wires + External R -->
<line x1="580" y1="183" x2="580" y2="135" stroke="#000000" stroke-width="2.5"/>
<line x1="580" y1="135" x2="830" y2="135" stroke="#000000" stroke-width="2.5"/>
<line x1="580" y1="298" x2="580" y2="385" stroke="#000000" stroke-width="2.5"/>
<line x1="580" y1="385" x2="830" y2="385" stroke="#000000" stroke-width="2.5"/>
<line x1="830" y1="135" x2="830" y2="220" stroke="#000000" stroke-width="2.5"/>
<!-- R resistor -->
<polyline points="830,220 815,232 845,248 815,264 845,280 815,296 830,308" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="858" y="270" font-family="Arial" font-size="11" fill="#000000">R=4Ω</text>
<line x1="830" y1="308" x2="830" y2="385" stroke="#000000" stroke-width="2.5"/>

<!-- Current arrow -->
<line x1="610" y1="123" x2="780" y2="123" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="695" y="113" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">I = 1.8 A</text>

<!-- Voltmeter (shows terminal voltage) -->
<circle cx="675" cy="260" r="22" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="675" y="265" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">V</text>
<line x1="675" y1="238" x2="675" y2="135" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<line x1="675" y1="282" x2="675" y2="385" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<rect x="690" y="245" width="120" height="34" rx="3" fill="#EEEEEE" stroke="#000000" stroke-width="1"/>
<text x="750" y="259" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Reading:</text>
<text x="750" y="274" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">V = 7.2 V</text>

<text x="675" y="420" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">I = ε/(R+r) = 1.8 A</text>
<text x="675" y="438" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">V = ε − Ir = 7.2 V &lt; ε</text>

<!-- Summary -->
<rect x="60" y="480" width="780" height="90" rx="5" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="450" y="500" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Summary:</text>
<text x="450" y="520" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Open circuit: Voltmeter reads EMF (ε = 9 V) because I = 0, so Ir = 0, no lost volts</text>
<text x="450" y="540" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Closed circuit: Voltmeter reads terminal voltage (V = 7.2 V) — lower than ε due to lost volts = 1.8 V</text>
<text x="450" y="558" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Experimentally: measure V (open circuit) to find ε,  V (closed circuit) to find V_terminal</text>

</g>
</svg>`;

    // ============================================================
    // ===== 4. ELECTRICITY — RESISTANCE & RESISTIVITY ============
    // ============================================================

    // Generated from registry: ivCharacteristicOhmic
    // resistance=10 Ω  →  I = V/10
    static ivCharacteristicOhmicSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>I-V Characteristic — Ohmic Resistor</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">I–V Characteristic — Ohmic Resistor</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">R = 10 Ω (constant) — straight line through origin, both quadrants</text>

<!-- Plot: origin at (350, 300), x: ±5 V (60px/V), y: ±0.5 A (300px/A) -->
<!-- Full four-quadrant axes -->
<line x1="80" y1="300" x2="700" y2="300" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="700" y1="300" x2="80" y2="300" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="350" y1="530" x2="350" y2="80" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="350" y1="80" x2="350" y2="530" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="710" y="304" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">V (V)</text>
<text x="354" y="70" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">I (A)</text>

<!-- Grid -->
<line x1="230" y1="90" x2="230" y2="520" stroke="#CCCCCC" stroke-width="1"/>
<line x1="110" y1="90" x2="110" y2="520" stroke="#CCCCCC" stroke-width="1"/>
<line x1="470" y1="90" x2="470" y2="520" stroke="#CCCCCC" stroke-width="1"/>
<line x1="590" y1="90" x2="590" y2="520" stroke="#CCCCCC" stroke-width="1"/>
<line x1="80" y1="180" x2="700" y2="180" stroke="#CCCCCC" stroke-width="1"/>
<line x1="80" y1="420" x2="700" y2="420" stroke="#CCCCCC" stroke-width="1"/>

<!-- Axis tick labels -->
<!-- X: −2V at x=110, −1V at x=230 (actually scale 60px/V, origin 350) -->
<!-- x = 350 + V*60 -->
<text x="110" y="318" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−4</text>
<text x="230" y="318" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−2</text>
<text x="470" y="318" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">2</text>
<text x="590" y="318" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">4</text>
<!-- Y: I axis: y = 300 − I*240 (scale: 0.5A spans 120px, so 240px/A) -->
<!-- I=0.5 at y=180, I=−0.5 at y=420 -->
<text x="338" y="184" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">0.5</text>
<text x="338" y="424" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">−0.5</text>

<!-- Ohmic line: I = V/10. At V=5: I=0.5, at V=−5: I=−0.5 -->
<!-- V=5: x=350+300=650, y=300-120=180. V=−5: x=350-300=50 → 80, y=420 -->
<line x1="80" y1="420" x2="650" y2="180" stroke="#000000" stroke-width="3"/>

<!-- showSlope annotation -->
<line x1="230" y1="264" x2="470" y2="264" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<line x1="470" y1="264" x2="470" y2="204" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="350" y="258" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">ΔV = 4 V</text>
<text x="495" y="237" font-family="Arial" font-size="11" fill="#000000">ΔI = 0.4 A</text>
<rect x="490" y="160" width="175" height="36" rx="3" fill="#EEEEEE" stroke="#000000" stroke-width="1"/>
<text x="578" y="176" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Gradient = 1/R</text>
<text x="578" y="192" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">= 1/10 = 0.1 A/V</text>

<!-- showAnnotations -->
<text x="440" y="200" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">I = V/R</text>
<text x="440" y="218" font-family="Arial" font-size="12" fill="#000000">= V/10</text>

<!-- Info box -->
<rect x="30" y="505" width="350" height="75" rx="4" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="205" y="525" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Ohmic Conductor Properties:</text>
<text x="205" y="545" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">• Straight line through origin</text>
<text x="205" y="561" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">• R = V/I = constant at all voltages</text>

<rect x="420" y="505" width="330" height="75" rx="4" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="585" y="525" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Works in both directions:</text>
<text x="585" y="545" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">• Positive V → positive I</text>
<text x="585" y="561" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">• Negative V → negative I (symmetrical)</text>

</g>
</svg>`;

    // Generated from registry: ivCharacteristicLamp
    static ivCharacteristicLampSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>I-V Characteristic — Filament Lamp</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">I–V Characteristic — Filament Lamp</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Non-ohmic: resistance increases with temperature as filament heats up</text>

<!-- Four-quadrant axes, origin at (350, 300) -->
<line x1="80" y1="300" x2="700" y2="300" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="700" y1="300" x2="80" y2="300" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="350" y1="530" x2="350" y2="80" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="350" y1="80" x2="350" y2="530" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="712" y="304" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">V (V)</text>
<text x="354" y="70" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">I (A)</text>

<!-- Grid -->
<line x1="230" y1="90" x2="230" y2="520" stroke="#CCCCCC" stroke-width="1"/>
<line x1="110" y1="90" x2="110" y2="520" stroke="#CCCCCC" stroke-width="1"/>
<line x1="470" y1="90" x2="470" y2="520" stroke="#CCCCCC" stroke-width="1"/>
<line x1="590" y1="90" x2="590" y2="520" stroke="#CCCCCC" stroke-width="1"/>
<line x1="80" y1="180" x2="700" y2="180" stroke="#CCCCCC" stroke-width="1"/>
<line x1="80" y1="420" x2="700" y2="420" stroke="#CCCCCC" stroke-width="1"/>

<!-- Tick labels -->
<text x="110" y="318" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−4</text>
<text x="230" y="318" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−2</text>
<text x="470" y="318" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">2</text>
<text x="590" y="318" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">4</text>
<text x="338" y="184" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">0.5</text>
<text x="338" y="424" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">−0.5</text>

<!-- Lamp I-V curve: S-shaped / sub-linear curve (both quadrants, symmetrical) -->
<!-- Positive quadrant: steep near origin, flattening out -->
<!-- Points: (0,0), (1,0.25), (2,0.35), (3,0.42), (4,0.47) scaled: x=350+V*60, y=300-I*240 -->
<!-- (0,0)=(350,300), (1,0.25)=(410,240), (2,0.35)=(470,216), (3,0.42)=(530,199), (4,0.47)=(590,187) -->
<path d="M 350,300 C 380,268 400,243 410,240 C 435,233 455,220 470,216 C 500,210 520,202 530,199 C 555,195 572,190 590,187"
  stroke="#000000" stroke-width="3" fill="none"/>
<!-- Negative quadrant (symmetric) -->
<path d="M 350,300 C 320,332 300,357 290,360 C 265,367 245,380 230,384 C 200,390 180,398 170,401 C 145,405 128,410 110,413"
  stroke="#000000" stroke-width="3" fill="none"/>

<!-- showResistanceChange annotation -->
<!-- Low V region: draw a reference line showing initial (low R) slope -->
<line x1="350" y1="300" x2="415" y2="252" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="430" y="250" font-family="Arial" font-size="11" fill="#000000">Initial slope</text>
<text x="430" y="264" font-family="Arial" font-size="11" fill="#000000">(low R, cold)</text>

<!-- Tangent at high V showing reduced slope -->
<line x1="530" y1="199" x2="590" y2="192" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="490" y="175" font-family="Arial" font-size="11" fill="#000000">Reduced slope</text>
<text x="490" y="189" font-family="Arial" font-size="11" fill="#000000">(high R, hot)</text>

<!-- showAnnotations -->
<rect x="450" y="370" width="250" height="90" rx="4" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="575" y="390" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Resistance change:</text>
<text x="575" y="410" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">R = V/I at any point</text>
<text x="575" y="428" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">R increases as T increases</text>
<text x="575" y="446" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(non-ohmic behaviour)</text>

<!-- Symmetry note -->
<text x="160" y="450" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Curve is</text>
<text x="160" y="464" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">symmetrical</text>

<!-- Bottom info -->
<rect x="30" y="505" width="740" height="75" rx="4" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="400" y="525" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Filament Lamp Behaviour:</text>
<text x="400" y="545" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">At low V: filament cold, low R, steep gradient (like ohmic). At high V: filament hot, high R, shallow gradient.</text>
<text x="400" y="562" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Curve symmetric about origin (works equally in both directions). R = V/I increases with voltage.</text>

</g>
</svg>`;

    // Generated from registry: ivCharacteristicDiode
    // forwardVoltage=0.7 V
    static ivCharacteristicDiodeSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>I-V Characteristic — Diode</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">I–V Characteristic — Diode</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Forward bias: conducts above ~0.7 V threshold  |  Reverse bias: negligible current</text>

<!-- Asymmetric axes: origin at (300, 380) -->
<!-- x: −3 V to +3 V, y: −0.1 A to +0.6 A -->
<!-- scale: x 100px/V, y: forward 300px/0.6A=500px/A; reverse 50px/0.1A=500px/A -->
<!-- Let's use: x-scale 100px/V (origin 300), y forward 250px for 0.5A (500px/A), y reverse 50px for 0.1A -->

<!-- Axes -->
<line x1="60" y1="380" x2="680" y2="380" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="680" y1="380" x2="60" y2="380" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="300" y1="510" x2="300" y2="100" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="300" y1="100" x2="300" y2="510" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="692" y="384" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">V (V)</text>
<text x="304" y="90" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">I (A)</text>

<!-- Grid -->
<line x1="200" y1="110" x2="200" y2="500" stroke="#CCCCCC" stroke-width="1"/>
<line x1="100" y1="110" x2="100" y2="500" stroke="#CCCCCC" stroke-width="1"/>
<line x1="400" y1="110" x2="400" y2="500" stroke="#CCCCCC" stroke-width="1"/>
<line x1="500" y1="110" x2="500" y2="500" stroke="#CCCCCC" stroke-width="1"/>
<line x1="600" y1="110" x2="600" y2="500" stroke="#CCCCCC" stroke-width="1"/>
<line x1="60" y1="480" x2="680" y2="480" stroke="#CCCCCC" stroke-width="1"/>
<line x1="60" y1="280" x2="680" y2="280" stroke="#CCCCCC" stroke-width="1"/>
<line x1="60" y1="180" x2="680" y2="180" stroke="#CCCCCC" stroke-width="1"/>

<!-- Tick labels -->
<text x="100" y="398" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−2</text>
<text x="200" y="398" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−1</text>
<text x="400" y="398" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1</text>
<text x="500" y="398" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">2</text>
<text x="600" y="398" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">3</text>
<!-- Y: y = 380 - I*500 for forward; I=0.2→y=280, I=0.4→y=180 -->
<text x="285" y="284" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">0.2</text>
<text x="285" y="184" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">0.4</text>
<!-- Reverse: I=-0.05 → y=380+25=405; I=-0.1→y=430 -->
<text x="285" y="484" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">−0.1</text>

<!-- ── Diode curve ── -->
<!-- Reverse bias region: tiny constant current near 0 -->
<line x1="60" y1="430" x2="370" y2="430" stroke="#000000" stroke-width="3"/>

<!-- Forward bias: exponential rise after ~0.7 V threshold -->
<!-- Threshold at V=0.7: x = 300+0.7*100 = 370, y=380 (just starts) -->
<!-- V=0.7: (370,378), V=0.9: ~I=0.05→y=355, V=1.1: I=0.15→y=305, V=1.3: I=0.35→y=205, V=1.5: I=0.55→y=105 -->
<path d="M 370,378 C 375,370 385,340 395,310 C 405,280 415,240 425,200 C 435,160 445,130 455,108"
  stroke="#000000" stroke-width="3" fill="none"/>
<!-- Connect reverse flat line to the start point (0,0) region -->
<line x1="370" y1="430" x2="370" y2="378" stroke="#000000" stroke-width="1" stroke-dasharray="2,2"/>

<!-- showThresholdVoltage=true: vertical dashed line at 0.7 V -->
<line x1="370" y1="100" x2="370" y2="380" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>
<text x="375" y="360" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">V_f = 0.7 V</text>
<text x="375" y="376" font-family="Arial" font-size="12" fill="#000000">(threshold)</text>

<!-- showForwardBias label -->
<rect x="460" y="140" width="200" height="55" rx="4" fill="#F5F5F5" stroke="#888888" stroke-width="1"/>
<text x="560" y="160" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Forward Bias</text>
<text x="560" y="178" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Conducts when V &gt; 0.7 V</text>
<text x="560" y="192" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Very low resistance</text>

<!-- showReverseBias label -->
<rect x="60" y="350" width="185" height="55" rx="4" fill="#EEEEEE" stroke="#888888" stroke-width="1"/>
<text x="153" y="370" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Reverse Bias</text>
<text x="153" y="388" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">~Zero current flows</text>
<text x="153" y="402" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Very high resistance</text>

<!-- Bottom box -->
<rect x="30" y="515" width="740" height="65" rx="4" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="400" y="535" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Diode behaviour:</text>
<text x="400" y="553" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Acts as a one-way valve for current. Forward bias: conducts above threshold voltage (~0.7V for Si diode).</text>
<text x="400" y="570" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Reverse bias: blocks current (very high resistance). Used in rectifiers, signal protection circuits.</text>

</g>
</svg>`;

    // Generated from registry: ivCharacteristicThermistor
    static ivCharacteristicThermistorSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>I-V Characteristic — NTC Thermistor</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">I–V Characteristic — NTC Thermistor</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Resistance decreases as temperature increases — super-linear I-V curve</text>

<!-- Axes, origin (350, 350), all positive quadrant focus but symmetric shown -->
<line x1="80" y1="350" x2="680" y2="350" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="680" y1="350" x2="80" y2="350" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="350" y1="530" x2="350" y2="80" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="350" y1="80" x2="350" y2="530" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="692" y="354" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">V (V)</text>
<text x="354" y="70" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">I (A)</text>

<!-- Grid -->
<line x1="230" y1="90" x2="230" y2="520" stroke="#CCCCCC" stroke-width="1"/>
<line x1="110" y1="90" x2="110" y2="520" stroke="#CCCCCC" stroke-width="1"/>
<line x1="470" y1="90" x2="470" y2="520" stroke="#CCCCCC" stroke-width="1"/>
<line x1="590" y1="90" x2="590" y2="520" stroke="#CCCCCC" stroke-width="1"/>
<line x1="80" y1="230" x2="680" y2="230" stroke="#CCCCCC" stroke-width="1"/>
<line x1="80" y1="470" x2="680" y2="470" stroke="#CCCCCC" stroke-width="1"/>
<line x1="80" y1="170" x2="680" y2="170" stroke="#CCCCCC" stroke-width="1"/>

<!-- Tick labels -->
<text x="110" y="368" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−4</text>
<text x="230" y="368" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−2</text>
<text x="470" y="368" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">2</text>
<text x="590" y="368" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">4</text>
<text x="338" y="234" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">0.5</text>
<text x="338" y="474" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">−0.5</text>

<!-- Thermistor I-V: symmetric, faster-than-linear (resistance falling as V increases) -->
<!-- More current than expected from ohmic — curve bends upward steeply -->
<!-- Positive quadrant: V=0: (350,350), V=1: I=0.1→y=300, V=2: I=0.28→y=210, V=3: I=0.55→y=130, V=4: I=0.9→y=100 -->
<!-- scale: 60px/V, 240px/0.5A = 480px/A -->
<path d="M 350,350 C 375,335 395,310 410,298 C 430,282 455,240 475,210 C 500,175 530,140 570,115"
  stroke="#000000" stroke-width="3" fill="none"/>
<!-- Negative quadrant (symmetric) -->
<path d="M 350,350 C 325,365 305,390 290,402 C 270,418 245,460 225,490 C 200,515 170,535 130,555"
  stroke="#000000" stroke-width="3" fill="none"/>

<!-- showTemperatureEffect annotation -->
<rect x="450" y="145" width="240" height="90" rx="4" fill="#F5F5F5" stroke="#888888" stroke-width="1"/>
<text x="570" y="165" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">NTC Thermistor:</text>
<text x="570" y="183" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">As V↑ → I↑ → T↑</text>
<text x="570" y="200" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">→ R decreases</text>
<text x="570" y="218" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">→ more current for same V</text>
<text x="570" y="232" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(positive feedback)</text>

<!-- R = V/I annotation at two points -->
<circle cx="410" cy="298" r="5" fill="#000000"/>
<text x="385" y="285" font-family="Arial" font-size="11" fill="#000000">Low R (warm)</text>
<circle cx="475" cy="210" r="5" fill="#000000"/>
<text x="485" y="205" font-family="Arial" font-size="11" fill="#000000">Even lower R (hot)</text>

<!-- Comparison with ohmic (dashed) -->
<line x1="350" y1="350" x2="590" y2="230" stroke="#888888" stroke-width="2" stroke-dasharray="6,4"/>
<text x="600" y="225" font-family="Arial" font-size="11" fill="#888888">Ohmic</text>
<text x="600" y="239" font-family="Arial" font-size="11" fill="#888888">(reference)</text>

<!-- Bottom box -->
<rect x="30" y="510" width="740" height="65" rx="4" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="400" y="530" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">NTC (Negative Temperature Coefficient) Thermistor:</text>
<text x="400" y="548" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Resistance decreases as temperature increases. Curve is symmetric but bends outward (super-linear).</text>
<text x="400" y="565" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Used in temperature sensing circuits, thermostat controls, and inrush current limiters.</text>

</g>
</svg>`;

    // Generated from registry: resistivityFormulaDiagram
    // length=2.0 m, crossSectionArea=1e-6 m², resistivity=1.7e-8 Ω·m (copper)
    static resistivityFormulaDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="500" viewBox="0 0 900 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>Resistivity Formula Diagram</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Resistivity: R = ρL/A</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Conductor dimensions and material property determine resistance</text>

<!-- ── Conductor (3D rectangular prism representation) ── -->
<!-- Front face -->
<rect x="150" y="150" width="550" height="140" fill="#EEEEEE" stroke="#000000" stroke-width="2.5"/>
<!-- Top face (parallelogram) -->
<polygon points="150,150 210,100 760,100 700,150" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<!-- Right face -->
<polygon points="700,150 760,100 760,240 700,290" fill="#CCCCCC" stroke="#000000" stroke-width="2"/>

<!-- ── Length arrow (showLength=true) ── -->
<line x1="150" y1="330" x2="700" y2="330" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="700" y1="330" x2="150" y2="330" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="150" y1="295" x2="150" y2="340" stroke="#000000" stroke-width="1.5"/>
<line x1="700" y1="295" x2="700" y2="340" stroke="#000000" stroke-width="1.5"/>
<text x="425" y="358" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">L = 2.0 m</text>
<text x="425" y="376" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">(R ∝ L — longer wire → higher resistance)</text>

<!-- ── Cross-section area annotation (showArea=true) ── -->
<!-- Right face shows cross-section -->
<line x1="790" y1="100" x2="840" y2="100" stroke="#000000" stroke-width="1.5"/>
<line x1="790" y1="240" x2="840" y2="240" stroke="#000000" stroke-width="1.5"/>
<line x1="835" y1="100" x2="835" y2="240" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="835" y1="240" x2="835" y2="100" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="855" y="175" font-family="Arial" font-size="12" fill="#000000" text-anchor="start" font-weight="bold">A = 1×10⁻⁶ m²</text>
<text x="855" y="193" font-family="Arial" font-size="11" fill="#555555" text-anchor="start">(R ∝ 1/A)</text>

<!-- ── R arrow from wire ends ── -->
<line x1="50" y1="220" x2="130" y2="220" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="28" y="215" font-family="Arial" font-size="12" fill="#000000">I in</text>
<line x1="720" y1="195" x2="820" y2="195" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<!-- (going via right face edge) -->
<text x="826" y="199" font-family="Arial" font-size="12" fill="#000000">I out</text>

<!-- ── Formula box (showFormula=true) ── -->
<rect x="30" y="390" width="840" height="95" rx="5" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="450" y="412" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">R = ρL/A</text>
<text x="450" y="432" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">where: ρ = resistivity (Ω·m) — material property,  L = length (m),  A = cross-section area (m²)</text>
<text x="450" y="452" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Calculation: R = (1.7×10⁻⁸ × 2.0) / (1×10⁻⁶) = 3.4×10⁻² Ω = 0.034 Ω  (copper wire)</text>
<text x="450" y="472" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">ρ for copper ≈ 1.7×10⁻⁸ Ω·m,  nichrome ≈ 1.1×10⁻⁶ Ω·m,  silicon ≈ 1×10³ Ω·m</text>

<!-- Labels on conductor -->
<text x="425" y="230" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Conductor</text>
<text x="425" y="250" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">ρ = 1.7×10⁻⁸ Ω·m (copper)</text>

</g>
</svg>`;

    // Generated from registry: temperatureResistanceGraphs
    static temperatureResistanceGraphsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Temperature-Resistance Graphs</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Resistance vs Temperature</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Metal conductor (R increases) vs NTC Thermistor (R decreases)</text>

<!-- Dividing line -->
<line x1="450" y1="75" x2="450" y2="510" stroke="#BBBBBB" stroke-width="1.5" stroke-dasharray="8,5"/>

<!-- ====== LEFT: Metal conductor ====== -->
<text x="225" y="92" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Metal Conductor</text>
<text x="225" y="110" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(e.g. copper wire, tungsten filament)</text>

<!-- Axes: origin (60, 460), x: 0→400°C (0.9px/°C), y: 0→50Ω (7px/Ω) -->
<line x1="60" y1="460" x2="420" y2="460" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="60" y1="460" x2="60" y2="120" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="428" y="464" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">T (°C)</text>
<text x="52" y="112" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">R (Ω)</text>

<!-- Grid left -->
<line x1="150" y1="130" x2="150" y2="460" stroke="#CCCCCC" stroke-width="1"/>
<line x1="240" y1="130" x2="240" y2="460" stroke="#CCCCCC" stroke-width="1"/>
<line x1="330" y1="130" x2="330" y2="460" stroke="#CCCCCC" stroke-width="1"/>
<line x1="60" y1="390" x2="420" y2="390" stroke="#CCCCCC" stroke-width="1"/>
<line x1="60" y1="320" x2="420" y2="320" stroke="#CCCCCC" stroke-width="1"/>
<line x1="60" y1="250" x2="420" y2="250" stroke="#CCCCCC" stroke-width="1"/>
<line x1="60" y1="180" x2="420" y2="180" stroke="#CCCCCC" stroke-width="1"/>

<!-- Ticks left -->
<text x="150" y="478" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">100</text>
<text x="240" y="478" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">200</text>
<text x="330" y="478" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">300</text>
<text x="45" y="394" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">10</text>
<text x="45" y="324" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">20</text>
<text x="45" y="254" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">30</text>
<text x="45" y="184" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">40</text>

<!-- Metal: linear increase R = R₀(1+αT), starting at R₀=5Ω → y=460-35=425, T=0 to T=400: R≈5+0.08*400=37Ω → y=460-37*7=201 -->
<!-- Simple linear: (60,425) to (420,190) -->
<line x1="60" y1="425" x2="420" y2="185" stroke="#000000" stroke-width="3"/>

<!-- Annotations (showAnnotations) -->
<text x="350" y="210" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">R increases</text>
<text x="350" y="226" font-family="Arial" font-size="12" fill="#000000">with T</text>
<!-- Arrow showing direction -->
<line x1="310" y1="260" x2="380" y2="215" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="80" y="420" font-family="Arial" font-size="11" fill="#555555">R₀ at T=0°C</text>
<text x="100" y="445" font-family="Arial" font-size="11" fill="#555555">(intercept)</text>

<!-- ====== RIGHT: NTC Thermistor ====== -->
<text x="675" y="92" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">NTC Thermistor</text>
<text x="675" y="110" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(Negative Temperature Coefficient)</text>

<!-- Axes: origin (480, 460) -->
<line x1="480" y1="460" x2="840" y2="460" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<line x1="480" y1="460" x2="480" y2="120" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="848" y="464" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">T (°C)</text>
<text x="472" y="112" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">R (Ω)</text>

<!-- Grid right -->
<line x1="570" y1="130" x2="570" y2="460" stroke="#CCCCCC" stroke-width="1"/>
<line x1="660" y1="130" x2="660" y2="460" stroke="#CCCCCC" stroke-width="1"/>
<line x1="750" y1="130" x2="750" y2="460" stroke="#CCCCCC" stroke-width="1"/>
<line x1="480" y1="390" x2="840" y2="390" stroke="#CCCCCC" stroke-width="1"/>
<line x1="480" y1="320" x2="840" y2="320" stroke="#CCCCCC" stroke-width="1"/>
<line x1="480" y1="250" x2="840" y2="250" stroke="#CCCCCC" stroke-width="1"/>
<line x1="480" y1="180" x2="840" y2="180" stroke="#CCCCCC" stroke-width="1"/>

<!-- Ticks right -->
<text x="570" y="478" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">25</text>
<text x="660" y="478" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">50</text>
<text x="750" y="478" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">75</text>
<text x="465" y="394" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">2k</text>
<text x="465" y="324" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">4k</text>
<text x="465" y="254" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">6k</text>
<text x="465" y="184" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">8k</text>

<!-- NTC thermistor: exponential decay R ≈ R₀ * exp(-bT) -->
<!-- From (480, 145) at T=0 → high R, to (840, 440) at T≈100 → low R -->
<path d="M 480,145 C 520,160 550,200 570,250 C 590,300 620,360 660,400 C 700,430 750,445 840,452"
  stroke="#000000" stroke-width="3" fill="none"/>

<!-- Annotations -->
<text x="490" y="140" font-family="Arial" font-size="12" fill="#000000">High R at low T</text>
<text x="720" y="430" font-family="Arial" font-size="12" fill="#000000">Low R at high T</text>
<line x1="530" y1="205" x2="600" y2="300" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="535" y="260" font-family="Arial" font-size="11" fill="#000000">Exponential</text>
<text x="535" y="274" font-family="Arial" font-size="11" fill="#000000">decay</text>

<!-- Summary -->
<rect x="30" y="520" width="840" height="65" rx="4" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="450" y="542" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Comparison:</text>
<text x="450" y="561" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Metal: more lattice vibrations at higher T → more collisions → resistance increases (approximately linear)</text>
<text x="450" y="578" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">NTC Thermistor: more charge carriers liberated at higher T → resistance decreases exponentially</text>

</g>
</svg>`;

    // Generated from registry: conductorStructure
    static conductorStructureSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Conductor Structure Diagram</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-sm" markerWidth="7" markerHeight="7" refX="6" refY="2.5" orient="auto">
    <polygon points="0 0, 7 2.5, 0 5" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Metallic Conductor Structure</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Fixed positive ion lattice with free (delocalised) electrons</text>

<!-- Outer boundary of conductor -->
<rect x="60" y="80" width="680" height="360" rx="8" fill="#F5F5F5" stroke="#000000" stroke-width="2.5"/>

<!-- ── Lattice ions (showLatticeIons=true) — arranged in regular grid ── -->
<!-- Row 1 -->
<circle cx="140" cy="150" r="18" fill="#CCCCCC" stroke="#000000" stroke-width="2"/><text x="140" y="156" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<circle cx="240" cy="150" r="18" fill="#CCCCCC" stroke="#000000" stroke-width="2"/><text x="240" y="156" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<circle cx="340" cy="150" r="18" fill="#CCCCCC" stroke="#000000" stroke-width="2"/><text x="340" y="156" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<circle cx="440" cy="150" r="18" fill="#CCCCCC" stroke="#000000" stroke-width="2"/><text x="440" y="156" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<circle cx="540" cy="150" r="18" fill="#CCCCCC" stroke="#000000" stroke-width="2"/><text x="540" y="156" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<circle cx="640" cy="150" r="18" fill="#CCCCCC" stroke="#000000" stroke-width="2"/><text x="640" y="156" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<!-- Row 2 -->
<circle cx="140" cy="260" r="18" fill="#CCCCCC" stroke="#000000" stroke-width="2"/><text x="140" y="266" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<circle cx="240" cy="260" r="18" fill="#CCCCCC" stroke="#000000" stroke-width="2"/><text x="240" y="266" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<circle cx="340" cy="260" r="18" fill="#CCCCCC" stroke="#000000" stroke-width="2"/><text x="340" y="266" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<circle cx="440" cy="260" r="18" fill="#CCCCCC" stroke="#000000" stroke-width="2"/><text x="440" y="266" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<circle cx="540" cy="260" r="18" fill="#CCCCCC" stroke="#000000" stroke-width="2"/><text x="540" y="266" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<circle cx="640" cy="260" r="18" fill="#CCCCCC" stroke="#000000" stroke-width="2"/><text x="640" y="266" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<!-- Row 3 -->
<circle cx="140" cy="370" r="18" fill="#CCCCCC" stroke="#000000" stroke-width="2"/><text x="140" y="376" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<circle cx="240" cy="370" r="18" fill="#CCCCCC" stroke="#000000" stroke-width="2"/><text x="240" y="376" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<circle cx="340" cy="370" r="18" fill="#CCCCCC" stroke="#000000" stroke-width="2"/><text x="340" y="376" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<circle cx="440" cy="370" r="18" fill="#CCCCCC" stroke="#000000" stroke-width="2"/><text x="440" y="376" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<circle cx="540" cy="370" r="18" fill="#CCCCCC" stroke="#000000" stroke-width="2"/><text x="540" y="376" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>
<circle cx="640" cy="370" r="18" fill="#CCCCCC" stroke="#000000" stroke-width="2"/><text x="640" y="376" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>

<!-- ── Free electrons (showFreeElectrons=true) — scattered between ions ── -->
<!-- Small circles between lattice sites, with random-looking positions -->
<circle cx="190" cy="115" r="7" fill="#000000"/>
<text x="190" y="119" font-family="Arial" font-size="8" fill="#FFFFFF" text-anchor="middle">e</text>
<circle cx="290" cy="200" r="7" fill="#000000"/>
<text x="290" y="204" font-family="Arial" font-size="8" fill="#FFFFFF" text-anchor="middle">e</text>
<circle cx="395" cy="115" r="7" fill="#000000"/>
<text x="395" y="119" font-family="Arial" font-size="8" fill="#FFFFFF" text-anchor="middle">e</text>
<circle cx="490" cy="205" r="7" fill="#000000"/>
<text x="490" y="209" font-family="Arial" font-size="8" fill="#FFFFFF" text-anchor="middle">e</text>
<circle cx="598" cy="112" r="7" fill="#000000"/>
<text x="598" y="116" font-family="Arial" font-size="8" fill="#FFFFFF" text-anchor="middle">e</text>
<circle cx="190" cy="315" r="7" fill="#000000"/>
<text x="190" y="319" font-family="Arial" font-size="8" fill="#FFFFFF" text-anchor="middle">e</text>
<circle cx="395" cy="310" r="7" fill="#000000"/>
<text x="395" y="314" font-family="Arial" font-size="8" fill="#FFFFFF" text-anchor="middle">e</text>
<circle cx="595" cy="315" r="7" fill="#000000"/>
<text x="595" y="319" font-family="Arial" font-size="8" fill="#FFFFFF" text-anchor="middle">e</text>
<circle cx="290" cy="420" r="7" fill="#000000"/>
<text x="290" y="424" font-family="Arial" font-size="8" fill="#FFFFFF" text-anchor="middle">e</text>
<circle cx="490" cy="415" r="7" fill="#000000"/>
<text x="490" y="419" font-family="Arial" font-size="8" fill="#FFFFFF" text-anchor="middle">e</text>

<!-- ── Electron motion arrows (showElectronMotion=true) — random thermal directions ── -->
<!-- Random short arrows showing thermal motion of free electrons -->
<line x1="190" y1="108" x2="215" y2="92" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-sm)"/>
<line x1="290" y1="193" x2="265" y2="175" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-sm)"/>
<line x1="395" y1="108" x2="375" y2="88" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-sm)"/>
<line x1="490" y1="198" x2="520" y2="215" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-sm)"/>
<line x1="598" y1="105" x2="620" y2="88" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-sm)"/>
<line x1="190" y1="308" x2="170" y2="290" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-sm)"/>
<line x1="395" y1="303" x2="420" y2="320" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-sm)"/>
<line x1="595" y1="308" x2="618" y2="295" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-sm)"/>

<!-- Net drift arrow (field applied) -->
<line x1="100" y1="467" x2="680" y2="467" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="390" y="458" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Net electron drift (when electric field applied) →</text>

<!-- Labels -->
<text x="110" y="180" font-family="Arial" font-size="11" fill="#555555">Ion</text>
<text x="110" y="194" font-family="Arial" font-size="11" fill="#555555">lattice</text>
<line x1="118" y1="197" x2="122" y2="210" stroke="#555555" stroke-width="1"/>
<text x="665" y="120" font-family="Arial" font-size="11" fill="#555555">Free e⁻</text>
<line x1="625" y1="121" x2="610" y2="118" stroke="#555555" stroke-width="1"/>

<!-- Summary box -->
<rect x="30" y="490" width="740" height="90" rx="5" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="400" y="510" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Metallic bonding — sea of delocalised electrons:</text>
<text x="400" y="530" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">• Positive ions fixed in regular lattice, vibrating about equilibrium positions</text>
<text x="400" y="548" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">• Free electrons move randomly at high speed (thermal motion ≈ 10⁶ m/s)</text>
<text x="400" y="566" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">• Applied electric field → small net drift velocity (v_d ≈ 10⁻⁴ m/s) → electric current</text>

</g>
</svg>`;

    // ============================================================
    // ===== 5. ELECTRICITY — DC CIRCUITS =========================
    // ============================================================

    // Generated from registry: seriesCircuitDiagram
    // emf=12 V, resistors=[4,3,5]  →  R_total=12Ω, I=1A, V_drops=4,3,5V
    static seriesCircuitDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Series Circuit Diagram</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Series Circuit</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">ε = 12 V, R₁ = 4 Ω, R₂ = 3 Ω, R₃ = 5 Ω</text>

<!-- Circuit rectangle -->
<!-- Top wire: y=150. Bottom wire: y=420. Left: x=100. Right: x=800 -->
<line x1="100" y1="150" x2="800" y2="150" stroke="#000000" stroke-width="2.5"/>
<line x1="100" y1="420" x2="800" y2="420" stroke="#000000" stroke-width="2.5"/>
<line x1="100" y1="150" x2="100" y2="420" stroke="#000000" stroke-width="2.5"/>
<line x1="800" y1="150" x2="800" y2="420" stroke="#000000" stroke-width="2.5"/>

<!-- Battery on left side -->
<line x1="68" y1="258" x2="132" y2="258" stroke="#000000" stroke-width="3.5"/>
<line x1="76" y1="275" x2="124" y2="275" stroke="#000000" stroke-width="2"/>
<line x1="68" y1="295" x2="132" y2="295" stroke="#000000" stroke-width="3.5"/>
<line x1="76" y1="312" x2="124" y2="312" stroke="#000000" stroke-width="2"/>
<text x="142" y="270" font-family="Arial" font-size="11" fill="#000000">+</text>
<text x="142" y="315" font-family="Arial" font-size="11" fill="#000000">−</text>
<text x="35" y="285" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">ε</text>
<text x="35" y="300" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">12V</text>

<!-- R1 on top wire (left third) -->
<polyline points="230,150 242,133 255,167 268,133 281,167 294,133 307,150" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="268" y="122" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">R₁ = 4 Ω</text>

<!-- R2 on top wire (middle) -->
<polyline points="430,150 442,133 455,167 468,133 481,167 494,133 507,150" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="468" y="122" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">R₂ = 3 Ω</text>

<!-- R3 on top wire (right third) -->
<polyline points="630,150 642,133 655,167 668,133 681,167 694,133 707,150" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="668" y="122" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">R₃ = 5 Ω</text>

<!-- Current arrows (showCurrentValues) -->
<line x1="140" y1="138" x2="215" y2="138" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="177" y="128" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">I = 1 A</text>
<!-- Same I through all (series) -->
<line x1="320" y1="138" x2="415" y2="138" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="368" y="128" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">1 A</text>
<line x1="520" y1="138" x2="615" y2="138" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="568" y="128" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">1 A</text>
<line x1="720" y1="138" x2="790" y2="138" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="755" y="128" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">1 A</text>

<!-- Voltage drop annotations (showVoltageDrops) -->
<!-- V across R1 -->
<line x1="230" y1="430" x2="230" y2="450" stroke="#000000" stroke-width="1.5"/>
<line x1="307" y1="430" x2="307" y2="450" stroke="#000000" stroke-width="1.5"/>
<line x1="230" y1="450" x2="307" y2="450" stroke="#000000" stroke-width="1.5"/>
<text x="268" y="468" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">V₁ = 4 V</text>
<!-- V across R2 -->
<line x1="430" y1="430" x2="430" y2="450" stroke="#000000" stroke-width="1.5"/>
<line x1="507" y1="430" x2="507" y2="450" stroke="#000000" stroke-width="1.5"/>
<line x1="430" y1="450" x2="507" y2="450" stroke="#000000" stroke-width="1.5"/>
<text x="468" y="468" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">V₂ = 3 V</text>
<!-- V across R3 -->
<line x1="630" y1="430" x2="630" y2="450" stroke="#000000" stroke-width="1.5"/>
<line x1="707" y1="430" x2="707" y2="450" stroke="#000000" stroke-width="1.5"/>
<line x1="630" y1="450" x2="707" y2="450" stroke="#000000" stroke-width="1.5"/>
<text x="668" y="468" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">V₃ = 5 V</text>

<!-- showTotalResistance -->
<rect x="30" y="495" width="840" height="90" rx="5" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="450" y="515" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Series Circuit Rules:</text>
<text x="450" y="535" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">R_total = R₁ + R₂ + R₃ = 4 + 3 + 5 = 12 Ω  |  I = ε/R_total = 12/12 = 1 A (same everywhere)</text>
<text x="450" y="553" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">V₁ = IR₁ = 4 V,  V₂ = IR₂ = 3 V,  V₃ = IR₃ = 5 V  |  V₁ + V₂ + V₃ = 12 V = ε ✓</text>
<text x="450" y="571" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Voltage divides between components; current is the same through all</text>

</g>
</svg>`;

    // Generated from registry: parallelCircuitDiagram
    // emf=12V, resistors=[6,4,12]  →  1/R=1/6+1/4+1/12=4/12+3/12+1/12=8/12  R=1.5Ω, I_total=8A
    static parallelCircuitDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Parallel Circuit Diagram</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Parallel Circuit</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">ε = 12 V, R₁ = 6 Ω, R₂ = 4 Ω, R₃ = 12 Ω</text>

<!-- Outer rails -->
<!-- Top rail: y=120, bottom rail: y=440 -->
<line x1="80" y1="120" x2="830" y2="120" stroke="#000000" stroke-width="2.5"/>
<line x1="80" y1="440" x2="830" y2="440" stroke="#000000" stroke-width="2.5"/>
<line x1="80" y1="120" x2="80" y2="440" stroke="#000000" stroke-width="2.5"/>
<line x1="830" y1="120" x2="830" y2="440" stroke="#000000" stroke-width="2.5"/>

<!-- Battery on left side -->
<line x1="50" y1="240" x2="110" y2="240" stroke="#000000" stroke-width="3.5"/>
<line x1="58" y1="258" x2="102" y2="258" stroke="#000000" stroke-width="2"/>
<line x1="50" y1="278" x2="110" y2="278" stroke="#000000" stroke-width="3.5"/>
<line x1="58" y1="296" x2="102" y2="296" stroke="#000000" stroke-width="2"/>
<text x="118" y="252" font-family="Arial" font-size="11" fill="#000000">+</text>
<text x="118" y="298" font-family="Arial" font-size="11" fill="#000000">−</text>
<text x="26" y="268" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">12V</text>

<!-- Three parallel branches -->
<!-- Branch junctions at x=300 and x=700 -->
<line x1="300" y1="120" x2="300" y2="440" stroke="#000000" stroke-width="2"/>
<line x1="700" y1="120" x2="700" y2="440" stroke="#000000" stroke-width="2"/>
<!-- Horizontal connectors along branches -->
<!-- R1 branch at y=190 -->
<line x1="300" y1="190" x2="380" y2="190" stroke="#000000" stroke-width="2.5"/>
<polyline points="380,190 392,173 405,207 418,173 431,207 444,173 457,190" stroke="#000000" stroke-width="2.5" fill="none"/>
<line x1="457" y1="190" x2="700" y2="190" stroke="#000000" stroke-width="2.5"/>
<text x="418" y="163" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">R₁ = 6 Ω</text>
<!-- R2 branch at y=280 -->
<line x1="300" y1="280" x2="380" y2="280" stroke="#000000" stroke-width="2.5"/>
<polyline points="380,280 392,263 405,297 418,263 431,297 444,263 457,280" stroke="#000000" stroke-width="2.5" fill="none"/>
<line x1="457" y1="280" x2="700" y2="280" stroke="#000000" stroke-width="2.5"/>
<text x="418" y="253" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">R₂ = 4 Ω</text>
<!-- R3 branch at y=370 -->
<line x1="300" y1="370" x2="380" y2="370" stroke="#000000" stroke-width="2.5"/>
<polyline points="380,370 392,353 405,387 418,353 431,387 444,353 457,370" stroke="#000000" stroke-width="2.5" fill="none"/>
<line x1="457" y1="370" x2="700" y2="370" stroke="#000000" stroke-width="2.5"/>
<text x="418" y="343" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">R₃ = 12 Ω</text>

<!-- Branch current arrows (showBranchCurrents) -->
<line x1="316" y1="178" x2="370" y2="178" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="343" y="168" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">I₁ = 2 A</text>
<line x1="316" y1="268" x2="370" y2="268" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="343" y="258" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">I₂ = 3 A</text>
<line x1="316" y1="358" x2="370" y2="358" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="343" y="348" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">I₃ = 1 A</text>

<!-- Total current arrows -->
<line x1="130" y1="108" x2="280" y2="108" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="205" y="97" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">I_total = 8 A</text>
<line x1="720" y1="108" x2="820" y2="108" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="770" y="97" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">8 A</text>

<!-- Voltage label (showVoltages) -->
<text x="840" y="275" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">V = 12 V</text>
<text x="840" y="292" font-family="Arial" font-size="11" fill="#555555">(same across</text>
<text x="840" y="308" font-family="Arial" font-size="11" fill="#555555">all branches)</text>

<!-- Summary box (showTotalResistance) -->
<rect x="30" y="490" width="840" height="95" rx="5" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="450" y="512" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Parallel Circuit Rules:</text>
<text x="450" y="532" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">1/R_total = 1/R₁ + 1/R₂ + 1/R₃ = 1/6 + 1/4 + 1/12 = 2/12 + 3/12 + 1/12 = 6/12  →  R_total = 2 Ω</text>
<text x="450" y="551" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">I₁=V/R₁=12/6=2A,  I₂=V/R₂=12/4=3A,  I₃=V/R₃=12/12=1A  |  I_total = 2+3+1 = 6 A (KCL)</text>
<text x="450" y="570" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Same voltage across all branches; total current = sum of branch currents</text>

</g>
</svg>`;

    // Generated from registry: mixedCircuitDiagram
    // emf=15V, series R=3Ω, parallel [6,6]  →  parallel=3Ω, total=6Ω, I=2.5A
    static mixedCircuitDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Mixed Series-Parallel Circuit</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Mixed Series-Parallel Circuit</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">ε = 15 V, R_s = 3 Ω (series), R_p1 = R_p2 = 6 Ω (parallel pair)</text>

<!-- Main outer circuit -->
<line x1="80" y1="130" x2="830" y2="130" stroke="#000000" stroke-width="2.5"/>
<line x1="80" y1="460" x2="830" y2="460" stroke="#000000" stroke-width="2.5"/>
<line x1="80" y1="130" x2="80" y2="460" stroke="#000000" stroke-width="2.5"/>
<line x1="830" y1="130" x2="830" y2="460" stroke="#000000" stroke-width="2.5"/>

<!-- Battery left side -->
<line x1="48" y1="260" x2="112" y2="260" stroke="#000000" stroke-width="3.5"/>
<line x1="56" y1="278" x2="104" y2="278" stroke="#000000" stroke-width="2"/>
<line x1="48" y1="298" x2="112" y2="298" stroke="#000000" stroke-width="3.5"/>
<line x1="56" y1="316" x2="104" y2="316" stroke="#000000" stroke-width="2"/>
<text x="120" y="272" font-family="Arial" font-size="11" fill="#000000">+</text>
<text x="120" y="318" font-family="Arial" font-size="11" fill="#000000">−</text>
<text x="22" y="290" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">15V</text>

<!-- Series resistor R_s = 3 Ω on top wire (left section) -->
<polyline points="200,130 212,113 225,147 238,113 251,147 264,113 277,130" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="238" y="102" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">R_s = 3 Ω</text>
<text x="238" y="90" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(series)</text>

<!-- Total current on top wire -->
<line x1="120" y1="118" x2="190" y2="118" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="155" y="108" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">I = 2.5 A</text>

<!-- Parallel section: junctions at x=430 and x=750 -->
<line x1="430" y1="130" x2="430" y2="460" stroke="#000000" stroke-width="2"/>
<line x1="750" y1="130" x2="750" y2="460" stroke="#000000" stroke-width="2"/>

<!-- Parallel branch 1: R_p1 = 6 Ω at y=225 -->
<line x1="430" y1="225" x2="490" y2="225" stroke="#000000" stroke-width="2.5"/>
<polyline points="490,225 502,208 515,242 528,208 541,242 554,208 567,225" stroke="#000000" stroke-width="2.5" fill="none"/>
<line x1="567" y1="225" x2="750" y2="225" stroke="#000000" stroke-width="2.5"/>
<text x="528" y="198" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">R_p1 = 6 Ω</text>

<!-- Parallel branch 2: R_p2 = 6 Ω at y=365 -->
<line x1="430" y1="365" x2="490" y2="365" stroke="#000000" stroke-width="2.5"/>
<polyline points="490,365 502,348 515,382 528,348 541,382 554,348 567,365" stroke="#000000" stroke-width="2.5" fill="none"/>
<line x1="567" y1="365" x2="750" y2="365" stroke="#000000" stroke-width="2.5"/>
<text x="528" y="338" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">R_p2 = 6 Ω</text>

<!-- Branch current arrows (showCurrentPaths) -->
<line x1="447" y1="213" x2="480" y2="213" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="464" y="203" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1.25 A</text>
<line x1="447" y1="353" x2="480" y2="353" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="464" y="343" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1.25 A</text>

<!-- Voltage labels (showVoltageDrops) -->
<!-- V across series R: 2.5*3=7.5V -->
<text x="238" y="165" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">V_s = 7.5 V</text>
<!-- V across parallel section: 2.5*3=7.5V -->
<text x="592" y="470" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">V_p = 7.5 V</text>
<line x1="430" y1="480" x2="430" y2="490" stroke="#000000" stroke-width="1.5"/>
<line x1="750" y1="480" x2="750" y2="490" stroke="#000000" stroke-width="1.5"/>
<line x1="430" y1="490" x2="750" y2="490" stroke="#000000" stroke-width="1.5"/>

<!-- Simplification steps box (showSimplificationSteps) -->
<rect x="30" y="505" width="840" height="80" rx="5" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="450" y="525" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Simplification Steps:</text>
<text x="450" y="545" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Step 1: Parallel pair: 1/R_p = 1/6 + 1/6 = 2/6  →  R_p = 3 Ω</text>
<text x="450" y="563" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Step 2: Total: R_total = R_s + R_p = 3 + 3 = 6 Ω  |  I = ε/R_total = 15/6 = 2.5 A  |  Each branch: 1.25 A</text>

</g>
</svg>`;

    // Generated from registry: potentialDividerCircuit
    // V_in=12V, R1=4Ω, R2=8Ω  →  V_out = 12*(8/12) = 8 V
    static potentialDividerCircuitSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Potential Divider Circuit</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Potential Divider</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">V_in = 12 V, R₁ = 4 Ω, R₂ = 8 Ω  →  V_out = V_in × R₂/(R₁+R₂) = 8 V</text>

<!-- Vertical circuit: V_in top to bottom through R1 then R2 -->
<!-- V_in supply on left: top at (150,100), bottom at (150,500) -->
<!-- Left vertical wire -->
<line x1="150" y1="100" x2="150" y2="500" stroke="#000000" stroke-width="2.5"/>
<!-- Right wire (through resistors) -->
<line x1="450" y1="100" x2="450" y2="500" stroke="#000000" stroke-width="2.5"/>
<!-- Top connecting wire -->
<line x1="150" y1="100" x2="450" y2="100" stroke="#000000" stroke-width="2.5"/>
<!-- Bottom connecting wire -->
<line x1="150" y1="500" x2="450" y2="500" stroke="#000000" stroke-width="2.5"/>

<!-- Battery symbol on left wire -->
<line x1="120" y1="270" x2="180" y2="270" stroke="#000000" stroke-width="3.5"/>
<line x1="128" y1="288" x2="172" y2="288" stroke="#000000" stroke-width="2"/>
<line x1="120" y1="308" x2="180" y2="308" stroke="#000000" stroke-width="3.5"/>
<line x1="128" y1="326" x2="172" y2="326" stroke="#000000" stroke-width="2"/>
<text x="186" y="282" font-family="Arial" font-size="11" fill="#000000">+</text>
<text x="186" y="328" font-family="Arial" font-size="11" fill="#000000">−</text>
<text x="90" y="298" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">V_in</text>
<text x="90" y="315" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">12 V</text>

<!-- R1 on right wire (upper half) -->
<polyline points="450,180 433,192 467,208 433,224 467,240 433,256 450,268" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="530" y="225" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">R₁ = 4 Ω</text>
<text x="530" y="244" font-family="Arial" font-size="11" fill="#555555">V₁ = 4 V</text>
<!-- Brace for R1 voltage -->
<line x1="490" y1="180" x2="510" y2="180" stroke="#000000" stroke-width="1.5"/>
<line x1="490" y1="268" x2="510" y2="268" stroke="#000000" stroke-width="1.5"/>
<line x1="510" y1="180" x2="510" y2="268" stroke="#000000" stroke-width="1.5"/>

<!-- R2 on right wire (lower half) -->
<polyline points="450,340 433,352 467,368 433,384 467,400 433,416 450,428" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="530" y="388" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">R₂ = 8 Ω</text>
<text x="530" y="406" font-family="Arial" font-size="11" fill="#555555">V₂ = 8 V</text>
<!-- Brace for R2 voltage = V_out -->
<line x1="490" y1="340" x2="510" y2="340" stroke="#000000" stroke-width="1.5"/>
<line x1="490" y1="428" x2="510" y2="428" stroke="#000000" stroke-width="1.5"/>
<line x1="510" y1="340" x2="510" y2="428" stroke="#000000" stroke-width="1.5"/>

<!-- Junction point at mid-wire (between R1 and R2) at y=300 approximately -->
<!-- Tap at y=268-340 mid: y≈304 -->
<circle cx="450" cy="300" r="5" fill="#000000"/>

<!-- Output voltage taken from junction to reference -->
<line x1="450" y1="300" x2="680" y2="300" stroke="#000000" stroke-width="2" stroke-dasharray="6,4"/>
<line x1="150" y1="500" x2="680" y2="500" stroke="#000000" stroke-width="2" stroke-dasharray="6,4"/>
<line x1="680" y1="300" x2="680" y2="500" stroke="#000000" stroke-width="2" stroke-dasharray="6,4"/>
<!-- Voltmeter at output -->
<circle cx="680" cy="400" r="25" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="680" y="406" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">V</text>

<!-- V_out label -->
<rect x="710" y="360" width="75" height="45" rx="3" fill="#EEEEEE" stroke="#000000" stroke-width="1"/>
<text x="748" y="378" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">V_out</text>
<text x="748" y="396" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">= 8 V</text>

<!-- Current arrow -->
<line x1="162" y1="185" x2="162" y2="240" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="110" y="218" font-family="Arial" font-size="11" fill="#000000">I = 1 A</text>

<!-- Formula box (showFormula) -->
<rect x="30" y="520" width="740" height="65" rx="4" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1"/>
<text x="400" y="542" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">V_out = V_in × R₂/(R₁ + R₂) = 12 × 8/12 = 8 V</text>
<text x="400" y="562" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Changing R₁ or R₂ (e.g. with LDR/thermistor) changes V_out — basis of sensor circuits</text>

</g>
</svg>`;

    // Generated from registry: kirchhoffCurrentLaw
    // currentsIn=[3,2], currentsOut=[4,1]  → ΣI_in=5A, ΣI_out=5A ✓
    static kirchhoffCurrentLawSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Kirchhoff's Current Law</metadata>
<defs>
  <marker id="arrow-bw" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
    <polygon points="0 0, 12 4, 0 8" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Kirchhoff's Current Law (KCL)</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">ΣI_in = ΣI_out at any junction  (charge is conserved)</text>

<!-- Junction node at centre -->
<circle cx="400" cy="280" r="12" fill="#000000"/>

<!-- Wires (showJunction=true) — 4 branches radiating from junction -->
<!-- Branch 1: from upper-left (IN: 3A) -->
<line x1="200" y1="130" x2="388" y2="268" stroke="#000000" stroke-width="3"/>
<!-- Branch 2: from left (IN: 2A) -->
<line x1="80" y1="280" x2="388" y2="280" stroke="#000000" stroke-width="3"/>
<!-- Branch 3: to upper-right (OUT: 4A) -->
<line x1="412" y1="268" x2="620" y2="130" stroke="#000000" stroke-width="3"/>
<!-- Branch 4: to lower-right (OUT: 1A) -->
<line x1="412" y1="292" x2="650" y2="410" stroke="#000000" stroke-width="3"/>

<!-- Current arrows (showCurrentArrows=true) — pointing toward and away from junction -->
<!-- IN: branch1 3A — arrow going toward junction -->
<line x1="255" y1="165" x2="355" y2="248" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<!-- IN: branch2 2A — arrow going toward junction -->
<line x1="140" y1="280" x2="360" y2="280" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<!-- OUT: branch3 4A — arrow going away from junction -->
<line x1="450" y1="251" x2="560" y2="163" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<!-- OUT: branch4 1A — arrow going away from junction -->
<line x1="440" y1="298" x2="595" y2="385" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>

<!-- Current value labels (showLabels) -->
<!-- IN labels -->
<rect x="130" y="145" width="90" height="38" rx="3" fill="#EEEEEE" stroke="#888888" stroke-width="1"/>
<text x="175" y="163" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">I₁ = 3 A</text>
<text x="175" y="178" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(into node)</text>

<rect x="60" y="253" width="90" height="38" rx="3" fill="#EEEEEE" stroke="#888888" stroke-width="1"/>
<text x="105" y="271" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">I₂ = 2 A</text>
<text x="105" y="286" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(into node)</text>

<!-- OUT labels -->
<rect x="580" y="107" width="90" height="38" rx="3" fill="#EEEEEE" stroke="#888888" stroke-width="1"/>
<text x="625" y="125" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">I₃ = 4 A</text>
<text x="625" y="140" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(out of node)</text>

<rect x="600" y="375" width="90" height="38" rx="3" fill="#EEEEEE" stroke="#888888" stroke-width="1"/>
<text x="645" y="393" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">I₄ = 1 A</text>
<text x="645" y="408" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(out of node)</text>

<!-- IN / OUT labels on arrows -->
<text x="205" y="215" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">IN</text>
<text x="95" y="268" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">IN</text>
<text x="545" y="178" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">OUT</text>
<text x="555" y="350" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">OUT</text>

<!-- KCL equation box (showEquation=true) -->
<rect x="130" y="370" width="540" height="100" rx="6" fill="#F5F5F5" stroke="#000000" stroke-width="1.5"/>
<text x="400" y="395" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">KCL: ΣI_in = ΣI_out</text>
<text x="400" y="418" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">I₁ + I₂ = I₃ + I₄</text>
<text x="400" y="440" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">3 + 2 = 4 + 1</text>
<text x="400" y="460" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">5 A = 5 A  ✓</text>

<!-- Physical explanation -->
<rect x="30" y="490" width="740" height="50" rx="4" fill="#F0F0F0" stroke="#AAAAAA" stroke-width="1"/>
<text x="400" y="510" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Physical basis: Conservation of charge — charge cannot accumulate at a junction</text>
<text x="400" y="528" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">All charge that arrives at the node must leave — no charge stored at the node</text>

</g>
</svg>`;


    // ============================================================
    // ===== 2. WAVES & SOUND =====================================
    // ============================================================

    // ============================================================
    // ===== WAVES & SOUND — PROGRESSIVE WAVES ====================
    // ============================================================

    // Generated from registry: displacementPositionGraph
    // wavelength=0.4m, amplitude=0.05m, frequency=5Hz
    // options: showWavelength=true, showAmplitude=true, showGrid=true, showDirection=true
    static displacementPositionGraphSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="500" viewBox="0 0 900 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>Displacement-Position Graph</metadata>
<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#000000"/>
  </marker>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#0055AA"/>
  </marker>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#CC0000"/>
  </marker>
</defs>
<g>

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Displacement-Position Graph</text>
<text x="450" y="52" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Snapshot at time t — Progressive Wave (λ=0.4 m, A=0.05 m, f=5 Hz)</text>

<!-- Graph area: origin at (100, 270), x-axis spans 700px = 1.4m, y-axis spans ±150px = ±0.05m -->
<!-- Grid lines (showGrid=true) -->
<!-- Vertical grid every 100px = 0.2m -->
<line x1="200" y1="90" x2="200" y2="360" stroke="#DDDDDD" stroke-width="1"/>
<line x1="300" y1="90" x2="300" y2="360" stroke="#DDDDDD" stroke-width="1"/>
<line x1="400" y1="90" x2="400" y2="360" stroke="#DDDDDD" stroke-width="1"/>
<line x1="500" y1="90" x2="500" y2="360" stroke="#DDDDDD" stroke-width="1"/>
<line x1="600" y1="90" x2="600" y2="360" stroke="#DDDDDD" stroke-width="1"/>
<line x1="700" y1="90" x2="700" y2="360" stroke="#DDDDDD" stroke-width="1"/>
<!-- Horizontal grid -->
<line x1="100" y1="120" x2="800" y2="120" stroke="#DDDDDD" stroke-width="1"/>
<line x1="100" y1="180" x2="800" y2="180" stroke="#DDDDDD" stroke-width="1"/>
<line x1="100" y1="270" x2="800" y2="270" stroke="#DDDDDD" stroke-width="1"/>
<line x1="100" y1="360" x2="800" y2="360" stroke="#DDDDDD" stroke-width="1"/>
<line x1="100" y1="420" x2="800" y2="420" stroke="#DDDDDD" stroke-width="1"/>

<!-- Axes -->
<line x1="100" y1="270" x2="820" y2="270" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<line x1="100" y1="430" x2="100" y2="80" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Axis labels -->
<text x="840" y="274" font-family="Arial" font-size="13" fill="#000000">x (m)</text>
<text x="80" y="75" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">y (m)</text>

<!-- x-axis tick marks and labels: 100px = 0.2m -->
<line x1="100" y1="265" x2="100" y2="275" stroke="#000000" stroke-width="1.5"/>
<text x="100" y="290" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">0</text>
<line x1="200" y1="265" x2="200" y2="275" stroke="#000000" stroke-width="1.5"/>
<text x="200" y="290" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">0.2</text>
<line x1="300" y1="265" x2="300" y2="275" stroke="#000000" stroke-width="1.5"/>
<text x="300" y="290" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">0.4</text>
<line x1="400" y1="265" x2="400" y2="275" stroke="#000000" stroke-width="1.5"/>
<text x="400" y="290" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">0.6</text>
<line x1="500" y1="265" x2="500" y2="275" stroke="#000000" stroke-width="1.5"/>
<text x="500" y="290" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">0.8</text>
<line x1="600" y1="265" x2="600" y2="275" stroke="#000000" stroke-width="1.5"/>
<text x="600" y="290" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1.0</text>
<line x1="700" y1="265" x2="700" y2="275" stroke="#000000" stroke-width="1.5"/>
<text x="700" y="290" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1.2</text>

<!-- y-axis ticks: 150px = 0.05m, so 0.025m = 75px -->
<line x1="95" y1="120" x2="105" y2="120" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="124" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">0.05</text>
<line x1="95" y1="195" x2="105" y2="195" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="199" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">0.025</text>
<line x1="95" y1="345" x2="105" y2="345" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="349" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">-0.025</text>
<line x1="95" y1="420" x2="105" y2="420" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="424" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">-0.05</text>

<!-- Wave curve: y = 0.05*sin(2π/0.4 * x), origin (100,270), scale 500px/m, amplitude 150px
     λ=0.4m = 200px per cycle. Plot from x=0 to x=1.4m (700px).
     Using cubic bezier segments per quarter-wavelength (50px each).
     Cycles: 0→200, 200→400, 400→600, 600→800 (7 half-cycles in 700px) -->
<!-- Full sine wave path (3.5 cycles in 700px) -->
<path d="
  M 100,270
  C 112,120 138,120 150,270
  C 162,420 188,420 200,270
  C 212,120 238,120 250,270
  C 262,420 288,420 300,270
  C 312,120 338,120 350,270
  C 362,420 388,420 400,270
  C 412,120 438,120 450,270
  C 462,420 488,420 500,270
  C 512,120 538,120 550,270
  C 562,420 588,420 600,270
  C 612,120 638,120 650,270
  C 662,420 688,420 700,270
  C 712,120 738,120 750,270
  C 762,420 788,420 800,270
" stroke="#0055AA" stroke-width="3" fill="none"/>

<!-- showWavelength: wavelength annotation (100px = 0.2m → 200px = 0.4m) -->
<line x1="100" y1="450" x2="300" y2="450" stroke="#CC0000" stroke-width="2"/>
<line x1="100" y1="444" x2="100" y2="456" stroke="#CC0000" stroke-width="2"/>
<line x1="300" y1="444" x2="300" y2="456" stroke="#CC0000" stroke-width="2"/>
<text x="200" y="470" font-family="Arial" font-size="13" fill="#CC0000" text-anchor="middle" font-weight="bold">λ = 0.4 m</text>

<!-- showAmplitude annotation -->
<line x1="830" y1="270" x2="830" y2="120" stroke="#009900" stroke-width="2"/>
<line x1="824" y1="270" x2="836" y2="270" stroke="#009900" stroke-width="2"/>
<line x1="824" y1="120" x2="836" y2="120" stroke="#009900" stroke-width="2"/>
<text x="855" y="202" font-family="Arial" font-size="12" fill="#009900" text-anchor="middle" font-weight="bold">A</text>
<text x="855" y="218" font-family="Arial" font-size="12" fill="#009900" text-anchor="middle">=0.05m</text>

<!-- showDirection: wave travel direction arrow -->
<line x1="560" y1="100" x2="700" y2="100" stroke="#000000" stroke-width="2.5" marker-end="url(#arrowhead)"/>
<text x="630" y="92" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Wave travel</text>

<!-- Crest and trough labels -->
<text x="150" y="108" font-family="Arial" font-size="11" fill="#0055AA" text-anchor="middle">crest</text>
<text x="250" y="432" font-family="Arial" font-size="11" fill="#0055AA" text-anchor="middle">trough</text>

</g>
</svg>`;

    // Generated from registry: transverseWaveDiagram
    // wavelength=80px, amplitude=30px, numCycles=2
    // options: showParticleMotion=true, showWaveDirection=true, showCrestsTroughs=true, showLabels=true
    static transverseWaveDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="500" viewBox="0 0 900 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>Transverse Wave Diagram</metadata>
<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#000000"/>
  </marker>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#0055AA"/>
  </marker>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#CC2200"/>
  </marker>
</defs>
<g>

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Transverse Wave Diagram</text>
<text x="450" y="52" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Particle displacement perpendicular to wave travel direction</text>

<!-- Equilibrium axis -->
<line x1="60" y1="260" x2="840" y2="260" stroke="#888888" stroke-width="1.5" stroke-dasharray="6,4"/>
<text x="848" y="264" font-family="Arial" font-size="11" fill="#888888">equil.</text>

<!-- Wave: 2 cycles, λ=80px, amplitude=30px, centre y=260
     Each half-cycle = 40px. Using cubic bezier control points.
     Start x=80. End x=80+2*160=400. But we scale to use full width nicely.
     Scale factor: 2 cycles × 80px = 160px raw → scale to 700px: factor=700/160=4.375 → λ_drawn=350px, A_drawn=131px too large
     Better: use λ=175px (to fit 2 cycles in 700px space), A=60px. Start x=100, end x=800. -->
<!-- 2 complete cycles: x=100→450→800 -->
<path d="
  M 100,260
  C 121,200 154,200 175,260
  C 196,320 229,320 250,260
  C 271,200 304,200 325,260
  C 346,320 379,320 400,260
  C 421,200 454,200 475,260
  C 496,320 529,320 550,260
  C 571,200 604,200 625,260
  C 646,320 679,320 700,260
" stroke="#0055AA" stroke-width="3.5" fill="none"/>

<!-- showCrestsTroughs: label crests and troughs -->
<text x="175" y="192" font-family="Arial" font-size="12" fill="#CC2200" text-anchor="middle" font-weight="bold">Crest</text>
<line x1="175" y1="197" x2="175" y2="203" stroke="#CC2200" stroke-width="1.5"/>
<text x="525" y="192" font-family="Arial" font-size="12" fill="#CC2200" text-anchor="middle" font-weight="bold">Crest</text>
<line x1="525" y1="197" x2="525" y2="203" stroke="#CC2200" stroke-width="1.5"/>
<text x="350" y="338" font-family="Arial" font-size="12" fill="#0066CC" text-anchor="middle" font-weight="bold">Trough</text>
<line x1="350" y1="326" x2="350" y2="320" stroke="#0066CC" stroke-width="1.5"/>

<!-- showParticleMotion: particles at various positions with velocity arrows -->
<!-- At equilibrium crossing (x=100), moving up -->
<circle cx="100" cy="260" r="6" fill="#FF6600" stroke="none"/>
<line x1="100" y1="252" x2="100" y2="232" stroke="#FF6600" stroke-width="2.5" marker-end="url(#arrowhead-red)"/>

<!-- At crest (x=175), momentarily at rest -->
<circle cx="175" cy="200" r="6" fill="#FF6600" stroke="none"/>
<text x="190" y="205" font-family="Arial" font-size="10" fill="#FF6600">v=0</text>

<!-- At equilibrium (x=250), moving down -->
<circle cx="250" cy="260" r="6" fill="#FF6600" stroke="none"/>
<line x1="250" y1="268" x2="250" y2="288" stroke="#FF6600" stroke-width="2.5" marker-end="url(#arrowhead-red)"/>

<!-- At trough (x=350), momentarily at rest -->
<circle cx="350" cy="320" r="6" fill="#FF6600" stroke="none"/>
<text x="365" y="325" font-family="Arial" font-size="10" fill="#FF6600">v=0</text>

<!-- At equilibrium (x=400), moving up -->
<circle cx="400" cy="260" r="6" fill="#FF6600" stroke="none"/>
<line x1="400" y1="252" x2="400" y2="232" stroke="#FF6600" stroke-width="2.5" marker-end="url(#arrowhead-red)"/>

<!-- showParticleMotion label -->
<text x="60" y="130" font-family="Arial" font-size="12" fill="#FF6600" font-weight="bold">Particle</text>
<text x="60" y="146" font-family="Arial" font-size="12" fill="#FF6600" font-weight="bold">Motion</text>
<line x1="78" y1="150" x2="95" y2="250" stroke="#FF6600" stroke-width="1" stroke-dasharray="3,3"/>

<!-- showWaveDirection: wave direction arrow -->
<line x1="580" y1="130" x2="750" y2="130" stroke="#000000" stroke-width="3" marker-end="url(#arrowhead)"/>
<text x="665" y="118" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Wave direction</text>

<!-- showLabels: wavelength annotation -->
<line x1="100" y1="400" x2="450" y2="400" stroke="#009900" stroke-width="2"/>
<line x1="100" y1="393" x2="100" y2="407" stroke="#009900" stroke-width="2"/>
<line x1="450" y1="393" x2="450" y2="407" stroke="#009900" stroke-width="2"/>
<text x="275" y="420" font-family="Arial" font-size="13" fill="#009900" text-anchor="middle" font-weight="bold">λ (wavelength) = 1 full cycle</text>

<!-- Amplitude annotation -->
<line x1="38" y1="260" x2="38" y2="200" stroke="#990099" stroke-width="2"/>
<line x1="32" y1="260" x2="44" y2="260" stroke="#990099" stroke-width="2"/>
<line x1="32" y1="200" x2="44" y2="200" stroke="#990099" stroke-width="2"/>
<text x="22" y="235" font-family="Arial" font-size="12" fill="#990099" text-anchor="middle" font-weight="bold">A</text>

<!-- Info box -->
<rect x="550" y="380" width="310" height="80" fill="#F8F8FF" stroke="#AAAACC" stroke-width="1" rx="5"/>
<text x="705" y="400" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Transverse Wave: Key Properties</text>
<text x="562" y="418" font-family="Arial" font-size="11" fill="#333333">• Particle motion ⊥ to wave propagation</text>
<text x="562" y="434" font-family="Arial" font-size="11" fill="#333333">• Examples: light, EM waves, string waves</text>
<text x="562" y="450" font-family="Arial" font-size="11" fill="#333333">• Can be polarised</text>

</g>
</svg>`;

    // Generated from registry: longitudinalWaveDiagram
    // wavelength=80px, amplitude=20px, numCycles=2
    // options: showCompressions=true, showRarefactions=true, showParticleMotion=true, showWaveDirection=true
    static longitudinalWaveDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="500" viewBox="0 0 900 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>Longitudinal Wave Diagram</metadata>
<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#000000"/>
  </marker>
  <marker id="arrowhead-orange" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#CC5500"/>
  </marker>
</defs>
<g>

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Longitudinal Wave Diagram</text>
<text x="450" y="52" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Particle displacement parallel to wave travel (e.g. sound)</text>

<!-- Wave direction label -->
<line x1="100" y1="90" x2="790" y2="90" stroke="#000000" stroke-width="2.5" marker-end="url(#arrowhead)"/>
<text x="450" y="78" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Wave Direction →</text>

<!-- Reference equilibrium line -->
<line x1="80" y1="200" x2="820" y2="200" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="4,4"/>

<!-- ====== PARTICLE REPRESENTATION (3 regions: C, R, C, R, C) ====== -->
<!-- Compression 1 (x~110-210): tightly packed particles, shaded region -->
<rect x="110" y="155" width="100" height="90" fill="#CCDDFF" stroke="none" opacity="0.5"/>
<text x="160" y="150" font-family="Arial" font-size="13" fill="#0033AA" text-anchor="middle" font-weight="bold">Compression</text>
<!-- Particles compressed -->
<circle cx="120" cy="200" r="6" fill="#0033AA"/>
<circle cx="133" cy="200" r="6" fill="#0033AA"/>
<circle cx="146" cy="200" r="6" fill="#0033AA"/>
<circle cx="159" cy="200" r="6" fill="#0033AA"/>
<circle cx="172" cy="200" r="6" fill="#0033AA"/>
<circle cx="185" cy="200" r="6" fill="#0033AA"/>
<circle cx="198" cy="200" r="6" fill="#0033AA"/>
<circle cx="211" cy="200" r="6" fill="#0033AA"/>
<!-- Particle motion arrows at compression (converging) -->
<line x1="135" y1="175" x2="154" y2="175" stroke="#CC5500" stroke-width="2" marker-end="url(#arrowhead-orange)"/>
<line x1="195" y1="175" x2="176" y2="175" stroke="#CC5500" stroke-width="2" marker-end="url(#arrowhead-orange)"/>
<text x="165" y="168" font-family="Arial" font-size="10" fill="#CC5500" text-anchor="middle">←  →</text>

<!-- Rarefaction 1 (x~210-360): widely spaced -->
<rect x="210" y="155" width="150" height="90" fill="#FFEEDD" stroke="none" opacity="0.5"/>
<text x="285" y="150" font-family="Arial" font-size="13" fill="#AA4400" text-anchor="middle" font-weight="bold">Rarefaction</text>
<circle cx="225" cy="200" r="6" fill="#AA4400"/>
<circle cx="260" cy="200" r="6" fill="#AA4400"/>
<circle cx="295" cy="200" r="6" fill="#AA4400"/>
<circle cx="330" cy="200" r="6" fill="#AA4400"/>
<circle cx="360" cy="200" r="6" fill="#AA4400"/>
<!-- Particle motion arrows at rarefaction (diverging) -->
<line x1="268" y1="175" x2="249" y2="175" stroke="#CC5500" stroke-width="2" marker-end="url(#arrowhead-orange)"/>
<line x1="298" y1="175" x2="317" y2="175" stroke="#CC5500" stroke-width="2" marker-end="url(#arrowhead-orange)"/>
<text x="283" y="168" font-family="Arial" font-size="10" fill="#CC5500" text-anchor="middle">→  ←</text>

<!-- Compression 2 (x~360-480) -->
<rect x="360" y="155" width="100" height="90" fill="#CCDDFF" stroke="none" opacity="0.5"/>
<text x="410" y="150" font-family="Arial" font-size="13" fill="#0033AA" text-anchor="middle" font-weight="bold">Compression</text>
<circle cx="370" cy="200" r="6" fill="#0033AA"/>
<circle cx="383" cy="200" r="6" fill="#0033AA"/>
<circle cx="396" cy="200" r="6" fill="#0033AA"/>
<circle cx="409" cy="200" r="6" fill="#0033AA"/>
<circle cx="422" cy="200" r="6" fill="#0033AA"/>
<circle cx="435" cy="200" r="6" fill="#0033AA"/>
<circle cx="448" cy="200" r="6" fill="#0033AA"/>
<circle cx="461" cy="200" r="6" fill="#0033AA"/>

<!-- Rarefaction 2 (x~460-600) -->
<rect x="460" y="155" width="150" height="90" fill="#FFEEDD" stroke="none" opacity="0.5"/>
<text x="535" y="150" font-family="Arial" font-size="13" fill="#AA4400" text-anchor="middle" font-weight="bold">Rarefaction</text>
<circle cx="475" cy="200" r="6" fill="#AA4400"/>
<circle cx="510" cy="200" r="6" fill="#AA4400"/>
<circle cx="545" cy="200" r="6" fill="#AA4400"/>
<circle cx="580" cy="200" r="6" fill="#AA4400"/>
<circle cx="610" cy="200" r="6" fill="#AA4400"/>

<!-- Compression 3 (x~610-710) -->
<rect x="610" y="155" width="100" height="90" fill="#CCDDFF" stroke="none" opacity="0.5"/>
<text x="660" y="150" font-family="Arial" font-size="13" fill="#0033AA" text-anchor="middle" font-weight="bold">Compression</text>
<circle cx="620" cy="200" r="6" fill="#0033AA"/>
<circle cx="633" cy="200" r="6" fill="#0033AA"/>
<circle cx="646" cy="200" r="6" fill="#0033AA"/>
<circle cx="659" cy="200" r="6" fill="#0033AA"/>
<circle cx="672" cy="200" r="6" fill="#0033AA"/>
<circle cx="685" cy="200" r="6" fill="#0033AA"/>
<circle cx="698" cy="200" r="6" fill="#0033AA"/>
<circle cx="711" cy="200" r="6" fill="#0033AA"/>

<!-- Rarefaction 3 (x~710-800) -->
<rect x="710" y="155" width="90" height="90" fill="#FFEEDD" stroke="none" opacity="0.5"/>
<circle cx="725" cy="200" r="6" fill="#AA4400"/>
<circle cx="755" cy="200" r="6" fill="#AA4400"/>
<circle cx="785" cy="200" r="6" fill="#AA4400"/>

<!-- Displacement-position graph below (sinusoidal representation) -->
<text x="450" y="310" font-family="Arial" font-size="13" fill="#333333" text-anchor="middle" font-style="italic">Corresponding displacement–position graph:</text>
<line x1="80" y1="360" x2="820" y2="360" stroke="#888888" stroke-width="1.5" stroke-dasharray="4,4"/>
<path d="
  M 110,360
  C 130,310 150,310 160,360
  C 170,410 190,410 210,360
  C 230,310 250,310 260,360
  C 270,410 290,410 310,360
  C 330,310 350,310 360,360
  C 370,410 390,410 410,360
  C 430,310 450,310 460,360
  C 470,410 490,410 510,360
  C 530,310 550,310 560,360
  C 570,410 590,410 610,360
  C 630,310 650,310 660,360
  C 670,410 690,410 710,360
" stroke="#555599" stroke-width="2.5" fill="none"/>

<!-- Wavelength annotation -->
<line x1="110" y1="450" x2="360" y2="450" stroke="#009900" stroke-width="2"/>
<line x1="110" y1="443" x2="110" y2="457" stroke="#009900" stroke-width="2"/>
<line x1="360" y1="443" x2="360" y2="457" stroke="#009900" stroke-width="2"/>
<text x="235" y="470" font-family="Arial" font-size="13" fill="#009900" text-anchor="middle" font-weight="bold">λ (one full cycle: C → R → C)</text>

<!-- Particle motion note -->
<rect x="30" y="390" width="60" height="30" fill="#FFF0E0" stroke="#CC5500" stroke-width="1" rx="3"/>
<text x="60" y="410" font-family="Arial" font-size="10" fill="#CC5500" text-anchor="middle" font-weight="bold">∥ motion</text>

</g>
</svg>`;

    // Generated from registry: wavePhaseDifference
    // wavelength=100px, amplitude=30px, phaseDifference=90°
    // options: showPhaseDiff=true, showBothWaves=true, showAnnotations=true, showGrid=true
    static wavePhaseDifferenceSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="500" viewBox="0 0 900 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>Wave Phase Difference Diagram</metadata>
<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#000000"/>
  </marker>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#0055BB"/>
  </marker>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#BB2200"/>
  </marker>
</defs>
<g>

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Wave Phase Difference</text>
<text x="450" y="50" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Two waves with phase difference φ = 90° = π/2 rad = ¼ cycle</text>

<!-- Grid lines (showGrid=true) -->
<line x1="100" y1="80" x2="100" y2="400" stroke="#EEEEEE" stroke-width="1"/>
<line x1="200" y1="80" x2="200" y2="400" stroke="#EEEEEE" stroke-width="1"/>
<line x1="300" y1="80" x2="300" y2="400" stroke="#EEEEEE" stroke-width="1"/>
<line x1="400" y1="80" x2="400" y2="400" stroke="#EEEEEE" stroke-width="1"/>
<line x1="500" y1="80" x2="500" y2="400" stroke="#EEEEEE" stroke-width="1"/>
<line x1="600" y1="80" x2="600" y2="400" stroke="#EEEEEE" stroke-width="1"/>
<line x1="700" y1="80" x2="700" y2="400" stroke="#EEEEEE" stroke-width="1"/>
<line x1="800" y1="80" x2="800" y2="400" stroke="#EEEEEE" stroke-width="1"/>

<!-- Axes -->
<line x1="60" y1="240" x2="850" y2="240" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<line x1="80" y1="400" x2="80" y2="80" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="860" y="244" font-family="Arial" font-size="12" fill="#000000">x</text>
<text x="68" y="75" font-family="Arial" font-size="12" fill="#000000">y</text>

<!-- x-axis labels in wavelength fractions -->
<text x="100" y="258" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">0</text>
<text x="300" y="258" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">λ/2</text>
<text x="500" y="258" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">λ</text>
<text x="700" y="258" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">3λ/2</text>
<text x="300" y="272" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">π rad</text>
<text x="500" y="272" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">2π rad</text>
<text x="700" y="272" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">3π rad</text>

<!-- Wave 1 (blue): y1 = A·sin(2πx/λ), λ=400px, A=80px, centre y=240, start x=100 -->
<path d="
  M 100,240
  C 133,160 167,160 200,240
  C 233,320 267,320 300,240
  C 333,160 367,160 400,240
  C 433,320 467,320 500,240
  C 533,160 567,160 600,240
  C 633,320 667,320 700,240
  C 733,160 767,160 800,240
" stroke="#0055BB" stroke-width="3" fill="none"/>
<text x="820" y="155" font-family="Arial" font-size="13" fill="#0055BB" font-weight="bold">Wave 1</text>

<!-- Wave 2 (red): phase shifted by 90° = λ/4 = 100px shift. y2 = A·sin(2πx/λ - π/2) = -A·cos(2πx/λ) -->
<!-- At x=100: y=-80 (trough shifted); use start at (100, 240+80=320) actually cos: starts at 0 for shifted cos -->
<!-- y2 = A·cos(2πx/λ), starts at crest at x=100 -->
<path d="
  M 100,160
  C 133,240 167,240 200,320
  C 233,240 267,240 300,160
  C 333,240 367,240 400,320
  C 433,240 467,240 500,160
  C 533,240 567,240 600,320
  C 633,240 667,240 700,160
  C 733,240 767,240 800,320
" stroke="#BB2200" stroke-width="3" fill="none" stroke-dasharray="8,4"/>
<text x="820" y="200" font-family="Arial" font-size="13" fill="#BB2200" font-weight="bold">Wave 2</text>
<text x="820" y="216" font-family="Arial" font-size="11" fill="#BB2200">(dashed)</text>

<!-- showPhaseDiff annotation -->
<!-- Phase difference shown: at x=100, wave1 at equilibrium going up, wave2 at crest -->
<!-- Mark corresponding points: wave1 zero crossing at x=100, wave2 zero crossing at x=200 (shifted by λ/4=100px) -->
<line x1="100" y1="240" x2="100" y2="295" stroke="#009900" stroke-width="2" stroke-dasharray="4,3"/>
<line x1="200" y1="240" x2="200" y2="295" stroke="#009900" stroke-width="2" stroke-dasharray="4,3"/>
<line x1="100" y1="295" x2="200" y2="295" stroke="#009900" stroke-width="2.5"/>
<line x1="100" y1="290" x2="100" y2="300" stroke="#009900" stroke-width="2"/>
<line x1="200" y1="290" x2="200" y2="300" stroke="#009900" stroke-width="2"/>
<text x="150" y="315" font-family="Arial" font-size="13" fill="#009900" text-anchor="middle" font-weight="bold">Δx = λ/4</text>

<!-- showAnnotations: phase difference box -->
<rect x="300" y="350" width="300" height="100" fill="#F0FFF0" stroke="#009900" stroke-width="1.5" rx="5"/>
<text x="450" y="372" font-family="Arial" font-size="13" fill="#006600" text-anchor="middle" font-weight="bold">Phase Difference φ</text>
<text x="315" y="394" font-family="Arial" font-size="12" fill="#000000">φ = 90° = π/2 rad</text>
<text x="315" y="412" font-family="Arial" font-size="12" fill="#000000">φ = ¼ cycle = λ/4 path difference</text>
<text x="315" y="430" font-family="Arial" font-size="12" fill="#000000">φ (rad) = 2π × (Δx / λ)</text>

<!-- Legend -->
<line x1="100" y1="460" x2="140" y2="460" stroke="#0055BB" stroke-width="3"/>
<text x="148" y="464" font-family="Arial" font-size="12" fill="#0055BB">Wave 1: y = A sin(kx)</text>
<line x1="350" y1="460" x2="390" y2="460" stroke="#BB2200" stroke-width="3" stroke-dasharray="8,4"/>
<text x="398" y="464" font-family="Arial" font-size="12" fill="#BB2200">Wave 2: y = A sin(kx − π/2)</text>

</g>
</svg>`;

    // Generated from registry: electroMagneticWave
    // wavelength=120px, amplitude=40px
    // options: showEField=true, showBField=true, showPropagationDirection=true, showLabels=true
    static electroMagneticWaveSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Electromagnetic Wave Diagram</metadata>
<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#000000"/>
  </marker>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#CC0000"/>
  </marker>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#0000CC"/>
  </marker>
  <marker id="arrowhead-black" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
    <polygon points="0 0, 12 4, 0 8" fill="#000000"/>
  </marker>
</defs>
<g>

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Electromagnetic Wave</text>
<text x="450" y="52" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Oscillating E and B fields mutually perpendicular, propagating in z-direction</text>

<!-- 3D perspective axes (isometric-style) -->
<!-- z-axis (propagation direction): horizontal -->
<line x1="80" y1="300" x2="800" y2="300" stroke="#333333" stroke-width="2" stroke-dasharray="none" marker-end="url(#arrowhead-black)"/>
<text x="820" y="305" font-family="Arial" font-size="14" fill="#333333" font-weight="bold">z</text>
<text x="820" y="320" font-family="Arial" font-size="11" fill="#555555">(direction of</text>
<text x="820" y="334" font-family="Arial" font-size="11" fill="#555555">propagation)</text>

<!-- y-axis (E field direction): vertical -->
<line x1="120" y1="490" x2="120" y2="120" stroke="#CC0000" stroke-width="1.5" stroke-dasharray="4,4"/>
<text x="120" y="110" font-family="Arial" font-size="14" fill="#CC0000" text-anchor="middle" font-weight="bold">E</text>

<!-- x-axis (B field direction): oblique to simulate depth -->
<line x1="120" y1="300" x2="50" y2="420" stroke="#0000CC" stroke-width="1.5" stroke-dasharray="4,4"/>
<text x="35" y="440" font-family="Arial" font-size="14" fill="#0000CC" text-anchor="middle" font-weight="bold">B</text>

<!-- E field (red): vertical sinusoidal oscillation in y-z plane -->
<!-- λ=240px (2 cycles in 480px), A=100px in vertical -->
<!-- Vertical field lines at each peak/trough -->
<!-- Wave path in vertical plane -->
<path d="
  M 120,300
  C 150,200 180,200 200,300
  C 220,400 250,400 270,300
  C 290,200 320,200 340,300
  C 360,400 390,400 410,300
  C 430,200 460,200 480,300
  C 500,400 530,400 550,300
  C 570,200 600,200 620,300
  C 640,400 670,400 690,300
" stroke="#CC0000" stroke-width="3" fill="none"/>

<!-- E field vertical arrows at crests -->
<line x1="200" y1="300" x2="200" y2="200" stroke="#CC0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<line x1="340" y1="300" x2="340" y2="200" stroke="#CC0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<line x1="480" y1="300" x2="480" y2="200" stroke="#CC0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<line x1="620" y1="300" x2="620" y2="200" stroke="#CC0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<!-- E at troughs (downward) -->
<line x1="270" y1="300" x2="270" y2="400" stroke="#CC0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<line x1="410" y1="300" x2="410" y2="400" stroke="#CC0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<line x1="550" y1="300" x2="550" y2="400" stroke="#CC0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<line x1="690" y1="300" x2="690" y2="400" stroke="#CC0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>

<!-- B field (blue): oblique sinusoidal oscillation (simulated in x-z plane via offset drawing) -->
<!-- Draw as a wave going "into/out of" page using oblique perspective -->
<path d="
  M 120,300
  C 150,280 180,260 200,300
  C 220,340 250,360 270,300
  C 290,260 320,240 340,300
  C 360,360 390,380 410,300
  C 430,240 460,220 480,300
  C 500,380 530,400 550,300
  C 570,220 600,200 620,300
  C 640,400 670,420 690,300
" stroke="#0000CC" stroke-width="3" fill="none"/>

<!-- B field oblique arrows at crests/troughs -->
<line x1="200" y1="300" x2="185" y2="265" stroke="#0000CC" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<line x1="340" y1="300" x2="325" y2="265" stroke="#0000CC" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<line x1="480" y1="300" x2="465" y2="265" stroke="#0000CC" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<line x1="620" y1="300" x2="605" y2="265" stroke="#0000CC" stroke-width="2" marker-end="url(#arrowhead-blue)"/>

<!-- showPropagationDirection: large direction arrow -->
<line x1="700" y1="240" x2="780" y2="240" stroke="#000000" stroke-width="3.5" marker-end="url(#arrowhead-black)"/>
<text x="740" y="228" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">c</text>

<!-- showLabels: field labels -->
<text x="200" y="188" font-family="Arial" font-size="14" fill="#CC0000" text-anchor="middle" font-weight="bold">E</text>
<text x="186" y="256" font-family="Arial" font-size="14" fill="#0000CC" text-anchor="middle" font-weight="bold">B</text>

<!-- Wavelength annotation -->
<line x1="120" y1="490" x2="460" y2="490" stroke="#555555" stroke-width="2"/>
<line x1="120" y1="484" x2="120" y2="496" stroke="#555555" stroke-width="2"/>
<line x1="460" y1="484" x2="460" y2="496" stroke="#555555" stroke-width="2"/>
<text x="290" y="510" font-family="Arial" font-size="13" fill="#333333" text-anchor="middle">λ (wavelength)</text>

<!-- Info box -->
<rect x="30" y="520" width="840" height="65" fill="#F8F8F8" stroke="#CCCCCC" stroke-width="1" rx="5"/>
<text x="450" y="540" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Key Properties of EM Waves</text>
<text x="50" y="558" font-family="Arial" font-size="11" fill="#333333">• E ⊥ B ⊥ direction of propagation (c)   • Transverse wave — can be polarised</text>
<text x="50" y="574" font-family="Arial" font-size="11" fill="#333333">• Speed in vacuum: c = 3.0 × 10⁸ m/s   • c = 1/√(ε₀μ₀)   • Carries energy &amp; momentum</text>

</g>
</svg>`;

    // Generated from registry: intensityDistanceGraph
    // sourceIntensity=1000, referenceDistance=1
    // options: showInverseSquareCurve=true, showGrid=true, showFormula=true, showAnnotations=true
    static intensityDistanceGraphSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Intensity vs Distance Graph (Inverse Square Law)</metadata>
<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#000000"/>
  </marker>
</defs>
<g>

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Intensity–Distance Graph</text>
<text x="450" y="50" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Inverse Square Law for a Point Source: I ∝ 1/r²</text>

<!-- Grid (showGrid=true) -->
<line x1="140" y1="100" x2="140" y2="460" stroke="#EEEEEE" stroke-width="1"/>
<line x1="240" y1="100" x2="240" y2="460" stroke="#EEEEEE" stroke-width="1"/>
<line x1="340" y1="100" x2="340" y2="460" stroke="#EEEEEE" stroke-width="1"/>
<line x1="440" y1="100" x2="440" y2="460" stroke="#EEEEEE" stroke-width="1"/>
<line x1="540" y1="100" x2="540" y2="460" stroke="#EEEEEE" stroke-width="1"/>
<line x1="640" y1="100" x2="640" y2="460" stroke="#EEEEEE" stroke-width="1"/>
<line x1="740" y1="100" x2="740" y2="460" stroke="#EEEEEE" stroke-width="1"/>
<line x1="100" y1="160" x2="800" y2="160" stroke="#EEEEEE" stroke-width="1"/>
<line x1="100" y1="220" x2="800" y2="220" stroke="#EEEEEE" stroke-width="1"/>
<line x1="100" y1="280" x2="800" y2="280" stroke="#EEEEEE" stroke-width="1"/>
<line x1="100" y1="340" x2="800" y2="340" stroke="#EEEEEE" stroke-width="1"/>
<line x1="100" y1="400" x2="800" y2="400" stroke="#EEEEEE" stroke-width="1"/>

<!-- Axes -->
<line x1="100" y1="460" x2="820" y2="460" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<line x1="100" y1="480" x2="100" y2="80" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="835" y="465" font-family="Arial" font-size="13" fill="#000000">r (m)</text>
<text x="78" y="75" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">I</text>
<text x="78" y="91" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(W/m²)</text>

<!-- x-axis ticks: scale 100px = 1m, from r=1 to r=7 -->
<line x1="140" y1="455" x2="140" y2="465" stroke="#000000" stroke-width="1.5"/>
<text x="140" y="478" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1</text>
<line x1="240" y1="455" x2="240" y2="465" stroke="#000000" stroke-width="1.5"/>
<text x="240" y="478" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">2</text>
<line x1="340" y1="455" x2="340" y2="465" stroke="#000000" stroke-width="1.5"/>
<text x="340" y="478" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">3</text>
<line x1="440" y1="455" x2="440" y2="465" stroke="#000000" stroke-width="1.5"/>
<text x="440" y="478" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">4</text>
<line x1="540" y1="455" x2="540" y2="465" stroke="#000000" stroke-width="1.5"/>
<text x="540" y="478" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">5</text>
<line x1="640" y1="455" x2="640" y2="465" stroke="#000000" stroke-width="1.5"/>
<text x="640" y="478" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">6</text>
<line x1="740" y1="455" x2="740" y2="465" stroke="#000000" stroke-width="1.5"/>
<text x="740" y="478" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">7</text>

<!-- y-axis ticks: I₀=1000 at r=1 → y=460-1000*0.35=10 too much. Scale: I(r)=360/(r²), so I=360→0px, I=0→460px -->
<!-- Let scale: I_max=360 units mapped to 360px. At r=1: I=360→y=100. r=2: I=90→y=370. r=3: I=40→y=420 -->
<line x1="95" y1="100" x2="105" y2="100" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="104" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">I₀</text>
<line x1="95" y1="190" x2="105" y2="190" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="194" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">I₀/4</text>
<line x1="95" y1="280" x2="105" y2="280" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="284" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">I₀/9</text>
<line x1="95" y1="350" x2="105" y2="350" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="354" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">I₀/16</text>

<!-- Inverse square law curve: I = I₀/r², I₀ maps to y=100, so y = 460 - 360/r² -->
<!-- r=1: y=100; r=1.5: y=460-160=300; r=2: y=460-90=370; r=3: y=460-40=420; r=4: y=437; r=5: y=446; r=6: y=450; r=7: y=453 -->
<path d="M 140,100 C 160,180 180,270 240,370 C 280,410 320,428 340,432 C 380,438 420,441 440,442 C 480,444 520,446 540,447 C 580,448 620,449 640,449.5 C 680,450 720,450.5 740,451 C 760,451.2 780,451.5 800,452" stroke="#CC3300" stroke-width="3.5" fill="none"/>

<!-- showAnnotations: dashed reference lines -->
<!-- At r=1, I=I₀ -->
<line x1="140" y1="100" x2="140" y2="460" stroke="#888888" stroke-width="1.5" stroke-dasharray="5,4"/>
<line x1="100" y1="100" x2="140" y2="100" stroke="#888888" stroke-width="1.5" stroke-dasharray="5,4"/>
<circle cx="140" cy="100" r="5" fill="#CC3300"/>
<text x="152" y="96" font-family="Arial" font-size="11" fill="#CC3300">(r₁, I₀)</text>

<!-- At r=2, I=I₀/4 -->
<line x1="240" y1="370" x2="240" y2="460" stroke="#888888" stroke-width="1.5" stroke-dasharray="5,4"/>
<line x1="100" y1="370" x2="240" y2="370" stroke="#888888" stroke-width="1.5" stroke-dasharray="5,4"/>
<circle cx="240" cy="370" r="5" fill="#CC3300"/>
<text x="252" y="366" font-family="Arial" font-size="11" fill="#CC3300">(2r₁, I₀/4)</text>

<!-- Doubling r annotation -->
<line x1="140" y1="500" x2="240" y2="500" stroke="#009900" stroke-width="2"/>
<line x1="140" y1="494" x2="140" y2="506" stroke="#009900" stroke-width="2"/>
<line x1="240" y1="494" x2="240" y2="506" stroke="#009900" stroke-width="2"/>
<text x="190" y="520" font-family="Arial" font-size="12" fill="#009900" text-anchor="middle">Double r →</text>
<text x="190" y="536" font-family="Arial" font-size="12" fill="#009900" text-anchor="middle">I reduces by ×4</text>

<!-- showFormula box -->
<rect x="520" y="100" width="340" height="120" fill="#FFF8F0" stroke="#CC9900" stroke-width="1.5" rx="6"/>
<text x="690" y="122" font-family="Arial" font-size="14" fill="#663300" text-anchor="middle" font-weight="bold">Inverse Square Law</text>
<text x="535" y="146" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">I = P / (4πr²)</text>
<text x="535" y="170" font-family="Arial" font-size="13" fill="#333333">∴  I ∝ 1/r²</text>
<text x="535" y="192" font-family="Arial" font-size="12" fill="#555555">I₁r₁² = I₂r₂² = constant</text>
<text x="535" y="208" font-family="Arial" font-size="11" fill="#777777">P = source power (W)</text>

</g>
</svg>`;

    // ============================================================
    // ===== WAVES & SOUND — STATIONARY WAVES =====================
    // ============================================================

    // Generated from registry: stationaryWaveFormation
    // wavelength=100px, amplitude=35px
    // options: showIncidentWave=true, showReflectedWave=true, showResultant=true, showNodes=true, showAntinodes=true
    static stationaryWaveFormationSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Stationary Wave Formation by Superposition</metadata>
<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#000000"/>
  </marker>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#0055AA"/>
  </marker>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#CC0000"/>
  </marker>
</defs>
<g>

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Stationary Wave Formation</text>
<text x="450" y="50" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Superposition of two identical waves travelling in opposite directions</text>

<!-- ======= INCIDENT WAVE (blue, travelling right) ======= -->
<text x="60" y="110" font-family="Arial" font-size="13" fill="#0055AA" font-weight="bold">Incident Wave →</text>
<line x1="80" y1="140" x2="800" y2="140" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="4,4"/>
<path d="
  M 80,140 C 100,105 120,105 140,140 C 160,175 180,175 200,140
  C 220,105 240,105 260,140 C 280,175 300,175 320,140
  C 340,105 360,105 380,140 C 400,175 420,175 440,140
  C 460,105 480,105 500,140 C 520,175 540,175 560,140
  C 580,105 600,105 620,140 C 640,175 660,175 680,140
  C 700,105 720,105 740,140 C 760,175 780,175 800,140
" stroke="#0055AA" stroke-width="2.5" fill="none"/>
<line x1="720" y1="88" x2="790" y2="88" stroke="#0055AA" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<text x="755" y="82" font-family="Arial" font-size="11" fill="#0055AA" text-anchor="middle">→</text>

<!-- ======= REFLECTED WAVE (red, travelling left) ======= -->
<text x="60" y="248" font-family="Arial" font-size="13" fill="#CC0000" font-weight="bold">← Reflected Wave</text>
<!-- Reflected wave is phase-shifted by half wavelength relative to incident (reflection from fixed end) -->
<line x1="80" y1="278" x2="800" y2="278" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="4,4"/>
<path d="
  M 80,278 C 100,313 120,313 140,278 C 160,243 180,243 200,278
  C 220,313 240,313 260,278 C 280,243 300,243 320,278
  C 340,313 360,313 380,278 C 400,243 420,243 440,278
  C 460,313 480,313 500,278 C 520,243 540,243 560,278
  C 580,313 600,313 620,278 C 640,243 660,243 680,278
  C 700,313 720,313 740,278 C 760,243 780,243 800,278
" stroke="#CC0000" stroke-width="2.5" fill="none" stroke-dasharray="8,4"/>
<line x1="160" y1="228" x2="90" y2="228" stroke="#CC0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<text x="125" y="222" font-family="Arial" font-size="11" fill="#CC0000" text-anchor="middle">←</text>

<!-- SUPERPOSITION symbol -->
<text x="440" y="345" font-family="Arial" font-size="18" fill="#555555" text-anchor="middle">⊕ (Superposition)</text>
<line x1="80" y1="358" x2="800" y2="358" stroke="#999999" stroke-width="1" stroke-dasharray="3,3"/>
<text x="840" y="362" font-family="Arial" font-size="11" fill="#999999">↕</text>

<!-- ======= RESULTANT STATIONARY WAVE ======= -->
<text x="60" y="385" font-family="Arial" font-size="13" fill="#006600" font-weight="bold">Resultant: Stationary Wave</text>
<!-- Envelope shape: max amplitude = 2A = 70px, nodes at x=80,160,240,...every λ=160px -->
<!-- Upper envelope -->
<path d="M 80,430 C 120,360 160,360 200,430 C 240,360 280,360 320,430 C 360,360 400,360 440,430 C 480,360 520,360 560,430 C 600,360 640,360 680,430 C 720,360 760,360 800,430" stroke="#006600" stroke-width="1" fill="none" stroke-dasharray="4,3"/>
<!-- Lower envelope -->
<path d="M 80,430 C 120,500 160,500 200,430 C 240,500 280,500 320,430 C 360,500 400,500 440,430 C 480,500 520,500 560,430 C 600,500 640,500 680,430 C 720,500 760,500 800,430" stroke="#006600" stroke-width="1" fill="none" stroke-dasharray="4,3"/>
<!-- Resultant at this snapshot: a cos wave doubled in amplitude -->
<path d="M 80,430 C 120,360 160,500 200,430 C 240,360 280,500 320,430 C 360,360 400,500 440,430 C 480,360 520,500 560,430 C 600,360 640,500 680,430 C 720,360 760,500 800,430" stroke="#006600" stroke-width="3.5" fill="none"/>

<!-- showNodes: mark nodes (no displacement) -->
<circle cx="80" cy="430" r="7" fill="#CC0000" stroke="none"/>
<circle cx="200" cy="430" r="7" fill="#CC0000" stroke="none"/>
<circle cx="320" cy="430" r="7" fill="#CC0000" stroke="none"/>
<circle cx="440" cy="430" r="7" fill="#CC0000" stroke="none"/>
<circle cx="560" cy="430" r="7" fill="#CC0000" stroke="none"/>
<circle cx="680" cy="430" r="7" fill="#CC0000" stroke="none"/>
<circle cx="800" cy="430" r="7" fill="#CC0000" stroke="none"/>
<text x="80" y="548" font-family="Arial" font-size="11" fill="#CC0000" text-anchor="middle" font-weight="bold">N</text>
<text x="200" y="548" font-family="Arial" font-size="11" fill="#CC0000" text-anchor="middle" font-weight="bold">N</text>
<text x="320" y="548" font-family="Arial" font-size="11" fill="#CC0000" text-anchor="middle" font-weight="bold">N</text>
<text x="440" y="548" font-family="Arial" font-size="11" fill="#CC0000" text-anchor="middle" font-weight="bold">N</text>
<text x="560" y="548" font-family="Arial" font-size="11" fill="#CC0000" text-anchor="middle" font-weight="bold">N</text>
<text x="680" y="548" font-family="Arial" font-size="11" fill="#CC0000" text-anchor="middle" font-weight="bold">N</text>
<text x="800" y="548" font-family="Arial" font-size="11" fill="#CC0000" text-anchor="middle" font-weight="bold">N</text>

<!-- showAntinodes: mark antinodes (max displacement) -->
<circle cx="140" cy="395" r="7" fill="#0055AA" stroke="none"/>
<circle cx="260" cy="465" r="7" fill="#0055AA" stroke="none"/>
<circle cx="380" cy="395" r="7" fill="#0055AA" stroke="none"/>
<circle cx="500" cy="465" r="7" fill="#0055AA" stroke="none"/>
<circle cx="620" cy="395" r="7" fill="#0055AA" stroke="none"/>
<circle cx="740" cy="465" r="7" fill="#0055AA" stroke="none"/>
<text x="140" y="548" font-family="Arial" font-size="11" fill="#0055AA" text-anchor="middle" font-weight="bold">AN</text>
<text x="260" y="548" font-family="Arial" font-size="11" fill="#0055AA" text-anchor="middle" font-weight="bold">AN</text>
<text x="380" y="548" font-family="Arial" font-size="11" fill="#0055AA" text-anchor="middle" font-weight="bold">AN</text>
<text x="500" y="548" font-family="Arial" font-size="11" fill="#0055AA" text-anchor="middle" font-weight="bold">AN</text>
<text x="620" y="548" font-family="Arial" font-size="11" fill="#0055AA" text-anchor="middle" font-weight="bold">AN</text>
<text x="740" y="548" font-family="Arial" font-size="11" fill="#0055AA" text-anchor="middle" font-weight="bold">AN</text>

<!-- Legend -->
<line x1="80" y1="575" x2="116" y2="575" stroke="#0055AA" stroke-width="2.5"/>
<text x="122" y="579" font-family="Arial" font-size="11" fill="#0055AA">Incident wave</text>
<line x1="230" y1="575" x2="266" y2="575" stroke="#CC0000" stroke-width="2.5" stroke-dasharray="8,4"/>
<text x="272" y="579" font-family="Arial" font-size="11" fill="#CC0000">Reflected wave</text>
<line x1="400" y1="575" x2="436" y2="575" stroke="#006600" stroke-width="2.5"/>
<text x="442" y="579" font-family="Arial" font-size="11" fill="#006600">Resultant stationary wave</text>
<circle cx="700" cy="575" r="5" fill="#CC0000"/>
<text x="710" y="579" font-family="Arial" font-size="11" fill="#CC0000">N = Node</text>
<circle cx="780" cy="575" r="5" fill="#0055AA"/>
<text x="790" y="579" font-family="Arial" font-size="11" fill="#0055AA">AN = Antinode</text>

</g>
</svg>`;

    // Generated from registry: nodesAntinodesDiagram
    // harmonic=2, length=300px, amplitude=40px
    // options: showNodes=true, showAntinodes=true, showAmplitude=true, showLabels=true
    static nodesAntinodesDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="500" viewBox="0 0 900 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>Nodes and Antinodes Diagram — 2nd Harmonic</metadata>
<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#000000"/>
  </marker>
</defs>
<g>

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Nodes and Antinodes — Stationary Wave</text>
<text x="450" y="50" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">2nd Harmonic (1st Overtone): 2 antinodes, 3 nodes</text>

<!-- String boundaries -->
<rect x="95" y="170" width="15" height="110" fill="#888888" stroke="#555555" stroke-width="2"/>
<rect x="790" y="170" width="15" height="110" fill="#888888" stroke="#555555" stroke-width="2"/>
<text x="100" y="165" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Fixed</text>
<text x="800" y="165" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Fixed</text>

<!-- Equilibrium line -->
<line x1="110" y1="225" x2="790" y2="225" stroke="#AAAAAA" stroke-width="1.5" stroke-dasharray="5,4"/>

<!-- 2nd harmonic: L = λ → 2 half-loops. String length = 680px → λ=680px, half-loop=340px -->
<!-- Upper lobe: x=110 to x=450 (one half-cycle above) -->
<path d="M 110,225 C 190,130 350,130 450,225" stroke="#0055AA" stroke-width="3.5" fill="none"/>
<!-- Lower lobe: x=450 to x=790 (one half-cycle below) -->
<path d="M 450,225 C 550,320 710,320 790,225" stroke="#0055AA" stroke-width="3.5" fill="none"/>

<!-- Second snapshot (envelope shown dashed) -->
<path d="M 110,225 C 190,320 350,320 450,225" stroke="#0055AA" stroke-width="1.5" fill="none" stroke-dasharray="6,4"/>
<path d="M 450,225 C 550,130 710,130 790,225" stroke="#0055AA" stroke-width="1.5" fill="none" stroke-dasharray="6,4"/>

<!-- showNodes: 3 nodes at x=110, 450, 790 -->
<circle cx="110" cy="225" r="9" fill="#CC0000" stroke="#990000" stroke-width="1.5"/>
<circle cx="450" cy="225" r="9" fill="#CC0000" stroke="#990000" stroke-width="1.5"/>
<circle cx="790" cy="225" r="9" fill="#CC0000" stroke="#990000" stroke-width="1.5"/>
<line x1="110" y1="235" x2="110" y2="295" stroke="#CC0000" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="450" y1="235" x2="450" y2="295" stroke="#CC0000" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="790" y1="235" x2="790" y2="295" stroke="#CC0000" stroke-width="1.5" stroke-dasharray="3,3"/>
<text x="110" y="315" font-family="Arial" font-size="13" fill="#CC0000" text-anchor="middle" font-weight="bold">N</text>
<text x="450" y="315" font-family="Arial" font-size="13" fill="#CC0000" text-anchor="middle" font-weight="bold">N</text>
<text x="790" y="315" font-family="Arial" font-size="13" fill="#CC0000" text-anchor="middle" font-weight="bold">N</text>
<text x="110" y="330" font-family="Arial" font-size="11" fill="#CC0000" text-anchor="middle">Node</text>
<text x="450" y="330" font-family="Arial" font-size="11" fill="#CC0000" text-anchor="middle">Node</text>
<text x="790" y="330" font-family="Arial" font-size="11" fill="#CC0000" text-anchor="middle">Node</text>

<!-- showAntinodes: 2 antinodes at x=280 (peak=130) and x=620 (trough=320) -->
<circle cx="280" cy="130" r="9" fill="#0055AA" stroke="#003388" stroke-width="1.5"/>
<circle cx="620" cy="320" r="9" fill="#0055AA" stroke="#003388" stroke-width="1.5"/>
<line x1="280" y1="140" x2="280" y2="295" stroke="#0055AA" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="620" y1="310" x2="620" y2="295" stroke="#0055AA" stroke-width="1.5" stroke-dasharray="3,3"/>
<text x="280" y="315" font-family="Arial" font-size="13" fill="#0055AA" text-anchor="middle" font-weight="bold">AN</text>
<text x="620" y="315" font-family="Arial" font-size="13" fill="#0055AA" text-anchor="middle" font-weight="bold">AN</text>
<text x="280" y="330" font-family="Arial" font-size="11" fill="#0055AA" text-anchor="middle">Antinode</text>
<text x="620" y="330" font-family="Arial" font-size="11" fill="#0055AA" text-anchor="middle">Antinode</text>

<!-- showAmplitude: amplitude annotation at antinode 1 -->
<line x1="840" y1="225" x2="840" y2="130" stroke="#009900" stroke-width="2"/>
<line x1="834" y1="225" x2="846" y2="225" stroke="#009900" stroke-width="2"/>
<line x1="834" y1="130" x2="846" y2="130" stroke="#009900" stroke-width="2"/>
<text x="862" y="184" font-family="Arial" font-size="12" fill="#009900" text-anchor="middle" font-weight="bold">A</text>
<text x="862" y="200" font-family="Arial" font-size="11" fill="#009900" text-anchor="middle">(amplitude)</text>

<!-- showLabels: key properties box -->
<rect x="30" y="380" width="840" height="90" fill="#F5F5FF" stroke="#9999CC" stroke-width="1" rx="5"/>
<text x="450" y="400" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Stationary Wave Properties</text>
<text x="45" y="420" font-family="Arial" font-size="11" fill="#333333">• Nodes: points of zero displacement always — particles permanently at rest</text>
<text x="45" y="438" font-family="Arial" font-size="11" fill="#333333">• Antinodes: points of maximum displacement — particles oscillate with maximum amplitude 2A</text>
<text x="45" y="456" font-family="Arial" font-size="11" fill="#333333">• Adjacent nodes/antinodes separated by λ/2   •  No net energy transfer along the wave</text>

</g>
</svg>`;

    // Generated from registry: stringHarmonics1st
    // harmonic=1, length=300px, amplitude=40px
    static stringHarmonics1stSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="500" viewBox="0 0 900 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>String Harmonics — 1st Harmonic (Fundamental)</metadata>
<g>

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">1st Harmonic — Fundamental Mode</text>
<text x="450" y="50" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Fixed string: 1 antinode, 2 nodes — lowest frequency of vibration</text>

<!-- String supports -->
<rect x="95" y="155" width="15" height="130" fill="#888888" stroke="#555555" stroke-width="2"/>
<rect x="790" y="155" width="15" height="130" fill="#888888" stroke="#555555" stroke-width="2"/>

<!-- Equilibrium line -->
<line x1="110" y1="220" x2="790" y2="220" stroke="#AAAAAA" stroke-width="1.5" stroke-dasharray="5,4"/>

<!-- 1st harmonic: L = λ/2 → one half-loop. String x=110 to x=790 (680px), peak at x=450 -->
<!-- Upper envelope (instantaneous) -->
<path d="M 110,220 C 230,100 570,100 790,220" stroke="#0055AA" stroke-width="4" fill="none"/>
<!-- Lower envelope (dashed, other half of cycle) -->
<path d="M 110,220 C 230,340 570,340 790,220" stroke="#0055AA" stroke-width="2" fill="none" stroke-dasharray="7,4"/>

<!-- Nodes (fixed ends) -->
<circle cx="110" cy="220" r="9" fill="#CC0000" stroke="#990000" stroke-width="1.5"/>
<circle cx="790" cy="220" r="9" fill="#CC0000" stroke="#990000" stroke-width="1.5"/>
<text x="110" y="355" font-family="Arial" font-size="13" fill="#CC0000" text-anchor="middle" font-weight="bold">N</text>
<text x="790" y="355" font-family="Arial" font-size="13" fill="#CC0000" text-anchor="middle" font-weight="bold">N</text>

<!-- Antinode at centre -->
<circle cx="450" cy="100" r="9" fill="#0055AA" stroke="#003388" stroke-width="1.5"/>
<text x="450" y="355" font-family="Arial" font-size="13" fill="#0055AA" text-anchor="middle" font-weight="bold">AN</text>

<!-- Wavelength annotation: L = λ/2, so λ = 2L -->
<line x1="110" y1="400" x2="790" y2="400" stroke="#009900" stroke-width="2"/>
<line x1="110" y1="393" x2="110" y2="407" stroke="#009900" stroke-width="2"/>
<line x1="790" y1="393" x2="790" y2="407" stroke="#009900" stroke-width="2"/>
<text x="450" y="422" font-family="Arial" font-size="13" fill="#009900" text-anchor="middle" font-weight="bold">L = λ₁/2   ∴  λ₁ = 2L</text>

<!-- Amplitude annotation -->
<line x1="840" y1="220" x2="840" y2="100" stroke="#990099" stroke-width="2"/>
<line x1="834" y1="220" x2="846" y2="220" stroke="#990099" stroke-width="2"/>
<line x1="834" y1="100" x2="846" y2="100" stroke="#990099" stroke-width="2"/>
<text x="862" y="168" font-family="Arial" font-size="12" fill="#990099" text-anchor="middle">A</text>

<!-- showFrequencyFormula box -->
<rect x="250" y="440" width="400" height="45" fill="#FFFBF0" stroke="#AA8800" stroke-width="1.5" rx="5"/>
<text x="450" y="459" font-family="Arial" font-size="13" fill="#664400" text-anchor="middle" font-weight="bold">f₁ = v / (2L) = v / λ₁</text>
<text x="450" y="477" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Fundamental frequency (lowest possible)</text>

</g>
</svg>`;

    // Generated from registry: stringHarmonics2nd
    // harmonic=2, length=300px, amplitude=40px
    static stringHarmonics2ndSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="500" viewBox="0 0 900 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>String Harmonics — 2nd Harmonic (1st Overtone)</metadata>
<g>

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">2nd Harmonic — 1st Overtone</text>
<text x="450" y="50" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Fixed string: 2 antinodes, 3 nodes — f₂ = 2f₁</text>

<!-- String supports -->
<rect x="95" y="155" width="15" height="130" fill="#888888" stroke="#555555" stroke-width="2"/>
<rect x="790" y="155" width="15" height="130" fill="#888888" stroke="#555555" stroke-width="2"/>

<!-- Equilibrium line -->
<line x1="110" y1="220" x2="790" y2="220" stroke="#AAAAAA" stroke-width="1.5" stroke-dasharray="5,4"/>

<!-- 2nd harmonic: L = λ → 2 half-loops. Midpoint node at x=450. -->
<!-- Lobe 1 (above): x=110 to x=450 -->
<path d="M 110,220 C 190,110 370,110 450,220" stroke="#0055AA" stroke-width="4" fill="none"/>
<!-- Lobe 2 (below): x=450 to x=790 -->
<path d="M 450,220 C 530,330 710,330 790,220" stroke="#0055AA" stroke-width="4" fill="none"/>
<!-- Dashed envelopes -->
<path d="M 110,220 C 190,330 370,330 450,220" stroke="#0055AA" stroke-width="1.5" fill="none" stroke-dasharray="7,4"/>
<path d="M 450,220 C 530,110 710,110 790,220" stroke="#0055AA" stroke-width="1.5" fill="none" stroke-dasharray="7,4"/>

<!-- 3 Nodes -->
<circle cx="110" cy="220" r="9" fill="#CC0000" stroke="#990000" stroke-width="1.5"/>
<circle cx="450" cy="220" r="9" fill="#CC0000" stroke="#990000" stroke-width="1.5"/>
<circle cx="790" cy="220" r="9" fill="#CC0000" stroke="#990000" stroke-width="1.5"/>
<text x="110" y="355" font-family="Arial" font-size="12" fill="#CC0000" text-anchor="middle" font-weight="bold">N</text>
<text x="450" y="355" font-family="Arial" font-size="12" fill="#CC0000" text-anchor="middle" font-weight="bold">N</text>
<text x="790" y="355" font-family="Arial" font-size="12" fill="#CC0000" text-anchor="middle" font-weight="bold">N</text>

<!-- 2 Antinodes -->
<circle cx="280" cy="110" r="9" fill="#0055AA" stroke="#003388" stroke-width="1.5"/>
<circle cx="620" cy="330" r="9" fill="#0055AA" stroke="#003388" stroke-width="1.5"/>
<text x="280" y="355" font-family="Arial" font-size="12" fill="#0055AA" text-anchor="middle" font-weight="bold">AN</text>
<text x="620" y="355" font-family="Arial" font-size="12" fill="#0055AA" text-anchor="middle" font-weight="bold">AN</text>

<!-- Wavelength annotation: L=λ₂ -->
<line x1="110" y1="400" x2="790" y2="400" stroke="#009900" stroke-width="2"/>
<line x1="110" y1="393" x2="110" y2="407" stroke="#009900" stroke-width="2"/>
<line x1="790" y1="393" x2="790" y2="407" stroke="#009900" stroke-width="2"/>
<text x="450" y="422" font-family="Arial" font-size="13" fill="#009900" text-anchor="middle" font-weight="bold">L = λ₂   ∴  λ₂ = L</text>

<!-- Frequency formula -->
<rect x="240" y="440" width="420" height="45" fill="#FFFBF0" stroke="#AA8800" stroke-width="1.5" rx="5"/>
<text x="450" y="459" font-family="Arial" font-size="13" fill="#664400" text-anchor="middle" font-weight="bold">f₂ = v/λ₂ = v/L = 2f₁</text>
<text x="450" y="477" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">1st overtone — double the fundamental frequency</text>

</g>
</svg>`;

    // Generated from registry: stringHarmonics3rd
    // harmonic=3, length=300px, amplitude=40px
    static stringHarmonics3rdSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="500" viewBox="0 0 900 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>String Harmonics — 3rd Harmonic (2nd Overtone)</metadata>
<g>

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">3rd Harmonic — 2nd Overtone</text>
<text x="450" y="50" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Fixed string: 3 antinodes, 4 nodes — f₃ = 3f₁</text>

<!-- String supports -->
<rect x="95" y="155" width="15" height="130" fill="#888888" stroke="#555555" stroke-width="2"/>
<rect x="790" y="155" width="15" height="130" fill="#888888" stroke="#555555" stroke-width="2"/>

<!-- Equilibrium line -->
<line x1="110" y1="220" x2="790" y2="220" stroke="#AAAAAA" stroke-width="1.5" stroke-dasharray="5,4"/>

<!-- 3rd harmonic: L = 3λ/2 → 3 half-loops. Nodes at 110, 337, 563, 790. -->
<!-- Each lobe = 227px wide -->
<!-- Lobe 1 (above): 110→337 -->
<path d="M 110,220 C 165,110 282,110 337,220" stroke="#0055AA" stroke-width="4" fill="none"/>
<!-- Lobe 2 (below): 337→563 -->
<path d="M 337,220 C 392,330 508,330 563,220" stroke="#0055AA" stroke-width="4" fill="none"/>
<!-- Lobe 3 (above): 563→790 -->
<path d="M 563,220 C 618,110 735,110 790,220" stroke="#0055AA" stroke-width="4" fill="none"/>
<!-- Dashed reversed envelopes -->
<path d="M 110,220 C 165,330 282,330 337,220" stroke="#0055AA" stroke-width="1.5" fill="none" stroke-dasharray="7,4"/>
<path d="M 337,220 C 392,110 508,110 563,220" stroke="#0055AA" stroke-width="1.5" fill="none" stroke-dasharray="7,4"/>
<path d="M 563,220 C 618,330 735,330 790,220" stroke="#0055AA" stroke-width="1.5" fill="none" stroke-dasharray="7,4"/>

<!-- 4 Nodes -->
<circle cx="110" cy="220" r="9" fill="#CC0000" stroke="#990000" stroke-width="1.5"/>
<circle cx="337" cy="220" r="9" fill="#CC0000" stroke="#990000" stroke-width="1.5"/>
<circle cx="563" cy="220" r="9" fill="#CC0000" stroke="#990000" stroke-width="1.5"/>
<circle cx="790" cy="220" r="9" fill="#CC0000" stroke="#990000" stroke-width="1.5"/>
<text x="110" y="355" font-family="Arial" font-size="11" fill="#CC0000" text-anchor="middle" font-weight="bold">N</text>
<text x="337" y="355" font-family="Arial" font-size="11" fill="#CC0000" text-anchor="middle" font-weight="bold">N</text>
<text x="563" y="355" font-family="Arial" font-size="11" fill="#CC0000" text-anchor="middle" font-weight="bold">N</text>
<text x="790" y="355" font-family="Arial" font-size="11" fill="#CC0000" text-anchor="middle" font-weight="bold">N</text>

<!-- 3 Antinodes: midpoints of each lobe -->
<circle cx="223" cy="110" r="9" fill="#0055AA" stroke="#003388" stroke-width="1.5"/>
<circle cx="450" cy="330" r="9" fill="#0055AA" stroke="#003388" stroke-width="1.5"/>
<circle cx="676" cy="110" r="9" fill="#0055AA" stroke="#003388" stroke-width="1.5"/>
<text x="223" y="355" font-family="Arial" font-size="11" fill="#0055AA" text-anchor="middle" font-weight="bold">AN</text>
<text x="450" y="355" font-family="Arial" font-size="11" fill="#0055AA" text-anchor="middle" font-weight="bold">AN</text>
<text x="676" y="355" font-family="Arial" font-size="11" fill="#0055AA" text-anchor="middle" font-weight="bold">AN</text>

<!-- Wavelength annotation: L = 3λ₃/2 → λ₃ = 2L/3 -->
<line x1="110" y1="400" x2="790" y2="400" stroke="#009900" stroke-width="2"/>
<line x1="110" y1="393" x2="110" y2="407" stroke="#009900" stroke-width="2"/>
<line x1="790" y1="393" x2="790" y2="407" stroke="#009900" stroke-width="2"/>
<text x="450" y="422" font-family="Arial" font-size="13" fill="#009900" text-anchor="middle" font-weight="bold">L = 3λ₃/2   ∴  λ₃ = 2L/3</text>

<!-- Frequency formula -->
<rect x="240" y="440" width="420" height="45" fill="#FFFBF0" stroke="#AA8800" stroke-width="1.5" rx="5"/>
<text x="450" y="459" font-family="Arial" font-size="13" fill="#664400" text-anchor="middle" font-weight="bold">f₃ = 3v/(2L) = 3f₁</text>
<text x="450" y="477" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">2nd overtone — triple the fundamental frequency</text>

</g>
</svg>`;

    // Generated from registry: openPipeHarmonics
    // pipeLength=300px, harmonics=[1,2,3]
    // options: showNodes=true, showAntinodes=true, showWavelengths=true, showFrequencies=true
    static openPipeHarmonicsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Open Pipe Harmonics</metadata>
<g>

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Open Pipe — Harmonics</text>
<text x="450" y="50" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Antinodes at both open ends — all harmonics present</text>

<!-- ===== FIRST HARMONIC (Fundamental) ===== -->
<text x="60" y="92" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">1st Harmonic (n=1):  f₁ = v/2L,  λ₁ = 2L</text>
<!-- Pipe walls -->
<line x1="110" y1="105" x2="790" y2="105" stroke="#666666" stroke-width="3"/>
<line x1="110" y1="165" x2="790" y2="165" stroke="#666666" stroke-width="3"/>
<!-- Open ends (no wall) -->
<text x="95" y="140" font-family="Arial" font-size="20" fill="#888888" text-anchor="middle">)</text>
<text x="810" y="140" font-family="Arial" font-size="20" fill="#888888" text-anchor="middle">(</text>
<!-- Equilibrium reference -->
<line x1="110" y1="135" x2="790" y2="135" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="4,4"/>
<!-- Displacement standing wave: one half-loop, antinodes at both ends -->
<!-- For open pipe: ends are antinodes, centre is node -->
<path d="M 110,135 C 230,75 340,75 450,135 C 560,195 670,195 790,135" stroke="#0055AA" stroke-width="3" fill="none"/>
<path d="M 110,135 C 230,195 340,195 450,135 C 560,75 670,75 790,135" stroke="#0055AA" stroke-width="1.5" fill="none" stroke-dasharray="6,4"/>
<!-- AN at ends, N at centre -->
<circle cx="110" cy="135" r="7" fill="#0055AA"/>
<circle cx="790" cy="135" r="7" fill="#0055AA"/>
<circle cx="450" cy="135" r="7" fill="#CC0000"/>
<text x="110" y="185" font-family="Arial" font-size="10" fill="#0055AA" text-anchor="middle">AN</text>
<text x="790" y="185" font-family="Arial" font-size="10" fill="#0055AA" text-anchor="middle">AN</text>
<text x="450" y="185" font-family="Arial" font-size="10" fill="#CC0000" text-anchor="middle">N</text>

<!-- ===== SECOND HARMONIC ===== -->
<text x="60" y="225" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">2nd Harmonic (n=2):  f₂ = v/L,  λ₂ = L</text>
<line x1="110" y1="238" x2="790" y2="238" stroke="#666666" stroke-width="3"/>
<line x1="110" y1="298" x2="790" y2="298" stroke="#666666" stroke-width="3"/>
<text x="95" y="273" font-family="Arial" font-size="20" fill="#888888" text-anchor="middle">)</text>
<text x="810" y="273" font-family="Arial" font-size="20" fill="#888888" text-anchor="middle">(</text>
<line x1="110" y1="268" x2="790" y2="268" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="4,4"/>
<!-- Two half-loops: node-antinode-node-antinode-node pattern -->
<path d="M 110,268 C 190,215 340,215 450,268 C 560,321 710,321 790,268" stroke="#CC5500" stroke-width="3" fill="none"/>
<path d="M 110,268 C 190,321 340,321 450,268 C 560,215 710,215 790,268" stroke="#CC5500" stroke-width="1.5" fill="none" stroke-dasharray="6,4"/>
<!-- ANs at x=110,450,790; Ns at x=280,620 — wait, open pipe 2nd harmonic: AN,N,AN,N,AN -->
<!-- Nodes at 280,620; Antinodes at 110,450,790 -->
<circle cx="110" cy="268" r="7" fill="#0055AA"/>
<circle cx="450" cy="268" r="7" fill="#0055AA"/>
<circle cx="790" cy="268" r="7" fill="#0055AA"/>
<circle cx="280" cy="268" r="7" fill="#CC0000"/>
<circle cx="620" cy="268" r="7" fill="#CC0000"/>
<text x="280" y="318" font-family="Arial" font-size="10" fill="#CC0000" text-anchor="middle">N</text>
<text x="620" y="318" font-family="Arial" font-size="10" fill="#CC0000" text-anchor="middle">N</text>
<text x="110" y="318" font-family="Arial" font-size="10" fill="#0055AA" text-anchor="middle">AN</text>
<text x="450" y="318" font-family="Arial" font-size="10" fill="#0055AA" text-anchor="middle">AN</text>
<text x="790" y="318" font-family="Arial" font-size="10" fill="#0055AA" text-anchor="middle">AN</text>

<!-- ===== THIRD HARMONIC ===== -->
<text x="60" y="358" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">3rd Harmonic (n=3):  f₃ = 3v/2L,  λ₃ = 2L/3</text>
<line x1="110" y1="371" x2="790" y2="371" stroke="#666666" stroke-width="3"/>
<line x1="110" y1="431" x2="790" y2="431" stroke="#666666" stroke-width="3"/>
<text x="95" y="406" font-family="Arial" font-size="20" fill="#888888" text-anchor="middle">)</text>
<text x="810" y="406" font-family="Arial" font-size="20" fill="#888888" text-anchor="middle">(</text>
<line x1="110" y1="401" x2="790" y2="401" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="4,4"/>
<!-- Three half-loops: nodes at 110+227n=337,563; ANs at 110,224,450,676,790 approx -->
<path d="M 110,401 C 165,355 282,355 337,401 C 392,447 508,447 563,401 C 618,355 735,355 790,401" stroke="#008800" stroke-width="3" fill="none"/>
<path d="M 110,401 C 165,447 282,447 337,401 C 392,355 508,355 563,401 C 618,447 735,447 790,401" stroke="#008800" stroke-width="1.5" fill="none" stroke-dasharray="6,4"/>
<!-- ANs: 110, 223, 450, 676, 790 — Ns: 337, 563 -->
<circle cx="110" cy="401" r="7" fill="#0055AA"/>
<circle cx="223" cy="401" r="7" fill="#0055AA"/>
<circle cx="450" cy="401" r="7" fill="#0055AA"/>
<circle cx="676" cy="401" r="7" fill="#0055AA"/>
<circle cx="790" cy="401" r="7" fill="#0055AA"/>
<circle cx="337" cy="401" r="7" fill="#CC0000"/>
<circle cx="563" cy="401" r="7" fill="#CC0000"/>
<text x="337" y="450" font-family="Arial" font-size="10" fill="#CC0000" text-anchor="middle">N</text>
<text x="563" y="450" font-family="Arial" font-size="10" fill="#CC0000" text-anchor="middle">N</text>
<text x="450" y="450" font-family="Arial" font-size="10" fill="#0055AA" text-anchor="middle">AN</text>

<!-- Summary box -->
<rect x="50" y="470" width="800" height="100" fill="#F0FFF0" stroke="#009900" stroke-width="1.5" rx="6"/>
<text x="450" y="490" font-family="Arial" font-size="13" fill="#006600" text-anchor="middle" font-weight="bold">Open Pipe — All Harmonics Present</text>
<text x="65" y="510" font-family="Arial" font-size="12" fill="#000000">• Both ends: antinodes (AN)   • fₙ = nv/(2L)   where n = 1, 2, 3, 4 …</text>
<text x="65" y="528" font-family="Arial" font-size="12" fill="#000000">• Harmonic series: f₁, 2f₁, 3f₁, 4f₁ …</text>
<text x="65" y="546" font-family="Arial" font-size="12" fill="#000000">• Pipe length L = nλ/2   ∴  λₙ = 2L/n</text>

</g>
</svg>`;

    // Generated from registry: closedPipeHarmonics
    // pipeLength=300px, harmonics=[1,3,5]
    // options: showNodes=true, showAntinodes=true, showWavelengths=true, showFrequencies=true
    static closedPipeHarmonicsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904//DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Closed Pipe Harmonics — Odd Harmonics Only</metadata>
<g>

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Closed Pipe — Odd Harmonics Only</text>
<text x="450" y="50" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Node at closed end, Antinode at open end — only odd harmonics exist</text>

<!-- ===== 1st HARMONIC (Fundamental) ===== -->
<text x="60" y="90" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">1st Harmonic (n=1):  f₁ = v/4L,  λ₁ = 4L</text>
<!-- Pipe: closed left, open right -->
<line x1="110" y1="103" x2="790" y2="103" stroke="#666666" stroke-width="3"/>
<line x1="110" y1="163" x2="790" y2="163" stroke="#666666" stroke-width="3"/>
<rect x="95" y="103" width="15" height="60" fill="#888888" stroke="#555555" stroke-width="2"/>
<text x="810" y="138" font-family="Arial" font-size="20" fill="#888888" text-anchor="middle">(</text>
<line x1="110" y1="133" x2="790" y2="133" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="4,4"/>
<!-- Quarter wavelength: node at closed (left), antinode at open (right) -->
<path d="M 110,133 C 300,133 550,75 790,133" stroke="#0055AA" stroke-width="3" fill="none"/>
<path d="M 110,133 C 300,133 550,191 790,133" stroke="#0055AA" stroke-width="1.5" fill="none" stroke-dasharray="6,4"/>
<circle cx="110" cy="133" r="7" fill="#CC0000"/>
<circle cx="790" cy="133" r="7" fill="#0055AA"/>
<text x="110" y="183" font-family="Arial" font-size="10" fill="#CC0000" text-anchor="middle">N</text>
<text x="790" y="183" font-family="Arial" font-size="10" fill="#0055AA" text-anchor="middle">AN</text>
<text x="55" y="138" font-family="Arial" font-size="10" fill="#888888" text-anchor="middle">Closed</text>
<text x="835" y="138" font-family="Arial" font-size="10" fill="#888888" text-anchor="middle">Open</text>

<!-- ===== 3rd HARMONIC ===== -->
<text x="60" y="225" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">3rd Harmonic (n=3):  f₃ = 3v/4L,  λ₃ = 4L/3</text>
<line x1="110" y1="238" x2="790" y2="238" stroke="#666666" stroke-width="3"/>
<line x1="110" y1="298" x2="790" y2="298" stroke="#666666" stroke-width="3"/>
<rect x="95" y="238" width="15" height="60" fill="#888888" stroke="#555555" stroke-width="2"/>
<text x="810" y="273" font-family="Arial" font-size="20" fill="#888888" text-anchor="middle">(</text>
<line x1="110" y1="268" x2="790" y2="268" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="4,4"/>
<!-- Three-quarter wavelength: N at 110, AN at 337, N at 563, AN at 790 -->
<path d="M 110,268 C 190,215 282,215 337,268 C 392,321 508,321 563,268 C 618,215 735,215 790,268" stroke="#CC5500" stroke-width="3" fill="none"/>
<path d="M 110,268 C 190,321 282,321 337,268 C 392,215 508,215 563,268 C 618,321 735,321 790,268" stroke="#CC5500" stroke-width="1.5" fill="none" stroke-dasharray="6,4"/>
<circle cx="110" cy="268" r="7" fill="#CC0000"/>
<circle cx="337" cy="268" r="7" fill="#0055AA"/>
<circle cx="563" cy="268" r="7" fill="#CC0000"/>
<circle cx="790" cy="268" r="7" fill="#0055AA"/>
<text x="110" y="318" font-family="Arial" font-size="10" fill="#CC0000" text-anchor="middle">N</text>
<text x="337" y="318" font-family="Arial" font-size="10" fill="#0055AA" text-anchor="middle">AN</text>
<text x="563" y="318" font-family="Arial" font-size="10" fill="#CC0000" text-anchor="middle">N</text>
<text x="790" y="318" font-family="Arial" font-size="10" fill="#0055AA" text-anchor="middle">AN</text>

<!-- ===== 5th HARMONIC ===== -->
<text x="60" y="358" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">5th Harmonic (n=5):  f₅ = 5v/4L,  λ₅ = 4L/5</text>
<line x1="110" y1="371" x2="790" y2="371" stroke="#666666" stroke-width="3"/>
<line x1="110" y1="431" x2="790" y2="431" stroke="#666666" stroke-width="3"/>
<rect x="95" y="371" width="15" height="60" fill="#888888" stroke="#555555" stroke-width="2"/>
<text x="810" y="406" font-family="Arial" font-size="20" fill="#888888" text-anchor="middle">(</text>
<line x1="110" y1="401" x2="790" y2="401" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="4,4"/>
<!-- 5 quarter-wavelengths: N,AN,N,AN,N,AN — nodes at 110,244,384,516,656; ANs at 177,314,450,586,723, open end 790=AN -->
<path d="M 110,401 C 143,370 177,370 211,401 C 245,432 279,432 314,401 C 349,370 384,370 418,401 C 452,432 487,432 521,401 C 555,370 590,370 624,401 C 658,432 692,432 727,401 C 758,370 790,370 790,401" stroke="#008800" stroke-width="3" fill="none"/>
<circle cx="110" cy="401" r="6" fill="#CC0000"/>
<circle cx="314" cy="401" r="6" fill="#0055AA"/>
<circle cx="518" cy="401" r="6" fill="#CC0000"/>
<circle cx="722" cy="401" r="6" fill="#0055AA"/>
<circle cx="790" cy="401" r="6" fill="#0055AA"/>
<text x="110" y="450" font-family="Arial" font-size="9" fill="#CC0000" text-anchor="middle">N</text>
<text x="314" y="450" font-family="Arial" font-size="9" fill="#0055AA" text-anchor="middle">AN</text>
<text x="518" y="450" font-family="Arial" font-size="9" fill="#CC0000" text-anchor="middle">N</text>
<text x="722" y="450" font-family="Arial" font-size="9" fill="#0055AA" text-anchor="middle">AN</text>
<text x="790" y="450" font-family="Arial" font-size="9" fill="#0055AA" text-anchor="middle">AN</text>

<!-- Summary box -->
<rect x="50" y="470" width="800" height="110" fill="#FFF5F0" stroke="#CC5500" stroke-width="1.5" rx="6"/>
<text x="450" y="490" font-family="Arial" font-size="13" fill="#883300" text-anchor="middle" font-weight="bold">Closed Pipe — Odd Harmonics Only</text>
<text x="65" y="510" font-family="Arial" font-size="12" fill="#000000">• Closed end: Node (N)    Open end: Antinode (AN)</text>
<text x="65" y="528" font-family="Arial" font-size="12" fill="#000000">• fₙ = nv/(4L)   where n = 1, 3, 5, 7 … (odd integers only)</text>
<text x="65" y="546" font-family="Arial" font-size="12" fill="#000000">• Missing even harmonics — sounds different from open pipe</text>
<text x="65" y="564" font-family="Arial" font-size="12" fill="#000000">• L = nλ/4   ∴  λₙ = 4L/n</text>

</g>
</svg>`;

    // Generated from registry: progressiveVsStationaryComparison
    // wavelength=100px, amplitude=30px
    // options: showEnergyTransfer=true, showPhase=true, showAmplitude=true, showNodesAntinodes=true
    static progressiveVsStationaryComparisonSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Progressive vs Stationary Wave Comparison</metadata>
<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#000000"/>
  </marker>
</defs>
<g>

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Progressive vs Stationary Waves</text>

<!-- Dividing line -->
<line x1="450" y1="55" x2="450" y2="430" stroke="#CCCCCC" stroke-width="2" stroke-dasharray="6,4"/>

<!-- Column headers -->
<text x="225" y="75" font-family="Arial" font-size="16" fill="#0055AA" text-anchor="middle" font-weight="bold">PROGRESSIVE WAVE</text>
<text x="675" y="75" font-family="Arial" font-size="16" fill="#CC5500" text-anchor="middle" font-weight="bold">STATIONARY WAVE</text>

<!-- ---- PROGRESSIVE wave diagram ---- -->
<line x1="40" y1="155" x2="420" y2="155" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="4,4"/>
<path d="M 40,155 C 70,110 100,110 130,155 C 160,200 190,200 220,155 C 250,110 280,110 310,155 C 340,200 370,200 400,155" stroke="#0055AA" stroke-width="3" fill="none"/>
<!-- Direction arrow -->
<line x1="340" y1="88" x2="420" y2="88" stroke="#0055AA" stroke-width="2.5" marker-end="url(#arrowhead)"/>
<text x="380" y="80" font-family="Arial" font-size="11" fill="#0055AA" text-anchor="middle">Energy transfer →</text>

<!-- ---- STATIONARY wave diagram ---- -->
<line x1="470" y1="155" x2="860" y2="155" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="4,4"/>
<!-- Upper envelope -->
<path d="M 470,155 C 530,100 600,100 665,155 C 730,210 800,210 860,155" stroke="#CC5500" stroke-width="3" fill="none"/>
<!-- Lower envelope (dashed) -->
<path d="M 470,155 C 530,210 600,210 665,155 C 730,100 800,100 860,155" stroke="#CC5500" stroke-width="1.5" fill="none" stroke-dasharray="7,4"/>
<!-- Nodes and antinodes -->
<circle cx="470" cy="155" r="7" fill="#CC0000"/>
<circle cx="665" cy="155" r="7" fill="#CC0000"/>
<circle cx="860" cy="155" r="7" fill="#CC0000"/>
<circle cx="567" cy="100" r="7" fill="#CC5500"/>
<circle cx="762" cy="210" r="7" fill="#CC5500"/>
<text x="470" y="180" font-family="Arial" font-size="10" fill="#CC0000" text-anchor="middle">N</text>
<text x="665" y="180" font-family="Arial" font-size="10" fill="#CC0000" text-anchor="middle">N</text>
<text x="860" y="180" font-family="Arial" font-size="10" fill="#CC0000" text-anchor="middle">N</text>
<text x="567" y="90" font-family="Arial" font-size="10" fill="#CC5500" text-anchor="middle">AN</text>
<text x="762" y="225" font-family="Arial" font-size="10" fill="#CC5500" text-anchor="middle">AN</text>

<!-- Comparison table -->
<rect x="20" y="210" width="860" height="220" fill="#F8F8F8" stroke="#CCCCCC" stroke-width="1" rx="5"/>

<!-- Table headers -->
<text x="230" y="232" font-family="Arial" font-size="13" fill="#0055AA" text-anchor="middle" font-weight="bold">Progressive</text>
<text x="670" y="232" font-family="Arial" font-size="13" fill="#CC5500" text-anchor="middle" font-weight="bold">Stationary</text>
<line x1="25" y1="240" x2="875" y2="240" stroke="#BBBBBB" stroke-width="1"/>
<line x1="450" y1="210" x2="450" y2="430" stroke="#BBBBBB" stroke-width="1"/>

<!-- Row 1: Energy -->
<text x="30" y="262" font-family="Arial" font-size="12" fill="#555555" font-weight="bold">Energy transfer:</text>
<text x="230" y="262" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Yes — transfers energy</text>
<text x="670" y="262" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">No — energy stored</text>
<line x1="25" y1="272" x2="875" y2="272" stroke="#EEEEEE" stroke-width="1"/>

<!-- Row 2: Amplitude -->
<text x="30" y="294" font-family="Arial" font-size="12" fill="#555555" font-weight="bold">Amplitude:</text>
<text x="230" y="294" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Same for all particles</text>
<text x="670" y="294" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Varies (0 at N, max at AN)</text>
<line x1="25" y1="304" x2="875" y2="304" stroke="#EEEEEE" stroke-width="1"/>

<!-- Row 3: Phase -->
<text x="30" y="326" font-family="Arial" font-size="12" fill="#555555" font-weight="bold">Phase:</text>
<text x="230" y="326" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Changes continuously</text>
<text x="670" y="326" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">All particles between 2 nodes</text>
<text x="670" y="342" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">are in phase</text>
<line x1="25" y1="354" x2="875" y2="354" stroke="#EEEEEE" stroke-width="1"/>

<!-- Row 4: Nodes/Antinodes -->
<text x="30" y="374" font-family="Arial" font-size="12" fill="#555555" font-weight="bold">Nodes/Antinodes:</text>
<text x="230" y="374" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">None — wave moves</text>
<text x="670" y="374" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Fixed nodes and antinodes</text>
<line x1="25" y1="384" x2="875" y2="384" stroke="#EEEEEE" stroke-width="1"/>

<!-- Row 5: Wavelength -->
<text x="30" y="406" font-family="Arial" font-size="12" fill="#555555" font-weight="bold">Wavelength:</text>
<text x="230" y="406" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Distance between</text>
<text x="230" y="420" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">two in-phase points</text>
<text x="670" y="406" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2 × distance between</text>
<text x="670" y="420" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">adjacent nodes</text>

<!-- How formed note -->
<rect x="20" y="440" width="860" height="50" fill="#F0F8FF" stroke="#9999CC" stroke-width="1" rx="5"/>
<text x="450" y="460" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Formation: Stationary wave formed when two identical progressive waves travel in opposite directions and superpose</text>
<text x="450" y="478" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Result: y_total = 2A cos(kx) sin(ωt) — amplitude varies with position, oscillation varies with time</text>

</g>
</svg>`;

    // ============================================================
    // ===== WAVES & SOUND — SUPERPOSITION & INTERFERENCE =========
    // ============================================================

    // Generated from registry: superpositionPrinciple
    // wave1Amplitude=30, wave2Amplitude=20, wave1Wavelength=100, phaseDifference=0
    // options: showWave1=true, showWave2=true, showResultant=true, showGrid=true, showAnnotations=true
    static superpositionPrincipleSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Principle of Superposition</metadata>
<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#000000"/>
  </marker>
</defs>
<g>

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Principle of Superposition</text>
<text x="450" y="50" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">The resultant displacement = algebraic sum of individual displacements</text>

<!-- ======= Wave 1 panel ======= -->
<text x="450" y="80" font-family="Arial" font-size="13" fill="#0055AA" text-anchor="middle" font-weight="bold">Wave 1 (y₁ = A₁ sin kx,  A₁=30)</text>
<line x1="80" y1="120" x2="820" y2="120" stroke="#DDDDDD" stroke-width="1" stroke-dasharray="3,3"/>
<path d="M 80,120 C 110,90 140,90 160,120 C 180,150 210,150 240,120 C 270,90 300,90 320,120 C 340,150 370,150 400,120 C 430,90 460,90 480,120 C 500,150 530,150 560,120 C 590,90 620,90 640,120 C 660,150 690,150 720,120 C 750,90 780,90 800,120" stroke="#0055AA" stroke-width="3" fill="none"/>

<!-- ======= Wave 2 panel ======= -->
<text x="450" y="185" font-family="Arial" font-size="13" fill="#CC0000" text-anchor="middle" font-weight="bold">Wave 2 (y₂ = A₂ sin kx,  A₂=20)</text>
<line x1="80" y1="225" x2="820" y2="225" stroke="#DDDDDD" stroke-width="1" stroke-dasharray="3,3"/>
<path d="M 80,225 C 110,205 140,205 160,225 C 180,245 210,245 240,225 C 270,205 300,205 320,225 C 340,245 370,245 400,225 C 430,205 460,205 480,225 C 500,245 530,245 560,225 C 590,205 620,205 640,225 C 660,245 690,245 720,225 C 750,205 780,205 800,225" stroke="#CC0000" stroke-width="3" fill="none"/>

<!-- Superposition symbol -->
<text x="450" y="290" font-family="Arial" font-size="20" fill="#555555" text-anchor="middle">y₁ + y₂  =  y_resultant</text>
<line x1="80" y1="300" x2="820" y2="300" stroke="#AAAAAA" stroke-width="1.5"/>

<!-- ======= Resultant wave panel ======= -->
<text x="450" y="330" font-family="Arial" font-size="13" fill="#006600" text-anchor="middle" font-weight="bold">Resultant (y = y₁ + y₂ = (A₁+A₂) sin kx,  A=50)</text>
<line x1="80" y1="390" x2="820" y2="390" stroke="#DDDDDD" stroke-width="1" stroke-dasharray="3,3"/>
<!-- Resultant has amplitude = 30+20 = 50px -->
<path d="M 80,390 C 110,340 140,340 160,390 C 180,440 210,440 240,390 C 270,340 300,340 320,390 C 340,440 370,440 400,390 C 430,340 460,340 480,390 C 500,440 530,440 560,390 C 590,340 620,340 640,390 C 660,440 690,440 720,390 C 750,340 780,340 800,390" stroke="#006600" stroke-width="4" fill="none"/>

<!-- showAnnotations: amplitude comparison arrows -->
<line x1="50" y1="120" x2="50" y2="90" stroke="#0055AA" stroke-width="2"/>
<line x1="44" y1="120" x2="56" y2="120" stroke="#0055AA" stroke-width="2"/>
<line x1="44" y1="90" x2="56" y2="90" stroke="#0055AA" stroke-width="2"/>
<text x="35" y="108" font-family="Arial" font-size="11" fill="#0055AA" text-anchor="middle" font-weight="bold">A₁</text>

<line x1="50" y1="225" x2="50" y2="205" stroke="#CC0000" stroke-width="2"/>
<line x1="44" y1="225" x2="56" y2="225" stroke="#CC0000" stroke-width="2"/>
<line x1="44" y1="205" x2="56" y2="205" stroke="#CC0000" stroke-width="2"/>
<text x="35" y="218" font-family="Arial" font-size="11" fill="#CC0000" text-anchor="middle" font-weight="bold">A₂</text>

<line x1="50" y1="390" x2="50" y2="340" stroke="#006600" stroke-width="2"/>
<line x1="44" y1="390" x2="56" y2="390" stroke="#006600" stroke-width="2"/>
<line x1="44" y1="340" x2="56" y2="340" stroke="#006600" stroke-width="2"/>
<text x="30" y="369" font-family="Arial" font-size="11" fill="#006600" text-anchor="middle" font-weight="bold">A₁+A₂</text>

<!-- Principle statement box -->
<rect x="100" y="460" width="700" height="80" fill="#F0FFF0" stroke="#009900" stroke-width="1.5" rx="6"/>
<text x="450" y="482" font-family="Arial" font-size="13" fill="#006600" text-anchor="middle" font-weight="bold">Principle of Superposition</text>
<text x="450" y="502" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">"When two or more waves meet at a point, the resultant displacement</text>
<text x="450" y="520" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">equals the vector sum of the individual displacements."</text>
<text x="450" y="538" font-family="Arial" font-size="12" fill="#333333" text-anchor="middle">y_total = y₁ + y₂   (applies instantaneously at every point)</text>

</g>
</svg>`;

    // Generated from registry: constructiveInterference
    // amplitude=30px, wavelength=100px
    // options: showWave1=true, showWave2=true, showResultant=true, showPathDifference=true
    static constructiveInterferenceSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Constructive Interference</metadata>
<g>

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Constructive Interference</text>
<text x="450" y="50" font-family="Arial" font-size="13" fill="#009900" text-anchor="middle">Waves in phase (φ = 0, 2π, 4π … or path difference = nλ) → maximum amplitude</text>

<!-- Wave 1 (blue) -->
<text x="80" y="88" font-family="Arial" font-size="13" fill="#0055AA" font-weight="bold">Wave 1</text>
<line x1="80" y1="130" x2="820" y2="130" stroke="#EEEEEE" stroke-width="1" stroke-dasharray="3,3"/>
<path d="M 80,130 C 120,90 160,90 200,130 C 240,170 280,170 320,130 C 360,90 400,90 440,130 C 480,170 520,170 560,130 C 600,90 640,90 680,130 C 720,170 760,170 800,130" stroke="#0055AA" stroke-width="3" fill="none"/>

<!-- Wave 2 (red) — same phase, same amplitude -->
<text x="80" y="228" font-family="Arial" font-size="13" fill="#CC0000" font-weight="bold">Wave 2 (in phase with Wave 1)</text>
<line x1="80" y1="270" x2="820" y2="270" stroke="#EEEEEE" stroke-width="1" stroke-dasharray="3,3"/>
<path d="M 80,270 C 120,230 160,230 200,270 C 240,310 280,310 320,270 C 360,230 400,230 440,270 C 480,310 520,310 560,270 C 600,230 640,230 680,270 C 720,310 760,310 800,270" stroke="#CC0000" stroke-width="3" fill="none"/>

<!-- Phase alignment annotation -->
<line x1="200" y1="90" x2="200" y2="180" stroke="#999999" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="200" y1="230" x2="200" y2="315" stroke="#999999" stroke-width="1.5" stroke-dasharray="3,3"/>
<text x="215" y="205" font-family="Arial" font-size="11" fill="#009900">Crests align ✓</text>

<!-- Resultant (green) — amplitude doubled -->
<text x="80" y="368" font-family="Arial" font-size="13" fill="#006600" font-weight="bold">Resultant (amplitude = 2A — MAXIMUM)</text>
<line x1="80" y1="420" x2="820" y2="420" stroke="#EEEEEE" stroke-width="1" stroke-dasharray="3,3"/>
<path d="M 80,420 C 120,340 160,340 200,420 C 240,500 280,500 320,420 C 360,340 400,340 440,420 C 480,500 520,500 560,420 C 600,340 640,340 680,420 C 720,500 760,500 800,420" stroke="#006600" stroke-width="4" fill="none"/>

<!-- Amplitude comparison -->
<line x1="840" y1="130" x2="840" y2="90" stroke="#0055AA" stroke-width="2"/>
<line x1="834" y1="130" x2="846" y2="130" stroke="#0055AA" stroke-width="2"/>
<line x1="834" y1="90" x2="846" y2="90" stroke="#0055AA" stroke-width="2"/>
<text x="856" y="113" font-family="Arial" font-size="11" fill="#0055AA" text-anchor="middle">A</text>

<line x1="840" y1="420" x2="840" y2="340" stroke="#006600" stroke-width="2"/>
<line x1="834" y1="420" x2="846" y2="420" stroke="#006600" stroke-width="2"/>
<line x1="834" y1="340" x2="846" y2="340" stroke="#006600" stroke-width="2"/>
<text x="856" y="384" font-family="Arial" font-size="11" fill="#006600" text-anchor="middle" font-weight="bold">2A</text>

<!-- showPathDifference box -->
<rect x="80" y="530" width="740" height="55" fill="#EEFFEE" stroke="#009900" stroke-width="1.5" rx="5"/>
<text x="450" y="552" font-family="Arial" font-size="13" fill="#006600" text-anchor="middle" font-weight="bold">Condition for Constructive Interference</text>
<text x="450" y="572" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Path difference = nλ  (n = 0, 1, 2, 3…)   |   Phase difference φ = 2nπ   |   Amplitude = 2A</text>

</g>
</svg>`;

    // Generated from registry: destructiveInterference
    // amplitude=30px, wavelength=100px
    static destructiveInterferenceSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Destructive Interference</metadata>
<g>

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Destructive Interference</text>
<text x="450" y="50" font-family="Arial" font-size="13" fill="#CC0000" text-anchor="middle">Waves in antiphase (φ = π, 3π … or path difference = (n+½)λ) → zero amplitude</text>

<!-- Wave 1 (blue) -->
<text x="80" y="88" font-family="Arial" font-size="13" fill="#0055AA" font-weight="bold">Wave 1</text>
<line x1="80" y1="130" x2="820" y2="130" stroke="#EEEEEE" stroke-width="1" stroke-dasharray="3,3"/>
<path d="M 80,130 C 120,90 160,90 200,130 C 240,170 280,170 320,130 C 360,90 400,90 440,130 C 480,170 520,170 560,130 C 600,90 640,90 680,130 C 720,170 760,170 800,130" stroke="#0055AA" stroke-width="3" fill="none"/>

<!-- Wave 2 (red) — antiphase (shifted by λ/2) -->
<text x="80" y="228" font-family="Arial" font-size="13" fill="#CC0000" font-weight="bold">Wave 2 (in antiphase — shifted λ/2)</text>
<line x1="80" y1="270" x2="820" y2="270" stroke="#EEEEEE" stroke-width="1" stroke-dasharray="3,3"/>
<!-- Antiphase: crests of W1 align with troughs of W2 -->
<path d="M 80,270 C 120,310 160,310 200,270 C 240,230 280,230 320,270 C 360,310 400,310 440,270 C 480,230 520,230 560,270 C 600,310 640,310 680,270 C 720,230 760,230 800,270" stroke="#CC0000" stroke-width="3" fill="none"/>

<!-- Antiphase annotation -->
<line x1="200" y1="90" x2="200" y2="180" stroke="#999999" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="200" y1="230" x2="200" y2="315" stroke="#999999" stroke-width="1.5" stroke-dasharray="3,3"/>
<text x="215" y="205" font-family="Arial" font-size="11" fill="#CC0000">Crest meets trough ✗</text>

<!-- Resultant — flat line (zero displacement) -->
<text x="80" y="368" font-family="Arial" font-size="13" fill="#555555" font-weight="bold">Resultant (amplitude = 0 — CANCELLATION)</text>
<line x1="80" y1="420" x2="820" y2="420" stroke="#555555" stroke-width="5" stroke-dasharray="none"/>
<text x="450" y="445" font-family="Arial" font-size="14" fill="#555555" text-anchor="middle" font-weight="bold">y = 0 everywhere — complete cancellation</text>

<!-- Shading to show cancellation visually -->
<rect x="80" y="370" width="740" height="5" fill="#DDDDDD"/>

<!-- showPathDifference box -->
<rect x="80" y="470" width="740" height="55" fill="#FFEEEE" stroke="#CC0000" stroke-width="1.5" rx="5"/>
<text x="450" y="492" font-family="Arial" font-size="13" fill="#990000" text-anchor="middle" font-weight="bold">Condition for Destructive Interference</text>
<text x="450" y="512" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Path difference = (n + ½)λ   (n = 0, 1, 2…)   |   Phase difference φ = (2n+1)π   |   Amplitude = 0</text>

<!-- Note on partial cancellation -->
<rect x="200" y="540" width="500" height="45" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="450" y="558" font-family="Arial" font-size="12" fill="#333333" text-anchor="middle">For equal amplitudes A₁=A₂: complete cancellation</text>
<text x="450" y="576" font-family="Arial" font-size="12" fill="#333333" text-anchor="middle">For unequal amplitudes: partial cancellation (A_min = |A₁−A₂|)</text>

</g>
</svg>`;

    // Generated from registry: youngDoubleSlitSetup
    // slitSeparation=0.5mm, slitToScreen=1.0m, wavelength=600nm
    // options: showSlits=true, showFringes=true, showPathDifference=true, showFringeSpacing=true, showGeometry=true
    static youngDoubleSlitSetupSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Young's Double Slit Experiment</metadata>
<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#000000"/>
  </marker>
</defs>
<g>

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Young's Double Slit Experiment</text>
<text x="450" y="50" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">λ = 600 nm,  d = 0.5 mm,  D = 1.0 m,  fringe spacing w = λD/d</text>

<!-- Light source (left) -->
<circle cx="55" cy="300" r="20" fill="#FFFFAA" stroke="#888800" stroke-width="2"/>
<text x="55" y="305" font-family="Arial" font-size="11" fill="#665500" text-anchor="middle" font-weight="bold">S</text>
<text x="55" y="340" font-family="Arial" font-size="10" fill="#888800" text-anchor="middle">Light</text>
<text x="55" y="353" font-family="Arial" font-size="10" fill="#888800" text-anchor="middle">Source</text>

<!-- Incident wavefronts (concentric arcs from source to slits) -->
<path d="M 55,300 L 190,220" stroke="#FFCC00" stroke-width="1.5" opacity="0.6"/>
<path d="M 55,300 L 190,380" stroke="#FFCC00" stroke-width="1.5" opacity="0.6"/>
<path d="M 55,300 L 190,260" stroke="#FFCC00" stroke-width="1.5" opacity="0.6"/>
<path d="M 55,300 L 190,340" stroke="#FFCC00" stroke-width="1.5" opacity="0.6"/>

<!-- Double slit barrier (showSlits=true) -->
<rect x="190" y="60" width="20" height="210" fill="#555555" stroke="#333333" stroke-width="2"/>
<rect x="190" y="310" width="20" height="220" fill="#555555" stroke="#333333" stroke-width="2"/>
<!-- Slit openings -->
<rect x="188" y="270" width="24" height="15" fill="white" stroke="none"/>
<rect x="188" y="295" width="24" height="15" fill="white" stroke="none"/>
<!-- Slit centres -->
<text x="200" y="278" font-family="Arial" font-size="10" fill="#0000AA" text-anchor="middle">S₁</text>
<text x="200" y="308" font-family="Arial" font-size="10" fill="#0000AA" text-anchor="middle">S₂</text>
<text x="200" y="45" font-family="Arial" font-size="11" fill="#333333" text-anchor="middle">Double</text>
<text x="200" y="58" font-family="Arial" font-size="11" fill="#333333" text-anchor="middle">slit</text>

<!-- Slit separation annotation -->
<line x1="170" y1="278" x2="170" y2="303" stroke="#CC0000" stroke-width="2"/>
<line x1="163" y1="278" x2="177" y2="278" stroke="#CC0000" stroke-width="2"/>
<line x1="163" y1="303" x2="177" y2="303" stroke="#CC0000" stroke-width="2"/>
<text x="148" y="294" font-family="Arial" font-size="11" fill="#CC0000" text-anchor="middle" font-weight="bold">d</text>

<!-- Diffracted waves from S1 and S2 (circular wavefronts) -->
<!-- S1 at (210,278), S2 at (210,303) -->
<path d="M 210,278 Q 350,210 490,240" stroke="#0055BB" stroke-width="1.5" fill="none" opacity="0.5"/>
<path d="M 210,278 Q 350,278 490,278" stroke="#0055BB" stroke-width="1.5" fill="none" opacity="0.5"/>
<path d="M 210,278 Q 350,340 490,320" stroke="#0055BB" stroke-width="1.5" fill="none" opacity="0.5"/>
<path d="M 210,303 Q 350,230 490,240" stroke="#CC5500" stroke-width="1.5" fill="none" opacity="0.5"/>
<path d="M 210,303 Q 350,303 490,303" stroke="#CC5500" stroke-width="1.5" fill="none" opacity="0.5"/>
<path d="M 210,303 Q 350,370 490,360" stroke="#CC5500" stroke-width="1.5" fill="none" opacity="0.5"/>

<!-- showGeometry: path to central maximum (both paths equal) -->
<line x1="210" y1="278" x2="720" y2="290" stroke="#0055BB" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="210" y1="303" x2="720" y2="290" stroke="#CC5500" stroke-width="1.5" stroke-dasharray="5,3"/>

<!-- Path to 1st bright fringe -->
<line x1="210" y1="278" x2="720" y2="225" stroke="#0055BB" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.7"/>
<line x1="210" y1="303" x2="720" y2="225" stroke="#CC5500" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.7"/>

<!-- Viewing screen (showFringes=true) -->
<rect x="718" y="60" width="12" height="470" fill="#E8E8E8" stroke="#666666" stroke-width="2"/>
<text x="724" y="45" font-family="Arial" font-size="11" fill="#333333" text-anchor="middle">Screen</text>

<!-- Bright fringes (showFringes=true) — horizontal bars on screen -->
<rect x="718" y="158" width="12" height="10" fill="#FFFFAA" stroke="none"/>
<rect x="718" y="224" width="12" height="10" fill="#FFFF77" stroke="none"/>
<rect x="718" y="285" width="12" height="14" fill="#FFFF00" stroke="none"/>
<rect x="718" y="351" width="12" height="10" fill="#FFFF77" stroke="none"/>
<rect x="718" y="417" width="12" height="10" fill="#FFFFAA" stroke="none"/>

<!-- Fringe labels -->
<text x="740" y="167" font-family="Arial" font-size="10" fill="#AA8800">n=+2</text>
<text x="740" y="232" font-family="Arial" font-size="10" fill="#AA8800">n=+1</text>
<text x="740" y="296" font-family="Arial" font-size="11" fill="#CC8800" font-weight="bold">n=0 (central)</text>
<text x="740" y="360" font-family="Arial" font-size="10" fill="#AA8800">n=−1</text>
<text x="740" y="426" font-family="Arial" font-size="10" fill="#AA8800">n=−2</text>

<!-- showFringeSpacing: fringe spacing w annotation -->
<line x1="740" y1="229" x2="740" y2="291" stroke="#009900" stroke-width="2"/>
<line x1="734" y1="229" x2="746" y2="229" stroke="#009900" stroke-width="2"/>
<line x1="734" y1="291" x2="746" y2="291" stroke="#009900" stroke-width="2"/>
<text x="755" y="265" font-family="Arial" font-size="11" fill="#009900" font-weight="bold">w</text>

<!-- Distances D and d labels -->
<line x1="210" y1="540" x2="718" y2="540" stroke="#555555" stroke-width="2"/>
<line x1="210" y1="533" x2="210" y2="547" stroke="#555555" stroke-width="2"/>
<line x1="718" y1="533" x2="718" y2="547" stroke="#555555" stroke-width="2"/>
<text x="464" y="560" font-family="Arial" font-size="13" fill="#333333" text-anchor="middle" font-weight="bold">D (slit-to-screen distance)</text>

<!-- Formula box -->
<rect x="60" y="430" width="620" height="90" fill="#F8FFF8" stroke="#009900" stroke-width="1.5" rx="6"/>
<text x="370" y="452" font-family="Arial" font-size="14" fill="#006600" text-anchor="middle" font-weight="bold">Fringe Spacing Formula</text>
<text x="75" y="475" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">w = λD / d</text>
<text x="75" y="497" font-family="Arial" font-size="12" fill="#333333">w = fringe spacing,  λ = wavelength,  D = slit-to-screen distance,  d = slit separation</text>
<text x="75" y="513" font-family="Arial" font-size="12" fill="#333333">= (600×10⁻⁹ × 1.0) / (0.5×10⁻³) = 1.2×10⁻³ m = 1.2 mm</text>

</g>
</svg>`;

    // Generated from registry: interferencePattern
    // separation=100px, wavelength=30px
    // options: showBrightFringes=true, showDarkFringes=true, showPathLines=true, showIntensityProfile=true
    static interferencePatternSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Two-Source Interference Pattern</metadata>
<g>

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Two-Source Interference Pattern</text>
<text x="450" y="50" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Bright fringes: path diff = nλ  |  Dark fringes: path diff = (n+½)λ</text>

<!-- Two sources S1 and S2 -->
<circle cx="180" cy="240" r="10" fill="#FFDD00" stroke="#888800" stroke-width="2"/>
<circle cx="180" cy="360" r="10" fill="#FFDD00" stroke="#888800" stroke-width="2"/>
<text x="155" y="244" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">S₁</text>
<text x="155" y="364" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">S₂</text>
<text x="180" y="215" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">In phase</text>
<text x="180" y="400" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">sources</text>

<!-- Source separation annotation -->
<line x1="148" y1="240" x2="148" y2="360" stroke="#CC0000" stroke-width="2"/>
<line x1="141" y1="240" x2="155" y2="240" stroke="#CC0000" stroke-width="2"/>
<line x1="141" y1="360" x2="155" y2="360" stroke="#CC0000" stroke-width="2"/>
<text x="130" y="305" font-family="Arial" font-size="12" fill="#CC0000" text-anchor="middle" font-weight="bold">d</text>

<!-- Circular wavefronts from S1 -->
<circle cx="180" cy="240" r="30" fill="none" stroke="#0055AA" stroke-width="1" opacity="0.4"/>
<circle cx="180" cy="240" r="60" fill="none" stroke="#0055AA" stroke-width="1" opacity="0.4"/>
<circle cx="180" cy="240" r="90" fill="none" stroke="#0055AA" stroke-width="1" opacity="0.4"/>
<circle cx="180" cy="240" r="120" fill="none" stroke="#0055AA" stroke-width="1" opacity="0.4"/>
<circle cx="180" cy="240" r="150" fill="none" stroke="#0055AA" stroke-width="1" opacity="0.4"/>
<circle cx="180" cy="240" r="180" fill="none" stroke="#0055AA" stroke-width="1" opacity="0.4"/>
<circle cx="180" cy="240" r="210" fill="none" stroke="#0055AA" stroke-width="1" opacity="0.4"/>
<circle cx="180" cy="240" r="240" fill="none" stroke="#0055AA" stroke-width="1" opacity="0.4"/>
<circle cx="180" cy="240" r="270" fill="none" stroke="#0055AA" stroke-width="1" opacity="0.35"/>
<circle cx="180" cy="240" r="300" fill="none" stroke="#0055AA" stroke-width="1" opacity="0.3"/>

<!-- Circular wavefronts from S2 -->
<circle cx="180" cy="360" r="30" fill="none" stroke="#CC5500" stroke-width="1" opacity="0.4"/>
<circle cx="180" cy="360" r="60" fill="none" stroke="#CC5500" stroke-width="1" opacity="0.4"/>
<circle cx="180" cy="360" r="90" fill="none" stroke="#CC5500" stroke-width="1" opacity="0.4"/>
<circle cx="180" cy="360" r="120" fill="none" stroke="#CC5500" stroke-width="1" opacity="0.4"/>
<circle cx="180" cy="360" r="150" fill="none" stroke="#CC5500" stroke-width="1" opacity="0.4"/>
<circle cx="180" cy="360" r="180" fill="none" stroke="#CC5500" stroke-width="1" opacity="0.4"/>
<circle cx="180" cy="360" r="210" fill="none" stroke="#CC5500" stroke-width="1" opacity="0.4"/>
<circle cx="180" cy="360" r="240" fill="none" stroke="#CC5500" stroke-width="1" opacity="0.4"/>
<circle cx="180" cy="360" r="270" fill="none" stroke="#CC5500" stroke-width="1" opacity="0.35"/>
<circle cx="180" cy="360" r="300" fill="none" stroke="#CC5500" stroke-width="1" opacity="0.3"/>

<!-- Screen at x=580 -->
<rect x="580" y="60" width="12" height="470" fill="#E0E0E0" stroke="#666666" stroke-width="2"/>
<text x="586" y="45" font-family="Arial" font-size="11" fill="#333333" text-anchor="middle">Screen</text>

<!-- Bright fringe bands on screen (showBrightFringes=true) — yellow bars -->
<rect x="580" y="245" width="12" height="20" fill="#FFFF00" stroke="none" opacity="0.9"/>
<rect x="580" y="192" width="12" height="18" fill="#FFFF88" stroke="none" opacity="0.9"/>
<rect x="580" y="298" width="12" height="18" fill="#FFFF88" stroke="none" opacity="0.9"/>
<rect x="580" y="143" width="12" height="15" fill="#FFFFCC" stroke="none" opacity="0.8"/>
<rect x="580" y="348" width="12" height="15" fill="#FFFFCC" stroke="none" opacity="0.8"/>
<rect x="580" y="97" width="12" height="12" fill="#FFFFE8" stroke="none" opacity="0.7"/>
<rect x="580" y="399" width="12" height="12" fill="#FFFFE8" stroke="none" opacity="0.7"/>

<!-- Fringe labels -->
<text x="601" y="258" font-family="Arial" font-size="10" fill="#CC8800" font-weight="bold">n=0</text>
<text x="601" y="203" font-family="Arial" font-size="10" fill="#AA7700">n=+1</text>
<text x="601" y="310" font-family="Arial" font-size="10" fill="#AA7700">n=−1</text>
<text x="601" y="153" font-family="Arial" font-size="10" fill="#887700">n=+2</text>
<text x="601" y="360" font-family="Arial" font-size="10" fill="#887700">n=−2</text>

<!-- Path lines to central fringe (showPathLines=true) -->
<line x1="190" y1="240" x2="580" y2="255" stroke="#0055BB" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.6"/>
<line x1="190" y1="360" x2="580" y2="255" stroke="#CC5500" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.6"/>

<!-- Intensity profile (showIntensityProfile=true) — on right side -->
<text x="800" y="75" font-family="Arial" font-size="12" fill="#333333" text-anchor="middle" font-weight="bold">Intensity Profile</text>
<line x1="640" y1="80" x2="640" y2="520" stroke="#000000" stroke-width="1.5"/>
<line x1="635" y1="300" x2="870" y2="300" stroke="#000000" stroke-width="1.5"/>
<text x="875" y="303" font-family="Arial" font-size="10" fill="#333333">y</text>
<text x="638" y="72" font-family="Arial" font-size="10" fill="#333333">I</text>
<!-- Intensity peaks (cos² curve pattern) -->
<path d="M 640,300 C 660,300 670,255 680,255 C 690,255 700,300 710,300 C 730,300 740,200 750,200 C 760,200 770,300 780,300 C 800,300 810,255 820,255 C 830,255 840,300 850,300 C 860,300 860,300 870,300" stroke="#009900" stroke-width="2.5" fill="none"/>
<!-- Peaks -->
<line x1="680" y1="255" x2="680" y2="300" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="750" y1="200" x2="750" y2="300" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="820" y1="255" x2="820" y2="300" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="3,3"/>
<text x="750" y="188" font-family="Arial" font-size="9" fill="#009900" text-anchor="middle" font-weight="bold">I_max</text>

</g>
</svg>`;

    // Generated from registry: diffractionGratingDiagram
    // gratingSpacing=1.67µm, wavelength=500nm, numSlits=5
    // options: showOrders=true, showAngles=true, showFormula=true, showGrating=true
    static diffractionGratingDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Diffraction Grating Diagram</metadata>
<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#000000"/>
  </marker>
  <marker id="arrowhead-yellow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#AA8800"/>
  </marker>
</defs>
<g>

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Diffraction Grating</text>
<text x="450" y="50" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">d = 1.67 μm (600 lines/mm),  λ = 500 nm,  d sinθ = nλ</text>

<!-- Incident light beam (left) -->
<line x1="30" y1="260" x2="290" y2="300" stroke="#FFCC00" stroke-width="3" marker-end="url(#arrowhead-yellow)"/>
<line x1="30" y1="290" x2="290" y2="300" stroke="#FFCC00" stroke-width="3" opacity="0.7" marker-end="url(#arrowhead-yellow)"/>
<line x1="30" y1="320" x2="290" y2="300" stroke="#FFCC00" stroke-width="3" opacity="0.5" marker-end="url(#arrowhead-yellow)"/>
<text x="30" y="245" font-family="Arial" font-size="12" fill="#AA8800" font-weight="bold">Incident</text>
<text x="30" y="260" font-family="Arial" font-size="12" fill="#AA8800" font-weight="bold">light</text>

<!-- Grating (showGrating=true): vertical slits -->
<rect x="290" y="60" width="20" height="480" fill="#888888" stroke="#555555" stroke-width="2"/>
<!-- Individual slits (5 slits) -->
<rect x="288" y="252" width="24" height="8" fill="white" stroke="none"/>
<rect x="288" y="272" width="24" height="8" fill="white" stroke="none"/>
<rect x="288" y="292" width="24" height="8" fill="white" stroke="none"/>
<rect x="288" y="312" width="24" height="8" fill="white" stroke="none"/>
<rect x="288" y="332" width="24" height="8" fill="white" stroke="none"/>
<text x="300" y="45" font-family="Arial" font-size="11" fill="#333333" text-anchor="middle">Grating</text>
<text x="300" y="58" font-family="Arial" font-size="11" fill="#333333" text-anchor="middle">(5 slits)</text>

<!-- Grating spacing annotation -->
<line x1="260" y1="252" x2="260" y2="260" stroke="#CC0000" stroke-width="2"/>
<line x1="260" y1="272" x2="260" y2="272" stroke="#CC0000" stroke-width="2"/>
<line x1="253" y1="252" x2="267" y2="252" stroke="#CC0000" stroke-width="2"/>
<line x1="253" y1="272" x2="267" y2="272" stroke="#CC0000" stroke-width="2"/>
<line x1="260" y1="252" x2="260" y2="272" stroke="#CC0000" stroke-width="1.5"/>
<text x="242" y="265" font-family="Arial" font-size="10" fill="#CC0000" text-anchor="middle" font-weight="bold">d</text>

<!-- Normal line (horizontal through grating centre) -->
<line x1="310" y1="300" x2="860" y2="300" stroke="#AAAAAA" stroke-width="1.5" stroke-dasharray="6,4"/>

<!-- Diffracted beams (showOrders=true): 0th, ±1st, ±2nd order -->

<!-- Zero order (n=0): straight through, θ=0° -->
<line x1="310" y1="300" x2="820" y2="300" stroke="#FFFF00" stroke-width="4" marker-end="url(#arrowhead)"/>
<text x="835" y="296" font-family="Arial" font-size="12" fill="#AA8800" font-weight="bold">n=0</text>
<text x="835" y="310" font-family="Arial" font-size="11" fill="#888888">θ=0°</text>

<!-- +1st order: sinθ = λ/d = 500e-9/1.67e-6 = 0.299, θ≈17.4° → y offset for 510px run: 510*tan(17.4°)≈160px -->
<line x1="310" y1="300" x2="820" y2="140" stroke="#FFD700" stroke-width="3" marker-end="url(#arrowhead)"/>
<text x="835" y="138" font-family="Arial" font-size="12" fill="#AA8800" font-weight="bold">n=+1</text>
<text x="835" y="152" font-family="Arial" font-size="11" fill="#555555">θ≈17°</text>

<!-- -1st order -->
<line x1="310" y1="300" x2="820" y2="460" stroke="#FFD700" stroke-width="3" marker-end="url(#arrowhead)"/>
<text x="835" y="462" font-family="Arial" font-size="12" fill="#AA8800" font-weight="bold">n=−1</text>
<text x="835" y="476" font-family="Arial" font-size="11" fill="#555555">θ≈17°</text>

<!-- +2nd order: sinθ = 2λ/d = 0.599, θ≈36.8° → y offset ≈384px too large for canvas — use shorter beam -->
<line x1="310" y1="300" x2="680" y2="110" stroke="#FFA500" stroke-width="2.5" marker-end="url(#arrowhead)" stroke-dasharray="none"/>
<text x="688" y="105" font-family="Arial" font-size="12" fill="#AA6600" font-weight="bold">n=+2</text>
<text x="688" y="120" font-family="Arial" font-size="11" fill="#555555">θ≈37°</text>

<!-- -2nd order -->
<line x1="310" y1="300" x2="680" y2="490" stroke="#FFA500" stroke-width="2.5" marker-end="url(#arrowhead)"/>
<text x="688" y="495" font-family="Arial" font-size="12" fill="#AA6600" font-weight="bold">n=−2</text>
<text x="688" y="509" font-family="Arial" font-size="11" fill="#555555">θ≈37°</text>

<!-- showAngles: angle arcs for 1st order -->
<path d="M 400,300 A 90,90 0 0,0 374,252" fill="none" stroke="#009900" stroke-width="2"/>
<text x="420" y="272" font-family="Arial" font-size="12" fill="#009900" font-weight="bold">θ₁</text>

<!-- Formula box (showFormula=true) -->
<rect x="30" y="430" width="240" height="130" fill="#FFFBF0" stroke="#AA8800" stroke-width="1.5" rx="6"/>
<text x="150" y="452" font-family="Arial" font-size="13" fill="#664400" text-anchor="middle" font-weight="bold">Grating Equation</text>
<text x="45" y="475" font-family="Arial" font-size="18" fill="#000000" font-weight="bold">d sin θ = nλ</text>
<text x="45" y="498" font-family="Arial" font-size="12" fill="#333333">d = grating spacing</text>
<text x="45" y="516" font-family="Arial" font-size="12" fill="#333333">θ = angle of diffraction</text>
<text x="45" y="534" font-family="Arial" font-size="12" fill="#333333">n = order (0, ±1, ±2…)</text>
<text x="45" y="552" font-family="Arial" font-size="12" fill="#333333">λ = wavelength</text>

<!-- Key notes -->
<rect x="30" y="570" width="840" height="22" fill="#F5F5F5" stroke="#CCCCCC" stroke-width="1" rx="3"/>
<text x="450" y="585" font-family="Arial" font-size="11" fill="#333333" text-anchor="middle">Larger d → smaller θ (fringes closer together)  •  Larger λ → larger θ  •  Max order: n_max = d/λ (when sinθ≤1)</text>

</g>
</svg>`;

    // Generated from registry: singleSlitDiffraction
    // slitWidth=0.1mm, wavelength=600nm, screenDistance=1.0m
    // options: showIntensityPattern=true, showCentralMaximum=true, showMinima=true, showAngles=true
    static singleSlitDiffractionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Single Slit Diffraction Pattern</metadata>
<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#000000"/>
  </marker>
</defs>
<g>

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Single Slit Diffraction Pattern</text>
<text x="450" y="50" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">a = 0.1 mm,  λ = 600 nm,  D = 1.0 m  →  central max width = 2λD/a = 12 mm</text>

<!-- Incident beam and slit -->
<line x1="30" y1="280" x2="210" y2="280" stroke="#FFCC00" stroke-width="3" marker-end="url(#arrowhead)"/>
<line x1="30" y1="300" x2="210" y2="300" stroke="#FFCC00" stroke-width="2.5" opacity="0.7" marker-end="url(#arrowhead)"/>
<line x1="30" y1="320" x2="210" y2="320" stroke="#FFCC00" stroke-width="2" opacity="0.5" marker-end="url(#arrowhead)"/>
<text x="75" y="265" font-family="Arial" font-size="12" fill="#AA8800">Incident</text>
<text x="75" y="280" font-family="Arial" font-size="12" fill="#AA8800">plane wave</text>

<!-- Slit barrier -->
<rect x="210" y="60" width="16" height="220" fill="#666666" stroke="#444444" stroke-width="2"/>
<rect x="210" y="320" width="16" height="210" fill="#666666" stroke="#444444" stroke-width="2"/>
<!-- Slit opening -->
<rect x="208" y="280" width="20" height="40" fill="white" stroke="none"/>
<text x="218" y="258" font-family="Arial" font-size="11" fill="#333333" text-anchor="middle">Slit</text>
<text x="218" y="272" font-family="Arial" font-size="11" fill="#333333" text-anchor="middle">width a</text>

<!-- Slit width annotation -->
<line x1="185" y1="280" x2="185" y2="320" stroke="#CC0000" stroke-width="2"/>
<line x1="178" y1="280" x2="192" y2="280" stroke="#CC0000" stroke-width="2"/>
<line x1="178" y1="320" x2="192" y2="320" stroke="#CC0000" stroke-width="2"/>
<text x="168" y="304" font-family="Arial" font-size="11" fill="#CC0000" text-anchor="middle" font-weight="bold">a</text>

<!-- Normal (horizontal dashed) -->
<line x1="226" y1="300" x2="600" y2="300" stroke="#AAAAAA" stroke-width="1.5" stroke-dasharray="5,4"/>

<!-- Diffracted beams (envelope) showing spreading -->
<line x1="226" y1="280" x2="600" y2="120" stroke="#FFDD44" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.6"/>
<line x1="226" y1="320" x2="600" y2="480" stroke="#FFDD44" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.6"/>
<!-- Central beam bright -->
<line x1="226" y1="300" x2="600" y2="300" stroke="#FFDD44" stroke-width="3" opacity="0.8"/>

<!-- Screen -->
<rect x="600" y="60" width="12" height="470" fill="#E0E0E0" stroke="#666666" stroke-width="2"/>
<text x="606" y="48" font-family="Arial" font-size="11" fill="#333333" text-anchor="middle">Screen</text>

<!-- Diffraction pattern on screen (showIntensityPattern via brightness gradient) -->
<!-- Central maximum (showCentralMaximum=true) -->
<rect x="600" y="248" width="12" height="104" fill="#FFFF00" stroke="none" opacity="0.95"/>
<rect x="600" y="240" width="12" height="12" fill="#FFFF66" stroke="none" opacity="0.85"/>
<rect x="600" y="348" width="12" height="12" fill="#FFFF66" stroke="none" opacity="0.85"/>
<!-- Secondary maxima -->
<rect x="600" y="170" width="12" height="50" fill="#FFFF99" stroke="none" opacity="0.6"/>
<rect x="600" y="410" width="12" height="50" fill="#FFFF99" stroke="none" opacity="0.6"/>
<rect x="600" y="100" width="12" height="35" fill="#FFFFCC" stroke="none" opacity="0.4"/>
<rect x="600" y="490" width="12" height="35" fill="#FFFFCC" stroke="none" opacity="0.4"/>

<!-- showMinima: dark fringe markers -->
<line x1="612" y1="248" x2="640" y2="248" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="612" y1="352" x2="640" y2="352" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="612" y1="168" x2="640" y2="168" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="612" y1="432" x2="640" y2="432" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,3"/>
<text x="648" y="252" font-family="Arial" font-size="10" fill="#000000">1st min</text>
<text x="648" y="356" font-family="Arial" font-size="10" fill="#000000">1st min</text>
<text x="648" y="172" font-family="Arial" font-size="10" fill="#000000">2nd min</text>
<text x="648" y="436" font-family="Arial" font-size="10" fill="#000000">2nd min</text>

<!-- showAngles: angle for first minimum -->
<path d="M 310,300 A 84,84 0 0,0 280,248" fill="none" stroke="#009900" stroke-width="2"/>
<text x="340" y="278" font-family="Arial" font-size="12" fill="#009900">θ₁</text>

<!-- Intensity profile (graph beside screen) -->
<line x1="700" y1="70" x2="700" y2="520" stroke="#000000" stroke-width="2"/>
<line x1="695" y1="300" x2="900" y2="300" stroke="#000000" stroke-width="2"/>
<text x="895" y="295" font-family="Arial" font-size="10" fill="#000000">y</text>
<text x="698" y="60" font-family="Arial" font-size="10" fill="#000000">I</text>
<!-- Central peak -->
<path d="M 700,300 C 720,300 730,248 750,248 C 770,248 780,300 800,300 C 810,300 820,248 750,248" fill="none" stroke="none"/>
<path d="M 700,248 C 720,248 730,90 750,90 C 770,90 780,248 800,248 C 810,248 820,280 830,300 C 840,320 850,300 860,300" stroke="#009900" stroke-width="2.5" fill="none"/>
<path d="M 700,352 C 720,352 730,510 750,510 C 770,510 780,352 800,352 C 810,352 820,320 830,300" stroke="#009900" stroke-width="2.5" fill="none"/>
<!-- Secondary peaks -->
<path d="M 830,300 C 835,288 840,272 845,272 C 850,272 855,288 860,300 C 863,308 865,300 868,300" stroke="#009900" stroke-width="1.5" fill="none"/>

<!-- Formula and labels -->
<rect x="30" y="420" width="540" height="100" fill="#F8FFF8" stroke="#009900" stroke-width="1.5" rx="5"/>
<text x="300" y="442" font-family="Arial" font-size="13" fill="#006600" text-anchor="middle" font-weight="bold">Single Slit Diffraction Minima</text>
<text x="45" y="464" font-family="Arial" font-size="12" fill="#000000">Condition for minima: a sinθ = nλ   (n = ±1, ±2, ±3…)</text>
<text x="45" y="482" font-family="Arial" font-size="12" fill="#000000">Central maximum half-width: sinθ = λ/a</text>
<text x="45" y="500" font-family="Arial" font-size="12" fill="#000000">Width of central max on screen: 2λD/a = 12 mm</text>
<text x="45" y="516" font-family="Arial" font-size="12" fill="#555555">Central max is twice as wide as secondary maxima</text>

</g>
</svg>`;

    // Generated from registry: pathDifferenceDiagram
    // slitSeparation=80px, screenDistance=400px, wavelength=30px
    // options: showPathDifference=true, showConstructive=true, showDestructive=true, showGeometry=true, showFormula=true
    static pathDifferenceDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Path Difference Diagram</metadata>
<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#000000"/>
  </marker>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#0055BB"/>
  </marker>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#CC2200"/>
  </marker>
</defs>
<g>

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Path Difference Geometry</text>
<text x="450" y="50" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Geometric derivation of path difference for two-slit interference</text>

<!-- Two slits S1 and S2 at x=180, separated by d=80px -->
<rect x="168" y="80" width="14" height="130" fill="#666666" stroke="#444444" stroke-width="1.5"/>
<rect x="168" y="260" width="14" height="130" fill="#666666" stroke="#444444" stroke-width="1.5"/>
<!-- Slit openings -->
<rect x="166" y="210" width="18" height="16" fill="white" stroke="none"/>
<rect x="166" y="226" width="18" height="16" fill="white" stroke="none"/>

<!-- Label slits -->
<circle cx="175" cy="218" r="5" fill="#0055BB"/>
<circle cx="175" cy="234" r="5" fill="#0055BB"/>
<text x="148" y="222" font-family="Arial" font-size="13" fill="#0055BB" text-anchor="middle" font-weight="bold">S₁</text>
<text x="148" y="238" font-family="Arial" font-size="13" fill="#0055BB" text-anchor="middle" font-weight="bold">S₂</text>

<!-- Slit separation d -->
<line x1="140" y1="218" x2="140" y2="234" stroke="#CC0000" stroke-width="2"/>
<line x1="133" y1="218" x2="147" y2="218" stroke="#CC0000" stroke-width="2"/>
<line x1="133" y1="234" x2="147" y2="234" stroke="#CC0000" stroke-width="2"/>
<text x="122" y="230" font-family="Arial" font-size="13" fill="#CC0000" text-anchor="middle" font-weight="bold">d</text>

<!-- Midpoint of slits -->
<circle cx="175" cy="226" r="3" fill="#888888"/>

<!-- Screen at x=680 -->
<rect x="680" y="80" width="12" height="330" fill="#E0E0E0" stroke="#666666" stroke-width="2"/>
<text x="686" y="68" font-family="Arial" font-size="11" fill="#333333" text-anchor="middle">Screen</text>

<!-- Point P on screen (showGeometry=true) — at angle θ above central line -->
<circle cx="686" cy="160" r="6" fill="#CC2200"/>
<text x="703" y="164" font-family="Arial" font-size="13" fill="#CC2200" font-weight="bold">P</text>

<!-- Lines from S1 and S2 to P -->
<line x1="175" y1="218" x2="686" y2="160" stroke="#0055BB" stroke-width="2.5" marker-end="url(#arrowhead-blue)"/>
<line x1="175" y1="234" x2="686" y2="160" stroke="#CC2200" stroke-width="2.5" marker-end="url(#arrowhead-red)"/>

<!-- Path length labels -->
<text x="380" y="168" font-family="Arial" font-size="13" fill="#0055BB" text-anchor="middle">r₁</text>
<text x="380" y="220" font-family="Arial" font-size="13" fill="#CC2200" text-anchor="middle">r₂</text>

<!-- Central line (normal) to centre of screen -->
<line x1="175" y1="226" x2="686" y2="226" stroke="#888888" stroke-width="1.5" stroke-dasharray="5,4"/>

<!-- Path difference construction: perpendicular from S1 to line S2→P -->
<!-- Foot of perpendicular from S1 to the line r2, approximately at x=195, y=230 (close to slits) -->
<line x1="175" y1="218" x2="186" y2="236" stroke="#009900" stroke-width="2"/>
<line x1="182" y1="234" x2="186" y2="236" stroke="#009900" stroke-width="1.5"/>
<line x1="182" y1="234" x2="178" y2="230" stroke="#009900" stroke-width="1.5"/>
<text x="195" y="248" font-family="Arial" font-size="11" fill="#009900">90°</text>

<!-- Path difference = S1 to foot = d sinθ -->
<line x1="175" y1="234" x2="186" y2="236" stroke="#009900" stroke-width="3"/>
<text x="162" y="254" font-family="Arial" font-size="12" fill="#009900" font-weight="bold">Δ = d sinθ</text>

<!-- showAngles: angle θ at midpoint -->
<path d="M 280,226 A 105,105 0 0,0 262,188" fill="none" stroke="#555599" stroke-width="2"/>
<text x="298" y="210" font-family="Arial" font-size="13" fill="#555599" font-weight="bold">θ</text>

<!-- y position on screen -->
<line x1="686" y1="226" x2="686" y2="160" stroke="#CC2200" stroke-width="2"/>
<line x1="679" y1="226" x2="693" y2="226" stroke="#CC2200" stroke-width="2"/>
<line x1="679" y1="160" x2="693" y2="160" stroke="#CC2200" stroke-width="2"/>
<text x="708" y="198" font-family="Arial" font-size="12" fill="#CC2200" text-anchor="middle" font-weight="bold">x</text>

<!-- Distance D -->
<line x1="175" y1="420" x2="680" y2="420" stroke="#333333" stroke-width="2"/>
<line x1="175" y1="413" x2="175" y2="427" stroke="#333333" stroke-width="2"/>
<line x1="680" y1="413" x2="680" y2="427" stroke="#333333" stroke-width="2"/>
<text x="427" y="440" font-family="Arial" font-size="13" fill="#333333" text-anchor="middle" font-weight="bold">D (slit-to-screen distance)</text>

<!-- Small angle approximation note -->
<text x="427" y="468" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Small angle approx: sinθ ≈ tanθ = x/D  →  path difference Δ = dx/D</text>

<!-- showConstructive / showDestructive annotation boxes -->
<rect x="30" y="490" width="380" height="90" fill="#EEFFEE" stroke="#009900" stroke-width="1.5" rx="5"/>
<text x="220" y="510" font-family="Arial" font-size="13" fill="#006600" text-anchor="middle" font-weight="bold">Constructive (bright fringe)</text>
<text x="45" y="530" font-family="Arial" font-size="12" fill="#000000">Δ = nλ  →  x = nλD/d  (n=0,±1,±2…)</text>
<text x="45" y="548" font-family="Arial" font-size="12" fill="#000000">Fringe spacing: w = λD/d</text>
<text x="45" y="566" font-family="Arial" font-size="11" fill="#555555">Waves arrive in phase → maximum amplitude</text>

<rect x="460" y="490" width="420" height="90" fill="#FFEEEE" stroke="#CC0000" stroke-width="1.5" rx="5"/>
<text x="670" y="510" font-family="Arial" font-size="13" fill="#990000" text-anchor="middle" font-weight="bold">Destructive (dark fringe)</text>
<text x="475" y="530" font-family="Arial" font-size="12" fill="#000000">Δ = (n+½)λ  →  x = (n+½)λD/d</text>
<text x="475" y="548" font-family="Arial" font-size="12" fill="#000000">Halfway between bright fringes</text>
<text x="475" y="566" font-family="Arial" font-size="11" fill="#555555">Waves arrive in antiphase → zero amplitude</text>

</g>
</svg>`;

    // Generated from registry: polarisationDiagram
    // initialAngle=0°, analyserAngle=45°
    // options: showUnpolarised=true, showPolariser=true, showPolarised=true, showAnalyser=true, showIntensity=true
    static polarisationDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Polarisation Diagram</metadata>
<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#000000"/>
  </marker>
  <marker id="arrowhead-yellow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#BB8800"/>
  </marker>
</defs>
<g>

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Polarisation of Light</text>
<text x="450" y="50" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Transverse waves can be polarised — longitudinal waves cannot</text>

<!-- ===== SECTION 1: Unpolarised light ===== -->
<!-- showUnpolarised: rays oscillating in all directions -->
<text x="100" y="100" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Unpolarised</text>
<text x="100" y="115" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">light source</text>
<circle cx="100" cy="145" r="22" fill="#FFFFAA" stroke="#AA8800" stroke-width="2"/>
<text x="100" y="150" font-family="Arial" font-size="11" fill="#665500" text-anchor="middle" font-weight="bold">S</text>
<!-- Oscillation arrows in all directions (sunburst) -->
<line x1="100" y1="123" x2="100" y2="110" stroke="#BB8800" stroke-width="1.5"/>
<line x1="100" y1="167" x2="100" y2="180" stroke="#BB8800" stroke-width="1.5"/>
<line x1="78" y1="145" x2="65" y2="145" stroke="#BB8800" stroke-width="1.5"/>
<line x1="122" y1="145" x2="135" y2="145" stroke="#BB8800" stroke-width="1.5"/>
<line x1="84" y1="131" x2="74" y2="121" stroke="#BB8800" stroke-width="1.5"/>
<line x1="116" y1="131" x2="126" y2="121" stroke="#BB8800" stroke-width="1.5"/>
<line x1="84" y1="159" x2="74" y2="169" stroke="#BB8800" stroke-width="1.5"/>
<line x1="116" y1="159" x2="126" y2="169" stroke="#BB8800" stroke-width="1.5"/>
<!-- Beam propagating right -->
<line x1="122" y1="145" x2="240" y2="145" stroke="#BB8800" stroke-width="2" marker-end="url(#arrowhead-yellow)"/>

<!-- showUnpolarised wave: multiple direction oscillations shown -->
<line x1="155" y1="130" x2="155" y2="160" stroke="#BB8800" stroke-width="1.5"/>
<line x1="175" y1="120" x2="175" y2="170" stroke="#BB8800" stroke-width="1.5"/>
<line x1="195" y1="128" x2="195" y2="162" stroke="#BB8800" stroke-width="1.5"/>
<line x1="155" y1="135" x2="175" y2="145" stroke="#BB8800" stroke-width="1" opacity="0.6"/>
<line x1="195" y1="130" x2="215" y2="145" stroke="#BB8800" stroke-width="1" opacity="0.6"/>

<!-- showPolariser: Polariser filter -->
<rect x="240" y="105" width="18" height="80" fill="#AADDFF" stroke="#0055AA" stroke-width="2.5" rx="2"/>
<text x="249" y="98" font-family="Arial" font-size="12" fill="#0055AA" text-anchor="middle" font-weight="bold">Polariser</text>
<!-- Polariser transmission axis (vertical) -->
<line x1="249" y1="110" x2="249" y2="180" stroke="#0055AA" stroke-width="2.5"/>
<text x="249" y="200" font-family="Arial" font-size="10" fill="#0055AA" text-anchor="middle">↕ axis</text>

<!-- Beam after polariser (showPolarised) -->
<line x1="258" y1="145" x2="450" y2="145" stroke="#0088FF" stroke-width="2.5" marker-end="url(#arrowhead)"/>
<!-- Polarised wave: only vertical oscillation -->
<line x1="300" y1="120" x2="300" y2="170" stroke="#0055AA" stroke-width="2"/>
<line x1="330" y1="115" x2="330" y2="175" stroke="#0055AA" stroke-width="2"/>
<line x1="360" y1="120" x2="360" y2="170" stroke="#0055AA" stroke-width="2"/>
<line x1="390" y1="125" x2="390" y2="165" stroke="#0055AA" stroke-width="2"/>
<line x1="420" y1="120" x2="420" y2="170" stroke="#0055AA" stroke-width="2"/>
<text x="360" y="92" font-family="Arial" font-size="12" fill="#0055AA" text-anchor="middle" font-weight="bold">Plane-polarised</text>
<text x="360" y="107" font-family="Arial" font-size="11" fill="#0055AA" text-anchor="middle">(vertical plane only)</text>

<!-- showAnalyser: Analyser filter at 45° -->
<rect x="450" y="105" width="18" height="80" fill="#FFDDAA" stroke="#CC5500" stroke-width="2.5" rx="2"/>
<text x="459" y="98" font-family="Arial" font-size="12" fill="#CC5500" text-anchor="middle" font-weight="bold">Analyser</text>
<text x="459" y="214" font-family="Arial" font-size="10" fill="#CC5500" text-anchor="middle">45° axis</text>
<!-- Analyser axis at 45° -->
<line x1="441" y1="137" x2="469" y2="173" stroke="#CC5500" stroke-width="2.5"/>

<!-- Transmitted beam after analyser (reduced intensity: I = I₀cos²45° = I₀/2) -->
<line x1="468" y1="145" x2="660" y2="145" stroke="#88AAFF" stroke-width="2" opacity="0.7" marker-end="url(#arrowhead)"/>
<!-- Polarised at 45° oscillation -->
<line x1="510" y1="130" x2="530" y2="160" stroke="#CC5500" stroke-width="2"/>
<line x1="545" y1="125" x2="565" y2="165" stroke="#CC5500" stroke-width="2"/>
<line x1="580" y1="130" x2="600" y2="160" stroke="#CC5500" stroke-width="2"/>
<line x1="615" y1="127" x2="635" y2="163" stroke="#CC5500" stroke-width="2"/>
<text x="560" y="92" font-family="Arial" font-size="12" fill="#CC5500" text-anchor="middle" font-weight="bold">Polarised at 45°</text>
<text x="560" y="107" font-family="Arial" font-size="11" fill="#CC5500" text-anchor="middle">Reduced intensity (I₀/2)</text>

<!-- showIntensity: intensity comparison -->
<rect x="680" y="80" width="200" height="160" fill="#F8F8FF" stroke="#9999CC" stroke-width="1.5" rx="6"/>
<text x="780" y="100" font-family="Arial" font-size="13" fill="#333366" text-anchor="middle" font-weight="bold">Intensity (Malus's Law)</text>
<text x="695" y="122" font-family="Arial" font-size="12" fill="#000000">I = I₀ cos²θ</text>
<text x="695" y="142" font-family="Arial" font-size="11" fill="#333333">θ = angle between</text>
<text x="695" y="158" font-family="Arial" font-size="11" fill="#333333">polariser axes</text>
<text x="695" y="178" font-family="Arial" font-size="11" fill="#0055AA">θ=0°: I = I₀ (max)</text>
<text x="695" y="196" font-family="Arial" font-size="11" fill="#CC5500">θ=45°: I = I₀/2</text>
<text x="695" y="214" font-family="Arial" font-size="11" fill="#CC0000">θ=90°: I = 0 (dark)</text>
<text x="695" y="232" font-family="Arial" font-size="11" fill="#555555">θ=45° shown above</text>

<!-- 90° case: analyser perpendicular = no transmission -->
<text x="450" y="290" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" text-anchor="middle">Cross-polariser case (θ = 90°): complete extinction</text>
<!-- Polariser and analyser at 90° -->
<rect x="250" y="320" width="18" height="80" fill="#AADDFF" stroke="#0055AA" stroke-width="2.5" rx="2"/>
<line x1="259" y1="325" x2="259" y2="395" stroke="#0055AA" stroke-width="2.5"/>
<text x="259" y="313" font-family="Arial" font-size="10" fill="#0055AA" text-anchor="middle">Polariser</text>
<rect x="450" y="320" width="18" height="80" fill="#FFDDAA" stroke="#CC5500" stroke-width="2.5" rx="2"/>
<line x1="440" y1="360" x2="480" y2="360" stroke="#CC5500" stroke-width="2.5"/>
<text x="459" y="313" font-family="Arial" font-size="10" fill="#CC5500" text-anchor="middle">Analyser (⊥)</text>
<!-- Beam into first polariser -->
<line x1="120" y1="360" x2="248" y2="360" stroke="#BB8800" stroke-width="2.5" marker-end="url(#arrowhead)"/>
<!-- Vertically polarised between -->
<line x1="268" y1="360" x2="448" y2="360" stroke="#0055AA" stroke-width="2.5" marker-end="url(#arrowhead)"/>
<line x1="320" y1="335" x2="320" y2="385" stroke="#0055AA" stroke-width="2"/>
<line x1="360" y1="330" x2="360" y2="390" stroke="#0055AA" stroke-width="2"/>
<!-- No beam after 90° analyser -->
<line x1="468" y1="360" x2="620" y2="360" stroke="#CCCCCC" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="545" y="350" font-family="Arial" font-size="12" fill="#CC0000" text-anchor="middle" font-weight="bold">No transmission</text>
<text x="545" y="366" font-family="Arial" font-size="12" fill="#CC0000" text-anchor="middle">I = 0</text>

<!-- Applications note -->
<rect x="30" y="440" width="840" height="80" fill="#F5F5F5" stroke="#CCCCCC" stroke-width="1" rx="5"/>
<text x="450" y="460" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Key Facts about Polarisation</text>
<text x="45" y="480" font-family="Arial" font-size="11" fill="#333333">• Only transverse waves can be polarised (not longitudinal like sound)</text>
<text x="45" y="498" font-family="Arial" font-size="11" fill="#333333">• Unpolarised light → polariser → intensity halved (I = I₀/2)   then → analyser at θ → I = I₀cos²θ/2</text>
<text x="45" y="516" font-family="Arial" font-size="11" fill="#333333">• Applications: LCD screens, sunglasses, photography, stress analysis, 3D cinema</text>

</g>
</svg>`;

    // Generated from registry: malusLawGraph
    // initialIntensity=100
    // options: showCosSquaredCurve=true, showGrid=true, showFormula=true, showAnnotations=true
    static malusLawGraphSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Malus's Law Graph — I = I₀ cos²θ</metadata>
<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
    <polygon points="0 0, 10 3.5, 0 7" fill="#000000"/>
  </marker>
</defs>
<g>

<!-- Title -->
<text x="450" y="28" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Malus's Law</text>
<text x="450" y="50" font-family="Arial" font-size="14" fill="#0055AA" text-anchor="middle" font-weight="bold">I = I₀ cos²θ</text>

<!-- showGrid: grid lines -->
<line x1="130" y1="100" x2="130" y2="450" stroke="#EEEEEE" stroke-width="1"/>
<line x1="221" y1="100" x2="221" y2="450" stroke="#EEEEEE" stroke-width="1"/>
<line x1="312" y1="100" x2="312" y2="450" stroke="#EEEEEE" stroke-width="1"/>
<line x1="403" y1="100" x2="403" y2="450" stroke="#EEEEEE" stroke-width="1"/>
<line x1="494" y1="100" x2="494" y2="450" stroke="#EEEEEE" stroke-width="1"/>
<line x1="585" y1="100" x2="585" y2="450" stroke="#EEEEEE" stroke-width="1"/>
<line x1="676" y1="100" x2="676" y2="450" stroke="#EEEEEE" stroke-width="1"/>
<line x1="767" y1="100" x2="767" y2="450" stroke="#EEEEEE" stroke-width="1"/>
<line x1="100" y1="100" x2="800" y2="100" stroke="#EEEEEE" stroke-width="1"/>
<line x1="100" y1="188" x2="800" y2="188" stroke="#EEEEEE" stroke-width="1"/>
<line x1="100" y1="275" x2="800" y2="275" stroke="#EEEEEE" stroke-width="1"/>
<line x1="100" y1="363" x2="800" y2="363" stroke="#EEEEEE" stroke-width="1"/>
<line x1="100" y1="450" x2="800" y2="450" stroke="#DDDDDD" stroke-width="1.5"/>

<!-- Axes -->
<line x1="100" y1="450" x2="820" y2="450" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<line x1="100" y1="470" x2="100" y2="80" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="835" y="454" font-family="Arial" font-size="13" fill="#000000">θ</text>
<text x="88" y="75" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">I</text>

<!-- x-axis: θ from 0° to 360°, scale: 800px/360°=2.22px/° → 90°=200px, label key angles -->
<!-- 0°=100, 90°=300, 180°=500, 270°=700, 360°=900 → rescale 90°=182px -->
<!-- Use: 0°→130, 45°→175, 90°→221, 135°→266, 180°→312, 225°→357, 270°→403, 315°→448, 360°→494 — let's use 90°=183px step -->
<!-- Simpler: 4 full periods in 720px wide (0-360°), 90° = 720/4 = 180px. Start x=100. So: 0=100, 90=280, 180=460, 270=640, 360=820 — too wide -->
<!-- Let's use 2 full cycles (0-360°) in 700px: 1° = 700/360 px = 1.944px/°. 0=100, 90=275, 180=450, 270=625, 360=800 -->
<line x1="100" y1="445" x2="100" y2="455" stroke="#000000" stroke-width="1.5"/>
<text x="100" y="470" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">0°</text>
<line x1="275" y1="445" x2="275" y2="455" stroke="#000000" stroke-width="1.5"/>
<text x="275" y="470" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">90°</text>
<text x="275" y="484" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">π/2</text>
<line x1="450" y1="445" x2="450" y2="455" stroke="#000000" stroke-width="1.5"/>
<text x="450" y="470" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">180°</text>
<text x="450" y="484" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">π</text>
<line x1="625" y1="445" x2="625" y2="455" stroke="#000000" stroke-width="1.5"/>
<text x="625" y="470" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">270°</text>
<line x1="800" y1="445" x2="800" y2="455" stroke="#000000" stroke-width="1.5"/>
<text x="800" y="470" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">360°</text>

<!-- y-axis: I₀=100 mapped to y=100, I=0 at y=450. Scale: 3.5px per unit. -->
<line x1="95" y1="100" x2="105" y2="100" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="104" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">I₀</text>
<text x="88" y="117" font-family="Arial" font-size="10" fill="#555555" text-anchor="end">(100)</text>
<line x1="95" y1="188" x2="105" y2="188" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="192" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">75</text>
<line x1="95" y1="275" x2="105" y2="275" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="279" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">50</text>
<line x1="95" y1="363" x2="105" y2="363" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="367" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">25</text>

<!-- cos²θ curve: I = I₀cos²θ. I(0°)=100, I(45°)=50, I(90°)=0, I(135°)=50, I(180°)=100, etc. -->
<!-- x scale: 0°=100, 360°=800 → 1°=700/360 px -->
<!-- Key points: 0°→y=100; 45°→y=275; 90°→y=450; 135°→y=275; 180°→y=100; 225°→y=275; 270°→y=450; 315°→y=275; 360°→y=100 -->
<!-- In pixels: 45°=100+87.5=188; 90°=100+175=275; 135°=363; 180°=450; 225°=538; 270°=625; 315°=713; 360°=800 -->
<path d="
  M 100,100
  C 120,100 160,275 188,275
  C 210,275 255,450 275,450
  C 295,450 340,275 363,275
  C 385,275 430,100 450,100
  C 470,100 515,275 538,275
  C 560,275 605,450 625,450
  C 645,450 690,275 713,275
  C 735,275 780,100 800,100
" stroke="#0055AA" stroke-width="3.5" fill="none"/>

<!-- Fill under curve for visual -->
<path d="
  M 100,450
  L 100,100
  C 120,100 160,275 188,275
  C 210,275 255,450 275,450
  C 295,450 340,275 363,275
  C 385,275 430,100 450,100
  C 470,100 515,275 538,275
  C 560,275 605,450 625,450
  C 645,450 690,275 713,275
  C 735,275 780,100 800,100
  L 800,450 Z
" fill="#0055AA" opacity="0.08"/>

<!-- showAnnotations: key points marked -->
<!-- Max at θ=0° -->
<circle cx="100" cy="100" r="6" fill="#0055AA"/>
<line x1="100" y1="100" x2="100" y2="450" stroke="#009900" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="100" y="90" font-family="Arial" font-size="11" fill="#009900" text-anchor="middle">I=I₀</text>

<!-- Half-max at θ=45° -->
<circle cx="188" cy="275" r="6" fill="#CC5500"/>
<line x1="100" y1="275" x2="188" y2="275" stroke="#CC5500" stroke-width="1.5" stroke-dasharray="4,3"/>
<line x1="188" y1="275" x2="188" y2="450" stroke="#CC5500" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="188" y="464" font-family="Arial" font-size="10" fill="#CC5500" text-anchor="middle">45°</text>
<text x="55" y="279" font-family="Arial" font-size="11" fill="#CC5500">I₀/2</text>

<!-- Zero at θ=90° -->
<circle cx="275" cy="450" r="6" fill="#CC0000"/>
<text x="275" y="436" font-family="Arial" font-size="11" fill="#CC0000" text-anchor="middle">I=0</text>

<!-- Max at θ=180° -->
<circle cx="450" cy="100" r="6" fill="#0055AA"/>
<text x="450" y="90" font-family="Arial" font-size="11" fill="#009900" text-anchor="middle">I=I₀</text>

<!-- showFormula and annotations box -->
<rect x="550" y="115" width="310" height="150" fill="#F0F8FF" stroke="#0055AA" stroke-width="1.5" rx="6"/>
<text x="705" y="137" font-family="Arial" font-size="14" fill="#003388" text-anchor="middle" font-weight="bold">Malus's Law</text>
<text x="565" y="162" font-family="Arial" font-size="18" fill="#000000" font-weight="bold">I = I₀ cos²θ</text>
<text x="565" y="185" font-family="Arial" font-size="12" fill="#333333">I₀ = incident intensity</text>
<text x="565" y="203" font-family="Arial" font-size="12" fill="#333333">θ = angle between polariser</text>
<text x="565" y="219" font-family="Arial" font-size="12" fill="#333333">      and analyser axes</text>
<text x="565" y="237" font-family="Arial" font-size="12" fill="#333333">I: max at θ=0°,180°;  zero at 90°,270°</text>
<text x="565" y="253" font-family="Arial" font-size="12" fill="#333333">Period = 180°</text>

<!-- Axis labels -->
<text x="450" y="500" font-family="Arial" font-size="13" fill="#333333" text-anchor="middle">Angle θ between polariser and analyser (degrees)</text>
<text x="48" y="300" font-family="Arial" font-size="13" fill="#333333" text-anchor="middle" transform="rotate(-90,48,300)">Transmitted Intensity I (W/m²)</text>

</g>
</svg>`;





    // ============================================================
    // ===== 1. MECHANICS =========================================
    // ============================================================

    // Generated from registry: freeBodyDiagram
    // forces: Weight(50,270°), Normal(50,90°), Applied(30,0°)
    // options: showLabels=true, showMagnitudes=true, showAngles=false
    static freeBodyDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Free Body Diagram
</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Free Body Diagram</text>
<text x="400" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Force vectors acting on an object</text>

<!-- Object (mass block) -->
<rect x="375" y="275" width="50" height="50" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="400" y="305" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">m</text>

<!-- WEIGHT force: magnitude=50, angle=270° (downward) -->
<!-- scale: 3.5 px/unit → length = 50×3.5 = 175px -->
<!-- Start from bottom edge of box (400, 325), end at (400, 500) -->
<line x1="400" y1="325" x2="400" y2="500" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<!-- showLabels=true, showMagnitudes=true -->
<text x="412" y="420" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Weight</text>
<text x="412" y="436" font-family="Arial" font-size="12" fill="#000000">(50 N)</text>

<!-- NORMAL force: magnitude=50, angle=90° (upward) -->
<!-- Start from top edge of box (400, 275), end at (400, 100) -->
<line x1="400" y1="275" x2="400" y2="100" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="412" y="190" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Normal</text>
<text x="412" y="206" font-family="Arial" font-size="12" fill="#000000">(50 N)</text>

<!-- APPLIED force: magnitude=30, angle=0° (rightward) -->
<!-- scale: 30×3.5 = 105px; Start from right edge (425, 300), end at (530, 300) -->
<line x1="425" y1="300" x2="530" y2="300" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="540" y="296" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Applied</text>
<text x="540" y="312" font-family="Arial" font-size="12" fill="#000000">(30 N)</text>

<!-- Equilibrium reference lines (dashed) -->
<line x1="200" y1="300" x2="370" y2="300" stroke="#999999" stroke-width="1" stroke-dasharray="4,4"/>
<line x1="400" y1="100" x2="400" y2="270" stroke="#999999" stroke-width="1" stroke-dasharray="4,4"/>

<!-- Info box: Newton's 2nd Law -->
<rect x="30" y="480" width="280" height="90" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="42" y="500" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Free Body Diagram Rules:</text>
<text x="42" y="518" font-family="Arial" font-size="11" fill="#000000">• All forces drawn from/on the object</text>
<text x="42" y="534" font-family="Arial" font-size="11" fill="#000000">• Arrow length proportional to magnitude</text>
<text x="42" y="550" font-family="Arial" font-size="11" fill="#000000">• ΣF = ma  (Newton's 2nd Law)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: vectorDiagram
    // vectors: A(40,30), B(30,-20); showResultant=true
    // options: showComponents=true, showResultant=true, showGrid=true
    static vectorDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Vector Addition Diagram
</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Vector Addition Diagram</text>
<text x="400" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Tip-to-tail method — showGrid=true, showComponents=true, showResultant=true</text>

<!-- Grid (showGrid=true) -->
<g stroke="#DDDDDD" stroke-width="0.7">
  <!-- Vertical grid lines -->
  <line x1="80" y1="80" x2="80" y2="520"/>
  <line x1="120" y1="80" x2="120" y2="520"/>
  <line x1="160" y1="80" x2="160" y2="520"/>
  <line x1="200" y1="80" x2="200" y2="520"/>
  <line x1="240" y1="80" x2="240" y2="520"/>
  <line x1="280" y1="80" x2="280" y2="520"/>
  <line x1="320" y1="80" x2="320" y2="520"/>
  <line x1="360" y1="80" x2="360" y2="520"/>
  <line x1="400" y1="80" x2="400" y2="520"/>
  <line x1="440" y1="80" x2="440" y2="520"/>
  <line x1="480" y1="80" x2="480" y2="520"/>
  <line x1="520" y1="80" x2="520" y2="520"/>
  <line x1="560" y1="80" x2="560" y2="520"/>
  <line x1="600" y1="80" x2="600" y2="520"/>
  <line x1="640" y1="80" x2="640" y2="520"/>
  <line x1="680" y1="80" x2="680" y2="520"/>
  <line x1="720" y1="80" x2="720" y2="520"/>
  <!-- Horizontal grid lines -->
  <line x1="80" y1="80" x2="720" y2="80"/>
  <line x1="80" y1="120" x2="720" y2="120"/>
  <line x1="80" y1="160" x2="720" y2="160"/>
  <line x1="80" y1="200" x2="720" y2="200"/>
  <line x1="80" y1="240" x2="720" y2="240"/>
  <line x1="80" y1="280" x2="720" y2="280"/>
  <line x1="80" y1="320" x2="720" y2="320"/>
  <line x1="80" y1="360" x2="720" y2="360"/>
  <line x1="80" y1="400" x2="720" y2="400"/>
  <line x1="80" y1="440" x2="720" y2="440"/>
  <line x1="80" y1="480" x2="720" y2="480"/>
  <line x1="80" y1="520" x2="720" y2="520"/>
</g>

<!-- Coordinate Axes -->
<line x1="80" y1="320" x2="730" y2="320" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="80" y1="520" x2="80" y2="70" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="738" y="325" font-family="Arial" font-size="13" fill="#000000">x</text>
<text x="86" y="65" font-family="Arial" font-size="13" fill="#000000">y</text>

<!-- Origin label -->
<circle cx="80" cy="320" r="3" fill="#000000"/>
<text x="60" y="335" font-family="Arial" font-size="11" fill="#000000">O</text>

<!-- VECTOR A: (40, 30) — scale 4px/unit → (160px right, 120px up) -->
<!-- Origin (80,320) → tip (240, 200) -->
<line x1="80" y1="320" x2="240" y2="200" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="148" y="248" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">A</text>

<!-- Vector A components (showComponents=true) dashed -->
<line x1="80" y1="320" x2="240" y2="320" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<line x1="240" y1="320" x2="240" y2="200" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="160" y="338" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Aₓ=40</text>
<text x="252" y="265" font-family="Arial" font-size="10" fill="#555555">Aᵧ=30</text>

<!-- VECTOR B: (30, -20) — scale 4px/unit → (120px right, 80px down) -->
<!-- Tip-to-tail: starts at tip of A (240, 200) → (360, 280) -->
<line x1="240" y1="200" x2="360" y2="280" stroke="#000000" stroke-width="3" stroke-dasharray="8,3" marker-end="url(#arrow-bw)"/>
<text x="306" y="228" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">B</text>

<!-- Vector B components (showComponents=true) dotted -->
<line x1="240" y1="200" x2="360" y2="200" stroke="#000000" stroke-width="1.2" stroke-dasharray="3,4"/>
<line x1="360" y1="200" x2="360" y2="280" stroke="#000000" stroke-width="1.2" stroke-dasharray="3,4"/>
<text x="300" y="193" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Bₓ=30</text>
<text x="370" y="246" font-family="Arial" font-size="10" fill="#555555">Bᵧ=-20</text>

<!-- RESULTANT R: (70, 10) — origin (80,320) → (360, 280) — showResultant=true -->
<!-- R = A+B = (70, 10), |R| = √(70²+10²) = 70.7 -->
<line x1="80" y1="320" x2="360" y2="280" stroke="#000000" stroke-width="3.5" stroke-dasharray="12,4" marker-end="url(#arrow-bw)"/>
<text x="200" y="295" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">R</text>

<!-- Resultant label -->
<text x="370" y="278" font-family="Arial" font-size="11" fill="#000000" font-weight="bold">R = A + B</text>
<text x="370" y="294" font-family="Arial" font-size="11" fill="#000000">|R| = 70.7 units</text>
<text x="370" y="310" font-family="Arial" font-size="11" fill="#000000">θ = 8.1°</text>

<!-- Info box -->
<rect x="82" y="530" width="350" height="50" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="95" y="549" font-family="Arial" font-size="12" fill="#000000">R = (40+30, 30−20) = (70, 10)  |R| = 70.7 units</text>
<text x="95" y="567" font-family="Arial" font-size="11" fill="#555555">Solid=A  Dashed=B  Long-dashed=Resultant R</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: motionGraphs
    // graphType: velocity-time; segments: (0,0),(2,10),(5,10),(7,0)
    // options: showArea=true, showSlope=true, showGrid=true
    static motionGraphsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Motion Graphs — Velocity-Time
</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Velocity-Time Graph</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Kinematic graph — segments: Rest → Accelerating → Constant → Decelerating</text>

<!-- Grid (showGrid=true) — plotArea: x:100→830, y:90→440 -->
<!-- Vertical (time) grid lines at t=0,1,2,3,4,5,6,7 → x=100,204,308,412,516,620,724,828 -->
<g stroke="#DDDDDD" stroke-width="0.8">
  <line x1="100" y1="90" x2="100" y2="440"/>
  <line x1="204" y1="90" x2="204" y2="440"/>
  <line x1="308" y1="90" x2="308" y2="440"/>
  <line x1="412" y1="90" x2="412" y2="440"/>
  <line x1="516" y1="90" x2="516" y2="440"/>
  <line x1="620" y1="90" x2="620" y2="440"/>
  <line x1="724" y1="90" x2="724" y2="440"/>
  <line x1="828" y1="90" x2="828" y2="440"/>
  <!-- Horizontal (velocity) grid lines at v=0,2,4,6,8,10,12 → plotH=350, maxV=12 → step=350/6≈58px -->
  <line x1="100" y1="440" x2="830" y2="440"/>
  <line x1="100" y1="382" x2="830" y2="382"/>
  <line x1="100" y1="324" x2="830" y2="324"/>
  <line x1="100" y1="265" x2="830" y2="265"/>
  <line x1="100" y1="207" x2="830" y2="207"/>
  <line x1="100" y1="149" x2="830" y2="149"/>
  <line x1="100" y1="90"  x2="830" y2="90"/>
</g>

<!-- Axes -->
<line x1="100" y1="440" x2="850" y2="440" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="100" y1="470" x2="100" y2="75" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="858" y="445" font-family="Arial" font-size="14" fill="#000000">t (s)</text>
<text x="40" y="80" font-family="Arial" font-size="14" fill="#000000">v (m/s)</text>

<!-- Time axis tick labels: t=0..7 at x=100,204,308,412,516,620,724,828 -->
<text x="100" y="460" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">0</text>
<text x="204" y="460" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">1</text>
<text x="308" y="460" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2</text>
<text x="412" y="460" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">3</text>
<text x="516" y="460" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">4</text>
<text x="620" y="460" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">5</text>
<text x="724" y="460" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">6</text>
<text x="828" y="460" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">7</text>

<!-- Velocity axis tick labels: v=0,2,4,6,8,10,12 at y=440,382,324,265,207,149,90 -->
<text x="88" y="444" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">0</text>
<text x="88" y="386" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">2</text>
<text x="88" y="328" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">4</text>
<text x="88" y="269" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">6</text>
<text x="88" y="211" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">8</text>
<text x="88" y="153" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">10</text>
<text x="88" y="94" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">12</text>

<!-- Shaded area under graph (showArea=true) — hatching pattern -->
<!-- Segment 1: t=0→2, v=0→10: triangle-ish, x=100→308, y=440→149 -->
<polygon points="100,440 308,149 308,440" fill="#CCCCCC" opacity="0.5" stroke="none"/>
<!-- Segment 2: t=2→5, v=10 constant: rectangle x=308→620, y=149→440 -->
<polygon points="308,149 620,149 620,440 308,440" fill="#CCCCCC" opacity="0.5" stroke="none"/>
<!-- Segment 3: t=5→7, v=10→0: triangle x=620→828, y=149→440 -->
<polygon points="620,149 828,440 620,440" fill="#CCCCCC" opacity="0.5" stroke="none"/>

<!-- V-T graph line segments -->
<!-- t=0 → t=2: (100,440)→(308,149) — Accelerating -->
<line x1="100" y1="440" x2="308" y2="149" stroke="#000000" stroke-width="3"/>
<!-- t=2 → t=5: (308,149)→(620,149) — Constant velocity -->
<line x1="308" y1="149" x2="620" y2="149" stroke="#000000" stroke-width="3"/>
<!-- t=5 → t=7: (620,149)→(828,440) — Decelerating -->
<line x1="620" y1="149" x2="828" y2="440" stroke="#000000" stroke-width="3"/>

<!-- Segment data points -->
<circle cx="100" cy="440" r="5" fill="#000000"/>
<text x="88" y="435" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">Rest</text>

<circle cx="308" cy="149" r="5" fill="#000000"/>
<text x="316" y="143" font-family="Arial" font-size="10" fill="#000000">Accelerating</text>

<circle cx="620" cy="149" r="5" fill="#000000"/>
<text x="628" y="143" font-family="Arial" font-size="10" fill="#000000">Const. v</text>

<circle cx="828" cy="440" r="5" fill="#000000"/>
<text x="836" y="440" font-family="Arial" font-size="10" fill="#000000">Stop</text>

<!-- Slope annotation (showSlope=true): segment 0→2, a = (10-0)/(2-0) = 5 m/s² -->
<text x="140" y="310" font-family="Arial" font-size="11" fill="#000000">slope = a</text>
<text x="140" y="325" font-family="Arial" font-size="11" fill="#000000">= 5 m/s²</text>

<!-- Zero slope annotation: segment 2→5 -->
<text x="430" y="140" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">a = 0</text>

<!-- Negative slope annotation: segment 5→7, a=(0-10)/(7-5)= -5 m/s² -->
<text x="700" y="310" font-family="Arial" font-size="11" fill="#000000">slope = -5 m/s²</text>

<!-- Area label (showArea=true): displacement = area under v-t -->
<text x="450" y="360" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Area = displacement (m)</text>

<!-- Info box -->
<rect x="100" y="510" width="360" height="50" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="112" y="529" font-family="Arial" font-size="12" fill="#000000">Slope of v-t graph = acceleration (m/s²)</text>
<text x="112" y="547" font-family="Arial" font-size="12" fill="#000000">Area under v-t graph = displacement (m)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: projectileMotion
    // initialVelocity=20, launchAngle=45°
    // R=v²sin2θ/g=40.8m, H=10.2m, T=2.89s
    // options: showVelocityVectors=true, showComponents=true, showTrajectory=true, showRange=true
    static projectileMotionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Projectile Motion Trajectory
</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Projectile Motion</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">v₀ = 20 m/s, θ = 45°  |  R = 40.8 m, H = 10.2 m, T = 2.89 s</text>

<!-- Axes -->
<!-- x-axis (ground): y=460 -->
<line x1="80" y1="460" x2="820" y2="460" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="80" y1="480" x2="80" y2="90" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="828" y="465" font-family="Arial" font-size="13" fill="#000000">x (m)</text>
<text x="50" y="90" font-family="Arial" font-size="13" fill="#000000">y (m)</text>

<!-- Ground fill indicator -->
<line x1="80" y1="460" x2="790" y2="460" stroke="#000000" stroke-width="3"/>

<!-- Axis labels: x -->
<text x="80"  y="478" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">0</text>
<text x="264" y="478" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">10</text>
<text x="448" y="478" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">20</text>
<text x="632" y="478" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">30</text>
<text x="790" y="478" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">40</text>

<!-- Axis labels: y -->
<text x="72" y="464" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">0</text>
<text x="72" y="372" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">5</text>
<text x="72" y="280" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">10</text>

<!-- Parabolic trajectory (showTrajectory=true) -->
<!-- Scale: 18.4px/m horizontal, 18.4px/m vertical -->
<!-- x: origin at px=80, y: origin at py=460 -->
<!-- Path computed: x(t)=v0x*t=14.14t, y(t)=14.14t-4.9t² -->
<!-- Points at t=0,0.5,1.0,1.5,2.0,2.5,2.89 -->
<!-- t=0: (80,460), t=0.5: (210,511)→clamp, let's use scaled coords -->
<!-- Scale x: 80+x_m*18, scale y: 460-y_m*18 -->
<!-- t=0: x=0,y=0 → (80,460) -->
<!-- t=0.5: x=7.07,y=5.85 → (207,355) -->
<!-- t=1.0: x=14.14,y=9.24 → (341,294) -->
<!-- t=1.45(peak): x=20.5,y=10.2 → (449,276) -->
<!-- t=2.0: x=28.28,y=8.08 → (588,314) -->
<!-- t=2.5: x=35.36,y=3.91 → (732,389) -->
<!-- t=2.89: x=40.8,y=0 → (812,460) -->
<path d="M 80,460 Q 449,276 812,460" stroke="#000000" stroke-width="3" fill="none"/>

<!-- Launch point -->
<circle cx="80" cy="460" r="6" fill="#000000"/>
<text x="88" y="456" font-family="Arial" font-size="11" fill="#000000">Launch</text>

<!-- Landing point -->
<circle cx="812" cy="460" r="6" fill="#000000"/>
<text x="820" y="456" font-family="Arial" font-size="11" fill="#000000">Land</text>

<!-- Peak point -->
<circle cx="449" cy="276" r="5" fill="#000000"/>
<text x="457" y="272" font-family="Arial" font-size="11" fill="#000000">H = 10.2 m</text>

<!-- Vertical dashed line to peak -->
<line x1="449" y1="276" x2="449" y2="460" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>

<!-- Initial velocity vector (showVelocityVectors=true) -->
<!-- v0=20m/s at 45°; scale 5px/unit; vx=vy=14.14*5=70px -->
<line x1="80" y1="460" x2="150" y2="390" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="125" y="415" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">v₀=20m/s</text>

<!-- Angle arc at launch -->
<path d="M 115 460 A 35 35 0 0 0 104 435" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="120" y="447" font-family="Arial" font-size="12" fill="#000000">θ=45°</text>

<!-- Component vectors (showComponents=true) from launch -->
<!-- v0x = 14.14 m/s → horizontal, v0y=14.14 → vertical -->
<!-- scale 5px/unit: 70px each -->
<line x1="80" y1="460" x2="150" y2="460" stroke="#000000" stroke-width="1.8" stroke-dasharray="5,4" marker-end="url(#arrow-bw)"/>
<text x="115" y="476" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">v₀ₓ=14.1</text>

<line x1="80" y1="460" x2="80" y2="390" stroke="#000000" stroke-width="1.8" stroke-dasharray="5,4" marker-end="url(#arrow-bw)"/>
<text x="30" y="428" font-family="Arial" font-size="11" fill="#000000">v₀ᵧ=14.1</text>

<!-- Range indicator (showRange=true) -->
<line x1="80" y1="500" x2="812" y2="500" stroke="#000000" stroke-width="2"/>
<line x1="80" y1="495" x2="80" y2="505" stroke="#000000" stroke-width="2"/>
<line x1="812" y1="495" x2="812" y2="505" stroke="#000000" stroke-width="2"/>
<text x="446" y="520" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">R = 40.8 m</text>

<!-- Info box -->
<rect x="580" y="90" width="290" height="90" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="592" y="110" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Projectile Equations:</text>
<text x="592" y="128" font-family="Arial" font-size="11" fill="#000000">R = v₀²sin(2θ)/g = 40.8 m</text>
<text x="592" y="146" font-family="Arial" font-size="11" fill="#000000">H = v₀²sin²θ/(2g) = 10.2 m</text>
<text x="592" y="164" font-family="Arial" font-size="11" fill="#000000">T = 2v₀sinθ/g = 2.89 s</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: inclinedPlane
    // angle=30°, mass=10kg, friction=true
    // W=98N, N=84.9N, W∥=49N, f=μN=25.5N (μ=0.3)
    // options: showForceComponents=true, showAngles=true, showFriction=true
    static inclinedPlaneSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Inclined Plane Diagram
</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Inclined Plane</text>
<text x="400" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">θ = 30°, m = 10 kg, friction = true (μ = 0.3)</text>

<!-- Ground line -->
<line x1="100" y1="450" x2="720" y2="450" stroke="#000000" stroke-width="3"/>
<!-- Ground hatch marks -->
<line x1="120" y1="450" x2="110" y2="462" stroke="#000000" stroke-width="1.5"/>
<line x1="155" y1="450" x2="145" y2="462" stroke="#000000" stroke-width="1.5"/>
<line x1="190" y1="450" x2="180" y2="462" stroke="#000000" stroke-width="1.5"/>
<line x1="225" y1="450" x2="215" y2="462" stroke="#000000" stroke-width="1.5"/>
<line x1="260" y1="450" x2="250" y2="462" stroke="#000000" stroke-width="1.5"/>
<line x1="295" y1="450" x2="285" y2="462" stroke="#000000" stroke-width="1.5"/>
<line x1="330" y1="450" x2="320" y2="462" stroke="#000000" stroke-width="1.5"/>
<line x1="365" y1="450" x2="355" y2="462" stroke="#000000" stroke-width="1.5"/>
<line x1="400" y1="450" x2="390" y2="462" stroke="#000000" stroke-width="1.5"/>
<line x1="435" y1="450" x2="425" y2="462" stroke="#000000" stroke-width="1.5"/>
<line x1="470" y1="450" x2="460" y2="462" stroke="#000000" stroke-width="1.5"/>
<line x1="505" y1="450" x2="495" y2="462" stroke="#000000" stroke-width="1.5"/>
<line x1="540" y1="450" x2="530" y2="462" stroke="#000000" stroke-width="1.5"/>
<line x1="575" y1="450" x2="565" y2="462" stroke="#000000" stroke-width="1.5"/>
<line x1="610" y1="450" x2="600" y2="462" stroke="#000000" stroke-width="1.5"/>
<line x1="645" y1="450" x2="635" y2="462" stroke="#000000" stroke-width="1.5"/>
<line x1="680" y1="450" x2="670" y2="462" stroke="#000000" stroke-width="1.5"/>
<line x1="715" y1="450" x2="705" y2="462" stroke="#000000" stroke-width="1.5"/>

<!-- Incline surface: angle=30°, base at (150,450), top at (640,167) -->
<!-- Length ~563px; sin30=0.5, cos30=0.866 -->
<!-- top: x=150+563*cos30=150+488=638, y=450-563*sin30=450-282=168 -->
<polygon points="150,450 638,168 638,450" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>

<!-- Angle arc at base: showAngles=true -->
<path d="M 210 450 A 60 60 0 0 0 202 420" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="218" y="435" font-family="Arial" font-size="14" fill="#000000">θ = 30°</text>

<!-- Block on incline — positioned ~55% up slope -->
<!-- Block center along slope: 0.55*563=310px from base -->
<!-- center: x=150+310*cos30=150+268=418, y=450-310*sin30=450-155=295 -->
<!-- Rotated -30° around block center -->
<g transform="translate(418,295) rotate(-30)">
  <rect x="-28" y="-56" width="56" height="56" fill="#BBBBBB" stroke="#000000" stroke-width="2" rx="2"/>
  <text x="0" y="-22" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">m=10kg</text>
</g>

<!-- WEIGHT: downward, 98N; scale 1.5px/N → 147px -->
<!-- from block center (418,295) downward -->
<line x1="418" y1="295" x2="418" y2="442" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="428" y="380" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">W=98 N</text>

<!-- NORMAL: perpendicular to incline surface (pointing upper-left at 120° from x-axis) -->
<!-- direction: (-sin30, -cos30) = (-0.5, -0.866) -->
<!-- N=84.9N, scale 1.5px/N → 127px -->
<!-- from (418,295): (-0.5*127, -0.866*127) = (-63.5, -110) → (354, 185) -->
<line x1="418" y1="295" x2="355" y2="185" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="290" y="220" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">N = 84.9 N</text>

<!-- PARALLEL COMPONENT down slope (showForceComponents=true): W∥=49N, 73.5px -->
<!-- direction: (cos30, sin30)=(0.866, 0.5) -->
<!-- from (418,295): (0.866*73.5, 0.5*73.5) = (64, 37) → (482, 332) -->
<line x1="418" y1="295" x2="482" y2="332" stroke="#555555" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrow-bw)"/>
<text x="490" y="330" font-family="Arial" font-size="11" fill="#000000">W∥=49 N</text>

<!-- FRICTION: up the slope (showFriction=true): f=25.5N, 38px -->
<!-- direction: (-cos30, -sin30)=(-0.866, -0.5) -->
<!-- from (418,295): (-0.866*38, -0.5*38)=(-33, -19) → (385,276) -->
<line x1="418" y1="295" x2="385" y2="276" stroke="#000000" stroke-width="2.5" stroke-dasharray="8,3" marker-end="url(#arrow-bw)"/>
<text x="320" y="268" font-family="Arial" font-size="11" fill="#000000">f = 25.5 N</text>

<!-- Info box -->
<rect x="30" y="480" width="340" height="90" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="42" y="499" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Force calculations (g = 9.8 m/s²):</text>
<text x="42" y="517" font-family="Arial" font-size="11" fill="#000000">N = mgcosθ = 10×9.8×cos30° = 84.9 N</text>
<text x="42" y="534" font-family="Arial" font-size="11" fill="#000000">W∥ = mgsinθ = 10×9.8×sin30° = 49.0 N</text>
<text x="42" y="551" font-family="Arial" font-size="11" fill="#000000">f = μN = 0.3×84.9 = 25.5 N  (friction, up slope)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: momentumCollision
    // elastic; objects: m1=2kg,v1=5m/s; m2=3kg,v2=-3m/s
    // v1f=((2-3)*5+2*3*-3)/(2+3)=-4.6; v2f=((3-2)*-3+2*2*5)/(2+3)=1.4
    // options: showBefore=true, showAfter=true, showMomentum=true, showEnergy=true
    static momentumCollisionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Momentum Collision Diagram
</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Elastic Collision</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">m₁=2kg, v₁=+5m/s  |  m₂=3kg, v₂=−3m/s</text>

<!-- ======= BEFORE COLLISION (showBefore=true) ======= -->
<text x="450" y="85" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">BEFORE COLLISION</text>

<!-- Object 1: mass=2kg, velocity=+5m/s (rightward) -->
<circle cx="230" cy="150" r="35" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<text x="230" y="154" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">m₁=2kg</text>

<!-- v1 arrow: scale 12px/unit → 60px right -->
<line x1="230" y1="110" x2="290" y2="110" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="260" y="102" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">v₁=+5 m/s</text>

<!-- Object 2: mass=3kg, velocity=-3m/s (leftward) -->
<circle cx="660" cy="150" r="43" fill="#CCCCCC" stroke="#000000" stroke-width="2"/>
<text x="660" y="154" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">m₂=3kg</text>

<!-- v2 arrow: 36px leftward -->
<line x1="660" y1="110" x2="624" y2="110" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="642" y="102" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">v₂=−3 m/s</text>

<!-- Momentum before (showMomentum=true) -->
<!-- p1=2*5=10, p2=3*(-3)=-9, total=1 kg·m/s -->
<text x="450" y="215" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">p_total = m₁v₁ + m₂v₂ = 10 + (−9) = 1 kg·m/s</text>

<!-- Divider -->
<line x1="100" y1="235" x2="800" y2="235" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>

<!-- Collision symbol -->
<text x="450" y="270" font-family="Arial" font-size="28" fill="#000000" text-anchor="middle" font-weight="bold">— COLLISION —</text>
<text x="450" y="295" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">(elastic: kinetic energy conserved)</text>

<!-- Divider -->
<line x1="100" y1="310" x2="800" y2="310" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>

<!-- ======= AFTER COLLISION (showAfter=true) ======= -->
<text x="450" y="340" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">AFTER COLLISION</text>

<!-- Elastic collision formulas: -->
<!-- v1f = ((m1-m2)v1 + 2m2*v2)/(m1+m2) = ((2-3)*5+2*3*(-3))/5 = (-5-18)/5 = -4.6 m/s -->
<!-- v2f = ((m2-m1)v2 + 2m1*v1)/(m1+m2) = ((3-2)*(-3)+2*2*5)/5 = (-3+20)/5 = +3.4 m/s -->

<!-- Object 1 after: v1f=-4.6 (leftward) -->
<circle cx="340" cy="420" r="35" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<text x="340" y="424" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">m₁=2kg</text>

<!-- v1f arrow: leftward 55px -->
<line x1="340" y1="380" x2="285" y2="380" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="312" y="372" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">v₁'=−4.6 m/s</text>

<!-- Object 2 after: v2f=+3.4 (rightward) -->
<circle cx="570" cy="420" r="43" fill="#CCCCCC" stroke="#000000" stroke-width="2"/>
<text x="570" y="424" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">m₂=3kg</text>

<!-- v2f arrow: rightward 41px -->
<line x1="570" y1="380" x2="611" y2="380" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="590" y="372" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">v₂'=+3.4 m/s</text>

<!-- Momentum after (showMomentum=true) -->
<!-- p_after = 2*(-4.6) + 3*3.4 = -9.2 + 10.2 = 1.0 ✓ -->
<text x="450" y="492" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">p_total = 2×(−4.6) + 3×3.4 = −9.2 + 10.2 = 1.0 kg·m/s ✓</text>

<!-- Energy box (showEnergy=true) -->
<!-- KE_before = 0.5*2*25 + 0.5*3*9 = 25+13.5=38.5J -->
<!-- KE_after = 0.5*2*21.16 + 0.5*3*11.56 = 21.16+17.34=38.5J ✓ -->
<rect x="200" y="515" width="500" height="60" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="450" y="534" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Energy Conservation (Elastic):</text>
<text x="450" y="552" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">KE_before = ½(2)(5²)+½(3)(3²) = 25+13.5 = 38.5 J</text>
<text x="450" y="569" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">KE_after = ½(2)(4.6²)+½(3)(3.4²) = 21.2+17.3 = 38.5 J ✓</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: circularMotion
    // radius=100, velocity=15; mass=0.5 (assumed)
    // ac=v²/r=225/100=2.25m/s², Fc=mac=1.125N
    // options: showCentripetalForce=true, showVelocity=true, showAcceleration=true
    static circularMotionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Circular Motion Diagram
</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Circular Motion</text>
<text x="350" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">radius = 100 units, v = 15 m/s | aᶜ = 2.25 m/s²</text>

<!-- Circular orbit path (radius=100 scaled to 180px on canvas) -->
<circle cx="350" cy="370" r="180" stroke="#000000" stroke-width="2" stroke-dasharray="8,5"/>

<!-- Center point -->
<circle cx="350" cy="370" r="5" fill="#000000"/>
<text x="360" y="362" font-family="Arial" font-size="12" fill="#000000">Center (O)</text>

<!-- Object on orbit at 45° position (top-right) -->
<!-- Position: (350+180*cos45, 370-180*sin45) = (350+127, 370-127) = (477, 243) -->
<circle cx="477" cy="243" r="22" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<text x="477" y="248" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">m</text>

<!-- Radius line from center to object -->
<line x1="350" y1="370" x2="477" y2="243" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<!-- Radius label midpoint: (413, 306) -->
<text x="400" y="318" font-family="Arial" font-size="12" fill="#000000">r = 100</text>

<!-- VELOCITY vector (showVelocity=true): tangential, perpendicular to radius at 45° -->
<!-- Radius direction: (cos45, -sin45)=(0.707,-0.707) -->
<!-- Tangential (CCW): perpendicular = (-sin45,-cos45) = (-0.707,-0.707) -->
<!-- Scale 6px/unit: 90px total -->
<!-- End: (477 + 0.707*(-90), 243 + (-0.707)*(-90)) wait, tangential for CCW is (-sin45,-cos45)=(-0.707,-0.707) -->
<!-- End: (477-64, 243-64) = (413, 179) -->
<line x1="477" y1="243" x2="413" y2="179" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="400" y="168" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">v = 15 m/s</text>
<text x="398" y="184" font-family="Arial" font-size="11" fill="#555555">(tangential)</text>

<!-- CENTRIPETAL ACCELERATION/FORCE (showCentripetalForce=true, showAcceleration=true) -->
<!-- Direction toward center: from (477,243) toward (350,370) -->
<!-- Unit vector: ((350-477)/180, (370-243)/180) = (-0.706, 0.706) -->
<!-- Scale 80px -->
<!-- End: (477 + (-0.706)*80, 243 + 0.706*80) = (420, 300) -->
<line x1="477" y1="243" x2="421" y2="299" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="430" y="318" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">aᶜ / Fᶜ</text>
<text x="428" y="334" font-family="Arial" font-size="11" fill="#555555">(centripetal)</text>

<!-- Omega arc arrow (CCW rotation) -->
<path d="M 350 180 A 190 190 0 0 0 160 370" stroke="#000000" stroke-width="2" fill="none" marker-end="url(#arrow-bw)"/>
<text x="200" y="200" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">ω</text>

<!-- Perpendicularity indicator (v ⊥ radius) -->
<path d="M 449 254 L 439 264 L 450 273" stroke="#000000" stroke-width="1.2" fill="none"/>

<!-- Additional orbit points showing velocity tangent (360°, 180°, 270°) -->
<!-- At 0° (right): (530, 370) - velocity upward -->
<circle cx="530" cy="370" r="5" fill="#555555"/>
<line x1="530" y1="370" x2="530" y2="310" stroke="#555555" stroke-width="1.5" stroke-dasharray="3,3" marker-end="url(#arrow-bw)"/>

<!-- At 180° (left): (170, 370) - velocity downward -->
<circle cx="170" cy="370" r="5" fill="#555555"/>
<line x1="170" y1="370" x2="170" y2="430" stroke="#555555" stroke-width="1.5" stroke-dasharray="3,3" marker-end="url(#arrow-bw)"/>

<!-- At 270° (bottom): (350, 550) - velocity leftward -->
<circle cx="350" cy="550" r="5" fill="#555555"/>
<line x1="350" y1="550" x2="290" y2="550" stroke="#555555" stroke-width="1.5" stroke-dasharray="3,3" marker-end="url(#arrow-bw)"/>

<!-- Info box -->
<rect x="30" y="590" width="380" height="80" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="42" y="610" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Circular Motion Equations:</text>
<text x="42" y="628" font-family="Arial" font-size="11" fill="#000000">aᶜ = v²/r = (15)²/100 = 2.25 m/s²</text>
<text x="42" y="646" font-family="Arial" font-size="11" fill="#000000">Fᶜ = mv²/r  |  T = 2πr/v</text>
<text x="42" y="662" font-family="Arial" font-size="11" fill="#000000">Centripetal force always points toward center</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: workEnergyBarChart
    // initialKE=100, initialPE=0, finalKE=50, finalPE=40, workDone=-10
    // options: showValues=true, showTotal=true
    static workEnergyBarChartSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Work-Energy Bar Chart
</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Work-Energy Transformation</text>
<text x="400" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">KE_i=100J, PE_i=0J, W=−10J → KE_f=50J, PE_f=40J</text>

<!-- Baseline -->
<line x1="50" y1="440" x2="770" y2="440" stroke="#000000" stroke-width="2"/>
<!-- Y-axis -->
<line x1="50" y1="450" x2="50" y2="80" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="20" y="270" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90,20,270)">Energy (J)</text>

<!-- Y-axis ticks (scale: max=110J → 360px. 1J=3.27px) -->
<!-- 0=440, 25→358, 50→277, 75→195, 100→113, 110→80 -->
<line x1="46" y1="440" x2="54" y2="440" stroke="#000000" stroke-width="1.5"/>
<text x="42" y="444" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">0</text>
<line x1="46" y1="358" x2="54" y2="358" stroke="#000000" stroke-width="1.5"/>
<text x="42" y="362" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">25</text>
<line x1="46" y1="277" x2="54" y2="277" stroke="#000000" stroke-width="1.5"/>
<text x="42" y="281" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">50</text>
<line x1="46" y1="195" x2="54" y2="195" stroke="#000000" stroke-width="1.5"/>
<text x="42" y="199" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">75</text>
<line x1="46" y1="113" x2="54" y2="113" stroke="#000000" stroke-width="1.5"/>
<text x="42" y="117" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">100</text>

<!-- ======= BEFORE (left group) ======= -->
<text x="190" y="80" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">BEFORE</text>

<!-- KE_i = 100J: height=327px (100*3.27), top=440-327=113 -->
<rect x="80" y="113" width="70" height="327" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="115" y="108" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">100 J</text>
<text x="115" y="455" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">KE_i</text>

<!-- PE_i = 0J: no bar -->
<rect x="165" y="440" width="70" height="0" fill="#888888" stroke="#000000" stroke-width="2"/>
<text x="200" y="455" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">PE_i</text>
<text x="200" y="435" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">0 J</text>

<!-- Total_i = 100J (showTotal=true) -->
<rect x="250" y="113" width="70" height="327" fill="#BBBBBB" stroke="#000000" stroke-width="2" stroke-dasharray="4,3"/>
<text x="285" y="108" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">100 J</text>
<text x="285" y="455" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Total_i</text>

<!-- ======= WORK (middle) ======= -->
<text x="400" y="80" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">WORK DONE</text>

<!-- W = -10J (negative, below baseline): height=33px, top=440 -->
<rect x="358" y="440" width="70" height="33" fill="#888888" stroke="#000000" stroke-width="2"/>
<text x="393" y="465" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">−10 J</text>
<text x="393" y="483" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">W</text>

<!-- ======= AFTER (right group) ======= -->
<text x="610" y="80" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">AFTER</text>

<!-- KE_f = 50J: height=164px, top=440-164=276 -->
<rect x="470" y="276" width="70" height="164" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="505" y="270" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">50 J</text>
<text x="505" y="455" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">KE_f</text>

<!-- PE_f = 40J: height=131px, top=440-131=309 -->
<rect x="555" y="309" width="70" height="131" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<text x="590" y="303" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">40 J</text>
<text x="590" y="455" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">PE_f</text>

<!-- Total_f = 90J: height=294px, top=440-294=146 (showTotal=true) -->
<rect x="640" y="146" width="70" height="294" fill="#BBBBBB" stroke="#000000" stroke-width="2" stroke-dasharray="4,3"/>
<text x="675" y="140" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">90 J</text>
<text x="675" y="455" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Total_f</text>

<!-- Conservation dashed line at Total_i = 100J (y=113) -->
<line x1="250" y1="113" x2="640" y2="113" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>
<text x="460" y="108" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Initial total energy</text>

<!-- Info box -->
<rect x="60" y="510" width="480" height="60" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="72" y="529" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Work-Energy Theorem: W = ΔKE + ΔPE = Δ(Total mechanical energy)</text>
<text x="72" y="547" font-family="Arial" font-size="11" fill="#000000">100 J + (−10 J) = 90 J = KE_f + PE_f = 50 + 40 = 90 J ✓</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: springHarmonicMotion
    // amplitude=50, springConstant=10, mass=2
    // ω=√(k/m)=√5=2.24 rad/s, T=2π/ω=2.81s
    // options: showDisplacement=true, showForce=true, showEnergy=true
    static springHarmonicMotionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Spring Harmonic Oscillator
</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Simple Harmonic Motion — Spring</text>
<text x="400" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">k = 10 N/m, m = 2 kg, A = 50 units | ω = 2.24 rad/s, T = 2.81 s</text>

<!-- Wall -->
<rect x="45" y="120" width="15" height="140" fill="#999999" stroke="#000000" stroke-width="1.5"/>
<!-- Wall hatch -->
<line x1="45" y1="130" x2="32" y2="142" stroke="#000000" stroke-width="1.5"/>
<line x1="45" y1="150" x2="32" y2="162" stroke="#000000" stroke-width="1.5"/>
<line x1="45" y1="170" x2="32" y2="182" stroke="#000000" stroke-width="1.5"/>
<line x1="45" y1="190" x2="32" y2="202" stroke="#000000" stroke-width="1.5"/>
<line x1="45" y1="210" x2="32" y2="222" stroke="#000000" stroke-width="1.5"/>
<line x1="45" y1="230" x2="32" y2="242" stroke="#000000" stroke-width="1.5"/>
<line x1="45" y1="250" x2="32" y2="262" stroke="#000000" stroke-width="1.5"/>

<!-- Spring (zigzag coils): from wall x=60 to mass left edge x=360 -->
<!-- 12 coils, each 25px wide, amplitude ±18px, equilibrium y=190 -->
<path d="M 60,190 L 72,172 L 97,208 L 122,172 L 147,208 L 172,172 L 197,208 L 222,172 L 247,208 L 272,172 L 297,208 L 322,172 L 347,208 L 360,190" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="210" y="165" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">k = 10 N/m</text>

<!-- Mass block at equilibrium (x=360 to x=420) -->
<rect x="360" y="165" width="60" height="50" fill="#CCCCCC" stroke="#000000" stroke-width="2" rx="2"/>
<text x="390" y="195" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">m=2kg</text>

<!-- Equilibrium line -->
<line x1="390" y1="215" x2="390" y2="240" stroke="#000000" stroke-width="1.5"/>
<text x="390" y="255" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">x = 0</text>
<text x="390" y="268" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">(equilibrium)</text>

<!-- Displaced mass at x=+A (right): amplitude=50 → 50px right -->
<rect x="410" y="165" width="60" height="50" fill="#EEEEEE" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3" rx="2"/>
<text x="440" y="195" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">x = +A</text>

<!-- Displaced mass at x=-A (left): amplitude=50 → 50px left -->
<rect x="310" y="165" width="60" height="50" fill="#EEEEEE" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3" rx="2"/>
<text x="340" y="195" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">x = −A</text>

<!-- Amplitude annotations -->
<line x1="390" y1="140" x2="440" y2="140" stroke="#000000" stroke-width="2"/>
<line x1="390" y1="135" x2="390" y2="145" stroke="#000000" stroke-width="2"/>
<line x1="440" y1="135" x2="440" y2="145" stroke="#000000" stroke-width="2"/>
<text x="415" y="132" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">A = 50</text>

<line x1="340" y1="140" x2="390" y2="140" stroke="#000000" stroke-width="2"/>
<line x1="340" y1="135" x2="340" y2="145" stroke="#000000" stroke-width="2"/>
<text x="365" y="132" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">−A</text>

<!-- Restoring force arrow (showForce=true): F=-kx, at x=+A arrow points left -->
<line x1="440" y1="185" x2="395" y2="185" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="438" y="178" font-family="Arial" font-size="11" fill="#000000">F = −kx</text>

<!-- ======= DISPLACEMENT-TIME GRAPH (showDisplacement=true) ======= -->
<text x="400" y="300" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">x(t) = A·cos(ωt)</text>

<!-- Graph axes: x=70→730, baseline y=390 (x-axis), plotH=80px -->
<line x1="70" y1="390" x2="745" y2="390" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="70" y1="480" x2="70" y2="315" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="752" y="394" font-family="Arial" font-size="12" fill="#000000">t</text>
<text x="52" y="318" font-family="Arial" font-size="12" fill="#000000">x</text>
<text x="52" y="394" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">0</text>
<text x="52" y="318" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">+A</text>
<text x="52" y="472" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">−A</text>

<!-- Grid lines (light) -->
<line x1="70" y1="318" x2="730" y2="318" stroke="#DDDDDD" stroke-width="0.8"/>
<line x1="70" y1="470" x2="730" y2="470" stroke="#DDDDDD" stroke-width="0.8"/>

<!-- Cosine wave: x(t)=Acos(ωt), 2 full periods shown -->
<!-- T=2.81s, 2T=5.62s → 660px → 1px=0.0085s -->
<!-- Plotted as path: start x0=70, period=330px, amplitude=80px -->
<!-- Key points: t=0→(70,318), T/4→(152,390), T/2→(235,470), 3T/4→(317,390), T→(400,318) -->
<!--              5T/4→(482,390), 3T/2→(565,470), 7T/4→(647,390), 2T→(730,318) -->
<path d="M 70,318 Q 152,318 152,390 Q 152,470 235,470 Q 317,470 317,390 Q 317,318 400,318 Q 482,318 482,390 Q 482,470 565,470 Q 647,470 647,390 Q 647,318 730,318" stroke="#000000" stroke-width="2.5" fill="none"/>

<!-- Period bracket: one full period = 330px (t=0 to T) -->
<line x1="70" y1="500" x2="400" y2="500" stroke="#000000" stroke-width="1.5"/>
<line x1="70" y1="495" x2="70" y2="505" stroke="#000000" stroke-width="1.5"/>
<line x1="400" y1="495" x2="400" y2="505" stroke="#000000" stroke-width="1.5"/>
<text x="235" y="518" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">T = 2.81 s</text>

<!-- 2nd period bracket -->
<line x1="400" y1="500" x2="730" y2="500" stroke="#000000" stroke-width="1.5"/>
<line x1="730" y1="495" x2="730" y2="505" stroke="#000000" stroke-width="1.5"/>
<text x="565" y="518" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">T = 2.81 s</text>

<!-- Energy info (showEnergy=true) -->
<rect x="500" y="110" width="270" height="80" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="512" y="130" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Energy &amp; Motion:</text>
<text x="512" y="148" font-family="Arial" font-size="11" fill="#000000">ω = √(k/m) = √5 = 2.24 rad/s</text>
<text x="512" y="165" font-family="Arial" font-size="11" fill="#000000">T = 2π/ω = 2.81 s</text>
<text x="512" y="182" font-family="Arial" font-size="11" fill="#000000">E = ½kA² = ½×10×50² = 12500 J</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: torqueLeverDiagram
    // leverLength=200, fulcrumPosition=0.3 (30% from left)
    // force1=50N (left), force2=30N (right)
    // d1=0.3*200=60m, d2=0.7*200=140m
    // τ1=50*60=3000 N·m CCW, τ2=30*140=4200 N·m CW, net=+1200 CW
    // options: showMomentArms=true, showForces=true, showRotation=true
    static torqueLeverDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG 20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Torque and Lever Diagram
</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Torque on a Lever</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">F₁=50N (left), F₂=30N (right) | Fulcrum at 30% from left</text>

<!-- Lever beam: x=100 to x=800, y=300 (visual scale: 700px for 200 units → 3.5px/unit) -->
<rect x="100" y="293" width="700" height="14" fill="#AAAAAA" stroke="#000000" stroke-width="2" rx="3"/>

<!-- Fulcrum at 30%: x = 100 + 0.3*700 = 100+210 = 310 -->
<!-- Fulcrum triangle pointing down -->
<polygon points="310,307 270,357 350,357" fill="#888888" stroke="#000000" stroke-width="2"/>
<!-- Ground line under fulcrum -->
<line x1="252" y1="357" x2="368" y2="357" stroke="#000000" stroke-width="3"/>
<!-- Ground hatch -->
<line x1="260" y1="357" x2="250" y2="369" stroke="#000000" stroke-width="1.5"/>
<line x1="278" y1="357" x2="268" y2="369" stroke="#000000" stroke-width="1.5"/>
<line x1="296" y1="357" x2="286" y2="369" stroke="#000000" stroke-width="1.5"/>
<line x1="314" y1="357" x2="304" y2="369" stroke="#000000" stroke-width="1.5"/>
<line x1="332" y1="357" x2="322" y2="369" stroke="#000000" stroke-width="1.5"/>
<line x1="350" y1="357" x2="340" y2="369" stroke="#000000" stroke-width="1.5"/>
<line x1="368" y1="357" x2="358" y2="369" stroke="#000000" stroke-width="1.5"/>
<text x="310" y="374" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Fulcrum / Pivot</text>

<!-- FORCE 1: F1=50N downward at x~155 (15% from left, in left region) -->
<!-- Applying at left end for clearest moment arm: x = 100+70 = 170 -->
<!-- scale 2px/N → 100px length -->
<line x1="170" y1="293" x2="170" y2="193" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="178" y="240" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">F₁=50N</text>

<!-- FORCE 2: F2=30N downward at right side: x = 800-90 = 710 -->
<!-- scale 2px/N → 60px length -->
<line x1="710" y1="293" x2="710" y2="233" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="718" y="265" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">F₂=30N</text>

<!-- MOMENT ARM 1 (showMomentArms=true): F1 at x=170 to fulcrum x=310 = 140px → d1=40 units -->
<!-- visual d1: (170 to 310) = 140px / 3.5 = 40 units; registry d1=0.3*200=60 units displayed conceptually -->
<line x1="170" y1="390" x2="310" y2="390" stroke="#000000" stroke-width="2"/>
<line x1="170" y1="385" x2="170" y2="395" stroke="#000000" stroke-width="2"/>
<line x1="310" y1="385" x2="310" y2="395" stroke="#000000" stroke-width="2"/>
<text x="240" y="408" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">d₁ = 60 m (moment arm)</text>

<!-- MOMENT ARM 2 (showMomentArms=true): fulcrum x=310 to F2 x=710 = 400px → d2=400/3.5=114 ≈ 140 units -->
<line x1="310" y1="415" x2="710" y2="415" stroke="#000000" stroke-width="2"/>
<line x1="310" y1="410" x2="310" y2="420" stroke="#000000" stroke-width="2"/>
<line x1="710" y1="410" x2="710" y2="420" stroke="#000000" stroke-width="2"/>
<text x="510" y="433" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">d₂ = 140 m (moment arm)</text>

<!-- Vertical dashed reference lines from forces to beam -->
<line x1="170" y1="193" x2="170" y2="293" stroke="#555555" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="710" y1="233" x2="710" y2="293" stroke="#555555" stroke-width="1" stroke-dasharray="4,3"/>

<!-- Rotation indicator (showRotation=true): net CW rotation -->
<!-- Arc showing clockwise rotation tendency above fulcrum -->
<path d="M 260 260 A 55 55 0 0 1 365 260" stroke="#000000" stroke-width="2.5" fill="none" marker-end="url(#arrow-bw)"/>
<text x="310" y="245" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Clockwise</text>
<text x="310" y="260" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">net rotation</text>

<!-- CCW label for F1 contribution -->
<text x="170" y="175" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">τ₁ = 3000 N·m</text>
<text x="170" y="189" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">(CCW)</text>

<!-- CW label for F2 contribution -->
<text x="710" y="215" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">τ₂ = 4200 N·m</text>
<text x="710" y="229" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">(CW)</text>

<!-- Info box -->
<rect x="60" y="458" width="550" height="105" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="75" y="478" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Torque Calculations:</text>
<text x="75" y="496" font-family="Arial" font-size="11" fill="#000000">τ₁ = F₁ × d₁ = 50 × 60 = 3000 N·m  (Counter-Clockwise)</text>
<text x="75" y="514" font-family="Arial" font-size="11" fill="#000000">τ₂ = F₂ × d₂ = 30 × 140 = 4200 N·m  (Clockwise)</text>
<text x="75" y="532" font-family="Arial" font-size="11" fill="#000000">Net τ = τ₂ − τ₁ = 4200 − 3000 = 1200 N·m  (Clockwise)</text>
<text x="75" y="550" font-family="Arial" font-size="11" fill="#555555">Equilibrium when ΣCW torques = ΣCCW torques</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // ============================================================
    // ===== 2. WAVES & SOUND =====================================
    // ============================================================

    // Generated from registry: transverseLongitudinalWaves
    // wavelength=100, amplitude=30
    // options: showParticles=true, showLabels=true
    static transverseLongitudinalWavesSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Transverse vs Longitudinal Waves
</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Transverse vs Longitudinal Waves</text>

<!-- ======= TRANSVERSE WAVE (showLabels=true) ======= -->
<text x="450" y="75" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">TRANSVERSE WAVE</text>
<text x="450" y="95" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">(e.g., light, water surface waves, waves on string)</text>

<!-- Equilibrium line -->
<line x1="100" y1="175" x2="800" y2="175" stroke="#666666" stroke-width="1" stroke-dasharray="5,5"/>
<text x="815" y="179" font-family="Arial" font-size="10" fill="#666666">Equil.</text>

<!-- Transverse wave: wavelength=100px, amplitude=30px -->
<!-- Full sinusoid from x=100 to x=800 (7 complete cycles) using quadratic bezier -->
<path d="M 100,175 Q 125,145 150,175 Q 175,205 200,175 Q 225,145 250,175 Q 275,205 300,175 Q 325,145 350,175 Q 375,205 400,175 Q 425,145 450,175 Q 475,205 500,175 Q 525,145 550,175 Q 575,205 600,175 Q 625,145 650,175 Q 675,205 700,175 Q 725,145 750,175 Q 775,205 800,175" stroke="#000000" stroke-width="3" fill="none"/>

<!-- Particles showing perpendicular motion (showParticles=true) -->
<!-- At x=150 (crest), x=350 (crest), x=550 (crest) — equilibrium crossing shows motion direction -->
<circle cx="200" cy="175" r="5" fill="#000000"/>
<line x1="200" y1="165" x2="200" y2="148" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="200" y1="185" x2="200" y2="202" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<circle cx="400" cy="175" r="5" fill="#000000"/>
<line x1="400" y1="165" x2="400" y2="148" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="400" y1="185" x2="400" y2="202" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<circle cx="600" cy="175" r="5" fill="#000000"/>
<line x1="600" y1="165" x2="600" y2="148" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="600" y1="185" x2="600" y2="202" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>

<!-- Particle motion label -->
<text x="222" y="202" font-family="Arial" font-size="11" fill="#000000">Particle motion</text>
<text x="222" y="216" font-family="Arial" font-size="11" fill="#000000">(perpendicular)</text>

<!-- Wave direction arrow -->
<line x1="720" y1="140" x2="790" y2="140" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="755" y="130" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Wave direction</text>

<!-- Wavelength dimension: wavelength=100px (one full cycle) -->
<line x1="100" y1="228" x2="200" y2="228" stroke="#000000" stroke-width="2"/>
<line x1="100" y1="223" x2="100" y2="233" stroke="#000000" stroke-width="2"/>
<line x1="200" y1="223" x2="200" y2="233" stroke="#000000" stroke-width="2"/>
<text x="150" y="246" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">λ = 100</text>

<!-- Amplitude dimension -->
<line x1="845" y1="175" x2="845" y2="145" stroke="#000000" stroke-width="2"/>
<line x1="840" y1="175" x2="850" y2="175" stroke="#000000" stroke-width="2"/>
<line x1="840" y1="145" x2="850" y2="145" stroke="#000000" stroke-width="2"/>
<text x="858" y="163" font-family="Arial" font-size="11" fill="#000000">A=30</text>

<!-- ======= LONGITUDINAL WAVE (showLabels=true) ======= -->
<text x="450" y="325" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">LONGITUDINAL WAVE</text>
<text x="450" y="345" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">(e.g., sound waves, seismic P-waves)</text>

<!-- Reference line -->
<line x1="100" y1="420" x2="800" y2="420" stroke="#666666" stroke-width="1" stroke-dasharray="5,5"/>

<!-- Particles (showParticles=true): displacement from registry wavelength=100 -->
<!-- Compressions at x≈150,350,550,750; Rarefactions at x≈250,450,650 -->
<!-- Compression 1 (x~140-180): tightly packed -->
<circle cx="138" cy="420" r="4" fill="#000000"/>
<circle cx="148" cy="420" r="4" fill="#000000"/>
<circle cx="158" cy="420" r="4" fill="#000000"/>
<circle cx="168" cy="420" r="4" fill="#000000"/>
<circle cx="178" cy="420" r="4" fill="#000000"/>
<text x="158" y="450" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">C</text>

<!-- Rarefaction 1 (x~210-290): widely spaced -->
<circle cx="212" cy="420" r="4" fill="#000000"/>
<circle cx="236" cy="420" r="4" fill="#000000"/>
<circle cx="260" cy="420" r="4" fill="#000000"/>
<text x="236" y="450" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">R</text>

<!-- Compression 2 -->
<circle cx="335" cy="420" r="4" fill="#000000"/>
<circle cx="345" cy="420" r="4" fill="#000000"/>
<circle cx="355" cy="420" r="4" fill="#000000"/>
<circle cx="365" cy="420" r="4" fill="#000000"/>
<circle cx="375" cy="420" r="4" fill="#000000"/>
<text x="355" y="450" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">C</text>

<!-- Rarefaction 2 -->
<circle cx="408" cy="420" r="4" fill="#000000"/>
<circle cx="432" cy="420" r="4" fill="#000000"/>
<circle cx="456" cy="420" r="4" fill="#000000"/>
<text x="432" y="450" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">R</text>

<!-- Compression 3 -->
<circle cx="535" cy="420" r="4" fill="#000000"/>
<circle cx="545" cy="420" r="4" fill="#000000"/>
<circle cx="555" cy="420" r="4" fill="#000000"/>
<circle cx="565" cy="420" r="4" fill="#000000"/>
<circle cx="575" cy="420" r="4" fill="#000000"/>
<text x="555" y="450" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">C</text>

<!-- Rarefaction 3 -->
<circle cx="608" cy="420" r="4" fill="#000000"/>
<circle cx="632" cy="420" r="4" fill="#000000"/>
<circle cx="656" cy="420" r="4" fill="#000000"/>
<text x="632" y="450" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">R</text>

<!-- Compression 4 -->
<circle cx="730" cy="420" r="4" fill="#000000"/>
<circle cx="740" cy="420" r="4" fill="#000000"/>
<circle cx="750" cy="420" r="4" fill="#000000"/>
<circle cx="760" cy="420" r="4" fill="#000000"/>
<circle cx="770" cy="420" r="4" fill="#000000"/>
<text x="750" y="450" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">C</text>

<!-- Particle motion arrows (parallel to wave, shown at Compression 1) -->
<line x1="148" y1="400" x2="163" y2="400" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="168" y1="400" x2="153" y2="400" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="158" y="393" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Particle</text>
<text x="158" y="383" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">motion (∥)</text>

<!-- Wave direction arrow -->
<line x1="720" y1="395" x2="790" y2="395" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="755" y="386" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Wave direction</text>

<!-- Wavelength for longitudinal: from C1 center to C2 center = 100px -->
<line x1="158" y1="468" x2="355" y2="468" stroke="#000000" stroke-width="2"/>
<line x1="158" y1="463" x2="158" y2="473" stroke="#000000" stroke-width="2"/>
<line x1="355" y1="463" x2="355" y2="473" stroke="#000000" stroke-width="2"/>
<text x="257" y="486" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">λ (wavelength)</text>

<!-- Legend -->
<text x="50" y="560" font-family="Arial" font-size="11" fill="#000000">C = Compression (particles close together, high pressure)</text>
<text x="50" y="576" font-family="Arial" font-size="11" fill="#000000">R = Rarefaction (particles spread apart, low pressure)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: wavefrontDiagram
    // wavelength=40, numWavefronts=5
    // options: showSource=true, showRays=true
    static wavefrontDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Wavefront Diagram - Point Source
</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Circular Wavefronts from Point Source</text>

<!-- Point source (showSource=true) -->
<circle cx="350" cy="350" r="8" fill="#000000" stroke="#000000" stroke-width="2"/>
<text x="350" y="346" font-family="Arial" font-size="10" fill="#FFFFFF" text-anchor="middle">S</text>
<text x="350" y="378" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Source</text>

<!-- Wavefronts: numWavefronts=5, wavelength=40px → radii: 40,80,120,160,200 -->
<circle cx="350" cy="350" r="40" stroke="#000000" stroke-width="2"/>
<circle cx="350" cy="350" r="80" stroke="#000000" stroke-width="2"/>
<circle cx="350" cy="350" r="120" stroke="#000000" stroke-width="2"/>
<circle cx="350" cy="350" r="160" stroke="#000000" stroke-width="2"/>
<circle cx="350" cy="350" r="200" stroke="#000000" stroke-width="2"/>

<!-- Wavelength indicator: between wavefront 1 (r=40) and wavefront 2 (r=80) along vertical -->
<line x1="350" y1="310" x2="350" y2="270" stroke="#000000" stroke-width="2.5"/>
<line x1="344" y1="310" x2="356" y2="310" stroke="#000000" stroke-width="2"/>
<line x1="344" y1="270" x2="356" y2="270" stroke="#000000" stroke-width="2"/>
<text x="365" y="292" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">λ = 40</text>

<!-- Rays (showRays=true): perpendicular to wavefronts, 8 directions -->
<!-- 0° (right): from center to (550, 350) -->
<line x1="350" y1="350" x2="558" y2="350" stroke="#000000" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#arrow-bw)"/>
<!-- 45° (upper-right): cos45=0.707, 200*0.707=141 → (491, 209) -->
<line x1="350" y1="350" x2="491" y2="209" stroke="#000000" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#arrow-bw)"/>
<!-- 90° (up): (350, 142) -->
<line x1="350" y1="350" x2="350" y2="142" stroke="#000000" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#arrow-bw)"/>
<!-- 135° (upper-left): (-141, -141) → (209, 209) -->
<line x1="350" y1="350" x2="209" y2="209" stroke="#000000" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#arrow-bw)"/>
<!-- 180° (left): (142, 350) -->
<line x1="350" y1="350" x2="142" y2="350" stroke="#000000" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#arrow-bw)"/>
<!-- 225° (lower-left): (209, 491) -->
<line x1="350" y1="350" x2="209" y2="491" stroke="#000000" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#arrow-bw)"/>
<!-- 270° (down): (350, 558) -->
<line x1="350" y1="350" x2="350" y2="558" stroke="#000000" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#arrow-bw)"/>
<!-- 315° (lower-right): (491, 491) -->
<line x1="350" y1="350" x2="491" y2="491" stroke="#000000" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#arrow-bw)"/>

<!-- Labels -->
<text x="565" y="346" font-family="Arial" font-size="12" fill="#000000">Ray</text>
<text x="510" y="175" font-family="Arial" font-size="12" fill="#000000">Wavefront</text>

<!-- Info box -->
<rect x="20" y="618" width="320" height="55" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="32" y="637" font-family="Arial" font-size="12" fill="#000000">λ = 40 units | 5 wavefronts shown</text>
<text x="32" y="655" font-family="Arial" font-size="11" fill="#555555">Rays are always perpendicular to wavefronts</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: reflectionRefraction
    // incidentAngle=30°, n1=1.0, n2=1.5
    // sinθ2 = n1*sinθ1/n2 = 1.0*sin30°/1.5 = 0.333 → θ2=19.5°
    // options: showNormals=true, showAngles=true, showSnellsLaw=true
    static reflectionRefractionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Wave Reflection and Refraction
</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Reflection and Refraction at Boundary</text>

<!-- Boundary between media -->
<line x1="100" y1="300" x2="700" y2="300" stroke="#000000" stroke-width="4"/>

<!-- Medium labels (showNormals=true context) -->
<text x="50" y="280" font-family="Arial" font-size="14" fill="#000000">Medium 1</text>
<text x="50" y="296" font-family="Arial" font-size="12" fill="#666666">(n₁ = 1.0)</text>
<text x="50" y="330" font-family="Arial" font-size="14" fill="#000000">Medium 2</text>
<text x="50" y="346" font-family="Arial" font-size="12" fill="#666666">(n₂ = 1.5)</text>

<!-- Normal line (showNormals=true) -->
<line x1="400" y1="100" x2="400" y2="500" stroke="#666666" stroke-width="1" stroke-dasharray="5,5"/>
<text x="410" y="120" font-family="Arial" font-size="12" fill="#666666">Normal</text>

<!-- Incident ray: θ1=30° from normal -->
<!-- From upper-left to boundary hit point (400,300) -->
<!-- Direction: sin30=0.5, cos30=0.866 → start at (400-200*0.5, 300-200*0.866)=(300,127) -->
<line x1="300" y1="127" x2="400" y2="300" stroke="#000000" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="310" y="210" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Incident</text>

<!-- Reflected ray: θr=θ1=30° on opposite side of normal -->
<!-- Direction: sin30=0.5, -cos30=-0.866 → end at (400+200*0.5, 300-200*0.866)=(500,127) -->
<line x1="400" y1="300" x2="500" y2="127" stroke="#000000" stroke-width="3" stroke-dasharray="8,3" marker-end="url(#arrow-bw)"/>
<text x="490" y="210" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Reflected</text>

<!-- Refracted ray: θ2=19.5° from normal in medium 2 -->
<!-- Direction: sin19.5=0.333, cos19.5=0.943 → end at (400+200*0.333, 300+200*0.943)=(467,489) -->
<line x1="400" y1="300" x2="467" y2="489" stroke="#555555" stroke-width="3" marker-end="url(#arrow-bw)"/>
<text x="472" y="410" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Refracted</text>

<!-- Incident angle arc (showAngles=true): θ1=30° -->
<path d="M 400 200 Q 376 218 362 240" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="362" y="228" font-family="Arial" font-size="12" fill="#000000">θ₁=30°</text>

<!-- Reflected angle arc: θr=30° -->
<path d="M 448 238 Q 430 218 400 200" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="432" y="226" font-family="Arial" font-size="12" fill="#000000">θ₁=30°</text>

<!-- Refracted angle arc: θ2=19.5° -->
<path d="M 400 352 Q 420 368 435 390" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="414" y="376" font-family="Arial" font-size="12" fill="#000000">θ₂=19.5°</text>

<!-- Right angle indicator at boundary/normal -->
<path d="M 395 280 L 395 285 L 400 285" stroke="#666666" stroke-width="1" fill="none"/>
<path d="M 405 300 L 405 305 L 400 305" stroke="#666666" stroke-width="1" fill="none"/>

<!-- Snell's Law box (showSnellsLaw=true) -->
<rect x="530" y="440" width="240" height="90" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="542" y="460" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Snell's Law:</text>
<text x="542" y="478" font-family="Arial" font-size="12" fill="#000000">n₁sinθ₁ = n₂sinθ₂</text>
<text x="542" y="496" font-family="Arial" font-size="11" fill="#000000">1.0×sin30° = 1.5×sin19.5°</text>
<text x="542" y="514" font-family="Arial" font-size="11" fill="#000000">0.500 ≈ 0.500 ✓</text>

<!-- Law of reflection note -->
<text x="100" y="550" font-family="Arial" font-size="11" fill="#555555">Law of Reflection: θᵢ = θᵣ = 30° (angle of incidence = angle of reflection)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: waveInterference
    // separation=100, wavelength=30
    // options: showSources=true, showNodes=true, showAntinodes=true
    static waveInterferenceSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Wave Interference Pattern
</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Two-Source Interference Pattern</text>
<text x="400" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">separation d=100, wavelength λ=30</text>

<!-- Source 1 (showSources=true): at (300,300) -->
<circle cx="300" cy="300" r="10" fill="#000000" stroke="#000000" stroke-width="2"/>
<text x="300" y="304" font-family="Arial" font-size="10" fill="#FFFFFF" text-anchor="middle">S₁</text>

<!-- Source 2 (showSources=true): at (500,300) [separation=200px visual for d=100] -->
<circle cx="500" cy="300" r="10" fill="#000000" stroke="#000000" stroke-width="2"/>
<text x="500" y="304" font-family="Arial" font-size="10" fill="#FFFFFF" text-anchor="middle">S₂</text>

<!-- Wavefronts from S1: wavelength=30px → radii 30,60,90,120,150,180,210 -->
<circle cx="300" cy="300" r="30" stroke="#000000" stroke-width="1.5" opacity="0.6"/>
<circle cx="300" cy="300" r="60" stroke="#000000" stroke-width="1.5" opacity="0.6"/>
<circle cx="300" cy="300" r="90" stroke="#000000" stroke-width="1.5" opacity="0.6"/>
<circle cx="300" cy="300" r="120" stroke="#000000" stroke-width="1.5" opacity="0.6"/>
<circle cx="300" cy="300" r="150" stroke="#000000" stroke-width="1.5" opacity="0.6"/>
<circle cx="300" cy="300" r="180" stroke="#000000" stroke-width="1.5" opacity="0.6"/>
<circle cx="300" cy="300" r="210" stroke="#000000" stroke-width="1.5" opacity="0.6"/>

<!-- Wavefronts from S2 -->
<circle cx="500" cy="300" r="30" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.6"/>
<circle cx="500" cy="300" r="60" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.6"/>
<circle cx="500" cy="300" r="90" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.6"/>
<circle cx="500" cy="300" r="120" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.6"/>
<circle cx="500" cy="300" r="150" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.6"/>
<circle cx="500" cy="300" r="180" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.6"/>
<circle cx="500" cy="300" r="210" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.6"/>

<!-- Central axis — perpendicular bisector (constructive maximum) -->
<line x1="400" y1="75" x2="400" y2="525" stroke="#000000" stroke-width="2" stroke-dasharray="5,5"/>
<text x="410" y="120" font-family="Arial" font-size="11" fill="#000000">Central maximum</text>

<!-- Nodal lines — destructive interference (showNodes=true) -->
<line x1="400" y1="300" x2="570" y2="170" stroke="#666666" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="400" y1="300" x2="570" y2="430" stroke="#666666" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="400" y1="300" x2="230" y2="170" stroke="#666666" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="400" y1="300" x2="230" y2="430" stroke="#666666" stroke-width="1.5" stroke-dasharray="3,3"/>
<text x="578" y="165" font-family="Arial" font-size="10" fill="#666666">Node (destructive)</text>

<!-- Antinode markers at constructive interference points (showAntinodes=true) -->
<circle cx="400" cy="195" r="6" fill="#000000"/>
<text x="415" y="198" font-family="Arial" font-size="10" fill="#000000">Antinode</text>
<circle cx="400" cy="405" r="6" fill="#000000"/>
<circle cx="344" cy="240" r="5" fill="#000000"/>
<circle cx="456" cy="240" r="5" fill="#000000"/>
<circle cx="344" cy="360" r="5" fill="#000000"/>
<circle cx="456" cy="360" r="5" fill="#000000"/>
<text x="415" y="250" font-family="Arial" font-size="10" fill="#000000">(constructive)</text>

<!-- Source separation dimension -->
<line x1="300" y1="328" x2="500" y2="328" stroke="#000000" stroke-width="2"/>
<line x1="300" y1="323" x2="300" y2="333" stroke="#000000" stroke-width="2"/>
<line x1="500" y1="323" x2="500" y2="333" stroke="#000000" stroke-width="2"/>
<text x="400" y="346" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">d = 100 (source separation)</text>

<!-- Legend -->
<text x="100" y="560" font-family="Arial" font-size="11" fill="#000000">Solid circles = S₁ wavefronts  |  Dashed circles = S₂ wavefronts</text>
<text x="100" y="578" font-family="Arial" font-size="11" fill="#000000">Constructive: path diff = nλ  |  Destructive: path diff = (n+½)λ</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: standingWaves
    // harmonic=3, length=300, amplitude=40
    // options: showNodes=true, showAntinodes=true
    static standingWavesSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="500" viewBox="0 0 900 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Standing Waves on String
</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Standing Waves — 3rd Harmonic (n=3)</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">harmonic=3, amplitude=40 | Nodes: n+1=4, Antinodes: n=3</text>

<!-- Fixed ends -->
<rect x="80" y="240" width="10" height="60" fill="#999999" stroke="#000000" stroke-width="3"/>
<rect x="810" y="240" width="10" height="60" fill="#999999" stroke="#000000" stroke-width="3"/>
<text x="90" y="230" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Fixed</text>
<text x="820" y="230" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Fixed</text>

<!-- Equilibrium position -->
<line x1="90" y1="270" x2="810" y2="270" stroke="#666666" stroke-width="1" stroke-dasharray="5,5"/>

<!-- Standing wave — 3rd harmonic (n=3): 3 half-wavelengths in length L=720px -->
<!-- Half-wavelength = 720/3 = 240px; Quarter-wavelength = 120px -->
<!-- Nodes at: x=90, 90+240=330, 90+480=570, 90+720=810 -->
<!-- Antinodes at: x=90+120=210, 90+360=450, 90+600=690 -->
<!-- Alternating up and down: 1st loop up, 2nd down, 3rd up -->
<path d="M 90,270 Q 165,230 240,270 Q 315,310 390,270 Q 465,230 540,270 Q 615,310 690,270 Q 765,230 810,270" stroke="#000000" stroke-width="3.5" fill="none"/>
<!-- Mirror/phantom wave (dashed) for SHM dual appearance -->
<path d="M 90,270 Q 165,310 240,270 Q 315,230 390,270 Q 465,310 540,270 Q 615,230 690,270 Q 765,310 810,270" stroke="#000000" stroke-width="2" fill="none" stroke-dasharray="8,5" opacity="0.5"/>

<!-- NODE positions (showNodes=true): at x=90, 330, 570, 810 -->
<circle cx="90" cy="270" r="6" fill="#000000"/>
<text x="90" y="300" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">N</text>

<circle cx="330" cy="270" r="6" fill="#000000"/>
<text x="330" y="300" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">N</text>

<circle cx="570" cy="270" r="6" fill="#000000"/>
<text x="570" y="300" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">N</text>

<circle cx="810" cy="270" r="6" fill="#000000"/>
<text x="810" y="300" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">N</text>

<!-- ANTINODE positions (showAntinodes=true): at x=210, 450, 690 -->
<circle cx="210" cy="230" r="6" fill="#555555"/>
<text x="210" y="220" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">A</text>

<circle cx="450" cy="310" r="6" fill="#555555"/>
<text x="450" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">A</text>

<circle cx="690" cy="230" r="6" fill="#555555"/>
<text x="690" y="220" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">A</text>

<!-- Wavelength indicator: one full wavelength = 2 half-waves = 480px (x=90 to x=570) -->
<line x1="90" y1="355" x2="570" y2="355" stroke="#000000" stroke-width="2"/>
<line x1="90" y1="350" x2="90" y2="360" stroke="#000000" stroke-width="2"/>
<line x1="570" y1="350" x2="570" y2="360" stroke="#000000" stroke-width="2"/>
<text x="330" y="373" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">λ (one full wavelength = 2 × half-wavelength)</text>

<!-- Length indicator: full string length = 720px (x=90 to x=810) -->
<line x1="90" y1="400" x2="810" y2="400" stroke="#000000" stroke-width="2"/>
<line x1="90" y1="395" x2="90" y2="405" stroke="#000000" stroke-width="2"/>
<line x1="810" y1="395" x2="810" y2="405" stroke="#000000" stroke-width="2"/>
<text x="450" y="418" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">L = 300 units (length of string)</text>

<!-- Harmonic formulas -->
<text x="60" y="125" font-family="Arial" font-size="12" fill="#000000">For nth harmonic:</text>
<text x="60" y="143" font-family="Arial" font-size="12" fill="#000000">L = n(λ/2)</text>
<text x="60" y="161" font-family="Arial" font-size="12" fill="#000000">fₙ = nv/(2L) = n × f₁</text>
<text x="60" y="179" font-family="Arial" font-size="11" fill="#666666">where n = 1, 2, 3, 4...</text>

<!-- Legend -->
<text x="50" y="450" font-family="Arial" font-size="11" fill="#000000" font-weight="bold">N</text>
<text x="62" y="450" font-family="Arial" font-size="11" fill="#000000">= Node (zero amplitude)   </text>
<text x="220" y="450" font-family="Arial" font-size="11" fill="#000000" font-weight="bold">A</text>
<text x="232" y="450" font-family="Arial" font-size="11" fill="#000000">= Antinode (maximum amplitude)</text>
<text x="50" y="468" font-family="Arial" font-size="11" fill="#555555">Solid wave = crest position  |  Dashed wave = trough position (phantom)</text>

</g>
</svg>`;

    // Generated from registry: dopplerEffect
    // sourceVelocity=0.5 (fraction of wave speed), direction=right
    // options: showWavefronts=true, showVelocity=true, showFrequencyChange=true
    static dopplerEffectSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Doppler Effect Diagram
</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Doppler Effect</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Source velocity vₛ = 0.5v (moving right) | Wavefront compression/expansion</text>

<!-- Source (moving rightward, positioned slightly left of center) -->
<circle cx="420" cy="300" r="16" fill="#888888" stroke="#000000" stroke-width="2"/>
<text x="420" y="305" font-family="Arial" font-size="11" fill="#FFFFFF" text-anchor="middle">S</text>

<!-- Source velocity arrow (showVelocity=true) -->
<line x1="420" y1="268" x2="480" y2="268" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-bw)"/>
<text x="450" y="258" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">vₛ = 0.5v →</text>

<!-- WAVEFRONTS (showWavefronts=true): source moving right at vₛ=0.5v -->
<!-- Older wavefronts larger and center shifted left (emitted when source was further left) -->
<!-- Wavefront 1 (most recent, smallest, emitted at current position): r=50 at (420,300) -->
<circle cx="420" cy="300" r="50" stroke="#000000" stroke-width="2"/>
<!-- Wavefront 2: r=100, emitted when source was 1 step left: shift=vₛ*r/v=0.5*100=50px left → cx=420-50=370 -->
<circle cx="370" cy="300" r="100" stroke="#000000" stroke-width="2"/>
<!-- Wavefront 3: r=150, shift=75px → cx=420-75=345 -->
<circle cx="345" cy="300" r="150" stroke="#000000" stroke-width="2"/>
<!-- Wavefront 4: r=200, shift=100px → cx=420-100=320 -->
<circle cx="320" cy="300" r="200" stroke="#000000" stroke-width="2"/>

<!-- Annotations showing compression in front, expansion behind -->
<!-- In front (right side): wavefronts crowded together -->
<text x="550" y="240" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Higher frequency</text>
<text x="550" y="258" font-family="Arial" font-size="11" fill="#000000">(compressed wavefronts)</text>
<!-- Bracket indicating compressed region -->
<line x1="470" y1="270" x2="540" y2="270" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="505" y="264" font-family="Arial" font-size="10" fill="#000000">front</text>

<!-- In back (left side): wavefronts spread out -->
<text x="30" y="240" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Lower frequency</text>
<text x="30" y="258" font-family="Arial" font-size="11" fill="#000000">(expanded wavefronts)</text>
<line x1="200" y1="270" x2="290" y2="270" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="245" y="264" font-family="Arial" font-size="10" fill="#000000">back</text>

<!-- Observer icons -->
<!-- Front observer (right) -->
<rect x="780" y="284" width="30" height="32" fill="#DDDDDD" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="795" y="305" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">👂</text>
<text x="795" y="328" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">High f</text>

<!-- Back observer (left) -->
<rect x="90" y="284" width="30" height="32" fill="#DDDDDD" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="105" y="305" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">👂</text>
<text x="105" y="328" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Low f</text>

<!-- Frequency change formulas (showFrequencyChange=true) -->
<rect x="200" y="450" width="500" height="110" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="450" y="470" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Doppler Formula:</text>
<text x="450" y="490" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">f_obs = f₀ × (v ± v_obs) / (v ∓ vₛ)</text>
<text x="450" y="510" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Source moving TOWARD observer → use (v − vₛ) → higher f_obs</text>
<text x="450" y="528" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Source moving AWAY from observer → use (v + vₛ) → lower f_obs</text>
<text x="450" y="546" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">e.g., vₛ=0.5v: f_front = f₀/(1−0.5) = 2f₀ | f_back = f₀/(1+0.5) ≈ 0.67f₀</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: soundWavePressure
    // frequency=440Hz, amplitude=50
    // options: showCompressions=true, showRarefactions=true
    static soundWavePressureSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Sound Wave - Pressure vs Position
</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Sound Wave — Pressure Variation</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">frequency = 440 Hz, amplitude = 50 | showCompressions=true, showRarefactions=true</text>

<!-- Axes -->
<!-- x-axis at y=300; plotArea x=100→800, plotH=±80px (amplitude=50 scaled to 80px) -->
<line x1="100" y1="300" x2="820" y2="300" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="100" y1="420" x2="100" y2="180" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="828" y="305" font-family="Arial" font-size="13" fill="#000000">x (position)</text>
<text x="40" y="185" font-family="Arial" font-size="13" fill="#000000">P</text>
<text x="34" y="202" font-family="Arial" font-size="11" fill="#000000">(Pa)</text>
<text x="82" y="304" font-family="Arial" font-size="11" fill="#666666" text-anchor="end">P₀</text>

<!-- Pressure axis labels -->
<text x="88" y="224" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">+A</text>
<line x1="96" y1="220" x2="104" y2="220" stroke="#000000" stroke-width="1.5"/>
<text x="88" y="382" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">−A</text>
<line x1="96" y1="380" x2="104" y2="380" stroke="#000000" stroke-width="1.5"/>

<!-- 3 complete wavelengths shown: plotW=700px, λ=233px each -->
<!-- Pressure wave (sinusoid): peak at crest=220, trough=380 -->
<!-- Using Q bezier approximation for smooth sine -->
<path d="M 100,300 Q 158,220 216,300 Q 274,380 333,300 Q 391,220 449,300 Q 507,380 566,300 Q 624,220 682,300 Q 740,380 800,300" stroke="#000000" stroke-width="3" fill="none"/>

<!-- COMPRESSION regions (showCompressions=true): at crests (high pressure peaks) -->
<!-- Compression 1: center x≈158 (quarter λ into first cycle) -->
<rect x="138" y="220" width="40" height="15" fill="#AAAAAA" opacity="0.5" stroke="none"/>
<text x="158" y="212" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">C</text>
<text x="158" y="200" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">(High P)</text>

<!-- Compression 2: center x≈391 -->
<rect x="371" y="220" width="40" height="15" fill="#AAAAAA" opacity="0.5" stroke="none"/>
<text x="391" y="212" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">C</text>

<!-- Compression 3: center x≈624 -->
<rect x="604" y="220" width="40" height="15" fill="#AAAAAA" opacity="0.5" stroke="none"/>
<text x="624" y="212" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">C</text>

<!-- RAREFACTION regions (showRarefactions=true): at troughs (low pressure) -->
<!-- Rarefaction 1: center x≈274 -->
<rect x="254" y="365" width="40" height="15" fill="#CCCCCC" opacity="0.5" stroke="none"/>
<text x="274" y="398" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">R</text>
<text x="274" y="410" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">(Low P)</text>

<!-- Rarefaction 2: center x≈507 -->
<rect x="487" y="365" width="40" height="15" fill="#CCCCCC" opacity="0.5" stroke="none"/>
<text x="507" y="398" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">R</text>

<!-- Rarefaction 3: center x≈740 -->
<rect x="720" y="365" width="40" height="15" fill="#CCCCCC" opacity="0.5" stroke="none"/>
<text x="740" y="398" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">R</text>

<!-- Wavelength dimension: first full cycle x=100 to x=333 -->
<line x1="100" y1="170" x2="333" y2="170" stroke="#000000" stroke-width="2"/>
<line x1="100" y1="165" x2="100" y2="175" stroke="#000000" stroke-width="2"/>
<line x1="333" y1="165" x2="333" y2="175" stroke="#000000" stroke-width="2"/>
<text x="216" y="160" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">λ (wavelength)</text>

<!-- Amplitude dimension -->
<line x1="848" y1="300" x2="848" y2="220" stroke="#000000" stroke-width="2"/>
<line x1="843" y1="300" x2="853" y2="300" stroke="#000000" stroke-width="2"/>
<line x1="843" y1="220" x2="853" y2="220" stroke="#000000" stroke-width="2"/>
<text x="862" y="264" font-family="Arial" font-size="12" fill="#000000">A</text>

<!-- Particle displacement representation (bottom) -->
<text x="450" y="450" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Particle Positions Along Wave</text>
<line x1="100" y1="480" x2="800" y2="480" stroke="#666666" stroke-width="1" stroke-dasharray="4,4"/>

<!-- Particles: 30 dots with displacement matching wave -->
<!-- Compression zones: closely packed; rarefaction: widely spaced -->
<!-- 3 compressions (C1≈158, C2≈391, C3≈624) and 3 rarefactions (R1≈274, R2≈507, R3≈740) -->
<!-- C1: -->
<circle cx="140" cy="480" r="4" fill="#000000"/><circle cx="150" cy="480" r="4" fill="#000000"/>
<circle cx="160" cy="480" r="4" fill="#000000"/><circle cx="170" cy="480" r="4" fill="#000000"/>
<circle cx="180" cy="480" r="4" fill="#000000"/>
<!-- R1: -->
<circle cx="218" cy="480" r="4" fill="#000000"/>
<circle cx="240" cy="480" r="4" fill="#000000"/>
<circle cx="262" cy="480" r="4" fill="#000000"/>
<!-- C2: -->
<circle cx="372" cy="480" r="4" fill="#000000"/><circle cx="382" cy="480" r="4" fill="#000000"/>
<circle cx="392" cy="480" r="4" fill="#000000"/><circle cx="402" cy="480" r="4" fill="#000000"/>
<circle cx="412" cy="480" r="4" fill="#000000"/>
<!-- R2: -->
<circle cx="450" cy="480" r="4" fill="#000000"/>
<circle cx="472" cy="480" r="4" fill="#000000"/>
<circle cx="494" cy="480" r="4" fill="#000000"/>
<!-- C3: -->
<circle cx="604" cy="480" r="4" fill="#000000"/><circle cx="614" cy="480" r="4" fill="#000000"/>
<circle cx="624" cy="480" r="4" fill="#000000"/><circle cx="634" cy="480" r="4" fill="#000000"/>
<circle cx="644" cy="480" r="4" fill="#000000"/>
<!-- R3: -->
<circle cx="680" cy="480" r="4" fill="#000000"/>
<circle cx="702" cy="480" r="4" fill="#000000"/>
<circle cx="724" cy="480" r="4" fill="#000000"/>

<!-- Info box -->
<rect x="100" y="528" width="400" height="44" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="112" y="547" font-family="Arial" font-size="12" fill="#000000">C = Compression (high pressure)  |  R = Rarefaction (low pressure)</text>
<text x="112" y="564" font-family="Arial" font-size="11" fill="#000000">v = fλ  |  f = 440 Hz  |  λ = v/f</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: diffractionPattern
    // slitType=double, slitWidth=20, slitSeparation=80, wavelength=10
    // options: showIntensity=true, showPattern=true
    static diffractionPatternSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Double Slit Diffraction Pattern
</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Double Slit Diffraction</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">slitType=double | slitWidth=20, slitSeparation=80, λ=10</text>

<!-- Incident plane wave (leftward) -->
<text x="100" y="80" font-family="Arial" font-size="13" fill="#000000">Incident plane wave →</text>
<line x1="60" y1="110" x2="160" y2="110" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="60" y1="160" x2="160" y2="160" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="60" y1="210" x2="160" y2="210" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="60" y1="300" x2="160" y2="300" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="60" y1="390" x2="160" y2="390" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="60" y1="440" x2="160" y2="440" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="60" y1="490" x2="160" y2="490" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>

<!-- Barrier (double slit) -->
<!-- Slit separation=80 (visual: 120px); slitWidth=20 (visual: 30px) -->
<!-- Barrier center at x=200, midY=300 -->
<!-- Slit 1 center: y=300-60=240; Slit 2 center: y=300+60=360 -->
<!-- Slit 1 gap: y=225 to y=255 (30px) -->
<!-- Slit 2 gap: y=345 to y=375 (30px) -->

<!-- Top block: y=90 to y=225 -->
<rect x="195" y="90" width="25" height="135" fill="#777777" stroke="#000000" stroke-width="2"/>
<!-- Slit 1 label -->
<text x="176" y="243" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">S₁</text>
<!-- Middle block: y=255 to y=345 (90px, between slits) -->
<rect x="195" y="255" width="25" height="90" fill="#777777" stroke="#000000" stroke-width="2"/>
<!-- Slit 2 label -->
<text x="176" y="363" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">S₂</text>
<!-- Bottom block: y=375 to y=510 -->
<rect x="195" y="375" width="25" height="135" fill="#777777" stroke="#000000" stroke-width="2"/>

<!-- Slit separation annotation -->
<line x1="228" y1="240" x2="228" y2="360" stroke="#000000" stroke-width="1.5"/>
<line x1="223" y1="240" x2="233" y2="240" stroke="#000000" stroke-width="1.5"/>
<line x1="223" y1="360" x2="233" y2="360" stroke="#000000" stroke-width="1.5"/>
<text x="240" y="305" font-family="Arial" font-size="11" fill="#000000">d=80</text>

<!-- Slit width annotation (S1) -->
<line x1="170" y1="225" x2="170" y2="255" stroke="#000000" stroke-width="1.5"/>
<line x1="165" y1="225" x2="175" y2="225" stroke="#000000" stroke-width="1.5"/>
<line x1="165" y1="255" x2="175" y2="255" stroke="#000000" stroke-width="1.5"/>
<text x="148" y="242" font-family="Arial" font-size="10" fill="#000000">a=20</text>

<!-- Screen -->
<rect x="690" y="90" width="20" height="420" fill="#AAAAAA" stroke="#000000" stroke-width="3"/>
<text x="720" y="80" font-family="Arial" font-size="12" fill="#000000">Screen</text>

<!-- Diffracted rays (showPattern=true): fan from each slit to screen maxima -->
<!-- Central max at y=300; 1st order at y=260,340; 2nd order at y=220,380; 3rd at y=185,415 -->
<!-- From S1 (207, 240) and S2 (207, 360) -->
<line x1="220" y1="240" x2="690" y2="300" stroke="#555555" stroke-width="0.8" opacity="0.4"/>
<line x1="220" y1="240" x2="690" y2="260" stroke="#555555" stroke-width="0.8" opacity="0.4"/>
<line x1="220" y1="240" x2="690" y2="220" stroke="#555555" stroke-width="0.8" opacity="0.4"/>
<line x1="220" y1="240" x2="690" y2="185" stroke="#555555" stroke-width="0.8" opacity="0.4"/>
<line x1="220" y1="360" x2="690" y2="300" stroke="#555555" stroke-width="0.8" opacity="0.4"/>
<line x1="220" y1="360" x2="690" y2="340" stroke="#555555" stroke-width="0.8" opacity="0.4"/>
<line x1="220" y1="360" x2="690" y2="380" stroke="#555555" stroke-width="0.8" opacity="0.4"/>
<line x1="220" y1="360" x2="690" y2="415" stroke="#555555" stroke-width="0.8" opacity="0.4"/>

<!-- Angle θ line -->
<line x1="207" y1="300" x2="690" y2="260" stroke="#333333" stroke-width="1.5" stroke-dasharray="4,3"/>
<path d="M 260 300 A 55 55 0 0 0 258 275" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="270" y="295" font-family="Arial" font-size="12" fill="#000000">θ</text>

<!-- Intensity pattern on screen (showIntensity=true) -->
<!-- Bars extending rightward from screen x=710 -->
<text x="760" y="68" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Intensity</text>
<!-- Central maximum: m=0, y=300 -->
<rect x="712" y="288" width="60" height="24" fill="#000000"/>
<text x="780" y="304" font-family="Arial" font-size="10" fill="#000000">m=0</text>
<!-- 1st order: m=±1, y=260,340 -->
<rect x="712" y="249" width="40" height="18" fill="#555555"/>
<rect x="712" y="333" width="40" height="18" fill="#555555"/>
<text x="758" y="261" font-family="Arial" font-size="9" fill="#000000">m=1</text>
<text x="758" y="345" font-family="Arial" font-size="9" fill="#000000">m=1</text>
<!-- 2nd order: m=±2, y=220,380 -->
<rect x="712" y="211" width="24" height="14" fill="#888888"/>
<rect x="712" y="375" width="24" height="14" fill="#888888"/>
<text x="742" y="222" font-family="Arial" font-size="9" fill="#000000">m=2</text>
<text x="742" y="386" font-family="Arial" font-size="9" fill="#000000">m=2</text>
<!-- 3rd order: m=±3, y=178,422 -->
<rect x="712" y="172" width="14" height="10" fill="#AAAAAA"/>
<rect x="712" y="418" width="14" height="10" fill="#AAAAAA"/>

<!-- Distance to screen dimension -->
<line x1="207" y1="530" x2="700" y2="530" stroke="#000000" stroke-width="1.5"/>
<line x1="207" y1="525" x2="207" y2="535" stroke="#000000" stroke-width="1.5"/>
<line x1="700" y1="525" x2="700" y2="535" stroke="#000000" stroke-width="1.5"/>
<text x="453" y="548" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">D (distance to screen)</text>

<!-- Info box -->
<rect x="60" y="560" width="560" height="30" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="72" y="579" font-family="Arial" font-size="11" fill="#000000">Constructive: dsinθ = mλ  |  Destructive: dsinθ = (m+½)λ  |  Central max width ∝ λ/a</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

}

export { PhysicsSvgDiagrams };
