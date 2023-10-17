import React from "react";
import { Link } from "react-router-dom";

function NavbarItem({description,to}) {
  return (
    <a className="nav-link active" aria-current="page">
      <Link to={to} className="Link">
        {description}
      </Link>
    </a>
  );
}

export default NavbarItem;
