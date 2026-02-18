import { useMemo, useState } from "react";

const UseMemoCalculator = () => {
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log("Calculating value...");
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

export default UseMemoCalculator;
