import React, { useState } from "react";
import "../../style/Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
import NavbarLeft from "./NavbarLeft";
import NavbarCenter from "./NavbarCenter";

function Navbar(props) {
  const [showSideNav, setShowSideNav] = useState(false);
  
  return (
    <header>
      <div className="navbar w-100">
        <NavbarLeft showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
        <NavbarCenter showSideNav={showSideNav} />
        
        {/* Pass setSearchQuery directly 
        <NavbarRight setSearchQuery={props.setSearchQuery} />
        */}
      </div>
      <Sidebar showSideNav={showSideNav} />
    </header>
  );
}

export default Navbar;
