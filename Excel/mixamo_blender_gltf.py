import bpy
import bpy_extras.node_shader_utils as node_shader_utils
import os

# ============================================================
# MONKEY-PATCH: Blender 3.0.1 FBX importer colorspace bug
# ============================================================
original_image_setter = node_shader_utils.ShaderImageTextureWrapper.image.fset

def patched_image_setter(self, image):
    try:
        original_image_setter(self, image)
    except TypeError as e:
        if 'Non-Color' in str(e):
            print(f"Patched around colorspace bug for image: {image}")
            image.colorspace_settings.name = 'Linear'
        else:
            raise

node_shader_utils.ShaderImageTextureWrapper.image = property(
    node_shader_utils.ShaderImageTextureWrapper.image.fget,
    patched_image_setter
)

# ============================================================
# CONFIG — edit these paths for each pipeline run
# ============================================================
MAIN_FBX = "/root/speech/StandingGreeting.fbx"          # has meshes, skin, morphs, bones + its own clip
EXTRA_FBX_FILES = [                              # skinless — animation only, same skeleton
    "/root/speech/WalkForwardArcRight.fbx",
    "/root/speech/BackwardWalking.fbx",
    "/root/speech/HostageIdle.fbx",
]
OUTPUT_GLB = "/root/speech/avatar_2.glb"

# ============================================================
# 1. RESET SCENE, IMPORT THE MAIN (fully-skinned) FBX
# ============================================================
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.fbx(filepath=MAIN_FBX)
print(f"Imported main FBX: {MAIN_FBX}")

main_armature = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
main_meshes = [o for o in bpy.data.objects if o.type == 'MESH']
print(f"Main armature: {main_armature.name}, bones: {len(main_armature.data.bones)}")
print(f"Main meshes: {[m.name for m in main_meshes]}")

main_actions_before = set(bpy.data.actions.keys())
print(f"Actions from main FBX: {main_actions_before}")

# ============================================================
# 2. FOR EACH EXTRA (skinless) FBX: import into a TEMP scene area,
#    extract its Action, retarget onto main_armature, then clean up
#    the imported skinless armature/objects so they don't pollute
#    the final export.
# ============================================================
for extra_fbx in EXTRA_FBX_FILES:
    clip_label = os.path.splitext(os.path.basename(extra_fbx))[0]
    print(f"\n--- Processing extra clip source: {extra_fbx} ({clip_label}) ---")

    objects_before = set(bpy.data.objects.keys())
    actions_before = set(bpy.data.actions.keys())

    bpy.ops.import_scene.fbx(filepath=extra_fbx)

    objects_after = set(bpy.data.objects.keys())
    actions_after = set(bpy.data.actions.keys())

    new_objects = objects_after - objects_before
    new_actions = actions_after - actions_before

    print(f"  New objects from this import: {new_objects}")
    print(f"  New actions from this import: {new_actions}")

    if not new_actions:
        print(f"  WARNING: no new action found for {clip_label} — skipping")
        continue

    # There should be exactly one new action (the clip). If Mixamo's
    # skinless export includes more than one, take the first and warn.
    new_action_name = list(new_actions)[0]
    if len(new_actions) > 1:
        print(f"  WARNING: multiple new actions found {new_actions}, using '{new_action_name}'")

    new_action = bpy.data.actions[new_action_name]

    # Rename the action to something identifiable, tied to this clip's
    # source file, so it doesn't collide with anything else and is easy
    # to find later in the browser's clip dropdown.
    new_action.name = clip_label
    new_action.use_fake_user = True  # protect from garbage collection

    # Find the newly-imported (skinless) armature object so we can
    # delete it after extracting the action — we only wanted its
    # animation data, not the object itself.
    new_armature_objs = [o for o in bpy.data.objects
                          if o.name in new_objects and o.type == 'ARMATURE']

    for obj in new_armature_objs:
        # Detach animation_data BEFORE deleting, so the action itself
        # (already renamed and fake-user-protected above) survives
        # independently of this temporary armature object.
        if obj.animation_data:
            obj.animation_data.action = None
        bpy.data.objects.remove(obj, do_unlink=True)

    # Also remove any non-armature objects this import brought in
    # (skinless exports sometimes still bring an empty/root object)
    for obj_name in new_objects:
        obj = bpy.data.objects.get(obj_name)
        if obj is not None:
            bpy.data.objects.remove(obj, do_unlink=True)

    print(f"  Extracted and preserved action '{clip_label}', cleaned up temporary import objects")

print(f"\nAll actions now in file: {[a.name for a in bpy.data.actions]}")

# ============================================================
# 3. VERIFY SKINNING + MORPHS BEFORE EXPORT
# ============================================================
for mesh_obj in main_meshes:
    has_armature_mod = any(mod.type == 'ARMATURE' and mod.object == main_armature
                            for mod in mesh_obj.modifiers)
    shape_key_count = (len(mesh_obj.data.shape_keys.key_blocks) - 1
                       if mesh_obj.data.shape_keys else 0)
    print(f"{mesh_obj.name}: skinned={has_armature_mod}, shape_keys={shape_key_count}")

# ============================================================
# 4. PUSH ALL ACTIONS ONTO NLA TRACKS AND EXPORT
# ============================================================
bpy.ops.object.select_all(action='DESELECT')
main_armature.select_set(True)
for mesh_obj in main_meshes:
    mesh_obj.select_set(True)

if not main_armature.animation_data:
    main_armature.animation_data_create()

while main_armature.animation_data.nla_tracks:
    main_armature.animation_data.nla_tracks.remove(main_armature.animation_data.nla_tracks[0])

for action in bpy.data.actions:
    track = main_armature.animation_data.nla_tracks.new()
    track.name = action.name
    track.strips.new(action.name, start=1, action=action)

rna = bpy.ops.export_scene.gltf.get_rna_type()
supported_props = {p.identifier for p in rna.properties}

export_kwargs = dict(
    filepath=OUTPUT_GLB,
    export_format='GLB',
    use_selection=True,
    export_morph=True,
    export_skins=True,
    export_animations=True,
)

if 'export_nla_strips' in supported_props:
    export_kwargs['export_nla_strips'] = True
elif 'export_animation_mode' in supported_props:
    export_kwargs['export_animation_mode'] = 'ACTIONS'
else:
    print('WARNING: neither export option supported — only active action may export.')

bpy.ops.export_scene.gltf(**export_kwargs)
print(f"\nExported to {OUTPUT_GLB} with actions: {[a.name for a in bpy.data.actions]}")
