import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div style={{ margin: "1rem", backgroundColor: "pink", padding: "1rem" }}>
      {toggle && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          voluptate dicta, nemo ab, officia ullam corporis, dolorum non voluptas
          similique minus deleniti recusandae numquam suscipit veritatis quos
          laboriosam mollitia facere.
        </p>
      )}
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? "show" : "hide"}
        </button>
      </div>
    </div>
  );
};

export default Toggle;
