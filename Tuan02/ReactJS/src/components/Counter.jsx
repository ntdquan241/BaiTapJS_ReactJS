import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      
      <div className="counter-display">
        {count}
      </div>

      <div className="button-group">
        <button className="btn" onClick={handleDecrease}>
          -
        </button>

        <button className="btn btn-reset" onClick={handleReset}>
          Reset
        </button>

        <button className="btn" onClick={handleIncrease}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;