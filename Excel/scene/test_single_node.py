"""
test_single_node.py  (run inside Blender)

Testbed for ONE node only (default: node index 0). Three things happen:

  1. LOOSE separation -- splits the node into physically disconnected
     mesh islands (same operator as Object_3/Object_4), since photo-
     grammetry tiles often DO have real disconnected fragments.

  2. Bounding-box proximity clustering on those fragments -- same
     union-find approach as cluster_split.py, grouping fragments that
     are spatially close into the same numbered cluster.

  3. Exports the fragments UNJOINED (each fragment stays its own
     object, renamed "cluster{CC}_fragment{FFFF}"), plus a manifest
     JSON listing every cluster's fragment count and ordered names.
     This is deliberately NOT joined into one mesh per cluster --
     proximity clustering is often imperfect (e.g. a wall fragment
     sitting close enough to vegetation to get grouped with it), so
     the next step is solo-inspecting each cluster's fragments one at
     a time in the HTML viewer, correcting/relabeling as needed, and
     only THEN joining by corrected label (a separate script, once
     labeling is done).

Run with:
    blender --background --python test_single_node.py
"""

import bpy
import os
from collections import defaultdict
from mathutils import Vector

# ─── CONFIG ────────────────────────────────────────────────────────
input_glb     = "river.glb"
node_index    = 2            # which node to test (0 = first mesh found)
output_glb    = "test_node2_fragments_by_cluster.glb"

# Same value validated on river.glb node 0. Scene scale may differ
# here -- if fragment/cluster counts look off, tune this.
CLUSTER_DISTANCE = 0.05   # start small -- try a few values if results
                           # look off
# ────────────────────────────────────────────────────────────────────


def log(msg):
    print(f"[test_single_node] {msg}")


def world_bounds(o):
    corners = [o.matrix_world @ Vector(c) for c in o.bound_box]
    xs = [c.x for c in corners]
    ys = [c.y for c in corners]
    zs = [c.z for c in corners]
    return (Vector((min(xs), min(ys), min(zs))),
            Vector((max(xs), max(ys), max(zs))))


def box_distance(a_min, a_max, b_min, b_max):
    dx = max(a_min.x - b_max.x, b_min.x - a_max.x, 0)
    dy = max(a_min.y - b_max.y, b_min.y - a_max.y, 0)
    dz = max(a_min.z - b_max.z, b_min.z - a_max.z, 0)
    return (dx**2 + dy**2 + dz**2) ** 0.5


# ─── Load scene, isolate one node ────────────────────────────────────
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=input_glb)

mesh_objects = [o for o in bpy.data.objects if o.type == 'MESH']
log(f"Scene has {len(mesh_objects)} nodes total")

target = mesh_objects[node_index]
log(f"Testing node [{node_index}]: '{target.name}' "
    f"({len(target.data.vertices)} verts, {len(target.data.polygons)} polys)")

for o in mesh_objects:
    if o != target:
        bpy.data.objects.remove(o, do_unlink=True)
bpy.ops.outliner.orphans_purge(do_recursive=True)

# ─── 1. Separate by loose parts ──────────────────────────────────────
bpy.ops.object.select_all(action='DESELECT')
target.select_set(True)
bpy.context.view_layer.objects.active = target

bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.mesh.select_all(action='SELECT')
bpy.ops.mesh.separate(type='LOOSE')
bpy.ops.object.mode_set(mode='OBJECT')

fragments = [o for o in bpy.data.objects if o.type == 'MESH']
log(f"LOOSE separation produced {len(fragments)} fragments")

if len(fragments) <= 1:
    log("WARNING: only 1 fragment -- this tile has no disconnected "
        "geometry, meaning LOOSE separation alone won't help. You'll "
        "need the DBSCAN/feature approach instead for this node.")

# ─── 2. Bounding-box proximity clustering (union-find) ──────────────
frag_info = []
for o in fragments:
    mn, mx = world_bounds(o)
    frag_info.append({"obj": o, "min": mn, "max": mx})

n = len(frag_info)
parent = list(range(n))


def find(i):
    while parent[i] != i:
        parent[i] = parent[parent[i]]
        i = parent[i]
    return i


def union(i, j):
    ri, rj = find(i), find(j)
    if ri != rj:
        parent[ri] = rj


for i in range(n):
    for j in range(i + 1, n):
        if box_distance(frag_info[i]["min"], frag_info[i]["max"],
                         frag_info[j]["min"], frag_info[j]["max"]) <= CLUSTER_DISTANCE:
            union(i, j)

clusters = defaultdict(list)
for i in range(n):
    clusters[find(i)].append(frag_info[i]["obj"])

log(f"Bounding-box clustering (eps={CLUSTER_DISTANCE}): "
    f"{n} fragments -> {len(clusters)} clusters")
for i, (root, objs) in enumerate(clusters.items()):
    log(f"  Cluster {i:02d}: {len(objs)} fragments")

# ─── 3. Export UNJOINED, organized by cluster, for solo-inspection ──
# Each fragment keeps its own object/mesh -- NOT joined -- and is
# renamed "cluster{CC}_fragment{FFFF}" so the HTML viewer can filter
# to one cluster and index within just that cluster's fragments.
# A manifest records, for each cluster, its fragment count and the
# ordered list of fragment names -- this is what "Select cluster" in
# the viewer will read to know how many nodes exist per cluster.
import json

manifest = {"clusters": []}

# Two-pass rename to avoid Blender silently appending .001/.002 when a
# desired name collides with an object that hasn't been renamed yet.
# Pass 1: give every fragment a guaranteed-unique temporary name.
# Pass 2: rename to the final cluster{CC}_fragment{FFFF} scheme, now
# guaranteed collision-free since no object can still be holding a
# target name.
all_objs_in_order = []
for idx, (root, objs) in enumerate(clusters.items()):
    def centroid_key(o):
        mn, mx = world_bounds(o)
        c = (mn + mx) / 2
        return (c.x, c.y, c.z)
    objs_sorted = sorted(objs, key=centroid_key)
    all_objs_in_order.append((idx, objs_sorted))

# Pass 1: unique temp names
for tmp_i, (idx, objs_sorted) in enumerate(all_objs_in_order):
    for f_idx, o in enumerate(objs_sorted):
        o.name = f"__tmp_rename_{tmp_i:02d}_{f_idx:04d}"

# Pass 2: final names (collision-free now)
for idx, objs_sorted in all_objs_in_order:
    frag_names = []
    for f_idx, o in enumerate(objs_sorted):
        desired_name = f"cluster{idx:02d}_fragment{f_idx:04d}"
        o.name = desired_name
        actual_name = o.name
        if actual_name != desired_name:
            log(f"  WARNING: unexpected name collision -- wanted "
                f"'{desired_name}', got '{actual_name}'")
        frag_names.append(actual_name)

    manifest["clusters"].append({
        "cluster_index": idx,
        "fragment_count": len(frag_names),
        "fragment_names": frag_names,
    })

log(f"Renamed all fragments as cluster{{CC}}_fragment{{FFFF}} "
    f"(unjoined -- {n} total objects preserved individually)")

# ─── 4. Write manifest + export (unjoined fragments) ─────────────────
manifest_path = output_glb.rsplit(".", 1)[0] + "_manifest.json"
with open(manifest_path, "w") as f:
    json.dump(manifest, f, indent=2)
log(f"Wrote {manifest_path}")

bpy.ops.outliner.orphans_purge(do_recursive=True)
valid_props = set(bpy.types.EXPORT_SCENE_OT_gltf.bl_rna.properties.keys())
export_kwargs = {"filepath": output_glb}
if "export_format" in valid_props:
    export_kwargs["export_format"] = "GLB"
bpy.ops.export_scene.gltf(**export_kwargs)

out_size_mb = os.path.getsize(output_glb) / (1024 * 1024)
log(f"Exported {output_glb} ({out_size_mb:.2f} MB) -- "
    f"{n} unjoined fragments across {len(clusters)} clusters, "
    f"ready for per-cluster solo-inspection in the HTML viewer")
