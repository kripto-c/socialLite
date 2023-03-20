import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav>
      <h1 className="socialLogo">
        Socia<span>Lite</span>
      </h1>
      <ul>
        <li>
          <NavLink
            className={(isActive) => (isActive ? "abc" : "AAAAAAAAAAAA")}
            draggable="false"
            to="/"
          >
            Iniciar Sesion
            <span></span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(isActive) => (isActive ? "abc" : "AAAAAAAAAAAA")}
            draggable="false"
            to="/registrarse"
          >
            Registrarse
            <span></span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(isActive) => (isActive ? "abc" : "AAAAAAAAAAAA")}
            draggable="false"
            to="/contact"
          >
            Contact
            <span></span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
