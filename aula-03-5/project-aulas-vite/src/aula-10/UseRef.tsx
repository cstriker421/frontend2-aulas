import { useEffect, useRef, useState } from "react";

export function UseRefCounter() {
  const [count, setCount] = useState(0);
  const previous = useRef(0);

  useEffect(() => {
    previous.current = count;
  }, [count]);

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {previous.current}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}

export default function InputFocus() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current?.focus()}>Focus Input</button>
    </div>
  );
}
