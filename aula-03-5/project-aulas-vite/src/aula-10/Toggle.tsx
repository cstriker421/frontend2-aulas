import { useEffect, useState } from "react";

export default function Toggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  return (
    <div>
      <span>Status: {on ? "ON" : "OFF"}</span>
      <button onClick={() => setOn((prev) => !prev)}>Toggle</button>
    </div>
  );
}
