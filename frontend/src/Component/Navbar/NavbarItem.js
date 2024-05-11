import React from "react";
import { useNavigate } from "react-router-dom";

function NavbarItem({ description, to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div className="Link nav-link active" aria-current="page" onClick={handleClick}>
      {description}
    </div>
  );
}

export default NavbarItem;
