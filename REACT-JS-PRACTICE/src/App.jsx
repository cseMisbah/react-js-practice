import { useState } from "react";

import "./App.css";
import Card from "./components/CARD/index";
/*
const users = [
  {
    fullName: "Anisul Islam",
    age: 32,
    phones: [{ home: "093585" }, { office: "347598357" }],
  },
  {
    fullName: "David hunt",
    age: 49,
    phones: [{ home: "093585" }, { office: "347598357" }],
  },
];
*/
function App() {
  return (
    <div>
      <h1 className="headingStyle">Todo App</h1>
      <Card />
      <Card />
      <Card />

      <h1>{/*Nested lists*/}</h1>
      {/*users.map((user, index) => (
        <article key={index}>
          <h3>Fullname :{user.fullName}</h3>
          <p>Age : {user.age}</p>
          user.phones.map((phone,index) =>{" "}
          <div>
            <p>Home : {phone.home}</p>
            <p>Office : {phone.office}</p>
          </div>{" "}
          )
        </article>
      ))*/}
    </div>
  );
}

export default App;
