import React, { useState } from "react"; // Import React and useState
import { IoReorderThree } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { BsSearch, BsBookmark } from "react-icons/bs";
import logo from "../image/logo.png";
import "../style/Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [showSideNav, setShowSideNav] = useState(false); // Initialize showSideNav state
  const handleInputChange = (e) => {
    props.setSearchQuery(e.target.value);
  };

  function handleClick(e) {
    e.preventDefault();
    console.log("hello world");
    setShowSideNav(!showSideNav); // Toggle the state when the button is clicked
  }
  function handleSearch(e) {
    e.preventDefault();
    console.log("hello world");
  }

  function handleSidebarClick(prop) {
    localStorage.setItem("filter", prop);

    if (prop === "tools") {
      localStorage.setItem("filter-2", "web");
    }
    window.dispatchEvent(new Event("storage"));
    //console.log(localStorage.getItem("filter"));
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
          <a href="/">
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
              onChange={handleInputChange}
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
          <div
            className="sidebar-content filter"
            onClick={() => handleSidebarClick("all")}
          >
            All
          </div>
          <div
            className="sidebar-content filter"
            onClick={() => handleSidebarClick("remote")}
          >
            Remote Jobs
          </div>
          <div
            className="sidebar-content filter"
            onClick={() => handleSidebarClick("ai")}
          >
            AI
          </div>
          <div
            className="sidebar-content filter"
            onClick={() => handleSidebarClick("ethical")}
          >
            Ethical Hacking
          </div>
          <div
            className="sidebar-content filter"
            onClick={() => handleSidebarClick("movies")}
          >
            Movie | Series
          </div>
          <div
            className="sidebar-content filter"
            onClick={() => handleSidebarClick("extension")}
          >
            Extension
          </div>
          <div
            className="sidebar-content filter"
            onClick={() => handleSidebarClick("ui")}
          >
            UI Design
          </div>
          <div
            className="sidebar-content filter"
            onClick={() => handleSidebarClick("tools")}
          >
            Frontend Tools
          </div>
          <div
            className="sidebar-content filter"
            onClick={() => handleSidebarClick("coding")}
          >
            Coding Platforms
          </div>
          <div
            className="sidebar-content filter"
            onClick={() => handleSidebarClick("course")}
          >
            Course Platforms
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
