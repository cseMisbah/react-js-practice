import React from "react";
import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>count : {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        disabled={count === 10 ? true : false}
      >
        +
      </button>{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button
        onClick={() => setCount(count - 1)}
        disabled={count === 0 ? true : false}
      >
        -
      </button>
    </div>
  );
};

export default State;
