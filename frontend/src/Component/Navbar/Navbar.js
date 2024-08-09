import React, { useState } from "react";
import "../../style/Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
import NavbarLeft from "./NavbarLeft";
import NavbarCenter from "./NavbarCenter";
function Navbar(props) {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <header>
      <div className="navbar">
        <NavbarLeft showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
        <div style={{ marginLeft: "auto" }}>
          <NavbarCenter showSideNav={showSideNav} />
        </div>

        {/* Pass setSearchQuery directly 
        <NavbarRight setSearchQuery={props.setSearchQuery} />
        */}
      </div>
      <Sidebar showSideNav={showSideNav} />
    </header>
  );
}

export default Navbar;
