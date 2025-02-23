import React, { useState } from "react";

const index3 = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const handleChange = (e) => {
    const fieldName = e.target.name;
    if (fieldName === "name") {
      setUser({ name: e.target.value, email, password });
    } else if (fieldName === "email") {
      setUser({ name, email: e.target.value, password });
    } else if (fieldName === "password") {
      setUser({ name, email, password: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    console.log(user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            required
            onChange={handleChange}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default index3;
