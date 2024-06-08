// NavbarCenter.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../../style/Navbar.css";
import NavbarItem from "./NavbarItem";
import Modal from "../../Component/Modal";
import RateUsComponent from "../../Component/Rateus"; // Import the RateUsComponent

function NavbarCenter() {
  const totalBookmarks = useSelector((state) => state.SourceReducer.totalBookmarks) || 0;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRateUsClick = () => {
    setIsModalOpen(true);
  };

  return (
    <nav className="navbar-center">
      <ul className="navbar-content mb-2">
        <li className="nav-item">
          <NavbarItem description="Home" to="/" />
        </li>
        <li className="nav-item">
          <NavbarItem description={`Bookmark (${totalBookmarks})`} to="/bookmark" />
        </li>
        <li className="nav-item">
          <NavbarItem description="Open Source" to="/open-source" />
        </li>
        <li className="nav-item">
          <NavbarItem description="About Us" to="/about" />
        </li>
        <li className="nav-item">
          <NavbarItem description="FAQ's" to="/faq" />
        </li>
        <li className="nav-item" onClick={handleRateUsClick}>
          <NavbarItem description="Rate Us" to="#" />
        </li>
        <li className="nav-item">
          <NavbarItem description="Contact" to="https://www.linkedin.com/in/himanshunarware/" />
        </li>
      </ul>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RateUsComponent />
      </Modal>
    </nav>
  );
}

export default NavbarCenter;
