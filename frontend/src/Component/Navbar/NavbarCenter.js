import React from "react";
import { useSelector } from "react-redux";
import NavbarItem from "./NavbarItem";

function NavbarCenter() {
  const totalBookmarks = useSelector((state) => state.SourceReducer.totalBookmarks);

  return (
    <span className="navbar-center">
      <ul className="mb-2 navbar-content">
        <li className="nav-item">
          <NavbarItem description="Home" to="/" />
        </li>
        <li className="nav-item">
          <NavbarItem description={`BookMark (${totalBookmarks})`} to="/bookmark" />
        </li>
        <li className="nav-item">
          <NavbarItem description="Open Source" to="/open-source" />
        </li>
        <li className="nav-item">
          <NavbarItem description="About Us" to="/about" />
        </li>
      </ul>
    </span>
  );
}

export default NavbarCenter;