"""
test_single_node.py  (run inside Blender)

Testbed for ONE node only (default: node index 0, the one in your
screenshot). Two things happen:

  1. LOOSE separation -- splits the node into physically disconnected
     mesh islands (same operator as Object_3/Object_4), since photo-
     grammetry tiles often DO have real disconnected fragments (the
     gaps you can see in the screenshot between the wall block, the
     water strips, and the scattered vegetation bits).

  2. Bounding-box proximity clustering on those fragments -- same
     union-find approach as cluster_split.py, so each visually
     separate blob becomes its own object.

  3. Exports the clustered result with ORIGINAL mesh colors/materials
     untouched (no synthetic per-cluster vertex coloring), so you can
     visually confirm in a viewer whether the clustering lines up with
     what you see in the screenshot, using the real photogrammetry
     texture/color data.

Run with:
    blender --background --python test_single_node.py
"""

import bpy
import os
from collections import defaultdict
from mathutils import Vector

# ─── CONFIG ────────────────────────────────────────────────────────
input_glb     = "river.glb"
node_index    = 2       # which node to test (0 = first mesh found)
output_glb    = "test_node2_clustered.glb"

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

# ─── 3. Join clusters -- KEEP original mesh colors/materials as-is ──
final_objects = []
for idx, (root, objs) in enumerate(clusters.items()):
    bpy.ops.object.select_all(action='DESELECT')
    for o in objs:
        o.select_set(True)
    bpy.context.view_layer.objects.active = objs[0]
    if len(objs) > 1:
        bpy.ops.object.join()
    joined = bpy.context.view_layer.objects.active
    joined.name = f"cluster_{idx:02d}"
    final_objects.append(joined)
    # No vertex-color painting here -- original per-vertex colors and
    # material assignments from the source GLB are preserved through
    # the separate/join operations untouched.

log(f"Final: {len(final_objects)} clustered objects (original colors preserved)")

# ─── 4. Export ─────────────────────────────────────────────────────
bpy.ops.outliner.orphans_purge(do_recursive=True)
valid_props = set(bpy.types.EXPORT_SCENE_OT_gltf.bl_rna.properties.keys())
export_kwargs = {"filepath": output_glb}
if "export_format" in valid_props:
    export_kwargs["export_format"] = "GLB"
bpy.ops.export_scene.gltf(**export_kwargs)

out_size_mb = os.path.getsize(output_glb) / (1024 * 1024)
log(f"Exported {output_glb} ({out_size_mb:.2f} MB) -- "
    f"open this in your viewer to see if clusters match the visual blobs")
