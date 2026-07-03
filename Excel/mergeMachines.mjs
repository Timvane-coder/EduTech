/**
 * mergeMachines.mjs
 * Merges the 12 cluster GLBs into clean named parts
 * based on visual analysis of overlapping fragments.
 *
 * Final output parts:
 *   circular_hub.glb       — Box Left + Box Rear-Left + Box Mid
 *   right_unit.glb         — Box Right + Distributor Hub
 *   left_screens.glb       — Box Center
 *   motor_frames.glb       — Box Far-Left
 *   top_assembly.glb       — Rotating Hub + Box Rear + Dish/Solar
 *   pipes.glb              — Pipes A + Pipes B (kept separate, optional)
 *
 * Usage:
 *   node mergeMachines.mjs
 */

import { NodeIO, Document } from '@gltf-transform/core';
import { ALL_EXTENSIONS }   from '@gltf-transform/extensions';
import { cloneDocument }    from '@gltf-transform/functions';
import draco3d              from 'draco3d';
import { promises as fs }   from 'fs';
import path                 from 'path';

const INDIR  = './models/ramen-parts/machines-split';
const OUTDIR = './models/ramen-parts/machines-merged';

// ── MERGE GROUPS ──────────────────────────────────────────────────────────────
// Each group defines output filename + which source GLBs to merge into it.
const GROUPS = [
  {
    out: 'circular_hub.glb',
    label: 'Circular Hub (distributor ring)',
    parts: [
      'wall_box_left.glb',        // k=6  — first fragment of ring + side screen frame
      'wall_box_rear_left.glb',   // k=3  — second fragment of ring + more screen frames
      'wall_box_mid.glb',         // k=9  — final piece completing the ring + roof boxes
    ]
  },
  {
    out: 'right_unit.glb',
    label: 'Right stacked boxes + pipe stand',
    parts: [
      'wall_box_right.glb',       // k=11 — stacked square boxes
      'distributor_hub.glb',      // k=6  — completes right box + pipe fragments
    ]
  },
  {
    out: 'left_screens.glb',
    label: 'Left screen frames + box',
    parts: [
      'wall_box_center.glb',      // k=8  — big screen frames + small screen frames
    ]
  },
  {
    out: 'motor_frames.glb',
    label: 'Motor / rotating element + extra frames',
    parts: [
      'wall_box_far_left.glb',    // k=4  — rotating motor object + remaining frames
    ]
  },
  {
    out: 'top_assembly.glb',
    label: 'Top assembly — dish, rear structure, rotating hub',
    parts: [
      'rotating_hub.glb',         // k=10 — rotating hub final fragments
      'wall_box_rear.glb',        // k=5  — rear structure
      'dish_solar_panel.glb',     // k=0  — dish / solar panel + stand
    ]
  },
  {
    out: 'pipes.glb',
    label: 'Pipes / cables (kept separate)',
    parts: [
      'pipes_cables_a.glb',       // k=7
      'pipes_cables_b.glb',       // k=1
    ]
  },
];

// ── IO SETUP ──────────────────────────────────────────────────────────────────
async function makeIO() {
  return new NodeIO()
    .registerExtensions(ALL_EXTENSIONS)
    .registerDependencies({
      'draco3d.decoder': await draco3d.createDecoderModule(),
      'draco3d.encoder': await draco3d.createEncoderModule(),
    });
}

// ── MERGE helper ─────────────────────────────────────────────────────────────
// Reads N source GLBs and writes them as one GLB by cloning the first doc
// and appending all nodes from the rest into its default scene.

async function mergeGLBs(io, srcPaths, outPath, label) {
  if (srcPaths.length === 1) {
    // Single source — just copy
    const doc = await io.read(srcPaths[0]);
    await io.write(outPath, doc);
    return;
  }

  // Read all source docs
  const docs = await Promise.all(srcPaths.map(p => io.read(p)));

  // Use first doc as base
  const baseDoc   = docs[0];
  const baseScene = baseDoc.getRoot().getDefaultScene()
    || baseDoc.getRoot().listScenes()[0];

  // Append nodes from each subsequent doc into base scene
  for (let i = 1; i < docs.length; i++) {
    const srcDoc   = docs[i];
    const srcScene = srcDoc.getRoot().getDefaultScene()
      || srcDoc.getRoot().listScenes()[0];
    if (!srcScene) continue;

    // Clone each root node from the source into the base document
    for (const srcNode of srcScene.listChildren()) {
      const clonedNode = cloneNode(baseDoc, srcDoc, srcNode);
      baseScene.addChild(clonedNode);
    }
  }

  await io.write(outPath, baseDoc);
}

// Deep-clone a node (and its mesh/material/accessors) from srcDoc into dstDoc
function cloneNode(dstDoc, srcDoc, srcNode) {
  const dstNode = dstDoc.createNode(srcNode.getName());
  dstNode.setTranslation(srcNode.getTranslation());
  dstNode.setRotation(srcNode.getRotation());
  dstNode.setScale(srcNode.getScale());

  const srcMesh = srcNode.getMesh();
  if (srcMesh) {
    const dstMesh = dstDoc.createMesh(srcMesh.getName());

    for (const srcPrim of srcMesh.listPrimitives()) {
      const dstPrim = dstDoc.createPrimitive();
      const dstBuf  = dstDoc.getRoot().listBuffers()[0]
        || dstDoc.createBuffer();

      // Clone indices
      const srcIdx = srcPrim.getIndices();
      if (srcIdx) {
        const dstIdx = dstDoc.createAccessor()
          .setType(srcIdx.getType())
          .setArray(srcIdx.getArray().slice())
          .setBuffer(dstBuf);
        dstPrim.setIndices(dstIdx);
      }

      // Clone attributes
      for (const semantic of srcPrim.listSemantics()) {
        const srcAcc = srcPrim.getAttribute(semantic);
        const dstAcc = dstDoc.createAccessor()
          .setType(srcAcc.getType())
          .setArray(srcAcc.getArray().slice())
          .setBuffer(dstBuf);
        dstPrim.setAttribute(semantic, dstAcc);
      }

      // Clone material (basic — copies base colour factor only)
      const srcMat = srcPrim.getMaterial();
      if (srcMat) {
        const dstMat = dstDoc.createMaterial(srcMat.getName());
        dstMat.setBaseColorFactor(srcMat.getBaseColorFactor());
        dstMat.setMetallicFactor(srcMat.getMetallicFactor());
        dstMat.setRoughnessFactor(srcMat.getRoughnessFactor());
        dstPrim.setMaterial(dstMat);
      }

      dstMesh.addPrimitive(dstPrim);
    }

    dstNode.setMesh(dstMesh);
  }

  // Recurse children
  for (const child of srcNode.listChildren()) {
    dstNode.addChild(cloneNode(dstDoc, srcDoc, child));
  }

  return dstNode;
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
async function main() {
  await fs.mkdir(OUTDIR, { recursive: true });
  const io = await makeIO();

  console.log(`\n🔧  Merging machine clusters → ${OUTDIR}\n`);

  for (const group of GROUPS) {
    const srcPaths = group.parts.map(f => path.join(INDIR, f));

    // Check which sources exist
    const existing = [];
    for (const p of srcPaths) {
      try { await fs.access(p); existing.push(p); }
      catch { console.warn(`  ⚠️  Missing: ${path.basename(p)} — skipping`); }
    }

    if (existing.length === 0) {
      console.log(`⚠️   Skipping ${group.out} — no source files found`);
      continue;
    }

    const outPath = path.join(OUTDIR, group.out);
    console.log(`✂️   ${group.label}`);
    console.log(`    Sources : ${existing.map(p => path.basename(p)).join(' + ')}`);

    try {
      await mergeGLBs(io, existing, outPath, group.label);
      const stat = await fs.stat(outPath);
      console.log(`    ✅  → ${group.out}  (${(stat.size/1024).toFixed(1)} KB)\n`);
    } catch (err) {
      console.error(`    ❌  ${err.message}\n`);
    }
  }

  console.log('🎉  All done! Merged parts in', OUTDIR);
  console.log('\n📋  Final parts:');
  GROUPS.forEach(g => console.log(`    ${g.out.padEnd(25)}  ${g.label}`));
}

main().catch(err => { console.error('❌', err); process.exit(1); });
