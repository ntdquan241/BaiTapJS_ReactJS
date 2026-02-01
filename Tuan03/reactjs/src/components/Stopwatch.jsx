import React, { useState, useRef, useEffect } from 'react';
import './Stopwatch.css';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  
  const intervalRef = useRef(null);
  const lapInputRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    }
  };

  const handlePause = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleAddLap = () => {
    const newLap = {
      id: laps.length + 1,
      time: time,
      note: ''
    };
    setLaps([newLap, ...laps]);
    
    if (lapInputRef.current) {
      lapInputRef.current.focus();
    }
  };

  const formatTime = (ms) => {
    const minutes = Math.floor((ms / 60000) % 60);
    const seconds = Math.floor((ms / 1000) % 60);
    const centiseconds = Math.floor((ms / 10) % 100);

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="stopwatch-container">
      <h3>Bài 5: Stopwatch (useRef)</h3>
      
      <div className="display-time">
        {formatTime(time)}
      </div>

      <div className="controls">
        {!isRunning ? (
          <button className="btn start" onClick={handleStart}>Start</button>
        ) : (
          <button className="btn pause" onClick={handlePause}>Pause</button>
        )}
        <button className="btn reset" onClick={handleReset}>Reset</button>
        <button className="btn lap" onClick={handleAddLap} disabled={!isRunning && time === 0}>
          Add Lap
        </button>
      </div>

      <div className="lap-input-area">
        <input 
          ref={lapInputRef}
          type="text" 
          placeholder="Nhập ghi chú cho vòng chạy vừa thêm..." 
          className="lap-input"
        />
      </div>

      <div className="laps-list">
        {laps.map((lap) => (
          <div key={lap.id} className="lap-item">
            <span>Vòng {lap.id}</span>
            <span className="lap-time">{formatTime(lap.time)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stopwatch;