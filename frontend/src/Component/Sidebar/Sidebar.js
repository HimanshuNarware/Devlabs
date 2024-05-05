import React from "react";
import { Link } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import SidebarContent from "./SidebarContent";

function Sidebar({ showSideNav }) {
  const sidebarContent = [
    {
      name: "all",
      description: "All",
    },
    {
      name: "remote",
      description: "Remote Jobs",
    },
    {
      name: "ai",
      description: "AI",
    },
    {
      name: "ethical",
      description: "Ethical Hacking",
    },
    {
      name: "movies",
      description: "Movie | Series",
    },
    {
      name: "extension",
      description: "Extension",
    },
    {
      name: "ui",
      description: "UI Design",
    },
    {
      name: "tools",
      description: "Frontend Tools",
    },
    {
      name: "coding",
      description: "Coding Platforms",
    },
    {
      name: "course",
      description: "Course Platforms",
    },
  ];
  return (
    <div className={`sidebar ${showSideNav ? "active" : ""}`}>
      <div className={`sidebar-content sidebar-btns ${showSideNav ? "active" : ""}`} >
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
        <SidebarContent
          key={index}
          name={item.name}
          description={item.description}
          active={showSideNav}
        />
      ))} 
      <div style={{ marginTop: '20px' }} /> 
    </div>
  );
}

export default Sidebar;
