//api/workbook/geometry-info/route.js
import { NextResponse } from 'next/server'
import serverWorkbookManager from '@/lib/workbookManager.server'

const GEOMETRY_DATA = {
  tetrahedral: {
    bondAngles: [109.5],
    coordination: 4,
    description: 'Four atoms arranged at corners of a tetrahedron around a central atom',
    examples: ['CH₄', 'CCl₄', 'NH₄⁺', 'SiF₄'],
    electronPairs: 4,
    lonePairs: 0,
    hybridization: 'sp³'
  },
  bent: {
    bondAngles: [104.5, 120],
    coordination: 2,
    description: 'Two bonding atoms with lone pairs on central atom causing a bent shape',
    examples: ['H₂O', 'H₂S', 'SO₂', 'O₃'],
    electronPairs: 4,
    lonePairs: 2,
    hybridization: 'sp³'
  },
  trigonal_pyramidal: {
    bondAngles: [107],
    coordination: 3,
    description: 'Three bonding atoms with one lone pair forming a pyramidal shape',
    examples: ['NH₃', 'PH₃', 'H₃O⁺', 'PCl₃'],
    electronPairs: 4,
    lonePairs: 1,
    hybridization: 'sp³'
  },
  trigonal_planar: {
    bondAngles: [120],
    coordination: 3,
    description: 'Three atoms arranged in a flat triangular pattern around central atom',
    examples: ['BF₃', 'CO₃²⁻', 'C₂H₄ (per carbon)', 'SO₃'],
    electronPairs: 3,
    lonePairs: 0,
    hybridization: 'sp²'
  },
  linear: {
    bondAngles: [180],
    coordination: 2,
    description: 'Two bonding atoms in a straight line through the central atom',
    examples: ['CO₂', 'HCN', 'BeF₂', 'BeCl₂', 'CS₂'],
    electronPairs: 2,
    lonePairs: 0,
    hybridization: 'sp'
  },
  octahedral: {
    bondAngles: [90, 180],
    coordination: 6,
    description: 'Six atoms at corners of a regular octahedron around the central atom',
    examples: ['SF₆', 'Fe(CN)₆³⁻', 'Co(NH₃)₆³⁺', 'PF₆⁻'],
    electronPairs: 6,
    lonePairs: 0,
    hybridization: 'sp³d²'
  },
  trigonal_bipyramidal: {
    bondAngles: [90, 120, 180],
    coordination: 5,
    description: 'Five atoms — three equatorial at 120° and two axial at 180°',
    examples: ['PCl₅', 'AsF₅', 'PF₅'],
    electronPairs: 5,
    lonePairs: 0,
    hybridization: 'sp³d'
  },
  square_planar: {
    bondAngles: [90, 180],
    coordination: 4,
    description: 'Four bonding atoms in a square plane with two lone pairs above and below',
    examples: ['XeF₄', 'PtCl₄²⁻', '[AuCl₄]⁻'],
    electronPairs: 6,
    lonePairs: 2,
    hybridization: 'sp³d²'
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const geometry = searchParams.get('geometry')

    if (!geometry) {
      // Return all geometries if none specified
      return NextResponse.json({
        geometries: Object.keys(GEOMETRY_DATA),
        data: GEOMETRY_DATA
      })
    }

    const info = GEOMETRY_DATA[geometry.toLowerCase()]

    if (!info) {
      return NextResponse.json(
        { error: `Geometry '${geometry}' not found. Available: ${Object.keys(GEOMETRY_DATA).join(', ')}` },
        { status: 404 }
      )
    }

    return NextResponse.json({ geometry, ...info })
  } catch (error) {
    console.error('Geometry info error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
