import React from "react";
import { Link } from "react-router-dom";
import "../../style/Navbar.css";

function NavbarCenter(){
  return (
    <span className="navbar-center">
      <ul className="mb-2 navbar-content">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">
            <Link to="/" className="Link  Bookmark">
              Home
            </Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">
            <Link to="/bookmark" className="Link  Bookmark">
              BookMark
            </Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">
            <Link to="/about" className="Link About">
              About us
            </Link>
          </a>
        </li>
      </ul>
    </span>
  );
};

export default NavbarCenter;
