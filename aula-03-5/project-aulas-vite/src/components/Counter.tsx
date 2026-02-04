import { useEffect, useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = window.setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div className="counter">
      <h2>Counter</h2>

      <p className="counter__value">{count}</p>

      <div className="counter__buttons">
        <button onClick={() => setIsRunning((prev) => !prev)}>
          {isRunning ? "Pause" : "Continue"}
        </button>
      </div>
    </div>
  );
}
