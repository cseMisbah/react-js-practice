import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AddBlog from "../pages/AddBlog";
import About from "../pages/About";
import Error from "../pages/Error";
import Navbar from "../layout/Navbar";
import ProtectedRouting from "../layout/ProtectedRouting";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          Log out
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          log in
        </button>
      )}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/add-blog"
          element={
            <ProtectedRouting isLoggedIn={isLoggedIn}>
              <AddBlog></AddBlog>
            </ProtectedRouting>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
