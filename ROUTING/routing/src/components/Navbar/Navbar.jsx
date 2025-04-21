import React from "react";
//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
      <NavLink to="/blogs" className="nav-link">
        Blogs
      </NavLink>
    </nav>
  );
};

export default Navbar;
/*
const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
      <Link to="/blogs" className="nav-link">
        Blogs
      </Link>
    </nav>
  );
};

export default Navbar;
*/
