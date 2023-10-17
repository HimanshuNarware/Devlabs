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
        {props.showSideNav ? <IoClose /> : <IoReorderThree />}
      </a>
      <a href="/">
        <img className="navbar-brand logo-img" src={logo} alt="this" />
      </a>
    </span>
  );
}

export default NavbarLeft;
