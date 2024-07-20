import React from "react";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import "../../style/Navbar.css";

function NavbarRight({ setSearchQuery }) {
  const clearSearchHandler = (e) => {
    e.preventDefault();
    setSearchQuery(""); // Pass the empty search query to the parent component (App)
  };

  return (
    <div className="navbar-right" id="navbarTogglerDemo03">
      {/* Any other content you want to keep in the navbar */}
    </div>
  );
}

export default NavbarRight;
