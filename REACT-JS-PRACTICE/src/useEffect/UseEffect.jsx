import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    console.log("useEffect");
  }, [count]);
  return (
    <div>
      {console.log("rendering")}
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setIsloading(!isLoading)}>isLoading</button>
    </div>
  );
};

export default UseEffect;
