import React from "react";
import { Link } from "react-router-dom";
function NavbarItem({ description, to }) {
  return (
    <Link to={to} className="Link nav-link active" aria-current="page">
      {description}
    </Link>
  );
}
//done

export default NavbarItem;
