import React, { useEffect } from "react";
import { IoReorderThree, IoClose } from "react-icons/io5";
import "../../style/Navbar.css"
import logo from "../../image/logo.png";

function NavbarLeft(props) {
  useEffect(() => {
    // Added event listener to handle clicks outside the navbar
    const handleDocumentClick = (e) => {
      if (!e.target.closest('.navbar-left')) {
        props.setShowSideNav(false);
      }
    };

    document.body.addEventListener('click', handleDocumentClick);

    return () => {
      // Removed event listener on component unmount
      document.body.removeEventListener('click', handleDocumentClick);
    };
  }, [props]);

  function handleClick(e) {
    e.preventDefault();
    props.setShowSideNav(!props.showSideNav);
  }

  function handleItemClick() {
    props.setShowSideNav(false);
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
      <a href="/" onClick={handleItemClick}> {/* Added onClick handler */}
        <img className="navbar-brand logo-img" src={logo} alt="this" />
      </a>
    </span>
  );
}

export default NavbarLeft;
