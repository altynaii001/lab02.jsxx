import { useState } from "react";

export default function StepCounter({ initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([initialValue]);
  const [operationCount, setOperationCount] = useState(0);

  const increment = () => {
    const newValue = count + step;
    setCount(newValue);
    setHistory(prev => [...prev, newValue]);
    setOperationCount(prev => prev + 1);
  };

  const decrement = () => {
    const newValue = count - step;
    setCount(newValue);
    setHistory(prev => [...prev, newValue]);
    setOperationCount(prev => prev + 1);
  };

  const reset = () => {
    setCount(initialValue);
    setHistory([initialValue]);
    setOperationCount(0);
  };

  const last5 = history.slice(-5);

  return (
    <div style={{ border: "1px solid gray", padding: "16px", margin: "12px 0" }}>
      <h2>Current count: {count}</h2>

      <button onClick={increment}>Increment (+{step})</button>{" "}
      <button onClick={decrement}>Decrement (-{step})</button>{" "}
      <button onClick={reset}>Reset</button>

      <p>Total operations: {operationCount}</p>

      <p>Last 5 values:</p>
      <ul>
        {last5.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
