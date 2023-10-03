import React, { useState } from "react"; // Import React and useState
import { IoReorderThree } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { BsSearch, BsBookmark } from "react-icons/bs";
import logo from "../image/logo.png";
import "../style/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [showSideNav, setShowSideNav] = useState(false); // Initialize showSideNav state

  function handleClick(e) {
    e.preventDefault();
    console.log("hello world");
    setShowSideNav(!showSideNav); // Toggle the state when the button is clicked
  }

  return (
    <header>
      <div className="navbar">
        <span className="navbar-left">
          <a
            onClick={handleClick}
            className="navbar-brand sdbar-logo"
            href="/"
            id="logo"
          >
            <IoReorderThree />
          </a>
          <a href="#">
            <img className="navbar-brand logo-img" src={logo} alt="this" />
          </a>
        </span>
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
        <div className="navbar-right" id="navbarTogglerDemo03">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 search-box"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <button
              className="btn btn-search btn-outline-success"
              type="button"
              onClick={(e) => handleClick(e)}
            >
              <BsSearch />
            </button>
          </form>
        </div>
      </div>

      {/* Conditionally render the side navigation based on the showSideNav state */}
      {showSideNav && (
        <div className="sidebar">
          <div className="sidebar-content sidebar-btns ">
            <div className="sidebar-btn home-btn">
              <a className="nav-link active" aria-current="page">
                <Link to="/home" className="Link  Bookmark">
                  <AiFillHome /> Home
                </Link>
              </a>
            </div>
            <div className="sidebar-btn bookmark-btn">
              <a className="nav-link active" aria-current="page">
                <Link to="/bookmark" className="Link  Bookmark">
                  <BsBookmark /> BookMark
                </Link>
              </a>
            </div>
          </div>
          <div className="sidebar-content ">All</div>
          <div className="sidebar-content ">Remote Jobs</div>
          <div className="sidebar-content ">AI</div>
          <div className="sidebar-content ">Ethical Hacking</div>
          <div className="sidebar-content">Movie | Series</div>
          <div className="sidebar-content ">Extension</div>
          <div className="sidebar-content ">UI Design</div>
          <div className="sidebar-content ">Frontend Tools</div>
          <div className="sidebar-content ">Coding Platforms</div>
          <div className="sidebar-content ">Course Platforms</div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
