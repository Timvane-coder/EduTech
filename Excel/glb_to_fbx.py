"""
glb_to_fbx.py

Headless Blender conversion script: GLB -> FBX, preserving meshes,
armature/bone hierarchy, skin weights, and shape keys (morph targets).

Usage:
    blender --background --python glb_to_fbx.py -- <input.glb> <output.fbx>

Example:
    blender --background --python glb_to_fbx.py -- ./avaturn_mannequin_feet.glb ./avaturn_mannequin_feet.fbx

If no arguments are given, it defaults to converting
"avaturn_mannequin_feet.glb" -> "avaturn_mannequin_feet.fbx" in the
current working directory (useful for double-click-free repeated testing).

Notes:
- Requires Blender 3.x or 4.x (uses bpy's built-in glTF 2.0 importer and
  FBX exporter add-ons, both bundled with standard Blender installs).
- Run from the directory containing the GLB, or pass absolute paths.
"""

import bpy
import sys
import os


def parse_args():
    """Extract script args after the '--' separator Blender uses to
    distinguish its own CLI flags from script-specific ones."""
    argv = sys.argv
    if "--" in argv:
        argv = argv[argv.index("--") + 1:]
    else:
        argv = []

    if len(argv) >= 2:
        input_path = os.path.abspath(argv[0])
        output_path = os.path.abspath(argv[1])
    elif len(argv) == 1:
        input_path = os.path.abspath(argv[0])
        output_path = os.path.splitext(input_path)[0] + ".fbx"
    else:
        input_path = os.path.abspath("avaturn_mannequin_feet.glb")
        output_path = os.path.splitext(input_path)[0] + ".fbx"

    return input_path, output_path


def clear_scene():
    """Remove Blender's default scene contents (cube, camera, light) so
    the exported FBX contains only the imported asset."""
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)

    # Purge orphaned data blocks left behind by the default scene
    for block_collection in (
        bpy.data.meshes,
        bpy.data.armatures,
        bpy.data.materials,
        bpy.data.textures,
        bpy.data.images,
        bpy.data.cameras,
        bpy.data.lights,
    ):
        for block in list(block_collection):
            if block.users == 0:
                block_collection.remove(block)


def import_glb(path):
    if not os.path.isfile(path):
        raise FileNotFoundError(f"Input GLB not found: {path}")

    print(f"[glb_to_fbx] Importing: {path}")
    bpy.ops.import_scene.gltf(filepath=path)


def report_scene_contents():
    """Print a summary of what got imported, useful for confirming meshes,
    armatures, and shape keys all made it through before export."""
    mesh_objs = [o for o in bpy.data.objects if o.type == "MESH"]
    armature_objs = [o for o in bpy.data.objects if o.type == "ARMATURE"]

    print(f"[glb_to_fbx] Mesh objects: {len(mesh_objs)}")
    for obj in mesh_objs:
        shape_keys = obj.data.shape_keys
        num_keys = len(shape_keys.key_blocks) - 1 if shape_keys else 0  # -1 excludes "Basis"
        has_armature_mod = any(m.type == "ARMATURE" for m in obj.modifiers)
        print(
            f"    - {obj.name}: verts={len(obj.data.vertices)}, "
            f"shape_keys={num_keys}, armature_modifier={has_armature_mod}"
        )

    print(f"[glb_to_fbx] Armature objects: {len(armature_objs)}")
    for obj in armature_objs:
        print(f"    - {obj.name}: bones={len(obj.data.bones)}")

    if not armature_objs:
        print("[glb_to_fbx] WARNING: no armature found in imported scene.")
    if not mesh_objs:
        print("[glb_to_fbx] WARNING: no mesh objects found in imported scene.")


def select_all_for_export():
    bpy.ops.object.select_all(action="SELECT")


def export_fbx(path):
    print(f"[glb_to_fbx] Exporting: {path}")
    select_all_for_export()

    bpy.ops.export_scene.fbx(
        filepath=path,
        use_selection=True,
        # Geometry
        mesh_smooth_type="FACE",
        use_mesh_modifiers=False,   # keep Armature modifier intact for skinning;
                                    # do not bake it into static mesh data
        use_tspace=True,
        # Armature / bones
        add_leaf_bones=False,       # avoid FBX's extra leaf-bone injection
        primary_bone_axis="Y",
        secondary_bone_axis="X",
        armature_nodetype="NULL",
        use_armature_deform_only=False,  # keep all bones, including non-deform helpers
        # Shape keys / morphs
        bake_anim=True,
        bake_anim_use_all_bones=True,
        bake_anim_use_all_actions=True,
        bake_anim_use_nla_strips=True,
        bake_anim_force_startend_keying=True,
        # Materials / textures
        path_mode="COPY",
        embed_textures=True,
        # Axis conversion: glTF is Y-up, FBX for most DCC/game-engine round
        # trips expects Y-up too, so keep axes as-is (no forced Z-up flip).
        axis_forward="-Z",
        axis_up="Y",
        global_scale=1.0,
        apply_unit_scale=True,
        apply_scale_options="FBX_SCALE_ALL",
    )
    print("[glb_to_fbx] Export complete.")


def main():
    input_path, output_path = parse_args()

    print("=" * 60)
    print(f"[glb_to_fbx] Input:  {input_path}")
    print(f"[glb_to_fbx] Output: {output_path}")
    print("=" * 60)

    clear_scene()
    import_glb(input_path)
    report_scene_contents()
    export_fbx(output_path)

    print("=" * 60)
    print(f"[glb_to_fbx] Done. FBX written to: {output_path}")
    print("=" * 60)


if __name__ == "__main__":
    main()
