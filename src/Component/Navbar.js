
import {IoReorderThree} from 'react-icons/io5'
import {BsSearch} from 'react-icons/bs'


import logo from '../image/logo.png'
import '../style/Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {

function handleClick(e){
alert("Something is wrong?")
}

 
 

 

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand sdbar-logo" href="#"  id='logo'><IoReorderThree/></a>
   <a href='#'>
    <img class="navbar-brand logo-img" src={logo} alt='this'/></a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-content">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" >
            <Link to="/" className='Link  Bookmark'>

       Home
            </Link>
             </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" >
            <Link to="/bookmark" className='Link  Bookmark'>

          BookMark
            </Link>
             </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" >
          <Link to="/about" className='Link About'>

          About us
  </Link>
            </a>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2 search-box" type="search" placeholder="Search..." aria-label="Search" />
        <button class="btn btn-search btn-outline-success" type="submit" onClick={handleClick}><BsSearch/></button>
      </form>
    </div>
  </div>
</nav>
<section>
  <div className="sidebar" id='sidebar'>
<div className="sidebar-content b-1">home-icon-bookmark</div>
<div className="sidebar-content b-2">All</div>
<div className="sidebar-content b-3">Remote Jobs</div>
<div className="sidebar-content b-4">AL</div>
<div className="sidebar-content b-5">AL</div>
<div className="sidebar-content b-6">AL</div>
<div className="sidebar-content b-7">AL</div>
<div className="sidebar-content b-8">AL</div>
<div className="sidebar-content b-9">AL</div>
<div className="sidebar-content b-10">UI</div>
<div className="sidebar-content b-11">UI</div>
<div className="sidebar-content b-12">UI</div>
  </div>
</section>

    </div>
  )
}

export default Navbar;