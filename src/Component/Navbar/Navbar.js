import React, { useState } from "react";
import "../../style/Navbar.css"
import Sidebar from "../Sidebar/Sidebar";
import NavbarLeft from "./NavbarLeft";
import NavbarCenter from "./NavbarCenter";
import NavbarRight from "./NavbarRight";

function Navbar(props) {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <header>
      <div className="navbar">
        <NavbarLeft showSideNav={showSideNav} setShowSideNav={setShowSideNav}/>
        <NavbarCenter />
        <NavbarRight setSearchQuery={props.setSearchQuery} />
      </div>

      {showSideNav && (
        <Sidebar />
      )}
    </header>
  );
}

export default Navbar;
