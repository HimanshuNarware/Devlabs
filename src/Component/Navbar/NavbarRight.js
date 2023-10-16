import React from "react";
import "../../style/Navbar.css"
import { BsSearch } from "react-icons/bs";

function NavbarRight(props) {
  function handleSearch(e) {
    e.preventDefault();
  }
  const handleInputChange = (e) => {
    props.setSearchQuery(e.target.value);
  };

  return (
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
          onClick={(e) => handleSearch(e)}
        >
          <BsSearch />
        </button>
      </form>
    </div>
  );
}

export default NavbarRight;
