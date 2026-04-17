'use client'
import { useState, useEffect } from 'react'

// ─── Diagram registry mirroring the CLI test suite ───────────────────────────
const DIAGRAMS = {
  benedictsTest: {
    label: "Benedict's Test for Reducing Sugars",
    tag: 'BENE',
    width: 720,
    height: 560,
    groups: [
      {
        name: 'Step-by-Step Build',
        cases: [1, 2, 3, 4, 5].map(step => ({
          filename: `bene_step_${step}.png`,
          desc: [
            "Step 1 — Benedict's Reagent (blue Cu²⁺)",
            'Step 2 — Adding Food Sample',
            'Step 3 — Heating in Water Bath',
            'Step 4 — Colour Change Observation',
            'Step 5 — Results Table & Interpretation'
          ][step - 1],
          options: {
            component: 'complete',
            sugarConcentration: step >= 4 ? 'high' : 'negative',
            drawingStep: step,
            showLabels: true,
            showInset: step === 5,
            insetType: 'colour-gradient'
          }
        }))
      },
      {
        name: 'All Sugar Concentrations (Step 4)',
        cases: ['negative', 'trace', 'low', 'medium', 'high'].map(conc => ({
          filename: `bene_conc_${conc}.png`,
          desc: `Benedict's — ${conc} reducing sugar`,
          options: {
            component: 'complete',
            sugarConcentration: conc,
            drawingStep: 4,
            showLabels: true,
            showInset: false
          }
        }))
      },
      {
        name: 'Step 5 with All Insets',
        cases: ['colour-gradient', 'redox-reaction', 'copper-reduction', 'sugar-structures'].map(inset => ({
          filename: `bene_inset_${inset}.png`,
          desc: `Full diagram + inset: ${inset}`,
          options: {
            component: 'complete',
            sugarConcentration: 'high',
            drawingStep: 5,
            showLabels: true,
            showInset: true,
            insetType: inset
          }
        }))
      }
    ]
  },

  iodineTest: {
    label: 'Iodine Test for Starch',
    tag: 'IODI',
    width: 680,
    height: 520,
    groups: [
      {
        name: 'Step-by-Step Build',
        cases: [1, 2, 3, 4, 5].map(step => ({
          filename: `iodi_step_${step}.png`,
          desc: [
            'Step 1 — Iodine/KI Reagent',
            'Step 2 — Spotting Tile Preparation',
            'Step 3 — Dropper Application',
            'Step 4 — Colour Change Observation',
            'Step 5 — Results Table & Interpretation'
          ][step - 1],
          options: {
            component: 'complete',
            starchPresent: 'present',
            drawingStep: step,
            showLabels: true,
            showInset: step === 5,
            insetType: 'amylose-helix'
          }
        }))
      },
      {
        name: 'Positive vs Negative Results',
        cases: ['present', 'absent'].map(state => ({
          filename: `iodi_starch_${state}.png`,
          desc: `Iodine test — starch ${state}`,
          options: {
            component: 'complete',
            starchPresent: state,
            drawingStep: 4,
            showLabels: true,
            showInset: false
          }
        }))
      },
      {
        name: 'Step 5 with All Insets',
        cases: ['amylose-helix', 'iodine-complex', 'colour-comparison', 'starch-structure'].map(inset => ({
          filename: `iodi_inset_${inset}.png`,
          desc: `Full diagram + inset: ${inset}`,
          options: {
            component: 'complete',
            starchPresent: 'present',
            drawingStep: 5,
            showLabels: true,
            showInset: true,
            insetType: inset
          }
        }))
      }
    ]
  },

  biuretTest: {
    label: 'Biuret Test for Proteins',
    tag: 'BIUR',
    width: 700,
    height: 540,
    groups: [
      {
        name: 'Step-by-Step Build',
        cases: [1, 2, 3, 4, 5].map(step => ({
          filename: `biur_step_${step}.png`,
          desc: [
            'Step 1 — Adding NaOH Solution',
            'Step 2 — Adding Dilute CuSO₄',
            'Step 3 — Mixing (Biuret Reagent in situ)',
            'Step 4 — Purple/Lilac Colour Observation',
            'Step 5 — Results Table & Interpretation'
          ][step - 1],
          options: {
            component: 'complete',
            proteinPresent: 'present',
            drawingStep: step,
            showLabels: true,
            showInset: step === 5,
            insetType: 'peptide-bond-detail'
          }
        }))
      },
      {
        name: 'Positive vs Negative Results',
        cases: ['present', 'absent'].map(state => ({
          filename: `biur_protein_${state}.png`,
          desc: `Biuret test — protein ${state}`,
          options: {
            component: 'complete',
            proteinPresent: state,
            drawingStep: 4,
            showLabels: true,
            showInset: false
          }
        }))
      },
      {
        name: 'Step 5 with All Insets',
        cases: ['peptide-bond-detail', 'copper-coordination', 'colour-comparison', 'protein-structure'].map(inset => ({
          filename: `biur_inset_${inset}.png`,
          desc: `Full diagram + inset: ${inset}`,
          options: {
            component: 'complete',
            proteinPresent: 'present',
            drawingStep: 5,
            showLabels: true,
            showInset: true,
            insetType: inset
          }
        }))
      }
    ]
  },

  sudanTest: {
    label: 'Sudan III/IV Test for Lipids',
    tag: 'SUDA',
    width: 700,
    height: 560,
    groups: [
      {
        name: 'Step-by-Step Build',
        cases: [1, 2, 3, 4, 5].map(step => ({
          filename: `suda_step_${step}.png`,
          desc: [
            'Step 1 — Sudan III/IV Dye Solution',
            'Step 2 — Adding Food Sample',
            'Step 3 — Shaking / Mixing',
            'Step 4 — Layer Separation & Red Staining',
            'Step 5 — Results Table & Interpretation'
          ][step - 1],
          options: {
            component: 'complete',
            lipidPresent: 'present',
            drawingStep: step,
            showLabels: true,
            showInset: step === 5,
            insetType: 'lipid-bilayer'
          }
        }))
      },
      {
        name: 'Positive vs Negative Results',
        cases: ['present', 'absent'].map(state => ({
          filename: `suda_lipid_${state}.png`,
          desc: `Sudan test — lipid ${state}`,
          options: {
            component: 'complete',
            lipidPresent: state,
            drawingStep: 4,
            showLabels: true,
            showInset: false
          }
        }))
      },
      {
        name: 'Step 5 with All Insets',
        cases: ['lipid-bilayer', 'dye-solubility', 'emulsion-detail', 'triglyceride-structure'].map(inset => ({
          filename: `suda_inset_${inset}.png`,
          desc: `Full diagram + inset: ${inset}`,
          options: {
            component: 'complete',
            lipidPresent: 'present',
            drawingStep: 5,
            showLabels: true,
            showInset: true,
            insetType: inset
          }
        }))
      }
    ]
  },

  heartAnatomy: {
    label: 'Heart Anatomy',
    tag: 'HEART',
    width: 620,
    height: 560,
    groups: [
      {
        name: 'Step-by-Step Build (whole heart)',
        cases: [1, 2, 3, 4, 5].map(step => ({
          filename: `heart_step_${step}.png`,
          desc: [
            'Step 1 — Overall Heart Shape (Outer Outline)',
            'Step 2 — Center Dividing Curve',
            'Step 3 — Atria & Ventricles',
            'Step 4 — Major Blood Vessels & Valves',
            'Step 5 — Final Outline & Labels'
          ][step - 1],
          options: {
            chamber: 'wholeheart',
            drawingStep: step,
            showLabels: true,
            showBloodFlow: step === 5,
            showInset: step === 5,
            insetType: 'cardiac-cycle'
          }
        }))
      },
      {
        name: 'Individual Chambers',
        cases: ['rightAtrium', 'rightVentricle', 'leftAtrium', 'leftVentricle'].map(ch => ({
          filename: `heart_chamber_${ch}.png`,
          desc: `Chamber — ${ch}`,
          options: { chamber: ch, showLabels: true }
        }))
      },
      {
        name: 'Step 5 with Different Insets',
        cases: ['cardiac-cycle', 'conduction-system', 'coronary-circulation', 'valve-mechanism'].map(inset => ({
          filename: `heart_inset_${inset}.png`,
          desc: `Full diagram + inset: ${inset}`,
          options: {
            chamber: 'wholeheart',
            drawingStep: 5,
            showLabels: true,
            showBloodFlow: true,
            showInset: true,
            insetType: inset
          }
        }))
      }
    ]
  },

  circulatorySystem: {
    label: 'Circulatory System',
    tag: 'CIRC',
    width: 620,
    height: 720,
    groups: [
      {
        name: 'Step-by-Step Build',
        cases: [1, 2, 3, 4, 5].map(step => ({
          filename: `circ_step_${step}.png`,
          desc: [
            'Step 1 — Lungs (Start at the Top)',
            'Step 2 — Heart (Below the Lungs)',
            'Step 3 — Pulmonary Circulation (Heart to Lungs)',
            'Step 4 — Systemic Circulation (Heart to Body)',
            'Step 5 — Complete with Labels & Direction Arrows'
          ][step - 1],
          options: {
            component: 'complete',
            drawingStep: step,
            showLabels: true,
            showOxygenation: step >= 3,
            showInset: step === 5,
            insetType: 'capillary-exchange'
          }
        }))
      },
      {
        name: 'Step 5 with Different Insets',
        cases: ['capillary-exchange', 'gas-exchange', 'valve-mechanism', 'cardiac-cycle'].map(inset => ({
          filename: `circ_inset_${inset}.png`,
          desc: `Full diagram + inset: ${inset}`,
          options: {
            component: 'complete',
            drawingStep: 5,
            showLabels: true,
            showOxygenation: true,
            showInset: true,
            insetType: inset
          }
        }))
      }
    ]
  },

  respiratorySystem: {
    label: 'Respiratory System',
    tag: 'RESP',
    width: 560,
    height: 680,
    groups: [
      {
        name: 'Step-by-Step Build',
        cases: [1, 2, 3, 4, 5].map(step => ({
          filename: `resp_step_${step}.png`,
          desc: [
            'Step 1 — Nasal Cavity & Trachea',
            'Step 2 — Primary Bronchi',
            'Step 3 — Lungs (Left 2 lobes, Right 3 lobes)',
            'Step 4 — Bronchioles & Alveoli',
            'Step 5 — Diaphragm & Complete Labels'
          ][step - 1],
          options: {
            component: 'complete',
            drawingStep: step,
            showLabels: true,
            showInset: step === 5,
            insetType: 'gas-exchange'
          }
        }))
      },
      {
        name: 'Step 5 with Different Insets',
        cases: ['gas-exchange', 'alveolar-structure', 'surfactant-function', 'oxygen-hemoglobin'].map(inset => ({
          filename: `resp_inset_${inset}.png`,
          desc: `Full diagram + inset: ${inset}`,
          options: {
            component: 'complete',
            drawingStep: 5,
            showLabels: true,
            showInset: true,
            insetType: inset
          }
        }))
      }
    ]
  },

  digestiveSystem: {
    label: 'Digestive System',
    tag: 'DIGE',
    width: 560,
    height: 720,
    groups: [
      {
        name: 'Step-by-Step Build',
        cases: [1, 2, 3, 4, 5].map(step => ({
          filename: `dige_step_${step}.png`,
          desc: [
            'Step 1 — Mouth & Esophagus',
            'Step 2 — Stomach',
            'Step 3 — Liver, Pancreas & Gallbladder',
            'Step 4 — Small & Large Intestines',
            'Step 5 — Complete with Labels & Digestion Notes'
          ][step - 1],
          options: {
            component: 'complete',
            drawingStep: step,
            showLabels: true,
            showInset: step === 5,
            insetType: 'villi-structure'
          }
        }))
      },
      {
        name: 'Individual Components',
        cases: ['mouth', 'esophagus', 'stomach', 'small-intestine', 'large-intestine', 'liver', 'pancreas', 'gallbladder'].map(comp => ({
          filename: `dige_component_${comp}.png`,
          desc: `Component — ${comp}`,
          width: 320,
          height: 320,
          options: { component: comp, showLabels: true }
        }))
      },
      {
        name: 'Step 5 with Different Insets',
        cases: ['villi-structure', 'enzyme-action', 'peristalsis', 'bile-production'].map(inset => ({
          filename: `dige_inset_${inset}.png`,
          desc: `Full diagram + inset: ${inset}`,
          options: {
            component: 'complete',
            drawingStep: 5,
            showLabels: true,
            showInset: true,
            insetType: inset
          }
        }))
      }
    ]
  },

  nervousSystem: {
    label: 'Nervous System',
    tag: 'NERV',
    width: 500,
    height: 720,
    groups: [
      {
        name: 'Step-by-Step Build',
        cases: [1, 2, 3, 4, 5].map(step => ({
          filename: `nerv_step_${step}.png`,
          desc: [
            'Step 1 — Brain',
            'Step 2 — Spinal Cord',
            'Step 3 — Cranial Nerves',
            'Step 4 — Spinal Nerves & Peripheral Branches',
            'Step 5 — Complete with Autonomic Divisions & Labels'
          ][step - 1],
          options: {
            component: 'complete',
            division: 'both',
            drawingStep: step,
            showLabels: true,
            showInset: step === 5,
            insetType: 'action-potential'
          }
        }))
      },
      {
        name: 'Individual Components',
        cases: ['brain', 'spinal-cord', 'cranial-nerves', 'spinal-nerves', 'autonomic'].map(comp => ({
          filename: `nerv_component_${comp}.png`,
          desc: `Component — ${comp}`,
          width: 340,
          height: 400,
          options: { component: comp, showLabels: true }
        }))
      },
      {
        name: 'Step 5 with Different Insets',
        cases: ['action-potential', 'neurotransmitter-release', 'saltatory-conduction', 'synapse-detail'].map(inset => ({
          filename: `nerv_inset_${inset}.png`,
          desc: `Full diagram + inset: ${inset}`,
          options: {
            component: 'complete',
            drawingStep: 5,
            showLabels: true,
            showInset: true,
            insetType: inset
          }
        }))
      }
    ]
  },

  neuronStructure: {
    label: 'Neuron Structure',
    tag: 'NEUR',
    width: 800,
    height: 420,
    groups: [
      {
        name: 'Step-by-Step Build',
        cases: [1, 2, 3, 4, 5].map(step => ({
          filename: `neur_step_${step}.png`,
          desc: [
            'Step 1 — Cell Body (Soma)',
            'Step 2 — Dendrites (Input)',
            'Step 3 — Axon & Myelin Sheath',
            'Step 4 — Axon Terminals & Synapse',
            'Step 5 — Complete with Signal Direction'
          ][step - 1],
          options: {
            component: 'complete',
            state: step === 5 ? 'action-potential' : 'resting',
            drawingStep: step,
            showLabels: true,
            showInset: step === 5,
            insetType: 'action-potential'
          }
        }))
      },
      {
        name: 'Different States',
        cases: ['resting', 'action-potential', 'refractory'].map(state => ({
          filename: `neur_state_${state}.png`,
          desc: `State — ${state}`,
          options: { component: 'complete', state, drawingStep: 5, showLabels: true }
        }))
      },
      {
        name: 'Step 5 with Different Insets',
        cases: ['action-potential', 'neurotransmitter-release', 'saltatory-conduction', 'synapse-detail'].map(inset => ({
          filename: `neur_inset_${inset}.png`,
          desc: `Full diagram + inset: ${inset}`,
          options: {
            component: 'complete',
            state: 'action-potential',
            drawingStep: 5,
            showLabels: true,
            showInset: true,
            insetType: inset
          }
        }))
      }
    ]
  },

  skeletalSystem: {
    label: 'Skeletal System',
    tag: 'SKEL',
    width: 480,
    height: 720,
    groups: [
      {
        name: 'Step-by-Step Build',
        cases: [1, 2, 3, 4, 5].map(step => ({
          filename: `skel_step_${step}.png`,
          desc: [
            'Step 1 — Axial Skeleton (Skull, Spine, Ribcage)',
            'Step 2 — Pectoral Girdle & Upper Limbs',
            'Step 3 — Pelvic Girdle & Lower Limbs',
            'Step 4 — Hands & Feet',
            'Step 5 — Complete with Labels & Bone Counts'
          ][step - 1],
          options: {
            region: 'complete',
            view: 'anterior',
            drawingStep: step,
            showLabels: true,
            showInset: step === 5,
            insetType: 'bone-structure'
          }
        }))
      },
      {
        name: 'Individual Regions',
        cases: ['axial', 'appendicular', 'skull', 'ribcage', 'spine', 'pelvis', 'upper-limb', 'lower-limb'].map(region => ({
          filename: `skel_region_${region}.png`,
          desc: `Region — ${region}`,
          width: 340,
          height: 400,
          options: { region, view: 'anterior', showLabels: true }
        }))
      },
      {
        name: 'Different Views',
        cases: ['anterior', 'posterior', 'lateral'].map(view => ({
          filename: `skel_view_${view}.png`,
          desc: `View — ${view}`,
          options: { region: 'complete', view, drawingStep: 5, showLabels: true }
        }))
      },
      {
        name: 'Step 5 with Different Insets',
        cases: ['bone-structure', 'joint-types', 'osteon', 'cartilage'].map(inset => ({
          filename: `skel_inset_${inset}.png`,
          desc: `Full diagram + inset: ${inset}`,
          options: {
            region: 'complete',
            view: 'anterior',
            drawingStep: 5,
            showLabels: true,
            showInset: true,
            insetType: inset
          }
        }))
      }
    ]
  },

  urinarySystem: {
    label: 'Urinary System',
    tag: 'URIN',
    width: 500,
    height: 680,
    groups: [
      {
        name: 'Step-by-Step Build',
        cases: [1, 2, 3, 4, 5].map(step => ({
          filename: `urin_step_${step}.png`,
          desc: [
            'Step 1 — Kidneys & Adrenal Glands',
            'Step 2 — Ureters',
            'Step 3 — Urinary Bladder',
            'Step 4 — Urethra',
            'Step 5 — Complete with Labels & Nephron Callout'
          ][step - 1],
          options: {
            component: 'complete',
            drawingStep: step,
            showLabels: true,
            showInset: step === 5,
            insetType: 'nephron-detail'
          }
        }))
      },
      {
        name: 'Individual Components',
        cases: ['kidney', 'nephron', 'ureter', 'bladder', 'urethra', 'glomerulus'].map(comp => ({
          filename: `urin_component_${comp}.png`,
          desc: `Component — ${comp}`,
          width: 360,
          height: 360,
          options: { component: comp, showLabels: true }
        }))
      },
      {
        name: 'Step 5 with Different Insets',
        cases: ['nephron-detail', 'glomerular-filtration', 'countercurrent', 'urine-formation'].map(inset => ({
          filename: `urin_inset_${inset}.png`,
          desc: `Full diagram + inset: ${inset}`,
          options: {
            component: 'complete',
            drawingStep: 5,
            showLabels: true,
            showInset: true,
            insetType: inset
          }
        }))
      }
    ]
  },

  eyeAnatomy: {
    label: 'Eye Anatomy',
    tag: 'EYE',
    width: 620,
    height: 560,
    groups: [
      {
        name: 'Step-by-Step Build',
        cases: [1, 2, 3, 4, 5].map(step => ({
          filename: `eye_step_${step}.png`,
          desc: [
            'Step 1 — Outer Coat (Sclera & Cornea)',
            'Step 2 — Middle Coat (Choroid, Ciliary Body & Iris)',
            'Step 3 — Inner Coat (Retina, Optic Disc & Blood Vessels)',
            'Step 4 — Lens, Chambers & Humours',
            'Step 5 — Complete with Labels & Light Path'
          ][step - 1],
          options: {
            component: 'complete',
            process: step === 5 ? 'light-refraction' : 'structure',
            drawingStep: step,
            showLabels: true,
            showInset: step === 5,
            insetType: 'retinal-layers'
          }
        }))
      },
      {
        name: 'Different Processes',
        cases: ['structure', 'light-refraction', 'accommodation'].map(process => ({
          filename: `eye_process_${process}.png`,
          desc: `Process — ${process}`,
          options: { component: 'complete', process, drawingStep: 5, showLabels: true }
        }))
      },
      {
        name: 'Step 5 with Different Insets',
        cases: ['retinal-layers', 'accommodation', 'visual-pathway', 'photoreceptors'].map(inset => ({
          filename: `eye_inset_${inset}.png`,
          desc: `Full diagram + inset: ${inset}`,
          options: {
            component: 'complete',
            process: 'light-refraction',
            drawingStep: 5,
            showLabels: true,
            showInset: true,
            insetType: inset
          }
        }))
      }
    ]
  },

  animalCell: {
    label: 'Animal Cell',
    tag: 'ACELL',
    width: 620,
    height: 580,
    groups: [
      {
        name: 'Step-by-Step Build',
        cases: [1, 2, 3, 4, 5].map(step => ({
          filename: `acell_step_${step}.png`,
          desc: [
            'Step 1 — Cell Membrane & Cytoplasm',
            'Step 2 — Nucleus & Nucleolus',
            'Step 3 — Mitochondria',
            'Step 4 — ER, Golgi & Vesicles',
            'Step 5 — All Organelles & Labels'
          ][step - 1],
          options: {
            view: 'complete',
            organelleHighlight: null,
            drawingStep: step,
            showLabels: true,
            showInset: step === 5,
            insetType: 'nucleus-detail'
          }
        }))
      },
      {
        name: 'Complete Cell with Organelle Highlights',
        cases: ['membrane', 'nucleus', 'mitochondria', 'endoplasmicReticulum', 'golgiApparatus', 'lysosome', 'ribosome', 'centriole', 'cytoskeleton', 'all'].map(highlight => ({
          filename: `acell_highlight_${highlight}.png`,
          desc: `Complete cell — highlight: ${highlight}`,
          options: { view: 'complete', organelleHighlight: highlight, showLabels: true, showInset: false }
        }))
      },
      {
        name: 'Step 5 with Different Insets',
        cases: ['nucleus-detail', 'mitochondria-detail', 'er-detail', 'golgi-detail', 'ribosome-detail', 'centriole-detail'].map(inset => ({
          filename: `acell_inset_${inset}.png`,
          desc: `Full diagram + inset: ${inset}`,
          options: {
            view: 'complete',
            organelleHighlight: null,
            drawingStep: 5,
            showLabels: true,
            showInset: true,
            insetType: inset
          }
        }))
      }
    ]
  },

  plantCell: {
    label: 'Plant Cell',
    tag: 'PCELL',
    width: 640,
    height: 620,
    groups: [
      {
        name: 'Step-by-Step Build',
        cases: [1, 2, 3, 4, 5].map(step => ({
          filename: `pcell_step_${step}.png`,
          desc: [
            'Step 1 — Cell Wall & Membrane',
            'Step 2 — Central Vacuole',
            'Step 3 — Nucleus',
            'Step 4 — Chloroplasts & Plastids',
            'Step 5 — All Structures & Labels'
          ][step - 1],
          options: {
            view: 'complete',
            processHighlight: null,
            drawingStep: step,
            showLabels: true,
            showInset: step === 5,
            insetType: 'chloroplast-detail'
          }
        }))
      },
      {
        name: 'Complete Cell with Process Highlights',
        cases: ['photosynthesis', 'turgorPressure', 'cytoplasmicStreaming', 'cellWallFormation', 'plasmodesmata', 'nucleus', 'chloroplast', 'vacuole', 'mitochondria', 'all'].map(highlight => ({
          filename: `pcell_highlight_${highlight}.png`,
          desc: `Complete cell — highlight: ${highlight}`,
          options: { view: 'complete', processHighlight: highlight, showLabels: true, showInset: false }
        }))
      },
      {
        name: 'Step 5 with Different Insets',
        cases: ['chloroplast-detail', 'cell-wall-layers', 'plasmodesmata-detail', 'vacuole-function', 'granum-thylakoid', 'turgor-pressure'].map(inset => ({
          filename: `pcell_inset_${inset}.png`,
          desc: `Full diagram + inset: ${inset}`,
          options: {
            view: 'complete',
            processHighlight: null,
            drawingStep: 5,
            showLabels: true,
            showInset: true,
            insetType: inset
          }
        }))
      }
    ]
  },

  cellMembrane: {
    label: 'Cell Membrane',
    tag: 'CMEM',
    width: 720,
    height: 440,
    groups: [
      {
        name: 'Step-by-Step Build',
        cases: [
          { filename: 'cmem_step_1.png', desc: 'Step 1 — Phospholipid Bilayer',          options: { view: 'phospholipidBilayer',  drawingStep: 1, showLabels: true, showInset: false } },
          { filename: 'cmem_step_2.png', desc: 'Step 2 — Integral & Peripheral Proteins', options: { view: 'membraneProteins',     drawingStep: 2, showLabels: true, showInset: false } },
          { filename: 'cmem_step_3.png', desc: 'Step 3 — Transport Mechanisms',           options: { view: 'transportMechanisms', drawingStep: 3, showLabels: true, showInset: false } },
          { filename: 'cmem_step_4.png', desc: 'Step 4 — Receptor & Enzyme Proteins',     options: { view: 'receptorProtein',     drawingStep: 4, showLabels: true, showInset: false } },
          {
            filename: 'cmem_step_5.png',
            desc: 'Step 5 — Complete Fluid Mosaic Model',
            options: { view: 'fluidMosaicModel', drawingStep: 5, showLabels: true, showInset: true, insetType: 'phospholipid-structure' }
          }
        ]
      },
      {
        name: 'Step 5 with Different Insets',
        cases: ['phospholipid-structure', 'protein-types', 'active-vs-passive', 'osmosis-diagram', 'ion-channel-gating', 'membrane-fluidity'].map(inset => ({
          filename: `cmem_inset_${inset}.png`,
          desc: `Full diagram + inset: ${inset}`,
          options: { view: 'fluidMosaicModel', drawingStep: 5, showLabels: true, showInset: true, insetType: inset }
        }))
      }
    ]
  }
}

// ─── Menu level constants ─────────────────────────────────────────────────────
const MENU_LEVELS = { SYSTEM: 'system', GROUP: 'group', CASE: 'case' }

export default function DiagramTab({ onAddVisualization, sessionId }) {
  // Navigation state — mirrors CLI menu levels
  const [menuLevel, setMenuLevel]           = useState(MENU_LEVELS.SYSTEM)
  const [selectedSystem, setSelectedSystem] = useState(null)   // diagramKey
  const [selectedGroup, setSelectedGroup]   = useState(null)   // group index
  const [view, setView]                     = useState('menu') // menu | gallery | existing

  // Gallery state
  const [galleryItems, setGalleryItems]     = useState([])
  const [loadedImages, setLoadedImages]     = useState({})
  const [imageErrors, setImageErrors]       = useState({})
  const [selectedImage, setSelectedImage]   = useState(null)
  const [isLoadingGallery, setIsLoadingGallery] = useState(false)
  const [galleryFilter, setGalleryFilter]   = useState('all')

  // Existing state
  const [existingItems, setExistingItems]   = useState([])

  // Rendering state
  const [isRendering, setIsRendering]       = useState(false)
  const [renderLog, setRenderLog]           = useState([])     // { msg, type }
  const [batchQueue, setBatchQueue]         = useState([])
  const [batchProgress, setBatchProgress]  = useState(null)   // null | { done, total }

  const diagramEntries = Object.entries(DIAGRAMS)

  // ── Cleanup blob URLs on unmount ────────────────────────────────────────────
  useEffect(() => {
    return () => {
      Object.values(loadedImages).forEach(url => { if (url) URL.revokeObjectURL(url) })
    }
  }, [loadedImages])

  // ── Gallery auto-load ───────────────────────────────────────────────────────
  useEffect(() => {
    if (view === 'gallery') loadGallery()
    if (view === 'existing' && selectedSystem) loadExisting()
  }, [view, galleryFilter, selectedSystem])

  // ── Log helpers ─────────────────────────────────────────────────────────────
  const log = (msg, type = 'info') => {
    setRenderLog(prev => [...prev.slice(-49), { msg, type, ts: Date.now() }])
  }

  const clearLog = () => setRenderLog([])

  // ── API calls ────────────────────────────────────────────────────────────────

  const renderCase = async (diagramKey, tc, def) => {
    const w = tc.width  || def.width
    const h = tc.height || def.height
    const config = {
      key: diagramKey,
      title: tc.desc,
      options: { ...tc.options, width: w, height: h },
      filename: tc.filename
    }

    log(`⏳ Rendering: ${tc.desc}`, 'pending')
    setIsRendering(true)

    try {
      const response = await fetch('/api/workbook/add-biochemical-diagram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: sessionId || 'dev_session', config })
      })

      if (!response.ok) {
        const err = await response.json()
        throw new Error(err.error || 'Render failed')
      }

      const data = await response.json()
      log(`✔  Saved → ${tc.filename}`, 'success')
      return data
    } catch (error) {
      log(`✘  Error: ${error.message}`, 'error')
      throw error
    } finally {
      setIsRendering(false)
    }
  }

  const renderGroup = async (diagramKey, groupIdx) => {
    const def   = DIAGRAMS[diagramKey]
    const group = def.groups[groupIdx]

    log(`--- ${group.name} ---`, 'header')
    clearLog()
    log(`--- ${group.name} ---`, 'header')

    let done = 0
    const total = group.cases.length
    setBatchProgress({ done: 0, total })

    for (const tc of group.cases) {
      try {
        await renderCase(diagramKey, tc, def)
      } catch (_) { /* already logged */ }
      done++
      setBatchProgress({ done, total })
    }

    setBatchProgress(null)
    log(`✔  Group complete: ${done}/${total}`, 'success')
  }

  const renderAllGroups = async (diagramKey) => {
    const def = DIAGRAMS[diagramKey]
    clearLog()
    log(`[${def.tag}] ${def.label}`, 'header')

    let totalDone = 0
    for (let gi = 0; gi < def.groups.length; gi++) {
      const group = def.groups[gi]
      log(`--- ${group.name} ---`, 'header')
      for (const tc of group.cases) {
        try {
          await renderCase(diagramKey, tc, def)
          totalDone++
        } catch (_) { /* already logged */ }
      }
    }
    log(`✔  All groups done: ${totalDone} diagrams`, 'success')
  }

  const renderAll = async () => {
    clearLog()
    log('★ Rendering ALL diagram systems...', 'header')
    let grand = 0

    for (const [key, def] of diagramEntries) {
      log(`[${def.tag}] ${def.label}`, 'header')
      for (const group of def.groups) {
        for (const tc of group.cases) {
          try {
            await renderCase(key, tc, def)
            grand++
          } catch (_) { /* already logged */ }
        }
      }
    }

    log(`★ Complete: ${grand} PNGs generated`, 'success')
  }

  // ── Gallery ──────────────────────────────────────────────────────────────────

  const loadGallery = async () => {
    if (!sessionId) return
    setIsLoadingGallery(true)
    try {
      const res  = await fetch(`/api/workbook/visualizations/gallery?sessionId=${sessionId}&type=${galleryFilter === 'all' ? 'biochemical' : galleryFilter}`)
      if (!res.ok) { setGalleryItems([]); return }
      const data = await res.json()
      const items = (data.items || []).filter(i => i.type === 'biochemical')
      setGalleryItems(items)
      items.forEach(item => loadItemImage(item))
    } catch (e) {
      console.error('Gallery load error:', e)
      setGalleryItems([])
    } finally {
      setIsLoadingGallery(false)
    }
  }

  const loadItemImage = async (item) => {
    if (loadedImages[item.id] || imageErrors[item.id]) return
    try {
      const res = await fetch(`/api/workbook/visualizations/image?sessionId=${sessionId}&type=biochemical&id=${item.id}`)
      if (res.ok) {
        const blob = await res.blob()
        const url  = URL.createObjectURL(blob)
        setLoadedImages(prev => ({ ...prev, [item.id]: url }))
      } else {
        const err = await res.json()
        setImageErrors(prev => ({ ...prev, [item.id]: err.error || 'Failed' }))
      }
    } catch (e) {
      setImageErrors(prev => ({ ...prev, [item.id]: e.message }))
    }
  }

  const handleDownloadImage = async (item) => {
    const url = loadedImages[item.id]
    if (!url) { alert('Image not loaded yet'); return }
    const res  = await fetch(url)
    const blob = await res.blob()
    const a    = document.createElement('a')
    a.href     = URL.createObjectURL(blob)
    a.download = item.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.png'
    a.click()
    URL.revokeObjectURL(a.href)
  }

  const handleDeleteImage = async (item) => {
    if (!confirm(`Delete "${item.title}"?`)) return
    try {
      const res = await fetch(`/api/workbook/visualizations/delete?sessionId=${sessionId}&type=biochemical&id=${item.id}`, { method: 'DELETE' })
      if (res.ok) {
        setGalleryItems(prev => prev.filter(i => i.id !== item.id))
        setLoadedImages(prev => { const n = { ...prev }; delete n[item.id]; return n })
        if (selectedImage?.id === item.id) setSelectedImage(null)
      } else {
        const err = await res.json()
        alert(`Failed: ${err.error}`)
      }
    } catch (e) { alert('Delete failed') }
  }

  // ── Existing ─────────────────────────────────────────────────────────────────

  const loadExisting = async () => {
    if (!sessionId) return
    try {
      const res  = await fetch(`/api/workbook/visualizations/existing?sessionId=${sessionId}&type=biochemical`)
      const data = await res.json()
      setExistingItems(data.items || [])
    } catch { setExistingItems([]) }
  }

  // ── Navigation helpers ───────────────────────────────────────────────────────

  const goToSystemMenu    = () => { setMenuLevel(MENU_LEVELS.SYSTEM); setSelectedSystem(null); setSelectedGroup(null); setView('menu') }
  const goToGroupMenu     = (key) => { setSelectedSystem(key); setMenuLevel(MENU_LEVELS.GROUP); setView('menu') }
  const goToCaseMenu      = (gi)  => { setSelectedGroup(gi);  setMenuLevel(MENU_LEVELS.CASE);  setView('menu') }
  const showGallery       = () => setView('gallery')
  const showExisting      = () => setView('existing')

  // ── Breadcrumb ───────────────────────────────────────────────────────────────

  const renderBreadcrumb = () => {
    if (view === 'gallery')  return <div className="dt-breadcrumb"><button onClick={goToSystemMenu}>Systems</button><span>›</span><span className="current">Gallery</span></div>
    if (view === 'existing') return <div className="dt-breadcrumb"><button onClick={goToSystemMenu}>Systems</button><span>›</span><span className="current">Existing Diagrams</span></div>

    const crumbs = [<button key="sys" onClick={goToSystemMenu}>Systems</button>]
    if (selectedSystem) {
      const def = DIAGRAMS[selectedSystem]
      crumbs.push(<span key="s1">›</span>)
      crumbs.push(<button key="grp" onClick={() => goToGroupMenu(selectedSystem)}>[{def.tag}] {def.label}</button>)
    }
    if (selectedGroup !== null) {
      const group = DIAGRAMS[selectedSystem].groups[selectedGroup]
      crumbs.push(<span key="s2">›</span>)
      crumbs.push(<span key="cas" className="current">{group.name}</span>)
    }

    return <div className="dt-breadcrumb">{crumbs}</div>
  }

  // ── Render: System list ──────────────────────────────────────────────────────

  const renderSystemMenu = () => (
    <div className="dt-menu">
      <div className="dt-banner">
        <div className="dt-banner-title">BIOCHEMICAL DIAGRAMS</div>
        <div className="dt-banner-sub">Interactive Generation Suite</div>
      </div>

      <h4 className="dt-section-title">Select a diagram system:</h4>
      <div className="dt-divider" />

      <div className="dt-system-list">
        {diagramEntries.map(([key, def], i) => (
          <button key={key} className="dt-system-row" onClick={() => goToGroupMenu(key)}>
            <span className="dt-row-num">{String(i + 1).padStart(2, ' ')}.</span>
            <span className="dt-row-tag">[{def.tag}]</span>
            <span className="dt-row-label">{def.label}</span>
            <span className="dt-row-count">{def.groups.reduce((a, g) => a + g.cases.length, 0)} diagrams</span>
          </button>
        ))}

        <div className="dt-divider" />

        <button className="dt-system-row dt-special" onClick={renderAll}>
          <span className="dt-row-num">  *.</span>
          <span className="dt-row-tag">[★]</span>
          <span className="dt-row-label">Render ALL diagram systems</span>
        </button>

        <button className="dt-system-row dt-special" onClick={showGallery}>
          <span className="dt-row-num">  G.</span>
          <span className="dt-row-tag">[🖼]</span>
          <span className="dt-row-label">View created images (Gallery)</span>
        </button>

        <button className="dt-system-row dt-special" onClick={showExisting}>
          <span className="dt-row-num">  E.</span>
          <span className="dt-row-tag">[📋]</span>
          <span className="dt-row-label">View existing diagrams in workbook</span>
        </button>
      </div>
    </div>
  )

  // ── Render: Group list ───────────────────────────────────────────────────────

  const renderGroupMenu = () => {
    const def = DIAGRAMS[selectedSystem]
    return (
      <div className="dt-menu">
        <div className="dt-banner">
          <div className="dt-banner-title">[{def.tag}] {def.label}</div>
        </div>

        <h4 className="dt-section-title">Select a group:</h4>
        <div className="dt-divider" />

        <div className="dt-system-list">
          {def.groups.map((group, gi) => (
            <button key={gi} className="dt-system-row" onClick={() => goToCaseMenu(gi)}>
              <span className="dt-row-num">{String(gi + 1).padStart(2, ' ')}.</span>
              <span className="dt-row-label">{group.name}</span>
              <span className="dt-row-count">({group.cases.length} diagrams)</span>
            </button>
          ))}

          <div className="dt-divider" />

          <button className="dt-system-row dt-special" onClick={() => renderAllGroups(selectedSystem)}>
            <span className="dt-row-num">  *.</span>
            <span className="dt-row-tag">[★]</span>
            <span className="dt-row-label">Render ALL groups for {def.label}</span>
          </button>

          <button className="dt-system-row dt-back" onClick={goToSystemMenu}>
            <span className="dt-row-num">  &lt;.</span>
            <span className="dt-row-label">Back to main menu</span>
          </button>
        </div>
      </div>
    )
  }

  // ── Render: Case list ────────────────────────────────────────────────────────

  const renderCaseMenu = () => {
    const def   = DIAGRAMS[selectedSystem]
    const group = def.groups[selectedGroup]

    return (
      <div className="dt-menu">
        <div className="dt-banner">
          <div className="dt-banner-title">[{def.tag}] {def.label}</div>
          <div className="dt-banner-sub">{group.name}</div>
        </div>

        <h4 className="dt-section-title">Select a diagram to render:</h4>
        <div className="dt-divider" />

        <div className="dt-system-list">
          {group.cases.map((tc, ci) => (
            <button
              key={ci}
              className="dt-system-row dt-case-row"
              onClick={async () => {
                try { await renderCase(selectedSystem, tc, def) }
                catch (_) { /* logged */ }
              }}
              disabled={isRendering}
            >
              <span className="dt-row-num">{String(ci + 1).padStart(2, ' ')}.</span>
              <span className="dt-row-label">{tc.desc}</span>
              <span className="dt-row-file">{tc.filename}</span>
            </button>
          ))}

          <div className="dt-divider" />

          <button
            className="dt-system-row dt-special"
            onClick={() => renderGroup(selectedSystem, selectedGroup)}
            disabled={isRendering}
          >
            <span className="dt-row-num">  *.</span>
            <span className="dt-row-tag">[★]</span>
            <span className="dt-row-label">Render ALL cases in this group</span>
          </button>

          <button className="dt-system-row dt-back" onClick={() => goToGroupMenu(selectedSystem)}>
            <span className="dt-row-num">  &lt;.</span>
            <span className="dt-row-label">Back to group list</span>
          </button>
        </div>
      </div>
    )
  }

  // ── Render: Gallery ──────────────────────────────────────────────────────────

  const renderGallery = () => (
    <div className="dt-gallery-view">
      <h4 className="dt-section-title">🖼️ Biochemical Image Gallery ({galleryItems.length})</h4>

      {isLoadingGallery ? (
        <div className="dt-loading"><div className="dt-spinner" /><p>Loading images...</p></div>
      ) : galleryItems.length === 0 ? (
        <div className="dt-empty">
          <div className="dt-empty-icon">🧬</div>
          <h3>No Biochemical Diagrams Yet</h3>
          <p>Render diagrams from the menu to see them here</p>
        </div>
      ) : (
        <div className="dt-gallery-grid">
          {galleryItems.map(item => (
            <div key={item.id} className="dt-gallery-card">
              <div className="dt-gallery-img" onClick={() => setSelectedImage(item)}>
                {loadedImages[item.id] ? (
                  <img src={loadedImages[item.id]} alt={item.title} />
                ) : imageErrors[item.id] ? (
                  <div className="dt-img-error"><span>⚠️</span><p>Unavailable</p></div>
                ) : (
                  <div className="dt-img-loading"><div className="dt-spinner-sm" /><p>Loading...</p></div>
                )}
                <div className="dt-gallery-overlay"><span>🔍</span></div>
              </div>
              <div className="dt-gallery-info">
                <div className="dt-gallery-title-row">
                  <h4 className="dt-gallery-title">{item.title}</h4>
                  <span className="dt-gallery-badge">{item.category || 'biochemical'}</span>
                </div>
                <div className="dt-gallery-meta">
                  <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                  <span>{item.size || 'N/A'}</span>
                </div>
                <div className="dt-gallery-actions">
                  <button className="dt-ga-btn" onClick={() => handleDownloadImage(item)} title="Download">💾</button>
                  <button className="dt-ga-btn" onClick={() => setSelectedImage(item)} title="View">🔍</button>
                  <button className="dt-ga-btn dt-ga-del" onClick={() => handleDeleteImage(item)} title="Delete">🗑️</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  // ── Render: Existing ─────────────────────────────────────────────────────────

  const renderExisting = () => (
    <div className="dt-existing-view">
      <h4 className="dt-section-title">📋 Existing Biochemical Diagrams ({existingItems.length})</h4>

      {existingItems.length === 0 ? (
        <div className="dt-empty">
          <div className="dt-empty-icon">📋</div>
          <h3>No Diagrams Created Yet</h3>
          <p>Render diagrams from the menu to see them here</p>
        </div>
      ) : (
        <div className="dt-existing-grid">
          {existingItems.map((item, i) => (
            <div key={item.id} className="dt-existing-card">
              <div className="dt-existing-header">
                <span className="dt-existing-num">{i + 1}</span>
                <span className="dt-existing-title">{item.name}</span>
              </div>
              <div className="dt-existing-body">
                <div className="dt-detail-row"><span>Type:</span><span>{item.type}</span></div>
                {item.category && <div className="dt-detail-row"><span>Category:</span><span>{item.category}</span></div>}
                <div className="dt-detail-row"><span>Created:</span><span>{new Date(item.created).toLocaleString()}</span></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  // ── Render: Log panel ────────────────────────────────────────────────────────

  const renderLogPanel = () => {
    if (renderLog.length === 0 && !isRendering && !batchProgress) return null

    return (
      <div className="dt-log-panel">
        <div className="dt-log-header">
          <span>Output Log</span>
          <button className="dt-log-clear" onClick={clearLog}>Clear</button>
        </div>

        {batchProgress && (
          <div className="dt-progress">
            <div className="dt-progress-bar" style={{ width: `${(batchProgress.done / batchProgress.total) * 100}%` }} />
            <span className="dt-progress-text">{batchProgress.done} / {batchProgress.total}</span>
          </div>
        )}

        <div className="dt-log-body">
          {renderLog.map((entry, i) => (
            <div key={i} className={`dt-log-line dt-log-${entry.type}`}>
              {entry.type === 'header'  && <span className="dt-log-prefix">---</span>}
              {entry.type === 'success' && <span className="dt-log-prefix">✔</span>}
              {entry.type === 'error'   && <span className="dt-log-prefix">✘</span>}
              {entry.type === 'pending' && <span className="dt-log-prefix">⏳</span>}
              {entry.msg}
            </div>
          ))}
          {isRendering && (
            <div className="dt-log-line dt-log-pending">
              <span className="dt-spinner-inline" /> Rendering...
            </div>
          )}
        </div>
      </div>
    )
  }

  // ── Main render ──────────────────────────────────────────────────────────────

  return (
    <div className="dt-wrapper">
      <div className="dt-scrollable">

        {/* Header */}
        <div className="dt-header">
          <h3>🧬 Biochemical Diagrams</h3>
          <p className="dt-subtitle">Step-by-step rendering of biochemical & anatomical diagrams</p>
        </div>

        {/* Breadcrumb */}
        {(menuLevel !== MENU_LEVELS.SYSTEM || view !== 'menu') && renderBreadcrumb()}

        {/* Main content */}
        {view === 'menu' && menuLevel === MENU_LEVELS.SYSTEM && renderSystemMenu()}
        {view === 'menu' && menuLevel === MENU_LEVELS.GROUP  && renderGroupMenu()}
        {view === 'menu' && menuLevel === MENU_LEVELS.CASE   && renderCaseMenu()}
        {view === 'gallery'  && renderGallery()}
        {view === 'existing' && renderExisting()}

        {/* Log panel always visible when active */}
        {renderLogPanel()}

      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="dt-lightbox" onClick={() => setSelectedImage(null)}>
          <div className="dt-lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="dt-lb-close" onClick={() => setSelectedImage(null)}>×</button>
            <div className="dt-lb-header">
              <h3>{selectedImage.title}</h3>
              <div className="dt-lb-meta">
                <span>{selectedImage.category || 'biochemical'}</span>
                {selectedImage.category && <span>{selectedImage.category}</span>}
              </div>
            </div>
            <div className="dt-lb-image">
              {loadedImages[selectedImage.id]
                ? <img src={loadedImages[selectedImage.id]} alt={selectedImage.title} />
                : <div className="dt-img-loading"><div className="dt-spinner" /><p>Loading...</p></div>
              }
            </div>
            <div className="dt-lb-actions">
              <button className="dt-lb-btn" onClick={() => handleDownloadImage(selectedImage)}>💾 Download</button>
              <button className="dt-lb-btn dt-lb-del" onClick={() => { handleDeleteImage(selectedImage); setSelectedImage(null) }}>🗑️ Delete</button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* ── Wrapper ── */
        .dt-wrapper {
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: transparent;
        }

        .dt-scrollable {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 20px;
        }

        .dt-scrollable::-webkit-scrollbar { width: 10px; }
        .dt-scrollable::-webkit-scrollbar-track { background: rgba(0,0,0,0.3); }
        .dt-scrollable::-webkit-scrollbar-thumb { background: rgba(6,182,212,0.5); border-radius: 5px; }

        /* ── Header ── */
        .dt-header { margin-bottom: 20px; }
        .dt-header h3 { color: #06b6d4; font-size: 20px; margin: 0 0 5px; }
        .dt-subtitle { color: #9ca3af; font-size: 13px; margin: 0; }

        /* ── Banner (CLI-style) ── */
        .dt-banner {
          background: rgba(6,182,212,0.1);
          border: 2px solid rgba(6,182,212,0.4);
          border-radius: 8px;
          padding: 16px 20px;
          margin-bottom: 20px;
          font-family: 'Courier New', monospace;
        }
        .dt-banner-title { color: #06b6d4; font-size: 15px; font-weight: bold; letter-spacing: 1px; }
        .dt-banner-sub   { color: #9ca3af; font-size: 12px; margin-top: 4px; }

        /* ── Section title ── */
        .dt-section-title {
          color: #06b6d4;
          font-size: 14px;
          font-weight: bold;
          margin: 0 0 8px;
          font-family: 'Courier New', monospace;
        }

        /* ── Divider ── */
        .dt-divider {
          border: none;
          border-top: 1px solid rgba(6,182,212,0.2);
          margin: 10px 0;
        }

        /* ── Menu rows (CLI list style) ── */
        .dt-system-list { display: flex; flex-direction: column; gap: 2px; }

        .dt-system-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: rgba(6,182,212,0.05);
          border: 1px solid rgba(6,182,212,0.1);
          border-radius: 6px;
          color: #e5e7eb;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          font-family: 'Courier New', monospace;
          font-size: 13px;
        }

        .dt-system-row:hover:not(:disabled) {
          background: rgba(6,182,212,0.15);
          border-color: rgba(6,182,212,0.4);
          transform: translateX(4px);
        }

        .dt-system-row:disabled { opacity: 0.5; cursor: not-allowed; }

        .dt-special { color: #f59e0b; border-color: rgba(245,158,11,0.2); background: rgba(245,158,11,0.05); }
        .dt-special:hover:not(:disabled) { background: rgba(245,158,11,0.15) !important; border-color: rgba(245,158,11,0.4) !important; }

        .dt-back { color: #9ca3af; border-color: rgba(156,163,175,0.2); background: rgba(156,163,175,0.05); }
        .dt-back:hover { background: rgba(156,163,175,0.1) !important; }

        .dt-case-row:hover:not(:disabled) { background: rgba(34,197,94,0.15) !important; border-color: rgba(34,197,94,0.4) !important; }

        .dt-row-num   { color: #06b6d4; font-weight: bold; min-width: 28px; }
        .dt-row-tag   { color: #a855f7; font-weight: bold; min-width: 80px; }
        .dt-row-label { flex: 1; color: #e5e7eb; }
        .dt-row-count { color: #6b7280; font-size: 11px; white-space: nowrap; }
        .dt-row-file  { color: #4b5563; font-size: 11px; white-space: nowrap; }

        /* ── Breadcrumb ── */
        .dt-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          padding: 8px 14px;
          background: rgba(0,0,0,0.3);
          border-radius: 6px;
          font-size: 12px;
          font-family: 'Courier New', monospace;
        }
        .dt-breadcrumb button { background: none; border: none; color: #06b6d4; cursor: pointer; padding: 0; text-decoration: underline; font-size: 12px; font-family: inherit; }
        .dt-breadcrumb button:hover { color: #67e8f9; }
        .dt-breadcrumb span { color: #6b7280; }
        .dt-breadcrumb .current { color: #e5e7eb; font-weight: bold; }

        /* ── Log panel ── */
        .dt-log-panel {
          margin-top: 20px;
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(6,182,212,0.3);
          border-radius: 8px;
          overflow: hidden;
        }

        .dt-log-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 14px;
          background: rgba(6,182,212,0.1);
          border-bottom: 1px solid rgba(6,182,212,0.2);
          font-size: 12px;
          color: #06b6d4;
          font-family: 'Courier New', monospace;
        }

        .dt-log-clear {
          background: none;
          border: 1px solid rgba(6,182,212,0.3);
          border-radius: 4px;
          color: #6b7280;
          cursor: pointer;
          padding: 2px 8px;
          font-size: 11px;
        }
        .dt-log-clear:hover { border-color: rgba(6,182,212,0.6); color: #06b6d4; }

        .dt-log-body {
          padding: 12px 14px;
          max-height: 220px;
          overflow-y: auto;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          line-height: 1.6;
        }

        .dt-log-line { display: flex; gap: 8px; align-items: flex-start; margin-bottom: 2px; }
        .dt-log-prefix { min-width: 20px; }

        .dt-log-header-entry { color: #a855f7; font-weight: bold; }
        .dt-log-success { color: #22c55e; }
        .dt-log-error   { color: #ef4444; }
        .dt-log-pending { color: #f59e0b; }
        .dt-log-info    { color: #9ca3af; }

        /* ── Progress bar ── */
        .dt-progress {
          position: relative;
          height: 6px;
          background: rgba(6,182,212,0.1);
          border-bottom: 1px solid rgba(6,182,212,0.2);
        }
        .dt-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #06b6d4, #22c55e);
          transition: width 0.3s ease;
        }
        .dt-progress-text {
          position: absolute;
          right: 10px;
          top: -14px;
          font-size: 10px;
          color: #6b7280;
          font-family: 'Courier New', monospace;
        }

        /* ── Spinners ── */
        .dt-spinner {
          width: 40px; height: 40px;
          border: 3px solid rgba(6,182,212,0.2);
          border-top-color: #06b6d4;
          border-radius: 50%;
          animation: dt-spin 0.8s linear infinite;
          margin-bottom: 12px;
        }
        .dt-spinner-sm {
          width: 24px; height: 24px;
          border: 2px solid rgba(6,182,212,0.2);
          border-top-color: #06b6d4;
          border-radius: 50%;
          animation: dt-spin 0.8s linear infinite;
        }
        .dt-spinner-inline {
          display: inline-block;
          width: 12px; height: 12px;
          border: 2px solid rgba(6,182,212,0.2);
          border-top-color: #06b6d4;
          border-radius: 50%;
          animation: dt-spin 0.8s linear infinite;
          vertical-align: middle;
        }
        @keyframes dt-spin { to { transform: rotate(360deg); } }

        /* ── Loading / Empty states ── */
        .dt-loading, .dt-empty {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 60px 20px; text-align: center;
          color: #9ca3af;
        }
        .dt-empty-icon { font-size: 64px; margin-bottom: 16px; opacity: 0.5; }
        .dt-empty h3 { color: #06b6d4; margin: 0 0 8px; }
        .dt-empty p  { margin: 0; font-size: 13px; }

        /* ── Gallery ── */
        .dt-gallery-view { width: 100%; }

        .dt-gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
          margin-top: 16px;
        }

        .dt-gallery-card {
          background: rgba(255,255,255,0.04);
          border: 2px solid rgba(6,182,212,0.2);
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .dt-gallery-card:hover {
          transform: translateY(-4px);
          border-color: #06b6d4;
          box-shadow: 0 8px 20px rgba(6,182,212,0.25);
        }

        .dt-gallery-img {
          position: relative;
          width: 100%; height: 180px;
          background: rgba(0,0,0,0.3);
          cursor: pointer;
          overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }
        .dt-gallery-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease; }
        .dt-gallery-card:hover .dt-gallery-img img { transform: scale(1.05); }

        .dt-gallery-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.7);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.3s;
          font-size: 32px;
        }
        .dt-gallery-img:hover .dt-gallery-overlay { opacity: 1; }

        .dt-img-error, .dt-img-loading {
          display: flex; flex-direction: column;
          align-items: center; gap: 8px;
          color: #6b7280; font-size: 12px;
        }

        .dt-gallery-info { padding: 12px; }

        .dt-gallery-title-row { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px; }
        .dt-gallery-title { color: #06b6d4; font-size: 13px; font-weight: bold; margin: 0; flex: 1; line-height: 1.3; }
        .dt-gallery-badge {
          padding: 2px 8px; background: rgba(168,85,247,0.2);
          border: 1px solid rgba(168,85,247,0.4); border-radius: 10px;
          color: #a855f7; font-size: 10px; font-weight: bold;
          text-transform: uppercase; white-space: nowrap; margin-left: 8px;
        }

        .dt-gallery-meta {
          display: flex; justify-content: space-between;
          font-size: 11px; color: #6b7280;
          margin-bottom: 10px; padding-top: 6px;
          border-top: 1px solid rgba(6,182,212,0.15);
        }

        .dt-gallery-actions { display: flex; gap: 6px; }

        .dt-ga-btn {
          flex: 1; padding: 6px;
          background: rgba(6,182,212,0.1);
          border: 1px solid rgba(6,182,212,0.3);
          border-radius: 5px;
          color: #06b6d4; cursor: pointer; font-size: 14px;
          transition: all 0.2s;
        }
        .dt-ga-btn:hover { background: rgba(6,182,212,0.2); transform: translateY(-1px); }
        .dt-ga-del:hover { background: rgba(239,68,68,0.2) !important; border-color: rgba(239,68,68,0.4) !important; color: #ef4444 !important; }

        /* ── Existing ── */
        .dt-existing-view { width: 100%; }

        .dt-existing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 14px;
          margin-top: 16px;
        }

        .dt-existing-card {
          background: rgba(6,182,212,0.05);
          border: 2px solid rgba(6,182,212,0.2);
          border-radius: 8px;
          overflow: hidden;
        }

        .dt-existing-header {
          background: rgba(6,182,212,0.1);
          padding: 12px 14px;
          display: flex; align-items: center; gap: 10px;
          border-bottom: 1px solid rgba(6,182,212,0.2);
        }
        .dt-existing-num   { color: #06b6d4; font-size: 18px; font-weight: bold; }
        .dt-existing-title { color: #e5e7eb; font-weight: bold; font-size: 13px; }

        .dt-existing-body  { padding: 12px 14px; }
        .dt-detail-row { display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 6px; }
        .dt-detail-row span:first-child { color: #06b6d4; font-weight: bold; }
        .dt-detail-row span:last-child  { color: #9ca3af; }

        /* ── Lightbox ── */
        .dt-lightbox {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.95);
          display: flex; align-items: center; justify-content: center;
          z-index: 1000; padding: 20px;
        }

        .dt-lightbox-content {
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          border: 2px solid rgba(6,182,212,0.5);
          border-radius: 12px;
          max-width: 1200px; width: 100%; max-height: 90vh;
          overflow-y: auto; position: relative;
        }

        .dt-lb-close {
          position: absolute; top: 12px; right: 12px;
          width: 36px; height: 36px;
          background: rgba(239,68,68,0.3);
          border: 2px solid rgba(239,68,68,0.5);
          border-radius: 50%;
          color: #ef4444; font-size: 22px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .dt-lb-close:hover { background: rgba(239,68,68,0.5); transform: scale(1.1); }

        .dt-lb-header { padding: 16px 56px 16px 20px; border-bottom: 1px solid rgba(6,182,212,0.3); }
        .dt-lb-header h3 { color: #06b6d4; font-size: 18px; margin: 0 0 6px; }
        .dt-lb-meta { display: flex; gap: 12px; font-size: 12px; color: #9ca3af; }

        .dt-lb-image { padding: 20px; text-align: center; background: rgba(0,0,0,0.3); }
        .dt-lb-image img { max-width: 100%; max-height: 65vh; border-radius: 6px; border: 1px solid rgba(6,182,212,0.3); }

        .dt-lb-actions { padding: 16px 20px; display: flex; gap: 12px; justify-content: center; }

        .dt-lb-btn {
          padding: 10px 28px;
          background: rgba(6,182,212,0.2);
          border: 2px solid rgba(6,182,212,0.4);
          border-radius: 8px;
          color: #06b6d4; font-size: 14px; font-weight: bold; cursor: pointer;
          transition: all 0.2s;
        }
        .dt-lb-btn:hover { background: rgba(6,182,212,0.35); transform: scale(1.04); }
        .dt-lb-del {
          background: rgba(239,68,68,0.2) !important;
          border-color: rgba(239,68,68,0.4) !important;
          color: #ef4444 !important;
        }
        .dt-lb-del:hover { background: rgba(239,68,68,0.35) !important; }

        @media (max-width: 768px) {
          .dt-scrollable { padding: 12px; }
          .dt-gallery-grid, .dt-existing-grid { grid-template-columns: 1fr; }
          .dt-system-row { font-size: 12px; }
          .dt-row-tag { min-width: 60px; }
        }
      `}</style>
    </div>
  )
}
