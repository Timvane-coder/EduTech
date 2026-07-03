/**
 * splitRamen.mjs — breaks ramenShop.glb into per-object GLB files
 *
 * Usage:
 *   npm install @gltf-transform/core @gltf-transform/extensions @gltf-transform/functions
 *   npm install draco3d
 *   node splitRamen.mjs
 */

import { NodeIO }                           from '@gltf-transform/core';
import { ALL_EXTENSIONS, KHRDracoMeshCompression } from '@gltf-transform/extensions';
import { cloneDocument }                    from '@gltf-transform/functions';
import { promises as fs }                   from 'fs';
import path                                 from 'path';
import draco3d                              from 'draco3d';

const INPUT  = './models/ramenShop.glb';
const OUTDIR = './models/ramen-parts';

const GROUPS = [

  {
    file: 'shop_structure.glb',
    label: 'Ramen shop structure',
    match: n => n === 'ramenShopJoined'
  },

  {
    file: 'machines.glb',
    label: 'Kitchen machines',
    match: n => n === 'machinesJoined'
  },

  {
    file: 'floor.glb',
    label: 'Floor',
    match: n => n === 'floor'
  },

  {
    file: 'screens.glb',
    label: 'All screens',
    match: n => [
      'bigScreen',
      'smallScreen1', 'smallScreen2', 'smallScreen3', 'smallScreen4', 'smallScreen5',
      'tallScreen',
      'sideScreen',
      'tvScreen',
      'littleTVScreen',
    ].includes(n)
  },

  {
    file: 'neon_lights.glb',
    label: 'Neon signs',
    match: n => [
      'neonPink',
      'neonBlue',
      'neonYellow',
      'neonGreen',
      'greenSignSquare',
    ].includes(n)
  },

  {
    file: 'led_lights.glb',
    label: 'LED / lamp lights',
    match: n => [
      'blueLights',
      'redLED',
      'greenLED',
      'yellowRightLight',
      'lampLights',
      'storageLight',
      'portalLight',
      'poleLight',
      'whiteButton',
    ].includes(n)
  },

  {
    file: 'graphics.glb',
    label: 'Graphics / decals / signage',
    match: n => [
      'graphicsJoined',
      'easelFrontGraphic',
      'chinese',
    ].includes(n)
  },

  {
    file: 'navigation.glb',
    label: 'Portfolio navigation labels',
    match: n => [
      'aboutMeBlack', 'aboutMeBlue',
      'projectsRed',  'projectsWhite',
      'articlesWhite','articlesRed',
      'creditsOrange','creditsBlack',
      'jZhouPink',    'jZhouBlack',
      'jesseZhouJoined',
    ].includes(n)
  },

  {
    file: 'arcade.glb',
    label: 'Arcade machine',
    match: n => [
      'arcadeRim',
      'arcadeToken',
      'arcadeScreen',
    ].includes(n)
  },

  {
    file: 'vending_machine.glb',
    label: 'Vending machine',
    match: n => [
      'vendingMachineScreen',
      'vendingMachineLight',
    ].includes(n)
  },

  {
    file: 'dish.glb',
    label: 'Ramen dish + stand',
    match: n => ['dish', 'dishStand'].includes(n)
  },

  {
    file: 'fans.glb',
    label: 'Fans',
    match: n => ['fan1', 'fan2'].includes(n)
  },

  {
    file: 'misc.glb',
    label: 'Misc joined geometry',
    match: n => n === 'miscJoined'
  },

];

// ─── MAIN ────────────────────────────────────────────────────────────────────
async function main() {
  await fs.mkdir(OUTDIR, { recursive: true });

  // Provide draco3d encoder+decoder so KHRDracoMeshCompression can init
  const io = new NodeIO()
    .registerExtensions(ALL_EXTENSIONS)
    .registerDependencies({
      'draco3d.decoder': await draco3d.createDecoderModule(),
      'draco3d.encoder': await draco3d.createEncoderModule(),
    });

  console.log(`\n📂  Reading ${INPUT} …`);
  const srcDoc = await io.read(INPUT);
  const srcRoot = srcDoc.getRoot();

  const allNodes = srcRoot.listNodes();
  console.log(`🔎  Total nodes: ${allNodes.length}`);

  const buckets = GROUPS.map(() => new Set());
  const unmatched = new Set();

  for (const node of allNodes) {
    if (!node.getMesh()) continue;
    const name = node.getName();
    let matched = false;
    for (let i = 0; i < GROUPS.length; i++) {
      if (GROUPS[i].match(name)) {
        buckets[i].add(name);
        matched = true;
        break;
      }
    }
    if (!matched) unmatched.add(name);
  }

  console.log('\n📋  Classification summary:');
  GROUPS.forEach((g, i) =>
    console.log(`  [${g.file}]  ${g.label}  →  ${buckets[i].size} nodes`)
  );
  if (unmatched.size > 0) {
    console.log(`\n⚠️   Unmatched nodes (${unmatched.size}):`, [...unmatched].join(' | '));
  } else {
    console.log(`\n✅  All nodes classified — 0 unmatched`);
  }

  for (let i = 0; i < GROUPS.length; i++) {
    const g = GROUPS[i];
    if (buckets[i].size === 0) {
      console.log(`\n⚠️   Skipping ${g.file} — no nodes matched`);
      continue;
    }
    console.log(`\n✂️   Writing ${g.file}  (${buckets[i].size} nodes) …`);
    const clone = cloneDocument(srcDoc);
    for (const node of clone.getRoot().listNodes()) {
      if (!node.getMesh()) continue;
      if (!buckets[i].has(node.getName())) node.setMesh(null);
    }
    pruneEmptyNodes(clone.getRoot());
    await io.write(path.join(OUTDIR, g.file), clone);
    console.log(`   ✅  Saved → ${path.join(OUTDIR, g.file)}`);
  }

  console.log('\n🎉  All done! Parts in', OUTDIR);
}

function pruneEmptyNodes(root) {
  let changed = true;
  while (changed) {
    changed = false;
    for (const node of root.listNodes()) {
      if (!node.getMesh() && node.listChildren().length === 0) {
        node.dispose();
        changed = true;
      }
    }
  }
}

main().catch(err => { console.error('❌', err); process.exit(1); });
