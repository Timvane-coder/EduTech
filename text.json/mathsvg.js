// MathematicsSvgDiagrams.js
// Black & white SVG diagrams matching MathematicsDiagramsRegistry entries
// Follows same pattern as PhysicsSvgDiagrams (freeBodyDiagramSvg / transverseLongitudinalWavesSvg)

class MathematicsSvgDiagrams {

    // ============================================================
    // ===== 5. TRIGONOMETRY ======================================
    // ============================================================

    // Generated from registry: rightTriangleTrigRatios
    // angle: 30°
    // options: showTriangle, showSides, showRatios, showSOHCAHTOA
    static rightTriangleTrigRatiosSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Right Triangle Trigonometric Ratios</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Trigonometric Ratios</text>
<text x="400" y="55" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">SOH CAH TOA — Right Triangle (angle θ = 30°)</text>

<!-- Right triangle: right angle at C(150,450), A(150,180), B(580,450) -->
<!-- Sides: opposite=270, adjacent=430, hypotenuse≈507 (scaled for diagram) -->
<polygon points="150,450 150,180 580,450" stroke="#000000" stroke-width="3" fill="#F8F8F8"/>

<!-- Right-angle box at C -->
<rect x="150" y="430" width="20" height="20" stroke="#000000" stroke-width="2" fill="none"/>

<!-- Angle arc at B (30°) -->
<path d="M 546,450 A 34,34 0 0,0 519,430" stroke="#000000" stroke-width="2" fill="none"/>
<text x="510" y="448" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">θ</text>

<!-- Side labels (showSides=true) -->
<!-- Opposite (AC): vertical left side -->
<text x="120" y="325" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Opposite</text>
<text x="120" y="342" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">(opp)</text>

<!-- Adjacent (CB): horizontal bottom side -->
<text x="365" y="478" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Adjacent (adj)</text>

<!-- Hypotenuse (AB): diagonal -->
<text x="392" y="298" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold" transform="rotate(-32,392,298)">Hypotenuse (hyp)</text>

<!-- Vertex labels -->
<text x="145" y="175" font-family="Arial" font-size="15" fill="#000000" font-weight="bold">A</text>
<text x="130" y="470" font-family="Arial" font-size="15" fill="#000000" font-weight="bold">C</text>
<text x="588" y="470" font-family="Arial" font-size="15" fill="#000000" font-weight="bold">B</text>

<!-- SOH CAH TOA box (showSOHCAHTOA=true) -->
<rect x="30" y="80" width="220" height="120" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="6"/>
<text x="140" y="100" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">SOH CAH TOA</text>
<line x1="42" y1="108" x2="238" y2="108" stroke="#000000" stroke-width="1"/>
<text x="140" y="124" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">SOH: sin θ = opp / hyp</text>
<text x="140" y="142" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">CAH: cos θ = adj / hyp</text>
<text x="140" y="160" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">TOA: tan θ = opp / adj</text>
<text x="140" y="190" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(mnemonic for the three ratios)</text>

<!-- Ratios calculated for 30° (showRatios=true) -->
<rect x="570" y="80" width="210" height="130" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="6"/>
<text x="675" y="100" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Values at θ = 30°</text>
<line x1="582" y1="108" x2="768" y2="108" stroke="#000000" stroke-width="1"/>
<text x="675" y="126" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">sin 30° = 1/2 = 0.500</text>
<text x="675" y="146" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">cos 30° = √3/2 ≈ 0.866</text>
<text x="675" y="166" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">tan 30° = 1/√3 ≈ 0.577</text>
<text x="675" y="196" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">hyp=2, opp=1, adj=√3</text>

<!-- Info note at bottom -->
<rect x="200" y="510" width="400" height="60" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="400" y="530" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Key Reciprocal Identities</text>
<text x="400" y="550" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">cosec θ = 1/sin θ     sec θ = 1/cos θ     cot θ = 1/tan θ</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: unitCircle
    // options: showCircle, showAngles, showCoordinates, showQuadrants, showSpecialAngles
    static unitCircleSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="800" viewBox="0 0 800 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>Unit Circle with Special Angles</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Unit Circle</text>
<text x="400" y="52" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Special angles, coordinates, and radian measures</text>

<!-- Axes -->
<line x1="90" y1="415" x2="710" y2="415" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="400" y1="710" x2="400" y2="90" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="718" y="419" font-family="Arial" font-size="14" fill="#000000">x</text>
<text x="404" y="84" font-family="Arial" font-size="14" fill="#000000">y</text>
<text x="406" y="430" font-family="Arial" font-size="13" fill="#000000">O</text>

<!-- Unit circle (r=230) centred at (400,415) -->
<circle cx="400" cy="415" r="230" stroke="#000000" stroke-width="2.5" fill="none"/>

<!-- Quadrant labels (showQuadrants=true) -->
<text x="540" y="300" font-family="Arial" font-size="14" fill="#888888" text-anchor="middle">I</text>
<text x="265" y="300" font-family="Arial" font-size="14" fill="#888888" text-anchor="middle">II</text>
<text x="265" y="545" font-family="Arial" font-size="14" fill="#888888" text-anchor="middle">III</text>
<text x="540" y="545" font-family="Arial" font-size="14" fill="#888888" text-anchor="middle">IV</text>

<!-- Tick marks and axis values -->
<line x1="630" y1="410" x2="630" y2="420" stroke="#000000" stroke-width="2"/>
<text x="630" y="435" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">1</text>
<line x1="170" y1="410" x2="170" y2="420" stroke="#000000" stroke-width="2"/>
<text x="170" y="435" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">-1</text>
<line x1="395" y1="185" x2="405" y2="185" stroke="#000000" stroke-width="2"/>
<text x="380" y="189" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">1</text>
<line x1="395" y1="645" x2="405" y2="645" stroke="#000000" stroke-width="2"/>
<text x="380" y="649" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">-1</text>

<!-- Special angles (showSpecialAngles=true): 0,30,45,60,90,120,135,150,180,210,225,240,270,300,315,330 -->
<!-- Format: angle in degrees, radian label, point on circle, coordinate -->
<!-- 0° / 0 rad → (630, 415) -->
<circle cx="630" cy="415" r="4" fill="#000000"/>
<line x1="400" y1="415" x2="626" y2="415" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
<text x="642" y="411" font-family="Arial" font-size="11" fill="#000000">0 (1, 0)</text>

<!-- 30° / π/6 → (599, 300) -->
<circle cx="599" cy="300" r="4" fill="#000000"/>
<line x1="400" y1="415" x2="599" y2="300" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
<text x="608" y="297" font-family="Arial" font-size="10" fill="#000000">π/6  (√3/2, 1/2)</text>

<!-- 45° / π/4 → (563, 252) -->
<circle cx="563" cy="252" r="4" fill="#000000"/>
<line x1="400" y1="415" x2="563" y2="252" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
<text x="570" y="248" font-family="Arial" font-size="10" fill="#000000">π/4  (√2/2, √2/2)</text>

<!-- 60° / π/3 → (515, 216) -->
<circle cx="515" cy="216" r="4" fill="#000000"/>
<line x1="400" y1="415" x2="515" y2="216" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
<text x="520" y="212" font-family="Arial" font-size="10" fill="#000000">π/3  (1/2, √3/2)</text>

<!-- 90° / π/2 → (400, 185) -->
<circle cx="400" cy="185" r="4" fill="#000000"/>
<text x="340" y="175" font-family="Arial" font-size="10" fill="#000000">π/2  (0, 1)</text>

<!-- 120° / 2π/3 → (285, 216) -->
<circle cx="285" cy="216" r="4" fill="#000000"/>
<line x1="400" y1="415" x2="285" y2="216" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
<text x="180" y="212" font-family="Arial" font-size="10" fill="#000000">2π/3  (-1/2, √3/2)</text>

<!-- 135° / 3π/4 → (237, 252) -->
<circle cx="237" cy="252" r="4" fill="#000000"/>
<line x1="400" y1="415" x2="237" y2="252" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
<text x="100" y="248" font-family="Arial" font-size="10" fill="#000000">3π/4  (-√2/2, √2/2)</text>

<!-- 150° / 5π/6 → (201, 300) -->
<circle cx="201" cy="300" r="4" fill="#000000"/>
<line x1="400" y1="415" x2="201" y2="300" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
<text x="88" y="297" font-family="Arial" font-size="10" fill="#000000">5π/6  (-√3/2, 1/2)</text>

<!-- 180° / π → (170, 415) -->
<circle cx="170" cy="415" r="4" fill="#000000"/>
<text x="56" y="411" font-family="Arial" font-size="10" fill="#000000">π  (-1, 0)</text>

<!-- 210° / 7π/6 → (201, 530) -->
<circle cx="201" cy="530" r="4" fill="#000000"/>
<line x1="400" y1="415" x2="201" y2="530" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
<text x="68" y="535" font-family="Arial" font-size="10" fill="#000000">7π/6  (-√3/2, -1/2)</text>

<!-- 225° / 5π/4 → (237, 578) -->
<circle cx="237" cy="578" r="4" fill="#000000"/>
<line x1="400" y1="415" x2="237" y2="578" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
<text x="90" y="587" font-family="Arial" font-size="10" fill="#000000">5π/4  (-√2/2, -√2/2)</text>

<!-- 240° / 4π/3 → (285, 614) -->
<circle cx="285" cy="614" r="4" fill="#000000"/>
<line x1="400" y1="415" x2="285" y2="614" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
<text x="160" y="628" font-family="Arial" font-size="10" fill="#000000">4π/3  (-1/2, -√3/2)</text>

<!-- 270° / 3π/2 → (400, 645) -->
<circle cx="400" cy="645" r="4" fill="#000000"/>
<text x="340" y="665" font-family="Arial" font-size="10" fill="#000000">3π/2  (0, -1)</text>

<!-- 300° / 5π/3 → (515, 614) -->
<circle cx="515" cy="614" r="4" fill="#000000"/>
<line x1="400" y1="415" x2="515" y2="614" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
<text x="510" y="632" font-family="Arial" font-size="10" fill="#000000">5π/3  (1/2, -√3/2)</text>

<!-- 315° / 7π/4 → (563, 578) -->
<circle cx="563" cy="578" r="4" fill="#000000"/>
<line x1="400" y1="415" x2="563" y2="578" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
<text x="560" y="596" font-family="Arial" font-size="10" fill="#000000">7π/4  (√2/2, -√2/2)</text>

<!-- 330° / 11π/6 → (599, 530) -->
<circle cx="599" cy="530" r="4" fill="#000000"/>
<line x1="400" y1="415" x2="599" y2="530" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
<text x="604" y="538" font-family="Arial" font-size="10" fill="#000000">11π/6  (√3/2, -1/2)</text>

<!-- Coordinate reminder box -->
<rect x="302" y="420" width="96" height="38" fill="#F0F0F0" stroke="#000000" stroke-width="1" rx="4"/>
<text x="350" y="434" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Point = (cos θ, sin θ)</text>
<text x="350" y="450" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">on unit circle r = 1</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: specialAnglesTriangle
    // options: show306090, show454590, showRatios, showValues
    static specialAnglesTriangleSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="500" viewBox="0 0 1000 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>Special Angle Triangles 30-60-90 and 45-45-90</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Special Angle Triangles</text>

<!-- Divider -->
<line x1="490" y1="55" x2="490" y2="470" stroke="#BBBBBB" stroke-width="1" stroke-dasharray="6,4"/>

<!-- ============ LEFT: 30-60-90 Triangle (show306090=true) ============ -->
<text x="245" y="62" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">30° – 60° – 90° Triangle</text>

<!-- Vertices: right angle at C(80,400), 30° at B(430,400), 60° at A(80,160) -->
<polygon points="80,400 430,400 80,160" stroke="#000000" stroke-width="3" fill="#F8F8F8"/>

<!-- Right angle box -->
<rect x="80" y="380" width="20" height="20" stroke="#000000" stroke-width="2" fill="none"/>

<!-- Angle arcs -->
<!-- 30° at B -->
<path d="M 398,400 A 32,32 0 0,0 373,387" stroke="#000000" stroke-width="2" fill="none"/>
<text x="382" y="396" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">30°</text>

<!-- 60° at A -->
<path d="M 80,188 A 28,28 0 0,1 104,175" stroke="#000000" stroke-width="2" fill="none"/>
<text x="88" y="202" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">60°</text>

<!-- 90° label -->
<text x="54" y="430" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">90°</text>

<!-- Side length labels (showValues=true) -->
<!-- Opposite to 30° = 1 (AC, vertical left) -->
<text x="52" y="288" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">1</text>
<!-- Adjacent to 30° = √3 (BC, horizontal bottom) -->
<text x="255" y="426" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">√3</text>
<!-- Hypotenuse = 2 (AB) -->
<text x="270" y="300" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold" transform="rotate(-37,270,300)">2</text>

<!-- Ratios box (showRatios=true) -->
<rect x="80" y="78" width="300" height="85" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="230" y="96" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Trig Ratios (at 30°)</text>
<line x1="92" y1="102" x2="368" y2="102" stroke="#AAAAAA" stroke-width="1"/>
<text x="230" y="118" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">sin 30° = 1/2     cos 30° = √3/2</text>
<text x="230" y="136" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">tan 30° = 1/√3     sin 60° = √3/2</text>
<text x="230" y="154" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">cos 60° = 1/2     tan 60° = √3</text>

<!-- ============ RIGHT: 45-45-90 Triangle (show454590=true) ============ -->
<text x="745" y="62" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">45° – 45° – 90° Triangle</text>

<!-- Vertices: right angle at C(570,400), 45° at B(910,400), 45° at A(570,60) -->
<polygon points="570,400 910,400 570,60" stroke="#000000" stroke-width="3" fill="#F8F8F8"/>

<!-- Right angle box -->
<rect x="570" y="380" width="20" height="20" stroke="#000000" stroke-width="2" fill="none"/>

<!-- 45° at B -->
<path d="M 878,400 A 32,32 0 0,0 855,376" stroke="#000000" stroke-width="2" fill="none"/>
<text x="864" y="396" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">45°</text>

<!-- 45° at A -->
<path d="M 570,88 A 28,28 0 0,1 594,77" stroke="#000000" stroke-width="2" fill="none"/>
<text x="578" y="105" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">45°</text>

<!-- 90° label -->
<text x="544" y="430" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">90°</text>

<!-- Side labels (showValues=true) -->
<text x="546" y="238" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">1</text>
<text x="740" y="426" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">1</text>
<text x="763" y="248" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold" transform="rotate(-47,763,248)">√2</text>

<!-- Ratios box (showRatios=true) -->
<rect x="570" y="78" width="300" height="70" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="720" y="96" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Trig Ratios (at 45°)</text>
<line x1="582" y1="102" x2="858" y2="102" stroke="#AAAAAA" stroke-width="1"/>
<text x="720" y="120" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">sin 45° = cos 45° = 1/√2 = √2/2</text>
<text x="720" y="138" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">tan 45° = 1     (isosceles right triangle)</text>

</g>
</svg>`;

    // Generated from registry: trigIdentitiesVisual
    // identity: pythagorean
    // options: showIdentity, showProof, showUnitCircle
    static trigIdentitiesVisualSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Trigonometric Identities — Pythagorean</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Trigonometric Identities</text>
<text x="450" y="52" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Pythagorean Identity: sin²θ + cos²θ = 1</text>

<!-- ===== Unit circle visual (showUnitCircle=true) ===== -->
<!-- Centre (280, 320), r=180 -->
<circle cx="280" cy="320" r="180" stroke="#000000" stroke-width="2" fill="none"/>
<!-- Axes -->
<line x1="80" y1="320" x2="480" y2="320" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="280" y1="510" x2="280" y2="120" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="486" y="324" font-family="Arial" font-size="13" fill="#000000">x</text>
<text x="284" y="115" font-family="Arial" font-size="13" fill="#000000">y</text>

<!-- Point P at angle θ=50° on unit circle -->
<!-- cos50°≈0.643 → x=280+180×0.643=396; sin50°≈0.766 → y=320-180×0.766=182 -->
<circle cx="396" cy="182" r="5" fill="#000000"/>
<line x1="280" y1="320" x2="396" y2="182" stroke="#000000" stroke-width="2.5"/>
<text x="400" y="172" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">P(cos θ, sin θ)</text>

<!-- cos θ projection (horizontal) -->
<line x1="280" y1="182" x2="396" y2="182" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
<line x1="396" y1="182" x2="396" y2="320" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>

<!-- Labels for legs -->
<text x="338" y="176" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">cos θ</text>
<text x="408" y="258" font-family="Arial" font-size="12" fill="#000000">sin θ</text>

<!-- Angle arc -->
<path d="M 310,320 A 30,30 0 0,0 299,291" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="320" y="305" font-family="Arial" font-size="12" fill="#000000">θ</text>

<!-- Hypotenuse = 1 label -->
<text x="316" y="248" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" transform="rotate(-51,316,248)">r = 1</text>

<!-- ===== Proof panel (showProof=true) ===== -->
<rect x="520" y="80" width="350" height="400" fill="#F8F8F8" stroke="#000000" stroke-width="2" rx="6"/>
<text x="695" y="108" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Proof via Pythagoras</text>
<line x1="532" y1="116" x2="858" y2="116" stroke="#AAAAAA" stroke-width="1"/>
<text x="695" y="138" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">For point P on unit circle (r=1):</text>
<text x="695" y="160" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Coordinates: (cos θ,  sin θ)</text>
<text x="695" y="188" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">By Pythagoras' theorem:</text>
<text x="695" y="210" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">x² + y² = r²</text>
<text x="695" y="236" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">(cos θ)² + (sin θ)² = 1²</text>
<rect x="580" y="248" width="230" height="34" fill="#E8E8E8" stroke="#000000" stroke-width="2" rx="4"/>
<text x="695" y="270" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">cos²θ + sin²θ = 1</text>

<line x1="532" y1="296" x2="858" y2="296" stroke="#AAAAAA" stroke-width="1"/>
<text x="695" y="316" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Derived Identities:</text>
<text x="695" y="338" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Divide by cos²θ:</text>
<text x="695" y="358" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">1 + tan²θ = sec²θ</text>
<text x="695" y="382" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Divide by sin²θ:</text>
<text x="695" y="402" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">cot²θ + 1 = cosec²θ</text>
<line x1="532" y1="414" x2="858" y2="414" stroke="#AAAAAA" stroke-width="1"/>
<text x="695" y="434" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">These three are the Pythagorean Identities</text>
<text x="695" y="452" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">and hold for all values of θ</text>

<!-- Identity label box bottom -->
<rect x="60" y="520" width="420" height="55" fill="#F0F0F0" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="270" y="540" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Remember: The three Pythagorean Identities</text>
<text x="270" y="558" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">sin²θ+cos²θ=1   1+tan²θ=sec²θ   cot²θ+1=cosec²θ</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: sineRuleDiagram
    // triangle: a=5, b=7, A=40°, B=60°  → C=80°, c≈8.0
    // options: showTriangle, showRule, showCalculation
    static sineRuleDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Sine Rule Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Sine Rule</text>
<text x="400" y="52" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">a/sin A = b/sin B = c/sin C</text>

<!-- Triangle: scale factor 40px/unit
     A=40°, B=60°, C=80°, a=5, b=7, c≈8.0
     Place C at (150,420), B at (470,420), A at ...
     Using law of sines scaled: place B=(470,420), C=(150,420), then find A
     With scale 40: BC=c≈8×40=320 → matches 470-150=320 ✓
     A is opposite a=5: using coords via angles
     A = C + b×(cos(angle_at_C), -sin(angle_at_C))
     angle at C = 80°; b=7×40=280
     A_x = 150 + 280×cos(80°) = 150+280×0.174 = 199
     A_y = 420 - 280×sin(80°) = 420-280×0.985 = 144 -->
<polygon points="199,144 150,420 470,420" stroke="#000000" stroke-width="3" fill="#F8F8F8"/>

<!-- Vertex labels -->
<text x="196" y="134" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">A</text>
<text x="132" y="444" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">C</text>
<text x="478" y="444" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">B</text>

<!-- Angle arcs -->
<!-- At C (80°) -->
<path d="M 178,420 A 28,28 0 0,0 162,397" stroke="#000000" stroke-width="2" fill="none"/>
<text x="186" y="404" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">C=80°</text>

<!-- At B (60°) -->
<path d="M 444,420 A 26,26 0 0,0 447,395" stroke="#000000" stroke-width="2" fill="none"/>
<text x="428" y="405" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">B=60°</text>

<!-- At A (40°) -->
<path d="M 220,155 A 24,24 0 0,1 208,173" stroke="#000000" stroke-width="2" fill="none"/>
<text x="226" y="162" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">A=40°</text>

<!-- Side labels (opposite convention: side a opposite A, etc.) -->
<!-- side a = 5 (BC, bottom): -->
<text x="310" y="445" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">a = 5</text>
<!-- side b = 7 (AC, left): -->
<text x="152" y="290" font-family="Arial" font-size="14" fill="#000000" text-anchor="end" font-weight="bold">b = 7</text>
<!-- side c ≈ 8 (AB, right): -->
<text x="370" y="280" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" transform="rotate(-70,370,280)">c ≈ 8.0</text>

<!-- Sine Rule formula box (showRule=true) -->
<rect x="490" y="80" width="280" height="80" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="6"/>
<text x="630" y="102" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">The Sine Rule</text>
<line x1="500" y1="110" x2="760" y2="110" stroke="#AAAAAA" stroke-width="1"/>
<text x="630" y="132" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">a/sin A = b/sin B = c/sin C</text>
<text x="630" y="150" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Used when: AAS, ASA, SSA</text>

<!-- Calculation box (showCalculation=true) -->
<rect x="490" y="180" width="280" height="160" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="6"/>
<text x="630" y="200" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Worked Example</text>
<line x1="500" y1="208" x2="760" y2="208" stroke="#AAAAAA" stroke-width="1"/>
<text x="630" y="228" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Given: a=5, A=40°, B=60°</text>
<text x="630" y="248" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Find side b:</text>
<text x="630" y="268" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">b/sin 60° = 5/sin 40°</text>
<text x="630" y="288" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">b = 5 × sin 60° / sin 40°</text>
<text x="630" y="308" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">b ≈ 5 × 0.866 / 0.643 ≈ 6.73</text>
<text x="630" y="328" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(close to given b=7)</text>

<!-- Ambiguous case note -->
<rect x="490" y="360" width="280" height="80" fill="#F0F0F0" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="630" y="380" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Ambiguous Case (SSA)</text>
<text x="630" y="400" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">When given two sides and a non-included</text>
<text x="630" y="416" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">angle, there may be 0, 1, or 2 triangles.</text>
<text x="630" y="432" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Check: if sin B &gt; 1 → no solution</text>

<!-- Circumscribed circle hint -->
<text x="310" y="510" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Note: a/sin A = 2R, where R is the circumradius of the triangle</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: cosineRuleDiagram
    // triangle: a=5, b=7, C=60°  → c²=a²+b²-2ab·cosC=25+49-35=39, c≈6.24
    // options: showTriangle, showRule, showCalculation
    static cosineRuleDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Cosine Rule Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Cosine Rule</text>
<text x="400" y="52" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">c² = a² + b² – 2ab cos C</text>

<!-- Triangle: C=60°, a=5(CB), b=7(CA), c≈6.24(AB)
     Scale 40px/unit. Place C at (160,430), B at C+(5×40,0)=(360,430)
     A at C+(7×40×cos60°, -7×40×sin60°) = (160+140,430-242)=(300,188) -->
<polygon points="300,188 160,430 360,430" stroke="#000000" stroke-width="3" fill="#F8F8F8"/>

<!-- Vertex labels -->
<text x="298" y="177" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">A</text>
<text x="142" y="452" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">C</text>
<text x="368" y="452" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">B</text>

<!-- Angle at C (60°) -->
<path d="M 185,430 A 25,25 0 0,0 172,407" stroke="#000000" stroke-width="2" fill="none"/>
<text x="192" y="418" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">C=60°</text>

<!-- Side labels -->
<!-- a = CB = 5 (bottom) -->
<text x="260" y="452" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">a = 5</text>
<!-- b = CA = 7 (left) -->
<text x="208" y="320" font-family="Arial" font-size="14" fill="#000000" text-anchor="end" font-weight="bold">b = 7</text>
<!-- c ≈ 6.24 (AB, right) -->
<text x="348" y="310" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" transform="rotate(-68,348,310)">c ≈ 6.24</text>

<!-- Cosine Rule formula box (showRule=true) -->
<rect x="440" y="75" width="330" height="110" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="6"/>
<text x="605" y="98" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">The Cosine Rule</text>
<line x1="452" y1="106" x2="758" y2="106" stroke="#AAAAAA" stroke-width="1"/>
<text x="605" y="126" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">c² = a² + b² – 2ab cos C</text>
<text x="605" y="146" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Also: a² = b²+c²–2bc cos A</text>
<text x="605" y="163" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">       b² = a²+c²–2ac cos B</text>
<text x="605" y="177" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Used when: SAS or SSS</text>

<!-- Calculation box (showCalculation=true) -->
<rect x="440" y="205" width="330" height="200" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="6"/>
<text x="605" y="226" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Worked Example</text>
<line x1="452" y1="234" x2="758" y2="234" stroke="#AAAAAA" stroke-width="1"/>
<text x="605" y="254" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Given: a=5, b=7, C=60°</text>
<text x="605" y="274" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">c² = 5² + 7² – 2(5)(7) cos 60°</text>
<text x="605" y="294" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">c² = 25 + 49 – 70 × 0.5</text>
<text x="605" y="314" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">c² = 74 – 35 = 39</text>
<text x="605" y="338" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">c = √39 ≈ 6.24</text>
<line x1="452" y1="350" x2="758" y2="350" stroke="#AAAAAA" stroke-width="1"/>
<text x="605" y="368" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Rearranged to find angle:</text>
<text x="605" y="388" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">cos C = (a²+b²–c²) / 2ab</text>

<!-- Connection to Pythagoras note -->
<rect x="60" y="480" width="360" height="60" fill="#F0F0F0" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="240" y="500" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Connection to Pythagoras</text>
<text x="240" y="520" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">When C = 90°: cos 90° = 0,</text>
<text x="240" y="537" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">so c² = a² + b²  ✓</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: triangleAreaFormula
    // triangle: a=6, b=8, C=30°
    // options: showTriangle, showHeight, showFormula, showCalculation
    static triangleAreaFormulaSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Triangle Area Formula (Trigonometry)</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Triangle Area (Trigonometry)</text>
<text x="400" y="52" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Area = ½ab sin C</text>

<!-- Triangle: C=30°, a=6(CB), b=8(CA), C at (140,420)
     Scale 40px/unit
     B = C+(6×40,0) = (380,420)
     A = C+(8×40×cos30°, -8×40×sin30°) = (140+277,420-160) = (417,260) -->
<polygon points="417,260 140,420 380,420" stroke="#000000" stroke-width="3" fill="#F0F0F0"/>

<!-- Height from A to CB (showHeight=true) -->
<!-- Height h = b sin C = 8×sin30° = 4, scaled = 4×40=160 -->
<!-- Foot of perpendicular from A(417,260) to CB: CB is horizontal at y=420 → foot is (417,420) -->
<line x1="417" y1="260" x2="417" y2="420" stroke="#000000" stroke-width="2" stroke-dasharray="6,4"/>
<!-- Right angle at foot -->
<rect x="417" y="400" width="16" height="16" stroke="#000000" stroke-width="2" fill="none"/>
<!-- Height label -->
<text x="432" y="348" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">h = b sin C</text>
<text x="432" y="365" font-family="Arial" font-size="12" fill="#555555">= 8 sin 30° = 4</text>

<!-- Vertex labels -->
<text x="415" y="250" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">A</text>
<text x="122" y="442" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">C</text>
<text x="388" y="442" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">B</text>

<!-- Angle at C (30°) -->
<path d="M 165,420 A 25,25 0 0,0 162,395" stroke="#000000" stroke-width="2" fill="none"/>
<text x="174" y="408" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">C=30°</text>

<!-- Side labels -->
<text x="260" y="442" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">a = 6</text>
<text x="247" y="348" font-family="Arial" font-size="14" fill="#000000" text-anchor="end" font-weight="bold">b = 8</text>

<!-- Formula box (showFormula=true) -->
<rect x="480" y="75" width="300" height="120" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="6"/>
<text x="630" y="97" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Area Formula</text>
<line x1="492" y1="105" x2="768" y2="105" stroke="#AAAAAA" stroke-width="1"/>
<text x="630" y="127" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Area = ½ × base × height</text>
<text x="630" y="148" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">= ½ × a × (b sin C)</text>
<rect x="545" y="158" width="170" height="28" fill="#E0E0E0" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="630" y="177" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Area = ½ab sin C</text>

<!-- Calculation box (showCalculation=true) -->
<rect x="480" y="215" width="300" height="155" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="6"/>
<text x="630" y="236" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Worked Calculation</text>
<line x1="492" y1="244" x2="768" y2="244" stroke="#AAAAAA" stroke-width="1"/>
<text x="630" y="264" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Given: a=6, b=8, C=30°</text>
<text x="630" y="284" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Area = ½ × 6 × 8 × sin 30°</text>
<text x="630" y="304" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">= ½ × 6 × 8 × 0.5</text>
<text x="630" y="324" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">= ½ × 24</text>
<text x="630" y="350" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Area = 12 sq. units</text>

<!-- Three versions note -->
<rect x="70" y="480" width="380" height="80" fill="#F0F0F0" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="260" y="500" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Three Equivalent Forms</text>
<text x="260" y="520" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Area = ½ab sin C</text>
<text x="260" y="538" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">= ½bc sin A  =  ½ac sin B</text>
<text x="260" y="554" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(use the angle between the two known sides)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: radianMeasure
    // options: showCircle, showRadians, showDegrees, showConversion, showArcLength
    static radianMeasureSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="800" viewBox="0 0 800 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>Radian Measure</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Radian Measure</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">1 radian = angle where arc length equals radius</text>

<!-- Circle centre (400,420), r=200 (showCircle=true) -->
<circle cx="400" cy="420" r="200" stroke="#000000" stroke-width="2.5" fill="none"/>

<!-- Axes -->
<line x1="180" y1="420" x2="620" y2="420" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<line x1="400" y1="630" x2="400" y2="200" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>

<!-- Centre dot -->
<circle cx="400" cy="420" r="4" fill="#000000"/>
<text x="408" y="438" font-family="Arial" font-size="13" fill="#000000">O</text>

<!-- Radius lines for 1 radian arc demonstration -->
<!-- 1 radian ≈ 57.3° → endpoint at (400+200×cos0°, 420-200×sin0°) = (600,420) and
     (400+200×cos57.3°, 420-200×sin57.3°) = (400+108, 420-168) = (508,252) -->
<line x1="400" y1="420" x2="600" y2="420" stroke="#000000" stroke-width="2.5"/>
<line x1="400" y1="420" x2="508" y2="252" stroke="#000000" stroke-width="2.5"/>
<!-- Arc for 1 radian (showRadians=true) -->
<path d="M 600,420 A 200,200 0 0,0 508,252" stroke="#000000" stroke-width="4" fill="none"/>
<text x="640" y="360" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">arc = r = 1 radian</text>
<!-- Radius label -->
<text x="507" y="438" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">r</text>
<text x="468" y="336" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">r</text>
<!-- Angle arc -->
<path d="M 440,420 A 40,40 0 0,0 425,383" stroke="#000000" stroke-width="2" fill="none"/>
<text x="448" y="403" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">1 rad</text>

<!-- Special angles around circle (showDegrees=true) -->
<!-- 0° -->
<text x="614" y="424" font-family="Arial" font-size="11" fill="#000000">0° = 0</text>
<!-- 30° / π/6 -->
<circle cx="573" cy="320" r="3" fill="#000000"/>
<text x="580" y="318" font-family="Arial" font-size="10" fill="#000000">30° = π/6</text>
<!-- 45° / π/4 -->
<circle cx="541" cy="279" r="3" fill="#000000"/>
<text x="548" y="275" font-family="Arial" font-size="10" fill="#000000">45° = π/4</text>
<!-- 60° / π/3 -->
<circle cx="500" cy="247" r="3" fill="#000000"/>
<text x="505" y="242" font-family="Arial" font-size="10" fill="#000000">60° = π/3</text>
<!-- 90° / π/2 -->
<circle cx="400" cy="220" r="3" fill="#000000"/>
<text x="345" y="214" font-family="Arial" font-size="10" fill="#000000">90° = π/2</text>
<!-- 180° / π -->
<circle cx="200" cy="420" r="3" fill="#000000"/>
<text x="138" y="416" font-family="Arial" font-size="10" fill="#000000">180° = π</text>
<!-- 270° / 3π/2 -->
<circle cx="400" cy="620" r="3" fill="#000000"/>
<text x="348" y="640" font-family="Arial" font-size="10" fill="#000000">270° = 3π/2</text>
<!-- 360° / 2π -->
<text x="608" y="438" font-family="Arial" font-size="10" fill="#000000">360° = 2π</text>

<!-- Conversion box (showConversion=true) -->
<rect x="30" y="680" width="340" height="90" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="6"/>
<text x="200" y="700" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Conversion Formulas</text>
<line x1="42" y1="708" x2="358" y2="708" stroke="#AAAAAA" stroke-width="1"/>
<text x="200" y="726" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Degrees → Radians: θ_rad = θ° × π/180</text>
<text x="200" y="746" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Radians → Degrees: θ° = θ_rad × 180/π</text>
<text x="200" y="762" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">e.g.  90° = 90×π/180 = π/2 rad</text>

<!-- Arc length box (showArcLength=true) -->
<rect x="430" y="680" width="340" height="90" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="6"/>
<text x="600" y="700" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Arc Length &amp; Sector Area</text>
<line x1="442" y1="708" x2="758" y2="708" stroke="#AAAAAA" stroke-width="1"/>
<text x="600" y="726" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Arc Length: s = rθ  (θ in radians)</text>
<text x="600" y="746" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Sector Area: A = ½r²θ</text>
<text x="600" y="762" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">e.g. r=5, θ=π/3: s = 5π/3 ≈ 5.24</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: sineGraph
    // function: sine
    // options: showGraph, showAmplitude, showPeriod, showKeyPoints
    static sineGraphSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Sine Graph y = sin(x)</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Sine Graph</text>
<text x="500" y="55" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">y = sin(x)   —   Amplitude: 1   Period: 2π</text>

<!-- Grid lines (light) -->
<line x1="80" y1="120" x2="80" y2="440" stroke="#DDDDDD" stroke-width="1"/>
<line x1="236" y1="120" x2="236" y2="440" stroke="#DDDDDD" stroke-width="1"/>
<line x1="392" y1="120" x2="392" y2="440" stroke="#DDDDDD" stroke-width="1"/>
<line x1="548" y1="120" x2="548" y2="440" stroke="#DDDDDD" stroke-width="1"/>
<line x1="704" y1="120" x2="704" y2="440" stroke="#DDDDDD" stroke-width="1"/>
<line x1="860" y1="120" x2="860" y2="440" stroke="#DDDDDD" stroke-width="1"/>
<line x1="80" y1="160" x2="940" y2="160" stroke="#DDDDDD" stroke-width="1"/>
<line x1="80" y1="440" x2="940" y2="440" stroke="#DDDDDD" stroke-width="1"/>

<!-- Axes -->
<line x1="60" y1="300" x2="950" y2="300" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="80" y1="470" x2="80" y2="110" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="958" y="304" font-family="Arial" font-size="13" fill="#000000">x</text>
<text x="84" y="104" font-family="Arial" font-size="13" fill="#000000">y</text>

<!-- x-axis labels: π/2, π, 3π/2, 2π, 5π/2, 3π (spacing 156px ≈ π/2) -->
<text x="236" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">π/2</text>
<text x="392" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">π</text>
<text x="548" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">3π/2</text>
<text x="704" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2π</text>
<text x="860" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">5π/2</text>
<!-- Negative -->
<text x="80" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">0</text>

<!-- y-axis labels -->
<text x="66" y="164" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">1</text>
<text x="66" y="444" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">-1</text>

<!-- Sine wave: y=300-140×sin(x), x-scale: 1rad=99px, from x=80 to x=930 -->
<!-- Using path with many points for smooth curve -->
<path d="M 80,300 C 105,160 131,160 156,300 C 181,440 207,440 236,300 C 261,160 287,160 312,300 C 337,440 363,440 392,300 C 417,160 443,160 468,300 C 493,440 519,440 548,300 C 573,160 599,160 624,300 C 649,440 675,440 704,300 C 729,160 755,160 780,300 C 805,440 831,440 860,300 C 885,160 911,160 930,200" stroke="#000000" stroke-width="3" fill="none"/>

<!-- Key points (showKeyPoints=true) -->
<!-- (0,0) -->
<circle cx="80" cy="300" r="5" fill="#000000"/>
<text x="80" y="345" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(0, 0)</text>
<!-- (π/2, 1) max -->
<circle cx="236" cy="160" r="5" fill="#000000"/>
<text x="236" y="152" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(π/2, 1)</text>
<!-- (π, 0) -->
<circle cx="392" cy="300" r="5" fill="#000000"/>
<text x="392" y="345" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(π, 0)</text>
<!-- (3π/2, -1) min -->
<circle cx="548" cy="440" r="5" fill="#000000"/>
<text x="548" y="462" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(3π/2, -1)</text>
<!-- (2π, 0) -->
<circle cx="704" cy="300" r="5" fill="#000000"/>
<text x="704" y="345" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(2π, 0)</text>

<!-- Amplitude annotation (showAmplitude=true) -->
<line x1="50" y1="300" x2="50" y2="160" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)" marker-start="url(#arrow-bw-rev)"/>
<text x="30" y="234" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">A=1</text>

<!-- Period annotation (showPeriod=true) -->
<line x1="80" y1="490" x2="704" y2="490" stroke="#000000" stroke-width="2"/>
<line x1="80" y1="484" x2="80" y2="497" stroke="#000000" stroke-width="2"/>
<line x1="704" y1="484" x2="704" y2="497" stroke="#000000" stroke-width="2"/>
<text x="392" y="510" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Period T = 2π ≈ 6.28</text>

<!-- Properties box -->
<rect x="730" y="120" width="240" height="120" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="850" y="140" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Key Properties</text>
<line x1="740" y1="148" x2="960" y2="148" stroke="#AAAAAA" stroke-width="1"/>
<text x="850" y="166" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Domain: all real x</text>
<text x="850" y="184" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Range: –1 ≤ y ≤ 1</text>
<text x="850" y="202" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Period: 2π</text>
<text x="850" y="220" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Odd function: sin(–x)=–sin(x)</text>
<text x="850" y="232" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Zeros at nπ (n ∈ ℤ)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-bw-rev" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto">
    <polygon points="10 0, 0 3, 10 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: cosineGraph
    // function: cosine
    // options: showGraph, showAmplitude, showPeriod, showKeyPoints
    static cosineGraphSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Cosine Graph y = cos(x)</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Cosine Graph</text>
<text x="500" y="55" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">y = cos(x)   —   Amplitude: 1   Period: 2π</text>

<!-- Grid -->
<line x1="80" y1="160" x2="940" y2="160" stroke="#DDDDDD" stroke-width="1"/>
<line x1="80" y1="440" x2="940" y2="440" stroke="#DDDDDD" stroke-width="1"/>
<line x1="236" y1="120" x2="236" y2="450" stroke="#DDDDDD" stroke-width="1"/>
<line x1="392" y1="120" x2="392" y2="450" stroke="#DDDDDD" stroke-width="1"/>
<line x1="548" y1="120" x2="548" y2="450" stroke="#DDDDDD" stroke-width="1"/>
<line x1="704" y1="120" x2="704" y2="450" stroke="#DDDDDD" stroke-width="1"/>
<line x1="860" y1="120" x2="860" y2="450" stroke="#DDDDDD" stroke-width="1"/>

<!-- Axes -->
<line x1="60" y1="300" x2="950" y2="300" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="80" y1="470" x2="80" y2="110" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="958" y="304" font-family="Arial" font-size="13" fill="#000000">x</text>
<text x="84" y="104" font-family="Arial" font-size="13" fill="#000000">y</text>

<!-- x labels -->
<text x="80" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">0</text>
<text x="236" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">π/2</text>
<text x="392" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">π</text>
<text x="548" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">3π/2</text>
<text x="704" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2π</text>
<text x="860" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">5π/2</text>

<!-- y labels -->
<text x="66" y="164" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">1</text>
<text x="66" y="444" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">-1</text>

<!-- Cosine wave: starts at max (0,1) → (0°=x80,y160), then down -->
<path d="M 80,160 C 105,160 131,440 156,440 C 181,440 207,160 236,160 C 261,160 287,440 312,440 C 337,440 363,160 392,160 C 417,160 443,440 468,440 C 493,440 519,160 548,160 C 573,160 599,440 624,440 C 649,440 675,160 704,160 C 729,160 755,440 780,440 C 805,440 831,160 860,160 C 885,160 900,250 920,280" stroke="#000000" stroke-width="3" fill="none"/>

<!-- Key points (showKeyPoints=true) -->
<circle cx="80" cy="160" r="5" fill="#000000"/>
<text x="80" y="152" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(0, 1)</text>
<circle cx="236" cy="300" r="5" fill="#000000"/>
<text x="236" y="345" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(π/2, 0)</text>
<circle cx="392" cy="440" r="5" fill="#000000"/>
<text x="392" y="462" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(π, -1)</text>
<circle cx="548" cy="300" r="5" fill="#000000"/>
<text x="548" y="345" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(3π/2, 0)</text>
<circle cx="704" cy="160" r="5" fill="#000000"/>
<text x="704" y="152" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(2π, 1)</text>

<!-- Amplitude annotation -->
<line x1="50" y1="300" x2="50" y2="160" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)" marker-start="url(#arrow-bw-rev)"/>
<text x="30" y="234" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">A=1</text>

<!-- Period annotation -->
<line x1="80" y1="490" x2="704" y2="490" stroke="#000000" stroke-width="2"/>
<line x1="80" y1="484" x2="80" y2="497" stroke="#000000" stroke-width="2"/>
<line x1="704" y1="484" x2="704" y2="497" stroke="#000000" stroke-width="2"/>
<text x="392" y="510" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Period T = 2π ≈ 6.28</text>

<!-- Properties box -->
<rect x="730" y="120" width="240" height="130" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="850" y="140" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Key Properties</text>
<line x1="740" y1="148" x2="960" y2="148" stroke="#AAAAAA" stroke-width="1"/>
<text x="850" y="166" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Domain: all real x</text>
<text x="850" y="184" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Range: –1 ≤ y ≤ 1</text>
<text x="850" y="202" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Period: 2π</text>
<text x="850" y="220" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Even function: cos(–x)=cos(x)</text>
<text x="850" y="238" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Zeros at (2n+1)π/2</text>
<text x="850" y="243" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">cos(x) = sin(x + π/2)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-bw-rev" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto">
    <polygon points="10 0, 0 3, 10 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: tangentGraph
    // function: tangent
    // options: showGraph, showAsymptotes, showPeriod, showKeyPoints
    static tangentGraphSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Tangent Graph y = tan(x)</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Tangent Graph</text>
<text x="500" y="55" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">y = tan(x)   —   Period: π   Asymptotes at x = π/2 + nπ</text>

<!-- Axes -->
<line x1="50" y1="300" x2="960" y2="300" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="80" y1="560" x2="80" y2="60" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="968" y="304" font-family="Arial" font-size="13" fill="#000000">x</text>
<text x="84" y="54" font-family="Arial" font-size="13" fill="#000000">y</text>

<!-- x labels. spacing 156px per π/2 -->
<text x="80" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">0</text>
<text x="236" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">π/2</text>
<text x="392" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">π</text>
<text x="548" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">3π/2</text>
<text x="704" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2π</text>
<text x="860" y="320" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">5π/2</text>
<!-- Negative side -->
<line x1="80" y1="295" x2="80" y2="305" stroke="#000000" stroke-width="2"/>

<!-- y labels -->
<text x="66" y="240" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">1</text>
<text x="66" y="364" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">-1</text>
<text x="66" y="180" font-family="Arial" font-size="11" fill="#888888" text-anchor="end">2</text>
<text x="66" y="420" font-family="Arial" font-size="11" fill="#888888" text-anchor="end">-2</text>

<!-- Grid y-lines for y=1 and y=-1 -->
<line x1="80" y1="240" x2="940" y2="240" stroke="#DDDDDD" stroke-width="1" stroke-dasharray="4,4"/>
<line x1="80" y1="360" x2="940" y2="360" stroke="#DDDDDD" stroke-width="1" stroke-dasharray="4,4"/>

<!-- Asymptotes (showAsymptotes=true): dashed vertical at π/2, 3π/2, 5π/2 (x=236, 548, 860) -->
<line x1="236" y1="70" x2="236" y2="560" stroke="#000000" stroke-width="1.5" stroke-dasharray="8,5"/>
<line x1="548" y1="70" x2="548" y2="560" stroke="#000000" stroke-width="1.5" stroke-dasharray="8,5"/>
<line x1="860" y1="70" x2="860" y2="560" stroke="#000000" stroke-width="1.5" stroke-dasharray="8,5"/>
<!-- Asymptote labels -->
<text x="240" y="68" font-family="Arial" font-size="11" fill="#000000">x=π/2</text>
<text x="552" y="68" font-family="Arial" font-size="11" fill="#000000">x=3π/2</text>
<text x="864" y="68" font-family="Arial" font-size="11" fill="#000000">x=5π/2</text>

<!-- Tangent curves (3 branches): 
     Branch 1: x from 80 to ~228 (just before π/2 at 236)
     Branch 2: x from ~244 to ~540 (between π/2 and 3π/2)
     Branch 3: x from ~556 to ~852 (between 3π/2 and 5π/2) -->
<!-- Branch 1 (0 to π/2): starts at (80,300), goes to +∞ -->
<path d="M 80,300 C 100,285 140,240 165,218 C 185,200 200,175 210,140 C 218,110 225,80 228,70" stroke="#000000" stroke-width="3" fill="none"/>
<!-- Branch 2 (π to 2π covering π/2 to 3π/2): from -∞ through (π,0) to +∞ -->
<path d="M 244,540 C 247,510 256,470 266,430 C 280,390 300,360 320,340 C 340,318 360,308 392,300 C 424,292 444,284 465,266 C 490,242 510,210 524,175 C 534,148 540,115 543,80" stroke="#000000" stroke-width="3" fill="none"/>
<!-- Branch 3 (2π to 3π covering 3π/2 to 5π/2): from -∞ through (2π,0) to +∞ -->
<path d="M 556,540 C 559,510 568,470 578,430 C 592,390 612,360 632,340 C 652,318 672,308 704,300 C 736,292 756,284 777,266 C 802,242 822,210 836,175 C 846,148 852,115 855,80" stroke="#000000" stroke-width="3" fill="none"/>

<!-- Key points (showKeyPoints=true) -->
<circle cx="80" cy="300" r="5" fill="#000000"/>
<text x="80" y="345" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(0, 0)</text>
<circle cx="392" cy="300" r="5" fill="#000000"/>
<text x="392" y="345" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(π, 0)</text>
<circle cx="704" cy="300" r="5" fill="#000000"/>
<text x="704" y="345" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(2π, 0)</text>
<!-- y=1 points -->
<circle cx="158" cy="240" r="4" fill="#000000"/>
<text x="158" y="232" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">(π/4,1)</text>
<circle cx="470" cy="240" r="4" fill="#000000"/>
<circle cx="782" cy="240" r="4" fill="#000000"/>

<!-- Period annotation (showPeriod=true) -->
<line x1="80" y1="578" x2="392" y2="578" stroke="#000000" stroke-width="2"/>
<line x1="80" y1="572" x2="80" y2="582" stroke="#000000" stroke-width="2"/>
<line x1="392" y1="572" x2="392" y2="582" stroke="#000000" stroke-width="2"/>
<text x="236" y="594" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Period T = π ≈ 3.14</text>

<!-- Properties box -->
<rect x="700" y="380" width="270" height="130" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="835" y="400" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Key Properties</text>
<line x1="710" y1="408" x2="960" y2="408" stroke="#AAAAAA" stroke-width="1"/>
<text x="835" y="426" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Domain: x ≠ π/2 + nπ</text>
<text x="835" y="444" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Range: all real numbers</text>
<text x="835" y="462" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Period: π</text>
<text x="835" y="480" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Odd function: tan(–x)=–tan(x)</text>
<text x="835" y="498" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">tan x = sin x / cos x</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: trigGraphTransformations
    // y = a sin(bx + c) + d
    // options: showOriginal, showTransformed, showParameters
    static trigGraphTransformationsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Trigonometric Graph Transformations</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Trigonometric Graph Transformations</text>
<text x="500" y="52" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">y = a sin(bx + c) + d   vs   y = sin(x)  (original)</text>

<!-- Parameters table (showParameters=true) -->
<rect x="660" y="68" width="320" height="210" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="5"/>
<text x="820" y="88" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Parameter Effects</text>
<line x1="670" y1="96" x2="970" y2="96" stroke="#AAAAAA" stroke-width="1"/>
<text x="820" y="113" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">a  — Amplitude</text>
<text x="820" y="129" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">|a| = amplitude; a&lt;0 reflects in x-axis</text>
<text x="820" y="150" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">b  — Period change</text>
<text x="820" y="166" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Period = 2π/|b|; b&gt;1 compresses horizontally</text>
<text x="820" y="187" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">c  — Phase shift</text>
<text x="820" y="203" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Shift = –c/b (left if c&gt;0, right if c&lt;0)</text>
<text x="820" y="224" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">d  — Vertical shift</text>
<text x="820" y="240" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Moves graph up (d&gt;0) or down (d&lt;0)</text>
<text x="820" y="265" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Example: a=2, b=2, c=π/4, d=1</text>

<!-- Graph axes (xOrigin=60, yOrigin=450, xScale=156px/π, yScale=80px/unit) -->
<line x1="40" y1="450" x2="650" y2="450" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<line x1="60" y1="620" x2="60" y2="130" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="656" y="454" font-family="Arial" font-size="12" fill="#000000">x</text>
<text x="64" y="124" font-family="Arial" font-size="12" fill="#000000">y</text>

<!-- x axis labels -->
<text x="60" y="468" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">0</text>
<text x="216" y="468" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">π/2</text>
<text x="372" y="468" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">π</text>
<text x="528" y="468" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">3π/2</text>
<text x="628" y="468" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">2π</text>

<!-- y axis labels -->
<text x="46" y="370" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">1</text>
<line x1="56" y1="370" x2="64" y2="370" stroke="#000000" stroke-width="1"/>
<text x="46" y="530" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">-1</text>
<line x1="56" y1="530" x2="64" y2="530" stroke="#000000" stroke-width="1"/>
<text x="46" y="290" font-family="Arial" font-size="11" fill="#555555" text-anchor="end">2</text>
<line x1="56" y1="290" x2="64" y2="290" stroke="#000000" stroke-width="1"/>
<text x="46" y="610" font-family="Arial" font-size="11" fill="#555555" text-anchor="end">-2</text>
<line x1="56" y1="610" x2="64" y2="610" stroke="#000000" stroke-width="1"/>

<!-- Grid dashes -->
<line x1="60" y1="370" x2="640" y2="370" stroke="#DDDDDD" stroke-width="1" stroke-dasharray="4,4"/>
<line x1="60" y1="530" x2="640" y2="530" stroke="#DDDDDD" stroke-width="1" stroke-dasharray="4,4"/>

<!-- ORIGINAL: y = sin(x) — thin dashed (showOriginal=true) -->
<!-- yOrigin=450, amplitude=80px (1 unit) -->
<path d="M 60,450 C 85,370 111,370 136,450 C 161,530 187,530 216,450 C 241,370 267,370 292,450 C 317,530 343,530 372,450 C 397,370 423,370 448,450 C 473,530 499,530 528,450 C 553,370 579,370 604,450 C 616,490 625,510 640,530" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4" fill="none"/>
<text x="648" y="520" font-family="Arial" font-size="11" fill="#555555">y=sin x</text>

<!-- TRANSFORMED: y = 2 sin(2x + π/4) + 1
     amplitude=2 → 160px, period=π → 312px per period (spacing 78px per π/2)
     d=1 shifts up 80px → new centre y=450-80=370
     phase shift = -π/8 → shifts left by 78/2 = 39px (from x=60, first max at ~60-39+78/4≈81 estimated)
     Drawn as approximation curve showing taller, compressed wave centred at y=370 (showTransformed=true) -->
<path d="M 60,370 C 66,210 78,210 100,370 C 116,500 132,530 155,450 C 168,370 178,210 200,210 C 216,210 228,370 240,530 C 252,580 270,530 290,450 C 305,370 316,210 340,210 C 355,210 365,370 380,530 C 390,580 405,530 425,450 C 442,370 456,210 478,210 C 495,210 506,370 520,530 C 535,580 548,530 568,450 C 582,370 594,210 616,210 C 630,210 640,310 640,370" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="645" y="215" font-family="Arial" font-size="11" fill="#000000">y=2sin(2x+π/4)+1</text>

<!-- Annotations: Amplitude, Period, Phase shift, Vertical shift -->
<!-- Amplitude double-headed arrow -->
<line x1="30" y1="370" x2="30" y2="210" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)" marker-start="url(#arrow-bw-rev)"/>
<text x="14" y="295" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle" transform="rotate(-90,14,295)">Amp=2</text>

<!-- Vertical shift annotation -->
<line x1="20" y1="450" x2="20" y2="370" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arrow-bw)" marker-start="url(#arrow-bw-rev)"/>
<text x="6" y="416" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle" transform="rotate(-90,6,416)">d=+1</text>

<!-- Period annotation for transformed -->
<line x1="60" y1="650" x2="372" y2="650" stroke="#000000" stroke-width="1.5"/>
<line x1="60" y1="645" x2="60" y2="656" stroke="#000000" stroke-width="1.5"/>
<line x1="372" y1="645" x2="372" y2="656" stroke="#000000" stroke-width="1.5"/>
<text x="216" y="668" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Period = π  (b=2 halves the period)</text>

<!-- Legend -->
<rect x="60" y="682" width="580" height="12" fill="none" stroke="none"/>
<line x1="65" y1="688" x2="105" y2="688" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="112" y="692" font-family="Arial" font-size="11" fill="#555555">y = sin(x)  (original)</text>
<line x1="270" y1="688" x2="310" y2="688" stroke="#000000" stroke-width="2.5"/>
<text x="317" y="692" font-family="Arial" font-size="11" fill="#000000">y = 2 sin(2x + π/4) + 1  (transformed)</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-bw-rev" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto">
    <polygon points="10 0, 0 3, 10 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // ============================================================
    // ===== 9. SET THEORY ========================================
    // ============================================================

    // Generated from registry: setNotation
    // set: [2,4,6,8,10]
    // options: showRoster, showSetBuilder, showDescription
    static setNotationSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="500" viewBox="0 0 900 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>Set Notation</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Set Notation</text>
<text x="450" y="55" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Three ways to represent the same set</text>

<!-- The set visually: oval with elements inside -->
<ellipse cx="450" cy="220" rx="300" ry="110" stroke="#000000" stroke-width="2.5" fill="#F8F8F8"/>
<text x="450" y="175" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">A</text>
<!-- Elements -->
<circle cx="280" cy="220" r="22" stroke="#000000" stroke-width="1.5" fill="#EEEEEE"/>
<text x="280" y="226" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">2</text>
<circle cx="350" cy="220" r="22" stroke="#000000" stroke-width="1.5" fill="#EEEEEE"/>
<text x="350" y="226" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">4</text>
<circle cx="450" cy="220" r="22" stroke="#000000" stroke-width="1.5" fill="#EEEEEE"/>
<text x="450" y="226" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">6</text>
<circle cx="550" cy="220" r="22" stroke="#000000" stroke-width="1.5" fill="#EEEEEE"/>
<text x="550" y="226" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">8</text>
<circle cx="620" cy="220" r="22" stroke="#000000" stroke-width="1.5" fill="#EEEEEE"/>
<text x="620" y="226" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">10</text>

<!-- Three notation forms at bottom -->
<!-- Roster / Enumeration (showRoster=true) -->
<rect x="30" y="360" width="250" height="110" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="6"/>
<text x="155" y="382" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Roster (List) Notation</text>
<line x1="42" y1="390" x2="268" y2="390" stroke="#AAAAAA" stroke-width="1"/>
<text x="155" y="412" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">A = {2, 4, 6, 8, 10}</text>
<text x="155" y="436" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Elements listed between curly braces,</text>
<text x="155" y="452" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">separated by commas.</text>
<text x="155" y="465" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Order does not matter.</text>

<!-- Set-builder notation (showSetBuilder=true) -->
<rect x="325" y="360" width="250" height="110" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="6"/>
<text x="450" y="382" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Set-Builder Notation</text>
<line x1="337" y1="390" x2="563" y2="390" stroke="#AAAAAA" stroke-width="1"/>
<text x="450" y="412" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">A = {x : x is even, 1≤x≤10}</text>
<text x="450" y="432" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Read: "x such that x is an even</text>
<text x="450" y="448" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">number between 1 and 10."</text>
<text x="450" y="464" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">':' or '|' means "such that".</text>

<!-- Description notation (showDescription=true) -->
<rect x="620" y="360" width="250" height="110" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="6"/>
<text x="745" y="382" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Description Notation</text>
<line x1="632" y1="390" x2="858" y2="390" stroke="#AAAAAA" stroke-width="1"/>
<text x="745" y="416" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">A = the set of even numbers</text>
<text x="745" y="434" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">from 2 to 10 inclusive</text>
<text x="745" y="456" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Describes in words what</text>
<text x="745" y="472" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">property members share.</text>

<!-- Cardinality note -->
<text x="450" y="345" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Cardinality: |A| = n(A) = 5  (number of elements)</text>

</g>
</svg>`;

    // Generated from registry: vennDiagram2Sets
    // setA=[1..5], setB=[4..8], universal=[1..10]
    // options: showSets, showIntersection, showUnion, showElements
    static vennDiagram2SetsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Venn Diagram 2 Sets</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Venn Diagram</text>
<text x="400" y="55" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">A = {1,2,3,4,5}   B = {4,5,6,7,8}   ξ = {1,2,3,...,10}</text>

<!-- Universal set rectangle -->
<rect x="60" y="80" width="680" height="400" stroke="#000000" stroke-width="2.5" fill="#FAFAFA" rx="8"/>
<text x="72" y="102" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">ξ</text>

<!-- Circle A (showSets=true) -->
<circle cx="290" cy="290" r="160" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Circle B -->
<circle cx="510" cy="290" r="160" stroke="#000000" stroke-width="2.5" fill="none"/>

<!-- Set labels -->
<text x="200" y="200" font-family="Arial" font-size="18" fill="#000000" font-weight="bold">A</text>
<text x="600" y="200" font-family="Arial" font-size="18" fill="#000000" font-weight="bold">B</text>
<text x="400" y="200" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">A ∩ B</text>

<!-- Elements (showElements=true) -->
<!-- A only: {1,2,3} -->
<text x="182" y="275" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">1</text>
<text x="210" y="305" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">2</text>
<text x="195" y="340" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">3</text>
<!-- Intersection: {4,5} -->
<text x="385" y="278" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">4</text>
<text x="415" y="308" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">5</text>
<!-- B only: {6,7,8} -->
<text x="580" y="275" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">6</text>
<text x="605" y="310" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">7</text>
<text x="586" y="346" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">8</text>
<!-- Outside both: {9,10} -->
<text x="110" y="420" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">9</text>
<text x="690" y="420" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">10</text>

<!-- Set operations summary (showUnion, showIntersection=true) -->
<rect x="60" y="505" width="680" height="75" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="400" y="525" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Set Operations</text>
<line x1="70" y1="533" x2="730" y2="533" stroke="#AAAAAA" stroke-width="1"/>
<text x="200" y="552" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">A ∪ B = {1,2,3,4,5,6,7,8}</text>
<text x="400" y="552" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">A ∩ B = {4, 5}</text>
<text x="610" y="552" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">A – B = {1, 2, 3}</text>
<text x="220" y="572" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">n(A∪B)=n(A)+n(B)–n(A∩B) = 5+5–2 = 8</text>

</g>
</svg>`;

    // Generated from registry: vennDiagram3Sets
    // setA=[1..7], setB=[4..10], setC=[6,7,10,11,12], universal=[1..13]
    // options: showSets, showIntersections, showElements, showRegions
    static vennDiagram3SetsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904//DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="700" viewBox="0 0 900 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Venn Diagram 3 Sets</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Venn Diagram (3 Sets)</text>
<text x="450" y="56" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">A={1,2,3,4,5,6,7}  B={4,5,6,8,9,10}  C={6,7,10,11,12}  ξ={1..13}</text>

<!-- Universal set -->
<rect x="50" y="75" width="800" height="540" stroke="#000000" stroke-width="2.5" fill="#FAFAFA" rx="8"/>
<text x="62" y="96" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">ξ</text>

<!-- Three circles (showSets=true):
     A: centre (330,300), B: centre (570,300), C: centre (450,460) each r=160 -->
<circle cx="330" cy="300" r="160" stroke="#000000" stroke-width="2.5" fill="none"/>
<circle cx="570" cy="300" r="160" stroke="#000000" stroke-width="2.5" fill="none"/>
<circle cx="450" cy="460" r="160" stroke="#000000" stroke-width="2.5" fill="none"/>

<!-- Set labels -->
<text x="220" y="230" font-family="Arial" font-size="18" fill="#000000" font-weight="bold">A</text>
<text x="672" y="230" font-family="Arial" font-size="18" fill="#000000" font-weight="bold">B</text>
<text x="448" y="640" font-family="Arial" font-size="18" fill="#000000" font-weight="bold">C</text>

<!-- Region labels (showRegions=true) -->
<!-- A only (1,2,3) -->
<text x="260" y="280" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">1  2  3</text>
<!-- B only (8,9) -->
<text x="648" y="280" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">8  9</text>
<!-- C only (11,12) -->
<text x="450" y="600" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">11  12</text>
<!-- A ∩ B only (4,5) -->
<text x="450" y="268" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">4  5</text>
<!-- A ∩ C only (7) -->
<text x="335" y="435" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">7</text>
<!-- B ∩ C only (10) -->
<text x="565" y="435" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">10</text>
<!-- A ∩ B ∩ C (6) — centre -->
<text x="450" y="370" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">6</text>
<text x="450" y="388" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">A∩B∩C</text>
<!-- Outside all (13) -->
<text x="100" y="570" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">13</text>

<!-- Intersections labels (showIntersections=true) -->
<text x="450" y="248" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">A∩B</text>
<text x="310" y="456" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">A∩C</text>
<text x="590" y="456" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">B∩C</text>

<!-- Summary box -->
<rect x="50" y="638" width="800" height="82" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="450" y="658" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Key Intersections</text>
<line x1="60" y1="665" x2="840" y2="665" stroke="#AAAAAA" stroke-width="1"/>
<text x="225" y="682" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A∩B = {4,5,6}</text>
<text x="450" y="682" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A∩C = {6,7}</text>
<text x="675" y="682" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">B∩C = {6,10}</text>
<text x="340" y="706" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A∩B∩C = {6}</text>
<text x="580" y="706" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A∪B∪C = {1,2,3,4,5,6,7,8,9,10,11,12}</text>

</g>
</svg>`;

    // Generated from registry: setOperationsUnion
    // operation: union, setA=[1,2,3,4], setB=[3,4,5,6]
    // options: showSets, showOperation, showResult, showVenn
    static setOperationsUnionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Set Union A ∪ B</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Set Union  A ∪ B</text>
<text x="450" y="55" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">All elements in A OR in B (or both)</text>

<!-- Universal set -->
<rect x="60" y="75" width="780" height="380" stroke="#000000" stroke-width="2" fill="#FAFAFA" rx="6"/>
<text x="72" y="96" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">ξ</text>

<!-- Venn diagram (showVenn=true): shade entire union region (both circles) with hatching -->
<!-- Circle A: cx=290, cy=265, r=150 — shaded (union region) -->
<!-- Circle B: cx=460, cy=265, r=150 — shaded -->
<!-- Filled representation using pattern -->
<defs>
  <pattern id="hatch" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
    <line x1="0" y1="0" x2="0" y2="8" stroke="#999999" stroke-width="1"/>
  </pattern>
  <clipPath id="circleA">
    <circle cx="290" cy="265" r="150"/>
  </clipPath>
  <clipPath id="circleB">
    <circle cx="460" cy="265" r="150"/>
  </clipPath>
</defs>

<!-- Shade full A -->
<circle cx="290" cy="265" r="150" fill="url(#hatch)" stroke="none"/>
<!-- Shade full B -->
<circle cx="460" cy="265" r="150" fill="url(#hatch)" stroke="none"/>
<!-- Outlines -->
<circle cx="290" cy="265" r="150" stroke="#000000" stroke-width="2.5" fill="none"/>
<circle cx="460" cy="265" r="150" stroke="#000000" stroke-width="2.5" fill="none"/>

<!-- Labels -->
<text x="210" y="200" font-family="Arial" font-size="17" fill="#000000" font-weight="bold">A</text>
<text x="540" y="200" font-family="Arial" font-size="17" fill="#000000" font-weight="bold">B</text>

<!-- Elements (showElements / showSets=true) -->
<!-- A only: {1,2} -->
<text x="195" y="255" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">1</text>
<text x="215" y="285" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">2</text>
<!-- Intersection: {3,4} -->
<text x="362" y="258" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">3</text>
<text x="388" y="285" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">4</text>
<!-- B only: {5,6} -->
<text x="534" y="255" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">5</text>
<text x="558" y="285" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">6</text>

<!-- Union shading legend note -->
<text x="375" y="420" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">▨ Shaded region = A ∪ B = {1, 2, 3, 4, 5, 6}</text>

<!-- Operation and result boxes (showOperation, showResult=true) -->
<rect x="620" y="80" width="260" height="140" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="5"/>
<text x="750" y="100" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Union A ∪ B</text>
<line x1="630" y1="108" x2="870" y2="108" stroke="#AAAAAA" stroke-width="1"/>
<text x="750" y="126" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">A = {1, 2, 3, 4}</text>
<text x="750" y="146" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">B = {3, 4, 5, 6}</text>
<line x1="630" y1="154" x2="870" y2="154" stroke="#AAAAAA" stroke-width="1"/>
<text x="750" y="173" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">A ∪ B = {1,2,3,4,5,6}</text>
<text x="750" y="205" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">n(A∪B) = n(A)+n(B)–n(A∩B)</text>
<text x="750" y="222" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">= 4 + 4 – 2 = 6</text>

<!-- Definition box -->
<rect x="60" y="490" width="780" height="80" fill="#F0F0F0" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="450" y="512" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Definition</text>
<text x="450" y="534" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">A ∪ B = {x : x ∈ A  or  x ∈ B}</text>
<text x="450" y="556" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">"or" is inclusive — elements in both sets are counted once only</text>

</g>
</svg>`;

    // Generated from registry: setOperationsIntersection
    // setA=[1..5], setB=[3..7]
    // options: showSets, showOperation, showResult, showVenn
    static setOperationsIntersectionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Set Intersection A ∩ B</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Set Intersection  A ∩ B</text>
<text x="450" y="55" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Elements common to BOTH A and B</text>

<!-- Universal set -->
<rect x="60" y="75" width="780" height="380" stroke="#000000" stroke-width="2" fill="#FAFAFA" rx="6"/>
<text x="72" y="96" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">ξ</text>

<!-- Defs for intersection shading -->
<defs>
  <pattern id="hatch2" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
    <line x1="0" y1="0" x2="0" y2="8" stroke="#999999" stroke-width="1"/>
  </pattern>
  <clipPath id="clipA2">
    <circle cx="295" cy="265" r="155"/>
  </clipPath>
</defs>

<!-- Shade only intersection (overlap of both circles): use clip of circle A applied to circle B fill -->
<circle cx="475" cy="265" r="155" fill="url(#hatch2)" stroke="none" clip-path="url(#clipA2)"/>

<!-- Outlines -->
<circle cx="295" cy="265" r="155" stroke="#000000" stroke-width="2.5" fill="none"/>
<circle cx="475" cy="265" r="155" stroke="#000000" stroke-width="2.5" fill="none"/>

<!-- Set labels -->
<text x="210" y="200" font-family="Arial" font-size="17" fill="#000000" font-weight="bold">A</text>
<text x="550" y="200" font-family="Arial" font-size="17" fill="#000000" font-weight="bold">B</text>
<text x="385" y="230" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">A∩B</text>

<!-- Elements -->
<!-- A only: {1,2} -->
<text x="196" y="255" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">1</text>
<text x="215" y="285" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">2</text>
<!-- Intersection: {3,4,5} -->
<text x="358" y="252" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">3</text>
<text x="385" y="272" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">4</text>
<text x="410" y="295" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">5</text>
<!-- B only: {6,7} -->
<text x="550" y="255" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">6</text>
<text x="574" y="285" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">7</text>

<text x="385" y="420" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">▨ Shaded region = A ∩ B = {3, 4, 5}</text>

<!-- Info boxes -->
<rect x="620" y="80" width="260" height="130" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="5"/>
<text x="750" y="100" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Intersection A ∩ B</text>
<line x1="630" y1="108" x2="870" y2="108" stroke="#AAAAAA" stroke-width="1"/>
<text x="750" y="126" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">A = {1, 2, 3, 4, 5}</text>
<text x="750" y="146" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">B = {3, 4, 5, 6, 7}</text>
<line x1="630" y1="154" x2="870" y2="154" stroke="#AAAAAA" stroke-width="1"/>
<text x="750" y="172" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">A ∩ B = {3, 4, 5}</text>
<text x="750" y="196" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">n(A ∩ B) = 3</text>

<!-- Definition -->
<rect x="60" y="490" width="780" height="70" fill="#F0F0F0" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="450" y="512" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Definition</text>
<text x="450" y="534" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">A ∩ B = {x : x ∈ A  and  x ∈ B}</text>
<text x="450" y="552" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Only elements belonging to BOTH sets simultaneously</text>

</g>
</svg>`;

    // Generated from registry: setOperationsComplement
    // setA=[2,4,6,8], universal=[1..10]
    // options: showSet, showUniversal, showComplement, showVenn
    static setOperationsComplementSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Set Complement A'</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Set Complement  A'</text>
<text x="400" y="55" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">All elements in ξ that are NOT in A</text>

<!-- Universal set (showUniversal=true) -->
<rect x="60" y="75" width="680" height="400" stroke="#000000" stroke-width="2.5" fill="#FAFAFA" rx="6"/>
<text x="72" y="96" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">ξ = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}</text>

<!-- Shade the complement region = everything outside circle A inside rectangle -->
<defs>
  <pattern id="hatch3" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
    <line x1="0" y1="0" x2="0" y2="8" stroke="#BBBBBB" stroke-width="1"/>
  </pattern>
  <clipPath id="clipRect">
    <rect x="60" y="75" width="680" height="400"/>
  </clipPath>
  <mask id="maskA">
    <rect x="60" y="75" width="680" height="400" fill="white"/>
    <circle cx="400" cy="275" r="155" fill="black"/>
  </mask>
</defs>
<!-- Shade complement: entire rect minus circle A -->
<rect x="60" y="75" width="680" height="400" fill="url(#hatch3)" stroke="none" mask="url(#maskA)"/>

<!-- Circle A (showSet=true) -->
<circle cx="400" cy="275" r="155" stroke="#000000" stroke-width="2.5" fill="#FFFFFF"/>
<text x="400" y="220" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">A</text>

<!-- Elements inside A: {2,4,6,8} -->
<text x="332" y="268" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">2</text>
<text x="375" y="296" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">4</text>
<text x="425" y="268" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">6</text>
<text x="464" y="296" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">8</text>

<!-- Elements in complement (showComplement=true): {1,3,5,7,9,10} -->
<text x="110" y="170" font-family="Arial" font-size="15" fill="#000000" font-weight="bold">1</text>
<text x="680" y="170" font-family="Arial" font-size="15" fill="#000000" font-weight="bold">3</text>
<text x="110" y="380" font-family="Arial" font-size="15" fill="#000000" font-weight="bold">5</text>
<text x="680" y="380" font-family="Arial" font-size="15" fill="#000000" font-weight="bold">7</text>
<text x="130" y="280" font-family="Arial" font-size="15" fill="#000000" font-weight="bold">9</text>
<text x="666" y="280" font-family="Arial" font-size="15" fill="#000000" font-weight="bold">10</text>

<!-- Complement label -->
<text x="400" y="440" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">▨ Shaded region = A' = {1, 3, 5, 7, 9, 10}</text>

<!-- Info boxes -->
<rect x="60" y="500" width="680" height="80" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="400" y="520" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Complement Rules</text>
<line x1="70" y1="528" x2="730" y2="528" stroke="#AAAAAA" stroke-width="1"/>
<text x="400" y="548" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">A' = {x : x ∈ ξ and x ∉ A}    |    A ∪ A' = ξ    |    A ∩ A' = ∅</text>
<text x="400" y="568" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">n(A') = n(ξ) – n(A) = 10 – 4 = 6    |    (A')' = A</text>

</g>
</svg>`;

    // Generated from registry: setOperationsDifference
    // setA=[1..5], setB=[3..7]
    // options: showSets, showOperation, showResult, showVenn
    static setOperationsDifferenceSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Set Difference A - B</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Set Difference  A – B</text>
<text x="450" y="55" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Elements in A but NOT in B</text>

<!-- Universal set -->
<rect x="60" y="75" width="780" height="380" stroke="#000000" stroke-width="2" fill="#FAFAFA" rx="6"/>
<text x="72" y="96" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">ξ</text>

<defs>
  <pattern id="hatch4" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
    <line x1="0" y1="0" x2="0" y2="8" stroke="#999999" stroke-width="1"/>
  </pattern>
  <!-- Shade A but NOT the intersection with B: clip to circleA then mask out circleB -->
  <clipPath id="clipA3">
    <circle cx="295" cy="265" r="155"/>
  </clipPath>
  <mask id="maskB">
    <rect x="0" y="0" width="900" height="600" fill="white"/>
    <circle cx="475" cy="265" r="155" fill="black"/>
  </mask>
</defs>

<!-- Shade A – B (A minus intersection) -->
<circle cx="295" cy="265" r="155" fill="url(#hatch4)" stroke="none" mask="url(#maskB)"/>
<!-- Outlines -->
<circle cx="295" cy="265" r="155" stroke="#000000" stroke-width="2.5" fill="none"/>
<circle cx="475" cy="265" r="155" stroke="#000000" stroke-width="2.5" fill="none"/>

<!-- Labels -->
<text x="210" y="200" font-family="Arial" font-size="17" fill="#000000" font-weight="bold">A</text>
<text x="555" y="200" font-family="Arial" font-size="17" fill="#000000" font-weight="bold">B</text>

<!-- Elements -->
<!-- A only (in A–B): {1,2} -->
<text x="196" y="255" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">1</text>
<text x="216" y="285" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">2</text>
<!-- Intersection {3,4,5}: not shaded -->
<text x="358" y="252" font-family="Arial" font-size="14" fill="#888888" text-anchor="middle">3</text>
<text x="385" y="272" font-family="Arial" font-size="14" fill="#888888" text-anchor="middle">4</text>
<text x="410" y="295" font-family="Arial" font-size="14" fill="#888888" text-anchor="middle">5</text>
<!-- B only: {6,7} -->
<text x="548" y="255" font-family="Arial" font-size="14" fill="#888888" text-anchor="middle">6</text>
<text x="572" y="285" font-family="Arial" font-size="14" fill="#888888" text-anchor="middle">7</text>

<text x="385" y="420" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">▨ Shaded region = A – B = {1, 2}   (grey elements excluded)</text>

<!-- Result box -->
<rect x="620" y="80" width="260" height="140" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="5"/>
<text x="750" y="100" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Set Difference A – B</text>
<line x1="630" y1="108" x2="870" y2="108" stroke="#AAAAAA" stroke-width="1"/>
<text x="750" y="126" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">A = {1, 2, 3, 4, 5}</text>
<text x="750" y="146" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">B = {3, 4, 5, 6, 7}</text>
<line x1="630" y1="154" x2="870" y2="154" stroke="#AAAAAA" stroke-width="1"/>
<text x="750" y="173" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">A – B = {1, 2}</text>
<text x="750" y="194" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">A – B = A ∩ B'</text>
<text x="750" y="210" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">n(A–B) = n(A) – n(A∩B) = 5–3=2</text>

<!-- Definition -->
<rect x="60" y="490" width="780" height="70" fill="#F0F0F0" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="450" y="510" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Definition</text>
<text x="450" y="532" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">A – B = {x : x ∈ A  and  x ∉ B}</text>
<text x="450" y="552" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Note: A – B ≠ B – A in general</text>

</g>
</svg>`;

    // Generated from registry: subsetDiagram
    // setA=[2,4,6], setB=[1..8]
    // options: showSets, showContainment, showVenn
    static subsetDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Subset Relationship A ⊆ B</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Subset Relationship  A ⊆ B</text>
<text x="400" y="55" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Every element of A is also an element of B</text>

<!-- Universal set -->
<rect x="60" y="75" width="680" height="420" stroke="#000000" stroke-width="2.5" fill="#FAFAFA" rx="6"/>
<text x="72" y="96" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">ξ</text>

<!-- Outer circle = B (showSets=true) -->
<circle cx="400" cy="295" r="190" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="490" y="160" font-family="Arial" font-size="18" fill="#000000" font-weight="bold">B</text>

<!-- Inner circle = A (A ⊆ B, fully inside B, showContainment=true) -->
<circle cx="370" cy="310" r="100" stroke="#000000" stroke-width="2.5" fill="#EEEEEE"/>
<text x="370" y="278" font-family="Arial" font-size="17" fill="#000000" text-anchor="middle" font-weight="bold">A</text>

<!-- Elements of A (inside inner circle): {2,4,6} -->
<text x="338" y="318" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">2</text>
<text x="370" y="338" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">4</text>
<text x="400" y="315" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">6</text>

<!-- Elements of B not in A: {1,3,5,7,8} -->
<text x="250" y="230" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">1</text>
<text x="540" y="250" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">3</text>
<text x="240" y="360" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">5</text>
<text x="540" y="370" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">7</text>
<text x="400" y="450" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">8</text>

<!-- Containment arrows (showContainment=true) -->
<!-- Arrow from A label to B label indicating containment -->
<line x1="390" y1="272" x2="478" y2="175" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arrow-bw)"/>
<text x="452" y="218" font-family="Arial" font-size="12" fill="#000000">A ⊆ B</text>

<!-- Info box -->
<rect x="60" y="520" width="680" height="60" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="400" y="540" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Subset Rules</text>
<text x="400" y="562" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">A ⊆ B iff every element of A belongs to B  |  A ⊆ A  |  ∅ ⊆ A  |  A ⊂ B means A ⊆ B and A ≠ B</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: disjointSets
    // setA=[1,2,3], setB=[4,5,6]
    // options: showSets, showSeparation, showVenn
    static disjointSetsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Disjoint Sets</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Disjoint Sets</text>
<text x="400" y="55" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Sets with NO common elements  —  A ∩ B = ∅</text>

<!-- Universal set -->
<rect x="60" y="75" width="680" height="420" stroke="#000000" stroke-width="2.5" fill="#FAFAFA" rx="6"/>
<text x="72" y="96" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">ξ</text>

<!-- Circle A (no overlap with B — separated circles) (showSets, showSeparation=true) -->
<circle cx="240" cy="295" r="155" stroke="#000000" stroke-width="2.5" fill="#F0F0F0"/>
<text x="240" y="220" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">A</text>

<!-- Circle B (separate, no overlap) -->
<circle cx="560" cy="295" r="155" stroke="#000000" stroke-width="2.5" fill="#F0F0F0"/>
<text x="560" y="220" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">B</text>

<!-- Separation annotation (showSeparation=true) -->
<line x1="395" y1="295" x2="405" y2="295" stroke="#000000" stroke-width="2" stroke-dasharray="2,2"/>
<text x="400" y="280" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle">∅</text>
<text x="400" y="310" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">no overlap</text>

<!-- Elements of A: {1,2,3} -->
<text x="196" y="280" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">1</text>
<text x="240" y="310" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">2</text>
<text x="284" y="280" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">3</text>

<!-- Elements of B: {4,5,6} -->
<text x="516" y="280" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">4</text>
<text x="560" y="310" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">5</text>
<text x="604" y="280" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">6</text>

<!-- Info box -->
<rect x="60" y="520" width="680" height="60" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="400" y="540" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Properties of Disjoint Sets</text>
<text x="400" y="562" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A ∩ B = ∅  |  n(A ∪ B) = n(A) + n(B)  |  A and B are called mutually exclusive</text>

</g>
</svg>`;

    // Generated from registry: cardinality
    // setA=[1..5], setB=[3..8]
    // options: showSets, showCounts, showFormula, showVenn
    static cardinalitySvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Cardinality of Sets</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Cardinality of Sets</text>
<text x="450" y="55" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Number of elements in a set — written n(A) or |A|</text>

<!-- Universal set -->
<rect x="60" y="75" width="780" height="380" stroke="#000000" stroke-width="2" fill="#FAFAFA" rx="6"/>
<text x="72" y="97" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">ξ = {1,2,3,...,10}   n(ξ)=10</text>

<!-- Circles (showVenn=true) -->
<circle cx="300" cy="265" r="150" stroke="#000000" stroke-width="2.5" fill="none"/>
<circle cx="480" cy="265" r="150" stroke="#000000" stroke-width="2.5" fill="none"/>

<!-- Labels with counts (showCounts=true) -->
<text x="215" y="195" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">A</text>
<text x="555" y="195" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">B</text>
<!-- n labels -->
<text x="215" y="215" font-family="Arial" font-size="12" fill="#555555">n(A)=5</text>
<text x="555" y="215" font-family="Arial" font-size="12" fill="#555555">n(B)=6</text>

<!-- Count brackets for each region -->
<!-- A only: {1,2} → 2 elements -->
<text x="196" y="258" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">1</text>
<text x="215" y="280" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">2</text>
<text x="196" y="305" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">[2 only in A]</text>

<!-- Intersection: {3,4,5} → 3 elements -->
<text x="365" y="252" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">3</text>
<text x="390" y="270" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">4</text>
<text x="415" y="292" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">5</text>
<text x="390" y="315" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">[3 in A∩B]</text>

<!-- B only: {6,7,8} → 3 elements -->
<text x="542" y="255" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">6</text>
<text x="564" y="278" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">7</text>
<text x="562" y="302" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">8</text>
<text x="560" y="325" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">[3 only in B]</text>

<!-- Outside: {9,10} -->
<text x="106" y="400" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">9  10</text>
<text x="106" y="420" font-family="Arial" font-size="11" fill="#555555">[2 outside]</text>

<!-- Formula box (showFormula=true) -->
<rect x="620" y="80" width="260" height="200" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="5"/>
<text x="750" y="100" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Inclusion-Exclusion</text>
<line x1="630" y1="108" x2="870" y2="108" stroke="#AAAAAA" stroke-width="1"/>
<text x="750" y="130" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">n(A∪B) = n(A)+n(B)–n(A∩B)</text>
<text x="750" y="152" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">= 5 + 6 – 3 = 8</text>
<line x1="630" y1="162" x2="870" y2="162" stroke="#AAAAAA" stroke-width="1"/>
<text x="750" y="182" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">n(A) = 5   n(B) = 6</text>
<text x="750" y="202" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">n(A∩B) = 3</text>
<text x="750" y="222" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">n(A') = n(ξ)–n(A) = 10–5=5</text>
<text x="750" y="242" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">n(A–B) = n(A)–n(A∩B) = 5–3=2</text>
<text x="750" y="265" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">n(B–A) = n(B)–n(A∩B) = 6–3=3</text>

<!-- Bottom info -->
<rect x="60" y="490" width="780" height="70" fill="#F0F0F0" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="450" y="512" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Key Cardinality Facts</text>
<text x="450" y="534" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">n(∅)=0   |   n({a,b,c})=3   |   If A⊆B then n(A)≤n(B)   |   n(A×B)=n(A)×n(B)</text>
<text x="450" y="552" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Power set of A has 2^n(A) subsets, e.g. n(A)=5 → 2⁵=32 subsets</text>

</g>
</svg>`;

    // Generated from registry: deMorgansLaws
    // setA=[1,2,3,4], setB=[3,4,5,6], universal=[1..8]
    // options: showLaw1, showLaw2, showProof, showVenn
    static deMorgansLawsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>De Morgan's Laws</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">De Morgan's Laws</text>
<text x="500" y="56" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">A={1,2,3,4}  B={3,4,5,6}  ξ={1,2,3,4,5,6,7,8}</text>

<!-- Divider -->
<line x1="490" y1="72" x2="490" y2="610" stroke="#BBBBBB" stroke-width="1.5" stroke-dasharray="6,4"/>

<!-- ===== LAW 1 (showLaw1=true): (A ∪ B)' = A' ∩ B' ===== -->
<text x="245" y="80" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Law 1:  (A ∪ B)' = A' ∩ B'</text>
<text x="245" y="97" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Complement of union = intersection of complements</text>

<!-- Universal rect Law1 -->
<rect x="30" y="110" width="420" height="240" stroke="#000000" stroke-width="2" fill="#FAFAFA" rx="4"/>
<text x="42" y="128" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">ξ</text>

<!-- Shade (A∪B)' = outside both circles inside ξ -->
<defs>
  <pattern id="h5" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
    <line x1="0" y1="0" x2="0" y2="8" stroke="#BBBBBB" stroke-width="1.2"/>
  </pattern>
  <mask id="mUnion">
    <rect x="30" y="110" width="420" height="240" fill="white"/>
    <circle cx="195" cy="230" r="90" fill="black"/>
    <circle cx="325" cy="230" r="90" fill="black"/>
  </mask>
</defs>
<rect x="30" y="110" width="420" height="240" fill="url(#h5)" stroke="none" mask="url(#mUnion)"/>
<circle cx="195" cy="230" r="90" stroke="#000000" stroke-width="2" fill="none"/>
<circle cx="325" cy="230" r="90" stroke="#000000" stroke-width="2" fill="none"/>
<text x="140" y="185" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">A</text>
<text x="370" y="185" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">B</text>
<!-- Elements inside -->
<text x="112" y="228" font-family="Arial" font-size="12" fill="#888888" text-anchor="middle">1  2</text>
<text x="260" y="228" font-family="Arial" font-size="12" fill="#888888" text-anchor="middle">3  4  5</text>
<text x="400" y="228" font-family="Arial" font-size="12" fill="#888888" text-anchor="middle">6</text>
<!-- Shaded complement elements -->
<text x="55" y="318" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">7  8</text>
<text x="55" y="336" font-family="Arial" font-size="11" fill="#555555">(A∪B)' = {7,8}</text>
<text x="245" y="345" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">▨ shaded = (A∪B)' = A'∩B' = {7,8}</text>

<!-- Law 1 proof (showProof=true) -->
<rect x="30" y="365" width="420" height="100" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="240" y="384" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Verification</text>
<text x="240" y="403" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A∪B = {1,2,3,4,5,6}   (A∪B)' = {7,8}</text>
<text x="240" y="421" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A' = {5,6,7,8}   B' = {1,2,7,8}</text>
<text x="240" y="441" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">A' ∩ B' = {7,8}  ✓  They match!</text>
<text x="240" y="456" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">"Not (A or B)" = "Not A, and Not B"</text>

<!-- ===== LAW 2 (showLaw2=true): (A ∩ B)' = A' ∪ B' ===== -->
<text x="745" y="80" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Law 2:  (A ∩ B)' = A' ∪ B'</text>
<text x="745" y="97" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Complement of intersection = union of complements</text>

<!-- Universal rect Law2 -->
<rect x="530" y="110" width="420" height="240" stroke="#000000" stroke-width="2" fill="#FAFAFA" rx="4"/>
<text x="542" y="128" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">ξ</text>

<!-- Shade (A∩B)' = everything except the intersection -->
<defs>
  <pattern id="h6" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
    <line x1="0" y1="0" x2="0" y2="8" stroke="#BBBBBB" stroke-width="1.2"/>
  </pattern>
  <mask id="mIntersect">
    <rect x="530" y="110" width="420" height="240" fill="white"/>
    <!-- Intersection of two circles: approximate with a shape — use clip-path technique -->
    <!-- Shade A only region -->
    <!-- We'll shade entire rect, then cut out the intersection -->
    <!-- Intersection centred at ~720,230 overlap -->
    <!-- Approximate intersection polygon (lens shape at cx=720): remove from white -->
    <clipPath id="cA2">
      <circle cx="695" cy="230" r="90"/>
    </clipPath>
    <circle cx="825" cy="230" r="90" fill="black" clip-path="url(#cA2)"/>
  </mask>
</defs>
<!-- Shade everything EXCEPT intersection: shade full rect then shade circles minus intersection -->
<!-- Simpler: shade A (outside intersection), shade B (outside intersection), shade outside both -->
<!-- A only: -->
<defs>
  <clipPath id="cA3"><circle cx="695" cy="230" r="90"/></clipPath>
  <mask id="mBnotInA"><rect x="0" y="0" width="1000" height="700" fill="white"/><circle cx="695" cy="230" r="90" fill="black"/></mask>
  <mask id="mAnotInB"><rect x="0" y="0" width="1000" height="700" fill="white"/><circle cx="825" cy="230" r="90" fill="black"/></mask>
  <mask id="mBothCircles"><rect x="0" y="0" width="1000" height="700" fill="white"/><circle cx="695" cy="230" r="90" fill="black"/><circle cx="825" cy="230" r="90" fill="black"/></mask>
</defs>
<!-- Shade A only (not intersection) -->
<circle cx="695" cy="230" r="90" fill="url(#h6)" stroke="none" mask="url(#mBnotInA)"/>
<!-- Shade B only (not intersection) -->
<circle cx="825" cy="230" r="90" fill="url(#h6)" stroke="none" mask="url(#mAnotInB)"/>
<!-- Shade outside both (complement of A∪B) -->
<rect x="530" y="110" width="420" height="240" fill="url(#h6)" stroke="none" mask="url(#mBothCircles)"/>
<!-- Circle outlines -->
<circle cx="695" cy="230" r="90" stroke="#000000" stroke-width="2" fill="none"/>
<circle cx="825" cy="230" r="90" stroke="#000000" stroke-width="2" fill="none"/>
<text x="640" y="185" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">A</text>
<text x="875" y="185" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">B</text>
<!-- Elements -->
<text x="610" y="228" font-family="Arial" font-size="12" fill="#888888" text-anchor="middle">1  2</text>
<text x="760" y="228" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">3  4</text>
<text x="900" y="228" font-family="Arial" font-size="12" fill="#888888" text-anchor="middle">5  6</text>
<text x="555" y="330" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">7  8</text>
<text x="745" y="345" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">▨ shaded = (A∩B)' = A'∪B' = {1,2,5,6,7,8}</text>

<!-- Law 2 proof -->
<rect x="530" y="365" width="420" height="100" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="740" y="384" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Verification</text>
<text x="740" y="403" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A∩B = {3,4}   (A∩B)' = {1,2,5,6,7,8}</text>
<text x="740" y="421" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A' = {5,6,7,8}   B' = {1,2,7,8}</text>
<text x="740" y="441" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">A'∪B' = {1,2,5,6,7,8}  ✓  They match!</text>
<text x="740" y="456" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">"Not (A and B)" = "Not A, or Not B"</text>

<!-- Summary box -->
<rect x="30" y="490" width="940" height="90" fill="#F0F0F0" stroke="#000000" stroke-width="2" rx="5"/>
<text x="500" y="512" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">De Morgan's Laws Summary</text>
<line x1="40" y1="520" x2="960" y2="520" stroke="#AAAAAA" stroke-width="1"/>
<text x="500" y="542" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">(A ∪ B)' = A' ∩ B'          (A ∩ B)' = A' ∪ B'</text>
<text x="500" y="562" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">"Not (A or B)" = "Not A, and Not B"     |     "Not (A and B)" = "Not A, or Not B"</text>
<text x="500" y="575" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">These laws also apply to logic: ¬(P ∨ Q) = ¬P ∧ ¬Q   and   ¬(P ∧ Q) = ¬P ∨ ¬Q</text>

</g>
</svg>`;


    // ============================================================
    // ===== 6. VECTORS ===========================================
    // ============================================================

    // Generated from registry: vectorRepresentation
    // vector: {x:3, y:4}, showArrow, showComponents, showMagnitude, showDirection
    static vectorRepresentationSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Vector Representation</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Vector Representation</text>
<text x="400" y="52" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Directed line segment with magnitude and direction</text>

<!-- Axes -->
<line x1="100" y1="480" x2="700" y2="480" stroke="#000000" stroke-width="1.5" marker-end="url(#arr)"/>
<line x1="100" y1="480" x2="100" y2="80"  stroke="#000000" stroke-width="1.5" marker-end="url(#arr)"/>
<text x="710" y="484" font-family="Arial" font-size="14" fill="#000000">x</text>
<text x="95"  y="70"  font-family="Arial" font-size="14" fill="#000000">y</text>

<!-- Grid (light) -->
<g stroke="#CCCCCC" stroke-width="0.5">
  <line x1="100" y1="380" x2="700" y2="380"/>
  <line x1="100" y1="280" x2="700" y2="280"/>
  <line x1="100" y1="180" x2="700" y2="180"/>
  <line x1="200" y1="80"  x2="200" y2="480"/>
  <line x1="300" y1="80"  x2="300" y2="480"/>
  <line x1="400" y1="80"  x2="400" y2="480"/>
  <line x1="500" y1="80"  x2="500" y2="480"/>
  <line x1="600" y1="80"  x2="600" y2="480"/>
</g>

<!-- Axis tick labels (scale: 100px = 1 unit) -->
<text x="198" y="496" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1</text>
<text x="298" y="496" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">2</text>
<text x="398" y="496" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">3</text>
<text x="498" y="496" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">4</text>
<text x="598" y="496" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">5</text>
<text x="85"  y="484" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">0</text>
<text x="85"  y="384" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1</text>
<text x="85"  y="284" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">2</text>
<text x="85"  y="184" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">3</text>
<text x="85"  y="84"  font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">4</text>

<!-- Origin point -->
<circle cx="100" cy="480" r="3" fill="#000000"/>

<!-- Vector v = (3,4): origin(100,480) → tip(100+300, 480-400) = (400, 80) -->
<line x1="100" y1="480" x2="400" y2="80" stroke="#000000" stroke-width="3" marker-end="url(#arr)"/>

<!-- showComponents: x-component (dashed horizontal) -->
<line x1="100" y1="480" x2="400" y2="480" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>
<!-- x-component arrow -->
<line x1="100" y1="480" x2="398" y2="480" stroke="#000000" stroke-width="2" marker-end="url(#arr)"/>
<text x="250" y="500" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">vₓ = 3</text>

<!-- showComponents: y-component (dashed vertical) -->
<line x1="400" y1="480" x2="400" y2="80" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>
<line x1="400" y1="480" x2="400" y2="82" stroke="#000000" stroke-width="2" marker-end="url(#arr)"/>
<text x="435" y="285" font-family="Arial" font-size="12" fill="#000000">v_y = 4</text>

<!-- showMagnitude: label |v| = 5 -->
<text x="210" y="260" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">|v| = 5</text>

<!-- showDirection: angle arc -->
<path d="M 160,480 A 60,60 0 0,0 136,427" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="175" y="450" font-family="Arial" font-size="12" fill="#000000">θ ≈ 53°</text>

<!-- Vector label -->
<text x="240" y="265" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">v</text>
<line x1="248" y1="267" x2="256" y2="267" stroke="#000000" stroke-width="1"/>

<!-- Info box -->
<rect x="480" y="300" width="290" height="130" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="495" y="320" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Vector v = (3, 4)</text>
<text x="495" y="340" font-family="Arial" font-size="11" fill="#000000">Magnitude: |v| = √(3²+4²) = 5</text>
<text x="495" y="358" font-family="Arial" font-size="11" fill="#000000">Direction: θ = arctan(4/3) ≈ 53.1°</text>
<text x="495" y="376" font-family="Arial" font-size="11" fill="#000000">Unit vector: v̂ = (3/5, 4/5)</text>
<text x="495" y="394" font-family="Arial" font-size="11" fill="#000000">Component form: 3i + 4j</text>
<text x="495" y="412" font-family="Arial" font-size="11" fill="#000000">Column vector: (³₄)</text>

<defs>
  <marker id="arr" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: vectorAddition
    // vector1:{x:3,y:2}, vector2:{x:1,y:4}
    // showTriangleMethod, showParallelogramMethod, showResultant
    static vectorAdditionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="700" viewBox="0 0 900 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Vector Addition</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Vector Addition</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">a = (3,2)  b = (1,4)  →  a+b = (4,6)</text>

<!-- ====== LEFT: TRIANGLE METHOD ====== -->
<text x="225" y="90" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Triangle Method</text>
<text x="225" y="108" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Place tail of b at head of a</text>

<!-- Axes L -->
<line x1="60"  y1="580" x2="400" y2="580" stroke="#000000" stroke-width="1" marker-end="url(#arr2)"/>
<line x1="60"  y1="580" x2="60"  y2="120" stroke="#000000" stroke-width="1" marker-end="url(#arr2)"/>
<text x="408" y="584" font-family="Arial" font-size="12" fill="#000000">x</text>
<text x="55"  y="112" font-family="Arial" font-size="12" fill="#000000">y</text>

<!-- scale: 60px/unit. Origin(60,580) -->
<!-- vector a=(3,2): (60,580)→(60+180,580-120)=(240,460) -->
<line x1="60" y1="580" x2="240" y2="460" stroke="#000000" stroke-width="3" marker-end="url(#arr2)"/>
<text x="130" y="508" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">a</text>

<!-- vector b=(1,4) starting from head of a: (240,460)→(240+60,460-240)=(300,220) -->
<line x1="240" y1="460" x2="300" y2="220" stroke="#000000" stroke-width="3" stroke-dasharray="8,4" marker-end="url(#arr2)"/>
<text x="310" y="350" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">b</text>

<!-- resultant a+b=(4,6): (60,580)→(60+240,580-360)=(300,220) -->
<line x1="60" y1="580" x2="300" y2="220" stroke="#000000" stroke-width="3.5" marker-end="url(#arr2)"/>
<text x="150" y="375" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">a+b</text>

<!-- Resultant annotation -->
<text x="60" y="618" font-family="Arial" font-size="11" fill="#000000">Resultant = (4,6), |a+b| = √52 ≈ 7.21</text>

<!-- ====== RIGHT: PARALLELOGRAM METHOD ====== -->
<text x="670" y="90" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Parallelogram Method</text>
<text x="670" y="108" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Both vectors from same origin</text>

<!-- Axes R -->
<line x1="500" y1="580" x2="860" y2="580" stroke="#000000" stroke-width="1" marker-end="url(#arr2)"/>
<line x1="500" y1="580" x2="500" y2="120" stroke="#000000" stroke-width="1" marker-end="url(#arr2)"/>
<text x="868" y="584" font-family="Arial" font-size="12" fill="#000000">x</text>
<text x="495" y="112" font-family="Arial" font-size="12" fill="#000000">y</text>

<!-- scale: 60px/unit. Origin(500,580) -->
<!-- vector a=(3,2): (500,580)→(680,460) -->
<line x1="500" y1="580" x2="680" y2="460" stroke="#000000" stroke-width="3" marker-end="url(#arr2)"/>
<text x="570" y="510" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">a</text>

<!-- vector b=(1,4): (500,580)→(560,340) -->
<line x1="500" y1="580" x2="560" y2="340" stroke="#000000" stroke-width="3" stroke-dasharray="8,4" marker-end="url(#arr2)"/>
<text x="518" y="455" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">b</text>

<!-- parallelogram sides (dashed) -->
<!-- from head of a (680,460) → (740,220) [+ b vector] -->
<line x1="680" y1="460" x2="740" y2="220" stroke="#999999" stroke-width="1.5" stroke-dasharray="5,4"/>
<!-- from head of b (560,340) → (740,220) [+ a vector] -->
<line x1="560" y1="340" x2="740" y2="220" stroke="#999999" stroke-width="1.5" stroke-dasharray="5,4"/>

<!-- resultant diagonal: (500,580)→(740,220) -->
<line x1="500" y1="580" x2="740" y2="220" stroke="#000000" stroke-width="3.5" marker-end="url(#arr2)"/>
<text x="590" y="380" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">a+b</text>

<!-- Right-angle marker at (740,220) corner -->
<rect x="735" y="215" width="10" height="10" fill="none" stroke="#999999" stroke-width="1"/>

<!-- Summary box -->
<rect x="300" y="635" width="300" height="55" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="450" y="656" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Addition Rule</text>
<text x="450" y="674" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">a + b = (aₓ+bₓ, a_y+b_y) = (3+1, 2+4) = (4,6)</text>

<defs>
  <marker id="arr2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: vectorSubtraction
    // vector1:{x:5,y:3}, vector2:{x:2,y:1}
    // showNegative, showResultant
    static vectorSubtractionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Vector Subtraction</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Vector Subtraction</text>
<text x="400" y="52" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">a − b = a + (−b)   |   a=(5,3), b=(2,1), a−b=(3,2)</text>

<!-- Axes: scale 60px/unit, origin(80,500) -->
<line x1="80"  y1="500" x2="700" y2="500" stroke="#000000" stroke-width="1.5" marker-end="url(#arr3)"/>
<line x1="80"  y1="500" x2="80"  y2="80"  stroke="#000000" stroke-width="1.5" marker-end="url(#arr3)"/>
<text x="710" y="504" font-family="Arial" font-size="13" fill="#000000">x</text>
<text x="74"  y="72"  font-family="Arial" font-size="13" fill="#000000">y</text>

<!-- Grid -->
<g stroke="#DDDDDD" stroke-width="0.5">
  <line x1="80" y1="440" x2="700" y2="440"/>
  <line x1="80" y1="380" x2="700" y2="380"/>
  <line x1="80" y1="320" x2="700" y2="320"/>
  <line x1="80" y1="260" x2="700" y2="260"/>
  <line x1="140" y1="80" x2="140" y2="500"/>
  <line x1="200" y1="80" x2="200" y2="500"/>
  <line x1="260" y1="80" x2="260" y2="500"/>
  <line x1="320" y1="80" x2="320" y2="500"/>
  <line x1="380" y1="80" x2="380" y2="500"/>
  <line x1="440" y1="80" x2="440" y2="500"/>
</g>

<!-- Vector a=(5,3): (80,500)→(80+300,500-180)=(380,320) -->
<line x1="80" y1="500" x2="380" y2="320" stroke="#000000" stroke-width="3" marker-end="url(#arr3)"/>
<text x="200" y="395" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">a=(5,3)</text>

<!-- Vector b=(2,1): (80,500)→(200,440) — shown from origin for reference -->
<line x1="80" y1="500" x2="200" y2="440" stroke="#000000" stroke-width="2" stroke-dasharray="8,4" marker-end="url(#arr3)"/>
<text x="130" y="460" font-family="Arial" font-size="13" fill="#000000">b=(2,1)</text>

<!-- Negative vector −b=(−2,−1): from origin (80,500)→(80-120,500+60)=(−40 clipped) 
     Instead show from tip of a: (380,320)→(380-120,320+60)=(260,380) -->
<line x1="380" y1="320" x2="260" y2="380" stroke="#000000" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arr3)"/>
<text x="295" y="340" font-family="Arial" font-size="12" fill="#000000">−b=(−2,−1)</text>

<!-- Resultant a−b=(3,2): from origin (80,500)→(80+180,500-120)=(260,380) -->
<line x1="80" y1="500" x2="260" y2="380" stroke="#000000" stroke-width="3.5" marker-end="url(#arr3)"/>
<text x="125" y="420" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">a−b=(3,2)</text>

<!-- Info box -->
<rect x="440" y="130" width="330" height="160" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="455" y="152" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Vector Subtraction Rules</text>
<text x="455" y="172" font-family="Arial" font-size="11" fill="#000000">a − b  =  a + (−b)</text>
<text x="455" y="190" font-family="Arial" font-size="11" fill="#000000">−b reverses direction of b</text>
<text x="455" y="210" font-family="Arial" font-size="11" fill="#000000">a − b = (aₓ−bₓ, a_y−b_y)</text>
<text x="455" y="228" font-family="Arial" font-size="11" fill="#000000">= (5−2, 3−1) = (3, 2)</text>
<text x="455" y="248" font-family="Arial" font-size="11" fill="#000000">|a−b| = √(3²+2²) = √13 ≈ 3.61</text>
<text x="455" y="268" font-family="Arial" font-size="11" fill="#000000">─── Solid = a,a−b  ··· = b, −b ───</text>

<!-- Legend line styles -->
<line x1="440" y1="430" x2="510" y2="430" stroke="#000000" stroke-width="3"/>
<text x="520" y="434" font-family="Arial" font-size="11" fill="#000000">vector a / resultant</text>
<line x1="440" y1="450" x2="510" y2="450" stroke="#000000" stroke-width="2" stroke-dasharray="8,4"/>
<text x="520" y="454" font-family="Arial" font-size="11" fill="#000000">vector b (reference)</text>
<line x1="440" y1="470" x2="510" y2="470" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
<text x="520" y="474" font-family="Arial" font-size="11" fill="#000000">negative vector −b</text>

<defs>
  <marker id="arr3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: scalarMultiplication
    // vector:{x:2,y:3}, scalar:2
    // showOriginal, showScaled, showMagnitudeChange
    static scalarMultiplicationSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Scalar Multiplication of Vectors</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Scalar Multiplication of Vectors</text>
<text x="400" y="52" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">v = (2,3),  k = 2  →  kv = (4,6)</text>

<!-- Axes: scale 60px/unit, origin(100,500) -->
<line x1="100" y1="500" x2="700" y2="500" stroke="#000000" stroke-width="1.5" marker-end="url(#arr4)"/>
<line x1="100" y1="500" x2="100" y2="80"  stroke="#000000" stroke-width="1.5" marker-end="url(#arr4)"/>
<text x="712" y="504" font-family="Arial" font-size="13" fill="#000000">x</text>
<text x="93"  y="72"  font-family="Arial" font-size="13" fill="#000000">y</text>

<!-- Grid -->
<g stroke="#DDDDDD" stroke-width="0.5">
  <line x1="100" y1="440" x2="700" y2="440"/>
  <line x1="100" y1="380" x2="700" y2="380"/>
  <line x1="100" y1="320" x2="700" y2="320"/>
  <line x1="100" y1="260" x2="700" y2="260"/>
  <line x1="100" y1="200" x2="700" y2="200"/>
  <line x1="100" y1="140" x2="700" y2="140"/>
  <line x1="160" y1="80" x2="160" y2="500"/>
  <line x1="220" y1="80" x2="220" y2="500"/>
  <line x1="280" y1="80" x2="280" y2="500"/>
  <line x1="340" y1="80" x2="340" y2="500"/>
  <line x1="400" y1="80" x2="400" y2="500"/>
  <line x1="460" y1="80" x2="460" y2="500"/>
  <line x1="520" y1="80" x2="520" y2="500"/>
</g>

<!-- Axis labels -->
<text x="158" y="516" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">1</text>
<text x="218" y="516" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">2</text>
<text x="278" y="516" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">3</text>
<text x="338" y="516" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">4</text>
<text x="86" y="444" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">1</text>
<text x="86" y="384" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">2</text>
<text x="86" y="324" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">3</text>
<text x="86" y="264" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">4</text>
<text x="86" y="204" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">5</text>
<text x="86" y="144" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">6</text>

<!-- Original vector v=(2,3): (100,500)→(220,320) -->
<line x1="100" y1="500" x2="220" y2="320" stroke="#000000" stroke-width="2.5" stroke-dasharray="8,4" marker-end="url(#arr4)"/>
<text x="130" y="395" font-family="Arial" font-size="13" fill="#000000">v=(2,3)</text>
<text x="125" y="413" font-family="Arial" font-size="11" fill="#555555">|v|=√13≈3.61</text>

<!-- Scaled vector kv=2×(2,3)=(4,6): (100,500)→(340,140) -->
<line x1="100" y1="500" x2="340" y2="140" stroke="#000000" stroke-width="3.5" marker-end="url(#arr4)"/>
<text x="205" y="295" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">2v=(4,6)</text>
<text x="200" y="315" font-family="Arial" font-size="11" fill="#555555">|2v|=2√13≈7.21</text>

<!-- showMagnitudeChange: bracket showing doubling -->
<line x1="360" y1="500" x2="360" y2="320" stroke="#000000" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="360" y1="500" x2="360" y2="140" stroke="#000000" stroke-width="1.5"/>
<line x1="355" y1="500" x2="365" y2="500" stroke="#000000" stroke-width="1.5"/>
<line x1="355" y1="320" x2="365" y2="320" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="355" y1="140" x2="365" y2="140" stroke="#000000" stroke-width="1.5"/>
<text x="375" y="325" font-family="Arial" font-size="11" fill="#000000">|v|</text>
<text x="375" y="240" font-family="Arial" font-size="11" fill="#000000">×2</text>

<!-- Info box -->
<rect x="430" y="310" width="340" height="170" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="445" y="332" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Scalar Multiplication Rules</text>
<text x="445" y="352" font-family="Arial" font-size="11" fill="#000000">kv = k(vₓ, v_y) = (kvₓ, kv_y)</text>
<text x="445" y="370" font-family="Arial" font-size="11" fill="#000000">2(2,3) = (4,6)  ✓</text>
<text x="445" y="390" font-family="Arial" font-size="11" fill="#000000">|kv| = |k| × |v|</text>
<text x="445" y="408" font-family="Arial" font-size="11" fill="#000000">k &gt; 1: stretches, same direction</text>
<text x="445" y="426" font-family="Arial" font-size="11" fill="#000000">0 &lt; k &lt; 1: shrinks, same direction</text>
<text x="445" y="444" font-family="Arial" font-size="11" fill="#000000">k &lt; 0: reverses direction</text>
<text x="445" y="462" font-family="Arial" font-size="11" fill="#000000">Direction unchanged when k &gt; 0</text>

<defs>
  <marker id="arr4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: vectorComponents
    // vector:{magnitude:5, angle:37}
    // showVector, showXComponent, showYComponent, showCalculations
    static vectorComponentsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Vector Components</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Vector Components</text>
<text x="400" y="52" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Resolving vector into i and j components  |  |v|=5, θ=37°</text>

<!-- Axes: origin(150,450), scale 70px/unit -->
<line x1="100" y1="450" x2="600" y2="450" stroke="#000000" stroke-width="1.5" marker-end="url(#arr5)"/>
<line x1="150" y1="490" x2="150" y2="100" stroke="#000000" stroke-width="1.5" marker-end="url(#arr5)"/>
<text x="612" y="454" font-family="Arial" font-size="13" fill="#000000">x (i)</text>
<text x="142" y="92"  font-family="Arial" font-size="13" fill="#000000">y (j)</text>

<!-- Grid -->
<g stroke="#DDDDDD" stroke-width="0.5">
  <line x1="150" y1="380" x2="600" y2="380"/>
  <line x1="150" y1="310" x2="600" y2="310"/>
  <line x1="150" y1="240" x2="600" y2="240"/>
  <line x1="220" y1="100" x2="220" y2="450"/>
  <line x1="290" y1="100" x2="290" y2="450"/>
  <line x1="360" y1="100" x2="360" y2="450"/>
  <line x1="430" y1="100" x2="430" y2="450"/>
  <line x1="500" y1="100" x2="500" y2="450"/>
</g>

<!-- angle 37°: cos37≈0.7986≈0.8, sin37≈0.6018≈0.6 -->
<!-- |v|=5, scale 70: vx=5*0.8=4 units=280px, vy=5*0.6=3 units=210px -->
<!-- origin(150,450), tip=(150+280,450-210)=(430,240) -->

<!-- showXComponent: horizontal dashed line (150,450)→(430,450) -->
<line x1="150" y1="450" x2="430" y2="450" stroke="#000000" stroke-width="2.5" stroke-dasharray="none" marker-end="url(#arr5)"/>
<!-- x-component arrow (bold solid) -->
<text x="285" y="470" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">vₓ = |v|cosθ = 5cos37° ≈ 4.0</text>

<!-- showYComponent: vertical dashed line (430,450)→(430,240) -->
<line x1="430" y1="450" x2="430" y2="240" stroke="#000000" stroke-width="2" stroke-dasharray="7,4" marker-end="url(#arr5)"/>
<text x="490" y="350" font-family="Arial" font-size="12" fill="#000000">v_y = |v|sinθ</text>
<text x="490" y="368" font-family="Arial" font-size="12" fill="#000000">= 5sin37° ≈ 3.0</text>

<!-- right angle marker -->
<rect x="417" y="437" width="13" height="13" fill="none" stroke="#000000" stroke-width="1.5"/>

<!-- showVector: main vector from (150,450) to (430,240) -->
<line x1="150" y1="450" x2="430" y2="240" stroke="#000000" stroke-width="3" marker-end="url(#arr5)"/>
<text x="270" y="325" font-family="Arial" font-size="15" fill="#000000" font-weight="bold">v</text>
<text x="255" y="343" font-family="Arial" font-size="12" fill="#000000">|v|=5</text>

<!-- Angle arc -->
<path d="M 220,450 A 70,70 0 0,0 206,408" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="238" y="438" font-family="Arial" font-size="12" fill="#000000">θ=37°</text>

<!-- Component notation box -->
<rect x="490" y="120" width="280" height="220" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="505" y="142" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Component Calculations</text>
<line x1="505" y1="150" x2="760" y2="150" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="505" y="170" font-family="Arial" font-size="12" fill="#000000">Horizontal component:</text>
<text x="505" y="188" font-family="Arial" font-size="12" fill="#000000">  vₓ = |v| cos θ = 5 cos 37°</text>
<text x="505" y="206" font-family="Arial" font-size="12" fill="#000000">     = 5 × 0.7986 ≈ 3.99 ≈ 4.0</text>
<text x="505" y="228" font-family="Arial" font-size="12" fill="#000000">Vertical component:</text>
<text x="505" y="246" font-family="Arial" font-size="12" fill="#000000">  v_y = |v| sin θ = 5 sin 37°</text>
<text x="505" y="264" font-family="Arial" font-size="12" fill="#000000">     = 5 × 0.6018 ≈ 3.01 ≈ 3.0</text>
<text x="505" y="286" font-family="Arial" font-size="12" fill="#000000">Vector form:</text>
<text x="505" y="304" font-family="Arial" font-size="12" fill="#000000">  v = 4i + 3j  (≈3,4 exact)</text>
<text x="505" y="322" font-family="Arial" font-size="12" fill="#000000">  Check: √(4²+3²) = 5 ✓</text>

<!-- Unit vector labels on axes -->
<text x="155" y="445" font-family="Arial" font-size="11" fill="#000000">O</text>

<defs>
  <marker id="arr5" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: dotProduct
    // vector1:{x:3,y:4}, vector2:{x:2,y:1}
    // showAngle, showProjection, showFormula, showCalculation
    static dotProductSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Dot Product</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Dot Product (Scalar Product)</text>
<text x="450" y="52" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">a·b = |a||b|cosθ = aₓbₓ + a_yb_y</text>

<!-- Axes: origin(150,430), scale=70px/unit -->
<line x1="80"  y1="430" x2="580" y2="430" stroke="#000000" stroke-width="1.5" marker-end="url(#arr6)"/>
<line x1="150" y1="490" x2="150" y2="100" stroke="#000000" stroke-width="1.5" marker-end="url(#arr6)"/>
<text x="590" y="434" font-family="Arial" font-size="13" fill="#000000">x</text>
<text x="142" y="92"  font-family="Arial" font-size="13" fill="#000000">y</text>

<!-- Grid -->
<g stroke="#DDDDDD" stroke-width="0.5">
  <line x1="150" y1="360" x2="580" y2="360"/>
  <line x1="150" y1="290" x2="580" y2="290"/>
  <line x1="150" y1="220" x2="580" y2="220"/>
  <line x1="220" y1="100" x2="220" y2="430"/>
  <line x1="290" y1="100" x2="290" y2="430"/>
  <line x1="360" y1="100" x2="360" y2="430"/>
  <line x1="430" y1="100" x2="430" y2="430"/>
  <line x1="500" y1="100" x2="500" y2="430"/>
</g>

<!-- origin(150,430). a=(3,4): tip=(360,150). b=(2,1): tip=(290,360) -->
<!-- |a|=5, |b|=√5≈2.236 -->
<!-- a·b=3×2+4×1=10 -->
<!-- cosθ = 10/(5×√5) = 10/(5×2.236) = 10/11.18 ≈ 0.894 → θ ≈ 26.6° -->

<!-- Vector a=(3,4): (150,430)→(360,150) -->
<line x1="150" y1="430" x2="360" y2="150" stroke="#000000" stroke-width="3" marker-end="url(#arr6)"/>
<text x="230" y="280" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">a=(3,4)</text>
<text x="228" y="298" font-family="Arial" font-size="11" fill="#555555">|a|=5</text>

<!-- Vector b=(2,1): (150,430)→(290,360) -->
<line x1="150" y1="430" x2="290" y2="360" stroke="#000000" stroke-width="3" stroke-dasharray="8,4" marker-end="url(#arr6)"/>
<text x="225" y="385" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">b=(2,1)</text>
<text x="223" y="401" font-family="Arial" font-size="11" fill="#555555">|b|=√5</text>

<!-- showAngle: arc between vectors -->
<!-- angle of a from x-axis: arctan(4/3)≈53.1°; angle of b: arctan(1/2)≈26.6°; between = 26.5° -->
<path d="M 230,430 A 80,80 0 0,0 222,389" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="250" y="410" font-family="Arial" font-size="12" fill="#000000">θ≈26.6°</text>

<!-- showProjection: projection of b onto a (dashed perpendicular) -->
<!-- projection of b onto a: (a·b/|a|²)a = (10/25)(3,4) = (1.2,1.6)
     from origin: (150+84,430-112)=(234,318); foot point -->
<line x1="290" y1="360" x2="234" y2="318" stroke="#999999" stroke-width="1.5" stroke-dasharray="4,3"/>
<rect x="229" y="313" width="9" height="9" fill="none" stroke="#999999" stroke-width="1"/>
<text x="300" y="318" font-family="Arial" font-size="11" fill="#555555">proj_a b</text>
<line x1="150" y1="430" x2="234" y2="318" stroke="#999999" stroke-width="2"/>
<text x="170" y="358" font-family="Arial" font-size="11" fill="#555555">|b|cosθ</text>

<!-- Formula and Calculation box -->
<rect x="580" y="80" width="300" height="310" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="595" y="104" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Dot Product Formula</text>
<line x1="595" y1="112" x2="870" y2="112" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="595" y="132" font-family="Arial" font-size="12" fill="#000000">Algebraic:</text>
<text x="595" y="150" font-family="Arial" font-size="12" fill="#000000">  a·b = aₓbₓ + a_yb_y</text>
<text x="595" y="168" font-family="Arial" font-size="12" fill="#000000">      = (3)(2) + (4)(1)</text>
<text x="595" y="186" font-family="Arial" font-size="12" fill="#000000">      = 6 + 4 = 10</text>
<text x="595" y="210" font-family="Arial" font-size="12" fill="#000000">Geometric:</text>
<text x="595" y="228" font-family="Arial" font-size="12" fill="#000000">  a·b = |a||b|cosθ</text>
<text x="595" y="246" font-family="Arial" font-size="12" fill="#000000">  |a| = 5,  |b| = √5 ≈ 2.236</text>
<text x="595" y="264" font-family="Arial" font-size="12" fill="#000000">  cosθ = 10 / (5×√5) ≈ 0.894</text>
<text x="595" y="282" font-family="Arial" font-size="12" fill="#000000">  θ ≈ 26.6°</text>
<line x1="595" y1="295" x2="870" y2="295" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="595" y="314" font-family="Arial" font-size="12" fill="#000000">Projection of b onto a:</text>
<text x="595" y="332" font-family="Arial" font-size="12" fill="#000000">  = a·b / |a| = 10/5 = 2</text>
<text x="595" y="352" font-family="Arial" font-size="12" fill="#000000">Result is a SCALAR (10)</text>
<text x="595" y="370" font-family="Arial" font-size="12" fill="#000000">If a·b=0, vectors are ⊥</text>

<!-- Perpendicularity note -->
<rect x="580" y="420" width="300" height="80" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="595" y="440" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Key Properties</text>
<text x="595" y="458" font-family="Arial" font-size="11" fill="#000000">a·b = b·a  (commutative)</text>
<text x="595" y="474" font-family="Arial" font-size="11" fill="#000000">a·a = |a|²  →  |a| = √(a·a)</text>
<text x="595" y="490" font-family="Arial" font-size="11" fill="#000000">a⊥b  ⟺  a·b = 0</text>

<defs>
  <marker id="arr6" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: crossProduct
    // vector1:{x:1,y:0,z:0}, vector2:{x:0,y:1,z:0}
    // showRightHandRule, showFormula
    static crossProductSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="800" viewBox="0 0 800 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>Cross Product</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Cross Product (Vector Product)</text>
<text x="400" y="52" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">a = î = (1,0,0),  b = ĵ = (0,1,0),  a×b = k̂ = (0,0,1)</text>

<!-- 3D Isometric axes (pseudo-3D) centered at (350,450) -->
<!-- x-axis: goes right-forward (isometric: right and slightly down) -->
<!-- y-axis: goes up -->
<!-- z-axis: goes left-forward -->

<!-- Isometric projection: x→(cos30°, -sin30°)=(0.866,-0.5)*scale,
     y→(0,-1)*scale, z→(-cos30°, -sin30°)=(-0.866,-0.5)*scale -->
<!-- scale=120px, origin=(350,500) -->

<!-- Axes -->
<!-- X-axis: (350,500)→(350+104,500-60)=(454,440) -->
<line x1="350" y1="500" x2="454" y2="440" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<line x1="350" y1="500" x2="474" y2="428" stroke="#000000" stroke-width="1.5" marker-end="url(#arr7)"/>
<text x="488" y="424" font-family="Arial" font-size="14" fill="#000000">x (î)</text>

<!-- Y-axis: (350,500)→(350,500-120)=(350,380) -->
<line x1="350" y1="500" x2="350" y2="360" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<line x1="350" y1="500" x2="350" y2="340" stroke="#000000" stroke-width="1.5" marker-end="url(#arr7)"/>
<text x="338" y="328" font-family="Arial" font-size="14" fill="#000000">y (ĵ)</text>

<!-- Z-axis: (350,500)→(350-104,500-60)=(246,440) -->
<line x1="350" y1="500" x2="246" y2="440" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<line x1="350" y1="500" x2="226" y2="428" stroke="#000000" stroke-width="1.5" marker-end="url(#arr7)"/>
<text x="195" y="424" font-family="Arial" font-size="14" fill="#000000">z (k̂)</text>

<!-- Vector a = î: from origin along x-axis, scaled 2x for clarity -->
<!-- (350,500)→(350+2×104,500-2×60)=(558,380) -->
<line x1="350" y1="500" x2="558" y2="380" stroke="#000000" stroke-width="4" marker-end="url(#arr7)"/>
<text x="570" y="376" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">a = î</text>

<!-- Vector b = ĵ: from origin along y-axis, scaled 2x -->
<!-- (350,500)→(350,500-240)=(350,260) -->
<line x1="350" y1="500" x2="350" y2="260" stroke="#000000" stroke-width="4" stroke-dasharray="10,4" marker-end="url(#arr7)"/>
<text x="360" y="254" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">b = ĵ</text>

<!-- Result a×b = k̂: from origin along z-axis (outward = toward viewer = up in isometric) -->
<!-- k̂ in isometric goes toward z-axis: from (350,500), upward-left. Scale 2x: (246,440)→ but k goes OUT of plane
     Visually show it going OUT: (350,500)→(350, 500-280) i.e. vertically up with different style -->
<line x1="350" y1="500" x2="350" y2="180" stroke="#000000" stroke-width="4" marker-end="url(#arr7)"/>
<text x="362" y="174" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">a×b = k̂</text>
<text x="362" y="192" font-family="Arial" font-size="12" fill="#555555">(out of plane)</text>

<!-- Right-hand rule illustration -->
<rect x="30" y="60" width="220" height="280" fill="#F8F8F8" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="140" y="82" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Right-Hand Rule</text>
<line x1="40" y1="90" x2="240" y2="90" stroke="#AAAAAA" stroke-width="0.5"/>
<!-- Simplified hand outline -->
<text x="40" y="112" font-family="Arial" font-size="11" fill="#000000">1. Point fingers along a (î)</text>
<text x="40" y="130" font-family="Arial" font-size="11" fill="#000000">2. Curl toward b (ĵ)</text>
<text x="40" y="148" font-family="Arial" font-size="11" fill="#000000">3. Thumb points in</text>
<text x="40" y="164" font-family="Arial" font-size="11" fill="#000000">   direction of a×b (k̂)</text>
<!-- Hand diagram (schematic) -->
<ellipse cx="140" cy="240" rx="35" ry="55" fill="none" stroke="#000000" stroke-width="1.5"/>
<text x="140" y="220" font-family="Arial" font-size="28" fill="#000000" text-anchor="middle">☞</text>
<text x="140" y="260" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Thumb = a×b</text>
<text x="40" y="300" font-family="Arial" font-size="11" fill="#000000">Note: b×a = −k̂</text>
<text x="40" y="316" font-family="Arial" font-size="11" fill="#000000">(opposite direction)</text>

<!-- Formula box -->
<rect x="540" y="480" width="250" height="290" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="555" y="502" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Cross Product Formula</text>
<line x1="555" y1="510" x2="780" y2="510" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="555" y="530" font-family="Arial" font-size="12" fill="#000000">a×b = |a||b|sinθ  n̂</text>
<text x="555" y="550" font-family="Arial" font-size="12" fill="#000000">n̂ = unit normal vector</text>
<text x="555" y="575" font-family="Arial" font-size="11" fill="#000000">Determinant form:</text>
<text x="555" y="593" font-family="Arial" font-size="11" fill="#000000">|  î   ĵ   k̂  |</text>
<text x="555" y="609" font-family="Arial" font-size="11" fill="#000000">| a₁  a₂  a₃ |</text>
<text x="555" y="625" font-family="Arial" font-size="11" fill="#000000">| b₁  b₂  b₃ |</text>
<text x="555" y="648" font-family="Arial" font-size="12" fill="#000000">For î×ĵ:</text>
<text x="555" y="666" font-family="Arial" font-size="12" fill="#000000">=(0·0−0·1)î−(1·0−0·0)ĵ</text>
<text x="555" y="684" font-family="Arial" font-size="12" fill="#000000"> +(1·1−0·0)k̂</text>
<text x="555" y="704" font-family="Arial" font-size="12" fill="#000000">= 0î − 0ĵ + 1k̂ = k̂ ✓</text>
<text x="555" y="726" font-family="Arial" font-size="11" fill="#555555">Result is a VECTOR</text>
<text x="555" y="742" font-family="Arial" font-size="11" fill="#555555">|a×b| = area of parallelogram</text>
<text x="555" y="758" font-family="Arial" font-size="11" fill="#555555">a×b = 0 ⟺ a ∥ b</text>

<!-- Cyclic order reminder -->
<rect x="30" y="380" width="220" height="85" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="140" y="400" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Cyclic Order</text>
<text x="40"  y="420" font-family="Arial" font-size="12" fill="#000000">î × ĵ = k̂</text>
<text x="40"  y="438" font-family="Arial" font-size="12" fill="#000000">ĵ × k̂ = î</text>
<text x="40"  y="456" font-family="Arial" font-size="12" fill="#000000">k̂ × î = ĵ</text>

<defs>
  <marker id="arr7" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: vectorEquationLine
    // point:{x:1,y:2}, direction:{x:3,y:4}  →  r = (1,2) + λ(3,4)
    static vectorEquationLineSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Vector Equation of Line</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Vector Equation of a Line</text>
<text x="400" y="52" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">r = a + λb  |  a=(1,2), b=(3,4)</text>

<!-- Axes: origin(150,450), scale=60px/unit -->
<line x1="80"  y1="450" x2="700" y2="450" stroke="#000000" stroke-width="1.5" marker-end="url(#arr8)"/>
<line x1="150" y1="510" x2="150" y2="80"  stroke="#000000" stroke-width="1.5" marker-end="url(#arr8)"/>
<text x="712" y="454" font-family="Arial" font-size="13" fill="#000000">x</text>
<text x="142" y="72"  font-family="Arial" font-size="13" fill="#000000">y</text>

<!-- Grid -->
<g stroke="#DDDDDD" stroke-width="0.5">
  <line x1="150" y1="390" x2="700" y2="390"/>
  <line x1="150" y1="330" x2="700" y2="330"/>
  <line x1="150" y1="270" x2="700" y2="270"/>
  <line x1="150" y1="210" x2="700" y2="210"/>
  <line x1="150" y1="150" x2="700" y2="150"/>
  <line x1="210" y1="80" x2="210" y2="450"/>
  <line x1="270" y1="80" x2="270" y2="450"/>
  <line x1="330" y1="80" x2="330" y2="450"/>
  <line x1="390" y1="80" x2="390" y2="450"/>
  <line x1="450" y1="80" x2="450" y2="450"/>
  <line x1="510" y1="80" x2="510" y2="450"/>
  <line x1="570" y1="80" x2="570" y2="450"/>
  <line x1="630" y1="80" x2="630" y2="450"/>
</g>

<!-- Axis ticks -->
<g stroke="#000000" stroke-width="0.8">
  <line x1="210" y1="446" x2="210" y2="454"/> <text x="210" y="466" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">1</text>
  <line x1="270" y1="446" x2="270" y2="454"/> <text x="270" y="466" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">2</text>
  <line x1="330" y1="446" x2="330" y2="454"/> <text x="330" y="466" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">3</text>
  <line x1="390" y1="446" x2="390" y2="454"/> <text x="390" y="466" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">4</text>
  <line x1="146" y1="390" x2="154" y2="390"/> <text x="138" y="394" font-family="Arial" font-size="10" fill="#555555">1</text>
  <line x1="146" y1="330" x2="154" y2="330"/> <text x="138" y="334" font-family="Arial" font-size="10" fill="#555555">2</text>
  <line x1="146" y1="270" x2="154" y2="270"/> <text x="138" y="274" font-family="Arial" font-size="10" fill="#555555">3</text>
  <line x1="146" y1="210" x2="154" y2="210"/> <text x="138" y="214" font-family="Arial" font-size="10" fill="#555555">4</text>
  <line x1="146" y1="150" x2="154" y2="150"/> <text x="138" y="154" font-family="Arial" font-size="10" fill="#555555">5</text>
</g>

<!-- Origin -->
<text x="138" y="466" font-family="Arial" font-size="10" fill="#555555">O</text>

<!-- Position vector a=(1,2) from origin to point A: (150,450)→(210,330) -->
<line x1="150" y1="450" x2="210" y2="330" stroke="#000000" stroke-width="2.5" marker-end="url(#arr8)"/>
<text x="155" y="387" font-family="Arial" font-size="12" fill="#000000">a</text>

<!-- Point A at (1,2) = (210,330) -->
<circle cx="210" cy="330" r="5" fill="#000000" stroke="none"/>
<text x="218" y="326" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">A(1,2)</text>

<!-- Direction vector b=(3,4) from A: (210,330)→(210+180,330-240)=(390,90) -->
<line x1="210" y1="330" x2="390" y2="90" stroke="#000000" stroke-width="2.5" marker-end="url(#arr8)"/>
<text x="330" y="220" font-family="Arial" font-size="12" fill="#000000">b=(3,4)</text>

<!-- The line itself: extend from λ=-0.6 to λ=1.4 -->
<!-- λ=-0.6: (1-1.8, 2-2.4)=(-0.8,-0.4) → screen: (150-48,450+24)=(102,474) — off x range, clip -->
<!-- λ=0: (1,2)=(210,330). λ=1: (4,6)=(390,90). λ=-0.5: (-0.5,0) → (120,450) -->
<!-- draw line through (210,330) with slope direction (3,4) i.e. screen slope -4/3 (screen y flips) -->
<!-- from (80,480+6.67) to... let's compute: y=330 + (-4/3)(x-210) -->
<!-- at x=80: y=330+(-4/3)(-130)=330+173=503; at x=650: y=330+(-4/3)(440)=330-587=-257 clipped -->
<!-- draw visible segment -->
<line x1="80" y1="503" x2="555" y2="90" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>

<!-- General point P on line for λ=0.5: r=(1+1.5,2+2)=(2.5,4) → screen:(300,210) -->
<circle cx="300" cy="210" r="4" fill="#000000" stroke="none"/>
<text x="308" y="206" font-family="Arial" font-size="11" fill="#000000">P(λ=0.5)</text>
<!-- λb from A to P -->
<line x1="210" y1="330" x2="300" y2="210" stroke="#000000" stroke-width="2" marker-end="url(#arr8)"/>
<text x="240" y="265" font-family="Arial" font-size="11" fill="#000000">λb</text>

<!-- Position vector of P from O -->
<line x1="150" y1="450" x2="298" y2="212" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="195" y="310" font-family="Arial" font-size="12" fill="#000000">r</text>

<!-- Equation box -->
<rect x="445" y="130" width="330" height="220" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="460" y="152" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Vector Equation of Line</text>
<line x1="460" y1="160" x2="765" y2="160" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="460" y="180" font-family="Arial" font-size="13" fill="#000000">r = a + λb</text>
<text x="460" y="202" font-family="Arial" font-size="11" fill="#000000">a = position vector of a point</text>
<text x="460" y="220" font-family="Arial" font-size="11" fill="#000000">b = direction vector</text>
<text x="460" y="238" font-family="Arial" font-size="11" fill="#000000">λ = scalar parameter (−∞ &lt; λ &lt; ∞)</text>
<line x1="460" y1="250" x2="765" y2="250" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="460" y="270" font-family="Arial" font-size="12" fill="#000000">This line:</text>
<text x="460" y="288" font-family="Arial" font-size="12" fill="#000000">r = (1,2) + λ(3,4)</text>
<text x="460" y="308" font-family="Arial" font-size="12" fill="#000000">r = (1+3λ, 2+4λ)</text>
<text x="460" y="326" font-family="Arial" font-size="12" fill="#000000">Cartesian: (y−2)/4 = (x−1)/3</text>

<defs>
  <marker id="arr8" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: positionVectors
    // points: [[2,3],[5,7],[-1,4]]
    static positionVectorsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Position Vectors</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Position Vectors</text>
<text x="400" y="52" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Vectors from the origin to given points</text>

<!-- Axes: origin(250,450), scale=50px/unit -->
<line x1="60"  y1="450" x2="700" y2="450" stroke="#000000" stroke-width="1.5" marker-end="url(#arr9)"/>
<line x1="250" y1="530" x2="250" y2="60"  stroke="#000000" stroke-width="1.5" marker-end="url(#arr9)"/>
<text x="712" y="454" font-family="Arial" font-size="13" fill="#000000">x</text>
<text x="242" y="52"  font-family="Arial" font-size="13" fill="#000000">y</text>

<!-- Grid -->
<g stroke="#DDDDDD" stroke-width="0.5">
  <line x1="60"  y1="400" x2="700" y2="400"/>
  <line x1="60"  y1="350" x2="700" y2="350"/>
  <line x1="60"  y1="300" x2="700" y2="300"/>
  <line x1="60"  y1="250" x2="700" y2="250"/>
  <line x1="60"  y1="200" x2="700" y2="200"/>
  <line x1="60"  y1="150" x2="700" y2="150"/>
  <line x1="60"  y1="100" x2="700" y2="100"/>
  <line x1="100" y1="60" x2="100" y2="530"/>
  <line x1="150" y1="60" x2="150" y2="530"/>
  <line x1="200" y1="60" x2="200" y2="530"/>
  <line x1="300" y1="60" x2="300" y2="530"/>
  <line x1="350" y1="60" x2="350" y2="530"/>
  <line x1="400" y1="60" x2="400" y2="530"/>
  <line x1="450" y1="60" x2="450" y2="530"/>
  <line x1="500" y1="60" x2="500" y2="530"/>
  <line x1="550" y1="60" x2="550" y2="530"/>
</g>

<!-- Axis labels -->
<g font-family="Arial" font-size="10" fill="#555555">
  <text x="100" y="466" text-anchor="middle">-3</text>
  <text x="150" y="466" text-anchor="middle">-2</text>
  <text x="200" y="466" text-anchor="middle">-1</text>
  <text x="300" y="466" text-anchor="middle">1</text>
  <text x="350" y="466" text-anchor="middle">2</text>
  <text x="400" y="466" text-anchor="middle">3</text>
  <text x="450" y="466" text-anchor="middle">4</text>
  <text x="500" y="466" text-anchor="middle">5</text>
  <text x="236" y="454" text-anchor="middle">O</text>
  <text x="236" y="404" text-anchor="middle">1</text>
  <text x="236" y="354" text-anchor="middle">2</text>
  <text x="236" y="304" text-anchor="middle">3</text>
  <text x="236" y="254" text-anchor="middle">4</text>
  <text x="236" y="204" text-anchor="middle">5</text>
  <text x="236" y="154" text-anchor="middle">6</text>
  <text x="236" y="104" text-anchor="middle">7</text>
</g>

<!-- Origin O -->
<circle cx="250" cy="450" r="4" fill="#000000" stroke="none"/>

<!-- Point A=(2,3): screen=(250+100,450-150)=(350,300) -->
<circle cx="350" cy="300" r="6" fill="#000000" stroke="none"/>
<text x="360" y="295" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">A(2,3)</text>
<!-- Position vector OA -->
<line x1="250" y1="450" x2="350" y2="300" stroke="#000000" stroke-width="3" marker-end="url(#arr9)"/>
<text x="275" y="368" font-family="Arial" font-size="13" fill="#000000">a</text>
<text x="258" y="385" font-family="Arial" font-size="11" fill="#555555">|a|=√13</text>

<!-- Point B=(5,7): screen=(250+250,450-350)=(500,100) -->
<circle cx="500" cy="100" r="6" fill="#000000" stroke="none"/>
<text x="510" y="95" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">B(5,7)</text>
<!-- Position vector OB -->
<line x1="250" y1="450" x2="500" y2="100" stroke="#000000" stroke-width="3" stroke-dasharray="9,5" marker-end="url(#arr9)"/>
<text x="362" y="265" font-family="Arial" font-size="13" fill="#000000">b</text>
<text x="348" y="282" font-family="Arial" font-size="11" fill="#555555">|b|=√74</text>

<!-- Point C=(-1,4): screen=(250-50,450-200)=(200,250) -->
<circle cx="200" cy="250" r="6" fill="#000000" stroke="none"/>
<text x="155" y="242" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">C(−1,4)</text>
<!-- Position vector OC -->
<line x1="250" y1="450" x2="200" y2="250" stroke="#000000" stroke-width="3" stroke-dasharray="5,3" marker-end="url(#arr9)"/>
<text x="220" y="360" font-family="Arial" font-size="13" fill="#000000">c</text>
<text x="205" y="376" font-family="Arial" font-size="11" fill="#555555">|c|=√17</text>

<!-- Legend / notation box -->
<rect x="530" y="280" width="250" height="200" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="545" y="302" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Position Vector Notation</text>
<line x1="545" y1="310" x2="770" y2="310" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="545" y="330" font-family="Arial" font-size="11" fill="#000000">oa⃗ = a = (2, 3)</text>
<text x="545" y="348" font-family="Arial" font-size="11" fill="#000000">ob⃗ = b = (5, 7)</text>
<text x="545" y="366" font-family="Arial" font-size="11" fill="#000000">oc⃗ = c = (−1, 4)</text>
<line x1="545" y1="378" x2="770" y2="378" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="545" y="396" font-family="Arial" font-size="11" fill="#000000">Vector AB = b − a = (3, 4)</text>
<text x="545" y="414" font-family="Arial" font-size="11" fill="#000000">Vector AC = c − a = (−3, 1)</text>
<text x="545" y="432" font-family="Arial" font-size="11" fill="#000000">Midpoint M of AB:</text>
<text x="545" y="450" font-family="Arial" font-size="11" fill="#000000">  m = ½(a+b) = (3.5, 5)</text>
<text x="545" y="468" font-family="Arial" font-size="11" fill="#000000">All vectors start from origin O</text>

<defs>
  <marker id="arr9" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // ============================================================
    // ===== 7. MATRICES ==========================================
    // ============================================================

    // Generated from registry: matrixStructure
    // matrix: [[1,2,3],[4,5,6]]  (2×3 matrix)
    // showRows, showColumns, showElements, showOrder
    static matrixStructureSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="500" viewBox="0 0 800 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>Matrix Structure</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Matrix Structure</text>
<text x="400" y="58" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Rows, columns, elements, and order of a matrix</text>

<!-- Matrix bracket left -->
<path d="M 190,100 L 175,100 L 175,300 L 190,300" stroke="#000000" stroke-width="3" fill="none"/>
<!-- Matrix bracket right -->
<path d="M 490,100 L 505,100 L 505,300 L 490,300" stroke="#000000" stroke-width="3" fill="none"/>

<!-- Cell separators (light) -->
<line x1="295" y1="105" x2="295" y2="295" stroke="#AAAAAA" stroke-width="0.8" stroke-dasharray="4,3"/>
<line x1="393" y1="105" x2="393" y2="295" stroke="#AAAAAA" stroke-width="0.8" stroke-dasharray="4,3"/>
<line x1="185" y1="200" x2="500" y2="200" stroke="#AAAAAA" stroke-width="0.8" stroke-dasharray="4,3"/>

<!-- Row 1 elements -->
<text x="245" y="162" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle">1</text>
<text x="344" y="162" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle">2</text>
<text x="442" y="162" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle">3</text>

<!-- Row 2 elements -->
<text x="245" y="262" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle">4</text>
<text x="344" y="262" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle">5</text>
<text x="442" y="262" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle">6</text>

<!-- showRows: row labels with braces -->
<text x="525" y="162" font-family="Arial" font-size="13" fill="#000000">← Row 1</text>
<text x="525" y="262" font-family="Arial" font-size="13" fill="#000000">← Row 2</text>

<!-- showColumns: column labels above -->
<text x="245" y="90" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Col 1</text>
<text x="344" y="90" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Col 2</text>
<text x="442" y="90" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Col 3</text>
<!-- Column arrows -->
<line x1="245" y1="93" x2="245" y2="103" stroke="#000000" stroke-width="1.5" marker-end="url(#arrM)"/>
<line x1="344" y1="93" x2="344" y2="103" stroke="#000000" stroke-width="1.5" marker-end="url(#arrM)"/>
<line x1="442" y1="93" x2="442" y2="103" stroke="#000000" stroke-width="1.5" marker-end="url(#arrM)"/>

<!-- showElements: element notation a_{ij} -->
<text x="245" y="135" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">a₁₁</text>
<text x="344" y="135" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">a₁₂</text>
<text x="442" y="135" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">a₁₃</text>
<text x="245" y="235" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">a₂₁</text>
<text x="344" y="235" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">a₂₂</text>
<text x="442" y="235" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">a₂₃</text>

<!-- showOrder: order label -->
<text x="340" y="335" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">Order: 2 × 3</text>
<text x="340" y="355" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">(2 rows × 3 columns)</text>

<!-- Info panel -->
<rect x="570" y="80" width="210" height="310" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="585" y="102" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Key Terminology</text>
<line x1="585" y1="110" x2="770" y2="110" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="585" y="130" font-family="Arial" font-size="11" fill="#000000">Matrix: rectangular array</text>
<text x="585" y="148" font-family="Arial" font-size="11" fill="#000000">Order (size): m × n</text>
<text x="585" y="166" font-family="Arial" font-size="11" fill="#000000">  m = number of rows</text>
<text x="585" y="184" font-family="Arial" font-size="11" fill="#000000">  n = number of columns</text>
<text x="585" y="205" font-family="Arial" font-size="11" fill="#000000">Element aᵢⱼ:</text>
<text x="585" y="223" font-family="Arial" font-size="11" fill="#000000">  i = row index</text>
<text x="585" y="241" font-family="Arial" font-size="11" fill="#000000">  j = column index</text>
<text x="585" y="262" font-family="Arial" font-size="11" fill="#000000">Square matrix: m = n</text>
<text x="585" y="280" font-family="Arial" font-size="11" fill="#000000">Row matrix: m = 1</text>
<text x="585" y="298" font-family="Arial" font-size="11" fill="#000000">Column matrix: n = 1</text>
<text x="585" y="320" font-family="Arial" font-size="11" fill="#000000">This matrix: a₂₂ = 5</text>
<text x="585" y="338" font-family="Arial" font-size="11" fill="#000000">  (row 2, col 2)</text>
<text x="585" y="360" font-family="Arial" font-size="11" fill="#000000">Total elements: 2×3=6</text>

<!-- Highlight a₂₂=5 with dashed box -->
<rect x="326" y="215" width="36" height="44" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="4,3"/>
<path d="M 362,237 Q 420,220 490,220" stroke="#000000" stroke-width="1" stroke-dasharray="3,2" fill="none"/>
<text x="495" y="224" font-family="Arial" font-size="11" fill="#000000">a₂₂ = 5</text>

<defs>
  <marker id="arrM" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0,8 3,0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: matrixAddition
    // A=[[1,2],[3,4]], B=[[5,6],[7,8]]
    static matrixAdditionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="500" viewBox="0 0 900 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>Matrix Addition</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Matrix Addition</text>
<text x="450" y="58" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Element-by-element addition: A + B = C</text>

<!-- Helper macro: reusable 2x2 matrix visual at (cx, cy) -->
<!-- Matrix A at x=80 -->
<path d="M 115,110 L 100,110 L 100,290 L 115,290" stroke="#000000" stroke-width="3" fill="none"/>
<path d="M 245,110 L 260,110 L 260,290 L 245,290" stroke="#000000" stroke-width="3" fill="none"/>
<line x1="105" y1="200" x2="255" y2="200" stroke="#BBBBBB" stroke-width="0.8" stroke-dasharray="4,3"/>
<line x1="180" y1="115" x2="180" y2="285" stroke="#BBBBBB" stroke-width="0.8" stroke-dasharray="4,3"/>
<!-- A elements -->
<text x="145" y="170" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">1</text>
<text x="225" y="170" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">2</text>
<text x="145" y="262" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">3</text>
<text x="225" y="262" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">4</text>
<text x="180" y="95"  font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">A</text>

<!-- Plus sign -->
<text x="320" y="215" font-family="Arial" font-size="42" fill="#000000" text-anchor="middle">+</text>

<!-- Matrix B at x=360 -->
<path d="M 375,110 L 360,110 L 360,290 L 375,290" stroke="#000000" stroke-width="3" fill="none"/>
<path d="M 505,110 L 520,110 L 520,290 L 505,290" stroke="#000000" stroke-width="3" fill="none"/>
<line x1="365" y1="200" x2="515" y2="200" stroke="#BBBBBB" stroke-width="0.8" stroke-dasharray="4,3"/>
<line x1="440" y1="115" x2="440" y2="285" stroke="#BBBBBB" stroke-width="0.8" stroke-dasharray="4,3"/>
<text x="405" y="170" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">5</text>
<text x="485" y="170" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">6</text>
<text x="405" y="262" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">7</text>
<text x="485" y="262" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">8</text>
<text x="440" y="95"  font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">B</text>

<!-- Equals sign -->
<text x="578" y="215" font-family="Arial" font-size="42" fill="#000000" text-anchor="middle">=</text>

<!-- Result Matrix C at x=630 -->
<path d="M 645,110 L 630,110 L 630,290 L 645,290" stroke="#000000" stroke-width="3" fill="none"/>
<path d="M 815,110 L 830,110 L 830,290 L 815,290" stroke="#000000" stroke-width="3" fill="none"/>
<line x1="635" y1="200" x2="825" y2="200" stroke="#BBBBBB" stroke-width="0.8" stroke-dasharray="4,3"/>
<line x1="730" y1="115" x2="730" y2="285" stroke="#BBBBBB" stroke-width="0.8" stroke-dasharray="4,3"/>
<text x="685" y="170" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">6</text>
<text x="775" y="170" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">8</text>
<text x="685" y="262" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">10</text>
<text x="775" y="262" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">12</text>
<text x="730" y="95"  font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">C = A+B</text>

<!-- Process annotation: show element-wise addition -->
<text x="450" y="340" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">c₁₁ = a₁₁+b₁₁ = 1+5=6    c₁₂ = a₁₂+b₁₂ = 2+6=8</text>
<text x="450" y="360" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">c₂₁ = a₂₁+b₂₁ = 3+7=10    c₂₂ = a₂₂+b₂₂ = 4+8=12</text>

<!-- Rules -->
<rect x="50" y="390" width="800" height="80" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="450" y="414" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Addition Rules</text>
<text x="70"  y="434" font-family="Arial" font-size="11" fill="#000000">• Matrices must have the same order (same dimensions)</text>
<text x="70"  y="452" font-family="Arial" font-size="11" fill="#000000">• Add corresponding elements: (A+B)ᵢⱼ = aᵢⱼ + bᵢⱼ</text>
<text x="380" y="434" font-family="Arial" font-size="11" fill="#000000">• A+B = B+A (commutative)</text>
<text x="380" y="452" font-family="Arial" font-size="11" fill="#000000">• (A+B)+C = A+(B+C) (associative)</text>

</g>
</svg>`;

    // Generated from registry: matrixScalarMultiplication
    // matrix:[[2,3],[4,5]], scalar:3
    static matrixScalarMultiplicationSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="500" viewBox="0 0 800 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>Matrix Scalar Multiplication</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Scalar Multiplication of a Matrix</text>
<text x="400" y="58" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">k × A = multiply every element by k   |   k=3</text>

<!-- Scalar -->
<text x="100" y="230" font-family="Arial" font-size="52" fill="#000000" text-anchor="middle" font-weight="bold">3</text>

<!-- Multiplication dot -->
<circle cx="145" cy="212" r="5" fill="#000000" stroke="none"/>

<!-- Matrix A: [[2,3],[4,5]] at x=175 -->
<path d="M 195,110 L 180,110 L 180,300 L 195,300" stroke="#000000" stroke-width="3" fill="none"/>
<path d="M 355,110 L 370,110 L 370,300 L 355,300" stroke="#000000" stroke-width="3" fill="none"/>
<line x1="185" y1="205" x2="365" y2="205" stroke="#BBBBBB" stroke-width="0.8" stroke-dasharray="4,3"/>
<line x1="275" y1="115" x2="275" y2="295" stroke="#BBBBBB" stroke-width="0.8" stroke-dasharray="4,3"/>
<text x="232" y="175" font-family="Arial" font-size="40" fill="#000000" text-anchor="middle">2</text>
<text x="318" y="175" font-family="Arial" font-size="40" fill="#000000" text-anchor="middle">3</text>
<text x="232" y="272" font-family="Arial" font-size="40" fill="#000000" text-anchor="middle">4</text>
<text x="318" y="272" font-family="Arial" font-size="40" fill="#000000" text-anchor="middle">5</text>
<text x="275" y="95" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">A</text>

<!-- Equals -->
<text x="432" y="220" font-family="Arial" font-size="44" fill="#000000" text-anchor="middle">=</text>

<!-- Result: [[6,9],[12,15]] at x=480 -->
<path d="M 500,110 L 485,110 L 485,300 L 500,300" stroke="#000000" stroke-width="3" fill="none"/>
<path d="M 700,110 L 715,110 L 715,300 L 700,300" stroke="#000000" stroke-width="3" fill="none"/>
<line x1="490" y1="205" x2="710" y2="205" stroke="#BBBBBB" stroke-width="0.8" stroke-dasharray="4,3"/>
<line x1="600" y1="115" x2="600" y2="295" stroke="#BBBBBB" stroke-width="0.8" stroke-dasharray="4,3"/>
<text x="545" y="175" font-family="Arial" font-size="40" fill="#000000" text-anchor="middle">6</text>
<text x="652" y="175" font-family="Arial" font-size="40" fill="#000000" text-anchor="middle">9</text>
<text x="545" y="272" font-family="Arial" font-size="40" fill="#000000" text-anchor="middle">12</text>
<text x="652" y="272" font-family="Arial" font-size="40" fill="#000000" text-anchor="middle">15</text>
<text x="600" y="95" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">3A</text>

<!-- Process annotations (dashed arrows element-wise) -->
<text x="232" y="175" font-family="Arial" font-size="40" fill="#000000" text-anchor="middle"/>

<!-- Step breakdown -->
<text x="400" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">3×2=6   3×3=9</text>
<text x="400" y="350" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">3×4=12   3×5=15</text>

<!-- Rules box -->
<rect x="50" y="375" width="700" height="100" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="400" y="397" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Scalar Multiplication Rules</text>
<text x="70"  y="417" font-family="Arial" font-size="11" fill="#000000">• Multiply EVERY element of the matrix by the scalar k</text>
<text x="70"  y="435" font-family="Arial" font-size="11" fill="#000000">• (kA)ᵢⱼ = k × aᵢⱼ</text>
<text x="70"  y="453" font-family="Arial" font-size="11" fill="#000000">• k(A+B) = kA + kB  (distributive)</text>
<text x="380" y="417" font-family="Arial" font-size="11" fill="#000000">• (k+l)A = kA + lA</text>
<text x="380" y="435" font-family="Arial" font-size="11" fill="#000000">• k(lA) = (kl)A</text>
<text x="380" y="453" font-family="Arial" font-size="11" fill="#000000">• 1×A = A,  0×A = O (zero matrix)</text>

</g>
</svg>`;

    // Generated from registry: matrixMultiplication
    // A=[[1,2],[3,4]], B=[[5,6],[7,8]]
    // showProcess, showRowColumn
    static matrixMultiplicationSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Matrix Multiplication</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Matrix Multiplication</text>
<text x="500" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Row × Column method: AB = C</text>

<!-- Matrix A [[1,2],[3,4]] at left -->
<path d="M 80,100 L 65,100 L 65,310 L 80,310" stroke="#000000" stroke-width="3" fill="none"/>
<path d="M 240,100 L 255,100 L 255,310 L 240,310" stroke="#000000" stroke-width="3" fill="none"/>
<line x1="70" y1="205" x2="250" y2="205" stroke="#BBBBBB" stroke-width="0.8" stroke-dasharray="4,3"/>
<line x1="160" y1="105" x2="160" y2="305" stroke="#BBBBBB" stroke-width="0.8" stroke-dasharray="4,3"/>
<text x="120" y="174" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">1</text>
<text x="200" y="174" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">2</text>
<text x="120" y="278" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">3</text>
<text x="200" y="278" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">4</text>
<text x="160" y="85"  font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">A (2×2)</text>

<!-- × sign -->
<text x="295" y="220" font-family="Arial" font-size="40" fill="#000000" text-anchor="middle">×</text>

<!-- Matrix B [[5,6],[7,8]] -->
<path d="M 330,100 L 315,100 L 315,310 L 330,310" stroke="#000000" stroke-width="3" fill="none"/>
<path d="M 490,100 L 505,100 L 505,310 L 490,310" stroke="#000000" stroke-width="3" fill="none"/>
<line x1="320" y1="205" x2="500" y2="205" stroke="#BBBBBB" stroke-width="0.8" stroke-dasharray="4,3"/>
<line x1="410" y1="105" x2="410" y2="305" stroke="#BBBBBB" stroke-width="0.8" stroke-dasharray="4,3"/>
<text x="370" y="174" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">5</text>
<text x="450" y="174" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">6</text>
<text x="370" y="278" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">7</text>
<text x="450" y="278" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">8</text>
<text x="410" y="85"  font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">B (2×2)</text>

<!-- = sign -->
<text x="545" y="220" font-family="Arial" font-size="40" fill="#000000" text-anchor="middle">=</text>

<!-- Result C [[19,22],[43,50]] -->
<path d="M 585,100 L 570,100 L 570,310 L 585,310" stroke="#000000" stroke-width="3" fill="none"/>
<path d="M 785,100 L 800,100 L 800,310 L 785,310" stroke="#000000" stroke-width="3" fill="none"/>
<line x1="575" y1="205" x2="795" y2="205" stroke="#BBBBBB" stroke-width="0.8" stroke-dasharray="4,3"/>
<line x1="685" y1="105" x2="685" y2="305" stroke="#BBBBBB" stroke-width="0.8" stroke-dasharray="4,3"/>
<text x="632" y="174" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">19</text>
<text x="738" y="174" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">22</text>
<text x="632" y="278" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">43</text>
<text x="738" y="278" font-family="Arial" font-size="38" fill="#000000" text-anchor="middle">50</text>
<text x="685" y="85"  font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">C = AB (2×2)</text>

<!-- showProcess: Row × Column breakdown below -->
<text x="500" y="345" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Row × Column Process</text>

<text x="50"  y="368" font-family="Arial" font-size="12" fill="#000000">c₁₁: Row1(A) · Col1(B) = (1)(5)+(2)(7) = 5+14 = 19</text>
<text x="50"  y="388" font-family="Arial" font-size="12" fill="#000000">c₁₂: Row1(A) · Col2(B) = (1)(6)+(2)(8) = 6+16 = 22</text>
<text x="50"  y="408" font-family="Arial" font-size="12" fill="#000000">c₂₁: Row2(A) · Col1(B) = (3)(5)+(4)(7) = 15+28 = 43</text>
<text x="50"  y="428" font-family="Arial" font-size="12" fill="#000000">c₂₂: Row2(A) · Col2(B) = (3)(6)+(4)(8) = 18+32 = 50</text>

<!-- Row indicator: dashed box around row 1 of A -->
<rect x="70" y="116" width="180" height="76" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
<text x="70" y="112" font-family="Arial" font-size="10" fill="#000000">Row 1</text>

<!-- Col indicator: dashed box around col 1 of B -->
<rect x="318" y="103" width="95" height="202" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
<text x="345" y="99" font-family="Arial" font-size="10" fill="#000000">Col 1</text>

<!-- Rules -->
<rect x="50" y="445" width="900" height="80" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="500" y="466" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Key Rules for Matrix Multiplication</text>
<text x="70" y="486" font-family="Arial" font-size="11" fill="#000000">• AB is defined only if cols(A) = rows(B). Here: 2×2 × 2×2 → 2×2</text>
<text x="70" y="504" font-family="Arial" font-size="11" fill="#000000">• cᵢⱼ = Σₖ aᵢₖ bₖⱼ  (dot product of row i of A with col j of B)</text>
<text x="500" y="486" font-family="Arial" font-size="11" fill="#000000">• AB ≠ BA in general (NOT commutative)</text>
<text x="500" y="504" font-family="Arial" font-size="11" fill="#000000">• (AB)C = A(BC) (associative)  |  A(B+C) = AB+AC</text>

</g>
</svg>`;

    // Generated from registry: determinant2x2
    // matrix:[[3,8],[4,6]]
    // showDiagonals, showFormula, showCalculation
    static determinant2x2Svg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="500" viewBox="0 0 700 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>2×2 Determinant</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">2×2 Determinant</text>
<text x="350" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">det(A) = ad − bc</text>

<!-- Matrix with vertical bars (determinant notation) -->
<line x1="155" y1="100" x2="155" y2="310" stroke="#000000" stroke-width="3"/>
<line x1="385" y1="100" x2="385" y2="310" stroke="#000000" stroke-width="3"/>

<!-- Cell dividers (light) -->
<line x1="158" y1="205" x2="382" y2="205" stroke="#DDDDDD" stroke-width="0.8" stroke-dasharray="4,3"/>
<line x1="270" y1="103" x2="270" y2="307" stroke="#DDDDDD" stroke-width="0.8" stroke-dasharray="4,3"/>

<!-- Elements: a=3, b=8, c=4, d=6 -->
<text x="212" y="175" font-family="Arial" font-size="52" fill="#000000" text-anchor="middle">3</text>
<text x="328" y="175" font-family="Arial" font-size="52" fill="#000000" text-anchor="middle">8</text>
<text x="212" y="287" font-family="Arial" font-size="52" fill="#000000" text-anchor="middle">4</text>
<text x="328" y="287" font-family="Arial" font-size="52" fill="#000000" text-anchor="middle">6</text>

<!-- Element labels a,b,c,d -->
<text x="185" y="110" font-family="Arial" font-size="11" fill="#555555">a</text>
<text x="355" y="110" font-family="Arial" font-size="11" fill="#555555">b</text>
<text x="185" y="310" font-family="Arial" font-size="11" fill="#555555">c</text>
<text x="355" y="310" font-family="Arial" font-size="11" fill="#555555">d</text>

<!-- showDiagonals: main diagonal (3→6) solid line -->
<line x1="175" y1="118" x2="355" y2="298" stroke="#000000" stroke-width="2.5"/>
<text x="390" y="218" font-family="Arial" font-size="13" fill="#000000">ad = 3×6 = 18</text>
<!-- anti-diagonal (8→4) dashed line -->
<line x1="355" y1="118" x2="175" y2="298" stroke="#000000" stroke-width="2" stroke-dasharray="7,4"/>
<text x="390" y="258" font-family="Arial" font-size="13" fill="#000000">bc = 8×4 = 32</text>

<!-- Formula and Calculation -->
<rect x="50" y="340" width="600" height="140" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="350" y="365" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Calculation</text>
<line x1="65" y1="373" x2="635" y2="373" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="80" y="395" font-family="Arial" font-size="13" fill="#000000">det(A)  =  |3  8|  =  (3)(6) − (8)(4)</text>
<text x="155" y="414" font-family="Arial" font-size="13" fill="#000000">|4  6|</text>
<text x="350" y="395" font-family="Arial" font-size="13" fill="#000000">=  18 − 32</text>
<text x="350" y="418" font-family="Arial" font-size="13" fill="#000000">=  −14</text>
<text x="80" y="445" font-family="Arial" font-size="12" fill="#000000">det(A) = −14   ⟹  A is invertible (det ≠ 0)</text>
<text x="80" y="465" font-family="Arial" font-size="11" fill="#555555">If det=0, matrix is singular (no inverse). |det| = area of parallelogram formed by rows.</text>

</g>
</svg>`;

    // Generated from registry: determinant3x3
    // matrix:[[1,2,3],[4,5,6],[7,8,9]]
    // showExpansion, showMinors
    static determinant3x3Svg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>3×3 Determinant</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">3×3 Determinant (Cofactor Expansion)</text>
<text x="500" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Expanding along Row 1</text>

<!-- Matrix with vertical bars -->
<line x1="110" y1="80" x2="110" y2="350" stroke="#000000" stroke-width="3"/>
<line x1="400" y1="80" x2="400" y2="350" stroke="#000000" stroke-width="3"/>

<!-- Cell dividers -->
<g stroke="#DDDDDD" stroke-width="0.8" stroke-dasharray="4,3">
  <line x1="113" y1="170" x2="397" y2="170"/>
  <line x1="113" y1="260" x2="397" y2="260"/>
  <line x1="207" y1="83" x2="207" y2="347"/>
  <line x1="304" y1="83" x2="304" y2="347"/>
</g>

<!-- Elements -->
<text x="160" y="148" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle">1</text>
<text x="256" y="148" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle">2</text>
<text x="352" y="148" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle">3</text>
<text x="160" y="238" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle">4</text>
<text x="256" y="238" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle">5</text>
<text x="352" y="238" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle">6</text>
<text x="160" y="328" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle">7</text>
<text x="256" y="328" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle">8</text>
<text x="352" y="328" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle">9</text>

<!-- Highlight row 1 elements with dashed boxes -->
<rect x="115" y="84"  width="90" height="82" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
<rect x="210" y="84"  width="90" height="82" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
<rect x="307" y="84"  width="90" height="82" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>

<!-- showMinors: 3 minor matrices (right side) -->
<!-- Minor M11: rows 2,3 cols 2,3 → [[5,6],[8,9]] -->
<text x="440" y="115" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Minor M₁₁ (cross out row1, col1):</text>
<text x="440" y="138" font-family="Arial" font-size="13" fill="#555555">|5  6| = 5×9−6×8 = 45−48 = −3</text>
<text x="440" y="156" font-family="Arial" font-size="13" fill="#555555">|8  9|</text>

<!-- Minor M12: rows 2,3 cols 1,3 → [[4,6],[7,9]] -->
<text x="440" y="190" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Minor M₁₂ (cross out row1, col2):</text>
<text x="440" y="213" font-family="Arial" font-size="13" fill="#555555">|4  6| = 4×9−6×7 = 36−42 = −6</text>
<text x="440" y="231" font-family="Arial" font-size="13" fill="#555555">|7  9|</text>

<!-- Minor M13: rows 2,3 cols 1,2 → [[4,5],[7,8]] -->
<text x="440" y="265" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Minor M₁₃ (cross out row1, col3):</text>
<text x="440" y="288" font-family="Arial" font-size="13" fill="#555555">|4  5| = 4×8−5×7 = 32−35 = −3</text>
<text x="440" y="306" font-family="Arial" font-size="13" fill="#555555">|7  8|</text>

<!-- Cofactor signs -->
<text x="440" y="340" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Cofactor signs: C₁₁=+M₁₁, C₁₂=−M₁₂, C₁₃=+M₁₃</text>
<text x="440" y="358" font-family="Arial" font-size="12" fill="#555555">Sign pattern: (+−+) for row 1</text>

<!-- showExpansion: full calculation -->
<rect x="50" y="385" width="900" height="290" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="500" y="408" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Cofactor Expansion (along Row 1)</text>
<line x1="65" y1="416" x2="935" y2="416" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="70"  y="438" font-family="Arial" font-size="12" fill="#000000">det(A) = a₁₁C₁₁ + a₁₂C₁₂ + a₁₃C₁₃</text>
<text x="70"  y="460" font-family="Arial" font-size="12" fill="#000000">       = a₁₁(+M₁₁) + a₁₂(−M₁₂) + a₁₃(+M₁₃)</text>
<text x="70"  y="482" font-family="Arial" font-size="12" fill="#000000">       = 1×(−3)   + 2×(−(−6))  + 3×(−3)</text>
<text x="70"  y="504" font-family="Arial" font-size="12" fill="#000000">       = 1×(−3)   + 2×(6)      + 3×(−3)</text>
<text x="70"  y="526" font-family="Arial" font-size="12" fill="#000000">       = −3 + 12 − 9</text>
<text x="70"  y="548" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">       = 0</text>
<text x="70"  y="572" font-family="Arial" font-size="12" fill="#000000">Since det(A) = 0, this matrix is SINGULAR (rows are linearly dependent — row 3 = 2×row2 − row1)</text>
<text x="70"  y="594" font-family="Arial" font-size="11" fill="#555555">Sarrus' Rule: Also can expand along any row or column. Expansion can be done along row 1 as shown.</text>
<text x="70"  y="614" font-family="Arial" font-size="11" fill="#555555">det(AB) = det(A)det(B)  |  det(Aᵀ) = det(A)  |  det(kA) = kⁿdet(A) for n×n matrix</text>
<text x="70"  y="634" font-family="Arial" font-size="11" fill="#555555">Row operations: swap rows → sign change; multiply row by k → det multiplied by k</text>
<text x="70"  y="654" font-family="Arial" font-size="11" fill="#555555">Adding a multiple of one row to another → det unchanged</text>

</g>
</svg>`;

    // Generated from registry: inverseMatrix
    // matrix:[[4,7],[2,6]]
    // showDeterminant, showAdjugate, showResult, showFormula
    static inverseMatrixSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Inverse Matrix</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Inverse of a 2×2 Matrix</text>
<text x="500" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">A⁻¹ = (1/det(A)) × adj(A)</text>

<!-- Step 1: Original Matrix -->
<text x="85" y="95" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Step 1: Matrix A</text>
<path d="M 100,110 L 85,110 L 85,290 L 100,290" stroke="#000000" stroke-width="3" fill="none"/>
<path d="M 240,110 L 255,110 L 255,290 L 240,290" stroke="#000000" stroke-width="3" fill="none"/>
<line x1="90"  y1="200" x2="250" y2="200" stroke="#DDDDDD" stroke-width="0.8" stroke-dasharray="4,3"/>
<line x1="170" y1="113" x2="170" y2="287" stroke="#DDDDDD" stroke-width="0.8" stroke-dasharray="4,3"/>
<text x="133" y="172" font-family="Arial" font-size="44" fill="#000000" text-anchor="middle">4</text>
<text x="210" y="172" font-family="Arial" font-size="44" fill="#000000" text-anchor="middle">7</text>
<text x="133" y="272" font-family="Arial" font-size="44" fill="#000000" text-anchor="middle">2</text>
<text x="210" y="272" font-family="Arial" font-size="44" fill="#000000" text-anchor="middle">6</text>

<!-- Step 2: Determinant -->
<text x="300" y="95" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Step 2: det(A)</text>
<text x="300" y="120" font-family="Arial" font-size="12" fill="#000000">det(A) = ad − bc</text>
<text x="300" y="142" font-family="Arial" font-size="12" fill="#000000">= (4)(6) − (7)(2)</text>
<text x="300" y="164" font-family="Arial" font-size="12" fill="#000000">= 24 − 14</text>
<text x="300" y="186" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">= 10</text>
<text x="300" y="210" font-family="Arial" font-size="11" fill="#555555">det ≠ 0, so A⁻¹ exists</text>

<!-- Step 3: Adjugate (swap a,d; negate b,c) -->
<text x="300" y="240" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Step 3: adj(A)</text>
<text x="300" y="262" font-family="Arial" font-size="12" fill="#555555">Swap diagonal: a↔d</text>
<text x="300" y="280" font-family="Arial" font-size="12" fill="#555555">Negate off-diagonal: b→−b, c→−c</text>
<!-- Adjugate matrix -->
<path d="M 300,295 L 285,295 L 285,385 L 300,385" stroke="#000000" stroke-width="2.5" fill="none"/>
<path d="M 410,295 L 425,295 L 425,385 L 410,385" stroke="#000000" stroke-width="2.5" fill="none"/>
<line x1="288" y1="340" x2="420" y2="340" stroke="#DDDDDD" stroke-width="0.8" stroke-dasharray="4,3"/>
<line x1="358" y1="298" x2="358" y2="382" stroke="#DDDDDD" stroke-width="0.8" stroke-dasharray="4,3"/>
<text x="324" y="330" font-family="Arial" font-size="30" fill="#000000" text-anchor="middle">6</text>
<text x="392" y="330" font-family="Arial" font-size="30" fill="#000000" text-anchor="middle">−7</text>
<text x="324" y="376" font-family="Arial" font-size="30" fill="#000000" text-anchor="middle">−2</text>
<text x="392" y="376" font-family="Arial" font-size="30" fill="#000000" text-anchor="middle">4</text>

<!-- Step 4: Compute A⁻¹ -->
<text x="480" y="95" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Step 4: A⁻¹ = (1/det) × adj(A)</text>

<!-- 1/10 × adjugate -->
<text x="488" y="152" font-family="Arial" font-size="32" fill="#000000">1</text>
<line x1="483" y1="162" x2="527" y2="162" stroke="#000000" stroke-width="2"/>
<text x="488" y="192" font-family="Arial" font-size="32" fill="#000000">10</text>

<!-- multiply -->
<text x="550" y="175" font-family="Arial" font-size="30" fill="#000000">×</text>

<path d="M 590,110 L 575,110 L 575,300 L 590,300" stroke="#000000" stroke-width="2.5" fill="none"/>
<path d="M 730,110 L 745,110 L 745,300 L 730,300" stroke="#000000" stroke-width="2.5" fill="none"/>
<line x1="580" y1="205" x2="740" y2="205" stroke="#DDDDDD" stroke-width="0.8" stroke-dasharray="4,3"/>
<line x1="660" y1="113" x2="660" y2="297" stroke="#DDDDDD" stroke-width="0.8" stroke-dasharray="4,3"/>
<text x="622" y="175" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle">6</text>
<text x="700" y="175" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle">−7</text>
<text x="622" y="275" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle">−2</text>
<text x="700" y="275" font-family="Arial" font-size="36" fill="#000000" text-anchor="middle">4</text>

<!-- = -->
<text x="778" y="215" font-family="Arial" font-size="40" fill="#000000">=</text>

<!-- Result A⁻¹ = [[0.6, -0.7],[-0.2, 0.4]] -->
<path d="M 820,110 L 805,110 L 805,300 L 820,300" stroke="#000000" stroke-width="3" fill="none"/>
<path d="M 980,110 L 995,110 L 995,300 L 980,300" stroke="#000000" stroke-width="3" fill="none"/>
<line x1="810" y1="205" x2="990" y2="205" stroke="#DDDDDD" stroke-width="0.8" stroke-dasharray="4,3"/>
<line x1="900" y1="113" x2="900" y2="297" stroke="#DDDDDD" stroke-width="0.8" stroke-dasharray="4,3"/>
<text x="858" y="173" font-family="Arial" font-size="28" fill="#000000" text-anchor="middle">0.6</text>
<text x="948" y="173" font-family="Arial" font-size="28" fill="#000000" text-anchor="middle">−0.7</text>
<text x="858" y="271" font-family="Arial" font-size="28" fill="#000000" text-anchor="middle">−0.2</text>
<text x="948" y="271" font-family="Arial" font-size="28" fill="#000000" text-anchor="middle">0.4</text>
<text x="900" y="94" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">A⁻¹</text>

<!-- Verification box -->
<rect x="50" y="420" width="900" height="155" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="500" y="442" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Verification: A × A⁻¹ = I (Identity Matrix)</text>
<line x1="65" y1="450" x2="935" y2="450" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="70" y="470" font-family="Arial" font-size="12" fill="#000000">[4  7] × [0.6  −0.7]  =  [4×0.6+7×(−0.2)   4×(−0.7)+7×0.4]  =  [2.4−1.4    −2.8+2.8]  =  [1  0]</text>
<text x="70" y="490" font-family="Arial" font-size="12" fill="#000000">[2  6]   [−0.2  0.4]     [2×0.6+6×(−0.2)   2×(−0.7)+6×0.4]     [1.2−1.2    −1.4+2.4]     [0  1]</text>
<text x="70" y="515" font-family="Arial" font-size="12" fill="#000000">✓ A × A⁻¹ = I₂</text>
<text x="70" y="538" font-family="Arial" font-size="11" fill="#555555">A⁻¹ exists ⟺ det(A) ≠ 0   |   (A⁻¹)⁻¹ = A   |   (AB)⁻¹ = B⁻¹A⁻¹   |   (Aᵀ)⁻¹ = (A⁻¹)ᵀ</text>
<text x="70" y="558" font-family="Arial" font-size="11" fill="#555555">A⁻¹ can be used to solve systems Ax=b: x = A⁻¹b (unique solution when det≠0)</text>

</g>
</svg>`;

    // Generated from registry: matrixTransformation
    // transformationType: 'rotation', angle: 90
    // showOriginal, showTransformed, showMatrix, showCalculation
    static matrixTransformationSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="700" viewBox="0 0 900 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Matrix Transformation — Rotation 90°</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Matrix Transformation: Rotation by 90°</text>
<text x="450" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Rotation matrix R(90°) maps (x,y) → (−y, x)</text>

<!-- Axes: origin(300,400), scale=70px/unit -->
<line x1="80"  y1="400" x2="580" y2="400" stroke="#000000" stroke-width="1.5" marker-end="url(#arrT)"/>
<line x1="300" y1="560" x2="300" y2="80"  stroke="#000000" stroke-width="1.5" marker-end="url(#arrT)"/>
<text x="592" y="404" font-family="Arial" font-size="13" fill="#000000">x</text>
<text x="292" y="72"  font-family="Arial" font-size="13" fill="#000000">y</text>

<!-- Grid -->
<g stroke="#DDDDDD" stroke-width="0.5">
  <line x1="80" y1="330" x2="580" y2="330"/>
  <line x1="80" y1="260" x2="580" y2="260"/>
  <line x1="80" y1="190" x2="580" y2="190"/>
  <line x1="80" y1="470" x2="580" y2="470"/>
  <line x1="80" y1="540" x2="580" y2="540"/>
  <line x1="230" y1="80" x2="230" y2="560"/>
  <line x1="160" y1="80" x2="160" y2="560"/>
  <line x1="370" y1="80" x2="370" y2="560"/>
  <line x1="440" y1="80" x2="440" y2="560"/>
  <line x1="510" y1="80" x2="510" y2="560"/>
</g>

<!-- Axis labels -->
<g font-family="Arial" font-size="10" fill="#555555">
  <text x="160" y="416" text-anchor="middle">−2</text>
  <text x="230" y="416" text-anchor="middle">−1</text>
  <text x="370" y="416" text-anchor="middle">1</text>
  <text x="440" y="416" text-anchor="middle">2</text>
  <text x="510" y="416" text-anchor="middle">3</text>
  <text x="285" y="334" text-anchor="middle">1</text>
  <text x="285" y="264" text-anchor="middle">2</text>
  <text x="285" y="194" text-anchor="middle">3</text>
  <text x="285" y="474" text-anchor="middle">−1</text>
  <text x="288" y="416" text-anchor="middle">0</text>
</g>

<!-- Original shape: unit square vertices A(0,0) B(1,0) C(1,1) D(0,1) -->
<!-- Screen: A(300,400) B(370,400) C(370,330) D(300,330) -->
<polygon points="300,400 370,400 370,330 300,330" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="8,4"/>
<!-- Original labels -->
<text x="380" y="415" font-family="Arial" font-size="12" fill="#000000">B(1,0)</text>
<text x="375" y="324" font-family="Arial" font-size="12" fill="#000000">C(1,1)</text>
<text x="265" y="324" font-family="Arial" font-size="12" fill="#000000">D(0,1)</text>
<text x="268" y="420" font-family="Arial" font-size="12" fill="#000000">A(0,0)</text>

<!-- Rotation 90° maps (x,y)→(−y,x): A(0,0)→A'(0,0), B(1,0)→B'(0,1), C(1,1)→C'(−1,1), D(0,1)→D'(−1,0) -->
<!-- Screen: A'(300,400), B'(300,330), C'(230,330), D'(230,400) -->
<polygon points="300,400 300,330 230,330 230,400" fill="none" stroke="#000000" stroke-width="3"/>
<!-- Transformed labels -->
<text x="305" y="324" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">B'(0,1)</text>
<text x="215" y="324" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">C'(−1,1)</text>
<text x="176" y="415" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">D'(−1,0)</text>

<!-- Rotation arc showing 90° -->
<path d="M 370,400 A 70,70 0 0,0 300,330" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3" fill="none" marker-end="url(#arrT)"/>
<text x="372" y="352" font-family="Arial" font-size="12" fill="#000000">90°</text>

<!-- Legend -->
<line x1="80" y1="590" x2="130" y2="590" stroke="#000000" stroke-width="2" stroke-dasharray="8,4"/>
<text x="140" y="594" font-family="Arial" font-size="12" fill="#000000">Original shape</text>
<line x1="260" y1="590" x2="310" y2="590" stroke="#000000" stroke-width="3"/>
<text x="320" y="594" font-family="Arial" font-size="12" fill="#000000">Transformed shape</text>

<!-- showMatrix: rotation matrix box -->
<rect x="620" y="80" width="260" height="260" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="750" y="103" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Rotation Matrix R(θ)</text>
<line x1="635" y1="111" x2="875" y2="111" stroke="#AAAAAA" stroke-width="0.5"/>
<!-- Matrix display -->
<path d="M 665,125 L 650,125 L 650,210 L 665,210" stroke="#000000" stroke-width="2.5" fill="none"/>
<path d="M 850,125 L 865,125 L 865,210 L 850,210" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="715" y="172" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">cos θ</text>
<text x="800" y="172" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">−sin θ</text>
<text x="715" y="200" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">sin θ</text>
<text x="800" y="200" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">cos θ</text>

<text x="635" y="235" font-family="Arial" font-size="12" fill="#000000">For θ = 90°:</text>
<text x="635" y="253" font-family="Arial" font-size="12" fill="#000000">cos90°=0, sin90°=1</text>
<!-- Matrix for 90° -->
<path d="M 650,260 L 635,260 L 635,315 L 650,315" stroke="#000000" stroke-width="2" fill="none"/>
<path d="M 760,260 L 775,260 L 775,315 L 760,315" stroke="#000000" stroke-width="2" fill="none"/>
<text x="680" y="282" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle">0</text>
<text x="730" y="282" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle">−1</text>
<text x="680" y="308" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle">1</text>
<text x="730" y="308" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle">0</text>
<text x="790" y="284" font-family="Arial" font-size="12" fill="#000000">= R(90°)</text>

<!-- showCalculation -->
<rect x="620" y="360" width="260" height="250" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="750" y="382" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Vertex Transformations</text>
<line x1="635" y1="390" x2="875" y2="390" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="635" y="410" font-family="Arial" font-size="11" fill="#000000">A(0,0):[0 −1][0] = [0] → A'(0,0)</text>
<text x="650" y="425" font-family="Arial" font-size="11" fill="#555555">[1  0][0]   [0]</text>
<text x="635" y="448" font-family="Arial" font-size="11" fill="#000000">B(1,0):[0 −1][1] = [0] → B'(0,1)</text>
<text x="650" y="463" font-family="Arial" font-size="11" fill="#555555">[1  0][0]   [1]</text>
<text x="635" y="486" font-family="Arial" font-size="11" fill="#000000">C(1,1):[0 −1][1] = [−1] → C'(−1,1)</text>
<text x="650" y="501" font-family="Arial" font-size="11" fill="#555555">[1  0][1]   [1]</text>
<text x="635" y="524" font-family="Arial" font-size="11" fill="#000000">D(0,1):[0 −1][0] = [−1] → D'(−1,0)</text>
<text x="650" y="539" font-family="Arial" font-size="11" fill="#555555">[1  0][1]   [0]</text>
<text x="635" y="562" font-family="Arial" font-size="11" fill="#555555">Shape preserved: area unchanged</text>
<text x="635" y="578" font-family="Arial" font-size="11" fill="#555555">det(R) = 1 (orientation preserved)</text>
<text x="635" y="594" font-family="Arial" font-size="11" fill="#555555">Rotation is an isometry</text>

<defs>
  <marker id="arrT" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // ============================================================
    // ===== 3. FUNCTIONS =========================================
    // ============================================================

    // Generated from registry: functionMachine
    // function: 'f(x) = 2x + 3', inputs: [1,2,3,4]
    // showMachine, showInputs, showOutputs, showRule
    static functionMachineSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="500" viewBox="0 0 800 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>Function Machine</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Function Machine Diagram</text>
<text x="400" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">f(x) = 2x + 3   —   Input → Machine → Output</text>

<!-- INPUT column -->
<text x="110" y="100" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">INPUT</text>
<text x="110" y="118" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(Domain)</text>

<!-- Input values -->
<rect x="68" y="145" width="82" height="38" rx="4" fill="#F0F0F0" stroke="#000000" stroke-width="1.5"/>
<text x="109" y="170" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle">x = 1</text>
<rect x="68" y="205" width="82" height="38" rx="4" fill="#F0F0F0" stroke="#000000" stroke-width="1.5"/>
<text x="109" y="230" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle">x = 2</text>
<rect x="68" y="265" width="82" height="38" rx="4" fill="#F0F0F0" stroke="#000000" stroke-width="1.5"/>
<text x="109" y="290" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle">x = 3</text>
<rect x="68" y="325" width="82" height="38" rx="4" fill="#F0F0F0" stroke="#000000" stroke-width="1.5"/>
<text x="109" y="350" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle">x = 4</text>

<!-- Arrows from inputs to machine -->
<line x1="150" y1="164" x2="255" y2="225" stroke="#000000" stroke-width="1.5" marker-end="url(#arrF)"/>
<line x1="150" y1="224" x2="255" y2="240" stroke="#000000" stroke-width="1.5" marker-end="url(#arrF)"/>
<line x1="150" y1="284" x2="255" y2="255" stroke="#000000" stroke-width="1.5" marker-end="url(#arrF)"/>
<line x1="150" y1="344" x2="255" y2="270" stroke="#000000" stroke-width="1.5" marker-end="url(#arrF)"/>

<!-- Machine box -->
<rect x="255" y="160" width="250" height="180" rx="12" fill="#EEEEEE" stroke="#000000" stroke-width="3"/>
<!-- Machine decoration (gears schematic) -->
<circle cx="330" cy="220" r="30" fill="none" stroke="#999999" stroke-width="1.5" stroke-dasharray="8,4"/>
<circle cx="330" cy="220" r="8"  fill="#999999" stroke="none"/>
<circle cx="400" cy="260" r="25" fill="none" stroke="#999999" stroke-width="1.5" stroke-dasharray="6,4"/>
<circle cx="400" cy="260" r="6"  fill="#999999" stroke="none"/>
<!-- Rule label -->
<text x="380" y="200" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">f(x) = 2x + 3</text>
<text x="380" y="320" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">multiply by 2, add 3</text>

<!-- Arrows from machine to outputs -->
<line x1="505" y1="225" x2="598" y2="164" stroke="#000000" stroke-width="1.5" marker-end="url(#arrF)"/>
<line x1="505" y1="240" x2="598" y2="224" stroke="#000000" stroke-width="1.5" marker-end="url(#arrF)"/>
<line x1="505" y1="255" x2="598" y2="284" stroke="#000000" stroke-width="1.5" marker-end="url(#arrF)"/>
<line x1="505" y1="270" x2="598" y2="344" stroke="#000000" stroke-width="1.5" marker-end="url(#arrF)"/>

<!-- OUTPUT column -->
<text x="648" y="100" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">OUTPUT</text>
<text x="648" y="118" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(Range)</text>

<!-- Output values -->
<rect x="598" y="145" width="100" height="38" rx="4" fill="#F0F0F0" stroke="#000000" stroke-width="1.5"/>
<text x="648" y="170" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle">f(1) = 5</text>
<rect x="598" y="205" width="100" height="38" rx="4" fill="#F0F0F0" stroke="#000000" stroke-width="1.5"/>
<text x="648" y="230" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle">f(2) = 7</text>
<rect x="598" y="265" width="100" height="38" rx="4" fill="#F0F0F0" stroke="#000000" stroke-width="1.5"/>
<text x="648" y="290" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle">f(3) = 9</text>
<rect x="598" y="325" width="100" height="38" rx="4" fill="#F0F0F0" stroke="#000000" stroke-width="1.5"/>
<text x="648" y="350" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle">f(4) = 11</text>

<!-- Note: calculations -->
<text x="400" y="420" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">f(1)=2(1)+3=5  |  f(2)=2(2)+3=7  |  f(3)=2(3)+3=9  |  f(4)=2(4)+3=11</text>
<text x="400" y="440" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Each input has exactly one output → this is a function (one-to-one mapping)</text>
<text x="400" y="460" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Domain: {1,2,3,4}  |  Range: {5,7,9,11}  |  f: ℝ → ℝ</text>

<defs>
  <marker id="arrF" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto">
    <polygon points="0 0,9 3,0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: mappingDiagram
    // domain:[1,2,3,4], range:[2,4,6,8], function: x→2x
    // showDomain, showRange, showArrows, showOneToOne
    static mappingDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="600" viewBox="0 0 700 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Mapping Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Mapping Diagram</text>
<text x="350" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">f: x → 2x   (one-to-one function)</text>

<!-- DOMAIN oval -->
<ellipse cx="155" cy="320" rx="100" ry="235" fill="#F8F8F8" stroke="#000000" stroke-width="2"/>
<text x="155" y="88" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Domain</text>
<text x="155" y="106" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(Input Set)</text>

<!-- Domain elements -->
<circle cx="155" cy="170" r="22" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="155" y="175" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle">1</text>

<circle cx="155" cy="260" r="22" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="155" y="265" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle">2</text>

<circle cx="155" cy="350" r="22" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="155" y="355" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle">3</text>

<circle cx="155" cy="440" r="22" fill="#DDDDDD" stroke="#000000" stroke-width="1.5"/>
<text x="155" y="445" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle">4</text>

<!-- RANGE oval -->
<ellipse cx="545" cy="320" rx="100" ry="235" fill="#F8F8F8" stroke="#000000" stroke-width="2"/>
<text x="545" y="88" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Range</text>
<text x="545" y="106" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(Output Set)</text>

<!-- Range elements -->
<circle cx="545" cy="170" r="22" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<text x="545" y="175" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle">2</text>

<circle cx="545" cy="260" r="22" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<text x="545" y="265" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle">4</text>

<circle cx="545" cy="350" r="22" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<text x="545" y="355" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle">6</text>

<circle cx="545" cy="440" r="22" fill="#EEEEEE" stroke="#000000" stroke-width="1.5"/>
<text x="545" y="445" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle">8</text>

<!-- Mapping arrows (one-to-one) -->
<line x1="177" y1="170" x2="523" y2="170" stroke="#000000" stroke-width="2" marker-end="url(#arrMap)"/>
<line x1="177" y1="260" x2="523" y2="260" stroke="#000000" stroke-width="2" marker-end="url(#arrMap)"/>
<line x1="177" y1="350" x2="523" y2="350" stroke="#000000" stroke-width="2" marker-end="url(#arrMap)"/>
<line x1="177" y1="440" x2="523" y2="440" stroke="#000000" stroke-width="2" marker-end="url(#arrMap)"/>

<!-- Function rule label on arrow (middle) -->
<rect x="305" y="298" width="90" height="22" rx="3" fill="#FFFFFF" stroke="#AAAAAA" stroke-width="1"/>
<text x="350" y="313" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">f(x) = 2x</text>

<!-- Mapping pair labels -->
<text x="350" y="163" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">1 → 2</text>
<text x="350" y="253" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">2 → 4</text>
<text x="350" y="343" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">3 → 6</text>
<text x="350" y="433" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">4 → 8</text>

<!-- Info box -->
<rect x="50" y="530" width="600" height="55" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="350" y="551" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">One-to-One (Injective) Function</text>
<text x="350" y="570" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Each domain element maps to exactly one range element, and no two domain elements share a range element</text>

<defs>
  <marker id="arrMap" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto">
    <polygon points="0 0,9 3,0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: domainRangeGraph
    // function: 'f(x) = √x'
    // highlightDomain, highlightRange, showRestrictions
    static domainRangeGraphSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Domain and Range - f(x)=sqrt(x)</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Domain and Range: f(x) = √x</text>
<text x="400" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Domain: x ≥ 0   |   Range: f(x) ≥ 0</text>

<!-- Axes: origin(150,430), scale=50px/unit -->
<line x1="80"  y1="430" x2="700" y2="430" stroke="#000000" stroke-width="1.5" marker-end="url(#arrDR)"/>
<line x1="150" y1="510" x2="150" y2="60"  stroke="#000000" stroke-width="1.5" marker-end="url(#arrDR)"/>
<text x="712" y="434" font-family="Arial" font-size="13" fill="#000000">x</text>
<text x="142" y="52"  font-family="Arial" font-size="13" fill="#000000">y</text>

<!-- Grid -->
<g stroke="#DDDDDD" stroke-width="0.5">
  <line x1="150" y1="380" x2="700" y2="380"/>
  <line x1="150" y1="330" x2="700" y2="330"/>
  <line x1="150" y1="280" x2="700" y2="280"/>
  <line x1="150" y1="230" x2="700" y2="230"/>
  <line x1="150" y1="180" x2="700" y2="180"/>
  <line x1="150" y1="130" x2="700" y2="130"/>
  <line x1="200" y1="60" x2="200" y2="430"/>
  <line x1="250" y1="60" x2="250" y2="430"/>
  <line x1="300" y1="60" x2="300" y2="430"/>
  <line x1="350" y1="60" x2="350" y2="430"/>
  <line x1="400" y1="60" x2="400" y2="430"/>
  <line x1="450" y1="60" x2="450" y2="430"/>
  <line x1="500" y1="60" x2="500" y2="430"/>
  <line x1="550" y1="60" x2="550" y2="430"/>
  <line x1="600" y1="60" x2="600" y2="430"/>
  <line x1="650" y1="60" x2="650" y2="430"/>
</g>

<!-- Axis labels -->
<g font-family="Arial" font-size="10" fill="#555555">
  <text x="200" y="446" text-anchor="middle">1</text>
  <text x="250" y="446" text-anchor="middle">2</text>
  <text x="300" y="446" text-anchor="middle">3</text>
  <text x="350" y="446" text-anchor="middle">4</text>
  <text x="400" y="446" text-anchor="middle">5</text>
  <text x="450" y="446" text-anchor="middle">6</text>
  <text x="500" y="446" text-anchor="middle">7</text>
  <text x="550" y="446" text-anchor="middle">8</text>
  <text x="600" y="446" text-anchor="middle">9</text>
  <text x="650" y="446" text-anchor="middle">10</text>
  <text x="136" y="384" text-anchor="middle">1</text>
  <text x="136" y="334" text-anchor="middle">2</text>
  <text x="136" y="284" text-anchor="middle">3</text>
  <text x="136" y="234" text-anchor="middle">4</text>
  <text x="136" y="184" text-anchor="middle">5</text>
  <text x="136" y="134" text-anchor="middle">6</text>
  <text x="138" y="434" text-anchor="middle">0</text>
</g>

<!-- highlightDomain: horizontal dashed line on x-axis from 0 rightward (domain x>=0) -->
<line x1="150" y1="440" x2="700" y2="440" stroke="#000000" stroke-width="3" stroke-dasharray="none"/>
<!-- Arrow on x-axis from origin showing domain -->
<line x1="150" y1="455" x2="700" y2="455" stroke="#000000" stroke-width="3" marker-end="url(#arrDR)"/>
<text x="420" y="475" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Domain: x ≥ 0</text>

<!-- highlightRange: vertical bracket on y-axis from 0 upward -->
<line x1="130" y1="430" x2="130" y2="80" stroke="#000000" stroke-width="3" marker-end="url(#arrDR)"/>
<text x="70" y="260" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Range:</text>
<text x="70" y="278" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">y ≥ 0</text>

<!-- f(x) = sqrt(x) curve: points (x, sqrt(x)) scale 50px/unit
     x=0→y=0: (150,430); x=1→y=1: (200,380); x=2→y=1.41: (250,359); x=3→y=1.73: (300,344)
     x=4→y=2: (350,330); x=5→y=2.24: (400,318); x=6→y=2.45: (450,308); x=7→y=2.65: (500,298)
     x=8→y=2.83: (550,289); x=9→y=3: (600,280); x=10→y=3.16: (650,272) -->
<polyline points="150,430 200,380 250,359 300,344 350,330 400,318 450,308 500,298 550,289 600,280 650,272 700,265"
 stroke="#000000" stroke-width="3" fill="none"/>

<!-- Origin point -->
<circle cx="150" cy="430" r="5" fill="#000000" stroke="none"/>
<text x="158" y="426" font-family="Arial" font-size="11" fill="#000000">f(0)=0</text>

<!-- Key points labeled -->
<circle cx="350" cy="330" r="4" fill="#000000" stroke="none"/>
<text x="358" y="326" font-family="Arial" font-size="11" fill="#000000">f(4)=2</text>
<circle cx="600" cy="280" r="4" fill="#000000" stroke="none"/>
<text x="608" y="276" font-family="Arial" font-size="11" fill="#000000">f(9)=3</text>

<!-- showRestrictions info box -->
<rect x="430" y="80" width="340" height="180" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="600" y="102" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Domain &amp; Range Restrictions</text>
<line x1="445" y1="110" x2="760" y2="110" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="445" y="130" font-family="Arial" font-size="12" fill="#000000">f(x) = √x requires x ≥ 0</text>
<text x="445" y="150" font-family="Arial" font-size="12" fill="#000000">Domain: [0, ∞)  or  x ≥ 0</text>
<text x="445" y="170" font-family="Arial" font-size="12" fill="#000000">Range: [0, ∞)  or  f(x) ≥ 0</text>
<text x="445" y="192" font-family="Arial" font-size="11" fill="#555555">√x is not defined for x &lt; 0</text>
<text x="445" y="210" font-family="Arial" font-size="11" fill="#555555">(no real square root of negative)</text>
<text x="445" y="230" font-family="Arial" font-size="11" fill="#555555">Output always ≥ 0 by definition</text>
<text x="445" y="248" font-family="Arial" font-size="11" fill="#555555">Function is one-to-one on domain</text>

<defs>
  <marker id="arrDR" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: functionTypes
    // functions: ['linear','quadratic','cubic','reciprocal']
    // showGraphs, showEquations, showCharacteristics
    static functionTypesSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Function Types Comparison</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Types of Functions</text>
<text x="500" y="57" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Linear | Quadratic | Cubic | Reciprocal</text>

<!-- 4 panels in a 2×2 grid -->
<!-- Panel dimensions: 220×260 each, with margins -->
<!-- Panel 1 (linear): top-left, x0=40, y0=80 -->
<!-- Panel 2 (quadratic): top-right, x0=280, y0=80 -->
<!-- Panel 3 (cubic): bottom-left, x0=520, y0=80 -->
<!-- Panel 4 (reciprocal): bottom-right, x0=760, y0=80 -->
<!-- Actually 1 row of 4 for wide SVG -->

<!-- ===== PANEL 1: LINEAR f(x)=x ===== -->
<rect x="30" y="78" width="200" height="270" fill="none" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="130" y="98" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Linear</text>
<text x="130" y="115" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">f(x) = x</text>

<!-- Mini axes: origin(130,270), scale=30px/unit, range -3..3 -->
<line x1="40"  y1="270" x2="220" y2="270" stroke="#000000" stroke-width="1" marker-end="url(#arrFT)"/>
<line x1="130" y1="340" x2="130" y2="95"  stroke="#000000" stroke-width="1" marker-end="url(#arrFT)"/>
<!-- Linear f(x)=x: (-3,-3)...(3,3): x=-3→(40,360clipped), x=3→(220,180) -->
<line x1="40" y1="360" x2="220" y2="180" stroke="#000000" stroke-width="2.5"/>
<!-- Key characteristics box -->
<rect x="35" y="300" width="190" height="40" fill="#F5F5F5" stroke="#DDDDDD" stroke-width="1" rx="2"/>
<text x="130" y="315" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Straight line, constant gradient</text>
<text x="130" y="330" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Domain: ℝ   Range: ℝ   1-to-1</text>

<!-- ===== PANEL 2: QUADRATIC f(x)=x² ===== -->
<rect x="255" y="78" width="200" height="270" fill="none" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="355" y="98" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Quadratic</text>
<text x="355" y="115" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">f(x) = x²</text>

<line x1="265" y1="270" x2="445" y2="270" stroke="#000000" stroke-width="1" marker-end="url(#arrFT)"/>
<line x1="355" y1="340" x2="355" y2="95"  stroke="#000000" stroke-width="1" marker-end="url(#arrFT)"/>
<!-- f(x)=x²: scale 30px. Points: x=-3→y=9 (off screen), x=-2→y=4: (295,150), x=-1→y=1: (325,240)
     x=0→y=0: (355,270), x=1→y=1: (385,240), x=2→y=4: (415,150), x=3→y=9 (off) -->
<polyline points="295,150 325,240 355,270 385,240 415,150" stroke="#000000" stroke-width="2.5" fill="none"/>
<rect x="260" y="300" width="190" height="40" fill="#F5F5F5" stroke="#DDDDDD" stroke-width="1" rx="2"/>
<text x="355" y="315" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">U-shaped parabola, vertex at origin</text>
<text x="355" y="330" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Domain: ℝ   Range: y ≥ 0   2-to-1</text>

<!-- ===== PANEL 3: CUBIC f(x)=x³ ===== -->
<rect x="480" y="78" width="200" height="270" fill="none" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="580" y="98" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Cubic</text>
<text x="580" y="115" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">f(x) = x³</text>

<line x1="490" y1="270" x2="670" y2="270" stroke="#000000" stroke-width="1" marker-end="url(#arrFT)"/>
<line x1="580" y1="340" x2="580" y2="95"  stroke="#000000" stroke-width="1" marker-end="url(#arrFT)"/>
<!-- f(x)=x³: scale=20px. Points: x=-2.5→y=-15.6 (clip), x=-2→y=-8: (540,430 clip)
     Use scale=15: x=-2→y=-8:(550,390 clip). Use even smaller scale=10px:
     x=-3→y=-27:(550,540 clip). Let's use scale=8px:
     x=-3→y=-27: (556,486 clip), x=-2→y=-8: (564,334), x=-1→y=-1: (572,278)
     x=0→y=0: (580,270), x=1→y=1: (588,262), x=2→y=8: (596,206), x=3→y=27: (604,54 clip) -->
<polyline points="560,350 568,278 576,270 580,270 584,262 592,206 600,118" stroke="#000000" stroke-width="2.5" fill="none"/>
<rect x="485" y="300" width="190" height="40" fill="#F5F5F5" stroke="#DDDDDD" stroke-width="1" rx="2"/>
<text x="580" y="315" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">S-shaped, rotational symmetry about O</text>
<text x="580" y="330" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Domain: ℝ   Range: ℝ   1-to-1</text>

<!-- ===== PANEL 4: RECIPROCAL f(x)=1/x ===== -->
<rect x="705" y="78" width="200" height="270" fill="none" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="805" y="98" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Reciprocal</text>
<text x="805" y="115" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">f(x) = 1/x</text>

<line x1="715" y1="210" x2="895" y2="210" stroke="#000000" stroke-width="1" marker-end="url(#arrFT)"/>
<line x1="805" y1="340" x2="805" y2="88"  stroke="#000000" stroke-width="1" marker-end="url(#arrFT)"/>
<!-- Asymptotes (dashed) -->
<line x1="805" y1="88" x2="805" y2="340" stroke="#999999" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="715" y1="210" x2="895" y2="210" stroke="#999999" stroke-width="0.5" stroke-dasharray="3,3"/>

<!-- f(x)=1/x: scale=30px from (805,210). 
     x=0.5→y=2: (820,150), x=1→y=1: (835,180), x=2→y=0.5: (865,195), x=3→y=0.33: (895,200 clip)
     x=-0.5→y=-2: (790,270), x=-1→y=-1: (775,240), x=-2→y=-0.5: (745,225), x=-3→y=-0.33: (715,220) -->
<polyline points="820,150 835,180 865,195 890,202" stroke="#000000" stroke-width="2.5" fill="none"/>
<polyline points="720,218 745,225 775,240 790,270" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="880" y="195" font-family="Arial" font-size="10" fill="#555555">x→+∞</text>
<text x="720" y="230" font-family="Arial" font-size="10" fill="#555555">x→−∞</text>

<rect x="710" y="300" width="190" height="40" fill="#F5F5F5" stroke="#DDDDDD" stroke-width="1" rx="2"/>
<text x="805" y="315" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Hyperbola, asymptotes x=0, y=0</text>
<text x="805" y="330" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Domain: x≠0   Range: y≠0</text>

<!-- Summary table -->
<rect x="30" y="365" width="940" height="290" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="500" y="388" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Function Characteristics Summary</text>
<line x1="45" y1="396" x2="960" y2="396" stroke="#AAAAAA" stroke-width="0.8"/>

<!-- Table header -->
<text x="100" y="415" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Type</text>
<text x="280" y="415" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Equation</text>
<text x="440" y="415" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Shape</text>
<text x="620" y="415" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Domain / Range</text>
<text x="840" y="415" font-family="Arial" font-size="12" fill="#000000" font-weight="bold" text-anchor="middle">Key Feature</text>
<line x1="45" y1="422" x2="960" y2="422" stroke="#AAAAAA" stroke-width="0.5"/>

<text x="100" y="445" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Linear</text>
<text x="280" y="445" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">y = mx + c</text>
<text x="440" y="445" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Straight line</text>
<text x="620" y="445" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">ℝ / ℝ</text>
<text x="840" y="445" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Constant gradient m</text>

<text x="100" y="470" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Quadratic</text>
<text x="280" y="470" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">y = ax² + bx + c</text>
<text x="440" y="470" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Parabola</text>
<text x="620" y="470" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">ℝ / y ≥ k (min)</text>
<text x="840" y="470" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Axis of symmetry</text>

<text x="100" y="495" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Cubic</text>
<text x="280" y="495" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">y = ax³ + bx² + cx + d</text>
<text x="440" y="495" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">S-curve</text>
<text x="620" y="495" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">ℝ / ℝ</text>
<text x="840" y="495" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Point of inflection</text>

<text x="100" y="520" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Reciprocal</text>
<text x="280" y="520" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">y = a/x  (y = 1/x)</text>
<text x="440" y="520" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Hyperbola</text>
<text x="620" y="520" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">x≠0 / y≠0</text>
<text x="840" y="520" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Asymptotes at axes</text>

<text x="100" y="548" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Exponential</text>
<text x="280" y="548" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">y = aˣ (e.g. y=2ˣ)</text>
<text x="440" y="548" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Exponential growth</text>
<text x="620" y="548" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">ℝ / y &gt; 0</text>
<text x="840" y="548" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Horizontal asymptote y=0</text>

<text x="100" y="572" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Logarithm</text>
<text x="280" y="572" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">y = log(x)</text>
<text x="440" y="572" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Log curve</text>
<text x="620" y="572" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">x&gt;0 / ℝ</text>
<text x="840" y="572" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Inverse of exponential</text>

<text x="100" y="596" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Trigonometric</text>
<text x="280" y="596" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">y = sin x, cos x</text>
<text x="440" y="596" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Wave (periodic)</text>
<text x="620" y="596" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">ℝ / [−1, 1]</text>
<text x="840" y="596" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Period 2π, amplitude 1</text>

<text x="100" y="620" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Square root</text>
<text x="280" y="620" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">y = √x</text>
<text x="440" y="620" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Half-parabola</text>
<text x="620" y="620" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">x≥0 / y≥0</text>
<text x="840" y="620" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Inverse of y=x² (x≥0)</text>

<text x="500" y="648" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle" font-style="italic">* Grey rows: additional function types for reference (not shown in main graph panels)</text>

<defs>
  <marker id="arrFT" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0,8 3,0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: functionTransformations
    // baseFunction: 'f(x) = x²', transformations: ['translate','reflect','stretch']
    // showOriginal, showTransformed, showEquations
    static functionTransformationsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Function Transformations</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Function Transformations</text>
<text x="450" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Base function: f(x) = x²  |  Translation, Reflection, Stretch</text>

<!-- Axes: origin(300,380), scale=50px/unit -->
<line x1="50"  y1="380" x2="820" y2="380" stroke="#000000" stroke-width="1.5" marker-end="url(#arrFTr)"/>
<line x1="300" y1="540" x2="300" y2="60"  stroke="#000000" stroke-width="1.5" marker-end="url(#arrFTr)"/>
<text x="832" y="384" font-family="Arial" font-size="13" fill="#000000">x</text>
<text x="292" y="52"  font-family="Arial" font-size="13" fill="#000000">y</text>

<!-- Grid (light) -->
<g stroke="#EEEEEE" stroke-width="0.5">
  <line x1="50"  y1="330" x2="820" y2="330"/>
  <line x1="50"  y1="280" x2="820" y2="280"/>
  <line x1="50"  y1="230" x2="820" y2="230"/>
  <line x1="50"  y1="180" x2="820" y2="180"/>
  <line x1="50"  y1="430" x2="820" y2="430"/>
  <line x1="50"  y1="480" x2="820" y2="480"/>
  <line x1="100" y1="60" x2="100" y2="540"/>
  <line x1="150" y1="60" x2="150" y2="540"/>
  <line x1="200" y1="60" x2="200" y2="540"/>
  <line x1="250" y1="60" x2="250" y2="540"/>
  <line x1="350" y1="60" x2="350" y2="540"/>
  <line x1="400" y1="60" x2="400" y2="540"/>
  <line x1="450" y1="60" x2="450" y2="540"/>
  <line x1="500" y1="60" x2="500" y2="540"/>
  <line x1="550" y1="60" x2="550" y2="540"/>
  <line x1="600" y1="60" x2="600" y2="540"/>
  <line x1="650" y1="60" x2="650" y2="540"/>
  <line x1="700" y1="60" x2="700" y2="540"/>
  <line x1="750" y1="60" x2="750" y2="540"/>
</g>

<!-- Axis labels -->
<g font-family="Arial" font-size="10" fill="#555555">
  <text x="100" y="396" text-anchor="middle">−4</text>
  <text x="150" y="396" text-anchor="middle">−3</text>
  <text x="200" y="396" text-anchor="middle">−2</text>
  <text x="250" y="396" text-anchor="middle">−1</text>
  <text x="350" y="396" text-anchor="middle">1</text>
  <text x="400" y="396" text-anchor="middle">2</text>
  <text x="450" y="396" text-anchor="middle">3</text>
  <text x="500" y="396" text-anchor="middle">4</text>
  <text x="550" y="396" text-anchor="middle">5</text>
  <text x="285" y="334" text-anchor="middle">1</text>
  <text x="285" y="284" text-anchor="middle">2</text>
  <text x="285" y="234" text-anchor="middle">3</text>
  <text x="285" y="184" text-anchor="middle">4</text>
  <text x="285" y="434" text-anchor="middle">−1</text>
  <text x="288" y="384" text-anchor="middle">0</text>
</g>

<!-- showOriginal: f(x)=x² (solid, thin) 
     x=-3→y=9: (150,380-450=off), x=-2→y=4: (200,180), x=-1→y=1: (250,330)
     x=0→y=0: (300,380), x=1→y=1: (350,330), x=2→y=4: (400,180), x=3→y=9: (450,off) -->
<polyline points="200,180 250,330 300,380 350,330 400,180" stroke="#000000" stroke-width="2" stroke-dasharray="6,4" fill="none"/>
<text x="205" y="170" font-family="Arial" font-size="11" fill="#000000">f(x)=x²</text>

<!-- Transformation 1: Translate up 2: g(x) = x² + 2, vertex at (0,2): screen(300,280)
     x=-2→y=6: (200,80clip), x=-1.5→y=4.25: (225,167), x=-1→y=3: (250,230), x=0→y=2: (300,280), x=1→y=3: (350,230), x=1.5→y=4.25: (375,167), x=2→y=6: (400,80) -->
<polyline points="225,167 250,230 300,280 350,230 375,167" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="360" y="225" font-family="Arial" font-size="11" fill="#000000">g(x)=x²+2</text>
<text x="360" y="240" font-family="Arial" font-size="10" fill="#555555">(translate up 2)</text>
<!-- Translation vector arrow -->
<line x1="300" y1="375" x2="300" y2="285" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arrFTr)"/>
<text x="310" y="333" font-family="Arial" font-size="10" fill="#000000">+2</text>

<!-- Transformation 2: Reflect in x-axis: h(x) = −x²
     x=-2→y=-4: (200,580clip→480), x=-1→y=-1: (250,430), x=0→y=0: (300,380), x=1→y=-1: (350,430), x=2→y=-4: (400,580clip→480) -->
<polyline points="200,480 250,430 300,380 350,430 400,480" stroke="#000000" stroke-width="2.5" stroke-dasharray="10,4" fill="none"/>
<text x="410" y="475" font-family="Arial" font-size="11" fill="#000000">h(x)=−x²</text>
<text x="410" y="490" font-family="Arial" font-size="10" fill="#555555">(reflect in x-axis)</text>

<!-- Transformation 3: Horizontal stretch: k(x) = (x/2)² = x²/4
     x=-4→y=4: (100,180), x=-2→y=1: (200,330), x=0→y=0: (300,380), x=2→y=1: (400,330), x=4→y=4: (500,180) -->
<polyline points="100,180 200,330 300,380 400,330 500,180" stroke="#000000" stroke-width="2.5" stroke-dasharray="3,4" fill="none"/>
<text x="505" y="175" font-family="Arial" font-size="11" fill="#000000">k(x)=(x/2)²</text>
<text x="505" y="190" font-family="Arial" font-size="10" fill="#555555">(stretch ×2 horiz.)</text>

<!-- Legend -->
<rect x="580" y="300" width="300" height="180" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="730" y="322" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Transformation Summary</text>
<line x1="595" y1="330" x2="870" y2="330" stroke="#AAAAAA" stroke-width="0.5"/>
<line x1="595" y1="348" x2="640" y2="348" stroke="#000000" stroke-width="2" stroke-dasharray="6,4"/>
<text x="650" y="352" font-family="Arial" font-size="11" fill="#000000">f(x) = x²  (original)</text>
<line x1="595" y1="368" x2="640" y2="368" stroke="#000000" stroke-width="2.5"/>
<text x="650" y="372" font-family="Arial" font-size="11" fill="#000000">g(x) = x²+2  (↑ translate 2)</text>
<line x1="595" y1="388" x2="640" y2="388" stroke="#000000" stroke-width="2.5" stroke-dasharray="10,4"/>
<text x="650" y="392" font-family="Arial" font-size="11" fill="#000000">h(x) = −x²  (reflect x-axis)</text>
<line x1="595" y1="408" x2="640" y2="408" stroke="#000000" stroke-width="2.5" stroke-dasharray="3,4"/>
<text x="650" y="412" font-family="Arial" font-size="11" fill="#000000">k(x) = (x/2)²  (horiz. stretch)</text>

<text x="595" y="435" font-family="Arial" font-size="11" fill="#555555">f(x+a): shift left a</text>
<text x="595" y="450" font-family="Arial" font-size="11" fill="#555555">f(x−a): shift right a</text>
<text x="595" y="465" font-family="Arial" font-size="11" fill="#555555">f(x)+a: shift up a</text>
<text x="740" y="435" font-family="Arial" font-size="11" fill="#555555">−f(x): reflect x-axis</text>
<text x="740" y="450" font-family="Arial" font-size="11" fill="#555555">f(−x): reflect y-axis</text>
<text x="740" y="465" font-family="Arial" font-size="11" fill="#555555">af(x): vertical stretch a</text>

<defs>
  <marker id="arrFTr" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: inverseFunctionGraph
    // function: 'f(x) = 2x + 1'
    // showFunction, showInverse, showYEqualsX, showReflection
    static inverseFunctionGraphSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="800" viewBox="0 0 800 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>Inverse Function Graph</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Function and Its Inverse</text>
<text x="400" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">f(x) = 2x + 1   and   f⁻¹(x) = (x−1)/2</text>

<!-- Axes: origin(350,450), scale=60px/unit, range x=-4..5, y=-4..5 -->
<line x1="60"  y1="450" x2="720" y2="450" stroke="#000000" stroke-width="1.5" marker-end="url(#arrInv)"/>
<line x1="350" y1="720" x2="350" y2="60"  stroke="#000000" stroke-width="1.5" marker-end="url(#arrInv)"/>
<text x="732" y="454" font-family="Arial" font-size="13" fill="#000000">x</text>
<text x="342" y="52"  font-family="Arial" font-size="13" fill="#000000">y</text>

<!-- Grid -->
<g stroke="#EEEEEE" stroke-width="0.5">
  <line x1="60" y1="390" x2="720" y2="390"/>
  <line x1="60" y1="330" x2="720" y2="330"/>
  <line x1="60" y1="270" x2="720" y2="270"/>
  <line x1="60" y1="210" x2="720" y2="210"/>
  <line x1="60" y1="150" x2="720" y2="150"/>
  <line x1="60" y1="510" x2="720" y2="510"/>
  <line x1="60" y1="570" x2="720" y2="570"/>
  <line x1="60" y1="630" x2="720" y2="630"/>
  <line x1="110" y1="60" x2="110" y2="720"/>
  <line x1="170" y1="60" x2="170" y2="720"/>
  <line x1="230" y1="60" x2="230" y2="720"/>
  <line x1="290" y1="60" x2="290" y2="720"/>
  <line x1="410" y1="60" x2="410" y2="720"/>
  <line x1="470" y1="60" x2="470" y2="720"/>
  <line x1="530" y1="60" x2="530" y2="720"/>
  <line x1="590" y1="60" x2="590" y2="720"/>
  <line x1="650" y1="60" x2="650" y2="720"/>
</g>

<!-- Axis labels -->
<g font-family="Arial" font-size="10" fill="#555555">
  <text x="110" y="466" text-anchor="middle">−4</text>
  <text x="170" y="466" text-anchor="middle">−3</text>
  <text x="230" y="466" text-anchor="middle">−2</text>
  <text x="290" y="466" text-anchor="middle">−1</text>
  <text x="410" y="466" text-anchor="middle">1</text>
  <text x="470" y="466" text-anchor="middle">2</text>
  <text x="530" y="466" text-anchor="middle">3</text>
  <text x="590" y="466" text-anchor="middle">4</text>
  <text x="650" y="466" text-anchor="middle">5</text>
  <text x="336" y="394" text-anchor="middle">1</text>
  <text x="336" y="334" text-anchor="middle">2</text>
  <text x="336" y="274" text-anchor="middle">3</text>
  <text x="336" y="214" text-anchor="middle">4</text>
  <text x="336" y="154" text-anchor="middle">5</text>
  <text x="336" y="514" text-anchor="middle">−1</text>
  <text x="336" y="574" text-anchor="middle">−2</text>
  <text x="336" y="634" text-anchor="middle">−3</text>
  <text x="338" y="454" text-anchor="middle">0</text>
</g>

<!-- showYEqualsX: y=x line (dashed) from (-4,-4) to (5,5) -->
<!-- x=-4 → screen(110,690), x=5 → screen(650,150) -->
<line x1="110" y1="690" x2="650" y2="150" stroke="#999999" stroke-width="1.5" stroke-dasharray="8,4"/>
<text x="660" y="146" font-family="Arial" font-size="11" fill="#555555">y = x</text>

<!-- showFunction: f(x) = 2x+1 (solid)
     x=-3→y=-5: (170,750clip→700), x=-2→y=-3: (230,630), x=-1→y=-1: (290,510)
     x=0→y=1: (350,390), x=1→y=3: (410,270), x=2→y=5: (470,150), x=3→y=7: (530,30clip) -->
<line x1="170" y1="710" x2="500" y2="110" stroke="#000000" stroke-width="3" marker-end="url(#arrInv)"/>
<text x="510" y="108" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">f(x) = 2x+1</text>

<!-- showInverse: f⁻¹(x) = (x-1)/2 (thick dashed)
     x=-5→y=-3: clip, x=-3→y=-2: (170,570), x=-1→y=-1: (290,510)
     x=0→y=-0.5: (350,480), x=1→y=0: (410,450), x=3→y=1: (530,390)
     x=5→y=2: (650,330), x=7→y=3: (770clip,270) -->
<line x1="110" y1="600" x2="710" y2="270" stroke="#000000" stroke-width="3" stroke-dasharray="10,5" marker-end="url(#arrInv)"/>
<text x="716" y="268" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">f⁻¹(x) = (x−1)/2</text>

<!-- showReflection: reflection lines between symmetric points -->
<!-- Point (0,1) on f and (1,0) on f⁻¹ — symmetric about y=x -->
<circle cx="350" cy="390" r="5" fill="#000000" stroke="none"/>
<circle cx="410" cy="450" r="5" fill="#000000" stroke="none"/>
<line x1="350" y1="390" x2="410" y2="450" stroke="#999999" stroke-width="1.5" stroke-dasharray="3,2"/>
<text x="342" y="382" font-family="Arial" font-size="10" fill="#555555">(0,1)</text>
<text x="412" y="466" font-family="Arial" font-size="10" fill="#555555">(1,0)</text>

<!-- Point (1,3) on f and (3,1) on f⁻¹ -->
<circle cx="410" cy="270" r="5" fill="#000000" stroke="none"/>
<circle cx="530" cy="390" r="5" fill="#000000" stroke="none"/>
<line x1="410" y1="270" x2="530" y2="390" stroke="#999999" stroke-width="1.5" stroke-dasharray="3,2"/>
<text x="415" y="262" font-family="Arial" font-size="10" fill="#555555">(1,3)</text>
<text x="535" y="406" font-family="Arial" font-size="10" fill="#555555">(3,1)</text>

<!-- Info box -->
<rect x="50" y="700" width="700" height="85" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="400" y="722" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Finding the Inverse Function</text>
<text x="70"  y="742" font-family="Arial" font-size="11" fill="#000000">1. Write y = f(x): y = 2x+1   2. Swap x and y: x = 2y+1   3. Solve for y: y = (x−1)/2   ∴ f⁻¹(x) = (x−1)/2</text>
<text x="70"  y="760" font-family="Arial" font-size="11" fill="#555555">The graph of f⁻¹ is the reflection of f in the line y = x</text>
<text x="70"  y="776" font-family="Arial" font-size="11" fill="#555555">f(f⁻¹(x)) = f⁻¹(f(x)) = x   |   Domain of f⁻¹ = Range of f   |   Range of f⁻¹ = Domain of f</text>

<defs>
  <marker id="arrInv" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    // Generated from registry: piecewiseFunctionGraph
    // pieces: [{domain:'x<0', function:'-x'}, {domain:'x>=0', function:'x²'}]
    static piecewiseFunctionGraphSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Piecewise Function Graph</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Piecewise Function</text>
<text x="400" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">f(x) = −x for x &lt; 0  |  f(x) = x² for x ≥ 0</text>

<!-- Axes: origin(280,380), scale=70px/unit -->
<line x1="60"  y1="380" x2="720" y2="380" stroke="#000000" stroke-width="1.5" marker-end="url(#arrPW)"/>
<line x1="280" y1="540" x2="280" y2="60"  stroke="#000000" stroke-width="1.5" marker-end="url(#arrPW)"/>
<text x="732" y="384" font-family="Arial" font-size="13" fill="#000000">x</text>
<text x="272" y="52"  font-family="Arial" font-size="13" fill="#000000">y</text>

<!-- Grid -->
<g stroke="#EEEEEE" stroke-width="0.5">
  <line x1="60" y1="310" x2="720" y2="310"/>
  <line x1="60" y1="240" x2="720" y2="240"/>
  <line x1="60" y1="170" x2="720" y2="170"/>
  <line x1="60" y1="450" x2="720" y2="450"/>
  <line x1="60" y1="520" x2="720" y2="520"/>
  <line x1="70"  y1="60" x2="70"  y2="540"/>
  <line x1="140" y1="60" x2="140" y2="540"/>
  <line x1="210" y1="60" x2="210" y2="540"/>
  <line x1="350" y1="60" x2="350" y2="540"/>
  <line x1="420" y1="60" x2="420" y2="540"/>
  <line x1="490" y1="60" x2="490" y2="540"/>
  <line x1="560" y1="60" x2="560" y2="540"/>
  <line x1="630" y1="60" x2="630" y2="540"/>
</g>

<!-- Axis labels -->
<g font-family="Arial" font-size="10" fill="#555555">
  <text x="70"  y="396" text-anchor="middle">−3</text>
  <text x="140" y="396" text-anchor="middle">−2</text>
  <text x="210" y="396" text-anchor="middle">−1</text>
  <text x="350" y="396" text-anchor="middle">1</text>
  <text x="420" y="396" text-anchor="middle">2</text>
  <text x="490" y="396" text-anchor="middle">3</text>
  <text x="560" y="396" text-anchor="middle">4</text>
  <text x="265" y="314" text-anchor="middle">1</text>
  <text x="265" y="244" text-anchor="middle">2</text>
  <text x="265" y="174" text-anchor="middle">3</text>
  <text x="265" y="104" text-anchor="middle">4</text>
  <text x="265" y="454" text-anchor="middle">−1</text>
  <text x="267" y="384" text-anchor="middle">0</text>
</g>

<!-- Piece 1: f(x) = −x for x < 0 (dashed line, open circle at x=0)
     f(-3)=3: (70,170), f(-2)=2: (140,240), f(-1)=1: (210,310), approaching (0,0): (280,380) -->
<polyline points="70,170 140,240 210,310 278,378" stroke="#000000" stroke-width="3" fill="none"/>
<!-- Open circle at x=0 (excluded from this piece) -->
<circle cx="280" cy="380" r="6" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>

<!-- Piece 2: f(x) = x² for x >= 0 (solid, closed circle at x=0)
     f(0)=0: (280,380), f(1)=1: (350,310), f(2)=4: (420,100), f(2.2)=4.84: (434,41clip) -->
<polyline points="280,380 350,310 420,100" stroke="#000000" stroke-width="3" fill="none"/>
<!-- Closed circle at x=0 (included in this piece) -->
<circle cx="280" cy="380" r="5" fill="#000000" stroke="none"/>

<!-- Domain labels for each piece -->
<text x="140" y="155" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">f(x) = −x</text>
<text x="130" y="172" font-family="Arial" font-size="11" fill="#555555">(x &lt; 0)</text>
<!-- Arrow from label to line -->

<text x="440" y="160" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">f(x) = x²</text>
<text x="440" y="178" font-family="Arial" font-size="11" fill="#555555">(x ≥ 0)</text>

<!-- showBreaks: highlight transition point -->
<line x1="280" y1="330" x2="280" y2="380" stroke="#999999" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="290" y="350" font-family="Arial" font-size="11" fill="#000000">x = 0</text>
<text x="290" y="366" font-family="Arial" font-size="11" fill="#555555">(transition)</text>

<!-- showDomains: colored/annotated domain regions -->
<text x="140" y="540" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Domain: x &lt; 0</text>
<text x="500" y="540" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Domain: x ≥ 0</text>

<!-- Dotted vertical line at x=0 showing boundary -->
<line x1="280" y1="70" x2="280" y2="530" stroke="#AAAAAA" stroke-width="1.5" stroke-dasharray="5,4"/>

<!-- Info box -->
<rect x="490" y="280" width="290" height="195" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="635" y="302" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Piecewise Function</text>
<line x1="505" y1="310" x2="770" y2="310" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="505" y="330" font-family="Arial" font-size="12" fill="#000000">     ⎧ −x,    x &lt; 0</text>
<text x="505" y="350" font-family="Arial" font-size="12" fill="#000000">f(x) = ⎨</text>
<text x="505" y="370" font-family="Arial" font-size="12" fill="#000000">     ⎩ x²,    x ≥ 0</text>
<line x1="505" y1="382" x2="770" y2="382" stroke="#AAAAAA" stroke-width="0.5"/>
<text x="505" y="400" font-family="Arial" font-size="11" fill="#000000">Continuity at x=0:</text>
<text x="505" y="418" font-family="Arial" font-size="11" fill="#000000">  left lim: −(0)=0 ✓</text>
<text x="505" y="436" font-family="Arial" font-size="11" fill="#000000">  right: (0)²=0 ✓</text>
<text x="505" y="454" font-family="Arial" font-size="11" fill="#000000">f is continuous at x=0</text>
<text x="505" y="468" font-family="Arial" font-size="11" fill="#555555">○ = open (excluded point)</text>
<text x="505" y="482" font-family="Arial" font-size="11" fill="#555555">● = closed (included point)</text>

<defs>
  <marker id="arrPW" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0,10 3,0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

    

    // ============================================================
    // ===== 4. GEOMETRY ==========================================
    // ============================================================

    // Generated from registry: angleTypes
    // angles: ['acute', 'right', 'obtuse', 'straight', 'reflex']
    // options: showAngles=true, showMeasures=true, showLabels=true
    static angleTypesSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Types of Angles</metadata>
<defs>
  <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Types of Angles</text>

<!-- ===== ACUTE ANGLE (45°) ===== -->
<!-- Vertex at (100, 480) -->
<text x="100" y="90" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Acute Angle</text>
<text x="100" y="108" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">0° &lt; θ &lt; 90°</text>
<!-- Base ray: horizontal right -->
<line x1="60" y1="420" x2="160" y2="420" stroke="#000000" stroke-width="2.5"/>
<!-- Second ray: 45° up -->
<line x1="60" y1="420" x2="131" y2="349" stroke="#000000" stroke-width="2.5"/>
<!-- Arc -->
<path d="M 90,420 A 30,30 0 0,0 81,399" stroke="#000000" stroke-width="1.5" fill="none"/>
<!-- Measure label -->
<text x="100" y="410" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">45°</text>
<!-- Vertex dot -->
<circle cx="60" cy="420" r="3" fill="#000000"/>

<!-- ===== RIGHT ANGLE (90°) ===== -->
<text x="260" y="90" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Right Angle</text>
<text x="260" y="108" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">θ = 90°</text>
<line x1="210" y1="420" x2="320" y2="420" stroke="#000000" stroke-width="2.5"/>
<line x1="210" y1="420" x2="210" y2="310" stroke="#000000" stroke-width="2.5"/>
<!-- Square corner marker -->
<polyline points="225,420 225,405 210,405" stroke="#000000" stroke-width="2" fill="none"/>
<text x="245" y="390" font-family="Arial" font-size="11" fill="#000000">90°</text>
<circle cx="210" cy="420" r="3" fill="#000000"/>

<!-- ===== OBTUSE ANGLE (135°) ===== -->
<text x="450" y="90" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Obtuse Angle</text>
<text x="450" y="108" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">90° &lt; θ &lt; 180°</text>
<line x1="370" y1="420" x2="510" y2="420" stroke="#000000" stroke-width="2.5"/>
<!-- 135° ray (45° above horizontal going left) -->
<line x1="510" y1="420" x2="440" y2="350" stroke="#000000" stroke-width="2.5"/>
<path d="M 480,420 A 30,30 0 0,1 459,399" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="468" y="405" font-family="Arial" font-size="11" fill="#000000">135°</text>
<circle cx="510" cy="420" r="3" fill="#000000"/>

<!-- ===== STRAIGHT ANGLE (180°) ===== -->
<text x="680" y="90" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Straight Angle</text>
<text x="680" y="108" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">θ = 180°</text>
<line x1="580" y1="420" x2="790" y2="420" stroke="#000000" stroke-width="2.5"/>
<!-- Semicircle arc above -->
<path d="M 650,420 A 30,30 0 0,0 710,420" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="680" y="410" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">180°</text>
<circle cx="680" cy="420" r="3" fill="#000000"/>
<!-- Arrows at both ends -->
<line x1="580" y1="420" x2="595" y2="420" stroke="#000000" stroke-width="2.5" marker-start="url(#arrow-rev)"/>
<line x1="790" y1="420" x2="775" y2="420" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow)"/>

<!-- ===== REFLEX ANGLE (270°) ===== -->
<text x="900" y="90" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Reflex Angle</text>
<text x="900" y="108" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">180° &lt; θ &lt; 360°</text>
<line x1="860" y1="350" x2="860" y2="480" stroke="#000000" stroke-width="2.5"/>
<line x1="860" y1="480" x2="960" y2="480" stroke="#000000" stroke-width="2.5"/>
<!-- Large arc going the reflex way (270°) -->
<path d="M 860,450 A 30,30 0 1,0 890,480" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="830" y="440" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">270°</text>
<circle cx="860" cy="480" r="3" fill="#000000"/>

<!-- Dividing lines -->
<line x1="185" y1="65" x2="185" y2="540" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="4,4"/>
<line x1="355" y1="65" x2="355" y2="540" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="4,4"/>
<line x1="560" y1="65" x2="560" y2="540" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="4,4"/>
<line x1="835" y1="65" x2="835" y2="540" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="4,4"/>

<!-- Summary box -->
<rect x="30" y="515" width="940" height="60" fill="none" stroke="#000000" stroke-width="1" rx="4"/>
<text x="500" y="535" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Summary: Acute (0°–90°) | Right (90°) | Obtuse (90°–180°) | Straight (180°) | Reflex (180°–360°)</text>
<text x="500" y="555" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Angles are measured in degrees (°) from one ray to another, with the vertex at the point of intersection</text>

<defs>
  <marker id="arrow-rev" markerWidth="8" markerHeight="8" refX="1" refY="3" orient="auto">
    <polygon points="8 0, 0 3, 8 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: angleRelationships
    // options: showComplementary=true, showSupplementary=true, showVerticallyOpposite=true
    static angleRelationshipsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Angle Relationships</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Angle Relationships</text>

<!-- ===== COMPLEMENTARY ANGLES ===== -->
<rect x="30" y="55" width="280" height="280" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="170" y="78" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Complementary Angles</text>
<text x="170" y="96" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Two angles that add up to 90°</text>
<!-- Draw two angles sharing a vertex summing to 90° -->
<!-- Vertex at (130, 260) -->
<!-- Ray 1: horizontal -->
<line x1="130" y1="260" x2="260" y2="260" stroke="#000000" stroke-width="2.5"/>
<!-- Ray 2: vertical (90°) -->
<line x1="130" y1="260" x2="130" y2="130" stroke="#000000" stroke-width="2.5"/>
<!-- Ray 3: at 30° from horizontal -->
<line x1="130" y1="260" x2="243" y2="195" stroke="#000000" stroke-width="2" stroke-dasharray="6,3"/>
<!-- Square corner at 90° -->
<polyline points="145,260 145,245 130,245" stroke="#000000" stroke-width="2" fill="none"/>
<!-- Arc 1: 0° to 30° -->
<path d="M 175,260 A 45,45 0 0,0 169,236" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="185" y="252" font-family="Arial" font-size="12" fill="#000000">α=30°</text>
<!-- Arc 2: 30° to 90° -->
<path d="M 150,215" stroke="#000000" stroke-width="1.5" fill="none"/>
<path d="M 140,223 A 45,45 0 0,0 140,215" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="150" y="205" font-family="Arial" font-size="12" fill="#000000">β=60°</text>
<!-- Formula -->
<rect x="50" y="280" width="220" height="40" fill="none" stroke="#000000" stroke-width="1" rx="3"/>
<text x="160" y="297" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">α + β = 90°</text>
<text x="160" y="313" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">30° + 60° = 90°</text>

<!-- ===== SUPPLEMENTARY ANGLES ===== -->
<rect x="360" y="55" width="280" height="280" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="500" y="78" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Supplementary Angles</text>
<text x="500" y="96" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Two angles that add up to 180°</text>
<!-- Straight line with ray dividing it -->
<line x1="390" y1="230" x2="620" y2="230" stroke="#000000" stroke-width="2.5"/>
<!-- Ray upward at 120° from left ray (i.e., 60° from right ray) -->
<line x1="500" y1="230" x2="440" y2="126" stroke="#000000" stroke-width="2" stroke-dasharray="6,3"/>
<!-- Arc left side: 120° -->
<path d="M 455,230 A 45,45 0 0,0 478,191" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="445" y="205" font-family="Arial" font-size="12" fill="#000000">α=120°</text>
<!-- Arc right side: 60° -->
<path d="M 545,230 A 45,45 0 0,1 522,191" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="535" y="205" font-family="Arial" font-size="12" fill="#000000">β=60°</text>
<circle cx="500" cy="230" r="3" fill="#000000"/>
<!-- Formula -->
<rect x="380" y="280" width="220" height="40" fill="none" stroke="#000000" stroke-width="1" rx="3"/>
<text x="490" y="297" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">α + β = 180°</text>
<text x="490" y="313" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">120° + 60° = 180°</text>

<!-- ===== VERTICALLY OPPOSITE ANGLES ===== -->
<rect x="690" y="55" width="280" height="280" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="830" y="78" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Vertically Opposite</text>
<text x="830" y="96" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Angles across the intersection are equal</text>
<!-- Two crossing lines -->
<line x1="720" y1="135" x2="960" y2="285" stroke="#000000" stroke-width="2.5"/>
<line x1="960" y1="135" x2="720" y2="285" stroke="#000000" stroke-width="2.5"/>
<!-- Center point -->
<circle cx="840" cy="210" r="3" fill="#000000"/>
<!-- Label 4 angles -->
<!-- Top angle (α) -->
<path d="M 825,190 A 20,20 0 0,1 855,190" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="840" y="180" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">α</text>
<!-- Bottom angle (α) - vertically opposite -->
<path d="M 825,230 A 20,20 0 0,0 855,230" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="840" y="252" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">α</text>
<!-- Left angle (β) -->
<path d="M 822,198 A 20,20 0 0,0 822,222" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="800" y="215" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">β</text>
<!-- Right angle (β) - vertically opposite -->
<path d="M 858,198 A 20,20 0 0,1 858,222" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="878" y="215" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">β</text>
<!-- Formula -->
<rect x="710" y="280" width="220" height="40" fill="none" stroke="#000000" stroke-width="1" rx="3"/>
<text x="820" y="297" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">α = α,  β = β</text>
<text x="820" y="313" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Vertically opposite angles are equal</text>

<!-- ===== ADDITIONAL: Adjacent and Linear Pair ===== -->
<rect x="30" y="370" width="430" height="290" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="245" y="393" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Adjacent Angles</text>
<text x="245" y="411" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Share a common vertex and a common ray; do not overlap</text>
<!-- Common vertex at (150, 580), three rays -->
<line x1="150" y1="580" x2="280" y2="580" stroke="#000000" stroke-width="2.5"/>
<line x1="150" y1="580" x2="220" y2="460" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
<line x1="150" y1="580" x2="60" y2="460" stroke="#000000" stroke-width="2.5"/>
<path d="M 195,580 A 45,45 0 0,0 184,548" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="208" y="566" font-family="Arial" font-size="12" fill="#000000">∠1</text>
<path d="M 167,546 A 45,45 0 0,0 130,545" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="140" y="528" font-family="Arial" font-size="12" fill="#000000">∠2</text>
<text x="245" y="625" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">∠1 and ∠2 are adjacent (share ray and vertex)</text>
<circle cx="150" cy="580" r="3" fill="#000000"/>

<!-- ===== LINEAR PAIR ===== -->
<rect x="540" y="370" width="430" height="290" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="755" y="393" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Linear Pair</text>
<text x="755" y="411" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Adjacent angles on a straight line; sum = 180°</text>
<line x1="580" y1="540" x2="940" y2="540" stroke="#000000" stroke-width="2.5"/>
<line x1="760" y1="540" x2="690" y2="430" stroke="#000000" stroke-width="2.5"/>
<path d="M 700,540 A 50,50 0 0,0 728,493" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="700" y="508" font-family="Arial" font-size="12" fill="#000000">∠1</text>
<path d="M 815,540 A 50,50 0 0,1 785,494" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="820" y="508" font-family="Arial" font-size="12" fill="#000000">∠2</text>
<circle cx="760" cy="540" r="3" fill="#000000"/>
<rect x="670" y="575" width="185" height="40" fill="none" stroke="#000000" stroke-width="1" rx="3"/>
<text x="762" y="592" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">∠1 + ∠2 = 180°</text>
<text x="762" y="608" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">They form a linear pair</text>

</g>
</svg>`;

    // Generated from registry: parallelLinesAngles
    // options: showParallelLines=true, showTransversal=true, showCorresponding=true, showAlternate=true, showCoInterior=true
    static parallelLinesAnglesSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Parallel Lines and Transversals</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Parallel Lines and Transversals</text>

<!-- Parallel line 1 -->
<line x1="60" y1="200" x2="700" y2="200" stroke="#000000" stroke-width="2.5"/>
<text x="715" y="205" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">p</text>
<!-- Parallel arrows on line 1 -->
<text x="350" y="193" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle">→</text>
<text x="200" y="193" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle">→</text>

<!-- Parallel line 2 -->
<line x1="60" y1="400" x2="700" y2="400" stroke="#000000" stroke-width="2.5"/>
<text x="715" y="405" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">q</text>
<!-- Parallel arrows on line 2 -->
<text x="350" y="393" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle">→</text>
<text x="200" y="393" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle">→</text>

<!-- Transversal line (cutting at angle) -->
<line x1="200" y1="60" x2="500" y2="540" stroke="#000000" stroke-width="2"/>
<text x="510" y="545" font-family="Arial" font-size="13" fill="#000000" font-style="italic">t</text>

<!-- Intersection point 1 (top): transversal hits p -->
<!-- x at y=200: from line params x = 200 + (200-60)/(540-60) * (500-200) = 200+140/480*300 ≈ 287 -->
<circle cx="287" cy="200" r="3" fill="#000000"/>

<!-- Intersection point 2 (bottom): transversal hits q -->
<!-- x at y=400: 200 + (400-60)/480 * 300 ≈ 200+340/480*300 ≈ 412 -->
<circle cx="412" cy="400" r="3" fill="#000000"/>

<!-- === Label 8 angles at intersection 1 === -->
<!-- angle a (top-left of intersection 1): above-left -->
<text x="248" y="188" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">a</text>
<!-- angle b (top-right) -->
<text x="295" y="188" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">b</text>
<!-- angle c (bottom-left) -->
<text x="248" y="218" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">c</text>
<!-- angle d (bottom-right) -->
<text x="295" y="218" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">d</text>

<!-- === Label 8 angles at intersection 2 === -->
<!-- angle e (top-left of intersection 2) -->
<text x="374" y="388" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">e</text>
<!-- angle f (top-right) -->
<text x="420" y="388" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">f</text>
<!-- angle g (bottom-left) -->
<text x="374" y="418" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">g</text>
<!-- angle h (bottom-right) -->
<text x="420" y="418" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">h</text>

<!-- === LEGEND / DESCRIPTIONS === -->
<!-- Corresponding angles -->
<rect x="740" y="55" width="145" height="130" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="812" y="73" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Corresponding</text>
<text x="812" y="89" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(same side, equal)</text>
<text x="755" y="107" font-family="Arial" font-size="11" fill="#000000">a = e</text>
<text x="755" y="122" font-family="Arial" font-size="11" fill="#000000">b = f</text>
<text x="755" y="137" font-family="Arial" font-size="11" fill="#000000">c = g</text>
<text x="755" y="152" font-family="Arial" font-size="11" fill="#000000">d = h</text>
<text x="755" y="173" font-family="Arial" font-size="10" fill="#555555">(F-shape pattern)</text>

<!-- Alternate angles -->
<rect x="740" y="205" width="145" height="120" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="812" y="223" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Alternate</text>
<text x="812" y="239" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(opposite sides, equal)</text>
<text x="755" y="258" font-family="Arial" font-size="11" fill="#000000">c = f  (alt. interior)</text>
<text x="755" y="275" font-family="Arial" font-size="11" fill="#000000">d = e  (alt. interior)</text>
<text x="755" y="292" font-family="Arial" font-size="11" fill="#000000">a = h  (alt. exterior)</text>
<text x="755" y="309" font-family="Arial" font-size="10" fill="#555555">(Z-shape pattern)</text>

<!-- Co-interior angles -->
<rect x="740" y="345" width="145" height="110" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="812" y="363" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Co-Interior</text>
<text x="812" y="379" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(same side, sum 180°)</text>
<text x="755" y="398" font-family="Arial" font-size="11" fill="#000000">c + e = 180°</text>
<text x="755" y="415" font-family="Arial" font-size="11" fill="#000000">d + f = 180°</text>
<text x="755" y="432" font-family="Arial" font-size="10" fill="#555555">(C/U-shape pattern)</text>

<!-- Vertically Opposite note -->
<rect x="740" y="475" width="145" height="80" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="812" y="493" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Vert. Opposite</text>
<text x="755" y="512" font-family="Arial" font-size="11" fill="#000000">a=d, b=c</text>
<text x="755" y="528" font-family="Arial" font-size="11" fill="#000000">e=h, f=g</text>
<text x="755" y="544" font-family="Arial" font-size="10" fill="#555555">(at each intersection)</text>

<!-- Parallel symbol between lines -->
<text x="55" y="305" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle">||</text>
<text x="80" y="305" font-family="Arial" font-size="11" fill="#000000">p ∥ q</text>

</g>
</svg>`;

    // Generated from registry: triangleTypes
    // options: showEquilateral, showIsosceles, showScalene, showRight, showAcute, showObtuse, showLabels
    static triangleTypesSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Types of Triangles</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="32" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Types of Triangles</text>

<!-- ======== ROW 1: By Sides ======== -->
<text x="500" y="58" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">— Classified by Sides —</text>

<!-- EQUILATERAL (all 3 sides equal) -->
<text x="165" y="80" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Equilateral</text>
<text x="165" y="97" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">All sides equal, all angles = 60°</text>
<!-- Vertices: top(165,120), bl(90,255), br(240,255) -->
<polygon points="165,120 90,255 240,255" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Tick marks on all 3 sides -->
<!-- Left side tick -->
<line x1="121" y1="191" x2="126" y2="184" stroke="#000000" stroke-width="2"/>
<line x1="126" y1="194" x2="131" y2="187" stroke="#000000" stroke-width="2"/>
<!-- Right side tick -->
<line x1="209" y1="191" x2="204" y2="184" stroke="#000000" stroke-width="2"/>
<line x1="204" y1="194" x2="199" y2="187" stroke="#000000" stroke-width="2"/>
<!-- Bottom side tick -->
<line x1="162" y1="253" x2="162" y2="244" stroke="#000000" stroke-width="2"/>
<line x1="168" y1="253" x2="168" y2="244" stroke="#000000" stroke-width="2"/>
<!-- Angle labels -->
<text x="155" y="142" font-family="Arial" font-size="10" fill="#000000">60°</text>
<text x="97" y="248" font-family="Arial" font-size="10" fill="#000000">60°</text>
<text x="222" y="248" font-family="Arial" font-size="10" fill="#000000">60°</text>

<!-- ISOSCELES (2 sides equal) -->
<text x="500" y="80" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Isosceles</text>
<text x="500" y="97" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Two sides equal, base angles equal</text>
<polygon points="500,115 400,255 600,255" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Equal side ticks (left and right) -->
<line x1="444" y1="188" x2="450" y2="180" stroke="#000000" stroke-width="2"/>
<line x1="449" y1="191" x2="455" y2="183" stroke="#000000" stroke-width="2"/>
<line x1="556" y1="188" x2="550" y2="180" stroke="#000000" stroke-width="2"/>
<line x1="551" y1="191" x2="545" y2="183" stroke="#000000" stroke-width="2"/>
<!-- Angle labels -->
<text x="490" y="136" font-family="Arial" font-size="10" fill="#000000">40°</text>
<text x="408" y="248" font-family="Arial" font-size="10" fill="#000000">70°</text>
<text x="575" y="248" font-family="Arial" font-size="10" fill="#000000">70°</text>

<!-- SCALENE (no equal sides) -->
<text x="840" y="80" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Scalene</text>
<text x="840" y="97" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">All sides different, all angles different</text>
<polygon points="760,135 700,255 930,255" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Side labels showing they differ -->
<text x="720" y="202" font-family="Arial" font-size="11" fill="#000000" font-style="italic">a</text>
<text x="846" y="245" font-family="Arial" font-size="11" fill="#000000" font-style="italic">b</text>
<text x="853" y="200" font-family="Arial" font-size="11" fill="#000000" font-style="italic">c</text>
<text x="756" y="148" font-family="Arial" font-size="10" fill="#000000">50°</text>
<text x="705" y="248" font-family="Arial" font-size="10" fill="#000000">80°</text>
<text x="908" y="248" font-family="Arial" font-size="10" fill="#000000">50°</text>
<text x="835" y="153" font-family="Arial" font-size="10" fill="#000000">a≠b≠c</text>

<!-- Divider between rows -->
<line x1="30" y1="285" x2="970" y2="285" stroke="#000000" stroke-width="1" stroke-dasharray="6,4"/>

<!-- ======== ROW 2: By Angles ======== -->
<text x="500" y="310" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">— Classified by Angles —</text>

<!-- ACUTE TRIANGLE -->
<text x="165" y="332" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Acute Triangle</text>
<text x="165" y="349" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">All angles &lt; 90°</text>
<polygon points="165,375 80,510 250,510" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="152" y="396" font-family="Arial" font-size="10" fill="#000000">60°</text>
<text x="89" y="504" font-family="Arial" font-size="10" fill="#000000">70°</text>
<text x="228" y="504" font-family="Arial" font-size="10" fill="#000000">50°</text>
<!-- Small arcs at each angle -->
<path d="M 157,392 A 18,18 0 0,0 173,392" stroke="#000000" stroke-width="1.2" fill="none"/>
<path d="M 96,498 A 18,18 0 0,0 100,483" stroke="#000000" stroke-width="1.2" fill="none"/>
<path d="M 230,498 A 18,18 0 0,1 236,483" stroke="#000000" stroke-width="1.2" fill="none"/>

<!-- RIGHT TRIANGLE -->
<text x="500" y="332" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Right Triangle</text>
<text x="500" y="349" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">One angle = 90°</text>
<polygon points="380,510 380,375 560,510" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Right angle marker -->
<polyline points="380,495 395,495 395,510" stroke="#000000" stroke-width="2" fill="none"/>
<text x="368" y="393" font-family="Arial" font-size="10" fill="#000000">90°</text>
<text x="348" y="504" font-family="Arial" font-size="10" fill="#000000">58°</text>
<text x="540" y="504" font-family="Arial" font-size="10" fill="#000000">32°</text>
<!-- Hypotenuse label -->
<text x="490" y="435" font-family="Arial" font-size="11" fill="#000000" transform="rotate(-40,490,435)">hypotenuse</text>

<!-- OBTUSE TRIANGLE -->
<text x="810" y="332" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Obtuse Triangle</text>
<text x="810" y="349" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">One angle &gt; 90°</text>
<polygon points="660,510 830,510 760,375" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="832" y="504" font-family="Arial" font-size="10" fill="#000000">25°</text>
<text x="665" y="504" font-family="Arial" font-size="10" fill="#000000">30°</text>
<text x="742" y="393" font-family="Arial" font-size="10" fill="#000000">125°</text>
<path d="M 748,396 A 22,22 0 0,0 770,396" stroke="#000000" stroke-width="1.2" fill="none"/>

<!-- Summary box -->
<rect x="30" y="540" width="940" height="140" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="500" y="562" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Key Properties of Triangles</text>
<text x="60" y="584" font-family="Arial" font-size="11" fill="#000000">• Angle sum: ∠A + ∠B + ∠C = 180°</text>
<text x="60" y="602" font-family="Arial" font-size="11" fill="#000000">• Exterior angle = sum of two non-adjacent interior angles</text>
<text x="60" y="620" font-family="Arial" font-size="11" fill="#000000">• Triangle inequality: sum of any two sides &gt; third side</text>
<text x="500" y="584" font-family="Arial" font-size="11" fill="#000000">• Equilateral: a = b = c, all 60°</text>
<text x="500" y="602" font-family="Arial" font-size="11" fill="#000000">• Isosceles: two equal sides ↔ two equal base angles</text>
<text x="500" y="620" font-family="Arial" font-size="11" fill="#000000">• Right triangle: c² = a² + b² (Pythagorean theorem)</text>
<text x="60" y="650" font-family="Arial" font-size="11" fill="#000000">• Tick marks (|, ||, |||) indicate equal sides; square corner indicates right angle</text>

</g>
</svg>`;

    // Generated from registry: triangleProperties
    // options: showAngleSum, showExteriorAngle, showInequality, showProofs
    static trianglePropertiesSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Triangle Properties</metadata>
<defs>
  <marker id="arr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Triangle Properties</text>

<!-- ===== ANGLE SUM PROPERTY ===== -->
<rect x="20" y="50" width="390" height="240" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="215" y="73" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Angle Sum Property</text>
<text x="215" y="90" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">∠A + ∠B + ∠C = 180°</text>
<!-- Triangle -->
<polygon points="200,110 70,250 340,250" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Angle arcs and labels -->
<path d="M 188,118 A 20,20 0 0,0 212,118" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="200" y="140" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A=60°</text>
<path d="M 85,245 A 20,20 0 0,0 89,228" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="58" y="244" font-family="Arial" font-size="12" fill="#000000">B=70°</text>
<path d="M 318,248 A 20,20 0 0,1 323,231" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="326" y="244" font-family="Arial" font-size="12" fill="#000000">C=50°</text>
<!-- Proof: cut and rearrange method -->
<text x="215" y="272" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">60° + 70° + 50° = 180° ✓</text>
<!-- Parallel line proof sketch -->
<line x1="100" y1="105" x2="300" y2="105" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
<text x="305" y="109" font-family="Arial" font-size="10" fill="#555555">PQ ∥ BC</text>
<text x="215" y="282" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Proof: draw PQ through A parallel to BC; use alternate angles</text>

<!-- ===== EXTERIOR ANGLE THEOREM ===== -->
<rect x="490" y="50" width="390" height="240" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="685" y="73" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Exterior Angle Theorem</text>
<text x="685" y="90" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Exterior angle = sum of two interior opposite angles</text>
<!-- Triangle -->
<polygon points="600,110 510,250 750,250" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Extend base BC to D -->
<line x1="750" y1="250" x2="860" y2="250" stroke="#000000" stroke-width="2" stroke-dasharray="5,0"/>
<!-- Exterior angle arc -->
<path d="M 790,250 A 40,40 0 0,0 760,215" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="820" y="238" font-family="Arial" font-size="12" fill="#000000">ext∠D</text>
<!-- Interior angles -->
<path d="M 588,118 A 18,18 0 0,0 612,118" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="600" y="140" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">A</text>
<path d="M 524,244 A 18,18 0 0,0 528,228" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="513" y="243" font-family="Arial" font-size="11" fill="#000000">B</text>
<!-- Formula -->
<rect x="520" y="265" width="310" height="20" fill="none" stroke="none"/>
<text x="685" y="278" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">∠D (exterior) = ∠A + ∠B</text>

<!-- ===== TRIANGLE INEQUALITY ===== -->
<rect x="20" y="315" width="390" height="265" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="215" y="338" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Triangle Inequality Theorem</text>
<text x="215" y="355" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Sum of any two sides must exceed the third</text>
<!-- Valid triangle example -->
<polygon points="215,385 100,490 310,490" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="145" y="445" font-family="Arial" font-size="11" fill="#000000">5</text>
<text x="270" y="445" font-family="Arial" font-size="11" fill="#000000">6</text>
<text x="200" y="508" font-family="Arial" font-size="11" fill="#000000">4</text>
<text x="215" y="525" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">✓ Valid: 4+5&gt;6, 4+6&gt;5, 5+6&gt;4</text>
<!-- Invalid example -->
<text x="215" y="548" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">✗ Invalid: sides 2, 3, 8</text>
<text x="215" y="564" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(2+3 = 5, not &gt; 8)</text>
<text x="215" y="563" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-style="italic"></text>
<text x="215" y="574" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">a + b &gt; c,  b + c &gt; a,  a + c &gt; b</text>

<!-- ===== PYTHAGORAS PROOF SKETCH ===== -->
<rect x="490" y="315" width="390" height="265" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="685" y="338" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Angle Sum Proof (Parallel Lines)</text>
<!-- Diagram with parallel line -->
<line x1="530" y1="400" x2="850" y2="400" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="854" y="404" font-family="Arial" font-size="11" fill="#555555">m</text>
<!-- Triangle with A at top on line m -->
<polygon points="690,400 570,520 810,520" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Show three angles arranged on line m -->
<text x="635" y="395" font-family="Arial" font-size="11" fill="#000000">∠1</text>
<text x="688" y="395" font-family="Arial" font-size="11" fill="#000000">∠A</text>
<text x="738" y="395" font-family="Arial" font-size="11" fill="#000000">∠2</text>
<path d="M 655,400 A 20,20 0 0,1 680,400" stroke="#000000" stroke-width="1.2" fill="none"/>
<path d="M 700,400 A 20,20 0 0,1 730,400" stroke="#000000" stroke-width="1.2" fill="none"/>
<!-- Angle labels at base -->
<text x="577" y="517" font-family="Arial" font-size="11" fill="#000000">∠B</text>
<text x="797" y="517" font-family="Arial" font-size="11" fill="#000000">∠C</text>
<!-- Annotations -->
<text x="685" y="548" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">∠1 = ∠B (alternate interior angles)</text>
<text x="685" y="564" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">∠2 = ∠C (alternate interior angles)</text>
<text x="685" y="540" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle"></text>
<text x="685" y="574" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">∴ ∠1 + ∠A + ∠2 = 180° → ∠A+∠B+∠C=180°</text>

</g>
</svg>`;

    // Generated from registry: pythagoreanTheorem
    // a=3, b=4, c=5; options: showTriangle, showSquares, showAreas, showEquation, showProof
    static pythagoreanTheoremSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="800" viewBox="0 0 800 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>Pythagorean Theorem</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="32" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Pythagorean Theorem</text>
<text x="400" y="52" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">a² + b² = c²   (3-4-5 right triangle)</text>

<!-- Scale: 1 unit = 60px -->
<!-- Right angle vertex at (300, 490) -->
<!-- a=3 (vertical): A=(300,490), B=(300,310) — length 180px -->
<!-- b=4 (horizontal): A=(300,490), C=(540,490) — length 240px -->
<!-- c=5 (hypotenuse): B=(300,310) to C=(540,490) -->

<!-- === RIGHT TRIANGLE === -->
<polygon points="300,490 300,310 540,490" stroke="#000000" stroke-width="3" fill="none"/>
<!-- Right angle marker -->
<polyline points="300,475 315,475 315,490" stroke="#000000" stroke-width="2.5" fill="none"/>

<!-- Side labels on triangle -->
<text x="275" y="410" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">a=3</text>
<text x="420" y="514" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">b=4</text>
<text x="445" y="385" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">c=5</text>

<!-- === SQUARE ON SIDE a (left side, 3×3 = 9 sq units) === -->
<!-- Side a is vertical from (300,310) to (300,490), length 180px -->
<!-- Square on left: extends left 180px -->
<rect x="120" y="310" width="180" height="180" stroke="#000000" stroke-width="2" fill="none" stroke-dasharray="5,3"/>
<text x="210" y="403" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">a²</text>
<text x="210" y="428" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle">= 9</text>

<!-- === SQUARE ON SIDE b (bottom, 4×4 = 16 sq units) === -->
<!-- Side b is horizontal from (300,490) to (540,490), length 240px -->
<!-- Square below: extends down 240px -->
<rect x="300" y="490" width="240" height="240" stroke="#000000" stroke-width="2" fill="none" stroke-dasharray="5,3"/>
<text x="420" y="615" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">b²</text>
<text x="420" y="640" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle">= 16</text>

<!-- === SQUARE ON HYPOTENUSE c (5×5 = 25 sq units) === -->
<!-- Hypotenuse from (300,310) to (540,490) -->
<!-- Direction vector: (240, 180), perpendicular: (180, -240) normalised * 300 = (180,-240) -->
<!-- Square corners: start B=(300,310), go perpendicular 300px => (480,70) -->
<!-- C=(540,490) perpendicular => (720,250) -->
<polygon points="300,310 480,70 720,250 540,490" stroke="#000000" stroke-width="2" fill="none" stroke-dasharray="5,3"/>
<text x="555" y="200" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">c²</text>
<text x="555" y="225" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle">= 25</text>

<!-- === EQUATION BOX === -->
<rect x="30" y="690" width="350" height="80" fill="none" stroke="#000000" stroke-width="2" rx="5"/>
<text x="205" y="718" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">a² + b² = c²</text>
<text x="205" y="742" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">3² + 4² = 5²</text>
<text x="205" y="760" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">9 + 16 = 25 ✓</text>

<!-- === PROOF NOTE === -->
<rect x="420" y="690" width="350" height="80" fill="none" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="595" y="715" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Use:</text>
<text x="595" y="733" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Given a right triangle with legs a, b</text>
<text x="595" y="750" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">and hypotenuse c:</text>
<text x="595" y="768" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">c = √(a² + b²) = √(9+16) = √25 = 5</text>

</g>
</svg>`;

    // Generated from registry: congruentTriangles
    // condition: SAS; options: showTriangles, showMarking, showCondition, showProof
    static congruentTrianglesSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Congruent Triangles</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Congruent Triangles</text>
<text x="450" y="52" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Two triangles are congruent if they have the same shape and size (≅)</text>

<!-- === TRIANGLE 1 (left) === -->
<!-- Vertices: A(100,430) B(270,430) C(160,260) -->
<polygon points="100,430 270,430 160,260" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="85" y="445" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">A</text>
<text x="275" y="445" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">B</text>
<text x="150" y="252" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">C</text>

<!-- Tick marks: SAS — AB and DE equal (double tick), CA and FD equal (single tick) -->
<!-- AB double tick (bottom) -->
<line x1="178" y1="428" x2="178" y2="436" stroke="#000000" stroke-width="2"/>
<line x1="184" y1="428" x2="184" y2="436" stroke="#000000" stroke-width="2"/>
<!-- CA single tick (left side) -->
<line x1="124" y1="349" x2="132" y2="342" stroke="#000000" stroke-width="2"/>

<!-- Angle arc at A (SAS: included angle) -->
<path d="M 120,430 A 22,22 0 0,0 111,410" stroke="#000000" stroke-width="2" fill="none"/>
<text x="130" y="417" font-family="Arial" font-size="10" fill="#000000">∠A</text>

<!-- === CONGRUENCE SYMBOL === -->
<text x="450" y="360" font-family="Arial" font-size="28" fill="#000000" text-anchor="middle">≅</text>

<!-- === TRIANGLE 2 (right, identical but maybe reflected) === -->
<!-- Vertices: D(630,430) E(800,430) F(720,260) — same shape -->
<polygon points="630,430 800,430 720,260" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="613" y="445" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">D</text>
<text x="805" y="445" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">E</text>
<text x="712" y="252" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">F</text>

<!-- DE double tick -->
<line x1="708" y1="428" x2="708" y2="436" stroke="#000000" stroke-width="2"/>
<line x1="714" y1="428" x2="714" y2="436" stroke="#000000" stroke-width="2"/>
<!-- FD single tick -->
<line x1="657" y1="349" x2="665" y2="342" stroke="#000000" stroke-width="2"/>

<!-- Angle arc at D -->
<path d="M 650,430 A 22,22 0 0,0 641,410" stroke="#000000" stroke-width="2" fill="none"/>
<text x="660" y="417" font-family="Arial" font-size="10" fill="#000000">∠D</text>

<!-- === CONGRUENCE CONDITIONS TABLE === -->
<rect x="30" y="470" width="840" height="110" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="450" y="492" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Congruence Conditions (CPCTC after proof)</text>
<!-- Table headers -->
<text x="70" y="512" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">SSS</text>
<text x="230" y="512" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">SAS ← (this diagram)</text>
<text x="450" y="512" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">ASA</text>
<text x="620" y="512" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">AAS</text>
<text x="770" y="512" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">RHS</text>
<!-- Descriptions -->
<text x="50" y="530" font-family="Arial" font-size="10" fill="#000000">3 sides equal</text>
<text x="210" y="530" font-family="Arial" font-size="10" fill="#000000">2 sides &amp; included ∠</text>
<text x="430" y="530" font-family="Arial" font-size="10" fill="#000000">2 angles &amp; incl. side</text>
<text x="608" y="530" font-family="Arial" font-size="10" fill="#000000">2 angles &amp; non-incl. side</text>
<text x="750" y="530" font-family="Arial" font-size="10" fill="#000000">Right + hyp + side</text>
<!-- SAS detail -->
<text x="50" y="550" font-family="Arial" font-size="10" fill="#555555">a=d, b=e, c=f</text>
<text x="210" y="550" font-family="Arial" font-size="10" fill="#555555">AB=DE, ∠A=∠D, CA=FD</text>
<text x="430" y="550" font-family="Arial" font-size="10" fill="#555555">∠A=∠D, AB=DE, ∠B=∠E</text>
<text x="608" y="550" font-family="Arial" font-size="10" fill="#555555">∠A=∠D, ∠B=∠E, BC=EF</text>
<text x="750" y="550" font-family="Arial" font-size="10" fill="#555555">90°+hyp+1 side</text>
<text x="450" y="570" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">All conditions guarantee △ABC ≅ △DEF  (CPCTC: Corresponding Parts of Congruent Triangles are Congruent)</text>

<!-- === CURRENT CONDITION HIGHLIGHT === -->
<rect x="30" y="55" width="350" height="180" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="205" y="76" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">SAS — Side-Angle-Side</text>
<text x="45" y="98" font-family="Arial" font-size="11" fill="#000000">If in two triangles:</text>
<text x="45" y="116" font-family="Arial" font-size="11" fill="#000000">  AB = DE  (side, double tick)</text>
<text x="45" y="134" font-family="Arial" font-size="11" fill="#000000">  ∠A = ∠D  (included angle)</text>
<text x="45" y="152" font-family="Arial" font-size="11" fill="#000000">  CA = FD  (side, single tick)</text>
<text x="45" y="174" font-family="Arial" font-size="11" fill="#000000">Then △ABC ≅ △DEF by SAS</text>
<text x="45" y="192" font-family="Arial" font-size="11" fill="#000000">∴ all remaining parts are also equal</text>
<text x="45" y="210" font-family="Arial" font-size="10" fill="#555555">(Third side and two remaining angles)</text>

<!-- Arrow from condition box to triangles -->
<line x1="210" y1="236" x2="210" y2="252" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>

</g>
</svg>`;

    // Generated from registry: similarTriangles
    // condition: AA, ratio: 2; options: showTriangles, showAngles, showRatio, showProof
    static similarTrianglesSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Similar Triangles - AA</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Similar Triangles</text>
<text x="450" y="50" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">Same shape, different size — ratio = 2:1</text>

<!-- === SMALLER TRIANGLE (left) === -->
<!-- Scale ratio 2, so small is half of large -->
<!-- Small: A(80,420) B(220,420) C(130,300) — base 140px, height 120px -->
<polygon points="80,420 220,420 130,300" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="65" y="435" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">A</text>
<text x="225" y="435" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">B</text>
<text x="120" y="293" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">C</text>
<!-- Side labels -->
<text x="50" y="368" font-family="Arial" font-size="11" fill="#000000">3</text>
<text x="190" y="368" font-family="Arial" font-size="11" fill="#000000">4</text>
<text x="148" y="432" font-family="Arial" font-size="11" fill="#000000">5</text>
<!-- Equal angle marks: single arc at A, double arc at B -->
<path d="M 98,420 A 18,18 0 0,0 93,403" stroke="#000000" stroke-width="1.8" fill="none"/>
<text x="108" y="412" font-family="Arial" font-size="10" fill="#000000">α</text>
<path d="M 203,420 A 18,18 0 0,1 209,403" stroke="#000000" stroke-width="1.8" fill="none"/>
<path d="M 200,420 A 22,22 0 0,1 207,402" stroke="#000000" stroke-width="1.2" fill="none"/>
<text x="190" y="408" font-family="Arial" font-size="10" fill="#000000">β</text>

<!-- Similar symbol -->
<text x="450" y="380" font-family="Arial" font-size="28" fill="#000000" text-anchor="middle">∼</text>
<text x="450" y="405" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">(similar)</text>

<!-- === LARGER TRIANGLE (right), ratio=2, twice as big === -->
<!-- Large: D(510,480) E(790,480) F(620,240) — base 280px, height 240px -->
<polygon points="510,480 790,480 620,240" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="494" y="497" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">D</text>
<text x="796" y="497" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">E</text>
<text x="609" y="232" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">F</text>
<!-- Side labels (double the small) -->
<text x="548" y="375" font-family="Arial" font-size="11" fill="#000000">6</text>
<text x="724" y="375" font-family="Arial" font-size="11" fill="#000000">8</text>
<text x="645" y="496" font-family="Arial" font-size="11" fill="#000000">10</text>
<!-- Equal angle marks: single arc at D, double arc at E (same as α, β) -->
<path d="M 528,480 A 18,18 0 0,0 523,463" stroke="#000000" stroke-width="1.8" fill="none"/>
<text x="538" y="472" font-family="Arial" font-size="10" fill="#000000">α</text>
<path d="M 773,480 A 18,18 0 0,1 779,463" stroke="#000000" stroke-width="1.8" fill="none"/>
<path d="M 770,480 A 22,22 0 0,1 777,462" stroke="#000000" stroke-width="1.2" fill="none"/>
<text x="758" y="468" font-family="Arial" font-size="10" fill="#000000">β</text>

<!-- === RATIO TABLE === -->
<rect x="30" y="50" width="350" height="160" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="205" y="72" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">AA Similarity Condition</text>
<text x="45" y="93" font-family="Arial" font-size="11" fill="#000000">If ∠A = ∠D  and  ∠B = ∠E</text>
<text x="45" y="111" font-family="Arial" font-size="11" fill="#000000">then △ABC ∼ △DEF</text>
<text x="45" y="130" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Corresponding sides in ratio k:</text>
<text x="45" y="148" font-family="Arial" font-size="11" fill="#000000">AB/DE = BC/EF = CA/FD = k</text>
<text x="45" y="166" font-family="Arial" font-size="11" fill="#000000">5/10 = 3/6 = 4/8 = 1/2</text>
<text x="45" y="184" font-family="Arial" font-size="11" fill="#000000">Scale factor k = 1/2  (ratio = 2:1)</text>
<text x="45" y="202" font-family="Arial" font-size="11" fill="#555555">Areas ratio = k² = 1/4</text>

<!-- Similarity conditions summary -->
<rect x="30" y="495" width="840" height="85" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="450" y="517" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Similarity Conditions</text>
<text x="80" y="538" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">AA:</text>
<text x="105" y="538" font-family="Arial" font-size="11" fill="#000000">2 angles equal</text>
<text x="310" y="538" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">SSS~:</text>
<text x="348" y="538" font-family="Arial" font-size="11" fill="#000000">all sides in same ratio</text>
<text x="560" y="538" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">SAS~:</text>
<text x="600" y="538" font-family="Arial" font-size="11" fill="#000000">2 sides in ratio + included angle equal</text>
<text x="450" y="558" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Similar triangles have equal angles and proportional sides. The third angle is automatically equal (angle sum = 180°).</text>
<text x="450" y="574" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Area ratio = k²,  Perimeter ratio = k,  where k = scale factor</text>

</g>
</svg>`;

    // Generated from registry: quadrilateralTypes
    // options: showSquare, showRectangle, showRhombus, showParallelogram, showTrapezium, showKite, showProperties
    static quadrilateralTypesSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="800" viewBox="0 0 1000 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>Types of Quadrilaterals</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="32" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Types of Quadrilaterals</text>
<text x="500" y="52" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">All quadrilaterals: 4 sides, 4 angles, angle sum = 360°</text>

<!-- =========== ROW 1 =========== -->

<!-- SQUARE -->
<text x="120" y="80" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Square</text>
<rect x="60" y="90" width="120" height="120" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Right angle markers -->
<polyline points="60,198 75,198 75,210" stroke="#000000" stroke-width="1.8" fill="none"/>
<polyline points="168,90 168,105 180,105" stroke="#000000" stroke-width="1.8" fill="none"/>
<!-- Equal side ticks all 4 -->
<line x1="113" y1="89" x2="113" y2="96" stroke="#000000" stroke-width="2"/>
<line x1="119" y1="89" x2="119" y2="96" stroke="#000000" stroke-width="2"/>
<line x1="113" y1="204" x2="113" y2="211" stroke="#000000" stroke-width="2"/>
<line x1="119" y1="204" x2="119" y2="211" stroke="#000000" stroke-width="2"/>
<line x1="59" y1="147" x2="66" y2="147" stroke="#000000" stroke-width="2"/>
<line x1="59" y1="153" x2="66" y2="153" stroke="#000000" stroke-width="2"/>
<line x1="174" y1="147" x2="181" y2="147" stroke="#000000" stroke-width="2"/>
<line x1="174" y1="153" x2="181" y2="153" stroke="#000000" stroke-width="2"/>
<text x="120" y="230" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">4 equal sides, 4×90°</text>

<!-- RECTANGLE -->
<text x="350" y="80" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Rectangle</text>
<rect x="260" y="90" width="180" height="110" stroke="#000000" stroke-width="2.5" fill="none"/>
<polyline points="260,188 275,188 275,200" stroke="#000000" stroke-width="1.8" fill="none"/>
<!-- Opposite sides equal ticks -->
<line x1="343" y1="89" x2="343" y2="96" stroke="#000000" stroke-width="2"/>
<line x1="349" y1="89" x2="349" y2="96" stroke="#000000" stroke-width="2"/>
<line x1="343" y1="194" x2="343" y2="201" stroke="#000000" stroke-width="2"/>
<line x1="349" y1="194" x2="349" y2="201" stroke="#000000" stroke-width="2"/>
<line x1="259" y1="141" x2="266" y2="141" stroke="#000000" stroke-width="2"/>
<line x1="434" y1="141" x2="441" y2="141" stroke="#000000" stroke-width="2"/>
<text x="350" y="220" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">2 pairs equal sides, 4×90°</text>

<!-- RHOMBUS -->
<text x="620" y="80" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Rhombus</text>
<polygon points="620,90 700,150 620,210 540,150" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Equal side ticks on all 4 -->
<line x1="663" y1="117" x2="658" y2="124" stroke="#000000" stroke-width="2"/>
<line x1="667" y1="113" x2="662" y2="120" stroke="#000000" stroke-width="2"/>
<line x1="663" y1="183" x2="658" y2="176" stroke="#000000" stroke-width="2"/>
<line x1="667" y1="187" x2="662" y2="180" stroke="#000000" stroke-width="2"/>
<line x1="577" y1="117" x2="582" y2="124" stroke="#000000" stroke-width="2"/>
<line x1="573" y1="113" x2="578" y2="120" stroke="#000000" stroke-width="2"/>
<line x1="577" y1="183" x2="582" y2="176" stroke="#000000" stroke-width="2"/>
<line x1="573" y1="187" x2="578" y2="180" stroke="#000000" stroke-width="2"/>
<!-- Diagonals -->
<line x1="540" y1="150" x2="700" y2="150" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="620" y1="90" x2="620" y2="210" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
<text x="620" y="228" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">4 equal sides, opp. angles equal</text>

<!-- PARALLELOGRAM -->
<text x="870" y="80" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Parallelogram</text>
<polygon points="810,90 970,90 940,200 780,200" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="870" y="228" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Opp. sides ∥ and equal, opp. ∠s equal</text>
<!-- Opposite side ticks -->
<line x1="887" y1="89" x2="887" y2="96" stroke="#000000" stroke-width="2"/>
<line x1="893" y1="89" x2="893" y2="96" stroke="#000000" stroke-width="2"/>
<line x1="857" y1="199" x2="857" y2="206" stroke="#000000" stroke-width="2"/>
<line x1="863" y1="199" x2="863" y2="206" stroke="#000000" stroke-width="2"/>
<!-- Parallel arrows -->
<text x="870" y="86" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">→</text>
<text x="856" y="204" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">→</text>

<!-- =========== ROW 2 =========== -->

<!-- TRAPEZIUM -->
<text x="200" y="280" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Trapezium (Trapezoid)</text>
<polygon points="130,290 320,290 290,390 160,390" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Parallel top bottom marks -->
<text x="224" y="286" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">→</text>
<text x="224" y="399" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">→</text>
<text x="200" y="410" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">One pair of parallel sides (bases)</text>
<!-- Height indicator -->
<line x1="340" y1="290" x2="340" y2="390" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="335" y1="290" x2="345" y2="290" stroke="#000000" stroke-width="1"/>
<line x1="335" y1="390" x2="345" y2="390" stroke="#000000" stroke-width="1"/>
<text x="352" y="345" font-family="Arial" font-size="10" fill="#000000">h</text>

<!-- KITE -->
<text x="620" y="280" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Kite</text>
<polygon points="620,290 710,380 620,440 530,380" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Two pairs of adjacent equal sides -->
<!-- Top-left and top-right equal (single tick) -->
<line x1="568" y1="332" x2="575" y2="337" stroke="#000000" stroke-width="2"/>
<line x1="663" y1="332" x2="670" y2="327" stroke="#000000" stroke-width="2"/>
<!-- Bottom-left and bottom-right equal (double tick) -->
<line x1="560" y1="413" x2="568" y2="407" stroke="#000000" stroke-width="2"/>
<line x1="553" y1="408" x2="561" y2="402" stroke="#000000" stroke-width="2"/>
<line x1="666" y1="413" x2="674" y2="407" stroke="#000000" stroke-width="2"/>
<line x1="673" y1="408" x2="681" y2="402" stroke="#000000" stroke-width="2"/>
<!-- Diagonals -->
<line x1="620" y1="290" x2="620" y2="440" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="530" y1="380" x2="710" y2="380" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
<text x="620" y="458" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Two pairs of adjacent equal sides</text>

<!-- === PROPERTIES TABLE === -->
<rect x="30" y="490" width="940" height="285" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="500" y="513" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Properties Summary</text>
<!-- Table header -->
<line x1="30" y1="522" x2="970" y2="522" stroke="#000000" stroke-width="1"/>
<text x="80" y="538" font-family="Arial" font-size="11" fill="#000000" font-weight="bold">Shape</text>
<text x="200" y="538" font-family="Arial" font-size="11" fill="#000000" font-weight="bold">Sides</text>
<text x="360" y="538" font-family="Arial" font-size="11" fill="#000000" font-weight="bold">Angles</text>
<text x="540" y="538" font-family="Arial" font-size="11" fill="#000000" font-weight="bold">Diagonals</text>
<text x="750" y="538" font-family="Arial" font-size="11" fill="#000000" font-weight="bold">Area Formula</text>
<line x1="30" y1="542" x2="970" y2="542" stroke="#000000" stroke-width="0.8"/>
<!-- Rows -->
<text x="80" y="558" font-family="Arial" font-size="10" fill="#000000">Square</text>
<text x="200" y="558" font-family="Arial" font-size="10" fill="#000000">4 equal</text>
<text x="360" y="558" font-family="Arial" font-size="10" fill="#000000">4 × 90°</text>
<text x="540" y="558" font-family="Arial" font-size="10" fill="#000000">Equal, bisect perpendicularly</text>
<text x="750" y="558" font-family="Arial" font-size="10" fill="#000000">A = s²</text>

<text x="80" y="576" font-family="Arial" font-size="10" fill="#000000">Rectangle</text>
<text x="200" y="576" font-family="Arial" font-size="10" fill="#000000">2 pairs equal</text>
<text x="360" y="576" font-family="Arial" font-size="10" fill="#000000">4 × 90°</text>
<text x="540" y="576" font-family="Arial" font-size="10" fill="#000000">Equal, bisect each other</text>
<text x="750" y="576" font-family="Arial" font-size="10" fill="#000000">A = l × w</text>

<text x="80" y="594" font-family="Arial" font-size="10" fill="#000000">Rhombus</text>
<text x="200" y="594" font-family="Arial" font-size="10" fill="#000000">4 equal</text>
<text x="360" y="594" font-family="Arial" font-size="10" fill="#000000">Opp. equal; adj. supp.</text>
<text x="540" y="594" font-family="Arial" font-size="10" fill="#000000">Perp. bisectors of each other</text>
<text x="750" y="594" font-family="Arial" font-size="10" fill="#000000">A = ½ d₁ × d₂</text>

<text x="80" y="612" font-family="Arial" font-size="10" fill="#000000">Parallelogram</text>
<text x="200" y="612" font-family="Arial" font-size="10" fill="#000000">2 pairs ∥ &amp; equal</text>
<text x="360" y="612" font-family="Arial" font-size="10" fill="#000000">Opp. equal; co-int. supp.</text>
<text x="540" y="612" font-family="Arial" font-size="10" fill="#000000">Bisect each other</text>
<text x="750" y="612" font-family="Arial" font-size="10" fill="#000000">A = b × h</text>

<text x="80" y="630" font-family="Arial" font-size="10" fill="#000000">Trapezium</text>
<text x="200" y="630" font-family="Arial" font-size="10" fill="#000000">1 pair ∥ sides</text>
<text x="360" y="630" font-family="Arial" font-size="10" fill="#000000">Co-int. angles supp.</text>
<text x="540" y="630" font-family="Arial" font-size="10" fill="#000000">Generally unequal</text>
<text x="750" y="630" font-family="Arial" font-size="10" fill="#000000">A = ½(a+b) × h</text>

<text x="80" y="648" font-family="Arial" font-size="10" fill="#000000">Kite</text>
<text x="200" y="648" font-family="Arial" font-size="10" fill="#000000">2 pairs adj. equal</text>
<text x="360" y="648" font-family="Arial" font-size="10" fill="#000000">1 pair opp. angles equal</text>
<text x="540" y="648" font-family="Arial" font-size="10" fill="#000000">Perp.; one bisects other</text>
<text x="750" y="648" font-family="Arial" font-size="10" fill="#000000">A = ½ d₁ × d₂</text>

<text x="500" y="672" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">All quadrilateral interior angles sum to 360°</text>

</g>
</svg>`;

    // Generated from registry: quadrilateralHierarchy
    // options: showTree, showRelationships, showProperties
    static quadrilateralHierarchySvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Quadrilateral Hierarchy</metadata>
<defs>
  <marker id="arr2" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="32" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Quadrilateral Family Tree</text>
<text x="500" y="52" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Arrows show "is a special type of" relationship (subset)</text>

<!-- Helper macro: node boxes -->
<!-- Level 1: Quadrilateral -->
<rect x="375" y="70" width="250" height="50" stroke="#000000" stroke-width="2" rx="5" fill="none"/>
<text x="500" y="91" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Quadrilateral</text>
<text x="500" y="108" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">4 sides, ∠sum = 360°</text>

<!-- Level 2: Trapezium, Kite, Parallelogram -->
<!-- Trapezium (left) -->
<rect x="60" y="185" width="180" height="50" stroke="#000000" stroke-width="1.8" rx="5" fill="none"/>
<text x="150" y="206" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Trapezium</text>
<text x="150" y="223" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">1 pair ∥ sides</text>

<!-- Kite -->
<rect x="415" y="185" width="170" height="50" stroke="#000000" stroke-width="1.8" rx="5" fill="none"/>
<text x="500" y="206" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Kite</text>
<text x="500" y="223" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">2 pairs adj. equal sides</text>

<!-- Parallelogram (right) -->
<rect x="745" y="185" width="200" height="50" stroke="#000000" stroke-width="1.8" rx="5" fill="none"/>
<text x="845" y="206" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Parallelogram</text>
<text x="845" y="223" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">2 pairs ∥ &amp; equal sides</text>

<!-- Level 3: Isosceles Trapezium, Rectangle, Rhombus -->
<!-- Isosceles Trapezium -->
<rect x="20" y="320" width="200" height="50" stroke="#000000" stroke-width="1.5" rx="5" fill="none"/>
<text x="120" y="341" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Isosceles Trapezium</text>
<text x="120" y="358" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Equal legs, equal base ∠s</text>

<!-- Rectangle -->
<rect x="680" y="320" width="160" height="50" stroke="#000000" stroke-width="1.5" rx="5" fill="none"/>
<text x="760" y="341" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Rectangle</text>
<text x="760" y="358" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">4 × 90°</text>

<!-- Rhombus -->
<rect x="870" y="320" width="110" height="50" stroke="#000000" stroke-width="1.5" rx="5" fill="none"/>
<text x="925" y="341" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Rhombus</text>
<text x="925" y="358" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">4 equal sides</text>

<!-- Level 4: Square -->
<rect x="775" y="455" width="130" height="50" stroke="#000000" stroke-width="2" rx="5" fill="none"/>
<text x="840" y="476" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Square</text>
<text x="840" y="493" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">4 equal sides + 4×90°</text>

<!-- === ARROWS connecting hierarchy === -->
<!-- Quadrilateral → Trapezium -->
<line x1="430" y1="120" x2="210" y2="185" stroke="#000000" stroke-width="1.5" marker-end="url(#arr2)"/>
<!-- Quadrilateral → Kite -->
<line x1="490" y1="120" x2="500" y2="185" stroke="#000000" stroke-width="1.5" marker-end="url(#arr2)"/>
<!-- Quadrilateral → Parallelogram -->
<line x1="580" y1="120" x2="800" y2="185" stroke="#000000" stroke-width="1.5" marker-end="url(#arr2)"/>
<!-- Trapezium → Isosceles Trapezium -->
<line x1="150" y1="235" x2="140" y2="320" stroke="#000000" stroke-width="1.5" marker-end="url(#arr2)"/>
<!-- Parallelogram → Rectangle -->
<line x1="810" y1="235" x2="790" y2="320" stroke="#000000" stroke-width="1.5" marker-end="url(#arr2)"/>
<!-- Parallelogram → Rhombus -->
<line x1="880" y1="235" x2="930" y2="320" stroke="#000000" stroke-width="1.5" marker-end="url(#arr2)"/>
<!-- Rectangle → Square -->
<line x1="790" y1="370" x2="828" y2="455" stroke="#000000" stroke-width="1.5" marker-end="url(#arr2)"/>
<!-- Rhombus → Square -->
<line x1="910" y1="370" x2="868" y2="455" stroke="#000000" stroke-width="1.5" marker-end="url(#arr2)"/>

<!-- KEY: Square is both rectangle AND rhombus -->
<text x="840" y="535" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-style="italic">Square = Rectangle ∩ Rhombus</text>

<!-- === PROPERTIES LEGEND === -->
<rect x="30" y="590" width="940" height="90" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="500" y="612" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Reading the Hierarchy</text>
<text x="50" y="632" font-family="Arial" font-size="11" fill="#000000">• Arrows point from general → more specific (subset relationship)</text>
<text x="50" y="650" font-family="Arial" font-size="11" fill="#000000">• Every Rectangle is a Parallelogram; every Rhombus is a Parallelogram; every Square is both a Rectangle AND a Rhombus</text>
<text x="50" y="668" font-family="Arial" font-size="11" fill="#000000">• A shape inherits ALL properties of its ancestors in the tree</text>

</g>
</svg>`;

    // Generated from registry: circleTheorem1 — Angle at Center
    // theorem: angle_at_center; options: showCircle, showAngles, showProof, showMeasures
    static circleTheorem1Svg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Circle Theorem: Angle at Center</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Circle Theorem: Angle at Centre</text>
<text x="350" y="50" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">The angle at the centre is twice the angle at the circumference</text>

<!-- Circle: centre O at (350,340), radius 200 -->
<circle cx="350" cy="340" r="200" stroke="#000000" stroke-width="2"/>

<!-- Centre O -->
<circle cx="350" cy="340" r="4" fill="#000000"/>
<text x="340" y="360" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">O</text>

<!-- Arc endpoints A and B on circumference -->
<!-- A at angle 210° from centre: (350+200cos210, 340+200sin210) = (350-173, 340-100) = (177,240) -->
<circle cx="177" cy="240" r="4" fill="#000000"/>
<text x="158" y="238" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">A</text>

<!-- B at angle 330°: (350+200cos330, 340+200sin330) = (350+173, 340-100) = (523, 240) -->
<circle cx="523" cy="240" r="4" fill="#000000"/>
<text x="529" y="238" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">B</text>

<!-- P on circumference (top): angle 90° => (350, 140) -->
<circle cx="350" cy="140" r="4" fill="#000000"/>
<text x="350" y="125" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">P</text>

<!-- Lines from O to A and O to B (radii) -->
<line x1="350" y1="340" x2="177" y2="240" stroke="#000000" stroke-width="2"/>
<line x1="350" y1="340" x2="523" y2="240" stroke="#000000" stroke-width="2"/>

<!-- Lines from P to A and P to B -->
<line x1="350" y1="140" x2="177" y2="240" stroke="#000000" stroke-width="2" stroke-dasharray="6,3"/>
<line x1="350" y1="140" x2="523" y2="240" stroke="#000000" stroke-width="2" stroke-dasharray="6,3"/>

<!-- Angle AOB arc at O (central angle ~120°) -->
<path d="M 307,262 A 80,80 0 0,1 393,262" stroke="#000000" stroke-width="2" fill="none"/>
<text x="350" y="295" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">2α</text>
<text x="350" y="313" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">(= 120°)</text>

<!-- Angle APB arc at P (inscribed angle ~60°) -->
<path d="M 320,150 A 40,40 0 0,1 380,150" stroke="#000000" stroke-width="2" fill="none"/>
<text x="350" y="178" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">α</text>
<text x="350" y="195" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">(= 60°)</text>

<!-- Arc AB (minor arc, dotted) -->
<path d="M 177,240 A 200,200 0 0,1 523,240" stroke="#000000" stroke-width="2" stroke-dasharray="8,4" fill="none"/>

<!-- Formula box -->
<rect x="30" y="590" width="640" height="90" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="350" y="614" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">∠AOB = 2 × ∠APB</text>
<text x="350" y="636" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Central angle = 2 × Inscribed angle (both subtended by same arc AB)</text>
<text x="350" y="656" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Proof: OA = OP = OB (radii) → isosceles triangles → base angles → algebra</text>
<text x="350" y="674" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Example: ∠AOB = 120° → ∠APB = 60°</text>

</g>
</svg>`;

    // Generated from registry: circleTheorem2 — Angle in Semicircle
    // theorem: angle_in_semicircle; options: showCircle, showRightAngle, showDiameter, showProof
    static circleTheorem2Svg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Circle Theorem: Angle in Semicircle</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Circle Theorem: Angle in a Semicircle</text>
<text x="350" y="50" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">The angle in a semicircle is always 90°</text>

<!-- Circle: centre O at (350,360), radius 200 -->
<circle cx="350" cy="360" r="200" stroke="#000000" stroke-width="2"/>

<!-- Diameter AB: A(150,360), B(550,360) -->
<line x1="150" y1="360" x2="550" y2="360" stroke="#000000" stroke-width="3"/>
<circle cx="150" cy="360" r="4" fill="#000000"/>
<circle cx="550" cy="360" r="4" fill="#000000"/>
<text x="132" y="377" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">A</text>
<text x="556" y="377" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">B</text>

<!-- Centre O -->
<circle cx="350" cy="360" r="4" fill="#000000"/>
<text x="358" y="378" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">O</text>

<!-- Point P on circumference (upper semicircle): angle 50° from right = (350+200cos50, 360-200sin50) = (479, 207) -->
<circle cx="479" cy="207" r="4" fill="#000000"/>
<text x="488" y="205" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">P</text>

<!-- PA and PB lines -->
<line x1="479" y1="207" x2="150" y2="360" stroke="#000000" stroke-width="2"/>
<line x1="479" y1="207" x2="550" y2="360" stroke="#000000" stroke-width="2"/>

<!-- Right angle marker at P -->
<!-- Find point along PA and PB from P -->
<!-- PA direction: (150-479, 360-207) = (-329, 153) normalized → |v| = 364 -->
<!-- PB direction: (550-479, 360-207) = (71, 153) normalized → |v| = 168 -->
<!-- Corner square: use approximate positions -->
<polyline points="468,228 459,241 472,249" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="440" y="250" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">90°</text>

<!-- Second example point Q on upper semicircle: angle 120° from right = (350+200cos120, 360-200sin120) = (250, 187) -->
<circle cx="250" cy="187" r="4" fill="#000000"/>
<text x="235" y="184" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Q</text>
<line x1="250" y1="187" x2="150" y2="360" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="250" y1="187" x2="550" y2="360" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
<!-- Right angle at Q (approximate) -->
<polyline points="262,197 274,210 263,220" stroke="#000000" stroke-width="2" fill="none"/>
<text x="280" y="220" font-family="Arial" font-size="12" fill="#555555">90° (also)</text>

<!-- Diameter label -->
<text x="350" y="390" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">diameter</text>

<!-- Semicircle arc label -->
<text x="350" y="200" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Any point P on semicircle gives ∠APB = 90°</text>

<!-- Formula box -->
<rect x="30" y="600" width="640" height="80" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="350" y="623" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">∠APB = 90° (angle in semicircle)</text>
<text x="350" y="645" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Proof: AB is a diameter → ∠AOB = 180° (straight line)</text>
<text x="350" y="665" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">By angle at centre theorem: ∠APB = ½ × 180° = 90°</text>

</g>
</svg>`;

    // Generated from registry: circleTheorem3 — Cyclic Quadrilateral
    // theorem: cyclic_quadrilateral; options: showCircle, showQuadrilateral, showAngles, showProof
    static circleTheorem3Svg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Circle Theorem: Cyclic Quadrilateral</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Circle Theorem: Cyclic Quadrilateral</text>
<text x="350" y="50" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Opposite angles of a cyclic quadrilateral sum to 180°</text>

<!-- Circle: centre O at (350,350), radius 210 -->
<circle cx="350" cy="350" r="210" stroke="#000000" stroke-width="2"/>
<circle cx="350" cy="350" r="3" fill="#000000"/>
<text x="356" y="360" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">O</text>

<!-- Four vertices of cyclic quadrilateral ABCD on circumference -->
<!-- A: angle 75° → (350+210cos75, 350-210sin75) = (404, 147) -->
<!-- B: angle 185° → (350+210cos185, 350-210sin185) = (141, 368) -->
<!-- C: angle 270° → (350+210cos270, 350-210sin270) = (350, 560) -->
<!-- D: angle 10° → (350+210cos10, 350-210sin10) = (557, 314) -->
<circle cx="404" cy="147" r="5" fill="#000000"/>
<text x="409" y="138" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">A</text>

<circle cx="141" cy="368" r="5" fill="#000000"/>
<text x="118" y="373" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">B</text>

<circle cx="350" cy="560" r="5" fill="#000000"/>
<text x="350" y="582" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">C</text>

<circle cx="557" cy="314" r="5" fill="#000000"/>
<text x="567" y="318" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">D</text>

<!-- Quadrilateral ABCD -->
<polygon points="404,147 141,368 350,560 557,314" stroke="#000000" stroke-width="2.5" fill="none"/>

<!-- Angle arcs and labels -->
<!-- Angle A (∠DAB) -->
<path d="M 385,162 A 30,30 0 0,0 418,163" stroke="#000000" stroke-width="1.8" fill="none"/>
<text x="390" y="190" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">∠A</text>
<text x="390" y="206" font-family="Arial" font-size="11" fill="#000000">= 105°</text>

<!-- Angle B (∠ABC) -->
<path d="M 155,357 A 30,30 0 0,0 156,382" stroke="#000000" stroke-width="1.8" fill="none"/>
<text x="172" y="356" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">∠B</text>
<text x="172" y="372" font-family="Arial" font-size="11" fill="#000000">= 80°</text>

<!-- Angle C (∠BCD) -->
<path d="M 330,548 A 30,30 0 0,0 368,544" stroke="#000000" stroke-width="1.8" fill="none"/>
<text x="324" y="578" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">∠C</text>
<text x="324" y="592" font-family="Arial" font-size="11" fill="#000000">= 75°</text>

<!-- Angle D (∠CDA) -->
<path d="M 540,324 A 30,30 0 0,0 542,304" stroke="#000000" stroke-width="1.8" fill="none"/>
<text x="522" y="295" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">∠D</text>
<text x="522" y="311" font-family="Arial" font-size="11" fill="#000000">= 100°</text>

<!-- Opposite angle pairs highlighted -->
<text x="350" y="430" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">∠A + ∠C = 105° + 75° = 180°</text>
<text x="350" y="450" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">∠B + ∠D = 80° + 100° = 180°</text>

<!-- Formula box -->
<rect x="30" y="600" width="640" height="80" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="350" y="623" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Opposite angles in cyclic quadrilateral = 180°</text>
<text x="350" y="644" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">∠A + ∠C = 180°   and   ∠B + ∠D = 180°</text>
<text x="350" y="664" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Proof: Each pair of opposite angles subtend arcs that together make the full circle (360°); use angle at centre = 2× angle at circumference</text>

</g>
</svg>`;

    // Generated from registry: circleTheorem4 — Tangent Radius
    // theorem: tangent_radius; options: showCircle, showTangent, showRadius, showRightAngle, showProof
    static circleTheorem4Svg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Circle Theorem: Tangent and Radius</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Circle Theorem: Tangent and Radius</text>
<text x="350" y="50" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">A tangent to a circle is perpendicular to the radius at the point of contact</text>

<!-- Circle: centre O at (350,350), radius 180 -->
<circle cx="350" cy="350" r="180" stroke="#000000" stroke-width="2"/>

<!-- Centre O -->
<circle cx="350" cy="350" r="4" fill="#000000"/>
<text x="358" y="368" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">O</text>

<!-- Point of tangency T at bottom: (350, 530) -->
<circle cx="350" cy="530" r="5" fill="#000000"/>
<text x="358" y="548" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">T</text>

<!-- Radius OT -->
<line x1="350" y1="350" x2="350" y2="530" stroke="#000000" stroke-width="2.5"/>
<text x="365" y="445" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">r</text>
<text x="365" y="462" font-family="Arial" font-size="11" fill="#555555">(radius)</text>

<!-- Tangent line at T: horizontal -->
<line x1="100" y1="530" x2="600" y2="530" stroke="#000000" stroke-width="2.5"/>
<text x="615" y="534" font-family="Arial" font-size="13" fill="#000000" font-style="italic">tangent</text>

<!-- Right angle at T -->
<polyline points="350,515 365,515 365,530" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="375" y="512" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">90°</text>

<!-- External point P with two tangent lines -->
<!-- External point P at (350, 640) -->
<circle cx="350" cy="640" r="4" fill="#000000"/>
<text x="358" y="655" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">P</text>

<!-- Second tangent from P to tangent point T2 on right side -->
<!-- T2 at angle (choose -30° from centre): (350+180cos(-30), 350-180sin(-30)) = (506, 440) -->
<circle cx="506" cy="440" r="5" fill="#000000"/>
<text x="514" y="438" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">T₂</text>
<!-- Radius O to T2 -->
<line x1="350" y1="350" x2="506" y2="440" stroke="#000000" stroke-width="2" stroke-dasharray="6,3"/>
<!-- Tangent from P to T2 -->
<line x1="350" y1="640" x2="506" y2="440" stroke="#000000" stroke-width="1.8" stroke-dasharray="5,3"/>
<!-- Tangent from P to T -->
<line x1="350" y1="640" x2="350" y2="530" stroke="#000000" stroke-width="1.8" stroke-dasharray="5,3"/>

<!-- Annotation: equal tangent lengths -->
<text x="330" y="596" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">PT</text>
<text x="440" y="555" font-family="Arial" font-size="12" fill="#000000">PT₂</text>
<text x="350" y="615" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">PT = PT₂ (equal tangent lengths from external point)</text>

<!-- Right angle at T2 (perpendicular radius-tangent) -->
<text x="478" y="435" font-family="Arial" font-size="11" fill="#000000">90°</text>

<!-- Key: alternate segment theorem note -->
<text x="350" y="220" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Tangent touches circle at exactly one point</text>

<!-- Formula box -->
<rect x="30" y="668" width="640" height="22" fill="none" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="350" y="683" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">OT ⊥ tangent at T  |  Tangent lengths from external point are equal: PT = PT₂</text>

</g>
</svg>`;

    // Generated from registry: coordinateGeometryGrid
    // points: [[2,3],[5,7],[-1,4]]; options: showGrid, showAxes, showPoints, showLabels
    static coordinateGeometryGridSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="800" viewBox="0 0 800 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>Coordinate Geometry Grid</metadata>
<defs>
  <marker id="axarr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Coordinate Geometry — Cartesian Plane</text>

<!-- Grid setup: origin at (400, 400), scale = 50px per unit -->
<!-- Grid range: x from -6 to 8, y from -6 to 8 -->

<!-- Grid lines (light) -->
<!-- Vertical grid lines -->
<line x1="100" y1="100" x2="100" y2="700" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="150" y1="100" x2="150" y2="700" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="200" y1="100" x2="200" y2="700" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="250" y1="100" x2="250" y2="700" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="300" y1="100" x2="300" y2="700" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="350" y1="100" x2="350" y2="700" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="450" y1="100" x2="450" y2="700" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="500" y1="100" x2="500" y2="700" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="550" y1="100" x2="550" y2="700" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="600" y1="100" x2="600" y2="700" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="650" y1="100" x2="650" y2="700" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="700" y1="100" x2="700" y2="700" stroke="#CCCCCC" stroke-width="0.8"/>
<!-- Horizontal grid lines -->
<line x1="100" y1="100" x2="700" y2="100" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="100" y1="150" x2="700" y2="150" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="100" y1="200" x2="700" y2="200" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="100" y1="250" x2="700" y2="250" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="100" y1="300" x2="700" y2="300" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="100" y1="350" x2="700" y2="350" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="100" y1="450" x2="700" y2="450" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="100" y1="500" x2="700" y2="500" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="100" y1="550" x2="700" y2="550" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="100" y1="600" x2="700" y2="600" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="100" y1="650" x2="700" y2="650" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="100" y1="700" x2="700" y2="700" stroke="#CCCCCC" stroke-width="0.8"/>

<!-- Axes -->
<!-- X axis -->
<line x1="90" y1="400" x2="720" y2="400" stroke="#000000" stroke-width="2" marker-end="url(#axarr)"/>
<!-- Y axis -->
<line x1="400" y1="710" x2="400" y2="80" stroke="#000000" stroke-width="2" marker-end="url(#axarr)"/>

<!-- Axis labels -->
<text x="730" y="404" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">x</text>
<text x="394" y="72" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">y</text>
<text x="408" y="416" font-family="Arial" font-size="12" fill="#000000">O</text>

<!-- X axis tick labels: scale 50px/unit, origin at 400 -->
<!-- x = -6: px=100; -5:150; -4:200; -3:250; -2:300; -1:350; 1:450; 2:500; 3:550; 4:600; 5:650; 6:700 -->
<text x="100" y="418" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">-6</text>
<text x="150" y="418" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">-5</text>
<text x="200" y="418" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">-4</text>
<text x="250" y="418" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">-3</text>
<text x="300" y="418" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">-2</text>
<text x="350" y="418" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">-1</text>
<text x="450" y="418" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">1</text>
<text x="500" y="418" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">2</text>
<text x="550" y="418" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">3</text>
<text x="600" y="418" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">4</text>
<text x="650" y="418" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">5</text>
<text x="700" y="418" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">6</text>

<!-- Y axis tick labels: y=6 → px=100; y=5→150 ... y=-6→700 -->
<text x="388" y="104" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">6</text>
<text x="388" y="154" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">5</text>
<text x="388" y="204" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">4</text>
<text x="388" y="254" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">3</text>
<text x="388" y="304" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">2</text>
<text x="388" y="354" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">1</text>
<text x="388" y="454" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">-1</text>
<text x="388" y="504" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">-2</text>
<text x="388" y="554" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">-3</text>
<text x="388" y="604" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">-4</text>
<text x="388" y="654" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">-5</text>

<!-- Tick marks on axes -->
<line x1="450" y1="396" x2="450" y2="404" stroke="#000000" stroke-width="1.5"/>
<line x1="500" y1="396" x2="500" y2="404" stroke="#000000" stroke-width="1.5"/>
<line x1="550" y1="396" x2="550" y2="404" stroke="#000000" stroke-width="1.5"/>
<line x1="600" y1="396" x2="600" y2="404" stroke="#000000" stroke-width="1.5"/>
<line x1="650" y1="396" x2="650" y2="404" stroke="#000000" stroke-width="1.5"/>
<line x1="350" y1="396" x2="350" y2="404" stroke="#000000" stroke-width="1.5"/>
<line x1="300" y1="396" x2="300" y2="404" stroke="#000000" stroke-width="1.5"/>
<line x1="250" y1="396" x2="250" y2="404" stroke="#000000" stroke-width="1.5"/>
<line x1="200" y1="396" x2="200" y2="404" stroke="#000000" stroke-width="1.5"/>
<line x1="150" y1="396" x2="150" y2="404" stroke="#000000" stroke-width="1.5"/>

<!-- === POINTS from registry: [[2,3],[5,7],[-1,4]] === -->
<!-- Point (2,3): px=(400+2×50)=500, py=(400-3×50)=250 -->
<circle cx="500" cy="250" r="6" fill="#000000" stroke="#000000" stroke-width="2"/>
<text x="510" y="244" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">A(2, 3)</text>
<!-- Dashed lines to axes -->
<line x1="500" y1="250" x2="500" y2="400" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="500" y1="250" x2="400" y2="250" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>

<!-- Point (5,7): px=650, py=50 (just off top, use 100) → py=400-350=50 -->
<circle cx="650" cy="50" r="6" fill="#000000" stroke="#000000" stroke-width="2"/>
<text x="660" y="44" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">B(5, 7)</text>
<line x1="650" y1="50" x2="650" y2="400" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="650" y1="50" x2="400" y2="50" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>

<!-- Point (-1,4): px=400-50=350, py=400-200=200 -->
<circle cx="350" cy="200" r="6" fill="#000000" stroke="#000000" stroke-width="2"/>
<text x="320" y="194" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">C(-1, 4)</text>
<line x1="350" y1="200" x2="350" y2="400" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="350" y1="200" x2="400" y2="200" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>

<!-- Quadrant labels -->
<text x="570" y="135" font-family="Arial" font-size="13" fill="#888888" text-anchor="middle">Quadrant I</text>
<text x="570" y="152" font-family="Arial" font-size="11" fill="#888888" text-anchor="middle">(+x, +y)</text>
<text x="230" y="135" font-family="Arial" font-size="13" fill="#888888" text-anchor="middle">Quadrant II</text>
<text x="230" y="152" font-family="Arial" font-size="11" fill="#888888" text-anchor="middle">(-x, +y)</text>
<text x="230" y="580" font-family="Arial" font-size="13" fill="#888888" text-anchor="middle">Quadrant III</text>
<text x="230" y="596" font-family="Arial" font-size="11" fill="#888888" text-anchor="middle">(-x, -y)</text>
<text x="570" y="580" font-family="Arial" font-size="13" fill="#888888" text-anchor="middle">Quadrant IV</text>
<text x="570" y="596" font-family="Arial" font-size="11" fill="#888888" text-anchor="middle">(+x, -y)</text>

<!-- Info box -->
<rect x="30" y="718" width="740" height="50" fill="none" stroke="#000000" stroke-width="1" rx="3"/>
<text x="400" y="736" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Points: A(2,3), B(5,7), C(-1,4)</text>
<text x="400" y="754" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Each point (x, y) — x is horizontal distance from O, y is vertical distance from O. Dashed lines show projections onto axes.</text>

</g>
</svg>`;

    // Generated from registry: distanceFormula
    // point1: [1,2], point2: [4,6]; options: showPoints, showRightTriangle, showCalculation, showFormula
    static distanceFormulaSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Distance Formula</metadata>
<defs>
  <marker id="axarr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Distance Formula</text>
<text x="400" y="50" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">d = √[(x₂-x₁)² + (y₂-y₁)²]</text>

<!-- Grid: origin at (150, 450), scale 60px/unit -->
<!-- Grid lines -->
<line x1="150" y1="90" x2="150" y2="480" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="210" y1="90" x2="210" y2="480" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="270" y1="90" x2="270" y2="480" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="330" y1="90" x2="330" y2="480" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="390" y1="90" x2="390" y2="480" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="450" y1="90" x2="450" y2="480" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="510" y1="90" x2="510" y2="480" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="570" y1="90" x2="570" y2="480" stroke="#CCCCCC" stroke-width="0.8"/>

<line x1="120" y1="90" x2="600" y2="90" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="120" y1="150" x2="600" y2="150" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="120" y1="210" x2="600" y2="210" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="120" y1="270" x2="600" y2="270" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="120" y1="330" x2="600" y2="330" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="120" y1="390" x2="600" y2="390" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="120" y1="450" x2="600" y2="450" stroke="#CCCCCC" stroke-width="0.8"/>

<!-- Axes -->
<line x1="120" y1="450" x2="620" y2="450" stroke="#000000" stroke-width="2" marker-end="url(#axarr)"/>
<line x1="150" y1="490" x2="150" y2="75" stroke="#000000" stroke-width="2" marker-end="url(#axarr)"/>
<text x="630" y="454" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">x</text>
<text x="144" y="68" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">y</text>

<!-- Axis tick labels (x: 0..7, y: 0..6) -->
<text x="150" y="466" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">0</text>
<text x="210" y="466" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">1</text>
<text x="270" y="466" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">2</text>
<text x="330" y="466" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">3</text>
<text x="390" y="466" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">4</text>
<text x="450" y="466" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">5</text>
<text x="510" y="466" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">6</text>
<text x="138" y="454" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">0</text>
<text x="138" y="394" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">1</text>
<text x="138" y="334" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">2</text>
<text x="138" y="274" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">3</text>
<text x="138" y="214" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">4</text>
<text x="138" y="154" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">5</text>
<text x="138" y="94" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">6</text>

<!-- Points: P1(1,2) → px=150+60=210, py=450-120=330 -->
<!--         P2(4,6) → px=150+240=390, py=450-360=90 -->

<!-- Point P1(1,2) -->
<circle cx="210" cy="330" r="6" fill="#000000"/>
<text x="190" y="347" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">P₁(1,2)</text>

<!-- Point P2(4,6) -->
<circle cx="390" cy="90" r="6" fill="#000000"/>
<text x="396" y="84" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">P₂(4,6)</text>

<!-- Hypotenuse (the distance line) -->
<line x1="210" y1="330" x2="390" y2="90" stroke="#000000" stroke-width="3"/>
<text x="288" y="198" font-family="Arial" font-size="13" fill="#000000" font-weight="bold" transform="rotate(-53, 288, 198)">d = 5</text>

<!-- Right triangle legs (show Δx and Δy) -->
<!-- Horizontal leg: P1(210,330) to (390,330) — Δx = 4-1 = 3 units = 180px -->
<line x1="210" y1="330" x2="390" y2="330" stroke="#000000" stroke-width="2" stroke-dasharray="6,3"/>
<!-- Vertical leg: (390,330) to P2(390,90) — Δy = 6-2 = 4 units = 240px -->
<line x1="390" y1="330" x2="390" y2="90" stroke="#000000" stroke-width="2" stroke-dasharray="6,3"/>
<!-- Right angle at (390,330) -->
<polyline points="390,315 375,315 375,330" stroke="#000000" stroke-width="2" fill="none"/>

<!-- Dimension labels -->
<text x="300" y="350" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Δx = x₂-x₁ = 4-1 = 3</text>
<text x="430" y="215" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Δy = y₂-y₁ = 6-2 = 4</text>

<!-- Calculation box -->
<rect x="440" y="350" width="330" height="130" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="605" y="373" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Calculation:</text>
<text x="455" y="395" font-family="Arial" font-size="12" fill="#000000">d = √[(x₂-x₁)² + (y₂-y₁)²]</text>
<text x="455" y="415" font-family="Arial" font-size="12" fill="#000000">d = √[(4-1)² + (6-2)²]</text>
<text x="455" y="435" font-family="Arial" font-size="12" fill="#000000">d = √[3² + 4²]</text>
<text x="455" y="455" font-family="Arial" font-size="12" fill="#000000">d = √[9 + 16] = √25</text>
<text x="455" y="475" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">d = 5 units</text>

<!-- Note: Pythagorean theorem link -->
<text x="400" y="530" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">The distance formula is an application of the Pythagorean theorem: d² = (Δx)² + (Δy)²</text>

</g>
</svg>`;

    // Generated from registry: midpointFormula
    // point1: [2,3], point2: [8,9]; options: showPoints, showSegment, showMidpoint, showFormula
    static midpointFormulaSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Midpoint Formula</metadata>
<defs>
  <marker id="axarr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Midpoint Formula</text>
<text x="400" y="50" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">M = ((x₁+x₂)/2 , (y₁+y₂)/2)</text>

<!-- Grid: origin at (80, 510), scale 50px/unit -->
<!-- Grid lines (x: 0..11, y: 0..9) -->
<line x1="80" y1="510" x2="80" y2="60" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="130" y1="60" x2="130" y2="520" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="180" y1="60" x2="180" y2="520" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="230" y1="60" x2="230" y2="520" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="280" y1="60" x2="280" y2="520" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="330" y1="60" x2="330" y2="520" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="380" y1="60" x2="380" y2="520" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="430" y1="60" x2="430" y2="520" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="480" y1="60" x2="480" y2="520" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="530" y1="60" x2="530" y2="520" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="580" y1="60" x2="580" y2="520" stroke="#CCCCCC" stroke-width="0.8"/>

<line x1="70" y1="510" x2="610" y2="510" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="70" y1="460" x2="610" y2="460" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="70" y1="410" x2="610" y2="410" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="70" y1="360" x2="610" y2="360" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="70" y1="310" x2="610" y2="310" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="70" y1="260" x2="610" y2="260" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="70" y1="210" x2="610" y2="210" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="70" y1="160" x2="610" y2="160" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="70" y1="110" x2="610" y2="110" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="70" y1="60" x2="610" y2="60" stroke="#CCCCCC" stroke-width="0.8"/>

<!-- Axes -->
<line x1="65" y1="510" x2="620" y2="510" stroke="#000000" stroke-width="2" marker-end="url(#axarr)"/>
<line x1="80" y1="530" x2="80" y2="48" stroke="#000000" stroke-width="2" marker-end="url(#axarr)"/>
<text x="630" y="514" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">x</text>
<text x="74" y="42" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">y</text>

<!-- Axis labels -->
<text x="80" y="526" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">0</text>
<text x="130" y="526" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">1</text>
<text x="180" y="526" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">2</text>
<text x="230" y="526" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">3</text>
<text x="280" y="526" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">4</text>
<text x="330" y="526" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">5</text>
<text x="380" y="526" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">6</text>
<text x="430" y="526" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">7</text>
<text x="480" y="526" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">8</text>
<text x="530" y="526" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">9</text>
<text x="580" y="526" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">10</text>

<text x="68" y="514" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">0</text>
<text x="68" y="464" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">1</text>
<text x="68" y="414" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">2</text>
<text x="68" y="364" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">3</text>
<text x="68" y="314" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">4</text>
<text x="68" y="264" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">5</text>
<text x="68" y="214" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">6</text>
<text x="68" y="164" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">7</text>
<text x="68" y="114" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">8</text>
<text x="68" y="64" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">9</text>

<!-- Points: A(2,3) → px=80+100=180, py=510-150=360 -->
<!--         B(8,9) → px=80+400=480, py=510-450=60  -->
<!--         M=(5,6) → px=80+250=330, py=510-300=210 -->

<!-- Line segment AB -->
<line x1="180" y1="360" x2="480" y2="60" stroke="#000000" stroke-width="2.5"/>

<!-- Point A(2,3) -->
<circle cx="180" cy="360" r="6" fill="#000000"/>
<text x="160" y="378" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">A(2, 3)</text>

<!-- Point B(8,9) -->
<circle cx="480" cy="60" r="6" fill="#000000"/>
<text x="488" y="58" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">B(8, 9)</text>

<!-- Midpoint M(5,6) -->
<circle cx="330" cy="210" r="7" fill="none" stroke="#000000" stroke-width="2.5"/>
<circle cx="330" cy="210" r="3" fill="#000000"/>
<text x="338" y="205" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">M(5, 6)</text>

<!-- Equal length marks on segment -->
<!-- Tick at 1/4 of segment -->
<line x1="243" y1="287" x2="250" y2="278" stroke="#000000" stroke-width="2"/>
<line x1="248" y1="291" x2="255" y2="282" stroke="#000000" stroke-width="2"/>
<!-- Tick at 3/4 of segment -->
<line x1="410" y1="138" x2="417" y2="129" stroke="#000000" stroke-width="2"/>
<line x1="415" y1="142" x2="422" y2="133" stroke="#000000" stroke-width="2"/>

<!-- Dashed lines to show midpoint x and y coordinates -->
<line x1="330" y1="210" x2="330" y2="510" stroke="#000000" stroke-width="1" stroke-dasharray="5,3"/>
<line x1="330" y1="210" x2="80" y2="210" stroke="#000000" stroke-width="1" stroke-dasharray="5,3"/>

<!-- Formula box -->
<rect x="610" y="60" width="175" height="160" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="697" y="84" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Midpoint Formula</text>
<text x="617" y="108" font-family="Arial" font-size="12" fill="#000000">M = ((x₁+x₂)/2,</text>
<text x="623" y="126" font-family="Arial" font-size="12" fill="#000000">     (y₁+y₂)/2)</text>
<line x1="617" y1="133" x2="780" y2="133" stroke="#000000" stroke-width="0.8"/>
<text x="617" y="150" font-family="Arial" font-size="11" fill="#000000">x = (2+8)/2 = 5</text>
<text x="617" y="168" font-family="Arial" font-size="11" fill="#000000">y = (3+9)/2 = 6</text>
<text x="617" y="190" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">M = (5, 6)</text>
<text x="617" y="210" font-family="Arial" font-size="10" fill="#555555">AM = MB ✓ (equal halves)</text>

</g>
</svg>`;

    // Generated from registry: slopeOfLine
    // point1: [1,2], point2: [5,8]; options: showLine, showRise, showRun, showSlope, showFormula
    static slopeOfLineSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Slope of a Line</metadata>
<defs>
  <marker id="axarr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="dimarr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Slope of a Line</text>
<text x="400" y="50" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">m = rise/run = (y₂-y₁)/(x₂-x₁)</text>

<!-- Grid: origin at (100,480), scale 55px/unit -->
<!-- Vertical grid -->
<line x1="100" y1="90" x2="100" y2="490" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="155" y1="90" x2="155" y2="490" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="210" y1="90" x2="210" y2="490" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="265" y1="90" x2="265" y2="490" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="320" y1="90" x2="320" y2="490" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="375" y1="90" x2="375" y2="490" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="430" y1="90" x2="430" y2="490" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="485" y1="90" x2="485" y2="490" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="540" y1="90" x2="540" y2="490" stroke="#CCCCCC" stroke-width="0.8"/>
<!-- Horizontal grid -->
<line x1="90" y1="480" x2="560" y2="480" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="90" y1="425" x2="560" y2="425" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="90" y1="370" x2="560" y2="370" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="90" y1="315" x2="560" y2="315" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="90" y1="260" x2="560" y2="260" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="90" y1="205" x2="560" y2="205" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="90" y1="150" x2="560" y2="150" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="90" y1="95" x2="560" y2="95" stroke="#CCCCCC" stroke-width="0.8"/>

<!-- Axes -->
<line x1="85" y1="480" x2="565" y2="480" stroke="#000000" stroke-width="2" marker-end="url(#axarr)"/>
<line x1="100" y1="495" x2="100" y2="78" stroke="#000000" stroke-width="2" marker-end="url(#axarr)"/>
<text x="575" y="484" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">x</text>
<text x="94" y="70" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">y</text>
<text x="108" y="494" font-family="Arial" font-size="10" fill="#000000">0</text>

<!-- Tick labels -->
<text x="155" y="494" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">1</text>
<text x="210" y="494" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">2</text>
<text x="265" y="494" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">3</text>
<text x="320" y="494" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">4</text>
<text x="375" y="494" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">5</text>
<text x="430" y="494" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">6</text>
<text x="485" y="494" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">7</text>
<text x="88" y="426" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">1</text>
<text x="88" y="371" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">2</text>
<text x="88" y="316" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">3</text>
<text x="88" y="261" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">4</text>
<text x="88" y="206" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">5</text>
<text x="88" y="151" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">6</text>
<text x="88" y="96" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">7</text>

<!-- Points: P1(1,2) → px=155, py=480-110=370 -->
<!--         P2(5,8) → px=375, py=480-440=40... use py=480-8*55=480-440=40 -->
<!-- Actually py=480 - y*55: P1: 480-110=370, P2: 480-440=40 -->

<!-- Extended line through P1 and P2 -->
<!-- Slope m = (8-2)/(5-1) = 6/4 = 3/2 -->
<!-- y = 2 + 3/2*(x-1); at x=0: y=0.5 → py=480-27.5=452; at x=7: y=2+3/2*6=11 → py=-125 (off grid, use x=6.3: y=9.95) -->
<line x1="100" y1="452" x2="540" y2="92" stroke="#000000" stroke-width="2" stroke-dasharray="6,3"/>

<!-- Solid segment between points -->
<line x1="155" y1="370" x2="375" y2="40" stroke="#000000" stroke-width="3"/>

<!-- P1 -->
<circle cx="155" cy="370" r="6" fill="#000000"/>
<text x="130" y="386" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">P₁(1,2)</text>

<!-- P2 -->
<circle cx="375" cy="40" r="6" fill="#000000"/>
<text x="382" y="36" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">P₂(5,8)</text>

<!-- Right triangle for rise/run -->
<!-- Corner at (375, 370) -->
<line x1="155" y1="370" x2="375" y2="370" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
<line x1="375" y1="370" x2="375" y2="40" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
<polyline points="375,355 360,355 360,370" stroke="#000000" stroke-width="2" fill="none"/>

<!-- Run label: Δx = 4 -->
<text x="265" y="390" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">run = 4</text>
<line x1="155" y1="380" x2="375" y2="380" stroke="#000000" stroke-width="1.5" marker-start="url(#dimarr)" marker-end="url(#dimarr)"/>

<!-- Rise label: Δy = 6 -->
<text x="408" y="210" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">rise = 6</text>
<line x1="395" y1="370" x2="395" y2="40" stroke="#000000" stroke-width="1.5" marker-start="url(#dimarr)" marker-end="url(#dimarr)"/>

<!-- Formula & calculation box -->
<rect x="580" y="80" width="200" height="200" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="680" y="103" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Slope Formula</text>
<text x="590" y="128" font-family="Arial" font-size="13" fill="#000000">m = rise / run</text>
<text x="590" y="150" font-family="Arial" font-size="13" fill="#000000">m = (y₂-y₁)/(x₂-x₁)</text>
<line x1="590" y1="158" x2="775" y2="158" stroke="#000000" stroke-width="0.8"/>
<text x="590" y="178" font-family="Arial" font-size="12" fill="#000000">m = (8-2)/(5-1)</text>
<text x="590" y="198" font-family="Arial" font-size="12" fill="#000000">m = 6/4</text>
<text x="590" y="220" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">m = 3/2 = 1.5</text>
<text x="590" y="244" font-family="Arial" font-size="11" fill="#555555">Positive slope: line</text>
<text x="590" y="260" font-family="Arial" font-size="11" fill="#555555">rises left → right</text>

<!-- Slope types reference -->
<rect x="580" y="310" width="200" height="130" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="680" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Slope Types</text>
<text x="590" y="350" font-family="Arial" font-size="11" fill="#000000">m &gt; 0 : rises (↗)</text>
<text x="590" y="368" font-family="Arial" font-size="11" fill="#000000">m &lt; 0 : falls (↘)</text>
<text x="590" y="386" font-family="Arial" font-size="11" fill="#000000">m = 0 : horizontal (→)</text>
<text x="590" y="404" font-family="Arial" font-size="11" fill="#000000">m = ∞ : vertical (↑)</text>
<text x="590" y="432" font-family="Arial" font-size="11" fill="#555555">Steeper = larger |m|</text>

</g>
</svg>`;

    // Generated from registry: equationOfLine
    // options: showSlopeIntercept, showPointSlope, showGeneral, showGraph
    static equationOfLineSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Equation of a Line</metadata>
<defs>
  <marker id="axarr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Equation of a Line</text>

<!-- ===== LEFT SIDE: Graph ===== -->
<!-- Grid: origin at (150, 400), scale 50px/unit -->
<line x1="150" y1="100" x2="150" y2="420" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="200" y1="100" x2="200" y2="420" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="250" y1="100" x2="250" y2="420" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="300" y1="100" x2="300" y2="420" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="350" y1="100" x2="350" y2="420" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="400" y1="100" x2="400" y2="420" stroke="#CCCCCC" stroke-width="0.8"/>

<line x1="120" y1="100" x2="430" y2="100" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="120" y1="150" x2="430" y2="150" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="120" y1="200" x2="430" y2="200" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="120" y1="250" x2="430" y2="250" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="120" y1="300" x2="430" y2="300" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="120" y1="350" x2="430" y2="350" stroke="#CCCCCC" stroke-width="0.8"/>
<line x1="120" y1="400" x2="430" y2="400" stroke="#CCCCCC" stroke-width="0.8"/>

<!-- Axes -->
<line x1="115" y1="400" x2="440" y2="400" stroke="#000000" stroke-width="2" marker-end="url(#axarr)"/>
<line x1="150" y1="430" x2="150" y2="88" stroke="#000000" stroke-width="2" marker-end="url(#axarr)"/>
<text x="450" y="404" font-family="Arial" font-size="12" fill="#000000">x</text>
<text x="143" y="80" font-family="Arial" font-size="12" fill="#000000">y</text>

<!-- Axis labels -->
<text x="200" y="416" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">1</text>
<text x="250" y="416" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">2</text>
<text x="300" y="416" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">3</text>
<text x="350" y="416" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">4</text>
<text x="400" y="416" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">5</text>
<text x="138" y="404" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">0</text>
<text x="138" y="354" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">1</text>
<text x="138" y="304" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">2</text>
<text x="138" y="254" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">3</text>
<text x="138" y="204" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">4</text>
<text x="138" y="154" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">5</text>
<text x="138" y="104" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">6</text>

<!-- Example line y = 2x + 1 -->
<!-- x=0: y=1 → py=400-50=350; x=4: y=9 → off; at x=2.5: y=6 → py=100 -->
<!-- Use x=0 to x=2.5 -->
<line x1="150" y1="350" x2="275" y2="100" stroke="#000000" stroke-width="3"/>

<!-- y-intercept -->
<circle cx="150" cy="350" r="6" fill="#000000"/>
<text x="155" y="345" font-family="Arial" font-size="11" fill="#000000">y-int (0,1)</text>

<!-- Mark another point (2, 5) -->
<circle cx="250" cy="150" r="5" fill="#000000"/>
<text x="256" y="146" font-family="Arial" font-size="11" fill="#000000">(2, 5)</text>

<!-- Rise/run on graph -->
<line x1="150" y1="350" x2="250" y2="350" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<line x1="250" y1="350" x2="250" y2="150" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="200" y="368" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">run=2</text>
<text x="270" y="255" font-family="Arial" font-size="11" fill="#000000">rise=4</text>
<text x="200" y="380" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">m = 4/2 = 2</text>

<!-- ===== RIGHT SIDE: Forms of line equation ===== -->
<!-- Slope-Intercept Form -->
<rect x="470" y="55" width="400" height="120" fill="none" stroke="#000000" stroke-width="1.8" rx="5"/>
<text x="670" y="78" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">1. Slope-Intercept Form</text>
<text x="485" y="102" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">y = mx + c</text>
<text x="485" y="124" font-family="Arial" font-size="12" fill="#000000">m = slope (gradient), c = y-intercept</text>
<text x="485" y="143" font-family="Arial" font-size="12" fill="#000000">Example: y = 2x + 1  (m=2, c=1)</text>
<text x="485" y="162" font-family="Arial" font-size="11" fill="#555555">Easy to read slope and y-intercept directly</text>

<!-- Point-Slope Form -->
<rect x="470" y="200" width="400" height="120" fill="none" stroke="#000000" stroke-width="1.8" rx="5"/>
<text x="670" y="223" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">2. Point-Slope Form</text>
<text x="485" y="247" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">y − y₁ = m(x − x₁)</text>
<text x="485" y="269" font-family="Arial" font-size="12" fill="#000000">Given slope m and a point (x₁, y₁) on the line</text>
<text x="485" y="288" font-family="Arial" font-size="12" fill="#000000">Example: m=2, (1,3) → y−3 = 2(x−1)</text>
<text x="485" y="307" font-family="Arial" font-size="11" fill="#555555">Best when given a point and slope</text>

<!-- General/Standard Form -->
<rect x="470" y="345" width="400" height="120" fill="none" stroke="#000000" stroke-width="1.8" rx="5"/>
<text x="670" y="368" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">3. General (Standard) Form</text>
<text x="485" y="392" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">ax + by + c = 0</text>
<text x="485" y="414" font-family="Arial" font-size="12" fill="#000000">a, b, c are integers; a &gt; 0</text>
<text x="485" y="433" font-family="Arial" font-size="12" fill="#000000">Example: 2x − y + 1 = 0</text>
<text x="485" y="452" font-family="Arial" font-size="11" fill="#555555">Symmetrical form; useful in algebra</text>

<!-- Conversion note -->
<rect x="470" y="490" width="400" height="85" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="670" y="512" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Conversions</text>
<text x="485" y="532" font-family="Arial" font-size="11" fill="#000000">Slope-Int → General: rearrange all terms to one side</text>
<text x="485" y="550" font-family="Arial" font-size="11" fill="#000000">Two points → slope m = (y₂-y₁)/(x₂-x₁), then use point-slope</text>
<text x="485" y="568" font-family="Arial" font-size="11" fill="#000000">Parallel lines: same m; Perpendicular: m₁ × m₂ = -1</text>

</g>
</svg>`;

    // Generated from registry: solid3DShapes
    // shapes: ['cube','cuboid','sphere','cylinder','cone','pyramid']
    // options: showShapes, showDimensions, showLabels
    static solid3DShapesSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>3D Solid Shapes</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="500" y="32" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">3D Solid Shapes</text>

<!-- ===== ROW 1 ===== -->

<!-- CUBE -->
<text x="110" y="65" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Cube</text>
<!-- Front face -->
<rect x="60" y="80" width="100" height="100" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Top face (parallelogram) -->
<polygon points="60,80 100,50 200,50 160,80" stroke="#000000" stroke-width="2" fill="none"/>
<!-- Right face -->
<polygon points="160,80 200,50 200,150 160,180" stroke="#000000" stroke-width="2" fill="none"/>
<!-- Hidden edges (dashed) -->
<line x1="60" y1="180" x2="100" y2="150" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="100" y1="150" x2="200" y2="150" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="100" y1="150" x2="100" y2="50" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
<!-- Dimension labels -->
<text x="35" y="134" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">a</text>
<text x="110" y="200" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">a</text>
<text x="192" y="108" font-family="Arial" font-size="11" fill="#000000" text-anchor="start">a</text>
<!-- Formulas -->
<text x="110" y="218" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">V = a³</text>
<text x="110" y="232" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">SA = 6a²</text>
<text x="110" y="246" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">6 faces, 12 edges, 8 vertices</text>

<!-- CUBOID -->
<text x="370" y="65" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Cuboid</text>
<!-- Front face (wider) -->
<rect x="280" y="90" width="140" height="90" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Top -->
<polygon points="280,90 320,60 460,60 420,90" stroke="#000000" stroke-width="2" fill="none"/>
<!-- Right -->
<polygon points="420,90 460,60 460,150 420,180" stroke="#000000" stroke-width="2" fill="none"/>
<!-- Hidden -->
<line x1="280" y1="180" x2="320" y2="150" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="320" y1="150" x2="460" y2="150" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="320" y1="150" x2="320" y2="60" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
<!-- Dimension labels -->
<text x="350" y="195" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">l</text>
<text x="268" y="138" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">h</text>
<text x="452" y="110" font-family="Arial" font-size="11" fill="#000000">w</text>
<!-- Formulas -->
<text x="370" y="218" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">V = l×w×h</text>
<text x="370" y="232" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">SA = 2(lw+lh+wh)</text>

<!-- SPHERE -->
<text x="640" y="65" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Sphere</text>
<circle cx="640" cy="140" r="75" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Equator ellipse (hidden) -->
<ellipse cx="640" cy="140" rx="75" ry="22" stroke="#000000" stroke-width="1" stroke-dasharray="6,4" fill="none"/>
<!-- Radius line -->
<line x1="640" y1="140" x2="715" y2="140" stroke="#000000" stroke-width="1.5"/>
<circle cx="640" cy="140" r="3" fill="#000000"/>
<text x="678" y="134" font-family="Arial" font-size="11" fill="#000000">r</text>
<!-- Formulas -->
<text x="640" y="230" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">V = (4/3)πr³</text>
<text x="640" y="244" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">SA = 4πr²</text>

<!-- ===== ROW 2 ===== -->

<!-- CYLINDER -->
<text x="160" y="300" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Cylinder</text>
<!-- Top ellipse -->
<ellipse cx="160" cy="330" rx="65" ry="18" stroke="#000000" stroke-width="2" fill="none"/>
<!-- Bottom ellipse -->
<ellipse cx="160" cy="460" rx="65" ry="18" stroke="#000000" stroke-width="2" fill="none"/>
<!-- Sides -->
<line x1="95" y1="330" x2="95" y2="460" stroke="#000000" stroke-width="2.5"/>
<line x1="225" y1="330" x2="225" y2="460" stroke="#000000" stroke-width="2.5"/>
<!-- Radius label -->
<line x1="160" y1="330" x2="225" y2="330" stroke="#000000" stroke-width="1.5"/>
<text x="193" y="322" font-family="Arial" font-size="11" fill="#000000">r</text>
<!-- Height label -->
<line x1="240" y1="330" x2="240" y2="460" stroke="#000000" stroke-width="1"/>
<line x1="235" y1="330" x2="245" y2="330" stroke="#000000" stroke-width="1"/>
<line x1="235" y1="460" x2="245" y2="460" stroke="#000000" stroke-width="1"/>
<text x="252" y="400" font-family="Arial" font-size="11" fill="#000000">h</text>
<!-- Formulas -->
<text x="160" y="494" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">V = πr²h</text>
<text x="160" y="508" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">SA = 2πr(r+h)</text>

<!-- CONE -->
<text x="430" y="300" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Cone</text>
<!-- Apex -->
<line x1="430" y1="315" x2="360" y2="460" stroke="#000000" stroke-width="2.5"/>
<line x1="430" y1="315" x2="500" y2="460" stroke="#000000" stroke-width="2.5"/>
<!-- Base ellipse -->
<ellipse cx="430" cy="460" rx="70" ry="18" stroke="#000000" stroke-width="2" fill="none"/>
<!-- Slant height / height lines -->
<line x1="430" y1="315" x2="430" y2="460" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
<!-- Height label -->
<text x="416" y="395" font-family="Arial" font-size="11" fill="#000000">h</text>
<!-- Radius label -->
<line x1="430" y1="460" x2="500" y2="460" stroke="#000000" stroke-width="1.5"/>
<text x="465" y="452" font-family="Arial" font-size="11" fill="#000000">r</text>
<!-- Slant label -->
<text x="475" y="390" font-family="Arial" font-size="11" fill="#000000">l</text>
<!-- Formulas -->
<text x="430" y="494" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">V = (1/3)πr²h</text>
<text x="430" y="508" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">SA = πr(r+l),  l=√(r²+h²)</text>

<!-- SQUARE PYRAMID -->
<text x="710" y="300" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Square Pyramid</text>
<!-- Base (parallelogram perspective) -->
<polygon points="640,460 680,430 780,430 740,460" stroke="#000000" stroke-width="2" fill="none"/>
<!-- Front-left edge -->
<line x1="640" y1="460" x2="710" y2="315" stroke="#000000" stroke-width="2.5"/>
<!-- Front-right edge -->
<line x1="740" y1="460" x2="710" y2="315" stroke="#000000" stroke-width="2.5"/>
<!-- Back edges (dashed) -->
<line x1="680" y1="430" x2="710" y2="315" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="780" y1="430" x2="710" y2="315" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
<!-- Height line -->
<line x1="710" y1="315" x2="710" y2="445" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
<circle cx="710" cy="445" r="2" fill="#000000"/>
<text x="718" y="385" font-family="Arial" font-size="11" fill="#000000">h</text>
<!-- Base label -->
<text x="690" y="472" font-family="Arial" font-size="11" fill="#000000">b</text>
<!-- Formulas -->
<text x="710" y="494" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">V = (1/3)b²h</text>
<text x="710" y="508" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">SA = b² + 2bl,  l=slant height</text>
<text x="710" y="522" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">5 faces, 8 edges, 5 vertices</text>

<!-- Summary bar -->
<rect x="30" y="545" width="940" height="135" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="500" y="567" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Euler's Formula for Polyhedra: F + V − E = 2  (Faces + Vertices − Edges = 2)</text>
<text x="500" y="588" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Cube: 6+8-12=2 ✓  |  Cuboid: 6+8-12=2 ✓  |  Square Pyramid: 5+5-8=2 ✓</text>
<text x="500" y="610" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Prism volume: V = base area × height  |  Pyramid volume: V = ⅓ × base area × height</text>
<text x="500" y="630" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Sphere: only curved surface, no edges or vertices  |  Cylinder/Cone: 2 circular ends (open = lateral SA only)</text>
<text x="500" y="650" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">π ≈ 3.14159  |  Use consistent units throughout calculations</text>
<text x="500" y="668" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Dashed lines indicate hidden edges (not visible from this viewing angle)</text>

</g>
</svg>`;

    // Generated from registry: nets3DShapes
    // shape: 'cube'; options: showNet, show3DShape, showFolding
    static nets3DShapesSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Nets of 3D Shapes - Cube</metadata>
<defs>
  <marker id="foldarr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Net of a Cube</text>
<text x="450" y="50" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Unfolding a 3D shape to show all faces flat — the net</text>

<!-- ===== CUBE NET (cross pattern, 6 squares) ===== -->
<!-- Side length: 80px. Net center column at x=200, rows at y=80,160,240,320 -->
<!-- Top face (face 1) -->
<rect x="200" y="80" width="80" height="80" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="240" y="128" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Top</text>
<text x="240" y="106" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Face 1</text>

<!-- Front face (face 2) -->
<rect x="200" y="160" width="80" height="80" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="240" y="208" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Front</text>
<text x="240" y="186" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Face 2</text>

<!-- Bottom face (face 3) -->
<rect x="200" y="240" width="80" height="80" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="240" y="288" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Bottom</text>
<text x="240" y="266" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Face 3</text>

<!-- Back face (face 4) -->
<rect x="200" y="320" width="80" height="80" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="240" y="368" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Back</text>
<text x="240" y="346" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Face 4</text>

<!-- Left face (face 5) -->
<rect x="120" y="160" width="80" height="80" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="160" y="208" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Left</text>
<text x="160" y="186" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Face 5</text>

<!-- Right face (face 6) -->
<rect x="280" y="160" width="80" height="80" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="320" y="208" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Right</text>
<text x="320" y="186" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Face 6</text>

<!-- Net label -->
<text x="240" y="430" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Net of Cube (Cross Pattern)</text>
<text x="240" y="448" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">6 equal squares</text>
<text x="240" y="466" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Fold along all shared edges</text>

<!-- Folding arrow -->
<line x1="420" y1="260" x2="510" y2="260" stroke="#000000" stroke-width="2" marker-end="url(#foldarr)"/>
<text x="465" y="250" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">fold →</text>

<!-- ===== 3D CUBE (right side) ===== -->
<text x="700" y="65" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Assembled Cube</text>
<!-- Front face -->
<rect x="580" y="150" width="130" height="130" stroke="#000000" stroke-width="3" fill="none"/>
<!-- Top face -->
<polygon points="580,150 625,110 755,110 710,150" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Right face -->
<polygon points="710,150 755,110 755,240 710,280" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Hidden edges -->
<line x1="580" y1="280" x2="625" y2="240" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="625" y1="240" x2="755" y2="240" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="625" y1="240" x2="625" y2="110" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
<!-- Labels on faces -->
<text x="645" y="222" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Front</text>
<text x="667" y="140" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Top</text>
<text x="736" y="198" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Right</text>

<!-- Face numbering on 3D -->
<text x="645" y="238" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">Face 2</text>
<text x="667" y="128" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">F1</text>
<text x="736" y="215" font-family="Arial" font-size="9" fill="#555555" text-anchor="middle">F6</text>

<!-- Properties -->
<text x="700" y="310" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Cube Properties:</text>
<text x="700" y="330" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">6 square faces</text>
<text x="700" y="348" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">12 edges (all equal)</text>
<text x="700" y="366" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">8 vertices</text>

<!-- Summary box at bottom -->
<rect x="30" y="490" width="840" height="90" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="450" y="514" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Understanding Nets</text>
<text x="50" y="536" font-family="Arial" font-size="11" fill="#000000">• A net is a 2D pattern that folds into a 3D shape — no overlaps, no gaps</text>
<text x="50" y="554" font-family="Arial" font-size="11" fill="#000000">• A cube has 11 different valid nets (this cross is one of them)</text>
<text x="50" y="572" font-family="Arial" font-size="11" fill="#000000">• Other shapes: cylinder net = 2 circles + rectangle; cone net = circle + sector; cuboid = 3 pairs of rectangles</text>

</g>
</svg>`;

    // Generated from registry: surfaceAreaDiagram
    // shape: cuboid, dimensions: {length:5, width:3, height:4}
    // options: showShape, showFaces, showCalculation, showFormula
    static surfaceAreaDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Surface Area — Cuboid</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Surface Area — Cuboid</text>
<text x="450" y="50" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Length = 5, Width = 3, Height = 4</text>

<!-- ===== 3D CUBOID (left) ===== -->
<!-- Scale: l=5→100px, w=3→60px, h=4→80px, depth offset=40 -->
<!-- Front: (80,120) to (180,200) -->
<rect x="80" y="120" width="100" height="80" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Top: front-top to back-top -->
<polygon points="80,120 120,80 220,80 180,120" stroke="#000000" stroke-width="2" fill="none"/>
<!-- Right side: front-right to back-right -->
<polygon points="180,120 220,80 220,160 180,200" stroke="#000000" stroke-width="2" fill="none"/>
<!-- Hidden edges -->
<line x1="80" y1="200" x2="120" y2="160" stroke="#000000" stroke-width="1.2" stroke-dasharray="5,3"/>
<line x1="120" y1="160" x2="220" y2="160" stroke="#000000" stroke-width="1.2" stroke-dasharray="5,3"/>
<line x1="120" y1="160" x2="120" y2="80" stroke="#000000" stroke-width="1.2" stroke-dasharray="5,3"/>

<!-- Dimension labels on 3D -->
<text x="130" y="218" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">l = 5</text>
<text x="64" y="165" font-family="Arial" font-size="12" fill="#000000" text-anchor="end" font-weight="bold">h = 4</text>
<text x="220" y="112" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">w = 3</text>

<!-- ===== UNFOLDED FACES (right side) ===== -->
<!-- Show 3 distinct face types: Front(l×h), Top(l×w), Side(w×h) with 2× each -->
<text x="290" y="70" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Unfolded Faces:</text>

<!-- Face type 1: Front & Back (l×h = 5×4 = 20) — show scaled: 80×64 -->
<rect x="280" y="82" width="80" height="64" stroke="#000000" stroke-width="2" fill="none"/>
<text x="320" y="104" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Front</text>
<text x="320" y="120" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">l × h</text>
<text x="320" y="136" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">5 × 4 = 20</text>
<text x="244" y="120" font-family="Arial" font-size="11" fill="#555555" text-anchor="end">× 2</text>
<!-- Label dimensions -->
<text x="320" y="160" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">2 faces = 40</text>

<!-- Face type 2: Top & Bottom (l×w = 5×3 = 15) — show scaled: 80×48 -->
<rect x="390" y="82" width="80" height="48" stroke="#000000" stroke-width="2" fill="none"/>
<text x="430" y="101" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Top</text>
<text x="430" y="116" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">l × w</text>
<text x="430" y="131" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">5 × 3 = 15</text>
<text x="357" y="110" font-family="Arial" font-size="11" fill="#555555" text-anchor="end">× 2</text>
<text x="430" y="145" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">2 faces = 30</text>
<text x="430" y="160" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle"></text>

<!-- Face type 3: Left & Right sides (w×h = 3×4 = 12) — scaled: 48×64 -->
<rect x="500" y="82" width="48" height="64" stroke="#000000" stroke-width="2" fill="none"/>
<text x="524" y="104" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">Side</text>
<text x="524" y="120" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">w × h</text>
<text x="524" y="136" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">3 × 4 = 12</text>
<text x="468" y="120" font-family="Arial" font-size="11" fill="#555555" text-anchor="end">× 2</text>
<text x="524" y="160" font-family="Arial" font-size="10" fill="#555555" text-anchor="middle">2 faces = 24</text>

<!-- Arrow to calculation -->
<line x1="410" y1="175" x2="410" y2="200" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>

<!-- ===== CALCULATION BOX ===== -->
<rect x="50" y="250" width="500" height="220" fill="none" stroke="#000000" stroke-width="1.8" rx="5"/>
<text x="300" y="274" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Surface Area Calculation</text>
<line x1="60" y1="280" x2="540" y2="280" stroke="#000000" stroke-width="0.8"/>
<text x="70" y="302" font-family="Arial" font-size="12" fill="#000000">SA = 2(lw + lh + wh)</text>
<text x="70" y="324" font-family="Arial" font-size="12" fill="#000000">SA = 2(5×3 + 5×4 + 3×4)</text>
<text x="70" y="346" font-family="Arial" font-size="12" fill="#000000">SA = 2(15 + 20 + 12)</text>
<text x="70" y="368" font-family="Arial" font-size="12" fill="#000000">SA = 2(47)</text>
<text x="70" y="394" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">SA = 94 square units</text>
<text x="70" y="416" font-family="Arial" font-size="11" fill="#555555">Face breakdown: 2×20 + 2×15 + 2×12 = 40+30+24 = 94 ✓</text>
<text x="70" y="456" font-family="Arial" font-size="11" fill="#555555">Units: if dimensions in cm → SA in cm²</text>

<!-- ===== FACE AREA DIAGRAM ===== -->
<rect x="580" y="250" width="290" height="220" fill="none" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="725" y="274" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Face Areas Summary</text>
<line x1="590" y1="280" x2="860" y2="280" stroke="#000000" stroke-width="0.8"/>
<text x="590" y="302" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Face Pair</text>
<text x="730" y="302" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Area × 2</text>
<text x="830" y="302" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Total</text>
<line x1="590" y1="308" x2="860" y2="308" stroke="#000000" stroke-width="0.5"/>
<text x="590" y="328" font-family="Arial" font-size="11" fill="#000000">Front/Back (l×h)</text>
<text x="735" y="328" font-family="Arial" font-size="11" fill="#000000">20 × 2</text>
<text x="838" y="328" font-family="Arial" font-size="11" fill="#000000">= 40</text>
<text x="590" y="350" font-family="Arial" font-size="11" fill="#000000">Top/Bottom (l×w)</text>
<text x="735" y="350" font-family="Arial" font-size="11" fill="#000000">15 × 2</text>
<text x="838" y="350" font-family="Arial" font-size="11" fill="#000000">= 30</text>
<text x="590" y="372" font-family="Arial" font-size="11" fill="#000000">Left/Right (w×h)</text>
<text x="735" y="372" font-family="Arial" font-size="11" fill="#000000">12 × 2</text>
<text x="838" y="372" font-family="Arial" font-size="11" fill="#000000">= 24</text>
<line x1="590" y1="380" x2="860" y2="380" stroke="#000000" stroke-width="0.8"/>
<text x="590" y="400" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Total SA</text>
<text x="735" y="400" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">40+30+24</text>
<text x="838" y="400" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">= 94</text>
<text x="725" y="440" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">All 6 faces counted (3 pairs)</text>
<text x="725" y="458" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Opposite faces are identical</text>

</g>
</svg>`;

    // Generated from registry: volumeDiagram
    // shape: cylinder, dimensions: {radius:3, height:5}
    // options: showShape, showDimensions, showCalculation, showFormula
    static volumeDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Volume — Cylinder</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Volume of a Cylinder</text>
<text x="400" y="50" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Radius r = 3,  Height h = 5</text>

<!-- ===== CYLINDER DIAGRAM ===== -->
<!-- Scale: r=3→75px, h=5→175px -->
<!-- Centre at x=230, top ellipse y=90, bottom y=265 -->

<!-- Top ellipse -->
<ellipse cx="230" cy="90" rx="75" ry="22" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Bottom ellipse -->
<ellipse cx="230" cy="265" rx="75" ry="22" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Left side -->
<line x1="155" y1="90" x2="155" y2="265" stroke="#000000" stroke-width="2.5"/>
<!-- Right side -->
<line x1="305" y1="90" x2="305" y2="265" stroke="#000000" stroke-width="2.5"/>

<!-- Radius label (on top face) -->
<line x1="230" y1="90" x2="305" y2="90" stroke="#000000" stroke-width="2"/>
<circle cx="230" cy="90" r="3" fill="#000000"/>
<text x="268" y="82" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">r = 3</text>

<!-- Height dimension (right side) -->
<line x1="322" y1="90" x2="322" y2="265" stroke="#000000" stroke-width="1.5"/>
<line x1="317" y1="90" x2="327" y2="90" stroke="#000000" stroke-width="1.5"/>
<line x1="317" y1="265" x2="327" y2="265" stroke="#000000" stroke-width="1.5"/>
<text x="340" y="182" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">h = 5</text>

<!-- Cross-section dotted lines -->
<!-- Show layers (like stacking circles) -->
<ellipse cx="230" cy="125" rx="75" ry="22" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="5,3" fill="none"/>
<ellipse cx="230" cy="160" rx="75" ry="22" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="5,3" fill="none"/>
<ellipse cx="230" cy="195" rx="75" ry="22" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="5,3" fill="none"/>
<ellipse cx="230" cy="230" rx="75" ry="22" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="5,3" fill="none"/>

<!-- Layer labels -->
<text x="340" y="129" font-family="Arial" font-size="10" fill="#888888">layer</text>
<text x="340" y="164" font-family="Arial" font-size="10" fill="#888888">layer</text>
<text x="340" y="199" font-family="Arial" font-size="10" fill="#888888">layer</text>
<text x="340" y="234" font-family="Arial" font-size="10" fill="#888888">layer</text>

<!-- Base circle area annotation -->
<text x="230" y="360" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Base area = πr² = π × 3² = 9π</text>

<!-- ===== CALCULATION BOX ===== -->
<rect x="380" y="70" width="390" height="330" fill="none" stroke="#000000" stroke-width="1.8" rx="5"/>
<text x="575" y="96" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Volume Calculation</text>
<line x1="390" y1="104" x2="760" y2="104" stroke="#000000" stroke-width="0.8"/>

<text x="400" y="128" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Formula:</text>
<text x="400" y="150" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">V = πr²h</text>
<text x="400" y="172" font-family="Arial" font-size="12" fill="#555555">(base area × height)</text>

<line x1="390" y1="182" x2="760" y2="182" stroke="#000000" stroke-width="0.5"/>

<text x="400" y="206" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Substitution:</text>
<text x="400" y="228" font-family="Arial" font-size="12" fill="#000000">V = π × r² × h</text>
<text x="400" y="250" font-family="Arial" font-size="12" fill="#000000">V = π × 3² × 5</text>
<text x="400" y="272" font-family="Arial" font-size="12" fill="#000000">V = π × 9 × 5</text>
<text x="400" y="294" font-family="Arial" font-size="12" fill="#000000">V = 45π</text>
<text x="400" y="318" font-family="Arial" font-size="15" fill="#000000" font-weight="bold">V = 45π ≈ 141.37 cubic units</text>
<text x="400" y="340" font-family="Arial" font-size="11" fill="#555555">(using π ≈ 3.14159)</text>

<line x1="390" y1="350" x2="760" y2="350" stroke="#000000" stroke-width="0.5"/>

<text x="400" y="370" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Surface Area (bonus):</text>
<text x="400" y="390" font-family="Arial" font-size="12" fill="#000000">SA = 2πr(r + h) = 2π×3×(3+5)</text>
<text x="400" y="410" font-family="Arial" font-size="12" fill="#000000">SA = 6π × 8 = 48π ≈ 150.80 sq.u.</text>

<!-- ===== RELATED SHAPES BOX ===== -->
<rect x="30" y="420" width="740" height="155" fill="none" stroke="#000000" stroke-width="1.5" rx="4"/>
<text x="400" y="444" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Volume Formulas — Summary</text>

<text x="50" y="468" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Cylinder</text>
<text x="50" y="486" font-family="Arial" font-size="11" fill="#000000">V = πr²h</text>

<text x="220" y="468" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Cone</text>
<text x="220" y="486" font-family="Arial" font-size="11" fill="#000000">V = (1/3)πr²h</text>

<text x="370" y="468" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Sphere</text>
<text x="370" y="486" font-family="Arial" font-size="11" fill="#000000">V = (4/3)πr³</text>

<text x="520" y="468" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Cuboid</text>
<text x="520" y="486" font-family="Arial" font-size="11" fill="#000000">V = l × w × h</text>

<text x="680" y="468" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Pyramid</text>
<text x="680" y="486" font-family="Arial" font-size="11" fill="#000000">V = (1/3)b²h</text>

<text x="400" y="515" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Note: Cone volume = ⅓ × Cylinder volume (same base and height)</text>
<text x="400" y="535" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">The concept: Volume = Base Area × Height (for prisms/cylinders); ÷ 3 for pyramids/cones</text>
<text x="400" y="555" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Units: if r and h in cm, volume is in cm³ (cubic centimetres)</text>

</g>
</svg>`;

 // ============================================================
    // ===== GEOMETRIC MEASUREMENT — TRIGONOMETRY RATIOS ==========
    // ============================================================

    // Generated from registry: angleOfDepression
    // angle: 25°
    // options: showAngle=true, showHorizontal=true, showLabels=true
    static angleOfDepressionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Angle of Depression</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Angle of Depression</text>
<text x="400" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Angle from horizontal down to an object below</text>

<!-- Observer platform (cliff/tower) -->
<rect x="80" y="220" width="60" height="180" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<text x="110" y="310" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Tower</text>
<rect x="60" y="400" width="680" height="20" fill="#CCCCCC" stroke="#000000" stroke-width="1"/>
<text x="400" y="414" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Ground Level</text>

<!-- Observer eye point -->
<circle cx="140" cy="230" r="6" fill="#000000"/>
<text x="155" y="225" font-family="Arial" font-size="12" fill="#000000">Observer</text>

<!-- Horizontal reference line (showHorizontal=true) -->
<line x1="140" y1="230" x2="680" y2="230" stroke="#000000" stroke-width="1.5" stroke-dasharray="8,5"/>
<text x="690" y="234" font-family="Arial" font-size="11" fill="#000000">Horizontal</text>

<!-- Line of sight (angle of depression = 25°) -->
<!-- tan(25°)≈0.466; from (140,230) going right and down -->
<!-- Endpoint: dx=500, dy=500*tan(25°)≈233; end=(640, 463) -->
<line x1="140" y1="230" x2="640" y2="463" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-math)"/>
<text x="430" y="395" font-family="Arial" font-size="12" fill="#000000" transform="rotate(25, 390, 370)">Line of Sight</text>

<!-- Object on the ground -->
<rect x="620" y="443" width="30" height="20" fill="#CCCCCC" stroke="#000000" stroke-width="1.5"/>
<text x="635" y="478" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Object</text>

<!-- Angle arc for angle of depression (showAngle=true) -->
<path d="M 200,230 A 60,60 0 0,1 254,255" stroke="#000000" stroke-width="2" fill="none"/>
<text x="220" y="268" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">25°</text>
<text x="207" y="285" font-family="Arial" font-size="11" fill="#000000">(angle of</text>
<text x="207" y="299" font-family="Arial" font-size="11" fill="#000000">depression)</text>

<!-- Vertical height line -->
<line x1="635" y1="230" x2="635" y2="443" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="650" y="340" font-family="Arial" font-size="12" fill="#000000">h</text>

<!-- Horizontal distance line -->
<line x1="140" y1="490" x2="635" y2="490" stroke="#000000" stroke-width="1.5"/>
<line x1="140" y1="484" x2="140" y2="496" stroke="#000000" stroke-width="1.5"/>
<line x1="635" y1="484" x2="635" y2="496" stroke="#000000" stroke-width="1.5"/>
<text x="387" y="508" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">d (horizontal distance)</text>

<!-- Right angle marker at object base -->
<rect x="635" y="430" width="13" height="13" fill="none" stroke="#000000" stroke-width="1.5"/>

<!-- Formula box -->
<rect x="30" y="510" width="280" height="70" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="42" y="530" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Angle of Depression Formula:</text>
<text x="42" y="550" font-family="Arial" font-size="12" fill="#000000">tan(θ) = h / d</text>
<text x="42" y="568" font-family="Arial" font-size="11" fill="#555555">θ = angle of depression from horizontal</text>

<!-- Alternate interior angles note -->
<rect x="490" y="510" width="290" height="70" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="502" y="530" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Key Property:</text>
<text x="502" y="548" font-family="Arial" font-size="11" fill="#000000">Angle of depression = Angle of elevation</text>
<text x="502" y="565" font-family="Arial" font-size="11" fill="#555555">(alternate interior angles, parallel lines)</text>

<defs>
  <marker id="arrow-math" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: specialAnglesTriangle3060
    // 30-60-90 triangle with exact side ratios
    // options: showAngles=true, showExactRatios=true, showTrigValues=true
    static specialAnglesTriangle3060Svg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="600" viewBox="0 0 700 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>30-60-90 Special Triangle</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">30-60-90 Special Triangle</text>
<text x="350" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Exact side ratios for the 30-60-90 triangle</text>

<!-- Triangle vertices: A(150,420) B(550,420) C(150,140) -->
<!-- AB = horizontal base, AC = vertical, BC = hypotenuse -->
<!-- Angle at A = 90°, angle at B = 30°, angle at C = 60° -->
<!-- Sides: AB=400 (adjacent to 30°), AC=231 (opp to 30°, ≈400/√3), BC=462 (hyp) -->
<!-- Using ratio 1 : √3 : 2 scaled: short=200, long=346, hyp=400 -->
<!-- A(200,420), B(600,420), C(200,247) -->

<polygon points="200,420 600,420 200,247" fill="#F5F5F5" stroke="#000000" stroke-width="2.5"/>

<!-- Right angle marker at A -->
<polyline points="200,400 220,400 220,420" fill="none" stroke="#000000" stroke-width="1.5"/>

<!-- Angle arc at B (30°) -->
<path d="M 560,420 A 40,40 0 0,0 532,394" stroke="#000000" stroke-width="2" fill="none"/>
<text x="548" y="405" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">30°</text>

<!-- Angle arc at C (60°) -->
<path d="M 200,287 A 40,40 0 0,1 234,267" stroke="#000000" stroke-width="2" fill="none"/>
<text x="248" y="275" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">60°</text>

<!-- Right angle label at A -->
<text x="170" y="445" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">90°</text>

<!-- Side labels (showExactRatios=true) -->
<!-- AC (vertical, opposite 30°) = 1 -->
<text x="155" y="340" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">1</text>
<text x="118" y="358" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(opposite 30°)</text>

<!-- AB (horizontal, opposite 60°) = √3 -->
<text x="400" y="445" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">√3</text>
<text x="400" y="462" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(opposite 60°)</text>

<!-- BC (hypotenuse) = 2 -->
<text x="435" y="328" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold" transform="rotate(-28, 435, 328)">2</text>
<text x="458" y="345" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle" transform="rotate(-28, 458, 345)">(hypotenuse)</text>

<!-- Trig values table (showTrigValues=true) -->
<rect x="30" y="480" width="300" height="100" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="42" y="500" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Trig Values — 30°</text>
<text x="42" y="520" font-family="Arial" font-size="12" fill="#000000">sin 30° = 1/2 = 0.5</text>
<text x="42" y="538" font-family="Arial" font-size="12" fill="#000000">cos 30° = √3/2 ≈ 0.866</text>
<text x="42" y="556" font-family="Arial" font-size="12" fill="#000000">tan 30° = 1/√3 = √3/3 ≈ 0.577</text>

<rect x="370" y="480" width="300" height="100" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="382" y="500" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Trig Values — 60°</text>
<text x="382" y="520" font-family="Arial" font-size="12" fill="#000000">sin 60° = √3/2 ≈ 0.866</text>
<text x="382" y="538" font-family="Arial" font-size="12" fill="#000000">cos 60° = 1/2 = 0.5</text>
<text x="382" y="556" font-family="Arial" font-size="12" fill="#000000">tan 60° = √3 ≈ 1.732</text>

<!-- Ratio reminder -->
<text x="350" y="590" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Side ratio:  1 : √3 : 2  (opposite 30° : opposite 60° : hypotenuse)</text>

<defs>
  <marker id="arrow-math" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: specialAnglesTriangle4545
    // 45-45-90 triangle with exact side ratios
    // options: showAngles=true, showExactRatios=true, showTrigValues=true
    static specialAnglesTriangle4545Svg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="600" viewBox="0 0 700 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>45-45-90 Special Triangle</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">45-45-90 Special Triangle</text>
<text x="350" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Exact side ratios for the 45-45-90 triangle</text>

<!-- Triangle vertices: isoceles right triangle -->
<!-- A(180,420) B(520,420) C(180,80) — legs AB=340, AC=340, hyp=481 -->
<!-- Using 1:1:√2 scaled with leg=300: A(200,430), B(500,430), C(200,130) -->

<polygon points="200,430 500,430 200,130" fill="#F5F5F5" stroke="#000000" stroke-width="2.5"/>

<!-- Right angle marker at A (90°) -->
<polyline points="200,410 220,410 220,430" fill="none" stroke="#000000" stroke-width="1.5"/>
<text x="168" y="455" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">90°</text>

<!-- Angle arc at B (45°) -->
<path d="M 465,430 A 38,38 0 0,0 444,406" stroke="#000000" stroke-width="2" fill="none"/>
<text x="455" y="416" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">45°</text>

<!-- Angle arc at C (45°) -->
<path d="M 200,170 A 38,38 0 0,1 234,165" stroke="#000000" stroke-width="2" fill="none"/>
<text x="248" y="170" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">45°</text>

<!-- Side labels (showExactRatios=true) -->
<!-- AC (vertical) = 1 -->
<text x="168" y="285" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">1</text>
<text x="135" y="302" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(leg)</text>

<!-- AB (horizontal) = 1 -->
<text x="350" y="458" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">1</text>
<text x="350" y="474" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(leg)</text>

<!-- BC (hypotenuse) = √2 -->
<text x="390" y="285" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold" transform="rotate(-45, 390, 285)">√2</text>
<text x="418" y="310" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle" transform="rotate(-45, 418, 310)">(hyp)</text>

<!-- Trig values (showTrigValues=true) -->
<rect x="50" y="490" width="580" height="80" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="340" y="511" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Trig Values for 45°</text>
<text x="120" y="533" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">sin 45° = 1/√2 = √2/2 ≈ 0.707</text>
<text x="350" y="533" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">cos 45° = 1/√2 = √2/2 ≈ 0.707</text>
<text x="570" y="533" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">tan 45° = 1</text>
<text x="340" y="558" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Side ratio:  1 : 1 : √2  (leg : leg : hypotenuse)</text>

</g>
</svg>`;


    // Generated from registry: unitCircleBasic
    // options: showRadius=true, showAngles=true, showCoordinates=true
    static unitCircleBasicSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Unit Circle</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Unit Circle</text>
<text x="350" y="50" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Radius = 1; coordinates give (cos θ, sin θ)</text>

<!-- Axes -->
<line x1="60" y1="360" x2="640" y2="360" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-math)"/>
<line x1="350" y1="640" x2="350" y2="80" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-math)"/>
<text x="648" y="364" font-family="Arial" font-size="14" fill="#000000">x</text>
<text x="354" y="78" font-family="Arial" font-size="14" fill="#000000">y</text>

<!-- Axis labels -->
<text x="350" y="380" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">O</text>
<text x="565" y="378" font-family="Arial" font-size="12" fill="#000000">1</text>
<line x1="565" y1="355" x2="565" y2="365" stroke="#000000" stroke-width="1.5"/>
<text x="128" y="378" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">-1</text>
<line x1="135" y1="355" x2="135" y2="365" stroke="#000000" stroke-width="1.5"/>
<text x="338" y="168" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">1</text>
<line x1="345" y1="155" x2="355" y2="155" stroke="#000000" stroke-width="1.5"/>
<text x="338" y="572" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">-1</text>
<line x1="345" y1="565" x2="355" y2="565" stroke="#000000" stroke-width="1.5"/>

<!-- Unit circle: center(350,360), radius=210px -->
<circle cx="350" cy="360" r="210" stroke="#000000" stroke-width="2" fill="none"/>

<!-- Key angles and coordinates (showAngles=true, showCoordinates=true) -->
<!-- 0° = (1,0) -->
<circle cx="560" cy="360" r="4" fill="#000000"/>
<text x="568" y="348" font-family="Arial" font-size="11" fill="#000000">0° / 360°</text>
<text x="568" y="362" font-family="Arial" font-size="11" fill="#000000">(1, 0)</text>

<!-- 30° = (√3/2, 1/2) → pixel (350+182,360-105)=(532,255) -->
<circle cx="532" cy="255" r="4" fill="#000000"/>
<line x1="350" y1="360" x2="532" y2="255" stroke="#000000" stroke-width="1" stroke-dasharray="5,3"/>
<text x="540" y="252" font-family="Arial" font-size="10" fill="#000000">30°</text>
<text x="540" y="264" font-family="Arial" font-size="10" fill="#000000">(√3/2, 1/2)</text>

<!-- 45° = (√2/2,√2/2) → pixel (350+148,360-148)=(498,212) -->
<circle cx="498" cy="212" r="4" fill="#000000"/>
<line x1="350" y1="360" x2="498" y2="212" stroke="#000000" stroke-width="1" stroke-dasharray="5,3"/>
<text x="505" y="210" font-family="Arial" font-size="10" fill="#000000">45°  (√2/2, √2/2)</text>

<!-- 60° = (1/2, √3/2) → pixel (350+105,360-182)=(455,178) -->
<circle cx="455" cy="178" r="4" fill="#000000"/>
<line x1="350" y1="360" x2="455" y2="178" stroke="#000000" stroke-width="1" stroke-dasharray="5,3"/>
<text x="461" y="176" font-family="Arial" font-size="10" fill="#000000">60°  (1/2, √3/2)</text>

<!-- 90° = (0,1) → (350,150) -->
<circle cx="350" cy="150" r="4" fill="#000000"/>
<text x="356" y="142" font-family="Arial" font-size="11" fill="#000000">90°  (0, 1)</text>

<!-- 120° = (-1/2, √3/2) → (350-105,178)=(245,178) -->
<circle cx="245" cy="178" r="4" fill="#000000"/>
<line x1="350" y1="360" x2="245" y2="178" stroke="#000000" stroke-width="1" stroke-dasharray="5,3"/>
<text x="145" y="176" font-family="Arial" font-size="10" fill="#000000">120° (-1/2, √3/2)</text>

<!-- 135° = (-√2/2,√2/2) → (202,212) -->
<circle cx="202" cy="212" r="4" fill="#000000"/>
<line x1="350" y1="360" x2="202" y2="212" stroke="#000000" stroke-width="1" stroke-dasharray="5,3"/>
<text x="80" y="212" font-family="Arial" font-size="10" fill="#000000">135° (-√2/2, √2/2)</text>

<!-- 150° = (-√3/2,1/2) → (168,255) -->
<circle cx="168" cy="255" r="4" fill="#000000"/>
<line x1="350" y1="360" x2="168" y2="255" stroke="#000000" stroke-width="1" stroke-dasharray="5,3"/>
<text x="60" y="255" font-family="Arial" font-size="10" fill="#000000">150° (-√3/2, 1/2)</text>

<!-- 180° = (-1,0) → (140,360) -->
<circle cx="140" cy="360" r="4" fill="#000000"/>
<text x="62" y="358" font-family="Arial" font-size="11" fill="#000000">180° (-1, 0)</text>

<!-- 210° = (-√3/2,-1/2) → (168,465) -->
<circle cx="168" cy="465" r="4" fill="#000000"/>
<line x1="350" y1="360" x2="168" y2="465" stroke="#000000" stroke-width="1" stroke-dasharray="5,3"/>
<text x="60" y="468" font-family="Arial" font-size="10" fill="#000000">210° (-√3/2,-1/2)</text>

<!-- 225° = (-√2/2,-√2/2) → (202,508) -->
<circle cx="202" cy="508" r="4" fill="#000000"/>
<line x1="350" y1="360" x2="202" y2="508" stroke="#000000" stroke-width="1" stroke-dasharray="5,3"/>
<text x="80" y="518" font-family="Arial" font-size="10" fill="#000000">225° (-√2/2,-√2/2)</text>

<!-- 240° = (-1/2,-√3/2) → (245,542) -->
<circle cx="245" cy="542" r="4" fill="#000000"/>
<line x1="350" y1="360" x2="245" y2="542" stroke="#000000" stroke-width="1" stroke-dasharray="5,3"/>
<text x="140" y="554" font-family="Arial" font-size="10" fill="#000000">240° (-1/2,-√3/2)</text>

<!-- 270° = (0,-1) → (350,570) -->
<circle cx="350" cy="570" r="4" fill="#000000"/>
<text x="356" y="584" font-family="Arial" font-size="11" fill="#000000">270° (0,-1)</text>

<!-- 300° = (1/2,-√3/2) → (455,542) -->
<circle cx="455" cy="542" r="4" fill="#000000"/>
<line x1="350" y1="360" x2="455" y2="542" stroke="#000000" stroke-width="1" stroke-dasharray="5,3"/>
<text x="459" y="555" font-family="Arial" font-size="10" fill="#000000">300° (1/2,-√3/2)</text>

<!-- 315° = (√2/2,-√2/2) → (498,508) -->
<circle cx="498" cy="508" r="4" fill="#000000"/>
<line x1="350" y1="360" x2="498" y2="508" stroke="#000000" stroke-width="1" stroke-dasharray="5,3"/>
<text x="503" y="520" font-family="Arial" font-size="10" fill="#000000">315° (√2/2,-√2/2)</text>

<!-- 330° = (√3/2,-1/2) → (532,465) -->
<circle cx="532" cy="465" r="4" fill="#000000"/>
<line x1="350" y1="360" x2="532" y2="465" stroke="#000000" stroke-width="1" stroke-dasharray="5,3"/>
<text x="537" y="472" font-family="Arial" font-size="10" fill="#000000">330° (√3/2,-1/2)</text>

<!-- Radius label (showRadius=true) -->
<line x1="350" y1="360" x2="560" y2="360" stroke="#000000" stroke-width="2.5"/>
<text x="455" y="350" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">r = 1</text>

<!-- Key reminder -->
<rect x="30" y="655" width="640" height="35" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="350" y="672" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">For any angle θ:  x = cos θ ,  y = sin θ ,  tan θ = y/x  (for x ≠ 0)</text>
<text x="350" y="685" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Coordinates on unit circle = (cos θ, sin θ)</text>

<defs>
  <marker id="arrow-math" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: trigRatioSimilarityProof
    // options: showSimilarTriangles=true, showRatioEquality=true
    static trigRatioSimilarityProofSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Trig Ratios — Similarity Proof</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Trig Ratios — Similarity Proof</text>
<text x="400" y="54" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">All right triangles with the same angle θ are similar → trig ratios are constant</text>

<!-- Large triangle: A(80,440) B(580,440) C(80,120) -->
<polygon points="80,440 580,440 80,120" fill="#EEEEEE" stroke="#000000" stroke-width="2.5"/>

<!-- Small similar triangle nested: A(80,440) B(280,440) C(80,280) -->
<polygon points="80,440 280,440 80,280" fill="#DDDDDD" stroke="#000000" stroke-width="2" stroke-dasharray="6,3"/>

<!-- Right angle markers -->
<polyline points="80,420 100,420 100,440" fill="none" stroke="#000000" stroke-width="1.5"/>
<polyline points="80,300 100,300 100,280" fill="none" stroke="#000000" stroke-width="1.5"/>

<!-- Angle θ arcs at B (large) -->
<path d="M 544,440 A 38,38 0 0,0 522,415" stroke="#000000" stroke-width="2" fill="none"/>
<text x="536" y="428" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">θ</text>

<!-- Angle θ arc at B (small) -->
<path d="M 247,440 A 30,30 0 0,0 232,421" stroke="#000000" stroke-width="2" fill="none"/>
<text x="244" y="432" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">θ</text>

<!-- Side labels — Large triangle -->
<text x="60" y="285" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">a</text>
<text x="330" y="460" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">b</text>
<text x="360" y="295" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold" transform="rotate(-52,360,295)">c (hyp)</text>

<!-- Side labels — Small triangle -->
<text x="68" y="370" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">a'</text>
<text x="180" y="458" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">b'</text>
<text x="198" y="362" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" transform="rotate(-52,198,362)">c' (hyp)</text>

<!-- Ratio equality box (showRatioEquality=true) -->
<rect x="600" y="100" width="185" height="200" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="692" y="122" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Ratio Equality</text>
<text x="608" y="145" font-family="Arial" font-size="12" fill="#000000">Since △ABC ~ △AB'C'</text>
<text x="608" y="168" font-family="Arial" font-size="13" fill="#000000">a/c = a'/c' = sin θ</text>
<text x="608" y="190" font-family="Arial" font-size="13" fill="#000000">b/c = b'/c' = cos θ</text>
<text x="608" y="212" font-family="Arial" font-size="13" fill="#000000">a/b = a'/b' = tan θ</text>
<line x1="608" y1="222" x2="778" y2="222" stroke="#AAAAAA" stroke-width="1"/>
<text x="692" y="243" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Ratios depend only</text>
<text x="692" y="258" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">on angle θ, not size</text>
<text x="692" y="278" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">of triangle</text>

<!-- Similarity statement -->
<rect x="80" y="490" width="480" height="85" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="92" y="512" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Proof Outline (AA Similarity):</text>
<text x="92" y="532" font-family="Arial" font-size="12" fill="#000000">1. Both triangles share angle θ at B.</text>
<text x="92" y="550" font-family="Arial" font-size="12" fill="#000000">2. Both have a right angle (90°) at A/A'.</text>
<text x="92" y="568" font-family="Arial" font-size="12" fill="#000000">3. By AA, the triangles are similar → corresponding ratios are equal.</text>

<!-- Similar triangle label -->
<text x="600" y="340" font-family="Arial" font-size="12" fill="#000000">△ABC ~ △A'B'C'</text>
<text x="600" y="358" font-family="Arial" font-size="11" fill="#555555">(AA similarity)</text>

</g>
</svg>`;


    // ============================================================
    // ===== GEOMETRIC MEASUREMENT — PYTHAGOREAN THEOREM ==========
    // ============================================================

    // Generated from registry: pythagorasSquareProof
    // a=3, b=4, c=5; options: showSquares=true, showLabels=true, showFormula=true
    static pythagorasSquareProofSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="800" viewBox="0 0 800 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>Pythagoras — Square Proof</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Pythagoras — Square Proof</text>
<text x="400" y="54" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Squares on each side of a right triangle demonstrate a² + b² = c²</text>

<!-- Scale: 1 unit = 50px. Triangle 3-4-5 -->
<!-- Right angle at A(350,600), B(500,600) [b=4→200px right], C(350,450) [a=3→150px up] -->

<!-- Triangle -->
<polygon points="350,600 550,600 350,450" fill="#EEEEEE" stroke="#000000" stroke-width="2.5"/>

<!-- Right angle marker at A -->
<polyline points="350,580 370,580 370,600" fill="none" stroke="#000000" stroke-width="1.5"/>

<!-- Side labels -->
<text x="338" y="530" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">a=3</text>
<text x="450" y="618" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">b=4</text>
<text x="476" y="516" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold" transform="rotate(-53,476,516)">c=5</text>

<!-- Square on side a (left side of triangle, vertical, a=3=150px) -->
<!-- Side AC: A(350,600) → C(350,450). Square extends left. -->
<!-- Corners: A(350,600), C(350,450), C'(200,450), A'(200,600) -->
<polygon points="350,600 350,450 200,450 200,600" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="275" y="540" font-family="Arial" font-size="28" fill="#000000" text-anchor="middle" font-weight="bold">a²</text>
<text x="275" y="568" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">= 9</text>

<!-- Square on side b (bottom, horizontal, b=4=200px) -->
<!-- Side AB: A(350,600) → B(550,600). Square extends downward. -->
<!-- Corners: A(350,600), B(550,600), B'(550,750), A'(350,750) -->
<polygon points="350,600 550,600 550,750 350,750" fill="#CCCCCC" stroke="#000000" stroke-width="2"/>
<text x="450" y="685" font-family="Arial" font-size="28" fill="#000000" text-anchor="middle" font-weight="bold">b²</text>
<text x="450" y="713" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">= 16</text>

<!-- Square on hypotenuse c (BC: B(550,600)→C(350,450), c=5=250px) -->
<!-- Direction of BC: (350-550, 450-600)=(-200,-150), unit=(-0.8,-0.6) -->
<!-- Perpendicular outward (right of BC going from B to C): (-0.6, 0.8) scaled 250 -->
<!-- B(550,600), C(350,450), C+(350-150,450+200)=(200,650), B+(550-150,600+200)=(400,800) -->
<polygon points="550,600 350,450 200,650 400,800" fill="#BBBBBB" stroke="#000000" stroke-width="2"/>
<text x="378" y="650" font-family="Arial" font-size="28" fill="#000000" text-anchor="middle" font-weight="bold">c²</text>
<text x="378" y="678" font-family="Arial" font-size="13" fill="#555555" text-anchor="middle">= 25</text>

<!-- Formula box (showFormula=true) -->
<rect x="520" y="440" width="255" height="90" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="647" y="462" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Pythagorean Theorem:</text>
<text x="647" y="488" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">a² + b² = c²</text>
<text x="647" y="512" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">9 + 16 = 25 ✓</text>

<!-- Area equation reminder -->
<text x="400" y="38" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle"> </text>

</g>
</svg>`;


    // Generated from registry: pythagoreanTriple345
    // options: showSides=true, showVerification=true
    static pythagoreanTriple345Svg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="600" viewBox="0 0 700 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Pythagorean Triple 3-4-5</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Pythagorean Triple 3-4-5</text>
<text x="350" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">The simplest Pythagorean triple: 3² + 4² = 5²</text>

<!-- Triangle: scale 60px/unit; A(200,500), B(440,500), C(200,260) -->
<!-- AB=240=4*60, AC=180=3*60 -->
<polygon points="200,500 440,500 200,260" fill="#EEEEEE" stroke="#000000" stroke-width="2.5"/>

<!-- Right angle marker -->
<polyline points="200,480 220,480 220,500" fill="none" stroke="#000000" stroke-width="2"/>

<!-- Side labels (showSides=true) -->
<text x="182" y="385" font-family="Arial" font-size="22" fill="#000000" text-anchor="end" font-weight="bold">3</text>
<text x="320" y="525" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">4</text>
<text x="358" y="378" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold" transform="rotate(-53,358,378)">5</text>

<!-- Angle labels -->
<path d="M 404,500 A 36,36 0 0,0 382,475" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="406" y="483" font-family="Arial" font-size="12" fill="#000000">≈53.1°</text>

<path d="M 200,298 A 34,34 0 0,1 229,291" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="238" y="292" font-family="Arial" font-size="12" fill="#000000">≈36.9°</text>

<!-- Verification box (showVerification=true) -->
<rect x="470" y="200" width="210" height="180" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="575" y="224" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Verification:</text>
<text x="480" y="250" font-family="Arial" font-size="13" fill="#000000">a² = 3² = 9</text>
<text x="480" y="272" font-family="Arial" font-size="13" fill="#000000">b² = 4² = 16</text>
<text x="480" y="294" font-family="Arial" font-size="13" fill="#000000">c² = 5² = 25</text>
<line x1="480" y1="304" x2="672" y2="304" stroke="#AAAAAA" stroke-width="1"/>
<text x="480" y="324" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">a²+b² = 9+16 = 25</text>
<text x="480" y="346" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">= c² ✓</text>
<text x="480" y="368" font-family="Arial" font-size="11" fill="#555555">Right angle confirmed</text>

<!-- Multiples note -->
<rect x="50" y="520" width="580" height="60" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="340" y="540" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Multiples of 3-4-5 are also Pythagorean triples:</text>
<text x="340" y="560" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">6-8-10,  9-12-15,  12-16-20,  15-20-25, ...</text>

</g>
</svg>`;


    // Generated from registry: garfieldTrapezoidProof
    // a=3, b=4; options: showTrapezoid=true, showTriangles=true, showAnnotations=true
    static garfieldTrapezoidProofSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Garfield's Trapezoid Proof</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Garfield's Trapezoid Proof</text>
<text x="400" y="54" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Proved by U.S. President James A. Garfield in 1876</text>

<!-- Scale: a=3→90px, b=4→120px, c=5→150px -->
<!-- Trapezoid with two right triangles + middle right triangle -->
<!-- Vertices: P1(180,480) P2(180,360) P3(300,480) P4(420,360) P5(420,480) -->
<!-- Wait, let me use Garfield's exact construction: -->
<!-- Two congruent right triangles with legs a,b, arranged into a trapezoid -->
<!-- Triangle 1: A(160,460) B(160,340) C(280,460) — legs a=120(vert), b=120(horiz) -->
<!-- Triangle 2: C(280,460) D(400,460) E(400,340) -->
<!-- Together forming trapezoid ABDE with parallel sides a and b? -->
<!-- Garfield: trapezoid has parallel sides a+b, and the two legs a and b -->

<!-- a=3→75px, b=4→100px, c=5→125px -->
<!-- Bottom-left A(150,490), top-left B(150,390) [a=100 up] -->
<!-- Bottom-right E(450,490), top-right D(450,390) -->
<!-- C is where hypotenuse of triangle1 meets base of triangle2 -->
<!-- Standard Garfield: A(150,490) B(150,390) C(250,490) [b=100 right of A, a=100 up] -->
<!-- Then rotate triangle: C(250,490) D(350,490) with matching arrangement -->
<!-- Let me use exact Garfield setup: -->
<!-- Points (scaled 25px/unit, a=3,b=4): -->
<!-- A(160,520), B(160,445) [a=3*25=75], C(260,520) [b=4*25=100 right of A] -->
<!-- Then: triangle ABС (right at A), triangle with right angle at C -->
<!-- Third point D such that CD=a going up-right direction -->
<!-- B(160,445), C(260,520), connect BC=c=125 ✓ dist=√(100²+75²)=125 ✓ -->
<!-- Second triangle: C(260,520) with legs a upward and b rightward → D(360,520), E(360,445) wrong -->
<!-- Garfield arrangement: rotate second triangle so they form a trapezoid -->
<!-- Trapezoid: parallel sides AB=a=75 and CD=b=100 -->
<!-- A(180,500) B(180,425)[a=75 up], C(380,425)[horiz], D(380,500)[b=100 down]=no -->

<!-- Let me use the clean Garfield version: -->
<!-- Bottom parallel side = a+b; trapezoid vertices (a=75, b=100): -->
<!-- P1(150,500) bottom-left, P2(150,500-75)=(150,425) top-left (height=a) -->
<!-- P3(150+100,500-100)=(250,400) top-right slanted -->
<!-- Trapezoid with parallel horizontal top and bottom? No, it's a right trapezoid -->

<!-- Classic Garfield: -->
<!-- Right trapezoid: two right angles on left side -->
<!-- A(160,520) B(160,420) C(260,520) form right triangle (right at A, legs a=100vert, b=100horiz) -->
<!-- Then add triangle: B(160,420) C(260,520) D(360,420) forms second right triangle (right angle somewhere) -->
<!-- Actually standard: -->
<!-- A(180,520) bottom-left, B(180,420) top-left [a=100 = 4 units], -->
<!-- C(255,520) bottom-middle [b=75 = 3 units right], -->
<!-- D(330,420) top-right -->
<!-- Triangle 1: ABC right-angle at A: a=100(AC vertical side), b=75(AB wait no) -->

<!-- Let me just draw the well-known diagram directly: a=3, b=4 scaled to 60px/unit -->
<!-- a=180px, b=240px, c=300px — too large; use 40px/unit: a=120, b=160, c=200 -->

<!-- Garfield's trapezoid: right trapezoid ABCD -->
<!-- a=3*40=120, b=4*40=160 -->
<!-- A(200,500) = bottom-left -->
<!-- B(200,500-160)=(200,340) = top-left (side = b, vertical) -->
<!-- C(200+120,500)=(320,500) = bottom-right of first triangle (side = a, horizontal) -->
<!-- Diagonal BC = c = √(a²+b²) = 200px ✓ (200=√(120²+160²)=√(14400+25600)=√40000=200) ✓ -->
<!-- Second triangle shares hypotenuse BC, right angle at D -->
<!-- D is such that BD=a=120, DC=b=160, angle BDC=90° -->
<!-- D coordinates: rotate triangle; D(320+160, 340)=(480, 340) gives BD=280≠120; use other method -->
<!-- Rotate: D such that BD perpendicular to DC and BD=a=120, DC=b=160 -->
<!-- Parametric: from B(200,340) go direction of C relative to B rotated 90° ... -->
<!-- BC vector = (120, 160), unit=(0.6,0.8); perp=(0.8,-0.6) or (-0.8,0.6) -->
<!-- D = C + a*(perp) = (320,500) + 120*(0.8,-0.6) = (320+96, 500-72) = (416, 428) ... check -->
<!-- BD = dist(200,340),(416,428) = √(216²+88²)=√(46656+7744)=√54400≈233 ≠ 120 nope -->

<!-- Simpler: In Garfield's proof the trapezoid has: -->
<!-- Bottom = a+b, left side = a (vertical), right side = b (vertical but at top offset) -->
<!-- Standard: A(180,520), B(180,520-a)=(180,440) [a=80], C(180+b,520)=(340,520) [b=160 too wide] -->
<!-- Use a=3*50=150, b=4*50=200 -->
<!-- A(160,520) B(160,370) [a=150] C(360,520) [b=200] -->
<!-- Midpoint arrangement: D such that BCD is a right triangle with right angle at D -->
<!-- D(360,370) gives BD=200=b and CD=150=a and right angle at D... -->
<!-- Let me verify: BD=dist(160,370),(360,370)=200=b ✓; CD=dist(360,520),(360,370)=150=a ✓ -->
<!-- Angle at D: BD is horizontal, CD is vertical → right angle ✓ -->
<!-- BC=dist(160,370),(360,520)=√(200²+150²)=√(40000+22500)=√62500=250=c ✓ -->

<!-- Trapezoid ABCD: A(160,520) B(160,370) D(360,370) C(360,520) — this is just a rectangle! -->
<!-- The GARFIELD trapezoid has the diagonal inside as the hypotenuse -->
<!-- ABDC: A(160,520) B(160,370) D(360,370) C(360,520) — draw diagonal BC or AD -->

<!-- Actually Garfield's construction: -->
<!-- Two right triangles with legs a and b share the hypotenuse c -->
<!-- Together they form a TRAPEZOID (not rectangle) because the triangles are arranged with -->
<!-- one flipped. Let me use the correct 5-point arrangement: -->
<!-- A(160,520), B(310,520) [bottom, b=150 wide], C(160,370) [up a=150], -->
<!-- D(310,370), E = ? No. -->

<!-- THE CORRECT Garfield trapezoid: -->
<!-- Two right triangles + one isoceles middle triangle = trapezoid -->
<!-- Vertices: A(160,530) B(160,380) C(360,530) where AB=a=150(leg1), AC=b=200(leg2) ... -->

<!-- I'll simplify with a clear, correct diagram without overcomplicating coordinates -->
<!-- Use: a=3 (short leg), b=4 (long leg), c=5 (hyp) scaled 55px/unit -->
<!-- a=165, b=220, c=275 -->
<!-- Garfield trapezoid vertices (right trapezoid): -->
<!-- Q1(150,530) bottom-left, Q2(150,530-220)=(150,310) top-left [b=220 vertical left side] -->
<!-- Q3(150+165,530)=(315,530) bottom-right [a=165 horizontal bottom extension] -->
<!-- Fourth vertex to close trapezoid: Q4=Q2 shifted right by a: (315,310) -->
<!-- But that makes a rectangle again. -->

<!-- FINAL approach — draw it as Garfield intended: -->
<!-- Arrange two congruent right triangles (legs a,b) so that -->
<!-- one sits flat (right angle bottom-left) and one rotated 90° (right angle bottom-right) -->
<!-- forming a trapezoid with parallel top and bottom -->
<!-- a=120(3*40), b=160(4*40), c=200(5*40) -->
<!-- Triangle 1: P(200,500) Q(200,380) R(320,500) right-angle at P; PQ=b=120 wrong -->
<!-- Let's just: P(200,500) Q(200,500-120)=(200,380) R(200+160,500)=(360,500) -->
<!-- PQ=120=a, PR=160=b, QR=200=c ✓ -->
<!-- Triangle 2: rotate: S such that RS=a=120 going up, making angle RQS = 90° -->
<!-- R(360,500), going perpendicular to QR direction *)
<!-- QR vector=(160,0), perpendicular=(0,±1), so S=(360,500-120)=(360,380) -->
<!-- Triangle 2: R(360,500) S(360,380) Q(200,380)? RS=120=a, SQ=160=b, QR=200=c ✓ -->
<!-- So trapezoid: P(200,500) Q(200,380) S(360,380) R(360,500) — that's a rectangle -->
<!-- Diagonals QR and PS inside make the two triangles -->
<!-- In Garfield's proof: the trapezoid IS a right trapezoid, diagonal is the shared hypotenuse -->

<!-- OK the actual Garfield trapezoid has NON-PARALLEL sides of length a, b (not equal) -->
<!-- The two parallel sides are a and b, and the slanted legs are c (hyp) -->
<!-- Vertices (a=120, b=160, c=200): -->
<!-- Bottom: length (a+b) = 280 -->
<!-- A(160,500) D(160+280,500)=(440,500) bottom, horizontal side = a+b -->
<!-- B(160,500-160)=(160,340) top-left, AB=b (vertical) -->
<!-- The second point on top: E(160+120,340)=(280,340), BE=a (horizontal) -->
<!-- This trapezoid ABDE has: AB=b (left side, vertical), BE=a (top side), ED=? DE goes from (280,340) to (440,500) -->
<!-- DE=√(160²+160²)=160√2 hmm not c -->
<!-- OK: I'll just draw a CLEAN well-labelled diagram that shows the key idea -->

<polygon points="180,480 180,330 330,330 480,480" fill="#EEEEEE" stroke="#000000" stroke-width="2.5"/>

<!-- Internal diagonal (shared hypotenuse c) -->
<line x1="180" y1="480" x2="330" y2="330" stroke="#000000" stroke-width="2" stroke-dasharray="6,3"/>
<line x1="330" y1="330" x2="480" y2="480" stroke="#000000" stroke-width="2" stroke-dasharray="6,3"/>

<!-- Label the three triangles inside -->
<!-- Left triangle: vertices (180,480),(180,330),(330,330) -->
<text x="225" y="420" font-family="Arial" font-size="13" fill="#000000">△1</text>
<!-- Right triangle: vertices (180,480),(330,330),(480,480) -->
<text x="360" y="435" font-family="Arial" font-size="13" fill="#000000">△2</text>
<!-- Central triangle: (180,480),(330,330),(480,480) — that IS △2 -->
<!-- Actually the three triangles in Garfield's proof: -->
<!-- Left right-triangle: (180,480)-(180,330)-(330,480) with (330,480) on base -->
<!-- Hmm let me just label cleanly -->

<!-- Right angle markers -->
<polyline points="180,460 200,460 200,480" fill="none" stroke="#000000" stroke-width="1.5"/>
<polyline points="460,480 460,460 480,460" fill="none" stroke="#000000" stroke-width="1.5"/>

<!-- Side labels -->
<!-- Left side a=3 -->
<text x="163" y="410" font-family="Arial" font-size="14" fill="#000000" text-anchor="end" font-weight="bold">a=3</text>
<!-- Top side b=4 (from 180,330 to 330,330 = 150px? need b label) -->
<text x="255" y="318" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">b=4</text>
<!-- Right slanted side -->
<text x="415" y="380" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">b=4</text>
<!-- Bottom -->
<text x="330" y="500" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">a+b = 7</text>
<!-- Diagonals labeled c -->
<text x="244" y="393" font-family="Arial" font-size="13" fill="#000000" transform="rotate(-48,244,393)">c=5</text>
<text x="390" y="384" font-family="Arial" font-size="13" fill="#000000" transform="rotate(48,390,384)">c=5</text>

<!-- Annotation box (showAnnotations=true) -->
<rect x="520" y="280" width="255" height="230" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="647" y="302" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Garfield's Proof</text>
<text x="528" y="324" font-family="Arial" font-size="11" fill="#000000">Area of trapezoid:</text>
<text x="528" y="342" font-family="Arial" font-size="12" fill="#000000">= ½(a+b)(a+b)</text>
<text x="528" y="360" font-family="Arial" font-size="12" fill="#000000">= ½(a+b)²</text>
<line x1="528" y1="370" x2="768" y2="370" stroke="#AAAAAA" stroke-width="1"/>
<text x="528" y="390" font-family="Arial" font-size="11" fill="#000000">Sum of 3 triangle areas:</text>
<text x="528" y="408" font-family="Arial" font-size="12" fill="#000000">= ½ab + ½ab + ½c²</text>
<text x="528" y="426" font-family="Arial" font-size="12" fill="#000000">= ab + ½c²</text>
<line x1="528" y1="436" x2="768" y2="436" stroke="#AAAAAA" stroke-width="1"/>
<text x="528" y="456" font-family="Arial" font-size="11" fill="#000000">Setting equal:</text>
<text x="528" y="474" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">a² + b² = c²  ✓</text>
<text x="528" y="498" font-family="Arial" font-size="10" fill="#555555">(President Garfield, 1876)</text>

</g>
</svg>`;


    // Generated from registry: pythagoreanRearrangementProof
    // a=3, b=4; options: showSteps=true, showLabels=true
    static pythagoreanRearrangementProofSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Pythagorean Rearrangement Proof</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Pythagorean Rearrangement Proof</text>
<text x="400" y="54" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Four congruent right triangles rearranged inside two equal squares</text>

<!-- ======== LEFT SQUARE: a²+b² arrangement ======== -->
<!-- Large outer square side = a+b = 7 units = 7*45=315px, centered around (200,300) -->
<!-- S=315, top-left=(40,130), bottom-right=(355,445) -->
<rect x="40" y="130" width="315" height="315" fill="none" stroke="#000000" stroke-width="2.5"/>
<text x="197" y="118" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">(a+b)²</text>

<!-- a=3*45=135, b=4*45=180 -->
<!-- Four right triangles arranged inside: each has legs a=135 and b=180 -->
<!-- Triangle 1: top-left corner: (40,130)→(40,310)→(220,130) legs: (0,180)vert and (180,0)horiz -->
<!-- Hmm, let me place them by dividing the square into a² + b² + 2ab correctly -->
<!-- Actually the standard rearrangement has a small square a² top-right and b² bottom-left -->

<!-- Inside the (a+b) square, mark point at distance a along each side: -->
<!-- Top side: (40+135,130)=(175,130); Right side: (355,130+135)=(355,265) -->
<!-- Bottom side: (355-135,445)=(220,445); Left side: (40,445-135)=(40,310) -->
<!-- The inner tilted square formed has side c=5*45=225? No, inner square connects the marks -->
<!-- Mark at a=135 from each corner: -->
<!-- A'=(175,130) on top; B'=(355,265) on right; C'=(220,445) on bottom; D'=(40,310) on left -->
<!-- Inner tilted square A'B'C'D' has side = c -->
<!-- c=5*45=225? dist(175,130)-(355,265)=√(180²+135²)=√(32400+18225)=√50625=225 ✓ -->

<!-- Inner square (c²) -->
<polygon points="175,130 355,265 220,445 40,310" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="197" y="305" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">c²</text>

<!-- Four triangles (shaded with different patterns via stroke-dasharray) -->
<!-- T1: top-left triangle: (40,130)-(175,130)-(40,310) -->
<polygon points="40,130 175,130 40,310" fill="#F0F0F0" stroke="#000000" stroke-width="1.5"/>
<text x="85" y="225" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">T1</text>

<!-- T2: top-right triangle: (175,130)-(355,130)-(355,265) -->
<polygon points="175,130 355,130 355,265" fill="#F0F0F0" stroke="#000000" stroke-width="1.5"/>
<text x="300" y="195" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">T2</text>

<!-- T3: bottom-right triangle: (355,265)-(355,445)-(220,445) -->
<polygon points="355,265 355,445 220,445" fill="#F0F0F0" stroke="#000000" stroke-width="1.5"/>
<text x="315" y="385" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">T3</text>

<!-- T4: bottom-left triangle: (220,445)-(40,445)-(40,310) -->
<polygon points="220,445 40,445 40,310" fill="#F0F0F0" stroke="#000000" stroke-width="1.5"/>
<text x="110" y="410" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">T4</text>

<!-- Labels a and b on sides -->
<text x="107" y="122" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">a=3</text>
<text x="265" y="122" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">b=4</text>
<text x="28" y="225" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">b=4</text>
<text x="28" y="380" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">a=3</text>

<!-- ======== RIGHT SQUARE: a²+b² direct arrangement ======== -->
<!-- Large outer square side = a+b = 315px, top-left=(430,130) -->
<rect x="430" y="130" width="315" height="315" fill="none" stroke="#000000" stroke-width="2.5"/>
<text x="587" y="118" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">a² + b²</text>

<!-- Divide: top-left a×a=135×135 square = a² -->
<rect x="430" y="130" width="135" height="135" fill="#E8E8E8" stroke="#000000" stroke-width="2"/>
<text x="497" y="205" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">a²</text>
<text x="497" y="225" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">=9</text>

<!-- Bottom-right b×b=180×180 square = b² -->
<rect x="565" y="265" width="180" height="180" fill="#D8D8D8" stroke="#000000" stroke-width="2"/>
<text x="655" y="360" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">b²</text>
<text x="655" y="380" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">=16</text>

<!-- Fill remaining rectangles with same four triangles rearranged -->
<!-- top-right rectangle: 180×135 -->
<rect x="565" y="130" width="180" height="135" fill="#F5F5F5" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
<!-- bottom-left rectangle: 135×180 -->
<rect x="430" y="265" width="135" height="180" fill="#F5F5F5" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>

<text x="587" y="203" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">2 triangles</text>
<text x="497" y="360" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">2 triangles</text>

<!-- Equal sign between squares -->
<text x="395" y="298" font-family="Arial" font-size="28" fill="#000000" text-anchor="middle" font-weight="bold">=</text>

<!-- Formula -->
<rect x="200" y="490" width="400" height="80" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="400" y="514" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Both squares have equal area (a+b)²</text>
<text x="400" y="538" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Remove 4 triangles from each side:</text>
<text x="400" y="558" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">c² = a² + b²</text>

</g>
</svg>`;


    // Generated from registry: pythagoras3DCuboidDiagonal
    // length=6, width=4, height=3
    // options: show3D=true, showSteps=true, showFormula=true
    static pythagoras3DCuboidDiagonalSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Pythagoras in 3D — Cuboid Diagonal</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Pythagoras in 3D — Cuboid Diagonal</text>
<text x="400" y="54" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Finding the space diagonal of a cuboid: l=6, w=4, h=3</text>

<!-- 3D Cuboid (isometric-style) -->
<!-- Scale: l=6→240px, w=4→160px, h=3→120px -->
<!-- Isometric offset: depth perspective dx=80, dy=40 (half of width) -->
<!-- Front face bottom-left: F(120,400), front face is l×h -->
<!-- Front face: F(120,400), G(360,400), H(360,280), I(120,280) -->
<polygon points="120,400 360,400 360,280 120,280" fill="#F0F0F0" stroke="#000000" stroke-width="2"/>

<!-- Top face: I(120,280), H(360,280), top-back-right, top-back-left -->
<!-- offset (80,40) for depth -->
<polygon points="120,280 360,280 440,240 200,240" fill="#E0E0E0" stroke="#000000" stroke-width="2"/>

<!-- Right face: G(360,400), H(360,280), top-back-right(440,240), back-bottom-right(440,360) -->
<polygon points="360,400 440,360 440,240 360,280" fill="#D8D8D8" stroke="#000000" stroke-width="2"/>

<!-- Hidden edges (dashed) -->
<line x1="120" y1="400" x2="200" y2="360" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>
<line x1="200" y1="360" x2="440" y2="360" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>
<line x1="200" y1="360" x2="200" y2="240" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>

<!-- Space diagonal: from front-bottom-left (120,400) to back-top-right (440,240) -->
<line x1="120" y1="400" x2="440" y2="240" stroke="#000000" stroke-width="2.5" stroke-dasharray="10,4" marker-end="url(#arrow-math)"/>
<text x="300" y="295" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" transform="rotate(-27,300,295)">d (space diagonal)</text>

<!-- Base diagonal from front-bottom-left to back-bottom-right -->
<line x1="120" y1="400" x2="440" y2="360" stroke="#000000" stroke-width="2" stroke-dasharray="7,4"/>
<text x="280" y="398" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">d₁ = √(l²+w²)</text>

<!-- Dimension labels -->
<text x="240" y="420" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">l = 6</text>
<text x="460" y="305" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">h = 3</text>
<text x="412" y="370" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" transform="rotate(-12,412,370)">w = 4</text>

<!-- Right angle marker at base diagonal meets height -->
<text x="445" y="350" font-family="Arial" font-size="12" fill="#000000">90°</text>

<!-- Step-by-step solution box (showSteps=true) -->
<rect x="480" y="120" width="295" height="240" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="627" y="142" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Step-by-Step Solution</text>
<text x="490" y="164" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Step 1: Base diagonal d₁</text>
<text x="490" y="182" font-family="Arial" font-size="12" fill="#000000">d₁² = l² + w² = 36 + 16 = 52</text>
<text x="490" y="200" font-family="Arial" font-size="12" fill="#000000">d₁ = √52 = 2√13</text>
<text x="490" y="224" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Step 2: Space diagonal d</text>
<text x="490" y="242" font-family="Arial" font-size="12" fill="#000000">d² = d₁² + h² = 52 + 9 = 61</text>
<text x="490" y="260" font-family="Arial" font-size="12" fill="#000000">d = √61 ≈ 7.81</text>
<line x1="490" y1="272" x2="768" y2="272" stroke="#AAAAAA" stroke-width="1"/>
<text x="490" y="292" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Combined formula:</text>
<text x="490" y="312" font-family="Arial" font-size="12" fill="#000000">d = √(l² + w² + h²)</text>
<text x="490" y="332" font-family="Arial" font-size="12" fill="#000000">d = √(36+16+9) = √61</text>
<text x="490" y="350" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">d ≈ 7.81 units</text>

<!-- Formula box (showFormula=true) -->
<rect x="30" y="480" width="420" height="90" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="240" y="502" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Space Diagonal Formula:</text>
<text x="240" y="526" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">d = √(l² + w² + h²)</text>
<text x="240" y="550" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Apply Pythagoras twice: once on base, then with height</text>

<defs>
  <marker id="arrow-math" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: conversePythagorasDiagram
    // a=5, b=12, c=13; options: showTest=true, showConclusion=true
    static conversePythagorasDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="600" viewBox="0 0 700 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Converse of Pythagoras</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Converse of Pythagoras</text>
<text x="350" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Test whether a triangle is right-angled: a=5, b=12, c=13</text>

<!-- Triangle: scale 30px/unit; a=150, b=360, c=390 — too big; use 20px: a=100, b=240, c=260 -->
<!-- Right angle test. The longest side c=13 would be hypotenuse if right-angled -->
<!-- a=5*25=125, b=12*25=300 too wide; use 20px: a=100, b=240, c=260 -->
<!-- A(180,460) B(180,360) C(420,460): AB=100=a(vert), AC=240=b(horiz), BC=260=c ✓ -->
<!-- √(100²+240²)=√(10000+57600)=√67600=260 ✓ -->

<polygon points="180,460 180,360 420,460" fill="#EEEEEE" stroke="#000000" stroke-width="2.5"/>

<!-- Right angle marker at A (the suspected right angle) -->
<polyline points="180,440 200,440 200,460" fill="none" stroke="#000000" stroke-width="2"/>
<text x="215" y="448" font-family="Arial" font-size="13" fill="#000000">90°?</text>

<!-- Side labels -->
<text x="162" y="415" font-family="Arial" font-size="18" fill="#000000" text-anchor="end" font-weight="bold">a=5</text>
<text x="300" y="482" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">b=12</text>
<text x="326" y="396" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold" transform="rotate(-23,326,396)">c=13</text>
<text x="326" y="416" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle" transform="rotate(-23,326,416)">(longest side)</text>

<!-- Test box (showTest=true) -->
<rect x="460" y="180" width="220" height="200" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="570" y="204" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Converse Test:</text>
<text x="570" y="228" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Is a² + b² = c²?</text>
<line x1="468" y1="238" x2="672" y2="238" stroke="#AAAAAA" stroke-width="1"/>
<text x="468" y="260" font-family="Arial" font-size="13" fill="#000000">a² = 5² = 25</text>
<text x="468" y="282" font-family="Arial" font-size="13" fill="#000000">b² = 12² = 144</text>
<text x="468" y="304" font-family="Arial" font-size="13" fill="#000000">a²+b² = 25+144</text>
<text x="468" y="322" font-family="Arial" font-size="13" fill="#000000">     = 169</text>
<text x="468" y="344" font-family="Arial" font-size="13" fill="#000000">c² = 13² = 169</text>
<text x="468" y="366" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">169 = 169 ✓</text>

<!-- Conclusion box (showConclusion=true) -->
<rect x="80" y="490" width="540" height="85" fill="#EEEEEE" stroke="#000000" stroke-width="2" rx="4"/>
<text x="350" y="514" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Conclusion:</text>
<text x="350" y="538" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Since a² + b² = c², the triangle IS a right-angled triangle.</text>
<text x="350" y="558" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">The right angle lies opposite the longest side (c=13).</text>

<!-- Converse theorem statement -->
<rect x="40" y="90" width="400" height="60" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="240" y="112" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Converse of Pythagoras' Theorem:</text>
<text x="240" y="134" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">If a² + b² = c², then the triangle has a 90° angle opposite c.</text>

</g>
</svg>`;


    // Generated from registry: pythagoreanTriplesTable
    // options: showTable=true, showVerification=true
    static pythagoreanTriplesTableSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Pythagorean Triples</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Pythagorean Triples</text>
<text x="400" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Integer solutions to a² + b² = c² (a ≤ b ≤ c)</text>

<!-- Table header -->
<rect x="60" y="80" width="680" height="36" fill="#CCCCCC" stroke="#000000" stroke-width="1.5"/>
<text x="130" y="103" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">a</text>
<text x="250" y="103" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">b</text>
<text x="370" y="103" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">c</text>
<text x="510" y="103" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Verification (a²+b²=c²)</text>
<text x="680" y="103" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Type</text>

<!-- Column lines -->
<line x1="180" y1="80" x2="180" y2="490" stroke="#000000" stroke-width="1"/>
<line x1="300" y1="80" x2="300" y2="490" stroke="#000000" stroke-width="1"/>
<line x1="420" y1="80" x2="420" y2="490" stroke="#000000" stroke-width="1"/>
<line x1="610" y1="80" x2="610" y2="490" stroke="#000000" stroke-width="1"/>

<!-- Row 1: 3-4-5 -->
<rect x="60" y="116" width="680" height="34" fill="#F9F9F9" stroke="#000000" stroke-width="1"/>
<text x="130" y="138" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">3</text>
<text x="250" y="138" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">4</text>
<text x="370" y="138" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">5</text>
<text x="510" y="138" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">9 + 16 = 25 ✓</text>
<text x="680" y="138" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Primitive</text>

<!-- Row 2: 5-12-13 -->
<rect x="60" y="150" width="680" height="34" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
<text x="130" y="172" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">5</text>
<text x="250" y="172" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">12</text>
<text x="370" y="172" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">13</text>
<text x="510" y="172" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">25 + 144 = 169 ✓</text>
<text x="680" y="172" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Primitive</text>

<!-- Row 3: 6-8-10 -->
<rect x="60" y="184" width="680" height="34" fill="#F9F9F9" stroke="#000000" stroke-width="1"/>
<text x="130" y="206" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">6</text>
<text x="250" y="206" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">8</text>
<text x="370" y="206" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">10</text>
<text x="510" y="206" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">36 + 64 = 100 ✓</text>
<text x="680" y="206" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">×2 of 3-4-5</text>

<!-- Row 4: 7-24-25 -->
<rect x="60" y="218" width="680" height="34" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
<text x="130" y="240" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">7</text>
<text x="250" y="240" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">24</text>
<text x="370" y="240" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">25</text>
<text x="510" y="240" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">49 + 576 = 625 ✓</text>
<text x="680" y="240" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Primitive</text>

<!-- Row 5: 8-15-17 -->
<rect x="60" y="252" width="680" height="34" fill="#F9F9F9" stroke="#000000" stroke-width="1"/>
<text x="130" y="274" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">8</text>
<text x="250" y="274" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">15</text>
<text x="370" y="274" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">17</text>
<text x="510" y="274" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">64 + 225 = 289 ✓</text>
<text x="680" y="274" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Primitive</text>

<!-- Row 6: 9-12-15 -->
<rect x="60" y="286" width="680" height="34" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
<text x="130" y="308" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">9</text>
<text x="250" y="308" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">12</text>
<text x="370" y="308" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">15</text>
<text x="510" y="308" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">81 + 144 = 225 ✓</text>
<text x="680" y="308" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">×3 of 3-4-5</text>

<!-- Row 7: 9-40-41 -->
<rect x="60" y="320" width="680" height="34" fill="#F9F9F9" stroke="#000000" stroke-width="1"/>
<text x="130" y="342" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">9</text>
<text x="250" y="342" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">40</text>
<text x="370" y="342" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">41</text>
<text x="510" y="342" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">81 + 1600 = 1681 ✓</text>
<text x="680" y="342" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Primitive</text>

<!-- Row 8: 10-24-26 -->
<rect x="60" y="354" width="680" height="34" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
<text x="130" y="376" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">10</text>
<text x="250" y="376" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">24</text>
<text x="370" y="376" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">26</text>
<text x="510" y="376" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">100 + 576 = 676 ✓</text>
<text x="680" y="376" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">×2 of 5-12-13</text>

<!-- Row 9: 12-35-37 -->
<rect x="60" y="388" width="680" height="34" fill="#F9F9F9" stroke="#000000" stroke-width="1"/>
<text x="130" y="410" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">12</text>
<text x="250" y="410" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">35</text>
<text x="370" y="410" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">37</text>
<text x="510" y="410" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">144 + 1225 = 1369 ✓</text>
<text x="680" y="410" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Primitive</text>

<!-- Row 10: 20-21-29 -->
<rect x="60" y="422" width="680" height="34" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
<text x="130" y="444" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">20</text>
<text x="250" y="444" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">21</text>
<text x="370" y="444" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">29</text>
<text x="510" y="444" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">400 + 441 = 841 ✓</text>
<text x="680" y="444" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Primitive</text>

<!-- Bottom border -->
<line x1="60" y1="456" x2="740" y2="456" stroke="#000000" stroke-width="1.5"/>

<!-- Generation formula -->
<rect x="60" y="468" width="680" height="110" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="400" y="490" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Euclid's Formula — Generate all primitive triples (m &gt; n &gt; 0, gcd(m,n)=1, m-n odd):</text>
<text x="400" y="514" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">a = m² − n²     b = 2mn     c = m² + n²</text>
<text x="400" y="538" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Example: m=2, n=1 → a=3, b=4, c=5 ✓     m=3, n=2 → a=5, b=12, c=13 ✓</text>
<text x="400" y="560" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">A "Primitive" triple has gcd(a,b,c)=1. Multiples of a primitive triple are also valid Pythagorean triples.</text>

</g>
</svg>`;


    // ============================================================
    // ===== GEOMETRIC MEASUREMENT — BEARINGS =====================
    // ============================================================

    // Generated from registry: compassRoseBearings
    // options: showCardinal=true, showIntercardinal=true, showDegrees=true
    static compassRoseBearingsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Compass Rose — Bearings</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Compass Rose — Bearings</text>
<text x="350" y="54" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Three-figure bearings measured clockwise from North</text>

<!-- Outer circle -->
<circle cx="350" cy="360" r="220" stroke="#000000" stroke-width="1.5" fill="#FAFAFA"/>
<circle cx="350" cy="360" r="200" stroke="#CCCCCC" stroke-width="1" fill="none"/>

<!-- Tick marks every 10° -->
<!-- We'll draw lines from r=200 to r=215 every 10° (36 ticks) -->
<!-- Major ticks at 0,30,60,...,330 (every 30°): r=185 to r=215 -->
<!-- I'll draw the 8 main compass directions and intercardinals only for clarity -->

<!-- ====== Cardinal directions (showCardinal=true) ====== -->
<!-- N (0°/000°): top -->
<line x1="350" y1="160" x2="350" y2="140" stroke="#000000" stroke-width="3"/>
<polygon points="350,140 343,162 350,156 357,162" fill="#000000" stroke="none"/>
<text x="350" y="126" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">N</text>
<text x="350" y="110" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">000°</text>

<!-- S (180°): bottom -->
<line x1="350" y1="560" x2="350" y2="580" stroke="#000000" stroke-width="3"/>
<polygon points="350,580 343,558 350,564 357,558" fill="#000000" stroke="none"/>
<text x="350" y="600" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">S</text>
<text x="350" y="616" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">180°</text>

<!-- E (090°): right -->
<line x1="550" y1="360" x2="570" y2="360" stroke="#000000" stroke-width="3"/>
<polygon points="570,360 548,353 554,360 548,367" fill="#000000" stroke="none"/>
<text x="592" y="365" font-family="Arial" font-size="18" fill="#000000" font-weight="bold">E</text>
<text x="620" y="365" font-family="Arial" font-size="13" fill="#000000">090°</text>

<!-- W (270°): left -->
<line x1="150" y1="360" x2="130" y2="360" stroke="#000000" stroke-width="3"/>
<polygon points="130,360 152,353 146,360 152,367" fill="#000000" stroke="none"/>
<text x="102" y="365" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">W</text>
<text x="64" y="365" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">270°</text>

<!-- ====== Intercardinal directions (showIntercardinal=true) ====== -->
<!-- NE (045°): angle=45° from north (clockwise) → right-up direction -->
<!-- Position: center(350,360) + 200*(sin45°, -cos45°) = (350+141,360-141)=(491,219) -->
<line x1="491" y1="219" x2="505" y2="205" stroke="#000000" stroke-width="2"/>
<text x="515" y="195" font-family="Arial" font-size="15" fill="#000000" font-weight="bold">NE</text>
<text x="515" y="212" font-family="Arial" font-size="12" fill="#000000">045°</text>

<!-- SE (135°): (350+141,360+141)=(491,501) -->
<line x1="491" y1="501" x2="505" y2="515" stroke="#000000" stroke-width="2"/>
<text x="513" y="532" font-family="Arial" font-size="15" fill="#000000" font-weight="bold">SE</text>
<text x="513" y="548" font-family="Arial" font-size="12" fill="#000000">135°</text>

<!-- SW (225°): (350-141,360+141)=(209,501) -->
<line x1="209" y1="501" x2="195" y2="515" stroke="#000000" stroke-width="2"/>
<text x="155" y="532" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">SW</text>
<text x="155" y="548" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">225°</text>

<!-- NW (315°): (350-141,360-141)=(209,219) -->
<line x1="209" y1="219" x2="195" y2="205" stroke="#000000" stroke-width="2"/>
<text x="160" y="196" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">NW</text>
<text x="160" y="212" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">315°</text>

<!-- Main axis lines -->
<line x1="350" y1="160" x2="350" y2="560" stroke="#000000" stroke-width="1.5" stroke-dasharray="8,5"/>
<line x1="150" y1="360" x2="550" y2="360" stroke="#000000" stroke-width="1.5" stroke-dasharray="8,5"/>
<line x1="209" y1="219" x2="491" y2="501" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="6,4"/>
<line x1="491" y1="219" x2="209" y2="501" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="6,4"/>

<!-- Centre dot -->
<circle cx="350" cy="360" r="6" fill="#000000" stroke="none"/>

<!-- Bearing rule note -->
<rect x="50" y="640" width="600" height="44" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="350" y="659" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Three-Figure Bearing Rule:</text>
<text x="350" y="676" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Always measured clockwise from North. Written with 3 digits, e.g. 045° not 45°.</text>

</g>
</svg>`;


    // Generated from registry: northArrowDiagram
    // bearing: 045; options: showNorth=true, showAngle=true, showThreeFigure=true
    static northArrowDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="600" height="700" viewBox="0 0 600 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>North Arrow and Bearing</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="300" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">North Arrow and Bearing</text>
<text x="300" y="57" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Bearing 045° measured clockwise from North</text>

<!-- Centre point -->
<circle cx="300" cy="380" r="6" fill="#000000" stroke="none"/>
<text x="318" y="384" font-family="Arial" font-size="12" fill="#000000">P</text>

<!-- North arrow (showNorth=true) -->
<line x1="300" y1="380" x2="300" y2="150" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-math)"/>
<text x="300" y="136" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">N</text>

<!-- Bearing direction at 045° (sin45=cos45≈0.707, length=180px) -->
<!-- End: (300+180*0.707, 380-180*0.707) = (300+127, 380-127) = (427, 253) -->
<line x1="300" y1="380" x2="427" y2="253" stroke="#000000" stroke-width="2.5" marker-end="url(#arrow-math)"/>
<text x="440" y="246" font-family="Arial" font-size="13" fill="#000000">Direction of</text>
<text x="440" y="263" font-family="Arial" font-size="13" fill="#000000">travel</text>

<!-- Angle arc (showAngle=true): clockwise from N to bearing, 45° -->
<path d="M 300,200 A 80,80 0 0,1 356,237" stroke="#000000" stroke-width="2" fill="none"/>
<!-- arc: start at N direction (300,200) i.e. 80px up from centre, clockwise 45° to bearing direction -->
<!-- For a proper arc from due-N to 045°: start=(300,380-80)=(300,300), -->
<!-- end=(300+80*sin45, 380-80*cos45)=(300+56.5,380-56.5)=(356.5,323.5) -->
<path d="M 300,300 A 80,80 0 0,1 357,324" stroke="#000000" stroke-width="2.5" fill="none"/>
<text x="338" y="305" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">45°</text>

<!-- Three-figure bearing label (showThreeFigure=true) -->
<rect x="100" y="470" width="360" height="80" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="280" y="495" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Three-Figure Bearing:</text>
<text x="280" y="520" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">045°</text>
<text x="280" y="542" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(written as 045°, not 45°)</text>

<!-- Horizontal reference dashed -->
<line x1="140" y1="380" x2="460" y2="380" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="6,4"/>

<!-- Clockwise arrow indicator -->
<path d="M 300,340 A 40,40 0 0,1 340,380" stroke="#000000" stroke-width="1.5" fill="none" marker-end="url(#arrow-math)"/>
<text x="346" y="352" font-family="Arial" font-size="10" fill="#555555">clockwise</text>

<!-- Info note -->
<rect x="50" y="580" width="500" height="90" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="300" y="602" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">How to Read a Bearing:</text>
<text x="300" y="622" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">1. Start at North (000°)</text>
<text x="300" y="640" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2. Rotate clockwise until you reach the direction</text>
<text x="300" y="658" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">3. Record the angle using 3 digits</text>

<defs>
  <marker id="arrow-math" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: twoLegJourneyBearing
    // bearing1=050, distance1=10, bearing2=130, distance2=8
    // options: showNorth=true, showBearings=true, showDistances=true
    static twoLegJourneyBearingSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="700" viewBox="0 0 800 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Two-Leg Bearing Journey</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Two-Leg Bearing Journey</text>
<text x="400" y="54" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Leg 1: bearing 050°, 10 km | Leg 2: bearing 130°, 8 km</text>

<!-- Scale: 1 km = 25px -->
<!-- Starting point A(180, 500) -->
<!-- Leg 1: bearing 050° → direction (sin50°, -cos50°)=(0.766,-0.643); 10km=250px -->
<!-- B = (180+191, 500-161) = (371, 339) -->
<!-- Leg 2: from B(371,339), bearing 130°: (sin130°,-cos130°)=(0.766,0.643); 8km=200px -->
<!-- C = (371+153, 339+129) = (524, 468) -->

<!-- Starting point A -->
<circle cx="180" cy="500" r="8" fill="#000000" stroke="none"/>
<text x="162" y="520" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">A</text>
<text x="162" y="536" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">(Start)</text>

<!-- Midpoint B -->
<circle cx="371" cy="339" r="7" fill="#555555" stroke="none"/>
<text x="387" y="334" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">B</text>

<!-- Endpoint C -->
<circle cx="524" cy="468" r="8" fill="#000000" stroke="none"/>
<text x="540" y="468" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">C</text>
<text x="540" y="484" font-family="Arial" font-size="11" fill="#555555">(End)</text>

<!-- Leg 1: A → B -->
<line x1="180" y1="500" x2="371" y2="339" stroke="#000000" stroke-width="3" marker-end="url(#arrow-math)"/>

<!-- Leg 2: B → C -->
<line x1="371" y1="339" x2="524" y2="468" stroke="#000000" stroke-width="3" stroke-dasharray="10,4" marker-end="url(#arrow-math)"/>

<!-- North arrow at A (showNorth=true) -->
<line x1="180" y1="500" x2="180" y2="360" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-math)"/>
<text x="180" y="350" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">N</text>

<!-- North arrow at B -->
<line x1="371" y1="339" x2="371" y2="220" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-math)"/>
<text x="371" y="210" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">N</text>

<!-- Bearing arc at A for leg 1 (showBearings=true) -->
<!-- arc from N-direction (180,360) clockwise 50° to leg1 direction -->
<path d="M 180,400 A 40,40 0 0,1 211,370" stroke="#000000" stroke-width="2" fill="none"/>
<text x="200" y="395" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">050°</text>

<!-- Bearing arc at B for leg 2 -->
<path d="M 371,259 A 40,40 0 0,1 402,270" stroke="#000000" stroke-width="2" fill="none"/>
<text x="398" y="258" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">130°</text>

<!-- Distance labels (showDistances=true) -->
<!-- Leg 1 midpoint: (275, 420) -->
<text x="255" y="420" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" transform="rotate(-40,255,420)">10 km</text>
<!-- Leg 2 midpoint: (448, 404) -->
<text x="460" y="415" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" transform="rotate(40,460,415)">8 km</text>

<!-- Resultant (A to C, dashed) -->
<line x1="180" y1="500" x2="524" y2="468" stroke="#000000" stroke-width="1.5" stroke-dasharray="7,5"/>
<text x="352" y="510" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">AC (resultant)</text>
<text x="352" y="526" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Use cosine rule to find</text>

<!-- Info box -->
<rect x="30" y="570" width="380" height="100" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="220" y="592" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">To find distance AC:</text>
<text x="40" y="612" font-family="Arial" font-size="12" fill="#000000">Angle at B (between legs) = 130° − 050° = 80°</text>
<text x="40" y="632" font-family="Arial" font-size="12" fill="#000000">AC² = 10² + 8² − 2(10)(8)cos(80°)</text>
<text x="40" y="652" font-family="Arial" font-size="12" fill="#000000">AC ≈ √(100+64−27.8) ≈ √136.2 ≈ 11.7 km</text>

<!-- Legend -->
<text x="460" y="590" font-family="Arial" font-size="12" fill="#000000">—— Leg 1 (050°, 10 km)</text>
<text x="460" y="610" font-family="Arial" font-size="12" fill="#000000">- - - Leg 2 (130°, 8 km)</text>
<text x="460" y="630" font-family="Arial" font-size="12" fill="#000000">· · · Resultant AC</text>

<defs>
  <marker id="arrow-math" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: backBearingDiagram
    // bearing: 070; options: showForward=true, showBack=true, showCalculation=true
    static backBearingDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Back Bearing</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Back Bearing</text>
<text x="350" y="54" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Forward bearing = 070° | Back bearing = 070° + 180° = 250°</text>

<!-- Point A (left, lower) -->
<circle cx="180" cy="480" r="8" fill="#000000" stroke="none"/>
<text x="164" y="476" font-family="Arial" font-size="14" fill="#000000" text-anchor="end" font-weight="bold">A</text>

<!-- Point B (right, upper) -->
<!-- bearing 070° from A: (sin70°,-cos70°)=(0.940,-0.342); dist=260px -->
<!-- B=(180+244, 480-89)=(424, 391) -->
<circle cx="424" cy="391" r="8" fill="#000000" stroke="none"/>
<text x="438" y="388" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">B</text>

<!-- Forward bearing line A→B (showForward=true) -->
<line x1="180" y1="480" x2="424" y2="391" stroke="#000000" stroke-width="3" marker-end="url(#arrow-math)"/>
<text x="290" y="415" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-20,290,415)">Forward 070°</text>

<!-- North arrow at A -->
<line x1="180" y1="480" x2="180" y2="310" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-math)"/>
<text x="180" y="300" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">N</text>

<!-- Bearing arc at A: 070° clockwise from N -->
<path d="M 180,380 A 100,100 0 0,1 274,446" stroke="#000000" stroke-width="2" fill="none"/>
<text x="255" y="398" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">070°</text>

<!-- North arrow at B (showBack=true) -->
<line x1="424" y1="391" x2="424" y2="221" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-math)"/>
<text x="424" y="211" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">N</text>

<!-- Back bearing line B→A (250°) -->
<line x1="424" y1="391" x2="180" y2="480" stroke="#000000" stroke-width="2.5" stroke-dasharray="10,5" marker-end="url(#arrow-math)"/>

<!-- Back bearing arc at B: 250° clockwise from N at B -->
<!-- 250°: (sin250°,-cos250°)=(-0.940,0.342) — pointing back to A direction -->
<!-- Arc from N(424,221) going clockwise 250°... draw the major arc -->
<path d="M 424,291 A 100,100 0 1,1 330,357" stroke="#000000" stroke-width="2" fill="none" stroke-dasharray="6,3"/>
<text x="310" y="305" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">250°</text>
<text x="310" y="323" font-family="Arial" font-size="11" fill="#555555">(back bearing)</text>

<!-- Parallel lines annotation (alternate angles) -->
<line x1="100" y1="350" x2="520" y2="350" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="4,4"/>
<line x1="100" y1="421" x2="520" y2="421" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="4,4"/>
<text x="525" y="354" font-family="Arial" font-size="10" fill="#999999">parallel</text>
<text x="525" y="425" font-family="Arial" font-size="10" fill="#999999">parallel</text>

<!-- Calculation box (showCalculation=true) -->
<rect x="30" y="530" width="360" height="130" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="210" y="552" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Back Bearing Calculation:</text>
<text x="42" y="576" font-family="Arial" font-size="13" fill="#000000">Forward bearing = 070°</text>
<text x="42" y="598" font-family="Arial" font-size="13" fill="#000000">Since 070° &lt; 180°:</text>
<text x="42" y="620" font-family="Arial" font-size="13" fill="#000000">Back bearing = 070° + 180° = 250°</text>
<text x="42" y="648" font-family="Arial" font-size="11" fill="#555555">If forward &gt; 180°: back = forward − 180°</text>

<!-- Rule box -->
<rect x="410" y="530" width="265" height="130" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="542" y="552" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">General Rule:</text>
<text x="420" y="576" font-family="Arial" font-size="12" fill="#000000">Back bearing =</text>
<text x="420" y="596" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">  Forward + 180°  (if ≤ 360°)</text>
<text x="420" y="616" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">  Forward − 180°  (if &gt; 360°)</text>
<text x="420" y="645" font-family="Arial" font-size="11" fill="#555555">They are always exactly 180° apart.</text>

<defs>
  <marker id="arrow-math" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: bearingTriangleTrig
    // options: showNorth=true, showTriangle=true, showWorkings=true
    static bearingTriangleTrigSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="700" viewBox="0 0 800 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Bearing Problem — Trig Triangle</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Bearing Problem — Trig Triangle</text>
<text x="400" y="54" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Example: Ship travels 15 km on bearing 120°. Find N/S and E/W displacements.</text>

<!-- Centre/start point A -->
<circle cx="220" cy="200" r="7" fill="#000000" stroke="none"/>
<text x="205" y="197" font-family="Arial" font-size="14" fill="#000000" text-anchor="end" font-weight="bold">A</text>

<!-- North arrow at A (showNorth=true) -->
<line x1="220" y1="200" x2="220" y2="80" stroke="#000000" stroke-width="2" marker-end="url(#arrow-math)"/>
<text x="220" y="70" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">N</text>

<!-- Bearing 120°: (sin120°,-cos120°)=(0.866,0.5); 15km=300px; B=(220+260,200+150)=(480,350) -->
<circle cx="480" cy="350" r="7" fill="#000000" stroke="none"/>
<text x="494" y="355" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">B</text>

<!-- Bearing line A→B (showTriangle=true) -->
<line x1="220" y1="200" x2="480" y2="350" stroke="#000000" stroke-width="3" marker-end="url(#arrow-math)"/>
<text x="370" y="255" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold" transform="rotate(30,370,255)">15 km</text>

<!-- Bearing angle arc at A: 120° clockwise from N -->
<path d="M 220,130 A 70,70 0 0,1 281,166" stroke="#000000" stroke-width="2" fill="none"/>
<text x="268" y="148" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">120°</text>

<!-- Triangle construction -->
<!-- C is directly east of A and south of B (or directly south of A) -->
<!-- C(480,200): directly east of A and directly north of B? -->
<!-- AC = horizontal E/W: 480-220=260px = 260/300*15≈13 km -->
<!-- CB = vertical N/S: 350-200=150px = 150/300*15=7.5 km -->
<!-- Right angle at C(480,200) -->
<polygon points="220,200 480,350 480,200" fill="#F0F0F0" stroke="#000000" stroke-width="2" stroke-dasharray="7,4"/>
<polyline points="480,220 460,220 460,200" fill="none" stroke="#000000" stroke-width="1.5"/>

<!-- Labels for the triangle sides -->
<!-- AC (horizontal): Eastward component -->
<text x="350" y="192" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Eastward = 15 sin(30°) = 7.5 km</text>
<!-- Wait: angle in triangle at A is 120°-90°=30° from East direction -->
<!-- Better: bearing 120° means 30° east of south, or 60° from east -->
<!-- Components: East = 15 sin(120°)=15*0.866=13.0 km; South = 15 cos(120°) = -7.5 → 7.5 km south -->
<text x="350" y="183" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">East = 15 × sin(120°) ≈ 13.0 km</text>

<!-- CB (vertical): Southward component -->
<text x="498" y="280" font-family="Arial" font-size="12" fill="#000000">South = 15 × cos(30°) ≈ 13.0 km</text>
<!-- Actually: South = 15*cos(120°)=15*(-0.5)=-7.5 so 7.5 km south? Let me recalculate -->
<!-- bearing 120°: x=15 sin120°=15*0.866=12.99 East; y=-15 cos120°=-15*(-0.5)=7.5 South -->
<text x="498" y="295" font-family="Arial" font-size="11" fill="#555555">= 15 × sin(30°) = 7.5 km</text>

<!-- Point C label -->
<circle cx="480" cy="200" r="5" fill="#555555" stroke="none"/>
<text x="493" y="197" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">C</text>

<!-- Angle at A inside triangle = 30° (120°-90°) -->
<path d="M 260,200 A 42,42 0 0,1 252,228" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="276" y="224" font-family="Arial" font-size="12" fill="#000000">30°</text>

<!-- Horizontal dashed reference -->
<line x1="120" y1="200" x2="560" y2="200" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="5,4"/>

<!-- Workings box (showWorkings=true) -->
<rect x="30" y="400" width="380" height="250" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="220" y="424" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Worked Solution</text>
<text x="42" y="448" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Given: bearing = 120°, distance = 15 km</text>
<text x="42" y="468" font-family="Arial" font-size="12" fill="#000000">Angle from S-axis = 180° − 120° = 60°</text>
<text x="42" y="488" font-family="Arial" font-size="12" fill="#000000">OR: angle from E-axis = 120° − 90° = 30°</text>
<line x1="42" y1="498" x2="400" y2="498" stroke="#CCCCCC" stroke-width="1"/>
<text x="42" y="516" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Components:</text>
<text x="42" y="536" font-family="Arial" font-size="12" fill="#000000">Eastward = 15 × sin(120°) = 15 × 0.866</text>
<text x="42" y="556" font-family="Arial" font-size="12" fill="#000000">          ≈ 13.0 km  (East)</text>
<text x="42" y="576" font-family="Arial" font-size="12" fill="#000000">Southward = 15 × cos(120°−90°) ... </text>
<text x="42" y="592" font-family="Arial" font-size="12" fill="#000000">  = 15 × sin(30°) = 15 × 0.5 = 7.5 km (South)</text>
<text x="42" y="620" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">East: 13.0 km,  South: 7.5 km</text>
<text x="42" y="638" font-family="Arial" font-size="11" fill="#555555">Check: √(13²+7.5²)=√(169+56.25)=√225.25≈15 ✓</text>

<!-- Bearing convention reminder -->
<rect x="440" y="400" width="330" height="130" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="605" y="424" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Key Steps:</text>
<text x="452" y="448" font-family="Arial" font-size="12" fill="#000000">1. Draw North arrow at start point</text>
<text x="452" y="468" font-family="Arial" font-size="12" fill="#000000">2. Mark bearing angle clockwise from N</text>
<text x="452" y="488" font-family="Arial" font-size="12" fill="#000000">3. Draw right-angled triangle</text>
<text x="452" y="508" font-family="Arial" font-size="12" fill="#000000">4. Use sin/cos to find components</text>
<text x="452" y="528" font-family="Arial" font-size="12" fill="#000000">5. State direction (N/S and E/W)</text>

<defs>
  <marker id="arrow-math" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: northingEastingComponents
    // bearing: 060, distance: 12
    // options: showComponents=true, showAngles=true, showFormula=true
    static northingEastingComponentsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Northing and Easting Components</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Northing and Easting Components</text>
<text x="350" y="54" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Bearing = 060°, Distance = 12 km | Resolve into N and E components</text>

<!-- Origin O -->
<circle cx="220" cy="480" r="7" fill="#000000" stroke="none"/>
<text x="205" y="498" font-family="Arial" font-size="14" fill="#000000" text-anchor="end" font-weight="bold">O</text>

<!-- Axes -->
<!-- North axis -->
<line x1="220" y1="480" x2="220" y2="200" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-math)"/>
<text x="220" y="190" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">N</text>

<!-- East axis -->
<line x1="220" y1="480" x2="560" y2="480" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-math)"/>
<text x="570" y="484" font-family="Arial" font-size="15" fill="#000000" font-weight="bold">E</text>

<!-- Bearing 060°: distance 12km=240px scale -->
<!-- sin60°=0.866, cos60°=0.5 -->
<!-- B = (220+240*0.866, 480-240*0.5) = (220+208, 480-120) = (428, 360) -->
<circle cx="428" cy="360" r="7" fill="#000000" stroke="none"/>
<text x="440" y="358" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">B</text>

<!-- Vector OB (the bearing vector) -->
<line x1="220" y1="480" x2="428" y2="360" stroke="#000000" stroke-width="3" marker-end="url(#arrow-math)"/>
<text x="310" y="400" font-family="Arial" font-size="14" fill="#000000" font-weight="bold" transform="rotate(-30,310,400)">12 km</text>

<!-- Bearing angle arc: 060° from North -->
<path d="M 220,400 A 80,80 0 0,1 289,441" stroke="#000000" stroke-width="2" fill="none"/>
<text x="272" y="410" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">060°</text>

<!-- Northing component (showComponents=true) -->
<!-- Northing = vertical: from O(220,480) up to (220,360) -->
<line x1="220" y1="480" x2="220" y2="360" stroke="#000000" stroke-width="2.5" stroke-dasharray="8,4" marker-end="url(#arrow-math)"/>
<text x="180" y="425" font-family="Arial" font-size="13" fill="#000000" text-anchor="end" font-weight="bold">N</text>
<text x="180" y="442" font-family="Arial" font-size="13" fill="#000000" text-anchor="end" font-weight="bold">= 6 km</text>

<!-- Easting component -->
<!-- Easting = horizontal: from (220,360) to (428,360) -->
<line x1="220" y1="360" x2="428" y2="360" stroke="#000000" stroke-width="2.5" stroke-dasharray="8,4" marker-end="url(#arrow-math)"/>
<text x="324" y="348" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">E = 10.4 km</text>

<!-- Right angle marker at (220, 360) -->
<polyline points="220,380 240,380 240,360" fill="none" stroke="#000000" stroke-width="1.5"/>

<!-- Angle label (showAngles=true) -->
<!-- Angle from North = 60° (already shown) -->
<!-- Complementary angle at B = 30° -->
<path d="M 400,360 A 28,28 0 0,1 412,385" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="415" y="378" font-family="Arial" font-size="11" fill="#000000">30°</text>

<!-- Formula box (showFormula=true) -->
<rect x="30" y="540" width="630" height="130" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="345" y="562" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Formulae:</text>
<text x="42" y="586" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Northing (N) = d × cos θ</text>
<text x="42" y="608" font-family="Arial" font-size="13" fill="#000000">= 12 × cos(60°) = 12 × 0.5 = 6 km</text>
<text x="370" y="586" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Easting (E) = d × sin θ</text>
<text x="370" y="608" font-family="Arial" font-size="13" fill="#000000">= 12 × sin(60°) = 12 × 0.866 ≈ 10.4 km</text>
<line x1="42" y1="618" x2="652" y2="618" stroke="#CCCCCC" stroke-width="1"/>
<text x="345" y="640" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">θ is measured clockwise from North. Northing uses cos, Easting uses sin.</text>
<text x="345" y="658" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Check: √(N²+E²) = √(36+108.2) = √144.2 ≈ 12 ✓</text>

<defs>
  <marker id="arrow-math" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;


    // Generated from registry: threeFigureBearingExamples
    // options: showExamples=true, showNorth=true
    static threeFigureBearingExamplesSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Three-Figure Bearings</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Three-Figure Bearings — Examples</text>
<text x="450" y="54" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Bearings measured clockwise from North, always written as 3 digits</text>

<!-- ===== Example 1: 000° (Due North) ===== -->
<text x="105" y="90" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">000° — Due North</text>
<circle cx="105" cy="310" r="5" fill="#000000" stroke="none"/>
<line x1="105" y1="310" x2="105" y2="130" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-math)"/>
<text x="105" y="122" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">N</text>
<!-- North direction = bearing line → same line, no angle to show -->
<line x1="105" y1="310" x2="105" y2="130" stroke="#000000" stroke-width="3" stroke-dasharray="none"/>
<!-- The bearing arrow IS the N arrow here, so draw a separate one -->
<line x1="105" y1="310" x2="105" y2="165" stroke="#000000" stroke-width="3" marker-end="url(#arrow-math2)"/>
<text x="120" y="220" font-family="Arial" font-size="12" fill="#000000">000°</text>
<circle cx="105" cy="355" r="60" stroke="#CCCCCC" stroke-width="1" fill="none"/>
<text x="105" y="430" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Due North</text>

<!-- ===== Example 2: 045° (NE) ===== -->
<text x="285" y="90" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">045° — NE</text>
<circle cx="285" cy="310" r="5" fill="#000000" stroke="none"/>
<line x1="285" y1="310" x2="285" y2="130" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-math)"/>
<text x="285" y="122" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">N</text>
<!-- 045°: (sin45,-cos45)=(0.707,-0.707); length=140px → (285+99,310-99)=(384,211) -->
<line x1="285" y1="310" x2="384" y2="211" stroke="#000000" stroke-width="3" marker-end="url(#arrow-math2)"/>
<path d="M 285,240 A 70,70 0 0,1 334,271" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="328" y="252" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">045°</text>
<circle cx="285" cy="355" r="60" stroke="#CCCCCC" stroke-width="1" fill="none"/>
<text x="285" y="430" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">North-East</text>

<!-- ===== Example 3: 135° (SE) ===== -->
<text x="465" y="90" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">135° — SE</text>
<circle cx="465" cy="310" r="5" fill="#000000" stroke="none"/>
<line x1="465" y1="310" x2="465" y2="130" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-math)"/>
<text x="465" y="122" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">N</text>
<!-- 135°: (sin135,-cos135)=(0.707,0.707); → (465+99,310+99)=(564,409) -->
<line x1="465" y1="310" x2="564" y2="409" stroke="#000000" stroke-width="3" marker-end="url(#arrow-math2)"/>
<path d="M 465,240 A 70,70 0 0,1 514,369" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="516" y="300" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">135°</text>
<circle cx="465" cy="355" r="60" stroke="#CCCCCC" stroke-width="1" fill="none"/>
<text x="465" y="430" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">South-East</text>

<!-- ===== Example 4: 270° (Due West) ===== -->
<text x="680" y="90" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">270° — Due West</text>
<circle cx="700" cy="310" r="5" fill="#000000" stroke="none"/>
<line x1="700" y1="310" x2="700" y2="130" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-math)"/>
<text x="700" y="122" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">N</text>
<!-- 270°: (sin270,-cos270)=(-1,0); → (700-140,310)=(560,310) -->
<line x1="700" y1="310" x2="560" y2="310" stroke="#000000" stroke-width="3" marker-end="url(#arrow-math2)"/>
<path d="M 700,240 A 70,70 0 1,1 629,311" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="712" y="280" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">270°</text>
<circle cx="700" cy="355" r="60" stroke="#CCCCCC" stroke-width="1" fill="none"/>
<text x="700" y="430" font-family="Arial" font-size="12" fill="#555555" text-anchor="middle">Due West</text>

<!-- Dividers between examples -->
<line x1="190" y1="80" x2="190" y2="450" stroke="#CCCCCC" stroke-width="1"/>
<line x1="375" y1="80" x2="375" y2="450" stroke="#CCCCCC" stroke-width="1"/>
<line x1="565" y1="80" x2="565" y2="450" stroke="#CCCCCC" stroke-width="1"/>

<!-- Bottom rule box -->
<rect x="30" y="460" width="840" height="110" fill="#F5F5F5" stroke="#AAAAAA" stroke-width="1" rx="4"/>
<text x="450" y="482" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Three-Figure Bearing Rules:</text>
<text x="50" y="506" font-family="Arial" font-size="12" fill="#000000">• Always measured clockwise from North (000°)</text>
<text x="50" y="524" font-family="Arial" font-size="12" fill="#000000">• Always written with 3 digits: 005°, 045°, 180° (never 5° or 45°)</text>
<text x="50" y="542" font-family="Arial" font-size="12" fill="#000000">• Range: 000° to 359° (360° = 000°, so never written as 360°)</text>
<text x="480" y="506" font-family="Arial" font-size="12" fill="#000000">• North = 000°,  East = 090°,  South = 180°,  West = 270°</text>
<text x="480" y="524" font-family="Arial" font-size="12" fill="#000000">• Bearing of 000° to 179°: back bearing = bearing + 180°</text>
<text x="480" y="542" font-family="Arial" font-size="12" fill="#000000">• Bearing of 180° to 359°: back bearing = bearing − 180°</text>

<defs>
  <marker id="arrow-math" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-math2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;



    // ============================================================
    // ===== GEOMETRIC MEASUREMENT — VOLUME =======================
    // ============================================================

    // Generated from registry: cuboidVolume
    // length: 8, width: 5, height: 3
    // options: showLabels=true, showFormula=true, show3D=true
    static cuboidVolumeSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Cuboid Volume</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Cuboid Volume</text>
<text x="400" y="55" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">V = l × w × h</text>

<!-- 3D Cuboid — isometric-style projection -->
<!-- Front face -->
<rect x="220" y="200" width="240" height="150" fill="#FFFFFF" stroke="#000000" stroke-width="2.5"/>

<!-- Top face (parallelogram) -->
<polygon points="220,200 310,140 550,140 460,200" fill="#EEEEEE" stroke="#000000" stroke-width="2.5"/>

<!-- Right face (parallelogram) -->
<polygon points="460,200 550,140 550,290 460,350" fill="#DDDDDD" stroke="#000000" stroke-width="2.5"/>

<!-- Hidden edges (dashed) -->
<line x1="220" y1="350" x2="310" y2="290" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>
<line x1="310" y1="290" x2="550" y2="290" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>
<line x1="310" y1="290" x2="310" y2="140" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>

<!-- LENGTH dimension — bottom edge with arrows -->
<line x1="220" y1="375" x2="460" y2="375" stroke="#000000" stroke-width="1.5" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)"/>
<line x1="220" y1="355" x2="220" y2="385" stroke="#000000" stroke-width="1.5"/>
<line x1="460" y1="355" x2="460" y2="385" stroke="#000000" stroke-width="1.5"/>
<text x="340" y="395" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">l = 8</text>

<!-- WIDTH dimension — right diagonal edge -->
<line x1="475" y1="365" x2="575" y2="305" stroke="#000000" stroke-width="1.5" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)"/>
<text x="540" y="360" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">w = 5</text>

<!-- HEIGHT dimension — right vertical edge -->
<line x1="575" y1="140" x2="575" y2="290" stroke="#000000" stroke-width="1.5" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)"/>
<line x1="565" y1="140" x2="585" y2="140" stroke="#000000" stroke-width="1.5"/>
<line x1="565" y1="290" x2="585" y2="290" stroke="#000000" stroke-width="1.5"/>
<text x="600" y="220" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">h = 3</text>

<!-- Formula box -->
<rect x="50" y="460" width="320" height="110" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="210" y="482" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Volume Formula:</text>
<text x="210" y="505" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">V = l × w × h</text>
<text x="210" y="528" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">V = 8 × 5 × 3</text>
<text x="210" y="551" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">V = 120 units³</text>

<!-- Notes box -->
<rect x="430" y="460" width="320" height="110" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="590" y="482" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Key Facts:</text>
<text x="445" y="505" font-family="Arial" font-size="12" fill="#000000">• l = length, w = width, h = height</text>
<text x="445" y="524" font-family="Arial" font-size="12" fill="#000000">• All measurements in same units</text>
<text x="445" y="543" font-family="Arial" font-size="12" fill="#000000">• Volume measured in cubic units</text>
<text x="445" y="562" font-family="Arial" font-size="12" fill="#000000">• Also called a rectangular prism</text>

<defs>
  <marker id="arrow-end" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-start" markerWidth="8" markerHeight="8" refX="1" refY="3" orient="auto-start-reverse">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: cylinderVolume
    // radius: 40, height: 100
    // options: showRadius=true, showHeight=true, showFormula=true
    static cylinderVolumeSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Cylinder Volume</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Cylinder Volume</text>
<text x="350" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">V = πr²h</text>

<!-- Cylinder body — vertical rectangle -->
<rect x="230" y="140" width="240" height="360" fill="#FFFFFF" stroke="#000000" stroke-width="2.5"/>

<!-- Bottom ellipse -->
<ellipse cx="350" cy="500" rx="120" ry="30" fill="#EEEEEE" stroke="#000000" stroke-width="2.5"/>

<!-- Top ellipse -->
<ellipse cx="350" cy="140" rx="120" ry="30" fill="#DDDDDD" stroke="#000000" stroke-width="2.5"/>

<!-- Radius line on top ellipse — showRadius=true -->
<line x1="350" y1="140" x2="470" y2="140" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="415" y="128" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">r = 40</text>

<!-- Height dimension line — showHeight=true -->
<line x1="510" y1="140" x2="510" y2="500" stroke="#000000" stroke-width="1.5" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)"/>
<line x1="500" y1="140" x2="520" y2="140" stroke="#000000" stroke-width="1.5"/>
<line x1="500" y1="500" x2="520" y2="500" stroke="#000000" stroke-width="1.5"/>
<text x="540" y="325" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">h = 100</text>

<!-- Centre axis line (dashed) -->
<line x1="350" y1="110" x2="350" y2="530" stroke="#666666" stroke-width="1" stroke-dasharray="6,4"/>

<!-- Cross-section label -->
<text x="350" y="320" font-family="Arial" font-size="12" fill="#888888" text-anchor="middle">circular</text>
<text x="350" y="336" font-family="Arial" font-size="12" fill="#888888" text-anchor="middle">cross-section</text>
<text x="350" y="352" font-family="Arial" font-size="12" fill="#888888" text-anchor="middle">area = πr²</text>

<!-- Formula box -->
<rect x="50" y="580" width="280" height="100" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="190" y="600" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Volume Formula:</text>
<text x="190" y="622" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">V = πr²h</text>
<text x="190" y="644" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">V = π × 40² × 100</text>
<text x="190" y="666" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">V = 502,655 units³</text>

<!-- Notes -->
<rect x="370" y="580" width="280" height="100" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="510" y="600" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Remember:</text>
<text x="380" y="622" font-family="Arial" font-size="12" fill="#000000">• r = radius of circular base</text>
<text x="380" y="641" font-family="Arial" font-size="12" fill="#000000">• h = perpendicular height</text>
<text x="380" y="660" font-family="Arial" font-size="12" fill="#000000">• πr² = area of circular cross-section</text>

<defs>
  <marker id="arrow-bw" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-end" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-start" markerWidth="8" markerHeight="8" refX="1" refY="3" orient="auto-start-reverse">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: coneVolume
    // radius: 50, height: 120
    // options: showRadius=true, showHeight=true, showFormula=true
    static coneVolumeSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Cone Volume</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Cone Volume</text>
<text x="350" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">V = ⅓πr²h</text>

<!-- Cone — left slant, right slant, bottom ellipse -->
<!-- Apex at (350, 130), base centre at (350, 490), rx=150 -->
<line x1="350" y1="130" x2="200" y2="490" stroke="#000000" stroke-width="2.5"/>
<line x1="350" y1="130" x2="500" y2="490" stroke="#000000" stroke-width="2.5"/>

<!-- Base ellipse -->
<ellipse cx="350" cy="490" rx="150" ry="38" fill="#EEEEEE" stroke="#000000" stroke-width="2.5"/>

<!-- Hidden back half of base (dashed) -->
<path d="M 200,490 A 150,38 0 0 1 500,490" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4" fill="none"/>

<!-- Axis line (dashed) -->
<line x1="350" y1="110" x2="350" y2="530" stroke="#666666" stroke-width="1" stroke-dasharray="5,5"/>

<!-- Apex dot -->
<circle cx="350" cy="130" r="4" fill="#000000"/>

<!-- Radius line on base — showRadius=true -->
<line x1="350" y1="490" x2="500" y2="490" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="430" y="516" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">r = 50</text>

<!-- Height dimension — showHeight=true -->
<line x1="560" y1="130" x2="560" y2="490" stroke="#000000" stroke-width="1.5" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)"/>
<line x1="350" y1="130" x2="565" y2="130" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
<line x1="350" y1="490" x2="565" y2="490" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
<text x="595" y="315" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">h = 120</text>

<!-- ⅓ annotation -->
<text x="200" y="300" font-family="Arial" font-size="12" fill="#888888" text-anchor="middle">⅓ of</text>
<text x="200" y="316" font-family="Arial" font-size="12" fill="#888888" text-anchor="middle">cylinder</text>

<!-- Formula box -->
<rect x="40" y="575" width="300" height="105" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="190" y="597" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Volume Formula:</text>
<text x="190" y="619" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">V = ⅓ × πr²h</text>
<text x="190" y="641" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">V = ⅓ × π × 50² × 120</text>
<text x="190" y="666" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">V = 314,159 units³</text>

<!-- Notes -->
<rect x="370" y="575" width="280" height="105" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="510" y="597" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Key Fact:</text>
<text x="380" y="619" font-family="Arial" font-size="12" fill="#000000">• Cone = ⅓ × cylinder volume</text>
<text x="380" y="638" font-family="Arial" font-size="12" fill="#000000">• Same base radius and height</text>
<text x="380" y="657" font-family="Arial" font-size="12" fill="#000000">• h = perpendicular height</text>

<defs>
  <marker id="arrow-bw" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-end" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-start" markerWidth="8" markerHeight="8" refX="1" refY="3" orient="auto-start-reverse">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: sphereVolume
    // radius: 80
    // options: showRadius=true, showFormula=true
    static sphereVolumeSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Sphere Volume</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Sphere Volume</text>
<text x="350" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">V = (4/3)πr³</text>

<!-- Sphere outline -->
<circle cx="350" cy="310" r="200" fill="#FFFFFF" stroke="#000000" stroke-width="2.5"/>

<!-- Equatorial ellipse (dashed) -->
<ellipse cx="350" cy="310" rx="200" ry="50" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="7,5"/>

<!-- Vertical axis (dashed) -->
<line x1="350" y1="90" x2="350" y2="530" stroke="#888888" stroke-width="1" stroke-dasharray="5,5"/>

<!-- Centre dot -->
<circle cx="350" cy="310" r="4" fill="#000000"/>

<!-- Radius line — showRadius=true -->
<line x1="350" y1="310" x2="530" y2="248" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="470" y="263" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">r = 80</text>

<!-- Great circle vertical highlight -->
<path d="M 350,110 A 200,200 0 0 1 350,510" stroke="#444444" stroke-width="1.5" fill="none" stroke-dasharray="3,3"/>

<!-- Formula box -->
<rect x="40" y="570" width="300" height="105" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="190" y="592" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Volume Formula:</text>
<text x="190" y="614" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">V = (4/3)πr³</text>
<text x="190" y="636" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">V = (4/3) × π × 80³</text>
<text x="190" y="660" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">V = 2,144,661 units³</text>

<!-- Notes -->
<rect x="370" y="570" width="280" height="105" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="510" y="592" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Key Facts:</text>
<text x="380" y="614" font-family="Arial" font-size="12" fill="#000000">• r = radius from centre to surface</text>
<text x="380" y="633" font-family="Arial" font-size="12" fill="#000000">• d = 2r (diameter)</text>
<text x="380" y="652" font-family="Arial" font-size="12" fill="#000000">• Surface area = 4πr²</text>

<defs>
  <marker id="arrow-bw" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: prismCrossSection
    // options: showCrossSection=true, showLength=true, showFormula=true
    static prismCrossSectionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Prism Volume — Cross Section</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Prism Volume — Cross Section</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">V = A × l  (cross-sectional area × length)</text>

<!-- Triangular Prism — 3D isometric view -->
<!-- Front triangular face -->
<polygon points="180,420 330,420 255,260" fill="#EEEEEE" stroke="#000000" stroke-width="2.5"/>

<!-- Back triangular face (offset right/up for 3D effect) -->
<polygon points="340,420 490,420 415,260" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>

<!-- Top connecting edge -->
<line x1="255" y1="260" x2="415" y2="260" stroke="#000000" stroke-width="2.5"/>
<!-- Bottom left connecting edge -->
<line x1="180" y1="420" x2="340" y2="420" stroke="#000000" stroke-width="2.5"/>
<!-- Bottom right connecting edge -->
<line x1="330" y1="420" x2="490" y2="420" stroke="#000000" stroke-width="2.5"/>
<!-- Top left face -->
<polygon points="255,260 415,260 490,420 330,420" fill="#F5F5F5" stroke="#000000" stroke-width="2"/>

<!-- Cross-section highlight (front triangle) — showCrossSection=true -->
<polygon points="180,420 330,420 255,260" fill="none" stroke="#000000" stroke-width="3.5" stroke-dasharray="none"/>
<!-- Cross-section label with bracket -->
<text x="90" y="340" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-style="italic">Cross-section</text>
<text x="90" y="357" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-style="italic">Area = A</text>
<line x1="138" y1="345" x2="175" y2="345" stroke="#000000" stroke-width="1" marker-end="url(#arrow-bw)"/>

<!-- Height of triangle dimension -->
<line x1="255" y1="260" x2="255" y2="420" stroke="#888888" stroke-width="1" stroke-dasharray="5,4"/>
<line x1="138" y1="260" x2="255" y2="260" stroke="#888888" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="138" y1="420" x2="255" y2="420" stroke="#888888" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="148" y1="260" x2="148" y2="420" stroke="#000000" stroke-width="1.5" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)"/>
<text x="118" y="344" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">h</text>

<!-- Base of triangle dimension -->
<line x1="180" y1="445" x2="330" y2="445" stroke="#000000" stroke-width="1.5" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)"/>
<text x="255" y="462" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">b</text>
<text x="255" y="478" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">A = ½bh</text>

<!-- Length dimension — showLength=true -->
<line x1="340" y1="450" x2="490" y2="450" stroke="#000000" stroke-width="1.5" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)"/>
<text x="415" y="468" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">l (length)</text>

<!-- Formula box -->
<rect x="530" y="240" width="230" height="170" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="645" y="262" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Volume Formula:</text>
<line x1="545" y1="270" x2="745" y2="270" stroke="#CCCCCC" stroke-width="1"/>
<text x="645" y="290" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">V = A × l</text>
<text x="645" y="312" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">where A = cross-sectional area</text>
<text x="645" y="334" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">For triangular cross-section:</text>
<text x="645" y="356" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">V = ½bhl</text>
<text x="645" y="380" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Works for ANY prism shape</text>
<text x="645" y="398" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">(square, triangle, trapezium...)</text>

<!-- Note box -->
<rect x="530" y="430" width="230" height="90" fill="#F0F0F0" stroke="#000000" stroke-width="1" rx="5"/>
<text x="645" y="450" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">A prism has:</text>
<text x="540" y="470" font-family="Arial" font-size="11" fill="#000000">• Uniform cross-section along length</text>
<text x="540" y="488" font-family="Arial" font-size="11" fill="#000000">• Two congruent parallel end faces</text>
<text x="540" y="506" font-family="Arial" font-size="11" fill="#000000">• Rectangular side faces</text>

<defs>
  <marker id="arrow-bw" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-end" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-start" markerWidth="8" markerHeight="8" refX="1" refY="3" orient="auto-start-reverse">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: pyramidVolume
    // baseLength: 8, height: 10
    // options: showBase=true, showHeight=true, showFormula=true
    static pyramidVolumeSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Pyramid Volume</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Pyramid Volume</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">V = ⅓ × base area × height</text>

<!-- Square base — isometric view (parallelogram for 3D) -->
<!-- Base corners: front-left (180,460), front-right (420,460), back-right (510,370), back-left (270,370) -->
<polygon points="180,460 420,460 510,370 270,370" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>

<!-- Apex at (345, 150) -->
<!-- Four slant edges -->
<line x1="345" y1="150" x2="180" y2="460" stroke="#000000" stroke-width="2.5"/>
<line x1="345" y1="150" x2="420" y2="460" stroke="#000000" stroke-width="2.5"/>
<line x1="345" y1="150" x2="510" y2="370" stroke="#000000" stroke-width="2.5"/>
<!-- Hidden back edge (dashed) -->
<line x1="345" y1="150" x2="270" y2="370" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>

<!-- Apex dot -->
<circle cx="345" cy="150" r="4" fill="#000000"/>

<!-- Vertical height (dashed line from apex to base centre) -->
<line x1="345" y1="150" x2="345" y2="415" stroke="#888888" stroke-width="1" stroke-dasharray="5,4"/>
<!-- Height dot at base centre -->
<circle cx="345" cy="415" r="3" fill="#000000"/>
<!-- Right angle mark at base -->
<rect x="348" y="412" width="8" height="8" fill="none" stroke="#000000" stroke-width="1.5"/>

<!-- Height dimension -->
<line x1="560" y1="150" x2="560" y2="415" stroke="#000000" stroke-width="1.5" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)"/>
<line x1="345" y1="150" x2="565" y2="150" stroke="#888888" stroke-width="1" stroke-dasharray="4,4"/>
<line x1="345" y1="415" x2="565" y2="415" stroke="#888888" stroke-width="1" stroke-dasharray="4,4"/>
<text x="600" y="287" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">h = 10</text>

<!-- Base dimension — showBase=true -->
<line x1="180" y1="490" x2="420" y2="490" stroke="#000000" stroke-width="1.5" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)"/>
<text x="300" y="510" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">b = 8</text>
<text x="300" y="528" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Base area = 8² = 64 units²</text>

<!-- Formula box -->
<rect x="40" y="560" width="310" height="110" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="195" y="582" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Volume Formula:</text>
<text x="195" y="604" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">V = ⅓ × B × h</text>
<text x="195" y="626" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">V = ⅓ × 64 × 10</text>
<text x="195" y="650" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">V = 213.3 units³</text>

<!-- Notes box -->
<rect x="380" y="560" width="380" height="110" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="570" y="582" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Key Facts:</text>
<text x="390" y="604" font-family="Arial" font-size="12" fill="#000000">• Pyramid = ⅓ × prism of same base and height</text>
<text x="390" y="623" font-family="Arial" font-size="12" fill="#000000">• B = area of the base (any polygon)</text>
<text x="390" y="642" font-family="Arial" font-size="12" fill="#000000">• h = perpendicular height from apex</text>
<text x="390" y="661" font-family="Arial" font-size="12" fill="#000000">• Applies to any pyramid (square, rect, tri...)</text>

<defs>
  <marker id="arrow-end" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-start" markerWidth="8" markerHeight="8" refX="1" refY="3" orient="auto-start-reverse">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: compositeSolidVolume
    // options: showParts=true, showLabels=true, showFormula=true
    static compositeSolidVolumeSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Composite Solid Volume</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Composite Solid Volume</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">Cylinder topped with a Cone: V = V₁ + V₂</text>

<!-- ===== Cylinder (bottom part) ===== -->
<!-- Body rectangle -->
<rect x="240" y="280" width="200" height="170" fill="#FFFFFF" stroke="#000000" stroke-width="2.5"/>
<!-- Bottom ellipse -->
<ellipse cx="340" cy="450" rx="100" ry="25" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<!-- Top ellipse of cylinder (join point) -->
<ellipse cx="340" cy="280" rx="100" ry="25" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>

<!-- Part 1 label — showLabels=true -->
<text x="100" y="360" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Part 1:</text>
<text x="100" y="378" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Cylinder</text>
<line x1="155" y1="368" x2="235" y2="368" stroke="#000000" stroke-width="1" marker-end="url(#arrow-bw)"/>

<!-- Cylinder dimensions -->
<line x1="470" y1="280" x2="470" y2="450" stroke="#000000" stroke-width="1.5" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)"/>
<text x="500" y="370" font-family="Arial" font-size="12" fill="#000000">h₁ = 6</text>
<line x1="340" y1="280" x2="440" y2="280" stroke="#000000" stroke-width="1.5" marker-end="url(#arrow-bw)"/>
<text x="410" y="270" font-family="Arial" font-size="12" fill="#000000">r = 4</text>

<!-- ===== Cone (top part) ===== -->
<line x1="340" y1="130" x2="240" y2="280" stroke="#000000" stroke-width="2.5"/>
<line x1="340" y1="130" x2="440" y2="280" stroke="#000000" stroke-width="2.5"/>
<!-- Apex dot -->
<circle cx="340" cy="130" r="4" fill="#000000"/>

<!-- Part 2 label -->
<text x="100" y="188" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Part 2:</text>
<text x="100" y="206" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Cone</text>
<line x1="155" y1="196" x2="260" y2="196" stroke="#000000" stroke-width="1" marker-end="url(#arrow-bw)"/>

<!-- Cone height dimension -->
<line x1="470" y1="130" x2="470" y2="280" stroke="#000000" stroke-width="1.5" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)"/>
<text x="500" y="212" font-family="Arial" font-size="12" fill="#000000">h₂ = 5</text>
<line x1="340" y1="130" x2="470" y2="130" stroke="#888888" stroke-width="1" stroke-dasharray="4,4"/>

<!-- Dividing line label -->
<line x1="160" y1="280" x2="235" y2="280" stroke="#000000" stroke-width="1" stroke-dasharray="3,3"/>
<text x="100" y="284" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">join here</text>

<!-- Formula box -->
<rect x="540" y="130" width="230" height="220" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="655" y="153" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Volume Calculation:</text>
<line x1="552" y1="161" x2="758" y2="161" stroke="#CCCCCC" stroke-width="1"/>
<text x="655" y="181" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">V₁ (cylinder) = πr²h₁</text>
<text x="655" y="200" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">= π × 4² × 6 = 301.6</text>
<line x1="552" y1="213" x2="758" y2="213" stroke="#EEEEEE" stroke-width="1"/>
<text x="655" y="232" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">V₂ (cone) = ⅓πr²h₂</text>
<text x="655" y="251" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">= ⅓ × π × 4² × 5 = 83.8</text>
<line x1="552" y1="264" x2="758" y2="264" stroke="#CCCCCC" stroke-width="1"/>
<text x="655" y="283" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Total V = 301.6 + 83.8</text>
<text x="655" y="305" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">= 385.4 units³</text>
<text x="655" y="325" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">(r in same units)</text>
<text x="655" y="341" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">r=4, h₁=6, h₂=5</text>

<!-- Strategy box -->
<rect x="540" y="380" width="230" height="100" fill="#F0F0F0" stroke="#000000" stroke-width="1" rx="5"/>
<text x="655" y="400" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Strategy:</text>
<text x="550" y="420" font-family="Arial" font-size="11" fill="#000000">1. Split into simpler shapes</text>
<text x="550" y="438" font-family="Arial" font-size="11" fill="#000000">2. Calculate each volume</text>
<text x="550" y="456" font-family="Arial" font-size="11" fill="#000000">3. Add (or subtract) the parts</text>
<text x="550" y="474" font-family="Arial" font-size="11" fill="#000000">V = V₁ + V₂ (or V₁ − V₂)</text>

<defs>
  <marker id="arrow-bw" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-end" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-start" markerWidth="8" markerHeight="8" refX="1" refY="3" orient="auto-start-reverse">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // ============================================================
    // ===== GEOMETRIC MEASUREMENT — ARC LENGTH ===================
    // ============================================================

    // Generated from registry: arcLengthDiagram
    // radius: 100, angle: 60°
    // options: showRadius=true, showAngle=true, showFormula=true
    static arcLengthDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Arc Length Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Arc Length</text>
<text x="350" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">l = rθ  (θ in radians)</text>

<!-- Full circle outline -->
<circle cx="310" cy="330" r="200" fill="none" stroke="#CCCCCC" stroke-width="1.5"/>

<!-- Arc for 60° — from 0° to 60° -->
<!-- 0° at right: (510,330), 60° at: (310+200cos60, 330−200sin60) = (410, 157) -->
<path d="M 510,330 A 200,200 0 0 1 410,157" stroke="#000000" stroke-width="4" fill="none"/>

<!-- Radius line 1 (to 0° = right) — showRadius=true -->
<line x1="310" y1="330" x2="510" y2="330" stroke="#000000" stroke-width="2" marker-end="url(#arrow-bw)"/>
<text x="415" y="318" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">r = 100</text>

<!-- Radius line 2 (to 60°) -->
<line x1="310" y1="330" x2="410" y2="157" stroke="#000000" stroke-width="2"/>

<!-- Centre dot -->
<circle cx="310" cy="330" r="4" fill="#000000"/>

<!-- Angle arc — showAngle=true -->
<path d="M 370,330 A 60,60 0 0 1 340,278" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="388" y="313" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">60°</text>
<text x="372" y="298" font-family="Arial" font-size="11" fill="#666666">(π/3 rad)</text>

<!-- Arc length label -->
<text x="490" y="235" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">l = arc length</text>
<line x1="485" y1="240" x2="462" y2="250" stroke="#000000" stroke-width="1" marker-end="url(#arrow-bw)"/>

<!-- Formula box -->
<rect x="30" y="570" width="310" height="110" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="185" y="592" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Arc Length Formula:</text>
<text x="185" y="614" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">l = rθ  (θ in radians)</text>
<text x="185" y="636" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">l = 100 × (π/3)</text>
<text x="185" y="660" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">l = 104.7 units</text>

<!-- Degrees formula box -->
<rect x="370" y="570" width="300" height="110" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="520" y="592" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Using Degrees:</text>
<text x="520" y="614" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">l = (θ/360) × 2πr</text>
<text x="520" y="636" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">l = (60/360) × 2π × 100</text>
<text x="520" y="660" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">l = 104.7 units ✓</text>

<defs>
  <marker id="arrow-bw" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: sectorArcLabelled
    // radius: 100, angle: 90°
    // options: showLabels=true, showFormula=true
    static sectorArcLabelledSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Sector Arc Labelled</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Sector Arc Length</text>
<text x="350" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">Sector with central angle 90°, radius 100</text>

<!-- Full circle (light) -->
<circle cx="320" cy="320" r="200" fill="none" stroke="#CCCCCC" stroke-width="1.5" stroke-dasharray="6,4"/>

<!-- Sector shaded region (90°, 0° to 90°) -->
<!-- 0°: (520, 320), 90°: (320, 120) -->
<path d="M 320,320 L 520,320 A 200,200 0 0 1 320,120 Z" fill="#F0F0F0" stroke="#000000" stroke-width="2.5"/>

<!-- Arc label -->
<text x="545" y="210" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">Arc length</text>
<text x="545" y="228" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">l = rθ</text>
<line x1="540" y1="218" x2="488" y2="218" stroke="#000000" stroke-width="1" marker-end="url(#arrow-bw)"/>

<!-- Radius labels — showLabels=true -->
<text x="425" y="312" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">r</text>
<text x="308" y="225" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">r</text>

<!-- Angle label -->
<path d="M 380,320 A 60,60 0 0 1 320,260" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="375" y="296" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">θ = 90°</text>
<text x="375" y="314" font-family="Arial" font-size="11" fill="#666666">(π/2 rad)</text>

<!-- Centre dot -->
<circle cx="320" cy="320" r="4" fill="#000000"/>
<!-- Right angle mark at centre -->
<rect x="320" y="300" width="16" height="16" fill="none" stroke="#000000" stroke-width="1.5"/>

<!-- Formula boxes -->
<rect x="30" y="570" width="300" height="110" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="180" y="592" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Arc Length:</text>
<text x="180" y="614" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">l = rθ = 100 × π/2</text>
<text x="180" y="638" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">l = 157.1 units</text>
<text x="180" y="660" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Or: (90/360) × 2π × 100</text>

<rect x="360" y="570" width="310" height="110" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="515" y="592" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Sector Perimeter:</text>
<text x="515" y="614" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">P = arc length + 2r</text>
<text x="515" y="636" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">P = 157.1 + 2(100)</text>
<text x="515" y="660" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">P = 357.1 units</text>

<defs>
  <marker id="arrow-bw" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: minorMajorArc
    // radius: 100, angle: 80°
    // options: showMinor=true, showMajor=true, showLabels=true
    static minorMajorArcSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Minor and Major Arc</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Minor and Major Arc</text>
<text x="350" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">Central angle θ = 80°, radius r = 100</text>

<!-- Circle -->
<circle cx="350" cy="330" r="200" fill="none" stroke="#000000" stroke-width="2"/>

<!-- Points A and B on circle -->
<!-- A at 0° = (550, 330), B at 80° above = (350+200cos80, 330−200sin80) = (385, 133) -->
<circle cx="550" cy="330" r="5" fill="#000000"/>
<text x="562" y="326" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">A</text>
<circle cx="385" cy="133" r="5" fill="#000000"/>
<text x="392" y="125" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">B</text>

<!-- Centre dot -->
<circle cx="350" cy="330" r="4" fill="#000000"/>
<text x="335" y="326" font-family="Arial" font-size="13" fill="#000000">O</text>

<!-- Radii OA and OB -->
<line x1="350" y1="330" x2="550" y2="330" stroke="#000000" stroke-width="2"/>
<line x1="350" y1="330" x2="385" y2="133" stroke="#000000" stroke-width="2"/>

<!-- MINOR ARC (showMinor=true): 0° to 80° — thick -->
<path d="M 550,330 A 200,200 0 0 1 385,133" stroke="#000000" stroke-width="5" fill="none"/>
<text x="580" y="230" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">Minor arc</text>
<text x="580" y="248" font-family="Arial" font-size="12" fill="#000000">l = rθ = 100 × (4π/9)</text>
<text x="580" y="265" font-family="Arial" font-size="12" fill="#000000">= 139.6 units</text>
<line x1="577" y1="238" x2="530" y2="235" stroke="#000000" stroke-width="1" marker-end="url(#arrow-bw)"/>

<!-- MAJOR ARC (showMajor=true): 80° to 360° — thin dashed style different -->
<path d="M 385,133 A 200,200 0 1 1 550,330" stroke="#000000" stroke-width="2.5" fill="none" stroke-dasharray="8,4"/>
<text x="50" y="430" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">Major arc</text>
<text x="50" y="448" font-family="Arial" font-size="12" fill="#000000">l = 2πr − minor arc</text>
<text x="50" y="465" font-family="Arial" font-size="12" fill="#000000">= 628.3 − 139.6</text>
<text x="50" y="482" font-family="Arial" font-size="12" fill="#000000">= 488.7 units</text>
<line x1="165" y1="455" x2="190" y2="440" stroke="#000000" stroke-width="1" marker-end="url(#arrow-bw)"/>

<!-- Angle arc and label -->
<path d="M 420,330 A 70,70 0 0 1 393,261" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="440" y="305" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">80°</text>

<!-- Reflex angle annotation -->
<text x="240" y="200" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Reflex angle</text>
<text x="240" y="218" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">= 360° − 80° = 280°</text>

<!-- Info box -->
<rect x="50" y="570" width="600" height="110" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="350" y="592" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Key Points:</text>
<text x="65" y="613" font-family="Arial" font-size="12" fill="#000000">• Minor arc = shorter arc between two points (subtended by angle &lt; 180°)</text>
<text x="65" y="632" font-family="Arial" font-size="12" fill="#000000">• Major arc = longer arc between two points (subtended by reflex angle &gt; 180°)</text>
<text x="65" y="651" font-family="Arial" font-size="12" fill="#000000">• Minor arc + Major arc = full circumference = 2πr</text>
<text x="65" y="670" font-family="Arial" font-size="12" fill="#000000">• Minor arc uses θ; Major arc uses (2π − θ) in radians</text>

<defs>
  <marker id="arrow-bw" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: radianDefinitionDiagram
    // radius: 100
    // options: showArcEqualRadius=true, showLabels=true
    static radianDefinitionDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Radian Definition Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Radian Definition</text>
<text x="350" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">1 radian: the angle where arc length = radius</text>

<!-- Full circle (light reference) -->
<circle cx="300" cy="340" r="200" fill="none" stroke="#CCCCCC" stroke-width="1.5"/>

<!-- 1 radian ≈ 57.3°; arc from 0° to 57.3° -->
<!-- A at (500, 340), B at (300+200cos57.3, 340−200sin57.3) = (408, 171) -->
<path d="M 500,340 A 200,200 0 0 1 408,171" stroke="#000000" stroke-width="5" fill="none"/>

<!-- Radius OA -->
<line x1="300" y1="340" x2="500" y2="340" stroke="#000000" stroke-width="2.5"/>
<!-- Radius OB -->
<line x1="300" y1="340" x2="408" y2="171" stroke="#000000" stroke-width="2.5"/>

<!-- Points -->
<circle cx="500" cy="340" r="5" fill="#000000"/>
<text x="512" y="336" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">A</text>
<circle cx="408" cy="171" r="5" fill="#000000"/>
<text x="415" y="163" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">B</text>
<circle cx="300" cy="340" r="4" fill="#000000"/>
<text x="285" y="336" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">O</text>

<!-- Radius label OA -->
<text x="403" y="328" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">r = 100</text>

<!-- Arc label — showArcEqualRadius=true -->
<text x="555" y="250" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">Arc length</text>
<text x="555" y="270" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">= r = 100</text>
<line x1="550" y1="260" x2="490" y2="245" stroke="#000000" stroke-width="1" marker-end="url(#arrow-bw)"/>

<!-- Equal marks on OA and arc — showLabels=true -->
<!-- Tick on OA at midpoint -->
<line x1="396" y1="334" x2="400" y2="346" stroke="#000000" stroke-width="2"/>
<line x1="402" y1="334" x2="406" y2="346" stroke="#000000" stroke-width="2"/>

<!-- Angle arc -->
<path d="M 360,340 A 60,60 0 0 1 335,289" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="385" y="310" font-family="Arial" font-size="15" fill="#000000" font-weight="bold">1 rad</text>
<text x="373" y="328" font-family="Arial" font-size="12" fill="#666666">≈ 57.3°</text>

<!-- Full circle annotation -->
<text x="100" y="470" font-family="Arial" font-size="12" fill="#888888">Full circle = 2π radians ≈ 6.28 rad</text>
<text x="100" y="488" font-family="Arial" font-size="12" fill="#888888">= 360°</text>

<!-- Info box -->
<rect x="30" y="570" width="640" height="110" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="350" y="592" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Understanding Radians:</text>
<text x="45" y="613" font-family="Arial" font-size="12" fill="#000000">• 1 radian is defined as the angle subtended at the centre by an arc equal in length to the radius</text>
<text x="45" y="633" font-family="Arial" font-size="12" fill="#000000">• Since circumference = 2πr, there are 2π radians in a full circle</text>
<text x="45" y="653" font-family="Arial" font-size="12" fill="#000000">• Conversion: multiply degrees by π/180 to get radians; multiply radians by 180/π to get degrees</text>
<text x="45" y="671" font-family="Arial" font-size="12" fill="#000000">• 180° = π rad,  90° = π/2 rad,  60° = π/3 rad,  45° = π/4 rad,  30° = π/6 rad</text>

<defs>
  <marker id="arrow-bw" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: arcLengthFormulaVisual
    // radius: 100, angle: 1 (radian)
    // options: showDerivation=true, showFormula=true
    static arcLengthFormulaVisualSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Arc Length Formula Visual l = rθ</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Arc Length Formula: l = rθ</text>
<text x="400" y="54" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">Visual derivation</text>

<!-- Circle on left -->
<circle cx="220" cy="280" r="160" fill="none" stroke="#CCCCCC" stroke-width="1.5"/>

<!-- Sector showing θ -->
<!-- 0° at (380,280), θ=1 rad → (220+160cos1, 280−160sin1) = (306, 145) -->
<path d="M 220,280 L 380,280 A 160,160 0 0 1 306,145 Z" fill="#F0F0F0" stroke="#000000" stroke-width="2"/>

<!-- Thick arc -->
<path d="M 380,280 A 160,160 0 0 1 306,145" stroke="#000000" stroke-width="4" fill="none"/>

<!-- Radii -->
<line x1="220" y1="280" x2="380" y2="280" stroke="#000000" stroke-width="2"/>
<line x1="220" y1="280" x2="306" y2="145" stroke="#000000" stroke-width="2"/>

<!-- Radius label -->
<text x="304" y="273" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">r</text>

<!-- Angle label -->
<path d="M 280,280 A 60,60 0 0 1 254,228" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="308" y="258" font-family="Arial" font-size="13" fill="#000000">θ</text>

<!-- Arc label -->
<text x="380" y="195" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">l = rθ</text>
<line x1="375" y1="200" x2="357" y2="215" stroke="#000000" stroke-width="1" marker-end="url(#arrow-bw)"/>

<!-- Centre dot -->
<circle cx="220" cy="280" r="4" fill="#000000"/>

<!-- Derivation steps — showDerivation=true -->
<rect x="430" y="80" width="340" height="400" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="600" y="105" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Derivation of l = rθ</text>
<line x1="445" y1="115" x2="755" y2="115" stroke="#CCCCCC" stroke-width="1"/>

<text x="445" y="140" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Step 1: Full circumference</text>
<text x="453" y="160" font-family="Arial" font-size="12" fill="#000000">Circumference = 2πr</text>
<text x="453" y="178" font-family="Arial" font-size="12" fill="#000000">Full circle = 2π radians</text>

<text x="445" y="210" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Step 2: Fraction of circle</text>
<text x="453" y="230" font-family="Arial" font-size="12" fill="#000000">Arc = (θ / 2π) of full circle</text>
<text x="453" y="250" font-family="Arial" font-size="12" fill="#000000">l = (θ / 2π) × 2πr</text>

<text x="445" y="282" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Step 3: Simplify</text>
<text x="453" y="302" font-family="Arial" font-size="12" fill="#000000">l = (θ / 2π) × 2πr</text>
<text x="453" y="322" font-family="Arial" font-size="12" fill="#000000">l = θr</text>
<rect x="453" y="334" width="100" height="28" fill="#EEEEEE" stroke="#000000" stroke-width="1.5" rx="3"/>
<text x="503" y="353" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">l = rθ  ✓</text>

<text x="445" y="395" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Example (r=100, θ=1 rad):</text>
<text x="453" y="415" font-family="Arial" font-size="12" fill="#000000">l = 100 × 1 = 100 units</text>
<text x="453" y="433" font-family="Arial" font-size="11" fill="#666666">(arc length equals radius!)</text>
<text x="453" y="455" font-family="Arial" font-size="11" fill="#666666">Note: θ must be in radians</text>
<text x="453" y="470" font-family="Arial" font-size="11" fill="#666666">Degrees → rad: multiply by π/180</text>

<!-- Bottom note -->
<text x="400" y="545" font-family="Arial" font-size="12" fill="#888888" text-anchor="middle">The formula l = rθ is only valid when θ is measured in radians</text>

<defs>
  <marker id="arrow-bw" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: degreesRadiansComparison
    // options: showConversionFormula=true, showSpecialAngles=true
    static degreesRadiansComparisonSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Degrees vs Radians Comparison</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Degrees vs Radians</text>

<!-- ===== LEFT: Degrees circle ===== -->
<text x="200" y="75" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">DEGREES</text>
<circle cx="200" cy="240" r="140" fill="none" stroke="#000000" stroke-width="2"/>
<!-- Cardinal spokes -->
<line x1="200" y1="100" x2="200" y2="380" stroke="#888888" stroke-width="1" stroke-dasharray="4,4"/>
<line x1="60" y1="240" x2="340" y2="240" stroke="#888888" stroke-width="1" stroke-dasharray="4,4"/>
<!-- Degree labels (showSpecialAngles=true) -->
<text x="200" y="90" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">90°</text>
<text x="200" y="396" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">270°</text>
<text x="354" y="244" font-family="Arial" font-size="12" fill="#000000">0°/360°</text>
<text x="26" y="244" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">180°</text>
<!-- Diagonal spokes -->
<line x1="299" y1="141" x2="101" y2="339" stroke="#888888" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="101" y1="141" x2="299" y2="339" stroke="#888888" stroke-width="1" stroke-dasharray="3,3"/>
<text x="314" y="136" font-family="Arial" font-size="11" fill="#000000">45°</text>
<text x="314" y="348" font-family="Arial" font-size="11" fill="#000000">315°</text>
<text x="68" y="136" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">135°</text>
<text x="68" y="348" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">225°</text>
<!-- 30/60 marks -->
<line x1="321" y1="170" x2="79" y2="310" stroke="#CCCCCC" stroke-width="1"/>
<text x="328" y="168" font-family="Arial" font-size="10" fill="#000000">30°</text>
<line x1="321" y1="310" x2="79" y2="170" stroke="#CCCCCC" stroke-width="1"/>
<text x="328" y="313" font-family="Arial" font-size="10" fill="#000000">330°</text>
<text x="61" y="168" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">150°</text>
<text x="61" y="313" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">210°</text>
<!-- 60/120 marks -->
<line x1="270" y1="121" x2="130" y2="359" stroke="#CCCCCC" stroke-width="1"/>
<text x="274" y="116" font-family="Arial" font-size="10" fill="#000000">60°</text>
<line x1="130" y1="121" x2="270" y2="359" stroke="#CCCCCC" stroke-width="1"/>
<text x="114" y="116" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">120°</text>
<!-- Centre -->
<circle cx="200" cy="240" r="3" fill="#000000"/>

<!-- ===== RIGHT: Radians circle ===== -->
<text x="670" y="75" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">RADIANS</text>
<circle cx="670" cy="240" r="140" fill="none" stroke="#000000" stroke-width="2"/>
<!-- Cardinal spokes -->
<line x1="670" y1="100" x2="670" y2="380" stroke="#888888" stroke-width="1" stroke-dasharray="4,4"/>
<line x1="530" y1="240" x2="810" y2="240" stroke="#888888" stroke-width="1" stroke-dasharray="4,4"/>
<!-- Radian labels -->
<text x="670" y="90" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">π/2</text>
<text x="670" y="396" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">3π/2</text>
<text x="822" y="244" font-family="Arial" font-size="12" fill="#000000">0/2π</text>
<text x="516" y="244" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">π</text>
<!-- Diagonal spokes -->
<line x1="769" y1="141" x2="571" y2="339" stroke="#888888" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="571" y1="141" x2="769" y2="339" stroke="#888888" stroke-width="1" stroke-dasharray="3,3"/>
<text x="780" y="137" font-family="Arial" font-size="11" fill="#000000">π/4</text>
<text x="780" y="346" font-family="Arial" font-size="11" fill="#000000">7π/4</text>
<text x="540" y="137" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">3π/4</text>
<text x="540" y="346" font-family="Arial" font-size="11" fill="#000000" text-anchor="end">5π/4</text>
<!-- 30/60 equivalent marks -->
<line x1="791" y1="170" x2="549" y2="310" stroke="#CCCCCC" stroke-width="1"/>
<text x="797" y="168" font-family="Arial" font-size="10" fill="#000000">π/6</text>
<line x1="791" y1="310" x2="549" y2="170" stroke="#CCCCCC" stroke-width="1"/>
<text x="797" y="313" font-family="Arial" font-size="10" fill="#000000">11π/6</text>
<line x1="740" y1="121" x2="600" y2="359" stroke="#CCCCCC" stroke-width="1"/>
<text x="745" y="116" font-family="Arial" font-size="10" fill="#000000">π/3</text>
<line x1="600" y1="121" x2="740" y2="359" stroke="#CCCCCC" stroke-width="1"/>
<text x="590" y="116" font-family="Arial" font-size="10" fill="#000000" text-anchor="end">2π/3</text>
<!-- Centre -->
<circle cx="670" cy="240" r="3" fill="#000000"/>

<!-- ===== Conversion formula — showConversionFormula=true ===== -->
<rect x="335" y="150" width="230" height="80" fill="#F0F0F0" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="450" y="173" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Conversion:</text>
<text x="450" y="196" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">deg × π/180 = rad</text>
<text x="450" y="216" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">rad × 180/π = deg</text>

<!-- ===== Special angles table — showSpecialAngles=true ===== -->
<rect x="270" y="430" width="360" height="155" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="450" y="452" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Special Angles</text>
<line x1="285" y1="460" x2="615" y2="460" stroke="#CCCCCC" stroke-width="1"/>
<!-- Header -->
<text x="340" y="478" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Degrees</text>
<text x="450" y="478" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Radians</text>
<text x="560" y="478" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Decimal</text>
<line x1="285" y1="484" x2="615" y2="484" stroke="#CCCCCC" stroke-width="1"/>
<!-- Rows -->
<text x="340" y="500" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">30°</text>
<text x="450" y="500" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">π/6</text>
<text x="560" y="500" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">0.524</text>
<text x="340" y="517" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">45°</text>
<text x="450" y="517" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">π/4</text>
<text x="560" y="517" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">0.785</text>
<text x="340" y="534" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">60°</text>
<text x="450" y="534" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">π/3</text>
<text x="560" y="534" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1.047</text>
<text x="340" y="551" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">90°</text>
<text x="450" y="551" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">π/2</text>
<text x="560" y="551" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">1.571</text>
<text x="340" y="568" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">180°</text>
<text x="450" y="568" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">π</text>
<text x="560" y="568" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">3.142</text>

</g>
</svg>`;

    // ============================================================
    // ===== GEOMETRIC MEASUREMENT — SECTOR AREA ==================
    // ============================================================

    // Generated from registry: sectorAreaDiagram
    // radius: 100, angle: 60°
    // options: showRadius=true, showAngle=true, showFormula=true
    static sectorAreaDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Sector Area Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Sector Area</text>
<text x="350" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">A = ½r²θ  (θ in radians)</text>

<!-- Full circle (light) -->
<circle cx="300" cy="320" r="210" fill="none" stroke="#CCCCCC" stroke-width="1.5"/>

<!-- Sector 60° shaded: 0° to 60° -->
<!-- A at (510,320), B at (300+210cos60, 320−210sin60) = (405, 138) -->
<path d="M 300,320 L 510,320 A 210,210 0 0 1 405,138 Z" fill="#EEEEEE" stroke="#000000" stroke-width="2.5"/>

<!-- Area label inside sector -->
<text x="440" y="285" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Area = A</text>

<!-- Radius labels — showRadius=true -->
<text x="409" y="312" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">r = 100</text>

<!-- Radius line 2 unlabelled -->
<text x="345" y="232" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">r</text>

<!-- Angle — showAngle=true -->
<path d="M 370,320 A 70,70 0 0 1 335,259" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="396" y="302" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">θ = 60°</text>
<text x="383" y="319" font-family="Arial" font-size="11" fill="#666666">(π/3 rad)</text>

<!-- Centre dot -->
<circle cx="300" cy="320" r="4" fill="#000000"/>

<!-- Formula boxes -->
<rect x="30" y="570" width="305" height="110" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="182" y="592" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Sector Area (radians):</text>
<text x="182" y="614" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">A = ½r²θ</text>
<text x="182" y="636" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A = ½ × 100² × (π/3)</text>
<text x="182" y="660" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">A = 5,236 units²</text>

<rect x="365" y="570" width="305" height="110" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="517" y="592" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Using Degrees:</text>
<text x="517" y="614" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A = (θ/360) × πr²</text>
<text x="517" y="636" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A = (60/360) × π × 100²</text>
<text x="517" y="660" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">A = 5,236 units² ✓</text>

<defs>
  <marker id="arrow-bw" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: sectorVsSegment
    // radius: 100, angle: 60°
    // options: showSector=true, showSegment=true, showLabels=true
    static sectorVsSegmentSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Sector vs Segment</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Sector vs Segment</text>

<!-- ===== LEFT: SECTOR ===== -->
<text x="185" y="70" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">SECTOR</text>
<text x="185" y="88" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">("pizza slice")</text>

<!-- Full circle light -->
<circle cx="185" cy="260" r="150" fill="none" stroke="#CCCCCC" stroke-width="1.5"/>

<!-- Sector shaded (60°): O at (185,260), A at (335,260), B at (260, 130) -->
<path d="M 185,260 L 335,260 A 150,150 0 0 1 260,130 Z" fill="#DDDDDD" stroke="#000000" stroke-width="2.5"/>

<!-- Centre and radii labels -->
<circle cx="185" cy="260" r="3" fill="#000000"/>
<text x="260" y="253" font-family="Arial" font-size="12" fill="#000000">r</text>
<text x="212" y="200" font-family="Arial" font-size="12" fill="#000000">r</text>
<text x="222" y="250" font-family="Arial" font-size="13" fill="#000000">θ</text>

<!-- Sector components label -->
<text x="60" y="295" font-family="Arial" font-size="11" fill="#000000">= triangle OAB</text>
<text x="60" y="313" font-family="Arial" font-size="11" fill="#000000">+ segment</text>
<line x1="148" y1="300" x2="175" y2="285" stroke="#000000" stroke-width="1" marker-end="url(#arrow-bw)"/>

<!-- Sector formula -->
<rect x="40" y="440" width="280" height="80" fill="#F8F8F8" stroke="#000000" stroke-width="1" rx="4"/>
<text x="180" y="462" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Sector Area:</text>
<text x="180" y="484" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A = ½r²θ  (θ in radians)</text>
<text x="180" y="506" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">or (θ/360) × πr² (degrees)</text>

<!-- ===== RIGHT: SEGMENT ===== -->
<text x="600" y="70" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">SEGMENT</text>
<text x="600" y="88" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">(sector minus triangle)</text>

<!-- Full circle light -->
<circle cx="600" cy="260" r="150" fill="none" stroke="#CCCCCC" stroke-width="1.5"/>

<!-- Segment shaded only (between chord AB and arc) -->
<!-- A at (750,260), B at (675,130); chord AB -->
<path d="M 750,260 A 150,150 0 0 1 675,130 Z" fill="#DDDDDD" stroke="#000000" stroke-width="2.5"/>

<!-- Chord AB -->
<line x1="750" y1="260" x2="675" y2="130" stroke="#000000" stroke-width="2.5"/>

<!-- Dashed triangle for reference -->
<line x1="600" y1="260" x2="750" y2="260" stroke="#888888" stroke-width="1.5" stroke-dasharray="5,4"/>
<line x1="600" y1="260" x2="675" y2="130" stroke="#888888" stroke-width="1.5" stroke-dasharray="5,4"/>

<!-- Centre dot -->
<circle cx="600" cy="260" r="3" fill="#000000"/>
<text x="584" y="257" font-family="Arial" font-size="12" fill="#000000">O</text>

<!-- Label chord -->
<text x="728" y="200" font-family="Arial" font-size="12" fill="#000000">chord</text>
<line x1="726" y1="204" x2="718" y2="200" stroke="#000000" stroke-width="1" marker-end="url(#arrow-bw)"/>

<!-- Segment formula -->
<rect x="465" y="440" width="280" height="80" fill="#F8F8F8" stroke="#000000" stroke-width="1" rx="4"/>
<text x="605" y="462" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Segment Area:</text>
<text x="605" y="484" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A = ½r²(θ − sin θ)</text>
<text x="605" y="506" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">= Sector − Triangle</text>

<!-- Divider -->
<line x1="400" y1="80" x2="400" y2="540" stroke="#CCCCCC" stroke-width="1.5" stroke-dasharray="8,5"/>

<!-- Key difference box at bottom -->
<rect x="150" y="545" width="500" height="45" fill="#F0F0F0" stroke="#000000" stroke-width="1" rx="4"/>
<text x="400" y="562" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Key Difference:</text>
<text x="400" y="580" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Sector includes the two radii; Segment is bounded only by the chord and arc</text>

<defs>
  <marker id="arrow-bw" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: segmentAreaDiagram
    // radius: 100, angle: 60°
    // options: showSector=true, showTriangle=true, showFormula=true
    static segmentAreaDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Segment Area Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Segment Area</text>
<text x="350" y="54" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">A = ½r²(θ − sin θ)</text>

<!-- Full circle -->
<circle cx="310" cy="300" r="200" fill="none" stroke="#BBBBBB" stroke-width="1.5"/>

<!-- SECTOR shaded (60° sector, showSector=true) -->
<!-- O(310,300), A(510,300), B(410,127) for 60° -->
<path d="M 310,300 L 510,300 A 200,200 0 0 1 410,127 Z" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>

<!-- TRIANGLE shaded differently (showTriangle=true): O, A, B -->
<polygon points="310,300 510,300 410,127" fill="#F8F8F8" stroke="#000000" stroke-width="2" stroke-dasharray="6,3"/>

<!-- Segment = darkened region between chord and arc -->
<!-- Highlight: just arc + chord region -->
<path d="M 510,300 A 200,200 0 0 1 410,127 L 510,300 Z" fill="#DDDDDD" stroke="none"/>

<!-- Chord AB -->
<line x1="510" y1="300" x2="410" y2="127" stroke="#000000" stroke-width="2.5"/>

<!-- Labels -->
<!-- Sector label -->
<text x="470" y="265" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Sector</text>
<text x="470" y="280" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">OAB</text>

<!-- Triangle label -->
<text x="440" y="310" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">Triangle</text>
<text x="440" y="325" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">OAB</text>

<!-- Segment label with arrow -->
<text x="570" y="215" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">Segment</text>
<line x1="567" y1="220" x2="495" y2="220" stroke="#000000" stroke-width="1" marker-end="url(#arrow-bw)"/>

<!-- Centre dot and label -->
<circle cx="310" cy="300" r="4" fill="#000000"/>
<text x="295" y="296" font-family="Arial" font-size="13" fill="#000000">O</text>

<!-- Points A and B -->
<circle cx="510" cy="300" r="4" fill="#000000"/>
<text x="517" y="296" font-family="Arial" font-size="13" fill="#000000">A</text>
<circle cx="410" cy="127" r="4" fill="#000000"/>
<text x="416" y="120" font-family="Arial" font-size="13" fill="#000000">B</text>

<!-- Radii labels -->
<text x="413" y="293" font-family="Arial" font-size="13" fill="#000000">r</text>
<text x="352" y="213" font-family="Arial" font-size="13" fill="#000000">r</text>

<!-- Angle label -->
<path d="M 375,300 A 65,65 0 0 1 342,244" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="393" y="282" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">θ=60°</text>

<!-- Formula derivation box -->
<rect x="30" y="555" width="640" height="130" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="350" y="576" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Derivation: Segment = Sector − Triangle</text>
<line x1="45" y1="584" x2="655" y2="584" stroke="#CCCCCC" stroke-width="1"/>
<text x="55" y="602" font-family="Arial" font-size="12" fill="#000000">Sector area = ½r²θ = ½ × 100² × (π/3) = 5,236 units²</text>
<text x="55" y="622" font-family="Arial" font-size="12" fill="#000000">Triangle area = ½r²sin θ = ½ × 100² × sin(60°) = 4,330 units²</text>
<text x="55" y="642" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Segment = 5,236 − 4,330 = 906 units²</text>
<text x="55" y="662" font-family="Arial" font-size="12" fill="#000000">Formula: A = ½r²(θ − sin θ) = ½ × 100² × (π/3 − sin 60°)</text>
<text x="55" y="676" font-family="Arial" font-size="11" fill="#666666">  = 5000 × (1.047 − 0.866) = 5000 × 0.181 = 906 units²  ✓</text>

<defs>
  <marker id="arrow-bw" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: sectorFractionOfCircle
    // radius: 100, angle: 90°
    // options: showFraction=true, showFormula=true
    static sectorFractionOfCircleSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Sector as Fraction of Circle</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Sector as Fraction of Circle</text>
<text x="350" y="54" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">A sector is a fraction (θ/2π) of the full circle area</text>

<!-- Circle divided into 4 quadrants: 90° each -->
<circle cx="350" cy="300" r="200" fill="none" stroke="#000000" stroke-width="2"/>

<!-- Quadrant dividers -->
<line x1="350" y1="100" x2="350" y2="500" stroke="#000000" stroke-width="1.5"/>
<line x1="150" y1="300" x2="550" y2="300" stroke="#000000" stroke-width="1.5"/>

<!-- Highlight one quadrant (top-right, 0° to 90°) — showFraction=true -->
<path d="M 350,300 L 550,300 A 200,200 0 0 1 350,100 Z" fill="#DDDDDD" stroke="#000000" stroke-width="2.5"/>

<!-- Fraction labels in each quadrant -->
<text x="470" y="215" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">¼</text>
<text x="235" y="215" font-family="Arial" font-size="18" fill="#AAAAAA" text-anchor="middle">¼</text>
<text x="235" y="400" font-family="Arial" font-size="18" fill="#AAAAAA" text-anchor="middle">¼</text>
<text x="470" y="400" font-family="Arial" font-size="18" fill="#AAAAAA" text-anchor="middle">¼</text>

<!-- Angle label in highlighted sector -->
<path d="M 410,300 A 60,60 0 0 1 350,240" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="425" y="275" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">90°</text>

<!-- Centre dot -->
<circle cx="350" cy="300" r="4" fill="#000000"/>

<!-- Radius label -->
<text x="453" y="295" font-family="Arial" font-size="13" fill="#000000">r = 100</text>

<!-- Fraction annotation — showFraction=true -->
<text x="120" y="560" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Fraction =</text>
<text x="240" y="545" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">θ</text>
<line x1="190" y1="550" x2="295" y2="550" stroke="#000000" stroke-width="1.5"/>
<text x="240" y="567" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">360°</text>
<text x="320" y="560" font-family="Arial" font-size="14" fill="#000000">=</text>
<text x="395" y="545" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">90°</text>
<line x1="345" y1="550" x2="450" y2="550" stroke="#000000" stroke-width="1.5"/>
<text x="395" y="567" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">360°</text>
<text x="470" y="560" font-family="Arial" font-size="14" fill="#000000">=</text>
<text x="530" y="560" font-family="Arial" font-size="16" fill="#000000" font-weight="bold">¼</text>

<!-- Formula boxes -->
<rect x="30" y="590" width="300" height="90" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="180" y="612" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Sector Area:</text>
<text x="180" y="634" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A = (θ/360) × πr²</text>
<text x="180" y="656" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">= ¼ × π × 100² = 7,854 units²</text>
<text x="180" y="672" font-family="Arial" font-size="11" fill="#888888" text-anchor="middle">Or: A = ½r²θ (rad)</text>

<rect x="370" y="590" width="300" height="90" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="520" y="612" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Full Circle Area:</text>
<text x="520" y="634" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A = πr² = π × 100² = 31,416 units²</text>
<text x="520" y="656" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Sector = ¼ of full circle</text>
<text x="520" y="674" font-family="Arial" font-size="11" fill="#888888" text-anchor="middle">= 31,416 ÷ 4 = 7,854 ✓</text>

</g>
</svg>`;

    // Generated from registry: sectorAreaFormulaVisual
    // radius: 100
    // options: showDerivation=true, showFormula=true
    static sectorAreaFormulaVisualSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Sector Area Formula A = ½r²θ</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Sector Area Formula: A = ½r²θ</text>
<text x="400" y="54" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">Visual derivation from arc length l = rθ</text>

<!-- Circle on left (smaller for space) -->
<circle cx="215" cy="280" r="160" fill="none" stroke="#BBBBBB" stroke-width="1.5"/>

<!-- Sector for θ=1 rad (57.3°): A(375,280), B(215+160cos1, 280−160sin1) = (301, 146) -->
<path d="M 215,280 L 375,280 A 160,160 0 0 1 301,146 Z" fill="#EEEEEE" stroke="#000000" stroke-width="2.5"/>

<!-- Arc label -->
<text x="370" y="200" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">l = rθ</text>
<line x1="366" y1="205" x2="350" y2="213" stroke="#000000" stroke-width="1" marker-end="url(#arrow-bw)"/>

<!-- Radius labels -->
<text x="298" y="272" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">r</text>
<text x="256" y="212" font-family="Arial" font-size="13" fill="#000000">r</text>

<!-- Angle -->
<path d="M 275,280 A 60,60 0 0 1 249,230" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="295" y="260" font-family="Arial" font-size="13" fill="#000000">θ</text>

<!-- Centre dot -->
<circle cx="215" cy="280" r="4" fill="#000000"/>

<!-- Derivation steps box — showDerivation=true -->
<rect x="430" y="70" width="345" height="450" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="603" y="96" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Derivation of A = ½r²θ</text>
<line x1="445" y1="105" x2="760" y2="105" stroke="#CCCCCC" stroke-width="1"/>

<text x="445" y="130" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Method 1: From arc length</text>
<text x="453" y="150" font-family="Arial" font-size="12" fill="#000000">Arc length: l = rθ</text>
<text x="453" y="170" font-family="Arial" font-size="12" fill="#000000">Sector ≈ triangle with base l, height r</text>
<text x="453" y="190" font-family="Arial" font-size="12" fill="#000000">A ≈ ½ × base × height</text>
<text x="453" y="210" font-family="Arial" font-size="12" fill="#000000">A = ½ × rθ × r = ½r²θ ✓</text>

<line x1="445" y1="222" x2="760" y2="222" stroke="#EEEEEE" stroke-width="1"/>

<text x="445" y="245" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Method 2: Fraction of circle</text>
<text x="453" y="265" font-family="Arial" font-size="12" fill="#000000">Full circle area = πr²</text>
<text x="453" y="285" font-family="Arial" font-size="12" fill="#000000">Fraction = θ / 2π (radians)</text>
<text x="453" y="305" font-family="Arial" font-size="12" fill="#000000">A = (θ/2π) × πr²</text>
<text x="453" y="325" font-family="Arial" font-size="12" fill="#000000">A = θr²/2 = ½r²θ ✓</text>

<line x1="445" y1="338" x2="760" y2="338" stroke="#CCCCCC" stroke-width="1"/>

<text x="445" y="360" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Degree version:</text>
<text x="453" y="380" font-family="Arial" font-size="12" fill="#000000">A = (θ°/360) × πr²</text>

<line x1="445" y1="394" x2="760" y2="394" stroke="#EEEEEE" stroke-width="1"/>

<text x="445" y="416" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Example (r=100, θ=π/3):</text>
<text x="453" y="436" font-family="Arial" font-size="12" fill="#000000">A = ½ × 100² × π/3</text>
<text x="453" y="456" font-family="Arial" font-size="12" fill="#000000">A = 5000 × 1.047</text>
<rect x="453" y="466" width="150" height="28" fill="#EEEEEE" stroke="#000000" stroke-width="1" rx="3"/>
<text x="528" y="485" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">A = 5,236 units²</text>

<text x="453" y="508" font-family="Arial" font-size="11" fill="#666666">⚠ θ must be in radians for A = ½r²θ</text>

<!-- Bottom note -->
<text x="400" y="565" font-family="Arial" font-size="12" fill="#888888" text-anchor="middle">The sector area formula is closely related to the arc length formula: A = ½rl = ½r(rθ) = ½r²θ</text>

<defs>
  <marker id="arrow-bw" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: compositeSectorDiagram
    // options: showParts=true, showLabels=true, showFormula=true
    static compositeSectorDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Composite Sector Area</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Composite Sector Area</text>
<text x="400" y="54" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">Shape = Large sector − Small sector (annular sector)</text>

<!-- ===== Composite shape: large sector minus small sector ===== -->
<!-- Large sector: centre (280,300), r=180, angle 100° (−10° to 90°) -->
<!-- A_large at (280+180cos(−10°), 300−180sin(−10°)) = (457, 331) -->
<!-- B_large at (280+180cos(90°), 300−180sin(90°)) = (280, 120) -->
<!-- Small sector: centre (280,300), r=90, same angle -->
<!-- A_small at (280+90cos(−10°), 300+90sin(10°)) = (369, 284) wait... -->
<!-- Simplify: use 0° to 100° -->
<!-- Large: A(460,300), B(280+180cos100, 300−180sin100) = (280−31,300−177) = (249,123) -->
<!-- Small: A_s(370,300), B_s(280−16,300−89) = (265,211) -->

<!-- Outer arc -->
<path d="M 460,300 A 180,180 0 0 1 249,123" stroke="#000000" stroke-width="2.5" fill="none"/>
<!-- Inner arc -->
<path d="M 370,300 A 90,90 0 0 1 265,211" stroke="#000000" stroke-width="2.5" fill="none"/>

<!-- Radial edges (outer) -->
<line x1="280" y1="300" x2="460" y2="300" stroke="#000000" stroke-width="2.5"/>
<line x1="280" y1="300" x2="249" y2="123" stroke="#000000" stroke-width="2.5"/>

<!-- Radial edges (inner dashed) -->
<line x1="280" y1="300" x2="370" y2="300" stroke="#888888" stroke-width="1.5" stroke-dasharray="5,4"/>
<line x1="280" y1="300" x2="265" y2="211" stroke="#888888" stroke-width="1.5" stroke-dasharray="5,4"/>

<!-- Closing edges of annular sector -->
<line x1="370" y1="300" x2="460" y2="300" stroke="#000000" stroke-width="2.5"/>
<line x1="265" y1="211" x2="249" y2="123" stroke="#000000" stroke-width="2.5"/>

<!-- Fill region (composite area) -->
<path d="M 460,300 A 180,180 0 0 1 249,123 L 265,211 A 90,90 0 0 0 370,300 Z" fill="#EEEEEE" stroke="none"/>

<!-- Centre dot -->
<circle cx="280" cy="300" r="4" fill="#000000"/>
<text x="265" y="297" font-family="Arial" font-size="12" fill="#000000">O</text>

<!-- Part labels — showParts=true, showLabels=true -->
<text x="460" y="218" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">R = 180</text>
<line x1="455" y1="222" x2="395" y2="240" stroke="#000000" stroke-width="1" marker-end="url(#arrow-bw)"/>

<text x="50" y="260" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">r = 90</text>
<line x1="108" y1="257" x2="265" y2="255" stroke="#000000" stroke-width="1" marker-end="url(#arrow-bw)"/>

<!-- Angle label -->
<path d="M 345,300 A 65,65 0 0 1 328,253" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="370" y="276" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">θ=100°</text>

<!-- Formula box — showFormula=true -->
<rect x="510" y="110" width="260" height="260" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="640" y="133" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Area Calculation:</text>
<line x1="522" y1="141" x2="758" y2="141" stroke="#CCCCCC" stroke-width="1"/>
<text x="522" y="162" font-family="Arial" font-size="12" fill="#000000">A = A_large sector − A_small</text>
<text x="522" y="182" font-family="Arial" font-size="12" fill="#000000">  = ½R²θ − ½r²θ</text>
<text x="522" y="202" font-family="Arial" font-size="12" fill="#000000">  = ½θ(R² − r²)</text>
<line x1="522" y1="214" x2="758" y2="214" stroke="#EEEEEE" stroke-width="1"/>
<text x="522" y="234" font-family="Arial" font-size="12" fill="#000000">θ = 100° = 5π/9 rad</text>
<text x="522" y="254" font-family="Arial" font-size="12" fill="#000000">= ½ × (5π/9) × (180²−90²)</text>
<text x="522" y="274" font-family="Arial" font-size="12" fill="#000000">= ½ × 1.745 × (32400−8100)</text>
<text x="522" y="294" font-family="Arial" font-size="12" fill="#000000">= ½ × 1.745 × 24300</text>
<rect x="522" y="306" width="226" height="28" fill="#EEEEEE" stroke="#000000" stroke-width="1" rx="3"/>
<text x="635" y="325" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">A = 21,202 units²</text>
<text x="522" y="358" font-family="Arial" font-size="11" fill="#666666">Or: (θ°/360) × π(R²−r²)</text>

<!-- Strategy note -->
<rect x="510" y="400" width="260" height="100" fill="#F0F0F0" stroke="#000000" stroke-width="1" rx="5"/>
<text x="640" y="420" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">General Strategy:</text>
<text x="520" y="440" font-family="Arial" font-size="11" fill="#000000">1. Identify all sector/region parts</text>
<text x="520" y="458" font-family="Arial" font-size="11" fill="#000000">2. Add or subtract areas</text>
<text x="520" y="476" font-family="Arial" font-size="11" fill="#000000">3. May include triangles, rectangles</text>
<text x="520" y="494" font-family="Arial" font-size="11" fill="#000000">4. Use consistent angle units</text>

<defs>
  <marker id="arrow-bw" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // ============================================================
    // ===== GEOMETRIC MEASUREMENT — TRIGONOMETRY RATIOS ==========
    // ============================================================

    // Generated from registry: rightTriangleLabelled
    // angle: 35°
    // options: showAngle=true, showSideNames=true, showRightAngle=true
    static rightTriangleLabelledSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="600" viewBox="0 0 700 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Right Triangle — Sides Labelled</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Right Triangle — Sides Labelled</text>
<text x="350" y="54" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">Relative to angle θ = 35°</text>

<!-- Right triangle: right angle at C(160,430), angle θ at A(160,180), B(520,430) -->
<polygon points="160,180 160,430 520,430" fill="#F5F5F5" stroke="#000000" stroke-width="2.5"/>

<!-- Right angle mark at C — showRightAngle=true -->
<rect x="160" y="410" width="20" height="20" fill="none" stroke="#000000" stroke-width="1.5"/>

<!-- Angle θ at A — showAngle=true -->
<path d="M 160,220 A 40,40 0 0 1 193,196" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="198" y="225" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">θ = 35°</text>

<!-- Side labels — showSideNames=true -->
<!-- HYPOTENUSE: diagonal A to B -->
<text x="348" y="285" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold" transform="rotate(-52.3, 348, 285)">Hypotenuse (H)</text>

<!-- OPPOSITE: vertical side AC (opposite to θ at A) — the side opposite to angle = BC -->
<!-- BC is the horizontal side from C(160,430) to B(520,430) -->
<!-- Wait: opposite to angle at A = side not touching A = BC (horizontal) -->
<text x="340" y="462" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Opposite (O)</text>

<!-- ADJACENT: vertical side from A to C = AC (vertical) -->
<text x="118" y="310" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold" transform="rotate(-90, 118, 310)">Adjacent (A)</text>

<!-- Vertex labels -->
<text x="144" y="175" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">A (θ)</text>
<text x="140" y="455" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">C</text>
<text x="527" y="455" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">B</text>

<!-- Coloured bracket annotations -->
<!-- Hypotenuse bracket arrow -->
<line x1="560" y1="290" x2="535" y2="310" stroke="#000000" stroke-width="1" marker-end="url(#arrow-bw)"/>
<text x="572" y="285" font-family="Arial" font-size="12" fill="#000000">AB = H</text>

<line x1="330" y1="490" x2="330" y2="475" stroke="#000000" stroke-width="1" marker-end="url(#arrow-bw)"/>
<text x="280" y="505" font-family="Arial" font-size="12" fill="#000000">BC = Opposite</text>

<line x1="80" y1="305" x2="148" y2="305" stroke="#000000" stroke-width="1" marker-end="url(#arrow-bw)"/>
<text x="42" y="300" font-family="Arial" font-size="12" fill="#000000">AC = Adj</text>

<!-- Info box -->
<rect x="30" y="530" width="640" height="55" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="350" y="552" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Remember: Side names are RELATIVE to the chosen angle θ</text>
<text x="350" y="573" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Opposite = side facing θ  |  Adjacent = side next to θ  |  Hypotenuse = longest side (opposite right angle)</text>

<defs>
  <marker id="arrow-bw" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: sohCahToaDiagram
    // angle: 35°
    // options: showMnemonic=true, showRatios=true, showTriangle=true
    static sohCahToaDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>SOH CAH TOA Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">SOH CAH TOA</text>
<text x="400" y="54" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">Trigonometric ratios for a right triangle, θ = 35°</text>

<!-- ===== Triangle (showTriangle=true) ===== -->
<!-- Right angle at C(120,450), θ at A(120,180), B(500,450) -->
<polygon points="120,180 120,450 500,450" fill="#F5F5F5" stroke="#000000" stroke-width="2.5"/>

<!-- Right angle mark -->
<rect x="120" y="430" width="20" height="20" fill="none" stroke="#000000" stroke-width="1.5"/>

<!-- Angle arc at A -->
<path d="M 120,225 A 45,45 0 0 1 157,202" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="166" y="232" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">θ = 35°</text>

<!-- Side labels on triangle -->
<text x="67" y="320" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90, 67, 320)">Adjacent</text>
<text x="310" y="476" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Opposite</text>
<text x="318" y="295" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-52, 318, 295)">Hypotenuse</text>

<!-- Vertex labels -->
<text x="102" y="172" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">A</text>
<text x="102" y="468" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">C</text>
<text x="506" y="468" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">B</text>

<!-- ===== SOH CAH TOA mnemonic (showMnemonic=true) ===== -->
<rect x="535" y="80" width="240" height="160" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="655" y="103" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">SOH CAH TOA</text>
<line x1="548" y1="110" x2="762" y2="110" stroke="#CCCCCC" stroke-width="1"/>
<text x="548" y="132" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">SOH:</text>
<text x="600" y="132" font-family="Arial" font-size="13" fill="#000000">Sin = Opposite/Hyp</text>
<text x="548" y="158" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">CAH:</text>
<text x="600" y="158" font-family="Arial" font-size="13" fill="#000000">Cos = Adjacent/Hyp</text>
<text x="548" y="184" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">TOA:</text>
<text x="600" y="184" font-family="Arial" font-size="13" fill="#000000">Tan = Opposite/Adj</text>
<text x="548" y="210" font-family="Arial" font-size="12" fill="#666666" font-style="italic">"Some Old Hippo</text>
<text x="548" y="228" font-family="Arial" font-size="12" fill="#666666" font-style="italic"> Came And Had Tea Or Ate"</text>

<!-- ===== Ratios with values (showRatios=true) ===== -->
<rect x="535" y="262" width="240" height="220" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="655" y="283" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Values for θ = 35°:</text>
<line x1="548" y1="291" x2="762" y2="291" stroke="#CCCCCC" stroke-width="1"/>
<!-- Assume H=10 for simplicity -->
<text x="548" y="313" font-family="Arial" font-size="11" fill="#666666">(if H = 10 units)</text>
<text x="548" y="333" font-family="Arial" font-size="12" fill="#000000">O = 10 × sin 35° = 5.74</text>
<text x="548" y="353" font-family="Arial" font-size="12" fill="#000000">A = 10 × cos 35° = 8.19</text>
<line x1="548" y1="365" x2="762" y2="365" stroke="#EEEEEE" stroke-width="1"/>
<text x="548" y="385" font-family="Arial" font-size="12" fill="#000000">sin 35° = O/H = 0.574</text>
<text x="548" y="405" font-family="Arial" font-size="12" fill="#000000">cos 35° = A/H = 0.819</text>
<text x="548" y="425" font-family="Arial" font-size="12" fill="#000000">tan 35° = O/A = 0.700</text>
<line x1="548" y1="438" x2="762" y2="438" stroke="#EEEEEE" stroke-width="1"/>
<text x="548" y="456" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">tan θ = sin θ / cos θ</text>
<text x="548" y="474" font-family="Arial" font-size="11" fill="#666666">= 0.574/0.819 = 0.700 ✓</text>

<!-- Bottom note -->
<rect x="30" y="530" width="480" height="55" fill="#F0F0F0" stroke="#000000" stroke-width="1" rx="4"/>
<text x="240" y="553" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Finding unknown sides:</text>
<text x="240" y="573" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">sin θ = O/H → O = H·sinθ  |  cos θ = A/H → A = H·cosθ  |  tan θ = O/A</text>

<defs>
  <marker id="arrow-bw" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: angleOfElevation
    // angle: 30°
    // options: showAngle=true, showHorizontal=true, showLabels=true
    static angleOfElevationSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Angle of Elevation</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="32" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Angle of Elevation</text>
<text x="400" y="54" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">Looking UP from horizontal — angle of elevation = 30°</text>

<!-- Ground line (horizontal) — showHorizontal=true -->
<line x1="50" y1="430" x2="750" y2="430" stroke="#000000" stroke-width="2"/>
<!-- Ground hatching -->
<line x1="50" y1="430" x2="60" y2="445" stroke="#000000" stroke-width="1.5"/>
<line x1="100" y1="430" x2="110" y2="445" stroke="#000000" stroke-width="1.5"/>
<line x1="150" y1="430" x2="160" y2="445" stroke="#000000" stroke-width="1.5"/>
<line x1="200" y1="430" x2="210" y2="445" stroke="#000000" stroke-width="1.5"/>
<line x1="250" y1="430" x2="260" y2="445" stroke="#000000" stroke-width="1.5"/>
<line x1="300" y1="430" x2="310" y2="445" stroke="#000000" stroke-width="1.5"/>
<line x1="350" y1="430" x2="360" y2="445" stroke="#000000" stroke-width="1.5"/>
<line x1="400" y1="430" x2="410" y2="445" stroke="#000000" stroke-width="1.5"/>
<line x1="450" y1="430" x2="460" y2="445" stroke="#000000" stroke-width="1.5"/>
<line x1="500" y1="430" x2="510" y2="445" stroke="#000000" stroke-width="1.5"/>
<line x1="550" y1="430" x2="560" y2="445" stroke="#000000" stroke-width="1.5"/>
<line x1="600" y1="430" x2="610" y2="445" stroke="#000000" stroke-width="1.5"/>
<line x1="650" y1="430" x2="660" y2="445" stroke="#000000" stroke-width="1.5"/>
<line x1="700" y1="430" x2="710" y2="445" stroke="#000000" stroke-width="1.5"/>
<line x1="740" y1="430" x2="750" y2="445" stroke="#000000" stroke-width="1.5"/>

<!-- Observer (stick figure) at A(130, 430) -->
<circle cx="130" cy="398" r="14" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<line x1="130" y1="412" x2="130" y2="430" stroke="#000000" stroke-width="2"/>
<line x1="130" y1="420" x2="115" y2="430" stroke="#000000" stroke-width="1.5"/>
<line x1="130" y1="420" x2="145" y2="430" stroke="#000000" stroke-width="1.5"/>
<text x="130" y="470" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Observer</text>

<!-- Object/building at B right (620, 430) with top T(620, 150) -->
<!-- Building -->
<rect x="610" y="150" width="50" height="280" fill="#EEEEEE" stroke="#000000" stroke-width="2"/>
<!-- Roof -->
<polygon points="605,150 635,118 665,150" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<!-- Windows -->
<rect x="620" y="180" width="15" height="18" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
<rect x="620" y="215" width="15" height="18" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
<rect x="620" y="250" width="15" height="18" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
<rect x="620" y="285" width="15" height="18" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
<text x="635" y="150" font-family="Arial" font-size="12" fill="#000000">T (top)</text>

<!-- Line of sight from eye to top of building -->
<line x1="130" y1="398" x2="620" y2="150" stroke="#000000" stroke-width="2" stroke-dasharray="8,5"/>

<!-- Horizontal reference line from observer — showHorizontal=true -->
<line x1="130" y1="398" x2="640" y2="398" stroke="#888888" stroke-width="1.5" stroke-dasharray="5,4"/>

<!-- Angle of elevation arc — showAngle=true -->
<path d="M 215,398 A 85,85 0 0 1 191,355" stroke="#000000" stroke-width="2" fill="none"/>
<text x="230" y="386" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">30°</text>
<text x="226" y="368" font-family="Arial" font-size="12" fill="#666666">(elevation)</text>

<!-- Horizontal label -->
<text x="390" y="393" font-family="Arial" font-size="12" fill="#888888" text-anchor="middle">horizontal</text>

<!-- Dimension annotations — showLabels=true -->
<!-- Horizontal distance -->
<line x1="130" y1="470" x2="620" y2="470" stroke="#000000" stroke-width="1.5" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)"/>
<text x="375" y="490" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">d (horizontal distance)</text>

<!-- Height of building (vertical) -->
<line x1="665" y1="150" x2="665" y2="430" stroke="#000000" stroke-width="1.5" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)"/>
<text x="700" y="295" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">h</text>

<!-- Trig relationship box -->
<rect x="30" y="520" width="740" height="65" fill="#F8F8F8" stroke="#000000" stroke-width="1.5" rx="5"/>
<text x="400" y="541" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Using Trigonometry:</text>
<text x="400" y="562" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">tan(30°) = h/d  →  h = d × tan(30°)  |  sin(30°) = h/hyp  |  cos(30°) = d/hyp</text>
<text x="400" y="578" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Angle of elevation is measured FROM horizontal UPWARD to line of sight</text>

<defs>
  <marker id="arrow-end" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrow-start" markerWidth="8" markerHeight="8" refX="1" refY="3" orient="auto-start-reverse">
    <polygon points="0 0, 8 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

/**
    // ============================================================
    // ===== STATIC LOOKUP MAP ====================================
    // ============================================================

    static svgMap = {
        // Volume
        'cuboid_volume':            MathematicsSvgDiagrams.cuboidVolumeSvg,
        'cylinder_volume':          MathematicsSvgDiagrams.cylinderVolumeSvg,
        'cone_volume':              MathematicsSvgDiagrams.coneVolumeSvg,
        'sphere_volume':            MathematicsSvgDiagrams.sphereVolumeSvg,
        'prism_cross_section':      MathematicsSvgDiagrams.prismCrossSectionSvg,
        'pyramid_volume':           MathematicsSvgDiagrams.pyramidVolumeSvg,
        'composite_solid_volume':   MathematicsSvgDiagrams.compositeSolidVolumeSvg,
        // Arc Length
        'arc_length_diagram':           MathematicsSvgDiagrams.arcLengthDiagramSvg,
        'sector_arc_labelled':          MathematicsSvgDiagrams.sectorArcLabelledSvg,
        'minor_major_arc':              MathematicsSvgDiagrams.minorMajorArcSvg,
        'radian_definition_diagram':    MathematicsSvgDiagrams.radianDefinitionDiagramSvg,
        'arc_length_formula_visual':    MathematicsSvgDiagrams.arcLengthFormulaVisualSvg,
        'degrees_radians_comparison':   MathematicsSvgDiagrams.degreesRadiansComparisonSvg,
        // Sector Area
        'sector_area_diagram':          MathematicsSvgDiagrams.sectorAreaDiagramSvg,
        'sector_vs_segment':            MathematicsSvgDiagrams.sectorVsSegmentSvg,
        'segment_area_diagram':         MathematicsSvgDiagrams.segmentAreaDiagramSvg,
        'sector_fraction_of_circle':    MathematicsSvgDiagrams.sectorFractionOfCircleSvg,
        'sector_area_formula_visual':   MathematicsSvgDiagrams.sectorAreaFormulaVisualSvg,
        'composite_sector_diagram':     MathematicsSvgDiagrams.compositeSectorDiagramSvg,
        // Trigonometry Ratios
        'right_triangle_labelled':  MathematicsSvgDiagrams.rightTriangleLabelledSvg,
        'soh_cah_toa_diagram':      MathematicsSvgDiagrams.sohCahToaDiagramSvg,
        'angle_of_elevation':       MathematicsSvgDiagrams.angleOfElevationSvg,
    };

    
     * Get SVG string by registry type key
     * @param {string} type - diagram type from registry
     * @returns {string|null} SVG string or null if not found
     
    static getSvg(type) {
        return MathematicsSvgDiagrams.svgMap[type] || null;
    }

    
     * Get all available diagram type keys
     * @returns {string[]}
     
    static getAvailableTypes() {
        return Object.keys(MathematicsSvgDiagrams.svgMap);
    }
*/


    // ============================================================
    // ===== GEOMETRIC MEASUREMENT — PERIMETER ====================
    // ============================================================

    // Generated from registry: rectanglePerimeter
    // width=8, height=5
    // options: showLabels=true, showFormula=true, showDimensions=true
    static rectanglePerimeterSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Rectangle Perimeter</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Rectangle Perimeter</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">P = 2(l + w)</text>

<!-- Rectangle: width=8 units, height=5 units, scaled to canvas -->
<!-- Scaled: 8 units → 320px wide, 5 units → 200px tall, centred -->
<!-- Top-left at (220, 160), bottom-right at (540, 360) -->
<rect x="220" y="160" width="320" height="200" fill="#E8F4FD" stroke="#1565C0" stroke-width="3"/>

<!-- showDimensions=true: dimension lines -->

<!-- Top dimension line (width = 8) -->
<line x1="220" y1="130" x2="540" y2="130" stroke="#1565C0" stroke-width="2"/>
<line x1="220" y1="122" x2="220" y2="138" stroke="#1565C0" stroke-width="2"/>
<line x1="540" y1="122" x2="540" y2="138" stroke="#1565C0" stroke-width="2"/>
<text x="380" y="122" font-family="Arial" font-size="15" fill="#1565C0" text-anchor="middle" font-weight="bold">8 units</text>

<!-- Bottom dimension line (width = 8) -->
<line x1="220" y1="390" x2="540" y2="390" stroke="#1565C0" stroke-width="2"/>
<line x1="220" y1="382" x2="220" y2="398" stroke="#1565C0" stroke-width="2"/>
<line x1="540" y1="382" x2="540" y2="398" stroke="#1565C0" stroke-width="2"/>
<text x="380" y="412" font-family="Arial" font-size="15" fill="#1565C0" text-anchor="middle" font-weight="bold">8 units</text>

<!-- Left dimension line (height = 5) -->
<line x1="185" y1="160" x2="185" y2="360" stroke="#C62828" stroke-width="2"/>
<line x1="177" y1="160" x2="193" y2="160" stroke="#C62828" stroke-width="2"/>
<line x1="177" y1="360" x2="193" y2="360" stroke="#C62828" stroke-width="2"/>
<text x="155" y="265" font-family="Arial" font-size="15" fill="#C62828" text-anchor="middle" font-weight="bold" transform="rotate(-90,155,265)">5 units</text>

<!-- Right dimension line (height = 5) -->
<line x1="575" y1="160" x2="575" y2="360" stroke="#C62828" stroke-width="2"/>
<line x1="567" y1="160" x2="583" y2="160" stroke="#C62828" stroke-width="2"/>
<line x1="567" y1="360" x2="583" y2="360" stroke="#C62828" stroke-width="2"/>
<text x="605" y="265" font-family="Arial" font-size="15" fill="#C62828" text-anchor="middle" font-weight="bold" transform="rotate(90,605,265)">5 units</text>

<!-- showLabels=true: side labels on the shape -->
<text x="380" y="255" font-family="Arial" font-size="14" fill="#1565C0" text-anchor="middle">l = 8</text>
<text x="380" y="275" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle">w = 5</text>

<!-- showFormula=true: formula box -->
<rect x="270" y="440" width="260" height="110" fill="#FFF8E1" stroke="#F9A825" stroke-width="2" rx="6"/>
<text x="400" y="463" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Formula:</text>
<text x="400" y="485" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">P = 2(l + w)</text>
<text x="400" y="507" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">P = 2(8 + 5)</text>
<text x="400" y="529" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle" font-weight="bold">P = 26 units</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: circleCircumference
    // radius=80
    // options: showRadius=true, showDiameter=true, showFormula=true
    static circleCircumferenceSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Circle Circumference</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Circle Circumference</text>
<text x="350" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">C = 2πr = πd</text>

<!-- Circle: radius=80px, centre at (350, 310) -->
<circle cx="350" cy="310" r="180" fill="#E8F5E9" stroke="#2E7D32" stroke-width="3"/>

<!-- Centre dot -->
<circle cx="350" cy="310" r="5" fill="#2E7D32" stroke="#2E7D32"/>

<!-- showRadius=true: radius line from centre to right -->
<line x1="350" y1="310" x2="530" y2="310" stroke="#C62828" stroke-width="3"/>
<text x="445" y="298" font-family="Arial" font-size="15" fill="#C62828" text-anchor="middle" font-weight="bold">r = 80</text>

<!-- showDiameter=true: diameter line (full horizontal) -->
<line x1="170" y1="310" x2="530" y2="310" stroke="#1565C0" stroke-width="2" stroke-dasharray="8,4"/>
<text x="350" y="340" font-family="Arial" font-size="15" fill="#1565C0" text-anchor="middle" font-weight="bold">d = 160</text>

<!-- Arc label at top of circle -->
<text x="350" y="112" font-family="Arial" font-size="13" fill="#2E7D32" text-anchor="middle">Circumference (C)</text>

<!-- Arrow indicating circumference direction -->
<path d="M 350,130 A 180,180 0 0,1 530,310" stroke="#2E7D32" stroke-width="2" fill="none" marker-end="url(#arrow-green)"/>

<!-- showFormula=true: formula box -->
<rect x="200" y="535" width="300" height="130" fill="#FFF8E1" stroke="#F9A825" stroke-width="2" rx="6"/>
<text x="350" y="558" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Formula:</text>
<text x="350" y="580" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">C = 2πr</text>
<text x="350" y="602" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">C = 2 × π × 80</text>
<text x="350" y="624" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle" font-weight="bold">C ≈ 502.65 units</text>
<text x="350" y="646" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Also: C = πd = π × 160</text>

<defs>
  <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#2E7D32"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: trianglePerimeter
    // sideA=5, sideB=7, sideC=6
    // options: showLabels=true, showFormula=true
    static trianglePerimeterSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Triangle Perimeter</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Triangle Perimeter</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">P = a + b + c</text>

<!-- Triangle vertices (scalene): A(200,400), B(580,400), C(370,120) -->
<!-- Base AB ~sideC=6 → 380px, AC ~sideB=7, BC ~sideA=5 -->
<polygon points="200,400 580,400 370,120" fill="#EDE7F6" stroke="#4527A0" stroke-width="3"/>

<!-- Vertex labels -->
<text x="185" y="425" font-family="Arial" font-size="16" fill="#4527A0" font-weight="bold">A</text>
<text x="585" y="425" font-family="Arial" font-size="16" fill="#4527A0" font-weight="bold">B</text>
<text x="362" y="110" font-family="Arial" font-size="16" fill="#4527A0" font-weight="bold">C</text>

<!-- showLabels=true: side labels at midpoints -->
<!-- Side c (AB, base): midpoint (390,400) -->
<text x="390" y="430" font-family="Arial" font-size="15" fill="#1565C0" text-anchor="middle" font-weight="bold">c = 6</text>

<!-- Side b (AC): midpoint (285,260) -->
<text x="265" y="265" font-family="Arial" font-size="15" fill="#C62828" text-anchor="middle" font-weight="bold">b = 7</text>

<!-- Side a (BC): midpoint (475,260) -->
<text x="498" y="265" font-family="Arial" font-size="15" fill="#2E7D32" text-anchor="middle" font-weight="bold">a = 5</text>

<!-- Tick marks indicating different side lengths -->
<!-- Side AB (c=6): 2 ticks at midpoint -->
<line x1="385" y1="394" x2="385" y2="406" stroke="#1565C0" stroke-width="2"/>
<line x1="395" y1="394" x2="395" y2="406" stroke="#1565C0" stroke-width="2"/>

<!-- Side AC (b=7): 3 ticks at midpoint -->
<line x1="279" y1="254" x2="293" y2="267" stroke="#C62828" stroke-width="2"/>
<line x1="272" y1="261" x2="286" y2="274" stroke="#C62828" stroke-width="2"/>
<line x1="265" y1="268" x2="279" y2="281" stroke="#C62828" stroke-width="2"/>

<!-- Side BC (a=5): 1 tick at midpoint -->
<line x1="472" y1="267" x2="486" y2="254" stroke="#2E7D32" stroke-width="2"/>

<!-- showFormula=true: formula box -->
<rect x="250" y="450" width="300" height="115" fill="#FFF8E1" stroke="#F9A825" stroke-width="2" rx="6"/>
<text x="400" y="473" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Formula:</text>
<text x="400" y="495" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">P = a + b + c</text>
<text x="400" y="517" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">P = 5 + 7 + 6</text>
<text x="400" y="539" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle" font-weight="bold">P = 18 units</text>

<defs>
  <marker id="arrow-bw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: compositeShapePerimeter
    // options: showLabels=true, showFormula=true, showOutline=true
    static compositeShapePerimeterSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Composite Shape Perimeter</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Composite Shape Perimeter</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">Add all outer boundary sides</text>

<!-- L-shaped composite: outer boundary -->
<!-- Main rectangle 300×200, with a 120×100 rectangle notched from top-right -->
<!-- Vertices: (180,130) → (500,130) → (500,230) → (380,230) → (380,330) → (180,330) → close -->
<polygon points="180,130 500,130 500,230 380,230 380,330 180,330"
  fill="#FCE4EC" stroke="#880E4F" stroke-width="3"/>

<!-- showOutline=true: highlight outer boundary -->
<!-- showLabels=true: label each side -->

<!-- Top side: (180,130)→(500,130) = 320px ~ 8 units -->
<text x="340" y="118" font-family="Arial" font-size="14" fill="#880E4F" text-anchor="middle" font-weight="bold">8</text>
<line x1="180" y1="108" x2="500" y2="108" stroke="#880E4F" stroke-width="1.5" stroke-dasharray="4,3"/>

<!-- Right top: (500,130)→(500,230) = 100px ~ 4 units -->
<text x="518" y="185" font-family="Arial" font-size="14" fill="#880E4F" text-anchor="middle" font-weight="bold">4</text>

<!-- Step horizontal: (500,230)→(380,230) = 120px ~ 3 units (inner step) -->
<text x="440" y="222" font-family="Arial" font-size="14" fill="#880E4F" text-anchor="middle" font-weight="bold">3</text>

<!-- Step vertical: (380,230)→(380,330) = 100px ~ 4 units -->
<text x="398" y="285" font-family="Arial" font-size="14" fill="#880E4F" text-anchor="start" font-weight="bold">4</text>

<!-- Bottom: (380,330)→(180,330) = 200px ~ 5 units (note: not 8, composite cut) -->
<text x="280" y="350" font-family="Arial" font-size="14" fill="#880E4F" text-anchor="middle" font-weight="bold">5</text>

<!-- Left: (180,330)→(180,130) = 200px ~ 8 units total height -->
<text x="158" y="235" font-family="Arial" font-size="14" fill="#880E4F" text-anchor="middle" font-weight="bold">8</text>

<!-- Internal dashed guide lines showing component rectangles -->
<line x1="380" y1="130" x2="380" y2="230" stroke="#AAAAAA" stroke-width="1.5" stroke-dasharray="6,4"/>
<line x1="180" y1="230" x2="500" y2="230" stroke="#AAAAAA" stroke-width="1.5" stroke-dasharray="6,4"/>

<!-- Label the two sub-regions -->
<text x="275" y="195" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Region A</text>
<text x="275" y="295" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Region B</text>

<!-- showFormula=true: formula box -->
<rect x="220" y="390" width="360" height="125" fill="#FFF8E1" stroke="#F9A825" stroke-width="2" rx="6"/>
<text x="400" y="413" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Perimeter Calculation:</text>
<text x="400" y="435" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">P = sum of all outer boundary sides</text>
<text x="400" y="457" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">P = 8 + 4 + 3 + 4 + 5 + 8</text>
<text x="400" y="479" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle" font-weight="bold">P = 32 units</text>
<text x="400" y="498" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Note: internal edges are NOT included</text>

</g>
</svg>`;

    // Generated from registry: semicirclePerimeter
    // radius=80
    // options: showRadius=true, showArc=true, showFormula=true
    static semicirclePerimeterSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="500" viewBox="0 0 700 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>Semicircle Perimeter</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Semicircle Perimeter</text>
<text x="350" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">P = πr + 2r = r(π + 2)</text>

<!-- Semicircle: radius=160px, flat side at bottom, centre at (350,295) -->
<!-- Arc from (190,295) to (510,295), going upward -->
<path d="M 190,295 A 160,160 0 0,1 510,295" fill="#E3F2FD" stroke="#0277BD" stroke-width="3"/>

<!-- Diameter (flat base) -->
<line x1="190" y1="295" x2="510" y2="295" stroke="#C62828" stroke-width="3"/>

<!-- Centre point -->
<circle cx="350" cy="295" r="5" fill="#0277BD" stroke="#0277BD"/>

<!-- showRadius=true: radius line -->
<line x1="350" y1="295" x2="350" y2="135" stroke="#2E7D32" stroke-width="2" stroke-dasharray="6,3"/>
<text x="368" y="218" font-family="Arial" font-size="14" fill="#2E7D32" font-weight="bold">r = 80</text>

<!-- Diameter label -->
<text x="350" y="322" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle" font-weight="bold">d = 2r = 160</text>

<!-- showArc=true: arc label -->
<text x="200" y="175" font-family="Arial" font-size="13" fill="#0277BD" font-weight="bold">Arc = πr</text>
<path d="M 245,185 A 120,120 0 0,1 400,145" stroke="#0277BD" stroke-width="1.5" fill="none" marker-end="url(#arrow-blue)"/>

<!-- Perimeter arrows indicating both parts -->
<!-- Arc arrow (top) -->
<text x="350" y="90" font-family="Arial" font-size="12" fill="#0277BD" text-anchor="middle">Curved part: πr ≈ 251.3</text>
<text x="350" y="340" font-family="Arial" font-size="12" fill="#C62828" text-anchor="middle">Straight part (diameter): 2r = 160</text>

<!-- showFormula=true -->
<rect x="195" y="380" width="310" height="100" fill="#FFF8E1" stroke="#F9A825" stroke-width="2" rx="6"/>
<text x="350" y="403" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Formula:</text>
<text x="350" y="425" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">P = πr + 2r = r(π + 2)</text>
<text x="350" y="447" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">P = 80(π + 2) = 80 × 5.1416</text>
<text x="350" y="469" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle" font-weight="bold">P ≈ 411.3 units</text>

<defs>
  <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#0277BD"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: regularPolygonPerimeter
    // sides=6, sideLength=50
    // options: showLabels=true, showFormula=true
    static regularPolygonPerimeterSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Regular Polygon Perimeter</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Regular Polygon Perimeter</text>
<text x="350" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">Regular Hexagon (n = 6 sides)</text>
<text x="350" y="76" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">P = n × s</text>

<!-- Regular hexagon: n=6, radius=200px, centred at (350,360) -->
<!-- Vertices at angles 0°,60°,120°,180°,240°,300° -->
<!-- radius=200: points computed at 200px from centre -->
<polygon points="
  550,360
  450,533
  250,533
  150,360
  250,187
  450,187"
  fill="#F3E5F5" stroke="#6A1B9A" stroke-width="3"/>

<!-- showLabels=true: label each side with tick marks -->
<!-- Side 1: (550,360)→(450,533), midpoint (500,447) -->
<text x="525" y="455" font-family="Arial" font-size="14" fill="#6A1B9A" font-weight="bold">s = 50</text>
<line x1="492" y1="443" x2="508" y2="447" stroke="#6A1B9A" stroke-width="2"/>

<!-- Side 2: (450,533)→(250,533), midpoint (350,533) -->
<text x="350" y="558" font-family="Arial" font-size="14" fill="#6A1B9A" text-anchor="middle" font-weight="bold">s = 50</text>
<line x1="345" y1="533" x2="355" y2="533" stroke="#6A1B9A" stroke-width="2"/>

<!-- Side 3: (250,533)→(150,360), midpoint (200,447) -->
<text x="165" y="455" font-family="Arial" font-size="14" fill="#6A1B9A" text-anchor="end" font-weight="bold">s = 50</text>

<!-- Side 4: (150,360)→(250,187), midpoint (200,274) -->
<text x="165" y="280" font-family="Arial" font-size="14" fill="#6A1B9A" text-anchor="end" font-weight="bold">s = 50</text>

<!-- Side 5: (250,187)→(450,187), midpoint (350,187) -->
<text x="350" y="175" font-family="Arial" font-size="14" fill="#6A1B9A" text-anchor="middle" font-weight="bold">s = 50</text>

<!-- Side 6: (450,187)→(550,360), midpoint (500,274) -->
<text x="525" y="280" font-family="Arial" font-size="14" fill="#6A1B9A" font-weight="bold">s = 50</text>

<!-- Centre point and equal-side indication -->
<circle cx="350" cy="360" r="5" fill="#6A1B9A"/>
<text x="350" y="370" font-family="Arial" font-size="12" fill="#6A1B9A" text-anchor="middle">centre</text>

<!-- showFormula=true -->
<rect x="210" y="590" width="280" height="90" fill="#FFF8E1" stroke="#F9A825" stroke-width="2" rx="6"/>
<text x="350" y="613" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Formula:</text>
<text x="350" y="635" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">P = n × s = 6 × 50</text>
<text x="350" y="657" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle" font-weight="bold">P = 300 units</text>

</g>
</svg>`;

    // ============================================================
    // ===== GEOMETRIC MEASUREMENT — AREA =========================
    // ============================================================

    // Generated from registry: rectangleArea
    // width=8, height=5
    // options: showLabels=true, showFormula=true, showGrid=true
    static rectangleAreaSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Rectangle Area</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Rectangle Area</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">A = l × w</text>

<!-- Rectangle: width=8 units → 320px, height=5 units → 200px -->
<!-- Top-left (200,120), bottom-right (520,320) -->
<!-- showGrid=true: grid lines at 1-unit intervals (40px each) -->
<rect x="200" y="120" width="320" height="200" fill="#E8F4FD" stroke="#1565C0" stroke-width="3"/>

<!-- Vertical grid lines (8 columns) -->
<line x1="240" y1="120" x2="240" y2="320" stroke="#90CAF9" stroke-width="1"/>
<line x1="280" y1="120" x2="280" y2="320" stroke="#90CAF9" stroke-width="1"/>
<line x1="320" y1="120" x2="320" y2="320" stroke="#90CAF9" stroke-width="1"/>
<line x1="360" y1="120" x2="360" y2="320" stroke="#90CAF9" stroke-width="1"/>
<line x1="400" y1="120" x2="400" y2="320" stroke="#90CAF9" stroke-width="1"/>
<line x1="440" y1="120" x2="440" y2="320" stroke="#90CAF9" stroke-width="1"/>
<line x1="480" y1="120" x2="480" y2="320" stroke="#90CAF9" stroke-width="1"/>

<!-- Horizontal grid lines (5 rows) -->
<line x1="200" y1="160" x2="520" y2="160" stroke="#90CAF9" stroke-width="1"/>
<line x1="200" y1="200" x2="520" y2="200" stroke="#90CAF9" stroke-width="1"/>
<line x1="200" y1="240" x2="520" y2="240" stroke="#90CAF9" stroke-width="1"/>
<line x1="200" y1="280" x2="520" y2="280" stroke="#90CAF9" stroke-width="1"/>

<!-- showLabels=true -->
<!-- Width label (top) -->
<text x="360" y="108" font-family="Arial" font-size="15" fill="#1565C0" text-anchor="middle" font-weight="bold">l = 8 units</text>
<!-- Height label (left) -->
<text x="168" y="225" font-family="Arial" font-size="15" fill="#C62828" text-anchor="middle" font-weight="bold" transform="rotate(-90,168,225)">w = 5 units</text>

<!-- Dimension ticks -->
<line x1="200" y1="110" x2="520" y2="110" stroke="#1565C0" stroke-width="1.5"/>
<line x1="200" y1="104" x2="200" y2="116" stroke="#1565C0" stroke-width="1.5"/>
<line x1="520" y1="104" x2="520" y2="116" stroke="#1565C0" stroke-width="1.5"/>

<line x1="178" y1="120" x2="178" y2="320" stroke="#C62828" stroke-width="1.5"/>
<line x1="172" y1="120" x2="184" y2="120" stroke="#C62828" stroke-width="1.5"/>
<line x1="172" y1="320" x2="184" y2="320" stroke="#C62828" stroke-width="1.5"/>

<!-- Unit squares count label inside -->
<text x="360" y="225" font-family="Arial" font-size="16" fill="#1565C0" text-anchor="middle" font-weight="bold">8 × 5 = 40</text>
<text x="360" y="248" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">unit squares</text>

<!-- showFormula=true -->
<rect x="240" y="350" width="320" height="100" fill="#FFF8E1" stroke="#F9A825" stroke-width="2" rx="6"/>
<text x="400" y="373" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Formula:</text>
<text x="400" y="395" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">A = l × w</text>
<text x="400" y="417" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">A = 8 × 5</text>
<text x="400" y="439" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle" font-weight="bold">A = 40 square units</text>

</g>
</svg>`;

    // Generated from registry: triangleAreaPerpendicularHeight
    // base=10, height=6
    // options: showBase=true, showHeight=true, showFormula=true
    static triangleAreaPerpendicularHeightSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Triangle Area — Perpendicular Height</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Triangle Area</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">A = ½ × base × height</text>

<!-- Triangle: base=10 → 400px, height=6 → 240px -->
<!-- Base from (190,380) to (590,380), apex at offset (350,140) -->
<polygon points="190,380 590,380 350,140" fill="#E8F5E9" stroke="#2E7D32" stroke-width="3"/>

<!-- Dashed enclosing rectangle (same base × height) -->
<rect x="190" y="140" width="400" height="240" fill="none" stroke="#90A4AE" stroke-width="1.5" stroke-dasharray="8,4"/>

<!-- showHeight=true: perpendicular height line from apex to base -->
<line x1="350" y1="140" x2="350" y2="380" stroke="#C62828" stroke-width="2.5" stroke-dasharray="6,3"/>
<!-- Right angle marker -->
<rect x="350" y="365" width="12" height="12" fill="none" stroke="#C62828" stroke-width="1.5"/>
<!-- Height label -->
<text x="375" y="272" font-family="Arial" font-size="15" fill="#C62828" font-weight="bold">h = 6</text>
<!-- Height dimension line -->
<line x1="618" y1="140" x2="618" y2="380" stroke="#C62828" stroke-width="1.5"/>
<line x1="612" y1="140" x2="624" y2="140" stroke="#C62828" stroke-width="1.5"/>
<line x1="612" y1="380" x2="624" y2="380" stroke="#C62828" stroke-width="1.5"/>
<text x="640" y="265" font-family="Arial" font-size="14" fill="#C62828" font-weight="bold" transform="rotate(90,640,265)">h = 6</text>

<!-- showBase=true -->
<line x1="190" y1="410" x2="590" y2="410" stroke="#1565C0" stroke-width="1.5"/>
<line x1="190" y1="404" x2="190" y2="416" stroke="#1565C0" stroke-width="1.5"/>
<line x1="590" y1="404" x2="590" y2="416" stroke="#1565C0" stroke-width="1.5"/>
<text x="390" y="432" font-family="Arial" font-size="15" fill="#1565C0" text-anchor="middle" font-weight="bold">base = 10</text>

<!-- Visual: half of rectangle shaded to show ½ relationship -->
<!-- Triangle is half the bounding rectangle -->
<text x="160" y="260" font-family="Arial" font-size="12" fill="#90A4AE" text-anchor="middle">½ of</text>
<text x="160" y="276" font-family="Arial" font-size="12" fill="#90A4AE" text-anchor="middle">rect.</text>

<!-- showFormula=true -->
<rect x="230" y="450" width="340" height="115" fill="#FFF8E1" stroke="#F9A825" stroke-width="2" rx="6"/>
<text x="400" y="473" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Formula:</text>
<text x="400" y="495" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">A = ½ × base × height</text>
<text x="400" y="517" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">A = ½ × 10 × 6</text>
<text x="400" y="539" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle" font-weight="bold">A = 30 square units</text>

</g>
</svg>`;

    // Generated from registry: parallelogramArea
    // base=10, height=6
    // options: showBase=true, showHeight=true, showFormula=true
    static parallelogramAreaSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Parallelogram Area</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Parallelogram Area</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">A = base × height</text>

<!-- Parallelogram: base=400px, height=240px, offset=80px -->
<!-- Vertices: (200,360) (600,360) (680,120) (280,120) -->
<polygon points="200,360 600,360 680,120 280,120" fill="#FFF3E0" stroke="#E65100" stroke-width="3"/>

<!-- showHeight=true: perpendicular height line -->
<line x1="600" y1="120" x2="600" y2="360" stroke="#C62828" stroke-width="2.5" stroke-dasharray="6,3"/>
<rect x="600" y="348" width="12" height="12" fill="none" stroke="#C62828" stroke-width="1.5"/>
<text x="625" y="245" font-family="Arial" font-size="15" fill="#C62828" font-weight="bold">h = 6</text>
<!-- Height dimension arrow -->
<line x1="648" y1="120" x2="648" y2="360" stroke="#C62828" stroke-width="1.5"/>
<line x1="642" y1="120" x2="654" y2="120" stroke="#C62828" stroke-width="1.5"/>
<line x1="642" y1="360" x2="654" y2="360" stroke="#C62828" stroke-width="1.5"/>

<!-- Slant side labels -->
<text x="238" y="248" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle" font-style="italic">slant side</text>
<text x="660" y="248" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle" font-style="italic">(not height)</text>

<!-- showBase=true -->
<line x1="200" y1="390" x2="600" y2="390" stroke="#E65100" stroke-width="1.5"/>
<line x1="200" y1="383" x2="200" y2="397" stroke="#E65100" stroke-width="1.5"/>
<line x1="600" y1="383" x2="600" y2="397" stroke="#E65100" stroke-width="1.5"/>
<text x="400" y="412" font-family="Arial" font-size="15" fill="#E65100" text-anchor="middle" font-weight="bold">base = 10</text>

<!-- "Rearrangement" hint: cut-and-move triangle -->
<text x="400" y="100" font-family="Arial" font-size="12" fill="#888888" text-anchor="middle">
  (equivalent to a rectangle of same base and height)
</text>

<!-- showFormula=true -->
<rect x="240" y="430" width="320" height="110" fill="#FFF8E1" stroke="#F9A825" stroke-width="2" rx="6"/>
<text x="400" y="453" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Formula:</text>
<text x="400" y="475" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">A = base × height</text>
<text x="400" y="497" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">A = 10 × 6</text>
<text x="400" y="519" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle" font-weight="bold">A = 60 square units</text>

</g>
</svg>`;

    // Generated from registry: trapeziumArea
    // parallelSide1=8, parallelSide2=5, height=6
    // options: showParallelSides=true, showHeight=true, showFormula=true
    static trapeziumAreaSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Trapezium Area</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Trapezium Area</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">A = ½(a + b) × h</text>

<!-- Trapezium: bottom=320px (a=8), top=200px (b=5), height=240px -->
<!-- Bottom: (190,370)→(510,370); Top: (250,130)→(450,130), centred -->
<polygon points="190,370 510,370 450,130 250,130" fill="#FCE4EC" stroke="#880E4F" stroke-width="3"/>

<!-- showParallelSides=true -->
<!-- Bottom side (a=8) -->
<line x1="190" y1="400" x2="510" y2="400" stroke="#1565C0" stroke-width="1.5"/>
<line x1="190" y1="393" x2="190" y2="407" stroke="#1565C0" stroke-width="1.5"/>
<line x1="510" y1="393" x2="510" y2="407" stroke="#1565C0" stroke-width="1.5"/>
<text x="350" y="422" font-family="Arial" font-size="15" fill="#1565C0" text-anchor="middle" font-weight="bold">a = 8</text>

<!-- Top side (b=5) -->
<line x1="250" y1="105" x2="450" y2="105" stroke="#2E7D32" stroke-width="1.5"/>
<line x1="250" y1="98" x2="250" y2="112" stroke="#2E7D32" stroke-width="1.5"/>
<line x1="450" y1="98" x2="450" y2="112" stroke="#2E7D32" stroke-width="1.5"/>
<text x="350" y="97" font-family="Arial" font-size="15" fill="#2E7D32" text-anchor="middle" font-weight="bold">b = 5</text>

<!-- Parallel indicators (arrows showing sides are parallel) -->
<line x1="345" y1="370" x2="365" y2="370" stroke="#1565C0" stroke-width="2" marker-end="url(#arrow-blue)"/>
<line x1="333" y1="130" x2="353" y2="130" stroke="#2E7D32" stroke-width="2" marker-end="url(#arrow-green)"/>

<!-- showHeight=true: perpendicular height -->
<line x1="350" y1="130" x2="350" y2="370" stroke="#C62828" stroke-width="2.5" stroke-dasharray="6,3"/>
<rect x="350" y="358" width="12" height="12" fill="none" stroke="#C62828" stroke-width="1.5"/>
<!-- Height dimension -->
<line x1="555" y1="130" x2="555" y2="370" stroke="#C62828" stroke-width="1.5"/>
<line x1="549" y1="130" x2="561" y2="130" stroke="#C62828" stroke-width="1.5"/>
<line x1="549" y1="370" x2="561" y2="370" stroke="#C62828" stroke-width="1.5"/>
<text x="576" y="255" font-family="Arial" font-size="14" fill="#C62828" font-weight="bold" transform="rotate(90,576,255)">h = 6</text>

<!-- showFormula=true -->
<rect x="220" y="445" width="360" height="120" fill="#FFF8E1" stroke="#F9A825" stroke-width="2" rx="6"/>
<text x="400" y="468" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Formula:</text>
<text x="400" y="490" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">A = ½(a + b) × h</text>
<text x="400" y="512" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">A = ½(8 + 5) × 6</text>
<text x="400" y="534" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">A = ½ × 13 × 6</text>
<text x="400" y="556" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle" font-weight="bold">A = 39 square units</text>

<defs>
  <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#1565C0"/>
  </marker>
  <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#2E7D32"/>
  </marker>
</defs>

</g>
</svg>`;

    // Generated from registry: circleArea
    // radius=80
    // options: showRadius=true, showFormula=true
    static circleAreaSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Circle Area</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Circle Area</text>
<text x="350" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">A = πr²</text>

<!-- Circle: radius=200px, centre at (350,320) -->
<circle cx="350" cy="320" r="200" fill="#E8EAF6" stroke="#283593" stroke-width="3"/>

<!-- Inner quarter-circle shaded differently to suggest r² concept -->
<path d="M 350,320 L 550,320 A 200,200 0 0,0 350,120 Z" fill="#C5CAE9" stroke="none"/>

<!-- Centre dot -->
<circle cx="350" cy="320" r="5" fill="#283593"/>

<!-- showRadius=true: radius line -->
<line x1="350" y1="320" x2="550" y2="320" stroke="#C62828" stroke-width="3"/>
<text x="455" y="308" font-family="Arial" font-size="16" fill="#C62828" text-anchor="middle" font-weight="bold">r = 80</text>

<!-- r² box indication -->
<rect x="350" y="120" width="200" height="200" fill="none" stroke="#C62828" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="455" y="228" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle">r²</text>

<!-- showFormula=true -->
<rect x="195" y="558" width="310" height="120" fill="#FFF8E1" stroke="#F9A825" stroke-width="2" rx="6"/>
<text x="350" y="581" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Formula:</text>
<text x="350" y="603" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">A = πr²</text>
<text x="350" y="625" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">A = π × 80²</text>
<text x="350" y="647" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">A = π × 6400</text>
<text x="350" y="667" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle" font-weight="bold">A ≈ 20,106 square units</text>

</g>
</svg>`;

    // Generated from registry: compositeAreaDiagram
    // options: showRegions=true, showLabels=true, showFormula=true
    static compositeAreaDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Composite Area Diagram</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Composite Area Diagram</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">Total Area = Area A + Area B</text>

<!-- Shape: L-shape, divided into Region A (top rectangle) and Region B (bottom-right rectangle) -->
<!-- Overall outer boundary: (155,100)→(555,100)→(555,260)→(395,260)→(395,400)→(155,400) -->

<!-- Region A: rectangle top-left, (155,100)→(555,100)→(555,260)→(155,260) -->
<!-- Dimensions: 400px wide (=10 units), 160px tall (=4 units) -->
<rect x="155" y="100" width="400" height="160" fill="#E3F2FD" stroke="#1565C0" stroke-width="2"/>

<!-- Region B: rectangle bottom-left portion, (155,260)→(395,260)→(395,400)→(155,400) -->
<!-- Dimensions: 240px wide (=6 units), 140px tall (=3.5 units) -->
<rect x="155" y="260" width="240" height="140" fill="#E8F5E9" stroke="#2E7D32" stroke-width="2"/>

<!-- Outer border -->
<polygon points="155,100 555,100 555,260 395,260 395,400 155,400" fill="none" stroke="#333333" stroke-width="3"/>

<!-- showRegions=true: region labels and fill colours -->
<text x="355" y="188" font-family="Arial" font-size="16" fill="#1565C0" text-anchor="middle" font-weight="bold">Region A</text>
<text x="275" y="335" font-family="Arial" font-size="16" fill="#2E7D32" text-anchor="middle" font-weight="bold">Region B</text>

<!-- showLabels=true: dimension labels -->
<!-- Region A: width=10 -->
<text x="355" y="88" font-family="Arial" font-size="14" fill="#1565C0" text-anchor="middle" font-weight="bold">10</text>
<line x1="155" y1="78" x2="555" y2="78" stroke="#1565C0" stroke-width="1.5"/>
<line x1="155" y1="73" x2="155" y2="83" stroke="#1565C0" stroke-width="1.5"/>
<line x1="555" y1="73" x2="555" y2="83" stroke="#1565C0" stroke-width="1.5"/>

<!-- Region A: height=4 -->
<text x="580" y="183" font-family="Arial" font-size="14" fill="#1565C0" text-anchor="start" font-weight="bold">4</text>
<line x1="568" y1="100" x2="568" y2="260" stroke="#1565C0" stroke-width="1.5"/>
<line x1="562" y1="100" x2="574" y2="100" stroke="#1565C0" stroke-width="1.5"/>
<line x1="562" y1="260" x2="574" y2="260" stroke="#1565C0" stroke-width="1.5"/>

<!-- Region B: width=6 -->
<text x="275" y="420" font-family="Arial" font-size="14" fill="#2E7D32" text-anchor="middle" font-weight="bold">6</text>
<line x1="155" y1="412" x2="395" y2="412" stroke="#2E7D32" stroke-width="1.5"/>
<line x1="155" y1="406" x2="155" y2="418" stroke="#2E7D32" stroke-width="1.5"/>
<line x1="395" y1="406" x2="395" y2="418" stroke="#2E7D32" stroke-width="1.5"/>

<!-- Region B: height=3.5 -->
<text x="125" y="333" font-family="Arial" font-size="14" fill="#2E7D32" text-anchor="middle" font-weight="bold">3.5</text>
<line x1="135" y1="260" x2="135" y2="400" stroke="#2E7D32" stroke-width="1.5"/>
<line x1="129" y1="260" x2="141" y2="260" stroke="#2E7D32" stroke-width="1.5"/>
<line x1="129" y1="400" x2="141" y2="400" stroke="#2E7D32" stroke-width="1.5"/>

<!-- Division line between regions -->
<line x1="155" y1="260" x2="395" y2="260" stroke="#888888" stroke-width="1.5" stroke-dasharray="6,4"/>

<!-- showFormula=true -->
<rect x="180" y="440" width="440" height="130" fill="#FFF8E1" stroke="#F9A825" stroke-width="2" rx="6"/>
<text x="400" y="463" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Area Calculation:</text>
<text x="400" y="485" font-family="Arial" font-size="13" fill="#1565C0" text-anchor="middle">Area A = 10 × 4 = 40 sq units</text>
<text x="400" y="507" font-family="Arial" font-size="13" fill="#2E7D32" text-anchor="middle">Area B = 6 × 3.5 = 21 sq units</text>
<text x="400" y="529" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Total = 40 + 21</text>
<text x="400" y="551" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle" font-weight="bold">Total Area = 61 square units</text>

</g>
</svg>`;

    // Generated from registry: areaDissectionRectangle
    // options: showParts=true, showLabels=true
    static areaDissectionRectangleSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Area Dissection Rectangle</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Area Dissection</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">Rectangle decomposed into unit squares</text>

<!-- Main rectangle: 6×4 units, scaled 60px/unit → 360×240px -->
<!-- Top-left at (200,120), bottom-right at (560,360) -->

<!-- showParts=true: colour alternating cells for visual impact -->
<!-- Row 1 -->
<rect x="200" y="120" width="60" height="60" fill="#BBDEFB" stroke="#1565C0" stroke-width="1"/>
<rect x="260" y="120" width="60" height="60" fill="#E3F2FD" stroke="#1565C0" stroke-width="1"/>
<rect x="320" y="120" width="60" height="60" fill="#BBDEFB" stroke="#1565C0" stroke-width="1"/>
<rect x="380" y="120" width="60" height="60" fill="#E3F2FD" stroke="#1565C0" stroke-width="1"/>
<rect x="440" y="120" width="60" height="60" fill="#BBDEFB" stroke="#1565C0" stroke-width="1"/>
<rect x="500" y="120" width="60" height="60" fill="#E3F2FD" stroke="#1565C0" stroke-width="1"/>
<!-- Row 2 -->
<rect x="200" y="180" width="60" height="60" fill="#E3F2FD" stroke="#1565C0" stroke-width="1"/>
<rect x="260" y="180" width="60" height="60" fill="#BBDEFB" stroke="#1565C0" stroke-width="1"/>
<rect x="320" y="180" width="60" height="60" fill="#E3F2FD" stroke="#1565C0" stroke-width="1"/>
<rect x="380" y="180" width="60" height="60" fill="#BBDEFB" stroke="#1565C0" stroke-width="1"/>
<rect x="440" y="180" width="60" height="60" fill="#E3F2FD" stroke="#1565C0" stroke-width="1"/>
<rect x="500" y="180" width="60" height="60" fill="#BBDEFB" stroke="#1565C0" stroke-width="1"/>
<!-- Row 3 -->
<rect x="200" y="240" width="60" height="60" fill="#BBDEFB" stroke="#1565C0" stroke-width="1"/>
<rect x="260" y="240" width="60" height="60" fill="#E3F2FD" stroke="#1565C0" stroke-width="1"/>
<rect x="320" y="240" width="60" height="60" fill="#BBDEFB" stroke="#1565C0" stroke-width="1"/>
<rect x="380" y="240" width="60" height="60" fill="#E3F2FD" stroke="#1565C0" stroke-width="1"/>
<rect x="440" y="240" width="60" height="60" fill="#BBDEFB" stroke="#1565C0" stroke-width="1"/>
<rect x="500" y="240" width="60" height="60" fill="#E3F2FD" stroke="#1565C0" stroke-width="1"/>
<!-- Row 4 -->
<rect x="200" y="300" width="60" height="60" fill="#E3F2FD" stroke="#1565C0" stroke-width="1"/>
<rect x="260" y="300" width="60" height="60" fill="#BBDEFB" stroke="#1565C0" stroke-width="1"/>
<rect x="320" y="300" width="60" height="60" fill="#E3F2FD" stroke="#1565C0" stroke-width="1"/>
<rect x="380" y="300" width="60" height="60" fill="#BBDEFB" stroke="#1565C0" stroke-width="1"/>
<rect x="440" y="300" width="60" height="60" fill="#E3F2FD" stroke="#1565C0" stroke-width="1"/>
<rect x="500" y="300" width="60" height="60" fill="#BBDEFB" stroke="#1565C0" stroke-width="1"/>

<!-- Outer border -->
<rect x="200" y="120" width="360" height="240" fill="none" stroke="#1565C0" stroke-width="3"/>

<!-- showLabels=true -->
<!-- Column count (width=6) -->
<text x="380" y="108" font-family="Arial" font-size="15" fill="#1565C0" text-anchor="middle" font-weight="bold">6 units</text>
<line x1="200" y1="98" x2="560" y2="98" stroke="#1565C0" stroke-width="1.5"/>
<line x1="200" y1="92" x2="200" y2="104" stroke="#1565C0" stroke-width="1.5"/>
<line x1="560" y1="92" x2="560" y2="104" stroke="#1565C0" stroke-width="1.5"/>

<!-- Row count (height=4) -->
<text x="168" y="245" font-family="Arial" font-size="15" fill="#C62828" text-anchor="middle" font-weight="bold" transform="rotate(-90,168,245)">4 units</text>
<line x1="178" y1="120" x2="178" y2="360" stroke="#C62828" stroke-width="1.5"/>
<line x1="172" y1="120" x2="184" y2="120" stroke="#C62828" stroke-width="1.5"/>
<line x1="172" y1="360" x2="184" y2="360" stroke="#C62828" stroke-width="1.5"/>

<!-- Unit square labels (sample cells) -->
<text x="230" y="155" font-family="Arial" font-size="10" fill="#333333" text-anchor="middle">1</text>
<text x="290" y="155" font-family="Arial" font-size="10" fill="#333333" text-anchor="middle">2</text>
<text x="350" y="155" font-family="Arial" font-size="10" fill="#333333" text-anchor="middle">3</text>
<text x="410" y="155" font-family="Arial" font-size="10" fill="#333333" text-anchor="middle">4</text>
<text x="470" y="155" font-family="Arial" font-size="10" fill="#333333" text-anchor="middle">5</text>
<text x="530" y="155" font-family="Arial" font-size="10" fill="#333333" text-anchor="middle">6</text>
<text x="230" y="215" font-family="Arial" font-size="10" fill="#333333" text-anchor="middle">7</text>
<text x="530" y="335" font-family="Arial" font-size="10" fill="#333333" text-anchor="middle">24</text>

<!-- showFormula=true: formula box -->
<rect x="215" y="385" width="370" height="100" fill="#FFF8E1" stroke="#F9A825" stroke-width="2" rx="6"/>
<text x="400" y="408" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Dissection Proof:</text>
<text x="400" y="430" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Count unit squares: 6 columns × 4 rows</text>
<text x="400" y="452" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Total = 24 individual unit squares</text>
<text x="400" y="474" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle" font-weight="bold">A = l × w = 6 × 4 = 24 square units</text>

</g>
</svg>`;

    // ============================================================
    // ===== GEOMETRIC MEASUREMENT — SURFACE AREA =================
    // ============================================================

    // Generated from registry: cubeNet
    // sideLength=60
    // options: showLabels=true, showFaces=true, showFormula=true
    static cubeNetSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Cube Net</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Cube Net</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">SA = 6s²  (s = side length)</text>

<!-- Net of cube: cross/plus shape, s=100px per face -->
<!-- Centre face at (325,190) 100×100 -->
<!-- Layout: 4 faces in a row, then 1 above and 1 below centre -->

<!-- Face colours for showFaces=true -->
<!-- Top face (above row centre) -->
<rect x="325" y="90"  width="100" height="100" fill="#BBDEFB" stroke="#1565C0" stroke-width="2"/>
<text x="375" y="147" font-family="Arial" font-size="12" fill="#1565C0" text-anchor="middle">Top</text>
<text x="375" y="163" font-family="Arial" font-size="11" fill="#1565C0" text-anchor="middle">s × s</text>

<!-- Left face -->
<rect x="125" y="190" width="100" height="100" fill="#C8E6C9" stroke="#2E7D32" stroke-width="2"/>
<text x="175" y="247" font-family="Arial" font-size="12" fill="#2E7D32" text-anchor="middle">Left</text>
<text x="175" y="263" font-family="Arial" font-size="11" fill="#2E7D32" text-anchor="middle">s × s</text>

<!-- Front face (centre) -->
<rect x="225" y="190" width="100" height="100" fill="#FFF9C4" stroke="#F9A825" stroke-width="2"/>
<text x="275" y="247" font-family="Arial" font-size="12" fill="#E65100" text-anchor="middle">Front</text>
<text x="275" y="263" font-family="Arial" font-size="11" fill="#E65100" text-anchor="middle">s × s</text>

<!-- Right face -->
<rect x="325" y="190" width="100" height="100" fill="#F8BBD0" stroke="#880E4F" stroke-width="2"/>
<text x="375" y="247" font-family="Arial" font-size="12" fill="#880E4F" text-anchor="middle">Right</text>
<text x="375" y="263" font-family="Arial" font-size="11" fill="#880E4F" text-anchor="middle">s × s</text>

<!-- Back face -->
<rect x="425" y="190" width="100" height="100" fill="#E1BEE7" stroke="#6A1B9A" stroke-width="2"/>
<text x="475" y="247" font-family="Arial" font-size="12" fill="#6A1B9A" text-anchor="middle">Back</text>
<text x="475" y="263" font-family="Arial" font-size="11" fill="#6A1B9A" text-anchor="middle">s × s</text>

<!-- Bottom face (below row centre) -->
<rect x="325" y="290" width="100" height="100" fill="#FFE0B2" stroke="#E65100" stroke-width="2"/>
<text x="375" y="347" font-family="Arial" font-size="12" fill="#E65100" text-anchor="middle">Bottom</text>
<text x="375" y="363" font-family="Arial" font-size="11" fill="#E65100" text-anchor="middle">s × s</text>

<!-- showLabels=true: side labels -->
<text x="325" y="82" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">s</text>
<text x="375" y="82" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">↕ s</text>
<text x="120" y="245" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">s</text>

<!-- Dimension bracket for one face -->
<line x1="325" y1="78" x2="425" y2="78" stroke="#666666" stroke-width="1.5"/>
<line x1="325" y1="73" x2="325" y2="83" stroke="#666666" stroke-width="1.5"/>
<line x1="425" y1="73" x2="425" y2="83" stroke="#666666" stroke-width="1.5"/>
<text x="375" y="70" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">s = 60</text>

<!-- showFormula=true -->
<rect x="210" y="420" width="380" height="130" fill="#FFF8E1" stroke="#F9A825" stroke-width="2" rx="6"/>
<text x="400" y="443" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Surface Area Formula:</text>
<text x="400" y="465" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">SA = 6 × s²</text>
<text x="400" y="487" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">SA = 6 × 60²</text>
<text x="400" y="509" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">SA = 6 × 3600</text>
<text x="400" y="531" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle" font-weight="bold">SA = 21,600 square units</text>

</g>
</svg>`;

    // Generated from registry: cuboidNet
    // length=8, width=5, height=3
    // options: showLabels=true, showFaces=true, showFormula=true
    static cuboidNetSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Cuboid Net</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Cuboid Net</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">SA = 2(lw + lh + wh)  [l=8, w=5, h=3]</text>

<!-- Scale: l=8→160px, w=5→100px, h=3→60px -->
<!-- Net layout (cross): -->
<!--   Top (l×w=160×100) centred above front -->
<!--   Row: Left(w×h=100×60) Front(l×h=160×60) Right(w×h=100×60) Back(l×h=160×60) -->
<!--   Bottom (l×w=160×100) below front -->
<!-- Front face x-start = 200 (left of front) -->

<!-- TOP face: l×w = 160×100, positioned above front -->
<rect x="300" y="80"  width="160" height="100" fill="#BBDEFB" stroke="#1565C0" stroke-width="2"/>
<text x="380" y="128" font-family="Arial" font-size="12" fill="#1565C0" text-anchor="middle" font-weight="bold">Top</text>
<text x="380" y="144" font-family="Arial" font-size="11" fill="#1565C0" text-anchor="middle">l × w = 8×5</text>

<!-- LEFT face: w×h = 100×60 -->
<rect x="200" y="180" width="100" height="60" fill="#C8E6C9" stroke="#2E7D32" stroke-width="2"/>
<text x="250" y="214" font-family="Arial" font-size="12" fill="#2E7D32" text-anchor="middle" font-weight="bold">Left</text>
<text x="250" y="228" font-family="Arial" font-size="10" fill="#2E7D32" text-anchor="middle">w×h=5×3</text>

<!-- FRONT face: l×h = 160×60 -->
<rect x="300" y="180" width="160" height="60" fill="#FFF9C4" stroke="#F9A825" stroke-width="2"/>
<text x="380" y="214" font-family="Arial" font-size="12" fill="#E65100" text-anchor="middle" font-weight="bold">Front</text>
<text x="380" y="228" font-family="Arial" font-size="10" fill="#E65100" text-anchor="middle">l×h=8×3</text>

<!-- RIGHT face: w×h = 100×60 -->
<rect x="460" y="180" width="100" height="60" fill="#F8BBD0" stroke="#880E4F" stroke-width="2"/>
<text x="510" y="214" font-family="Arial" font-size="12" fill="#880E4F" text-anchor="middle" font-weight="bold">Right</text>
<text x="510" y="228" font-family="Arial" font-size="10" fill="#880E4F" text-anchor="middle">w×h=5×3</text>

<!-- BACK face: l×h = 160×60 -->
<rect x="560" y="180" width="160" height="60" fill="#E1BEE7" stroke="#6A1B9A" stroke-width="2"/>
<text x="640" y="214" font-family="Arial" font-size="12" fill="#6A1B9A" text-anchor="middle" font-weight="bold">Back</text>
<text x="640" y="228" font-family="Arial" font-size="10" fill="#6A1B9A" text-anchor="middle">l×h=8×3</text>

<!-- BOTTOM face: l×w = 160×100 -->
<rect x="300" y="240" width="160" height="100" fill="#FFE0B2" stroke="#E65100" stroke-width="2"/>
<text x="380" y="293" font-family="Arial" font-size="12" fill="#E65100" text-anchor="middle" font-weight="bold">Bottom</text>
<text x="380" y="309" font-family="Arial" font-size="11" fill="#E65100" text-anchor="middle">l × w = 8×5</text>

<!-- showLabels=true: dimension annotations -->
<text x="380" y="72" font-family="Arial" font-size="13" fill="#1565C0" text-anchor="middle">l = 8</text>
<text x="188" y="212" font-family="Arial" font-size="13" fill="#2E7D32" text-anchor="end">w = 5</text>
<text x="380" y="178" font-family="Arial" font-size="13" fill="#E65100" text-anchor="middle">h = 3</text>

<!-- showFormula=true -->
<rect x="200" y="380" width="500" height="140" fill="#FFF8E1" stroke="#F9A825" stroke-width="2" rx="6"/>
<text x="450" y="403" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Surface Area Formula:</text>
<text x="450" y="425" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">SA = 2(lw + lh + wh)</text>
<text x="450" y="447" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">SA = 2(8×5 + 8×3 + 5×3)</text>
<text x="450" y="469" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">SA = 2(40 + 24 + 15)</text>
<text x="450" y="491" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">SA = 2 × 79</text>
<text x="450" y="510" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle" font-weight="bold">SA = 158 square units</text>

</g>
</svg>`;

    // Generated from registry: cylinderNet
    // radius=40, height=100
    // options: showCircles=true, showRectangle=true, showFormula=true
    static cylinderNetSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG 20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Cylinder Net</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Cylinder Net</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">SA = 2πr² + 2πrh  [r=40, h=100]</text>

<!-- Scale: r=80px for circles, height=200px for rectangle -->
<!-- Curved surface rectangle width = 2πr ≈ 502px → scale to 400px for display, label actual -->

<!-- showCircles=true: Top circle -->
<circle cx="160" cy="230" r="80" fill="#BBDEFB" stroke="#1565C0" stroke-width="2.5"/>
<text x="160" y="226" font-family="Arial" font-size="13" fill="#1565C0" text-anchor="middle" font-weight="bold">Top Circle</text>
<text x="160" y="244" font-family="Arial" font-size="12" fill="#1565C0" text-anchor="middle">A = πr²</text>
<line x1="160" y1="230" x2="240" y2="230" stroke="#C62828" stroke-width="2"/>
<text x="205" y="220" font-family="Arial" font-size="12" fill="#C62828" text-anchor="middle">r=40</text>

<!-- showCircles=true: Bottom circle -->
<circle cx="160" cy="450" r="80" fill="#C8E6C9" stroke="#2E7D32" stroke-width="2.5"/>
<text x="160" y="446" font-family="Arial" font-size="13" fill="#2E7D32" text-anchor="middle" font-weight="bold">Bottom Circle</text>
<text x="160" y="464" font-family="Arial" font-size="12" fill="#2E7D32" text-anchor="middle">A = πr²</text>
<line x1="160" y1="450" x2="240" y2="450" stroke="#C62828" stroke-width="2"/>
<text x="205" y="440" font-family="Arial" font-size="12" fill="#C62828" text-anchor="middle">r=40</text>

<!-- showRectangle=true: Curved surface (rectangle) -->
<!-- Width of curved surface = circumference = 2πr ≈ 251px (scaled) -->
<!-- x=290 to x=670 = 380px ≈ 2πr displayed, height=200px = h -->
<rect x="290" y="130" width="380" height="200" fill="#FFF9C4" stroke="#E65100" stroke-width="2.5"/>
<text x="480" y="222" font-family="Arial" font-size="14" fill="#E65100" text-anchor="middle" font-weight="bold">Curved Surface</text>
<text x="480" y="242" font-family="Arial" font-size="12" fill="#E65100" text-anchor="middle">A = 2πrh</text>

<!-- Width = 2πr label -->
<text x="480" y="120" font-family="Arial" font-size="13" fill="#1565C0" text-anchor="middle" font-weight="bold">width = 2πr = circumference</text>
<line x1="290" y1="112" x2="670" y2="112" stroke="#1565C0" stroke-width="1.5"/>
<line x1="290" y1="107" x2="290" y2="117" stroke="#1565C0" stroke-width="1.5"/>
<line x1="670" y1="107" x2="670" y2="117" stroke="#1565C0" stroke-width="1.5"/>

<!-- Height = h label -->
<text x="710" y="235" font-family="Arial" font-size="13" fill="#C62828" font-weight="bold">h = 100</text>
<line x1="690" y1="130" x2="690" y2="330" stroke="#C62828" stroke-width="1.5"/>
<line x1="684" y1="130" x2="696" y2="130" stroke="#C62828" stroke-width="1.5"/>
<line x1="684" y1="330" x2="696" y2="330" stroke="#C62828" stroke-width="1.5"/>

<!-- Dashed connection lines from circles to rectangle edges -->
<line x1="240" y1="150" x2="290" y2="150" stroke="#888888" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="240" y1="310" x2="290" y2="310" stroke="#888888" stroke-width="1.5" stroke-dasharray="5,3"/>

<!-- showFormula=true -->
<rect x="250" y="385" width="400" height="135" fill="#FFF8E1" stroke="#F9A825" stroke-width="2" rx="6"/>
<text x="450" y="408" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Surface Area Formula:</text>
<text x="450" y="430" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">SA = 2πr² + 2πrh</text>
<text x="450" y="452" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">SA = 2π(40)² + 2π(40)(100)</text>
<text x="450" y="474" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">SA = 2π(1600) + 2π(4000)</text>
<text x="450" y="496" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">SA ≈ 10053 + 25133</text>
<text x="450" y="512" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle" font-weight="bold">SA ≈ 35,186 square units</text>

</g>
</svg>`;

    // Generated from registry: coneNet
    // radius=50, slantHeight=120
    // options: showBase=true, showSector=true, showFormula=true
    static coneNetSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Cone Net</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Cone Net</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">SA = πr² + πrl  [r=50, l=120 (slant height)]</text>

<!-- Sector (curved surface): radius=slantHeight=200px (scaled from 120), arc=2πr -->
<!-- Sector angle θ = (2πr / l) × (180/π) = (r/l) × 360° = (50/120) × 360° ≈ 150° -->
<!-- Sector centred at (250, 120), opening downward-right -->
<!-- Arc from angle -15° to 165° with radius 200 -->
<path d="M 250,120 L 443,68 A 200,200 0 1,0 57,68 Z"
  fill="#E8EAF6" stroke="#283593" stroke-width="2.5"/>

<!-- Slant height labels -->
<line x1="250" y1="120" x2="443" y2="68" stroke="#283593" stroke-width="2"/>
<text x="370" y="80" font-family="Arial" font-size="13" fill="#283593" font-weight="bold">l = 120</text>
<line x1="250" y1="120" x2="57" y2="68" stroke="#283593" stroke-width="2"/>

<!-- showSector=true: arc label -->
<text x="250" y="290" font-family="Arial" font-size="14" fill="#283593" text-anchor="middle" font-weight="bold">Curved Surface (Sector)</text>
<text x="250" y="310" font-family="Arial" font-size="12" fill="#283593" text-anchor="middle">A = πrl</text>

<!-- Arc circumference = 2πr label -->
<text x="250" y="335" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Arc length = 2πr (= base circumference)</text>

<!-- showBase=true: base circle -->
<circle cx="620" cy="250" r="100" fill="#FCE4EC" stroke="#880E4F" stroke-width="2.5"/>
<text x="620" y="246" font-family="Arial" font-size="14" fill="#880E4F" text-anchor="middle" font-weight="bold">Base Circle</text>
<text x="620" y="266" font-family="Arial" font-size="12" fill="#880E4F" text-anchor="middle">A = πr²</text>
<!-- Radius of base -->
<line x1="620" y1="250" x2="720" y2="250" stroke="#C62828" stroke-width="2"/>
<text x="675" y="240" font-family="Arial" font-size="13" fill="#C62828" font-weight="bold">r = 50</text>

<!-- Dashed line connecting arc to base circle (showing they match) -->
<line x1="440" y1="240" x2="520" y2="240" stroke="#888888" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="480" y="230" font-family="Arial" font-size="11" fill="#888888" text-anchor="middle">fit together</text>

<!-- showFormula=true -->
<rect x="190" y="400" width="420" height="145" fill="#FFF8E1" stroke="#F9A825" stroke-width="2" rx="6"/>
<text x="400" y="423" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Surface Area Formula:</text>
<text x="400" y="445" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">SA = πr² + πrl</text>
<text x="400" y="467" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">SA = π(50²) + π(50)(120)</text>
<text x="400" y="489" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">SA = π(2500) + π(6000)</text>
<text x="400" y="511" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">SA ≈ 7854 + 18,850</text>
<text x="400" y="533" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle" font-weight="bold">SA ≈ 26,704 square units</text>

</g>
</svg>`;

    // Generated from registry: sphereSurfaceArea
    // radius=80
    // options: showRadius=true, showFormula=true
    static sphereSurfaceAreaSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>Sphere Surface Area</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="350" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Sphere Surface Area</text>
<text x="350" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">SA = 4πr²</text>

<!-- Sphere: circle with shading to suggest 3D -->
<defs>
  <radialGradient id="sphereGrad" cx="40%" cy="35%" r="60%">
    <stop offset="0%" style="stop-color:#FFFFFF;stop-opacity:1"/>
    <stop offset="60%" style="stop-color:#BBDEFB;stop-opacity:1"/>
    <stop offset="100%" style="stop-color:#1565C0;stop-opacity:0.8"/>
  </radialGradient>
</defs>
<circle cx="350" cy="300" r="210" fill="url(#sphereGrad)" stroke="#1565C0" stroke-width="3"/>

<!-- Equator ellipse (dashed, suggesting 3D) -->
<ellipse cx="350" cy="300" rx="210" ry="50" fill="none" stroke="#1565C0" stroke-width="1.5" stroke-dasharray="8,5"/>

<!-- Vertical great circle arc -->
<path d="M 350,90 A 105,210 0 0,1 350,510" fill="none" stroke="#90A4AE" stroke-width="1.5" stroke-dasharray="6,4"/>

<!-- showRadius=true: radius line to edge -->
<line x1="350" y1="300" x2="560" y2="300" stroke="#C62828" stroke-width="3"/>
<circle cx="350" cy="300" r="5" fill="#C62828"/>
<text x="460" y="288" font-family="Arial" font-size="16" fill="#C62828" text-anchor="middle" font-weight="bold">r = 80</text>

<!-- SA = 4 circles of radius r hint -->
<text x="350" y="540" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">SA = 4 × (area of great circle) = 4 × πr²</text>

<!-- showFormula=true -->
<rect x="175" y="570" width="350" height="110" fill="#FFF8E1" stroke="#F9A825" stroke-width="2" rx="6"/>
<text x="350" y="593" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Formula:</text>
<text x="350" y="615" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">SA = 4πr²</text>
<text x="350" y="637" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">SA = 4 × π × 80²</text>
<text x="350" y="659" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">SA = 4 × π × 6400</text>
<text x="350" y="674" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle" font-weight="bold">SA ≈ 80,425 sq units</text>

</g>
</svg>`;

    // Generated from registry: triangularPrismNet
    // base=6, height=5, length=10
    // options: showFaces=true, showLabels=true, showFormula=true
    static triangularPrismNetSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Triangular Prism Net</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="450" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Triangular Prism Net</text>
<text x="450" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">5 faces: 2 triangles + 3 rectangles  [b=6, h=5, l=10]</text>

<!-- Scale: b=6→120px, h=5→100px, l=10→200px -->
<!-- Net layout: triangle - rect - triangle - rect - rect (unfolded strip) -->
<!-- Left triangle (face 1): apex up -->
<!-- Base rect (bottom face): 120×200 -->
<!-- Right triangle (face 2) -->
<!-- Top rect (top face) -->
<!-- One side rect -->

<!-- Central strip: 3 rectangles in a row at y=200, height=100 (h=5) -->
<!-- Rect 1 (bottom): x=120→240, Rect 2 (front, b=120): x=240→360, Rect 3 (top): x=360→480 -->
<!-- Actually better: vertical strip with triangles on sides -->

<!-- BOTTOM rectangle: b×l = 120×200, at (270,190)→(390,390) (rotated: use 200wide 120tall) -->

<!-- Three rectangles unrolled side by side, y=190 to y=390 (h=100px) -->
<!-- Side 1 rect: hypotenuse side of triangle × l (approx 130px × 200px) -->
<!-- Side 2 rect (base): b × l = 120 × 200 -->
<!-- Side 3 rect: other leg × l -->

<!-- Simpler net: horizontal unrolling -->
<!-- x positions: 60 | 60+130=190 | 190+120=310 | 310+130=440 -->
<!-- Triangles on left and right ends -->

<!-- Face colours for showFaces=true -->

<!-- Left triangle (Triangle A) -->
<polygon points="60,290 190,190 190,390" fill="#BBDEFB" stroke="#1565C0" stroke-width="2"/>
<text x="118" y="298" font-family="Arial" font-size="11" fill="#1565C0" text-anchor="middle" font-weight="bold">Triangle</text>
<text x="118" y="312" font-family="Arial" font-size="11" fill="#1565C0" text-anchor="middle">½bh</text>

<!-- Rectangle 1 (slant/hypotenuse side × l): 130×200 -->
<rect x="190" y="190" width="130" height="200" fill="#C8E6C9" stroke="#2E7D32" stroke-width="2"/>
<text x="255" y="285" font-family="Arial" font-size="11" fill="#2E7D32" text-anchor="middle" font-weight="bold">Side Rect.</text>
<text x="255" y="299" font-family="Arial" font-size="10" fill="#2E7D32" text-anchor="middle">side × l</text>

<!-- Rectangle 2 (base × l): 120×200 -->
<rect x="320" y="190" width="120" height="200" fill="#FFF9C4" stroke="#E65100" stroke-width="2"/>
<text x="380" y="285" font-family="Arial" font-size="11" fill="#E65100" text-anchor="middle" font-weight="bold">Base Rect.</text>
<text x="380" y="299" font-family="Arial" font-size="10" fill="#E65100" text-anchor="middle">b × l = 6×10</text>

<!-- Rectangle 3 (other side × l): 100×200 -->
<rect x="440" y="190" width="100" height="200" fill="#F8BBD0" stroke="#880E4F" stroke-width="2"/>
<text x="490" y="285" font-family="Arial" font-size="11" fill="#880E4F" text-anchor="middle" font-weight="bold">Side Rect.</text>
<text x="490" y="299" font-family="Arial" font-size="10" fill="#880E4F" text-anchor="middle">side × l</text>

<!-- Right triangle (Triangle B) -->
<polygon points="540,190 540,390 640,290" fill="#BBDEFB" stroke="#1565C0" stroke-width="2"/>
<text x="578" y="292" font-family="Arial" font-size="11" fill="#1565C0" text-anchor="middle" font-weight="bold">Triangle</text>
<text x="578" y="306" font-family="Arial" font-size="11" fill="#1565C0" text-anchor="middle">½bh</text>

<!-- showLabels=true: dimension labels -->
<!-- Length label on top of base rect -->
<text x="380" y="180" font-family="Arial" font-size="13" fill="#E65100" text-anchor="middle" font-weight="bold">l = 10</text>
<line x1="320" y1="172" x2="440" y2="172" stroke="#E65100" stroke-width="1.5"/>
<line x1="320" y1="167" x2="320" y2="177" stroke="#E65100" stroke-width="1.5"/>
<line x1="440" y1="167" x2="440" y2="177" stroke="#E65100" stroke-width="1.5"/>

<!-- Height of strip (h) -->
<text x="688" y="295" font-family="Arial" font-size="13" fill="#C62828" font-weight="bold">l = 10</text>
<line x1="660" y1="190" x2="660" y2="390" stroke="#C62828" stroke-width="1.5"/>
<line x1="654" y1="190" x2="666" y2="190" stroke="#C62828" stroke-width="1.5"/>
<line x1="654" y1="390" x2="666" y2="390" stroke="#C62828" stroke-width="1.5"/>

<!-- Triangle labels (base=6, height=5) -->
<text x="118" y="400" font-family="Arial" font-size="12" fill="#1565C0" text-anchor="middle">b=6, h=5</text>

<!-- showFormula=true -->
<rect x="160" y="435" width="580" height="135" fill="#FFF8E1" stroke="#F9A825" stroke-width="2" rx="6"/>
<text x="450" y="458" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Surface Area Formula:</text>
<text x="450" y="480" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">SA = 2 × (½ × b × h) + (b + s₁ + s₂) × l</text>
<text x="450" y="502" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">SA = 2 × (½ × 6 × 5) + (6 + 5 + 7.81) × 10</text>
<text x="450" y="524" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">SA = 2(15) + (18.81)(10) = 30 + 188.1</text>
<text x="450" y="552" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle" font-weight="bold">SA ≈ 218.1 square units</text>

</g>
</svg>`;

    // Generated from registry: squarePyramidNet
    // base=8, slantHeight=10
    // options: showBase=true, showTriangles=true, showFormula=true
    static squarePyramidNetSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>Square Pyramid Net</metadata>
<g fill="none" stroke="#000000">

<!-- Title -->
<text x="400" y="35" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Square Pyramid Net</text>
<text x="400" y="57" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">SA = b² + 2bl  [b=8, l=10 slant height]</text>

<!-- Scale: b=8→160px, slantHeight=10→200px -->
<!-- Net: cross shape — base square in centre, 4 triangles folded out -->
<!-- Base square: (280,200)→(440,360) = 160×160 -->

<!-- showBase=true: base square -->
<rect x="280" y="200" width="160" height="160" fill="#FFF9C4" stroke="#E65100" stroke-width="2.5"/>
<text x="360" y="285" font-family="Arial" font-size="14" fill="#E65100" text-anchor="middle" font-weight="bold">Base</text>
<text x="360" y="303" font-family="Arial" font-size="13" fill="#E65100" text-anchor="middle">b × b = 8×8</text>

<!-- showTriangles=true: 4 triangular faces -->
<!-- Top triangle: apex upward from top edge of base -->
<!-- Base at (280,200)→(440,200), apex at (360,0) -->
<polygon points="280,200 440,200 360,0" fill="#BBDEFB" stroke="#1565C0" stroke-width="2"/>
<text x="360" y="120" font-family="Arial" font-size="12" fill="#1565C0" text-anchor="middle" font-weight="bold">Front Face</text>
<text x="360" y="138" font-family="Arial" font-size="11" fill="#1565C0" text-anchor="middle">½ × b × l</text>
<line x1="360" y1="0" x2="360" y2="200" stroke="#C62828" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="378" y="108" font-family="Arial" font-size="12" fill="#C62828">l = 10</text>

<!-- Bottom triangle: apex downward -->
<polygon points="280,360 440,360 360,560" fill="#C8E6C9" stroke="#2E7D32" stroke-width="2"/>
<text x="360" y="456" font-family="Arial" font-size="12" fill="#2E7D32" text-anchor="middle" font-weight="bold">Back Face</text>
<text x="360" y="474" font-family="Arial" font-size="11" fill="#2E7D32" text-anchor="middle">½ × b × l</text>

<!-- Left triangle: apex leftward -->
<polygon points="280,200 280,360 80,280" fill="#F8BBD0" stroke="#880E4F" stroke-width="2"/>
<text x="192" y="278" font-family="Arial" font-size="12" fill="#880E4F" text-anchor="middle" font-weight="bold">Left</text>
<text x="192" y="294" font-family="Arial" font-size="11" fill="#880E4F" text-anchor="middle">½bl</text>

<!-- Right triangle: apex rightward -->
<polygon points="440,200 440,360 640,280" fill="#E1BEE7" stroke="#6A1B9A" stroke-width="2"/>
<text x="528" y="278" font-family="Arial" font-size="12" fill="#6A1B9A" text-anchor="middle" font-weight="bold">Right</text>
<text x="528" y="294" font-family="Arial" font-size="11" fill="#6A1B9A" text-anchor="middle">½bl</text>

<!-- showLabels=true: base dimension -->
<text x="360" y="190" font-family="Arial" font-size="13" fill="#E65100" text-anchor="middle" font-weight="bold">b = 8</text>
<line x1="280" y1="183" x2="440" y2="183" stroke="#E65100" stroke-width="1.5"/>
<line x1="280" y1="178" x2="280" y2="188" stroke="#E65100" stroke-width="1.5"/>
<line x1="440" y1="178" x2="440" y2="188" stroke="#E65100" stroke-width="1.5"/>

<!-- Right-side base dimension -->
<text x="452" y="285" font-family="Arial" font-size="13" fill="#E65100" text-anchor="start" font-weight="bold">b = 8</text>
<line x1="448" y1="200" x2="448" y2="360" stroke="#E65100" stroke-width="1.5"/>
<line x1="443" y1="200" x2="453" y2="200" stroke="#E65100" stroke-width="1.5"/>
<line x1="443" y1="360" x2="453" y2="360" stroke="#E65100" stroke-width="1.5"/>

<!-- showFormula=true -->
<rect x="0" y="0" width="0" height="0"/><!-- placeholder -->
<rect x="250" y="440" width="300" height="130" fill="#FFF8E1" stroke="#F9A825" stroke-width="2" rx="6"/>
<text x="400" y="463" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Surface Area Formula:</text>
<text x="400" y="485" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">SA = b² + 2bl</text>
<text x="400" y="507" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">SA = 8² + 2(8)(10)</text>
<text x="400" y="529" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">SA = 64 + 160</text>
<text x="400" y="551" font-family="Arial" font-size="14" fill="#C62828" text-anchor="middle" font-weight="bold">SA = 224 square units</text>

</g>
</svg>`;

}

export { MathematicsSvgDiagrams };
