import React from "react";
import { v4 as uuidv4 } from "uuidv4";

const todos = [
  {
    title: "todo1",
    desc: "todo 1 description 1",
  },
  {
    title: "todo2",
    desc: "todo 2 description 2",
  },
  {
    title: "todo3",
    desc: "todo 3 description 3",
  },
  {
    title: "todo4",
    desc: "todo 4 description 4",
  },
];

const List = () => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
