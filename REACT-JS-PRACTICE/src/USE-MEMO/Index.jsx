import React, { useState } from "react";
import Todo from "./Todo";

const Index = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todos1", "todos2"]);
  console.log("Index render is calling");
  return (
    <div>
      <Todo todos={todos}></Todo>
      <h1>count: {count}</h1>
      <button
        onClick={() => {
          return setCount(count + 1);
        }}
      >
        increment
      </button>
    </div>
  );
};

export default Index;
