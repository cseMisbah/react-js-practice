//Basic of creating react-router -- first class
//Generally the work of react-router is done in app.jsx folder
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./ROUTING/Pages/Home";
import Blogs from "./ROUTING/Pages/Blogs";
import Contact from "./ROUTING/Pages/Contact";
import Error from "./ROUTING/Pages/Error";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

//Basic of creating react-router -- first class
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./ROUTING/Pages/Home";
import Blogs from "./ROUTING/Pages/Blogs";
import Contact from "./ROUTING/Pages/Contact";
import Error from "./ROUTING/Pages/Error";
import Navbar from "./ROUTING/components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/*
        <nav>
          <ul>
            <a href="/">Home</a> <br />
            <a href="/blogs">Blogs</a>
            <br />
            <a href="/contact">Contact</a>
          </ul>
        </nav>
        */}
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./ROUTING/Pages/Home";
import Blogs from "./ROUTING/Pages/Blogs";
import Contact from "./ROUTING/Pages/Contact";
import Error from "./ROUTING/Pages/Error";
import Navbar from "./ROUTING/components/Navbar";
import Blog from "./ROUTING/Pages/Blog";
import "./App.css";
import User from "./ROUTING/Pages/User";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/*
        <nav>
          <ul>
            <a href="/">Home</a> <br />
            <a href="/blogs">Blogs</a>
            <br />
            <a href="/contact">Contact</a>
          </ul>
        </nav>
        */}

        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/blogs/:title" element={<Blog></Blog>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
          {/*<Route path="/user/:userid" element={<User></User>}></Route>*/}
          <Route path="/user" element={<User></User>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
