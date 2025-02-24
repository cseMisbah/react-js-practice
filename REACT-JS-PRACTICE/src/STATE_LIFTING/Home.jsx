import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

const DummyTodos = ["todo1", "todo2"];

const Home = () => {
  const [todos, setTodos] = useState(DummyTodos);

  const handleNewTodo = (newTodo) => {
    // console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <NewTodo onTodo={handleNewTodo}></NewTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
};

export default Home;
