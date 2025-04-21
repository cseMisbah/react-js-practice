import React, { useReducer, useState } from "react";
import { reducer } from "./Reducer";

const booksData = [
  { id: 1, name: "Pather Panchal" },
  { id: 2, name: "Padma Nadir Majhi" },
  { id: 3, name: "  Srikanta" },
];

const initialState = {
  books: booksData,
  isModalOpen: false,
  modalText: "",
};

const Modal = ({ modalText }) => {
  return <p>{modalText}</p>;
};

const Index = () => {
  const [bookState, dispatch] = useReducer(reducer, initialState);
  const [bookName, setBookName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: new Date().getTime().toString(), name: bookName };
    dispatch({ type: "ADD", payload: newBook });
    setBookName("");
  };

  const removeBook = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <button type="submit">Add book</button>
      </form>
      {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}
      {bookState.books.map((book) => {
        const { id, name } = book;
        return (
          <li key={id}>
            {name}
            <button
              onClick={() => {
                removeBook(id);
              }}
            >
              remove
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default Index;
