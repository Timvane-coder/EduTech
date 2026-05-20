// ============================================================
//  anim_learning.js
//  Drop-in replacement for anim_start() and anim1() only.
//  Everything else in 3Danimation.js (Updated) stays untouched.
//
//  WHAT'S NEW
//  ──────────
//  • anim_start   — slow cinematic approach + door-threshold
//                   bloom pulse + subtle positional wobble
//  • anim1        — pillar ascent now fires lesson HUD beats,
//                   zone-reveal sweep at height, breakthrough
//                   bloom flash, and a gentle arrival bob
//  • LearningHUD  — lightweight DOM overlay that syncs to the
//                   camera timeline (no external deps)
// ============================================================


// ─────────────────────────────────────────────────────────────
//  LEARNING HUD  (pure DOM, zero extra libraries)
// ─────────────────────────────────────────────────────────────

var LearningHUD = (function () {

  var _container = null;   // outer wrapper div
  var _label     = null;   // zone-name pill
  var _bar       = null;   // progress bar inner fill
  var _beatTO    = null;   // timeout handle for auto-hide

  // ── build once ──────────────────────────────────────────
  function _build() {
    if (_container) return;

    // Inject keyframe CSS once
    var style = document.createElement("style");
    style.textContent = [
      "@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=DM+Sans:wght@300;400&display=swap');",

      ".lhud-wrap {",
      "  position: fixed; top: 0; left: 0; width: 100%; height: 100%;",
      "  pointer-events: none; z-index: 9999;",
      "}",

      // Top-left zone pill
      ".lhud-zone {",
      "  position: absolute; top: 36px; left: 40px;",
      "  font-family: 'Orbitron', sans-serif;",
      "  font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;",
      "  color: #7ee8ff;",
      "  padding: 7px 18px 7px 14px;",
      "  border-left: 2px solid #2266ff;",
      "  background: rgba(0,10,30,0.55);",
      "  backdrop-filter: blur(6px);",
      "  opacity: 0;",
      "  transform: translateX(-18px);",
      "  transition: opacity 0.55s ease, transform 0.55s ease;",
      "}",
      ".lhud-zone.visible {",
      "  opacity: 1; transform: translateX(0);",
      "}",

      // Progress bar — bottom of screen
      ".lhud-progress {",
      "  position: absolute; bottom: 0; left: 0; right: 0;",
      "  height: 3px;",
      "  background: rgba(255,255,255,0.07);",
      "}",
      ".lhud-progress-fill {",
      "  height: 100%; width: 0%;",
      "  background: linear-gradient(90deg, #2266ff, #7ee8ff);",
      "  box-shadow: 0 0 12px #2266ff;",
      "  transition: width 0.4s linear;",
      "}",

      // Beat message — centre screen
      ".lhud-beat {",
      "  position: absolute;",
      "  top: 50%; left: 50%;",
      "  transform: translate(-50%, -50%) scale(0.88);",
      "  font-family: 'DM Sans', sans-serif;",
      "  font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;",
      "  color: rgba(180,220,255,0.0);",
      "  text-align: center;",
      "  white-space: nowrap;",
      "  transition: color 0.4s ease, transform 0.4s ease;",
      "}",
      ".lhud-beat.visible {",
      "  color: rgba(180,220,255,0.72);",
      "  transform: translate(-50%, -50%) scale(1);",
      "}",

      // Zone-reveal colour patches (bottom strip)
      ".lhud-zones-strip {",
      "  position: absolute; bottom: 3px; left: 0; right: 0;",
      "  display: flex; height: 2px;",
      "}",
      ".lhud-zone-chip {",
      "  flex: 1; opacity: 0;",
      "  transition: opacity 0.8s ease;",
      "}",
      ".lhud-zone-chip.lit { opacity: 1; }",
      ".chip-pillar  { background: #2266ff; }",
      ".chip-forest  { background: #1a9a3a; }",
      ".chip-terrain { background: #c87020; }",

      // Vignette flash overlay
      ".lhud-flash {",
      "  position: absolute; top: 0; left: 0; width: 100%; height: 100%;",
      "  background: radial-gradient(ellipse at center,",
      "    rgba(34,102,255,0.0) 40%, rgba(34,102,255,0.55) 100%);",
      "  opacity: 0;",
      "  transition: opacity 0.18s ease;",
      "  pointer-events: none;",
      "}",
      ".lhud-flash.on { opacity: 1; }",
    ].join("\n");
    document.head.appendChild(style);

    // DOM structure
    _container = document.createElement("div");
    _container.className = "lhud-wrap";
    _container.innerHTML = [
      '<div class="lhud-zone" id="lhudZone"></div>',
      '<div class="lhud-progress"><div class="lhud-progress-fill" id="lhudBar"></div></div>',
      '<div class="lhud-beat" id="lhudBeat"></div>',
      '<div class="lhud-zones-strip">',
      '  <div class="lhud-zone-chip chip-pillar"  id="lhudChipP"></div>',
      '  <div class="lhud-zone-chip chip-forest"  id="lhudChipF"></div>',
      '  <div class="lhud-zone-chip chip-terrain" id="lhudChipT"></div>',
      '</div>',
      '<div class="lhud-flash" id="lhudFlash"></div>',
    ].join("");
    document.body.appendChild(_container);

    _label = document.getElementById("lhudZone");
    _bar   = document.getElementById("lhudBar");
  }

  // ── public API ──────────────────────────────────────────

  // Show a zone label (auto-hides after `ms`)
  function zone(text, ms) {
    _build();
    _label.textContent = text;
    _label.classList.add("visible");
    clearTimeout(_beatTO);
    if (ms) {
      _beatTO = setTimeout(function () {
        _label.classList.remove("visible");
      }, ms);
    }
  }

  // Drive the progress bar (0–100)
  function progress(pct) {
    _build();
    _bar.style.width = Math.min(100, pct) + "%";
  }

  // Flash a centre message (auto-hides after `ms`)
  function beat(text, ms) {
    _build();
    var el = document.getElementById("lhudBeat");
    el.textContent = text;
    el.classList.add("visible");
    setTimeout(function () { el.classList.remove("visible"); }, ms || 1800);
  }

  // Light up a zone chip in the bottom strip
  function chipOn(which) {   // 'pillar' | 'forest' | 'terrain'
    _build();
    var map = { pillar: "lhudChipP", forest: "lhudChipF", terrain: "lhudChipT" };
    var el = document.getElementById(map[which]);
    if (el) el.classList.add("lit");
  }

  // Bloom-vignette flash (mirrors bloomComposer spike)
  function flash(durationMs) {
    _build();
    var el = document.getElementById("lhudFlash");
    el.classList.add("on");
    setTimeout(function () { el.classList.remove("on"); }, durationMs || 300);
  }

  // Hide everything
  function hide() {
    _build();
    _label.classList.remove("visible");
    _bar.style.width = "0%";
  }

  return { zone: zone, progress: progress, beat: beat, chipOn: chipOn, flash: flash, hide: hide };

})();


// ─────────────────────────────────────────────────────────────
//  BLOOM HELPER  (safe wrapper around bloomComposer)
// ─────────────────────────────────────────────────────────────

function _setBloom(strength) {
  if (bloomComposer && bloomComposer.passes[1]) {
    bloomComposer.passes[1].strength = strength;
  }
}

// Smooth bloom ramp via TWEEN
function _tweenBloom(from, to, durationMs, easingFn) {
  var obj = { v: from };
  _setBloom(from);
  return new TWEEN.Tween(obj)
    .to({ v: to }, durationMs)
    .easing(easingFn || TWEEN.Easing.Sinusoidal.InOut)
    .onUpdate(function () { _setBloom(obj.v); })
    .start();
}

// One-shot bloom spike then decay (for "breakthrough" moments)
function _bloomSpike(peak, holdMs, decayMs, restValue) {
  _tweenBloom(bloomComposer.passes[1].strength, peak, 280, TWEEN.Easing.Quadratic.Out)
    .onComplete(function () {
      setTimeout(function () {
        _tweenBloom(peak, restValue !== undefined ? restValue : 1.2, decayMs || 1200,
          TWEEN.Easing.Sinusoidal.Out);
      }, holdMs || 0);
    });
  LearningHUD.flash(280);
}

// Continuous wobble on an object's position (returns stop fn)
function _wobble(obj, axis, amplitude, periodMs) {
  var start = Date.now();
  var base  = obj.position[axis];
  var id    = setInterval(function () {
    var t = (Date.now() - start) / periodMs * Math.PI * 2;
    obj.position[axis] = base + Math.sin(t) * amplitude;
  }, 16);
  return function stop() {
    clearInterval(id);
    obj.position[axis] = base;
  };
}


// ─────────────────────────────────────────────────────────────
//  anim_start  — cinematic approach with lesson framing
// ─────────────────────────────────────────────────────────────
//
//  Timeline (all ms from call time):
//    0        — HUD: "Initialising Learning Path"  |  bloom dims
//    0→5200   — Phase 1: long slow pull from z=1000 → z=200
//                 camera wobbles gently on x-axis during flight
//                 progress bar crawls 0→35%
//    2400     — HUD beat: "Approach the Gateway"
//    5200     — bloom soft pulse
//    5200→7800— Phase 2: final approach z=200 → z=59.9 (door)
//                 progress 35→70%
//    7200     — HUD beat: "Threshold Reached"
//    7800     — anim1() fires + ground texture swap + HUD 70%
// ─────────────────────────────────────────────────────────────

function anim_start() {
  // Reset
  camera.position.set(-10, -6, 1000);
  camera.rotation.set(0.1, 0, 0);
  scene.add(camera);

  // HUD init
  LearningHUD.progress(0);
  LearningHUD.zone("Initialising Learning Path", 3000);
  _setBloom(0.4);   // dim on start, builds through the sequence

  // ── Phase 1: long approach (5200 ms) ─────────────────────
  var stopWobble;

  var _move = new TWEEN.Tween(camera.position)
    .to({ x: -5.26, y: -7.8, z: 200 }, 5200)
    .easing(TWEEN.Easing.Sinusoidal.InOut)
    .onStart(function () {
      // Gentle x-wobble during flight — feels like drifting through space
      stopWobble = _wobble(camera, "x", 0.6, 3200);
    })
    .onUpdate(function () {
      // Progress bar tracks z position linearly
      var pct = (1000 - camera.position.z) / (1000 - 200) * 35;
      LearningHUD.progress(pct);
    })
    .onComplete(function () {
      if (stopWobble) stopWobble();
      _bloomSpike(1.8, 120, 800, 1.0);   // soft pulse at mid-point
      LearningHUD.progress(35);
    })
    .start();

  // Beat cues during Phase 1
  setTimeout(function () {
    LearningHUD.beat("Approach the Gateway", 2000);
  }, 2400);

  // Bloom builds gradually across the approach
  _tweenBloom(0.4, 1.0, 5200, TWEEN.Easing.Sinusoidal.In);

  // ── Phase 2: door approach (2600 ms) ─────────────────────
  var _move1 = new TWEEN.Tween(camera.position)
    .to({ x: -5.26, y: -7.85, z: 59.9 }, 2600)
    .easing(TWEEN.Easing.Sinusoidal.Out)
    .onUpdate(function () {
      var pct = 35 + (200 - camera.position.z) / (200 - 59.9) * 35;
      LearningHUD.progress(pct);
    })
    .onComplete(function () {
      LearningHUD.progress(70);
      LearningHUD.beat("Threshold Reached", 1800);
      // Hand off to full lesson sequence
      anim1();
      ground.material.map = gmap.small;
    });

  var _rot1 = new TWEEN.Tween(camera.rotation)
    .to({ x: 0, y: -0.15, z: 0 }, 2600);

  // Beat at threshold
  setTimeout(function () {
    LearningHUD.beat("Threshold Reached", 1800);
  }, 5200 + 1400);

  _move.chain(_move1, _rot1);
}


// ─────────────────────────────────────────────────────────────
//  anim1  — pillar ascent with lesson beats, zone reveals,
//           breakthrough bloom flash, hub arrival bob
// ─────────────────────────────────────────────────────────────
//
//  Timeline (ms from anim1() call):
//    0         — pivot-door rotation + door-light animation
//    1000      — light_move & _rot start
//    2200      — going-backward move
//    4000      — ground → bloom ground swap
//    4000→9000 — ASCENT: camera rises y=-7.8 → y=280
//      4000    — bloom ramps 1.0 → 2.5 (lift-off)
//      5500    — HUD beat: "Zone 1 — Core Concepts"
//                chipOn('pillar')  |  progress 70→80%
//      6800    — BREAKTHROUGH bloom spike (4.0) at y≈150
//                HUD beat: "Breakthrough"  |  LearningHUD.flash
//      8200    — bloom settles 2.5 → 1.2
//    9000→11500— Orbit at height
//      9200    — HUD zone: "Zone 2 — Forest Learning"
//                chipOn('forest')  |  progress 80→90%
//      9800    — HUD zone: "Zone 3 — Terrain Challenges"
//                chipOn('terrain') |  progress 90→95%
//    11500→13500— Final settle to hub (-38, 200, 57)
//      13000   — bloom gentle bob starts
//      13500   — HUD beat: "Choose Your Path"
//                progress 100%  |  zone label → "Learning Hub"
// ─────────────────────────────────────────────────────────────

function anim1() {

  camera.position.set(-5.26, -7.85, 59.9);
  camera.rotation.set(0, -0.15, 0);

  // ── Door pivot (same pivot dance as original) ─────────────
  var _pivot = new THREE.Object3D();
  scene.add(_pivot);
  _pivot.position.set(-5.3, -7.85, 59.8);
  _pivot.attach(camera);

  light.door.mark.position.set(-5.161, -7.81, 59.44);
  light.door.mark.rotation.set(0, -0.2, 0);

  var _increase = 0;

  // Door light rises (unchanged, starts at 1000ms)
  new TWEEN.Tween({ n: 0 })
    .to({ n: 10 }, 2500)
    .onUpdate(function (v) {
      _increase = Math.pow(v.n, 2) / 1000;
      light.door.mark.position.x -= 0.00136;
      light.door.mark.position.y  = -7.81 + _increase;
    })
    .delay(1000)
    .start();

  // Pivot rotation (same as original, starts at 1000ms)
  var _rot = new TWEEN.Tween({ n: 0 })
    .to({ n: 10 }, 1200)
    .easing(TWEEN.Easing.Sinusoidal.Out)
    .delay(1000)
    .start()
    .onUpdate(function () {
      _pivot.rotation.y -= 0.003;
      _pivot.position.x -= 0.002;
    })
    .onComplete(function () {
      scene.attach(camera);

      // ── Bloom lift-off pulse at the moment we detach from pivot
      _tweenBloom(1.0, 2.2, 900, TWEEN.Easing.Quadratic.Out);
      LearningHUD.beat("Entering the Learning Zone", 2000);
    });

  // ── Going backward ────────────────────────────────────────
  var _moveBack = new TWEEN.Tween(camera.position)
    .to({ x: -7.5, y: -7.8, z: 63.0 }, 1800)
    .easing(TWEEN.Easing.Cubic.In)
    .onComplete(function () {
      camera.rotation.set(
        -0.6990761322621899,
        -0.4948128070467265,
        -0.3692685754171754
      );
      ground.visible  = false;
      ground1.visible = true;   // bloom ground on
      _setBloom(2.2);
    });
  _rot.chain(_moveBack);

  // ── ASCENT  y: -7.8 → 280  (5000 ms) ─────────────────────
  var rot_pos     = { x: -1.1776, y: -0.2592, z: -0.5535 };
  var _rot2_started = false;

  var _rot2 = new TWEEN.Tween(rot_pos)
    .to({ x: -0.37, y: -0.65, z: -0.23 }, 3750)
    .easing(TWEEN.Easing.Sinusoidal.InOut)
    .onUpdate(function () {
      camera.rotation.x = rot_pos.x;
      camera.rotation.y = rot_pos.y;
      camera.rotation.z = rot_pos.z;
    });

  var _ascentPos = { x: -7.5, y: -7.8, z: 63 };
  var _breakthroughFired = false;

  var _ascent = new TWEEN.Tween(_ascentPos)
    .to({ x: -73.17, y: 280.78, z: 138.22 }, 5000)
    .easing(TWEEN.Easing.Sinusoidal.InOut)
    .onStart(function () {
      // progress 70→80 during ascent
      LearningHUD.progress(72);
    })
    .onUpdate(function (pos) {
      camera.position.set(pos.x, pos.y, pos.z);

      // Drive progress bar with altitude
      var altPct = (pos.y + 7.8) / (280.78 + 7.8);
      LearningHUD.progress(70 + altPct * 15);

      // Look at door until we have enough height
      if (pos.y < 30) {
        camera.lookAt(-5.28, -7.8, 57.25);
      } else {
        // Start rotation tween once
        if (!_rot2_started) {
          _rot2.start();
          _rot2_started = true;
        }
      }

      // ── Zone 1 beat at y≈60 ─────────────────────────
      if (!_breakthroughFired && pos.y > 60 && pos.y < 80) {
        LearningHUD.zone("Zone 1 — Core Concepts", 3500);
        LearningHUD.beat("Rising Through the Pillar", 1800);
        LearningHUD.chipOn("pillar");
        LearningHUD.progress(77);
      }

      // ── BREAKTHROUGH at y≈148 ───────────────────────
      if (!_breakthroughFired && pos.y > 148) {
        _breakthroughFired = true;
        _bloomSpike(4.2, 180, 1400, 2.0);
        LearningHUD.beat("Breakthrough ✦", 2200);
        LearningHUD.progress(82);

        // Brief camera-roll flourish at breakthrough
        new TWEEN.Tween(camera.rotation)
          .to({ z: rot_pos.z - 0.08 }, 250)
          .chain(
            new TWEEN.Tween(camera.rotation)
              .to({ z: rot_pos.z }, 350)
              .easing(TWEEN.Easing.Sinusoidal.Out)
          )
          .start();
      }
    })
    .onComplete(function () {
      LearningHUD.progress(85);
    });

  _moveBack.chain(_ascent);

  // ── High orbit  (zone reveal sweep) ──────────────────────
  var _orbit = new TWEEN.Tween({ x: 1 })
    .to({ x: 100 }, 2500)
    .onStart(function () {
      _pivot.position.set(-10, 500, 50);
      _pivot.attach(camera);
      ground.material.map = gmap.big;

      // Bloom settles during orbit
      _tweenBloom(2.0, 1.4, 1200, TWEEN.Easing.Sinusoidal.Out);

      // ── Zone 2 reveal (forest) ───────────────────────
      setTimeout(function () {
        LearningHUD.zone("Zone 2 — Forest Learning", 3000);
        LearningHUD.chipOn("forest");
        LearningHUD.progress(90);
        LearningHUD.beat("Forest Zone Unlocked", 1600);
      }, 400);

      // ── Zone 3 reveal (terrain) ──────────────────────
      setTimeout(function () {
        LearningHUD.zone("Zone 3 — Terrain Challenges", 3000);
        LearningHUD.chipOn("terrain");
        LearningHUD.progress(95);
        LearningHUD.beat("Terrain Zone Unlocked", 1600);
      }, 1400);
    })
    .onUpdate(function () {
      _pivot.rotation.y += 0.001;
      _pivot.position.z += 0.01;
    })
    .onComplete(function () {
      scene.attach(camera);
      scene.remove(_pivot);
    });

  _ascent.chain(_orbit);

  // ── Final settle to hub (-38, 200, 57) ───────────────────
  var _settle = new TWEEN.Tween(camera.position)
    .to({ x: -38, y: 200, z: 57 }, 2000)
    .easing(TWEEN.Easing.Quadratic.InOut);

  var _settleRot = new TWEEN.Tween(camera.rotation)
    .to({ x: 0, y: -0.37, z: 0 }, 2000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onComplete(function () {

      // ── Bloom final state ──────────────────────────
      _tweenBloom(bloomComposer.passes[1].strength, 1.2, 600,
        TWEEN.Easing.Sinusoidal.Out);

      // ── Arrival bob — gentle y oscillation ─────────
      var _bobStop;
      _bobStop = _wobble(camera, "y", 0.28, 3800);

      // ── HUD: ready state ───────────────────────────
      LearningHUD.progress(100);
      LearningHUD.zone("Learning Hub — Choose Your Path");
      LearningHUD.beat("Your journey begins ✦", 2800);

      // Stop bob after a comfortable pause
      setTimeout(function () {
        if (_bobStop) _bobStop();
      }, 8000);
    });

  _orbit.chain(_settle, _settleRot);
}
