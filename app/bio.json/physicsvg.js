



class PhysicsSvgDiagrams {





// ===== 2. WAVES & SOUND =====

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

<!-- TRANSVERSE WAVE -->
<text x="450" y="80" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">TRANSVERSE WAVE</text>
<text x="450" y="100" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">(e.g., light, water surface waves, waves on string)</text>

<!-- Equilibrium line -->
<line x1="100" y1="180" x2="800" y2="180" stroke="#666666" stroke-width="1" stroke-dasharray="5,5"/>
<text x="820" y="185" font-family="Arial" font-size="11" fill="#666666">Equilibrium</text>

<!-- Transverse wave -->
<path d="M 100 180 Q 150 130 200 180 Q 250 230 300 180 Q 350 130 400 180 Q 450 230 500 180 Q 550 130 600 180 Q 650 230 700 180 Q 750 130 800 180" stroke="#000000" stroke-width="3" fill="none"/>

<!-- Particles showing perpendicular motion -->
<circle cx="200" cy="180" r="5" fill="#000000"/>
<line x1="200" y1="170" x2="200" y2="130" stroke="#FF0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<line x1="200" y1="190" x2="200" y2="230" stroke="#FF0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>

<circle cx="400" cy="180" r="5" fill="#000000"/>
<line x1="400" y1="170" x2="400" y2="130" stroke="#FF0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<line x1="400" y1="190" x2="400" y2="230" stroke="#FF0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>

<!-- Wave direction -->
<line x1="720" y1="140" x2="780" y2="140" stroke="#0000FF" stroke-width="3" marker-end="url(#arrowhead-blue)"/>
<text x="750" y="130" font-family="Arial" font-size="12" fill="#0000FF">Wave direction</text>

<!-- Particle motion label -->
<text x="220" y="200" font-family="Arial" font-size="11" fill="#FF0000">Particle motion</text>
<text x="220" y="215" font-family="Arial" font-size="11" fill="#FF0000">(perpendicular)</text>

<!-- Wavelength -->
<line x1="100" y1="250" x2="300" y2="250" stroke="#000000" stroke-width="2"/>
<line x1="100" y1="245" x2="100" y2="255" stroke="#000000" stroke-width="2"/>
<line x1="300" y1="245" x2="300" y2="255" stroke="#000000" stroke-width="2"/>
<text x="200" y="270" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">λ (wavelength)</text>

<!-- Amplitude -->
<line x1="850" y1="180" x2="850" y2="130" stroke="#000000" stroke-width="2"/>
<line x1="845" y1="180" x2="855" y2="180" stroke="#000000" stroke-width="2"/>
<line x1="845" y1="130" x2="855" y2="130" stroke="#000000" stroke-width="2"/>
<text x="860" y="160" font-family="Arial" font-size="11" fill="#000000">A</text>

<!-- LONGITUDINAL WAVE -->
<text x="450" y="340" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">LONGITUDINAL WAVE</text>
<text x="450" y="360" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">(e.g., sound waves, seismic P-waves)</text>

<!-- Reference line -->
<line x1="100" y1="440" x2="800" y2="440" stroke="#666666" stroke-width="1" stroke-dasharray="5,5"/>

<!-- Particles showing compressions and rarefactions -->
<!-- Compression 1 -->
<circle cx="140" cy="440" r="4" fill="#000000"/>
<circle cx="150" cy="440" r="4" fill="#000000"/>
<circle cx="160" cy="440" r="4" fill="#000000"/>
<circle cx="170" cy="440" r="4" fill="#000000"/>
<circle cx="180" cy="440" r="4" fill="#000000"/>
<text x="160" y="470" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">C</text>

<!-- Rarefaction 1 -->
<circle cx="220" cy="440" r="4" fill="#000000"/>
<circle cx="240" cy="440" r="4" fill="#000000"/>
<circle cx="260" cy="440" r="4" fill="#000000"/>
<text x="240" y="470" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">R</text>

<!-- Compression 2 -->
<circle cx="340" cy="440" r="4" fill="#000000"/>
<circle cx="350" cy="440" r="4" fill="#000000"/>
<circle cx="360" cy="440" r="4" fill="#000000"/>
<circle cx="370" cy="440" r="4" fill="#000000"/>
<circle cx="380" cy="440" r="4" fill="#000000"/>
<text x="360" y="470" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">C</text>

<!-- Rarefaction 2 -->
<circle cx="420" cy="440" r="4" fill="#000000"/>
<circle cx="440" cy="440" r="4" fill="#000000"/>
<circle cx="460" cy="440" r="4" fill="#000000"/>
<text x="440" y="470" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">R</text>

<!-- Compression 3 -->
<circle cx="540" cy="440" r="4" fill="#000000"/>
<circle cx="550" cy="440" r="4" fill="#000000"/>
<circle cx="560" cy="440" r="4" fill="#000000"/>
<circle cx="570" cy="440" r="4" fill="#000000"/>
<circle cx="580" cy="440" r="4" fill="#000000"/>
<text x="560" y="470" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">C</text>

<!-- Rarefaction 3 -->
<circle cx="620" cy="440" r="4" fill="#000000"/>
<circle cx="640" cy="440" r="4" fill="#000000"/>
<circle cx="660" cy="440" r="4" fill="#000000"/>
<text x="640" y="470" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">R</text>

<!-- Particle motion arrows (parallel to wave) -->
<line x1="155" y1="410" x2="175" y2="410" stroke="#FF0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<line x1="165" y1="410" x2="145" y2="410" stroke="#FF0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<text x="160" y="400" font-family="Arial" font-size="10" fill="#FF0000">Particle</text>
<text x="160" y="390" font-family="Arial" font-size="10" fill="#FF0000">motion</text>

<!-- Wave direction -->
<line x1="720" y1="440" x2="780" y2="440" stroke="#0000FF" stroke-width="3" marker-end="url(#arrowhead-blue)"/>
<text x="750" y="430" font-family="Arial" font-size="12" fill="#0000FF">Wave direction</text>

<!-- Wavelength for longitudinal -->
<line x1="160" y1="500" x2="360" y2="500" stroke="#000000" stroke-width="2"/>
<line x1="160" y1="495" x2="160" y2="505" stroke="#000000" stroke-width="2"/>
<line x1="360" y1="495" x2="360" y2="505" stroke="#000000" stroke-width="2"/>
<text x="260" y="520" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">λ (wavelength)</text>

<!-- Labels -->
<text x="160" y="490" font-family="Arial" font-size="9" fill="#666666" text-anchor="middle">Compression</text>
<text x="640" y="490" font-family="Arial" font-size="9" fill="#666666" text-anchor="middle">Rarefaction</text>

<defs>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#FF0000"/>
  </marker>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#0000FF"/>
  </marker>
</defs>

</g>
</svg>`;

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

<!-- Point source -->
<circle cx="350" cy="350" r="8" fill="#FF0000" stroke="#000000" stroke-width="2"/>
<text x="350" y="355" font-family="Arial" font-size="12" fill="#FFFFFF" text-anchor="middle">S</text>
<text x="350" y="385" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Source</text>

<!-- Wavefronts (circular) -->
<circle cx="350" cy="350" r="50" stroke="#000000" stroke-width="2"/>
<circle cx="350" cy="350" r="100" stroke="#000000" stroke-width="2"/>
<circle cx="350" cy="350" r="150" stroke="#000000" stroke-width="2"/>
<circle cx="350" cy="350" r="200" stroke="#000000" stroke-width="2"/>
<circle cx="350" cy="350" r="250" stroke="#000000" stroke-width="2"/>

<!-- Wavelength indicator -->
<line x1="350" y1="350" x2="350" y2="100" stroke="#666666" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="345" y1="300" x2="355" y2="300" stroke="#FF0000" stroke-width="2"/>
<line x1="345" y1="250" x2="355" y2="250" stroke="#FF0000" stroke-width="2"/>
<line x1="350" y1="300" x2="350" y2="250" stroke="#FF0000" stroke-width="2"/>
<text x="365" y="280" font-family="Arial" font-size="12" fill="#FF0000">λ</text>

<!-- Rays (perpendicular to wavefronts) -->
<line x1="350" y1="350" x2="350" y2="100" stroke="#0000FF" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<line x1="350" y1="350" x2="585" y2="115" stroke="#0000FF" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<line x1="350" y1="350" x2="600" y2="350" stroke="#0000FF" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<line x1="350" y1="350" x2="585" y2="585" stroke="#0000FF" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<line x1="350" y1="350" x2="350" y2="600" stroke="#0000FF" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<line x1="350" y1="350" x2="115" y2="585" stroke="#0000FF" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<line x1="350" y1="350" x2="100" y2="350" stroke="#0000FF" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<line x1="350" y1="350" x2="115" y2="115" stroke="#0000FF" stroke-width="2" marker-end="url(#arrowhead-blue)"/>

<defs>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#0000FF"/>
  </marker>
</defs>

<!-- Labels -->
<text x="365" y="180" font-family="Arial" font-size="12" fill="#000000">Wavefront</text>
<text x="500" y="280" font-family="Arial" font-size="12" fill="#0000FF">Ray</text>

</g>
</svg>`;

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
<text x="50" y="280" font-family="Arial" font-size="14" fill="#000000">Medium 1</text>
<text x="50" y="295" font-family="Arial" font-size="12" fill="#666666">(v₁, n₁)</text>
<text x="50" y="330" font-family="Arial" font-size="14" fill="#000000">Medium 2</text>
<text x="50" y="345" font-family="Arial" font-size="12" fill="#666666">(v₂, n₂)</text>

<!-- Normal line -->
<line x1="400" y1="100" x2="400" y2="500" stroke="#666666" stroke-width="1" stroke-dasharray="5,5"/>
<text x="410" y="120" font-family="Arial" font-size="12" fill="#666666">Normal</text>

<!-- Incident ray -->
<line x1="250" y1="150" x2="400" y2="300" stroke="#FF0000" stroke-width="3" marker-end="url(#arrowhead-red)"/>
<text x="310" y="210" font-family="Arial" font-size="13" fill="#FF0000" font-weight="bold">Incident</text>

<!-- Reflected ray -->
<line x1="400" y1="300" x2="550" y2="150" stroke="#0000FF" stroke-width="3" marker-end="url(#arrowhead-blue)"/>
<text x="490" y="210" font-family="Arial" font-size="13" fill="#0000FF" font-weight="bold">Reflected</text>

<!-- Refracted ray -->
<line x1="400" y1="300" x2="480" y2="450" stroke="#00C853" stroke-width="3" marker-end="url(#arrowhead-green)"/>
<text x="450" y="390" font-family="Arial" font-size="13" fill="#00C853" font-weight="bold">Refracted</text>

<!-- Incident angle -->
<path d="M 400 200 Q 370 220 350 240" stroke="#FF0000" stroke-width="1.5" fill="none"/>
<text x="360" y="225" font-family="Arial" font-size="12" fill="#FF0000">θ₁</text>

<!-- Reflected angle -->
<path d="M 450 240 Q 430 220 400 200" stroke="#0000FF" stroke-width="1.5" fill="none"/>
<text x="430" y="225" font-family="Arial" font-size="12" fill="#0000FF">θ₁</text>

<!-- Refracted angle -->
<path d="M 400 350 Q 420 370 440 390" stroke="#00C853" stroke-width="1.5" fill="none"/>
<text x="415" y="375" font-family="Arial" font-size="12" fill="#00C853">θ₂</text>

<!-- Right angle indicators for normal -->
<path d="M 395 280 L 395 285 L 400 285" stroke="#666666" stroke-width="1" fill="none"/>
<path d="M 405 300 L 405 305 L 400 305" stroke="#666666" stroke-width="1" fill="none"/>

<defs>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#FF0000"/>
  </marker>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#0000FF"/>
  </marker>
  <marker id="arrowhead-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#00C853"/>
  </marker>
</defs>


</g>
</svg>`;

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

<!-- Source 1 -->
<circle cx="300" cy="300" r="10" fill="#FF0000" stroke="#000000" stroke-width="2"/>
<text x="300" y="305" font-family="Arial" font-size="10" fill="#FFFFFF" text-anchor="middle">S₁</text>

<!-- Source 2 -->
<circle cx="500" cy="300" r="10" fill="#0000FF" stroke="#000000" stroke-width="2"/>
<text x="500" y="305" font-family="Arial" font-size="10" fill="#FFFFFF" text-anchor="middle">S₂</text>

<!-- Wavefronts from S1 -->
<circle cx="300" cy="300" r="40" stroke="#FF0000" stroke-width="1.5" opacity="0.6"/>
<circle cx="300" cy="300" r="80" stroke="#FF0000" stroke-width="1.5" opacity="0.6"/>
<circle cx="300" cy="300" r="120" stroke="#FF0000" stroke-width="1.5" opacity="0.6"/>
<circle cx="300" cy="300" r="160" stroke="#FF0000" stroke-width="1.5" opacity="0.6"/>
<circle cx="300" cy="300" r="200" stroke="#FF0000" stroke-width="1.5" opacity="0.6"/>

<!-- Wavefronts from S2 -->
<circle cx="500" cy="300" r="40" stroke="#0000FF" stroke-width="1.5" opacity="0.6"/>
<circle cx="500" cy="300" r="80" stroke="#0000FF" stroke-width="1.5" opacity="0.6"/>
<circle cx="500" cy="300" r="120" stroke="#0000FF" stroke-width="1.5" opacity="0.6"/>
<circle cx="500" cy="300" r="160" stroke="#0000FF" stroke-width="1.5" opacity="0.6"/>
<circle cx="500" cy="300" r="200" stroke="#0000FF" stroke-width="1.5" opacity="0.6"/>

<!-- Central axis (perpendicular bisector) -->
<line x1="400" y1="100" x2="400" y2="500" stroke="#000000" stroke-width="2" stroke-dasharray="5,5"/>
<text x="410" y="250" font-family="Arial" font-size="11" fill="#000000">Central maximum</text>

<!-- Nodal lines (destructive interference) -->
<line x1="400" y1="300" x2="550" y2="180" stroke="#666666" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="400" y1="300" x2="550" y2="420" stroke="#666666" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="400" y1="300" x2="250" y2="180" stroke="#666666" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="400" y1="300" x2="250" y2="420" stroke="#666666" stroke-width="1.5" stroke-dasharray="3,3"/>

<!-- Labels for interference -->
<text x="580" y="170" font-family="Arial" font-size="10" fill="#666666">Node (destructive)</text>
<text x="420" y="120" font-family="Arial" font-size="10" fill="#000000">Antinode (constructive)</text>

<!-- Constructive interference markers -->
<circle cx="400" cy="200" r="5" fill="#00C853"/>
<circle cx="400" cy="400" r="5" fill="#00C853"/>
<circle cx="350" cy="240" r="5" fill="#00C853"/>
<circle cx="450" cy="240" r="5" fill="#00C853"/>
<circle cx="350" cy="360" r="5" fill="#00C853"/>
<circle cx="450" cy="360" r="5" fill="#00C853"/>


<!-- Distance label -->
<line x1="300" y1="320" x2="500" y2="320" stroke="#000000" stroke-width="2"/>
<line x1="300" y1="315" x2="300" y2="325" stroke="#000000" stroke-width="2"/>
<line x1="500" y1="315" x2="500" y2="325" stroke="#000000" stroke-width="2"/>
<text x="400" y="340" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">d (source separation)</text>
</g>
</svg>`;

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
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Standing Waves - 3rd Harmonic (n=3)</text>

<!-- Fixed ends -->
<rect x="80" y="240" width="10" height="60" fill="none" stroke="#000000" stroke-width="3"/>
<rect x="810" y="240" width="10" height="60" fill="none" stroke="#000000" stroke-width="3"/>
<text x="90" y="230" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Fixed</text>
<text x="820" y="230" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Fixed</text>

<!-- Equilibrium position -->
<line x1="90" y1="270" x2="810" y2="270" stroke="#666666" stroke-width="1" stroke-dasharray="5,5"/>

<!-- Standing wave at maximum amplitude (3rd harmonic) -->
<path d="M 90 270 Q 165 220 240 270 Q 315 320 390 270 Q 465 220 540 270 Q 615 320 690 270 Q 765 220 810 270" stroke="#000000" stroke-width="3" fill="none"/>

<!-- Node positions -->
<circle cx="90" cy="270" r="5" fill="#FF0000"/>
<text x="90" y="300" font-family="Arial" font-size="11" fill="#FF0000" text-anchor="middle">N</text>

<circle cx="240" cy="270" r="5" fill="#FF0000"/>
<text x="240" y="300" font-family="Arial" font-size="11" fill="#FF0000" text-anchor="middle">N</text>

<circle cx="390" cy="270" r="5" fill="#FF0000"/>
<text x="390" y="300" font-family="Arial" font-size="11" fill="#FF0000" text-anchor="middle">N</text>

<circle cx="540" cy="270" r="5" fill="#FF0000"/>
<text x="540" y="300" font-family="Arial" font-size="11" fill="#FF0000" text-anchor="middle">N</text>

<circle cx="690" cy="270" r="5" fill="#FF0000"/>
<text x="690" y="300" font-family="Arial" font-size="11" fill="#FF0000" text-anchor="middle">N</text>

<circle cx="810" cy="270" r="5" fill="#FF0000"/>
<text x="810" y="300" font-family="Arial" font-size="11" fill="#FF0000" text-anchor="middle">N</text>

<!-- Antinode positions -->
<circle cx="165" cy="220" r="5" fill="#0000FF"/>
<text x="165" y="210" font-family="Arial" font-size="11" fill="#0000FF" text-anchor="middle">A</text>

<circle cx="315" cy="320" r="5" fill="#0000FF"/>
<text x="315" y="340" font-family="Arial" font-size="11" fill="#0000FF" text-anchor="middle">A</text>

<circle cx="465" cy="220" r="5" fill="#0000FF"/>
<text x="465" y="210" font-family="Arial" font-size="11" fill="#0000FF" text-anchor="middle">A</text>

<circle cx="615" cy="320" r="5" fill="#0000FF"/>
<text x="615" y="340" font-family="Arial" font-size="11" fill="#0000FF" text-anchor="middle">A</text>

<circle cx="765" cy="220" r="5" fill="#0000FF"/>
<text x="765" y="210" font-family="Arial" font-size="11" fill="#0000FF" text-anchor="middle">A</text>

<!-- Wavelength indicator -->
<line x1="90" y1="360" x2="390" y2="360" stroke="#000000" stroke-width="2"/>
<line x1="90" y1="355" x2="90" y2="365" stroke="#000000" stroke-width="2"/>
<line x1="390" y1="355" x2="390" y2="365" stroke="#000000" stroke-width="2"/>
<text x="240" y="380" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">λ (wavelength)</text>

<!-- Length indicator -->
<line x1="90" y1="400" x2="810" y2="400" stroke="#000000" stroke-width="2"/>
<line x1="90" y1="395" x2="90" y2="405" stroke="#000000" stroke-width="2"/>
<line x1="810" y1="395" x2="810" y2="405" stroke="#000000" stroke-width="2"/>
<text x="450" y="420" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">L (length of string)</text>


<text x="60" y="130" font-family="Arial" font-size="12" fill="#000000">For nth harmonic:</text>
<text x="60" y="150" font-family="Arial" font-size="12" fill="#000000">L = n(λ/2)</text>
<text x="60" y="170" font-family="Arial" font-size="12" fill="#000000">f_n = nv/(2L) = n × f₁</text>
<text x="60" y="190" font-family="Arial" font-size="11" fill="#666666">where n = 1, 2, 3, 4...</text>


<!-- Legend -->
<text x="50" y="460" font-family="Arial" font-size="11" fill="#FF0000">N = Node (zero amplitude) | </text>
<text x="250" y="460" font-family="Arial" font-size="11" fill="#0000FF">A = Antinode (maximum amplitude)</text>
</g>
</svg>`;

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
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Doppler Effect - Moving Source</text>

<!-- Moving source (vehicle/ambulance) -->
<rect x="370" y="280" width="80" height="40" fill="none" stroke="#000000" stroke-width="3"/>
<circle cx="390" cy="325" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="430" cy="325" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<text x="410" y="305" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">SOURCE</text>

<!-- Velocity arrow -->
<line x1="450" y1="300" x2="510" y2="300" stroke="#FF0000" stroke-width="3" marker-end="url(#arrowhead-red)"/>
<text x="480" y="290" font-family="Arial" font-size="13" fill="#FF0000" font-weight="bold">v_s</text>

<!-- Wavefronts (compressed ahead, expanded behind) -->
<!-- Behind source (expanded) -->
<circle cx="410" cy="300" r="80" stroke="#0000FF" stroke-width="2"/>
<circle cx="410" cy="300" r="120" stroke="#0000FF" stroke-width="2"/>
<circle cx="410" cy="300" r="160" stroke="#0000FF" stroke-width="2"/>
<circle cx="410" cy="300" r="200" stroke="#0000FF" stroke-width="2"/>

<!-- Ahead of source (compressed) -->
<circle cx="410" cy="300" r="40" stroke="#FF0000" stroke-width="2"/>
<ellipse cx="435" cy="300" rx="35" ry="40" stroke="#FF0000" stroke-width="2"/>
<ellipse cx="460" cy="300" rx="30" ry="40" stroke="#FF0000" stroke-width="2"/>
<ellipse cx="485" cy="300" rx="25" ry="40" stroke="#FF0000" stroke-width="2"/>

<!-- Observer behind (lower frequency) -->
<circle cx="150" cy="300" r="15" fill="none" stroke="#000000" stroke-width="3"/>
<circle cx="150" cy="295" r="3" fill="#000000"/>
<circle cx="145" cy="305" r="3" fill="#000000"/>
<circle cx="155" cy="305" r="3" fill="#000000"/>
<line x1="150" y1="310" x2="150" y2="325" stroke="#000000" stroke-width="2"/>
<text x="150" y="355" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Observer</text>
<text x="150" y="370" font-family="Arial" font-size="11" fill="#0000FF" text-anchor="middle">f < f₀</text>
<text x="150" y="385" font-family="Arial" font-size="10" fill="#0000FF" text-anchor="middle">(lower pitch)</text>

<!-- Observer ahead (higher frequency) -->
<circle cx="750" cy="300" r="15" fill="none" stroke="#000000" stroke-width="3"/>
<circle cx="750" cy="295" r="3" fill="#000000"/>
<circle cx="745" cy="305" r="3" fill="#000000"/>
<circle cx="755" cy="305" r="3" fill="#000000"/>
<line x1="750" y1="310" x2="750" y2="325" stroke="#000000" stroke-width="2"/>
<text x="750" y="355" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Observer</text>
<text x="750" y="370" font-family="Arial" font-size="11" fill="#FF0000" text-anchor="middle">f > f₀</text>
<text x="750" y="385" font-family="Arial" font-size="10" fill="#FF0000" text-anchor="middle">(higher pitch)</text>

<!-- Wavelength comparison -->
<line x1="350" y1="220" x2="410" y2="220" stroke="#0000FF" stroke-width="2"/>
<line x1="350" y1="215" x2="350" y2="225" stroke="#0000FF" stroke-width="2"/>
<line x1="410" y1="215" x2="410" y2="225" stroke="#0000FF" stroke-width="2"/>
<text x="380" y="210" font-family="Arial" font-size="11" fill="#0000FF">λ > λ₀</text>

<line x1="440" y1="220" x2="470" y2="220" stroke="#FF0000" stroke-width="2"/>
<line x1="440" y1="215" x2="440" y2="225" stroke="#FF0000" stroke-width="2"/>
<line x1="470" y1="215" x2="470" y2="225" stroke="#FF0000" stroke-width="2"/>
<text x="455" y="210" font-family="Arial" font-size="11" fill="#FF0000">λ < λ₀</text>

<defs>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#FF0000"/>
  </marker>
</defs>

<!-- Equations box -->
<rect x="50" y="450" width="800" height="120" fill="none" stroke="#000000" stroke-width="2"/>
<text x="450" y="475" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Doppler Effect Equations</text>

<text x="60" y="500" font-family="Arial" font-size="12" fill="#000000">Source moving toward observer:</text>
<text x="70" y="520" font-family="Arial" font-size="12" fill="#000000">f_observed = f_source × [v_sound / (v_sound - v_source)]</text>

<text x="450" y="500" font-family="Arial" font-size="12" fill="#000000">Source moving away from observer:</text>
<text x="460" y="520" font-family="Arial" font-size="12" fill="#000000">f_observed = f_source × [v_sound / (v_sound + v_source)]</text>

<text x="60" y="550" font-family="Arial" font-size="11" fill="#666666">f₀ = source frequency, v_sound = speed of sound in medium</text>
</g>
</svg>`;

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
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Sound Wave - Pressure Variation</text>

<!-- Axes -->
<line x1="100" y1="300" x2="800" y2="300" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<line x1="100" y1="450" x2="100" y2="150" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Axis labels -->
<text x="810" y="305" font-family="Arial" font-size="14" fill="#000000">Position (x)</text>
<text x="50" y="160" font-family="Arial" font-size="14" fill="#000000">Pressure</text>

<!-- Equilibrium pressure line -->
<line x1="100" y1="300" x2="800" y2="300" stroke="#666666" stroke-width="1" stroke-dasharray="5,5"/>
<text x="810" y="295" font-family="Arial" font-size="11" fill="#666666">P₀</text>

<!-- Pressure wave (sinusoidal) -->
<path d="M 100 300 Q 175 230 250 300 Q 325 370 400 300 Q 475 230 550 300 Q 625 370 700 300 Q 775 230 800 300" stroke="#0000FF" stroke-width="3" fill="none"/>

<!-- Compression regions (high pressure) -->
<rect x="210" y="250" width="80" height="20" fill="#FF0000" opacity="0.2"/>
<text x="250" y="240" font-family="Arial" font-size="12" fill="#FF0000" text-anchor="middle">Compression</text>
<text x="250" y="225" font-family="Arial" font-size="11" fill="#FF0000" text-anchor="middle">(High P)</text>

<rect x="510" y="250" width="80" height="20" fill="#FF0000" opacity="0.2"/>
<text x="550" y="240" font-family="Arial" font-size="12" fill="#FF0000" text-anchor="middle">Compression</text>

<!-- Rarefaction regions (low pressure) -->
<rect x="360" y="330" width="80" height="20" fill="#0000FF" opacity="0.2"/>
<text x="400" y="380" font-family="Arial" font-size="12" fill="#0000FF" text-anchor="middle">Rarefaction</text>
<text x="400" y="395" font-family="Arial" font-size="11" fill="#0000FF" text-anchor="middle">(Low P)</text>

<rect x="660" y="330" width="80" height="20" fill="#0000FF" opacity="0.2"/>
<text x="700" y="380" font-family="Arial" font-size="12" fill="#0000FF" text-anchor="middle">Rarefaction</text>

<!-- Wavelength indicator -->
<line x1="250" y1="200" x2="550" y2="200" stroke="#000000" stroke-width="2"/>
<line x1="250" y1="195" x2="250" y2="205" stroke="#000000" stroke-width="2"/>
<line x1="550" y1="195" x2="550" y2="205" stroke="#000000" stroke-width="2"/>
<text x="400" y="190" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">λ (wavelength)</text>

<!-- Amplitude indicator -->
<line x1="850" y1="300" x2="850" y2="230" stroke="#000000" stroke-width="2"/>
<line x1="845" y1="300" x2="855" y2="300" stroke="#000000" stroke-width="2"/>
<line x1="845" y1="230" x2="855" y2="230" stroke="#000000" stroke-width="2"/>
<text x="860" y="270" font-family="Arial" font-size="12" fill="#000000">A</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Particle displacement representation (bottom) -->
<text x="450" y="480" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Particle Displacement (same wave)</text>

<!-- Particles showing displacement -->
<line x1="100" y1="520" x2="800" y2="520" stroke="#666666" stroke-width="1" stroke-dasharray="3,3"/>

<!-- Compressed region particles -->
<circle cx="230" cy="520" r="4" fill="#000000"/>
<circle cx="240" cy="520" r="4" fill="#000000"/>
<circle cx="250" cy="520" r="4" fill="#000000"/>
<circle cx="260" cy="520" r="4" fill="#000000"/>
<circle cx="270" cy="520" r="4" fill="#000000"/>

<!-- Normal spacing -->
<circle cx="320" cy="520" r="4" fill="#000000"/>
<circle cx="340" cy="520" r="4" fill="#000000"/>
<circle cx="360" cy="520" r="4" fill="#000000"/>

<!-- Rarefied region particles -->
<circle cx="400" cy="520" r="4" fill="#000000"/>
<circle cx="425" cy="520" r="4" fill="#000000"/>
<circle cx="450" cy="520" r="4" fill="#000000"/>

<!-- Compressed region particles -->
<circle cx="530" cy="520" r="4" fill="#000000"/>
<circle cx="540" cy="520" r="4" fill="#000000"/>
<circle cx="550" cy="520" r="4" fill="#000000"/>
<circle cx="560" cy="520" r="4" fill="#000000"/>
<circle cx="570" cy="520" r="4" fill="#000000"/>

</g>
</svg>`;

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

<!-- Incident wave -->
<text x="100" y="100" font-family="Arial" font-size="13" fill="#000000">Incident plane wave</text>
<line x1="150" y1="150" x2="150" y2="450" stroke="#0000FF" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<line x1="130" y1="150" x2="130" y2="450" stroke="#0000FF" stroke-width="1" opacity="0.5"/>
<line x1="110" y1="150" x2="110" y2="450" stroke="#0000FF" stroke-width="1" opacity="0.5"/>

<!-- Barrier with double slits -->
<rect x="200" y="150" width="20" height="120" fill="none" stroke="#000000" stroke-width="4"/>
<rect x="200" y="330" width="20" height="120" fill="none" stroke="#000000" stroke-width="4"/>

<!-- Slit 1 (top) -->
<line x1="200" y1="270" x2="220" y2="270" stroke="#FFFFFF" stroke-width="20"/>
<line x1="205" y1="270" x2="215" y2="270" stroke="#000000" stroke-width="2"/>
<text x="180" y="275" font-family="Arial" font-size="11" fill="#000000">S₁</text>

<!-- Slit 2 (bottom) -->
<line x1="200" y1="330" x2="220" y2="330" stroke="#FFFFFF" stroke-width="20"/>
<line x1="205" y1="330" x2="215" y2="330" stroke="#000000" stroke-width="2"/>
<text x="180" y="335" font-family="Arial" font-size="11" fill="#000000">S₂</text>

<!-- Slit separation -->
<line x1="190" y1="270" x2="190" y2="330" stroke="#000000" stroke-width="2"/>
<line x1="185" y1="270" x2="195" y2="270" stroke="#000000" stroke-width="2"/>
<line x1="185" y1="330" x2="195" y2="330" stroke="#000000" stroke-width="2"/>
<text x="170" y="305" font-family="Arial" font-size="11" fill="#000000">d</text>

<!-- Diffracted waves from slits -->
<path d="M 220 270 Q 270 240 320 270" stroke="#FF0000" stroke-width="1.5" opacity="0.6"/>
<path d="M 220 270 Q 270 270 320 270" stroke="#FF0000" stroke-width="1.5" opacity="0.6"/>
<path d="M 220 270 Q 270 300 320 270" stroke="#FF0000" stroke-width="1.5" opacity="0.6"/>

<path d="M 220 330 Q 270 300 320 330" stroke="#0000FF" stroke-width="1.5" opacity="0.6"/>
<path d="M 220 330 Q 270 330 320 330" stroke="#0000FF" stroke-width="1.5" opacity="0.6"/>
<path d="M 220 330 Q 270 360 320 330" stroke="#0000FF" stroke-width="1.5" opacity="0.6"/>

<!-- Screen -->
<rect x="700" y="150" width="20" height="300" fill="none" stroke="#000000" stroke-width="4"/>
<text x="740" y="300" font-family="Arial" font-size="13" fill="#000000">Screen</text>

<!-- Intensity pattern on screen -->
<rect x="750" y="160" width="50" height="280" fill="none" stroke="#000000" stroke-width="2"/>
<text x="775" y="145" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Intensity</text>

<!-- Central maximum -->
<rect x="755" y="290" width="40" height="20" fill="#000000"/>
<text x="810" y="305" font-family="Arial" font-size="10" fill="#000000">Central max</text>

<!-- First order maxima -->
<rect x="755" y="250" width="40" height="15" fill="#666666"/>
<rect x="755" y="335" width="40" height="15" fill="#666666"/>
<text x="810" y="260" font-family="Arial" font-size="9" fill="#000000">n=1</text>
<text x="810" y="345" font-family="Arial" font-size="9" fill="#000000">n=1</text>

<!-- Second order maxima -->
<rect x="755" y="215" width="40" height="10" fill="#999999"/>
<rect x="755" y="375" width="40" height="10" fill="#999999"/>
<text x="810" y="223" font-family="Arial" font-size="9" fill="#000000">n=2</text>
<text x="810" y="383" font-family="Arial" font-size="9" fill="#000000">n=2</text>

<!-- Third order maxima -->
<rect x="755" y="185" width="40" height="8" fill="#CCCCCC"/>
<rect x="755" y="407" width="40" height="8" fill="#CCCCCC"/>

<!-- Angle indicator -->
<line x1="210" y1="300" x2="700" y2="250" stroke="#666666" stroke-width="1" stroke-dasharray="3,3"/>
<path d="M 260 300 Q 270 290 280 285" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="290" y="295" font-family="Arial" font-size="11" fill="#000000">θ</text>

<!-- Distance to screen -->
<line x1="210" y1="480" x2="710" y2="480" stroke="#000000" stroke-width="2"/>
<line x1="210" y1="475" x2="210" y2="485" stroke="#000000" stroke-width="2"/>
<line x1="710" y1="475" x2="710" y2="485" stroke="#000000" stroke-width="2"/>
<text x="460" y="500" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">D (distance to screen)</text>

<defs>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#0000FF"/>
  </marker>
</defs>


</g>
</svg>`;

// ===== WAVES APPARATUS DIAGRAMS =====

static rippletankApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Ripple Tank Apparatus
</metadata>
<g fill="none" stroke="#000000">
<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Ripple Tank</text>

<!-- Tank container -->
<rect x="100" y="100" width="600" height="350" fill="none" stroke="#000000" stroke-width="4"/>
<text x="400" y="80" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Water surface (top view)</text>

<!-- Water level indicator -->
<line x1="100" y1="450" x2="700" y2="450" stroke="#0000FF" stroke-width="2"/>
<text x="720" y="455" font-family="Arial" font-size="11" fill="#0000FF">Water</text>

<!-- Wave source (oscillating bar) -->
<rect x="180" y="150" width="440" height="20" fill="none" stroke="#FF0000" stroke-width="3"/>
<text x="400" y="145" font-family="Arial" font-size="12" fill="#FF0000" text-anchor="middle">Oscillating bar (source)</text>

<!-- Circular wavefronts -->
<ellipse cx="400" cy="250" rx="50" ry="40" stroke="#000000" stroke-width="2"/>
<ellipse cx="400" cy="250" rx="100" ry="80" stroke="#000000" stroke-width="2"/>
<ellipse cx="400" cy="250" rx="150" ry="120" stroke="#000000" stroke-width="2"/>
<ellipse cx="400" cy="250" rx="200" ry="160" stroke="#000000" stroke-width="2"/>

<!-- Wavelength measurement -->
<line x1="400" y1="290" x2="400" y2="330" stroke="#FF0000" stroke-width="2"/>
<line x1="395" y1="290" x2="405" y2="290" stroke="#FF0000" stroke-width="2"/>
<line x1="395" y1="330" x2="405" y2="330" stroke="#FF0000" stroke-width="2"/>
<text x="420" y="315" font-family="Arial" font-size="12" fill="#FF0000">λ</text>

<!-- Golden Questions -->
<rect x="30" y="180" width="120" height="140" fill="#FFF9C4" stroke="#000000" stroke-width="2"/>
<text x="90" y="200" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle" font-weight="bold">What's Changing?</text>
<text x="40" y="215" font-family="Arial" font-size="8" fill="#000000">Wavelength</text>
<text x="40" y="226" font-family="Arial" font-size="8" fill="#000000">(with depth)</text>

<text x="90" y="247" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle" font-weight="bold">What's Constant?</text>
<text x="40" y="262" font-family="Arial" font-size="8" fill="#000000">Frequency</text>

<text x="90" y="283" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle" font-weight="bold">What Law?</text>
<text x="40" y="298" font-family="Arial" font-size="8" fill="#000000">v = fλ</text>
<text x="40" y="309" font-family="Arial" font-size="8" fill="#000000">Wave speed</text>
<text x="40" y="320" font-family="Arial" font-size="8" fill="#000000">depends on depth</text>

<!-- Equations box -->
<rect x="100" y="480" width="600" height="100" fill="none" stroke="#000000" stroke-width="2"/>
<text x="400" y="505" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Ripple Tank Wave Relationships</text>

<text x="110" y="530" font-family="Arial" font-size="12" fill="#000000">Wave equation: v = fλ</text>
<text x="110" y="550" font-family="Arial" font-size="12" fill="#000000">In shallow water: v = √(gh) where h = depth</text>
<text x="110" y="570" font-family="Arial" font-size="11" fill="#666666">Shallower water → slower waves → shorter wavelength (f constant)</text>
</g>
</svg>`;

static resonanceTubeApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="600" height="900" viewBox="0 0 600 900"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Resonance Tube Apparatus
</metadata>
<g fill="none" stroke="#000000">
<!-- Title -->
<text x="300" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Resonance Tube</text>

<!-- Tube -->
<rect x="200" y="100" width="100" height="600" fill="none" stroke="#000000" stroke-width="4"/>

<!-- Water in tube -->
<rect x="200" y="500" width="100" height="200" fill="#ADD8E6" opacity="0.5" stroke="#0000FF" stroke-width="2"/>
<text x="190" y="610" font-family="Arial" font-size="12" fill="#0000FF">Water</text>

<!-- Water reservoir connected -->
<rect x="80" y="650" width="80" height="50" fill="#ADD8E6" opacity="0.5" stroke="#0000FF" stroke-width="2"/>
<line x1="160" y1="675" x2="200" y2="650" stroke="#0000FF" stroke-width="2"/>
<text x="120" y="730" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Reservoir</text>
<text x="120" y="745" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">(adjustable)</text>

<!-- Tuning fork above tube -->
<line x1="230" y1="50" x2="230" y2="90" stroke="#000000" stroke-width="3"/>
<line x1="210" y1="50" x2="250" y2="50" stroke="#000000" stroke-width="3"/>
<path d="M 210 50 Q 210 30 230 30 Q 250 30 250 50" stroke="#000000" stroke-width="3" fill="none"/>
<text x="270" y="55" font-family="Arial" font-size="12" fill="#000000">Tuning fork</text>
<text x="270" y="70" font-family="Arial" font-size="11" fill="#666666">f = 340 Hz</text>

<!-- Air column -->
<text x="320" y="300" font-family="Arial" font-size="12" fill="#000000">Air column</text>
<line x1="310" y1="305" x2="280" y2="320" stroke="#000000" stroke-width="1"/>

<!-- Standing wave representation -->
<path d="M 250 150 Q 270 200 250 250 Q 230 300 250 350 Q 270 400 250 450 Q 230 500 250 500" stroke="#FF0000" stroke-width="2" stroke-dasharray="3,3" fill="none"/>

<!-- Node at water surface -->
<circle cx="250" cy="500" r="5" fill="#FF0000"/>
<text x="260" y="505" font-family="Arial" font-size="11" fill="#FF0000">Node (N)</text>

<!-- Antinode at open end -->
<circle cx="250" cy="100" r="5" fill="#0000FF"/>
<text x="260" y="105" font-family="Arial" font-size="11" fill="#0000FF">Antinode (A)</text>

<!-- Length measurement -->
<line x1="180" y1="100" x2="180" y2="500" stroke="#000000" stroke-width="2"/>
<line x1="175" y1="100" x2="185" y2="100" stroke="#000000" stroke-width="2"/>
<line x1="175" y1="500" x2="185" y2="500" stroke="#000000" stroke-width="2"/>
<text x="165" y="310" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" transform="rotate(-90 165 310)">L</text>

<!-- Golden Questions -->
<rect x="370" y="200" width="130" height="140" fill="#FFF9C4" stroke="#000000" stroke-width="2"/>
<text x="435" y="220" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle" font-weight="bold">What's Changing?</text>
<text x="380" y="235" font-family="Arial" font-size="8" fill="#000000">Water level</text>
<text x="380" y="246" font-family="Arial" font-size="8" fill="#000000">(tube length L)</text>

<text x="435" y="267" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle" font-weight="bold">What's Constant?</text>
<text x="380" y="282" font-family="Arial" font-size="8" fill="#000000">Frequency of</text>
<text x="380" y="293" font-family="Arial" font-size="8" fill="#000000">tuning fork</text>

<text x="435" y="314" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle" font-weight="bold">What Law?</text>
<text x="380" y="329" font-family="Arial" font-size="8" fill="#000000">L = (2n-1)λ/4</text>

<!-- Equations box -->
<rect x="50" y="750" width="500" height="130" fill="none" stroke="#000000" stroke-width="2"/>
<text x="300" y="775" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Resonance in Closed Tube</text>

<text x="60" y="800" font-family="Arial" font-size="12" fill="#000000">For nth resonance: L_n = (2n - 1)λ/4 where n = 1, 2, 3...</text>
<text x="60" y="820" font-family="Arial" font-size="12" fill="#000000">First resonance (n=1): L₁ = λ/4</text>
<text x="60" y="840" font-family="Arial" font-size="12" fill="#000000">Second resonance (n=2): L₂ = 3λ/4</text>
<text x="60" y="860" font-family="Arial" font-size="12" fill="#000000">Wavelength: λ = v/f → Speed of sound: v = fλ</text>
</g>
</svg>`;

static sonometerApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Sonometer Apparatus
</metadata>
<g fill="none" stroke="#000000">
<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Sonometer</text>

<!-- Wooden board/base -->
<rect x="100" y="280" width="700" height="40" fill="none" stroke="#000000" stroke-width="3"/>
<path d="M 90 315 L 110 325 M 110 315 L 130 325 M 130 315 L 150 325 M 150 315 L 170 325 M 170 315 L 190 325 M 190 315 L 210 325" stroke="#000000" stroke-width="1.5"/>
<path d="M 690 315 L 710 325 M 710 315 L 730 325 M 730 315 L 750 325 M 750 315 L 770 325 M 770 315 L 790 325 M 790 315 L 810 325" stroke="#000000" stroke-width="1.5"/>

<!-- Fixed ends -->
<rect x="150" y="240" width="20" height="80" fill="none" stroke="#000000" stroke-width="3"/>
<rect x="730" y="240" width="20" height="80" fill="none" stroke="#000000" stroke-width="3"/>

<!-- String/wire -->
<line x1="170" y1="280" x2="730" y2="280" stroke="#000000" stroke-width="3"/>

<!-- Movable bridges -->
<path d="M 300 260 L 290 280 L 310 280 Z" fill="none" stroke="#000000" stroke-width="2"/>
<text x="300" y="250" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Bridge 1</text>

<path d="M 600 260 L 590 280 L 610 280 Z" fill="none" stroke="#000000" stroke-width="2"/>
<text x="600" y="250" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Bridge 2</text>

<!-- Vibrating length -->
<line x1="300" y1="350" x2="600" y2="350" stroke="#FF0000" stroke-width="2"/>
<line x1="300" y1="345" x2="300" y2="355" stroke="#FF0000" stroke-width="2"/>
<line x1="600" y1="345" x2="600" y2="355" stroke="#FF0000" stroke-width="2"/>
<text x="450" y="370" font-family="Arial" font-size="13" fill="#FF0000" text-anchor="middle">L (vibrating length)</text>

<!-- Pulley and weight system -->
<circle cx="780" cy="280" r="15" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="780" y1="295" x2="780" y2="450" stroke="#000000" stroke-width="2"/>
<rect x="760" y="450" width="40" height="60" fill="none" stroke="#000000" stroke-width="3"/>
<text x="780" y="480" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Mass</text>
<text x="780" y="495" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">m</text>
<line x1="780" y1="510" x2="780" y2="540" stroke="#0000FF" stroke-width="3" marker-end="url(#arrowhead-blue)"/>
<text x="790" y="530" font-family="Arial" font-size="11" fill="#0000FF">T = mg</text>

<!-- Tuning fork near string -->
<line x1="430" y1="200" x2="430" y2="270" stroke="#000000" stroke-width="3"/>
<line x1="410" y1="200" x2="450" y2="200" stroke="#000000" stroke-width="3"/>
<path d="M 410 200 Q 410 180 430 180 Q 450 180 450 200" stroke="#000000" stroke-width="3" fill="none"/>
<text x="460" y="205" font-family="Arial" font-size="11" fill="#000000">Tuning fork</text>

<!-- Standing wave on string -->
<path d="M 300 280 Q 375 250 450 280 Q 525 310 600 280" stroke="#FF0000" stroke-width="2" stroke-dasharray="5,5" fill="none"/>

<defs>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#0000FF"/>
  </marker>
</defs>

<!-- Golden Questions -->
<rect x="30" y="100" width="150" height="160" fill="#FFF9C4" stroke="#000000" stroke-width="2"/>
<text x="105" y="120" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle" font-weight="bold">What's Changing?</text>
<text x="40" y="135" font-family="Arial" font-size="8" fill="#000000">Length, tension,</text>
<text x="40" y="146" font-family="Arial" font-size="8" fill="#000000">or linear density</text>

<text x="105" y="167" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle" font-weight="bold">What's Constant?</text>
<text x="40" y="182" font-family="Arial" font-size="8" fill="#000000">Frequency</text>
<text x="40" y="193" font-family="Arial" font-size="8" fill="#000000">(for resonance)</text>

<text x="105" y="214" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle" font-weight="bold">What Law?</text>
<text x="40" y="229" font-family="Arial" font-size="8" fill="#000000">f = (1/2L)√(T/μ)</text>
<text x="40" y="240" font-family="Arial" font-size="7" fill="#666666">μ = mass per</text>
<text x="40" y="250" font-family="Arial" font-size="7" fill="#666666">unit length</text>

<!-- Equations box -->
<rect x="200" y="400" width="600" height="120" fill="none" stroke="#000000" stroke-width="2"/>
<text x="500" y="425" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Sonometer Equation</text>

<text x="210" y="450" font-family="Arial" font-size="12" fill="#000000">Fundamental frequency: f = (1/2L)√(T/μ)</text>
<text x="210" y="475" font-family="Arial" font-size="11" fill="#666666">T = tension in string (N), μ = linear mass density (kg/m), L = length (m)</text>

<text x="210" y="500" font-family="Arial" font-size="12" fill="#000000">Relationships:</text>
<text x="220" y="515" font-family="Arial" font-size="11" fill="#000000">• f ∝ 1/L (length) | f ∝ √T (tension) | f ∝ 1/√μ (mass density)</text>
</g>
</svg>`;


// ===== STATES OF MATTER =====

static particleModelSolidSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Particle Model - Solid State
</metadata>
<g fill="#000000" stroke="#000000">
<!-- Container -->
<rect x="100" y="100" width="500" height="500" fill="none" stroke="#000000" stroke-width="3"/>

<!-- Regular lattice arrangement of particles (8x8 grid) -->
<circle cx="150" cy="150" r="15" fill="none" stroke-width="2"/>
<circle cx="210" cy="150" r="15" fill="none" stroke-width="2"/>
<circle cx="270" cy="150" r="15" fill="none" stroke-width="2"/>
<circle cx="330" cy="150" r="15" fill="none" stroke-width="2"/>
<circle cx="390" cy="150" r="15" fill="none" stroke-width="2"/>
<circle cx="450" cy="150" r="15" fill="none" stroke-width="2"/>
<circle cx="510" cy="150" r="15" fill="none" stroke-width="2"/>
<circle cx="550" cy="150" r="15" fill="none" stroke-width="2"/>

<circle cx="150" cy="210" r="15" fill="none" stroke-width="2"/>
<circle cx="210" cy="210" r="15" fill="none" stroke-width="2"/>
<circle cx="270" cy="210" r="15" fill="none" stroke-width="2"/>
<circle cx="330" cy="210" r="15" fill="none" stroke-width="2"/>
<circle cx="390" cy="210" r="15" fill="none" stroke-width="2"/>
<circle cx="450" cy="210" r="15" fill="none" stroke-width="2"/>
<circle cx="510" cy="210" r="15" fill="none" stroke-width="2"/>
<circle cx="550" cy="210" r="15" fill="none" stroke-width="2"/>

<circle cx="150" cy="270" r="15" fill="none" stroke-width="2"/>
<circle cx="210" cy="270" r="15" fill="none" stroke-width="2"/>
<circle cx="270" cy="270" r="15" fill="none" stroke-width="2"/>
<circle cx="330" cy="270" r="15" fill="none" stroke-width="2"/>
<circle cx="390" cy="270" r="15" fill="none" stroke-width="2"/>
<circle cx="450" cy="270" r="15" fill="none" stroke-width="2"/>
<circle cx="510" cy="270" r="15" fill="none" stroke-width="2"/>
<circle cx="550" cy="270" r="15" fill="none" stroke-width="2"/>

<circle cx="150" cy="330" r="15" fill="none" stroke-width="2"/>
<circle cx="210" cy="330" r="15" fill="none" stroke-width="2"/>
<circle cx="270" cy="330" r="15" fill="none" stroke-width="2"/>
<circle cx="330" cy="330" r="15" fill="none" stroke-width="2"/>
<circle cx="390" cy="330" r="15" fill="none" stroke-width="2"/>
<circle cx="450" cy="330" r="15" fill="none" stroke-width="2"/>
<circle cx="510" cy="330" r="15" fill="none" stroke-width="2"/>
<circle cx="550" cy="330" r="15" fill="none" stroke-width="2"/>

<circle cx="150" cy="390" r="15" fill="none" stroke-width="2"/>
<circle cx="210" cy="390" r="15" fill="none" stroke-width="2"/>
<circle cx="270" cy="390" r="15" fill="none" stroke-width="2"/>
<circle cx="330" cy="390" r="15" fill="none" stroke-width="2"/>
<circle cx="390" cy="390" r="15" fill="none" stroke-width="2"/>
<circle cx="450" cy="390" r="15" fill="none" stroke-width="2"/>
<circle cx="510" cy="390" r="15" fill="none" stroke-width="2"/>
<circle cx="550" cy="390" r="15" fill="none" stroke-width="2"/>

<circle cx="150" cy="450" r="15" fill="none" stroke-width="2"/>
<circle cx="210" cy="450" r="15" fill="none" stroke-width="2"/>
<circle cx="270" cy="450" r="15" fill="none" stroke-width="2"/>
<circle cx="330" cy="450" r="15" fill="none" stroke-width="2"/>
<circle cx="390" cy="450" r="15" fill="none" stroke-width="2"/>
<circle cx="450" cy="450" r="15" fill="none" stroke-width="2"/>
<circle cx="510" cy="450" r="15" fill="none" stroke-width="2"/>
<circle cx="550" cy="450" r="15" fill="none" stroke-width="2"/>

<circle cx="150" cy="510" r="15" fill="none" stroke-width="2"/>
<circle cx="210" cy="510" r="15" fill="none" stroke-width="2"/>
<circle cx="270" cy="510" r="15" fill="none" stroke-width="2"/>
<circle cx="330" cy="510" r="15" fill="none" stroke-width="2"/>
<circle cx="390" cy="510" r="15" fill="none" stroke-width="2"/>
<circle cx="450" cy="510" r="15" fill="none" stroke-width="2"/>
<circle cx="510" cy="510" r="15" fill="none" stroke-width="2"/>
<circle cx="550" cy="510" r="15" fill="none" stroke-width="2"/>

<circle cx="150" cy="560" r="15" fill="none" stroke-width="2"/>
<circle cx="210" cy="560" r="15" fill="none" stroke-width="2"/>
<circle cx="270" cy="560" r="15" fill="none" stroke-width="2"/>
<circle cx="330" cy="560" r="15" fill="none" stroke-width="2"/>
<circle cx="390" cy="560" r="15" fill="none" stroke-width="2"/>
<circle cx="450" cy="560" r="15" fill="none" stroke-width="2"/>
<circle cx="510" cy="560" r="15" fill="none" stroke-width="2"/>
<circle cx="550" cy="560" r="15" fill="none" stroke-width="2"/>

<!-- Bonds between particles (selection to show structure) -->
<line x1="150" y1="150" x2="210" y2="150" stroke="#666666" stroke-width="1" stroke-dasharray="2,2"/>
<line x1="150" y1="150" x2="150" y2="210" stroke="#666666" stroke-width="1" stroke-dasharray="2,2"/>
<line x1="210" y1="150" x2="210" y2="210" stroke="#666666" stroke-width="1" stroke-dasharray="2,2"/>
<line x1="150" y1="210" x2="210" y2="210" stroke="#666666" stroke-width="1" stroke-dasharray="2,2"/>

<!-- Vibration indicators (small arrows) -->
<path d="M 145 145 L 140 140" stroke="#000000" stroke-width="1" marker-end="url(#arrowhead-small)"/>
<path d="M 155 155 L 160 160" stroke="#000000" stroke-width="1" marker-end="url(#arrowhead-small)"/>
<path d="M 205 205 L 200 200" stroke="#000000" stroke-width="1" marker-end="url(#arrowhead-small)"/>
<path d="M 215 215 L 220 220" stroke="#000000" stroke-width="1" marker-end="url(#arrowhead-small)"/>

<!-- Title -->
<text x="350" y="40" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">SOLID STATE</text>

<!-- Properties -->
<rect x="50" y="620" width="600" height="70" fill="none" stroke="#000000" stroke-width="2"/>
<text x="350" y="645" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">• Fixed shape and volume</text>
<text x="350" y="665" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">• Particles in regular arrangement</text>
<text x="350" y="685" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">• Strong intermolecular forces • Vibrate in fixed positions</text>

<defs>
  <marker id="arrowhead-small" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
    <polygon points="0 0, 6 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

static particleModelLiquidSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Particle Model - Liquid State
</metadata>
<g fill="#000000" stroke="#000000">
<!-- Container -->
<rect x="100" y="100" width="500" height="500" fill="none" stroke="#000000" stroke-width="3"/>

<!-- Irregular close-packed arrangement (random but touching) -->
<circle cx="165" cy="420" r="15" fill="none" stroke-width="2"/>
<circle cx="195" cy="445" r="15" fill="none" stroke-width="2"/>
<circle cx="230" cy="425" r="15" fill="none" stroke-width="2"/>
<circle cx="260" cy="450" r="15" fill="none" stroke-width="2"/>
<circle cx="295" cy="430" r="15" fill="none" stroke-width="2"/>
<circle cx="325" cy="455" r="15" fill="none" stroke-width="2"/>
<circle cx="360" cy="435" r="15" fill="none" stroke-width="2"/>
<circle cx="390" cy="460" r="15" fill="none" stroke-width="2"/>
<circle cx="425" cy="440" r="15" fill="none" stroke-width="2"/>
<circle cx="455" cy="465" r="15" fill="none" stroke-width="2"/>
<circle cx="490" cy="445" r="15" fill="none" stroke-width="2"/>
<circle cx="520" cy="470" r="15" fill="none" stroke-width="2"/>
<circle cx="545" cy="450" r="15" fill="none" stroke-width="2"/>

<circle cx="150" cy="390" r="15" fill="none" stroke-width="2"/>
<circle cx="180" cy="370" r="15" fill="none" stroke-width="2"/>
<circle cx="215" cy="385" r="15" fill="none" stroke-width="2"/>
<circle cx="245" cy="365" r="15" fill="none" stroke-width="2"/>
<circle cx="280" cy="380" r="15" fill="none" stroke-width="2"/>
<circle cx="310" cy="360" r="15" fill="none" stroke-width="2"/>
<circle cx="345" cy="375" r="15" fill="none" stroke-width="2"/>
<circle cx="375" cy="355" r="15" fill="none" stroke-width="2"/>
<circle cx="410" cy="370" r="15" fill="none" stroke-width="2"/>
<circle cx="440" cy="350" r="15" fill="none" stroke-width="2"/>
<circle cx="475" cy="365" r="15" fill="none" stroke-width="2"/>
<circle cx="505" cy="345" r="15" fill="none" stroke-width="2"/>
<circle cx="540" cy="360" r="15" fill="none" stroke-width="2"/>

<circle cx="165" cy="330" r="15" fill="none" stroke-width="2"/>
<circle cx="195" cy="310" r="15" fill="none" stroke-width="2"/>
<circle cx="230" cy="325" r="15" fill="none" stroke-width="2"/>
<circle cx="260" cy="305" r="15" fill="none" stroke-width="2"/>
<circle cx="295" cy="320" r="15" fill="none" stroke-width="2"/>
<circle cx="325" cy="300" r="15" fill="none" stroke-width="2"/>
<circle cx="360" cy="315" r="15" fill="none" stroke-width="2"/>
<circle cx="390" cy="295" r="15" fill="none" stroke-width="2"/>
<circle cx="425" cy="310" r="15" fill="none" stroke-width="2"/>
<circle cx="455" cy="290" r="15" fill="none" stroke-width="2"/>
<circle cx="490" cy="305" r="15" fill="none" stroke-width="2"/>
<circle cx="520" cy="285" r="15" fill="none" stroke-width="2"/>

<circle cx="150" cy="270" r="15" fill="none" stroke-width="2"/>
<circle cx="180" cy="250" r="15" fill="none" stroke-width="2"/>
<circle cx="215" cy="265" r="15" fill="none" stroke-width="2"/>
<circle cx="245" cy="245" r="15" fill="none" stroke-width="2"/>
<circle cx="280" cy="260" r="15" fill="none" stroke-width="2"/>
<circle cx="310" cy="240" r="15" fill="none" stroke-width="2"/>
<circle cx="345" cy="255" r="15" fill="none" stroke-width="2"/>
<circle cx="375" cy="235" r="15" fill="none" stroke-width="2"/>
<circle cx="410" cy="250" r="15" fill="none" stroke-width="2"/>
<circle cx="440" cy="230" r="15" fill="none" stroke-width="2"/>
<circle cx="475" cy="245" r="15" fill="none" stroke-width="2"/>

<circle cx="165" cy="210" r="15" fill="none" stroke-width="2"/>
<circle cx="195" cy="190" r="15" fill="none" stroke-width="2"/>
<circle cx="230" cy="205" r="15" fill="none" stroke-width="2"/>
<circle cx="260" cy="185" r="15" fill="none" stroke-width="2"/>
<circle cx="295" cy="200" r="15" fill="none" stroke-width="2"/>
<circle cx="325" cy="180" r="15" fill="none" stroke-width="2"/>
<circle cx="360" cy="195" r="15" fill="none" stroke-width="2"/>
<circle cx="390" cy="175" r="15" fill="none" stroke-width="2"/>
<circle cx="425" cy="190" r="15" fill="none" stroke-width="2"/>

<!-- Movement arrows showing fluidity -->
<path d="M 170 420 L 160 410" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<path d="M 300 430 L 310 420" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<path d="M 430 440 L 440 450" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<path d="M 185 370 L 175 360" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<path d="M 350 375 L 360 385" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Liquid surface (meniscus) -->
<path d="M 100 150 Q 350 160 600 150" stroke="#000000" stroke-width="2" fill="none"/>

<!-- Title -->
<text x="350" y="40" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">LIQUID STATE</text>

<!-- Properties -->
<rect x="50" y="520" width="600" height="90" fill="none" stroke="#000000" stroke-width="2"/>
<text x="350" y="545" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">• Fixed volume, variable shape</text>
<text x="350" y="565" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">• Particles close together but randomly arranged</text>
<text x="350" y="585" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">• Moderate intermolecular forces</text>
<text x="350" y="605" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">• Particles can move and slide past each other</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

static particleModelGasSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Particle Model - Gas State
</metadata>
<g fill="#000000" stroke="#000000">
<!-- Container -->
<rect x="100" y="100" width="500" height="500" fill="none" stroke="#000000" stroke-width="3"/>

<!-- Widely spaced particles (random positions) -->
<circle cx="150" cy="150" r="12" fill="none" stroke-width="2"/>
<circle cx="280" cy="180" r="12" fill="none" stroke-width="2"/>
<circle cx="450" cy="160" r="12" fill="none" stroke-width="2"/>
<circle cx="550" cy="200" r="12" fill="none" stroke-width="2"/>

<circle cx="200" cy="270" r="12" fill="none" stroke-width="2"/>
<circle cx="380" cy="250" r="12" fill="none" stroke-width="2"/>
<circle cx="520" cy="290" r="12" fill="none" stroke-width="2"/>

<circle cx="160" cy="350" r="12" fill="none" stroke-width="2"/>
<circle cx="310" cy="380" r="12" fill="none" stroke-width="2"/>
<circle cx="480" cy="360" r="12" fill="none" stroke-width="2"/>

<circle cx="230" cy="450" r="12" fill="none" stroke-width="2"/>
<circle cx="410" cy="480" r="12" fill="none" stroke-width="2"/>
<circle cx="540" cy="440" r="12" fill="none" stroke-width="2"/>

<circle cx="340" cy="520" r="12" fill="none" stroke-width="2"/>
<circle cx="170" cy="540" r="12" fill="none" stroke-width="2"/>

<!-- Motion paths/arrows showing random movement -->
<path d="M 155 155 L 185 175" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="170" y="160" font-family="Arial" font-size="10" fill="#000000">v₁</text>

<path d="M 285 185 L 265 220" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="275" y="200" font-family="Arial" font-size="10" fill="#000000">v₂</text>

<path d="M 455 165 L 490 155" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="470" y="155" font-family="Arial" font-size="10" fill="#000000">v₃</text>

<path d="M 545 205 L 530 235" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="540" y="220" font-family="Arial" font-size="10" fill="#000000">v₄</text>

<path d="M 205 275 L 225 300" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="210" y="285" font-family="Arial" font-size="10" fill="#000000">v₅</text>

<path d="M 375 255 L 355 275" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="370" y="260" font-family="Arial" font-size="10" fill="#000000">v₆</text>

<path d="M 515 295 L 500 320" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="510" y="305" font-family="Arial" font-size="10" fill="#000000">v₇</text>

<path d="M 165 355 L 145 380" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="155" y="365" font-family="Arial" font-size="10" fill="#000000">v₈</text>

<path d="M 315 385 L 340 400" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="320" y="390" font-family="Arial" font-size="10" fill="#000000">v₉</text>

<path d="M 475 365 L 460 390" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="470" y="375" font-family="Arial" font-size="10" fill="#000000">v₁₀</text>

<!-- Collision illustration -->
<circle cx="350" cy="300" r="12" fill="none" stroke-width="2" stroke="#666666"/>
<circle cx="380" cy="300" r="12" fill="none" stroke-width="2" stroke="#666666"/>
<path d="M 340 300 L 330 300" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead-gray)"/>
<path d="M 390 300 L 400 300" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead-gray)"/>
<text x="360" y="280" font-family="Arial" font-size="11" fill="#666666">collision</text>

<!-- Title -->
<text x="350" y="40" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">GAS STATE</text>

<!-- Properties -->
<rect x="50" y="615" width="600" height="70" fill="none" stroke="#000000" stroke-width="2"/>
<text x="350" y="640" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">• Variable shape and volume (fills container)</text>
<text x="350" y="660" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">• Particles far apart, random arrangement</text>
<text x="350" y="680" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">• Weak forces • Fast random motion • Frequent collisions</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrowhead-gray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#666666"/>
  </marker>
</defs>
</g>
</svg>`;

// ===== STATES OF MATTER APPARATUS =====

static syringeGasLawApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Syringe - Boyle's Law Apparatus
</metadata>
<g fill="none" stroke="#000000">
<!-- Syringe barrel -->
<rect x="150" y="200" width="400" height="100" fill="none" stroke="#000000" stroke-width="3"/>

<!-- Volume markings -->
<line x1="200" y1="190" x2="200" y2="310" stroke="#000000" stroke-width="2"/>
<text x="200" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">10mL</text>
<line x1="300" y1="190" x2="300" y2="310" stroke="#000000" stroke-width="2"/>
<text x="300" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">20mL</text>
<line x1="400" y1="190" x2="400" y2="310" stroke="#000000" stroke-width="2"/>
<text x="400" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">30mL</text>
<line x1="500" y1="190" x2="500" y2="310" stroke="#000000" stroke-width="2"/>
<text x="500" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">40mL</text>

<!-- Piston at initial position -->
<rect x="450" y="195" width="15" height="110" fill="#666666" stroke="#000000" stroke-width="2"/>
<circle cx="457" cy="250" r="25" fill="none" stroke="#000000" stroke-width="2"/>

<!-- Gas particles (more spread out initially) -->
<circle cx="220" cy="230" r="8" fill="none" stroke-width="2"/>
<circle cx="280" cy="260" r="8" fill="none" stroke-width="2"/>
<circle cx="340" cy="220" r="8" fill="none" stroke-width="2"/>
<circle cx="400" cy="270" r="8" fill="none" stroke-width="2"/>
<circle cx="250" cy="250" r="8" fill="none" stroke-width="2"/>
<circle cx="310" cy="240" r="8" fill="none" stroke-width="2"/>
<circle cx="370" cy="280" r="8" fill="none" stroke-width="2"/>
<circle cx="430" cy="230" r="8" fill="none" stroke-width="2"/>

<!-- Plunger/piston rod -->
<rect x="465" y="235" width="100" height="30" fill="none" stroke="#000000" stroke-width="3"/>

<!-- Force arrow on plunger -->
<line x1="600" y1="250" x2="565" y2="250" stroke="#000000" stroke-width="3" marker-end="url(#arrowhead)"/>
<text x="615" y="255" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">F</text>

<!-- Nozzle (sealed) -->
<path d="M 150 240 L 120 245 L 120 255 L 150 260 Z" fill="#000000" stroke="#000000" stroke-width="2"/>
<line x1="100" y1="250" x2="120" y2="250" stroke="#000000" stroke-width="3"/>
<line x1="100" y1="245" x2="100" y2="255" stroke="#000000" stroke-width="3"/>
<text x="90" y="240" font-family="Arial" font-size="11" fill="#000000">sealed</text>

<!-- State 2: Compressed -->
<text x="400" y="380" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">After Compression:</text>

<!-- Syringe barrel (compressed) -->
<rect x="150" y="410" width="400" height="100" fill="none" stroke="#000000" stroke-width="3"/>

<!-- Piston at compressed position -->
<rect x="300" y="405" width="15" height="110" fill="#666666" stroke="#000000" stroke-width="2"/>
<circle cx="307" cy="460" r="25" fill="none" stroke="#000000" stroke-width="2"/>

<!-- Gas particles (more crowded) -->
<circle cx="180" cy="440" r="8" fill="none" stroke-width="2"/>
<circle cx="220" cy="470" r="8" fill="none" stroke-width="2"/>
<circle cx="260" cy="430" r="8" fill="none" stroke-width="2"/>
<circle cx="200" cy="490" r="8" fill="none" stroke-width="2"/>
<circle cx="240" cy="450" r="8" fill="none" stroke-width="2"/>
<circle cx="280" cy="480" r="8" fill="none" stroke-width="2"/>
<circle cx="190" cy="460" r="8" fill="none" stroke-width="2"/>
<circle cx="230" cy="440" r="8" fill="none" stroke-width="2"/>
<circle cx="270" cy="460" r="8" fill="none" stroke-width="2"/>
<circle cx="210" cy="450" r="8" fill="none" stroke-width="2"/>

<!-- Plunger at compressed position -->
<rect x="315" y="445" width="100" height="30" fill="none" stroke="#000000" stroke-width="3"/>

<!-- Larger force arrow -->
<line x1="450" y1="460" x2="415" y2="460" stroke="#000000" stroke-width="3" marker-end="url(#arrowhead)"/>
<text x="465" y="465" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">2F</text>

<!-- Nozzle (sealed) -->
<path d="M 150 450 L 120 455 L 120 465 L 150 470 Z" fill="#000000" stroke="#000000" stroke-width="2"/>
<line x1="100" y1="460" x2="120" y2="460" stroke="#000000" stroke-width="3"/>
<line x1="100" y1="455" x2="100" y2="465" stroke="#000000" stroke-width="3"/>

<!-- Volume labels -->
<text x="225" y="540" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">V₁ = 50 mL</text>
<text x="225" y="400" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">V₂ = 25 mL</text>

<!-- Pressure labels -->
<text x="600" y="230" font-family="Arial" font-size="14" fill="#000000">P₁</text>
<text x="600" y="440" font-family="Arial" font-size="14" fill="#000000">P₂ = 2P₁</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Syringe - Boyle's Law Apparatus</text>

<!-- Equation box -->
<rect x="550" y="50" width="220" height="120" fill="none" stroke="#000000" stroke-width="2"/>
<text x="660" y="75" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Boyle's Law</text>
<text x="660" y="100" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">P₁V₁ = P₂V₂</text>
<text x="660" y="125" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">At constant T:</text>
<text x="660" y="145" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">P ∝ 1/V</text>
<text x="660" y="165" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Volume halved → Pressure doubled</text>
</g>
</svg>`;

static hydraulicPressApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="700" viewBox="0 0 900 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Hydraulic Press - Pascal's Principle
</metadata>
<g fill="none" stroke="#000000">
<!-- Small piston cylinder -->
<rect x="150" y="300" width="80" height="200" fill="none" stroke="#000000" stroke-width="3"/>
<rect x="160" y="280" width="60" height="20" fill="#666666" stroke="#000000" stroke-width="2"/>

<!-- Small piston -->
<rect x="170" y="320" width="40" height="15" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<line x1="190" y1="320" x2="190" y2="250" stroke="#000000" stroke-width="3"/>

<!-- Input force -->
<line x1="190" y1="200" x2="190" y2="250" stroke="#000000" stroke-width="3" marker-end="url(#arrowhead)"/>
<text x="200" y="220" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">F₁ = 50N</text>

<!-- Large piston cylinder -->
<rect x="600" y="200" width="200" height="300" fill="none" stroke="#000000" stroke-width="3"/>
<rect x="625" y="180" width="150" height="20" fill="#666666" stroke="#000000" stroke-width="2"/>

<!-- Large piston -->
<rect x="640" y="220" width="120" height="15" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<line x1="700" y1="220" x2="700" y2="120" stroke="#000000" stroke-width="3"/>

<!-- Output force -->
<line x1="700" y1="70" x2="700" y2="120" stroke="#000000" stroke-width="3" marker-start="url(#arrowhead-up)"/>
<text x="710" y="90" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">F₂ = 500N</text>

<!-- Connecting tube (fluid pathway) -->
<path d="M 190 500 L 190 550 L 700 550 L 700 500" stroke="#000000" stroke-width="3" fill="none"/>

<!-- Fluid (represented by shading) -->
<rect x="150" y="335" width="80" height="165" fill="#CCCCCC" opacity="0.3" stroke="none"/>
<rect x="600" y="235" width="200" height="265" fill="#CCCCCC" opacity="0.3" stroke="none"/>
<rect x="190" y="500" width="510" height="50" fill="#CCCCCC" opacity="0.3" stroke="none"/>

<!-- Area labels -->
<text x="190" y="370" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A₁ = 10 cm²</text>
<text x="700" y="270" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">A₂ = 100 cm²</text>

<!-- Pressure indicators -->
<text x="190" y="420" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">P</text>
<text x="700" y="380" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">P</text>

<!-- Pressure arrows -->
<line x1="155" y1="400" x2="225" y2="400" stroke="#666666" stroke-width="2" marker-start="url(#arrowhead-left)" marker-end="url(#arrowhead)"/>
<line x1="605" y1="350" x2="795" y2="350" stroke="#666666" stroke-width="2" marker-start="url(#arrowhead-left)" marker-end="url(#arrowhead)"/>

<!-- Distance moved -->
<line x1="120" y1="320" x2="120" y2="280" stroke="#666666" stroke-width="2"/>
<line x1="115" y1="320" x2="125" y2="320" stroke="#666666" stroke-width="2"/>
<line x1="115" y1="280" x2="125" y2="280" stroke="#666666" stroke-width="2"/>
<text x="100" y="305" font-family="Arial" font-size="11" fill="#666666">d₁</text>

<line x1="570" y1="220" x2="570" y2="180" stroke="#666666" stroke-width="2"/>
<line x1="565" y1="220" x2="575" y2="220" stroke="#666666" stroke-width="2"/>
<line x1="565" y1="180" x2="575" y2="180" stroke="#666666" stroke-width="2"/>
<text x="550" y="205" font-family="Arial" font-size="11" fill="#666666">d₂</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrowhead-up" markerWidth="10" markerHeight="10" refX="3" refY="0" orient="auto">
    <polygon points="0 0, 3 10, 6 0" fill="#000000"/>
  </marker>
  <marker id="arrowhead-left" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
    <polygon points="10 0, 0 3, 10 6" fill="#666666"/>
  </marker>
</defs>

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Hydraulic Press</text>

<!-- Equation box -->
<rect x="50" y="580" width="800" height="100" fill="none" stroke="#000000" stroke-width="2"/>
<text x="450" y="605" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">Pascal's Principle</text>
<text x="450" y="630" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Pressure is transmitted equally throughout fluid: P₁ = P₂</text>
<text x="450" y="655" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">F₁/A₁ = F₂/A₂   →   F₂ = F₁ × (A₂/A₁) = 50N × (100/10) = 500N</text>
<text x="450" y="675" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Mechanical advantage = 10 (but d₁ = 10 × d₂ - work conserved)</text>
</g>
</svg>`;

// ===== THERMODYNAMICS & HEAT =====

static heatingCurvePhysicsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Heating Curve - Water
</metadata>
<g fill="none" stroke="#000000">
<!-- Axes -->
<line x1="100" y1="500" x2="800" y2="500" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<line x1="100" y1="500" x2="100" y2="50" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Axis labels -->
<text x="810" y="505" font-family="Arial" font-size="14" fill="#000000">Heat Added (Q)</text>
<text x="40" y="45" font-family="Arial" font-size="14" fill="#000000">T (°C)</text>

<!-- Temperature markings -->
<line x1="95" y1="450" x2="105" y2="450" stroke="#000000" stroke-width="2"/>
<text x="75" y="455" font-family="Arial" font-size="12" fill="#000000">0</text>
<line x1="95" y1="300" x2="105" y2="300" stroke="#000000" stroke-width="2"/>
<text x="65" y="305" font-family="Arial" font-size="12" fill="#000000">100</text>

<!-- Heating curve segments -->
<!-- 1. Heating ice (solid) -->
<line x1="150" y1="480" x2="250" y2="450" stroke="#000000" stroke-width="3"/>
<text x="200" y="520" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Ice heating</text>
<text x="200" y="535" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Q = mcΔT</text>

<!-- 2. Melting (plateau at 0°C) -->
<line x1="250" y1="450" x2="350" y2="450" stroke="#000000" stroke-width="3"/>
<text x="300" y="425" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Melting</text>
<text x="300" y="440" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Q = mL_f</text>
<line x1="250" y1="450" x2="350" y2="450" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="3,3"/>

<!-- 3. Heating water (liquid) -->
<line x1="350" y1="450" x2="500" y2="300" stroke="#000000" stroke-width="3"/>
<text x="425" y="390" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Water heating</text>
<text x="425" y="405" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Q = mcΔT</text>

<!-- 4. Boiling (plateau at 100°C) -->
<line x1="500" y1="300" x2="650" y2="300" stroke="#000000" stroke-width="3"/>
<text x="575" y="275" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Boiling</text>
<text x="575" y="290" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Q = mL_v</text>
<line x1="500" y1="300" x2="650" y2="300" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="3,3"/>

<!-- 5. Heating steam (gas) -->
<line x1="650" y1="300" x2="750" y2="200" stroke="#000000" stroke-width="3"/>
<text x="700" y="240" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Steam heating</text>
<text x="700" y="255" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Q = mcΔT</text>

<!-- Horizontal reference lines -->
<line x1="100" y1="450" x2="800" y2="450" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="2,2"/>
<line x1="100" y1="300" x2="800" y2="300" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="2,2"/>

<!-- Phase labels on graph -->
<text x="200" y="470" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">SOLID</text>
<text x="425" y="380" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">LIQUID</text>
<text x="700" y="250" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">GAS</text>

<!-- Key points -->
<circle cx="250" cy="450" r="4" fill="#000000"/>
<circle cx="350" cy="450" r="4" fill="#000000"/>
<circle cx="500" cy="300" r="4" fill="#000000"/>
<circle cx="650" cy="300" r="4" fill="#000000"/>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Heating Curve - Water</text>

<!-- Note box -->
<rect x="50" y="520" width="800" height="60" fill="none" stroke="#000000" stroke-width="2"/>
<text x="450" y="545" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">During phase changes (plateaus), temperature remains constant</text>
<text x="450" y="565" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Energy goes into breaking intermolecular bonds, not increasing kinetic energy</text>
</g>
</svg>`;

static pvDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
P-V Diagram - Isothermal Process
</metadata>
<g fill="none" stroke="#000000">
<!-- Axes -->
<line x1="100" y1="500" x2="700" y2="500" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<line x1="100" y1="500" x2="100" y2="100" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Axis labels -->
<text x="710" y="505" font-family="Arial" font-size="16" fill="#000000">V</text>
<text x="90" y="90" font-family="Arial" font-size="16" fill="#000000">P</text>

<!-- Isothermal curve (hyperbola PV = constant) -->
<path d="M 150 400 Q 250 250 350 180 Q 450 140 600 110" stroke="#000000" stroke-width="3" fill="none"/>

<!-- Initial state point A -->
<circle cx="200" cy="350" r="5" fill="#000000"/>
<text x="185" y="340" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">A</text>
<text x="170" y="370" font-family="Arial" font-size="12" fill="#000000">(P₁, V₁)</text>

<!-- Final state point B -->
<circle cx="500" cy="150" r="5" fill="#000000"/>
<text x="485" y="140" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">B</text>
<text x="470" y="170" font-family="Arial" font-size="12" fill="#000000">(P₂, V₂)</text>

<!-- Shaded area under curve (work done) -->
<path d="M 200 350 Q 250 250 350 180 Q 400 155 500 150 L 500 500 L 200 500 Z" fill="#CCCCCC" opacity="0.3" stroke="none"/>

<!-- Work annotation -->
<text x="350" y="380" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">W = ∫PdV</text>
<text x="350" y="400" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">(Area under curve)</text>

<!-- Vertical dashed lines to axes -->
<line x1="200" y1="350" x2="200" y2="500" stroke="#666666" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="500" y1="150" x2="500" y2="500" stroke="#666666" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="200" y1="350" x2="100" y2="350" stroke="#666666" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="500" y1="150" x2="100" y2="150" stroke="#666666" stroke-width="1" stroke-dasharray="3,3"/>

<!-- Axis markings -->
<text x="200" y="520" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">V₁</text>
<text x="500" y="520" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">V₂</text>
<text x="75" y="355" font-family="Arial" font-size="12" fill="#000000">P₁</text>
<text x="75" y="155" font-family="Arial" font-size="12" fill="#000000">P₂</text>

<!-- Temperature label on curve -->
<text x="400" y="120" font-family="Arial" font-size="13" fill="#000000" font-style="italic">T = constant</text>

<!-- Arrow showing direction of process -->
<path d="M 300 270 L 320 250" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">P-V Diagram - Isothermal Expansion</text>

<!-- Equation box -->
<rect x="50" y="50" width="250" height="80" fill="none" stroke="#000000" stroke-width="2"/>
<text x="175" y="75" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Isothermal Process</text>
<text x="175" y="95" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">PV = nRT = constant</text>
<text x="175" y="115" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">W = nRT ln(V₂/V₁)</text>
</g>
</svg>`;

// ===== THERMODYNAMICS APPARATUS =====

static conductionBarApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC

 "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Heat Conduction Bar Apparatus
</metadata>
<g fill="none" stroke="#000000">
<!-- Metal bar -->
<rect x="150" y="250" width="600" height="60" fill="#DDDDDD" stroke="#000000" stroke-width="3"/>

<!-- Hot end (heat source) -->
<rect x="100" y="220" width="50" height="120" fill="#CCCCCC" stroke="#000000" stroke-width="3"/>
<text x="125" y="360" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Burner</text>

<!-- Flame illustration -->
<path d="M 110 220 Q 115 200 120 220 Q 125 195 130 220 Q 135 200 140 220" stroke="#666666" stroke-width="2" fill="none"/>

<!-- Cold end (heat sink) -->
<rect x="750" y="220" width="50" height="120" fill="#CCCCCC" stroke="#000000" stroke-width="3"/>
<text x="775" y="360" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Ice bath</text>

<!-- Ice cubes illustration -->
<rect x="760" y="240" width="15" height="15" fill="none" stroke="#000000" stroke-width="1"/>
<rect x="777" y="240" width="15" height="15" fill="none" stroke="#000000" stroke-width="1"/>
<rect x="760" y="257" width="15" height="15" fill="none" stroke="#000000" stroke-width="1"/>
<rect x="777" y="257" width="15" height="15" fill="none" stroke="#000000" stroke-width="1"/>

<!-- Thermometers along the bar -->
<rect x="200" y="200" width="10" height="40" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="205" cy="245" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<text x="205" y="190" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">T₁</text>
<text x="205" y="270" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">100°C</text>

<rect x="350" y="200" width="10" height="40" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="355" cy="245" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<text x="355" y="190" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">T₂</text>
<text x="355" y="270" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">75°C</text>

<rect x="500" y="200" width="10" height="40" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="505" cy="245" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<text x="505" y="190" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">T₃</text>
<text x="505" y="270" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">50°C</text>

<rect x="650" y="200" width="10" height="40" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="655" cy="245" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<text x="655" y="190" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">T₄</text>
<text x="655" y="270" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">25°C</text>

<!-- Heat flow arrow -->
<line x1="200" y1="320" x2="650" y2="320" stroke="#000000" stroke-width="3" marker-end="url(#arrowhead)"/>
<text x="425" y="340" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Heat Flow (Q)</text>

<!-- Temperature gradient visualization -->
<line x1="205" y1="400" x2="205" y2="450" stroke="#000000" stroke-width="2"/>
<line x1="355" y1="400" x2="355" y2="430" stroke="#000000" stroke-width="2"/>
<line x1="505" y1="400" x2="505" y2="410" stroke="#000000" stroke-width="2"/>
<line x1="655" y1="400" x2="655" y2="390" stroke="#000000" stroke-width="2"/>
<path d="M 205 450 L 355 430 L 505 410 L 655 390" stroke="#666666" stroke-width="2" stroke-dasharray="3,3"/>
<text x="425" y="470" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Temperature Gradient (dT/dx)</text>

<!-- Support stands -->
<rect x="140" y="310" width="10" height="80" fill="#666666" stroke="#000000" stroke-width="1"/>
<rect x="135" y="385" width="20" height="10" fill="#666666" stroke="#000000" stroke-width="1"/>
<rect x="740" y="310" width="10" height="80" fill="#666666" stroke="#000000" stroke-width="1"/>
<rect x="735" y="385" width="20" height="10" fill="#666666" stroke="#000000" stroke-width="1"/>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Heat Conduction Bar Apparatus</text>

<!-- Equation box -->
<rect x="50" y="500" width="800" height="90" fill="none" stroke="#000000" stroke-width="2"/>
<text x="450" y="525" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Fourier's Law of Heat Conduction</text>
<text x="450" y="550" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Q/t = -kA(dT/dx)</text>
<text x="450" y="570" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">k = thermal conductivity, A = cross-sectional area, dT/dx = temperature gradient</text>
<text x="450" y="585" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Heat flows from high to low temperature</text>
</g>
</svg>`;

static calorimeterApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="800" viewBox="0 0 700 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Calorimeter Apparatus
</metadata>
<g fill="none" stroke="#000000">
<!-- Outer insulating container -->
<path d="M 150 300 L 150 600 Q 150 620 170 620 L 530 620 Q 550 620 550 600 L 550 300 Q 550 280 530 280 L 170 280 Q 150 280 150 300" stroke="#000000" stroke-width="3" fill="none"/>

<!-- Insulation layer indication -->
<path d="M 170 290 L 170 610 Q 170 620 180 620 L 520 620 Q 530 620 530 610 L 530 290 Q 530 280 520 280 L 180 280 Q 170 280 170 290" stroke="#666666" stroke-width="2" stroke-dasharray="5,5" fill="none"/>

<!-- Inner metal container -->
<path d="M 200 320 L 200 580 Q 200 590 210 590 L 490 590 Q 500 590 500 580 L 500 320 Q 500 310 490 310 L 210 310 Q 200 310 200 320" stroke="#000000" stroke-width="3" fill="none"/>

<!-- Water inside -->
<rect x="210" y="400" width="280" height="180" fill="#CCCCCC" opacity="0.3" stroke="none"/>
<text x="350" y="500" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Water</text>
<text x="350" y="520" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">m = 500g</text>
<text x="350" y="540" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">T₁ = 20°C</text>

<!-- Hot metal object -->
<rect x="300" y="450" width="100" height="60" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<text x="350" y="475" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Metal</text>
<text x="350" y="490" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">m = 100g</text>
<text x="350" y="503" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">T₂ = 100°C</text>

<!-- Lid -->
<ellipse cx="350" cy="300" rx="180" ry="30" fill="#DDDDDD" stroke="#000000" stroke-width="3"/>
<line x1="170" y1="300" x2="530" y2="300" stroke="#000000" stroke-width="3"/>

<!-- Thermometer through lid -->
<rect x="345" y="200" width="10" height="200" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="350" cy="405" r="12" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="350" y1="350" x2="350" y2="395" stroke="#FF0000" stroke-width="3"/>
<text x="370" y="360" font-family="Arial" font-size="12" fill="#000000">T_final</text>

<!-- Temperature scale on thermometer -->
<line x1="342" y1="320" x2="348" y2="320" stroke="#000000" stroke-width="1"/>
<text x="335" y="325" font-family="Arial" font-size="9" fill="#000000">100</text>
<line x1="342" y1="350" x2="348" y2="350" stroke="#000000" stroke-width="1"/>
<text x="335" y="355" font-family="Arial" font-size="9" fill="#000000">50</text>
<line x1="342" y1="380" x2="348" y2="380" stroke="#000000" stroke-width="1"/>
<text x="335" y="385" font-family="Arial" font-size="9" fill="#000000">0</text>

<!-- Stirrer -->
<line x1="250" y1="250" x2="250" y2="520" stroke="#000000" stroke-width="3"/>
<rect x="230" y="510" width="40" height="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="250" cy="240" r="15" fill="none" stroke="#000000" stroke-width="2"/>
<text x="250" y="235" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">⟲</text>
<text x="220" y="250" font-family="Arial" font-size="11" fill="#000000">Stirrer</text>

<!-- Insulation label -->
<line x1="560" y1="450" x2="170" y2="450" stroke="#666666" stroke-width="1" stroke-dasharray="3,3"/>
<text x="580" y="455" font-family="Arial" font-size="11" fill="#666666">Insulation</text>

<!-- Air gap -->
<line x1="560" y1="380" x2="200" y2="380" stroke="#666666" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="560" y1="360" x2="530" y2="360" stroke="#666666" stroke-width="1"/>
<line x1="560" y1="380" x2="530" y2="380" stroke="#666666" stroke-width="1"/>
<text x="575" y="373" font-family="Arial" font-size="10" fill="#666666">Air gap</text>

<!-- Title -->
<text x="350" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Calorimeter</text>

<!-- Principle box -->
<rect x="50" y="650" width="600" height="140" fill="none" stroke="#000000" stroke-width="2"/>
<text x="350" y="675" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Principle of Heat Exchange</text>
<text x="350" y="700" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Heat lost = Heat gained (in isolated system)</text>
<text x="350" y="725" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">m_metal × c_metal × (T₂ - T_f) = m_water × c_water × (T_f - T₁)</text>
<text x="350" y="750" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Used to determine specific heat capacity of metals</text>
<text x="350" y="770" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Insulation minimizes heat exchange with surroundings</text>
</g>
</svg>`;

// ===== ELECTRICITY & MAGNETISM =====

static electricFieldLinesSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Electric Field Lines - Opposite Charges
</metadata>
<g fill="none" stroke="#000000">
<!-- Positive charge (left) -->
<circle cx="250" cy="300" r="40" fill="none" stroke="#000000" stroke-width="3"/>
<text x="250" y="310" font-family="Arial" font-size="30" fill="#000000" text-anchor="middle" font-weight="bold">+</text>
<text x="250" y="370" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">+Q</text>

<!-- Negative charge (right) -->
<circle cx="550" cy="300" r="40" fill="none" stroke="#000000" stroke-width="3"/>
<text x="550" y="315" font-family="Arial" font-size="35" fill="#000000" text-anchor="middle" font-weight="bold">−</text>
<text x="550" y="370" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">−Q</text>

<!-- Field lines from + to - (curved paths) -->
<!-- Top lines -->
<path d="M 290 300 Q 400 200 510 300" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<path d="M 285 280 Q 400 150 515 280" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<path d="M 280 260 Q 400 100 520 260" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Middle line (straight) -->
<line x1="290" y1="300" x2="510" y2="300" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Bottom lines -->
<path d="M 290 300 Q 400 400 510 300" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<path d="M 285 320 Q 400 450 515 320" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<path d="M 280 340 Q 400 500 520 340" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Upper diagonal lines -->
<path d="M 270 270 Q 350 180 480 260" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<path d="M 260 250 Q 330 140 460 240" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Lower diagonal lines -->
<path d="M 270 330 Q 350 420 480 340" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<path d="M 260 350 Q 330 460 460 360" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Test point in field -->
<circle cx="400" cy="300" r="3" fill="#000000"/>
<text x="400" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">E</text>

<!-- Field vector at test point -->
<line x1="400" y1="300" x2="440" y2="300" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead-gray)"/>
<text x="445" y="305" font-family="Arial" font-size="11" fill="#666666">Field direction</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrowhead-gray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#666666"/>
  </marker>
</defs>

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Electric Field Lines</text>

<!-- Properties box -->
<rect x="50" y="450" width="700" height="120" fill="none" stroke="#000000" stroke-width="2"/>
<text x="400" y="475" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Properties of Electric Field Lines:</text>
<text x="400" y="500" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">• Lines originate on positive charges and terminate on negative charges</text>
<text x="400" y="520" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">• Field direction is tangent to field lines</text>
<text x="400" y="540" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">• Lines never cross each other</text>
<text x="400" y="560" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">• Density of lines indicates field strength (E = F/q)</text>
</g>
</svg>`;

static circuitDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Simple Electric Circuit
</metadata>
<g fill="none" stroke="#000000">
<!-- Battery (left side) -->
<line x1="150" y1="250" x2="150" y2="350" stroke="#000000" stroke-width="3"/>
<!-- Positive terminal (longer line) -->
<line x1="130" y1="250" x2="170" y2="250" stroke="#000000" stroke-width="4"/>
<!-- Negative terminal (shorter line) -->
<line x1="140" y1="350" x2="160" y2="350" stroke="#000000" stroke-width="4"/>
<text x="100" y="305" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">12V</text>
<text x="180" y="260" font-family="Arial" font-size="12" fill="#000000">+</text>
<text x="180" y="355" font-family="Arial" font-size="14" fill="#000000">−</text>

<!-- Connecting wires -->
<line x1="150" y1="250" x2="400" y2="250" stroke="#000000" stroke-width="3"/>
<line x1="150" y1="350" x2="400" y2="350" stroke="#000000" stroke-width="3"/>

<!-- Resistor (top right) -->
<path d="M 400 250 L 420 270 L 440 230 L 460 270 L 480 230 L 500 270 L 520 230 L 540 270 L 560 250" stroke="#000000" stroke-width="3" fill="none"/>
<text x="480" y="220" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">R = 100Ω</text>

<!-- Connecting wire -->
<line x1="560" y1="250" x2="650" y2="250" stroke="#000000" stroke-width="3"/>

<!-- Switch -->
<line x1="650" y1="250" x2="650" y2="280" stroke="#000000" stroke-width="3"/>
<circle cx="650" cy="280" r="5" fill="#000000"/>
<line x1="650" y1="280" x2="680" y2="260" stroke="#000000" stroke-width="3"/>
<circle cx="680" cy="260" r="5" fill="#000000"/>
<line x1="680" y1="260" x2="680" y2="250" stroke="#000000" stroke-width="3"/>
<text x="665" y="240" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">S</text>
<text x="665" y="310" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">closed</text>

<!-- Connecting wire -->
<line x1="680" y1="250" x2="720" y2="250" stroke="#000000" stroke-width="3"/>
<line x1="720" y1="250" x2="720" y2="300" stroke="#000000" stroke-width="3"/>

<!-- Ammeter -->
<circle cx="720" cy="325" r="25" fill="none" stroke="#000000" stroke-width="3"/>
<text x="720" y="333" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">A</text>
<text x="720" y="380" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">I = 0.12A</text>

<!-- Connecting wire back -->
<line x1="720" y1="350" x2="720" y2="400" stroke="#000000" stroke-width="3"/>
<line x1="720" y1="400" x2="400" y2="400" stroke="#000000" stroke-width="3"/>

<!-- Lamp/bulb -->
<circle cx="400" cy="375" r="25" fill="none" stroke="#000000" stroke-width="3"/>
<line x1="385" y1="360" x2="415" y2="390" stroke="#000000" stroke-width="2"/>
<line x1="415" y1="360" x2="385" y2="390" stroke="#000000" stroke-width="2"/>
<circle cx="400" cy="375" r="15" fill="none" stroke="#000000" stroke-width="2"/>
<text x="400" y="435" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Lamp</text>

<!-- Current direction arrows -->
<path d="M 300 240 L 280 240" stroke="#666666" stroke-width="2" marker-start="url(#arrowhead-left)"/>
<text x="290" y="230" font-family="Arial" font-size="11" fill="#666666">I</text>

<path d="M 300 360 L 320 360" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="310" y="380" font-family="Arial" font-size="11" fill="#666666">I</text>

<!-- Voltage markers -->
<line x1="420" y1="280" x2="540" y2="280" stroke="#666666" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="420" y1="275" x2="420" y2="285" stroke="#666666" stroke-width="2"/>
<line x1="540" y1="275" x2="540" y2="285" stroke="#666666" stroke-width="2"/>
<text x="480" y="300" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">V_R = IR</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#666666"/>
  </marker>
  <marker id="arrowhead-left" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
    <polygon points="10 0, 0 3, 10 6" fill="#666666"/>
  </marker>
</defs>

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Simple Electric Circuit</text>

<!-- Equations box -->
<rect x="50" y="480" width="700" height="100" fill="none" stroke="#000000" stroke-width="2"/>
<text x="400" y="505" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Circuit Analysis</text>
<text x="400" y="530" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Ohm's Law: V = IR → I = V/R = 12V/100Ω = 0.12A</text>
<text x="400" y="550" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Power: P = VI = 12V × 0.12A = 1.44W</text>
<text x="400" y="570" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Conventional current flows from + to − (opposite to electron flow)</text>
</g>
</svg>`;

// ===== OPTICS =====

static convexLensRayDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Convex Lens Ray Diagram
</metadata>
<g fill="none" stroke="#000000">
<!-- Principal axis -->
<line x1="50" y1="300" x2="950" y2="300" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="960" y="305" font-family="Arial" font-size="12" fill="#000000">Principal Axis</text>

<!-- Convex lens -->
<path d="M 450 150 Q 470 300 450 450" stroke="#000000" stroke-width="4" fill="none"/>
<path d="M 550 150 Q 530 300 550 450" stroke="#000000" stroke-width="4" fill="none"/>
<line x1="450" y1="150" x2="550" y2="150" stroke="#000000" stroke-width="2"/>
<line x1="450" y1="450" x2="550" y2="450" stroke="#000000" stroke-width="2"/>

<!-- Optical center -->
<circle cx="500" cy="300" r="3" fill="#000000"/>
<text x="500" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">O</text>

<!-- Focal points -->
<circle cx="400" cy="300" r="4" fill="#000000"/>
<text x="400" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">F</text>
<circle cx="600" cy="300" r="4" fill="#000000"/>
<text x="600" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">F'</text>

<!-- Focal length markings -->
<line x1="400" y1="295" x2="400" y2="305" stroke="#666666" stroke-width="2"/>
<line x1="500" y1="295" x2="500" y2="305" stroke="#666666" stroke-width="2"/>
<line x1="450" y1="310" x2="450" y2="315" stroke="#666666" stroke-width="1"/>
<text x="450" y="350" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">f</text>

<!-- Object (arrow) -->
<line x1="250" y1="300" x2="250" y2="200" stroke="#000000" stroke-width="3" marker-end="url(#arrowhead-up)"/>
<text x="230" y="250" font-family="Arial" font-size="14" fill="#000000">Object</text>
<text x="230" y="320" font-family="Arial" font-size="12" fill="#666666">h</text>

<!-- Ray 1: Parallel to axis, through focal point -->
<line x1="250" y1="200" x2="500" y2="200" stroke="#FF0000" stroke-width="2"/>
<line x1="500" y1="200" x2="600" y2="300" stroke="#FF0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<text x="350" y="190" font-family="Arial" font-size="11" fill="#FF0000">Ray 1</text>

<!-- Ray 2: Through optical center (straight) -->
<line x1="250" y1="200" x2="750" y2="400" stroke="#0000FF" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<text x="550" y="280" font-family="Arial" font-size="11" fill="#0000FF">Ray 2</text>

<!-- Ray 3: Through focal point, parallel to axis -->
<line x1="250" y1="200" x2="400" y2="300" stroke="#00AA00" stroke-width="2"/>
<line x1="500" y1="320" x2="750" y2="320" stroke="#00AA00" stroke-width="2" marker-end="url(#arrowhead-green)"/>
<text x="650" y="310" font-family="Arial" font-size="11" fill="#00AA00">Ray 3</text>

<!-- Image (arrow) - inverted and real -->
<line x1="750" y1="320" x2="750" y2="400" stroke="#000000" stroke-width="3" marker-start="url(#arrowhead-down)"/>
<text x="770" y="360" font-family="Arial" font-size="14" fill="#000000">Image</text>
<text x="770" y="340" font-family="Arial" font-size="12" fill="#666666">h'</text>

<!-- Distance markings -->
<line x1="250" y1="470" x2="500" y2="470" stroke="#666666" stroke-width="2"/>
<line x1="250" y1="465" x2="250" y2="475" stroke="#666666" stroke-width="2"/>
<line x1="500" y1="465" x2="500" y2="475" stroke="#666666" stroke-width="2"/>
<text x="375" y="490" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">u (object distance)</text>

<line x1="500" y1="490" x2="750" y2="490" stroke="#666666" stroke-width="2"/>
<line x1="500" y1="485" x2="500" y2="495" stroke="#666666" stroke-width="2"/>
<line x1="750" y1="485" x2="750" y2="495" stroke="#666666" stroke-width="2"/>
<text x="625" y="510" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">v (image distance)</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrowhead-up" markerWidth="10" markerHeight="10" refX="3" refY="0" orient="auto">
    <polygon points="0 0, 3 10, 6 0" fill="#000000"/>
  </marker>
  <marker id="arrowhead-down" markerWidth="10" markerHeight="10" refX="3" refY="10" orient="auto">
    <polygon points="0 10, 3 0, 6 10" fill="#000000"/>
  </marker>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#FF0000"/>
  </marker>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#0000FF"/>
  </marker>
  <marker id="arrowhead-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#00AA00"/>
  </marker>
</defs>

<!-- Title -->
<text x="500" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Convex Lens Ray Diagram</text>

<!-- Lens equation box -->
<rect x="50" y="50" width="250" height="90" fill="none" stroke="#000000" stroke-width="2"/>
<text x="175" y="75" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Lens Equation</text>
<text x="175" y="95" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">1/f = 1/u + 1/v</text>
<text x="175" y="115" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Magnification:</text>
<text x="175" y="132" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">m = v/u = h'/h</text>
</g>
</svg>`;

// ===== MODERN PHYSICS =====

static photoelectricEffectSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Photoelectric Effect
</metadata>
<g fill="none" stroke="#000000">
<!-- Metal surface -->
<rect x="400" y="200" width="300" height="250" fill="#DDDDDD" stroke="#000000" stroke-width="3"/>
<text x="550" y="470" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">Metal Surface</text>

<!-- Incoming photons (wavy arrows) -->
<path d="M 100 250 Q 150 240 200 250 Q 250 260 300 250 Q 350 240 400 250" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="150" y="230" font-family="Arial" font-size="12" fill="#000000">hf</text>
<text x="250" y="230" font-family="Arial" font-size="11" fill="#666666">photon</text>

<path d="M 100 300 Q 150 290 200 300 Q 250 310 300 300 Q 350 290 400 300" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="150" y="280" font-family="Arial" font-size="12" fill="#000000">hf</text>

<path d="M 100 350 Q 150 340 200 350 Q 250 360 300 350 Q 350 340 400 350" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="150" y="330" font-family="Arial" font-size="12" fill="#000000">hf</text>

<!-- Electrons in metal (before ejection) -->
<circle cx="450" cy="280" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<text x="450" y="285" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">e⁻</text>

<circle cx="500" cy="320" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<text x="500" y="325" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">e⁻</text>

<circle cx="550" cy="290" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<text x="550" y="295" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">e⁻</text>

<circle cx="600" cy="330" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<text x="600" y="335" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">e⁻</text>

<circle cx="650" cy="300" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<text x="650" y="305" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">e⁻</text>

<!-- Ejected electrons -->
<circle cx="420" cy="140" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<text x="420" y="145" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">e⁻</text>
<line x1="425" y1="200" x2="425" y2="150" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="440" y="175" font-family="Arial" font-size="11" fill="#000000">KE</text>

<circle cx="520" cy="120" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<text x="520" y="125" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">e⁻</text>
<line x1="505" y1="200" x2="515" y2="135" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<circle cx="620" cy="130" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<text x="620" y="135" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">e⁻</text>
<line x1="605" y1="200" x2="615" y2="145" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Work function illustration -->
<line x1="350" y1="200" x2="350" y2="280" stroke="#666666" stroke-width="2" stroke-dasharray="5,5"/>
<line x1="345" y1="200" x2="355" y2="200" stroke="#666666" stroke-width="2"/>
<line x1="345" y1="280" x2="355" y2="280" stroke="#666666" stroke-width="2"/>
<text x="330" y="245" font-family="Arial" font-size="11" fill="#666666">φ (work</text>
<text x="330" y="260" font-family="Arial" font-size="11" fill="#666666">function)</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Photoelectric Effect</text>

<!-- Energy diagram -->
<rect x="50" y="490" width="700" height="100" fill="none" stroke="#000000" stroke-width="2"/>
<text x="400" y="515" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Einstein's Photoelectric Equation</text>
<text x="400" y="540" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">KE_max = hf - φ</text>
<text x="400" y="565" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Energy of photon = Work function + Kinetic energy of ejected electron</text>
<text x="400" y="583" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Below threshold frequency (f₀ = φ/h), no electrons ejected regardless of intensity</text>
</g>
</svg>`;

// ===== NUCLEAR PHYSICS =====

static alphaDecayDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Alpha Decay Process
</metadata>
<g fill="none" stroke="#000000">
<!-- Parent nucleus (Radium-226) -->
<circle cx="250" cy="300" r="80" fill="none" stroke="#000000" stroke-width="3"/>

<!-- Protons (filled circles) -->
<circle cx="220" cy="270" r="8" fill="#000000"/>
<circle cx="250" cy="270" r="8" fill="#000000"/>
<circle cx="280" cy="270" r="8" fill="#000000"/>
<circle cx="220" cy="300" r="8" fill="#000000"/>
<circle cx="250" cy="300" r="8" fill="#000000"/>
<circle cx="280" cy="300" r="8" fill="#000000"/>
<circle cx="220" cy="330" r="8" fill="#000000"/>
<circle cx="250" cy="330" r="8" fill="#000000"/>
<circle cx="280" cy="330" r="8" fill="#000000"/>

<!-- Neutrons (empty circles) -->
<circle cx="235" cy="285" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="265" cy="285" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="235" cy="315" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="265" cy="315" r="8" fill="none" stroke="#000000" stroke-width="2"/>

<!-- Parent nucleus label -->
<text x="250" y="405" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">²²⁶Ra</text>
<text x="250" y="425" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Parent nucleus</text>
<text x="250" y="440" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">88 protons, 138 neutrons</text>

<!-- Decay arrow -->
<line x1="350" y1="300" x2="500" y2="300" stroke="#000000" stroke-width="3" marker-end="url(#arrowhead)"/>
<text x="425" y="290" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">Decay</text>

<!-- Alpha particle -->
<circle cx="425" cy="200" r="40" fill="none" stroke="#000000" stroke-width="3"/>
<circle cx="415" cy="190" r="8" fill="#000000"/>
<circle cx="435" cy="190" r="8" fill="#000000"/>
<circle cx="415" cy="210" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="435" cy="210" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<text x="425" y="265" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">⁴He (α)</text>
<text x="425" y="283" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">2 protons, 2 neutrons</text>

<!-- Daughter nucleus (Radon-222) -->
<circle cx="650" cy="300" r="70" fill="none" stroke="#000000" stroke-width="3"/>

<!-- Protons in daughter -->
<circle cx="625" cy="275" r="8" fill="#000000"/>
<circle cx="650" cy="275" r="8" fill="#000000"/>
<circle cx="675" cy="275" r="8" fill="#000000"/>
<circle cx="625" cy="300" r="8" fill="#000000"/>
<circle cx="650" cy="300" r="8" fill="#000000"/>
<circle cx="675" cy="300" r="8" fill="#000000"/>
<circle cx="625" cy="325" r="8" fill="#000000"/>
<circle cx="650" cy="325" r="8" fill="#000000"/>

<!-- Neutrons in daughter -->
<circle cx="638" cy="288" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="663" cy="288" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="638" cy="313" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="663" cy="313" r="8" fill="none" stroke="#000000" stroke-width="2"/>

<!-- Daughter nucleus label -->
<text x="650" y="395" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">²²²Rn</text>
<text x="650" y="415" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Daughter nucleus</text>
<text x="650" y="430" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">86 protons, 136 neutrons</text>

<!-- Energy release -->
<text x="550" y="380" font-family="Arial" font-size="13" fill="#000000">+ Energy</text>
<text x="550" y="398" font-family="Arial" font-size="11" fill="#666666">(Q-value)</text>

<!-- Legend -->
<circle cx="100" cy="480" r="8" fill="#000000"/>
<text x="120" y="485" font-family="Arial" font-size="12" fill="#000000">= Proton</text>

<circle cx="100" cy="510" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<text x="120" y="515" font-family="Arial" font-size="12" fill="#000000">= Neutron</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Alpha Decay</text>

<!-- Equation box -->
<rect x="50" y="530" width="800" height="60" fill="none" stroke="#000000" stroke-width="2"/>
<text x="450" y="555" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He + Energy</text>
<text x="450" y="575" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Mass number decreases by 4, Atomic number decreases by 2</text>
</g>
</svg>`;

static halfLifeGraphSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Radioactive Half-Life Decay Curve
</metadata>
<g fill="none" stroke="#000000">
<!-- Axes -->
<line x1="100" y1="500" x2="800" y2="500" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<line x1="100" y1="500" x2="100" y2="50" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Axis labels -->
<text x="810" y="505" font-family="Arial" font-size="14" fill="#000000">Time (t)</text>
<text x="40" y="45" font-family="Arial" font-size="14" fill="#000000">N (atoms)</text>

<!-- Time markings (in half-lives) -->
<text x="100" y="525" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">0</text>
<line x1="200" y1="495" x2="200" y2="505" stroke="#000000" stroke-width="2"/>
<text x="200" y="525" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">T₁/₂</text>
<line x1="300" y1="495" x2="300" y2="505" stroke="#000000" stroke-width="2"/>
<text x="300" y="525" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2T₁/₂</text>
<line x1="400" y1="495" x2="400" y2="505" stroke="#000000" stroke-width="2"/>
<text x="400" y="525" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">3T₁/₂</text>
<line x1="500" y1="495" x2="500" y2="505" stroke="#000000" stroke-width="2"/>
<text x="500" y="525" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">4T₁/₂</text>
<line x1="600" y1="495" x2="600" y2="505" stroke="#000000" stroke-width="2"/>
<text x="600" y="525" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">5T₁/₂</text>

<!-- Amount markings -->
<line x1="95" y1="150" x2="105" y2="150" stroke="#000000" stroke-width="2"/>
<text x="75" y="155" font-family="Arial" font-size="12" fill="#000000">N₀</text>
<line x1="95" y1="237" x2="105" y2="237" stroke="#000000" stroke-width="2"/>
<text x="60" y="242" font-family="Arial" font-size="12" fill="#000000">N₀/2</text>
<line x1="95" y1="324" x2="105" y2="324" stroke="#000000" stroke-width="2"/>
<text x="60" y="329" font-family="Arial" font-size="12" fill="#000000">N₀/4</text>
<line x1="95" y1="411" x2="105" y2="411" stroke="#000000" stroke-width="2"/>
<text x="60" y="416" font-family="Arial" font-size="12" fill="#000000">N₀/8</text>

<!-- Exponential decay curve -->
<path d="M 100 150 Q 150 180 200 237 Q 250 280 300 324 Q 350 360 400 411 Q 450 445 500 456 Q 550 470 600 480 Q 650 487 700 492" stroke="#000000" stroke-width="3" fill="none"/>

<!-- Vertical dashed lines showing half-lives -->
<line x1="200" y1="237" x2="200" y2="500" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="5,5"/>
<line x1="300" y1="324" x2="300" y2="500" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="5,5"/>
<line x1="400" y1="411" x2="400" y2="500" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="5,5"/>

<!-- Horizontal dashed lines showing amounts -->
<line x1="100" y1="237" x2="200" y2="237" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="5,5"/>
<line x1="100" y1="324" x2="300" y2="324" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="5,5"/>
<line x1="100" y1="411" x2="400" y2="411" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="5,5"/>

<!-- Key points on curve -->
<circle cx="100" cy="150" r="4" fill="#000000"/>
<circle cx="200" cy="237" r="4" fill="#000000"/>
<circle cx="300" cy="324" r="4" fill="#000000"/>
<circle cx="400" cy="411" r="4" fill="#000000"/>

<!-- Percentage labels -->
<text x="150" y="210" font-family="Arial" font-size="11" fill="#666666">100%</text>
<text x="250" y="295" font-family="Arial" font-size="11" fill="#666666">50%</text>
<text x="350" y="380" font-family="Arial" font-size="11" fill="#666666">25%</text>
<text x="450" y="440" font-family="Arial" font-size="11" fill="#666666">12.5%</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Radioactive Decay - Half-Life</text>

<!-- Equation box -->
<rect x="600" y="80" width="250" height="140" fill="none" stroke="#000000" stroke-width="2"/>
<text x="725" y="105" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Decay Equation</text>
<text x="725" y="130" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">N(t) = N₀e^(-λt)</text>
<text x="725" y="155" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">or</text>
<text x="725" y="180" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">N(t) = N₀(1/2)^(t/T₁/₂)</text>
<text x="725" y="205" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">λ = decay constant</text>
</g>
</svg>`;

// ===== STATES OF MATTER (Remaining) =====

static stateTransitionDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="700" viewBox="0 0 900 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>
State Transition Diagram - Phase Changes
</metadata>
<g fill="none" stroke="#000000">
<!-- Solid state (top) -->
<rect x="350" y="100" width="200" height="120" fill="none" stroke="#000000" stroke-width="3"/>
<text x="450" y="165" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">SOLID</text>
<circle cx="420" cy="140" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="450" cy="140" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="480" cy="140" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="420" cy="190" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="450" cy="190" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="480" cy="190" r="6" fill="none" stroke="#000000" stroke-width="2"/>

<!-- Liquid state (bottom left) -->
<rect x="100" y="450" width="200" height="120" fill="none" stroke="#000000" stroke-width="3"/>
<text x="200" y="515" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">LIQUID</text>
<circle cx="140" cy="490" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="170" cy="485" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="200" cy="495" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="230" cy="490" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="260" cy="485" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="155" cy="535" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="185" cy="540" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="215" cy="530" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="245" cy="540" r="6" fill="none" stroke="#000000" stroke-width="2"/>

<!-- Gas state (bottom right) -->
<rect x="600" y="450" width="200" height="120" fill="none" stroke="#000000" stroke-width="3"/>
<text x="700" y="515" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">GAS</text>
<circle cx="630" cy="480" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="720" cy="495" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="660" cy="540" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="750" cy="525" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="680" cy="490" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="770" cy="550" r="6" fill="none" stroke="#000000" stroke-width="2"/>

<!-- Melting/Freezing arrow -->
<line x1="350" y1="240" x2="250" y2="430" stroke="#000000" stroke-width="3" marker-end="url(#arrowhead)"/>
<line x1="270" y1="410" x2="370" y2="220" stroke="#000000" stroke-width="3" marker-end="url(#arrowhead)"/>
<text x="270" y="310" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">MELTING</text>
<text x="270" y="330" font-family="Arial" font-size="12" fill="#666666">(+ heat)</text>
<text x="330" y="360" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">FREEZING</text>
<text x="330" y="380" font-family="Arial" font-size="12" fill="#666666">(- heat)</text>

<!-- Vaporization/Condensation arrow -->
<line x1="300" y1="510" x2="600" y2="510" stroke="#000000" stroke-width="3" marker-end="url(#arrowhead)"/>
<line x1="600" y1="530" x2="300" y2="530" stroke="#000000" stroke-width="3" marker-end="url(#arrowhead)"/>
<text x="420" y="500" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">VAPORIZATION</text>
<text x="420" y="555" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">CONDENSATION</text>

<!-- Sublimation/Deposition arrow -->
<line x1="550" y1="200" x2="650" y2="430" stroke="#000000" stroke-width="3" marker-end="url(#arrowhead)"/>
<line x1="630" y1="410" x2="530" y2="220" stroke="#000000" stroke-width="3" marker-end="url(#arrowhead)"/>
<text x="600" y="290" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">SUBLIMATION</text>
<text x="600" y="310" font-family="Arial" font-size="12" fill="#666666">(+ heat)</text>
<text x="560" y="360" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">DEPOSITION</text>
<text x="560" y="380" font-family="Arial" font-size="12" fill="#666666">(- heat)</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="450" y="40" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">States of Matter - Phase Transitions</text>

<!-- Energy note -->
<rect x="50" y="620" width="800" height="60" fill="none" stroke="#000000" stroke-width="2"/>
<text x="450" y="645" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Transitions going up/right require energy input (endothermic)</text>
<text x="450" y="665" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Transitions going down/left release energy (exothermic)</text>
</g>
</svg>`;

static diffusionDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Diffusion Process in Gas
</metadata>
<g fill="none" stroke="#000000">
<!-- Container -->
<rect x="100" y="100" width="700" height="400" fill="none" stroke="#000000" stroke-width="3"/>

<!-- Time = 0 (Initial state with barrier) -->
<text x="450" y="80" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">t = 0 (Initial)</text>

<!-- Vertical barrier (removable) -->
<line x1="450" y1="100" x2="450" y2="300" stroke="#666666" stroke-width="3" stroke-dasharray="10,5"/>
<text x="455" y="200" font-family="Arial" font-size="11" fill="#666666">barrier</text>
<text x="455" y="215" font-family="Arial" font-size="11" fill="#666666">(removed)</text>

<!-- Left side - high concentration (more particles) -->
<circle cx="150" cy="130" r="7" fill="#000000"/>
<circle cx="180" cy="150" r="7" fill="#000000"/>
<circle cx="210" cy="140" r="7" fill="#000000"/>
<circle cx="240" cy="160" r="7" fill="#000000"/>
<circle cx="270" cy="135" r="7" fill="#000000"/>
<circle cx="300" cy="155" r="7" fill="#000000"/>
<circle cx="330" cy="145" r="7" fill="#000000"/>
<circle cx="360" cy="165" r="7" fill="#000000"/>
<circle cx="390" cy="140" r="7" fill="#000000"/>
<circle cx="420" cy="150" r="7" fill="#000000"/>

<circle cx="165" cy="190" r="7" fill="#000000"/>
<circle cx="195" cy="210" r="7" fill="#000000"/>
<circle cx="225" cy="200" r="7" fill="#000000"/>
<circle cx="255" cy="220" r="7" fill="#000000"/>
<circle cx="285" cy="195" r="7" fill="#000000"/>
<circle cx="315" cy="215" r="7" fill="#000000"/>
<circle cx="345" cy="205" r="7" fill="#000000"/>
<circle cx="375" cy="225" r="7" fill="#000000"/>
<circle cx="405" cy="200" r="7" fill="#000000"/>

<circle cx="140" cy="250" r="7" fill="#000000"/>
<circle cx="170" cy="270" r="7" fill="#000000"/>
<circle cx="200" cy="260" r="7" fill="#000000"/>
<circle cx="230" cy="280" r="7" fill="#000000"/>
<circle cx="260" cy="255" r="7" fill="#000000"/>
<circle cx="290" cy="275" r="7" fill="#000000"/>
<circle cx="320" cy="265" r="7" fill="#000000"/>
<circle cx="350" cy="285" r="7" fill="#000000"/>
<circle cx="380" cy="260" r="7" fill="#000000"/>
<circle cx="410" cy="270" r="7" fill="#000000"/>

<!-- Right side - low concentration (fewer particles) -->
<circle cx="520" cy="180" r="7" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="600" cy="200" r="7" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="680" cy="160" r="7" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="560" cy="240" r="7" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="640" cy="260" r="7" fill="none" stroke="#000000" stroke-width="2"/>

<!-- Concentration labels -->
<text x="275" y="320" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">High Concentration</text>
<text x="625" y="320" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Low Concentration</text>

<!-- Horizontal divider for time progression -->
<line x1="50" y1="350" x2="850" y2="350" stroke="#000000" stroke-width="2"/>

<!-- Time = later (After diffusion) -->
<text x="450" y="380" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">t = later (After Diffusion)</text>

<!-- Container for later time -->
<rect x="100" y="400" width="700" height="100" fill="none" stroke="#000000" stroke-width="3"/>

<!-- Uniformly distributed particles -->
<circle cx="130" cy="430" r="7" fill="#000000"/>
<circle cx="180" cy="450" r="7" fill="#000000"/>
<circle cx="230" cy="440" r="7" fill="#000000"/>
<circle cx="280" cy="460" r="7" fill="#000000"/>
<circle cx="330" cy="435" r="7" fill="#000000"/>
<circle cx="380" cy="455" r="7" fill="#000000"/>
<circle cx="430" cy="445" r="7" fill="#000000"/>
<circle cx="480" cy="465" r="7" fill="#000000"/>
<circle cx="530" cy="440" r="7" fill="#000000"/>
<circle cx="580" cy="450" r="7" fill="#000000"/>
<circle cx="630" cy="435" r="7" fill="#000000"/>
<circle cx="680" cy="460" r="7" fill="#000000"/>
<circle cx="730" cy="445" r="7" fill="#000000"/>
<circle cx="770" cy="455" r="7" fill="#000000"/>

<circle cx="155" cy="470" r="7" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="205" cy="480" r="7" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="255" cy="475" r="7" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="305" cy="485" r="7" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="355" cy="470" r="7" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="405" cy="480" r="7" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="455" cy="475" r="7" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="505" cy="485" r="7" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="555" cy="470" r="7" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="605" cy="480" r="7" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="655" cy="475" r="7" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="705" cy="485" r="7" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="755" cy="475" r="7" fill="none" stroke="#000000" stroke-width="2"/>

<text x="450" y="525" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Uniform Concentration</text>

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Diffusion Process</text>

<!-- Description box -->
<rect x="50" y="545" width="800" height="45" fill="none" stroke="#000000" stroke-width="2"/>
<text x="450" y="567" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Net movement of particles from high to low concentration</text>
<text x="450" y="585" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Continues until equilibrium (uniform distribution) is reached</text>
</g>
</svg>`;

static brownianMotionDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="800" viewBox="0 0 800 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Brownian Motion
</metadata>
<g fill="none" stroke="#000000">
<!-- Container -->
<rect x="100" y="100" width="600" height="600" fill="none" stroke="#000000" stroke-width="3"/>

<!-- Large particle (pollen grain or smoke particle) -->
<circle cx="400" cy="400" r="25" fill="none" stroke="#000000" stroke-width="3"/>
<text x="400" y="365" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Large particle</text>

<!-- Random zigzag path of large particle -->
<path d="M 400 400 L 420 380 L 410 360 L 430 340 L 450 350 L 460 330 L 480 345 L 490 325 L 510 340 L 520 360" stroke="#FF0000" stroke-width="2" stroke-dasharray="3,3" fill="none"/>
<text x="530" y="365" font-family="Arial" font-size="11" fill="#FF0000">Path</text>

<!-- Small particles (water/air molecules) - many scattered around -->
<circle cx="350" cy="350" r="5" fill="#000000"/>
<circle cx="450" cy="380" r="5" fill="#000000"/>
<circle cx="420" cy="450" r="5" fill="#000000"/>
<circle cx="380" cy="420" r="5" fill="#000000"/>
<circle cx="430" cy="370" r="5" fill="#000000"/>
<circle cx="370" cy="390" r="5" fill="#000000"/>
<circle cx="460" cy="410" r="5" fill="#000000"/>
<circle cx="390" cy="360" r="5" fill="#000000"/>
<circle cx="440" cy="430" r="5" fill="#000000"/>
<circle cx="360" cy="440" r="5" fill="#000000"/>

<circle cx="300" cy="300" r="5" fill="#000000"/>
<circle cx="500" cy="280" r="5" fill="#000000"/>
<circle cx="520" cy="480" r="5" fill="#000000"/>
<circle cx="280" cy="450" r="5" fill="#000000"/>
<circle cx="550" cy="350" r="5" fill="#000000"/>
<circle cx="250" cy="380" r="5" fill="#000000"/>
<circle cx="580" cy="420" r="5" fill="#000000"/>
<circle cx="320" cy="520" r="5" fill="#000000"/>
<circle cx="480" cy="540" r="5" fill="#000000"/>
<circle cx="350" cy="250" r="5" fill="#000000"/>

<circle cx="200" cy="200" r="5" fill="#000000"/>
<circle cx="600" cy="250" r="5" fill="#000000"/>
<circle cx="180" cy="500" r="5" fill="#000000"/>
<circle cx="650" cy="450" r="5" fill="#000000"/>
<circle cx="220" cy="350" r="5" fill="#000000"/>
<circle cx="620" cy="380" r="5" fill="#000000"/>
<circle cx="260" cy="580" r="5" fill="#000000"/>
<circle cx="540" cy="600" r="5" fill="#000000"/>
<circle cx="300" cy="180" r="5" fill="#000000"/>
<circle cx="520" cy="220" r="5" fill="#000000"/>

<circle cx="150" cy="300" r="5" fill="#000000"/>
<circle cx="670" cy="320" r="5" fill="#000000"/>
<circle cx="140" cy="420" r="5" fill="#000000"/>
<circle cx="660" cy="550" r="5" fill="#000000"/>

<!-- Motion arrows showing collisions -->
<line x1="355" y1="355" x2="380" y2="380" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead-gray)"/>
<line x1="445" y1="385" x2="420" y2="390" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead-gray)"/>
<line x1="415" y1="445" x2="405" y2="420" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead-gray)"/>
<line x1="385" y1="425" x2="395" y2="405" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead-gray)"/>

<!-- Enlarged view in corner -->
<rect x="520" y="120" width="160" height="160" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
<text x="600" y="145" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Collision Detail</text>

<!-- Large particle in detail -->
<circle cx="600" cy="200" r="20" fill="none" stroke="#000000" stroke-width="2"/>

<!-- Small particles colliding -->
<circle cx="570" cy="180" r="4" fill="#000000"/>
<circle cx="630" cy="195" r="4" fill="#000000"/>
<circle cx="590" cy="230" r="4" fill="#000000"/>
<circle cx="620" cy="220" r="4" fill="#000000"/>

<!-- Collision arrows -->
<line x1="574" y1="184" x2="585" y2="195" stroke="#666666" stroke-width="1.5" marker-end="url(#arrowhead-gray)"/>
<line x1="626" y1="199" x2="615" y2="205" stroke="#666666" stroke-width="1.5" marker-end="url(#arrowhead-gray)"/>
<line x1="594" y1="226" x2="598" y2="215" stroke="#666666" stroke-width="1.5" marker-end="url(#arrowhead-gray)"/>

<text x="600" y="265" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">Random collisions</text>
<text x="600" y="277" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">cause zigzag motion</text>

<defs>
  <marker id="arrowhead-gray" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#666666"/>
  </marker>
</defs>

<!-- Title -->
<text x="400" y="40" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Brownian Motion</text>

<!-- Description box -->
<rect x="50" y="720" width="700" height="70" fill="none" stroke="#000000" stroke-width="2"/>
<text x="400" y="745" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Evidence for Kinetic Theory</text>
<text x="400" y="765" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Random, erratic motion of large particles due to collisions with smaller, invisible molecules</text>
<text x="400" y="783" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Observed in pollen grains in water or smoke particles in air</text>
</g>
</svg>`;

static densityComparisonSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Density Comparison - Solid, Liquid, Gas
</metadata>
<g fill="none" stroke="#000000">
<!-- Solid container -->
<rect x="100" y="150" width="200" height="200" fill="none" stroke="#000000" stroke-width="3"/>
<text x="200" y="130" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">SOLID (Ice)</text>

<!-- Solid particles - regular arrangement, close together -->
<circle cx="130" cy="180" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="160" cy="180" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="190" cy="180" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="220" cy="180" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="250" cy="180" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="270" cy="180" r="8" fill="none" stroke="#000000" stroke-width="2"/>

<circle cx="130" cy="210" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="160" cy="210" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="190" cy="210" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="220" cy="210" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="250" cy="210" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="270" cy="210" r="8" fill="none" stroke="#000000" stroke-width="2"/>

<circle cx="130" cy="240" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="160" cy="240" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="190" cy="240" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="220" cy="240" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="250" cy="240" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="270" cy="240" r="8" fill="none" stroke="#000000" stroke-width="2"/>

<circle cx="130" cy="270" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="160" cy="270" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="190" cy="270" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="220" cy="270" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="250" cy="270" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="270" cy="270" r="8" fill="none" stroke="#000000" stroke-width="2"/>

<circle cx="130" cy="300" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="160" cy="300" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="190" cy="300" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="220" cy="300" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="250" cy="300" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="270" cy="300" r="8" fill="none" stroke="#000000" stroke-width="2"/>

<circle cx="130" cy="330" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="160" cy="330" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="190" cy="330" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="220" cy="330" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="250" cy="330" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="270" cy="330" r="8" fill="none" stroke="#000000" stroke-width="2"/>

<!-- Liquid container -->
<rect x="400" y="150" width="200" height="200" fill="none" stroke="#000000" stroke-width="3"/>
<text x="500" y="130" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">LIQUID (Water)</text>

<!-- Liquid particles - close but random -->
<circle cx="425" cy="185" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="455" cy="190" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="485" cy="180" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="515" cy="195" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="545" cy="185" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="575" cy="190" r="8" fill="none" stroke="#000000" stroke-width="2"/>

<circle cx="440" cy="215" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="470" cy="220" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="500" cy="210" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="530" cy="225" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="560" cy="215" r="8" fill="none" stroke="#000000" stroke-width="2"/>

<circle cx="425" cy="245" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="455" cy="250" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="485" cy="240" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="515" cy="255" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="545" cy="245" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="575" cy="250" r="8" fill="none" stroke="#000000" stroke-width="2"/>

<circle cx="440" cy="275" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="470" cy="280" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="500" cy="270" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="530" cy="285" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="560" cy="275" r="8" fill="none" stroke="#000000" stroke-width="2"/>

<circle cx="425" cy="305" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="455" cy="310" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="485" cy="300" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="515" cy="315" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="545" cy="305" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="575" cy="310" r="8" fill="none" stroke="#000000" stroke-width="2"/>

<circle cx="440" cy="335" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="470" cy="340" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="500" cy="330" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="530" cy="335" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="560" cy="325" r="8" fill="none" stroke="#000000" stroke-width="2"/>

<!-- Gas container -->
<rect x="700" y="150" width="200" height="200" fill="none" stroke="#000000" stroke-width="3"/>
<text x="800" y="130" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">GAS (Steam)</text>

<!-- Gas particles - widely spaced -->
<circle cx="730" cy="180" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="820" cy="200" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="870" cy="175" r="8" fill="none" stroke="#000000" stroke-width="2"/>

<circle cx="760" cy="235" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="850" cy="255" r="8" fill="none" stroke="#000000" stroke-width="2"/>

<circle cx="720" cy="290" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="800" cy="310" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="880" cy="285" r="8" fill="none" stroke="#000000" stroke-width="2"/>

<circle cx="750" cy="330" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="830" cy="325" r="8" fill="none" stroke="#000000" stroke-width="2"/>

<!-- Density values -->
<text x="200" y="380" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">ρ ≈ 920 kg/m³</text>
<text x="200" y="400" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">(for ice at 0°C)</text>

<text x="500" y="380" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">ρ ≈ 1000 kg/m³</text>
<text x="500" y="400" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">(for water at 4°C)</text>

<text x="800" y="380" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">ρ ≈ 0.6 kg/m³</text>
<text x="800" y="400" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">(for steam at 100°C)</text>

<!-- Comparison arrows -->
<text x="200" y="440" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Same mass</text>
<text x="500" y="440" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Same mass</text>
<text x="800" y="440" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Same mass</text>

<text x="200" y="460" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Different volume</text>
<text x="500" y="460" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Different volume</text>
<text x="800" y="460" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Different volume</text>

<!-- Title -->
<text x="500" y="40" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Density Comparison Across States</text>

<!-- Formula and explanation -->
<rect x="50" y="500" width="900" height="90" fill="none" stroke="#000000" stroke-width="2"/>
<text x="500" y="530" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">Density = Mass / Volume</text>
<text x="500" y="555" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Gas particles are far apart → LOW density</text>
<text x="500" y="575" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Liquid/Solid particles are close together → HIGH density</text>
</g>
</svg>`;

// ===== STATES OF MATTER APPARATUS (Remaining) =====

static uTubeManometerApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="800" viewBox="0 0 700 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>
U-Tube Manometer Apparatus
</metadata>
<g fill="none" stroke="#000000">
<!-- U-tube structure -->
<path d="M 200 200 L 200 600 Q 200 650 250 650 L 450 650 Q 500 650 500 600 L 500 250" stroke="#000000" stroke-width="4" fill="none"/>

<!-- Fluid in left side (lower level) -->
<rect x="200" y="500" width="50" height="150" fill="#CCCCCC" opacity="0.5" stroke="none"/>

<!-- Fluid in right side (higher level) -->
<rect x="450" y="400" width="50" height="250" fill="#CCCCCC" opacity="0.5" stroke="none"/>

<!-- Fluid surface lines -->
<line x1="200" y1="500" x2="250" y2="500" stroke="#000000" stroke-width="2"/>
<line x1="450" y1="400" x2="500" y2="400" stroke="#000000" stroke-width="2"/>

<!-- Gas container connected to left side -->
<rect x="100" y="100" width="100" height="100" fill="none" stroke="#000000" stroke-width="3"/>
<text x="150" y="155" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">Gas</text>
<text x="150" y="175" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">P</text>

<!-- Connection tube to manometer -->
<line x1="200" y1="150" x2="200" y2="200" stroke="#000000" stroke-width="3"/>
<line x1="150" y1="100" x2="150" y2="150" stroke="#000000" stroke-width="3"/>
<line x1="150" y1="150" x2="200" y2="150" stroke="#000000" stroke-width="3"/>

<!-- Atmospheric pressure on right side -->
<text x="500" y="230" font-family="Arial" font-size="14" fill="#000000">P₀ (atm)</text>
<line x1="510" y1="240" x2="510" y2="250" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Height difference measurement -->
<line x1="550" y1="400" x2="550" y2="500" stroke="#666666" stroke-width="2"/>
<line x1="545" y1="400" x2="555" y2="400" stroke="#666666" stroke-width="2"/>
<line x1="545" y1="500" x2="555" y2="500" stroke="#666666" stroke-width="2"/>
<text x="570" y="455" font-family="Arial" font-size="14" fill="#666666">h</text>

<!-- Horizontal reference line (dashed) -->
<line x1="200" y1="500" x2="500" y2="500" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="5,5"/>

<!-- Labels for fluid levels -->
<text x="160" y="495" font-family="Arial" font-size="12" fill="#000000" text-anchor="end">Level 1</text>
<text x="540" y="395" font-family="Arial" font-size="12" fill="#000000">Level 2</text>

<!-- Pressure labels -->
<text x="225" y="450" font-family="Arial" font-size="12" fill="#666666">P</text>
<text x="475" y="350" font-family="Arial" font-size="12" fill="#666666">P₀</text>

<!-- Scale markings on right tube -->
<line x1="500" y1="350" x2="520" y2="350" stroke="#000000" stroke-width="1"/>
<text x="530" y="355" font-family="Arial" font-size="10" fill="#000000">20</text>
<line x1="500" y1="400" x2="520" y2="400" stroke="#000000" stroke-width="1"/>
<text x="530" y="405" font-family="Arial" font-size="10" fill="#000000">15</text>
<line x1="500" y1="450" x2="520" y2="450" stroke="#000000" stroke-width="1"/>
<text x="530" y="455" font-family="Arial" font-size="10" fill="#000000">10</text>
<line x1="500" y1="500" x2="520" y2="500" stroke="#000000" stroke-width="1"/>
<text x="530" y="505" font-family="Arial" font-size="10" fill="#000000">5</text>
<line x1="500" y1="550" x2="520" y2="550" stroke="#000000" stroke-width="1"/>
<text x="530" y="555" font-family="Arial" font-size="10" fill="#000000">0</text>

<text x="570" y="520" font-family="Arial" font-size="11" fill="#666666">(cm)</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="350" y="40" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">U-Tube Manometer</text>

<!-- Equation box -->
<rect x="50" y="690" width="600" height="100" fill="none" stroke="#000000" stroke-width="2"/>
<text x="350" y="715" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Pressure Measurement</text>
<text x="350" y="740" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">P = P₀ + ρgh</text>
<text x="350" y="760" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">where ρ = fluid density, g = 9.8 m/s², h = height difference</text>
<text x="350" y="780" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">If h = 0.15 m (mercury), P - P₀ = 13600 × 9.8 × 0.15 ≈ 20 kPa</text>
</g>
</svg>`;

static barometerApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="600" height="900" viewBox="0 0 600 900"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Mercury Barometer Apparatus
</metadata>
<g fill="none" stroke="#000000">
<!-- Mercury reservoir (dish) -->
<ellipse cx="300" cy="750" rx="150" ry="30" fill="none" stroke="#000000" stroke-width="3"/>
<path d="M 150 750 L 150 770 Q 150 790 180 790 L 420 790 Q 450 790 450 770 L 450 750" stroke="#000000" stroke-width="3" fill="none"/>

<!-- Mercury in dish -->
<ellipse cx="300" cy="750" rx="150" ry="30" fill="#CCCCCC" opacity="0.5"/>
<path d="M 150 750 L 150 770 Q 150 790 180 790 L 420 790 Q 450 790 450 770 L 450 750 Z" fill="#CCCCCC" opacity="0.5"/>

<!-- Glass tube -->
<rect x="270" y="150" width="60" height="600" fill="none" stroke="#000000" stroke-width="3"/>

<!-- Mercury column inside tube -->
<rect x="275" y="290" width="50" height="460" fill="#CCCCCC" opacity="0.5" stroke="none"/>

<!-- Mercury surface in tube -->
<line x1="275" y1="290" x2="325" y2="290" stroke="#000000" stroke-width="2"/>

<!-- Vacuum space (Torricelli vacuum) -->
<text x="300" y="220" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">Vacuum</text>
<text x="300" y="240" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">(no air)</text>

<!-- Height measurement -->
<line x1="360" y1="290" x2="360" y2="750" stroke="#666666" stroke-width="2"/>
<line x1="355" y1="290" x2="365" y2="290" stroke="#666666" stroke-width="2"/>
<line x1="355" y1="750" x2="365" y2="750" stroke="#666666" stroke-width="2"/>
<text x="380" y="530" font-family="Arial" font-size="16" fill="#666666">h</text>
<text x="380" y="550" font-family="Arial" font-size="14" fill="#666666">76 cm</text>

<!-- Scale markings -->
<line x1="330" y1="300" x2="350" y2="300" stroke="#000000" stroke-width="1"/>
<text x="355" y="305" font-family="Arial" font-size="11" fill="#000000">75</text>

<line x1="330" y1="350" x2="350" y2="350" stroke="#000000" stroke-width="1"/>
<text x="355" y="355" font-family="Arial" font-size="11" fill="#000000">70</text>

<line x1="330" y1="400" x2="350" y2="400" stroke="#000000" stroke-width="1"/>
<text x="355" y="405" font-family="Arial" font-size="11" fill="#000000">65</text>

<line x1="330" y1="450" x2="350" y2="450" stroke="#000000" stroke-width="1"/>
<text x="355" y="455" font-family="Arial" font-size="11" fill="#000000">60</text>

<line x1="330" y1="500" x2="350" y2="500" stroke="#000000" stroke-width="1"/>
<text x="355" y="505" font-family="Arial" font-size="11" fill="#000000">55</text>

<line x1="330" y1="550" x2="350" y2="550" stroke="#000000" stroke-width="1"/>
<text x="355" y="555" font-family="Arial" font-size="11" fill="#000000">50</text>

<text x="380" y="580" font-family="Arial" font-size="10" fill="#666666">(cm Hg)</text>

<!-- Atmospheric pressure arrows -->
<line x1="200" y1="760" x2="250" y2="760" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="140" y="765" font-family="Arial" font-size="14" fill="#000000">P₀</text>

<line x1="400" y1="760" x2="350" y2="760" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="460" y="765" font-family="Arial" font-size="14" fill="#000000">P₀</text>

<!-- Closed top indicator -->
<text x="300" y="130" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Sealed top</text>
<path d="M 270 150 L 300 130 L 330 150" stroke="#000000" stroke-width="2" fill="none"/>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="300" y="40" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Mercury Barometer</text>

<!-- Equation box -->
<rect x="50" y="820" width="500" height="70" fill="none" stroke="#000000" stroke-width="2"/>
<text x="300" y="845" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Atmospheric Pressure Measurement</text>
<text x="300" y="865" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">P_atm = ρ_Hg × g × h</text>
<text x="300" y="883" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">= 13600 kg/m³ × 9.8 m/s² × 0.76 m ≈ 101,325 Pa (1 atm)</text>
</g>
</svg>`;

static capillaryTubeApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="600" height="900" viewBox="0 0 600 900"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Capillary Tube - Surface Tension
</metadata>
<g fill="none" stroke="#000000">
<!-- Water container (beaker) -->
<path d="M 100 600 L 100 750 Q 100 770 120 770 L 480 770 Q 500 770 500 750 L 500 600" stroke="#000000" stroke-width="3" fill="none"/>
<line x1="100" y1="600" x2="500" y2="600" stroke="#000000" stroke-width="2"/>

<!-- Water in beaker -->
<rect x="100" y="650" width="400" height="120" fill="#CCCCCC" opacity="0.3"/>

<!-- Water surface -->
<line x1="100" y1="650" x2="500" y2="650" stroke="#000000" stroke-width="2"/>
<text x="80" y="655" font-family="Arial" font-size="12" fill="#666666" text-anchor="end">Water level</text>

<!-- Narrow capillary tube -->
<rect x="280" y="200" width="40" height="570" fill="none" stroke="#000000" stroke-width="3"/>

<!-- Water risen in capillary (with meniscus) -->
<rect x="283" y="350" width="34" height="420" fill="#CCCCCC" opacity="0.3"/>

<!-- Concave meniscus at top -->
<path d="M 283 350 Q 300 340 317 350" stroke="#000000" stroke-width="2" fill="none"/>

<!-- Height of rise measurement -->
<line x1="350" y1="350" x2="350" y2="650" stroke="#666666" stroke-width="2"/>
<line x1="345" y1="350" x2="355" y2="350" stroke="#666666" stroke-width="2"/>
<line x1="345" y1="650" x2="355" y2="650" stroke="#666666" stroke-width="2"/>
<text x="370" y="510" font-family="Arial" font-size="16" fill="#666666">h</text>

<!-- Tube radius indicator -->
<line x1="280" y1="480" x2="320" y2="480" stroke="#666666" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="300" y1="480" x2="320" y2="480" stroke="#666666" stroke-width="2"/>
<line x1="320" y1="475" x2="320" y2="485" stroke="#666666" stroke-width="2"/>
<text x="330" y="485" font-family="Arial" font-size="12" fill="#666666">r</text>

<!-- Adhesive forces (arrows from liquid to tube wall) -->
<line x1="295" y1="370" x2="283" y2="360" stroke="#FF0000" stroke-width="1.5" marker-end="url(#arrowhead-red)"/>
<line x1="305" y1="370" x2="317" y2="360" stroke="#FF0000" stroke-width="1.5" marker-end="url(#arrowhead-red)"/>
<text x="250" y="375" font-family="Arial" font-size="11" fill="#FF0000">Adhesion</text>

<!-- Cohesive forces (arrows between liquid molecules) -->
<line x1="295" y1="390" x2="305" y2="390" stroke="#0000FF" stroke-width="1.5" marker-start="url(#arrowhead-blue-left)" marker-end="url(#arrowhead-blue)"/>
<text x="330" y="395" font-family="Arial" font-size="11" fill="#0000FF">Cohesion</text>

<!-- Contact angle -->
<path d="M 285 355 Q 288 358 290 360" stroke="#000000" stroke-width="1" fill="none"/>
<text x="270" y="360" font-family="Arial" font-size="10" fill="#666666">θ</text>

<!-- Surface tension visualization -->
<line x1="100" y1="650" x2="150" y2="650" stroke="#00AA00" stroke-width="2"/>
<line x1="145" y1="647" x2="150" y2="650" stroke="#00AA00" stroke-width="2"/>
<line x1="145" y1="653" x2="150" y2="650" stroke="#00AA00" stroke-width="2"/>
<text x="80" y="635" font-family="Arial" font-size="11" fill="#00AA00">γ (surface</text>
<text x="80" y="648" font-family="Arial" font-size="11" fill="#00AA00">tension)</text>

<!-- Wide tube for comparison -->
<rect x="420" y="500" width="60" height="270" fill="none" stroke="#000000" stroke-width="3"/>
<rect x="423" y="620" width="54" height="150" fill="#CCCCCC" opacity="0.3"/>
<path d="M 423 620 Q 450 615 477 620" stroke="#000000" stroke-width="2" fill="none"/>
<text x="450" y="580" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Wider tube</text>
<text x="450" y="595" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">(less rise)</text>

<!-- Height comparison -->
<line x1="395" y1="350" x2="395" y2="620" stroke="#AAAAAA" stroke-width="1" stroke-dasharray="5,5"/>
<text x="385" y="485" font-family="Arial" font-size="11" fill="#AAAAAA" text-anchor="end">h ∝ 1/r</text>

<defs>
  <marker id="arrowhead-red" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#FF0000"/>
  </marker>
  <marker id="arrowhead-blue" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#0000FF"/>
  </marker>
  <marker id="arrowhead-blue-left" markerWidth="8" markerHeight="8" refX="0" refY="3" orient="auto">
    <polygon points="8 0, 0 3, 8 6" fill="#0000FF"/>
  </marker>
</defs>

<!-- Title -->
<text x="300" y="40" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Capillary Tube - Surface Tension</text>

<!-- Equation box -->
<rect x="50" y="800" width="500" height="90" fill="none" stroke="#000000" stroke-width="2"/>
<text x="300" y="825" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Capillary Rise Formula</text>
<text x="300" y="850" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">h = (2γ cos θ) / (ρgr)</text>
<text x="300" y="870" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">γ = surface tension, θ = contact angle, ρ = liquid density</text>
<text x="300" y="885" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">r = tube radius, g = gravitational acceleration</text>
</g>
</svg>`;

static buoyanceBottleApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="600" height="900" viewBox="0 0 600 900"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Cartesian Diver (Buoyancy Bottle)
</metadata>
<g fill="none" stroke="#000000">
<!-- Plastic bottle -->
<path d="M 150 200 L 150 700 Q 150 730 180 730 L 420 730 Q 450 730 450 700 L 450 200 Q 450 180 430 180 L 170 180 Q 150 180 150 200" stroke="#000000" stroke-width="3" fill="none"/>

<!-- Bottle cap -->
<rect x="250" y="150" width="100" height="30" fill="#DDDDDD" stroke="#000000" stroke-width="3"/>
<text x="300" y="130" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Flexible cap</text>

<!-- Water in bottle -->
<rect x="150" y="300" width="300" height="430" fill="#CCCCCC" opacity="0.3"/>

<!-- Water surface -->
<line x1="150" y1="300" x2="450" y2="300" stroke="#0000FF" stroke-width="2"/>

<!-- Diver (small vial/tube) -->
<rect x="270" y="450" width="60" height="100" fill="none" stroke="#000000" stroke-width="3"/>

<!-- Air bubble in diver -->
<ellipse cx="300" cy="480" rx="20" ry="15" fill="none" stroke="#000000" stroke-width="2"/>
<text x="300" y="485" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Air</text>

<!-- Water in diver -->
<rect x="270" y="510" width="60" height="40" fill="#CCCCCC" opacity="0.5"/>

<!-- Small weight at bottom of diver -->
<rect x="290" y="540" width="20" height="10" fill="#000000"/>
<text x="300" y="565" font-family="Arial" font-size="9" fill="#666666" text-anchor="middle">weight</text>

<!-- Forces on diver (floating state) -->
<line x1="300" y1="450" x2="300" y2="400" stroke="#0000FF" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<text x="320" y="420" font-family="Arial" font-size="12" fill="#0000FF">F_buoyancy</text>

<line x1="300" y1="550" x2="300" y2="600" stroke="#FF0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<text x="320" y="580" font-family="Arial" font-size="12" fill="#FF0000">F_weight</text>

<!-- State label -->
<text x="380" y="500" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">FLOATING</text>
<text x="380" y="520" font-family="Arial" font-size="11" fill="#666666">F_b = F_w</text>

<!-- Hand squeezing bottle (left side) -->
<path d="M 80 400 Q 100 380 120 400 L 120 500 Q 100 520 80 500 Z" stroke="#000000" stroke-width="2" fill="#DDDDDD" opacity="0.5"/>
<line x1="90" y1="420" x2="90" y2="440" stroke="#000000" stroke-width="2"/>
<line x1="95" y1="430" x2="95" y2="450" stroke="#000000" stroke-width="2"/>
<line x1="100" y1="440" x2="100" y2="460" stroke="#000000" stroke-width="2"/>
<text x="60" y="455" font-family="Arial" font-size="11" fill="#000000">Squeeze</text>

<!-- Arrows showing compression -->
<line x1="120" y1="450" x2="145" y2="450" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead-gray)"/>
<line x1="480" y1="450" x2="455" y2="450" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead-gray)"/>

<!-- Divider line for comparison -->
<line x1="50" y1="760" x2="550" y2="760" stroke="#000000" stroke-width="2"/>
<text x="300" y="785" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">After Squeezing:</text>

<!-- Second state diagram (compressed) -->
<!-- Diver sinking -->
<rect x="270" y="820" width="60" height="100" fill="none" stroke="#000000" stroke-width="2"/>

<!-- Smaller air bubble (compressed) -->
<ellipse cx="300" cy="835" rx="15" ry="10" fill="none" stroke="#000000" stroke-width="2"/>
<text x="300" y="838" font-family="Arial" font-size="9" fill="#000000" text-anchor="middle">Air</text>
<text x="300" y="848" font-family="Arial" font-size="8" fill="#666666" text-anchor="middle">(less)</text>

<!-- More water in diver -->
<rect x="270" y="855" width="60" height="65" fill="#CCCCCC" opacity="0.5"/>

<!-- Forces (sinking) -->
<line x1="300" y1="820" x2="300" y2="800" stroke="#0000FF" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<text x="320" y="805" font-family="Arial" font-size="11" fill="#0000FF">F_b (less)</text>

<line x1="300" y1="920" x2="300" y2="950" stroke="#FF0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<text x="320" y="940" font-family="Arial" font-size="11" fill="#FF0000">F_w (same)</text>

<text x="380" y="870" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">SINKING</text>
<text x="380" y="890" font-family="Arial" font-size="11" fill="#666666">F_b < F_w</text>

<defs>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#0000FF"/>
  </marker>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#FF0000"/>
  </marker>
  <marker id="arrowhead-gray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#666666"/>
  </marker>
</defs>

<!-- Title -->
<text x="300" y="40" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Cartesian Diver (Buoyancy Bottle)</text>

<!-- Explanation box -->
<rect x="50" y="80" width="500" height="60" fill="none" stroke="#000000" stroke-width="2"/>
<text x="300" y="105" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Squeezing bottle → increases pressure → compresses air bubble</text>
<text x="300" y="125" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">→ more water enters diver → increases density → diver sinks</text>
</g>
</svg>`;

static evaporationCoolingApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Evaporation Cooling Apparatus
</metadata>
<g fill="none" stroke="#000000">
<!-- Shallow dish/container -->
<path d="M 200 350 L 200 420 Q 200 440 220 440 L 580 440 Q 600 440 600 420 L 600 350 L 200 350" stroke="#000000" stroke-width="3" fill="none"/>

<!-- Liquid in dish -->
<rect x="200" y="380" width="400" height="60" fill="#CCCCCC" opacity="0.3"/>

<!-- Liquid surface -->
<line x1="200" y1="380" x2="600" y2="380" stroke="#0000FF" stroke-width="2"/>

<!-- Slow-moving molecules (staying in liquid) -->
<circle cx="250" cy="410" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="255" y1="410" x2="265" y2="410" stroke="#666666" stroke-width="1.5" marker-end="url(#arrowhead-gray)"/>
<text x="245" y="398" font-family="Arial" font-size="9" fill="#666666">slow</text>

<circle cx="320" cy="405" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="315" y1="405" x2="305" y2="405" stroke="#666666" stroke-width="1.5" marker-end="url(#arrowhead-gray)"/>

<circle cx="400" cy="415" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="405" y1="420" x2="410" y2="425" stroke="#666666" stroke-width="1.5" marker-end="url(#arrowhead-gray)"/>

<circle cx="480" cy="410" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="475" y1="410" x2="465" y2="410" stroke="#666666" stroke-width="1.5" marker-end="url(#arrowhead-gray)"/>

<circle cx="550" cy="405" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="545" y1="400" x2="540" y2="395" stroke="#666666" stroke-width="1.5" marker-end="url(#arrowhead-gray)"/>

<!-- Fast-moving molecules (escaping) -->
<circle cx="280" cy="320" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="280" y1="315" x2="280" y2="280" stroke="#FF0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<text x="290" y="300" font-family="Arial" font-size="10" fill="#FF0000">fast</text>

<circle cx="380" cy="310" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="380" y1="305" x2="380" y2="270" stroke="#FF0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<text x="390" y="290" font-family="Arial" font-size="10" fill="#FF0000">fast</text>

<circle cx="500" cy="325" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="500" y1="320" x2="500" y2="285" stroke="#FF0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>

<!-- Escaped molecules in air -->
<circle cx="280" cy="240" r="7" fill="none" stroke="#000000" stroke-width="1.5"/>
<circle cx="380" cy="230" r="7" fill="none" stroke="#000000" stroke-width="1.5"/>
<circle cx="500" cy="245" r="7" fill="none" stroke="#000000" stroke-width="1.5"/>
<circle cx="350" cy="200" r="7" fill="none" stroke="#000000" stroke-width="1.5"/>
<circle cx="450" cy="210" r="7" fill="none" stroke="#000000" stroke-width="1.5"/>

<!-- Energy labels -->
<text x="150" y="320" font-family="Arial" font-size="12" fill="#FF0000">High KE</text>
<text x="150" y="335" font-family="Arial" font-size="12" fill="#FF0000">molecules</text>
<text x="150" y="350" font-family="Arial" font-size="12" fill="#FF0000">escape</text>

<text x="150" y="410" font-family="Arial" font-size="12" fill="#000000">Low KE</text>
<text x="150" y="425" font-family="Arial" font-size="12" fill="#000000">molecules</text>
<text x="150" y="440" font-family="Arial" font-size="12" fill="#000000">remain</text>

<!-- Thermometer -->
<rect x="650" y="350" width="20" height="90" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="660" cy="445" r="15" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="660" y1="410" x2="660" y2="435" stroke="#FF0000" stroke-width="3"/>

<!-- Temperature readings -->
<text x="690" y="365" font-family="Arial" font-size="12" fill="#000000">Initial: 25°C</text>
<line x1="670" y1="360" x2="680" y2="360" stroke="#000000" stroke-width="1"/>

<text x="690" y="415" font-family="Arial" font-size="12" fill="#0000FF">Final: 18°C</text>
<line x1="670" y1="410" x2="680" y2="410" stroke="#0000FF" stroke-width="2"/>

<text x="690" y="455" font-family="Arial" font-size="13" fill="#0000FF" font-weight="bold">COOLING</text>

<!-- Energy diagram -->
<rect x="200" y="480" width="400" height="100" fill="none" stroke="#000000" stroke-width="2"/>
<text x="400" y="505" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Energy Distribution</text>

<!-- Before evaporation -->
<path d="M 220 560 Q 250 520 280 550 Q 310 530 340 545 Q 370 525 380 530" stroke="#000000" stroke-width="2" fill="none"/>
<text x="300" y="575" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Before</text>

<!-- After evaporation (shifted left - lower average) -->
<path d="M 420 565 Q 440 535 460 555 Q 480 545 500 552 Q 520 540 540 545" stroke="#0000FF" stroke-width="2" fill="none"/>
<text x="480" y="575" font-family="Arial" font-size="11" fill="#0000FF" text-anchor="middle">After</text>

<text x="400" y="595" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">Average KE decreases → Temperature drops</text>

<defs>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#FF0000"/>
  </marker>
  <marker id="arrowhead-gray" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
    <polygon points="0 0, 8 3, 0 6" fill="#666666"/>
  </marker>
</defs>

<!-- Title -->
<text x="400" y="40" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Evaporation Cooling</text>

<!-- Principle box -->
<rect x="100" y="70" width="600" height="80" fill="none" stroke="#000000" stroke-width="2"/>
<text x="400" y="95" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Why Evaporation Causes Cooling</text>
<text x="400" y="118" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Only fastest-moving (highest energy) molecules escape</text>
<text x="400" y="138" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Remaining molecules have lower average KE → Temperature decreases</text>
</g>
</svg>`;

static pressureCookerApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="700" viewBox="0 0 900 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Pressure Cooker Apparatus
</metadata>
<g fill="none" stroke="#000000">
<!-- Pressure cooker body -->
<path d="M 200 350 L 200 550 Q 200 580 230 580 L 670 580 Q 700 580 700 550 L 700 350 Z" stroke="#000000" stroke-width="4" fill="none"/>

<!-- Sealed lid -->
<ellipse cx="450" cy="350" rx="250" ry="40" fill="#DDDDDD" stroke="#000000" stroke-width="4"/>

<!-- Pressure valve/weight on top -->
<rect x="440" y="310" width="20" height="40" fill="#666666" stroke="#000000" stroke-width="2"/>
<circle cx="450" cy="300" r="15" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<text x="480" y="305" font-family="Arial" font-size="12" fill="#000000">Pressure</text>
<text x="480" y="320" font-family="Arial" font-size="12" fill="#000000">valve</text>

<!-- Steam escaping (small amount) -->
<path d="M 450 285 Q 445 270 450 255 Q 455 240 450 225" stroke="#AAAAAA" stroke-width="2" stroke-dasharray="3,3" fill="none"/>
<path d="M 455 280 Q 460 265 455 250 Q 450 235 455 220" stroke="#AAAAAA" stroke-width="2" stroke-dasharray="3,3" fill="none"/>

<!-- Water/food inside -->
<rect x="250" y="500" width="400" height="70" fill="#CCCCCC" opacity="0.3"/>
<text x="450" y="540" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">Water + Food</text>

<!-- Steam/vapor above water -->
<circle cx="300" cy="450" r="6" fill="none" stroke="#AAAAAA" stroke-width="1.5"/>
<circle cx="400" cy="430" r="6" fill="none" stroke="#AAAAAA" stroke-width="1.5"/>
<circle cx="500" cy="460" r="6" fill="none" stroke="#AAAAAA" stroke-width="1.5"/>
<circle cx="600" cy="440" r="6" fill="none" stroke="#AAAAAA" stroke-width="1.5"/>
<circle cx="350" cy="480" r="6" fill="none" stroke="#AAAAAA" stroke-width="1.5"/>
<circle cx="450" cy="470" r="6" fill="none" stroke="#AAAAAA" stroke-width="1.5"/>
<circle cx="550" cy="450" r="6" fill="none" stroke="#AAAAAA" stroke-width="1.5"/>
<circle cx="650" cy="480" r="6" fill="none" stroke="#AAAAAA" stroke-width="1.5"/>

<text x="450" y="410" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">High pressure steam</text>

<!-- Pressure gauge -->
<circle cx="600" cy="330" r="30" fill="none" stroke="#000000" stroke-width="3"/>
<line x1="600" y1="330" x2="620" y2="315" stroke="#FF0000" stroke-width="2"/>
<text x="640" y="325" font-family="Arial" font-size="12" fill="#FF0000">2 atm</text>
<text x="640" y="345" font-family="Arial" font-size="11" fill="#666666">200 kPa</text>

<!-- Thermometer -->
<rect x="280" y="340" width="15" height="60" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="287" cy="405" r="12" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="287" y1="380" x2="287" y2="400" stroke="#FF0000" stroke-width="3"/>
<text x="260" y="380" font-family="Arial" font-size="12" fill="#FF0000" text-anchor="end">120°C</text>

<!-- Heat source (stove) -->
<rect x="300" y="600" width="300" height="20" fill="#666666" stroke="#000000" stroke-width="2"/>
<path d="M 350 620 Q 360 635 370 620" stroke="#FF6600" stroke-width="2" fill="none"/>
<path d="M 430 620 Q 440 635 450 620" stroke="#FF6600" stroke-width="2" fill="none"/>
<path d="M 510 620 Q 520 635 530 620" stroke="#FF6600" stroke-width="2" fill="none"/>
<text x="450" y="655" font-family="Arial" font-size="12" fill="#FF6600" text-anchor="middle">HEAT</text>

<!-- Sealed indicator -->
<text x="250" y="370" font-family="Arial" font-size="13" fill="#000000" font-weight="bold">SEALED</text>
<text x="250" y="387" font-family="Arial" font-size="11" fill="#666666">(airtight)</text>

<!-- Comparison box (normal boiling) -->
<rect x="50" y="100" width="250" height="150" fill="none" stroke="#000000" stroke-width="2"/>
<text x="175" y="125" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Normal Pressure</text>
<text x="175" y="150" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">P = 1 atm (101 kPa)</text>
<text x="175" y="175" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Boiling point = 100°C</text>
<text x="175" y="200" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Cooking time: LONG</text>
<circle cx="175" cy="225" r="15" fill="none" stroke="#000000" stroke-width="2"/>
<text x="175" y="230" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">100°</text>

<!-- Pressure cooker advantage -->
<rect x="600" y="100" width="250" height="150" fill="none" stroke="#0000FF" stroke-width="3"/>
<text x="725" y="125" font-family="Arial" font-size="14" fill="#0000FF" text-anchor="middle" font-weight="bold">High Pressure</text>
<text x="725" y="150" font-family="Arial" font-size="13" fill="#0000FF" text-anchor="middle">P = 2 atm (200 kPa)</text>
<text x="725" y="175" font-family="Arial" font-size="13" fill="#0000FF" text-anchor="middle">Boiling point = 120°C</text>
<text x="725" y="200" font-family="Arial" font-size="12" fill="#00AA00" text-anchor="middle" font-weight="bold">Cooking time: SHORT</text>
<circle cx="725" cy="225" r="15" fill="none" stroke="#0000FF" stroke-width="2"/>
<text x="725" y="230" font-family="Arial" font-size="12" fill="#0000FF" text-anchor="middle">120°</text>

<!-- Arrow showing relationship -->
<line x1="350" y1="180" x2="550" y2="180" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="450" y="170" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Increase pressure</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="450" y="40" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Pressure Cooker</text>

<!-- Principle -->
<text x="450" y="70" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">Higher pressure → Higher boiling point → Faster cooking</text>
</g>
</svg>`;


// ===== THERMODYNAMICS & HEAT (MISSING DIAGRAMS) =====

static phaseDiagramPhysicsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Phase Diagram - Water
</metadata>
<g fill="none" stroke="#000000">
<!-- Axes -->
<line x1="100" y1="500" x2="700" y2="500" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<line x1="100" y1="500" x2="100" y2="100" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Axis labels -->
<text x="710" y="505" font-family="Arial" font-size="14" fill="#000000">T (Temperature)</text>
<text x="60" y="90" font-family="Arial" font-size="14" fill="#000000">P (Pressure)</text>

<!-- Solid-Liquid boundary (slightly negative slope for water) -->
<line x1="250" y1="350" x2="230" y2="120" stroke="#000000" stroke-width="3"/>

<!-- Liquid-Gas boundary (exponential curve) -->
<path d="M 250 350 Q 350 340 450 280 Q 550 200 600 150" stroke="#000000" stroke-width="3"/>

<!-- Solid-Gas boundary (sublimation curve) -->
<path d="M 150 480 Q 200 420 250 350" stroke="#000000" stroke-width="3"/>

<!-- Triple point -->
<circle cx="250" cy="350" r="5" fill="#000000"/>
<text x="260" y="340" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Triple Point</text>
<text x="260" y="355" font-family="Arial" font-size="11" fill="#666666">0.01°C, 611 Pa</text>

<!-- Critical point -->
<circle cx="600" cy="150" r="5" fill="#000000"/>
<text x="610" y="145" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Critical Point</text>
<text x="610" y="160" font-family="Arial" font-size="11" fill="#666666">374°C, 22.1 MPa</text>

<!-- Phase regions -->
<text x="180" y="250" font-family="Arial" font-size="18" fill="#000000" font-weight="bold">SOLID</text>
<text x="350" y="230" font-family="Arial" font-size="18" fill="#000000" font-weight="bold">LIQUID</text>
<text x="450" y="400" font-family="Arial" font-size="18" fill="#000000" font-weight="bold">GAS</text>

<!-- Transition labels on boundaries -->
<text x="240" y="235" font-family="Arial" font-size="11" fill="#666666" transform="rotate(-85 240 235)">Melting/Freezing</text>
<text x="450" y="250" font-family="Arial" font-size="11" fill="#666666" transform="rotate(-30 450 250)">Vaporization/Condensation</text>
<text x="200" y="420" font-family="Arial" font-size="11" fill="#666666" transform="rotate(-50 200 420)">Sublimation/Deposition</text>

<!-- Standard pressure line (1 atm) -->
<line x1="100" y1="380" x2="650" y2="380" stroke="#666666" stroke-width="1" stroke-dasharray="5,5"/>
<text x="70" y="385" font-family="Arial" font-size="10" fill="#666666">1 atm</text>

<!-- Temperature points at 1 atm -->
<circle cx="240" cy="380" r="3" fill="#666666"/>
<line x1="240" y1="380" x2="240" y2="500" stroke="#666666" stroke-width="1" stroke-dasharray="3,3"/>
<text x="240" y="520" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">0°C</text>

<circle cx="530" cy="380" r="3" fill="#666666"/>
<line x1="530" y1="380" x2="530" y2="500" stroke="#666666" stroke-width="1" stroke-dasharray="3,3"/>
<text x="530" y="520" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">100°C</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Phase Diagram - Water</text>

<!-- Note box -->
<rect x="50" y="530" width="700" height="60" fill="none" stroke="#000000" stroke-width="2"/>
<text x="400" y="555" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Each curve represents equilibrium between two phases</text>
<text x="400" y="575" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Note: Water's solid-liquid line has negative slope (unusual - ice less dense than water)</text>
</g>
</svg>`;

static carnotCycleSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="700" viewBox="0 0 900 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Carnot Cycle - P-V Diagram
</metadata>
<g fill="none" stroke="#000000">
<!-- Axes -->
<line x1="100" y1="500" x2="750" y2="500" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<line x1="100" y1="500" x2="100" y2="100" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Axis labels -->
<text x="760" y="505" font-family="Arial" font-size="16" fill="#000000">V (Volume)</text>
<text x="60" y="90" font-family="Arial" font-size="16" fill="#000000">P (Pressure)</text>

<!-- Carnot cycle path -->
<!-- Process 1→2: Isothermal expansion at Th -->
<path d="M 200 200 Q 300 250 400 280" stroke="#FF0000" stroke-width="3"/>
<circle cx="200" cy="200" r="5" fill="#000000"/>
<text x="185" y="190" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">1</text>
<circle cx="400" cy="280" r="5" fill="#000000"/>
<text x="410" y="275" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">2</text>

<!-- Process 2→3: Adiabatic expansion -->
<path d="M 400 280 Q 500 360 600 420" stroke="#0000FF" stroke-width="3"/>
<circle cx="600" cy="420" r="5" fill="#000000"/>
<text x="610" y="415" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">3</text>

<!-- Process 3→4: Isothermal compression at Tc -->
<path d="M 600 420 Q 500 410 400 390" stroke="#00AA00" stroke-width="3"/>
<circle cx="400" cy="390" r="5" fill="#000000"/>
<text x="385" y="405" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">4</text>

<!-- Process 4→1: Adiabatic compression -->
<path d="M 400 390 Q 300 290 200 200" stroke="#FF8800" stroke-width="3"/>

<!-- Process labels -->
<text x="280" y="220" font-family="Arial" font-size="13" fill="#FF0000" font-weight="bold">1→2</text>
<text x="285" y="240" font-family="Arial" font-size="11" fill="#FF0000">Isothermal</text>
<text x="285" y="253" font-family="Arial" font-size="11" fill="#FF0000">expansion (T_h)</text>

<text x="520" y="340" font-family="Arial" font-size="13" fill="#0000FF" font-weight="bold">2→3</text>
<text x="520" y="358" font-family="Arial" font-size="11" fill="#0000FF">Adiabatic</text>
<text x="520" y="371" font-family="Arial" font-size="11" fill="#0000FF">expansion</text>

<text x="480" y="430" font-family="Arial" font-size="13" fill="#00AA00" font-weight="bold">3→4</text>
<text x="480" y="448" font-family="Arial" font-size="11" fill="#00AA00">Isothermal</text>
<text x="480" y="461" font-family="Arial" font-size="11" fill="#00AA00">compression (T_c)</text>

<text x="270" y="320" font-family="Arial" font-size="13" fill="#FF8800" font-weight="bold">4→1</text>
<text x="270" y="338" font-family="Arial" font-size="11" fill="#FF8800">Adiabatic</text>
<text x="270" y="351" font-family="Arial" font-size="11" fill="#FF8800">compression</text>

<!-- Area enclosed (work done) shading -->
<path d="M 200 200 Q 300 250 400 280 Q 500 360 600 420 Q 500 410 400 390 Q 300 290 200 200 Z" fill="#CCCCCC" opacity="0.3"/>
<text x="400" y="330" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">W_net</text>

<!-- Temperature isotherms -->
<line x1="150" y1="180" x2="450" y2="280" stroke="#FF0000" stroke-width="1" stroke-dasharray="5,5"/>
<text x="120" y="175" font-family="Arial" font-size="12" fill="#FF0000">T_h</text>

<line x1="350" y1="390" x2="650" y2="430" stroke="#00AA00" stroke-width="1" stroke-dasharray="5,5"/>
<text x="320" y="395" font-family="Arial" font-size="12" fill="#00AA00">T_c</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Carnot Cycle - Ideal Heat Engine</text>

<!-- Efficiency box -->
<rect x="50" y="550" width="800" height="140" fill="none" stroke="#000000" stroke-width="2"/>
<text x="450" y="575" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Carnot Efficiency (Maximum Theoretical)</text>
<text x="450" y="605" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">η = 1 - T_c/T_h = W/Q_h</text>
<text x="450" y="635" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Process 1→2: Heat absorbed Q_h from hot reservoir at T_h</text>
<text x="450" y="655" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Process 3→4: Heat rejected Q_c to cold reservoir at T_c</text>
<text x="450" y="675" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Net work: W = Q_h - Q_c (area enclosed by cycle)</text>
</g>
</svg>`;

static heatTransferModesSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Three Modes of Heat Transfer
</metadata>
<g fill="none" stroke="#000000">

<!-- CONDUCTION -->
<rect x="50" y="100" width="280" height="350" fill="none" stroke="#000000" stroke-width="3"/>
<text x="190" y="80" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">CONDUCTION</text>

<!-- Metal bar -->
<rect x="80" y="250" width="220" height="40" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>

<!-- Hot end -->
<rect x="60" y="230" width="20" height="80" fill="#FFCCCC" stroke="#000000" stroke-width="2"/>
<text x="70" y="340" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Hot</text>

<!-- Cold end -->
<rect x="300" y="230" width="20" height="80" fill="#CCCCFF" stroke="#000000" stroke-width="2"/>
<text x="310" y="340" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Cold</text>

<!-- Particles vibrating -->
<circle cx="120" cy="270" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="160" cy="270" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="200" cy="270" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="240" cy="270" r="6" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="280" cy="270" r="6" fill="none" stroke="#000000" stroke-width="2"/>

<!-- Vibration arrows (small) -->
<path d="M 115 265 L 110 260" stroke="#000000" stroke-width="1"/>
<path d="M 125 275 L 130 280" stroke="#000000" stroke-width="1"/>
<path d="M 155 265 L 150 260" stroke="#000000" stroke-width="1"/>
<path d="M 165 275 L 170 280" stroke="#000000" stroke-width="1"/>

<!-- Heat flow arrow -->
<line x1="100" y1="320" x2="270" y2="320" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="185" y="340" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Heat flow</text>

<text x="190" y="400" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Direct contact</text>
<text x="190" y="420" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Particle collisions</text>
<text x="190" y="435" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Q/t = kA(ΔT/Δx)</text>

<!-- CONVECTION -->
<rect x="360" y="100" width="280" height="350" fill="none" stroke="#000000" stroke-width="3"/>
<text x="500" y="80" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">CONVECTION</text>

<!-- Container with fluid -->
<rect x="390" y="240" width="220" height="150" fill="none" stroke="#000000" stroke-width="2"/>

<!-- Heat source at bottom -->
<rect x="440" y="390" width="120" height="20" fill="#FFCCCC" stroke="#000000" stroke-width="2"/>
<text x="500" y="425" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Heat source</text>

<!-- Rising hot fluid (curved arrows) -->
<path d="M 450 370 Q 445 330 450 290 Q 455 250 470 230" stroke="#FF0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<path d="M 550 370 Q 555 330 550 290 Q 545 250 530 230" stroke="#FF0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<text x="430" y="310" font-family="Arial" font-size="10" fill="#FF0000">Hot</text>

<!-- Sinking cool fluid -->
<path d="M 410 250 Q 405 290 410 330 Q 415 370 420 380" stroke="#0000FF" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<path d="M 590 250 Q 595 290 590 330 Q 585 370 580 380" stroke="#0000FF" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<text x="600" y="310" font-family="Arial" font-size="10" fill="#0000FF">Cool</text>

<!-- Circulation label -->
<text x="500" y="320" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Convection</text>
<text x="500" y="335" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">currents</text>

<text x="500" y="180" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Fluid movement</text>
<text x="500" y="200" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Bulk motion of fluid</text>
<text x="500" y="215" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Hot rises, cool sinks</text>

<!-- RADIATION -->
<rect x="670" y="100" width="280" height="350" fill="none" stroke="#000000" stroke-width="3"/>
<text x="810" y="80" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">RADIATION</text>

<!-- Hot object (Sun/fire) -->
<circle cx="750" cy="270" r="40" fill="#FFCCCC" stroke="#000000" stroke-width="2"/>
<text x="750" y="275" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Hot</text>
<text x="750" y="290" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">object</text>

<!-- Electromagnetic waves -->
<path d="M 790 240 Q 810 235 830 240 Q 850 245 870 240" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<path d="M 790 270 Q 810 265 830 270 Q 850 275 870 270" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<path d="M 790 300 Q 810 295 830 300 Q 850 305 870 300" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Wave labels -->
<text x="835" y="230" font-family="Arial" font-size="10" fill="#000000">EM waves</text>
<text x="880" y="270" font-family="Arial" font-size="10" fill="#000000">IR</text>

<!-- Cool object receiving -->
<rect x="900" y="250" width="30" height="40" fill="#CCCCFF" stroke="#000000" stroke-width="2"/>
<text x="915" y="310" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Cool</text>

<!-- Vacuum/space indication -->
<text x="850" y="350" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">(No medium needed)</text>

<text x="810" y="390" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Electromagnetic waves</text>
<text x="810" y="410" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Through vacuum/space</text>
<text x="810" y="425" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">P = εσAT⁴</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#FF0000"/>
  </marker>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#0000FF"/>
  </marker>
</defs>

<!-- Title -->
<text x="500" y="30" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Three Modes of Heat Transfer</text>

<!-- Summary box -->
<rect x="50" y="480" width="900" height="100" fill="none" stroke="#000000" stroke-width="2"/>
<text x="500" y="510" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Comparison Summary</text>
<text x="500" y="535" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Conduction: Requires contact • Convection: Requires fluid medium • Radiation: No medium required</text>
<text x="500" y="555" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">All three can occur simultaneously (e.g., heating water in a pot on a stove)</text>
<text x="500" y="572" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Heat always flows from high temperature to low temperature</text>
</g>
</svg>`;

static kineticTheoryParticlesSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="800" viewBox="0 0 800 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Kinetic Theory of Gases
</metadata>
<g fill="none" stroke="#000000">
<!-- Container box -->
<rect x="100" y="100" width="600" height="600" fill="none" stroke="#000000" stroke-width="4"/>

<!-- Gas particles (circles) with velocity vectors -->
<!-- Particle 1 -->
<circle cx="180" cy="180" r="12" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="180" y1="180" x2="220" y2="160" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="225" y="160" font-family="Arial" font-size="10" fill="#000000">v₁</text>

<!-- Particle 2 -->
<circle cx="350" cy="200" r="12" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="350" y1="200" x2="310" y2="220" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="300" y="235" font-family="Arial" font-size="10" fill="#000000">v₂</text>

<!-- Particle 3 -->
<circle cx="550" cy="220" r="12" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="550" y1="220" x2="580" y2="250" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="585" y="255" font-family="Arial" font-size="10" fill="#000000">v₃</text>

<!-- Particle 4 -->
<circle cx="250" cy="350" r="12" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="250" y1="350" x2="280" y2="330" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Particle 5 -->
<circle cx="450" cy="380" r="12" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="450" y1="380" x2="420" y2="410" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Particle 6 -->
<circle cx="600" cy="420" r="12" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="600" y1="420" x2="630" y2="390" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Particle 7 -->
<circle cx="200" cy="500" r="12" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="200" y1="500" x2="170" y2="520" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Particle 8 -->
<circle cx="380" cy="530" r="12" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="380" y1="530" x2="410" y2="510" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Particle 9 -->
<circle cx="520" cy="580" r="12" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="520" y1="580" x2="490" y2="600" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Particle 10 -->
<circle cx="300" cy="620" r="12" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="300" y1="620" x2="330" y2="640" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Additional particles (smaller, without vectors) -->
<circle cx="480" cy="250" r="10" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="620" cy="300" r="10" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="150" cy="320" r="10" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="540" cy="460" r="10" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="180" cy="600" r="10" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="650" cy="550" r="10" fill="none" stroke="#000000" stroke-width="2"/>

<!-- Collision illustration -->
<circle cx="350" cy="450" r="12" fill="none" stroke="#666666" stroke-width="2"/>
<circle cx="380" cy="450" r="12" fill="none" stroke="#666666" stroke-width="2"/>
<line x1="335" y1="450" x2="320" y2="450" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead-gray)"/>
<line x1="395" y1="450" x2="410" y2="450" stroke="#666666" stroke-width="2" marker-start="url(#arrowhead-left-gray)"/>
<text x="365" y="430" font-family="Arial" font-size="10" fill="#666666">collision</text>

<!-- Wall collision illustration -->
<circle cx="120" cy="250" r="12" fill="none" stroke="#666666" stroke-width="2"/>
<line x1="135" y1="250" x2="150" y2="250" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead-gray)"/>
<line x1="120" y1="250" x2="100" y2="250" stroke="#666666" stroke-width="1" stroke-dasharray="3,3"/>
<text x="125" y="275" font-family="Arial" font-size="9" fill="#666666">wall</text>
<text x="125" y="285" font-family="Arial" font-size="9" fill="#666666">collision</text>

<!-- Pressure arrows (force on walls) -->
<line x1="90" y1="300" x2="100" y2="300" stroke="#FF0000" stroke-width="3" marker-start="url(#arrowhead-left-red)"/>
<line x1="710" y1="400" x2="700" y2="400" stroke="#FF0000" stroke-width="3" marker-end="url(#arrowhead-red)"/>
<line x1="400" y1="90" x2="400" y2="100" stroke="#FF0000" stroke-width="3" marker-start="url(#arrowhead-up-red)"/>
<line x1="500" y1="710" x2="500" y2="700" stroke="#FF0000" stroke-width="3" marker-end="url(#arrowhead-red)"/>
<text x="75" y="295" font-family="Arial" font-size="11" fill="#FF0000">P</text>
<text x="715" y="405" font-family="Arial" font-size="11" fill="#FF0000">P</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrowhead-gray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#666666"/>
  </marker>
  <marker id="arrowhead-left-gray" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
    <polygon points="10 0, 0 3, 10 6" fill="#666666"/>
  </marker>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#FF0000"/>
  </marker>
  <marker id="arrowhead-left-red" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
    <polygon points="10 0, 0 3, 10 6" fill="#FF0000"/>
  </marker>
  <marker id="arrowhead-up-red" markerWidth="10" markerHeight="10" refX="3" refY="0" orient="auto">
    <polygon points="0 0, 3 10, 6 0" fill="#FF0000"/>
  </marker>
</defs>

<!-- Title -->
<text x="400" y="40" font-family="Arial" font-size="22" fill="#000000" text-anchor="middle" font-weight="bold">Kinetic Theory of Gases</text>

<!-- Postulates box -->
<rect x="50" y="720" width="700" height="70" fill="none" stroke="#000000" stroke-width="2"/>
<text x="400" y="745" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Key Postulates:</text>
<text x="400" y="765" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">• Gas consists of many particles in constant random motion • Collisions are elastic</text>
<text x="400" y="782" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">• Average KE ∝ Temperature: KE_avg = (3/2)kT • Pressure from collisions with walls: PV = NkT</text>
</g>
</svg>`;

// ===== THERMODYNAMICS APPARATUS (MISSING DIAGRAMS) =====

static steamEngineApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="700" viewBox="0 0 900 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Steam Engine Apparatus
</metadata>
<g fill="none" stroke="#000000">
<!-- Boiler (left) -->
<rect x="50" y="250" width="150" height="200" fill="#DDDDDD" stroke="#000000" stroke-width="3"/>
<text x="125" y="480" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Boiler</text>

<!-- Water in boiler -->
<rect x="60" y="380" width="130" height="60" fill="#CCCCCC" opacity="0.3" stroke="none"/>
<text x="125" y="415" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Water</text>

<!-- Steam above water -->
<text x="125" y="300" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Steam</text>
<text x="125" y="320" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">High P & T</text>

<!-- Heat source under boiler -->
<rect x="80" y="450" width="90" height="15" fill="#FFCCCC" stroke="#000000" stroke-width="2"/>
<path d="M 90 465 Q 95 475 100 465 Q 105 475 110 465 Q 115 475 120 465 Q 125 475 130 465 Q 135 475 140 465 Q 145 475 150 465 Q 155 475 160 465" stroke="#FF6666" stroke-width="2" fill="none"/>
<text x="125" y="495" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Heat (Q_h)</text>

<!-- Steam pipe to cylinder -->
<rect x="200" y="280" width="150" height="15" fill="none" stroke="#000000" stroke-width="3"/>
<line x1="220" y1="285" x2="240" y2="285" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead-gray)"/>
<line x1="260" y1="285" x2="280" y2="285" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead-gray)"/>
<line x1="300" y1="285" x2="320" y2="285" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead-gray)"/>
<text x="275" y="275" font-family="Arial" font-size="10" fill="#666666">steam flow</text>

<!-- Cylinder -->
<rect x="350" y="200" width="200" height="150" fill="none" stroke="#000000" stroke-width="4"/>
<text x="450" y="380" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Cylinder</text>

<!-- Piston inside cylinder -->
<rect x="420" y="210" width="20" height="130" fill="#AAAAAA" stroke="#000000" stroke-width="3"/>
<text x="430" y="195" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Piston</text>

<!-- Piston rod -->
<rect x="440" y="265" width="100" height="15" fill="none" stroke="#000000" stroke-width="3"/>

<!-- Flywheel -->
<circle cx="600" cy="272" r="50" fill="none" stroke="#000000" stroke-width="4"/>
<line x1="600" y1="272" x2="630" y2="242" stroke="#000000" stroke-width="3"/>
<line x1="600" y1="272" x2="570" y2="302" stroke="#000000" stroke-width="3"/>
<circle cx="600" cy="272" r="10" fill="#000000"/>
<text x="600" y="355" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Flywheel</text>

<!-- Exhaust pipe from cylinder -->
<rect x="350" y="350" width="15" height="80" fill="none" stroke="#000000" stroke-width="3"/>
<line x1="357" y1="370" x2="357" y2="390" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead-gray)"/>
<line x1="357" y1="400" x2="357" y2="420" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead-gray)"/>

<!-- Condenser -->
<rect x="300" y="430" width="115" height="80" fill="#DDDDDD" stroke="#000000" stroke-width="3"/>
<text x="357" y="525" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Condenser</text>

<!-- Cooling water -->
<line x1="280" y1="470" x2="300" y2="470" stroke="#0000FF" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<text x="250" y="475" font-family="Arial" font-size="10" fill="#0000FF">Cold water in</text>

<line x1="415" y1="470" x2="435" y2="470" stroke="#0000FF" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<text x="450" y="475" font-family="Arial" font-size="10" fill="#0000FF">Water out</text>

<!-- Heat rejected -->
<text x="357" y="555" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Heat out (Q_c)</text>

<!-- Condensed water return -->
<rect x="200" y="440" width="15" height="70" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="207" y1="460" x2="207" y2="480" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead-gray)"/>
<text x="185" y="475" font-family="Arial" font-size="9" fill="#666666">return</text>

<!-- Energy flow labels -->
<text x="125" y="520" font-family="Arial" font-size="12" fill="#FF0000" text-anchor="middle">T_h (hot)</text>
<text x="357" y="575" font-family="Arial" font-size="12" fill="#0000FF" text-anchor="middle">T_c (cold)</text>

<!-- Work output arrow -->
<line x1="680" y1="272" x2="760" y2="272" stroke="#00AA00" stroke-width="4" marker-end="url(#arrowhead-green)"/>
<text x="720" y="260" font-family="Arial" font-size="14" fill="#00AA00" text-anchor="middle" font-weight="bold">Work (W)</text>
<text x="720" y="295" font-family="Arial" font-size="11" fill="#00AA00" text-anchor="middle">Mechanical output</text>

<!-- Valve indicator -->
<rect x="345" y="275" width="10" height="25" fill="#666666" stroke="#000000" stroke-width="1"/>
<text x="350" y="265" font-family="Arial" font-size="9" fill="#666666" text-anchor="middle">valve</text>

<defs>
  <marker id="arrowhead-gray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#666666"/>
  </marker>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#0000FF"/>
  </marker>
  <marker id="arrowhead-green" markerWidth="12" markerHeight="12" refX="11" refY="3" orient="auto">
    <polygon points="0 0, 12 3, 0 6" fill="#00AA00"/>
  </marker>
</defs>

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Steam Engine Apparatus</text>

<!-- Energy flow diagram -->
<rect x="50" y="580" width="800" height="110" fill="none" stroke="#000000" stroke-width="2"/>
<text x="450" y="605" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Energy Flow and Efficiency</text>
<text x="450" y="630" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Heat Engine Cycle: Q_h (heat in) → W (work out) + Q_c (heat rejected)</text>
<text x="450" y="655" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Efficiency: η = W/Q_h = (Q_h - Q_c)/Q_h = 1 - Q_c/Q_h</text>
<text x="450" y="677" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Maximum efficiency (Carnot): η_max = 1 - T_c/T_h</text>
</g>
</svg>`;

static lesliesCubeApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="700" viewBox="0 0 800 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Leslie's Cube Apparatus
</metadata>
<g fill="none" stroke="#000000">
<!-- Leslie's Cube (3D perspective) -->
<!-- Front face (black matte) -->
<path d="M 200 300 L 200 450 L 350 450 L 350 300 Z" fill="#333333" stroke="#000000" stroke-width="3"/>
<text x="275" y="380" font-family="Arial" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="bold">Black</text>
<text x="275" y="400" font-family="Arial" font-size="11" fill="#FFFFFF" text-anchor="middle">Matte</text>

<!-- Right face (white matte) -->
<path d="M 350 300 L 500 250 L 500 400 L 350 450 Z" fill="#FFFFFF" stroke="#000000" stroke-width="3"/>
<text x="425" y="330" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">White</text>
<text x="425" y="350" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Matte</text>

<!-- Top face (shiny/polished) -->
<path d="M 200 300 L 350 300 L 500 250 L 350 250 Z" fill="#DDDDDD" stroke="#000000" stroke-width="3"/>
<text x="350" y="280" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Shiny</text>

<!-- Dull face (back - partial view) -->
<line x1="200" y1="300" x2="350" y2="250" stroke="#000000" stroke-width="3"/>

<!-- Hot water inside -->
<text x="275" y="425" font-family="Arial" font-size="12" fill="#FFCCCC" text-anchor="middle">Hot water</text>
<text x="275" y="440" font-family="Arial" font-size="11" fill="#FFCCCC" text-anchor="middle">80°C</text>

<!-- Thermopile detectors at equal distances -->
<!-- Detector 1 - facing black surface -->
<rect x="100" y="360" width="30" height="40" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="115" cy="380" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="130" y1="380" x2="180" y2="380" stroke="#000000" stroke-width="1" stroke-dasharray="3,3"/>
<text x="115" y="420" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Thermopile</text>
<text x="115" y="435" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">1</text>

<!-- Radiation arrows from black surface -->
<line x1="200" y1="360" x2="150" y2="360" stroke="#FF0000" stroke-width="2" marker-start="url(#arrowhead-left-red)"/>
<line x1="200" y1="380" x2="150" y2="380" stroke="#FF0000" stroke-width="2" marker-start="url(#arrowhead-left-red)"/>
<line x1="200" y1="400" x2="150" y2="400" stroke="#FF0000" stroke-width="2" marker-start="url(#arrowhead-left-red)"/>
<text x="150" y="350" font-family="Arial" font-size="11" fill="#FF0000">High</text>

<!-- Detector 2 - facing white surface -->
<rect x="570" y="310" width="30" height="40" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="585" cy="330" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="570" y1="330" x2="520" y2="330" stroke="#000000" stroke-width="1" stroke-dasharray="3,3"/>
<text x="585" y="370" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Thermopile</text>
<text x="585" y="385" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">2</text>

<!-- Radiation arrows from white surface (fewer/shorter) -->
<line x1="500" y1="320" x2="550" y2="320" stroke="#FF9999" stroke-width="2" marker-end="url(#arrowhead-pink)"/>
<line x1="500" y1="340" x2="550" y2="340" stroke="#FF9999" stroke-width="2" marker-end="url(#arrowhead-pink)"/>
<text x="550" y="310" font-family="Arial" font-size="11" fill="#FF9999">Low</text>

<!-- Detector 3 - facing shiny surface -->
<rect x="330" y="150" width="40" height="30" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="350" cy="165" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<line x1="350" y1="180" x2="350" y2="230" stroke="#000000" stroke-width="1" stroke-dasharray="3,3"/>
<text x="370" y="145" font-family="Arial" font-size="10" fill="#000000">Thermopile 3</text>

<!-- Very few radiation arrows from shiny surface -->
<line x1="340" y1="250" x2="340" y2="200" stroke="#FFCCCC" stroke-width="2" marker-start="url(#arrowhead-up-pink)"/>
<line x1="360" y1="250" x2="360" y2="200" stroke="#FFCCCC" stroke-width="2" marker-start="url(#arrowhead-up-pink)"/>
<text x="310" y="220" font-family="Arial" font-size="11" fill="#FFCCCC">Very low</text>

<!-- Labels -->
<text x="400" y="500" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Leslie's Cube</text>
<text x="400" y="520" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Same temperature, different surfaces</text>

<defs>
  <marker id="arrowhead-left-red" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
    <polygon points="10 0, 0 3, 10 6" fill="#FF0000"/>
  </marker>
  <marker id="arrowhead-pink" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#FF9999"/>
  </marker>
  <marker id="arrowhead-up-pink" markerWidth="10" markerHeight="10" refX="3" refY="0" orient="auto">
    <polygon points="0 0, 3 10, 6 0" fill="#FFCCCC"/>
  </marker>
</defs>

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Leslie's Cube Apparatus</text>

<!-- Results table -->
<rect x="50" y="550" width="700" height="140" fill="none" stroke="#000000" stroke-width="2"/>
<text x="400" y="575" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Thermal Radiation Comparison</text>

<!-- Table headers -->
<line x1="50" y1="590" x2="750" y2="590" stroke="#000000" stroke-width="2"/>
<text x="150" y="610" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Surface Type</text>
<text x="400" y="610" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Emissivity (ε)</text>
<text x="620" y="610" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Radiation</text>

<line x1="50" y1="620" x2="750" y2="620" stroke="#000000" stroke-width="1"/>

<!-- Table data -->
<text x="150" y="640" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Black matte</text>
<text x="400" y="640" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">≈ 1.0</text>
<text x="620" y="640" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Maximum</text>

<text x="150" y="660" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">White matte</text>
<text x="400" y="660" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">≈ 0.9</text>
<text x="620" y="660" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">High</text>

<text x="150" y="680" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Shiny/Polished</text>
<text x="400" y="680" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">≈ 0.1-0.2</text>
<text x="620" y="680" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Minimum</text>

<!-- Conclusion -->
<text x="400" y="705" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Stefan-Boltzmann Law: P = εσAT⁴ (emissivity ε depends on surface)</text>
</g>
</svg>`;

static vacuumFlaskApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="600" height="900" viewBox="0 0 600 900"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Vacuum Flask (Thermos) Apparatus
</metadata>
<g fill="none" stroke="#000000">
<!-- Outer casing -->
<rect x="150" y="150" width="300" height="600" rx="20" ry="20" fill="none" stroke="#000000" stroke-width="4"/>

<!-- Cap/stopper -->
<rect x="200" y="100" width="200" height="50" fill="#DDDDDD" stroke="#000000" stroke-width="3"/>
<rect x="250" y="80" width="100" height="20" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="300" y="130" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Insulated cap</text>

<!-- Inner container (double-walled glass) -->
<!-- Outer wall of inner container -->
<path d="M 200 180 L 200 680 Q 200 700 220 700 L 380 700 Q 400 700 400 680 L 400 180" fill="none" stroke="#000000" stroke-width="3"/>

<!-- Inner wall of inner container -->
<path d="M 230 200 L 230 670 Q 230 685 245 685 L 355 685 Q 370 685 370 670 L 370 200" fill="none" stroke="#000000" stroke-width="3"/>

<!-- Vacuum gap (shaded) -->
<path d="M 200 180 L 200 680 Q 200 700 220 700 L 230 700 Q 230 685 230 670 L 230 200 L 200 180" fill="#E0E0E0" opacity="0.5" stroke="none"/>
<path d="M 400 180 L 400 680 Q 400 700 380 700 L 370 700 Q 370 685 370 670 L 370 200 L 400 180" fill="#E0E0E0" opacity="0.5" stroke="none"/>

<!-- Vacuum label -->
<text x="215" y="400" font-family="Arial" font-size="10" fill="#000000" transform="rotate(-90 215 400)">Vacuum gap</text>
<text x="385" y="400" font-family="Arial" font-size="10" fill="#000000" transform="rotate(-90 385 400)">Vacuum gap</text>

<!-- Hot liquid inside -->
<rect x="240" y="350" width="120" height="320" fill="#FFCCCC" opacity="0.3" stroke="none"/>
<text x="300" y="500" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Hot liquid</text>
<text x="300" y="520" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">T_hot</text>

<!-- Reflective coating (indicated by shine lines) -->
<line x1="225" y1="250" x2="235" y2="260" stroke="#FFD700" stroke-width="2"/>
<line x1="225" y1="300" x2="235" y2="310" stroke="#FFD700" stroke-width="2"/>
<line x1="225" y1="350" x2="235" y2="360" stroke="#FFD700" stroke-width="2"/>
<line x1="365" y1="250" x2="375" y2="260" stroke="#FFD700" stroke-width="2"/>
<line x1="365" y1="300" x2="375" y2="310" stroke="#FFD700" stroke-width="2"/>
<line x1="365" y1="350" x2="375" y2="360" stroke="#FFD700" stroke-width="2"/>
<text x="215" y="280" font-family="Arial" font-size="9" fill="#FFD700">silvered</text>

<!-- Support/spacer at bottom -->
<rect x="280" y="690" width="40" height="10" fill="#666666" stroke="#000000" stroke-width="1"/>
<text x="300" y="715" font-family="Arial" font-size="9" fill="#666666" text-anchor="middle">Insulating support</text>

<!-- Heat transfer prevention annotations -->
<!-- Conduction -->
<line x1="480" y1="300" x2="410" y2="300" stroke="#000000" stroke-width="1" stroke-dasharray="5,5"/>
<circle cx="490" cy="300" r="15" fill="none" stroke="#FF0000" stroke-width="3"/>
<line x1="480" y1="310" x2="500" y2="290" stroke="#FF0000" stroke-width="3"/>
<text x="550" y="305" font-family="Arial" font-size="11" fill="#000000">No conduction</text>
<text x="550" y="320" font-family="Arial" font-size="10" fill="#666666">(vacuum gap)</text>

<!-- Convection -->
<line x1="480" y1="420" x2="410" y2="420" stroke="#000000" stroke-width="1" stroke-dasharray="5,5"/>
<circle cx="490" cy="420" r="15" fill="none" stroke="#FF0000" stroke-width="3"/>
<line x1="480" y1="430" x2="500" y2="410" stroke="#FF0000" stroke-width="3"/>
<text x="550" y="425" font-family="Arial" font-size="11" fill="#000000">No convection</text>
<text x="550" yy="440" font-family="Arial" font-size="10" fill="#666666">(vacuum gap)</text>

<!-- Radiation -->
<line x1="480" y1="540" x2="410" y2="540" stroke="#000000" stroke-width="1" stroke-dasharray="5,5"/>
<path d="M 485 530 L 490 535 L 495 530" stroke="#00AA00" stroke-width="2" fill="none"/>
<text x="550" y="545" font-family="Arial" font-size="11" fill="#00AA00">Reduced radiation</text>
<text x="550" y="560" font-family="Arial" font-size="10" fill="#666666">(reflective coating)</text>

<!-- External temperature -->
<text x="100" y="400" font-family="Arial" font-size="12" fill="#0000FF">T_external</text>
<text x="100" y="420" font-family="Arial" font-size="11" fill="#0000FF">(room temp)</text>

<!-- Cross-section indicator -->
<line x1="450" y1="150" x2="450" y2="750" stroke="#666666" stroke-width="1" stroke-dasharray="10,5"/>
<text x="455" y="170" font-family="Arial" font-size="10" fill="#666666">Cross-section view</text>

<!-- Title -->
<text x="300" y="40" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Vacuum Flask (Thermos)</text>

<!-- Explanation box -->
<rect x="50" y="780" width="500" height="110" fill="none" stroke="#000000" stroke-width="2"/>
<text x="300" y="805" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Heat Transfer Prevention</text>
<text x="300" y="830" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">1. Vacuum gap: Prevents conduction and convection (no particles to transfer heat)</text>
<text x="300" y="850" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2. Reflective coating: Minimizes radiation (reflects infrared back)</text>
<text x="300" y="870" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">3. Insulated cap and support: Reduces heat loss through openings</text>
<text x="300" y="887" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Result: Liquid maintains temperature for hours</text>
</g>
</svg>`;

static bimetallicStripApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Bimetallic Strip Apparatus
</metadata>
<g fill="none" stroke="#000000">

<!-- Room temperature state -->
<text x="200" y="50" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">Room Temperature</text>

<!-- Fixed end -->
<rect x="50" y="120" width="30" height="60" fill="#666666" stroke="#000000" stroke-width="2"/>
<text x="65" y="200" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Fixed</text>

<!-- Straight bimetallic strip at room temp -->
<!-- Brass layer (top) -->
<rect x="80" y="130" width="240" height="15" fill="#FFD700" stroke="#000000" stroke-width="2"/>
<text x="200" y="125" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Brass (α = 19×10⁻⁶/°C)</text>

<!-- Steel layer (bottom) -->
<rect x="80" y="145" width="240" height="15" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<text x="200" y="175" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Steel (α = 11×10⁻⁶/°C)</text>

<!-- Bond line -->
<line x1="80" y1="145" x2="320" y2="145" stroke="#000000" stroke-width="1" stroke-dasharray="2,2"/>

<!-- Temperature label -->
<text x="200" y="220" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">T = 20°C</text>

<!-- Heated state -->
<text x="200" y="300" font-family="Arial" font-size="16" fill="#FF0000" text-anchor="middle" font-weight="bold">Heated</text>

<!-- Fixed end -->
<rect x="50" y="350" width="30" height="60" fill="#666666" stroke="#000000" stroke-width="2"/>
<text x="65" y="430" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">Fixed</text>

<!-- Curved bimetallic strip when heated -->
<!-- Brass expands more, becomes outer curve -->
<path d="M 80 360 Q 200 330 320 360" fill="#FFD700" stroke="#000000" stroke-width="2"/>
<path d="M 80 375 Q 200 345 320 375" fill="#FFD700" stroke="#000000" stroke-width="2"/>
<path d="M 80 360 L 80 375 M 320 360 L 320 375" stroke="#000000" stroke-width="2"/>

<!-- Steel expands less, becomes inner curve -->
<path d="M 80 375 Q 200 355 320 375" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<path d="M 80 390 Q 200 370 320 390" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<path d="M 80 375 L 80 390 M 320 375 L 320 390" stroke="#000000" stroke-width="2"/>

<!-- Expansion arrows -->
<line x1="85" y1="340" x2="90" y2="360" stroke="#FF0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<text x="75" y="340" font-family="Arial" font-size="10" fill="#FF0000">expands more</text>

<line x1="85" y1="410" x2="85" y2="390" stroke="#0000FF" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<text x="75" y="425" font-family="Arial" font-size="10" fill="#0000FF">expands less</text>

<!-- Curvature arrow -->
<path d="M 200 320 Q 220 340 240 340" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)" fill="none"/>
<text x="250" y="340" font-family="Arial" font-size="11" fill="#000000">Bends toward steel</text>

<!-- Temperature label -->
<text x="200" y="460" font-family="Arial" font-size="12" fill="#FF0000" text-anchor="middle">T = 100°C</text>

<!-- Heat source -->
<rect x="150" y="480" width="100" height="15" fill="#FFCCCC" stroke="#000000" stroke-width="2"/>
<path d="M 160 495 Q 165 505 170 495 Q 175 505 180 495 Q 185 505 190 495 Q 195 505 200 495 Q 205 505 210 495 Q 215 505 220 495 Q 225 505 230 495 Q 235 505 240 495" stroke="#FF6666" stroke-width="2" fill="none"/>
<text x="200" y="520" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Heat</text>

<!-- Application example (thermostat) -->
<rect x="450" y="100" width="300" height="400" fill="none" stroke="#000000" stroke-width="3"/>
<text x="600" y="80" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">Application: Thermostat</text>

<!-- Thermostat at low temp -->
<text x="600" y="140" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Cold (Heater ON)</text>

<rect x="470" y="160" width="20" height="40" fill="#666666" stroke="#000000" stroke-width="2"/>
<path d="M 490 175 Q 560 165 620 175" fill="#FFD700" stroke="#000000" stroke-width="2"/>
<path d="M 490 185 Q 560 175 620 185" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<line x1="490" y1="175" x2="490" y2="185" stroke="#000000" stroke-width="2"/>
<line x1="620" y1="175" x2="620" y2="185" stroke="#000000" stroke-width="2"/>

<!-- Electrical contact (closed) -->
<circle cx="630" cy="180" r="8" fill="#000000"/>
<line x1="630" y1="180" x2="680" y2="180" stroke="#000000" stroke-width="3"/>
<text x="700" y="185" font-family="Arial" font-size="11" fill="#00AA00">Circuit closed</text>
<text x="700" y="200" font-family="Arial" font-size="10" fill="#00AA00">Heater ON</text>

<!-- Thermostat at high temp -->
<text x="600" y="280" font-family="Arial" font-size="13" fill="#FF0000" text-anchor="middle">Hot (Heater OFF)</text>

<rect x="470" y="300" width="20" height="40" fill="#666666" stroke="#000000" stroke-width="2"/>
<path d="M 490 315 Q 580 285 650 315" fill="#FFD700" stroke="#000000" stroke-width="2"/>
<path d="M 490 325 Q 580 295 650 325" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<line x1="490" y1="315" x2="490" y2="325" stroke="#000000" stroke-width="2"/>

<!-- Electrical contact (open) -->
<circle cx="650" cy="320" r="8" fill="#000000"/>
<circle cx="680" cy="300" r="8" fill="#000000"/>
<line x1="650" y1="312" x2="673" y2="303" stroke="#000000" stroke-width="2"/>
<text x="700" y="310" font-family="Arial" font-size="11" fill="#FF0000">Circuit open</text>
<text x="700" y="325" font-family="Arial" font-size="10" fill="#FF0000">Heater OFF</text>

<!-- Temperature control -->
<text x="600" y="380" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">Automatic Temperature Control</text>
<text x="600" y="405" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Strip bends with temperature change</text>
<text x="600" y="425" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Makes/breaks electrical contact</text>
<text x="600" y="445" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Controls heating/cooling system</text>

<!-- Other applications -->
<text x="600" y="475" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">Also used in: Fire alarms, circuit breakers,</text>
<text x="600" y="490" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">automotive temperature gauges</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#FF0000"/>
  </marker>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#0000FF"/>
  </marker>
</defs>

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Bimetallic Strip Apparatus</text>

<!-- Formula box -->
<rect x="50" y="540" width="350" height="50" fill="none" stroke="#000000" stroke-width="2"/>
<text x="225" y="565" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Thermal Expansion: ΔL = αL₀ΔT</text>
<text x="225" y="583" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Different α values → different expansion → bending</text>
</g>
</svg>`;

// ===== ELECTRICITY & MAGNETISM (Continued) =====

static seriesParallelCircuitsSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="700" viewBox="0 0 1000 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Series vs Parallel Circuits
</metadata>
<g fill="none" stroke="#000000">
<!-- Title -->
<text x="500" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Series vs Parallel Circuits</text>

<!-- SERIES CIRCUIT (Top) -->
<text x="500" y="70" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">SERIES CIRCUIT</text>

<!-- Battery -->
<line x1="150" y1="140" x2="150" y2="180" stroke="#000000" stroke-width="3"/>
<line x1="130" y1="140" x2="170" y2="140" stroke="#000000" stroke-width="4"/>
<line x1="140" y1="180" x2="160" y2="180" stroke="#000000" stroke-width="4"/>
<text x="120" y="165" font-family="Arial" font-size="12" fill="#000000">12V</text>

<!-- Wires -->
<line x1="150" y1="140" x2="400" y2="140" stroke="#000000" stroke-width="3"/>
<line x1="150" y1="180" x2="150" y2="240" stroke="#000000" stroke-width="3"/>
<line x1="150" y1="240" x2="850" y2="240" stroke="#000000" stroke-width="3"/>
<line x1="850" y1="240" x2="850" y2="140" stroke="#000000" stroke-width="3"/>

<!-- Resistor R1 -->
<path d="M 400 140 L 420 160 L 440 120 L 460 160 L 480 120 L 500 160 L 520 120 L 540 160 L 560 140" stroke="#000000" stroke-width="3" fill="none"/>
<text x="480" y="110" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">R₁ = 100Ω</text>

<!-- Connection wire -->
<line x1="560" y1="140" x2="650" y2="140" stroke="#000000" stroke-width="3"/>

<!-- Resistor R2 -->
<path d="M 650 140 L 670 160 L 690 120 L 710 160 L 730 120 L 750 160 L 770 120 L 790 160 L 810 140" stroke="#000000" stroke-width="3" fill="none"/>
<text x="730" y="110" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">R₂ = 200Ω</text>

<!-- Connection to complete circuit -->
<line x1="810" y1="140" x2="850" y2="140" stroke="#000000" stroke-width="3"/>

<!-- Current arrows -->
<path d="M 300 135 L 280 135" stroke="#000000" stroke-width="2" marker-start="url(#arrowhead-left)"/>
<text x="290" y="125" font-family="Arial" font-size="11" fill="#000000">I</text>

<path d="M 600 135 L 580 135" stroke="#000000" stroke-width="2" marker-start="url(#arrowhead-left)"/>
<text x="590" y="125" font-family="Arial" font-size="11" fill="#000000">I</text>

<!-- Series equations -->
<rect x="50" y="260" width="900" height="80" fill="none" stroke="#000000" stroke-width="2"/>
<text x="500" y="285" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Series: Current same, Voltage divides</text>
<text x="500" y="305" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">I_total = I₁ = I₂ = V/R_total = 12V/300Ω = 0.04A</text>
<text x="500" y="325" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">R_total = R₁ + R₂ = 100Ω + 200Ω = 300Ω</text>

<!-- PARALLEL CIRCUIT (Bottom) -->
<text x="500" y="380" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">PARALLEL CIRCUIT</text>

<!-- Battery -->
<line x1="150" y1="420" x2="150" y2="460" stroke="#000000" stroke-width="3"/>
<line x1="130" y1="420" x2="170" y2="420" stroke="#000000" stroke-width="4"/>
<line x1="140" y1="460" x2="160" y2="460" stroke="#000000" stroke-width="4"/>
<text x="120" y="445" font-family="Arial" font-size="12" fill="#000000">12V</text>

<!-- Main wires -->
<line x1="150" y1="420" x2="300" y2="420" stroke="#000000" stroke-width="3"/>
<line x1="150" y1="460" x2="300" y2="460" stroke="#000000" stroke-width="3"/>

<!-- Junction points -->
<circle cx="300" cy="420" r="4" fill="#000000"/>
<circle cx="300" cy="460" r="4" fill="#000000"/>
<circle cx="750" cy="420" r="4" fill="#000000"/>
<circle cx="750" cy="460" r="4" fill="#000000"/>

<!-- Branch 1 (top) with R1 -->
<line x1="300" y1="420" x2="450" y2="420" stroke="#000000" stroke-width="3"/>
<path d="M 450 420 L 470 440 L 490 400 L 510 440 L 530 400 L 550 440 L 570 400 L 590 440 L 610 420" stroke="#000000" stroke-width="3" fill="none"/>
<line x1="610" y1="420" x2="750" y2="420" stroke="#000000" stroke-width="3"/>
<text x="530" y="395" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">R₁ = 100Ω</text>
<text x="680" y="410" font-family="Arial" font-size="11" fill="#000000">I₁</text>

<!-- Branch 2 (bottom) with R2 -->
<line x1="300" y1="460" x2="450" y2="460" stroke="#000000" stroke-width="3"/>
<path d="M 450 460 L 470 480 L 490 440 L 510 480 L 530 440 L 550 480 L 570 440 L 590 480 L 610 460" stroke="#000000" stroke-width="3" fill="none"/>
<line x1="610" y1="460" x2="750" y2="460" stroke="#000000" stroke-width="3"/>
<text x="530" y="490" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">R₂ = 200Ω</text>
<text x="680" y="475" font-family="Arial" font-size="11" fill="#000000">I₂</text>

<!-- Return wire -->
<line x1="750" y1="420" x2="850" y2="420" stroke="#000000" stroke-width="3"/>
<line x1="850" y1="420" x2="850" y2="460" stroke="#000000" stroke-width="3"/>
<line x1="750" y1="460" x2="850" y2="460" stroke="#000000" stroke-width="3"/>

<!-- Current arrows -->
<path d="M 220 415 L 200 415" stroke="#000000" stroke-width="2" marker-start="url(#arrowhead-left)"/>
<text x="210" y="405" font-family="Arial" font-size="11" fill="#000000">I_total</text>

<path d="M 370 415 L 350 415" stroke="#000000" stroke-width="2" marker-start="url(#arrowhead-left)"/>
<path d="M 370 455 L 350 455" stroke="#000000" stroke-width="2" marker-start="url(#arrowhead-left)"/>

<!-- Parallel equations -->
<rect x="50" y="520" width="900" height="100" fill="none" stroke="#000000" stroke-width="2"/>
<text x="500" y="545" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Parallel: Voltage same, Current divides</text>
<text x="500" y="565" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">V₁ = V₂ = V_total = 12V</text>
<text x="500" y="585" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">1/R_total = 1/R₁ + 1/R₂ = 1/100 + 1/200 = 3/200  →  R_total = 66.7Ω</text>
<text x="500" y="605" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">I₁ = 12V/100Ω = 0.12A,  I₂ = 12V/200Ω = 0.06A,  I_total = 0.18A</text>

<defs>
  <marker id="arrowhead-left" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
    <polygon points="10 0, 0 3, 10 6" fill="#000000"/>
  </marker>
</defs>
</g>
</svg>`;

static potentialDistanceGraphSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Electric Potential vs Distance from Point Charge
</metadata>
<g fill="none" stroke="#000000">
<!-- Axes -->
<line x1="100" y1="450" x2="750" y2="450" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<line x1="100" y1="450" x2="100" y2="50" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Axis labels -->
<text x="760" y="455" font-family="Arial" font-size="14" fill="#000000">r (distance)</text>
<text x="60" y="45" font-family="Arial" font-size="14" fill="#000000">V (potential)</text>

<!-- Distance markings -->
<line x1="200" y1="445" x2="200" y2="455" stroke="#000000" stroke-width="2"/>
<text x="200" y="475" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">r</text>
<line x1="350" y1="445" x2="350" y2="455" stroke="#000000" stroke-width="2"/>
<text x="350" y="475" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2r</text>
<line x1="500" y1="445" x2="500" y2="455" stroke="#000000" stroke-width="2"/>
<text x="500" y="475" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">3r</text>
<line x1="650" y1="445" x2="650" y2="455" stroke="#000000" stroke-width="2"/>
<text x="650" y="475" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">4r</text>

<!-- Potential curve (1/r hyperbola) -->
<path d="M 120 100 Q 150 150 200 220 Q 250 280 350 340 Q 450 380 650 420" stroke="#000000" stroke-width="3" fill="none"/>

<!-- Asymptote lines -->
<line x1="100" y1="100" x2="110" y2="100" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="5,5"/>
<line x1="100" y1="450" x2="750" y2="450" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="5,5"/>

<!-- Point charge illustration -->
<circle cx="120" cy="100" r="15" fill="none" stroke="#000000" stroke-width="2"/>
<text x="120" y="108" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">+Q</text>
<text x="120" y="75" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Source charge</text>

<!-- Sample points on curve -->
<circle cx="200" cy="220" r="4" fill="#000000"/>
<circle cx="350" cy="340" r="4" fill="#000000"/>
<circle cx="500" cy="395" r="4" fill="#000000"/>

<!-- Dashed lines to axes -->
<line x1="200" y1="220" x2="200" y2="450" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="200" y1="220" x2="100" y2="220" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="95" y1="220" x2="105" y2="220" stroke="#000000" stroke-width="2"/>
<text x="75" y="225" font-family="Arial" font-size="11" fill="#000000">V₁</text>

<line x1="350" y1="340" x2="350" y2="450" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="350" y1="340" x2="100" y2="340" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="95" y1="340" x2="105" y2="340" stroke="#000000" stroke-width="2"/>
<text x="65" y="345" font-family="Arial" font-size="11" fill="#000000">V₁/2</text>

<!-- Field strength indication -->
<line x1="180" y1="240" x2="220" y2="200" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead-gray)"/>
<text x="230" y="210" font-family="Arial" font-size="11" fill="#666666">Steep slope</text>
<text x="230" y="225" font-family="Arial" font-size="11" fill="#666666">→ Strong field</text>

<line x1="530" y1="410" x2="570" y2="380" stroke="#666666" stroke-width="2" marker-end="url(#arrowhead-gray)"/>
<text x="580" y="390" font-family="Arial" font-size="11" fill="#666666">Gentle slope</text>
<text x="580" y="405" font-family="Arial" font-size="11" fill="#666666">→ Weak field</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrowhead-gray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#666666"/>
  </marker>
</defs>

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Electric Potential vs Distance</text>

<!-- Equation box -->
<rect x="450" y="100" width="300" height="120" fill="none" stroke="#000000" stroke-width="2"/>
<text x="600" y="125" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Equations</text>
<text x="600" y="150" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">V = kQ/r</text>
<text x="600" y="175" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">E = -dV/dr = kQ/r²</text>
<text x="600" y="200" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Field strength = negative</text>
<text x="600" y="215" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">gradient of potential</text>
</g>
</svg>`;

static magneticFieldLinesSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Magnetic Field Lines - Bar Magnet
</metadata>
<g fill="none" stroke="#000000">
<!-- Bar magnet -->
<rect x="300" y="250" width="200" height="100" fill="#DDDDDD" stroke="#000000" stroke-width="3"/>
<line x1="400" y1="250" x2="400" y2="350" stroke="#000000" stroke-width="2"/>

<!-- North pole (left half) -->
<text x="350" y="310" font-family="Arial" font-size="30" fill="#000000" text-anchor="middle" font-weight="bold">N</text>

<!-- South pole (right half) -->
<text x="450" y="310" font-family="Arial" font-size="30" fill="#000000" text-anchor="middle" font-weight="bold">S</text>

<!-- Field lines from N to S (outside magnet) -->
<!-- Top lines -->
<path d="M 300 280 Q 250 200 200 180 Q 300 180 400 200 Q 500 180 600 180 Q 550 200 500 280" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<path d="M 300 260 Q 230 150 150 130 Q 300 120 400 150 Q 500 120 650 130 Q 570 150 500 260" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<path d="M 300 240 Q 200 100 100 80 Q 300 60 400 100 Q 500 60 700 80 Q 600 100 500 240" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Bottom lines (mirror of top) -->
<path d="M 300 320 Q 250 400 200 420 Q 300 420 400 400 Q 500 420 600 420 Q 550 400 500 320" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<path d="M 300 340 Q 230 450 150 470 Q 300 480 400 450 Q 500 480 650 470 Q 570 450 500 340" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<path d="M 300 360 Q 200 500 100 520 Q 300 540 400 500 Q 500 540 700 520 Q 600 500 500 360" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Internal field lines (S to N inside magnet) -->
<line x1="450" y1="300" x2="350" y2="300" stroke="#666666" stroke-width="2" stroke-dasharray="5,5" marker-end="url(#arrowhead-gray)"/>

<!-- Compass needles showing field direction -->
<!-- North side -->
<g transform="translate(200, 300)">
  <line x1="-10" y1="0" x2="10" y2="0" stroke="#000000" stroke-width="2"/>
  <polygon points="10,0 5,3 5,-3" fill="#000000"/>
</g>

<g transform="translate(150, 200)">
  <line x1="-8" y1="-8" x2="8" y2="8" stroke="#000000" stroke-width="2"/>
  <polygon points="8,8 6,3 3,6" fill="#000000"/>
</g>

<!-- South side -->
<g transform="translate(600, 300)">
  <line x1="-10" y1="0" x2="10" y2="0" stroke="#000000" stroke-width="2"/>
  <polygon points="10,0 5,3 5,-3" fill="#000000"/>
</g>

<g transform="translate(650, 200)">
  <line x1="-8" y1="8" x2="8" y2="-8" stroke="#000000" stroke-width="2"/>
  <polygon points="8,-8 3,-6 6,-3" fill="#000000"/>
</g>

<!-- Labels -->
<text x="180" y="170" font-family="Arial" font-size="11" fill="#666666">Compass</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrowhead-gray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#666666"/>
  </marker>
</defs>

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Magnetic Field Lines - Bar Magnet</text>

<!-- Properties box -->
<rect x="50" y="560" width="700" height="30" fill="none" stroke="#000000" stroke-width="2"/>
<text x="400" y="580" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Field lines: N → S outside, S → N inside • Never cross • Density indicates strength</text>
</g>
</svg>`;

static electromagneticInductionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Electromagnetic Induction
</metadata>
<g fill="none" stroke="#000000">
<!-- Coil (solenoid) -->
<ellipse cx="400" cy="200" rx="80" ry="30" fill="none" stroke="#000000" stroke-width="2"/>
<ellipse cx="400" cy="250" rx="80" ry="30" fill="none" stroke="#000000" stroke-width="2"/>
<ellipse cx="400" cy="300" rx="80" ry="30" fill="none" stroke="#000000" stroke-width="2"/>
<ellipse cx="400" cy="350" rx="80" ry="30" fill="none" stroke="#000000" stroke-width="2"/>
<ellipse cx="400" cy="400" rx="80" ry="30" fill="none" stroke="#000000" stroke-width="2"/>

<!-- Connecting lines for coil -->
<line x1="320" y1="200" x2="320" y2="400" stroke="#000000" stroke-width="2"/>
<line x1="480" y1="200" x2="480" y2="400" stroke="#000000" stroke-width="2"/>

<!-- Wire leads from coil -->
<line x1="320" y1="200" x2="250" y2="200" stroke="#000000" stroke-width="3"/>
<line x1="480" y1="200" x2="550" y2="200" stroke="#000000" stroke-width="3"/>

<!-- Galvanometer -->
<circle cx="300" cy="480" r="40" fill="none" stroke="#000000" stroke-width="3"/>
<text x="300" y="490" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">G</text>

<!-- Needle deflection -->
<line x1="300" y1="480" x2="320" y2="460" stroke="#FF0000" stroke-width="3"/>
<text x="330" y="455" font-family="Arial" font-size="12" fill="#FF0000">I</text>

<!-- Wires to galvanometer -->
<line x1="250" y1="200" x2="250" y2="460" stroke="#000000" stroke-width="3"/>
<line x1="250" y1="460" x2="260" y2="480" stroke="#000000" stroke-width="3"/>
<line x1="550" y1="200" x2="550" y2="480" stroke="#000000" stroke-width="3"/>
<line x1="550" y1="480" x2="340" y2="480" stroke="#000000" stroke-width="3"/>

<!-- Bar magnet -->
<rect x="100" y="250" width="150" height="100" fill="#CCCCCC" stroke="#000000" stroke-width="3"/>
<line x1="175" y1="250" x2="175" y2="350" stroke="#000000" stroke-width="2"/>
<text x="138" y="310" font-family="Arial" font-size="24" fill="#000000" text-anchor="middle" font-weight="bold">N</text>
<text x="213" y="310" font-family="Arial" font-size="24" fill="#000000" text-anchor="middle" font-weight="bold">S</text>

<!-- Motion arrow -->
<line x1="250" y1="300" x2="300" y2="300" stroke="#000000" stroke-width="4" marker-end="url(#arrowhead-large)"/>
<text x="275" y="280" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">v</text>
<text x="260" y="330" font-family="Arial" font-size="12" fill="#000000">Motion</text>

<!-- Magnetic flux lines through coil -->
<line x1="175" y1="280" x2="400" y2="280" stroke="#0000FF" stroke-width="2" stroke-dasharray="5,5" marker-end="url(#arrowhead-blue)"/>
<line x1="175" y1="300" x2="400" y2="300" stroke="#0000FF" stroke-width="2" stroke-dasharray="5,5" marker-end="url(#arrowhead-blue)"/>
<line x1="175" y1="320" x2="400" y2="320" stroke="#0000FF" stroke-width="2" stroke-dasharray="5,5" marker-end="url(#arrowhead-blue)"/>
<text x="280" y="270" font-family="Arial" font-size="11" fill="#0000FF">Φ (flux)</text>

<defs>
  <marker id="arrowhead-large" markerWidth="15" markerHeight="15" refX="14" refY="4" orient="auto">
    <polygon points="0 0, 15 4, 0 8" fill="#000000"/>
  </marker>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#0000FF"/>
  </marker>
</defs>

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Electromagnetic Induction</text>

<!-- Explanation box -->
<rect x="450" y="350" width="320" height="120" fill="none" stroke="#000000" stroke-width="2"/>
<text x="610" y="375" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Faraday's Law</text>
<text x="610" y="400" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">ε = -dΦ/dt</text>
<text x="610" y="425" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Moving magnet changes</text>
<text x="610" y="442" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">magnetic flux through coil</text>
<text x="300" y="875" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Detects presence of charge but not its sign (without additional tests)</text>
</g>
</svg>`;

static vanDeGraaffGeneratorApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="600" height="900" viewBox="0 0 600 900"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Van de Graaff Generator
</metadata>
<g fill="none" stroke="#000000">
<!-- Hollow metal sphere (dome) -->
<circle cx="300" cy="150" r="120" fill="#DDDDDD" stroke="#000000" stroke-width="3"/>
<text x="300" y="60" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle">Metal dome</text>

<!-- Charge symbols on sphere surface -->
<text x="200" y="140" font-size="18" fill="#000000">+</text>
<text x="240" y="100" font-size="18" fill="#000000">+</text>
<text x="290" y="70" font-size="18" fill="#000000">+</text>
<text x="340" y="90" font-size="18" fill="#000000">+</text>
<text x="380" y="130" font-size="18" fill="#000000">+</text>
<text x="390" y="180" font-size="18" fill="#000000">+</text>
<text x="360" y="220" font-size="18" fill="#000000">+</text>
<text x="310" y="240" font-size="18" fill="#000000">+</text>
<text x="260" y="230" font-size="18" fill="#000000">+</text>
<text x="220" y="200" font-size="18" fill="#000000">+</text>

<!-- Insulating column -->
<rect x="250" y="270" width="100" height="400" fill="#EEEEEE" stroke="#000000" stroke-width="3"/>
<text x="370" y="470" font-family="Arial" font-size="12" fill="#666666">Insulating</text>
<text x="370" y="490" font-family="Arial" font-size="12" fill="#666666">column</text>

<!-- Moving belt inside column -->
<rect x="280" y="280" width="40" height="380" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="5,5"/>
<text x="240" y="350" font-family="Arial" font-size="11" fill="#000000">Belt</text>

<!-- Belt motion arrows -->
<path d="M 285 320 L 285 300" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<path d="M 315 600 L 315 620" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>
<text x="330" y="400" font-family="Arial" font-size="11" fill="#000000">↑ motion</text>

<!-- Charge symbols on belt -->
<text x="295" y="350" font-size="12" fill="#FF0000">+</text>
<text x="295" y="400" font-size="12" fill="#FF0000">+</text>
<text x="295" y="450" font-size="12" fill="#FF0000">+</text>
<text x="295" y="500" font-size="12" fill="#FF0000">+</text>
<text x="295" y="550" font-size="12" fill="#FF0000">+</text>
<text x="295" y="600" font-size="12" fill="#FF0000">+</text>

<!-- Upper brush (inside dome) -->
<rect x="270" y="260" width="60" height="10" fill="#888888" stroke="#000000" stroke-width="2"/>
<text x="200" y="268" font-family="Arial" font-size="11" fill="#000000">Upper brush</text>
<line x1="250" y1="265" x2="270" y2="265" stroke="#000000" stroke-width="1"/>

<!-- Lower brush (at bottom) -->
<rect x="270" y="670" width="60" height="10" fill="#888888" stroke="#000000" stroke-width="2"/>
<text x="190" y="685" font-family="Arial" font-size="11" fill="#000000">Lower brush</text>

<!-- Motor at bottom -->
<rect x="250" y="700" width="100" height="60" fill="#AAAAAA" stroke="#000000" stroke-width="3"/>
<circle cx="300" cy="730" r="15" fill="none" stroke="#000000" stroke-width="2"/>
<text x="300" y="780" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Motor</text>

<!-- Pulley at top -->
<circle cx="300" cy="270" r="15" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>

<!-- Pulley at bottom -->
<circle cx="300" cy="675" r="15" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>

<!-- Base/ground -->
<rect x="200" y="760" width="200" height="20" fill="#666666" stroke="#000000" stroke-width="2"/>
<line x1="180" y1="780" x2="420" y2="780" stroke="#000000" stroke-width="3"/>

<!-- Ground symbols -->
<line x1="190" y1="785" x2="210" y2="795" stroke="#000000" stroke-width="2"/>
<line x1="210" y1="785" x2="230" y2="795" stroke="#000000" stroke-width="2"/>
<line x1="230" y1="785" x2="250" y2="795" stroke="#000000" stroke-width="2"/>
<line x1="370" y1="785" x2="390" y2="795" stroke="#000000" stroke-width="2"/>
<line x1="390" y1="785" x2="410" y2="795" stroke="#000000" stroke-width="2"/>

<!-- High voltage indicator -->
<text x="450" y="155" font-family="Arial" font-size="14" fill="#FF0000" font-weight="bold">High Voltage</text>
<text x="450" y="175" font-family="Arial" font-size="12" fill="#FF0000">~100,000V</text>

<!-- Electric field lines emanating from sphere -->
<line x1="180" y1="100" x2="120" y2="60" stroke="#0000FF" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrowhead-blue)"/>
<line x1="150" y1="150" x2="80" y2="150" stroke="#0000FF" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrowhead-blue)"/>
<line x1="180" y1="200" x2="120" y2="240" stroke="#0000FF" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrowhead-blue)"/>
<line x1="420" y1="100" x2="480" y2="60" stroke="#0000FF" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrowhead-blue)"/>
<line x1="450" y1="150" x2="520" y2="150" stroke="#0000FF" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrowhead-blue)"/>
<line x1="420" y1="200" x2="480" y2="240" stroke="#0000FF" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrowhead-blue)"/>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#0000FF"/>
  </marker>
</defs>

<!-- Title -->
<text x="300" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Van de Graaff Generator</text>

<!-- Explanation box -->
<rect x="50" y="810" width="500" height="80" fill="none" stroke="#000000" stroke-width="2"/>
<text x="300" y="835" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Operation: Motor drives belt → Lower brush deposits + charge on belt</text>
<text x="300" y="855" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">→ Belt carries charge up → Upper brush transfers charge to dome</text>
<text x="300" y="875" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Charge accumulates on outer surface (Gauss's law) → Very high voltage</text>
</g>
</svg>`;

static rheostatPotentiometerApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Rheostat/Potentiometer
</metadata>
<g fill="none" stroke="#000000">
<!-- Resistance wire (coiled) -->
<path d="M 150 300 Q 180 280 210 300 Q 240 320 270 300 Q 300 280 330 300 Q 360 320 390 300 Q 420 280 450 300 Q 480 320 510 300 Q 540 280 570 300 Q 600 320 630 300 Q 660 280 690 300" stroke="#000000" stroke-width="4" fill="none"/>

<!-- Support bar/frame -->
<line x1="150" y1="300" x2="150" y2="350" stroke="#000000" stroke-width="3"/>
<line x1="690" y1="300" x2="690" y2="350" stroke="#000000" stroke-width="3"/>
<line x1="150" y1="350" x2="690" y2="350" stroke="#000000" stroke-width="3"/>

<!-- Terminal connections at ends -->
<circle cx="150" cy="300" r="8" fill="#888888" stroke="#000000" stroke-width="2"/>
<text x="130" y="285" font-family="Arial" font-size="12" fill="#000000">A</text>

<circle cx="690" cy="300" r="8" fill="#888888" stroke="#000000" stroke-width="2"/>
<text x="705" y="305" font-family="Arial" font-size="12" fill="#000000">B</text>

<!-- Sliding contact/wiper -->
<line x1="420" y1="250" x2="420" y2="300" stroke="#FF0000" stroke-width="4"/>
<circle cx="420" cy="300" r="10" fill="#FF0000" stroke="#000000" stroke-width="2"/>
<circle cx="420" cy="240" r="15" fill="#FFCCCC" stroke="#000000" stroke-width="3"/>
<text x="440" y="245" font-family="Arial" font-size="12" fill="#000000">Slider</text>
<text x="440" y="220" font-family="Arial" font-size="12" fill="#000000">C</text>

<!-- Connection wire from slider -->
<line x1="420" y1="225" x2="420" y2="180" stroke="#FF0000" stroke-width="3"/>
<circle cx="420" cy="170" r="8" fill="#FF0000" stroke="#000000" stroke-width="2"/>

<!-- Arrow showing slider movement -->
<line x1="350" y1="200" x2="490" y2="200" stroke="#666666" stroke-width="2"/>
<polygon points="340,200 350,195 350,205" fill="#666666"/>
<polygon points="500,200 490,195 490,205" fill="#666666"/>
<text x="420" y="190" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">movement</text>

<!-- Resistance sections labeled -->
<text x="285" y="270" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">R₁</text>
<text x="555" y="270" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">R₂</text>

<!-- Distance markers -->
<line x1="150" y1="380" x2="420" y2="380" stroke="#666666" stroke-width="2" stroke-dasharray="3,3"/>
<line x1="150" y1="375" x2="150" y2="385" stroke="#666666" stroke-width="2"/>
<line x1="420" y1="375" x2="420" y2="385" stroke="#666666" stroke-width="2"/>
<text x="285" y="400" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Length l₁</text>

<line x1="420" y1="410" x2="690" y2="410" stroke="#666666" stroke-width="2" stroke-dasharray="3,3"/>
<line x1="420" y1="405" x2="420" y2="415" stroke="#666666" stroke-width="2"/>
<line x1="690" y1="405" x2="690" y2="415" stroke="#666666" stroke-width="2"/>
<text x="555" y="430" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Length l₂</text>

<!-- Circuit connection -->
<rect x="100" y="450" width="600" height="130" fill="none" stroke="#000000" stroke-width="2"/>
<text x="400" y="475" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Circuit Configuration</text>

<!-- Battery -->
<line x1="150" y1="520" x2="150" y2="550" stroke="#000000" stroke-width="2"/>
<line x1="140" y1="520" x2="160" y2="520" stroke="#000000" stroke-width="3"/>
<line x1="145" y1="550" x2="155" y2="550" stroke="#000000" stroke-width="3"/>
<text x="170" y="540" font-family="Arial" font-size="11" fill="#000000">V</text>

<!-- Connecting wires -->
<line x1="150" y1="520" x2="150" y2="300" stroke="#000000" stroke-width="2"/>
<line x1="150" y1="550" x2="150" y2="560" stroke="#000000" stroke-width="2"/>
<line x1="150" y1="560" x2="690" y2="560" stroke="#000000" stroke-width="2"/>
<line x1="690" y1="560" x2="690" y2="300" stroke="#000000" stroke-width="2"/>

<!-- Voltmeter connected to slider -->
<circle cx="550" cy="520" r="30" fill="none" stroke="#000000" stroke-width="3"/>
<text x="550" y="530" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">V</text>
<line x1="420" y1="180" x2="520" y2="520" stroke="#FF0000" stroke-width="2"/>
<line x1="580" y1="520" x2="650" y2="520" stroke="#000000" stroke-width="2"/>
<line x1="650" y1="520" x2="650" y2="560" stroke="#000000" stroke-width="2"/>

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Rheostat / Potentiometer</text>

<!-- Equation box -->
<rect x="50" y="80" width="300" height="140" fill="none" stroke="#000000" stroke-width="2"/>
<text x="200" y="105" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Variable Resistance</text>
<text x="200" y="130" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">R ∝ length</text>
<text x="200" y="150" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">R₁ = ρl₁/A</text>
<text x="200" y="175" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Total: R = R₁ + R₂</text>
<text x="200" y="200" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Slider position controls</text>
<text x="200" y="215" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">effective resistance</text>

<!-- Usage note -->
<text x="400" y="120" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">Used to control current (rheostat)</text>
<text x="400" y="140" font-family="Arial" font-size="13" fill="#666666" text-anchor="middle">or measure voltage (potentiometer)</text>
</g>
</svg>`;

static galvanometerApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="700" height="700" viewBox="0 0 700 700"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Galvanometer Apparatus
</metadata>
<g fill="none" stroke="#000000">
<!-- Outer case -->
<circle cx="350" cy="350" r="150" fill="none" stroke="#000000" stroke-width="4"/>

<!-- Scale -->
<path d="M 230 250 Q 350 220 470 250" stroke="#000000" stroke-width="2" fill="none"/>
<!-- Scale markings -->
<line x1="235" y1="250" x2="240" y2="260" stroke="#000000" stroke-width="1"/>
<line x1="275" y1="235" x2="278" y2="245" stroke="#000000" stroke-width="1"/>
<line x1="315" y1="228" x2="317" y2="238" stroke="#000000" stroke-width="1"/>
<line x1="350" y1="225" x2="350" y2="235" stroke="#000000" stroke-width="2"/>
<line x1="385" y1="228" x2="383" y2="238" stroke="#000000" stroke-width="1"/>
<line x1="425" y1="235" x2="422" y2="245" stroke="#000000" stroke-width="1"/>
<line x1="465" y1="250" x2="460" y2="260" stroke="#000000" stroke-width="1"/>

<!-- Scale numbers -->
<text x="225" y="275" font-family="Arial" font-size="11" fill="#000000">-I</text>
<text x="345" y="215" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">0</text>
<text x="470" y="275" font-family="Arial" font-size="11" fill="#000000">+I</text>

<!-- Pointer/needle (deflected) -->
<line x1="350" y1="350" x2="410" y2="270" stroke="#FF0000" stroke-width="4"/>
<circle cx="350" cy="350" r="8" fill="#000000"/>

<!-- Coil (rectangular) -->
<rect x="310" y="320" width="80" height="60" fill="none" stroke="#000000" stroke-width="3"/>
<text x="350" y="360" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Coil</text>
<text x="350" y="375" font-family="Arial" font-size="10" fill="#666666" text-anchor="middle">N turns</text>

<!-- Permanent magnets (horseshoe shape) -->
<!-- North pole (left) -->
<rect x="220" y="320" width="40" height="60" fill="#DDDDDD" stroke="#000000" stroke-width="3"/>
<text x="240" y="360" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">N</text>

<!-- South pole (right) -->
<rect x="440" y="320" width="40" height="60" fill="#DDDDDD" stroke="#000000" stroke-width="3"/>
<text x="460" y="360" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">S</text>

<!-- Magnetic field lines -->
<line x1="260" y1="340" x2="310" y2="340" stroke="#0000FF" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrowhead-blue)"/>
<line x1="260" y1="360" x2="310" y2="360" stroke="#0000FF" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrowhead-blue)"/>
<text x="285" y="330" font-family="Arial" font-size="10" fill="#0000FF">B</text>

<!-- Spring/suspension -->
<path d="M 350 350 L 350 330 Q 350 320 355 318 Q 360 316 355 314 Q 350 312 355 310 Q 360 308 355 306 Q 350 304 355 302 Q 360 300 350 298" stroke="#000000" stroke-width="2" fill="none"/>
<text x="315" y="310" font-family="Arial" font-size="10" fill="#666666">Spring</text>

<!-- Terminals -->
<circle cx="280" cy="500" r="10" fill="#888888" stroke="#000000" stroke-width="2"/>
<text x="280" y="525" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">−</text>

<circle cx="420" cy="500" r="10" fill="#888888" stroke="#000000" stroke-width="2"/>
<text x="420" y="525" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">+</text>

<!-- Wires to coil -->
<line x1="280" y1="490" x2="320" y2="380" stroke="#000000" stroke-width="2"/>
<line x1="420" y1="490" x2="380" y2="380" stroke="#000000" stroke-width="2"/>

<!-- Current direction indicator -->
<text x="300" y="430" font-family="Arial" font-size="11" fill="#FF0000">I →</text>

<!-- Torque indicator -->
<path d="M 370 330 Q 380 320 390 325" stroke="#00AA00" stroke-width="2" marker-end="url(#arrowhead-green)"/>
<text x="400" y="315" font-family="Arial" font-size="11" fill="#00AA00">τ (torque)</text>

<defs>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#0000FF"/>
  </marker>
  <marker id="arrowhead-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#00AA00"/>
  </marker>
</defs>

<!-- Title -->
<text x="350" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Galvanometer</text>

<!-- Explanation box -->
<rect x="50" y="550" width="600" height="140" fill="none" stroke="#000000" stroke-width="2"/>
<text x="350" y="575" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Principle: Detects Small Currents via Magnetic Deflection</text>
<text x="350" y="600" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Current through coil → Magnetic field created</text>
<text x="350" y="620" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Interaction with permanent magnet field → Torque: τ = NIAB</text>
<text x="350" y="640" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Torque balanced by spring → Deflection ∝ Current</text>
<text x="350" y="665" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Very sensitive - can detect microamperes</text>
<text x="350" y="683" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Used in: ammeters, voltmeters, bridge circuits</text>
</g>
</svg>`;

static cathodeRayTubeApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Cathode Ray Tube (CRT)
</metadata>
<g fill="none" stroke="#000000">
<!-- Vacuum tube envelope -->
<path d="M 100 250 L 100 350 L 200 350 L 200 400 L 850 400 Q 900 400 900 350 L 900 250 Q 900 200 850 200 L 200 200 L 200 250 Z" stroke="#000000" stroke-width="3" fill="none"/>

<!-- Cathode (heated filament) -->
<line x1="120" y1="280" x2="120" y2="320" stroke="#FF0000" stroke-width="4"/>
<path d="M 115 285 Q 118 290 115 295 Q 118 300 115 305 Q 118 310 115 315" stroke="#FF0000" stroke-width="2" fill="none"/>
<text x="90" y="305" font-family="Arial" font-size="11" fill="#000000">Cathode</text>
<text x="90" y="320" font-family="Arial" font-size="10" fill="#666666">(heated)</text>

<!-- Anode (with hole) -->
<line x1="180" y1="270" x2="180" y2="290" stroke="#000000" stroke-width="4"/>
<line x1="180" y1="310" x2="180" y2="330" stroke="#000000" stroke-width="4"/>
<text x="190" y="305" font-family="Arial" font-size="11" fill="#000000">Anode</text>
<text x="190" y="320" font-family="Arial" font-size="10" fill="#000000">+V</text>

<!-- Electron beam -->
<line x1="130" y1="300" x2="850" y2="300" stroke="#0000FF" stroke-width="3" stroke-dasharray="5,5"/>
<text x="250" y="290" font-family="Arial" font-size="11" fill="#0000FF">e⁻ beam</text>

<!-- Electron symbols along beam -->
<circle cx="200" cy="300" r="4" fill="#0000FF"/>
<text x="200" y="308" font-family="Arial" font-size="8" fill="#0000FF" text-anchor="middle">e⁻</text>
<circle cx="350" cy="300" r="4" fill="#0000FF"/>
<text x="350" y="308" font-family="Arial" font-size="8" fill="#0000FF" text-anchor="middle">e⁻</text>
<circle cx="500" cy="300" r="4" fill="#0000FF"/>
<text x="500" y="308" font-family="Arial" font-size="8" fill="#0000FF" text-anchor="middle">e⁻</text>
<circle cx="650" cy="300" r="4" fill="#0000FF"/>
<text x="650" y="308" font-family="Arial" font-size="8" fill="#0000FF" text-anchor="middle">e⁻</text>

<!-- Deflection plates (vertical) -->
<line x1="400" y1="240" x2="500" y2="240" stroke="#000000" stroke-width="3"/>
<line x1="400" y1="360" x2="500" y2="360" stroke="#000000" stroke-width="3"/>
<text x="450" y="230" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">+ Plate</text>
<text x="450" y="380" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">− Plate</text>

<!-- Electric field lines between plates -->
<!-- Electric field lines between plates -->
<line x1="420" y1="250" x2="420" y2="350" stroke="#FF00FF" stroke-width="1" stroke-dasharray="2,2" marker-end="url(#arrowhead-purple)"/>
<line x1="450" y1="250" x2="450" y2="350" stroke="#FF00FF" stroke-width="1" stroke-dasharray="2,2" marker-end="url(#arrowhead-purple)"/>
<line x1="480" y1="250" x2="480" y2="350" stroke="#FF00FF" stroke-width="1" stroke-dasharray="2,2" marker-end="url(#arrowhead-purple)"/>
<text x="510" y="300" font-family="Arial" font-size="10" fill="#FF00FF">E field</text>

<!-- Deflected beam path -->
<path d="M 400 300 Q 450 280 500 270" stroke="#00AA00" stroke-width="3" stroke-dasharray="5,5"/>
<text x="470" y="265" font-family="Arial" font-size="10" fill="#00AA00">Deflected path</text>

<!-- Fluorescent screen -->
<line x1="850" y1="210" x2="850" y2="390" stroke="#000000" stroke-width="5"/>
<text x="860" y="300" font-family="Arial" font-size="12" fill="#000000">Screen</text>

<!-- Spot on screen -->
<circle cx="850" cy="270" r="8" fill="#00FF00" stroke="#000000" stroke-width="2"/>
<text x="865" y="275" font-family="Arial" font-size="11" fill="#00FF00">Spot</text>

<!-- Voltage connections -->
<line x1="400" y1="230" x2="400" y2="150" stroke="#000000" stroke-width="2"/>
<circle cx="400" cy="140" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<text x="385" y="125" font-family="Arial" font-size="11" fill="#000000">+V_d</text>

<line x1="500" y1="370" x2="500" y2="430" stroke="#000000" stroke-width="2"/>
<circle cx="500" cy="440" r="8" fill="none" stroke="#000000" stroke-width="2"/>
<text x="485" y="460" font-family="Arial" font-size="11" fill="#000000">−V_d</text>

<!-- Accelerating voltage -->
<line x1="120" y1="330" x2="120" y2="470" stroke="#000000" stroke-width="2"/>
<line x1="180" y1="330" x2="180" y2="470" stroke="#000000" stroke-width="2"/>
<line x1="120" y1="470" x2="180" y2="470" stroke="#000000" stroke-width="2"/>

<!-- Battery symbol for acceleration -->
<line x1="140" y1="480" x2="140" y2="510" stroke="#000000" stroke-width="2"/>
<line x1="130" y1="480" x2="150" y2="480" stroke="#000000" stroke-width="3"/>
<line x1="135" y1="510" x2="145" y2="510" stroke="#000000" stroke-width="3"/>
<text x="160" y="500" font-family="Arial" font-size="11" fill="#000000">V_acc</text>

<defs>
  <marker id="arrowhead-purple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#FF00FF"/>
  </marker>
</defs>

<!-- Title -->
<text x="500" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Cathode Ray Tube (CRT)</text>

<!-- Explanation box -->
<rect x="50" y="520" width="900" height="70" fill="none" stroke="#000000" stroke-width="2"/>
<text x="500" y="545" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Operation: Heated cathode emits electrons → Accelerated by anode (eV_acc = ½mv²)</text>
<text x="500" y="565" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">→ Deflected by electric field between plates (F = eE) → Strike fluorescent screen</text>
<text x="500" y="583" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Used in: oscilloscopes, old TVs/monitors • Deflection ∝ voltage applied to plates</text>
</g>
</svg>`;

static electromagnetApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Electromagnet Apparatus
</metadata>
<g fill="none" stroke="#000000">
<!-- Iron core -->
<rect x="300" y="150" width="200" height="300" fill="#888888" stroke="#000000" stroke-width="3"/>
<text x="400" y="480" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Iron Core</text>

<!-- Wire coils wrapped around core -->
<ellipse cx="300" cy="200" rx="40" ry="25" fill="none" stroke="#FF6600" stroke-width="3"/>
<ellipse cx="300" cy="240" rx="40" ry="25" fill="none" stroke="#FF6600" stroke-width="3"/>
<ellipse cx="300" cy="280" rx="40" ry="25" fill="none" stroke="#FF6600" stroke-width="3"/>
<ellipse cx="300" cy="320" rx="40" ry="25" fill="none" stroke="#FF6600" stroke-width="3"/>
<ellipse cx="300" cy="360" rx="40" ry="25" fill="none" stroke="#FF6600" stroke-width="3"/>
<ellipse cx="300" cy="400" rx="40" ry="25" fill="none" stroke="#FF6600" stroke-width="3"/>

<!-- Right side coils -->
<ellipse cx="500" cy="200" rx="40" ry="25" fill="none" stroke="#FF6600" stroke-width="3"/>
<ellipse cx="500" cy="240" rx="40" ry="25" fill="none" stroke="#FF6600" stroke-width="3"/>
<ellipse cx="500" cy="280" rx="40" ry="25" fill="none" stroke="#FF6600" stroke-width="3"/>
<ellipse cx="500" cy="320" rx="40" ry="25" fill="none" stroke="#FF6600" stroke-width="3"/>
<ellipse cx="500" cy="360" rx="40" ry="25" fill="none" stroke="#FF6600" stroke-width="3"/>
<ellipse cx="500" cy="400" rx="40" ry="25" fill="none" stroke="#FF6600" stroke-width="3"/>

<!-- Connecting vertical lines for coil -->
<line x1="260" y1="200" x2="260" y2="400" stroke="#FF6600" stroke-width="3"/>
<line x1="540" y1="200" x2="540" y2="400" stroke="#FF6600" stroke-width="3"/>

<!-- Wire leads -->
<line x1="260" y1="200" x2="150" y2="200" stroke="#FF6600" stroke-width="4"/>
<line x1="540" y1="400" x2="650" y2="400" stroke="#FF6600" stroke-width="4"/>

<!-- Battery -->
<circle cx="150" cy="320" r="50" fill="none" stroke="#000000" stroke-width="3"/>
<line x1="130" y1="320" x2="170" y2="320" stroke="#000000" stroke-width="4"/>
<line x1="150" y1="300" x2="150" y2="340" stroke="#000000" stroke-width="4"/>
<text x="150" y="395" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Battery</text>

<!-- Wires to battery -->
<line x1="150" y1="200" x2="150" y2="270" stroke="#FF6600" stroke-width="4"/>
<line x1="650" y1="400" x2="650" y2="320" stroke="#FF6600" stroke-width="4"/>
<line x1="650" y1="320" x2="200" y2="320" stroke="#FF6600" stroke-width="4"/>

<!-- Current direction indicators -->
<text x="210" y="190" font-family="Arial" font-size="12" fill="#FF0000">I →</text>
<text x="580" y="390" font-family="Arial" font-size="12" fill="#FF0000">I →</text>

<!-- Magnetic field lines -->
<!-- North pole top -->
<path d="M 400 120 Q 350 100 300 90" stroke="#0000FF" stroke-width="2" stroke-dasharray="3,3" marker-start="url(#arrowhead-blue-left)"/>
<path d="M 400 120 Q 450 100 500 90" stroke="#0000FF" stroke-width="2" stroke-dasharray="3,3" marker-start="url(#arrowhead-blue-left)"/>
<path d="M 400 120 Q 400 80 400 50" stroke="#0000FF" stroke-width="2" stroke-dasharray="3,3" marker-start="url(#arrowhead-blue-left)"/>

<!-- Field lines going down sides -->
<path d="M 240 200 Q 200 250 180 300 Q 160 350 180 400 Q 200 450 240 480" stroke="#0000FF" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrowhead-blue)"/>
<path d="M 560 200 Q 600 250 620 300 Q 640 350 620 400 Q 600 450 560 480" stroke="#0000FF" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrowhead-blue)"/>

<!-- South pole bottom -->
<path d="M 400 480 Q 350 500 300 510" stroke="#0000FF" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrowhead-blue)"/>
<path d="M 400 480 Q 450 500 500 510" stroke="#0000FF" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrowhead-blue)"/>
<path d="M 400 480 Q 400 520 400 550" stroke="#0000FF" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrowhead-blue)"/>

<!-- Pole labels -->
<text x="400" y="140" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">N</text>
<text x="400" y="500" font-family="Arial" font-size="18" fill="#000000" text-anchor="middle" font-weight="bold">S</text>

<!-- Iron filings on paper (demonstrating field) -->
<circle cx="300" cy="90" r="3" fill="#000000"/>
<circle cx="350" cy="100" r="3" fill="#000000"/>
<circle cx="450" cy="100" r="3" fill="#000000"/>
<circle cx="500" cy="90" r="3" fill="#000000"/>
<circle cx="400" cy="50" r="3" fill="#000000"/>

<!-- Attracted object (nail) -->
<rect x="380" y="60" width="40" height="10" fill="#AAAAAA" stroke="#000000" stroke-width="2"/>
<text x="420" y="50" font-family="Arial" font-size="11" fill="#000000">Iron nail</text>
<text x="420" y="65" font-family="Arial" font-size="10" fill="#666666">(attracted)</text>

<defs>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#0000FF"/>
  </marker>
  <marker id="arrowhead-blue-left" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
    <polygon points="10 0, 0 3, 10 6" fill="#0000FF"/>
  </marker>
</defs>

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Electromagnet</text>

<!-- Explanation box -->
<rect x="50" y="520" width="700" height="70" fill="none" stroke="#000000" stroke-width="2"/>
<text x="400" y="545" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Current through coil creates magnetic field: B = μ₀nI (enhanced by iron core)</text>
<text x="400" y="565" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">n = turns per length, μ₀ = permeability, iron core multiplies field strength</text>
<text x="400" y="583" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Reversing current reverses poles • Used in: motors, relays, speakers, MRI machines</text>
</g>
</svg>`;

static electricMotorApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="800" viewBox="0 0 800 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>
DC Electric Motor
</metadata>
<g fill="none" stroke="#000000">
<!-- Permanent magnets -->
<!-- North pole (left) -->
<rect x="150" y="300" width="80" height="200" fill="#DDDDDD" stroke="#000000" stroke-width="3"/>
<text x="190" y="410" font-family="Arial" font-size="30" fill="#000000" text-anchor="middle" font-weight="bold">N</text>

<!-- South pole (right) -->
<rect x="570" y="300" width="80" height="200" fill="#DDDDDD" stroke="#000000" stroke-width="3"/>
<text x="610" y="410" font-family="Arial" font-size="30" fill="#000000" text-anchor="middle" font-weight="bold">S</text>

<!-- Magnetic field lines -->
<line x1="230" y1="350" x2="570" y2="350" stroke="#0000FF" stroke-width="2" stroke-dasharray="5,5" marker-end="url(#arrowhead-blue)"/>
<line x1="230" y1="400" x2="570" y2="400" stroke="#0000FF" stroke-width="2" stroke-dasharray="5,5" marker-end="url(#arrowhead-blue)"/>
<line x1="230" y1="450" x2="570" y2="450" stroke="#0000FF" stroke-width="2" stroke-dasharray="5,5" marker-end="url(#arrowhead-blue)"/>
<text x="400" y="370" font-family="Arial" font-size="12" fill="#0000FF">B field →</text>

<!-- Rotating coil (armature) -->
<rect x="350" y="320" width="100" height="160" fill="none" stroke="#FF6600" stroke-width="4"/>
<text x="400" y="410" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Coil</text>

<!-- Axle/shaft -->
<line x1="400" y1="250" x2="400" y2="320" stroke="#000000" stroke-width="5"/>
<line x1="400" y1="480" x2="400" y2="550" stroke="#000000" stroke-width="5"/>
<text x="420" y="280" font-family="Arial" font-size="11" fill="#000000">Shaft</text>

<!-- Rotation indicator -->
<path d="M 450 400 Q 460 370 450 340" stroke="#00AA00" stroke-width="3" marker-end="url(#arrowhead-green)"/>
<text x="475" y="375" font-family="Arial" font-size="14" fill="#00AA00" font-weight="bold">⟲</text>
<text x="500" y="385" font-family="Arial" font-size="12" fill="#00AA00">Rotation</text>

<!-- Commutator (split ring) -->
<path d="M 380 530 Q 380 545 400 545 Q 420 545 420 530" stroke="#888888" stroke-width="4" fill="none"/>
<path d="M 380 550 Q 380 565 400 565 Q 420 565 420 550" stroke="#888888" stroke-width="4" fill="none"/>
<line x1="400" y1="545" x2="400" y2="550" stroke="#FFFFFF" stroke-width="3"/>
<text x="350" y="560" font-family="Arial" font-size="11" fill="#000000">Commutator</text>
<text x="350" y="575" font-family="Arial" font-size="10" fill="#666666">(split ring)</text>

<!-- Brushes -->
<rect x="340" y="540" width="15" height="20" fill="#666666" stroke="#000000" stroke-width="2"/>
<text x="310" y="555" font-family="Arial" font-size="10" fill="#000000">Brush</text>

<rect x="445" y="540" width="15" height="20" fill="#666666" stroke="#000000" stroke-width="2"/>
<text x="465" y="555" font-family="Arial" font-size="10" fill="#000000">Brush</text>

<!-- Battery connections -->
<line x1="347" y1="550" x2="280" y2="550" stroke="#000000" stroke-width="3"/>
<line x1="460" y1="550" x2="520" y2="550" stroke="#000000" stroke-width="3"/>

<!-- Battery -->
<line x1="280" y1="540" x2="280" y2="560" stroke="#000000" stroke-width="3"/>
<line x1="270" y1="540" x2="290" y2="540" stroke="#000000" stroke-width="4"/>
<line x1="275" y1="560" x2="285" y2="560" stroke="#000000" stroke-width="4"/>
<text x="250" y="555" font-family="Arial" font-size="11" fill="#000000">−</text>

<line x1="520" y1="540" x2="520" y2="560" stroke="#000000" stroke-width="3"/>
<line x1="510" y1="540" x2="530" y2="540" stroke="#000000" stroke-width="4"/>
<line x1="515" y1="560" x2="525" y2="560" stroke="#000000" stroke-width="4"/>
<text x="535" y="555" font-family="Arial" font-size="11" fill="#000000">+</text>

<!-- Current direction in coil -->
<text x="330" y="370" font-family="Arial" font-size="14" fill="#FF0000">⊙</text>
<text x="470" y="370" font-family="Arial" font-size="14" fill="#FF0000">⊗</text>
<text x="310" y="370" font-family="Arial" font-size="10" fill="#FF0000">I out</text>
<text x="480" y="370" font-family="Arial" font-size="10" fill="#FF0000">I in</text>

<!-- Force vectors on coil sides -->
<line x1="340" y1="380" x2="320" y2="420" stroke="#00AA00" stroke-width="4" marker-end="url(#arrowhead-green)"/>
<text x="305" y="410" font-family="Arial" font-size="13" fill="#00AA00" font-weight="bold">F</text>

<line x1="460" y1="380" x2="480" y2="420" stroke="#00AA00" stroke-width="4" marker-end="url(#arrowhead-green)"/>
<text x="490" y="410" font-family="Arial" font-size="13" fill="#00AA00" font-weight="bold">F</text>

<defs>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#0000FF"/>
  </marker>
  <marker id="arrowhead-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#00AA00"/>
  </marker>
</defs>

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">DC Electric Motor</text>

<!-- Explanation box -->
<rect x="50" y="630" width="700" height="160" fill="none" stroke="#000000" stroke-width="2"/>
<text x="400" y="655" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Principle: Converts Electrical Energy to Mechanical Energy</text>
<text x="400" y="680" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">1. Current through coil in magnetic field → Force: F = BIL</text>
<text x="400" y="700" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2. Forces on opposite sides create torque → Coil rotates</text>
<text x="400" y="720" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">3. Commutator reverses current every half turn → Continuous rotation</text>
<text x="400" y="745" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Torque: τ = NIAB sin(θ) where N = turns, I = current, A = coil area, B = field</text>
<text x="400" y="765" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Brushes maintain electrical contact with rotating commutator</text>
<text x="400" y="783" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Used in: power tools, fans, toys, electric vehicles</text>
</g>
</svg>`;

static electricGeneratorApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="800" viewBox="0 0 800 800"
 preserveAspectRatio="xMidYMid meet">
<metadata>
AC Electric Generator
</metadata>
<g fill="none" stroke="#000000">
<!-- Permanent magnets -->
<!-- North pole (left) -->
<rect x="150" y="300" width="80" height="200" fill="#DDDDDD" stroke="#000000" stroke-width="3"/>
<text x="190" y="410" font-family="Arial" font-size="30" fill="#000000" text-anchor="middle" font-weight="bold">N</text>

<!-- South pole (right) -->
<rect x="570" y="300" width="80" height="200" fill="#DDDDDD" stroke="#000000" stroke-width="3"/>
<text x="610" y="410" font-family="Arial" font-size="30" fill="#000000" text-anchor="middle" font-weight="bold">S</text>

<!-- Magnetic field lines -->
<line x1="230" y1="350" x2="570" y2="350" stroke="#0000FF" stroke-width="2" stroke-dasharray="5,5" marker-end="url(#arrowhead-blue)"/>
<line x1="230" y1="400" x2="570" y2="400" stroke="#0000FF" stroke-width="2" stroke-dasharray="5,5" marker-end="url(#arrowhead-blue)"/>
<line x1="230" y1="450" x2="570" y2="450" stroke="#0000FF" stroke-width="2" stroke-dasharray="5,5" marker-end="url(#arrowhead-blue)"/>
<text x="400" y="370" font-family="Arial" font-size="12" fill="#0000FF">B field →</text>

<!-- Rotating coil -->
<rect x="350" y="320" width="100" height="160" fill="none" stroke="#FF6600" stroke-width="4"/>

<!-- Axle/shaft -->
<line x1="400" y1="250" x2="400" y2="320" stroke="#000000" stroke-width="5"/>
<line x1="400" y1="480" x2="400" y2="550" stroke="#000000" stroke-width="5"/>

<!-- Rotation indicator -->
<path d="M 450 400 Q 460 370 450 340" stroke="#00AA00" stroke-width="3" marker-end="url(#arrowhead-green)"/>
<text x="475" y="375" font-family="Arial" font-size="14" fill="#00AA00" font-weight="bold">⟲</text>
<text x="500" y="385" font-family="Arial" font-size="12" fill="#00AA00">ω</text>

<!-- Slip rings (continuous rings, not split) -->
<ellipse cx="400" cy="540" rx="25" ry="8" fill="#888888" stroke="#000000" stroke-width="2"/>
<ellipse cx="400" cy="555" rx="25" ry="8" fill="#888888" stroke="#000000" stroke-width="2"/>
<text x="350" y="550" font-family="Arial" font-size="11" fill="#000000">Slip rings</text>

<!-- Brushes -->
<rect x="340" y="535" width="15" height="20" fill="#666666" stroke="#000000" stroke-width="2"/>
<rect x="445" y="550" width="15" height="20" fill="#666666" stroke="#000000" stroke-width="2"/>
<text x="310" y="550" font-family="Arial" font-size="10" fill="#000000">Brush</text>

<!-- Load/External circuit -->
<line x1="347" y1="545" x2="280" y2="545" stroke="#000000" stroke-width="3"/>
<line x1="460" y1="560" x2="520" y2="560" stroke="#000000" stroke-width="3"/>

<!-- Resistor (load) -->
<path d="M 280 545 L 285 550 L 290 540 L 295 550 L 300 540 L 305 550 L 310 540 L 315 550 L 320 545" stroke="#000000" stroke-width="3" fill="none"/>
<line x1="320" y1="545" x2="520" y2="545" stroke="#000000" stroke-width="3"/>
<line x1="520" y1="545" x2="520" y2="560" stroke="#000000" stroke-width="3"/>
<text x="300" y="530" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Load</text>

<!-- Induced EMF indicator -->
<text x="400" y="250" font-family="Arial" font-size="13" fill="#FF0000" text-anchor="middle" font-weight="bold">EMF induced</text>
<text x="400" y="270" font-family="Arial" font-size="12" fill="#FF0000" text-anchor="middle">ε = NABω sin(ωt)</text>

<!-- Flux change illustration -->
<path d="M 350 400 L 450 400" stroke="#FF00FF" stroke-width="3" stroke-dasharray="5,5"/>
<text x="470" y="405" font-family="Arial" font-size="11" fill="#FF00FF">Φ changing</text>

<defs>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#0000FF"/>
  </marker>
  <marker id="arrowhead-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#00AA00"/>
  </marker>
</defs>

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">AC Electric Generator</text>

<!-- Output waveform -->
<rect x="50" y="50" width="300" height="150" fill="none" stroke="#000000" stroke-width="2"/>
<text x="200" y="75" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">AC Output</text>

<!-- Sine wave -->
<path d="M 70 125 Q 110 75 150 125 Q 190 175 230 125 Q 270 75 310 125 Q 320 145 330 175" stroke="#FF0000" stroke-width="3" fill="none"/>

<!-- Axes -->
<line x1="70" y1="125" x2="330" y2="125" stroke="#000000" stroke-width="1"/>
<line x1="70" y1="125" x2="330" y2="125" stroke="#000000" stroke-width="1"/>
<line x1="70" y1="75" x2="70" y2="175" stroke="#000000" stroke-width="1"/>
<text x="340" y="130" font-family="Arial" font-size="10" fill="#000000">t</text>
<text x="60" y="70" font-family="Arial" font-size="10" fill="#000000">ε</text>

<!-- Explanation box -->
<rect x="50" y="630" width="700" height="160" fill="none" stroke="#000000" stroke-width="2"/>
<text x="400" y="655" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Principle: Converts Mechanical Energy to Electrical Energy</text>
<text x="400" y="680" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">1. Coil rotated in magnetic field (by turbine/engine)</text>
<text x="400" y="700" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">2. Magnetic flux through coil changes → EMF induced (Faraday's Law)</text>
<text x="400" y="720" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">3. Slip rings maintain continuous contact → AC output</text>
<text x="400" y="745" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">ε = -dΦ/dt = NABω sin(ωt) where Φ = BA cos(ωt)</text>
<text x="400" y="765" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Frequency: f = ω/2π • Unlike motor, slip rings (not commutator) produce AC</text>
<text x="400" y="783" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Used in: power plants, wind turbines, hydroelectric dams</text>
</g>
</svg>`;


// ===== OPTICS (Continued) =====

static planeMirrorRayDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Plane Mirror Ray Diagram
</metadata>
<g fill="none" stroke="#000000">
<!-- Mirror (vertical line) -->
<line x1="400" y1="100" x2="400" y2="500" stroke="#000000" stroke-width="4"/>
<text x="420" y="300" font-family="Arial" font-size="14" fill="#000000">Mirror</text>

<!-- Mirror backing (hatched) -->
<path d="M 405 110 L 415 120 M 405 140 L 415 150 M 405 170 L 415 180 M 405 200 L 415 210 M 405 230 L 415 240 M 405 260 L 415 270 M 405 290 L 415 300 M 405 320 L 415 330 M 405 350 L 415 360 M 405 380 L 415 390 M 405 410 L 415 420 M 405 440 L 415 450 M 405 470 L 415 480" stroke="#000000" stroke-width="2"/>

<!-- Object (arrow on left) -->
<line x1="250" y1="350" x2="250" y2="250" stroke="#000000" stroke-width="3" marker-end="url(#arrowhead-up)"/>
<text x="230" y="300" font-family="Arial" font-size="14" fill="#000000">Object</text>
<circle cx="250" cy="350" r="3" fill="#000000"/>

<!-- Image (arrow on right - virtual, dashed) -->
<line x1="550" y1="350" x2="550" y2="250" stroke="#666666" stroke-width="3" stroke-dasharray="5,5" marker-end="url(#arrowhead-up-gray)"/>
<text x="570" y="300" font-family="Arial" font-size="14" fill="#666666">Image</text>
<text x="570" y="320" font-family="Arial" font-size="12" fill="#666666">(virtual)</text>
<circle cx="550" cy="350" r="3" fill="#666666"/>

<!-- Incident rays -->
<line x1="250" y1="250" x2="400" y2="300" stroke="#FF0000" stroke-width="2"/>
<line x1="250" y1="300" x2="400" y2="350" stroke="#FF0000" stroke-width="2"/>

<!-- Reflected rays -->
<line x1="400" y1="300" x2="150" y2="200" stroke="#FF0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<line x1="400" y1="350" x2="150" y2="380" stroke="#FF0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>

<!-- Virtual rays behind mirror (dashed) -->
<line x1="400" y1="300" x2="550" y2="250" stroke="#666666" stroke-width="2" stroke-dasharray="3,3"/>
<line x1="400" y1="350" x2="550" y2="350" stroke="#666666" stroke-width="2" stroke-dasharray="3,3"/>

<!-- Normal lines -->
<line x1="400" y1="300" x2="380" y2="300" stroke="#0000FF" stroke-width="1" stroke-dasharray="2,2"/>
<text x="365" y="305" font-family="Arial" font-size="10" fill="#0000FF">N</text>
<line x1="400" y1="350" x2="380" y2="350" stroke="#0000FF" stroke-width="1" stroke-dasharray="2,2"/>

<!-- Angle markings -->
<path d="M 390 305 Q 385 300 390 295" stroke="#000000" stroke-width="1" fill="none"/>
<text x="375" y="292" font-family="Arial" font-size="10" fill="#000000">θᵢ</text>
<path d="M 390 295 Q 385 300 390 305" stroke="#000000" stroke-width="1" fill="none"/>
<text x="375" y="318" font-family="Arial" font-size="10" fill="#000000">θᵣ</text>

<!-- Distance markers -->
<line x1="250" y1="370" x2="400" y2="370" stroke="#666666" stroke-width="1" stroke-dasharray="2,2"/>
<line x1="250" y1="365" x2="250" y2="375" stroke="#666666" stroke-width="2"/>
<line x1="400" y1="365" x2="400" y2="375" stroke="#666666" stroke-width="2"/>
<text x="325" y="390" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">d</text>

<line x1="400" y1="380" x2="550" y2="380" stroke="#666666" stroke-width="1" stroke-dasharray="2,2"/>
<line x1="400" y1="375" x2="400" y2="385" stroke="#666666" stroke-width="2"/>
<line x1="550" y1="375" x2="550" y2="385" stroke="#666666" stroke-width="2"/>
<text x="475" y="400" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">d</text>

<defs>
  <marker id="arrowhead-up" markerWidth="10" markerHeight="10" refX="3" refY="0" orient="auto">
    <polygon points="0 0, 3 10, 6 0" fill="#000000"/>
  </marker>
  <marker id="arrowhead-up-gray" markerWidth="10" markerHeight="10" refX="3" refY="0" orient="auto">
    <polygon points="0 0, 3 10, 6 0" fill="#666666"/>
  </marker>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#FF0000"/>
  </marker>
</defs>

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Plane Mirror Ray Diagram</text>

<!-- Properties box -->
<rect x="50" y="480" width="700" height="100" fill="none" stroke="#000000" stroke-width="2"/>
<text x="400" y="505" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Law of Reflection: θᵢ = θᵣ</text>
<text x="400" y="530" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Image properties: Virtual, upright, same size, laterally inverted</text>
<text x="400" y="550" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Object distance = Image distance from mirror</text>
<text x="400" y="570" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Magnification m = 1 (no size change)</text>
</g>
</svg>`;

static concaveMirrorRayDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Concave Mirror Ray Diagram
</metadata>
<g fill="none" stroke="#000000">
<!-- Principal axis -->
<line x1="50" y1="300" x2="850" y2="300" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Concave mirror (curved) -->
<path d="M 700 150 Q 750 300 700 450" stroke="#000000" stroke-width="4" fill="none"/>

<!-- Mirror backing (hatched) -->
<path d="M 705 160 L 715 170 M 710 190 L 720 200 M 715 220 L 725 230 M 720 250 L 730 260 M 723 280 L 733 290 M 720 310 L 730 320 M 715 340 L 725 350 M 710 370 L 720 380 M 705 400 L 715 410 M 700 430 L 710 440" stroke="#000000" stroke-width="2"/>

<!-- Pole (P) -->
<circle cx="700" cy="300" r="4" fill="#000000"/>
<text x="700" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">P</text>

<!-- Center of curvature (C) -->
<circle cx="500" cy="300" r="4" fill="#000000"/>
<text x="500" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">C</text>

<!-- Focal point (F) -->
<circle cx="600" cy="300" r="4" fill="#000000"/>
<text x="600" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">F</text>

<!-- Focal length marker -->
<line x1="600" y1="290" x2="700" y2="290" stroke="#666666" stroke-width="1" stroke-dasharray="3,3"/>
<text x="650" y="280" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">f</text>

<!-- Object (beyond C) -->
<line x1="300" y1="300" x2="300" y2="200" stroke="#000000" stroke-width="3" marker-end="url(#arrowhead-up)"/>
<text x="280" y="250" font-family="Arial" font-size="14" fill="#000000">O</text>

<!-- Ray 1: Parallel to axis, through F -->
<line x1="300" y1="200" x2="680" y2="200" stroke="#FF0000" stroke-width="2"/>
<line x1="680" y1="200" x2="600" y2="300" stroke="#FF0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<text x="500" y="190" font-family="Arial" font-size="11" fill="#FF0000">Ray 1</text>

<!-- Ray 2: Through C, reflects back -->
<line x1="300" y1="200" x2="500" y2="300" stroke="#0000FF" stroke-width="2"/>
<line x1="500" y1="300" x2="300" y2="400" stroke="#0000FF" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<text x="380" y="240" font-family="Arial" font-size="11" fill="#0000FF">Ray 2</text>

<!-- Ray 3: Through F, parallel after reflection -->
<line x1="300" y1="200" x2="600" y2="300" stroke="#00AA00" stroke-width="2"/>
<line x1="670" y1="240" x2="300" y2="240" stroke="#00AA00" stroke-width="2" marker-end="url(#arrowhead-green)"/>
<text x="450" y="270" font-family="Arial" font-size="11" fill="#00AA00">Ray 3</text>

<!-- Image (inverted, real) -->
<line x1="400" y1="300" x2="400" y2="350" stroke="#000000" stroke-width="3" marker-start="url(#arrowhead-down)"/>
<text x="420" y="330" font-family="Arial" font-size="14" fill="#000000">I</text>
<text x="420" y="350" font-family="Arial" font-size="12" fill="#666666">(real, inverted)</text>

<!-- Distance labels -->
<line x1="300" y1="320" x2="700" y2="320" stroke="#666666" stroke-width="1" stroke-dasharray="2,2"/>
<text x="300" y="340" font-family="Arial" font-size="11" fill="#666666">u</text>
<text x="400" y="340" font-family="Arial" font-size="11" fill="#666666">v</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrowhead-up" markerWidth="10" markerHeight="10" refX="3" refY="0" orient="auto">
    <polygon points="0 0, 3 10, 6 0" fill="#000000"/>
  </marker>
  <marker id="arrowhead-down" markerWidth="10" markerHeight="10" refX="3" refY="10" orient="auto">
    <polygon points="0 10, 3 0, 6 10" fill="#000000"/>
  </marker>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#FF0000"/>
  </marker>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#0000FF"/>
  </marker>
  <marker id="arrowhead-green" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
    <polygon points="10 0, 0 3, 10 6" fill="#00AA00"/>
  </marker>
</defs>

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Concave Mirror - Ray Diagram</text>

<!-- Equation box -->
<rect x="50" y="480" width="800" height="100" fill="none" stroke="#000000" stroke-width="2"/>
<text x="450" y="505" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Mirror Equation: 1/f = 1/u + 1/v</text>
<text x="450" y="530" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Magnification: m = -v/u = h'/h</text>
<text x="450" y="555" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Object beyond C → Real, inverted, diminished image between F and C</text>
<text x="450" y="573" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">f = R/2 (focal length = radius/2)</text>
</g>
</svg>`;

static convexMirrorRayDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Convex Mirror Ray Diagram
</metadata>
<g fill="none" stroke="#000000">
<!-- Principal axis -->
<line x1="50" y1="300" x2="850" y2="300" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Convex mirror (curved outward) -->
<path d="M 300 150 Q 250 300 300 450" stroke="#000000" stroke-width="4" fill="none"/>

<!-- Mirror backing (behind mirror - hatched) -->
<path d="M 295 160 L 285 170 M 290 190 L 280 200 M 285 220 L 275 230 M 280 250 L 270 260 M 277 280 L 267 290 M 280 310 L 270 320 M 285 340 L 275 350 M 290 370 L 280 380 M 295 400 L 285 410 M 300 430 L 290 440" stroke="#000000" stroke-width="2"/>

<!-- Pole (P) -->
<circle cx="300" cy="300" r="4" fill="#000000"/>
<text x="300" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">P</text>

<!-- Focal point (F) - behind mirror, virtual -->
<circle cx="200" cy="300" r="4" fill="#666666"/>
<text x="200" y="330" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">F</text>

<!-- Center of curvature (C) - behind mirror -->
<circle cx="100" cy="300" r="4" fill="#666666"/>
<text x="100" y="330" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">C</text>

<!-- Object -->
<line x1="500" y1="300" x2="500" y2="200" stroke="#000000" stroke-width="3" marker-end="url(#arrowhead-up)"/>
<text x="520" y="250" font-family="Arial" font-size="14" fill="#000000">Object</text>

<!-- Ray 1: Parallel to axis, diverges as if from F -->
<line x1="500" y1="200" x2="310" y2="240" stroke="#FF0000" stroke-width="2"/>
<line x1="310" y1="240" x2="600" y2="160" stroke="#FF0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<line x1="310" y1="240" x2="200" y2="300" stroke="#FF0000" stroke-width="2" stroke-dasharray="3,3"/>
<text x="400" y="220" font-family="Arial" font-size="11" fill="#FF0000">Ray 1</text>

<!-- Ray 2: Toward C, reflects symmetrically -->
<line x1="500" y1="200" x2="270" y2="280" stroke="#0000FF" stroke-width="2"/>
<line x1="270" y1="280" x2="550" y2="140" stroke="#0000FF" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<line x1="270" y1="280" x2="100" y2="300" stroke="#0000FF" stroke-width="2" stroke-dasharray="3,3"/>
<text x="370" y="270" font-family="Arial" font-size="11" fill="#0000FF">Ray 2</text>

<!-- Ray 3: Toward F, parallel after reflection -->
<line x1="500" y1="200" x2="285" y2="260" stroke="#00AA00" stroke-width="2"/>
<line x1="285" y1="260" x2="580" y2="150" stroke="#00AA00" stroke-width="2" marker-end="url(#arrowhead-green)"/>
<text x="430" y="180" font-family="Arial" font-size="11" fill="#00AA00">Ray 3</text>

<!-- Virtual image (behind mirror, upright, diminished) -->
<line x1="250" y1="300" x2="250" y2="260" stroke="#666666" stroke-width="3" stroke-dasharray="5,5" marker-end="url(#arrowhead-up-gray)"/>
<text x="230" y="280" font-family="Arial" font-size="14" fill="#666666">Image</text>
<text x="210" y="300" font-family="Arial" font-size="12" fill="#666666">(virtual)</text>

<!-- Backward extensions of reflected rays (dashed) -->
<line x1="310" y1="240" x2="250" y2="260" stroke="#666666" stroke-width="1" stroke-dasharray="2,2"/>
<line x1="270" y1="280" x2="250" y2="270" stroke="#666666" stroke-width="1" stroke-dasharray="2,2"/>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrowhead-up" markerWidth="10" markerHeight="10" refX="3" refY="0" orient="auto">
    <polygon points="0 0, 3 10, 6 0" fill="#000000"/>
  </marker>
  <marker id="arrowhead-up-gray" markerWidth="10" markerHeight="10" refX="3" refY="0" orient="auto">
    <polygon points="0 0, 3 10, 6 0" fill="#666666"/>
  </marker>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#FF0000"/>
  </marker>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#0000FF"/>
  </marker>
  <marker id="arrowhead-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#00AA00"/>
  </marker>
</defs>

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Convex Mirror - Ray Diagram</text>

<!-- Equation box -->
<rect x="50" y="480" width="800" height="100" fill="none" stroke="#000000" stroke-width="2"/>
<text x="450" y="505" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">1/f = 1/u + 1/v (f is negative for convex)</text>
<text x="450" y="530" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Magnification: m = -v/u (always positive, upright)</text>
<text x="450" y="555" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Image always: Virtual, upright, diminished, between P and F</text>
<text x="450" y="573" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Used in: rear-view mirrors, security mirrors (wide field of view)</text>
</g>
</svg>`;

static concaveLensRayDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Concave Lens Ray Diagram
</metadata>
<g fill="none" stroke="#000000">
<!-- Principal axis -->
<line x1="50" y1="300" x2="950" y2="300" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Concave lens (diverging) -->
<path d="M 450 150 Q 480 300 450 450" stroke="#000000" stroke-width="4" fill="none"/>
<path d="M 550 150 Q 520 300 550 450" stroke="#000000" stroke-width="4" fill="none"/>
<line x1="450" y1="150" x2="550" y2="150" stroke="#000000" stroke-width="2"/>
<line x1="450" y1="450" x2="550" y2="450" stroke="#000000" stroke-width="2"/>

<!-- Optical center -->
<circle cx="500" cy="300" r="3" fill="#000000"/>
<text x="500" y="330" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">O</text>

<!-- Focal points (virtual for concave lens) -->
<circle cx="350" cy="300" r="4" fill="#666666"/>
<text x="350" y="330" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">F</text>
<circle cx="650" cy="300" r="4" fill="#666666"/>
<text x="650" y="330" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">F'</text>

<!-- Focal length -->
<line x1="350" y1="290" x2="500" y2="290" stroke="#666666" stroke-width="1" stroke-dasharray="3,3"/>
<text x="425" y="280" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">f</text>

<!-- Object -->
<line x1="250" y1="300" x2="250" y2="200" stroke="#000000" stroke-width="3" marker-end="url(#arrowhead-up)"/>
<text x="230" y="250" font-family="Arial" font-size="14" fill="#000000">Object</text>

<!-- Ray 1: Parallel to axis, diverges as if from F -->
<line x1="250" y1="200" x2="500" y2="200" stroke="#FF0000" stroke-width="2"/>
<line x1="500" y1="200" x2="750" y2="100" stroke="#FF0000" stroke-width="2" marker-end="url(#arrowhead-red)"/>
<line x1="500" y1="200" x2="350" y2="300" stroke="#FF0000" stroke-width="2" stroke-dasharray="3,3"/>
<text x="375" y="190" font-family="Arial" font-size="11" fill="#FF0000">Ray 1</text>

<!-- Ray 2: Through optical center (straight) -->
<line x1="250" y1="200" x2="750" y2="350" stroke="#0000FF" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
<text x="600" y="270" font-family="Arial" font-size="11" fill="#0000FF">Ray 2</text>

<!-- Ray 3: Toward F', parallel after lens -->
<line x1="250" y1="200" x2="470" y2="260" stroke="#00AA00" stroke-width="2"/>
<line x1="530" y1="280" x2="750" y2="280" stroke="#00AA00" stroke-width="2" marker-end="url(#arrowhead-green)"/>
<text x="650" y="270" font-family="Arial" font-size="11" fill="#00AA00">Ray 3</text>

<!-- Virtual image (diminished, upright, on same side as object) -->
<line x1="330" y1="300" x2="330" y2="260" stroke="#666666" stroke-width="3" stroke-dasharray="5,5" marker-end="url(#arrowhead-up-gray)"/>
<text x="310" y="280" font-family="Arial" font-size="14" fill="#666666">Image</text>
<text x="290" y="300" font-family="Arial" font-size="12" fill="#666666">(virtual)</text>

<!-- Backward extensions (dashed) -->
<line x1="500" y1="200" x2="330" y2="260" stroke="#666666" stroke-width="1" stroke-dasharray="2,2"/>
<line x1="500" y1="270" x2="330" y2="260" stroke="#666666" stroke-width="1" stroke-dasharray="2,2"/>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrowhead-up" markerWidth="10" markerHeight="10" refX="3" refY="0" orient="auto">
    <polygon points="0 0, 3 10, 6 0" fill="#000000"/>
  </marker>
  <marker id="arrowhead-up-gray" markerWidth="10" markerHeight="10" refX="3" refY="0" orient="auto">
    <polygon points="0 0, 3 10, 6 0" fill="#666666"/>
  </marker>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#FF0000"/>
  </marker>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#0000FF"/>
  </marker>
  <marker id="arrowhead-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#00AA00"/>
  </marker>
</defs>

<!-- Title -->
<text x="500" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Concave Lens - Ray Diagram</text>

<!-- Equation box -->
<rect x="100" y="480" width="800" height="100" fill="none" stroke="#000000" stroke-width="2"/>
<text x="500" y="505" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Lens Equation: 1/f = 1/u + 1/v (f is negative)</text>
<text x="500" y="530" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Magnification: m = v/u (always positive)</text>
<text x="500" y="555" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Image always: Virtual, upright, diminished, between lens and F</text>
<text x="500" y="573" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Used in: eyeglasses for myopia (nearsightedness), peepholes</text>
</g>
</svg>`;

static snellsLawRefractionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Snell's Law - Refraction at Interface
</metadata>
<g fill="none" stroke="#000000">
<!-- Interface between media -->
<line x1="100" y1="300" x2="700" y2="300" stroke="#000000" stroke-width="3"/>
<text x="720" y="305" font-family="Arial" font-size="13" fill="#000000">Interface</text>

<!-- Medium labels -->
<text x="400" y="150" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">Air (n₁ = 1.0)</text>
<text x="400" y="450" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">Glass (n₂ = 1.5)</text>

<!-- Shading to distinguish media -->
<rect x="100" y="300" width="600" height="250" fill="#CCCCCC" opacity="0.2"/>

<!-- Normal line -->
<line x1="400" y1="150" x2="400" y2="450" stroke="#0000FF" stroke-width="2" stroke-dasharray="5,5"/>
<text x="410" y="170" font-family="Arial" font-size="12" fill="#0000FF">Normal</text>

<!-- Incident ray -->
<line x1="250" y1="150" x2="400" y2="300" stroke="#FF0000" stroke-width="3" marker-end="url(#arrowhead-red)"/>
<text x="300" y="210" font-family="Arial" font-size="13" fill="#FF0000">Incident ray</text>

<!-- Refracted ray -->
<line x1="400" y1="300" x2="470" y2="450" stroke="#00AA00" stroke-width="3" marker-end="url(#arrowhead-green)"/>
<text x="440" y="390" font-family="Arial" font-size="13" fill="#00AA00">Refracted ray</text>

<!-- Incident angle -->
<path d="M 400 250 Q 380 270 370 280" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="360" y="270" font-family="Arial" font-size="13" fill="#000000">θ₁</text>

<!-- Refraction angle -->
<path d="M 400 350 Q 410 360 420 370" stroke="#000000" stroke-width="1.5" fill="none"/>
<text x="425" y="365" font-family="Arial" font-size="13" fill="#000000">θ₂</text>

<!-- Right angle marker at interface -->
<path d="M 395 295 L 395 305 L 405 305" stroke="#000000" stroke-width="1" fill="none"/>

<!-- Angle measurements -->
<text x="320" y="280" font-family="Arial" font-size="12" fill="#666666">θ₁ = 30°</text>
<text x="450" y="340" font-family="Arial" font-size="12" fill="#666666">θ₂ ≈ 19.5°</text>

<!-- Speed labels -->
<text x="150" y="200" font-family="Arial" font-size="11" fill="#666666">v₁ = c/n₁</text>
<text x="150" y="400" font-family="Arial" font-size="11" fill="#666666">v₂ = c/n₂</text>

<defs>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#FF0000"/>
  </marker>
  <marker id="arrowhead-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#00AA00"/>
  </marker>
</defs>

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Snell's Law - Refraction</text>

<!-- Equation box -->
<rect x="50" y="500" width="700" height="90" fill="none" stroke="#000000" stroke-width="2"/>
<text x="400" y="525" font-family="Arial" font-size="15" fill="#000000" text-anchor="middle" font-weight="bold">Snell's Law: n₁ sin(θ₁) = n₂ sin(θ₂)</text>
<text x="400" y="550" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">1.0 × sin(30°) = 1.5 × sin(θ₂)  →  θ₂ = 19.5°</text>
<text x="400" y="570" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Light bends toward normal when entering denser medium (n₂ > n₁)</text>
<text x="400" y="585" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Speed decreases: v = c/n</text>
</g>
</svg>`;

static totalInternalReflectionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="800" height="600" viewBox="0 0 800 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Total Internal Reflection
</metadata>
<g fill="none" stroke="#000000">
<!-- Interface -->
<line x1="100" y1="350" x2="700" y2="350" stroke="#000000" stroke-width="3"/>

<!-- Medium labels -->
<text x="400" y="470" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">Glass (n = 1.5)</text>
<text x="400" y="150" font-family="Arial" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">Air (n = 1.0)</text>

<!-- Shading -->
<rect x="100" y="350" width="600" height="200" fill="#CCCCCC" opacity="0.2"/>

<!-- Normal -->
<line x1="300" y1="250" x2="300" y2="500" stroke="#0000FF" stroke-width="2" stroke-dasharray="5,5"/>
<line x1="500" y1="250" x2="500" y2="500" stroke="#0000FF" stroke-width="2" stroke-dasharray="5,5"/>

<!-- Case 1: Small angle - Refraction occurs -->
<text x="300" y="230" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Small Angle</text>

<line x1="300" y1="450" x2="300" y2="350" stroke="#FF0000" stroke-width="3" marker-end="url(#arrowhead-red)"/>
<line x1="300" y1="350" x2="250" y2="280" stroke="#00AA00" stroke-width="3" marker-end="url(#arrowhead-green)"/>
<text x="270" y="320" font-family="Arial" font-size="11" fill="#FF0000">θ < θc</text>
<text x="260" y="310" font-family="Arial" font-size="11" fill="#00AA00">Refracted</text>

<!-- Case 2: Critical angle -->
<text x="500" y="230" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Critical Angle</text>

<line x1="450" y1="450" x2="500" y2="350" stroke="#FF0000" stroke-width="3" marker-end="url(#arrowhead-red)"/>
<line x1="500" y1="350" x2="650" y2="350" stroke="#00AA00" stroke-width="3" marker-end="url(#arrowhead-green)"/>
<text x="480" y="400" font-family="Arial" font-size="11" fill="#FF0000">θ = θc</text>
<text x="570" y="340" font-family="Arial" font-size="11" fill="#00AA00">90° refraction</text>

<!-- Case 3: Beyond critical angle - TIR -->
<text x="180" y="380" font-family="Arial" font-size="14" fill="#000000" font-weight="bold">Beyond θc - TIR</text>

<line x1="200" y1="480" x2="250" y2="350" stroke="#FF0000" stroke-width="3" marker-end="url(#arrowhead-red)"/>
<line x1="250" y1="350" x2="200" y2="220" stroke="#0000FF" stroke-width="3" marker-end="url(#arrowhead-blue)"/>
<text x="215" y="420" font-family="Arial" font-size="11" fill="#FF0000">θ > θc</text>
<text x="215" y="280" font-family="Arial" font-size="11" fill="#0000FF">Total reflection</text>

<!-- Angles marked -->
<path d="M 250 360 Q 260 350 270 345" stroke="#000000" stroke-width="1" fill="none"/>
<path d="M 460 370 Q 470 360 480 355" stroke="#000000" stroke-width="1" fill="none"/>
<path d="M 240 370 Q 245 360 245 350" stroke="#000000" stroke-width="1" fill="none"/>

<defs>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#FF0000"/>
  </marker>
  <marker id="arrowhead-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#00AA00"/>
  </marker>
  <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#0000FF"/>
  </marker>
</defs>

<!-- Title -->
<text x="400" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Total Internal Reflection</text>

<!-- Equation box -->
<rect x="50" y="520" width="700" height="70" fill="none" stroke="#000000" stroke-width="2"/>
<text x="400" y="545" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Critical Angle: sin(θc) = n₂/n₁ = 1.0/1.5  →  θc = 41.8°</text>
<text x="400" y="570" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">When θ > θc: Total internal reflection (no refraction, 100% reflection)</text>
<text x="400" y="585" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Used in: fiber optics, prisms, diamonds (brilliance)</text>
</g>
</svg>`;

static prismDispersionSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Prism Dispersion - White Light Separation
</metadata>
<g fill="none" stroke="#000000">
<!-- Prism (equilateral triangle) -->
<path d="M 300 450 L 450 150 L 600 450 Z" stroke="#000000" stroke-width="4" fill="none"/>
<text x="450" y="500" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Glass Prism</text>

<!-- White light ray entering -->
<line x1="150" y1="300" x2="330" y2="300" stroke="#000000" stroke-width="4" marker-end="url(#arrowhead)"/>
<text x="200" y="285" font-family="Arial" font-size="13" fill="#000000">White light</text>

<!-- Refraction point 1 -->
<circle cx="330" cy="300" r="3" fill="#000000"/>

<!-- Dispersed rays inside prism -->
<line x1="330" y1="300" x2="530" y2="400" stroke="#FF0000" stroke-width="2"/>
<line x1="330" y1="300" x2="535" y2="405" stroke="#FF6600" stroke-width="2"/>
<line x1="330" y1="300" x2="540" y2="410" stroke="#FFAA00" stroke-width="2"/>
<line x1="330" y1="300" x2="545" y2="415" stroke="#00AA00" stroke-width="2"/>
<line x1="330" y1="300" x2="550" y2="420" stroke="#0000FF" stroke-width="2"/>
<line x1="330" y1="300" x2="555" y2="425" stroke="#4B0082" stroke-width="2"/>
<line x1="330" y1="300" x2="560" y2="430" stroke="#8B00FF" stroke-width="2"/>

<!-- Refraction point 2 -->
<circle cx="545" cy="415" r="3" fill="#000000"/>

<!-- Spectrum emerging from prism -->
<line x1="530" y1="400" x2="700" y2="480" stroke="#FF0000" stroke-width="3" marker-end="url(#arrowhead-red)"/>
<text x="720" y="485" font-family="Arial" font-size="12" fill="#FF0000">Red</text>

<line x1="535" y1="405" x2="710" y2="470" stroke="#FF6600" stroke-width="3"/>
<text x="730" y="475" font-family="Arial" font-size="12" fill="#FF6600">Orange</text>

<line x1="540" y1="410" x2="720" y2="460" stroke="#FFAA00" stroke-width="3"/>
<text x="740" y="465" font-family="Arial" font-size="12" fill="#FFAA00">Yellow</text>

<line x1="545" y1="415" x2="730" y2="450" stroke="#00AA00" stroke-width="3"/>
<text x="750" y="455" font-family="Arial" font-size="12" fill="#00AA00">Green</text>

<line x1="550" y1="420" x2="740" y2="440" stroke="#0000FF" stroke-width="3"/>
<text x="760" y="445" font-family="Arial" font-size="12" fill="#0000FF">Blue</text>

<line x1="555" y1="425" x2="750" y2="430" stroke="#4B0082" stroke-width="3"/>
<text x="770" y="435" font-family="Arial" font-size="12" fill="#4B0082">Indigo</text>

<line x1="560" y1="430" x2="760" y2="420" stroke="#8B00FF" stroke-width="3"/>
<text x="780" y="425" font-family="Arial" font-size="12" fill="#8B00FF">Violet</text>

<!-- Deviation angle -->
<path d="M 680 470 Q 690 460 700 450" stroke="#666666" stroke-width="1.5" stroke-dasharray="2,2" fill="none"/>
<text x="710" y="460" font-family="Arial" font-size="11" fill="#666666">δ (deviation)</text>

<!-- Screen showing spectrum -->
<line x1="800" y1="380" x2="800" y2="500" stroke="#000000" stroke-width="3"/>
<text x="810" y="440" font-family="Arial" font-size="12" fill="#000000">Screen</text>

<!-- Colored bars on screen -->
<rect x="795" y="485" width="10" height="15" fill="#FF0000"/>
<rect x="795" y="475" width="10" height="10" fill="#FF6600"/>
<rect x="795" y="465" width="10" height="10" fill="#FFAA00"/>
<rect x="795" y="455" width="10" height="10" fill="#00AA00"/>
<rect x="795" y="445" width="10" height="10" fill="#0000FF"/>
<rect x="795" y="435" width="10" height="10" fill="#4B0082"/>
<rect x="795" y="420" width="10" height="15" fill="#8B00FF"/>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#FF0000"/>
  </marker>
</defs>

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Dispersion of White Light Through Prism</text>

<!-- Explanation box -->
<rect x="50" y="520" width="800" height="70" fill="none" stroke="#000000" stroke-width="2"/>
<text x="450" y="545" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Dispersion: Separation of white light into colors due to wavelength-dependent refraction</text>
<text x="450" y="565" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Refractive index varies with wavelength: n(violet) > n(red)</text>
<text x="450" y="583" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Shorter wavelengths (violet) bend more than longer wavelengths (red) → Spectrum: ROYGBIV</text>
</g>
</svg>`;

static opticalFiberSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="400" viewBox="0 0 900 400"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Optical Fiber - Light Propagation
</metadata>
<g fill="none" stroke="#000000">
<!-- Core -->
<path d="M 100 180 L 800 180" stroke="#000000" stroke-width="3"/>
<path d="M 100 220 L 800 220" stroke="#000000" stroke-width="3"/>
<text x="850" y="205" font-family="Arial" font-size="12" fill="#000000">Core (n₁ = 1.5)</text>

<!-- Cladding (top) -->
<path d="M 100 150 L 800 150" stroke="#666666" stroke-width="2" stroke-dasharray="5,5"/>
<text x="820" y="155" font-family="Arial" font-size="11" fill="#666666">Cladding</text>
<text x="820" y="170" font-family="Arial" font-size="11" fill="#666666">(n₂ = 1.46)</text>

<!-- Cladding (bottom) -->
<path d="M 100 250 L 800 250" stroke="#666666" stroke-width="2" stroke-dasharray="5,5"/>
<text x="820" y="255" font-family="Arial" font-size="11" fill="#666666">Cladding</text>

<!-- Light ray entering -->
<line x1="50" y1="200" x2="100" y2="200" stroke="#FF0000" stroke-width="3" marker-end="url(#arrowhead-red)"/>
<text x="70" y="190" font-family="Arial" font-size="11" fill="#FF0000">Light in</text>

<!-- Light ray bouncing through fiber (zigzag) -->
<line x1="100" y1="200" x2="200" y2="180" stroke="#FF0000" stroke-width="3"/>
<line x1="200" y1="180" x2="300" y2="220" stroke="#FF0000" stroke-width="3"/>
<line x1="300" y1="220" x2="400" y2="180" stroke="#FF0000" stroke-width="3"/>
<line x1="400" y1="180" x2="500" y2="220" stroke="#FF0000" stroke-width="3"/>
<line x1="500" y1="220" x2="600" y2="180" stroke="#FF0000" stroke-width="3"/>
<line x1="600" y1="180" x2="700" y2="220" stroke="#FF0000" stroke-width="3"/>
<line x1="700" y1="220" x2="800" y2="200" stroke="#FF0000" stroke-width="3" marker-end="url(#arrowhead-red)"/>

<!-- Total internal reflection points -->
<circle cx="200" cy="180" r="3" fill="#FF0000"/>
<circle cx="300" cy="220" r="3" fill="#FF0000"/>
<circle cx="400" cy="180" r="3" fill="#FF0000"/>
<circle cx="500" cy="220" r="3" fill="#FF0000"/>
<circle cx="600" cy="180" r="3" fill="#FF0000"/>
<circle cx="700" cy="220" r="3" fill="#FF0000"/>

<!-- Reflection annotations -->
<text x="210" y="175" font-family="Arial" font-size="10" fill="#0000FF">TIR</text>
<text x="310" y="235" font-family="Arial" font-size="10" fill="#0000FF">TIR</text>
<text x="510" y="235" font-family="Arial" font-size="10" fill="#0000FF">TIR</text>

<!-- Critical angle indicator -->
<path d="M 200 180 L 200 165" stroke="#0000FF" stroke-width="1" stroke-dasharray="2,2"/>
<path d="M 195 180 Q 195 175 200 170" stroke="#0000FF" stroke-width="1" fill="none"/>
<text x="185" y="168" font-family="Arial" font-size="9" fill="#0000FF">θ > θc</text>

<!-- Light ray exiting -->
<text x="810" y="190" font-family="Arial" font-size="11" fill="#FF0000">Light out</text>

<defs>
  <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#FF0000"/>
  </marker>
</defs>

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Optical Fiber</text>

<!-- Cross-section view -->
<circle cx="150" cy="80" r="30" fill="none" stroke="#000000" stroke-width="2"/>
<circle cx="150" cy="80" r="20" fill="#DDDDDD" stroke="#000000" stroke-width="2"/>
<text x="190" y="75" font-family="Arial" font-size="11" fill="#000000">Core</text>
<text x="190" y="90" font-family="Arial" font-size="11" fill="#666666">Cladding</text>
<text x="120" y="50" font-family="Arial" font-size="12" fill="#000000" font-weight="bold">Cross-section</text>

<!-- Explanation box -->
<rect x="50" y="300" width="800" height="90" fill="none" stroke="#000000" stroke-width="2"/>
<text x="450" y="325" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Principle: Total Internal Reflection confines light in core</text>
<text x="450" y="350" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Core (higher n) surrounded by cladding (lower n) → Light trapped by TIR</text>
<text x="450" y="370" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Critical angle: θc = sin⁻¹(n₂/n₁) = sin⁻¹(1.46/1.5) ≈ 76°</text>
<text x="450" y="385" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Used in: telecommunications, internet, medical endoscopy • Low loss, high bandwidth</text>
</g>
</svg>`;

static diffractionInterferencePatternSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="600" viewBox="0 0 900 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Double Slit Interference Pattern
</metadata>
<g fill="none" stroke="#000000">
<!-- Light source -->
<circle cx="100" cy="300" r="20" fill="#FFFF00" stroke="#000000" stroke-width="2"/>
<text x="100" y="340" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Source</text>

<!-- Wavefronts approaching slits -->
<path d="M 130 250 Q 150 275 130 300 Q 150 325 130 350" stroke="#666666" stroke-width="1" stroke-dasharray="2,2"/>
<path d="M 160 250 Q 180 275 160 300 Q 180 325 160 350" stroke="#666666" stroke-width="1" stroke-dasharray="2,2"/>

<!-- Barrier with double slits -->
<rect x="200" y="200" width="20" height="80" fill="#000000"/>
<rect x="200" y="320" width="20" height="80" fill="#000000"/>
<text x="210" y="190" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Barrier</text>

<!-- Slits -->
<text x="195" y="295" font-family="Arial" font-size="11" fill="#000000">S₁</text>
<text x="195" y="315" font-family="Arial" font-size="11" fill="#000000">S₂</text>

<!-- Distance between slits marker -->
<line x1="190" y1="290" x2="190" y2="310" stroke="#666666" stroke-width="1" stroke-dasharray="2,2"/>
<text x="175" y="305" font-family="Arial" font-size="10" fill="#666666">d</text>

<!-- Waves from both slits -->
<path d="M 220 290 Q 350 250 500 250" stroke="#FF0000" stroke-width="1" stroke-dasharray="3,3"/>
<path d="M 220 290 Q 350 300 500 300" stroke="#FF0000" stroke-width="1" stroke-dasharray="3,3"/>
<path d="M 220 310 Q 350 300 500 300" stroke="#0000FF" stroke-width="1" stroke-dasharray="3,3"/>
<path d="M 220 310 Q 350 350 500 350" stroke="#0000FF" stroke-width="1" stroke-dasharray="3,3"/>

<!-- Screen -->
<line x1="700" y1="150" x2="700" y2="450" stroke="#000000" stroke-width="4"/>
<text x="715" y="300" font-family="Arial" font-size="13" fill="#000000">Screen</text>

<!-- Central maximum -->
<rect x="695" y="295" width="10" height="10" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
<text x="730" y="303" font-family="Arial" font-size="11" fill="#000000">n = 0 (max)</text>

<!-- First order maxima -->
<rect x="695" y="250" width="10" height="10" fill="#CCCCCC" stroke="#000000" stroke-width="1"/>
<text x="730" y="258" font-family="Arial" font-size="10" fill="#000000">n = 1</text>
<rect x="695" y="340" width="10" height="10" fill="#CCCCCC" stroke="#000000" stroke-width="1"/>
<text x="730" y="348" font-family="Arial" font-size="10" fill="#000000">n = 1</text>

<!-- Second order maxima -->
<rect x="695" y="210" width="10" height="8" fill="#AAAAAA" stroke="#000000" stroke-width="1"/>
<text x="730" y="218" font-family="Arial" font-size="10" fill="#000000">n = 2</text>
<rect x="695" y="380" width="10" height="8" fill="#AAAAAA" stroke="#000000" stroke-width="1"/>
<text x="730" y="388" font-family="Arial" font-size="10" fill="#000000">n = 2</text>

<!-- Minima (dark fringes) -->
<rect x="695" y="272" width="10" height="6" fill="#000000"/>
<text x="730" y="278" font-family="Arial" font-size="9" fill="#666666">min</text>
<rect x="695" y="318" width="10" height="6" fill="#000000"/>
<text x="730" y="323" font-family="Arial" font-size="9" fill="#666666">min</text>

<rect x="695" y="230" width="10" height="6" fill="#000000"/>
<rect x="695" y="360" width="10" height="6" fill="#000000"/>

<!-- Path difference illustration -->
<line x1="220" y1="290" x2="700" y2="300" stroke="#666666" stroke-width="1" stroke-dasharray="2,2"/>
<line x1="220" y1="310" x2="700" y2="300" stroke="#666666" stroke-width="1" stroke-dasharray="2,2"/>

<!-- Distance to screen -->
<line x1="220" y1="440" x2="700" y2="440" stroke="#666666" stroke-width="1" stroke-dasharray="2,2"/>
<line x1="220" y1="435" x2="220" y2="445" stroke="#666666" stroke-width="2"/>
<line x1="700" y1="435" x2="700" y2="445" stroke="#666666" stroke-width="2"/>
<text x="460" y="460" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">D (screen distance)</text>

<!-- Fringe spacing -->
<line x1="720" y1="300" x2="720" y2="255" stroke="#666666" stroke-width="1" stroke-dasharray="2,2"/>
<line x1="715" y1="300" x2="725" y2="300" stroke="#666666" stroke-width="2"/>
<line x1="715" y1="255" x2="725" y2="255" stroke="#666666" stroke-width="2"/>
<text x="750" y="280" font-family="Arial" font-size="10" fill="#666666">y (fringe</text>
<text x="750" y="292" font-family="Arial" font-size="10" fill="#666666">spacing)</text>

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Double Slit Interference Pattern</text>

<!-- Intensity graph -->
<rect x="50" y="50" width="300" height="120" fill="none" stroke="#000000" stroke-width="2"/>
<text x="200" y="75" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Intensity Pattern</text>

<!-- Intensity curve -->
<path d="M 70 140 Q 90 100 110 140 Q 125 155 140 140 Q 155 100 170 140 Q 185 155 200 140 Q 215 100 230 140 Q 245 155 260 140 Q 275 100 290 140 Q 305 155 320 140" stroke="#FF0000" stroke-width="2" fill="none"/>

<line x1="70" y1="140" x2="330" y2="140" stroke="#000000" stroke-width="1"/>
<line x1="70" y1="90" x2="70" y2="160" stroke="#000000" stroke-width="1"/>
<text x="340" y="145" font-family="Arial" font-size="10" fill="#000000">y</text>
<text x="60" y="85" font-family="Arial" font-size="10" fill="#000000">I</text>

<!-- Equation box -->
<rect x="50" y="490" width="800" height="100" fill="none" stroke="#000000" stroke-width="2"/>
<text x="450" y="515" font-family="Arial" font-size="14" fill="#000000" text-anchor="middle" font-weight="bold">Conditions for Interference</text>
<text x="450" y="540" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Constructive (bright): d sin(θ) = nλ  where n = 0, ±1, ±2, ...</text>
<text x="450" y="560" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Destructive (dark): d sin(θ) = (n + ½)λ</text>
<text x="450" y="580" font-family="Arial" font-size="12" fill="#666666" text-anchor="middle">Fringe spacing: y = λD/d  (for small angles)</text>
</g>
</svg>`;

static polarizationDiagramSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="900" height="500" viewBox="0 0 900 500"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Light Polarization
</metadata>
<g fill="none" stroke="#000000">
<!-- Unpolarized light source -->
<circle cx="100" cy="250" r="25" fill="#FFFF00" stroke="#000000" stroke-width="2"/>
<text x="100" y="290" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Light source</text>

<!-- Unpolarized light (multiple orientations) -->
<line x1="125" y1="250" x2="200" y2="250" stroke="#FF0000" stroke-width="2"/>
<line x1="150" y1="225" x2="200" y2="225" stroke="#FF0000" stroke-width="2"/>
<line x1="150" y1="275" x2="200" y2="275" stroke="#FF0000" stroke-width="2"/>
<line x1="150" y1="235" x2="200" y2="235" stroke="#FF0000" stroke-width="2"/>
<line x1="150" y1="265" x2="200" y2="265" stroke="#FF0000" stroke-width="2"/>
<text x="162" y="210" font-family="Arial" font-size="11" fill="#000000">Unpolarized</text>
<text x="162" y="225" font-family="Arial" font-size="11" fill="#000000">(all planes)</text>

<!-- First polarizer (vertical) -->
<rect x="250" y="200" width="20" height="100" fill="#CCCCCC" stroke="#000000" stroke-width="3"/>
<line x1="260" y1="205" x2="260" y2="295" stroke="#000000" stroke-width="2"/>
<text x="260" y="190" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Polarizer 1</text>
<text x="260" y="320" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(vertical)</text>

<!-- Vertically polarized light -->
<line x1="290" y1="230" x2="400" y2="230" stroke="#0000FF" stroke-width="3"/>
<line x1="290" y1="250" x2="400" y2="250" stroke="#0000FF" stroke-width="3"/>
<line x1="290" y1="270" x2="400" y2="270" stroke="#0000FF" stroke-width="3"/>
<text x="345" y="215" font-family="Arial" font-size="11" fill="#0000FF">Vertically</text>
<text x="345" y="230" font-family="Arial" font-size="11" fill="#0000FF">polarized</text>

<!-- Propagation direction arrow -->
<line x1="345" y1="285" x2="365" y2="285" stroke="#000000" stroke-width="2" marker-end="url(#arrowhead)"/>

<!-- Second polarizer (at angle) -->
<g transform="translate(500, 250) rotate(45) translate(-500, -250)">
  <rect x="490" y="200" width="20" height="100" fill="#CCCCCC" stroke="#000000" stroke-width="3"/>
  <line x1="500" y1="205" x2="500" y2="295" stroke="#000000" stroke-width="2"/>
</g>
<text x="500" y="190" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Polarizer 2</text>
<text x="500" y="320" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(45° rotated)</text>

<!-- Angle indicator -->
<path d="M 490 250 Q 485 235 480 225" stroke="#666666" stroke-width="1" fill="none"/>
<text x="470" y="235" font-family="Arial" font-size="10" fill="#666666">45°</text>

<!-- Reduced intensity light after second polarizer -->
<line x1="540" y1="235" x2="650" y2="235" stroke="#00AA00" stroke-width="2"/>
<line x1="540" y1="250" x2="650" y2="250" stroke="#00AA00" stroke-width="2"/>
<line x1="540" y1="265" x2="650" y2="265" stroke="#00AA00" stroke-width="2"/>
<text x="595" y="220" font-family="Arial" font-size="11" fill="#00AA00">Reduced</text>
<text x="595" y="235" font-family="Arial" font-size="11" fill="#00AA00">intensity</text>

<!-- Special case: Crossed polarizers -->
<rect x="700" y="200" width="20" height="100" fill="#CCCCCC" stroke="#000000" stroke-width="3"/>
<line x1="705" y1="200" x2="715" y2="300" stroke="#000000" stroke-width="2"/>
<text x="710" y="190" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Polarizer 3</text>
<text x="710" y="320" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">(horizontal)</text>

<!-- No light passes through crossed polarizers -->
<text x="770" y="255" font-family="Arial" font-size="14" fill="#FF0000" font-weight="bold">No light</text>
<text x="770" y="275" font-family="Arial" font-size="11" fill="#666666">(crossed)</text>

<defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
    <polygon points="0 0, 10 3, 0 6" fill="#000000"/>
  </marker>
</defs>

<!-- Title -->
<text x="450" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Light Polarization</text>

<!-- Intensity diagram -->
<rect x="50" y="350" width="350" height="130" fill="none" stroke="#000000" stroke-width="2"/>
<text x="225" y="375" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Malus's Law</text>
<text x="225" y="400" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">I = I₀ cos²(θ)</text>
<text x="225" y="425" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">θ = 0° → I = I₀ (maximum)</text>
<text x="225" y="445" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">θ = 45° → I = I₀/2</text>
<text x="225" y="465" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">θ = 90° → I = 0 (crossed polarizers)</text>

<!-- Applications -->
<rect x="450" y="350" width="400" height="130" fill="none" stroke="#000000" stroke-width="2"/>
<text x="650" y="375" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Applications</text>
<text x="650" y="400" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">• Sunglasses (reduce glare)</text>
<text x="650" y="420" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">• LCD displays</text>
<text x="650" y="440" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">• Photography filters</text>
<text x="650" y="460" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">• 3D movie glasses</text>
</g>
</svg>`;

// ===== OPTICS APPARATUS DIAGRAMS =====

static opticalBenchApparatusSvg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1000" height="600" viewBox="0 0 1000 600"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Optical Bench Apparatus
</metadata>
<g fill="none" stroke="#000000">
<!-- Optical bench (rail) -->
<rect x="50" y="380" width="900" height="40" fill="#AAAAAA" stroke="#000000" stroke-width="3"/>
<text x="500" y="450" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle">Optical Bench (Meter Scale)</text>

<!-- Scale markings -->
<line x1="100" y1="375" x2="100" y2="385" stroke="#000000" stroke-width="2"/>
<text x="100" y="370" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">0</text>
<line x1="300" y1="375" x2="300" y2="385" stroke="#000000" stroke-width="2"/>
<text x="300" y="370" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">20cm</text>
<line x1="500" y1="375" x2="500" y2="385" stroke="#000000" stroke-width="2"/>
<text x="500" y="370" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">40cm</text>
<line x1="700" y1="375" x2="700" y2="385" stroke="#000000" stroke-width="2"/>
<text x="700" y="370" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">60cm</text>
<line x1="900" y1="375" x2="900" y2="385" stroke="#000000" stroke-width="2"/>
<text x="900" y="370" font-family="Arial" font-size="10" fill="#000000" text-anchor="middle">80cm</text>

<!-- Light source with object -->
<rect x="80" y="320" width="40" height="60" fill="#FFFF99" stroke="#000000" stroke-width="2"/>
<line x1="100" y1="350" x2="100" y2="320" stroke="#000000" stroke-width="3" marker-end="url(#arrowhead-up)"/>
<text x="100" y="310" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">Object</text>

<!-- Holder for light source -->
<rect x="90" y="340" width="20" height="40" fill="#666666" stroke="#000000" stroke-width="2"/>
<line x1="100" y1="380" x2="100" y2="400" stroke="#000000" stroke-width="3"/>

<!-- Convex lens -->
<path d="M 450 280 Q 470 340 450 400" stroke="#000000" stroke-width="4" fill="none"/>
<path d="M 550 280 Q 530 340 550 400" stroke="#000000" stroke-width="4" fill="none"/>
<line x1="450" y1="280" x2="550" y2="280" stroke="#000000" stroke-width="2"/>
<line x1="450" y1="400" x2="550" y2="400" stroke="#000000" stroke-width="2"/>
<text x="500" y="270" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Convex Lens</text>

<!-- Lens holder -->
<rect x="490" y="380" width="20" height="20" fill="#666666" stroke="#000000" stroke-width="2"/>
<line x1="500" y1="400" x2="500" y2="420" stroke="#000000" stroke-width="3"/>

<!-- Screen -->
<rect x="850" y="280" width="20" height="120" fill="#FFFFFF" stroke="#000000" stroke-width="3"/>
<text x="860" y="270" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle">Screen</text>

<!-- Image on screen (inverted) -->
<line x1="860" y1="360" x2="860" y2="380" stroke="#FF0000" stroke-width="3" marker-start="url(#arrowhead-down)"/>
<text x="880" y="375" font-family="Arial" font-size="11" fill="#FF0000">Image</text>

<!-- Screen holder -->
<rect x="850" y="380" width="20" height="20" fill="#666666" stroke="#000000" stroke-width="2"/>
<line x1="860" y1="400" x2="860" y2="420" stroke="#000000" stroke-width="3"/>

<!-- Light rays -->
<line x1="100" y1="320" x2="500" y2="320" stroke="#FFAA00" stroke-width="2" stroke-dasharray="3,3"/>
<line x1="500" y1="320" x2="860" y2="370" stroke="#FFAA00" stroke-width="2" stroke-dasharray="3,3"/>

<!-- Distance measurements -->
<line x1="100" y1="480" x2="500" y2="480" stroke="#0000FF" stroke-width="2"/>
<line x1="100" y1="475" x2="100" y2="485" stroke="#0000FF" stroke-width="2"/>
<line x1="500" y1="475" x2="500" y2="485" stroke="#0000FF" stroke-width="2"/>
<text x="300" y="500" font-family="Arial" font-size="12" fill="#0000FF" text-anchor="middle">u = 40 cm (object distance)</text>

<line x1="500" y1="510" x2="860" y2="510" stroke="#00AA00" stroke-width="2"/>
<line x1="500" y1="505" x2="500" y2="515" stroke="#00AA00" stroke-width="2"/>
<line x1="860" y1="505" x2="860" y2="515" stroke="#00AA00" stroke-width="2"/>
<text x="680" y="530" font-family="Arial" font-size="12" fill="#00AA00" text-anchor="middle">v = 36 cm (image distance)</text>

<defs>
  <marker id="arrowhead-up" markerWidth="10" markerHeight="10" refX="3" refY="0" orient="auto">
    <polygon points="0 0, 3 10, 6 0" fill="#000000"/>
  </marker>
  <marker id="arrowhead-down" markerWidth="10" markerHeight="10" refX="3" refY="10" orient="auto">
    <polygon points="0 10, 3 0, 6 10" fill="#FF0000"/>
  </marker>
</defs>

<!-- Title -->
<text x="500" y="30" font-family="Arial" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">Optical Bench Apparatus</text>

<!-- Explanation box -->
<rect x="50" y="550" width="900" height="40" fill="none" stroke="#000000" stroke-width="2"/>
<text x="500" y="570" font-family="Arial" font-size="13" fill="#000000" text-anchor="middle" font-weight="bold">Used to measure focal length: 1/f = 1/u + 1/v  →  1/f = 1/40 + 1/36  →  f ≈ 19 cm</text>
<text x="500" y="585" font-family="Arial" font-size="11" fill="#666666" text-anchor="middle">Adjustable components on rail allow precise measurement of object/image distances</text>
</g>
</svg>`;

// Close the class and export
}

export { PhysicsSvgDiagrams };
