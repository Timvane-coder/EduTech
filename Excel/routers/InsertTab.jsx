'use client'
import { useState, useEffect } from 'react'

export default function InsertTab({ onAddVisualization, sessionId }) {
  const [activeCategory, setActiveCategory] = useState('charts')
  const [view, setView] = useState('options')
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)
  const [configStep, setConfigStep] = useState('basic')
  const [configData, setConfigData] = useState({
    title: '',
    width: 800,
    height: 600,
    showLabels: true,
    dataFields: {}
  })
  const [existingItems, setExistingItems] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [galleryItems, setGalleryItems] = useState([])
  const [loadedImages, setLoadedImages] = useState({})
  const [imageErrors, setImageErrors] = useState({})
  const [selectedImage, setSelectedImage] = useState(null)
  const [isLoadingGallery, setIsLoadingGallery] = useState(false)
  const [viewType, setViewType] = useState('all')

  const mainCategories = [
    { id: 'charts', label: '📊 Charts', icon: '📊' },
    { id: 'anatomical', label: '🫀 Anatomical', icon: '🫀' },
    { id: 'crossSection', label: '🔬 Cross-Section', icon: '🔬' },
    { id: 'stereochemistry', label: '🧪 Molecules', icon: '🧪' },
    { id: 'chemistry', label: '⚗️ Chemistry', icon: '⚗️' },
    { id: 'physics', label: '⚛️ Physics', icon: '⚛️' },
    { id: 'geometric', label: '📐 Geometric', icon: '📐' },
    { id: 'graphs', label: '📈 Graphs', icon: '📈' }
  ]

  const categoryOptions = {
    charts: [
      { id: 'search', label: '1. Search charts by name', icon: '🔍' },
      { id: 'view', label: '2. View available charts', icon: '👁️' },
      { id: 'create', label: '3. Create a chart', icon: '✨' },
      { id: 'existing', label: '4. View existing charts', icon: '📋' },
      { id: 'gallery', label: '5. View created images', icon: '🖼️' }
    ],
    anatomical: [
      { id: 'search', label: '1. Search diagrams by name', icon: '🔍' },
      { id: 'view', label: '2. View available anatomical diagrams', icon: '👁️' },
      { id: 'create', label: '3. Create an anatomical diagram', icon: '✨' },
      { id: 'existing', label: '4. View existing diagrams', icon: '📋' },
      { id: 'gallery', label: '5. View created images', icon: '🖼️' }
    ],
    crossSection: [
      { id: 'search', label: '1. Search diagrams by name', icon: '🔍' },
      { id: 'view', label: '2. View available cross-section diagrams', icon: '👁️' },
      { id: 'create', label: '3. Create a cross-section diagram', icon: '✨' },
      { id: 'existing', label: '4. View existing diagrams', icon: '📋' },
      { id: 'gallery', label: '5. View created images', icon: '🖼️' }
    ],
    stereochemistry: [
      { id: 'search', label: '1. Search molecules by name', icon: '🔍' },
      { id: 'formula', label: '2. Search by chemical formula', icon: '🔬' },
      { id: 'view', label: '3. View available molecular structures', icon: '👁️' },
      { id: 'create', label: '4. Create a molecular diagram', icon: '✨' },
      { id: 'existing', label: '5. View existing diagrams', icon: '📋' },
      { id: 'gallery', label: '6. View created images', icon: '🖼️' },
      { id: 'geometry', label: '7. Get molecular geometry information', icon: 'ℹ️' }
    ],
    chemistry: [
      { id: 'search', label: '1. Search chemistry diagrams by name', icon: '🔍' },
      { id: 'view', label: '2. View available chemistry diagrams', icon: '👁️' },
      { id: 'create', label: '3. Create a chemistry diagram', icon: '✨' },
      { id: 'existing', label: '4. View existing diagrams', icon: '📋' },
      { id: 'gallery', label: '5. View created images', icon: '🖼️' }
    ],
    physics: [
      { id: 'search', label: '1. Search physics diagrams by name', icon: '🔍' },
      { id: 'view', label: '2. View available physics diagrams', icon: '👁️' },
      { id: 'create', label: '3. Create a physics diagram', icon: '✨' },
      { id: 'existing', label: '4. View existing diagrams', icon: '📋' },
      { id: 'gallery', label: '5. View created images', icon: '🖼️' }
    ],
    geometric: [
      { id: 'search', label: '1. Search shapes by name', icon: '🔍' },
      { id: 'view', label: '2. View available shapes', icon: '👁️' },
      { id: 'create', label: '3. Create a geometric shape', icon: '✨' },
      { id: 'existing', label: '4. View existing shapes', icon: '📋' },
      { id: 'gallery', label: '5. View created images', icon: '🖼️' }
    ],
    graphs: [
      { id: 'search', label: '1. Search graphs by name', icon: '🔍' },
      { id: 'view', label: '2. View available graph types', icon: '👁️' },
      { id: 'create', label: '3. Create a graph', icon: '✨' },
      { id: 'existing', label: '4. View existing graphs', icon: '📋' },
      { id: 'gallery', label: '5. View created images', icon: '🖼️' }
    ]
  }

  const viewTypes = [
    { id: 'all', label: '🎨 All', icon: '🎨' },
    { id: 'charts', label: '📊 Charts', icon: '📊' },
    { id: 'anatomical', label: '🫀 Anatomical', icon: '🫀' },
    { id: 'crossSection', label: '🔬 Cross-Section', icon: '🔬' },
    { id: 'stereochemistry', label: '🧪 Molecules', icon: '🧪' },
    { id: 'chemistry', label: '⚗️ Chemistry', icon: '⚗️' },
    { id: 'physics', label: '⚛️ Physics', icon: '⚛️' },
    { id: 'geometric', label: '📐 Geometric', icon: '📐' },
    { id: 'graphs', label: '📈 Graphs', icon: '📈' }
  ]

  useEffect(() => {
    if (view === 'categories') {
      loadCategories()
    } else if (view === 'existing') {
      loadExistingItems()
    } else if (view === 'gallery') {
      loadGalleryItems()
    }
  }, [view, activeCategory, viewType])

  const loadGalleryItems = async () => {
    if (!sessionId) return
    setIsLoadingGallery(true)
    try {
      const response = await fetch(
        `/api/workbook/visualizations/gallery?sessionId=${sessionId}&type=${viewType}`
      )
      if (!response.ok) {
        setGalleryItems([])
        return
      }
      const data = await response.json()
      const items = data.items || []
      setGalleryItems(items)
      items.forEach(item => loadItemImage(item))
    } catch (error) {
      console.error('Error loading gallery:', error)
      setGalleryItems([])
    } finally {
      setIsLoadingGallery(false)
    }
  }

  const loadItemImage = async (item) => {
    if (loadedImages[item.id] || imageErrors[item.id]) return
    try {
      const response = await fetch(
        `/api/workbook/visualizations/image?sessionId=${sessionId}&type=${item.type}&id=${item.id}`
      )
      if (response.ok) {
        const blob = await response.blob()
        const imageUrl = URL.createObjectURL(blob)
        setLoadedImages(prev => ({ ...prev, [item.id]: imageUrl }))
      } else {
        const error = await response.json()
        setImageErrors(prev => ({ ...prev, [item.id]: error.error || 'Failed to load' }))
      }
    } catch (error) {
      setImageErrors(prev => ({ ...prev, [item.id]: error.message }))
    }
  }

  useEffect(() => {
    return () => {
      Object.values(loadedImages).forEach(url => { if (url) URL.revokeObjectURL(url) })
    }
  }, [loadedImages])

  const loadCategories = async () => {
    try {
      const response = await fetch(`/api/workbook/visualizations/categories?type=${activeCategory}`)
      const data = await response.json()
      setCategories(data.categories || [])
    } catch (error) {
      setCategories([])
    }
  }

  const loadItemsInCategory = async (category) => {
    try {
      const response = await fetch(`/api/workbook/visualizations/items?type=${activeCategory}&category=${encodeURIComponent(category)}`)
      const data = await response.json()
      setItems(data.items || [])
    } catch (error) {
      setItems([])
    }
  }

  const loadExistingItems = async () => {
    try {
      const response = await fetch(`/api/workbook/visualizations/existing?type=${activeCategory}&sessionId=${sessionId}`)
      const data = await response.json()
      setExistingItems(data.items || [])
    } catch (error) {
      setExistingItems([])
    }
  }

  const handleOptionSelect = async (option) => {
    switch (option.id) {
      case 'search': {
        const query = prompt(`Enter search term for ${activeCategory}:`)
        if (query) {
          setSearchQuery(query)
          try {
            const response = await fetch(`/api/workbook/visualizations/search?type=${activeCategory}&query=${encodeURIComponent(query)}`)
            const data = await response.json()
            setSearchResults(data.results || [])
            setView('search')
          } catch (error) {
            alert('Search failed')
          }
        }
        break
      }
      case 'formula':
        await searchByFormula()
        break
      case 'view':
        setView('categories')
        break
      case 'create':
        setView('categories')
        break
      case 'existing':
        setView('existing')
        break
      case 'gallery':
        setView('gallery')
        break
      case 'geometry':
        await showGeometryInfo()
        break
    }
  }

  const handleCategorySelect = async (category) => {
    setSelectedCategory(category)
    await loadItemsInCategory(category.name)
    setView('items')
  }

  const handleItemSelect = (item) => {
    setSelectedItem(item)
    setConfigData({
      title: item.name,
      width: 800,
      height: 600,
      showLabels: true,
      dataFields: {}
    })
    setConfigStep('basic')
    setView('configure')
  }

  const handleConfigFieldChange = (field, value) => {
    setConfigData(prev => ({ ...prev, [field]: value }))
  }

  const handleDataFieldChange = (field, value) => {
    setConfigData(prev => ({ ...prev, dataFields: { ...prev.dataFields, [field]: value } }))
  }

  const handleInsert = async () => {
    if (!selectedItem) {
      alert('Please complete configuration')
      return
    }

    try {
      // Build config based on category type
      const config = buildConfig()
      await onAddVisualization(activeCategory, config)
      alert(`✅ ${selectedItem.name} added successfully!`)
      if (view === 'gallery') await loadGalleryItems()
      resetToOptions()
    } catch (error) {
      alert(`❌ Failed to add: ${error.message}`)
    }
  }

  const buildConfig = () => {
    const baseOptions = {
      width: configData.width,
      height: configData.height,
      showLabels: configData.showLabels
    }

    // Category-specific option merging
    if (activeCategory === 'stereochemistry') {
      Object.assign(baseOptions, {
        show2D: configData.show2D !== false,
        show3D: configData.show3D !== false,
        showAngles: configData.showAngles !== false,
        rotationX: configData.rotationX || 20,
        rotationY: configData.rotationY || 30
      })
    }

    if (activeCategory === 'anatomical' && selectedItem.key === 'heartAnatomy') {
      Object.assign(baseOptions, {
        chamber: configData.chamber || 'wholeheart',
        showBloodFlow: configData.showBloodFlow !== false
      })
    }

    if (activeCategory === 'chemistry') {
      Object.assign(baseOptions, {
        showFormula: configData.showFormula !== false,
        showTitle: configData.showTitle !== false,
        colorScheme: configData.colorScheme || 'standard'
      })
    }

    if (activeCategory === 'physics') {
      Object.assign(baseOptions, {
        showLabels: configData.showLabels !== false,
        showValues: configData.showValues !== false,
        colorScheme: configData.colorScheme || 'standard'
      })
    }

    if (activeCategory === 'geometric') {
      Object.assign(baseOptions, {
        fillColor: configData.fillColor || '#3b82f6',
        strokeColor: configData.strokeColor || '#1e40af',
        strokeWidth: configData.strokeWidth || 2,
        showMeasurements: configData.showMeasurements !== false,
        showAngles: configData.showAngles !== false
      })
    }

    if (activeCategory === 'graphs') {
      Object.assign(baseOptions, {
        showGrid: configData.showGrid !== false,
        showAxes: configData.showAxes !== false,
        showPoints: configData.showPoints !== false,
        xMin: configData.xMin || -10,
        xMax: configData.xMax || 10,
        yMin: configData.yMin || -10,
        yMax: configData.yMax || 10
      })
    }

    const config = {
      key: selectedItem.key,
      title: configData.title,
      options: baseOptions
    }

    if (activeCategory === 'charts') {
      config.data = configData.dataFields
    }

    // For graphs, include points/segments data
    if (activeCategory === 'graphs') {
      config.points = configData.points || []
      config.segments = configData.segments || null
    }

    return config
  }

  const resetToOptions = () => {
    setView('options')
    setSelectedCategory(null)
    setSelectedItem(null)
    setItems([])
    setSearchResults([])
    setSearchQuery('')
    setExistingItems([])
    setConfigData({ title: '', width: 800, height: 600, showLabels: true, dataFields: {} })
    setConfigStep('basic')
  }

  const searchByFormula = async () => {
    const formula = prompt('Enter chemical formula (e.g., CH4, H2O, CO2):')
    if (!formula) return
    try {
      const response = await fetch(`/api/workbook/search-formula?formula=${encodeURIComponent(formula)}`)
      const data = await response.json()
      setSearchResults(data.results || [])
      setSearchQuery(formula)
      setView('search')
    } catch (error) {
      alert('Failed to search by formula')
    }
  }

  const showGeometryInfo = async () => {
    const geometries = ['tetrahedral', 'bent', 'trigonal_pyramidal', 'trigonal_planar', 'linear', 'octahedral']
    const choice = prompt('Select geometry:\n1. Tetrahedral\n2. Bent\n3. Trigonal Pyramidal\n4. Trigonal Planar\n5. Linear\n6. Octahedral\n\nEnter number (1-6):')
    const index = parseInt(choice) - 1
    if (index < 0 || index >= geometries.length) return
    try {
      const response = await fetch(`/api/workbook/geometry-info?geometry=${geometries[index]}&sessionId=${sessionId}`)
      const data = await response.json()
      alert(`Geometry: ${geometries[index].replace(/_/g, ' ').toUpperCase()}\n\nBond Angles: ${data.bondAngles?.join('°, ')}°\nCoordination: ${data.coordination} atoms\nDescription: ${data.description}\nExamples: ${data.examples?.join(', ')}`)
    } catch (error) {
      alert('Failed to get geometry information')
    }
  }

  const handleViewImage = (item) => setSelectedImage(item)

  const handleDownloadImage = async (item) => {
    try {
      const imageUrl = loadedImages[item.id]
      if (!imageUrl) { alert('Image not loaded yet'); return }
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${item.type}-${item.id}.png`
      a.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      alert('Failed to download image')
    }
  }

  const handleDeleteImage = async (item) => {
    if (!confirm(`Delete ${item.title}?`)) return
    try {
      const response = await fetch(
        `/api/workbook/visualizations/delete?sessionId=${sessionId}&type=${item.type}&id=${item.id}`,
        { method: 'DELETE' }
      )
      if (response.ok) {
        alert('✅ Deleted successfully')
        await loadGalleryItems()
      } else {
        const error = await response.json()
        alert(`❌ Failed to delete: ${error.error}`)
      }
    } catch (error) {
      alert('Failed to delete')
    }
  }

  // ── Config rendering helpers ──────────────────────────────────────────────

  const renderBasicConfig = () => (
    <div className="config-section">
      <h4>Basic Configuration</h4>
      <div className="form-group">
        <label>Title:</label>
        <input type="text" value={configData.title} onChange={(e) => handleConfigFieldChange('title', e.target.value)} placeholder="Enter title" />
      </div>
      <div className="form-group">
        <label>Width (pixels):</label>
        <input type="number" value={configData.width} onChange={(e) => handleConfigFieldChange('width', parseInt(e.target.value))} min="400" max="1600" />
      </div>
      <div className="form-group">
        <label>Height (pixels):</label>
        <input type="number" value={configData.height} onChange={(e) => handleConfigFieldChange('height', parseInt(e.target.value))} min="300" max="1200" />
      </div>

      {activeCategory !== 'charts' && (
        <div className="form-group checkbox">
          <label>
            <input type="checkbox" checked={configData.showLabels !== false} onChange={(e) => handleConfigFieldChange('showLabels', e.target.checked)} />
            Show Labels
          </label>
        </div>
      )}

      {/* Next step buttons by category */}
      {activeCategory === 'charts' && (
        <button className="next-btn" onClick={() => setConfigStep('data')}>Next: Configure Data →</button>
      )}
      {['stereochemistry', 'chemistry', 'physics', 'geometric', 'graphs'].includes(activeCategory) && (
        <button className="next-btn" onClick={() => setConfigStep('options')}>Next: Advanced Options →</button>
      )}
      {activeCategory === 'anatomical' && selectedItem?.key === 'heartAnatomy' && (
        <button className="next-btn" onClick={() => setConfigStep('options')}>Next: Heart Options →</button>
      )}
      {activeCategory === 'anatomical' && selectedItem?.key !== 'heartAnatomy' && (
        <button className="insert-btn" onClick={handleInsert}>✅ Insert Diagram</button>
      )}
      {activeCategory === 'crossSection' && (
        <button className="insert-btn" onClick={handleInsert}>✅ Insert Diagram</button>
      )}
    </div>
  )

  const renderDataConfig = () => {
    if (!selectedItem?.dataRequired) return null
    return (
      <div className="config-section">
        <h4>Data Configuration</h4>
        <p className="data-help">Enter cell ranges or comma-separated values</p>
        {selectedItem.dataRequired.map((field) => (
          <div key={field} className="form-group">
            <label>{field}:</label>
            <input
              type="text"
              value={configData.dataFields[field] || ''}
              onChange={(e) => handleDataFieldChange(field, e.target.value)}
              placeholder={`e.g., A1:A8 or value1,value2,value3`}
            />
            <small className="field-hint">
              {field === 'categories' && 'Labels for chart (e.g., A1:A8)'}
              {field === 'series' && 'Data values (e.g., B1:B7:C1:C7)'}
              {field === 'values' && 'Numeric values (e.g., B2:B8)'}
              {field === 'labels' && 'Text labels (e.g., A2:A8)'}
            </small>
          </div>
        ))}
        <div className="button-group">
          <button className="back-btn" onClick={() => setConfigStep('basic')}>← Back</button>
          <button className="insert-btn" onClick={handleInsert}>✅ Insert Chart</button>
        </div>
      </div>
    )
  }

  const renderAdvancedOptions = () => (
    <div className="config-section">
      <h4>Advanced Options</h4>

      {/* Stereochemistry */}
      {activeCategory === 'stereochemistry' && (
        <>
          <div className="form-group">
            <label>View Options:</label>
            <div className="checkbox-group">
              <label><input type="checkbox" checked={configData.show2D !== false} onChange={(e) => handleConfigFieldChange('show2D', e.target.checked)} /> Show 2D Structure</label>
              <label><input type="checkbox" checked={configData.show3D !== false} onChange={(e) => handleConfigFieldChange('show3D', e.target.checked)} /> Show 3D Model</label>
              <label><input type="checkbox" checked={configData.showAngles !== false} onChange={(e) => handleConfigFieldChange('showAngles', e.target.checked)} /> Show Bond Angles</label>
            </div>
          </div>
          {configData.show3D !== false && (
            <>
              <div className="form-group">
                <label>3D Rotation X (0-360°):</label>
                <input type="number" value={configData.rotationX || 20} onChange={(e) => handleConfigFieldChange('rotationX', parseInt(e.target.value))} min="0" max="360" />
              </div>
              <div className="form-group">
                <label>3D Rotation Y (0-360°):</label>
                <input type="number" value={configData.rotationY || 30} onChange={(e) => handleConfigFieldChange('rotationY', parseInt(e.target.value))} min="0" max="360" />
              </div>
            </>
          )}
        </>
      )}

      {/* Heart anatomy special options */}
      {activeCategory === 'anatomical' && selectedItem?.key === 'heartAnatomy' && (
        <>
          <div className="form-group">
            <label>Heart Chamber:</label>
            <select value={configData.chamber || 'wholeheart'} onChange={(e) => handleConfigFieldChange('chamber', e.target.value)}>
              <option value="wholeheart">Whole Heart</option>
              <option value="rightAtrium">Right Atrium</option>
              <option value="rightVentricle">Right Ventricle</option>
              <option value="leftAtrium">Left Atrium</option>
              <option value="leftVentricle">Left Ventricle</option>
            </select>
          </div>
          <div className="form-group checkbox">
            <label>
              <input type="checkbox" checked={configData.showBloodFlow !== false} onChange={(e) => handleConfigFieldChange('showBloodFlow', e.target.checked)} />
              Show Blood Flow
            </label>
          </div>
        </>
      )}

      {/* Chemistry options */}
      {activeCategory === 'chemistry' && (
        <>
          <div className="form-group">
            <label>Color Scheme:</label>
            <select value={configData.colorScheme || 'standard'} onChange={(e) => handleConfigFieldChange('colorScheme', e.target.value)}>
              <option value="standard">Standard</option>
              <option value="dark">Dark</option>
              <option value="colorful">Colorful</option>
              <option value="grayscale">Grayscale</option>
            </select>
          </div>
          <div className="form-group checkbox">
            <label><input type="checkbox" checked={configData.showFormula !== false} onChange={(e) => handleConfigFieldChange('showFormula', e.target.checked)} /> Show Chemical Formula</label>
          </div>
          <div className="form-group checkbox">
            <label><input type="checkbox" checked={configData.showTitle !== false} onChange={(e) => handleConfigFieldChange('showTitle', e.target.checked)} /> Show Title</label>
          </div>
        </>
      )}

      {/* Physics options */}
      {activeCategory === 'physics' && (
        <>
          <div className="form-group">
            <label>Color Scheme:</label>
            <select value={configData.colorScheme || 'standard'} onChange={(e) => handleConfigFieldChange('colorScheme', e.target.value)}>
              <option value="standard">Standard</option>
              <option value="dark">Dark</option>
              <option value="colorful">Colorful</option>
              <option value="scientific">Scientific</option>
            </select>
          </div>
          <div className="form-group checkbox">
            <label><input type="checkbox" checked={configData.showValues !== false} onChange={(e) => handleConfigFieldChange('showValues', e.target.checked)} /> Show Values</label>
          </div>
          <div className="form-group checkbox">
            <label><input type="checkbox" checked={configData.showLabels !== false} onChange={(e) => handleConfigFieldChange('showLabels', e.target.checked)} /> Show Labels</label>
          </div>
        </>
      )}

      {/* Geometric shape options */}
      {activeCategory === 'geometric' && (
        <>
          <div className="form-group">
            <label>Fill Color:</label>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <input type="color" value={configData.fillColor || '#3b82f6'} onChange={(e) => handleConfigFieldChange('fillColor', e.target.value)} />
              <input type="text" value={configData.fillColor || '#3b82f6'} onChange={(e) => handleConfigFieldChange('fillColor', e.target.value)} style={{ width: '100px' }} />
            </div>
          </div>
          <div className="form-group">
            <label>Stroke Color:</label>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <input type="color" value={configData.strokeColor || '#1e40af'} onChange={(e) => handleConfigFieldChange('strokeColor', e.target.value)} />
              <input type="text" value={configData.strokeColor || '#1e40af'} onChange={(e) => handleConfigFieldChange('strokeColor', e.target.value)} style={{ width: '100px' }} />
            </div>
          </div>
          <div className="form-group">
            <label>Stroke Width:</label>
            <input type="range" min="1" max="10" value={configData.strokeWidth || 2} onChange={(e) => handleConfigFieldChange('strokeWidth', parseInt(e.target.value))} />
            <span> {configData.strokeWidth || 2}px</span>
          </div>
          <div className="form-group checkbox">
            <label><input type="checkbox" checked={configData.showMeasurements !== false} onChange={(e) => handleConfigFieldChange('showMeasurements', e.target.checked)} /> Show Measurements</label>
          </div>
          <div className="form-group checkbox">
            <label><input type="checkbox" checked={configData.showAngles !== false} onChange={(e) => handleConfigFieldChange('showAngles', e.target.checked)} /> Show Angles</label>
          </div>
        </>
      )}

      {/* Graph/mathematical graph options */}
      {activeCategory === 'graphs' && (
        <>
          <div className="form-group">
            <label>X Axis Min:</label>
            <input type="number" value={configData.xMin !== undefined ? configData.xMin : -10} onChange={(e) => handleConfigFieldChange('xMin', parseFloat(e.target.value))} />
          </div>
          <div className="form-group">
            <label>X Axis Max:</label>
            <input type="number" value={configData.xMax !== undefined ? configData.xMax : 10} onChange={(e) => handleConfigFieldChange('xMax', parseFloat(e.target.value))} />
          </div>
          <div className="form-group">
            <label>Y Axis Min:</label>
            <input type="number" value={configData.yMin !== undefined ? configData.yMin : -10} onChange={(e) => handleConfigFieldChange('yMin', parseFloat(e.target.value))} />
          </div>
          <div className="form-group">
            <label>Y Axis Max:</label>
            <input type="number" value={configData.yMax !== undefined ? configData.yMax : 10} onChange={(e) => handleConfigFieldChange('yMax', parseFloat(e.target.value))} />
          </div>
          <div className="form-group checkbox">
            <label><input type="checkbox" checked={configData.showGrid !== false} onChange={(e) => handleConfigFieldChange('showGrid', e.target.checked)} /> Show Grid</label>
          </div>
          <div className="form-group checkbox">
            <label><input type="checkbox" checked={configData.showAxes !== false} onChange={(e) => handleConfigFieldChange('showAxes', e.target.checked)} /> Show Axes</label>
          </div>
          <div className="form-group checkbox">
            <label><input type="checkbox" checked={configData.showPoints !== false} onChange={(e) => handleConfigFieldChange('showPoints', e.target.checked)} /> Show Data Points</label>
          </div>
        </>
      )}

      <div className="button-group">
        <button className="back-btn" onClick={() => setConfigStep('basic')}>← Back</button>
        <button className="insert-btn" onClick={handleInsert}>✅ Insert into Workbook</button>
      </div>
    </div>
  )

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="insert-tab-wrapper">
      <div className="scrollable-content">
        <div className="tab-header">
          <h3>➕ Insert & View Visualizations</h3>
          <p className="subtitle">Create and view charts, diagrams, and scientific visualizations</p>
        </div>

        {/* Category Selection */}
        <div className="category-tabs" style={{ flexWrap: 'wrap' }}>
          {mainCategories.map((cat) => (
            <button
              key={cat.id}
              className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => { setActiveCategory(cat.id); resetToOptions() }}
            >
              <span className="cat-icon">{cat.icon}</span>
              <span className="cat-label">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Breadcrumb */}
        {view !== 'options' && (
          <div className="breadcrumb">
            <button onClick={resetToOptions}>Options</button>
            {view === 'search' && (<><span>›</span><span className="current">Search Results</span></>)}
            {view === 'existing' && (<><span>›</span><span className="current">Existing Items</span></>)}
            {view === 'gallery' && (<><span>›</span><span className="current">Image Gallery</span></>)}
            {view === 'items' && (<><span>›</span><button onClick={() => setView('categories')}>{selectedCategory?.name}</button></>)}
            {view === 'configure' && (
              <>
                <button onClick={() => setView('categories')}>{selectedCategory?.name}</button>
                <span>›</span>
                <button onClick={() => setView('items')}>Items</button>
                <span>›</span>
                <span className="current">{selectedItem?.name}</span>
              </>
            )}
          </div>
        )}

        {/* Options View */}
        {view === 'options' && (
          <div className="options-grid">
            <h4 className="section-title">
              {activeCategory === 'charts' && '📊 Chart Options'}
              {activeCategory === 'anatomical' && '🫀 Anatomical Diagram Options'}
              {activeCategory === 'crossSection' && '🔬 Cross-Section Diagram Options'}
              {activeCategory === 'stereochemistry' && '🧪 Molecular Structure Options'}
              {activeCategory === 'chemistry' && '⚗️ Chemistry Diagram Options'}
              {activeCategory === 'physics' && '⚛️ Physics Diagram Options'}
              {activeCategory === 'geometric' && '📐 Geometric Shape Options'}
              {activeCategory === 'graphs' && '📈 Mathematical Graph Options'}
            </h4>
            {categoryOptions[activeCategory]?.map((option) => (
              <button key={option.id} className="option-card" onClick={() => handleOptionSelect(option)}>
                <span className="option-icon">{option.icon}</span>
                <span className="option-label">{option.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Gallery View */}
        {view === 'gallery' && (
          <div className="gallery-view">
            <div className="gallery-header">
              <h4 className="section-title">🖼️ Image Gallery</h4>
              <div className="view-filters" style={{ flexWrap: 'wrap' }}>
                {viewTypes.map((type) => (
                  <button key={type.id} className={`filter-btn ${viewType === type.id ? 'active' : ''}`} onClick={() => setViewType(type.id)}>
                    <span className="filter-icon">{type.icon}</span>
                    <span className="filter-label">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>
            {isLoadingGallery ? (
              <div className="loading-state"><div className="spinner"></div><p>Loading images...</p></div>
            ) : galleryItems.length === 0 ? (
              <div className="empty-state"><div className="empty-icon">🎨</div><h3>No Images Yet</h3><p>Create visualizations to see them here</p></div>
            ) : (
              <div className="gallery-grid">
                {galleryItems.map((item) => (
                  <div key={item.id} className="gallery-card">
                    <div className="gallery-image" onClick={() => handleViewImage(item)}>
                      {loadedImages[item.id] ? (
                        <img src={loadedImages[item.id]} alt={item.title} />
                      ) : imageErrors[item.id] ? (
                        <div className="error-placeholder"><span className="error-icon">⚠️</span><p>Image not available</p></div>
                      ) : (
                        <div className="loading-placeholder"><div className="spinner-small"></div><p>Loading...</p></div>
                      )}
                      <div className="gallery-overlay"><span className="zoom-icon">🔍</span></div>
                    </div>
                    <div className="gallery-info">
                      <div className="gallery-header-info">
                        <h4 className="gallery-title">{item.title}</h4>
                        <span className="gallery-type-badge">{item.type}</span>
                      </div>
                      {item.formula && <div className="gallery-formula">{item.formula}</div>}
                      {item.category && <div className="gallery-category">{item.category}</div>}
                      <div className="gallery-meta">
                        <span className="gallery-date">{new Date(item.createdAt).toLocaleDateString()}</span>
                        <span className="gallery-size">{item.size || 'N/A'}</span>
                      </div>
                      <div className="gallery-actions">
                        <button className="gallery-action-btn download" onClick={() => handleDownloadImage(item)} title="Download">💾</button>
                        <button className="gallery-action-btn view" onClick={() => handleViewImage(item)} title="View Full Size">🔍</button>
                        <button className="gallery-action-btn delete" onClick={() => handleDeleteImage(item)} title="Delete">🗑️</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Search Results View */}
        {view === 'search' && (
          <div className="search-results-view">
            <h4 className="section-title">Search Results for "{searchQuery}" ({searchResults.length} found)</h4>
            {searchResults.length === 0 ? (
              <div className="empty-state">
                <p>No results found for "{searchQuery}"</p>
                <button className="back-btn" onClick={resetToOptions}>← Back to Options</button>
              </div>
            ) : (
              <div className="items-grid">
                {searchResults.map((item, index) => (
                  <div key={index} className="item-card" onClick={() => handleItemSelect(item)}>
                    <div className="item-number">{index + 1}</div>
                    <div className="item-icon">{item.icon || '📊'}</div>
                    <div className="item-name">{item.name}</div>
                    <div className="item-desc">{item.description}</div>
                    {item.formula && <div className="item-formula">Formula: {item.formula}</div>}
                    {item.category && <div className="item-category">Category: {item.category}</div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Existing Items View */}
        {view === 'existing' && (
          <div className="existing-items-view">
            <h4 className="section-title">Existing {activeCategory} in Workbook ({existingItems.length})</h4>
            {existingItems.length === 0 ? (
              <div className="empty-state">
                <p>No {activeCategory} created yet</p>
                <button className="back-btn" onClick={resetToOptions}>← Back to Options</button>
              </div>
            ) : (
              <div className="existing-items-grid">
                {existingItems.map((item, index) => (
                  <div key={index} className="existing-item-card">
                    <div className="existing-item-header">
                      <div className="item-number">{index + 1}</div>
                      <div className="item-title">{item.name}</div>
                    </div>
                    {item.preview && <div className="item-preview"><img src={item.preview} alt={item.name} /></div>}
                    <div className="item-details">
                      <div className="detail-row"><span className="detail-label">Type:</span><span className="detail-value">{item.type}</span></div>
                      {item.category && <div className="detail-row"><span className="detail-label">Category:</span><span className="detail-value">{item.category}</span></div>}
                      {item.formula && <div className="detail-row"><span className="detail-label">Formula:</span><span className="detail-value">{item.formula}</span></div>}
                      <div className="detail-row"><span className="detail-label">Created:</span><span className="detail-value">{new Date(item.created).toLocaleString()}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Categories View */}
        {view === 'categories' && (
          <div className="categories-view">
            <h4 className="section-title">Available Categories</h4>
            {categories.length === 0 ? (
              <div className="loading">Loading categories...</div>
            ) : (
              <div className="categories-grid">
                {categories.map((cat, index) => (
                  <button key={index} className="category-card" onClick={() => handleCategorySelect(cat)}>
                    <div className="category-number">{index + 1}</div>
                    <div className="category-name">{cat.name}</div>
                    <div className="category-count">{cat.count} items</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Items View */}
        {view === 'items' && (
          <div className="items-view">
            <h4 className="section-title">{selectedCategory?.name}</h4>
            {items.length === 0 ? (
              <div className="loading">Loading items...</div>
            ) : (
              <div className="items-grid">
                {items.map((item, index) => (
                  <div key={index} className="item-card" onClick={() => handleItemSelect(item)}>
                    <div className="item-number">{index + 1}</div>
                    <div className="item-icon">{item.icon || '📊'}</div>
                    <div className="item-name">{item.name}</div>
                    <div className="item-desc">{item.description}</div>
                    {item.formula && <div className="item-formula">Formula: {item.formula}</div>}
                    {item.dataRequired && <div className="item-data-req">Requires: {item.dataRequired.join(', ')}</div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Configuration View */}
        {view === 'configure' && (
          <div className="configure-view">
            <div className="config-header">
              <h4>Configuring: {selectedItem?.name}</h4>
              <p>{selectedItem?.description}</p>
            </div>
            <div className="config-steps">
              <div className={`step ${configStep === 'basic' ? 'active' : ''}`}>1. Basic Settings</div>
              {activeCategory === 'charts' && (
                <div className={`step ${configStep === 'data' ? 'active' : ''}`}>2. Data Configuration</div>
              )}
              {['stereochemistry', 'chemistry', 'physics', 'geometric', 'graphs'].includes(activeCategory) && (
                <div className={`step ${configStep === 'options' ? 'active' : ''}`}>2. Advanced Options</div>
              )}
              {activeCategory === 'anatomical' && selectedItem?.key === 'heartAnatomy' && (
                <div className={`step ${configStep === 'options' ? 'active' : ''}`}>2. Heart Options</div>
              )}
            </div>
            {configStep === 'basic' && renderBasicConfig()}
            {configStep === 'data' && renderDataConfig()}
            {configStep === 'options' && renderAdvancedOptions()}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
            <div className="lightbox-header">
              <h3>{selectedImage.title}</h3>
              <div className="lightbox-meta">
                <span>{selectedImage.type}</span>
                {selectedImage.formula && <span>{selectedImage.formula}</span>}
              </div>
            </div>
            <div className="lightbox-image">
              {loadedImages[selectedImage.id] ? (
                <img src={loadedImages[selectedImage.id]} alt={selectedImage.title} />
              ) : (
                <div className="loading-placeholder"><div className="spinner"></div><p>Loading image...</p></div>
              )}
            </div>
            <div className="lightbox-actions">
              <button className="lightbox-btn download" onClick={() => handleDownloadImage(selectedImage)}>💾 Download</button>
              <button className="lightbox-btn delete" onClick={() => { handleDeleteImage(selectedImage); setSelectedImage(null) }}>🗑️ Delete</button>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .insert-tab-wrapper {
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .scrollable-content {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 20px;
        }

        .scrollable-content::-webkit-scrollbar {
          width: 10px;
        }

        .scrollable-content::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }

        .scrollable-content::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 5px;
        }

        .tab-header {
          margin-bottom: 20px;
        }

        .tab-header h3 {
          color: #3b82f6;
          font-size: 20px;
          margin: 0 0 5px 0;
        }

        .subtitle {
          color: #9ca3af;
          font-size: 13px;
          margin: 0;
        }

        .category-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .category-tab {
          padding: 10px 20px;
          background: rgba(59, 130, 246, 0.1);
          border: 2px solid rgba(59, 130, 246, 0.2);
          border-radius: 8px;
          color: #3b82f6;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .category-tab:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-2px);
        }

        .category-tab.active {
          background: rgba(59, 130, 246, 0.3);
          border-color: #3b82f6;
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
        }

        .cat-icon {
          font-size: 20px;
        }

        .cat-label {
          font-weight: bold;
          font-size: 14px;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          padding: 10px 15px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 8px;
          font-size: 13px;
        }

        .breadcrumb button {
          background: none;
          border: none;
          color: #3b82f6;
          cursor: pointer;
          padding: 0;
          text-decoration: underline;
        }

        .breadcrumb button:hover {
          color: #60a5fa;
        }

        .breadcrumb span {
          color: #9ca3af;
        }

        .breadcrumb .current {
          color: #e5e7eb;
          font-weight: bold;
        }

        .section-title {
          color: #3b82f6;
          font-size: 18px;
          margin: 0 0 15px 0;
          padding-bottom: 10px;
          border-bottom: 2px solid rgba(59, 130, 246, 0.3);
        }

        .options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 15px;
        }

        .option-card {
          padding: 20px;
          background: rgba(59, 130, 246, 0.1);
          border: 2px solid rgba(59, 130, 246, 0.2);
          border-radius: 8px;
          color: #3b82f6;
          display: flex;
          align-items: center;
          gap: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .option-card:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .option-icon {
          font-size: 32px;
        }

        .option-label {
          font-size: 15px;
          font-weight: bold;
        }

        /* Gallery View Styles */
        .gallery-view {
          width: 100%;
        }

        .gallery-header {
          margin-bottom: 20px;
        }

        .view-filters {
          display: flex;
          gap: 10px;
          margin-top: 15px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 8px 16px;
          background: rgba(249, 115, 22, 0.1);
          border: 2px solid rgba(249, 115, 22, 0.2);
          border-radius: 8px;
          color: #f97316;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 12px;
        }

        .filter-btn:hover {
          background: rgba(249, 115, 22, 0.2);
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: rgba(249, 115, 22, 0.3);
          border-color: #f97316;
          box-shadow: 0 0 15px rgba(249, 115, 22, 0.4);
        }

        .filter-icon {
          font-size: 16px;
        }

        .filter-label {
          font-weight: bold;
        }

        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          color: #9ca3af;
        }

        .spinner {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(249, 115, 22, 0.3);
          border-top-color: #f97316;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 20px;
        }

        .spinner-small {
          width: 30px;
          height: 30px;
          border: 3px solid rgba(249, 115, 22, 0.3);
          border-top-color: #f97316;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          text-align: center;
        }

        .empty-icon {
          font-size: 80px;
          margin-bottom: 20px;
          opacity: 0.5;
        }

        .empty-state h3 {
          color: #f97316;
          font-size: 24px;
          margin: 0 0 10px 0;
        }

        .empty-state p {
          color: #9ca3af;
          font-size: 14px;
          margin: 0;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
          padding-bottom: 20px;
        }

        .gallery-card {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(249, 115, 22, 0.2);
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .gallery-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(249, 115, 22, 0.3);
          border-color: #f97316;
        }

        .gallery-image {
          position: relative;
          width: 100%;
          height: 200px;
          background: rgba(0, 0, 0, 0.3);
          cursor: pointer;
          overflow: hidden;
        }

        .gallery-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .gallery-card:hover .gallery-image img {
          transform: scale(1.05);
        }

        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-image:hover .gallery-overlay {
          opacity: 1;
        }

        .zoom-icon {
          font-size: 40px;
        }

        .loading-placeholder,
        .error-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #9ca3af;
          font-size: 12px;
        }

        .error-icon {
          font-size: 40px;
          margin-bottom: 10px;
        }

        .gallery-info {
          padding: 15px;
        }

        .gallery-header-info {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 10px;
        }

        .gallery-title {
          color: #f97316;
          font-size: 15px;
          font-weight: bold;
          flex: 1;
          line-height: 1.3;
          margin: 0;
        }

        .gallery-type-badge {
          padding: 4px 10px;
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.4);
          border-radius: 12px;
          color: #3b82f6;
          font-size: 10px;
          font-weight: bold;
          text-transform: uppercase;
          white-space: nowrap;
          margin-left: 10px;
          flex-shrink: 0;
        }

        .gallery-formula {
          color: #22c55e;
          font-size: 12px;
          font-family: 'Courier New', monospace;
          margin-bottom: 6px;
        }

        .gallery-category {
          color: #a855f7;
          font-size: 12px;
          margin-bottom: 8px;
        }

        .gallery-meta {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: #9ca3af;
          margin-bottom: 12px;
          padding-top: 8px;
          border-top: 1px solid rgba(249, 115, 22, 0.2);
        }

        .gallery-actions {
          display: flex;
          gap: 8px;
        }

        .gallery-action-btn {
          flex: 1;
          padding: 8px;
          background: rgba(249, 115, 22, 0.1);
          border: 1px solid rgba(249, 115, 22, 0.3);
          border-radius: 6px;
          color: #f97316;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .gallery-action-btn:hover {
          background: rgba(249, 115, 22, 0.2);
          transform: translateY(-2px);
        }

        .gallery-action-btn.delete:hover {
          background: rgba(239, 68, 68, 0.2);
          border-color: rgba(239, 68, 68, 0.4);
          color: #ef4444;
        }

        /* Lightbox Modal */
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .lightbox-content {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border: 2px solid rgba(249, 115, 22, 0.5);
          border-radius: 12px;
          max-width: 1200px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .lightbox-content::-webkit-scrollbar {
          width: 8px;
        }

        .lightbox-content::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }

        .lightbox-content::-webkit-scrollbar-thumb {
          background: rgba(249, 115, 22, 0.5);
          border-radius: 4px;
        }

        .lightbox-close {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 40px;
          height: 40px;
          background: rgba(239, 68, 68, 0.3);
          border: 2px solid rgba(239, 68, 68, 0.5);
          border-radius: 50%;
          color: #ef4444;
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .lightbox-close:hover {
          background: rgba(239, 68, 68, 0.5);
          transform: scale(1.1);
        }

        .lightbox-header {
          padding: 20px 60px 20px 20px;
          border-bottom: 2px solid rgba(249, 115, 22, 0.3);
        }

        .lightbox-header h3 {
          color: #f97316;
          font-size: 22px;
          margin: 0 0 8px 0;
        }

        .lightbox-meta {
          display: flex;
          gap: 15px;
          font-size: 13px;
        }

        .lightbox-meta span {
          color: #9ca3af;
        }

        .lightbox-image {
          padding: 20px;
          text-align: center;
          background: rgba(0, 0, 0, 0.3);
        }

        .lightbox-image img {
          max-width: 100%;
          max-height: 70vh;
          border-radius: 8px;
          border: 1px solid rgba(249, 115, 22, 0.3);
        }

        .lightbox-actions {
          padding: 20px;
          display: flex;
          gap: 15px;
          justify-content: center;
        }

        .lightbox-btn {
          padding: 12px 30px;
          background: rgba(249, 115, 22, 0.2);
          border: 2px solid rgba(249, 115, 22, 0.4);
          border-radius: 8px;
          color: #f97316;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .lightbox-btn:hover {
          background: rgba(249, 115, 22, 0.3);
          transform: scale(1.05);
        }

        .lightbox-btn.delete {
          background: rgba(239, 68, 68, 0.2);
          border-color: rgba(239, 68, 68, 0.4);
          color: #ef4444;
        }

        .lightbox-btn.delete:hover {
          background: rgba(239, 68, 68, 0.3);
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
        }

        .category-card {
          padding: 20px;
          background: rgba(168, 85, 247, 0.1);
          border: 2px solid rgba(168, 85, 247, 0.2);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .category-card:hover {
          background: rgba(168, 85, 247, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(168, 85, 247, 0.3);
        }

        .category-number {
          color: #a855f7;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .category-name {
          color: #e5e7eb;
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .category-count {
          color: #9ca3af;
          font-size: 13px;
        }

        .items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 15px;
        }

        .item-card {
          padding: 20px;
          background: rgba(34, 197, 94, 0.1);
          border: 2px solid rgba(34, 197, 94, 0.2);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .item-card:hover {
          background: rgba(34, 197, 94, 0.2);
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
        }

        .item-number {
          color: #22c55e;
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .item-icon {
          font-size: 48px;
          text-align: center;
          margin-bottom: 10px;
        }

        .item-name {
          color: #22c55e;
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .item-desc {
          color: #9ca3af;
          font-size: 13px;
          line-height: 1.5;
          margin-bottom: 8px;
        }

        .item-formula {
          color: #10b981;
          font-size: 12px;
          font-family: 'Courier New', monospace;
          margin-top: 8px;
        }

        .item-category {
          color: #a855f7;
          font-size: 12px;
          margin-top: 6px;
          font-style: italic;
        }

        .item-data-req {
          color: #f59e0b;
          font-size: 11px;
          margin-top: 8px;
          font-style: italic;
        }

        .existing-items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 20px;
        }

        .existing-item-card {
          background: rgba(16, 185, 129, 0.1);
          border: 2px solid rgba(16, 185, 129, 0.3);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .existing-item-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3);
        }

        .existing-item-header {
          background: rgba(16, 185, 129, 0.2);
          padding: 15px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .existing-item-header .item-number {
          color: #10b981;
          font-size: 24px;
          font-weight: bold;
          margin: 0;
        }

        .item-title {
          color: #10b981;
          font-size: 16px;
          font-weight: bold;
          flex: 1;
        }

        .item-preview {
          width: 100%;
          height: 200px;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .item-preview img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .item-details {
          padding: 15px;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          font-size: 13px;
        }

        .detail-label {
          color: #10b981;
          font-weight: bold;
        }

        .detail-value {
          color: #e5e7eb;
        }                                                       
        .configure-view {
          max-width: 800px;
          margin: 0 auto;
        }                                                       
        .config-header {
          background: rgba(59, 130, 246, 0.1);                            border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
        }

        .config-header h4{
          color: #3b82f6;
          font-size: 20px;
          margin: 0 0 8px 0;
        }

        .config-header p {
          color: #9ca3af;
          font-size: 14px;
          margin: 0;
        }

        .config-steps {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
        }                                                       
        .step {
          flex: 1;
          padding: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;                                             color: #9ca3af;
          text-align: center;
          font-size: 13px;
          font-weight: bold;
          transition: all 0.3s ease;
        }
                                                                        .step.active {
          background: rgba(59, 130, 246, 0.2);                            border-color: #3b82f6;
          color: #3b82f6;
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);                 }
                                                                        .config-section {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 8px;
          padding: 25px;                                                }
                                                                        .config-section h4 {
          color: #3b82f6;                                                 font-size: 18px;
          margin: 0 0 20px 0;                                           }

       .data-help {
          color: #9ca3af;
          font-size: 13px;
          margin: 0 0 20px 0;                                             padding: 10px;
          background: rgba(59, 130, 246, 0.1);                            border-radius: 6px;
        }                                                       
        .form-group {                                                     margin-bottom: 20px;
        }                                                       
        .form-group label {
          display: block;
          color: #3b82f6;                                                 font-size: 14px;
          font-weight: bold;                                              margin-bottom: 8px;
        }                                                       
        .form-group input[type="text"],                                 .form-group input[type="number"],
        .form-group select {                                              width: 100%;
          padding: 10px 14px;                                             background: rgba(0, 0, 0, 0.4);
          border: 2px solid rgba(59, 130, 246, 0.3);                      
          border-radius: 6px;
          color: #e5e7eb;
          font-size: 14px;
          box-sizing: border-box;
        }

        .form-group input:focus,
        .form-group select:focus {
          outline: none;                                                  border-color: #3b82f6;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
        }

        .field-hint {
          display: block;
          color: #9ca3af;
          font-size: 12px;
          margin-top: 5px;
          font-style: italic;
        }

        .form-group.checkbox label {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }

        .form-group.checkbox input[type="checkbox"] {
          width: 20px;                                                    height: 20px;
          cursor: pointer;
        }
                                                                        .checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 10px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 6px;
        }

        .checkbox-group label {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #e5e7eb;
          cursor: pointer;
        }

        .button-group {
          display: flex;
          gap: 10px;
          margin-top: 25px;
        }

        .back-btn,
        .next-btn,
        .insert-btn {
          flex: 1;
          padding: 14px;
          border: 2px solid;
          border-radius: 8px;                                             font-size: 15px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .back-btn {
          background: rgba(239, 68, 68, 0.2);                             border-color: rgba(239, 68, 68, 0.4);
          color: #ef4444;
        }
                                                                        .back-btn:hover {
          background: rgba(239, 68, 68, 0.3);
          transform: scale(1.02);
          box-shadow: 0 0 15px rgba(239, 68, 68, 0.3);
        }

        .next-btn {
          background: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.4);
          color: #3b82f6;
          width: 100%;
          margin-top: 20px;
        }
                                                                        .next-btn:hover {
          background: rgba(59, 130, 246, 0.3);
          transform: scale(1.02);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
        }

        .insert-btn {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(22, 163, 74, 0.3));
          border-color: rgba(34, 197, 94, 0.5);
          color: #22c55e;
        }

        .insert-btn:hover {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.5), rgba(22, 163, 74, 0.5));
          transform: scale(1.02);
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
        }

        .loading {
          text-align: center;
          padding: 40px;
          color: #9ca3af;
          font-size: 16px;
        }

        @media (max-width: 768px) {
          .scrollable-content {
            padding: 15px;                                                }

          .category-tabs {
            gap: 8px;
          }

          .category-tab {
            padding: 8px 14px;
          }

          .cat-icon {
            font-size: 16px;                                              }                                                     
          .cat-label {
            font-size: 12px;
          }

          .options-grid,
          .categories-grid,
          .items-grid,
          .existing-items-grid,
          .gallery-grid {
            grid-template-columns: 1fr;
          }                                                     
          .config-steps {
            flex-direction: column;
          }

          .button-group {
            flex-direction: column;
          }

          .view-filters {
            gap: 8px;
          }

          .filter-btn {
            padding: 6px 12px;
            font-size: 11px;
          }                                                                                                                               .filter-icon {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  )
}
