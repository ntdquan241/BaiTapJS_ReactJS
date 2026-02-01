import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Đồng hồ kỹ thuật số</h2>
      <div style={{ fontSize: '40px', fontWeight: 'bold', color: '#333' }}>
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
}

export default DigitalClock;