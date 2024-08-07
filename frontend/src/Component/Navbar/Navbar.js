import React, { useState } from "react";
import "../../style/Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
import NavbarLeft from "./NavbarLeft";
import NavbarCenter from "./NavbarCenter";
import Progress from "./Progress";
function Navbar(props) {
  const [showSideNav, setShowSideNav] = useState(false);
  
  return (
    <header>
      <div className="navbar">
        <Progress />
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
