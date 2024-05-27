import React from "react";
import "../../style/Navbar.css";

function NavbarItem({ description, to, count = 0 }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={to}>
        {description} {count > 0 && <span className="badge bg-primary">{count}</span>}
      </a>
    </li>
  );
}

export default NavbarItem;