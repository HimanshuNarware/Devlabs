import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../../style/Navbar.css";
import NavbarItem from "./NavbarItem";
import RateUsComponent from "../../Component/Rate.jsx"; // Import the RateUsComponent
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../style/BookMark.css"
import {
  faHome,
  faBookmark,
  faCode,
  faInfoCircle,
  faQuestionCircle,
  faStar,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Modal, Backdrop, Box } from "@mui/material";

function NavbarCenter( ) {
  const totalBookmarks =
    useSelector((state) => state.SourceReducer.totalBookmarks) || 0;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRateUsClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="navbar-center">
      <ul className="navbar-content mb-2">
        <li className="nav-item">
          <NavbarItem
            description={
              <>
                <FontAwesomeIcon icon={faHome} /> Home
              </>
            }
            to="/"
        />
        </li>
        <li className="nav-item">
          <NavbarItem
            description={
              <div className="bookmarkTag">
                <FontAwesomeIcon icon={faBookmark} /> Bookmark <span className="totBook">{totalBookmarks}</span>
              </div>
            }  
            to="/bookmark"
          />
        </li>
        <li className="nav-item">
          <NavbarItem
            description={
              <>
                <FontAwesomeIcon icon={faCode} /> Open Source
              </>
            }
            to="/open-source"
          />
        </li>
        <li className="nav-item">
          <NavbarItem
            description={
              <>
                <FontAwesomeIcon icon={faInfoCircle} /> About Us
              </>
            }
            to="/about"
          />
        </li>
        <li className="nav-item">
          <NavbarItem
            description={
              <>
                <FontAwesomeIcon icon={faQuestionCircle} /> FAQ's
              </>
            }
            to="/faq"
          />
        </li>
        <li className="nav-item" onClick={handleRateUsClick}>
          <NavbarItem
            description={
              <>
                <FontAwesomeIcon icon={faStar} /> Rate Us
              </>
            }
            to="/Rate"
          />
        </li>
        <li className="nav-item">
          <NavbarItem
            description={
              <>
                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </>
            }
            to="/contact"
          />
        </li>
        <li className="nav-item">
          <NavbarItem
            description={
              <>
                <FontAwesomeIcon icon={faUser} /> My Profile
              </>
            }
            to="/profile"
          />
        </li>
      </ul>
      <Backdrop
        open={isModalOpen}
        onClick={handleCloseModal}
      >
        <Box className="modal-content">
          <RateUsComponent onClose={handleCloseModal} />
        </Box>
      </Backdrop>
    </nav>
  );
}

export default NavbarCenter;

