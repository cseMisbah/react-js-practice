import { useState } from "react";
import List from "./components/Uniquelist/List";

//import "./App.css";
//import Card from "./components/CARD/index";
//import Data from "./Data.json";

function App() {
  return (
    <div>
      <List></List>
    </div>
  );
}

export default App;

/*
 //let items = [];
  // items.push(Data);
  // console.log(items);
<h1 className="headingStyle">Todo App</h1>
      {Data.map((item, index) => (
        <Card item={item} key={index}></Card>
      ))}
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

function App() {
  let items = [];

  for (let x = 0; x < Data.length; x++) {
    items.push(<Card titleText={Data[x].title} descText={Data[x].desc} />);
  }

  return (
    <div>
      <h1 className="headingStyle">Todo App</h1>
      {items}
    </div>
  );
}

export default App;

   
      <h1>{Nested lists}</h1>
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
      ))}
*/
