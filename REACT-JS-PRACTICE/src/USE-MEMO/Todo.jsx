import React, { memo } from "react";

const Todo = ({ todos }) => {
  console.log("todo render is calling");
  return (
    <div>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </div>
  );
};

export default memo(Todo);
