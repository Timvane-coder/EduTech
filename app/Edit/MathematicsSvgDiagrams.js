class MathematicsSvgDiagrams {

  // ─── 1. UNIT CIRCLE ───────────────────────────────────────────────────────
  // Shows the full unit circle with:
  //   • x/y axes with tick marks
  //   • the circle itself (r = 1)
  //   • 16 standard angles (every 30° and 45°) as radial spokes
  //   • (cos θ, sin θ) coordinate labels at each spoke tip
  //   • radian label (e.g. π/3) along each spoke
  //   • a sample reference triangle in Q1 showing x=cos θ, y=sin θ
  //   • quadrant sign labels (+/−) for sin and cos
  static unitCircleSixteenAnglesCoordinatesRadiansDegreesDiagram = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 500 500">

  <!-- Title -->
  <text x="130" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Unit Circle — Standard Angles, Coordinates &amp; Radians</text>

  <!-- ── Axes ── (centre 250,260, scale 160px = 1 unit) -->
  <!-- x-axis -->
  <line x1="60" y1="260" x2="440" y2="260" stroke="#000" stroke-width="2.5"/>
  <polygon points="436,255 448,260 436,265" fill="#000"/>
  <text x="452" y="264" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">x</text>
  <!-- y-axis -->
  <line x1="250" y1="450" x2="250" y2="70" stroke="#000" stroke-width="2.5"/>
  <polygon points="245,74 250,62 255,74" fill="#000"/>
  <text x="254" y="60" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">y</text>

  <!-- Axis tick marks & unit labels -->
  <!-- x = 1 -->
  <line x1="410" y1="256" x2="410" y2="264" stroke="#000" stroke-width="2"/>
  <text x="406" y="278" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <!-- x = -1 -->
  <line x1="90" y1="256" x2="90" y2="264" stroke="#000" stroke-width="2"/>
  <text x="82" y="278" font-family="Georgia,serif" font-size="11" fill="#000">−1</text>
  <!-- y = 1 -->
  <line x1="246" y1="100" x2="254" y2="100" stroke="#000" stroke-width="2"/>
  <text x="256" y="104" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <!-- y = -1 -->
  <line x1="246" y1="420" x2="254" y2="420" stroke="#000" stroke-width="2"/>
  <text x="256" y="424" font-family="Georgia,serif" font-size="11" fill="#000">−1</text>

  <!-- ── Unit circle ── -->
  <circle cx="250" cy="260" r="160" fill="none" stroke="#000" stroke-width="3"/>

  <!-- ── Radial spokes + coordinate labels ──
       Scale: cx=250, cy=260, r=160
       For each angle θ (standard, CCW from positive x):
         tip = (250 + 160·cos θ, 260 − 160·sin θ)
       Angles: 0°,30°,45°,60°,90°,120°,135°,150°,180°,210°,225°,240°,270°,300°,315°,330°
  -->

  <!-- 0° / 0 →  (410, 260) -->
  <line x1="250" y1="260" x2="410" y2="260" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="415" y="255" font-family="Georgia,serif" font-size="9" fill="#000">0 / 2π</text>
  <text x="415" y="267" font-family="Georgia,serif" font-size="8.5" fill="#333">(1, 0)</text>

  <!-- 30° / π/6 → (250+138.6, 260−80) = (388.6, 180) -->
  <line x1="250" y1="260" x2="389" y2="180" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="394" y="175" font-family="Georgia,serif" font-size="9" fill="#000">π/6  30°</text>
  <text x="394" y="186" font-family="Georgia,serif" font-size="8.5" fill="#333">(√3/2, ½)</text>

  <!-- 45° / π/4 → (250+113.1, 260−113.1) = (363.1, 146.9) -->
  <line x1="250" y1="260" x2="363" y2="147" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="366" y="142" font-family="Georgia,serif" font-size="9" fill="#000">π/4  45°</text>
  <text x="366" y="153" font-family="Georgia,serif" font-size="8.5" fill="#333">(√2/2, √2/2)</text>

  <!-- 60° / π/3 → (250+80, 260−138.6) = (330, 121.4) -->
  <line x1="250" y1="260" x2="330" y2="121" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="332" y="116" font-family="Georgia,serif" font-size="9" fill="#000">π/3  60°</text>
  <text x="332" y="127" font-family="Georgia,serif" font-size="8.5" fill="#333">(½, √3/2)</text>

  <!-- 90° / π/2 → (250, 260−160) = (250, 100) -->
  <line x1="250" y1="260" x2="250" y2="100" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="254" y="92" font-family="Georgia,serif" font-size="9" fill="#000">π/2  90°</text>

  <!-- 120° / 2π/3 → (250−80, 260−138.6) = (170, 121.4) -->
  <line x1="250" y1="260" x2="170" y2="121" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="66" y="116" font-family="Georgia,serif" font-size="9" fill="#000">2π/3  120°</text>
  <text x="56" y="127" font-family="Georgia,serif" font-size="8.5" fill="#333">(−½, √3/2)</text>

  <!-- 135° / 3π/4 → (250−113.1, 260−113.1) = (136.9, 146.9) -->
  <line x1="250" y1="260" x2="137" y2="147" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="24" y="142" font-family="Georgia,serif" font-size="9" fill="#000">3π/4  135°</text>
  <text x="14" y="153" font-family="Georgia,serif" font-size="8.5" fill="#333">(−√2/2, √2/2)</text>

  <!-- 150° / 5π/6 → (250−138.6, 260−80) = (111.4, 180) -->
  <line x1="250" y1="260" x2="111" y2="180" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="8" y="175" font-family="Georgia,serif" font-size="9" fill="#000">5π/6  150°</text>
  <text x="6" y="186" font-family="Georgia,serif" font-size="8.5" fill="#333">(−√3/2, ½)</text>

  <!-- 180° / π → (250−160, 260) = (90, 260) -->
  <line x1="250" y1="260" x2="90" y2="260" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="4" y="255" font-family="Georgia,serif" font-size="9" fill="#000">π  180°</text>
  <text x="4" y="267" font-family="Georgia,serif" font-size="8.5" fill="#333">(−1, 0)</text>

  <!-- 210° / 7π/6 → (250−138.6, 260+80) = (111.4, 340) -->
  <line x1="250" y1="260" x2="111" y2="340" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="6" y="337" font-family="Georgia,serif" font-size="9" fill="#000">7π/6  210°</text>
  <text x="4" y="348" font-family="Georgia,serif" font-size="8.5" fill="#333">(−√3/2, −½)</text>

  <!-- 225° / 5π/4 → (250−113.1, 260+113.1) = (136.9, 373.1) -->
  <line x1="250" y1="260" x2="137" y2="373" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="14" y="375" font-family="Georgia,serif" font-size="9" fill="#000">5π/4  225°</text>
  <text x="10" y="386" font-family="Georgia,serif" font-size="8.5" fill="#333">(−√2/2, −√2/2)</text>

  <!-- 240° / 4π/3 → (250−80, 260+138.6) = (170, 398.6) -->
  <line x1="250" y1="260" x2="170" y2="399" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="64" y="412" font-family="Georgia,serif" font-size="9" fill="#000">4π/3  240°</text>
  <text x="52" y="423" font-family="Georgia,serif" font-size="8.5" fill="#333">(−½, −√3/2)</text>

  <!-- 270° / 3π/2 → (250, 260+160) = (250, 420) -->
  <line x1="250" y1="260" x2="250" y2="420" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="255" y="444" font-family="Georgia,serif" font-size="9" fill="#000">3π/2  270°</text>

  <!-- 300° / 5π/3 → (250+80, 260+138.6) = (330, 398.6) -->
  <line x1="250" y1="260" x2="330" y2="399" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="332" y="412" font-family="Georgia,serif" font-size="9" fill="#000">5π/3  300°</text>
  <text x="332" y="423" font-family="Georgia,serif" font-size="8.5" fill="#333">(½, −√3/2)</text>

  <!-- 315° / 7π/4 → (250+113.1, 260+113.1) = (363.1, 373.1) -->
  <line x1="250" y1="260" x2="363" y2="373" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="366" y="372" font-family="Georgia,serif" font-size="9" fill="#000">7π/4  315°</text>
  <text x="366" y="383" font-family="Georgia,serif" font-size="8.5" fill="#333">(√2/2, −√2/2)</text>

  <!-- 330° / 11π/6 → (250+138.6, 260+80) = (388.6, 340) -->
  <line x1="250" y1="260" x2="389" y2="340" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="392" y="337" font-family="Georgia,serif" font-size="9" fill="#000">11π/6  330°</text>
  <text x="392" y="348" font-family="Georgia,serif" font-size="8.5" fill="#333">(√3/2, −½)</text>

  <!-- ── Sample reference triangle at 60° ── -->
  <!-- Hypotenuse already drawn as spoke above -->
  <!-- Horizontal leg: (250,260) to (330,260) -->
  <line x1="250" y1="260" x2="330" y2="260" stroke="#000" stroke-width="2.5"/>
  <!-- Vertical leg: (330,260) to (330,121) -->
  <line x1="330" y1="260" x2="330" y2="121" stroke="#000" stroke-width="2.5"/>
  <!-- right-angle box -->
  <rect x="320" y="250" width="10" height="10" fill="none" stroke="#000" stroke-width="1.8"/>
  <!-- x = cos 60° label -->
  <text x="270" y="278" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">cos θ</text>
  <!-- y = sin 60° label -->
  <text x="334" y="195" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">sin θ</text>
  <!-- Arc for θ -->
  <path d="M 278,260 A 28,28 0 0,0 264,231" fill="none" stroke="#000" stroke-width="2"/>
  <text x="280" y="247" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">θ</text>
  <!-- dot at tip of triangle -->
  <circle cx="330" cy="121" r="4" fill="#000"/>

  <!-- ── Quadrant sign labels ── -->
  <text x="310" y="215" font-family="Georgia,serif" font-size="10" fill="#000">Q I</text>
  <text x="176" y="215" font-family="Georgia,serif" font-size="10" fill="#000">Q II</text>
  <text x="176" y="330" font-family="Georgia,serif" font-size="10" fill="#000">Q III</text>
  <text x="310" y="330" font-family="Georgia,serif" font-size="10" fill="#000">Q IV</text>
  <text x="294" y="228" font-family="Georgia,serif" font-size="8.5" fill="#555">sin+,cos+</text>
  <text x="156" y="228" font-family="Georgia,serif" font-size="8.5" fill="#555">sin+,cos−</text>
  <text x="156" y="318" font-family="Georgia,serif" font-size="8.5" fill="#555">sin−,cos−</text>
  <text x="294" y="318" font-family="Georgia,serif" font-size="8.5" fill="#555">sin−,cos+</text>

  <!-- Origin label -->
  <text x="254" y="274" font-family="Georgia,serif" font-size="10" fill="#000">O</text>
</svg>`;

  // ─── 2. MATRIX MULTIPLICATION ─────────────────────────────────────────────
  // Visualises A (2×3) × B (3×2) = C (2×2) showing:
  //   • colour-coded row/column highlight bands
  //   • dot-product annotation for one result cell
  //   • dimension compatibility rule reminder
  //   • result cell formula breakdown
  static matrixMultiplicationDotProductRowColumnDimensionDiagram = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 520 380">

  <!-- Title -->
  <text x="100" y="22" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Matrix Multiplication  A (2×3) · B (3×2) = C (2×2)</text>
  <text x="140" y="38" font-family="Georgia,serif" font-size="10" fill="#444">Rule: inner dimensions must match · C[i,j] = row i of A · col j of B</text>

  <!-- ════ Matrix A (2 rows × 3 cols) ════ -->
  <!-- Bracket left -->
  <path d="M72,58 L62,58 L62,148 L72,148" fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Bracket right -->
  <path d="M190,58 L200,58 L200,148 L190,148" fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Row 1 highlight band (for c[0,0] = row0·col0) -->
  <rect x="64" y="60" width="134" height="40" rx="3" fill="#d4eaff" fill-opacity="0.6" stroke="none"/>
  <!-- Row 2 -->
  <!-- (no highlight — faded) -->

  <!-- A cell values -->
  <!-- Row 0 -->
  <text x="89" y="86" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#1a5fa8">1</text>
  <text x="127" y="86" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#1a5fa8">2</text>
  <text x="165" y="86" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#1a5fa8">3</text>
  <!-- Row 1 -->
  <text x="89" y="136" font-family="Georgia,serif" font-size="16" fill="#666">4</text>
  <text x="127" y="136" font-family="Georgia,serif" font-size="16" fill="#666">5</text>
  <text x="165" y="136" font-family="Georgia,serif" font-size="16" fill="#666">6</text>

  <!-- Column separators (light) -->
  <line x1="112" y1="62" x2="112" y2="146" stroke="#bbb" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="150" y1="62" x2="150" y2="146" stroke="#bbb" stroke-width="1" stroke-dasharray="3,3"/>
  <!-- Row separator -->
  <line x1="64" y1="103" x2="198" y2="103" stroke="#bbb" stroke-width="1" stroke-dasharray="3,3"/>

  <!-- A label -->
  <text x="115" y="170" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">A</text>
  <text x="108" y="182" font-family="Georgia,serif" font-size="9" fill="#555">(2 × 3)</text>

  <!-- × sign -->
  <text x="210" y="110" font-family="Georgia,serif" font-size="20" font-weight="bold" fill="#000">×</text>

  <!-- ════ Matrix B (3 rows × 2 cols) ════ -->
  <!-- Bracket left -->
  <path d="M228,58 L218,58 L218,198 L228,198" fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Bracket right -->
  <path d="M302,58 L312,58 L312,198 L302,198" fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Col 0 highlight band -->
  <rect x="220" y="60" width="40" height="136" rx="3" fill="#d4eaff" fill-opacity="0.6" stroke="none"/>

  <!-- B cell values -->
  <!-- Row 0 -->
  <text x="232" y="96" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#1a5fa8">7</text>
  <text x="272" y="96" font-family="Georgia,serif" font-size="16" fill="#666">8</text>
  <!-- Row 1 -->
  <text x="232" y="143" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#1a5fa8">9</text>
  <text x="272" y="143" font-family="Georgia,serif" font-size="16" fill="#666">10</text>
  <!-- Row 2 -->
  <text x="227" y="190" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#1a5fa8">11</text>
  <text x="267" y="190" font-family="Georgia,serif" font-size="16" fill="#666">12</text>

  <!-- Col/row separators -->
  <line x1="260" y1="62" x2="260" y2="196" stroke="#bbb" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="222" y1="110" x2="310" y2="110" stroke="#bbb" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="222" y1="157" x2="310" y2="157" stroke="#bbb" stroke-width="1" stroke-dasharray="3,3"/>

  <!-- B label -->
  <text x="255" y="218" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">B</text>
  <text x="248" y="230" font-family="Georgia,serif" font-size="9" fill="#555">(3 × 2)</text>

  <!-- = sign -->
  <text x="322" y="138" font-family="Georgia,serif" font-size="20" font-weight="bold" fill="#000">=</text>

  <!-- ════ Matrix C (2 rows × 2 cols) ════ -->
  <!-- Bracket left -->
  <path d="M346,88 L336,88 L336,168 L346,168" fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Bracket right -->
  <path d="M436,88 L446,88 L446,168 L436,168" fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Highlighted result cell c[0,0] -->
  <rect x="340" y="92" width="46" height="36" rx="4" fill="#1a5fa8" fill-opacity="0.18" stroke="#1a5fa8" stroke-width="2"/>

  <!-- C cell values -->
  <text x="345" y="117" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#1a5fa8">58</text>
  <text x="395" y="117" font-family="Georgia,serif" font-size="15" fill="#666">64</text>
  <text x="345" y="157" font-family="Georgia,serif" font-size="15" fill="#666">139</text>
  <text x="395" y="157" font-family="Georgia,serif" font-size="15" fill="#666">154</text>

  <!-- Separators -->
  <line x1="384" y1="92" x2="384" y2="166" stroke="#bbb" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="338" y1="128" x2="444" y2="128" stroke="#bbb" stroke-width="1" stroke-dasharray="3,3"/>

  <!-- Index labels on C -->
  <text x="350" y="90" font-family="Georgia,serif" font-size="9" fill="#888">i=0,j=0</text>
  <text x="388" y="90" font-family="Georgia,serif" font-size="9" fill="#888">i=0,j=1</text>

  <!-- C label -->
  <text x="383" y="188" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">C</text>
  <text x="376" y="200" font-family="Georgia,serif" font-size="9" fill="#555">(2 × 2)</text>

  <!-- ════ Dot-product annotation for c[0,0] = 58 ════ -->
  <!-- Connecting arrows from highlighted row/col to result cell -->
  <path d="M200,80 C240,80 280,105 338,105" fill="none" stroke="#1a5fa8" stroke-width="1.8" stroke-dasharray="5,3"/>
  <polygon points="334,101 344,105 334,109" fill="#1a5fa8"/>
  <path d="M240,60 C240,50 330,50 358,90" fill="none" stroke="#1a5fa8" stroke-width="1.8" stroke-dasharray="5,3"/>
  <polygon points="354,88 362,97 366,87" fill="#1a5fa8"/>

  <!-- Breakdown box -->
  <rect x="50" y="248" width="420" height="118" rx="6" fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="6,3"/>
  <text x="60" y="268" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">C[0,0] dot-product breakdown (highlighted row 0 of A · col 0 of B):</text>
  <text x="60" y="288" font-family="Georgia,serif" font-size="11" fill="#000">C[0,0] = (1)(7) + (2)(9) + (3)(11)</text>
  <text x="300" y="288" font-family="Georgia,serif" font-size="11" fill="#555">← multiply paired elements, then sum</text>
  <text x="60" y="308" font-family="Georgia,serif" font-size="11" fill="#000">       =  7  +  18  +  33</text>
  <text x="60" y="328" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#1a5fa8">       = 58  ✓</text>
  <text x="60" y="354" font-family="Georgia,serif" font-size="10" fill="#555">Dimension rule: (m×k)·(k×n) → (m×n)  |  Inner dimension k=3 cancels</text>

  <!-- Dimension arrows under matrices -->
  <!-- A rows: m=2 -->
  <line x1="54" y1="60" x2="54" y2="148" stroke="#888" stroke-width="1.5"/>
  <line x1="50" y1="60" x2="58" y2="60" stroke="#888" stroke-width="1.5"/>
  <line x1="50" y1="148" x2="58" y2="148" stroke="#888" stroke-width="1.5"/>
  <text x="30" y="108" font-family="Georgia,serif" font-size="10" fill="#888">m=2</text>
  <!-- A/B shared k=3 -->
  <line x1="62" y1="156" x2="200" y2="156" stroke="#888" stroke-width="1.5"/>
  <line x1="62" y1="152" x2="62" y2="160" stroke="#888" stroke-width="1.5"/>
  <line x1="200" y1="152" x2="200" y2="160" stroke="#888" stroke-width="1.5"/>
  <text x="112" y="170" font-family="Georgia,serif" font-size="10" fill="#888">k=3 (shared)</text>
  <!-- B cols: n=2 -->
  <line x1="218" y1="207" x2="312" y2="207" stroke="#888" stroke-width="1.5"/>
  <line x1="218" y1="203" x2="218" y2="211" stroke="#888" stroke-width="1.5"/>
  <line x1="312" y1="203" x2="312" y2="211" stroke="#888" stroke-width="1.5"/>
  <text x="244" y="222" font-family="Georgia,serif" font-size="10" fill="#888">n=2</text>
</svg>`;

  // ─── 3. LINEAR INEQUALITY GRAPH ───────────────────────────────────────────
  // Shows a 2-variable linear inequality  2x + y ≤ 6  on a coordinate plane:
  //   • boundary line  y = 6 − 2x  (solid, ≤ is inclusive)
  //   • shaded feasible half-plane below the line
  //   • axis labels, tick marks, intercept dots
  //   • test-point verification (origin: 0+0=0 ≤ 6 ✓)
  //   • clear region labels
  static linearInequalityGraphFeasibleRegionBoundaryLineInterceptTestPointDiagram = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 420 420">

  <!-- Title -->
  <text x="60" y="20" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Linear Inequality Graph: 2x + y ≤ 6</text>

  <!-- ── Grid ── (origin at 210,270, scale 50px per unit) -->
  <!-- Vertical grid lines x = -3..5 -->
  <line x1="60" y1="50"  x2="60" y2="360"  stroke="#ddd" stroke-width="1"/>
  <line x1="110" y1="50" x2="110" y2="360" stroke="#ddd" stroke-width="1"/>
  <line x1="160" y1="50" x2="160" y2="360" stroke="#ddd" stroke-width="1"/>
  <line x1="260" y1="50" x2="260" y2="360" stroke="#ddd" stroke-width="1"/>
  <line x1="310" y1="50" x2="310" y2="360" stroke="#ddd" stroke-width="1"/>
  <line x1="360" y1="50" x2="360" y2="360" stroke="#ddd" stroke-width="1"/>
  <!-- Horizontal grid lines y = -2..6 -->
  <line x1="40" y1="370" x2="390" y2="370" stroke="#ddd" stroke-width="1"/>
  <line x1="40" y1="320" x2="390" y2="320" stroke="#ddd" stroke-width="1"/>
  <line x1="40" y1="220" x2="390" y2="220" stroke="#ddd" stroke-width="1"/>
  <line x1="40" y1="170" x2="390" y2="170" stroke="#ddd" stroke-width="1"/>
  <line x1="40" y1="120" x2="390" y2="120" stroke="#ddd" stroke-width="1"/>
  <line x1="40" y1="70"  x2="390" y2="70"  stroke="#ddd" stroke-width="1"/>

  <!-- ── Feasible half-plane shading: 2x+y≤6, i.e. y ≤ 6−2x ──
       Region below the line. Polygon vertices clipped to viewport:
       The boundary line passes through x-intercept (3,0) and y-intercept (0,6).
       In SVG coords: x=3 → px=210+3·50=360, y=0 → py=270;
                      x=0 → px=210,         y=6 → py=270−6·50=−30 (off screen, clip to 50)
       Feasible = below-left of line. Clip polygon:
         Start at top of line (210, 50) [y=6−(0)=6 → slightly off but clip],
         Go right along line to (360, 270) [x=3,y=0],
         Then sweep along the bottom-right region back to cover the visible area.
  -->
  <polygon points="
    210,50
    360,270
    390,270
    390,370
    40,370
    40,50
  " fill="#93c5fd" fill-opacity="0.35" stroke="none"/>

  <!-- ── Boundary line  y = 6 − 2x  (solid, ≤) ──
       At x=0: y=6 → (210, 270−300)=(210,−30) clip to (210,50) checking:
         when py=50, 270−50=220 px-units up, so y=220/50=4.4, x=(6−4.4)/2=0.8 → px=210+0.8·50=250
       At x=3: y=0 → (360, 270)
       Extend both ends slightly beyond viewport for clean look.
       Left end: x= −0.8: y=6+1.6=7.6, py=270−380=−110 → clip to py=50: y_at_py50=(270−50)/50=4.4, x=(6−4.4)/2=0.8 → px=250
       Right end: extrapolate to x=4: y=6−8=−2 → py=270+100=370 → px=410
  -->
  <line x1="250" y1="50" x2="390" y2="320" stroke="#1e40af" stroke-width="3" stroke-linecap="round"/>

  <!-- ── Axes ── -->
  <line x1="40" y1="270" x2="395" y2="270" stroke="#000" stroke-width="2.5"/>
  <polygon points="391,265 403,270 391,275" fill="#000"/>
  <text x="406" y="274" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">x</text>

  <line x1="210" y1="380" x2="210" y2="40" stroke="#000" stroke-width="2.5"/>
  <polygon points="205,44 210,32 215,44" fill="#000"/>
  <text x="214" y="30" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">y</text>

  <!-- Tick marks & labels x-axis -->
  <line x1="110" y1="266" x2="110" y2="274" stroke="#000" stroke-width="2"/>
  <text x="106" y="286" font-family="Georgia,serif" font-size="11" fill="#000">−2</text>
  <line x1="160" y1="266" x2="160" y2="274" stroke="#000" stroke-width="2"/>
  <text x="156" y="286" font-family="Georgia,serif" font-size="11" fill="#000">−1</text>
  <line x1="260" y1="266" x2="260" y2="274" stroke="#000" stroke-width="2"/>
  <text x="258" y="286" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="310" y1="266" x2="310" y2="274" stroke="#000" stroke-width="2"/>
  <text x="308" y="286" font-family="Georgia,serif" font-size="11" fill="#000">2</text>
  <line x1="360" y1="266" x2="360" y2="274" stroke="#000" stroke-width="2"/>
  <text x="358" y="286" font-family="Georgia,serif" font-size="11" fill="#000">3</text>

  <!-- Tick marks & labels y-axis -->
  <line x1="206" y1="320" x2="214" y2="320" stroke="#000" stroke-width="2"/>
  <text x="192" y="324" font-family="Georgia,serif" font-size="11" fill="#000">−1</text>
  <line x1="206" y1="220" x2="214" y2="220" stroke="#000" stroke-width="2"/>
  <text x="198" y="224" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="206" y1="170" x2="214" y2="170" stroke="#000" stroke-width="2"/>
  <text x="198" y="174" font-family="Georgia,serif" font-size="11" fill="#000">2</text>
  <line x1="206" y1="120" x2="214" y2="120" stroke="#000" stroke-width="2"/>
  <text x="198" y="124" font-family="Georgia,serif" font-size="11" fill="#000">3</text>
  <line x1="206" y1="70" x2="214" y2="70" stroke="#000" stroke-width="2"/>
  <text x="198" y="74" font-family="Georgia,serif" font-size="11" fill="#000">4</text>

  <!-- ── Intercept points ── -->
  <!-- x-intercept (3, 0) → px=(360,270) -->
  <circle cx="360" cy="270" r="6" fill="#1e40af"/>
  <text x="364" y="264" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#1e40af">(3, 0)</text>
  <!-- y-intercept (0, 6) → py = 270−300 = −30, off-screen; mark y=4.4 approx at x=0 instead,
       but the true intercept is at y=6 which is above viewport. Label it on the line. -->
  <text x="214" y="48" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#1e40af">y-int (0,6) ↑</text>

  <!-- Line equation label -->
  <text x="270" y="115" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#1e40af">2x + y = 6</text>
  <text x="268" y="128" font-family="Georgia,serif" font-size="10" fill="#1e40af">(boundary, solid = inclusive)</text>

  <!-- ── Test point at origin (0,0) ── -->
  <circle cx="210" cy="270" r="5" fill="#15803d"/>
  <text x="218" y="265" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#15803d">Test point (0,0)</text>
  <text x="218" y="278" font-family="Georgia,serif" font-size="10" fill="#15803d">2(0)+0 = 0 ≤ 6 ✓ → shaded</text>

  <!-- ── Region labels ── -->
  <text x="56" y="340" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#1d4ed8">Feasible Region</text>
  <text x="58" y="354" font-family="Georgia,serif" font-size="10" fill="#1d4ed8">(2x + y ≤ 6)</text>
  <text x="300" y="110" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#666">Non-feasible</text>
  <text x="305" y="124" font-family="Georgia,serif" font-size="10" fill="#666">(2x + y > 6)</text>

  <!-- Arrow from "Non-feasible" to region above line -->
  <line x1="330" y1="127" x2="330" y2="148" stroke="#666" stroke-width="1.5"/>
  <polygon points="326,146 330,156 334,146" fill="#666"/>
</svg>`;

  // ─── 4. PYTHAGOREAN THEOREM ───────────────────────────────────────────────
  // Illustrates the Pythagorean theorem a² + b² = c² with:
  //   • a right triangle with labelled legs a, b and hypotenuse c
  //   • three squares drawn on each side, areas labelled a², b², c²
  //   • right-angle marker
  //   • numeric example: 3-4-5 triangle
  static pythagoreanTheoremSquaresRightTriangleLegHypotenuseDiagram = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 480 460">

  <!-- Title -->
  <text x="90" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Pythagorean Theorem:  a² + b² = c²</text>
  <text x="130" y="38" font-family="Georgia,serif" font-size="10" fill="#444">Illustrated with the 3-4-5 right triangle (scaled)</text>

  <!-- ─── Triangle vertices (scale: 1 unit = 30px)
       Right angle at R=(160,340)
       A (top of vertical leg, a=4): (160,220)
       B (end of horizontal leg, b=3): (250,340)  wait, let's use nicer pixel values:
       R=(150,350), A=(150,230) [a=4*30=120px], B=(240,350) [b=3*30=90px]
       C=hypotenuse connects A to B; c=5*30=150px
  ───  -->

  <!-- Square on leg a (vertical, left of triangle): 120×120 -->
  <!-- Side a goes from R=(150,350) to A=(150,230). Square extends to the left. -->
  <rect x="30" y="230" width="120" height="120" fill="#bfdbfe" fill-opacity="0.6" stroke="#1e40af" stroke-width="2.5"/>
  <text x="64" y="298" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#1e40af">a²</text>
  <text x="52" y="316" font-family="Georgia,serif" font-size="12" fill="#1e40af">= 16 units²</text>

  <!-- Square on leg b (horizontal, below triangle): 90×90 -->
  <!-- Side b goes from R=(150,350) to B=(240,350). Square extends downward. -->
  <rect x="150" y="350" width="90" height="90" fill="#bbf7d0" fill-opacity="0.6" stroke="#15803d" stroke-width="2.5"/>
  <text x="180" y="400" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#15803d">b²</text>
  <text x="160" y="418" font-family="Georgia,serif" font-size="12" fill="#15803d">= 9 units²</text>

  <!-- Square on hypotenuse c (150px, tilted)
       A=(150,230), B=(240,350)
       Direction vector AB = (90, 120), length=150
       Unit vec = (0.6, 0.8); perp (outward right of A→B) = (0.8, -0.6)
       Square vertices: A, B, B+perp*150, A+perp*150
       B+perp*150 = (240+120, 350−90) = (360, 260)
       A+perp*150 = (150+120, 230−90) = (270, 140)
  -->
  <polygon points="150,230 240,350 360,260 270,140"
           fill="#fde68a" fill-opacity="0.55" stroke="#92400e" stroke-width="2.5"/>
  <text x="287" y="242" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#92400e">c²</text>
  <text x="265" y="260" font-family="Georgia,serif" font-size="12" fill="#92400e">= 25 units²</text>

  <!-- ─── Main triangle ─── -->
  <polygon points="150,230 150,350 240,350"
           fill="#f1f5f9" fill-opacity="0.8" stroke="#000" stroke-width="4" stroke-linejoin="round"/>

  <!-- Right angle marker at R=(150,350) -->
  <rect x="150" y="330" width="20" height="20" fill="none" stroke="#000" stroke-width="2.5"/>

  <!-- Leg and hypotenuse labels -->
  <!-- a: midpoint of vertical leg (150, 290) → label left -->
  <text x="100" y="294" font-family="Georgia,serif" font-size="16" font-weight="bold" font-style="italic" fill="#1e40af">a = 4</text>
  <!-- b: midpoint of horizontal leg (195, 350) → label below -->
  <text x="178" y="348" font-family="Georgia,serif" font-size="16" font-weight="bold" font-style="italic" fill="#15803d">b = 3</text>
  <!-- c: midpoint of hypotenuse ≈ (195, 290) → label right -->
  <text x="215" y="283" font-family="Georgia,serif" font-size="16" font-weight="bold" font-style="italic" fill="#92400e">c = 5</text>

  <!-- Vertex dots -->
  <circle cx="150" cy="230" r="5" fill="#000"/>
  <circle cx="150" cy="350" r="5" fill="#000"/>
  <circle cx="240" cy="350" r="5" fill="#000"/>

  <!-- ─── Equation display ─── -->
  <rect x="290" y="340" width="178" height="96" rx="6" fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="5,3"/>
  <text x="300" y="362" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">a² + b² = c²</text>
  <text x="300" y="382" font-family="Georgia,serif" font-size="12" fill="#000">3² + 4² = 5²</text>
  <text x="300" y="400" font-family="Georgia,serif" font-size="12" fill="#000">9 + 16 = 25</text>
  <text x="300" y="420" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#1e40af">25 = 25  ✓</text>

  <!-- General formula reminder -->
  <text x="290" y="310" font-family="Georgia,serif" font-size="11" fill="#555">For any right triangle:</text>
  <text x="290" y="325" font-family="Georgia,serif" font-size="11" fill="#555">leg² + leg² = hypotenuse²</text>
</svg>`;

  // ─── 5. SINE & COSINE WAVE ────────────────────────────────────────────────
  // Plots one full period (0 to 2π) of sin(x) and cos(x) showing:
  //   • both curves on shared axes
  //   • amplitude, period, zero-crossings
  //   • π/2, π, 3π/2, 2π x-axis labels
  //   • peak/trough annotations
  //   • phase shift note (cos leads sin by π/2)
  static sineCosinePeriodAmplitudePhaseZeroCrossingWaveDiagram = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 540 340">

  <!-- Title -->
  <text x="130" y="20" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Sine and Cosine Waves — One Full Period (0 to 2π)</text>

  <!-- ── Axes: origin (60,170), x-scale 80px=π/2, y-scale 100px=1 ── -->
  <!-- x-axis -->
  <line x1="40" y1="170" x2="520" y2="170" stroke="#000" stroke-width="2.5"/>
  <polygon points="516,165 528,170 516,175" fill="#000"/>
  <text x="530" y="174" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">x</text>
  <!-- y-axis -->
  <line x1="60" y1="300" x2="60" y2="30" stroke="#000" stroke-width="2.5"/>
  <polygon points="55,34 60,22 65,34" fill="#000"/>
  <text x="64" y="20" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">y</text>

  <!-- y-axis ticks -->
  <line x1="56" y1="70"  x2="64" y2="70"  stroke="#000" stroke-width="2"/>
  <text x="36" y="74"  font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="56" y1="270" x2="64" y2="270" stroke="#000" stroke-width="2"/>
  <text x="30" y="274" font-family="Georgia,serif" font-size="11" fill="#000">−1</text>
  <line x1="56" y1="120" x2="64" y2="120" stroke="#000" stroke-width="2"/>
  <text x="32" y="124" font-family="Georgia,serif" font-size="10" fill="#888">0.5</text>
  <line x1="56" y1="220" x2="64" y2="220" stroke="#000" stroke-width="2"/>
  <text x="26" y="224" font-family="Georgia,serif" font-size="10" fill="#888">−0.5</text>

  <!-- x-axis ticks: π/2=140, π=220, 3π/2=300, 2π=380 (start x=60, scale 80/π*π/2=80px steps) -->
  <line x1="140" y1="166" x2="140" y2="174" stroke="#000" stroke-width="2"/>
  <text x="130" y="186" font-family="Georgia,serif" font-size="11" fill="#000">π/2</text>
  <line x1="220" y1="166" x2="220" y2="174" stroke="#000" stroke-width="2"/>
  <text x="214" y="186" font-family="Georgia,serif" font-size="11" fill="#000">π</text>
  <line x1="300" y1="166" x2="300" y2="174" stroke="#000" stroke-width="2"/>
  <text x="287" y="186" font-family="Georgia,serif" font-size="11" fill="#000">3π/2</text>
  <line x1="380" y1="166" x2="380" y2="174" stroke="#000" stroke-width="2"/>
  <text x="372" y="186" font-family="Georgia,serif" font-size="11" fill="#000">2π</text>

  <!-- Light vertical guide lines -->
  <line x1="140" y1="40" x2="140" y2="295" stroke="#ddd" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="220" y1="40" x2="220" y2="295" stroke="#ddd" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="300" y1="40" x2="300" y2="295" stroke="#ddd" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="380" y1="40" x2="380" y2="295" stroke="#ddd" stroke-width="1" stroke-dasharray="4,4"/>
  <!-- Horizontal guides at ±1 -->
  <line x1="60" y1="70"  x2="500" y2="70"  stroke="#ddd" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="60" y1="270" x2="500" y2="270" stroke="#ddd" stroke-width="1" stroke-dasharray="4,4"/>

  <!-- ── sin(x) curve: blue
       Key points (px coords):
         x=0:     (60, 170)    sin=0
         x=π/2:   (140, 70)   sin=1
         x=π:     (220, 170)  sin=0
         x=3π/2:  (300, 270)  sin=−1
         x=2π:    (380, 170)  sin=0
       Use cubic bezier arcs for smooth sinusoid:
  ── -->
  <path d="M60,170 C71,170 84,70 140,70 C196,70 209,170 220,170
           C231,170 244,270 300,270 C356,270 369,170 380,170"
        fill="none" stroke="#1d4ed8" stroke-width="3" stroke-linecap="round"/>

  <!-- ── cos(x) curve: red/orange
       Key points:
         x=0:     (60, 70)    cos=1
         x=π/2:   (140, 170)  cos=0
         x=π:     (220, 270)  cos=−1
         x=3π/2:  (300, 170)  cos=0
         x=2π:    (380, 70)   cos=1
  ── -->
  <path d="M60,70 C116,70 129,170 140,170 C151,170 164,270 220,270
           C276,270 289,170 300,170 C311,170 324,70 380,70"
        fill="none" stroke="#dc2626" stroke-width="3" stroke-linecap="round" stroke-dasharray="8,4"/>

  <!-- ── Annotations ── -->
  <!-- sin peak -->
  <circle cx="140" cy="70" r="5" fill="#1d4ed8"/>
  <text x="100" y="60" font-family="Georgia,serif" font-size="10" fill="#1d4ed8">sin peak (π/2, 1)</text>
  <!-- sin trough -->
  <circle cx="300" cy="270" r="5" fill="#1d4ed8"/>
  <text x="306" y="280" font-family="Georgia,serif" font-size="10" fill="#1d4ed8">sin trough (3π/2, −1)</text>

  <!-- cos peak at x=0 -->
  <circle cx="60" cy="70" r="5" fill="#dc2626"/>
  <text x="62" y="58" font-family="Georgia,serif" font-size="10" fill="#dc2626">cos(0)=1</text>
  <!-- cos trough -->
  <circle cx="220" cy="270" r="5" fill="#dc2626"/>
  <text x="224" y="284" font-family="Georgia,serif" font-size="10" fill="#dc2626">cos trough (π, −1)</text>

  <!-- Zero crossing labels for sin -->
  <circle cx="60"  cy="170" r="4" fill="#1d4ed8" fill-opacity="0.5"/>
  <circle cx="220" cy="170" r="4" fill="#1d4ed8" fill-opacity="0.5"/>
  <circle cx="380" cy="170" r="4" fill="#1d4ed8" fill-opacity="0.5"/>

  <!-- Legend -->
  <rect x="400" y="60" width="128" height="64" rx="5" fill="none" stroke="#000" stroke-width="1.5"/>
  <line x1="410" y1="78" x2="440" y2="78" stroke="#1d4ed8" stroke-width="3"/>
  <text x="446" y="82" font-family="Georgia,serif" font-size="11" fill="#1d4ed8">y = sin(x)</text>
  <line x1="410" y1="98" x2="440" y2="98" stroke="#dc2626" stroke-width="3" stroke-dasharray="8,4"/>
  <text x="446" y="102" font-family="Georgia,serif" font-size="11" fill="#dc2626">y = cos(x)</text>
  <text x="406" y="116" font-family="Georgia,serif" font-size="9" fill="#555">cos leads sin by π/2</text>

  <!-- Amplitude annotation -->
  <line x1="46" y1="70"  x2="46" y2="170" stroke="#555" stroke-width="1.5"/>
  <line x1="42" y1="70"  x2="50" y2="70"  stroke="#555" stroke-width="1.5"/>
  <line x1="42" y1="170" x2="50" y2="170" stroke="#555" stroke-width="1.5"/>
  <text x="6"  y="124" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#555">A=1</text>

  <!-- Period annotation -->
  <line x1="60"  y1="298" x2="380" y2="298" stroke="#555" stroke-width="1.5"/>
  <line x1="60"  y1="294" x2="60"  y2="302" stroke="#555" stroke-width="1.5"/>
  <line x1="380" y1="294" x2="380" y2="302" stroke="#555" stroke-width="1.5"/>
  <text x="180" y="314" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#555">Period T = 2π</text>
</svg>`;

  // ─── 6. QUADRATIC / PARABOLA ──────────────────────────────────────────────
  // Shows the parabola y = x² − 4x + 3 with:
  //   • the curve plotted on labelled axes
  //   • vertex highlighted and labelled
  //   • axis of symmetry dashed line
  //   • x-intercepts (roots: x=1 and x=3) marked
  //   • y-intercept marked
  //   • standard / vertex / factored form shown
  static quadraticParabolaVertexAxisSymmetryRootsInterceptStandardFormDiagram = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 440 400">

  <!-- Title -->
  <text x="60" y="20" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Quadratic Function: y = x² − 4x + 3</text>

  <!-- ── Grid (origin 180,280; 60px/unit) ── -->
  <!-- vertical lines x=−1..5 -->
  <line x1="120" y1="50" x2="120" y2="340" stroke="#eee" stroke-width="1"/>
  <line x1="240" y1="50" x2="240" y2="340" stroke="#eee" stroke-width="1"/>
  <line x1="300" y1="50" x2="300" y2="340" stroke="#eee" stroke-width="1"/>
  <line x1="360" y1="50" x2="360" y2="340" stroke="#eee" stroke-width="1"/>
  <line x1="420" y1="50" x2="420" y2="340" stroke="#eee" stroke-width="1"/>
  <!-- horizontal lines y=−1..4 -->
  <line x1="80" y1="340" x2="440" y2="340" stroke="#eee" stroke-width="1"/>
  <line x1="80" y1="220" x2="440" y2="220" stroke="#eee" stroke-width="1"/>
  <line x1="80" y1="160" x2="440" y2="160" stroke="#eee" stroke-width="1"/>
  <line x1="80" y1="100" x2="440" y2="100" stroke="#eee" stroke-width="1"/>

  <!-- Axes -->
  <!-- x-axis at y=280 (y=0) -->
  <line x1="80" y1="280" x2="440" y2="280" stroke="#000" stroke-width="2.5"/>
  <polygon points="436,275 448,280 436,285" fill="#000"/>
  <text x="450" y="284" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">x</text>
  <!-- y-axis at x=180 (x=0) -->
  <line x1="180" y1="360" x2="180" y2="40" stroke="#000" stroke-width="2.5"/>
  <polygon points="175,44 180,32 185,44" fill="#000"/>
  <text x="184" y="30" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">y</text>

  <!-- Tick labels x-axis -->
  <line x1="120" y1="276" x2="120" y2="284" stroke="#000" stroke-width="2"/>
  <text x="116" y="296" font-family="Georgia,serif" font-size="11" fill="#000">−1</text>
  <line x1="240" y1="276" x2="240" y2="284" stroke="#000" stroke-width="2"/>
  <text x="238" y="296" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="300" y1="276" x2="300" y2="284" stroke="#000" stroke-width="2"/>
  <text x="298" y="296" font-family="Georgia,serif" font-size="11" fill="#000">2</text>
  <line x1="360" y1="276" x2="360" y2="284" stroke="#000" stroke-width="2"/>
  <text x="358" y="296" font-family="Georgia,serif" font-size="11" fill="#000">3</text>
  <line x1="420" y1="276" x2="420" y2="284" stroke="#000" stroke-width="2"/>
  <text x="418" y="296" font-family="Georgia,serif" font-size="11" fill="#000">4</text>

  <!-- Tick labels y-axis -->
  <line x1="176" y1="220" x2="184" y2="220" stroke="#000" stroke-width="2"/>
  <text x="158" y="224" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="176" y1="160" x2="184" y2="160" stroke="#000" stroke-width="2"/>
  <text x="158" y="164" font-family="Georgia,serif" font-size="11" fill="#000">2</text>
  <line x1="176" y1="100" x2="184" y2="100" stroke="#000" stroke-width="2"/>
  <text x="158" y="104" font-family="Georgia,serif" font-size="11" fill="#000">3</text>
  <line x1="176" y1="340" x2="184" y2="340" stroke="#000" stroke-width="2"/>
  <text x="154" y="344" font-family="Georgia,serif" font-size="11" fill="#000">−1</text>

  <!-- ── Axis of symmetry x=2 → px=300 (dashed) ── -->
  <line x1="300" y1="50" x2="300" y2="340" stroke="#9333ea" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="304" y="48" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#9333ea">x = 2 (axis of symmetry)</text>

  <!-- ── Parabola y = x²−4x+3; y px = 280 − y_val·60
       x from −0.8 to 4.8
       At each x: y = x²−4x+3
       Key computed points for smooth cubic path:
         x=−1: y=8  → (120, 280−480) off; clip
         x=0:  y=3  → (180, 280−180) = (180,100)
         x=1:  y=0  → (240, 280)
         x=2:  y=−1 → (300, 340)
         x=3:  y=0  → (360, 280)
         x=4:  y=3  → (420, 100)
       Use smooth path:
  ── -->
  <path d="M108,54 C120,54 148,100 180,100
           C210,100 234,280 240,280
           C246,280 254,340 300,340
           C346,340 354,280 360,280
           C366,280 390,100 420,100
           C440,100 456,54 465,54"
        fill="none" stroke="#059669" stroke-width="3.5" stroke-linecap="round"/>

  <!-- ── Special points ── -->
  <!-- Vertex (2, −1) → (300, 340) -->
  <circle cx="300" cy="340" r="7" fill="#9333ea"/>
  <text x="306" y="358" font-family="Georgia,serif" font-size="10.5" font-weight="bold" fill="#9333ea">Vertex (2, −1)</text>

  <!-- x-intercepts: (1,0)→(240,280) and (3,0)→(360,280) -->
  <circle cx="240" cy="280" r="6" fill="#dc2626"/>
  <text x="218" y="272" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#dc2626">x=1</text>
  <circle cx="360" cy="280" r="6" fill="#dc2626"/>
  <text x="364" y="272" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#dc2626">x=3</text>

  <!-- y-intercept: (0,3)→(180,100) -->
  <circle cx="180" cy="100" r="6" fill="#d97706"/>
  <text x="186" y="96" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#d97706">y-int (0,3)</text>

  <!-- ── Info box ── -->
  <rect x="60" y="50" width="200" height="100" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="68" y="67" font-family="Georgia,serif" font-size="9.5" font-weight="bold" fill="#000">Standard form:</text>
  <text x="70" y="80" font-family="Georgia,serif" font-size="9.5" fill="#000">y = x² − 4x + 3</text>
  <text x="68" y="96" font-family="Georgia,serif" font-size="9.5" font-weight="bold" fill="#000">Vertex form:</text>
  <text x="70" y="109" font-family="Georgia,serif" font-size="9.5" fill="#000">y = (x − 2)² − 1</text>
  <text x="68" y="125" font-family="Georgia,serif" font-size="9.5" font-weight="bold" fill="#000">Factored form:</text>
  <text x="70" y="138" font-family="Georgia,serif" font-size="9.5" fill="#000">y = (x − 1)(x − 3)</text>
</svg>`;

}
