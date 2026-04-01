class PhysicsSvgDiagrams {

// ─── NUCLEAR FUSION DIAGRAM ───────────────────────────────────────────────
  static nuclearFusionDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="280" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Nuclear Fusion</text>
  <text x="220" y="50" font-family="Georgia,serif" font-size="11" fill="#333">Hydrogen isotopes fuse to form helium, releasing energy</text>

  <!-- ── Deuterium nucleus (left) H-2: 1 proton + 1 neutron ── -->
  <!-- Proton -->
  <circle cx="120" cy="240" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="111" y="245" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">p⁺</text>
  <!-- Neutron -->
  <circle cx="120" cy="290" r="22" fill="#fff" stroke="#000" stroke-width="2.5" stroke-dasharray="5,3"/>
  <text x="112" y="295" font-family="Georgia,serif" font-size="12" fill="#000">n⁰</text>
  <!-- Deuterium label -->
  <text x="75" y="195" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">²H</text>
  <text x="62" y="210" font-family="Georgia,serif" font-size="10" fill="#333">(Deuterium)</text>
  <!-- Brace/box around -->
  <rect x="88" y="212" width="66" height="110" rx="8" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>

  <!-- ── Tritium nucleus (left-lower) H-3: 1 proton + 2 neutrons ── -->
  <circle cx="120" cy="410" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="111" y="415" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">p⁺</text>
  <circle cx="155" cy="390" r="22" fill="#fff" stroke="#000" stroke-width="2.5" stroke-dasharray="5,3"/>
  <text x="147" y="395" font-family="Georgia,serif" font-size="12" fill="#000">n⁰</text>
  <circle cx="155" cy="430" r="22" fill="#fff" stroke="#000" stroke-width="2.5" stroke-dasharray="5,3"/>
  <text x="147" y="435" font-family="Georgia,serif" font-size="12" fill="#000">n⁰</text>
  <text x="75" y="370" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">³H</text>
  <text x="65" y="385" font-family="Georgia,serif" font-size="10" fill="#333">(Tritium)</text>
  <rect x="88" y="362" width="100" height="110" rx="8" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>

  <!-- ── Arrows toward fusion zone ── -->
  <line x1="200" y1="265" x2="330" y2="310" stroke="#000" stroke-width="2.5"/>
  <polygon points="324,304 338,312 326,318" fill="#000"/>
  <line x1="215" y1="415" x2="330" y2="340" stroke="#000" stroke-width="2.5"/>
  <polygon points="323,335 337,342 327,350" fill="#000"/>

  <!-- ── High temperature condition label ── -->
  <text x="230" y="290" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">T ≈ 10⁸ K</text>
  <text x="226" y="302" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">(plasma state)</text>

  <!-- ── Fusion zone (starburst) ── -->
  <circle cx="390" cy="320" r="48" fill="#fff" stroke="#000" stroke-width="2"/>
  <!-- Starburst rays -->
  <line x1="390" y1="260" x2="390" y2="248" stroke="#000" stroke-width="2"/>
  <line x1="430" y1="276" x2="439" y2="267" stroke="#000" stroke-width="2"/>
  <line x1="445" y1="315" x2="457" y2="313" stroke="#000" stroke-width="2"/>
  <line x1="432" y1="358" x2="441" y2="367" stroke="#000" stroke-width="2"/>
  <line x1="390" y1="375" x2="390" y2="387" stroke="#000" stroke-width="2"/>
  <line x1="348" y1="358" x2="339" y2="367" stroke="#000" stroke-width="2"/>
  <line x1="335" y1="315" x2="323" y2="313" stroke="#000" stroke-width="2"/>
  <line x1="350" y1="276" x2="341" y2="267" stroke="#000" stroke-width="2"/>
  <text x="365" y="315" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">FUSION</text>
  <text x="362" y="330" font-family="Georgia,serif" font-size="10" fill="#333">17.6 MeV</text>

  <!-- ── Helium-4 nucleus (right) 2 protons + 2 neutrons ── -->
  <circle cx="580" cy="270" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="571" y="275" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">p⁺</text>
  <circle cx="620" cy="270" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="611" y="275" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">p⁺</text>
  <circle cx="580" cy="310" r="22" fill="#fff" stroke="#000" stroke-width="2.5" stroke-dasharray="5,3"/>
  <text x="572" y="315" font-family="Georgia,serif" font-size="12" fill="#000">n⁰</text>
  <circle cx="620" cy="310" r="22" fill="#fff" stroke="#000" stroke-width="2.5" stroke-dasharray="5,3"/>
  <text x="612" y="315" font-family="Georgia,serif" font-size="12" fill="#000">n⁰</text>
  <text x="574" y="226" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">⁴He</text>
  <text x="560" y="241" font-family="Georgia,serif" font-size="10" fill="#333">(Helium-4 nucleus)</text>
  <rect x="550" y="243" width="104" height="100" rx="8" fill="none" stroke="#000" stroke-width="2"/>

  <!-- ── Neutron released (right-lower) ── -->
  <circle cx="600" cy="430" r="22" fill="#fff" stroke="#000" stroke-width="2.5" stroke-dasharray="5,3"/>
  <text x="592" y="435" font-family="Georgia,serif" font-size="12" fill="#000">n⁰</text>
  <text x="556" y="465" font-family="Georgia,serif" font-size="10" fill="#333">(fast neutron, 14.1 MeV)</text>

  <!-- ── Arrows from fusion zone to products ── -->
  <line x1="435" y1="300" x2="540" y2="282" stroke="#000" stroke-width="2.5"/>
  <polygon points="534,276 548,283 536,290" fill="#000"/>
  <line x1="435" y1="345" x2="570" y2="415" stroke="#000" stroke-width="2.5"/>
  <polygon points="564,408 578,418 566,424" fill="#000"/>

  <!-- ── Energy release wavy arrow ── -->
  <path d="M 700,290 Q 715,278 730,290 Q 745,302 760,290 Q 775,278 790,290"
        fill="none" stroke="#000" stroke-width="2.5"/>
  <polygon points="786,284 800,291 786,298" fill="#000"/>
  <text x="700" y="265" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Energy</text>
  <text x="700" y="278" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">release</text>
  <text x="698" y="312" font-family="Georgia,serif" font-size="10" fill="#333">E = mc²</text>

  <!-- ── Overall equation ── -->
  <rect x="200" y="520" width="500" height="60" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="220" y="545" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">²H + ³H → ⁴He + n⁰ + 17.6 MeV</text>
  <text x="240" y="563" font-family="Georgia,serif" font-size="10" fill="#333">Mass defect converted to energy via E = mc²</text>

  <!-- Legend -->
  <circle cx="50" cy="530" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="65" y="534" font-family="Georgia,serif" font-size="10" fill="#000">Proton (p⁺)</text>
  <circle cx="50" cy="555" r="10" fill="#fff" stroke="#000" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="65" y="559" font-family="Georgia,serif" font-size="10" fill="#000">Neutron (n⁰)</text>
</svg>`;

  // ─── CHAIN REACTION DIAGRAM ───────────────────────────────────────────────
  static chainReactionDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="700px" viewBox="0 0 900 700">

  <!-- Title -->
  <text x="270" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Nuclear Chain Reaction</text>
  <text x="200" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Each fission releases neutrons that trigger further fissions</text>

  <!-- ═══════════════════════════════════════
       GENERATION 0 — initial neutron + U-235
  ═══════════════════════════════════════ -->
  <!-- Incoming neutron -->
  <circle cx="60" cy="180" r="8" fill="#000"/>
  <line x1="68" y1="180" x2="120" y2="180" stroke="#000" stroke-width="2"/>
  <polygon points="114,175 128,180 114,185" fill="#000"/>
  <text x="30" y="175" font-family="Georgia,serif" font-size="10" fill="#000">n⁰</text>
  <text x="20" y="155" font-family="Georgia,serif" font-size="9" fill="#333">(slow/thermal)</text>

  <!-- Gen 0 fission nucleus -->
  <circle cx="165" cy="180" r="30" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="147" y="177" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">²³⁵U</text>
  <text x="152" y="190" font-family="Georgia,serif" font-size="9" fill="#333">+ n⁰</text>

  <!-- Fission burst lines -->
  <line x1="165" y1="140" x2="165" y2="128" stroke="#000" stroke-width="1.5"/>
  <line x1="192" y1="155" x2="202" y2="146" stroke="#000" stroke-width="1.5"/>
  <line x1="192" y1="205" x2="202" y2="214" stroke="#000" stroke-width="1.5"/>
  <line x1="165" y1="218" x2="165" y2="230" stroke="#000" stroke-width="1.5"/>
  <line x1="138" y1="155" x2="128" y2="146" stroke="#000" stroke-width="1.5"/>
  <line x1="138" y1="205" x2="128" y2="214" stroke="#000" stroke-width="1.5"/>

  <text x="118" y="120" font-family="Georgia,serif" font-size="9" fill="#333">FISSION</text>

  <!-- ═══════════════════════════════════════
       GENERATION 1 — 3 product neutrons → 3 fissions
  ═══════════════════════════════════════ -->
  <!-- Neutron 1 → upper fission -->
  <circle cx="200" cy="180" r="7" fill="#000"/>
  <line x1="207" y1="173" x2="290" y2="100" stroke="#000" stroke-width="1.8"/>
  <polygon points="283,95 296,101 285,109" fill="#000"/>
  <text x="238" y="128" font-family="Georgia,serif" font-size="9" fill="#000">n⁰</text>

  <!-- Neutron 2 → middle fission -->
  <line x1="196" y1="180" x2="290" y2="180" stroke="#000" stroke-width="1.8"/>
  <polygon points="284,175 298,180 284,185" fill="#000"/>
  <text x="236" y="175" font-family="Georgia,serif" font-size="9" fill="#000">n⁰</text>

  <!-- Neutron 3 → lower fission -->
  <line x1="207" y1="187" x2="290" y2="260" stroke="#000" stroke-width="1.8"/>
  <polygon points="283,253 296,261 285,267" fill="#000"/>
  <text x="238" y="234" font-family="Georgia,serif" font-size="9" fill="#000">n⁰</text>

  <!-- Gen 1 fission nuclei -->
  <circle cx="325" cy="100" r="26" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="307" y="97" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000">²³⁵U</text>
  <text x="313" y="108" font-family="Georgia,serif" font-size="8" fill="#333">+ n⁰</text>
  <!-- burst -->
  <line x1="325" y1="68" x2="325" y2="58" stroke="#000" stroke-width="1.2"/>
  <line x1="346" y1="78" x2="354" y2="70" stroke="#000" stroke-width="1.2"/>
  <line x1="346" y1="122" x2="354" y2="130" stroke="#000" stroke-width="1.2"/>
  <line x1="325" y1="132" x2="325" y2="142" stroke="#000" stroke-width="1.2"/>

  <circle cx="325" cy="180" r="26" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="307" y="177" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000">²³⁵U</text>
  <text x="313" y="188" font-family="Georgia,serif" font-size="8" fill="#333">+ n⁰</text>
  <line x1="325" y1="148" x2="325" y2="138" stroke="#000" stroke-width="1.2"/>
  <line x1="346" y1="158" x2="354" y2="150" stroke="#000" stroke-width="1.2"/>
  <line x1="346" y1="202" x2="354" y2="210" stroke="#000" stroke-width="1.2"/>
  <line x1="325" y1="212" x2="325" y2="222" stroke="#000" stroke-width="1.2"/>

  <circle cx="325" cy="260" r="26" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="307" y="257" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000">²³⁵U</text>
  <text x="313" y="268" font-family="Georgia,serif" font-size="8" fill="#333">+ n⁰</text>
  <line x1="325" y1="228" x2="325" y2="218" stroke="#000" stroke-width="1.2"/>
  <line x1="346" y1="238" x2="354" y2="230" stroke="#000" stroke-width="1.2"/>
  <line x1="346" y1="282" x2="354" y2="290" stroke="#000" stroke-width="1.2"/>
  <line x1="325" y1="292" x2="325" y2="302" stroke="#000" stroke-width="1.2"/>

  <!-- ═══════════════════════════════════════
       GENERATION 2 — 9 fissions (3×3)
       Upper gen1 → 3 upper
       Middle gen1 → 3 middle
       Lower gen1 → 3 lower
  ═══════════════════════════════════════ -->
  <!-- From upper Gen1 (325,100) -->
  <line x1="351" y1="93"  x2="520" y2="48"  stroke="#000" stroke-width="1.5"/>
  <polygon points="513,42 526,49 515,56" fill="#000"/>
  <line x1="351" y1="100" x2="520" y2="100" stroke="#000" stroke-width="1.5"/>
  <polygon points="514,95 528,100 514,105" fill="#000"/>
  <line x1="351" y1="107" x2="520" y2="152" stroke="#000" stroke-width="1.5"/>
  <polygon points="513,145 526,153 515,160" fill="#000"/>

  <!-- From middle Gen1 (325,180) -->
  <line x1="351" y1="173" x2="520" y2="204" stroke="#000" stroke-width="1.5"/>
  <polygon points="513,197 526,205 515,212" fill="#000"/>
  <line x1="351" y1="180" x2="520" y2="256" stroke="#000" stroke-width="1.5"/>
  <polygon points="513,249 526,257 515,264" fill="#000"/>
  <line x1="351" y1="187" x2="520" y2="308" stroke="#000" stroke-width="1.5"/>
  <polygon points="513,301 526,309 515,316" fill="#000"/>

  <!-- From lower Gen1 (325,260) -->
  <line x1="351" y1="253" x2="520" y2="360" stroke="#000" stroke-width="1.5"/>
  <polygon points="513,353 526,361 515,368" fill="#000"/>
  <line x1="351" y1="260" x2="520" y2="412" stroke="#000" stroke-width="1.5"/>
  <polygon points="513,405 526,413 515,420" fill="#000"/>
  <line x1="351" y1="267" x2="520" y2="464" stroke="#000" stroke-width="1.5"/>
  <polygon points="513,457 526,465 515,472" fill="#000"/>

  <!-- Gen 2 nuclei (9 small circles) -->
  <!-- Upper group -->
  <circle cx="548" cy="48"  r="20" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="535" y="52" font-family="Georgia,serif" font-size="8" font-weight="bold" fill="#000">²³⁵U</text>
  <circle cx="548" cy="100" r="20" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="535" y="104" font-family="Georgia,serif" font-size="8" font-weight="bold" fill="#000">²³⁵U</text>
  <circle cx="548" cy="152" r="20" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="535" y="156" font-family="Georgia,serif" font-size="8" font-weight="bold" fill="#000">²³⁵U</text>

  <!-- Middle group -->
  <circle cx="548" cy="204" r="20" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="535" y="208" font-family="Georgia,serif" font-size="8" font-weight="bold" fill="#000">²³⁵U</text>
  <circle cx="548" cy="256" r="20" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="535" y="260" font-family="Georgia,serif" font-size="8" font-weight="bold" fill="#000">²³⁵U</text>
  <circle cx="548" cy="308" r="20" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="535" y="312" font-family="Georgia,serif" font-size="8" font-weight="bold" fill="#000">²³⁵U</text>

  <!-- Lower group -->
  <circle cx="548" cy="360" r="20" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="535" y="364" font-family="Georgia,serif" font-size="8" font-weight="bold" fill="#000">²³⁵U</text>
  <circle cx="548" cy="412" r="20" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="535" y="416" font-family="Georgia,serif" font-size="8" font-weight="bold" fill="#000">²³⁵U</text>
  <circle cx="548" cy="464" r="20" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="535" y="468" font-family="Georgia,serif" font-size="8" font-weight="bold" fill="#000">²³⁵U</text>

  <!-- Gen 3 indicator arrows (dots continuing right) -->
  <text x="590" y="52"  font-family="Georgia,serif" font-size="12" fill="#000">→ …</text>
  <text x="590" y="104" font-family="Georgia,serif" font-size="12" fill="#000">→ …</text>
  <text x="590" y="156" font-family="Georgia,serif" font-size="12" fill="#000">→ …</text>
  <text x="590" y="208" font-family="Georgia,serif" font-size="12" fill="#000">→ …</text>
  <text x="590" y="260" font-family="Georgia,serif" font-size="12" fill="#000">→ …</text>
  <text x="590" y="312" font-family="Georgia,serif" font-size="12" fill="#000">→ …</text>
  <text x="590" y="364" font-family="Georgia,serif" font-size="12" fill="#000">→ …</text>
  <text x="590" y="416" font-family="Georgia,serif" font-size="12" fill="#000">→ …</text>
  <text x="590" y="468" font-family="Georgia,serif" font-size="12" fill="#000">→ …</text>

  <!-- Generation labels -->
  <text x="145" y="340" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Gen 0</text>
  <text x="305" y="340" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Gen 1</text>
  <text x="525" y="510" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Gen 2</text>

  <!-- Vertical generation dividers -->
  <line x1="245" y1="50" x2="245" y2="520" stroke="#000" stroke-width="1" stroke-dasharray="6,4"/>
  <line x1="440" y1="20" x2="440" y2="530" stroke="#000" stroke-width="1" stroke-dasharray="6,4"/>

  <!-- ── Info box ── -->
  <rect x="50" y="555" width="800" height="120" rx="6" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="70" y="578" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Chain Reaction Mechanics:</text>
  <text x="70" y="596" font-family="Georgia,serif" font-size="10" fill="#000">• Each U-235 fission releases ~2–3 neutrons on average</text>
  <text x="70" y="612" font-family="Georgia,serif" font-size="10" fill="#000">• Neutrons trigger further fissions: 1 → 3 → 9 → 27 … exponential growth</text>
  <text x="70" y="628" font-family="Georgia,serif" font-size="10" fill="#000">• Critical mass: minimum mass for self-sustaining chain reaction</text>
  <text x="70" y="644" font-family="Georgia,serif" font-size="10" fill="#000">• Controlled (reactor): neutron absorbers slow reaction | Uncontrolled (bomb): supercritical</text>
  <text x="70" y="660" font-family="Georgia,serif" font-size="10" fill="#000">• Each fission: ²³⁵U + n⁰ → fission fragments + 2–3 n⁰ + ~200 MeV energy</text>
</svg>`;

  // ─── RADIATION PENETRATION DIAGRAM ───────────────────────────────────────
  static radiationPenetrationSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="270" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Radiation Penetration</text>
  <text x="190" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Comparison of α, β and γ radiation penetration through materials</text>

  <!-- ── Source (radioactive) ── -->
  <rect x="30" y="190" width="60" height="220" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="38" y="280" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Radio-</text>
  <text x="38" y="294" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">active</text>
  <text x="42" y="308" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Source</text>
  <!-- Radiation symbol (simplified) -->
  <circle cx="60" cy="340" r="10" fill="none" stroke="#000" stroke-width="2"/>
  <circle cx="60" cy="340" r="3" fill="#000"/>

  <!-- ── Alpha ray (top) ── -->
  <!-- Stopped by paper -->
  <text x="30" y="185" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">α (alpha)</text>
  <line x1="90" y1="215" x2="200" y2="215" stroke="#000" stroke-width="3"/>
  <!-- stopped indicator -->
  <line x1="200" y1="205" x2="200" y2="225" stroke="#000" stroke-width="3"/>
  <text x="204" y="212" font-family="Georgia,serif" font-size="9" fill="#000">blocked</text>
  <!-- Arrow head -->
  <polygon points="192,210 205,215 192,220" fill="#000"/>

  <!-- ── Beta ray (middle) ── -->
  <!-- Stopped by aluminium -->
  <text x="30" y="295" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">β (beta)</text>
  <line x1="90" y1="305" x2="360" y2="305" stroke="#000" stroke-width="2.5" stroke-dasharray="8,3"/>
  <line x1="360" y1="295" x2="360" y2="315" stroke="#000" stroke-width="3"/>
  <polygon points="352,300 365,305 352,310" fill="#000"/>
  <text x="364" y="300" font-family="Georgia,serif" font-size="9" fill="#000">blocked</text>

  <!-- ── Gamma ray (bottom) ── -->
  <!-- Passes through paper and aluminium, partially stopped by lead -->
  <text x="30" y="398" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">γ (gamma)</text>
  <line x1="90" y1="400" x2="600" y2="400" stroke="#000" stroke-width="2" stroke-dasharray="4,2"/>
  <!-- Attenuated beyond lead -->
  <line x1="600" y1="400" x2="750" y2="400" stroke="#000" stroke-width="1" stroke-dasharray="4,4"/>
  <polygon points="590,395 605,400 590,405" fill="#000"/>
  <text x="680" y="392" font-family="Georgia,serif" font-size="9" fill="#000">attenuated</text>

  <!-- ══ BARRIERS ══ -->

  <!-- Paper barrier (x=200) -->
  <!-- Hatched rectangle -->
  <rect x="200" y="140" width="30" height="340" rx="2" fill="#fff" stroke="#000" stroke-width="2"/>
  <!-- Hatch -->
  <line x1="200" y1="150" x2="230" y2="180" stroke="#000" stroke-width="1"/>
  <line x1="200" y1="175" x2="230" y2="205" stroke="#000" stroke-width="1"/>
  <line x1="200" y1="200" x2="230" y2="230" stroke="#000" stroke-width="1"/>
  <line x1="200" y1="225" x2="230" y2="255" stroke="#000" stroke-width="1"/>
  <line x1="200" y1="250" x2="230" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="200" y1="275" x2="230" y2="305" stroke="#000" stroke-width="1"/>
  <line x1="200" y1="300" x2="230" y2="330" stroke="#000" stroke-width="1"/>
  <line x1="200" y1="325" x2="230" y2="355" stroke="#000" stroke-width="1"/>
  <line x1="200" y1="350" x2="230" y2="380" stroke="#000" stroke-width="1"/>
  <line x1="200" y1="375" x2="230" y2="405" stroke="#000" stroke-width="1"/>
  <line x1="200" y1="400" x2="230" y2="430" stroke="#000" stroke-width="1"/>
  <line x1="200" y1="425" x2="230" y2="455" stroke="#000" stroke-width="1"/>
  <line x1="200" y1="450" x2="230" y2="470" stroke="#000" stroke-width="1"/>
  <text x="196" y="132" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Paper</text>
  <text x="196" y="144" font-family="Georgia,serif" font-size="8" fill="#333">~1 mm</text>

  <!-- Aluminium barrier (x=360) -->
  <rect x="360" y="140" width="50" height="340" rx="2" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <!-- Aluminium cross-hatch -->
  <line x1="360" y1="150" x2="410" y2="200" stroke="#000" stroke-width="1"/>
  <line x1="360" y1="180" x2="410" y2="230" stroke="#000" stroke-width="1"/>
  <line x1="360" y1="210" x2="410" y2="260" stroke="#000" stroke-width="1"/>
  <line x1="360" y1="240" x2="410" y2="290" stroke="#000" stroke-width="1"/>
  <line x1="360" y1="270" x2="410" y2="320" stroke="#000" stroke-width="1"/>
  <line x1="360" y1="300" x2="410" y2="350" stroke="#000" stroke-width="1"/>
  <line x1="360" y1="330" x2="410" y2="380" stroke="#000" stroke-width="1"/>
  <line x1="360" y1="360" x2="410" y2="410" stroke="#000" stroke-width="1"/>
  <line x1="360" y1="390" x2="410" y2="440" stroke="#000" stroke-width="1"/>
  <line x1="360" y1="420" x2="410" y2="460" stroke="#000" stroke-width="1"/>
  <line x1="370" y1="140" x2="360" y2="150" stroke="#000" stroke-width="1"/>
  <line x1="400" y1="140" x2="360" y2="180" stroke="#000" stroke-width="1"/>
  <line x1="410" y1="150" x2="375" y2="185" stroke="#000" stroke-width="1"/>
  <text x="352" y="132" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Aluminium</text>
  <text x="360" y="144" font-family="Georgia,serif" font-size="8" fill="#333">~5 mm</text>

  <!-- Lead barrier (x=600) — thick -->
  <rect x="600" y="140" width="80" height="340" rx="2" fill="#fff" stroke="#000" stroke-width="3"/>
  <!-- Dense crosshatch for lead -->
  <line x1="600" y1="148" x2="680" y2="228" stroke="#000" stroke-width="1.2"/>
  <line x1="600" y1="168" x2="680" y2="248" stroke="#000" stroke-width="1.2"/>
  <line x1="600" y1="188" x2="680" y2="268" stroke="#000" stroke-width="1.2"/>
  <line x1="600" y1="208" x2="680" y2="288" stroke="#000" stroke-width="1.2"/>
  <line x1="600" y1="228" x2="680" y2="308" stroke="#000" stroke-width="1.2"/>
  <line x1="600" y1="248" x2="680" y2="328" stroke="#000" stroke-width="1.2"/>
  <line x1="600" y1="268" x2="680" y2="348" stroke="#000" stroke-width="1.2"/>
  <line x1="600" y1="288" x2="680" y2="368" stroke="#000" stroke-width="1.2"/>
  <line x1="600" y1="308" x2="680" y2="388" stroke="#000" stroke-width="1.2"/>
  <line x1="600" y1="328" x2="680" y2="408" stroke="#000" stroke-width="1.2"/>
  <line x1="600" y1="348" x2="680" y2="428" stroke="#000" stroke-width="1.2"/>
  <line x1="600" y1="368" x2="680" y2="448" stroke="#000" stroke-width="1.2"/>
  <line x1="600" y1="388" x2="680" y2="468" stroke="#000" stroke-width="1.2"/>
  <line x1="614" y1="140" x2="600" y2="154" stroke="#000" stroke-width="1.2"/>
  <line x1="634" y1="140" x2="600" y2="174" stroke="#000" stroke-width="1.2"/>
  <line x1="654" y1="140" x2="600" y2="194" stroke="#000" stroke-width="1.2"/>
  <line x1="674" y1="140" x2="600" y2="214" stroke="#000" stroke-width="1.2"/>
  <line x1="680" y1="148" x2="640" y2="188" stroke="#000" stroke-width="1.2"/>
  <text x="608" y="132" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Lead</text>
  <text x="601" y="144" font-family="Georgia,serif" font-size="8" fill="#333">~several cm</text>

  <!-- ── Info table at bottom ── -->
  <rect x="30" y="500" width="840" height="85" rx="6" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="50" y="520" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Radiation Properties:</text>
  <!-- Headers -->
  <text x="50"  y="538" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Type</text>
  <text x="130" y="538" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Composition</text>
  <text x="290" y="538" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Charge</text>
  <text x="380" y="538" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Stopped by</text>
  <text x="540" y="538" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Ionising power</text>
  <text x="700" y="538" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Speed</text>
  <!-- Alpha row -->
  <text x="50"  y="555" font-family="Georgia,serif" font-size="10" fill="#000">α (alpha)</text>
  <text x="130" y="555" font-family="Georgia,serif" font-size="10" fill="#000">2 protons + 2 neutrons (⁴He)</text>
  <text x="290" y="555" font-family="Georgia,serif" font-size="10" fill="#000">+2</text>
  <text x="380" y="555" font-family="Georgia,serif" font-size="10" fill="#000">Paper / skin</text>
  <text x="540" y="555" font-family="Georgia,serif" font-size="10" fill="#000">Very high</text>
  <text x="700" y="555" font-family="Georgia,serif" font-size="10" fill="#000">~5% c</text>
  <!-- Beta row -->
  <text x="50"  y="572" font-family="Georgia,serif" font-size="10" fill="#000">β (beta)</text>
  <text x="130" y="572" font-family="Georgia,serif" font-size="10" fill="#000">Electron (β⁻) or positron (β⁺)</text>
  <text x="290" y="572" font-family="Georgia,serif" font-size="10" fill="#000">−1 or +1</text>
  <text x="380" y="572" font-family="Georgia,serif" font-size="10" fill="#000">Aluminium (~5 mm)</text>
  <text x="540" y="572" font-family="Georgia,serif" font-size="10" fill="#000">Moderate</text>
  <text x="700" y="572" font-family="Georgia,serif" font-size="10" fill="#000">~90% c</text>
  <!-- Gamma row -->
  <text x="50"  y="589" font-family="Georgia,serif" font-size="10" fill="#000">γ (gamma)</text>
  <text x="130" y="589" font-family="Georgia,serif" font-size="10" fill="#000">High-energy photon (EM wave)</text>
  <text x="290" y="589" font-family="Georgia,serif" font-size="10" fill="#000">0</text>
  <text x="380" y="589" font-family="Georgia,serif" font-size="10" fill="#000">Lead / thick concrete</text>
  <text x="540" y="589" font-family="Georgia,serif" font-size="10" fill="#000">Low (indirectly)</text>
  <text x="700" y="589" font-family="Georgia,serif" font-size="10" fill="#000">c (light)</text>
</svg>`;

  // ─── GRAVITATIONAL FORCE DIAGRAM ──────────────────────────────────────────
  static gravitationalForceDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="210" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Gravitational Force — Newton's Law of Gravitation</text>
  <text x="200" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Attractive force between two masses, acting along the line joining their centres</text>

  <!-- ── Mass 1 (Earth-like, left) ── -->
  <circle cx="160" cy="260" r="70" fill="#fff" stroke="#000" stroke-width="3"/>
  <!-- Surface texture lines -->
  <ellipse cx="160" cy="260" rx="70" ry="25" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <ellipse cx="160" cy="260" rx="35" ry="70" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="135" y="253" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">M₁</text>
  <text x="130" y="272" font-family="Georgia,serif" font-size="11" fill="#333">5.97×10²⁴</text>
  <text x="145" y="286" font-family="Georgia,serif" font-size="11" fill="#333">kg</text>
  <text x="110" y="350" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">(Earth)</text>

  <!-- ── Mass 2 (Moon-like, right) ── -->
  <circle cx="640" cy="260" r="45" fill="#fff" stroke="#000" stroke-width="3"/>
  <!-- Crater marks -->
  <circle cx="620" cy="245" r="8" fill="none" stroke="#000" stroke-width="1.5"/>
  <circle cx="655" cy="270" r="6" fill="none" stroke="#000" stroke-width="1.5"/>
  <circle cx="635" cy="278" r="5" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="620" y="255" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">M₂</text>
  <text x="603" y="310" font-family="Georgia,serif" font-size="11" fill="#333">7.34×10²²</text>
  <text x="622" y="324" font-family="Georgia,serif" font-size="11" fill="#333">kg</text>
  <text x="608" y="340" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">(Moon)</text>

  <!-- ── Separation distance r ── -->
  <line x1="230" y1="330" x2="595" y2="330" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="230" y1="322" x2="230" y2="338" stroke="#000" stroke-width="2"/>
  <line x1="595" y1="322" x2="595" y2="338" stroke="#000" stroke-width="2"/>
  <text x="385" y="350" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">r = 3.84 × 10⁸ m</text>

  <!-- ── Gravitational force arrows (attractive, pointing toward each mass) ── -->
  <!-- Force on M1: arrow pointing RIGHT (toward M2) -->
  <line x1="232" y1="240" x2="340" y2="240" stroke="#000" stroke-width="3"/>
  <polygon points="334,234 350,240 334,246" fill="#000"/>
  <text x="258" y="228" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">F</text>
  <text x="273" y="228" font-family="Georgia,serif" font-size="10" fill="#000">on M₁</text>
  <!-- Force on M2: arrow pointing LEFT (toward M1) -->
  <line x1="568" y1="240" x2="460" y2="240" stroke="#000" stroke-width="3"/>
  <polygon points="466,234 450,240 466,246" fill="#000"/>
  <text x="490" y="228" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">F</text>
  <text x="505" y="228" font-family="Georgia,serif" font-size="10" fill="#000">on M₂</text>

  <!-- Equal and opposite label -->
  <text x="350" y="210" font-family="Georgia,serif" font-size="11" fill="#000">Action–Reaction pair (Newton's 3rd Law)</text>
  <line x1="390" y1="213" x2="390" y2="232" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>

  <!-- ── Formula box ── -->
  <rect x="240" y="380" width="320" height="110" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="270" y="404" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Newton's Law of Gravitation:</text>
  <text x="290" y="432" font-family="Georgia,serif" font-size="18" font-style="italic" fill="#000">F = GM₁M₂ / r²</text>
  <line x1="255" y1="442" x2="545" y2="442" stroke="#000" stroke-width="1"/>
  <text x="258" y="458" font-family="Georgia,serif" font-size="10" fill="#333">G = 6.674 × 10⁻¹¹ N m² kg⁻²  (gravitational constant)</text>
  <text x="258" y="473" font-family="Georgia,serif" font-size="10" fill="#333">F = 1.98 × 10²⁰ N  (Earth–Moon gravitational force)</text>

  <!-- ── Field line arrows between masses (radial) ── -->
  <line x1="235" y1="260" x2="315" y2="260" stroke="#000" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="595" y1="260" x2="515" y2="260" stroke="#000" stroke-width="1.5" stroke-dasharray="3,3"/>

  <!-- ── Key properties box ── -->
  <rect x="30" y="500" width="740" height="80" rx="6" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="50" y="520" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Properties of Gravitational Force:</text>
  <text x="50" y="538" font-family="Georgia,serif" font-size="10" fill="#000">• Always attractive — never repulsive</text>
  <text x="50" y="554" font-family="Georgia,serif" font-size="10" fill="#000">• Acts along the line joining centres of mass (central force)</text>
  <text x="50" y="570" font-family="Georgia,serif" font-size="10" fill="#000">• Inverse-square law: F ∝ 1/r² — doubles separation → quarter force</text>
  <text x="400" y="538" font-family="Georgia,serif" font-size="10" fill="#000">• Proportional to both masses: F ∝ M₁M₂</text>
  <text x="400" y="554" font-family="Georgia,serif" font-size="10" fill="#000">• Long-range force — infinite reach, no shielding possible</text>
  <text x="400" y="570" font-family="Georgia,serif" font-size="10" fill="#000">• Weakest of the four fundamental forces</text>
</svg>`;

  // ─── GRAVITATIONAL FIELD DIAGRAM ──────────────────────────────────────────
  static gravitationalFieldDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="700px" viewBox="0 0 700 700">

  <!-- Title -->
  <text x="170" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Gravitational Field Lines</text>
  <text x="130" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Radially inward field lines around a spherical mass — field strength g = GM/r²</text>

  <!-- ── Central mass (planet) ── -->
  <circle cx="350" cy="350" r="70" fill="#fff" stroke="#000" stroke-width="3"/>
  <ellipse cx="350" cy="350" rx="70" ry="24" fill="none" stroke="#000" stroke-width="1.2" stroke-dasharray="5,3"/>
  <ellipse cx="350" cy="350" rx="24" ry="70" fill="none" stroke="#000" stroke-width="1.2" stroke-dasharray="5,3"/>
  <text x="326" y="343" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">M</text>
  <text x="315" y="360" font-family="Georgia,serif" font-size="11" fill="#333">(planet)</text>

  <!-- ── Equipotential circles (dashed) ── -->
  <circle cx="350" cy="350" r="120" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="6,5"/>
  <circle cx="350" cy="350" r="180" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="6,5"/>
  <circle cx="350" cy="350" r="240" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="6,5"/>
  <!-- Equipotential labels -->
  <text x="472" y="344" font-family="Georgia,serif" font-size="9" fill="#333">V₁</text>
  <text x="532" y="344" font-family="Georgia,serif" font-size="9" fill="#333">V₂</text>
  <text x="592" y="344" font-family="Georgia,serif" font-size="9" fill="#333">V₃</text>
  <text x="465" y="356" font-family="Georgia,serif" font-size="8" fill="#555">(equipotential)</text>

  <!-- ── Radial field lines (12 evenly spaced) with arrowheads pointing inward ── -->
  <!-- Each line from r=310 down to surface r=70, arrow near surface -->

  <!-- 0° (right) -->
  <line x1="660" y1="350" x2="425" y2="350" stroke="#000" stroke-width="2"/>
  <polygon points="432,345 418,350 432,355" fill="#000"/>

  <!-- 30° -->
  <line x1="619" y1="175" x2="411" y2="279" stroke="#000" stroke-width="2"/>
  <polygon points="417,272 405,281 415,288" fill="#000"/>

  <!-- 60° -->
  <line x1="444" y1="50" x2="395" y2="211" stroke="#000" stroke-width="2"/>
  <polygon points="398,218 389,205 402,202" fill="#000"/>

  <!-- 90° (up) -->
  <line x1="350" y1="40" x2="350" y2="278" stroke="#000" stroke-width="2"/>
  <polygon points="345,285 350,271 355,285" fill="#000"/>

  <!-- 120° -->
  <line x1="256" y1="50" x2="305" y2="211" stroke="#000" stroke-width="2"/>
  <polygon points="298,218 311,205 302,202" fill="#000"/>

  <!-- 150° -->
  <line x1="81" y1="175" x2="289" y2="279" stroke="#000" stroke-width="2"/>
  <polygon points="283,272 295,281 285,288" fill="#000"/>

  <!-- 180° (left) -->
  <line x1="40" y1="350" x2="275" y2="350" stroke="#000" stroke-width="2"/>
  <polygon points="268,345 282,350 268,355" fill="#000"/>

  <!-- 210° -->
  <line x1="81" y1="525" x2="289" y2="421" stroke="#000" stroke-width="2"/>
  <polygon points="283,428 295,419 285,412" fill="#000"/>

  <!-- 240° -->
  <line x1="256" y1="650" x2="305" y2="489" stroke="#000" stroke-width="2"/>
  <polygon points="298,482 311,495 302,498" fill="#000"/>

  <!-- 270° (down) -->
  <line x1="350" y1="660" x2="350" y2="422" stroke="#000" stroke-width="2"/>
  <polygon points="345,415 350,429 355,415" fill="#000"/>

  <!-- 300° -->
  <line x1="444" y1="650" x2="395" y2="489" stroke="#000" stroke-width="2"/>
  <polygon points="398,482 389,495 402,498" fill="#000"/>

  <!-- 330° -->
  <line x1="619" y1="525" x2="411" y2="421" stroke="#000" stroke-width="2"/>
  <polygon points="417,428 405,419 415,412" fill="#000"/>

  <!-- ── Field strength annotation ── -->
  <text x="480" y="200" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">g = GM / r²</text>
  <text x="478" y="215" font-family="Georgia,serif" font-size="10" fill="#333">g ∝ 1/r² (outside)</text>
  <text x="478" y="229" font-family="Georgia,serif" font-size="10" fill="#333">g = GM/R³ · r (inside)</text>

  <!-- ── Test mass label ── -->
  <circle cx="530" cy="350" r="8" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="542" y="354" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">m (test mass)</text>

  <!-- ── Info box ── -->
  <rect x="30" y="600" width="640" height="80" rx="6" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="50" y="620" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Gravitational Field:</text>
  <text x="50" y="638" font-family="Georgia,serif" font-size="10" fill="#000">• Field lines point radially inward — direction of force on positive test mass</text>
  <text x="50" y="654" font-family="Georgia,serif" font-size="10" fill="#000">• Density of field lines indicates field strength g (N kg⁻¹)</text>
  <text x="50" y="670" font-family="Georgia,serif" font-size="10" fill="#000">• Equipotential surfaces (dashed circles) perpendicular to field lines; V = −GM/r</text>
</svg>`;

  // ─── ORBITAL MOTION DIAGRAM ───────────────────────────────────────────────
  static orbitalMotionDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="700px" viewBox="0 0 700 700">

  <!-- Title -->
  <text x="180" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Orbital Motion Diagram</text>
  <text x="120" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Gravitational force provides centripetal acceleration — circular and elliptical orbits</text>

  <!-- ── Elliptical orbit path ── -->
  <ellipse cx="350" cy="360" rx="240" ry="180" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,4"/>

  <!-- ── Circular orbit path (inner) ── -->
  <circle cx="350" cy="360" r="140" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>

  <!-- ── Central body (Sun) ── -->
  <!-- Focus of ellipse shifted left -->
  <circle cx="260" cy="360" r="38" fill="#fff" stroke="#000" stroke-width="3"/>
  <!-- Sun rays -->
  <line x1="260" y1="312" x2="260" y2="300" stroke="#000" stroke-width="2"/>
  <line x1="294" y1="326" x2="303" y2="317" stroke="#000" stroke-width="2"/>
  <line x1="308" y1="360" x2="320" y2="360" stroke="#000" stroke-width="2"/>
  <line x1="294" y1="394" x2="303" y2="403" stroke="#000" stroke-width="2"/>
  <line x1="260" y1="408" x2="260" y2="420" stroke="#000" stroke-width="2"/>
  <line x1="226" y1="394" x2="217" y2="403" stroke="#000" stroke-width="2"/>
  <line x1="212" y1="360" x2="200" y2="360" stroke="#000" stroke-width="2"/>
  <line x1="226" y1="326" x2="217" y2="317" stroke="#000" stroke-width="2"/>
  <text x="244" y="355" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">M</text>
  <text x="240" y="370" font-family="Georgia,serif" font-size="10" fill="#333">(Star)</text>

  <!-- ── Orbiting body (planet) on circular orbit — top ── -->
  <circle cx="350" cy="220" r="18" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="342" y="224" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">m</text>

  <!-- Velocity arrow (tangent, rightward at top) -->
  <line x1="368" y1="220" x2="430" y2="220" stroke="#000" stroke-width="2.5"/>
  <polygon points="424,214 440,220 424,226" fill="#000"/>
  <text x="438" y="215" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">v</text>
  <text x="436" y="228" font-family="Georgia,serif" font-size="10" fill="#333">(tangential)</text>

  <!-- Gravitational force arrow (toward centre) -->
  <line x1="350" y1="238" x2="299" y2="326" stroke="#000" stroke-width="2.5"/>
  <polygon points="301,319 296,334 310,326" fill="#000"/>
  <text x="294" y="286" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">F</text>
  <text x="278" y="298" font-family="Georgia,serif" font-size="10" fill="#333">= GMm/r²</text>
  <text x="280" y="310" font-family="Georgia,serif" font-size="9" fill="#333">(centripetal)</text>

  <!-- ── Radius r ── -->
  <line x1="262" y1="355" x2="350" y2="222" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="288" y="290" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">r</text>

  <!-- ── Elliptical orbit planet (perihelion, right) ── -->
  <circle cx="586" cy="360" r="14" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="578" y="365" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000">m</text>
  <text x="570" y="384" font-family="Georgia,serif" font-size="8" fill="#333">perihelion</text>
  <!-- velocity arrow at perihelion (upward, fast) -->
  <line x1="586" y1="346" x2="586" y2="290" stroke="#000" stroke-width="2"/>
  <polygon points="580,296 586,280 592,296" fill="#000"/>
  <text x="592" y="308" font-family="Georgia,serif" font-size="9" fill="#000">v_max</text>

  <!-- ── Elliptical orbit planet (aphelion, left) ── -->
  <circle cx="114" cy="360" r="14" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="106" y="365" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000">m</text>
  <text x="88" y="384" font-family="Georgia,serif" font-size="8" fill="#333">aphelion</text>
  <!-- velocity arrow at aphelion (downward, slow) -->
  <line x1="114" y1="374" x2="114" y2="416" stroke="#000" stroke-width="2"/>
  <polygon points="108,410 114,426 120,410" fill="#000"/>
  <text x="120" y="408" font-family="Georgia,serif" font-size="9" fill="#000">v_min</text>

  <!-- Kepler's 2nd law sweep areas (schematic) -->
  <path d="M 260,360 L 586,360 A 326,0 0 0,0 560,298 Z" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <path d="M 260,360 L 114,360 A 146,0 0 0,1 125,420 Z" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="430" y="342" font-family="Georgia,serif" font-size="9" fill="#333">Equal areas</text>
  <text x="120" y="410" font-family="Georgia,serif" font-size="9" fill="#333">Equal time</text>

  <!-- ── Formulae box ── -->
  <rect x="30" y="590" width="640" height="95" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="612" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Orbital Equations:</text>
  <text x="50" y="630" font-family="Georgia,serif" font-size="11" fill="#000">Centripetal = Gravitational:  mv²/r = GMm/r²   →   v = √(GM/r)</text>
  <text x="50" y="648" font-family="Georgia,serif" font-size="11" fill="#000">Orbital period:  T = 2πr/v = 2π√(r³/GM)</text>
  <text x="50" y="666" font-family="Georgia,serif" font-size="11" fill="#000">Kepler 3rd Law:  T² ∝ r³   →   T²/r³ = 4π²/GM = constant</text>
</svg>`;

  // ─── KEPLER'S THIRD LAW DIAGRAM ───────────────────────────────────────────
  static keplerThirdLawDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="240" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Kepler's Third Law: T² vs r³</text>
  <text x="185" y="46" font-family="Georgia,serif" font-size="11" fill="#333">T² ∝ r³  for all planets orbiting the same star — gradient = 4π²/GM</text>

  <!-- ── Axes ── -->
  <!-- Y axis -->
  <line x1="100" y1="50" x2="100" y2="500" stroke="#000" stroke-width="2.5"/>
  <polygon points="95,54 100,40 105,54" fill="#000"/>
  <!-- X axis -->
  <line x1="100" y1="500" x2="820" y2="500" stroke="#000" stroke-width="2.5"/>
  <polygon points="816,495 830,500 816,505" fill="#000"/>

  <!-- Axis labels -->
  <text x="820" y="518" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">r³ (AU³)</text>
  <text x="30" y="280" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000" transform="rotate(-90,50,280)">T² (years²)</text>

  <!-- ── Grid lines (light dashed) ── -->
  <line x1="100" y1="400" x2="820" y2="400" stroke="#000" stroke-width="0.8" stroke-dasharray="4,4"/>
  <line x1="100" y1="300" x2="820" y2="300" stroke="#000" stroke-width="0.8" stroke-dasharray="4,4"/>
  <line x1="100" y1="200" x2="820" y2="200" stroke="#000" stroke-width="0.8" stroke-dasharray="4,4"/>
  <line x1="100" y1="100" x2="820" y2="100" stroke="#000" stroke-width="0.8" stroke-dasharray="4,4"/>
  <line x1="220" y1="500" x2="220" y2="50" stroke="#000" stroke-width="0.8" stroke-dasharray="4,4"/>
  <line x1="340" y1="500" x2="340" y2="50" stroke="#000" stroke-width="0.8" stroke-dasharray="4,4"/>
  <line x1="460" y1="500" x2="460" y2="50" stroke="#000" stroke-width="0.8" stroke-dasharray="4,4"/>
  <line x1="580" y1="500" x2="580" y2="50" stroke="#000" stroke-width="0.8" stroke-dasharray="4,4"/>
  <line x1="700" y1="500" x2="700" y2="50" stroke="#000" stroke-width="0.8" stroke-dasharray="4,4"/>

  <!-- Axis tick labels -->
  <!-- Y axis -->
  <text x="72" y="404" font-family="Georgia,serif" font-size="10" fill="#000">100</text>
  <text x="72" y="304" font-family="Georgia,serif" font-size="10" fill="#000">200</text>
  <text x="72" y="204" font-family="Georgia,serif" font-size="10" fill="#000">300</text>
  <text x="72" y="104" font-family="Georgia,serif" font-size="10" fill="#000">400</text>
  <!-- X axis -->
  <text x="206" y="518" font-family="Georgia,serif" font-size="10" fill="#000">20</text>
  <text x="326" y="518" font-family="Georgia,serif" font-size="10" fill="#000">40</text>
  <text x="446" y="518" font-family="Georgia,serif" font-size="10" fill="#000">60</text>
  <text x="566" y="518" font-family="Georgia,serif" font-size="10" fill="#000">80</text>
  <text x="686" y="518" font-family="Georgia,serif" font-size="10" fill="#000">100</text>

  <!-- ── Best fit line (T² = r³, scale: x=100+r³*7, y=500-T²*1) ── -->
  <!-- Scale: r³_max≈140 AU³ (Jupiter), T²_max≈145 yr²
       Map: x = 100 + r³ * 6, y = 500 - T² * 2.5 -->
  <line x1="100" y1="500" x2="840" y2="125" stroke="#000" stroke-width="2.5"/>
  <text x="750" y="118" font-family="Georgia,serif" font-size="11" fill="#000">T² = r³</text>
  <text x="748" y="132" font-family="Georgia,serif" font-size="9" fill="#333">(best fit line)</text>

  <!-- ── Planet data points ──
       Mercury: r=0.387 AU, T=0.241 yr → r³=0.058, T²=0.058   → x=100, y=500
       Venus:   r=0.723, T=0.615       → r³=0.378, T²=0.378   → x=102, y=499
       Earth:   r=1.000, T=1.000       → r³=1.000, T²=1.000   → x=106, y=498
       Mars:    r=1.524, T=1.881       → r³=3.540, T²=3.538   → x=121, y=491
       Jupiter: r=5.203, T=11.862      → r³=140.8, T²=140.7   → x=945 (off scale — use label)
  -->
  <!-- Use visual scale: x=100+r³*5.8, y=500-T²*2.55 to fit Jupiter at ~x=920 -->

  <!-- Mercury (practically at origin) -->
  <circle cx="100" cy="500" r="5" fill="#000" stroke="#000" stroke-width="1"/>
  <text x="104" y="494" font-family="Georgia,serif" font-size="9" fill="#000">Mercury</text>

  <!-- Venus -->
  <circle cx="102" cy="499" r="5" fill="#000" stroke="#000" stroke-width="1"/>
  <text x="106" y="492" font-family="Georgia,serif" font-size="9" fill="#000">Venus</text>

  <!-- Earth -->
  <circle cx="106" cy="497" r="6" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="110" y="490" font-family="Georgia,serif" font-size="9" fill="#000">Earth</text>

  <!-- Mars: r³≈3.54, T²≈3.54 → x=100+3.54*5.8=121, y=500-3.54*2.55=491 -->
  <circle cx="121" cy="491" r="6" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="125" y="484" font-family="Georgia,serif" font-size="9" fill="#000">Mars</text>

  <!-- Jupiter: r³≈140.8 → x=100+140.8*5.08=815, T²≈140.7 → y=500-140.7*2.55=141 -->
  <circle cx="815" cy="141" r="8" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="790" y="134" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Jupiter</text>

  <!-- Saturn (beyond plot but shown with annotation) -->
  <!-- r=9.58, T=29.46 → r³=879, T²=868 — off scale, note only -->
  <text x="660" y="70" font-family="Georgia,serif" font-size="9" fill="#333">(Saturn, Uranus, Neptune</text>
  <text x="660" y="82" font-family="Georgia,serif" font-size="9" fill="#333"> extend the same line)</text>
  <line x1="650" y1="86" x2="820" y2="130" stroke="#000" stroke-width="0.8" stroke-dasharray="3,3"/>

  <!-- ── Formula box ── -->
  <rect x="30" y="520" width="500" height="65" rx="6" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="50" y="540" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Kepler's Third Law:</text>
  <text x="50" y="558" font-family="Georgia,serif" font-size="12" fill="#000">T² = (4π²/GM) × r³    →    gradient = 4π²/GM</text>
  <text x="50" y="576" font-family="Georgia,serif" font-size="10" fill="#333">T in years, r in AU — gradient = 1 for Solar System (by definition of AU and year)</text>
</svg>`;

  // ─── GRAVITATIONAL POTENTIAL DIAGRAM ─────────────────────────────────────
  static gravitationalPotentialDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="220" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Gravitational Potential vs Distance</text>
  <text x="175" y="46" font-family="Georgia,serif" font-size="11" fill="#333">V = −GM/r  (negative, increases toward zero as r → ∞)</text>

  <!-- ── Axes ── -->
  <line x1="120" y1="40" x2="120" y2="480" stroke="#000" stroke-width="2.5"/>
  <polygon points="115,44 120,30 125,44" fill="#000"/>
  <line x1="120" y1="200" x2="860" y2="200" stroke="#000" stroke-width="2.5"/>
  <polygon points="856,195 870,200 856,205" fill="#000"/>

  <!-- Axis labels -->
  <text x="872" y="206" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">r</text>
  <text x="40" y="200" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">V (J kg⁻¹)</text>
  <text x="128" y="196" font-family="Georgia,serif" font-size="11" fill="#000">0</text>

  <!-- Zero line label -->
  <text x="820" y="192" font-family="Georgia,serif" font-size="10" fill="#333">V → 0 as r → ∞</text>

  <!-- ── Planet surface marker ── -->
  <line x1="200" y1="40" x2="200" y2="480" stroke="#000" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="174" y="492" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">R (surface)</text>

  <!-- ── Gravitational potential curve  V = -GM/r ──
       Scale: x = 120 + r_norm*740 (r_norm 0→1 maps to 0→ a large r)
              y = 200 - V_norm * 300  (V negative, so curve goes below axis)
       Planet surface at x=200 (r_norm~0.108)
       V at surface (r=R): V_R = -GM/R (most negative point)
       Curve: plotted from r=R outward, asymptoting to 0

       Points (r_norm → x, V_norm → y below axis):
       r=0.108→x=200, V=-1→y=200+300=500
       r=0.15→x=231, V=-0.72→y=416
       r=0.20→x=268, V=-0.54→y=362
       r=0.30→x=342, V=-0.36→y=308
       r=0.40→x=416, V=-0.27→y=281
       r=0.55→x=527, V=-0.196→y=259
       r=0.70→x=638, V=-0.154→y=246
       r=0.90→x=786, V=-0.12→y=236
       r=1.00→x=860, V=-0.108→y=232
  -->
  <!-- Inside planet (linear portion) — from centre to surface -->
  <line x1="120" y1="200" x2="200" y2="500" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <!-- Inside label -->
  <text x="122" y="410" font-family="Georgia,serif" font-size="9" fill="#333">Inside planet</text>
  <text x="122" y="422" font-family="Georgia,serif" font-size="9" fill="#333">V ∝ r (linear)</text>

  <!-- Outside planet curve (V=-GM/r) -->
  <polyline points="200,500 231,416 268,362 342,308 416,281 527,259 638,246 786,236 860,232"
            fill="none" stroke="#000" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>

  <!-- ── V at surface annotation ── -->
  <line x1="120" y1="500" x2="200" y2="500" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="30" y="504" font-family="Georgia,serif" font-size="10" fill="#000">V_surface</text>
  <text x="24" y="516" font-family="Georgia,serif" font-size="10" fill="#000">= −GM/R</text>

  <!-- ── Grid dashed lines ── -->
  <line x1="120" y1="300" x2="860" y2="300" stroke="#000" stroke-width="0.8" stroke-dasharray="4,4"/>
  <line x1="120" y1="400" x2="860" y2="400" stroke="#000" stroke-width="0.8" stroke-dasharray="4,4"/>
  <text x="82" y="304" font-family="Georgia,serif" font-size="9" fill="#333">−0.33 GM/R</text>
  <text x="82" y="404" font-family="Georgia,serif" font-size="9" fill="#333">−0.67 GM/R</text>

  <!-- ── Escape velocity annotation ── -->
  <line x1="200" y1="200" x2="200" y2="500" stroke="#000" stroke-width="1.2" stroke-dasharray="3,3"/>
  <text x="205" y="340" font-family="Georgia,serif" font-size="10" fill="#000">½mv²_esc</text>
  <text x="205" y="354" font-family="Georgia,serif" font-size="10" fill="#000">= −V_surface</text>
  <text x="205" y="368" font-family="Georgia,serif" font-size="9" fill="#333">→ v_esc = √(2GM/R)</text>

  <!-- ── Formula & info box ── -->
  <rect x="550" y="310" width="310" height="130" rx="6" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="568" y="330" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Relations:</text>
  <text x="568" y="348" font-family="Georgia,serif" font-size="11" fill="#000">V = −GM/r  (outside, r ≥ R)</text>
  <text x="568" y="366" font-family="Georgia,serif" font-size="10" fill="#000">V = −GM/(2R³)(3R²−r²) (inside)</text>
  <text x="568" y="384" font-family="Georgia,serif" font-size="11" fill="#000">g = −dV/dr = GM/r²</text>
  <text x="568" y="402" font-family="Georgia,serif" font-size="10" fill="#333">W = ΔE_p = m·ΔV  (work to move mass m)</text>
  <text x="568" y="420" font-family="Georgia,serif" font-size="10" fill="#333">V always negative — bound system</text>
  <text x="568" y="435" font-family="Georgia,serif" font-size="10" fill="#333">V = 0 at infinity (reference point)</text>

  <!-- ── Note at bottom ── -->
  <text x="120" y="545" font-family="Georgia,serif" font-size="10" fill="#333">Note: Gradient of V–r graph gives field strength g. The curve is steepest at the surface.</text>
</svg>`;

  // ─── ESCAPE VELOCITY DIAGRAM ──────────────────────────────────────────────
  static escapeVelocityDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="210" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Escape Velocity — Energy Diagram</text>
  <text x="170" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Minimum speed for an object to escape a planet's gravitational field</text>

  <!-- ── Planet (left side) ── -->
  <circle cx="130" cy="320" r="80" fill="#fff" stroke="#000" stroke-width="3"/>
  <ellipse cx="130" cy="320" rx="80" ry="28" fill="none" stroke="#000" stroke-width="1.2" stroke-dasharray="5,3"/>
  <text x="107" y="313" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">M, R</text>
  <text x="102" y="330" font-family="Georgia,serif" font-size="10" fill="#333">(planet)</text>

  <!-- ── Object on surface ── -->
  <rect x="198" y="268" width="18" height="14" rx="2" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="219" y="280" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">m</text>

  <!-- ── Velocity arrows (three scenarios) ── -->

  <!-- Scenario 1: v < v_esc (falls back) — short arrow -->
  <line x1="206" y1="268" x2="206" y2="200" stroke="#000" stroke-width="2.5"/>
  <polygon points="200,206 206,192 212,206" fill="#000"/>
  <text x="216" y="190" font-family="Georgia,serif" font-size="10" fill="#000">v &lt; v_esc</text>
  <text x="216" y="202" font-family="Georgia,serif" font-size="9" fill="#333">(returns)</text>
  <!-- Return arc -->
  <path d="M 206,192 Q 240,145 230,268" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="225,260 231,272 237,261" fill="#000"/>

  <!-- Scenario 2: v = v_esc (just escapes) — medium arrow -->
  <line x1="260" y1="268" x2="260" y2="160" stroke="#000" stroke-width="2.5"/>
  <polygon points="254,166 260,150 266,166" fill="#000"/>
  <text x="270" y="150" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">v = v_esc</text>
  <text x="270" y="163" font-family="Georgia,serif" font-size="10" fill="#333">(just escapes, v→0 at ∞)</text>
  <!-- Trajectory going to infinity -->
  <line x1="260" y1="150" x2="260" y2="80" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="265" y="78" font-family="Georgia,serif" font-size="9" fill="#333">→ ∞</text>

  <!-- Scenario 3: v > v_esc (escapes with KE remaining) -->
  <line x1="318" y1="268" x2="380" y2="160" stroke="#000" stroke-width="2.5"/>
  <polygon points="372,165 383,152 387,167" fill="#000"/>
  <text x="385" y="148" font-family="Georgia,serif" font-size="10" fill="#000">v &gt; v_esc</text>
  <text x="383" y="160" font-family="Georgia,serif" font-size="9" fill="#333">(escapes with KE)</text>
  <line x1="383" y1="152" x2="470" y2="80" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>

  <!-- ── Energy level diagram (right side) ── -->
  <!-- Energy axis -->
  <line x1="520" y1="80" x2="520" y2="480" stroke="#000" stroke-width="2.5"/>
  <polygon points="515,84 520,70 525,84" fill="#000"/>
  <text x="525" y="68" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">E (energy)</text>

  <!-- r axis (horizontal at E=0 line) -->
  <line x1="520" y1="260" x2="800" y2="260" stroke="#000" stroke-width="2"/>
  <text x="804" y="264" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">r</text>
  <text x="526" y="256" font-family="Georgia,serif" font-size="10" fill="#000">0</text>
  <text x="750" y="253" font-family="Georgia,serif" font-size="9" fill="#333">E = 0 (free at rest)</text>

  <!-- GPE curve: E_p = -GMm/r (negative, below axis) -->
  <!-- Points: r_norm from surface out
       r=0.05→x=560, E=-1→y=380
       r=0.1→x=590, E=-0.5→y=320
       r=0.15→x=615, E=-0.33→y=293
       r=0.25→x=665, E=-0.2→y=272
       r=0.40→x=740, E=-0.125→y=265
       r=0.60→x=800, E=-0.083→y=262
  -->
  <polyline points="555,400 580,340 605,305 645,278 700,268 760,264 800,262"
            fill="none" stroke="#000" stroke-width="2.5" stroke-linejoin="round"/>
  <text x="558" y="415" font-family="Georgia,serif" font-size="10" fill="#000">E_p = −GMm/r</text>

  <!-- Total energy lines -->
  <!-- Bound orbit: E_total < 0 (horizontal dashed line below 0) -->
  <line x1="555" y1="300" x2="800" y2="300" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="604" y="294" font-family="Georgia,serif" font-size="9" fill="#000">E_total &lt; 0 (bound orbit)</text>

  <!-- Escape: E_total = 0 (on x axis) -->
  <text x="604" y="254" font-family="Georgia,serif" font-size="9" fill="#000">E_total = 0 (escape)</text>

  <!-- Unbound: E_total > 0 -->
  <line x1="555" y1="220" x2="800" y2="220" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="604" y="214" font-family="Georgia,serif" font-size="9" fill="#000">E_total &gt; 0 (unbound)</text>

  <!-- Surface marker on energy diagram -->
  <line x1="555" y1="80" x2="555" y2="480" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="532" y="476" font-family="Georgia,serif" font-size="9" fill="#333">R</text>

  <!-- ── Formula box ── -->
  <rect x="30" y="450" width="460" height="130" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="470" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Escape Velocity Derivation:</text>
  <text x="50" y="490" font-family="Georgia,serif" font-size="11" fill="#000">KE gained = GPE lost:  ½mv²_esc = GMm/R</text>
  <text x="50" y="510" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">∴  v_esc = √(2GM/R)</text>
  <text x="50" y="530" font-family="Georgia,serif" font-size="10" fill="#333">Earth: v_esc ≈ 11.2 km s⁻¹  |  Moon: v_esc ≈ 2.4 km s⁻¹</text>
  <text x="50" y="548" font-family="Georgia,serif" font-size="10" fill="#333">Note: v_esc = √2 × v_orbital  (for circular orbit at same radius)</text>
  <text x="50" y="566" font-family="Georgia,serif" font-size="10" fill="#333">Black hole: v_esc = c  →  Schwarzschild radius r_s = 2GM/c²</text>
</svg>`;

  // ─── GEOSTATIONARY ORBIT DIAGRAM ─────────────────────────────────────────
  static geostationaryOrbitDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="700px" viewBox="0 0 700 700">

  <!-- Title -->
  <text x="170" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Geostationary Orbit</text>
  <text x="100" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Satellite period T = 24 h = Earth's rotation period — appears stationary above equator</text>

  <!-- ── Earth ── -->
  <circle cx="350" cy="350" r="75" fill="#fff" stroke="#000" stroke-width="3"/>
  <!-- Equator -->
  <ellipse cx="350" cy="350" rx="75" ry="26" fill="none" stroke="#000" stroke-width="1.5"/>
  <!-- Meridian lines -->
  <ellipse cx="350" cy="350" rx="26" ry="75" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Pole axis -->
  <line x1="350" y1="272" x2="350" y2="428" stroke="#000" stroke-width="1.5" stroke-dasharray="3,3"/>
  <polygon points="345,276 350,262 355,276" fill="#000"/>
  <text x="358" y="258" font-family="Georgia,serif" font-size="9" fill="#000">N</text>
  <text x="358" y="432" font-family="Georgia,serif" font-size="9" fill="#000">S</text>
  <text x="322" y="348" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Earth</text>
  <text x="318" y="363" font-family="Georgia,serif" font-size="10" fill="#333">R = 6.37×10⁶ m</text>
  <!-- Rotation arrow around Earth -->
  <path d="M 310,310 A 55,55 0 1,1 390,310" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <polygon points="384,302 393,312 380,314" fill="#000"/>
  <text x="272" y="284" font-family="Georgia,serif" font-size="9" fill="#000">T_E = 24 h</text>
  <text x="268" y="295" font-family="Georgia,serif" font-size="9" fill="#000">ω_E = 7.27×10⁻⁵ rad s⁻¹</text>

  <!-- ── Geostationary orbit circle ── -->
  <circle cx="350" cy="350" r="250" fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="8,5"/>

  <!-- ── Altitude label ── -->
  <line x1="350" y1="350" x2="580" y2="200" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="450" y="258" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">r = 4.22×10⁷ m</text>
  <text x="450" y="272" font-family="Georgia,serif" font-size="10" fill="#333">h ≈ 35 786 km</text>
  <text x="455" y="286" font-family="Georgia,serif" font-size="9" fill="#333">(altitude above surface)</text>

  <!-- ── Satellite (top-right on orbit) ── -->
  <!-- Satellite body -->
  <rect x="572" y="106" width="32" height="20" rx="3" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <!-- Solar panels left -->
  <rect x="538" y="110" width="32" height="12" rx="2" fill="#fff" stroke="#000" stroke-width="2"/>
  <line x1="544" y1="110" x2="544" y2="122" stroke="#000" stroke-width="1"/>
  <line x1="550" y1="110" x2="550" y2="122" stroke="#000" stroke-width="1"/>
  <line x1="556" y1="110" x2="556" y2="122" stroke="#000" stroke-width="1"/>
  <line x1="562" y1="110" x2="562" y2="122" stroke="#000" stroke-width="1"/>
  <!-- Solar panels right -->
  <rect x="606" y="110" width="32" height="12" rx="2" fill="#fff" stroke="#000" stroke-width="2"/>
  <line x1="612" y1="110" x2="612" y2="122" stroke="#000" stroke-width="1"/>
  <line x1="618" y1="110" x2="618" y2="122" stroke="#000" stroke-width="1"/>
  <line x1="624" y1="110" x2="624" y2="122" stroke="#000" stroke-width="1"/>
  <line x1="630" y1="110" x2="630" y2="122" stroke="#000" stroke-width="1"/>
  <!-- Dish antenna -->
  <line x1="588" y1="106" x2="588" y2="90" stroke="#000" stroke-width="1.5"/>
  <path d="M 578,90 A 10,10 0 0,1 598,90" fill="none" stroke="#000" stroke-width="2"/>
  <text x="575" y="84" font-family="Georgia,serif" font-size="9" fill="#000">Satellite</text>
  <text x="572" y="155" font-family="Georgia,serif" font-size="9" fill="#333">T_sat = 24 h</text>

  <!-- ── Orbital velocity arrow (tangential, clockwise) ── -->
  <line x1="570" y1="116" x2="510" y2="96" stroke="#000" stroke-width="2.5"/>
  <polygon points="516,90 502,92 510,104" fill="#000"/>
  <text x="500" y="88" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">v = 3.07 km s⁻¹</text>

  <!-- ── Gravitational force arrow (toward Earth centre) ── -->
  <line x1="582" y1="122" x2="420" y2="250" stroke="#000" stroke-width="2.5"/>
  <polygon points="425,244 413,254 422,260" fill="#000"/>
  <text x="488" y="200" font-family="Georgia,serif" font-size="10" fill="#000">F_grav = mv²/r</text>
  <text x="490" y="213" font-family="Georgia,serif" font-size="9" fill="#333">(centripetal)</text>

  <!-- ── Signal beam to ground station ── -->
  <line x1="574" y1="126" x2="418" y2="292" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="423,285 411,295 420,302" fill="#000"/>

  <!-- Ground station (on equator, right) -->
  <!-- Antenna dish on surface -->
  <path d="M 424,293 A 14,14 0 0,1 452,293" fill="none" stroke="#000" stroke-width="2"/>
  <line x1="438" y1="293" x2="438" y2="310" stroke="#000" stroke-width="2"/>
  <text x="455" y="308" font-family="Georgia,serif" font-size="9" fill="#333">Ground station</text>
  <text x="455" y="320" font-family="Georgia,serif" font-size="9" fill="#333">(fixed dish)</text>

  <!-- ── Formula box ── -->
  <rect x="30" y="590" width="640" height="95" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="612" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Geostationary Orbit Equations:</text>
  <text x="50" y="630" font-family="Georgia,serif" font-size="11" fill="#000">Equating gravity to centripetal:  GMm/r² = mω²r</text>
  <text x="50" y="648" font-family="Georgia,serif" font-size="11" fill="#000">∴  r³ = GM/ω²   →   r = (GM/ω²)^(1/3)</text>
  <text x="50" y="666" font-family="Georgia,serif" font-size="11" fill="#000">r ≈ 4.22 × 10⁷ m  |  ω = 2π/T  (T = 86 400 s)</text>
  <text x="50" y="680" font-family="Georgia,serif" font-size="10" fill="#333">Must be over equator — not possible at other latitudes</text>
</svg>`;

  // ─── WEIGHTLESSNESS IN ORBIT DIAGRAM ─────────────────────────────────────
  static weightlessnessOrbitDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="700px" viewBox="0 0 700 700">

  <!-- Title -->
  <text x="160" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Weightlessness in Orbit</text>
  <text x="100" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Astronauts are in continuous free fall — gravitational force provides centripetal acceleration</text>

  <!-- ── Earth ── -->
  <circle cx="350" cy="380" r="100" fill="#fff" stroke="#000" stroke-width="3"/>
  <ellipse cx="350" cy="380" rx="100" ry="34" fill="none" stroke="#000" stroke-width="1.2"/>
  <ellipse cx="350" cy="380" rx="34" ry="100" fill="none" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="316" y="374" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Earth</text>
  <text x="316" y="392" font-family="Georgia,serif" font-size="11" fill="#333">g ≠ 0 here!</text>
  <text x="300" y="430" font-family="Georgia,serif" font-size="10" fill="#333">g ≈ 8.9 m s⁻² at ISS altitude</text>

  <!-- ── Orbit circle ── -->
  <circle cx="350" cy="380" r="220" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="8,5"/>

  <!-- ── Space station (schematic) at top of orbit ── -->
  <!-- Main body -->
  <rect x="308" y="128" width="84" height="26" rx="5" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <!-- Solar panels -->
  <rect x="240" y="133" width="66" height="16" rx="3" fill="#fff" stroke="#000" stroke-width="2"/>
  <line x1="248" y1="133" x2="248" y2="149" stroke="#000" stroke-width="1"/>
  <line x1="256" y1="133" x2="256" y2="149" stroke="#000" stroke-width="1"/>
  <line x1="264" y1="133" x2="264" y2="149" stroke="#000" stroke-width="1"/>
  <line x1="272" y1="133" x2="272" y2="149" stroke="#000" stroke-width="1"/>
  <line x1="280" y1="133" x2="280" y2="149" stroke="#000" stroke-width="1"/>
  <rect x="394" y="133" width="66" height="16" rx="3" fill="#fff" stroke="#000" stroke-width="2"/>
  <line x1="402" y1="133" x2="402" y2="149" stroke="#000" stroke-width="1"/>
  <line x1="410" y1="133" x2="410" y2="149" stroke="#000" stroke-width="1"/>
  <line x1="418" y1="133" x2="418" y2="149" stroke="#000" stroke-width="1"/>
  <line x1="426" y1="133" x2="426" y2="149" stroke="#000" stroke-width="1"/>
  <line x1="434" y1="133" x2="434" y2="149" stroke="#000" stroke-width="1"/>
  <text x="318" y="144" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000">ISS (schematic)</text>

  <!-- ── Astronaut inside station ── -->
  <!-- Head -->
  <circle cx="350" cy="170" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <!-- Body -->
  <line x1="350" y1="182" x2="350" y2="208" stroke="#000" stroke-width="2.5"/>
  <!-- Arms -->
  <line x1="350" y1="190" x2="332" y2="200" stroke="#000" stroke-width="2"/>
  <line x1="350" y1="190" x2="368" y2="200" stroke="#000" stroke-width="2"/>
  <!-- Legs (floating, slightly spread) -->
  <line x1="350" y1="208" x2="340" y2="224" stroke="#000" stroke-width="2"/>
  <line x1="350" y1="208" x2="360" y2="224" stroke="#000" stroke-width="2"/>
  <text x="368" y="175" font-family="Georgia,serif" font-size="9" fill="#000">Astronaut</text>
  <text x="366" y="187" font-family="Georgia,serif" font-size="9" fill="#333">(floating)</text>

  <!-- Normal force = 0 annotation -->
  <text x="400" y="160" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">N = 0</text>
  <text x="397" y="173" font-family="Georgia,serif" font-size="9" fill="#333">(no contact force)</text>

  <!-- ── Gravity arrow (pointing toward Earth centre) ── -->
  <line x1="350" y1="155" x2="350" y2="260" stroke="#000" stroke-width="3"/>
  <polygon points="344,254 350,270 356,254" fill="#000"/>
  <text x="358" y="218" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">g</text>
  <text x="358" y="232" font-family="Georgia,serif" font-size="9" fill="#333">= GMm/r²</text>
  <text x="358" y="244" font-family="Georgia,serif" font-size="9" fill="#333">(centripetal)</text>

  <!-- ── Orbital velocity arrow (tangential) ── -->
  <line x1="350" y1="162" x2="470" y2="162" stroke="#000" stroke-width="2.5"/>
  <polygon points="464,156 480,162 464,168" fill="#000"/>
  <text x="484" y="158" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">v</text>
  <text x="478" y="171" font-family="Georgia,serif" font-size="9" fill="#333">≈ 7.7 km s⁻¹</text>

  <!-- ── Free fall explanation arrows ── -->
  <!-- Projectile paths schematic -->
  <path d="M 460,200 Q 490,260 450,320" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="492" y="240" font-family="Georgia,serif" font-size="9" fill="#333">Falling toward</text>
  <text x="492" y="252" font-family="Georgia,serif" font-size="9" fill="#333">Earth — but</text>
  <text x="492" y="264" font-family="Georgia,serif" font-size="9" fill="#333">Earth curves away</text>
  <polygon points="446,314 453,326 458,314" fill="#000"/>

  <!-- ── Key distinction box ── -->
  <rect x="30" y="590" width="640" height="95" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="612" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Why Weightlessness?</text>
  <text x="50" y="630" font-family="Georgia,serif" font-size="10" fill="#000">• Weight W = mg ≠ 0 — gravity still acts (g ≈ 8.9 m s⁻² at ISS altitude ~400 km)</text>
  <text x="50" y="648" font-family="Georgia,serif" font-size="10" fill="#000">• Astronaut and station both accelerate at the same rate toward Earth (free fall)</text>
  <text x="50" y="666" font-family="Georgia,serif" font-size="10" fill="#000">• No contact (normal) force N = 0 — apparent weight = 0 — "weightlessness"</text>
  <text x="50" y="680" font-family="Georgia,serif" font-size="10" fill="#333">• Same principle as an elevator in free fall: ΣF = mg − N = ma → N = m(g−a)</text>
</svg>`;

  // ─── PHOTOELECTRIC EFFECT DIAGRAM ────────────────────────────────────────
  static photoelectricEffectSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="220" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Photoelectric Effect</text>
  <text x="160" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Photon strikes metal surface, ejecting electron — hf = φ + KE_max</text>

  <!-- ── Metal surface ── -->
  <!-- Surface block (thick, with hatch) -->
  <rect x="100" y="280" width="600" height="200" rx="4" fill="#fff" stroke="#000" stroke-width="3"/>
  <!-- Hatch fill for metal -->
  <line x1="100" y1="296" x2="130" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="100" y1="326" x2="160" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="100" y1="356" x2="190" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="100" y1="386" x2="220" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="100" y1="416" x2="250" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="100" y1="446" x2="280" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="100" y1="476" x2="310" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="120" y1="480" x2="340" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="150" y1="480" x2="370" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="180" y1="480" x2="400" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="210" y1="480" x2="430" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="240" y1="480" x2="460" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="270" y1="480" x2="490" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="300" y1="480" x2="520" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="330" y1="480" x2="550" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="360" y1="480" x2="580" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="390" y1="480" x2="610" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="420" y1="480" x2="640" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="450" y1="480" x2="670" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="480" y1="480" x2="700" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="510" y1="480" x2="700" y2="302" stroke="#000" stroke-width="1"/>
  <line x1="540" y1="480" x2="700" y2="332" stroke="#000" stroke-width="1"/>
  <line x1="570" y1="480" x2="700" y2="362" stroke="#000" stroke-width="1"/>
  <line x1="600" y1="480" x2="700" y2="392" stroke="#000" stroke-width="1"/>
  <line x1="630" y1="480" x2="700" y2="422" stroke="#000" stroke-width="1"/>
  <line x1="660" y1="480" x2="700" y2="452" stroke="#000" stroke-width="1"/>
  <text x="340" y="380" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Metal Surface (Zinc plate)</text>
  <text x="340" y="398" font-family="Georgia,serif" font-size="10" fill="#333">Work function φ = 4.3 eV</text>

  <!-- ── Incoming photons (wave arrows) from upper-left ── -->
  <!-- Photon 1 -->
  <path d="M 80,80 Q 98,68 116,80 Q 134,92 152,80 Q 170,68 188,80 Q 206,92 224,80 Q 242,68 260,80"
        fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="260" y1="80" x2="310" y2="200" stroke="#000" stroke-width="2.5"/>
  <polygon points="303,196 313,210 318,196" fill="#000"/>
  <text x="40" y="75" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">hf</text>
  <text x="30" y="88" font-family="Georgia,serif" font-size="10" fill="#333">(photon)</text>

  <!-- Photon 2 -->
  <path d="M 160,120 Q 178,108 196,120 Q 214,132 232,120 Q 250,108 268,120 Q 286,132 304,120"
        fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="304" y1="120" x2="360" y2="220" stroke="#000" stroke-width="2.5"/>
  <polygon points="353,215 364,230 368,215" fill="#000"/>

  <!-- Photon 3 -->
  <path d="M 250,150 Q 268,138 286,150 Q 304,162 322,150 Q 340,138 358,150 Q 376,162 394,150"
        fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="394" y1="150" x2="420" y2="260" stroke="#000" stroke-width="2.5"/>
  <polygon points="413,255 422,270 428,255" fill="#000"/>

  <!-- ── Ejected electrons ── -->
  <!-- Electron 1 -->
  <circle cx="310" cy="264" r="10" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="304" y="268" font-family="Georgia,serif" font-size="10" fill="#000">e⁻</text>
  <line x1="310" y1="254" x2="290" y2="160" stroke="#000" stroke-width="2.5"/>
  <polygon points="284,167 291,153 297,167" fill="#000"/>
  <text x="258" y="150" font-family="Georgia,serif" font-size="10" fill="#000">KE_max</text>
  <text x="252" y="163" font-family="Georgia,serif" font-size="9" fill="#333">= hf − φ</text>

  <!-- Electron 2 -->
  <circle cx="420" cy="264" r="10" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="414" y="268" font-family="Georgia,serif" font-size="10" fill="#000">e⁻</text>
  <line x1="430" y1="256" x2="500" y2="180" stroke="#000" stroke-width="2.5"/>
  <polygon points="493,176 506,170 504,184" fill="#000"/>
  <text x="510" y="168" font-family="Georgia,serif" font-size="10" fill="#000">KE_max</text>

  <!-- Electron 3 (threshold case — barely escapes) -->
  <circle cx="560" cy="270" r="10" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="554" y="274" font-family="Georgia,serif" font-size="10" fill="#000">e⁻</text>
  <line x1="568" y1="265" x2="620" y2="235" stroke="#000" stroke-width="2"/>
  <polygon points="612,228 626,230 618,242" fill="#000"/>
  <text x="628" y="230" font-family="Georgia,serif" font-size="9" fill="#000">KE≈0</text>
  <text x="620" y="242" font-family="Georgia,serif" font-size="8" fill="#333">(threshold f₀)</text>

  <!-- ── Energy level annotation (right side) ── -->
  <rect x="620" y="80" width="160" height="180" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="635" y="100" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Energy levels:</text>
  <!-- Vacuum level -->
  <line x1="630" y1="115" x2="770" y2="115" stroke="#000" stroke-width="2"/>
  <text x="632" y="110" font-family="Georgia,serif" font-size="9" fill="#000">0 (vacuum level)</text>
  <!-- Work function arrow -->
  <line x1="700" y1="115" x2="700" y2="175" stroke="#000" stroke-width="2"/>
  <polygon points="694,121 700,107 706,121" fill="#000"/>
  <polygon points="694,169 700,183 706,169" fill="#000"/>
  <text x="706" y="150" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">φ</text>
  <!-- Fermi level -->
  <line x1="630" y1="175" x2="770" y2="175" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="632" y="170" font-family="Georgia,serif" font-size="9" fill="#000">Fermi level</text>
  <!-- photon energy arrow -->
  <line x1="660" y1="88" x2="660" y2="115" stroke="#000" stroke-width="2"/>
  <polygon points="654,109 660,123 666,109" fill="#000"/>
  <text x="632" y="95" font-family="Georgia,serif" font-size="9" fill="#000">KE_max</text>
  <!-- Work function brace -->
  <text x="632" y="188" font-family="Georgia,serif" font-size="9" fill="#333">φ = hf₀ (threshold)</text>
  <text x="632" y="200" font-family="Georgia,serif" font-size="9" fill="#333">f₀ = φ/h</text>
  <text x="632" y="214" font-family="Georgia,serif" font-size="9" fill="#333">λ_max = hc/φ</text>
  <text x="632" y="228" font-family="Georgia,serif" font-size="9" fill="#333">h = 6.63×10⁻³⁴ J s</text>
  <text x="632" y="242" font-family="Georgia,serif" font-size="9" fill="#333">hf = φ + KE_max</text>

  <!-- ── Info box ── -->
  <rect x="30" y="500" width="580" height="85" rx="6" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="50" y="520" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Observations (Einstein 1905):</text>
  <text x="50" y="538" font-family="Georgia,serif" font-size="10" fill="#000">• Below threshold frequency f₀: no electrons emitted, regardless of intensity</text>
  <text x="50" y="554" font-family="Georgia,serif" font-size="10" fill="#000">• Above f₀: electrons emitted instantly — KE_max = hf − φ (independent of intensity)</text>
  <text x="50" y="570" font-family="Georgia,serif" font-size="10" fill="#000">• Increasing intensity → more electrons per second, not higher KE</text>
  <text x="50" y="586" font-family="Georgia,serif" font-size="10" fill="#333">• Evidence for quantisation of light (photon model) — cannot be explained by wave theory</text>
</svg>`;

  // ─── LINE EMISSION SPECTRA DIAGRAM ───────────────────────────────────────
  static lineEmissionSpectraSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="400px" viewBox="0 0 900 400">

  <!-- Title -->
  <text x="260" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Hydrogen Emission Spectrum (Visible — Balmer Series)</text>
  <text x="220" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Discrete spectral lines produced by electron transitions to n=2 level</text>

  <!-- ── Spectrum bar (black bg, white lines represent wavelengths) ── -->
  <rect x="60" y="80" width="780" height="100" rx="4" fill="#fff" stroke="#000" stroke-width="3"/>

  <!-- Wavelength scale labels below bar -->
  <text x="55" y="200" font-family="Georgia,serif" font-size="10" fill="#000">380 nm</text>
  <text x="196" y="200" font-family="Georgia,serif" font-size="10" fill="#000">450 nm</text>
  <text x="334" y="200" font-family="Georgia,serif" font-size="10" fill="#000">500 nm</text>
  <text x="472" y="200" font-family="Georgia,serif" font-size="10" fill="#000">550 nm</text>
  <text x="610" y="200" font-family="Georgia,serif" font-size="10" fill="#000">630 nm</text>
  <text x="790" y="200" font-family="Georgia,serif" font-size="10" fill="#000">700 nm</text>

  <!-- Wavelength axis tick marks -->
  <line x1="60"  y1="180" x2="60"  y2="190" stroke="#000" stroke-width="1.5"/>
  <line x1="207" y1="180" x2="207" y2="190" stroke="#000" stroke-width="1.5"/>
  <line x1="343" y1="180" x2="343" y2="190" stroke="#000" stroke-width="1.5"/>
  <line x1="479" y1="180" x2="479" y2="190" stroke="#000" stroke-width="1.5"/>
  <line x1="616" y1="180" x2="616" y2="190" stroke="#000" stroke-width="1.5"/>
  <line x1="840" y1="180" x2="840" y2="190" stroke="#000" stroke-width="1.5"/>

  <!-- Wavelength axis line -->
  <line x1="60" y1="185" x2="840" y2="185" stroke="#000" stroke-width="1.5"/>
  <polygon points="836,181 848,185 836,189" fill="#000"/>
  <text x="852" y="189" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">λ (nm)</text>

  <!-- ── Spectral lines (vertical, thick, black) ──
       Map λ=380–700 nm to x=60–840 (range=780 px for 320 nm → 2.4375 px/nm)
       H-α: 656 nm → x = 60 + (656-380)*2.4375 = 60+673 = 733
       H-β: 486 nm → x = 60 + (486-380)*2.4375 = 60+258 = 318
       H-γ: 434 nm → x = 60 + (434-380)*2.4375 = 60+132 = 192
       H-δ: 410 nm → x = 60 + (410-380)*2.4375 = 60+73 = 133
  -->

  <!-- H-δ: 410 nm — violet -->
  <line x1="133" y1="80" x2="133" y2="180" stroke="#000" stroke-width="4"/>
  <!-- H-γ: 434 nm — violet-blue -->
  <line x1="192" y1="80" x2="192" y2="180" stroke="#000" stroke-width="4"/>
  <!-- H-β: 486 nm — blue-green -->
  <line x1="318" y1="80" x2="318" y2="180" stroke="#000" stroke-width="5"/>
  <!-- H-α: 656 nm — red -->
  <line x1="733" y1="80" x2="733" y2="180" stroke="#000" stroke-width="6"/>

  <!-- Line labels above spectrum -->
  <line x1="133" y1="78" x2="133" y2="60" stroke="#000" stroke-width="1.5"/>
  <text x="108" y="56" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">H-δ</text>
  <text x="104" y="68" font-family="Georgia,serif" font-size="10" fill="#333">410 nm</text>
  <text x="98"  y="80" font-family="Georgia,serif" font-size="9"  fill="#333">n=6→2</text>

  <line x1="192" y1="78" x2="220" y2="56" stroke="#000" stroke-width="1.5"/>
  <text x="222" y="52" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">H-γ</text>
  <text x="218" y="64" font-family="Georgia,serif" font-size="10" fill="#333">434 nm</text>
  <text x="218" y="76" font-family="Georgia,serif" font-size="9"  fill="#333">n=5→2</text>

  <line x1="318" y1="78" x2="318" y2="50" stroke="#000" stroke-width="1.5"/>
  <text x="293" y="46" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">H-β</text>
  <text x="289" y="58" font-family="Georgia,serif" font-size="10" fill="#333">486 nm</text>
  <text x="289" y="70" font-family="Georgia,serif" font-size="9"  fill="#333">n=4→2</text>

  <line x1="733" y1="78" x2="733" y2="50" stroke="#000" stroke-width="1.5"/>
  <text x="708" y="46" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">H-α</text>
  <text x="704" y="58" font-family="Georgia,serif" font-size="10" fill="#333">656 nm</text>
  <text x="704" y="70" font-family="Georgia,serif" font-size="9"  fill="#333">n=3→2</text>

  <!-- Wavelength range labels -->
  <text x="62"  y="100" font-family="Georgia,serif" font-size="9" fill="#555">UV</text>
  <text x="62"  y="112" font-family="Georgia,serif" font-size="9" fill="#555">(invisible)</text>
  <text x="680" y="100" font-family="Georgia,serif" font-size="9" fill="#555">IR</text>
  <text x="672" y="112" font-family="Georgia,serif" font-size="9" fill="#555">(invisible)</text>
  <text x="355" y="140" font-family="Georgia,serif" font-size="10" fill="#333">← visible light (380–700 nm) →</text>

  <!-- ── Rydberg formula box ── -->
  <rect x="60" y="230" width="380" height="80" rx="6" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="80" y="250" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Rydberg Formula:</text>
  <text x="80" y="270" font-family="Georgia,serif" font-size="12" fill="#000">1/λ = R_H (1/n₁² − 1/n₂²)</text>
  <text x="80" y="288" font-family="Georgia,serif" font-size="10" fill="#333">R_H = 1.097 × 10⁷ m⁻¹  (Rydberg constant)</text>
  <text x="80" y="302" font-family="Georgia,serif" font-size="10" fill="#333">Balmer series: n₁ = 2, n₂ = 3, 4, 5, … (visible)</text>

  <!-- ── Series table ── -->
  <rect x="460" y="230" width="380" height="150" rx="6" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="480" y="250" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Spectral Series (Hydrogen):</text>
  <text x="480" y="268" font-family="Georgia,serif" font-size="10" fill="#000">Lyman series:    n→1   Ultraviolet</text>
  <text x="480" y="284" font-family="Georgia,serif" font-size="10" fill="#000">Balmer series:   n→2   Visible</text>
  <text x="480" y="300" font-family="Georgia,serif" font-size="10" fill="#000">Paschen series: n→3   Infrared</text>
  <text x="480" y="316" font-family="Georgia,serif" font-size="10" fill="#000">Brackett series: n→4   Far infrared</text>
  <text x="480" y="332" font-family="Georgia,serif" font-size="10" fill="#333">Each element has a unique spectral fingerprint</text>
  <text x="480" y="348" font-family="Georgia,serif" font-size="10" fill="#333">used in stellar spectroscopy for identification</text>

  <!-- Note at bottom -->
  <text x="60" y="395" font-family="Georgia,serif" font-size="10" fill="#333">Note: Line width in diagram indicates relative intensity (H-α strongest in visible Balmer series)</text>
</svg>`;

  // ─── BOHR ENERGY LEVEL DIAGRAM ────────────────────────────────────────────
  static bohrEnergyLevelDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="800px" viewBox="0 0 700 800">

  <!-- Title -->
  <text x="165" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Bohr Energy Levels — Hydrogen Atom</text>
  <text x="145" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Quantised energy levels E_n = −13.6/n² eV</text>

  <!-- ── Energy axis ── -->
  <line x1="180" y1="60" x2="180" y2="700" stroke="#000" stroke-width="2.5"/>
  <polygon points="175,64 180,50 185,64" fill="#000"/>
  <text x="145" y="48" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">E (eV)</text>

  <!-- ── Ionisation level (E=0) ── -->
  <!-- Map: E=0 → y=100, E=-13.6 → y=680
       Scale: 580 px for 13.6 eV → 42.6 px/eV
       n=1: E=-13.6eV → y=680
       n=2: E=-3.40eV → y=680-10.2*42.6=246
       n=3: E=-1.51eV → y=680-12.09*42.6=165   -->
  <!-- More precise: y = 100 + (0-E)*42.6 = 100 - E*42.6 -->
  <!-- n=1: y=100+13.6*42.6=679 ✓
       n=2: y=100+3.40*42.6=245
       n=3: y=100+1.51*42.6=164
       n=4: y=100+0.85*42.6=136
       n=5: y=100+0.54*42.6=123
       n=6: y=100+0.38*42.6=116
       n=∞: y=100
  -->

  <!-- Ionisation level (n=∞, E=0) -->
  <line x1="160" y1="100" x2="580" y2="100" stroke="#000" stroke-width="2.5"/>
  <text x="584" y="104" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">n = ∞ (ionisation)</text>
  <text x="110" y="104" font-family="Georgia,serif" font-size="11" fill="#000">0</text>

  <!-- n=6: E=-0.38 eV → y=116 -->
  <line x1="160" y1="116" x2="400" y2="116" stroke="#000" stroke-width="1.8"/>
  <text x="404" y="120" font-family="Georgia,serif" font-size="11" fill="#000">n = 6,  E = −0.38 eV</text>
  <text x="100" y="120" font-family="Georgia,serif" font-size="10" fill="#333">−0.38</text>

  <!-- n=5: E=-0.54 eV → y=123 -->
  <line x1="160" y1="123" x2="400" y2="123" stroke="#000" stroke-width="1.8"/>
  <text x="404" y="127" font-family="Georgia,serif" font-size="11" fill="#000">n = 5,  E = −0.54 eV</text>
  <text x="100" y="127" font-family="Georgia,serif" font-size="10" fill="#333">−0.54</text>

  <!-- n=4: E=-0.85 eV → y=136 -->
  <line x1="160" y1="136" x2="400" y2="136" stroke="#000" stroke-width="2"/>
  <text x="404" y="140" font-family="Georgia,serif" font-size="11" fill="#000">n = 4,  E = −0.85 eV</text>
  <text x="100" y="140" font-family="Georgia,serif" font-size="10" fill="#333">−0.85</text>

  <!-- n=3: E=-1.51 eV → y=164 -->
  <line x1="160" y1="164" x2="400" y2="164" stroke="#000" stroke-width="2.5"/>
  <text x="404" y="168" font-family="Georgia,serif" font-size="12" fill="#000">n = 3,  E = −1.51 eV</text>
  <text x="100" y="168" font-family="Georgia,serif" font-size="10" fill="#333">−1.51</text>

  <!-- n=2: E=-3.40 eV → y=245 -->
  <line x1="160" y1="245" x2="400" y2="245" stroke="#000" stroke-width="2.5"/>
  <text x="404" y="249" font-family="Georgia,serif" font-size="13" fill="#000">n = 2,  E = −3.40 eV</text>
  <text x="100" y="249" font-family="Georgia,serif" font-size="10" fill="#333">−3.40</text>

  <!-- n=1 (ground state): E=-13.6 eV → y=679 -->
  <line x1="160" y1="679" x2="400" y2="679" stroke="#000" stroke-width="4"/>
  <text x="404" y="683" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">n = 1,  E = −13.6 eV</text>
  <text x="74" y="683" font-family="Georgia,serif" font-size="10" fill="#333">−13.6</text>
  <text x="404" y="698" font-family="Georgia,serif" font-size="10" fill="#333">(ground state)</text>

  <!-- ── Electron on n=1 ── -->
  <circle cx="290" cy="679" r="8" fill="#000"/>
  <text x="300" y="674" font-family="Georgia,serif" font-size="9" fill="#000">e⁻</text>

  <!-- ── Transition arrows (examples) ── -->

  <!-- n=3 → n=2 (Balmer H-α, 656 nm) -->
  <line x1="230" y1="164" x2="230" y2="245" stroke="#000" stroke-width="2.5"/>
  <polygon points="224,239 230,253 236,239" fill="#000"/>
  <text x="116" y="205" font-family="Georgia,serif" font-size="9" fill="#000">H-α</text>
  <text x="110" y="217" font-family="Georgia,serif" font-size="9" fill="#000">656 nm</text>
  <text x="108" y="229" font-family="Georgia,serif" font-size="9" fill="#333">Balmer</text>
  <line x1="148" y1="205" x2="223" y2="205" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>

  <!-- n=2 → n=1 (Lyman, 122 nm, UV) -->
  <line x1="260" y1="245" x2="260" y2="679" stroke="#000" stroke-width="2.5" stroke-dasharray="6,3"/>
  <polygon points="254,673 260,687 266,673" fill="#000"/>
  <text x="126" y="450" font-family="Georgia,serif" font-size="9" fill="#000">Lyman</text>
  <text x="122" y="462" font-family="Georgia,serif" font-size="9" fill="#000">122 nm</text>
  <text x="122" y="474" font-family="Georgia,serif" font-size="9" fill="#333">(UV)</text>
  <line x1="160" y1="462" x2="252" y2="462" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>

  <!-- n=4 → n=2 (Balmer H-β, 486 nm) -->
  <line x1="310" y1="136" x2="310" y2="245" stroke="#000" stroke-width="2"/>
  <polygon points="304,239 310,253 316,239" fill="#000"/>
  <text x="316" y="188" font-family="Georgia,serif" font-size="9" fill="#000">H-β</text>
  <text x="314" y="200" font-family="Georgia,serif" font-size="9" fill="#000">486 nm</text>

  <!-- n=5 → n=3 (Paschen, IR) -->
  <line x1="355" y1="123" x2="355" y2="164" stroke="#000" stroke-width="1.8" stroke-dasharray="4,3"/>
  <polygon points="349,158 355,172 361,158" fill="#000"/>
  <text x="358" y="140" font-family="Georgia,serif" font-size="8" fill="#333">Paschen</text>
  <text x="358" y="151" font-family="Georgia,serif" font-size="8" fill="#333">(IR)</text>

  <!-- ── Energy spacing annotation ── -->
  <line x1="170" y1="245" x2="170" y2="679" stroke="#000" stroke-width="1.2" stroke-dasharray="3,3"/>
  <line x1="164" y1="245" x2="176" y2="245" stroke="#000" stroke-width="1.5"/>
  <line x1="164" y1="679" x2="176" y2="679" stroke="#000" stroke-width="1.5"/>
  <text x="128" y="465" font-family="Georgia,serif" font-size="9" fill="#000">10.2 eV</text>

  <!-- ── Formula box ── -->
  <rect x="60" y="720" width="580" height="65" rx="6" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="80" y="740" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Bohr Energy Formula:</text>
  <text x="80" y="758" font-family="Georgia,serif" font-size="12" fill="#000">E_n = −13.6 / n²  eV   (n = 1, 2, 3, …)</text>
  <text x="80" y="774" font-family="Georgia,serif" font-size="10" fill="#333">Photon emitted: hf = E_initial − E_final  |  hf = hc/λ = ΔE</text>
</svg>`;

  // ─── BOHR TRANSITION DIAGRAM ──────────────────────────────────────────────
  static bohrTransitionDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 800 800">

  <!-- Title -->
  <text x="200" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Electron Transitions — Hydrogen Atom</text>
  <text x="160" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Photon emitted when electron falls to lower level; absorbed when it rises</text>

  <!-- ── Nucleus ── -->
  <circle cx="400" cy="400" r="22" fill="#000"/>
  <text x="388" y="405" font-family="Georgia,serif" font-size="10" fill="#fff">p⁺</text>

  <!-- ── Electron orbits (circular shells) ── -->
  <!-- n=1: r=50 -->
  <circle cx="400" cy="400" r="50"  fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="452" y="357" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">n=1</text>
  <text x="452" y="369" font-family="Georgia,serif" font-size="10" fill="#333">−13.6 eV</text>

  <!-- n=2: r=110 -->
  <circle cx="400" cy="400" r="110" fill="none" stroke="#000" stroke-width="2"/>
  <text x="512" y="305" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">n=2</text>
  <text x="510" y="318" font-family="Georgia,serif" font-size="10" fill="#333">−3.40 eV</text>

  <!-- n=3: r=175 -->
  <circle cx="400" cy="400" r="175" fill="none" stroke="#000" stroke-width="2"/>
  <text x="578" y="248" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">n=3</text>
  <text x="576" y="261" font-family="Georgia,serif" font-size="10" fill="#333">−1.51 eV</text>

  <!-- n=4: r=240 -->
  <circle cx="400" cy="400" r="240" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="6,4"/>
  <text x="644" y="184" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">n=4</text>
  <text x="642" y="197" font-family="Georgia,serif" font-size="10" fill="#333">−0.85 eV</text>

  <!-- n=5: r=295 -->
  <circle cx="400" cy="400" r="295" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <text x="700" y="122" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">n=5</text>
  <text x="698" y="135" font-family="Georgia,serif" font-size="10" fill="#333">−0.54 eV</text>

  <!-- ── Electrons on orbits ── -->
  <!-- n=1 ground state electron (bottom of orbit) -->
  <circle cx="400" cy="450" r="9" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="394" y="454" font-family="Georgia,serif" font-size="8" fill="#000">e⁻</text>

  <!-- ── Transition 1: n=3 → n=2 (Balmer H-α, 656 nm) ── -->
  <!-- Start: (400,225) on n=3 top, End: (290,400) on n=2 left -->
  <!-- Simplified: arc from top of n=3 to left of n=2 -->
  <path d="M 400,225 Q 310,270 290,400" fill="none" stroke="#000" stroke-width="3"/>
  <polygon points="285,390 290,404 298,393" fill="#000"/>
  <!-- Photon wavy line -->
  <path d="M 350,250 Q 330,240 320,252 Q 310,264 300,252 Q 290,240 280,252"
        fill="none" stroke="#000" stroke-width="2"/>
  <polygon points="274,249 268,256 276,261" fill="#000"/>
  <text x="240" y="248" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">hf₁</text>
  <text x="220" y="262" font-family="Georgia,serif" font-size="9" fill="#000">656 nm (H-α)</text>
  <text x="220" y="274" font-family="Georgia,serif" font-size="9" fill="#333">Balmer series</text>
  <text x="220" y="286" font-family="Georgia,serif" font-size="9" fill="#333">ΔE = 1.89 eV</text>

  <!-- ── Transition 2: n=2 → n=1 (Lyman, 122 nm) ── -->
  <!-- From right of n=2 to top-right of n=1 -->
  <path d="M 510,400 Q 480,360 448,358" fill="none" stroke="#000" stroke-width="3" stroke-dasharray="6,3"/>
  <polygon points="453,351 446,363 458,364" fill="#000"/>
  <!-- Photon wavy -->
  <path d="M 550,380 Q 565,370 575,380 Q 585,390 595,380 Q 605,370 615,380 Q 625,390 635,380"
        fill="none" stroke="#000" stroke-width="2"/>
  <polygon points="631,374 643,380 631,386" fill="#000"/>
  <text x="648" y="378" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">hf₂</text>
  <text x="648" y="392" font-family="Georgia,serif" font-size="9" fill="#000">122 nm (UV)</text>
  <text x="648" y="404" font-family="Georgia,serif" font-size="9" fill="#333">Lyman series</text>
  <text x="648" y="416" font-family="Georgia,serif" font-size="9" fill="#333">ΔE = 10.2 eV</text>

  <!-- ── Transition 3: n=4 → n=2 (Balmer H-β, 486 nm) ── -->
  <!-- From bottom of n=4 to bottom of n=2 -->
  <path d="M 400,640 Q 370,560 400,510" fill="none" stroke="#000" stroke-width="2.5"/>
  <polygon points="396,514 400,500 404,514" fill="#000"/>
  <!-- Photon -->
  <path d="M 360,580 Q 345,570 340,580 Q 335,590 330,580 Q 325,570 320,580"
        fill="none" stroke="#000" stroke-width="2"/>
  <polygon points="314,577 308,584 316,589" fill="#000"/>
  <text x="278" y="578" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000">hf₃</text>
  <text x="260" y="592" font-family="Georgia,serif" font-size="9" fill="#000">486 nm (H-β)</text>
  <text x="262" y="604" font-family="Georgia,serif" font-size="9" fill="#333">Balmer series</text>

  <!-- ── Absorption arrow (n=1 → n=3, upward) ── -->
  <path d="M 370,360 Q 310,310 225,225" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <polygon points="219,232 222,218 232,226" fill="#000"/>
  <text x="188" y="216" font-family="Georgia,serif" font-size="9" fill="#000">Absorption</text>
  <text x="190" y="228" font-family="Georgia,serif" font-size="9" fill="#333">(n=1→n=3)</text>
  <!-- Absorbed photon wavy -->
  <path d="M 290,300 Q 275,290 270,300 Q 265,310 260,300 Q 255,290 250,300"
        fill="none" stroke="#000" stroke-width="2"/>
  <polygon points="292,294 300,301 292,308" fill="#000"/>

  <!-- ── Legend box ── -->
  <rect x="30" y="680" width="740" height="100" rx="6" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="50" y="700" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Equations:</text>
  <text x="50" y="718" font-family="Georgia,serif" font-size="11" fill="#000">Photon energy:  hf = E_high − E_low  |  E_n = −13.6/n² eV</text>
  <text x="50" y="736" font-family="Georgia,serif" font-size="11" fill="#000">Wavelength:  1/λ = R_H(1/n₁² − 1/n₂²)  |  R_H = 1.097×10⁷ m⁻¹</text>
  <line x1="50" y1="742" x2="740" y2="742" stroke="#000" stroke-width="0.8"/>
  <text x="50" y="758" font-family="Georgia,serif" font-size="10" fill="#333">Lyman (UV): n→1  |  Balmer (visible): n→2  |  Paschen (IR): n→3</text>
  <text x="50" y="772" font-family="Georgia,serif" font-size="10" fill="#333">Solid arrow = emission (electron falls); Dashed arrow = absorption (electron rises)</text>
</svg>`;

  // ─── COMPTON SCATTERING DIAGRAM ───────────────────────────────────────────
  static comptonScatteringDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="210" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Compton Scattering</text>
  <text x="145" y="46" font-family="Georgia,serif" font-size="11" fill="#333">X-ray photon scatters off a free electron — wavelength increases, electron recoils</text>

  <!-- ── Electron at rest (centre) ── -->
  <circle cx="400" cy="300" r="22" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="390" y="305" font-family="Georgia,serif" font-size="13" fill="#000">e⁻</text>
  <text x="380" y="330" font-family="Georgia,serif" font-size="10" fill="#333">(at rest)</text>

  <!-- ── Incident photon (from left) ── -->
  <!-- Wavy line from x=80 to x=370 at y=300 -->
  <path d="M 80,300 Q 95,286 110,300 Q 125,314 140,300 Q 155,286 170,300 Q 185,314 200,300 Q 215,286 230,300 Q 245,314 260,300 Q 275,286 290,300 Q 305,314 320,300 Q 335,286 350,300 Q 360,308 370,300"
        fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="364,293 380,300 364,307" fill="#000"/>
  <!-- Arrow tip already incorporated -->
  <text x="130" y="278" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">λ₀</text>
  <text x="110" y="292" font-family="Georgia,serif" font-size="10" fill="#333">(incident photon)</text>
  <text x="110" y="304" font-family="Georgia,serif" font-size="10" fill="#333">E₀ = hf₀ = hc/λ₀</text>
  <text x="110" y="316" font-family="Georgia,serif" font-size="10" fill="#333">p₀ = h/λ₀</text>

  <!-- ── Scattered photon (upper right, angle θ) ── -->
  <!-- θ = 90° in diagram, scattered photon goes up-right -->
  <path d="M 420,282 Q 438,267 456,282 Q 474,297 492,282 Q 510,267 528,282 Q 546,297 564,282 Q 572,274 580,268"
        fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="574,261 588,268 574,275" fill="#000"/>
  <text x="590" y="262" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">λ'</text>
  <text x="582" y="244" font-family="Georgia,serif" font-size="10" fill="#000">Scattered photon</text>
  <text x="582" y="256" font-family="Georgia,serif" font-size="10" fill="#333">λ' &gt; λ₀</text>
  <text x="582" y="278" font-family="Georgia,serif" font-size="10" fill="#333">E' = hc/λ'</text>

  <!-- Scattering angle θ arc and label -->
  <path d="M 440,295 A 45,45 0 0,0 424,268" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="4,3"/>
  <text x="448" y="278" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">θ</text>
  <!-- θ = 90° label -->
  <text x="450" y="260" font-family="Georgia,serif" font-size="9" fill="#333">θ = 90°</text>

  <!-- ── Recoil electron (lower right) ── -->
  <circle cx="560" cy="420" r="18" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="550" y="425" font-family="Georgia,serif" font-size="12" fill="#000">e⁻</text>
  <line x1="418" y1="318" x2="542" y2="406" stroke="#000" stroke-width="2.5"/>
  <polygon points="535,400 550,410 540,420" fill="#000"/>
  <text x="562" y="440" font-family="Georgia,serif" font-size="10" fill="#000">Recoil electron</text>
  <text x="560" y="453" font-family="Georgia,serif" font-size="10" fill="#333">KE_e = E₀ − E'</text>
  <!-- Recoil angle φ -->
  <path d="M 415,322 A 38,38 0 0,1 432,342" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="415" y="355" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">φ</text>

  <!-- ── Horizontal reference line (incident direction) ── -->
  <line x1="380" y1="300" x2="700" y2="300" stroke="#000" stroke-width="1" stroke-dasharray="4,4"/>

  <!-- ── Compton wavelength shift formula box ── -->
  <rect x="30" y="480" width="460" height="100" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="500" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Compton Wavelength Shift:</text>
  <text x="50" y="520" font-family="Georgia,serif" font-size="14" fill="#000">Δλ = λ' − λ₀ = (h/m_e c)(1 − cos θ)</text>
  <text x="50" y="540" font-family="Georgia,serif" font-size="11" fill="#000">h/m_e c = 2.426 × 10⁻¹² m  (Compton wavelength)</text>
  <text x="50" y="558" font-family="Georgia,serif" font-size="10" fill="#333">At θ=90°: Δλ = h/m_e c ≈ 0.00243 nm</text>
  <text x="50" y="572" font-family="Georgia,serif" font-size="10" fill="#333">At θ=180° (backscatter): Δλ = 2h/m_e c ≈ 0.00486 nm (maximum)</text>

  <!-- ── Conservation box ── -->
  <rect x="510" y="480" width="270" height="100" rx="6" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="530" y="500" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Conservation Laws:</text>
  <text x="530" y="518" font-family="Georgia,serif" font-size="10" fill="#000">Energy:  E₀ = E' + KE_e</text>
  <text x="530" y="534" font-family="Georgia,serif" font-size="10" fill="#000">Momentum x:  p₀ = p'cosθ + p_e cosφ</text>
  <text x="530" y="550" font-family="Georgia,serif" font-size="10" fill="#000">Momentum y:  0 = p'sinθ − p_e sinφ</text>
  <text x="530" y="566" font-family="Georgia,serif" font-size="10" fill="#333">p = h/λ  (de Broglie for photon)</text>
  <text x="530" y="580" font-family="Georgia,serif" font-size="10" fill="#333">Confirms particle nature of light</text>
</svg>`;

  // ─── COMPTON ENERGY DIAGRAM ───────────────────────────────────────────────
  static comptonEnergyDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="215" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Compton Scattering — Wavelength Shift vs Angle</text>
  <text x="175" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Δλ = (h/m_e c)(1 − cos θ)  — shift independent of incident wavelength</text>

  <!-- ── Axes ── -->
  <line x1="120" y1="50" x2="120" y2="480" stroke="#000" stroke-width="2.5"/>
  <polygon points="115,54 120,40 125,54" fill="#000"/>
  <line x1="120" y1="480" x2="840" y2="480" stroke="#000" stroke-width="2.5"/>
  <polygon points="836,475 850,480 836,485" fill="#000"/>

  <!-- Axis labels -->
  <text x="855" y="486" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">θ (°)</text>
  <text x="30" y="270" font-family="Georgia,serif" font-size="12" fill="#000" transform="rotate(-90,50,270)">Δλ (pm)</text>

  <!-- X axis ticks (0° to 180°) -->
  <!-- Map 0→180° to x=120→840 → 4.0 px/° -->
  <line x1="120"  y1="480" x2="120"  y2="490" stroke="#000" stroke-width="2"/>
  <text x="113"   y="502" font-family="Georgia,serif" font-size="10" fill="#000">0</text>
  <line x1="240"  y1="480" x2="240"  y2="490" stroke="#000" stroke-width="2"/>
  <text x="230"   y="502" font-family="Georgia,serif" font-size="10" fill="#000">30</text>
  <line x1="360"  y1="480" x2="360"  y2="490" stroke="#000" stroke-width="2"/>
  <text x="350"   y="502" font-family="Georgia,serif" font-size="10" fill="#000">60</text>
  <line x1="480"  y1="480" x2="480"  y2="490" stroke="#000" stroke-width="2"/>
  <text x="470"   y="502" font-family="Georgia,serif" font-size="10" fill="#000">90</text>
  <line x1="600"  y1="480" x2="600"  y2="490" stroke="#000" stroke-width="2"/>
  <text x="588"   y="502" font-family="Georgia,serif" font-size="10" fill="#000">120</text>
  <line x1="720"  y1="480" x2="720"  y2="490" stroke="#000" stroke-width="2"/>
  <text x="708"   y="502" font-family="Georgia,serif" font-size="10" fill="#000">150</text>
  <line x1="840"  y1="480" x2="840"  y2="490" stroke="#000" stroke-width="2"/>
  <text x="828"   y="502" font-family="Georgia,serif" font-size="10" fill="#000">180</text>

  <!-- Y axis ticks: Δλ max at θ=180° = 2×2.426 = 4.852 pm
       Scale: y = 480 - Δλ_pm * 88 (so 4.852 pm → y=480-427=53)
       Actually: 4.852pm maps to (480-50)=430 px → 88.6 px/pm
  -->
  <line x1="112" y1="480" x2="120" y2="480" stroke="#000" stroke-width="2"/>
  <text x="84"  y="484" font-family="Georgia,serif" font-size="10" fill="#000">0</text>
  <line x1="112" y1="391" x2="120" y2="391" stroke="#000" stroke-width="2"/>
  <text x="70"  y="395" font-family="Georgia,serif" font-size="10" fill="#000">1.0</text>
  <line x1="112" y1="303" x2="120" y2="303" stroke="#000" stroke-width="2"/>
  <text x="70"  y="307" font-family="Georgia,serif" font-size="10" fill="#000">2.0</text>
  <line x1="112" y1="214" x2="120" y2="214" stroke="#000" stroke-width="2"/>
  <text x="70"  y="218" font-family="Georgia,serif" font-size="10" fill="#000">3.0</text>
  <line x1="112" y1="126" x2="120" y2="126" stroke="#000" stroke-width="2"/>
  <text x="70"  y="130" font-family="Georgia,serif" font-size="10" fill="#000">4.0</text>
  <text x="52"  y="80"  font-family="Georgia,serif" font-size="10" fill="#000">Δλ (pm)</text>

  <!-- ── Grid lines ── -->
  <line x1="120" y1="391" x2="840" y2="391" stroke="#000" stroke-width="0.8" stroke-dasharray="4,4"/>
  <line x1="120" y1="303" x2="840" y2="303" stroke="#000" stroke-width="0.8" stroke-dasharray="4,4"/>
  <line x1="120" y1="214" x2="840" y2="214" stroke="#000" stroke-width="0.8" stroke-dasharray="4,4"/>
  <line x1="120" y1="126" x2="840" y2="126" stroke="#000" stroke-width="0.8" stroke-dasharray="4,4"/>
  <line x1="240" y1="50" x2="240" y2="480" stroke="#000" stroke-width="0.8" stroke-dasharray="4,4"/>
  <line x1="360" y1="50" x2="360" y2="480" stroke="#000" stroke-width="0.8" stroke-dasharray="4,4"/>
  <line x1="480" y1="50" x2="480" y2="480" stroke="#000" stroke-width="0.8" stroke-dasharray="4,4"/>
  <line x1="600" y1="50" x2="600" y2="480" stroke="#000" stroke-width="0.8" stroke-dasharray="4,4"/>
  <line x1="720" y1="50" x2="720" y2="480" stroke="#000" stroke-width="0.8" stroke-dasharray="4,4"/>

  <!-- ── Compton curve: Δλ = 2.426(1-cosθ) pm ──
       θ in degrees, x = 120 + θ*720/180
       y = 480 - Δλ * 88
       Points at θ=0,15,30,45,60,75,90,105,120,135,150,165,180:
       Δλ=0,0.086,0.324,0.711,1.213,1.798,2.426,3.054,3.639,4.127,4.513,4.765,4.852
       y= 480,472,451,418,373,322,267,211,160,117,82,60,53
       x= 120,180,240,300,360,420,480,540,600,660,720,780,840
  -->
  <polyline points="
    120,480
    180,472
    240,451
    300,418
    360,373
    420,322
    480,267
    540,211
    600,160
    660,117
    720,82
    780,60
    840,53"
    fill="none" stroke="#000" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>

  <!-- ── Key point annotations ── -->
  <!-- θ=90°: Δλ = h/m_e c = 2.426 pm -->
  <circle cx="480" cy="267" r="7" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <line x1="480" y1="260" x2="480" y2="160" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="480" y1="267" x2="360" y2="267" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="362" y="260" font-family="Georgia,serif" font-size="10" fill="#000">Δλ = 2.426 pm</text>
  <text x="362" y="272" font-family="Georgia,serif" font-size="9" fill="#333">= h/m_e c</text>
  <text x="462" y="150" font-family="Georgia,serif" font-size="10" fill="#000">θ = 90°</text>

  <!-- θ=180°: Δλ_max = 4.852 pm -->
  <circle cx="840" cy="53" r="7" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <line x1="833" y1="53" x2="690" y2="53" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="590" y="49" font-family="Georgia,serif" font-size="10" fill="#000">Δλ_max = 4.852 pm</text>
  <text x="598" y="61" font-family="Georgia,serif" font-size="9" fill="#333">(backscatter, θ=180°)</text>

  <!-- ── Compton wavelength horizontal reference ── -->
  <line x1="120" y1="267" x2="840" y2="267" stroke="#000" stroke-width="1" stroke-dasharray="3,5"/>
  <text x="680" y="258" font-family="Georgia,serif" font-size="9" fill="#333">λ_C = h/m_e c</text>

  <!-- ── Formula box ── -->
  <rect x="30" y="522" width="500" height="60" rx="6" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="50" y="542" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Compton Formula:</text>
  <text x="50" y="560" font-family="Georgia,serif" font-size="12" fill="#000">Δλ = (h/m_e c)(1 − cos θ)   =  2.426(1 − cos θ)  pm</text>
  <text x="50" y="575" font-family="Georgia,serif" font-size="10" fill="#333">Shift depends only on θ — independent of incident wavelength λ₀</text>

  <!-- ── Note box ── -->
  <rect x="550" y="522" width="320" height="60" rx="6" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="568" y="542" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Physical Significance:</text>
  <text x="568" y="558" font-family="Georgia,serif" font-size="10" fill="#000">Confirms photon has momentum p = h/λ</text>
  <text x="568" y="572" font-family="Georgia,serif" font-size="10" fill="#333">Classical wave theory predicts no shift (Δλ = 0)</text>
</svg>`;

  // ─── QUANTUM TUNNELLING DIAGRAM ───────────────────────────────────────────
  static quantumTunnelingsvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="265" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">Quantum Tunnelling</text>
  <text x="175" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Particle wave function penetrates a potential barrier even when E &lt; V₀</text>

  <!-- ── Axes ── -->
  <!-- Energy / Ψ axis (y) -->
  <line x1="80" y1="50" x2="80" y2="480" stroke="#000" stroke-width="2.5"/>
  <polygon points="75,54 80,40 125,54" fill="#000"/>
  <!-- Barrier top label -->
  <text x="30" y="44" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">E / Ψ</text>

  <!-- x axis -->
  <line x1="80" y1="400" x2="860" y2="400" stroke="#000" stroke-width="2.5"/>
  <polygon points="856,395 870,400 856,405" fill="#000"/>
  <text x="875" y="406" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">x</text>

  <!-- ── Potential barrier (box from x=380 to x=560) ── -->
  <!-- Barrier height V₀ at y=180, particle energy E at y=280 -->
  <rect x="380" y="180" width="180" height="220" rx="3" fill="#fff" stroke="#000" stroke-width="3"/>
  <!-- Hatch inside barrier -->
  <line x1="380" y1="190" x2="410" y2="180" stroke="#000" stroke-width="1"/>
  <line x1="380" y1="215" x2="440" y2="180" stroke="#000" stroke-width="1"/>
  <line x1="380" y1="240" x2="470" y2="180" stroke="#000" stroke-width="1"/>
  <line x1="380" y1="265" x2="500" y2="180" stroke="#000" stroke-width="1"/>
  <line x1="380" y1="290" x2="530" y2="180" stroke="#000" stroke-width="1"/>
  <line x1="380" y1="315" x2="555" y2="180" stroke="#000" stroke-width="1"/>
  <line x1="380" y1="340" x2="560" y2="200" stroke="#000" stroke-width="1"/>
  <line x1="380" y1="365" x2="560" y2="225" stroke="#000" stroke-width="1"/>
  <line x1="380" y1="390" x2="560" y2="250" stroke="#000" stroke-width="1"/>
  <line x1="395" y1="400" x2="560" y2="275" stroke="#000" stroke-width="1"/>
  <line x1="415" y1="400" x2="560" y2="295" stroke="#000" stroke-width="1"/>
  <line x1="440" y1="400" x2="560" y2="320" stroke="#000" stroke-width="1"/>
  <line x1="465" y1="400" x2="560" y2="345" stroke="#000" stroke-width="1"/>
  <line x1="495" y1="400" x2="560" y2="375" stroke="#000" stroke-width="1"/>
  <line x1="520" y1="400" x2="560" y2="395" stroke="#000" stroke-width="1"/>

  <!-- V₀ label -->
  <text x="470" y="168" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">V₀ = 5 eV</text>
  <!-- Barrier width label -->
  <line x1="380" y1="420" x2="560" y2="420" stroke="#000" stroke-width="1.5"/>
  <line x1="380" y1="414" x2="380" y2="426" stroke="#000" stroke-width="2"/>
  <line x1="560" y1="414" x2="560" y2="426" stroke="#000" stroke-width="2"/>
  <text x="448" y="438" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">a (barrier width)</text>

  <!-- ── Particle energy level (horizontal dashed) ── -->
  <line x1="80" y1="280" x2="860" y2="280" stroke="#000" stroke-width="2" stroke-dasharray="8,5"/>
  <text x="20" y="284" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">E</text>
  <text x="16" y="296" font-family="Georgia,serif" font-size="10" fill="#333">= 3 eV</text>
  <text x="604" y="278" font-family="Georgia,serif" font-size="10" fill="#000">E &lt; V₀  (classically forbidden)</text>

  <!-- ── Wave function regions ── -->

  <!-- Region I: incident + reflected wave (left of barrier, x=80 to 380) -->
  <!-- Sinusoidal wave with full amplitude -->
  <path d="M 80,280
    Q 110,230 140,280 Q 170,330 200,280
    Q 230,230 260,280 Q 290,330 320,280
    Q 345,240 370,280"
    fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <text x="100" y="165" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Region I</text>
  <text x="96" y="180" font-family="Georgia,serif" font-size="10" fill="#333">Ψ = A e^(ikx) + B e^(−ikx)</text>
  <text x="100" y="194" font-family="Georgia,serif" font-size="10" fill="#333">(incident + reflected)</text>
  <!-- Reflected wave (smaller amplitude, dashed) -->
  <path d="M 80,280
    Q 98,258 116,280 Q 134,302 152,280
    Q 170,258 188,280 Q 206,302 224,280
    Q 242,258 260,280 Q 278,302 296,280
    Q 314,258 332,280 Q 350,264 370,280"
    fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3" stroke-linecap="round"/>
  <text x="90" y="464" font-family="Georgia,serif" font-size="9" fill="#333">Reflected wave (dashed)</text>

  <!-- Region II: evanescent (exponential decay inside barrier) -->
  <path d="M 380,280 Q 420,280 460,290 Q 500,300 540,305 Q 555,306 560,307"
    fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <text x="390" y="165" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Region II</text>
  <text x="382" y="178" font-family="Georgia,serif" font-size="9" fill="#333">Ψ = Ce^(−κx) + De^(κx)</text>
  <text x="385" y="190" font-family="Georgia,serif" font-size="9" fill="#333">(exponential decay)</text>
  <text x="390" y="202" font-family="Georgia,serif" font-size="9" fill="#333">κ = √(2m(V₀−E))/ℏ</text>

  <!-- Region III: transmitted wave (right of barrier, smaller amplitude) -->
  <path d="M 560,307
    Q 590,260 620,307 Q 650,354 680,307
    Q 710,260 740,307 Q 770,354 800,307
    Q 825,277 845,307"
    fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <text x="600" y="165" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Region III</text>
  <text x="598" y="180" font-family="Georgia,serif" font-size="10" fill="#333">Ψ = F e^(ikx)</text>
  <text x="598" y="194" font-family="Georgia,serif" font-size="10" fill="#333">(transmitted)</text>
  <text x="598" y="208" font-family="Georgia,serif" font-size="10" fill="#333">|F|² &lt; |A|²</text>

  <!-- Amplitude comparison annotation -->
  <line x1="180" y1="230" x2="180" y2="280" stroke="#000" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="175" y1="230" x2="185" y2="230" stroke="#000" stroke-width="1.5"/>
  <text x="185" y="254" font-family="Georgia,serif" font-size="9" fill="#000">A</text>

  <line x1="680" y1="258" x2="680" y2="307" stroke="#000" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="675" y1="258" x2="685" y2="258" stroke="#000" stroke-width="1.5"/>
  <text x="685" y="282" font-family="Georgia,serif" font-size="9" fill="#000">F &lt; A</text>

  <!-- ── Transmission probability box ── -->
  <rect x="30" y="480" width="450" height="100" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="500" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Transmission Probability:</text>
  <text x="50" y="518" font-family="Georgia,serif" font-size="12" fill="#000">T ≈ e^(−2κa)   where  κ = √(2m(V₀−E)) / ℏ</text>
  <text x="50" y="536" font-family="Georgia,serif" font-size="10" fill="#333">T is exponentially sensitive to barrier width a and height (V₀−E)</text>
  <text x="50" y="554" font-family="Georgia,serif" font-size="10" fill="#333">Thin barrier → higher T. Heavy particle → lower T (larger κ).</text>
  <text x="50" y="570" font-family="Georgia,serif" font-size="10" fill="#333">Applications: STM, nuclear fusion, alpha decay, tunnel diodes</text>

  <!-- ── Classical vs Quantum box ── -->
  <rect x="500" y="480" width="370" height="100" rx="6" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="518" y="500" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Classical vs Quantum:</text>
  <text x="518" y="518" font-family="Georgia,serif" font-size="10" fill="#000">Classical: particle with E &lt; V₀ is ALWAYS reflected</text>
  <text x="518" y="534" font-family="Georgia,serif" font-size="10" fill="#000">Quantum: wave function extends into barrier → finite T</text>
  <text x="518" y="550" font-family="Georgia,serif" font-size="10" fill="#333">Consequence of Heisenberg uncertainty: ΔxΔp ≥ ℏ/2</text>
  <text x="518" y="566" font-family="Georgia,serif" font-size="10" fill="#333">Particle cannot be localised with E perfectly determined</text>
</svg>`;

  // ─── DE BROGLIE WAVELENGTH DIAGRAM ───────────────────────────────────────
  static deBroglieWavelengthSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="240" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">de Broglie Matter Wave</text>
  <text x="170" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Every moving particle has an associated matter wave — λ = h/p = h/(mv)</text>

  <!-- ══════════════════════
       SECTION 1: Particle + wave
  ══════════════════════ -->

  <!-- ── Moving electron (particle) ── -->
  <circle cx="130" cy="160" r="22" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="118" y="165" font-family="Georgia,serif" font-size="13" fill="#000">e⁻</text>
  <!-- Velocity arrow -->
  <line x1="152" y1="160" x2="230" y2="160" stroke="#000" stroke-width="2.5"/>
  <polygon points="224,154 240,160 224,166" fill="#000"/>
  <text x="244" y="155" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">v</text>
  <text x="240" y="168" font-family="Georgia,serif" font-size="9" fill="#333">= 10⁶ m s⁻¹</text>
  <!-- Momentum label -->
  <text x="96" y="192" font-family="Georgia,serif" font-size="10" fill="#333">m = 9.11×10⁻³¹ kg</text>
  <text x="96" y="204" font-family="Georgia,serif" font-size="10" fill="#333">p = mv = 9.11×10⁻²⁵ kg m s⁻¹</text>

  <!-- ── Matter wave associated with electron ── -->
  <path d="M 280,160
    Q 305,120 330,160 Q 355,200 380,160
    Q 405,120 430,160 Q 455,200 480,160
    Q 505,120 530,160 Q 555,200 580,160
    Q 605,120 630,160 Q 655,200 680,160
    Q 705,120 730,160 Q 755,200 780,160"
    fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>

  <!-- Wavelength annotation -->
  <line x1="280" y1="210" x2="380" y2="210" stroke="#000" stroke-width="1.5"/>
  <line x1="280" y1="204" x2="280" y2="216" stroke="#000" stroke-width="2"/>
  <line x1="380" y1="204" x2="380" y2="216" stroke="#000" stroke-width="2"/>
  <text x="301" y="228" font-family="Georgia,serif" font-size="11" font-weight="bold" font-style="italic" fill="#000">λ</text>
  <text x="310" y="228" font-family="Georgia,serif" font-size="10" fill="#000">= 0.73 nm</text>
  <!-- Double arrow -->
  <polygon points="288,207 280,210 288,213" fill="#000"/>
  <polygon points="372,207 380,210 372,213" fill="#000"/>

  <!-- Wave label -->
  <text x="490" y="110" font-family="Georgia,serif" font-size="11" fill="#000">Matter wave (de Broglie)</text>
  <text x="490" y="124" font-family="Georgia,serif" font-size="10" fill="#333">same wavelength everywhere</text>
  <line x1="487" y1="112" x2="450" y2="130" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>

  <!-- ══════════════════════
       SECTION 2: λ vs p graph
  ══════════════════════ -->

  <!-- Graph axes -->
  <line x1="80" y1="310" x2="80" y2="520" stroke="#000" stroke-width="2.5"/>
  <polygon points="75,314 80,300 85,314" fill="#000"/>
  <line x1="80" y1="520" x2="500" y2="520" stroke="#000" stroke-width="2.5"/>
  <polygon points="496,515 510,520 496,525" fill="#000"/>
  <text x="514" y="526" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">p</text>
  <text x="30" y="410" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000" transform="rotate(-90,50,410)">λ</text>
  <text x="86" y="298" font-family="Georgia,serif" font-size="10" fill="#000">λ=h/p (hyperbola)</text>

  <!-- λ=h/p hyperbola: λ=h/p, x=p_norm, y=λ_norm
       Map: p from 0.1 to 5 (arb), λ=1/p
       x = 80 + p_norm*80, y = 520 - λ_norm*180
       p_norm: 0.2→x=96, 0.4→x=112, 0.8→x=144, 1.0→x=160, 2.0→x=240, 4.0→x=400
       λ=1/p_norm: 5→y=520-900<0, so scale differently
       Scale: x=80+p*84, y=520-h/p*84 (h=1 in normalised units)
       p: 0.3→x=105,y=520-280=240; 0.5→x=122,y=520-168=352; 1→x=164,y=436; 2→x=248,y=478; 4→x=416,y=499
  -->
  <polyline points="
    92,310
    105,340
    122,372
    148,408
    164,436
    200,458
    248,478
    310,492
    416,499"
    fill="none" stroke="#000" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>

  <text x="96" y="306" font-family="Georgia,serif" font-size="10" fill="#000">λ → ∞ as p → 0</text>
  <text x="416" y="494" font-family="Georgia,serif" font-size="9" fill="#333">λ → 0 as p → ∞</text>

  <!-- Specific point for electron -->
  <circle cx="164" cy="436" r="6" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="168" y="432" font-family="Georgia,serif" font-size="9" fill="#000">electron at v=10⁶ m s⁻¹</text>

  <!-- Grid -->
  <line x1="80" y1="436" x2="164" y2="436" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="164" y1="436" x2="164" y2="520" stroke="#000" stroke-width="1" stroke-dasharray="3,3"/>

  <!-- Graph title -->
  <text x="88" y="542" font-family="Georgia,serif" font-size="10" fill="#333">de Broglie wavelength λ = h/p (hyperbolic)</text>

  <!-- ══════════════════════
       SECTION 3: Comparison table
  ══════════════════════ -->
  <rect x="530" y="280" width="350" height="300" rx="6" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="548" y="302" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">de Broglie Wavelength Examples:</text>
  <line x1="530" y1="308" x2="880" y2="308" stroke="#000" stroke-width="1.5"/>
  <!-- Headers -->
  <text x="548" y="324" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Particle / Object</text>
  <text x="748" y="324" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">λ (approx.)</text>
  <line x1="530" y1="330" x2="880" y2="330" stroke="#000" stroke-width="1"/>
  <!-- Data rows -->
  <text x="548" y="348" font-family="Georgia,serif" font-size="10" fill="#000">Electron at 10⁶ m s⁻¹</text>
  <text x="748" y="348" font-family="Georgia,serif" font-size="10" fill="#000">0.73 nm</text>
  <text x="548" y="366" font-family="Georgia,serif" font-size="10" fill="#000">Thermal neutron (room T)</text>
  <text x="748" y="366" font-family="Georgia,serif" font-size="10" fill="#000">~0.13 nm</text>
  <text x="548" y="384" font-family="Georgia,serif" font-size="10" fill="#000">Proton at 10⁶ m s⁻¹</text>
  <text x="748" y="384" font-family="Georgia,serif" font-size="10" fill="#000">3.97×10⁻⁴ nm</text>
  <text x="548" y="402" font-family="Georgia,serif" font-size="10" fill="#000">Helium atom at 300 K</text>
  <text x="748" y="402" font-family="Georgia,serif" font-size="10" fill="#000">~0.073 nm</text>
  <text x="548" y="420" font-family="Georgia,serif" font-size="10" fill="#000">Tennis ball at 30 m s⁻¹</text>
  <text x="748" y="420" font-family="Georgia,serif" font-size="10" fill="#000">~4×10⁻³⁴ m</text>
  <text x="548" y="438" font-family="Georgia,serif" font-size="10" fill="#333">(immeasurably small)</text>
  <line x1="530" y1="445" x2="880" y2="445" stroke="#000" stroke-width="1"/>
  <text x="548" y="462" font-family="Georgia,serif" font-size="10" fill="#333">Only sub-atomic particles have λ</text>
  <text x="548" y="476" font-family="Georgia,serif" font-size="10" fill="#333">comparable to atomic spacings</text>
  <text x="548" y="490" font-family="Georgia,serif" font-size="10" fill="#333">→ diffraction effects observed</text>
  <text x="548" y="504" font-family="Georgia,serif" font-size="10" fill="#333">Davisson-Germer (1927): electron</text>
  <text x="548" y="516" font-family="Georgia,serif" font-size="10" fill="#333">diffraction confirms wave nature</text>
  <text x="548" y="530" font-family="Georgia,serif" font-size="10" fill="#333">h = 6.626×10⁻³⁴ J s (Planck's const.)</text>

  <!-- ── Formula summary ── -->
  <rect x="30" y="532" width="490" height="55" rx="6" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="50" y="552" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">de Broglie Relations:</text>
  <text x="50" y="570" font-family="Georgia,serif" font-size="12" fill="#000">λ = h/p = h/(mv)   |   p = ℏk   |   E = ½mv² = p²/(2m)   |   k = 2π/λ</text>
</svg>`;
// ─── THERMAL PHYSICS ──────────────────────────────────────────────────────

  // heatingCurvePhysics → heatingCurvePhysicsSvg
  static heatingCurvePhysicsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="200" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Heating Curve of Water</text>
  <text x="180" y="46" font-family="Georgia,serif" font-size="10" fill="#444">Temperature vs Heat Added — showing phase transitions</text>

  <!-- Grid lines -->
  <line x1="80" y1="60" x2="80" y2="500" stroke="#ccc" stroke-width="1"/>
  <line x1="180" y1="60" x2="180" y2="500" stroke="#ccc" stroke-width="1"/>
  <line x1="280" y1="60" x2="280" y2="500" stroke="#ccc" stroke-width="1"/>
  <line x1="380" y1="60" x2="380" y2="500" stroke="#ccc" stroke-width="1"/>
  <line x1="480" y1="60" x2="480" y2="500" stroke="#ccc" stroke-width="1"/>
  <line x1="580" y1="60" x2="580" y2="500" stroke="#ccc" stroke-width="1"/>
  <line x1="680" y1="60" x2="680" y2="500" stroke="#ccc" stroke-width="1"/>
  <line x1="780" y1="60" x2="780" y2="500" stroke="#ccc" stroke-width="1"/>
  <line x1="80" y1="100" x2="820" y2="100" stroke="#ccc" stroke-width="1"/>
  <line x1="80" y1="180" x2="820" y2="180" stroke="#ccc" stroke-width="1"/>
  <line x1="80" y1="260" x2="820" y2="260" stroke="#ccc" stroke-width="1"/>
  <line x1="80" y1="340" x2="820" y2="340" stroke="#ccc" stroke-width="1"/>
  <line x1="80" y1="420" x2="820" y2="420" stroke="#ccc" stroke-width="1"/>

  <!-- Axes -->
  <line x1="80" y1="500" x2="820" y2="500" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="500" x2="80" y2="60" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="74,64 80,50 86,64" fill="#000"/>
  <polygon points="816,494 830,500 816,506" fill="#000"/>
  <text x="830" y="504" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">Q</text>
  <text x="55" y="48" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">T (°C)</text>

  <!-- Y-axis labels -->
  <text x="60" y="424" font-family="Georgia,serif" font-size="11" fill="#000">−20</text>
  <text x="65" y="344" font-family="Georgia,serif" font-size="11" fill="#000">0</text>
  <text x="58" y="264" font-family="Georgia,serif" font-size="11" fill="#000">50</text>
  <text x="55" y="184" font-family="Georgia,serif" font-size="11" fill="#000">100</text>
  <text x="55" y="104" font-family="Georgia,serif" font-size="11" fill="#000">120</text>
  <!-- tick marks -->
  <line x1="75" y1="420" x2="85" y2="420" stroke="#000" stroke-width="1.5"/>
  <line x1="75" y1="340" x2="85" y2="340" stroke="#000" stroke-width="1.5"/>
  <line x1="75" y1="260" x2="85" y2="260" stroke="#000" stroke-width="1.5"/>
  <line x1="75" y1="180" x2="85" y2="180" stroke="#000" stroke-width="1.5"/>
  <line x1="75" y1="100" x2="85" y2="100" stroke="#000" stroke-width="1.5"/>

  <!-- Heating curve path:
       Segment A: ice warming   (80,420) → (180,340)
       Segment B: melting       (180,340) → (320,340)   [latent heat, flat]
       Segment C: water warming (320,340) → (520,180)
       Segment D: boiling       (520,180) → (680,180)   [latent heat, flat]
       Segment E: steam warming (680,180) → (800,120)
  -->
  <!-- A: Solid heating -->
  <line x1="80" y1="420" x2="180" y2="340" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <!-- B: Melting plateau -->
  <line x1="180" y1="340" x2="320" y2="340" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <!-- C: Liquid heating -->
  <line x1="320" y1="340" x2="520" y2="180" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <!-- D: Boiling plateau -->
  <line x1="520" y1="180" x2="680" y2="180" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <!-- E: Gas heating -->
  <line x1="680" y1="180" x2="800" y2="120" stroke="#000" stroke-width="3" stroke-linecap="round"/>

  <!-- Phase region labels -->
  <text x="95" y="395" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Solid</text>
  <text x="92" y="408" font-family="Georgia,serif" font-size="10" fill="#000">(ice)</text>
  <text x="198" y="325" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Melting</text>
  <text x="196" y="338" font-family="Georgia,serif" font-size="10" fill="#000">(solid + liquid)</text>
  <text x="365" y="275" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Liquid</text>
  <text x="360" y="288" font-family="Georgia,serif" font-size="10" fill="#000">(water)</text>
  <text x="535" y="167" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Boiling</text>
  <text x="530" y="180" font-family="Georgia,serif" font-size="10" fill="#000">(liquid + gas)</text>
  <text x="700" y="140" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Gas</text>
  <text x="694" y="153" font-family="Georgia,serif" font-size="10" fill="#000">(steam)</text>

  <!-- Latent heat braces / annotations -->
  <!-- Melting latent heat -->
  <line x1="180" y1="355" x2="320" y2="355" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="184,350 174,355 184,360" fill="#000"/>
  <polygon points="316,350 326,355 316,360" fill="#000"/>
  <text x="212" y="372" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">L_f  (latent heat of fusion)</text>
  <!-- Boiling latent heat -->
  <line x1="520" y1="195" x2="680" y2="195" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="524,190 514,195 524,200" fill="#000"/>
  <polygon points="676,190 686,195 676,200" fill="#000"/>
  <text x="548" y="212" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">L_v  (latent heat of vaporisation)</text>

  <!-- 0°C and 100°C dashed reference lines -->
  <line x1="80" y1="340" x2="180" y2="340" stroke="#555" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="80" y1="180" x2="520" y2="180" stroke="#555" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- Info box -->
  <rect x="82" y="510" width="740" height="52" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="92" y="527" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Key:  </text>
  <text x="130" y="527" font-family="Georgia,serif" font-size="10" fill="#000">Sloped segments: Q = mcΔT (sensible heat, temperature changes)</text>
  <text x="92" y="544" font-family="Georgia,serif" font-size="10" fill="#000">Flat segments: Q = mL (latent heat absorbed at constant temperature during phase change)</text>
  <text x="92" y="558" font-family="Georgia,serif" font-size="9" fill="#555">c_ice ≈ 2 090 J kg⁻¹K⁻¹ | c_water ≈ 4 186 J kg⁻¹K⁻¹ | c_steam ≈ 2 010 J kg⁻¹K⁻¹ | L_f = 334 kJ kg⁻¹ | L_v = 2 260 kJ kg⁻¹</text>
</svg>`;

  // heatTransferModes → heatTransferModesSvg
  static heatTransferModesSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="280" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Modes of Heat Transfer</text>
  <text x="230" y="46" font-family="Georgia,serif" font-size="10" fill="#444">Conduction | Convection | Radiation — illustrated side by side</text>

  <!-- Dividers -->
  <line x1="300" y1="60" x2="300" y2="540" stroke="#bbb" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="600" y1="60" x2="600" y2="540" stroke="#bbb" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- ══ PANEL 1: CONDUCTION ══ -->
  <text x="90" y="76" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">1. Conduction</text>
  <text x="30" y="92" font-family="Georgia,serif" font-size="10" fill="#555">Heat transfer through direct contact / vibrating particles</text>

  <!-- Metal rod -->
  <rect x="30" y="110" width="240" height="60" rx="4" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <!-- Hot end shading (left) -->
  <rect x="30" y="110" width="60" height="60" rx="4" fill="#e8e8e8" stroke="none"/>
  <text x="42" y="146" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">HOT</text>
  <!-- Cold end label (right) -->
  <text x="215" y="146" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#555">COLD</text>
  <!-- Temperature gradient label -->
  <text x="105" y="146" font-family="Georgia,serif" font-size="10" fill="#000">Metal Rod</text>

  <!-- Atom vibration symbols along rod -->
  <!-- Each atom: circle + wavy lines -->
  <circle cx="70" cy="140" r="8" fill="#000"/>
  <line x1="58" y1="133" x2="50" y2="125" stroke="#000" stroke-width="1.5"/>
  <line x1="82" y1="133" x2="90" y2="125" stroke="#000" stroke-width="1.5"/>
  <line x1="62" y1="148" x2="54" y2="156" stroke="#000" stroke-width="1.5"/>
  <line x1="78" y1="148" x2="86" y2="156" stroke="#000" stroke-width="1.5"/>

  <circle cx="130" cy="140" r="6" fill="#555"/>
  <line x1="120" y1="135" x2="114" y2="129" stroke="#555" stroke-width="1.5"/>
  <line x1="140" y1="135" x2="146" y2="129" stroke="#555" stroke-width="1.5"/>

  <circle cx="190" cy="140" r="4" fill="#aaa"/>
  <line x1="184" y1="137" x2="180" y2="133" stroke="#aaa" stroke-width="1"/>
  <line x1="196" y1="137" x2="200" y2="133" stroke="#aaa" stroke-width="1"/>

  <!-- Heat flow arrow -->
  <line x1="40" y1="190" x2="250" y2="190" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="246,185 260,190 246,195" fill="#000"/>
  <text x="100" y="208" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">heat flow direction →</text>

  <!-- Formula box -->
  <rect x="28" y="220" width="245" height="56" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="36" y="238" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Fourier's Law:</text>
  <text x="36" y="254" font-family="Georgia,serif" font-size="11" fill="#000">Q/t = −kA (ΔT / Δx)</text>
  <text x="36" y="268" font-family="Georgia,serif" font-size="9" fill="#555">k = thermal conductivity (W m⁻¹K⁻¹)</text>

  <!-- Examples -->
  <text x="28" y="296" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Examples:</text>
  <text x="28" y="310" font-family="Georgia,serif" font-size="10" fill="#000">• Cooking pan handle heating up</text>
  <text x="28" y="324" font-family="Georgia,serif" font-size="10" fill="#000">• Heat spreading through a wall</text>
  <text x="28" y="338" font-family="Georgia,serif" font-size="10" fill="#000">• No bulk movement of matter</text>

  <!-- ══ PANEL 2: CONVECTION ══ -->
  <text x="380" y="76" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">2. Convection</text>
  <text x="310" y="92" font-family="Georgia,serif" font-size="10" fill="#555">Heat transfer by bulk movement of fluid (liquid or gas)</text>

  <!-- Container -->
  <rect x="318" y="110" width="240" height="160" rx="4" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <!-- Heat source at bottom -->
  <rect x="318" y="254" width="240" height="16" rx="2" fill="#ddd" stroke="#000" stroke-width="1.5"/>
  <text x="375" y="266" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Heat Source</text>

  <!-- Convection loop arrows -->
  <!-- Left upward column (warm fluid rises) -->
  <path d="M 358,260 L 358,170 Q 358,130 390,130 L 470,130 Q 508,130 508,170 L 508,260"
        fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <!-- Up arrows on left -->
  <polygon points="353,180 358,165 363,180" fill="#000"/>
  <polygon points="353,220 358,205 363,220" fill="#000"/>
  <!-- Down arrows on right -->
  <polygon points="503,205 508,220 513,205" fill="#000"/>
  <polygon points="503,165 508,180 513,165" fill="#000"/>

  <!-- Labels inside convection cell -->
  <text x="322" y="200" font-family="Georgia,serif" font-size="9" fill="#000">warm</text>
  <text x="322" y="212" font-family="Georgia,serif" font-size="9" fill="#000">rises ↑</text>
  <text x="514" y="200" font-family="Georgia,serif" font-size="9" fill="#000">cool</text>
  <text x="510" y="212" font-family="Georgia,serif" font-size="9" fill="#000">sinks ↓</text>

  <!-- Formula box -->
  <rect x="316" y="284" width="245" height="44" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="324" y="302" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Newton's Law of Cooling:</text>
  <text x="324" y="318" font-family="Georgia,serif" font-size="11" fill="#000">Q/t = hA (T_s − T_∞)</text>

  <!-- Examples -->
  <text x="316" y="344" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Examples:</text>
  <text x="316" y="358" font-family="Georgia,serif" font-size="10" fill="#000">• Boiling water in a pot</text>
  <text x="316" y="372" font-family="Georgia,serif" font-size="10" fill="#000">• Sea / land breezes</text>
  <text x="316" y="386" font-family="Georgia,serif" font-size="10" fill="#000">• Requires a medium (fluid)</text>

  <!-- ══ PANEL 3: RADIATION ══ -->
  <text x="680" y="76" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">3. Radiation</text>
  <text x="615" y="92" font-family="Georgia,serif" font-size="10" fill="#555">Heat transfer by electromagnetic waves — no medium needed</text>

  <!-- Sun (radiating body) -->
  <circle cx="720" cy="180" r="36" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="707" y="185" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">☀</text>

  <!-- Radiation rays -->
  <line x1="758" y1="180" x2="820" y2="180" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <polygon points="816,175 826,180 816,185" fill="#000"/>
  <line x1="752" y1="155" x2="808" y2="130" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="803,127 815,128 808,138" fill="#000"/>
  <line x1="752" y1="205" x2="808" y2="230" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="803,233 815,232 808,222" fill="#000"/>
  <line x1="720" y1="144" x2="720" y2="100" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="715,104 720,92 725,104" fill="#000"/>
  <line x1="684" y1="155" x2="640" y2="130" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="644,127 632,128 640,138" fill="#000"/>

  <!-- Absorbing body -->
  <rect x="828" y="160" width="48" height="40" rx="3" fill="#555" stroke="#000" stroke-width="2"/>
  <text x="834" y="185" font-family="Georgia,serif" font-size="9" fill="#fff">body</text>

  <!-- Formula box -->
  <rect x="614" y="230" width="258" height="56" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="622" y="248" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Stefan–Boltzmann Law:</text>
  <text x="622" y="264" font-family="Georgia,serif" font-size="11" fill="#000">P = εσAT⁴</text>
  <text x="622" y="278" font-family="Georgia,serif" font-size="9" fill="#555">σ = 5.67×10⁻⁸ W m⁻²K⁻⁴ | ε = emissivity</text>

  <!-- Examples -->
  <text x="614" y="304" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Examples:</text>
  <text x="614" y="318" font-family="Georgia,serif" font-size="10" fill="#000">• Solar energy reaching Earth</text>
  <text x="614" y="332" font-family="Georgia,serif" font-size="10" fill="#000">• Infrared from a fire</text>
  <text x="614" y="346" font-family="Georgia,serif" font-size="10" fill="#000">• Works in vacuum</text>

  <!-- Comparison table -->
  <rect x="30" y="400" width="840" height="130" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="38" y="420" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Comparison Summary</text>
  <!-- Header row -->
  <line x1="30" y1="428" x2="870" y2="428" stroke="#000" stroke-width="1.5"/>
  <text x="40" y="444" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Property</text>
  <text x="230" y="444" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Conduction</text>
  <text x="460" y="444" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Convection</text>
  <text x="680" y="444" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Radiation</text>
  <line x1="30" y1="450" x2="870" y2="450" stroke="#000" stroke-width="1"/>
  <!-- Row 1 -->
  <text x="40" y="465" font-family="Georgia,serif" font-size="10" fill="#000">Medium required?</text>
  <text x="230" y="465" font-family="Georgia,serif" font-size="10" fill="#000">Yes (solid best)</text>
  <text x="460" y="465" font-family="Georgia,serif" font-size="10" fill="#000">Yes (fluid)</text>
  <text x="680" y="465" font-family="Georgia,serif" font-size="10" fill="#000">No</text>
  <!-- Row 2 -->
  <text x="40" y="481" font-family="Georgia,serif" font-size="10" fill="#000">Matter movement?</text>
  <text x="230" y="481" font-family="Georgia,serif" font-size="10" fill="#000">No</text>
  <text x="460" y="481" font-family="Georgia,serif" font-size="10" fill="#000">Yes (bulk flow)</text>
  <text x="680" y="481" font-family="Georgia,serif" font-size="10" fill="#000">No</text>
  <!-- Row 3 -->
  <text x="40" y="497" font-family="Georgia,serif" font-size="10" fill="#000">Wave type</text>
  <text x="230" y="497" font-family="Georgia,serif" font-size="10" fill="#000">—</text>
  <text x="460" y="497" font-family="Georgia,serif" font-size="10" fill="#000">—</text>
  <text x="680" y="497" font-family="Georgia,serif" font-size="10" fill="#000">EM (infrared)</text>
  <!-- Row 4 -->
  <text x="40" y="514" font-family="Georgia,serif" font-size="10" fill="#000">Speed</text>
  <text x="230" y="514" font-family="Georgia,serif" font-size="10" fill="#000">Slow</text>
  <text x="460" y="514" font-family="Georgia,serif" font-size="10" fill="#000">Medium</text>
  <text x="680" y="514" font-family="Georgia,serif" font-size="10" fill="#000">Speed of light</text>
  <!-- Col dividers -->
  <line x1="220" y1="428" x2="220" y2="520" stroke="#555" stroke-width="1"/>
  <line x1="450" y1="428" x2="450" y2="520" stroke="#555" stroke-width="1"/>
  <line x1="670" y1="428" x2="670" y2="520" stroke="#555" stroke-width="1"/>
</svg>`;

  // phaseDiagramPhysics → phaseDiagramPhysicsSvg
  static phaseDiagramPhysicsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="280" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Phase Diagram — Water (P–T)</text>
  <text x="210" y="46" font-family="Georgia,serif" font-size="10" fill="#444">Pressure vs Temperature showing solid, liquid and gas regions with phase boundaries</text>

  <!-- Grid -->
  <line x1="100" y1="80" x2="100" y2="510" stroke="#ddd" stroke-width="1"/>
  <line x1="200" y1="80" x2="200" y2="510" stroke="#ddd" stroke-width="1"/>
  <line x1="300" y1="80" x2="300" y2="510" stroke="#ddd" stroke-width="1"/>
  <line x1="400" y1="80" x2="400" y2="510" stroke="#ddd" stroke-width="1"/>
  <line x1="500" y1="80" x2="500" y2="510" stroke="#ddd" stroke-width="1"/>
  <line x1="600" y1="80" x2="600" y2="510" stroke="#ddd" stroke-width="1"/>
  <line x1="700" y1="80" x2="700" y2="510" stroke="#ddd" stroke-width="1"/>
  <line x1="800" y1="80" x2="800" y2="510" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="130" x2="840" y2="130" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="210" x2="840" y2="210" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="290" x2="840" y2="290" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="370" x2="840" y2="370" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="450" x2="840" y2="450" stroke="#ddd" stroke-width="1"/>

  <!-- Axes -->
  <line x1="80" y1="510" x2="840" y2="510" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="510" x2="80" y2="70" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="74,74 80,60 86,74" fill="#000"/>
  <polygon points="836,504 850,510 836,516" fill="#000"/>
  <text x="852" y="514" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">T</text>
  <text x="52" y="60" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">P</text>

  <!-- Axis labels -->
  <text x="820" y="526" font-family="Georgia,serif" font-size="10" fill="#555">High T</text>
  <text x="82" y="526" font-family="Georgia,serif" font-size="10" fill="#555">Low T</text>
  <text x="26" y="134" font-family="Georgia,serif" font-size="10" fill="#555">High P</text>
  <text x="30" y="506" font-family="Georgia,serif" font-size="10" fill="#555">Low P</text>

  <!-- Phase boundary lines:
       Triple point: T=320, P=450
       Critical point: T=680, P=160
       Fusion curve: from (320,450) going upper-left to (80,200) — slightly negative slope for water
       Vaporisation curve: from (320,450) curving to (680,160) critical point
       Sublimation curve: from (80,510) curving up to (320,450)
  -->
  <!-- Sublimation curve (solid→gas): lower-left to triple point -->
  <path d="M 80,510 Q 180,490 320,450" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Fusion curve (solid→liquid): triple point upward-left (water has negative slope) -->
  <path d="M 320,450 L 280,80" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Vaporisation curve (liquid→gas): triple point to critical point -->
  <path d="M 320,450 Q 480,350 680,160" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Region labels -->
  <text x="110" y="340" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">SOLID</text>
  <text x="430" y="420" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">LIQUID</text>
  <text x="560" y="490" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">GAS</text>

  <!-- Triple point -->
  <circle cx="320" cy="450" r="7" fill="#000"/>
  <text x="328" y="445" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Triple Point</text>
  <text x="328" y="458" font-family="Georgia,serif" font-size="9" fill="#555">T = 273.16 K, P = 611 Pa</text>
  <!-- reference lines to axes -->
  <line x1="320" y1="450" x2="320" y2="510" stroke="#555" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="320" y1="450" x2="80" y2="450" stroke="#555" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- Critical point -->
  <circle cx="680" cy="160" r="7" fill="#000"/>
  <text x="688" y="155" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Critical Point</text>
  <text x="688" y="168" font-family="Georgia,serif" font-size="9" fill="#555">T = 647 K, P = 22 MPa</text>
  <!-- reference lines -->
  <line x1="680" y1="160" x2="680" y2="510" stroke="#555" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="680" y1="160" x2="80" y2="160" stroke="#555" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- Curve labels -->
  <text x="152" y="496" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">Sublimation curve</text>
  <text x="200" y="260" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">Fusion curve</text>
  <text x="455" y="310" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">Vaporisation curve</text>

  <!-- Atmospheric pressure dashed line -->
  <line x1="80" y1="400" x2="840" y2="400" stroke="#555" stroke-width="1.5" stroke-dasharray="8,4"/>
  <text x="740" y="396" font-family="Georgia,serif" font-size="10" fill="#555">1 atm</text>

  <!-- Info box -->
  <rect x="82" y="530" width="758" height="44" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="92" y="548" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Notes: </text>
  <text x="132" y="548" font-family="Georgia,serif" font-size="10" fill="#000">Water's fusion curve has a negative slope (unusual) — increasing P lowers melting point.</text>
  <text x="92" y="565" font-family="Georgia,serif" font-size="10" fill="#000">Above the critical point: supercritical fluid (no distinct liquid/gas boundary). Triple point: only T &amp; P at which all 3 phases coexist.</text>
</svg>`;

  // kineticTheoryParticles → kineticTheoryParticlesSvg
  static kineticTheoryParticlesSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="260" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Kinetic Theory — Particle Model</text>
  <text x="220" y="46" font-family="Georgia,serif" font-size="10" fill="#444">Arrangement and motion of particles in solid, liquid and gas states</text>

  <!-- Panel dividers -->
  <line x1="300" y1="58" x2="300" y2="560" stroke="#bbb" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="600" y1="58" x2="600" y2="560" stroke="#bbb" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- ══ SOLID ══ -->
  <text x="110" y="74" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Solid</text>
  <!-- Container box -->
  <rect x="30" y="84" width="240" height="200" rx="4" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <!-- Regular lattice: 5×5 grid of atoms, centred, with bond lines -->
  <!-- Bond lines first (below atoms) -->
  <!-- Horizontal bonds -->
  <line x1="70" y1="120" x2="110" y2="120" stroke="#555" stroke-width="1.5"/>
  <line x1="110" y1="120" x2="150" y2="120" stroke="#555" stroke-width="1.5"/>
  <line x1="150" y1="120" x2="190" y2="120" stroke="#555" stroke-width="1.5"/>
  <line x1="190" y1="120" x2="230" y2="120" stroke="#555" stroke-width="1.5"/>
  <line x1="70" y1="155" x2="110" y2="155" stroke="#555" stroke-width="1.5"/>
  <line x1="110" y1="155" x2="150" y2="155" stroke="#555" stroke-width="1.5"/>
  <line x1="150" y1="155" x2="190" y2="155" stroke="#555" stroke-width="1.5"/>
  <line x1="190" y1="155" x2="230" y2="155" stroke="#555" stroke-width="1.5"/>
  <line x1="70" y1="190" x2="110" y2="190" stroke="#555" stroke-width="1.5"/>
  <line x1="110" y1="190" x2="150" y2="190" stroke="#555" stroke-width="1.5"/>
  <line x1="150" y1="190" x2="190" y2="190" stroke="#555" stroke-width="1.5"/>
  <line x1="190" y1="190" x2="230" y2="190" stroke="#555" stroke-width="1.5"/>
  <line x1="70" y1="225" x2="110" y2="225" stroke="#555" stroke-width="1.5"/>
  <line x1="110" y1="225" x2="150" y2="225" stroke="#555" stroke-width="1.5"/>
  <line x1="150" y1="225" x2="190" y2="225" stroke="#555" stroke-width="1.5"/>
  <line x1="190" y1="225" x2="230" y2="225" stroke="#555" stroke-width="1.5"/>
  <line x1="70" y1="260" x2="110" y2="260" stroke="#555" stroke-width="1.5"/>
  <line x1="110" y1="260" x2="150" y2="260" stroke="#555" stroke-width="1.5"/>
  <line x1="150" y1="260" x2="190" y2="260" stroke="#555" stroke-width="1.5"/>
  <line x1="190" y1="260" x2="230" y2="260" stroke="#555" stroke-width="1.5"/>
  <!-- Vertical bonds -->
  <line x1="70"  y1="120" x2="70"  y2="260" stroke="#555" stroke-width="1.5"/>
  <line x1="110" y1="120" x2="110" y2="260" stroke="#555" stroke-width="1.5"/>
  <line x1="150" y1="120" x2="150" y2="260" stroke="#555" stroke-width="1.5"/>
  <line x1="190" y1="120" x2="190" y2="260" stroke="#555" stroke-width="1.5"/>
  <line x1="230" y1="120" x2="230" y2="260" stroke="#555" stroke-width="1.5"/>
  <!-- Atoms on lattice -->
  <circle cx="70"  cy="120" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="110" cy="120" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="150" cy="120" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="190" cy="120" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="230" cy="120" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="70"  cy="155" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="110" cy="155" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="150" cy="155" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="190" cy="155" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="230" cy="155" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="70"  cy="190" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="110" cy="190" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="150" cy="190" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="190" cy="190" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="230" cy="190" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="70"  cy="225" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="110" cy="225" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="150" cy="225" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="190" cy="225" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="230" cy="225" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="70"  cy="260" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="110" cy="260" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="150" cy="260" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="190" cy="260" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="230" cy="260" r="12" fill="#fff" stroke="#000" stroke-width="2"/>

  <!-- Vibration indicator (small arrows on one atom) -->
  <line x1="150" y1="178" x2="150" y2="172" stroke="#000" stroke-width="1.5"/>
  <polygon points="147,174 150,168 153,174" fill="#000"/>
  <line x1="150" y1="202" x2="150" y2="208" stroke="#000" stroke-width="1.5"/>
  <polygon points="147,206 150,212 153,206" fill="#000"/>

  <!-- Solid properties -->
  <text x="32" y="302" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Properties:</text>
  <text x="32" y="316" font-family="Georgia,serif" font-size="10" fill="#000">• Fixed, regular lattice</text>
  <text x="32" y="330" font-family="Georgia,serif" font-size="10" fill="#000">• Vibrate about fixed positions</text>
  <text x="32" y="344" font-family="Georgia,serif" font-size="10" fill="#000">• Strong intermolecular forces</text>
  <text x="32" y="358" font-family="Georgia,serif" font-size="10" fill="#000">• Definite shape and volume</text>
  <text x="32" y="372" font-family="Georgia,serif" font-size="10" fill="#000">• Incompressible</text>
  <text x="32" y="390" font-family="Georgia,serif" font-size="10" fill="#000">KE ∝ T (low)</text>

  <!-- ══ LIQUID ══ -->
  <text x="410" y="74" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Liquid</text>
  <rect x="318" y="84" width="240" height="200" rx="4" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <!-- Irregular particle arrangement -->
  <!-- Particles placed randomly but close together -->
  <circle cx="355" cy="118" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="390" cy="130" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="428" cy="112" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="466" cy="125" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="500" cy="115" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="340" cy="155" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="376" cy="168" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="414" cy="152" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="450" cy="166" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="486" cy="154" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="522" cy="162" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="352" cy="196" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="390" cy="208" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="428" cy="192" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="464" cy="206" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="500" cy="194" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="360" cy="238" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="400" cy="248" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="438" cy="234" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="476" cy="246" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="512" cy="238" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <!-- Motion arrows on a few particles -->
  <line x1="390" y1="208" x2="406" y2="200" stroke="#000" stroke-width="1.5"/>
  <polygon points="402,197 410,198 404,205" fill="#000"/>
  <line x1="428" y1="152" x2="418" y2="142" stroke="#000" stroke-width="1.5"/>
  <polygon points="421,140 414,138 420,146" fill="#000"/>
  <line x1="476" y1="246" x2="488" y2="254" stroke="#000" stroke-width="1.5"/>
  <polygon points="485,256 492,258 488,250" fill="#000"/>

  <!-- Liquid properties -->
  <text x="320" y="302" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Properties:</text>
  <text x="320" y="316" font-family="Georgia,serif" font-size="10" fill="#000">• Close together, random order</text>
  <text x="320" y="330" font-family="Georgia,serif" font-size="10" fill="#000">• Can move / slide past each other</text>
  <text x="320" y="344" font-family="Georgia,serif" font-size="10" fill="#000">• Moderate intermolecular forces</text>
  <text x="320" y="358" font-family="Georgia,serif" font-size="10" fill="#000">• Fixed volume, no fixed shape</text>
  <text x="320" y="372" font-family="Georgia,serif" font-size="10" fill="#000">• Nearly incompressible</text>
  <text x="320" y="390" font-family="Georgia,serif" font-size="10" fill="#000">KE ∝ T (medium)</text>

  <!-- ══ GAS ══ -->
  <text x="710" y="74" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Gas</text>
  <rect x="618" y="84" width="258" height="200" rx="4" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <!-- Widely spaced particles, random positions -->
  <circle cx="660" cy="118" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="730" cy="105" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="810" cy="130" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="640" cy="175" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="700" cy="155" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="780" cy="165" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="850" cy="148" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="660" cy="235" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="740" cy="248" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="820" cy="230" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="695" cy="205" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <!-- Motion arrows — longer, more energetic -->
  <line x1="660" y1="118" x2="642" y2="104" stroke="#000" stroke-width="1.5"/>
  <polygon points="646,100 636,99 643,108" fill="#000"/>
  <line x1="730" y1="105" x2="748" y2="94" stroke="#000" stroke-width="1.5"/>
  <polygon points="744,90 754,90 748,98" fill="#000"/>
  <line x1="810" y1="130" x2="826" y2="144" stroke="#000" stroke-width="1.5"/>
  <polygon points="822,147 830,152 826,143" fill="#000"/>
  <line x1="700" y1="155" x2="714" y2="140" stroke="#000" stroke-width="1.5"/>
  <polygon points="710,137 720,134 714,143" fill="#000"/>
  <line x1="740" y1="248" x2="726" y2="262" stroke="#000" stroke-width="1.5"/>
  <polygon points="730,264 722,270 726,260" fill="#000"/>

  <!-- Gas properties -->
  <text x="620" y="302" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Properties:</text>
  <text x="620" y="316" font-family="Georgia,serif" font-size="10" fill="#000">• Far apart, random disorder</text>
  <text x="620" y="330" font-family="Georgia,serif" font-size="10" fill="#000">• Move rapidly in all directions</text>
  <text x="620" y="344" font-family="Georgia,serif" font-size="10" fill="#000">• Negligible intermolecular forces</text>
  <text x="620" y="358" font-family="Georgia,serif" font-size="10" fill="#000">• No fixed shape or volume</text>
  <text x="620" y="372" font-family="Georgia,serif" font-size="10" fill="#000">• Highly compressible</text>
  <text x="620" y="390" font-family="Georgia,serif" font-size="10" fill="#000">KE ∝ T (high)</text>

  <!-- Energy progression arrow -->
  <line x1="80" y1="420" x2="820" y2="420" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="816,415 830,420 816,425" fill="#000"/>
  <text x="300" y="414" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">increasing temperature / kinetic energy →</text>

  <!-- Ideal gas law box -->
  <rect x="80" y="438" width="740" height="60" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="90" y="456" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Ideal Gas Law:  pV = nRT</text>
  <text x="90" y="472" font-family="Georgia,serif" font-size="10" fill="#000">p = pressure (Pa), V = volume (m³), n = amount (mol), R = 8.314 J mol⁻¹K⁻¹, T = temperature (K)</text>
  <text x="90" y="488" font-family="Georgia,serif" font-size="10" fill="#555">Mean KE of gas molecule: ½mv² = (3/2)k_B T  |  k_B = 1.38×10⁻²³ J K⁻¹</text>
</svg>`;

  // pvDiagram → pvDiagramSvg
  static pvDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="260" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">pV Diagram — Thermodynamic Processes</text>
  <text x="200" y="46" font-family="Georgia,serif" font-size="10" fill="#444">Isothermal | Adiabatic | Isobaric | Isochoric processes plotted on pressure–volume axes</text>

  <!-- Grid -->
  <line x1="100" y1="80" x2="100" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="200" y1="80" x2="200" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="300" y1="80" x2="300" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="400" y1="80" x2="400" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="500" y1="80" x2="500" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="600" y1="80" x2="600" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="700" y1="80" x2="700" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="800" y1="80" x2="800" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="130" x2="840" y2="130" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="210" x2="840" y2="210" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="290" x2="840" y2="290" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="370" x2="840" y2="370" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="450" x2="840" y2="450" stroke="#ddd" stroke-width="1"/>

  <!-- Axes -->
  <line x1="80" y1="490" x2="840" y2="490" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="490" x2="80" y2="70" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="74,74 80,60 86,74" fill="#000"/>
  <polygon points="836,484 850,490 836,496" fill="#000"/>
  <text x="854" y="494" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">V</text>
  <text x="55" y="60" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">p</text>

  <!-- Axis tick labels -->
  <text x="170" y="506" font-family="Georgia,serif" font-size="10" fill="#555">V₁</text>
  <text x="490" y="506" font-family="Georgia,serif" font-size="10" fill="#555">V₂</text>
  <text x="58" y="254" font-family="Georgia,serif" font-size="10" fill="#555">p₁</text>
  <text x="58" y="374" font-family="Georgia,serif" font-size="10" fill="#555">p₂</text>
  <line x1="175" y1="485" x2="175" y2="495" stroke="#000" stroke-width="1.5"/>
  <line x1="495" y1="485" x2="495" y2="495" stroke="#000" stroke-width="1.5"/>
  <line x1="75" y1="250" x2="85" y2="250" stroke="#000" stroke-width="1.5"/>
  <line x1="75" y1="370" x2="85" y2="370" stroke="#000" stroke-width="1.5"/>

  <!-- ── Isothermal: pV = const, hyperbola from (175,130) to (700,250) ── -->
  <!-- Approximate with cubic bezier: T = const, steeper curve -->
  <path d="M 175,130 C 175,200 280,200 700,255"
        fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Arrow midpoint -->
  <polygon points="425,196 438,200 426,207" fill="#000"/>
  <text x="350" y="178" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Isothermal</text>
  <text x="348" y="191" font-family="Georgia,serif" font-size="10" fill="#000">(T = const, pV = nRT)</text>

  <!-- ── Adiabatic: steeper than isothermal, from same start point ── -->
  <path d="M 175,130 C 175,230 240,290 700,330"
        fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="10,5"/>
  <polygon points="425,264 438,268 426,275" fill="#000"/>
  <text x="510" y="280" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Adiabatic</text>
  <text x="508" y="293" font-family="Georgia,serif" font-size="10" fill="#000">(Q = 0, pV^γ = const)</text>

  <!-- ── Isobaric: horizontal line at constant pressure p₁ = 250 ── -->
  <line x1="175" y1="250" x2="495" y2="250" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="6,3"/>
  <polygon points="491,245 505,250 491,255" fill="#000"/>
  <text x="270" y="238" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Isobaric</text>
  <text x="268" y="248" font-family="Georgia,serif" font-size="10" fill="#000">(p = const, W = pΔV)</text>

  <!-- ── Isochoric: vertical line at constant volume V₁ = 175 ── -->
  <line x1="175" y1="130" x2="175" y2="450" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4,4"/>
  <polygon points="170,446 175,460 180,446" fill="#000"/>
  <text x="112" y="420" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Isochoric</text>
  <text x="100" y="433" font-family="Georgia,serif" font-size="10" fill="#000">(V = const, W = 0)</text>

  <!-- State point A -->
  <circle cx="175" cy="130" r="6" fill="#000"/>
  <text x="182" y="126" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">A</text>

  <!-- Area under isobaric = work done annotation -->
  <rect x="175" y="250" width="320" height="240" fill="#eee" fill-opacity="0.5" stroke="none"/>
  <text x="270" y="395" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#555">W = area under curve</text>
  <text x="278" y="408" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#555">= p ΔV  (isobaric)</text>

  <!-- Info box -->
  <rect x="82" y="508" width="758" height="64" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="92" y="524" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">First Law of Thermodynamics:  ΔU = Q − W</text>
  <text x="92" y="540" font-family="Georgia,serif" font-size="10" fill="#000">Isothermal: ΔU = 0, Q = W  |  Adiabatic: Q = 0, ΔU = −W  |  Isobaric: W = pΔV  |  Isochoric: W = 0, ΔU = Q</text>
  <text x="92" y="556" font-family="Georgia,serif" font-size="9" fill="#555">Adiabatic is steeper than isothermal through same point because γ = Cp/Cv &gt; 1</text>
  <text x="92" y="568" font-family="Georgia,serif" font-size="9" fill="#555">Work done by gas = area enclosed under the process curve on pV diagram</text>
</svg>`;

  // carnotCycle → carnotCycleSvg
  static carnotCycleSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="300" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Carnot Cycle</text>
  <text x="180" y="46" font-family="Georgia,serif" font-size="10" fill="#444">pV diagram — two isothermals (T_H, T_C) and two adiabatics forming the ideal reversible cycle</text>

  <!-- Grid -->
  <line x1="120" y1="80" x2="120" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="240" y1="80" x2="240" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="360" y1="80" x2="360" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="480" y1="80" x2="480" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="600" y1="80" x2="600" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="720" y1="80" x2="720" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="130" x2="820" y2="130" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="210" x2="820" y2="210" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="290" x2="820" y2="290" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="370" x2="820" y2="370" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="450" x2="820" y2="450" stroke="#ddd" stroke-width="1"/>

  <!-- Axes -->
  <line x1="80" y1="490" x2="820" y2="490" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="490" x2="80" y2="70" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="74,74 80,60 86,74" fill="#000"/>
  <polygon points="816,484 830,490 816,496" fill="#000"/>
  <text x="832" y="494" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">V</text>
  <text x="55" y="60" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">p</text>

  <!-- Carnot cycle vertices (approximate):
       A (160,120) → B (680,200) : isothermal expansion at T_H
       B (680,200) → C (760,380) : adiabatic expansion
       C (760,380) → D (240,310) : isothermal compression at T_C
       D (240,310) → A (160,120) : adiabatic compression
  -->

  <!-- Shaded enclosed area (work done) -->
  <path d="M 160,120 C 300,130 550,170 680,200
           C 700,270 730,320 760,380
           C 580,355 360,335 240,310
           C 220,240 190,180 160,120 Z"
        fill="#ddd" fill-opacity="0.7" stroke="none"/>

  <!-- A→B: Isothermal expansion T_H (upper curve) -->
  <path d="M 160,120 C 300,130 550,170 680,200"
        fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <!-- Arrow on A→B -->
  <polygon points="415,155 428,158 416,165" fill="#000"/>
  <text x="340" y="144" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">1→2  Isothermal expansion</text>
  <text x="338" y="156" font-family="Georgia,serif" font-size="10" fill="#000">(T = T_H, absorbs Q_H)</text>

  <!-- B→C: Adiabatic expansion (right side) -->
  <path d="M 680,200 C 700,270 730,320 760,380"
        fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-dasharray="10,5"/>
  <polygon points="742,335 748,348 755,335" fill="#000"/>
  <text x="762" y="278" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">2→3</text>
  <text x="756" y="290" font-family="Georgia,serif" font-size="10" fill="#000">Adiabatic</text>
  <text x="756" y="302" font-family="Georgia,serif" font-size="10" fill="#000">expansion</text>
  <text x="756" y="314" font-family="Georgia,serif" font-size="10" fill="#000">(Q = 0)</text>

  <!-- C→D: Isothermal compression T_C (lower curve) -->
  <path d="M 760,380 C 580,355 360,335 240,310"
        fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="484,348 470,344 481,355" fill="#000"/>
  <text x="408" y="390" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">3→4  Isothermal compression</text>
  <text x="406" y="402" font-family="Georgia,serif" font-size="10" fill="#000">(T = T_C, rejects Q_C)</text>

  <!-- D→A: Adiabatic compression (left side) -->
  <path d="M 240,310 C 220,240 190,180 160,120"
        fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-dasharray="10,5"/>
  <polygon points="195,192 192,178 202,186" fill="#000"/>
  <text x="88" y="230" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">4→1</text>
  <text x="82" y="242" font-family="Georgia,serif" font-size="10" fill="#000">Adiabatic</text>
  <text x="76" y="254" font-family="Georgia,serif" font-size="10" fill="#000">compression</text>
  <text x="84" y="266" font-family="Georgia,serif" font-size="10" fill="#000">(Q = 0)</text>

  <!-- State point labels -->
  <circle cx="160" cy="120" r="6" fill="#000"/>
  <text x="140" y="113" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">1</text>
  <circle cx="680" cy="200" r="6" fill="#000"/>
  <text x="686" y="197" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">2</text>
  <circle cx="760" cy="380" r="6" fill="#000"/>
  <text x="766" y="378" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">3</text>
  <circle cx="240" cy="310" r="6" fill="#000"/>
  <text x="220" y="307" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">4</text>

  <!-- T_H and T_C isotherm label lines -->
  <line x1="80" y1="160" x2="160" y2="120" stroke="#555" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="30" y="158" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">T_H</text>
  <line x1="80" y1="340" x2="240" y2="310" stroke="#555" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="32" y="338" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">T_C</text>

  <!-- Work = area label -->
  <text x="396" y="270" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">W_net</text>
  <text x="386" y="284" font-family="Georgia,serif" font-size="10" fill="#555">(area enclosed)</text>

  <!-- Info box -->
  <rect x="82" y="508" width="758" height="64" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="92" y="524" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Carnot Efficiency:  η = 1 − T_C / T_H = W_net / Q_H</text>
  <text x="92" y="540" font-family="Georgia,serif" font-size="10" fill="#000">Q_H absorbed at T_H (hot reservoir) | Q_C rejected at T_C (cold reservoir) | W_net = Q_H − Q_C</text>
  <text x="92" y="556" font-family="Georgia,serif" font-size="9" fill="#555">No real engine can exceed Carnot efficiency. Solid curves = isothermals (pV = const). Dashed = adiabatics (pV^γ = const).</text>
  <text x="92" y="568" font-family="Georgia,serif" font-size="9" fill="#555">Example: T_H = 600 K, T_C = 300 K  ⟹  η = 1 − 300/600 = 50%</text>
</svg>`;

  // heatEngineDiagram → heatEngineDiagramSvg
  static heatEngineDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="700px" viewBox="0 0 700 700">

  <text x="200" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Heat Engine — Energy Flow (Sankey)</text>
  <text x="140" y="46" font-family="Georgia,serif" font-size="10" fill="#444">Energy transferred from hot reservoir, work extracted, remainder rejected to cold reservoir</text>

  <!-- ── Hot reservoir (top) ── -->
  <rect x="220" y="60" width="260" height="70" rx="6" fill="#eee" stroke="#000" stroke-width="3"/>
  <text x="290" y="93" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Hot Reservoir</text>
  <text x="305" y="112" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">T_H = 600 K</text>

  <!-- Q_H arrow (downward, wide) -->
  <rect x="300" y="130" width="100" height="100" fill="#ccc" stroke="#000" stroke-width="2"/>
  <polygon points="280,230 350,260 420,230" fill="#aaa" stroke="#000" stroke-width="1.5"/>
  <text x="320" y="175" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">Q_H</text>
  <text x="313" y="190" font-family="Georgia,serif" font-size="10" fill="#000">Heat input</text>
  <text x="308" y="203" font-family="Georgia,serif" font-size="10" fill="#000">(e.g. 600 J)</text>

  <!-- ── Engine (centre) ── -->
  <rect x="250" y="270" width="200" height="120" rx="8" fill="#fff" stroke="#000" stroke-width="3.5"/>
  <text x="302" y="322" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">ENGINE</text>
  <text x="288" y="342" font-family="Georgia,serif" font-size="11" fill="#000">converts heat → work</text>
  <text x="296" y="358" font-family="Georgia,serif" font-size="10" fill="#555">η = W / Q_H</text>

  <!-- W arrow (rightward, output) -->
  <line x1="450" y1="330" x2="580" y2="330" stroke="#000" stroke-width="5" stroke-linecap="round"/>
  <polygon points="576,322 594,330 576,338" fill="#000"/>
  <text x="592" y="318" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">W</text>
  <text x="586" y="334" font-family="Georgia,serif" font-size="10" fill="#000">Work output</text>
  <text x="592" y="348" font-family="Georgia,serif" font-size="10" fill="#000">(e.g. 300 J)</text>
  <!-- dashed box around work -->
  <rect x="580" y="306" width="100" height="50" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>

  <!-- Q_C arrow (downward to cold) -->
  <rect x="300" y="390" width="100" height="90" fill="#ddd" stroke="#000" stroke-width="2"/>
  <polygon points="280,480 350,510 420,480" fill="#ccc" stroke="#000" stroke-width="1.5"/>
  <text x="320" y="432" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">Q_C</text>
  <text x="310" y="448" font-family="Georgia,serif" font-size="10" fill="#000">Heat rejected</text>
  <text x="308" y="461" font-family="Georgia,serif" font-size="10" fill="#000">(e.g. 300 J)</text>

  <!-- ── Cold reservoir (bottom) ── -->
  <rect x="220" y="520" width="260" height="70" rx="6" fill="#eee" stroke="#000" stroke-width="3"/>
  <text x="286" y="553" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Cold Reservoir</text>
  <text x="305" y="572" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">T_C = 300 K</text>

  <!-- Energy conservation note -->
  <rect x="40" y="300" width="170" height="80" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="50" y="318" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Energy balance:</text>
  <text x="50" y="334" font-family="Georgia,serif" font-size="11" fill="#000">Q_H = W + Q_C</text>
  <text x="50" y="350" font-family="Georgia,serif" font-size="11" fill="#000">600 = 300 + 300</text>
  <text x="50" y="366" font-family="Georgia,serif" font-size="10" fill="#555">(1st Law satisfied)</text>

  <!-- Efficiency box -->
  <rect x="40" y="410" width="170" height="80" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="50" y="428" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Efficiency:</text>
  <text x="50" y="444" font-family="Georgia,serif" font-size="11" fill="#000">η = W / Q_H</text>
  <text x="50" y="460" font-family="Georgia,serif" font-size="11" fill="#000">η = 1 − T_C/T_H</text>
  <text x="50" y="476" font-family="Georgia,serif" font-size="10" fill="#555">= 1 − 300/600 = 50%</text>

  <!-- 2nd law note -->
  <rect x="40" y="580" width="620" height="42" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="50" y="598" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">2nd Law: </text>
  <text x="110" y="598" font-family="Georgia,serif" font-size="10" fill="#000">No engine can be 100% efficient — some heat Q_C must always be rejected to the cold reservoir.</text>
  <text x="50" y="614" font-family="Georgia,serif" font-size="10" fill="#555">Carnot efficiency is the maximum achievable for given T_H and T_C. Real engines are less efficient due to irreversibilities.</text>
</svg>`;

  // refrigeratorDiagram → refrigeratorDiagramSvg
  static refrigeratorDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="700px" viewBox="0 0 700 700">

  <text x="175" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Refrigerator / Heat Pump — Energy Flow</text>
  <text x="130" y="46" font-family="Georgia,serif" font-size="10" fill="#444">Work input drives heat from cold reservoir to hot reservoir (opposite of heat engine)</text>

  <!-- ── Hot reservoir (top) ── -->
  <rect x="220" y="60" width="260" height="70" rx="6" fill="#eee" stroke="#000" stroke-width="3"/>
  <text x="286" y="93" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Hot Reservoir</text>
  <text x="305" y="112" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">T_H = 300 K</text>

  <!-- Q_H arrow upward from engine to hot reservoir -->
  <rect x="300" y="130" width="100" height="100" fill="#ccc" stroke="#000" stroke-width="2"/>
  <!-- Arrow pointing UP (toward hot reservoir) -->
  <polygon points="280,134 350,104 420,134" fill="#aaa" stroke="#000" stroke-width="1.5"/>
  <text x="320" y="178" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">Q_H</text>
  <text x="310" y="193" font-family="Georgia,serif" font-size="10" fill="#000">Heat expelled</text>
  <text x="308" y="206" font-family="Georgia,serif" font-size="10" fill="#000">(e.g. 350 J)</text>

  <!-- ── Refrigerator / pump (centre) ── -->
  <rect x="250" y="270" width="200" height="120" rx="8" fill="#fff" stroke="#000" stroke-width="3.5"/>
  <text x="278" y="316" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">REFRIGERATOR</text>
  <text x="280" y="334" font-family="Georgia,serif" font-size="10" fill="#000">/ HEAT PUMP</text>
  <text x="284" y="354" font-family="Georgia,serif" font-size="10" fill="#555">pumps heat uphill</text>

  <!-- W arrow (leftward input) -->
  <line x1="120" y1="330" x2="250" y2="330" stroke="#000" stroke-width="5" stroke-linecap="round"/>
  <polygon points="246,322 264,330 246,338" fill="#000"/>
  <text x="88" y="318" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">W</text>
  <text x="82" y="334" font-family="Georgia,serif" font-size="10" fill="#000">Work input</text>
  <text x="86" y="348" font-family="Georgia,serif" font-size="10" fill="#000">(e.g. 100 J)</text>
  <rect x="20" y="306" width="100" height="50" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>

  <!-- Q_C arrow upward from cold reservoir to engine -->
  <rect x="300" y="390" width="100" height="90" fill="#ddd" stroke="#000" stroke-width="2"/>
  <!-- Arrow pointing UP (into refrigerator) -->
  <polygon points="280,393 350,363 420,393" fill="#ccc" stroke="#000" stroke-width="1.5"/>
  <text x="320" y="432" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">Q_C</text>
  <text x="308" y="448" font-family="Georgia,serif" font-size="10" fill="#000">Heat absorbed</text>
  <text x="308" y="461" font-family="Georgia,serif" font-size="10" fill="#000">(e.g. 250 J)</text>

  <!-- ── Cold reservoir (bottom) ── -->
  <rect x="220" y="520" width="260" height="70" rx="6" fill="#eee" stroke="#000" stroke-width="3"/>
  <text x="282" y="553" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Cold Reservoir</text>
  <text x="305" y="572" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">T_C = 250 K</text>

  <!-- Energy balance box -->
  <rect x="460" y="270" width="200" height="80" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="470" y="290" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Energy balance:</text>
  <text x="470" y="306" font-family="Georgia,serif" font-size="11" fill="#000">Q_H = Q_C + W</text>
  <text x="470" y="322" font-family="Georgia,serif" font-size="11" fill="#000">350 = 250 + 100</text>
  <text x="470" y="338" font-family="Georgia,serif" font-size="10" fill="#555">(1st Law satisfied)</text>

  <!-- COP boxes -->
  <rect x="460" y="370" width="200" height="90" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="470" y="388" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">COP (refrigerator):</text>
  <text x="470" y="404" font-family="Georgia,serif" font-size="10" fill="#000">COP_R = Q_C / W</text>
  <text x="470" y="420" font-family="Georgia,serif" font-size="10" fill="#000">= T_C / (T_H − T_C)</text>
  <text x="470" y="436" font-family="Georgia,serif" font-size="10" fill="#555">= 250/50 = 5 (Carnot)</text>
  <text x="470" y="452" font-family="Georgia,serif" font-size="10" fill="#555">COP_HP = Q_H/W = COP_R+1</text>

  <!-- 2nd law note -->
  <rect x="40" y="620" width="620" height="40" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="50" y="638" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">2nd Law (Clausius): </text>
  <text x="160" y="638" font-family="Georgia,serif" font-size="10" fill="#000">Heat does not spontaneously flow from cold to hot. Work (W) must be supplied.</text>
  <text x="50" y="652" font-family="Georgia,serif" font-size="10" fill="#555">Refrigerator: keeps cold side cold. Heat pump: keeps hot side warm. Same device, different purpose.</text>
</svg>`;

  // ─── SPECIAL RELATIVITY ───────────────────────────────────────────────────

  // timeDilation → timeDilationSvg
  static timeDilationSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <text x="220" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Time Dilation — Moving Clock vs Stationary Observer</text>
  <text x="160" y="46" font-family="Georgia,serif" font-size="10" fill="#444">A clock moving at velocity v relative to a stationary observer ticks more slowly</text>

  <!-- Panel divider -->
  <line x1="400" y1="60" x2="400" y2="480" stroke="#bbb" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- ══ LEFT PANEL: Stationary frame ══ -->
  <text x="120" y="76" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Stationary Frame (S)</text>
  <text x="60" y="92" font-family="Georgia,serif" font-size="10" fill="#555">Observer at rest — measures proper time t₀</text>

  <!-- Clock face — stationary -->
  <circle cx="200" cy="220" r="80" fill="#fff" stroke="#000" stroke-width="3"/>
  <!-- Clock markings -->
  <line x1="200" y1="142" x2="200" y2="156" stroke="#000" stroke-width="2.5"/>
  <line x1="200" y1="284" x2="200" y2="298" stroke="#000" stroke-width="2.5"/>
  <line x1="122" y1="220" x2="136" y2="220" stroke="#000" stroke-width="2.5"/>
  <line x1="264" y1="220" x2="278" y2="220" stroke="#000" stroke-width="2.5"/>
  <line x1="143" y1="163" x2="153" y2="170" stroke="#000" stroke-width="2"/>
  <line x1="247" y1="163" x2="257" y2="170" stroke="#000" stroke-width="2"/>
  <line x1="143" y1="277" x2="153" y2="270" stroke="#000" stroke-width="2"/>
  <line x1="247" y1="277" x2="257" y2="270" stroke="#000" stroke-width="2"/>
  <!-- Hour hand -->
  <line x1="200" y1="220" x2="200" y2="162" stroke="#000" stroke-width="4" stroke-linecap="round"/>
  <!-- Minute hand -->
  <line x1="200" y1="220" x2="248" y2="220" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <!-- Centre dot -->
  <circle cx="200" cy="220" r="5" fill="#000"/>
  <text x="168" y="318" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Proper time: t₀</text>
  <text x="158" y="332" font-family="Georgia,serif" font-size="10" fill="#555">(rest frame of the clock)</text>

  <!-- Observer figure (simple stick figure) -->
  <circle cx="200" cy="390" r="16" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <line x1="200" y1="406" x2="200" y2="450" stroke="#000" stroke-width="2.5"/>
  <line x1="200" y1="420" x2="172" y2="440" stroke="#000" stroke-width="2.5"/>
  <line x1="200" y1="420" x2="228" y2="440" stroke="#000" stroke-width="2.5"/>
  <line x1="200" y1="450" x2="178" y2="476" stroke="#000" stroke-width="2.5"/>
  <line x1="200" y1="450" x2="222" y2="476" stroke="#000" stroke-width="2.5"/>
  <text x="172" y="494" font-family="Georgia,serif" font-size="10" fill="#000">Observer at rest</text>

  <!-- ══ RIGHT PANEL: Moving frame ══ -->
  <text x="500" y="76" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Moving Frame (S′)</text>
  <text x="420" y="92" font-family="Georgia,serif" font-size="10" fill="#555">Clock moving at v = 0.8c — observer measures dilated time t</text>

  <!-- Rocket / moving platform -->
  <rect x="460" y="130" width="280" height="50" rx="8" fill="#eee" stroke="#000" stroke-width="2.5"/>
  <!-- Rocket nose -->
  <polygon points="740,130 780,155 740,180" fill="#ddd" stroke="#000" stroke-width="2"/>
  <!-- Exhaust -->
  <polygon points="460,140 430,155 460,170" fill="#aaa" stroke="#000" stroke-width="1.5"/>
  <text x="490" y="161" font-family="Georgia,serif" font-size="11" fill="#000">v = 0.8c  →</text>

  <!-- Clock face — moving (slightly smaller ticks to suggest slow) -->
  <circle cx="600" cy="280" r="70" fill="#fff" stroke="#000" stroke-width="3"/>
  <line x1="600" y1="212" x2="600" y2="224" stroke="#000" stroke-width="2.5"/>
  <line x1="600" y1="336" x2="600" y2="348" stroke="#000" stroke-width="2.5"/>
  <line x1="532" y1="280" x2="544" y2="280" stroke="#000" stroke-width="2.5"/>
  <line x1="656" y1="280" x2="668" y2="280" stroke="#000" stroke-width="2.5"/>
  <!-- Hands at slightly different position (less advanced) -->
  <line x1="600" y1="280" x2="600" y2="226" stroke="#000" stroke-width="4" stroke-linecap="round"/>
  <line x1="600" y1="280" x2="630" y2="256" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <circle cx="600" cy="280" r="5" fill="#000"/>
  <text x="558" y="366" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Dilated time: t</text>
  <text x="556" y="380" font-family="Georgia,serif" font-size="10" fill="#555">t &gt; t₀  (ticks slower)</text>

  <!-- Lorentz factor -->
  <rect x="420" y="404" width="350" height="68" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="430" y="422" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Lorentz factor:</text>
  <text x="430" y="438" font-family="Georgia,serif" font-size="13" fill="#000">γ = 1 / √(1 − v²/c²)</text>
  <text x="430" y="456" font-family="Georgia,serif" font-size="11" fill="#000">t = γ t₀</text>
  <text x="430" y="468" font-family="Georgia,serif" font-size="10" fill="#555">For v = 0.8c:  γ = 1/√(1−0.64) = 1/0.6 = 1.667</text>

  <!-- Info box -->
  <rect x="40" y="496" width="720" height="60" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="50" y="514" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Key:  t = γ t₀</text>
  <text x="100" y="514" font-family="Georgia,serif" font-size="10" fill="#000">where t₀ = proper time (measured in rest frame of clock), t = time measured by stationary observer</text>
  <text x="50" y="530" font-family="Georgia,serif" font-size="10" fill="#000">Since γ ≥ 1 always, t ≥ t₀ : moving clocks always run slow as seen from the stationary frame.</text>
  <text x="50" y="546" font-family="Georgia,serif" font-size="9" fill="#555">Effect becomes significant only near c. At v = 0.1c, γ ≈ 1.005 (0.5% effect). At v = 0.99c, γ ≈ 7.09.</text>
</svg>`;

  // lengthContraction → lengthContractionSvg
  static lengthContractionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <text x="200" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Length Contraction — Proper vs Contracted Length</text>
  <text x="160" y="46" font-family="Georgia,serif" font-size="10" fill="#444">An object moving at velocity v appears shorter along the direction of motion to a stationary observer</text>

  <!-- ══ TOP: Rest frame (proper length L₀) ══ -->
  <text x="40" y="76" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Rest Frame (S′) — Object at rest:  proper length L₀</text>

  <!-- Long rod -->
  <rect x="80" y="96" width="620" height="56" rx="6" fill="#e8e8e8" stroke="#000" stroke-width="3"/>
  <text x="344" y="130" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Object at rest</text>

  <!-- L₀ dimension arrow -->
  <line x1="80" y1="168" x2="700" y2="168" stroke="#000" stroke-width="2"/>
  <polygon points="84,163 74,168 84,173" fill="#000"/>
  <polygon points="696,163 706,168 696,173" fill="#000"/>
  <text x="364" y="186" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">L₀ = 100 m  (proper length)</text>

  <!-- Scale ticks on L₀ -->
  <line x1="80"  y1="152" x2="80"  y2="162" stroke="#000" stroke-width="1.5"/>
  <line x1="142" y1="152" x2="142" y2="162" stroke="#000" stroke-width="1.5"/>
  <line x1="204" y1="152" x2="204" y2="162" stroke="#000" stroke-width="1.5"/>
  <line x1="266" y1="152" x2="266" y2="162" stroke="#000" stroke-width="1.5"/>
  <line x1="328" y1="152" x2="328" y2="162" stroke="#000" stroke-width="1.5"/>
  <line x1="390" y1="152" x2="390" y2="162" stroke="#000" stroke-width="1.5"/>
  <line x1="452" y1="152" x2="452" y2="162" stroke="#000" stroke-width="1.5"/>
  <line x1="514" y1="152" x2="514" y2="162" stroke="#000" stroke-width="1.5"/>
  <line x1="576" y1="152" x2="576" y2="162" stroke="#000" stroke-width="1.5"/>
  <line x1="638" y1="152" x2="638" y2="162" stroke="#000" stroke-width="1.5"/>
  <line x1="700" y1="152" x2="700" y2="162" stroke="#000" stroke-width="1.5"/>

  <!-- ══ MIDDLE: Moving frame (contracted length L) ══ -->
  <text x="40" y="228" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Stationary Frame (S) — Object moving at v = 0.8c:  contracted length L</text>

  <!-- Velocity arrow -->
  <line x1="80" y1="244" x2="620" y2="244" stroke="#000" stroke-width="2" stroke-dasharray="8,4"/>
  <polygon points="616,239 630,244 616,249" fill="#000"/>
  <text x="634" y="248" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">v →</text>

  <!-- Contracted rod (L = L₀/γ = 100/1.667 = 60m → 372px) -->
  <rect x="80" y="260" width="372" height="56" rx="6" fill="#ccc" stroke="#000" stroke-width="3"/>
  <text x="192" y="294" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Contracted object</text>

  <!-- L dimension arrow -->
  <line x1="80" y1="328" x2="452" y2="328" stroke="#000" stroke-width="2"/>
  <polygon points="84,323 74,328 84,333" fill="#000"/>
  <polygon points="448,323 458,328 448,333" fill="#000"/>
  <text x="192" y="346" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">L = 60 m  (contracted)</text>

  <!-- Scale ticks on L (same spacing as above for visual comparison) -->
  <line x1="80"  y1="312" x2="80"  y2="322" stroke="#000" stroke-width="1.5"/>
  <line x1="142" y1="312" x2="142" y2="322" stroke="#000" stroke-width="1.5"/>
  <line x1="204" y1="312" x2="204" y2="322" stroke="#000" stroke-width="1.5"/>
  <line x1="266" y1="312" x2="266" y2="322" stroke="#000" stroke-width="1.5"/>
  <line x1="328" y1="312" x2="328" y2="322" stroke="#000" stroke-width="1.5"/>
  <line x1="390" y1="312" x2="390" y2="322" stroke="#000" stroke-width="1.5"/>
  <line x1="452" y1="312" x2="452" y2="322" stroke="#000" stroke-width="1.5"/>

  <!-- Remaining (phantom) portion of rod -->
  <rect x="452" y="260" width="248" height="56" rx="0" fill="none" stroke="#555" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="518" y="294" font-family="Georgia,serif" font-size="11" fill="#555">(contracted away)</text>

  <!-- Comparison bracket -->
  <line x1="720" y1="124" x2="740" y2="124" stroke="#000" stroke-width="1.5"/>
  <line x1="740" y1="124" x2="740" y2="288" stroke="#000" stroke-width="1.5"/>
  <line x1="720" y1="288" x2="740" y2="288" stroke="#000" stroke-width="1.5"/>
  <line x1="740" y1="206" x2="758" y2="206" stroke="#000" stroke-width="1.5"/>
  <text x="760" y="200" font-family="Georgia,serif" font-size="10" fill="#000">Ratio</text>
  <text x="760" y="213" font-family="Georgia,serif" font-size="10" fill="#000">L/L₀ = 1/γ</text>
  <text x="760" y="226" font-family="Georgia,serif" font-size="10" fill="#000">= 0.6</text>

  <!-- Formula box -->
  <rect x="40" y="380" width="720" height="80" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="50" y="400" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Length Contraction Formula:</text>
  <text x="50" y="420" font-family="Georgia,serif" font-size="14" fill="#000">L = L₀ / γ = L₀ √(1 − v²/c²)</text>
  <text x="50" y="440" font-family="Georgia,serif" font-size="11" fill="#000">Lorentz factor γ = 1/√(1−v²/c²) ≥ 1, so L ≤ L₀ always</text>
  <text x="50" y="456" font-family="Georgia,serif" font-size="10" fill="#555">For v = 0.8c:  γ = 1.667  →  L = 100 / 1.667 = 60 m</text>

  <!-- Info box -->
  <rect x="40" y="480" width="720" height="80" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="50" y="498" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Important notes:</text>
  <text x="50" y="514" font-family="Georgia,serif" font-size="10" fill="#000">• Contraction only occurs along the direction of motion. Transverse dimensions are unchanged.</text>
  <text x="50" y="530" font-family="Georgia,serif" font-size="10" fill="#000">• L₀ = proper length: measured in the rest frame of the object (longest possible measurement).</text>
  <text x="50" y="546" font-family="Georgia,serif" font-size="10" fill="#000">• Contraction is real but symmetric: each observer sees the other's ruler as contracted.</text>
  <text x="50" y="558" font-family="Georgia,serif" font-size="9" fill="#555">• Consistent with time dilation via Lorentz transformations. Both effects arise from the constancy of c.</text>
</svg>`;

  // spacetimeDiagram → spacetimeDiagramSvg
  static spacetimeDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 800 800">

  <text x="210" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Spacetime (Minkowski) Diagram</text>
  <text x="160" y="46" font-family="Georgia,serif" font-size="10" fill="#444">ct (time axis) vs x (space axis) — worldlines, light cone, and events in flat spacetime</text>

  <!-- Grid -->
  <line x1="80" y1="80" x2="80" y2="720" stroke="#ddd" stroke-width="1"/>
  <line x1="160" y1="80" x2="160" y2="720" stroke="#ddd" stroke-width="1"/>
  <line x1="240" y1="80" x2="240" y2="720" stroke="#ddd" stroke-width="1"/>
  <line x1="320" y1="80" x2="320" y2="720" stroke="#ddd" stroke-width="1"/>
  <line x1="400" y1="80" x2="400" y2="720" stroke="#ddd" stroke-width="1"/>
  <line x1="480" y1="80" x2="480" y2="720" stroke="#ddd" stroke-width="1"/>
  <line x1="560" y1="80" x2="560" y2="720" stroke="#ddd" stroke-width="1"/>
  <line x1="640" y1="80" x2="640" y2="720" stroke="#ddd" stroke-width="1"/>
  <line x1="720" y1="80" x2="720" y2="720" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="160" x2="740" y2="160" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="240" x2="740" y2="240" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="320" x2="740" y2="320" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="400" x2="740" y2="400" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="480" x2="740" y2="480" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="560" x2="740" y2="560" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="640" x2="740" y2="640" stroke="#ddd" stroke-width="1"/>

  <!-- Axes (origin at 400, 560) -->
  <!-- x-axis -->
  <line x1="60" y1="560" x2="740" y2="560" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="736,554 750,560 736,566" fill="#000"/>
  <text x="754" y="564" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">x</text>
  <!-- ct-axis -->
  <line x1="400" y1="720" x2="400" y2="80" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="394,84 400,70 406,84" fill="#000"/>
  <text x="408" y="70" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">ct</text>

  <!-- Origin label -->
  <circle cx="400" cy="560" r="5" fill="#000"/>
  <text x="406" y="578" font-family="Georgia,serif" font-size="11" fill="#000">O (origin)</text>

  <!-- Axis tick labels -->
  <text x="474" y="576" font-family="Georgia,serif" font-size="10" fill="#555">+x</text>
  <text x="318" y="576" font-family="Georgia,serif" font-size="10" fill="#555">−x</text>
  <text x="406" y="484" font-family="Georgia,serif" font-size="10" fill="#555">+ct</text>
  <text x="406" y="648" font-family="Georgia,serif" font-size="10" fill="#555">−ct</text>

  <!-- ── Light cone ──
       Future light cone: two lines at 45° upward from origin
       Past light cone: two lines at 45° downward
  -->
  <!-- Future cone (upward) -->
  <line x1="400" y1="560" x2="80" y2="240" stroke="#000" stroke-width="2" stroke-dasharray="8,4"/>
  <line x1="400" y1="560" x2="720" y2="240" stroke="#000" stroke-width="2" stroke-dasharray="8,4"/>
  <!-- Past cone (downward) -->
  <line x1="400" y1="560" x2="80" y2="880" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="400" y1="560" x2="720" y2="880" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>

  <!-- Light cone labels -->
  <text x="82" y="234" font-family="Georgia,serif" font-size="10" fill="#000">Future</text>
  <text x="80" y="246" font-family="Georgia,serif" font-size="10" fill="#000">light cone</text>
  <text x="716" y="234" font-family="Georgia,serif" font-size="10" fill="#000">c (slope=1)</text>

  <!-- Light cone region labels -->
  <text x="380" y="340" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Future</text>
  <text x="370" y="354" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">timelike</text>

  <!-- ── Worldlines ── -->
  <!-- Stationary observer (vertical line at x=0) -->
  <line x1="400" y1="720" x2="400" y2="80" stroke="#555" stroke-width="2.5" stroke-dasharray="none"/>
  <!-- (already drawn as ct axis, distinguished by label) -->
  <text x="328" y="200" font-family="Georgia,serif" font-size="10" fill="#000">Worldline:</text>
  <text x="322" y="212" font-family="Georgia,serif" font-size="10" fill="#000">stationary obj.</text>
  <text x="328" y="224" font-family="Georgia,serif" font-size="10" fill="#000">(vertical)</text>

  <!-- Moving observer worldline (slope = c/v, v = 0.6c → slope = 1/0.6 ≈ 1.67) -->
  <!-- From origin (400,560) going up-right: Δx=160 per Δct=267 -->
  <line x1="270" y1="777" x2="530" y2="343" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="526,350 532,340 522,345" fill="#000"/>
  <text x="540" y="340" font-family="Georgia,serif" font-size="10" fill="#000">Worldline:</text>
  <text x="535" y="352" font-family="Georgia,serif" font-size="10" fill="#000">moving obj.</text>
  <text x="533" y="364" font-family="Georgia,serif" font-size="10" fill="#000">(v = 0.6c)</text>

  <!-- ── Events ── -->
  <!-- Event A at (480, 400) — inside future light cone -->
  <circle cx="480" cy="400" r="7" fill="#000"/>
  <text x="490" y="396" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Event A</text>
  <text x="490" y="408" font-family="Georgia,serif" font-size="9" fill="#555">(timelike separated)</text>
  <!-- dashed lines to axes -->
  <line x1="480" y1="400" x2="480" y2="560" stroke="#555" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="480" y1="400" x2="400" y2="400" stroke="#555" stroke-width="1" stroke-dasharray="3,3"/>

  <!-- Event B at (640, 480) — outside light cone (spacelike) -->
  <circle cx="640" cy="480" r="7" fill="#555"/>
  <text x="650" y="476" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#555">Event B</text>
  <text x="650" y="488" font-family="Georgia,serif" font-size="9" fill="#555">(spacelike separated)</text>

  <!-- Region annotations -->
  <text x="590" y="400" font-family="Georgia,serif" font-size="10" fill="#555">Spacelike</text>
  <text x="588" y="412" font-family="Georgia,serif" font-size="10" fill="#555">region</text>
  <text x="156" y="400" font-family="Georgia,serif" font-size="10" fill="#555">Spacelike</text>
  <text x="156" y="412" font-family="Georgia,serif" font-size="10" fill="#555">region</text>

  <!-- Info box -->
  <rect x="42" y="726" width="716" height="58" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="52" y="744" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Spacetime interval:  s² = (ct)² − x²</text>
  <text x="52" y="760" font-family="Georgia,serif" font-size="10" fill="#000">Timelike (s²&gt;0): within light cone — causal connection possible. Spacelike (s²&lt;0): outside cone — no causal connection.</text>
  <text x="52" y="774" font-family="Georgia,serif" font-size="10" fill="#000">Lightlike (s²=0): on the cone — connected by a light signal. Worldline slope = c/v (steeper = slower motion).</text>
</svg>`;

  // massEnergyEquivalence → massEnergyEquivalenceSvg
  static massEnergyEquivalenceSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <text x="190" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Mass-Energy Equivalence — E = mc²</text>
  <text x="160" y="46" font-family="Georgia,serif" font-size="10" fill="#444">Rest energy, kinetic energy, and total relativistic energy as a function of velocity</text>

  <!-- ══ LEFT PANEL: E = mc² conceptual diagram ══ -->

  <!-- Mass block -->
  <rect x="50" y="100" width="160" height="100" rx="6" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="86" y="156" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Mass  m</text>

  <!-- Equals sign -->
  <text x="224" y="162" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#000">=</text>

  <!-- Energy block -->
  <rect x="260" y="100" width="160" height="100" rx="6" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="272" y="148" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Energy  E</text>
  <text x="272" y="168" font-family="Georgia,serif" font-size="12" fill="#000">= mc²</text>

  <!-- c² label -->
  <text x="130" y="220" font-family="Georgia,serif" font-size="11" fill="#555">conversion factor c²</text>
  <text x="128" y="234" font-family="Georgia,serif" font-size="11" fill="#555">= (3×10⁸)² m²s⁻²</text>

  <!-- Example calculation -->
  <rect x="40" y="256" width="340" height="80" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="50" y="274" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Example: 1 kg of matter</text>
  <text x="50" y="292" font-family="Georgia,serif" font-size="11" fill="#000">E₀ = mc² = 1 × (3×10⁸)²</text>
  <text x="50" y="310" font-family="Georgia,serif" font-size="11" fill="#000">= 9 × 10¹⁶ J ≈ 25 billion kWh</text>
  <text x="50" y="325" font-family="Georgia,serif" font-size="9" fill="#555">(enough to power a city for thousands of years)</text>

  <!-- Nuclear fission/fusion context -->
  <rect x="40" y="354" width="340" height="76" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="50" y="372" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Applications:</text>
  <text x="50" y="388" font-family="Georgia,serif" font-size="10" fill="#000">Nuclear fission: Δm × c² → energy released</text>
  <text x="50" y="404" font-family="Georgia,serif" font-size="10" fill="#000">Nuclear fusion: mass deficit → binding energy</text>
  <text x="50" y="420" font-family="Georgia,serif" font-size="10" fill="#000">Pair production: E → mc² (photon → e⁺e⁻)</text>

  <!-- ══ RIGHT PANEL: Energy vs velocity graph ══ -->
  <text x="460" y="76" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Relativistic Energy vs Velocity</text>

  <!-- Graph axes -->
  <line x1="420" y1="440" x2="760" y2="440" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="420" y1="440" x2="420" y2="90" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="414,94 420,80 426,94" fill="#000"/>
  <polygon points="756,434 770,440 756,446" fill="#000"/>
  <text x="774" y="444" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">v</text>
  <text x="428" y="78" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">E</text>

  <!-- Speed of light asymptote -->
  <line x1="740" y1="90" x2="740" y2="440" stroke="#555" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="742" y="460" font-family="Georgia,serif" font-size="10" fill="#555">c</text>

  <!-- E₀ = mc² horizontal dashed line (rest energy) -->
  <line x1="420" y1="360" x2="750" y2="360" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="424" y="357" font-family="Georgia,serif" font-size="10" fill="#000">E₀ = mc²</text>

  <!-- Total energy curve E = γmc² (rises steeply near c) -->
  <!-- Approximate with path: starts at (420,360), curves up steeply near x=740 -->
  <path d="M 420,360 C 500,355 580,340 640,310 C 680,290 710,260 730,220 C 740,190 744,150 746,110"
        fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <text x="640" y="302" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">E = γmc²</text>
  <text x="634" y="315" font-family="Georgia,serif" font-size="10" fill="#000">(total energy)</text>

  <!-- Kinetic energy curve KE = (γ−1)mc² -->
  <path d="M 420,440 C 500,438 580,430 640,408 C 680,394 710,374 730,352 C 740,330 744,300 746,268"
        fill="none" stroke="#555" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="8,4"/>
  <text x="636" y="400" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#555">KE = (γ−1)mc²</text>

  <!-- Classical KE comparison (dashed parabola) -->
  <path d="M 420,440 C 500,436 580,418 640,386 C 680,366 710,344 740,310"
        fill="none" stroke="#aaa" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="4,4"/>
  <text x="644" y="370" font-family="Georgia,serif" font-size="10" fill="#aaa">½mv²</text>
  <text x="636" y="382" font-family="Georgia,serif" font-size="10" fill="#aaa">(classical)</text>

  <!-- Gap label = KE -->
  <line x1="430" y1="350" x2="430" y2="430" stroke="#555" stroke-width="1"/>
  <polygon points="425,354 430,344 435,354" fill="#555"/>
  <polygon points="425,426 430,436 435,426" fill="#555"/>
  <text x="436" y="398" font-family="Georgia,serif" font-size="10" fill="#555">KE</text>

  <!-- Info box -->
  <rect x="40" y="496" width="720" height="76" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="50" y="514" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key relations:</text>
  <text x="50" y="530" font-family="Georgia,serif" font-size="11" fill="#000">Rest energy: E₀ = mc²   |   Total: E = γmc²   |   KE = (γ−1)mc²   |   γ = 1/√(1−v²/c²)</text>
  <text x="50" y="546" font-family="Georgia,serif" font-size="10" fill="#000">Energy-momentum: E² = (pc)² + (mc²)²   (invariant under Lorentz transformation)</text>
  <text x="50" y="562" font-family="Georgia,serif" font-size="9" fill="#555">At low speeds (v ≪ c): relativistic KE → ½mv² (recovers classical result). At v → c: E → ∞ (massless particles travel at exactly c).</text>
</svg>`;

  // lorentzTransformationDiagram → lorentzTransformationDiagramSvg
  static lorentzTransformationDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 800 800">

  <text x="190" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Lorentz Transformation — Two Inertial Frames</text>
  <text x="130" y="46" font-family="Georgia,serif" font-size="10" fill="#444">Frame S (black) and frame S′ (grey) moving at v = 0.6c — skewed axes on spacetime diagram</text>

  <!-- Grid (S frame, orthogonal) -->
  <line x1="80"  y1="80" x2="80"  y2="720" stroke="#ddd" stroke-width="1"/>
  <line x1="160" y1="80" x2="160" y2="720" stroke="#ddd" stroke-width="1"/>
  <line x1="240" y1="80" x2="240" y2="720" stroke="#ddd" stroke-width="1"/>
  <line x1="320" y1="80" x2="320" y2="720" stroke="#ddd" stroke-width="1"/>
  <line x1="400" y1="80" x2="400" y2="720" stroke="#ddd" stroke-width="1"/>
  <line x1="480" y1="80" x2="480" y2="720" stroke="#ddd" stroke-width="1"/>
  <line x1="560" y1="80" x2="560" y2="720" stroke="#ddd" stroke-width="1"/>
  <line x1="640" y1="80" x2="640" y2="720" stroke="#ddd" stroke-width="1"/>
  <line x1="720" y1="80" x2="720" y2="720" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="160" x2="740" y2="160" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="240" x2="740" y2="240" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="320" x2="740" y2="320" stroke="#ddd" stroke-width="1"/>
  <line x1="400" y1="80" x2="400" y2="720" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="400" x2="740" y2="400" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="480" x2="740" y2="480" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="560" x2="740" y2="560" stroke="#ddd" stroke-width="1"/>
  <line x1="60" y1="640" x2="740" y2="640" stroke="#ddd" stroke-width="1"/>

  <!-- S frame axes (origin at 400,560) -->
  <line x1="60" y1="560" x2="740" y2="560" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="736,554 750,560 736,566" fill="#000"/>
  <text x="754" y="564" font-family="Georgia,serif" font-size="13" fill="#000">x</text>
  <line x1="400" y1="720" x2="400" y2="80" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="394,84 400,70 406,84" fill="#000"/>
  <text x="408" y="70" font-family="Georgia,serif" font-size="13" fill="#000">ct</text>
  <circle cx="400" cy="560" r="5" fill="#000"/>
  <text x="408" y="576" font-family="Georgia,serif" font-size="11" fill="#000">O</text>

  <!-- S′ frame axes (skewed by v=0.6c → angle = arctan(0.6) ≈ 31°)
       x′ axis: slope upward at tan(31°) from origin = Δy/Δx = −0.75 (in SVG coords, going right means ct decreases)
       ct′ axis: symmetric about light cone, slope = 1/0.6 in spacetime = steeper
       In SVG: origin (400,560)
       x′ axis direction: Δx=160, Δct=−96 (SVG y decreases going up, so Δy=+96)
       ct′ axis direction: Δx=96, Δct=−160 (Δy=−160 in SVG = upward)
  -->
  <!-- x′ axis -->
  <line x1="80" y1="704" x2="720" y2="416" stroke="#555" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="714,413 726,413 719,422" fill="#555"/>
  <text x="726" y="412" font-family="Georgia,serif" font-size="13" fill="#555">x′</text>
  <!-- ct′ axis -->
  <line x1="304" y1="720" x2="496" y2="80" stroke="#555" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="490,84 496,70 502,84" fill="#555"/>
  <text x="500" y="70" font-family="Georgia,serif" font-size="13" fill="#555">ct′</text>

  <!-- S′ grid lines (parallel to skewed axes, dashed) -->
  <!-- Lines parallel to ct′ axis (at x′ = const) -->
  <line x1="224" y1="720" x2="416" y2="80" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="384" y1="720" x2="576" y2="80" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="464" y1="720" x2="656" y2="80" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4"/>
  <!-- Lines parallel to x′ axis (at ct′ = const) -->
  <line x1="80" y1="608" x2="640" y2="320" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="80" y1="512" x2="560" y2="224" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="80" y1="800" x2="800" y2="512" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4"/>

  <!-- Light cone (45° lines, dashed) -->
  <line x1="400" y1="560" x2="80" y2="240" stroke="#000" stroke-width="1.5" stroke-dasharray="8,4"/>
  <line x1="400" y1="560" x2="720" y2="240" stroke="#000" stroke-width="1.5" stroke-dasharray="8,4"/>
  <text x="82" y="236" font-family="Georgia,serif" font-size="9" fill="#555">light cone</text>

  <!-- Event P -->
  <circle cx="530" cy="400" r="7" fill="#000"/>
  <text x="540" y="396" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">P</text>

  <!-- Coordinate readings from P to S axes -->
  <line x1="530" y1="400" x2="530" y2="560" stroke="#555" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="530" y1="400" x2="400" y2="400" stroke="#555" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="536" y="470" font-family="Georgia,serif" font-size="10" fill="#000">x_P</text>
  <text x="388" y="396" font-family="Georgia,serif" font-size="10" fill="#000">ct_P</text>

  <!-- Frame labels -->
  <text x="62" y="572" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Frame S</text>
  <text x="62" y="716" font-family="Georgia,serif" font-size="11" fill="#555">Frame S′ (v = 0.6c)</text>

  <!-- Lorentz transformation equations box -->
  <rect x="42" y="736" width="716" height="46" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="52" y="752" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Lorentz Transformations (S → S′):</text>
  <text x="52" y="766" font-family="Georgia,serif" font-size="10" fill="#000">x′ = γ(x − vt)   |   t′ = γ(t − vx/c²)   |   y′ = y   |   z′ = z   |   γ = 1/√(1−β²),  β = v/c</text>
  <text x="52" y="778" font-family="Georgia,serif" font-size="9" fill="#555">Inverse: x = γ(x′ + vt′), t = γ(t′ + vx′/c²). The skewed S′ axes reflect these transformations geometrically.</text>
</svg>`;

  // velocityAddition → velocityAdditionSvg
  static velocityAdditionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <text x="180" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Relativistic Velocity Addition</text>
  <text x="150" y="46" font-family="Georgia,serif" font-size="10" fill="#444">Classical vs relativistic result — combined speed never exceeds c</text>

  <!-- ══ TOP: Scenario illustration ══ -->
  <!-- Ground frame -->
  <rect x="40" y="60" width="720" height="50" rx="4" fill="#eee" stroke="#000" stroke-width="2"/>
  <text x="50" y="92" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Ground frame (S):  Rocket moves at  u = 0.6c  →</text>

  <!-- Rocket -->
  <rect x="240" y="136" width="200" height="46" rx="8" fill="#ddd" stroke="#000" stroke-width="2.5"/>
  <polygon points="440,136 490,159 440,182" fill="#ccc" stroke="#000" stroke-width="2"/>
  <text x="265" y="164" font-family="Georgia,serif" font-size="11" fill="#000">Rocket  (u = 0.6c)</text>

  <!-- Ball inside rocket -->
  <circle cx="350" cy="200" r="12" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <line x1="362" y1="200" x2="390" y2="200" stroke="#000" stroke-width="2"/>
  <polygon points="386,195 400,200 386,205" fill="#000"/>
  <text x="402" y="196" font-family="Georgia,serif" font-size="10" fill="#000">ball fired at</text>
  <text x="402" y="208" font-family="Georgia,serif" font-size="10" fill="#000">v′ = 0.7c (rocket frame)</text>

  <!-- Rocket velocity arrow -->
  <line x1="240" y1="220" x2="490" y2="220" stroke="#000" stroke-width="2"/>
  <polygon points="486,215 500,220 486,225" fill="#000"/>
  <text x="340" y="238" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">u = 0.6c</text>

  <!-- ══ MIDDLE: Comparison bar chart ══ -->
  <line x1="80" y1="270" x2="720" y2="270" stroke="#000" stroke-width="2" stroke-linecap="round"/>
  <line x1="80" y1="270" x2="80" y2="350" stroke="#000" stroke-width="2" stroke-linecap="round"/>

  <!-- c = speed of light reference line at x = 720 -->
  <line x1="720" y1="260" x2="720" y2="360" stroke="#555" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="716" y="256" font-family="Georgia,serif" font-size="10" fill="#555">c</text>

  <!-- Classical result bar: u + v′ = 0.6c + 0.7c = 1.3c → would be 832px (beyond c!) -->
  <!-- Show bar to 720 and then arrow showing it goes beyond c -->
  <rect x="80" y="278" width="640" height="28" fill="#aaa" stroke="#000" stroke-width="1.5"/>
  <line x1="720" y1="278" x2="760" y2="292" stroke="#000" stroke-width="2"/>
  <polygon points="756,287 768,292 756,297" fill="#000"/>
  <text x="770" y="296" font-family="Georgia,serif" font-size="10" fill="#000">1.3c</text>
  <text x="84" y="298" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Classical: u + v′ = 0.6c + 0.7c = 1.3c</text>
  <text x="84" y="310" font-family="Georgia,serif" font-size="10" fill="#555">(violates special relativity — impossible!)</text>

  <!-- Relativistic result bar: w = (0.6+0.7)/(1+0.6×0.7) = 1.3/1.42 = 0.915c → 0.915×640 = 585px -->
  <rect x="80" y="322" width="585" height="28" fill="#ccc" stroke="#000" stroke-width="1.5"/>
  <text x="84" y="342" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Relativistic: w = (u+v′)/(1+uv′/c²) = 1.3c/1.42 ≈ 0.915c</text>

  <!-- Bar axis labels -->
  <text x="72" y="378" font-family="Georgia,serif" font-size="10" fill="#000">0</text>
  <text x="704" y="378" font-family="Georgia,serif" font-size="10" fill="#000">c</text>
  <text x="388" y="378" font-family="Georgia,serif" font-size="10" fill="#555">0.5c</text>
  <line x1="400" y1="266" x2="400" y2="380" stroke="#555" stroke-width="1" stroke-dasharray="3,3"/>

  <!-- Speed of light barrier label -->
  <rect x="80" y="390" width="640" height="28" rx="3" fill="none" stroke="#555" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="200" y="409" font-family="Georgia,serif" font-size="11" fill="#555">Speed of light barrier — no massive object can reach or exceed c</text>

  <!-- ══ Formula box ══ -->
  <rect x="40" y="436" width="720" height="76" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="50" y="454" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Relativistic Velocity Addition Formula:</text>
  <text x="50" y="474" font-family="Georgia,serif" font-size="14" fill="#000">w = (u + v′) / (1 + uv′/c²)</text>
  <text x="50" y="492" font-family="Georgia,serif" font-size="10" fill="#000">u = velocity of frame S′ relative to S | v′ = velocity of object in S′ | w = velocity of object in S</text>
  <text x="50" y="506" font-family="Georgia,serif" font-size="9" fill="#555">If u and v′ are both ≪ c: denominator ≈ 1 and w ≈ u + v′ (recovers classical addition). If either equals c: w = c exactly.</text>

  <!-- Info box -->
  <rect x="40" y="528" width="720" height="44" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="50" y="546" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Key insight:</text>
  <text x="120" y="546" font-family="Georgia,serif" font-size="10" fill="#000">No matter how fast two objects move relative to each other, the combined speed in any frame can never exceed c.</text>
  <text x="50" y="562" font-family="Georgia,serif" font-size="10" fill="#000">This is a direct consequence of the Lorentz transformation and the invariance of the speed of light.</text>
</svg>`;

  // ─── NUCLEAR PHYSICS ──────────────────────────────────────────────────────

  // alphaDecayDiagram → alphaDecayDiagramSvg
  static alphaDecayDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <text x="250" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Alpha Decay — Ra-226</text>
  <text x="160" y="46" font-family="Georgia,serif" font-size="10" fill="#444">Parent nucleus emits an alpha particle (⁴He nucleus) leaving a daughter nucleus</text>

  <!-- ══ Parent nucleus: Ra-226 (Z=88, A=226) ══ -->
  <circle cx="190" cy="280" r="90" fill="#fff" stroke="#000" stroke-width="4"/>
  <!-- Protons and neutrons inside (schematic) -->
  <!-- Protons (filled circles) -->
  <circle cx="165" cy="255" r="10" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="185" cy="245" r="10" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="205" cy="255" r="10" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="175" cy="270" r="10" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="195" cy="268" r="10" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="215" cy="272" r="10" fill="#555" stroke="#000" stroke-width="1.5"/>
  <!-- Neutrons (open circles) -->
  <circle cx="165" cy="295" r="10" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="185" cy="305" r="10" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="205" cy="295" r="10" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="175" cy="312" r="10" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="195" cy="318" r="10" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="155" cy="278" r="10" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="220" cy="288" r="10" fill="#fff" stroke="#000" stroke-width="1.5"/>

  <!-- Ra-226 label -->
  <text x="150" y="215" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000">²²⁶</text>
  <text x="150" y="235" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000"> ₈₈Ra</text>
  <text x="130" y="390" font-family="Georgia,serif" font-size="12" fill="#555">Parent nucleus</text>
  <text x="126" y="406" font-family="Georgia,serif" font-size="11" fill="#555">Z=88, A=226</text>

  <!-- Arrow -->
  <line x1="285" y1="280" x2="370" y2="280" stroke="#000" stroke-width="4" stroke-linecap="round"/>
  <polygon points="366,272 386,280 366,288" fill="#000"/>
  <text x="302" y="268" font-family="Georgia,serif" font-size="11" fill="#000">decay</text>

  <!-- ══ Daughter nucleus: Rn-222 (Z=86, A=222) ══ -->
  <circle cx="510" cy="280" r="82" fill="#fff" stroke="#000" stroke-width="4"/>
  <!-- Protons -->
  <circle cx="488" cy="258" r="9" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="506" cy="250" r="9" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="524" cy="258" r="9" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="496" cy="272" r="9" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="514" cy="270" r="9" fill="#555" stroke="#000" stroke-width="1.5"/>
  <!-- Neutrons -->
  <circle cx="488" cy="292" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="506" cy="302" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="524" cy="292" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="494" cy="308" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="514" cy="314" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="476" cy="278" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="536" cy="284" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>

  <text x="472" y="215" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000">²²²</text>
  <text x="472" y="235" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000"> ₈₆Rn</text>
  <text x="450" y="390" font-family="Georgia,serif" font-size="12" fill="#555">Daughter nucleus</text>
  <text x="448" y="406" font-family="Georgia,serif" font-size="11" fill="#555">Z=86, A=222</text>

  <!-- ══ Alpha particle: ⁴He (Z=2, A=4) ══ -->
  <!-- Ejected upper right -->
  <circle cx="680" cy="160" r="36" fill="#fff" stroke="#000" stroke-width="3"/>
  <!-- 2 protons + 2 neutrons -->
  <circle cx="668" cy="150" r="8" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="692" cy="150" r="8" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="668" cy="170" r="8" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="692" cy="170" r="8" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="650" y="114" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">⁴₂He (α)</text>
  <text x="640" y="130" font-family="Georgia,serif" font-size="10" fill="#555">Alpha particle</text>
  <text x="642" y="214" font-family="Georgia,serif" font-size="10" fill="#555">Z=2, A=4</text>
  <text x="643" y="228" font-family="Georgia,serif" font-size="10" fill="#555">KE ≈ 4.8 MeV</text>

  <!-- Alpha emission arrow -->
  <line x1="560" y1="230" x2="640" y2="178" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="636,174 650,170 638,182" fill="#000"/>

  <!-- Legend -->
  <circle cx="56" cy="490" r="9" fill="#555" stroke="#000" stroke-width="1.5"/>
  <text x="70" y="494" font-family="Georgia,serif" font-size="11" fill="#000">Proton (p)</text>
  <circle cx="56" cy="512" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="70" y="516" font-family="Georgia,serif" font-size="11" fill="#000">Neutron (n)</text>

  <!-- Nuclear equation box -->
  <rect x="40" y="436" width="720" height="44" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="50" y="456" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Nuclear equation:</text>
  <text x="218" y="456" font-family="Georgia,serif" font-size="13" fill="#000">²²⁶₈₈Ra  →  ²²²₈₆Rn  +  ⁴₂He  +  energy (γ ray)</text>
  <text x="50" y="472" font-family="Georgia,serif" font-size="10" fill="#555">Conservation: A: 226 = 222 + 4 ✓  |  Z: 88 = 86 + 2 ✓  |  Mass-energy conserved (Q-value ≈ 4.87 MeV)</text>

  <!-- Info box -->
  <rect x="40" y="530" width="720" height="44" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="50" y="548" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Alpha decay:  </text>
  <text x="130" y="548" font-family="Georgia,serif" font-size="10" fill="#000">Z decreases by 2, A decreases by 4. Alpha particle = ⁴₂He nucleus (2p + 2n), highly ionising, range ≈ few cm in air.</text>
  <text x="50" y="564" font-family="Georgia,serif" font-size="10" fill="#000">Driven by strong nuclear force / quantum tunnelling through Coulomb barrier. Half-life of Ra-226 ≈ 1 600 years.</text>
</svg>`;

  // betaDecayDiagram → betaDecayDiagramSvg
  static betaDecayDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <text x="240" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Beta-Minus Decay — C-14</text>
  <text x="155" y="46" font-family="Georgia,serif" font-size="10" fill="#444">Neutron converts to proton — emitting electron (β⁻) and electron antineutrino (v̄_e)</text>

  <!-- ══ Parent nucleus: C-14 (Z=6, A=14) ══ -->
  <circle cx="170" cy="270" r="74" fill="#fff" stroke="#000" stroke-width="4"/>
  <!-- 6 protons -->
  <circle cx="152" cy="252" r="9" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="170" cy="244" r="9" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="188" cy="252" r="9" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="152" cy="272" r="9" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="170" cy="264" r="9" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="188" cy="272" r="9" fill="#555" stroke="#000" stroke-width="1.5"/>
  <!-- 8 neutrons -->
  <circle cx="152" cy="288" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="170" cy="296" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="188" cy="288" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="152" cy="308" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="170" cy="316" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="188" cy="308" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="136" cy="270" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="204" cy="270" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>

  <text x="136" y="208" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">¹⁴₆C</text>
  <text x="116" y="372" font-family="Georgia,serif" font-size="11" fill="#555">Parent  Z=6, A=14</text>

  <!-- Decay arrow -->
  <line x1="248" y1="270" x2="326" y2="270" stroke="#000" stroke-width="4" stroke-linecap="round"/>
  <polygon points="322,262 342,270 322,278" fill="#000"/>
  <text x="265" y="258" font-family="Georgia,serif" font-size="11" fill="#000">β⁻ decay</text>

  <!-- ══ Daughter nucleus: N-14 (Z=7, A=14) ══ -->
  <circle cx="460" cy="270" r="74" fill="#fff" stroke="#000" stroke-width="4"/>
  <!-- 7 protons -->
  <circle cx="440" cy="250" r="9" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="460" cy="242" r="9" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="480" cy="250" r="9" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="440" cy="268" r="9" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="460" cy="260" r="9" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="480" cy="268" r="9" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="426" cy="268" r="9" fill="#555" stroke="#000" stroke-width="1.5"/>
  <!-- 7 neutrons -->
  <circle cx="440" cy="286" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="460" cy="294" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="480" cy="286" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="440" cy="306" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="460" cy="314" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="480" cy="304" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <circle cx="494" cy="270" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>

  <text x="428" y="208" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">¹⁴₇N</text>
  <text x="404" y="372" font-family="Georgia,serif" font-size="11" fill="#555">Daughter  Z=7, A=14</text>

  <!-- ══ Emitted particles (upper right) ══ -->
  <!-- Beta particle (electron e⁻) -->
  <circle cx="640" cy="160" r="20" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="629" y="166" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">e⁻</text>
  <text x="624" y="118" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">β⁻ particle</text>
  <text x="620" y="132" font-family="Georgia,serif" font-size="10" fill="#555">(electron)</text>
  <text x="614" y="196" font-family="Georgia,serif" font-size="10" fill="#555">KE: 0–156 keV</text>

  <!-- Antineutrino -->
  <circle cx="720" cy="300" r="16" fill="#fff" stroke="#555" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="714" y="305" font-family="Georgia,serif" font-size="12" fill="#555">v̄</text>
  <text x="700" y="268" font-family="Georgia,serif" font-size="10" fill="#555">Electron</text>
  <text x="694" y="280" font-family="Georgia,serif" font-size="10" fill="#555">antineutrino</text>
  <text x="698" y="292" font-family="Georgia,serif" font-size="10" fill="#555">(v̄_e)</text>
  <text x="700" y="330" font-family="Georgia,serif" font-size="9" fill="#555">≈ massless, neutral</text>

  <!-- Arrows for emitted particles from nucleus -->
  <line x1="512" y1="224" x2="616" y2="174" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="611,170 625,168 617,180" fill="#000"/>
  <line x1="524" y1="290" x2="700" y2="302" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-dasharray="6,3"/>
  <polygon points="695,298 708,302 696,308" fill="#555"/>

  <!-- Quark-level process box -->
  <rect x="40" y="404" width="400" height="60" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="50" y="422" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Quark-level process (W⁻ boson):</text>
  <text x="50" y="440" font-family="Georgia,serif" font-size="11" fill="#000">d → u + W⁻   then   W⁻ → e⁻ + v̄_e</text>
  <text x="50" y="456" font-family="Georgia,serif" font-size="10" fill="#555">Mediated by the weak nuclear force</text>

  <!-- Legend -->
  <circle cx="456" cy="416" r="9" fill="#555" stroke="#000" stroke-width="1.5"/>
  <text x="470" y="420" font-family="Georgia,serif" font-size="11" fill="#000">Proton</text>
  <circle cx="456" cy="438" r="9" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="470" y="442" font-family="Georgia,serif" font-size="11" fill="#000">Neutron</text>

  <!-- Nuclear equation box -->
  <rect x="40" y="480" width="720" height="44" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="50" y="498" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Nuclear equation:</text>
  <text x="212" y="498" font-family="Georgia,serif" font-size="12" fill="#000">¹⁴₆C  →  ¹⁴₇N  +  e⁻  +  v̄_e  +  energy</text>
  <text x="50" y="516" font-family="Georgia,serif" font-size="10" fill="#555">Conservation: A: 14=14 ✓ | Z: 6 = 7+(−1) ✓ | lepton number: 0 = 1+(−1) ✓ | half-life of C-14 ≈ 5 730 years</text>

  <!-- Info box -->
  <rect x="40" y="540" width="720" height="30" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="50" y="558" font-family="Georgia,serif" font-size="10" fill="#000">β⁻: neutron → proton + electron + antineutrino. β⁺ (positron emission): proton → neutron + positron + neutrino (e.g. ²²Na). Electron capture also possible.</text>
</svg>`;

  // halfLifeGraph → halfLifeGraphSvg
  static halfLifeGraphSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="240" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Radioactive Decay — Half-Life Graph (C-14)</text>
  <text x="180" y="46" font-family="Georgia,serif" font-size="10" fill="#444">Exponential decay of activity N(t) = N₀ e^(−λt) | t½ = 5 730 years</text>

  <!-- Grid -->
  <line x1="120" y1="80" x2="120" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="220" y1="80" x2="220" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="320" y1="80" x2="320" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="420" y1="80" x2="420" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="520" y1="80" x2="520" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="620" y1="80" x2="620" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="720" y1="80" x2="720" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="820" y1="80" x2="820" y2="490" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="130" x2="860" y2="130" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="210" x2="860" y2="210" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="290" x2="860" y2="290" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="370" x2="860" y2="370" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="450" x2="860" y2="450" stroke="#ddd" stroke-width="1"/>

  <!-- Axes -->
  <line x1="80" y1="490" x2="860" y2="490" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="490" x2="80" y2="70" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="74,74 80,60 86,74" fill="#000"/>
  <polygon points="856,484 870,490 856,496" fill="#000"/>
  <text x="872" y="494" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">t</text>
  <text x="40" y="58" font-family="Georgia,serif" font-size="11" fill="#000">N(t)</text>
  <text x="30" y="72" font-family="Georgia,serif" font-size="9" fill="#555">or A(t)</text>

  <!-- Y-axis labels (N₀, N₀/2, N₀/4, N₀/8, N₀/16) -->
  <text x="30" y="104" font-family="Georgia,serif" font-size="11" fill="#000">N₀</text>
  <line x1="75" y1="100" x2="85" y2="100" stroke="#000" stroke-width="1.5"/>
  <text x="22" y="200" font-family="Georgia,serif" font-size="11" fill="#000">N₀/2</text>
  <line x1="75" y1="196" x2="85" y2="196" stroke="#000" stroke-width="1.5"/>
  <text x="22" y="293" font-family="Georgia,serif" font-size="11" fill="#000">N₀/4</text>
  <line x1="75" y1="289" x2="85" y2="289" stroke="#000" stroke-width="1.5"/>
  <text x="22" y="382" font-family="Georgia,serif" font-size="11" fill="#000">N₀/8</text>
  <line x1="75" y1="378" x2="85" y2="378" stroke="#000" stroke-width="1.5"/>
  <text x="14" y="468" font-family="Georgia,serif" font-size="11" fill="#000">N₀/16</text>
  <line x1="75" y1="464" x2="85" y2="464" stroke="#000" stroke-width="1.5"/>

  <!-- X-axis labels (half-life multiples) -->
  <text x="96" y="506" font-family="Georgia,serif" font-size="10" fill="#000">0</text>
  <text x="196" y="506" font-family="Georgia,serif" font-size="10" fill="#000">t½</text>
  <text x="282" y="506" font-family="Georgia,serif" font-size="10" fill="#000">2t½</text>
  <text x="378" y="506" font-family="Georgia,serif" font-size="10" fill="#000">3t½</text>
  <text x="474" y="506" font-family="Georgia,serif" font-size="10" fill="#000">4t½</text>
  <line x1="220" y1="485" x2="220" y2="495" stroke="#000" stroke-width="1.5"/>
  <line x1="320" y1="485" x2="320" y2="495" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="485" x2="420" y2="495" stroke="#000" stroke-width="1.5"/>
  <line x1="520" y1="485" x2="520" y2="495" stroke="#000" stroke-width="1.5"/>
  <text x="550" y="506" font-family="Georgia,serif" font-size="10" fill="#555">5 730 yr per t½</text>

  <!-- Exponential decay curve: N(t) = N₀ e^(−λt)
       At t=0: N=N₀ (y=100), at t=t½: N=N₀/2 (y=196), etc.
       x: 80 + n×140 for each half-life step
       y values: 100, 196, 289, 378, 464 (scaled)
       Path approximated with smooth bezier segments
  -->
  <path d="M 80,100 C 130,100 180,192 220,196 C 260,200 280,285 320,289 C 360,293 380,374 420,378 C 460,382 480,460 520,464 C 560,468 600,482 860,488"
        fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Half-life step annotations (staircase dashes) -->
  <!-- Step 1: t=0→t½, N=N₀→N₀/2 -->
  <line x1="80"  y1="100" x2="220" y2="100" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="220" y1="100" x2="220" y2="196" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="80"  y1="196" x2="220" y2="196" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Step 2 -->
  <line x1="220" y1="196" x2="320" y2="196" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="320" y1="196" x2="320" y2="289" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="80"  y1="289" x2="320" y2="289" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Step 3 -->
  <line x1="320" y1="289" x2="420" y2="289" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="420" y1="289" x2="420" y2="378" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="80"  y1="378" x2="420" y2="378" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Step 4 -->
  <line x1="420" y1="378" x2="520" y2="378" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="520" y1="378" x2="520" y2="464" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="80"  y1="464" x2="520" y2="464" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>

  <!-- Half-life bracket arrows -->
  <line x1="82"  y1="148" x2="218" y2="148" stroke="#000" stroke-width="2"/>
  <polygon points="86,144 76,148 86,152" fill="#000"/>
  <polygon points="214,144 224,148 214,152" fill="#000"/>
  <text x="122" y="144" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">t½ = 5 730 yr</text>

  <!-- Decay constant τ annotation -->
  <text x="600" y="150" font-family="Georgia,serif" font-size="11" fill="#000">τ = t½ / ln 2</text>
  <text x="600" y="164" font-family="Georgia,serif" font-size="11" fill="#000">λ = ln 2 / t½</text>
  <text x="600" y="180" font-family="Georgia,serif" font-size="10" fill="#555">= 1.21×10⁻⁴ yr⁻¹</text>

  <!-- Dots at key points -->
  <circle cx="80"  cy="100" r="5" fill="#000"/>
  <circle cx="220" cy="196" r="5" fill="#000"/>
  <circle cx="320" cy="289" r="5" fill="#000"/>
  <circle cx="420" cy="378" r="5" fill="#000"/>
  <circle cx="520" cy="464" r="5" fill="#000"/>

  <!-- Info box -->
  <rect x="82" y="512" width="778" height="60" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="92" y="530" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">N(t) = N₀ e^(−λt) = N₀ (½)^(t/t½)</text>
  <text x="92" y="548" font-family="Georgia,serif" font-size="10" fill="#000">Activity A = λN | t½ = half-life | λ = decay constant | τ = mean lifetime = 1/λ = t½/ln2 ≈ 1.44 t½</text>
  <text x="92" y="564" font-family="Georgia,serif" font-size="9" fill="#555">Carbon dating uses C-14 t½ = 5 730 yr to date organic material up to ~50 000 years old (≈ 8–9 half-lives).</text>
</svg>`;

  // nuclearStructurePhysics → nuclearStructurePhysicsSvg
  static nuclearStructurePhysicsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="700px" viewBox="0 0 700 700">

  <text x="190" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Nuclear Structure — Carbon-12 (¹²₆C)</text>
  <text x="140" y="46" font-family="Georgia,serif" font-size="10" fill="#444">Nucleus contains 6 protons and 6 neutrons bound by the strong nuclear force</text>

  <!-- ── Nucleus boundary ── -->
  <circle cx="350" cy="310" r="130" fill="#fff" stroke="#000" stroke-width="3" stroke-dasharray="6,4"/>
  <text x="290" y="472" font-family="Georgia,serif" font-size="11" fill="#555">Nucleus (diameter ≈ 10⁻¹⁴ m)</text>

  <!-- ── 6 Protons (filled) ── -->
  <circle cx="310" cy="264" r="26" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="300" y="270" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">p</text>
  <circle cx="362" cy="254" r="26" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="352" y="260" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">p</text>
  <circle cx="408" cy="278" r="26" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="398" y="284" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">p</text>
  <circle cx="296" cy="318" r="26" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="286" y="324" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">p</text>
  <circle cx="348" cy="308" r="26" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="338" y="314" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">p</text>
  <circle cx="400" cy="322" r="26" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="390" y="328" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">p</text>

  <!-- ── 6 Neutrons (grey fill) ── -->
  <circle cx="310" cy="360" r="26" fill="#aaa" stroke="#000" stroke-width="3"/>
  <text x="300" y="366" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">n</text>
  <circle cx="362" cy="374" r="26" fill="#aaa" stroke="#000" stroke-width="3"/>
  <text x="352" y="380" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">n</text>
  <circle cx="408" cy="356" r="26" fill="#aaa" stroke="#000" stroke-width="3"/>
  <text x="398" y="362" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">n</text>
  <circle cx="296" cy="390" r="26" fill="#aaa" stroke="#000" stroke-width="3"/>
  <text x="286" y="396" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">n</text>
  <circle cx="350" cy="405" r="26" fill="#aaa" stroke="#000" stroke-width="3"/>
  <text x="340" y="411" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">n</text>
  <circle cx="400" cy="388" r="26" fill="#aaa" stroke="#000" stroke-width="3"/>
  <text x="390" y="394" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">n</text>

  <!-- Nucleus label -->
  <text x="308" y="190" font-family="Georgia,serif" font-size="22" font-weight="bold" fill="#000">¹²₆C</text>
  <text x="296" y="208" font-family="Georgia,serif" font-size="11" fill="#555">A = 12, Z = 6, N = 6</text>

  <!-- Strong force wavy lines (between a few nucleons) -->
  <path d="M 336,264 C 342,258 352,258 358,264" fill="none" stroke="#555" stroke-width="1.5" stroke-dasharray="2,2"/>
  <path d="M 362,280 C 368,296 368,308 362,322" fill="none" stroke="#555" stroke-width="1.5" stroke-dasharray="2,2"/>
  <path d="M 322,318 C 330,318 338,314 348,312" fill="none" stroke="#555" stroke-width="1.5" stroke-dasharray="2,2"/>
  <text x="174" y="310" font-family="Georgia,serif" font-size="10" fill="#555">Strong force</text>
  <text x="172" y="322" font-family="Georgia,serif" font-size="10" fill="#555">(gluon exchange)</text>

  <!-- Legend -->
  <circle cx="70" cy="540" r="18" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="60" y="546" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">p</text>
  <text x="92" y="544" font-family="Georgia,serif" font-size="11" fill="#000">Proton  (charge +e, mass ≈ 938 MeV/c²)</text>
  <circle cx="70" cy="572" r="18" fill="#aaa" stroke="#000" stroke-width="3"/>
  <text x="60" y="578" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">n</text>
  <text x="92" y="576" font-family="Georgia,serif" font-size="11" fill="#000">Neutron  (neutral, mass ≈ 940 MeV/c²)</text>

  <!-- Nucleon count box -->
  <rect x="42" y="484" width="616" height="42" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="52" y="502" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Notation: </text>
  <text x="116" y="502" font-family="Georgia,serif" font-size="11" fill="#000">^A_Z X  |  A = mass number (nucleons) = Z + N  |  Z = proton number  |  N = neutron number</text>
  <text x="52" y="518" font-family="Georgia,serif" font-size="10" fill="#555">Nuclear radius: r ≈ r₀ A^(1/3)  (r₀ ≈ 1.2 fm = 1.2×10⁻¹⁵ m). Isotopes: same Z, different N.</text>

  <!-- Info box -->
  <rect x="42" y="600" width="616" height="66" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="52" y="618" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Strong nuclear force:</text>
  <text x="52" y="634" font-family="Georgia,serif" font-size="10" fill="#000">• Attractive, short-range (≈ 10⁻¹⁵ m), acts between all nucleons (p-p, p-n, n-n)</text>
  <text x="52" y="650" font-family="Georgia,serif" font-size="10" fill="#000">• Overcomes Coulomb repulsion between protons. Mediated by pions / gluons (residual strong force).</text>
  <text x="52" y="664" font-family="Georgia,serif" font-size="9" fill="#555">• Nuclear binding energy released = mass deficit × c²  |  C-12 binding energy ≈ 92 MeV total ≈ 7.68 MeV/nucleon</text>
</svg>`;

  // bindingEnergyCurve → bindingEnergyCurveSvg
  static bindingEnergyCurveSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="210" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Binding Energy per Nucleon vs Mass Number</text>
  <text x="175" y="46" font-family="Georgia,serif" font-size="10" fill="#444">Shows regions where fusion (low A) and fission (high A) release energy — iron-56 peak</text>

  <!-- Grid -->
  <line x1="120" y1="80" x2="120" y2="480" stroke="#ddd" stroke-width="1"/>
  <line x1="200" y1="80" x2="200" y2="480" stroke="#ddd" stroke-width="1"/>
  <line x1="280" y1="80" x2="280" y2="480" stroke="#ddd" stroke-width="1"/>
  <line x1="360" y1="80" x2="360" y2="480" stroke="#ddd" stroke-width="1"/>
  <line x1="440" y1="80" x2="440" y2="480" stroke="#ddd" stroke-width="1"/>
  <line x1="520" y1="80" x2="520" y2="480" stroke="#ddd" stroke-width="1"/>
  <line x1="600" y1="80" x2="600" y2="480" stroke="#ddd" stroke-width="1"/>
  <line x1="680" y1="80" x2="680" y2="480" stroke="#ddd" stroke-width="1"/>
  <line x1="760" y1="80" x2="760" y2="480" stroke="#ddd" stroke-width="1"/>
  <line x1="840" y1="80" x2="840" y2="480" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="120" x2="870" y2="120" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="170" x2="870" y2="170" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="220" x2="870" y2="220" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="270" x2="870" y2="270" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="320" x2="870" y2="320" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="370" x2="870" y2="370" stroke="#ddd" stroke-width="1"/>
  <line x1="80" y1="420" x2="870" y2="420" stroke="#ddd" stroke-width="1"/>

  <!-- Axes -->
  <line x1="80" y1="480" x2="870" y2="480" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="480" x2="80" y2="80" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="74,84 80,70 86,84" fill="#000"/>
  <polygon points="866,474 880,480 866,486" fill="#000"/>
  <text x="882" y="484" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">A</text>
  <text x="30" y="72" font-family="Georgia,serif" font-size="10" fill="#000">BE/A</text>
  <text x="20" y="84" font-family="Georgia,serif" font-size="9" fill="#555">(MeV)</text>

  <!-- Y-axis labels -->
  <text x="58" y="484" font-family="Georgia,serif" font-size="10" fill="#000">0</text>
  <text x="55" y="424" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <text x="55" y="374" font-family="Georgia,serif" font-size="10" fill="#000">4</text>
  <text x="55" y="324" font-family="Georgia,serif" font-size="10" fill="#000">5</text>
  <text x="55" y="224" font-family="Georgia,serif" font-size="10" fill="#000">7</text>
  <text x="55" y="174" font-family="Georgia,serif" font-size="10" fill="#000">8</text>
  <text x="55" y="124" font-family="Georgia,serif" font-size="10" fill="#000">9</text>
  <line x1="75" y1="120" x2="85" y2="120" stroke="#000" stroke-width="1.5"/>
  <line x1="75" y1="170" x2="85" y2="170" stroke="#000" stroke-width="1.5"/>
  <line x1="75" y1="220" x2="85" y2="220" stroke="#000" stroke-width="1.5"/>
  <line x1="75" y1="370" x2="85" y2="370" stroke="#000" stroke-width="1.5"/>
  <line x1="75" y1="420" x2="85" y2="420" stroke="#000" stroke-width="1.5"/>

  <!-- X-axis labels -->
  <text x="76" y="496" font-family="Georgia,serif" font-size="10" fill="#000">0</text>
  <text x="196" y="496" font-family="Georgia,serif" font-size="10" fill="#000">50</text>
  <text x="276" y="496" font-family="Georgia,serif" font-size="10" fill="#000">100</text>
  <text x="436" y="496" font-family="Georgia,serif" font-size="10" fill="#000">200</text>
  <text x="596" y="496" font-family="Georgia,serif" font-size="10" fill="#000">≈56</text>
  <line x1="200" y1="475" x2="200" y2="485" stroke="#000" stroke-width="1.5"/>
  <line x1="280" y1="475" x2="280" y2="485" stroke="#000" stroke-width="1.5"/>
  <line x1="440" y1="475" x2="440" y2="485" stroke="#000" stroke-width="1.5"/>

  <!-- Binding energy curve:
       Starts at A=2 (deuterium, ~1.1 MeV) at x≈88, y≈458
       Rises steeply to Fe-56 peak (A=56, ~8.79 MeV) at x≈195, y≈127
       Then gradually decreases to U-238 (A=238, ~7.57 MeV) at x≈756, y≈191
  -->
  <!-- He-4 anomalous peak at ~7.1 MeV, A=4, x≈90, y≈213 (above main curve) -->
  <path d="
    M 86,458
    C 86,440 88,400 90,213
    C 92,270 95,230 100,220
    C 115,200 140,168 160,155
    C 175,147 190,130 197,127
    C 220,131 260,140 320,148
    C 400,158 500,162 580,168
    C 650,173 700,178 756,191
    C 780,200 820,212 860,220
  " fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- ⁴He anomalous high point (alpha particle unusually stable) -->
  <circle cx="90" cy="213" r="5" fill="#000"/>
  <text x="96" y="208" font-family="Georgia,serif" font-size="10" fill="#000">⁴He</text>
  <text x="94" y="220" font-family="Georgia,serif" font-size="9" fill="#555">(7.1 MeV)</text>

  <!-- Iron-56 peak -->
  <circle cx="197" cy="127" r="6" fill="#000"/>
  <line x1="197" y1="127" x2="197" y2="480" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="162" y="118" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">⁵⁶Fe</text>
  <text x="158" y="131" font-family="Georgia,serif" font-size="10" fill="#000">8.79 MeV</text>
  <text x="152" y="143" font-family="Georgia,serif" font-size="9" fill="#555">(most stable)</text>
  <text x="176" y="494" font-family="Georgia,serif" font-size="9" fill="#555">56</text>

  <!-- U-238 endpoint -->
  <circle cx="756" cy="191" r="5" fill="#555"/>
  <text x="762" y="188" font-family="Georgia,serif" font-size="10" fill="#555">²³⁸U</text>
  <text x="760" y="200" font-family="Georgia,serif" font-size="9" fill="#555">7.57 MeV</text>

  <!-- Fusion region annotation -->
  <rect x="82" y="148" width="106" height="48" rx="4" fill="none" stroke="#555" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="86" y="164" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">← FUSION</text>
  <text x="86" y="178" font-family="Georgia,serif" font-size="10" fill="#000">releases energy</text>
  <text x="86" y="190" font-family="Georgia,serif" font-size="9" fill="#555">(light nuclei)</text>

  <!-- Fission region annotation -->
  <rect x="600" y="148" width="116" height="48" rx="4" fill="none" stroke="#555" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="608" y="164" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">FISSION →</text>
  <text x="604" y="178" font-family="Georgia,serif" font-size="10" fill="#000">releases energy</text>
  <text x="604" y="190" font-family="Georgia,serif" font-size="9" fill="#555">(heavy nuclei)</text>

  <!-- Both regions: arrows toward Fe-56 -->
  <line x1="188" y1="172" x2="196" y2="136" stroke="#555" stroke-width="1.5"/>
  <polygon points="191,140 196,128 201,140" fill="#555"/>
  <line x1="600" y1="172" x2="210" y2="138" stroke="#555" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="214,134 200,136 212,144" fill="#555"/>

  <!-- Notable nuclides -->
  <circle cx="86" cy="458" r="4" fill="#555"/>
  <text x="90" y="455" font-family="Georgia,serif" font-size="9" fill="#555">²H</text>
  <circle cx="122" cy="180" r="4" fill="#555"/>
  <text x="126" y="177" font-family="Georgia,serif" font-size="9" fill="#555">¹²C</text>

  <!-- Info box -->
  <rect x="82" y="506" width="778" height="60" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="92" y="524" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Binding Energy per Nucleon (BE/A):</text>
  <text x="92" y="540" font-family="Georgia,serif" font-size="10" fill="#000">Higher BE/A = more stable nucleus. Energy released = Δ(BE/A) × number of nucleons involved.</text>
  <text x="92" y="556" font-family="Georgia,serif" font-size="10" fill="#000">Fusion: H + H → He releases ≈ 17.6 MeV (per reaction). Fission: U-235 → ~200 MeV per fission event.</text>
  <text x="92" y="568" font-family="Georgia,serif" font-size="9" fill="#555">⁴He, ¹²C, ¹⁶O are anomalously stable (magic numbers of nucleons: 2, 8, 20, 28, 50, 82, 126).</text>
</svg>`;

  // nuclearFissionDiagram → nuclearFissionDiagramSvg
  static nuclearFissionDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="250" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Nuclear Fission — U-235</text>
  <text x="160" y="46" font-family="Georgia,serif" font-size="10" fill="#444">Slow neutron absorbed by U-235 → compound nucleus → splits into fission fragments + neutrons + energy</text>

  <!-- ══ Step 1: Incoming slow neutron ══ -->
  <!-- Neutron -->
  <circle cx="50" cy="250" r="18" fill="#aaa" stroke="#000" stroke-width="2.5"/>
  <text x="40" y="256" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">n</text>
  <text x="26" y="284" font-family="Georgia,serif" font-size="10" fill="#555">slow n</text>
  <line x1="70" y1="250" x2="116" y2="250" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="112,244 126,250 112,256" fill="#000"/>

  <!-- ══ Step 2: U-235 nucleus ══ -->
  <circle cx="190" cy="250" r="58" fill="#fff" stroke="#000" stroke-width="3.5"/>
  <!-- nucleons inside (schematic) -->
  <circle cx="172" cy="235" r="8" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="190" cy="228" r="8" fill="#aaa" stroke="#000" stroke-width="1.5"/>
  <circle cx="208" cy="235" r="8" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="180" cy="250" r="8" fill="#aaa" stroke="#000" stroke-width="1.5"/>
  <circle cx="198" cy="248" r="8" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="172" cy="263" r="8" fill="#aaa" stroke="#000" stroke-width="1.5"/>
  <circle cx="192" cy="268" r="8" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="210" cy="260" r="8" fill="#aaa" stroke="#000" stroke-width="1.5"/>
  <text x="158" y="190" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">²³⁵₉₂U</text>
  <text x="148" y="326" font-family="Georgia,serif" font-size="10" fill="#555">Uranium-235</text>

  <!-- Absorption arrow -->
  <text x="130" y="232" font-family="Georgia,serif" font-size="10" fill="#000">absorbs</text>

  <!-- ══ Step 3: Compound nucleus U-236* ══ -->
  <line x1="252" y1="250" x2="298" y2="250" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="294,244 308,250 294,256" fill="#000"/>
  <circle cx="360" cy="250" r="62" fill="#eee" stroke="#000" stroke-width="3" stroke-dasharray="6,3"/>
  <!-- Wobbly label to indicate excited state -->
  <text x="326" y="244" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">²³⁶₉₂U*</text>
  <text x="328" y="260" font-family="Georgia,serif" font-size="11" fill="#000">(excited)</text>
  <text x="322" y="330" font-family="Georgia,serif" font-size="10" fill="#555">Compound nucleus</text>
  <!-- Deformation arrows (showing elongation) -->
  <line x1="308" y1="250" x2="290" y2="250" stroke="#555" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="412" y1="250" x2="430" y2="250" stroke="#555" stroke-width="1.5" stroke-dasharray="3,3"/>

  <!-- ══ Step 4: Fission products ══ -->
  <line x1="426" y1="250" x2="476" y2="250" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="472,244 486,250 472,256" fill="#000"/>
  <text x="438" y="234" font-family="Georgia,serif" font-size="10" fill="#000">fission</text>

  <!-- Fragment 1: Kr-92 (upper) -->
  <circle cx="560" cy="192" r="44" fill="#fff" stroke="#000" stroke-width="3"/>
  <circle cx="545" cy="180" r="7" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="560" cy="174" r="7" fill="#aaa" stroke="#000" stroke-width="1.5"/>
  <circle cx="575" cy="180" r="7" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="548" cy="194" r="7" fill="#aaa" stroke="#000" stroke-width="1.5"/>
  <circle cx="565" cy="196" r="7" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="550" cy="208" r="7" fill="#aaa" stroke="#000" stroke-width="1.5"/>
  <circle cx="568" cy="208" r="7" fill="#555" stroke="#000" stroke-width="1.5"/>
  <text x="526" y="136" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">⁹²₃₆Kr</text>
  <text x="520" y="150" font-family="Georgia,serif" font-size="10" fill="#555">Krypton-92</text>

  <!-- Fragment 2: Ba-141 (lower) -->
  <circle cx="560" cy="320" r="52" fill="#fff" stroke="#000" stroke-width="3"/>
  <circle cx="542" cy="308" r="8" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="560" cy="300" r="8" fill="#aaa" stroke="#000" stroke-width="1.5"/>
  <circle cx="578" cy="308" r="8" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="545" cy="322" r="8" fill="#aaa" stroke="#000" stroke-width="1.5"/>
  <circle cx="564" cy="322" r="8" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="548" cy="338" r="8" fill="#aaa" stroke="#000" stroke-width="1.5"/>
  <circle cx="566" cy="340" r="8" fill="#555" stroke="#000" stroke-width="1.5"/>
  <circle cx="534" cy="324" r="8" fill="#aaa" stroke="#000" stroke-width="1.5"/>
  <circle cx="582" cy="326" r="8" fill="#aaa" stroke="#000" stroke-width="1.5"/>
  <text x="522" y="396" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">¹⁴¹₅₆Ba</text>
  <text x="516" y="410" font-family="Georgia,serif" font-size="10" fill="#555">Barium-141</text>

  <!-- Neutrons emitted (3 fast neutrons) -->
  <circle cx="666" cy="136" r="14" fill="#aaa" stroke="#000" stroke-width="2"/>
  <text x="659" y="141" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">n</text>
  <line x1="604" y1="170" x2="652" y2="148" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="647,144 660,143 650,153" fill="#000"/>

  <circle cx="720" cy="250" r="14" fill="#aaa" stroke="#000" stroke-width="2"/>
  <text x="713" y="255" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">n</text>
  <line x1="614" y1="250" x2="706" y2="250" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="702,244 716,250 702,256" fill="#000"/>

  <circle cx="666" cy="364" r="14" fill="#aaa" stroke="#000" stroke-width="2"/>
  <text x="659" y="369" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">n</text>
  <line x1="606" y1="340" x2="652" y2="356" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="648,352 660,361 648,366" fill="#000"/>

  <!-- n label -->
  <text x="726" y="228" font-family="Georgia,serif" font-size="10" fill="#555">3 fast</text>
  <text x="720" y="240" font-family="Georgia,serif" font-size="10" fill="#555">neutrons</text>
  <text x="718" y="252" font-family="Georgia,serif" font-size="9" fill="#555">(chain rxn)</text>

  <!-- Energy release arrow -->
  <line x1="760" y1="250" x2="860" y2="250" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-dasharray="6,3"/>
  <polygon points="856,244 870,250 856,256" fill="#000"/>
  <text x="764" y="238" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">~200 MeV</text>
  <text x="766" y="252" font-family="Georgia,serif" font-size="10" fill="#000">energy</text>
  <text x="760" y="266" font-family="Georgia,serif" font-size="9" fill="#555">(KE + γ + β)</text>

  <!-- Nuclear equation box -->
  <rect x="40" y="430" width="820" height="44" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="50" y="450" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Nuclear equation:</text>
  <text x="188" y="450" font-family="Georgia,serif" font-size="11" fill="#000">¹n₀ + ²³⁵₉₂U → ²³⁶₉₂U* → ⁹²₃₆Kr + ¹⁴¹₅₆Ba + 3¹n₀ + ~200 MeV</text>
  <text x="50" y="466" font-family="Georgia,serif" font-size="10" fill="#555">Conservation: A: 1+235=236=92+141+3 ✓ | Z: 92=36+56 ✓ | Mass deficit converted to energy via E=mc²</text>

  <!-- Info box -->
  <rect x="40" y="490" width="820" height="52" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="50" y="508" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Chain reaction: </text>
  <text x="136" y="508" font-family="Georgia,serif" font-size="10" fill="#000">Each fission releases 2–3 fast neutrons which can induce further fissions → exponential growth if critical mass reached.</text>
  <text x="50" y="524" font-family="Georgia,serif" font-size="10" fill="#000">Critical mass (U-235) ≈ 52 kg (bare sphere). Moderator (H₂O, graphite) slows neutrons to thermal energies for reactor use.</text>
  <text x="50" y="538" font-family="Georgia,serif" font-size="9" fill="#555">1 kg U-235 fully fissioned ≈ 8.2×10¹³ J ≈ 20 000 tonnes TNT equivalent. Fission fragments are highly radioactive.</text>
</svg>`;




// ─── LORENTZ FORCE DIAGRAM ────────────────────────────────────────────────
  // Force on a charged particle moving in a magnetic field
  // Shows: velocity vector, magnetic field (into page dots/crosses), force vector,
  //        cross-product notation, 3D coordinate axes, particle, labels
  static lorentzForceSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="200" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Lorentz Force on Charged Particle</text>
  <text x="200" y="46" font-family="Georgia,serif" font-size="11" fill="#333">F = q(v × B)   —   right-hand rule applies</text>

  <!-- ══ Background grid (light) ══ -->
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ddd" stroke-width="0.5"/>
    </pattern>
    <marker id="arrowBlack" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#000"/>
    </marker>
    <marker id="arrowHeavy" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#000"/>
    </marker>
  </defs>
  <rect x="60" y="60" width="520" height="420" fill="url(#grid)" stroke="#bbb" stroke-width="1.5"/>

  <!-- ══ Magnetic field B — into the page (× symbols) ══ -->
  <!-- 5×5 grid of × marks inside the field region -->
  <!-- × at each grid point: two diagonal lines -->
  <!-- Row 1 y=100 -->
  <line x1="92" y1="88" x2="108" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="108" y1="88" x2="92"  y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="132" y1="88" x2="148" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="148" y1="88" x2="132" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="172" y1="88" x2="188" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="188" y1="88" x2="172" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="212" y1="88" x2="228" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="228" y1="88" x2="212" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="252" y1="88" x2="268" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="268" y1="88" x2="252" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="292" y1="88" x2="308" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="308" y1="88" x2="292" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="332" y1="88" x2="348" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="348" y1="88" x2="332" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="372" y1="88" x2="388" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="388" y1="88" x2="372" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="412" y1="88" x2="428" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="428" y1="88" x2="412" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="452" y1="88" x2="468" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="468" y1="88" x2="452" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="492" y1="88" x2="508" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="508" y1="88" x2="492" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="532" y1="88" x2="548" y2="104" stroke="#000" stroke-width="1.5"/>
  <line x1="548" y1="88" x2="532" y2="104" stroke="#000" stroke-width="1.5"/>
  <!-- Row 2 y=140 -->
  <line x1="92"  y1="128" x2="108" y2="144" stroke="#000" stroke-width="1.5"/>
  <line x1="108" y1="128" x2="92"  y2="144" stroke="#000" stroke-width="1.5"/>
  <line x1="172" y1="128" x2="188" y2="144" stroke="#000" stroke-width="1.5"/>
  <line x1="188" y1="128" x2="172" y2="144" stroke="#000" stroke-width="1.5"/>
  <line x1="252" y1="128" x2="268" y2="144" stroke="#000" stroke-width="1.5"/>
  <line x1="268" y1="128" x2="252" y2="144" stroke="#000" stroke-width="1.5"/>
  <line x1="332" y1="128" x2="348" y2="144" stroke="#000" stroke-width="1.5"/>
  <line x1="348" y1="128" x2="332" y2="144" stroke="#000" stroke-width="1.5"/>
  <line x1="412" y1="128" x2="428" y2="144" stroke="#000" stroke-width="1.5"/>
  <line x1="428" y1="128" x2="412" y2="144" stroke="#000" stroke-width="1.5"/>
  <line x1="492" y1="128" x2="508" y2="144" stroke="#000" stroke-width="1.5"/>
  <line x1="508" y1="128" x2="492" y2="144" stroke="#000" stroke-width="1.5"/>
  <!-- Row 3 y=180 — skip particle zone (centre ~300,300) -->
  <line x1="92"  y1="168" x2="108" y2="184" stroke="#000" stroke-width="1.5"/>
  <line x1="108" y1="168" x2="92"  y2="184" stroke="#000" stroke-width="1.5"/>
  <line x1="172" y1="168" x2="188" y2="184" stroke="#000" stroke-width="1.5"/>
  <line x1="188" y1="168" x2="172" y2="184" stroke="#000" stroke-width="1.5"/>
  <line x1="412" y1="168" x2="428" y2="184" stroke="#000" stroke-width="1.5"/>
  <line x1="428" y1="168" x2="412" y2="184" stroke="#000" stroke-width="1.5"/>
  <line x1="492" y1="168" x2="508" y2="184" stroke="#000" stroke-width="1.5"/>
  <line x1="508" y1="168" x2="492" y2="184" stroke="#000" stroke-width="1.5"/>
  <!-- Rows 4-7 symmetrically -->
  <line x1="92"  y1="368" x2="108" y2="384" stroke="#000" stroke-width="1.5"/>
  <line x1="108" y1="368" x2="92"  y2="384" stroke="#000" stroke-width="1.5"/>
  <line x1="172" y1="368" x2="188" y2="384" stroke="#000" stroke-width="1.5"/>
  <line x1="188" y1="368" x2="172" y2="384" stroke="#000" stroke-width="1.5"/>
  <line x1="252" y1="368" x2="268" y2="384" stroke="#000" stroke-width="1.5"/>
  <line x1="268" y1="368" x2="252" y2="384" stroke="#000" stroke-width="1.5"/>
  <line x1="332" y1="368" x2="348" y2="384" stroke="#000" stroke-width="1.5"/>
  <line x1="348" y1="368" x2="332" y2="384" stroke="#000" stroke-width="1.5"/>
  <line x1="412" y1="368" x2="428" y2="384" stroke="#000" stroke-width="1.5"/>
  <line x1="428" y1="368" x2="412" y2="384" stroke="#000" stroke-width="1.5"/>
  <line x1="492" y1="368" x2="508" y2="384" stroke="#000" stroke-width="1.5"/>
  <line x1="508" y1="368" x2="492" y2="384" stroke="#000" stroke-width="1.5"/>
  <line x1="92"  y1="408" x2="108" y2="424" stroke="#000" stroke-width="1.5"/>
  <line x1="108" y1="408" x2="92"  y2="424" stroke="#000" stroke-width="1.5"/>
  <line x1="172" y1="408" x2="188" y2="424" stroke="#000" stroke-width="1.5"/>
  <line x1="188" y1="408" x2="172" y2="424" stroke="#000" stroke-width="1.5"/>
  <line x1="252" y1="408" x2="268" y2="424" stroke="#000" stroke-width="1.5"/>
  <line x1="268" y1="408" x2="252" y2="424" stroke="#000" stroke-width="1.5"/>
  <line x1="332" y1="408" x2="348" y2="424" stroke="#000" stroke-width="1.5"/>
  <line x1="348" y1="408" x2="332" y2="424" stroke="#000" stroke-width="1.5"/>
  <line x1="412" y1="408" x2="428" y2="424" stroke="#000" stroke-width="1.5"/>
  <line x1="428" y1="408" x2="412" y2="424" stroke="#000" stroke-width="1.5"/>
  <line x1="492" y1="408" x2="508" y2="424" stroke="#000" stroke-width="1.5"/>
  <line x1="508" y1="408" x2="492" y2="424" stroke="#000" stroke-width="1.5"/>
  <line x1="92"  y1="448" x2="108" y2="464" stroke="#000" stroke-width="1.5"/>
  <line x1="108" y1="448" x2="92"  y2="464" stroke="#000" stroke-width="1.5"/>
  <line x1="172" y1="448" x2="188" y2="464" stroke="#000" stroke-width="1.5"/>
  <line x1="188" y1="448" x2="172" y2="464" stroke="#000" stroke-width="1.5"/>
  <line x1="252" y1="448" x2="268" y2="464" stroke="#000" stroke-width="1.5"/>
  <line x1="268" y1="448" x2="252" y2="464" stroke="#000" stroke-width="1.5"/>
  <line x1="332" y1="448" x2="348" y2="464" stroke="#000" stroke-width="1.5"/>
  <line x1="348" y1="448" x2="332" y2="464" stroke="#000" stroke-width="1.5"/>
  <line x1="412" y1="448" x2="428" y2="464" stroke="#000" stroke-width="1.5"/>
  <line x1="428" y1="448" x2="412" y2="464" stroke="#000" stroke-width="1.5"/>
  <line x1="492" y1="448" x2="508" y2="464" stroke="#000" stroke-width="1.5"/>
  <line x1="508" y1="448" x2="492" y2="464" stroke="#000" stroke-width="1.5"/>

  <!-- B field label -->
  <text x="530" y="110" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">B</text>
  <text x="525" y="125" font-family="Georgia,serif" font-size="10" fill="#333">(into page)</text>

  <!-- ══ Charged particle at centre (300,300) ══ -->
  <circle cx="300" cy="300" r="18" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="293" y="306" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">+q</text>

  <!-- ══ Velocity vector v → (rightward) ══ -->
  <line x1="318" y1="300" x2="460" y2="300" stroke="#000" stroke-width="3" marker-end="url(#arrowBlack)"/>
  <text x="390" y="290" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">v</text>
  <text x="465" y="305" font-family="Georgia,serif" font-size="11" fill="#333">(velocity)</text>

  <!-- ══ Force vector F ↑ (upward, result of v×B) ══ -->
  <line x1="300" y1="282" x2="300" y2="150" stroke="#000" stroke-width="3.5" stroke-dasharray="none" marker-end="url(#arrowBlack)"/>
  <text x="308" y="200" font-family="Georgia,serif" font-size="14" font-weight="bold" font-style="italic" fill="#000">F</text>
  <text x="308" y="215" font-family="Georgia,serif" font-size="11" fill="#333">(Lorentz force)</text>

  <!-- ══ Coordinate axes (bottom-left) ══ -->
  <line x1="90" y1="500" x2="140" y2="500" stroke="#000" stroke-width="2.5" marker-end="url(#arrowBlack)"/>
  <text x="145" y="505" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">x</text>
  <line x1="90" y1="500" x2="90" y2="450" stroke="#000" stroke-width="2.5" marker-end="url(#arrowBlack)"/>
  <text x="83" y="445" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">y</text>
  <!-- z into page: circle with × -->
  <circle cx="90" cy="520" r="10" fill="#fff" stroke="#000" stroke-width="2"/>
  <line x1="83" y1="513" x2="97" y2="527" stroke="#000" stroke-width="1.8"/>
  <line x1="97" y1="513" x2="83" y2="527" stroke="#000" stroke-width="1.8"/>
  <text x="104" y="525" font-family="Georgia,serif" font-size="11" fill="#000">z (into page)</text>

  <!-- ══ Cross-product diagram (right side) ══ -->
  <rect x="600" y="200" width="155" height="130" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="612" y="220" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Cross Product:</text>
  <text x="612" y="240" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">F = q(v × B)</text>
  <text x="612" y="260" font-family="Georgia,serif" font-size="10" fill="#333">v = v x̂  (rightward)</text>
  <text x="612" y="276" font-family="Georgia,serif" font-size="10" fill="#333">B = −B ẑ  (into page)</text>
  <text x="612" y="292" font-family="Georgia,serif" font-size="10" fill="#333">x̂ × (−ẑ) = ŷ</text>
  <text x="612" y="310" font-family="Georgia,serif" font-size="10" fill="#000">∴ F points upward (ŷ)</text>

  <!-- ══ Right-hand rule note ══ -->
  <rect x="600" y="340" width="155" height="95" rx="5" fill="#fff" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="612" y="360" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Right-Hand Rule:</text>
  <text x="612" y="378" font-family="Georgia,serif" font-size="10" fill="#333">Point fingers in v dir.</text>
  <text x="612" y="394" font-family="Georgia,serif" font-size="10" fill="#333">Curl toward B dir.</text>
  <text x="612" y="410" font-family="Georgia,serif" font-size="10" fill="#333">Thumb → F direction</text>
  <text x="612" y="426" font-family="Georgia,serif" font-size="10" fill="#000">(flip for −q charge)</text>

  <!-- ══ Formula box (bottom) ══ -->
  <rect x="200" y="490" width="380" height="90" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="215" y="510" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Lorentz Force Law:</text>
  <text x="215" y="530" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">F = q(E + v × B)</text>
  <text x="215" y="548" font-family="Georgia,serif" font-size="10" fill="#333">|F| = qvB sin θ   (here θ = 90°, so |F| = qvB)</text>
  <text x="215" y="566" font-family="Georgia,serif" font-size="10" fill="#333">Circular motion: r = mv / qB   (radius of curvature)</text>
</svg>`;

  // ─── ELECTROMAGNETIC INDUCTION DIAGRAM ───────────────────────────────────
  // Faraday's law — changing flux inducing EMF in a coil
  // Shows: bar magnet approaching coil, magnetic field lines, flux arrows,
  //        induced current direction (Lenz's law), galvanometer, EMF label
  static electromagneticInductionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="220" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Electromagnetic Induction — Faraday's Law</text>
  <text x="200" y="46" font-family="Georgia,serif" font-size="11" fill="#333">ε = −N dΦ/dt   (induced EMF opposes change — Lenz's Law)</text>

  <!-- ══ Bar magnet (left, moving rightward) ══ -->
  <!-- Magnet body -->
  <rect x="60" y="220" width="140" height="140" rx="8" fill="#fff" stroke="#000" stroke-width="3"/>
  <!-- N pole (right half) -->
  <rect x="130" y="220" width="70" height="140" rx="0" fill="none" stroke="none"/>
  <line x1="130" y1="220" x2="130" y2="360" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <!-- S label -->
  <text x="82" y="298" font-family="Georgia,serif" font-size="30" font-weight="bold" fill="#000">S</text>
  <!-- N label -->
  <text x="148" y="298" font-family="Georgia,serif" font-size="30" font-weight="bold" fill="#000">N</text>
  <!-- Hatch S half -->
  <line x1="70"  y1="230" x2="90"  y2="250" stroke="#000" stroke-width="1.2"/>
  <line x1="70"  y1="260" x2="100" y2="230" stroke="#000" stroke-width="1.2"/>
  <line x1="70"  y1="290" x2="120" y2="240" stroke="#000" stroke-width="1.2"/>
  <line x1="70"  y1="320" x2="125" y2="265" stroke="#000" stroke-width="1.2"/>
  <line x1="70"  y1="350" x2="125" y2="295" stroke="#000" stroke-width="1.2"/>
  <line x1="80"  y1="360" x2="125" y2="315" stroke="#000" stroke-width="1.2"/>
  <line x1="100" y1="360" x2="127" y2="333" stroke="#000" stroke-width="1.2"/>

  <!-- Magnet velocity arrow -->
  <line x1="205" y1="290" x2="255" y2="290" stroke="#000" stroke-width="3"/>
  <polygon points="248,283 260,290 248,297" fill="#000"/>
  <text x="210" y="278" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">v</text>
  <text x="200" y="320" font-family="Georgia,serif" font-size="10" fill="#333">(magnet moves →)</text>

  <!-- ══ Field lines from N pole into coil ══ -->
  <!-- Horizontal field lines -->
  <line x1="200" y1="255" x2="420" y2="255" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <polygon points="412,249 424,255 412,261" fill="#000"/>
  <line x1="200" y1="275" x2="440" y2="275" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <polygon points="432,269 444,275 432,281" fill="#000"/>
  <line x1="200" y1="295" x2="450" y2="295" stroke="#000" stroke-width="2" stroke-dasharray="6,4"/>
  <polygon points="442,289 454,295 442,301" fill="#000"/>
  <line x1="200" y1="315" x2="440" y2="315" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <polygon points="432,309 444,315 432,321" fill="#000"/>
  <line x1="200" y1="335" x2="420" y2="335" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <polygon points="412,329 424,335 412,341" fill="#000"/>
  <!-- B label -->
  <text x="310" y="248" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">B</text>

  <!-- ══ Coil (solenoid cross-section) ══ -->
  <!-- Coil outline — elliptical ends + rectangular body -->
  <rect x="420" y="210" width="160" height="170" fill="#fff" stroke="#000" stroke-width="3"/>
  <!-- Coil windings (horizontal lines inside) -->
  <line x1="420" y1="230" x2="580" y2="230" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="250" x2="580" y2="250" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="270" x2="580" y2="270" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="290" x2="580" y2="290" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="310" x2="580" y2="310" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="330" x2="580" y2="330" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="350" x2="580" y2="350" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="370" x2="580" y2="370" stroke="#000" stroke-width="1.5"/>
  <!-- Front ellipse (left face) -->
  <ellipse cx="420" cy="295" rx="20" ry="85" fill="#fff" stroke="#000" stroke-width="3"/>
  <!-- Back ellipse (right face, dashed) -->
  <ellipse cx="580" cy="295" rx="20" ry="85" fill="#fff" stroke="#000" stroke-width="2" stroke-dasharray="5,4"/>
  <!-- Coil label -->
  <text x="485" y="200" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Coil (N turns)</text>

  <!-- ══ Induced current direction arrows on coil face ══ -->
  <!-- Anticlockwise on left face (Lenz — opposing increasing flux rightward) -->
  <!-- Top arc arrow -->
  <path d="M 420,230 A 20,30 0 0 0 420,260" fill="none" stroke="#000" stroke-width="2.5"/>
  <polygon points="416,258 420,268 424,258" fill="#000"/>
  <!-- Bottom arc arrow -->
  <path d="M 420,330 A 20,30 0 0 1 420,360" fill="none" stroke="#000" stroke-width="2.5"/>
  <polygon points="416,332 420,322 424,332" fill="#000"/>
  <text x="350" y="190" font-family="Georgia,serif" font-size="10" fill="#000">Induced I</text>
  <text x="340" y="204" font-family="Georgia,serif" font-size="10" fill="#000">(anticlockwise)</text>

  <!-- ══ Lead wires to galvanometer ══ -->
  <line x1="420" y1="210" x2="420" y2="150" stroke="#000" stroke-width="2.5"/>
  <line x1="420" y1="150" x2="680" y2="150" stroke="#000" stroke-width="2.5"/>
  <line x1="680" y1="150" x2="680" y2="220" stroke="#000" stroke-width="2.5"/>
  <line x1="580" y1="380" x2="580" y2="450" stroke="#000" stroke-width="2.5"/>
  <line x1="580" y1="450" x2="680" y2="450" stroke="#000" stroke-width="2.5"/>
  <line x1="680" y1="380" x2="680" y2="450" stroke="#000" stroke-width="2.5"/>

  <!-- ══ Galvanometer ══ -->
  <circle cx="680" cy="300" r="60" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="658" y="308" font-family="Georgia,serif" font-size="22" font-weight="bold" fill="#000">G</text>
  <!-- Needle -->
  <line x1="680" y1="300" x2="680" y2="258" stroke="#000" stroke-width="2.5"/>
  <polygon points="675,262 680,250 685,262" fill="#000"/>
  <!-- Scale arc -->
  <path d="M 648,290 A 34,34 0 0 1 712,290" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="668" y="344" font-family="Georgia,serif" font-size="11" fill="#000">Galvanometer</text>

  <!-- ══ Flux annotation ══ -->
  <line x1="450" y1="295" x2="540" y2="295" stroke="#000" stroke-width="2.5"/>
  <polygon points="532,289 544,295 532,301" fill="#000"/>
  <text x="462" y="285" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">Φ increasing</text>

  <!-- ══ Formula / law box ══ -->
  <rect x="60" y="400" width="330" height="110" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="75" y="420" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Faraday's Law:</text>
  <text x="75" y="440" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">ε = −N dΦ/dt</text>
  <text x="75" y="460" font-family="Georgia,serif" font-size="10" fill="#333">Φ = B · A · cos θ   (magnetic flux)</text>
  <text x="75" y="478" font-family="Georgia,serif" font-size="10" fill="#333">Lenz's Law: induced current opposes change in flux</text>
  <text x="75" y="496" font-family="Georgia,serif" font-size="10" fill="#333">More turns N → larger induced EMF</text>

  <!-- ══ Key legend ══ -->
  <rect x="420" y="490" width="300" height="90" rx="5" fill="#fff" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <line x1="432" y1="510" x2="460" y2="510" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="465" y="514" font-family="Georgia,serif" font-size="10" fill="#000">Magnetic field lines (B)</text>
  <text x="432" y="534" font-family="Georgia,serif" font-size="18" fill="#000">↑</text>
  <text x="465" y="538" font-family="Georgia,serif" font-size="10" fill="#000">Induced current direction</text>
  <text x="432" y="560" font-family="Georgia,serif" font-size="10" fill="#000">■</text>
  <text x="465" y="562" font-family="Georgia,serif" font-size="10" fill="#000">Coil cross-section (solenoid)</text>
</svg>`;

  // ─── TRANSFORMER DIAGRAM ──────────────────────────────────────────────────
  // Step-up transformer with primary and secondary coils on iron core
  // Shows: primary/secondary coils, iron core (hatch), turns ratio,
  //        voltage/current labels, flux arrows, AC source symbol
  static transformerSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="250" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Transformer — Step-Up (N₂ &gt; N₁)</text>
  <text x="200" y="46" font-family="Georgia,serif" font-size="11" fill="#333">V₁/V₂ = N₁/N₂ = I₂/I₁   (ideal transformer)</text>

  <!-- ══ Iron core (E-I laminated, shown as rectangle with hatch) ══ -->
  <!-- Core outline: outer rectangle -->
  <rect x="280" y="100" width="340" height="380" rx="4" fill="#fff" stroke="#000" stroke-width="3"/>
  <!-- Core inner window (where flux passes) -->
  <rect x="340" y="160" width="220" height="260" rx="2" fill="#fff" stroke="#000" stroke-width="2"/>
  <!-- Hatch fill for core material (dense diagonal lines) -->
  <!-- Left limb hatch -->
  <line x1="285" y1="105" x2="340" y2="160" stroke="#000" stroke-width="1"/>
  <line x1="285" y1="135" x2="340" y2="190" stroke="#000" stroke-width="1"/>
  <line x1="285" y1="165" x2="340" y2="220" stroke="#000" stroke-width="1"/>
  <line x1="285" y1="195" x2="340" y2="250" stroke="#000" stroke-width="1"/>
  <line x1="285" y1="225" x2="340" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="285" y1="255" x2="340" y2="310" stroke="#000" stroke-width="1"/>
  <line x1="285" y1="285" x2="340" y2="340" stroke="#000" stroke-width="1"/>
  <line x1="285" y1="315" x2="340" y2="370" stroke="#000" stroke-width="1"/>
  <line x1="285" y1="345" x2="340" y2="400" stroke="#000" stroke-width="1"/>
  <line x1="285" y1="375" x2="335" y2="425" stroke="#000" stroke-width="1"/>
  <line x1="285" y1="405" x2="325" y2="445" stroke="#000" stroke-width="1"/>
  <line x1="285" y1="435" x2="310" y2="460" stroke="#000" stroke-width="1"/>
  <!-- Right limb hatch -->
  <line x1="560" y1="105" x2="615" y2="160" stroke="#000" stroke-width="1"/>
  <line x1="560" y1="135" x2="615" y2="190" stroke="#000" stroke-width="1"/>
  <line x1="560" y1="165" x2="615" y2="220" stroke="#000" stroke-width="1"/>
  <line x1="560" y1="195" x2="615" y2="250" stroke="#000" stroke-width="1"/>
  <line x1="560" y1="225" x2="615" y2="280" stroke="#000" stroke-width="1"/>
  <line x1="560" y1="255" x2="615" y2="310" stroke="#000" stroke-width="1"/>
  <line x1="560" y1="285" x2="615" y2="340" stroke="#000" stroke-width="1"/>
  <line x1="560" y1="315" x2="615" y2="370" stroke="#000" stroke-width="1"/>
  <line x1="560" y1="345" x2="615" y2="400" stroke="#000" stroke-width="1"/>
  <line x1="560" y1="375" x2="615" y2="430" stroke="#000" stroke-width="1"/>
  <line x1="560" y1="405" x2="615" y2="455" stroke="#000" stroke-width="1"/>
  <line x1="560" y1="435" x2="610" y2="475" stroke="#000" stroke-width="1"/>
  <!-- Top yoke hatch -->
  <line x1="340" y1="100" x2="375" y2="140" stroke="#000" stroke-width="1"/>
  <line x1="380" y1="100" x2="415" y2="140" stroke="#000" stroke-width="1"/>
  <line x1="420" y1="100" x2="455" y2="140" stroke="#000" stroke-width="1"/>
  <line x1="460" y1="100" x2="495" y2="140" stroke="#000" stroke-width="1"/>
  <line x1="500" y1="100" x2="535" y2="140" stroke="#000" stroke-width="1"/>
  <line x1="540" y1="100" x2="560" y2="120" stroke="#000" stroke-width="1"/>
  <!-- Bottom yoke hatch -->
  <line x1="340" y1="420" x2="375" y2="460" stroke="#000" stroke-width="1"/>
  <line x1="380" y1="420" x2="415" y2="460" stroke="#000" stroke-width="1"/>
  <line x1="420" y1="420" x2="455" y2="460" stroke="#000" stroke-width="1"/>
  <line x1="460" y1="420" x2="495" y2="460" stroke="#000" stroke-width="1"/>
  <line x1="500" y1="420" x2="535" y2="460" stroke="#000" stroke-width="1"/>
  <line x1="540" y1="420" x2="560" y2="440" stroke="#000" stroke-width="1"/>
  <!-- Core label -->
  <text x="415" y="300" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Iron</text>
  <text x="410" y="316" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Core</text>

  <!-- ══ Primary coil (left limb, fewer turns) ══ -->
  <!-- 6 coil loops on left side of left limb -->
  <!-- Each loop: small arc bulging left -->
  <path d="M 280,175 C 248,175 248,195 280,195" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 280,195 C 248,195 248,215 280,215" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 280,215 C 248,215 248,235 280,235" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 280,235 C 248,235 248,255 280,255" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 280,255 C 248,255 248,275 280,275" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 280,275 C 248,275 248,295 280,295" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 280,295 C 248,295 248,315 280,315" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 280,315 C 248,315 248,335 280,335" fill="none" stroke="#000" stroke-width="3"/>
  <!-- Primary terminal wires -->
  <line x1="264" y1="175" x2="264" y2="140" stroke="#000" stroke-width="2.5"/>
  <line x1="264" y1="140" x2="140" y2="140" stroke="#000" stroke-width="2.5"/>
  <line x1="264" y1="335" x2="264" y2="380" stroke="#000" stroke-width="2.5"/>
  <line x1="264" y1="380" x2="140" y2="380" stroke="#000" stroke-width="2.5"/>
  <!-- Primary label -->
  <text x="220" y="262" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Primary</text>
  <text x="220" y="276" font-family="Georgia,serif" font-size="11" fill="#000">N₁ = 100</text>
  <text x="220" y="290" font-family="Georgia,serif" font-size="10" fill="#333">V₁ = 120 V</text>

  <!-- ══ Secondary coil (right limb, more turns) ══ -->
  <!-- 14 coil loops on right side of right limb — smaller spacing -->
  <path d="M 620,170 C 652,170 652,184 620,184" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 620,184 C 652,184 652,198 620,198" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 620,198 C 652,198 652,212 620,212" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 620,212 C 652,212 652,226 620,226" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 620,226 C 652,226 652,240 620,240" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 620,240 C 652,240 652,254 620,254" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 620,254 C 652,254 652,268 620,268" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 620,268 C 652,268 652,282 620,282" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 620,282 C 652,282 652,296 620,296" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 620,296 C 652,296 652,310 620,310" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 620,310 C 652,310 652,324 620,324" fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 620,324 C 652,324 652,338 620,338" fill="none" stroke="#000" stroke-width="3"/>
  <!-- Secondary terminal wires -->
  <line x1="636" y1="170" x2="636" y2="140" stroke="#000" stroke-width="2.5"/>
  <line x1="636" y1="140" x2="780" y2="140" stroke="#000" stroke-width="2.5"/>
  <line x1="636" y1="338" x2="636" y2="380" stroke="#000" stroke-width="2.5"/>
  <line x1="636" y1="380" x2="780" y2="380" stroke="#000" stroke-width="2.5"/>
  <!-- Secondary label -->
  <text x="656" y="262" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Secondary</text>
  <text x="660" y="276" font-family="Georgia,serif" font-size="11" fill="#000">N₂ = 200</text>
  <text x="660" y="290" font-family="Georgia,serif" font-size="10" fill="#333">V₂ = 240 V</text>

  <!-- ══ AC Source on primary side ══ -->
  <circle cx="80" cy="260" r="38" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <!-- Sine wave inside -->
  <path d="M 52,260 C 57,245 65,245 70,260 C 75,275 83,275 88,260 C 93,245 101,245 106,260"
        fill="none" stroke="#000" stroke-width="2"/>
  <text x="56" y="316" font-family="Georgia,serif" font-size="10" fill="#000">AC Source</text>
  <text x="60" y="330" font-family="Georgia,serif" font-size="10" fill="#000">(ε, f = 50Hz)</text>
  <!-- Source to primary wires -->
  <line x1="80" y1="222" x2="80" y2="140" stroke="#000" stroke-width="2.5"/>
  <line x1="80" y1="140" x2="140" y2="140" stroke="#000" stroke-width="2.5"/>
  <line x1="80" y1="298" x2="80" y2="380" stroke="#000" stroke-width="2.5"/>
  <line x1="80" y1="380" x2="140" y2="380" stroke="#000" stroke-width="2.5"/>

  <!-- ══ Load on secondary side ══ -->
  <!-- Resistor (zigzag) -->
  <polyline points="780,140 780,180 790,196 800,180 810,196 820,180 830,196 840,180 850,196 860,180 860,380 780,380"
            fill="none" stroke="#000" stroke-width="2.5" stroke-linejoin="round"/>
  <text x="828" y="270" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">R</text>
  <text x="820" y="284" font-family="Georgia,serif" font-size="10" fill="#000">Load</text>

  <!-- ══ Flux circulation arrows in core ══ -->
  <path d="M 360,290 Q 450,250 540,290" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="7,4"/>
  <polygon points="533,283 543,291 534,299" fill="#000"/>
  <path d="M 540,310 Q 450,350 360,310" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="7,4"/>
  <polygon points="367,303 357,311 366,319" fill="#000"/>
  <text x="418" y="270" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">Φ</text>

  <!-- ══ Formula box ══ -->
  <rect x="60" y="420" width="420" height="130" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="75" y="440" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Transformer Equations:</text>
  <text x="75" y="460" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">V₁/V₂ = N₁/N₂</text>
  <text x="75" y="480" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">I₁/I₂ = N₂/N₁</text>
  <text x="75" y="500" font-family="Georgia,serif" font-size="10" fill="#333">Ideal: V₁I₁ = V₂I₂  (power conserved)</text>
  <text x="75" y="518" font-family="Georgia,serif" font-size="10" fill="#333">Step-up: N₂ &gt; N₁ → V₂ &gt; V₁, I₂ &lt; I₁</text>
  <text x="75" y="536" font-family="Georgia,serif" font-size="10" fill="#333">Step-down: N₂ &lt; N₁ → V₂ &lt; V₁, I₂ &gt; I₁</text>
</svg>`;

  // ─── WAVE INTERFERENCE DIAGRAM ────────────────────────────────────────────
  // Constructive and destructive interference of two waves and resultant
  // Shows: Wave 1, Wave 2 (phase π), resultant (zero for destructive),
  //        node/antinode labels, phase difference annotation
  static waveInterferenceSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="240" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Wave Interference — Superposition Principle</text>
  <text x="180" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Resultant = Wave 1 + Wave 2   (principle of superposition)</text>

  <!-- ══ SECTION A — CONSTRUCTIVE INTERFERENCE (top) ══ -->
  <text x="30" y="78" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">A. Constructive Interference  (phase difference = 0, 2π, 4π…)</text>

  <!-- Equilibrium lines -->
  <line x1="30" y1="110" x2="860" y2="110" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="30" y1="150" x2="860" y2="150" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="30" y1="190" x2="860" y2="190" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>

  <!-- Wave 1 (solid) — amplitude 25, wavelength 160, centre y=110 -->
  <path d="M 30,110 C 50,110 50,85 70,85 C 90,85 90,110 110,110 C 130,110 130,135 150,135
           C 170,135 170,110 190,110 C 210,110 210,85 230,85 C 250,85 250,110 270,110
           C 290,110 290,135 310,135 C 330,135 330,110 350,110 C 370,110 370,85 390,85
           C 410,85 410,110 430,110 C 450,110 450,135 470,135 C 490,135 490,110 510,110
           C 530,110 530,85 550,85 C 570,85 570,110 590,110 C 610,110 610,135 630,135
           C 650,135 650,110 670,110 C 690,110 690,85 710,85 C 730,85 730,110 750,110
           C 770,110 770,135 790,135 C 810,135 810,110 830,110"
        fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="840" y="114" font-family="Georgia,serif" font-size="10" fill="#000">W₁</text>

  <!-- Wave 2 (dashed) — same phase -->
  <path d="M 30,150 C 50,150 50,125 70,125 C 90,125 90,150 110,150 C 130,150 130,175 150,175
           C 170,175 170,150 190,150 C 210,150 210,125 230,125 C 250,125 250,150 270,150
           C 290,150 290,175 310,175 C 330,175 330,150 350,150 C 370,150 370,125 390,125
           C 410,125 410,150 430,150 C 450,150 450,175 470,175 C 490,175 490,150 510,150
           C 530,150 530,125 550,125 C 570,125 570,150 590,150 C 610,150 610,175 630,175
           C 650,175 650,150 670,150 C 690,150 690,125 710,125 C 730,125 730,150 750,150
           C 770,150 770,175 790,175 C 810,175 810,150 830,150"
        fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="8,5"/>
  <text x="840" y="154" font-family="Georgia,serif" font-size="10" fill="#000">W₂</text>

  <!-- Resultant (thick) — amplitude doubled (50px) -->
  <path d="M 30,190 C 50,190 50,140 70,140 C 90,140 90,190 110,190 C 130,190 130,240 150,240
           C 170,240 170,190 190,190 C 210,190 210,140 230,140 C 250,140 250,190 270,190
           C 290,190 290,240 310,240 C 330,240 330,190 350,190 C 370,190 370,140 390,140
           C 410,140 410,190 430,190 C 450,190 450,240 470,240 C 490,240 490,190 510,190
           C 530,190 530,140 550,140 C 570,140 570,190 590,190 C 610,190 610,240 630,240
           C 650,240 650,190 670,190 C 690,190 690,140 710,140 C 730,140 730,190 750,190
           C 770,190 770,240 790,240 C 810,240 810,190 830,190"
        fill="none" stroke="#000" stroke-width="4"/>
  <text x="840" y="194" font-family="Georgia,serif" font-size="10" fill="#000">R</text>
  <text x="840" y="206" font-family="Georgia,serif" font-size="10" fill="#000">(2A)</text>

  <!-- Amplitude annotation -->
  <line x1="22" y1="190" x2="22" y2="140" stroke="#000" stroke-width="1.5"/>
  <polygon points="18,144 22,134 26,144" fill="#000"/>
  <polygon points="18,186 22,196 26,186" fill="#000"/>
  <text x="2" y="168" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">2A</text>

  <!-- ══ SECTION B — DESTRUCTIVE INTERFERENCE (bottom) ══ -->
  <text x="30" y="290" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">B. Destructive Interference  (phase difference = π, 3π, 5π…)</text>

  <!-- Equilibrium lines -->
  <line x1="30" y1="320" x2="860" y2="320" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="30" y1="360" x2="860" y2="360" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="30" y1="400" x2="860" y2="400" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>

  <!-- Wave 1 (solid) -->
  <path d="M 30,320 C 50,320 50,295 70,295 C 90,295 90,320 110,320 C 130,320 130,345 150,345
           C 170,345 170,320 190,320 C 210,320 210,295 230,295 C 250,295 250,320 270,320
           C 290,320 290,345 310,345 C 330,345 330,320 350,320 C 370,320 370,295 390,295
           C 410,295 410,320 430,320 C 450,320 450,345 470,345 C 490,345 490,320 510,320
           C 530,320 530,295 550,295 C 570,295 570,320 590,320 C 610,320 610,345 630,345
           C 650,345 650,320 670,320 C 690,320 690,295 710,295 C 730,295 730,320 750,320
           C 770,320 770,345 790,345 C 810,345 810,320 830,320"
        fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="840" y="324" font-family="Georgia,serif" font-size="10" fill="#000">W₁</text>

  <!-- Wave 2 (dashed, phase π — inverted) -->
  <path d="M 30,360 C 50,360 50,385 70,385 C 90,385 90,360 110,360 C 130,360 130,335 150,335
           C 170,335 170,360 190,360 C 210,360 210,385 230,385 C 250,385 250,360 270,360
           C 290,360 290,335 310,335 C 330,335 330,360 350,360 C 370,360 370,385 390,385
           C 410,385 410,360 430,360 C 450,360 450,335 470,335 C 490,335 490,360 510,360
           C 530,360 530,385 550,385 C 570,385 570,360 590,360 C 610,360 610,335 630,335
           C 650,335 650,360 670,360 C 690,360 690,385 710,385 C 730,385 730,360 750,360
           C 770,360 770,335 790,335 C 810,335 810,360 830,360"
        fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="8,5"/>
  <text x="840" y="364" font-family="Georgia,serif" font-size="10" fill="#000">W₂</text>

  <!-- Resultant — flat line (zero) -->
  <line x1="30" y1="400" x2="830" y2="400" stroke="#000" stroke-width="4"/>
  <text x="840" y="404" font-family="Georgia,serif" font-size="10" fill="#000">R=0</text>

  <!-- Phase difference label -->
  <!-- Arrow showing π shift between crests -->
  <line x1="70" y1="270" x2="150" y2="270" stroke="#000" stroke-width="1.5"/>
  <polygon points="66,264 56,270 66,276" fill="#000"/>
  <polygon points="154,264 164,270 154,276" fill="#000"/>
  <text x="90" y="265" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">λ/2 (= π)</text>

  <!-- ══ Nodes label for destructive ══ -->
  <!-- Node ticks on flat resultant -->
  <line x1="30"  y1="394" x2="30"  y2="406" stroke="#000" stroke-width="2"/>
  <line x1="110" y1="394" x2="110" y2="406" stroke="#000" stroke-width="2"/>
  <line x1="190" y1="394" x2="190" y2="406" stroke="#000" stroke-width="2"/>
  <line x1="270" y1="394" x2="270" y2="406" stroke="#000" stroke-width="2"/>
  <text x="80" y="420" font-family="Georgia,serif" font-size="10" fill="#000">node</text>
  <text x="160" y="420" font-family="Georgia,serif" font-size="10" fill="#000">node</text>

  <!-- ══ Legend ══ -->
  <rect x="30" y="450" width="500" height="80" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="45" y="470" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Legend:</text>
  <line x1="45" y1="488" x2="95" y2="488" stroke="#000" stroke-width="2.5"/>
  <text x="100" y="492" font-family="Georgia,serif" font-size="10" fill="#000">Wave 1 (A = 25 px)</text>
  <line x1="45" y1="508" x2="95" y2="508" stroke="#000" stroke-width="2.5" stroke-dasharray="8,5"/>
  <text x="100" y="512" font-family="Georgia,serif" font-size="10" fill="#000">Wave 2 (A = 25 px, phase shifted)</text>
  <line x1="280" y1="488" x2="330" y2="488" stroke="#000" stroke-width="4"/>
  <text x="335" y="492" font-family="Georgia,serif" font-size="10" fill="#000">Resultant wave</text>
  <text x="280" y="512" font-family="Georgia,serif" font-size="10" fill="#000">Constructive: A_R = 2A   |   Destructive: A_R = 0</text>

  <!-- ══ Formula box ══ -->
  <rect x="560" y="450" width="310" height="80" rx="5" fill="#fff" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="575" y="470" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Superposition Principle:</text>
  <text x="575" y="490" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">y = y₁ + y₂</text>
  <text x="575" y="510" font-family="Georgia,serif" font-size="10" fill="#333">Constructive: Δφ = 2nπ  (n = 0,1,2…)</text>
  <text x="575" y="526" font-family="Georgia,serif" font-size="10" fill="#333">Destructive:  Δφ = (2n+1)π</text>
</svg>`;

  // ─── SOUND WAVE PRESSURE DIAGRAM ──────────────────────────────────────────
  // Pressure variation in a longitudinal sound wave with compression/rarefaction
  // Shows: particle band diagram, sinusoidal pressure curve, labels
  static soundWavePressureSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="220" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Sound Wave — Pressure Variation</text>
  <text x="180" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Longitudinal wave: particles oscillate parallel to propagation direction</text>

  <!-- ══ Part 1: Particle / compression-rarefaction band diagram ══ -->
  <text x="30" y="76" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">1. Particle Displacements (compression C and rarefaction R)</text>

  <!-- Channel border -->
  <rect x="30" y="88" width="840" height="80" fill="#fff" stroke="#000" stroke-width="2.5" rx="3"/>

  <!-- Compression bands: C1 x=30-120, C2 x=230-320, C3 x=430-520, C4 x=630-720 -->
  <!-- C1 -->
  <rect x="30" y="88" width="90" height="80" fill="none" stroke="none"/>
  <line x1="38"  y1="88" x2="38"  y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="48"  y1="88" x2="48"  y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="58"  y1="88" x2="58"  y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="68"  y1="88" x2="68"  y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="78"  y1="88" x2="78"  y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="88"  y1="88" x2="88"  y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="98"  y1="88" x2="98"  y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="108" y1="88" x2="108" y2="168" stroke="#000" stroke-width="2.5"/>
  <!-- R1 sparse: x=120-230 -->
  <line x1="140" y1="88" x2="140" y2="168" stroke="#000" stroke-width="1"/>
  <line x1="175" y1="88" x2="175" y2="168" stroke="#000" stroke-width="1"/>
  <line x1="210" y1="88" x2="210" y2="168" stroke="#000" stroke-width="1"/>
  <!-- C2 -->
  <line x1="238" y1="88" x2="238" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="248" y1="88" x2="248" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="258" y1="88" x2="258" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="268" y1="88" x2="268" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="278" y1="88" x2="278" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="288" y1="88" x2="288" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="298" y1="88" x2="298" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="308" y1="88" x2="308" y2="168" stroke="#000" stroke-width="2.5"/>
  <!-- R2 -->
  <line x1="340" y1="88" x2="340" y2="168" stroke="#000" stroke-width="1"/>
  <line x1="375" y1="88" x2="375" y2="168" stroke="#000" stroke-width="1"/>
  <line x1="410" y1="88" x2="410" y2="168" stroke="#000" stroke-width="1"/>
  <!-- C3 -->
  <line x1="438" y1="88" x2="438" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="448" y1="88" x2="448" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="458" y1="88" x2="458" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="468" y1="88" x2="468" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="478" y1="88" x2="478" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="488" y1="88" x2="488" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="498" y1="88" x2="498" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="508" y1="88" x2="508" y2="168" stroke="#000" stroke-width="2.5"/>
  <!-- R3 -->
  <line x1="540" y1="88" x2="540" y2="168" stroke="#000" stroke-width="1"/>
  <line x1="575" y1="88" x2="575" y2="168" stroke="#000" stroke-width="1"/>
  <line x1="610" y1="88" x2="610" y2="168" stroke="#000" stroke-width="1"/>
  <!-- C4 -->
  <line x1="638" y1="88" x2="638" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="648" y1="88" x2="648" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="658" y1="88" x2="658" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="668" y1="88" x2="668" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="678" y1="88" x2="678" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="688" y1="88" x2="688" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="698" y1="88" x2="698" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="708" y1="88" x2="708" y2="168" stroke="#000" stroke-width="2.5"/>
  <!-- R4 -->
  <line x1="740" y1="88" x2="740" y2="168" stroke="#000" stroke-width="1"/>
  <line x1="775" y1="88" x2="775" y2="168" stroke="#000" stroke-width="1"/>
  <line x1="810" y1="88" x2="810" y2="168" stroke="#000" stroke-width="1"/>

  <!-- C/R labels below channel -->
  <text x="62"  y="184" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">C</text>
  <text x="167" y="184" font-family="Georgia,serif" font-size="10" fill="#000">R</text>
  <text x="265" y="184" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">C</text>
  <text x="370" y="184" font-family="Georgia,serif" font-size="10" fill="#000">R</text>
  <text x="465" y="184" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">C</text>
  <text x="570" y="184" font-family="Georgia,serif" font-size="10" fill="#000">R</text>
  <text x="665" y="184" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">C</text>
  <text x="768" y="184" font-family="Georgia,serif" font-size="10" fill="#000">R</text>

  <!-- Propagation arrow -->
  <line x1="30" y1="78" x2="840" y2="78" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <polygon points="832,72 844,78 832,84" fill="#000"/>
  <text x="700" y="72" font-family="Georgia,serif" font-size="10" fill="#000">wave propagation →</text>

  <!-- ══ Part 2: Pressure variation curve ══ -->
  <text x="30" y="215" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">2. Pressure Variation p(x)</text>

  <!-- Axes -->
  <line x1="30" y1="360" x2="870" y2="360" stroke="#000" stroke-width="2"/>
  <polygon points="862,354 874,360 862,366" fill="#000"/>
  <text x="876" y="364" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">x</text>
  <line x1="30" y1="440" x2="30" y2="225" stroke="#000" stroke-width="2"/>
  <polygon points="24,229 30,217 36,229" fill="#000"/>
  <text x="10" y="215" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">p</text>

  <!-- Pressure sinusoid: amplitude 90px, wavelength 200px, centre y=360, crests at compressions -->
  <path d="M 30,360
           C 50,360 50,270 75,270 C 100,270 100,360 125,360 C 150,360 150,450 175,450 C 200,450 200,360 225,360
           C 245,360 245,270 275,270 C 305,270 305,360 325,360 C 345,360 345,450 375,450 C 405,450 405,360 425,360
           C 445,360 445,270 475,270 C 505,270 505,360 525,360 C 545,360 545,450 575,450 C 605,450 605,360 625,360
           C 645,360 645,270 675,270 C 705,270 705,360 725,360 C 745,360 745,450 775,450 C 805,450 805,360 825,360"
        fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Zero pressure line label -->
  <text x="840" y="364" font-family="Georgia,serif" font-size="10" fill="#000">p₀ (atm)</text>

  <!-- Amplitude annotation -->
  <line x1="20" y1="360" x2="20" y2="270" stroke="#000" stroke-width="1.5"/>
  <polygon points="16,274 20,264 24,274" fill="#000"/>
  <polygon points="16,356 20,366 24,356" fill="#000"/>
  <text x="2" y="318" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">ΔP</text>

  <!-- Wavelength annotation -->
  <line x1="75" y1="250" x2="275" y2="250" stroke="#000" stroke-width="1.5"/>
  <polygon points="79,244 69,250 79,256" fill="#000"/>
  <polygon points="271,244 281,250 271,256" fill="#000"/>
  <text x="160" y="245" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">λ</text>

  <!-- Labels on curve crests/troughs -->
  <text x="60"  y="263" font-family="Georgia,serif" font-size="10" fill="#000">high p (C)</text>
  <text x="153" y="462" font-family="Georgia,serif" font-size="10" fill="#000">low p (R)</text>
  <text x="260" y="263" font-family="Georgia,serif" font-size="10" fill="#000">high p (C)</text>

  <!-- Vertical alignment guides between band diagram and curve -->
  <line x1="75"  y1="168" x2="75"  y2="270" stroke="#000" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="175" y1="168" x2="175" y2="450" stroke="#000" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="275" y1="168" x2="275" y2="270" stroke="#000" stroke-width="1" stroke-dasharray="4,4"/>

  <!-- ══ Formula box ══ -->
  <rect x="30" y="476" width="500" height="100" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="45" y="496" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Key Relationships:</text>
  <text x="45" y="516" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">v = fλ    (wave speed = frequency × wavelength)</text>
  <text x="45" y="536" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">v_sound ≈ 340 m/s  (air, 20°C)</text>
  <text x="45" y="556" font-family="Georgia,serif" font-size="10" fill="#333">Intensity I ∝ (ΔP)²   |   I (dB) = 10 log₁₀(I/I₀)</text>

  <!-- Speed note -->
  <rect x="560" y="476" width="310" height="100" rx="5" fill="#fff" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="575" y="496" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Compressions → high pressure</text>
  <text x="575" y="514" font-family="Georgia,serif" font-size="11" fill="#000">Rarefactions → low pressure</text>
  <text x="575" y="534" font-family="Georgia,serif" font-size="10" fill="#333">Pressure leads displacement by π/2</text>
  <text x="575" y="554" font-family="Georgia,serif" font-size="10" fill="#333">Human hearing: 20 Hz – 20 000 Hz</text>
</svg>`;

  // ─── DOPPLER EFFECT DIAGRAM ───────────────────────────────────────────────
  // Wavefront compression (ahead) and expansion (behind) due to moving source
  // Shows: moving source, circular wavefronts, observers, frequency labels
  static dopplerEffectSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="240" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Doppler Effect — Moving Sound Source</text>
  <text x="160" y="46" font-family="Georgia,serif" font-size="11" fill="#333">f_obs = f_s × (v ± v_obs) / (v ∓ v_s)   (sign convention: + toward, − away)</text>

  <!-- ══ Source velocity arrow ══ -->
  <text x="380" y="80" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Source S</text>
  <circle cx="450" cy="300" r="16" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="442" y="305" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">S</text>
  <!-- Velocity arrow -->
  <line x1="466" y1="300" x2="540" y2="300" stroke="#000" stroke-width="3"/>
  <polygon points="533,293 545,300 533,307" fill="#000"/>
  <text x="490" y="288" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">v_s →</text>

  <!-- ══ Wavefronts (circles centred at earlier source positions) ══ -->
  <!-- Source moves right; emit wavefronts from past positions (moving left) -->
  <!-- The circles are compressed ahead (right) and expanded behind (left) -->
  <!-- Wavefront 1 (oldest, largest, centre ~380) -->
  <circle cx="370" cy="300" r="195" fill="none" stroke="#000" stroke-width="2.5"/>
  <!-- Wavefront 2 -->
  <circle cx="395" cy="300" r="145" fill="none" stroke="#000" stroke-width="2.5"/>
  <!-- Wavefront 3 -->
  <circle cx="420" cy="300" r="95"  fill="none" stroke="#000" stroke-width="2.5"/>
  <!-- Wavefront 4 (most recent, smallest) -->
  <circle cx="440" cy="300" r="42"  fill="none" stroke="#000" stroke-width="2.5"/>

  <!-- Compression label (ahead, right) -->
  <text x="490" y="380" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Compressed</text>
  <text x="490" y="394" font-family="Georgia,serif" font-size="11" fill="#000">wavefronts</text>
  <text x="490" y="408" font-family="Georgia,serif" font-size="11" fill="#000">→ higher f</text>

  <!-- Rarefaction label (behind, left) -->
  <text x="60" y="380" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Expanded</text>
  <text x="60" y="394" font-family="Georgia,serif" font-size="11" fill="#000">wavefronts</text>
  <text x="60" y="408" font-family="Georgia,serif" font-size="11" fill="#000">→ lower f</text>

  <!-- ══ Observer A (ahead) ══ -->
  <rect x="730" y="276" width="50" height="48" rx="5" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="738" y="296" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Obs A</text>
  <text x="738" y="312" font-family="Georgia,serif" font-size="10" fill="#000">f_A &gt; f_s</text>
  <!-- Ear symbol -->
  <text x="780" y="306" font-family="Georgia,serif" font-size="18" fill="#000">👂</text>

  <!-- ══ Observer B (behind) ══ -->
  <rect x="80" y="276" width="50" height="48" rx="5" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="88" y="296" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Obs B</text>
  <text x="88" y="312" font-family="Georgia,serif" font-size="10" fill="#000">f_B &lt; f_s</text>

  <!-- Wavelength comparison arrows -->
  <!-- Ahead: short λ -->
  <line x1="596" y1="270" x2="638" y2="270" stroke="#000" stroke-width="1.5"/>
  <polygon points="600,264 590,270 600,276" fill="#000"/>
  <polygon points="634,264 644,270 634,276" fill="#000"/>
  <text x="604" y="264" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">λ_A (short)</text>

  <!-- Behind: long λ -->
  <line x1="140" y1="270" x2="230" y2="270" stroke="#000" stroke-width="1.5"/>
  <polygon points="144,264 134,270 144,276" fill="#000"/>
  <polygon points="226,264 236,270 226,276" fill="#000"/>
  <text x="152" y="264" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">λ_B (long)</text>

  <!-- ══ Stationary source comparison (top inset) ══ -->
  <rect x="30" y="90" width="280" height="120" rx="5" fill="#fff" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="45" y="110" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Stationary Source (ref.):</text>
  <circle cx="170" cy="152" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="164" y="157" font-family="Georgia,serif" font-size="11" fill="#000">S</text>
  <circle cx="170" cy="152" r="35" fill="none" stroke="#000" stroke-width="1.5"/>
  <circle cx="170" cy="152" r="55" fill="none" stroke="#000" stroke-width="1.5"/>
  <circle cx="170" cy="152" r="75" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="45" y="200" font-family="Georgia,serif" font-size="10" fill="#333">Symmetric wavefronts → f same all directions</text>

  <!-- ══ Formula box ══ -->
  <rect x="560" y="430" width="310" height="150" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="575" y="450" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Doppler Formula:</text>
  <text x="575" y="472" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">f_obs = f_s · (v + v_obs) / (v − v_s)</text>
  <text x="575" y="492" font-family="Georgia,serif" font-size="10" fill="#333">v = speed of sound (≈340 m/s in air)</text>
  <text x="575" y="510" font-family="Georgia,serif" font-size="10" fill="#333">v_s = source speed</text>
  <text x="575" y="528" font-family="Georgia,serif" font-size="10" fill="#333">v_obs = observer speed</text>
  <text x="575" y="546" font-family="Georgia,serif" font-size="10" fill="#333">Source approaching: f_obs &gt; f_s</text>
  <text x="575" y="564" font-family="Georgia,serif" font-size="10" fill="#333">Source receding:   f_obs &lt; f_s</text>

  <!-- ══ Applications note ══ -->
  <rect x="30" y="490" width="500" height="90" rx="5" fill="#fff" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="45" y="510" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Applications:</text>
  <text x="45" y="530" font-family="Georgia,serif" font-size="10" fill="#333">• Ambulance siren pitch shift    • Radar speed guns</text>
  <text x="45" y="548" font-family="Georgia,serif" font-size="10" fill="#333">• Redshift / blueshift of stars   • Medical ultrasound imaging</text>
  <text x="45" y="566" font-family="Georgia,serif" font-size="10" fill="#333">• Weather radar (storm velocity)  • Sonar (submarine detection)</text>
</svg>`;

  // ─── STANDING WAVES DIAGRAM ───────────────────────────────────────────────
  // First three harmonics on a fixed string with nodes and antinodes
  static standingWavesSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="240" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Standing Waves — Harmonics on a Fixed String</text>
  <text x="160" y="46" font-family="Georgia,serif" font-size="11" fill="#333">f_n = n · v / (2L)   (n = 1, 2, 3…)   Nodes (N) fixed, Antinodes (A) max displacement</text>

  <!-- ══ String length annotation ══ -->
  <line x1="80" y1="62" x2="820" y2="62" stroke="#000" stroke-width="1.5"/>
  <polygon points="84,56 74,62 84,68" fill="#000"/>
  <polygon points="816,56 826,62 816,68" fill="#000"/>
  <text x="430" y="57" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">L</text>

  <!-- ══ HARMONIC 1 — Fundamental (n=1) ══ -->
  <!-- Fixed walls -->
  <rect x="68" y="120" width="14" height="80" fill="#000"/>
  <rect x="818" y="120" width="14" height="80" fill="#000"/>
  <!-- Hatch on walls -->
  <line x1="68" y1="120" x2="55" y2="107" stroke="#000" stroke-width="1.5"/>
  <line x1="68" y1="135" x2="55" y2="122" stroke="#000" stroke-width="1.5"/>
  <line x1="68" y1="150" x2="55" y2="137" stroke="#000" stroke-width="1.5"/>
  <line x1="68" y1="165" x2="55" y2="152" stroke="#000" stroke-width="1.5"/>
  <line x1="68" y1="180" x2="55" y2="167" stroke="#000" stroke-width="1.5"/>
  <line x1="68" y1="195" x2="55" y2="182" stroke="#000" stroke-width="1.5"/>
  <line x1="832" y1="120" x2="845" y2="107" stroke="#000" stroke-width="1.5"/>
  <line x1="832" y1="135" x2="845" y2="122" stroke="#000" stroke-width="1.5"/>
  <line x1="832" y1="150" x2="845" y2="137" stroke="#000" stroke-width="1.5"/>
  <line x1="832" y1="165" x2="845" y2="152" stroke="#000" stroke-width="1.5"/>
  <line x1="832" y1="180" x2="845" y2="167" stroke="#000" stroke-width="1.5"/>
  <line x1="832" y1="195" x2="845" y2="182" stroke="#000" stroke-width="1.5"/>

  <text x="22" y="164" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">n=1</text>
  <text x="22" y="178" font-family="Georgia,serif" font-size="10" fill="#000">(fund.)</text>
  <!-- Half-sine (arch) -->
  <path d="M 82,160 C 250,160 250,100 450,100 C 650,100 650,160 818,160"
        fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 82,160 C 250,160 250,220 450,220 C 650,220 650,160 818,160"
        fill="none" stroke="#000" stroke-width="3" stroke-dasharray="7,4"/>
  <!-- Equilibrium line -->
  <line x1="82" y1="160" x2="818" y2="160" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4"/>
  <!-- Nodes (filled circles) -->
  <circle cx="82"  cy="160" r="7" fill="#000"/>
  <circle cx="818" cy="160" r="7" fill="#000"/>
  <text x="76"  y="184" font-family="Georgia,serif" font-size="10" fill="#000">N</text>
  <text x="812" y="184" font-family="Georgia,serif" font-size="10" fill="#000">N</text>
  <!-- Antinode (open circle) -->
  <circle cx="450" cy="160" r="7" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="444" y="184" font-family="Georgia,serif" font-size="10" fill="#000">A</text>
  <!-- λ label -->
  <text x="430" y="235" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">λ₁ = 2L,  f₁ = v/2L</text>

  <!-- ══ HARMONIC 2 (n=2) ══ -->
  <rect x="68" y="280" width="14" height="80" fill="#000"/>
  <rect x="818" y="280" width="14" height="80" fill="#000"/>
  <text x="22" y="324" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">n=2</text>
  <text x="22" y="338" font-family="Georgia,serif" font-size="10" fill="#000">(1st ov.)</text>
  <!-- Two half-arches -->
  <path d="M 82,320 C 210,320 210,268 266,268 C 322,268 322,320 450,320"
        fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 82,320 C 210,320 210,372 266,372 C 322,372 322,320 450,320"
        fill="none" stroke="#000" stroke-width="3" stroke-dasharray="7,4"/>
  <path d="M 450,320 C 578,320 578,268 634,268 C 690,268 690,320 818,320"
        fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 450,320 C 578,320 578,372 634,372 C 690,372 372,320 818,320"
        fill="none" stroke="#000" stroke-width="3" stroke-dasharray="7,4"/>
  <line x1="82" y1="320" x2="818" y2="320" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4"/>
  <!-- Nodes -->
  <circle cx="82"  cy="320" r="7" fill="#000"/>
  <circle cx="450" cy="320" r="7" fill="#000"/>
  <circle cx="818" cy="320" r="7" fill="#000"/>
  <text x="76"  y="344" font-family="Georgia,serif" font-size="10" fill="#000">N</text>
  <text x="444" y="344" font-family="Georgia,serif" font-size="10" fill="#000">N</text>
  <text x="812" y="344" font-family="Georgia,serif" font-size="10" fill="#000">N</text>
  <!-- Antinodes -->
  <circle cx="266" cy="320" r="7" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <circle cx="634" cy="320" r="7" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="260" y="344" font-family="Georgia,serif" font-size="10" fill="#000">A</text>
  <text x="628" y="344" font-family="Georgia,serif" font-size="10" fill="#000">A</text>
  <text x="390" y="390" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">λ₂ = L,  f₂ = 2f₁</text>

  <!-- ══ HARMONIC 3 (n=3) ══ -->
  <rect x="68" y="430" width="14" height="80" fill="#000"/>
  <rect x="818" y="430" width="14" height="80" fill="#000"/>
  <text x="22" y="474" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">n=3</text>
  <text x="22" y="488" font-family="Georgia,serif" font-size="10" fill="#000">(2nd ov.)</text>
  <!-- Three arches — nodes at 82, 328, 574, 818; antinodes at 205, 451, 696 -->
  <path d="M 82,468 C 164,468 164,428 205,428 C 246,428 246,468 328,468"
        fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 82,468 C 164,468 164,508 205,508 C 246,508 246,468 328,468"
        fill="none" stroke="#000" stroke-width="3" stroke-dasharray="7,4"/>
  <path d="M 328,468 C 410,468 410,428 451,428 C 492,428 492,468 574,468"
        fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 328,468 C 410,468 410,508 451,508 C 492,508 492,468 574,468"
        fill="none" stroke="#000" stroke-width="3" stroke-dasharray="7,4"/>
  <path d="M 574,468 C 656,468 656,428 696,428 C 736,428 736,468 818,468"
        fill="none" stroke="#000" stroke-width="3"/>
  <path d="M 574,468 C 656,468 656,508 696,508 C 736,508 736,468 818,468"
        fill="none" stroke="#000" stroke-width="3" stroke-dasharray="7,4"/>
  <line x1="82" y1="468" x2="818" y2="468" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4"/>
  <!-- Nodes -->
  <circle cx="82"  cy="468" r="7" fill="#000"/>
  <circle cx="328" cy="468" r="7" fill="#000"/>
  <circle cx="574" cy="468" r="7" fill="#000"/>
  <circle cx="818" cy="468" r="7" fill="#000"/>
  <text x="76"  y="492" font-family="Georgia,serif" font-size="10" fill="#000">N</text>
  <text x="322" y="492" font-family="Georgia,serif" font-size="10" fill="#000">N</text>
  <text x="568" y="492" font-family="Georgia,serif" font-size="10" fill="#000">N</text>
  <text x="812" y="492" font-family="Georgia,serif" font-size="10" fill="#000">N</text>
  <!-- Antinodes -->
  <circle cx="205" cy="468" r="7" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <circle cx="451" cy="468" r="7" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <circle cx="696" cy="468" r="7" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="199" y="492" font-family="Georgia,serif" font-size="10" fill="#000">A</text>
  <text x="445" y="492" font-family="Georgia,serif" font-size="10" fill="#000">A</text>
  <text x="690" y="492" font-family="Georgia,serif" font-size="10" fill="#000">A</text>
  <text x="370" y="540" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">λ₃ = 2L/3,  f₃ = 3f₁</text>

  <!-- Legend -->
  <circle cx="620" cy="560" r="7" fill="#000"/>
  <text x="632" y="564" font-family="Georgia,serif" font-size="10" fill="#000">Node (N) — zero displacement</text>
  <circle cx="620" cy="578" r="7" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="632" y="582" font-family="Georgia,serif" font-size="10" fill="#000">Antinode (A) — max displacement</text>
</svg>`;

  // ─── WAVEFRONT DIAGRAM ────────────────────────────────────────────────────
  // Plane and circular wavefronts with rays
  static wavefrontDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="180" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Wavefront Propagation — Point and Plane Sources</text>
  <text x="100" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Wavefronts are surfaces of equal phase. Rays are perpendicular to wavefronts.</text>

  <!-- ══ LEFT: Circular wavefronts from point source ══ -->
  <text x="50" y="76" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">A. Point Source — Circular Wavefronts</text>

  <!-- Point source -->
  <circle cx="180" cy="310" r="8" fill="#000"/>
  <text x="188" y="316" font-family="Georgia,serif" font-size="11" fill="#000">S (source)</text>

  <!-- Circular wavefronts (concentric, expanding outward) -->
  <circle cx="180" cy="310" r="40"  fill="none" stroke="#000" stroke-width="2.5"/>
  <circle cx="180" cy="310" r="80"  fill="none" stroke="#000" stroke-width="2.5"/>
  <circle cx="180" cy="310" r="120" fill="none" stroke="#000" stroke-width="2.5"/>
  <circle cx="180" cy="310" r="160" fill="none" stroke="#000" stroke-width="2.5"/>
  <circle cx="180" cy="310" r="200" fill="none" stroke="#000" stroke-width="2.5"/>

  <!-- Rays (radial lines outward) -->
  <line x1="180" y1="310" x2="180" y2="105" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <polygon points="175,109 180,99 185,109" fill="#000"/>
  <line x1="180" y1="310" x2="180" y2="515" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <polygon points="175,511 180,521 185,511" fill="#000"/>
  <line x1="180" y1="310" x2="375" y2="310" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <polygon points="371,305 381,310 371,315" fill="#000"/>
  <line x1="180" y1="310" x2="43" y2="310" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <!-- Diagonal rays -->
  <line x1="180" y1="310" x2="321" y2="169" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <polygon points="315,173 323,163 325,174" fill="#000"/>
  <line x1="180" y1="310" x2="321" y2="451" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <polygon points="315,447 323,457 325,446" fill="#000"/>
  <line x1="180" y1="310" x2="39" y2="169" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="180" y1="310" x2="39" y2="451" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>

  <!-- Labels on wavefronts -->
  <text x="222" y="274" font-family="Georgia,serif" font-size="9" fill="#000">W₁</text>
  <text x="254" y="244" font-family="Georgia,serif" font-size="9" fill="#000">W₂</text>
  <text x="286" y="214" font-family="Georgia,serif" font-size="9" fill="#000">W₃</text>

  <!-- Ray label -->
  <text x="302" y="304" font-family="Georgia,serif" font-size="10" fill="#000">ray →</text>

  <!-- Distance between fronts = λ -->
  <line x1="220" y1="310" x2="260" y2="310" stroke="#000" stroke-width="1.5"/>
  <polygon points="224,304 214,310 224,316" fill="#000"/>
  <polygon points="256,304 266,310 256,316" fill="#000"/>
  <text x="228" y="304" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">λ</text>

  <!-- ══ RIGHT: Plane wavefronts ══ -->
  <text x="430" y="76" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">B. Distant Source — Plane Wavefronts</text>

  <!-- Plane wavefronts (vertical lines) -->
  <line x1="490" y1="110" x2="490" y2="510" stroke="#000" stroke-width="3"/>
  <line x1="550" y1="110" x2="550" y2="510" stroke="#000" stroke-width="3"/>
  <line x1="610" y1="110" x2="610" y2="510" stroke="#000" stroke-width="3"/>
  <line x1="670" y1="110" x2="670" y2="510" stroke="#000" stroke-width="3"/>
  <line x1="730" y1="110" x2="730" y2="510" stroke="#000" stroke-width="3"/>

  <!-- Rays (horizontal, perpendicular to plane fronts) -->
  <line x1="430" y1="170" x2="760" y2="170" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <polygon points="752,164 762,170 752,176" fill="#000"/>
  <line x1="430" y1="250" x2="760" y2="250" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <polygon points="752,244 762,250 752,256" fill="#000"/>
  <line x1="430" y1="330" x2="760" y2="330" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <polygon points="752,324 762,330 752,336" fill="#000"/>
  <line x1="430" y1="410" x2="760" y2="410" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <polygon points="752,404 762,410 752,416" fill="#000"/>
  <line x1="430" y1="490" x2="760" y2="490" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <polygon points="752,484 762,490 752,496" fill="#000"/>

  <!-- λ annotation between plane fronts -->
  <line x1="490" y1="90" x2="550" y2="90" stroke="#000" stroke-width="1.5"/>
  <polygon points="494,84 484,90 494,96" fill="#000"/>
  <polygon points="546,84 556,90 546,96" fill="#000"/>
  <text x="510" y="86" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">λ</text>

  <!-- Labels -->
  <text x="488" y="535" font-family="Georgia,serif" font-size="10" fill="#000">plane</text>
  <text x="482" y="548" font-family="Georgia,serif" font-size="10" fill="#000">wavefront</text>
  <text x="755" y="256" font-family="Georgia,serif" font-size="10" fill="#000">ray →</text>

  <!-- Divider -->
  <line x1="400" y1="70" x2="400" y2="570" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- ══ Formula / note box ══ -->
  <rect x="60" y="540" width="680" height="48" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="75" y="558" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key:  </text>
  <text x="120" y="558" font-family="Georgia,serif" font-size="11" fill="#000">Wavefronts are loci of equal phase (Δφ = 0).  </text>
  <text x="120" y="576" font-family="Georgia,serif" font-size="11" fill="#000">Rays are always perpendicular (normal) to wavefronts.  Spacing between fronts = λ.</text>
</svg>`;

  // ─── PLANE MIRROR RAY DIAGRAM ─────────────────────────────────────────────
  // Image formation in a plane mirror: virtual, upright, same size, behind mirror
  static planeMirrorRayDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="170" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Plane Mirror — Ray Diagram</text>
  <text x="110" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Image: virtual, upright, same size, same distance behind mirror as object is in front</text>

  <!-- ══ Mirror (vertical line at x=420) ══ -->
  <line x1="420" y1="80" x2="420" y2="500" stroke="#000" stroke-width="5" stroke-linecap="round"/>
  <!-- Hatch (behind mirror, right side) -->
  <line x1="420" y1="90"  x2="440" y2="70"  stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="120" x2="450" y2="90"  stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="150" x2="460" y2="110" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="180" x2="470" y2="130" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="210" x2="470" y2="160" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="240" x2="470" y2="190" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="270" x2="470" y2="220" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="300" x2="470" y2="250" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="330" x2="470" y2="280" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="360" x2="470" y2="310" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="390" x2="470" y2="340" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="420" x2="470" y2="370" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="450" x2="470" y2="400" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="480" x2="470" y2="430" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="500" x2="455" y2="465" stroke="#000" stroke-width="1.5"/>
  <text x="425" y="76" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Mirror (M)</text>

  <!-- Normal line (horizontal dashed at object tip height) -->
  <line x1="100" y1="280" x2="700" y2="280" stroke="#aaa" stroke-width="1" stroke-dasharray="5,4"/>
  <text x="705" y="284" font-family="Georgia,serif" font-size="10" fill="#aaa">normal</text>

  <!-- ══ Object arrow (at x=200, tip at y=180) ══ -->
  <line x1="200" y1="420" x2="200" y2="180" stroke="#000" stroke-width="3.5"/>
  <polygon points="194,186 200,172 206,186" fill="#000"/>
  <text x="148" y="300" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Object</text>
  <text x="160" y="316" font-family="Georgia,serif" font-size="10" fill="#000">(O)</text>
  <!-- Object base dot -->
  <circle cx="200" cy="420" r="5" fill="#000"/>
  <!-- Object distance annotation -->
  <line x1="200" y1="440" x2="420" y2="440" stroke="#000" stroke-width="1.5"/>
  <polygon points="204,434 194,440 204,446" fill="#000"/>
  <polygon points="416,434 426,440 416,446" fill="#000"/>
  <text x="296" y="456" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">d_o</text>

  <!-- ══ Ray 1: horizontal from tip → reflects horizontally back as a diverging ray ══ -->
  <!-- Incident ray: tip(200,180) → mirror(420,180), horizontal -->
  <line x1="200" y1="180" x2="420" y2="180" stroke="#000" stroke-width="2.5"/>
  <polygon points="390,175 402,180 390,185" fill="#000"/>
  <!-- Reflected ray: (420,180) → observer eye at (100,420) extended -->
  <!-- Direction: from (420,180) diverging back; angle of incidence=0 so reflects horizontally back -->
  <line x1="420" y1="180" x2="100" y2="180" stroke="#000" stroke-width="2.5" stroke-dasharray="none"/>
  <polygon points="140,175 128,180 140,185" fill="#000"/>

  <!-- ══ Ray 2: oblique from tip → hits mirror → reflects symmetrically ══ -->
  <!-- Incident: (200,180) → (420,420) -->
  <line x1="200" y1="180" x2="420" y2="420" stroke="#000" stroke-width="2.5"/>
  <polygon points="403,407 418,422 408,407" fill="#000"/>
  <!-- Reflected: (420,420) → (100, something). Law of reflection.
       Incident direction: dx=220,dy=240; normal=horizontal; reflected dx=-220,dy=240
       i.e. same dy, mirrored dx → from (420,420) direction (-220,240) → ends at (200,660) clip to y=500
       t=(500-420)/240=0.33 → x=420-220*0.33=420-73=347 -->
  <line x1="420" y1="420" x2="347" y2="500" stroke="#000" stroke-width="2.5"/>
  <!-- Extended reflected ray trace (dashed) to observer -->
  <line x1="420" y1="420" x2="100" y2="500" stroke="#000" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- Angle of incidence / reflection arc (at ray 2 mirror hit) -->
  <path d="M 420,400 A 20,20 0 0 0 404,412" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="392" y="398" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">i</text>
  <path d="M 420,400 A 20,20 0 0 1 435,412" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="436" y="396" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">r</text>
  <text x="430" y="412" font-family="Georgia,serif" font-size="10" fill="#000">i = r</text>

  <!-- ══ Virtual image (behind mirror, dashed) ══ -->
  <!-- Image at x=640 (same distance behind mirror as object is in front) -->
  <line x1="640" y1="420" x2="640" y2="180" stroke="#000" stroke-width="2.5" stroke-dasharray="6,4"/>
  <polygon points="634,186 640,172 646,186" fill="#000" stroke="none" fill-opacity="0.5"/>
  <text x="650" y="300" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Image</text>
  <text x="654" y="316" font-family="Georgia,serif" font-size="10" fill="#000">(I)</text>
  <text x="650" y="330" font-family="Georgia,serif" font-size="10" fill="#000">virtual</text>
  <circle cx="640" cy="420" r="5" fill="#000" fill-opacity="0.5"/>
  <!-- Image distance annotation -->
  <line x1="420" y1="460" x2="640" y2="460" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="424,454 414,460 424,466" fill="#000"/>
  <polygon points="636,454 646,460 636,466" fill="#000"/>
  <text x="516" y="476" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">d_i</text>

  <!-- Extension lines from reflected rays to virtual image (dashed) -->
  <line x1="420" y1="180" x2="640" y2="180" stroke="#000" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- ══ Formula box ══ -->
  <rect x="50" y="520" width="700" height="64" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="65" y="540" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Plane Mirror Properties:</text>
  <text x="65" y="558" font-family="Georgia,serif" font-size="11" fill="#000">d_i = d_o  (image distance = object distance)   |   m = +1  (same size, upright)</text>
  <text x="65" y="574" font-family="Georgia,serif" font-size="10" fill="#333">Image is virtual (rays don't actually pass through it) and laterally inverted</text>
</svg>`;

  // ─── SNELL'S LAW REFRACTION DIAGRAM ──────────────────────────────────────
  // Ray bending at interface n1=1.0 (air), n2=1.5 (glass), incident angle 30°
  static snellsLawRefractionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="170" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Snell's Law — Refraction at an Interface</text>
  <text x="100" y="46" font-family="Georgia,serif" font-size="11" fill="#333">n₁ sin θ₁ = n₂ sin θ₂   (Snell's Law)</text>

  <!-- ══ Interface (horizontal line at y=300) ══ -->
  <line x1="60" y1="300" x2="740" y2="300" stroke="#000" stroke-width="3"/>

  <!-- Medium labels and hatch for denser medium (glass, below) -->
  <!-- Air (top) -->
  <text x="70" y="290" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Air  (n₁ = 1.0)</text>
  <!-- Glass (bottom) — hatch fill -->
  <rect x="60" y="300" width="680" height="250" fill="#fff" stroke="none"/>
  <!-- Hatch pattern for glass -->
  <line x1="60"  y1="310" x2="100" y2="270" stroke="#ddd" stroke-width="1.5"/>
  <line x1="100" y1="310" x2="140" y2="270" stroke="#ddd" stroke-width="1.5"/>
  <line x1="140" y1="310" x2="180" y2="270" stroke="#ddd" stroke-width="1.5"/>
  <line x1="180" y1="310" x2="220" y2="270" stroke="#ddd" stroke-width="1.5"/>
  <line x1="220" y1="310" x2="260" y2="270" stroke="#ddd" stroke-width="1.5"/>
  <line x1="260" y1="310" x2="300" y2="270" stroke="#ddd" stroke-width="1.5"/>
  <line x1="300" y1="310" x2="340" y2="270" stroke="#ddd" stroke-width="1.5"/>
  <line x1="340" y1="310" x2="380" y2="270" stroke="#ddd" stroke-width="1.5"/>
  <line x1="380" y1="310" x2="420" y2="270" stroke="#ddd" stroke-width="1.5"/>
  <line x1="420" y1="310" x2="460" y2="270" stroke="#ddd" stroke-width="1.5"/>
  <line x1="460" y1="310" x2="500" y2="270" stroke="#ddd" stroke-width="1.5"/>
  <line x1="500" y1="310" x2="540" y2="270" stroke="#ddd" stroke-width="1.5"/>
  <line x1="540" y1="310" x2="580" y2="270" stroke="#ddd" stroke-width="1.5"/>
  <line x1="580" y1="310" x2="620" y2="270" stroke="#ddd" stroke-width="1.5"/>
  <line x1="620" y1="310" x2="660" y2="270" stroke="#ddd" stroke-width="1.5"/>
  <line x1="660" y1="310" x2="700" y2="270" stroke="#ddd" stroke-width="1.5"/>
  <line x1="700" y1="310" x2="740" y2="270" stroke="#ddd" stroke-width="1.5"/>
  <!-- Denser diagonal hatch -->
  <line x1="60"  y1="350" x2="120" y2="290" stroke="#ddd" stroke-width="1.5"/>
  <line x1="60"  y1="390" x2="150" y2="300" stroke="#ddd" stroke-width="1.5"/>
  <line x1="60"  y1="430" x2="190" y2="300" stroke="#ddd" stroke-width="1.5"/>
  <line x1="60"  y1="470" x2="230" y2="300" stroke="#ddd" stroke-width="1.5"/>
  <line x1="100" y1="510" x2="310" y2="300" stroke="#ddd" stroke-width="1.5"/>
  <line x1="180" y1="540" x2="420" y2="300" stroke="#ddd" stroke-width="1.5"/>
  <line x1="300" y1="550" x2="550" y2="300" stroke="#ddd" stroke-width="1.5"/>
  <line x1="450" y1="550" x2="700" y2="300" stroke="#ddd" stroke-width="1.5"/>
  <line x1="600" y1="550" x2="740" y2="410" stroke="#ddd" stroke-width="1.5"/>
  <text x="70" y="360" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Glass (n₂ = 1.5)</text>

  <!-- ══ Normal line (vertical dashed at x=400) ══ -->
  <line x1="400" y1="80" x2="400" y2="540" stroke="#000" stroke-width="1.5" stroke-dasharray="6,5"/>
  <text x="406" y="90" font-family="Georgia,serif" font-size="11" fill="#000">Normal</text>

  <!-- ══ Incident ray (30° to normal, from top-left) ══ -->
  <!-- From (200,100) to (400,300): dx=200,dy=200 → angle=45°... let's use 30° from normal:
       At incidence point (400,300), 30° from vertical normal → direction from above-left
       tan(30°)=0.577 → for dy=200 (coming down), dx=200*0.577=115
       Start: (400-115, 300-200) = (285, 100)
  -->
  <line x1="285" y1="100" x2="400" y2="300" stroke="#000" stroke-width="3"/>
  <polygon points="391,287 402,302 394,304" fill="#000"/>

  <!-- Angle of incidence arc and label -->
  <path d="M 400,240 A 60,60 0 0 0 369,268" fill="none" stroke="#000" stroke-width="1.8"/>
  <text x="346" y="248" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">θ₁</text>
  <text x="304" y="274" font-family="Georgia,serif" font-size="11" fill="#000">(= 30°)</text>

  <!-- ══ Refracted ray (19.5° from normal, into glass) ══ -->
  <!-- n1 sin30 = n2 sinθ2 → sinθ2 = (1.0*0.5)/1.5 = 0.333 → θ2≈19.47°
       tan(19.47°)=0.354 → for dy=200 (going down), dx=200*0.354=71
  -->
  <line x1="400" y1="300" x2="471" y2="500" stroke="#000" stroke-width="3"/>
  <polygon points="464,488 472,502 479,490" fill="#000"/>

  <!-- Angle of refraction arc and label -->
  <path d="M 400,360 A 60,60 0 0 1 421,340" fill="none" stroke="#000" stroke-width="1.8"/>
  <text x="424" y="336" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">θ₂</text>
  <text x="424" y="366" font-family="Georgia,serif" font-size="11" fill="#000">(≈19.5°)</text>

  <!-- ══ Reflected ray (weak, same angle other side) ══ -->
  <!-- From (400,300) going up-right at 30° from normal: (400+115, 100) = (515,100) -->
  <line x1="400" y1="300" x2="515" y2="100" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <polygon points="508,113 516,99 518,114" fill="#000"/>
  <text x="520" y="140" font-family="Georgia,serif" font-size="10" fill="#000">Reflected</text>
  <text x="520" y="154" font-family="Georgia,serif" font-size="10" fill="#000">ray (weak)</text>

  <!-- n labels -->
  <text x="70" y="186" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">n₁</text>
  <text x="70" y="440" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">n₂</text>

  <!-- Ray direction labels -->
  <text x="220" y="148" font-family="Georgia,serif" font-size="11" fill="#000">Incident ray</text>
  <text x="478" y="430" font-family="Georgia,serif" font-size="11" fill="#000">Refracted ray</text>
  <text x="478" y="444" font-family="Georgia,serif" font-size="11" fill="#000">(bends toward</text>
  <text x="478" y="458" font-family="Georgia,serif" font-size="11" fill="#000">normal, n₂&gt;n₁)</text>

  <!-- ══ Formula box ══ -->
  <rect x="50" y="520" width="700" height="64" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="65" y="540" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Snell's Law:  n₁ sin θ₁ = n₂ sin θ₂</text>
  <text x="65" y="558" font-family="Georgia,serif" font-size="11" fill="#000">n₂ &gt; n₁ → ray bends toward normal (θ₂ &lt; θ₁)  |  Speed of light in medium: v = c/n</text>
  <text x="65" y="574" font-family="Georgia,serif" font-size="10" fill="#333">Index of refraction n = c/v = sin θ_air / sin θ_medium</text>
</svg>`;

  // ─── TOTAL INTERNAL REFLECTION DIAGRAM ───────────────────────────────────
  // Three rays at increasing angles: below critical, at critical, above (TIR)
  static totalInternalReflectionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="160" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Total Internal Reflection (TIR)</text>
  <text x="80" y="46" font-family="Georgia,serif" font-size="11" fill="#333">sin θ_c = n₂/n₁   (critical angle)  |  For θ &gt; θ_c, all light is reflected (TIR)</text>

  <!-- ══ Interface at y=320, glass below ══ -->
  <line x1="40" y1="320" x2="760" y2="320" stroke="#000" stroke-width="3"/>
  <!-- Air label (above) -->
  <text x="50" y="310" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Air  (n₂ = 1.0)</text>
  <!-- Glass label (below) — hatch -->
  <rect x="40" y="320" width="720" height="220" fill="#fff" stroke="none"/>
  <!-- Hatch -->
  <line x1="40"  y1="340" x2="100" y2="280" stroke="#ddd" stroke-width="1.5"/>
  <line x1="80"  y1="380" x2="180" y2="280" stroke="#ddd" stroke-width="1.5"/>
  <line x1="120" y1="420" x2="260" y2="280" stroke="#ddd" stroke-width="1.5"/>
  <line x1="160" y1="460" x2="340" y2="280" stroke="#ddd" stroke-width="1.5"/>
  <line x1="200" y1="500" x2="420" y2="280" stroke="#ddd" stroke-width="1.5"/>
  <line x1="260" y1="540" x2="540" y2="260" stroke="#ddd" stroke-width="1.5"/>
  <line x1="400" y1="540" x2="680" y2="260" stroke="#ddd" stroke-width="1.5"/>
  <line x1="580" y1="540" x2="760" y2="360" stroke="#ddd" stroke-width="1.5"/>
  <line x1="40"  y1="380" x2="80"  y2="340" stroke="#ddd" stroke-width="1.5"/>
  <line x1="40"  y1="420" x2="120" y2="340" stroke="#ddd" stroke-width="1.5"/>
  <line x1="40"  y1="460" x2="160" y2="340" stroke="#ddd" stroke-width="1.5"/>
  <line x1="40"  y1="500" x2="200" y2="340" stroke="#ddd" stroke-width="1.5"/>
  <line x1="40"  y1="540" x2="240" y2="340" stroke="#ddd" stroke-width="1.5"/>
  <text x="50" y="410" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Glass  (n₁ = 1.5)</text>

  <!-- ══ Three normals ══ -->
  <line x1="200" y1="140" x2="200" y2="500" stroke="#aaa" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="420" y1="140" x2="420" y2="500" stroke="#aaa" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="620" y1="140" x2="620" y2="500" stroke="#aaa" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="204" y="152" font-family="Georgia,serif" font-size="10" fill="#aaa">N</text>
  <text x="424" y="152" font-family="Georgia,serif" font-size="10" fill="#aaa">N</text>
  <text x="624" y="152" font-family="Georgia,serif" font-size="10" fill="#aaa">N</text>

  <!-- ══ RAY A — below critical angle (partial refraction + partial reflection) ══ -->
  <text x="130" y="80" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">A: θ &lt; θ_c</text>
  <!-- Incident (from below, in glass) -->
  <line x1="120" y1="500" x2="200" y2="320" stroke="#000" stroke-width="3"/>
  <polygon points="190,335 202,322 195,335" fill="#000"/>
  <!-- Refracted (into air, bends away from normal) -->
  <line x1="200" y1="320" x2="130" y2="160" stroke="#000" stroke-width="2.5"/>
  <polygon points="134,174 129,160 143,167" fill="#000"/>
  <!-- Weak reflected (back into glass) -->
  <line x1="200" y1="320" x2="280" y2="500" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <!-- Angle labels -->
  <path d="M 200,290 A 30,30 0 0 0 183,303" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="152" y="288" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">θ₁</text>
  <path d="M 200,290 A 30,30 0 0 1 183,278" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="152" y="278" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">θ_r</text>
  <text x="110" y="370" font-family="Georgia,serif" font-size="10" fill="#000">partial</text>
  <text x="104" y="384" font-family="Georgia,serif" font-size="10" fill="#000">reflection</text>

  <!-- ══ RAY B — at critical angle (refracted along interface) ══ -->
  <text x="348" y="80" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">B: θ = θ_c</text>
  <!-- Incident -->
  <line x1="320" y1="500" x2="420" y2="320" stroke="#000" stroke-width="3"/>
  <polygon points="408,336 421,322 415,336" fill="#000"/>
  <!-- Refracted along interface (horizontal) -->
  <line x1="420" y1="320" x2="760" y2="320" stroke="#000" stroke-width="3"/>
  <polygon points="750,314 762,320 750,326" fill="#000"/>
  <text x="560" y="308" font-family="Georgia,serif" font-size="10" fill="#000">refracted along surface (θ_r = 90°)</text>
  <!-- Angle label -->
  <path d="M 420,290 A 30,30 0 0 0 399,305" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="368" y="290" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">θ_c</text>
  <!-- Critical angle value -->
  <text x="360" y="400" font-family="Georgia,serif" font-size="11" fill="#000">θ_c = sin⁻¹(1/1.5)</text>
  <text x="368" y="416" font-family="Georgia,serif" font-size="11" fill="#000">≈ 41.8°</text>

  <!-- ══ RAY C — above critical angle (TIR) ══ -->
  <text x="540" y="80" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">C: θ &gt; θ_c  (TIR)</text>
  <!-- Incident -->
  <line x1="540" y1="500" x2="620" y2="320" stroke="#000" stroke-width="3"/>
  <polygon points="610,336 622,322 616,336" fill="#000"/>
  <!-- Totally reflected (no refracted ray into air) -->
  <line x1="620" y1="320" x2="700" y2="500" stroke="#000" stroke-width="3.5"/>
  <polygon points="694,487 702,501 692,494" fill="#000"/>
  <!-- Angle labels -->
  <path d="M 620,290 A 30,30 0 0 0 600,305" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="568" y="292" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">θ &gt; θ_c</text>
  <path d="M 620,290 A 30,30 0 0 1 640,305" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="640" y="285" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">θ_refl</text>
  <!-- TIR label -->
  <text x="680" y="380" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">TIR!</text>
  <text x="660" y="396" font-family="Georgia,serif" font-size="10" fill="#000">all light</text>
  <text x="654" y="410" font-family="Georgia,serif" font-size="10" fill="#000">reflected</text>

  <!-- ══ Formula box ══ -->
  <rect x="40" y="530" width="720" height="56" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="55" y="550" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Critical Angle:  sin θ_c = n₂/n₁</text>
  <text x="55" y="568" font-family="Georgia,serif" font-size="11" fill="#333">Applications: optical fibres, diamond sparkle, mirages, prism periscopes, endoscopes</text>
</svg>`;

  // ─── CONVEX LENS RAY DIAGRAM ──────────────────────────────────────────────
  // Converging lens, object beyond 2F, real inverted diminished image between F and 2F
  static convexLensRayDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="220" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Convex (Converging) Lens — Ray Diagram</text>
  <text x="120" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Object beyond 2F: image is real, inverted, diminished — between F and 2F on other side</text>

  <!-- ══ Principal axis ══ -->
  <line x1="30" y1="300" x2="870" y2="300" stroke="#000" stroke-width="2"/>
  <polygon points="862,294 874,300 862,306" fill="#000"/>

  <!-- ══ Convex lens (biconvex shape at x=500) ══ -->
  <!-- Left arc -->
  <path d="M 500,150 Q 470,300 500,450" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round"/>
  <!-- Right arc -->
  <path d="M 500,150 Q 530,300 500,450" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round"/>
  <!-- Lens arrows (top and bottom) -->
  <polygon points="494,154 500,140 506,154" fill="#000"/>
  <polygon points="494,446 500,460 506,446" fill="#000"/>
  <text x="510" y="130" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Convex Lens</text>

  <!-- F and 2F marks: f=100px → F1 at x=400, 2F1 at x=300 (left); F2 at x=600, 2F2 at x=700 (right) -->
  <!-- Left side -->
  <line x1="400" y1="294" x2="400" y2="306" stroke="#000" stroke-width="2"/>
  <text x="390" y="320" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">F₁</text>
  <line x1="300" y1="294" x2="300" y2="306" stroke="#000" stroke-width="2"/>
  <text x="285" y="320" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">2F₁</text>
  <!-- Right side -->
  <line x1="600" y1="294" x2="600" y2="306" stroke="#000" stroke-width="2"/>
  <text x="590" y="320" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">F₂</text>
  <line x1="700" y1="294" x2="700" y2="306" stroke="#000" stroke-width="2"/>
  <text x="685" y="320" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">2F₂</text>

  <!-- ══ Object arrow (upright, at x=160, tip at y=180) ══ -->
  <line x1="160" y1="300" x2="160" y2="180" stroke="#000" stroke-width="3.5"/>
  <polygon points="154,186 160,172 166,186" fill="#000"/>
  <text x="90" y="240" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Object</text>
  <text x="108" y="256" font-family="Georgia,serif" font-size="10" fill="#000">(O)</text>

  <!-- ══ RAY 1: Parallel to axis → refracts through F₂ ══ -->
  <!-- Incident: (160,180) → (500,180) horizontal -->
  <line x1="160" y1="180" x2="500" y2="180" stroke="#000" stroke-width="2.5"/>
  <polygon points="460,175 472,180 460,185" fill="#000"/>
  <!-- Refracted: (500,180) through F₂(600,300) extended -->
  <!-- Direction: dx=100,dy=120; parametric: x=500+100t, y=180+120t; at x=800: t=3, y=180+360=540 -->
  <!-- Clip to y=500: t=(500-180)/120=2.67 → x=500+267=767 -->
  <line x1="500" y1="180" x2="767" y2="500" stroke="#000" stroke-width="2.5"/>
  <polygon points="723,440 733,457 737,443" fill="#000"/>

  <!-- ══ RAY 2: Through optical centre → straight through ══ -->
  <!-- (160,180) → (500,300) → continues to (840,420) -->
  <!-- Direction: dx=340,dy=120; at x=840: t=(840-160)/340=2 → y=180+120*2=420 -->
  <line x1="160" y1="180" x2="840" y2="420" stroke="#000" stroke-width="2.5" stroke-dasharray="none"/>
  <polygon points="800,407 812,420 800,426" fill="#000"/>

  <!-- ══ RAY 3: Through F₁ → refracts parallel to axis ══ -->
  <!-- F₁ at (400,300); ray from (160,180) directed toward F₁ extended to lens:
       Direction: dx=240,dy=120; at x=500: t=(500-160)/240=1.417 → y=180+120*1.417=350 -->
  <line x1="160" y1="180" x2="500" y2="350" stroke="#000" stroke-width="2.5" stroke-dasharray="6,4"/>
  <polygon points="456,325 470,352 474,337" fill="#000"/>
  <!-- Refracted parallel (y=350) -->
  <line x1="500" y1="350" x2="840" y2="350" stroke="#000" stroke-width="2.5" stroke-dasharray="6,4"/>
  <polygon points="800,345 812,350 800,355" fill="#000"/>

  <!-- ══ Image intersection ══ -->
  <!-- Ray1 and Ray2 intersection:
       Ray1: y=180+120*(x-500)/100 = 180+1.2(x-500) → at x=646: y=180+175=355... let me use ray1 (500,180)→(767,500) and ray3 (500,350)→horiz
       Ray3 is horizontal at y=350; ray1 at y=350: 1.2(x-500)=170 → x=500+142=642 → image at (642,350)
       Ray2 at x=642: y=180+120*(642-160)/340=180+170=350 ✓ Image at (642,350) ← below axis? Wait, all >300.
       Actually image should be inverted (below axis, y>300) since object tip is above.
       Ray1 through F2(600,300): direction (100,120) → x=642: y=180+1.2*(642-500)=180+170=350. y=350, below axis (>300). ✓
  -->
  <!-- Image arrow (inverted, x=642, from y=300 down to y=350) -->
  <line x1="642" y1="300" x2="642" y2="350" stroke="#000" stroke-width="3.5"/>
  <polygon points="636,346 642,360 648,346" fill="#000"/>
  <circle cx="642" cy="350" r="5" fill="#000"/>
  <text x="650" y="320" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Image</text>
  <text x="654" y="334" font-family="Georgia,serif" font-size="10" fill="#000">(real,</text>
  <text x="654" y="348" font-family="Georgia,serif" font-size="10" fill="#000">inverted)</text>

  <!-- Ray legend -->
  <line x1="30" y1="380" x2="70" y2="380" stroke="#000" stroke-width="2.5"/>
  <text x="75" y="384" font-family="Georgia,serif" font-size="10" fill="#000">Ray 1: ∥ axis → F₂</text>
  <line x1="30" y1="398" x2="70" y2="398" stroke="#000" stroke-width="2.5"/>
  <text x="75" y="402" font-family="Georgia,serif" font-size="10" fill="#000">Ray 2: through centre (undeviated)</text>
  <line x1="30" y1="416" x2="70" y2="416" stroke="#000" stroke-width="2.5" stroke-dasharray="6,4"/>
  <text x="75" y="420" font-family="Georgia,serif" font-size="10" fill="#000">Ray 3: through F₁ → ∥ axis</text>

  <!-- ══ Formula box ══ -->
  <rect x="30" y="450" width="840" height="130" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="45" y="470" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Thin Lens Formula:  1/f = 1/v − 1/u   (real-is-positive convention: u negative for real object)</text>
  <text x="45" y="490" font-family="Georgia,serif" font-size="11" fill="#000">Alternatively:  1/f = 1/v + 1/u   (all-positive convention varies by textbook)</text>
  <text x="45" y="510" font-family="Georgia,serif" font-size="11" fill="#000">Magnification:  m = v/u = image height / object height</text>
  <text x="45" y="530" font-family="Georgia,serif" font-size="10" fill="#333">Object beyond 2F → image between F and 2F, real, inverted, diminished  |  m = −ve (inverted)</text>
  <text x="45" y="548" font-family="Georgia,serif" font-size="10" fill="#333">Object between F and lens → image virtual, upright, magnified (magnifying glass)</text>
  <text x="45" y="566" font-family="Georgia,serif" font-size="10" fill="#333">Power of lens: P = 1/f (dioptres, f in metres)   Lensmaker's: 1/f = (n−1)(1/R₁ − 1/R₂)</text>
</svg>`;

  // ─── CONCAVE LENS RAY DIAGRAM ─────────────────────────────────────────────
  // Diverging lens, virtual upright diminished image, same side as object
  static concaveLensRayDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="220" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Concave (Diverging) Lens — Ray Diagram</text>
  <text x="100" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Always produces virtual, upright, diminished image on the same side as the object</text>

  <!-- ══ Principal axis ══ -->
  <line x1="30" y1="300" x2="870" y2="300" stroke="#000" stroke-width="2"/>
  <polygon points="862,294 874,300 862,306" fill="#000"/>

  <!-- ══ Concave lens (biconcave shape at x=500) ══ -->
  <!-- Left arc (concave, curves right) -->
  <path d="M 500,150 Q 530,300 500,450" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round"/>
  <!-- Right arc (concave, curves left) -->
  <path d="M 500,150 Q 470,300 500,450" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round"/>
  <!-- Lens tip arrows pointing inward -->
  <polygon points="494,160 500,148 506,160" fill="#000"/>
  <polygon points="494,440 500,452 506,440" fill="#000"/>
  <text x="510" y="130" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Concave Lens</text>

  <!-- F marks: f=−80px (virtual), so F1 at x=580 (right, virtual for concave), F2 at x=420 (left, virtual) -->
  <!-- For concave lens: F is virtual. F₁ at x=420 (left of lens), F₂ at x=580 (right) -->
  <line x1="420" y1="294" x2="420" y2="306" stroke="#000" stroke-width="2"/>
  <text x="408" y="320" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">F₁</text>
  <text x="396" y="334" font-family="Georgia,serif" font-size="10" fill="#333">(virtual)</text>
  <line x1="580" y1="294" x2="580" y2="306" stroke="#000" stroke-width="2"/>
  <text x="568" y="320" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">F₂</text>
  <text x="556" y="334" font-family="Georgia,serif" font-size="10" fill="#333">(virtual)</text>

  <!-- ══ Object arrow (at x=180, tip at y=180) ══ -->
  <line x1="180" y1="300" x2="180" y2="180" stroke="#000" stroke-width="3.5"/>
  <polygon points="174,186 180,172 186,186" fill="#000"/>
  <text x="100" y="240" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Object</text>

  <!-- ══ RAY 1: Parallel to axis → diverges as if from F₁ ══ -->
  <!-- Incident: (180,180) → (500,180) horizontal -->
  <line x1="180" y1="180" x2="500" y2="180" stroke="#000" stroke-width="2.5"/>
  <polygon points="460,175 472,180 460,185" fill="#000"/>
  <!-- Refracted: diverges as if from F₁(420,300). Direction from F₁ to lens hit (500,180): dx=80,dy=-120 → extended right
       From (500,180) in direction (80,-120) → slope -1.5. At x=800: y=180+(-120/80)*(800-500)=180-450=-270 → clip:
       At x=650: y=180-225=-45 → clip to viewport; simplify: ray goes up-right
       Actually for diverging lens, refracted ray appears to come FROM F₁ (on same side as incident).
       F₁ is at x=420. The refracted ray from (500,180) diverges: direction from F₁(420,300)→lens(500,180) is dx=80,dy=-120; continue same direction →
       At x=800: y=180+(−120/80)*(800-500)=180−450=−270 → too far. Clip to x=680: y=180-270=-90 → also off. Let's just go to y=100:
       (y-180)/(-120/80)=(x-500) → x=500+(100-180)*80/(-120)=500+53=553
  -->
  <line x1="500" y1="180" x2="760" y2="-210" stroke="#000" stroke-width="2.5" stroke-dasharray="none"/>
  <!-- Clip path approach: just draw to edge -->
  <line x1="500" y1="180" x2="700" y2="-120" stroke="#000" stroke-width="0" stroke-dasharray="none"/>
  <!-- Simplified: draw diverging ray going up-right (visually plausible) -->
  <line x1="500" y1="180" x2="760" y2="90" stroke="#000" stroke-width="2.5"/>
  <polygon points="720,104 734,88 734,103" fill="#000"/>
  <!-- Extension back to F₁ (dashed) -->
  <line x1="500" y1="180" x2="420" y2="300" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>

  <!-- ══ RAY 2: Through optical centre → straight ══ -->
  <line x1="180" y1="180" x2="760" y2="180" stroke="#000" stroke-width="2.5"/>
  <polygon points="720,175 732,180 720,185" fill="#000"/>

  <!-- ══ RAY 3: Directed toward F₂ → refracts parallel ══ -->
  <!-- F₂ at (580,300). Ray from (180,180) toward (580,300): dx=400,dy=120. At x=500: dy=120*(500-180)/400=96 → y=180+96=276 -->
  <line x1="180" y1="180" x2="500" y2="276" stroke="#000" stroke-width="2.5" stroke-dasharray="6,4"/>
  <polygon points="456,262 470,277 476,264" fill="#000"/>
  <!-- Refracted parallel to axis (y=276) -->
  <line x1="500" y1="276" x2="760" y2="276" stroke="#000" stroke-width="2.5" stroke-dasharray="6,4"/>
  <polygon points="720,271 732,276 720,281" fill="#000"/>
  <!-- Extension back to F₂ (dashed) -->
  <line x1="500" y1="276" x2="580" y2="300" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- ══ Virtual image (where diverged rays appear to meet, traced back) ══ -->
  <!-- Ray1 appears from F₁; Ray2 horizontal at y=180; they don't really converge on right side.
       The virtual image forms where backward extensions meet on LEFT side of lens.
       For concave: image is virtual, erect, diminished, at ~x=290-350.
       Ray1 backward from (500,180) toward F₁ direction → crosses Ray2 (y=180) at lens... let's place at x=360, y=240 (reasonable) -->
  <!-- Virtual image at approximately x=360, y=240 (between object and lens) -->
  <line x1="360" y1="300" x2="360" y2="240" stroke="#000" stroke-width="2.5" stroke-dasharray="6,4"/>
  <polygon points="354,246 360,232 366,246" fill="#000"/>
  <circle cx="360" cy="240" r="5" fill="#000" fill-opacity="0.6"/>
  <text x="280" y="226" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Virtual Image</text>
  <text x="288" y="240" font-family="Georgia,serif" font-size="10" fill="#000">(upright,</text>
  <text x="288" y="254" font-family="Georgia,serif" font-size="10" fill="#000">diminished)</text>

  <!-- Extension lines (dashed) from refracted rays back to virtual image -->
  <line x1="500" y1="180" x2="360" y2="240" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="500" y1="276" x2="360" y2="240" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- ══ Formula box ══ -->
  <rect x="30" y="480" width="840" height="100" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="45" y="500" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Thin Lens Formula: 1/f = 1/v + 1/u   (f is negative for concave/diverging lens)</text>
  <text x="45" y="520" font-family="Georgia,serif" font-size="11" fill="#000">Magnification: m = v/u  (&lt;1 for concave, image always diminished)</text>
  <text x="45" y="540" font-family="Georgia,serif" font-size="10" fill="#333">Concave lens always produces virtual, upright, diminished image regardless of object position</text>
  <text x="45" y="558" font-family="Georgia,serif" font-size="10" fill="#333">Use: spectacles for short-sightedness (myopia), camera viewfinder, beam expander</text>
</svg>`;

  // ─── CONVEX MIRROR RAY DIAGRAM ────────────────────────────────────────────
  // Virtual upright diminished image behind mirror
  static convexMirrorRayDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="200" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Convex Mirror — Ray Diagram</text>
  <text x="100" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Image always: virtual, upright, diminished — located behind the mirror</text>

  <!-- ══ Principal axis ══ -->
  <line x1="30" y1="280" x2="700" y2="280" stroke="#000" stroke-width="2"/>
  <polygon points="692,274 704,280 692,286" fill="#000"/>

  <!-- ══ Convex mirror arc (curves away from object; vertex at x=450, opens left) ══ -->
  <path d="M 450,130 Q 410,280 450,430"
        fill="none" stroke="#000" stroke-width="5" stroke-linecap="round"/>
  <!-- Mirror backing hatch -->
  <path d="M 450,130 Q 410,280 450,430 L 470,430 Q 430,280 470,130 Z"
        fill="#e0e0e0" fill-opacity="0.5" stroke="none"/>
  <line x1="456" y1="138" x2="468" y2="128" stroke="#000" stroke-width="1.5"/>
  <line x1="456" y1="168" x2="472" y2="156" stroke="#000" stroke-width="1.5"/>
  <line x1="456" y1="198" x2="474" y2="186" stroke="#000" stroke-width="1.5"/>
  <line x1="456" y1="228" x2="475" y2="218" stroke="#000" stroke-width="1.5"/>
  <line x1="456" y1="258" x2="476" y2="248" stroke="#000" stroke-width="1.5"/>
  <line x1="456" y1="288" x2="476" y2="278" stroke="#000" stroke-width="1.5"/>
  <line x1="456" y1="318" x2="476" y2="308" stroke="#000" stroke-width="1.5"/>
  <line x1="456" y1="348" x2="474" y2="338" stroke="#000" stroke-width="1.5"/>
  <line x1="456" y1="378" x2="472" y2="368" stroke="#000" stroke-width="1.5"/>
  <line x1="456" y1="408" x2="468" y2="398" stroke="#000" stroke-width="1.5"/>
  <text x="458" y="120" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">P (vertex)</text>

  <!-- F (virtual, behind mirror) at x=540, C at x=630 -->
  <line x1="540" y1="274" x2="540" y2="286" stroke="#000" stroke-width="2" stroke-dasharray="4,0"/>
  <text x="528" y="298" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">F</text>
  <text x="516" y="310" font-family="Georgia,serif" font-size="10" fill="#333">(virtual)</text>
  <line x1="630" y1="274" x2="630" y2="286" stroke="#000" stroke-width="2"/>
  <text x="618" y="298" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">C</text>
  <text x="606" y="310" font-family="Georgia,serif" font-size="10" fill="#333">(virtual)</text>

  <!-- Dashed region (behind mirror) -->
  <rect x="450" y="90" width="320" height="380" fill="#f0f0f0" fill-opacity="0.3" stroke="#bbb" stroke-width="1" stroke-dasharray="5,4"/>
  <text x="560" y="120" font-family="Georgia,serif" font-size="11" fill="#888">behind mirror</text>
  <text x="570" y="135" font-family="Georgia,serif" font-size="11" fill="#888">(virtual region)</text>

  <!-- ══ Object arrow (at x=160, tip at y=180) ══ -->
  <line x1="160" y1="280" x2="160" y2="180" stroke="#000" stroke-width="3.5"/>
  <polygon points="154,186 160,172 166,186" fill="#000"/>
  <text x="80" y="230" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Object</text>

  <!-- ══ RAY 1: Parallel to axis → reflects as if from F ══ -->
  <!-- Incident: (160,180) → (450,180) horizontal -->
  <line x1="160" y1="180" x2="450" y2="180" stroke="#000" stroke-width="2.5"/>
  <polygon points="410,175 422,180 410,185" fill="#000"/>
  <!-- Reflected: diverges as if from F(540,280). Direction from F→hit: (540→450, 280→180)=(dx=-90,dy=-100)
       Reflected ray goes from (450,180) in direction (-(-90),-(-100))=(90,100)? No:
       For convex mirror, incident parallel ray reflects diverging, extension behind passes through F.
       Reflected ray from (450,180) goes toward observer (left), diverging.
       Direction: from F(540,280) to mirror hit(450,180): dx=-90,dy=-100 → reflected outward: continue beyond hit leftward.
       From (450,180), direction (-90,-100)→ multiplied: at x=100: t=(100-450)/(-90)=3.89 → y=180+(-100)*3.89=-209 → clip.
       Clip at y=100: t=(100-180)/(-100)=0.8 → x=450-90*0.8=378
  -->
  <line x1="450" y1="180" x2="100" y2="540" stroke="#000" stroke-width="2.5"/>
  <!-- Simplified visible portion -->
  <line x1="450" y1="180" x2="160" y2="540" stroke="#000" stroke-width="0"/> <!-- hide off-screen -->
  <line x1="450" y1="180" x2="80" y2="500" stroke="#000" stroke-width="2.5"/>
  <polygon points="120,474 106,496 118,500" fill="#000"/>
  <!-- Extension behind mirror to F (dashed) -->
  <line x1="450" y1="180" x2="540" y2="280" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>

  <!-- ══ RAY 2: Directed toward C → reflects back on itself ══ -->
  <!-- C at (630,280). Ray from (160,180) toward C: dx=470,dy=100. At x=450: dy=100*(450-160)/470=62 → y=180+62=242 -->
  <line x1="160" y1="180" x2="450" y2="242" stroke="#000" stroke-width="2.5" stroke-dasharray="6,4"/>
  <!-- Reflects back same direction reversed toward object -->
  <line x1="450" y1="242" x2="80" y2="163" stroke="#000" stroke-width="2.5" stroke-dasharray="6,4"/>
  <polygon points="120,172 104,162 116,156" fill="#000"/>
  <!-- Extension behind mirror to C (dashed) -->
  <line x1="450" y1="242" x2="630" y2="280" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>

  <!-- ══ Virtual image ══ -->
  <!-- Where backward extensions of reflected rays meet behind mirror.
       Ray1 extension: from (450,180) toward (540,280): parametric x=450+90t, y=180+100t → crosses ray2 extension.
       Ray2 extension from (450,242) toward (630,280): dx=180,dy=38 → t for intersection with ray1:
       450+90t1 = 450+180t2 → 90t1=180t2 → t1=2t2
       180+100t1 = 242+38t2 → 180+200t2=242+38t2 → 162t2=62 → t2=0.382 → x=450+180*0.382=519, y=242+38*0.382=257
  -->
  <line x1="519" y1="280" x2="519" y2="257" stroke="#000" stroke-width="2.5" stroke-dasharray="6,4"/>
  <polygon points="513,263 519,249 525,263" fill="#000"/>
  <circle cx="519" cy="257" r="5" fill="#888"/>
  <text x="528" y="250" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Image</text>
  <text x="530" y="264" font-family="Georgia,serif" font-size="10" fill="#000">(virtual,</text>
  <text x="530" y="278" font-family="Georgia,serif" font-size="10" fill="#000">upright,</text>
  <text x="530" y="292" font-family="Georgia,serif" font-size="10" fill="#000">diminished)</text>

  <!-- ══ Formula box ══ -->
  <rect x="30" y="460" width="840" height="120" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="45" y="480" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Mirror formula:  1/f = 1/v + 1/u   (f is negative for convex mirror)</text>
  <text x="45" y="500" font-family="Georgia,serif" font-size="11" fill="#000">Magnification:  m = −v/u  (positive → upright; |m| &lt; 1 → diminished)</text>
  <text x="45" y="520" font-family="Georgia,serif" font-size="10" fill="#333">Convex mirror always: virtual image, upright, diminished — regardless of object position</text>
  <text x="45" y="538" font-family="Georgia,serif" font-size="10" fill="#333">Wide field of view → used in car wing mirrors, security/shop mirrors, road junctions</text>
  <text x="45" y="556" font-family="Georgia,serif" font-size="10" fill="#333">Sign convention (real-is-positive): u = −ve (real object), f = +ve concave, −ve convex</text>
</svg>`;

  // ─── PRISM DISPERSION DIAGRAM ─────────────────────────────────────────────
  // White light dispersed into spectrum via glass prism (B&W with hatch patterns)
  static prismDispersionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="180" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Prism Dispersion — White Light to Spectrum</text>
  <text x="100" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Different wavelengths refract by different amounts — n varies with λ (dispersion)</text>

  <!-- ══ Prism (equilateral triangle, 60°, centred) ══ -->
  <!-- Vertices: top(400,100), bottom-left(230,390), bottom-right(570,390) -->
  <polygon points="400,100 230,390 570,390"
           fill="#fff" stroke="#000" stroke-width="4"/>
  <!-- Interior hatch (diagonal lines to indicate glass) -->
  <line x1="270" y1="390" x2="400" y2="148" stroke="#ccc" stroke-width="1.5"/>
  <line x1="310" y1="390" x2="400" y2="196" stroke="#ccc" stroke-width="1.5"/>
  <line x1="350" y1="390" x2="400" y2="244" stroke="#ccc" stroke-width="1.5"/>
  <line x1="390" y1="390" x2="400" y2="292" stroke="#ccc" stroke-width="1.5"/>
  <line x1="430" y1="390" x2="430" y2="390" stroke="#ccc" stroke-width="1.5"/>
  <line x1="246" y1="350" x2="400" y2="148" stroke="#ccc" stroke-width="1.5"/>
  <line x1="240" y1="310" x2="380" y2="148" stroke="#ccc" stroke-width="1.5"/>
  <line x1="242" y1="270" x2="352" y2="148" stroke="#ccc" stroke-width="1.5"/>
  <line x1="260" y1="240" x2="330" y2="148" stroke="#ccc" stroke-width="1.5"/>
  <line x1="460" y1="390" x2="400" y2="292" stroke="#ccc" stroke-width="1.5"/>
  <line x1="500" y1="390" x2="400" y2="244" stroke="#ccc" stroke-width="1.5"/>
  <line x1="540" y1="390" x2="400" y2="196" stroke="#ccc" stroke-width="1.5"/>
  <!-- Prism label -->
  <text x="368" y="330" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Glass</text>
  <text x="364" y="346" font-family="Georgia,serif" font-size="12" fill="#000">Prism</text>
  <!-- Angle label at apex -->
  <text x="390" y="120" font-family="Georgia,serif" font-size="12" fill="#000">60°</text>
  <path d="M 390,115 A 20,20 0 0 1 400,115" fill="none" stroke="#000" stroke-width="1.5"/>

  <!-- ══ Incident white light beam (left side) ══ -->
  <!-- Single thick beam approaching left face of prism from left -->
  <!-- Left face goes from (230,390) to (400,100). Midpoint of left face ~(315,245) -->
  <!-- Incident beam direction: horizontal from left -->
  <line x1="80" y1="245" x2="302" y2="245" stroke="#000" stroke-width="6"/>
  <polygon points="294,239 306,245 294,251" fill="#000"/>
  <!-- "White light" label with hash marks across beam -->
  <text x="82" y="232" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">White</text>
  <text x="84" y="246" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">light</text>
  <text x="86" y="260" font-family="Georgia,serif" font-size="10" fill="#000">→</text>

  <!-- Normal at incidence point (perpendicular to left face) -->
  <!-- Left face direction: (400-230, 100-390)=(170,-290); normal: (290,170) normalised -->
  <!-- Simplified: draw approx normal -->
  <line x1="200" y1="290" x2="420" y2="200" stroke="#aaa" stroke-width="1.5" stroke-dasharray="5,4"/>
  <text x="180" y="292" font-family="Georgia,serif" font-size="10" fill="#aaa">N</text>

  <!-- ══ Refracted rays inside prism (single beam) ══ -->
  <!-- Beam enters at (302,245) and exits right face ~(500,245) — simplified horizontal path inside -->
  <line x1="302" y1="245" x2="490" y2="270" stroke="#000" stroke-width="4"/>

  <!-- ══ Dispersed rays exiting right face ══ -->
  <!-- Right face: (570,390) to (400,100). Exit point ~(490,270) -->
  <!-- Multiple rays fanning out, labeled V(iolet) through R(ed) -->
  <!-- Violet bends most (highest n), Red bends least -->
  <!-- Rays spread downward-right from exit point -->

  <!-- Ray labels with spacing lines (B&W: use line thickness/dash to differentiate) -->
  <!-- Violet (most deviated, steepest angle downward) -->
  <line x1="490" y1="270" x2="760" y2="180" stroke="#000" stroke-width="1.5"/>
  <polygon points="726,182 744,178 736,192" fill="#000"/>
  <text x="765" y="184" font-family="Georgia,serif" font-size="11" fill="#000">V (violet)</text>
  <text x="765" y="198" font-family="Georgia,serif" font-size="10" fill="#333">(λ ≈ 400nm)</text>

  <!-- Indigo -->
  <line x1="490" y1="270" x2="760" y2="210" stroke="#000" stroke-width="1.5" stroke-dasharray="8,3"/>
  <polygon points="726,213 744,209 736,222" fill="#000"/>
  <text x="765" y="214" font-family="Georgia,serif" font-size="11" fill="#000">I (indigo)</text>

  <!-- Blue -->
  <line x1="490" y1="270" x2="760" y2="240" stroke="#000" stroke-width="2"/>
  <polygon points="726,242 744,238 736,252" fill="#000"/>
  <text x="765" y="244" font-family="Georgia,serif" font-size="11" fill="#000">B (blue)</text>
  <text x="765" y="258" font-family="Georgia,serif" font-size="10" fill="#333">(λ ≈ 450nm)</text>

  <!-- Green -->
  <line x1="490" y1="270" x2="760" y2="270" stroke="#000" stroke-width="2.5"/>
  <polygon points="726,265 744,270 726,275" fill="#000"/>
  <text x="765" y="274" font-family="Georgia,serif" font-size="11" fill="#000">G (green)</text>
  <text x="765" y="288" font-family="Georgia,serif" font-size="10" fill="#333">(λ ≈ 550nm)</text>

  <!-- Yellow -->
  <line x1="490" y1="270" x2="760" y2="300" stroke="#000" stroke-width="2.5" stroke-dasharray="10,3"/>
  <polygon points="726,297 744,302 728,308" fill="#000"/>
  <text x="765" y="304" font-family="Georgia,serif" font-size="11" fill="#000">Y (yellow)</text>

  <!-- Orange -->
  <line x1="490" y1="270" x2="760" y2="330" stroke="#000" stroke-width="3"/>
  <polygon points="726,326 744,332 728,338" fill="#000"/>
  <text x="765" y="334" font-family="Georgia,serif" font-size="11" fill="#000">O (orange)</text>

  <!-- Red (least deviated) -->
  <line x1="490" y1="270" x2="760" y2="362" stroke="#000" stroke-width="3.5"/>
  <polygon points="726,357 744,364 728,369" fill="#000"/>
  <text x="765" y="366" font-family="Georgia,serif" font-size="11" fill="#000">R (red)</text>
  <text x="765" y="380" font-family="Georgia,serif" font-size="10" fill="#333">(λ ≈ 700nm)</text>

  <!-- Normal at exit point -->
  <line x1="560" y1="330" x2="400" y2="210" stroke="#aaa" stroke-width="1.5" stroke-dasharray="5,4"/>
  <text x="566" y="340" font-family="Georgia,serif" font-size="10" fill="#aaa">N</text>

  <!-- Dispersion brace label -->
  <line x1="755" y1="180" x2="755" y2="362" stroke="#000" stroke-width="1.5"/>
  <text x="722" y="440" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Spectrum</text>

  <!-- ══ Formula box ══ -->
  <rect x="30" y="430" width="340" height="148" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="45" y="450" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Dispersion:</text>
  <text x="45" y="468" font-family="Georgia,serif" font-size="11" fill="#000">n varies with λ  (Cauchy's equation):</text>
  <text x="45" y="486" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">n(λ) = A + B/λ²</text>
  <text x="45" y="504" font-family="Georgia,serif" font-size="10" fill="#333">Higher n → more refraction → violet deviates most</text>
  <text x="45" y="522" font-family="Georgia,serif" font-size="10" fill="#333">Angle of deviation: δ = (n − 1) × A  (thin prism)</text>
  <text x="45" y="540" font-family="Georgia,serif" font-size="10" fill="#333">Dispersive power: ω = (n_V − n_R) / (n_mean − 1)</text>
  <text x="45" y="558" font-family="Georgia,serif" font-size="10" fill="#333">Same principle: rainbow formation in water droplets</text>
</svg>`;

  // ─── OPTICAL FIBRE DIAGRAM ────────────────────────────────────────────────
  // TIR guiding light through core/cladding, ray bouncing inside
  static opticalFibreSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="500px" viewBox="0 0 900 500">

  <!-- Title -->
  <text x="220" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Optical Fibre — Total Internal Reflection</text>
  <text x="100" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Light guided by repeated TIR at core-cladding interface (n_core &gt; n_cladding)</text>

  <!-- ══ Cladding (outer layer) ══ -->
  <rect x="60" y="130" width="780" height="220" rx="30" fill="#fff" stroke="#000" stroke-width="3"/>
  <!-- Cladding hatch pattern (sparse diagonal) -->
  <line x1="70"  y1="145" x2="115" y2="100" stroke="#ccc" stroke-width="1.5"/>
  <line x1="100" y1="350" x2="145" y2="395" stroke="#ccc" stroke-width="1.5"/>
  <line x1="140" y1="145" x2="185" y2="100" stroke="#ccc" stroke-width="1.5"/>
  <line x1="210" y1="350" x2="240" y2="380" stroke="#ccc" stroke-width="1.5"/>
  <line x1="70"  y1="180" x2="60"  y2="170" stroke="#ccc" stroke-width="1.5"/>
  <line x1="70"  y1="220" x2="60"  y2="210" stroke="#ccc" stroke-width="1.5"/>
  <line x1="70"  y1="260" x2="60"  y2="250" stroke="#ccc" stroke-width="1.5"/>
  <line x1="70"  y1="300" x2="60"  y2="290" stroke="#ccc" stroke-width="1.5"/>
  <line x1="70"  y1="340" x2="60"  y2="330" stroke="#ccc" stroke-width="1.5"/>
  <line x1="830" y1="180" x2="840" y2="170" stroke="#ccc" stroke-width="1.5"/>
  <line x1="830" y1="220" x2="840" y2="210" stroke="#ccc" stroke-width="1.5"/>
  <line x1="830" y1="260" x2="840" y2="250" stroke="#ccc" stroke-width="1.5"/>
  <line x1="830" y1="300" x2="840" y2="290" stroke="#ccc" stroke-width="1.5"/>
  <line x1="830" y1="340" x2="840" y2="330" stroke="#ccc" stroke-width="1.5"/>
  <!-- Top cladding hatch -->
  <line x1="110" y1="130" x2="110" y2="190" stroke="#ccc" stroke-width="1.5"/>
  <line x1="180" y1="130" x2="180" y2="190" stroke="#ccc" stroke-width="1.5"/>
  <line x1="250" y1="130" x2="250" y2="190" stroke="#ccc" stroke-width="1.5"/>
  <line x1="320" y1="130" x2="320" y2="190" stroke="#ccc" stroke-width="1.5"/>
  <line x1="390" y1="130" x2="390" y2="190" stroke="#ccc" stroke-width="1.5"/>
  <line x1="460" y1="130" x2="460" y2="190" stroke="#ccc" stroke-width="1.5"/>
  <line x1="530" y1="130" x2="530" y2="190" stroke="#ccc" stroke-width="1.5"/>
  <line x1="600" y1="130" x2="600" y2="190" stroke="#ccc" stroke-width="1.5"/>
  <line x1="670" y1="130" x2="670" y2="190" stroke="#ccc" stroke-width="1.5"/>
  <line x1="740" y1="130" x2="740" y2="190" stroke="#ccc" stroke-width="1.5"/>
  <!-- Bottom cladding hatch -->
  <line x1="110" y1="310" x2="110" y2="350" stroke="#ccc" stroke-width="1.5"/>
  <line x1="180" y1="310" x2="180" y2="350" stroke="#ccc" stroke-width="1.5"/>
  <line x1="250" y1="310" x2="250" y2="350" stroke="#ccc" stroke-width="1.5"/>
  <line x1="320" y1="310" x2="320" y2="350" stroke="#ccc" stroke-width="1.5"/>
  <line x1="390" y1="310" x2="390" y2="350" stroke="#ccc" stroke-width="1.5"/>
  <line x1="460" y1="310" x2="460" y2="350" stroke="#ccc" stroke-width="1.5"/>
  <line x1="530" y1="310" x2="530" y2="350" stroke="#ccc" stroke-width="1.5"/>
  <line x1="600" y1="310" x2="600" y2="350" stroke="#ccc" stroke-width="1.5"/>
  <line x1="670" y1="310" x2="670" y2="350" stroke="#ccc" stroke-width="1.5"/>
  <line x1="740" y1="310" x2="740" y2="350" stroke="#ccc" stroke-width="1.5"/>

  <!-- Cladding label -->
  <text x="70" y="116" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Cladding  n₂ = 1.45</text>
  <text x="70" y="400" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Cladding  n₂ = 1.45</text>

  <!-- ══ Core (inner region) ══ -->
  <rect x="60" y="190" width="780" height="120" rx="20" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="70" y="260" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Core  n₁ = 1.50</text>

  <!-- Core-cladding interface lines (top and bottom) -->
  <line x1="60" y1="190" x2="840" y2="190" stroke="#000" stroke-width="2.5"/>
  <line x1="60" y1="310" x2="840" y2="310" stroke="#000" stroke-width="2.5"/>

  <!-- ══ Light ray bouncing inside core by TIR ══ -->
  <!-- Entry from left -->
  <line x1="30" y1="250" x2="100" y2="250" stroke="#000" stroke-width="3.5"/>
  <polygon points="92,244 104,250 92,256" fill="#000"/>
  <text x="32" y="240" font-family="Georgia,serif" font-size="11" fill="#000">Light in →</text>

  <!-- Zigzag ray inside core: reflects off top (y=190) and bottom (y=310) interfaces -->
  <!-- Segment 1: (100,250) → (210,190) -->
  <line x1="100" y1="250" x2="210" y2="190" stroke="#000" stroke-width="3"/>
  <polygon points="198,195 213,190 204,202" fill="#000"/>
  <!-- Segment 2: (210,190) → (370,310) -->
  <line x1="210" y1="190" x2="370" y2="310" stroke="#000" stroke-width="3"/>
  <polygon points="355,302 372,312 358,318" fill="#000"/>
  <!-- Segment 3: (370,310) → (530,190) -->
  <line x1="370" y1="310" x2="530" y2="190" stroke="#000" stroke-width="3"/>
  <polygon points="518,195 533,190 524,202" fill="#000"/>
  <!-- Segment 4: (530,190) → (690,310) -->
  <line x1="530" y1="190" x2="690" y2="310" stroke="#000" stroke-width="3"/>
  <polygon points="675,302 692,312 678,318" fill="#000"/>
  <!-- Segment 5: (690,310) → (840,216) → exit -->
  <line x1="690" y1="310" x2="840" y2="222" stroke="#000" stroke-width="3"/>
  <polygon points="826,226 841,220 832,234" fill="#000"/>

  <!-- TIR angle marks at each reflection -->
  <!-- At (210,190) top -->
  <path d="M 210,200 A 15,15 0 0 0 200,192" fill="none" stroke="#000" stroke-width="1.5"/>
  <path d="M 210,200 A 15,15 0 0 1 220,192" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="196" y="210" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">θ</text>
  <!-- At (370,310) bottom -->
  <path d="M 370,300 A 15,15 0 0 1 360,308" fill="none" stroke="#000" stroke-width="1.5"/>
  <path d="M 370,300 A 15,15 0 0 0 380,308" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="374" y="298" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">θ</text>
  <!-- TIR label -->
  <text x="210" y="178" font-family="Georgia,serif" font-size="10" fill="#000">TIR</text>
  <text x="365" y="330" font-family="Georgia,serif" font-size="10" fill="#000">TIR</text>
  <text x="525" y="178" font-family="Georgia,serif" font-size="10" fill="#000">TIR</text>
  <text x="685" y="330" font-family="Georgia,serif" font-size="10" fill="#000">TIR</text>

  <!-- Light out label -->
  <text x="848" y="220" font-family="Georgia,serif" font-size="11" fill="#000">→ Light out</text>

  <!-- ══ Formula / info box ══ -->
  <rect x="60" y="420" width="780" height="68" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="75" y="440" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Critical angle:  sin θ_c = n₂/n₁ = 1.45/1.50 → θ_c ≈ 75.2°</text>
  <text x="75" y="458" font-family="Georgia,serif" font-size="10" fill="#333">Light travels at angle &gt; θ_c to normal → complete reflection (no loss at interface)</text>
  <text x="75" y="474" font-family="Georgia,serif" font-size="10" fill="#333">Used in: telecommunications, endoscopes, decorative lighting, fibre-optic sensors</text>
</svg>`;

  // ─── POLARIZATION DIAGRAM ─────────────────────────────────────────────────
  // Unpolarized light → polarizer → linearly polarized → analyzer (Malus's law)
  static polarizationDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="220" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Polarization of Light — Polaroid Filters</text>
  <text x="100" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Malus's Law:  I = I₀ cos²θ   (θ = angle between polarizer and analyzer)</text>

  <!-- ══ Propagation axis ══ -->
  <line x1="40" y1="280" x2="860" y2="280" stroke="#000" stroke-width="2" stroke-dasharray="6,5"/>
  <polygon points="852,274 864,280 852,286" fill="#000"/>
  <text x="866" y="284" font-family="Georgia,serif" font-size="11" fill="#000">→ z</text>

  <!-- ══ Stage 1: Unpolarized light (left) ══ -->
  <text x="40" y="76" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">1. Unpolarized Light</text>
  <!-- Multiple oscillation directions (star pattern) -->
  <!-- Lines radiating from x=120,y=280 in all directions -->
  <line x1="80"  y1="240" x2="160" y2="320" stroke="#000" stroke-width="2"/>
  <line x1="80"  y1="280" x2="160" y2="280" stroke="#000" stroke-width="2"/>
  <line x1="80"  y1="320" x2="160" y2="240" stroke="#000" stroke-width="2"/>
  <line x1="120" y1="230" x2="120" y2="330" stroke="#000" stroke-width="2"/>
  <line x1="92"  y1="250" x2="148" y2="310" stroke="#000" stroke-width="2"/>
  <line x1="148" y1="250" x2="92"  y2="310" stroke="#000" stroke-width="2"/>
  <text x="74" y="370" font-family="Georgia,serif" font-size="10" fill="#000">oscillates in all</text>
  <text x="74" y="384" font-family="Georgia,serif" font-size="10" fill="#000">directions</text>

  <!-- ══ First Polarizer ══ -->
  <!-- Elliptical polarizer at x=250 -->
  <ellipse cx="250" cy="280" rx="18" ry="120" fill="#fff" stroke="#000" stroke-width="4"/>
  <!-- Vertical transmission lines (polarizer passes vertical) -->
  <line x1="250" y1="165" x2="250" y2="200" stroke="#000" stroke-width="2"/>
  <line x1="250" y1="210" x2="250" y2="250" stroke="#000" stroke-width="2"/>
  <line x1="250" y1="310" x2="250" y2="350" stroke="#000" stroke-width="2"/>
  <line x1="250" y1="360" x2="250" y2="395" stroke="#000" stroke-width="2"/>
  <!-- Absorption lines (horizontal, crossed) -->
  <line x1="234" y1="200" x2="266" y2="216" stroke="#000" stroke-width="1.2"/>
  <line x1="234" y1="216" x2="266" y2="232" stroke="#000" stroke-width="1.2"/>
  <line x1="234" y1="232" x2="266" y2="248" stroke="#000" stroke-width="1.2"/>
  <line x1="234" y1="312" x2="266" y2="328" stroke="#000" stroke-width="1.2"/>
  <line x1="234" y1="328" x2="266" y2="344" stroke="#000" stroke-width="1.2"/>
  <line x1="234" y1="344" x2="266" y2="360" stroke="#000" stroke-width="1.2"/>
  <text x="232" y="148" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Polarizer</text>
  <text x="230" y="426" font-family="Georgia,serif" font-size="10" fill="#000">(vertical axis)</text>

  <!-- ══ Stage 2: Linearly polarized light ══ -->
  <text x="290" y="76" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">2. Linearly Polarized</text>
  <!-- Single vertical oscillation arrows at multiple x positions -->
  <line x1="310" y1="220" x2="310" y2="340" stroke="#000" stroke-width="3"/>
  <polygon points="304,226 310,212 316,226" fill="#000"/>
  <polygon points="304,334 310,348 316,334" fill="#000"/>
  <line x1="360" y1="220" x2="360" y2="340" stroke="#000" stroke-width="3"/>
  <polygon points="354,226 360,212 366,226" fill="#000"/>
  <polygon points="354,334 360,348 366,334" fill="#000"/>
  <line x1="410" y1="220" x2="410" y2="340" stroke="#000" stroke-width="3"/>
  <polygon points="404,226 410,212 416,226" fill="#000"/>
  <polygon points="404,334 410,348 416,334" fill="#000"/>
  <line x1="460" y1="220" x2="460" y2="340" stroke="#000" stroke-width="3"/>
  <polygon points="454,226 460,212 466,226" fill="#000"/>
  <polygon points="454,334 460,348 466,334" fill="#000"/>
  <!-- Amplitude label -->
  <text x="310" y="374" font-family="Georgia,serif" font-size="10" fill="#000">I₀/2 (half intensity)</text>
  <text x="310" y="388" font-family="Georgia,serif" font-size="10" fill="#000">(vertical only)</text>

  <!-- ══ Second Polarizer (analyzer at 45°) ══ -->
  <ellipse cx="560" cy="280" rx="18" ry="120" fill="#fff" stroke="#000" stroke-width="4"/>
  <!-- 45° transmission lines -->
  <line x1="548" y1="168" x2="572" y2="192" stroke="#000" stroke-width="2"/>
  <line x1="548" y1="196" x2="572" y2="220" stroke="#000" stroke-width="2"/>
  <line x1="548" y1="224" x2="572" y2="248" stroke="#000" stroke-width="2"/>
  <line x1="548" y1="312" x2="572" y2="336" stroke="#000" stroke-width="2"/>
  <line x1="548" y1="340" x2="572" y2="364" stroke="#000" stroke-width="2"/>
  <line x1="548" y1="368" x2="572" y2="392" stroke="#000" stroke-width="2"/>
  <text x="538" y="148" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Analyzer</text>
  <text x="534" y="426" font-family="Georgia,serif" font-size="10" fill="#000">(axis at θ = 45°)</text>
  <!-- Angle arc -->
  <path d="M 560,256 A 24,24 0 0 1 577,268" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="580" y="264" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">θ</text>

  <!-- ══ Stage 3: Partially transmitted light ══ -->
  <text x="600" y="76" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">3. Transmitted (I₀cos²θ)</text>
  <!-- Diagonal arrows (45°) showing reduced amplitude -->
  <line x1="620" y1="252" x2="650" y2="308" stroke="#000" stroke-width="2.5"/>
  <polygon points="614,258 620,244 626,258" fill="#000"/>
  <polygon points="644,304 650,318 656,304" fill="#000"/>
  <line x1="670" y1="252" x2="700" y2="308" stroke="#000" stroke-width="2.5"/>
  <polygon points="664,258 670,244 676,258" fill="#000"/>
  <polygon points="694,304 700,318 706,304" fill="#000"/>
  <line x1="720" y1="252" x2="750" y2="308" stroke="#000" stroke-width="2.5"/>
  <polygon points="714,258 720,244 726,258" fill="#000"/>
  <polygon points="744,304 750,318 756,304" fill="#000"/>
  <text x="610" y="374" font-family="Georgia,serif" font-size="10" fill="#000">I = I₀ cos²(45°)</text>
  <text x="618" y="388" font-family="Georgia,serif" font-size="10" fill="#000">= I₀/2</text>

  <!-- ══ Formula box ══ -->
  <rect x="40" y="460" width="820" height="120" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="55" y="480" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Malus's Law:  I = I₀ cos²θ</text>
  <text x="55" y="500" font-family="Georgia,serif" font-size="11" fill="#000">θ = 0° → I = I₀ (max, parallel axes)   |   θ = 90° → I = 0 (crossed polarizers)</text>
  <text x="55" y="520" font-family="Georgia,serif" font-size="10" fill="#333">Unpolarized → polarizer: intensity halved (I₀/2), regardless of polarizer orientation</text>
  <text x="55" y="538" font-family="Georgia,serif" font-size="10" fill="#333">Applications: sunglasses (glare reduction), LCD screens, photography filters, 3D cinema</text>
  <text x="55" y="556" font-family="Georgia,serif" font-size="10" fill="#333">Brewster's angle: θ_B = arctan(n₂/n₁) — reflected ray fully polarized at this angle</text>
</svg>`;

  // ─── DIFFRACTION PATTERN DIAGRAM ──────────────────────────────────────────
  // Double-slit diffraction/interference pattern with intensity profile
  static diffractionPatternSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <!-- Title -->
  <text x="220" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Double Slit Diffraction — Interference Pattern</text>
  <text x="120" y="46" font-family="Georgia,serif" font-size="11" fill="#333">Path difference: d sin θ = nλ (maxima)  |  d sin θ = (n+½)λ (minima)</text>

  <!-- ══ Double slit barrier ══ -->
  <!-- Barrier at x=160 -->
  <rect x="148" y="60" width="24" height="140" fill="#000" rx="2"/>
  <rect x="148" y="240" width="24" height="80" fill="#000" rx="2"/>
  <rect x="148" y="360" width="24" height="140" fill="#000" rx="2"/>
  <!-- Slits (gaps): top slit y=200-240, bottom slit y=320-360 -->
  <text x="80" y="224" font-family="Georgia,serif" font-size="11" fill="#000">Slit 1</text>
  <text x="80" y="344" font-family="Georgia,serif" font-size="11" fill="#000">Slit 2</text>
  <!-- Slit width and separation labels -->
  <line x1="140" y1="200" x2="140" y2="240" stroke="#000" stroke-width="1.5"/>
  <polygon points="134,204 140,194 146,204" fill="#000"/>
  <polygon points="134,236 140,246 146,236" fill="#000"/>
  <text x="100" y="224" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">a</text>

  <line x1="140" y1="240" x2="140" y2="320" stroke="#000" stroke-width="1.5"/>
  <polygon points="134,244 140,234 146,244" fill="#000"/>
  <polygon points="134,316 140,326 146,316" fill="#000"/>
  <text x="100" y="284" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">d</text>

  <!-- Barrier label -->
  <text x="178" y="296" font-family="Georgia,serif" font-size="11" fill="#000">Barrier</text>

  <!-- ══ Incident waves (parallel lines from left) ══ -->
  <line x1="40" y1="140" x2="148" y2="140" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="40" y1="200" x2="148" y2="200" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="40" y1="260" x2="148" y2="260" stroke="#000" stroke-width="2" stroke-dasharray="5,4"/>
  <line x1="40" y1="320" x2="148" y2="320" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="40" y1="380" x2="148" y2="380" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="40" y1="440" x2="148" y2="440" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <polygon points="130,195 142,200 130,205" fill="#000"/>
  <polygon points="130,315 142,320 130,325" fill="#000"/>
  <text x="42" y="130" font-family="Georgia,serif" font-size="11" fill="#000">Monochromatic</text>
  <text x="50" y="144" font-family="Georgia,serif" font-size="11" fill="#000">plane waves →</text>
  <text x="58" y="158" font-family="Georgia,serif" font-size="10" fill="#333">(λ = 550 nm)</text>

  <!-- ══ Circular wavelets from each slit ══ -->
  <!-- From slit 1 (160,220) -->
  <circle cx="172" cy="220" r="30"  fill="none" stroke="#000" stroke-width="1.5"/>
  <circle cx="172" cy="220" r="60"  fill="none" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <circle cx="172" cy="220" r="90"  fill="none" stroke="#000" stroke-width="1.5"/>
  <circle cx="172" cy="220" r="120" fill="none" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <!-- From slit 2 (160,340) -->
  <circle cx="172" cy="340" r="30"  fill="none" stroke="#000" stroke-width="1.5"/>
  <circle cx="172" cy="340" r="60"  fill="none" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <circle cx="172" cy="340" r="90"  fill="none" stroke="#000" stroke-width="1.5"/>
  <circle cx="172" cy="340" r="120" fill="none" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>

  <!-- ══ Screen at x=580 ══ -->
  <rect x="570" y="60" width="16" height="440" fill="#000" rx="2"/>
  <text x="558" y="56" font-family="Georgia,serif" font-size="11" fill="#000">Screen</text>

  <!-- ══ Interference fringe pattern on screen (x=586) ══ -->
  <!-- Bright fringes as filled rectangles; dark as gaps -->
  <!-- Central maximum (widest and brightest) -->
  <rect x="586" y="240" width="24" height="80" fill="#000" rx="2"/>
  <!-- 1st order maxima (n=±1) -->
  <rect x="586" y="180" width="24" height="36" fill="#000" rx="2"/>
  <rect x="586" y="344" width="24" height="36" fill="#000" rx="2"/>
  <!-- 2nd order maxima (n=±2) -->
  <rect x="586" y="130" width="24" height="22" fill="#000" rx="2"/>
  <rect x="586" y="398" width="24" height="22" fill="#000" rx="2"/>
  <!-- 3rd order maxima (n=±3) -->
  <rect x="586" y="92" width="24" height="14" fill="#000" rx="2"/>
  <rect x="586" y="444" width="24" height="14" fill="#000" rx="2"/>

  <!-- ══ Intensity profile (x=620 onwards) ══ -->
  <!-- Axes -->
  <line x1="620" y1="60" x2="620" y2="500" stroke="#000" stroke-width="2"/>
  <line x1="620" y1="280" x2="880" y2="280" stroke="#000" stroke-width="2"/>
  <polygon points="872,274 884,280 872,286" fill="#000"/>
  <text x="886" y="284" font-family="Georgia,serif" font-size="10" fill="#000">I</text>
  <text x="600" y="56" font-family="Georgia,serif" font-size="10" fill="#000">y</text>
  <text x="628" y="296" font-family="Georgia,serif" font-size="10" fill="#000">O</text>

  <!-- Intensity curve: double-slit sinc²·cos² envelope (approximate) -->
  <!-- Central max at y=280 (amplitude=80), side maxima decreasing -->
  <path d="M 620,280
           C 630,280 640,200 650,200 C 660,200 665,280 670,280
           C 675,280 680,310 685,320 C 690,330 695,280 700,280
           C 705,280 710,248 715,245 C 720,242 725,280 730,280
           C 735,280 740,296 745,300 C 750,304 755,280 760,280
           C 765,280 770,268 775,266 C 780,264 785,280 790,280
           C 800,280 810,276 820,275 C 830,274 840,280 860,280"
        fill="none" stroke="#000" stroke-width="0"/>
  <!-- Draw intensity profile manually with symmetric humps -->
  <!-- Central peak (amplitude 80px up and down of y=280) -->
  <path d="M 620,280 C 635,280 640,200 660,200 C 680,200 685,280 700,280"
        fill="none" stroke="#000" stroke-width="2.5"/>
  <path d="M 620,280 C 635,280 640,360 660,360 C 680,360 685,280 700,280"
        fill="none" stroke="#000" stroke-width="2.5"/>
  <!-- 1st order side peaks (amplitude ~45px) -->
  <path d="M 700,280 C 710,280 715,235 725,235 C 735,235 740,280 750,280"
        fill="none" stroke="#000" stroke-width="2"/>
  <path d="M 700,280 C 710,280 715,325 725,325 C 735,325 740,280 750,280"
        fill="none" stroke="#000" stroke-width="2"/>
  <!-- 2nd order side peaks (amplitude ~25px) -->
  <path d="M 750,280 C 758,280 762,255 770,255 C 778,255 782,280 790,280"
        fill="none" stroke="#000" stroke-width="1.8"/>
  <path d="M 750,280 C 758,280 762,305 770,305 C 778,305 782,280 790,280"
        fill="none" stroke="#000" stroke-width="1.8"/>
  <!-- 3rd order (small) -->
  <path d="M 790,280 C 797,280 800,267 808,267 C 816,267 820,280 828,280"
        fill="none" stroke="#000" stroke-width="1.5"/>
  <path d="M 790,280 C 797,280 800,293 808,293 C 816,293 820,280 828,280"
        fill="none" stroke="#000" stroke-width="1.5"/>

  <!-- Fringe labels -->
  <text x="628" y="195" font-family="Georgia,serif" font-size="9" fill="#000">n=0</text>
  <text x="628" y="238" font-family="Georgia,serif" font-size="9" fill="#000">n=±1</text>
  <text x="628" y="258" font-family="Georgia,serif" font-size="9" fill="#000">n=±2</text>

  <!-- Path difference diagram (between barrier and screen) -->
  <line x1="172" y1="220" x2="580" y2="260" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="172" y1="340" x2="580" y2="260" stroke="#000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <text x="340" y="254" font-family="Georgia,serif" font-size="10" fill="#000">path diff = nλ</text>
  <!-- Angle θ -->
  <path d="M 200,280 A 30,30 0 0 0 210,262" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="214" y="276" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">θ</text>

  <!-- ══ Formula box ══ -->
  <rect x="40" y="510" width="820" height="76" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="55" y="530" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Double-slit conditions:  d sin θ = nλ  (bright)   |   d sin θ = (n + ½)λ  (dark)</text>
  <text x="55" y="550" font-family="Georgia,serif" font-size="11" fill="#000">Fringe spacing:  Δy = λD/d   (D = screen distance, d = slit separation)</text>
  <text x="55" y="568" font-family="Georgia,serif" font-size="10" fill="#333">Single-slit minimum:  a sin θ = nλ   |   Resolving power:  θ_min ≈ 1.22λ/D  (Rayleigh criterion)</text>
</svg>`;







// ─── VECTOR ADDITION DIAGRAM ──────────────────────────────────────────────
  static vectorDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 500 460">

  <!-- Title -->
  <text x="100" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Vector Addition — Tip-to-Tail Method</text>
  <text x="110" y="38" font-family="Georgia,serif" font-size="10" fill="#555">Resultant R = A + B found by placing vectors head to tail</text>

  <!-- Grid -->
  <defs>
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ddd" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect x="60" y="55" width="380" height="300" fill="url(#grid)" stroke="#ccc" stroke-width="1"/>

  <!-- Axes -->
  <line x1="60" y1="205" x2="440" y2="205" stroke="#555" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="250" y1="55"  x2="250" y2="355" stroke="#555" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="442" y="209" font-family="Georgia,serif" font-size="11" fill="#555">x</text>
  <text x="253" y="52"  font-family="Georgia,serif" font-size="11" fill="#555">y</text>

  <!-- Origin dot -->
  <circle cx="150" cy="265" r="4" fill="#000"/>
  <text x="136" y="280" font-family="Georgia,serif" font-size="10" fill="#000">O</text>

  <!-- Vector A: from (150,265) rightward 160px, upward 100px → tip at (310,165) -->
  <line x1="150" y1="265" x2="306" y2="169" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <polygon points="300,163 314,165 304,175" fill="#000"/>
  <text x="215" y="198" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">A</text>

  <!-- Component projections for A (dashed) -->
  <line x1="150" y1="265" x2="310" y2="265" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="310" y1="265" x2="310" y2="165" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="220" y="280" font-family="Georgia,serif" font-size="10" fill="#555">Ax</text>
  <text x="314" y="220" font-family="Georgia,serif" font-size="10" fill="#555">Ay</text>

  <!-- Vector B: from tip of A (310,165) → +80px right, -60px down → tip at (390,225) -->
  <line x1="310" y1="165" x2="386" y2="221" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-dasharray="8,3"/>
  <polygon points="380,215 392,224 381,230" fill="#000"/>
  <text x="356" y="183" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">B</text>

  <!-- Component projections for B (dashed) -->
  <line x1="310" y1="165" x2="390" y2="165" stroke="#aaa" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="390" y1="165" x2="390" y2="225" stroke="#aaa" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="342" y="158" font-family="Georgia,serif" font-size="10" fill="#aaa">Bx</text>
  <text x="394" y="200" font-family="Georgia,serif" font-size="10" fill="#aaa">By</text>

  <!-- Resultant R: from O (150,265) to (390,225) -->
  <line x1="150" y1="265" x2="384" y2="227" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>
  <polygon points="378,221 394,225 381,233" fill="#000"/>
  <text x="255" y="262" font-family="Georgia,serif" font-size="13" font-weight="bold" font-style="italic" fill="#000">R</text>
  <!-- angle arc -->
  <path d="M 180,265 A 30,30 0 0,0 168,242" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="184" y="254" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">θ</text>

  <!-- Legend -->
  <line x1="68" y1="375" x2="108" y2="375" stroke="#000" stroke-width="3"/>
  <polygon points="104,371 114,375 104,379" fill="#000"/>
  <text x="118" y="379" font-family="Georgia,serif" font-size="11" fill="#000">Vector A</text>

  <line x1="68" y1="393" x2="108" y2="393" stroke="#000" stroke-width="3" stroke-dasharray="8,3"/>
  <polygon points="104,389 114,393 104,397" fill="#000"/>
  <text x="118" y="397" font-family="Georgia,serif" font-size="11" fill="#000">Vector B</text>

  <line x1="68" y1="411" x2="108" y2="411" stroke="#000" stroke-width="3.5"/>
  <polygon points="104,407 114,411 104,415" fill="#000"/>
  <text x="118" y="415" font-family="Georgia,serif" font-size="11" fill="#000">Resultant R = A + B</text>

  <!-- Info box -->
  <rect x="250" y="368" width="210" height="76" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="260" y="386" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Relations:</text>
  <text x="260" y="402" font-family="Georgia,serif" font-size="10" fill="#000">|R| = √(Rx² + Ry²)</text>
  <text x="260" y="418" font-family="Georgia,serif" font-size="10" fill="#000">θ = arctan(Ry / Rx)</text>
  <text x="260" y="434" font-family="Georgia,serif" font-size="10" fill="#555">Rx = Ax+Bx,  Ry = Ay+By</text>
</svg>`;

  // ─── MOTION GRAPHS (s-t, v-t, a-t) ───────────────────────────────────────
  static motionGraphsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 540 500">

  <!-- Title -->
  <text x="130" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Motion Graphs — s-t, v-t and a-t</text>
  <text x="100" y="38" font-family="Georgia,serif" font-size="10" fill="#555">Phase 1: accelerating | Phase 2: constant v | Phase 3: decelerating to rest</text>

  <!-- ══ GRAPH 1: Displacement-Time (s-t) ══ -->
  <text x="30" y="62" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">1. Displacement–Time  (s-t)</text>
  <!-- Axes -->
  <line x1="60" y1="140" x2="60"  y2="68" stroke="#000" stroke-width="2"/>
  <line x1="60" y1="140" x2="480" y2="140" stroke="#000" stroke-width="2"/>
  <polygon points="56,72 60,62 64,72" fill="#000"/>
  <polygon points="476,136 486,140 476,144" fill="#000"/>
  <text x="488" y="144" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">t</text>
  <text x="64"  y="64"  font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">s</text>
  <!-- Phase markers on t-axis -->
  <line x1="180" y1="138" x2="180" y2="142" stroke="#000" stroke-width="1.5"/>
  <line x1="300" y1="138" x2="300" y2="142" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="138" x2="420" y2="142" stroke="#000" stroke-width="1.5"/>
  <text x="173" y="154" font-family="Georgia,serif" font-size="10" fill="#555">t₁</text>
  <text x="293" y="154" font-family="Georgia,serif" font-size="10" fill="#555">t₂</text>
  <text x="413" y="154" font-family="Georgia,serif" font-size="10" fill="#555">t₃</text>
  <!-- s-t curve: parabola phase1, straight phase2, curve phase3 -->
  <path d="M60,140 Q120,140 180,105" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="180" y1="105" x2="300" y2="80" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M300,80 Q360,68 420,68" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Labels -->
  <text x="80"  y="128" font-family="Georgia,serif" font-size="9" fill="#555">curved (a≠0)</text>
  <text x="196" y="88"  font-family="Georgia,serif" font-size="9" fill="#555">straight (a=0)</text>
  <text x="316" y="72"  font-family="Georgia,serif" font-size="9" fill="#555">curved (a≠0)</text>
  <!-- gradient annotation -->
  <line x1="200" y1="102" x2="280" y2="78" stroke="#555" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="228" y="100" font-family="Georgia,serif" font-size="9" fill="#555">slope = v</text>

  <!-- ══ GRAPH 2: Velocity-Time (v-t) ══ -->
  <text x="30" y="192" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">2. Velocity–Time  (v-t)</text>
  <!-- Axes -->
  <line x1="60" y1="270" x2="60"  y2="198" stroke="#000" stroke-width="2"/>
  <line x1="60" y1="270" x2="480" y2="270" stroke="#000" stroke-width="2"/>
  <polygon points="56,202 60,192 64,202" fill="#000"/>
  <polygon points="476,266 486,270 476,274" fill="#000"/>
  <text x="488" y="274" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">t</text>
  <text x="64"  y="194" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">v</text>
  <!-- Phase markers -->
  <line x1="180" y1="268" x2="180" y2="272" stroke="#000" stroke-width="1.5"/>
  <line x1="300" y1="268" x2="300" y2="272" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="268" x2="420" y2="272" stroke="#000" stroke-width="1.5"/>
  <text x="173" y="282" font-family="Georgia,serif" font-size="10" fill="#555">t₁</text>
  <text x="293" y="282" font-family="Georgia,serif" font-size="10" fill="#555">t₂</text>
  <text x="413" y="282" font-family="Georgia,serif" font-size="10" fill="#555">t₃</text>
  <!-- v-t line: ramp up, flat, ramp down -->
  <line x1="60"  y1="270" x2="180" y2="220" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="180" y1="220" x2="300" y2="220" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="300" y1="220" x2="420" y2="270" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Area shading (hatching for displacement) -->
  <line x1="90"  y1="265" x2="70"  y2="270" stroke="#aaa" stroke-width="1"/>
  <line x1="110" y1="256" x2="90"  y2="270" stroke="#aaa" stroke-width="1"/>
  <line x1="130" y1="247" x2="110" y2="270" stroke="#aaa" stroke-width="1"/>
  <line x1="150" y1="238" x2="130" y2="270" stroke="#aaa" stroke-width="1"/>
  <line x1="170" y1="229" x2="150" y2="270" stroke="#aaa" stroke-width="1"/>
  <line x1="190" y1="220" x2="170" y2="270" stroke="#aaa" stroke-width="1"/>
  <line x1="210" y1="220" x2="192" y2="270" stroke="#aaa" stroke-width="1"/>
  <line x1="230" y1="220" x2="212" y2="270" stroke="#aaa" stroke-width="1"/>
  <line x1="250" y1="220" x2="232" y2="270" stroke="#aaa" stroke-width="1"/>
  <line x1="270" y1="220" x2="252" y2="270" stroke="#aaa" stroke-width="1"/>
  <line x1="290" y1="220" x2="272" y2="270" stroke="#aaa" stroke-width="1"/>
  <!-- slope annotation -->
  <text x="78"  y="252" font-family="Georgia,serif" font-size="9" fill="#555">slope=a</text>
  <text x="225" y="214" font-family="Georgia,serif" font-size="9" fill="#555">slope=0</text>
  <text x="334" y="252" font-family="Georgia,serif" font-size="9" fill="#555">slope=−a</text>
  <text x="210" y="245" font-family="Georgia,serif" font-size="9" fill="#aaa">area = Δs</text>

  <!-- ══ GRAPH 3: Acceleration-Time (a-t) ══ -->
  <text x="30" y="318" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">3. Acceleration–Time  (a-t)</text>
  <!-- Axes -->
  <line x1="60" y1="400" x2="60"  y2="328" stroke="#000" stroke-width="2"/>
  <line x1="60" y1="400" x2="480" y2="400" stroke="#000" stroke-width="2"/>
  <polygon points="56,332 60,322 64,332" fill="#000"/>
  <polygon points="476,396 486,400 476,404" fill="#000"/>
  <text x="488" y="404" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">t</text>
  <text x="64"  y="324" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">a</text>
  <!-- Phase markers -->
  <line x1="180" y1="398" x2="180" y2="402" stroke="#000" stroke-width="1.5"/>
  <line x1="300" y1="398" x2="300" y2="402" stroke="#000" stroke-width="1.5"/>
  <line x1="420" y1="398" x2="420" y2="402" stroke="#000" stroke-width="1.5"/>
  <text x="173" y="414" font-family="Georgia,serif" font-size="10" fill="#555">t₁</text>
  <text x="293" y="414" font-family="Georgia,serif" font-size="10" fill="#555">t₂</text>
  <text x="413" y="414" font-family="Georgia,serif" font-size="10" fill="#555">t₃</text>
  <!-- a-t: constant positive, zero, constant negative -->
  <line x1="60"  y1="358" x2="180" y2="358" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="180" y1="358" x2="180" y2="400" stroke="#000" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="180" y1="400" x2="300" y2="400" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="300" y1="400" x2="300" y2="440" stroke="#000" stroke-width="1.5" stroke-dasharray="3,2"/>
  <!-- Negative a region — need to show below axis -->
  <!-- Re-centre: axis at y=400; +a block at y=358; 0 at y=400; -a at y=440 -->
  <line x1="300" y1="440" x2="420" y2="440" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="420" y1="440" x2="420" y2="400" stroke="#000" stroke-width="1.5" stroke-dasharray="3,2"/>
  <!-- label +a and -a -->
  <text x="64"  y="355" font-family="Georgia,serif" font-size="9" fill="#555">+a</text>
  <text x="64"  y="444" font-family="Georgia,serif" font-size="9" fill="#555">−a</text>
  <text x="110" y="348" font-family="Georgia,serif" font-size="9" fill="#555">constant +a</text>
  <text x="196" y="394" font-family="Georgia,serif" font-size="9" fill="#555">a = 0</text>
  <text x="334" y="450" font-family="Georgia,serif" font-size="9" fill="#555">constant −a</text>

  <!-- Formulae box -->
  <rect x="60" y="458" width="420" height="30" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="70" y="476" font-family="Georgia,serif" font-size="10" fill="#000">v = u + at  |  s = ut + ½at²  |  v² = u² + 2as  |  slope of v-t = a  |  area under v-t = Δs</text>
</svg>`;

  // ─── PROJECTILE MOTION ────────────────────────────────────────────────────
  static projectileMotionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 540 440">

  <!-- Title -->
  <text x="120" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Projectile Motion — Parabolic Trajectory</text>
  <text x="100" y="38" font-family="Georgia,serif" font-size="10" fill="#555">Horizontal: uniform motion | Vertical: free fall under gravity</text>

  <!-- Ground line -->
  <line x1="40" y1="330" x2="500" y2="330" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  <!-- Hatch marks -->
  <line x1="50"  y1="330" x2="42"  y2="342" stroke="#555" stroke-width="1.5"/>
  <line x1="70"  y1="330" x2="62"  y2="342" stroke="#555" stroke-width="1.5"/>
  <line x1="90"  y1="330" x2="82"  y2="342" stroke="#555" stroke-width="1.5"/>
  <line x1="110" y1="330" x2="102" y2="342" stroke="#555" stroke-width="1.5"/>
  <line x1="130" y1="330" x2="122" y2="342" stroke="#555" stroke-width="1.5"/>
  <line x1="150" y1="330" x2="142" y2="342" stroke="#555" stroke-width="1.5"/>
  <line x1="170" y1="330" x2="162" y2="342" stroke="#555" stroke-width="1.5"/>
  <line x1="200" y1="330" x2="192" y2="342" stroke="#555" stroke-width="1.5"/>
  <line x1="240" y1="330" x2="232" y2="342" stroke="#555" stroke-width="1.5"/>
  <line x1="280" y1="330" x2="272" y2="342" stroke="#555" stroke-width="1.5"/>
  <line x1="320" y1="330" x2="312" y2="342" stroke="#555" stroke-width="1.5"/>
  <line x1="360" y1="330" x2="352" y2="342" stroke="#555" stroke-width="1.5"/>
  <line x1="400" y1="330" x2="392" y2="342" stroke="#555" stroke-width="1.5"/>
  <line x1="440" y1="330" x2="432" y2="342" stroke="#555" stroke-width="1.5"/>
  <line x1="480" y1="330" x2="472" y2="342" stroke="#555" stroke-width="1.5"/>

  <!-- Parabolic trajectory: launch at (60,330), peak at (280,130), land at (500,330) -->
  <path d="M60,330 Q280,50 500,330" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Launch point -->
  <circle cx="60" cy="330" r="5" fill="#000"/>
  <!-- Landing point -->
  <circle cx="500" cy="330" r="5" fill="#000"/>

  <!-- Launch velocity vector -->
  <line x1="60" y1="330" x2="112" y2="278" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="108,272 116,270 114,280" fill="#000"/>
  <text x="116" y="272" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">u</text>

  <!-- Launch angle arc -->
  <path d="M 88,330 A 28,28 0 0,0 76,308" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="90" y="318" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">θ</text>

  <!-- Horizontal component (ux) -->
  <line x1="60" y1="330" x2="112" y2="330" stroke="#555" stroke-width="1.8" stroke-dasharray="4,2"/>
  <polygon points="108,326 118,330 108,334" fill="#555"/>
  <text x="74" y="348" font-family="Georgia,serif" font-size="10" fill="#555">uₓ = u cos θ</text>

  <!-- Vertical component (uy) -->
  <line x1="112" y1="330" x2="112" y2="278" stroke="#555" stroke-width="1.8" stroke-dasharray="4,2"/>
  <polygon points="108,282 112,272 116,282" fill="#555"/>
  <text x="116" y="305" font-family="Georgia,serif" font-size="10" fill="#555">uᵧ = u sin θ</text>

  <!-- Velocity vectors at several points along trajectory -->
  <!-- At ~quarter way (170, 198): vx right, vy up -->
  <circle cx="170" cy="195" r="3" fill="#000"/>
  <line x1="170" y1="195" x2="210" y2="195" stroke="#000" stroke-width="1.8"/>
  <polygon points="206,191 216,195 206,199" fill="#000"/>
  <text x="218" y="193" font-family="Georgia,serif" font-size="9" fill="#555">vₓ</text>
  <line x1="170" y1="195" x2="170" y2="165" stroke="#000" stroke-width="1.8"/>
  <polygon points="166,169 170,159 174,169" fill="#000"/>
  <text x="174" y="162" font-family="Georgia,serif" font-size="9" fill="#555">vᵧ</text>

  <!-- At peak (280, 130): vx only, vy = 0 -->
  <circle cx="280" cy="130" r="3" fill="#000"/>
  <line x1="280" y1="130" x2="320" y2="130" stroke="#000" stroke-width="1.8"/>
  <polygon points="316,126 326,130 316,134" fill="#000"/>
  <text x="328" y="128" font-family="Georgia,serif" font-size="9" fill="#555">vₓ (vᵧ=0)</text>
  <!-- H label: max height -->
  <line x1="280" y1="130" x2="280" y2="330" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="268" y1="130" x2="270" y2="330" stroke="#000" stroke-width="1.5"/>
  <polygon points="264,230 268,220 272,230" fill="#000"/>
  <polygon points="264,235 268,245 272,235" fill="#000"/>
  <text x="248" y="235" font-family="Georgia,serif" font-size="11" font-weight="bold" font-style="italic" fill="#000">H</text>

  <!-- At 3/4 way (390, 198): vx right, vy down -->
  <circle cx="390" cy="198" r="3" fill="#000"/>
  <line x1="390" y1="198" x2="430" y2="198" stroke="#000" stroke-width="1.8"/>
  <polygon points="426,194 436,198 426,202" fill="#000"/>
  <line x1="390" y1="198" x2="390" y2="228" stroke="#000" stroke-width="1.8"/>
  <polygon points="386,224 390,234 394,224" fill="#000"/>

  <!-- Range R annotation -->
  <line x1="60" y1="356" x2="500" y2="356" stroke="#000" stroke-width="1.8"/>
  <polygon points="64,352 54,356 64,360" fill="#000"/>
  <polygon points="496,352 506,356 496,360" fill="#000"/>
  <text x="260" y="372" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">R (Range)</text>

  <!-- g arrow -->
  <line x1="470" y1="130" x2="470" y2="180" stroke="#000" stroke-width="2.5"/>
  <polygon points="466,176 470,188 474,176" fill="#000"/>
  <text x="476" y="158" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">g</text>

  <!-- Info box -->
  <rect x="42" y="390" width="456" height="38" rx="5" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="52" y="406" font-family="Georgia,serif" font-size="10" fill="#000">R = u² sin 2θ / g  |  H = u² sin²θ / 2g  |  T = 2u sinθ / g  |  vₓ = u cosθ (const)  |  vᵧ = u sinθ − gt</text>
</svg>`;

  // ─── INCLINED PLANE ───────────────────────────────────────────────────────
  static inclinedPlaneSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 500 440">

  <!-- Title -->
  <text x="90" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Inclined Plane — Forces on a Block</text>
  <text x="80" y="38" font-family="Georgia,serif" font-size="10" fill="#555">Resolving weight into components parallel and perpendicular to slope</text>

  <!-- Inclined plane triangle -->
  <!-- Base: (60,360) to (440,360) | Hypotenuse: (60,360) to (440,160) | Vertical right side -->
  <polygon points="60,360 440,360 440,160" fill="#e8e8e8" stroke="#000" stroke-width="2.5" stroke-linejoin="round"/>

  <!-- Hatch the base (ground) -->
  <line x1="60"  y1="360" x2="52"  y2="372" stroke="#555" stroke-width="1.5"/>
  <line x1="88"  y1="360" x2="80"  y2="372" stroke="#555" stroke-width="1.5"/>
  <line x1="116" y1="360" x2="108" y2="372" stroke="#555" stroke-width="1.5"/>
  <line x1="144" y1="360" x2="136" y2="372" stroke="#555" stroke-width="1.5"/>
  <line x1="172" y1="360" x2="164" y2="372" stroke="#555" stroke-width="1.5"/>
  <line x1="200" y1="360" x2="192" y2="372" stroke="#555" stroke-width="1.5"/>
  <line x1="228" y1="360" x2="220" y2="372" stroke="#555" stroke-width="1.5"/>
  <line x1="256" y1="360" x2="248" y2="372" stroke="#555" stroke-width="1.5"/>
  <line x1="284" y1="360" x2="276" y2="372" stroke="#555" stroke-width="1.5"/>
  <line x1="312" y1="360" x2="304" y2="372" stroke="#555" stroke-width="1.5"/>
  <line x1="340" y1="360" x2="332" y2="372" stroke="#555" stroke-width="1.5"/>
  <line x1="368" y1="360" x2="360" y2="372" stroke="#555" stroke-width="1.5"/>
  <line x1="396" y1="360" x2="388" y2="372" stroke="#555" stroke-width="1.5"/>
  <line x1="424" y1="360" x2="416" y2="372" stroke="#555" stroke-width="1.5"/>

  <!-- Angle arc and label at base (60,360) -->
  <path d="M 100,360 A 40,40 0 0,0 88,327" fill="none" stroke="#000" stroke-width="1.8"/>
  <text x="104" y="350" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">θ</text>

  <!-- Block on slope — centred at slope midpoint (~(270,255)) rotated ~27°
       Using a parallelogram approximation: -->
  <!-- Slope direction unit vector: dx=380/√(380²+200²)≈0.885, dy=-200/437≈-0.458 -->
  <!-- Block centre at (250,260), draw rotated rect using line quadrilateral -->
  <polygon points="218,243 282,210 300,245 236,278" fill="#d0d0d0" stroke="#000" stroke-width="2.5"/>
  <!-- mass label -->
  <text x="247" y="248" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">m</text>
  <!-- centre dot -->
  <circle cx="259" cy="244" r="3" fill="#000"/>

  <!-- Weight W straight down -->
  <line x1="259" y1="244" x2="259" y2="340" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="255,336 259,348 263,336" fill="#000"/>
  <text x="264" y="330" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">W</text>
  <text x="264" y="344" font-family="Georgia,serif" font-size="10" fill="#555">(= mg)</text>

  <!-- Normal force N perpendicular to slope -->
  <!-- Perpendicular to slope direction (0.885,−0.458) is (0.458,0.885) outward from surface -->
  <!-- N direction: from (259,244) going (−0.458,−0.885)*80 → (222, 173) -->
  <line x1="259" y1="244" x2="223" y2="174" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="217,178 221,166 229,174" fill="#000"/>
  <text x="198" y="168" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">N</text>
  <text x="184" y="180" font-family="Georgia,serif" font-size="10" fill="#555">= mg cosθ</text>

  <!-- mg sinθ component (down the slope) -->
  <!-- Slope down direction: (0.885, 0.458)*70 = (62,32) from block centre → (321,276) -->
  <line x1="259" y1="244" x2="319" y2="273" stroke="#555" stroke-width="2" stroke-dasharray="5,3"/>
  <polygon points="315,269 327,275 317,281" fill="#555"/>
  <text x="326" y="270" font-family="Georgia,serif" font-size="10" fill="#555">mg sinθ</text>
  <text x="326" y="282" font-family="Georgia,serif" font-size="9" fill="#555">(down slope)</text>

  <!-- mg cosθ component (into slope, same as N direction but opposite)  -->
  <!-- already shown via N above; add dashed component line for W decomposition -->
  <line x1="259" y1="340" x2="259" y2="244" stroke="#aaa" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="259" y1="340" x2="319" y2="273" stroke="#aaa" stroke-width="1" stroke-dasharray="3,3"/>

  <!-- Friction force f up the slope -->
  <!-- Up slope direction: (−0.885,−0.458)*60 from (259,244) → (206,217) -->
  <line x1="259" y1="244" x2="207" y2="217" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="201,221 205,209 213,217" fill="#000"/>
  <text x="168" y="213" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">f</text>
  <text x="156" y="225" font-family="Georgia,serif" font-size="10" fill="#555">= μN (up slope)</text>

  <!-- Right-angle mark at foot of slope to show θ also appears there -->
  <rect x="430" y="150" width="10" height="10" fill="none" stroke="#000" stroke-width="1.5"/>

  <!-- Info box -->
  <rect x="42" y="390" width="416" height="38" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="52" y="406" font-family="Georgia,serif" font-size="10" fill="#000">ΣF∥ = mg sinθ − f = ma  |  ΣF⊥ = N − mg cosθ = 0  |  f = μN = μmg cosθ</text>
  <text x="52" y="420" font-family="Georgia,serif" font-size="9" fill="#555">Limiting case: a = g(sinθ − μcosθ)</text>
</svg>`;

  // ─── MOMENTUM COLLISION ───────────────────────────────────────────────────
  static momentumCollisionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 540 460">

  <!-- Title -->
  <text x="100" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Momentum &amp; Collision — Elastic vs Inelastic</text>
  <text x="100" y="38" font-family="Georgia,serif" font-size="10" fill="#555">Conservation of momentum: p_total before = p_total after</text>

  <!-- ══ BEFORE COLLISION ══ -->
  <text x="30" y="62" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">BEFORE collision</text>
  <!-- Track line -->
  <line x1="30" y1="120" x2="510" y2="120" stroke="#555" stroke-width="2"/>

  <!-- Object 1: mass m₁, moving right at u₁ -->
  <rect x="60" y="90" width="80" height="60" rx="6" fill="#e0e0e0" stroke="#000" stroke-width="2.5"/>
  <text x="86" y="126" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">m₁</text>
  <!-- velocity arrow right -->
  <line x1="140" y1="120" x2="210" y2="120" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="206,115 218,120 206,125" fill="#000"/>
  <text x="164" y="112" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">u₁ →</text>

  <!-- Object 2: mass m₂, moving left at u₂ -->
  <rect x="360" y="90" width="80" height="60" rx="6" fill="#b0b0b0" stroke="#000" stroke-width="2.5"/>
  <text x="386" y="126" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">m₂</text>
  <!-- velocity arrow left -->
  <line x1="360" y1="120" x2="292" y2="120" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="296,115 284,120 296,125" fill="#000"/>
  <text x="304" y="112" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">← u₂</text>

  <!-- momentum labels -->
  <text x="68" y="84" font-family="Georgia,serif" font-size="10" fill="#555">p₁ = m₁u₁</text>
  <text x="356" y="84" font-family="Georgia,serif" font-size="10" fill="#555">p₂ = m₂u₂</text>

  <!-- ══ COLLISION ZONE ══ -->
  <line x1="270" y1="55" x2="270" y2="160" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="248" y="52" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">collision</text>

  <!-- ══ AFTER — ELASTIC ══ -->
  <text x="30" y="195" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">AFTER — Elastic collision  (KE conserved)</text>
  <line x1="30" y1="250" x2="510" y2="250" stroke="#555" stroke-width="2"/>

  <!-- m₁ bounces left -->
  <rect x="60" y="220" width="80" height="60" rx="6" fill="#e0e0e0" stroke="#000" stroke-width="2.5"/>
  <text x="86" y="255" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">m₁</text>
  <line x1="60" y1="250" x2="30" y2="250" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="34,245 22,250 34,255" fill="#000"/>
  <text x="26" y="242" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">← v₁</text>

  <!-- m₂ moves right -->
  <rect x="360" y="220" width="80" height="60" rx="6" fill="#b0b0b0" stroke="#000" stroke-width="2.5"/>
  <text x="386" y="255" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">m₂</text>
  <line x1="440" y1="250" x2="510" y2="250" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="506,245 518,250 506,255" fill="#000"/>
  <text x="464" y="242" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">v₂ →</text>

  <!-- elastic formulae -->
  <text x="168" y="218" font-family="Georgia,serif" font-size="9" fill="#555">v₁ = (m₁−m₂)u₁/(m₁+m₂) + 2m₂u₂/(m₁+m₂)</text>
  <text x="168" y="230" font-family="Georgia,serif" font-size="9" fill="#555">v₂ = 2m₁u₁/(m₁+m₂) + (m₂−m₁)u₂/(m₁+m₂)</text>

  <!-- ══ AFTER — PERFECTLY INELASTIC ══ -->
  <text x="30" y="320" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">AFTER — Perfectly Inelastic  (objects stick together)</text>
  <line x1="30" y1="374" x2="510" y2="374" stroke="#555" stroke-width="2"/>

  <!-- Combined mass moving right -->
  <rect x="180" y="344" width="140" height="60" rx="6" fill="#c0c0c0" stroke="#000" stroke-width="2.5"/>
  <text x="226" y="378" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">m₁+m₂</text>
  <line x1="320" y1="374" x2="390" y2="374" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="386,369 398,374 386,379" fill="#000"/>
  <text x="340" y="366" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">v →</text>

  <text x="160" y="340" font-family="Georgia,serif" font-size="9" fill="#555">v = (m₁u₁ + m₂u₂) / (m₁ + m₂)</text>
  <text x="160" y="328" font-family="Georgia,serif" font-size="9" fill="#555">KE lost = ½m₁u₁² + ½m₂u₂² − ½(m₁+m₂)v²</text>

  <!-- Info box -->
  <rect x="30" y="418" width="480" height="30" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="40" y="434" font-family="Georgia,serif" font-size="10" fill="#000">Conservation: Σp = const always  |  Elastic: ΔKE = 0  |  Inelastic: ΔKE &lt; 0  |  Impulse J = FΔt = Δp</text>
</svg>`;

  // ─── CIRCULAR MOTION ─────────────────────────────────────────────────────
  static circularMotionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 500 480">

  <!-- Title -->
  <text x="100" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Circular Motion — Centripetal Force &amp; Acceleration</text>
  <text x="90" y="38" font-family="Georgia,serif" font-size="10" fill="#555">Object moves in a circle; net force always directed toward centre</text>

  <!-- Circle of motion -->
  <circle cx="250" cy="240" r="140" fill="none" stroke="#555" stroke-width="2" stroke-dasharray="6,4"/>

  <!-- Centre point -->
  <circle cx="250" cy="240" r="5" fill="#000"/>
  <text x="256" y="238" font-family="Georgia,serif" font-size="11" fill="#555">centre</text>

  <!-- Radius line to object position at top-right (~45°): (250+99,240-99)=(349,141) -->
  <line x1="250" y1="240" x2="349" y2="141" stroke="#555" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="304" y="210" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#555">r</text>

  <!-- Object (ball) at ~45° position -->
  <circle cx="349" cy="141" r="18" fill="#d0d0d0" stroke="#000" stroke-width="2.5"/>
  <text x="342" y="146" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">m</text>

  <!-- Velocity vector (tangent, perpendicular to radius, pointing upper-left from 45° pos) -->
  <!-- tangent at 45°: direction (−sin45°, −cos45°)=(−0.707,−0.707) ... actually tangent is 
       perpendicular CCW to radius (0.707,−0.707): tangent = (0.707, 0.707)... 
       For CCW motion at 45°: velocity direction = 90° CCW from radius direction (0.707,−0.707) = (0.707, 0.707)
       Hmm - let's just draw it clearly going left and up from the ball. -->
  <line x1="349" y1="141" x2="280" y2="80" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="274,86 278,72 286,82" fill="#000"/>
  <text x="278" y="70" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">v</text>
  <text x="266" y="83" font-family="Georgia,serif" font-size="9" fill="#555">(tangential)</text>

  <!-- Centripetal acceleration / force vector (toward centre) -->
  <line x1="349" y1="141" x2="282" y2="192" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="276,188 280,200 288,190" fill="#000"/>
  <text x="312" y="152" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Fc , ac</text>
  <text x="298" y="164" font-family="Georgia,serif" font-size="9" fill="#555">(toward centre)</text>

  <!-- Angular velocity ω arc -->
  <path d="M 250,240 m 50,0 A 50,50 0 0,0 285,205" fill="none" stroke="#000" stroke-width="2"/>
  <polygon points="282,200 290,200 286,210" fill="#000"/>
  <text x="310" y="235" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#000">ω</text>

  <!-- Period arc label -->
  <path d="M 250,100 A 140,140 0 0,0 110,240" fill="none" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="130" y="148" font-family="Georgia,serif" font-size="10" fill="#555">T (period)</text>

  <!-- Positions at other angles showing velocity tangents (dashed) -->
  <!-- At 180° (left): ball at (110,240) -->
  <circle cx="110" cy="240" r="10" fill="#e0e0e0" stroke="#555" stroke-width="1.5"/>
  <line x1="110" y1="240" x2="110" y2="174" stroke="#555" stroke-width="1.5" stroke-dasharray="4,2"/>
  <polygon points="106,178 110,168 114,178" fill="#555"/>

  <!-- At 270° (bottom): ball at (250,380) -->
  <circle cx="250" cy="380" r="10" fill="#e0e0e0" stroke="#555" stroke-width="1.5"/>
  <line x1="250" y1="380" x2="316" y2="380" stroke="#555" stroke-width="1.5" stroke-dasharray="4,2"/>
  <polygon points="312,376 322,380 312,384" fill="#555"/>

  <!-- Formula box -->
  <rect x="30" y="390" width="440" height="76" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="40" y="408" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Equations:</text>
  <text x="40" y="424" font-family="Georgia,serif" font-size="10" fill="#000">ac = v²/r = ω²r  |  Fc = mv²/r = mω²r  |  v = ωr  |  T = 2π/ω = 2πr/v</text>
  <text x="40" y="440" font-family="Georgia,serif" font-size="10" fill="#000">ω = 2πf  |  f = 1/T  |  Centripetal ≠ centrifugal (centrifugal is a pseudo-force in rotating frame)</text>
  <text x="40" y="456" font-family="Georgia,serif" font-size="9" fill="#555">Note: centripetal force is provided by tension, gravity, normal force, friction, etc. — context dependent</text>
</svg>`;

  // ─── WORK-ENERGY BAR CHART ────────────────────────────────────────────────
  static workEnergyBarChartSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 540 480">

  <!-- Title -->
  <text x="100" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Work-Energy Bar Chart — Energy Transformation</text>
  <text x="80" y="38" font-family="Georgia,serif" font-size="10" fill="#555">Total mechanical energy E = KE + PE  |  W_net = ΔKE (work-energy theorem)</text>

  <!-- Axes -->
  <!-- y-axis -->
  <line x1="80" y1="370" x2="80" y2="60" stroke="#000" stroke-width="2"/>
  <polygon points="76,64 80,54 84,64" fill="#000"/>
  <text x="40" y="216" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">Energy (J)</text>
  <!-- x-axis -->
  <line x1="80" y1="370" x2="490" y2="370" stroke="#000" stroke-width="2"/>

  <!-- y-axis tick marks and values (scale: 0 at y=370, 100J at y=270, 200J at y=170) -->
  <line x1="75" y1="270" x2="85" y2="270" stroke="#000" stroke-width="1.5"/>
  <text x="50" y="274" font-family="Georgia,serif" font-size="10" fill="#555">100</text>
  <line x1="75" y1="170" x2="85" y2="170" stroke="#000" stroke-width="1.5"/>
  <text x="50" y="174" font-family="Georgia,serif" font-size="10" fill="#555">200</text>
  <line x1="75" y1="320" x2="85" y2="320" stroke="#000" stroke-width="1.5"/>
  <text x="57" y="324" font-family="Georgia,serif" font-size="10" fill="#555">50</text>
  <!-- grid -->
  <line x1="80" y1="270" x2="490" y2="270" stroke="#ddd" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="80" y1="170" x2="490" y2="170" stroke="#ddd" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="80" y1="320" x2="490" y2="320" stroke="#ddd" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- ── INITIAL STATE bars ── x group at 120 -->
  <text x="100" y="390" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Initial</text>

  <!-- KE_initial = 100 J → height 100px, bottom y=370, top y=270 -->
  <rect x="100" y="270" width="40" height="100" fill="#555" stroke="#000" stroke-width="1.5"/>
  <text x="106" y="262" font-family="Georgia,serif" font-size="9" fill="#000">KE=100</text>
  <text x="112" y="405" font-family="Georgia,serif" font-size="10" fill="#555">KE</text>

  <!-- PE_initial = 0 J -->
  <rect x="150" y="370" width="40" height="0" fill="#aaa" stroke="#000" stroke-width="1.5"/>
  <text x="152" y="362" font-family="Georgia,serif" font-size="9" fill="#555">PE=0</text>
  <text x="158" y="405" font-family="Georgia,serif" font-size="10" fill="#555">PE</text>

  <!-- W_net = −10J (negative work arrow) -->
  <text x="204" y="390" font-family="Georgia,serif" font-size="10" fill="#000">+ W</text>

  <!-- Work done W = -10J bar (below axis, negative) — shown as downward bar at x=200 -->
  <rect x="200" y="370" width="40" height="30" fill="#c0c0c0" stroke="#000" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="200" y="362" font-family="Georgia,serif" font-size="9" fill="#555">W=−10</text>
  <polygon points="216,396 220,406 224,396" fill="#000"/>
  <text x="202" y="416" font-family="Georgia,serif" font-size="10" fill="#555">W_net</text>

  <!-- Equals sign -->
  <text x="256" y="310" font-family="Georgia,serif" font-size="20" font-weight="bold" fill="#000">=</text>

  <!-- ── FINAL STATE bars ── x group at 290 -->
  <text x="300" y="390" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Final</text>

  <!-- KE_final = 50J → height 50, top y=320 -->
  <rect x="290" y="320" width="40" height="50" fill="#555" stroke="#000" stroke-width="1.5"/>
  <text x="292" y="312" font-family="Georgia,serif" font-size="9" fill="#000">KE=50</text>
  <text x="302" y="405" font-family="Georgia,serif" font-size="10" fill="#555">KE</text>

  <!-- PE_final = 40J → height 40, top y=330 -->
  <rect x="340" y="330" width="40" height="40" fill="#aaa" stroke="#000" stroke-width="1.5"/>
  <text x="340" y="322" font-family="Georgia,serif" font-size="9" fill="#555">PE=40</text>
  <text x="350" y="405" font-family="Georgia,serif" font-size="10" fill="#555">PE</text>

  <!-- Total initial annotation line -->
  <line x1="96" y1="270" x2="196" y2="270" stroke="#000" stroke-width="1.5"/>
  <text x="96" y="266" font-family="Georgia,serif" font-size="9" fill="#000">E_i = 100 J</text>

  <!-- Total final annotation -->
  <line x1="286" y1="320" x2="386" y2="320" stroke="#000" stroke-width="1.5"/>
  <text x="286" y="316" font-family="Georgia,serif" font-size="9" fill="#000">E_f = 90 J</text>

  <!-- Vertical brace / arrow showing ΔE -->
  <line x1="450" y1="270" x2="450" y2="320" stroke="#000" stroke-width="2"/>
  <polygon points="446,316 450,326 454,316" fill="#000"/>
  <polygon points="446,274 450,264 454,274" fill="#000"/>
  <text x="456" y="298" font-family="Georgia,serif" font-size="10" fill="#000">ΔE=W</text>
  <text x="456" y="310" font-family="Georgia,serif" font-size="9" fill="#555">= −10 J</text>

  <!-- Info box -->
  <rect x="60" y="430" width="420" height="38" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="70" y="446" font-family="Georgia,serif" font-size="10" fill="#000">W-E Theorem: W_net = ΔKE  |  Conservation: KE+PE = const (if W_noncons = 0)</text>
  <text x="70" y="460" font-family="Georgia,serif" font-size="9" fill="#555">P = W/t = Fv  |  KE = ½mv²  |  GPE = mgh  |  EPE = ½kx²</text>
</svg>`;

  // ─── SPRING HARMONIC MOTION ───────────────────────────────────────────────
  static springHarmonicMotionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 540 480">

  <!-- Title -->
  <text x="90" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Simple Harmonic Motion — Spring-Mass System</text>
  <text x="80" y="38" font-family="Georgia,serif" font-size="10" fill="#555">Restoring force F = −kx  |  oscillation about equilibrium position</text>

  <!-- ══ TOP: Three positions of spring-mass ══ -->

  <!-- Wall (left anchor) -->
  <rect x="30" y="60" width="16" height="120" fill="#888" stroke="#000" stroke-width="1.5"/>
  <line x1="30" y1="60"  x2="14" y2="60"  stroke="#555" stroke-width="1"/>
  <line x1="30" y1="80"  x2="14" y2="80"  stroke="#555" stroke-width="1"/>
  <line x1="30" y1="100" x2="14" y2="100" stroke="#555" stroke-width="1"/>
  <line x1="30" y1="120" x2="14" y2="120" stroke="#555" stroke-width="1"/>
  <line x1="30" y1="140" x2="14" y2="140" stroke="#555" stroke-width="1"/>
  <line x1="30" y1="160" x2="14" y2="160" stroke="#555" stroke-width="1"/>
  <line x1="30" y1="180" x2="14" y2="180" stroke="#555" stroke-width="1"/>

  <!-- POSITION 1: Compressed (x = −A), spring compressed, mass at left -->
  <text x="42" y="68" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Compressed (x = −A)</text>
  <!-- Spring compressed: zigzag from x=46 to x=130 at y=100, width=84px -->
  <polyline points="46,100 58,100 64,84 74,116 84,84 94,116 104,84 114,116 124,84 130,100 142,100"
    fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Mass block -->
  <rect x="142" y="80" width="50" height="40" rx="4" fill="#d0d0d0" stroke="#000" stroke-width="2"/>
  <text x="156" y="105" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">m</text>
  <!-- Restoring force arrow (rightward) -->
  <line x1="192" y1="100" x2="236" y2="100" stroke="#000" stroke-width="2.5"/>
  <polygon points="232,95 244,100 232,105" fill="#000"/>
  <text x="244" y="96" font-family="Georgia,serif" font-size="10" fill="#000">F = +kA</text>
  <!-- x = -A label -->
  <line x1="168" y1="126" x2="168" y2="136" stroke="#555" stroke-width="1.5"/>
  <text x="155" y="148" font-family="Georgia,serif" font-size="10" fill="#555">x = −A</text>

  <!-- Equilibrium marker -->
  <line x1="270" y1="60" x2="270" y2="200" stroke="#555" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="254" y="56" font-family="Georgia,serif" font-size="9" fill="#555">equil.</text>

  <!-- POSITION 2: Equilibrium (x = 0), spring natural, mass at centre -->
  <text x="278" y="68" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Equilibrium (x = 0)</text>
  <!-- (draw a second wall at 270ish for clarity — just show spring from right wall mock) -->
  <!-- Spring natural length: from x=46 to x=222 — but we show separate diagram starting ~x=270 -->
  <!-- Actually show as a sub-scene: spring from 270 to 340, mass at 340 -->
  <!-- Use dashed lines to reuse space -->
  <text x="274" y="82" font-family="Georgia,serif" font-size="9" fill="#555">(natural length)</text>
  <polyline points="270,100 282,100 288,84 298,116 308,84 318,116 328,84 338,100 350,100"
    fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="350" y="80" width="50" height="40" rx="4" fill="#d0d0d0" stroke="#000" stroke-width="2"/>
  <text x="364" y="105" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">m</text>
  <text x="364" y="126" font-family="Georgia,serif" font-size="10" fill="#555">F=0, v=max</text>

  <!-- POSITION 3: Extended (x = +A) -->
  <text x="42" y="172" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Extended (x = +A)</text>
  <polyline points="46,190 58,190 64,174 74,206 84,174 94,206 104,174 114,206 124,174 138,206 150,190 200,190"
    fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="200" y="170" width="50" height="40" rx="4" fill="#d0d0d0" stroke="#000" stroke-width="2"/>
  <text x="214" y="195" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">m</text>
  <!-- Restoring force (leftward) -->
  <line x1="200" y1="190" x2="158" y2="190" stroke="#000" stroke-width="2.5"/>
  <polygon points="162,185 150,190 162,195" fill="#000"/>
  <text x="154" y="184" font-family="Georgia,serif" font-size="10" fill="#000">F = −kA</text>
  <line x1="226" y1="216" x2="226" y2="226" stroke="#555" stroke-width="1.5"/>
  <text x="213" y="238" font-family="Georgia,serif" font-size="10" fill="#555">x = +A</text>

  <!-- ══ BOTTOM: Displacement-time graph ══ -->
  <text x="30" y="270" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Displacement vs Time</text>

  <!-- Axes -->
  <line x1="50" y1="380" x2="50"  y2="285" stroke="#000" stroke-width="2"/>
  <line x1="50" y1="380" x2="500" y2="380" stroke="#000" stroke-width="2"/>
  <polygon points="46,289 50,279 54,289" fill="#000"/>
  <polygon points="496,376 506,380 496,384" fill="#000"/>
  <text x="510" y="384" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">t</text>
  <text x="54"  y="281" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">x</text>
  <!-- equilibrium line -->
  <line x1="50" y1="332" x2="500" y2="332" stroke="#aaa" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="504" y="336" font-family="Georgia,serif" font-size="9" fill="#aaa">0</text>
  <!-- +A and -A dashed -->
  <line x1="50" y1="292" x2="500" y2="292" stroke="#ddd" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="20" y="296" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#555">+A</text>
  <line x1="50" y1="372" x2="500" y2="372" stroke="#ddd" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="20" y="376" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#555">−A</text>

  <!-- Sinusoidal curve x = A cos(ωt): amplitude=40px centred at y=332, period~200px -->
  <path d="
    M 50,292
    C 70,292 70,372 100,372
    C 130,372 130,292 160,292
    C 190,292 190,372 220,372
    C 250,372 250,292 280,292
    C 310,292 310,372 340,372
    C 370,372 370,292 400,292
    C 430,292 430,372 460,372
    C 475,372 480,358 490,332
  " fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Period annotation -->
  <line x1="50"  y1="260" x2="250" y2="260" stroke="#000" stroke-width="1.5"/>
  <polygon points="54,256 44,260 54,264" fill="#000"/>
  <polygon points="246,256 256,260 246,264" fill="#000"/>
  <text x="130" y="256" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">T</text>

  <!-- Info box -->
  <rect x="30" y="400" width="480" height="66" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="40" y="416" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Equations:</text>
  <text x="40" y="432" font-family="Georgia,serif" font-size="10" fill="#000">F = −kx  |  a = −ω²x  |  ω = √(k/m)  |  T = 2π√(m/k)  |  f = 1/T</text>
  <text x="40" y="448" font-family="Georgia,serif" font-size="10" fill="#000">x = A cos(ωt + φ)  |  v_max = ωA  |  a_max = ω²A  |  E = ½kA²</text>
  <text x="40" y="462" font-family="Georgia,serif" font-size="9" fill="#555">KE = ½mω²(A²−x²)  |  PE = ½kx²  |  Total E = ½kA² (constant)</text>
</svg>`;

  // ─── TORQUE AND LEVER DIAGRAM ─────────────────────────────────────────────
  static torqueLeverDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 540 420">

  <!-- Title -->
  <text x="100" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Torque and Lever — Moment of Force</text>
  <text x="80" y="38" font-family="Georgia,serif" font-size="10" fill="#555">Torque τ = F × d⊥  |  Equilibrium: Σtorques = 0 about any pivot</text>

  <!-- Lever beam: horizontal bar from x=60 to x=480 at y=220 -->
  <rect x="60" y="214" width="420" height="16" rx="3" fill="#c8c8c8" stroke="#000" stroke-width="2.5"/>

  <!-- Fulcrum (pivot) at x=186 (30% from left = 60 + 0.3×420 = 186) -->
  <!-- Fulcrum triangle -->
  <polygon points="186,230 166,270 206,270" fill="#888" stroke="#000" stroke-width="2"/>
  <!-- Base platform -->
  <rect x="156" y="270" width="60" height="10" rx="2" fill="#555" stroke="#000" stroke-width="1.5"/>
  <!-- Hatching below platform -->
  <line x1="158" y1="280" x2="150" y2="292" stroke="#555" stroke-width="1.5"/>
  <line x1="168" y1="280" x2="160" y2="292" stroke="#555" stroke-width="1.5"/>
  <line x1="178" y1="280" x2="170" y2="292" stroke="#555" stroke-width="1.5"/>
  <line x1="188" y1="280" x2="180" y2="292" stroke="#555" stroke-width="1.5"/>
  <line x1="198" y1="280" x2="190" y2="292" stroke="#555" stroke-width="1.5"/>
  <line x1="208" y1="280" x2="200" y2="292" stroke="#555" stroke-width="1.5"/>
  <line x1="214" y1="280" x2="206" y2="292" stroke="#555" stroke-width="1.5"/>

  <!-- Pivot point label -->
  <circle cx="186" cy="222" r="5" fill="#000"/>
  <text x="190" y="214" font-family="Georgia,serif" font-size="10" fill="#555">pivot / fulcrum</text>

  <!-- FORCE 1: F₁ = 50N downward at x=90 (left side, moment arm d₁=96px) -->
  <line x1="90" y1="214" x2="90" y2="140" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="86,144 90,132 94,144" fill="#000"/>
  <!-- ← wait, force is downward, arrow should point down *)  -->
  <!-- F₁ acts downward: draw from above the beam down to the beam -->
  <line x1="90" y1="120" x2="90" y2="210" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="86,206 90,216 94,206" fill="#000"/>
  <text x="96" y="155" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">F₁</text>
  <text x="96" y="169" font-family="Georgia,serif" font-size="10" fill="#000">= 50 N</text>

  <!-- Moment arm d₁ (horizontal): from x=90 to x=186, below the beam -->
  <line x1="90"  y1="300" x2="186" y2="300" stroke="#000" stroke-width="1.8"/>
  <polygon points="94,296 84,300 94,304" fill="#000"/>
  <polygon points="182,296 192,300 182,304" fill="#000"/>
  <text x="124" y="316" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">d₁ = 0.96 m</text>

  <!-- Torque 1 annotation (CCW arc) -->
  <path d="M 186,222 m -40,0 A 40,40 0 0,0 160,192" fill="none" stroke="#000" stroke-width="2"/>
  <polygon points="156,196 160,184 166,194" fill="#000"/>
  <text x="120" y="188" font-family="Georgia,serif" font-size="10" fill="#000">τ₁ = F₁d₁</text>
  <text x="120" y="200" font-family="Georgia,serif" font-size="9" fill="#555">= 48 N·m (CCW)</text>

  <!-- FORCE 2: F₂ = 30N downward at x=420 (right side, moment arm d₂=234px) -->
  <line x1="420" y1="120" x2="420" y2="210" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="416,206 420,216 424,206" fill="#000"/>
  <text x="428" y="155" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">F₂</text>
  <text x="428" y="169" font-family="Georgia,serif" font-size="10" fill="#000">= 30 N</text>

  <!-- Moment arm d₂ -->
  <line x1="186" y1="335" x2="420" y2="335" stroke="#000" stroke-width="1.8"/>
  <polygon points="190,331 180,335 190,339" fill="#000"/>
  <polygon points="416,331 426,335 416,339" fill="#000"/>
  <text x="280" y="350" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">d₂ = 2.34 m</text>

  <!-- Torque 2 annotation (CW arc) -->
  <path d="M 186,222 m 50,0 A 50,50 0 0,1 224,196" fill="none" stroke="#555" stroke-width="2" stroke-dasharray="4,2"/>
  <polygon points="220,191 226,182 230,192" fill="#555"/>
  <text x="248" y="192" font-family="Georgia,serif" font-size="10" fill="#555">τ₂ = F₂d₂</text>
  <text x="248" y="204" font-family="Georgia,serif" font-size="9" fill="#555">= 70.2 N·m (CW)</text>

  <!-- Beam tilt note: since τ₂ > τ₁, beam tips right -->
  <text x="180" y="374" font-family="Georgia,serif" font-size="10" fill="#555">τ₂ &gt; τ₁ → net CW rotation → beam tips right (not in equilibrium)</text>
  <text x="180" y="386" font-family="Georgia,serif" font-size="10" fill="#555">Equilibrium requires: F₁d₁ = F₂d₂</text>

  <!-- Info box -->
  <rect x="42" y="396" width="456" height="14" rx="3" fill="none" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="52" y="406" font-family="Georgia,serif" font-size="9" fill="#000">τ = Fd sinα  |  Στ_CW = Στ_CCW (equilibrium)  |  τ = Iα (rotational Newton's 2nd law)  |  I = Σmr²</text>
</svg>`;

  // ─── ELECTRIC FIELD LINES ─────────────────────────────────────────────────
  static electricFieldLinesSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 500 460">

  <!-- Title -->
  <text x="80" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Electric Field Lines — Point Charges (+q and −q)</text>
  <text x="70" y="38" font-family="Georgia,serif" font-size="10" fill="#555">Field lines leave +q and terminate on −q; density indicates field strength</text>

  <!-- +q charge on left at (150,230), −q on right at (350,230) -->

  <!-- Field lines: 8 curved lines from +q to −q (approximate arcs) -->
  <!-- Line 1: straight across (equatorial) -->
  <path d="M 172,230 Q 250,230 328,230" fill="none" stroke="#000" stroke-width="1.8"/>
  <polygon points="244,226 254,230 244,234" fill="#000"/>

  <!-- Line 2: slight curve up -->
  <path d="M 168,218 Q 250,195 332,218" fill="none" stroke="#000" stroke-width="1.8"/>
  <polygon points="244,193 254,196 246,203" fill="#000"/>

  <!-- Line 3: moderate curve up -->
  <path d="M 160,208 Q 250,160 340,208" fill="none" stroke="#000" stroke-width="1.8"/>
  <polygon points="242,159 252,162 246,170" fill="#000"/>

  <!-- Line 4: large curve up -->
  <path d="M 152,200 Q 250,120 348,200" fill="none" stroke="#000" stroke-width="1.8"/>
  <polygon points="242,120 252,122 247,131" fill="#000"/>

  <!-- Line 5: slight curve down -->
  <path d="M 168,242 Q 250,265 332,242" fill="none" stroke="#000" stroke-width="1.8"/>
  <polygon points="244,263 254,264 248,273" fill="#000"/>

  <!-- Line 6: moderate curve down -->
  <path d="M 160,252 Q 250,300 340,252" fill="none" stroke="#000" stroke-width="1.8"/>
  <polygon points="242,298 252,300 246,309" fill="#000"/>

  <!-- Line 7: large curve down -->
  <path d="M 152,260 Q 250,340 348,260" fill="none" stroke="#000" stroke-width="1.8"/>
  <polygon points="242,340 252,340 247,350" fill="#000"/>

  <!-- Line 8: very large curve, goes around (dashed to suggest going behind) -->
  <path d="M 148,230 Q 148,80 250,60 Q 352,80 352,230" fill="none" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="244,59 254,60 248,69" fill="#555"/>

  <!-- +q charge circle -->
  <circle cx="150" cy="230" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="140" y="235" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">+q</text>

  <!-- −q charge circle -->
  <circle cx="350" cy="230" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="340" y="235" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">−q</text>

  <!-- Electric force between charges -->
  <!-- Force on +q toward −q -->
  <line x1="172" y1="230" x2="128" y2="230" stroke="#000" stroke-width="0"/>
  <!-- Attraction arrows on charges -->
  <line x1="172" y1="248" x2="210" y2="248" stroke="#555" stroke-width="1.5" stroke-dasharray="3,2"/>
  <polygon points="206,244 216,248 206,252" fill="#555"/>
  <text x="218" y="252" font-family="Georgia,serif" font-size="9" fill="#555">F (on +q)</text>
  <line x1="328" y1="248" x2="290" y2="248" stroke="#555" stroke-width="1.5" stroke-dasharray="3,2"/>
  <polygon points="294,244 282,248 294,252" fill="#555"/>
  <text x="214" y="266" font-family="Georgia,serif" font-size="9" fill="#555">F (on −q)</text>

  <!-- Distance r label -->
  <line x1="150" y1="270" x2="350" y2="270" stroke="#000" stroke-width="1.5"/>
  <polygon points="154,266 144,270 154,274" fill="#000"/>
  <polygon points="346,266 356,270 346,274" fill="#000"/>
  <text x="226" y="286" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">r</text>

  <!-- Field direction reminder -->
  <text x="32" y="370" font-family="Georgia,serif" font-size="10" fill="#555">Field direction: away from +q, toward −q</text>
  <text x="32" y="384" font-family="Georgia,serif" font-size="10" fill="#555">Closer lines = stronger field</text>

  <!-- Info box -->
  <rect x="30" y="400" width="440" height="46" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="40" y="416" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Coulomb's Law &amp; Field:</text>
  <text x="40" y="432" font-family="Georgia,serif" font-size="10" fill="#000">F = kq₁q₂/r²  |  E = kq/r² = F/q₀  |  k = 8.99×10⁹ N·m²/C²  |  ε₀ = 8.85×10⁻¹² F/m</text>
</svg>`;

  // ─── ELECTRIC POTENTIAL vs DISTANCE GRAPH ────────────────────────────────
  static potentialDistanceGraphSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 540 460">

  <!-- Title -->
  <text x="70" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Electric Potential vs Distance — Point Charges</text>
  <text x="60" y="38" font-family="Georgia,serif" font-size="10" fill="#555">V = kq/r for a point charge  |  positive charge: V &gt; 0; negative charge: V &lt; 0</text>

  <!-- Axes -->
  <!-- y-axis (V) -->
  <line x1="270" y1="420" x2="270" y2="40" stroke="#000" stroke-width="2"/>
  <polygon points="266,44 270,34 274,44" fill="#000"/>
  <text x="276" y="34" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">V</text>
  <!-- x-axis (r) with origin at middle-left (120,230) -->
  <line x1="60"  y1="230" x2="510" y2="230" stroke="#000" stroke-width="2"/>
  <polygon points="506,226 516,230 506,234" fill="#000"/>
  <text x="518" y="234" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">r</text>
  <!-- zero label -->
  <text x="256" y="246" font-family="Georgia,serif" font-size="11" fill="#555">O</text>

  <!-- Grid (horizontal dashes) -->
  <line x1="60" y1="130" x2="510" y2="130" stroke="#ddd" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="60" y1="330" x2="510" y2="330" stroke="#ddd" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="236" y="126" font-family="Georgia,serif" font-size="10" fill="#555">+V</text>
  <text x="236" y="344" font-family="Georgia,serif" font-size="10" fill="#555">−V</text>

  <!-- ── POSITIVE CHARGE curve (right side: r > 0, V > 0 → rises to +∞) ── -->
  <!-- V = k/r for r from ~20 to 240 on right of origin (270+20=290 to 510) -->
  <!-- Map: r=240→V=k/240 (small), r=20→V=k/20 (large, ~∞) -->
  <!-- Scale: let k=1, r in px: V=100/r → V at r=20:5, r=40:2.5, r=80:1.25 scaled ×100 -->
  <!-- Plot (x, y) where x=270+r, y=230−100*100/r capped -->
  <!-- r=20 → y=230-500=cap at 50 | r=30→y=230-333=cap | r=40→y=230-250 |
       r=50→y=230-200=30 | r=60→y=230-167=63 | r=80→y=230-125=105 |
       r=100→y=230-100=130 | r=120→y=230-83=147 | r=160→y=230-63=167 |
       r=200→y=230-50=180 | r=240→y=230-42=188 -->
  <path d="M290,50 C295,50 300,58 310,88 C320,108 340,130 370,152 C400,168 430,182 480,194 L510,198"
    fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <!-- asymptote mark -->
  <line x1="270" y1="50" x2="290" y2="50" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="292" y="50" font-family="Georgia,serif" font-size="9" fill="#aaa">V→+∞ as r→0</text>

  <!-- Label: +q -->
  <text x="462" y="186" font-family="Georgia,serif" font-size="11" fill="#000">V(r) for +q</text>

  <!-- ── NEGATIVE CHARGE curve (V < 0, mirror) ── -->
  <path d="M290,410 C295,410 300,402 310,372 C320,352 340,330 370,308 C400,292 430,278 480,266 L510,262"
    fill="none" stroke="#555" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="8,3"/>
  <text x="462" y="275" font-family="Georgia,serif" font-size="11" fill="#555">V(r) for −q</text>
  <line x1="270" y1="410" x2="290" y2="410" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="292" y="414" font-family="Georgia,serif" font-size="9" fill="#aaa">V→−∞ as r→0</text>

  <!-- r axis ticks -->
  <line x1="320" y1="226" x2="320" y2="234" stroke="#000" stroke-width="1.5"/>
  <text x="314" y="246" font-family="Georgia,serif" font-size="10" fill="#555">r₀</text>
  <line x1="370" y1="226" x2="370" y2="234" stroke="#000" stroke-width="1.5"/>
  <text x="364" y="246" font-family="Georgia,serif" font-size="10" fill="#555">2r₀</text>
  <line x1="420" y1="226" x2="420" y2="234" stroke="#000" stroke-width="1.5"/>
  <text x="414" y="246" font-family="Georgia,serif" font-size="10" fill="#555">3r₀</text>

  <!-- V at r₀ annotation -->
  <line x1="320" y1="152" x2="320" y2="230" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="270" y1="152" x2="320" y2="152" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="224" y="156" font-family="Georgia,serif" font-size="9" fill="#aaa">V(r₀)</text>

  <!-- V at 2r₀ = half annotation -->
  <line x1="370" y1="180" x2="370" y2="230" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="270" y1="180" x2="370" y2="180" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="218" y="184" font-family="Georgia,serif" font-size="9" fill="#aaa">V(r₀)/2</text>

  <!-- Info box -->
  <rect x="30" y="428" width="480" height="24" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="40" y="444" font-family="Georgia,serif" font-size="10" fill="#000">V = kq/r  |  E = −dV/dr = kq/r²  |  W = q(V_A−V_B)  |  V∝1/r  (vs E∝1/r²)</text>
</svg>`;

  // ─── EQUIPOTENTIAL LINES DIAGRAM ─────────────────────────────────────────
  static equipotentialLinesDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 500 480">

  <!-- Title -->
  <text x="60" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Equipotential Lines &amp; Electric Field Lines</text>
  <text x="40" y="38" font-family="Georgia,serif" font-size="10" fill="#555">Equipotentials (dashed) always ⊥ to field lines (solid); no work done along an equipotential</text>

  <!-- Charges: +q at (170,240), −q at (330,240) -->

  <!-- ── Electric field lines (solid, with arrows) ── -->
  <!-- Straight across -->
  <path d="M 192,240 Q 250,240 308,240" fill="none" stroke="#000" stroke-width="1.8"/>
  <polygon points="244,236 254,240 244,244" fill="#000"/>
  <!-- Mild up -->
  <path d="M 188,228 Q 250,210 312,228" fill="none" stroke="#000" stroke-width="1.8"/>
  <polygon points="244,208 254,211 246,218" fill="#000"/>
  <!-- Moderate up -->
  <path d="M 182,216 Q 250,180 318,216" fill="none" stroke="#000" stroke-width="1.8"/>
  <polygon points="243,179 253,181 247,189" fill="#000"/>
  <!-- Large up -->
  <path d="M 174,206 Q 250,142 326,206" fill="none" stroke="#000" stroke-width="1.8"/>
  <polygon points="243,142 253,143 248,152" fill="#000"/>
  <!-- Very large (wrapping) -->
  <path d="M 170,240 Q 170,80 250,62 Q 330,80 330,240" fill="none" stroke="#555" stroke-width="1.5" stroke-dasharray="none"/>
  <polygon points="243,61 253,62 247,71" fill="#555"/>
  <!-- Mild down -->
  <path d="M 188,252 Q 250,270 312,252" fill="none" stroke="#000" stroke-width="1.8"/>
  <polygon points="244,268 254,269 248,278" fill="#000"/>
  <!-- Moderate down -->
  <path d="M 182,264 Q 250,300 318,264" fill="none" stroke="#000" stroke-width="1.8"/>
  <polygon points="243,299 253,300 247,309" fill="#000"/>
  <!-- Large down -->
  <path d="M 174,274 Q 250,338 326,274" fill="none" stroke="#000" stroke-width="1.8"/>
  <polygon points="243,338 253,338 248,348" fill="#000"/>

  <!-- ── Equipotential lines (dashed ellipses/curves around +q) ── -->
  <!-- Around +q: roughly circular, at increasing r -->
  <ellipse cx="170" cy="240" rx="18" ry="18" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <ellipse cx="170" cy="240" rx="36" ry="34" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <ellipse cx="170" cy="240" rx="56" ry="50" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>

  <!-- Around −q: circular -->
  <ellipse cx="330" cy="240" rx="18" ry="18" fill="none" stroke="#555" stroke-width="1.5" stroke-dasharray="4,3"/>
  <ellipse cx="330" cy="240" rx="36" ry="34" fill="none" stroke="#555" stroke-width="1.5" stroke-dasharray="4,3"/>
  <ellipse cx="330" cy="240" rx="56" ry="50" fill="none" stroke="#555" stroke-width="1.5" stroke-dasharray="4,3"/>

  <!-- Middle equipotential (V=0 plane between charges) - vertical dashed line -->
  <line x1="250" y1="80" x2="250" y2="400" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="254" y="76" font-family="Georgia,serif" font-size="9" fill="#000">V = 0</text>

  <!-- ⊥ indicator on a field line crossing equipotential -->
  <rect x="243" y="206" width="10" height="10" fill="none" stroke="#000" stroke-width="1.2"/>

  <!-- +q circle -->
  <circle cx="170" cy="240" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="160" y="245" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">+q</text>

  <!-- −q circle -->
  <circle cx="330" cy="240" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="320" y="245" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">−q</text>

  <!-- V labels on equipotentials -->
  <text x="118" y="236" font-family="Georgia,serif" font-size="9" fill="#000">V₃</text>
  <text x="126" y="236" font-family="Georgia,serif" font-size="7" fill="#555">&gt;V₂&gt;V₁</text>
  <text x="366" y="236" font-family="Georgia,serif" font-size="9" fill="#555">−V₃</text>

  <!-- Legend -->
  <line x1="38" y1="410" x2="78" y2="410" stroke="#000" stroke-width="2"/>
  <polygon points="74,406 84,410 74,414" fill="#000"/>
  <text x="88" y="414" font-family="Georgia,serif" font-size="10" fill="#000">Electric field line (E)</text>
  <line x1="38" y1="428" x2="78" y2="428" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="88" y="432" font-family="Georgia,serif" font-size="10" fill="#000">Equipotential line (V = const)</text>

  <!-- Info box -->
  <rect x="30" y="446" width="440" height="24" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="40" y="462" font-family="Georgia,serif" font-size="9" fill="#000">E = −∇V  |  E ⊥ equipotentials always  |  W = qΔV  |  No work moving charge along equipotential (ΔV=0)</text>
</svg>`;

  // ─── CAPACITOR CHARGE/DISCHARGE CURVE ────────────────────────────────────
  static capacitorChargeCurveSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 540 460">

  <!-- Title -->
  <text x="100" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Capacitor Charge &amp; Discharge Curves</text>
  <text x="60" y="38" font-family="Georgia,serif" font-size="10" fill="#555">Charging: V = V₀(1−e^(−t/RC))  |  Discharging: V = V₀ e^(−t/RC)</text>

  <!-- Axes -->
  <line x1="70" y1="350" x2="70"  y2="60" stroke="#000" stroke-width="2"/>
  <line x1="70" y1="350" x2="500" y2="350" stroke="#000" stroke-width="2"/>
  <polygon points="66,64 70,54 74,64" fill="#000"/>
  <polygon points="496,346 506,350 496,354" fill="#000"/>
  <text x="510" y="354" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">t</text>
  <text x="76"  y="52"  font-family="Georgia,serif" font-size="12" font-style="italic" fill="#000">V</text>

  <!-- V₀ dashed horizontal -->
  <line x1="70" y1="90" x2="500" y2="90" stroke="#555" stroke-width="1.5" stroke-dasharray="5,4"/>
  <text x="34" y="94" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">V₀</text>

  <!-- 0.63V₀ level -->
  <line x1="70" y1="154" x2="500" y2="154" stroke="#ddd" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="22" y="158" font-family="Georgia,serif" font-size="9" fill="#555">0.63V₀</text>

  <!-- 0.37V₀ level -->
  <line x1="70" y1="286" x2="500" y2="286" stroke="#ddd" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="22" y="290" font-family="Georgia,serif" font-size="9" fill="#555">0.37V₀</text>

  <!-- τ = RC tick on x-axis -->
  <line x1="160" y1="346" x2="160" y2="354" stroke="#000" stroke-width="1.5"/>
  <text x="148" y="366" font-family="Georgia,serif" font-size="10" fill="#000">τ=RC</text>
  <line x1="250" y1="346" x2="250" y2="354" stroke="#000" stroke-width="1.5"/>
  <text x="240" y="366" font-family="Georgia,serif" font-size="10" fill="#555">2τ</text>
  <line x1="340" y1="346" x2="340" y2="354" stroke="#000" stroke-width="1.5"/>
  <text x="330" y="366" font-family="Georgia,serif" font-size="10" fill="#555">3τ</text>
  <line x1="430" y1="346" x2="430" y2="354" stroke="#000" stroke-width="1.5"/>
  <text x="420" y="366" font-family="Georgia,serif" font-size="10" fill="#555">4τ</text>

  <!-- ── CHARGING CURVE: V = V₀(1−e^{−t/τ}): starts at 0, rises to V₀ ── -->
  <!-- At t=0: V=0 (y=350); t=τ: V=0.632V₀ (y=154 approx); t=∞: V=V₀ (y=90) -->
  <!-- Scale: V₀=260px range (y from 90 to 350) -->
  <!-- t=0→y=350; t=τ(x=160)→y=350-0.632×260=350-164=186; t=2τ(x=250)→y=350-0.865×260=124;
       t=3τ(x=340)→y=350-0.950×260=103; t=4τ(x=430)→y=350-0.982×260=95 -->
  <path d="M70,350 C90,350 110,280 160,186 C200,126 230,108 280,97 C330,90 380,90 500,90"
    fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <text x="380" y="82" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Charging</text>

  <!-- τ annotation: vertical dashed from (160,186) to axis and horizontal to V axis -->
  <line x1="160" y1="186" x2="160" y2="350" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="70"  y1="186" x2="160" y2="186" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
  <circle cx="160" cy="186" r="3" fill="#000"/>
  <text x="162" y="182" font-family="Georgia,serif" font-size="9" fill="#000">(τ, 0.63V₀)</text>

  <!-- ── DISCHARGING CURVE: V = V₀ e^{−t/τ}: starts at V₀, falls to 0 ── -->
  <!-- t=0→y=90; t=τ(x=160)→y=350-0.368×260=350-96=254; t=2τ→y=350-0.135×260=315;
       t=3τ→y=350-0.05×260=337; t=4τ→y=~348 -->
  <path d="M70,90 C100,90 130,180 160,254 C190,305 220,330 280,340 C330,346 380,349 500,350"
    fill="none" stroke="#555" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="10,4"/>
  <text x="380" y="330" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#555">Discharging</text>

  <!-- τ annotation on discharging -->
  <line x1="160" y1="254" x2="160" y2="350" stroke="#ccc" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="70"  y1="254" x2="160" y2="254" stroke="#ccc" stroke-width="1" stroke-dasharray="3,2"/>
  <circle cx="160" cy="254" r="3" fill="#555"/>
  <text x="162" y="250" font-family="Georgia,serif" font-size="9" fill="#555">(τ, 0.37V₀)</text>

  <!-- Info box -->
  <rect x="50" y="390" width="440" height="58" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="60" y="406" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Relations:</text>
  <text x="60" y="422" font-family="Georgia,serif" font-size="10" fill="#000">τ = RC  |  Q = CV  |  At t=τ: V_charge = 0.63V₀, V_discharge = 0.37V₀</text>
  <text x="60" y="438" font-family="Georgia,serif" font-size="10" fill="#000">I_charge = (V₀/R)e^(−t/RC)  |  I_discharge = −(V₀/R)e^(−t/RC)</text>
  <text x="60" y="452" font-family="Georgia,serif" font-size="9" fill="#555">Energy stored: E = ½CV² = Q²/2C  |  Fully charged (~5τ): V ≈ V₀</text>
</svg>`;

  // ─── CIRCUIT DIAGRAM (Series DC) ─────────────────────────────────────────
  static circuitDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 520 420">

  <!-- Title -->
  <text x="80" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">DC Series Circuit — Battery, R₁ and R₂</text>
  <text x="70" y="38" font-family="Georgia,serif" font-size="10" fill="#555">Series: same current through all components  |  V = V₁ + V₂  |  R_total = R₁ + R₂</text>

  <!-- Main loop: corners (80,80), (440,80), (440,300), (80,300) -->
  <!-- Top wire: left section (80,80)→(200,80), right section (320,80)→(440,80) -->
  <line x1="80"  y1="80" x2="180" y2="80" stroke="#000" stroke-width="3"/>
  <line x1="340" y1="80" x2="440" y2="80" stroke="#000" stroke-width="3"/>
  <!-- Right wire -->
  <line x1="440" y1="80"  x2="440" y2="300" stroke="#000" stroke-width="3"/>
  <!-- Bottom wire: left (80,300)→(180,300), right (320,300)→(440,300) -->
  <line x1="80"  y1="300" x2="180" y2="300" stroke="#000" stroke-width="3"/>
  <line x1="320" y1="300" x2="440" y2="300" stroke="#000" stroke-width="3"/>
  <!-- Left wire: (80,80)→(80,140) and (80,240)→(80,300) -->
  <line x1="80" y1="80"  x2="80" y2="135" stroke="#000" stroke-width="3"/>
  <line x1="80" y1="245" x2="80" y2="300" stroke="#000" stroke-width="3"/>

  <!-- Battery on left wire: two cells centred at y=190 -->
  <!-- Cell plates -->
  <line x1="62" y1="143" x2="98" y2="143" stroke="#000" stroke-width="4"/>
  <line x1="68" y1="157" x2="92" y2="157" stroke="#000" stroke-width="2"/>
  <line x1="62" y1="171" x2="98" y2="171" stroke="#000" stroke-width="4"/>
  <line x1="68" y1="185" x2="92" y2="185" stroke="#000" stroke-width="2"/>
  <!-- connector stubs -->
  <line x1="80" y1="135" x2="80" y2="143" stroke="#000" stroke-width="3"/>
  <line x1="80" y1="185" x2="80" y2="245" stroke="#000" stroke-width="3"/>
  <line x1="80" y1="157" x2="80" y2="171" stroke="#000" stroke-width="2"/>
  <!-- +/− labels -->
  <text x="102" y="148" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">+</text>
  <text x="102" y="192" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#555">−</text>
  <text x="36" y="170" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">ε</text>
  <text x="26" y="183" font-family="Georgia,serif" font-size="9" fill="#555">12 V</text>

  <!-- R₁ zigzag on top wire: centred at x=260, y=80 -->
  <polyline points="180,80 196,80 202,64 212,96 222,64 232,96 242,64 252,96 262,64 272,96 282,64 288,80 340,80"
    fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="244" y="56" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">R₁</text>
  <text x="238" y="42" font-family="Georgia,serif" font-size="10" fill="#555">= 4 Ω</text>

  <!-- R₂ zigzag on bottom wire: centred at x=260, y=300 -->
  <polyline points="180,300 196,300 202,284 212,316 222,284 232,316 242,284 252,316 262,284 272,316 282,284 288,300 320,300"
    fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="244" y="342" font-family="Georgia,serif" font-size="12" font-weight="bold" font-style="italic" fill="#000">R₂</text>
  <text x="238" y="356" font-family="Georgia,serif" font-size="10" fill="#555">= 8 Ω</text>

  <!-- Current direction arrows -->
  <polygon points="156,75 172,80 156,85" fill="#000"/>
  <text x="122" y="72" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">I →</text>
  <polygon points="436,195 440,210 444,195" fill="#000"/>
  <polygon points="304,295 288,300 304,305" fill="#000"/>
  <polygon points="76,118 80,103 84,118" fill="#000"/>

  <!-- Voltage drop labels -->
  <text x="352" y="74" font-family="Georgia,serif" font-size="10" fill="#555">V₁ = IR₁</text>
  <text x="352" y="86" font-family="Georgia,serif" font-size="10" fill="#555">= 4 V</text>
  <text x="352" y="308" font-family="Georgia,serif" font-size="10" fill="#555">V₂ = IR₂</text>
  <text x="352" y="320" font-family="Georgia,serif" font-size="10" fill="#555">= 8 V</text>

  <!-- Junction dots -->
  <circle cx="80"  cy="80"  r="5" fill="#000"/>
  <circle cx="440" cy="80"  r="5" fill="#000"/>
  <circle cx="440" cy="300" r="5" fill="#000"/>
  <circle cx="80"  cy="300" r="5" fill="#000"/>

  <!-- Formula/info box -->
  <rect x="110" y="126" width="290" height="136" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="120" y="144" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Series Circuit Analysis:</text>
  <text x="120" y="160" font-family="Georgia,serif" font-size="10" fill="#000">R_total = R₁ + R₂ = 4 + 8 = 12 Ω</text>
  <text x="120" y="176" font-family="Georgia,serif" font-size="10" fill="#000">I = ε/R_total = 12/12 = 1 A</text>
  <text x="120" y="192" font-family="Georgia,serif" font-size="10" fill="#000">V₁ = IR₁ = 1×4 = 4 V</text>
  <text x="120" y="208" font-family="Georgia,serif" font-size="10" fill="#000">V₂ = IR₂ = 1×8 = 8 V</text>
  <text x="120" y="224" font-family="Georgia,serif" font-size="10" fill="#000">V₁+V₂ = 12 V = ε  ✓ (Kirchhoff's VL)</text>
  <text x="120" y="240" font-family="Georgia,serif" font-size="9" fill="#555">P = I²R  |  P₁=4W  |  P₂=8W  |  P_total=12W</text>
  <text x="120" y="254" font-family="Georgia,serif" font-size="9" fill="#555">ΣV = 0 around any closed loop (KVL)</text>
</svg>`;

  // ─── SERIES AND PARALLEL CIRCUITS ────────────────────────────────────────
  static seriesParallelCircuitsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 540 480">

  <!-- Title -->
  <text x="80" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Series vs Parallel Resistors — Comparison</text>

  <!-- ══ SERIES (left half) ══ -->
  <text x="30" y="52" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Series Circuit</text>
  <text x="30" y="66" font-family="Georgia,serif" font-size="9" fill="#555">Same I through each R  |  V splits</text>

  <!-- Loop: (30,90)→(240,90)→(240,300)→(30,300)→back -->
  <!-- Top: (30,90)→(60,90) then R₁ then (130,90) then R₂ then (200,90)→(240,90) -->
  <line x1="30"  y1="90" x2="55"  y2="90" stroke="#000" stroke-width="2.5"/>
  <!-- R₁ zigzag 55→125 -->
  <polyline points="55,90 62,90 66,76 73,104 80,76 87,104 94,76 101,104 108,76 115,104 119,90 125,90"
    fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="125" y1="90" x2="145" y2="90" stroke="#000" stroke-width="2.5"/>
  <!-- R₂ zigzag 145→215 -->
  <polyline points="145,90 152,90 156,76 163,104 170,76 177,104 184,76 191,104 195,90 215,90"
    fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="215" y1="90" x2="240" y2="90" stroke="#000" stroke-width="2.5"/>
  <!-- Right wire -->
  <line x1="240" y1="90"  x2="240" y2="300" stroke="#000" stroke-width="2.5"/>
  <!-- Bottom -->
  <line x1="240" y1="300" x2="30"  y2="300" stroke="#000" stroke-width="2.5"/>
  <!-- Left: battery centred at (30,195) -->
  <line x1="30" y1="90"  x2="30" y2="160" stroke="#000" stroke-width="2.5"/>
  <line x1="14" y1="168" x2="46" y2="168" stroke="#000" stroke-width="3.5"/>
  <line x1="20" y1="182" x2="40" y2="182" stroke="#000" stroke-width="2"/>
  <line x1="14" y1="196" x2="46" y2="196" stroke="#000" stroke-width="3.5"/>
  <line x1="20" y1="210" x2="40" y2="210" stroke="#000" stroke-width="2"/>
  <line x1="30" y1="160" x2="30" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="30" y1="210" x2="30" y2="300" stroke="#000" stroke-width="2.5"/>
  <line x1="30" y1="182" x2="30" y2="196" stroke="#000" stroke-width="1.5"/>
  <text x="48" y="178" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">+</text>
  <text x="48" y="214" font-family="Georgia,serif" font-size="10" fill="#555">−</text>
  <text x="3"  y="192" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">ε</text>

  <!-- R labels -->
  <text x="82" y="68" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">R₁=4Ω</text>
  <text x="165" y="68" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">R₂=6Ω</text>

  <!-- Series result box -->
  <rect x="30" y="316" width="210" height="64" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="38" y="332" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">R_s = R₁+R₂+R₃</text>
  <text x="38" y="346" font-family="Georgia,serif" font-size="10" fill="#000">= 4+6+12 = 22 Ω</text>
  <text x="38" y="360" font-family="Georgia,serif" font-size="10" fill="#000">I = V/R_s = 12/22 ≈ 0.55 A</text>
  <text x="38" y="374" font-family="Georgia,serif" font-size="9" fill="#555">Same I; V₁=2.2V, V₂=3.3V, V₃=6.5V</text>

  <!-- ══ PARALLEL (right half) ══ -->
  <text x="290" y="52" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Parallel Circuit</text>
  <text x="290" y="66" font-family="Georgia,serif" font-size="9" fill="#555">Same V across each R  |  I splits</text>

  <!-- Vertical bus bars at x=300 and x=510 -->
  <line x1="300" y1="90" x2="300" y2="300" stroke="#000" stroke-width="2.5"/>
  <line x1="510" y1="90" x2="510" y2="300" stroke="#000" stroke-width="2.5"/>
  <!-- Top connection -->
  <line x1="300" y1="90"  x2="510" y2="90" stroke="#000" stroke-width="2.5"/>
  <!-- Bottom connection -->
  <line x1="300" y1="300" x2="510" y2="300" stroke="#000" stroke-width="2.5"/>

  <!-- Battery on left bus: centred at y=195 -->
  <line x1="284" y1="168" x2="316" y2="168" stroke="#000" stroke-width="3.5"/>
  <line x1="290" y1="182" x2="310" y2="182" stroke="#000" stroke-width="2"/>
  <line x1="284" y1="196" x2="316" y2="196" stroke="#000" stroke-width="3.5"/>
  <line x1="290" y1="210" x2="310" y2="210" stroke="#000" stroke-width="2"/>
  <line x1="300" y1="160" x2="300" y2="168" stroke="#000" stroke-width="2.5"/>
  <line x1="300" y1="210" x2="300" y2="240" stroke="#000" stroke-width="2.5"/>
  <line x1="300" y1="182" x2="300" y2="196" stroke="#000" stroke-width="1.5"/>
  <text x="318" y="178" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">+</text>
  <text x="318" y="214" font-family="Georgia,serif" font-size="10" fill="#555">−</text>
  <text x="272" y="192" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">ε</text>

  <!-- R₁ branch: horizontal at y=130 -->
  <line x1="300" y1="130" x2="330" y2="130" stroke="#000" stroke-width="2"/>
  <polyline points="330,130 334,130 337,118 342,142 347,118 352,142 357,118 362,142 366,130 376,130"
    fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="376" y1="130" x2="510" y2="130" stroke="#000" stroke-width="2"/>
  <text x="343" y="112" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">R₁=4Ω</text>
  <circle cx="300" cy="130" r="4" fill="#000"/>
  <circle cx="510" cy="130" r="4" fill="#000"/>

  <!-- R₂ branch: horizontal at y=195 -->
  <line x1="300" y1="195" x2="330" y2="195" stroke="#000" stroke-width="2"/>
  <polyline points="330,195 334,195 337,183 342,207 347,183 352,207 357,183 362,207 366,195 376,195"
    fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="376" y1="195" x2="510" y2="195" stroke="#000" stroke-width="2"/>
  <text x="343" y="177" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">R₂=6Ω</text>
  <circle cx="300" cy="195" r="4" fill="#000"/>
  <circle cx="510" cy="195" r="4" fill="#000"/>

  <!-- R₃ branch: horizontal at y=260 -->
  <line x1="300" y1="260" x2="330" y2="260" stroke="#000" stroke-width="2"/>
  <polyline points="330,260 334,260 337,248 342,272 347,248 352,272 357,248 362,272 366,260 376,260"
    fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="376" y1="260" x2="510" y2="260" stroke="#000" stroke-width="2"/>
  <text x="343" y="242" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">R₃=12Ω</text>
  <circle cx="300" cy="260" r="4" fill="#000"/>
  <circle cx="510" cy="260" r="4" fill="#000"/>

  <!-- Parallel result box -->
  <rect x="290" y="316" width="220" height="64" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="298" y="332" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">1/R_p = 1/R₁+1/R₂+1/R₃</text>
  <text x="298" y="346" font-family="Georgia,serif" font-size="10" fill="#000">= 1/4+1/6+1/12 = 1/2</text>
  <text x="298" y="360" font-family="Georgia,serif" font-size="10" fill="#000">R_p = 2 Ω  |  I_total = 6 A</text>
  <text x="298" y="374" font-family="Georgia,serif" font-size="9" fill="#555">Same V=12V; I₁=3A, I₂=2A, I₃=1A</text>

  <!-- Bottom note -->
  <rect x="30" y="396" width="480" height="24" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="40" y="412" font-family="Georgia,serif" font-size="10" fill="#000">KCL: ΣI_in = ΣI_out at any node  |  KVL: ΣV = 0 around any loop  |  R_series always &gt; R_parallel</text>
</svg>`;

  // ─── AC VOLTAGE WAVEFORM ──────────────────────────────────────────────────
  static acVoltageWaveformSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 540 440">

  <!-- Title -->
  <text x="100" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">AC Voltage Waveform — Sinusoidal Signal</text>
  <text x="80" y="38" font-family="Georgia,serif" font-size="10" fill="#555">v(t) = V₀ sin(ωt)  |  V_rms = V₀/√2 ≈ 0.707 V₀  |  ω = 2πf</text>

  <!-- Axes -->
  <line x1="50" y1="220" x2="510" y2="220" stroke="#000" stroke-width="2"/>
  <line x1="50" y1="360" x2="50"  y2="70"  stroke="#000" stroke-width="2"/>
  <polygon points="46,74 50,64 54,74" fill="#000"/>
  <polygon points="506,216 516,220 506,224" fill="#000"/>
  <text x="520" y="224" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">t</text>
  <text x="54"  y="62"  font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">v</text>

  <!-- Grid (time divisions, one period = 200px) -->
  <line x1="50"  y1="90" x2="510" y2="90"  stroke="#ddd" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="50"  y1="350" x2="510" y2="350" stroke="#ddd" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="150" y1="70" x2="150" y2="360" stroke="#eee" stroke-width="1"/>
  <line x1="250" y1="70" x2="250" y2="360" stroke="#eee" stroke-width="1"/>
  <line x1="350" y1="70" x2="350" y2="360" stroke="#eee" stroke-width="1"/>
  <line x1="450" y1="70" x2="450" y2="360" stroke="#eee" stroke-width="1"/>

  <!-- Period ticks -->
  <line x1="50"  y1="217" x2="50"  y2="223" stroke="#000" stroke-width="1.5"/>
  <line x1="250" y1="217" x2="250" y2="223" stroke="#000" stroke-width="1.5"/>
  <line x1="450" y1="217" x2="450" y2="223" stroke="#000" stroke-width="1.5"/>
  <text x="240" y="238" font-family="Georgia,serif" font-size="11" fill="#555">T (= 1/f)</text>
  <text x="44"  y="238" font-family="Georgia,serif" font-size="11" fill="#555">0</text>
  <!-- Half period ticks -->
  <line x1="150" y1="217" x2="150" y2="223" stroke="#555" stroke-width="1.2"/>
  <line x1="350" y1="217" x2="350" y2="223" stroke="#555" stroke-width="1.2"/>
  <text x="140" y="238" font-family="Georgia,serif" font-size="10" fill="#555">T/2</text>
  <text x="340" y="238" font-family="Georgia,serif" font-size="10" fill="#555">T/2</text>

  <!-- AC Sinusoidal curve (2 full cycles, period = 200px, amplitude = 130px) -->
  <path d="
    M 50,220
    C 75,220 75,90 100,90
    C 125,90 125,220 150,220
    C 175,220 175,350 200,350
    C 225,350 225,220 250,220
    C 275,220 275,90 300,90
    C 325,90 325,220 350,220
    C 375,220 375,350 400,350
    C 425,350 425,220 450,220
    C 475,220 475,90 500,90
    L 510,98
  " fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Peak V₀ annotation -->
  <line x1="42"  y1="90" x2="100" y2="90" stroke="#555" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="10" y="94" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">V₀</text>

  <!-- −V₀ annotation -->
  <line x1="42" y1="350" x2="200" y2="350" stroke="#555" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="8" y="354" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">−V₀</text>

  <!-- V_rms dashed horizontal -->
  <line x1="50" y1="128" x2="510" y2="128" stroke="#555" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="10" y="132" font-family="Georgia,serif" font-size="9" fill="#555">V_rms</text>

  <!-- −V_rms dashed -->
  <line x1="50" y1="312" x2="510" y2="312" stroke="#555" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="8" y="316" font-family="Georgia,serif" font-size="9" fill="#555">−V_rms</text>

  <!-- Amplitude arrow -->
  <line x1="34" y1="90"  x2="34" y2="220" stroke="#000" stroke-width="1.8"/>
  <polygon points="30,94 34,84 38,94" fill="#000"/>
  <polygon points="30,216 34,226 38,216" fill="#000"/>
  <text x="3" y="162" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#000">V₀</text>

  <!-- Peak label at first crest -->
  <line x1="100" y1="90" x2="100" y2="106" stroke="#555" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="104" y="90" font-family="Georgia,serif" font-size="9" fill="#555">peak</text>

  <!-- Zero crossing labels -->
  <circle cx="50"  cy="220" r="3" fill="#000"/>
  <circle cx="150" cy="220" r="3" fill="#000"/>
  <circle cx="250" cy="220" r="3" fill="#000"/>

  <!-- Phase angle ω·t annotation -->
  <path d="M 70,220 A 20,20 0 0,0 84,204" fill="none" stroke="#555" stroke-width="1.2"/>
  <text x="86" y="208" font-family="Georgia,serif" font-size="9" fill="#555">ωt</text>

  <!-- Info box -->
  <rect x="42" y="378" width="456" height="46" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="52" y="394" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Values:</text>
  <text x="52" y="410" font-family="Georgia,serif" font-size="10" fill="#000">V_rms = V₀/√2 ≈ 0.707 V₀  |  I_rms = I₀/√2  |  P_avg = V_rms·I_rms = V₀I₀/2</text>
  <text x="52" y="422" font-family="Georgia,serif" font-size="9" fill="#555">UK mains: V₀ = 325 V, V_rms = 230 V, f = 50 Hz  |  T = 1/f = 20 ms  |  ω = 2πf = 314 rad/s</text>
</svg>`;

  // ─── RLC CIRCUIT DIAGRAM ──────────────────────────────────────────────────
  static rlcCircuitDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 540 480">

  <!-- Title -->
  <text x="100" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Series RLC Circuit &amp; Phasor Diagram</text>
  <text x="60" y="38" font-family="Georgia,serif" font-size="10" fill="#555">Impedance Z = √(R²+(X_L−X_C)²)  |  tan φ = (X_L−X_C)/R</text>

  <!-- ══ LEFT: Circuit diagram ══ -->

  <!-- Loop corners: (40,80),(240,80),(240,300),(40,300) -->
  <!-- Top wire: (40,80)→(240,80) broken for each component -->
  <!-- Segment 1: (40,80)→(72,80) then R zigzag (72–112) then (112,80)→(140,80)
       then L coil (140–180) then (180,80)→(210,80) then C plates (210–240) -->
  <line x1="40"  y1="80" x2="68"  y2="80" stroke="#000" stroke-width="2.5"/>
  <!-- R zigzag -->
  <polyline points="68,80 72,80 75,68 80,92 85,68 90,92 95,68 100,92 105,68 109,80 112,80"
    fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="82" y="60" font-family="Georgia,serif" font-size="11" font-weight="bold" font-style="italic" fill="#000">R</text>
  <line x1="112" y1="80" x2="138" y2="80" stroke="#000" stroke-width="2.5"/>

  <!-- L inductor coil -->
  <path d="M138,80 C142,80 144,70 148,70 C152,70 154,80 158,80 C162,80 164,70 168,70 C172,70 174,80 178,80 C182,80 184,70 188,70 C192,70 194,80 198,80"
    fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
  <text x="158" y="60" font-family="Georgia,serif" font-size="11" font-weight="bold" font-style="italic" fill="#000">L</text>
  <line x1="198" y1="80" x2="214" y2="80" stroke="#000" stroke-width="2.5"/>

  <!-- C capacitor -->
  <line x1="214" y1="80" x2="214" y2="62" stroke="#000" stroke-width="2.5"/>
  <line x1="200" y1="62" x2="228" y2="62" stroke="#000" stroke-width="3"/>
  <line x1="200" y1="56" x2="228" y2="56" stroke="#000" stroke-width="3"/>
  <line x1="214" y1="56" x2="214" y2="45" stroke="#000" stroke-width="2.5"/>
  <!-- connect C to corner at (240,80) via: (214,45)→(240,45)→(240,80) -->
  <line x1="214" y1="45" x2="240" y2="45" stroke="#000" stroke-width="2.5"/>
  <line x1="240" y1="45" x2="240" y2="80" stroke="#000" stroke-width="2.5"/>
  <text x="230" y="60" font-family="Georgia,serif" font-size="11" font-weight="bold" font-style="italic" fill="#000">C</text>

  <!-- Right wire -->
  <line x1="240" y1="80"  x2="240" y2="300" stroke="#000" stroke-width="2.5"/>
  <!-- Bottom wire -->
  <line x1="240" y1="300" x2="40"  y2="300" stroke="#000" stroke-width="2.5"/>
  <!-- Left wire with AC source -->
  <line x1="40" y1="80"  x2="40" y2="160" stroke="#000" stroke-width="2.5"/>
  <circle cx="40" cy="195" r="30" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <!-- AC symbol inside -->
  <path d="M 24,195 Q 32,180 40,195 Q 48,210 56,195" fill="none" stroke="#000" stroke-width="2"/>
  <line x1="40" y1="225" x2="40" y2="300" stroke="#000" stroke-width="2.5"/>
  <text x="8" y="192" font-family="Georgia,serif" font-size="10" fill="#555">AC</text>
  <text x="8" y="204" font-family="Georgia,serif" font-size="10" fill="#555">source</text>

  <!-- Current arrow -->
  <polygon points="178,75 194,80 178,85" fill="#555"/>
  <text x="146" y="98" font-family="Georgia,serif" font-size="9" fill="#555">I →</text>

  <!-- Junction dots -->
  <circle cx="40"  cy="80"  r="4" fill="#000"/>
  <circle cx="240" cy="80"  r="4" fill="#000"/>
  <circle cx="240" cy="300" r="4" fill="#000"/>
  <circle cx="40"  cy="300" r="4" fill="#000"/>

  <!-- Voltage labels beneath components -->
  <text x="68" y="108" font-family="Georgia,serif" font-size="9" fill="#555">V_R=IR</text>
  <text x="138" y="108" font-family="Georgia,serif" font-size="9" fill="#555">V_L=IX_L</text>
  <text x="200" y="108" font-family="Georgia,serif" font-size="9" fill="#555">V_C=IX_C</text>

  <!-- ══ RIGHT: Phasor diagram ══ -->
  <text x="290" y="52" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Phasor Diagram</text>
  <text x="290" y="66" font-family="Georgia,serif" font-size="9" fill="#555">(V_L &gt; V_C shown — inductive)</text>

  <!-- Axes -->
  <line x1="390" y1="290" x2="390" y2="80" stroke="#555" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="300" y1="190" x2="510" y2="190" stroke="#555" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="512" y="194" font-family="Georgia,serif" font-size="10" fill="#555">Re (I)</text>
  <text x="394" y="78" font-family="Georgia,serif" font-size="10" fill="#555">Im</text>

  <!-- Phasors from origin (390,190) -->
  <!-- V_R: horizontal right (+real) length 80 -->
  <line x1="390" y1="190" x2="470" y2="190" stroke="#000" stroke-width="2.5"/>
  <polygon points="466,185 478,190 466,195" fill="#000"/>
  <text x="476" y="186" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">V_R</text>

  <!-- V_L: vertical up (+j) length 90 -->
  <line x1="390" y1="190" x2="390" y2="100" stroke="#000" stroke-width="2.5"/>
  <polygon points="385,104 390,94 395,104" fill="#000"/>
  <text x="396" y="96" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">V_L</text>

  <!-- V_C: vertical down (−j) length 50 (smaller → inductive) -->
  <line x1="390" y1="190" x2="390" y2="240" stroke="#555" stroke-width="2.5" stroke-dasharray="6,3"/>
  <polygon points="385,236 390,248 395,236" fill="#555"/>
  <text x="396" y="252" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#555">V_C</text>

  <!-- Net reactive V_L−V_C: from top of V_C (390,240) to top of V_L (390,100)? 
       Show as V_L−V_C from (470,190) going up = 390→(470,100) — the reactance component -->
  <!-- Actually show: V_total phasor from origin to (470,100) -->
  <line x1="390" y1="190" x2="468" y2="102" stroke="#000" stroke-width="2.5"/>
  <polygon points="462,96 472,98 466,108" fill="#000"/>
  <text x="474" y="100" font-family="Georgia,serif" font-size="11" font-weight="bold" font-style="italic" fill="#000">V_s</text>
  <text x="452" y="114" font-family="Georgia,serif" font-size="9" fill="#555">(total)</text>

  <!-- Phase angle φ arc -->
  <path d="M 430,190 A 40,40 0 0,0 418,158" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="438" y="165" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">φ</text>

  <!-- Right angle box at V_R / V_L junction -->
  <line x1="470" y1="190" x2="470" y2="102" stroke="#555" stroke-width="1.2" stroke-dasharray="3,2"/>
  <rect x="462" y="182" width="8" height="8" fill="none" stroke="#555" stroke-width="1"/>

  <!-- Info box -->
  <rect x="42" y="330" width="456" height="72" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="52" y="346" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Equations:</text>
  <text x="52" y="362" font-family="Georgia,serif" font-size="10" fill="#000">X_L = ωL  |  X_C = 1/ωC  |  Z = √(R²+(X_L−X_C)²)</text>
  <text x="52" y="378" font-family="Georgia,serif" font-size="10" fill="#000">I = V_s/Z  |  tan φ = (X_L−X_C)/R  |  cos φ = R/Z (power factor)</text>
  <text x="52" y="394" font-family="Georgia,serif" font-size="10" fill="#000">P = I²R = V_sI cosφ  |  Resonance: X_L=X_C → Z=R (min), I=max</text>
</svg>`;

  // ─── AC RESONANCE CURVE ───────────────────────────────────────────────────
  static acResonanceCurveSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 540 460">

  <!-- Title -->
  <text x="80" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">AC Resonance Curve — RLC Series Circuit</text>
  <text x="60" y="38" font-family="Georgia,serif" font-size="10" fill="#555">Current is maximum at resonant frequency f₀ where X_L = X_C (Z = R_min)</text>

  <!-- Axes -->
  <line x1="70" y1="360" x2="70"  y2="60"  stroke="#000" stroke-width="2"/>
  <line x1="70" y1="360" x2="500" y2="360" stroke="#000" stroke-width="2"/>
  <polygon points="66,64 70,54 74,64" fill="#000"/>
  <polygon points="496,356 506,360 496,364" fill="#000"/>
  <text x="510" y="364" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">f</text>
  <text x="76"  y="52"  font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">I</text>
  <text x="36"  y="52"  font-family="Georgia,serif" font-size="9"  fill="#555">(or Z⁻¹)</text>

  <!-- I_max dashed horizontal -->
  <line x1="70" y1="90" x2="500" y2="90" stroke="#555" stroke-width="1.5" stroke-dasharray="5,4"/>
  <text x="22" y="94" font-family="Georgia,serif" font-size="10" fill="#000">I_max</text>
  <text x="18" y="106" font-family="Georgia,serif" font-size="9"  fill="#555">= V/R</text>

  <!-- I_max/√2 level -->
  <line x1="70" y1="169" x2="500" y2="169" stroke="#ddd" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="10" y="173" font-family="Georgia,serif" font-size="9" fill="#555">I_max/√2</text>

  <!-- f₀ vertical dashed -->
  <line x1="285" y1="360" x2="285" y2="60" stroke="#555" stroke-width="1.5" stroke-dasharray="5,4"/>
  <text x="270" y="376" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#000">f₀</text>
  <text x="255" y="390" font-family="Georgia,serif" font-size="9" fill="#555">(resonance)</text>

  <!-- ── HIGH Q resonance curve (narrow, sharp peak) ── -->
  <path d="M70,355 C100,354 160,350 200,330 C220,318 240,290 260,220 C270,180 275,120 285,90
           C295,120 300,180 310,220 C330,290 350,318 380,340 C420,354 460,356 500,357"
    fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
  <text x="310" y="84" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">High Q</text>
  <text x="310" y="96" font-family="Georgia,serif" font-size="9" fill="#555">(narrow bandwidth)</text>

  <!-- ── LOW Q resonance curve (broad, flat) ── -->
  <path d="M70,345 C110,340 160,320 200,288 C230,264 255,200 285,170
           C315,200 340,264 370,288 C410,320 460,340 500,345"
    fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-dasharray="8,3"/>
  <text x="380" y="268" font-family="Georgia,serif" font-size="10" fill="#555">Low Q</text>
  <text x="374" y="280" font-family="Georgia,serif" font-size="9" fill="#555">(wide bandwidth)</text>

  <!-- Bandwidth Δf annotation on high-Q curve -->
  <!-- Points where I = I_max/√2 on high-Q: approx x=240 and x=330 at y=169 -->
  <circle cx="248" cy="169" r="3" fill="#000"/>
  <circle cx="322" cy="169" r="3" fill="#000"/>
  <line x1="248" y1="169" x2="248" y2="360" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="322" y1="169" x2="322" y2="360" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="238" y="376" font-family="Georgia,serif" font-size="9" fill="#555">f₁</text>
  <text x="316" y="376" font-family="Georgia,serif" font-size="9" fill="#555">f₂</text>

  <!-- Bandwidth arrow -->
  <line x1="248" y1="146" x2="322" y2="146" stroke="#000" stroke-width="1.5"/>
  <polygon points="252,142 242,146 252,150" fill="#000"/>
  <polygon points="318,142 328,146 318,150" fill="#000"/>
  <text x="266" y="140" font-family="Georgia,serif" font-size="10" fill="#000">Δf = f₀/Q</text>

  <!-- Peak annotation -->
  <circle cx="285" cy="90" r="4" fill="#000"/>
  <text x="290" y="86" font-family="Georgia,serif" font-size="9" fill="#555">peak at f₀</text>

  <!-- X_L and X_C curves (reactance) — dashed, small, below main axis extended -->
  <!-- Show X_L rising and X_C falling with intersection at f₀ -->
  <!-- Add a small sub-diagram in lower-right -->
  <text x="350" y="300" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Reactance vs f:</text>
  <line x1="350" y1="345" x2="490" y2="310" stroke="#000" stroke-width="1.5"/>
  <text x="492" y="308" font-family="Georgia,serif" font-size="9" fill="#000">X_L=ωL↑</text>
  <path d="M 350,310 Q 420,345 490,345" fill="none" stroke="#555" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="492" y="348" font-family="Georgia,serif" font-size="9" fill="#555">X_C↓</text>
  <line x1="420" y1="302" x2="420" y2="358" stroke="#aaa" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="414" y="298" font-family="Georgia,serif" font-size="8" fill="#aaa">f₀</text>

  <!-- Info box -->
  <rect x="42" y="406" width="456" height="42" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="52" y="422" font-family="Georgia,serif" font-size="10" fill="#000">f₀ = 1/(2π√LC)  |  Q = f₀/Δf = (1/R)√(L/C)  |  At resonance: Z=R, φ=0, I=I_max, X_L=X_C</text>
  <text x="52" y="438" font-family="Georgia,serif" font-size="9" fill="#555">High Q → sharp resonance, narrow bandwidth | Low Q → broad response | Δf = f₂−f₁ (half-power bandwidth)</text>
</svg>`;

  // ─── MAGNETIC FIELD LINES ─────────────────────────────────────────────────
  static magneticFieldLinesSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 500 480">

  <!-- Title -->
  <text x="60" y="22" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Magnetic Field Lines — Bar Magnet</text>
  <text x="40" y="38" font-family="Georgia,serif" font-size="10" fill="#555">Field lines exit N pole, enter S pole  |  closed loops inside magnet  |  density ∝ field strength</text>

  <!-- Bar magnet: rectangle centred at (250,240), horizontal -->
  <!-- N half (left): x=170–250, S half (right): x=250–330 -->
  <rect x="170" y="210" width="80" height="60" fill="#e0e0e0" stroke="#000" stroke-width="2.5"/>
  <text x="194" y="247" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000">N</text>
  <rect x="250" y="210" width="80" height="60" fill="#888" stroke="#000" stroke-width="2.5"/>
  <text x="274" y="247" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#fff">S</text>

  <!-- ── External field lines (exit N at x=170, curve around, enter S at x=330) ── -->

  <!-- Line 1: tight loop at equatorial band, exiting top of N pole face -->
  <path d="M170,225 Q130,200 100,240 Q130,280 170,255" fill="none" stroke="#000" stroke-width="1.8"/>
  <polygon points="174,228 166,218 162,228" fill="#000"/>
  <!-- Line 2 -->
  <path d="M170,225 Q90,160 250,100 Q410,160 330,225" fill="none" stroke="#000" stroke-width="1.8"/>
  <polygon points="246,98 256,100 248,108" fill="#000"/>
  <!-- Line 3: large arc going above -->
  <path d="M170,225 Q80,100 250,60 Q420,100 330,225" fill="none" stroke="#000" stroke-width="1.8"/>
  <polygon points="246,58 256,60 248,69" fill="#000"/>
  <!-- Line 4: very large arc -->
  <path d="M170,235 Q60,60 250,30 Q440,60 330,235" fill="none" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="246,28 256,30 248,39" fill="#555"/>

  <!-- Mirror below -->
  <!-- Line 1b -->
  <path d="M170,255 Q130,280 100,240 Q130,200 170,225" fill="none" stroke="#000" stroke-width="1.8"/>
  <!-- Line 2b -->
  <path d="M170,255 Q90,320 250,380 Q410,320 330,255" fill="none" stroke="#000" stroke-width="1.8"/>
  <polygon points="246,380 256,378 250,370" fill="#000"/>
  <!-- Line 3b -->
  <path d="M170,255 Q80,380 250,420 Q420,380 330,255" fill="none" stroke="#000" stroke-width="1.8"/>
  <polygon points="246,420 256,418 250,410" fill="#000"/>
  <!-- Line 4b: large dashed -->
  <path d="M170,245 Q60,420 250,450 Q440,420 330,245" fill="none" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="246,450 256,448 250,440" fill="#555"/>

  <!-- ── Internal field line (inside magnet, S to N) ── -->
  <path d="M310,240 Q280,240 250,240 Q220,240 190,240" fill="none" stroke="#aaa" stroke-width="2" stroke-dasharray="4,3"/>
  <polygon points="194,236 184,240 194,244" fill="#aaa"/>
  <text x="218" y="232" font-family="Georgia,serif" font-size="8" fill="#aaa">inside</text>

  <!-- Pole axis arrow (external, left of N) -->
  <line x1="148" y1="240" x2="100" y2="240" stroke="#555" stroke-width="1.5" stroke-dasharray="3,2"/>
  <polygon points="104,236 94,240 104,244" fill="#555"/>
  <text x="60" y="244" font-family="Georgia,serif" font-size="9" fill="#555">B →</text>

  <!-- Axis arrow (right of S) -->
  <line x1="352" y1="240" x2="400" y2="240" stroke="#555" stroke-width="1.5" stroke-dasharray="3,2"/>
  <polygon points="396,236 406,240 396,244" fill="#555"/>

  <!-- Compass needle (small, below magnet) showing field direction -->
  <text x="200" y="310" font-family="Georgia,serif" font-size="10" fill="#555">N pole of compass → points along field (away from N, toward S externally)</text>

  <!-- Legend -->
  <line x1="42" y1="340" x2="82" y2="340" stroke="#000" stroke-width="1.8"/>
  <polygon points="78,336 88,340 78,344" fill="#000"/>
  <text x="94" y="344" font-family="Georgia,serif" font-size="10" fill="#000">External field lines</text>

  <line x1="42" y1="358" x2="82" y2="358" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="78,354 88,358 78,362" fill="#555"/>
  <text x="94" y="362" font-family="Georgia,serif" font-size="10" fill="#555">Distant field lines</text>

  <line x1="42" y1="376" x2="82" y2="376" stroke="#aaa" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="94" y="380" font-family="Georgia,serif" font-size="10" fill="#aaa">Internal field (S→N inside)</text>

  <!-- Info box -->
  <rect x="30" y="400" width="440" height="66" rx="4" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="40" y="416" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key Properties:</text>
  <text x="40" y="432" font-family="Georgia,serif" font-size="10" fill="#000">• Field lines are closed loops (never start/end)  |  B = μ₀H inside material</text>
  <text x="40" y="448" font-family="Georgia,serif" font-size="10" fill="#000">• F = qv×B (Lorentz)  |  F = BIL sinθ (force on wire)  |  Φ = B·A cosθ</text>
  <text x="40" y="462" font-family="Georgia,serif" font-size="9" fill="#555">• Like poles repel, unlike attract  |  Monopoles do not exist: ∮B·dA = 0 (Gauss's law for magnetism)</text>
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
