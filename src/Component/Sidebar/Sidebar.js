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
          <a className="nav-link active" aria-current="page">
            <Link to="/" className="Link  Bookmark">
              <AiFillHome /> Home
            </Link>
          </a>
        </div>
        <div className="sidebar-btn bookmark-btn">
          <a className="nav-link active" aria-current="page">
            <Link to="/bookmark" className="Link  Bookmark">
              <BsBookmark /> BookMark
            </Link>
          </a>
        </div>
      </div>
      <SidebarContent name="all" description="All"/>
      <SidebarContent name="remote" description="Remote Jobs"/>
      <SidebarContent name="ai" description="AI"/>
      <SidebarContent name="ethical" description="Ethical Hacking"/>
      <SidebarContent name="movies" description="Movie | Series"/>
      <SidebarContent name="extension" description="Extension"/>
      <SidebarContent name="ui" description="UI Design"/>
      <SidebarContent name="tools" description="Frontend Tools"/>
      <SidebarContent name="coding" description="Coding Platforms"/>
      <SidebarContent name="course" description="Course Platforms"/>
    </div>
  );
};

export default Sidebar;
