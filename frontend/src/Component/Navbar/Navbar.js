import React, { useState } from "react";
import "../../style/Navbar.css";
// import "../../index.css";
import Sidebar from "../Sidebar/Sidebar";
import NavbarLeft from "./NavbarLeft";
import NavbarCenter from "./NavbarCenter";
import NavbarRight from "./NavbarRight";

function Navbar(props) {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <header>
      <div className="navbar dark:bg-[#8B5CF6] dark:text-[#0F0F0F]">
        <NavbarLeft showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
        <NavbarCenter />
        <NavbarRight setSearchQuery={props.setSearchQuery} />{" "}
        {/* Pass setSearchQuery directly */}
      </div>

      <Sidebar showSideNav={showSideNav} />
    </header>
  );
}

export default Navbar;
