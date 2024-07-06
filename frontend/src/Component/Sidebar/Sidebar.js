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
  faQuestionCircle,
  faStar,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar({ showSideNav }) {
  const sidebarContent = [
    {
      name: "all",
      description: "All",
      url: "/",
    },
    {
      name: "remote",
      description: "Remote Jobs",
      url: "/remote-jobs",
    },
    {
      name: "ai",
      description: "AI",
      url: "/ai",
    },
    {
      name: "ethical",
      description: "Ethical Hacking",
      url: "/ethical-hacking",
    },
    {
      name: "movies",
      description: "Movie | Series",
      url: "/movies-series",
    },
    {
      name: "extension",
      description: "Extension",
      url: "/extension",
    },
    {
      name: "ui",
      description: "UI Design",
      url: "/ui-design",
    },
    {
      name: "tools",
      description: "Frontend Tools",
      url: "/front-end-tools",
    },
    {
      name: "coding",
      description: "Coding Platforms",
      url: "/coding-platform",
    },
    {
      name: "course",
      description: "Course Platforms",
      url: "/cources-platform",
    },
    {
      name: "productivity",
      description: "Productivity Tools",
      url: "/productivity-tools",
    },
    {
      name: "collaboration",
      description: "Collaboration Tools",
      url: "/collaboration-tools",
    },
  ];

  return (
    <div style={{marginTop: "10px"}} className={`sidebar ${showSideNav ? "active" : ""}`}>
      <div
        className={`sidebar-content sidebar-btns ${
          showSideNav ? "active" : ""
        }`}
      >
        <div className="sidebar-btn home-btn" key="home">
          <Link
            to="/"
            className="Link  Bookmark nav-link active"
            aria-current="page"
          >
            <AiFillHome /> Home
          </Link>
        </div>
        <div className="sidebar-btn bookmark-btn" key="bookmark">
          <Link
            to="/bookmark"
            className="Link  Bookmark nav-link active"
            aria-current="page"
          >
            <BsBookmark /> BookMark
          </Link>
        </div>
        <div className="sidebar-btn home-btn" key="about">
          <Link
            to="/about"
            className="Link  Bookmark nav-link active"
            aria-current="page"
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            About Us
          </Link>
        </div>
        <div className="sidebar-btn bookmark-btn" key="open-source">
          <Link
            to="/contact"
            className="Link  Bookmark nav-link active"
            aria-current="page"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            Contact
          </Link>
        </div>
        <div className="sidebar-btn bookmark-btn" key="open-source">
          <Link
            to="/open-source"
            className="Link  Bookmark nav-link active"
            aria-current="page"
          >
            {" "}
            <FontAwesomeIcon icon={faCode} />
            Open Source
          </Link>
        </div>
        <div className="sidebar-btn bookmark-btn" key="open-source">
          <Link
            to="/faq"
            className="Link  Bookmark nav-link active"
            aria-current="page"
          >
            <FontAwesomeIcon icon={faQuestionCircle} />
            FAQ's
          </Link>
        </div>
        <div className="sidebar-btn bookmark-btn" key="open-source">
          <Link
            to="/#"
            className="Link  Bookmark nav-link active"
            aria-current="page"
          >
            <FontAwesomeIcon icon={faStar} />
            Rate US
          </Link>
        </div>
      </div>

      {sidebarContent.map((item) => (
        <Link
          to={item.url}
          className="Link  Bookmark nav-link active"
          aria-current="page"
          key={item.name}
        >
          <SidebarContent
            name={item.name}
            description={item.description}
            active={showSideNav}
          />
        </Link>
      ))}

      <div style={{ marginTop: "20px" }} />
    </div>
  );
}

export default Sidebar;
