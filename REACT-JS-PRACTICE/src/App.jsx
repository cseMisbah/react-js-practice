import React, { useState } from "react";
import Signup from "../FORM_VALIDATION/Signup";
import { useFormik } from "formik";

//name,email,password

const App = () => {
  //creating formik variable
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });

  return (
    <div>
      <h2>User Signup</h2>
      <form action="" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <Signup></Signup>
    </div>
  );
};

export default App;
/*
import React, { useState } from "react";
import Signup from "../FORM_VALIDATION/Signup";
import { useFormik } from "formik";

//name,email,password

const App = () => {
  //creating formik variable
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  //const [name, setName] = useState("");
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
    };
    console.log(newUser);
  };

  return (
    <div>
      <h2>User Signup</h2>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleNameChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <Signup></Signup>
    </div>
  );
};

export default App;
*/
