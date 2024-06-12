import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { Link } from "react-router-dom";
import SidebarContent from "./SidebarContent";

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
    <div className={`sidebar ${showSideNav ? "active" : ""}`}>
      <div
        className={`sidebar-content sidebar-btns ${
          showSideNav ? "active" : ""
        }`}
      >
        <div className="sidebar-btn home-btn">
          <Link
            to="/"
            className="Link  Bookmark nav-link active"
            aria-current="page"
          >
            <AiFillHome /> Home
          </Link>
        </div>
        <div className="sidebar-btn bookmark-btn">
          <Link
            to="/bookmark"
            className="Link  Bookmark nav-link active"
            aria-current="page"
          >
            <BsBookmark /> BookMark
          </Link>
        </div>
        <div className="sidebar-btn home-btn">
          <Link
            to="/about"
            className="Link  Bookmark nav-link active"
            aria-current="page"
          >
            About Us
          </Link>
        </div>
        <div className="sidebar-btn bookmark-btn">
          <Link
            to="/open-source"
            className="Link  Bookmark nav-link active"
            aria-current="page"
          >
            Open Source
          </Link>
        </div>
      </div>
      {sidebarContent.map((item, index) => (
        <Link
          to={item.url}
          id={index}
          className="Link  Bookmark nav-link active"
          aria-current="page"
        >
          <SidebarContent
            key={index}
            name={item.name}
            description={item.description}
            active={showSideNav}
          />
        </Link>
      ))}
      <div style={{ marginTop: "20px" }} />
      
      <div style={{ marginTop: "20px" }} />
    </div>
  );
}

export default Sidebar;
