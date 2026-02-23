import { PhysicsDiagramsRegistry } from './physicsregistry.js';

class PhysicsSvgDiagrams {

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
