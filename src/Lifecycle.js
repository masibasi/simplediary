import React, { useEffect, useState } from "react";

export const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {}, []);
  return (
    <div style={{ padding: "20px", backgroundColor: "red" }}>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};
