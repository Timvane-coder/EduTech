export default function RibbonComponent({ 
  id, 
  label, 
  details, 
  example, 
  className, 
  svgPath, 
  color,
  active, 
  highlighted,
  onClick 
}) {
  return (
    <div 
      className={`ribbon-component ${className} ${active ? 'active' : ''} ${highlighted ? 'highlight' : ''}`}
      data-tab={id}
      onClick={onClick}
    >
      <div className="icon">
        <svg viewBox="0 0 24 24">
          <path d={svgPath} />
        </svg>
      </div>
      <div className="label">{label}</div>
      <div className="details" dangerouslySetInnerHTML={{ __html: details.replace(/\n/g, '<br>') }} />
      <div className="example">{example}</div>
    </div>
  )
}

