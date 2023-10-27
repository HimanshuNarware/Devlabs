import React from "react";
import { Link } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import SidebarContent from "./SidebarContent";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content sidebar-btns ">
        <div className="sidebar-btn home-btn">
            <Link to="/" className="Link  Bookmark nav-link active" aria-current="page">
              <AiFillHome /> Home
            </Link>
        </div>
        <div className="sidebar-btn bookmark-btn">
            <Link to="/bookmark" className="Link  Bookmark nav-link active" aria-current="page">
              <BsBookmark /> BookMark
            </Link>
        </div>
        <div className="sidebar-btn home-btn">
            <Link to="/about" className="Link  Bookmark nav-link active" aria-current="page">
              About Us
            </Link>
        </div>
        <div className="sidebar-btn bookmark-btn">
            <Link to="/open-source" className="Link  Bookmark nav-link active" aria-current="page">
              Open Source
            </Link>
        </div>
      </div>
      <SidebarContent name="all" description="All" />
      <SidebarContent name="remote" description="Remote Jobs" />
      <SidebarContent name="ai" description="AI" />
      <SidebarContent name="ethical" description="Ethical Hacking" />
      <SidebarContent name="movies" description="Movie | Series" />
      <SidebarContent name="extension" description="Extension" />
      <SidebarContent name="ui" description="UI Design" />
      <SidebarContent name="tools" description="Frontend Tools" />
      <SidebarContent name="coding" description="Coding Platforms" />
      <SidebarContent name="course" description="Course Platforms" />
    </div>
  );
}

export default Sidebar;
