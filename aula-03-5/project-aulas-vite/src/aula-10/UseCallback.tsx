import { useCallback, useState } from "react";

type UseCallbackExampleProps = {
  executing: () => void;
};

const UseCallbackExample = ({ executing }: UseCallbackExampleProps) => {
  console.log("Rendered!");
  return <button onClick={executing}>Execute</button>;
};

export default function UseCallbackDad() {
  const [count, setCount] = useState(0);

  const incrementing = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <UseCallbackExample executing={incrementing} />
    </div>
  );
}
