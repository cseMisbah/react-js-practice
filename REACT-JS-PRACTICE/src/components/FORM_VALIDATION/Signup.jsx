import React from "react";

const Signup = () => {
  return <div>Signup</div>;
};

export default Signup;
/*
import React, { useState } from "react";
import Signup from "../FORM_VALIDATION/Signup";
import { useFormik } from "formik";
import * as yup from "yup";

//name,email,password

const App = () => {
  //creating formik variable
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(2, "name must have at least 3 characters")
        .required(),
      email: yup
        .string()
        .min(6, "name must have at least 6 characters")
        .required(),
      password: yup
        .string()
        .min(6, "name must have at least 6 characters")
        .required(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });

  console.error(formik.errors);

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
          {formik.errors.name && <span>{formik.errors.name}</span>}
          {formik.touched.name && <span>{formik.errors.name}</span>}
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
          {formik.errors.email && <span>{formik.errors.email}</span>}
          {formik.touched.email && <span>{formik.errors.email}</span>}
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
          {formik.errors.password && <span>{formik.errors.password}</span>}
          {formik.touched.password && <span>{formik.errors.password}</span>}
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

import React, { useState } from "react";
import Signup from "../FORM_VALIDATION/Signup";
import { useFormik } from "formik";

name,email,password

const App = () => {
  creating formik variable
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
