import React, { useState } from "react";

const index2 = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const handleName = (e) => {
    setUser({ name: e.target.value, email, password });
  };

  const handleEmail = (e) => {
    setUser({ name, email: e.target.email, password });
  };

  const handlePassword = (e) => {
    setUser({ name, email, password: e.target.password });
  };

  const handleSubmit = (e) => {
    console.log(user);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            value={name}
            required
            onChange={handleName}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            required
            onChange={handleEmail}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            value={password}
            required
            onChange={handlePassword}
          ></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default index2;
