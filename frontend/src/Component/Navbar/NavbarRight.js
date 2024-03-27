import React, { useState } from "react";
import "../../style/Navbar.css";
import { BsSearch } from "react-icons/bs";
import { DarkModeToggle } from "../Toggle";

function NavbarRight(props) {
  const [searchQuery, setSearchQuery] = useState(""); // Local state to manage search query

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query when input changes
  };

  const handleSearch = (e) => {
    e.preventDefault();
    props.setSearchQuery(searchQuery); // Pass the search query to the parent component (App)

    // Remove searchQuery after 1s
    setTimeout(() => {
      setSearchQuery("");
    }, 1000);
  };

  return (
    <div className="navbar-right" id="navbarTogglerDemo03">
      <div className="search">
        <form role="search" className="search-bar" onSubmit={handleSearch}>
          <div className="box">
            <input
              type="text"
              className="input"
              placeholder="Search . . ."
              value={searchQuery} // Set input value to the search query
              onChange={handleInputChange}
              required
            />
            <button className="span" type="submit">
              <BsSearch />
            </button>
          </div>
        </form>
      </div>
      <DarkModeToggle />
    </div>
  );
}

export default NavbarRight;
