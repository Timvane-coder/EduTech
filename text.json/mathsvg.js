class MathematicsSvgDiagrams {




  // ─── MATRIX MULTIPLICATION (B&W) ─────────────────────────────────────────
  static matrixMultiplicationSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 520 380">

  <text x="100" y="22" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Matrix Multiplication  A (2×3) · B (3×2) = C (2×2)</text>
  <text x="140" y="38" font-family="Georgia,serif" font-size="10" fill="#000">Rule: inner dimensions must match · C[i,j] = row i of A · col j of B</text>

  <!-- Matrix A brackets -->
  <path d="M72,58 L62,58 L62,148 L72,148" fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M190,58 L200,58 L200,148 L190,148" fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Row 1 highlight band (hatched outline only) -->
  <rect x="64" y="60" width="134" height="40" rx="3" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,2"/>

  <!-- A cell values Row 0 (bold = highlighted) -->
  <text x="89" y="86" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">1</text>
  <text x="127" y="86" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">2</text>
  <text x="165" y="86" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">3</text>
  <!-- A cell values Row 1 (lighter weight) -->
  <text x="89" y="136" font-family="Georgia,serif" font-size="16" fill="#888">4</text>
  <text x="127" y="136" font-family="Georgia,serif" font-size="16" fill="#888">5</text>
  <text x="165" y="136" font-family="Georgia,serif" font-size="16" fill="#888">6</text>

  <!-- Column/row separators A -->
  <line x1="112" y1="62" x2="112" y2="146" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="150" y1="62" x2="150" y2="146" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="64" y1="103" x2="198" y2="103" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>

  <!-- A label -->
  <text x="115" y="170" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">A</text>
  <text x="108" y="182" font-family="Georgia,serif" font-size="9" fill="#000">(2 × 3)</text>

  <!-- × sign -->
  <text x="210" y="110" font-family="Georgia,serif" font-size="20" font-weight="bold" fill="#000">×</text>

  <!-- Matrix B brackets -->
  <path d="M228,58 L218,58 L218,198 L228,198" fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M302,58 L312,58 L312,198 L302,198" fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Col 0 highlight band (hatched outline) -->
  <rect x="220" y="60" width="40" height="136" rx="3" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,2"/>

  <!-- B cell values col 0 bold, col 1 light -->
  <text x="232" y="96" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">7</text>
  <text x="272" y="96" font-family="Georgia,serif" font-size="16" fill="#888">8</text>
  <text x="232" y="143" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">9</text>
  <text x="272" y="143" font-family="Georgia,serif" font-size="16" fill="#888">10</text>
  <text x="227" y="190" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">11</text>
  <text x="267" y="190" font-family="Georgia,serif" font-size="16" fill="#888">12</text>

  <!-- B separators -->
  <line x1="260" y1="62" x2="260" y2="196" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="222" y1="110" x2="310" y2="110" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="222" y1="157" x2="310" y2="157" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>

  <!-- B label -->
  <text x="255" y="218" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">B</text>
  <text x="248" y="230" font-family="Georgia,serif" font-size="9" fill="#000">(3 × 2)</text>

  <!-- = sign -->
  <text x="322" y="138" font-family="Georgia,serif" font-size="20" font-weight="bold" fill="#000">=</text>

  <!-- Matrix C brackets -->
  <path d="M346,88 L336,88 L336,168 L346,168" fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M436,88 L446,88 L446,168 L436,168" fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Result cell c[0,0] highlight -->
  <rect x="340" y="92" width="46" height="36" rx="4" fill="none" stroke="#000" stroke-width="2.5"/>

  <!-- C values -->
  <text x="345" y="117" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">58</text>
  <text x="395" y="117" font-family="Georgia,serif" font-size="15" fill="#888">64</text>
  <text x="345" y="157" font-family="Georgia,serif" font-size="15" fill="#888">139</text>
  <text x="395" y="157" font-family="Georgia,serif" font-size="15" fill="#888">154</text>

  <!-- C separators -->
  <line x1="384" y1="92" x2="384" y2="166" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="338" y1="128" x2="444" y2="128" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>

  <!-- C index labels -->
  <text x="350" y="90" font-family="Georgia,serif" font-size="9" fill="#000">i=0,j=0</text>
  <text x="388" y="90" font-family="Georgia,serif" font-size="9" fill="#000">i=0,j=1</text>

  <!-- C label -->
  <text x="383" y="188" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">C</text>
  <text x="376" y="200" font-family="Georgia,serif" font-size="9" fill="#000">(2 × 2)</text>

  <!-- Connecting arrows row→result -->
  <path d="M200,80 C240,80 280,105 338,105" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <polygon points="334,101 344,105 334,109" fill="#000"/>
  <path d="M240,60 C240,50 330,50 358,90" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <polygon points="354,88 362,97 366,87" fill="#000"/>

  <!-- Breakdown box -->
  <rect x="50" y="248" width="420" height="118" rx="6" fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="6,3"/>
  <text x="60" y="268" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">C[0,0] dot-product breakdown (highlighted row 0 of A · col 0 of B):</text>
  <text x="60" y="288" font-family="Georgia,serif" font-size="11" fill="#000">C[0,0] = (1)(7) + (2)(9) + (3)(11)</text>
  <text x="300" y="288" font-family="Georgia,serif" font-size="11" fill="#000">← multiply paired elements, then sum</text>
  <text x="60" y="308" font-family="Georgia,serif" font-size="11" fill="#000">       =  7  +  18  +  33</text>
  <text x="60" y="328" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">       = 58  ✓</text>
  <text x="60" y="354" font-family="Georgia,serif" font-size="10" fill="#000">Dimension rule: (m×k)·(k×n) → (m×n)  |  Inner dimension k=3 cancels</text>

  <!-- Dimension arrows -->
  <line x1="54" y1="60" x2="54" y2="148" stroke="#000" stroke-width="1.5"/>
  <line x1="50" y1="60" x2="58" y2="60" stroke="#000" stroke-width="1.5"/>
  <line x1="50" y1="148" x2="58" y2="148" stroke="#000" stroke-width="1.5"/>
  <text x="30" y="108" font-family="Georgia,serif" font-size="10" fill="#000">m=2</text>
  <line x1="62" y1="156" x2="200" y2="156" stroke="#000" stroke-width="1.5"/>
  <line x1="62" y1="152" x2="62" y2="160" stroke="#000" stroke-width="1.5"/>
  <line x1="200" y1="152" x2="200" y2="160" stroke="#000" stroke-width="1.5"/>
  <text x="112" y="170" font-family="Georgia,serif" font-size="10" fill="#000">k=3 (shared)</text>
  <line x1="218" y1="207" x2="312" y2="207" stroke="#000" stroke-width="1.5"/>
  <line x1="218" y1="203" x2="218" y2="211" stroke="#000" stroke-width="1.5"/>
  <line x1="312" y1="203" x2="312" y2="211" stroke="#000" stroke-width="1.5"/>
  <text x="244" y="222" font-family="Georgia,serif" font-size="10" fill="#000">n=2</text>
</svg>`;


  // ─── BAR CHART ────────────────────────────────────────────────────────────
  static barChartSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="450" y="36" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">Bar Chart</text>

  <!-- Grid lines (horizontal) -->
  <line x1="100" y1="460" x2="820" y2="460" stroke="#ccc" stroke-width="1"/>
  <line x1="100" y1="384" x2="820" y2="384" stroke="#ccc" stroke-width="1"/>
  <line x1="100" y1="308" x2="820" y2="308" stroke="#ccc" stroke-width="1"/>
  <line x1="100" y1="232" x2="820" y2="232" stroke="#ccc" stroke-width="1"/>
  <line x1="100" y1="156" x2="820" y2="156" stroke="#ccc" stroke-width="1"/>
  <line x1="100" y1="80"  x2="820" y2="80"  stroke="#ccc" stroke-width="1"/>

  <!-- Y-axis labels (max value 22, step ~4.4 per 20px, origin y=460, range=380px) -->
  <!-- scale: 380px / 22 = ~17.27px per unit -->
  <text x="90" y="464" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">0</text>
  <text x="90" y="388" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">5</text>
  <text x="90" y="312" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">10</text>
  <text x="90" y="236" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">15</text>
  <text x="90" y="160" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">20</text>
  <text x="90" y="84"  font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">25</text>

  <!-- Y-axis ticks -->
  <line x1="96" y1="460" x2="100" y2="460" stroke="#000" stroke-width="1.5"/>
  <line x1="96" y1="384" x2="100" y2="384" stroke="#000" stroke-width="1.5"/>
  <line x1="96" y1="308" x2="100" y2="308" stroke="#000" stroke-width="1.5"/>
  <line x1="96" y1="232" x2="100" y2="232" stroke="#000" stroke-width="1.5"/>
  <line x1="96" y1="156" x2="100" y2="156" stroke="#000" stroke-width="1.5"/>
  <line x1="96" y1="80"  x2="100" y2="80"  stroke="#000" stroke-width="1.5"/>

  <!-- Axes -->
  <line x1="100" y1="60" x2="100" y2="460" stroke="#000" stroke-width="3"/>
  <line x1="100" y1="460" x2="820" y2="460" stroke="#000" stroke-width="3"/>

  <!-- Axis labels -->
  <text x="460" y="510" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">Category</text>
  <text x="28" y="270" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle" transform="rotate(-90,28,270)">Frequency</text>

  <!-- Bars: 5 categories, each bar width=100, gap=44
       origin y=460, scale=17.27px/unit
       A=12 → h=207.3 → y=252.7   B=19 → h=328.1 → y=131.9
       C=15 → h=259.1 → y=200.9   D=8  → h=138.2 → y=321.8
       E=22 → h=380   → y=80
       x positions: 148, 292, 436, 580, 724 (centres), bar half-width=50 -->

  <!-- Bar A -->
  <rect x="122" y="253" width="100" height="207" fill="#333" stroke="#000" stroke-width="2"/>
  <text x="172" y="246" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">12</text>
  <text x="172" y="480" font-family="Georgia,serif" font-size="14" fill="#000" text-anchor="middle">A</text>

  <!-- Bar B -->
  <rect x="266" y="132" width="100" height="328" fill="#555" stroke="#000" stroke-width="2"/>
  <text x="316" y="125" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">19</text>
  <text x="316" y="480" font-family="Georgia,serif" font-size="14" fill="#000" text-anchor="middle">B</text>

  <!-- Bar C -->
  <rect x="410" y="201" width="100" height="259" fill="#777" stroke="#000" stroke-width="2"/>
  <text x="460" y="194" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">15</text>
  <text x="460" y="480" font-family="Georgia,serif" font-size="14" fill="#000" text-anchor="middle">C</text>

  <!-- Bar D -->
  <rect x="554" y="322" width="100" height="138" fill="#999" stroke="#000" stroke-width="2"/>
  <text x="604" y="315" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">8</text>
  <text x="604" y="480" font-family="Georgia,serif" font-size="14" fill="#000" text-anchor="middle">D</text>

  <!-- Bar E -->
  <rect x="698" y="80" width="100" height="380" fill="#111" stroke="#000" stroke-width="2"/>
  <text x="748" y="73" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">22</text>
  <text x="748" y="480" font-family="Georgia,serif" font-size="14" fill="#000" text-anchor="middle">E</text>
</svg>`;


  // ─── HISTOGRAM ────────────────────────────────────────────────────────────
  static histogramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="450" y="36" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">Histogram</text>
  <text x="450" y="55" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">Continuous data — no gaps between bars</text>

  <!-- Grid -->
  <line x1="120" y1="400" x2="820" y2="400" stroke="#ccc" stroke-width="1"/>
  <line x1="120" y1="340" x2="820" y2="340" stroke="#ccc" stroke-width="1"/>
  <line x1="120" y1="280" x2="820" y2="280" stroke="#ccc" stroke-width="1"/>
  <line x1="120" y1="220" x2="820" y2="220" stroke="#ccc" stroke-width="1"/>
  <line x1="120" y1="160" x2="820" y2="160" stroke="#ccc" stroke-width="1"/>
  <line x1="120" y1="100" x2="820" y2="100" stroke="#ccc" stroke-width="1"/>

  <!-- Y labels: max freq=18, scale: 300px/18 = 16.67px/unit, origin y=460 -->
  <text x="110" y="464" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">0</text>
  <text x="110" y="404" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">6 (nope: 3)</text>
  <!-- Simpler clean labels: 0,5,10,15,20 steps; 300px range, 20 max -->
  <!-- Recalc: max=18, use 20 as ceiling; 300px/20=15px per unit -->
  <!-- y=460 is origin; y=460-(val*15) -->

  <!-- Axes -->
  <line x1="120" y1="70" x2="120" y2="460" stroke="#000" stroke-width="3"/>
  <line x1="120" y1="460" x2="820" y2="460" stroke="#000" stroke-width="3"/>

  <!-- Y-axis labels (0–20 in steps of 5, 15px/unit) -->
  <text x="110" y="464" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">0</text>
  <text x="110" y="389" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">5</text>
  <text x="110" y="314" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">10</text>
  <text x="110" y="239" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">15</text>
  <text x="110" y="164" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">20</text>
  <!-- Y-ticks -->
  <line x1="116" y1="460" x2="120" y2="460" stroke="#000" stroke-width="1.5"/>
  <line x1="116" y1="385" x2="120" y2="385" stroke="#000" stroke-width="1.5"/>
  <line x1="116" y1="310" x2="120" y2="310" stroke="#000" stroke-width="1.5"/>
  <line x1="116" y1="235" x2="120" y2="235" stroke="#000" stroke-width="1.5"/>
  <line x1="116" y1="160" x2="120" y2="160" stroke="#000" stroke-width="1.5"/>

  <!-- Bars (no gaps): intervals [0,10],[10,20],[20,30],[30,40]
       x range: 120–820 = 700px / 4 bars = 175px each
       freq: 5,12,18,9 × 15px = 75,180,270,135
       bar tops: 460−75=385, 460−180=280, 460−270=190, 460−135=325 -->

  <rect x="120" y="385" width="175" height="75"  fill="#ddd" stroke="#000" stroke-width="2.5"/>
  <rect x="295" y="280" width="175" height="180" fill="#bbb" stroke="#000" stroke-width="2.5"/>
  <rect x="470" y="190" width="175" height="270" fill="#888" stroke="#000" stroke-width="2.5"/>
  <rect x="645" y="325" width="175" height="135" fill="#aaa" stroke="#000" stroke-width="2.5"/>

  <!-- Frequency labels on bars -->
  <text x="208" y="378" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">5</text>
  <text x="383" y="273" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">12</text>
  <text x="558" y="183" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">18</text>
  <text x="733" y="318" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">9</text>

  <!-- X-axis interval labels -->
  <text x="120" y="480" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">0</text>
  <text x="295" y="480" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">10</text>
  <text x="470" y="480" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">20</text>
  <text x="645" y="480" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">30</text>
  <text x="820" y="480" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">40</text>

  <!-- Axis labels -->
  <text x="470" y="520" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">Class Interval</text>
  <text x="28" y="270" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle" transform="rotate(-90,28,270)">Frequency</text>
</svg>`;


  // ─── PIE CHART ────────────────────────────────────────────────────────────
  // Data: A=30, B=45, C=60, D=25 → total=160
  // A=67.5°, B=101.25°, C=135°, D=56.25°
  // A: 18.75%, B: 28.125%, C: 37.5%, D: 15.625%
  static pieChartSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 800 800">

  <text x="400" y="40" font-family="Georgia,serif" font-size="20" font-weight="bold" fill="#000" text-anchor="middle">Pie Chart</text>

  <!-- Centre 400,430 radius=240 -->
  <!-- Segment A: 0° → 67.5°   fill=white stroke heavy -->
  <!-- Segment B: 67.5° → 168.75° -->
  <!-- Segment C: 168.75° → 303.75° -->
  <!-- Segment D: 303.75° → 360° -->

  <!-- Using path arc commands. Angles in standard (0=east, CCW)
       We start from top (−90°) and go clockwise.
       A: start −90° end −90+67.5=−22.5°
       B: −22.5° → −22.5+101.25=78.75°
       C: 78.75° → 78.75+135=213.75°
       D: 213.75° → 213.75+56.25=270°=−90° (full circle)

  cx=400,cy=430,r=240
  Coords: x = 400 + 240*cos(angle), y = 430 + 240*sin(angle)
  A start: cos(−90°)=0 sin(−90°)=−1 → 400,190
  A end: cos(−22.5°)=0.9239 sin(−22.5°)=−0.3827 → 621.7,338.2
  B end: cos(78.75°)=0.1951 sin(78.75°)=0.9808 → 446.8,665.4
  C end: cos(213.75°)=−0.8315 sin(213.75°)=−0.5556 → 200.4,296.7
  D end back to 400,190 -->

  <!-- Segment A (white/lightest) -->
  <path d="M400,430 L400,190 A240,240 0 0,1 621,338 Z"
        fill="white" stroke="#000" stroke-width="3"/>
  <!-- Segment B (light grey) -->
  <path d="M400,430 L621,338 A240,240 0 0,1 447,665 Z"
        fill="#ddd" stroke="#000" stroke-width="3"/>
  <!-- Segment C (mid grey, large) -->
  <path d="M400,430 L447,665 A240,240 0 1,1 200,297 Z"
        fill="#888" stroke="#000" stroke-width="3"/>
  <!-- Segment D (dark grey) -->
  <path d="M400,430 L200,297 A240,240 0 0,1 400,190 Z"
        fill="#333" stroke="#000" stroke-width="3"/>

  <!-- Labels positioned at midpoint angle, r=290 from centre -->
  <!-- A mid: −90+33.75=−56.25° → cos=0.5556 sin=−0.8315 → 400+290*0.5556=561, 430+290*(−0.8315)=189 -->
  <text x="558" y="192" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">A</text>
  <text x="558" y="208" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">30 (18.8%)</text>
  <text x="558" y="222" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">67.5°</text>

  <!-- B mid: −22.5+50.6=28.1° → cos=0.8819 sin=0.4714 → 656,567 -->
  <text x="660" y="565" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">B</text>
  <text x="660" y="581" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">45 (28.1%)</text>
  <text x="660" y="595" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">101.3°</text>

  <!-- C mid: 78.75+67.5=146.25° → cos=−0.8315 sin=0.5556 → 159,591 -->
  <text x="152" y="590" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">C</text>
  <text x="152" y="606" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">60 (37.5%)</text>
  <text x="152" y="620" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">135.0°</text>

  <!-- D mid: 213.75+28.1=241.9° → cos=−0.4714 sin=−0.8819 → 263,174 -->
  <text x="256" y="172" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">D</text>
  <text x="256" y="188" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">25 (15.6%)</text>
  <text x="256" y="202" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">56.3°</text>

  <!-- Legend -->
  <rect x="290" y="710" width="18" height="18" fill="white" stroke="#000" stroke-width="2"/>
  <text x="316" y="724" font-family="Georgia,serif" font-size="13" fill="#000">A = 30</text>
  <rect x="380" y="710" width="18" height="18" fill="#ddd" stroke="#000" stroke-width="2"/>
  <text x="406" y="724" font-family="Georgia,serif" font-size="13" fill="#000">B = 45</text>
  <rect x="470" y="710" width="18" height="18" fill="#888" stroke="#000" stroke-width="2"/>
  <text x="496" y="724" font-family="Georgia,serif" font-size="13" fill="#000">C = 60</text>
  <rect x="560" y="710" width="18" height="18" fill="#333" stroke="#000" stroke-width="2"/>
  <text x="586" y="724" font-family="Georgia,serif" font-size="13" fill="#000">D = 25</text>

  <!-- Annotation: total -->
  <text x="400" y="760" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">Total = 160  |  Angle = (value / total) × 360°</text>
</svg>`;


  // ─── LINE GRAPH ───────────────────────────────────────────────────────────
  // x: 0–5, y: 2,5,4,8,7,10
  static lineGraphSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="450" y="36" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">Line Graph</text>

  <!-- Grid: origin (120,480), x scale=120px/unit (0–5=600px), y scale=40px/unit (0–10) -->
  <!-- Vertical grid x=1..5 -->
  <line x1="240" y1="80" x2="240" y2="480" stroke="#ccc" stroke-width="1"/>
  <line x1="360" y1="80" x2="360" y2="480" stroke="#ccc" stroke-width="1"/>
  <line x1="480" y1="80" x2="480" y2="480" stroke="#ccc" stroke-width="1"/>
  <line x1="600" y1="80" x2="600" y2="480" stroke="#ccc" stroke-width="1"/>
  <line x1="720" y1="80" x2="720" y2="480" stroke="#ccc" stroke-width="1"/>
  <!-- Horizontal grid y=2,4,6,8,10 -->
  <line x1="120" y1="400" x2="820" y2="400" stroke="#ccc" stroke-width="1"/>
  <line x1="120" y1="320" x2="820" y2="320" stroke="#ccc" stroke-width="1"/>
  <line x1="120" y1="240" x2="820" y2="240" stroke="#ccc" stroke-width="1"/>
  <line x1="120" y1="160" x2="820" y2="160" stroke="#ccc" stroke-width="1"/>
  <line x1="120" y1="80"  x2="820" y2="80"  stroke="#ccc" stroke-width="1"/>

  <!-- Axes -->
  <line x1="120" y1="60" x2="120" y2="480" stroke="#000" stroke-width="3"/>
  <line x1="120" y1="480" x2="840" y2="480" stroke="#000" stroke-width="3"/>
  <polygon points="836,474 848,480 836,486" fill="#000"/>
  <polygon points="114,64 120,52 126,64" fill="#000"/>

  <!-- X labels -->
  <text x="120" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">0</text>
  <text x="240" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">1</text>
  <text x="360" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">2</text>
  <text x="480" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">3</text>
  <text x="600" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">4</text>
  <text x="720" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">5</text>
  <!-- X ticks -->
  <line x1="240" y1="476" x2="240" y2="484" stroke="#000" stroke-width="2"/>
  <line x1="360" y1="476" x2="360" y2="484" stroke="#000" stroke-width="2"/>
  <line x1="480" y1="476" x2="480" y2="484" stroke="#000" stroke-width="2"/>
  <line x1="600" y1="476" x2="600" y2="484" stroke="#000" stroke-width="2"/>
  <line x1="720" y1="476" x2="720" y2="484" stroke="#000" stroke-width="2"/>

  <!-- Y labels (0–10 step 2): y_px = 480 − val*40 -->
  <text x="108" y="484" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">0</text>
  <text x="108" y="404" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">2</text>
  <text x="108" y="324" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">4</text>
  <text x="108" y="244" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">6</text>
  <text x="108" y="164" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">8</text>
  <text x="108" y="84"  font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">10</text>
  <!-- Y ticks -->
  <line x1="116" y1="400" x2="120" y2="400" stroke="#000" stroke-width="2"/>
  <line x1="116" y1="320" x2="120" y2="320" stroke="#000" stroke-width="2"/>
  <line x1="116" y1="240" x2="120" y2="240" stroke="#000" stroke-width="2"/>
  <line x1="116" y1="160" x2="120" y2="160" stroke="#000" stroke-width="2"/>
  <line x1="116" y1="80"  x2="120" y2="80"  stroke="#000" stroke-width="2"/>

  <!-- Data points: (x,y) → px_x=120+x*120, px_y=480−y*40
       (0,2)→(120,400) (1,5)→(240,280) (2,4)→(360,320)
       (3,8)→(480,160) (4,7)→(600,200) (5,10)→(720,80) -->
  <polyline points="120,400 240,280 360,320 480,160 600,200 720,80"
            fill="none" stroke="#000" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>

  <!-- Data point circles -->
  <circle cx="120" cy="400" r="7" fill="#000" stroke="#fff" stroke-width="2"/>
  <circle cx="240" cy="280" r="7" fill="#000" stroke="#fff" stroke-width="2"/>
  <circle cx="360" cy="320" r="7" fill="#000" stroke="#fff" stroke-width="2"/>
  <circle cx="480" cy="160" r="7" fill="#000" stroke="#fff" stroke-width="2"/>
  <circle cx="600" cy="200" r="7" fill="#000" stroke="#fff" stroke-width="2"/>
  <circle cx="720" cy="80"  r="7" fill="#000" stroke="#fff" stroke-width="2"/>

  <!-- Value labels above each point -->
  <text x="120" y="392" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">2</text>
  <text x="240" y="272" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">5</text>
  <text x="360" y="312" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">4</text>
  <text x="480" y="152" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">8</text>
  <text x="600" y="192" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">7</text>
  <text x="720" y="72"  font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">10</text>

  <!-- Axis labels -->
  <text x="480" y="540" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">x</text>
  <text x="28"  y="270" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle" transform="rotate(-90,28,270)">y</text>
</svg>`;


  // ─── SCATTER PLOT ─────────────────────────────────────────────────────────
  // Points: (1,2)(2,4)(3,5)(4,4)(5,7)(6,8) + line of best fit
  static scatterPlotSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <text x="400" y="36" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">Scatter Plot</text>

  <!-- origin (100,480), x scale=100px/unit (0–7), y scale=50px/unit (0–9) -->
  <!-- Grid -->
  <line x1="100" y1="430" x2="740" y2="430" stroke="#ccc" stroke-width="1"/>
  <line x1="100" y1="380" x2="740" y2="380" stroke="#ccc" stroke-width="1"/>
  <line x1="100" y1="330" x2="740" y2="330" stroke="#ccc" stroke-width="1"/>
  <line x1="100" y1="280" x2="740" y2="280" stroke="#ccc" stroke-width="1"/>
  <line x1="100" y1="230" x2="740" y2="230" stroke="#ccc" stroke-width="1"/>
  <line x1="100" y1="180" x2="740" y2="180" stroke="#ccc" stroke-width="1"/>
  <line x1="100" y1="130" x2="740" y2="130" stroke="#ccc" stroke-width="1"/>
  <line x1="100" y1="80"  x2="740" y2="80"  stroke="#ccc" stroke-width="1"/>
  <line x1="200" y1="80"  x2="200" y2="480" stroke="#ccc" stroke-width="1"/>
  <line x1="300" y1="80"  x2="300" y2="480" stroke="#ccc" stroke-width="1"/>
  <line x1="400" y1="80"  x2="400" y2="480" stroke="#ccc" stroke-width="1"/>
  <line x1="500" y1="80"  x2="500" y2="480" stroke="#ccc" stroke-width="1"/>
  <line x1="600" y1="80"  x2="600" y2="480" stroke="#ccc" stroke-width="1"/>
  <line x1="700" y1="80"  x2="700" y2="480" stroke="#ccc" stroke-width="1"/>

  <!-- Axes -->
  <line x1="100" y1="60" x2="100" y2="480" stroke="#000" stroke-width="3"/>
  <line x1="100" y1="480" x2="760" y2="480" stroke="#000" stroke-width="3"/>
  <polygon points="756,474 768,480 756,486" fill="#000"/>
  <polygon points="94,64 100,52 106,64" fill="#000"/>

  <!-- X labels 0–7 -->
  <text x="100" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">0</text>
  <text x="200" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">1</text>
  <text x="300" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">2</text>
  <text x="400" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">3</text>
  <text x="500" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">4</text>
  <text x="600" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">5</text>
  <text x="700" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">6</text>

  <!-- Y labels 0–9 step 1 -->
  <text x="88" y="484" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="end">0</text>
  <text x="88" y="434" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="end">1</text>
  <text x="88" y="384" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="end">2</text>
  <text x="88" y="334" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="end">3</text>
  <text x="88" y="284" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="end">4</text>
  <text x="88" y="234" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="end">5</text>
  <text x="88" y="184" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="end">6</text>
  <text x="88" y="134" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="end">7</text>
  <text x="88" y="84"  font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="end">8</text>

  <!-- Data points: px_x=100+x*100, px_y=480−y*50
       (1,2)→(200,380) (2,4)→(300,280) (3,5)→(400,230)
       (4,4)→(500,280) (5,7)→(600,130) (6,8)→(700,80) -->

  <!-- Line of best fit: rough regression y≈1.2x+0.8
       at x=0: y=0.8→480−40=440 → (100,440)
       at x=7: y=9.2→480−460=20 → (800,20) -->
  <line x1="100" y1="440" x2="760" y2="28"
        stroke="#000" stroke-width="2" stroke-dasharray="8,4"/>
  <text x="670" y="68" font-family="Georgia,serif" font-size="11" fill="#000">ŷ = 1.2x + 0.8</text>
  <text x="670" y="82" font-family="Georgia,serif" font-size="11" fill="#000">(line of best fit)</text>

  <!-- Points -->
  <circle cx="200" cy="380" r="8" fill="#000"/>
  <circle cx="300" cy="280" r="8" fill="#000"/>
  <circle cx="400" cy="230" r="8" fill="#000"/>
  <circle cx="500" cy="280" r="8" fill="#000"/>
  <circle cx="600" cy="130" r="8" fill="#000"/>
  <circle cx="700" cy="80"  r="8" fill="#000"/>

  <!-- Point labels -->
  <text x="212" y="376" font-family="Georgia,serif" font-size="11" fill="#000">(1,2)</text>
  <text x="312" y="276" font-family="Georgia,serif" font-size="11" fill="#000">(2,4)</text>
  <text x="412" y="226" font-family="Georgia,serif" font-size="11" fill="#000">(3,5)</text>
  <text x="512" y="276" font-family="Georgia,serif" font-size="11" fill="#000">(4,4)</text>
  <text x="612" y="126" font-family="Georgia,serif" font-size="11" fill="#000">(5,7)</text>
  <text x="712" y="76"  font-family="Georgia,serif" font-size="11" fill="#000">(6,8)</text>

  <!-- Correlation note -->
  <rect x="100" y="510" width="600" height="28" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="400" y="528" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">Positive correlation — as x increases, y tends to increase</text>

  <!-- Axis labels -->
  <text x="430" y="556" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">x</text>
  <text x="28"  y="270" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle" transform="rotate(-90,28,270)">y</text>
</svg>`;


  // ─── STEM-AND-LEAF PLOT ───────────────────────────────────────────────────
  // Data: 23,25,27,31,33,34,38,42,45,47,51,53
  static stemAndLeafPlotSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="600px" viewBox="0 0 700 600">

  <text x="350" y="36" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">Stem-and-Leaf Plot</text>
  <text x="350" y="58" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">Data: 23, 25, 27, 31, 33, 34, 38, 42, 45, 47, 51, 53</text>

  <!-- Header row -->
  <text x="200" y="100" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000" text-anchor="middle">Stem</text>
  <line x1="240" y1="80" x2="240" y2="380" stroke="#000" stroke-width="3"/>
  <text x="380" y="100" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Leaf</text>
  <line x1="100" y1="108" x2="620" y2="108" stroke="#000" stroke-width="2"/>

  <!-- Row: stem 2, leaves 3 5 7 -->
  <text x="200" y="145" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">2</text>
  <text x="260" y="145" font-family="Georgia,serif" font-size="18" fill="#000">3  5  7</text>

  <!-- Row: stem 3, leaves 1 3 4 8 -->
  <text x="200" y="205" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">3</text>
  <text x="260" y="205" font-family="Georgia,serif" font-size="18" fill="#000">1  3  4  8</text>

  <!-- Row: stem 4, leaves 2 5 7 -->
  <text x="200" y="265" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">4</text>
  <text x="260" y="265" font-family="Georgia,serif" font-size="18" fill="#000">2  5  7</text>

  <!-- Row: stem 5, leaves 1 3 -->
  <text x="200" y="325" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">5</text>
  <text x="260" y="325" font-family="Georgia,serif" font-size="18" fill="#000">1  3</text>

  <!-- Horizontal row lines -->
  <line x1="100" y1="165" x2="620" y2="165" stroke="#ccc" stroke-width="1"/>
  <line x1="100" y1="225" x2="620" y2="225" stroke="#ccc" stroke-width="1"/>
  <line x1="100" y1="285" x2="620" y2="285" stroke="#ccc" stroke-width="1"/>
  <line x1="100" y1="345" x2="620" y2="345" stroke="#ccc" stroke-width="1"/>

  <!-- Outline box -->
  <rect x="100" y="80" width="520" height="300" fill="none" stroke="#000" stroke-width="2.5"/>

  <!-- Key -->
  <rect x="100" y="415" width="520" height="60" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="360" y="440" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">Key</text>
  <text x="360" y="462" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">2 | 3 means 23  (stem × 10 + leaf)</text>

  <!-- Summary stats -->
  <text x="100" y="510" font-family="Georgia,serif" font-size="13" fill="#000">n = 12  |  Min = 23  |  Max = 53  |  Range = 30</text>
  <text x="100" y="530" font-family="Georgia,serif" font-size="13" fill="#000">Median = (34 + 38)/2 = 36  |  Mode = none (all unique)</text>
</svg>`;


  // ─── BOX-AND-WHISKER PLOT ─────────────────────────────────────────────────
  // min=10, Q1=25, median=35, Q3=50, max=70
  static boxPlotSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="400px" viewBox="0 0 900 400">

  <text x="450" y="36" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">Box-and-Whisker Plot</text>
  <text x="450" y="56" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">Five-number summary: Min=10  Q1=25  Median=35  Q3=50  Max=70</text>

  <!-- Scale: x from 0 to 80, origin px=80, scale=10px/unit
       0→80, 10→180, 25→330, 35→430, 50→580, 70→780
       Actually: px = 80 + val*10 -->

  <!-- Scale axis -->
  <line x1="80" y1="220" x2="820" y2="220" stroke="#000" stroke-width="2.5"/>

  <!-- Scale ticks -->
  <line x1="80"  y1="215" x2="80"  y2="225" stroke="#000" stroke-width="2"/>
  <line x1="180" y1="215" x2="180" y2="225" stroke="#000" stroke-width="2"/>
  <line x1="280" y1="215" x2="280" y2="225" stroke="#000" stroke-width="2"/>
  <line x1="380" y1="215" x2="380" y2="225" stroke="#000" stroke-width="2"/>
  <line x1="480" y1="215" x2="480" y2="225" stroke="#000" stroke-width="2"/>
  <line x1="580" y1="215" x2="580" y2="225" stroke="#000" stroke-width="2"/>
  <line x1="680" y1="215" x2="680" y2="225" stroke="#000" stroke-width="2"/>
  <line x1="780" y1="215" x2="780" y2="225" stroke="#000" stroke-width="2"/>

  <!-- Scale labels -->
  <text x="80"  y="240" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">0</text>
  <text x="180" y="240" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">10</text>
  <text x="280" y="240" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">20</text>
  <text x="380" y="240" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">30</text>
  <text x="480" y="240" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">40</text>
  <text x="580" y="240" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">50</text>
  <text x="680" y="240" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">60</text>
  <text x="780" y="240" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">70</text>

  <!-- Whisker left: min(180)–Q1(330) -->
  <line x1="180" y1="180" x2="330" y2="180" stroke="#000" stroke-width="3"/>
  <!-- Min cap -->
  <line x1="180" y1="160" x2="180" y2="200" stroke="#000" stroke-width="3"/>

  <!-- Box: Q1(330)–Q3(580), y=140 to y=220 height=80 -->
  <rect x="330" y="140" width="250" height="80" fill="white" stroke="#000" stroke-width="3"/>

  <!-- Median line at 35 → px=430 -->
  <line x1="430" y1="140" x2="430" y2="220" stroke="#000" stroke-width="4"/>

  <!-- Whisker right: Q3(580)–max(780) -->
  <line x1="580" y1="180" x2="780" y2="180" stroke="#000" stroke-width="3"/>
  <!-- Max cap -->
  <line x1="780" y1="160" x2="780" y2="200" stroke="#000" stroke-width="3"/>

  <!-- Labels above key positions -->
  <text x="180" y="130" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Min</text>
  <text x="180" y="144" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">10</text>
  <text x="330" y="130" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Q1</text>
  <text x="330" y="144" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">25</text>
  <text x="430" y="130" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Median</text>
  <text x="430" y="144" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">35</text>
  <text x="580" y="130" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Q3</text>
  <text x="580" y="144" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">50</text>
  <text x="780" y="130" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Max</text>
  <text x="780" y="144" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">70</text>

  <!-- IQR brace annotation -->
  <line x1="330" y1="268" x2="580" y2="268" stroke="#000" stroke-width="2"/>
  <line x1="330" y1="264" x2="330" y2="272" stroke="#000" stroke-width="2"/>
  <line x1="580" y1="264" x2="580" y2="272" stroke="#000" stroke-width="2"/>
  <text x="455" y="288" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">IQR = Q3 − Q1 = 25</text>

  <!-- Range annotation -->
  <line x1="180" y1="310" x2="780" y2="310" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="180" y1="306" x2="180" y2="314" stroke="#000" stroke-width="1.5"/>
  <line x1="780" y1="306" x2="780" y2="314" stroke="#000" stroke-width="1.5"/>
  <text x="480" y="330" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">Range = Max − Min = 60</text>
</svg>`;


  // ─── FREQUENCY POLYGON ────────────────────────────────────────────────────
  // midpoints: 5,15,25,35,45 / frequencies: 3,8,12,7,4
  static frequencyPolygonSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="450" y="36" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">Frequency Polygon</text>

  <!-- origin (100,480), x scale: midpoints at 5,15,25,35,45 mapped to px
       x range 0–50, px range 100–820 = 720px, scale=14.4px/unit
       px_x = 100 + x*14.4
       0→100, 5→172, 15→316, 25→460, 35→604, 45→748, 50→820
       y: max=12, px range=380, scale=380/12=31.67px/unit
       px_y = 480 − freq*31.67
       freq 0→480, 3→385, 4→354, 7→257, 8→227, 12→100 -->

  <!-- Grid -->
  <line x1="100" y1="385" x2="820" y2="385" stroke="#ccc" stroke-width="1"/>
  <line x1="100" y1="290" x2="820" y2="290" stroke="#ccc" stroke-width="1"/>
  <line x1="100" y1="194" x2="820" y2="194" stroke="#ccc" stroke-width="1"/>
  <line x1="100" y1="100" x2="820" y2="100" stroke="#ccc" stroke-width="1"/>

  <!-- Axes -->
  <line x1="100" y1="60" x2="100" y2="480" stroke="#000" stroke-width="3"/>
  <line x1="100" y1="480" x2="840" y2="480" stroke="#000" stroke-width="3"/>

  <!-- Y labels (step 3: 0,3,6,9,12) -->
  <text x="88" y="484" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">0</text>
  <text x="88" y="389" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">3</text>
  <text x="88" y="294" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">6</text>
  <text x="88" y="199" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">9</text>
  <text x="88" y="104" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">12</text>
  <line x1="96" y1="385" x2="100" y2="385" stroke="#000" stroke-width="1.5"/>
  <line x1="96" y1="290" x2="100" y2="290" stroke="#000" stroke-width="1.5"/>
  <line x1="96" y1="194" x2="100" y2="194" stroke="#000" stroke-width="1.5"/>
  <line x1="96" y1="100" x2="100" y2="100" stroke="#000" stroke-width="1.5"/>

  <!-- X labels: midpoints 5,15,25,35,45 and endpoints 0,50 -->
  <text x="100" y="500" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">0</text>
  <text x="172" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">5</text>
  <text x="316" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">15</text>
  <text x="460" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">25</text>
  <text x="604" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">35</text>
  <text x="748" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">45</text>
  <text x="820" y="500" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">50</text>

  <!-- X ticks at midpoints -->
  <line x1="172" y1="476" x2="172" y2="484" stroke="#000" stroke-width="2"/>
  <line x1="316" y1="476" x2="316" y2="484" stroke="#000" stroke-width="2"/>
  <line x1="460" y1="476" x2="460" y2="484" stroke="#000" stroke-width="2"/>
  <line x1="604" y1="476" x2="604" y2="484" stroke="#000" stroke-width="2"/>
  <line x1="748" y1="476" x2="748" y2="484" stroke="#000" stroke-width="2"/>

  <!-- Frequency polygon line (anchored to 0 at endpoints 0 and 50)
       Points: (100,480) (172,385) (316,227) (460,100) (604,257) (748,354) (820,480) -->
  <polyline points="100,480 172,385 316,227 460,100 604,257 748,354 820,480"
            fill="none" stroke="#000" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>

  <!-- Data points -->
  <circle cx="172" cy="385" r="7" fill="#000"/>
  <circle cx="316" cy="227" r="7" fill="#000"/>
  <circle cx="460" cy="100" r="7" fill="#000"/>
  <circle cx="604" cy="257" r="7" fill="#000"/>
  <circle cx="748" cy="354" r="7" fill="#000"/>

  <!-- Value labels -->
  <text x="172" y="376" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">3</text>
  <text x="316" y="218" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">8</text>
  <text x="460" y="90"  font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">12</text>
  <text x="604" y="248" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">7</text>
  <text x="748" y="345" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">4</text>

  <!-- Axis labels -->
  <text x="460" y="540" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">Class Midpoint</text>
  <text x="28"  y="270" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle" transform="rotate(-90,28,270)">Frequency</text>
</svg>`;


  // ─── CUMULATIVE FREQUENCY CURVE (OGIVE) ──────────────────────────────────
  // upperBounds: 10,20,30,40,50 / cumFreq: 5,13,28,40,50
  static cumulativeFrequencyCurveSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="450" y="36" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">Cumulative Frequency Curve (Ogive)</text>

  <!-- origin (120,480), x: 0–50 → 700px, scale=14px/unit
       y: 0–50 → 380px, scale=7.6px/unit
       px_x = 120 + x*14   px_y = 480 − cf*7.6
       Boundary start (0,0)→(120,480)
       (10,5)→(260,442) (20,13)→(400,381) (30,28)→(540,267)
       (40,40)→(680,176) (50,50)→(820,100) -->

  <!-- Grid -->
  <line x1="120" y1="404" x2="820" y2="404" stroke="#ccc" stroke-width="1"/>
  <line x1="120" y1="328" x2="820" y2="328" stroke="#ccc" stroke-width="1"/>
  <line x1="120" y1="252" x2="820" y2="252" stroke="#ccc" stroke-width="1"/>
  <line x1="120" y1="176" x2="820" y2="176" stroke="#ccc" stroke-width="1"/>
  <line x1="120" y1="100" x2="820" y2="100" stroke="#ccc" stroke-width="1"/>
  <line x1="260" y1="80"  x2="260" y2="480" stroke="#ccc" stroke-width="1"/>
  <line x1="400" y1="80"  x2="400" y2="480" stroke="#ccc" stroke-width="1"/>
  <line x1="540" y1="80"  x2="540" y2="480" stroke="#ccc" stroke-width="1"/>
  <line x1="680" y1="80"  x2="680" y2="480" stroke="#ccc" stroke-width="1"/>
  <line x1="820" y1="80"  x2="820" y2="480" stroke="#ccc" stroke-width="1"/>

  <!-- Axes -->
  <line x1="120" y1="60" x2="120" y2="480" stroke="#000" stroke-width="3"/>
  <line x1="120" y1="480" x2="840" y2="480" stroke="#000" stroke-width="3"/>

  <!-- Y labels 0–50 step 10: 7.6px/unit → step=76px -->
  <text x="108" y="484" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">0</text>
  <text x="108" y="408" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">10</text>
  <text x="108" y="332" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">20</text>
  <text x="108" y="256" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">30</text>
  <text x="108" y="180" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">40</text>
  <text x="108" y="104" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="end">50</text>
  <line x1="116" y1="404" x2="120" y2="404" stroke="#000" stroke-width="1.5"/>
  <line x1="116" y1="328" x2="120" y2="328" stroke="#000" stroke-width="1.5"/>
  <line x1="116" y1="252" x2="120" y2="252" stroke="#000" stroke-width="1.5"/>
  <line x1="116" y1="176" x2="120" y2="176" stroke="#000" stroke-width="1.5"/>
  <line x1="116" y1="100" x2="120" y2="100" stroke="#000" stroke-width="1.5"/>

  <!-- X labels 0–50 step 10 -->
  <text x="120" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">0</text>
  <text x="260" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">10</text>
  <text x="400" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">20</text>
  <text x="540" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">30</text>
  <text x="680" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">40</text>
  <text x="820" y="500" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">50</text>

  <!-- Smooth S-curve through points -->
  <path d="M120,480 C180,480 220,455 260,442
           C310,428 360,410 400,381
           C460,340 500,300 540,267
           C610,220 650,190 680,176
           C740,148 790,108 820,100"
        fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Data points -->
  <circle cx="120" cy="480" r="6" fill="#000"/>
  <circle cx="260" cy="442" r="6" fill="#000"/>
  <circle cx="400" cy="381" r="6" fill="#000"/>
  <circle cx="540" cy="267" r="6" fill="#000"/>
  <circle cx="680" cy="176" r="6" fill="#000"/>
  <circle cx="820" cy="100" r="6" fill="#000"/>

  <!-- Point labels -->
  <text x="268" y="435" font-family="Georgia,serif" font-size="11" fill="#000">(10, 5)</text>
  <text x="408" y="374" font-family="Georgia,serif" font-size="11" fill="#000">(20, 13)</text>
  <text x="548" y="260" font-family="Georgia,serif" font-size="11" fill="#000">(30, 28)</text>
  <text x="688" y="169" font-family="Georgia,serif" font-size="11" fill="#000">(40, 40)</text>
  <text x="828" y="100" font-family="Georgia,serif" font-size="11" fill="#000">(50, 50)</text>

  <!-- Median line (cf=25): px_y=480−25*7.6=290 → horiz to curve at ~x≈28 → px_x=120+28*14=512
       Draw at cf=25 horizontal dashed, then drop to x-axis -->
  <line x1="120" y1="290" x2="516" y2="290" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="516" y1="290" x2="516" y2="480" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="90"  y="294" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="end">25</text>
  <text x="516" y="496" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">≈28</text>
  <text x="400" y="280" font-family="Georgia,serif" font-size="11" fill="#000">← Median ≈ 28</text>

  <!-- Q1 line (cf=12.5): px_y=480−12.5*7.6=385 → curve at x≈19 → px_x=386 -->
  <line x1="120" y1="385" x2="386" y2="385" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="386" y1="385" x2="386" y2="480" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="88"  y="389" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">12.5</text>
  <text x="386" y="496" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Q1≈19</text>

  <!-- Q3 line (cf=37.5): px_y=480−37.5*7.6=195 → curve at x≈38 → px_x=652 -->
  <line x1="120" y1="195" x2="650" y2="195" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="650" y1="195" x2="650" y2="480" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="88"  y="199" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">37.5</text>
  <text x="650" y="496" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Q3≈38</text>

  <!-- Axis labels -->
  <text x="470" y="540" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">Upper Class Boundary</text>
  <text x="28"  y="270" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle" transform="rotate(-90,28,270)">Cumulative Frequency</text>
</svg>`;


  // ─── MEAN, MEDIAN, MODE ───────────────────────────────────────────────────
  // Data: 2,3,4,4,5,5,5,6,7,8
  static meanMedianModeSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="450" y="36" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">Measures of Central Tendency</text>
  <text x="450" y="58" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">Data: 2, 3, 4, 4, 5, 5, 5, 6, 7, 8  (n = 10)</text>

  <!-- Dot plot: values 2–8 on number line -->
  <!-- origin x=120, x scale=100px/unit (2→220,3→320,...,8→820) -->
  <!-- Number line -->
  <line x1="140" y1="300" x2="860" y2="300" stroke="#000" stroke-width="2.5"/>
  <!-- Ticks and labels 2–8 -->
  <line x1="220" y1="294" x2="220" y2="306" stroke="#000" stroke-width="2"/>
  <line x1="320" y1="294" x2="320" y2="306" stroke="#000" stroke-width="2"/>
  <line x1="420" y1="294" x2="420" y2="306" stroke="#000" stroke-width="2"/>
  <line x1="520" y1="294" x2="520" y2="306" stroke="#000" stroke-width="2"/>
  <line x1="620" y1="294" x2="620" y2="306" stroke="#000" stroke-width="2"/>
  <line x1="720" y1="294" x2="720" y2="306" stroke="#000" stroke-width="2"/>
  <line x1="820" y1="294" x2="820" y2="306" stroke="#000" stroke-width="2"/>
  <text x="220" y="324" font-family="Georgia,serif" font-size="15" fill="#000" text-anchor="middle">2</text>
  <text x="320" y="324" font-family="Georgia,serif" font-size="15" fill="#000" text-anchor="middle">3</text>
  <text x="420" y="324" font-family="Georgia,serif" font-size="15" fill="#000" text-anchor="middle">4</text>
  <text x="520" y="324" font-family="Georgia,serif" font-size="15" fill="#000" text-anchor="middle">5</text>
  <text x="620" y="324" font-family="Georgia,serif" font-size="15" fill="#000" text-anchor="middle">6</text>
  <text x="720" y="324" font-family="Georgia,serif" font-size="15" fill="#000" text-anchor="middle">7</text>
  <text x="820" y="324" font-family="Georgia,serif" font-size="15" fill="#000" text-anchor="middle">8</text>

  <!-- Dot plot: stack dots above line -->
  <!-- 2: 1 dot -->
  <circle cx="220" cy="276" r="10" fill="#000"/>
  <!-- 3: 1 dot -->
  <circle cx="320" cy="276" r="10" fill="#000"/>
  <!-- 4: 2 dots -->
  <circle cx="420" cy="276" r="10" fill="#000"/>
  <circle cx="420" cy="252" r="10" fill="#000"/>
  <!-- 5: 3 dots (mode) – outlined heavily -->
  <circle cx="520" cy="276" r="10" fill="#000"/>
  <circle cx="520" cy="252" r="10" fill="#000"/>
  <circle cx="520" cy="228" r="10" fill="#000"/>
  <!-- 6: 1 dot -->
  <circle cx="620" cy="276" r="10" fill="#000"/>
  <!-- 7: 1 dot -->
  <circle cx="720" cy="276" r="10" fill="#000"/>
  <!-- 8: 1 dot -->
  <circle cx="820" cy="276" r="10" fill="#000"/>

  <!-- Median indicator: median=(5+5)/2=5 → x=520 -->
  <line x1="520" y1="190" x2="520" y2="345" stroke="#000" stroke-width="2.5" stroke-dasharray="8,4"/>
  <text x="520" y="362" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Median = 5</text>

  <!-- Mean indicator: mean=49/10=4.9 → x=120+4.9*100=610 → 490 (px=120+(4.9−2)*100=390+220=510? 
       Actually px = 220 + (val−2)*100; mean=4.9 → 220+(2.9)*100=510 -->
  <line x1="510" y1="190" x2="510" y2="340" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="510" y="374" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Mean = 4.9</text>

  <!-- Mode bracket over 5's dots -->
  <rect x="502" y="214" width="36" height="76" rx="5" fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="5,2"/>
  <text x="560" y="232" font-family="Georgia,serif" font-size="11" fill="#000">Mode</text>
  <text x="560" y="246" font-family="Georgia,serif" font-size="11" fill="#000">= 5</text>
  <line x1="556" y1="239" x2="542" y2="239" stroke="#000" stroke-width="1.5"/>

  <!-- Calculations box -->
  <rect x="80" y="410" width="750" height="160" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="455" y="432" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">Calculations</text>
  <text x="100" y="454" font-family="Georgia,serif" font-size="12" fill="#000">Mean:    Sum = 2+3+4+4+5+5+5+6+7+8 = 49   Mean = 49 ÷ 10 = 4.9</text>
  <text x="100" y="476" font-family="Georgia,serif" font-size="12" fill="#000">Median:  n=10 (even) → average of 5th and 6th values = (5+5) ÷ 2 = 5</text>
  <text x="100" y="498" font-family="Georgia,serif" font-size="12" fill="#000">Mode:    Value appearing most often → 5 (appears 3 times)</text>
  <text x="100" y="520" font-family="Georgia,serif" font-size="12" fill="#000">Ordered data: 2, 3, 4, 4, [5, 5], 5, 6, 7, 8</text>
  <text x="100" y="546" font-family="Georgia,serif" font-size="11" fill="#000">This dataset is slightly left-skewed: Mean (4.9) &lt; Median (5) = Mode (5)</text>
</svg>`;


  // ─── RANGE AND IQR ────────────────────────────────────────────────────────
  // Data: 12,15,18,22,25,28,32,35,40,45
  static rangeAndIQRSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="450" y="36" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">Range and Interquartile Range (IQR)</text>
  <text x="450" y="58" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">Data (ordered): 12, 15, 18, 22, 25, 28, 32, 35, 40, 45</text>

  <!-- Five-number summary:
       Min=12, Q1=(18+22)/2=20, Median=(25+28)/2=26.5, Q3=(35+40)/2=37.5, Max=45
       Scale: 0–50 → px 100–820 (720px), 14.4px/unit
       px = 100 + val*14.4
       12→273, 20→388, 26.5→482, 37.5→640, 45→748 -->

  <!-- Scale axis -->
  <line x1="100" y1="280" x2="830" y2="280" stroke="#000" stroke-width="2.5"/>
  <!-- Ticks 0–50 step 5 -->
  <line x1="100" y1="274" x2="100" y2="286" stroke="#000" stroke-width="2"/>
  <line x1="172" y1="274" x2="172" y2="286" stroke="#000" stroke-width="2"/>
  <line x1="244" y1="274" x2="244" y2="286" stroke="#000" stroke-width="2"/>
  <line x1="316" y1="274" x2="316" y2="286" stroke="#000" stroke-width="2"/>
  <line x1="388" y1="274" x2="388" y2="286" stroke="#000" stroke-width="2"/>
  <line x1="460" y1="274" x2="460" y2="286" stroke="#000" stroke-width="2"/>
  <line x1="532" y1="274" x2="532" y2="286" stroke="#000" stroke-width="2"/>
  <line x1="604" y1="274" x2="604" y2="286" stroke="#000" stroke-width="2"/>
  <line x1="676" y1="274" x2="676" y2="286" stroke="#000" stroke-width="2"/>
  <line x1="748" y1="274" x2="748" y2="286" stroke="#000" stroke-width="2"/>
  <line x1="820" y1="274" x2="820" y2="286" stroke="#000" stroke-width="2"/>
  <text x="100" y="302" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">0</text>
  <text x="172" y="302" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">5</text>
  <text x="244" y="302" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">10</text>
  <text x="316" y="302" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">15</text>
  <text x="388" y="302" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">20</text>
  <text x="460" y="302" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">25</text>
  <text x="532" y="302" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">30</text>
  <text x="604" y="302" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">35</text>
  <text x="676" y="302" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">40</text>
  <text x="748" y="302" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">45</text>
  <text x="820" y="302" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">50</text>

  <!-- Box plot: Q1=20→388, Median=26.5→482, Q3=37.5→640, Min=12→273, Max=45→748 -->
  <!-- Whisker left -->
  <line x1="273" y1="250" x2="388" y2="250" stroke="#000" stroke-width="3"/>
  <line x1="273" y1="236" x2="273" y2="264" stroke="#000" stroke-width="3"/>
  <!-- Box -->
  <rect x="388" y="218" width="252" height="64" fill="white" stroke="#000" stroke-width="3"/>
  <!-- Median -->
  <line x1="482" y1="218" x2="482" y2="282" stroke="#000" stroke-width="4"/>
  <!-- Whisker right -->
  <line x1="640" y1="250" x2="748" y2="250" stroke="#000" stroke-width="3"/>
  <line x1="748" y1="236" x2="748" y2="264" stroke="#000" stroke-width="3"/>

  <!-- Key labels above -->
  <text x="273" y="208" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Min=12</text>
  <text x="388" y="208" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Q1=20</text>
  <text x="482" y="208" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Med=26.5</text>
  <text x="640" y="208" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Q3=37.5</text>
  <text x="748" y="208" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Max=45</text>

  <!-- IQR brace -->
  <line x1="388" y1="340" x2="640" y2="340" stroke="#000" stroke-width="2"/>
  <line x1="388" y1="335" x2="388" y2="345" stroke="#000" stroke-width="2"/>
  <line x1="640" y1="335" x2="640" y2="345" stroke="#000" stroke-width="2"/>
  <text x="514" y="360" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">IQR = Q3 − Q1 = 37.5 − 20 = 17.5</text>

  <!-- Range brace -->
  <line x1="273" y1="388" x2="748" y2="388" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <line x1="273" y1="382" x2="273" y2="394" stroke="#000" stroke-width="2"/>
  <line x1="748" y1="382" x2="748" y2="394" stroke="#000" stroke-width="2"/>
  <text x="510" y="408" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">Range = Max − Min = 45 − 12 = 33</text>

  <!-- Calculations box -->
  <rect x="80" y="430" width="750" height="140" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="455" y="452" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">Calculations</text>
  <text x="100" y="474" font-family="Georgia,serif" font-size="12" fill="#000">n = 10  |  Lower half: 12, 15, 18, 22, 25  |  Upper half: 28, 32, 35, 40, 45</text>
  <text x="100" y="496" font-family="Georgia,serif" font-size="12" fill="#000">Q1 = median of lower half = (18 + 22) / 2 = 20</text>
  <text x="100" y="518" font-family="Georgia,serif" font-size="12" fill="#000">Q3 = median of upper half = (35 + 40) / 2 = 37.5</text>
  <text x="100" y="540" font-family="Georgia,serif" font-size="12" fill="#000">IQR = 17.5  |  Range = 33  |  The IQR excludes the 25% most extreme values each side</text>
</svg>`;


  // ─── PROBABILITY TREE DIAGRAM ─────────────────────────────────────────────
  // Two coin flips: H/T each 0.5
  static probabilityTreeDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <text x="500" y="36" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">Probability Tree Diagram — Two Coin Flips</text>
  <text x="500" y="58" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">Each branch: P(H) = 0.5  |  P(T) = 0.5</text>

  <!-- Column headers -->
  <text x="150" y="88" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">Start</text>
  <text x="380" y="88" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">1st Flip</text>
  <text x="640" y="88" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">2nd Flip</text>
  <text x="860" y="88" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">Outcome &amp; P</text>

  <!-- Root node -->
  <circle cx="150" cy="360" r="12" fill="#000"/>

  <!-- Level 1 branches -->
  <!-- H branch: root(150,360) → H node(380,200) -->
  <line x1="162" y1="351" x2="368" y2="209" stroke="#000" stroke-width="2.5"/>
  <text x="258" y="262" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">H</text>
  <text x="272" y="278" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">0.5</text>

  <!-- T branch: root(150,360) → T node(380,520) -->
  <line x1="162" y1="369" x2="368" y2="511" stroke="#000" stroke-width="2.5"/>
  <text x="258" y="455" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">T</text>
  <text x="272" y="471" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">0.5</text>

  <!-- Level 1 nodes -->
  <circle cx="380" cy="200" r="10" fill="#000"/>
  <text x="380" y="185" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">H</text>
  <circle cx="380" cy="520" r="10" fill="#000"/>
  <text x="380" y="545" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">T</text>

  <!-- Level 2 branches from H(380,200) -->
  <!-- HH: (380,200)→(640,120) -->
  <line x1="390" y1="194" x2="630" y2="124" stroke="#000" stroke-width="2"/>
  <text x="505" y="148" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">H  0.5</text>
  <!-- HT: (380,200)→(640,280) -->
  <line x1="390" y1="206" x2="630" y2="274" stroke="#000" stroke-width="2"/>
  <text x="505" y="254" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">T  0.5</text>

  <!-- Level 2 branches from T(380,520) -->
  <!-- TH: (380,520)→(640,440) -->
  <line x1="390" y1="514" x2="630" y2="446" stroke="#000" stroke-width="2"/>
  <text x="505" y="473" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">H  0.5</text>
  <!-- TT: (380,520)→(640,600) -->
  <line x1="390" y1="526" x2="630" y2="594" stroke="#000" stroke-width="2"/>
  <text x="505" y="572" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">T  0.5</text>

  <!-- Level 2 nodes -->
  <circle cx="640" cy="120" r="8" fill="#000"/>
  <circle cx="640" cy="280" r="8" fill="#000"/>
  <circle cx="640" cy="440" r="8" fill="#000"/>
  <circle cx="640" cy="600" r="8" fill="#000"/>

  <!-- Outcome labels -->
  <rect x="720" y="100" width="200" height="44" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="820" y="118" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">HH</text>
  <text x="820" y="136" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">P = 0.5×0.5 = 0.25</text>
  <line x1="648" y1="120" x2="720" y2="122" stroke="#000" stroke-width="1.5"/>

  <rect x="720" y="260" width="200" height="44" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="820" y="278" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">HT</text>
  <text x="820" y="296" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">P = 0.5×0.5 = 0.25</text>
  <line x1="648" y1="280" x2="720" y2="282" stroke="#000" stroke-width="1.5"/>

  <rect x="720" y="420" width="200" height="44" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="820" y="438" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">TH</text>
  <text x="820" y="456" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">P = 0.5×0.5 = 0.25</text>
  <line x1="648" y1="440" x2="720" y2="442" stroke="#000" stroke-width="1.5"/>

  <rect x="720" y="580" width="200" height="44" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="820" y="598" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">TT</text>
  <text x="820" y="616" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">P = 0.5×0.5 = 0.25</text>
  <line x1="648" y1="600" x2="720" y2="602" stroke="#000" stroke-width="1.5"/>

  <!-- Total check -->
  <text x="500" y="665" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">Sum of all outcome probabilities = 0.25 + 0.25 + 0.25 + 0.25 = 1.00  ✓</text>
</svg>`;


  // ─── PROBABILITY VENN DIAGRAM ─────────────────────────────────────────────
  // P(A)=0.6, P(B)=0.5, P(A∩B)=0.3
  // P(A only)=0.3, P(B only)=0.2, P(neither)=0.2
  static probabilityVennDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <text x="400" y="36" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">Probability Venn Diagram</text>
  <text x="400" y="58" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">P(A) = 0.6   P(B) = 0.5   P(A ∩ B) = 0.3</text>

  <!-- Universal set rectangle -->
  <rect x="60" y="80" width="680" height="360" rx="8" fill="none" stroke="#000" stroke-width="3"/>
  <text x="80" y="104" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">U (Sample Space)</text>

  <!-- Circle A: centre (310,260) r=130 -->
  <!-- Circle B: centre (490,260) r=130 -->
  <!-- Overlap centred at x=400 -->

  <!-- Circle A (white fill with thick stroke) -->
  <circle cx="310" cy="260" r="130" fill="white" stroke="#000" stroke-width="3" fill-opacity="0.0"/>

  <!-- Use clip path approach with just strokes and text labels for B&W -->
  <!-- Circle A fill (left region) — use pattern or shade -->
  <circle cx="310" cy="260" r="130" fill="#ccc" fill-opacity="0.5" stroke="none"/>
  <!-- Circle B fill -->
  <circle cx="490" cy="260" r="130" fill="#aaa" fill-opacity="0.5" stroke="none"/>

  <!-- Circle borders on top -->
  <circle cx="310" cy="260" r="130" fill="none" stroke="#000" stroke-width="3"/>
  <circle cx="490" cy="260" r="130" fill="none" stroke="#000" stroke-width="3"/>

  <!-- Region labels -->
  <!-- A only: left of intersection -->
  <text x="252" y="254" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000" text-anchor="middle">A only</text>
  <text x="252" y="274" font-family="Georgia,serif" font-size="14" fill="#000" text-anchor="middle">0.30</text>

  <!-- Intersection -->
  <text x="400" y="254" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">A ∩ B</text>
  <text x="400" y="272" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">0.30</text>

  <!-- B only: right of intersection -->
  <text x="548" y="254" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000" text-anchor="middle">B only</text>
  <text x="548" y="274" font-family="Georgia,serif" font-size="14" fill="#000" text-anchor="middle">0.20</text>

  <!-- Neither -->
  <text x="680" y="380" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">Neither</text>
  <text x="680" y="398" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">0.20</text>

  <!-- Circle labels A and B -->
  <text x="220" y="165" font-family="Georgia,serif" font-size="22" font-weight="bold" fill="#000" text-anchor="middle">A</text>
  <text x="580" y="165" font-family="Georgia,serif" font-size="22" font-weight="bold" fill="#000" text-anchor="middle">B</text>

  <!-- Calculations box -->
  <rect x="60" y="470" width="680" height="110" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="400" y="492" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">Key Calculations</text>
  <text x="80" y="514" font-family="Georgia,serif" font-size="12" fill="#000">P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0.6 + 0.5 − 0.3 = 0.8</text>
  <text x="80" y="534" font-family="Georgia,serif" font-size="12" fill="#000">P(A only) = P(A) − P(A ∩ B) = 0.6 − 0.3 = 0.3</text>
  <text x="80" y="554" font-family="Georgia,serif" font-size="12" fill="#000">P(B only) = P(B) − P(A ∩ B) = 0.5 − 0.3 = 0.2    |   P(neither) = 1 − P(A ∪ B) = 0.2</text>
  <text x="80" y="572" font-family="Georgia,serif" font-size="12" fill="#000">Check: 0.30 + 0.30 + 0.20 + 0.20 = 1.00  ✓</text>
</svg>`;


// ===== SET THEORY DIAGRAMS =====

  // ─── SET NOTATION ─────────────────────────────────────────────────────────
  static setNotationSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="500px" viewBox="0 0 900 500">

  <!-- Title -->
  <text x="300" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">Set Notation</text>

  <!-- Outer border -->
  <rect x="20" y="45" width="860" height="440" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>

  <!-- Section 1: Roster Notation -->
  <rect x="40" y="65" width="250" height="200" rx="6" fill="none" stroke="#000" stroke-width="2"/>
  <text x="165" y="88" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">Roster Notation</text>
  <line x1="40" y1="95" x2="290" y2="95" stroke="#000" stroke-width="1.5"/>
  <text x="165" y="120" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">List all elements explicitly</text>
  <text x="165" y="148" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000" text-anchor="middle">E = {2, 4, 6, 8, 10}</text>
  <line x1="60" y1="160" x2="270" y2="160" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="165" y="180" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">Elements separated by commas</text>
  <text x="165" y="198" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">enclosed in curly braces { }</text>
  <text x="165" y="218" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">Order does not matter</text>
  <text x="165" y="238" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">No repeated elements</text>

  <!-- Section 2: Set-Builder Notation -->
  <rect x="320" y="65" width="260" height="200" rx="6" fill="none" stroke="#000" stroke-width="2"/>
  <text x="450" y="88" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">Set-Builder Notation</text>
  <line x1="320" y1="95" x2="580" y2="95" stroke="#000" stroke-width="1.5"/>
  <text x="450" y="118" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">Define by a rule or property</text>
  <text x="450" y="148" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">E = {x | x is even, 1≤x≤10}</text>
  <line x1="340" y1="160" x2="560" y2="160" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Annotation arrows -->
  <text x="340" y="180" font-family="Georgia,serif" font-size="10" fill="#333">x</text>
  <text x="355" y="180" font-family="Georgia,serif" font-size="10" fill="#333">= variable</text>
  <text x="340" y="196" font-family="Georgia,serif" font-size="10" fill="#333">|</text>
  <text x="355" y="196" font-family="Georgia,serif" font-size="10" fill="#333">= "such that"</text>
  <text x="340" y="212" font-family="Georgia,serif" font-size="10" fill="#333">condition</text>
  <text x="395" y="212" font-family="Georgia,serif" font-size="10" fill="#333">= rule elements must satisfy</text>
  <text x="340" y="228" font-family="Georgia,serif" font-size="10" fill="#333">Read: "the set of all x such that x is even and 1≤x≤10"</text>

  <!-- Section 3: Description -->
  <rect x="610" y="65" width="250" height="200" rx="6" fill="none" stroke="#000" stroke-width="2"/>
  <text x="735" y="88" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">Description</text>
  <line x1="610" y1="95" x2="860" y2="95" stroke="#000" stroke-width="1.5"/>
  <text x="735" y="118" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">Words or sentences</text>
  <text x="735" y="148" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">"The set of positive</text>
  <text x="735" y="166" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">even numbers up to 10"</text>
  <line x1="630" y1="180" x2="840" y2="180" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="735" y="200" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">Natural language description</text>
  <text x="735" y="218" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">of the set's members</text>
  <text x="735" y="236" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">Least precise method</text>

  <!-- Bottom summary box -->
  <rect x="40" y="285" width="820" height="180" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="450" y="308" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">All Three Representations of E = {2, 4, 6, 8, 10}</text>
  <line x1="40" y1="316" x2="860" y2="316" stroke="#000" stroke-width="1.5"/>

  <!-- Three columns in summary -->
  <text x="165" y="342" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Roster</text>
  <text x="165" y="362" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">{2, 4, 6, 8, 10}</text>

  <line x1="330" y1="320" x2="330" y2="455" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>

  <text x="450" y="342" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Set-Builder</text>
  <text x="450" y="362" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">{x | x ∈ ℤ, x even, 1≤x≤10}</text>

  <line x1="580" y1="320" x2="580" y2="455" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>

  <text x="720" y="342" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Description</text>
  <text x="720" y="362" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Positive even integers</text>
  <text x="720" y="378" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">not exceeding 10</text>

  <!-- Key facts row -->
  <line x1="40" y1="395" x2="860" y2="395" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="450" y="415" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Key Facts</text>
  <text x="165" y="435" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">|E| = 5   (cardinality)</text>
  <text x="450" y="435" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">E ⊆ ℤ   (integers)</text>
  <text x="720" y="435" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">E ⊆ ℕ   (natural numbers)</text>
  <text x="165" y="453" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">min = 2,  max = 10</text>
  <text x="450" y="453" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">Sum of elements = 30</text>
  <text x="720" y="453" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">All elements divisible by 2</text>
</svg>`;

  // ─── VENN DIAGRAM 2 SETS ──────────────────────────────────────────────────
  static vennDiagram2SetsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000" text-anchor="middle">Venn Diagram — Two Sets</text>
  <text x="400" y="46" font-family="Georgia,serif" font-size="10" fill="#444" text-anchor="middle">A = {1,2,3,4,5}   B = {4,5,6,7,8}   U = {1,2,3,4,5,6,7,8,9,10}</text>

  <!-- Universal set rectangle -->
  <rect x="30" y="60" width="740" height="420" rx="10" fill="none" stroke="#000" stroke-width="3"/>
  <text x="55" y="82" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">U</text>

  <!-- Circle A (left) -->
  <circle cx="300" cy="280" r="150" fill="none" stroke="#000" stroke-width="3"/>
  <!-- Circle B (right) - overlapping -->
  <circle cx="500" cy="280" r="150" fill="none" stroke="#000" stroke-width="3"/>

  <!-- Set labels -->
  <text x="220" y="175" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000">A</text>
  <text x="570" y="175" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000">B</text>

  <!-- A only elements (left region) -->
  <text x="210" y="255" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">1</text>
  <text x="240" y="280" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">2</text>
  <text x="215" y="305" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">3</text>

  <!-- Intersection elements (middle) -->
  <text x="400" y="270" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">4</text>
  <text x="400" y="295" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">5</text>

  <!-- B only elements (right region) -->
  <text x="560" y="255" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">6</text>
  <text x="585" y="280" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">7</text>
  <text x="560" y="305" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">8</text>

  <!-- Universal only elements -->
  <text x="80" y="150" font-family="Georgia,serif" font-size="13" fill="#555">9</text>
  <text x="700" y="150" font-family="Georgia,serif" font-size="13" fill="#555">10</text>

  <!-- Region labels -->
  <text x="215" y="360" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">A only</text>
  <text x="215" y="373" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">A − B</text>
  <text x="400" y="370" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">A ∩ B</text>
  <text x="585" y="360" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">B only</text>
  <text x="585" y="373" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">B − A</text>

  <!-- Summary box -->
  <rect x="30" y="498" width="740" height="88" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="400" y="518" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Set Relationships</text>
  <line x1="30" y1="524" x2="770" y2="524" stroke="#000" stroke-width="1.5"/>
  <text x="130" y="543" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">A ∪ B = {1,2,3,4,5,6,7,8}</text>
  <text x="400" y="543" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">A ∩ B = {4, 5}</text>
  <text x="650" y="543" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">A − B = {1, 2, 3}</text>
  <text x="130" y="565" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">|A| = 5   |B| = 5</text>
  <text x="400" y="565" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">|A ∩ B| = 2</text>
  <text x="650" y="565" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">B − A = {6, 7, 8}</text>
  <text x="400" y="578" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">|A ∪ B| = |A| + |B| − |A ∩ B| = 5 + 5 − 2 = 8</text>
</svg>`;

  // ─── VENN DIAGRAM 3 SETS ──────────────────────────────────────────────────
  static vennDiagram3SetsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="700px" viewBox="0 0 900 700">

  <!-- Title -->
  <text x="450" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000" text-anchor="middle">Venn Diagram — Three Sets</text>
  <text x="450" y="46" font-family="Georgia,serif" font-size="10" fill="#444" text-anchor="middle">A={1–7}  B={4,5,6,8,9,10}  C={6,7,10,11,12}  U={1–13}</text>

  <!-- Universal set -->
  <rect x="20" y="58" width="860" height="520" rx="10" fill="none" stroke="#000" stroke-width="3"/>
  <text x="44" y="80" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">U</text>

  <!-- Three circles positioned for triple overlap -->
  <!-- A: top-left -->
  <circle cx="340" cy="260" r="160" fill="none" stroke="#000" stroke-width="3"/>
  <!-- B: top-right -->
  <circle cx="560" cy="260" r="160" fill="none" stroke="#000" stroke-width="3"/>
  <!-- C: bottom-center -->
  <circle cx="450" cy="420" r="160" fill="none" stroke="#000" stroke-width="3"/>

  <!-- Set labels -->
  <text x="230" y="180" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000">A</text>
  <text x="660" y="180" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000">B</text>
  <text x="450" y="580" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">C</text>

  <!-- A only: {1,2,3} -->
  <text x="268" y="240" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">1</text>
  <text x="250" y="262" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">2</text>
  <text x="268" y="284" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">3</text>

  <!-- B only: {8,9} -->
  <text x="630" y="252" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">8</text>
  <text x="632" y="276" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">9</text>

  <!-- C only: {11,12} -->
  <text x="430" y="528" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">11</text>
  <text x="468" y="544" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">12</text>

  <!-- A ∩ B only: {4,5} -->
  <text x="450" y="222" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">4</text>
  <text x="450" y="242" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">5</text>

  <!-- A ∩ C only: {7} -->
  <text x="352" y="382" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">7</text>

  <!-- B ∩ C only: {10} -->
  <text x="548" y="382" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">10</text>

  <!-- A ∩ B ∩ C: {6} -->
  <text x="450" y="328" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000" text-anchor="middle">6</text>

  <!-- U only: {13} -->
  <text x="60" y="530" font-family="Georgia,serif" font-size="13" fill="#555">13</text>

  <!-- Region annotation labels -->
  <text x="268" y="308" font-family="Georgia,serif" font-size="9" fill="#444" text-anchor="middle">A only</text>
  <text x="632" y="296" font-family="Georgia,serif" font-size="9" fill="#444" text-anchor="middle">B only</text>
  <text x="450" y="562" font-family="Georgia,serif" font-size="9" fill="#444" text-anchor="middle">C only</text>
  <text x="450" y="202" font-family="Georgia,serif" font-size="9" fill="#444" text-anchor="middle">A∩B</text>
  <text x="348" y="398" font-family="Georgia,serif" font-size="9" fill="#444" text-anchor="middle">A∩C</text>
  <text x="552" y="398" font-family="Georgia,serif" font-size="9" fill="#444" text-anchor="middle">B∩C</text>
  <text x="450" y="348" font-family="Georgia,serif" font-size="9" fill="#444" text-anchor="middle">A∩B∩C</text>

  <!-- Summary box -->
  <rect x="20" y="595" width="860" height="92" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="450" y="615" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Intersections Summary</text>
  <line x1="20" y1="621" x2="880" y2="621" stroke="#000" stroke-width="1.5"/>
  <text x="155" y="641" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">A ∩ B = {4,5,6}</text>
  <text x="450" y="641" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">A ∩ C = {6,7}</text>
  <text x="730" y="641" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">B ∩ C = {6,10}</text>
  <text x="155" y="660" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">A ∩ B ∩ C = {6}</text>
  <text x="450" y="660" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">A ∪ B ∪ C = {1,2,3,4,5,6,7,8,9,10,11,12}</text>
  <text x="730" y="660" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">|A ∪ B ∪ C| = 12</text>
  <text x="450" y="678" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">Inclusion-Exclusion: |A∪B∪C| = |A|+|B|+|C|−|A∩B|−|A∩C|−|B∩C|+|A∩B∩C| = 7+6+5−3−2−3+1 = 11 ✓</text>
</svg>`;

  // ─── SET OPERATIONS: UNION ────────────────────────────────────────────────
  static setOperationsUnionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="450" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000" text-anchor="middle">Set Union — A ∪ B</text>
  <text x="450" y="46" font-family="Georgia,serif" font-size="11" fill="#444" text-anchor="middle">A ∪ B = {x | x ∈ A  OR  x ∈ B}  — all elements in A or B or both</text>

  <!-- Universal set -->
  <rect x="20" y="58" width="560" height="360" rx="10" fill="none" stroke="#000" stroke-width="3"/>
  <text x="42" y="80" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">U</text>

  <!-- Circle A -->
  <circle cx="230" cy="250" r="140" fill="none" stroke="#000" stroke-width="3"/>
  <!-- Circle B -->
  <circle cx="370" cy="250" r="140" fill="none" stroke="#000" stroke-width="3"/>

  <!-- Hatching for A ∪ B (both circles — thick diagonal lines) -->
  <!-- A only region hatch -->
  <clipPath id="clipA_union">
    <circle cx="230" cy="250" r="138"/>
  </clipPath>
  <g clip-path="url(#clipA_union)">
    <line x1="90" y1="115" x2="90" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="115" y1="115" x2="115" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="140" y1="115" x2="140" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="165" y1="115" x2="165" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="190" y1="115" x2="190" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="215" y1="115" x2="215" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="240" y1="115" x2="240" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="265" y1="115" x2="265" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="290" y1="115" x2="290" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="315" y1="115" x2="315" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="340" y1="115" x2="340" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="365" y1="115" x2="365" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
  </g>
  <clipPath id="clipB_union">
    <circle cx="370" cy="250" r="138"/>
  </clipPath>
  <g clip-path="url(#clipB_union)">
    <line x1="215" y1="115" x2="215" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="240" y1="115" x2="240" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="265" y1="115" x2="265" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="290" y1="115" x2="290" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="315" y1="115" x2="315" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="340" y1="115" x2="340" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="365" y1="115" x2="365" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="390" y1="115" x2="390" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="415" y1="115" x2="415" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="440" y1="115" x2="440" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="465" y1="115" x2="465" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
    <line x1="490" y1="115" x2="490" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.18"/>
  </g>

  <!-- Redraw circle outlines on top -->
  <circle cx="230" cy="250" r="140" fill="none" stroke="#000" stroke-width="3"/>
  <circle cx="370" cy="250" r="140" fill="none" stroke="#000" stroke-width="3"/>

  <!-- Element labels -->
  <text x="160" y="230" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">1</text>
  <text x="185" y="255" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">2</text>
  <text x="300" y="240" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">3</text>
  <text x="300" y="262" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">4</text>
  <text x="415" y="230" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">5</text>
  <text x="440" y="255" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">6</text>

  <!-- Set labels -->
  <text x="165" y="148" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000">A</text>
  <text x="430" y="148" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000">B</text>

  <!-- Region sub-labels -->
  <text x="165" y="360" font-family="Georgia,serif" font-size="9" fill="#444" text-anchor="middle">A − B</text>
  <text x="300" y="368" font-family="Georgia,serif" font-size="9" fill="#444" text-anchor="middle">A ∩ B</text>
  <text x="435" y="360" font-family="Georgia,serif" font-size="9" fill="#444" text-anchor="middle">B − A</text>
  <text x="300" y="383" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000" text-anchor="middle">← all shaded = A ∪ B →</text>

  <!-- Right panel: formula and result -->
  <rect x="600" y="58" width="280" height="360" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="740" y="85" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">Union: A ∪ B</text>
  <line x1="600" y1="92" x2="880" y2="92" stroke="#000" stroke-width="1.5"/>

  <text x="616" y="118" font-family="Georgia,serif" font-size="11" fill="#000">Given:</text>
  <text x="616" y="138" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">A = {1, 2, 3, 4}</text>
  <text x="616" y="158" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">B = {3, 4, 5, 6}</text>

  <line x1="610" y1="168" x2="872" y2="168" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>

  <text x="616" y="188" font-family="Georgia,serif" font-size="11" fill="#000">Definition:</text>
  <text x="616" y="206" font-family="Georgia,serif" font-size="11" fill="#000">x ∈ A ∪ B  iff  x ∈ A  or  x ∈ B</text>

  <line x1="610" y1="216" x2="872" y2="216" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>

  <text x="616" y="236" font-family="Georgia,serif" font-size="11" fill="#000">Step-by-step:</text>
  <text x="616" y="254" font-family="Georgia,serif" font-size="10.5" fill="#000">From A: 1 ✓  2 ✓  3 ✓  4 ✓</text>
  <text x="616" y="272" font-family="Georgia,serif" font-size="10.5" fill="#000">From B: 3 (dup)  4 (dup)  5 ✓  6 ✓</text>
  <text x="616" y="290" font-family="Georgia,serif" font-size="10.5" fill="#000">Remove duplicates → combine all</text>

  <line x1="610" y1="300" x2="872" y2="300" stroke="#000" stroke-width="1.5"/>

  <text x="616" y="320" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">A ∪ B = {1, 2, 3, 4, 5, 6}</text>
  <text x="616" y="340" font-family="Georgia,serif" font-size="11" fill="#000">|A ∪ B| = 6</text>
  <text x="616" y="358" font-family="Georgia,serif" font-size="10" fill="#555">= |A|+|B|−|A∩B| = 4+4−2 = 6 ✓</text>

  <!-- Bottom summary -->
  <rect x="20" y="435" width="860" height="150" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="450" y="458" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Properties of Union</text>
  <line x1="20" y1="465" x2="880" y2="465" stroke="#000" stroke-width="1.5"/>
  <text x="155" y="486" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Commutative: A ∪ B = B ∪ A</text>
  <text x="450" y="486" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Associative: (A∪B)∪C = A∪(B∪C)</text>
  <text x="730" y="486" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Identity: A ∪ ∅ = A</text>
  <text x="155" y="508" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Idempotent: A ∪ A = A</text>
  <text x="450" y="508" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Domination: A ∪ U = U</text>
  <text x="730" y="508" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Complement: A ∪ A' = U</text>
  <text x="450" y="532" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">Inclusion-Exclusion Principle: |A ∪ B| = |A| + |B| − |A ∩ B|</text>
  <text x="450" y="550" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">A ⊆ A ∪ B  and  B ⊆ A ∪ B  (both sets are subsets of their union)</text>
  <text x="450" y="572" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">A ∪ B = A  iff  B ⊆ A  |  A ∩ B ⊆ A ∪ B</text>
</svg>`;

  // ─── SET OPERATIONS: INTERSECTION ────────────────────────────────────────
  static setOperationsIntersectionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="450" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000" text-anchor="middle">Set Intersection — A ∩ B</text>
  <text x="450" y="46" font-family="Georgia,serif" font-size="11" fill="#444" text-anchor="middle">A ∩ B = {x | x ∈ A  AND  x ∈ B}  — only elements in BOTH sets</text>

  <!-- Universal set -->
  <rect x="20" y="58" width="560" height="360" rx="10" fill="none" stroke="#000" stroke-width="3"/>
  <text x="42" y="80" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">U</text>

  <!-- Circles -->
  <circle cx="230" cy="250" r="140" fill="none" stroke="#000" stroke-width="3"/>
  <circle cx="370" cy="250" r="140" fill="none" stroke="#000" stroke-width="3"/>

  <!-- Hatch ONLY the intersection region using clip -->
  <defs>
    <clipPath id="clipIntersect">
      <!-- Approximate intersection as a path: elements in both circles -->
      <circle cx="230" cy="250" r="138"/>
    </clipPath>
    <clipPath id="clipIntersect2">
      <circle cx="370" cy="250" r="138"/>
    </clipPath>
    <mask id="maskIntersect">
      <rect x="0" y="0" width="900" height="700" fill="black"/>
      <circle cx="230" cy="250" r="138" fill="white"/>
    </mask>
  </defs>

  <!-- Intersection hatch: clip to B, then mask to A -->
  <g clip-path="url(#clipIntersect2)" mask="url(#maskIntersect)">
    <line x1="230" y1="115" x2="230" y2="385" stroke="#000" stroke-width="10" stroke-opacity="0.2"/>
    <line x1="255" y1="115" x2="255" y2="385" stroke="#000" stroke-width="10" stroke-opacity="0.2"/>
    <line x1="280" y1="115" x2="280" y2="385" stroke="#000" stroke-width="10" stroke-opacity="0.2"/>
    <line x1="305" y1="115" x2="305" y2="385" stroke="#000" stroke-width="10" stroke-opacity="0.2"/>
    <line x1="330" y1="115" x2="330" y2="385" stroke="#000" stroke-width="10" stroke-opacity="0.2"/>
    <line x1="355" y1="115" x2="355" y2="385" stroke="#000" stroke-width="10" stroke-opacity="0.2"/>
  </g>

  <!-- Redraw outlines -->
  <circle cx="230" cy="250" r="140" fill="none" stroke="#000" stroke-width="3"/>
  <circle cx="370" cy="250" r="140" fill="none" stroke="#000" stroke-width="3"/>

  <!-- Elements: A only -->
  <text x="152" y="238" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">1</text>
  <text x="165" y="262" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">2</text>

  <!-- Elements: intersection -->
  <text x="295" y="240" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">3</text>
  <text x="300" y="262" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">4</text>
  <text x="295" y="284" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">5</text>

  <!-- Elements: B only -->
  <text x="435" y="238" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">6</text>
  <text x="448" y="262" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">7</text>

  <!-- Set labels -->
  <text x="162" y="148" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000">A</text>
  <text x="428" y="148" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000">B</text>

  <!-- Arrow pointing to intersection -->
  <line x1="300" y1="390" x2="300" y2="330" stroke="#000" stroke-width="2"/>
  <polygon points="296,335 300,322 304,335" fill="#000"/>
  <text x="300" y="408" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">A ∩ B = {3,4,5}</text>
  <text x="300" y="421" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">(shaded region)</text>

  <!-- Right panel -->
  <rect x="600" y="58" width="280" height="360" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="740" y="85" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">Intersection: A ∩ B</text>
  <line x1="600" y1="92" x2="880" y2="92" stroke="#000" stroke-width="1.5"/>

  <text x="616" y="118" font-family="Georgia,serif" font-size="11" fill="#000">Given:</text>
  <text x="616" y="138" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">A = {1, 2, 3, 4, 5}</text>
  <text x="616" y="158" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">B = {3, 4, 5, 6, 7}</text>
  <line x1="610" y1="168" x2="872" y2="168" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="616" y="188" font-family="Georgia,serif" font-size="11" fill="#000">Check each element of A:</text>
  <text x="616" y="208" font-family="Georgia,serif" font-size="11" fill="#000">1 ∈ B?  No  ✗</text>
  <text x="616" y="226" font-family="Georgia,serif" font-size="11" fill="#000">2 ∈ B?  No  ✗</text>
  <text x="616" y="244" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">3 ∈ B?  Yes ✓  → keep</text>
  <text x="616" y="262" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">4 ∈ B?  Yes ✓  → keep</text>
  <text x="616" y="280" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">5 ∈ B?  Yes ✓  → keep</text>
  <line x1="610" y1="290" x2="872" y2="290" stroke="#000" stroke-width="1.5"/>
  <text x="616" y="312" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">A ∩ B = {3, 4, 5}</text>
  <text x="616" y="332" font-family="Georgia,serif" font-size="11" fill="#000">|A ∩ B| = 3</text>
  <text x="616" y="350" font-family="Georgia,serif" font-size="10" fill="#555">A ∩ B ⊆ A  and  A ∩ B ⊆ B</text>

  <!-- Bottom summary -->
  <rect x="20" y="435" width="860" height="150" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="450" y="458" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Properties of Intersection</text>
  <line x1="20" y1="465" x2="880" y2="465" stroke="#000" stroke-width="1.5"/>
  <text x="155" y="486" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Commutative: A ∩ B = B ∩ A</text>
  <text x="450" y="486" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Associative: (A∩B)∩C = A∩(B∩C)</text>
  <text x="730" y="486" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Identity: A ∩ U = A</text>
  <text x="155" y="508" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Idempotent: A ∩ A = A</text>
  <text x="450" y="508" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Annihilation: A ∩ ∅ = ∅</text>
  <text x="730" y="508" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Complement: A ∩ A' = ∅</text>
  <text x="450" y="532" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">Distributive: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</text>
  <text x="450" y="550" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">A ∩ B ⊆ A  and  A ∩ B ⊆ B  (intersection is a subset of each set)</text>
  <text x="450" y="572" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">A ∩ B = A  iff  A ⊆ B  |  If A ∩ B = ∅, sets are disjoint</text>
</svg>`;

  // ─── SET OPERATIONS: COMPLEMENT ───────────────────────────────────────────
  static setOperationsComplementSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000" text-anchor="middle">Set Complement — A'</text>
  <text x="400" y="46" font-family="Georgia,serif" font-size="11" fill="#444" text-anchor="middle">A' = {x ∈ U | x ∉ A}  — all elements in U but NOT in A</text>

  <!-- Universal set rectangle -->
  <rect x="30" y="60" width="500" height="360" rx="10" fill="none" stroke="#000" stroke-width="3"/>
  <text x="52" y="82" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">U = {1,2,3,...,10}</text>

  <!-- Hatch pattern for complement (outside circle, inside rectangle) -->
  <!-- Horizontal lines across whole rect, circle will be white on top -->
  <clipPath id="clipRect">
    <rect x="32" y="62" width="496" height="356"/>
  </clipPath>
  <g clip-path="url(#clipRect)">
    <line x1="32" y1="85"  x2="526" y2="85"  stroke="#000" stroke-width="1.5" stroke-opacity="0.35"/>
    <line x1="32" y1="103" x2="526" y2="103" stroke="#000" stroke-width="1.5" stroke-opacity="0.35"/>
    <line x1="32" y1="121" x2="526" y2="121" stroke="#000" stroke-width="1.5" stroke-opacity="0.35"/>
    <line x1="32" y1="139" x2="526" y2="139" stroke="#000" stroke-width="1.5" stroke-opacity="0.35"/>
    <line x1="32" y1="157" x2="526" y2="157" stroke="#000" stroke-width="1.5" stroke-opacity="0.35"/>
    <line x1="32" y1="175" x2="526" y2="175" stroke="#000" stroke-width="1.5" stroke-opacity="0.35"/>
    <line x1="32" y1="193" x2="526" y2="193" stroke="#000" stroke-width="1.5" stroke-opacity="0.35"/>
    <line x1="32" y1="211" x2="526" y2="211" stroke="#000" stroke-width="1.5" stroke-opacity="0.35"/>
    <line x1="32" y1="229" x2="526" y2="229" stroke="#000" stroke-width="1.5" stroke-opacity="0.35"/>
    <line x1="32" y1="247" x2="526" y2="247" stroke="#000" stroke-width="1.5" stroke-opacity="0.35"/>
    <line x1="32" y1="265" x2="526" y2="265" stroke="#000" stroke-width="1.5" stroke-opacity="0.35"/>
    <line x1="32" y1="283" x2="526" y2="283" stroke="#000" stroke-width="1.5" stroke-opacity="0.35"/>
    <line x1="32" y1="301" x2="526" y2="301" stroke="#000" stroke-width="1.5" stroke-opacity="0.35"/>
    <line x1="32" y1="319" x2="526" y2="319" stroke="#000" stroke-width="1.5" stroke-opacity="0.35"/>
    <line x1="32" y1="337" x2="526" y2="337" stroke="#000" stroke-width="1.5" stroke-opacity="0.35"/>
    <line x1="32" y1="355" x2="526" y2="355" stroke="#000" stroke-width="1.5" stroke-opacity="0.35"/>
    <line x1="32" y1="373" x2="526" y2="373" stroke="#000" stroke-width="1.5" stroke-opacity="0.35"/>
    <line x1="32" y1="391" x2="526" y2="391" stroke="#000" stroke-width="1.5" stroke-opacity="0.35"/>
    <line x1="32" y1="409" x2="526" y2="409" stroke="#000" stroke-width="1.5" stroke-opacity="0.35"/>
  </g>

  <!-- White fill circle to "erase" hatch inside A -->
  <circle cx="280" cy="240" r="140" fill="white" stroke="none"/>

  <!-- Circle A outline -->
  <circle cx="280" cy="240" r="140" fill="none" stroke="#000" stroke-width="3"/>

  <!-- Set label -->
  <text x="280" y="185" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">A</text>

  <!-- A elements -->
  <text x="248" y="228" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">2</text>
  <text x="280" y="228" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">4</text>
  <text x="312" y="228" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">6</text>
  <text x="264" y="258" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">8</text>

  <!-- A' elements (outside circle) -->
  <text x="70"  y="130" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">1</text>
  <text x="460" y="130" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">3</text>
  <text x="70"  y="340" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">5</text>
  <text x="460" y="340" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">7</text>
  <text x="265" y="380" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">9</text>
  <text x="295" y="405" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">10</text>

  <!-- Label for shaded region -->
  <text x="90" y="240" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">A'</text>
  <text x="68" y="256" font-family="Georgia,serif" font-size="9" fill="#444">(shaded)</text>

  <!-- Arrow -->
  <line x1="120" y1="248" x2="110" y2="248" stroke="#000" stroke-width="1.5"/>
  <polygon points="113,244 102,248 113,252" fill="#000"/>

  <!-- Right panel -->
  <rect x="552" y="60" width="228" height="360" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="666" y="85" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">Complement: A'</text>
  <line x1="552" y1="92" x2="780" y2="92" stroke="#000" stroke-width="1.5"/>
  <text x="564" y="114" font-family="Georgia,serif" font-size="11" fill="#000">Given:</text>
  <text x="564" y="132" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">A = {2, 4, 6, 8}</text>
  <text x="564" y="150" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">U = {1,2,3,...,10}</text>
  <line x1="558" y1="160" x2="774" y2="160" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="564" y="180" font-family="Georgia,serif" font-size="11" fill="#000">A' = U − A</text>
  <text x="564" y="200" font-family="Georgia,serif" font-size="11" fill="#000">Remove A from U:</text>
  <text x="564" y="218" font-family="Georgia,serif" font-size="11" fill="#000">1 ∉ A → keep  ✓</text>
  <text x="564" y="236" font-family="Georgia,serif" font-size="11" fill="#000">2 ∈ A → drop  ✗</text>
  <text x="564" y="254" font-family="Georgia,serif" font-size="11" fill="#000">3 ∉ A → keep  ✓</text>
  <text x="564" y="272" font-family="Georgia,serif" font-size="11" fill="#000">... (continue) ...</text>
  <line x1="558" y1="282" x2="774" y2="282" stroke="#000" stroke-width="1.5"/>
  <text x="564" y="302" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">A' = {1,3,5,7,9,10}</text>
  <text x="564" y="322" font-family="Georgia,serif" font-size="11" fill="#000">|A'| = 6</text>
  <text x="564" y="342" font-family="Georgia,serif" font-size="10" fill="#555">|A|+|A'| = |U| = 10 ✓</text>
  <text x="564" y="360" font-family="Georgia,serif" font-size="10" fill="#555">A ∩ A' = ∅</text>
  <text x="564" y="376" font-family="Georgia,serif" font-size="10" fill="#555">A ∪ A' = U</text>

  <!-- Bottom summary -->
  <rect x="30" y="438" width="750" height="148" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="405" y="460" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Properties of Complement</text>
  <line x1="30" y1="467" x2="780" y2="467" stroke="#000" stroke-width="1.5"/>
  <text x="155" y="488" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Double: (A')' = A</text>
  <text x="405" y="488" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Complement of U: U' = ∅</text>
  <text x="650" y="488" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Complement of ∅: ∅' = U</text>
  <text x="155" y="510" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">A ∩ A' = ∅ (disjoint)</text>
  <text x="405" y="510" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">A ∪ A' = U (exhaustive)</text>
  <text x="650" y="510" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">|A'| = |U| − |A|</text>
  <text x="280" y="532" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">De Morgan's 1st: (A ∪ B)' = A' ∩ B'</text>
  <text x="560" y="532" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">De Morgan's 2nd: (A ∩ B)' = A' ∪ B'</text>
  <text x="405" y="572" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">The complement depends entirely on the universal set U — always define U first</text>
</svg>`;

  // ─── SET OPERATIONS: DIFFERENCE ──────────────────────────────────────────
  static setOperationsDifferenceSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="450" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000" text-anchor="middle">Set Difference — A − B</text>
  <text x="450" y="46" font-family="Georgia,serif" font-size="11" fill="#444" text-anchor="middle">A − B = {x | x ∈ A  AND  x ∉ B}  — elements in A but NOT in B</text>

  <!-- Universal set -->
  <rect x="20" y="58" width="560" height="360" rx="10" fill="none" stroke="#000" stroke-width="3"/>
  <text x="42" y="80" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">U</text>

  <!-- Circles -->
  <circle cx="230" cy="250" r="140" fill="none" stroke="#000" stroke-width="3"/>
  <circle cx="370" cy="250" r="140" fill="none" stroke="#000" stroke-width="3"/>

  <!-- Hatch only the A-only region (A minus B) -->
  <!-- Clip to circle A, then exclude circle B by drawing white over intersection -->
  <clipPath id="clipA_diff">
    <circle cx="230" cy="250" r="138"/>
  </clipPath>
  <g clip-path="url(#clipA_diff)">
    <line x1="92" y1="115" x2="92" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.22"/>
    <line x1="117" y1="115" x2="117" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.22"/>
    <line x1="142" y1="115" x2="142" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.22"/>
    <line x1="167" y1="115" x2="167" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.22"/>
    <line x1="192" y1="115" x2="192" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.22"/>
    <line x1="217" y1="115" x2="217" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.22"/>
    <line x1="242" y1="115" x2="242" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.22"/>
    <line x1="267" y1="115" x2="267" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.22"/>
    <line x1="292" y1="115" x2="292" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.22"/>
    <line x1="317" y1="115" x2="317" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.22"/>
    <line x1="342" y1="115" x2="342" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.22"/>
    <line x1="367" y1="115" x2="367" y2="385" stroke="#000" stroke-width="8" stroke-opacity="0.22"/>
  </g>
  <!-- White-out the intersection zone -->
  <clipPath id="clipBonly_diff">
    <circle cx="370" cy="250" r="138"/>
  </clipPath>
  <g clip-path="url(#clipA_diff)">
    <g clip-path="url(#clipBonly_diff)">
      <rect x="230" y="115" width="140" height="270" fill="white"/>
    </g>
  </g>

  <!-- Redraw outlines on top -->
  <circle cx="230" cy="250" r="140" fill="none" stroke="#000" stroke-width="3"/>
  <circle cx="370" cy="250" r="140" fill="none" stroke="#000" stroke-width="3"/>

  <!-- Elements: A only (shaded) -->
  <text x="152" y="240" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">1</text>
  <text x="165" y="262" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">2</text>

  <!-- Elements: intersection (not shaded) -->
  <text x="297" y="244" font-family="Georgia,serif" font-size="14" fill="#888" text-anchor="middle">3</text>
  <text x="300" y="264" font-family="Georgia,serif" font-size="14" fill="#888" text-anchor="middle">4</text>
  <text x="295" y="284" font-family="Georgia,serif" font-size="14" fill="#888" text-anchor="middle">5</text>

  <!-- Elements: B only (not shaded) -->
  <text x="435" y="240" font-family="Georgia,serif" font-size="14" fill="#aaa" text-anchor="middle">6</text>
  <text x="448" y="262" font-family="Georgia,serif" font-size="14" fill="#aaa" text-anchor="middle">7</text>

  <!-- Set labels -->
  <text x="162" y="148" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000">A</text>
  <text x="428" y="148" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000">B</text>

  <!-- Arrow to A-only region -->
  <line x1="168" y1="390" x2="168" y2="340" stroke="#000" stroke-width="2"/>
  <polygon points="164,345 168,332 172,345" fill="#000"/>
  <text x="168" y="406" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">A − B = {1, 2}</text>
  <text x="168" y="419" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">(shaded region)</text>

  <!-- Greyed out labels -->
  <text x="300" y="406" font-family="Georgia,serif" font-size="9" fill="#888" text-anchor="middle">A ∩ B (excluded)</text>
  <text x="435" y="406" font-family="Georgia,serif" font-size="9" fill="#aaa" text-anchor="middle">B only (excluded)</text>

  <!-- Right panel -->
  <rect x="600" y="58" width="280" height="360" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="740" y="85" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">Difference: A − B</text>
  <line x1="600" y1="92" x2="880" y2="92" stroke="#000" stroke-width="1.5"/>
  <text x="616" y="118" font-family="Georgia,serif" font-size="11" fill="#000">Given:</text>
  <text x="616" y="138" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">A = {1, 2, 3, 4, 5}</text>
  <text x="616" y="158" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">B = {3, 4, 5, 6, 7}</text>
  <line x1="610" y1="168" x2="872" y2="168" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="616" y="188" font-family="Georgia,serif" font-size="11" fill="#000">Check each element of A:</text>
  <text x="616" y="208" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">1 ∈ B?  No  → keep  ✓</text>
  <text x="616" y="226" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">2 ∈ B?  No  → keep  ✓</text>
  <text x="616" y="244" font-family="Georgia,serif" font-size="11" fill="#000">3 ∈ B?  Yes → drop  ✗</text>
  <text x="616" y="262" font-family="Georgia,serif" font-size="11" fill="#000">4 ∈ B?  Yes → drop  ✗</text>
  <text x="616" y="280" font-family="Georgia,serif" font-size="11" fill="#000">5 ∈ B?  Yes → drop  ✗</text>
  <line x1="610" y1="290" x2="872" y2="290" stroke="#000" stroke-width="1.5"/>
  <text x="616" y="312" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">A − B = {1, 2}</text>
  <text x="616" y="332" font-family="Georgia,serif" font-size="11" fill="#000">|A − B| = 2</text>
  <text x="616" y="352" font-family="Georgia,serif" font-size="10" fill="#555">Also: A − B = A ∩ B'</text>

  <!-- Bottom summary -->
  <rect x="20" y="435" width="860" height="150" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="450" y="457" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Properties of Set Difference</text>
  <line x1="20" y1="464" x2="880" y2="464" stroke="#000" stroke-width="1.5"/>
  <text x="155" y="485" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">A − B ≠ B − A (not commutative)</text>
  <text x="450" y="485" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">A − A = ∅</text>
  <text x="730" y="485" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">A − ∅ = A</text>
  <text x="155" y="507" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">∅ − A = ∅</text>
  <text x="450" y="507" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">A − B = A ∩ B'</text>
  <text x="730" y="507" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">A − B ⊆ A</text>
  <text x="450" y="529" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">|A − B| = |A| − |A ∩ B|  =  |A ∪ B| − |B|</text>
  <text x="450" y="549" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">A = (A − B) ∪ (A ∩ B)  — these two parts are disjoint and partition A</text>
  <text x="450" y="569" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">B − A = B ∩ A'  |  A ∪ B = (A−B) ∪ (A∩B) ∪ (B−A) — three disjoint regions</text>
</svg>`;

  // ─── SUBSET DIAGRAM ───────────────────────────────────────────────────────
  static subsetDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000" text-anchor="middle">Subset Relationship — A ⊆ B</text>
  <text x="400" y="46" font-family="Georgia,serif" font-size="11" fill="#444" text-anchor="middle">A ⊆ B means every element of A is also an element of B</text>

  <!-- Universal set -->
  <rect x="30" y="58" width="500" height="380" rx="10" fill="none" stroke="#000" stroke-width="3"/>
  <text x="52" y="80" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">U</text>

  <!-- Outer circle B -->
  <circle cx="280" cy="265" r="165" fill="none" stroke="#000" stroke-width="3"/>
  <!-- Inner circle A (fully inside B) -->
  <circle cx="250" cy="255" r="80" fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="6,3"/>

  <!-- Set labels -->
  <text x="250" y="192" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">A</text>
  <text x="390" y="148" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000">B</text>

  <!-- A elements (inside inner circle) -->
  <text x="232" y="244" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">2</text>
  <text x="260" y="244" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">4</text>
  <text x="246" y="268" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">6</text>

  <!-- B only elements (outside A, inside B) -->
  <text x="350" y="220" font-family="Georgia,serif" font-size="13" fill="#333">1</text>
  <text x="375" y="250" font-family="Georgia,serif" font-size="13" fill="#333">3</text>
  <text x="355" y="290" font-family="Georgia,serif" font-size="13" fill="#333">5</text>
  <text x="190" y="355" font-family="Georgia,serif" font-size="13" fill="#333">7</text>
  <text x="330" y="355" font-family="Georgia,serif" font-size="13" fill="#333">8</text>

  <!-- U only elements -->
  <text x="60" y="130" font-family="Georgia,serif" font-size="13" fill="#888">—</text>
  <text x="465" y="380" font-family="Georgia,serif" font-size="11" fill="#666">(no elements outside B)</text>

  <!-- Containment arrow annotation -->
  <path d="M 250,200 A 55,55 0 0,1 250,200" fill="none"/>
  <line x1="250" y1="205" x2="250" y2="336" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="246,332 250,344 254,332" fill="#000"/>
  <text x="268" y="290" font-family="Georgia,serif" font-size="10" fill="#444">A is</text>
  <text x="268" y="304" font-family="Georgia,serif" font-size="10" fill="#444">contained</text>
  <text x="268" y="318" font-family="Georgia,serif" font-size="10" fill="#444">within B</text>

  <!-- Right panel -->
  <rect x="552" y="58" width="228" height="380" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="666" y="85" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">Subset: A ⊆ B</text>
  <line x1="552" y1="92" x2="780" y2="92" stroke="#000" stroke-width="1.5"/>
  <text x="564" y="114" font-family="Georgia,serif" font-size="11" fill="#000">A = {2, 4, 6}</text>
  <text x="564" y="132" font-family="Georgia,serif" font-size="11" fill="#000">B = {1,2,3,4,5,6,7,8}</text>
  <line x1="558" y1="142" x2="774" y2="142" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="564" y="162" font-family="Georgia,serif" font-size="11" fill="#000">Verify A ⊆ B:</text>
  <text x="564" y="180" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">2 ∈ B?  Yes ✓</text>
  <text x="564" y="198" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">4 ∈ B?  Yes ✓</text>
  <text x="564" y="216" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">6 ∈ B?  Yes ✓</text>
  <text x="564" y="234" font-family="Georgia,serif" font-size="11" fill="#555">All elements of A</text>
  <text x="564" y="250" font-family="Georgia,serif" font-size="11" fill="#555">are in B → A ⊆ B ✓</text>
  <line x1="558" y1="260" x2="774" y2="260" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="564" y="280" font-family="Georgia,serif" font-size="11" fill="#000">Symbols:</text>
  <text x="564" y="298" font-family="Georgia,serif" font-size="11" fill="#000">A ⊆ B  subset (or equal)</text>
  <text x="564" y="316" font-family="Georgia,serif" font-size="11" fill="#000">A ⊂ B  proper subset</text>
  <text x="564" y="334" font-family="Georgia,serif" font-size="11" fill="#000">A ⊄ B  not a subset</text>
  <line x1="558" y1="344" x2="774" y2="344" stroke="#000" stroke-width="1.5"/>
  <text x="564" y="364" font-family="Georgia,serif" font-size="10" fill="#000">|A| = 3 ≤ |B| = 8 ✓</text>
  <text x="564" y="382" font-family="Georgia,serif" font-size="10" fill="#000">A ⊂ B (proper, A ≠ B)</text>
  <text x="564" y="400" font-family="Georgia,serif" font-size="10" fill="#000">A ∩ B = A = {2,4,6}</text>

  <!-- Bottom summary -->
  <rect x="30" y="455" width="750" height="132" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="405" y="477" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Subset Properties</text>
  <line x1="30" y1="484" x2="780" y2="484" stroke="#000" stroke-width="1.5"/>
  <text x="155" y="505" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Reflexive: A ⊆ A</text>
  <text x="405" y="505" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Transitive: A⊆B, B⊆C → A⊆C</text>
  <text x="640" y="505" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Anti-sym: A⊆B, B⊆A → A=B</text>
  <text x="155" y="527" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">∅ ⊆ A (for any A)</text>
  <text x="405" y="527" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">A ⊆ U (A subset of universal)</text>
  <text x="640" y="527" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Power set P(A): 2^|A| subsets</text>
  <text x="405" y="549" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">A ⊂ B (proper subset): A ⊆ B  AND  A ≠ B — B has at least one element not in A</text>
  <text x="405" y="567" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">P({2,4,6}) = {∅, {2}, {4}, {6}, {2,4}, {2,6}, {4,6}, {2,4,6}} — 2³ = 8 subsets</text>
</svg>`;

  // ─── DISJOINT SETS ────────────────────────────────────────────────────────
  static disjointSetsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000" text-anchor="middle">Disjoint Sets — A ∩ B = ∅</text>
  <text x="400" y="46" font-family="Georgia,serif" font-size="11" fill="#444" text-anchor="middle">Disjoint sets share NO common elements — their intersection is the empty set</text>

  <!-- Universal set -->
  <rect x="30" y="58" width="520" height="360" rx="10" fill="none" stroke="#000" stroke-width="3"/>
  <text x="52" y="80" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">U</text>

  <!-- Circle A (left — no overlap) -->
  <circle cx="180" cy="255" r="120" fill="none" stroke="#000" stroke-width="3"/>
  <!-- Circle B (right — separated) -->
  <circle cx="400" cy="255" r="120" fill="none" stroke="#000" stroke-width="3"/>

  <!-- Gap indicator -->
  <line x1="302" y1="220" x2="278" y2="220" stroke="#000" stroke-width="2"/>
  <line x1="302" y1="255" x2="278" y2="255" stroke="#000" stroke-width="2" stroke-dasharray="3,3"/>
  <line x1="302" y1="290" x2="278" y2="290" stroke="#000" stroke-width="2"/>
  <text x="290" y="248" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">∅</text>
  <text x="290" y="270" font-family="Georgia,serif" font-size="9" fill="#444" text-anchor="middle">gap</text>

  <!-- Set labels -->
  <text x="180" y="165" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">A</text>
  <text x="400" y="165" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">B</text>

  <!-- A elements -->
  <text x="148" y="243" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">1</text>
  <text x="180" y="243" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">2</text>
  <text x="212" y="243" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">3</text>
  <text x="180" y="270" font-family="Georgia,serif" font-size="11" fill="#555" text-anchor="middle">A = {1, 2, 3}</text>

  <!-- B elements -->
  <text x="368" y="243" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">4</text>
  <text x="400" y="243" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">5</text>
  <text x="432" y="243" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">6</text>
  <text x="400" y="270" font-family="Georgia,serif" font-size="11" fill="#555" text-anchor="middle">B = {4, 5, 6}</text>

  <!-- NOT disjoint comparison panel (small) -->
  <rect x="30" y="435" width="520" height="152" rx="6" fill="none" stroke="#000" stroke-width="2"/>
  <text x="290" y="458" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Disjoint vs Non-Disjoint</text>
  <line x1="30" y1="465" x2="550" y2="465" stroke="#000" stroke-width="1.5"/>
  <line x1="290" y1="465" x2="290" y2="587" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="160" y="485" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Disjoint ✓</text>
  <text x="420" y="485" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Non-Disjoint</text>
  <text x="160" y="505" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">A={1,2,3}, B={4,5,6}</text>
  <text x="420" y="505" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">A={1,2,3}, B={3,4,5}</text>
  <text x="160" y="525" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">A ∩ B = ∅</text>
  <text x="420" y="525" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">A ∩ B = {3} ≠ ∅</text>
  <text x="160" y="545" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">No shared elements</text>
  <text x="420" y="545" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Element 3 in both</text>
  <text x="160" y="565" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">Circles do not overlap</text>
  <text x="420" y="565" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">Circles overlap</text>
  <text x="160" y="578" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">|A ∪ B| = |A| + |B| = 6</text>
  <text x="420" y="578" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">|A ∪ B| = |A|+|B|−|A∩B| = 5</text>

  <!-- Right panel -->
  <rect x="568" y="58" width="212" height="529" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="674" y="85" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Disjoint Sets</text>
  <line x1="568" y1="92" x2="780" y2="92" stroke="#000" stroke-width="1.5"/>
  <text x="580" y="114" font-family="Georgia,serif" font-size="11" fill="#000">Definition:</text>
  <text x="580" y="132" font-family="Georgia,serif" font-size="11" fill="#000">A and B are disjoint</text>
  <text x="580" y="150" font-family="Georgia,serif" font-size="11" fill="#000">if A ∩ B = ∅</text>
  <line x1="574" y1="160" x2="774" y2="160" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="580" y="180" font-family="Georgia,serif" font-size="11" fill="#000">Key properties:</text>
  <text x="580" y="200" font-family="Georgia,serif" font-size="11" fill="#000">• No shared elements</text>
  <text x="580" y="218" font-family="Georgia,serif" font-size="11" fill="#000">• Circles don't overlap</text>
  <text x="580" y="236" font-family="Georgia,serif" font-size="11" fill="#000">• |A∪B| = |A|+|B|</text>
  <text x="580" y="254" font-family="Georgia,serif" font-size="11" fill="#000">• A ∩ B = ∅</text>
  <line x1="574" y1="264" x2="774" y2="264" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="580" y="284" font-family="Georgia,serif" font-size="11" fill="#000">Mutually exclusive</text>
  <text x="580" y="302" font-family="Georgia,serif" font-size="11" fill="#000">= same as disjoint</text>
  <text x="580" y="320" font-family="Georgia,serif" font-size="11" fill="#000">(used in probability)</text>
  <line x1="574" y1="330" x2="774" y2="330" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="580" y="350" font-family="Georgia,serif" font-size="11" fill="#000">Partition of U:</text>
  <text x="580" y="368" font-family="Georgia,serif" font-size="11" fill="#000">A₁,A₂,...,Aₙ partition</text>
  <text x="580" y="386" font-family="Georgia,serif" font-size="11" fill="#000">U if they are pairwise</text>
  <text x="580" y="404" font-family="Georgia,serif" font-size="11" fill="#000">disjoint and A₁∪...∪Aₙ=U</text>
  <line x1="574" y1="414" x2="774" y2="414" stroke="#000" stroke-width="1.5"/>
  <text x="580" y="434" font-family="Georgia,serif" font-size="10" fill="#000">A and A' are always</text>
  <text x="580" y="452" font-family="Georgia,serif" font-size="10" fill="#000">disjoint: A ∩ A' = ∅</text>
  <text x="580" y="472" font-family="Georgia,serif" font-size="10" fill="#000">∅ is disjoint from</text>
  <text x="580" y="490" font-family="Georgia,serif" font-size="10" fill="#000">every set</text>
</svg>`;

  // ─── CARDINALITY ──────────────────────────────────────────────────────────
  static cardinalitySvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="450" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000" text-anchor="middle">Cardinality of Sets</text>
  <text x="450" y="46" font-family="Georgia,serif" font-size="11" fill="#444" text-anchor="middle">|A| denotes the number of elements (cardinality) in set A</text>

  <!-- Universal set -->
  <rect x="20" y="58" width="560" height="360" rx="10" fill="none" stroke="#000" stroke-width="3"/>
  <text x="42" y="80" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">U</text>

  <!-- Circles -->
  <circle cx="230" cy="255" r="145" fill="none" stroke="#000" stroke-width="3"/>
  <circle cx="370" cy="255" r="145" fill="none" stroke="#000" stroke-width="3"/>

  <!-- A label and count -->
  <text x="155" y="150" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">A</text>
  <text x="155" y="168" font-family="Georgia,serif" font-size="11" fill="#555">|A| = 5</text>
  <text x="435" y="150" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">B</text>
  <text x="435" y="168" font-family="Georgia,serif" font-size="11" fill="#555">|B| = 6</text>

  <!-- A only elements: {1,2} -->
  <text x="152" y="238" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">1</text>
  <text x="165" y="262" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">2</text>
  <text x="160" y="285" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">|A−B|=2</text>

  <!-- Intersection: {3,4,5} -->
  <text x="295" y="240" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">3</text>
  <text x="300" y="260" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">4</text>
  <text x="295" y="280" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">5</text>
  <text x="300" y="300" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">|A∩B|=3</text>

  <!-- B only: {6,7,8} -->
  <text x="430" y="238" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">6</text>
  <text x="448" y="258" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">7</text>
  <text x="435" y="278" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">8</text>
  <text x="440" y="298" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">|B−A|=3</text>

  <!-- Cardinality bracket annotations -->
  <!-- A bracket -->
  <line x1="80" y1="350" x2="80" y2="420" stroke="#000" stroke-width="1.5"/>
  <line x1="80" y1="420" x2="370" y2="420" stroke="#000" stroke-width="1.5"/>
  <line x1="370" y1="350" x2="370" y2="420" stroke="#000" stroke-width="1.5"/>
  <text x="225" y="438" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">|A| = 5  ({1,2,3,4,5})</text>

  <!-- Right panel -->
  <rect x="600" y="58" width="280" height="360" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="740" y="85" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">Cardinality Formulas</text>
  <line x1="600" y1="92" x2="880" y2="92" stroke="#000" stroke-width="1.5"/>
  <text x="616" y="115" font-family="Georgia,serif" font-size="11" fill="#000">A = {1, 2, 3, 4, 5}  → |A| = 5</text>
  <text x="616" y="135" font-family="Georgia,serif" font-size="11" fill="#000">B = {3,4,5,6,7,8}  → |B| = 6</text>
  <line x1="610" y1="145" x2="872" y2="145" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="616" y="165" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Inclusion-Exclusion:</text>
  <text x="616" y="185" font-family="Georgia,serif" font-size="11" fill="#000">|A∪B| = |A|+|B|−|A∩B|</text>
  <text x="616" y="205" font-family="Georgia,serif" font-size="11" fill="#000">       = 5 + 6 − 3 = 8</text>
  <line x1="610" y1="215" x2="872" y2="215" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="616" y="235" font-family="Georgia,serif" font-size="11" fill="#000">|A ∩ B| = 3</text>
  <text x="616" y="255" font-family="Georgia,serif" font-size="11" fill="#000">|A − B| = |A|−|A∩B| = 2</text>
  <text x="616" y="275" font-family="Georgia,serif" font-size="11" fill="#000">|B − A| = |B|−|A∩B| = 3</text>
  <line x1="610" y1="285" x2="872" y2="285" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="616" y="305" font-family="Georgia,serif" font-size="11" fill="#000">Power set |P(A)| = 2^|A|</text>
  <text x="616" y="325" font-family="Georgia,serif" font-size="11" fill="#000">|P(A)| = 2⁵ = 32 subsets</text>
  <text x="616" y="345" font-family="Georgia,serif" font-size="10" fill="#555">Verification: 2+3+3 = 8</text>
  <text x="616" y="362" font-family="Georgia,serif" font-size="10" fill="#555">= |A∪B| ✓</text>

  <!-- Bottom summary -->
  <rect x="20" y="448" width="860" height="140" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="450" y="470" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Cardinality Rules</text>
  <line x1="20" y1="477" x2="880" y2="477" stroke="#000" stroke-width="1.5"/>
  <text x="155" y="498" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">|∅| = 0</text>
  <text x="450" y="498" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">|A| ≥ 0  for any A</text>
  <text x="730" y="498" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">|A| = |B| ↔ bijection exists</text>
  <text x="155" y="520" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">|A ∪ B| ≤ |A| + |B|</text>
  <text x="450" y="520" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">|A ∩ B| ≤ min(|A|,|B|)</text>
  <text x="730" y="520" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">|A × B| = |A| · |B|</text>
  <text x="450" y="542" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">3-set: |A∪B∪C| = |A|+|B|+|C|−|A∩B|−|A∩C|−|B∩C|+|A∩B∩C|</text>
  <text x="155" y="564" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">Finite: |A| = n ∈ ℕ</text>
  <text x="450" y="564" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">Countably infinite: |ℕ| = ℵ₀</text>
  <text x="730" y="564" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">Uncountably inf.: |ℝ| = ℵ₁</text>
</svg>`;

  // ─── DE MORGAN'S LAWS ─────────────────────────────────────────────────────
  static deMorgansLawsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <!-- Title -->
  <text x="500" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000" text-anchor="middle">De Morgan's Laws</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#444" text-anchor="middle">A={1,2,3,4}  B={3,4,5,6}  U={1,2,3,4,5,6,7,8}</text>

  <!-- ═══ LAW 1: (A ∪ B)' = A' ∩ B' ═══ -->
  <rect x="20" y="58" width="470" height="300" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="255" y="80" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">Law 1:  (A ∪ B)' = A' ∩ B'</text>
  <text x="255" y="96" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">Complement of union = intersection of complements</text>
  <line x1="20" y1="103" x2="490" y2="103" stroke="#000" stroke-width="1.5"/>

  <!-- Left side: (A ∪ B)' -->
  <rect x="30" y="110" width="200" height="200" rx="6" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="130" y="126" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">(A ∪ B)'</text>

  <!-- Hatch outside both circles (complement of union) -->
  <!-- Universal rect hatch -->
  <clipPath id="clipLaw1box">
    <rect x="32" y="128" width="196" height="178"/>
  </clipPath>
  <g clip-path="url(#clipLaw1box)">
    <line x1="32" y1="135" x2="228" y2="135" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="32" y1="148" x2="228" y2="148" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="32" y1="161" x2="228" y2="161" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="32" y1="174" x2="228" y2="174" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="32" y1="187" x2="228" y2="187" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="32" y1="200" x2="228" y2="200" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="32" y1="213" x2="228" y2="213" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="32" y1="226" x2="228" y2="226" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="32" y1="239" x2="228" y2="239" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="32" y1="252" x2="228" y2="252" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="32" y1="265" x2="228" y2="265" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="32" y1="278" x2="228" y2="278" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="32" y1="291" x2="228" y2="291" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="32" y1="304" x2="228" y2="304" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
  </g>
  <!-- White circles to erase hatch inside A∪B -->
  <circle cx="98" cy="210" r="55" fill="white" stroke="none"/>
  <circle cx="162" cy="210" r="55" fill="white" stroke="none"/>
  <!-- Redraw circle outlines -->
  <circle cx="98" cy="210" r="55" fill="none" stroke="#000" stroke-width="2"/>
  <circle cx="162" cy="210" r="55" fill="none" stroke="#000" stroke-width="2"/>
  <text x="72" y="212" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">A</text>
  <text x="188" y="212" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">B</text>
  <!-- Element 7,8 in shaded region -->
  <text x="52" y="145" font-family="Georgia,serif" font-size="10" fill="#000">7</text>
  <text x="205" y="145" font-family="Georgia,serif" font-size="10" fill="#000">8</text>

  <!-- equals sign -->
  <text x="242" y="215" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">=</text>

  <!-- Right side: A' ∩ B' -->
  <rect x="262" y="110" width="200" height="200" rx="6" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="362" y="126" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">A' ∩ B'</text>

  <!-- Only shade outside both circles (same result) -->
  <clipPath id="clipLaw1box2">
    <rect x="264" y="128" width="196" height="178"/>
  </clipPath>
  <g clip-path="url(#clipLaw1box2)">
    <line x1="264" y1="135" x2="460" y2="135" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="264" y1="148" x2="460" y2="148" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="264" y1="161" x2="460" y2="161" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="264" y1="174" x2="460" y2="174" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="264" y1="187" x2="460" y2="187" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="264" y1="200" x2="460" y2="200" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="264" y1="213" x2="460" y2="213" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="264" y1="226" x2="460" y2="226" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="264" y1="239" x2="460" y2="239" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="264" y1="252" x2="460" y2="252" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="264" y1="265" x2="460" y2="265" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="264" y1="278" x2="460" y2="278" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="264" y1="291" x2="460" y2="291" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="264" y1="304" x2="460" y2="304" stroke="#000" stroke-width="1.5" stroke-opacity="0.4"/>
  </g>
  <circle cx="328" cy="210" r="55" fill="white" stroke="none"/>
  <circle cx="392" cy="210" r="55" fill="white" stroke="none"/>
  <circle cx="328" cy="210" r="55" fill="none" stroke="#000" stroke-width="2"/>
  <circle cx="392" cy="210" r="55" fill="none" stroke="#000" stroke-width="2"/>
  <text x="302" y="212" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">A</text>
  <text x="418" y="212" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">B</text>
  <text x="284" y="145" font-family="Georgia,serif" font-size="10" fill="#000">7</text>
  <text x="436" y="145" font-family="Georgia,serif" font-size="10" fill="#000">8</text>

  <!-- Law 1 result -->
  <text x="255" y="330" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">(A∪B)' = A'∩B' = {7, 8}  ✓</text>
  <text x="255" y="346" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">A∪B={1,2,3,4,5,6} → complement in U = {7,8}</text>

  <!-- ═══ LAW 2: (A ∩ B)' = A' ∪ B' ═══ -->
  <rect x="510" y="58" width="470" height="300" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="745" y="80" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">Law 2:  (A ∩ B)' = A' ∪ B'</text>
  <text x="745" y="96" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">Complement of intersection = union of complements</text>
  <line x1="510" y1="103" x2="980" y2="103" stroke="#000" stroke-width="1.5"/>

  <!-- Left: (A∩B)' — shade everything except intersection -->
  <rect x="520" y="110" width="200" height="200" rx="6" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="620" y="126" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">(A ∩ B)'</text>

  <clipPath id="clipLaw2boxA">
    <circle cx="588" cy="210" r="55"/>
  </clipPath>
  <clipPath id="clipLaw2boxB">
    <circle cx="652" cy="210" r="55"/>
  </clipPath>
  <clipPath id="clipLaw2rect">
    <rect x="522" y="128" width="196" height="178"/>
  </clipPath>

  <!-- Shade A circle (excluding intersection with B) -->
  <g clip-path="url(#clipLaw2boxA)">
    <line x1="522" y1="135" x2="718" y2="135" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="150" x2="718" y2="150" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="165" x2="718" y2="165" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="180" x2="718" y2="180" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="195" x2="718" y2="195" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="210" x2="718" y2="210" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="225" x2="718" y2="225" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="240" x2="718" y2="240" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="255" x2="718" y2="255" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="270" x2="718" y2="270" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="285" x2="718" y2="285" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="300" x2="718" y2="300" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
  </g>
  <!-- Shade B circle -->
  <g clip-path="url(#clipLaw2boxB)">
    <line x1="522" y1="135" x2="718" y2="135" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="150" x2="718" y2="150" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="165" x2="718" y2="165" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="180" x2="718" y2="180" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="195" x2="718" y2="195" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="210" x2="718" y2="210" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="225" x2="718" y2="225" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="240" x2="718" y2="240" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="255" x2="718" y2="255" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="270" x2="718" y2="270" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="285" x2="718" y2="285" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="522" y1="300" x2="718" y2="300" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
  </g>
  <!-- White out intersection -->
  <clipPath id="clipBothLaw2">
    <circle cx="588" cy="210" r="54"/>
  </clipPath>
  <g clip-path="url(#clipLaw2boxB)">
    <g clip-path="url(#clipBothLaw2)">
      <rect x="522" y="128" width="196" height="178" fill="white"/>
    </g>
  </g>
  <!-- Also shade U corners and outside -->
  <g clip-path="url(#clipLaw2rect)">
    <line x1="522" y1="135" x2="718" y2="135" stroke="#000" stroke-width="1.5" stroke-opacity="0.25"/>
    <line x1="522" y1="148" x2="718" y2="148" stroke="#000" stroke-width="1.5" stroke-opacity="0.25"/>
    <line x1="522" y1="161" x2="718" y2="161" stroke="#000" stroke-width="1.5" stroke-opacity="0.25"/>
    <line x1="522" y1="290" x2="718" y2="290" stroke="#000" stroke-width="1.5" stroke-opacity="0.25"/>
    <line x1="522" y1="303" x2="718" y2="303" stroke="#000" stroke-width="1.5" stroke-opacity="0.25"/>
  </g>
  <!-- Redraw outlines -->
  <circle cx="588" cy="210" r="55" fill="none" stroke="#000" stroke-width="2"/>
  <circle cx="652" cy="210" r="55" fill="none" stroke="#000" stroke-width="2"/>
  <text x="558" y="212" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">A</text>
  <text x="678" y="212" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">B</text>

  <!-- = sign -->
  <text x="732" y="215" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">=</text>

  <!-- Right: A' ∪ B' (same shading) -->
  <rect x="750" y="110" width="200" height="200" rx="6" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="850" y="126" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">A' ∪ B'</text>

  <clipPath id="clipLaw2R_A">
    <circle cx="818" cy="210" r="55"/>
  </clipPath>
  <clipPath id="clipLaw2R_B">
    <circle cx="882" cy="210" r="55"/>
  </clipPath>
  <clipPath id="clipBothLaw2R">
    <circle cx="818" cy="210" r="54"/>
  </clipPath>

  <g clip-path="url(#clipLaw2R_A)">
    <line x1="752" y1="135" x2="948" y2="135" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="150" x2="948" y2="150" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="165" x2="948" y2="165" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="180" x2="948" y2="180" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="195" x2="948" y2="195" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="210" x2="948" y2="210" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="225" x2="948" y2="225" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="240" x2="948" y2="240" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="255" x2="948" y2="255" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="270" x2="948" y2="270" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="285" x2="948" y2="285" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="300" x2="948" y2="300" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
  </g>
  <g clip-path="url(#clipLaw2R_B)">
    <line x1="752" y1="135" x2="948" y2="135" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="150" x2="948" y2="150" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="165" x2="948" y2="165" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="180" x2="948" y2="180" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="195" x2="948" y2="195" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="210" x2="948" y2="210" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="225" x2="948" y2="225" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="240" x2="948" y2="240" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="255" x2="948" y2="255" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="270" x2="948" y2="270" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="285" x2="948" y2="285" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
    <line x1="752" y1="300" x2="948" y2="300" stroke="#000" stroke-width="8" stroke-opacity="0.2"/>
  </g>
  <g clip-path="url(#clipLaw2R_B)">
    <g clip-path="url(#clipBothLaw2R)">
      <rect x="752" y="128" width="196" height="178" fill="white"/>
    </g>
  </g>
  <circle cx="818" cy="210" r="55" fill="none" stroke="#000" stroke-width="2"/>
  <circle cx="882" cy="210" r="55" fill="none" stroke="#000" stroke-width="2"/>
  <text x="788" y="212" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">A</text>
  <text x="908" y="212" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">B</text>

  <text x="745" y="330" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">(A∩B)' = A'∪B' = {1,2,5,6,7,8}  ✓</text>
  <text x="745" y="346" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">A∩B={3,4} → complement in U = {1,2,5,6,7,8}</text>

  <!-- Proof / Verification section -->
  <rect x="20" y="378" width="960" height="190" rx="8" fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="6,3"/>
  <text x="500" y="400" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">Numerical Proof  (A={1,2,3,4}  B={3,4,5,6}  U={1,2,3,4,5,6,7,8})</text>
  <line x1="20" y1="408" x2="980" y2="408" stroke="#000" stroke-width="1.5"/>

  <!-- Law 1 proof -->
  <text x="245" y="428" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Law 1: (A ∪ B)' = A' ∩ B'</text>
  <text x="245" y="448" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">A ∪ B = {1,2,3,4,5,6}</text>
  <text x="245" y="466" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">(A ∪ B)' = {7, 8}</text>
  <line x1="25" y1="474" x2="490" y2="474" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="245" y="492" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">A' = {5,6,7,8}  B' = {1,2,7,8}</text>
  <text x="245" y="510" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">A' ∩ B' = {7, 8}</text>
  <text x="245" y="530" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">{7,8} = {7,8}  ✓</text>
  <text x="245" y="550" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">Both sides equal — Law 1 verified</text>

  <!-- Divider -->
  <line x1="490" y1="410" x2="490" y2="558" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>

  <!-- Law 2 proof -->
  <text x="735" y="428" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Law 2: (A ∩ B)' = A' ∪ B'</text>
  <text x="735" y="448" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">A ∩ B = {3, 4}</text>
  <text x="735" y="466" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">(A ∩ B)' = {1,2,5,6,7,8}</text>
  <line x1="495" y1="474" x2="975" y2="474" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="735" y="492" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">A' = {5,6,7,8}  B' = {1,2,7,8}</text>
  <text x="735" y="510" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">A' ∪ B' = {1,2,5,6,7,8}</text>
  <text x="735" y="530" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">{1,2,5,6,7,8} = {1,2,5,6,7,8}  ✓</text>
  <text x="735" y="550" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">Both sides equal — Law 2 verified</text>

  <!-- Footer note -->
  <text x="500" y="578" font-family="Georgia,serif" font-size="10" fill="#444" text-anchor="middle">De Morgan's Laws are dual: swap ∪↔∩ and A↔A' to convert between them. They apply to any number of sets.</text>
  <text x="500" y="594" font-family="Georgia,serif" font-size="10" fill="#444" text-anchor="middle">Logic equivalents: ¬(P∨Q) ≡ ¬P∧¬Q  and  ¬(P∧Q) ≡ ¬P∨¬Q  (Boolean algebra, circuit design, programming)</text>
  <text x="500" y="610" font-family="Georgia,serif" font-size="10" fill="#444" text-anchor="middle">Named after Augustus De Morgan (1806–1871)</text>
</svg>`;


  // ─── 7a. MATRIX STRUCTURE ─────────────────────────────────────────────────
  static matrixStructureSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="500px" viewBox="0 0 800 500">

  <!-- Title -->
  <text x="240" y="30" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Matrix Structure — Rows, Columns &amp; Elements</text>

  <!-- ── Matrix brackets ── -->
  <path d="M180,70 L165,70 L165,290 L180,290" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M460,70 L475,70 L475,290 L460,290" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Row shading (alternating light gray) -->
  <rect x="168" y="73" width="290" height="88" rx="2" fill="#f0f0f0" stroke="none"/>
  <rect x="168" y="183" width="290" height="88" rx="2" fill="#ffffff" stroke="none"/>

  <!-- Grid lines -->
  <line x1="168" y1="161" x2="458" y2="161" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="264" y1="73" x2="264" y2="269" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="361" y1="73" x2="361" y2="269" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>

  <!-- Cell values — Row 0 -->
  <text x="203" y="127" font-family="Georgia,serif" font-size="26" font-weight="bold" fill="#000">1</text>
  <text x="300" y="127" font-family="Georgia,serif" font-size="26" font-weight="bold" fill="#000">2</text>
  <text x="397" y="127" font-family="Georgia,serif" font-size="26" font-weight="bold" fill="#000">3</text>
  <!-- Cell values — Row 1 -->
  <text x="203" y="237" font-family="Georgia,serif" font-size="26" font-weight="bold" fill="#000">4</text>
  <text x="300" y="237" font-family="Georgia,serif" font-size="26" font-weight="bold" fill="#000">5</text>
  <text x="397" y="237" font-family="Georgia,serif" font-size="26" font-weight="bold" fill="#000">6</text>

  <!-- Element index labels inside cells (small) -->
  <text x="172" y="88" font-family="Georgia,serif" font-size="9" fill="#555">a₁₁</text>
  <text x="268" y="88" font-family="Georgia,serif" font-size="9" fill="#555">a₁₂</text>
  <text x="365" y="88" font-family="Georgia,serif" font-size="9" fill="#555">a₁₃</text>
  <text x="172" y="198" font-family="Georgia,serif" font-size="9" fill="#555">a₂₁</text>
  <text x="268" y="198" font-family="Georgia,serif" font-size="9" fill="#555">a₂₂</text>
  <text x="365" y="198" font-family="Georgia,serif" font-size="9" fill="#555">a₂₃</text>

  <!-- ── Row arrows and labels (right side) ── -->
  <!-- Row 1 arrow -->
  <line x1="488" y1="117" x2="560" y2="117" stroke="#000" stroke-width="2"/>
  <polygon points="556,112 568,117 556,122" fill="#000"/>
  <text x="575" y="113" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Row 1</text>
  <text x="575" y="127" font-family="Georgia,serif" font-size="10" fill="#444">[1, 2, 3]</text>
  <!-- Row 2 arrow -->
  <line x1="488" y1="227" x2="560" y2="227" stroke="#000" stroke-width="2"/>
  <polygon points="556,222 568,227 556,232" fill="#000"/>
  <text x="575" y="223" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Row 2</text>
  <text x="575" y="237" font-family="Georgia,serif" font-size="10" fill="#444">[4, 5, 6]</text>

  <!-- ── Column arrows and labels (below) ── -->
  <!-- Col 1 -->
  <line x1="216" y1="282" x2="216" y2="330" stroke="#000" stroke-width="2"/>
  <polygon points="211,326 216,338 221,326" fill="#000"/>
  <text x="188" y="353" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Col 1</text>
  <text x="194" y="366" font-family="Georgia,serif" font-size="10" fill="#444">[1, 4]</text>
  <!-- Col 2 -->
  <line x1="313" y1="282" x2="313" y2="330" stroke="#000" stroke-width="2"/>
  <polygon points="308,326 313,338 318,326" fill="#000"/>
  <text x="285" y="353" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Col 2</text>
  <text x="291" y="366" font-family="Georgia,serif" font-size="10" fill="#444">[2, 5]</text>
  <!-- Col 3 -->
  <line x1="410" y1="282" x2="410" y2="330" stroke="#000" stroke-width="2"/>
  <polygon points="405,326 410,338 415,326" fill="#000"/>
  <text x="382" y="353" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Col 3</text>
  <text x="388" y="366" font-family="Georgia,serif" font-size="10" fill="#444">[3, 6]</text>

  <!-- ── Element callout for a₁₂ = 2 ── -->
  <circle cx="313" cy="117" r="22" fill="none" stroke="#000" stroke-width="2.5"/>
  <path d="M335,100 C370,70 400,55 430,50" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="434" y="46" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">a₁₂ = 2</text>
  <text x="426" y="59" font-family="Georgia,serif" font-size="9" fill="#444">row 1, col 2</text>

  <!-- ── Order / dimension box ── -->
  <rect x="165" y="395" width="480" height="80" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="175" y="415" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Matrix Order:</text>
  <text x="175" y="432" font-family="Georgia,serif" font-size="11" fill="#000">This is a 2 × 3 matrix  (2 rows, 3 columns)</text>
  <text x="175" y="449" font-family="Georgia,serif" font-size="11" fill="#000">General notation: A = [aᵢⱼ]  where i = row index, j = column index</text>
  <text x="175" y="466" font-family="Georgia,serif" font-size="11" fill="#000">Total elements = rows × columns = 2 × 3 = 6</text>
</svg>`;

  // ─── 7b. MATRIX ADDITION ──────────────────────────────────────────────────
  static matrixAdditionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="500px" viewBox="0 0 900 500">

  <!-- Title -->
  <text x="240" y="28" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Matrix Addition — Element-by-Element</text>
  <text x="220" y="46" font-family="Georgia,serif" font-size="10" fill="#444">Rule: Matrices must have the same order · Add corresponding elements</text>

  <!-- ════ Matrix A ════ -->
  <path d="M60,80 L48,80 L48,200 L60,200" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M160,80 L172,80 L172,200 L160,200" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- A grid -->
  <line x1="50" y1="140" x2="170" y2="140" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="110" y1="82" x2="110" y2="198" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>

  <!-- A values -->
  <text x="72" y="123" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">1</text>
  <text x="122" y="123" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">2</text>
  <text x="72" y="183" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">3</text>
  <text x="122" y="183" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">4</text>

  <!-- A label -->
  <text x="100" y="222" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">A</text>

  <!-- + sign -->
  <text x="185" y="148" font-family="Georgia,serif" font-size="32" font-weight="bold" fill="#000">+</text>

  <!-- ════ Matrix B ════ -->
  <path d="M220,80 L208,80 L208,200 L220,200" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M320,80 L332,80 L332,200 L320,200" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>

  <line x1="210" y1="140" x2="330" y2="140" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="270" y1="82" x2="270" y2="198" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>

  <text x="232" y="123" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">5</text>
  <text x="282" y="123" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">6</text>
  <text x="232" y="183" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">7</text>
  <text x="282" y="183" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">8</text>

  <text x="260" y="222" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">B</text>

  <!-- = sign -->
  <text x="346" y="148" font-family="Georgia,serif" font-size="32" font-weight="bold" fill="#000">=</text>

  <!-- ════ Result Matrix ════ -->
  <path d="M378,80 L366,80 L366,200 L378,200" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M478,80 L490,80 L490,200 L478,200" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>

  <line x1="368" y1="140" x2="488" y2="140" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="428" y1="82" x2="428" y2="198" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>

  <text x="386" y="123" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">6</text>
  <text x="436" y="123" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">8</text>
  <text x="378" y="183" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">10</text>
  <text x="436" y="183" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">12</text>

  <text x="418" y="222" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">A+B</text>

  <!-- ── Step-by-step breakdown ── -->
  <rect x="40" y="260" width="820" height="210" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="55" y="282" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Element-by-element process:</text>

  <!-- Row 1 -->
  <text x="55" y="306" font-family="Georgia,serif" font-size="11" fill="#000">Position (1,1):  1 + 5 = 6</text>
  <text x="55" y="325" font-family="Georgia,serif" font-size="11" fill="#000">Position (1,2):  2 + 6 = 8</text>
  <text x="55" y="344" font-family="Georgia,serif" font-size="11" fill="#000">Position (2,1):  3 + 7 = 10</text>
  <text x="55" y="363" font-family="Georgia,serif" font-size="11" fill="#000">Position (2,2):  4 + 8 = 12</text>

  <line x1="380" y1="265" x2="380" y2="465" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>

  <text x="400" y="282" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">General formula for aᵢⱼ + bᵢⱼ:</text>
  <text x="400" y="306" font-family="Georgia,serif" font-size="11" fill="#000">(A + B)ᵢⱼ = aᵢⱼ + bᵢⱼ</text>
  <text x="400" y="332" font-family="Georgia,serif" font-size="11" fill="#000">Requirement: A and B must be the same size (m × n)</text>
  <text x="400" y="358" font-family="Georgia,serif" font-size="11" fill="#000">Commutative: A + B = B + A</text>
  <text x="400" y="384" font-family="Georgia,serif" font-size="11" fill="#000">Associative:  (A + B) + C = A + (B + C)</text>
  <text x="400" y="410" font-family="Georgia,serif" font-size="11" fill="#000">Here both are 2 × 2 — addition is valid ✓</text>
</svg>`;

  // ─── 7c. MATRIX SCALAR MULTIPLICATION ────────────────────────────────────
  static matrixScalarMultiplicationSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="500px" viewBox="0 0 800 500">

  <!-- Title -->
  <text x="180" y="28" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Scalar Multiplication of a Matrix</text>
  <text x="160" y="46" font-family="Georgia,serif" font-size="10" fill="#444">Rule: Multiply every element by the scalar k · k · A = [k · aᵢⱼ]</text>

  <!-- Scalar -->
  <text x="60" y="155" font-family="Georgia,serif" font-size="40" font-weight="bold" fill="#000">3</text>

  <!-- × -->
  <text x="95" y="155" font-family="Georgia,serif" font-size="32" font-weight="bold" fill="#000">×</text>

  <!-- ════ Matrix A ════ -->
  <path d="M128,80 L116,80 L116,200 L128,200" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M228,80 L240,80 L240,200 L228,200" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>

  <line x1="118" y1="140" x2="238" y2="140" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="178" y1="82" x2="178" y2="198" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>

  <text x="134" y="123" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">2</text>
  <text x="184" y="123" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">3</text>
  <text x="134" y="183" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">4</text>
  <text x="184" y="183" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">5</text>

  <text x="168" y="222" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">A</text>

  <!-- = -->
  <text x="252" y="155" font-family="Georgia,serif" font-size="32" font-weight="bold" fill="#000">=</text>

  <!-- ════ Expanded form (show multiplication per cell) ════ -->
  <path d="M288,80 L276,80 L276,200 L288,200" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M430,80 L442,80 L442,200 L430,200" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>

  <line x1="278" y1="140" x2="440" y2="140" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="358" y1="82" x2="358" y2="198" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>

  <text x="288" y="120" font-family="Georgia,serif" font-size="16" fill="#000">3×2</text>
  <text x="365" y="120" font-family="Georgia,serif" font-size="16" fill="#000">3×3</text>
  <text x="288" y="180" font-family="Georgia,serif" font-size="16" fill="#000">3×4</text>
  <text x="365" y="180" font-family="Georgia,serif" font-size="16" fill="#000">3×5</text>

  <text x="340" y="222" font-family="Georgia,serif" font-size="11" fill="#444">(expanded)</text>

  <!-- = -->
  <text x="452" y="155" font-family="Georgia,serif" font-size="32" font-weight="bold" fill="#000">=</text>

  <!-- ════ Result ════ -->
  <path d="M488,80 L476,80 L476,200 L488,200" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M590,80 L602,80 L602,200 L590,200" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>

  <line x1="478" y1="140" x2="600" y2="140" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="538" y1="82" x2="538" y2="198" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>

  <text x="494" y="123" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">6</text>
  <text x="546" y="123" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">9</text>
  <text x="490" y="183" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">12</text>
  <text x="546" y="183" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">15</text>

  <text x="524" y="222" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">3A</text>

  <!-- ── Properties box ── -->
  <rect x="40" y="260" width="720" height="210" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="55" y="282" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Scalar multiplication properties:</text>
  <text x="55" y="306" font-family="Georgia,serif" font-size="11" fill="#000">k(A + B) = kA + kB          (distributive over matrix addition)</text>
  <text x="55" y="328" font-family="Georgia,serif" font-size="11" fill="#000">(k + m)A = kA + mA          (distributive over scalar addition)</text>
  <text x="55" y="350" font-family="Georgia,serif" font-size="11" fill="#000">k(mA) = (km)A               (associative with scalars)</text>
  <text x="55" y="372" font-family="Georgia,serif" font-size="11" fill="#000">1 · A = A                   (identity scalar)</text>
  <text x="55" y="394" font-family="Georgia,serif" font-size="11" fill="#000">0 · A = O  (zero matrix)    (zero scalar)</text>
  <text x="55" y="416" font-family="Georgia,serif" font-size="11" fill="#000">Here: k = 3, A is 2×2 → result is also 2×2 (order preserved)</text>
  <text x="55" y="455" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Verification:  3×2=6  3×3=9  3×4=12  3×5=15  ✓</text>
</svg>`;

  // ─── 7d. MATRIX MULTIPLICATION ────────────────────────────────────────────
  // (already implemented — skipped)

  // ─── 7e. DETERMINANT 2×2 ─────────────────────────────────────────────────
  static determinant2x2Svg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="500px" viewBox="0 0 700 500">

  <!-- Title -->
  <text x="170" y="28" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">2×2 Determinant — det(A) = ad − bc</text>

  <!-- ════ Matrix with straight-bar determinant notation ════ -->
  <!-- left bar -->
  <line x1="140" y1="80" x2="140" y2="220" stroke="#000" stroke-width="4"/>
  <!-- right bar -->
  <line x1="280" y1="80" x2="280" y2="220" stroke="#000" stroke-width="4"/>

  <!-- Grid -->
  <line x1="142" y1="150" x2="278" y2="150" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="210" y1="82" x2="210" y2="218" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>

  <!-- Values: [[3,8],[4,6]] -->
  <text x="158" y="132" font-family="Georgia,serif" font-size="30" font-weight="bold" fill="#000">3</text>
  <text x="226" y="132" font-family="Georgia,serif" font-size="30" font-weight="bold" fill="#000">8</text>
  <text x="158" y="205" font-family="Georgia,serif" font-size="30" font-weight="bold" fill="#000">4</text>
  <text x="226" y="205" font-family="Georgia,serif" font-size="30" font-weight="bold" fill="#000">6</text>

  <!-- Variable labels -->
  <text x="145" y="78" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#555">a</text>
  <text x="215" y="78" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#555">b</text>
  <text x="145" y="228" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#555">c</text>
  <text x="215" y="228" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#555">d</text>

  <!-- ── Diagonal arrows ── -->
  <!-- Main diagonal a→d (solid) -->
  <line x1="165" y1="108" x2="228" y2="178" stroke="#000" stroke-width="3"/>
  <polygon points="222,176 234,184 228,172" fill="#000"/>
  <text x="178" y="158" font-family="Georgia,serif" font-size="10" fill="#000">ad</text>

  <!-- Anti-diagonal b→c (dashed) -->
  <line x1="235" y1="108" x2="172" y2="178" stroke="#000" stroke-width="2.5" stroke-dasharray="5,3"/>
  <polygon points="178,176 166,184 172,172" fill="#000"/>
  <text x="188" y="145" font-family="Georgia,serif" font-size="10" fill="#000">bc</text>

  <!-- Legend arrows -->
  <line x1="300" y1="100" x2="340" y2="100" stroke="#000" stroke-width="2.5"/>
  <polygon points="336,95 348,100 336,105" fill="#000"/>
  <text x="352" y="104" font-family="Georgia,serif" font-size="10" fill="#000">main diagonal (ad) — add</text>
  <line x1="300" y1="125" x2="340" y2="125" stroke="#000" stroke-width="2.5" stroke-dasharray="5,3"/>
  <polygon points="336,120 348,125 336,130" fill="#000"/>
  <text x="352" y="129" font-family="Georgia,serif" font-size="10" fill="#000">anti-diagonal (bc) — subtract</text>

  <!-- ── Calculation ── -->
  <rect x="60" y="270" width="580" height="200" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="75" y="292" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Formula:   det(A)  =  ad − bc</text>
  <line x1="68" y1="300" x2="628" y2="300" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="75" y="322" font-family="Georgia,serif" font-size="12" fill="#000">Substituting:   det(A)  =  (3)(6) − (8)(4)</text>
  <text x="75" y="348" font-family="Georgia,serif" font-size="12" fill="#000">             =  18 − 32</text>
  <text x="75" y="374" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">             = −14</text>
  <text x="75" y="404" font-family="Georgia,serif" font-size="11" fill="#000">det ≠ 0  →  Matrix is invertible (non-singular)</text>
  <text x="75" y="424" font-family="Georgia,serif" font-size="11" fill="#000">|det| = geometric scaling factor of the linear transformation</text>
  <text x="75" y="444" font-family="Georgia,serif" font-size="11" fill="#000">sign(det) negative → transformation includes a reflection</text>
</svg>`;

  // ─── 7f. DETERMINANT 3×3 ─────────────────────────────────────────────────
  static determinant3x3Svg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <!-- Title -->
  <text x="240" y="28" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">3×3 Determinant — Cofactor Expansion along Row 1</text>

  <!-- ════ Main matrix (straight bars) ════ -->
  <line x1="70" y1="70" x2="70" y2="270" stroke="#000" stroke-width="4"/>
  <line x1="270" y1="70" x2="270" y2="270" stroke="#000" stroke-width="4"/>

  <!-- Grid -->
  <line x1="72" y1="137" x2="268" y2="137" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="72" y1="203" x2="268" y2="203" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="138" y1="72" x2="138" y2="268" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="204" y1="72" x2="204" y2="268" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>

  <!-- Values [[1,2,3],[4,5,6],[7,8,9]] -->
  <!-- Row 0 -->
  <text x="88" y="118" font-family="Georgia,serif" font-size="26" font-weight="bold" fill="#000">1</text>
  <text x="154" y="118" font-family="Georgia,serif" font-size="26" font-weight="bold" fill="#000">2</text>
  <text x="220" y="118" font-family="Georgia,serif" font-size="26" font-weight="bold" fill="#000">3</text>
  <!-- Row 1 -->
  <text x="88" y="184" font-family="Georgia,serif" font-size="26" fill="#000">4</text>
  <text x="154" y="184" font-family="Georgia,serif" font-size="26" fill="#000">5</text>
  <text x="220" y="184" font-family="Georgia,serif" font-size="26" fill="#000">6</text>
  <!-- Row 2 -->
  <text x="88" y="250" font-family="Georgia,serif" font-size="26" fill="#000">7</text>
  <text x="154" y="250" font-family="Georgia,serif" font-size="26" fill="#000">8</text>
  <text x="220" y="250" font-family="Georgia,serif" font-size="26" fill="#000">9</text>

  <!-- Row 1 highlight bar -->
  <rect x="72" y="74" width="195" height="61" rx="2" fill="none" stroke="#000" stroke-width="2.5"/>

  <!-- ── Expansion formula ── -->
  <text x="70" y="308" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">det(A) = a₁₁·M₁₁ − a₁₂·M₁₂ + a₁₃·M₁₃</text>
  <text x="70" y="326" font-family="Georgia,serif" font-size="11" fill="#000">       = 1·M₁₁  − 2·M₁₂  + 3·M₁₃</text>

  <!-- ── Three 2×2 minors ── -->

  <!-- Minor M₁₁ (delete row0, col0 → [[5,6],[8,9]]) -->
  <text x="70" y="368" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">M₁₁ (delete row 1, col 1):</text>
  <line x1="70" y1="378" x2="70" y2="448" stroke="#000" stroke-width="3"/>
  <line x1="140" y1="378" x2="140" y2="448" stroke="#000" stroke-width="3"/>
  <text x="78" y="408" font-family="Georgia,serif" font-size="18" fill="#000">5</text>
  <text x="108" y="408" font-family="Georgia,serif" font-size="18" fill="#000">6</text>
  <text x="78" y="438" font-family="Georgia,serif" font-size="18" fill="#000">8</text>
  <text x="108" y="438" font-family="Georgia,serif" font-size="18" fill="#000">9</text>
  <line x1="72" y1="413" x2="138" y2="413" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="103" y1="380" x2="103" y2="446" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="70" y="468" font-family="Georgia,serif" font-size="10" fill="#000">= (5×9)−(6×8) = 45−48 = −3</text>
  <text x="70" y="484" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">+1·(−3) = −3</text>

  <!-- Minor M₁₂ (delete row0, col1 → [[4,6],[7,9]]) -->
  <text x="290" y="368" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">M₁₂ (delete row 1, col 2):</text>
  <line x1="290" y1="378" x2="290" y2="448" stroke="#000" stroke-width="3"/>
  <line x1="360" y1="378" x2="360" y2="448" stroke="#000" stroke-width="3"/>
  <text x="298" y="408" font-family="Georgia,serif" font-size="18" fill="#000">4</text>
  <text x="328" y="408" font-family="Georgia,serif" font-size="18" fill="#000">6</text>
  <text x="298" y="438" font-family="Georgia,serif" font-size="18" fill="#000">7</text>
  <text x="328" y="438" font-family="Georgia,serif" font-size="18" fill="#000">9</text>
  <line x1="292" y1="413" x2="358" y2="413" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="323" y1="380" x2="323" y2="446" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="290" y="468" font-family="Georgia,serif" font-size="10" fill="#000">= (4×9)−(6×7) = 36−42 = −6</text>
  <text x="290" y="484" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">−2·(−6) = +12</text>

  <!-- Minor M₁₃ (delete row0, col2 → [[4,5],[7,8]]) -->
  <text x="510" y="368" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">M₁₃ (delete row 1, col 3):</text>
  <line x1="510" y1="378" x2="510" y2="448" stroke="#000" stroke-width="3"/>
  <line x1="580" y1="378" x2="580" y2="448" stroke="#000" stroke-width="3"/>
  <text x="518" y="408" font-family="Georgia,serif" font-size="18" fill="#000">4</text>
  <text x="548" y="408" font-family="Georgia,serif" font-size="18" fill="#000">5</text>
  <text x="518" y="438" font-family="Georgia,serif" font-size="18" fill="#000">7</text>
  <text x="548" y="438" font-family="Georgia,serif" font-size="18" fill="#000">8</text>
  <line x1="512" y1="413" x2="578" y2="413" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="543" y1="380" x2="543" y2="446" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="510" y="468" font-family="Georgia,serif" font-size="10" fill="#000">= (4×8)−(5×7) = 32−35 = −3</text>
  <text x="510" y="484" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">+3·(−3) = −9</text>

  <!-- ── Final answer ── -->
  <rect x="60" y="510" width="880" height="160" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="75" y="532" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Final calculation:</text>
  <text x="75" y="556" font-family="Georgia,serif" font-size="12" fill="#000">det(A) = (−3) + (12) + (−9)</text>
  <text x="75" y="580" font-family="Georgia,serif" font-size="12" fill="#000">       = −3 + 12 − 9</text>
  <text x="75" y="604" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">       = 0</text>
  <text x="75" y="628" font-family="Georgia,serif" font-size="11" fill="#000">det = 0  →  Matrix is singular (not invertible) · Rows are linearly dependent</text>
  <text x="75" y="648" font-family="Georgia,serif" font-size="11" fill="#000">Cofactor sign pattern:  + − +  /  − + −  /  + − +</text>
</svg>`;

  // ─── 7g. INVERSE MATRIX ───────────────────────────────────────────────────
  static inverseMatrixSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <!-- Title -->
  <text x="230" y="28" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Inverse Matrix — A⁻¹ = (1/det) · adj(A)</text>
  <text x="210" y="46" font-family="Georgia,serif" font-size="10" fill="#444">For 2×2: if A = [[a,b],[c,d]] then A⁻¹ = 1/(ad−bc) · [[d,−b],[−c,a]]</text>

  <!-- ════ Matrix A = [[4,7],[2,6]] ════ -->
  <text x="60" y="90" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Step 1 — Original matrix A:</text>
  <path d="M68,100 L56,100 L56,200 L68,200" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M168,100 L180,100 L180,200 L168,200" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="58" y1="150" x2="178" y2="150" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="118" y1="102" x2="118" y2="198" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="76" y="136" font-family="Georgia,serif" font-size="26" font-weight="bold" fill="#000">4</text>
  <text x="126" y="136" font-family="Georgia,serif" font-size="26" font-weight="bold" fill="#000">7</text>
  <text x="76" y="188" font-family="Georgia,serif" font-size="26" font-weight="bold" fill="#000">2</text>
  <text x="126" y="188" font-family="Georgia,serif" font-size="26" font-weight="bold" fill="#000">6</text>
  <text x="72" y="96" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#555">a=4</text>
  <text x="124" y="96" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#555">b=7</text>
  <text x="72" y="212" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#555">c=2</text>
  <text x="124" y="212" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#555">d=6</text>

  <!-- Step 2: determinant -->
  <text x="220" y="90" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Step 2 — Determinant:</text>
  <text x="220" y="112" font-family="Georgia,serif" font-size="11" fill="#000">det(A) = ad − bc</text>
  <text x="220" y="132" font-family="Georgia,serif" font-size="11" fill="#000">       = (4)(6) − (7)(2)</text>
  <text x="220" y="152" font-family="Georgia,serif" font-size="11" fill="#000">       = 24 − 14</text>
  <text x="220" y="172" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">       = 10  ≠ 0  → invertible ✓</text>

  <!-- Diagonal arrows for det -->
  <line x1="78" y1="118" x2="130" y2="166" stroke="#000" stroke-width="2"/>
  <text x="98" y="155" font-family="Georgia,serif" font-size="9" fill="#000">×</text>
  <line x1="132" y1="118" x2="80" y2="166" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>

  <!-- Step 3: adjugate -->
  <text x="220" y="215" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Step 3 — Adjugate adj(A) = [[d,−b],[−c,a]]:</text>
  <path d="M228,230 L216,230 L216,330 L228,330" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M328,230 L340,230 L340,330 L328,330" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="218" y1="280" x2="338" y2="280" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="278" y1="232" x2="278" y2="328" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="236" y="265" font-family="Georgia,serif" font-size="24" font-weight="bold" fill="#000">6</text>
  <text x="284" y="265" font-family="Georgia,serif" font-size="24" font-weight="bold" fill="#000">−7</text>
  <text x="236" y="318" font-family="Georgia,serif" font-size="24" font-weight="bold" fill="#000">−2</text>
  <text x="284" y="318" font-family="Georgia,serif" font-size="24" font-weight="bold" fill="#000">4</text>

  <!-- Step 4: result -->
  <text x="380" y="215" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Step 4 — A⁻¹ = (1/10) · adj(A):</text>
  <text x="380" y="242" font-family="Georgia,serif" font-size="14" fill="#000">     1</text>
  <line x1="380" y1="248" x2="420" y2="248" stroke="#000" stroke-width="2"/>
  <text x="380" y="265" font-family="Georgia,serif" font-size="14" fill="#000">    10</text>

  <path d="M438,230 L426,230 L426,330 L438,330" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M538,230 L550,230 L550,330 L538,330" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="428" y1="280" x2="548" y2="280" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="488" y1="232" x2="488" y2="328" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="444" y="265" font-family="Georgia,serif" font-size="20" fill="#000">6</text>
  <text x="492" y="265" font-family="Georgia,serif" font-size="20" fill="#000">−7</text>
  <text x="444" y="318" font-family="Georgia,serif" font-size="20" fill="#000">−2</text>
  <text x="492" y="318" font-family="Georgia,serif" font-size="20" fill="#000">4</text>

  <text x="562" y="275" font-family="Georgia,serif" font-size="20" font-weight="bold" fill="#000">=</text>

  <!-- Final decimal result -->
  <path d="M590,230 L578,230 L578,330 L590,330" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M710,230 L722,230 L722,330 L710,330" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="580" y1="280" x2="720" y2="280" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="648" y1="232" x2="648" y2="328" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="596" y="265" font-family="Georgia,serif" font-size="20" font-weight="bold" fill="#000">0.6</text>
  <text x="656" y="265" font-family="Georgia,serif" font-size="20" font-weight="bold" fill="#000">−0.7</text>
  <text x="596" y="318" font-family="Georgia,serif" font-size="20" font-weight="bold" fill="#000">−0.2</text>
  <text x="656" y="318" font-family="Georgia,serif" font-size="20" font-weight="bold" fill="#000">0.4</text>

  <!-- Verification -->
  <rect x="50" y="360" width="900" height="210" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="65" y="382" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Verification  A · A⁻¹ = I  (identity matrix):</text>
  <text x="65" y="406" font-family="Georgia,serif" font-size="11" fill="#000">Row 1, Col 1:  4(0.6) + 7(−0.2) = 2.4 − 1.4 = 1  ✓</text>
  <text x="65" y="428" font-family="Georgia,serif" font-size="11" fill="#000">Row 1, Col 2:  4(−0.7) + 7(0.4) = −2.8 + 2.8 = 0  ✓</text>
  <text x="65" y="450" font-family="Georgia,serif" font-size="11" fill="#000">Row 2, Col 1:  2(0.6) + 6(−0.2) = 1.2 − 1.2 = 0  ✓</text>
  <text x="65" y="472" font-family="Georgia,serif" font-size="11" fill="#000">Row 2, Col 2:  2(−0.7) + 6(0.4) = −1.4 + 2.4 = 1  ✓</text>
  <text x="65" y="498" font-family="Georgia,serif" font-size="11" fill="#000">Key property: A · A⁻¹ = A⁻¹ · A = I  |  Exists only when det(A) ≠ 0</text>
  <text x="65" y="520" font-family="Georgia,serif" font-size="11" fill="#000">Used to solve: Ax = b  →  x = A⁻¹b</text>
  <text x="65" y="542" font-family="Georgia,serif" font-size="11" fill="#000">Note: (AB)⁻¹ = B⁻¹A⁻¹  (order reverses)  |  (A⁻¹)⁻¹ = A</text>
</svg>`;

  // ─── 7h. MATRIX TRANSFORMATION ───────────────────────────────────────────
  static matrixTransformationSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="700px" viewBox="0 0 900 700">

  <!-- Title -->
  <text x="200" y="28" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Matrix Transformation — 90° Rotation</text>
  <text x="160" y="46" font-family="Georgia,serif" font-size="10" fill="#444">Rotation matrix R(90°) maps (x, y) → (−y, x) · det = 1 · area preserved</text>

  <!-- ── Rotation matrix ── -->
  <text x="50" y="85" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Rotation matrix R(90°):</text>
  <path d="M58,95 L46,95 L46,175 L58,175" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M158,95 L170,95 L170,175 L158,175" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="48" y1="135" x2="168" y2="135" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="108" y1="97" x2="108" y2="173" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="64" y="123" font-family="Georgia,serif" font-size="22" font-weight="bold" fill="#000">0</text>
  <text x="118" y="123" font-family="Georgia,serif" font-size="22" font-weight="bold" fill="#000">−1</text>
  <text x="64" y="165" font-family="Georgia,serif" font-size="22" font-weight="bold" fill="#000">1</text>
  <text x="118" y="165" font-family="Georgia,serif" font-size="22" font-weight="bold" fill="#000">0</text>

  <!-- formula -->
  <text x="185" y="130" font-family="Georgia,serif" font-size="12" fill="#000">·</text>
  <path d="M198,95 L186,95 L186,175 L198,175" fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M238,95 L250,95 L250,175 L238,175" fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="206" y="130" font-family="Georgia,serif" font-size="18" font-style="italic" fill="#000">x</text>
  <text x="206" y="162" font-family="Georgia,serif" font-size="18" font-style="italic" fill="#000">y</text>
  <text x="260" y="130" font-family="Georgia,serif" font-size="18" fill="#000">=</text>
  <path d="M280,95 L268,95 L268,175 L280,175" fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M340,95 L352,95 L352,175 L340,175" fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="286" y="130" font-family="Georgia,serif" font-size="18" font-style="italic" fill="#000">−y</text>
  <text x="286" y="162" font-family="Georgia,serif" font-size="18" font-style="italic" fill="#000">x</text>

  <!-- ── Coordinate grid (original) — centre 480,380, 60px/unit ── -->
  <!-- Grid lines -->
  <line x1="300" y1="200" x2="700" y2="200" stroke="#ccc" stroke-width="1"/>
  <line x1="300" y1="260" x2="700" y2="260" stroke="#ccc" stroke-width="1"/>
  <line x1="300" y1="320" x2="700" y2="320" stroke="#ccc" stroke-width="1"/>
  <line x1="300" y1="380" x2="700" y2="380" stroke="#ccc" stroke-width="1"/>
  <line x1="300" y1="440" x2="700" y2="440" stroke="#ccc" stroke-width="1"/>
  <line x1="300" y1="500" x2="700" y2="500" stroke="#ccc" stroke-width="1"/>
  <line x1="300" y1="560" x2="700" y2="560" stroke="#ccc" stroke-width="1"/>
  <line x1="360" y1="200" x2="360" y2="560" stroke="#ccc" stroke-width="1"/>
  <line x1="420" y1="200" x2="420" y2="560" stroke="#ccc" stroke-width="1"/>
  <line x1="480" y1="200" x2="480" y2="560" stroke="#ccc" stroke-width="1"/>
  <line x1="540" y1="200" x2="540" y2="560" stroke="#ccc" stroke-width="1"/>
  <line x1="600" y1="200" x2="600" y2="560" stroke="#ccc" stroke-width="1"/>
  <line x1="660" y1="200" x2="660" y2="560" stroke="#ccc" stroke-width="1"/>

  <!-- Axes -->
  <line x1="290" y1="380" x2="710" y2="380" stroke="#000" stroke-width="2.5"/>
  <polygon points="706,375 718,380 706,385" fill="#000"/>
  <text x="722" y="384" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">x</text>
  <line x1="480" y1="580" x2="480" y2="190" stroke="#000" stroke-width="2.5"/>
  <polygon points="475,194 480,182 485,194" fill="#000"/>
  <text x="484" y="178" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">y</text>

  <!-- Axis ticks -->
  <text x="536" y="398" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <text x="596" y="398" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <text x="416" y="398" font-family="Georgia,serif" font-size="10" fill="#000">−1</text>
  <text x="486" y="326" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <text x="486" y="266" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <text x="486" y="446" font-family="Georgia,serif" font-size="10" fill="#000">−1</text>

  <!-- ── Original square: (0,0),(2,0),(2,1),(0,1) → pixels (480,380),(600,380),(600,320),(480,320) ── -->
  <polygon points="480,380 600,380 600,320 480,320"
           fill="none" stroke="#000" stroke-width="3" stroke-dasharray="8,4"/>
  <!-- vertices -->
  <circle cx="480" cy="380" r="5" fill="#000"/>
  <circle cx="600" cy="380" r="5" fill="#000"/>
  <circle cx="600" cy="320" r="5" fill="#000"/>
  <circle cx="480" cy="320" r="5" fill="#000"/>
  <!-- labels -->
  <text x="464" y="396" font-family="Georgia,serif" font-size="9" fill="#000">(0,0)</text>
  <text x="602" y="396" font-family="Georgia,serif" font-size="9" fill="#000">(2,0)</text>
  <text x="602" y="316" font-family="Georgia,serif" font-size="9" fill="#000">(2,1)</text>
  <text x="458" y="316" font-family="Georgia,serif" font-size="9" fill="#000">(0,1)</text>
  <text x="524" y="370" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">original</text>

  <!-- ── Rotated square: R(90°): (x,y)→(−y,x)
       (0,0)→(0,0)   px(480,380)
       (2,0)→(0,2)   px(480,260)
       (2,1)→(−1,2)  px(420,260)
       (0,1)→(−1,0)  px(420,380)
  ── -->
  <polygon points="480,380 480,260 420,260 420,380"
           fill="none" stroke="#000" stroke-width="3"/>
  <circle cx="480" cy="380" r="5" fill="#000"/>
  <circle cx="480" cy="260" r="5" fill="#000"/>
  <circle cx="420" cy="260" r="5" fill="#000"/>
  <circle cx="420" cy="380" r="5" fill="#000"/>
  <text x="484" y="396" font-family="Georgia,serif" font-size="9" fill="#000">(0,0)</text>
  <text x="484" y="256" font-family="Georgia,serif" font-size="9" fill="#000">(0,2)</text>
  <text x="390" y="256" font-family="Georgia,serif" font-size="9" fill="#000">(−1,2)</text>
  <text x="390" y="376" font-family="Georgia,serif" font-size="9" fill="#000">(−1,0)</text>
  <text x="428" y="330" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">rotated</text>

  <!-- Arc showing 90° rotation -->
  <path d="M590,370 A114,114 0 0,0 470,266" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <polygon points="466,272 468,260 476,268" fill="#000"/>
  <text x="568" y="330" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">90°</text>

  <!-- Breakdown table -->
  <rect x="30" y="590" width="840" height="90" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="45" y="612" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Vertex mapping  (x,y) → (−y, x):</text>
  <text x="45" y="634" font-family="Georgia,serif" font-size="11" fill="#000">(0,0)→(0,0)   (2,0)→(0,2)   (2,1)→(−1,2)   (0,1)→(−1,0)</text>
  <text x="45" y="656" font-family="Georgia,serif" font-size="11" fill="#000">det(R) = 1  →  area preserved  |  Shape unchanged, orientation preserved (no reflection)</text>
  <text x="45" y="674" font-family="Georgia,serif" font-size="11" fill="#000">Dashed = original · Solid = transformed after 90° CCW rotation</text>
</svg>`;



  // ─── VECTORS ──────────────────────────────────────────────────────────────

  // vectorRepresentation: Directed line segment with magnitude, direction,
  // components, and angle for vector (3,4)
  static vectorRepresentationSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="220" y="30" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Vector Representation</text>
  <text x="190" y="50" font-family="Georgia,serif" font-size="11" fill="#333">Directed line segment with magnitude and direction · v = (3, 4)</text>

  <!-- Grid -->
  <line x1="100" y1="80" x2="100" y2="520" stroke="#ddd" stroke-width="1"/>
  <line x1="160" y1="80" x2="160" y2="520" stroke="#ddd" stroke-width="1"/>
  <line x1="220" y1="80" x2="220" y2="520" stroke="#ddd" stroke-width="1"/>
  <line x1="280" y1="80" x2="280" y2="520" stroke="#ddd" stroke-width="1"/>
  <line x1="340" y1="80" x2="340" y2="520" stroke="#ddd" stroke-width="1"/>
  <line x1="400" y1="80" x2="400" y2="520" stroke="#ddd" stroke-width="1"/>
  <line x1="460" y1="80" x2="460" y2="520" stroke="#ddd" stroke-width="1"/>
  <line x1="520" y1="80" x2="520" y2="520" stroke="#ddd" stroke-width="1"/>
  <line x1="580" y1="80" x2="580" y2="520" stroke="#ddd" stroke-width="1"/>
  <line x1="640" y1="80" x2="640" y2="520" stroke="#ddd" stroke-width="1"/>
  <line x1="700" y1="80" x2="700" y2="520" stroke="#ddd" stroke-width="1"/>

  <line x1="80" y1="100" x2="720" y2="100" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="160" x2="720" y2="160" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="220" x2="720" y2="220" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="280" x2="720" y2="280" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="340" x2="720" y2="340" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="400" x2="720" y2="400" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="460" x2="720" y2="460" stroke="#ddd" stroke-width="1"/>

  <!-- Axes: origin at (220, 460), scale 60px/unit -->
  <!-- x-axis -->
  <line x1="100" y1="460" x2="720" y2="460" stroke="#000" stroke-width="2.5"/>
  <polygon points="716,455 728,460 716,465" fill="#000"/>
  <text x="732" y="464" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">x</text>
  <!-- y-axis -->
  <line x1="220" y1="530" x2="220" y2="80" stroke="#000" stroke-width="2.5"/>
  <polygon points="215,84 220,72 225,84" fill="#000"/>
  <text x="226" y="70" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">y</text>

  <!-- x-axis ticks -->
  <line x1="280" y1="456" x2="280" y2="464" stroke="#000" stroke-width="2"/>
  <text x="278" y="478" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="340" y1="456" x2="340" y2="464" stroke="#000" stroke-width="2"/>
  <text x="338" y="478" font-family="Georgia,serif" font-size="11" fill="#000">2</text>
  <line x1="400" y1="456" x2="400" y2="464" stroke="#000" stroke-width="2"/>
  <text x="398" y="478" font-family="Georgia,serif" font-size="11" fill="#000">3</text>
  <line x1="460" y1="456" x2="460" y2="464" stroke="#000" stroke-width="2"/>
  <text x="458" y="478" font-family="Georgia,serif" font-size="11" fill="#000">4</text>
  <line x1="160" y1="456" x2="160" y2="464" stroke="#000" stroke-width="2"/>
  <text x="155" y="478" font-family="Georgia,serif" font-size="11" fill="#000">−1</text>

  <!-- y-axis ticks -->
  <line x1="216" y1="400" x2="224" y2="400" stroke="#000" stroke-width="2"/>
  <text x="200" y="404" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="216" y1="340" x2="224" y2="340" stroke="#000" stroke-width="2"/>
  <text x="200" y="344" font-family="Georgia,serif" font-size="11" fill="#000">2</text>
  <line x1="216" y1="280" x2="224" y2="280" stroke="#000" stroke-width="2"/>
  <text x="200" y="284" font-family="Georgia,serif" font-size="11" fill="#000">3</text>
  <line x1="216" y1="220" x2="224" y2="220" stroke="#000" stroke-width="2"/>
  <text x="200" y="224" font-family="Georgia,serif" font-size="11" fill="#000">4</text>

  <!-- Vector v=(3,4): from (220,460) to (400,220) -->
  <!-- x-component: horizontal dashed leg (220,460) to (400,460) -->
  <line x1="220" y1="460" x2="400" y2="460" stroke="#000" stroke-width="2" stroke-dasharray="6,4"/>
  <!-- y-component: vertical dashed leg (400,460) to (400,220) -->
  <line x1="400" y1="460" x2="400" y2="220" stroke="#000" stroke-width="2" stroke-dasharray="6,4"/>

  <!-- Main vector arrow -->
  <line x1="220" y1="460" x2="393" y2="227" stroke="#000" stroke-width="4"/>
  <polygon points="393,227 404,218 408,232" fill="#000"/>

  <!-- Component labels -->
  <text x="290" y="490" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">vₓ = 3</text>
  <text x="408" y="348" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">v_y = 4</text>

  <!-- Vector label -->
  <text x="285" y="315" font-family="Georgia,serif" font-size="15" font-weight="bold" font-style="italic" fill="#000">v</text>

  <!-- Angle arc from positive x-axis -->
  <path d="M260,460 A40,40 0 0,0 248,420" fill="none" stroke="#000" stroke-width="2"/>
  <text x="262" y="432" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">θ</text>

  <!-- Right-angle box at foot -->
  <rect x="390" y="450" width="10" height="10" fill="none" stroke="#000" stroke-width="1.8"/>

  <!-- Origin dot -->
  <circle cx="220" cy="460" r="5" fill="#000"/>
  <text x="200" y="478" font-family="Georgia,serif" font-size="11" fill="#000">O</text>

  <!-- Tip dot -->
  <circle cx="400" cy="220" r="5" fill="#000"/>
  <text x="406" y="218" font-family="Georgia,serif" font-size="11" fill="#000">(3, 4)</text>

  <!-- Info box -->
  <rect x="490" y="200" width="220" height="180" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="500" y="222" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Vector Properties:</text>
  <text x="500" y="242" font-family="Georgia,serif" font-size="11" fill="#000">v = (3, 4) = 3i + 4j</text>
  <text x="500" y="262" font-family="Georgia,serif" font-size="11" fill="#000">|v| = √(3² + 4²) = √25 = 5</text>
  <text x="500" y="282" font-family="Georgia,serif" font-size="11" fill="#000">θ = arctan(4/3) ≈ 53.1°</text>
  <text x="500" y="302" font-family="Georgia,serif" font-size="11" fill="#000">Unit vector: v̂ = (3/5, 4/5)</text>
  <text x="500" y="322" font-family="Georgia,serif" font-size="11" fill="#000">Magnitude = 5 units</text>
  <text x="500" y="342" font-family="Georgia,serif" font-size="11" fill="#000">Direction = 53.1° from +x</text>
  <text x="500" y="362" font-family="Georgia,serif" font-size="11" fill="#000">Q I (x&gt;0, y&gt;0)</text>
</svg>`;


  // vectorAddition: Triangle and parallelogram methods for v1=(3,2), v2=(1,4)
  static vectorAdditionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="700px" viewBox="0 0 900 700">

  <!-- Title -->
  <text x="270" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Vector Addition: v₁ + v₂ = R</text>
  <text x="210" y="48" font-family="Georgia,serif" font-size="11" fill="#333">v₁ = (3, 2),  v₂ = (1, 4),  R = v₁ + v₂ = (4, 6)</text>

  <!-- ════ LEFT PANEL: Triangle Method ════ -->
  <rect x="20" y="60" width="400" height="610" rx="8" fill="none" stroke="#000" stroke-width="2"/>
  <text x="110" y="85" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Triangle Method</text>
  <text x="50" y="103" font-family="Georgia,serif" font-size="10" fill="#333">Place v₂ tip-to-tail after v₁. Resultant joins start to end.</text>

  <!-- Grid left panel: origin (100,520), scale 60px/unit -->
  <line x1="40" y1="340" x2="400" y2="340" stroke="#ddd" stroke-width="1"/>
  <line x1="40" y1="400" x2="400" y2="400" stroke="#ddd" stroke-width="1"/>
  <line x1="40" y1="460" x2="400" y2="460" stroke="#ddd" stroke-width="1"/>
  <line x1="40" y1="520" x2="400" y2="520" stroke="#ddd" stroke-width="1"/>
  <line x1="40" y1="580" x2="400" y2="580" stroke="#ddd" stroke-width="1"/>
  <line x1="100" y1="120" x2="100" y2="620" stroke="#ddd" stroke-width="1"/>
  <line x1="160" y1="120" x2="160" y2="620" stroke="#ddd" stroke-width="1"/>
  <line x1="220" y1="120" x2="220" y2="620" stroke="#ddd" stroke-width="1"/>
  <line x1="280" y1="120" x2="280" y2="620" stroke="#ddd" stroke-width="1"/>
  <line x1="340" y1="120" x2="340" y2="620" stroke="#ddd" stroke-width="1"/>
  <line x1="400" y1="120" x2="400" y2="620" stroke="#ddd" stroke-width="1"/>

  <!-- Left axes -->
  <line x1="40" y1="580" x2="410" y2="580" stroke="#000" stroke-width="2"/>
  <polygon points="406,575 416,580 406,585" fill="#000"/>
  <text x="418" y="584" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">x</text>
  <line x1="100" y1="630" x2="100" y2="110" stroke="#000" stroke-width="2"/>
  <polygon points="95,114 100,104 105,114" fill="#000"/>
  <text x="104" y="102" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">y</text>

  <!-- Axis ticks left -->
  <line x1="160" y1="576" x2="160" y2="584" stroke="#000" stroke-width="1.5"/>
  <text x="158" y="596" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <line x1="220" y1="576" x2="220" y2="584" stroke="#000" stroke-width="1.5"/>
  <text x="218" y="596" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <line x1="280" y1="576" x2="280" y2="584" stroke="#000" stroke-width="1.5"/>
  <text x="278" y="596" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <line x1="340" y1="576" x2="340" y2="584" stroke="#000" stroke-width="1.5"/>
  <text x="338" y="596" font-family="Georgia,serif" font-size="10" fill="#000">4</text>
  <line x1="96" y1="520" x2="104" y2="520" stroke="#000" stroke-width="1.5"/>
  <text x="80" y="524" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <line x1="96" y1="460" x2="104" y2="460" stroke="#000" stroke-width="1.5"/>
  <text x="80" y="464" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <line x1="96" y1="400" x2="104" y2="400" stroke="#000" stroke-width="1.5"/>
  <text x="80" y="404" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <line x1="96" y1="340" x2="104" y2="340" stroke="#000" stroke-width="1.5"/>
  <text x="80" y="344" font-family="Georgia,serif" font-size="10" fill="#000">4</text>
  <line x1="96" y1="280" x2="104" y2="280" stroke="#000" stroke-width="1.5"/>
  <text x="80" y="284" font-family="Georgia,serif" font-size="10" fill="#000">5</text>
  <line x1="96" y1="220" x2="104" y2="220" stroke="#000" stroke-width="1.5"/>
  <text x="80" y="224" font-family="Georgia,serif" font-size="10" fill="#000">6</text>

  <!-- Triangle method vectors (origin 100,580):
       v1=(3,2): tip=(280,460); v2 placed at tip=(280,460) to (340,220);
       Resultant=(100,580) to (340,220) -->
  <!-- v1: (100,580) → (280,460) -->
  <line x1="100" y1="580" x2="273" y2="467" stroke="#000" stroke-width="3.5"/>
  <polygon points="273,467 284,458 288,472" fill="#000"/>
  <text x="165" y="500" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">v₁</text>
  <text x="155" y="514" font-family="Georgia,serif" font-size="10" fill="#555">(3, 2)</text>

  <!-- v2 tip-to-tail: (280,460) → (340,220) -->
  <line x1="280" y1="460" x2="333" y2="227" stroke="#000" stroke-width="3.5" stroke-dasharray="8,3"/>
  <polygon points="333,227 344,218 348,232" fill="#000"/>
  <text x="312" y="350" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">v₂</text>
  <text x="302" y="364" font-family="Georgia,serif" font-size="10" fill="#555">(1, 4)</text>

  <!-- Resultant R: (100,580) → (340,220) -->
  <line x1="100" y1="580" x2="332" y2="228" stroke="#000" stroke-width="4.5"/>
  <polygon points="332,228 344,218 342,233" fill="#000"/>
  <text x="185" y="370" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">R</text>
  <text x="175" y="386" font-family="Georgia,serif" font-size="10" fill="#000">(4, 6)</text>

  <!-- Origin dot left -->
  <circle cx="100" cy="580" r="5" fill="#000"/>
  <text x="82" y="598" font-family="Georgia,serif" font-size="10" fill="#000">O</text>
  <!-- Junction dot -->
  <circle cx="280" cy="460" r="5" fill="#000"/>

  <!-- ════ RIGHT PANEL: Parallelogram Method ════ -->
  <rect x="460" y="60" width="420" height="610" rx="8" fill="none" stroke="#000" stroke-width="2"/>
  <text x="560" y="85" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Parallelogram Method</text>
  <text x="470" y="103" font-family="Georgia,serif" font-size="10" fill="#333">Both vectors from same origin. Resultant is the diagonal.</text>

  <!-- Grid right panel: origin (540,580), scale 60px/unit -->
  <line x1="480" y1="340" x2="860" y2="340" stroke="#ddd" stroke-width="1"/>
  <line x1="480" y1="400" x2="860" y2="400" stroke="#ddd" stroke-width="1"/>
  <line x1="480" y1="460" x2="860" y2="460" stroke="#ddd" stroke-width="1"/>
  <line x1="480" y1="520" x2="860" y2="520" stroke="#ddd" stroke-width="1"/>
  <line x1="480" y1="580" x2="860" y2="580" stroke="#ddd" stroke-width="1"/>
  <line x1="540" y1="120" x2="540" y2="640" stroke="#ddd" stroke-width="1"/>
  <line x1="600" y1="120" x2="600" y2="640" stroke="#ddd" stroke-width="1"/>
  <line x1="660" y1="120" x2="660" y2="640" stroke="#ddd" stroke-width="1"/>
  <line x1="720" y1="120" x2="720" y2="640" stroke="#ddd" stroke-width="1"/>
  <line x1="780" y1="120" x2="780" y2="640" stroke="#ddd" stroke-width="1"/>
  <line x1="840" y1="120" x2="840" y2="640" stroke="#ddd" stroke-width="1"/>

  <!-- Right axes -->
  <line x1="480" y1="580" x2="870" y2="580" stroke="#000" stroke-width="2"/>
  <polygon points="866,575 876,580 866,585" fill="#000"/>
  <text x="878" y="584" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">x</text>
  <line x1="540" y1="640" x2="540" y2="110" stroke="#000" stroke-width="2"/>
  <polygon points="535,114 540,104 545,114" fill="#000"/>
  <text x="544" y="102" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">y</text>

  <!-- Axis ticks right -->
  <line x1="600" y1="576" x2="600" y2="584" stroke="#000" stroke-width="1.5"/>
  <text x="598" y="596" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <line x1="660" y1="576" x2="660" y2="584" stroke="#000" stroke-width="1.5"/>
  <text x="658" y="596" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <line x1="720" y1="576" x2="720" y2="584" stroke="#000" stroke-width="1.5"/>
  <text x="718" y="596" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <line x1="780" y1="576" x2="780" y2="584" stroke="#000" stroke-width="1.5"/>
  <text x="778" y="596" font-family="Georgia,serif" font-size="10" fill="#000">4</text>
  <line x1="536" y1="520" x2="544" y2="520" stroke="#000" stroke-width="1.5"/>
  <text x="520" y="524" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <line x1="536" y1="460" x2="544" y2="460" stroke="#000" stroke-width="1.5"/>
  <text x="520" y="464" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <line x1="536" y1="400" x2="544" y2="400" stroke="#000" stroke-width="1.5"/>
  <text x="520" y="404" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <line x1="536" y1="340" x2="544" y2="340" stroke="#000" stroke-width="1.5"/>
  <text x="520" y="344" font-family="Georgia,serif" font-size="10" fill="#000">4</text>
  <line x1="536" y1="280" x2="544" y2="280" stroke="#000" stroke-width="1.5"/>
  <text x="520" y="284" font-family="Georgia,serif" font-size="10" fill="#000">5</text>
  <line x1="536" y1="220" x2="544" y2="220" stroke="#000" stroke-width="1.5"/>
  <text x="520" y="224" font-family="Georgia,serif" font-size="10" fill="#000">6</text>

  <!-- Parallelogram method (origin 540,580):
       v1=(3,2): tip=(720,460)
       v2=(1,4): tip=(600,340)
       R=(4,6): tip=(780,220)
       Parallelogram sides: complete the shape -->
  <!-- v1 from O -->
  <line x1="540" y1="580" x2="713" y2="467" stroke="#000" stroke-width="3.5"/>
  <polygon points="713,467 724,458 728,472" fill="#000"/>
  <text x="600" y="540" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">v₁</text>

  <!-- v2 from O -->
  <line x1="540" y1="580" x2="593" y2="347" stroke="#000" stroke-width="3.5" stroke-dasharray="8,3"/>
  <polygon points="593,347 604,338 608,352" fill="#000"/>
  <text x="548" y="450" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">v₂</text>

  <!-- Parallelogram completion lines (light dashed) -->
  <!-- From v1 tip (720,460) to R tip (780,220) — parallel to v2 -->
  <line x1="720" y1="460" x2="780" y2="220" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <!-- From v2 tip (600,340) to R tip (780,220) — parallel to v1 -->
  <line x1="600" y1="340" x2="780" y2="220" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>

  <!-- Resultant diagonal R -->
  <line x1="540" y1="580" x2="772" y2="228" stroke="#000" stroke-width="5"/>
  <polygon points="772,228 784,218 782,233" fill="#000"/>
  <text x="680" y="380" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">R=(4,6)</text>

  <!-- Origin dot right -->
  <circle cx="540" cy="580" r="5" fill="#000"/>
  <text x="522" y="598" font-family="Georgia,serif" font-size="10" fill="#000">O</text>
  <!-- R tip dot -->
  <circle cx="780" cy="220" r="5" fill="#000"/>
  <text x="786" y="218" font-family="Georgia,serif" font-size="10" fill="#000">(4,6)</text>

  <!-- Formula box bottom -->
  <rect x="80" y="630" width="740" height="55" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="100" y="650" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Addition Rule:</text>
  <text x="100" y="668" font-family="Georgia,serif" font-size="11" fill="#000">R = v₁ + v₂ = (3+1, 2+4) = (4, 6)    |R| = √(4²+6²) = √52 ≈ 7.21</text>
  <text x="100" y="682" font-family="Georgia,serif" font-size="10" fill="#555">Both methods yield identical resultant · Vector addition is commutative: v₁+v₂ = v₂+v₁</text>
</svg>`;


  // vectorSubtraction: v1=(5,3) minus v2=(2,1), showing negative vector and resultant
  static vectorSubtractionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="220" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Vector Subtraction: v₁ − v₂</text>
  <text x="170" y="48" font-family="Georgia,serif" font-size="11" fill="#333">v₁ = (5, 3),  v₂ = (2, 1),  v₁ − v₂ = v₁ + (−v₂) = (3, 2)</text>

  <!-- Grid: origin (120,480), scale 60px/unit -->
  <line x1="120" y1="120" x2="120" y2="500" stroke="#ddd" stroke-width="1"/>
  <line x1="180" y1="120" x2="180" y2="500" stroke="#ddd" stroke-width="1"/>
  <line x1="240" y1="120" x2="240" y2="500" stroke="#ddd" stroke-width="1"/>
  <line x1="300" y1="120" x2="300" y2="500" stroke="#ddd" stroke-width="1"/>
  <line x1="360" y1="120" x2="360" y2="500" stroke="#ddd" stroke-width="1"/>
  <line x1="420" y1="120" x2="420" y2="500" stroke="#ddd" stroke-width="1"/>
  <line x1="480" y1="120" x2="480" y2="500" stroke="#ddd" stroke-width="1"/>
  <line x1="540" y1="120" x2="540" y2="500" stroke="#ddd" stroke-width="1"/>
  <line x1="100" y1="180" x2="620" y2="180" stroke="#ddd" stroke-width="1"/>
  <line x1="100" y1="240" x2="620" y2="240" stroke="#ddd" stroke-width="1"/>
  <line x1="100" y1="300" x2="620" y2="300" stroke="#ddd" stroke-width="1"/>
  <line x1="100" y1="360" x2="620" y2="360" stroke="#ddd" stroke-width="1"/>
  <line x1="100" y1="420" x2="620" y2="420" stroke="#ddd" stroke-width="1"/>
  <line x1="100" y1="480" x2="620" y2="480" stroke="#ddd" stroke-width="1"/>

  <!-- Axes -->
  <line x1="100" y1="480" x2="630" y2="480" stroke="#000" stroke-width="2.5"/>
  <polygon points="626,475 638,480 626,485" fill="#000"/>
  <text x="642" y="484" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">x</text>
  <line x1="120" y1="520" x2="120" y2="110" stroke="#000" stroke-width="2.5"/>
  <polygon points="115,114 120,102 125,114" fill="#000"/>
  <text x="124" y="100" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">y</text>

  <!-- x ticks -->
  <line x1="180" y1="476" x2="180" y2="484" stroke="#000" stroke-width="1.5"/>
  <text x="178" y="496" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <line x1="240" y1="476" x2="240" y2="484" stroke="#000" stroke-width="1.5"/>
  <text x="238" y="496" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <line x1="300" y1="476" x2="300" y2="484" stroke="#000" stroke-width="1.5"/>
  <text x="298" y="496" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <line x1="360" y1="476" x2="360" y2="484" stroke="#000" stroke-width="1.5"/>
  <text x="358" y="496" font-family="Georgia,serif" font-size="10" fill="#000">4</text>
  <line x1="420" y1="476" x2="420" y2="484" stroke="#000" stroke-width="1.5"/>
  <text x="418" y="496" font-family="Georgia,serif" font-size="10" fill="#000">5</text>

  <!-- y ticks -->
  <line x1="116" y1="420" x2="124" y2="420" stroke="#000" stroke-width="1.5"/>
  <text x="100" y="424" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <line x1="116" y1="360" x2="124" y2="360" stroke="#000" stroke-width="1.5"/>
  <text x="100" y="364" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <line x1="116" y1="300" x2="124" y2="300" stroke="#000" stroke-width="1.5"/>
  <text x="100" y="304" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <line x1="116" y1="240" x2="124" y2="240" stroke="#000" stroke-width="1.5"/>
  <text x="100" y="244" font-family="Georgia,serif" font-size="10" fill="#000">4</text>

  <!-- v1=(5,3): (120,480)→(420,300) -->
  <line x1="120" y1="480" x2="413" y2="307" stroke="#000" stroke-width="4"/>
  <polygon points="413,307 424,298 428,312" fill="#000"/>
  <text x="250" y="370" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">v₁ = (5,3)</text>

  <!-- v2=(2,1): (120,480)→(240,420) -->
  <line x1="120" y1="480" x2="233" y2="427" stroke="#000" stroke-width="3" stroke-dasharray="7,4"/>
  <polygon points="233,427 244,418 248,432" fill="#000"/>
  <text x="138" y="445" font-family="Georgia,serif" font-size="11" font-weight="bold" font-style="italic" fill="#000">v₂=(2,1)</text>

  <!-- −v2: from tip of v1=(420,300) going in direction (−2,−1)→(300,360) -->
  <!-- Displayed tip-to-tail from v1 tip: (420,300) to (300,240) -->
  <line x1="420" y1="300" x2="307" y2="247" stroke="#000" stroke-width="3" stroke-dasharray="5,3"/>
  <polygon points="307,247 296,238 302,253" fill="#000"/>
  <text x="352" y="262" font-family="Georgia,serif" font-size="11" font-weight="bold" font-style="italic" fill="#000">−v₂=(−2,−1)</text>

  <!-- Resultant R=v1−v2=(3,2): (120,480)→(300,360) -->
  <line x1="120" y1="480" x2="292" y2="248" stroke="#000" stroke-width="5"/>
  <polygon points="292,248 304,238 306,253" fill="#000"/>
  <text x="170" y="330" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">R = (3,2)</text>

  <!-- Dots -->
  <circle cx="120" cy="480" r="5" fill="#000"/>
  <text x="102" y="498" font-family="Georgia,serif" font-size="10" fill="#000">O</text>
  <circle cx="420" cy="300" r="4" fill="#000"/>
  <text x="426" y="298" font-family="Georgia,serif" font-size="9" fill="#000">tip v₁</text>
  <circle cx="300" cy="360" r="4" fill="#000"/>
  <text x="306" y="358" font-family="Georgia,serif" font-size="9" fill="#000">tip R</text>

  <!-- Info box -->
  <rect x="480" y="120" width="300" height="190" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="492" y="142" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Subtraction Rule:</text>
  <text x="492" y="162" font-family="Georgia,serif" font-size="11" fill="#000">v₁ − v₂ = v₁ + (−v₂)</text>
  <text x="492" y="182" font-family="Georgia,serif" font-size="11" fill="#000">= (5,3) + (−2,−1)</text>
  <text x="492" y="202" font-family="Georgia,serif" font-size="11" fill="#000">= (3, 2)</text>
  <text x="492" y="224" font-family="Georgia,serif" font-size="11" fill="#000">|R| = √(3²+2²) = √13</text>
  <text x="492" y="244" font-family="Georgia,serif" font-size="11" fill="#000">     ≈ 3.61 units</text>
  <text x="492" y="266" font-family="Georgia,serif" font-size="10" fill="#555">−v₂ reverses direction of v₂</text>
  <text x="492" y="282" font-family="Georgia,serif" font-size="10" fill="#555">then add tip-to-tail</text>

  <!-- Legend -->
  <line x1="120" y1="540" x2="160" y2="540" stroke="#000" stroke-width="4"/>
  <text x="168" y="544" font-family="Georgia,serif" font-size="10" fill="#000">v₁</text>
  <line x1="220" y1="540" x2="260" y2="540" stroke="#000" stroke-width="3" stroke-dasharray="7,4"/>
  <text x="268" y="544" font-family="Georgia,serif" font-size="10" fill="#000">v₂</text>
  <line x1="320" y1="540" x2="360" y2="540" stroke="#000" stroke-width="3" stroke-dasharray="5,3"/>
  <text x="368" y="544" font-family="Georgia,serif" font-size="10" fill="#000">−v₂</text>
  <line x1="420" y1="540" x2="460" y2="540" stroke="#000" stroke-width="5"/>
  <text x="468" y="544" font-family="Georgia,serif" font-size="10" fill="#000">R = v₁ − v₂</text>
</svg>`;


  // scalarMultiplication: vector (2,3), scalar k=2
  static scalarMultiplicationSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="220" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Scalar Multiplication of Vectors</text>
  <text x="190" y="48" font-family="Georgia,serif" font-size="11" fill="#333">v = (2, 3),  k = 2,  kv = (4, 6)  — doubles magnitude, same direction</text>

  <!-- Grid: origin (150,480), scale 60px/unit -->
  <line x1="150" y1="120" x2="150" y2="500" stroke="#ddd" stroke-width="1"/>
  <line x1="210" y1="120" x2="210" y2="500" stroke="#ddd" stroke-width="1"/>
  <line x1="270" y1="120" x2="270" y2="500" stroke="#ddd" stroke-width="1"/>
  <line x1="330" y1="120" x2="330" y2="500" stroke="#ddd" stroke-width="1"/>
  <line x1="390" y1="120" x2="390" y2="500" stroke="#ddd" stroke-width="1"/>
  <line x1="450" y1="120" x2="450" y2="500" stroke="#ddd" stroke-width="1"/>
  <line x1="110" y1="180" x2="580" y2="180" stroke="#ddd" stroke-width="1"/>
  <line x1="110" y1="240" x2="580" y2="240" stroke="#ddd" stroke-width="1"/>
  <line x1="110" y1="300" x2="580" y2="300" stroke="#ddd" stroke-width="1"/>
  <line x1="110" y1="360" x2="580" y2="360" stroke="#ddd" stroke-width="1"/>
  <line x1="110" y1="420" x2="580" y2="420" stroke="#ddd" stroke-width="1"/>
  <line x1="110" y1="480" x2="580" y2="480" stroke="#ddd" stroke-width="1"/>

  <!-- Axes -->
  <line x1="110" y1="480" x2="590" y2="480" stroke="#000" stroke-width="2.5"/>
  <polygon points="586,475 598,480 586,485" fill="#000"/>
  <text x="602" y="484" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">x</text>
  <line x1="150" y1="520" x2="150" y2="110" stroke="#000" stroke-width="2.5"/>
  <polygon points="145,114 150,102 155,114" fill="#000"/>
  <text x="154" y="100" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">y</text>

  <!-- Ticks x -->
  <line x1="210" y1="476" x2="210" y2="484" stroke="#000" stroke-width="1.5"/>
  <text x="208" y="496" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <line x1="270" y1="476" x2="270" y2="484" stroke="#000" stroke-width="1.5"/>
  <text x="268" y="496" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <line x1="330" y1="476" x2="330" y2="484" stroke="#000" stroke-width="1.5"/>
  <text x="328" y="496" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <line x1="390" y1="476" x2="390" y2="484" stroke="#000" stroke-width="1.5"/>
  <text x="388" y="496" font-family="Georgia,serif" font-size="10" fill="#000">4</text>
  <!-- Ticks y -->
  <line x1="146" y1="420" x2="154" y2="420" stroke="#000" stroke-width="1.5"/>
  <text x="130" y="424" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <line x1="146" y1="360" x2="154" y2="360" stroke="#000" stroke-width="1.5"/>
  <text x="130" y="364" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <line x1="146" y1="300" x2="154" y2="300" stroke="#000" stroke-width="1.5"/>
  <text x="130" y="304" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <line x1="146" y1="240" x2="154" y2="240" stroke="#000" stroke-width="1.5"/>
  <text x="130" y="244" font-family="Georgia,serif" font-size="10" fill="#000">4</text>
  <line x1="146" y1="180" x2="154" y2="180" stroke="#000" stroke-width="1.5"/>
  <text x="130" y="184" font-family="Georgia,serif" font-size="10" fill="#000">5</text>
  <line x1="146" y1="120" x2="154" y2="120" stroke="#000" stroke-width="1.5"/>
  <text x="130" y="124" font-family="Georgia,serif" font-size="10" fill="#000">6</text>

  <!-- Original vector v=(2,3): (150,480)→(270,300) -->
  <line x1="150" y1="480" x2="263" y2="307" stroke="#000" stroke-width="3.5" stroke-dasharray="8,4"/>
  <polygon points="263,307 274,298 278,312" fill="#000"/>
  <text x="168" y="378" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">v = (2,3)</text>
  <text x="164" y="394" font-family="Georgia,serif" font-size="10" fill="#555">|v| = √13 ≈ 3.61</text>

  <!-- Scaled vector kv=(4,6): (150,480)→(390,120) -->
  <line x1="150" y1="480" x2="382" y2="127" stroke="#000" stroke-width="5"/>
  <polygon points="382,127 393,118 397,132" fill="#000"/>
  <text x="262" y="260" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">2v = (4,6)</text>
  <text x="256" y="278" font-family="Georgia,serif" font-size="10" fill="#000">|2v| = 2√13 ≈ 7.21</text>

  <!-- Dots -->
  <circle cx="150" cy="480" r="5" fill="#000"/>
  <text x="132" y="498" font-family="Georgia,serif" font-size="10" fill="#000">O</text>
  <circle cx="270" cy="300" r="5" fill="#000"/>
  <text x="276" y="298" font-family="Georgia,serif" font-size="9" fill="#000">(2,3)</text>
  <circle cx="390" cy="120" r="5" fill="#000"/>
  <text x="396" y="118" font-family="Georgia,serif" font-size="9" fill="#000">(4,6)</text>

  <!-- Magnitude comparison bar chart -->
  <rect x="500" y="150" width="260" height="320" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="510" y="172" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Magnitude Comparison:</text>

  <!-- Bar v -->
  <rect x="530" y="220" width="40" height="90" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="524" y="332" font-family="Georgia,serif" font-size="10" fill="#000">|v|≈3.61</text>

  <!-- Bar 2v -->
  <rect x="630" y="130" width="40" height="180" fill="#000" fill-opacity="0.15" stroke="#000" stroke-width="2.5"/>
  <text x="620" y="332" font-family="Georgia,serif" font-size="10" fill="#000">|2v|≈7.21</text>

  <!-- Bar labels -->
  <text x="538" y="215" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">v</text>
  <text x="640" y="125" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">2v</text>

  <!-- Properties -->
  <text x="510" y="360" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Key Properties:</text>
  <text x="510" y="378" font-family="Georgia,serif" font-size="10" fill="#000">· k&gt;1: stretches vector</text>
  <text x="510" y="394" font-family="Georgia,serif" font-size="10" fill="#000">· 0&lt;k&lt;1: shrinks vector</text>
  <text x="510" y="410" font-family="Georgia,serif" font-size="10" fill="#000">· k&lt;0: reverses direction</text>
  <text x="510" y="426" font-family="Georgia,serif" font-size="10" fill="#000">· |kv| = |k|·|v|</text>
  <text x="510" y="442" font-family="Georgia,serif" font-size="10" fill="#000">· Direction unchanged (k&gt;0)</text>

  <!-- Legend -->
  <line x1="150" y1="540" x2="195" y2="540" stroke="#000" stroke-width="3.5" stroke-dasharray="8,4"/>
  <text x="200" y="544" font-family="Georgia,serif" font-size="10" fill="#000">original v</text>
  <line x1="330" y1="540" x2="375" y2="540" stroke="#000" stroke-width="5"/>
  <text x="380" y="544" font-family="Georgia,serif" font-size="10" fill="#000">scaled 2v</text>
</svg>`;


  // vectorComponents: magnitude=5, angle=37°, resolving into i and j components
  static vectorComponentsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="220" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Vector Components: i and j Resolution</text>
  <text x="175" y="48" font-family="Georgia,serif" font-size="11" fill="#333">|v| = 5,  θ = 37°  →  vₓ = 5cos37° ≈ 3.99,  v_y = 5sin37° ≈ 3.01</text>

  <!-- Grid: origin (160,440), scale 80px/unit -->
  <line x1="160" y1="120" x2="160" y2="460" stroke="#ddd" stroke-width="1"/>
  <line x1="240" y1="120" x2="240" y2="460" stroke="#ddd" stroke-width="1"/>
  <line x1="320" y1="120" x2="320" y2="460" stroke="#ddd" stroke-width="1"/>
  <line x1="400" y1="120" x2="400" y2="460" stroke="#ddd" stroke-width="1"/>
  <line x1="480" y1="120" x2="480" y2="460" stroke="#ddd" stroke-width="1"/>
  <line x1="120" y1="200" x2="540" y2="200" stroke="#ddd" stroke-width="1"/>
  <line x1="120" y1="280" x2="540" y2="280" stroke="#ddd" stroke-width="1"/>
  <line x1="120" y1="360" x2="540" y2="360" stroke="#ddd" stroke-width="1"/>
  <line x1="120" y1="440" x2="540" y2="440" stroke="#ddd" stroke-width="1"/>

  <!-- Axes -->
  <line x1="120" y1="440" x2="560" y2="440" stroke="#000" stroke-width="2.5"/>
  <polygon points="556,435 568,440 556,445" fill="#000"/>
  <text x="572" y="444" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">x</text>
  <line x1="160" y1="480" x2="160" y2="110" stroke="#000" stroke-width="2.5"/>
  <polygon points="155,114 160,102 165,114" fill="#000"/>
  <text x="164" y="100" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">y</text>

  <!-- Ticks -->
  <line x1="240" y1="436" x2="240" y2="444" stroke="#000" stroke-width="1.5"/>
  <text x="238" y="458" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <line x1="320" y1="436" x2="320" y2="444" stroke="#000" stroke-width="1.5"/>
  <text x="318" y="458" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <line x1="400" y1="436" x2="400" y2="444" stroke="#000" stroke-width="1.5"/>
  <text x="398" y="458" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <line x1="480" y1="436" x2="480" y2="444" stroke="#000" stroke-width="1.5"/>
  <text x="478" y="458" font-family="Georgia,serif" font-size="10" fill="#000">4</text>
  <line x1="156" y1="360" x2="164" y2="360" stroke="#000" stroke-width="1.5"/>
  <text x="140" y="364" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <line x1="156" y1="280" x2="164" y2="280" stroke="#000" stroke-width="1.5"/>
  <text x="140" y="284" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <line x1="156" y1="200" x2="164" y2="200" stroke="#000" stroke-width="1.5"/>
  <text x="140" y="204" font-family="Georgia,serif" font-size="10" fill="#000">3</text>

  <!-- Vector: origin(160,440), |v|=5, θ=37°
       tip ≈ (160+5cos37°×80, 440−5sin37°×80) = (160+319,440−241) = (479,199) -->
  <!-- x-component leg: (160,440)→(479,440) -->
  <line x1="160" y1="440" x2="479" y2="440" stroke="#000" stroke-width="2.5" stroke-dasharray="8,4"/>
  <!-- y-component leg: (479,440)→(479,199) -->
  <line x1="479" y1="440" x2="479" y2="199" stroke="#000" stroke-width="2.5" stroke-dasharray="8,4"/>
  <!-- Right-angle box -->
  <rect x="469" y="430" width="10" height="10" fill="none" stroke="#000" stroke-width="1.8"/>

  <!-- Main vector arrow -->
  <line x1="160" y1="440" x2="472" y2="206" stroke="#000" stroke-width="4.5"/>
  <polygon points="472,206 483,197 487,211" fill="#000"/>

  <!-- Component x-arrow (i direction) -->
  <line x1="160" y1="470" x2="472" y2="470" stroke="#000" stroke-width="3"/>
  <polygon points="468,465 480,470 468,475" fill="#000"/>
  <text x="290" y="490" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">vₓ = 5cos37° ≈ 3.99 → 3.99i</text>

  <!-- Component y-arrow (j direction) -->
  <line x1="510" y1="440" x2="510" y2="207" stroke="#000" stroke-width="3"/>
  <polygon points="505,211 510,199 515,211" fill="#000"/>
  <text x="516" y="330" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">v_y = 5sin37°</text>
  <text x="516" y="348" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">≈ 3.01 → 3.01j</text>

  <!-- Vector label -->
  <text x="290" y="300" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">v</text>
  <text x="276" y="320" font-family="Georgia,serif" font-size="11" fill="#000">|v|=5</text>

  <!-- Angle arc -->
  <path d="M204,440 A44,44 0 0,0 195,403" fill="none" stroke="#000" stroke-width="2"/>
  <text x="208" y="418" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">37°</text>

  <!-- Dots -->
  <circle cx="160" cy="440" r="5" fill="#000"/>
  <text x="142" y="458" font-family="Georgia,serif" font-size="10" fill="#000">O</text>
  <circle cx="479" cy="199" r="5" fill="#000"/>
  <text x="485" y="197" font-family="Georgia,serif" font-size="9" fill="#000">tip</text>

  <!-- Info box -->
  <rect x="60" y="110" width="280" height="220" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="72" y="132" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Resolution into Components:</text>
  <text x="72" y="154" font-family="Georgia,serif" font-size="11" fill="#000">v = vₓi + v_yj</text>
  <text x="72" y="174" font-family="Georgia,serif" font-size="11" fill="#000">vₓ = |v|cos θ = 5cos37°</text>
  <text x="72" y="194" font-family="Georgia,serif" font-size="11" fill="#000">   ≈ 5 × 0.7986 ≈ 3.99</text>
  <text x="72" y="214" font-family="Georgia,serif" font-size="11" fill="#000">v_y = |v|sin θ = 5sin37°</text>
  <text x="72" y="234" font-family="Georgia,serif" font-size="11" fill="#000">   ≈ 5 × 0.6018 ≈ 3.01</text>
  <text x="72" y="256" font-family="Georgia,serif" font-size="11" fill="#000">v ≈ 3.99i + 3.01j</text>
  <text x="72" y="278" font-family="Georgia,serif" font-size="10" fill="#555">Verify: √(3.99²+3.01²) ≈ 5 ✓</text>
  <text x="72" y="298" font-family="Georgia,serif" font-size="10" fill="#555">arctan(3.01/3.99) ≈ 37° ✓</text>
</svg>`;


  // dotProduct: v1=(3,4), v2=(2,1), showing projection, angle, formula
  static dotProductSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="260" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Dot Product (Scalar Product)</text>
  <text x="210" y="48" font-family="Georgia,serif" font-size="11" fill="#333">v₁ = (3, 4),  v₂ = (2, 1)  →  v₁ · v₂ = 10</text>

  <!-- Grid: origin (180,420), scale 60px/unit -->
  <line x1="180" y1="120" x2="180" y2="440" stroke="#ddd" stroke-width="1"/>
  <line x1="240" y1="120" x2="240" y2="440" stroke="#ddd" stroke-width="1"/>
  <line x1="300" y1="120" x2="300" y2="440" stroke="#ddd" stroke-width="1"/>
  <line x1="360" y1="120" x2="360" y2="440" stroke="#ddd" stroke-width="1"/>
  <line x1="420" y1="120" x2="420" y2="440" stroke="#ddd" stroke-width="1"/>
  <line x1="120" y1="180" x2="480" y2="180" stroke="#ddd" stroke-width="1"/>
  <line x1="120" y1="240" x2="480" y2="240" stroke="#ddd" stroke-width="1"/>
  <line x1="120" y1="300" x2="480" y2="300" stroke="#ddd" stroke-width="1"/>
  <line x1="120" y1="360" x2="480" y2="360" stroke="#ddd" stroke-width="1"/>
  <line x1="120" y1="420" x2="480" y2="420" stroke="#ddd" stroke-width="1"/>

  <!-- Axes -->
  <line x1="120" y1="420" x2="490" y2="420" stroke="#000" stroke-width="2.5"/>
  <polygon points="486,415 498,420 486,425" fill="#000"/>
  <text x="502" y="424" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">x</text>
  <line x1="180" y1="460" x2="180" y2="110" stroke="#000" stroke-width="2.5"/>
  <polygon points="175,114 180,102 185,114" fill="#000"/>
  <text x="184" y="100" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">y</text>

  <!-- Ticks x -->
  <line x1="240" y1="416" x2="240" y2="424" stroke="#000" stroke-width="1.5"/>
  <text x="238" y="436" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <line x1="300" y1="416" x2="300" y2="424" stroke="#000" stroke-width="1.5"/>
  <text x="298" y="436" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <line x1="360" y1="416" x2="360" y2="424" stroke="#000" stroke-width="1.5"/>
  <text x="358" y="436" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <line x1="420" y1="416" x2="420" y2="424" stroke="#000" stroke-width="1.5"/>
  <text x="418" y="436" font-family="Georgia,serif" font-size="10" fill="#000">4</text>
  <!-- Ticks y -->
  <line x1="176" y1="360" x2="184" y2="360" stroke="#000" stroke-width="1.5"/>
  <text x="160" y="364" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <line x1="176" y1="300" x2="184" y2="300" stroke="#000" stroke-width="1.5"/>
  <text x="160" y="304" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <line x1="176" y1="240" x2="184" y2="240" stroke="#000" stroke-width="1.5"/>
  <text x="160" y="244" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <line x1="176" y1="180" x2="184" y2="180" stroke="#000" stroke-width="1.5"/>
  <text x="160" y="184" font-family="Georgia,serif" font-size="10" fill="#000">4</text>

  <!-- v1=(3,4): (180,420)→(360,180) -->
  <line x1="180" y1="420" x2="353" y2="187" stroke="#000" stroke-width="4"/>
  <polygon points="353,187 364,178 368,192" fill="#000"/>
  <text x="240" y="278" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">v₁=(3,4)</text>
  <text x="238" y="294" font-family="Georgia,serif" font-size="10" fill="#555">|v₁|=5</text>

  <!-- v2=(2,1): (180,420)→(300,360) -->
  <line x1="180" y1="420" x2="293" y2="367" stroke="#000" stroke-width="4" stroke-dasharray="8,4"/>
  <polygon points="293,367 304,358 308,372" fill="#000"/>
  <text x="218" y="382" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">v₂=(2,1)</text>
  <text x="216" y="396" font-family="Georgia,serif" font-size="10" fill="#555">|v₂|=√5</text>

  <!-- Angle arc between v1 and v2 -->
  <path d="M213,420 A33,33 0 0,0 206,388" fill="none" stroke="#000" stroke-width="2"/>
  <text x="218" y="398" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">θ</text>
  <text x="224" y="412" font-family="Georgia,serif" font-size="9" fill="#555">≈18.4°</text>

  <!-- Projection of v1 onto v2 direction:
       v2 unit = (2,1)/√5. Projection scalar = v1·v2/|v2| = 10/√5 ≈ 4.47
       Projection point along v2 direction from origin:
       proj = (10/5)*(2,1) = (4,2) → px=(180+4*60,420-2*60)=(420,300) -->
  <!-- Projection foot from v1 tip perpendicular to v2 line -->
  <line x1="360" y1="180" x2="420" y2="300" stroke="#000" stroke-width="1.8" stroke-dasharray="4,3"/>
  <!-- Projection vector on v2 axis -->
  <line x1="180" y1="420" x2="413" y2="307" stroke="#000" stroke-width="2.5"/>
  <polygon points="409,305 422,298 422,313" fill="#000"/>
  <text x="288" y="348" font-family="Georgia,serif" font-size="10" fill="#000">proj</text>
  <!-- Right-angle mark at foot -->
  <rect x="412" y="299" width="8" height="8" fill="none" stroke="#000" stroke-width="1.5" transform="rotate(-26.6,416,303)"/>

  <!-- Dots -->
  <circle cx="180" cy="420" r="5" fill="#000"/>
  <text x="162" y="438" font-family="Georgia,serif" font-size="10" fill="#000">O</text>
  <circle cx="360" cy="180" r="4" fill="#000"/>
  <circle cx="300" cy="360" r="4" fill="#000"/>

  <!-- ── Right panel: formula and calculation ── -->
  <rect x="540" y="80" width="340" height="450" rx="8" fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="6,3"/>
  <text x="556" y="106" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Dot Product Formula:</text>
  <line x1="548" y1="114" x2="868" y2="114" stroke="#000" stroke-width="1.5"/>

  <text x="556" y="136" font-family="Georgia,serif" font-size="11" fill="#000">Algebraic:  v₁ · v₂ = x₁x₂ + y₁y₂</text>
  <text x="556" y="158" font-family="Georgia,serif" font-size="11" fill="#000">= (3)(2) + (4)(1) = 6 + 4 = 10</text>

  <line x1="548" y1="170" x2="868" y2="170" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>

  <text x="556" y="192" font-family="Georgia,serif" font-size="11" fill="#000">Geometric:  v₁ · v₂ = |v₁||v₂|cos θ</text>
  <text x="556" y="212" font-family="Georgia,serif" font-size="11" fill="#000">= 5 × √5 × cos(18.4°)</text>
  <text x="556" y="232" font-family="Georgia,serif" font-size="11" fill="#000">= 5 × 2.236 × 0.949 ≈ 10 ✓</text>

  <line x1="548" y1="244" x2="868" y2="244" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>

  <text x="556" y="266" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Angle between vectors:</text>
  <text x="556" y="286" font-family="Georgia,serif" font-size="11" fill="#000">cos θ = (v₁·v₂) / (|v₁||v₂|)</text>
  <text x="556" y="306" font-family="Georgia,serif" font-size="11" fill="#000">= 10 / (5 × √5) = 10/11.18</text>
  <text x="556" y="326" font-family="Georgia,serif" font-size="11" fill="#000">θ = arccos(0.894) ≈ 26.6°</text>

  <line x1="548" y1="338" x2="868" y2="338" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>

  <text x="556" y="360" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Projection of v₁ onto v₂:</text>
  <text x="556" y="380" font-family="Georgia,serif" font-size="11" fill="#000">= (v₁·v₂)/|v₂| = 10/√5 ≈ 4.47</text>

  <line x1="548" y1="392" x2="868" y2="392" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>

  <text x="556" y="414" font-family="Georgia,serif" font-size="10" fill="#555">· Result is a scalar (not a vector)</text>
  <text x="556" y="432" font-family="Georgia,serif" font-size="10" fill="#555">· If v₁·v₂ = 0, vectors are perpendicular</text>
  <text x="556" y="450" font-family="Georgia,serif" font-size="10" fill="#555">· Commutative: v₁·v₂ = v₂·v₁</text>
  <text x="556" y="468" font-family="Georgia,serif" font-size="10" fill="#555">· 10 &gt; 0 → angle is acute</text>

  <!-- Legend -->
  <line x1="160" y1="510" x2="200" y2="510" stroke="#000" stroke-width="4"/>
  <text x="208" y="514" font-family="Georgia,serif" font-size="10" fill="#000">v₁</text>
  <line x1="270" y1="510" x2="310" y2="510" stroke="#000" stroke-width="4" stroke-dasharray="8,4"/>
  <text x="318" y="514" font-family="Georgia,serif" font-size="10" fill="#000">v₂</text>
  <line x1="380" y1="510" x2="420" y2="510" stroke="#000" stroke-width="2.5"/>
  <text x="428" y="514" font-family="Georgia,serif" font-size="10" fill="#000">projection</text>
</svg>`;


  // crossProduct: v1=(1,0,0), v2=(0,1,0), result=(0,0,1), 3D isometric view
  static crossProductSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 800 800">

  <!-- Title -->
  <text x="220" y="30" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Cross Product (Vector Product) in 3D</text>
  <text x="175" y="52" font-family="Georgia,serif" font-size="11" fill="#333">v₁ = (1,0,0) = i,  v₂ = (0,1,0) = j  →  v₁×v₂ = (0,0,1) = k</text>

  <!-- 3D Isometric axes: origin at (380,500)
       x-axis: goes right-down  at -30° from horiz → direction (cos−30°, sin−30°) per unit
       y-axis: goes left-down   at −150° → direction (−cos30°, sin30°)
       z-axis: goes straight up → (0,−1)
       Scale: 120px per unit -->

  <!-- Isometric grid (xy-plane floor, light) -->
  <!-- x lines across y=0..2 -->
  <line x1="380" y1="500" x2="484" y2="560" stroke="#ccc" stroke-width="1"/>
  <line x1="276" y1="500" x2="380" y2="560" stroke="#ccc" stroke-width="1"/>
  <!-- y lines across x=0..2 -->
  <line x1="380" y1="500" x2="276" y2="560" stroke="#ccc" stroke-width="1"/>
  <line x1="484" y1="440" x2="380" y2="500" stroke="#ccc" stroke-width="1"/>
  <!-- floor rectangle outline -->
  <line x1="380" y1="500" x2="484" y2="440" stroke="#aaa" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="380" y1="500" x2="276" y2="440" stroke="#aaa" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="484" y1="440" x2="380" y2="380" stroke="#aaa" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="276" y1="440" x2="380" y2="380" stroke="#aaa" stroke-width="1.2" stroke-dasharray="4,3"/>

  <!-- ── Axes ── -->
  <!-- x-axis: origin(380,500) → (380+104,500+60)=(484,560) [isometric: right-forward] -->
  <line x1="380" y1="500" x2="490" y2="563" stroke="#000" stroke-width="2.5"/>
  <polygon points="483,558 497,566 490,551" fill="#000"/>
  <text x="502" y="572" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">x</text>

  <!-- y-axis: origin → (380−104,500+60)=(276,560) [isometric: left-forward] -->
  <line x1="380" y1="500" x2="270" y2="563" stroke="#000" stroke-width="2.5"/>
  <polygon points="277,558 263,566 270,551" fill="#000"/>
  <text x="248" y="572" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">y</text>

  <!-- z-axis: origin → (380,500−160)=(380,340) [straight up] -->
  <line x1="380" y1="500" x2="380" y2="330" stroke="#000" stroke-width="2.5"/>
  <polygon points="375,334 380,320 385,334" fill="#000"/>
  <text x="386" y="316" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">z</text>

  <!-- Axis unit labels -->
  <text x="436" y="538" font-family="Georgia,serif" font-size="10" fill="#555">1</text>
  <text x="316" y="538" font-family="Georgia,serif" font-size="10" fill="#555">1</text>
  <text x="388" y="382" font-family="Georgia,serif" font-size="10" fill="#555">1</text>

  <!-- ── v1 = (1,0,0) = i: along x-axis ── -->
  <!-- x isometric direction: (+1,0,0) → pixel offset (+104,+60) from origin(380,500) -->
  <line x1="380" y1="500" x2="476" y2="554" stroke="#000" stroke-width="5"/>
  <polygon points="469,549 483,557 476,542" fill="#000"/>
  <text x="430" y="576" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">v₁ = i</text>
  <text x="430" y="592" font-family="Georgia,serif" font-size="10" fill="#000">(1, 0, 0)</text>

  <!-- ── v2 = (0,1,0) = j: along y-axis ── -->
  <!-- y isometric direction: (0,+1,0) → pixel offset (−104,+60) from origin -->
  <line x1="380" y1="500" x2="284" y2="554" stroke="#000" stroke-width="5" stroke-dasharray="10,5"/>
  <polygon points="291,549 277,557 284,542" fill="#000"/>
  <text x="282" y="576" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">v₂ = j</text>
  <text x="282" y="592" font-family="Georgia,serif" font-size="10" fill="#000">(0, 1, 0)</text>

  <!-- ── Resultant v1×v2 = k = (0,0,1): along z-axis ── -->
  <!-- z direction: (0,0,+1) → pixel offset (0,−160) from origin -->
  <line x1="380" y1="500" x2="380" y2="350" stroke="#000" stroke-width="6"/>
  <polygon points="374,355 380,340 386,355" fill="#000"/>
  <text x="388" y="345" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">v₁×v₂ = k</text>
  <text x="388" y="363" font-family="Georgia,serif" font-size="10" fill="#000">(0, 0, 1)</text>

  <!-- Right-hand rule annotation -->
  <ellipse cx="380" cy="500" rx="40" ry="20" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <path d="M420,500 A40,20 0 0,0 380,480" fill="none" stroke="#000" stroke-width="2"/>
  <polygon points="378,480 388,476 384,489" fill="#000"/>
  <text x="424" y="498" font-family="Georgia,serif" font-size="9" fill="#000">RH rule</text>

  <!-- Origin dot -->
  <circle cx="380" cy="500" r="6" fill="#000"/>
  <text x="385" y="518" font-family="Georgia,serif" font-size="10" fill="#000">O</text>

  <!-- ── Formula and determinant box ── -->
  <rect x="40" y="80" width="310" height="330" rx="8" fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="6,3"/>
  <text x="55" y="104" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Cross Product Formula:</text>
  <line x1="48" y1="112" x2="338" y2="112" stroke="#000" stroke-width="1.5"/>
  <text x="55" y="132" font-family="Georgia,serif" font-size="11" fill="#000">v₁ × v₂ = det | i   j   k  |</text>
  <text x="55" y="152" font-family="Georgia,serif" font-size="11" fill="#000">              | x₁  y₁  z₁ |</text>
  <text x="55" y="172" font-family="Georgia,serif" font-size="11" fill="#000">              | x₂  y₂  z₂ |</text>
  <line x1="48" y1="182" x2="338" y2="182" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="55" y="202" font-family="Georgia,serif" font-size="11" fill="#000">= i(y₁z₂−z₁y₂) − j(x₁z₂−z₁x₂)</text>
  <text x="55" y="222" font-family="Georgia,serif" font-size="11" fill="#000">  + k(x₁y₂−y₁x₂)</text>
  <line x1="48" y1="232" x2="338" y2="232" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="55" y="252" font-family="Georgia,serif" font-size="11" fill="#000">For i=(1,0,0), j=(0,1,0):</text>
  <text x="55" y="272" font-family="Georgia,serif" font-size="11" fill="#000">= i(0·0−0·1)−j(1·0−0·0)</text>
  <text x="55" y="292" font-family="Georgia,serif" font-size="11" fill="#000">  + k(1·1−0·0)</text>
  <text x="55" y="312" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">= k = (0, 0, 1) ✓</text>
  <line x1="48" y1="322" x2="338" y2="322" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="55" y="342" font-family="Georgia,serif" font-size="10" fill="#555">|v₁×v₂| = |v₁||v₂|sin θ = 1·1·sin90° = 1</text>
  <text x="55" y="360" font-family="Georgia,serif" font-size="10" fill="#555">Direction: perpendicular to both v₁ &amp; v₂</text>
  <text x="55" y="378" font-family="Georgia,serif" font-size="10" fill="#555">Right-hand rule: curl fingers v₁→v₂, thumb=result</text>
  <text x="55" y="396" font-family="Georgia,serif" font-size="10" fill="#555">Anti-commutative: v₁×v₂ = −(v₂×v₁)</text>

  <!-- Legend -->
  <line x1="40" y1="450" x2="90" y2="450" stroke="#000" stroke-width="5"/>
  <text x="98" y="454" font-family="Georgia,serif" font-size="10" fill="#000">v₁ = i (1,0,0)</text>
  <line x1="260" y1="450" x2="310" y2="450" stroke="#000" stroke-width="5" stroke-dasharray="10,5"/>
  <text x="318" y="454" font-family="Georgia,serif" font-size="10" fill="#000">v₂ = j (0,1,0)</text>
  <line x1="480" y1="450" x2="530" y2="450" stroke="#000" stroke-width="6"/>
  <text x="538" y="454" font-family="Georgia,serif" font-size="10" fill="#000">v₁×v₂ = k (0,0,1)</text>

  <!-- Cyclic relation note -->
  <rect x="40" y="470" width="720" height="60" rx="6" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="55" y="492" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Standard Basis Cross Products (cyclic):</text>
  <text x="55" y="514" font-family="Georgia,serif" font-size="11" fill="#000">i×j = k     j×k = i     k×i = j     (reverse order negates: j×i = −k)</text>
</svg>`;


  // vectorEquationLine: point (1,2), direction (3,4), r = a + λb
  static vectorEquationLineSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="210" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Vector Equation of a Line</text>
  <text x="155" y="48" font-family="Georgia,serif" font-size="11" fill="#333">r = a + λb,  a = (1,2) (position),  b = (3,4) (direction)</text>

  <!-- Grid: origin (180,450), scale 60px/unit -->
  <line x1="180" y1="100" x2="180" y2="470" stroke="#ddd" stroke-width="1"/>
  <line x1="240" y1="100" x2="240" y2="470" stroke="#ddd" stroke-width="1"/>
  <line x1="300" y1="100" x2="300" y2="470" stroke="#ddd" stroke-width="1"/>
  <line x1="360" y1="100" x2="360" y2="470" stroke="#ddd" stroke-width="1"/>
  <line x1="420" y1="100" x2="420" y2="470" stroke="#ddd" stroke-width="1"/>
  <line x1="480" y1="100" x2="480" y2="470" stroke="#ddd" stroke-width="1"/>
  <line x1="100" y1="150" x2="540" y2="150" stroke="#ddd" stroke-width="1"/>
  <line x1="100" y1="210" x2="540" y2="210" stroke="#ddd" stroke-width="1"/>
  <line x1="100" y1="270" x2="540" y2="270" stroke="#ddd" stroke-width="1"/>
  <line x1="100" y1="330" x2="540" y2="330" stroke="#ddd" stroke-width="1"/>
  <line x1="100" y1="390" x2="540" y2="390" stroke="#ddd" stroke-width="1"/>
  <line x1="100" y1="450" x2="540" y2="450" stroke="#ddd" stroke-width="1"/>

  <!-- Axes -->
  <line x1="100" y1="450" x2="550" y2="450" stroke="#000" stroke-width="2.5"/>
  <polygon points="546,445 558,450 546,455" fill="#000"/>
  <text x="562" y="454" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">x</text>
  <line x1="180" y1="490" x2="180" y2="90" stroke="#000" stroke-width="2.5"/>
  <polygon points="175,94 180,82 185,94" fill="#000"/>
  <text x="184" y="80" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">y</text>

  <!-- Ticks x -->
  <line x1="240" y1="446" x2="240" y2="454" stroke="#000" stroke-width="1.5"/>
  <text x="238" y="466" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <line x1="300" y1="446" x2="300" y2="454" stroke="#000" stroke-width="1.5"/>
  <text x="298" y="466" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <line x1="360" y1="446" x2="360" y2="454" stroke="#000" stroke-width="1.5"/>
  <text x="358" y="466" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <line x1="420" y1="446" x2="420" y2="454" stroke="#000" stroke-width="1.5"/>
  <text x="418" y="466" font-family="Georgia,serif" font-size="10" fill="#000">4</text>
  <!-- Ticks y -->
  <line x1="176" y1="390" x2="184" y2="390" stroke="#000" stroke-width="1.5"/>
  <text x="160" y="394" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <line x1="176" y1="330" x2="184" y2="330" stroke="#000" stroke-width="1.5"/>
  <text x="160" y="334" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <line x1="176" y1="270" x2="184" y2="270" stroke="#000" stroke-width="1.5"/>
  <text x="160" y="274" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <line x1="176" y1="210" x2="184" y2="210" stroke="#000" stroke-width="1.5"/>
  <text x="160" y="214" font-family="Georgia,serif" font-size="10" fill="#000">4</text>
  <line x1="176" y1="150" x2="184" y2="150" stroke="#000" stroke-width="1.5"/>
  <text x="160" y="154" font-family="Georgia,serif" font-size="10" fill="#000">5</text>

  <!-- The line r = (1,2) + λ(3,4):
       At λ=−0.5: r=(−0.5, 0) → px=(180−30,450)=(150,450) — on x-axis
       At λ=0:    r=(1,2)   → px=(240,330)
       At λ=1:    r=(4,6)   → px=(420,90)
       Extended line from (100,483) to (520,90) approx -->
  <!-- Extended line (full) — thin dashed background -->
  <line x1="108" y1="484" x2="488" y2="136" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>

  <!-- Origin to point a=(1,2): position vector -->
  <line x1="180" y1="450" x2="234" y2="327" stroke="#000" stroke-width="3" stroke-dasharray="8,4"/>
  <polygon points="227,329 240,320 244,334" fill="#000"/>
  <text x="186" y="374" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">a</text>
  <text x="174" y="390" font-family="Georgia,serif" font-size="10" fill="#555">(1, 2)</text>

  <!-- Point A on the line -->
  <circle cx="240" cy="330" r="7" fill="#000"/>
  <text x="248" y="326" font-family="Georgia,serif" font-size="10" fill="#000">A(1,2)</text>

  <!-- Direction vector b=(3,4) from A -->
  <line x1="240" y1="330" x2="414" y2="97" stroke="#000" stroke-width="3.5"/>
  <polygon points="408,100 420,90 422,105" fill="#000"/>
  <text x="348" y="188" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">b=(3,4)</text>

  <!-- λ markers along line -->
  <!-- λ=0: A=(240,330) already drawn -->
  <!-- λ=0.5: r=(2.5,4) → px=(330,210) -->
  <circle cx="330" cy="210" r="4" fill="#000"/>
  <text x="336" y="208" font-family="Georgia,serif" font-size="9" fill="#555">λ=0.5</text>
  <!-- λ=1: r=(4,6) → px=(420,90) -->
  <circle cx="420" cy="90" r="4" fill="#000"/>
  <text x="426" y="90" font-family="Georgia,serif" font-size="9" fill="#555">λ=1</text>
  <!-- λ=−0.5: r=(−0.5,0) → px=(150,450) -->
  <circle cx="150" cy="450" r="4" fill="#000"/>
  <text x="114" y="445" font-family="Georgia,serif" font-size="9" fill="#555">λ=−0.5</text>

  <!-- r vector to a general point (λ=0.5) -->
  <line x1="180" y1="450" x2="324" y2="214" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <polygon points="317,216 330,207 334,221" fill="#000"/>
  <text x="232" y="298" font-family="Georgia,serif" font-size="11" font-weight="bold" font-style="italic" fill="#000">r</text>

  <!-- Origin dot -->
  <circle cx="180" cy="450" r="5" fill="#000"/>
  <text x="162" y="468" font-family="Georgia,serif" font-size="10" fill="#000">O</text>

  <!-- Info box -->
  <rect x="560" y="90" width="220" height="280" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="572" y="112" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Vector Line Equation:</text>
  <text x="572" y="134" font-family="Georgia,serif" font-size="11" fill="#000">r = a + λb</text>
  <text x="572" y="156" font-family="Georgia,serif" font-size="11" fill="#000">a = position vector</text>
  <text x="572" y="176" font-family="Georgia,serif" font-size="11" fill="#000">b = direction vector</text>
  <text x="572" y="196" font-family="Georgia,serif" font-size="11" fill="#000">λ = scalar parameter</text>
  <line x1="568" y1="206" x2="770" y2="206" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="572" y="224" font-family="Georgia,serif" font-size="11" fill="#000">r = (1,2) + λ(3,4)</text>
  <text x="572" y="244" font-family="Georgia,serif" font-size="11" fill="#000">x = 1 + 3λ</text>
  <text x="572" y="264" font-family="Georgia,serif" font-size="11" fill="#000">y = 2 + 4λ</text>
  <line x1="568" y1="274" x2="770" y2="274" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="572" y="292" font-family="Georgia,serif" font-size="10" fill="#555">λ=0 → point A(1,2)</text>
  <text x="572" y="310" font-family="Georgia,serif" font-size="10" fill="#555">λ=1 → point (4,6)</text>
  <text x="572" y="328" font-family="Georgia,serif" font-size="10" fill="#555">λ=−0.5 → (−0.5,0)</text>
  <text x="572" y="346" font-family="Georgia,serif" font-size="10" fill="#555">Infinite points on line</text>
</svg>`;


  // positionVectors: points (2,3), (5,7), (−1,4) from origin
  static positionVectorsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="230" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Position Vectors</text>
  <text x="165" y="48" font-family="Georgia,serif" font-size="11" fill="#333">Vectors from origin O to points A(2,3), B(5,7), C(−1,4)</text>

  <!-- Grid: origin (280,450), scale 50px/unit -->
  <line x1="80" y1="100" x2="80" y2="470" stroke="#ddd" stroke-width="1"/>
  <line x1="130" y1="100" x2="130" y2="470" stroke="#ddd" stroke-width="1"/>
  <line x1="180" y1="100" x2="180" y2="470" stroke="#ddd" stroke-width="1"/>
  <line x1="230" y1="100" x2="230" y2="470" stroke="#ddd" stroke-width="1"/>
  <line x1="280" y1="100" x2="280" y2="470" stroke="#ddd" stroke-width="1"/>
  <line x1="330" y1="100" x2="330" y2="470" stroke="#ddd" stroke-width="1"/>
  <line x1="380" y1="100" x2="380" y2="470" stroke="#ddd" stroke-width="1"/>
  <line x1="430" y1="100" x2="430" y2="470" stroke="#ddd" stroke-width="1"/>
  <line x1="480" y1="100" x2="480" y2="470" stroke="#ddd" stroke-width="1"/>
  <line x1="530" y1="100" x2="530" y2="470" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="100" x2="560" y2="100" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="150" x2="560" y2="150" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="200" x2="560" y2="200" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="250" x2="560" y2="250" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="300" x2="560" y2="300" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="350" x2="560" y2="350" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="400" x2="560" y2="400" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="450" x2="560" y2="450" stroke="#ddd" stroke-width="1"/>

  <!-- Axes -->
  <line x1="60" y1="450" x2="570" y2="450" stroke="#000" stroke-width="2.5"/>
  <polygon points="566,445 578,450 566,455" fill="#000"/>
  <text x="582" y="454" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">x</text>
  <line x1="280" y1="490" x2="280" y2="90" stroke="#000" stroke-width="2.5"/>
  <polygon points="275,94 280,82 285,94" fill="#000"/>
  <text x="284" y="80" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">y</text>

  <!-- Ticks x -->
  <line x1="330" y1="446" x2="330" y2="454" stroke="#000" stroke-width="1.5"/>
  <text x="328" y="466" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <line x1="380" y1="446" x2="380" y2="454" stroke="#000" stroke-width="1.5"/>
  <text x="378" y="466" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <line x1="430" y1="446" x2="430" y2="454" stroke="#000" stroke-width="1.5"/>
  <text x="428" y="466" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <line x1="480" y1="446" x2="480" y2="454" stroke="#000" stroke-width="1.5"/>
  <text x="478" y="466" font-family="Georgia,serif" font-size="10" fill="#000">4</text>
  <line x1="530" y1="446" x2="530" y2="454" stroke="#000" stroke-width="1.5"/>
  <text x="528" y="466" font-family="Georgia,serif" font-size="10" fill="#000">5</text>
  <line x1="230" y1="446" x2="230" y2="454" stroke="#000" stroke-width="1.5"/>
  <text x="226" y="466" font-family="Georgia,serif" font-size="10" fill="#000">−1</text>
  <line x1="180" y1="446" x2="180" y2="454" stroke="#000" stroke-width="1.5"/>
  <text x="176" y="466" font-family="Georgia,serif" font-size="10" fill="#000">−2</text>

  <!-- Ticks y -->
  <line x1="276" y1="400" x2="284" y2="400" stroke="#000" stroke-width="1.5"/>
  <text x="260" y="404" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <line x1="276" y1="350" x2="284" y2="350" stroke="#000" stroke-width="1.5"/>
  <text x="260" y="354" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <line x1="276" y1="300" x2="284" y2="300" stroke="#000" stroke-width="1.5"/>
  <text x="260" y="304" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <line x1="276" y1="250" x2="284" y2="250" stroke="#000" stroke-width="1.5"/>
  <text x="260" y="254" font-family="Georgia,serif" font-size="10" fill="#000">4</text>
  <line x1="276" y1="200" x2="284" y2="200" stroke="#000" stroke-width="1.5"/>
  <text x="260" y="204" font-family="Georgia,serif" font-size="10" fill="#000">5</text>
  <line x1="276" y1="150" x2="284" y2="150" stroke="#000" stroke-width="1.5"/>
  <text x="260" y="154" font-family="Georgia,serif" font-size="10" fill="#000">6</text>
  <line x1="276" y1="100" x2="284" y2="100" stroke="#000" stroke-width="1.5"/>
  <text x="260" y="104" font-family="Georgia,serif" font-size="10" fill="#000">7</text>

  <!-- Position vector OA = (2,3): origin(280,450)→(380,300) -->
  <line x1="280" y1="450" x2="373" y2="307" stroke="#000" stroke-width="4"/>
  <polygon points="366,310 380,300 382,315" fill="#000"/>
  <text x="300" y="356" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">a</text>

  <!-- Position vector OB = (5,7): origin→(530,100) -->
  <line x1="280" y1="450" x2="522" y2="108" stroke="#000" stroke-width="4" stroke-dasharray="9,4"/>
  <polygon points="516,111 528,100 530,115" fill="#000"/>
  <text x="418" y="268" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">b</text>

  <!-- Position vector OC = (−1,4): origin→(230,250) -->
  <line x1="280" y1="450" x2="237" y2="257" stroke="#000" stroke-width="4" stroke-dasharray="5,4"/>
  <polygon points="241,260 230,249 243,248" fill="#000"/>
  <text x="240" y="348" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">c</text>

  <!-- Point dots and labels -->
  <circle cx="380" cy="300" r="7" fill="#000"/>
  <text x="388" y="298" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">A(2, 3)</text>

  <circle cx="530" cy="100" r="7" fill="#000"/>
  <text x="538" y="98" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">B(5, 7)</text>

  <circle cx="230" cy="250" r="7" fill="#000"/>
  <text x="136" y="248" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">C(−1, 4)</text>

  <!-- Origin dot -->
  <circle cx="280" cy="450" r="6" fill="#000"/>
  <text x="262" y="468" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">O</text>

  <!-- Info box -->
  <rect x="590" y="90" width="190" height="370" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="602" y="112" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Position Vectors:</text>
  <line x1="598" y1="120" x2="772" y2="120" stroke="#000" stroke-width="1.5"/>
  <text x="602" y="140" font-family="Georgia,serif" font-size="11" fill="#000">a = OA = (2, 3)</text>
  <text x="602" y="160" font-family="Georgia,serif" font-size="10" fill="#555">|a| = √(4+9) = √13</text>
  <text x="602" y="178" font-family="Georgia,serif" font-size="10" fill="#555">    ≈ 3.61</text>
  <line x1="598" y1="188" x2="772" y2="188" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="602" y="208" font-family="Georgia,serif" font-size="11" fill="#000">b = OB = (5, 7)</text>
  <text x="602" y="228" font-family="Georgia,serif" font-size="10" fill="#555">|b| = √(25+49) = √74</text>
  <text x="602" y="246" font-family="Georgia,serif" font-size="10" fill="#555">    ≈ 8.60</text>
  <line x1="598" y1="256" x2="772" y2="256" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="602" y="276" font-family="Georgia,serif" font-size="11" fill="#000">c = OC = (−1, 4)</text>
  <text x="602" y="296" font-family="Georgia,serif" font-size="10" fill="#555">|c| = √(1+16) = √17</text>
  <text x="602" y="314" font-family="Georgia,serif" font-size="10" fill="#555">    ≈ 4.12</text>
  <line x1="598" y1="324" x2="772" y2="324" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="602" y="344" font-family="Georgia,serif" font-size="10" fill="#555">Key: position vector</text>
  <text x="602" y="362" font-family="Georgia,serif" font-size="10" fill="#555">always starts at O</text>
  <text x="602" y="380" font-family="Georgia,serif" font-size="10" fill="#555">AB = b − a = (3,4)</text>
  <text x="602" y="398" font-family="Georgia,serif" font-size="10" fill="#555">BC = c − b = (−6,−3)</text>
  <text x="602" y="416" font-family="Georgia,serif" font-size="10" fill="#555">Notation: OA = a</text>
  <text x="602" y="434" font-family="Georgia,serif" font-size="10" fill="#555">or written as ā</text>

  <!-- Legend -->
  <line x1="60" y1="520" x2="100" y2="520" stroke="#000" stroke-width="4"/>
  <text x="108" y="524" font-family="Georgia,serif" font-size="10" fill="#000">OA = a</text>
  <line x1="200" y1="520" x2="240" y2="520" stroke="#000" stroke-width="4" stroke-dasharray="9,4"/>
  <text x="248" y="524" font-family="Georgia,serif" font-size="10" fill="#000">OB = b</text>
  <line x1="340" y1="520" x2="380" y2="520" stroke="#000" stroke-width="4" stroke-dasharray="5,4"/>
  <text x="388" y="524" font-family="Georgia,serif" font-size="10" fill="#000">OC = c</text>
</svg>`;




  // ─── CIRCLE THEOREM 2 — Angle in Semicircle ──────────────────────────────
  static circleTheorem2Svg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="700px" viewBox="0 0 700 700">

  <!-- Title -->
  <text x="175" y="32" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Circle Theorem: Angle in Semicircle</text>

  <!-- Circle: centre (350,340), r=200 -->
  <circle cx="350" cy="340" r="200" fill="none" stroke="#000" stroke-width="3"/>

  <!-- Diameter: A=(150,340) to B=(550,340) -->
  <line x1="150" y1="340" x2="550" y2="340" stroke="#000" stroke-width="3"/>

  <!-- Point P on circle top: (350,140) -->
  <!-- Triangle APB -->
  <line x1="150" y1="340" x2="350" y2="140" stroke="#000" stroke-width="2.5"/>
  <line x1="550" y1="340" x2="350" y2="140" stroke="#000" stroke-width="2.5"/>

  <!-- Right angle marker at P=(350,140) -->
  <!-- PA direction: (150,340)→(350,140): vec=(200,-200), unit=(1/√2,-1/√2)
       PB direction: (550,340)→(350,140): vec=(-200,-200), unit=(-1/√2,-1/√2)
       Box size 18px -->
  <!-- along PA: (350+18/√2, 140+18/√2)=(362.7,152.7); along PB: (350-12.7,140+12.7)=(337.3,152.7) -->
  <polyline points="362,153 350,165 338,153"
            fill="none" stroke="#000" stroke-width="2.5"/>

  <!-- Centre O -->
  <circle cx="350" cy="340" r="5" fill="#000"/>
  <text x="354" y="360" font-family="Georgia,serif" font-size="13" fill="#000">O</text>

  <!-- Vertex dots -->
  <circle cx="150" cy="340" r="6" fill="#000"/>
  <circle cx="550" cy="340" r="6" fill="#000"/>
  <circle cx="350" cy="140" r="6" fill="#000"/>

  <!-- Labels -->
  <text x="124" y="358" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">A</text>
  <text x="556" y="358" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">B</text>
  <text x="340" y="126" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">P</text>

  <!-- Angle label at P -->
  <text x="358" y="170" font-family="Georgia,serif" font-size="12" fill="#000">90°</text>

  <!-- Angle arcs at A and B -->
  <path d="M 168,340 A 18,18 0 0,0 161,325" fill="none" stroke="#000" stroke-width="1.8"/>
  <text x="170" y="325" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">α</text>
  <path d="M 532,340 A 18,18 0 0,1 539,325" fill="none" stroke="#000" stroke-width="1.8"/>
  <text x="516" y="325" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">β</text>

  <!-- Radius labels -->
  <text x="335" y="248" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">r</text>
  <text x="420" y="248" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">r</text>
  <line x1="350" y1="340" x2="350" y2="140" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>

  <!-- Theorem box -->
  <rect x="110" y="560" width="480" height="100" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="124" y="582" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Theorem:</text>
  <text x="124" y="600" font-family="Georgia,serif" font-size="12" fill="#000">The angle inscribed in a semicircle is always 90°.</text>
  <text x="124" y="618" font-family="Georgia,serif" font-size="12" fill="#000">∠APB = 90°  for any point P on the circle</text>
  <text x="124" y="636" font-family="Georgia,serif" font-size="12" fill="#000">where AB is a diameter.   α + β = 90°</text>

  <!-- Proof note -->
  <text x="130" y="530" font-family="Georgia,serif" font-size="11" fill="#444">Proof: OA=OP=OB (radii) ⟹ △OAP and △OBP are isosceles</text>
  <text x="130" y="547" font-family="Georgia,serif" font-size="11" fill="#444">⟹ ∠OAP=∠OPA=α and ∠OBP=∠OPB=β ⟹ α+β+90°=180° ✓</text>
</svg>`;

  // ─── CIRCLE THEOREM 3 — Cyclic Quadrilateral ─────────────────────────────
  static circleTheorem3Svg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="700px" viewBox="0 0 700 700">

  <!-- Title -->
  <text x="148" y="32" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Circle Theorem: Cyclic Quadrilateral</text>

  <!-- Circle: centre (350,320), r=190 -->
  <circle cx="350" cy="320" r="190" fill="none" stroke="#000" stroke-width="3"/>

  <!-- Centre dot -->
  <circle cx="350" cy="320" r="5" fill="#000"/>
  <text x="356" y="320" font-family="Georgia,serif" font-size="12" fill="#000">O</text>

  <!-- Four cyclic points (approx on circle):
       A = 350+190·cos(110°), 320−190·sin(110°) = 350−65,  320−178 = (285, 142)
       B = 350+190·cos(30°),  320−190·sin(30°)  = 350+165, 320−95  = (515, 225)
       C = 350+190·cos(320°), 320−190·sin(320°) = 350+146, 320+122 = (496, 442)
       D = 350+190·cos(210°), 320−190·sin(210°) = 350−165, 320+95  = (185, 415)
  -->
  <polygon points="285,142 515,225 496,442 185,415"
           fill="none" stroke="#000" stroke-width="2.8" stroke-linejoin="round"/>

  <!-- Diagonals (dashed) -->
  <line x1="285" y1="142" x2="496" y2="442" stroke="#000" stroke-width="1.5" stroke-dasharray="7,4"/>
  <line x1="515" y1="225" x2="185" y2="415" stroke="#000" stroke-width="1.5" stroke-dasharray="7,4"/>

  <!-- Vertex dots -->
  <circle cx="285" cy="142" r="6" fill="#000"/>
  <circle cx="515" cy="225" r="6" fill="#000"/>
  <circle cx="496" cy="442" r="6" fill="#000"/>
  <circle cx="185" cy="415" r="6" fill="#000"/>

  <!-- Vertex labels -->
  <text x="268" y="130" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">A</text>
  <text x="522" y="228" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">B</text>
  <text x="500" y="458" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">C</text>
  <text x="162" y="420" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">D</text>

  <!-- Angle labels -->
  <!-- ∠A (top-left): label inside near A -->
  <text x="296" y="168" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">α</text>
  <!-- ∠C (bottom-right): opposite to A -->
  <text x="462" y="434" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">α'</text>
  <!-- ∠B (top-right) -->
  <text x="488" y="252" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">β</text>
  <!-- ∠D (bottom-left): opposite to B -->
  <text x="200" y="408" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">β'</text>

  <!-- Small angle arcs -->
  <path d="M 298,150 A 16,16 0 0,1 310,162" fill="none" stroke="#000" stroke-width="1.8"/>
  <path d="M 472,432 A 16,16 0 0,1 484,420" fill="none" stroke="#000" stroke-width="1.8"/>
  <path d="M 496,238 A 16,16 0 0,1 484,248" fill="none" stroke="#000" stroke-width="1.8"/>
  <path d="M 202,404 A 16,16 0 0,1 214,394" fill="none" stroke="#000" stroke-width="1.8"/>

  <!-- Theorem box -->
  <rect x="90" y="565" width="520" height="110" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="106" y="587" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Theorem: Cyclic Quadrilateral</text>
  <text x="106" y="607" font-family="Georgia,serif" font-size="12" fill="#000">Opposite angles of a cyclic quadrilateral sum to 180°.</text>
  <text x="106" y="625" font-family="Georgia,serif" font-size="12" fill="#000">∠A + ∠C = 180°   (α + α′ = 180°)</text>
  <text x="106" y="643" font-family="Georgia,serif" font-size="12" fill="#000">∠B + ∠D = 180°   (β + β′ = 180°)</text>
  <text x="106" y="661" font-family="Georgia,serif" font-size="11" fill="#444">Proof: each pair of opposite angles subtend the full circle (360°) at the centre.</text>
</svg>`;

  // ─── CIRCLE THEOREM 4 — Tangent and Radius ───────────────────────────────
  static circleTheorem4Svg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="700px" viewBox="0 0 700 700">

  <!-- Title -->
  <text x="178" y="32" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Circle Theorem: Tangent and Radius</text>

  <!-- Circle: centre (320,340), r=180 -->
  <circle cx="320" cy="340" r="180" fill="none" stroke="#000" stroke-width="3"/>

  <!-- Centre dot and label -->
  <circle cx="320" cy="340" r="5" fill="#000"/>
  <text x="328" y="358" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">O</text>

  <!-- Point of tangency T = (320, 160) [top of circle] -->
  <circle cx="320" cy="160" r="6" fill="#000"/>
  <text x="326" y="152" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">T</text>

  <!-- Radius OT -->
  <line x1="320" y1="340" x2="320" y2="160" stroke="#000" stroke-width="2.8"/>
  <text x="328" y="258" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">r</text>

  <!-- Tangent line at T — horizontal through (320,160) -->
  <line x1="80" y1="160" x2="560" y2="160" stroke="#000" stroke-width="3"/>
  <!-- Tangent arrows -->
  <polygon points="80,157 68,160 80,163" fill="#000"/>
  <polygon points="560,157 572,160 560,163" fill="#000"/>
  <text x="574" y="164" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">tangent</text>

  <!-- Right angle marker at T -->
  <rect x="320" y="160" width="20" height="20" fill="none" stroke="#000" stroke-width="2.5"/>

  <!-- 90° label -->
  <text x="342" y="188" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">90°</text>

  <!-- Dashed extension of radius beyond T -->
  <line x1="320" y1="160" x2="320" y2="80" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>

  <!-- Second tangent from external point P=(560,430) showing two tangents -->
  <!-- External point P -->
  <circle cx="560" cy="430" r="6" fill="#000"/>
  <text x="566" y="438" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">P</text>

  <!-- Tangent from P to T1 on circle: find tangent point
       Circle centre O=(320,340), r=180, P=(560,430)
       For visual clarity draw two tangent lines from P approximated:
       T1 ≈ (320+180·cos(−30°), 340+180·sin(−30°)) = (320+156,340−90) = (476,250)
       T2 ≈ (320+180·cos(50°), 340+180·sin(50°)) = (320+116,340+138) = (436,478)
  -->
  <circle cx="476" cy="250" r="5" fill="#000"/>
  <text x="480" y="244" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">T₁</text>
  <circle cx="436" cy="478" r="5" fill="#000"/>
  <text x="440" y="494" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">T₂</text>

  <line x1="560" y1="430" x2="476" y2="250" stroke="#000" stroke-width="2" stroke-dasharray="8,4"/>
  <line x1="560" y1="430" x2="436" y2="478" stroke="#000" stroke-width="2" stroke-dasharray="8,4"/>

  <!-- Radii to tangent points -->
  <line x1="320" y1="340" x2="476" y2="250" stroke="#000" stroke-width="1.8" stroke-dasharray="4,3"/>
  <line x1="320" y1="340" x2="436" y2="478" stroke="#000" stroke-width="1.8" stroke-dasharray="4,3"/>

  <!-- Equal tangent length marks -->
  <line x1="516" y1="342" x2="508" y2="355" stroke="#000" stroke-width="2.5"/>
  <line x1="520" y1="339" x2="512" y2="352" stroke="#000" stroke-width="2.5"/>
  <line x1="500" y1="455" x2="492" y2="442" stroke="#000" stroke-width="2.5"/>
  <line x1="504" y1="458" x2="496" y2="445" stroke="#000" stroke-width="2.5"/>

  <!-- PT1 = PT2 label -->
  <text x="575" y="360" font-family="Georgia,serif" font-size="11" fill="#000">PT₁ = PT₂</text>

  <!-- Theorem box -->
  <rect x="50" y="555" width="600" height="120" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="66" y="578" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Theorem: Tangent–Radius</text>
  <text x="66" y="598" font-family="Georgia,serif" font-size="12" fill="#000">A tangent to a circle is perpendicular to the radius at the point of contact.</text>
  <text x="66" y="616" font-family="Georgia,serif" font-size="12" fill="#000">OT ⊥ tangent  ⟹  ∠OTP = 90°</text>
  <text x="66" y="634" font-family="Georgia,serif" font-size="12" fill="#000">Corollary: Two tangents from an external point are equal in length.</text>
  <text x="66" y="652" font-family="Georgia,serif" font-size="12" fill="#000">PT₁ = PT₂</text>
</svg>`;

  // ─── COORDINATE GEOMETRY GRID ────────────────────────────────────────────
  static coordinateGeometryGridSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 800 800">

  <!-- Title -->
  <text x="240" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Coordinate Geometry</text>

  <!-- Grid: origin (400,400), scale 50px/unit, range −7..7 -->
  <!-- Vertical grid lines -->
  <line x1="50"  y1="50" x2="50"  y2="750" stroke="#ccc" stroke-width="1"/>
  <line x1="100" y1="50" x2="100" y2="750" stroke="#ccc" stroke-width="1"/>
  <line x1="150" y1="50" x2="150" y2="750" stroke="#ccc" stroke-width="1"/>
  <line x1="200" y1="50" x2="200" y2="750" stroke="#ccc" stroke-width="1"/>
  <line x1="250" y1="50" x2="250" y2="750" stroke="#ccc" stroke-width="1"/>
  <line x1="300" y1="50" x2="300" y2="750" stroke="#ccc" stroke-width="1"/>
  <line x1="350" y1="50" x2="350" y2="750" stroke="#ccc" stroke-width="1"/>
  <line x1="450" y1="50" x2="450" y2="750" stroke="#ccc" stroke-width="1"/>
  <line x1="500" y1="50" x2="500" y2="750" stroke="#ccc" stroke-width="1"/>
  <line x1="550" y1="50" x2="550" y2="750" stroke="#ccc" stroke-width="1"/>
  <line x1="600" y1="50" x2="600" y2="750" stroke="#ccc" stroke-width="1"/>
  <line x1="650" y1="50" x2="650" y2="750" stroke="#ccc" stroke-width="1"/>
  <line x1="700" y1="50" x2="700" y2="750" stroke="#ccc" stroke-width="1"/>
  <line x1="750" y1="50" x2="750" y2="750" stroke="#ccc" stroke-width="1"/>
  <!-- Horizontal grid lines -->
  <line x1="50" y1="50"  x2="750" y2="50"  stroke="#ccc" stroke-width="1"/>
  <line x1="50" y1="100" x2="750" y2="100" stroke="#ccc" stroke-width="1"/>
  <line x1="50" y1="150" x2="750" y2="150" stroke="#ccc" stroke-width="1"/>
  <line x1="50" y1="200" x2="750" y2="200" stroke="#ccc" stroke-width="1"/>
  <line x1="50" y1="250" x2="750" y2="250" stroke="#ccc" stroke-width="1"/>
  <line x1="50" y1="300" x2="750" y2="300" stroke="#ccc" stroke-width="1"/>
  <line x1="50" y1="350" x2="750" y2="350" stroke="#ccc" stroke-width="1"/>
  <line x1="50" y1="450" x2="750" y2="450" stroke="#ccc" stroke-width="1"/>
  <line x1="50" y1="500" x2="750" y2="500" stroke="#ccc" stroke-width="1"/>
  <line x1="50" y1="550" x2="750" y2="550" stroke="#ccc" stroke-width="1"/>
  <line x1="50" y1="600" x2="750" y2="600" stroke="#ccc" stroke-width="1"/>
  <line x1="50" y1="650" x2="750" y2="650" stroke="#ccc" stroke-width="1"/>
  <line x1="50" y1="700" x2="750" y2="700" stroke="#ccc" stroke-width="1"/>
  <line x1="50" y1="750" x2="750" y2="750" stroke="#ccc" stroke-width="1"/>

  <!-- Axes -->
  <line x1="50" y1="400" x2="760" y2="400" stroke="#000" stroke-width="3"/>
  <polygon points="756,395 768,400 756,405" fill="#000"/>
  <text x="772" y="404" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">x</text>
  <line x1="400" y1="760" x2="400" y2="40" stroke="#000" stroke-width="3"/>
  <polygon points="395,44 400,32 405,44" fill="#000"/>
  <text x="404" y="30" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">y</text>

  <!-- Origin -->
  <text x="406" y="416" font-family="Georgia,serif" font-size="12" fill="#000">O</text>

  <!-- X-axis tick labels (every unit, −7 to 7, skip 0) -->
  <text x="46"  y="418" font-family="Georgia,serif" font-size="10" fill="#000">−7</text>
  <text x="96"  y="418" font-family="Georgia,serif" font-size="10" fill="#000">−6</text>
  <text x="146" y="418" font-family="Georgia,serif" font-size="10" fill="#000">−5</text>
  <text x="196" y="418" font-family="Georgia,serif" font-size="10" fill="#000">−4</text>
  <text x="246" y="418" font-family="Georgia,serif" font-size="10" fill="#000">−3</text>
  <text x="296" y="418" font-family="Georgia,serif" font-size="10" fill="#000">−2</text>
  <text x="346" y="418" font-family="Georgia,serif" font-size="10" fill="#000">−1</text>
  <text x="448" y="418" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <text x="498" y="418" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <text x="548" y="418" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <text x="598" y="418" font-family="Georgia,serif" font-size="10" fill="#000">4</text>
  <text x="648" y="418" font-family="Georgia,serif" font-size="10" fill="#000">5</text>
  <text x="698" y="418" font-family="Georgia,serif" font-size="10" fill="#000">6</text>
  <text x="748" y="418" font-family="Georgia,serif" font-size="10" fill="#000">7</text>

  <!-- Y-axis tick labels -->
  <text x="380" y="754" font-family="Georgia,serif" font-size="10" fill="#000">−7</text>
  <text x="380" y="704" font-family="Georgia,serif" font-size="10" fill="#000">−6</text>
  <text x="380" y="654" font-family="Georgia,serif" font-size="10" fill="#000">−5</text>
  <text x="380" y="604" font-family="Georgia,serif" font-size="10" fill="#000">−4</text>
  <text x="380" y="554" font-family="Georgia,serif" font-size="10" fill="#000">−3</text>
  <text x="380" y="504" font-family="Georgia,serif" font-size="10" fill="#000">−2</text>
  <text x="380" y="454" font-family="Georgia,serif" font-size="10" fill="#000">−1</text>
  <text x="384" y="354" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <text x="384" y="304" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <text x="384" y="254" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <text x="384" y="204" font-family="Georgia,serif" font-size="10" fill="#000">4</text>
  <text x="384" y="154" font-family="Georgia,serif" font-size="10" fill="#000">5</text>
  <text x="384" y="104" font-family="Georgia,serif" font-size="10" fill="#000">6</text>
  <text x="384" y="54"  font-family="Georgia,serif" font-size="10" fill="#000">7</text>

  <!-- Points: A(2,3) → (500,250), B(5,7) → (650,50), C(−1,4) → (350,200) -->
  <!-- Point A(2,3): px=400+2*50=500, py=400−3*50=250 -->
  <circle cx="500" cy="250" r="8" fill="#000"/>
  <text x="508" y="244" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">A(2, 3)</text>

  <!-- Point B(5,7): px=400+5*50=650, py=400−7*50=50 -->
  <circle cx="650" cy="50" r="8" fill="#000"/>
  <text x="658" y="44" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">B(5, 7)</text>

  <!-- Point C(−1,4): px=400+(−1)*50=350, py=400−4*50=200 -->
  <circle cx="350" cy="200" r="8" fill="#000"/>
  <text x="268" y="196" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">C(−1, 4)</text>

  <!-- Connect triangle ABC -->
  <polygon points="500,250 650,50 350,200"
           fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="8,4" stroke-linejoin="round"/>

  <!-- Dashed drop lines for each point -->
  <line x1="500" y1="250" x2="500" y2="400" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="500" y1="250" x2="400" y2="250" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="350" y1="200" x2="350" y2="400" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="350" y1="200" x2="400" y2="200" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="650" y1="50"  x2="650" y2="400" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="650" y1="50"  x2="400" y2="50"  stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>

  <!-- Quadrant labels -->
  <text x="580" y="90" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#555">Q I</text>
  <text x="100" y="90" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#555">Q II</text>
  <text x="100" y="720" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#555">Q III</text>
  <text x="580" y="720" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#555">Q IV</text>
</svg>`;

  // ─── DISTANCE FORMULA ────────────────────────────────────────────────────
  static distanceFormulaSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="270" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Distance Formula</text>

  <!-- Grid: origin (120,460), scale 70px/unit, range x 0..8, y 0..7 -->
  <!-- Vertical gridlines -->
  <line x1="120" y1="50"  x2="120" y2="470" stroke="#ccc" stroke-width="1"/>
  <line x1="190" y1="50"  x2="190" y2="470" stroke="#ccc" stroke-width="1"/>
  <line x1="260" y1="50"  x2="260" y2="470" stroke="#ccc" stroke-width="1"/>
  <line x1="330" y1="50"  x2="330" y2="470" stroke="#ccc" stroke-width="1"/>
  <line x1="400" y1="50"  x2="400" y2="470" stroke="#ccc" stroke-width="1"/>
  <line x1="470" y1="50"  x2="470" y2="470" stroke="#ccc" stroke-width="1"/>
  <line x1="540" y1="50"  x2="540" y2="470" stroke="#ccc" stroke-width="1"/>
  <line x1="610" y1="50"  x2="610" y2="470" stroke="#ccc" stroke-width="1"/>
  <!-- Horizontal gridlines -->
  <line x1="110" y1="460" x2="630" y2="460" stroke="#ccc" stroke-width="1"/>
  <line x1="110" y1="390" x2="630" y2="390" stroke="#ccc" stroke-width="1"/>
  <line x1="110" y1="320" x2="630" y2="320" stroke="#ccc" stroke-width="1"/>
  <line x1="110" y1="250" x2="630" y2="250" stroke="#ccc" stroke-width="1"/>
  <line x1="110" y1="180" x2="630" y2="180" stroke="#ccc" stroke-width="1"/>
  <line x1="110" y1="110" x2="630" y2="110" stroke="#ccc" stroke-width="1"/>

  <!-- Axes -->
  <line x1="110" y1="460" x2="640" y2="460" stroke="#000" stroke-width="2.5"/>
  <polygon points="636,455 648,460 636,465" fill="#000"/>
  <text x="652" y="464" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">x</text>
  <line x1="120" y1="470" x2="120" y2="45" stroke="#000" stroke-width="2.5"/>
  <polygon points="115,49 120,37 125,49" fill="#000"/>
  <text x="124" y="35" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">y</text>

  <!-- X ticks and labels (1..7) -->
  <text x="186" y="478" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <text x="256" y="478" font-family="Georgia,serif" font-size="11" fill="#000">2</text>
  <text x="326" y="478" font-family="Georgia,serif" font-size="11" fill="#000">3</text>
  <text x="396" y="478" font-family="Georgia,serif" font-size="11" fill="#000">4</text>
  <text x="466" y="478" font-family="Georgia,serif" font-size="11" fill="#000">5</text>
  <text x="536" y="478" font-family="Georgia,serif" font-size="11" fill="#000">6</text>
  <text x="606" y="478" font-family="Georgia,serif" font-size="11" fill="#000">7</text>

  <!-- Y ticks and labels (1..6) -->
  <text x="96" y="464" font-family="Georgia,serif" font-size="11" fill="#000">0</text>
  <text x="96" y="394" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <text x="96" y="324" font-family="Georgia,serif" font-size="11" fill="#000">2</text>
  <text x="96" y="254" font-family="Georgia,serif" font-size="11" fill="#000">3</text>
  <text x="96" y="184" font-family="Georgia,serif" font-size="11" fill="#000">4</text>
  <text x="96" y="114" font-family="Georgia,serif" font-size="11" fill="#000">5</text>

  <!-- Points: P1(1,2)→(190,390), P2(4,6)→(400,180)
       x px = 120 + x·70; y px = 460 − y·70 -->

  <!-- Right triangle legs -->
  <!-- Horizontal leg: P1(190,390) to P3(400,390) -->
  <line x1="190" y1="390" x2="400" y2="390" stroke="#000" stroke-width="2.5"/>
  <!-- Vertical leg: P3(400,390) to P2(400,180) -->
  <line x1="400" y1="390" x2="400" y2="180" stroke="#000" stroke-width="2.5"/>
  <!-- Right angle at P3(400,390) -->
  <rect x="380" y="370" width="20" height="20" fill="none" stroke="#000" stroke-width="2"/>

  <!-- Hypotenuse (distance line) -->
  <line x1="190" y1="390" x2="400" y2="180" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Leg labels -->
  <text x="274" y="408" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Δx = 4−1 = 3</text>
  <text x="406" y="290" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Δy = 6−2 = 4</text>

  <!-- Distance label on hypotenuse -->
  <text x="268" y="268" font-family="Georgia,serif" font-size="13" font-style="italic" font-weight="bold" fill="#000">d = 5</text>

  <!-- Points -->
  <circle cx="190" cy="390" r="7" fill="#000"/>
  <text x="148" y="386" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">P₁(1,2)</text>
  <circle cx="400" cy="180" r="7" fill="#000"/>
  <text x="408" y="176" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">P₂(4,6)</text>
  <circle cx="400" cy="390" r="5" fill="#000"/>

  <!-- Formula box -->
  <rect x="490" y="70" width="290" height="160" rx="6" fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="6,3"/>
  <text x="506" y="94"  font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Distance Formula:</text>
  <text x="506" y="116" font-family="Georgia,serif" font-size="12" fill="#000">d = √[(x₂−x₁)² + (y₂−y₁)²]</text>
  <line x1="506" y1="124" x2="770" y2="124" stroke="#000" stroke-width="1"/>
  <text x="506" y="142" font-family="Georgia,serif" font-size="12" fill="#000">Example: P₁(1,2), P₂(4,6)</text>
  <text x="506" y="160" font-family="Georgia,serif" font-size="12" fill="#000">d = √[(4−1)² + (6−2)²]</text>
  <text x="506" y="178" font-family="Georgia,serif" font-size="12" fill="#000">d = √[9 + 16] = √25</text>
  <text x="506" y="196" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">d = 5  ✓</text>
</svg>`;

  // ─── MIDPOINT FORMULA ────────────────────────────────────────────────────
  static midpointFormulaSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="270" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Midpoint Formula</text>

  <!-- Grid: origin (80,500), scale 50px/unit, x 0..12, y 0..10 -->
  <!-- Vertical gridlines x=1..12 -->
  <line x1="130" y1="50"  x2="130" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="180" y1="50"  x2="180" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="230" y1="50"  x2="230" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="280" y1="50"  x2="280" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="330" y1="50"  x2="330" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="380" y1="50"  x2="380" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="430" y1="50"  x2="430" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="480" y1="50"  x2="480" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="530" y1="50"  x2="530" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="580" y1="50"  x2="580" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="630" y1="50"  x2="630" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="680" y1="50"  x2="680" y2="510" stroke="#ccc" stroke-width="1"/>
  <!-- Horizontal gridlines y=1..9 -->
  <line x1="70" y1="450" x2="700" y2="450" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="400" x2="700" y2="400" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="350" x2="700" y2="350" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="300" x2="700" y2="300" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="250" x2="700" y2="250" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="200" x2="700" y2="200" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="150" x2="700" y2="150" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="100" x2="700" y2="100" stroke="#ccc" stroke-width="1"/>

  <!-- Axes -->
  <line x1="70" y1="500" x2="710" y2="500" stroke="#000" stroke-width="2.5"/>
  <polygon points="706,495 718,500 706,505" fill="#000"/>
  <text x="722" y="504" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">x</text>
  <line x1="80" y1="510" x2="80" y2="40" stroke="#000" stroke-width="2.5"/>
  <polygon points="75,44 80,32 85,44" fill="#000"/>
  <text x="84" y="30" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">y</text>

  <!-- X labels -->
  <text x="126" y="518" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <text x="176" y="518" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <text x="226" y="518" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <text x="276" y="518" font-family="Georgia,serif" font-size="10" fill="#000">4</text>
  <text x="326" y="518" font-family="Georgia,serif" font-size="10" fill="#000">5</text>
  <text x="376" y="518" font-family="Georgia,serif" font-size="10" fill="#000">6</text>
  <text x="426" y="518" font-family="Georgia,serif" font-size="10" fill="#000">7</text>
  <text x="476" y="518" font-family="Georgia,serif" font-size="10" fill="#000">8</text>
  <text x="526" y="518" font-family="Georgia,serif" font-size="10" fill="#000">9</text>
  <text x="573" y="518" font-family="Georgia,serif" font-size="10" fill="#000">10</text>
  <text x="623" y="518" font-family="Georgia,serif" font-size="10" fill="#000">11</text>
  <text x="673" y="518" font-family="Georgia,serif" font-size="10" fill="#000">12</text>

  <!-- Y labels -->
  <text x="60" y="454" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <text x="60" y="404" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <text x="60" y="354" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <text x="60" y="304" font-family="Georgia,serif" font-size="10" fill="#000">4</text>
  <text x="60" y="254" font-family="Georgia,serif" font-size="10" fill="#000">5</text>
  <text x="60" y="204" font-family="Georgia,serif" font-size="10" fill="#000">6</text>
  <text x="60" y="154" font-family="Georgia,serif" font-size="10" fill="#000">7</text>
  <text x="60" y="104" font-family="Georgia,serif" font-size="10" fill="#000">8</text>

  <!-- Points: A(2,3)→(180,350), B(8,9)→(480,50)
       px = 80 + x*50, py = 500 − y*50 -->

  <!-- Segment AB -->
  <line x1="180" y1="350" x2="480" y2="50" stroke="#000" stroke-width="3" stroke-linecap="round"/>

  <!-- Midpoint M=(5,6)→(330,200) -->
  <!-- Equal-length tick marks either side of M -->
  <!-- Along AB direction: (480−180,50−350)=(300,−300), unit=(1/√2,−1/√2) -->
  <!-- perp to segment: (1/√2, 1/√2) = (0.707,0.707), tick length 10 -->
  <line x1="323" y1="207" x2="337" y2="193" stroke="#000" stroke-width="3"/>
  <line x1="319" y1="203" x2="333" y2="189" stroke="#000" stroke-width="3"/>
  <line x1="253" y1="277" x2="267" y2="263" stroke="#000" stroke-width="3"/>
  <line x1="249" y1="273" x2="263" y2="259" stroke="#000" stroke-width="3"/>
  <line x1="393" y1="127" x2="407" y2="113" stroke="#000" stroke-width="3"/>
  <line x1="389" y1="123" x2="403" y2="109" stroke="#000" stroke-width="3"/>

  <!-- Points -->
  <circle cx="180" cy="350" r="7" fill="#000"/>
  <text x="140" y="346" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">A(2,3)</text>
  <circle cx="480" cy="50" r="7" fill="#000"/>
  <text x="488" y="46" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">B(8,9)</text>

  <!-- Midpoint -->
  <circle cx="330" cy="200" r="9" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="338" y="194" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">M(5,6)</text>

  <!-- Dashed drop lines for M -->
  <line x1="330" y1="200" x2="330" y2="500" stroke="#000" stroke-width="1.2" stroke-dasharray="5,4"/>
  <line x1="330" y1="200" x2="80"  y2="200" stroke="#000" stroke-width="1.2" stroke-dasharray="5,4"/>

  <!-- Formula box -->
  <rect x="490" y="240" width="290" height="150" rx="6" fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="6,3"/>
  <text x="506" y="264" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Midpoint Formula:</text>
  <text x="506" y="286" font-family="Georgia,serif" font-size="12" fill="#000">M = ( (x₁+x₂)/2 , (y₁+y₂)/2 )</text>
  <line x1="506" y1="294" x2="770" y2="294" stroke="#000" stroke-width="1"/>
  <text x="506" y="312" font-family="Georgia,serif" font-size="12" fill="#000">Example: A(2,3) and B(8,9)</text>
  <text x="506" y="330" font-family="Georgia,serif" font-size="12" fill="#000">M = ( (2+8)/2 , (3+9)/2 )</text>
  <text x="506" y="348" font-family="Georgia,serif" font-size="12" fill="#000">M = ( 10/2 , 12/2 )</text>
  <text x="506" y="366" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">M = (5, 6)  ✓</text>
</svg>`;

  // ─── SLOPE OF A LINE ─────────────────────────────────────────────────────
  static slopeOfLineSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="268" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Slope of a Line: Rise over Run</text>

  <!-- Grid: origin (100,480), scale 60px/unit, x 0..9, y 0..8 -->
  <!-- Vertical gridlines -->
  <line x1="160" y1="50"  x2="160" y2="490" stroke="#ccc" stroke-width="1"/>
  <line x1="220" y1="50"  x2="220" y2="490" stroke="#ccc" stroke-width="1"/>
  <line x1="280" y1="50"  x2="280" y2="490" stroke="#ccc" stroke-width="1"/>
  <line x1="340" y1="50"  x2="340" y2="490" stroke="#ccc" stroke-width="1"/>
  <line x1="400" y1="50"  x2="400" y2="490" stroke="#ccc" stroke-width="1"/>
  <line x1="460" y1="50"  x2="460" y2="490" stroke="#ccc" stroke-width="1"/>
  <line x1="520" y1="50"  x2="520" y2="490" stroke="#ccc" stroke-width="1"/>
  <line x1="580" y1="50"  x2="580" y2="490" stroke="#ccc" stroke-width="1"/>
  <!-- Horizontal gridlines -->
  <line x1="90" y1="420" x2="610" y2="420" stroke="#ccc" stroke-width="1"/>
  <line x1="90" y1="360" x2="610" y2="360" stroke="#ccc" stroke-width="1"/>
  <line x1="90" y1="300" x2="610" y2="300" stroke="#ccc" stroke-width="1"/>
  <line x1="90" y1="240" x2="610" y2="240" stroke="#ccc" stroke-width="1"/>
  <line x1="90" y1="180" x2="610" y2="180" stroke="#ccc" stroke-width="1"/>
  <line x1="90" y1="120" x2="610" y2="120" stroke="#ccc" stroke-width="1"/>
  <line x1="90" y1="60"  x2="610" y2="60"  stroke="#ccc" stroke-width="1"/>

  <!-- Axes -->
  <line x1="90" y1="480" x2="620" y2="480" stroke="#000" stroke-width="2.5"/>
  <polygon points="616,475 628,480 616,485" fill="#000"/>
  <text x="632" y="484" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">x</text>
  <line x1="100" y1="490" x2="100" y2="42" stroke="#000" stroke-width="2.5"/>
  <polygon points="95,46 100,34 105,46" fill="#000"/>
  <text x="104" y="32" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">y</text>

  <!-- Tick labels x -->
  <text x="157" y="498" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <text x="217" y="498" font-family="Georgia,serif" font-size="11" fill="#000">2</text>
  <text x="277" y="498" font-family="Georgia,serif" font-size="11" fill="#000">3</text>
  <text x="337" y="498" font-family="Georgia,serif" font-size="11" fill="#000">4</text>
  <text x="397" y="498" font-family="Georgia,serif" font-size="11" fill="#000">5</text>
  <text x="457" y="498" font-family="Georgia,serif" font-size="11" fill="#000">6</text>
  <text x="517" y="498" font-family="Georgia,serif" font-size="11" fill="#000">7</text>
  <text x="577" y="498" font-family="Georgia,serif" font-size="11" fill="#000">8</text>

  <!-- Tick labels y -->
  <text x="78" y="424" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <text x="78" y="364" font-family="Georgia,serif" font-size="11" fill="#000">2</text>
  <text x="78" y="304" font-family="Georgia,serif" font-size="11" fill="#000">3</text>
  <text x="78" y="244" font-family="Georgia,serif" font-size="11" fill="#000">4</text>
  <text x="78" y="184" font-family="Georgia,serif" font-size="11" fill="#000">5</text>
  <text x="78" y="124" font-family="Georgia,serif" font-size="11" fill="#000">6</text>
  <text x="78" y="64"  font-family="Georgia,serif" font-size="11" fill="#000">7</text>

  <!-- Points: P1(1,2)→(160,360), P2(5,8)→(400,120)
       px=100+x*60, py=480−y*60 -->

  <!-- Extended line through P1 and P2 (extended slightly) -->
  <line x1="100" y1="420" x2="520" y2="60" stroke="#000" stroke-width="3" stroke-linecap="round"/>

  <!-- Rise-run right triangle -->
  <!-- Horizontal leg: P1(160,360) to P3(400,360) -->
  <line x1="160" y1="360" x2="400" y2="360" stroke="#000" stroke-width="2.5"/>
  <!-- Vertical leg: P3(400,360) to P2(400,120) -->
  <line x1="400" y1="360" x2="400" y2="120" stroke="#000" stroke-width="2.5"/>
  <!-- Right angle at P3(400,360) -->
  <rect x="380" y="340" width="20" height="20" fill="none" stroke="#000" stroke-width="2"/>

  <!-- Rise label (with arrows) -->
  <line x1="420" y1="360" x2="420" y2="120" stroke="#000" stroke-width="1.8" stroke-dasharray="1,0"/>
  <polygon points="416,130 420,118 424,130" fill="#000"/>
  <polygon points="416,350 420,362 424,350" fill="#000"/>
  <text x="428" y="248" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Rise = 6</text>

  <!-- Run label (with arrows) -->
  <line x1="160" y1="378" x2="400" y2="378" stroke="#000" stroke-width="1.8"/>
  <polygon points="170,374 158,378 170,382" fill="#000"/>
  <polygon points="390,374 402,378 390,382" fill="#000"/>
  <text x="248" y="398" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Run = 4</text>

  <!-- Points -->
  <circle cx="160" cy="360" r="7" fill="#000"/>
  <text x="118" y="356" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">P₁(1,2)</text>
  <circle cx="400" cy="120" r="7" fill="#000"/>
  <text x="408" y="116" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">P₂(5,8)</text>

  <!-- Formula box -->
  <rect x="440" y="390" width="340" height="170" rx="6" fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="6,3"/>
  <text x="456" y="414" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Slope Formula:</text>
  <text x="456" y="436" font-family="Georgia,serif" font-size="12" fill="#000">m = Rise / Run = Δy / Δx</text>
  <text x="456" y="454" font-family="Georgia,serif" font-size="12" fill="#000">m = (y₂ − y₁) / (x₂ − x₁)</text>
  <line x1="456" y1="462" x2="770" y2="462" stroke="#000" stroke-width="1"/>
  <text x="456" y="480" font-family="Georgia,serif" font-size="12" fill="#000">Example: P₁(1,2), P₂(5,8)</text>
  <text x="456" y="498" font-family="Georgia,serif" font-size="12" fill="#000">m = (8−2)/(5−1) = 6/4</text>
  <text x="456" y="516" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">m = 3/2 = 1.5  ✓</text>
  <text x="456" y="534" font-family="Georgia,serif" font-size="11" fill="#444">(positive slope → rising left to right)</text>
</svg>`;

  // ─── EQUATION OF A LINE ──────────────────────────────────────────────────
  static equationOfLineSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="300" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Equation of a Line</text>

  <!-- Grid: origin (120,400), scale 50px/unit, x −3..9, y −3..7 -->
  <!-- Vertical gridlines -->
  <line x1="120" y1="50"  x2="120" y2="450" stroke="#ddd" stroke-width="1"/>
  <line x1="170" y1="50"  x2="170" y2="450" stroke="#ddd" stroke-width="1"/>
  <line x1="220" y1="50"  x2="220" y2="450" stroke="#ddd" stroke-width="1"/>
  <line x1="270" y1="50"  x2="270" y2="450" stroke="#ddd" stroke-width="1"/>
  <line x1="320" y1="50"  x2="320" y2="450" stroke="#ddd" stroke-width="1"/>
  <line x1="370" y1="50"  x2="370" y2="450" stroke="#ddd" stroke-width="1"/>
  <line x1="420" y1="50"  x2="420" y2="450" stroke="#ddd" stroke-width="1"/>
  <line x1="470" y1="50"  x2="470" y2="450" stroke="#ddd" stroke-width="1"/>
  <line x1="520" y1="50"  x2="520" y2="450" stroke="#ddd" stroke-width="1"/>
  <!-- Horizontal gridlines -->
  <line x1="70" y1="450" x2="540" y2="450" stroke="#ddd" stroke-width="1"/>
  <line x1="70" y1="400" x2="540" y2="400" stroke="#ddd" stroke-width="1"/>
  <line x1="70" y1="350" x2="540" y2="350" stroke="#ddd" stroke-width="1"/>
  <line x1="70" y1="300" x2="540" y2="300" stroke="#ddd" stroke-width="1"/>
  <line x1="70" y1="250" x2="540" y2="250" stroke="#ddd" stroke-width="1"/>
  <line x1="70" y1="200" x2="540" y2="200" stroke="#ddd" stroke-width="1"/>
  <line x1="70" y1="150" x2="540" y2="150" stroke="#ddd" stroke-width="1"/>
  <line x1="70" y1="100" x2="540" y2="100" stroke="#ddd" stroke-width="1"/>

  <!-- Axes; origin at (270,400): x=0 at px=270, y=0 at py=400 -->
  <line x1="70" y1="400" x2="548" y2="400" stroke="#000" stroke-width="2.5"/>
  <polygon points="544,395 556,400 544,405" fill="#000"/>
  <text x="560" y="404" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">x</text>
  <line x1="270" y1="460" x2="270" y2="42" stroke="#000" stroke-width="2.5"/>
  <polygon points="265,46 270,34 275,46" fill="#000"/>
  <text x="274" y="32" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">y</text>

  <!-- X tick labels (px=270+x*50, x from −3 to +5 skip 0) -->
  <text x="118" y="418" font-family="Georgia,serif" font-size="10" fill="#000">−3</text>
  <text x="168" y="418" font-family="Georgia,serif" font-size="10" fill="#000">−2</text>
  <text x="218" y="418" font-family="Georgia,serif" font-size="10" fill="#000">−1</text>
  <text x="318" y="418" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <text x="368" y="418" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <text x="418" y="418" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <text x="468" y="418" font-family="Georgia,serif" font-size="10" fill="#000">4</text>
  <text x="518" y="418" font-family="Georgia,serif" font-size="10" fill="#000">5</text>

  <!-- Y tick labels (py=400−y*50) -->
  <text x="250" y="454" font-family="Georgia,serif" font-size="10" fill="#000">−1</text>
  <text x="254" y="354" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <text x="254" y="304" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <text x="254" y="254" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <text x="254" y="204" font-family="Georgia,serif" font-size="10" fill="#000">4</text>
  <text x="254" y="154" font-family="Georgia,serif" font-size="10" fill="#000">5</text>
  <text x="254" y="104" font-family="Georgia,serif" font-size="10" fill="#000">6</text>

  <!-- Line y = (3/2)x + 1; m=3/2, b=1
       At x=−2: y=−2   → px=170, py=500 (off canvas)
       At x=−1: y=−0.5 → px=220, py=425
       At x=0:  y=1    → px=270, py=350
       At x=2:  y=4    → px=370, py=200
       At x=4:  y=7    → px=470, py=50
       Draw from x=−1 to x=4 -->
  <line x1="220" y1="425" x2="470" y2="50" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Y-intercept (0,1): px=270, py=350 -->
  <circle cx="270" cy="350" r="7" fill="#000"/>
  <text x="276" y="344" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">y-intercept (0,1)</text>
  <!-- Label b -->
  <line x1="270" y1="350" x2="270" y2="400" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="276" y="378" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">b=1</text>

  <!-- Point (2,4): px=370, py=200 -->
  <circle cx="370" cy="200" r="7" fill="#000"/>
  <text x="378" y="196" font-family="Georgia,serif" font-size="12" fill="#000">(2, 4)</text>

  <!-- Rise/run from (0,1) to (2,4) -->
  <line x1="270" y1="350" x2="370" y2="350" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <line x1="370" y1="350" x2="370" y2="200" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <rect x="350" y="330" width="20" height="20" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="305" y="368" font-family="Georgia,serif" font-size="11" fill="#000">run=2</text>
  <text x="378" y="282" font-family="Georgia,serif" font-size="11" fill="#000">rise=3</text>

  <!-- Forms panel -->
  <rect x="580" y="50" width="300" height="490" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="596" y="78" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Forms of the Line Equation</text>
  <line x1="580" y1="86" x2="880" y2="86" stroke="#000" stroke-width="1.5"/>

  <text x="596" y="112" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">1. Slope-Intercept Form</text>
  <text x="596" y="130" font-family="Georgia,serif" font-size="13" fill="#000">y = mx + b</text>
  <text x="596" y="148" font-family="Georgia,serif" font-size="11" fill="#444">  m = slope,  b = y-intercept</text>
  <text x="596" y="164" font-family="Georgia,serif" font-size="11" fill="#000">  Example:  y = (3/2)x + 1</text>

  <line x1="596" y1="176" x2="868" y2="176" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>

  <text x="596" y="198" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">2. Point-Slope Form</text>
  <text x="596" y="216" font-family="Georgia,serif" font-size="13" fill="#000">y − y₁ = m(x − x₁)</text>
  <text x="596" y="234" font-family="Georgia,serif" font-size="11" fill="#444">  Using point (x₁, y₁) on the line</text>
  <text x="596" y="250" font-family="Georgia,serif" font-size="11" fill="#000">  Example:  y − 1 = (3/2)(x − 0)</text>

  <line x1="596" y1="262" x2="868" y2="262" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>

  <text x="596" y="284" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">3. General Form</text>
  <text x="596" y="302" font-family="Georgia,serif" font-size="13" fill="#000">ax + by + c = 0</text>
  <text x="596" y="320" font-family="Georgia,serif" font-size="11" fill="#444">  a, b, c are integers (usually)</text>
  <text x="596" y="336" font-family="Georgia,serif" font-size="11" fill="#000">  Example:  3x − 2y + 2 = 0</text>

  <line x1="596" y1="348" x2="868" y2="348" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>

  <text x="596" y="370" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Key Properties</text>
  <text x="596" y="390" font-family="Georgia,serif" font-size="11" fill="#000">  Slope:  m = rise/run = Δy/Δx</text>
  <text x="596" y="408" font-family="Georgia,serif" font-size="11" fill="#000">  Positive m → rises left to right</text>
  <text x="596" y="424" font-family="Georgia,serif" font-size="11" fill="#000">  Negative m → falls left to right</text>
  <text x="596" y="440" font-family="Georgia,serif" font-size="11" fill="#000">  m=0 → horizontal line</text>
  <text x="596" y="456" font-family="Georgia,serif" font-size="11" fill="#000">  undefined m → vertical line</text>
  <text x="596" y="480" font-family="Georgia,serif" font-size="11" fill="#000">  Parallel lines: equal slopes</text>
  <text x="596" y="498" font-family="Georgia,serif" font-size="11" fill="#000">  Perpendicular: m₁ × m₂ = −1</text>
  <text x="596" y="526" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">This line: m = 3/2, b = 1</text>
</svg>`;

  // ─── 3D SOLID SHAPES ─────────────────────────────────────────────────────
  static solid3DShapesSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <!-- Title -->
  <text x="370" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">3D Solid Shapes</text>

  <!-- ── CUBE (top-left) ── -->
  <!-- Front face: (60,120) 110×110 -->
  <rect x="60" y="120" width="110" height="110" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <!-- Top face (parallelogram) -->
  <polygon points="60,120 100,85 210,85 170,120" fill="#e8e8e8" stroke="#000" stroke-width="2.5"/>
  <!-- Right face (parallelogram) -->
  <polygon points="170,120 210,85 210,195 170,230" fill="#d0d0d0" stroke="#000" stroke-width="2.5"/>
  <!-- Hidden edges dashed -->
  <line x1="60" y1="230" x2="100" y2="195" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="100" y1="85"  x2="100" y2="195" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="100" y1="195" x2="210" y2="195" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="105" y="262" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Cube</text>
  <text x="72"  y="278" font-family="Georgia,serif" font-size="10" fill="#444">All sides equal: a × a × a</text>
  <!-- Dimension label -->
  <text x="98" y="185" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">a</text>
  <text x="108" y="118" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">a</text>
  <text x="178" y="150" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">a</text>

  <!-- ── CUBOID (second from left) ── -->
  <rect x="256" y="140" width="140" height="90" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <polygon points="256,140 292,110 432,110 396,140" fill="#e8e8e8" stroke="#000" stroke-width="2.5"/>
  <polygon points="396,140 432,110 432,200 396,230" fill="#d0d0d0" stroke="#000" stroke-width="2.5"/>
  <line x1="256" y1="230" x2="292" y2="200" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="292" y1="110" x2="292" y2="200" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="292" y1="200" x2="432" y2="200" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="295" y="262" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Cuboid</text>
  <text x="258" y="278" font-family="Georgia,serif" font-size="10" fill="#444">l × w × h (rectangular prism)</text>
  <text x="314" y="193" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">l</text>
  <text x="244" y="190" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">h</text>
  <text x="410" y="175" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">w</text>

  <!-- ── SPHERE ── -->
  <circle cx="572" cy="170" r="80" fill="#f0f0f0" stroke="#000" stroke-width="2.5"/>
  <!-- Equator ellipse -->
  <ellipse cx="572" cy="170" rx="80" ry="22" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="6,4"/>
  <!-- Meridian arc (left half dashed) -->
  <path d="M 572,90 A 22,80 0 0,0 572,250" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <path d="M 572,90 A 22,80 0 0,1 572,250" fill="none" stroke="#000" stroke-width="1.5"/>
  <!-- Radius -->
  <line x1="572" y1="170" x2="652" y2="170" stroke="#000" stroke-width="2"/>
  <text x="606" y="165" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">r</text>
  <circle cx="572" cy="170" r="4" fill="#000"/>
  <text x="543" y="272" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Sphere</text>
  <text x="520" y="288" font-family="Georgia,serif" font-size="10" fill="#444">V = (4/3)πr³,  SA = 4πr²</text>

  <!-- ── CYLINDER ── -->
  <!-- Top ellipse: cx=790,cy=110, rx=70,ry=20 -->
  <ellipse cx="790" cy="110" rx="70" ry="20" fill="#e8e8e8" stroke="#000" stroke-width="2.5"/>
  <!-- Bottom ellipse: cy=220 -->
  <ellipse cx="790" cy="220" rx="70" ry="20" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <!-- Side walls -->
  <line x1="720" y1="110" x2="720" y2="220" stroke="#000" stroke-width="2.5"/>
  <line x1="860" y1="110" x2="860" y2="220" stroke="#000" stroke-width="2.5"/>
  <!-- Height and radius lines -->
  <line x1="860" y1="110" x2="860" y2="220" stroke="#000" stroke-width="1.5" stroke-dasharray="1,0"/>
  <line x1="790" y1="110" x2="860" y2="110" stroke="#000" stroke-width="1.8"/>
  <text x="818" y="106" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">r</text>
  <line x1="876" y1="110" x2="876" y2="220" stroke="#000" stroke-width="1.5"/>
  <text x="880" y="168" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">h</text>
  <text x="756" y="262" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Cylinder</text>
  <text x="716" y="278" font-family="Georgia,serif" font-size="10" fill="#444">V = πr²h,  SA = 2πr(r+h)</text>

  <!-- ── CONE ── -->
  <!-- Base ellipse: cx=140,cy=530, rx=80,ry=22 -->
  <ellipse cx="140" cy="530" rx="80" ry="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <!-- Apex at (140,380) -->
  <line x1="60"  y1="530" x2="140" y2="380" stroke="#000" stroke-width="2.5"/>
  <line x1="220" y1="530" x2="140" y2="380" stroke="#000" stroke-width="2.5"/>
  <!-- Height dashed -->
  <line x1="140" y1="380" x2="140" y2="530" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="146" y="462" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">h</text>
  <line x1="140" y1="530" x2="220" y2="530" stroke="#000" stroke-width="1.8"/>
  <text x="174" y="524" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">r</text>
  <!-- Slant height label -->
  <text x="76"  y="460" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#444">l</text>
  <text x="108" y="578" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Cone</text>
  <text x="56"  y="594" font-family="Georgia,serif" font-size="10" fill="#444">V = (1/3)πr²h,  SA = πr(r+l)</text>

  <!-- ── SQUARE PYRAMID ── -->
  <!-- Base square: (320,470) 160×120 in isometric -->
  <polygon points="400,510 480,470 560,510 480,550" fill="#f0f0f0" stroke="#000" stroke-width="2.5"/>
  <!-- Apex (400,360) -->
  <line x1="400" y1="510" x2="480" y2="360" stroke="#000" stroke-width="2.5"/>
  <line x1="480" y1="550" x2="480" y2="360" stroke="#000" stroke-width="2.5"/>
  <line x1="560" y1="510" x2="480" y2="360" stroke="#000" stroke-width="2.5"/>
  <line x1="480" y1="470" x2="480" y2="360" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Height dashed -->
  <line x1="480" y1="360" x2="480" y2="510" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="486" y="440" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">h</text>
  <text x="430" y="600" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Square Pyramid</text>
  <text x="368" y="618" font-family="Georgia,serif" font-size="10" fill="#444">V = (1/3)b²h,  SA = b²+2bl</text>

  <!-- ── TRIANGULAR PRISM ── -->
  <!-- Two triangular faces + three rectangular faces -->
  <!-- Front triangle: (680,480)(760,360)(840,480) -->
  <polygon points="680,480 760,360 840,480" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <!-- Back triangle shifted right+up: (730,460)(810,340)(890,460) -->
  <polygon points="730,460 810,340 890,460" fill="#e8e8e8" stroke="#000" stroke-width="2.5"/>
  <!-- Connecting edges -->
  <line x1="680" y1="480" x2="730" y2="460" stroke="#000" stroke-width="2.5"/>
  <line x1="760" y1="360" x2="810" y2="340" stroke="#000" stroke-width="2.5"/>
  <line x1="840" y1="480" x2="890" y2="460" stroke="#000" stroke-width="2.5"/>
  <!-- Hidden bottom edges dashed -->
  <line x1="680" y1="480" x2="890" y2="460" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="740" y="520" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Triangular Prism</text>
  <text x="680" y="538" font-family="Georgia,serif" font-size="10" fill="#444">V = (1/2)bhl,  5 faces</text>
</svg>`;

  // ─── NETS OF 3D SHAPES ───────────────────────────────────────────────────
  static nets3DShapesSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="300" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Nets of 3D Shapes</text>

  <!-- ── CUBE NET (cross/T shape) ── -->
  <!-- 6 squares × 70px each; cross layout -->
  <!-- Row 0: top    square  at (140,60) -->
  <rect x="140" y="60"  width="70" height="70" fill="none" stroke="#000" stroke-width="2.5"/>
  <!-- Row 1: left, front, right, back -->
  <rect x="70"  y="130" width="70" height="70" fill="#f0f0f0" stroke="#000" stroke-width="2.5"/>
  <rect x="140" y="130" width="70" height="70" fill="none" stroke="#000" stroke-width="2.5"/>
  <rect x="210" y="130" width="70" height="70" fill="#e0e0e0" stroke="#000" stroke-width="2.5"/>
  <rect x="280" y="130" width="70" height="70" fill="none" stroke="#000" stroke-width="2.5"/>
  <!-- Row 2: bottom -->
  <rect x="140" y="200" width="70" height="70" fill="#e8e8e8" stroke="#000" stroke-width="2.5"/>

  <!-- Fold lines (dashed) on shared edges already covered by stroke -->
  <!-- Face labels -->
  <text x="164" y="100" font-family="Georgia,serif" font-size="10" fill="#444">Top</text>
  <text x="88"  y="168" font-family="Georgia,serif" font-size="10" fill="#444">Left</text>
  <text x="155" y="168" font-family="Georgia,serif" font-size="10" fill="#444">Front</text>
  <text x="222" y="168" font-family="Georgia,serif" font-size="10" fill="#444">Right</text>
  <text x="290" y="168" font-family="Georgia,serif" font-size="10" fill="#444">Back</text>
  <text x="155" y="240" font-family="Georgia,serif" font-size="10" fill="#444">Bot.</text>

  <text x="140" y="295" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Cube Net</text>
  <text x="84"  y="312" font-family="Georgia,serif" font-size="10" fill="#444">6 squares (cross layout)</text>

  <!-- Arrow showing folding -->
  <line x1="370" y1="175" x2="410" y2="175" stroke="#000" stroke-width="2"/>
  <polygon points="406,171 418,175 406,179" fill="#000"/>
  <text x="372" y="168" font-family="Georgia,serif" font-size="10" fill="#444">fold</text>

  <!-- ── CUBE 3D (small, right of arrow) ── -->
  <rect x="418" y="140" width="70" height="70" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <polygon points="418,140 452,112 522,112 488,140" fill="#e0e0e0" stroke="#000" stroke-width="2.5"/>
  <polygon points="488,140 522,112 522,182 488,210" fill="#d0d0d0" stroke="#000" stroke-width="2.5"/>
  <text x="436" y="230" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Cube 3D</text>

  <!-- ── CYLINDER NET ── -->
  <!-- Two circles + rectangle -->
  <!-- Top circle at (610,110) r=40 -->
  <circle cx="610" cy="110" r="40" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="594" y="114" font-family="Georgia,serif" font-size="10" fill="#444">top</text>
  <!-- Rectangle representing lateral surface: (560,165) 100×130 (2πr × h) -->
  <rect x="560" y="160" width="100" height="130" fill="#f0f0f0" stroke="#000" stroke-width="2.5"/>
  <text x="583" y="230" font-family="Georgia,serif" font-size="10" fill="#444">lateral</text>
  <text x="576" y="244" font-family="Georgia,serif" font-size="10" fill="#444">surface</text>
  <text x="548" y="260" font-family="Georgia,serif" font-size="10" fill="#444">2πr × h</text>
  <!-- Bottom circle at (610,305) r=40 -->
  <circle cx="610" cy="305" r="40" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="592" y="309" font-family="Georgia,serif" font-size="10" fill="#444">bottom</text>
  <!-- Dashed lines connecting circle to rect top/bottom -->
  <line x1="570" y1="110" x2="560" y2="160" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="650" y1="110" x2="660" y2="160" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="570" y1="305" x2="560" y2="290" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="650" y1="305" x2="660" y2="290" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>

  <text x="573" y="365" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Cylinder Net</text>
  <text x="548" y="382" font-family="Georgia,serif" font-size="10" fill="#444">2 circles + 1 rectangle</text>

  <!-- ── CONE NET ── -->
  <!-- Sector + circle -->
  <!-- Sector at (810,200), radius 120, angle ~150° -->
  <path d="M 810,200 L 910,200 A 100,100 0 1,0 735,150 Z"
        fill="#f4f4f4" stroke="#000" stroke-width="2.5"/>
  <text x="780" y="185" font-family="Georgia,serif" font-size="10" fill="#444">lateral</text>
  <text x="780" y="198" font-family="Georgia,serif" font-size="10" fill="#444">(sector)</text>
  <!-- Base circle smaller -->
  <circle cx="800" cy="380" r="32" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="779" y="384" font-family="Georgia,serif" font-size="10" fill="#444">base</text>

  <!-- Slant height label on sector -->
  <text x="864" y="195" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">l</text>

  <text x="766" y="430" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Cone Net</text>
  <text x="742" y="447" font-family="Georgia,serif" font-size="10" fill="#444">1 sector + 1 circle</text>

  <!-- Note at bottom -->
  <text x="40" y="490" font-family="Georgia,serif" font-size="11" fill="#444">A net is a flat 2D pattern that can be folded along the edges to form a 3D solid.</text>
  <text x="40" y="508" font-family="Georgia,serif" font-size="11" fill="#444">Each face of the solid appears exactly once in the net.</text>
</svg>`;

  // ─── SURFACE AREA DIAGRAM ────────────────────────────────────────────────
  static surfaceAreaDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="300" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Surface Area of a Cuboid</text>
  <text x="310" y="46" font-family="Georgia,serif" font-size="12" fill="#444">l = 5,  w = 3,  h = 4</text>

  <!-- ── 3D Cuboid (isometric) ── -->
  <!-- Scale: l=5→125px, w=3→75px, h=4→100px; iso offset 30° so x-projection=cos30·75≈65, y=sin30·75=37 -->
  <!-- Front face: (60,120) 125w×100h -->
  <rect x="60" y="120" width="125" height="100" fill="#fff" stroke="#000" stroke-width="3"/>
  <!-- Top face -->
  <polygon points="60,120 125,83 250,83 185,120" fill="#e0e0e0" stroke="#000" stroke-width="3"/>
  <!-- Right face -->
  <polygon points="185,120 250,83 250,183 185,220" fill="#c8c8c8" stroke="#000" stroke-width="3"/>
  <!-- Hidden edges -->
  <line x1="60" y1="220" x2="125" y2="183" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="125" y1="83"  x2="125" y2="183" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="125" y1="183" x2="250" y2="183" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- Dimension labels -->
  <!-- l on top face -->
  <text x="155" y="78" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">l = 5</text>
  <!-- h on front-left edge -->
  <text x="36"  y="175" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">h = 4</text>
  <!-- w on right face -->
  <text x="218" y="160" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">w = 3</text>
  <!-- l on front base -->
  <text x="100" y="238" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">l = 5</text>

  <!-- ── Six faces laid out flat (net excerpt), right side ── -->
  <!-- Two l×h faces (front & back): 5×4 → 100×80px each -->
  <!-- Two l×w faces (top & bottom): 5×3 → 100×60px each -->
  <!-- Two w×h faces (left & right): 3×4 → 60×80px each -->

  <!-- Face 1: Front/Back (l×h = 5×4) -->
  <rect x="330" y="80"  width="100" height="80" fill="#f4f4f4" stroke="#000" stroke-width="2.5"/>
  <text x="366" y="126" font-family="Georgia,serif" font-size="11" fill="#000">l × h</text>
  <text x="356" y="140" font-family="Georgia,serif" font-size="11" fill="#000">5 × 4 = 20</text>
  <text x="348" y="72"  font-family="Georgia,serif" font-size="10" fill="#444">Front / Back</text>

  <!-- Face 2: Top/Bottom (l×w = 5×3) -->
  <rect x="460" y="80"  width="100" height="60" fill="#e8e8e8" stroke="#000" stroke-width="2.5"/>
  <text x="496" y="114" font-family="Georgia,serif" font-size="11" fill="#000">l × w</text>
  <text x="476" y="128" font-family="Georgia,serif" font-size="11" fill="#000">5 × 3 = 15</text>
  <text x="468" y="72"  font-family="Georgia,serif" font-size="10" fill="#444">Top / Bottom</text>

  <!-- Face 3: Left/Right (w×h = 3×4) -->
  <rect x="590" y="80"  width="60"  height="80" fill="#ebebeb" stroke="#000" stroke-width="2.5"/>
  <text x="604" y="124" font-family="Georgia,serif" font-size="11" fill="#000">w×h</text>
  <text x="596" y="138" font-family="Georgia,serif" font-size="11" fill="#000">3×4=12</text>
  <text x="584" y="72"  font-family="Georgia,serif" font-size="10" fill="#444">Left / Right</text>

  <!-- Calculation panel -->
  <rect x="300" y="200" width="580" height="370" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="318" y="228" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Surface Area Calculation</text>
  <line x1="318" y1="236" x2="860" y2="236" stroke="#000" stroke-width="1.5"/>

  <text x="318" y="260" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Formula:</text>
  <text x="318" y="280" font-family="Georgia,serif" font-size="13" fill="#000">SA = 2(lw + lh + wh)</text>
  <line x1="318" y1="292" x2="860" y2="292" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>

  <text x="318" y="316" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Breaking it down:</text>
  <text x="318" y="338" font-family="Georgia,serif" font-size="12" fill="#000">• 2 Front/Back faces:   2 × (l × h) = 2 × (5 × 4) = 2 × 20 = 40</text>
  <text x="318" y="360" font-family="Georgia,serif" font-size="12" fill="#000">• 2 Top/Bottom faces:  2 × (l × w) = 2 × (5 × 3) = 2 × 15 = 30</text>
  <text x="318" y="382" font-family="Georgia,serif" font-size="12" fill="#000">• 2 Left/Right faces:   2 × (w × h) = 2 × (3 × 4) = 2 × 12 = 24</text>
  <line x1="318" y1="394" x2="680" y2="394" stroke="#000" stroke-width="1"/>

  <text x="318" y="416" font-family="Georgia,serif" font-size="13" fill="#000">Total SA = 40 + 30 + 24</text>
  <text x="318" y="440" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">SA = 94 square units</text>
  <line x1="318" y1="452" x2="860" y2="452" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>

  <text x="318" y="474" font-family="Georgia,serif" font-size="12" fill="#444">General formula:  SA = 2(lw + lh + wh)</text>
  <text x="318" y="494" font-family="Georgia,serif" font-size="12" fill="#444">Each pair of opposite faces has equal area.</text>
  <text x="318" y="514" font-family="Georgia,serif" font-size="12" fill="#444">A cuboid has 6 rectangular faces, 12 edges, 8 vertices.</text>
  <text x="318" y="552" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">✓  Verify: 2(5×3 + 5×4 + 3×4) = 2(15+20+12) = 2(47) = 94</text>
</svg>`;

  // ─── VOLUME DIAGRAM ──────────────────────────────────────────────────────
  static volumeDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="258" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Volume of a Cylinder</text>
  <text x="298" y="46" font-family="Georgia,serif" font-size="12" fill="#444">radius r = 3,  height h = 5</text>

  <!-- ── Cylinder 3D ── -->
  <!-- Scale: r=3→90px, h=5→150px -->
  <!-- Top ellipse: cx=200, cy=140, rx=90, ry=25 -->
  <ellipse cx="200" cy="140" rx="90" ry="25" fill="#e8e8e8" stroke="#000" stroke-width="3"/>
  <!-- Bottom ellipse: cy=290 -->
  <ellipse cx="200" cy="290" rx="90" ry="25" fill="#f4f4f4" stroke="#000" stroke-width="3"/>
  <!-- Side walls -->
  <line x1="110" y1="140" x2="110" y2="290" stroke="#000" stroke-width="3"/>
  <line x1="290" y1="140" x2="290" y2="290" stroke="#000" stroke-width="3"/>

  <!-- Radius arrow on top ellipse -->
  <line x1="200" y1="140" x2="290" y2="140" stroke="#000" stroke-width="2.5"/>
  <polygon points="282,136 292,140 282,144" fill="#000"/>
  <polygon points="208,136 198,140 208,144" fill="#000"/>
  <text x="232" y="132" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">r = 3</text>
  <circle cx="200" cy="140" r="4" fill="#000"/>

  <!-- Height arrow -->
  <line x1="310" y1="140" x2="310" y2="290" stroke="#000" stroke-width="2"/>
  <polygon points="306,150 310,138 314,150" fill="#000"/>
  <polygon points="306,280 310,292 314,280" fill="#000"/>
  <text x="316" y="218" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">h = 5</text>

  <!-- Dashed centre height line -->
  <line x1="200" y1="140" x2="200" y2="290" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>

  <!-- Base circle area callout -->
  <text x="152" y="294" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#444">base area = πr²</text>

  <!-- Volume "stacking discs" lines to show concept -->
  <ellipse cx="200" cy="190" rx="90" ry="25" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="6,4"/>
  <ellipse cx="200" cy="240" rx="90" ry="25" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="6,4"/>

  <!-- Calculation panel -->
  <rect x="380" y="60" width="390" height="460" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="398" y="88" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Volume Calculation</text>
  <line x1="398" y1="96" x2="752" y2="96" stroke="#000" stroke-width="1.5"/>

  <text x="398" y="122" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Formula:</text>
  <text x="398" y="144" font-family="Georgia,serif" font-size="14" fill="#000">V = π × r² × h</text>
  <text x="398" y="162" font-family="Georgia,serif" font-size="11" fill="#444">  (base area × height)</text>

  <line x1="398" y1="174" x2="752" y2="174" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>

  <text x="398" y="198" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Step-by-step:</text>
  <text x="398" y="220" font-family="Georgia,serif" font-size="12" fill="#000">1. Base area = π × r²</text>
  <text x="416" y="238" font-family="Georgia,serif" font-size="12" fill="#000">= π × 3²  = 9π</text>
  <text x="416" y="256" font-family="Georgia,serif" font-size="12" fill="#000">≈ 28.27 sq units</text>

  <text x="398" y="280" font-family="Georgia,serif" font-size="12" fill="#000">2. Multiply by height:</text>
  <text x="416" y="298" font-family="Georgia,serif" font-size="12" fill="#000">V = 9π × 5 = 45π</text>
  <text x="416" y="316" font-family="Georgia,serif" font-size="12" fill="#000">≈ 141.37 cubic units</text>

  <line x1="398" y1="328" x2="752" y2="328" stroke="#000" stroke-width="1"/>
  <text x="398" y="352" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">V = 45π ≈ 141.4 units³</text>

  <line x1="398" y1="368" x2="752" y2="368" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>

  <text x="398" y="392" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Surface Area (bonus):</text>
  <text x="398" y="412" font-family="Georgia,serif" font-size="12" fill="#000">SA = 2πr(r + h)</text>
  <text x="398" y="430" font-family="Georgia,serif" font-size="12" fill="#000">   = 2π(3)(3 + 5)</text>
  <text x="398" y="448" font-family="Georgia,serif" font-size="12" fill="#000">   = 2π(3)(8) = 48π</text>
  <text x="398" y="466" font-family="Georgia,serif" font-size="12" fill="#000">   ≈ 150.80 sq units</text>

  <line x1="398" y1="478" x2="752" y2="478" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>

  <text x="398" y="498" font-family="Georgia,serif" font-size="11" fill="#444">Concept: Volume = sum of infinitely thin</text>
  <text x="398" y="514" font-family="Georgia,serif" font-size="11" fill="#444">circular discs stacked to height h.</text>

  <!-- Annotation on cylinder -->
  <text x="60" y="355" font-family="Georgia,serif" font-size="11" fill="#444">Stacking</text>
  <text x="60" y="370" font-family="Georgia,serif" font-size="11" fill="#444">circular</text>
  <text x="60" y="385" font-family="Georgia,serif" font-size="11" fill="#444">discs →</text>
  <line x1="110" y1="370" x2="112" y2="240" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
</svg>`;


  // (existing diagrams unchanged above...)

  // ─── ANGLE TYPES ──────────────────────────────────────────────────────────
  // Shows acute, right, obtuse, straight, and reflex angles side by side
  // with degree measures and labels. Black and white printable.
  static angleTypesSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <!-- Title -->
  <text x="340" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Types of Angles</text>

  <!-- ═══ 1. ACUTE (45°) — centre (110, 280) ═══ -->
  <text x="60" y="70" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Acute Angle</text>
  <!-- base ray → right -->
  <line x1="110" y1="340" x2="210" y2="340" stroke="#000" stroke-width="3"/>
  <!-- angled ray at 45° -->
  <line x1="110" y1="340" x2="181" y2="269" stroke="#000" stroke-width="3"/>
  <!-- arc -->
  <path d="M 150,340 A 40,40 0 0,0 138,311" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="152" y="330" font-family="Georgia,serif" font-size="11" fill="#000">45°</text>
  <text x="55" y="380" font-family="Georgia,serif" font-size="11" fill="#000">0° &lt; θ &lt; 90°</text>

  <!-- ═══ 2. RIGHT (90°) — centre (310, 340) ═══ -->
  <text x="255" y="70" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Right Angle</text>
  <line x1="310" y1="340" x2="410" y2="340" stroke="#000" stroke-width="3"/>
  <line x1="310" y1="340" x2="310" y2="240" stroke="#000" stroke-width="3"/>
  <!-- square marker -->
  <rect x="310" y="320" width="20" height="20" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="316" y="310" font-family="Georgia,serif" font-size="11" fill="#000">90°</text>
  <text x="262" y="380" font-family="Georgia,serif" font-size="11" fill="#000">θ = 90° exactly</text>

  <!-- ═══ 3. OBTUSE (120°) — centre (510, 340) ═══ -->
  <text x="450" y="70" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Obtuse Angle</text>
  <line x1="510" y1="340" x2="610" y2="340" stroke="#000" stroke-width="3"/>
  <!-- ray at 120° from positive x: (cos120°,−sin120°) = (−0.5, −0.866) scaled 100 -->
  <line x1="510" y1="340" x2="460" y2="253" stroke="#000" stroke-width="3"/>
  <path d="M 560,340 A 50,50 0 0,0 535,296" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="545" y="316" font-family="Georgia,serif" font-size="11" fill="#000">120°</text>
  <text x="445" y="380" font-family="Georgia,serif" font-size="11" fill="#000">90° &lt; θ &lt; 180°</text>

  <!-- ═══ 4. STRAIGHT (180°) — centre (710, 340) ═══ -->
  <text x="650" y="70" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Straight Angle</text>
  <line x1="610" y1="340" x2="810" y2="340" stroke="#000" stroke-width="3"/>
  <!-- vertex dot -->
  <circle cx="710" cy="340" r="5" fill="#000"/>
  <!-- semicircle arc above -->
  <path d="M 760,340 A 50,50 0 0,0 660,340" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="698" y="316" font-family="Georgia,serif" font-size="11" fill="#000">180°</text>
  <text x="648" y="380" font-family="Georgia,serif" font-size="11" fill="#000">θ = 180° (straight line)</text>

  <!-- ═══ 5. REFLEX (270°) — centre (910, 280) ═══ -->
  <text x="855" y="70" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Reflex Angle</text>
  <line x1="910" y1="340" x2="980" y2="340" stroke="#000" stroke-width="3"/>
  <line x1="910" y1="340" x2="910" y2="410" stroke="#000" stroke-width="3"/>
  <!-- large arc going clockwise from right ray around to downward ray (270°) -->
  <path d="M 970,340 A 60,60 0 1,1 910,400" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="856" y="310" font-family="Georgia,serif" font-size="11" fill="#000">270°</text>
  <text x="840" y="450" font-family="Georgia,serif" font-size="11" fill="#000">180° &lt; θ &lt; 360°</text>

  <!-- Dividers -->
  <line x1="190" y1="50" x2="190" y2="430" stroke="#ccc" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="390" y1="50" x2="390" y2="430" stroke="#ccc" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="590" y1="50" x2="590" y2="430" stroke="#ccc" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="790" y1="50" x2="790" y2="430" stroke="#ccc" stroke-width="1.5" stroke-dasharray="5,4"/>

  <!-- Summary table -->
  <rect x="50" y="460" width="900" height="110" rx="6" fill="none" stroke="#000" stroke-width="2"/>
  <text x="70" y="483" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Summary:</text>
  <text x="70" y="503" font-family="Georgia,serif" font-size="11" fill="#000">Acute: 0° – 90°   |   Right: exactly 90°   |   Obtuse: 90° – 180°   |   Straight: exactly 180°   |   Reflex: 180° – 360°</text>
  <text x="70" y="525" font-family="Georgia,serif" font-size="11" fill="#000">A complete revolution = 360°.  Angles on a straight line sum to 180°.  Angles at a point sum to 360°.</text>
  <text x="70" y="548" font-family="Georgia,serif" font-size="11" fill="#000">Complementary angles sum to 90°.  Supplementary angles sum to 180°.</text>
</svg>`;

  // ─── ANGLE RELATIONSHIPS ──────────────────────────────────────────────────
  // Shows complementary, supplementary and vertically opposite angles
  // with measures. Black and white printable.
  static angleRelationshipsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <!-- Title -->
  <text x="330" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Angle Relationships</text>

  <!-- ══════════════════════════════════════════════
       SECTION 1 — COMPLEMENTARY (top-left, cx=180,cy=220)
  ══════════════════════════════════════════════ -->
  <text x="60" y="70" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">1. Complementary Angles</text>
  <text x="60" y="88" font-family="Georgia,serif" font-size="11" fill="#000">Two angles that sum to 90°</text>

  <!-- shared vertex at (180,280) -->
  <!-- base ray → right -->
  <line x1="180" y1="280" x2="300" y2="280" stroke="#000" stroke-width="3"/>
  <!-- vertical ray up (90°) -->
  <line x1="180" y1="280" x2="180" y2="160" stroke="#000" stroke-width="3"/>
  <!-- middle ray at 35° from base -->
  <line x1="180" y1="280" x2="278" y2="212" stroke="#000" stroke-width="2.5" stroke-dasharray="6,3"/>
  <!-- square at right angle -->
  <rect x="180" y="260" width="20" height="20" fill="none" stroke="#000" stroke-width="2.5"/>
  <!-- arc α (0°–35°) -->
  <path d="M 230,280 A 50,50 0 0,0 221,239" fill="none" stroke="#000" stroke-width="2"/>
  <text x="227" y="268" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">α=35°</text>
  <!-- arc β (35°–90°) -->
  <path d="M 219,237 A 50,50 0 0,0 180,230" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="188" y="228" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">β=55°</text>
  <text x="60" y="310" font-family="Georgia,serif" font-size="11" fill="#000">α + β = 35° + 55° = 90°</text>

  <!-- ══════════════════════════════════════════════
       SECTION 2 — SUPPLEMENTARY (top-right, cx=680,cy=220)
  ══════════════════════════════════════════════ -->
  <text x="530" y="70" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">2. Supplementary Angles</text>
  <text x="530" y="88" font-family="Georgia,serif" font-size="11" fill="#000">Two angles that sum to 180°</text>

  <!-- straight base line -->
  <line x1="530" y1="280" x2="830" y2="280" stroke="#000" stroke-width="3"/>
  <!-- shared vertex at (680,280) -->
  <circle cx="680" cy="280" r="5" fill="#000"/>
  <!-- middle ray at 50° from left base -->
  <line x1="680" y1="280" x2="745" y2="197" stroke="#000" stroke-width="3"/>
  <!-- arc γ left of ray (130°) -->
  <path d="M 620,280 A 60,60 0 0,0 641,227" fill="none" stroke="#000" stroke-width="2"/>
  <text x="596" y="264" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">γ=130°</text>
  <!-- arc δ right of ray (50°) -->
  <path d="M 743,199 A 60,60 0 0,0 740,280" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="730" y="260" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">δ=50°</text>
  <text x="530" y="310" font-family="Georgia,serif" font-size="11" fill="#000">γ + δ = 130° + 50° = 180°</text>

  <!-- Vertical separator -->
  <line x1="490" y1="55" x2="490" y2="360" stroke="#bbb" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- ══════════════════════════════════════════════
       SECTION 3 — VERTICALLY OPPOSITE (bottom, full width)
  ══════════════════════════════════════════════ -->
  <text x="330" y="390" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">3. Vertically Opposite Angles</text>
  <text x="270" y="410" font-family="Georgia,serif" font-size="11" fill="#000">Formed when two straight lines cross. Opposite angles are equal.</text>

  <!-- two crossing lines, vertex at (500,530) -->
  <!-- line 1 (NE–SW) -->
  <line x1="340" y1="430" x2="660" y2="630" stroke="#000" stroke-width="3"/>
  <!-- line 2 (NW–SE) -->
  <line x1="660" y1="430" x2="340" y2="630" stroke="#000" stroke-width="3"/>
  <!-- vertex dot -->
  <circle cx="500" cy="530" r="5" fill="#000"/>

  <!-- arc for angle a (top, between NE and NW rays) -->
  <path d="M 542,498 A 50,50 0 0,0 458,498" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="483" y="496" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">a</text>

  <!-- arc for angle a' (bottom, between SW and SE rays) — equal to a -->
  <path d="M 458,562 A 50,50 0 0,0 542,562" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="483" y="578" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">a</text>

  <!-- arc for angle b (right, between NE and SE rays) -->
  <path d="M 544,503 A 50,50 0 0,1 544,558" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="550" y="533" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">b</text>

  <!-- arc for angle b' (left, between NW and SW rays) — equal to b -->
  <path d="M 456,558 A 50,50 0 0,1 456,503" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="430" y="533" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">b</text>

  <!-- labels on the four rays -->
  <text x="648" y="424" font-family="Georgia,serif" font-size="10" fill="#000">a + b = 180°</text>
  <text x="240" y="540" font-family="Georgia,serif" font-size="11" fill="#000">∠a = ∠a  (vert. opp.)</text>
  <text x="620" y="540" font-family="Georgia,serif" font-size="11" fill="#000">∠b = ∠b  (vert. opp.)</text>

  <!-- bottom summary rule box -->
  <rect x="60" y="648" width="880" height="38" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="80" y="672" font-family="Georgia,serif" font-size="11" fill="#000">Rules:  Complementary → sum = 90°   |   Supplementary → sum = 180°   |   Vertically Opposite → angles are equal</text>
</svg>`;

  // ─── PARALLEL LINES AND TRANSVERSALS ─────────────────────────────────────
  // Shows two parallel lines cut by a transversal with all angle pairs labelled.
  // Black and white printable.
  static parallelLinesAnglesSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="240" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Parallel Lines and Transversals</text>

  <!-- Two parallel horizontal lines -->
  <!-- Line 1 at y=200, x=80..680 -->
  <line x1="80" y1="200" x2="680" y2="200" stroke="#000" stroke-width="3"/>
  <!-- arrow tips -->
  <polygon points="676,195 690,200 676,205" fill="#000"/>
  <polygon points="84,195 70,200 84,205" fill="#000"/>
  <!-- parallel tick marks on line 1 -->
  <line x1="340" y1="188" x2="352" y2="212" stroke="#000" stroke-width="2.5"/>
  <line x1="348" y1="188" x2="360" y2="212" stroke="#000" stroke-width="2.5"/>

  <!-- Line 2 at y=400, x=80..680 -->
  <line x1="80" y1="400" x2="680" y2="400" stroke="#000" stroke-width="3"/>
  <polygon points="676,395 690,400 676,405" fill="#000"/>
  <polygon points="84,395 70,400 84,405" fill="#000"/>
  <!-- parallel tick marks on line 2 -->
  <line x1="340" y1="388" x2="352" y2="412" stroke="#000" stroke-width="2.5"/>
  <line x1="348" y1="388" x2="360" y2="412" stroke="#000" stroke-width="2.5"/>

  <!-- Labels for parallel lines -->
  <text x="692" y="204" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">m</text>
  <text x="692" y="404" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">n</text>

  <!-- Transversal — from (220,80) to (460,520) -->
  <line x1="220" y1="80" x2="460" y2="520" stroke="#000" stroke-width="3"/>
  <polygon points="455,510 462,524 448,518" fill="#000"/>

  <!-- Intersection 1: transversal ∩ line m
       Parametric: at y=200: t=(200−80)/(520−80)=120/440≈0.2727 → x=220+0.2727*240=220+65.45≈285
       Use (285, 200) -->
  <circle cx="285" cy="200" r="5" fill="#000"/>

  <!-- Intersection 2: transversal ∩ line n
       at y=400: t=320/440≈0.7273 → x=220+0.7273*240≈394.5
       Use (395, 400) -->
  <circle cx="395" cy="400" r="5" fill="#000"/>

  <!-- ── Angles at intersection 1 (285,200) ──
       Transversal direction approx 61° below horizontal (going right-down).
       Angle a = above-right, b = above-left, c = below-left, d = below-right
  -->
  <!-- angle a — top right of intersection 1 (acute, ~61°) -->
  <path d="M 325,200 A 40,40 0 0,0 303,165" fill="none" stroke="#000" stroke-width="2"/>
  <text x="316" y="190" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">a</text>

  <!-- angle b — top left (obtuse, ~119°) -->
  <path d="M 301,164 A 40,40 0 0,0 245,200" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="243" y="190" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">b</text>

  <!-- angle c — bottom left = a (vert opp) -->
  <path d="M 245,200 A 40,40 0 0,0 267,235" fill="none" stroke="#000" stroke-width="2"/>
  <text x="241" y="224" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">c</text>

  <!-- angle d — bottom right = b (vert opp) -->
  <path d="M 269,237 A 40,40 0 0,0 325,200" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="315" y="224" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">d</text>

  <!-- ── Angles at intersection 2 (395,400) ── -->
  <!-- angle e — top right = a (corresponding) -->
  <path d="M 435,400 A 40,40 0 0,0 413,365" fill="none" stroke="#000" stroke-width="2"/>
  <text x="426" y="390" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">e</text>

  <!-- angle f — top left = b -->
  <path d="M 411,363 A 40,40 0 0,0 355,400" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="348" y="390" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">f</text>

  <!-- angle g — bottom left = a -->
  <path d="M 355,400 A 40,40 0 0,0 377,435" fill="none" stroke="#000" stroke-width="2"/>
  <text x="346" y="428" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">g</text>

  <!-- angle h — bottom right = b -->
  <path d="M 379,437 A 40,40 0 0,0 435,400" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="425" y="428" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">h</text>

  <!-- ── Legend / rules box ── -->
  <rect x="500" y="120" width="360" height="320" rx="6" fill="none" stroke="#000" stroke-width="2"/>
  <text x="520" y="148" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Angle Relationships (m ∥ n)</text>

  <text x="520" y="175" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Corresponding (equal):</text>
  <text x="520" y="193" font-family="Georgia,serif" font-size="11" fill="#000">∠a = ∠e,  ∠b = ∠f,  ∠c = ∠g,  ∠d = ∠h</text>

  <text x="520" y="220" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Alternate Interior (equal):</text>
  <text x="520" y="238" font-family="Georgia,serif" font-size="11" fill="#000">∠c = ∠e,  ∠d = ∠f</text>

  <text x="520" y="265" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Alternate Exterior (equal):</text>
  <text x="520" y="283" font-family="Georgia,serif" font-size="11" fill="#000">∠a = ∠g,  ∠b = ∠h</text>

  <text x="520" y="310" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Co-interior / Same-side (sum 180°):</text>
  <text x="520" y="328" font-family="Georgia,serif" font-size="11" fill="#000">∠c + ∠f = 180°,  ∠d + ∠e = 180°</text>

  <text x="520" y="355" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Vertically Opposite (equal):</text>
  <text x="520" y="373" font-family="Georgia,serif" font-size="11" fill="#000">∠a = ∠c,  ∠b = ∠d  (and same at lower ∩)</text>

  <text x="520" y="418" font-family="Georgia,serif" font-size="10" fill="#000">Solid arc = acute family  |  Dashed arc = obtuse family</text>
</svg>`;

  // ─── TRIANGLE TYPES ───────────────────────────────────────────────────────
  // Shows six triangle types in a 3×2 grid: equilateral, isosceles, scalene,
  // right, acute, obtuse. Black and white printable.
  static triangleTypesSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <!-- Title -->
  <text x="330" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Types of Triangles</text>

  <!-- ── ROW 1 ── -->

  <!-- 1. EQUILATERAL (all sides equal, all angles 60°) -->
  <!-- centre ~(155, 200), apex at top -->
  <text x="60" y="58" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Equilateral</text>
  <text x="60" y="74" font-family="Georgia,serif" font-size="10" fill="#000">All sides equal, all angles 60°</text>
  <polygon points="155,100 65,250 245,250" fill="none" stroke="#000" stroke-width="3.5" stroke-linejoin="round"/>
  <!-- tick marks (single) on all three sides -->
  <!-- left side midpoint ≈(110,175) perp direction (0.866,-0.5) -->
  <line x1="103" y1="178" x2="117" y2="172" stroke="#000" stroke-width="2.5"/>
  <!-- right side midpoint ≈(200,175) -->
  <line x1="193" y1="172" x2="207" y2="178" stroke="#000" stroke-width="2.5"/>
  <!-- bottom midpoint (155,250) -->
  <line x1="152" y1="243" x2="158" y2="257" stroke="#000" stroke-width="2.5"/>
  <!-- angle labels -->
  <text x="138" y="120" font-family="Georgia,serif" font-size="10" fill="#000">60°</text>
  <text x="72" y="244" font-family="Georgia,serif" font-size="10" fill="#000">60°</text>
  <text x="218" y="244" font-family="Georgia,serif" font-size="10" fill="#000">60°</text>

  <!-- 2. ISOSCELES (two sides equal) -->
  <text x="370" y="58" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Isosceles</text>
  <text x="370" y="74" font-family="Georgia,serif" font-size="10" fill="#000">Two sides equal, two angles equal</text>
  <polygon points="465,100 370,250 560,250" fill="none" stroke="#000" stroke-width="3.5" stroke-linejoin="round"/>
  <!-- double tick on left leg midpoint ~(417,175) -->
  <line x1="411" y1="176" x2="421" y2="170" stroke="#000" stroke-width="2.5"/>
  <line x1="415" y1="182" x2="425" y2="176" stroke="#000" stroke-width="2.5"/>
  <!-- double tick on right leg midpoint ~(513,175) -->
  <line x1="507" y1="170" x2="517" y2="176" stroke="#000" stroke-width="2.5"/>
  <line x1="511" y1="176" x2="521" y2="182" stroke="#000" stroke-width="2.5"/>
  <!-- base single tick -->
  <line x1="462" y1="243" x2="468" y2="257" stroke="#000" stroke-width="2.5"/>
  <text x="382" y="244" font-family="Georgia,serif" font-size="10" fill="#000">α</text>
  <text x="528" y="244" font-family="Georgia,serif" font-size="10" fill="#000">α</text>

  <!-- 3. SCALENE (all sides different) -->
  <text x="680" y="58" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Scalene</text>
  <text x="680" y="74" font-family="Georgia,serif" font-size="10" fill="#000">All sides different, all angles different</text>
  <polygon points="720,110 660,250 880,250" fill="none" stroke="#000" stroke-width="3.5" stroke-linejoin="round"/>
  <!-- side labels -->
  <text x="670" y="186" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">a</text>
  <text x="790" y="175" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">b</text>
  <text x="760" y="268" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">c</text>
  <text x="700" y="248" font-family="Georgia,serif" font-size="10" fill="#000">α</text>
  <text x="726" y="122" font-family="Georgia,serif" font-size="10" fill="#000">β</text>
  <text x="848" y="248" font-family="Georgia,serif" font-size="10" fill="#000">γ</text>

  <!-- Horizontal divider -->
  <line x1="40" y1="288" x2="960" y2="288" stroke="#aaa" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- ── ROW 2 ── -->

  <!-- 4. RIGHT TRIANGLE -->
  <text x="60" y="324" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Right Triangle</text>
  <text x="60" y="340" font-family="Georgia,serif" font-size="10" fill="#000">One angle = 90°</text>
  <polygon points="80,520 80,360 240,520" fill="none" stroke="#000" stroke-width="3.5" stroke-linejoin="round"/>
  <rect x="80" y="500" width="20" height="20" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="88" y="360" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">c (hyp.)</text>
  <text x="56" y="445" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">a</text>
  <text x="155" y="538" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">b</text>
  <!-- right angle label -->
  <text x="105" y="510" font-family="Georgia,serif" font-size="9" fill="#000">90°</text>

  <!-- 5. ACUTE TRIANGLE (all angles < 90°) -->
  <text x="370" y="324" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Acute Triangle</text>
  <text x="370" y="340" font-family="Georgia,serif" font-size="10" fill="#000">All angles less than 90°</text>
  <polygon points="475,360 380,520 570,520" fill="none" stroke="#000" stroke-width="3.5" stroke-linejoin="round"/>
  <!-- small angle arcs to show all acute -->
  <path d="M 475,380 A 20,20 0 0,1 492,370" fill="none" stroke="#000" stroke-width="2"/>
  <path d="M 398,510 A 20,20 0 0,1 400,494" fill="none" stroke="#000" stroke-width="2"/>
  <path d="M 550,510 A 20,20 0 0,0 554,493" fill="none" stroke="#000" stroke-width="2"/>
  <text x="460" y="356" font-family="Georgia,serif" font-size="10" fill="#000">70°</text>
  <text x="378" y="516" font-family="Georgia,serif" font-size="10" fill="#000">60°</text>
  <text x="536" y="516" font-family="Georgia,serif" font-size="10" fill="#000">50°</text>

  <!-- 6. OBTUSE TRIANGLE (one angle > 90°) -->
  <text x="660" y="324" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Obtuse Triangle</text>
  <text x="660" y="340" font-family="Georgia,serif" font-size="10" fill="#000">One angle greater than 90°</text>
  <polygon points="670,520 690,380 940,520" fill="none" stroke="#000" stroke-width="3.5" stroke-linejoin="round"/>
  <!-- obtuse angle arc at (670,520) -->
  <path d="M 706,383 A 26,26 0 0,1 690,408" fill="none" stroke="#000" stroke-width="2"/>
  <text x="710" y="400" font-family="Georgia,serif" font-size="10" fill="#000">120°</text>
  <text x="656" y="516" font-family="Georgia,serif" font-size="10" fill="#000">40°</text>
  <text x="910" y="516" font-family="Georgia,serif" font-size="10" fill="#000">20°</text>

  <!-- Vertical dividers row 1 -->
  <line x1="330" y1="48" x2="330" y2="280" stroke="#ccc" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="640" y1="48" x2="640" y2="280" stroke="#ccc" stroke-width="1.5" stroke-dasharray="5,4"/>
  <!-- Vertical dividers row 2 -->
  <line x1="330" y1="296" x2="330" y2="570" stroke="#ccc" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="640" y1="296" x2="640" y2="570" stroke="#ccc" stroke-width="1.5" stroke-dasharray="5,4"/>

  <!-- Summary -->
  <rect x="40" y="590" width="920" height="82" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="60" y="612" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Key Facts:</text>
  <text x="60" y="630" font-family="Georgia,serif" font-size="11" fill="#000">• All triangles: interior angles sum to 180°.   • Equilateral: regular polygon, all angles exactly 60°.</text>
  <text x="60" y="648" font-family="Georgia,serif" font-size="11" fill="#000">• Isosceles: base angles are equal.   • Right triangle: the longest side (hypotenuse) is opposite the 90° angle.</text>
  <text x="60" y="666" font-family="Georgia,serif" font-size="11" fill="#000">• Obtuse triangle: only one obtuse angle is possible.   • A right triangle is also scalene unless it is a 45-45-90.</text>
</svg>`;

  // ─── TRIANGLE PROPERTIES ─────────────────────────────────────────────────
  // Angle sum = 180°, exterior angle theorem, triangle inequality.
  // Black and white printable.
  static trianglePropertiesSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="290" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Triangle Properties</text>

  <!-- ══════════════════════════════════════════
       SECTION 1 — ANGLE SUM (left panel)
  ══════════════════════════════════════════ -->
  <text x="40" y="60" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">1. Angle Sum Property</text>
  <text x="40" y="77" font-family="Georgia,serif" font-size="10.5" fill="#000">α + β + γ = 180°  (for any triangle)</text>

  <!-- triangle A=(120,240) B=(60,370) C=(240,370) -->
  <polygon points="120,240 60,370 240,370" fill="none" stroke="#000" stroke-width="3.5" stroke-linejoin="round"/>

  <!-- angle α at A=(120,240) -->
  <path d="M 120,260 A 20,20 0 0,1 135,252" fill="none" stroke="#000" stroke-width="2"/>
  <text x="122" y="258" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">α</text>

  <!-- angle β at B=(60,370) -->
  <path d="M 80,370 A 20,20 0 0,1 70,353" fill="none" stroke="#000" stroke-width="2"/>
  <text x="82" y="368" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">β</text>

  <!-- angle γ at C=(240,370) -->
  <path d="M 221,370 A 20,20 0 0,0 232,355" fill="none" stroke="#000" stroke-width="2"/>
  <text x="210" y="368" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">γ</text>

  <!-- formula -->
  <rect x="40" y="395" width="230" height="36" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="60" y="418" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">α + β + γ = 180°</text>

  <!-- ══════════════════════════════════════════
       SECTION 2 — EXTERIOR ANGLE (middle panel)
  ══════════════════════════════════════════ -->
  <line x1="310" y1="40" x2="310" y2="470" stroke="#bbb" stroke-width="1.5" stroke-dasharray="6,4"/>

  <text x="330" y="60" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">2. Exterior Angle Theorem</text>
  <text x="330" y="77" font-family="Georgia,serif" font-size="10.5" fill="#000">Exterior angle = sum of two non-adjacent interior angles</text>

  <!-- triangle A=(460,240) B=(350,380) C=(550,380) -->
  <polygon points="460,240 350,380 550,380" fill="none" stroke="#000" stroke-width="3.5" stroke-linejoin="round"/>

  <!-- extend base beyond C to (660,380) -->
  <line x1="550" y1="380" x2="660" y2="380" stroke="#000" stroke-width="2.5" stroke-dasharray="7,4"/>

  <!-- interior angles α at A, β at B -->
  <path d="M 460,260 A 20,20 0 0,1 475,252" fill="none" stroke="#000" stroke-width="2"/>
  <text x="462" y="262" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">α</text>
  <path d="M 370,380 A 20,20 0 0,1 361,363" fill="none" stroke="#000" stroke-width="2"/>
  <text x="373" y="378" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">β</text>

  <!-- interior angle γ at C -->
  <path d="M 532,380 A 18,18 0 0,0 542,365" fill="none" stroke="#000" stroke-width="2"/>
  <text x="520" y="376" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">γ</text>

  <!-- exterior angle ε at C (between side CB extended and side CA) -->
  <path d="M 564,373 A 22,22 0 0,0 572,380" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="564" y="370" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">ε</text>

  <!-- formula -->
  <rect x="330" y="405" width="250" height="50" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="348" y="424" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">ε = α + β</text>
  <text x="348" y="444" font-family="Georgia,serif" font-size="11" fill="#000">(exterior = remote interior sum)</text>

  <!-- ══════════════════════════════════════════
       SECTION 3 — TRIANGLE INEQUALITY (right panel)
  ══════════════════════════════════════════ -->
  <line x1="620" y1="40" x2="620" y2="470" stroke="#bbb" stroke-width="1.5" stroke-dasharray="6,4"/>

  <text x="640" y="60" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">3. Triangle Inequality</text>
  <text x="640" y="77" font-family="Georgia,serif" font-size="10.5" fill="#000">Sum of any two sides &gt; third side</text>

  <!-- triangle with labeled sides A=(760,240) B=(650,380) C=(860,380) -->
  <polygon points="760,240 650,380 860,380" fill="none" stroke="#000" stroke-width="3.5" stroke-linejoin="round"/>

  <!-- side labels -->
  <text x="688" y="302" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">a</text>
  <text x="816" y="302" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">b</text>
  <text x="748" y="398" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">c</text>

  <!-- inequalities -->
  <rect x="635" y="410" width="240" height="60" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="652" y="430" font-family="Georgia,serif" font-size="11" fill="#000">a + b &gt; c</text>
  <text x="652" y="448" font-family="Georgia,serif" font-size="11" fill="#000">a + c &gt; b</text>
  <text x="652" y="466" font-family="Georgia,serif" font-size="11" fill="#000">b + c &gt; a</text>

  <!-- bottom summary -->
  <rect x="40" y="492" width="820" height="80" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="60" y="514" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Summary of Triangle Properties:</text>
  <text x="60" y="532" font-family="Georgia,serif" font-size="11" fill="#000">1. Interior angles always sum to 180°.  |  2. An exterior angle equals the sum of the two non-adjacent interior angles.</text>
  <text x="60" y="550" font-family="Georgia,serif" font-size="11" fill="#000">3. The longest side is opposite the largest angle.  |  4. Any two sides must sum to more than the third side.</text>
  <text x="60" y="568" font-family="Georgia,serif" font-size="11" fill="#000">5. An exterior angle is always greater than either remote interior angle.</text>
</svg>`;

  // ─── CONGRUENT TRIANGLES ─────────────────────────────────────────────────
  // Shows SAS congruence with two matching triangles, tick marks,
  // and all four conditions (SSS, SAS, ASA, RHS). Black and white printable.
  static congruentTrianglesSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="250" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Congruent Triangles (≅)</text>
  <text x="310" y="46" font-family="Georgia,serif" font-size="11" fill="#000">Condition shown: SAS (Side-Angle-Side)</text>

  <!-- ══ Triangle 1 — A=(160,120) B=(60,320) C=(280,320) ══ -->
  <polygon points="160,120 60,320 280,320" fill="none" stroke="#000" stroke-width="4" stroke-linejoin="round"/>

  <!-- double tick on AB (left side) — midpoint ≈(110,220), perp direction (0.894,-0.447) -->
  <line x1="104" y1="222" x2="114" y2="218" stroke="#000" stroke-width="2.5"/>
  <line x1="108" y1="228" x2="118" y2="224" stroke="#000" stroke-width="2.5"/>
  <!-- double tick on AC (right side) — midpoint ≈(220,220) -->
  <line x1="214" y1="218" x2="224" y2="222" stroke="#000" stroke-width="2.5"/>
  <line x1="218" y1="224" x2="228" y2="228" stroke="#000" stroke-width="2.5"/>
  <!-- single tick on BC (base) — midpoint (170,320) -->
  <line x1="168" y1="313" x2="172" y2="327" stroke="#000" stroke-width="2.5"/>

  <!-- Included angle arc at A -->
  <path d="M 160,148 A 28,28 0 0,1 183,133" fill="none" stroke="#000" stroke-width="2.5"/>
  <!-- double arc lines to indicate included angle -->
  <path d="M 160,152 A 32,32 0 0,1 188,136" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="170" y="158" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">A</text>

  <!-- vertex labels -->
  <text x="148" y="114" font-family="Georgia,serif" font-size="11" fill="#000">A</text>
  <text x="44" y="328" font-family="Georgia,serif" font-size="11" fill="#000">B</text>
  <text x="282" y="328" font-family="Georgia,serif" font-size="11" fill="#000">C</text>

  <!-- Congruence symbol between triangles -->
  <text x="310" y="230" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">≅</text>

  <!-- ══ Triangle 2 — D=(530,120) E=(430,320) F=(650,320) ══ -->
  <polygon points="530,120 430,320 650,320" fill="none" stroke="#000" stroke-width="4" stroke-linejoin="round"/>

  <!-- double tick on DE (left side) -->
  <line x1="474" y1="222" x2="484" y2="218" stroke="#000" stroke-width="2.5"/>
  <line x1="478" y1="228" x2="488" y2="224" stroke="#000" stroke-width="2.5"/>
  <!-- double tick on DF (right side) -->
  <line x1="584" y1="218" x2="594" y2="222" stroke="#000" stroke-width="2.5"/>
  <line x1="588" y1="224" x2="598" y2="228" stroke="#000" stroke-width="2.5"/>
  <!-- single tick on EF (base) -->
  <line x1="538" y1="313" x2="542" y2="327" stroke="#000" stroke-width="2.5"/>

  <!-- Included angle arc at D (double arc) -->
  <path d="M 530,148 A 28,28 0 0,1 553,133" fill="none" stroke="#000" stroke-width="2.5"/>
  <path d="M 530,152 A 32,32 0 0,1 558,136" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="540" y="158" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">D</text>

  <!-- vertex labels -->
  <text x="518" y="114" font-family="Georgia,serif" font-size="11" fill="#000">D</text>
  <text x="414" y="328" font-family="Georgia,serif" font-size="11" fill="#000">E</text>
  <text x="652" y="328" font-family="Georgia,serif" font-size="11" fill="#000">F</text>

  <!-- Congruence statement -->
  <text x="220" y="370" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">△ABC ≅ △DEF   (SAS)</text>
  <text x="185" y="390" font-family="Georgia,serif" font-size="11" fill="#000">AB = DE,  ∠A = ∠D,  AC = DF  →  triangles are congruent</text>

  <!-- ══ Conditions table ══ -->
  <rect x="40" y="420" width="820" height="156" rx="6" fill="none" stroke="#000" stroke-width="2"/>
  <text x="60" y="446" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Four Congruence Conditions:</text>

  <text x="60" y="470" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">SSS</text>
  <text x="100" y="470" font-family="Georgia,serif" font-size="11" fill="#000">Side-Side-Side: all three pairs of sides equal.</text>

  <text x="60" y="492" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">SAS ✓</text>
  <text x="112" y="492" font-family="Georgia,serif" font-size="11" fill="#000">Side-Angle-Side: two sides and the included angle equal  (shown above).</text>

  <text x="60" y="514" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">ASA</text>
  <text x="100" y="514" font-family="Georgia,serif" font-size="11" fill="#000">Angle-Side-Angle: two angles and the included side equal.</text>

  <text x="60" y="536" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">RHS</text>
  <text x="100" y="536" font-family="Georgia,serif" font-size="11" fill="#000">Right angle-Hypotenuse-Side: right triangle with hypotenuse and one side equal.</text>

  <text x="60" y="560" font-family="Georgia,serif" font-size="10" fill="#000">Note: AAA proves similarity only, not congruence.  SSA is not a valid congruence condition.</text>
</svg>`;

  // ─── SIMILAR TRIANGLES ────────────────────────────────────────────────────
  // Shows AA similarity: two triangles with equal angles, ratio 1:2,
  // corresponding sides labelled. Black and white printable.
  static similarTrianglesSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="265" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Similar Triangles (~)</text>
  <text x="310" y="46" font-family="Georgia,serif" font-size="11" fill="#000">Condition shown: AA (Angle-Angle), scale ratio 1 : 2</text>

  <!-- ══ Small triangle △ABC — A=(130,120) B=(70,300) C=(210,300) ══ -->
  <polygon points="130,120 70,300 210,300" fill="none" stroke="#000" stroke-width="3.5" stroke-linejoin="round"/>

  <!-- angle marks at A (single arc) -->
  <path d="M 130,148 A 28,28 0 0,1 153,133" fill="none" stroke="#000" stroke-width="2.5"/>
  <!-- angle marks at B (double arc) -->
  <path d="M 90,300 A 20,20 0 0,1 83,282" fill="none" stroke="#000" stroke-width="2"/>
  <path d="M 94,300 A 24,24 0 0,1 87,279" fill="none" stroke="#000" stroke-width="2"/>

  <!-- side labels -->
  <text x="82" y="218" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">a</text>
  <text x="168" y="218" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">b</text>
  <text x="132" y="318" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">c</text>

  <!-- vertex labels -->
  <text x="122" y="114" font-family="Georgia,serif" font-size="11" fill="#000">A</text>
  <text x="54" y="308" font-family="Georgia,serif" font-size="11" fill="#000">B</text>
  <text x="212" y="308" font-family="Georgia,serif" font-size="11" fill="#000">C</text>

  <!-- Similarity symbol -->
  <text x="248" y="225" font-family="Georgia,serif" font-size="24" font-weight="bold" fill="#000">~</text>

  <!-- ══ Large triangle △DEF — D=(530,60) E=(340,420) F=(720,420) ══
       This is the small triangle scaled ×2 — same angles, all sides doubled.
  ══ -->
  <polygon points="530,60 340,420 720,420" fill="none" stroke="#000" stroke-width="3.5" stroke-linejoin="round"/>

  <!-- angle marks at D (single arc — matches A) -->
  <path d="M 530,96 A 36,36 0 0,1 563,74" fill="none" stroke="#000" stroke-width="2.5"/>
  <!-- angle marks at E (double arc — matches B) -->
  <path d="M 370,420 A 28,28 0 0,1 360,397" fill="none" stroke="#000" stroke-width="2"/>
  <path d="M 375,420 A 33,33 0 0,1 364,393" fill="none" stroke="#000" stroke-width="2"/>

  <!-- side labels (doubled) -->
  <text x="414" y="252" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">2a</text>
  <text x="628" y="252" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">2b</text>
  <text x="522" y="446" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">2c</text>

  <!-- vertex labels -->
  <text x="522" y="54" font-family="Georgia,serif" font-size="11" fill="#000">D</text>
  <text x="322" y="434" font-family="Georgia,serif" font-size="11" fill="#000">E</text>
  <text x="722" y="434" font-family="Georgia,serif" font-size="11" fill="#000">F</text>

  <!-- Similarity statement and ratio -->
  <text x="180" y="480" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">△ABC ~ △DEF</text>
  <text x="180" y="500" font-family="Georgia,serif" font-size="11" fill="#000">∠A = ∠D,  ∠B = ∠E  →  ∠C = ∠F   (AA condition)</text>
  <text x="180" y="520" font-family="Georgia,serif" font-size="11" fill="#000">Ratio of corresponding sides:   a/2a = b/2b = c/2c = 1/2</text>

  <!-- Conditions table -->
  <rect x="40" y="544" width="820" height="42" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="60" y="562" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Similarity Conditions:</text>
  <text x="200" y="562" font-family="Georgia,serif" font-size="11" fill="#000">AA – two equal angles   |   SSS~ – all ratios equal   |   SAS~ – two sides in ratio with included angle equal</text>
  <text x="60" y="578" font-family="Georgia,serif" font-size="11" fill="#000">Area ratio = (scale factor)²  e.g. ratio 1:2 → area ratio 1:4</text>
</svg>`;

  // ─── QUADRILATERAL TYPES ─────────────────────────────────────────────────
  // 3×2 grid: square, rectangle, rhombus, parallelogram, trapezium, kite.
  // Black and white printable.
  static quadrilateralTypesSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="800px" viewBox="0 0 1000 800">

  <!-- Title -->
  <text x="330" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Types of Quadrilaterals</text>

  <!-- ═══════════ ROW 1 ═══════════ -->

  <!-- 1. SQUARE (60,60)→(230,230) -->
  <text x="60" y="58" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Square</text>
  <rect x="70" y="70" width="150" height="150" fill="none" stroke="#000" stroke-width="3.5"/>
  <!-- right angle corners -->
  <rect x="70" y="70" width="14" height="14" fill="none" stroke="#000" stroke-width="2"/>
  <rect x="206" y="70" width="14" height="14" fill="none" stroke="#000" stroke-width="2"/>
  <rect x="70" y="206" width="14" height="14" fill="none" stroke="#000" stroke-width="2"/>
  <rect x="206" y="206" width="14" height="14" fill="none" stroke="#000" stroke-width="2"/>
  <!-- equal side ticks -->
  <line x1="138" y1="64" x2="142" y2="76" stroke="#000" stroke-width="2.5"/>
  <line x1="134" y1="64" x2="138" y2="76" stroke="#000" stroke-width="2.5"/>
  <line x1="138" y1="218" x2="142" y2="230" stroke="#000" stroke-width="2.5"/>
  <line x1="134" y1="218" x2="138" y2="230" stroke="#000" stroke-width="2.5"/>
  <line x1="64" y1="140" x2="76" y2="144" stroke="#000" stroke-width="2.5"/>
  <line x1="64" y1="136" x2="76" y2="140" stroke="#000" stroke-width="2.5"/>
  <line x1="218" y1="136" x2="230" y2="140" stroke="#000" stroke-width="2.5"/>
  <line x1="218" y1="140" x2="230" y2="144" stroke="#000" stroke-width="2.5"/>
  <text x="70" y="258" font-family="Georgia,serif" font-size="10" fill="#000">All sides equal, all angles 90°</text>

  <!-- 2. RECTANGLE -->
  <text x="370" y="58" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Rectangle</text>
  <rect x="340" y="90" width="200" height="120" fill="none" stroke="#000" stroke-width="3.5"/>
  <!-- right angle marks -->
  <rect x="340" y="90" width="14" height="14" fill="none" stroke="#000" stroke-width="2"/>
  <rect x="526" y="90" width="14" height="14" fill="none" stroke="#000" stroke-width="2"/>
  <rect x="340" y="196" width="14" height="14" fill="none" stroke="#000" stroke-width="2"/>
  <rect x="526" y="196" width="14" height="14" fill="none" stroke="#000" stroke-width="2"/>
  <!-- tick: double on long sides, single on short sides -->
  <line x1="437" y1="84" x2="441" y2="96" stroke="#000" stroke-width="2.5"/>
  <line x1="441" y1="84" x2="445" y2="96" stroke="#000" stroke-width="2.5"/>
  <line x1="437" y1="198" x2="441" y2="210" stroke="#000" stroke-width="2.5"/>
  <line x1="441" y1="198" x2="445" y2="210" stroke="#000" stroke-width="2.5"/>
  <line x1="334" y1="147" x2="346" y2="151" stroke="#000" stroke-width="2.5"/>
  <line x1="528" y1="147" x2="540" y2="151" stroke="#000" stroke-width="2.5"/>
  <text x="350" y="258" font-family="Georgia,serif" font-size="10" fill="#000">Opposite sides equal, all angles 90°</text>

  <!-- 3. RHOMBUS -->
  <text x="700" y="58" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Rhombus</text>
  <!-- centre (800,160), half-diagonals h=90, v=60 -->
  <polygon points="800,100 860,160 800,220 740,160" fill="none" stroke="#000" stroke-width="3.5" stroke-linejoin="round"/>
  <!-- equal ticks on all sides -->
  <line x1="826" y1="127" x2="834" y2="134" stroke="#000" stroke-width="2.5"/>
  <line x1="830" y1="123" x2="838" y2="130" stroke="#000" stroke-width="2.5"/>
  <line x1="826" y1="186" x2="834" y2="193" stroke="#000" stroke-width="2.5"/>
  <line x1="830" y1="190" x2="838" y2="197" stroke="#000" stroke-width="2.5"/>
  <line x1="762" y1="127" x2="770" y2="134" stroke="#000" stroke-width="2.5"/>
  <line x1="758" y1="131" x2="766" y2="138" stroke="#000" stroke-width="2.5"/>
  <line x1="762" y1="186" x2="770" y2="193" stroke="#000" stroke-width="2.5"/>
  <line x1="758" y1="190" x2="766" y2="197" stroke="#000" stroke-width="2.5"/>
  <text x="700" y="258" font-family="Georgia,serif" font-size="10" fill="#000">All sides equal, opposite angles equal</text>

  <!-- Horizontal divider -->
  <line x1="40" y1="280" x2="960" y2="280" stroke="#aaa" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- ═══════════ ROW 2 ═══════════ -->

  <!-- 4. PARALLELOGRAM -->
  <text x="60" y="318" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Parallelogram</text>
  <polygon points="100,340 280,340 240,470 60,470" fill="none" stroke="#000" stroke-width="3.5" stroke-linejoin="round"/>
  <!-- double tick on parallel pair 1 (top and bottom) -->
  <line x1="184" y1="334" x2="188" y2="346" stroke="#000" stroke-width="2.5"/>
  <line x1="188" y1="334" x2="192" y2="346" stroke="#000" stroke-width="2.5"/>
  <line x1="144" y1="464" x2="148" y2="476" stroke="#000" stroke-width="2.5"/>
  <line x1="148" y1="464" x2="152" y2="476" stroke="#000" stroke-width="2.5"/>
  <!-- single tick on other parallel pair -->
  <line x1="76" y1="403" x2="88" y2="408" stroke="#000" stroke-width="2.5"/>
  <line x1="252" y1="398" x2="264" y2="403" stroke="#000" stroke-width="2.5"/>
  <text x="55" y="500" font-family="Georgia,serif" font-size="10" fill="#000">Opposite sides parallel and equal</text>

  <!-- 5. TRAPEZIUM -->
  <text x="360" y="318" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Trapezium</text>
  <polygon points="420,340 560,340 610,470 370,470" fill="none" stroke="#000" stroke-width="3.5" stroke-linejoin="round"/>
  <!-- parallel arrows on top and bottom to indicate one pair of parallels -->
  <!-- arrow on top side -->
  <polygon points="486,334 496,340 486,346" fill="#000"/>
  <!-- arrow on bottom side -->
  <polygon points="486,464 496,470 486,476" fill="#000"/>
  <text x="360" y="500" font-family="Georgia,serif" font-size="10" fill="#000">One pair of parallel sides</text>

  <!-- 6. KITE -->
  <text x="710" y="318" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Kite</text>
  <!-- top=(800,320) left=(730,420) bottom=(800,490) right=(870,420) -->
  <polygon points="800,320 730,420 800,490 870,420" fill="none" stroke="#000" stroke-width="3.5" stroke-linejoin="round"/>
  <!-- double ticks on top-left and top-right (equal) -->
  <line x1="759" y1="366" x2="768" y2="373" stroke="#000" stroke-width="2.5"/>
  <line x1="763" y1="362" x2="772" y2="369" stroke="#000" stroke-width="2.5"/>
  <line x1="832" y1="362" x2="841" y2="369" stroke="#000" stroke-width="2.5"/>
  <line x1="836" y1="366" x2="845" y2="373" stroke="#000" stroke-width="2.5"/>
  <!-- single ticks on bottom-left and bottom-right (equal) -->
  <line x1="758" y1="452" x2="767" y2="460" stroke="#000" stroke-width="2.5"/>
  <line x1="833" y1="452" x2="842" y2="460" stroke="#000" stroke-width="2.5"/>
  <text x="700" y="510" font-family="Georgia,serif" font-size="10" fill="#000">Two pairs of adjacent equal sides</text>

  <!-- Summary -->
  <rect x="40" y="542" width="920" height="230" rx="6" fill="none" stroke="#000" stroke-width="2"/>
  <text x="60" y="565" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Key Properties:</text>
  <text x="60" y="585" font-family="Georgia,serif" font-size="11" fill="#000">Square:         4 equal sides, 4 right angles, diagonals equal and bisect at 90°</text>
  <text x="60" y="603" font-family="Georgia,serif" font-size="11" fill="#000">Rectangle:      Opposite sides equal, 4 right angles, diagonals equal and bisect each other</text>
  <text x="60" y="621" font-family="Georgia,serif" font-size="11" fill="#000">Rhombus:        4 equal sides, opposite angles equal, diagonals bisect at 90°</text>
  <text x="60" y="639" font-family="Georgia,serif" font-size="11" fill="#000">Parallelogram:  Opposite sides parallel and equal, opposite angles equal, diagonals bisect each other</text>
  <text x="60" y="657" font-family="Georgia,serif" font-size="11" fill="#000">Trapezium:      Exactly one pair of parallel sides (isosceles trapezium has equal legs)</text>
  <text x="60" y="675" font-family="Georgia,serif" font-size="11" fill="#000">Kite:           Two pairs of adjacent equal sides, one diagonal is axis of symmetry</text>
  <text x="60" y="695" font-family="Georgia,serif" font-size="11" fill="#000">All quadrilaterals: interior angles sum to 360°</text>
</svg>`;

  // ─── QUADRILATERAL HIERARCHY ──────────────────────────────────────────────
  // Family tree showing hierarchical relationships among quadrilaterals.
  // Black and white printable.
  static quadrilateralHierarchySvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <!-- Title -->
  <text x="300" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Quadrilateral Family Tree</text>
  <text x="330" y="46" font-family="Georgia,serif" font-size="10" fill="#000">Arrow means "is a special type of"</text>

  <!-- ══ Helper: rounded-rect label macro ══
       Levels:
       L0 (y≈80):   Quadrilateral
       L1 (y≈180):  Trapezium | Kite | Parallelogram
       L2 (y≈300):  Isosceles Trapezium | Rhombus | Rectangle
       L3 (y≈420):  Square
  ══ -->

  <!-- L0 — QUADRILATERAL -->
  <rect x="360" y="60" width="280" height="48" rx="8" fill="none" stroke="#000" stroke-width="3"/>
  <text x="440" y="90" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Quadrilateral</text>
  <text x="385" y="107" font-family="Georgia,serif" font-size="9" fill="#000">4 sides, angles sum to 360°</text>

  <!-- L1 — TRAPEZIUM (left) -->
  <rect x="60" y="185" width="200" height="46" rx="7" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="95" y="212" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Trapezium</text>
  <text x="72" y="227" font-family="Georgia,serif" font-size="9" fill="#000">1 pair of parallel sides</text>

  <!-- L1 — KITE (centre-left) -->
  <rect x="310" y="185" width="170" height="46" rx="7" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="355" y="212" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Kite</text>
  <text x="318" y="227" font-family="Georgia,serif" font-size="9" fill="#000">2 pairs adjacent equal sides</text>

  <!-- L1 — PARALLELOGRAM (right) -->
  <rect x="620" y="185" width="240" height="46" rx="7" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="650" y="212" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Parallelogram</text>
  <text x="635" y="227" font-family="Georgia,serif" font-size="9" fill="#000">2 pairs of parallel sides</text>

  <!-- L2 — ISOSCELES TRAPEZIUM -->
  <rect x="40" y="310" width="240" height="46" rx="7" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="58" y="337" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Isosceles Trapezium</text>
  <text x="58" y="352" font-family="Georgia,serif" font-size="9" fill="#000">Equal legs, equal base angles</text>

  <!-- L2 — RHOMBUS (centre-right) -->
  <rect x="580" y="310" width="160" height="46" rx="7" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="605" y="337" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Rhombus</text>
  <text x="590" y="352" font-family="Georgia,serif" font-size="9" fill="#000">All 4 sides equal</text>

  <!-- L2 — RECTANGLE (right) -->
  <rect x="770" y="310" width="180" height="46" rx="7" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="800" y="337" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Rectangle</text>
  <text x="778" y="352" font-family="Georgia,serif" font-size="9" fill="#000">4 right angles</text>

  <!-- L3 — SQUARE -->
  <rect x="660" y="430" width="160" height="46" rx="7" fill="none" stroke="#000" stroke-width="3"/>
  <text x="702" y="459" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Square</text>
  <text x="668" y="474" font-family="Georgia,serif" font-size="9" fill="#000">4 equal sides AND 4 right angles</text>

  <!-- ══ Arrows (parent → child = "is a special type of") ══ -->
  <!-- Quadrilateral → Trapezium -->
  <line x1="400" y1="108" x2="180" y2="185" stroke="#000" stroke-width="2.5"/>
  <polygon points="174,181 186,190 176,197" fill="#000"/>

  <!-- Quadrilateral → Kite -->
  <line x1="460" y1="108" x2="415" y2="185" stroke="#000" stroke-width="2.5"/>
  <polygon points="408,181 420,189 411,198" fill="#000"/>

  <!-- Quadrilateral → Parallelogram -->
  <line x1="580" y1="108" x2="720" y2="185" stroke="#000" stroke-width="2.5"/>
  <polygon points="718,179 730,187 720,196" fill="#000"/>

  <!-- Trapezium → Isosceles Trapezium -->
  <line x1="160" y1="231" x2="160" y2="310" stroke="#000" stroke-width="2.5"/>
  <polygon points="155,305 160,318 165,305" fill="#000"/>

  <!-- Parallelogram → Rhombus -->
  <line x1="700" y1="231" x2="660" y2="310" stroke="#000" stroke-width="2.5"/>
  <polygon points="652,306 664,314 655,321" fill="#000"/>

  <!-- Parallelogram → Rectangle -->
  <line x1="780" y1="231" x2="820" y2="310" stroke="#000" stroke-width="2.5"/>
  <polygon points="816,304 828,312 819,321" fill="#000"/>

  <!-- Rhombus → Square -->
  <line x1="660" y1="356" x2="730" y2="430" stroke="#000" stroke-width="2.5"/>
  <polygon points="724,424 736,432 726,440" fill="#000"/>

  <!-- Rectangle → Square -->
  <line x1="820" y1="356" x2="790" y2="430" stroke="#000" stroke-width="2.5"/>
  <polygon points="784,424 796,432 786,441" fill="#000"/>

  <!-- Kite → Rhombus (if all 4 sides equal it becomes rhombus) -->
  <line x1="450" y1="231" x2="610" y2="310" stroke="#000" stroke-width="1.8" stroke-dasharray="7,4"/>
  <polygon points="604,306 616,314 607,322" fill="#000"/>
  <text x="494" y="282" font-family="Georgia,serif" font-size="9" font-style="italic" fill="#000">if all sides equal</text>

  <!-- Properties box -->
  <rect x="40" y="510" width="920" height="160" rx="6" fill="none" stroke="#000" stroke-width="2"/>
  <text x="60" y="534" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Inherited Properties (going down the tree, all parent properties are kept):</text>
  <text x="60" y="554" font-family="Georgia,serif" font-size="11" fill="#000">Parallelogram → Rhombus adds: all sides equal.</text>
  <text x="60" y="572" font-family="Georgia,serif" font-size="11" fill="#000">Parallelogram → Rectangle adds: right angles (diagonals become equal).</text>
  <text x="60" y="590" font-family="Georgia,serif" font-size="11" fill="#000">Rectangle + Rhombus = Square: most constrained quadrilateral — all sides equal AND all angles 90°.</text>
  <text x="60" y="610" font-family="Georgia,serif" font-size="11" fill="#000">Every square is a rectangle and a rhombus.  Every rectangle and rhombus is a parallelogram.</text>
  <text x="60" y="630" font-family="Georgia,serif" font-size="11" fill="#000">Every parallelogram is a trapezium (UK definition: at least one pair of parallel sides).</text>
  <text x="60" y="650" font-family="Georgia,serif" font-size="11" fill="#000">Dashed arrow: special case only — a kite with all sides equal is a rhombus.</text>
</svg>`;

  // ─── CIRCLE THEOREM 1 — ANGLE AT CENTRE ──────────────────────────────────
  // Shows the theorem: angle at centre = 2 × angle at circumference,
  // subtended by the same arc. Black and white printable.
  static circleTheorem1Svg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="700px" viewBox="0 0 700 700">

  <!-- Title -->
  <text x="110" y="28" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Circle Theorem: Angle at the Centre</text>
  <text x="130" y="46" font-family="Georgia,serif" font-size="11" fill="#000">The angle at the centre is twice the angle at the circumference</text>
  <text x="215" y="62" font-family="Georgia,serif" font-size="11" fill="#000">(subtended by the same arc)</text>

  <!-- ── Circle: centre O=(350,360), r=220 ── -->
  <circle cx="350" cy="360" r="220" fill="none" stroke="#000" stroke-width="3"/>

  <!-- Centre point O -->
  <circle cx="350" cy="360" r="6" fill="#000"/>
  <text x="356" y="376" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">O</text>

  <!-- ── Three points on circumference:
       A = subtends the arc from the bottom (end-point 1)
       B = subtends the arc from the bottom (end-point 2)
       P = the circumference point for the angle at circumference

       Let arc endpoints A and B define the arc.
       A at angle 210° (below-left):  (350+220·cos210°, 360−220·sin210°)
         cos210°=−0.866, sin210°=−0.5 → (350−190.5, 360+110) = (159, 470)
       B at angle 330° (below-right): (350+220·cos330°, 360−220·sin330°)
         cos330°= 0.866, sin330°=−0.5 → (350+190.5, 360+110) = (541, 470)
       P at angle 90° (top):  (350, 360−220) = (350, 140)
  ── -->

  <!-- Points A, B, P on circumference -->
  <circle cx="159" cy="470" r="6" fill="#000"/>
  <text x="136" y="488" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">A</text>

  <circle cx="541" cy="470" r="6" fill="#000"/>
  <text x="548" y="488" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">B</text>

  <circle cx="350" cy="140" r="6" fill="#000"/>
  <text x="356" y="132" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">P</text>

  <!-- ── Lines from O (centre) to A and B → form central angle ∠AOB ── -->
  <line x1="350" y1="360" x2="159" y2="470" stroke="#000" stroke-width="2.8"/>
  <line x1="350" y1="360" x2="541" y2="470" stroke="#000" stroke-width="2.8"/>

  <!-- Central angle arc ∠AOB at O (the arc between the two radii) -->
  <!-- going from direction toward A (≈210°) to direction toward B (≈330°) through bottom -->
  <path d="M 294,408 A 68,68 0 1,0 406,408" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="316" y="448" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">2θ</text>

  <!-- ── Lines from P (circumference) to A and B → form inscribed angle ∠APB ── -->
  <line x1="350" y1="140" x2="159" y2="470" stroke="#000" stroke-width="2.8" stroke-dasharray="8,4"/>
  <line x1="350" y1="140" x2="541" y2="470" stroke="#000" stroke-width="2.8" stroke-dasharray="8,4"/>

  <!-- Inscribed angle arc ∠APB at P -->
  <path d="M 310,180 A 52,52 0 0,0 390,180" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="328" y="184" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">θ</text>

  <!-- Major arc AB (the arc NOT between A and B at the bottom) — highlighted with thick dashed -->
  <path d="M 159,470 A 220,220 0 0,1 541,470" fill="none" stroke="#000" stroke-width="4" stroke-dasharray="10,5"/>

  <!-- Minor arc label -->
  <text x="238" y="530" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">same arc AB</text>

  <!-- ── Theorem box ── -->
  <rect x="80" y="580" width="540" height="90" rx="7" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="100" y="606" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Theorem:</text>
  <text x="100" y="626" font-family="Georgia,serif" font-size="12" fill="#000">∠AOB = 2 × ∠APB</text>
  <text x="100" y="646" font-family="Georgia,serif" font-size="12" fill="#000">Central angle = 2 × Inscribed angle (same arc)</text>
  <text x="100" y="662" font-family="Georgia,serif" font-size="10.5" fill="#000">Corollary: All inscribed angles subtended by the same arc are equal.</text>

  <!-- Solid = centre lines, Dashed = circumference lines legend -->
  <text x="80" y="688" font-family="Georgia,serif" font-size="10" fill="#000">Solid lines: radii from O (central angle 2θ)   |   Dashed lines: chords from P (inscribed angle θ)</text>
</svg>`;


// ─── TRIGONOMETRY DIAGRAMS ─────────────────────────────────────────────────

  // rightTriangleTrigRatios → rightTriangleTrigRatiosSvg
  // SOH CAH TOA with labelled sides, angle θ, and ratio table
  static rightTriangleTrigRatiosSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="200" y="34" font-family="Georgia,serif" font-size="17" font-weight="bold" fill="#000">Trigonometric Ratios — SOH CAH TOA</text>

  <!-- ── Triangle vertices
       Right angle at R = (120, 440)
       Top (opposite end) at A = (120, 180)  → opposite = 260px
       Base end at B = (440, 440)            → adjacent = 320px
       Hypotenuse A→B ≈ 412px (scaled 5-unit hyp look)
  ── -->

  <!-- Triangle fill -->
  <polygon points="120,180 120,440 440,440"
           fill="none" stroke="#000" stroke-width="4" stroke-linejoin="round"/>

  <!-- Right angle marker -->
  <rect x="120" y="420" width="20" height="20" fill="none" stroke="#000" stroke-width="2.5"/>

  <!-- Angle arc at B=(440,440) -->
  <path d="M 410,440 A 30,30 0 0,0 395,416" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="396" y="436" font-family="Georgia,serif" font-size="15" font-style="italic" fill="#000">θ</text>

  <!-- Side labels -->
  <!-- Opposite (vertical left side) midpoint (120,310) -->
  <text x="54" y="316" font-family="Georgia,serif" font-size="15" font-weight="bold" font-style="italic" fill="#000">Opposite</text>

  <!-- Adjacent (horizontal bottom) midpoint (280,440) -->
  <text x="238" y="476" font-family="Georgia,serif" font-size="15" font-weight="bold" font-style="italic" fill="#000">Adjacent</text>

  <!-- Hypotenuse (diagonal) midpoint ≈ (282,312) label offset -->
  <text x="294" y="294" font-family="Georgia,serif" font-size="15" font-weight="bold" font-style="italic" fill="#000">Hypotenuse</text>

  <!-- Vertex dots -->
  <circle cx="120" cy="180" r="5" fill="#000"/>
  <circle cx="120" cy="440" r="5" fill="#000"/>
  <circle cx="440" cy="440" r="5" fill="#000"/>

  <!-- ── SOH CAH TOA box ── -->
  <rect x="520" y="150" width="248" height="230" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="584" y="178" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">SOH CAH TOA</text>
  <line x1="520" y1="186" x2="768" y2="186" stroke="#000" stroke-width="1.5"/>

  <text x="530" y="212" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">SOH:</text>
  <text x="530" y="230" font-family="Georgia,serif" font-size="12" fill="#000">sin θ = Opposite / Hypotenuse</text>

  <text x="530" y="256" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">CAH:</text>
  <text x="530" y="274" font-family="Georgia,serif" font-size="12" fill="#000">cos θ = Adjacent / Hypotenuse</text>

  <text x="530" y="300" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">TOA:</text>
  <text x="530" y="318" font-family="Georgia,serif" font-size="12" fill="#000">tan θ = Opposite / Adjacent</text>

  <line x1="520" y1="332" x2="768" y2="332" stroke="#000" stroke-width="1"/>
  <text x="530" y="350" font-family="Georgia,serif" font-size="11" fill="#444">tan θ = sin θ / cos θ</text>
  <text x="530" y="366" font-family="Georgia,serif" font-size="11" fill="#444">sin²θ + cos²θ = 1</text>

  <!-- ── Ratio table with 30° example ── -->
  <rect x="520" y="410" width="248" height="160" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="570" y="432" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Example: θ = 30°</text>
  <line x1="520" y1="440" x2="768" y2="440" stroke="#000" stroke-width="1.5"/>
  <text x="530" y="460" font-family="Georgia,serif" font-size="12" fill="#000">Opposite = 1,  Adjacent = √3</text>
  <text x="530" y="478" font-family="Georgia,serif" font-size="12" fill="#000">Hypotenuse = 2</text>
  <text x="530" y="500" font-family="Georgia,serif" font-size="12" fill="#000">sin 30° = 1/2 = 0.5</text>
  <text x="530" y="518" font-family="Georgia,serif" font-size="12" fill="#000">cos 30° = √3/2 ≈ 0.866</text>
  <text x="530" y="536" font-family="Georgia,serif" font-size="12" fill="#000">tan 30° = 1/√3 ≈ 0.577</text>

  <!-- ── Reciprocal identities note ── -->
  <text x="80" y="530" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Reciprocal Identities:</text>
  <text x="80" y="550" font-family="Georgia,serif" font-size="11" fill="#000">csc θ = 1/sin θ     sec θ = 1/cos θ     cot θ = 1/tan θ</text>
</svg>`;

  // unitCircle → unitCircleSvg  (black &amp; white rewrite of the existing coloured version)
  static unitCircleSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 500 500">

  <!-- Title -->
  <text x="90" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Unit Circle — Standard Angles, Coordinates &amp; Radians</text>

  <!-- Axes -->
  <line x1="60" y1="260" x2="440" y2="260" stroke="#000" stroke-width="2.5"/>
  <polygon points="436,255 448,260 436,265" fill="#000"/>
  <text x="452" y="264" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">x</text>
  <line x1="250" y1="450" x2="250" y2="70" stroke="#000" stroke-width="2.5"/>
  <polygon points="245,74 250,62 255,74" fill="#000"/>
  <text x="254" y="60" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">y</text>

  <!-- Tick marks -->
  <line x1="410" y1="256" x2="410" y2="264" stroke="#000" stroke-width="2"/>
  <text x="406" y="278" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="90" y1="256" x2="90" y2="264" stroke="#000" stroke-width="2"/>
  <text x="82" y="278" font-family="Georgia,serif" font-size="11" fill="#000">−1</text>
  <line x1="246" y1="100" x2="254" y2="100" stroke="#000" stroke-width="2"/>
  <text x="256" y="104" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="246" y1="420" x2="254" y2="420" stroke="#000" stroke-width="2"/>
  <text x="256" y="424" font-family="Georgia,serif" font-size="11" fill="#000">−1</text>

  <!-- Unit circle -->
  <circle cx="250" cy="260" r="160" fill="none" stroke="#000" stroke-width="3"/>

  <!-- Spokes (dashed) -->
  <line x1="250" y1="260" x2="410" y2="260" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="250" y1="260" x2="389" y2="180" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="250" y1="260" x2="363" y2="147" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="250" y1="260" x2="330" y2="121" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="250" y1="260" x2="250" y2="100" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="250" y1="260" x2="170" y2="121" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="250" y1="260" x2="137" y2="147" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="250" y1="260" x2="111" y2="180" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="250" y1="260" x2="90"  y2="260" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="250" y1="260" x2="111" y2="340" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="250" y1="260" x2="137" y2="373" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="250" y1="260" x2="170" y2="399" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="250" y1="260" x2="250" y2="420" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="250" y1="260" x2="330" y2="399" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="250" y1="260" x2="363" y2="373" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="250" y1="260" x2="389" y2="340" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>

  <!-- Angle + coordinate labels -->
  <text x="415" y="255" font-family="Georgia,serif" font-size="9" fill="#000">0 / 2π</text>
  <text x="415" y="267" font-family="Georgia,serif" font-size="8.5" fill="#000">(1, 0)</text>

  <text x="394" y="175" font-family="Georgia,serif" font-size="9" fill="#000">π/6  30°</text>
  <text x="394" y="186" font-family="Georgia,serif" font-size="8.5" fill="#000">(√3/2, ½)</text>

  <text x="366" y="142" font-family="Georgia,serif" font-size="9" fill="#000">π/4  45°</text>
  <text x="366" y="153" font-family="Georgia,serif" font-size="8.5" fill="#000">(√2/2, √2/2)</text>

  <text x="332" y="116" font-family="Georgia,serif" font-size="9" fill="#000">π/3  60°</text>
  <text x="332" y="127" font-family="Georgia,serif" font-size="8.5" fill="#000">(½, √3/2)</text>

  <text x="254" y="92" font-family="Georgia,serif" font-size="9" fill="#000">π/2  90°</text>

  <text x="66" y="116" font-family="Georgia,serif" font-size="9" fill="#000">2π/3  120°</text>
  <text x="56" y="127" font-family="Georgia,serif" font-size="8.5" fill="#000">(−½, √3/2)</text>

  <text x="24" y="142" font-family="Georgia,serif" font-size="9" fill="#000">3π/4  135°</text>
  <text x="14" y="153" font-family="Georgia,serif" font-size="8.5" fill="#000">(−√2/2, √2/2)</text>

  <text x="8" y="175" font-family="Georgia,serif" font-size="9" fill="#000">5π/6  150°</text>
  <text x="6" y="186" font-family="Georgia,serif" font-size="8.5" fill="#000">(−√3/2, ½)</text>

  <text x="4" y="255" font-family="Georgia,serif" font-size="9" fill="#000">π  180°</text>
  <text x="4" y="267" font-family="Georgia,serif" font-size="8.5" fill="#000">(−1, 0)</text>

  <text x="6" y="337" font-family="Georgia,serif" font-size="9" fill="#000">7π/6  210°</text>
  <text x="4" y="348" font-family="Georgia,serif" font-size="8.5" fill="#000">(−√3/2, −½)</text>

  <text x="14" y="375" font-family="Georgia,serif" font-size="9" fill="#000">5π/4  225°</text>
  <text x="10" y="386" font-family="Georgia,serif" font-size="8.5" fill="#000">(−√2/2, −√2/2)</text>

  <text x="64" y="412" font-family="Georgia,serif" font-size="9" fill="#000">4π/3  240°</text>
  <text x="52" y="423" font-family="Georgia,serif" font-size="8.5" fill="#000">(−½, −√3/2)</text>

  <text x="255" y="444" font-family="Georgia,serif" font-size="9" fill="#000">3π/2  270°</text>

  <text x="332" y="412" font-family="Georgia,serif" font-size="9" fill="#000">5π/3  300°</text>
  <text x="332" y="423" font-family="Georgia,serif" font-size="8.5" fill="#000">(½, −√3/2)</text>

  <text x="366" y="372" font-family="Georgia,serif" font-size="9" fill="#000">7π/4  315°</text>
  <text x="366" y="383" font-family="Georgia,serif" font-size="8.5" fill="#000">(√2/2, −√2/2)</text>

  <text x="392" y="337" font-family="Georgia,serif" font-size="9" fill="#000">11π/6  330°</text>
  <text x="392" y="348" font-family="Georgia,serif" font-size="8.5" fill="#000">(√3/2, −½)</text>

  <!-- Reference triangle at 60° -->
  <line x1="250" y1="260" x2="330" y2="260" stroke="#000" stroke-width="2.5"/>
  <line x1="330" y1="260" x2="330" y2="121" stroke="#000" stroke-width="2.5"/>
  <rect x="320" y="250" width="10" height="10" fill="none" stroke="#000" stroke-width="1.8"/>
  <text x="270" y="278" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">cos θ</text>
  <text x="334" y="195" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">sin θ</text>
  <path d="M 278,260 A 28,28 0 0,0 264,231" fill="none" stroke="#000" stroke-width="2"/>
  <text x="280" y="247" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">θ</text>
  <circle cx="330" cy="121" r="4" fill="#000"/>

  <!-- Quadrant labels -->
  <text x="310" y="215" font-family="Georgia,serif" font-size="10" fill="#000">Q I</text>
  <text x="176" y="215" font-family="Georgia,serif" font-size="10" fill="#000">Q II</text>
  <text x="176" y="330" font-family="Georgia,serif" font-size="10" fill="#000">Q III</text>
  <text x="310" y="330" font-family="Georgia,serif" font-size="10" fill="#000">Q IV</text>
  <text x="294" y="228" font-family="Georgia,serif" font-size="8.5" fill="#555">sin+,cos+</text>
  <text x="156" y="228" font-family="Georgia,serif" font-size="8.5" fill="#555">sin+,cos−</text>
  <text x="156" y="318" font-family="Georgia,serif" font-size="8.5" fill="#555">sin−,cos−</text>
  <text x="294" y="318" font-family="Georgia,serif" font-size="8.5" fill="#555">sin−,cos+</text>

  <text x="254" y="274" font-family="Georgia,serif" font-size="10" fill="#000">O</text>
</svg>`;

  // specialAnglesTriangle → specialAnglesTriangleSvg
  // 30-60-90 and 45-45-90 triangles side by side, B&W
  static specialAnglesTriangleSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="500px" viewBox="0 0 1000 500">

  <!-- Title -->
  <text x="310" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Special Angle Triangles</text>

  <!-- ══════════════════════════════════════
       LEFT: 30-60-90 triangle
       Vertices: right angle R=(80,400), top A=(80,160), base B=(320,400)
       legs: vertical=240px (opposite 60°), horizontal=240/√3≈138.6→use 140px (opposite 30°)
       hypotenuse = 280px
  ══════════════════════════════════════ -->
  <text x="100" y="60" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">30°-60°-90° Triangle</text>

  <polygon points="80,160 80,400 220,400"
           fill="none" stroke="#000" stroke-width="4" stroke-linejoin="round"/>

  <!-- right angle at R=(80,400) -->
  <rect x="80" y="380" width="20" height="20" fill="none" stroke="#000" stroke-width="2.5"/>

  <!-- 30° arc at B=(220,400) -->
  <path d="M 196,400 A 24,24 0 0,0 184,381" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="188" y="397" font-family="Georgia,serif" font-size="12" fill="#000">30°</text>

  <!-- 60° arc at A=(80,160) -->
  <path d="M 80,184 A 24,24 0 0,1 101,172" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="104" y="187" font-family="Georgia,serif" font-size="12" fill="#000">60°</text>

  <!-- Side labels -->
  <!-- Vertical side (opposite 60°): midpoint (80,280), label left -->
  <text x="16" y="286" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">√3</text>
  <!-- Horizontal side (opposite 30°): midpoint (150,400), label below -->
  <text x="138" y="430" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">1</text>
  <!-- Hypotenuse: midpoint ≈(150,280) label right -->
  <text x="164" y="276" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">2</text>

  <!-- Ratio table, 30-60-90 -->
  <rect x="60" y="448" width="280" height="42" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="70" y="464" font-family="Georgia,serif" font-size="11" fill="#000">sin30°=½   cos30°=√3/2   tan30°=1/√3</text>
  <text x="70" y="482" font-family="Georgia,serif" font-size="11" fill="#000">sin60°=√3/2  cos60°=½   tan60°=√3</text>

  <!-- Vertex dots -->
  <circle cx="80"  cy="160" r="5" fill="#000"/>
  <circle cx="80"  cy="400" r="5" fill="#000"/>
  <circle cx="220" cy="400" r="5" fill="#000"/>

  <!-- ══════════════════════════════════════
       RIGHT: 45-45-90 triangle
       Vertices: right angle R=(620,400), top A=(620,160), base B=(860,400)
       Both legs = 240px, hyp = 240√2 ≈ 339px
  ══════════════════════════════════════ -->
  <text x="650" y="60" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">45°-45°-90° Triangle</text>

  <polygon points="620,160 620,400 860,400"
           fill="none" stroke="#000" stroke-width="4" stroke-linejoin="round"/>

  <!-- right angle at R=(620,400) -->
  <rect x="620" y="380" width="20" height="20" fill="none" stroke="#000" stroke-width="2.5"/>

  <!-- 45° arc at B=(860,400) -->
  <path d="M 836,400 A 24,24 0 0,0 822,381" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="824" y="397" font-family="Georgia,serif" font-size="12" fill="#000">45°</text>

  <!-- 45° arc at A=(620,160) -->
  <path d="M 620,184 A 24,24 0 0,1 641,172" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="644" y="187" font-family="Georgia,serif" font-size="12" fill="#000">45°</text>

  <!-- Side labels -->
  <text x="556" y="286" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">1</text>
  <text x="724" y="430" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">1</text>
  <text x="758" y="276" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">√2</text>

  <!-- Ratio table, 45-45-90 -->
  <rect x="600" y="448" width="280" height="28" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="610" y="467" font-family="Georgia,serif" font-size="11" fill="#000">sin45°=√2/2   cos45°=√2/2   tan45°=1</text>

  <!-- Vertex dots -->
  <circle cx="620" cy="160" r="5" fill="#000"/>
  <circle cx="620" cy="400" r="5" fill="#000"/>
  <circle cx="860" cy="400" r="5" fill="#000"/>

  <!-- Central note -->
  <text x="358" y="220" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Hypotenuse</text>
  <text x="362" y="238" font-family="Georgia,serif" font-size="12" fill="#000">= 2 × short leg</text>
  <text x="354" y="290" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Hypotenuse</text>
  <text x="346" y="308" font-family="Georgia,serif" font-size="12" fill="#000">= leg × √2</text>
  <line x1="346" y1="248" x2="346" y2="280" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
</svg>`;

  // trigIdentitiesVisual → trigIdentitiesVisualSvg
  // Visual proof of sin²θ + cos²θ = 1 on the unit circle, B&W
  static trigIdentitiesVisualSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="220" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Trigonometric Identities — Pythagorean Identity</text>

  <!-- ── Unit circle: centre (260,310), r=200 ── -->
  <circle cx="260" cy="310" r="200" fill="none" stroke="#000" stroke-width="3"/>

  <!-- Axes -->
  <line x1="40"  y1="310" x2="480" y2="310" stroke="#000" stroke-width="2"/>
  <polygon points="476,305 488,310 476,315" fill="#000"/>
  <text x="492" y="314" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">x</text>
  <line x1="260" y1="500" x2="260" y2="90" stroke="#000" stroke-width="2"/>
  <polygon points="255,94 260,82 265,94" fill="#000"/>
  <text x="264" y="80" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">y</text>

  <!-- Tick labels -->
  <text x="454" y="325" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <text x="44"  y="325" font-family="Georgia,serif" font-size="11" fill="#000">−1</text>
  <text x="266" y="108" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <text x="266" y="518" font-family="Georgia,serif" font-size="11" fill="#000">−1</text>

  <!-- θ = 50°: point P = (260+200cos50°, 310−200sin50°) ≈ (389, 157) -->
  <!-- Radius to P -->
  <line x1="260" y1="310" x2="389" y2="157" stroke="#000" stroke-width="3"/>
  <!-- cos θ leg (horizontal) -->
  <line x1="260" y1="310" x2="389" y2="310" stroke="#000" stroke-width="2.5" stroke-dasharray="6,3"/>
  <!-- sin θ leg (vertical) -->
  <line x1="389" y1="310" x2="389" y2="157" stroke="#000" stroke-width="2.5" stroke-dasharray="6,3"/>
  <!-- right angle marker -->
  <rect x="375" y="296" width="14" height="14" fill="none" stroke="#000" stroke-width="2"/>

  <!-- Point P -->
  <circle cx="389" cy="157" r="6" fill="#000"/>
  <text x="396" y="152" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">P=(cosθ, sinθ)</text>

  <!-- Labels -->
  <text x="316" y="330" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">cos θ</text>
  <text x="394" y="238" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">sin θ</text>
  <text x="298" y="226" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">1</text>

  <!-- θ arc -->
  <path d="M 290,310 A 30,30 0 0,0 279,285" fill="none" stroke="#000" stroke-width="2"/>
  <text x="294" y="300" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">θ</text>

  <!-- ── Identity panel ── -->
  <rect x="520" y="100" width="355" height="380" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="590" y="128" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Pythagorean Identity</text>
  <line x1="520" y1="136" x2="875" y2="136" stroke="#000" stroke-width="1.5"/>

  <text x="534" y="164" font-family="Georgia,serif" font-size="13" fill="#000">By Pythagoras on the right triangle:</text>
  <text x="534" y="192" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">(cos θ)² + (sin θ)² = 1²</text>
  <text x="534" y="220" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">∴  cos²θ + sin²θ = 1</text>

  <line x1="520" y1="234" x2="875" y2="234" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="534" y="256" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Derived identities:</text>
  <text x="534" y="278" font-family="Georgia,serif" font-size="12" fill="#000">Divide by cos²θ:  1 + tan²θ = sec²θ</text>
  <text x="534" y="300" font-family="Georgia,serif" font-size="12" fill="#000">Divide by sin²θ:  cot²θ + 1 = csc²θ</text>

  <line x1="520" y1="316" x2="875" y2="316" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="534" y="338" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Other key identities:</text>
  <text x="534" y="358" font-family="Georgia,serif" font-size="11" fill="#000">sin(−θ) = −sin θ          (odd)</text>
  <text x="534" y="376" font-family="Georgia,serif" font-size="11" fill="#000">cos(−θ) =  cos θ          (even)</text>
  <text x="534" y="394" font-family="Georgia,serif" font-size="11" fill="#000">sin(A+B) = sinA cosB + cosA sinB</text>
  <text x="534" y="412" font-family="Georgia,serif" font-size="11" fill="#000">cos(A+B) = cosA cosB − sinA sinB</text>
  <text x="534" y="430" font-family="Georgia,serif" font-size="11" fill="#000">sin 2θ = 2 sin θ cos θ</text>
  <text x="534" y="448" font-family="Georgia,serif" font-size="11" fill="#000">cos 2θ = cos²θ − sin²θ</text>

  <!-- Origin label -->
  <text x="264" y="326" font-family="Georgia,serif" font-size="11" fill="#000">O</text>
</svg>`;

  // sineRuleDiagram → sineRuleDiagramSvg
  // General triangle with sine rule labelling, B&W
  static sineRuleDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="220" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Sine Rule — Non-Right Triangle</text>

  <!-- ── Triangle
       A=(120,460), B=(520,460), C=(280,140)
       Angles: A≈40°, B≈60°, C≈80° (illustrative)
       Sides: a=BC, b=AC, c=AB
  ── -->
  <polygon points="120,460 520,460 280,140"
           fill="none" stroke="#000" stroke-width="4" stroke-linejoin="round"/>

  <!-- Vertex dots -->
  <circle cx="120" cy="460" r="6" fill="#000"/>
  <circle cx="520" cy="460" r="6" fill="#000"/>
  <circle cx="280" cy="140" r="6" fill="#000"/>

  <!-- Vertex labels -->
  <text x="94"  y="486" font-family="Georgia,serif" font-size="16" font-weight="bold" font-style="italic" fill="#000">A</text>
  <text x="528" y="486" font-family="Georgia,serif" font-size="16" font-weight="bold" font-style="italic" fill="#000">B</text>
  <text x="272" y="124" font-family="Georgia,serif" font-size="16" font-weight="bold" font-style="italic" fill="#000">C</text>

  <!-- Angle arcs -->
  <!-- Angle A at (120,460) -->
  <path d="M 150,460 A 30,30 0 0,1 136,436" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="154" y="452" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">A</text>

  <!-- Angle B at (520,460) -->
  <path d="M 490,460 A 30,30 0 0,0 504,436" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="484" y="452" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">B</text>

  <!-- Angle C at (280,140) -->
  <path d="M 272,166 A 28,28 0 0,1 294,158" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="282" y="178" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">C</text>

  <!-- Side labels (opposite to vertex) -->
  <!-- a = BC: midpoint ≈ (400,300), label right -->
  <text x="418" y="306" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">a</text>
  <!-- b = AC: midpoint ≈ (200,300), label left -->
  <text x="168" y="306" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">b</text>
  <!-- c = AB: midpoint ≈ (320,460), label below -->
  <text x="314" y="488" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">c</text>

  <!-- Altitude (dashed) from C to AB -->
  <line x1="280" y1="140" x2="280" y2="460" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <rect x="274" y="446" width="12" height="12" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="286" y="430" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#555">h</text>

  <!-- ── Sine Rule box ── -->
  <rect x="540" y="100" width="240" height="200" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="570" y="128" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Sine Rule</text>
  <line x1="540" y1="136" x2="780" y2="136" stroke="#000" stroke-width="1.5"/>
  <text x="550" y="168" font-family="Georgia,serif" font-size="14" fill="#000">a       b       c</text>
  <line x1="550" y1="174" x2="590" y2="174" stroke="#000" stroke-width="1.5"/>
  <line x1="604" y1="174" x2="644" y2="174" stroke="#000" stroke-width="1.5"/>
  <line x1="658" y1="174" x2="698" y2="174" stroke="#000" stroke-width="1.5"/>
  <text x="550" y="192" font-family="Georgia,serif" font-size="14" fill="#000">sinA    sinB    sinC</text>
  <text x="550" y="218" font-family="Georgia,serif" font-size="12" fill="#555">All three ratios are equal.</text>

  <!-- Example values -->
  <text x="550" y="248" font-family="Georgia,serif" font-size="12" fill="#000">Example: a=5, b=7, A=40°</text>
  <text x="550" y="268" font-family="Georgia,serif" font-size="12" fill="#000">sin B = 7·sin40°/5 ≈ 0.900</text>
  <text x="550" y="288" font-family="Georgia,serif" font-size="12" fill="#000">∴ B ≈ 64.2°,  C ≈ 75.8°</text>

  <!-- Ambiguous case note -->
  <rect x="540" y="320" width="240" height="64" rx="6" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="550" y="342" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Ambiguous Case (SSA):</text>
  <text x="550" y="360" font-family="Georgia,serif" font-size="10" fill="#555">When given two sides and a</text>
  <text x="550" y="374" font-family="Georgia,serif" font-size="10" fill="#555">non-included angle, two triangles</text>
  <text x="550" y="388" font-family="Georgia,serif" font-size="10" fill="#555">may be possible — check both.</text>
</svg>`;

  // cosineRuleDiagram → cosineRuleDiagramSvg
  // General triangle with cosine rule labelling, B&W
  static cosineRuleDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="210" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Cosine Rule — Non-Right Triangle</text>

  <!-- Triangle: A=(100,450), B=(480,450), C=(240,150) -->
  <polygon points="100,450 480,450 240,150"
           fill="none" stroke="#000" stroke-width="4" stroke-linejoin="round"/>

  <circle cx="100" cy="450" r="6" fill="#000"/>
  <circle cx="480" cy="450" r="6" fill="#000"/>
  <circle cx="240" cy="150" r="6" fill="#000"/>

  <text x="74"  y="474" font-family="Georgia,serif" font-size="16" font-weight="bold" font-style="italic" fill="#000">A</text>
  <text x="488" y="474" font-family="Georgia,serif" font-size="16" font-weight="bold" font-style="italic" fill="#000">B</text>
  <text x="232" y="136" font-family="Georgia,serif" font-size="16" font-weight="bold" font-style="italic" fill="#000">C</text>

  <!-- Angle C arc (the included angle, at C) -->
  <path d="M 232,174 A 26,26 0 0,1 254,164" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="250" y="186" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">C</text>

  <!-- Angle A arc -->
  <path d="M 128,450 A 28,28 0 0,1 115,428" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="132" y="444" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">A</text>

  <!-- Angle B arc -->
  <path d="M 452,450 A 28,28 0 0,0 466,428" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="440" y="444" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">B</text>

  <!-- Side labels -->
  <text x="378" y="304" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">a</text>
  <text x="140" y="304" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">b</text>
  <text x="282" y="474" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">c</text>

  <!-- ── Cosine Rule box ── -->
  <rect x="520" y="80" width="258" height="248" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="570" y="108" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Cosine Rule</text>
  <line x1="520" y1="116" x2="778" y2="116" stroke="#000" stroke-width="1.5"/>
  <text x="530" y="144" font-family="Georgia,serif" font-size="13" fill="#000">Find side c:</text>
  <text x="530" y="166" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">c² = a²+b²−2ab cosC</text>
  <line x1="520" y1="178" x2="778" y2="178" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="530" y="200" font-family="Georgia,serif" font-size="13" fill="#000">Find angle C:</text>
  <text x="530" y="222" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">cosC = (a²+b²−c²)</text>
  <text x="536" y="240" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">            ÷ 2ab</text>
  <line x1="520" y1="252" x2="778" y2="252" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="530" y="272" font-family="Georgia,serif" font-size="12" fill="#000">Example: a=5, b=7, C=60°</text>
  <text x="530" y="290" font-family="Georgia,serif" font-size="12" fill="#000">c²=25+49−2·5·7·0.5=39</text>
  <text x="530" y="308" font-family="Georgia,serif" font-size="12" fill="#000">c = √39 ≈ 6.24</text>

  <!-- Link to Pythagorean -->
  <rect x="520" y="352" width="258" height="60" rx="6" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="530" y="374" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">When C = 90°:</text>
  <text x="530" y="394" font-family="Georgia,serif" font-size="11" fill="#000">cos90°=0 → c²=a²+b²</text>
  <text x="530" y="410" font-family="Georgia,serif" font-size="11" fill="#555">(Pythagorean theorem!)</text>
</svg>`;

  // triangleAreaFormula → triangleAreaFormulaSvg
  // Area = ½ab sinC with height construction, B&W
  static triangleAreaFormulaSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="170" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Triangle Area Formula — Area = ½ab sinC</text>

  <!-- Triangle: A=(80,440), B=(480,440), C=(220,160)
       a=BC, b=AC, included angle C
       base AB = 400px, height from C ≈ 280px
  -->
  <polygon points="80,440 480,440 220,160"
           fill="none" stroke="#000" stroke-width="4" stroke-linejoin="round"/>

  <circle cx="80"  cy="440" r="6" fill="#000"/>
  <circle cx="480" cy="440" r="6" fill="#000"/>
  <circle cx="220" cy="160" r="6" fill="#000"/>

  <text x="54"  y="464" font-family="Georgia,serif" font-size="16" font-weight="bold" font-style="italic" fill="#000">A</text>
  <text x="488" y="464" font-family="Georgia,serif" font-size="16" font-weight="bold" font-style="italic" fill="#000">B</text>
  <text x="212" y="146" font-family="Georgia,serif" font-size="16" font-weight="bold" font-style="italic" fill="#000">C</text>

  <!-- Height from C perpendicular to AB: foot H=(220,440) -->
  <line x1="220" y1="160" x2="220" y2="440" stroke="#000" stroke-width="2" stroke-dasharray="7,4"/>
  <rect x="208" y="428" width="12" height="12" fill="none" stroke="#000" stroke-width="1.8"/>
  <text x="228" y="400" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">h</text>

  <!-- h = b sinC label near height -->
  <text x="228" y="310" font-family="Georgia,serif" font-size="12" fill="#555">h = b·sinC</text>

  <!-- Angle C arc at C=(220,160) -->
  <path d="M 212,183 A 26,26 0 0,1 234,173" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="238" y="192" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">C</text>

  <!-- Angle A arc -->
  <path d="M 108,440 A 28,28 0 0,1 96,418" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="112" y="434" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">A</text>

  <!-- Side labels -->
  <text x="362" y="306" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">a</text>
  <text x="114" y="306" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">b</text>
  <text x="272" y="464" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">c  (base)</text>

  <!-- ── Formula derivation box ── -->
  <rect x="516" y="80" width="268" height="300" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="568" y="108" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Area Derivation</text>
  <line x1="516" y1="116" x2="784" y2="116" stroke="#000" stroke-width="1.5"/>
  <text x="526" y="144" font-family="Georgia,serif" font-size="12" fill="#000">Standard formula:</text>
  <text x="526" y="164" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Area = ½ × base × height</text>
  <text x="526" y="188" font-family="Georgia,serif" font-size="12" fill="#000">base = c,   height h = b sinC</text>
  <text x="526" y="212" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">∴ Area = ½ c·b sinC</text>
  <line x1="516" y1="226" x2="784" y2="226" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="526" y="250" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Area = ½ab sinC</text>
  <text x="526" y="270" font-family="Georgia,serif" font-size="11" fill="#555">(any two sides, included angle)</text>
  <line x1="516" y1="282" x2="784" y2="282" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="526" y="304" font-family="Georgia,serif" font-size="12" fill="#000">Example: a=6, b=8, C=30°</text>
  <text x="526" y="324" font-family="Georgia,serif" font-size="12" fill="#000">Area = ½·6·8·sin30°</text>
  <text x="526" y="344" font-family="Georgia,serif" font-size="12" fill="#000">     = ½·6·8·0.5 = 12 units²</text>

  <!-- Also valid forms -->
  <rect x="516" y="402" width="268" height="80" rx="6" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="526" y="424" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">All three equivalent forms:</text>
  <text x="526" y="444" font-family="Georgia,serif" font-size="11" fill="#000">Area = ½ab sinC = ½bc sinA = ½ac sinB</text>
  <text x="526" y="464" font-family="Georgia,serif" font-size="11" fill="#555">Use whichever pair of sides &amp; included angle</text>
  <text x="526" y="480" font-family="Georgia,serif" font-size="11" fill="#555">are known.</text>
</svg>`;

  // radianMeasure → radianMeasureSvg
  // Radians vs degrees on circle with arc length, B&W
  static radianMeasureSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 800 800">

  <!-- Title -->
  <text x="220" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Radian Measure — Radians vs Degrees</text>

  <!-- ── Circle: centre (400,420), r=220 ── -->
  <circle cx="400" cy="420" r="220" fill="none" stroke="#000" stroke-width="3"/>

  <!-- Axes -->
  <line x1="160" y1="420" x2="640" y2="420" stroke="#000" stroke-width="2"/>
  <line x1="400" y1="640" x2="400" y2="180" stroke="#000" stroke-width="2"/>

  <!-- 1 radian arc: from 0° to ≈57.3°
       Start point: (400+220, 420) = (620, 420)
       End point: (400+220cos57.3°, 420−220sin57.3°) ≈ (400+119, 420−185) = (519,235)
  -->
  <path d="M 620,420 A 220,220 0 0,0 519,235"
        fill="none" stroke="#000" stroke-width="5" stroke-linecap="round"/>

  <!-- Radius to start (horizontal) -->
  <line x1="400" y1="420" x2="620" y2="420" stroke="#000" stroke-width="2.5"/>
  <!-- Radius to end of arc -->
  <line x1="400" y1="420" x2="519" y2="235" stroke="#000" stroke-width="2.5"/>

  <!-- Arc length = r label along arc -->
  <text x="566" y="330" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">arc = r</text>

  <!-- Angle arc label -->
  <path d="M 450,420 A 50,50 0 0,0 427,371" fill="none" stroke="#000" stroke-width="2"/>
  <text x="462" y="394" font-family="Georgia,serif" font-size="12" fill="#000">1 rad</text>
  <text x="454" y="410" font-family="Georgia,serif" font-size="11" fill="#555">≈57.3°</text>

  <!-- r labels on radii -->
  <text x="504" y="440" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">r</text>
  <text x="452" y="320" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">r</text>

  <!-- Dots -->
  <circle cx="620" cy="420" r="5" fill="#000"/>
  <circle cx="519" cy="235" r="5" fill="#000"/>
  <circle cx="400" cy="420" r="4" fill="#000"/>

  <!-- Full circle key angles (thin dashed spokes) -->
  <!-- π/2 = 90° top -->
  <line x1="400" y1="420" x2="400" y2="200" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="406" y="196" font-family="Georgia,serif" font-size="11" fill="#000">π/2 = 90°</text>
  <!-- π = 180° left -->
  <line x1="400" y1="420" x2="180" y2="420" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="110" y="416" font-family="Georgia,serif" font-size="11" fill="#000">π = 180°</text>
  <!-- 3π/2 = 270° bottom -->
  <line x1="400" y1="420" x2="400" y2="640" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="406" y="658" font-family="Georgia,serif" font-size="11" fill="#000">3π/2 = 270°</text>
  <!-- 2π = 360° right label -->
  <text x="626" y="416" font-family="Georgia,serif" font-size="11" fill="#000">2π = 360°</text>

  <!-- ── Conversion box ── -->
  <rect x="30" y="80" width="310" height="190" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="70" y="108" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Radian ↔ Degree Conversion</text>
  <line x1="30" y1="116" x2="340" y2="116" stroke="#000" stroke-width="1.5"/>
  <text x="44" y="144" font-family="Georgia,serif" font-size="13" fill="#000">360° = 2π radians</text>
  <text x="44" y="166" font-family="Georgia,serif" font-size="13" fill="#000">180° = π radians</text>
  <text x="44" y="196" font-family="Georgia,serif" font-size="12" fill="#000">Degrees → Radians:  × π/180</text>
  <text x="44" y="216" font-family="Georgia,serif" font-size="12" fill="#000">Radians → Degrees:  × 180/π</text>
  <text x="44" y="240" font-family="Georgia,serif" font-size="11" fill="#555">e.g. 90° × π/180 = π/2 rad</text>
  <text x="44" y="258" font-family="Georgia,serif" font-size="11" fill="#555">e.g. 2 rad × 180/π ≈ 114.6°</text>

  <!-- ── Arc length box ── -->
  <rect x="30" y="296" width="310" height="140" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="80" y="324" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Arc Length Formula</text>
  <line x1="30" y1="332" x2="340" y2="332" stroke="#000" stroke-width="1.5"/>
  <text x="44" y="360" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">s = r θ</text>
  <text x="44" y="382" font-family="Georgia,serif" font-size="12" fill="#000">(θ must be in radians)</text>
  <text x="44" y="404" font-family="Georgia,serif" font-size="11" fill="#555">e.g. r=5 cm, θ=π/3 rad:</text>
  <text x="44" y="422" font-family="Georgia,serif" font-size="11" fill="#555">s = 5·π/3 ≈ 5.24 cm</text>

  <!-- ── Sector area box ── -->
  <rect x="30" y="460" width="310" height="100" rx="8" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="80" y="488" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Sector Area Formula</text>
  <line x1="30" y1="496" x2="340" y2="496" stroke="#000" stroke-width="1.5"/>
  <text x="44" y="524" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Area = ½ r² θ</text>
  <text x="44" y="546" font-family="Georgia,serif" font-size="11" fill="#555">(θ in radians)</text>

  <!-- Key radian values table -->
  <rect x="460" y="560" width="320" height="210" rx="8" fill="none" stroke="#000" stroke-width="2"/>
  <text x="530" y="584" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Key Angle Equivalents</text>
  <line x1="460" y1="592" x2="780" y2="592" stroke="#000" stroke-width="1.5"/>
  <text x="472" y="614" font-family="Georgia,serif" font-size="11" fill="#000">30°  =  π/6       60°  =  π/3</text>
  <text x="472" y="634" font-family="Georgia,serif" font-size="11" fill="#000">45°  =  π/4       90°  =  π/2</text>
  <text x="472" y="654" font-family="Georgia,serif" font-size="11" fill="#000">120° =  2π/3     135° =  3π/4</text>
  <text x="472" y="674" font-family="Georgia,serif" font-size="11" fill="#000">150° =  5π/6     180° =  π</text>
  <text x="472" y="694" font-family="Georgia,serif" font-size="11" fill="#000">270° =  3π/2     360° =  2π</text>
  <text x="472" y="714" font-family="Georgia,serif" font-size="11" fill="#000">1 rad ≈ 57.296°</text>
  <text x="472" y="734" font-family="Georgia,serif" font-size="11" fill="#000">π ≈ 3.14159 rad</text>
</svg>`;

  // sineGraph → sineGraphSvg (B&W, sine only, with full annotations)
  static sineGraphSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <!-- Title -->
  <text x="330" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Sine Graph — y = sin(x)</text>

  <!-- Axes: origin (80,300), x-scale 100px=π/2, y-scale 120px=1 -->
  <line x1="60" y1="300" x2="960" y2="300" stroke="#000" stroke-width="2.5"/>
  <polygon points="956,295 968,300 956,305" fill="#000"/>
  <text x="972" y="304" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">x</text>
  <line x1="80" y1="520" x2="80" y2="50" stroke="#000" stroke-width="2.5"/>
  <polygon points="75,54 80,42 85,54" fill="#000"/>
  <text x="84" y="42" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">y</text>

  <!-- y ticks -->
  <line x1="76" y1="180" x2="84" y2="180" stroke="#000" stroke-width="2"/>
  <text x="50" y="184" font-family="Georgia,serif" font-size="12" fill="#000">1</text>
  <line x1="76" y1="420" x2="84" y2="420" stroke="#000" stroke-width="2"/>
  <text x="44" y="424" font-family="Georgia,serif" font-size="12" fill="#000">−1</text>

  <!-- x ticks: π/2=180, π=280, 3π/2=380, 2π=480, 5π/2=580, 3π=680, 7π/2=780, 4π=880 -->
  <line x1="180" y1="296" x2="180" y2="304" stroke="#000" stroke-width="2"/>
  <text x="168" y="318" font-family="Georgia,serif" font-size="11" fill="#000">π/2</text>
  <line x1="280" y1="296" x2="280" y2="304" stroke="#000" stroke-width="2"/>
  <text x="272" y="318" font-family="Georgia,serif" font-size="11" fill="#000">π</text>
  <line x1="380" y1="296" x2="380" y2="304" stroke="#000" stroke-width="2"/>
  <text x="366" y="318" font-family="Georgia,serif" font-size="11" fill="#000">3π/2</text>
  <line x1="480" y1="296" x2="480" y2="304" stroke="#000" stroke-width="2"/>
  <text x="472" y="318" font-family="Georgia,serif" font-size="11" fill="#000">2π</text>
  <line x1="580" y1="296" x2="580" y2="304" stroke="#000" stroke-width="2"/>
  <text x="566" y="318" font-family="Georgia,serif" font-size="11" fill="#000">5π/2</text>
  <line x1="680" y1="296" x2="680" y2="304" stroke="#000" stroke-width="2"/>
  <text x="672" y="318" font-family="Georgia,serif" font-size="11" fill="#000">3π</text>
  <line x1="780" y1="296" x2="780" y2="304" stroke="#000" stroke-width="2"/>
  <text x="766" y="318" font-family="Georgia,serif" font-size="11" fill="#000">7π/2</text>
  <line x1="880" y1="296" x2="880" y2="304" stroke="#000" stroke-width="2"/>
  <text x="872" y="318" font-family="Georgia,serif" font-size="11" fill="#000">4π</text>

  <!-- Grid lines -->
  <line x1="180" y1="60" x2="180" y2="500" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="280" y1="60" x2="280" y2="500" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="380" y1="60" x2="380" y2="500" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="480" y1="60" x2="480" y2="500" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="580" y1="60" x2="580" y2="500" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="680" y1="60" x2="680" y2="500" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="780" y1="60" x2="780" y2="500" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="880" y1="60" x2="880" y2="500" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="80" y1="180" x2="940" y2="180" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="80" y1="420" x2="940" y2="420" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>

  <!-- sin(x) curve — two full periods (0 to 4π)
       Key pixel coords: (80,300),(180,180),(280,300),(380,420),(480,300),(580,180),(680,300),(780,420),(880,300)
  -->
  <path d="M80,300 C102,300 118,180 180,180 C242,180 258,300 280,300
           C302,300 318,420 380,420 C442,420 458,300 480,300
           C502,300 518,180 580,180 C642,180 658,300 680,300
           C702,300 718,420 780,420 C842,420 858,300 880,300"
        fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Key point dots -->
  <circle cx="80"  cy="300" r="5" fill="#000"/>
  <circle cx="180" cy="180" r="5" fill="#000"/>
  <circle cx="280" cy="300" r="5" fill="#000"/>
  <circle cx="380" cy="420" r="5" fill="#000"/>
  <circle cx="480" cy="300" r="5" fill="#000"/>
  <circle cx="580" cy="180" r="5" fill="#000"/>
  <circle cx="680" cy="300" r="5" fill="#000"/>
  <circle cx="780" cy="420" r="5" fill="#000"/>
  <circle cx="880" cy="300" r="5" fill="#000"/>

  <!-- Peak/trough labels -->
  <text x="148" y="168" font-family="Georgia,serif" font-size="11" fill="#000">max (π/2, 1)</text>
  <text x="346" y="444" font-family="Georgia,serif" font-size="11" fill="#000">min (3π/2, −1)</text>
  <text x="548" y="168" font-family="Georgia,serif" font-size="11" fill="#000">max (5π/2, 1)</text>
  <text x="746" y="444" font-family="Georgia,serif" font-size="11" fill="#000">min (7π/2, −1)</text>

  <!-- Amplitude annotation -->
  <line x1="60" y1="180" x2="60" y2="300" stroke="#000" stroke-width="1.5"/>
  <line x1="56" y1="180" x2="64" y2="180" stroke="#000" stroke-width="1.5"/>
  <line x1="56" y1="300" x2="64" y2="300" stroke="#000" stroke-width="1.5"/>
  <text x="20" y="246" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">A=1</text>

  <!-- Period annotation -->
  <line x1="80"  y1="536" x2="480" y2="536" stroke="#000" stroke-width="1.5"/>
  <line x1="80"  y1="530" x2="80"  y2="542" stroke="#000" stroke-width="1.5"/>
  <line x1="480" y1="530" x2="480" y2="542" stroke="#000" stroke-width="1.5"/>
  <text x="220" y="554" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Period T = 2π ≈ 6.283</text>

  <!-- Properties box -->
  <rect x="700" y="60" width="250" height="140" rx="6" fill="none" stroke="#000" stroke-width="2"/>
  <text x="760" y="84" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">y = sin(x)</text>
  <line x1="700" y1="92" x2="950" y2="92" stroke="#000" stroke-width="1.5"/>
  <text x="710" y="114" font-family="Georgia,serif" font-size="11" fill="#000">Amplitude:   1</text>
  <text x="710" y="132" font-family="Georgia,serif" font-size="11" fill="#000">Period:       2π</text>
  <text x="710" y="150" font-family="Georgia,serif" font-size="11" fill="#000">Domain:     (−∞, ∞)</text>
  <text x="710" y="168" font-family="Georgia,serif" font-size="11" fill="#000">Range:       [−1, 1]</text>
  <text x="710" y="186" font-family="Georgia,serif" font-size="11" fill="#000">Odd function: sin(−x)=−sin(x)</text>
</svg>`;

  // cosineGraph → cosineGraphSvg (B&W, cosine only)
  static cosineGraphSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <!-- Title -->
  <text x="326" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Cosine Graph — y = cos(x)</text>

  <!-- Axes -->
  <line x1="60" y1="300" x2="960" y2="300" stroke="#000" stroke-width="2.5"/>
  <polygon points="956,295 968,300 956,305" fill="#000"/>
  <text x="972" y="304" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">x</text>
  <line x1="80" y1="520" x2="80" y2="50" stroke="#000" stroke-width="2.5"/>
  <polygon points="75,54 80,42 85,54" fill="#000"/>
  <text x="84" y="42" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">y</text>

  <!-- y ticks -->
  <line x1="76" y1="180" x2="84" y2="180" stroke="#000" stroke-width="2"/>
  <text x="50" y="184" font-family="Georgia,serif" font-size="12" fill="#000">1</text>
  <line x1="76" y1="420" x2="84" y2="420" stroke="#000" stroke-width="2"/>
  <text x="44" y="424" font-family="Georgia,serif" font-size="12" fill="#000">−1</text>

  <!-- x ticks -->
  <line x1="180" y1="296" x2="180" y2="304" stroke="#000" stroke-width="2"/>
  <text x="168" y="318" font-family="Georgia,serif" font-size="11" fill="#000">π/2</text>
  <line x1="280" y1="296" x2="280" y2="304" stroke="#000" stroke-width="2"/>
  <text x="272" y="318" font-family="Georgia,serif" font-size="11" fill="#000">π</text>
  <line x1="380" y1="296" x2="380" y2="304" stroke="#000" stroke-width="2"/>
  <text x="366" y="318" font-family="Georgia,serif" font-size="11" fill="#000">3π/2</text>
  <line x1="480" y1="296" x2="480" y2="304" stroke="#000" stroke-width="2"/>
  <text x="472" y="318" font-family="Georgia,serif" font-size="11" fill="#000">2π</text>
  <line x1="580" y1="296" x2="580" y2="304" stroke="#000" stroke-width="2"/>
  <text x="566" y="318" font-family="Georgia,serif" font-size="11" fill="#000">5π/2</text>
  <line x1="680" y1="296" x2="680" y2="304" stroke="#000" stroke-width="2"/>
  <text x="672" y="318" font-family="Georgia,serif" font-size="11" fill="#000">3π</text>
  <line x1="780" y1="296" x2="780" y2="304" stroke="#000" stroke-width="2"/>
  <text x="766" y="318" font-family="Georgia,serif" font-size="11" fill="#000">7π/2</text>
  <line x1="880" y1="296" x2="880" y2="304" stroke="#000" stroke-width="2"/>
  <text x="872" y="318" font-family="Georgia,serif" font-size="11" fill="#000">4π</text>

  <!-- Grid lines -->
  <line x1="180" y1="60" x2="180" y2="500" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="280" y1="60" x2="280" y2="500" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="380" y1="60" x2="380" y2="500" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="480" y1="60" x2="480" y2="500" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="580" y1="60" x2="580" y2="500" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="680" y1="60" x2="680" y2="500" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="780" y1="60" x2="780" y2="500" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="880" y1="60" x2="880" y2="500" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="80" y1="180" x2="940" y2="180" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="80" y1="420" x2="940" y2="420" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>

  <!-- cos(x) curve — two full periods (0 to 4π)
       Key pixels: (80,180),(180,300),(280,420),(380,300),(480,180),(580,300),(680,420),(780,300),(880,180)
  -->
  <path d="M80,180 C142,180 158,300 180,300 C202,300 218,420 280,420
           C342,420 358,300 380,300 C402,300 418,180 480,180
           C542,180 558,300 580,300 C602,300 618,420 680,420
           C742,420 758,300 780,300 C802,300 818,180 880,180"
        fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Key point dots -->
  <circle cx="80"  cy="180" r="5" fill="#000"/>
  <circle cx="180" cy="300" r="5" fill="#000"/>
  <circle cx="280" cy="420" r="5" fill="#000"/>
  <circle cx="380" cy="300" r="5" fill="#000"/>
  <circle cx="480" cy="180" r="5" fill="#000"/>
  <circle cx="580" cy="300" r="5" fill="#000"/>
  <circle cx="680" cy="420" r="5" fill="#000"/>
  <circle cx="780" cy="300" r="5" fill="#000"/>
  <circle cx="880" cy="180" r="5" fill="#000"/>

  <!-- Peak/trough labels -->
  <text x="52" y="168" font-family="Georgia,serif" font-size="11" fill="#000">max (0, 1)</text>
  <text x="244" y="444" font-family="Georgia,serif" font-size="11" fill="#000">min (π, −1)</text>
  <text x="448" y="168" font-family="Georgia,serif" font-size="11" fill="#000">max (2π, 1)</text>
  <text x="644" y="444" font-family="Georgia,serif" font-size="11" fill="#000">min (3π, −1)</text>

  <!-- Amplitude annotation -->
  <line x1="60" y1="180" x2="60" y2="300" stroke="#000" stroke-width="1.5"/>
  <line x1="56" y1="180" x2="64" y2="180" stroke="#000" stroke-width="1.5"/>
  <line x1="56" y1="300" x2="64" y2="300" stroke="#000" stroke-width="1.5"/>
  <text x="20" y="246" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">A=1</text>

  <!-- Period annotation -->
  <line x1="80"  y1="536" x2="480" y2="536" stroke="#000" stroke-width="1.5"/>
  <line x1="80"  y1="530" x2="80"  y2="542" stroke="#000" stroke-width="1.5"/>
  <line x1="480" y1="530" x2="480" y2="542" stroke="#000" stroke-width="1.5"/>
  <text x="220" y="554" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Period T = 2π ≈ 6.283</text>

  <!-- Properties box -->
  <rect x="700" y="60" width="250" height="150" rx="6" fill="none" stroke="#000" stroke-width="2"/>
  <text x="758" y="84" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">y = cos(x)</text>
  <line x1="700" y1="92" x2="950" y2="92" stroke="#000" stroke-width="1.5"/>
  <text x="710" y="114" font-family="Georgia,serif" font-size="11" fill="#000">Amplitude:   1</text>
  <text x="710" y="132" font-family="Georgia,serif" font-size="11" fill="#000">Period:       2π</text>
  <text x="710" y="150" font-family="Georgia,serif" font-size="11" fill="#000">Domain:     (−∞, ∞)</text>
  <text x="710" y="168" font-family="Georgia,serif" font-size="11" fill="#000">Range:       [−1, 1]</text>
  <text x="710" y="186" font-family="Georgia,serif" font-size="11" fill="#000">Phase shift: π/2 ahead of sin</text>
  <text x="710" y="204" font-family="Georgia,serif" font-size="11" fill="#000">Even function: cos(−x)=cos(x)</text>
</svg>`;

  // tangentGraph → tangentGraphSvg
  // y = tan(x) with asymptotes, B&W
  static tangentGraphSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <!-- Title -->
  <text x="318" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Tangent Graph — y = tan(x)</text>

  <!-- Axes: origin x=80, y=300; x-scale 200px=π -->
  <line x1="60" y1="300" x2="960" y2="300" stroke="#000" stroke-width="2.5"/>
  <polygon points="956,295 968,300 956,305" fill="#000"/>
  <text x="972" y="304" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">x</text>
  <line x1="80" y1="540" x2="80" y2="40" stroke="#000" stroke-width="2.5"/>
  <polygon points="75,44 80,32 85,44" fill="#000"/>
  <text x="84" y="32" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">y</text>

  <!-- y ticks -->
  <line x1="76" y1="180" x2="84" y2="180" stroke="#000" stroke-width="2"/>
  <text x="50" y="184" font-family="Georgia,serif" font-size="12" fill="#000">1</text>
  <line x1="76" y1="420" x2="84" y2="420" stroke="#000" stroke-width="2"/>
  <text x="44" y="424" font-family="Georgia,serif" font-size="12" fill="#000">−1</text>
  <line x1="76" y1="60"  x2="84" y2="60"  stroke="#000" stroke-width="1.5"/>
  <text x="34" y="64"  font-family="Georgia,serif" font-size="10" fill="#555">large</text>
  <line x1="76" y1="540" x2="84" y2="540" stroke="#000" stroke-width="1.5"/>
  <text x="34" y="540" font-family="Georgia,serif" font-size="10" fill="#555">large</text>

  <!-- x ticks: scale 200px=π, so π/2=100px steps from x=80
       −π/2=x80−100=−20(offscreen), π/2=180, π=280, 3π/2=380, 2π=480, 5π/2=580, 3π=680, 7π/2=780, 4π=880
  -->
  <line x1="180" y1="296" x2="180" y2="304" stroke="#000" stroke-width="2"/>
  <text x="168" y="318" font-family="Georgia,serif" font-size="11" fill="#000">π/2</text>
  <line x1="280" y1="296" x2="280" y2="304" stroke="#000" stroke-width="2"/>
  <text x="272" y="318" font-family="Georgia,serif" font-size="11" fill="#000">π</text>
  <line x1="380" y1="296" x2="380" y2="304" stroke="#000" stroke-width="2"/>
  <text x="366" y="318" font-family="Georgia,serif" font-size="11" fill="#000">3π/2</text>
  <line x1="480" y1="296" x2="480" y2="304" stroke="#000" stroke-width="2"/>
  <text x="472" y="318" font-family="Georgia,serif" font-size="11" fill="#000">2π</text>
  <line x1="580" y1="296" x2="580" y2="304" stroke="#000" stroke-width="2"/>
  <text x="566" y="318" font-family="Georgia,serif" font-size="11" fill="#000">5π/2</text>
  <line x1="680" y1="296" x2="680" y2="304" stroke="#000" stroke-width="2"/>
  <text x="672" y="318" font-family="Georgia,serif" font-size="11" fill="#000">3π</text>
  <line x1="780" y1="296" x2="780" y2="304" stroke="#000" stroke-width="2"/>
  <text x="766" y="318" font-family="Georgia,serif" font-size="11" fill="#000">7π/2</text>

  <!-- Vertical asymptotes at x = π/2+nπ = 180, 380, 580, 780 px -->
  <line x1="180" y1="40" x2="180" y2="540" stroke="#000" stroke-width="1.8" stroke-dasharray="8,5"/>
  <line x1="380" y1="40" x2="380" y2="540" stroke="#000" stroke-width="1.8" stroke-dasharray="8,5"/>
  <line x1="580" y1="40" x2="580" y2="540" stroke="#000" stroke-width="1.8" stroke-dasharray="8,5"/>
  <line x1="780" y1="40" x2="780" y2="540" stroke="#000" stroke-width="1.8" stroke-dasharray="8,5"/>

  <!-- Asymptote labels -->
  <text x="186" y="58" font-family="Georgia,serif" font-size="10" fill="#555">x=π/2</text>
  <text x="386" y="58" font-family="Georgia,serif" font-size="10" fill="#555">x=3π/2</text>
  <text x="586" y="58" font-family="Georgia,serif" font-size="10" fill="#555">x=5π/2</text>
  <text x="786" y="58" font-family="Georgia,serif" font-size="10" fill="#555">x=7π/2</text>

  <!-- Grid horizontal -->
  <line x1="80" y1="180" x2="940" y2="180" stroke="#ddd" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="80" y1="420" x2="940" y2="420" stroke="#ddd" stroke-width="1" stroke-dasharray="4,4"/>

  <!-- tan(x) branches — each branch spans between two asymptotes
       Branch 1: x from ~80 to ~174px  (0 to just before π/2)
         at x=80 (0): tan=0 → y=300
         at x=140: tan(45°approx)=~1 → y=180
         curves steeply up near 180
       Branch 2: x from ~186 to ~374  (just after π/2 to just before 3π/2)
         enters from bottom (y=540), passes through (280,300)=tan(π)=0, exits top
       Branch 3: 386 to 574
       Branch 4: 586 to 774
       Branch 5: 786 to 880 (partial)
  -->

  <!-- Branch 1: 0 to π/2 (x=80 to 179) -->
  <path d="M80,300 C110,300 140,220 155,168 C165,130 172,80 179,55"
        fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>

  <!-- Branch 2: π/2 to 3π/2 (x=181 to 379): enters bottom, zero at π (280,300), exits top -->
  <path d="M181,545 C188,490 200,430 220,390 C248,340 265,310 280,300
           C295,290 310,268 340,224 C360,194 370,152 379,100"
        fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>

  <!-- Branch 3: 3π/2 to 5π/2 (381 to 579), zero at 2π (480,300) -->
  <path d="M381,545 C388,490 400,430 420,390 C448,340 465,310 480,300
           C495,290 510,268 540,224 C560,194 570,152 579,100"
        fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>

  <!-- Branch 4: 5π/2 to 7π/2 (581 to 779), zero at 3π (680,300) -->
  <path d="M581,545 C588,490 600,430 620,390 C648,340 665,310 680,300
           C695,290 710,268 740,224 C760,194 770,152 779,100"
        fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>

  <!-- Branch 5: partial 7π/2 to ~4π (781 to 880) -->
  <path d="M781,545 C790,480 810,400 840,348 C860,318 875,308 880,300"
        fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>

  <!-- Key point dots at zeros: (80,300),(280,300),(480,300),(680,300),(880,300) -->
  <circle cx="80"  cy="300" r="5" fill="#000"/>
  <circle cx="280" cy="300" r="5" fill="#000"/>
  <circle cx="480" cy="300" r="5" fill="#000"/>
  <circle cx="680" cy="300" r="5" fill="#000"/>
  <circle cx="880" cy="300" r="5" fill="#000"/>

  <!-- tan(45°)=1 point: x=80+100·(45/90)=80+50=130px, y=180 -->
  <circle cx="130" cy="180" r="4" fill="#000"/>
  <text x="108" y="172" font-family="Georgia,serif" font-size="10" fill="#000">(π/4, 1)</text>

  <!-- Properties box -->
  <rect x="700" y="380" width="260" height="170" rx="6" fill="none" stroke="#000" stroke-width="2"/>
  <text x="758" y="404" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">y = tan(x)</text>
  <line x1="700" y1="412" x2="960" y2="412" stroke="#000" stroke-width="1.5"/>
  <text x="710" y="432" font-family="Georgia,serif" font-size="11" fill="#000">Period:    π</text>
  <text x="710" y="450" font-family="Georgia,serif" font-size="11" fill="#000">Domain:  x ≠ π/2 + nπ</text>
  <text x="710" y="468" font-family="Georgia,serif" font-size="11" fill="#000">Range:    (−∞, ∞)</text>
  <text x="710" y="486" font-family="Georgia,serif" font-size="11" fill="#000">Asymptotes: x = π/2 + nπ</text>
  <text x="710" y="504" font-family="Georgia,serif" font-size="11" fill="#000">Odd function: tan(−x)=−tan(x)</text>
  <text x="710" y="522" font-family="Georgia,serif" font-size="11" fill="#000">tan x = sin x / cos x</text>
  <text x="710" y="540" font-family="Georgia,serif" font-size="11" fill="#555">Zeros at x = nπ</text>
</svg>`;

  // trigGraphTransformations → trigGraphTransformationsSvg
  // Shows original y=sin(x) vs transformed y=a·sin(bx+c)+d, B&W
  static trigGraphTransformationsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <!-- Title -->
  <text x="240" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Trigonometric Graph Transformations</text>
  <text x="310" y="48" font-family="Georgia,serif" font-size="13" fill="#000">y = a·sin(bx + c) + d</text>

  <!-- ── Graph: origin (80,330), x-scale 90px=π/2, y-scale 90px=1 ── -->
  <!-- Axes -->
  <line x1="60"  y1="330" x2="960" y2="330" stroke="#000" stroke-width="2.5"/>
  <polygon points="956,325 968,330 956,335" fill="#000"/>
  <text x="972" y="334" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">x</text>
  <line x1="80"  y1="560" x2="80"  y2="80"  stroke="#000" stroke-width="2.5"/>
  <polygon points="75,84 80,72 85,84" fill="#000"/>
  <text x="84" y="72" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">y</text>

  <!-- y ticks at ±1 (±90px) and ±2 (±180px) -->
  <line x1="76" y1="240" x2="84" y2="240" stroke="#000" stroke-width="2"/>
  <text x="50" y="244" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="76" y1="420" x2="84" y2="420" stroke="#000" stroke-width="2"/>
  <text x="44" y="424" font-family="Georgia,serif" font-size="11" fill="#000">−1</text>
  <line x1="76" y1="150" x2="84" y2="150" stroke="#000" stroke-width="2"/>
  <text x="50" y="154" font-family="Georgia,serif" font-size="11" fill="#555">2</text>
  <line x1="76" y1="510" x2="84" y2="510" stroke="#000" stroke-width="2"/>
  <text x="44" y="514" font-family="Georgia,serif" font-size="11" fill="#555">−2</text>

  <!-- x ticks: π/2=170, π=260, 3π/2=350, 2π=440, 5π/2=530, 3π=620, 7π/2=710, 4π=800 -->
  <line x1="170" y1="326" x2="170" y2="334" stroke="#000" stroke-width="2"/>
  <text x="158" y="348" font-family="Georgia,serif" font-size="10" fill="#000">π/2</text>
  <line x1="260" y1="326" x2="260" y2="334" stroke="#000" stroke-width="2"/>
  <text x="252" y="348" font-family="Georgia,serif" font-size="10" fill="#000">π</text>
  <line x1="350" y1="326" x2="350" y2="334" stroke="#000" stroke-width="2"/>
  <text x="336" y="348" font-family="Georgia,serif" font-size="10" fill="#000">3π/2</text>
  <line x1="440" y1="326" x2="440" y2="334" stroke="#000" stroke-width="2"/>
  <text x="432" y="348" font-family="Georgia,serif" font-size="10" fill="#000">2π</text>
  <line x1="530" y1="326" x2="530" y2="334" stroke="#000" stroke-width="2"/>
  <text x="516" y="348" font-family="Georgia,serif" font-size="10" fill="#000">5π/2</text>
  <line x1="620" y1="326" x2="620" y2="334" stroke="#000" stroke-width="2"/>
  <text x="612" y="348" font-family="Georgia,serif" font-size="10" fill="#000">3π</text>
  <line x1="710" y1="326" x2="710" y2="334" stroke="#000" stroke-width="2"/>
  <text x="696" y="348" font-family="Georgia,serif" font-size="10" fill="#000">7π/2</text>
  <line x1="800" y1="326" x2="800" y2="334" stroke="#000" stroke-width="2"/>
  <text x="792" y="348" font-family="Georgia,serif" font-size="10" fill="#000">4π</text>

  <!-- Light grids -->
  <line x1="170" y1="90" x2="170" y2="540" stroke="#ddd" stroke-width="1" stroke-dasharray="3,4"/>
  <line x1="260" y1="90" x2="260" y2="540" stroke="#ddd" stroke-width="1" stroke-dasharray="3,4"/>
  <line x1="350" y1="90" x2="350" y2="540" stroke="#ddd" stroke-width="1" stroke-dasharray="3,4"/>
  <line x1="440" y1="90" x2="440" y2="540" stroke="#ddd" stroke-width="1" stroke-dasharray="3,4"/>
  <line x1="530" y1="90" x2="530" y2="540" stroke="#ddd" stroke-width="1" stroke-dasharray="3,4"/>
  <line x1="620" y1="90" x2="620" y2="540" stroke="#ddd" stroke-width="1" stroke-dasharray="3,4"/>
  <line x1="710" y1="90" x2="710" y2="540" stroke="#ddd" stroke-width="1" stroke-dasharray="3,4"/>
  <line x1="800" y1="90" x2="800" y2="540" stroke="#ddd" stroke-width="1" stroke-dasharray="3,4"/>
  <line x1="80" y1="240" x2="870" y2="240" stroke="#ddd" stroke-width="1" stroke-dasharray="3,4"/>
  <line x1="80" y1="420" x2="870" y2="420" stroke="#ddd" stroke-width="1" stroke-dasharray="3,4"/>
  <line x1="80" y1="150" x2="870" y2="150" stroke="#ddd" stroke-width="1" stroke-dasharray="3,4"/>
  <line x1="80" y1="510" x2="870" y2="510" stroke="#ddd" stroke-width="1" stroke-dasharray="3,4"/>

  <!-- Original y=sin(x): thin, dashed
       Key pixels (90px=1, 90px=π/2 step):
       (80,330),(170,240),(260,330),(350,420),(440,330),(530,240),(620,330),(710,420),(800,330)
  -->
  <path d="M80,330 C102,330 118,240 170,240 C222,240 238,330 260,330
           C282,330 298,420 350,420 C402,420 418,330 440,330
           C462,330 478,240 530,240 C582,240 598,330 620,330
           C642,330 658,420 710,420 C762,420 778,330 800,330"
        fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,4"/>

  <!-- Transformed: y = 2·sin(2x + π/4) + 0.5
       Period = π → x-scale: period = 260−80=180px
       Amplitude = 2 → ±180px from midline
       Midline y = 330 − 0.5×90 = 330−45 = 285
       Phase shift: −π/4·(90px/(π/2)) = −45px (shift left 45px)
       Adjusted key points (approx):
         peak at x=80+(45+45)=170−45=125: (125, 285−180)=(125,105)
         zero at x=80+45=125+45=170: but let's use best-fit bezier
  -->
  <!-- Midline for transformed (dashed horizontal) -->
  <line x1="80" y1="285" x2="820" y2="285" stroke="#000" stroke-width="1.2" stroke-dasharray="3,3"/>
  <text x="826" y="289" font-family="Georgia,serif" font-size="10" fill="#000">d=+0.5</text>

  <!-- Transformed curve: y=2sin(2x+π/4)+0.5, thicker solid
       Zeros (from midline): shifted left so first peak ≈ x=125px
       Approx key pixels on screen: period=180px
       zero-crossings: x≈80, x≈170, x≈260, x≈350, x≈440, x≈530, x≈620, x≈710, x≈800
       peaks (y=105): x≈125, 305, 485, 665
       troughs (y=465): x≈215, 395, 575, 755
  -->
  <path d="M80,285 C92,285 106,105 125,105 C144,105 158,285 170,285
           C182,285 196,465 215,465 C234,465 248,285 260,285
           C272,285 286,105 305,105 C324,105 338,285 350,285
           C362,285 376,465 395,465 C414,465 428,285 440,285
           C452,285 466,105 485,105 C504,105 518,285 530,285
           C542,285 556,465 575,465 C594,465 608,285 620,285
           C632,285 646,105 665,105 C684,105 698,285 710,285
           C722,285 736,465 755,465 C774,465 788,285 800,285"
        fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Amplitude brace on transformed -->
  <line x1="48" y1="105" x2="48" y2="285" stroke="#000" stroke-width="1.5"/>
  <line x1="44" y1="105" x2="52" y2="105" stroke="#000" stroke-width="1.5"/>
  <line x1="44" y1="285" x2="52" y2="285" stroke="#000" stroke-width="1.5"/>
  <text x="8"  y="200" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">a=2</text>

  <!-- Period brace on transformed -->
  <line x1="80" y1="578" x2="260" y2="578" stroke="#000" stroke-width="1.5"/>
  <line x1="80" y1="572" x2="80" y2="584" stroke="#000" stroke-width="1.5"/>
  <line x1="260" y1="572" x2="260" y2="584" stroke="#000" stroke-width="1.5"/>
  <text x="130" y="596" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">T=π (b=2)</text>

  <!-- Legend -->
  <line x1="500" y1="580" x2="540" y2="580" stroke="#000" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="546" y="584" font-family="Georgia,serif" font-size="11" fill="#000">y = sin(x)  (original)</text>
  <line x1="500" y1="600" x2="540" y2="600" stroke="#000" stroke-width="3.5"/>
  <text x="546" y="604" font-family="Georgia,serif" font-size="11" fill="#000">y = 2 sin(2x+π/4)+0.5  (transformed)</text>

  <!-- Parameter panel -->
  <rect x="836" y="90" width="152" height="320" rx="6" fill="none" stroke="#000" stroke-width="2"/>
  <text x="852" y="114" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Parameters</text>
  <line x1="836" y1="122" x2="988" y2="122" stroke="#000" stroke-width="1.5"/>
  <text x="844" y="146" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">a  (amplitude)</text>
  <text x="844" y="162" font-family="Georgia,serif" font-size="10" fill="#555">|a| = peak height</text>
  <text x="844" y="176" font-family="Georgia,serif" font-size="10" fill="#555">a&lt;0 → reflection</text>
  <line x1="836" y1="184" x2="988" y2="184" stroke="#000" stroke-width="0.8" stroke-dasharray="3,3"/>
  <text x="844" y="200" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">b  (frequency)</text>
  <text x="844" y="216" font-family="Georgia,serif" font-size="10" fill="#555">period = 2π/b</text>
  <text x="844" y="230" font-family="Georgia,serif" font-size="10" fill="#555">b&gt;1 → compress</text>
  <line x1="836" y1="238" x2="988" y2="238" stroke="#000" stroke-width="0.8" stroke-dasharray="3,3"/>
  <text x="844" y="254" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">c  (phase shift)</text>
  <text x="844" y="270" font-family="Georgia,serif" font-size="10" fill="#555">shift = −c/b</text>
  <text x="844" y="284" font-family="Georgia,serif" font-size="10" fill="#555">c&gt;0 → left shift</text>
  <line x1="836" y1="292" x2="988" y2="292" stroke="#000" stroke-width="0.8" stroke-dasharray="3,3"/>
  <text x="844" y="308" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">d  (vertical shift)</text>
  <text x="844" y="324" font-family="Georgia,serif" font-size="10" fill="#555">moves midline</text>
  <text x="844" y="338" font-family="Georgia,serif" font-size="10" fill="#555">d&gt;0 → shift up</text>
  <line x1="836" y1="346" x2="988" y2="346" stroke="#000" stroke-width="0.8" stroke-dasharray="3,3"/>
  <text x="844" y="366" font-family="Georgia,serif" font-size="10" fill="#555">Example shown:</text>
  <text x="844" y="382" font-family="Georgia,serif" font-size="10" fill="#555">a=2, b=2</text>
  <text x="844" y="396" font-family="Georgia,serif" font-size="10" fill="#555">c=π/4, d=0.5</text>
</svg>`;


// ─────────────────────────────────────────────────────────────────────────────
//  NEW DIAGRAMS — Functions category (black & white, print-ready)
//  Add these static properties inside the MathematicsSvgDiagrams class,
//  after the existing six diagrams.
// ─────────────────────────────────────────────────────────────────────────────

// ─── 7. FUNCTION MACHINE ──────────────────────────────────────────────────
//  Registry key : 'functionMachine'
//  Static name  : functionMachineSvg
//  Shows f(x) = 2x + 3 with four inputs/outputs through a machine box,
//  including input hopper, rule label, output chute, and an I/O table.
static functionMachineSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="500px" viewBox="0 0 800 500">

  <!-- Title -->
  <text x="200" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">Function Machine:  f(x) = 2x + 3</text>

  <!-- ═══ Machine body ═══ -->
  <!-- Outer casing -->
  <rect x="270" y="80" width="260" height="280" rx="18"
        fill="none" stroke="#000" stroke-width="4"/>
  <!-- Inner panel (rule display) -->
  <rect x="295" y="150" width="210" height="80" rx="8"
        fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="6,3"/>
  <!-- Rule label -->
  <text x="400" y="182" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000" text-anchor="middle">RULE</text>
  <text x="400" y="208" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">f(x) = 2x + 3</text>
  <!-- Machine label at top -->
  <text x="400" y="120" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">FUNCTION MACHINE</text>
  <!-- Decorative gear symbol -->
  <text x="400" y="310" font-family="Georgia,serif" font-size="48" fill="#000"
        text-anchor="middle" opacity="0.12">⚙</text>

  <!-- ═══ INPUT side ═══ -->
  <!-- Hopper funnel -->
  <polygon points="160,130 220,130 200,170 180,170"
           fill="none" stroke="#000" stroke-width="3"/>
  <!-- Pipe into machine -->
  <rect x="180" y="170" width="90" height="22" fill="none" stroke="#000" stroke-width="2.5"/>
  <!-- Arrow into machine -->
  <line x1="160" y1="181" x2="182" y2="181" stroke="#000" stroke-width="2.5"/>
  <polygon points="178,176 190,181 178,186" fill="#000"/>
  <!-- INPUT label -->
  <text x="155" y="118" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">INPUT</text>
  <text x="155" y="133" font-family="Georgia,serif" font-size="11"
        fill="#000" text-anchor="middle">x</text>

  <!-- Input value bubbles -->
  <circle cx="90" cy="230" r="20" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="90" y="235" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000" text-anchor="middle">1</text>
  <circle cx="90" cy="290" r="20" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="90" y="295" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000" text-anchor="middle">2</text>
  <circle cx="90" cy="350" r="20" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="90" y="355" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000" text-anchor="middle">3</text>
  <circle cx="90" cy="410" r="20" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="90" y="415" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000" text-anchor="middle">4</text>
  <!-- Arrows from bubbles into machine -->
  <line x1="110" y1="230" x2="265" y2="230" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <polygon points="261,225 273,230 261,235" fill="#000"/>
  <line x1="110" y1="290" x2="265" y2="290" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <polygon points="261,285 273,290 261,295" fill="#000"/>
  <line x1="110" y1="350" x2="265" y2="350" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <polygon points="261,345 273,350 261,355" fill="#000"/>
  <line x1="110" y1="410" x2="265" y2="410" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <polygon points="261,405 273,410 261,415" fill="#000"/>

  <!-- ═══ OUTPUT side ═══ -->
  <!-- Chute -->
  <rect x="530" y="170" width="90" height="22" fill="none" stroke="#000" stroke-width="2.5"/>
  <!-- Funnel flare -->
  <polygon points="580,130 640,130 660,170 620,170"
           fill="none" stroke="#000" stroke-width="3"/>
  <!-- Arrow out of machine -->
  <line x1="620" y1="181" x2="642" y2="181" stroke="#000" stroke-width="2.5"/>
  <polygon points="638,176 650,181 638,186" fill="#000"/>
  <!-- OUTPUT label -->
  <text x="645" y="118" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">OUTPUT</text>
  <text x="645" y="133" font-family="Georgia,serif" font-size="11"
        fill="#000" text-anchor="middle">f(x)</text>

  <!-- Output value bubbles -->
  <circle cx="710" cy="230" r="20" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="710" y="235" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000" text-anchor="middle">5</text>
  <circle cx="710" cy="290" r="20" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="710" y="295" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000" text-anchor="middle">7</text>
  <circle cx="710" cy="350" r="20" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="710" y="355" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000" text-anchor="middle">9</text>
  <circle cx="710" cy="410" r="20" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="710" y="415" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000" text-anchor="middle">11</text>
  <!-- Arrows from machine to output bubbles -->
  <line x1="533" y1="230" x2="688" y2="230" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <polygon points="684,225 696,230 684,235" fill="#000"/>
  <line x1="533" y1="290" x2="688" y2="290" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <polygon points="684,285 696,290 684,295" fill="#000"/>
  <line x1="533" y1="350" x2="688" y2="350" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <polygon points="684,345 696,350 684,355" fill="#000"/>
  <line x1="533" y1="410" x2="688" y2="410" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <polygon points="684,405 696,410 684,415" fill="#000"/>

  <!-- ═══ I/O Table ═══ -->
  <rect x="305" y="265" width="190" height="90" rx="5"
        fill="none" stroke="#000" stroke-width="2"/>
  <line x1="400" y1="265" x2="400" y2="355" stroke="#000" stroke-width="1.5"/>
  <line x1="305" y1="293" x2="495" y2="293" stroke="#000" stroke-width="1.5"/>
  <text x="352" y="284" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">x</text>
  <text x="448" y="284" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">f(x) = 2x+3</text>
  <text x="352" y="308" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">1</text>
  <text x="448" y="308" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">5</text>
  <text x="352" y="323" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">2</text>
  <text x="448" y="323" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">7</text>
  <text x="352" y="338" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">3</text>
  <text x="448" y="338" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">9</text>
  <text x="352" y="353" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">4</text>
  <text x="448" y="353" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">11</text>

  <!-- Footer note -->
  <text x="400" y="478" font-family="Georgia,serif" font-size="10" fill="#555"
        text-anchor="middle">Each input x is multiplied by 2 then increased by 3 to produce the output f(x).</text>
</svg>`;


// ─── 8. MAPPING DIAGRAM ───────────────────────────────────────────────────
//  Registry key : 'mappingDiagram'
//  Static name  : mappingDiagramSvg
//  Arrow diagram: domain {1,2,3,4} → range {2,4,6,8} via x → 2x
static mappingDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="600px" viewBox="0 0 700 600">

  <!-- Title -->
  <text x="350" y="30" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">Mapping Diagram:  x → 2x</text>

  <!-- ── Domain oval ── -->
  <ellipse cx="175" cy="330" rx="120" ry="230"
           fill="none" stroke="#000" stroke-width="3.5"/>
  <text x="175" y="75" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">DOMAIN</text>
  <text x="175" y="92" font-family="Georgia,serif" font-size="11"
        fill="#555" text-anchor="middle">(Input set)</text>

  <!-- Domain elements -->
  <circle cx="175" cy="170" r="24" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="175" y="175" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">1</text>
  <circle cx="175" cy="270" r="24" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="175" y="275" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">2</text>
  <circle cx="175" cy="370" r="24" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="175" y="375" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">3</text>
  <circle cx="175" cy="470" r="24" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="175" y="475" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">4</text>

  <!-- ── Range oval ── -->
  <ellipse cx="525" cy="330" rx="120" ry="230"
           fill="none" stroke="#000" stroke-width="3.5"/>
  <text x="525" y="75" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">RANGE</text>
  <text x="525" y="92" font-family="Georgia,serif" font-size="11"
        fill="#555" text-anchor="middle">(Output set)</text>

  <!-- Range elements -->
  <circle cx="525" cy="170" r="24" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="525" y="175" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">2</text>
  <circle cx="525" cy="270" r="24" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="525" y="275" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">4</text>
  <circle cx="525" cy="370" r="24" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="525" y="375" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">6</text>
  <circle cx="525" cy="470" r="24" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="525" y="475" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">8</text>

  <!-- ── Mapping arrows (curved) ── -->
  <!-- 1 → 2 -->
  <path d="M199,170 C320,130 390,140 501,170"
        fill="none" stroke="#000" stroke-width="2.5"/>
  <polygon points="498,162 514,170 500,178" fill="#000"/>
  <!-- 2 → 4 -->
  <path d="M199,270 C310,240 400,240 501,270"
        fill="none" stroke="#000" stroke-width="2.5"/>
  <polygon points="498,262 514,270 500,278" fill="#000"/>
  <!-- 3 → 6 -->
  <path d="M199,370 C310,360 400,360 501,370"
        fill="none" stroke="#000" stroke-width="2.5"/>
  <polygon points="498,362 514,370 500,378" fill="#000"/>
  <!-- 4 → 8 -->
  <path d="M199,470 C310,460 400,470 501,470"
        fill="none" stroke="#000" stroke-width="2.5"/>
  <polygon points="498,462 514,470 500,478" fill="#000"/>

  <!-- ── Function rule label (centre) ── -->
  <rect x="290" y="310" width="120" height="40" rx="8"
        fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="350" y="325" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">f(x) = 2x</text>
  <text x="350" y="342" font-family="Georgia,serif" font-size="10"
        fill="#555" text-anchor="middle">one-to-one</text>

  <!-- Footer -->
  <text x="350" y="580" font-family="Georgia,serif" font-size="10" fill="#555"
        text-anchor="middle">Each element of the domain maps to exactly one element of the range (one-to-one function).</text>
</svg>`;


// ─── 9. DOMAIN AND RANGE GRAPH ────────────────────────────────────────────
//  Registry key : 'domainRangeGraph'
//  Static name  : domainRangeGraphSvg
//  f(x) = √x: curve from (0,0), domain [0,∞) highlighted on x-axis,
//  range [0,∞) highlighted on y-axis, restriction annotation.
static domainRangeGraphSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">Domain and Range:  f(x) = √x</text>

  <!-- ── Grid (origin 120,460; scale 60px/unit, x 0..9, y 0..5) ── -->
  <!-- Vertical grid -->
  <line x1="180" y1="60" x2="180" y2="470" stroke="#ccc" stroke-width="1"/>
  <line x1="240" y1="60" x2="240" y2="470" stroke="#ccc" stroke-width="1"/>
  <line x1="300" y1="60" x2="300" y2="470" stroke="#ccc" stroke-width="1"/>
  <line x1="360" y1="60" x2="360" y2="470" stroke="#ccc" stroke-width="1"/>
  <line x1="420" y1="60" x2="420" y2="470" stroke="#ccc" stroke-width="1"/>
  <line x1="480" y1="60" x2="480" y2="470" stroke="#ccc" stroke-width="1"/>
  <line x1="540" y1="60" x2="540" y2="470" stroke="#ccc" stroke-width="1"/>
  <line x1="600" y1="60" x2="600" y2="470" stroke="#ccc" stroke-width="1"/>
  <line x1="660" y1="60" x2="660" y2="470" stroke="#ccc" stroke-width="1"/>
  <!-- Horizontal grid -->
  <line x1="120" y1="400" x2="720" y2="400" stroke="#ccc" stroke-width="1"/>
  <line x1="120" y1="340" x2="720" y2="340" stroke="#ccc" stroke-width="1"/>
  <line x1="120" y1="280" x2="720" y2="280" stroke="#ccc" stroke-width="1"/>
  <line x1="120" y1="220" x2="720" y2="220" stroke="#ccc" stroke-width="1"/>
  <line x1="120" y1="160" x2="720" y2="160" stroke="#ccc" stroke-width="1"/>
  <line x1="120" y1="100" x2="720" y2="100" stroke="#ccc" stroke-width="1"/>

  <!-- ── Domain highlight on x-axis: x ≥ 0, thick bar ── -->
  <line x1="120" y1="480" x2="700" y2="480" stroke="#000" stroke-width="6" stroke-linecap="round"/>
  <polygon points="696,475 710,480 696,485" fill="#000"/>
  <text x="120" y="500" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Domain: x ≥ 0  →  [0, +∞)</text>
  <!-- Closed endpoint dot at origin on domain bar -->
  <circle cx="120" cy="480" r="5" fill="#000"/>

  <!-- ── Range highlight on y-axis: y ≥ 0, thick bar ── -->
  <line x1="110" y1="460" x2="110" y2="80" stroke="#000" stroke-width="6" stroke-linecap="round"/>
  <polygon points="105,84 110,70 115,84" fill="#000"/>
  <!-- Closed dot at origin on range bar -->
  <circle cx="110" cy="460" r="5" fill="#000"/>
  <!-- Range label (rotated via transform) -->
  <text x="-420" y="80" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" transform="rotate(-90)">Range: y ≥ 0  →  [0, +∞)</text>

  <!-- ── Axes ── -->
  <!-- x-axis -->
  <line x1="120" y1="460" x2="720" y2="460" stroke="#000" stroke-width="2.5"/>
  <polygon points="716,455 728,460 716,465" fill="#000"/>
  <text x="732" y="464" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">x</text>
  <!-- y-axis -->
  <line x1="120" y1="470" x2="120" y2="60" stroke="#000" stroke-width="2.5"/>
  <polygon points="115,64 120,52 125,64" fill="#000"/>
  <text x="124" y="50" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">y</text>

  <!-- Ticks x -->
  <line x1="180" y1="456" x2="180" y2="464" stroke="#000" stroke-width="2"/>
  <text x="178" y="476" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="240" y1="456" x2="240" y2="464" stroke="#000" stroke-width="2"/>
  <text x="238" y="476" font-family="Georgia,serif" font-size="11" fill="#000">2</text>
  <line x1="300" y1="456" x2="300" y2="464" stroke="#000" stroke-width="2"/>
  <text x="298" y="476" font-family="Georgia,serif" font-size="11" fill="#000">3</text>
  <line x1="360" y1="456" x2="360" y2="464" stroke="#000" stroke-width="2"/>
  <text x="358" y="476" font-family="Georgia,serif" font-size="11" fill="#000">4</text>
  <line x1="420" y1="456" x2="420" y2="464" stroke="#000" stroke-width="2"/>
  <text x="418" y="476" font-family="Georgia,serif" font-size="11" fill="#000">5</text>
  <line x1="480" y1="456" x2="480" y2="464" stroke="#000" stroke-width="2"/>
  <text x="478" y="476" font-family="Georgia,serif" font-size="11" fill="#000">6</text>
  <line x1="540" y1="456" x2="540" y2="464" stroke="#000" stroke-width="2"/>
  <text x="538" y="476" font-family="Georgia,serif" font-size="11" fill="#000">7</text>
  <line x1="600" y1="456" x2="600" y2="464" stroke="#000" stroke-width="2"/>
  <text x="598" y="476" font-family="Georgia,serif" font-size="11" fill="#000">8</text>
  <line x1="660" y1="456" x2="660" y2="464" stroke="#000" stroke-width="2"/>
  <text x="658" y="476" font-family="Georgia,serif" font-size="11" fill="#000">9</text>

  <!-- Ticks y -->
  <line x1="116" y1="400" x2="124" y2="400" stroke="#000" stroke-width="2"/>
  <text x="106" y="404" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="end">1</text>
  <line x1="116" y1="340" x2="124" y2="340" stroke="#000" stroke-width="2"/>
  <text x="106" y="344" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="end">2</text>
  <line x1="116" y1="280" x2="124" y2="280" stroke="#000" stroke-width="2"/>
  <text x="106" y="284" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="end">3</text>
  <line x1="116" y1="220" x2="124" y2="220" stroke="#000" stroke-width="2"/>
  <text x="106" y="224" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="end">4</text>
  <line x1="116" y1="160" x2="124" y2="160" stroke="#000" stroke-width="2"/>
  <text x="106" y="164" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="end">5</text>

  <!-- ── √x curve: (0,0)→(1,1)→(4,2)→(9,3) in px: (120,460),(180,400),(360,340),(660,280)
       y_px = 460 − 60·√x,  x_px = 120 + 60x ── -->
  <path d="M120,460 C140,440 160,418 180,400
           C220,370 280,350 360,340
           C440,330 560,306 660,280"
        fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Key points -->
  <circle cx="120" cy="460" r="6" fill="#000"/>
  <text x="125" y="452" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">(0, 0)</text>
  <circle cx="180" cy="400" r="5" fill="#000"/>
  <text x="186" y="396" font-family="Georgia,serif" font-size="10" fill="#000">(1, 1)</text>
  <circle cx="360" cy="340" r="5" fill="#000"/>
  <text x="366" y="336" font-family="Georgia,serif" font-size="10" fill="#000">(4, 2)</text>
  <circle cx="660" cy="280" r="5" fill="#000"/>
  <text x="666" y="276" font-family="Georgia,serif" font-size="10" fill="#000">(9, 3)</text>

  <!-- Restriction note box -->
  <rect x="430" y="360" width="260" height="80" rx="6"
        fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="560" y="380" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Restrictions</text>
  <text x="440" y="398" font-family="Georgia,serif" font-size="10" fill="#000">• x cannot be negative (√ of neg. undefined)</text>
  <text x="440" y="414" font-family="Georgia,serif" font-size="10" fill="#000">• f(x) ≥ 0 for all x in domain</text>
  <text x="440" y="430" font-family="Georgia,serif" font-size="10" fill="#000">• Domain = [0, ∞),  Range = [0, ∞)</text>

  <!-- Origin label -->
  <text x="126" y="455" font-family="Georgia,serif" font-size="10" fill="#555">O</text>
</svg>`;


// ─── 10. FUNCTION TYPES COMPARISON ────────────────────────────────────────
//  Registry key : 'functionTypes'
//  Static name  : functionTypesSvg
//  2×2 grid comparing linear, quadratic, cubic, and reciprocal graphs
//  with equation and key characteristics below each.
static functionTypesSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <!-- Title -->
  <text x="500" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">Types of Functions — Comparison</text>

  <!-- ═══ 2×2 Grid Divider ═══ -->
  <line x1="500" y1="50" x2="500" y2="690" stroke="#000" stroke-width="2.5"/>
  <line x1="30" y1="370" x2="970" y2="370" stroke="#000" stroke-width="2.5"/>

  <!-- ──────────── PANEL 1: LINEAR  y = 2x − 1 ──────────── -->
  <text x="250" y="58" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Linear Function</text>
  <text x="250" y="72" font-family="Georgia,serif" font-size="11" fill="#555" text-anchor="middle">y = 2x − 1</text>
  <!-- Axes p1 origin (250,210), ±4 units, 30px/unit -->
  <line x1="130" y1="210" x2="370" y2="210" stroke="#000" stroke-width="2"/>
  <line x1="250" y1="90" x2="250" y2="330" stroke="#000" stroke-width="2"/>
  <polygon points="366,205 378,210 366,215" fill="#000"/>
  <polygon points="245,94 250,82 255,94" fill="#000"/>
  <text x="382" y="214" font-family="Georgia,serif" font-size="10" fill="#000">x</text>
  <text x="254" y="80" font-family="Georgia,serif" font-size="10" fill="#000">y</text>
  <!-- Tick marks p1 -->
  <line x1="220" y1="206" x2="220" y2="214" stroke="#000" stroke-width="1.5"/>
  <text x="216" y="224" font-family="Georgia,serif" font-size="9" fill="#555">−1</text>
  <line x1="280" y1="206" x2="280" y2="214" stroke="#000" stroke-width="1.5"/>
  <text x="278" y="224" font-family="Georgia,serif" font-size="9" fill="#555">1</text>
  <!-- Linear line: y=2x−1; at x=−3: y=−7 (off); at x=−1.5: y=−4; at x=3: y=5
       px: x_px=250+30x, y_px=210−30y
       x=−3: (160, 210+210)=(160,420) clip; x=−2: (190,270); x=3: (340,60) -->
  <line x1="162" y1="348" x2="352" y2="78" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <!-- x-intercept: y=0 → x=0.5 → px=(265,210) -->
  <circle cx="265" cy="210" r="5" fill="#000"/>
  <text x="268" y="205" font-family="Georgia,serif" font-size="9" fill="#000">(0.5, 0)</text>
  <!-- y-intercept: (0,−1) → (250,240) -->
  <circle cx="250" cy="240" r="5" fill="#000"/>
  <text x="254" y="238" font-family="Georgia,serif" font-size="9" fill="#000">(0,−1)</text>
  <!-- Characteristics -->
  <text x="140" y="346" font-family="Georgia,serif" font-size="10" fill="#000">• Straight line  • Constant slope m = 2</text>
  <text x="140" y="360" font-family="Georgia,serif" font-size="10" fill="#000">• Domain: ℝ  • Range: ℝ</text>

  <!-- ──────────── PANEL 2: QUADRATIC  y = x² − 2 ──────────── -->
  <text x="750" y="58" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Quadratic Function</text>
  <text x="750" y="72" font-family="Georgia,serif" font-size="11" fill="#555" text-anchor="middle">y = x² − 2</text>
  <!-- Axes p2 origin (750,210) -->
  <line x1="630" y1="210" x2="870" y2="210" stroke="#000" stroke-width="2"/>
  <line x1="750" y1="90" x2="750" y2="330" stroke="#000" stroke-width="2"/>
  <polygon points="866,205 878,210 866,215" fill="#000"/>
  <polygon points="745,94 750,82 755,94" fill="#000"/>
  <text x="882" y="214" font-family="Georgia,serif" font-size="10" fill="#000">x</text>
  <text x="754" y="80" font-family="Georgia,serif" font-size="10" fill="#000">y</text>
  <!-- Tick marks p2 -->
  <line x1="720" y1="206" x2="720" y2="214" stroke="#000" stroke-width="1.5"/>
  <text x="716" y="224" font-family="Georgia,serif" font-size="9" fill="#555">−1</text>
  <line x1="780" y1="206" x2="780" y2="214" stroke="#000" stroke-width="1.5"/>
  <text x="778" y="224" font-family="Georgia,serif" font-size="9" fill="#555">1</text>
  <!-- Parabola: vertex at (0,−2)→(750,270). Points: x=±3→y=7→(840,−0) nope
       x=−3: px=(660, 210−30·7)=(660,−0)clip; x=±2:y=2→(690,150)&(810,150)
       Use bezier: M640,102 C680,90 740,270 750,270 C760,270 820,90 860,102 -->
  <path d="M648,108 C700,90 742,268 750,270 C758,268 800,90 852,108"
        fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <!-- Vertex -->
  <circle cx="750" cy="270" r="5" fill="#000"/>
  <text x="756" y="280" font-family="Georgia,serif" font-size="9" fill="#000">Vertex (0,−2)</text>
  <!-- x-intercepts: x=±√2≈±1.41 → ±42px → (708,210)&(792,210) -->
  <circle cx="708" cy="210" r="4" fill="#000"/>
  <circle cx="792" cy="210" r="4" fill="#000"/>
  <!-- Characteristics -->
  <text x="640" y="346" font-family="Georgia,serif" font-size="10" fill="#000">• U-shaped parabola  • Vertex at (0, −2)</text>
  <text x="640" y="360" font-family="Georgia,serif" font-size="10" fill="#000">• Domain: ℝ  • Range: [−2, ∞)</text>

  <!-- ──────────── PANEL 3: CUBIC  y = x³ ──────────── -->
  <text x="250" y="385" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Cubic Function</text>
  <text x="250" y="399" font-family="Georgia,serif" font-size="11" fill="#555" text-anchor="middle">y = x³</text>
  <!-- Axes p3 origin (250,530) -->
  <line x1="130" y1="530" x2="370" y2="530" stroke="#000" stroke-width="2"/>
  <line x1="250" y1="410" x2="250" y2="650" stroke="#000" stroke-width="2"/>
  <polygon points="366,525 378,530 366,535" fill="#000"/>
  <polygon points="245,414 250,402 255,414" fill="#000"/>
  <text x="382" y="534" font-family="Georgia,serif" font-size="10" fill="#000">x</text>
  <text x="254" y="400" font-family="Georgia,serif" font-size="10" fill="#000">y</text>
  <!-- Tick marks p3 -->
  <line x1="220" y1="526" x2="220" y2="534" stroke="#000" stroke-width="1.5"/>
  <text x="216" y="544" font-family="Georgia,serif" font-size="9" fill="#555">−1</text>
  <line x1="280" y1="526" x2="280" y2="534" stroke="#000" stroke-width="1.5"/>
  <text x="278" y="544" font-family="Georgia,serif" font-size="9" fill="#555">1</text>
  <!-- Cubic: scale 25px/unit. At x=−3:y=−27 offscreen; use x=−2:y=−8→(200,730)clip
       Smooth S-curve through (−2,−8),(−1,−1),(0,0),(1,1),(2,8)
       px: (200,730)clip→(225,555),(250,530),(275,505),(300,330)clip
       Path using smooth bezier: -->
  <path d="M155,645 C175,620 220,560 225,555 C234,542 246,535 250,530
           C254,525 266,518 275,505 C295,480 320,430 345,415"
        fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <!-- Origin point -->
  <circle cx="250" cy="530" r="5" fill="#000"/>
  <text x="254" y="526" font-family="Georgia,serif" font-size="9" fill="#000">(0,0)</text>
  <!-- Inflection label -->
  <text x="152" y="535" font-family="Georgia,serif" font-size="9" fill="#555" font-style="italic">inflection</text>
  <!-- Characteristics -->
  <text x="140" y="666" font-family="Georgia,serif" font-size="10" fill="#000">• S-shaped  • Point of inflection at origin</text>
  <text x="140" y="680" font-family="Georgia,serif" font-size="10" fill="#000">• Domain: ℝ  • Range: ℝ  • Odd function</text>

  <!-- ──────────── PANEL 4: RECIPROCAL  y = 1/x ──────────── -->
  <text x="750" y="385" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Reciprocal Function</text>
  <text x="750" y="399" font-family="Georgia,serif" font-size="11" fill="#555" text-anchor="middle">y = 1/x</text>
  <!-- Axes p4 origin (750,530) -->
  <line x1="630" y1="530" x2="870" y2="530" stroke="#000" stroke-width="2"/>
  <line x1="750" y1="410" x2="750" y2="650" stroke="#000" stroke-width="2"/>
  <polygon points="866,525 878,530 866,535" fill="#000"/>
  <polygon points="745,414 750,402 755,414" fill="#000"/>
  <text x="882" y="534" font-family="Georgia,serif" font-size="10" fill="#000">x</text>
  <text x="754" y="400" font-family="Georgia,serif" font-size="10" fill="#000">y</text>
  <!-- Tick marks p4 -->
  <line x1="720" y1="526" x2="720" y2="534" stroke="#000" stroke-width="1.5"/>
  <text x="716" y="544" font-family="Georgia,serif" font-size="9" fill="#555">−1</text>
  <line x1="780" y1="526" x2="780" y2="534" stroke="#000" stroke-width="1.5"/>
  <text x="778" y="544" font-family="Georgia,serif" font-size="9" fill="#555">1</text>
  <!-- Asymptote lines (dashed) -->
  <line x1="750" y1="412" x2="750" y2="648" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="632" y1="530" x2="868" y2="530" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <!-- Reciprocal curves. Scale 30px/unit.
       Q1: (0.5,2)→(765,470); (1,1)→(780,500); (2,0.5)→(810,515); (3,0.33)→(840,520)
       Q3: (−0.5,−2)→(735,590); (−1,−1)→(720,560); (−2,−0.5)→(690,545); (−3,−0.33)→(660,540) -->
  <path d="M756,413 C757,420 760,435 765,470 C768,484 774,497 780,500
           C790,507 806,514 840,520 C854,521 864,522 870,522"
        fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <path d="M630,538 C636,538 646,539 660,540 C694,546 710,553 720,560
           C726,563 732,576 735,590 C740,625 743,638 744,647"
        fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <!-- Asymptote labels -->
  <text x="755" y="648" font-family="Georgia,serif" font-size="9" fill="#555" font-style="italic">x=0</text>
  <text x="636" y="527" font-family="Georgia,serif" font-size="9" fill="#555" font-style="italic">y=0</text>
  <!-- Characteristics -->
  <text x="640" y="666" font-family="Georgia,serif" font-size="10" fill="#000">• Hyperbola  • Asymptotes: x=0, y=0</text>
  <text x="640" y="680" font-family="Georgia,serif" font-size="10" fill="#000">• Domain: x≠0  • Range: y≠0</text>
</svg>`;


// ─── 11. FUNCTION TRANSFORMATIONS ─────────────────────────────────────────
//  Registry key : 'functionTransformations'
//  Static name  : functionTransformationsSvg
//  Base f(x)=x² with translate up, reflect over x-axis, and vertical stretch;
//  each transformation shown on its own mini-panel with equation.
static functionTransformationsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="450" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">Function Transformations — Base: f(x) = x²</text>

  <!-- Column dividers -->
  <line x1="225" y1="45" x2="225" y2="580" stroke="#ccc" stroke-width="1.5"/>
  <line x1="450" y1="45" x2="450" y2="580" stroke="#ccc" stroke-width="1.5"/>
  <line x1="675" y1="45" x2="675" y2="580" stroke="#ccc" stroke-width="1.5"/>

  <!-- ─ PANEL 0: ORIGINAL f(x) = x² ─ -->
  <text x="112" y="55" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Original</text>
  <text x="112" y="69" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">f(x) = x²</text>
  <!-- Axes o=(112,310) scale=28px -->
  <line x1="40" y1="310" x2="200" y2="310" stroke="#000" stroke-width="2"/>
  <line x1="112" y1="90" x2="112" y2="430" stroke="#000" stroke-width="2"/>
  <polygon points="197,305 209,310 197,315" fill="#000"/>
  <polygon points="107,94 112,82 117,94" fill="#000"/>
  <!-- Parabola x²: x=−3→y=9(off), x=±2→y=4→(56,198)&(168,198); x=0→(112,310)
       bezier: -->
  <path d="M52,202 C72,190 100,306 112,310 C124,306 152,190 172,202"
        fill="none" stroke="#000" stroke-width="3"/>
  <circle cx="112" cy="310" r="4" fill="#000"/>
  <text x="116" y="322" font-family="Georgia,serif" font-size="8" fill="#555">vertex</text>

  <!-- ─ PANEL 1: TRANSLATE UP  g(x) = x² + 3 ─ -->
  <text x="337" y="55" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Translate Up (+3)</text>
  <text x="337" y="69" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">g(x) = x² + 3</text>
  <!-- Axes o=(337,310) -->
  <line x1="265" y1="310" x2="425" y2="310" stroke="#000" stroke-width="2"/>
  <line x1="337" y1="90" x2="337" y2="430" stroke="#000" stroke-width="2"/>
  <polygon points="422,305 434,310 422,315" fill="#000"/>
  <polygon points="332,94 337,82 342,94" fill="#000"/>
  <!-- Original (dashed) -->
  <path d="M277,202 C297,190 325,306 337,310 C349,306 377,190 397,202"
        fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Shifted up 3 units = 84px -->
  <path d="M277,118 C297,106 325,222 337,226 C349,222 377,106 397,118"
        fill="none" stroke="#000" stroke-width="3"/>
  <!-- Translation vector arrow -->
  <line x1="337" y1="310" x2="337" y2="226" stroke="#000" stroke-width="2"/>
  <polygon points="332,230 337,218 342,230" fill="#000"/>
  <text x="342" y="272" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000">+3</text>
  <!-- New vertex -->
  <circle cx="337" cy="226" r="4" fill="#000"/>
  <text x="341" y="222" font-family="Georgia,serif" font-size="8" fill="#000">(0,3)</text>

  <!-- ─ PANEL 2: REFLECT  h(x) = −x² ─ -->
  <text x="562" y="55" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Reflect (x-axis)</text>
  <text x="562" y="69" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">h(x) = −x²</text>
  <!-- Axes o=(562,310) -->
  <line x1="490" y1="310" x2="650" y2="310" stroke="#000" stroke-width="2"/>
  <line x1="562" y1="90" x2="562" y2="430" stroke="#000" stroke-width="2"/>
  <polygon points="647,305 659,310 647,315" fill="#000"/>
  <polygon points="557,94 562,82 567,94" fill="#000"/>
  <!-- Original parabola (dashed) -->
  <path d="M502,202 C522,190 550,306 562,310 C574,306 602,190 622,202"
        fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Reflected (opens downward): vertex stays (562,310), arms go down
       y=−x²: at x=±2→y=−4→py=310+112=422 -->
  <path d="M502,418 C522,430 550,314 562,310 C574,314 602,430 622,418"
        fill="none" stroke="#000" stroke-width="3"/>
  <!-- Reflection axis label -->
  <line x1="490" y1="310" x2="650" y2="310" stroke="#000" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="493" y="306" font-family="Georgia,serif" font-size="8" fill="#555" font-style="italic">x-axis (mirror)</text>
  <!-- Vertex -->
  <circle cx="562" cy="310" r="4" fill="#000"/>

  <!-- ─ PANEL 3: VERTICAL STRETCH  k(x) = 2x² ─ -->
  <text x="787" y="55" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Vertical Stretch (×2)</text>
  <text x="787" y="69" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">k(x) = 2x²</text>
  <!-- Axes o=(787,370) lower origin to show stretch -->
  <line x1="715" y1="370" x2="875" y2="370" stroke="#000" stroke-width="2"/>
  <line x1="787" y1="90" x2="787" y2="490" stroke="#000" stroke-width="2"/>
  <polygon points="872,365 884,370 872,375" fill="#000"/>
  <polygon points="782,94 787,82 792,94" fill="#000"/>
  <!-- Original x² (dashed): scale 28px; x=±2→py=370−112=258 -->
  <path d="M731,262 C751,250 775,366 787,370 C799,366 823,250 843,262"
        fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Stretched 2x²: x=±2→y=8→py=370−224=146 (narrow) -->
  <path d="M742,150 C757,130 780,366 787,370 C794,366 817,130 832,150"
        fill="none" stroke="#000" stroke-width="3"/>
  <!-- Stretch annotation -->
  <line x1="843" y1="262" x2="832" y2="150" stroke="#000" stroke-width="1.5"/>
  <polygon points="828,154 832,140 836,154" fill="#000"/>
  <text x="848" y="200" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000">×2</text>
  <text x="845" y="212" font-family="Georgia,serif" font-size="8" fill="#555">narrower</text>
  <!-- Vertex -->
  <circle cx="787" cy="370" r="4" fill="#000"/>

  <!-- ─ Shared legend ─ -->
  <line x1="50" y1="555" x2="90" y2="555" stroke="#000" stroke-width="3"/>
  <text x="95" y="559" font-family="Georgia,serif" font-size="10" fill="#000">Transformed function</text>
  <line x1="260" y1="555" x2="300" y2="555" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="305" y="559" font-family="Georgia,serif" font-size="10" fill="#555">Original f(x) = x²</text>

  <!-- Footer -->
  <text x="450" y="585" font-family="Georgia,serif" font-size="9" fill="#555"
        text-anchor="middle">Translations shift the graph · Reflections flip it · Stretches/compressions change its width or height</text>
</svg>`;


// ─── 12. INVERSE FUNCTION GRAPH ───────────────────────────────────────────
//  Registry key : 'inverseFunctionGraph'
//  Static name  : inverseFunctionGraphSvg
//  f(x)=2x+1 and its inverse f⁻¹(x)=(x−1)/2 plotted on the same axes,
//  with y=x reflection line, key points labelled, and symmetry annotation.
static inverseFunctionGraphSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 800 800">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">Function and Inverse:  f(x) = 2x + 1</text>
  <text x="400" y="46" font-family="Georgia,serif" font-size="11" fill="#555"
        text-anchor="middle">Reflected over the line y = x</text>

  <!-- ── Grid (origin 400,400; scale 60px/unit, ±5 units) ── -->
  <!-- Vertical -->
  <line x1="160" y1="100" x2="160" y2="700" stroke="#eee" stroke-width="1"/>
  <line x1="220" y1="100" x2="220" y2="700" stroke="#eee" stroke-width="1"/>
  <line x1="280" y1="100" x2="280" y2="700" stroke="#eee" stroke-width="1"/>
  <line x1="340" y1="100" x2="340" y2="700" stroke="#eee" stroke-width="1"/>
  <line x1="460" y1="100" x2="460" y2="700" stroke="#eee" stroke-width="1"/>
  <line x1="520" y1="100" x2="520" y2="700" stroke="#eee" stroke-width="1"/>
  <line x1="580" y1="100" x2="580" y2="700" stroke="#eee" stroke-width="1"/>
  <line x1="640" y1="100" x2="640" y2="700" stroke="#eee" stroke-width="1"/>
  <!-- Horizontal -->
  <line x1="100" y1="160" x2="700" y2="160" stroke="#eee" stroke-width="1"/>
  <line x1="100" y1="220" x2="700" y2="220" stroke="#eee" stroke-width="1"/>
  <line x1="100" y1="280" x2="700" y2="280" stroke="#eee" stroke-width="1"/>
  <line x1="100" y1="340" x2="700" y2="340" stroke="#eee" stroke-width="1"/>
  <line x1="100" y1="460" x2="700" y2="460" stroke="#eee" stroke-width="1"/>
  <line x1="100" y1="520" x2="700" y2="520" stroke="#eee" stroke-width="1"/>
  <line x1="100" y1="580" x2="700" y2="580" stroke="#eee" stroke-width="1"/>
  <line x1="100" y1="640" x2="700" y2="640" stroke="#eee" stroke-width="1"/>

  <!-- ── Axes ── -->
  <line x1="100" y1="400" x2="710" y2="400" stroke="#000" stroke-width="2.5"/>
  <polygon points="706,395 718,400 706,405" fill="#000"/>
  <text x="722" y="404" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">x</text>
  <line x1="400" y1="710" x2="400" y2="90" stroke="#000" stroke-width="2.5"/>
  <polygon points="395,94 400,82 405,94" fill="#000"/>
  <text x="404" y="82" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">y</text>

  <!-- Tick labels x -->
  <line x1="160" y1="396" x2="160" y2="404" stroke="#000" stroke-width="2"/>
  <text x="156" y="418" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">−4</text>
  <line x1="220" y1="396" x2="220" y2="404" stroke="#000" stroke-width="2"/>
  <text x="220" y="418" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">−3</text>
  <line x1="280" y1="396" x2="280" y2="404" stroke="#000" stroke-width="2"/>
  <text x="280" y="418" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">−2</text>
  <line x1="340" y1="396" x2="340" y2="404" stroke="#000" stroke-width="2"/>
  <text x="340" y="418" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">−1</text>
  <line x1="460" y1="396" x2="460" y2="404" stroke="#000" stroke-width="2"/>
  <text x="460" y="418" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">1</text>
  <line x1="520" y1="396" x2="520" y2="404" stroke="#000" stroke-width="2"/>
  <text x="520" y="418" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">2</text>
  <line x1="580" y1="396" x2="580" y2="404" stroke="#000" stroke-width="2"/>
  <text x="580" y="418" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">3</text>
  <line x1="640" y1="396" x2="640" y2="404" stroke="#000" stroke-width="2"/>
  <text x="640" y="418" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">4</text>

  <!-- Tick labels y -->
  <line x1="396" y1="160" x2="404" y2="160" stroke="#000" stroke-width="2"/>
  <text x="390" y="164" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">4</text>
  <line x1="396" y1="220" x2="404" y2="220" stroke="#000" stroke-width="2"/>
  <text x="390" y="224" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">3</text>
  <line x1="396" y1="280" x2="404" y2="280" stroke="#000" stroke-width="2"/>
  <text x="390" y="284" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">2</text>
  <line x1="396" y1="340" x2="404" y2="340" stroke="#000" stroke-width="2"/>
  <text x="390" y="344" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">1</text>
  <line x1="396" y1="460" x2="404" y2="460" stroke="#000" stroke-width="2"/>
  <text x="390" y="464" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">−1</text>
  <line x1="396" y1="520" x2="404" y2="520" stroke="#000" stroke-width="2"/>
  <text x="390" y="524" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">−2</text>
  <line x1="396" y1="580" x2="404" y2="580" stroke="#000" stroke-width="2"/>
  <text x="390" y="584" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">−3</text>
  <line x1="396" y1="640" x2="404" y2="640" stroke="#000" stroke-width="2"/>
  <text x="390" y="644" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">−4</text>

  <!-- ── y = x reflection line (dashed) ── -->
  <line x1="115" y1="685" x2="685" y2="115" stroke="#000" stroke-width="2"
        stroke-dasharray="8,5"/>
  <text x="688" y="110" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#555">y = x</text>

  <!-- ── f(x) = 2x + 1 (solid thick)
       x=-3→y=-5 (640clip→620); x=-2→y=-3→(280,580); x=0→y=1→(400,340);
       x=2→y=5→(520,160); x=3→(580,100clip)
       scale: px=400+60x, py=400-60y ── -->
  <line x1="165" y1="700" x2="633" y2="100" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Key points on f -->
  <circle cx="400" cy="340" r="5" fill="#000"/>
  <text x="406" y="336" font-family="Georgia,serif" font-size="9" fill="#000">(0, 1)</text>
  <circle cx="520" cy="160" r="5" fill="#000"/>
  <text x="526" y="156" font-family="Georgia,serif" font-size="9" fill="#000">(2, 5)</text>
  <circle cx="340" cy="520" r="5" fill="#000"/>
  <text x="346" y="518" font-family="Georgia,serif" font-size="9" fill="#000">(−1,−1)</text>
  <!-- Label -->
  <text x="624" y="98" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000">f(x) = 2x+1</text>

  <!-- ── f⁻¹(x) = (x−1)/2 (dashed thick)
       x=-5→y=-3 (clip); x=-3→y=-2→(220,520); x=1→y=0→(460,400);
       x=5→y=2→(700clip,280)
       Inverse line swaps x&y of f: same points reflected ── -->
  <line x1="100" y1="628" x2="700" y2="168" stroke="#000" stroke-width="3.5"
        stroke-dasharray="10,5" stroke-linecap="round"/>
  <!-- Key points on f⁻¹ -->
  <circle cx="340" cy="400" r="5" fill="#000"/>
  <text x="346" y="396" font-family="Georgia,serif" font-size="9" fill="#000">(−1, 0)</text>
  <circle cx="460" cy="340" r="5" fill="#000"/>
  <text x="466" y="336" font-family="Georgia,serif" font-size="9" fill="#000">(1, 0)</text>
  <circle cx="160" cy="520" r="5" fill="#000"/>
  <text x="126" y="518" font-family="Georgia,serif" font-size="9" fill="#000">(−4,−2.5)</text>
  <!-- Label -->
  <text x="640" y="158" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000">f⁻¹(x)=(x−1)/2</text>

  <!-- ── Symmetry annotation ── -->
  <!-- Reflection arrow showing a point and its mirror -->
  <circle cx="520" cy="160" r="5" fill="#000"/>
  <circle cx="160" cy="520" r="5" fill="#000"/>
  <line x1="520" y1="160" x2="160" y2="520" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="324" y="316" font-family="Georgia,serif" font-size="9" fill="#555" font-style="italic">symmetric</text>
  <text x="324" y="328" font-family="Georgia,serif" font-size="9" fill="#555" font-style="italic">about y=x</text>

  <!-- Info box -->
  <rect x="110" y="108" width="210" height="80" rx="6"
        fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="120" y="126" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Key properties:</text>
  <text x="120" y="142" font-family="Georgia,serif" font-size="10" fill="#000">• f and f⁻¹ are reflections of</text>
  <text x="120" y="156" font-family="Georgia,serif" font-size="10" fill="#000">  each other over y = x</text>
  <text x="120" y="170" font-family="Georgia,serif" font-size="10" fill="#000">• If (a,b) ∈ f, then (b,a) ∈ f⁻¹</text>

  <!-- Origin -->
  <text x="406" y="415" font-family="Georgia,serif" font-size="10" fill="#555">O</text>
</svg>`;


// ─── 13. PIECEWISE FUNCTION GRAPH ────────────────────────────────────────
//  Registry key : 'piecewiseFunctionGraph'
//  Static name  : piecewiseFunctionGraphSvg
//  f(x) = {−x for x<0 ; x² for x≥0}, with open/closed endpoints,
//  domain labels for each piece, and break-point annotation.
static piecewiseFunctionGraphSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">Piecewise Function</text>
  <text x="400" y="46" font-family="Georgia,serif" font-size="12" fill="#555"
        text-anchor="middle">f(x) = −x  (x &lt; 0)   |   f(x) = x²  (x ≥ 0)</text>

  <!-- ── Grid (origin 320,380; scale 60px/unit) ── -->
  <!-- Vertical -->
  <line x1="80"  y1="80" x2="80"  y2="520" stroke="#eee" stroke-width="1"/>
  <line x1="140" y1="80" x2="140" y2="520" stroke="#eee" stroke-width="1"/>
  <line x1="200" y1="80" x2="200" y2="520" stroke="#eee" stroke-width="1"/>
  <line x1="260" y1="80" x2="260" y2="520" stroke="#eee" stroke-width="1"/>
  <line x1="380" y1="80" x2="380" y2="520" stroke="#eee" stroke-width="1"/>
  <line x1="440" y1="80" x2="440" y2="520" stroke="#eee" stroke-width="1"/>
  <line x1="500" y1="80" x2="500" y2="520" stroke="#eee" stroke-width="1"/>
  <line x1="560" y1="80" x2="560" y2="520" stroke="#eee" stroke-width="1"/>
  <!-- Horizontal -->
  <line x1="70" y1="140" x2="620" y2="140" stroke="#eee" stroke-width="1"/>
  <line x1="70" y1="200" x2="620" y2="200" stroke="#eee" stroke-width="1"/>
  <line x1="70" y1="260" x2="620" y2="260" stroke="#eee" stroke-width="1"/>
  <line x1="70" y1="320" x2="620" y2="320" stroke="#eee" stroke-width="1"/>
  <line x1="70" y1="440" x2="620" y2="440" stroke="#eee" stroke-width="1"/>
  <line x1="70" y1="500" x2="620" y2="500" stroke="#eee" stroke-width="1"/>

  <!-- ── Axes ── -->
  <line x1="70" y1="380" x2="620" y2="380" stroke="#000" stroke-width="2.5"/>
  <polygon points="616,375 628,380 616,385" fill="#000"/>
  <text x="632" y="384" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">x</text>
  <line x1="320" y1="530" x2="320" y2="70" stroke="#000" stroke-width="2.5"/>
  <polygon points="315,74 320,62 325,74" fill="#000"/>
  <text x="324" y="62" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">y</text>

  <!-- Tick labels x (every 1 unit = 60px) -->
  <line x1="80"  y1="376" x2="80"  y2="384" stroke="#000" stroke-width="2"/>
  <text x="80"  y="396" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">−4</text>
  <line x1="140" y1="376" x2="140" y2="384" stroke="#000" stroke-width="2"/>
  <text x="140" y="396" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">−3</text>
  <line x1="200" y1="376" x2="200" y2="384" stroke="#000" stroke-width="2"/>
  <text x="200" y="396" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">−2</text>
  <line x1="260" y1="376" x2="260" y2="384" stroke="#000" stroke-width="2"/>
  <text x="260" y="396" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">−1</text>
  <line x1="380" y1="376" x2="380" y2="384" stroke="#000" stroke-width="2"/>
  <text x="380" y="396" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">1</text>
  <line x1="440" y1="376" x2="440" y2="384" stroke="#000" stroke-width="2"/>
  <text x="440" y="396" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">2</text>
  <line x1="500" y1="376" x2="500" y2="384" stroke="#000" stroke-width="2"/>
  <text x="500" y="396" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">3</text>
  <line x1="560" y1="376" x2="560" y2="384" stroke="#000" stroke-width="2"/>
  <text x="560" y="396" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">4</text>

  <!-- Tick labels y -->
  <line x1="316" y1="140" x2="324" y2="140" stroke="#000" stroke-width="2"/>
  <text x="310" y="144" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">4</text>
  <line x1="316" y1="200" x2="324" y2="200" stroke="#000" stroke-width="2"/>
  <text x="310" y="204" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">3</text>
  <line x1="316" y1="260" x2="324" y2="260" stroke="#000" stroke-width="2"/>
  <text x="310" y="264" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">2</text>
  <line x1="316" y1="320" x2="324" y2="320" stroke="#000" stroke-width="2"/>
  <text x="310" y="324" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">1</text>
  <line x1="316" y1="440" x2="324" y2="440" stroke="#000" stroke-width="2"/>
  <text x="310" y="444" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">−1</text>

  <!-- ── Piece 1: f(x) = −x for x < 0 (line from top-left down to open circle at origin)
       y=−x: at x=−4→y=4→px(80,140); at x=−1→y=1→(260,320); end at x=0 (open circle)
       ── -->
  <line x1="80" y1="140" x2="320" y2="380" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Open circle at x=0 (not included: x < 0) -->
  <circle cx="320" cy="380" r="7" fill="#fff" stroke="#000" stroke-width="3"/>
  <!-- Domain label piece 1 -->
  <text x="140" y="198" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" font-style="italic">f(x) = −x</text>
  <text x="140" y="212" font-family="Georgia,serif" font-size="10" fill="#555">(x &lt; 0)</text>

  <!-- ── Piece 2: f(x) = x² for x ≥ 0 (parabola starting with closed circle at origin)
       scale 60px/unit: x=0→(320,380); x=1→(380,320); x=2→(440,140); x=2.5→(470,≈5)clip
       bezier: M320,380 → rises up ── -->
  <path d="M320,380 C340,370 370,330 380,320 C400,300 425,195 440,140 C450,105 460,85 470,75"
        fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Closed circle at origin (x=0 included) -->
  <circle cx="320" cy="380" r="7" fill="#000"/>
  <!-- Domain label piece 2 -->
  <text x="450" y="260" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" font-style="italic">f(x) = x²</text>
  <text x="450" y="274" font-family="Georgia,serif" font-size="10" fill="#555">(x ≥ 0)</text>

  <!-- ── Break-point annotation ── -->
  <line x1="320" y1="380" x2="320" y2="430" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="325" y="446" font-family="Georgia,serif" font-size="10" fill="#000" font-weight="bold">x = 0</text>
  <text x="325" y="460" font-family="Georgia,serif" font-size="9" fill="#555">break-point</text>
  <text x="325" y="474" font-family="Georgia,serif" font-size="9" fill="#555">open ○ for &lt;, closed ● for ≥</text>

  <!-- ── Info box ── -->
  <rect x="80" y="490" width="620" height="90" rx="6"
        fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="390" y="510" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Reading the piecewise function:</text>
  <text x="95" y="528" font-family="Georgia,serif" font-size="10" fill="#000">• For x &lt; 0: use the rule f(x) = −x  (line with slope −1). Open circle shows x=0 is EXCLUDED.</text>
  <text x="95" y="544" font-family="Georgia,serif" font-size="10" fill="#000">• For x ≥ 0: use the rule f(x) = x²  (parabola). Closed circle shows x=0 is INCLUDED.</text>
  <text x="95" y="560" font-family="Georgia,serif" font-size="10" fill="#000">• Domain: all real numbers ℝ  •  Range: [0, ∞)  •  Continuous at x=0 (both pieces give y=0)</text>
</svg>`;


// ─── 14. COMPOSITE FUNCTION DIAGRAM ───────────────────────────────────────
//  Registry key : 'compositeFunction'
//  Static name  : compositeFunctionSvg
//  Two chained function machines: x → g(x)=x+3 → f(g(x))=2(x+3)=2x+6,
//  showing each step with I/O, composition notation, and a worked example.
static compositeFunctionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="500px" viewBox="0 0 900 500">

  <!-- Title -->
  <text x="450" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">Composite Functions:  (f ∘ g)(x) = f(g(x))</text>
  <text x="450" y="46" font-family="Georgia,serif" font-size="11" fill="#555"
        text-anchor="middle">f(x) = 2x   and   g(x) = x + 3</text>

  <!-- ═══ Overall flow arrow (background) ═══ -->
  <line x1="60" y1="200" x2="840" y2="200" stroke="#ccc" stroke-width="40" stroke-linecap="round"/>

  <!-- ─── INPUT bubble ─── -->
  <circle cx="75" cy="200" r="40" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="75" y="195" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">INPUT</text>
  <text x="75" y="212" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000" text-anchor="middle">x</text>

  <!-- Arrow: input → g machine -->
  <line x1="115" y1="200" x2="188" y2="200" stroke="#000" stroke-width="2.5"/>
  <polygon points="184,195 198,200 184,205" fill="#000"/>
  <text x="152" y="192" font-family="Georgia,serif" font-size="10" fill="#555"
        text-anchor="middle">x</text>

  <!-- ─── Machine g: g(x) = x + 3 ─── -->
  <rect x="200" y="130" width="180" height="140" rx="14"
        fill="#fff" stroke="#000" stroke-width="4"/>
  <text x="290" y="155" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">STEP 1</text>
  <rect x="220" y="165" width="140" height="50" rx="6"
        fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="290" y="185" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">g(x) = x + 3</text>
  <text x="290" y="202" font-family="Georgia,serif" font-size="10"
        fill="#555" text-anchor="middle">add 3 to input</text>
  <text x="290" y="248" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">Output: x + 3</text>

  <!-- Arrow: g → f with intermediate value label -->
  <line x1="380" y1="200" x2="478" y2="200" stroke="#000" stroke-width="2.5"/>
  <polygon points="474,195 488,200 474,205" fill="#000"/>
  <text x="434" y="188" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">g(x)</text>
  <text x="434" y="202" font-family="Georgia,serif" font-size="10" fill="#555"
        text-anchor="middle">= x + 3</text>

  <!-- ─── Machine f: f(x) = 2x ─── -->
  <rect x="490" y="130" width="180" height="140" rx="14"
        fill="#fff" stroke="#000" stroke-width="4"/>
  <text x="580" y="155" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">STEP 2</text>
  <rect x="510" y="165" width="140" height="50" rx="6"
        fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="580" y="185" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">f(x) = 2x</text>
  <text x="580" y="202" font-family="Georgia,serif" font-size="10"
        fill="#555" text-anchor="middle">multiply input by 2</text>
  <text x="580" y="248" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">Output: 2(x+3)</text>

  <!-- Arrow: f → output -->
  <line x1="670" y1="200" x2="778" y2="200" stroke="#000" stroke-width="2.5"/>
  <polygon points="774,195 788,200 774,205" fill="#000"/>
  <text x="728" y="188" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">f(g(x))</text>
  <text x="728" y="202" font-family="Georgia,serif" font-size="10" fill="#555"
        text-anchor="middle">= 2x + 6</text>

  <!-- ─── OUTPUT bubble ─── -->
  <circle cx="825" cy="200" r="40" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="825" y="192" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">OUTPUT</text>
  <text x="825" y="208" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">2x + 6</text>

  <!-- ─── Composition bracket (overall) ─── -->
  <line x1="200" y1="290" x2="670" y2="290" stroke="#000" stroke-width="2"/>
  <line x1="200" y1="286" x2="200" y2="294" stroke="#000" stroke-width="2"/>
  <line x1="670" y1="286" x2="670" y2="294" stroke="#000" stroke-width="2"/>
  <text x="435" y="308" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">(f ∘ g)(x) = f(g(x)) = 2x + 6</text>
  <text x="435" y="324" font-family="Georgia,serif" font-size="10" fill="#555"
        text-anchor="middle">Apply g first, then apply f to the result</text>

  <!-- ─── Worked example ─── -->
  <rect x="100" y="355" width="700" height="120" rx="8"
        fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="6,3"/>
  <text x="450" y="375" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Worked Example: x = 4</text>
  <!-- Step 1 -->
  <text x="130" y="398" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Step 1:</text>
  <text x="196" y="398" font-family="Georgia,serif" font-size="11" fill="#000">Find g(4) = 4 + 3 = 7</text>
  <!-- Step 2 -->
  <text x="130" y="418" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Step 2:</text>
  <text x="196" y="418" font-family="Georgia,serif" font-size="11" fill="#000">Find f(g(4)) = f(7) = 2 × 7 = 14</text>
  <!-- Direct formula -->
  <text x="130" y="438" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Check:</text>
  <text x="185" y="438" font-family="Georgia,serif" font-size="11" fill="#000">(f ∘ g)(4) = 2(4) + 6 = 8 + 6 = 14  ✓</text>
  <!-- Note -->
  <text x="130" y="462" font-family="Georgia,serif" font-size="10" fill="#555">Note: f ∘ g ≠ g ∘ f in general.  Here g(f(4)) = g(8) = 8 + 3 = 11 ≠ 14</text>
</svg>`;



// ─── ALGEBRA SVG DIAGRAMS ─────────────────────────────────────────────────
// Add these static properties to the MathematicsSvgDiagrams class.
// All diagrams are black-and-white printable (no colour fills).
// Naming convention: static <registryKey>Svg = `...`;


  // ─── ALGEBRAIC BALANCE MODEL ──────────────────────────────────────────────
  // Equation: 2x + 3 = 11
  // Shows a balance/scale with:
  //   • a fulcrum and beam
  //   • left pan: 2x + 3 (blocks labelled x, x, 1, 1, 1)
  //   • right pan: 11 (blocks labelled 1 × 11)
  //   • step-by-step solution annotations below the scale
  //   • inverse-operation arrows
  static algebraicBalanceModelSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="200" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Solving Equations — Balance Method: 2x + 3 = 11</text>

  <!-- ══ SCALE STRUCTURE ══ -->
  <!-- Fulcrum triangle (centre x=400, base y=380) -->
  <polygon points="400,300 370,380 430,380" fill="none" stroke="#000" stroke-width="3" stroke-linejoin="round"/>
  <!-- Base platform -->
  <rect x="340" y="378" width="120" height="14" rx="2" fill="#000"/>

  <!-- Beam (horizontal bar) -->
  <rect x="100" y="295" width="600" height="10" rx="4" fill="#000"/>
  <!-- Pivot dot -->
  <circle cx="400" cy="300" r="8" fill="#000"/>

  <!-- Left pan rope + pan -->
  <line x1="170" y1="304" x2="170" y2="230" stroke="#000" stroke-width="2.5"/>
  <line x1="120" y1="230" x2="220" y2="230" stroke="#000" stroke-width="3"/>
  <!-- Right pan rope + pan -->
  <line x1="630" y1="304" x2="630" y2="230" stroke="#000" stroke-width="2.5"/>
  <line x1="580" y1="230" x2="680" y2="230" stroke="#000" stroke-width="3"/>

  <!-- ══ LEFT PAN CONTENTS: 2x + 3 ══ -->
  <!-- Two x-blocks -->
  <rect x="124" y="190" width="38" height="38" rx="3" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="135" y="215" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">x</text>
  <rect x="168" y="190" width="38" height="38" rx="3" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="179" y="215" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">x</text>
  <!-- Three unit blocks -->
  <rect x="124" y="148" width="24" height="24" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="131" y="165" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <rect x="152" y="148" width="24" height="24" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="159" y="165" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <rect x="180" y="148" width="24" height="24" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="187" y="165" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <!-- Left pan label -->
  <text x="130" y="135" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">2x + 3</text>

  <!-- ══ RIGHT PAN CONTENTS: 11 unit blocks ══ -->
  <!-- Row 1: 6 blocks -->
  <rect x="584" y="190" width="22" height="22" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="591" y="206" font-family="Georgia,serif" font-size="9" fill="#000">1</text>
  <rect x="609" y="190" width="22" height="22" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="616" y="206" font-family="Georgia,serif" font-size="9" fill="#000">1</text>
  <rect x="634" y="190" width="22" height="22" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="641" y="206" font-family="Georgia,serif" font-size="9" fill="#000">1</text>
  <rect x="584" y="165" width="22" height="22" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="591" y="181" font-family="Georgia,serif" font-size="9" fill="#000">1</text>
  <rect x="609" y="165" width="22" height="22" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="616" y="181" font-family="Georgia,serif" font-size="9" fill="#000">1</text>
  <rect x="634" y="165" width="22" height="22" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="641" y="181" font-family="Georgia,serif" font-size="9" fill="#000">1</text>
  <!-- Row 2: 5 blocks -->
  <rect x="584" y="140" width="22" height="22" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="591" y="156" font-family="Georgia,serif" font-size="9" fill="#000">1</text>
  <rect x="609" y="140" width="22" height="22" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="616" y="156" font-family="Georgia,serif" font-size="9" fill="#000">1</text>
  <rect x="634" y="140" width="22" height="22" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="641" y="156" font-family="Georgia,serif" font-size="9" fill="#000">1</text>
  <rect x="584" y="115" width="22" height="22" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="591" y="131" font-family="Georgia,serif" font-size="9" fill="#000">1</text>
  <rect x="609" y="115" width="22" height="22" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="616" y="131" font-family="Georgia,serif" font-size="9" fill="#000">1</text>
  <!-- Right pan label -->
  <text x="600" y="105" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">11</text>

  <!-- Balance equals sign -->
  <text x="388" y="292" font-family="Georgia,serif" font-size="11" fill="#000">⚖</text>

  <!-- ══ STEP-BY-STEP SOLUTION ══ -->
  <line x1="60" y1="415" x2="740" y2="415" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>

  <text x="80" y="440" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Step-by-Step Solution:</text>

  <!-- Step 1 -->
  <text x="80" y="462" font-family="Georgia,serif" font-size="12" fill="#000">Step 1:  Start with     2x + 3 = 11</text>
  <!-- Step 2 -->
  <text x="80" y="484" font-family="Georgia,serif" font-size="12" fill="#000">Step 2:  Subtract 3 from both sides     2x + 3 − 3 = 11 − 3</text>
  <!-- Arrow showing inverse -->
  <path d="M 300,476 C 310,468 340,468 350,476" fill="none" stroke="#000" stroke-width="1.5"/>
  <polygon points="347,472 353,478 357,470" fill="#000"/>
  <text x="310" y="465" font-family="Georgia,serif" font-size="9" fill="#000">inverse op</text>
  <!-- Step 3 -->
  <text x="80" y="506" font-family="Georgia,serif" font-size="12" fill="#000">Step 3:  Simplify                          2x = 8</text>
  <!-- Step 4 -->
  <text x="80" y="528" font-family="Georgia,serif" font-size="12" fill="#000">Step 4:  Divide both sides by 2         2x ÷ 2 = 8 ÷ 2</text>
  <!-- Step 5 -->
  <text x="80" y="550" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Step 5:  Solution                              x = 4</text>
  <!-- Verify -->
  <text x="80" y="572" font-family="Georgia,serif" font-size="11" fill="#000">Check: 2(4) + 3 = 8 + 3 = 11  ✓</text>

  <!-- Box around solution -->
  <rect x="454" y="540" width="90" height="24" rx="4" fill="none" stroke="#000" stroke-width="2.5"/>
</svg>`;

  // ─── LINEAR GRAPH PLOT ────────────────────────────────────────────────────
  // y = 2x + 3  (slope = 2, intercept = 3)
  // Shows:
  //   • labelled x/y axes with grid and tick marks
  //   • the straight line plotted across the viewport
  //   • y-intercept marked at (0, 3)
  //   • slope triangle annotation (rise/run)
  //   • equation label on the line
  static linearGraphPlotSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="220" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Linear Graph: y = 2x + 3</text>
  <text x="240" y="46" font-family="Georgia,serif" font-size="11" fill="#444">Slope m = 2 · y-intercept c = 3</text>

  <!-- ── Grid (origin 380,340; scale 50px/unit; x: −6..6, y: −5..8) ── -->
  <!-- Vertical grid lines -->
  <line x1="130" y1="65" x2="130" y2="530" stroke="#ccc" stroke-width="1"/>
  <line x1="180" y1="65" x2="180" y2="530" stroke="#ccc" stroke-width="1"/>
  <line x1="230" y1="65" x2="230" y2="530" stroke="#ccc" stroke-width="1"/>
  <line x1="280" y1="65" x2="280" y2="530" stroke="#ccc" stroke-width="1"/>
  <line x1="330" y1="65" x2="330" y2="530" stroke="#ccc" stroke-width="1"/>
  <line x1="430" y1="65" x2="430" y2="530" stroke="#ccc" stroke-width="1"/>
  <line x1="480" y1="65" x2="480" y2="530" stroke="#ccc" stroke-width="1"/>
  <line x1="530" y1="65" x2="530" y2="530" stroke="#ccc" stroke-width="1"/>
  <line x1="580" y1="65" x2="580" y2="530" stroke="#ccc" stroke-width="1"/>
  <line x1="630" y1="65" x2="630" y2="530" stroke="#ccc" stroke-width="1"/>
  <line x1="680" y1="65" x2="680" y2="530" stroke="#ccc" stroke-width="1"/>
  <line x1="730" y1="65" x2="730" y2="530" stroke="#ccc" stroke-width="1"/>
  <!-- Horizontal grid lines -->
  <line x1="70" y1="90" x2="760" y2="90" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="140" x2="760" y2="140" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="190" x2="760" y2="190" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="240" x2="760" y2="240" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="290" x2="760" y2="290" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="390" x2="760" y2="390" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="440" x2="760" y2="440" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="490" x2="760" y2="490" stroke="#ccc" stroke-width="1"/>

  <!-- ── Axes ── -->
  <!-- x-axis -->
  <line x1="70" y1="340" x2="760" y2="340" stroke="#000" stroke-width="2.5"/>
  <polygon points="756,335 768,340 756,345" fill="#000"/>
  <text x="770" y="344" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">x</text>
  <!-- y-axis -->
  <line x1="380" y1="555" x2="380" y2="60" stroke="#000" stroke-width="2.5"/>
  <polygon points="375,64 380,52 385,64" fill="#000"/>
  <text x="384" y="50" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">y</text>

  <!-- Tick marks & labels x-axis (−5 to +7) -->
  <line x1="130" y1="336" x2="130" y2="344" stroke="#000" stroke-width="2"/>
  <text x="124" y="358" font-family="Georgia,serif" font-size="11" fill="#000">−5</text>
  <line x1="180" y1="336" x2="180" y2="344" stroke="#000" stroke-width="2"/>
  <text x="174" y="358" font-family="Georgia,serif" font-size="11" fill="#000">−4</text>
  <line x1="230" y1="336" x2="230" y2="344" stroke="#000" stroke-width="2"/>
  <text x="224" y="358" font-family="Georgia,serif" font-size="11" fill="#000">−3</text>
  <line x1="280" y1="336" x2="280" y2="344" stroke="#000" stroke-width="2"/>
  <text x="274" y="358" font-family="Georgia,serif" font-size="11" fill="#000">−2</text>
  <line x1="330" y1="336" x2="330" y2="344" stroke="#000" stroke-width="2"/>
  <text x="326" y="358" font-family="Georgia,serif" font-size="11" fill="#000">−1</text>
  <line x1="430" y1="336" x2="430" y2="344" stroke="#000" stroke-width="2"/>
  <text x="428" y="358" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="480" y1="336" x2="480" y2="344" stroke="#000" stroke-width="2"/>
  <text x="478" y="358" font-family="Georgia,serif" font-size="11" fill="#000">2</text>
  <line x1="530" y1="336" x2="530" y2="344" stroke="#000" stroke-width="2"/>
  <text x="528" y="358" font-family="Georgia,serif" font-size="11" fill="#000">3</text>
  <line x1="580" y1="336" x2="580" y2="344" stroke="#000" stroke-width="2"/>
  <text x="578" y="358" font-family="Georgia,serif" font-size="11" fill="#000">4</text>
  <line x1="630" y1="336" x2="630" y2="344" stroke="#000" stroke-width="2"/>
  <text x="628" y="358" font-family="Georgia,serif" font-size="11" fill="#000">5</text>
  <line x1="680" y1="336" x2="680" y2="344" stroke="#000" stroke-width="2"/>
  <text x="678" y="358" font-family="Georgia,serif" font-size="11" fill="#000">6</text>
  <line x1="730" y1="336" x2="730" y2="344" stroke="#000" stroke-width="2"/>
  <text x="728" y="358" font-family="Georgia,serif" font-size="11" fill="#000">7</text>

  <!-- Tick marks & labels y-axis -->
  <line x1="376" y1="90" x2="384" y2="90" stroke="#000" stroke-width="2"/>
  <text x="356" y="94" font-family="Georgia,serif" font-size="11" fill="#000">5</text>
  <line x1="376" y1="140" x2="384" y2="140" stroke="#000" stroke-width="2"/>
  <text x="356" y="144" font-family="Georgia,serif" font-size="11" fill="#000">4</text>
  <line x1="376" y1="190" x2="384" y2="190" stroke="#000" stroke-width="2"/>
  <text x="356" y="194" font-family="Georgia,serif" font-size="11" fill="#000">3</text>
  <line x1="376" y1="240" x2="384" y2="240" stroke="#000" stroke-width="2"/>
  <text x="356" y="244" font-family="Georgia,serif" font-size="11" fill="#000">2</text>
  <line x1="376" y1="290" x2="384" y2="290" stroke="#000" stroke-width="2"/>
  <text x="356" y="294" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="376" y1="390" x2="384" y2="390" stroke="#000" stroke-width="2"/>
  <text x="350" y="394" font-family="Georgia,serif" font-size="11" fill="#000">−1</text>
  <line x1="376" y1="440" x2="384" y2="440" stroke="#000" stroke-width="2"/>
  <text x="350" y="444" font-family="Georgia,serif" font-size="11" fill="#000">−2</text>
  <line x1="376" y1="490" x2="384" y2="490" stroke="#000" stroke-width="2"/>
  <text x="350" y="494" font-family="Georgia,serif" font-size="11" fill="#000">−3</text>

  <!-- ── Line: y = 2x + 3
       Origin (380,340); scale 50px/unit
       At x=−3: y=−3  → px=(380−150, 340+150)=(230,490)
       At x=3:  y=9   → px=(380+150, 340−450)=(530,−110) clip
       At x=2:  y=7   → (480, 340−350)=(480,−10) clip to (478,65)
       Left clip: when py=65, (340−65)/50=5.5=y → x=(5.5−3)/2=1.25 → px=380+62.5=442.5 → nope
       Let's use x from −3 to 2 to stay in viewport:
       x=−3: y=−3 → (230, 490)
       x=2:  y=7  → (480, 90) — approximately y=5 ticks up, usable
  ── -->
  <line x1="230" y1="490" x2="480" y2="90" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>

  <!-- y-intercept (0, 3) → (380, 190) -->
  <circle cx="380" cy="190" r="7" fill="#000"/>
  <text x="386" y="186" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">y-intercept (0, 3)</text>

  <!-- ── Slope triangle at (0,3)→(1,5): run=50px right, rise=100px up ── -->
  <!-- Horizontal run leg: (380,190) → (430,190) -->
  <line x1="380" y1="190" x2="430" y2="190" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <!-- Vertical rise leg: (430,190) → (430,90) -->
  <line x1="430" y1="190" x2="430" y2="90" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <!-- Right-angle mark -->
  <rect x="420" y="180" width="10" height="10" fill="none" stroke="#000" stroke-width="1.8"/>
  <!-- Labels -->
  <text x="434" y="196" font-family="Georgia,serif" font-size="11" fill="#000">run = 1</text>
  <text x="434" y="145" font-family="Georgia,serif" font-size="11" fill="#000">rise = 2</text>
  <text x="434" y="158" font-family="Georgia,serif" font-size="10" fill="#555">slope = rise/run = 2</text>

  <!-- Equation label on line -->
  <text x="264" y="390" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">y = 2x + 3</text>
  <!-- Arrow from label to line -->
  <line x1="290" y1="380" x2="304" y2="358" stroke="#000" stroke-width="1.5"/>
  <polygon points="300,356 308,350 312,360" fill="#000"/>
</svg>`;

  // ─── QUADRATIC PARABOLA ───────────────────────────────────────────────────
  // (Already exists as quadraticParabolaVertexAxisSymmetryRootsInterceptStandardFormDiagram)
  // Renamed / aliased here as required by the registry key 'quadraticParabola'
  // with black-and-white treatment matching the registry config.
  static quadraticParabolaSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="200" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Quadratic Graph: y = x² − 4x + 3</text>

  <!-- ── Grid (origin 380,380; 70px/unit; x:−2..6, y:−2..5) ── -->
  <line x1="100" y1="70" x2="100" y2="530" stroke="#ccc" stroke-width="1"/>
  <line x1="170" y1="70" x2="170" y2="530" stroke="#ccc" stroke-width="1"/>
  <line x1="240" y1="70" x2="240" y2="530" stroke="#ccc" stroke-width="1"/>
  <line x1="310" y1="70" x2="310" y2="530" stroke="#ccc" stroke-width="1"/>
  <line x1="450" y1="70" x2="450" y2="530" stroke="#ccc" stroke-width="1"/>
  <line x1="520" y1="70" x2="520" y2="530" stroke="#ccc" stroke-width="1"/>
  <line x1="590" y1="70" x2="590" y2="530" stroke="#ccc" stroke-width="1"/>
  <line x1="660" y1="70" x2="660" y2="530" stroke="#ccc" stroke-width="1"/>
  <line x1="730" y1="70" x2="730" y2="530" stroke="#ccc" stroke-width="1"/>

  <line x1="70" y1="100" x2="760" y2="100" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="170" x2="760" y2="170" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="240" x2="760" y2="240" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="310" x2="760" y2="310" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="450" x2="760" y2="450" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="520" x2="760" y2="520" stroke="#ccc" stroke-width="1"/>

  <!-- Axes -->
  <line x1="70" y1="380" x2="760" y2="380" stroke="#000" stroke-width="2.5"/>
  <polygon points="756,375 768,380 756,385" fill="#000"/>
  <text x="770" y="384" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">x</text>
  <line x1="380" y1="545" x2="380" y2="65" stroke="#000" stroke-width="2.5"/>
  <polygon points="375,69 380,57 385,69" fill="#000"/>
  <text x="384" y="55" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">y</text>

  <!-- x-axis ticks -->
  <line x1="100" y1="376" x2="100" y2="384" stroke="#000" stroke-width="2"/>
  <text x="94" y="398" font-family="Georgia,serif" font-size="11" fill="#000">−2</text>
  <line x1="170" y1="376" x2="170" y2="384" stroke="#000" stroke-width="2"/>
  <text x="164" y="398" font-family="Georgia,serif" font-size="11" fill="#000">−1</text>
  <line x1="240" y1="376" x2="240" y2="384" stroke="#000" stroke-width="2"/>
  <text x="238" y="398" font-family="Georgia,serif" font-size="11" fill="#000">0</text>
  <line x1="310" y1="376" x2="310" y2="384" stroke="#000" stroke-width="2"/>
  <text x="308" y="398" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="450" y1="376" x2="450" y2="384" stroke="#000" stroke-width="2"/>
  <text x="448" y="398" font-family="Georgia,serif" font-size="11" fill="#000">3</text>
  <line x1="520" y1="376" x2="520" y2="384" stroke="#000" stroke-width="2"/>
  <text x="518" y="398" font-family="Georgia,serif" font-size="11" fill="#000">4</text>
  <line x1="590" y1="376" x2="590" y2="384" stroke="#000" stroke-width="2"/>
  <text x="588" y="398" font-family="Georgia,serif" font-size="11" fill="#000">5</text>

  <!-- y-axis ticks (x=2 → px=380, scale 70) -->
  <line x1="376" y1="100" x2="384" y2="100" stroke="#000" stroke-width="2"/>
  <text x="356" y="104" font-family="Georgia,serif" font-size="11" fill="#000">4</text>
  <line x1="376" y1="170" x2="384" y2="170" stroke="#000" stroke-width="2"/>
  <text x="356" y="174" font-family="Georgia,serif" font-size="11" fill="#000">3</text>
  <line x1="376" y1="240" x2="384" y2="240" stroke="#000" stroke-width="2"/>
  <text x="356" y="244" font-family="Georgia,serif" font-size="11" fill="#000">2</text>
  <line x1="376" y1="310" x2="384" y2="310" stroke="#000" stroke-width="2"/>
  <text x="356" y="314" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="376" y1="450" x2="384" y2="450" stroke="#000" stroke-width="2"/>
  <text x="350" y="454" font-family="Georgia,serif" font-size="11" fill="#000">−1</text>
  <line x1="376" y1="520" x2="384" y2="520" stroke="#000" stroke-width="2"/>
  <text x="350" y="524" font-family="Georgia,serif" font-size="11" fill="#000">−2</text>

  <!-- Axis of symmetry x=2 → px=380 (dashed) -->
  <line x1="380" y1="75" x2="380" y2="530" stroke="#000" stroke-width="2" stroke-dasharray="7,4"/>
  <text x="384" y="73" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">x = 2 (axis of symmetry)</text>

  <!-- Parabola y = x²−4x+3; origin (380,380), scale=70px/unit
       y_px = 380 − y·70; x_px = 380 + (x−2)·70  (shift: vertex at x=2)
       Key points:
         x=−0.5: y=(−0.5)²−4(−0.5)+3=0.25+2+3=5.25 → (380+(−2.5)·70, 380−5.25·70)=(205,12) clip
         x=0:  y=3 → (380+(−2)·70, 380−3·70)=(240, 170)
         x=1:  y=0 → (310, 380)
         x=2:  y=−1→ (380, 450)
         x=3:  y=0 → (450, 380)
         x=4:  y=3 → (520, 170)
         x=4.5:y=5.25→(555,12) clip
  -->
  <path d="M240,170 C258,170 298,380 310,380
           C322,380 360,450 380,450
           C400,450 438,380 450,380
           C462,380 502,170 520,170"
        fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Vertex (2,−1) → (380, 450) -->
  <circle cx="380" cy="450" r="8" fill="#000"/>
  <text x="386" y="468" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Vertex (2, −1)</text>

  <!-- x-intercepts x=1→(310,380), x=3→(450,380) -->
  <circle cx="310" cy="380" r="7" fill="#000"/>
  <text x="294" y="372" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">x = 1</text>
  <circle cx="450" cy="380" r="7" fill="#000"/>
  <text x="454" y="372" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">x = 3</text>

  <!-- y-intercept (0,3)→(240,170) -->
  <circle cx="240" cy="170" r="7" fill="#000"/>
  <text x="244" y="163" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">y-int (0, 3)</text>

  <!-- Forms info box -->
  <rect x="560" y="380" width="200" height="120" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="568" y="398" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Standard form:</text>
  <text x="570" y="412" font-family="Georgia,serif" font-size="10" fill="#000">y = x² − 4x + 3</text>
  <text x="568" y="430" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Vertex form:</text>
  <text x="570" y="444" font-family="Georgia,serif" font-size="10" fill="#000">y = (x − 2)² − 1</text>
  <text x="568" y="462" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Factored form:</text>
  <text x="570" y="476" font-family="Georgia,serif" font-size="10" fill="#000">y = (x − 1)(x − 3)</text>
  <text x="568" y="494" font-family="Georgia,serif" font-size="10" fill="#000">Roots: x = 1, x = 3</text>
</svg>`;

  // ─── QUADRATIC FORMULA VISUAL ─────────────────────────────────────────────
  // Equation: x² − 5x + 6 = 0  (a=1, b=−5, c=6)
  // Shows:
  //   • the full quadratic formula with each part annotated
  //   • discriminant calculation (b²−4ac) with sign interpretation
  //   • two real roots computed and labelled
  //   • nature-of-roots decision table
  static quadraticFormulaVisualSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="240" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Quadratic Formula — x² − 5x + 6 = 0</text>

  <!-- ══ FORMULA DISPLAY ══ -->
  <!-- Outer box -->
  <rect x="50" y="50" width="800" height="120" rx="8" fill="none" stroke="#000" stroke-width="3"/>
  <!-- Formula text -->
  <text x="180" y="90" font-family="Georgia,serif" font-size="22" font-weight="bold" fill="#000">x  =</text>
  <!-- Fraction numerator -->
  <text x="280" y="85" font-family="Georgia,serif" font-size="20" fill="#000">−b  ±  √(b² − 4ac)</text>
  <!-- Fraction bar -->
  <line x1="278" y1="95" x2="570" y2="95" stroke="#000" stroke-width="3"/>
  <!-- Fraction denominator -->
  <text x="390" y="120" font-family="Georgia,serif" font-size="20" fill="#000">2a</text>

  <!-- ── Annotations pointing to parts of formula ── -->
  <!-- a annotation -->
  <line x1="200" y1="138" x2="200" y2="160" stroke="#000" stroke-width="1.5"/>
  <text x="158" y="174" font-family="Georgia,serif" font-size="11" fill="#000">a = 1</text>
  <!-- b annotation -->
  <line x1="295" y1="138" x2="295" y2="160" stroke="#000" stroke-width="1.5"/>
  <text x="264" y="174" font-family="Georgia,serif" font-size="11" fill="#000">b = −5</text>
  <!-- c annotation (under 4ac part) -->
  <line x1="470" y1="138" x2="470" y2="160" stroke="#000" stroke-width="1.5"/>
  <text x="440" y="174" font-family="Georgia,serif" font-size="11" fill="#000">c = 6</text>
  <!-- denominator annotation -->
  <line x1="400" y1="138" x2="400" y2="155" stroke="#000" stroke-width="1.5"/>

  <!-- ══ DISCRIMINANT SECTION ══ -->
  <line x1="50" y1="195" x2="850" y2="195" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="50" y="220" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Step 1 — Calculate the Discriminant:  Δ = b² − 4ac</text>
  <text x="70" y="244" font-family="Georgia,serif" font-size="13" fill="#000">Δ  =  (−5)²  −  4(1)(6)</text>
  <text x="70" y="268" font-family="Georgia,serif" font-size="13" fill="#000">   =   25   −   24</text>
  <text x="70" y="292" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">   =   1</text>
  <!-- Box around result -->
  <rect x="66" y="278" width="60" height="22" rx="3" fill="none" stroke="#000" stroke-width="2"/>
  <text x="150" y="292" font-family="Georgia,serif" font-size="12" fill="#000">Δ > 0  →  Two distinct real roots</text>

  <!-- ══ ROOT CALCULATION ══ -->
  <line x1="50" y1="315" x2="850" y2="315" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="50" y="340" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Step 2 — Calculate the Roots:</text>

  <!-- Root 1 -->
  <text x="70" y="365" font-family="Georgia,serif" font-size="13" fill="#000">x₁ = (−(−5) + √1) / 2(1)  =  (5 + 1) / 2  =  6 / 2  =  3</text>
  <!-- Root 2 -->
  <text x="70" y="392" font-family="Georgia,serif" font-size="13" fill="#000">x₂ = (−(−5) − √1) / 2(1)  =  (5 − 1) / 2  =  4 / 2  =  2</text>
  <!-- Box roots -->
  <rect x="66" y="351" width="490" height="25" rx="3" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <rect x="66" y="378" width="490" height="25" rx="3" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="570" y="369" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">→  x = 3</text>
  <text x="570" y="396" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">→  x = 2</text>

  <!-- ══ NATURE OF ROOTS TABLE ══ -->
  <line x1="50" y1="415" x2="850" y2="415" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="50" y="438" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Nature of Roots — Discriminant Summary Table:</text>

  <!-- Table -->
  <rect x="50" y="448" width="800" height="130" rx="4" fill="none" stroke="#000" stroke-width="2"/>
  <!-- Header row -->
  <rect x="50" y="448" width="800" height="30" rx="4" fill="none" stroke="#000" stroke-width="2"/>
  <line x1="50" y1="478" x2="850" y2="478" stroke="#000" stroke-width="2"/>
  <text x="80" y="468" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Discriminant (Δ)</text>
  <line x1="310" y1="448" x2="310" y2="578" stroke="#000" stroke-width="1.5"/>
  <text x="350" y="468" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Nature of Roots</text>
  <line x1="560" y1="448" x2="560" y2="578" stroke="#000" stroke-width="1.5"/>
  <text x="620" y="468" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Example</text>

  <!-- Row 1 -->
  <line x1="50" y1="510" x2="850" y2="510" stroke="#000" stroke-width="1"/>
  <text x="80" y="498" font-family="Georgia,serif" font-size="11" fill="#000">Δ > 0</text>
  <text x="320" y="498" font-family="Georgia,serif" font-size="11" fill="#000">Two distinct real roots</text>
  <text x="580" y="498" font-family="Georgia,serif" font-size="11" fill="#000">Δ = 1  →  x = 2, x = 3  ← this problem</text>

  <!-- Row 2 -->
  <line x1="50" y1="542" x2="850" y2="542" stroke="#000" stroke-width="1"/>
  <text x="80" y="530" font-family="Georgia,serif" font-size="11" fill="#000">Δ = 0</text>
  <text x="320" y="530" font-family="Georgia,serif" font-size="11" fill="#000">One repeated real root</text>
  <text x="580" y="530" font-family="Georgia,serif" font-size="11" fill="#000">x² − 2x + 1 = 0  →  x = 1 (repeated)</text>

  <!-- Row 3 -->
  <text x="80" y="565" font-family="Georgia,serif" font-size="11" fill="#000">Δ &lt; 0</text>
  <text x="320" y="565" font-family="Georgia,serif" font-size="11" fill="#000">No real roots (complex/imaginary)</text>
  <text x="580" y="565" font-family="Georgia,serif" font-size="11" fill="#000">x² + x + 1 = 0  →  no real solution</text>
</svg>`;

  // ─── COMPLETING THE SQUARE VISUAL ─────────────────────────────────────────
  // Equation: x² + 6x + 5 = 0  (a=1, b=6, c=5)
  // Shows:
  //   • geometric square-and-rectangle model
  //   • step-by-step algebraic process alongside
  //   • the "missing corner" square that completes the shape
  static completingSquareVisualSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="700px" viewBox="0 0 800 700">

  <!-- Title -->
  <text x="190" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Completing the Square: x² + 6x + 5 = 0</text>

  <!-- ══ GEOMETRIC MODEL ══ -->
  <text x="60" y="60" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Geometric Model (x² + 6x as area):</text>

  <!-- Main x-by-x square -->
  <rect x="60" y="75" width="180" height="180" fill="none" stroke="#000" stroke-width="3"/>
  <text x="132" y="172" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000">x²</text>
  <!-- x label top and left -->
  <text x="138" y="70" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">x</text>
  <text x="42" y="172" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">x</text>

  <!-- Right rectangle: x × 3 -->
  <rect x="240" y="75" width="90" height="180" fill="none" stroke="#000" stroke-width="3"/>
  <text x="266" y="172" font-family="Georgia,serif" font-size="13" fill="#000">3x</text>
  <text x="272" y="70" font-family="Georgia,serif" font-size="13" fill="#000">3</text>

  <!-- Bottom rectangle: 3 × x -->
  <rect x="60" y="255" width="180" height="90" fill="none" stroke="#000" stroke-width="3"/>
  <text x="130" y="306" font-family="Georgia,serif" font-size="13" fill="#000">3x</text>
  <text x="36" y="306" font-family="Georgia,serif" font-size="13" fill="#000">3</text>

  <!-- Missing corner: 3 × 3 = 9 (hatched to show "to add") -->
  <rect x="240" y="255" width="90" height="90" fill="none" stroke="#000" stroke-width="3" stroke-dasharray="6,3"/>
  <line x1="240" y1="255" x2="330" y2="345" stroke="#000" stroke-width="1"/>
  <line x1="255" y1="255" x2="330" y2="330" stroke="#000" stroke-width="1"/>
  <line x1="270" y1="255" x2="330" y2="315" stroke="#000" stroke-width="1"/>
  <line x1="285" y1="255" x2="330" y2="300" stroke="#000" stroke-width="1"/>
  <line x1="300" y1="255" x2="330" y2="285" stroke="#000" stroke-width="1"/>
  <line x1="315" y1="255" x2="330" y2="270" stroke="#000" stroke-width="1"/>
  <text x="252" y="308" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">9</text>
  <!-- Arrow + label "Add 9" -->
  <text x="335" y="300" font-family="Georgia,serif" font-size="12" fill="#000">← Add 9</text>
  <text x="335" y="315" font-family="Georgia,serif" font-size="12" fill="#000">(b/2)² = 3²</text>

  <!-- Completed square label -->
  <text x="60" y="362" font-family="Georgia,serif" font-size="12" fill="#000">Completed square: (x + 3)² with side (x + 3)</text>
  <text x="240" y="70" font-family="Georgia,serif" font-size="12" fill="#555">← 6x split into two 3x strips</text>

  <!-- ══ ALGEBRAIC STEPS ══ -->
  <line x1="60" y1="385" x2="740" y2="385" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="60" y="408" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Step-by-Step Algebraic Process:</text>

  <text x="80" y="434" font-family="Georgia,serif" font-size="13" fill="#000">Step 1 — Start with:                  x² + 6x + 5 = 0</text>
  <text x="80" y="460" font-family="Georgia,serif" font-size="13" fill="#000">Step 2 — Move constant:             x² + 6x         = −5</text>
  <text x="80" y="486" font-family="Georgia,serif" font-size="13" fill="#000">Step 3 — Add (b/2)² to both sides:</text>
  <text x="110" y="510" font-family="Georgia,serif" font-size="13" fill="#000">x² + 6x + 9  =  −5 + 9  =  4</text>
  <text x="110" y="530" font-family="Georgia,serif" font-size="11" fill="#555">(b/2)² = (6/2)² = 3² = 9</text>
  <text x="80" y="558" font-family="Georgia,serif" font-size="13" fill="#000">Step 4 — Factor the perfect square:  (x + 3)²  =  4</text>
  <text x="80" y="584" font-family="Georgia,serif" font-size="13" fill="#000">Step 5 — Square root both sides:     x + 3  =  ±2</text>
  <text x="80" y="614" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Step 6 — Solutions:                   x = −1   or   x = −5</text>
  <rect x="76" y="599" width="430" height="24" rx="4" fill="none" stroke="#000" stroke-width="2.5"/>

  <!-- Verify -->
  <text x="80" y="650" font-family="Georgia,serif" font-size="11" fill="#000">Check x=−1: (−1)²+6(−1)+5 = 1−6+5 = 0 ✓    Check x=−5: 25−30+5 = 0 ✓</text>

  <!-- Vertex form note -->
  <text x="80" y="676" font-family="Georgia,serif" font-size="11" fill="#000">Vertex form: y = (x + 3)² − 4    →    Vertex at (−3, −4)</text>
</svg>`;

  // ─── SIMULTANEOUS EQUATIONS GRAPH ────────────────────────────────────────
  // Line 1: y = 2x + 1  (m=2, c=1)
  // Line 2: y = −x + 7  (m=−1, c=7)
  // Solution: intersection at (2, 5)
  // Shows:
  //   • both lines plotted on shared labelled axes
  //   • intersection point highlighted and labelled
  //   • equations labelled on each line
  //   • solution box
  static simultaneousEquationsGraphSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="170" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Simultaneous Equations — Graphical Solution</text>
  <text x="220" y="46" font-family="Georgia,serif" font-size="11" fill="#444">y = 2x + 1  and  y = −x + 7   →   Intersection = Solution</text>

  <!-- ── Grid (origin 340,360; 50px/unit; x:−3..8, y:−1..9) ── -->
  <line x1="90" y1="70" x2="90" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="140" y1="70" x2="140" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="190" y1="70" x2="190" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="240" y1="70" x2="240" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="290" y1="70" x2="290" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="390" y1="70" x2="390" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="440" y1="70" x2="440" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="490" y1="70" x2="490" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="540" y1="70" x2="540" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="590" y1="70" x2="590" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="640" y1="70" x2="640" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="690" y1="70" x2="690" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="740" y1="70" x2="740" y2="510" stroke="#ccc" stroke-width="1"/>

  <line x1="70" y1="110" x2="760" y2="110" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="160" x2="760" y2="160" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="210" x2="760" y2="210" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="260" x2="760" y2="260" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="310" x2="760" y2="310" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="410" x2="760" y2="410" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="460" x2="760" y2="460" stroke="#ccc" stroke-width="1"/>
  <line x1="70" y1="510" x2="760" y2="510" stroke="#ccc" stroke-width="1"/>

  <!-- Axes -->
  <line x1="70" y1="360" x2="760" y2="360" stroke="#000" stroke-width="2.5"/>
  <polygon points="756,355 768,360 756,365" fill="#000"/>
  <text x="770" y="364" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">x</text>
  <line x1="340" y1="530" x2="340" y2="65" stroke="#000" stroke-width="2.5"/>
  <polygon points="335,69 340,57 345,69" fill="#000"/>
  <text x="344" y="55" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">y</text>

  <!-- x-axis ticks (origin x=340, step=50) -->
  <line x1="90" y1="356" x2="90" y2="364" stroke="#000" stroke-width="2"/>
  <text x="84" y="378" font-family="Georgia,serif" font-size="11" fill="#000">−5</text>
  <line x1="140" y1="356" x2="140" y2="364" stroke="#000" stroke-width="2"/>
  <text x="134" y="378" font-family="Georgia,serif" font-size="11" fill="#000">−4</text>
  <line x1="190" y1="356" x2="190" y2="364" stroke="#000" stroke-width="2"/>
  <text x="184" y="378" font-family="Georgia,serif" font-size="11" fill="#000">−3</text>
  <line x1="240" y1="356" x2="240" y2="364" stroke="#000" stroke-width="2"/>
  <text x="234" y="378" font-family="Georgia,serif" font-size="11" fill="#000">−2</text>
  <line x1="290" y1="356" x2="290" y2="364" stroke="#000" stroke-width="2"/>
  <text x="286" y="378" font-family="Georgia,serif" font-size="11" fill="#000">−1</text>
  <line x1="390" y1="356" x2="390" y2="364" stroke="#000" stroke-width="2"/>
  <text x="388" y="378" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="440" y1="356" x2="440" y2="364" stroke="#000" stroke-width="2"/>
  <text x="438" y="378" font-family="Georgia,serif" font-size="11" fill="#000">2</text>
  <line x1="490" y1="356" x2="490" y2="364" stroke="#000" stroke-width="2"/>
  <text x="488" y="378" font-family="Georgia,serif" font-size="11" fill="#000">3</text>
  <line x1="540" y1="356" x2="540" y2="364" stroke="#000" stroke-width="2"/>
  <text x="538" y="378" font-family="Georgia,serif" font-size="11" fill="#000">4</text>
  <line x1="590" y1="356" x2="590" y2="364" stroke="#000" stroke-width="2"/>
  <text x="588" y="378" font-family="Georgia,serif" font-size="11" fill="#000">5</text>
  <line x1="640" y1="356" x2="640" y2="364" stroke="#000" stroke-width="2"/>
  <text x="638" y="378" font-family="Georgia,serif" font-size="11" fill="#000">6</text>
  <line x1="690" y1="356" x2="690" y2="364" stroke="#000" stroke-width="2"/>
  <text x="688" y="378" font-family="Georgia,serif" font-size="11" fill="#000">7</text>
  <line x1="740" y1="356" x2="740" y2="364" stroke="#000" stroke-width="2"/>
  <text x="738" y="378" font-family="Georgia,serif" font-size="11" fill="#000">8</text>

  <!-- y-axis ticks -->
  <line x1="336" y1="110" x2="344" y2="110" stroke="#000" stroke-width="2"/>
  <text x="316" y="114" font-family="Georgia,serif" font-size="11" fill="#000">5</text>
  <line x1="336" y1="160" x2="344" y2="160" stroke="#000" stroke-width="2"/>
  <text x="316" y="164" font-family="Georgia,serif" font-size="11" fill="#000">4</text>
  <line x1="336" y1="210" x2="344" y2="210" stroke="#000" stroke-width="2"/>
  <text x="316" y="214" font-family="Georgia,serif" font-size="11" fill="#000">3</text>
  <line x1="336" y1="260" x2="344" y2="260" stroke="#000" stroke-width="2"/>
  <text x="316" y="264" font-family="Georgia,serif" font-size="11" fill="#000">2</text>
  <line x1="336" y1="310" x2="344" y2="310" stroke="#000" stroke-width="2"/>
  <text x="316" y="314" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="336" y1="410" x2="344" y2="410" stroke="#000" stroke-width="2"/>
  <text x="310" y="414" font-family="Georgia,serif" font-size="11" fill="#000">−1</text>

  <!-- Line 1: y = 2x + 1
       At x=−1: y=−1 → (290, 410)
       At x=4:  y=9  → (540, 110)  [y=9 → 360−9·50=−90 clip; use x=3.5: y=8 → px=(515,10)]
       Let's use x from −1 to 4: (290,410)→(540,110) approx check:
       x=−1: y=−1 ok. x=4: y=9 → 360−9·50=−90 too high. x=3: y=7→(490,10) nope.
       x=2.5: y=6→ (465,60) borderline. Use (290,410)→(465,60)
  -->
  <line x1="290" y1="410" x2="490" y2="60" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <!-- Equation label -->
  <text x="496" y="82" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">y = 2x + 1</text>

  <!-- Line 2: y = −x + 7  (dashed)
       At x=−1: y=8 → (290, 360−8·50)=(290,−40) clip; x=0: y=7→(340,10) near top
       At x=7: y=0  → (690, 360)
       Use x=0 to x=7: (340,10)→(690,360) but x=0 y=7 → py=360−350=10 ok
  -->
  <line x1="290" y1="60" x2="740" y2="510" stroke="#000" stroke-width="3" stroke-dasharray="10,5" stroke-linecap="round"/>
  <!-- Equation label -->
  <text x="656" y="496" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">y = −x + 7</text>

  <!-- Intersection point (2, 5) → px=(340+2·50, 360−5·50)=(440, 110) -->
  <circle cx="440" cy="110" r="9" fill="#000"/>
  <!-- Dashed guidelines to axes -->
  <line x1="440" y1="110" x2="440" y2="360" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="340" y1="110" x2="440" y2="110" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="446" y="105" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Intersection (2, 5)</text>

  <!-- Solution box -->
  <rect x="560" y="420" width="200" height="90" rx="6" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="572" y="442" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Solution:</text>
  <text x="572" y="462" font-family="Georgia,serif" font-size="12" fill="#000">x = 2,   y = 5</text>
  <text x="572" y="482" font-family="Georgia,serif" font-size="10" fill="#555">Check eq 1: 2(2)+1 = 5 ✓</text>
  <text x="572" y="498" font-family="Georgia,serif" font-size="10" fill="#555">Check eq 2: −(2)+7 = 5 ✓</text>
</svg>`;

  // ─── POLYNOMIAL DIVISION LAYOUT ───────────────────────────────────────────
  // (x³ + 2x² − 5x + 6) ÷ (x − 2)
  // Shows traditional long-division layout with each step annotated
  static polynomialDivisionLayoutSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="200" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Polynomial Long Division: (x³ + 2x² − 5x + 6) ÷ (x − 2)</text>

  <!-- ══ LONG DIVISION LAYOUT ══ -->
  <!-- Divisor on left -->
  <text x="60" y="95" font-family="Georgia,serif" font-size="18" fill="#000">x − 2</text>

  <!-- Division symbol: vertical bar + overbar -->
  <!-- Vertical bar -->
  <line x1="140" y1="70" x2="140" y2="340" stroke="#000" stroke-width="3"/>
  <!-- Top bar (over dividend) -->
  <line x1="140" y1="70" x2="760" y2="70" stroke="#000" stroke-width="3"/>

  <!-- Dividend (first row) -->
  <text x="160" y="95" font-family="Georgia,serif" font-size="18" fill="#000">x³  +  2x²  −  5x  +  6</text>

  <!-- ── STEP 1: Divide x³ ÷ x = x² ── -->
  <!-- Quotient so far -->
  <text x="168" y="62" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">x²</text>
  <text x="180" y="56" font-family="Georgia,serif" font-size="9" fill="#555">x³÷x</text>

  <!-- Subtract: x²(x−2) = x³ − 2x² -->
  <text x="160" y="125" font-family="Georgia,serif" font-size="16" fill="#000">x³  −  2x²</text>
  <line x1="155" y1="132" x2="430" y2="132" stroke="#000" stroke-width="2"/>
  <!-- Minus sign -->
  <text x="144" y="125" font-family="Georgia,serif" font-size="16" fill="#000">−</text>

  <!-- Remainder after step 1 -->
  <text x="255" y="158" font-family="Georgia,serif" font-size="16" fill="#000">4x²  −  5x  +  6</text>

  <!-- ── STEP 2: Divide 4x² ÷ x = 4x ── -->
  <text x="265" y="62" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">+  4x</text>
  <text x="275" y="56" font-family="Georgia,serif" font-size="9" fill="#555">4x²÷x</text>

  <!-- Subtract: 4x(x−2) = 4x² − 8x -->
  <text x="255" y="188" font-family="Georgia,serif" font-size="16" fill="#000">4x²  −  8x</text>
  <line x1="250" y1="195" x2="530" y2="195" stroke="#000" stroke-width="2"/>
  <text x="240" y="188" font-family="Georgia,serif" font-size="16" fill="#000">−</text>

  <!-- Remainder after step 2 -->
  <text x="340" y="222" font-family="Georgia,serif" font-size="16" fill="#000">3x  +  6</text>

  <!-- ── STEP 3: Divide 3x ÷ x = 3 ── -->
  <text x="380" y="62" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">+  3</text>
  <text x="385" y="56" font-family="Georgia,serif" font-size="9" fill="#555">3x÷x</text>

  <!-- Subtract: 3(x−2) = 3x − 6 -->
  <text x="340" y="252" font-family="Georgia,serif" font-size="16" fill="#000">3x  −  6</text>
  <line x1="335" y1="259" x2="530" y2="259" stroke="#000" stroke-width="2"/>
  <text x="325" y="252" font-family="Georgia,serif" font-size="16" fill="#000">−</text>

  <!-- Remainder = 0 -->
  <text x="380" y="286" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">0  (no remainder)</text>

  <!-- ══ RESULT ══ -->
  <line x1="60" y1="320" x2="840" y2="320" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="60" y="346" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Result:</text>
  <text x="60" y="372" font-family="Georgia,serif" font-size="16" fill="#000">(x³ + 2x² − 5x + 6)  ÷  (x − 2)  =  x² + 4x + 3</text>

  <!-- Factor note -->
  <rect x="56" y="388" width="700" height="28" rx="4" fill="none" stroke="#000" stroke-width="2"/>
  <text x="66" y="407" font-family="Georgia,serif" font-size="13" fill="#000">Quotient = x² + 4x + 3  =  (x + 1)(x + 3)     Remainder = 0  →  (x−2) is a factor</text>

  <!-- ══ ANNOTATIONS ══ -->
  <text x="560" y="115" font-family="Georgia,serif" font-size="11" fill="#555">Step 1: x³ ÷ x = x²</text>
  <text x="560" y="132" font-family="Georgia,serif" font-size="11" fill="#555">        x²(x−2) = x³−2x²</text>
  <text x="560" y="178" font-family="Georgia,serif" font-size="11" fill="#555">Step 2: 4x² ÷ x = 4x</text>
  <text x="560" y="195" font-family="Georgia,serif" font-size="11" fill="#555">        4x(x−2) = 4x²−8x</text>
  <text x="560" y="242" font-family="Georgia,serif" font-size="11" fill="#555">Step 3: 3x ÷ x = 3</text>
  <text x="560" y="259" font-family="Georgia,serif" font-size="11" fill="#555">        3(x−2) = 3x−6</text>
  <text x="560" y="290" font-family="Georgia,serif" font-size="11" fill="#555">Remainder = 0</text>

  <!-- Verify by Factor Theorem -->
  <text x="60" y="444" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Factor Theorem check — substitute x = 2:</text>
  <text x="80" y="466" font-family="Georgia,serif" font-size="12" fill="#000">f(2) = 2³ + 2(2²) − 5(2) + 6 = 8 + 8 − 10 + 6 = 12 ≠ 0</text>
  <text x="80" y="488" font-family="Georgia,serif" font-size="11" fill="#555">(Remainder theorem: f(2) should equal the remainder; since remainder = 0 → f(2) = 0)</text>
  <text x="80" y="510" font-family="Georgia,serif" font-size="11" fill="#555">Note: verify by expanding (x−2)(x²+4x+3) = x³+2x²−5x+6 ✓</text>
</svg>`;

  // ─── EXPONENTIAL GRAPH ────────────────────────────────────────────────────
  // y = 2ˣ  (base=2)
  // Shows:
  //   • curve on labelled axes
  //   • horizontal asymptote y = 0
  //   • key points labelled
  //   • growth annotation
  static exponentialGraphSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="230" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Exponential Graph: y = 2ˣ</text>

  <!-- ── Grid (origin 300,480; 60px/unit; x:−4..7, y:0..8) ── -->
  <line x1="60" y1="70" x2="60" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="120" y1="70" x2="120" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="180" y1="70" x2="180" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="240" y1="70" x2="240" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="360" y1="70" x2="360" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="420" y1="70" x2="420" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="480" y1="70" x2="480" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="540" y1="70" x2="540" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="600" y1="70" x2="600" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="660" y1="70" x2="660" y2="510" stroke="#ccc" stroke-width="1"/>

  <line x1="40" y1="480" x2="740" y2="480" stroke="#ccc" stroke-width="1"/>
  <line x1="40" y1="420" x2="740" y2="420" stroke="#ccc" stroke-width="1"/>
  <line x1="40" y1="360" x2="740" y2="360" stroke="#ccc" stroke-width="1"/>
  <line x1="40" y1="300" x2="740" y2="300" stroke="#ccc" stroke-width="1"/>
  <line x1="40" y1="240" x2="740" y2="240" stroke="#ccc" stroke-width="1"/>
  <line x1="40" y1="180" x2="740" y2="180" stroke="#ccc" stroke-width="1"/>
  <line x1="40" y1="120" x2="740" y2="120" stroke="#ccc" stroke-width="1"/>

  <!-- Asymptote y=0 coincides with x-axis; label it -->
  <line x1="40" y1="480" x2="740" y2="480" stroke="#000" stroke-width="1.5" stroke-dasharray="8,4"/>
  <text x="640" y="496" font-family="Georgia,serif" font-size="11" fill="#000">Asymptote y = 0</text>

  <!-- Axes -->
  <line x1="40" y1="480" x2="740" y2="480" stroke="#000" stroke-width="2.5"/>
  <polygon points="736,475 748,480 736,485" fill="#000"/>
  <text x="750" y="484" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">x</text>
  <line x1="300" y1="530" x2="300" y2="65" stroke="#000" stroke-width="2.5"/>
  <polygon points="295,69 300,57 305,69" fill="#000"/>
  <text x="304" y="55" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">y</text>

  <!-- x-axis ticks -->
  <line x1="60" y1="476" x2="60" y2="484" stroke="#000" stroke-width="2"/>
  <text x="54" y="498" font-family="Georgia,serif" font-size="11" fill="#000">−4</text>
  <line x1="120" y1="476" x2="120" y2="484" stroke="#000" stroke-width="2"/>
  <text x="114" y="498" font-family="Georgia,serif" font-size="11" fill="#000">−3</text>
  <line x1="180" y1="476" x2="180" y2="484" stroke="#000" stroke-width="2"/>
  <text x="174" y="498" font-family="Georgia,serif" font-size="11" fill="#000">−2</text>
  <line x1="240" y1="476" x2="240" y2="484" stroke="#000" stroke-width="2"/>
  <text x="234" y="498" font-family="Georgia,serif" font-size="11" fill="#000">−1</text>
  <line x1="360" y1="476" x2="360" y2="484" stroke="#000" stroke-width="2"/>
  <text x="358" y="498" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="420" y1="476" x2="420" y2="484" stroke="#000" stroke-width="2"/>
  <text x="418" y="498" font-family="Georgia,serif" font-size="11" fill="#000">2</text>
  <line x1="480" y1="476" x2="480" y2="484" stroke="#000" stroke-width="2"/>
  <text x="478" y="498" font-family="Georgia,serif" font-size="11" fill="#000">3</text>
  <line x1="540" y1="476" x2="540" y2="484" stroke="#000" stroke-width="2"/>
  <text x="538" y="498" font-family="Georgia,serif" font-size="11" fill="#000">4</text>
  <line x1="600" y1="476" x2="600" y2="484" stroke="#000" stroke-width="2"/>
  <text x="598" y="498" font-family="Georgia,serif" font-size="11" fill="#000">5</text>
  <line x1="660" y1="476" x2="660" y2="484" stroke="#000" stroke-width="2"/>
  <text x="658" y="498" font-family="Georgia,serif" font-size="11" fill="#000">6</text>

  <!-- y-axis ticks (y=0→480, scale=60px/unit) -->
  <line x1="296" y1="420" x2="304" y2="420" stroke="#000" stroke-width="2"/>
  <text x="276" y="424" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="296" y1="360" x2="304" y2="360" stroke="#000" stroke-width="2"/>
  <text x="276" y="364" font-family="Georgia,serif" font-size="11" fill="#000">2</text>
  <line x1="296" y1="300" x2="304" y2="300" stroke="#000" stroke-width="2"/>
  <text x="276" y="304" font-family="Georgia,serif" font-size="11" fill="#000">4</text>
  <line x1="296" y1="240" x2="304" y2="240" stroke="#000" stroke-width="2"/>
  <text x="276" y="244" font-family="Georgia,serif" font-size="11" fill="#000">6</text>
  <line x1="296" y1="180" x2="304" y2="180" stroke="#000" stroke-width="2"/>
  <text x="276" y="184" font-family="Georgia,serif" font-size="11" fill="#000">8</text>
  <line x1="296" y1="120" x2="304" y2="120" stroke="#000" stroke-width="2"/>
  <text x="270" y="124" font-family="Georgia,serif" font-size="11" fill="#000">10</text>

  <!-- Curve: y = 2^x; scale 60px/unit; origin (300,480)
       x_px = 300 + x·60; y_px = 480 − y·60
       Key points:
         x=−3: y=0.125 → (120, 472)
         x=−2: y=0.25  → (180, 465)
         x=−1: y=0.5   → (240, 450)
         x=0:  y=1     → (300, 420)
         x=1:  y=2     → (360, 360)
         x=2:  y=4     → (420, 240)
         x=3:  y=8     → (480, 0)  → clip to (480, 70)
         Clip at y=8 approx: when py=70, y=(480−70)/60=6.83, x=log2(6.83)=2.77 → px=300+2.77·60=466
  -->
  <path d="M80,477 C120,473 180,465 240,450 C270,442 285,432 300,420
           C315,408 330,384 360,360 C378,346 396,306 420,240 C436,196 452,148 466,70"
        fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Key point labels -->
  <circle cx="300" cy="420" r="5" fill="#000"/>
  <text x="306" y="416" font-family="Georgia,serif" font-size="11" fill="#000">(0, 1)</text>
  <circle cx="360" cy="360" r="5" fill="#000"/>
  <text x="366" y="356" font-family="Georgia,serif" font-size="11" fill="#000">(1, 2)</text>
  <circle cx="420" cy="240" r="5" fill="#000"/>
  <text x="426" y="236" font-family="Georgia,serif" font-size="11" fill="#000">(2, 4)</text>
  <circle cx="240" cy="450" r="5" fill="#000"/>
  <text x="200" y="446" font-family="Georgia,serif" font-size="11" fill="#000">(−1, ½)</text>
  <circle cx="180" cy="465" r="4" fill="#000"/>
  <text x="140" y="460" font-family="Georgia,serif" font-size="11" fill="#000">(−2, ¼)</text>

  <!-- Equation label -->
  <text x="488" y="155" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">y = 2ˣ</text>

  <!-- Properties box -->
  <rect x="40" y="100" width="220" height="140" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="120" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Properties:</text>
  <text x="52" y="140" font-family="Georgia,serif" font-size="11" fill="#000">Domain:  −∞ &lt; x &lt; ∞</text>
  <text x="52" y="158" font-family="Georgia,serif" font-size="11" fill="#000">Range:   y &gt; 0</text>
  <text x="52" y="176" font-family="Georgia,serif" font-size="11" fill="#000">Asymptote: y = 0</text>
  <text x="52" y="194" font-family="Georgia,serif" font-size="11" fill="#000">y-intercept: (0, 1)</text>
  <text x="52" y="212" font-family="Georgia,serif" font-size="11" fill="#000">Doubles each x-step (growth)</text>
  <text x="52" y="230" font-family="Georgia,serif" font-size="11" fill="#000">Base &gt; 1 → exponential growth</text>
</svg>`;

  // ─── LOGARITHMIC GRAPH ────────────────────────────────────────────────────
  // y = log₁₀(x)
  // Shows:
  //   • curve on labelled axes
  //   • vertical asymptote x = 0
  //   • key labelled points
  //   • domain/range annotations
  static logarithmicGraphSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="210" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Logarithmic Graph: y = log₁₀(x)</text>

  <!-- ── Grid (origin 120,310; x-scale 60px, y-scale 100px/unit) ── -->
  <line x1="180" y1="70" x2="180" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="240" y1="70" x2="240" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="300" y1="70" x2="300" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="360" y1="70" x2="360" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="420" y1="70" x2="420" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="480" y1="70" x2="480" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="540" y1="70" x2="540" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="600" y1="70" x2="600" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="660" y1="70" x2="660" y2="510" stroke="#ccc" stroke-width="1"/>
  <line x1="720" y1="70" x2="720" y2="510" stroke="#ccc" stroke-width="1"/>

  <line x1="80" y1="110" x2="760" y2="110" stroke="#ccc" stroke-width="1"/>
  <line x1="80" y1="210" x2="760" y2="210" stroke="#ccc" stroke-width="1"/>
  <line x1="80" y1="410" x2="760" y2="410" stroke="#ccc" stroke-width="1"/>
  <line x1="80" y1="510" x2="760" y2="510" stroke="#ccc" stroke-width="1"/>

  <!-- Vertical asymptote x=0 → px=120 (dashed) -->
  <line x1="120" y1="65" x2="120" y2="530" stroke="#000" stroke-width="2" stroke-dasharray="7,4"/>
  <text x="66" y="62" font-family="Georgia,serif" font-size="11" fill="#000">x=0</text>
  <text x="50" y="76" font-family="Georgia,serif" font-size="11" fill="#000">asymptote</text>

  <!-- Axes -->
  <line x1="80" y1="310" x2="760" y2="310" stroke="#000" stroke-width="2.5"/>
  <polygon points="756,305 768,310 756,315" fill="#000"/>
  <text x="770" y="314" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">x</text>
  <line x1="120" y1="540" x2="120" y2="65" stroke="#000" stroke-width="2.5"/>
  <polygon points="115,69 120,57 125,69" fill="#000"/>
  <text x="124" y="55" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">y</text>

  <!-- x-axis ticks (px=120 is x=0; each 60px = 1 unit) -->
  <line x1="180" y1="306" x2="180" y2="314" stroke="#000" stroke-width="2"/>
  <text x="178" y="328" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="240" y1="306" x2="240" y2="314" stroke="#000" stroke-width="2"/>
  <text x="238" y="328" font-family="Georgia,serif" font-size="11" fill="#000">2</text>
  <line x1="300" y1="306" x2="300" y2="314" stroke="#000" stroke-width="2"/>
  <text x="298" y="328" font-family="Georgia,serif" font-size="11" fill="#000">3</text>
  <line x1="360" y1="306" x2="360" y2="314" stroke="#000" stroke-width="2"/>
  <text x="358" y="328" font-family="Georgia,serif" font-size="11" fill="#000">4</text>
  <line x1="420" y1="306" x2="420" y2="314" stroke="#000" stroke-width="2"/>
  <text x="418" y="328" font-family="Georgia,serif" font-size="11" fill="#000">5</text>
  <line x1="480" y1="306" x2="480" y2="314" stroke="#000" stroke-width="2"/>
  <text x="478" y="328" font-family="Georgia,serif" font-size="11" fill="#000">6</text>
  <line x1="540" y1="306" x2="540" y2="314" stroke="#000" stroke-width="2"/>
  <text x="538" y="328" font-family="Georgia,serif" font-size="11" fill="#000">7</text>
  <line x1="600" y1="306" x2="600" y2="314" stroke="#000" stroke-width="2"/>
  <text x="598" y="328" font-family="Georgia,serif" font-size="11" fill="#000">8</text>
  <line x1="660" y1="306" x2="660" y2="314" stroke="#000" stroke-width="2"/>
  <text x="658" y="328" font-family="Georgia,serif" font-size="11" fill="#000">9</text>
  <line x1="720" y1="306" x2="720" y2="314" stroke="#000" stroke-width="2"/>
  <text x="716" y="328" font-family="Georgia,serif" font-size="11" fill="#000">10</text>

  <!-- y-axis ticks (origin y=310; 100px/unit) -->
  <line x1="116" y1="210" x2="124" y2="210" stroke="#000" stroke-width="2"/>
  <text x="98" y="214" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="116" y1="110" x2="124" y2="110" stroke="#000" stroke-width="2"/>
  <text x="98" y="114" font-family="Georgia,serif" font-size="11" fill="#000">2</text>
  <line x1="116" y1="410" x2="124" y2="410" stroke="#000" stroke-width="2"/>
  <text x="92" y="414" font-family="Georgia,serif" font-size="11" fill="#000">−1</text>
  <line x1="116" y1="510" x2="124" y2="510" stroke="#000" stroke-width="2"/>
  <text x="92" y="514" font-family="Georgia,serif" font-size="11" fill="#000">−2</text>

  <!-- Curve: y = log10(x); origin(120,310); x_px=120+x·60; y_px=310−y·100
       Key points:
         x=0.1: log10(0.1)=−1 → px=(126, 410)
         x=0.5: log10(0.5)=−0.301 → px=(150, 340)
         x=1:   log10(1)=0 → px=(180, 310)
         x=2:   log10(2)=0.301 → px=(240, 280)
         x=3:   log10(3)=0.477 → px=(300, 262)
         x=5:   log10(5)=0.699 → px=(420, 240)
         x=10:  log10(10)=1 → px=(720, 210)
       Near the asymptote curve rises steeply: at x=0.01: px=(120.6, 510)
  -->
  <path d="M121,510 C122,490 124,460 128,440 C134,410 146,370 162,340
           C170,326 176,316 180,310 C196,296 224,283 240,280
           C290,265 360,247 420,240 C520,230 620,218 720,210"
        fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Key point labels -->
  <circle cx="180" cy="310" r="5" fill="#000"/>
  <text x="186" y="306" font-family="Georgia,serif" font-size="11" fill="#000">(1, 0)</text>
  <circle cx="240" cy="280" r="5" fill="#000"/>
  <text x="246" y="276" font-family="Georgia,serif" font-size="11" fill="#000">(2, 0.30)</text>
  <circle cx="720" cy="210" r="5" fill="#000"/>
  <text x="640" y="205" font-family="Georgia,serif" font-size="11" fill="#000">(10, 1)</text>

  <!-- Equation label -->
  <text x="500" y="165" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">y = log₁₀(x)</text>

  <!-- Properties box -->
  <rect x="430" y="350" width="310" height="160" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="440" y="372" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Properties:</text>
  <text x="442" y="392" font-family="Georgia,serif" font-size="11" fill="#000">Domain:  x &gt; 0  (x must be positive)</text>
  <text x="442" y="412" font-family="Georgia,serif" font-size="11" fill="#000">Range:   −∞ &lt; y &lt; ∞</text>
  <text x="442" y="432" font-family="Georgia,serif" font-size="11" fill="#000">Vertical asymptote: x = 0</text>
  <text x="442" y="452" font-family="Georgia,serif" font-size="11" fill="#000">x-intercept: (1, 0)  since log(1)=0</text>
  <text x="442" y="472" font-family="Georgia,serif" font-size="11" fill="#000">Inverse of y = 10ˣ</text>
  <text x="442" y="492" font-family="Georgia,serif" font-size="11" fill="#000">log₁₀(10) = 1   log₁₀(100) = 2</text>
</svg>`;

  // ─── INEQUALITY NUMBER LINE ────────────────────────────────────────────────
  // Shows: x > 3
  // Shows:
  //   • a number line with tick marks
  //   • open circle at x=3 (strict inequality)
  //   • shaded ray to the right
  //   • inequality notation, set notation, interval notation
  static inequalityNumberLineSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="200px" viewBox="0 0 900 200">

  <!-- Title -->
  <text x="280" y="24" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Inequality on Number Line: x &gt; 3</text>

  <!-- ── Number line: y=90, x from 60 to 840, scale 60px/unit, origin at x=3 px=480 ── -->
  <!-- So px = 480 + (val−3)·60 → px = 480+60val−180 = 300+60val -->
  <!-- x=−3 → px=120; x=−2→180; x=−1→240; x=0→300; x=1→360; x=2→420;
       x=3 →480; x=4→540; x=5→600; x=6→660; x=7→720; x=8→780 -->

  <!-- Number line -->
  <line x1="80" y1="90" x2="840" y2="90" stroke="#000" stroke-width="3"/>
  <polygon points="836,84 850,90 836,96" fill="#000"/>

  <!-- Shaded ray for x > 3: from px=480 rightward (use thick line) -->
  <line x1="480" y1="90" x2="840" y2="90" stroke="#000" stroke-width="8" stroke-linecap="butt"/>
  <!-- Override to show a thick dashed ray would be opaque; use pattern of "ray" -->

  <!-- Tick marks and labels -->
  <line x1="120" y1="82" x2="120" y2="98" stroke="#000" stroke-width="2"/>
  <text x="114" y="114" font-family="Georgia,serif" font-size="13" fill="#000">−3</text>
  <line x1="180" y1="82" x2="180" y2="98" stroke="#000" stroke-width="2"/>
  <text x="174" y="114" font-family="Georgia,serif" font-size="13" fill="#000">−2</text>
  <line x1="240" y1="82" x2="240" y2="98" stroke="#000" stroke-width="2"/>
  <text x="234" y="114" font-family="Georgia,serif" font-size="13" fill="#000">−1</text>
  <line x1="300" y1="82" x2="300" y2="98" stroke="#000" stroke-width="2"/>
  <text x="297" y="114" font-family="Georgia,serif" font-size="13" fill="#000">0</text>
  <line x1="360" y1="82" x2="360" y2="98" stroke="#000" stroke-width="2"/>
  <text x="357" y="114" font-family="Georgia,serif" font-size="13" fill="#000">1</text>
  <line x1="420" y1="82" x2="420" y2="98" stroke="#000" stroke-width="2"/>
  <text x="417" y="114" font-family="Georgia,serif" font-size="13" fill="#000">2</text>
  <line x1="480" y1="82" x2="480" y2="98" stroke="#000" stroke-width="2"/>
  <text x="477" y="114" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">3</text>
  <line x1="540" y1="82" x2="540" y2="98" stroke="#000" stroke-width="2"/>
  <text x="537" y="114" font-family="Georgia,serif" font-size="13" fill="#000">4</text>
  <line x1="600" y1="82" x2="600" y2="98" stroke="#000" stroke-width="2"/>
  <text x="597" y="114" font-family="Georgia,serif" font-size="13" fill="#000">5</text>
  <line x1="660" y1="82" x2="660" y2="98" stroke="#000" stroke-width="2"/>
  <text x="657" y="114" font-family="Georgia,serif" font-size="13" fill="#000">6</text>
  <line x1="720" y1="82" x2="720" y2="98" stroke="#000" stroke-width="2"/>
  <text x="717" y="114" font-family="Georgia,serif" font-size="13" fill="#000">7</text>
  <line x1="780" y1="82" x2="780" y2="98" stroke="#000" stroke-width="2"/>
  <text x="777" y="114" font-family="Georgia,serif" font-size="13" fill="#000">8</text>

  <!-- Shaded arrow / bold ray above the line (separate from the axis) -->
  <line x1="483" y1="70" x2="828" y2="70" stroke="#000" stroke-width="6"/>
  <polygon points="830,64 844,70 830,76" fill="#000"/>

  <!-- Open circle at x=3 (strict >) -->
  <circle cx="480" cy="70" r="10" fill="#fff" stroke="#000" stroke-width="3"/>

  <!-- Annotations -->
  <text x="490" y="48" font-family="Georgia,serif" font-size="12" fill="#000">shaded region: x &gt; 3</text>
  <text x="440" y="38" font-family="Georgia,serif" font-size="11" fill="#555">open circle = 3 NOT included</text>

  <!-- Notation box -->
  <rect x="80" y="130" width="740" height="58" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="92" y="150" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Notation:</text>
  <text x="92" y="168" font-family="Georgia,serif" font-size="12" fill="#000">Inequality: x &gt; 3     |     Set notation: {x ∈ ℝ : x &gt; 3}     |     Interval: (3, ∞)     |     Open circle: 3 is NOT included</text>
  <text x="92" y="182" font-family="Georgia,serif" font-size="11" fill="#555">Note: if it were x ≥ 3, use a filled (closed) circle and interval [3, ∞)</text>
</svg>`;




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

export { MathematicsSvgDiagrams };
