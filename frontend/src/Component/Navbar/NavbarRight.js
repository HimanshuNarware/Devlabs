import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import "../../style/Navbar.css";

function NavbarRight({ setSearchQuery }) {
  const [searchQuery, setLocalSearchQuery] = useState(""); // Local state to manage search query

  //debounce search query
  useEffect(() => {
    let timer = setTimeout(() => {
      setSearchQuery(searchQuery);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, setSearchQuery]);

  const handleInputChange = (e) => {
    setLocalSearchQuery(e.target.value); // Update the search query when input changes
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchQuery); // Pass the search query to the parent component (App)
  };

  const clearSearchHandler = (e) => {
    e.preventDefault();
    setLocalSearchQuery("");
    setSearchQuery(""); // Pass the empty search query to the parent component (App)
  };

  return (
    <div className="navbar-right" id="navbarTogglerDemo03">
      <div className="search">
        <form role="search" className="search-bar" onSubmit={handleSearch}>
          <div className="box" focus>
            <input
              type="text"
              className="input"
              placeholder="Search . . ."
              value={searchQuery} // Set input value to the search query
              onChange={handleInputChange}
            />

            <button
              className={`span ${!searchQuery && "invisible"}`}
              type="button"
              onClick={clearSearchHandler}
            >
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
