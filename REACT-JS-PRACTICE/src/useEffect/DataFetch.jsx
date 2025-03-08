import React, { useEffect, useState } from "react";

const DataFetch = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => setTodos(data));
  }, []);

  const todosElement =
    todos &&
    todos.map((todo) => {
      return <div key={todo.id} {...todo.title}></div>;
    });

  return (
    <div>
      <h1>Data fetch</h1>
      {todosElement}
    </div>
  );
};

export default DataFetch;

/*
import React, { useEffect, useState } from "react";

const DataFetch = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setTodos(data);
          console.log(data);
        });
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Data fetch</h1>
    </div>
  );
};

export default DataFetch;
*/
