import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./navbar.css";
const navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/About" className="nav-link">
        About
      </NavLink>
      <NavLink to="/Blog" className="nav-link">
        Blog
      </NavLink>
      <NavLink to="/Contact" className="nav-link">
        Contact
      </NavLink>
      <NavLink to="/user" className="nav-link">
        User
      </NavLink>
    </nav>
  );
};

export default navbar;
