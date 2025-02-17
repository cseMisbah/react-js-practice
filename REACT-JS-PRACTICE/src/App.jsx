import { useState } from "react";

const users = [
  {
    fullName: "Raihan",
    age: 27,
    phones: [
      {
        home: "43908590859",
      },
      {
        office: "325890385",
      },
    ],
  },
  {
    fullName: "Bokkar",
    age: 27,
    phones: [
      {
        home: "43908590859",
      },
      {
        office: "325890385",
      },
    ],
  },
];

function App() {
  return (
    <div>
      <h1>Nested lists</h1>
      {users.map((user, index) => (
        <article key={index}>
          <h3>{user.fullName}</h3>
          <p>{user.age}</p>
          {user.phones.map((phone, index) => (
            <div key={index}>
              <p>Home : {phone.home}</p>
              <p>Office : {phone.office}</p>
            </div>
          ))}
        </article>
      ))}
    </div>
  );
}

export default App;
