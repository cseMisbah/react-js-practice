import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  //const calculation = expensiveCalculation(count);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add todo</button>
      </div>
      <hr></hr>
      <div>
        <h2>count : {count}</h2>
        <button onClick={increment}>increment</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

export default UseMemo;

const expensiveCalculation = (num) => {
  console.log("Calculating......");
  for (let i = 0; i <= 100000000; i++) {
    num += 1;
  }
  return num;
};
