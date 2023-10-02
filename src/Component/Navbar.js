import React, { useState } from 'react'; // Import React and useState
import { IoReorderThree } from 'react-icons/io5'
import {AiFillHome} from 'react-icons/ai'
import { BsSearch,BsBookmark } from 'react-icons/bs'
import logo from '../image/logo.png'
import '../style/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  const [showSideNav, setShowSideNav] = useState(false); // Initialize showSideNav state

  function handleClick(e) {
    e.preventDefault();
    console.log('hello world');
    setShowSideNav(!showSideNav); // Toggle the state when the button is clicked
  }
  function handleSearch(e) {
    e.preventDefault();
    console.log('hello world');
  }

  function handleSidebarClick(prop){    
    
    localStorage.setItem("filter",prop);
    
    if(prop === "tools"){
      localStorage.setItem("filter-2","web");
    }
    window.dispatchEvent(new Event('storage'));
    //console.log(localStorage.getItem("filter"));
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" onClick={handleClick} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a onClick={handleClick} className="navbar-brand sdbar-logo" href="#" id='logo'><IoReorderThree /></a>
          <a href='#'>
            <img className="navbar-brand logo-img" src={logo} alt='this' /></a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-content">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" >
                  <Link to="/" className='Link  Bookmark'>
                    Home
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" >
                  <Link to="/bookmark" className='Link  Bookmark'>
                    BookMark
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" >
                  <Link to="/about" className='Link About'>
                    About us
                  </Link>
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2 search-box" type="search" placeholder="Search..." aria-label="Search" />
              <button
                className="btn btn-search btn-outline-success"
                type="button"
                onClick={(e) => handleSearch(e)}
              ><BsSearch/></button>
            </form>
          </div>
        </div>
      </nav>

      {/* Conditionally render the side navigation based on the showSideNav state */}
      {showSideNav && (
        <div className="sidebar">
          <div className="sidebar-content sidebar-btns ">
            
            <div className='sidebar-btn home-btn'>
              
            <a className="nav-link active" aria-current="page" >
                  <Link to="/home" className='Link  Bookmark'>
                   
                  <AiFillHome/> Home

                  </Link>
                </a>
            
            </div>
            <div className='sidebar-btn bookmark-btn'>
              
            <a className="nav-link active" aria-current="page" >
                  <Link to="/bookmark" className='Link  Bookmark'>
                   
              <BsBookmark/> BookMark
                  </Link>
                </a></div>
          </div>
          <div className="sidebar-content " onClick={() => handleSidebarClick("all")}>All</div>
          <div className="sidebar-content " onClick={() => handleSidebarClick("remote")}>Remote Jobs</div>
          <div className="sidebar-content " onClick={() => handleSidebarClick("ai")}>AI</div>
          <div className="sidebar-content " onClick={() => handleSidebarClick("ethical")}>Ethical Hacking</div>
          <div className="sidebar-content " onClick={() => handleSidebarClick("movies")}>Movie | Series</div>
          <div className="sidebar-content " onClick={() => handleSidebarClick("extension")}>Extension</div>
          <div className="sidebar-content " onClick={() => handleSidebarClick("ui")}>UI Design</div>
          <div className="sidebar-content " onClick={() => handleSidebarClick("tools")}>Frontend Tools</div>
          <div className="sidebar-content " onClick={() => handleSidebarClick("coding")}>Coding Platforms</div>
          <div className="sidebar-content " onClick={() => handleSidebarClick("course")}>Course Platforms</div>
        </div>
      )}
    </div>
  )
}

export default Navbar;
