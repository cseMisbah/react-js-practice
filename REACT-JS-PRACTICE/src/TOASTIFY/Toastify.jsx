import React from "react";
import { ToastContainer, toast } from "react-toastify";

const Toastify = () => {
  const handleAddNewTodo = () => {
    toast("todo is added");
  };

  return (
    <div>
      <button onClick={handleAddNewTodo}>Add new todo</button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Toastify;
