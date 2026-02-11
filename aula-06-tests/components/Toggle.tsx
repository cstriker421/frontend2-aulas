import { useState } from "react";

const Toggle = () => {
  const [on, setOn] = useState(false);

  return (
    <div>
      <span>Status: {on ? "ON" : "OFF"}</span>
      <button onClick={() => setOn(!on)}>Toggle</button>
    </div>
  );
};

export default Toggle;
