import React from "react";
import { IoReorderThree, IoClose } from "react-icons/io5";
import "../../style/Navbar.css"
import logo from "../../image/logo.png";

function NavbarLeft(props) {
  function handleClick(e) {
    e.preventDefault();
    props.setShowSideNav(!props.showSideNav);
  }

  return (
    <span className="navbar-left">
      <a
        onClick={handleClick}
        className="navbar-brand sdbar-logo"
        href="/"
        id="logo"
      >
        <div className={props.showSideNav?"open":""} id="nav-icon1">
  <span></span>
  <span></span>
  <span></span>
</div>
      </a>
      <a href="/">
        <img className="navbar-brand logo-img" src={logo} alt="this" />
      </a>
    </span>
  );
}

export default NavbarLeft;
