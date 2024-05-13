import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import "../../style/Navbar.css";

function NavbarRight(props) {
  const [searchQuery, setSearchQuery] = useState(""); // Local state to manage search query

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query when input changes
  };

  const handleSearch = (e) => {
    e.preventDefault();
    props.setSearchQuery(searchQuery); // Pass the search query to the parent component (App)
  };

  const clearSearchHandler = (e) => {
    e.preventDefault();
    setSearchQuery("");
    props.setSearchQuery(""); // Pass the empty search query to the parent component (App)
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
            />

            <button className="span" type="button" onClick={clearSearchHandler}>
              <RxCross2 />
            </button>
            <button className="span" type="submit">
              <BsSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NavbarRight;
