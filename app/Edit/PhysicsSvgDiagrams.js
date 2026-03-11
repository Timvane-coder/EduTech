class PhysicsSvgDiagrams {

  // ─── 1. FREE BODY DIAGRAM ─────────────────────────────────────────────────
  // Shows a block on a surface with:
  //   • Weight (W) arrow pointing downward
  //   • Normal force (N) arrow pointing upward
  //   • Applied force (F) arrow pointing right
  //   • Friction force (f) arrow pointing left
  //   • Tension arrow (optional, shown as T at angle)
  //   • Net force annotation and equilibrium note
  //   • Force labels with magnitude placeholders
  static freeBodyDiagramsvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 500 420">

  <!-- Title -->
  <text x="110" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Free Body Diagram — Block on a Surface</text>
  <text x="120" y="38" font-family="Georgia,serif" font-size="10" fill="#444">All forces acting on the object shown as vectors from centre of mass</text>

  <!-- ── Surface (ground line) ── -->
  <line x1="60" y1="290" x2="440" y2="290" stroke="#555" stroke-width="3" stroke-linecap="round"/>
  <!-- Hatch marks to indicate ground -->
  <line x1="70"  y1="290" x2="60"  y2="305" stroke="#555" stroke-width="1.5"/>
  <line x1="95"  y1="290" x2="85"  y2="305" stroke="#555" stroke-width="1.5"/>
  <line x1="120" y1="290" x2="110" y2="305" stroke="#555" stroke-width="1.5"/>
  <line x1="145" y1="290" x2="135" y2="305" stroke="#555" stroke-width="1.5"/>
  <line x1="170" y1="290" x2="160" y2="305" stroke="#555" stroke-width="1.5"/>
  <line x1="195" y1="290" x2="185" y2="305" stroke="#555" stroke-width="1.5"/>
  <line x1="220" y1="290" x2="210" y2="305" stroke="#555" stroke-width="1.5"/>
  <line x1="245" y1="290" x2="235" y2="305" stroke="#555" stroke-width="1.5"/>
  <line x1="270" y1="290" x2="260" y2="305" stroke="#555" stroke-width="1.5"/>
  <line x1="295" y1="290" x2="285" y2="305" stroke="#555" stroke-width="1.5"/>
  <line x1="320" y1="290" x2="310" y2="305" stroke="#555" stroke-width="1.5"/>
  <line x1="345" y1="290" x2="335" y2="305" stroke="#555" stroke-width="1.5"/>
  <line x1="370" y1="290" x2="360" y2="305" stroke="#555" stroke-width="1.5"/>
  <line x1="395" y1="290" x2="385" y2="305" stroke="#555" stroke-width="1.5"/>
  <line x1="420" y1="290" x2="410" y2="305" stroke="#555" stroke-width="1.5"/>
  <line x1="440" y1="290" x2="430" y2="305" stroke="#555" stroke-width="1.5"/>

  <!-- ── Block ── (centre of mass at 250, 230) -->
  <rect x="190" y="210" width="120" height="80" rx="4"
        fill="#e2e8f0" stroke="#334155" stroke-width="3"/>
  <text x="236" y="256" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#334155">m</text>
  <!-- Centre-of-mass dot -->
  <circle cx="250" cy="250" r="4" fill="#000"/>
  <!-- small cross -->
  <line x1="244" y1="250" x2="256" y2="250" stroke="#000" stroke-width="1.5"/>
  <line x1="250" y1="244" x2="250" y2="256" stroke="#000" stroke-width="1.5"/>

  <!-- ── Normal Force N (upward) ── -->
  <line x1="250" y1="210" x2="250" y2="100" stroke="#15803d" stroke-width="3" stroke-linecap="round"/>
  <polygon points="244,104 250,88 256,104" fill="#15803d"/>
  <text x="258" y="98" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#15803d">N</text>
  <text x="258" y="112" font-family="Georgia,serif" font-size="10" fill="#15803d">(Normal force)</text>
  <!-- magnitude -->
  <text x="258" y="126" font-family="Georgia,serif" font-size="10" fill="#15803d">= mg cos θ</text>

  <!-- ── Weight W (downward) ── -->
  <line x1="250" y1="290" x2="250" y2="390" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
  <polygon points="244,386 250,402 256,386" fill="#dc2626"/>
  <text x="258" y="370" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#dc2626">W</text>
  <text x="258" y="384" font-family="Georgia,serif" font-size="10" fill="#dc2626">(Weight = mg)</text>

  <!-- ── Applied Force F (rightward) ── -->
  <line x1="310" y1="250" x2="420" y2="250" stroke="#1d4ed8" stroke-width="3" stroke-linecap="round"/>
  <polygon points="416,244 432,250 416,256" fill="#1d4ed8"/>
  <text x="430" y="244" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#1d4ed8">F</text>
  <text x="418" y="262" font-family="Georgia,serif" font-size="10" fill="#1d4ed8">(Applied)</text>

  <!-- ── Friction Force f (leftward) ── -->
  <line x1="190" y1="250" x2="80" y2="250" stroke="#b45309" stroke-width="3" stroke-linecap="round"/>
  <polygon points="84,244 68,250 84,256" fill="#b45309"/>
  <text x="40" y="244" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#b45309">f</text>
  <text x="30" y="262" font-family="Georgia,serif" font-size="10" fill="#b45309">(Friction)</text>
  <text x="28" y="276" font-family="Georgia,serif" font-size="10" fill="#b45309">= μN</text>

  <!-- ── Tension T (upper-right, at angle) ── -->
  <line x1="310" y1="210" x2="390" y2="148" stroke="#7c3aed" stroke-width="3" stroke-linecap="round"/>
  <polygon points="384,148 398,140 390,154" fill="#7c3aed"/>
  <text x="398" y="142" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#7c3aed">T</text>
  <text x="392" y="156" font-family="Georgia,serif" font-size="10" fill="#7c3aed">(Tension)</text>
  <!-- angle arc -->
  <path d="M340,210 A32,32 0 0,0 362,186" fill="none" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="352" y="204" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#7c3aed">θ</text>

  <!-- ── Coordinate axes (small, bottom-right corner) ── -->
  <line x1="420" y1="370" x2="460" y2="370" stroke="#000" stroke-width="2"/>
  <polygon points="456,366 466,370 456,374" fill="#000"/>
  <text x="468" y="374" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">x</text>
  <line x1="420" y1="370" x2="420" y2="330" stroke="#000" stroke-width="2"/>
  <polygon points="416,334 420,324 424,334" fill="#000"/>
  <text x="424" y="326" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">y</text>

  <!-- ── Info box ── -->
  <rect x="58" y="330" width="300" height="76" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="68" y="348" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Newton's 2nd Law applied:</text>
  <text x="68" y="364" font-family="Georgia,serif" font-size="11" fill="#000">ΣFx = F − f = ma   (horizontal)</text>
  <text x="68" y="380" font-family="Georgia,serif" font-size="11" fill="#000">ΣFy = N − W = 0   (vertical, no acceleration)</text>
  <text x="68" y="396" font-family="Georgia,serif" font-size="10" fill="#555">Equilibrium: ΣF = 0 ⟹ a = 0</text>
</svg>`;

  // ─── 2. TRANSVERSE VS LONGITUDINAL WAVE ──────────────────────────────────
  // Compares the two wave types side-by-side showing:
  //   • Transverse wave: sinusoidal curve, particle motion perpendicular to propagation
  //   • Longitudinal wave: compression/rarefaction bands, particle motion parallel
  //   • Wavelength (λ), amplitude (A), crest, trough labels
  //   • Propagation direction arrows
  //   • Particle displacement arrows for each type
  static transverseVsLongitudinalParticleMotionDiagramsvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 560 460">

  <!-- Title -->
  <text x="100" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Transverse vs Longitudinal Waves — Particle Motion</text>

  <!-- ══════════════════════════════════════════
       SECTION 1 — TRANSVERSE WAVE (top half)
  ══════════════════════════════════════════ -->
  <text x="20" y="50" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#1e40af">1. Transverse Wave</text>
  <text x="20" y="64" font-family="Georgia,serif" font-size="10" fill="#555">Particle motion ⊥ to wave propagation direction</text>

  <!-- Propagation direction arrow -->
  <line x1="60" y1="75" x2="520" y2="75" stroke="#1e40af" stroke-width="2" stroke-dasharray="6,3"/>
  <polygon points="516,70 528,75 516,80" fill="#1e40af"/>
  <text x="390" y="70" font-family="Georgia,serif" font-size="10" fill="#1e40af">wave propagation →</text>

  <!-- Sinusoidal wave path (amplitude=45px, wavelength=120px, 3.5 cycles, centre y=130) -->
  <!-- Using cubic bezier approximation of sine: full sine period = M x0,y0 C ... -->
  <path d="
    M 60,130
    C 75,130 75,85  90,85
    C 105,85 105,130 120,130
    C 135,130 135,175 150,175
    C 165,175 165,130 180,130
    C 195,130 195,85  210,85
    C 225,85 225,130 240,130
    C 255,130 255,175 270,175
    C 285,175 285,130 300,130
    C 315,130 315,85  330,85
    C 345,85 345,130 360,130
    C 375,130 375,175 390,175
    C 405,175 405,130 420,130
    C 435,130 435,85  450,85
    C 465,85 465,130 480,130
  " fill="none" stroke="#1e40af" stroke-width="3" stroke-linecap="round"/>

  <!-- Amplitude arrow (vertical, left side) -->
  <line x1="50" y1="130" x2="50" y2="85" stroke="#dc2626" stroke-width="2"/>
  <polygon points="46,89 50,79 54,89" fill="#dc2626"/>
  <polygon points="46,126 50,136 54,126" fill="#dc2626"/>
  <text x="22" y="112" font-family="Georgia,serif" font-size="11" font-weight="bold" font-style="italic" fill="#dc2626">A</text>

  <!-- Wavelength arrow (horizontal, between two crests at y=85) -->
  <line x1="90" y1="72" x2="210" y2="72" stroke="#555" stroke-width="1.8"/>
  <polygon points="94,68 84,72 94,76" fill="#555"/>
  <polygon points="206,68 216,72 206,76" fill="#555"/>
  <text x="138" y="67" font-family="Georgia,serif" font-size="11" font-weight="bold" font-style="italic" fill="#555">λ</text>

  <!-- Crest and trough labels -->
  <text x="86"  y="82" font-family="Georgia,serif" font-size="9" fill="#1e40af">crest</text>
  <text x="144" y="184" font-family="Georgia,serif" font-size="9" fill="#1e40af">trough</text>

  <!-- Particle displacement arrows (vertical, showing ⊥ motion) -->
  <!-- At several x-positions along the wave, draw small vertical arrows for particles -->
  <!-- x=90 (crest) particle displaced upward -->
  <line x1="90" y1="140" x2="90" y2="100" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="none"/>
  <polygon points="86,104 90,94 94,104" fill="#dc2626"/>
  <!-- x=150 (equilibrium) particle at rest -->
  <circle cx="150" cy="130" r="4" fill="#dc2626"/>
  <!-- x=210 (crest) up -->
  <line x1="210" y1="140" x2="210" y2="100" stroke="#dc2626" stroke-width="1.8"/>
  <polygon points="206,104 210,94 214,104" fill="#dc2626"/>
  <!-- x=270 (trough) down -->
  <line x1="270" y1="122" x2="270" y2="162" stroke="#dc2626" stroke-width="1.8"/>
  <polygon points="266,158 270,168 274,158" fill="#dc2626"/>
  <!-- x=330 crest -->
  <line x1="330" y1="140" x2="330" y2="100" stroke="#dc2626" stroke-width="1.8"/>
  <polygon points="326,104 330,94 334,104" fill="#dc2626"/>
  <!-- x=390 trough -->
  <line x1="390" y1="122" x2="390" y2="162" stroke="#dc2626" stroke-width="1.8"/>
  <polygon points="386,158 390,168 394,158" fill="#dc2626"/>

  <!-- Particle motion label -->
  <text x="498" y="100" font-family="Georgia,serif" font-size="10" fill="#dc2626">particle</text>
  <text x="498" y="112" font-family="Georgia,serif" font-size="10" fill="#dc2626">motion</text>
  <text x="498" y="124" font-family="Georgia,serif" font-size="10" fill="#dc2626">(vertical)</text>

  <!-- equilibrium dashed line -->
  <line x1="60" y1="130" x2="490" y2="130" stroke="#bbb" stroke-width="1" stroke-dasharray="4,4"/>
  <text x="494" y="134" font-family="Georgia,serif" font-size="9" fill="#999">eq.</text>

  <!-- ══════════════════════════════════════════
       SECTION 2 — LONGITUDINAL WAVE (bottom half)
  ══════════════════════════════════════════ -->
  <text x="20" y="230" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#15803d">2. Longitudinal Wave</text>
  <text x="20" y="244" font-family="Georgia,serif" font-size="10" fill="#555">Particle motion ∥ to wave propagation direction</text>

  <!-- Propagation direction arrow -->
  <line x1="60" y1="255" x2="520" y2="255" stroke="#15803d" stroke-width="2" stroke-dasharray="6,3"/>
  <polygon points="516,250 528,255 516,260" fill="#15803d"/>
  <text x="380" y="250" font-family="Georgia,serif" font-size="10" fill="#15803d">wave propagation →</text>

  <!-- Compression / rarefaction bands (sinusoidally varying density of vertical lines) -->
  <!-- Represent compressions as dark packed bands, rarefactions as sparse bands -->
  <!-- Band centres at x = 90(comp), 150(rare), 210(comp), 270(rare), 330(comp), 390(rare), 450(comp) -->
  <!-- Compression bands: wide filled rect with vertical lines inside -->
  <!-- C1 at x=70–110 -->
  <rect x="70" y="265" width="40" height="50" fill="#bbf7d0" fill-opacity="0.5" stroke="none"/>
  <line x1="76" y1="265" x2="76" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <line x1="82" y1="265" x2="82" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <line x1="88" y1="265" x2="88" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <line x1="94" y1="265" x2="94" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <line x1="100" y1="265" x2="100" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <line x1="106" y1="265" x2="106" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <!-- R1 rarefaction at x=110–170 -->
  <line x1="120" y1="265" x2="120" y2="315" stroke="#15803d" stroke-width="1"/>
  <line x1="140" y1="265" x2="140" y2="315" stroke="#15803d" stroke-width="1"/>
  <line x1="160" y1="265" x2="160" y2="315" stroke="#15803d" stroke-width="1"/>
  <!-- C2 at x=170–210 -->
  <rect x="170" y="265" width="40" height="50" fill="#bbf7d0" fill-opacity="0.5" stroke="none"/>
  <line x1="176" y1="265" x2="176" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <line x1="182" y1="265" x2="182" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <line x1="188" y1="265" x2="188" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <line x1="194" y1="265" x2="194" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <line x1="200" y1="265" x2="200" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <line x1="206" y1="265" x2="206" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <!-- R2 -->
  <line x1="222" y1="265" x2="222" y2="315" stroke="#15803d" stroke-width="1"/>
  <line x1="242" y1="265" x2="242" y2="315" stroke="#15803d" stroke-width="1"/>
  <line x1="262" y1="265" x2="262" y2="315" stroke="#15803d" stroke-width="1"/>
  <!-- C3 -->
  <rect x="270" y="265" width="40" height="50" fill="#bbf7d0" fill-opacity="0.5" stroke="none"/>
  <line x1="276" y1="265" x2="276" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <line x1="282" y1="265" x2="282" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <line x1="288" y1="265" x2="288" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <line x1="294" y1="265" x2="294" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <line x1="300" y1="265" x2="300" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <line x1="306" y1="265" x2="306" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <!-- R3 -->
  <line x1="322" y1="265" x2="322" y2="315" stroke="#15803d" stroke-width="1"/>
  <line x1="342" y1="265" x2="342" y2="315" stroke="#15803d" stroke-width="1"/>
  <line x1="362" y1="265" x2="362" y2="315" stroke="#15803d" stroke-width="1"/>
  <!-- C4 -->
  <rect x="370" y="265" width="40" height="50" fill="#bbf7d0" fill-opacity="0.5" stroke="none"/>
  <line x1="376" y1="265" x2="376" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <line x1="382" y1="265" x2="382" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <line x1="388" y1="265" x2="388" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <line x1="394" y1="265" x2="394" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <line x1="400" y1="265" x2="400" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <line x1="406" y1="265" x2="406" y2="315" stroke="#15803d" stroke-width="2.5"/>
  <!-- R4 -->
  <line x1="422" y1="265" x2="422" y2="315" stroke="#15803d" stroke-width="1"/>
  <line x1="442" y1="265" x2="442" y2="315" stroke="#15803d" stroke-width="1"/>
  <line x1="462" y1="265" x2="462" y2="315" stroke="#15803d" stroke-width="1"/>

  <!-- Border of the medium channel -->
  <rect x="60" y="265" width="420" height="50" fill="none" stroke="#334155" stroke-width="2" rx="2"/>

  <!-- Compression / Rarefaction labels -->
  <text x="74" y="328" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#15803d">C</text>
  <text x="130" y="328" font-family="Georgia,serif" font-size="9" fill="#15803d">R</text>
  <text x="176" y="328" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#15803d">C</text>
  <text x="232" y="328" font-family="Georgia,serif" font-size="9" fill="#15803d">R</text>
  <text x="276" y="328" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#15803d">C</text>
  <text x="332" y="328" font-family="Georgia,serif" font-size="9" fill="#15803d">R</text>
  <text x="376" y="328" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#15803d">C</text>
  <text x="432" y="328" font-family="Georgia,serif" font-size="9" fill="#15803d">R</text>

  <!-- Particle motion arrows (horizontal ←→) below band diagram -->
  <!-- Arrows showing particles move left-right (parallel to wave) -->
  <line x1="90" y1="348" x2="130" y2="348" stroke="#dc2626" stroke-width="2"/>
  <polygon points="126,344 136,348 126,352" fill="#dc2626"/>
  <polygon points="94,344 84,348 94,352" fill="#dc2626"/>
  <line x1="190" y1="348" x2="230" y2="348" stroke="#dc2626" stroke-width="2"/>
  <polygon points="226,344 236,348 226,352" fill="#dc2626"/>
  <polygon points="194,344 184,348 194,352" fill="#dc2626"/>
  <line x1="290" y1="348" x2="330" y2="348" stroke="#dc2626" stroke-width="2"/>
  <polygon points="326,344 336,348 326,352" fill="#dc2626"/>
  <polygon points="294,344 284,348 294,352" fill="#dc2626"/>
  <line x1="390" y1="348" x2="430" y2="348" stroke="#dc2626" stroke-width="2"/>
  <polygon points="426,344 436,348 426,352" fill="#dc2626"/>
  <polygon points="394,344 384,348 394,352" fill="#dc2626"/>

  <text x="498" y="355" font-family="Georgia,serif" font-size="10" fill="#dc2626">particle</text>
  <text x="498" y="367" font-family="Georgia,serif" font-size="10" fill="#dc2626">motion</text>
  <text x="498" y="379" font-family="Georgia,serif" font-size="10" fill="#dc2626">(horiz.)</text>

  <!-- Wavelength annotation: C-to-C = λ -->
  <line x1="90" y1="338" x2="190" y2="338" stroke="#555" stroke-width="1.5"/>
  <polygon points="94,334 84,338 94,342" fill="#555"/>
  <polygon points="186,334 196,338 186,342" fill="#555"/>
  <text x="130" y="334" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#555">λ</text>

  <!-- ── Comparison info box ── -->
  <rect x="40" y="390" width="480" height="58" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="50" y="408" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Comparison:</text>
  <text x="50" y="424" font-family="Georgia,serif" font-size="10" fill="#1e40af">Transverse: E.g. light, water surface waves, strings — oscillation ⊥ propagation</text>
  <text x="50" y="440" font-family="Georgia,serif" font-size="10" fill="#15803d">Longitudinal: E.g. sound, P-seismic waves — oscillation ∥ propagation (C = compression, R = rarefaction)</text>
</svg>`;

  // ─── 3. CONCAVE MIRROR RAY DIAGRAM ───────────────────────────────────────
  // Shows ray diagram for a concave mirror with object beyond 2F:
  //   • Principal axis with C (centre of curvature) and F (focal point)
  //   • Curved mirror drawn as an arc
  //   • Three principal rays from object tip:
  //       Ray 1: parallel to axis → reflects through F
  //       Ray 2: through F → reflects parallel to axis
  //       Ray 3: through C → reflects back through C
  //   • Object and image arrows
  //   • Labels for F, 2F (=C), image properties
  static concaveMirrorRayDiagramFocalPointImageFormationDiagramsvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 560 380">

  <!-- Title -->
  <text x="100" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Concave Mirror — Ray Diagram (Object beyond 2F)</text>
  <text x="110" y="38" font-family="Georgia,serif" font-size="10" fill="#444">Image is real, inverted, diminished — between F and 2F</text>

  <!-- ── Principal axis ── (y=210, mirror at x=390) -->
  <line x1="30" y1="210" x2="520" y2="210" stroke="#000" stroke-width="2" stroke-linecap="round"/>

  <!-- ── Concave mirror arc (opens leftward, vertex at x=390, y=210) ──
       Centre of curvature at (190,210), radius=200
       Arc from (390,130) to (390,290) via path
  -->
  <path d="M 390,110 Q 430,210 390,310"
        fill="none" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
  <!-- Reflective surface fill hint -->
  <path d="M 390,110 Q 430,210 390,310 L 405,310 Q 450,210 405,110 Z"
        fill="#e2e8f0" fill-opacity="0.5" stroke="none"/>
  <!-- Hatch to indicate mirror back -->
  <line x1="396" y1="118" x2="408" y2="108" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="396" y1="148" x2="412" y2="136" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="396" y1="178" x2="414" y2="166" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="396" y1="208" x2="415" y2="198" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="396" y1="238" x2="414" y2="228" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="396" y1="268" x2="412" y2="258" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="396" y1="298" x2="408" y2="288" stroke="#94a3b8" stroke-width="1.5"/>

  <!-- C (centre of curvature) at x=190, F at x=290 -->
  <!-- Tick marks on axis -->
  <line x1="190" y1="204" x2="190" y2="216" stroke="#000" stroke-width="2"/>
  <text x="182" y="228" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">C</text>
  <text x="173" y="240" font-family="Georgia,serif" font-size="10" fill="#555">(= 2F)</text>

  <line x1="290" y1="204" x2="290" y2="216" stroke="#000" stroke-width="2"/>
  <text x="284" y="228" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">F</text>

  <!-- Mirror vertex label -->
  <text x="392" y="228" font-family="Georgia,serif" font-size="11" fill="#334155">P</text>
  <text x="388" y="240" font-family="Georgia,serif" font-size="9" fill="#334155">(vertex)</text>

  <!-- ── Object arrow (upright, at x=80, height 80px, tip at y=130) ── -->
  <line x1="80" y1="210" x2="80" y2="130" stroke="#1e40af" stroke-width="3"/>
  <polygon points="75,134 80,122 85,134" fill="#1e40af"/>
  <text x="52" y="168" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#1e40af">Object</text>
  <text x="60" y="180" font-family="Georgia,serif" font-size="10" fill="#1e40af">(O)</text>

  <!-- ── RAY 1: Parallel to axis → hits mirror → reflects through F ──
       Goes from tip (80,130) horizontally to mirror surface.
       Mirror at x=390, y=130 (above axis by 80px, same as object tip y).
       Reflects through F=(290,210). Extends beyond F.
  -->
  <!-- Incident: (80,130) to (390,130) -->
  <line x1="80" y1="130" x2="390" y2="130" stroke="#dc2626" stroke-width="2" stroke-dasharray="none"/>
  <!-- Reflected: (390,130) through F(290,210) extended to x=50 (off screen) -->
  <!-- Direction from (390,130) to (290,210): dx=-100, dy=80 → unit (-0.78,0.624) -->
  <!-- Extend: to x=50: t=(50-390)/(-100)=3.4 → y=130+80*3.4=402 (off screen) → clip to y=350 -->
  <!-- t at y=350: (350-130)/80=2.75 → x=390-100*2.75=115 -->
  <line x1="390" y1="130" x2="115" y2="350" stroke="#dc2626" stroke-width="2"/>
  <!-- small arrow on reflected ray -->
  <polygon points="257,224 267,228 259,236" fill="#dc2626"/>
  <text x="30" y="140" font-family="Georgia,serif" font-size="9" fill="#dc2626">Ray 1: ∥ axis → F</text>

  <!-- ── RAY 2: Through F → hits mirror → reflects parallel to axis ──
       From tip (80,130) toward F(290,210), hits mirror.
       Direction: dx=210,dy=80 → at x=390: dy_extra = 80*(390-80)/210 = 118 → y=130+118=248
       Mirror hit: (390, 248).
       Reflects parallel to axis: leftward, y=248 extends to x=50.
  -->
  <line x1="80" y1="130" x2="390" y2="248" stroke="#15803d" stroke-width="2"/>
  <line x1="390" y1="248" x2="50" y2="248" stroke="#15803d" stroke-width="2"/>
  <polygon points="170,244 158,248 170,252" fill="#15803d"/>
  <text x="30" y="158" font-family="Georgia,serif" font-size="9" fill="#15803d">Ray 2: → F → ∥ axis</text>

  <!-- ── RAY 3: Through C → hits mirror → reflects back through C ──
       From tip (80,130) toward C(190,210). Direction: dx=110,dy=80.
       At x=390: dy_extra = 80*(390-80)/110 = 225 → y=130+225=355 (off screen, clip)
       The ray through C hits mirror at y=210+(390-190)*(80/110)=210+145=355 → clip
       Actually for concave mirror ray through C: reflects back on same line (angle of incidence = 0 w.r.t. normal).
       Let's place it so it's visible: ray goes from (80,130) at the same angle returning.
       Through C=(190,210): slope = (210-130)/(190-80) = 80/110.
       Mirror hit: x=390 → y=130+(390-80)*80/110=130+225=355 → clip to viewport at y=310: x=80+(310-130)*110/80=80+247=327
  -->
  <line x1="80" y1="130" x2="327" y2="310" stroke="#7c3aed" stroke-width="2"/>
  <!-- Returns back through C, same slope reversed direction -->
  <line x1="327" y1="310" x2="30" y2="310" stroke="#7c3aed" stroke-width="2" stroke-dasharray="4,3" stroke-opacity="0.5"/>
  <text x="30" y="176" font-family="Georgia,serif" font-size="9" fill="#7c3aed">Ray 3: → C → back</text>

  <!-- ── Image arrow (inverted, at x=330 by ray intersection, below axis) ──
       Ray 1 reflected: at x=330, t=(330-390)/-100=0.6, y=130+80*0.6=178 → below axis at y~270
       Let's place image at x=330, between F(290) and C(190) — image y ≈ 270 (inverted) -->
  <!-- Ray1 at x=330: y=130+80*(390-330)/100=130+48=178 → nope, let me recompute:
       Line from (390,130) to (290,210): parametric: x=390-100t, y=130+80t
       At x=330: t=(390-330)/100=0.6 → y=130+48=178
       Line from (390,248) leftward at y=248: at x=330 y=248.
       Intersection of ray1 and ray2:
         Ray1: y=130+80*(390-x)/100 = 130+0.8*(390-x)
         Ray2: y=248
         248=130+0.8*(390-x) → 118=0.8*(390-x) → x=390-147.5=242.5
       So image tip at (242, 248). Image base at (242,210). Image is below axis (inverted).
  -->
  <line x1="242" y1="210" x2="242" y2="248" stroke="#dc2626" stroke-width="3"/>
  <polygon points="237,244 242,256 247,244" fill="#dc2626"/>
  <text x="248" y="234" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#dc2626">Image</text>
  <text x="250" y="246" font-family="Georgia,serif" font-size="9" fill="#dc2626">(real,</text>
  <text x="250" y="257" font-family="Georgia,serif" font-size="9" fill="#dc2626">inverted)</text>

  <!-- Convergence dot -->
  <circle cx="242" cy="248" r="5" fill="#dc2626"/>

  <!-- ── Mirror formula box ── -->
  <rect x="30" y="325" width="280" height="44" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="40" y="342" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Mirror formula:  1/f = 1/v + 1/u</text>
  <text x="40" y="358" font-family="Georgia,serif" font-size="10" fill="#555">Magnification:  m = −v/u   (−ve ⟹ inverted)</text>

  <!-- Legend box -->
  <rect x="330" y="325" width="200" height="44" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <line x1="340" y1="340" x2="360" y2="340" stroke="#dc2626" stroke-width="2"/>
  <text x="364" y="344" font-family="Georgia,serif" font-size="10" fill="#dc2626">Ray 1 (parallel → F)</text>
  <line x1="340" y1="356" x2="360" y2="356" stroke="#15803d" stroke-width="2"/>
  <text x="364" y="360" font-family="Georgia,serif" font-size="10" fill="#15803d">Ray 2 (through F)</text>
  <!-- ray 3 not shown in legend for space -->
</svg>`;

  // ─── 4. AMMETER SERIES CONNECTION CIRCUIT ────────────────────────────────
  // Shows a simple DC circuit with:
  //   • Battery (EMF source) with +/− terminals
  //   • Resistor (zigzag)
  //   • Ammeter in series (circle with A, must be in series)
  //   • Voltmeter in parallel (circle with V, shown across resistor)
  //   • Current direction arrow
  //   • Connecting wires with corners
  //   • Labels: EMF (ε), R, I, ammeter/voltmeter notes
  static ammeterSeriesConnectionCircuitDiagramsvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 520 400">

  <!-- Title -->
  <text x="100" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Circuit Diagram — Ammeter (Series) &amp; Voltmeter (Parallel)</text>
  <text x="110" y="38" font-family="Georgia,serif" font-size="10" fill="#444">Ammeter: low resistance, in series | Voltmeter: high resistance, in parallel</text>

  <!-- ── Main circuit loop ──
       Wire rectangle: corners at (80,80), (440,80), (440,300), (80,300)
  -->
  <!-- Top wire: (80,80) to (440,80) — broken by ammeter at ~(230,80) to (310,80) -->
  <line x1="80"  y1="80" x2="210" y2="80" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <!-- gap for ammeter: 210 to 310 -->
  <line x1="330" y1="80" x2="440" y2="80" stroke="#000" stroke-width="3" stroke-linecap="round"/>

  <!-- Right wire: (440,80) to (440,300) -->
  <line x1="440" y1="80" x2="440" y2="300" stroke="#000" stroke-width="3" stroke-linecap="round"/>

  <!-- Bottom wire: (440,300) to (80,300) — broken by resistor at (260,300) approx -->
  <line x1="440" y1="300" x2="320" y2="300" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <!-- gap for resistor: 320 to 180 -->
  <line x1="180" y1="300" x2="80"  y2="300" stroke="#000" stroke-width="3" stroke-linecap="round"/>

  <!-- Left wire: (80,300) to (80,80) — broken by battery at (80,150) to (80,230) -->
  <line x1="80" y1="80"  x2="80" y2="140" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <!-- gap for battery: 140 to 240 -->
  <line x1="80" y1="250" x2="80" y2="300" stroke="#000" stroke-width="3" stroke-linecap="round"/>

  <!-- ── Battery (EMF ε) on the left wire ── -->
  <!-- Long line (+), short line (−), 4 cells stacked vertically, centred at y=190 -->
  <!-- Cell 1 -->
  <line x1="62" y1="148" x2="98" y2="148" stroke="#000" stroke-width="4"/>  <!-- long = + -->
  <line x1="68" y1="162" x2="92" y2="162" stroke="#000" stroke-width="2"/>  <!-- short = − -->
  <!-- Cell 2 -->
  <line x1="62" y1="176" x2="98" y2="176" stroke="#000" stroke-width="4"/>
  <line x1="68" y1="190" x2="92" y2="190" stroke="#000" stroke-width="2"/>
  <!-- Connector stubs inside battery -->
  <line x1="80" y1="148" x2="80" y2="140" stroke="#000" stroke-width="3"/>
  <line x1="80" y1="190" x2="80" y2="250" stroke="#000" stroke-width="3"/>
  <line x1="80" y1="162" x2="80" y2="176" stroke="#000" stroke-width="2"/>

  <!-- + and − terminal labels -->
  <text x="100" y="152" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#dc2626">+</text>
  <text x="100" y="196" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#1e40af">−</text>
  <!-- EMF label -->
  <text x="28" y="175" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">ε</text>
  <text x="18" y="188" font-family="Georgia,serif" font-size="10" fill="#555">(EMF)</text>

  <!-- ── Ammeter in series on the top wire ── -->
  <circle cx="270" cy="80" r="30" fill="#fff" stroke="#b45309" stroke-width="3"/>
  <text x="260" y="85" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#b45309">A</text>
  <!-- wire stubs into ammeter -->
  <line x1="210" y1="80" x2="240" y2="80" stroke="#000" stroke-width="3"/>
  <line x1="300" y1="80" x2="330" y2="80" stroke="#000" stroke-width="3"/>
  <!-- Label -->
  <text x="248" y="122" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#b45309">Ammeter</text>
  <text x="240" y="134" font-family="Georgia,serif" font-size="9" fill="#b45309">(series, low R)</text>
  <!-- Internal resistance label -->
  <text x="244" y="146" font-family="Georgia,serif" font-size="9" fill="#b45309">r_A ≈ 0</text>

  <!-- ── Resistor (zigzag) on the bottom wire ── -->
  <!-- centred at x=250, y=300, width~140px -->
  <polyline points="
    180,300
    195,300 200,284 210,316 220,284 230,316 240,284 250,316 260,284 270,316 280,284 290,316 300,284 305,300
    320,300
  " fill="none" stroke="#1e40af" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- R label above -->
  <text x="243" y="277" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#1e40af">R</text>
  <text x="228" y="324" font-family="Georgia,serif" font-size="10" fill="#1e40af">Resistor</text>

  <!-- ── Voltmeter in parallel across resistor ── -->
  <!-- Voltmeter connected at (180,300) and (320,300) via wires going up to y=350, then circle -->
  <line x1="180" y1="300" x2="180" y2="360" stroke="#15803d" stroke-width="2" stroke-dasharray="4,3"/>
  <line x1="320" y1="300" x2="320" y2="360" stroke="#15803d" stroke-width="2" stroke-dasharray="4,3"/>
  <line x1="180" y1="360" x2="220" y2="360" stroke="#15803d" stroke-width="2" stroke-dasharray="4,3"/>
  <line x1="280" y1="360" x2="320" y2="360" stroke="#15803d" stroke-width="2" stroke-dasharray="4,3"/>
  <circle cx="250" cy="360" r="30" fill="#fff" stroke="#15803d" stroke-width="2.5"/>
  <text x="240" y="366" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#15803d">V</text>
  <!-- Voltmeter label -->
  <text x="230" y="400" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#15803d">Voltmeter</text>
  <text x="218" y="412" font-family="Georgia,serif" font-size="9" fill="#15803d">(parallel, high R)</text>

  <!-- ── Current direction arrows ── -->
  <!-- Top wire, going right (conventional current from +) -->
  <polygon points="164,75 180,80 164,85" fill="#dc2626"/>
  <text x="120" y="72" font-family="Georgia,serif" font-size="11" font-weight="bold" font-style="italic" fill="#dc2626">I →</text>
  <!-- Right wire, going down -->
  <polygon points="435,195 440,210 445,195" fill="#dc2626"/>
  <!-- Bottom wire, going left -->
  <polygon points="376,295 360,300 376,305" fill="#dc2626"/>
  <!-- Left wire, going up (completing loop) -->
  <polygon points="75,118 80,103 85,118" fill="#dc2626"/>

  <!-- ── Info/formula box ── -->
  <rect x="380" y="140" width="130" height="140" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="388" y="158" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Key Formulae:</text>
  <text x="388" y="174" font-family="Georgia,serif" font-size="10" fill="#000">I = ε / (R + r)</text>
  <text x="388" y="190" font-family="Georgia,serif" font-size="9" fill="#555">r = internal resistance</text>
  <text x="388" y="208" font-family="Georgia,serif" font-size="10" fill="#000">V_R = I × R</text>
  <text x="388" y="224" font-family="Georgia,serif" font-size="9" fill="#555">(voltmeter reads V_R)</text>
  <text x="388" y="242" font-family="Georgia,serif" font-size="10" fill="#000">P = I²R = V²/R</text>
  <text x="388" y="258" font-family="Georgia,serif" font-size="9" fill="#555">(power dissipated)</text>
  <text x="388" y="274" font-family="Georgia,serif" font-size="9" fill="#000">ΣV = 0  (Kirchhoff)</text>

  <!-- Junction dots -->
  <circle cx="80"  cy="80"  r="5" fill="#000"/>
  <circle cx="440" cy="80"  r="5" fill="#000"/>
  <circle cx="440" cy="300" r="5" fill="#000"/>
  <circle cx="80"  cy="300" r="5" fill="#000"/>
  <circle cx="180" cy="300" r="5" fill="#15803d"/>
  <circle cx="320" cy="300" r="5" fill="#15803d"/>
</svg>`;
}
