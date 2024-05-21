import React from "react";
import "../../style/Navbar.css";
import NavbarItem from "./NavbarItem";

function NavbarCenter(){
  return (
    <span className="navbar-center" style={{marginRight:'5%'}}>
      <ul className="mb-2 navbar-content">
        <li className="nav-item">
          <NavbarItem description="Home" to="/" />
        </li>
        <li className="nav-item">
          <NavbarItem description="BookMark" to="/bookmark" />
        </li>
        <li className="nav-item">
          <NavbarItem description="Open Source" to="/open-source"/>
        </li>
        <li className="nav-item">
          <NavbarItem description="About Us" to="/about" />
        </li>
      </ul>
    </span>
  );
};

export default NavbarCenter;
