class PhysicsSvgDiagrams {


  // ─── 1. FREE BODY DIAGRAM ─────────────────────────────────────────────────
  static freeBodyDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 500 420">
  <text x="110" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Free Body Diagram — Block on a Surface</text>
  <text x="120" y="38" font-family="Georgia,serif" font-size="10" fill="#444">All forces acting on the object shown as vectors from centre of mass</text>
  <line x1="60" y1="290" x2="440" y2="290" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="70"  y1="290" x2="60"  y2="305" stroke="#000" stroke-width="1.5"/>
  <line x1="95"  y1="290" x2="85"  y2="305" stroke="#000" stroke-width="1.5"/>
  <line x1="120" y1="290" x2="110" y2="305" stroke="#000" stroke-width="1.5"/>
  <line x1="145" y1="290" x2="135" y2="305" stroke="#000" stroke-width="1.5"/>
  <line x1="170" y1="290" x2="160" y2="305" stroke="#000" stroke-width="1.5"/>
  <line x1="195" y1="290" x2="185" y2="305" stroke="#000" stroke-width="1.5"/>
  <line x1="220" y1="290" x2="210" y2="305" stroke="#000" stroke-width="1.5"/>
  <line x1="245" y1="290" x2="235" y2="305" stroke="#000" stroke-width="1.5"/>
  <line x1="270" y1="290" x2="260" y2="305" stroke="#000" stroke-width="1.5"/>
  <line x1="295" y1="290" x2="285" y2="305" stroke="#000" stroke-width="1.5"/>
  <line x1="320" y1="290" x2="310" y2="305" stroke="#000" stroke-width="1.5"/>
  <line x1="345" y1="290" x2="335" y2="305" stroke="#000" stroke-width="1.5"/>
  <line x1="370" y1="290" x2="360" y2="305" stroke="#000" stroke-width="1.5"/>
  <line x1="395" y1="290" x2="385" y2="305" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="290" x2="410" y2="305" stroke="#000" stroke-width="1.5"/>
  <line x1="440" y1="290" x2="430" y2="305" stroke="#000" stroke-width="1.5"/>
  <rect x="190" y="210" width="120" height="80" rx="4" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="236" y="256" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">m</text>
  <circle cx="250" cy="250" r="4" fill="#000"/>
  <line x1="244" y1="250" x2="256" y2="250" stroke="#000" stroke-width="1.5"/>
  <line x1="250" y1="244" x2="250" y2="256" stroke="#000" stroke-width="1.5"/>
  <line x1="250" y1="210" x2="250" y2="100" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="244,104 250,88 256,104" fill="#000"/>
  <text x="258" y="98" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">N</text>
  <text x="258" y="112" font-family="Georgia,serif" font-size="10" fill="#000">(Normal force)</text>
  <text x="258" y="126" font-family="Georgia,serif" font-size="10" fill="#000">= mg cos θ</text>
  <line x1="250" y1="290" x2="250" y2="390" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="244,386 250,402 256,386" fill="#000"/>
  <text x="258" y="370" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">W</text>
  <text x="258" y="384" font-family="Georgia,serif" font-size="10" fill="#000">(Weight = mg)</text>
  <line x1="310" y1="250" x2="420" y2="250" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="416,244 432,250 416,256" fill="#000"/>
  <text x="430" y="244" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">F</text>
  <text x="418" y="262" font-family="Georgia,serif" font-size="10" fill="#000">(Applied)</text>
  <line x1="190" y1="250" x2="80" y2="250" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="84,244 68,250 84,256" fill="#000"/>
  <text x="40" y="244" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">f</text>
  <text x="30" y="262" font-family="Georgia,serif" font-size="10" fill="#000">(Friction)</text>
  <text x="28" y="276" font-family="Georgia,serif" font-size="10" fill="#000">= μN</text>
  <line x1="310" y1="210" x2="390" y2="148" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="384,148 398,140 390,154" fill="#000"/>
  <text x="398" y="142" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">T</text>
  <text x="392" y="156" font-family="Georgia,serif" font-size="10" fill="#000">(Tension)</text>
  <path d="M340,210 A32,32 0 0,0 362,186" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="352" y="204" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">θ</text>
  <line x1="420" y1="370" x2="460" y2="370" stroke="#000" stroke-width="2"/>
  <polygon points="456,366 466,370 456,374" fill="#000"/>
  <text x="468" y="374" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">x</text>
  <line x1="420" y1="370" x2="420" y2="330" stroke="#000" stroke-width="2"/>
  <polygon points="416,334 420,324 424,334" fill="#000"/>
  <text x="424" y="326" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">y</text>
  <rect x="58" y="330" width="300" height="76" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="68" y="348" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Newton's 2nd Law applied:</text>
  <text x="68" y="364" font-family="Georgia,serif" font-size="11" fill="#000">ΣFx = F − f = ma   (horizontal)</text>
  <text x="68" y="380" font-family="Georgia,serif" font-size="11" fill="#000">ΣFy = N − W = 0   (vertical, no acceleration)</text>
  <text x="68" y="396" font-family="Georgia,serif" font-size="10" fill="#555">Equilibrium: ΣF = 0 ⟹ a = 0</text>
</svg>`;

  // ─── 2. TRANSVERSE VS LONGITUDINAL WAVE ──────────────────────────────────
  static transverseVsLongitudinalParticleMotionDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 560 460">
  <text x="100" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Transverse vs Longitudinal Waves — Particle Motion</text>
  <text x="20" y="50" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">1. Transverse Wave</text>
  <text x="20" y="64" font-family="Georgia,serif" font-size="10" fill="#555">Particle motion ⊥ to wave propagation direction</text>
  <line x1="60" y1="75" x2="520" y2="75" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <polygon points="516,70 528,75 516,80" fill="#000"/>
  <text x="390" y="70" font-family="Georgia,serif" font-size="10" fill="#000">wave propagation →</text>
  <path d="M 60,130 C 75,130 75,85 90,85 C 105,85 105,130 120,130 C 135,130 135,175 150,175 C 165,175 165,130 180,130 C 195,130 195,85 210,85 C 225,85 225,130 240,130 C 255,130 255,175 270,175 C 285,175 285,130 300,130 C 315,130 315,85 330,85 C 345,85 345,130 360,130 C 375,130 375,175 390,175 C 405,175 405,130 420,130 C 435,130 435,85 450,85 C 465,85 465,130 480,130"
        fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="50" y1="130" x2="50" y2="85" stroke="#000" stroke-width="2"/>
  <polygon points="46,89 50,79 54,89" fill="#000"/>
  <polygon points="46,126 50,136 54,126" fill="#000"/>
  <text x="22" y="112" font-family="Georgia,serif" font-size="11" font-weight="bold" font-style="italic" fill="#000">A</text>
  <line x1="90" y1="72" x2="210" y2="72" stroke="#000" stroke-width="1.8"/>
  <polygon points="94,68 84,72 94,76" fill="#000"/>
  <polygon points="206,68 216,72 206,76" fill="#000"/>
  <text x="138" y="67" font-family="Georgia,serif" font-size="11" font-weight="bold" font-style="italic" fill="#000">λ</text>
  <text x="86"  y="82" font-family="Georgia,serif" font-size="9" fill="#000">crest</text>
  <text x="144" y="184" font-family="Georgia,serif" font-size="9" fill="#000">trough</text>
  <line x1="90" y1="140" x2="90" y2="100" stroke="#000" stroke-width="1.8"/>
  <polygon points="86,104 90,94 94,104" fill="#000"/>
  <circle cx="150" cy="130" r="4" fill="#000"/>
  <line x1="210" y1="140" x2="210" y2="100" stroke="#000" stroke-width="1.8"/>
  <polygon points="206,104 210,94 214,104" fill="#000"/>
  <line x1="270" y1="122" x2="270" y2="162" stroke="#000" stroke-width="1.8"/>
  <polygon points="266,158 270,168 274,158" fill="#000"/>
  <line x1="330" y1="140" x2="330" y2="100" stroke="#000" stroke-width="1.8"/>
  <polygon points="326,104 330,94 334,104" fill="#000"/>
  <line x1="390" y1="122" x2="390" y2="162" stroke="#000" stroke-width="1.8"/>
  <polygon points="386,158 390,168 394,158" fill="#000"/>
  <text x="498" y="100" font-family="Georgia,serif" font-size="10" fill="#000">particle</text>
  <text x="498" y="112" font-family="Georgia,serif" font-size="10" fill="#000">motion</text>
  <text x="498" y="124" font-family="Georgia,serif" font-size="10" fill="#000">(vertical)</text>
  <line x1="60" y1="130" x2="490" y2="130" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4"/>
  <text x="494" y="134" font-family="Georgia,serif" font-size="9" fill="#999">eq.</text>
  <text x="20" y="230" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">2. Longitudinal Wave</text>
  <text x="20" y="244" font-family="Georgia,serif" font-size="10" fill="#555">Particle motion ∥ to wave propagation direction</text>
  <line x1="60" y1="255" x2="520" y2="255" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <polygon points="516,250 528,255 516,260" fill="#000"/>
  <text x="380" y="250" font-family="Georgia,serif" font-size="10" fill="#000">wave propagation →</text>
  <rect x="70" y="265" width="40" height="50" fill="#ddd" fill-opacity="0.5" stroke="none"/>
  <line x1="76" y1="265" x2="76" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="82" y1="265" x2="82" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="88" y1="265" x2="88" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="94" y1="265" x2="94" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="100" y1="265" x2="100" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="106" y1="265" x2="106" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="120" y1="265" x2="120" y2="315" stroke="#000" stroke-width="1"/>
  <line x1="140" y1="265" x2="140" y2="315" stroke="#000" stroke-width="1"/>
  <line x1="160" y1="265" x2="160" y2="315" stroke="#000" stroke-width="1"/>
  <rect x="170" y="265" width="40" height="50" fill="#ddd" fill-opacity="0.5" stroke="none"/>
  <line x1="176" y1="265" x2="176" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="182" y1="265" x2="182" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="188" y1="265" x2="188" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="194" y1="265" x2="194" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="200" y1="265" x2="200" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="206" y1="265" x2="206" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="222" y1="265" x2="222" y2="315" stroke="#000" stroke-width="1"/>
  <line x1="242" y1="265" x2="242" y2="315" stroke="#000" stroke-width="1"/>
  <line x1="262" y1="265" x2="262" y2="315" stroke="#000" stroke-width="1"/>
  <rect x="270" y="265" width="40" height="50" fill="#ddd" fill-opacity="0.5" stroke="none"/>
  <line x1="276" y1="265" x2="276" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="282" y1="265" x2="282" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="288" y1="265" x2="288" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="294" y1="265" x2="294" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="300" y1="265" x2="300" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="306" y1="265" x2="306" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="322" y1="265" x2="322" y2="315" stroke="#000" stroke-width="1"/>
  <line x1="342" y1="265" x2="342" y2="315" stroke="#000" stroke-width="1"/>
  <line x1="362" y1="265" x2="362" y2="315" stroke="#000" stroke-width="1"/>
  <rect x="370" y="265" width="40" height="50" fill="#ddd" fill-opacity="0.5" stroke="none"/>
  <line x1="376" y1="265" x2="376" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="382" y1="265" x2="382" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="388" y1="265" x2="388" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="394" y1="265" x2="394" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="400" y1="265" x2="400" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="406" y1="265" x2="406" y2="315" stroke="#000" stroke-width="2.5"/>
  <line x1="422" y1="265" x2="422" y2="315" stroke="#000" stroke-width="1"/>
  <line x1="442" y1="265" x2="442" y2="315" stroke="#000" stroke-width="1"/>
  <line x1="462" y1="265" x2="462" y2="315" stroke="#000" stroke-width="1"/>
  <rect x="60" y="265" width="420" height="50" fill="none" stroke="#000" stroke-width="2" rx="2"/>
  <text x="74" y="328" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000">C</text>
  <text x="130" y="328" font-family="Georgia,serif" font-size="9" fill="#000">R</text>
  <text x="176" y="328" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000">C</text>
  <text x="232" y="328" font-family="Georgia,serif" font-size="9" fill="#000">R</text>
  <text x="276" y="328" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000">C</text>
  <text x="332" y="328" font-family="Georgia,serif" font-size="9" fill="#000">R</text>
  <text x="376" y="328" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000">C</text>
  <text x="432" y="328" font-family="Georgia,serif" font-size="9" fill="#000">R</text>
  <line x1="90" y1="348" x2="130" y2="348" stroke="#000" stroke-width="2"/>
  <polygon points="126,344 136,348 126,352" fill="#000"/>
  <polygon points="94,344 84,348 94,352" fill="#000"/>
  <line x1="190" y1="348" x2="230" y2="348" stroke="#000" stroke-width="2"/>
  <polygon points="226,344 236,348 226,352" fill="#000"/>
  <polygon points="194,344 184,348 194,352" fill="#000"/>
  <line x1="290" y1="348" x2="330" y2="348" stroke="#000" stroke-width="2"/>
  <polygon points="326,344 336,348 326,352" fill="#000"/>
  <polygon points="294,344 284,348 294,352" fill="#000"/>
  <line x1="390" y1="348" x2="430" y2="348" stroke="#000" stroke-width="2"/>
  <polygon points="426,344 436,348 426,352" fill="#000"/>
  <polygon points="394,344 384,348 394,352" fill="#000"/>
  <text x="498" y="355" font-family="Georgia,serif" font-size="10" fill="#000">particle</text>
  <text x="498" y="367" font-family="Georgia,serif" font-size="10" fill="#000">motion</text>
  <text x="498" y="379" font-family="Georgia,serif" font-size="10" fill="#000">(horiz.)</text>
  <line x1="90" y1="338" x2="190" y2="338" stroke="#000" stroke-width="1.5"/>
  <polygon points="94,334 84,338 94,342" fill="#000"/>
  <polygon points="186,334 196,338 186,342" fill="#000"/>
  <text x="130" y="334" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">λ</text>
  <rect x="40" y="390" width="480" height="58" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="50" y="408" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Comparison:</text>
  <text x="50" y="424" font-family="Georgia,serif" font-size="10" fill="#000">Transverse: E.g. light, water surface waves, strings — oscillation ⊥ propagation</text>
  <text x="50" y="440" font-family="Georgia,serif" font-size="10" fill="#000">Longitudinal: E.g. sound, P-seismic waves — oscillation ∥ propagation (C = compression, R = rarefaction)</text>
</svg>`;

  // ─── 3. CONCAVE MIRROR RAY DIAGRAM ───────────────────────────────────────
  static concaveMirrorRayDiagramFocalPointImageFormationDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 560 380">
  <text x="100" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Concave Mirror — Ray Diagram (Object beyond 2F)</text>
  <text x="110" y="38" font-family="Georgia,serif" font-size="10" fill="#444">Image is real, inverted, diminished — between F and 2F</text>
  <line x1="30" y1="210" x2="520" y2="210" stroke="#000" stroke-width="2" stroke-linecap="round"/>
  <path d="M 390,110 Q 430,210 390,310" fill="none" stroke="#000" stroke-width="5" stroke-linecap="round"/>
  <path d="M 390,110 Q 430,210 390,310 L 405,310 Q 450,210 405,110 Z" fill="#ddd" fill-opacity="0.5" stroke="none"/>
  <line x1="396" y1="118" x2="408" y2="108" stroke="#888" stroke-width="1.5"/>
  <line x1="396" y1="148" x2="412" y2="136" stroke="#888" stroke-width="1.5"/>
  <line x1="396" y1="178" x2="414" y2="166" stroke="#888" stroke-width="1.5"/>
  <line x1="396" y1="208" x2="415" y2="198" stroke="#888" stroke-width="1.5"/>
  <line x1="396" y1="238" x2="414" y2="228" stroke="#888" stroke-width="1.5"/>
  <line x1="396" y1="268" x2="412" y2="258" stroke="#888" stroke-width="1.5"/>
  <line x1="396" y1="298" x2="408" y2="288" stroke="#888" stroke-width="1.5"/>
  <line x1="190" y1="204" x2="190" y2="216" stroke="#000" stroke-width="2"/>
  <text x="182" y="228" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">C</text>
  <text x="173" y="240" font-family="Georgia,serif" font-size="10" fill="#555">(= 2F)</text>
  <line x1="290" y1="204" x2="290" y2="216" stroke="#000" stroke-width="2"/>
  <text x="284" y="228" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">F</text>
  <text x="392" y="228" font-family="Georgia,serif" font-size="11" fill="#000">P</text>
  <text x="388" y="240" font-family="Georgia,serif" font-size="9" fill="#555">(vertex)</text>
  <line x1="80" y1="210" x2="80" y2="130" stroke="#000" stroke-width="3"/>
  <polygon points="75,134 80,122 85,134" fill="#000"/>
  <text x="52" y="168" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Object</text>
  <text x="60" y="180" font-family="Georgia,serif" font-size="10" fill="#000">(O)</text>
  <!-- Ray 1: parallel to axis → reflects through F (dashed) -->
  <line x1="80" y1="130" x2="390" y2="130" stroke="#000" stroke-width="2"/>
  <line x1="390" y1="130" x2="115" y2="350" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <polygon points="257,224 267,228 259,236" fill="#000"/>
  <text x="30" y="140" font-family="Georgia,serif" font-size="9" fill="#000">Ray 1: ∥ axis → F</text>
  <!-- Ray 2: through F → reflects parallel (dotted) -->
  <line x1="80" y1="130" x2="390" y2="248" stroke="#000" stroke-width="2" stroke-dasharray="4,2"/>
  <line x1="390" y1="248" x2="50" y2="248" stroke="#000" stroke-width="2" stroke-dasharray="4,2"/>
  <polygon points="170,244 158,248 170,252" fill="#000"/>
  <text x="30" y="158" font-family="Georgia,serif" font-size="9" fill="#000">Ray 2: → F → ∥ axis</text>
  <!-- Ray 3: through C (loosely dotted) -->
  <line x1="80" y1="130" x2="327" y2="310" stroke="#000" stroke-width="2" stroke-dasharray="2,4"/>
  <line x1="327" y1="310" x2="30" y2="310" stroke="#000" stroke-width="1.5" stroke-dasharray="2,4" stroke-opacity="0.4"/>
  <text x="30" y="176" font-family="Georgia,serif" font-size="9" fill="#000">Ray 3: → C → back</text>
  <line x1="242" y1="210" x2="242" y2="248" stroke="#000" stroke-width="3"/>
  <polygon points="237,244 242,256 247,244" fill="#000"/>
  <text x="248" y="234" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Image</text>
  <text x="250" y="246" font-family="Georgia,serif" font-size="9" fill="#000">(real,</text>
  <text x="250" y="257" font-family="Georgia,serif" font-size="9" fill="#000">inverted)</text>
  <circle cx="242" cy="248" r="5" fill="#000"/>
  <rect x="30" y="325" width="280" height="44" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="40" y="342" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Mirror formula:  1/f = 1/v + 1/u</text>
  <text x="40" y="358" font-family="Georgia,serif" font-size="10" fill="#555">Magnification:  m = −v/u   (−ve ⟹ inverted)</text>
  <rect x="330" y="325" width="200" height="44" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <line x1="340" y1="340" x2="360" y2="340" stroke="#000" stroke-width="2"/>
  <text x="364" y="344" font-family="Georgia,serif" font-size="10" fill="#000">Ray 1 (parallel → F)</text>
  <line x1="340" y1="356" x2="360" y2="356" stroke="#000" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="364" y="360" font-family="Georgia,serif" font-size="10" fill="#000">Ray 2 (through F)</text>
</svg>`;

  // ─── 4. AMMETER SERIES CONNECTION CIRCUIT ────────────────────────────────
  static ammeterSeriesConnectionCircuitDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 520 420">
  <text x="100" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Circuit Diagram — Ammeter (Series) &amp; Voltmeter (Parallel)</text>
  <text x="110" y="38" font-family="Georgia,serif" font-size="10" fill="#444">Ammeter: low resistance, in series | Voltmeter: high resistance, in parallel</text>
  <line x1="80"  y1="80" x2="210" y2="80" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="330" y1="80" x2="440" y2="80" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="440" y1="80" x2="440" y2="300" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="440" y1="300" x2="320" y2="300" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="180" y1="300" x2="80"  y2="300" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="80"  x2="80" y2="140" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="250" x2="80" y2="300" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="62" y1="148" x2="98" y2="148" stroke="#000" stroke-width="4"/>
  <line x1="68" y1="162" x2="92" y2="162" stroke="#000" stroke-width="2"/>
  <line x1="62" y1="176" x2="98" y2="176" stroke="#000" stroke-width="4"/>
  <line x1="68" y1="190" x2="92" y2="190" stroke="#000" stroke-width="2"/>
  <line x1="80" y1="148" x2="80" y2="140" stroke="#000" stroke-width="3"/>
  <line x1="80" y1="190" x2="80" y2="250" stroke="#000" stroke-width="3"/>
  <line x1="80" y1="162" x2="80" y2="176" stroke="#000" stroke-width="2"/>
  <text x="100" y="152" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">+</text>
  <text x="100" y="196" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">−</text>
  <text x="28" y="175" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">ε</text>
  <text x="18" y="188" font-family="Georgia,serif" font-size="10" fill="#555">(EMF)</text>
  <circle cx="270" cy="80" r="30" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="260" y="85" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">A</text>
  <line x1="210" y1="80" x2="240" y2="80" stroke="#000" stroke-width="3"/>
  <line x1="300" y1="80" x2="330" y2="80" stroke="#000" stroke-width="3"/>
  <text x="248" y="122" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Ammeter</text>
  <text x="240" y="134" font-family="Georgia,serif" font-size="9" fill="#555">(series, low R)</text>
  <text x="244" y="146" font-family="Georgia,serif" font-size="9" fill="#555">r_A ≈ 0</text>
  <polyline points="180,300 195,300 200,284 210,316 220,284 230,316 240,284 250,316 260,284 270,316 280,284 290,316 300,284 305,300 320,300"
            fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="243" y="277" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">R</text>
  <text x="228" y="324" font-family="Georgia,serif" font-size="10" fill="#000">Resistor</text>
  <line x1="180" y1="300" x2="180" y2="360" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <line x1="320" y1="300" x2="320" y2="360" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <line x1="180" y1="360" x2="220" y2="360" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <line x1="280" y1="360" x2="320" y2="360" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <circle cx="250" cy="360" r="30" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="240" y="366" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">V</text>
  <text x="230" y="400" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Voltmeter</text>
  <text x="218" y="412" font-family="Georgia,serif" font-size="9" fill="#555">(parallel, high R)</text>
  <polygon points="164,75 180,80 164,85" fill="#000"/>
  <text x="120" y="72" font-family="Georgia,serif" font-size="11" font-weight="bold" font-style="italic" fill="#000">I →</text>
  <polygon points="435,195 440,210 445,195" fill="#000"/>
  <polygon points="376,295 360,300 376,305" fill="#000"/>
  <polygon points="75,118 80,103 85,118" fill="#000"/>
  <rect x="380" y="140" width="130" height="140" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="388" y="158" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Key Formulae:</text>
  <text x="388" y="174" font-family="Georgia,serif" font-size="10" fill="#000">I = ε / (R + r)</text>
  <text x="388" y="190" font-family="Georgia,serif" font-size="9" fill="#555">r = internal resistance</text>
  <text x="388" y="208" font-family="Georgia,serif" font-size="10" fill="#000">V_R = I × R</text>
  <text x="388" y="224" font-family="Georgia,serif" font-size="9" fill="#555">(voltmeter reads V_R)</text>
  <text x="388" y="242" font-family="Georgia,serif" font-size="10" fill="#000">P = I²R = V²/R</text>
  <text x="388" y="258" font-family="Georgia,serif" font-size="9" fill="#555">(power dissipated)</text>
  <text x="388" y="274" font-family="Georgia,serif" font-size="9" fill="#000">ΣV = 0  (Kirchhoff)</text>
  <circle cx="80"  cy="80"  r="5" fill="#000"/>
  <circle cx="440" cy="80"  r="5" fill="#000"/>
  <circle cx="440" cy="300" r="5" fill="#000"/>
  <circle cx="80"  cy="300" r="5" fill="#000"/>
  <circle cx="180" cy="300" r="5" fill="#000"/>
  <circle cx="320" cy="300" r="5" fill="#000"/>
</svg>`;

  // ─── 5. VECTOR DIAGRAM ───────────────────────────────────────────────────
  static vectorDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">
  <text x="260" y="28" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Vector Addition — Tip-to-Tail Method</text>
  <text x="220" y="44" font-family="Georgia,serif" font-size="10" fill="#444">Resultant R = A + B drawn from tail of A to tip of B</text>
  <!-- Grid -->
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ddd" stroke-width="0.8"/>
    </pattern>
  </defs>
  <rect x="80" y="60" width="640" height="480" fill="url(#grid)" stroke="#000" stroke-width="1"/>
  <!-- Axes -->
  <line x1="400" y1="60" x2="400" y2="540" stroke="#888" stroke-width="1.5" stroke-dasharray="6,3"/>
  <line x1="80" y1="300" x2="720" y2="300" stroke="#888" stroke-width="1.5" stroke-dasharray="6,3"/>
  <text x="710" y="294" font-family="Georgia,serif" font-size="12" fill="#000">x</text>
  <text x="404" y="72" font-family="Georgia,serif" font-size="12" fill="#000">y</text>
  <!-- Vector A: from (200,380) to (360,260) — 40 right, 30 up (scaled ×4) -->
  <line x1="200" y1="380" x2="360" y2="260" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="352,254 368,256 358,268" fill="#000"/>
  <text x="262" y="290" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">A</text>
  <!-- Ax component (horizontal) -->
  <line x1="200" y1="380" x2="360" y2="380" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="272" y="396" font-family="Georgia,serif" font-size="10" fill="#000">Ax = 40</text>
  <!-- Ay component (vertical) -->
  <line x1="360" y1="380" x2="360" y2="260" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="364" y="326" font-family="Georgia,serif" font-size="10" fill="#000">Ay = 30</text>
  <!-- Vector B: starts at tip of A (368,256) → goes 30 right, -20 down (scaled ×4) -->
  <line x1="360" y1="260" x2="480" y2="340" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-dasharray="8,3"/>
  <polygon points="472,334 488,340 476,350" fill="#000"/>
  <text x="426" y="288" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">B</text>
  <!-- Bx component -->
  <line x1="360" y1="340" x2="480" y2="340" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="406" y="356" font-family="Georgia,serif" font-size="10" fill="#000">Bx = 30</text>
  <!-- By component -->
  <line x1="360" y1="260" x2="360" y2="340" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="330" y="305" font-family="Georgia,serif" font-size="10" fill="#000">By = −20</text>
  <!-- Resultant R: from tail of A (200,380) to tip of B (488,340) -->
  <line x1="200" y1="380" x2="480" y2="340" stroke="#000" stroke-width="4" stroke-linecap="round"/>
  <polygon points="472,334 490,340 476,352" fill="#000"/>
  <text x="325" y="380" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">R</text>
  <!-- Origin dots -->
  <circle cx="200" cy="380" r="5" fill="#000"/>
  <circle cx="360" cy="260" r="4" fill="#000"/>
  <circle cx="480" cy="340" r="5" fill="#000"/>
  <!-- Info box -->
  <rect x="520" y="80" width="180" height="110" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="530" y="98" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Resultant R:</text>
  <text x="530" y="114" font-family="Georgia,serif" font-size="10" fill="#000">Rx = Ax + Bx = 70</text>
  <text x="530" y="130" font-family="Georgia,serif" font-size="10" fill="#000">Ry = Ay + By = 10</text>
  <text x="530" y="146" font-family="Georgia,serif" font-size="10" fill="#000">|R| = √(Rx²+Ry²)</text>
  <text x="530" y="162" font-family="Georgia,serif" font-size="10" fill="#000">θ = arctan(Ry/Rx)</text>
  <!-- Legend -->
  <line x1="520" y1="210" x2="550" y2="210" stroke="#000" stroke-width="3"/>
  <text x="556" y="214" font-family="Georgia,serif" font-size="10" fill="#000">Vector A</text>
  <line x1="520" y1="228" x2="550" y2="228" stroke="#000" stroke-width="3" stroke-dasharray="8,3"/>
  <text x="556" y="232" font-family="Georgia,serif" font-size="10" fill="#000">Vector B</text>
  <line x1="520" y1="246" x2="550" y2="246" stroke="#000" stroke-width="4"/>
  <text x="556" y="250" font-family="Georgia,serif" font-size="10" fill="#000">Resultant R</text>
</svg>`;

  // ─── 6. MOTION GRAPHS ────────────────────────────────────────────────────
  static motionGraphsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">
  <text x="310" y="26" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Motion Graphs — s-t, v-t, a-t</text>
  <!-- ── s-t graph (top-left) ── -->
  <text x="50" y="58" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Displacement–Time (s-t)</text>
  <!-- axes -->
  <line x1="60" y1="200" x2="60" y2="70" stroke="#000" stroke-width="2"/>
  <polygon points="56,74 60,64 64,74" fill="#000"/>
  <line x1="60" y1="200" x2="290" y2="200" stroke="#000" stroke-width="2"/>
  <polygon points="286,196 296,200 286,204" fill="#000"/>
  <text x="294" y="204" font-family="Georgia,serif" font-size="11" fill="#000">t</text>
  <text x="64" y="68" font-family="Georgia,serif" font-size="11" fill="#000">s</text>
  <!-- tick labels -->
  <line x1="110" y1="196" x2="110" y2="204" stroke="#000" stroke-width="1.5"/>
  <text x="107" y="214" font-family="Georgia,serif" font-size="9" fill="#000">2</text>
  <line x1="170" y1="196" x2="170" y2="204" stroke="#000" stroke-width="1.5"/>
  <text x="167" y="214" font-family="Georgia,serif" font-size="9" fill="#000">5</text>
  <line x1="210" y1="196" x2="210" y2="204" stroke="#000" stroke-width="1.5"/>
  <text x="207" y="214" font-family="Georgia,serif" font-size="9" fill="#000">7</text>
  <!-- s-t curve: rest(0–60), linear rise (60–110), flat (110–170), linear fall (170–210) -->
  <polyline points="60,200 110,140 170,140 210,200"
            fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="62" y="196" font-family="Georgia,serif" font-size="8" fill="#555">0</text>
  <!-- slope annotation on rise -->
  <text x="72" y="172" font-family="Georgia,serif" font-size="9" font-style="italic" fill="#000">slope=v</text>
  <text x="136" y="136" font-family="Georgia,serif" font-size="9" fill="#000">const. v</text>
  <!-- ── v-t graph (top-right) ── -->
  <text x="360" y="58" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Velocity–Time (v-t)</text>
  <line x1="370" y1="200" x2="370" y2="70" stroke="#000" stroke-width="2"/>
  <polygon points="366,74 370,64 374,74" fill="#000"/>
  <line x1="370" y1="200" x2="600" y2="200" stroke="#000" stroke-width="2"/>
  <polygon points="596,196 606,200 596,204" fill="#000"/>
  <text x="608" y="204" font-family="Georgia,serif" font-size="11" fill="#000">t</text>
  <text x="374" y="68" font-family="Georgia,serif" font-size="11" fill="#000">v</text>
  <!-- tick labels -->
  <line x1="420" y1="196" x2="420" y2="204" stroke="#000" stroke-width="1.5"/>
  <text x="417" y="214" font-family="Georgia,serif" font-size="9" fill="#000">2</text>
  <line x1="480" y1="196" x2="480" y2="204" stroke="#000" stroke-width="1.5"/>
  <text x="477" y="214" font-family="Georgia,serif" font-size="9" fill="#000">5</text>
  <line x1="520" y1="196" x2="520" y2="204" stroke="#000" stroke-width="1.5"/>
  <text x="517" y="214" font-family="Georgia,serif" font-size="9" fill="#000">7</text>
  <!-- v-t: rises 370→420, flat 420→480, falls 480→520 -->
  <polyline points="370,200 420,120 480,120 520,200"
            fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- shaded area under v-t curve (displacement) -->
  <polygon points="370,200 420,120 480,120 520,200" fill="#000" fill-opacity="0.07"/>
  <text x="424" y="160" font-family="Georgia,serif" font-size="9" fill="#000">area = Δs</text>
  <!-- acceleration annotation on rise -->
  <text x="374" y="170" font-family="Georgia,serif" font-size="9" font-style="italic" fill="#000">a &gt; 0</text>
  <text x="488" y="170" font-family="Georgia,serif" font-size="9" font-style="italic" fill="#000">a &lt; 0</text>
  <!-- ── a-t graph (bottom, centred) ── -->
  <text x="290" y="290" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Acceleration–Time (a-t)</text>
  <line x1="200" y1="460" x2="200" y2="310" stroke="#000" stroke-width="2"/>
  <polygon points="196,314 200,304 204,314" fill="#000"/>
  <line x1="200" y1="390" x2="680" y2="390" stroke="#000" stroke-width="2"/>
  <polygon points="676,386 686,390 676,394" fill="#000"/>
  <text x="690" y="394" font-family="Georgia,serif" font-size="11" fill="#000">t</text>
  <text x="204" y="308" font-family="Georgia,serif" font-size="11" fill="#000">a</text>
  <!-- zero line dashes -->
  <line x1="200" y1="390" x2="680" y2="390" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4"/>
  <!-- tick labels -->
  <line x1="320" y1="386" x2="320" y2="394" stroke="#000" stroke-width="1.5"/>
  <text x="317" y="406" font-family="Georgia,serif" font-size="9" fill="#000">2</text>
  <line x1="500" y1="386" x2="500" y2="394" stroke="#000" stroke-width="1.5"/>
  <text x="497" y="406" font-family="Georgia,serif" font-size="9" fill="#000">5</text>
  <line x1="580" y1="386" x2="580" y2="394" stroke="#000" stroke-width="1.5"/>
  <text x="577" y="406" font-family="Georgia,serif" font-size="9" fill="#000">7</text>
  <!-- a-t: +constant from 0–2, zero from 2–5, −constant from 5–7 -->
  <polyline points="200,340 320,340 320,390 500,390 500,440 580,440 580,390"
            fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- +a label -->
  <text x="248" y="334" font-family="Georgia,serif" font-size="9" fill="#000">+a (accel.)</text>
  <!-- zero label -->
  <text x="390" y="384" font-family="Georgia,serif" font-size="9" fill="#000">a = 0</text>
  <!-- −a label -->
  <text x="526" y="448" font-family="Georgia,serif" font-size="9" fill="#000">−a (decel.)</text>
  <!-- relationship box -->
  <rect x="600" y="300" width="260" height="80" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="610" y="318" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Relationships:</text>
  <text x="610" y="334" font-family="Georgia,serif" font-size="10" fill="#000">v = ds/dt  (slope of s-t)</text>
  <text x="610" y="350" font-family="Georgia,serif" font-size="10" fill="#000">a = dv/dt  (slope of v-t)</text>
  <text x="610" y="366" font-family="Georgia,serif" font-size="10" fill="#000">s = ∫v dt  (area of v-t)</text>
</svg>`;

  // ─── 7. PROJECTILE MOTION ────────────────────────────────────────────────
  static projectileMotionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">
  <text x="300" y="26" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Projectile Motion — Parabolic Trajectory (θ = 45°)</text>
  <!-- Ground -->
  <line x1="60" y1="500" x2="840" y2="500" stroke="#000" stroke-width="3"/>
  <line x1="70" y1="500" x2="60" y2="514" stroke="#000" stroke-width="1.5"/>
  <line x1="95" y1="500" x2="85" y2="514" stroke="#000" stroke-width="1.5"/>
  <line x1="120" y1="500" x2="110" y2="514" stroke="#000" stroke-width="1.5"/>
  <line x1="145" y1="500" x2="135" y2="514" stroke="#000" stroke-width="1.5"/>
  <line x1="170" y1="500" x2="160" y2="514" stroke="#000" stroke-width="1.5"/>
  <line x1="195" y1="500" x2="185" y2="514" stroke="#000" stroke-width="1.5"/>
  <line x1="220" y1="500" x2="210" y2="514" stroke="#000" stroke-width="1.5"/>
  <line x1="245" y1="500" x2="235" y2="514" stroke="#000" stroke-width="1.5"/>
  <line x1="270" y1="500" x2="260" y2="514" stroke="#000" stroke-width="1.5"/>
  <!-- Axes -->
  <line x1="80" y1="500" x2="80" y2="80" stroke="#000" stroke-width="2"/>
  <polygon points="76,84 80,74 84,84" fill="#000"/>
  <text x="84" y="78" font-family="Georgia,serif" font-size="11" fill="#000">y (height)</text>
  <text x="830" y="514" font-family="Georgia,serif" font-size="11" fill="#000">x</text>
  <!-- Parabola: launch at (80,500), peak at (460,140), land at (840,500) -->
  <!-- parametric: x=80+760t, y=500-720t+720t² for t in [0,1] using quadratic bezier -->
  <path d="M 80,500 Q 460,−120 840,500" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <!-- Actually adjust control point: peak at t=0.5 → control = 2*peak − 0.5*(start+end) = 2*(460,140)−(460,500) = (460,−220) — overshoot, use (460,80) for visual -->
  <!-- Re-draw with corrected control point for visual: -->
  <path d="M 80,500 Q 460,80 840,500" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <!-- Trajectory dots -->
  <circle cx="80"  cy="500" r="5" fill="#000"/>
  <circle cx="230" cy="284" r="4" fill="#000"/>
  <circle cx="460" cy="176" r="5" fill="#000"/>
  <circle cx="690" cy="284" r="4" fill="#000"/>
  <circle cx="840" cy="500" r="5" fill="#000"/>
  <!-- Velocity vectors at launch -->
  <!-- v0 vector -->
  <line x1="80" y1="500" x2="140" y2="440" stroke="#000" stroke-width="2.5"/>
  <polygon points="134,436 144,436 138,448" fill="#000"/>
  <text x="144" y="436" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">v₀</text>
  <!-- v0x horizontal component -->
  <line x1="80" y1="500" x2="140" y2="500" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <polygon points="136,496 146,500 136,504" fill="#000"/>
  <text x="100" y="520" font-family="Georgia,serif" font-size="10" fill="#000">v₀cos θ</text>
  <!-- v0y vertical component -->
  <line x1="140" y1="500" x2="140" y2="440" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <polygon points="136,444 140,434 144,444" fill="#000"/>
  <text x="144" y="474" font-family="Georgia,serif" font-size="10" fill="#000">v₀sin θ</text>
  <!-- launch angle arc -->
  <path d="M 110,500 A30,30 0 0,0 101,471" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="112" y="488" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">θ</text>
  <!-- Peak velocity vector (horizontal only) -->
  <line x1="460" y1="176" x2="530" y2="176" stroke="#000" stroke-width="2.5"/>
  <polygon points="526,172 536,176 526,180" fill="#000"/>
  <text x="538" y="172" font-family="Georgia,serif" font-size="10" fill="#000">vx (const.)</text>
  <!-- height H at peak -->
  <line x1="460" y1="176" x2="460" y2="500" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="464" y="346" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">H</text>
  <text x="464" y="358" font-family="Georgia,serif" font-size="9" fill="#000">(max height)</text>
  <!-- Range R -->
  <line x1="80" y1="530" x2="840" y2="530" stroke="#000" stroke-width="1.5"/>
  <polygon points="84,526 74,530 84,534" fill="#000"/>
  <polygon points="836,526 846,530 836,534" fill="#000"/>
  <text x="430" y="548" font-family="Georgia,serif" font-size="12" font-style="italic" font-weight="bold" fill="#000">R (Range)</text>
  <!-- gravity arrow at peak -->
  <line x1="460" y1="190" x2="460" y2="240" stroke="#000" stroke-width="2.5"/>
  <polygon points="456,236 460,246 464,236" fill="#000"/>
  <text x="464" y="222" font-family="Georgia,serif" font-size="10" fill="#000">g</text>
  <!-- Formulae box -->
  <rect x="580" y="380" width="280" height="110" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="590" y="398" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Equations (θ = 45°):</text>
  <text x="590" y="414" font-family="Georgia,serif" font-size="10" fill="#000">H = v₀² sin²θ / 2g</text>
  <text x="590" y="430" font-family="Georgia,serif" font-size="10" fill="#000">R = v₀² sin 2θ / g</text>
  <text x="590" y="446" font-family="Georgia,serif" font-size="10" fill="#000">T = 2v₀ sinθ / g</text>
  <text x="590" y="462" font-family="Georgia,serif" font-size="10" fill="#000">vx = v₀cosθ  (constant)</text>
  <text x="590" y="478" font-family="Georgia,serif" font-size="10" fill="#000">vy = v₀sinθ − gt</text>
</svg>`;

  // ─── 8. INCLINED PLANE ───────────────────────────────────────────────────
  static inclinedPlaneSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">
  <text x="250" y="26" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Inclined Plane — Forces on a Block (θ = 30°)</text>
  <!-- Ground -->
  <line x1="60" y1="500" x2="740" y2="500" stroke="#000" stroke-width="2.5"/>
  <!-- Incline triangle: base (100,500) to (620,500) to (100,220) -->
  <polygon points="100,500 620,500 100,220" fill="#eee" stroke="#000" stroke-width="3"/>
  <!-- Hatch marks on incline surface -->
  <line x1="106" y1="226" x2="92" y2="220" stroke="#888" stroke-width="1.5"/>
  <line x1="162" y1="310" x2="148" y2="304" stroke="#888" stroke-width="1.5"/>
  <line x1="218" y1="394" x2="204" y2="388" stroke="#888" stroke-width="1.5"/>
  <!-- Angle arc at base -->
  <path d="M 160,500 A60,60 0 0,0 148,452" fill="none" stroke="#000" stroke-width="2"/>
  <text x="168" y="488" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">θ = 30°</text>
  <!-- Block on incline: centred ~midway up, rotated 30° -->
  <!-- Block at position ~(300,400) on the slope, drawn as rotated rect -->
  <g transform="translate(310,390) rotate(-30)">
    <rect x="-40" y="-30" width="80" height="60" rx="4" fill="#fff" stroke="#000" stroke-width="2.5"/>
    <text x="-8" y="6" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">m</text>
  </g>
  <!-- Centre of mass of block approx at (310,390) -->
  <circle cx="310" cy="390" r="4" fill="#000"/>
  <!-- Weight W (straight down) -->
  <line x1="310" y1="390" x2="310" y2="500" stroke="#000" stroke-width="3"/>
  <polygon points="306,496 310,510 314,496" fill="#000"/>
  <text x="316" y="462" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">W</text>
  <text x="316" y="476" font-family="Georgia,serif" font-size="10" fill="#000">(= mg)</text>
  <!-- Normal force N (perpendicular to incline surface — pointing up-right at +60° from horiz) -->
  <!-- angle of normal = 90−30 = 60° from horizontal = pointing at (cos60°,−sin60°)=(0.5,−0.866) -->
  <line x1="310" y1="390" x2="370" y2="286" stroke="#000" stroke-width="3"/>
  <polygon points="364,282 374,278 368,292" fill="#000"/>
  <text x="376" y="282" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">N</text>
  <text x="374" y="296" font-family="Georgia,serif" font-size="10" fill="#000">= mg cosθ</text>
  <!-- Friction f (up the incline — direction up-left at 150° from horiz) -->
  <line x1="310" y1="390" x2="224" y2="340" stroke="#000" stroke-width="3" stroke-dasharray="7,3"/>
  <polygon points="228,334 218,336 224,348" fill="#000"/>
  <text x="206" y="330" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">f</text>
  <text x="195" y="344" font-family="Georgia,serif" font-size="9" fill="#000">= μN</text>
  <!-- mg sinθ component (down the incline — right-down at 30°) -->
  <line x1="310" y1="390" x2="396" y2="440" stroke="#000" stroke-width="2.5" stroke-dasharray="5,3"/>
  <polygon points="390,436 400,444 392,450" fill="#000"/>
  <text x="402" y="448" font-family="Georgia,serif" font-size="10" fill="#000">mg sinθ</text>
  <!-- Weight component dashed decomposition -->
  <!-- mg cosθ dashed line (perpendicular component, toward surface normal base) -->
  <line x1="310" y1="500" x2="396" y2="440" stroke="#000" stroke-width="1.5" stroke-dasharray="3,4"/>
  <line x1="310" y1="500" x2="370" y2="286" stroke="#000" stroke-width="1.5" stroke-dasharray="3,4" stroke-opacity="0.3"/>
  <!-- right angle marks on incline corner -->
  <rect x="100" y="480" width="20" height="20" fill="none" stroke="#000" stroke-width="1.5"/>
  <!-- Coordinate axes along/perp to incline -->
  <g transform="translate(520,440) rotate(-30)">
    <line x1="0" y1="0" x2="60" y2="0" stroke="#000" stroke-width="2"/>
    <polygon points="56,-4 66,0 56,4" fill="#000"/>
    <text x="68" y="4" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">x∥</text>
    <line x1="0" y1="0" x2="0" y2="-60" stroke="#000" stroke-width="2"/>
    <polygon points="-4,-56 0,-66 4,-56" fill="#000"/>
    <text x="4" y="-68" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">y⊥</text>
  </g>
  <!-- Formulae box -->
  <rect x="530" y="290" width="240" height="100" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="540" y="308" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Newton's 2nd Law:</text>
  <text x="540" y="324" font-family="Georgia,serif" font-size="10" fill="#000">Along plane: ma = mg sinθ − f</text>
  <text x="540" y="340" font-family="Georgia,serif" font-size="10" fill="#000">Perp. plane: N = mg cosθ</text>
  <text x="540" y="356" font-family="Georgia,serif" font-size="10" fill="#000">f = μN = μmg cosθ</text>
  <text x="540" y="372" font-family="Georgia,serif" font-size="10" fill="#000">a = g(sinθ − μcosθ)</text>
</svg>`;

  // ─── 9. MOMENTUM COLLISION ───────────────────────────────────────────────
  static momentumCollisionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">
  <text x="270" y="26" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Momentum — Elastic Collision (Before &amp; After)</text>
  <!-- ── BEFORE (top half) ── -->
  <text x="40" y="60" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">BEFORE Collision</text>
  <!-- Object 1: mass 2 kg, v=+5 m/s, at x=120 -->
  <circle cx="160" cy="160" r="50" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="140" y="156" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">m₁=2</text>
  <text x="144" y="172" font-family="Georgia,serif" font-size="10" fill="#000">kg</text>
  <!-- v1 arrow rightward -->
  <line x1="210" y1="160" x2="310" y2="160" stroke="#000" stroke-width="3"/>
  <polygon points="306,155 320,160 306,165" fill="#000"/>
  <text x="246" y="148" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">v₁=+5 m/s</text>
  <!-- Object 2: mass 3 kg, v=−3 m/s, at x=620 -->
  <circle cx="640" cy="160" r="55" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="618" y="156" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">m₂=3</text>
  <text x="626" y="172" font-family="Georgia,serif" font-size="10" fill="#000">kg</text>
  <!-- v2 arrow leftward -->
  <line x1="585" y1="160" x2="480" y2="160" stroke="#000" stroke-width="3"/>
  <polygon points="484,155 470,160 484,165" fill="#000"/>
  <text x="496" y="148" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">v₂=−3 m/s</text>
  <!-- momentum labels -->
  <text x="140" y="224" font-family="Georgia,serif" font-size="10" fill="#000">p₁ = m₁v₁ = +10 kg·m/s</text>
  <text x="560" y="224" font-family="Georgia,serif" font-size="10" fill="#000">p₂ = m₂v₂ = −9 kg·m/s</text>
  <text x="340" y="224" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">p_total = +1 kg·m/s</text>
  <!-- Divider -->
  <line x1="40" y1="260" x2="860" y2="260" stroke="#000" stroke-width="2" stroke-dasharray="8,4"/>
  <text x="380" y="252" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">— COLLISION —</text>
  <!-- Collision flash at centre -->
  <text x="415" y="278" font-family="Georgia,serif" font-size="20" fill="#000">✸</text>
  <!-- ── AFTER (bottom half) ── -->
  <text x="40" y="320" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">AFTER Collision (elastic)</text>
  <!-- After elastic collision: v1' = (m1-m2)v1/(m1+m2) + 2m2v2/(m1+m2) = (2-3)(5)/(5) + 2(3)(-3)/(5) = -1-3.6 = -4.6 m/s approx -->
  <!-- v1' ≈ −4.6 m/s, v2' ≈ +0.4 m/s (conservation check) -->
  <circle cx="280" cy="420" r="50" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="260" y="416" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">m₁=2</text>
  <text x="264" y="432" font-family="Georgia,serif" font-size="10" fill="#000">kg</text>
  <!-- v1' arrow leftward -->
  <line x1="230" y1="420" x2="130" y2="420" stroke="#000" stroke-width="3"/>
  <polygon points="134,415 120,420 134,425" fill="#000"/>
  <text x="134" y="408" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">v₁′≈−4.6 m/s</text>
  <circle cx="560" cy="420" r="55" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="538" y="416" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">m₂=3</text>
  <text x="546" y="432" font-family="Georgia,serif" font-size="10" fill="#000">kg</text>
  <!-- v2' arrow rightward -->
  <line x1="615" y1="420" x2="720" y2="420" stroke="#000" stroke-width="3"/>
  <polygon points="716,415 730,420 716,425" fill="#000"/>
  <text x="624" y="408" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">v₂′≈+0.4 m/s</text>
  <!-- after momentum labels -->
  <text x="224" y="484" font-family="Georgia,serif" font-size="10" fill="#000">p₁′ ≈ −9.2 kg·m/s</text>
  <text x="490" y="484" font-family="Georgia,serif" font-size="10" fill="#000">p₂′ ≈ +1.2 kg·m/s</text>
  <text x="330" y="484" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">p_total = +1 kg·m/s ✓</text>
  <!-- Conservation box -->
  <rect x="300" y="510" width="300" height="60" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="312" y="528" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Conservation Laws:</text>
  <text x="312" y="544" font-family="Georgia,serif" font-size="10" fill="#000">Momentum: Σp_before = Σp_after</text>
  <text x="312" y="560" font-family="Georgia,serif" font-size="10" fill="#000">KE: ΣKE_before = ΣKE_after (elastic)</text>
</svg>`;

  // ─── 10. CIRCULAR MOTION ─────────────────────────────────────────────────
  static circularMotionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="700px" viewBox="0 0 700 700">
  <text x="200" y="28" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Circular Motion — Centripetal Force &amp; Velocity</text>
  <!-- Circular path -->
  <circle cx="350" cy="370" r="200" fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="10,5"/>
  <!-- Centre dot and label -->
  <circle cx="350" cy="370" r="6" fill="#000"/>
  <text x="356" y="374" font-family="Georgia,serif" font-size="11" fill="#000">O (centre)</text>
  <!-- Radius line -->
  <line x1="350" y1="370" x2="350" y2="170" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="354" y="278" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">r</text>
  <!-- Object on circle at top (350,170) -->
  <circle cx="350" cy="170" r="22" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="341" y="175" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">m</text>
  <!-- Velocity vector (tangent, rightward at top) -->
  <line x1="372" y1="170" x2="480" y2="170" stroke="#000" stroke-width="3"/>
  <polygon points="476,165 490,170 476,175" fill="#000"/>
  <text x="494" y="166" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">v</text>
  <text x="490" y="180" font-family="Georgia,serif" font-size="9" fill="#000">(tangential)</text>
  <!-- Centripetal acceleration (toward centre) -->
  <line x1="350" y1="192" x2="350" y2="310" stroke="#000" stroke-width="3"/>
  <polygon points="346,306 350,320 354,306" fill="#000"/>
  <text x="354" y="256" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">a_c</text>
  <text x="354" y="270" font-family="Georgia,serif" font-size="9" fill="#000">(centripetal)</text>
  <!-- Centripetal force label (same direction) -->
  <text x="280" y="248" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">F_c</text>
  <!-- Object at right of circle (550,370) -->
  <circle cx="550" cy="370" r="18" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="541" y="375" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">m</text>
  <!-- velocity downward -->
  <line x1="550" y1="388" x2="550" y2="480" stroke="#000" stroke-width="2.5"/>
  <polygon points="546,476 550,490 554,476" fill="#000"/>
  <text x="556" y="436" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">v</text>
  <!-- centripetal force toward centre (leftward) -->
  <line x1="532" y1="370" x2="420" y2="370" stroke="#000" stroke-width="2.5"/>
  <polygon points="424,366 410,370 424,374" fill="#000"/>
  <text x="448" y="362" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">F_c</text>
  <!-- Object at bottom (350,570) -->
  <circle cx="350" cy="570" r="18" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="341" y="575" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">m</text>
  <!-- velocity leftward -->
  <line x1="332" y1="570" x2="230" y2="570" stroke="#000" stroke-width="2.5"/>
  <polygon points="234,566 220,570 234,574" fill="#000"/>
  <!-- centripetal force upward -->
  <line x1="350" y1="552" x2="350" y2="440" stroke="#000" stroke-width="2.5"/>
  <polygon points="346,444 350,430 354,444" fill="#000"/>
  <!-- Angular velocity arc -->
  <path d="M 420,310 A100,100 0 0,1 460,390" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <polygon points="456,384 464,396 452,396" fill="#000"/>
  <text x="434" y="344" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">ω</text>
  <!-- Formulae box -->
  <rect x="50" y="480" width="250" height="120" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="60" y="498" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Equations:</text>
  <text x="60" y="514" font-family="Georgia,serif" font-size="10" fill="#000">F_c = mv²/r = mω²r</text>
  <text x="60" y="530" font-family="Georgia,serif" font-size="10" fill="#000">a_c = v²/r  (centripetal)</text>
  <text x="60" y="546" font-family="Georgia,serif" font-size="10" fill="#000">v = ωr  (linear speed)</text>
  <text x="60" y="562" font-family="Georgia,serif" font-size="10" fill="#000">T = 2πr/v = 2π/ω</text>
  <text x="60" y="578" font-family="Georgia,serif" font-size="10" fill="#000">F_c always ⊥ to v (toward O)</text>
</svg>`;

  // ─── 11. WORK-ENERGY BAR CHART ───────────────────────────────────────────
  static workEnergyBarChartSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">
  <text x="220" y="28" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Work-Energy Bar Chart — Energy Transformation</text>
  <text x="230" y="44" font-family="Georgia,serif" font-size="10" fill="#444">KE + PE + W_nc = constant  (W_nc = non-conservative work)</text>
  <!-- Axes -->
  <line x1="80" y1="500" x2="80" y2="80" stroke="#000" stroke-width="2"/>
  <polygon points="76,84 80,74 84,84" fill="#000"/>
  <text x="40" y="80" font-family="Georgia,serif" font-size="11" fill="#000">Energy (J)</text>
  <line x1="80" y1="500" x2="740" y2="500" stroke="#000" stroke-width="2"/>
  <!-- y-axis ticks -->
  <line x1="76" y1="500" x2="84" y2="500" stroke="#000" stroke-width="1.5"/>
  <text x="52" y="504" font-family="Georgia,serif" font-size="10" fill="#000">0</text>
  <line x1="76" y1="420" x2="84" y2="420" stroke="#000" stroke-width="1.5"/>
  <text x="44" y="424" font-family="Georgia,serif" font-size="10" fill="#000">20</text>
  <line x1="76" y1="340" x2="84" y2="340" stroke="#000" stroke-width="1.5"/>
  <text x="44" y="344" font-family="Georgia,serif" font-size="10" fill="#000">40</text>
  <line x1="76" y1="260" x2="84" y2="260" stroke="#000" stroke-width="1.5"/>
  <text x="44" y="264" font-family="Georgia,serif" font-size="10" fill="#000">60</text>
  <line x1="76" y1="180" x2="84" y2="180" stroke="#000" stroke-width="1.5"/>
  <text x="44" y="184" font-family="Georgia,serif" font-size="10" fill="#000">80</text>
  <line x1="76" y1="100" x2="84" y2="100" stroke="#000" stroke-width="1.5"/>
  <text x="36" y="104" font-family="Georgia,serif" font-size="10" fill="#000">100</text>
  <!-- Grid lines (light dashes) -->
  <line x1="80" y1="420" x2="740" y2="420" stroke="#ddd" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="80" y1="340" x2="740" y2="340" stroke="#ddd" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="80" y1="260" x2="740" y2="260" stroke="#ddd" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="80" y1="180" x2="740" y2="180" stroke="#ddd" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="80" y1="100" x2="740" y2="100" stroke="#ddd" stroke-width="1" stroke-dasharray="4,4"/>
  <!-- INITIAL STATE bars (x=130–230) -->
  <text x="140" y="540" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">INITIAL</text>
  <!-- KE_i = 100 J → height = 400px, top at y=100 -->
  <rect x="130" y="100" width="40" height="400" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="136" y="96" font-family="Georgia,serif" font-size="10" fill="#000">100J</text>
  <text x="134" y="300" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">KE</text>
  <!-- PE_i = 0 J -->
  <rect x="180" y="498" width="40" height="2" fill="#000" stroke="#000" stroke-width="1"/>
  <text x="186" y="492" font-family="Georgia,serif" font-size="10" fill="#000">0J</text>
  <text x="184" y="520" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">PE</text>
  <!-- ARROW between initial and final -->
  <line x1="300" y1="300" x2="400" y2="300" stroke="#000" stroke-width="2.5"/>
  <polygon points="396,296 410,300 396,304" fill="#000"/>
  <text x="316" y="290" font-family="Georgia,serif" font-size="10" fill="#000">Work done</text>
  <text x="316" y="304" font-family="Georgia,serif" font-size="10" fill="#000">W = −10 J</text>
  <!-- FINAL STATE bars (x=440–540) -->
  <text x="460" y="540" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">FINAL</text>
  <!-- KE_f = 50 J → height=200, top at y=300 -->
  <rect x="440" y="300" width="40" height="200" fill="#888" stroke="#000" stroke-width="2.5"/>
  <text x="446" y="296" font-family="Georgia,serif" font-size="10" fill="#000">50J</text>
  <text x="444" y="400" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#fff">KE</text>
  <!-- PE_f = 40 J → height=160, top at y=340 -->
  <rect x="490" y="340" width="40" height="160" fill="#ccc" stroke="#000" stroke-width="2.5"/>
  <text x="494" y="334" font-family="Georgia,serif" font-size="10" fill="#000">40J</text>
  <text x="494" y="424" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">PE</text>
  <!-- W_nc bar (negative, shown below baseline) -->
  <rect x="570" y="500" width="40" height="40" fill="#333" stroke="#000" stroke-width="2"/>
  <text x="574" y="556" font-family="Georgia,serif" font-size="10" fill="#000">−10J</text>
  <text x="566" y="570" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">W_nc</text>
  <!-- Total energy conservation note -->
  <text x="640" y="160" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Total E:</text>
  <text x="640" y="178" font-family="Georgia,serif" font-size="11" fill="#000">Initial = 100 J</text>
  <text x="640" y="196" font-family="Georgia,serif" font-size="11" fill="#000">Final = 50+40 = 90 J</text>
  <text x="640" y="214" font-family="Georgia,serif" font-size="11" fill="#000">Loss = 10 J ✓</text>
  <!-- Formula box -->
  <rect x="600" y="340" width="180" height="60" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="610" y="358" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Work-Energy Thm:</text>
  <text x="610" y="374" font-family="Georgia,serif" font-size="10" fill="#000">ΔKE = W_net</text>
  <text x="610" y="390" font-family="Georgia,serif" font-size="10" fill="#000">KE_i + PE_i + W_nc = KE_f + PE_f</text>
</svg>`;

  // ─── 12. SPRING HARMONIC MOTION ──────────────────────────────────────────
  static springHarmonicMotionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">
  <text x="220" y="26" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Simple Harmonic Motion — Spring Oscillator</text>
  <!-- ── Spring diagram (top section) ── -->
  <!-- Wall -->
  <rect x="60" y="80" width="20" height="160" fill="#aaa" stroke="#000" stroke-width="2"/>
  <line x1="60" y1="80"  x2="48" y2="92"  stroke="#000" stroke-width="1.5"/>
  <line x1="60" y1="100" x2="48" y2="112" stroke="#000" stroke-width="1.5"/>
  <line x1="60" y1="120" x2="48" y2="132" stroke="#000" stroke-width="1.5"/>
  <line x1="60" y1="140" x2="48" y2="152" stroke="#000" stroke-width="1.5"/>
  <line x1="60" y1="160" x2="48" y2="172" stroke="#000" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="48" y2="192" stroke="#000" stroke-width="1.5"/>
  <line x1="60" y1="200" x2="48" y2="212" stroke="#000" stroke-width="1.5"/>
  <line x1="60" y1="220" x2="48" y2="232" stroke="#000" stroke-width="1.5"/>
  <!-- Spring (zigzag) -->
  <polyline points="80,160 100,160 108,140 124,180 140,140 156,180 172,140 188,180 204,140 220,180 236,140 252,180 268,160 290,160"
            fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Mass block -->
  <rect x="290" y="130" width="70" height="60" rx="4" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="310" y="166" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">m</text>
  <!-- equilibrium line -->
  <line x1="80" y1="220" x2="680" y2="220" stroke="#aaa" stroke-width="1.5" stroke-dasharray="5,4"/>
  <text x="686" y="224" font-family="Georgia,serif" font-size="10" fill="#888">x=0</text>
  <!-- Displacement arrow -->
  <line x1="325" y1="192" x2="460" y2="192" stroke="#000" stroke-width="2.5"/>
  <polygon points="456,188 470,192 456,196" fill="#000"/>
  <text x="380" y="186" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">x (displacement)</text>
  <!-- Restoring force arrow (opposite to x) -->
  <line x1="325" y1="208" x2="230" y2="208" stroke="#000" stroke-width="2.5"/>
  <polygon points="234,204 220,208 234,212" fill="#000"/>
  <text x="230" y="202" font-family="Georgia,serif" font-size="11" fill="#000">F = −kx</text>
  <!-- k label on spring -->
  <text x="164" y="130" font-family="Georgia,serif" font-size="12" font-style="italic" font-weight="bold" fill="#000">k</text>
  <!-- ── Displacement-time graph (middle) ── -->
  <text x="60" y="264" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Displacement vs Time:</text>
  <!-- axes -->
  <line x1="80" y1="380" x2="80" y2="278" stroke="#000" stroke-width="2"/>
  <polygon points="76,282 80,272 84,282" fill="#000"/>
  <line x1="80" y1="330" x2="700" y2="330" stroke="#000" stroke-width="2"/>
  <polygon points="696,326 706,330 696,334" fill="#000"/>
  <text x="710" y="334" font-family="Georgia,serif" font-size="11" fill="#000">t</text>
  <text x="84" y="276" font-family="Georgia,serif" font-size="11" fill="#000">x</text>
  <!-- sine wave: amplitude 50, period ~240px, 2.5 cycles -->
  <path d="M 80,330
    C 100,330 108,280 140,280 C 172,280 180,330 200,330
    C 220,330 228,380 260,380 C 292,380 300,330 320,330
    C 340,330 348,280 380,280 C 412,280 420,330 440,330
    C 460,330 468,380 500,380 C 532,380 540,330 560,330
    C 580,330 588,280 620,280 C 652,280 660,330 680,330"
        fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <!-- amplitude arrows -->
  <line x1="68" y1="330" x2="68" y2="280" stroke="#000" stroke-width="2"/>
  <polygon points="64,284 68,274 72,284" fill="#000"/>
  <polygon points="64,326 68,336 72,326" fill="#000"/>
  <text x="40" y="310" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">A</text>
  <!-- period annotation -->
  <line x1="80" y1="392" x2="320" y2="392" stroke="#000" stroke-width="1.5"/>
  <polygon points="84,388 74,392 84,396" fill="#000"/>
  <polygon points="316,388 326,392 316,396" fill="#000"/>
  <text x="176" y="408" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">T (period)</text>
  <!-- Formulae box -->
  <rect x="450" y="430" width="310" height="140" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="460" y="448" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">SHM Equations:</text>
  <text x="460" y="464" font-family="Georgia,serif" font-size="10" fill="#000">x(t) = A cos(ωt + φ)</text>
  <text x="460" y="480" font-family="Georgia,serif" font-size="10" fill="#000">ω = √(k/m)  (angular frequency)</text>
  <text x="460" y="496" font-family="Georgia,serif" font-size="10" fill="#000">T = 2π√(m/k)  (period)</text>
  <text x="460" y="512" font-family="Georgia,serif" font-size="10" fill="#000">F = −kx  (Hooke's Law)</text>
  <text x="460" y="528" font-family="Georgia,serif" font-size="10" fill="#000">E = ½kA² = ½mv²_max</text>
  <text x="460" y="544" font-family="Georgia,serif" font-size="10" fill="#000">At x=0: KE max, PE=0</text>
  <text x="460" y="560" font-family="Georgia,serif" font-size="10" fill="#000">At x=±A: PE max, KE=0</text>
</svg>`;

  // ─── 13. TORQUE LEVER DIAGRAM ────────────────────────────────────────────
  static torqueLeverDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">
  <text x="280" y="26" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Torque and Lever — Moment Arm Diagram</text>
  <!-- Lever bar: horizontal from x=80 to x=820, y=300 -->
  <rect x="80" y="290" width="740" height="20" rx="4" fill="#ddd" stroke="#000" stroke-width="3"/>
  <!-- Fulcrum triangle at x=350 (30% from left) -->
  <polygon points="350,310 310,380 390,380" fill="#fff" stroke="#000" stroke-width="3"/>
  <!-- Fulcrum base -->
  <line x1="290" y1="380" x2="410" y2="380" stroke="#000" stroke-width="3"/>
  <line x1="280" y1="390" x2="300" y2="376" stroke="#000" stroke-width="1.5"/>
  <line x1="300" y1="390" x2="320" y2="376" stroke="#000" stroke-width="1.5"/>
  <line x1="320" y1="390" x2="340" y2="376" stroke="#000" stroke-width="1.5"/>
  <line x1="340" y1="390" x2="360" y2="376" stroke="#000" stroke-width="1.5"/>
  <line x1="360" y1="390" x2="380" y2="376" stroke="#000" stroke-width="1.5"/>
  <line x1="380" y1="390" x2="400" y2="376" stroke="#000" stroke-width="1.5"/>
  <text x="338" y="404" font-family="Georgia,serif" font-size="11" fill="#000">Fulcrum (pivot)</text>
  <!-- Force F1 at x=140 (downward, 50N) -->
  <line x1="140" y1="290" x2="140" y2="160" stroke="#000" stroke-width="3.5"/>
  <polygon points="136,164 140,150 144,164" fill="#000"/>
  <text x="100" y="144" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">F₁ = 50 N</text>
  <!-- F1 downward (load) — shown below lever -->
  <line x1="140" y1="310" x2="140" y2="440" stroke="#000" stroke-width="3" stroke-dasharray="5,3"/>
  <polygon points="136,436 140,450 144,436" fill="#000"/>
  <text x="100" y="468" font-family="Georgia,serif" font-size="11" fill="#000">(Load = 50N↓)</text>
  <!-- Moment arm d1: from F1 to fulcrum = 350−140 = 210 -->
  <line x1="140" y1="270" x2="350" y2="270" stroke="#000" stroke-width="2"/>
  <polygon points="144,266 134,270 144,274" fill="#000"/>
  <polygon points="346,266 356,270 346,274" fill="#000"/>
  <text x="220" y="262" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">d₁ = 210 mm</text>
  <!-- Force F2 at x=700 (upward, 30N) -->
  <line x1="700" y1="290" x2="700" y2="160" stroke="#000" stroke-width="3.5"/>
  <polygon points="696,164 700,150 704,164" fill="#000"/>
  <text x="660" y="144" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">F₂ = 30 N</text>
  <text x="660" y="158" font-family="Georgia,serif" font-size="9" fill="#000">(applied effort ↑)</text>
  <!-- Moment arm d2: from fulcrum to F2 = 700−350 = 350 -->
  <line x1="350" y1="270" x2="700" y2="270" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <polygon points="354,266 344,270 354,274" fill="#000"/>
  <polygon points="696,266 706,270 696,274" fill="#000"/>
  <text x="500" y="262" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">d₂ = 350 mm</text>
  <!-- Torque labels -->
  <!-- τ1 (clockwise, shown as arc) -->
  <path d="M 250,300 A 100,40 0 0,1 350,300" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <polygon points="248,296 244,308 256,304" fill="#000"/>
  <text x="262" y="346" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">τ₁ = F₁×d₁</text>
  <text x="256" y="360" font-family="Georgia,serif" font-size="10" fill="#000">= 50×210 = 10,500 N·mm ↻</text>
  <!-- τ2 (counter-clockwise) -->
  <path d="M 350,300 A 100,40 0 0,0 560,300" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <polygon points="558,296 568,300 558,306" fill="#000"/>
  <text x="420" y="346" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">τ₂ = F₂×d₂</text>
  <text x="412" y="360" font-family="Georgia,serif" font-size="10" fill="#000">= 30×350 = 10,500 N·mm ↺</text>
  <!-- Equilibrium note -->
  <text x="310" y="430" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">τ₁ = τ₂  ⟹  Lever in equilibrium!</text>
  <!-- Formulae box -->
  <rect x="60" y="470" width="350" height="90" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="70" y="488" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Torque Principle:</text>
  <text x="70" y="504" font-family="Georgia,serif" font-size="10" fill="#000">τ = F × d  (perpendicular distance)</text>
  <text x="70" y="520" font-family="Georgia,serif" font-size="10" fill="#000">Equilibrium: Στ_clockwise = Στ_anticlockwise</text>
  <text x="70" y="536" font-family="Georgia,serif" font-size="10" fill="#000">Mechanical advantage: MA = d₂/d₁ = F₁/F₂</text>
  <text x="70" y="552" font-family="Georgia,serif" font-size="10" fill="#000">Here: MA = 350/210 ≈ 1.67</text>
</svg>`;

  // ─── 14. WAVEFRONT DIAGRAM ───────────────────────────────────────────────
  static wavefrontDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="700px" viewBox="0 0 700 700">
  <text x="180" y="26" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Wavefront Diagram — Circular Wavefronts from Point Source</text>
  <!-- Point source -->
  <circle cx="350" cy="350" r="8" fill="#000"/>
  <text x="358" y="346" font-family="Georgia,serif" font-size="11" fill="#000">Source (S)</text>
  <!-- Circular wavefronts -->
  <circle cx="350" cy="350" r="50"  fill="none" stroke="#000" stroke-width="2.5"/>
  <circle cx="350" cy="350" r="100" fill="none" stroke="#000" stroke-width="2.5"/>
  <circle cx="350" cy="350" r="150" fill="none" stroke="#000" stroke-width="2.5"/>
  <circle cx="350" cy="350" r="200" fill="none" stroke="#000" stroke-width="2.5"/>
  <circle cx="350" cy="350" r="250" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <!-- λ label between first two wavefronts -->
  <line x1="350" y1="350" x2="400" y2="350" stroke="#000" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="350" y1="350" x2="350" y2="300" stroke="#000" stroke-width="1.5" stroke-dasharray="3,3"/>
  <!-- λ bracket on horizontal ray -->
  <line x1="350" y1="362" x2="400" y2="362" stroke="#000" stroke-width="1.5"/>
  <line x1="350" y1="358" x2="350" y2="366" stroke="#000" stroke-width="1.5"/>
  <line x1="400" y1="358" x2="400" y2="366" stroke="#000" stroke-width="1.5"/>
  <text x="366" y="378" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">λ</text>
  <!-- Rays (4 directions showing wave propagation) -->
  <line x1="350" y1="350" x2="350" y2="90"  stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="346,94 350,84 354,94" fill="#000"/>
  <line x1="350" y1="350" x2="610" y2="350" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="606,346 616,350 606,354" fill="#000"/>
  <line x1="350" y1="350" x2="350" y2="610" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="346,606 350,616 354,606" fill="#000"/>
  <line x1="350" y1="350" x2="90" y2="350"  stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="94,346 84,350 94,354" fill="#000"/>
  <!-- Diagonal ray -->
  <line x1="350" y1="350" x2="527" y2="173" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="520,178 530,170 522,182" fill="#000"/>
  <!-- Ray labels -->
  <text x="354" y="86" font-family="Georgia,serif" font-size="10" fill="#000">ray</text>
  <text x="618" y="354" font-family="Georgia,serif" font-size="10" fill="#000">ray</text>
  <!-- Wavefront labels (at right side of each circle) -->
  <text x="404" y="352" font-family="Georgia,serif" font-size="9" fill="#000">λ</text>
  <text x="454" y="352" font-family="Georgia,serif" font-size="9" fill="#000">2λ</text>
  <text x="504" y="352" font-family="Georgia,serif" font-size="9" fill="#000">3λ</text>
  <text x="554" y="352" font-family="Georgia,serif" font-size="9" fill="#000">4λ</text>
  <!-- Note box -->
  <rect x="60" y="580" width="580" height="60" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="70" y="598" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Points:</text>
  <text x="70" y="614" font-family="Georgia,serif" font-size="10" fill="#000">• Wavefronts = loci of points in same phase • Rays ⊥ to wavefronts</text>
  <text x="70" y="630" font-family="Georgia,serif" font-size="10" fill="#000">• Spacing between wavefronts = λ  • Far from source, wavefronts approach plane waves</text>
</svg>`;

  // ─── 15. REFLECTION AND REFRACTION ──────────────────────────────────────
  static reflectionRefractionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">
  <text x="220" y="26" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Reflection and Refraction at a Boundary</text>
  <text x="230" y="42" font-family="Georgia,serif" font-size="10" fill="#444">Snell's Law: n₁ sinθ₁ = n₂ sinθ₂</text>
  <!-- Interface / boundary line -->
  <line x1="60" y1="300" x2="740" y2="300" stroke="#000" stroke-width="3"/>
  <!-- Medium labels -->
  <text x="640" y="282" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Medium 1</text>
  <text x="640" y="296" font-family="Georgia,serif" font-size="10" fill="#000">n₁ = 1.0 (air)</text>
  <text x="640" y="326" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Medium 2</text>
  <text x="640" y="340" font-family="Georgia,serif" font-size="10" fill="#000">n₂ = 1.5 (glass)</text>
  <!-- Fill for medium 2 -->
  <rect x="60" y="300" width="680" height="250" fill="#eee" fill-opacity="0.4" stroke="none"/>
  <!-- Normal line (vertical dashed) at incidence point (350,300) -->
  <line x1="350" y1="80" x2="350" y2="520" stroke="#000" stroke-width="1.8" stroke-dasharray="8,4"/>
  <text x="354" y="96" font-family="Georgia,serif" font-size="10" fill="#000">Normal</text>
  <!-- Incident ray: from upper-left to (350,300), angle 30° from normal -->
  <!-- from (200,154) to (350,300): dx=150,dy=146 ≈ 45° — use proper 30° from normal -->
  <!-- 30° from vertical normal: x-component = sin30°=0.5, y=cos30°=0.866 → from (350−173,300−300) -->
  <!-- Incident from (177,127) to (350,300) — 30° angle -->
  <line x1="177" y1="127" x2="350" y2="300" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="342,292 354,302 344,312" fill="#000"/>
  <text x="148" y="120" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Incident ray</text>
  <!-- Reflected ray: same angle other side → to (523,127) -->
  <line x1="350" y1="300" x2="523" y2="127" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-dasharray="8,4"/>
  <polygon points="516,134 526,122 530,136" fill="#000"/>
  <text x="528" y="118" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Reflected ray</text>
  <!-- Refracted ray: Snell's law θ₂ = arcsin(n1/n2 × sinθ₁) = arcsin(0.5/1.5)=arcsin(0.333)≈19.5° -->
  <!-- direction: sin19.5°≈0.333, cos19.5°≈0.943 → dx=115, dy=324 from (350,300) → (465,624) clip to y=520 → x=350+115*(220/324)=350+78=428 -->
  <line x1="350" y1="300" x2="428" y2="520" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="424,514 430,526 436,514" fill="#000"/>
  <text x="436" y="524" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Refracted ray</text>
  <!-- Angle arcs in medium 1 -->
  <!-- incident angle θ₁ -->
  <path d="M 350,274 A26,26 0 0,0 337,280" fill="none" stroke="#000" stroke-width="2"/>
  <text x="316" y="278" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">θ₁</text>
  <text x="300" y="292" font-family="Georgia,serif" font-size="9" fill="#000">= 30°</text>
  <!-- reflected angle -->
  <path d="M 363,280 A26,26 0 0,0 350,274" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="364" y="278" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">θ₁</text>
  <text x="364" y="292" font-family="Georgia,serif" font-size="9" fill="#000">= 30°</text>
  <!-- refracted angle θ₂ (below boundary) -->
  <path d="M 350,326 A26,26 0 0,1 360,320" fill="none" stroke="#000" stroke-width="2"/>
  <text x="362" y="326" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">θ₂</text>
  <text x="360" y="342" font-family="Georgia,serif" font-size="9" fill="#000">≈ 19.5°</text>
  <!-- wavefront lines showing bending -->
  <!-- Incident wavefronts (parallel lines perpendicular to incident ray) -->
  <!-- Incident ray direction: (350−177,300−127)=(173,173) → unit(0.707,0.707) → perp=(-0.707,0.707) -->
  <line x1="126" y1="192" x2="246" y2="192" stroke="#000" stroke-width="1.5" stroke-dasharray="3,3" transform="rotate(-45,186,192)"/>
  <line x1="170" y1="236" x2="290" y2="236" stroke="#000" stroke-width="1.5" stroke-dasharray="3,3" transform="rotate(-45,230,236)"/>
  <line x1="214" y1="280" x2="334" y2="280" stroke="#000" stroke-width="1.5" stroke-dasharray="3,3" transform="rotate(-45,274,280)"/>
  <!-- Snell's law formula box -->
  <rect x="60" y="460" width="300" height="100" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="70" y="478" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Snell's Law:</text>
  <text x="70" y="494" font-family="Georgia,serif" font-size="11" fill="#000">n₁ sinθ₁ = n₂ sinθ₂</text>
  <text x="70" y="510" font-family="Georgia,serif" font-size="10" fill="#000">1.0 × sin30° = 1.5 × sinθ₂</text>
  <text x="70" y="526" font-family="Georgia,serif" font-size="10" fill="#000">sinθ₂ = 0.333  →  θ₂ ≈ 19.5°</text>
  <text x="70" y="542" font-family="Georgia,serif" font-size="10" fill="#000">Reflection: θ_i = θ_r (always)</text>
</svg>`;

  // ─── 16. WAVE INTERFERENCE ───────────────────────────────────────────────
  static waveInterferenceSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">
  <text x="210" y="26" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Wave Interference — Constructive &amp; Destructive</text>
  <!-- ── Source points S1 and S2 ── -->
  <circle cx="200" cy="300" r="8" fill="#000"/>
  <text x="160" y="295" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">S₁</text>
  <circle cx="200" cy="400" r="8" fill="#000"/>
  <text x="160" y="395" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">S₂</text>
  <!-- Circular wavefronts from S1 -->
  <circle cx="200" cy="300" r="40"  fill="none" stroke="#000" stroke-width="2"/>
  <circle cx="200" cy="300" r="80"  fill="none" stroke="#000" stroke-width="2"/>
  <circle cx="200" cy="300" r="120" fill="none" stroke="#000" stroke-width="2"/>
  <circle cx="200" cy="300" r="160" fill="none" stroke="#000" stroke-width="2"/>
  <circle cx="200" cy="300" r="200" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="200" cy="300" r="240" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- Circular wavefronts from S2 (dashed to distinguish) -->
  <circle cx="200" cy="400" r="40"  fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,2"/>
  <circle cx="200" cy="400" r="80"  fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,2"/>
  <circle cx="200" cy="400" r="120" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,2"/>
  <circle cx="200" cy="400" r="160" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,2"/>
  <circle cx="200" cy="400" r="200" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="3,4"/>
  <circle cx="200" cy="400" r="240" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="3,4"/>
  <!-- Central constructive interference line (perpendicular bisector) -->
  <line x1="200" y1="350" x2="760" y2="350" stroke="#000" stroke-width="3" stroke-dasharray="10,4"/>
  <text x="680" y="342" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Central max</text>
  <text x="680" y="356" font-family="Georgia,serif" font-size="9" fill="#000">(path diff = 0)</text>
  <!-- Upper constructive nodal lines (approx) -->
  <line x1="200" y1="300" x2="760" y2="230" stroke="#000" stroke-width="1.8" stroke-dasharray="6,3"/>
  <text x="680" y="224" font-family="Georgia,serif" font-size="9" fill="#000">1st max (↑)</text>
  <line x1="200" y1="400" x2="760" y2="470" stroke="#000" stroke-width="1.8" stroke-dasharray="6,3"/>
  <text x="680" y="484" font-family="Georgia,serif" font-size="9" fill="#000">1st max (↓)</text>
  <!-- Destructive interference lines (nodal, between maxima) -->
  <line x1="200" y1="300" x2="760" y2="290" stroke="#000" stroke-width="1.5" stroke-dasharray="3,5"/>
  <text x="700" y="284" font-family="Georgia,serif" font-size="9" fill="#000">1st min</text>
  <line x1="200" y1="400" x2="760" y2="410" stroke="#000" stroke-width="1.5" stroke-dasharray="3,5"/>
  <text x="700" y="424" font-family="Georgia,serif" font-size="9" fill="#000">1st min</text>
  <!-- Path difference annotation -->
  <!-- From S1 and S2 to a point on central max (600,350) -->
  <line x1="200" y1="300" x2="500" y2="350" stroke="#000" stroke-width="1" stroke-dasharray="3,4"/>
  <line x1="200" y1="400" x2="500" y2="350" stroke="#000" stroke-width="1" stroke-dasharray="3,4"/>
  <circle cx="500" cy="350" r="5" fill="#000"/>
  <text x="506" y="346" font-family="Georgia,serif" font-size="9" fill="#000">Δpath = 0</text>
  <text x="506" y="360" font-family="Georgia,serif" font-size="9" fill="#000">(constructive)</text>
  <!-- Source separation d -->
  <line x1="184" y1="300" x2="184" y2="400" stroke="#000" stroke-width="1.5"/>
  <polygon points="180,304 184,294 188,304" fill="#000"/>
  <polygon points="180,396 184,406 188,396" fill="#000"/>
  <text x="148" y="356" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">d</text>
  <!-- Legend -->
  <rect x="540" y="80" width="220" height="100" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="550" y="98" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Legend:</text>
  <line x1="550" y1="112" x2="580" y2="112" stroke="#000" stroke-width="2"/>
  <text x="584" y="116" font-family="Georgia,serif" font-size="10" fill="#000">S₁ wavefronts</text>
  <line x1="550" y1="128" x2="580" y2="128" stroke="#000" stroke-width="2" stroke-dasharray="6,2"/>
  <text x="584" y="132" font-family="Georgia,serif" font-size="10" fill="#000">S₂ wavefronts</text>
  <line x1="550" y1="144" x2="580" y2="144" stroke="#000" stroke-width="2.5" stroke-dasharray="10,4"/>
  <text x="584" y="148" font-family="Georgia,serif" font-size="10" fill="#000">Constructive (max)</text>
  <line x1="550" y1="160" x2="580" y2="160" stroke="#000" stroke-width="1.5" stroke-dasharray="3,5"/>
  <text x="584" y="164" font-family="Georgia,serif" font-size="10" fill="#000">Destructive (min)</text>
  <!-- Conditions box -->
  <rect x="450" y="480" width="310" height="90" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="460" y="498" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Interference Conditions:</text>
  <text x="460" y="514" font-family="Georgia,serif" font-size="10" fill="#000">Constructive: Δpath = nλ  (n = 0,1,2,...)</text>
  <text x="460" y="530" font-family="Georgia,serif" font-size="10" fill="#000">Destructive: Δpath = (n+½)λ</text>
  <text x="460" y="546" font-family="Georgia,serif" font-size="10" fill="#000">Fringe spacing: y = λD/d</text>
  <text x="460" y="562" font-family="Georgia,serif" font-size="10" fill="#000">(D = screen distance, d = slit sep.)</text>
</svg>`;

  // ─── 17. STANDING WAVES ──────────────────────────────────────────────────
  static standingWavesSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="500px" viewBox="0 0 900 500">
  <text x="280" y="26" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Standing Waves on a String — Harmonics</text>
  <!-- Fixed endpoints indicators -->
  <!-- Wall left -->
  <rect x="56" y="60" width="14" height="420" fill="#aaa" stroke="#000" stroke-width="1.5"/>
  <!-- Wall right -->
  <rect x="830" y="60" width="14" height="420" fill="#aaa" stroke="#000" stroke-width="1.5"/>
  <!-- String length label -->
  <line x1="70" y1="48" x2="830" y2="48" stroke="#000" stroke-width="1.5"/>
  <polygon points="74,44 64,48 74,52" fill="#000"/>
  <polygon points="826,44 836,48 826,52" fill="#000"/>
  <text x="420" y="44" font-family="Georgia,serif" font-size="11" font-style="italic" font-weight="bold" fill="#000">L</text>
  <!-- ── 1st Harmonic (Fundamental) ── y=120 -->
  <text x="20" y="108" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">n=1</text>
  <text x="20" y="120" font-family="Georgia,serif" font-size="9" fill="#000">(fund.)</text>
  <!-- Equilibrium line -->
  <line x1="70" y1="120" x2="830" y2="120" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4"/>
  <!-- Wave: half-sine from 70 to 830, amplitude 35 -->
  <path d="M 70,120 C 220,120 220,85 450,85 C 680,85 680,120 830,120"
        fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M 70,120 C 220,120 220,155 450,155 C 680,155 680,120 830,120"
        fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3" stroke-linecap="round"/>
  <!-- Node markers -->
  <circle cx="70"  cy="120" r="5" fill="#000"/>
  <circle cx="830" cy="120" r="5" fill="#000"/>
  <text x="64"  cy="120" font-family="Georgia,serif" font-size="9" fill="#000">N</text>
  <text x="824" y="135" font-family="Georgia,serif" font-size="9" fill="#000">N</text>
  <!-- Antinode -->
  <circle cx="450" cy="85" r="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="454" y="80" font-family="Georgia,serif" font-size="9" fill="#000">AN</text>
  <text x="840" y="116" font-family="Georgia,serif" font-size="9" fill="#000">λ=2L</text>
  <!-- ── 2nd Harmonic ── y=220 -->
  <text x="20" y="216" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">n=2</text>
  <line x1="70" y1="220" x2="830" y2="220" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4"/>
  <path d="M 70,220 C 178,220 178,190 262,190 C 346,190 346,220 450,220 C 554,220 554,250 638,250 C 722,250 722,220 830,220"
        fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M 70,220 C 178,220 178,250 262,250 C 346,250 346,220 450,220 C 554,220 554,190 638,190 C 722,190 722,220 830,220"
        fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3" stroke-linecap="round"/>
  <!-- Nodes at 70, 450, 830 -->
  <circle cx="70"  cy="220" r="5" fill="#000"/>
  <circle cx="450" cy="220" r="5" fill="#000"/>
  <circle cx="830" cy="220" r="5" fill="#000"/>
  <!-- Antinodes -->
  <circle cx="262" cy="190" r="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="638" cy="250" r="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="840" y="216" font-family="Georgia,serif" font-size="9" fill="#000">λ=L</text>
  <!-- ── 3rd Harmonic ── y=340 -->
  <text x="20" y="336" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">n=3</text>
  <line x1="70" y1="340" x2="830" y2="340" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4"/>
  <path d="M 70,340 C 138,340 138,315 196,315 C 254,315 254,340 313,340 C 372,340 372,365 430,365 C 488,365 488,340 547,340 C 606,340 606,315 664,315 C 722,315 722,340 830,340"
        fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Nodes at 70, 313, 557, 830 -->
  <circle cx="70"  cy="340" r="5" fill="#000"/>
  <circle cx="313" cy="340" r="5" fill="#000"/>
  <circle cx="547" cy="340" r="5" fill="#000"/>
  <circle cx="830" cy="340" r="5" fill="#000"/>
  <!-- Antinodes -->
  <circle cx="196" cy="315" r="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="430" cy="365" r="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="664" cy="315" r="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="840" y="336" font-family="Georgia,serif" font-size="9" fill="#000">λ=⅔L</text>
  <!-- Node / Antinode labels -->
  <text x="64" y="135" font-family="Georgia,serif" font-size="9" fill="#000">N</text>
  <text x="824" y="135" font-family="Georgia,serif" font-size="9" fill="#000">N</text>
  <!-- Formula box -->
  <rect x="60" y="400" width="420" height="80" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="70" y="418" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Standing Wave Formulae:</text>
  <text x="70" y="434" font-family="Georgia,serif" font-size="10" fill="#000">λₙ = 2L/n  |  fₙ = nv/2L  |  f₁ = v/2L (fundamental)</text>
  <text x="70" y="450" font-family="Georgia,serif" font-size="10" fill="#000">Nodes: zero displacement (always)  |  Antinodes: max displacement</text>
  <text x="70" y="466" font-family="Georgia,serif" font-size="10" fill="#000">n = harmonic number  |  v = wave speed on string</text>
  <!-- Legend -->
  <line x1="520" y1="418" x2="550" y2="418" stroke="#000" stroke-width="2.5"/>
  <text x="554" y="422" font-family="Georgia,serif" font-size="10" fill="#000">Wave at t=0</text>
  <line x1="520" y1="436" x2="550" y2="436" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="554" y="440" font-family="Georgia,serif" font-size="10" fill="#000">Wave at t=T/2</text>
  <circle cx="533" cy="454" r="4" fill="#000"/>
  <text x="540" y="458" font-family="Georgia,serif" font-size="10" fill="#000">Node (N)</text>
  <circle cx="533" cy="472" r="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="540" y="476" font-family="Georgia,serif" font-size="10" fill="#000">Antinode (AN)</text>
</svg>`;

  // ─── 18. DOPPLER EFFECT ──────────────────────────────────────────────────
  static dopplerEffectSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">
  <text x="270" y="26" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Doppler Effect — Moving Source (v_s = 0.5v_sound)</text>
  <!-- Source moving rightward, currently at x=500, y=300 -->
  <!-- Wavefront centres shift: source was at 500, 420, 340, 260 (earlier times) -->
  <!-- Source position -->
  <circle cx="500" cy="300" r="14" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="492" y="305" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">S</text>
  <!-- Source velocity arrow -->
  <line x1="514" y1="300" x2="600" y2="300" stroke="#000" stroke-width="3"/>
  <polygon points="596,295 610,300 596,305" fill="#000"/>
  <text x="548" y="292" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">v_s →</text>
  <!-- Wavefront 1: emitted from x=500, radius 80 (most recent) -->
  <circle cx="500" cy="300" r="80" fill="none" stroke="#000" stroke-width="2.5"/>
  <!-- Wavefront 2: emitted from x=420, radius 160 -->
  <circle cx="420" cy="300" r="160" fill="none" stroke="#000" stroke-width="2"/>
  <!-- Wavefront 3: emitted from x=340, radius 240 -->
  <circle cx="340" cy="300" r="240" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="6,3"/>
  <!-- Wavefront 4: emitted from x=260, radius 320 -->
  <circle cx="260" cy="300" r="320" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,4"/>
  <!-- Observer A (in front, rightward) -->
  <circle cx="760" cy="300" r="12" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="748" y="305" font-family="Georgia,serif" font-size="11" fill="#000">A</text>
  <text x="736" y="326" font-family="Georgia,serif" font-size="9" fill="#000">(higher f)</text>
  <!-- Observer B (behind, leftward) -->
  <circle cx="60" cy="300" r="12" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="50" y="305" font-family="Georgia,serif" font-size="11" fill="#000">B</text>
  <text x="42" y="326" font-family="Georgia,serif" font-size="9" fill="#000">(lower f)</text>
  <!-- Compressed wavelength annotation (front, right side) -->
  <!-- Between wavefront 1 (at x=580) and wavefront 2 (at x=580, r from 420 = 160 → x=580) -->
  <line x1="580" y1="288" x2="580" y2="260" stroke="#000" stroke-width="1.5"/>
  <line x1="660" y1="288" x2="660" y2="260" stroke="#000" stroke-width="1.5"/>
  <line x1="580" y1="270" x2="660" y2="270" stroke="#000" stroke-width="1.5"/>
  <polygon points="584,266 574,270 584,274" fill="#000"/>
  <polygon points="656,266 666,270 656,274" fill="#000"/>
  <text x="596" y="258" font-family="Georgia,serif" font-size="9" fill="#000">λ_front (short)</text>
  <!-- Stretched wavelength annotation (back, left side) -->
  <line x1="260" y1="288" x2="260" y2="256" stroke="#000" stroke-width="1.5"/>
  <line x1="340" y1="288" x2="340" y2="256" stroke="#000" stroke-width="1.5"/>
  <line x1="260" y1="268" x2="340" y2="268" stroke="#000" stroke-width="1.5"/>
  <polygon points="264,264 254,268 264,272" fill="#000"/>
  <polygon points="336,264 346,268 336,272" fill="#000"/>
  <text x="272" y="252" font-family="Georgia,serif" font-size="9" fill="#000">λ_back (long)</text>
  <!-- Past source positions (ghost) -->
  <circle cx="420" cy="300" r="6" fill="#888"/>
  <circle cx="340" cy="300" r="6" fill="#888"/>
  <circle cx="260" cy="300" r="6" fill="#888"/>
  <text x="278" y="316" font-family="Georgia,serif" font-size="8" fill="#888">past positions</text>
  <!-- Formulae box -->
  <rect x="250" y="440" width="420" height="130" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="260" y="458" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Doppler Formula (observer stationary):</text>
  <text x="260" y="474" font-family="Georgia,serif" font-size="11" fill="#000">f_obs = f_s × v_sound / (v_sound ∓ v_s)</text>
  <text x="260" y="490" font-family="Georgia,serif" font-size="9" fill="#555">(− when source approaches, + when receding)</text>
  <text x="260" y="506" font-family="Georgia,serif" font-size="10" fill="#000">Observer A (front): f_obs &gt; f_s  (higher pitch)</text>
  <text x="260" y="522" font-family="Georgia,serif" font-size="10" fill="#000">Observer B (back):  f_obs &lt; f_s  (lower pitch)</text>
  <text x="260" y="538" font-family="Georgia,serif" font-size="10" fill="#000">At v_s = v_sound: Mach 1 (sonic boom)</text>
  <text x="260" y="554" font-family="Georgia,serif" font-size="10" fill="#000">Applications: radar, astronomy redshift, medical ultrasound</text>
</svg>`;

  // ─── 19. SOUND WAVE PRESSURE GRAPH ──────────────────────────────────────
  static soundWavePressureSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">
  <text x="230" y="26" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Sound Wave — Pressure Variation vs Position</text>
  <text x="240" y="42" font-family="Georgia,serif" font-size="10" fill="#444">Compressions (C): pressure &gt; P₀  |  Rarefactions (R): pressure &lt; P₀</text>
  <!-- ── Particle displacement diagram (top) ── -->
  <text x="40" y="68" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Particle Displacement:</text>
  <line x1="60" y1="110" x2="840" y2="110" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4"/>
  <path d="M 60,110
    C 95,110 95,75 130,75 C 165,75 165,110 200,110
    C 235,110 235,145 270,145 C 305,145 305,110 340,110
    C 375,110 375,75 410,75 C 445,75 445,110 480,110
    C 515,110 515,145 550,145 C 585,145 585,110 620,110
    C 655,110 655,75 690,75 C 725,75 725,110 760,110
    C 795,110 795,145 820,145"
        fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <!-- λ annotation -->
  <line x1="130" y1="60" x2="410" y2="60" stroke="#000" stroke-width="1.5"/>
  <polygon points="134,56 124,60 134,64" fill="#000"/>
  <polygon points="406,56 416,60 406,64" fill="#000"/>
  <text x="256" y="55" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">λ</text>
  <text x="42" y="106" font-family="Georgia,serif" font-size="10" fill="#000">0</text>
  <!-- ── Pressure graph (middle) ── -->
  <text x="40" y="190" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Pressure Variation:</text>
  <!-- Axes -->
  <line x1="60" y1="290" x2="60" y2="200" stroke="#000" stroke-width="2"/>
  <polygon points="56,204 60,194 64,204" fill="#000"/>
  <text x="40" y="200" font-family="Georgia,serif" font-size="10" fill="#000">ΔP</text>
  <line x1="60" y1="260" x2="840" y2="260" stroke="#000" stroke-width="2"/>
  <polygon points="836,256 846,260 836,264" fill="#000"/>
  <text x="848" y="264" font-family="Georgia,serif" font-size="11" fill="#000">x</text>
  <text x="40" y="264" font-family="Georgia,serif" font-size="10" fill="#000">P₀</text>
  <!-- pressure cosine wave (phase-shifted: max where displacement = 0, i.e. at x=60,200,340...) -->
  <path d="M 60,260
    C 78,260 92,210 130,210 C 168,210 182,260 200,260
    C 218,260 232,310 270,310 C 308,310 322,260 340,260
    C 358,260 372,210 410,210 C 448,210 462,260 480,260
    C 498,260 512,310 550,310 C 588,310 602,260 620,260
    C 638,260 652,210 690,210 C 728,210 742,260 760,260
    C 778,260 792,310 830,310"
        fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Compression labels (peaks) -->
  <text x="118" y="206" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">C</text>
  <text x="396" y="206" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">C</text>
  <text x="674" y="206" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">C</text>
  <!-- Rarefaction labels (troughs) -->
  <text x="256" y="318" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">R</text>
  <text x="536" y="318" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">R</text>
  <!-- Amplitude annotation -->
  <line x1="44" y1="260" x2="44" y2="210" stroke="#000" stroke-width="2"/>
  <polygon points="40,214 44,204 48,214" fill="#000"/>
  <polygon points="40,256 44,266 48,256" fill="#000"/>
  <text x="20" y="240" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">ΔP₀</text>
  <!-- ── Particle density illustration (bottom) ── -->
  <text x="40" y="356" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Particle Density:</text>
  <!-- Dense / sparse dot patterns for compression and rarefaction -->
  <!-- C at x=130: dense cluster -->
  <circle cx="100" cy="400" r="3" fill="#000"/>
  <circle cx="108" cy="390" r="3" fill="#000"/>
  <circle cx="116" cy="400" r="3" fill="#000"/>
  <circle cx="124" cy="392" r="3" fill="#000"/>
  <circle cx="132" cy="402" r="3" fill="#000"/>
  <circle cx="140" cy="388" r="3" fill="#000"/>
  <circle cx="148" cy="398" r="3" fill="#000"/>
  <circle cx="156" cy="404" r="3" fill="#000"/>
  <text x="108" y="424" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">C (dense)</text>
  <!-- R at x=270: sparse -->
  <circle cx="240" cy="396" r="3" fill="#000"/>
  <circle cx="265" cy="402" r="3" fill="#000"/>
  <circle cx="292" cy="394" r="3" fill="#000"/>
  <circle cx="316" cy="400" r="3" fill="#000"/>
  <text x="248" y="424" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">R (sparse)</text>
  <!-- C at x=410 -->
  <circle cx="380" cy="400" r="3" fill="#000"/>
  <circle cx="388" cy="390" r="3" fill="#000"/>
  <circle cx="396" cy="400" r="3" fill="#000"/>
  <circle cx="404" cy="392" r="3" fill="#000"/>
  <circle cx="412" cy="402" r="3" fill="#000"/>
  <circle cx="420" cy="388" r="3" fill="#000"/>
  <circle cx="428" cy="398" r="3" fill="#000"/>
  <circle cx="436" cy="404" r="3" fill="#000"/>
  <text x="388" y="424" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">C</text>
  <!-- Formula box -->
  <rect x="520" y="360" width="340" height="120" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="530" y="378" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Sound Wave Equations:</text>
  <text x="530" y="394" font-family="Georgia,serif" font-size="10" fill="#000">ΔP(x,t) = ΔP₀ cos(kx − ωt)</text>
  <text x="530" y="410" font-family="Georgia,serif" font-size="10" fill="#000">v_sound = fλ  (in air ≈ 340 m/s)</text>
  <text x="530" y="426" font-family="Georgia,serif" font-size="10" fill="#000">Intensity: I = ΔP₀²/2ρv</text>
  <text x="530" y="442" font-family="Georgia,serif" font-size="10" fill="#000">Pressure antinode = displacement node</text>
  <text x="530" y="458" font-family="Georgia,serif" font-size="10" fill="#000">Pressure node = displacement antinode</text>
  <text x="530" y="474" font-family="Georgia,serif" font-size="10" fill="#000">(90° phase difference)</text>
</svg>`;

  // ─── 20. DIFFRACTION PATTERN ─────────────────────────────────────────────
  static diffractionPatternSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">
  <text x="240" y="26" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Double Slit Diffraction — Intensity Pattern</text>
  <text x="250" y="42" font-family="Georgia,serif" font-size="10" fill="#444">Young's experiment: d sinθ = nλ (bright fringes)</text>
  <!-- ── Barrier with double slit ── -->
  <!-- Barrier: x=160, slits at y=240 and y=360 (gap = 20px each, separation d=120px) -->
  <rect x="150" y="60"  width="20" height="170" fill="#555" stroke="#000" stroke-width="2"/>
  <rect x="150" y="250" width="20" height="100" fill="#555" stroke="#000" stroke-width="2"/>
  <rect x="150" y="370" width="20" height="170" fill="#555" stroke="#000" stroke-width="2"/>
  <!-- Slit labels -->
  <text x="120" y="244" font-family="Georgia,serif" font-size="10" fill="#000">slit 1</text>
  <text x="120" y="376" font-family="Georgia,serif" font-size="10" fill="#000">slit 2</text>
  <!-- Slit separation d -->
  <line x1="140" y1="250" x2="140" y2="370" stroke="#000" stroke-width="1.5"/>
  <polygon points="136,254 140,244 144,254" fill="#000"/>
  <polygon points="136,366 140,376 144,366" fill="#000"/>
  <text x="108" y="316" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">d</text>
  <!-- Incident plane wave arrows -->
  <line x1="60" y1="200" x2="148" y2="200" stroke="#000" stroke-width="2"/>
  <polygon points="144,196 154,200 144,204" fill="#000"/>
  <line x1="60" y1="300" x2="148" y2="300" stroke="#000" stroke-width="2"/>
  <polygon points="144,296 154,300 144,304" fill="#000"/>
  <line x1="60" y1="400" x2="148" y2="400" stroke="#000" stroke-width="2"/>
  <polygon points="144,396 154,400 144,404" fill="#000"/>
  <text x="40" y="286" font-family="Georgia,serif" font-size="10" fill="#000">plane</text>
  <text x="40" y="300" font-family="Georgia,serif" font-size="10" fill="#000">wave</text>
  <!-- Wavefronts from slit 1 (y=300 approx, upper slit centre) -->
  <circle cx="170" cy="270" r="40"  fill="none" stroke="#000" stroke-width="1.5"/>
  <circle cx="170" cy="270" r="80"  fill="none" stroke="#000" stroke-width="1.5"/>
  <circle cx="170" cy="270" r="120" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <circle cx="170" cy="270" r="160" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Wavefronts from slit 2 (y=350, lower slit centre) -->
  <circle cx="170" cy="350" r="40"  fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="6,2"/>
  <circle cx="170" cy="350" r="80"  fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="6,2"/>
  <circle cx="170" cy="350" r="120" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="3,4"/>
  <circle cx="170" cy="350" r="160" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="3,4"/>
  <!-- Screen at x=720 -->
  <rect x="720" y="60" width="14" height="480" fill="#ddd" stroke="#000" stroke-width="2"/>
  <text x="700" y="56" font-family="Georgia,serif" font-size="10" fill="#000">Screen</text>
  <!-- Intensity pattern (bright/dark fringes on screen) -->
  <!-- Central bright fringe: y=310, width=36 (most intense) -->
  <rect x="734" y="292" width="40" height="36" fill="#000" rx="2"/>
  <!-- 1st order bright (above and below) -->
  <rect x="734" y="240" width="40" height="24" fill="#888" rx="2"/>
  <rect x="734" y="364" width="40" height="24" fill="#888" rx="2"/>
  <!-- 2nd order bright -->
  <rect x="734" y="194" width="40" height="16" fill="#bbb" rx="2"/>
  <rect x="734" y="414" width="40" height="16" fill="#bbb" rx="2"/>
  <!-- 3rd order bright -->
  <rect x="734" y="154" width="40" height="10" fill="#ddd" rx="2"/>
  <rect x="734" y="458" width="40" height="10" fill="#ddd" rx="2"/>
  <!-- Fringe labels -->
  <text x="778" y="314" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000">n=0 (central)</text>
  <text x="778" y="256" font-family="Georgia,serif" font-size="9" fill="#000">n=1</text>
  <text x="778" y="380" font-family="Georgia,serif" font-size="9" fill="#000">n=−1</text>
  <text x="778" y="204" font-family="Georgia,serif" font-size="9" fill="#000">n=2</text>
  <text x="778" y="424" font-family="Georgia,serif" font-size="9" fill="#000">n=−2</text>
  <!-- Distance D annotation -->
  <line x1="170" y1="548" x2="720" y2="548" stroke="#000" stroke-width="1.5"/>
  <polygon points="174,544 164,548 174,552" fill="#000"/>
  <polygon points="716,544 726,548 716,552" fill="#000"/>
  <text x="414" y="544" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">D (slit-to-screen distance)</text>
  <!-- Fringe spacing y annotation -->
  <line x1="710" y1="304" x2="710" y2="252" stroke="#000" stroke-width="1.5"/>
  <polygon points="706,308 710,318 714,308" fill="#000"/>
  <polygon points="706,248 710,238 714,248" fill="#000"/>
  <text x="668" y="284" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">Δy</text>
  <!-- Formula box -->
  <rect x="270" y="470" width="420" height="100" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="280" y="488" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Double Slit Formulae:</text>
  <text x="280" y="504" font-family="Georgia,serif" font-size="10" fill="#000">Bright fringes: d sinθ = nλ  (n = 0, ±1, ±2,...)</text>
  <text x="280" y="520" font-family="Georgia,serif" font-size="10" fill="#000">Dark fringes:  d sinθ = (n+½)λ</text>
  <text x="280" y="536" font-family="Georgia,serif" font-size="10" fill="#000">Fringe spacing: Δy = λD/d  (small angle approx)</text>
  <text x="280" y="552" font-family="Georgia,serif" font-size="10" fill="#000">Single slit minima: a sinθ = mλ  (a = slit width)</text>
</svg>`;



// ─── PLANE MIRROR RAY DIAGRAM ─────────────────────────────────────────────
static planeMirrorRayDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="200" y="30" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Plane Mirror — Ray Diagram</text>
  <text x="215" y="48" font-family="Georgia,serif" font-size="11" fill="#000">Image is virtual, upright, same size, same distance behind mirror</text>

  <!-- Mirror (vertical line at x=420) -->
  <line x1="420" y1="80" x2="420" y2="500" stroke="#000" stroke-width="5" stroke-linecap="round"/>
  <!-- Hatch marks behind mirror -->
  <line x1="420" y1="100" x2="440" y2="80"  stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="130" x2="445" y2="107" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="160" x2="445" y2="137" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="190" x2="445" y2="167" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="220" x2="445" y2="197" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="250" x2="445" y2="227" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="280" x2="445" y2="257" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="310" x2="445" y2="287" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="340" x2="445" y2="317" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="370" x2="445" y2="347" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="400" x2="445" y2="377" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="430" x2="445" y2="407" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="460" x2="445" y2="437" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="490" x2="445" y2="467" stroke="#000" stroke-width="1.5"/>
  <text x="430" y="540" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Mirror</text>

  <!-- Normal line at point of incidence (dashed, horizontal) -->
  <line x1="320" y1="230" x2="520" y2="230" stroke="#000" stroke-width="1.5" stroke-dasharray="8,5"/>
  <text x="524" y="234" font-family="Georgia,serif" font-size="10" fill="#000">Normal</text>

  <!-- Object arrow (upright, at x=180, base y=400, tip y=180) -->
  <line x1="180" y1="400" x2="180" y2="185" stroke="#000" stroke-width="4"/>
  <polygon points="173,192 180,172 187,192" fill="#000"/>
  <text x="130" y="295" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Object</text>
  <text x="152" y="415" font-family="Georgia,serif" font-size="11" fill="#000">(O)</text>

  <!-- Image arrow (virtual, dashed, inverted-position mirror of object, at x=660) -->
  <line x1="660" y1="400" x2="660" y2="185" stroke="#000" stroke-width="3" stroke-dasharray="10,5"/>
  <polygon points="653,192 660,172 667,192" fill="#000"/>
  <text x="675" y="295" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Image</text>
  <text x="672" y="415" font-family="Georgia,serif" font-size="11" fill="#000">(I)</text>
  <text x="662" y="435" font-family="Georgia,serif" font-size="10" fill="#000">[virtual]</text>

  <!-- Object distance arrow -->
  <line x1="180" y1="460" x2="418" y2="460" stroke="#000" stroke-width="1.5"/>
  <polygon points="184,455 174,460 184,465" fill="#000"/>
  <polygon points="414,455 424,460 414,465" fill="#000"/>
  <text x="265" y="480" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">d</text>
  <text x="273" y="483" font-family="Georgia,serif" font-size="9" fill="#000">o</text>

  <!-- Image distance arrow -->
  <line x1="422" y1="460" x2="660" y2="460" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <polygon points="426,455 416,460 426,465" fill="#000"/>
  <polygon points="656,455 666,460 656,465" fill="#000"/>
  <text x="525" y="480" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">d</text>
  <text x="533" y="483" font-family="Georgia,serif" font-size="9" fill="#000">i</text>

  <!-- Ray 1: from object tip (180,185) horizontally to mirror (420,185), reflects back at equal angle toward eye -->
  <!-- Incident: horizontal to mirror -->
  <line x1="180" y1="185" x2="420" y2="185" stroke="#000" stroke-width="2"/>
  <polygon points="380,180 392,185 380,190" fill="#000"/>
  <!-- Reflected: mirror to eye/observer region (top right) -->
  <line x1="420" y1="185" x2="620" y2="100" stroke="#000" stroke-width="2"/>
  <polygon points="565,121 575,107 582,119" fill="#000"/>

  <!-- Ray 2: from object tip (180,185) obliquely to mirror at (420,310), reflects upward to observer -->
  <line x1="180" y1="185" x2="420" y2="310" stroke="#000" stroke-width="2"/>
  <polygon points="366,268 377,278 365,282" fill="#000"/>
  <line x1="420" y1="310" x2="620" y2="100" stroke="#000" stroke-width="2"/>
  <polygon points="555,137 567,122 573,135" fill="#000"/>

  <!-- Extended virtual rays (dashed) tracing back to image -->
  <line x1="420" y1="185" x2="660" y2="185" stroke="#000" stroke-width="1.5" stroke-dasharray="8,5"/>
  <line x1="420" y1="310" x2="560" y2="185" stroke="#000" stroke-width="1.5" stroke-dasharray="8,5"/>

  <!-- Angle of incidence / reflection labels -->
  <text x="388" y="215" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">θ</text>
  <text x="396" y="215" font-family="Georgia,serif" font-size="8" fill="#000">i</text>
  <text x="428" y="215" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">θ</text>
  <text x="436" y="215" font-family="Georgia,serif" font-size="8" fill="#000">r</text>
  <text x="370" y="222" font-family="Georgia,serif" font-size="9" fill="#000">= </text>

  <!-- Law of reflection box -->
  <rect x="50" y="510" width="320" height="58" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="62" y="530" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Law of Reflection:  θ</text>
  <text x="224" y="533" font-family="Georgia,serif" font-size="9" fill="#000">i</text>
  <text x="230" y="530" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000"> = θ</text>
  <text x="262" y="533" font-family="Georgia,serif" font-size="9" fill="#000">r</text>
  <text x="62" y="550" font-family="Georgia,serif" font-size="11" fill="#000">d</text>
  <text x="70" y="553" font-family="Georgia,serif" font-size="8" fill="#000">o</text>
  <text x="74" y="550" font-family="Georgia,serif" font-size="11" fill="#000"> = d</text>
  <text x="99" y="553" font-family="Georgia,serif" font-size="8" fill="#000">i</text>
  <text x="103" y="550" font-family="Georgia,serif" font-size="11" fill="#000">  (object dist. = image dist.)</text>
  <text x="62" y="566" font-family="Georgia,serif" font-size="11" fill="#000">m = +1  (same size, upright, virtual)</text>
</svg>`;

// ─── CONVEX MIRROR RAY DIAGRAM ────────────────────────────────────────────
static convexMirrorRayDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="230" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Convex Mirror — Ray Diagram</text>
  <text x="215" y="46" font-family="Georgia,serif" font-size="11" fill="#000">Image is always virtual, upright, and diminished (behind mirror)</text>

  <!-- Principal axis -->
  <line x1="30" y1="300" x2="860" y2="300" stroke="#000" stroke-width="2"/>

  <!-- Convex mirror arc (opens rightward, vertex at x=550, y=300) -->
  <path d="M 550,130 Q 510,300 550,470"
        fill="none" stroke="#000" stroke-width="6" stroke-linecap="round"/>
  <!-- Mirror backing hatching -->
  <line x1="554" y1="138" x2="570" y2="150" stroke="#000" stroke-width="1.5"/>
  <line x1="554" y1="168" x2="572" y2="180" stroke="#000" stroke-width="1.5"/>
  <line x1="554" y1="198" x2="572" y2="210" stroke="#000" stroke-width="1.5"/>
  <line x1="554" y1="228" x2="572" y2="240" stroke="#000" stroke-width="1.5"/>
  <line x1="554" y1="258" x2="572" y2="270" stroke="#000" stroke-width="1.5"/>
  <line x1="554" y1="288" x2="572" y2="300" stroke="#000" stroke-width="1.5"/>
  <line x1="554" y1="318" x2="572" y2="330" stroke="#000" stroke-width="1.5"/>
  <line x1="554" y1="348" x2="572" y2="360" stroke="#000" stroke-width="1.5"/>
  <line x1="554" y1="378" x2="572" y2="390" stroke="#000" stroke-width="1.5"/>
  <line x1="554" y1="408" x2="572" y2="420" stroke="#000" stroke-width="1.5"/>
  <line x1="554" y1="438" x2="572" y2="450" stroke="#000" stroke-width="1.5"/>
  <line x1="554" y1="460" x2="568" y2="474" stroke="#000" stroke-width="1.5"/>
  <text x="580" y="310" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Mirror</text>

  <!-- F (virtual focal point, behind mirror) at x=660, tick -->
  <line x1="660" y1="293" x2="660" y2="307" stroke="#000" stroke-width="2"/>
  <text x="653" y="322" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">F</text>
  <text x="648" y="336" font-family="Georgia,serif" font-size="10" fill="#000">(virtual)</text>

  <!-- C (centre of curvature, behind mirror) at x=770 -->
  <line x1="770" y1="293" x2="770" y2="307" stroke="#000" stroke-width="2"/>
  <text x="762" y="322" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">C</text>

  <!-- Object arrow at x=200, base y=300, tip y=160 -->
  <line x1="200" y1="300" x2="200" y2="165" stroke="#000" stroke-width="4"/>
  <polygon points="193,172 200,152 207,172" fill="#000"/>
  <text x="140" y="235" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Object</text>

  <!-- Image arrow (virtual, smaller, upright, at x=600, base y=300, tip y=248) -->
  <line x1="600" y1="300" x2="600" y2="253" stroke="#000" stroke-width="3" stroke-dasharray="8,4"/>
  <polygon points="594,260 600,243 606,260" fill="#000"/>
  <text x="605" y="268" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Image</text>
  <text x="607" y="282" font-family="Georgia,serif" font-size="10" fill="#000">(virtual)</text>

  <!-- Ray 1: parallel to axis from object tip → hits mirror → diverges as if from F -->
  <!-- Incident: (200,160) to (550,160) -->
  <line x1="200" y1="160" x2="550" y2="160" stroke="#000" stroke-width="2"/>
  <polygon points="480,155 492,160 480,165" fill="#000"/>
  <!-- Reflected: diverges from (550,160) away from F(660,300); direction: from F to mirror hit, reversed -->
  <!-- vector mirror→F: (110,140); reversed: (-110,-140) normalised; extended left -->
  <!-- Line from F(660,300) through mirror hit(550,160): param t, at x=200: t=(200-660)/(550-660)=4.18 → y=300+(160-300)*4.18=300-585=-285 clip -->
  <!-- Extend reflected ray to x=100: slope from (550,160) dir away from F: dx=550-660=-110,dy=160-300=-140 → ratio 110:140 -->
  <!-- At x=100: Δx=-450, Δy=-450*(140/110)=-572 → y=160-572 clip; use x=100,y=clip to x=200 extended -->
  <line x1="550" y1="160" x2="200" y2="580" stroke="#000" stroke-width="2"/>
  <polygon points="370,370 358,382 364,390" fill="#000"/>
  <!-- Virtual extension (dashed) from mirror hit to F -->
  <line x1="550" y1="160" x2="660" y2="300" stroke="#000" stroke-width="1.5" stroke-dasharray="8,5"/>

  <!-- Ray 2: aimed at centre C from object tip → hits mirror → reflects back along same line -->
  <!-- From (200,160) toward C(770,300): slope=(300-160)/(770-200)=140/570 -->
  <!-- At x=550: y=160+(550-200)*140/570=160+85.96=246 -->
  <line x1="200" y1="160" x2="550" y2="246" stroke="#000" stroke-width="2"/>
  <polygon points="430,213 444,218 434,226" fill="#000"/>
  <!-- Reflects back: normal at this point passes through C, so reflected ray aims toward C extended behind -->
  <line x1="550" y1="246" x2="200" y2="460" stroke="#000" stroke-width="2"/>
  <polygon points="330,345 318,355 323,365" fill="#000"/>
  <!-- Virtual extension toward C -->
  <line x1="550" y1="246" x2="770" y2="300" stroke="#000" stroke-width="1.5" stroke-dasharray="8,5"/>

  <!-- Convergence of virtual rays behind mirror at image (600,253) -->
  <circle cx="600" cy="253" r="5" fill="#000"/>

  <!-- Object distance label -->
  <line x1="200" y1="510" x2="548" y2="510" stroke="#000" stroke-width="1.5"/>
  <polygon points="204,505 194,510 204,515" fill="#000"/>
  <polygon points="544,505 554,510 544,515" fill="#000"/>
  <text x="350" y="530" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">u (object distance)</text>

  <!-- Info box -->
  <rect x="30" y="540" width="480" height="48" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="42" y="558" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Mirror formula:  1/f = 1/v + 1/u   (f and v are negative for convex)</text>
  <text x="42" y="576" font-family="Georgia,serif" font-size="11" fill="#000">Image always virtual, upright, diminished — |m| &lt; 1</text>
</svg>`;

// ─── CONVEX LENS RAY DIAGRAM ──────────────────────────────────────────────
static convexLensRayDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <!-- Title -->
  <text x="300" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Convex Lens — Ray Diagram (Object beyond F)</text>
  <text x="290" y="46" font-family="Georgia,serif" font-size="11" fill="#000">Image is real, inverted — position depends on object distance</text>

  <!-- Principal axis -->
  <line x1="30" y1="300" x2="960" y2="300" stroke="#000" stroke-width="2"/>

  <!-- Convex lens (biconvex shape) at x=500 -->
  <path d="M 500,120 C 540,200 540,400 500,480 C 460,400 460,200 500,120 Z"
        fill="none" stroke="#000" stroke-width="3"/>
  <!-- Lens arrows (indicating converging) -->
  <polygon points="494,122 500,104 506,122" fill="#000"/>
  <polygon points="494,478 500,496 506,478" fill="#000"/>
  <text x="515" y="310" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Lens</text>

  <!-- F1 (left focal point) at x=360, F2 (right) at x=640 -->
  <line x1="360" y1="293" x2="360" y2="307" stroke="#000" stroke-width="2"/>
  <text x="350" y="322" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">F</text>
  <text x="364" y="325" font-family="Georgia,serif" font-size="9" fill="#000">1</text>

  <line x1="640" y1="293" x2="640" y2="307" stroke="#000" stroke-width="2"/>
  <text x="630" y="322" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">F</text>
  <text x="644" y="325" font-family="Georgia,serif" font-size="9" fill="#000">2</text>

  <!-- 2F points -->
  <line x1="220" y1="295" x2="220" y2="305" stroke="#000" stroke-width="1.5"/>
  <text x="206" y="320" font-family="Georgia,serif" font-size="11" fill="#000">2F</text>
  <text x="218" y="323" font-family="Georgia,serif" font-size="8" fill="#000">1</text>
  <line x1="780" y1="295" x2="780" y2="305" stroke="#000" stroke-width="1.5"/>
  <text x="766" y="320" font-family="Georgia,serif" font-size="11" fill="#000">2F</text>
  <text x="778" y="323" font-family="Georgia,serif" font-size="8" fill="#000">2</text>

  <!-- Object arrow at x=180, tip y=140 -->
  <line x1="180" y1="300" x2="180" y2="145" stroke="#000" stroke-width="4"/>
  <polygon points="173,152 180,132 187,152" fill="#000"/>
  <text x="115" y="225" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Object</text>

  <!-- Image: real, inverted, at x=720, tip y=390 (below axis, diminished) -->
  <line x1="720" y1="300" x2="720" y2="368" stroke="#000" stroke-width="4"/>
  <polygon points="713,361 720,378 727,361" fill="#000"/>
  <text x="730" y="340" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Image</text>
  <text x="735" y="356" font-family="Georgia,serif" font-size="10" fill="#000">(real,</text>
  <text x="735" y="370" font-family="Georgia,serif" font-size="10" fill="#000">inverted)</text>

  <!-- Convergence dot -->
  <circle cx="720" cy="368" r="5" fill="#000"/>

  <!-- Ray 1: parallel to axis → refracts through F2 -->
  <line x1="180" y1="145" x2="500" y2="145" stroke="#000" stroke-width="2"/>
  <polygon points="420,140 432,145 420,150" fill="#000"/>
  <line x1="500" y1="145" x2="720" y2="368" stroke="#000" stroke-width="2"/>
  <polygon points="635,266 647,278 638,285" fill="#000"/>
  <!-- Extended beyond image -->
  <line x1="720" y1="368" x2="860" y2="520" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- Ray 2: through optical centre → straight through -->
  <line x1="180" y1="145" x2="720" y2="368" stroke="#000" stroke-width="2"/>
  <polygon points="430,239 442,247 434,255" fill="#000"/>
  <line x1="720" y1="368" x2="860" y2="452" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- Ray 3: through F1 → exits parallel to axis -->
  <!-- From (180,145) toward F1(360,300): slope=(300-145)/(360-180)=155/180 -->
  <!-- At lens x=500: y=145+(500-180)*155/180=145+275=420 -->
  <line x1="180" y1="145" x2="500" y2="420" stroke="#000" stroke-width="2"/>
  <polygon points="360,264 372,272 363,280" fill="#000"/>
  <line x1="500" y1="420" x2="860" y2="420" stroke="#000" stroke-width="2"/>
  <polygon points="700,415 712,420 700,425" fill="#000"/>

  <!-- Ray labels -->
  <text x="35" y="138" font-family="Georgia,serif" font-size="10" fill="#000">Ray 1: ∥ axis → F₂</text>
  <text x="35" y="156" font-family="Georgia,serif" font-size="10" fill="#000">Ray 2: through centre</text>
  <text x="35" y="174" font-family="Georgia,serif" font-size="10" fill="#000">Ray 3: through F₁ → ∥ axis</text>

  <!-- Lens formula box -->
  <rect x="30" y="530" width="400" height="54" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="42" y="550" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Lens formula:  1/f = 1/v − 1/u</text>
  <text x="42" y="568" font-family="Georgia,serif" font-size="11" fill="#000">Magnification:  m = v/u   (−ve ⟹ inverted real image)</text>
</svg>`;

// ─── CONCAVE LENS RAY DIAGRAM ─────────────────────────────────────────────
static concaveLensRayDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <!-- Title -->
  <text x="300" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Concave Lens — Ray Diagram</text>
  <text x="270" y="46" font-family="Georgia,serif" font-size="11" fill="#000">Image is always virtual, upright, and diminished (same side as object)</text>

  <!-- Principal axis -->
  <line x1="30" y1="300" x2="960" y2="300" stroke="#000" stroke-width="2"/>

  <!-- Concave lens (biconcave shape) at x=520 -->
  <path d="M 520,120 C 490,200 490,400 520,480 C 550,400 550,200 520,120 Z"
        fill="none" stroke="#000" stroke-width="3"/>
  <polygon points="514,120 520,103 526,120" fill="#000"/>
  <polygon points="514,480 520,497 526,480" fill="#000"/>
  <text x="535" y="310" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Lens</text>

  <!-- F1 (virtual, left) at x=380, F2 (virtual, right) at x=660 -->
  <line x1="380" y1="293" x2="380" y2="307" stroke="#000" stroke-width="2"/>
  <text x="368" y="322" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">F</text>
  <text x="382" y="325" font-family="Georgia,serif" font-size="9" fill="#000">1</text>
  <text x="368" y="338" font-family="Georgia,serif" font-size="10" fill="#000">(virtual)</text>

  <line x1="660" y1="293" x2="660" y2="307" stroke="#000" stroke-width="2"/>
  <text x="648" y="322" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">F</text>
  <text x="662" y="325" font-family="Georgia,serif" font-size="9" fill="#000">2</text>
  <text x="648" y="338" font-family="Georgia,serif" font-size="10" fill="#000">(virtual)</text>

  <!-- Object arrow at x=180, tip y=140 -->
  <line x1="180" y1="300" x2="180" y2="145" stroke="#000" stroke-width="4"/>
  <polygon points="173,152 180,132 187,152" fill="#000"/>
  <text x="110" y="225" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Object</text>

  <!-- Image: virtual, upright, smaller, at x=340, tip y=210 -->
  <line x1="340" y1="300" x2="340" y2="215" stroke="#000" stroke-width="3" stroke-dasharray="9,4"/>
  <polygon points="333,222 340,206 347,222" fill="#000"/>
  <text x="260" y="225" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Image</text>
  <text x="262" y="240" font-family="Georgia,serif" font-size="10" fill="#000">(virtual,</text>
  <text x="262" y="254" font-family="Georgia,serif" font-size="10" fill="#000">upright)</text>
  <circle cx="340" cy="215" r="5" fill="#000"/>

  <!-- Ray 1: parallel to axis → diverges as if from F1(380,300) -->
  <line x1="180" y1="145" x2="520" y2="145" stroke="#000" stroke-width="2"/>
  <polygon points="420,140 432,145 420,150" fill="#000"/>
  <!-- Refracted ray diverges: from lens at (520,145), direction away from F2(660,300) -->
  <!-- Vector from F2 to lens hit: 520-660=-140, 145-300=-155 -->
  <!-- Extended to x=800: Δx=280, Δy=280*155/140=310 → y=145+310=455 -->
  <line x1="520" y1="145" x2="800" y2="455" stroke="#000" stroke-width="2"/>
  <polygon points="650,287 662,302 652,308" fill="#000"/>
  <!-- Virtual back-extension to F1 -->
  <line x1="520" y1="145" x2="380" y2="300" stroke="#000" stroke-width="1.5" stroke-dasharray="8,5"/>

  <!-- Ray 2: through optical centre → straight through (no deviation) -->
  <line x1="180" y1="145" x2="800" y2="382" stroke="#000" stroke-width="2"/>
  <polygon points="490,251 502,257 494,265" fill="#000"/>

  <!-- Ray 3: aimed at F2(660,300) → exits parallel to axis -->
  <!-- From (180,145) toward F2(660,300): slope=(300-145)/(660-180)=155/480 -->
  <!-- At lens x=520: y=145+(520-180)*155/480=145+109.8=255 -->
  <line x1="180" y1="145" x2="520" y2="255" stroke="#000" stroke-width="2"/>
  <polygon points="380,199 392,204 384,212" fill="#000"/>
  <line x1="520" y1="255" x2="800" y2="255" stroke="#000" stroke-width="2"/>
  <polygon points="680,250 692,255 680,260" fill="#000"/>
  <!-- Virtual extension back to F2 -->
  <line x1="520" y1="255" x2="660" y2="300" stroke="#000" stroke-width="1.5" stroke-dasharray="8,5"/>

  <!-- Ray labels -->
  <text x="35" y="138" font-family="Georgia,serif" font-size="10" fill="#000">Ray 1: ∥ axis → diverges from F₁</text>
  <text x="35" y="156" font-family="Georgia,serif" font-size="10" fill="#000">Ray 2: through centre (undeviated)</text>
  <text x="35" y="174" font-family="Georgia,serif" font-size="10" fill="#000">Ray 3: aimed at F₂ → exits ∥ axis</text>

  <!-- Formula box -->
  <rect x="30" y="530" width="420" height="54" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="42" y="550" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Lens formula:  1/f = 1/v − 1/u   (f negative)</text>
  <text x="42" y="568" font-family="Georgia,serif" font-size="11" fill="#000">Image always virtual, upright, |m| &lt; 1  (diminished)</text>
</svg>`;

// ─── SNELL'S LAW REFRACTION ───────────────────────────────────────────────
static snellsLawRefractionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="200" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Snell's Law — Refraction at an Interface</text>
  <text x="225" y="46" font-family="Georgia,serif" font-size="11" fill="#000">n₁ sin θ₁ = n₂ sin θ₂  (n₁ = 1.0 air, n₂ = 1.5 glass)</text>

  <!-- Medium labels -->
  <text x="40" y="200" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Medium 1</text>
  <text x="40" y="218" font-family="Georgia,serif" font-size="12" fill="#000">(Air, n₁ = 1.0)</text>

  <!-- Interface line (y=310) -->
  <line x1="30" y1="310" x2="770" y2="310" stroke="#000" stroke-width="3"/>
  <!-- Hatching below interface -->
  <line x1="30"  y1="310" x2="30"  y2="560" stroke="#000" stroke-width="0.5"/>
  <rect x="30" y="310" width="740" height="250" fill="none" stroke="none"/>
  <!-- Fill lower medium with dots/lines pattern -->
  <line x1="50"  y1="320" x2="80"  y2="320" stroke="#000" stroke-width="0.8"/>
  <line x1="110" y1="320" x2="140" y2="320" stroke="#000" stroke-width="0.8"/>
  <line x1="170" y1="320" x2="200" y2="320" stroke="#000" stroke-width="0.8"/>
  <line x1="230" y1="320" x2="260" y2="320" stroke="#000" stroke-width="0.8"/>
  <line x1="290" y1="320" x2="320" y2="320" stroke="#000" stroke-width="0.8"/>
  <line x1="350" y1="320" x2="380" y2="320" stroke="#000" stroke-width="0.8"/>
  <line x1="410" y1="320" x2="440" y2="320" stroke="#000" stroke-width="0.8"/>
  <line x1="470" y1="320" x2="500" y2="320" stroke="#000" stroke-width="0.8"/>
  <line x1="530" y1="320" x2="560" y2="320" stroke="#000" stroke-width="0.8"/>
  <line x1="590" y1="320" x2="620" y2="320" stroke="#000" stroke-width="0.8"/>
  <line x1="650" y1="320" x2="680" y2="320" stroke="#000" stroke-width="0.8"/>
  <line x1="710" y1="320" x2="740" y2="320" stroke="#000" stroke-width="0.8"/>

  <text x="40" y="380" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Medium 2</text>
  <text x="40" y="398" font-family="Georgia,serif" font-size="12" fill="#000">(Glass, n₂ = 1.5)</text>

  <!-- Normal line (vertical dashed, x=400) -->
  <line x1="400" y1="80" x2="400" y2="540" stroke="#000" stroke-width="1.5" stroke-dasharray="10,6"/>
  <text x="408" y="95" font-family="Georgia,serif" font-size="11" fill="#000">Normal</text>

  <!-- Incident ray: from (200,100) to interface (400,310), angle ~30° from normal -->
  <line x1="200" y1="100" x2="400" y2="310" stroke="#000" stroke-width="3"/>
  <polygon points="362,272 374,284 362,290" fill="#000"/>
  <text x="195" y="90" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Incident Ray</text>

  <!-- Reflected ray: from (400,310) to (600,100) — equal angle -->
  <line x1="400" y1="310" x2="600" y2="100" stroke="#000" stroke-width="2" stroke-dasharray="10,5"/>
  <polygon points="562,138 574,126 576,140" fill="#000"/>
  <text x="610" y="90" font-family="Georgia,serif" font-size="12" fill="#000">Reflected</text>

  <!-- Refracted ray: bends toward normal in denser medium, angle ~19.5° -->
  <!-- Snell: sin(30°)=0.5; sinθ₂=0.5/1.5=0.333 → θ₂≈19.5° -->
  <!-- From (400,310): dx=sin(19.5°)*length, dy=cos(19.5°)*length → (400+80, 310+216)=(480,526) -->
  <line x1="400" y1="310" x2="480" y2="526" stroke="#000" stroke-width="3"/>
  <polygon points="464,506 476,520 470,528" fill="#000"/>
  <text x="488" y="540" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Refracted Ray</text>

  <!-- Angle of incidence arc and label -->
  <path d="M 400,200 A 110,110 0 0 0 345,237" fill="none" stroke="#000" stroke-width="2"/>
  <text x="310" y="220" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#000">θ₁</text>
  <text x="298" y="238" font-family="Georgia,serif" font-size="11" fill="#000">(30°)</text>

  <!-- Angle of refraction arc and label -->
  <path d="M 400,400 A 90,90 0 0 1 430,362" fill="none" stroke="#000" stroke-width="2"/>
  <text x="435" y="355" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#000">θ₂</text>
  <text x="435" y="373" font-family="Georgia,serif" font-size="11" fill="#000">(≈19.5°)</text>

  <!-- Wavefronts in medium 1 (tilted lines perpendicular to ray) -->
  <line x1="155" y1="155" x2="245" y2="105" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="215" y1="215" x2="305" y2="165" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="275" y1="275" x2="365" y2="225" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>

  <!-- Wavefronts in medium 2 (compressed — closer together, different angle) -->
  <line x1="410" y1="340" x2="470" y2="320" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="425" y1="380" x2="485" y2="360" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="440" y1="420" x2="500" y2="400" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>

  <!-- Wavelength compression label -->
  <text x="500" y="350" font-family="Georgia,serif" font-size="10" fill="#000">λ₂ &lt; λ₁</text>
  <text x="500" y="364" font-family="Georgia,serif" font-size="10" fill="#000">(compressed</text>
  <text x="500" y="378" font-family="Georgia,serif" font-size="10" fill="#000">wavefronts)</text>

  <!-- Formula box -->
  <rect x="500" y="430" width="260" height="68" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="514" y="450" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">n₁ sin θ₁ = n₂ sin θ₂</text>
  <text x="514" y="470" font-family="Georgia,serif" font-size="11" fill="#000">1.0 × sin 30° = 1.5 × sin θ₂</text>
  <text x="514" y="488" font-family="Georgia,serif" font-size="11" fill="#000">θ₂ ≈ 19.5°</text>
</svg>`;

// ─── TOTAL INTERNAL REFLECTION ────────────────────────────────────────────
static totalInternalReflectionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="180" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Total Internal Reflection (TIR)</text>
  <text x="165" y="46" font-family="Georgia,serif" font-size="11" fill="#000">n₁ = 1.5 (glass) → n₂ = 1.0 (air)  |  Critical angle θ_c = sin⁻¹(n₂/n₁) ≈ 41.8°</text>

  <!-- Interface line (y=320) -->
  <line x1="30" y1="320" x2="770" y2="320" stroke="#000" stroke-width="3"/>

  <!-- Lower medium (glass) fill hint — hatching -->
  <line x1="30"  y1="330" x2="770" y2="330" stroke="#000" stroke-width="0.6"/>
  <line x1="30"  y1="345" x2="770" y2="345" stroke="#000" stroke-width="0.6"/>
  <line x1="30"  y1="360" x2="770" y2="360" stroke="#000" stroke-width="0.6"/>

  <text x="40" y="410" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Glass (n₁ = 1.5)</text>
  <text x="40" y="90" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Air (n₂ = 1.0)</text>

  <!-- Normal 1 at x=170 -->
  <line x1="170" y1="160" x2="170" y2="480" stroke="#000" stroke-width="1.5" stroke-dasharray="8,5"/>

  <!-- Case 1: θ < θ_c — partial refraction (θ=25°) -->
  <!-- Incident from below at x=170: from (170,500) to (170,320), angle 25° from normal -->
  <!-- dx=sin(25°)*180=76, source=(170-76,500)=(94,500) -->
  <line x1="94" y1="500" x2="170" y2="320" stroke="#000" stroke-width="2.5"/>
  <polygon points="148,342 162,328 168,340" fill="#000"/>
  <!-- Refracted ray above: sin(θ_r)=1.5*sin(25°)/1.0=0.634 → θ_r≈39.3° -->
  <!-- dx=sin(39.3°)*130=82, (170+82,320-130)=(252,190) -->
  <line x1="170" y1="320" x2="252" y2="190" stroke="#000" stroke-width="2.5"/>
  <polygon points="222,230 236,216 240,228" fill="#000"/>
  <!-- Reflected ray -->
  <line x1="170" y1="320" x2="94" y2="140" stroke="#000" stroke-width="1.5" stroke-dasharray="7,4"/>
  <text x="50" y="510" font-family="Georgia,serif" font-size="10" fill="#000">θ=25° (below θc)</text>
  <text x="258" y="185" font-family="Georgia,serif" font-size="10" fill="#000">Refracted</text>

  <!-- Angle label -->
  <text x="178" y="350" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">25°</text>

  <!-- Normal 2 at x=400 -->
  <line x1="400" y1="160" x2="400" y2="480" stroke="#000" stroke-width="1.5" stroke-dasharray="8,5"/>

  <!-- Case 2: θ = θ_c — refracted ray grazes (90°) -->
  <!-- θc ≈ 41.8°; dx=sin(41.8°)*180=120 -->
  <line x1="280" y1="500" x2="400" y2="320" stroke="#000" stroke-width="2.5"/>
  <polygon points="366,352 382,334 386,348" fill="#000"/>
  <!-- Refracted ray grazes along interface -->
  <line x1="400" y1="320" x2="760" y2="320" stroke="#000" stroke-width="2.5"/>
  <polygon points="720,314 736,320 720,326" fill="#000"/>
  <text x="600" y="310" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">grazing (90°)</text>
  <!-- Reflected ray -->
  <line x1="400" y1="320" x2="280" y2="140" stroke="#000" stroke-width="1.5" stroke-dasharray="7,4"/>
  <text x="250" y="510" font-family="Georgia,serif" font-size="10" fill="#000">θ = θc ≈ 41.8°</text>
  <text x="406" y="355" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">θc</text>

  <!-- Normal 3 at x=620 -->
  <line x1="620" y1="160" x2="620" y2="480" stroke="#000" stroke-width="1.5" stroke-dasharray="8,5"/>

  <!-- Case 3: θ > θ_c — total internal reflection (θ=55°) -->
  <!-- dx=sin(55°)*180=147; source=(620-147,500)=(473,500) -->
  <line x1="473" y1="500" x2="620" y2="320" stroke="#000" stroke-width="2.5"/>
  <polygon points="587,354 603,334 608,348" fill="#000"/>
  <!-- Totally reflected ray: symmetric about normal -->
  <line x1="620" y1="320" x2="767" y2="500" stroke="#000" stroke-width="2.5"/>
  <polygon points="748,480 762,496 752,504" fill="#000"/>
  <!-- No transmitted ray -->
  <text x="478" y="510" font-family="Georgia,serif" font-size="10" fill="#000">θ=55° (above θc) — TIR!</text>
  <text x="626" y="360" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">55°</text>

  <!-- TIR label with X showing no refraction -->
  <text x="640" y="230" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000">✕</text>
  <text x="660" y="220" font-family="Georgia,serif" font-size="10" fill="#000">No transmitted</text>
  <text x="660" y="234" font-family="Georgia,serif" font-size="10" fill="#000">ray (TIR)</text>

  <!-- Critical angle formula box -->
  <rect x="30" y="530" width="380" height="54" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="42" y="550" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Critical angle:  sin θc = n₂ / n₁</text>
  <text x="42" y="570" font-family="Georgia,serif" font-size="11" fill="#000">For glass→air: θc = sin⁻¹(1/1.5) ≈ 41.8°</text>

  <!-- Application box -->
  <rect x="430" y="530" width="340" height="54" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="442" y="550" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Applications:</text>
  <text x="442" y="568" font-family="Georgia,serif" font-size="10" fill="#000">Optical fibres, diamonds, periscopes, binoculars</text>
</svg>`;

// ─── PRISM DISPERSION ─────────────────────────────────────────────────────
static prismDispersionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="250" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Dispersion Through a Prism</text>
  <text x="210" y="46" font-family="Georgia,serif" font-size="11" fill="#000">White light separates into spectrum: violet refracted most, red least (n_violet &gt; n_red)</text>

  <!-- Prism triangle: vertices at (250,100), (100,460), (580,460) -->
  <polygon points="250,100 80,470 580,470"
           fill="none" stroke="#000" stroke-width="4"/>
  <!-- Prism hatching (inside) -->
  <line x1="180" y1="380" x2="280" y2="200" stroke="#000" stroke-width="0.8"/>
  <line x1="220" y1="400" x2="350" y2="200" stroke="#000" stroke-width="0.8"/>
  <line x1="270" y1="415" x2="420" y2="200" stroke="#000" stroke-width="0.8"/>
  <line x1="330" y1="430" x2="490" y2="220" stroke="#000" stroke-width="0.8"/>
  <line x1="390" y1="445" x2="540" y2="270" stroke="#000" stroke-width="0.8"/>
  <line x1="450" y1="458" x2="560" y2="360" stroke="#000" stroke-width="0.8"/>
  <text x="280" y="360" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">PRISM</text>

  <!-- Incident white light ray (thick, from left) -->
  <!-- Hits left face at approx (190,310) -->
  <line x1="30" y1="270" x2="188" y2="312" stroke="#000" stroke-width="5"/>
  <polygon points="160,298 178,308 162,318" fill="#000"/>
  <text x="20" y="258" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">White</text>
  <text x="20" y="272" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Light</text>

  <!-- Normal at left face entry point (dashed, perpendicular to left face) -->
  <!-- Left face from (250,100) to (80,470): direction (−170,370), normal direction (370,170) normalised -->
  <line x1="90" y1="360" x2="290" y2="268" stroke="#000" stroke-width="1.2" stroke-dasharray="6,4"/>

  <!-- Refracted rays inside prism converge then exit right face at (430,380) -->
  <!-- Seven spectral rays (B&W: drawn as lines with labels, varying dash/thickness) -->
  <!-- All from (190,312) to right face exit, then diverge -->
  <!-- Red exits highest, violet lowest -->

  <!-- Inside prism: single ray bundle (all close together) -->
  <line x1="190" y1="312" x2="428" y2="372" stroke="#000" stroke-width="3"/>
  <polygon points="390,358 408,368 392,378" fill="#000"/>

  <!-- Normal at right face exit -->
  <!-- Right face from (250,100) to (580,470): direction (330,370), normal (370,−330) → angle -->
  <line x1="360" y1="440" x2="500" y2="300" stroke="#000" stroke-width="1.2" stroke-dasharray="6,4"/>

  <!-- Exiting dispersed rays (fan out) — labelled by colour name, different line styles -->
  <!-- Red (least deviation, top) -->
  <line x1="428" y1="372" x2="780" y2="290" stroke="#000" stroke-width="2.5"/>
  <polygon points="730,294 748,288 742,300" fill="#000"/>
  <text x="785" y="294" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Red</text>

  <!-- Orange -->
  <line x1="428" y1="372" x2="780" y2="320" stroke="#000" stroke-width="2"/>
  <text x="785" y="324" font-family="Georgia,serif" font-size="11" fill="#000">Orange</text>

  <!-- Yellow -->
  <line x1="428" y1="372" x2="780" y2="350" stroke="#000" stroke-width="2"/>
  <text x="785" y="354" font-family="Georgia,serif" font-size="11" fill="#000">Yellow</text>

  <!-- Green -->
  <line x1="428" y1="372" x2="780" y2="382" stroke="#000" stroke-width="2"/>
  <text x="785" y="386" font-family="Georgia,serif" font-size="11" fill="#000">Green</text>

  <!-- Blue -->
  <line x1="428" y1="372" x2="780" y2="414" stroke="#000" stroke-width="2"/>
  <text x="785" y="418" font-family="Georgia,serif" font-size="11" fill="#000">Blue</text>

  <!-- Indigo -->
  <line x1="428" y1="372" x2="780" y2="444" stroke="#000" stroke-width="2"/>
  <text x="785" y="448" font-family="Georgia,serif" font-size="11" fill="#000">Indigo</text>

  <!-- Violet (most deviation, bottom) -->
  <line x1="428" y1="372" x2="780" y2="476" stroke="#000" stroke-width="2.5"/>
  <polygon points="730,460 748,472 734,480" fill="#000"/>
  <text x="785" y="480" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Violet</text>

  <!-- Deviation angle annotation -->
  <path d="M 600,310 A 30,30 0 0 1 606,340" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="610" y="328" font-family="Georgia,serif" font-size="10" fill="#000">angle of</text>
  <text x="610" y="340" font-family="Georgia,serif" font-size="10" fill="#000">dispersion</text>

  <!-- Key info box -->
  <rect x="30" y="510" width="500" height="68" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="42" y="530" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Dispersion: refractive index n varies with wavelength</text>
  <text x="42" y="548" font-family="Georgia,serif" font-size="11" fill="#000">n_violet &gt; n_red  →  violet bends more (higher deviation)</text>
  <text x="42" y="566" font-family="Georgia,serif" font-size="11" fill="#000">Cauchy's equation:  n(λ) = A + B/λ²  (approximation)</text>
</svg>`;

// ─── OPTICAL FIBER DIAGRAM ────────────────────────────────────────────────
static opticalFiberSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="400px" viewBox="0 0 900 400">

  <!-- Title -->
  <text x="250" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Optical Fibre — Light Propagation by TIR</text>
  <text x="210" y="46" font-family="Georgia,serif" font-size="11" fill="#000">Light travels by repeated Total Internal Reflection inside the core</text>

  <!-- Cladding outer boundary (top and bottom) -->
  <rect x="60" y="100" width="800" height="200" rx="10"
        fill="none" stroke="#000" stroke-width="3"/>
  <!-- Cladding label fill area (light hatching) -->
  <line x1="60"  y1="110" x2="860" y2="110" stroke="#000" stroke-width="0.7"/>
  <line x1="60"  y1="125" x2="860" y2="125" stroke="#000" stroke-width="0.7"/>
  <line x1="60"  y1="140" x2="860" y2="140" stroke="#000" stroke-width="0.7"/>
  <line x1="60"  y1="260" x2="860" y2="260" stroke="#000" stroke-width="0.7"/>
  <line x1="60"  y1="275" x2="860" y2="275" stroke="#000" stroke-width="0.7"/>
  <line x1="60"  y1="290" x2="860" y2="290" stroke="#000" stroke-width="0.7"/>

  <!-- Core inner boundary -->
  <rect x="60" y="148" width="800" height="104" rx="5"
        fill="none" stroke="#000" stroke-width="2.5"/>

  <!-- Labels -->
  <text x="870" y="208" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Core</text>
  <text x="870" y="128" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Cladding</text>
  <text x="870" y="278" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Cladding</text>

  <!-- n labels -->
  <text x="70" y="208" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">n</text>
  <text x="79" y="211" font-family="Georgia,serif" font-size="8" fill="#000">core</text>
  <text x="70" y="132" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">n</text>
  <text x="79" y="135" font-family="Georgia,serif" font-size="8" fill="#000">clad</text>
  <text x="70" y="282" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">n</text>
  <text x="79" y="285" font-family="Georgia,serif" font-size="8" fill="#000">clad</text>
  <text x="120" y="380" font-family="Georgia,serif" font-size="11" fill="#000">(n_core &gt; n_cladding — condition for TIR)</text>

  <!-- Light ray zigzagging inside core by TIR -->
  <!-- Entry: (60,200) at angle; reflections at top (y=148) and bottom (y=252) of core -->
  <line x1="60"  y1="200" x2="150" y2="148" stroke="#000" stroke-width="2.5"/>
  <polygon points="126,155 146,146 144,160" fill="#000"/>

  <line x1="150" y1="148" x2="310" y2="252" stroke="#000" stroke-width="2.5"/>
  <polygon points="278,240 308,250 296,260" fill="#000"/>

  <line x1="310" y1="252" x2="470" y2="148" stroke="#000" stroke-width="2.5"/>
  <polygon points="436,156 466,146 464,160" fill="#000"/>

  <line x1="470" y1="148" x2="630" y2="252" stroke="#000" stroke-width="2.5"/>
  <polygon points="598,240 628,250 616,260" fill="#000"/>

  <line x1="630" y1="252" x2="790" y2="148" stroke="#000" stroke-width="2.5"/>
  <polygon points="756,156 786,146 784,160" fill="#000"/>

  <line x1="790" y1="148" x2="860" y2="196" stroke="#000" stroke-width="2.5"/>
  <polygon points="844,186 860,196 846,204" fill="#000"/>

  <!-- TIR dot markers at reflection points -->
  <circle cx="150" cy="148" r="5" fill="#000"/>
  <circle cx="310" cy="252" r="5" fill="#000"/>
  <circle cx="470" cy="148" r="5" fill="#000"/>
  <circle cx="630" cy="252" r="5" fill="#000"/>
  <circle cx="790" cy="148" r="5" fill="#000"/>

  <!-- Normal lines at reflection points (dashed, perpendicular to core boundary = vertical) -->
  <line x1="150" y1="118" x2="150" y2="178" stroke="#000" stroke-width="1.2" stroke-dasharray="5,4"/>
  <line x1="310" y1="222" x2="310" y2="282" stroke="#000" stroke-width="1.2" stroke-dasharray="5,4"/>
  <line x1="470" y1="118" x2="470" y2="178" stroke="#000" stroke-width="1.2" stroke-dasharray="5,4"/>
  <line x1="630" y1="222" x2="630" y2="282" stroke="#000" stroke-width="1.2" stroke-dasharray="5,4"/>
  <line x1="790" y1="118" x2="790" y2="178" stroke="#000" stroke-width="1.2" stroke-dasharray="5,4"/>

  <!-- TIR label -->
  <text x="148" y="90" font-family="Georgia,serif" font-size="10" fill="#000">TIR</text>
  <text x="308" y="320" font-family="Georgia,serif" font-size="10" fill="#000">TIR</text>
  <text x="468" y="90" font-family="Georgia,serif" font-size="10" fill="#000">TIR</text>
  <text x="628" y="320" font-family="Georgia,serif" font-size="10" fill="#000">TIR</text>
  <text x="788" y="90" font-family="Georgia,serif" font-size="10" fill="#000">TIR</text>

  <!-- Input/output labels -->
  <text x="20" y="198" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">In →</text>
  <text x="865" y="200" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">→ Out</text>
</svg>`;

// ─── OPTICAL INTERFERENCE PATTERN (DOUBLE SLIT) ───────────────────────────
static diffractionInterferencePatternSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="220" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Double Slit Interference Pattern</text>
  <text x="200" y="46" font-family="Georgia,serif" font-size="11" fill="#000">Constructive: d sinθ = mλ  |  Destructive: d sinθ = (m+½)λ</text>

  <!-- Barrier with two slits at x=200 -->
  <rect x="196" y="60" width="8" height="160" fill="#000"/>
  <rect x="196" y="250" width="8" height="60" fill="#000"/>
  <rect x="196" y="340" width="8" height="220" fill="#000"/>

  <!-- Slit labels -->
  <text x="160" y="226" font-family="Georgia,serif" font-size="11" fill="#000">Slit 1</text>
  <text x="160" y="318" font-family="Georgia,serif" font-size="11" fill="#000">Slit 2</text>
  <text x="155" y="30" font-family="Georgia,serif" font-size="11" fill="#000">Barrier</text>

  <!-- Slit separation d -->
  <line x1="185" y1="250" x2="185" y2="340" stroke="#000" stroke-width="1.5"/>
  <polygon points="180,254 185,244 190,254" fill="#000"/>
  <polygon points="180,336 185,346 190,336" fill="#000"/>
  <text x="148" y="300" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">d</text>

  <!-- Screen at x=700 -->
  <line x1="700" y1="60" x2="700" y2="540" stroke="#000" stroke-width="3"/>
  <text x="712" y="76" font-family="Georgia,serif" font-size="11" fill="#000">Screen</text>

  <!-- Source wavefronts (circular arcs from each slit, simplified as lines) -->
  <!-- Slit 1 centre at (204, 225); Slit 2 centre at (204, 315) -->
  <!-- Draw circular arc wavefronts from each slit -->
  <circle cx="204" cy="225" r="60"  fill="none" stroke="#000" stroke-width="1" stroke-dasharray="4,3" opacity="0.6"/>
  <circle cx="204" cy="225" r="110" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="4,3" opacity="0.6"/>
  <circle cx="204" cy="225" r="160" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="4,3" opacity="0.6"/>
  <circle cx="204" cy="225" r="210" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="4,3" opacity="0.6"/>
  <circle cx="204" cy="225" r="260" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>

  <circle cx="204" cy="315" r="60"  fill="none" stroke="#000" stroke-width="1" stroke-dasharray="7,4" opacity="0.6"/>
  <circle cx="204" cy="315" r="110" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="7,4" opacity="0.6"/>
  <circle cx="204" cy="315" r="160" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="7,4" opacity="0.6"/>
  <circle cx="204" cy="315" r="210" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="7,4" opacity="0.6"/>
  <circle cx="204" cy="315" r="260" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="7,4" opacity="0.5"/>

  <!-- Constructive / destructive rays from slits to screen -->
  <!-- m=0 centre (constructive) at y=270 -->
  <line x1="204" y1="225" x2="700" y2="270" stroke="#000" stroke-width="1.5"/>
  <line x1="204" y1="315" x2="700" y2="270" stroke="#000" stroke-width="1.5"/>

  <!-- m=1 constructive at y=170 and y=370 -->
  <line x1="204" y1="225" x2="700" y2="170" stroke="#000" stroke-width="1.2" stroke-dasharray="6,3"/>
  <line x1="204" y1="315" x2="700" y2="170" stroke="#000" stroke-width="1.2" stroke-dasharray="6,3"/>
  <line x1="204" y1="225" x2="700" y2="370" stroke="#000" stroke-width="1.2" stroke-dasharray="6,3"/>
  <line x1="204" y1="315" x2="700" y2="370" stroke="#000" stroke-width="1.2" stroke-dasharray="6,3"/>

  <!-- m=2 at y=100 and y=440 -->
  <line x1="204" y1="225" x2="700" y2="100" stroke="#000" stroke-width="1" stroke-dasharray="3,4"/>
  <line x1="204" y1="315" x2="700" y2="100" stroke="#000" stroke-width="1" stroke-dasharray="3,4"/>
  <line x1="204" y1="225" x2="700" y2="440" stroke="#000" stroke-width="1" stroke-dasharray="3,4"/>
  <line x1="204" y1="315" x2="700" y2="440" stroke="#000" stroke-width="1" stroke-dasharray="3,4"/>

  <!-- Intensity fringe pattern on screen (right of screen line) -->
  <!-- Bright fringes as filled rectangles of varying width -->
  <!-- Central (m=0): widest and brightest -->
  <rect x="700" y="248" width="30" height="44" fill="#000"/>
  <!-- m=+1 -->
  <rect x="700" y="155" width="22" height="30" fill="#000"/>
  <rect x="700" y="355" width="22" height="30" fill="#000"/>
  <!-- m=+2 -->
  <rect x="700" y="88"  width="14" height="20" fill="#000"/>
  <rect x="700" y="432" width="14" height="20" fill="#000"/>
  <!-- m=+3 (barely visible) -->
  <rect x="700" y="60"  width="8"  height="14" fill="#000" opacity="0.5"/>
  <rect x="700" y="470" width="8"  height="14" fill="#000" opacity="0.5"/>

  <!-- Fringe labels -->
  <text x="736" y="274" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">m=0 (central)</text>
  <text x="736" y="174" font-family="Georgia,serif" font-size="11" fill="#000">m=+1</text>
  <text x="736" y="374" font-family="Georgia,serif" font-size="11" fill="#000">m=−1</text>
  <text x="736" y="102" font-family="Georgia,serif" font-size="11" fill="#000">m=+2</text>
  <text x="736" y="446" font-family="Georgia,serif" font-size="11" fill="#000">m=−2</text>

  <!-- Fringe spacing label -->
  <line x1="734" y1="270" x2="734" y2="170" stroke="#000" stroke-width="1.5"/>
  <polygon points="729,174 734,164 739,174" fill="#000"/>
  <polygon points="729,266 734,276 739,266" fill="#000"/>
  <text x="738" y="224" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">Δy</text>

  <!-- Screen-barrier distance -->
  <line x1="204" y1="555" x2="700" y2="555" stroke="#000" stroke-width="1.5"/>
  <polygon points="208,550 198,555 208,560" fill="#000"/>
  <polygon points="696,550 706,555 696,560" fill="#000"/>
  <text x="400" y="575" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">L (screen distance)</text>

  <!-- Formula box -->
  <rect x="30" y="500" width="340" height="54" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="42" y="520" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Fringe spacing:  Δy = λL / d</text>
  <text x="42" y="540" font-family="Georgia,serif" font-size="11" fill="#000">Constructive: d sinθ = mλ  (m = 0, ±1, ±2 ...)</text>
</svg>`;

// ─── POLARIZATION DIAGRAM ─────────────────────────────────────────────────
static polarizationDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="500px" viewBox="0 0 900 500">

  <!-- Title -->
  <text x="240" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Light Polarization</text>
  <text x="185" y="46" font-family="Georgia,serif" font-size="11" fill="#000">Unpolarized → Linear Polarizer → Plane-Polarized → Analyser → Intensity varies</text>

  <!-- Source (left) -->
  <circle cx="60" cy="250" r="30" fill="none" stroke="#000" stroke-width="3"/>
  <text x="42" y="254" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Source</text>

  <!-- Unpolarized light: multiple oscillation directions -->
  <!-- Ray direction arrows in all planes (asterisk at x=110–200) -->
  <line x1="90" y1="250" x2="200" y2="250" stroke="#000" stroke-width="2.5"/>
  <!-- Oscillation indicators (spokes) at x=130, 160 -->
  <line x1="130" y1="220" x2="130" y2="280" stroke="#000" stroke-width="2"/>
  <line x1="130" y1="230" x2="160" y2="270" stroke="#000" stroke-width="1.8"/>
  <line x1="130" y1="270" x2="160" y2="230" stroke="#000" stroke-width="1.8"/>
  <line x1="110" y1="250" x2="150" y2="250" stroke="#000" stroke-width="2"/>
  <line x1="160" y1="222" x2="160" y2="278" stroke="#000" stroke-width="2"/>
  <line x1="145" y1="238" x2="175" y2="262" stroke="#000" stroke-width="1.8"/>
  <line x1="145" y1="262" x2="175" y2="238" stroke="#000" stroke-width="1.8"/>
  <line x1="140" y1="250" x2="180" y2="250" stroke="#000" stroke-width="2"/>
  <text x="105" y="305" font-family="Georgia,serif" font-size="11" fill="#000">Unpolarized</text>
  <text x="110" y="318" font-family="Georgia,serif" font-size="11" fill="#000">(all planes)</text>

  <!-- Polarizer 1 -->
  <rect x="200" y="170" width="18" height="160" rx="3" fill="none" stroke="#000" stroke-width="3"/>
  <!-- Vertical slits in polarizer -->
  <line x1="207" y1="180" x2="207" y2="320" stroke="#000" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="212" y1="180" x2="212" y2="320" stroke="#000" stroke-width="1.5" stroke-dasharray="4,4"/>
  <text x="185" y="355" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Polarizer</text>
  <text x="190" y="368" font-family="Georgia,serif" font-size="11" fill="#000">(vertical axis)</text>

  <!-- Polarized light ray (one plane only — vertical oscillations) -->
  <line x1="218" y1="250" x2="480" y2="250" stroke="#000" stroke-width="2.5"/>
  <polygon points="440,245 455,250 440,255" fill="#000"/>
  <!-- Vertical oscillation indicators only -->
  <line x1="280" y1="210" x2="280" y2="290" stroke="#000" stroke-width="2.5"/>
  <line x1="340" y1="210" x2="340" y2="290" stroke="#000" stroke-width="2.5"/>
  <line x1="400" y1="210" x2="400" y2="290" stroke="#000" stroke-width="2.5"/>
  <line x1="440" y1="210" x2="440" y2="290" stroke="#000" stroke-width="2.5"/>
  <text x="300" y="316" font-family="Georgia,serif" font-size="11" fill="#000">Plane-polarized</text>
  <text x="308" y="329" font-family="Georgia,serif" font-size="11" fill="#000">(vertical only)</text>

  <!-- Analyser at x=480 (same axis as polarizer → full transmission) -->
  <rect x="480" y="170" width="18" height="160" rx="3" fill="none" stroke="#000" stroke-width="3"/>
  <line x1="487" y1="180" x2="487" y2="320" stroke="#000" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="492" y1="180" x2="492" y2="320" stroke="#000" stroke-width="1.5" stroke-dasharray="4,4"/>
  <text x="464" y="355" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Analyser</text>
  <text x="460" y="368" font-family="Georgia,serif" font-size="10" fill="#000">(at angle θ)</text>

  <!-- Transmitted ray after analyser: attenuated (Malus's Law) -->
  <line x1="498" y1="250" x2="720" y2="250" stroke="#000" stroke-width="2.5"/>
  <polygon points="680,245 695,250 680,255" fill="#000"/>
  <!-- Reduced oscillation -->
  <line x1="550" y1="228" x2="550" y2="272" stroke="#000" stroke-width="2.5"/>
  <line x1="610" y1="228" x2="610" y2="272" stroke="#000" stroke-width="2.5"/>
  <line x1="670" y1="228" x2="670" y2="272" stroke="#000" stroke-width="2.5"/>
  <text x="530" y="310" font-family="Georgia,serif" font-size="11" fill="#000">Transmitted</text>
  <text x="522" y="323" font-family="Georgia,serif" font-size="11" fill="#000">I = I₀ cos² θ</text>

  <!-- 3D representation of E-field oscillation (ellipse at polarizer output) -->
  <ellipse cx="350" cy="175" rx="18" ry="40" fill="none" stroke="#000" stroke-width="2" transform="rotate(-20,350,175)"/>
  <text x="372" y="170" font-family="Georgia,serif" font-size="9" fill="#000">E-field</text>
  <text x="372" y="182" font-family="Georgia,serif" font-size="9" fill="#000">plane</text>

  <!-- Special cases note -->
  <rect x="30" y="400" width="840" height="80" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="42" y="420" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Malus's Law:  I = I₀ cos² θ</text>
  <text x="42" y="440" font-family="Georgia,serif" font-size="11" fill="#000">θ = 0°: maximum transmission (I = I₀)  |  θ = 90°: complete extinction (I = 0)  |  θ = 45°: half intensity</text>
  <text x="42" y="460" font-family="Georgia,serif" font-size="11" fill="#000">Brewster's angle: tan θ_B = n₂/n₁  (reflected light fully polarized at this angle)</text>
</svg>`;

// ─── PHOTOELECTRIC EFFECT ─────────────────────────────────────────────────
static photoelectricEffectSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="195" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Photoelectric Effect</text>
  <text x="155" y="46" font-family="Georgia,serif" font-size="11" fill="#000">Einstein: photon energy E = hf  |  KE_max = hf − φ  (φ = work function)</text>

  <!-- Metal surface (rectangle) -->
  <rect x="100" y="280" width="500" height="180" rx="5"
        fill="none" stroke="#000" stroke-width="4"/>
  <!-- Metal hatching -->
  <line x1="100" y1="300" x2="600" y2="300" stroke="#000" stroke-width="0.8"/>
  <line x1="100" y1="320" x2="600" y2="320" stroke="#000" stroke-width="0.8"/>
  <line x1="100" y1="340" x2="600" y2="340" stroke="#000" stroke-width="0.8"/>
  <line x1="100" y1="360" x2="600" y2="360" stroke="#000" stroke-width="0.8"/>
  <line x1="100" y1="380" x2="600" y2="380" stroke="#000" stroke-width="0.8"/>
  <line x1="100" y1="400" x2="600" y2="400" stroke="#000" stroke-width="0.8"/>
  <line x1="100" y1="420" x2="600" y2="420" stroke="#000" stroke-width="0.8"/>
  <text x="300" y="450" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Metal Surface</text>
  <text x="275" y="468" font-family="Georgia,serif" font-size="11" fill="#000">(work function φ = 2.0 eV)</text>

  <!-- Incoming photons (wavy lines → metal surface) -->
  <!-- Photon 1: left -->
  <path d="M 60,60 C 70,50 80,70 90,60 C 100,50 110,70 120,60 C 130,50 140,70 150,60 C 160,50 170,70 180,60 C 190,50 200,70 210,60"
        fill="none" stroke="#000" stroke-width="2.5"/>
  <line x1="210" y1="60" x2="200" y2="278" stroke="#000" stroke-width="2.5"/>
  <polygon points="195,264 200,280 205,264" fill="#000"/>
  <text x="30" y="56" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Photon</text>
  <text x="20" y="70" font-family="Georgia,serif" font-size="10" fill="#000">(E = hf)</text>

  <!-- Photon 2: centre -->
  <path d="M 260,60 C 270,50 280,70 290,60 C 300,50 310,70 320,60 C 330,50 340,70 350,60 C 360,50 370,70 380,60"
        fill="none" stroke="#000" stroke-width="2.5"/>
  <line x1="380" y1="60" x2="350" y2="278" stroke="#000" stroke-width="2.5"/>
  <polygon points="345,264 350,280 355,264" fill="#000"/>

  <!-- Photon 3: right -->
  <path d="M 460,60 C 470,50 480,70 490,60 C 500,50 510,70 520,60 C 530,50 540,70 550,60"
        fill="none" stroke="#000" stroke-width="2.5"/>
  <line x1="550" y1="60" x2="500" y2="278" stroke="#000" stroke-width="2.5"/>
  <polygon points="495,264 500,280 505,264" fill="#000"/>

  <!-- Ejected electrons (leaving surface upward at angles) -->
  <!-- Electron 1 -->
  <line x1="200" y1="280" x2="130" y2="160" stroke="#000" stroke-width="2.5"/>
  <polygon points="136,172 128,156 142,160" fill="#000"/>
  <circle cx="200" cy="280" r="8" fill="#000"/>
  <text x="80" y="152" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">e⁻</text>

  <!-- Electron 2 -->
  <line x1="350" y1="280" x2="350" y2="130" stroke="#000" stroke-width="2.5"/>
  <polygon points="344,142 350,126 356,142" fill="#000"/>
  <circle cx="350" cy="280" r="8" fill="#000"/>
  <text x="356" y="122" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">e⁻</text>

  <!-- Electron 3 -->
  <line x1="500" y1="280" x2="570" y2="160" stroke="#000" stroke-width="2.5"/>
  <polygon points="562,172 574,158 576,172" fill="#000"/>
  <circle cx="500" cy="280" r="8" fill="#000"/>
  <text x="578" y="152" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">e⁻</text>

  <!-- KE arrow for electron 2 -->
  <line x1="370" y1="210" x2="370" y2="140" stroke="#000" stroke-width="1.5"/>
  <polygon points="365,144 370,132 375,144" fill="#000"/>
  <text x="376" y="186" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">KE_max</text>

  <!-- Energy level diagram (right side) -->
  <rect x="640" y="80" width="140" height="480" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="650" y="100" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Energy Levels</text>

  <!-- Free electron level (top) -->
  <line x1="648" y1="150" x2="772" y2="150" stroke="#000" stroke-width="2.5"/>
  <text x="650" y="143" font-family="Georgia,serif" font-size="10" fill="#000">Free (0 eV)</text>

  <!-- KE_max band -->
  <line x1="648" y1="210" x2="772" y2="210" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="650" y="205" font-family="Georgia,serif" font-size="10" fill="#000">KE_max = 1 eV</text>
  <!-- Arrow: hf down to work function level -->
  <line x1="710" y1="150" x2="710" y2="340" stroke="#000" stroke-width="1.5"/>
  <polygon points="705,336 710,348 715,336" fill="#000"/>
  <text x="715" y="255" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">hf</text>
  <text x="712" y="270" font-family="Georgia,serif" font-size="10" fill="#000">= 3 eV</text>

  <!-- Phi arrow -->
  <line x1="660" y1="210" x2="660" y2="340" stroke="#000" stroke-width="1.5"/>
  <polygon points="655,214 660,202 665,214" fill="#000"/>
  <polygon points="655,336 660,348 665,336" fill="#000"/>
  <text x="646" y="280" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">φ</text>
  <text x="644" y="295" font-family="Georgia,serif" font-size="10" fill="#000">= 2 eV</text>

  <!-- Work function level (surface) -->
  <line x1="648" y1="340" x2="772" y2="340" stroke="#000" stroke-width="2.5"/>
  <text x="650" y="360" font-family="Georgia,serif" font-size="10" fill="#000">Metal surface</text>
  <text x="650" y="373" font-family="Georgia,serif" font-size="10" fill="#000">(bound electron)</text>

  <!-- Threshold note -->
  <text x="650" y="410" font-family="Georgia,serif" font-size="10" fill="#000">Threshold:</text>
  <text x="650" y="424" font-family="Georgia,serif" font-size="10" fill="#000">f₀ = φ/h</text>
  <text x="650" y="438" font-family="Georgia,serif" font-size="10" fill="#000">If f &lt; f₀: no</text>
  <text x="650" y="452" font-family="Georgia,serif" font-size="10" fill="#000">emission</text>

  <!-- Formula box at bottom -->
  <rect x="30" y="530" width="580" height="54" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="42" y="550" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">KE_max = hf − φ   |   Stopping potential: eV_s = KE_max</text>
  <text x="42" y="570" font-family="Georgia,serif" font-size="11" fill="#000">Intensity ↑ → more electrons (not faster)   |   Frequency ↑ → higher KE</text>
</svg>`;

// ─── LINE EMISSION SPECTRA ────────────────────────────────────────────────
static lineEmissionSpectraSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="240" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Hydrogen Line Emission Spectrum</text>
  <text x="195" y="46" font-family="Georgia,serif" font-size="11" fill="#000">Electrons fall to lower energy levels, emitting photons: E = hf = E_n2 − E_n1</text>

  <!-- Energy level diagram (left side) -->
  <!-- Levels at: n=1 y=480, n=2 y=380, n=3 y=300, n=4 y=240, n=5 y=195, ∞ y=140 -->
  <text x="30" y="90" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Energy Levels</text>

  <!-- Ionization level -->
  <line x1="30" y1="140" x2="240" y2="140" stroke="#000" stroke-width="2"/>
  <text x="248" y="144" font-family="Georgia,serif" font-size="11" fill="#000">n = ∞  (0 eV)</text>

  <line x1="30" y1="195" x2="240" y2="195" stroke="#000" stroke-width="2"/>
  <text x="248" y="199" font-family="Georgia,serif" font-size="11" fill="#000">n = 5  (−0.54 eV)</text>

  <line x1="30" y1="240" x2="240" y2="240" stroke="#000" stroke-width="2"/>
  <text x="248" y="244" font-family="Georgia,serif" font-size="11" fill="#000">n = 4  (−0.85 eV)</text>

  <line x1="30" y1="300" x2="240" y2="300" stroke="#000" stroke-width="2.5"/>
  <text x="248" y="304" font-family="Georgia,serif" font-size="11" fill="#000">n = 3  (−1.51 eV)</text>

  <line x1="30" y1="380" x2="240" y2="380" stroke="#000" stroke-width="2.5"/>
  <text x="248" y="384" font-family="Georgia,serif" font-size="11" fill="#000">n = 2  (−3.40 eV)</text>

  <line x1="30" y1="480" x2="240" y2="480" stroke="#000" stroke-width="3"/>
  <text x="248" y="484" font-family="Georgia,serif" font-size="11" fill="#000">n = 1  (−13.6 eV)  Ground state</text>

  <!-- Transition arrows for Balmer series (to n=2) -->
  <!-- n=3→2: Hα 656 nm -->
  <line x1="80" y1="300" x2="80" y2="382" stroke="#000" stroke-width="2.5"/>
  <polygon points="74,378 80,390 86,378" fill="#000"/>
  <text x="52" y="345" font-family="Georgia,serif" font-size="10" fill="#000">656 nm</text>
  <text x="52" y="357" font-family="Georgia,serif" font-size="10" fill="#000">(Hα)</text>

  <!-- n=4→2: Hβ 486 nm -->
  <line x1="120" y1="240" x2="120" y2="382" stroke="#000" stroke-width="2.5"/>
  <polygon points="114,378 120,390 126,378" fill="#000"/>
  <text x="128" y="310" font-family="Georgia,serif" font-size="10" fill="#000">486 nm</text>
  <text x="128" y="322" font-family="Georgia,serif" font-size="10" fill="#000">(Hβ)</text>

  <!-- n=5→2: Hγ 434 nm -->
  <line x1="160" y1="195" x2="160" y2="382" stroke="#000" stroke-width="2.5"/>
  <polygon points="154,378 160,390 166,378" fill="#000"/>
  <text x="168" y="280" font-family="Georgia,serif" font-size="10" fill="#000">434 nm</text>
  <text x="168" y="292" font-family="Georgia,serif" font-size="10" fill="#000">(Hγ)</text>

  <!-- Lyman series arrows (to n=1) — dashed to distinguish -->
  <line x1="50" y1="380" x2="50" y2="482" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <polygon points="44,478 50,490 56,478" fill="#000"/>
  <text x="18" y="436" font-family="Georgia,serif" font-size="9" fill="#000">121 nm</text>
  <text x="18" y="448" font-family="Georgia,serif" font-size="9" fill="#000">(UV)</text>

  <!-- Balmer series label -->
  <line x1="30" y1="530" x2="220" y2="530" stroke="#000" stroke-width="1.5"/>
  <text x="35" y="548" font-family="Georgia,serif" font-size="11" fill="#000">Balmer series (visible)</text>
  <text x="35" y="562" font-family="Georgia,serif" font-size="11" fill="#000">Lyman (UV, dashed arrows)</text>

  <!-- Spectral line display bar -->
  <rect x="440" y="80" width="420" height="80" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="560" y="72" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Visible Emission Spectrum</text>

  <!-- Wavelength axis labels -->
  <text x="440" y="178" font-family="Georgia,serif" font-size="10" fill="#000">400 nm</text>
  <text x="755" y="178" font-family="Georgia,serif" font-size="10" fill="#000">700 nm</text>
  <text x="585" y="178" font-family="Georgia,serif" font-size="10" fill="#000">← Wavelength (nm) →</text>

  <!-- Background spectrum (black, with spectral lines as thick marks) -->
  <rect x="440" y="80" width="420" height="80" fill="#111"/>
  <!-- Hα at 656 nm: position = 440 + (656-400)/(700-400)*420 = 440+358=798 → x=798 clamp=858 -->
  <!-- Let's scale: x = 440 + (λ-400)/300 * 420 -->
  <!-- Hα 656: x=440+(256/300)*420=440+358=798 -->
  <line x1="798" y1="80" x2="798" y2="160" stroke="#fff" stroke-width="5"/>
  <!-- Hβ 486: x=440+(86/300)*420=440+120=560 -->
  <line x1="560" y1="80" x2="560" y2="160" stroke="#ddd" stroke-width="3"/>
  <!-- Hγ 434: x=440+(34/300)*420=440+48=488 -->
  <line x1="488" y1="80" x2="488" y2="160" stroke="#bbb" stroke-width="2.5"/>
  <!-- Hδ 410: x=440+(10/300)*420=440+14=454 -->
  <line x1="454" y1="80" x2="454" y2="160" stroke="#999" stroke-width="2"/>

  <!-- Line labels (below spectrum bar) -->
  <text x="790" y="198" font-family="Georgia,serif" font-size="10" fill="#000">Hα</text>
  <text x="790" y="210" font-family="Georgia,serif" font-size="10" fill="#000">656</text>
  <text x="552" y="198" font-family="Georgia,serif" font-size="10" fill="#000">Hβ</text>
  <text x="550" y="210" font-family="Georgia,serif" font-size="10" fill="#000">486</text>
  <text x="480" y="198" font-family="Georgia,serif" font-size="10" fill="#000">Hγ</text>
  <text x="478" y="210" font-family="Georgia,serif" font-size="10" fill="#000">434</text>
  <text x="447" y="198" font-family="Georgia,serif" font-size="10" fill="#000">Hδ</text>
  <text x="445" y="210" font-family="Georgia,serif" font-size="10" fill="#000">410</text>

  <!-- Rydberg equation box -->
  <rect x="440" y="240" width="420" height="100" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="452" y="262" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Rydberg Equation:</text>
  <text x="452" y="284" font-family="Georgia,serif" font-size="13" fill="#000">1/λ = R_H (1/n₁² − 1/n₂²)</text>
  <text x="452" y="304" font-family="Georgia,serif" font-size="11" fill="#000">R_H = 1.097 × 10⁷ m⁻¹  (Rydberg constant)</text>
  <text x="452" y="322" font-family="Georgia,serif" font-size="11" fill="#000">n₁ &lt; n₂  (electron falls from n₂ to n₁)</text>

  <!-- Series table -->
  <rect x="440" y="360" width="420" height="160" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="452" y="382" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Series Summary:</text>
  <text x="452" y="402" font-family="Georgia,serif" font-size="11" fill="#000">Lyman:   n₁=1   UV region</text>
  <text x="452" y="420" font-family="Georgia,serif" font-size="11" fill="#000">Balmer:  n₁=2   Visible (400–700 nm)</text>
  <text x="452" y="438" font-family="Georgia,serif" font-size="11" fill="#000">Paschen: n₁=3   Infrared</text>
  <text x="452" y="456" font-family="Georgia,serif" font-size="11" fill="#000">Brackett: n₁=4  Far infrared</text>
  <text x="452" y="474" font-family="Georgia,serif" font-size="11" fill="#000">Pfund:   n₁=5   Far infrared</text>
  <text x="452" y="508" font-family="Georgia,serif" font-size="10" fill="#000">Energy released: ΔE = −13.6 eV × (1/n₁² − 1/n₂²)</text>
</svg>`;

// ─── BLACKBODY RADIATION CURVES ───────────────────────────────────────────
static blackbodyRadiationSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="230" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Blackbody Radiation Curves</text>
  <text x="195" y="46" font-family="Georgia,serif" font-size="11" fill="#000">Spectral intensity vs wavelength at different temperatures — Wien's Displacement Law</text>

  <!-- Axes -->
  <!-- Y-axis -->
  <line x1="100" y1="60" x2="100" y2="500" stroke="#000" stroke-width="3"/>
  <polygon points="94,64 100,48 106,64" fill="#000"/>
  <text x="30" y="280" font-family="Georgia,serif" font-size="12" font-weight="bold"
        transform="rotate(-90,50,280)" fill="#000">Spectral Intensity (arb.)</text>

  <!-- X-axis -->
  <line x1="100" y1="500" x2="820" y2="500" stroke="#000" stroke-width="3"/>
  <polygon points="816,494 832,500 816,506" fill="#000"/>
  <text x="420" y="540" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Wavelength λ (nm)</text>

  <!-- X-axis tick marks (200 to 2000 nm) -->
  <line x1="190" y1="500" x2="190" y2="512" stroke="#000" stroke-width="1.5"/>
  <text x="175" y="525" font-family="Georgia,serif" font-size="10" fill="#000">200</text>
  <line x1="280" y1="500" x2="280" y2="512" stroke="#000" stroke-width="1.5"/>
  <text x="265" y="525" font-family="Georgia,serif" font-size="10" fill="#000">400</text>
  <line x1="370" y1="500" x2="370" y2="512" stroke="#000" stroke-width="1.5"/>
  <text x="355" y="525" font-family="Georgia,serif" font-size="10" fill="#000">600</text>
  <line x1="460" y1="500" x2="460" y2="512" stroke="#000" stroke-width="1.5"/>
  <text x="445" y="525" font-family="Georgia,serif" font-size="10" fill="#000">800</text>
  <line x1="550" y1="500" x2="550" y2="512" stroke="#000" stroke-width="1.5"/>
  <text x="530" y="525" font-family="Georgia,serif" font-size="10" fill="#000">1000</text>
  <line x1="640" y1="500" x2="640" y2="512" stroke="#000" stroke-width="1.5"/>
  <text x="620" y="525" font-family="Georgia,serif" font-size="10" fill="#000">1200</text>
  <line x1="730" y1="500" x2="730" y2="512" stroke="#000" stroke-width="1.5"/>
  <text x="710" y="525" font-family="Georgia,serif" font-size="10" fill="#000">1400</text>

  <!-- Y-axis ticks -->
  <line x1="88" y1="460" x2="100" y2="460" stroke="#000" stroke-width="1.5"/>
  <line x1="88" y1="380" x2="100" y2="380" stroke="#000" stroke-width="1.5"/>
  <line x1="88" y1="300" x2="100" y2="300" stroke="#000" stroke-width="1.5"/>
  <line x1="88" y1="220" x2="100" y2="220" stroke="#000" stroke-width="1.5"/>
  <line x1="88" y1="140" x2="100" y2="140" stroke="#000" stroke-width="1.5"/>

  <!-- Planck curves for 4 temperatures using path approximations -->
  <!-- Scale: x=100+(λ-0)/5.5 approximately; y intensity scaled to plot area -->
  <!-- T=3000K: peak ~966nm, low amplitude — path approximation -->
  <path d="M 100,500 C 160,498 200,490 250,470 C 300,450 340,430 370,415
           C 400,400 430,392 460,390 C 500,388 540,390 580,396
           C 620,402 660,410 700,420 C 740,432 780,444 820,456"
        fill="none" stroke="#000" stroke-width="2" stroke-dasharray="8,4"/>
  <text x="824" y="456" font-family="Georgia,serif" font-size="11" fill="#000">3000 K</text>

  <!-- T=4000K: peak ~724nm, medium amplitude -->
  <path d="M 100,500 C 150,496 185,480 220,455 C 260,428 295,400 330,375
           C 355,355 380,342 410,338 C 440,334 468,336 498,342
           C 540,352 580,368 620,385 C 660,402 710,420 780,445"
        fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="784" y="446" font-family="Georgia,serif" font-size="11" fill="#000">4000 K</text>

  <!-- T=5000K: peak ~580nm, higher amplitude -->
  <path d="M 100,500 C 140,492 170,465 205,428 C 240,390 270,355 305,320
           C 328,296 352,278 378,268 C 405,258 428,258 450,262
           C 480,268 510,280 545,298 C 585,318 630,345 680,378 C 730,410 780,440 820,462"
        fill="none" stroke="#000" stroke-width="3"/>
  <text x="824" y="462" font-family="Georgia,serif" font-size="11" fill="#000">5000 K</text>

  <!-- T=6000K: peak ~483nm, highest amplitude -->
  <path d="M 100,500 C 132,488 158,454 192,408 C 225,362 252,316 284,278
           C 308,248 332,222 358,204 C 380,188 402,178 422,174
           C 445,170 464,172 484,178 C 515,190 546,210 580,236
           C 620,266 665,302 715,340 C 760,374 800,406 820,424"
        fill="none" stroke="#000" stroke-width="3.5"/>
  <text x="824" y="424" font-family="Georgia,serif" font-size="11" fill="#000">6000 K</text>

  <!-- Peak wavelength markers (dots and dashed drop-lines) -->
  <!-- 3000K peak at ~966nm → x=100+966/5.5≈276 hmm, let's use x-scale: 200nm→x=190, 400→280, so Δx=45 per 100nm -->
  <!-- Peak 3000K: 966nm → x=190+(966-200)*45/100=190+344=534... let me simplify with visual placements -->
  <!-- Marking approximate peak positions on curves -->
  <circle cx="460" cy="390" r="5" fill="#000"/>
  <line x1="460" y1="390" x2="460" y2="500" stroke="#000" stroke-width="1.2" stroke-dasharray="5,4"/>
  <text x="452" y="492" font-family="Georgia,serif" font-size="9" fill="#000">966</text>

  <circle cx="410" cy="338" r="5" fill="#000"/>
  <line x1="410" y1="338" x2="410" y2="500" stroke="#000" stroke-width="1.2" stroke-dasharray="5,4"/>
  <text x="402" y="492" font-family="Georgia,serif" font-size="9" fill="#000">724</text>

  <circle cx="370" cy="268" r="5" fill="#000"/>
  <line x1="370" y1="268" x2="370" y2="500" stroke="#000" stroke-width="1.2" stroke-dasharray="5,4"/>
  <text x="358" y="492" font-family="Georgia,serif" font-size="9" fill="#000">579</text>

  <circle cx="333" cy="200" r="5" fill="#000"/>
  <line x1="333" y1="200" x2="333" y2="500" stroke="#000" stroke-width="1.2" stroke-dasharray="5,4"/>
  <text x="321" y="492" font-family="Georgia,serif" font-size="9" fill="#000">483</text>

  <!-- Locus of peaks (dashed curve) -->
  <path d="M 333,200 C 348,220 360,248 370,268 C 388,300 400,320 410,338 C 432,364 446,378 460,390"
        fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,4"/>
  <text x="470" y="360" font-family="Georgia,serif" font-size="10" fill="#000">Wien's</text>
  <text x="470" y="372" font-family="Georgia,serif" font-size="10" fill="#000">displacement</text>
  <text x="470" y="384" font-family="Georgia,serif" font-size="10" fill="#000">locus</text>

  <!-- Visible range shading indicator -->
  <line x1="280" y1="60" x2="280" y2="500" stroke="#000" stroke-width="1" stroke-dasharray="4,4" opacity="0.5"/>
  <line x1="370" y1="60" x2="370" y2="500" stroke="#000" stroke-width="1" stroke-dasharray="4,4" opacity="0.5"/>
  <text x="290" y="78" font-family="Georgia,serif" font-size="10" fill="#000">← Visible (400–700 nm) →</text>

  <!-- Formula box -->
  <rect x="100" y="556" width="580" height="36" rx="4" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="112" y="572" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Wien's Law: λ_max · T = 2.898 × 10⁻³ m·K</text>
  <text x="112" y="586" font-family="Georgia,serif" font-size="11" fill="#000">Stefan-Boltzmann: P = σAT⁴  (σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴)</text>
</svg>`;

// ─── QUANTUM TUNNELING DIAGRAM ────────────────────────────────────────────
static quantumTunnelingDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="240" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Quantum Tunneling Through a Potential Barrier</text>
  <text x="205" y="46" font-family="Georgia,serif" font-size="11" fill="#000">Particle energy E &lt; barrier height V₀ — classically forbidden, quantum allowed</text>

  <!-- Axes -->
  <line x1="60" y1="520" x2="840" y2="520" stroke="#000" stroke-width="2.5"/>
  <polygon points="836,514 852,520 836,526" fill="#000"/>
  <text x="440" y="555" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Position x →</text>

  <line x1="60" y1="100" x2="60" y2="520" stroke="#000" stroke-width="2.5"/>
  <polygon points="54,104 60,88 66,104" fill="#000"/>
  <text x="15" y="310" font-family="Georgia,serif" font-size="12" font-weight="bold"
        transform="rotate(-90,30,310)" fill="#000">Energy / Ψ</text>

  <!-- Potential well regions -->
  <!-- Region I: x=60–280 (left free region) -->
  <rect x="60" y="100" width="220" height="420" fill="none" stroke="none"/>
  <text x="130" y="555" font-family="Georgia,serif" font-size="11" fill="#000">Region I</text>
  <text x="120" y="568" font-family="Georgia,serif" font-size="10" fill="#000">(free, V=0)</text>

  <!-- Barrier: x=280–500, height V₀ -->
  <rect x="280" y="200" width="220" height="320" fill="none" stroke="#000" stroke-width="3"/>
  <!-- Barrier hatching -->
  <line x1="280" y1="220" x2="500" y2="220" stroke="#000" stroke-width="0.7"/>
  <line x1="280" y1="244" x2="500" y2="244" stroke="#000" stroke-width="0.7"/>
  <line x1="280" y1="268" x2="500" y2="268" stroke="#000" stroke-width="0.7"/>
  <line x1="280" y1="292" x2="500" y2="292" stroke="#000" stroke-width="0.7"/>
  <line x1="280" y1="316" x2="500" y2="316" stroke="#000" stroke-width="0.7"/>
  <line x1="280" y1="340" x2="500" y2="340" stroke="#000" stroke-width="0.7"/>
  <text x="330" y="170" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Potential</text>
  <text x="332" y="185" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Barrier V₀</text>
  <text x="350" y="555" font-family="Georgia,serif" font-size="11" fill="#000">Region II</text>
  <text x="338" y="568" font-family="Georgia,serif" font-size="10" fill="#000">(barrier, V=V₀)</text>

  <!-- Region III: x=500–840 -->
  <text x="630" y="555" font-family="Georgia,serif" font-size="11" fill="#000">Region III</text>
  <text x="618" y="568" font-family="Georgia,serif" font-size="10" fill="#000">(free, V=0)</text>

  <!-- V₀ level line -->
  <line x1="60" y1="200" x2="840" y2="200" stroke="#000" stroke-width="1.5" stroke-dasharray="8,5"/>
  <text x="845" y="204" font-family="Georgia,serif" font-size="11" fill="#000">V₀</text>

  <!-- Particle energy E (horizontal dashed line, below V₀) -->
  <line x1="60" y1="340" x2="840" y2="340" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="845" y="344" font-family="Georgia,serif" font-size="11" fill="#000">E</text>

  <!-- Energy level annotation -->
  <line x1="70" y1="200" x2="70" y2="340" stroke="#000" stroke-width="1.5"/>
  <polygon points="65,204 70,192 75,204" fill="#000"/>
  <polygon points="65,336 70,348 75,336" fill="#000"/>
  <text x="76" y="275" font-family="Georgia,serif" font-size="11" fill="#000">V₀ − E</text>

  <!-- Wavefunction ψ -->
  <!-- Region I: oscillating sine wave (incident + reflected) — amplitude high -->
  <!-- Incident wave + reflected: looks like beats/modulated sine -->
  <path d="M 60,340
    C 72,340 72,280 84,280 C 96,280 96,340 108,340
    C 120,340 120,280 132,280 C 144,280 144,340 156,340
    C 168,340 168,280 180,280 C 192,280 192,340 204,340
    C 216,340 216,280 228,280 C 240,280 240,340 252,340
    C 264,340 264,280 276,280 C 280,280 280,330 280,330"
        fill="none" stroke="#000" stroke-width="3"/>

  <!-- Region II: decaying exponential (evanescent wave) -->
  <path d="M 280,330 C 295,328 310,326 330,324 C 355,322 380,322 410,323
           C 440,324 465,326 500,330"
        fill="none" stroke="#000" stroke-width="3" stroke-dasharray="none"/>
  <!-- Tunneling label in barrier -->
  <text x="290" y="365" font-family="Georgia,serif" font-size="10" fill="#000">Evanescent</text>
  <text x="292" y="378" font-family="Georgia,serif" font-size="10" fill="#000">(decaying ψ)</text>

  <!-- Region III: transmitted wave — smaller amplitude sine -->
  <path d="M 500,330
    C 512,330 512,300 524,300 C 536,300 536,330 548,330
    C 560,330 560,300 572,300 C 584,300 584,330 596,330
    C 608,330 608,300 620,300 C 632,300 632,330 644,330
    C 656,330 656,300 668,300 C 680,300 680,330 692,330
    C 704,330 704,300 716,300 C 728,300 728,330 740,330"
        fill="none" stroke="#000" stroke-width="3"/>

  <!-- Amplitude comparison arrows -->
  <line x1="120" y1="280" x2="120" y2="340" stroke="#000" stroke-width="1.5"/>
  <polygon points="115,284 120,272 125,284" fill="#000"/>
  <polygon points="115,336 120,348 125,336" fill="#000"/>
  <text x="126" y="313" font-family="Georgia,serif" font-size="10" fill="#000">A₁</text>

  <line x1="620" y1="300" x2="620" y2="330" stroke="#000" stroke-width="1.5"/>
  <polygon points="615,304 620,292 625,304" fill="#000"/>
  <polygon points="615,326 620,338 625,326" fill="#000"/>
  <text x="628" y="318" font-family="Georgia,serif" font-size="10" fill="#000">A₂ &lt; A₁</text>

  <!-- Probability flux arrows -->
  <line x1="130" y1="420" x2="250" y2="420" stroke="#000" stroke-width="2.5"/>
  <polygon points="230,414 250,420 230,426" fill="#000"/>
  <text x="135" y="445" font-family="Georgia,serif" font-size="11" fill="#000">J_incident</text>

  <line x1="530" y1="420" x2="650" y2="420" stroke="#000" stroke-width="2"/>
  <polygon points="630,414 650,420 630,426" fill="#000"/>
  <text x="535" y="445" font-family="Georgia,serif" font-size="11" fill="#000">J_transmitted</text>

  <!-- Reflected arrow -->
  <line x1="240" y1="460" x2="120" y2="460" stroke="#000" stroke-width="1.5" stroke-dasharray="6,3"/>
  <polygon points="140,454 120,460 140,466" fill="#000"/>
  <text x="145" y="485" font-family="Georgia,serif" font-size="11" fill="#000">J_reflected</text>

  <!-- Transmission coefficient formula box -->
  <rect x="580" y="80" width="300" height="90" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="592" y="100" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Transmission (approx):</text>
  <text x="592" y="120" font-family="Georgia,serif" font-size="12" fill="#000">T ≈ e^(−2κL)</text>
  <text x="592" y="140" font-family="Georgia,serif" font-size="11" fill="#000">κ = √(2m(V₀−E)) / ℏ</text>
  <text x="592" y="158" font-family="Georgia,serif" font-size="11" fill="#000">L = barrier width</text>
</svg>`;

// ─── ELECTRON PROBABILITY DISTRIBUTION ───────────────────────────────────
static electronProbabilityDistributionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="185" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Electron Probability Distribution — 1s Orbital</text>
  <text x="175" y="46" font-family="Georgia,serif" font-size="11" fill="#000">ψ²(r) gives probability density; 4πr²ψ²(r) gives radial distribution</text>

  <!-- LEFT PANEL: Radial probability distribution plot -->
  <!-- Axes -->
  <line x1="60" y1="480" x2="380" y2="480" stroke="#000" stroke-width="2.5"/>
  <polygon points="376,474 392,480 376,486" fill="#000"/>
  <text x="170" y="515" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">r / a₀ (Bohr radii)</text>

  <line x1="60" y1="100" x2="60" y2="480" stroke="#000" stroke-width="2.5"/>
  <polygon points="54,104 60,88 66,104" fill="#000"/>
  <text x="10" y="290" font-family="Georgia,serif" font-size="12" font-weight="bold"
        transform="rotate(-90,28,290)" fill="#000">P(r) = 4πr²|ψ|²</text>

  <!-- x-axis ticks -->
  <line x1="120" y1="480" x2="120" y2="492" stroke="#000" stroke-width="1.5"/>
  <text x="115" y="507" font-family="Georgia,serif" font-size="11" fill="#000">1</text>
  <line x1="180" y1="480" x2="180" y2="492" stroke="#000" stroke-width="1.5"/>
  <text x="175" y="507" font-family="Georgia,serif" font-size="11" fill="#000">2</text>
  <line x1="240" y1="480" x2="240" y2="492" stroke="#000" stroke-width="1.5"/>
  <text x="235" y="507" font-family="Georgia,serif" font-size="11" fill="#000">3</text>
  <line x1="300" y1="480" x2="300" y2="492" stroke="#000" stroke-width="1.5"/>
  <text x="295" y="507" font-family="Georgia,serif" font-size="11" fill="#000">4</text>
  <line x1="360" y1="480" x2="360" y2="492" stroke="#000" stroke-width="1.5"/>
  <text x="355" y="507" font-family="Georgia,serif" font-size="11" fill="#000">5</text>

  <!-- Radial probability curve for 1s: P(r) = 4r²e^(-2r) (scaled) -->
  <!-- Peak at r=a₀ (r=1, x=120), then decays -->
  <!-- Using Bézier approximation: starts at 0, rises to peak, decays exponentially -->
  <path d="M 60,480
           C 70,480 90,460 120,340
           C 135,290 145,260 160,295
           C 180,340 200,400 230,440
           C 260,465 300,475 380,479"
        fill="none" stroke="#000" stroke-width="3"/>

  <!-- Peak marker at r=a₀ -->
  <line x1="120" y1="340" x2="120" y2="480" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <circle cx="120" cy="340" r="5" fill="#000"/>
  <text x="125" y="335" font-family="Georgia,serif" font-size="11" fill="#000">Peak at r = a₀</text>
  <text x="125" y="350" font-family="Georgia,serif" font-size="11" fill="#000">(most probable r)</text>

  <!-- Wavefunction ψ curve (dashed, decaying exponential) -->
  <path d="M 60,160 C 70,165 90,200 120,260 C 150,320 180,380 220,420 C 260,448 310,466 380,476"
        fill="none" stroke="#000" stroke-width="2" stroke-dasharray="8,5"/>
  <text x="200" y="158" font-family="Georgia,serif" font-size="11" fill="#000">ψ(r) ∝ e^(−r/a₀)</text>
  <text x="200" y="172" font-family="Georgia,serif" font-size="11" fill="#000">(dashed)</text>
  <line x1="192" y1="162" x2="175" y2="210" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>

  <!-- a₀ label -->
  <text x="70" y="474" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">a₀</text>

  <!-- RIGHT PANEL: Probability cloud (cross-section of orbital) -->
  <text x="470" y="95" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Probability Cloud (1s)</text>
  <text x="460" y="112" font-family="Georgia,serif" font-size="10" fill="#000">Dot density ∝ |ψ|² (higher density near nucleus)</text>

  <!-- Nucleus at centre (460+160=620, 300) -->
  <!-- Concentric rings of dots representing probability density -->
  <!-- Innermost: very dense dots near (620,300) -->
  <!-- Represent via concentric circles with decreasing stroke density -->
  <circle cx="620" cy="300" r="8"  fill="none" stroke="#000" stroke-width="8"   opacity="0.95"/>
  <circle cx="620" cy="300" r="20" fill="none" stroke="#000" stroke-width="6"   opacity="0.82"/>
  <circle cx="620" cy="300" r="36" fill="none" stroke="#000" stroke-width="4"   opacity="0.68"/>
  <circle cx="620" cy="300" r="56" fill="none" stroke="#000" stroke-width="3"   opacity="0.54"/>
  <circle cx="620" cy="300" r="80" fill="none" stroke="#000" stroke-width="2.5" opacity="0.40"/>
  <circle cx="620" cy="300" r="108" fill="none" stroke="#000" stroke-width="2"  opacity="0.28"/>
  <circle cx="620" cy="300" r="138" fill="none" stroke="#000" stroke-width="1.5" opacity="0.18"/>
  <circle cx="620" cy="300" r="170" fill="none" stroke="#000" stroke-width="1"  opacity="0.10"/>

  <!-- Nucleus dot -->
  <circle cx="620" cy="300" r="5" fill="#000"/>
  <text x="628" y="296" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Nucleus</text>

  <!-- r = a₀ circle marker -->
  <circle cx="620" cy="300" r="60" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,4"/>
  <line x1="620" y1="300" x2="680" y2="300" stroke="#000" stroke-width="1.5"/>
  <text x="640" y="296" font-family="Georgia,serif" font-size="11" fill="#000">a₀</text>

  <!-- Axis labels on cloud -->
  <line x1="450" y1="300" x2="790" y2="300" stroke="#000" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>
  <line x1="620" y1="130" x2="620" y2="470" stroke="#000" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>

  <!-- Boundary box for cloud diagram -->
  <rect x="450" y="120" width="330" height="350" rx="5" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>

  <!-- Formula box at bottom -->
  <rect x="60" y="545" width="700" height="42" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="72" y="562" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">ψ₁s = (1/√π)(1/a₀)^(3/2) e^(−r/a₀)   |   P(r) = 4πr²|ψ₁s|²   |   a₀ = 0.529 Å</text>
  <text x="72" y="580" font-family="Georgia,serif" font-size="11" fill="#000">Probability of finding electron between r and r+dr:  dP = P(r) dr</text>
</svg>`;

// ─── WAVE-PARTICLE DUALITY ────────────────────────────────────────────────
static waveParticleDualitySvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <!-- Title -->
  <text x="300" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Wave–Particle Duality</text>
  <text x="240" y="46" font-family="Georgia,serif" font-size="11" fill="#000">Matter and light exhibit both wave and particle behaviour depending on observation</text>

  <!-- Dividing line -->
  <line x1="500" y1="60" x2="500" y2="560" stroke="#000" stroke-width="2" stroke-dasharray="10,6"/>

  <!-- LEFT HALF: Wave nature (double-slit interference) -->
  <text x="120" y="80" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Wave Nature — Interference</text>
  <text x="80" y="96" font-family="Georgia,serif" font-size="11" fill="#000">(Both slits open — wave-like fringe pattern)</text>

  <!-- Electron source -->
  <rect x="30" y="270" width="40" height="60" rx="4" fill="none" stroke="#000" stroke-width="3"/>
  <text x="36" y="296" font-family="Georgia,serif" font-size="10" fill="#000">e⁻</text>
  <text x="34" y="308" font-family="Georgia,serif" font-size="10" fill="#000">gun</text>

  <!-- Barrier with two slits at x=160 -->
  <rect x="158" y="100" width="8" height="155" fill="#000"/>
  <rect x="158" y="290" width="8" height="60" fill="#000"/>
  <rect x="158" y="385" width="8" height="155" fill="#000"/>
  <text x="135" y="270" font-family="Georgia,serif" font-size="10" fill="#000">S₁</text>
  <text x="135" y="365" font-family="Georgia,serif" font-size="10" fill="#000">S₂</text>

  <!-- Wave arcs from gun to slits -->
  <line x1="70" y1="300" x2="158" y2="300" stroke="#000" stroke-width="2"/>
  <!-- Circular wave arcs from S1 (164,260) and S2 (164,350) -->
  <circle cx="164" cy="260" r="40"  fill="none" stroke="#000" stroke-width="1.2" stroke-dasharray="5,3"/>
  <circle cx="164" cy="260" r="80"  fill="none" stroke="#000" stroke-width="1.2" stroke-dasharray="5,3"/>
  <circle cx="164" cy="260" r="120" fill="none" stroke="#000" stroke-width="1"   stroke-dasharray="5,3"/>
  <circle cx="164" cy="260" r="160" fill="none" stroke="#000" stroke-width="1"   stroke-dasharray="5,3"/>

  <circle cx="164" cy="350" r="40"  fill="none" stroke="#000" stroke-width="1.2" stroke-dasharray="8,4"/>
  <circle cx="164" cy="350" r="80"  fill="none" stroke="#000" stroke-width="1.2" stroke-dasharray="8,4"/>
  <circle cx="164" cy="350" r="120" fill="none" stroke="#000" stroke-width="1"   stroke-dasharray="8,4"/>
  <circle cx="164" cy="350" r="160" fill="none" stroke="#000" stroke-width="1"   stroke-dasharray="8,4"/>

  <!-- Screen at x=400 showing interference fringes -->
  <line x1="400" y1="100" x2="400" y2="540" stroke="#000" stroke-width="2.5"/>
  <!-- Bright fringes -->
  <rect x="400" y="278" width="28" height="44" fill="#000"/>
  <rect x="400" y="195" width="20" height="30" fill="#000"/>
  <rect x="400" y="360" width="20" height="30" fill="#000"/>
  <rect x="400" y="130" width="12" height="20" fill="#000"/>
  <rect x="400" y="425" width="12" height="20" fill="#000"/>
  <text x="432" y="304" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Interference</text>
  <text x="432" y="318" font-family="Georgia,serif" font-size="11" fill="#000">fringes</text>

  <!-- RIGHT HALF: Particle nature (single photon detection) -->
  <text x="580" y="80" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Particle Nature — Photon Hits</text>
  <text x="540" y="96" font-family="Georgia,serif" font-size="11" fill="#000">(One slit open or detector watching — no fringes)</text>

  <!-- Source -->
  <rect x="530" y="270" width="40" height="60" rx="4" fill="none" stroke="#000" stroke-width="3"/>
  <text x="536" y="296" font-family="Georgia,serif" font-size="10" fill="#000">e⁻</text>
  <text x="534" y="308" font-family="Georgia,serif" font-size="10" fill="#000">gun</text>

  <!-- Barrier with one open slit at x=660 -->
  <rect x="658" y="100" width="8" height="200" fill="#000"/>
  <rect x="658" y="310" width="8" height="230" fill="#000"/>
  <text x="634" y="310" font-family="Georgia,serif" font-size="10" fill="#000">Slit</text>
  <!-- Detector indicator on slit -->
  <text x="668" y="296" font-family="Georgia,serif" font-size="9" fill="#000">detector</text>
  <text x="668" y="308" font-family="Georgia,serif" font-size="9" fill="#000">here</text>

  <!-- Particle trajectories (straight lines, random scatter) -->
  <line x1="570" y1="300" x2="660" y2="300" stroke="#000" stroke-width="2"/>
  <line x1="660" y1="300" x2="870" y2="260" stroke="#000" stroke-width="1.5"/>
  <line x1="660" y1="300" x2="870" y2="300" stroke="#000" stroke-width="1.5"/>
  <line x1="660" y1="300" x2="870" y2="340" stroke="#000" stroke-width="1.5"/>
  <line x1="660" y1="300" x2="870" y2="220" stroke="#000" stroke-width="1.5"/>
  <line x1="660" y1="300" x2="870" y2="380" stroke="#000" stroke-width="1.5"/>
  <line x1="660" y1="300" x2="870" y2="180" stroke="#000" stroke-width="1.2" stroke-dasharray="5,3"/>
  <line x1="660" y1="300" x2="870" y2="420" stroke="#000" stroke-width="1.2" stroke-dasharray="5,3"/>

  <!-- Screen at x=870 showing particle hit pattern (diffraction single slit — broad peak) -->
  <line x1="870" y1="100" x2="870" y2="540" stroke="#000" stroke-width="2.5"/>
  <!-- Single broad peak (diffraction) -->
  <rect x="870" y="258" width="24" height="84" fill="#000"/>
  <rect x="870" y="230" width="14" height="30" fill="#000"/>
  <rect x="870" y="338" width="14" height="30" fill="#000"/>
  <rect x="870" y="210" width="6"  height="22" fill="#000"/>
  <rect x="870" y="368" width="6"  height="22" fill="#000"/>
  <text x="898" y="302" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Diffraction</text>
  <text x="898" y="316" font-family="Georgia,serif" font-size="11" fill="#000">envelope</text>
  <text x="898" y="330" font-family="Georgia,serif" font-size="11" fill="#000">(no fringes)</text>

  <!-- Particle hit dots on screen (random scatter) -->
  <circle cx="871" cy="270" r="3" fill="#fff" stroke="#000" stroke-width="1"/>
  <circle cx="871" cy="300" r="3" fill="#fff" stroke="#000" stroke-width="1"/>
  <circle cx="871" cy="315" r="3" fill="#fff" stroke="#000" stroke-width="1"/>
  <circle cx="871" cy="285" r="3" fill="#fff" stroke="#000" stroke-width="1"/>

  <!-- Complementarity principle box -->
  <rect x="60" y="545" width="860" height="44" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="72" y="563" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Bohr's Complementarity: wave and particle behaviours are mutually exclusive — observation collapses the wavefunction</text>
  <text x="72" y="580" font-family="Georgia,serif" font-size="11" fill="#000">de Broglie: λ = h/p  |  Heisenberg: Δx · Δp ≥ ℏ/2  |  Both photons and matter show duality</text>
</svg>`;

// ─── DE BROGLIE WAVELENGTH ────────────────────────────────────────────────
static deBroglieWavelengthSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="230" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">de Broglie Wavelength — Matter Waves</text>
  <text x="195" y="46" font-family="Georgia,serif" font-size="11" fill="#000">Every moving particle has an associated wavelength: λ = h/p = h/(mv)</text>

  <!-- TOP SECTION: Classical particle vs matter wave comparison -->
  <!-- Classical particle (ball) -->
  <text x="60" y="90" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Classical view: particle</text>
  <circle cx="120" cy="140" r="20" fill="none" stroke="#000" stroke-width="3"/>
  <line x1="140" y1="140" x2="300" y2="140" stroke="#000" stroke-width="3"/>
  <polygon points="285,134 304,140 285,146" fill="#000"/>
  <text x="155" y="130" font-family="Georgia,serif" font-size="12" fill="#000">velocity v, mass m</text>
  <text x="155" y="155" font-family="Georgia,serif" font-size="12" fill="#000">momentum p = mv</text>

  <!-- Matter wave -->
  <text x="460" y="90" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Quantum view: matter wave</text>
  <!-- Sinusoidal wave packet -->
  <path d="M 460,140
           C 472,140 472,110 484,110 C 496,110 496,140 508,140
           C 520,140 520,110 532,110 C 544,110 544,140 556,140
           C 568,140 568,110 580,110 C 592,110 592,140 604,140
           C 616,140 616,110 628,110 C 640,110 640,140 652,140
           C 664,140 664,110 676,110 C 688,110 688,140 700,140
           C 712,140 712,110 724,110 C 736,110 736,140 748,140
           C 760,140 760,110 772,110 C 784,110 784,140 796,140"
        fill="none" stroke="#000" stroke-width="3"/>
  <!-- Envelope -->
  <path d="M 460,140 C 500,110 560,100 628,110 C 696,120 760,130 796,140"
        fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <path d="M 460,140 C 500,170 560,180 628,170 C 696,160 760,150 796,140"
        fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- Wavelength annotation -->
  <line x1="484" y1="110" x2="508" y2="110" stroke="#000" stroke-width="1.5"/>
  <polygon points="488,105 480,110 488,115" fill="#000"/>
  <polygon points="504,105 512,110 504,115" fill="#000"/>
  <text x="490" y="100" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">λ</text>

  <!-- Wave packet propagation arrow -->
  <line x1="796" y1="140" x2="850" y2="140" stroke="#000" stroke-width="2.5"/>
  <polygon points="840,134 856,140 840,146" fill="#000"/>
  <text x="858" y="144" font-family="Georgia,serif" font-size="12" fill="#000">v</text>

  <!-- MIDDLE SECTION: λ vs mass comparison table -->
  <text x="60" y="220" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">de Broglie wavelength comparison (v = 1 × 10⁶ m/s unless noted)</text>

  <!-- Table -->
  <rect x="60" y="234" width="760" height="200" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <!-- Header -->
  <line x1="60" y1="260" x2="820" y2="260" stroke="#000" stroke-width="2"/>
  <text x="80"  y="252" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Particle</text>
  <text x="240" y="252" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Mass (kg)</text>
  <text x="400" y="252" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Velocity (m/s)</text>
  <text x="590" y="252" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">λ = h/mv (m)</text>

  <!-- Column dividers -->
  <line x1="230" y1="234" x2="230" y2="434" stroke="#000" stroke-width="1.2"/>
  <line x1="390" y1="234" x2="390" y2="434" stroke="#000" stroke-width="1.2"/>
  <line x1="580" y1="234" x2="580" y2="434" stroke="#000" stroke-width="1.2"/>

  <!-- Row 1: Electron -->
  <line x1="60" y1="294" x2="820" y2="294" stroke="#000" stroke-width="1"/>
  <text x="80"  y="284" font-family="Georgia,serif" font-size="11" fill="#000">Electron</text>
  <text x="240" y="284" font-family="Georgia,serif" font-size="11" fill="#000">9.11 × 10⁻³¹</text>
  <text x="400" y="284" font-family="Georgia,serif" font-size="11" fill="#000">1 × 10⁶</text>
  <text x="590" y="284" font-family="Georgia,serif" font-size="11" fill="#000">7.28 × 10⁻¹⁰ m (0.73 nm)</text>

  <!-- Row 2: Proton -->
  <line x1="60" y1="328" x2="820" y2="328" stroke="#000" stroke-width="1"/>
  <text x="80"  y="318" font-family="Georgia,serif" font-size="11" fill="#000">Proton</text>
  <text x="240" y="318" font-family="Georgia,serif" font-size="11" fill="#000">1.67 × 10⁻²⁷</text>
  <text x="400" y="318" font-family="Georgia,serif" font-size="11" fill="#000">1 × 10⁶</text>
  <text x="590" y="318" font-family="Georgia,serif" font-size="11" fill="#000">3.97 × 10⁻¹³ m (femtometre)</text>

  <!-- Row 3: Neutron -->
  <line x1="60" y1="362" x2="820" y2="362" stroke="#000" stroke-width="1"/>
  <text x="80"  y="352" font-family="Georgia,serif" font-size="11" fill="#000">Neutron</text>
  <text x="240" y="352" font-family="Georgia,serif" font-size="11" fill="#000">1.67 × 10⁻²⁷</text>
  <text x="400" y="352" font-family="Georgia,serif" font-size="11" fill="#000">1 × 10⁶</text>
  <text x="590" y="352" font-family="Georgia,serif" font-size="11" fill="#000">3.97 × 10⁻¹³ m</text>

  <!-- Row 4: Football (macro) -->
  <line x1="60" y1="396" x2="820" y2="396" stroke="#000" stroke-width="1"/>
  <text x="80"  y="386" font-family="Georgia,serif" font-size="11" fill="#000">Football</text>
  <text x="240" y="386" font-family="Georgia,serif" font-size="11" fill="#000">0.43 kg</text>
  <text x="400" y="386" font-family="Georgia,serif" font-size="11" fill="#000">15 m/s</text>
  <text x="590" y="386" font-family="Georgia,serif" font-size="11" fill="#000">≈ 10⁻³⁴ m (undetectable)</text>

  <!-- Row 5: Key observation -->
  <text x="80" y="422" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">→ Wave effects are only observable when λ ≈ atomic/crystal spacing</text>

  <!-- BOTTOM SECTION: Wavefunction interpretation + formula -->
  <rect x="60" y="455" width="380" height="110" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="72" y="474" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">de Broglie Relations:</text>
  <text x="72" y="494" font-family="Georgia,serif" font-size="13" fill="#000">λ = h / p = h / (mv)</text>
  <text x="72" y="514" font-family="Georgia,serif" font-size="13" fill="#000">f = E / h = KE / h</text>
  <text x="72" y="534" font-family="Georgia,serif" font-size="11" fill="#000">h = 6.626 × 10⁻³⁴ J·s  (Planck constant)</text>
  <text x="72" y="552" font-family="Georgia,serif" font-size="11" fill="#000">Confirmed by: electron diffraction (Davisson-Germer 1927)</text>

  <!-- Davisson-Germer experiment diagram (right) -->
  <rect x="470" y="455" width="400" height="110" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="482" y="474" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Davisson-Germer Experiment:</text>
  <!-- Crystal lattice dots -->
  <circle cx="520" cy="530" r="4" fill="#000"/>
  <circle cx="550" cy="530" r="4" fill="#000"/>
  <circle cx="580" cy="530" r="4" fill="#000"/>
  <circle cx="610" cy="530" r="4" fill="#000"/>
  <circle cx="640" cy="530" r="4" fill="#000"/>
  <circle cx="670" cy="530" r="4" fill="#000"/>
  <circle cx="535" cy="510" r="4" fill="#000"/>
  <circle cx="565" cy="510" r="4" fill="#000"/>
  <circle cx="595" cy="510" r="4" fill="#000"/>
  <circle cx="625" cy="510" r="4" fill="#000"/>
  <circle cx="655" cy="510" r="4" fill="#000"/>
  <!-- Incident and diffracted beams -->
  <line x1="482" y1="492" x2="565" y2="510" stroke="#000" stroke-width="2"/>
  <polygon points="548,504 562,510 550,516" fill="#000"/>
  <line x1="565" y1="510" x2="648" y2="492" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <polygon points="630,494 646,490 648,504" fill="#000"/>
  <text x="482" y="500" font-family="Georgia,serif" font-size="10" fill="#000">e⁻ beam</text>
  <text x="650" y="496" font-family="Georgia,serif" font-size="10" fill="#000">diffracted</text>
  <text x="482" y="556" font-family="Georgia,serif" font-size="10" fill="#000">Nickel crystal lattice — interference confirms λ = h/p</text>
</svg>`;





  // ─── 4. AMMETER SERIES CONNECTION CIRCUIT ────────────────────────────────
  static ammeterSeriesConnectionCircuitDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 520 400">
  <text x="100" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Circuit Diagram — Ammeter (Series) &amp; Voltmeter (Parallel)</text>
  <text x="110" y="38" font-family="Georgia,serif" font-size="10" fill="#444">Ammeter: low resistance, in series | Voltmeter: high resistance, in parallel</text>
  <line x1="80"  y1="80" x2="210" y2="80" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="330" y1="80" x2="440" y2="80" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="440" y1="80" x2="440" y2="300" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="440" y1="300" x2="320" y2="300" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="180" y1="300" x2="80"  y2="300" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="80"  x2="80" y2="140" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="250" x2="80" y2="300" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="62" y1="148" x2="98" y2="148" stroke="#000" stroke-width="4"/>
  <line x1="68" y1="162" x2="92" y2="162" stroke="#000" stroke-width="2"/>
  <line x1="62" y1="176" x2="98" y2="176" stroke="#000" stroke-width="4"/>
  <line x1="68" y1="190" x2="92" y2="190" stroke="#000" stroke-width="2"/>
  <line x1="80" y1="148" x2="80" y2="140" stroke="#000" stroke-width="3"/>
  <line x1="80" y1="190" x2="80" y2="250" stroke="#000" stroke-width="3"/>
  <line x1="80" y1="162" x2="80" y2="176" stroke="#000" stroke-width="2"/>
  <text x="100" y="152" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">+</text>
  <text x="100" y="196" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">−</text>
  <text x="28" y="175" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">ε</text>
  <text x="18" y="188" font-family="Georgia,serif" font-size="10" fill="#555">(EMF)</text>
  <circle cx="270" cy="80" r="30" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="260" y="85" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">A</text>
  <line x1="210" y1="80" x2="240" y2="80" stroke="#000" stroke-width="3"/>
  <line x1="300" y1="80" x2="330" y2="80" stroke="#000" stroke-width="3"/>
  <text x="248" y="122" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Ammeter</text>
  <text x="240" y="134" font-family="Georgia,serif" font-size="9" fill="#000">(series, low R)</text>
  <text x="244" y="146" font-family="Georgia,serif" font-size="9" fill="#000">r_A ≈ 0</text>
  <polyline points="180,300 195,300 200,284 210,316 220,284 230,316 240,284 250,316 260,284 270,316 280,284 290,316 300,284 305,300 320,300"
    fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="243" y="277" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">R</text>
  <text x="228" y="324" font-family="Georgia,serif" font-size="10" fill="#000">Resistor</text>
  <line x1="180" y1="300" x2="180" y2="360" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <line x1="320" y1="300" x2="320" y2="360" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <line x1="180" y1="360" x2="220" y2="360" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <line x1="280" y1="360" x2="320" y2="360" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <circle cx="250" cy="360" r="30" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="240" y="366" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">V</text>
  <text x="230" y="400" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Voltmeter</text>
  <text x="218" y="412" font-family="Georgia,serif" font-size="9" fill="#000">(parallel, high R)</text>
  <polygon points="164,75 180,80 164,85" fill="#000"/>
  <text x="120" y="72" font-family="Georgia,serif" font-size="11" font-weight="bold" font-style="italic" fill="#000">I →</text>
  <polygon points="435,195 440,210 445,195" fill="#000"/>
  <polygon points="376,295 360,300 376,305" fill="#000"/>
  <polygon points="75,118 80,103 85,118" fill="#000"/>
  <rect x="380" y="140" width="130" height="140" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="388" y="158" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Key Formulae:</text>
  <text x="388" y="174" font-family="Georgia,serif" font-size="10" fill="#000">I = ε / (R + r)</text>
  <text x="388" y="190" font-family="Georgia,serif" font-size="9" fill="#555">r = internal resistance</text>
  <text x="388" y="208" font-family="Georgia,serif" font-size="10" fill="#000">V_R = I × R</text>
  <text x="388" y="224" font-family="Georgia,serif" font-size="9" fill="#555">(voltmeter reads V_R)</text>
  <text x="388" y="242" font-family="Georgia,serif" font-size="10" fill="#000">P = I²R = V²/R</text>
  <text x="388" y="258" font-family="Georgia,serif" font-size="9" fill="#555">(power dissipated)</text>
  <text x="388" y="274" font-family="Georgia,serif" font-size="9" fill="#000">ΣV = 0  (Kirchhoff)</text>
  <circle cx="80"  cy="80"  r="5" fill="#000"/>
  <circle cx="440" cy="80"  r="5" fill="#000"/>
  <circle cx="440" cy="300" r="5" fill="#000"/>
  <circle cx="80"  cy="300" r="5" fill="#000"/>
  <circle cx="180" cy="300" r="5" fill="#000"/>
  <circle cx="320" cy="300" r="5" fill="#000"/>
</svg>`;

  // ─── HEATING CURVE ────────────────────────────────────────────────────────
  static heatingCurvePhysicsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="300" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        text-anchor="middle" fill="#000">Heating Curve — Water</text>
  <text x="300" y="48" font-family="Georgia,serif" font-size="10" text-anchor="middle" fill="#444">
    Temperature vs. Heat Added (showing phase changes)
  </text>

  <!-- Axes -->
  <!-- Y axis -->
  <line x1="80" y1="40" x2="80" y2="520" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <!-- X axis -->
  <line x1="80" y1="520" x2="600" y2="520" stroke="#000" stroke-width="3" stroke-linecap="round"/>

  <!-- Axis arrows -->
  <polygon points="76,44 80,30 84,44" fill="#000"/>
  <polygon points="596,516 610,520 596,524" fill="#000"/>

  <!-- Axis labels -->
  <text x="30" y="290" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" transform="rotate(-90,30,290)">Temperature (°C)</text>
  <text x="340" y="555" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Heat Added (Q) →</text>

  <!-- Y-axis tick marks and labels -->
  <!-- -20°C -->
  <line x1="75" y1="480" x2="85" y2="480" stroke="#000" stroke-width="2"/>
  <text x="55" y="484" font-family="Georgia,serif" font-size="10" text-anchor="end" fill="#000">−20</text>
  <!-- 0°C -->
  <line x1="75" y1="400" x2="85" y2="400" stroke="#000" stroke-width="2"/>
  <text x="55" y="404" font-family="Georgia,serif" font-size="10" text-anchor="end" fill="#000">0</text>
  <!-- 100°C -->
  <line x1="75" y1="240" x2="85" y2="240" stroke="#000" stroke-width="2"/>
  <text x="55" y="244" font-family="Georgia,serif" font-size="10" text-anchor="end" fill="#000">100</text>
  <!-- 120°C -->
  <line x1="75" y1="208" x2="85" y2="208" stroke="#000" stroke-width="2"/>
  <text x="55" y="212" font-family="Georgia,serif" font-size="10" text-anchor="end" fill="#000">120</text>

  <!-- Dashed guide lines -->
  <line x1="80" y1="400" x2="600" y2="400" stroke="#000" stroke-width="1" stroke-dasharray="5,4"/>
  <line x1="80" y1="240" x2="600" y2="240" stroke="#000" stroke-width="1" stroke-dasharray="5,4"/>

  <!-- ── Heating curve segments ── -->
  <!-- Segment 1: Ice warming  (-20°C → 0°C), x: 80→160, y: 480→400 -->
  <line x1="80" y1="480" x2="160" y2="400" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Segment 2: Melting plateau (0°C), x: 160→260, y: 400→400 -->
  <line x1="160" y1="400" x2="260" y2="400" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Segment 3: Water warming (0°C → 100°C), x: 260→360, y: 400→240 -->
  <line x1="260" y1="400" x2="360" y2="240" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Segment 4: Boiling plateau (100°C), x: 360→500, y: 240→240 -->
  <line x1="360" y1="240" x2="500" y2="240" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Segment 5: Steam warming (100°C → 120°C), x: 500→580, y: 240→208 -->
  <line x1="500" y1="240" x2="580" y2="208" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Phase region labels -->
  <text x="110" y="460" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Solid</text>
  <text x="108" y="473" font-family="Georgia,serif" font-size="10" fill="#000">(Ice)</text>

  <text x="193" y="388" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Melting</text>
  <text x="187" y="400" font-family="Georgia,serif" font-size="10" fill="#000">(Fusion plateau)</text>
  <text x="189" y="412" font-family="Georgia,serif" font-size="9" fill="#000">Q = mL_f</text>

  <text x="285" y="340" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Liquid</text>
  <text x="280" y="353" font-family="Georgia,serif" font-size="10" fill="#000">(Water)</text>

  <text x="392" y="228" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Boiling</text>
  <text x="385" y="240" font-family="Georgia,serif" font-size="10" fill="#000">(Vaporisation plateau)</text>
  <text x="393" y="252" font-family="Georgia,serif" font-size="9" fill="#000">Q = mL_v</text>

  <text x="525" y="230" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Gas</text>
  <text x="519" y="243" font-family="Georgia,serif" font-size="10" fill="#000">(Steam)</text>

  <!-- Slope annotations -->
  <text x="85" y="432" font-family="Georgia,serif" font-size="9" font-style="italic" fill="#000">slope = mc_ice</text>
  <text x="268" y="302" font-family="Georgia,serif" font-size="9" font-style="italic" fill="#000">slope = mc_water</text>
  <text x="504" y="222" font-family="Georgia,serif" font-size="9" font-style="italic" fill="#000">slope = mc_steam</text>

  <!-- Info box -->
  <rect x="620" y="60" width="250" height="200" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="632" y="80" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Equations:</text>
  <text x="632" y="98" font-family="Georgia,serif" font-size="10" fill="#000">Heating:  Q = mcΔT</text>
  <text x="632" y="114" font-family="Georgia,serif" font-size="10" fill="#000">Melting:  Q = mL_f</text>
  <text x="632" y="130" font-family="Georgia,serif" font-size="10" fill="#000">Boiling:  Q = mL_v</text>
  <line x1="632" y1="140" x2="858" y2="140" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="632" y="156" font-family="Georgia,serif" font-size="10" fill="#000">For water:</text>
  <text x="632" y="172" font-family="Georgia,serif" font-size="10" fill="#000">c_ice   = 2,090 J/kg·K</text>
  <text x="632" y="188" font-family="Georgia,serif" font-size="10" fill="#000">c_water = 4,186 J/kg·K</text>
  <text x="632" y="204" font-family="Georgia,serif" font-size="10" fill="#000">c_steam = 2,010 J/kg·K</text>
  <text x="632" y="220" font-family="Georgia,serif" font-size="10" fill="#000">L_f = 334 kJ/kg</text>
  <text x="632" y="236" font-family="Georgia,serif" font-size="10" fill="#000">L_v = 2,260 kJ/kg</text>
</svg>`;

  // ─── PHASE DIAGRAM ────────────────────────────────────────────────────────
  static phaseDiagramPhysicsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="300" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        text-anchor="middle" fill="#000">Phase Diagram — Water (P-T)</text>
  <text x="300" y="44" font-family="Georgia,serif" font-size="10" text-anchor="middle" fill="#444">
    Pressure vs. Temperature showing solid, liquid and gas regions
  </text>

  <!-- Axes -->
  <line x1="80" y1="50" x2="80" y2="500" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="500" x2="580" y2="500" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="76,54 80,40 84,54" fill="#000"/>
  <polygon points="576,496 590,500 576,504" fill="#000"/>

  <!-- Axis labels -->
  <text x="28" y="280" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" transform="rotate(-90,28,280)">Pressure (P)</text>
  <text x="330" y="535" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Temperature (T) →</text>

  <!-- Tick labels -->
  <text x="70" y="504" font-family="Georgia,serif" font-size="9" text-anchor="end" fill="#000">0</text>

  <!-- ── Phase boundary curves ── -->
  <!-- Solid-Gas boundary (sublimation): from bottom-left (80,500) curving to triple point (200,350) -->
  <path d="M80,500 Q140,480 200,350" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>

  <!-- Solid-Liquid boundary (fusion): nearly vertical, slight negative slope (water anomaly)
       from triple point (200,350) up to (185,80) -->
  <path d="M200,350 Q194,215 185,80" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>

  <!-- Liquid-Gas boundary (vaporisation): from triple point (200,350) to critical point (450,200) -->
  <path d="M200,350 Q320,290 450,200" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>

  <!-- Phase region labels -->
  <!-- Solid (upper left of fusion line) -->
  <text x="105" y="220" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">SOLID</text>
  <!-- Liquid (upper middle) -->
  <text x="255" y="220" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">LIQUID</text>
  <!-- Gas (lower right) -->
  <text x="360" y="430" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">GAS</text>

  <!-- Triple point -->
  <circle cx="200" cy="350" r="7" fill="#000"/>
  <text x="210" y="345" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Triple Point</text>
  <text x="210" y="358" font-family="Georgia,serif" font-size="10" fill="#000">T = 273.16 K</text>
  <text x="210" y="370" font-family="Georgia,serif" font-size="10" fill="#000">P = 611.7 Pa</text>
  <!-- dashed guide lines to axes -->
  <line x1="80" y1="350" x2="200" y2="350" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="200" y1="350" x2="200" y2="500" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>

  <!-- Critical point -->
  <circle cx="450" cy="200" r="7" fill="#000"/>
  <text x="460" y="195" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Critical Point</text>
  <text x="460" y="208" font-family="Georgia,serif" font-size="10" fill="#000">T = 647 K</text>
  <text x="460" y="220" font-family="Georgia,serif" font-size="10" fill="#000">P = 22.1 MPa</text>
  <line x1="80" y1="200" x2="450" y2="200" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="450" y1="200" x2="450" y2="500" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>

  <!-- Boundary labels -->
  <text x="115" y="440" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">Sublimation</text>
  <text x="152" y="170" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">Fusion</text>
  <text x="152" y="183" font-family="Georgia,serif" font-size="9" fill="#000">(−ve slope:</text>
  <text x="152" y="194" font-family="Georgia,serif" font-size="9" fill="#000"> water anomaly)</text>
  <text x="305" y="290" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">Vaporisation</text>

  <!-- Supercritical region label -->
  <text x="455" y="140" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Supercritical</text>
  <text x="460" y="153" font-family="Georgia,serif" font-size="10" fill="#000">Fluid</text>

  <!-- Info box -->
  <rect x="600" y="60" width="175" height="130" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="610" y="78" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Points:</text>
  <text x="610" y="95" font-family="Georgia,serif" font-size="10" fill="#000">Triple point:</text>
  <text x="610" y="108" font-family="Georgia,serif" font-size="9" fill="#000">All 3 phases coexist</text>
  <text x="610" y="124" font-family="Georgia,serif" font-size="10" fill="#000">Critical point:</text>
  <text x="610" y="137" font-family="Georgia,serif" font-size="9" fill="#000">Liquid/gas indistinct</text>
  <text x="610" y="153" font-family="Georgia,serif" font-size="10" fill="#000">Clausius-Clapeyron:</text>
  <text x="610" y="166" font-family="Georgia,serif" font-size="9" fill="#000">dP/dT = L/(TΔV)</text>
  <text x="610" y="182" font-family="Georgia,serif" font-size="9" fill="#000">along phase boundary</text>
</svg>`;

  // ─── P-V DIAGRAM ──────────────────────────────────────────────────────────
  static pvDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="300" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        text-anchor="middle" fill="#000">P-V Diagram — Isothermal Process</text>
  <text x="300" y="44" font-family="Georgia,serif" font-size="10" text-anchor="middle" fill="#444">
    Pressure vs. Volume for ideal gas (PV = nRT = constant)
  </text>

  <!-- Axes -->
  <line x1="80" y1="50" x2="80" y2="500" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="500" x2="580" y2="500" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="76,54 80,40 84,54" fill="#000"/>
  <polygon points="576,496 590,500 576,504" fill="#000"/>

  <!-- Axis labels -->
  <text x="28" y="280" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" transform="rotate(-90,28,280)">Pressure P (Pa)</text>
  <text x="310" y="535" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Volume V (m³) →</text>

  <!-- Isothermal curve: P = k/V, mapped so that
       at V=80 (x=130), P=400 (y=100); at V=400 (x=530), P=80 (y=420)
       using path approximation for hyperbola PV=const -->
  <!-- Shaded area under curve (work done) -->
  <path d="M130,100 Q200,140 280,210 Q370,290 530,420 L530,500 L130,500 Z"
        fill="#ddd" stroke="none"/>
  <!-- Curve -->
  <path d="M130,100 Q200,140 280,210 Q370,290 530,420"
        fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Start point A -->
  <circle cx="130" cy="100" r="6" fill="#000"/>
  <text x="138" y="96" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">A (P₁,V₁)</text>
  <!-- dashed guides -->
  <line x1="80" y1="100" x2="130" y2="100" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="130" y1="100" x2="130" y2="500" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="118" y="514" font-family="Georgia,serif" font-size="10" text-anchor="middle" fill="#000">V₁</text>
  <text x="64" y="104" font-family="Georgia,serif" font-size="10" text-anchor="end" fill="#000">P₁</text>

  <!-- End point B -->
  <circle cx="530" cy="420" r="6" fill="#000"/>
  <text x="538" y="416" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">B (P₂,V₂)</text>
  <line x1="80" y1="420" x2="530" y2="420" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="530" y1="420" x2="530" y2="500" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="530" y="514" font-family="Georgia,serif" font-size="10" text-anchor="middle" fill="#000">V₂</text>
  <text x="64" y="424" font-family="Georgia,serif" font-size="10" text-anchor="end" fill="#000">P₂</text>

  <!-- Direction arrow on curve -->
  <polygon points="277,207 283,215 291,207" fill="#000"/>
  <text x="240" y="200" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">expansion →</text>

  <!-- Work label inside shaded area -->
  <text x="290" y="390" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">W = area</text>
  <text x="282" y="405" font-family="Georgia,serif" font-size="11" fill="#000">under curve</text>

  <!-- Isotherm label -->
  <text x="430" y="300" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">PV = nRT</text>
  <text x="424" y="314" font-family="Georgia,serif" font-size="10" fill="#000">(T = const.)</text>

  <!-- Info box -->
  <rect x="600" y="60" width="175" height="160" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="610" y="78" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Ideal Gas Laws:</text>
  <text x="610" y="95" font-family="Georgia,serif" font-size="10" fill="#000">PV = nRT</text>
  <text x="610" y="112" font-family="Georgia,serif" font-size="10" fill="#000">Isothermal: T = const</text>
  <text x="610" y="128" font-family="Georgia,serif" font-size="10" fill="#000">Isobaric: P = const</text>
  <text x="610" y="144" font-family="Georgia,serif" font-size="10" fill="#000">Isochoric: V = const</text>
  <text x="610" y="160" font-family="Georgia,serif" font-size="10" fill="#000">Adiabatic: Q = 0</text>
  <line x1="610" y1="168" x2="763" y2="168" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="610" y="182" font-family="Georgia,serif" font-size="10" fill="#000">Work done by gas:</text>
  <text x="610" y="196" font-family="Georgia,serif" font-size="10" fill="#000">W = nRT ln(V₂/V₁)</text>
  <text x="610" y="212" font-family="Georgia,serif" font-size="9" fill="#555">(isothermal expansion)</text>
</svg>`;

  // ─── CARNOT CYCLE ─────────────────────────────────────────────────────────
  static carnotCycleSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="700px" viewBox="0 0 900 700">

  <!-- Title -->
  <text x="300" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        text-anchor="middle" fill="#000">Carnot Cycle — P-V Diagram</text>
  <text x="300" y="44" font-family="Georgia,serif" font-size="10" text-anchor="middle" fill="#444">
    Ideal reversible heat engine: Th = 500 K, Tc = 300 K
  </text>

  <!-- Axes -->
  <line x1="80" y1="50" x2="80" y2="500" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="500" x2="600" y2="500" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="76,54 80,40 84,54" fill="#000"/>
  <polygon points="596,496 610,500 596,504" fill="#000"/>
  <text x="28" y="280" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" transform="rotate(-90,28,280)">Pressure P</text>
  <text x="320" y="535" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Volume V →</text>

  <!-- Carnot cycle: 4 corners approximately at:
       A(130,100), B(420,180), C(480,380), D(160,290)
       1→2 isothermal expansion at Th (A to B, upper curve)
       2→3 adiabatic expansion (B to C)
       3→4 isothermal compression at Tc (C to D, lower curve)
       4→1 adiabatic compression (D to A) -->

  <!-- Shaded cycle area -->
  <path d="M130,100 Q270,115 420,180 Q460,270 480,380 Q330,370 160,290 Q130,200 130,100 Z"
        fill="#ddd" stroke="none"/>

  <!-- 1→2 Isothermal expansion at Th (top curve, A→B) -->
  <path d="M130,100 Q270,115 420,180"
        fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Arrow mid-curve -->
  <polygon points="268,112 276,118 272,107" fill="#000"/>

  <!-- 2→3 Adiabatic expansion (B→C) -->
  <path d="M420,180 Q460,270 480,380"
        fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="8,4"/>
  <polygon points="464,278 470,286 475,274" fill="#000"/>

  <!-- 3→4 Isothermal compression at Tc (bottom, C→D) -->
  <path d="M480,380 Q330,370 160,290"
        fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>
  <polygon points="318,368 310,362 314,373" fill="#000"/>

  <!-- 4→1 Adiabatic compression (D→A) -->
  <path d="M160,290 Q130,200 130,100"
        fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="8,4"/>
  <polygon points="129,192 134,182 139,192" fill="#000"/>

  <!-- Corner points -->
  <circle cx="130" cy="100" r="6" fill="#000"/>
  <text x="100" y="95" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">A</text>
  <circle cx="420" cy="180" r="6" fill="#000"/>
  <text x="426" y="175" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">B</text>
  <circle cx="480" cy="380" r="6" fill="#000"/>
  <text x="486" y="375" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">C</text>
  <circle cx="160" cy="290" r="6" fill="#000"/>
  <text x="130" y="286" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">D</text>

  <!-- Process labels -->
  <text x="240" y="98" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">① Isothermal expansion (Th)</text>
  <text x="455" y="260" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">② Adiabatic</text>
  <text x="452" y="273" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">   expansion</text>
  <text x="270" y="400" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">③ Isothermal compression (Tc)</text>
  <text x="88" y="200" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">④ Adiabatic</text>
  <text x="84" y="213" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">   compression</text>

  <!-- Work label -->
  <text x="255" y="258" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">W = Q_h − Q_c</text>
  <text x="265" y="274" font-family="Georgia,serif" font-size="11" fill="#000">(net work = enclosed area)</text>

  <!-- Heat flow diagram (right side) -->
  <rect x="630" y="60" width="230" height="420" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="745" y="82" font-family="Georgia,serif" font-size="12" font-weight="bold"
        text-anchor="middle" fill="#000">Energy Flow</text>

  <!-- Hot reservoir -->
  <rect x="650" y="95" width="190" height="50" rx="4" fill="#eee" stroke="#000" stroke-width="2"/>
  <text x="745" y="118" font-family="Georgia,serif" font-size="12" font-weight="bold"
        text-anchor="middle" fill="#000">Hot Reservoir (Th)</text>
  <text x="745" y="133" font-family="Georgia,serif" font-size="10"
        text-anchor="middle" fill="#000">Th = 500 K</text>

  <!-- Q_h arrow downward -->
  <line x1="745" y1="145" x2="745" y2="210" stroke="#000" stroke-width="3"/>
  <polygon points="740,206 745,220 750,206" fill="#000"/>
  <text x="752" y="183" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Q_h</text>

  <!-- Engine box -->
  <rect x="680" y="220" width="130" height="60" rx="4" fill="#eee" stroke="#000" stroke-width="2"/>
  <text x="745" y="248" font-family="Georgia,serif" font-size="12" font-weight="bold"
        text-anchor="middle" fill="#000">ENGINE</text>
  <text x="745" y="264" font-family="Georgia,serif" font-size="10"
        text-anchor="middle" fill="#000">(Carnot)</text>

  <!-- W arrow rightward -->
  <line x1="810" y1="250" x2="850" y2="250" stroke="#000" stroke-width="3"/>
  <polygon points="846,245 860,250 846,255" fill="#000"/>
  <text x="824" y="242" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">W</text>

  <!-- Q_c arrow downward -->
  <line x1="745" y1="280" x2="745" y2="345" stroke="#000" stroke-width="3"/>
  <polygon points="740,341 745,355 750,341" fill="#000"/>
  <text x="752" y="318" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Q_c</text>

  <!-- Cold reservoir -->
  <rect x="650" y="355" width="190" height="50" rx="4" fill="#eee" stroke="#000" stroke-width="2"/>
  <text x="745" y="378" font-family="Georgia,serif" font-size="12" font-weight="bold"
        text-anchor="middle" fill="#000">Cold Reservoir (Tc)</text>
  <text x="745" y="393" font-family="Georgia,serif" font-size="10"
        text-anchor="middle" fill="#000">Tc = 300 K</text>

  <!-- Efficiency formulae -->
  <rect x="630" y="420" width="230" height="80" rx="4" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="640" y="438" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Efficiency:</text>
  <text x="640" y="455" font-family="Georgia,serif" font-size="11" fill="#000">η = 1 − Tc/Th</text>
  <text x="640" y="471" font-family="Georgia,serif" font-size="11" fill="#000">η = 1 − 300/500 = 0.40</text>
  <text x="640" y="487" font-family="Georgia,serif" font-size="10" fill="#000">η = 40%   (maximum possible)</text>

  <!-- Legend: solid = isothermal, dashed = adiabatic -->
  <rect x="80" y="548" width="300" height="44" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="92" y1="563" x2="120" y2="563" stroke="#000" stroke-width="3"/>
  <text x="126" y="567" font-family="Georgia,serif" font-size="10" fill="#000">Isothermal process</text>
  <line x1="92" y1="583" x2="120" y2="583" stroke="#000" stroke-width="3" stroke-dasharray="8,4"/>
  <text x="126" y="587" font-family="Georgia,serif" font-size="10" fill="#000">Adiabatic process</text>
</svg>`;

  // ─── HEAT TRANSFER MODES ──────────────────────────────────────────────────
  static heatTransferModesSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <!-- Title -->
  <text x="500" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        text-anchor="middle" fill="#000">Heat Transfer Modes</text>
  <text x="500" y="44" font-family="Georgia,serif" font-size="10" text-anchor="middle" fill="#444">
    Conduction · Convection · Radiation
  </text>

  <!-- ── PANEL 1: CONDUCTION ── -->
  <rect x="20" y="55" width="300" height="490" rx="6" fill="none" stroke="#000" stroke-width="2"/>
  <text x="170" y="75" font-family="Georgia,serif" font-size="13" font-weight="bold"
        text-anchor="middle" fill="#000">1. Conduction</text>

  <!-- Metal rod -->
  <rect x="50" y="120" width="240" height="60" rx="4" fill="#eee" stroke="#000" stroke-width="2.5"/>
  <!-- Hot end hatch -->
  <line x1="50" y1="120" x2="50" y2="180" stroke="#000" stroke-width="6"/>
  <text x="60" y="145" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">HOT</text>
  <text x="56" y="160" font-family="Georgia,serif" font-size="10" fill="#000">T_H</text>
  <!-- Cold end -->
  <line x1="290" y1="120" x2="290" y2="180" stroke="#000" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="240" y="145" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">COLD</text>
  <text x="248" y="160" font-family="Georgia,serif" font-size="10" fill="#000">T_C</text>

  <!-- Heat flow arrows through rod -->
  <polygon points="128,143 142,150 128,157" fill="#000"/>
  <polygon points="158,143 172,150 158,157" fill="#000"/>
  <polygon points="188,143 202,150 188,157" fill="#000"/>
  <polygon points="218,143 232,150 218,157" fill="#000"/>

  <!-- Particles in rod (vibrating lattice) -->
  <circle cx="95"  cy="150" r="5" fill="#000"/>
  <circle cx="130" cy="150" r="5" fill="#000"/>
  <circle cx="165" cy="150" r="5" fill="#000"/>
  <circle cx="200" cy="150" r="5" fill="#000"/>
  <circle cx="235" cy="150" r="5" fill="#000"/>
  <!-- vibration marks -->
  <line x1="95"  y1="140" x2="95"  y2="130" stroke="#000" stroke-width="1.5"/>
  <line x1="130" y1="140" x2="130" y2="132" stroke="#000" stroke-width="1.5"/>
  <line x1="165" y1="140" x2="165" y2="134" stroke="#000" stroke-width="1.5"/>
  <line x1="200" y1="140" x2="200" y2="136" stroke="#000" stroke-width="1.5"/>

  <text x="170" y="210" font-family="Georgia,serif" font-size="10" text-anchor="middle"
        font-style="italic" fill="#000">Q → flows hot to cold</text>
  <text x="170" y="225" font-family="Georgia,serif" font-size="10" text-anchor="middle"
        font-style="italic" fill="#000">via lattice vibration</text>

  <!-- Fourier formula box -->
  <rect x="40" y="240" width="260" height="60" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="170" y="258" font-family="Georgia,serif" font-size="11" font-weight="bold"
        text-anchor="middle" fill="#000">Fourier's Law:</text>
  <text x="170" y="275" font-family="Georgia,serif" font-size="11"
        text-anchor="middle" fill="#000">Q/t = kA(T_H − T_C) / L</text>
  <text x="170" y="290" font-family="Georgia,serif" font-size="9"
        text-anchor="middle" fill="#555">k = thermal conductivity</text>

  <!-- Example conductors list -->
  <text x="50" y="320" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Good conductors:</text>
  <text x="50" y="334" font-family="Georgia,serif" font-size="10" fill="#000">Silver (429), Copper (401), Aluminium (237)</text>
  <text x="50" y="348" font-family="Georgia,serif" font-size="9" fill="#555">values in W/m·K</text>
  <text x="50" y="366" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Poor conductors (insulators):</text>
  <text x="50" y="380" font-family="Georgia,serif" font-size="10" fill="#000">Air (0.026), Wood (~0.15), Glass (1.0)</text>

  <!-- ── PANEL 2: CONVECTION ── -->
  <rect x="345" y="55" width="300" height="490" rx="6" fill="none" stroke="#000" stroke-width="2"/>
  <text x="495" y="75" font-family="Georgia,serif" font-size="13" font-weight="bold"
        text-anchor="middle" fill="#000">2. Convection</text>

  <!-- Fluid container -->
  <rect x="375" y="120" width="240" height="200" rx="4" fill="none" stroke="#000" stroke-width="2.5"/>

  <!-- Hot base -->
  <rect x="375" y="310" width="240" height="14" rx="2" fill="#888" stroke="#000" stroke-width="2"/>
  <text x="495" y="322" font-family="Georgia,serif" font-size="9" text-anchor="middle" fill="#fff">HEAT SOURCE</text>

  <!-- Convection cells (circulation arrows) -->
  <!-- Left cell: up the middle, over, down the side -->
  <path d="M430,300 Q420,250 420,180 Q420,140 450,130 Q470,125 490,130"
        fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="487,121 494,133 481,133" fill="#000"/>
  <path d="M490,130 Q530,135 560,160 Q580,200 570,270 Q565,300 560,305"
        fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="554,299 561,310 567,299" fill="#000"/>

  <!-- Hot fluid rises label -->
  <text x="415" y="220" font-family="Georgia,serif" font-size="9" fill="#000">warm</text>
  <text x="412" y="232" font-family="Georgia,serif" font-size="9" fill="#000">fluid rises</text>
  <text x="548" y="220" font-family="Georgia,serif" font-size="9" fill="#000">cool</text>
  <text x="543" y="232" font-family="Georgia,serif" font-size="9" fill="#000">fluid sinks</text>

  <!-- Fluid particles -->
  <circle cx="430" cy="170" r="4" fill="#000"/>
  <circle cx="450" cy="145" r="4" fill="#000"/>
  <circle cx="540" cy="260" r="4" fill="#000"/>
  <circle cx="520" cy="290" r="4" fill="#000"/>

  <text x="495" y="358" font-family="Georgia,serif" font-size="10" text-anchor="middle"
        font-style="italic" fill="#000">Fluid carries heat by bulk motion</text>
  <text x="495" y="373" font-family="Georgia,serif" font-size="10" text-anchor="middle"
        font-style="italic" fill="#000">Natural (free) or Forced</text>

  <!-- Newton's Law of Cooling box -->
  <rect x="365" y="385" width="260" height="60" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="495" y="403" font-family="Georgia,serif" font-size="11" font-weight="bold"
        text-anchor="middle" fill="#000">Newton's Law of Cooling:</text>
  <text x="495" y="420" font-family="Georgia,serif" font-size="11"
        text-anchor="middle" fill="#000">Q/t = hA(T_s − T_∞)</text>
  <text x="495" y="436" font-family="Georgia,serif" font-size="9"
        text-anchor="middle" fill="#555">h = convective heat transfer coefficient</text>

  <!-- ── PANEL 3: RADIATION ── -->
  <rect x="670" y="55" width="305" height="490" rx="6" fill="none" stroke="#000" stroke-width="2"/>
  <text x="822" y="75" font-family="Georgia,serif" font-size="13" font-weight="bold"
        text-anchor="middle" fill="#000">3. Radiation</text>

  <!-- Radiating body (sun-like circle) -->
  <circle cx="750" cy="220" r="50" fill="#eee" stroke="#000" stroke-width="3"/>
  <text x="750" y="215" font-family="Georgia,serif" font-size="11" font-weight="bold"
        text-anchor="middle" fill="#000">Hot</text>
  <text x="750" y="230" font-family="Georgia,serif" font-size="11"
        text-anchor="middle" fill="#000">Body T</text>

  <!-- Radiation rays (wavy lines outward) -->
  <!-- Ray 1: right -->
  <path d="M800,220 Q812,213 820,220 Q832,227 840,220 Q852,213 860,220"
        fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="858,215 868,220 858,225" fill="#000"/>
  <!-- Ray 2: upper right -->
  <path d="M784,184 Q792,174 800,180 Q810,188 818,178 Q826,168 834,174"
        fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
  <polygon points="832,169 840,176 830,179" fill="#000"/>
  <!-- Ray 3: lower right -->
  <path d="M784,256 Q792,266 800,260 Q810,252 818,262 Q826,272 834,266"
        fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
  <polygon points="832,271 840,264 834,257" fill="#000"/>
  <!-- Ray 4: upward -->
  <path d="M750,170 Q743,158 750,150 Q757,142 750,132 Q743,122 750,114"
        fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
  <polygon points="745,115 750,104 755,115" fill="#000"/>
  <!-- Ray 5: downward -->
  <path d="M750,270 Q743,282 750,290 Q757,298 750,308 Q743,318 750,326"
        fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
  <polygon points="745,325 750,336 755,325" fill="#000"/>

  <!-- EM wave label -->
  <text x="870" y="215" font-family="Georgia,serif" font-size="9" fill="#000">EM waves</text>
  <text x="868" y="228" font-family="Georgia,serif" font-size="9" fill="#000">(infrared)</text>
  <text x="868" y="241" font-family="Georgia,serif" font-size="9" fill="#000">no medium</text>
  <text x="868" y="254" font-family="Georgia,serif" font-size="9" fill="#000">required</text>

  <text x="822" y="360" font-family="Georgia,serif" font-size="10" text-anchor="middle"
        font-style="italic" fill="#000">Energy transferred as</text>
  <text x="822" y="375" font-family="Georgia,serif" font-size="10" text-anchor="middle"
        font-style="italic" fill="#000">electromagnetic waves</text>

  <!-- Stefan-Boltzmann law box -->
  <rect x="680" y="390" width="280" height="75" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="820" y="408" font-family="Georgia,serif" font-size="11" font-weight="bold"
        text-anchor="middle" fill="#000">Stefan-Boltzmann Law:</text>
  <text x="820" y="426" font-family="Georgia,serif" font-size="11"
        text-anchor="middle" fill="#000">P = εσAT⁴</text>
  <text x="820" y="443" font-family="Georgia,serif" font-size="9"
        text-anchor="middle" fill="#555">σ = 5.67×10⁻⁸ W/m²K⁴</text>
  <text x="820" y="458" font-family="Georgia,serif" font-size="9"
        text-anchor="middle" fill="#555">ε = emissivity (0–1)</text>
</svg>`;

  // ─── KINETIC THEORY PARTICLES ─────────────────────────────────────────────
  static kineticTheoryParticlesSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="700px" viewBox="0 0 700 700">

  <!-- Title -->
  <text x="350" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        text-anchor="middle" fill="#000">Kinetic Theory of Gases</text>
  <text x="350" y="44" font-family="Georgia,serif" font-size="10" text-anchor="middle" fill="#444">
    Gas particles in random motion, T = 300 K
  </text>

  <!-- Container -->
  <rect x="60" y="60" width="480" height="480" rx="6" fill="none" stroke="#000" stroke-width="4"/>

  <!-- Gas particles with velocity arrows (varied speeds/directions) -->
  <!-- Particle 1 -->
  <circle cx="120" cy="120" r="10" fill="#000"/>
  <line x1="120" y1="120" x2="155" y2="100" stroke="#000" stroke-width="2"/>
  <polygon points="151,93 158,102 147,105" fill="#000"/>
  <!-- Particle 2 -->
  <circle cx="200" cy="160" r="10" fill="#000"/>
  <line x1="200" y1="160" x2="200" y2="120" stroke="#000" stroke-width="2"/>
  <polygon points="195,122 200,110 205,122" fill="#000"/>
  <!-- Particle 3 -->
  <circle cx="310" cy="130" r="10" fill="#000"/>
  <line x1="310" y1="130" x2="345" y2="155" stroke="#000" stroke-width="2"/>
  <polygon points="341,163 351,152 340,148" fill="#000"/>
  <!-- Particle 4 -->
  <circle cx="430" cy="110" r="10" fill="#000"/>
  <line x1="430" y1="110" x2="395" y2="90" stroke="#000" stroke-width="2"/>
  <polygon points="395,82 392,95 403,94" fill="#000"/>
  <!-- Particle 5 -->
  <circle cx="500" cy="180" r="10" fill="#000"/>
  <line x1="500" y1="180" x2="520" y2="210" stroke="#000" stroke-width="2"/>
  <polygon points="528,207 522,218 512,211" fill="#000"/>
  <!-- Particle 6 -->
  <circle cx="150" cy="260" r="10" fill="#000"/>
  <line x1="150" y1="260" x2="115" y2="240" stroke="#000" stroke-width="2"/>
  <polygon points="113,232 110,245 121,244" fill="#000"/>
  <!-- Particle 7 -->
  <circle cx="260" cy="240" r="10" fill="#000"/>
  <line x1="260" y1="240" x2="295" y2="220" stroke="#000" stroke-width="2"/>
  <polygon points="291,212 298,223 287,225" fill="#000"/>
  <!-- Particle 8 -->
  <circle cx="390" cy="270" r="10" fill="#000"/>
  <line x1="390" y1="270" x2="360" y2="300" stroke="#000" stroke-width="2"/>
  <polygon points="352,302 360,312 366,300" fill="#000"/>
  <!-- Particle 9 -->
  <circle cx="490" cy="290" r="10" fill="#000"/>
  <line x1="490" y1="290" x2="510" y2="255" stroke="#000" stroke-width="2"/>
  <polygon points="518,255 512,243 504,254" fill="#000"/>
  <!-- Particle 10 -->
  <circle cx="120" cy="380" r="10" fill="#000"/>
  <line x1="120" y1="380" x2="145" y2="410" stroke="#000" stroke-width="2"/>
  <polygon points="153,408 147,420 137,411" fill="#000"/>
  <!-- Particle 11 -->
  <circle cx="240" cy="360" r="10" fill="#000"/>
  <line x1="240" y1="360" x2="205" y2="380" stroke="#000" stroke-width="2"/>
  <polygon points="198,376 198,389 209,383" fill="#000"/>
  <!-- Particle 12 -->
  <circle cx="350" cy="400" r="10" fill="#000"/>
  <line x1="350" y1="400" x2="385" y2="375" stroke="#000" stroke-width="2"/>
  <polygon points="382,367 391,377 381,381" fill="#000"/>
  <!-- Particle 13 -->
  <circle cx="460" cy="390" r="10" fill="#000"/>
  <line x1="460" y1="390" x2="490" y2="420" stroke="#000" stroke-width="2"/>
  <polygon points="498,418 492,430 482,422" fill="#000"/>
  <!-- Particle 14 -->
  <circle cx="180" cy="470" r="10" fill="#000"/>
  <line x1="180" y1="470" x2="150" y2="445" stroke="#000" stroke-width="2"/>
  <polygon points="143,442 148,430 157,440" fill="#000"/>
  <!-- Particle 15 -->
  <circle cx="310" cy="490" r="10" fill="#000"/>
  <line x1="310" y1="490" x2="335" y2="460" stroke="#000" stroke-width="2"/>
  <polygon points="330,452 340,462 330,465" fill="#000"/>
  <!-- Particle 16 -->
  <circle cx="440" cy="480" r="10" fill="#000"/>
  <line x1="440" y1="480" x2="415" y2="508" stroke="#000" stroke-width="2"/>
  <polygon points="408,511 412,523 420,513" fill="#000"/>

  <!-- Pressure annotation: particle bouncing off wall -->
  <text x="548" y="280" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Pressure</text>
  <text x="548" y="295" font-family="Georgia,serif" font-size="10" fill="#000">from particle</text>
  <text x="548" y="308" font-family="Georgia,serif" font-size="10" fill="#000">collisions</text>
  <text x="548" y="321" font-family="Georgia,serif" font-size="10" fill="#000">with walls</text>
  <!-- Arrow pointing to right wall -->
  <line x1="548" y1="290" x2="544" y2="290" stroke="#000" stroke-width="1.5"/>
  <polygon points="542,285 537,290 542,295" fill="#000"/>

  <!-- Key equations box -->
  <rect x="60" y="565" width="480" height="120" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="300" y="583" font-family="Georgia,serif" font-size="11" font-weight="bold"
        text-anchor="middle" fill="#000">Kinetic Theory — Key Results:</text>
  <text x="80" y="600" font-family="Georgia,serif" font-size="10" fill="#000">PV = NkT = nRT</text>
  <text x="80" y="616" font-family="Georgia,serif" font-size="10" fill="#000">Average KE per molecule: ½mv²_rms = (3/2)kT</text>
  <text x="80" y="632" font-family="Georgia,serif" font-size="10" fill="#000">v_rms = √(3RT/M)   |   v_avg = √(8RT/πM)</text>
  <text x="80" y="648" font-family="Georgia,serif" font-size="10" fill="#000">P = (1/3)ρ v²_rms   |   k = R/N_A = 1.38×10⁻²³ J/K</text>
  <text x="80" y="664" font-family="Georgia,serif" font-size="9" fill="#555">Assumptions: point masses, elastic collisions, no intermolecular forces</text>
  <text x="80" y="678" font-family="Georgia,serif" font-size="9" fill="#555">Maxwell-Boltzmann distribution describes speed distribution</text>
</svg>`;

  // ─── ELECTRIC FIELD LINES ─────────────────────────────────────────────────
  static electricFieldLinesSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        text-anchor="middle" fill="#000">Electric Field Lines — Dipole (+Q and −Q)</text>
  <text x="400" y="44" font-family="Georgia,serif" font-size="10" text-anchor="middle" fill="#444">
    Field lines leave +Q and terminate on −Q; arrows show direction of E
  </text>

  <!-- Charge centres: +Q at (220,300), −Q at (580,300) -->

  <!-- ── Field lines (curved arcs from +Q to −Q) ── -->
  <!-- Direct central line -->
  <path d="M238,300 Q400,300 562,300" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="390,296 402,300 390,304" fill="#000"/>

  <!-- Upper lines -->
  <path d="M232,283 Q400,240 568,283" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
  <polygon points="388,236 400,241 389,247" fill="#000"/>

  <path d="M228,266 Q400,180 572,266" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
  <polygon points="386,176 398,182 387,188" fill="#000"/>

  <path d="M225,248 Q400,130 575,248" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
  <polygon points="385,127 397,133 385,140" fill="#000"/>

  <path d="M223,232 Q400,80 577,232" fill="none" stroke="#000" stroke-width="1.8" stroke-linecap="round"/>
  <polygon points="384,77 396,84 384,91" fill="#000"/>

  <path d="M222,218 Q280,100 400,70 Q520,100 578,218" fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="6,3"/>
  <polygon points="398,66 408,74 397,78" fill="#000"/>

  <!-- Lower lines (mirror) -->
  <path d="M232,317 Q400,360 568,317" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
  <polygon points="388,359 400,364 389,370" fill="#000"/>

  <path d="M228,334 Q400,420 572,334" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
  <polygon points="386,421 398,427 387,433" fill="#000"/>

  <path d="M225,352 Q400,470 575,352" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
  <polygon points="385,471 397,477 385,483" fill="#000"/>

  <path d="M223,368 Q400,520 577,368" fill="none" stroke="#000" stroke-width="1.8" stroke-linecap="round"/>
  <polygon points="384,521 396,527 384,534" fill="#000"/>

  <path d="M222,382 Q280,500 400,530 Q520,500 578,382" fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="6,3"/>
  <polygon points="398,534 408,526 397,523" fill="#000"/>

  <!-- ── Charges ── -->
  <!-- +Q charge -->
  <circle cx="220" cy="300" r="28" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="220" y="306" font-family="Georgia,serif" font-size="18" font-weight="bold"
        text-anchor="middle" fill="#000">+Q</text>
  <!-- −Q charge -->
  <circle cx="580" cy="300" r="28" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="580" y="306" font-family="Georgia,serif" font-size="18" font-weight="bold"
        text-anchor="middle" fill="#000">−Q</text>

  <!-- Equipotential lines (dashed) — roughly perpendicular to field lines -->
  <ellipse cx="300" cy="300" rx="40" ry="80" fill="none" stroke="#000"
           stroke-width="1.5" stroke-dasharray="4,4"/>
  <ellipse cx="400" cy="300" rx="20" ry="150" fill="none" stroke="#000"
           stroke-width="1.5" stroke-dasharray="4,4"/>
  <ellipse cx="500" cy="300" rx="40" ry="80" fill="none" stroke="#000"
           stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- Equipotential label -->
  <text x="408" y="145" font-family="Georgia,serif" font-size="10" fill="#000">--- Equipotential</text>

  <!-- Info box -->
  <rect x="20" y="430" width="220" height="130" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="30" y="448" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Relations:</text>
  <text x="30" y="465" font-family="Georgia,serif" font-size="10" fill="#000">Coulomb: F = kQ₁Q₂/r²</text>
  <text x="30" y="481" font-family="Georgia,serif" font-size="10" fill="#000">Field:   E = F/q = kQ/r²</text>
  <text x="30" y="497" font-family="Georgia,serif" font-size="10" fill="#000">Potential: V = kQ/r</text>
  <text x="30" y="513" font-family="Georgia,serif" font-size="10" fill="#000">E = −dV/dr</text>
  <text x="30" y="529" font-family="Georgia,serif" font-size="9" fill="#555">Field ⊥ equipotential surfaces</text>
  <text x="30" y="543" font-family="Georgia,serif" font-size="9" fill="#555">k = 8.99×10⁹ N·m²/C²</text>

  <!-- Rules box -->
  <rect x="560" y="430" width="220" height="130" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="570" y="448" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Field Line Rules:</text>
  <text x="570" y="465" font-family="Georgia,serif" font-size="10" fill="#000">• Start on + charges</text>
  <text x="570" y="481" font-family="Georgia,serif" font-size="10" fill="#000">• End on − charges</text>
  <text x="570" y="497" font-family="Georgia,serif" font-size="10" fill="#000">• Never cross each other</text>
  <text x="570" y="513" font-family="Georgia,serif" font-size="10" fill="#000">• Density ∝ field strength</text>
  <text x="570" y="529" font-family="Georgia,serif" font-size="10" fill="#000">• ⊥ to conducting surface</text>
</svg>`;

  // ─── CIRCUIT DIAGRAM ──────────────────────────────────────────────────────
  static circuitDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="300" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        text-anchor="middle" fill="#000">Electric Circuit Diagram</text>
  <text x="300" y="44" font-family="Georgia,serif" font-size="10" text-anchor="middle" fill="#444">
    Series circuit: Battery · Resistor · Capacitor · Switch (closed)
  </text>

  <!-- Main loop corners: (80,80) (520,80) (520,400) (80,400) -->

  <!-- Top wire: 80,80 → 200,80 (battery gap 200→280) 280,80 → 340,80 (resistor 340→460) 460,80 → 520,80 -->
  <line x1="80"  y1="80" x2="200" y2="80" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="280" y1="80" x2="340" y2="80" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="460" y1="80" x2="520" y2="80" stroke="#000" stroke-width="3" stroke-linecap="round"/>

  <!-- Right wire: 520,80 → 520,240 (capacitor 240→320) 520,320 → 520,400 -->
  <line x1="520" y1="80"  x2="520" y2="240" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="520" y1="320" x2="520" y2="400" stroke="#000" stroke-width="3" stroke-linecap="round"/>

  <!-- Bottom wire: 520,400 → 340,400 (switch 240→340) 240,400 → 80,400 -->
  <line x1="520" y1="400" x2="340" y2="400" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="240" y1="400" x2="80"  y2="400" stroke="#000" stroke-width="3" stroke-linecap="round"/>

  <!-- Left wire: 80,400 → 80,80 -->
  <line x1="80" y1="400" x2="80" y2="80" stroke="#000" stroke-width="3" stroke-linecap="round"/>

  <!-- ── Battery (top left, horizontal, 200→280 on y=80) ── -->
  <line x1="208" y1="64" x2="208" y2="96" stroke="#000" stroke-width="4"/>
  <line x1="220" y1="70" x2="220" y2="90" stroke="#000" stroke-width="2"/>
  <line x1="232" y1="64" x2="232" y2="96" stroke="#000" stroke-width="4"/>
  <line x1="244" y1="70" x2="244" y2="90" stroke="#000" stroke-width="2"/>
  <line x1="256" y1="64" x2="256" y2="96" stroke="#000" stroke-width="4"/>
  <line x1="268" y1="70" x2="268" y2="90" stroke="#000" stroke-width="2"/>
  <!-- stubs -->
  <line x1="200" y1="80" x2="208" y2="80" stroke="#000" stroke-width="3"/>
  <line x1="268" y1="80" x2="280" y2="80" stroke="#000" stroke-width="3"/>
  <text x="200" y="60" font-family="Georgia,serif" font-size="10" fill="#000">+</text>
  <text x="272" y="60" font-family="Georgia,serif" font-size="10" fill="#000">−</text>
  <text x="230" y="112" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">12 V</text>
  <text x="225" y="126" font-family="Georgia,serif" font-size="9" fill="#555">(Battery)</text>

  <!-- ── Resistor (top right, 340→460 on y=80) ── -->
  <polyline points="340,80 355,80 360,64 370,96 380,64 390,96 400,64 410,96 420,64 430,96 440,64 445,80 460,80"
            fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="388" y="58" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">R</text>
  <text x="378" y="112" font-family="Georgia,serif" font-size="11" fill="#000">100 Ω</text>
  <text x="374" y="126" font-family="Georgia,serif" font-size="9" fill="#555">(Resistor)</text>

  <!-- ── Capacitor (right wire, 520 x=520, y=240→320) ── -->
  <line x1="504" y1="252" x2="536" y2="252" stroke="#000" stroke-width="4"/>
  <line x1="504" y1="308" x2="536" y2="308" stroke="#000" stroke-width="4"/>
  <!-- stubs -->
  <line x1="520" y1="240" x2="520" y2="252" stroke="#000" stroke-width="3"/>
  <line x1="520" y1="308" x2="520" y2="320" stroke="#000" stroke-width="3"/>
  <text x="540" y="256" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">C</text>
  <text x="540" y="310" font-family="Georgia,serif" font-size="10" fill="#000">10 μF</text>
  <text x="540" y="284" font-family="Georgia,serif" font-size="9" fill="#555">(Capacitor)</text>

  <!-- ── Switch (bottom wire, closed, 240→340 on y=400) ── -->
  <circle cx="250" cy="400" r="5" fill="#000"/>
  <!-- closed switch: line from node to node with slight angle to show it's a switch -->
  <line x1="255" y1="400" x2="330" y2="388" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <circle cx="340" cy="400" r="5" fill="#000"/>
  <text x="275" y="422" font-family="Georgia,serif" font-size="11" fill="#000">Switch (closed)</text>

  <!-- Current direction arrows -->
  <polygon points="76,235 80,220 84,235" fill="#000"/>
  <text x="42" y="228" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">I ↑</text>
  <polygon points="295,76 310,80 295,84" fill="#000"/>
  <polygon points="516,185 520,170 524,185" fill="#000"/>
  <polygon points="305,404 290,400 305,396" fill="#000"/>

  <!-- Current label -->
  <text x="90" y="250" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">I</text>

  <!-- Junction dots at corners -->
  <circle cx="80"  cy="80"  r="5" fill="#000"/>
  <circle cx="520" cy="80"  r="5" fill="#000"/>
  <circle cx="520" cy="400" r="5" fill="#000"/>
  <circle cx="80"  cy="400" r="5" fill="#000"/>

  <!-- Info box -->
  <rect x="40" y="440" width="560" height="130" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="50" y="460" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Series Circuit — Key Equations:</text>
  <text x="50" y="478" font-family="Georgia,serif" font-size="10" fill="#000">Current:     I = V / R_total    (same through all series components)</text>
  <text x="50" y="494" font-family="Georgia,serif" font-size="10" fill="#000">Ohm's Law:   V = IR            |   Resistance: R_total = R₁ + R₂ + …</text>
  <text x="50" y="510" font-family="Georgia,serif" font-size="10" fill="#000">Capacitor:   Q = CV            |   Time const: τ = RC = 100 × 10×10⁻⁶ = 1 ms</text>
  <text x="50" y="526" font-family="Georgia,serif" font-size="10" fill="#000">Power:       P = IV = I²R = V²/R</text>
  <text x="50" y="542" font-family="Georgia,serif" font-size="10" fill="#000">Kirchhoff Voltage Law: ΣV = 0 around any closed loop</text>
  <text x="50" y="558" font-family="Georgia,serif" font-size="9" fill="#555">Switch open → no current flows; capacitor holds charge after switch opens</text>
</svg>`;

  // ─── SERIES vs PARALLEL CIRCUITS ─────────────────────────────────────────
  static seriesParallelCircuitsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <!-- Title -->
  <text x="500" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        text-anchor="middle" fill="#000">Series vs. Parallel Circuits</text>
  <text x="500" y="44" font-family="Georgia,serif" font-size="10" text-anchor="middle" fill="#444">
    Three resistors (100 Ω, 200 Ω, 150 Ω) with 12 V source
  </text>

  <!-- ─── LEFT: SERIES ─── -->
  <text x="230" y="68" font-family="Georgia,serif" font-size="13" font-weight="bold"
        text-anchor="middle" fill="#000">SERIES</text>

  <!-- Loop: (60,90) → (400,90) → (400,400) → (60,400) → (60,90) -->
  <!-- Left wire with battery -->
  <line x1="60" y1="90"  x2="60" y2="160" stroke="#000" stroke-width="3"/>
  <!-- Battery -->
  <line x1="44" y1="168" x2="76" y2="168" stroke="#000" stroke-width="4"/>
  <line x1="50" y1="182" x2="70" y2="182" stroke="#000" stroke-width="2"/>
  <line x1="44" y1="196" x2="76" y2="196" stroke="#000" stroke-width="4"/>
  <line x1="50" y1="210" x2="70" y2="210" stroke="#000" stroke-width="2"/>
  <line x1="60" y1="160" x2="60" y2="168" stroke="#000" stroke-width="3"/>
  <line x1="60" y1="210" x2="60" y2="400" stroke="#000" stroke-width="3"/>
  <text x="28" y="195" font-family="Georgia,serif" font-size="10" fill="#000">12 V</text>
  <text x="78" y="172" font-family="Georgia,serif" font-size="10" fill="#000">+</text>
  <text x="78" y="216" font-family="Georgia,serif" font-size="10" fill="#000">−</text>

  <!-- Top wire with three resistors -->
  <line x1="60"  y1="90" x2="100" y2="90" stroke="#000" stroke-width="3"/>
  <!-- R1: 100→180 -->
  <polyline points="100,90 108,90 112,74 120,106 128,74 136,106 144,74 152,106 160,74 164,90 172,90"
            fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="126" y="68" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">R₁=100Ω</text>
  <!-- wire -->
  <line x1="172" y1="90" x2="192" y2="90" stroke="#000" stroke-width="3"/>
  <!-- R2: 192→272 -->
  <polyline points="192,90 200,90 204,74 212,106 220,74 228,106 236,74 244,106 252,74 256,90 264,90"
            fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="216" y="68" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">R₂=200Ω</text>
  <!-- wire -->
  <line x1="264" y1="90" x2="284" y2="90" stroke="#000" stroke-width="3"/>
  <!-- R3: 284→364 -->
  <polyline points="284,90 292,90 296,74 304,106 312,74 320,106 328,74 336,106 344,74 348,90 356,90"
            fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="306" y="68" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">R₃=150Ω</text>
  <!-- wire to right -->
  <line x1="356" y1="90" x2="400" y2="90" stroke="#000" stroke-width="3"/>

  <!-- Right wire and bottom -->
  <line x1="400" y1="90"  x2="400" y2="400" stroke="#000" stroke-width="3"/>
  <line x1="400" y1="400" x2="60"  y2="400" stroke="#000" stroke-width="3"/>

  <!-- Current arrow -->
  <polygon points="196,86 210,90 196,94" fill="#000"/>
  <text x="198" y="108" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">I</text>

  <!-- Series results box -->
  <rect x="60" y="420" width="340" height="120" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="70" y="440" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Series Results:</text>
  <text x="70" y="458" font-family="Georgia,serif" font-size="10" fill="#000">R_total = 100+200+150 = 450 Ω</text>
  <text x="70" y="474" font-family="Georgia,serif" font-size="10" fill="#000">I = V/R = 12/450 ≈ 0.0267 A (same everywhere)</text>
  <text x="70" y="490" font-family="Georgia,serif" font-size="10" fill="#000">V₁ = IR₁ = 2.67 V</text>
  <text x="70" y="506" font-family="Georgia,serif" font-size="10" fill="#000">V₂ = IR₂ = 5.33 V</text>
  <text x="70" y="522" font-family="Georgia,serif" font-size="10" fill="#000">V₃ = IR₃ = 4.00 V  (V₁+V₂+V₃ = 12 V ✓)</text>

  <!-- Divider -->
  <line x1="500" y1="60" x2="500" y2="660" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- ─── RIGHT: PARALLEL ─── -->
  <text x="750" y="68" font-family="Georgia,serif" font-size="13" font-weight="bold"
        text-anchor="middle" fill="#000">PARALLEL</text>

  <!-- Left bus: x=540 (540,90)→(540,400) -->
  <!-- Right bus: x=960 (960,90)→(960,400) -->
  <!-- Battery on left side -->
  <line x1="540" y1="90"  x2="540" y2="160" stroke="#000" stroke-width="3"/>
  <line x1="524" y1="168" x2="556" y2="168" stroke="#000" stroke-width="4"/>
  <line x1="530" y1="182" x2="550" y2="182" stroke="#000" stroke-width="2"/>
  <line x1="524" y1="196" x2="556" y2="196" stroke="#000" stroke-width="4"/>
  <line x1="530" y1="210" x2="550" y2="210" stroke="#000" stroke-width="2"/>
  <line x1="540" y1="210" x2="540" y2="400" stroke="#000" stroke-width="3"/>
  <text x="506" y="195" font-family="Georgia,serif" font-size="10" fill="#000">12 V</text>
  <text x="558" y="172" font-family="Georgia,serif" font-size="10" fill="#000">+</text>
  <text x="558" y="216" font-family="Georgia,serif" font-size="10" fill="#000">−</text>

  <!-- Top and bottom rails -->
  <line x1="540" y1="90"  x2="960" y2="90"  stroke="#000" stroke-width="3"/>
  <line x1="540" y1="400" x2="960" y2="400" stroke="#000" stroke-width="3"/>
  <line x1="960" y1="90"  x2="960" y2="400" stroke="#000" stroke-width="3"/>

  <!-- R1 branch: x=620 -->
  <line x1="620" y1="90" x2="620" y2="155" stroke="#000" stroke-width="2.5"/>
  <polyline points="620,155 604,159 636,167 604,175 636,183 604,191 636,199 604,207 620,211"
            fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="620" y1="211" x2="620" y2="400" stroke="#000" stroke-width="2.5"/>
  <text x="644" y="186" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">R₁</text>
  <text x="644" y="200" font-family="Georgia,serif" font-size="10" fill="#000">100 Ω</text>
  <text x="644" y="214" font-family="Georgia,serif" font-size="10" fill="#000">I₁=0.12A</text>

  <!-- R2 branch: x=770 -->
  <line x1="770" y1="90" x2="770" y2="155" stroke="#000" stroke-width="2.5"/>
  <polyline points="770,155 754,159 786,167 754,175 786,183 754,191 786,199 754,207 770,211"
            fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="770" y1="211" x2="770" y2="400" stroke="#000" stroke-width="2.5"/>
  <text x="794" y="186" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">R₂</text>
  <text x="794" y="200" font-family="Georgia,serif" font-size="10" fill="#000">200 Ω</text>
  <text x="794" y="214" font-family="Georgia,serif" font-size="10" fill="#000">I₂=0.06A</text>

  <!-- R3 branch: x=900 -->
  <line x1="900" y1="90" x2="900" y2="155" stroke="#000" stroke-width="2.5"/>
  <polyline points="900,155 884,159 916,167 884,175 916,183 884,191 916,199 884,207 900,211"
            fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="900" y1="211" x2="900" y2="400" stroke="#000" stroke-width="2.5"/>
  <text x="924" y="186" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">R₃</text>
  <text x="924" y="200" font-family="Georgia,serif" font-size="10" fill="#000">150 Ω</text>
  <text x="924" y="214" font-family="Georgia,serif" font-size="10" fill="#000">I₃=0.08A</text>

  <!-- Junction dots -->
  <circle cx="620" cy="90"  r="5" fill="#000"/>
  <circle cx="770" cy="90"  r="5" fill="#000"/>
  <circle cx="900" cy="90"  r="5" fill="#000"/>
  <circle cx="620" cy="400" r="5" fill="#000"/>
  <circle cx="770" cy="400" r="5" fill="#000"/>
  <circle cx="900" cy="400" r="5" fill="#000"/>

  <!-- Total current arrow on top rail -->
  <polygon points="694,86 710,90 694,94" fill="#000"/>
  <text x="686" y="82" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">I_total</text>

  <!-- Parallel results box -->
  <rect x="528" y="420" width="440" height="130" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="538" y="440" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Parallel Results:</text>
  <text x="538" y="458" font-family="Georgia,serif" font-size="10" fill="#000">1/R_total = 1/100 + 1/200 + 1/150 = 0.0167  →  R_total ≈ 60 Ω</text>
  <text x="538" y="474" font-family="Georgia,serif" font-size="10" fill="#000">V across each = 12 V (same voltage in parallel)</text>
  <text x="538" y="490" font-family="Georgia,serif" font-size="10" fill="#000">I₁ = 12/100 = 0.12 A  |  I₂ = 12/200 = 0.06 A  |  I₃ = 12/150 = 0.08 A</text>
  <text x="538" y="506" font-family="Georgia,serif" font-size="10" fill="#000">I_total = 0.12 + 0.06 + 0.08 = 0.26 A</text>
  <text x="538" y="522" font-family="Georgia,serif" font-size="9" fill="#555">KCL: current into junction = current out of junction</text>
  <text x="538" y="538" font-family="Georgia,serif" font-size="9" fill="#555">Parallel R always less than smallest individual resistor</text>
</svg>`;

  // ─── ELECTRIC POTENTIAL vs DISTANCE ──────────────────────────────────────
  static potentialDistanceGraphSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="320" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        text-anchor="middle" fill="#000">Electric Potential vs. Distance</text>
  <text x="320" y="44" font-family="Georgia,serif" font-size="10" text-anchor="middle" fill="#444">
    V = kQ/r for a point charge Q = +10 μC
  </text>

  <!-- Axes -->
  <line x1="80" y1="50" x2="80" y2="480" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="480" x2="560" y2="480" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="76,54 80,40 84,54" fill="#000"/>
  <polygon points="556,476 570,480 556,484" fill="#000"/>

  <!-- Zero line (V=0 axis) -->
  <line x1="80" y1="480" x2="560" y2="480" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>

  <!-- Axis labels -->
  <text x="25" y="270" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" transform="rotate(-90,25,270)">Electric Potential V (kV)</text>
  <text x="300" y="516" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Distance r (m) →</text>

  <!-- Tick marks on x -->
  <line x1="160" y1="475" x2="160" y2="485" stroke="#000" stroke-width="2"/>
  <text x="158" y="498" font-family="Georgia,serif" font-size="9" text-anchor="middle" fill="#000">0.5</text>
  <line x1="240" y1="475" x2="240" y2="485" stroke="#000" stroke-width="2"/>
  <text x="238" y="498" font-family="Georgia,serif" font-size="9" text-anchor="middle" fill="#000">1.0</text>
  <line x1="320" y1="475" x2="320" y2="485" stroke="#000" stroke-width="2"/>
  <text x="318" y="498" font-family="Georgia,serif" font-size="9" text-anchor="middle" fill="#000">1.5</text>
  <line x1="400" y1="475" x2="400" y2="485" stroke="#000" stroke-width="2"/>
  <text x="398" y="498" font-family="Georgia,serif" font-size="9" text-anchor="middle" fill="#000">2.0</text>
  <line x1="480" y1="475" x2="480" y2="485" stroke="#000" stroke-width="2"/>
  <text x="478" y="498" font-family="Georgia,serif" font-size="9" text-anchor="middle" fill="#000">2.5</text>

  <!-- Tick marks on y -->
  <line x1="75" y1="380" x2="85" y2="380" stroke="#000" stroke-width="2"/>
  <text x="70" y="384" font-family="Georgia,serif" font-size="9" text-anchor="end" fill="#000">100</text>
  <line x1="75" y1="280" x2="85" y2="280" stroke="#000" stroke-width="2"/>
  <text x="70" y="284" font-family="Georgia,serif" font-size="9" text-anchor="end" fill="#000">200</text>
  <line x1="75" y1="180" x2="85" y2="180" stroke="#000" stroke-width="2"/>
  <text x="70" y="184" font-family="Georgia,serif" font-size="9" text-anchor="end" fill="#000">300</text>
  <line x1="75" y1="80"  x2="85" y2="80"  stroke="#000" stroke-width="2"/>
  <text x="70" y="84" font-family="Georgia,serif" font-size="9" text-anchor="end" fill="#000">400</text>

  <!-- V = kQ/r curve approximation (hyperbola)
       r=0.25: x=100, V=360kV: y=120; r=0.5: x=160, V=180: y=280;
       r=1.0: x=240, V=90: y=385; r=2.0: x=400, V=45: y=430 -->
  <path d="M100,60 Q130,100 160,280 Q200,370 240,405 Q320,435 400,450 Q480,460 550,465"
        fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Point annotations -->
  <circle cx="160" cy="280" r="5" fill="#000"/>
  <text x="168" y="275" font-family="Georgia,serif" font-size="10" fill="#000">r=0.5m, V=180kV</text>
  <line x1="80" y1="280" x2="160" y2="280" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="160" y1="280" x2="160" y2="480" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>

  <circle cx="240" cy="405" r="5" fill="#000"/>
  <text x="248" y="400" font-family="Georgia,serif" font-size="10" fill="#000">r=1.0m, V=90kV</text>
  <line x1="80"  y1="405" x2="240" y2="405" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="240" y1="405" x2="240" y2="480" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>

  <!-- Charge label -->
  <circle cx="90" cy="480" r="8" fill="#000"/>
  <text x="88" y="483" font-family="Georgia,serif" font-size="8" fill="#fff" text-anchor="middle">+</text>
  <text x="106" y="474" font-family="Georgia,serif" font-size="10" fill="#000">+Q source</text>

  <!-- 1/r label on curve -->
  <text x="300" y="340" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#000">V ∝ 1/r</text>

  <!-- Info box -->
  <rect x="580" y="60" width="190" height="180" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="590" y="78" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Relations:</text>
  <text x="590" y="96" font-family="Georgia,serif" font-size="10" fill="#000">V = kQ / r</text>
  <text x="590" y="112" font-family="Georgia,serif" font-size="10" fill="#000">E = kQ / r²</text>
  <text x="590" y="128" font-family="Georgia,serif" font-size="10" fill="#000">E = −dV/dr</text>
  <line x1="590" y1="136" x2="758" y2="136" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="590" y="152" font-family="Georgia,serif" font-size="10" fill="#000">k = 8.99×10⁹ N·m²/C²</text>
  <text x="590" y="168" font-family="Georgia,serif" font-size="10" fill="#000">Q = 10 μC = 10⁻⁵ C</text>
  <line x1="590" y1="176" x2="758" y2="176" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="590" y="192" font-family="Georgia,serif" font-size="10" fill="#000">Work done moving q:</text>
  <text x="590" y="208" font-family="Georgia,serif" font-size="10" fill="#000">W = q(V₁ − V₂)</text>
  <text x="590" y="224" font-family="Georgia,serif" font-size="9" fill="#555">V → 0 as r → ∞</text>
  <text x="590" y="234" font-family="Georgia,serif" font-size="9" fill="#555">V → ∞ as r → 0</text>
</svg>`;

  // ─── MAGNETIC FIELD LINES ─────────────────────────────────────────────────
  static magneticFieldLinesSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        text-anchor="middle" fill="#000">Magnetic Field Lines — Bar Magnet</text>
  <text x="400" y="44" font-family="Georgia,serif" font-size="10" text-anchor="middle" fill="#444">
    Field lines emerge from N pole and re-enter at S pole (external); continuous internally
  </text>

  <!-- ── Bar magnet (horizontal, centred at 400,300) ── -->
  <!-- N half (left) -->
  <rect x="240" y="270" width="120" height="60" rx="4" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="300" y="307" font-family="Georgia,serif" font-size="18" font-weight="bold"
        text-anchor="middle" fill="#000">N</text>
  <!-- S half (right) -->
  <rect x="360" y="270" width="120" height="60" rx="4" fill="#888" stroke="#000" stroke-width="3"/>
  <text x="420" y="307" font-family="Georgia,serif" font-size="18" font-weight="bold"
        text-anchor="middle" fill="#fff">S</text>
  <!-- Dividing line -->
  <line x1="360" y1="270" x2="360" y2="330" stroke="#000" stroke-width="2"/>

  <!-- ── External field lines from N (left face x=240) curving to S (right face x=480) ── -->

  <!-- Line 1: direct top path -->
  <path d="M300,270 Q300,210 360,180 Q420,150 420,270"
        fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="418,254 423,266 412,264" fill="#000"/>

  <!-- Line 2: wider arc top -->
  <path d="M300,270 Q280,160 360,110 Q440,60 480,270"
        fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="477,254 482,268 471,265" fill="#000"/>

  <!-- Line 3: widest arc top -->
  <path d="M270,285 Q180,100 360,70 Q540,40 530,285"
        fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
  <polygon points="528,271 533,286 521,282" fill="#000"/>

  <!-- Line 4: direct bottom path -->
  <path d="M300,330 Q300,390 360,420 Q420,450 420,330"
        fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="412,336 423,334 418,346" fill="#000"/>

  <!-- Line 5: wider arc bottom -->
  <path d="M300,330 Q280,440 360,490 Q440,540 480,330"
        fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="471,336 482,332 477,346" fill="#000"/>

  <!-- Line 6: widest arc bottom -->
  <path d="M270,315 Q180,500 360,530 Q540,560 530,315"
        fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
  <polygon points="521,318 533,314 528,329" fill="#000"/>

  <!-- Left external: lines going left of N -->
  <path d="M240,285 Q140,250 130,300 Q120,350 240,315"
        fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
  <polygon points="238,302 245,316 234,318" fill="#000"/>

  <!-- Right external: lines going right of S -->
  <path d="M480,285 Q580,250 590,300 Q600,350 480,315"
        fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
  <polygon points="482,302 475,316 486,318" fill="#000"/>

  <!-- Compass needles -->
  <!-- Upper right area -->
  <ellipse cx="560" cy="180" rx="16" ry="6" fill="none" stroke="#000" stroke-width="1.5"/>
  <polygon points="560,174 572,180 560,186" fill="#000"/>
  <text x="580" y="184" font-family="Georgia,serif" font-size="9" fill="#000">compass</text>

  <!-- Upper left -->
  <ellipse cx="150" cy="180" rx="16" ry="6" fill="none" stroke="#000" stroke-width="1.5" transform="rotate(160,150,180)"/>
  <polygon points="150,174 162,180 150,186" fill="#000" transform="rotate(160,150,180)"/>

  <!-- Labels -->
  <text x="196" y="308" font-family="Georgia,serif" font-size="11" fill="#000">Field lines</text>
  <text x="190" y="321" font-family="Georgia,serif" font-size="11" fill="#000">leave N pole</text>

  <text x="494" y="308" font-family="Georgia,serif" font-size="11" fill="#000">Field lines</text>
  <text x="492" y="321" font-family="Georgia,serif" font-size="11" fill="#000">enter S pole</text>

  <!-- Info box -->
  <rect x="20" y="440" width="240" height="130" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="30" y="458" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Magnetic Facts:</text>
  <text x="30" y="475" font-family="Georgia,serif" font-size="10" fill="#000">B field lines are closed loops</text>
  <text x="30" y="491" font-family="Georgia,serif" font-size="10" fill="#000">Monopoles do not exist</text>
  <text x="30" y="507" font-family="Georgia,serif" font-size="10" fill="#000">∇·B = 0 (Gauss's law for B)</text>
  <text x="30" y="523" font-family="Georgia,serif" font-size="10" fill="#000">Density ∝ field strength</text>
  <text x="30" y="539" font-family="Georgia,serif" font-size="10" fill="#000">Force: F = qv×B</text>
  <text x="30" y="555" font-family="Georgia,serif" font-size="9" fill="#555">Compass aligns with local B field</text>

  <!-- Right info box -->
  <rect x="540" y="440" width="230" height="130" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="550" y="458" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Biot-Savart Law:</text>
  <text x="550" y="475" font-family="Georgia,serif" font-size="10" fill="#000">dB = μ₀I dl×r̂ / (4πr²)</text>
  <text x="550" y="492" font-family="Georgia,serif" font-size="10" fill="#000">For long straight wire:</text>
  <text x="550" y="508" font-family="Georgia,serif" font-size="10" fill="#000">B = μ₀I / (2πr)</text>
  <text x="550" y="525" font-family="Georgia,serif" font-size="9" fill="#555">μ₀ = 4π×10⁻⁷ T·m/A</text>
  <text x="550" y="541" font-family="Georgia,serif" font-size="10" fill="#000">Solenoid: B = μ₀nI</text>
  <text x="550" y="557" font-family="Georgia,serif" font-size="9" fill="#555">n = turns per unit length</text>
</svg>`;

  // ─── ELECTROMAGNETIC INDUCTION ────────────────────────────────────────────
  static electromagneticInductionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        text-anchor="middle" fill="#000">Electromagnetic Induction</text>
  <text x="400" y="44" font-family="Georgia,serif" font-size="10" text-anchor="middle" fill="#444">
    Moving magnet induces current in coil (Faraday's Law / Lenz's Law)
  </text>

  <!-- ── Coil (solenoid cross-section, right half) ── -->
  <!-- Coil body outline -->
  <rect x="350" y="160" width="200" height="280" rx="8" fill="none" stroke="#000" stroke-width="3"/>
  <text x="450" y="158" font-family="Georgia,serif" font-size="11" text-anchor="middle" fill="#000">Coil (5 turns)</text>

  <!-- Coil windings (N and cross-section circles on left and right edges) -->
  <!-- Each turn shown as top-dot (current out ⊙) and bottom-cross (current in ⊗) -->
  <!-- Turn 1 -->
  <circle cx="350" cy="192" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="350" cy="192" r="3" fill="#000"/>  <!-- ⊙ out -->
  <circle cx="550" cy="192" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <line x1="543" y1="185" x2="557" y2="199" stroke="#000" stroke-width="2"/>
  <line x1="557" y1="185" x2="543" y2="199" stroke="#000" stroke-width="2"/>  <!-- ⊗ in -->
  <!-- Turn 2 -->
  <circle cx="350" cy="228" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="350" cy="228" r="3" fill="#000"/>
  <circle cx="550" cy="228" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <line x1="543" y1="221" x2="557" y2="235" stroke="#000" stroke-width="2"/>
  <line x1="557" y1="221" x2="543" y2="235" stroke="#000" stroke-width="2"/>
  <!-- Turn 3 -->
  <circle cx="350" cy="300" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="350" cy="300" r="3" fill="#000"/>
  <circle cx="550" cy="300" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <line x1="543" y1="293" x2="557" y2="307" stroke="#000" stroke-width="2"/>
  <line x1="557" y1="293" x2="543" y2="307" stroke="#000" stroke-width="2"/>
  <!-- Turn 4 -->
  <circle cx="350" cy="372" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="350" cy="372" r="3" fill="#000"/>
  <circle cx="550" cy="372" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <line x1="543" y1="365" x2="557" y2="379" stroke="#000" stroke-width="2"/>
  <line x1="557" y1="365" x2="543" y2="379" stroke="#000" stroke-width="2"/>
  <!-- Turn 5 -->
  <circle cx="350" cy="408" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="350" cy="408" r="3" fill="#000"/>
  <circle cx="550" cy="408" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <line x1="543" y1="401" x2="557" y2="415" stroke="#000" stroke-width="2"/>
  <line x1="557" y1="401" x2="543" y2="415" stroke="#000" stroke-width="2"/>

  <!-- ⊙ / ⊗ legend -->
  <text x="294" y="198" font-family="Georgia,serif" font-size="9" text-anchor="end" fill="#000">I out ⊙</text>
  <text x="574" y="198" font-family="Georgia,serif" font-size="9" fill="#000">I in ⊗</text>

  <!-- ── Magnet (moving left, approaching coil) ── -->
  <!-- Magnet rectangle -->
  <rect x="60" y="250" width="160" height="100" rx="6" fill="#eee" stroke="#000" stroke-width="3"/>
  <!-- N pole (right half, facing coil) -->
  <rect x="140" y="250" width="80" height="100" rx="0" fill="#ddd" stroke="#000" stroke-width="2"/>
  <text x="105" y="308" font-family="Georgia,serif" font-size="20" font-weight="bold"
        text-anchor="middle" fill="#000">S</text>
  <text x="180" y="308" font-family="Georgia,serif" font-size="20" font-weight="bold"
        text-anchor="middle" fill="#000">N</text>

  <!-- Motion arrow -->
  <line x1="230" y1="300" x2="338" y2="300" stroke="#000" stroke-width="3" stroke-dasharray="8,4"/>
  <polygon points="334,294 348,300 334,306" fill="#000"/>
  <text x="270" y="288" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">v →</text>
  <text x="255" y="322" font-family="Georgia,serif" font-size="10" fill="#000">(magnet moving right)</text>

  <!-- Flux arrows through coil (B into coil from N, i.e. rightward) -->
  <line x1="365" y1="300" x2="535" y2="300" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <polygon points="528,295 540,300 528,305" fill="#000"/>
  <text x="415" y="290" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">Φ increasing →</text>

  <!-- Galvanometer / circuit connected to coil ends -->
  <line x1="350" y1="160" x2="350" y2="120" stroke="#000" stroke-width="2.5"/>
  <line x1="550" y1="160" x2="550" y2="120" stroke="#000" stroke-width="2.5"/>
  <line x1="350" y1="120" x2="450" y2="120" stroke="#000" stroke-width="2.5"/>
  <line x1="550" y1="120" x2="490" y2="120" stroke="#000" stroke-width="2.5"/>
  <!-- Galvanometer circle -->
  <circle cx="470" cy="90" r="30" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <line x1="450" y1="120" x2="452" y2="90" stroke="#000" stroke-width="2"/>
  <line x1="490" y1="120" x2="488" y2="90" stroke="#000" stroke-width="2"/>
  <text x="470" y="86" font-family="Georgia,serif" font-size="12" font-weight="bold"
        text-anchor="middle" fill="#000">G</text>
  <text x="470" y="100" font-family="Georgia,serif" font-size="9"
        text-anchor="middle" fill="#000">(deflects)</text>

  <!-- Return wire at bottom -->
  <line x1="350" y1="440" x2="350" y2="480" stroke="#000" stroke-width="2.5"/>
  <line x1="550" y1="440" x2="550" y2="480" stroke="#000" stroke-width="2.5"/>
  <line x1="350" y1="480" x2="550" y2="480" stroke="#000" stroke-width="2.5"/>

  <!-- Induced current direction arrow on circuit -->
  <polygon points="460,116 474,120 460,124" fill="#000"/>
  <text x="398" y="112" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">I_induced</text>

  <!-- Info box -->
  <rect x="580" y="160" width="200" height="250" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="590" y="178" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Faraday's Law:</text>
  <text x="590" y="196" font-family="Georgia,serif" font-size="11" fill="#000">EMF = −dΦ/dt</text>
  <text x="590" y="212" font-family="Georgia,serif" font-size="10" fill="#000">Φ = NBAcosθ</text>
  <text x="590" y="228" font-family="Georgia,serif" font-size="9" fill="#555">N = turns, B = field,</text>
  <text x="590" y="240" font-family="Georgia,serif" font-size="9" fill="#555">A = area, θ = angle</text>
  <line x1="590" y1="248" x2="768" y2="248" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="590" y="264" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Lenz's Law:</text>
  <text x="590" y="280" font-family="Georgia,serif" font-size="10" fill="#000">Induced current</text>
  <text x="590" y="294" font-family="Georgia,serif" font-size="10" fill="#000">opposes the change</text>
  <text x="590" y="308" font-family="Georgia,serif" font-size="10" fill="#000">in flux that caused it</text>
  <line x1="590" y1="316" x2="768" y2="316" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="590" y="332" font-family="Georgia,serif" font-size="10" fill="#000">Flux: Φ = B·A</text>
  <text x="590" y="348" font-family="Georgia,serif" font-size="10" fill="#000">EMF = −NdΦ/dt</text>
  <text x="590" y="364" font-family="Georgia,serif" font-size="9" fill="#555">− sign = Lenz's law</text>
  <text x="590" y="380" font-family="Georgia,serif" font-size="9" fill="#555">I = EMF / R_coil</text>
  <text x="590" y="396" font-family="Georgia,serif" font-size="9" fill="#555">Applications: generators,</text>
  <text x="590" y="408" font-family="Georgia,serif" font-size="9" fill="#555">transformers, induction</text>
</svg>`;

  // ─── TRANSFORMER DIAGRAM ──────────────────────────────────────────────────
  static transformerSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        text-anchor="middle" fill="#000">Transformer Diagram — Step-Up</text>
  <text x="400" y="44" font-family="Georgia,serif" font-size="10" text-anchor="middle" fill="#444">
    Primary: 100 turns, 120 V  |  Secondary: 500 turns, 600 V
  </text>

  <!-- ── Iron core ── -->
  <!-- Outer rectangle -->
  <rect x="200" y="140" width="400" height="320" rx="6" fill="none" stroke="#000" stroke-width="5"/>
  <!-- Inner cutout (hollow core) -->
  <rect x="280" y="210" width="240" height="180" rx="4" fill="#fff" stroke="#000" stroke-width="3"/>
  <!-- Core label -->
  <text x="400" y="406" font-family="Georgia,serif" font-size="11" text-anchor="middle" fill="#000">Iron Core</text>
  <text x="400" y="420" font-family="Georgia,serif" font-size="9" text-anchor="middle" fill="#555">(laminated to reduce eddy currents)</text>

  <!-- ── Primary coil (left limb of core) ── -->
  <!-- Coil windings on left side of core (x≈200) -->
  <!-- 8 winding loops shown as semicircles on the left limb -->
  <path d="M200,170 Q180,180 200,190" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M200,190 Q180,200 200,210" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M200,210 Q180,220 200,230" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M200,230 Q180,240 200,250" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M200,250 Q180,260 200,270" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M200,270 Q180,280 200,290" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M200,290 Q180,300 200,310" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M200,310 Q180,320 200,330" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M200,330 Q180,340 200,350" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M200,350 Q180,360 200,370" fill="none" stroke="#000" stroke-width="3"/>
  <text x="150" y="275" font-family="Georgia,serif" font-size="12" font-weight="bold"
        text-anchor="middle" fill="#000">Primary</text>
  <text x="150" y="290" font-family="Georgia,serif" font-size="11"
        text-anchor="middle" fill="#000">N_p = 100</text>

  <!-- Primary input wires -->
  <line x1="80"  y1="200" x2="200" y2="200" stroke="#000" stroke-width="3"/>
  <line x1="80"  y1="340" x2="200" y2="340" stroke="#000" stroke-width="3"/>
  <!-- AC source symbol -->
  <circle cx="60" cy="270" r="36" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <path d="M44,270 Q52,255 60,270 Q68,285 76,270" fill="none" stroke="#000" stroke-width="2"/>
  <text x="60" y="320" font-family="Georgia,serif" font-size="10" text-anchor="middle" fill="#000">AC 120V</text>
  <line x1="80" y1="200" x2="96" y2="200" stroke="#000" stroke-width="2"/>
  <line x1="80" y1="340" x2="96" y2="340" stroke="#000" stroke-width="2"/>
  <line x1="96" y1="200" x2="200" y2="200" stroke="#000" stroke-width="3"/>
  <line x1="96" y1="340" x2="200" y2="340" stroke="#000" stroke-width="3"/>

  <!-- Primary voltage label -->
  <text x="42" y="198" font-family="Georgia,serif" font-size="10" fill="#000">V_p = 120 V</text>

  <!-- ── Secondary coil (right limb of core) ── -->
  <path d="M600,170 Q620,180 600,190" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M600,190 Q620,200 600,210" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M600,210 Q620,220 600,230" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M600,230 Q620,240 600,250" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M600,250 Q620,260 600,270" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M600,270 Q620,280 600,290" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M600,290 Q620,300 600,310" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M600,310 Q620,320 600,330" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M600,330 Q620,340 600,350" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M600,350 Q620,360 600,370" fill="none" stroke="#000" stroke-width="3"/>
  <text x="660" y="275" font-family="Georgia,serif" font-size="12" font-weight="bold"
        text-anchor="middle" fill="#000">Secondary</text>
  <text x="660" y="290" font-family="Georgia,serif" font-size="11"
        text-anchor="middle" fill="#000">N_s = 500</text>

  <!-- Secondary output wires -->
  <line x1="600" y1="200" x2="700" y2="200" stroke="#000" stroke-width="3"/>
  <line x1="600" y1="340" x2="700" y2="340" stroke="#000" stroke-width="3"/>
  <!-- Load resistor -->
  <line x1="700" y1="200" x2="700" y2="240" stroke="#000" stroke-width="3"/>
  <polyline points="700,240 684,244 716,252 684,260 716,268 684,276 716,284 684,292 700,296"
            fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="700" y1="296" x2="700" y2="340" stroke="#000" stroke-width="3"/>
  <text x="720" y="270" font-family="Georgia,serif" font-size="10" fill="#000">R_load</text>

  <!-- Secondary voltage label -->
  <text x="630" y="198" font-family="Georgia,serif" font-size="10" fill="#000">V_s = 600 V</text>

  <!-- Flux arrows in core (circular) -->
  <path d="M330,300 Q400,255 470,300" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <polygon points="466,292 474,303 462,305" fill="#000"/>
  <text x="400" y="252" font-family="Georgia,serif" font-size="10" font-style="italic"
        text-anchor="middle" fill="#000">Φ (flux)</text>

  <!-- Info box -->
  <rect x="180" y="470" width="440" height="110" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="400" y="488" font-family="Georgia,serif" font-size="11" font-weight="bold"
        text-anchor="middle" fill="#000">Transformer Equations:</text>
  <text x="190" y="506" font-family="Georgia,serif" font-size="10" fill="#000">Turns ratio:   V_s / V_p = N_s / N_p = 500/100 = 5</text>
  <text x="190" y="522" font-family="Georgia,serif" font-size="10" fill="#000">Voltage:       V_s = 120 × 5 = 600 V (step-up)</text>
  <text x="190" y="538" font-family="Georgia,serif" font-size="10" fill="#000">Current:       I_s / I_p = N_p / N_s   (I_s smaller in step-up)</text>
  <text x="190" y="554" font-family="Georgia,serif" font-size="10" fill="#000">Power:         P_p = P_s = V_pI_p = V_sI_s  (ideal transformer)</text>
  <text x="190" y="570" font-family="Georgia,serif" font-size="9" fill="#555">Efficiency losses: eddy currents, hysteresis, flux leakage, resistance</text>
</svg>`;

  // ─── CAPACITOR CHARGE CURVE ───────────────────────────────────────────────
  static capacitorChargeCurveSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="350" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        text-anchor="middle" fill="#000">Capacitor Charging Curve</text>
  <text x="350" y="44" font-family="Georgia,serif" font-size="10" text-anchor="middle" fill="#444">
    RC = 100μF × 1000Ω = 0.1 s  |  V₀ = 12 V
  </text>

  <!-- Axes -->
  <line x1="80" y1="50" x2="80" y2="480" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="480" x2="620" y2="480" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="76,54 80,40 84,54" fill="#000"/>
  <polygon points="616,476 630,480 616,484" fill="#000"/>

  <!-- Axis labels -->
  <text x="26" y="270" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" transform="rotate(-90,26,270)">Voltage V_C (V)</text>
  <text x="330" y="516" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Time t (s) →</text>

  <!-- Asymptote at V=12V (y=80) -->
  <line x1="80" y1="80" x2="620" y2="80" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="625" y="84" font-family="Georgia,serif" font-size="10" fill="#000">V₀ = 12 V</text>

  <!-- Y-axis ticks -->
  <line x1="75" y1="80"  x2="85" y2="80"  stroke="#000" stroke-width="2"/>
  <text x="68" y="84" font-family="Georgia,serif" font-size="9" text-anchor="end" fill="#000">12</text>
  <line x1="75" y1="163" x2="85" y2="163" stroke="#000" stroke-width="2"/>
  <text x="68" y="167" font-family="Georgia,serif" font-size="9" text-anchor="end" fill="#000">9</text>
  <line x1="75" y1="247" x2="85" y2="247" stroke="#000" stroke-width="2"/>
  <text x="68" y="251" font-family="Georgia,serif" font-size="9" text-anchor="end" fill="#000">6</text>
  <line x1="75" y1="330" x2="85" y2="330" stroke="#000" stroke-width="2"/>
  <text x="68" y="334" font-family="Georgia,serif" font-size="9" text-anchor="end" fill="#000">3</text>
  <line x1="75" y1="480" x2="85" y2="480" stroke="#000" stroke-width="2"/>
  <text x="68" y="484" font-family="Georgia,serif" font-size="9" text-anchor="end" fill="#000">0</text>

  <!-- X-axis ticks (t in units of τ) -->
  <line x1="187" y1="475" x2="187" y2="485" stroke="#000" stroke-width="2"/>
  <text x="185" y="498" font-family="Georgia,serif" font-size="9" text-anchor="middle" fill="#000">1τ</text>
  <line x1="295" y1="475" x2="295" y2="485" stroke="#000" stroke-width="2"/>
  <text x="293" y="498" font-family="Georgia,serif" font-size="9" text-anchor="middle" fill="#000">2τ</text>
  <line x1="402" y1="475" x2="402" y2="485" stroke="#000" stroke-width="2"/>
  <text x="400" y="498" font-family="Georgia,serif" font-size="9" text-anchor="middle" fill="#000">3τ</text>
  <line x1="510" y1="475" x2="510" y2="485" stroke="#000" stroke-width="2"/>
  <text x="508" y="498" font-family="Georgia,serif" font-size="9" text-anchor="middle" fill="#000">4τ</text>
  <line x1="617" y1="475" x2="617" y2="485" stroke="#000" stroke-width="2"/>
  <text x="615" y="498" font-family="Georgia,serif" font-size="9" text-anchor="middle" fill="#000">5τ</text>

  <!-- Charging curve: V = V₀(1 − e^(−t/τ))
       t=0: V=0 (y=480), t=τ: V=7.58 (y=189), t=2τ: V=10.38 (y=123),
       t=3τ: V=11.35 (y=97), t=5τ: V≈12 (y≈82) -->
  <path d="M80,480 Q130,340 187,189 Q240,120 295,105 Q350,90 402,85 Q460,81 617,80"
        fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>

  <!-- τ annotation: at t=τ, V = 0.632×12 = 7.58V -->
  <circle cx="187" cy="189" r="5" fill="#000"/>
  <line x1="80"  y1="189" x2="187" y2="189" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="187" y1="189" x2="187" y2="480" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="192" y="183" font-family="Georgia,serif" font-size="10" fill="#000">V = 0.632 V₀ at t = τ</text>
  <text x="68" y="193" font-family="Georgia,serif" font-size="9" text-anchor="end" fill="#000">7.58</text>

  <!-- Equation on chart -->
  <text x="310" y="200" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#000">V(t) = V₀(1 − e^(−t/RC))</text>

  <!-- Info box -->
  <rect x="648" y="60" width="225" height="280" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="658" y="78" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Charging Equations:</text>
  <text x="658" y="96" font-family="Georgia,serif" font-size="10" fill="#000">V_C(t) = V₀(1 − e^(−t/τ))</text>
  <text x="658" y="112" font-family="Georgia,serif" font-size="10" fill="#000">I(t)   = (V₀/R)e^(−t/τ)</text>
  <text x="658" y="128" font-family="Georgia,serif" font-size="10" fill="#000">τ = RC = 0.1 s</text>
  <line x1="658" y1="136" x2="861" y2="136" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="658" y="152" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Values:</text>
  <text x="658" y="168" font-family="Georgia,serif" font-size="10" fill="#000">t = 1τ: V = 63.2% V₀</text>
  <text x="658" y="184" font-family="Georgia,serif" font-size="10" fill="#000">t = 2τ: V = 86.5% V₀</text>
  <text x="658" y="200" font-family="Georgia,serif" font-size="10" fill="#000">t = 3τ: V = 95.0% V₀</text>
  <text x="658" y="216" font-family="Georgia,serif" font-size="10" fill="#000">t = 5τ: V = 99.3% V₀</text>
  <line x1="658" y1="224" x2="861" y2="224" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="658" y="240" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Discharge:</text>
  <text x="658" y="256" font-family="Georgia,serif" font-size="10" fill="#000">V_C(t) = V₀ e^(−t/τ)</text>
  <text x="658" y="272" font-family="Georgia,serif" font-size="10" fill="#000">I(t)   = −(V₀/R)e^(−t/τ)</text>
  <text x="658" y="288" font-family="Georgia,serif" font-size="9" fill="#555">Energy: E = ½CV²</text>
  <text x="658" y="304" font-family="Georgia,serif" font-size="9" fill="#555">C=100μF, R=1000Ω</text>
  <text x="658" y="318" font-family="Georgia,serif" font-size="9" fill="#555">Q=CV (charge stored)</text>
  <text x="658" y="332" font-family="Georgia,serif" font-size="9" fill="#555">"fully charged" ≈ 5τ</text>
</svg>`;

  // ─── LORENTZ FORCE ────────────────────────────────────────────────────────
  static lorentzForceSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        text-anchor="middle" fill="#000">Lorentz Force — Charged Particle in Magnetic Field</text>
  <text x="400" y="44" font-family="Georgia,serif" font-size="10" text-anchor="middle" fill="#444">
    F = qv × B  |  Particle moves in circle when v ⊥ B
  </text>

  <!-- ── Magnetic field grid (B into the page, shown as × symbols) ── -->
  <!-- Grid of × marks indicating B field into page -->
  <text x="110" y="104" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="170" y="104" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="230" y="104" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="290" y="104" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="350" y="104" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="410" y="104" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="470" y="104" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="530" y="104" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="590" y="104" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="650" y="104" font-family="Georgia,serif" font-size="14" fill="#000">×</text>

  <text x="110" y="164" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="170" y="164" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="230" y="164" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="290" y="164" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="350" y="164" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="410" y="164" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="470" y="164" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="530" y="164" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="590" y="164" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="650" y="164" font-family="Georgia,serif" font-size="14" fill="#000">×</text>

  <text x="110" y="224" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="170" y="224" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="230" y="224" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="290" y="224" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="350" y="224" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="410" y="224" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="470" y="224" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="530" y="224" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="590" y="224" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="650" y="224" font-family="Georgia,serif" font-size="14" fill="#000">×</text>

  <text x="110" y="284" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="170" y="284" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="230" y="284" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="290" y="284" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="350" y="284" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="410" y="284" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="470" y="284" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="530" y="284" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="590" y="284" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="650" y="284" font-family="Georgia,serif" font-size="14" fill="#000">×</text>

  <text x="110" y="344" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="170" y="344" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="230" y="344" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="290" y="344" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="350" y="344" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="410" y="344" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="470" y="344" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="530" y="344" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="590" y="344" font-family="Georgia,serif" font-size="14" fill="#000">×</text>
  <text x="650" y="344" font-family="Georgia,serif" font-size="14" fill="#000">×</text>

  <!-- B field label -->
  <text x="700" y="150" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">B</text>
  <text x="695" y="165" font-family="Georgia,serif" font-size="10" fill="#000">(into</text>
  <text x="695" y="178" font-family="Georgia,serif" font-size="10" fill="#000">page)</text>

  <!-- ── Circular path of +ve particle ── -->
  <!-- Radius ~120, centre at (400,280) -->
  <circle cx="400" cy="270" r="130" fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="8,4"/>

  <!-- ── Particle at top of circle (400,140) moving right ── -->
  <circle cx="400" cy="140" r="14" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="400" y="145" font-family="Georgia,serif" font-size="11" font-weight="bold"
        text-anchor="middle" fill="#000">+q</text>

  <!-- Velocity arrow (rightward) -->
  <line x1="414" y1="140" x2="480" y2="140" stroke="#000" stroke-width="3"/>
  <polygon points="476,134 492,140 476,146" fill="#000"/>
  <text x="494" y="135" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">v</text>

  <!-- Force arrow (downward toward centre) -->
  <line x1="400" y1="154" x2="400" y2="206" stroke="#000" stroke-width="3"/>
  <polygon points="394,202 400,216 406,202" fill="#000"/>
  <text x="408" y="200" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">F</text>
  <text x="408" y="214" font-family="Georgia,serif" font-size="9" fill="#000">(centripetal)</text>

  <!-- Radius line -->
  <line x1="400" y1="216" x2="400" y2="268" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="408" y="250" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">r</text>

  <!-- Centre dot -->
  <circle cx="400" cy="270" r="4" fill="#000"/>
  <text x="408" y="274" font-family="Georgia,serif" font-size="10" fill="#000">centre</text>

  <!-- Direction arrows on circle at other points -->
  <!-- right side: particle moving downward -->
  <polygon points="526,264 530,278 520,274" fill="#000"/>
  <!-- bottom: moving left -->
  <polygon points="404,396 390,400 404,404" fill="#000"/>
  <!-- left side: moving upward -->
  <polygon points="274,264 270,278 280,274" fill="#000"/>

  <!-- Right-hand rule diagram (inset) -->
  <rect x="560" y="390" width="220" height="175" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="670" y="408" font-family="Georgia,serif" font-size="11" font-weight="bold"
        text-anchor="middle" fill="#000">Right-Hand Rule:</text>
  <text x="570" y="424" font-family="Georgia,serif" font-size="10" fill="#000">Point fingers in v direction</text>
  <text x="570" y="440" font-family="Georgia,serif" font-size="10" fill="#000">Curl toward B direction</text>
  <text x="570" y="456" font-family="Georgia,serif" font-size="10" fill="#000">Thumb points along F</text>
  <text x="570" y="474" font-family="Georgia,serif" font-size="9" fill="#555">(reverse for negative charge)</text>

  <!-- Info / formula box -->
  <rect x="20" y="390" width="230" height="175" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="30" y="408" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Equations:</text>
  <text x="30" y="426" font-family="Georgia,serif" font-size="10" fill="#000">F = qv × B</text>
  <text x="30" y="442" font-family="Georgia,serif" font-size="10" fill="#000">|F| = qvB sinθ</text>
  <text x="30" y="458" font-family="Georgia,serif" font-size="10" fill="#000">θ = 90° → F = qvB</text>
  <line x1="30" y1="465" x2="238" y2="465" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="30" y="481" font-family="Georgia,serif" font-size="10" fill="#000">Circular motion: qvB = mv²/r</text>
  <text x="30" y="497" font-family="Georgia,serif" font-size="10" fill="#000">Radius: r = mv / (qB)</text>
  <text x="30" y="513" font-family="Georgia,serif" font-size="10" fill="#000">Period: T = 2πm / (qB)</text>
  <text x="30" y="529" font-family="Georgia,serif" font-size="9" fill="#555">F always ⊥ v → no work done</text>
  <text x="30" y="545" font-family="Georgia,serif" font-size="9" fill="#555">KE unchanged, only direction changes</text>
  <text x="30" y="559" font-family="Georgia,serif" font-size="9" fill="#555">Applications: cyclotron, mass spectrometer</text>
</svg>`;


  // ─── 4. NUCLEAR STRUCTURE ─────────────────────────────────────────────────
  static nuclearStructurePhysicsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="700px" viewBox="0 0 700 700">
  <text x="200" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Nuclear Structure — Carbon-12</text>
  <text x="210" y="52" font-family="Georgia,serif" font-size="11" fill="#000">6 protons (p) + 6 neutrons (n) bound by strong nuclear force</text>
  <!-- Nucleus boundary -->
  <circle cx="350" cy="360" r="110" fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="8,4"/>
  <text x="460" y="260" font-family="Georgia,serif" font-size="11" fill="#000">Nuclear boundary</text>
  <!-- Protons (filled circles with P) -->
  <circle cx="320" cy="300" r="28" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="312" y="307" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">p</text>
  <circle cx="380" cy="300" r="28" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="372" y="307" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">p</text>
  <circle cx="295" cy="355" r="28" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="287" y="362" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">p</text>
  <circle cx="405" cy="355" r="28" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="397" y="362" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">p</text>
  <circle cx="320" cy="415" r="28" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="312" y="422" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">p</text>
  <circle cx="380" cy="415" r="28" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="372" y="422" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">p</text>
  <!-- Neutrons (hatched circles with N) -->
  <circle cx="335" cy="328" r="26" fill="#ddd" stroke="#000" stroke-width="3"/>
  <text x="327" y="335" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">n</text>
  <circle cx="365" cy="328" r="26" fill="#ddd" stroke="#000" stroke-width="3"/>
  <text x="357" y="335" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">n</text>
  <circle cx="318" cy="383" r="26" fill="#ddd" stroke="#000" stroke-width="3"/>
  <text x="310" y="390" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">n</text>
  <circle cx="382" cy="383" r="26" fill="#ddd" stroke="#000" stroke-width="3"/>
  <text x="374" y="390" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">n</text>
  <circle cx="335" cy="390" r="26" fill="#ddd" stroke="#000" stroke-width="3"/>
  <text x="327" y="397" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">n</text>
  <circle cx="365" cy="390" r="26" fill="#ddd" stroke="#000" stroke-width="3"/>
  <text x="357" y="397" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">n</text>
  <!-- Legend -->
  <rect x="60" y="580" width="260" height="90" rx="5" fill="none" stroke="#000" stroke-width="1.8"/>
  <text x="70" y="600" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Legend:</text>
  <circle cx="90" cy="622" r="14" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="84" y="627" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">p</text>
  <text x="112" y="627" font-family="Georgia,serif" font-size="11" fill="#000">Proton  (charge +e, Z = 6)</text>
  <circle cx="90" cy="652" r="14" fill="#ddd" stroke="#000" stroke-width="2.5"/>
  <text x="84" y="657" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">n</text>
  <text x="112" y="657" font-family="Georgia,serif" font-size="11" fill="#000">Neutron (neutral,   N = 6)</text>
  <!-- Formula box -->
  <rect x="380" y="560" width="280" height="110" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="390" y="580" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Key Relations:</text>
  <text x="390" y="598" font-family="Georgia,serif" font-size="11" fill="#000">A = Z + N = 12 (mass number)</text>
  <text x="390" y="616" font-family="Georgia,serif" font-size="11" fill="#000">Z = 6 (atomic number)</text>
  <text x="390" y="634" font-family="Georgia,serif" font-size="11" fill="#000">r ≈ r₀ A^(1/3),  r₀ = 1.2 fm</text>
  <text x="390" y="652" font-family="Georgia,serif" font-size="10" fill="#000">Strong force range ≈ 1–3 fm</text>
  <!-- Nucleus label -->
  <text x="220" y="510" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">¹²C  nucleus</text>
  <line x1="290" y1="506" x2="340" y2="470" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
</svg>`;

  // ─── 5. ALPHA DECAY ──────────────────────────────────────────────────────
  static alphaDecayDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">
  <text x="280" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Alpha Decay — Radium-226</text>
  <!-- Parent nucleus Ra-226 -->
  <circle cx="160" cy="260" r="70" fill="#eee" stroke="#000" stroke-width="3.5"/>
  <text x="118" y="252" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">²²⁶Ra</text>
  <text x="122" y="272" font-family="Georgia,serif" font-size="11" fill="#000">Z=88, A=226</text>
  <text x="100" y="360" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Parent Nucleus</text>
  <!-- Arrow -->
  <line x1="235" y1="260" x2="380" y2="260" stroke="#000" stroke-width="3"/>
  <polygon points="374,253 392,260 374,267" fill="#000"/>
  <text x="278" y="248" font-family="Georgia,serif" font-size="11" fill="#000">decay</text>
  <!-- Daughter nucleus Rn-222 -->
  <circle cx="530" cy="220" r="62" fill="#eee" stroke="#000" stroke-width="3.5"/>
  <text x="492" y="212" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">²²²Rn</text>
  <text x="492" y="232" font-family="Georgia,serif" font-size="11" fill="#000">Z=86, A=222</text>
  <text x="488" y="310" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Daughter Nucleus</text>
  <!-- Alpha particle -->
  <circle cx="530" cy="340" r="36" fill="#ccc" stroke="#000" stroke-width="3"/>
  <text x="515" y="335" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">⁴He</text>
  <text x="512" y="352" font-family="Georgia,serif" font-size="11" fill="#000">α (Z=2)</text>
  <text x="495" y="400" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Alpha Particle</text>
  <!-- Velocity arrow on alpha -->
  <line x1="566" y1="340" x2="650" y2="340" stroke="#000" stroke-width="2.5"/>
  <polygon points="644,333 660,340 644,347" fill="#000"/>
  <text x="658" y="336" font-family="Georgia,serif" font-size="11" fill="#000">v_α</text>
  <!-- Equation box -->
  <rect x="60" y="450" width="780" height="120" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="80" y="474" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Nuclear Equation:</text>
  <text x="80" y="498" font-family="Georgia,serif" font-size="13" fill="#000">²²⁶Ra  →  ²²²Rn  +  ⁴He  +  Energy</text>
  <text x="80" y="522" font-family="Georgia,serif" font-size="11" fill="#000"> ₈₈          ₈₆         ₂</text>
  <text x="80" y="546" font-family="Georgia,serif" font-size="11" fill="#000">Conservation: A: 226 = 222 + 4 ✓    Z: 88 = 86 + 2 ✓    KE released ≈ 4.87 MeV</text>
  <!-- Penetration note -->
  <rect x="680" y="160" width="200" height="80" rx="4" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="4,3"/>
  <text x="690" y="180" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Alpha Properties:</text>
  <text x="690" y="198" font-family="Georgia,serif" font-size="10" fill="#000">• Charge: +2e</text>
  <text x="690" y="214" font-family="Georgia,serif" font-size="10" fill="#000">• Stopped by paper/skin</text>
  <text x="690" y="230" font-family="Georgia,serif" font-size="10" fill="#000">• Highly ionising</text>
</svg>`;

  // ─── 6. BETA DECAY ───────────────────────────────────────────────────────
  static betaDecayDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">
  <text x="300" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Beta Decay — Carbon-14</text>
  <!-- Parent C-14 -->
  <circle cx="150" cy="250" r="65" fill="#eee" stroke="#000" stroke-width="3.5"/>
  <text x="112" y="242" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">¹⁴C</text>
  <text x="106" y="262" font-family="Georgia,serif" font-size="11" fill="#000">Z=6, A=14</text>
  <text x="96" y="340" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Parent Nucleus</text>
  <!-- Arrow -->
  <line x1="220" y1="250" x2="360" y2="250" stroke="#000" stroke-width="3"/>
  <polygon points="354,243 372,250 354,257" fill="#000"/>
  <!-- Daughter N-14 -->
  <circle cx="510" cy="200" r="62" fill="#eee" stroke="#000" stroke-width="3.5"/>
  <text x="474" y="192" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">¹⁴N</text>
  <text x="470" y="212" font-family="Georgia,serif" font-size="11" fill="#000">Z=7, A=14</text>
  <text x="466" y="286" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Daughter Nucleus</text>
  <!-- Beta particle (electron) -->
  <circle cx="490" cy="330" r="28" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="476" y="326" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">β⁻</text>
  <text x="470" y="344" font-family="Georgia,serif" font-size="10" fill="#000">electron</text>
  <text x="458" y="386" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Beta Particle</text>
  <!-- Antineutrino -->
  <circle cx="620" cy="330" r="28" fill="#ddd" stroke="#000" stroke-width="2.5" stroke-dasharray="5,3"/>
  <text x="604" y="324" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">ν̄_e</text>
  <text x="598" y="344" font-family="Georgia,serif" font-size="9" fill="#000">antineutrino</text>
  <text x="596" y="386" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Antineutrino</text>
  <!-- Velocity arrows -->
  <line x1="518" y1="330" x2="584" y2="330" stroke="#000" stroke-width="2.5"/>
  <!-- Inside nucleus: neutron → proton -->
  <rect x="680" y="140" width="190" height="100" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="690" y="160" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Inside nucleus:</text>
  <text x="690" y="180" font-family="Georgia,serif" font-size="11" fill="#000">n → p + e⁻ + ν̄_e</text>
  <text x="690" y="200" font-family="Georgia,serif" font-size="10" fill="#000">(neutron transforms</text>
  <text x="690" y="218" font-family="Georgia,serif" font-size="10" fill="#000"> to proton)</text>
  <!-- Equation box -->
  <rect x="60" y="440" width="800" height="130" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="80" y="464" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Nuclear Equation:</text>
  <text x="80" y="488" font-family="Georgia,serif" font-size="13" fill="#000">¹⁴C  →  ¹⁴N  +  e⁻  +  ν̄_e  +  Energy</text>
  <text x="80" y="508" font-family="Georgia,serif" font-size="11" fill="#000"> ₆         ₇</text>
  <text x="80" y="530" font-family="Georgia,serif" font-size="11" fill="#000">Conservation: A: 14 = 14 ✓    Z: 6 = 7 + (−1) ✓    Lepton number conserved ✓</text>
  <text x="80" y="554" font-family="Georgia,serif" font-size="10" fill="#000">Half-life of C-14 = 5,730 years  (used in radiocarbon dating)</text>
</svg>`;

  // ─── 7. GAMMA DECAY ──────────────────────────────────────────────────────
  static gammaDecayDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">
  <text x="240" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Gamma Decay — Cobalt-60</text>
  <!-- Energy level diagram -->
  <!-- Excited state -->
  <line x1="120" y1="160" x2="420" y2="160" stroke="#000" stroke-width="3"/>
  <text x="430" y="165" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Excited state  ⁶⁰Co*</text>
  <text x="430" y="182" font-family="Georgia,serif" font-size="11" fill="#000">E* (higher energy)</text>
  <!-- Nucleus at excited state -->
  <circle cx="270" cy="160" r="45" fill="#ddd" stroke="#000" stroke-width="3"/>
  <text x="248" y="152" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">⁶⁰Co*</text>
  <text x="248" y="170" font-family="Georgia,serif" font-size="10" fill="#000">excited</text>
  <!-- Gamma photon arrow (wavy) -->
  <path d="M270,205 Q278,220 270,235 Q262,250 270,265 Q278,280 270,295 Q262,310 270,325" fill="none" stroke="#000" stroke-width="3"/>
  <polygon points="264,320 270,336 276,320" fill="#000"/>
  <text x="286" y="275" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">γ</text>
  <text x="286" y="292" font-family="Georgia,serif" font-size="11" fill="#000">gamma photon</text>
  <text x="286" y="308" font-family="Georgia,serif" font-size="10" fill="#000">E = hf</text>
  <!-- Ground state -->
  <line x1="120" y1="380" x2="420" y2="380" stroke="#000" stroke-width="3"/>
  <text x="430" y="385" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Ground state  ⁶⁰Co</text>
  <text x="430" y="402" font-family="Georgia,serif" font-size="11" fill="#000">E₀ (lower energy)</text>
  <!-- Nucleus at ground state -->
  <circle cx="270" cy="380" r="45" fill="#eee" stroke="#000" stroke-width="3"/>
  <text x="250" y="372" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">⁶⁰Co</text>
  <text x="248" y="390" font-family="Georgia,serif" font-size="10" fill="#000">ground</text>
  <!-- ΔE arrow on left -->
  <line x1="100" y1="165" x2="100" y2="375" stroke="#000" stroke-width="2"/>
  <polygon points="94,171 100,155 106,171" fill="#000"/>
  <polygon points="94,369 100,385 106,369" fill="#000"/>
  <text x="52" y="275" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">ΔE</text>
  <text x="40" y="292" font-family="Georgia,serif" font-size="10" fill="#000">= hf = hc/λ</text>
  <!-- Equation box -->
  <rect x="60" y="440" width="680" height="130" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="80" y="464" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Nuclear Equation:</text>
  <text x="80" y="488" font-family="Georgia,serif" font-size="13" fill="#000">⁶⁰Co*  →  ⁶⁰Co  +  γ  +  Energy</text>
  <text x="80" y="510" font-family="Georgia,serif" font-size="11" fill="#000">No change in Z or A — nucleus loses energy only as a photon</text>
  <text x="80" y="530" font-family="Georgia,serif" font-size="11" fill="#000">Gamma photon energy: E_γ = ΔE ≈ 1.17 MeV or 1.33 MeV (Co-60)</text>
  <text x="80" y="550" font-family="Georgia,serif" font-size="10" fill="#000">Gamma rays: most penetrating radiation — requires lead or thick concrete shielding</text>
  <!-- Properties box -->
  <rect x="560" y="100" width="210" height="100" rx="4" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="4,3"/>
  <text x="570" y="120" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Gamma Properties:</text>
  <text x="570" y="140" font-family="Georgia,serif" font-size="10" fill="#000">• No charge, no mass</text>
  <text x="570" y="158" font-family="Georgia,serif" font-size="10" fill="#000">• Speed of light (c)</text>
  <text x="570" y="176" font-family="Georgia,serif" font-size="10" fill="#000">• Very weakly ionising</text>
</svg>`;

  // ─── 8. HALF-LIFE GRAPH ───────────────────────────────────────────────────
  static halfLifeGraphSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">
  <text x="280" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Radioactive Half-Life Decay Curve — C-14</text>
  <text x="290" y="52" font-family="Georgia,serif" font-size="11" fill="#000">Half-life T½ = 5,730 years  |  N(t) = N₀ · e^(−λt)</text>
  <!-- Axes -->
  <line x1="100" y1="80" x2="100" y2="480" stroke="#000" stroke-width="3"/>
  <line x1="100" y1="480" x2="840" y2="480" stroke="#000" stroke-width="3"/>
  <!-- Y axis label -->
  <text x="20" y="295" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" transform="rotate(-90,38,295)">Amount remaining N(t) / N₀ (%)</text>
  <!-- X axis label -->
  <text x="400" y="530" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Time (half-lives)</text>
  <!-- Y axis ticks: 100% at y=100, 50% at y=190, 25% at y=280, 12.5% at y=370, 0% at y=480 -->
  <!-- Gridlines dashed -->
  <line x1="100" y1="100" x2="840" y2="100" stroke="#000" stroke-width="1" stroke-dasharray="5,5"/>
  <line x1="100" y1="190" x2="840" y2="190" stroke="#000" stroke-width="1" stroke-dasharray="5,5"/>
  <line x1="100" y1="280" x2="840" y2="280" stroke="#000" stroke-width="1" stroke-dasharray="5,5"/>
  <line x1="100" y1="370" x2="840" y2="370" stroke="#000" stroke-width="1" stroke-dasharray="5,5"/>
  <!-- Y tick labels -->
  <text x="56" y="104" font-family="Georgia,serif" font-size="11" fill="#000">100%</text>
  <text x="63" y="194" font-family="Georgia,serif" font-size="11" fill="#000">50%</text>
  <text x="63" y="284" font-family="Georgia,serif" font-size="11" fill="#000">25%</text>
  <text x="55" y="374" font-family="Georgia,serif" font-size="11" fill="#000">12.5%</text>
  <text x="70" y="484" font-family="Georgia,serif" font-size="11" fill="#000">0%</text>
  <!-- X tick marks: t=0 x=100, t=1 x=240, t=2 x=380, t=3 x=520, t=4 x=660, t=5 x=800 -->
  <line x1="100" y1="480" x2="100" y2="490" stroke="#000" stroke-width="2"/>
  <text x="94" y="504" font-family="Georgia,serif" font-size="11" fill="#000">0</text>
  <line x1="240" y1="480" x2="240" y2="490" stroke="#000" stroke-width="2"/>
  <text x="230" y="504" font-family="Georgia,serif" font-size="11" fill="#000">T½</text>
  <line x1="380" y1="480" x2="380" y2="490" stroke="#000" stroke-width="2"/>
  <text x="366" y="504" font-family="Georgia,serif" font-size="11" fill="#000">2T½</text>
  <line x1="520" y1="480" x2="520" y2="490" stroke="#000" stroke-width="2"/>
  <text x="506" y="504" font-family="Georgia,serif" font-size="11" fill="#000">3T½</text>
  <line x1="660" y1="480" x2="660" y2="490" stroke="#000" stroke-width="2"/>
  <text x="646" y="504" font-family="Georgia,serif" font-size="11" fill="#000">4T½</text>
  <line x1="800" y1="480" x2="800" y2="490" stroke="#000" stroke-width="2"/>
  <text x="786" y="504" font-family="Georgia,serif" font-size="11" fill="#000">5T½</text>
  <!-- Exponential decay curve: points at t=0,1,2,3,4,5 half-lives -->
  <!-- (x,y): (100,100),(240,190),(380,280),(520,325),(660,350),(800,368) approx -->
  <path d="M100,100 C160,100 200,155 240,190 C280,225 320,260 380,280 C440,298 480,312 520,325 C560,337 600,344 660,350 C700,355 750,360 800,364"
        fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Half-life drop lines -->
  <!-- T½: x=240, from y=100 down to y=190, then left to axis -->
  <line x1="240" y1="100" x2="240" y2="190" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="100" y1="190" x2="240" y2="190" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- 2T½ -->
  <line x1="380" y1="190" x2="380" y2="280" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="100" y1="280" x2="380" y2="280" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- 3T½ -->
  <line x1="520" y1="280" x2="520" y2="325" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="100" y1="325" x2="520" y2="325" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="108" y="322" font-family="Georgia,serif" font-size="9" fill="#000">12.5%</text>
  <!-- Data point dots -->
  <circle cx="100" cy="100" r="6" fill="#000"/>
  <circle cx="240" cy="190" r="6" fill="#000"/>
  <circle cx="380" cy="280" r="6" fill="#000"/>
  <circle cx="520" cy="325" r="6" fill="#000"/>
  <circle cx="660" cy="350" r="6" fill="#000"/>
  <circle cx="800" cy="364" r="6" fill="#000"/>
  <!-- Arrow on curve -->
  <text x="460" y="220" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">N(t) = N₀e^(−λt)</text>
  <!-- Info box -->
  <rect x="580" y="370" width="290" height="90" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="590" y="392" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Relations:</text>
  <text x="590" y="410" font-family="Georgia,serif" font-size="11" fill="#000">T½ = ln2 / λ = 0.693 / λ</text>
  <text x="590" y="428" font-family="Georgia,serif" font-size="11" fill="#000">Activity A = λN</text>
  <text x="590" y="446" font-family="Georgia,serif" font-size="11" fill="#000">1 Becquerel (Bq) = 1 decay/s</text>
</svg>`;

  // ─── 9. BINDING ENERGY CURVE ──────────────────────────────────────────────
  static bindingEnergyCurveSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">
  <text x="220" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Nuclear Binding Energy per Nucleon</text>
  <text x="240" y="52" font-family="Georgia,serif" font-size="11" fill="#000">Peak near Fe-56 (~8.8 MeV) — fission and fusion both release energy</text>
  <!-- Axes -->
  <line x1="80" y1="60" x2="80" y2="460" stroke="#000" stroke-width="3"/>
  <line x1="80" y1="460" x2="860" y2="460" stroke="#000" stroke-width="3"/>
  <text x="10" y="270" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" transform="rotate(-90,22,270)">Binding Energy per Nucleon (MeV)</text>
  <text x="420" y="510" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Mass Number A</text>
  <!-- Y ticks: 0 MeV at y=460, 2 at 390, 4 at 320, 6 at 250, 8 at 180, 9 at 145 -->
  <text x="52" y="464" font-family="Georgia,serif" font-size="10" fill="#000">0</text>
  <text x="52" y="394" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <text x="52" y="324" font-family="Georgia,serif" font-size="10" fill="#000">4</text>
  <text x="52" y="254" font-family="Georgia,serif" font-size="10" fill="#000">6</text>
  <text x="52" y="184" font-family="Georgia,serif" font-size="10" fill="#000">8</text>
  <text x="52" y="149" font-family="Georgia,serif" font-size="10" fill="#000">9</text>
  <!-- X ticks: A=0 at x=80, A=50 at x=210, A=100 at x=340, A=150 at x=470, A=200 at x=600, A=238 at x=700 -->
  <line x1="80"  y1="460" x2="80"  y2="470" stroke="#000" stroke-width="2"/>
  <text x="74"  y="484" font-family="Georgia,serif" font-size="10" fill="#000">0</text>
  <line x1="210" y1="460" x2="210" y2="470" stroke="#000" stroke-width="2"/>
  <text x="202" y="484" font-family="Georgia,serif" font-size="10" fill="#000">50</text>
  <line x1="340" y1="460" x2="340" y2="470" stroke="#000" stroke-width="2"/>
  <text x="328" y="484" font-family="Georgia,serif" font-size="10" fill="#000">100</text>
  <line x1="470" y1="460" x2="470" y2="470" stroke="#000" stroke-width="2"/>
  <text x="458" y="484" font-family="Georgia,serif" font-size="10" fill="#000">150</text>
  <line x1="600" y1="460" x2="600" y2="470" stroke="#000" stroke-width="2"/>
  <text x="588" y="484" font-family="Georgia,serif" font-size="10" fill="#000">200</text>
  <line x1="730" y1="460" x2="730" y2="470" stroke="#000" stroke-width="2"/>
  <text x="718" y="484" font-family="Georgia,serif" font-size="10" fill="#000">238</text>
  <!-- Gridlines -->
  <line x1="80" y1="180" x2="860" y2="180" stroke="#000" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="80" y1="250" x2="860" y2="250" stroke="#000" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="80" y1="320" x2="860" y2="320" stroke="#000" stroke-width="1" stroke-dasharray="4,4"/>
  <!-- Binding energy curve: rapid rise, peak at Fe-56 (~A=56, x≈210,y≈150), gradual decline -->
  <path d="M80,460 L92,350 L102,240 L114,185 L130,168 L150,158 L175,150 L210,148 L260,152 L320,158 L380,164 L440,170 L500,178 L560,186 L620,196 L680,206 L730,216 L780,226 L820,234 L850,240"
        fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Key element labels -->
  <circle cx="90" cy="400" r="5" fill="#000"/>
  <text x="96" y="396" font-family="Georgia,serif" font-size="10" fill="#000">H-2 (2.2 MeV)</text>
  <circle cx="105" cy="285" r="5" fill="#000"/>
  <text x="111" y="281" font-family="Georgia,serif" font-size="10" fill="#000">He-4</text>
  <circle cx="210" cy="148" r="7" fill="#000"/>
  <text x="218" y="142" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Fe-56 (peak ~8.8 MeV)</text>
  <line x1="210" y1="148" x2="210" y2="460" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="730" cy="216" r="5" fill="#000"/>
  <text x="738" y="212" font-family="Georgia,serif" font-size="10" fill="#000">U-238</text>
  <!-- Fusion and fission regions -->
  <rect x="80" y="65" width="125" height="22" rx="3" fill="#eee" stroke="#000" stroke-width="1.5"/>
  <text x="86" y="80" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">← FUSION releases E</text>
  <rect x="620" y="65" width="170" height="22" rx="3" fill="#eee" stroke="#000" stroke-width="1.5"/>
  <text x="626" y="80" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">FISSION releases E →</text>
  <!-- Arrows indicating approach to Fe-56 peak -->
  <polygon points="200,105 210,92 220,105" fill="#000"/>
  <line x1="150" y1="110" x2="207" y2="96" stroke="#000" stroke-width="2"/>
  <polygon points="218,105 210,92 225,95" fill="#000"/>
  <line x1="270" y1="110" x2="213" y2="96" stroke="#000" stroke-width="2"/>
</svg>`;

  // ─── 10. NUCLEAR FISSION ──────────────────────────────────────────────────
  static nuclearFissionDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">
  <text x="330" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Nuclear Fission — U-235</text>
  <!-- Incident neutron -->
  <circle cx="60" cy="250" r="16" fill="#ccc" stroke="#000" stroke-width="2.5"/>
  <text x="52" y="255" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">n</text>
  <text x="36" y="282" font-family="Georgia,serif" font-size="10" fill="#000">slow n</text>
  <line x1="78" y1="250" x2="135" y2="250" stroke="#000" stroke-width="2.5"/>
  <polygon points="129,243 145,250 129,257" fill="#000"/>
  <!-- U-235 + n → U-236* -->
  <circle cx="200" cy="250" r="55" fill="#eee" stroke="#000" stroke-width="3.5"/>
  <text x="163" y="242" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">²³⁵U</text>
  <text x="158" y="262" font-family="Georgia,serif" font-size="10" fill="#000">+ n → ²³⁶U*</text>
  <text x="152" y="328" font-family="Georgia,serif" font-size="11" fill="#000">Compound nucleus</text>
  <!-- Arrow: splitting -->
  <line x1="258" y1="250" x2="340" y2="250" stroke="#000" stroke-width="3"/>
  <polygon points="334,243 350,250 334,257" fill="#000"/>
  <text x="278" y="238" font-family="Georgia,serif" font-size="11" fill="#000">splits</text>
  <!-- Unstable elongated nucleus (intermediate) -->
  <ellipse cx="400" cy="250" rx="45" ry="28" fill="#ddd" stroke="#000" stroke-width="3" stroke-dasharray="5,3"/>
  <text x="370" y="255" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">²³⁶U*</text>
  <!-- Arrow: fission -->
  <line x1="448" y1="250" x2="520" y2="250" stroke="#000" stroke-width="3"/>
  <polygon points="514,243 530,250 514,257" fill="#000"/>
  <!-- Fragments -->
  <!-- Ba-141 upper -->
  <circle cx="620" cy="175" r="48" fill="#eee" stroke="#000" stroke-width="3.5"/>
  <text x="582" y="168" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">¹⁴¹Ba</text>
  <text x="588" y="186" font-family="Georgia,serif" font-size="10" fill="#000">Z=56, A=141</text>
  <text x="580" y="244" font-family="Georgia,serif" font-size="11" fill="#000">Fission Fragment 1</text>
  <line x1="530" y1="235" x2="575" y2="196" stroke="#000" stroke-width="2"/>
  <polygon points="568,198 580,188 575,202" fill="#000"/>
  <!-- Kr-92 lower -->
  <circle cx="620" cy="335" r="42" fill="#eee" stroke="#000" stroke-width="3.5"/>
  <text x="588" y="328" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">⁹²Kr</text>
  <text x="586" y="346" font-family="Georgia,serif" font-size="10" fill="#000">Z=36, A=92</text>
  <text x="584" y="398" font-family="Georgia,serif" font-size="11" fill="#000">Fission Fragment 2</text>
  <line x1="530" y1="265" x2="581" y2="315" stroke="#000" stroke-width="2"/>
  <polygon points="574,308 584,320 578,306" fill="#000"/>
  <!-- 3 neutrons emitted -->
  <circle cx="760" cy="140" r="14" fill="#ccc" stroke="#000" stroke-width="2"/>
  <text x="753" y="145" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">n</text>
  <line x1="666" y1="168" x2="748" y2="148" stroke="#000" stroke-width="1.8"/>
  <polygon points="742,143 756,140 745,152" fill="#000"/>
  <circle cx="810" cy="200" r="14" fill="#ccc" stroke="#000" stroke-width="2"/>
  <text x="803" y="205" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">n</text>
  <line x1="668" y1="175" x2="798" y2="196" stroke="#000" stroke-width="1.8"/>
  <polygon points="792,191 806,198 793,204" fill="#000"/>
  <circle cx="760" cy="390" r="14" fill="#ccc" stroke="#000" stroke-width="2"/>
  <text x="753" y="395" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">n</text>
  <line x1="660" y1="340" x2="748" y2="380" stroke="#000" stroke-width="1.8"/>
  <polygon points="743,374 756,383 746,388" fill="#000"/>
  <text x="756" y="122" font-family="Georgia,serif" font-size="11" fill="#000">3 neutrons</text>
  <text x="756" y="136" font-family="Georgia,serif" font-size="11" fill="#000">released</text>
  <!-- Energy release -->
  <text x="820" y="270" font-family="Georgia,serif" font-size="22" font-weight="bold" fill="#000">⚡</text>
  <text x="818" y="290" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">~200 MeV</text>
  <!-- Equation box -->
  <rect x="40" y="450" width="920" height="120" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="60" y="474" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Nuclear Equation:</text>
  <text x="60" y="498" font-family="Georgia,serif" font-size="13" fill="#000">n + ²³⁵U  →  ²³⁶U*  →  ¹⁴¹Ba  +  ⁹²Kr  +  3n  +  Energy (~200 MeV)</text>
  <text x="60" y="522" font-family="Georgia,serif" font-size="11" fill="#000">Conservation: A: 1+235 = 141+92+3 ✓    Z: 92 = 56+36 ✓</text>
  <text x="60" y="542" font-family="Georgia,serif" font-size="10" fill="#000">Released neutrons can trigger further fissions → chain reaction</text>
</svg>`;

  // ─── 11. NUCLEAR FUSION ───────────────────────────────────────────────────
  static nuclearFusionDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">
  <text x="330" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Nuclear Fusion — Deuterium–Tritium Reaction</text>
  <!-- Deuterium H-2 -->
  <circle cx="140" cy="250" r="50" fill="#eee" stroke="#000" stroke-width="3.5"/>
  <text x="108" y="242" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">²H</text>
  <text x="106" y="262" font-family="Georgia,serif" font-size="11" fill="#000">Deuterium</text>
  <text x="108" y="278" font-family="Georgia,serif" font-size="10" fill="#000">Z=1, A=2</text>
  <!-- Arrow right toward collision -->
  <line x1="192" y1="250" x2="280" y2="250" stroke="#000" stroke-width="3"/>
  <polygon points="274,243 290,250 274,257" fill="#000"/>
  <!-- Tritium H-3 -->
  <circle cx="140" cy="380" r="50" fill="#ddd" stroke="#000" stroke-width="3.5"/>
  <text x="112" y="372" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">³H</text>
  <text x="112" y="392" font-family="Georgia,serif" font-size="11" fill="#000">Tritium</text>
  <text x="112" y="408" font-family="Georgia,serif" font-size="10" fill="#000">Z=1, A=3</text>
  <line x1="192" y1="380" x2="280" y2="310" stroke="#000" stroke-width="3"/>
  <polygon points="275,308 288,300 286,314" fill="#000"/>
  <!-- Collision / high temp region -->
  <ellipse cx="360" cy="280" rx="55" ry="40" fill="#ccc" stroke="#000" stroke-width="2.5" stroke-dasharray="5,3"/>
  <text x="326" y="276" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">collision</text>
  <text x="330" y="292" font-family="Georgia,serif" font-size="10" fill="#000">~10⁸ K</text>
  <!-- Arrow out -->
  <line x1="415" y1="270" x2="500" y2="250" stroke="#000" stroke-width="3"/>
  <polygon points="494,243 510,250 494,257" fill="#000"/>
  <line x1="415" y1="290" x2="500" y2="340" stroke="#000" stroke-width="3"/>
  <polygon points="495,333 509,342 498,349" fill="#000"/>
  <!-- He-4 product -->
  <circle cx="600" cy="210" r="55" fill="#eee" stroke="#000" stroke-width="3.5"/>
  <text x="570" y="202" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">⁴He</text>
  <text x="562" y="222" font-family="Georgia,serif" font-size="11" fill="#000">Alpha particle</text>
  <text x="566" y="238" font-family="Georgia,serif" font-size="10" fill="#000">Z=2, A=4</text>
  <text x="558" y="286" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Product Nucleus</text>
  <!-- Neutron -->
  <circle cx="600" cy="370" r="30" fill="#ccc" stroke="#000" stroke-width="3"/>
  <text x="588" y="376" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">n</text>
  <text x="582" y="418" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Fast Neutron</text>
  <!-- Energy release -->
  <text x="720" y="270" font-family="Georgia,serif" font-size="26" font-weight="bold" fill="#000">⚡</text>
  <text x="715" y="298" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">17.6 MeV</text>
  <text x="718" y="318" font-family="Georgia,serif" font-size="11" fill="#000">released</text>
  <!-- Equation box -->
  <rect x="40" y="450" width="920" height="120" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="60" y="474" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Nuclear Equation:</text>
  <text x="60" y="498" font-family="Georgia,serif" font-size="13" fill="#000">²H  +  ³H  →  ⁴He  +  n  +  17.6 MeV</text>
  <text x="60" y="518" font-family="Georgia,serif" font-size="11" fill="#000"> ₁      ₁      ₂</text>
  <text x="60" y="540" font-family="Georgia,serif" font-size="11" fill="#000">Conservation: A: 2+3 = 4+1 ✓    Z: 1+1 = 2+0 ✓    Powers the Sun and hydrogen bombs</text>
</svg>`;

  // ─── 12. CHAIN REACTION ───────────────────────────────────────────────────
  static chainReactionDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">
  <text x="320" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Nuclear Chain Reaction — 3 Generations</text>
  <text x="280" y="48" font-family="Georgia,serif" font-size="11" fill="#000">Each fission releases 2–3 neutrons, each capable of triggering further fissions</text>
  <!-- Generation 0: single U-235 -->
  <circle cx="100" cy="330" r="32" fill="#eee" stroke="#000" stroke-width="3"/>
  <text x="78" y="323" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">²³⁵U</text>
  <text x="82" y="338" font-family="Georgia,serif" font-size="9" fill="#000">fission</text>
  <text x="68" y="380" font-family="Georgia,serif" font-size="10" fill="#000">Generation 1</text>
  <!-- Neutron into G0 -->
  <circle cx="44" cy="330" r="10" fill="#ccc" stroke="#000" stroke-width="2"/>
  <text x="38" y="334" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000">n</text>
  <line x1="56" y1="330" x2="66" y2="330" stroke="#000" stroke-width="2"/>
  <polygon points="62,325 72,330 62,335" fill="#000"/>
  <!-- 2 neutrons out of G0 → Generation 2 nuclei at (280, 200) and (280, 460) -->
  <line x1="132" y1="315" x2="235" y2="198" stroke="#000" stroke-width="2"/>
  <polygon points="229,196 242,190 237,204" fill="#000"/>
  <line x1="132" y1="345" x2="235" y2="462" stroke="#000" stroke-width="2"/>
  <polygon points="229,458 242,466 236,452" fill="#000"/>
  <!-- neutron symbols on lines -->
  <circle cx="185" cy="257" r="9" fill="#ccc" stroke="#000" stroke-width="1.5"/>
  <text x="180" y="261" font-family="Georgia,serif" font-size="8" fill="#000">n</text>
  <circle cx="185" cy="403" r="9" fill="#ccc" stroke="#000" stroke-width="1.5"/>
  <text x="180" y="407" font-family="Georgia,serif" font-size="8" fill="#000">n</text>
  <!-- Generation 2 nuclei -->
  <circle cx="280" cy="190" r="28" fill="#eee" stroke="#000" stroke-width="3"/>
  <text x="261" y="183" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">²³⁵U</text>
  <text x="264" y="197" font-family="Georgia,serif" font-size="8" fill="#000">fission</text>
  <circle cx="280" cy="470" r="28" fill="#eee" stroke="#000" stroke-width="3"/>
  <text x="261" y="463" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">²³⁵U</text>
  <text x="264" y="477" font-family="Georgia,serif" font-size="8" fill="#000">fission</text>
  <text x="252" y="534" font-family="Georgia,serif" font-size="10" fill="#000">Generation 2</text>
  <!-- Generation 2 top → 2 neutrons → Gen 3: (480,100) and (480,250) -->
  <line x1="308" y1="177" x2="440" y2="106" stroke="#000" stroke-width="1.8"/>
  <polygon points="434,103 447,98 443,112" fill="#000"/>
  <line x1="308" y1="193" x2="440" y2="258" stroke="#000" stroke-width="1.8"/>
  <polygon points="434,253 447,262 440,249" fill="#000"/>
  <circle cx="358" cy="142" r="8" fill="#ccc" stroke="#000" stroke-width="1.5"/>
  <text x="353" y="146" font-family="Georgia,serif" font-size="8" fill="#000">n</text>
  <circle cx="358" cy="226" r="8" fill="#ccc" stroke="#000" stroke-width="1.5"/>
  <text x="353" y="230" font-family="Georgia,serif" font-size="8" fill="#000">n</text>
  <!-- Generation 2 bottom → 2 neutrons → Gen 3: (480,390) and (480,540) -->
  <line x1="308" y1="458" x2="440" y2="392" stroke="#000" stroke-width="1.8"/>
  <polygon points="434,389 447,384 443,398" fill="#000"/>
  <line x1="308" y1="474" x2="440" y2="542" stroke="#000" stroke-width="1.8"/>
  <polygon points="434,537 447,546 440,533" fill="#000"/>
  <circle cx="358" cy="425" r="8" fill="#ccc" stroke="#000" stroke-width="1.5"/>
  <text x="353" y="429" font-family="Georgia,serif" font-size="8" fill="#000">n</text>
  <circle cx="358" cy="508" r="8" fill="#ccc" stroke="#000" stroke-width="1.5"/>
  <text x="353" y="512" font-family="Georgia,serif" font-size="8" fill="#000">n</text>
  <!-- Generation 3 (4 nuclei) -->
  <circle cx="490" cy="98" r="24" fill="#ddd" stroke="#000" stroke-width="2.5"/>
  <text x="477" y="103" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">²³⁵U</text>
  <circle cx="490" cy="270" r="24" fill="#ddd" stroke="#000" stroke-width="2.5"/>
  <text x="477" y="275" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">²³⁵U</text>
  <circle cx="490" cy="392" r="24" fill="#ddd" stroke="#000" stroke-width="2.5"/>
  <text x="477" y="397" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">²³⁵U</text>
  <circle cx="490" cy="560" r="24" fill="#ddd" stroke="#000" stroke-width="2.5"/>
  <text x="477" y="565" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">²³⁵U</text>
  <text x="465" y="624" font-family="Georgia,serif" font-size="10" fill="#000">Generation 3</text>
  <!-- Energy bursts shown as stars -->
  <text x="520" y="104" font-family="Georgia,serif" font-size="18" fill="#000">✦</text>
  <text x="520" y="276" font-family="Georgia,serif" font-size="18" fill="#000">✦</text>
  <text x="520" y="398" font-family="Georgia,serif" font-size="18" fill="#000">✦</text>
  <text x="520" y="566" font-family="Georgia,serif" font-size="18" fill="#000">✦</text>
  <!-- Info box -->
  <rect x="600" y="160" width="380" height="340" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="614" y="184" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Chain Reaction Types:</text>
  <text x="614" y="210" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Sub-critical (k &lt; 1):</text>
  <text x="614" y="228" font-family="Georgia,serif" font-size="11" fill="#000">  Reaction dies out</text>
  <text x="614" y="255" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Critical (k = 1):</text>
  <text x="614" y="273" font-family="Georgia,serif" font-size="11" fill="#000">  Steady power (reactor)</text>
  <text x="614" y="300" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Super-critical (k &gt; 1):</text>
  <text x="614" y="318" font-family="Georgia,serif" font-size="11" fill="#000">  Exponential growth</text>
  <text x="614" y="336" font-family="Georgia,serif" font-size="11" fill="#000">  (atomic bomb)</text>
  <line x1="614" y1="350" x2="968" y2="350" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="614" y="370" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Multiplication factor:</text>
  <text x="614" y="390" font-family="Georgia,serif" font-size="11" fill="#000">  k = neutrons produced /</text>
  <text x="614" y="408" font-family="Georgia,serif" font-size="11" fill="#000">      neutrons absorbed</text>
  <text x="614" y="432" font-family="Georgia,serif" font-size="11" fill="#000">  Controlled by control rods</text>
  <text x="614" y="450" font-family="Georgia,serif" font-size="11" fill="#000">  (e.g. boron absorbs neutrons)</text>
  <text x="614" y="488" font-family="Georgia,serif" font-size="10" fill="#000">Each ✦ = ~200 MeV released</text>
</svg>`;

  // ─── 13. NUCLEAR REACTOR ──────────────────────────────────────────────────
  static nuclearReactorDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="700px" viewBox="0 0 900 700">
  <text x="270" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Pressurised Water Reactor (PWR)</text>
  <text x="290" y="48" font-family="Georgia,serif" font-size="11" fill="#000">Primary loop (reactor) → Secondary loop (steam turbine)</text>
  <!-- Reactor vessel (pressure vessel) -->
  <rect x="60" y="100" width="260" height="380" rx="20" fill="#eee" stroke="#000" stroke-width="4"/>
  <text x="110" y="126" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Pressure Vessel</text>
  <!-- Reactor core -->
  <rect x="100" y="200" width="180" height="200" rx="8" fill="#ddd" stroke="#000" stroke-width="3"/>
  <text x="148" y="295" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Core</text>
  <text x="130" y="312" font-family="Georgia,serif" font-size="10" fill="#000">U-235 fuel rods</text>
  <!-- Fuel rods inside core (vertical lines) -->
  <line x1="118" y1="212" x2="118" y2="388" stroke="#000" stroke-width="4"/>
  <line x1="136" y1="212" x2="136" y2="388" stroke="#000" stroke-width="4"/>
  <line x1="154" y1="212" x2="154" y2="388" stroke="#000" stroke-width="4"/>
  <line x1="172" y1="212" x2="172" y2="388" stroke="#000" stroke-width="4"/>
  <line x1="190" y1="212" x2="190" y2="388" stroke="#000" stroke-width="4"/>
  <line x1="208" y1="212" x2="208" y2="388" stroke="#000" stroke-width="4"/>
  <line x1="226" y1="212" x2="226" y2="388" stroke="#000" stroke-width="4"/>
  <line x1="244" y1="212" x2="244" y2="388" stroke="#000" stroke-width="4"/>
  <line x1="262" y1="212" x2="262" y2="388" stroke="#000" stroke-width="4"/>
  <!-- Control rods (thicker, partially inserted, labelled) -->
  <rect x="143" y="160" width="12" height="180" rx="2" fill="#000"/>
  <text x="120" y="155" font-family="Georgia,serif" font-size="9" fill="#000">ctrl</text>
  <text x="120" y="165" font-family="Georgia,serif" font-size="9" fill="#000">rod</text>
  <rect x="225" y="160" width="12" height="180" rx="2" fill="#000"/>
  <text x="232" y="155" font-family="Georgia,serif" font-size="9" fill="#000">ctrl</text>
  <text x="232" y="165" font-family="Georgia,serif" font-size="9" fill="#000">rod</text>
  <!-- Moderator label -->
  <text x="70" y="192" font-family="Georgia,serif" font-size="10" fill="#000">Moderator:</text>
  <text x="66" y="204" font-family="Georgia,serif" font-size="10" fill="#000">water (H₂O)</text>
  <!-- Primary coolant loop -->
  <!-- Coolant out top right of vessel -->
  <line x1="320" y1="170" x2="420" y2="170" stroke="#000" stroke-width="3"/>
  <polygon points="414,163 430,170 414,177" fill="#000"/>
  <text x="322" y="158" font-family="Georgia,serif" font-size="10" fill="#000">hot coolant →</text>
  <!-- Steam generator (heat exchanger) -->
  <rect x="430" y="120" width="100" height="180" rx="8" fill="#eee" stroke="#000" stroke-width="3"/>
  <text x="438" y="144" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Steam</text>
  <text x="436" y="158" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Generator</text>
  <!-- Heat exchange coils inside -->
  <path d="M448,172 Q470,164 492,172 Q470,180 448,172" fill="none" stroke="#000" stroke-width="2"/>
  <path d="M448,192 Q470,184 492,192 Q470,200 448,192" fill="none" stroke="#000" stroke-width="2"/>
  <path d="M448,212 Q470,204 492,212 Q470,220 448,212" fill="none" stroke="#000" stroke-width="2"/>
  <path d="M448,232 Q470,224 492,232 Q470,240 448,232" fill="none" stroke="#000" stroke-width="2"/>
  <path d="M448,252 Q470,244 492,252 Q470,260 448,252" fill="none" stroke="#000" stroke-width="2"/>
  <!-- Coolant return bottom -->
  <line x1="320" y1="420" x2="420" y2="350" stroke="#000" stroke-width="3"/>
  <polygon points="316,415 318,430 326,418" fill="#000"/>
  <text x="322" y="444" font-family="Georgia,serif" font-size="10" fill="#000">← cool coolant</text>
  <line x1="480" y1="300" x2="480" y2="350" stroke="#000" stroke-width="2.5"/>
  <line x1="480" y1="350" x2="420" y2="350" stroke="#000" stroke-width="2.5"/>
  <!-- Pump (primary) -->
  <circle cx="370" cy="420" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="356" y="425" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">P₁</text>
  <text x="350" y="458" font-family="Georgia,serif" font-size="10" fill="#000">Pump 1</text>
  <!-- Secondary loop (steam side) -->
  <!-- Steam out of generator upward → turbine -->
  <line x1="530" y1="180" x2="630" y2="180" stroke="#000" stroke-width="3"/>
  <polygon points="624,173 640,180 624,187" fill="#000"/>
  <text x="534" y="168" font-family="Georgia,serif" font-size="10" fill="#000">steam →</text>
  <!-- Turbine -->
  <rect x="640" y="140" width="90" height="90" rx="6" fill="#eee" stroke="#000" stroke-width="3"/>
  <text x="660" y="182" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Turbine</text>
  <!-- Turbine blades (schematic) -->
  <line x1="655" y1="155" x2="715" y2="215" stroke="#000" stroke-width="2"/>
  <line x1="655" y1="215" x2="715" y2="155" stroke="#000" stroke-width="2"/>
  <!-- Generator connected to turbine -->
  <line x1="730" y1="185" x2="790" y2="185" stroke="#000" stroke-width="3"/>
  <rect x="790" y="155" width="90" height="60" rx="4" fill="#eee" stroke="#000" stroke-width="3"/>
  <text x="800" y="181" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Generator</text>
  <text x="800" y="197" font-family="Georgia,serif" font-size="10" fill="#000">→ Electricity</text>
  <!-- Condenser (steam → water) -->
  <rect x="640" y="290" width="90" height="70" rx="4" fill="#ddd" stroke="#000" stroke-width="2.5"/>
  <text x="645" y="320" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Condenser</text>
  <text x="648" y="336" font-family="Georgia,serif" font-size="9" fill="#000">steam→water</text>
  <!-- Steam from turbine to condenser -->
  <line x1="685" y1="230" x2="685" y2="288" stroke="#000" stroke-width="2.5"/>
  <polygon points="678,283 685,298 692,283" fill="#000"/>
  <!-- Water back to steam generator -->
  <line x1="640" y1="325" x2="560" y2="325" stroke="#000" stroke-width="2.5"/>
  <line x1="560" y1="325" x2="530" y2="290" stroke="#000" stroke-width="2.5"/>
  <polygon points="525,285 526,300 532,287" fill="#000"/>
  <!-- Pump 2 secondary -->
  <circle cx="595" cy="325" r="18" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="584" y="330" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">P₂</text>
  <!-- Labels -->
  <text x="60" y="518" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Primary loop:</text>
  <text x="60" y="534" font-family="Georgia,serif" font-size="11" fill="#000">High-pressure water (≈155 bar) — never boils — transfers heat</text>
  <text x="60" y="556" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Secondary loop:</text>
  <text x="60" y="572" font-family="Georgia,serif" font-size="11" fill="#000">Lower pressure water — boils to steam — drives turbine → generator → electricity</text>
  <rect x="40" y="600" width="820" height="72" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="55" y="622" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Control rods:</text>
  <text x="55" y="638" font-family="Georgia,serif" font-size="11" fill="#000">Made of boron or cadmium — absorb neutrons — insertion reduces k → shuts reactor down</text>
  <text x="55" y="656" font-family="Georgia,serif" font-size="11" fill="#000">Moderator slows neutrons (fast → thermal), increasing fission probability in U-235</text>
</svg>`;

  // ─── 14. MASS DEFECT ──────────────────────────────────────────────────────
  static massDefectChartSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">
  <text x="220" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Mass Defect — Helium-4 Nucleus</text>
  <text x="190" y="52" font-family="Georgia,serif" font-size="11" fill="#000">The nucleus weighs less than the sum of its constituent nucleons</text>
  <!-- Left side: separated nucleons -->
  <text x="60" y="100" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Free Nucleons (separated)</text>
  <!-- 2 protons -->
  <circle cx="100" cy="160" r="28" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="88" y="165" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">p</text>
  <circle cx="160" cy="160" r="28" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="148" y="165" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">p</text>
  <!-- 2 neutrons -->
  <circle cx="100" cy="230" r="28" fill="#ddd" stroke="#000" stroke-width="3"/>
  <text x="88" y="235" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">n</text>
  <circle cx="160" cy="230" r="28" fill="#ddd" stroke="#000" stroke-width="3"/>
  <text x="148" y="235" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">n</text>
  <!-- Mass of free nucleons -->
  <rect x="56" y="280" width="180" height="70" rx="4" fill="none" stroke="#000" stroke-width="1.8"/>
  <text x="66" y="300" font-family="Georgia,serif" font-size="11" fill="#000">2m_p + 2m_n</text>
  <text x="66" y="318" font-family="Georgia,serif" font-size="11" fill="#000">= 4.03188 u</text>
  <text x="66" y="336" font-family="Georgia,serif" font-size="10" fill="#000">(total free mass)</text>
  <!-- Arrow: combine -->
  <line x1="248" y1="200" x2="340" y2="200" stroke="#000" stroke-width="3"/>
  <polygon points="334,193 350,200 334,207" fill="#000"/>
  <text x="262" y="186" font-family="Georgia,serif" font-size="11" fill="#000">combine →</text>
  <text x="254" y="220" font-family="Georgia,serif" font-size="10" fill="#000">strong force</text>
  <text x="256" y="234" font-family="Georgia,serif" font-size="10" fill="#000">binds nucleons</text>
  <!-- Right side: He-4 nucleus -->
  <text x="400" y="100" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">⁴He Nucleus (bound)</text>
  <circle cx="500" cy="200" r="60" fill="#eee" stroke="#000" stroke-width="3.5"/>
  <text x="468" y="192" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">⁴He</text>
  <text x="472" y="212" font-family="Georgia,serif" font-size="11" fill="#000">nucleus</text>
  <!-- Mass of He-4 -->
  <rect x="408" y="282" width="180" height="70" rx="4" fill="none" stroke="#000" stroke-width="1.8"/>
  <text x="418" y="302" font-family="Georgia,serif" font-size="11" fill="#000">m(⁴He) = 4.00260 u</text>
  <text x="418" y="320" font-family="Georgia,serif" font-size="10" fill="#000">(actual nuclear mass)</text>
  <text x="418" y="338" font-family="Georgia,serif" font-size="10" fill="#000">LESS than free nucleons!</text>
  <!-- Mass defect arrow and label -->
  <line x1="250" y1="340" x2="400" y2="340" stroke="#000" stroke-width="2.5" stroke-dasharray="6,3"/>
  <text x="262" y="330" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Δm = mass defect</text>
  <text x="262" y="358" font-family="Georgia,serif" font-size="11" fill="#000">= 4.03188 − 4.00260</text>
  <text x="262" y="374" font-family="Georgia,serif" font-size="11" fill="#000">= 0.02928 u</text>
  <!-- Binding energy -->
  <rect x="60" y="420" width="680" height="150" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="80" y="446" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Mass–Energy Equivalence (Einstein):</text>
  <text x="80" y="470" font-family="Georgia,serif" font-size="13" fill="#000">E = Δm · c²</text>
  <text x="80" y="492" font-family="Georgia,serif" font-size="11" fill="#000">E_binding(⁴He) = 0.02928 u × 931.5 MeV/u = 27.27 MeV</text>
  <text x="80" y="512" font-family="Georgia,serif" font-size="11" fill="#000">Binding energy per nucleon = 27.27 / 4 = 6.82 MeV/nucleon</text>
  <text x="80" y="534" font-family="Georgia,serif" font-size="10" fill="#000">This energy must be supplied to completely separate the nucleus into free nucleons</text>
  <text x="80" y="554" font-family="Georgia,serif" font-size="10" fill="#000">1 u = 1.66054 × 10⁻²⁷ kg  |  1 u = 931.5 MeV/c²</text>
</svg>`;

  // ─── 15. RADIATION PENETRATION ────────────────────────────────────────────
  static radiationPenetrationSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">
  <text x="300" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Radiation Penetration Power</text>
  <text x="260" y="52" font-family="Georgia,serif" font-size="11" fill="#000">Comparison of alpha, beta, and gamma radiation through matter</text>
  <!-- Source -->
  <circle cx="70" cy="300" r="30" fill="#ccc" stroke="#000" stroke-width="3"/>
  <text x="50" y="296" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Radio-</text>
  <text x="54" y="310" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">active</text>
  <text x="56" y="324" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">source</text>
  <!-- Barriers: paper, aluminium, lead, concrete -->
  <!-- Paper -->
  <rect x="200" y="120" width="24" height="360" fill="#eee" stroke="#000" stroke-width="2.5"/>
  <text x="196" y="108" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Paper</text>
  <text x="196" y="492" font-family="Georgia,serif" font-size="10" fill="#000">~0.1mm</text>
  <!-- Aluminium -->
  <rect x="360" y="120" width="40" height="360" fill="#ccc" stroke="#000" stroke-width="2.5"/>
  <text x="348" y="108" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Aluminium</text>
  <text x="356" y="492" font-family="Georgia,serif" font-size="10" fill="#000">~3–5 mm</text>
  <!-- Lead -->
  <rect x="530" y="120" width="60" height="360" fill="#999" stroke="#000" stroke-width="3"/>
  <text x="530" y="108" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Lead</text>
  <text x="526" y="492" font-family="Georgia,serif" font-size="10" fill="#000">several cm</text>
  <!-- Concrete -->
  <rect x="710" y="120" width="80" height="360" fill="#bbb" stroke="#000" stroke-width="3"/>
  <text x="706" y="108" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Concrete</text>
  <text x="710" y="492" font-family="Georgia,serif" font-size="10" fill="#000">metres thick</text>
  <!-- Alpha ray: stopped by paper -->
  <line x1="100" y1="230" x2="196" y2="230" stroke="#000" stroke-width="4"/>
  <polygon points="190,223 204,230 190,237" fill="#000"/>
  <!-- X mark on paper -->
  <line x1="204" y1="222" x2="218" y2="238" stroke="#000" stroke-width="3"/>
  <line x1="218" y1="222" x2="204" y2="238" stroke="#000" stroke-width="3"/>
  <text x="88" y="218" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">α</text>
  <text x="226" y="234" font-family="Georgia,serif" font-size="10" fill="#000">STOPPED</text>
  <!-- Beta ray: stopped by aluminium -->
  <line x1="100" y1="300" x2="196" y2="300" stroke="#000" stroke-width="3"/>
  <line x1="224" y1="300" x2="356" y2="300" stroke="#000" stroke-width="3"/>
  <polygon points="350,293 364,300 350,307" fill="#000"/>
  <!-- X on aluminium -->
  <line x1="364" y1="292" x2="380" y2="308" stroke="#000" stroke-width="3"/>
  <line x1="380" y1="292" x2="364" y2="308" stroke="#000" stroke-width="3"/>
  <text x="88" y="295" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">β</text>
  <text x="388" y="304" font-family="Georgia,serif" font-size="10" fill="#000">STOPPED</text>
  <!-- Gamma ray: attenuated through lead, continues through concrete (dashed indicates attenuation) -->
  <line x1="100" y1="370" x2="196" y2="370" stroke="#000" stroke-width="2.5"/>
  <line x1="224" y1="370" x2="356" y2="370" stroke="#000" stroke-width="2.5"/>
  <line x1="400" y1="370" x2="526" y2="370" stroke="#000" stroke-width="2.5"/>
  <line x1="590" y1="370" x2="706" y2="370" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <line x1="790" y1="370" x2="880" y2="370" stroke="#000" stroke-width="1" stroke-dasharray="3,4"/>
  <polygon points="874,364 888,370 874,376" fill="#000"/>
  <text x="88" y="365" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">γ</text>
  <text x="860" y="358" font-family="Georgia,serif" font-size="10" fill="#000">attenuated</text>
  <text x="862" y="370" font-family="Georgia,serif" font-size="10" fill="#000">but not</text>
  <text x="866" y="382" font-family="Georgia,serif" font-size="10" fill="#000">stopped</text>
  <!-- Hatch marks on barriers -->
  <line x1="205" y1="135" x2="215" y2="150" stroke="#000" stroke-width="1.2"/>
  <line x1="210" y1="135" x2="220" y2="150" stroke="#000" stroke-width="1.2"/>
  <line x1="215" y1="135" x2="222" y2="150" stroke="#000" stroke-width="1.2"/>
  <!-- Summary table -->
  <rect x="40" y="515" width="920" height="72" rx="5" fill="none" stroke="#000" stroke-width="1.8"/>
  <line x1="40" y1="535" x2="960" y2="535" stroke="#000" stroke-width="1.2"/>
  <line x1="240" y1="515" x2="240" y2="587" stroke="#000" stroke-width="1"/>
  <line x1="480" y1="515" x2="480" y2="587" stroke="#000" stroke-width="1"/>
  <line x1="720" y1="515" x2="720" y2="587" stroke="#000" stroke-width="1"/>
  <text x="110" y="530" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Radiation</text>
  <text x="330" y="530" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Charge / Mass</text>
  <text x="560" y="530" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Stopped by</text>
  <text x="760" y="530" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Ionising power</text>
  <text x="90" y="552" font-family="Georgia,serif" font-size="11" fill="#000">Alpha (α)</text>
  <text x="278" y="552" font-family="Georgia,serif" font-size="11" fill="#000">+2e / 4u</text>
  <text x="490" y="552" font-family="Georgia,serif" font-size="11" fill="#000">Paper / skin</text>
  <text x="740" y="552" font-family="Georgia,serif" font-size="11" fill="#000">Very high</text>
  <text x="90" y="572" font-family="Georgia,serif" font-size="11" fill="#000">Beta (β)</text>
  <text x="276" y="572" font-family="Georgia,serif" font-size="11" fill="#000">−1e / ~0</text>
  <text x="490" y="572" font-family="Georgia,serif" font-size="11" fill="#000">Aluminium (3–5mm)</text>
  <text x="750" y="572" font-family="Georgia,serif" font-size="11" fill="#000">Medium</text>
  <text x="90" y="590" font-family="Georgia,serif" font-size="11" fill="#000">Gamma (γ)</text>
  <text x="280" y="590" font-family="Georgia,serif" font-size="11" fill="#000">0 / 0</text>
  <text x="490" y="590" font-family="Georgia,serif" font-size="11" fill="#000">Lead / thick concrete</text>
  <text x="750" y="590" font-family="Georgia,serif" font-size="11" fill="#000">Low</text>
</svg>`;

  // ─── 16. SPACETIME DIAGRAM ────────────────────────────────────────────────
  static spacetimeDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 800 800">
  <text x="240" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Spacetime Diagram (Minkowski)</text>
  <text x="220" y="50" font-family="Georgia,serif" font-size="11" fill="#000">Worldlines and light cones — ct vs x coordinates</text>
  <!-- Axes: origin at (400,500) -->
  <!-- ct axis (vertical, upward = future) -->
  <line x1="400" y1="720" x2="400" y2="50" stroke="#000" stroke-width="3"/>
  <polygon points="394,56 400,40 406,56" fill="#000"/>
  <text x="410" y="46" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">ct (time)</text>
  <!-- x axis (horizontal) -->
  <line x1="60" y1="500" x2="740" y2="500" stroke="#000" stroke-width="3"/>
  <polygon points="734,494 750,500 734,506" fill="#000"/>
  <text x="752" y="504" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">x</text>
  <!-- Origin label -->
  <circle cx="400" cy="500" r="6" fill="#000"/>
  <text x="406" y="518" font-family="Georgia,serif" font-size="12" fill="#000">O</text>
  <!-- Light cone: ct = +x (forward right) and ct = −x (forward left) -->
  <!-- Future light cone -->
  <line x1="400" y1="500" x2="720" y2="180" stroke="#000" stroke-width="2.5" stroke-dasharray="8,4"/>
  <line x1="400" y1="500" x2="80"  y2="180" stroke="#000" stroke-width="2.5" stroke-dasharray="8,4"/>
  <text x="710" y="170" font-family="Georgia,serif" font-size="11" fill="#000">ct = x</text>
  <text x="56"  y="170" font-family="Georgia,serif" font-size="11" fill="#000">ct = −x</text>
  <!-- Past light cone -->
  <line x1="400" y1="500" x2="720" y2="720" stroke="#000" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="400" y1="500" x2="80"  y2="720" stroke="#000" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- Future cone fill label -->
  <text x="370" y="190" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">FUTURE</text>
  <text x="358" y="208" font-family="Georgia,serif" font-size="11" fill="#000">light cone</text>
  <text x="370" y="730" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">PAST</text>
  <text x="358" y="748" font-family="Georgia,serif" font-size="11" fill="#000">light cone</text>
  <!-- Spacelike regions label -->
  <text x="64" y="510" font-family="Georgia,serif" font-size="11" fill="#000">spacelike</text>
  <text x="680" y="510" font-family="Georgia,serif" font-size="11" fill="#000">spacelike</text>
  <!-- Worldline of stationary observer (vertical) -->
  <line x1="400" y1="500" x2="400" y2="180" stroke="#000" stroke-width="3"/>
  <text x="406" y="200" font-family="Georgia,serif" font-size="11" fill="#000">stationary</text>
  <text x="406" y="214" font-family="Georgia,serif" font-size="11" fill="#000">worldline</text>
  <!-- Worldline of moving observer (angled) -->
  <line x1="400" y1="500" x2="530" y2="180" stroke="#000" stroke-width="2.5" stroke-dasharray="6,3"/>
  <text x="540" y="176" font-family="Georgia,serif" font-size="11" fill="#000">moving observer</text>
  <text x="540" y="190" font-family="Georgia,serif" font-size="11" fill="#000">(v &lt; c)</text>
  <!-- Photon worldline annotation -->
  <text x="590" y="340" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">photon: slope = 45°</text>
  <text x="590" y="356" font-family="Georgia,serif" font-size="11" fill="#000">(v = c)</text>
  <!-- Event A -->
  <circle cx="500" cy="380" r="8" fill="#000"/>
  <text x="512" y="376" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">A</text>
  <text x="512" y="392" font-family="Georgia,serif" font-size="10" fill="#000">(x=100, ct=120)</text>
  <!-- Event B -->
  <circle cx="300" cy="280" r="8" fill="#000"/>
  <text x="310" y="276" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">B</text>
  <text x="310" y="292" font-family="Georgia,serif" font-size="10" fill="#000">(timelike from O)</text>
  <!-- Tick marks on axes -->
  <line x1="400" y1="400" x2="410" y2="400" stroke="#000" stroke-width="1.5"/>
  <text x="414" y="404" font-family="Georgia,serif" font-size="10" fill="#000">ct₁</text>
  <line x1="500" y1="500" x2="500" y2="490" stroke="#000" stroke-width="1.5"/>
  <text x="496" y="484" font-family="Georgia,serif" font-size="10" fill="#000">x₁</text>
  <!-- Info box -->
  <rect x="40" y="570" width="320" height="110" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="52" y="590" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Spacetime interval:</text>
  <text x="52" y="610" font-family="Georgia,serif" font-size="11" fill="#000">s² = (ct)² − x²</text>
  <text x="52" y="630" font-family="Georgia,serif" font-size="11" fill="#000">s² &gt; 0  →  timelike (causal)</text>
  <text x="52" y="650" font-family="Georgia,serif" font-size="11" fill="#000">s² = 0  →  lightlike (photon)</text>
  <text x="52" y="670" font-family="Georgia,serif" font-size="11" fill="#000">s² &lt; 0  →  spacelike</text>
</svg>`;

  // ─── 17. TIME DILATION ────────────────────────────────────────────────────
  static timeDilationSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">
  <text x="280" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Time Dilation — Lorentz Factor γ vs v/c</text>
  <text x="250" y="52" font-family="Georgia,serif" font-size="11" fill="#000">Moving clocks run slower: t = γ t₀   where γ = 1/√(1−v²/c²)</text>
  <!-- Axes: x from 80 to 800 (v/c 0→1), y from 80 to 480 (γ 1→∞) -->
  <line x1="80" y1="80" x2="80" y2="480" stroke="#000" stroke-width="3"/>
  <line x1="80" y1="480" x2="820" y2="480" stroke="#000" stroke-width="3"/>
  <polygon points="814,473 830,480 814,487" fill="#000"/>
  <polygon points="74,86 80,70 86,86" fill="#000"/>
  <text x="834" y="484" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">v/c</text>
  <text x="88" y="68" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">γ</text>
  <!-- X ticks: v/c 0,0.2,0.4,0.6,0.8,0.9,0.99,1.0 mapped to x=80,222,364,506,648,719,784,800 -->
  <line x1="80"  y1="480" x2="80"  y2="492" stroke="#000" stroke-width="2"/>
  <text x="74"  y="506" font-family="Georgia,serif" font-size="10" fill="#000">0</text>
  <line x1="222" y1="480" x2="222" y2="492" stroke="#000" stroke-width="2"/>
  <text x="214" y="506" font-family="Georgia,serif" font-size="10" fill="#000">0.2</text>
  <line x1="364" y1="480" x2="364" y2="492" stroke="#000" stroke-width="2"/>
  <text x="356" y="506" font-family="Georgia,serif" font-size="10" fill="#000">0.4</text>
  <line x1="506" y1="480" x2="506" y2="492" stroke="#000" stroke-width="2"/>
  <text x="498" y="506" font-family="Georgia,serif" font-size="10" fill="#000">0.6</text>
  <line x1="648" y1="480" x2="648" y2="492" stroke="#000" stroke-width="2"/>
  <text x="640" y="506" font-family="Georgia,serif" font-size="10" fill="#000">0.8</text>
  <line x1="719" y1="480" x2="719" y2="492" stroke="#000" stroke-width="2"/>
  <text x="711" y="506" font-family="Georgia,serif" font-size="10" fill="#000">0.9</text>
  <!-- Y ticks: γ=1 at y=480, γ=2 at y=400, γ=3 at y=320, γ=5 at y=200, γ=7 at y=120 -->
  <line x1="80" y1="480" x2="70" y2="480" stroke="#000" stroke-width="2"/>
  <text x="50" y="484" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <line x1="80" y1="400" x2="70" y2="400" stroke="#000" stroke-width="2"/>
  <text x="50" y="404" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <line x1="80" y1="320" x2="70" y2="320" stroke="#000" stroke-width="2"/>
  <text x="50" y="324" font-family="Georgia,serif" font-size="10" fill="#000">3</text>
  <line x1="80" y1="200" x2="70" y2="200" stroke="#000" stroke-width="2"/>
  <text x="50" y="204" font-family="Georgia,serif" font-size="10" fill="#000">5</text>
  <line x1="80" y1="120" x2="70" y2="120" stroke="#000" stroke-width="2"/>
  <text x="50" y="124" font-family="Georgia,serif" font-size="10" fill="#000">7</text>
  <!-- Gridlines -->
  <line x1="80" y1="400" x2="800" y2="400" stroke="#000" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="80" y1="320" x2="800" y2="320" stroke="#000" stroke-width="1" stroke-dasharray="4,4"/>
  <!-- Y axis label -->
  <text x="14" y="300" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" transform="rotate(-90,22,300)">Lorentz Factor γ</text>
  <!-- Curve: γ = 1/sqrt(1-v²)
       v/c: 0→1, x=80+v*720
       γ(0)=1 y=480, γ(0.2)=1.02 y=478, γ(0.4)=1.09 y=474, γ(0.6)=1.25 y=466,
       γ(0.8)=1.67 y=442, γ(0.9)=2.29 y=412, γ(0.95)=3.20 y=368, γ(0.99)=7.09 y=141 -->
  <path d="M80,480 L222,478 L364,474 L506,466 L648,442 L719,412 L755,368 L784,141"
        fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Key points annotated -->
  <circle cx="648" cy="442" r="6" fill="#000"/>
  <text x="656" y="438" font-family="Georgia,serif" font-size="11" fill="#000">v=0.8c, γ=1.67</text>
  <circle cx="719" cy="412" r="6" fill="#000"/>
  <text x="727" y="408" font-family="Georgia,serif" font-size="11" fill="#000">v=0.9c, γ=2.29</text>
  <circle cx="784" cy="141" r="6" fill="#000"/>
  <text x="786" y="130" font-family="Georgia,serif" font-size="11" fill="#000">v=0.99c</text>
  <text x="786" y="144" font-family="Georgia,serif" font-size="11" fill="#000">γ≈7.1</text>
  <!-- Asymptote line at v=c -->
  <line x1="800" y1="80" x2="800" y2="480" stroke="#000" stroke-width="1.5" stroke-dasharray="4,4"/>
  <text x="804" y="100" font-family="Georgia,serif" font-size="10" fill="#000">v=c</text>
  <text x="796" y="116" font-family="Georgia,serif" font-size="10" fill="#000">(asymptote)</text>
  <!-- Example box -->
  <rect x="90" y="90" width="310" height="120" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="104" y="112" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Example (muon decay):</text>
  <text x="104" y="132" font-family="Georgia,serif" font-size="11" fill="#000">v = 0.9994c,  γ ≈ 29</text>
  <text x="104" y="152" font-family="Georgia,serif" font-size="11" fill="#000">Proper lifetime t₀ = 2.2 μs</text>
  <text x="104" y="172" font-family="Georgia,serif" font-size="11" fill="#000">Observed lifetime t = γt₀ ≈ 64 μs</text>
  <text x="104" y="192" font-family="Georgia,serif" font-size="10" fill="#000">→ muons reach Earth's surface!</text>
</svg>`;

  // ─── 18. LENGTH CONTRACTION ───────────────────────────────────────────────
  static lengthContractionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">
  <text x="260" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Length Contraction — Relativistic Effect</text>
  <text x="220" y="52" font-family="Georgia,serif" font-size="11" fill="#000">A moving object appears shorter along the direction of motion: L = L₀/γ</text>
  <!-- Rest Frame: object at rest -->
  <text x="60" y="100" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Rest Frame (proper length L₀)</text>
  <!-- Object (rocket / rod) at rest -->
  <rect x="100" y="130" width="600" height="80" rx="10" fill="#eee" stroke="#000" stroke-width="4"/>
  <text x="360" y="178" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Object at rest</text>
  <!-- Proper length arrow -->
  <line x1="100" y1="230" x2="700" y2="230" stroke="#000" stroke-width="2.5"/>
  <polygon points="104,224 90,230 104,236" fill="#000"/>
  <polygon points="696,224 710,230 696,236" fill="#000"/>
  <text x="350" y="250" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">L₀ = 100 m</text>
  <!-- Moving Frame: object contracts -->
  <text x="60" y="310" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Moving Frame  (v = 0.8c,  γ = 1.667)</text>
  <!-- Contracted object -->
  <rect x="100" y="340" width="360" height="80" rx="10" fill="#ddd" stroke="#000" stroke-width="4"/>
  <text x="210" y="388" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Contracted object</text>
  <!-- Velocity arrow -->
  <line x1="470" y1="380" x2="620" y2="380" stroke="#000" stroke-width="3"/>
  <polygon points="614,373 630,380 614,387" fill="#000"/>
  <text x="632" y="376" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">v = 0.8c</text>
  <!-- Contracted length arrow -->
  <line x1="100" y1="440" x2="460" y2="440" stroke="#000" stroke-width="2.5"/>
  <polygon points="104,434 90,440 104,446" fill="#000"/>
  <polygon points="456,434 470,440 456,446" fill="#000"/>
  <text x="230" y="460" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">L = 60 m</text>
  <!-- Dotted outline showing original length in moving frame -->
  <rect x="100" y="340" width="600" height="80" rx="10" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="8,4"/>
  <text x="500" y="376" font-family="Georgia,serif" font-size="11" fill="#000">(original L₀ shown dotted)</text>
  <!-- Formulae box -->
  <rect x="60" y="490" width="780" height="90" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="80" y="514" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Formula:</text>
  <text x="80" y="538" font-family="Georgia,serif" font-size="13" fill="#000">L = L₀ / γ = L₀ √(1 − v²/c²)</text>
  <text x="80" y="560" font-family="Georgia,serif" font-size="11" fill="#000">= 100 × √(1 − 0.64) = 100 × 0.6 = 60 m</text>
  <text x="450" y="538" font-family="Georgia,serif" font-size="11" fill="#000">Contraction only along direction of motion</text>
  <text x="450" y="558" font-family="Georgia,serif" font-size="11" fill="#000">Perpendicular dimensions unchanged</text>
  <!-- Comparison scale -->
  <text x="730" y="260" font-family="Georgia,serif" font-size="11" fill="#000">Comparison:</text>
  <text x="730" y="278" font-family="Georgia,serif" font-size="11" fill="#000">v=0    L=100m</text>
  <text x="730" y="296" font-family="Georgia,serif" font-size="11" fill="#000">v=0.6c L=80m</text>
  <text x="730" y="314" font-family="Georgia,serif" font-size="11" fill="#000">v=0.8c L=60m</text>
  <text x="730" y="332" font-family="Georgia,serif" font-size="11" fill="#000">v=0.9c L=44m</text>
  <text x="730" y="350" font-family="Georgia,serif" font-size="11" fill="#000">v=0.99c L=14m</text>
</svg>`;

  // ─── 19. CURVED SPACETIME ─────────────────────────────────────────────────
  static curvedSpacetimeSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">
  <text x="200" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Curved Spacetime — Gravity (Rubber Sheet Model)</text>
  <text x="180" y="50" font-family="Georgia,serif" font-size="11" fill="#000">Mass curves spacetime; other objects follow curved geodesics (orbits)</text>
  <!-- Grid of curved lines to represent warped spacetime fabric -->
  <!-- Horizontal curved gridlines (warped downward near centre) -->
  <!-- Row 1 (top, least curved) -->
  <path d="M60,120 Q200,118 400,116 Q600,118 740,120" fill="none" stroke="#000" stroke-width="1.2" stroke-dasharray="none"/>
  <!-- Row 2 -->
  <path d="M60,180 Q200,176 400,170 Q600,176 740,180" fill="none" stroke="#000" stroke-width="1.2"/>
  <!-- Row 3 -->
  <path d="M60,240 Q200,234 400,222 Q600,234 740,240" fill="none" stroke="#000" stroke-width="1.2"/>
  <!-- Row 4 (near mass, strongly curved) -->
  <path d="M60,300 Q200,290 360,310 Q380,340 400,350 Q420,340 440,310 Q600,290 740,300" fill="none" stroke="#000" stroke-width="1.5"/>
  <!-- Row 5 -->
  <path d="M60,360 Q200,348 360,358 Q380,375 400,382 Q420,375 440,358 Q600,348 740,360" fill="none" stroke="#000" stroke-width="1.2"/>
  <!-- Row 6 -->
  <path d="M60,420 Q200,412 360,416 Q380,424 400,428 Q420,424 440,416 Q600,412 740,420" fill="none" stroke="#000" stroke-width="1"/>
  <!-- Row 7 (bottom) -->
  <path d="M60,470 Q200,464 400,466 Q600,464 740,470" fill="none" stroke="#000" stroke-width="1"/>
  <!-- Vertical curved gridlines -->
  <path d="M140,100 Q140,220 138,300 Q136,350 140,430 Q142,460 144,490" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <path d="M220,100 Q218,220 214,300 Q210,350 216,430 Q218,470 220,490" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <path d="M300,100 Q296,220 288,300 Q282,360 292,430 Q296,470 298,490" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <path d="M400,100 Q398,220 390,300 Q384,370 395,430 Q398,470 400,490" fill="none" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <path d="M500,100 Q504,220 512,300 Q518,360 508,430 Q504,470 502,490" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <path d="M580,100 Q582,220 586,300 Q590,350 584,430 Q582,470 580,490" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <path d="M660,100 Q662,220 662,300 Q662,350 662,430 Q662,470 660,490" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Central mass -->
  <circle cx="400" cy="340" r="38" fill="#000" stroke="#000" stroke-width="3"/>
  <text x="380" y="336" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#fff">Mass</text>
  <text x="384" y="352" font-family="Georgia,serif" font-size="11" fill="#fff">M</text>
  <!-- Orbiting object -->
  <circle cx="560" cy="260" r="14" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="552" y="265" font-family="Georgia,serif" font-size="10" fill="#000">m</text>
  <!-- Orbit path (ellipse around mass) -->
  <ellipse cx="400" cy="330" rx="165" ry="85" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,4"/>
  <!-- Velocity arrow on orbiting object -->
  <line x1="560" y1="248" x2="520" y2="210" stroke="#000" stroke-width="2.5"/>
  <polygon points="515,214 510,200 524,210" fill="#000"/>
  <text x="510" y="198" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">v</text>
  <!-- Geodesic label -->
  <text x="570" y="310" font-family="Georgia,serif" font-size="11" fill="#000">geodesic</text>
  <text x="570" y="324" font-family="Georgia,serif" font-size="11" fill="#000">(orbit)</text>
  <!-- Light ray bending -->
  <path d="M80,160 Q300,158 400,192 Q500,228 700,230" fill="none" stroke="#000" stroke-width="2.5"/>
  <polygon points="694,224 708,230 695,237" fill="#000"/>
  <text x="64" y="156" font-family="Georgia,serif" font-size="10" fill="#000">light ray</text>
  <text x="64" y="170" font-family="Georgia,serif" font-size="10" fill="#000">(bent by gravity)</text>
  <!-- Info box -->
  <rect x="40" y="510" width="720" height="72" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="55" y="530" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">General Relativity (Einstein 1915):</text>
  <text x="55" y="550" font-family="Georgia,serif" font-size="11" fill="#000">Mass-energy tells spacetime how to curve; curved spacetime tells matter how to move</text>
  <text x="55" y="570" font-family="Georgia,serif" font-size="11" fill="#000">G_μν = (8πG/c⁴) T_μν     |     Gravity ≈ curvature of 4D spacetime</text>
</svg>`;

  // ─── 20. TWIN PARADOX ────────────────────────────────────────────────────
  static twinParadoxSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="700px" viewBox="0 0 900 700">
  <text x="280" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Twin Paradox — Spacetime Worldlines</text>
  <text x="210" y="50" font-family="Georgia,serif" font-size="11" fill="#000">Travelling twin (v=0.9c) ages less than stay-at-home twin due to asymmetric acceleration</text>
  <!-- Axes: x=position, y=time (upward) -->
  <!-- Time axis -->
  <line x1="200" y1="600" x2="200" y2="80" stroke="#000" stroke-width="3"/>
  <polygon points="194,86 200,70 206,86" fill="#000"/>
  <text x="140" y="76" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Time (years)</text>
  <!-- Position axis -->
  <line x1="200" y1="600" x2="700" y2="600" stroke="#000" stroke-width="3"/>
  <polygon points="694,594 710,600 694,606" fill="#000"/>
  <text x="712" y="604" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">x</text>
  <!-- Origin -->
  <circle cx="200" cy="600" r="6" fill="#000"/>
  <text x="206" y="618" font-family="Georgia,serif" font-size="12" fill="#000">Start (age 20)</text>
  <!-- Time ticks: 0,2,4,6,8,10 years mapped to y=600,540,480,420,360,300 -->
  <line x1="200" y1="600" x2="190" y2="600" stroke="#000" stroke-width="2"/>
  <text x="164" y="604" font-family="Georgia,serif" font-size="11" fill="#000">t=0</text>
  <line x1="200" y1="540" x2="190" y2="540" stroke="#000" stroke-width="2"/>
  <text x="164" y="544" font-family="Georgia,serif" font-size="11" fill="#000">t=2</text>
  <line x1="200" y1="480" x2="190" y2="480" stroke="#000" stroke-width="2"/>
  <text x="164" y="484" font-family="Georgia,serif" font-size="11" fill="#000">t=4</text>
  <line x1="200" y1="420" x2="190" y2="420" stroke="#000" stroke-width="2"/>
  <text x="164" y="424" font-family="Georgia,serif" font-size="11" fill="#000">t=6</text>
  <line x1="200" y1="360" x2="190" y2="360" stroke="#000" stroke-width="2"/>
  <text x="164" y="364" font-family="Georgia,serif" font-size="11" fill="#000">t=8</text>
  <line x1="200" y1="300" x2="190" y2="300" stroke="#000" stroke-width="2"/>
  <text x="158" y="304" font-family="Georgia,serif" font-size="11" fill="#000">t=10</text>
  <!-- Stay-at-home twin: vertical worldline at x=200 -->
  <line x1="200" y1="600" x2="200" y2="300" stroke="#000" stroke-width="4"/>
  <circle cx="200" cy="300" r="8" fill="#000"/>
  <text x="140" y="290" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Twin A</text>
  <text x="136" y="306" font-family="Georgia,serif" font-size="11" fill="#000">(stays home)</text>
  <text x="136" y="322" font-family="Georgia,serif" font-size="11" fill="#000">age: 20+10=30</text>
  <!-- Travelling twin: out to x=450 at t=5 (y=450), back at t=10 (y=300) -->
  <!-- v=0.9c, γ≈2.29, proper time on trip = 10/γ ≈ 4.37 years -->
  <line x1="200" y1="600" x2="450" y2="450" stroke="#000" stroke-width="3.5" stroke-dasharray="8,4"/>
  <line x1="450" y1="450" x2="200" y2="300" stroke="#000" stroke-width="3.5" stroke-dasharray="8,4"/>
  <circle cx="450" cy="450" r="8" fill="#000"/>
  <text x="460" y="446" font-family="Georgia,serif" font-size="12" fill="#000">turnaround</text>
  <text x="460" y="462" font-family="Georgia,serif" font-size="12" fill="#000">point</text>
  <!-- Twin B end point -->
  <circle cx="200" cy="300" r="10" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="210" y="296" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Twin B returns</text>
  <text x="210" y="312" font-family="Georgia,serif" font-size="11" fill="#000">age: 20+4.37≈24.4</text>
  <!-- v=0.9c annotation on worldline -->
  <text x="340" y="552" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">v = 0.9c →</text>
  <text x="246" y="392" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">← v = 0.9c</text>
  <!-- Proper time arc indicator -->
  <path d="M200,450 Q320,440 450,450" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="290" y="434" font-family="Georgia,serif" font-size="10" fill="#000">τ_B (outward)</text>
  <!-- Age difference explanation -->
  <rect x="530" y="280" width="340" height="200" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="545" y="302" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Calculation (v = 0.9c):</text>
  <text x="545" y="325" font-family="Georgia,serif" font-size="11" fill="#000">γ = 1/√(1−0.81) = 1/0.436 ≈ 2.29</text>
  <text x="545" y="347" font-family="Georgia,serif" font-size="11" fill="#000">Earth time: 10 years</text>
  <text x="545" y="369" font-family="Georgia,serif" font-size="11" fill="#000">Traveller proper time:</text>
  <text x="545" y="391" font-family="Georgia,serif" font-size="11" fill="#000">  τ = t/γ = 10/2.29 ≈ 4.37 yrs</text>
  <text x="545" y="415" font-family="Georgia,serif" font-size="11" fill="#000">Age difference: 10−4.37 = 5.63 yrs</text>
  <text x="545" y="439" font-family="Georgia,serif" font-size="11" fill="#000">Twin A age 30, Twin B age ~24.4</text>
  <text x="545" y="465" font-family="Georgia,serif" font-size="10" fill="#000">Paradox resolved: asymmetric —</text>
  <text x="545" y="481" font-family="Georgia,serif" font-size="10" fill="#000">only B accelerates at turnaround</text>
  <!-- Note box at bottom -->
  <rect x="60" y="620" width="780" height="56" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="4,3"/>
  <text x="74" y="642" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key point:</text>
  <text x="74" y="660" font-family="Georgia,serif" font-size="11" fill="#000">The situation is NOT symmetric — Twin B must accelerate to turn around, breaking symmetry. Twin B ages less.</text>
</svg>`;

  // ─── 21. RELATIVISTIC VELOCITY ADDITION ──────────────────────────────────
  static velocityAdditionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">
  <text x="220" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Relativistic Velocity Addition</text>
  <text x="180" y="50" font-family="Georgia,serif" font-size="11" fill="#000">u' = (v + u) / (1 + vu/c²) — combined speed never exceeds c</text>
  <!-- Frame diagram -->
  <!-- Ground frame -->
  <text x="40" y="110" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Scenario:</text>
  <!-- Train (frame S') moving at v=0.6c -->
  <rect x="100" y="130" width="300" height="80" rx="8" fill="#eee" stroke="#000" stroke-width="3"/>
  <text x="180" y="175" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Train (frame S')</text>
  <line x1="400" y1="170" x2="480" y2="170" stroke="#000" stroke-width="3"/>
  <polygon points="474,163 490,170 474,177" fill="#000"/>
  <text x="494" y="166" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">v = 0.6c</text>
  <text x="490" y="182" font-family="Georgia,serif" font-size="11" fill="#000">(train speed)</text>
  <!-- Ball thrown inside train at u=0.7c -->
  <circle cx="200" cy="165" r="14" fill="#ccc" stroke="#000" stroke-width="2.5"/>
  <text x="192" y="170" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">●</text>
  <line x1="216" y1="165" x2="290" y2="165" stroke="#000" stroke-width="2.5"/>
  <polygon points="284,158 298,165 284,172" fill="#000"/>
  <text x="236" y="152" font-family="Georgia,serif" font-size="11" fill="#000">u = 0.7c (in train)</text>
  <!-- Separator line -->
  <line x1="40" y1="238" x2="860" y2="238" stroke="#000" stroke-width="1.5" stroke-dasharray="5,5"/>
  <!-- Classical vs Relativistic comparison -->
  <text x="40" y="272" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Classical (Galilean):</text>
  <rect x="40" y="285" width="380" height="90" rx="5" fill="#eee" stroke="#000" stroke-width="2.5"/>
  <text x="55" y="312" font-family="Georgia,serif" font-size="12" fill="#000">u_total = v + u</text>
  <text x="55" y="334" font-family="Georgia,serif" font-size="12" fill="#000">= 0.6c + 0.7c = 1.3c</text>
  <text x="55" y="356" font-family="Georgia,serif" font-size="11" fill="#000">⚠ EXCEEDS speed of light! (WRONG)</text>
  <text x="40" y="402" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Relativistic (Einstein):</text>
  <rect x="40" y="415" width="380" height="120" rx="5" fill="#eee" stroke="#000" stroke-width="2.5"/>
  <text x="55" y="440" font-family="Georgia,serif" font-size="12" fill="#000">u' = (v + u) / (1 + vu/c²)</text>
  <text x="55" y="462" font-family="Georgia,serif" font-size="12" fill="#000">= (0.6c + 0.7c) / (1 + 0.6×0.7)</text>
  <text x="55" y="484" font-family="Georgia,serif" font-size="12" fill="#000">= 1.3c / (1 + 0.42)</text>
  <text x="55" y="506" font-family="Georgia,serif" font-size="12" fill="#000">= 1.3c / 1.42 ≈ 0.915c ✓</text>
  <text x="55" y="526" font-family="Georgia,serif" font-size="11" fill="#000">Always &lt; c — correct!</text>
  <!-- Graph: classical vs relativistic -->
  <text x="480" y="272" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">u' vs u (for v = 0.6c):</text>
  <!-- Axes -->
  <line x1="480" y1="290" x2="480" y2="540" stroke="#000" stroke-width="2.5"/>
  <line x1="480" y1="540" x2="860" y2="540" stroke="#000" stroke-width="2.5"/>
  <polygon points="854,534 870,540 854,546" fill="#000"/>
  <polygon points="474,296 480,280 486,296" fill="#000"/>
  <text x="874" y="544" font-family="Georgia,serif" font-size="11" fill="#000">u/c</text>
  <text x="484" y="278" font-family="Georgia,serif" font-size="11" fill="#000">u'/c</text>
  <!-- Tick labels -->
  <text x="548" y="554" font-family="Georgia,serif" font-size="10" fill="#000">0.2</text>
  <text x="615" y="554" font-family="Georgia,serif" font-size="10" fill="#000">0.4</text>
  <text x="682" y="554" font-family="Georgia,serif" font-size="10" fill="#000">0.6</text>
  <text x="749" y="554" font-family="Georgia,serif" font-size="10" fill="#000">0.8</text>
  <text x="818" y="554" font-family="Georgia,serif" font-size="10" fill="#000">1.0</text>
  <!-- u' y values: at u=0 u'=0.6, u=0.5 u'=0.847, u=1.0 u'=1.0 -->
  <!-- Scale: x=480+u*340, y=540-u'*250 -->
  <!-- Classical line: u'=u+0.6, (480,390) to (820,290) truncated at y=290 -->
  <line x1="480" y1="390" x2="735" y2="290" stroke="#000" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="740" y="286" font-family="Georgia,serif" font-size="10" fill="#000">classical</text>
  <!-- Relativistic curve: u=0 (480,390), u=0.5 (650,328), u=0.8 (752,310), u=1.0 (820,290) -->
  <path d="M480,390 Q570,362 650,328 Q720,310 820,290" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <!-- Asymptote c -->
  <line x1="480" y1="290" x2="860" y2="290" stroke="#000" stroke-width="1" stroke-dasharray="3,4"/>
  <text x="810" y="286" font-family="Georgia,serif" font-size="10" fill="#000">c limit</text>
  <text x="720" y="320" font-family="Georgia,serif" font-size="10" fill="#000">relativistic</text>
  <!-- Key data point -->
  <circle cx="718" cy="315" r="5" fill="#000"/>
  <text x="726" y="312" font-family="Georgia,serif" font-size="9" fill="#000">u=0.7c→0.915c</text>
</svg>`;




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

export { PhysicsSvgDiagrams };
