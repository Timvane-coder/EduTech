"""
cluster_split.py

Splits a target object into loose geometric islands, then re-merges
those islands back into spatially-coherent clusters (e.g. each visible
clump of foliage/rock) using a dependency-free union-find over
bounding-box proximity. No scikit-learn / no extra installs required.

Run with:
    blender --background --python cluster_split.py
"""

import bpy
import sys
import os
from mathutils import Vector

# ─── CONFIG ────────────────────────────────────────────────────────
input_glb          = "scene-optimize.glb"
target_object_name = "Object_2"
output_glb         = "output_clustered_2.glb"

# Distance threshold (in Blender units, i.e. same units as your scene)
# for deciding two fragments belong to the same cluster. Start here and
# tune up/down based on the printed cluster count vs what you expect.
CLUSTER_DISTANCE = 0.5

# Name prefix for the resulting clustered objects
CLUSTER_PREFIX = "Object_2_cluster"
# ────────────────────────────────────────────────────────────────────


def log(msg):
    print(f"[cluster_split] {msg}")


# ─── 1. Fresh scene + import ─────────────────────────────────────────
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=input_glb)

obj = bpy.data.objects.get(target_object_name)
if obj is None:
    log(f"Object '{target_object_name}' not found. Available objects:")
    for o in bpy.data.objects:
        log(f"  - {o.name}")
    sys.exit(1)

# ─── 2. Separate by loose parts ──────────────────────────────────────
bpy.ops.object.select_all(action='DESELECT')
obj.select_set(True)
bpy.context.view_layer.objects.active = obj

bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.mesh.select_all(action='SELECT')
bpy.ops.mesh.separate(type='LOOSE')
bpy.ops.object.mode_set(mode='OBJECT')

fragments = [o for o in bpy.data.objects
             if o.name == target_object_name or o.name.startswith(target_object_name + ".")]
log(f"Split into {len(fragments)} loose fragments")

# ─── 3. Compute world-space bounding-box info per fragment ──────────
def world_bounds(o):
    """Return (min_corner, max_corner, center) in world space."""
    corners = [o.matrix_world @ Vector(c) for c in o.bound_box]
    xs = [c.x for c in corners]
    ys = [c.y for c in corners]
    zs = [c.z for c in corners]
    mn = Vector((min(xs), min(ys), min(zs)))
    mx = Vector((max(xs), max(ys), max(zs)))
    center = (mn + mx) / 2
    return mn, mx, center


frag_info = []
for o in fragments:
    mn, mx, center = world_bounds(o)
    frag_info.append({"obj": o, "min": mn, "max": mx, "center": center})


def box_distance(a, b):
    """
    Distance between two axis-aligned bounding boxes.
    Returns 0 if they overlap/touch, else the gap distance.
    """
    dx = max(a["min"].x - b["max"].x, b["min"].x - a["max"].x, 0)
    dy = max(a["min"].y - b["max"].y, b["min"].y - a["max"].y, 0)
    dz = max(a["min"].z - b["max"].z, b["min"].z - a["max"].z, 0)
    return (dx**2 + dy**2 + dz**2) ** 0.5


# ─── 4. Union-Find (single-linkage clustering by distance threshold) ─
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


# Naive O(n^2) pairwise comparison. For 9581 fragments this is ~46M
# comparisons -- slow but workable in a background batch run. If it's
# too slow, sort by centroid on one axis first and only compare nearby
# candidates (see NOTE at bottom of file).
log("Clustering fragments by bounding-box proximity (this may take a while)...")
for i in range(n):
    if i % 500 == 0:
        log(f"  ...{i}/{n}")
    for j in range(i + 1, n):
        if box_distance(frag_info[i], frag_info[j]) <= CLUSTER_DISTANCE:
            union(i, j)

# ─── 5. Group fragments by cluster root ──────────────────────────────
clusters = {}
for i in range(n):
    root = find(i)
    clusters.setdefault(root, []).append(frag_info[i]["obj"])

log(f"Found {len(clusters)} clusters from {n} fragments")

# ─── 6. Join fragments within each cluster into one object ──────────
final_objects = []
for idx, (root, objs) in enumerate(clusters.items()):
    bpy.ops.object.select_all(action='DESELECT')
    for o in objs:
        o.select_set(True)
    bpy.context.view_layer.objects.active = objs[0]
    if len(objs) > 1:
        bpy.ops.object.join()
    joined = bpy.context.view_layer.objects.active
    joined.name = f"{CLUSTER_PREFIX}_{idx:02d}"
    final_objects.append(joined)
    log(f"  Cluster {idx:02d}: {len(objs)} fragments -> '{joined.name}'")

log(f"Final object count: {len(final_objects)}")

# ─── 7. Cleanup + export ─────────────────────────────────────────────
bpy.ops.outliner.orphans_purge(do_recursive=True)

# Different Blender versions rename/remove glTF exporter properties
# (e.g. WEBP support, export_jpeg_quality) without warning. Rather than
# guessing flag names, build the export kwargs from only the properties
# this installed version actually supports.
valid_props = set(bpy.types.EXPORT_SCENE_OT_gltf.bl_rna.properties.keys())
log(f"glTF exporter supports {len(valid_props)} properties on this Blender version")

desired_kwargs = {
    "filepath": output_glb,
    "export_format": "GLB",
    "export_image_format": "JPEG",
    "export_jpeg_quality": 90,
    "export_draco_mesh_compression_enable": True,
    "export_draco_mesh_compression_level": 6,
}

export_kwargs = {}
skipped = []
for key, value in desired_kwargs.items():
    if key in valid_props or key == "filepath":
        export_kwargs[key] = value
    else:
        skipped.append(key)

if skipped:
    log(f"Skipping unsupported exporter properties on this version: {skipped}")

bpy.ops.export_scene.gltf(**export_kwargs)

out_size_mb = os.path.getsize(output_glb) / (1024 * 1024)
log(f"Exported {output_glb} ({out_size_mb:.2f} MB) with {len(final_objects)} clustered objects")

# NOTE on performance:
# If clustering 9581 fragments is too slow with the O(n^2) loop above,
# replace it with a spatial-grid bucketing pass: bucket fragment
# centers into a 3D grid of cell size == CLUSTER_DISTANCE, then only
# compare fragments in the same or neighboring cells. That reduces
# comparisons from O(n^2) to roughly O(n) for evenly-distributed data.
# Ask if you want that version -- it's a straightforward upgrade to
# the union() loop above.
