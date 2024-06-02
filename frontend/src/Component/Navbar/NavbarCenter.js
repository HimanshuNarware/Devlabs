import React from "react";
import { useSelector } from "react-redux";
import "../../style/Navbar.css";
import NavbarItem from "./NavbarItem";

function NavbarCenter() {
  const totalBookmarks = useSelector((state) => state.SourceReducer.totalBookmarks) || 0;

  return (
    <nav className="navbar-center">
      <ul className="navbar-content mb-2">
        <li className="nav-item">
          <NavbarItem description="Home" to="/" />
        </li>
        <li className="nav-item">
          <NavbarItem description={`Bookmark (${totalBookmarks})`} to="/bookmark" />
        </li>
        <li className="nav-item">
          <NavbarItem description="Open Source" to="/open-source" />
        </li>
        <li className="nav-item">
          <NavbarItem description="About Us" to="/about" />
        </li>
        <li className="nav-item">

          <NavbarItem description="FAQ's" to="/faq" />

          <NavbarItem description="Contact" to="https://www.linkedin.com/in/himanshunarware/" />
        </li>
      </ul>
    </nav>
  );
}

export default NavbarCenter;
