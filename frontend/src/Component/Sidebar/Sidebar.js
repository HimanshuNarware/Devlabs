import React from "react";
import { Link } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import SidebarContent from "./SidebarContent";
import {
  faHome,
  faBookmark,
  faCode,
  faInfoCircle,
  faTasks,
  faQuestionCircle,
  faStar,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaRobot, FaUserSecret, FaFilm, FaCogs, FaLaptopCode, FaTools, FaBook, FaUsers, FaTasks } from "react-icons/fa"; // Import relevant icons from react-icons
import "../../style/Sidebar.css";

function Sidebar({ showSideNav }) {
  const sidebarContent = [
    {
      name: "all",
      description: "All",
      url: "/",
      icon: AiFillHome,
    },
    {
      name: "remote",
      description: "Remote Jobs",
      url: "/remote-jobs",
      icon: BsBookmark,
    },
    {
      name: "ai",
      description: "AI",
      url: "/ai",
      icon: FaRobot,
    },
    {
      name: "ethical",
      description: "Ethical Hacking",
      url: "/ethical-hacking",
      icon: FaUserSecret,
    },
    {
      name: "movies",
      description: "Movie | Series",
      url: "/movies-series",
      icon: FaFilm,
    },
    {
      name: "extension",
      description: "Extension",
      url: "/extension",
      icon: FaCogs,
    },
    {
      name: "ui",
      description: "UI Design",
      url: "/ui-design",
      icon: FaLaptopCode,
    },
    {
      name: "tools",
      description: "Frontend Tools",
      url: "/front-end-tools",
      icon: FaTools,
    },
    {
      name: "tools",
      description: "Backend Tools",
      url: "/back-end-tools",
      icon: FaTools,
    },
    {
      name: "coding",
      description: "Coding Platforms",
      url: "/coding-platform",
      icon: FaBook,
    },
    
    {
      name: "productivity",
      description: "Productivity Tools",
      url: "/productivity-tools",
      icon: FaTasks,
    },
    {
      name: "collaboration",
      description: "Collaboration Tools",
      url: "/collaboration-tools",
      icon: FaUsers,
    },
  ];

  return (
    <div style={{ marginTop: "10px" }} className={`sidebar ${showSideNav ? "active" : ""}`}>
      <div className={`sidebar-content sidebar-btns ${showSideNav ? "active" : ""}`}>
        {/* Static sidebar buttons */}
        <div className="sidebar-btn home-btn" key="home">
          <Link to="/" className="Link Bookmark nav-link active" aria-current="page">
            <AiFillHome /> Home
          </Link>
        </div>
        <div className="sidebar-btn bookmark-btn" key="bookmark">
          <Link to="/bookmark" className="Link Bookmark nav-link active" aria-current="page">
            <BsBookmark /> BookMark
          </Link>
        </div>
        <div className="sidebar-btn home-btn" key="about">
          <Link to="/about" className="Link Bookmark nav-link active" aria-current="page">
            <FontAwesomeIcon icon={faInfoCircle} /> About Us
          </Link>
        </div>
        <div className="sidebar-btn bookmark-btn" key="contact">
          <Link to="/contact" className="Link Bookmark nav-link active" aria-current="page">
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </Link>
        </div>
        <div className="sidebar-btn bookmark-btn" key="open-source">
          <Link to="/open-source" className="Link Bookmark nav-link active" aria-current="page">
            <FontAwesomeIcon icon={faCode} /> Open Source
          </Link>
        </div>
        <div className="sidebar-btn bookmark-btn" key="faq">
          <Link to="/faq" className="Link Bookmark nav-link active" aria-current="page">
            <FontAwesomeIcon icon={faQuestionCircle} /> FAQ's
          </Link>
        </div>
        <div className="sidebar-btn bookmark-btn" key="rate-us">
          <Link to="/#" className="Link Bookmark nav-link active" aria-current="page">
            <FontAwesomeIcon icon={faStar} /> Rate US
          </Link>
        </div>
        <div className="sidebar-btn profile-btn" key="profile">
          <Link to="/profile" className="Link  Bookmark nav-link active" aria-current="page">
            <FontAwesomeIcon icon={faUser} />
            My Profile
          </Link>
        </div>
      </div>

      {/* Dynamic sidebar content */}
      {sidebarContent.map((item) => (
        <div className="sidebar-btn" key={item.name}>
          <Link to={item.url} className="Link Bookmark nav-link active" aria-current="page">
            {item.icon ? <item.icon /> : <FontAwesomeIcon icon={faTasks} />} {item.description}
          </Link>
        </div>
      ))}

      <div style={{ marginTop: "20px" }} />
    </div>
  );
}

export default Sidebar;
