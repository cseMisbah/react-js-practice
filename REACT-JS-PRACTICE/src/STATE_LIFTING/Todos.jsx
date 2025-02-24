import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <div>
      <h1>
        {props.todos.map((todo, index) => (
          <Todo key={index} todo={todo}></Todo>
        ))}
      </h1>
    </div>
  );
};

export default Todos;
