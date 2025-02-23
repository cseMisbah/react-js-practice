import React, { useState } from "react";

const HOOKS_USESTATE = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default HOOKS_USESTATE;
