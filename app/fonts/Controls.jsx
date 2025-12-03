export default function Controls({ 
  isRunning, 
  isPaused, 
  isRecording, 
  onStart, 
  onPause, 
  onReset, 
  onToggleRecording 
}) {
  return (
    <div className="controls">
      <button 
        className="control-btn" 
        onClick={onStart}
        disabled={isRunning && !isPaused}
      >
        START
      </button>
      
      <button 
        className="control-btn" 
        onClick={onPause}
        disabled={!isRunning || isPaused}
      >
        PAUSE
      </button>
      
      <button 
        className={`control-btn ${isRecording ? 'recording' : ''}`}
        onClick={onToggleRecording}
      >
        {isRecording ? 'STOP' : 'REC'}
      </button>
      
      <button 
        className="control-btn" 
        onClick={onReset}
      >
        RESET
      </button>
    </div>
  )
}
