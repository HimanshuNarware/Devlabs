import React from "react";
import logo from "../image/logo1.png";
import "../style/Footer.css";
import {
  FaGithubSquare,
  FaLinkedinIn,
  FaFacebookF,
  FaHome,
  FaBookmark,
  FaQuestionCircle,
  FaRegHeart,
  FaBriefcase,
  FaRobot,
  FaFilm,
  FaTools,
  FaLaptopCode,
  FaUser,
  FaLock,
} from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMail,
  AiFillStar,
} from "react-icons/ai";
import { BsYoutube, BsFillPersonLinesFill, BsCodeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
function Footer() {
  return (
    
    <footer>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 col-12 ft-1">
              <a href="https://www.devlabsstore.tech/">
                <img width={209} src={logo} alt="devlabs" />
              </a>
              <p className="footer-content">
                Welcome to DevLabs, a website where you can search for free
                tools that are useful for your daily needs. This application is
                created by the incredible open-source community. On DevLabs, you
                can discover a collection of free tools that can assist you in
                various aspects of your life.
              </p>
              <h3>Facing an issue or just enjoying the site?</h3>
              <button>
                <Link to="/review">Tell us Now</Link>
              </button>
            </div>
            <div className="col-md-6 col-lg-2 col-12 ft-2 ft-space">
              <h3>Company</h3>
              <ul>
                <li className="nav-item">
                  <a href="https://www.devlabsstore.tech/">
                    <FaHome className="mr-2" /> Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://www.devlabsstore.tech/about">
                    <FaQuestionCircle className="mr-2" /> About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://www.devlabsstore.tech/bookmark">
                    <FaBookmark className="mr-2" /> Bookmark
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://www.linkedin.com/in/himanshunarware/">
                    <BsFillPersonLinesFill className="mr-2" /> Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://www.devlabsstore.tech/rateus">
                    <AiFillStar className="mr-2" /> Rate Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://www.devlabsstore.tech/profile">
                    <FaUser className="mr-2" /> My Profile
                  </a>
                  
                </li>
                <li className="nav-item">
                  <a href="https://www.devlabsstore.tech/open-source">
                    <FaRegHeart className="mr-2" /> Open Source
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://github.com/HimanshuNarware/Devlabs">
                    <FaGithubSquare className="mr-2" /> Contribute Here
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 col-12 ft-2 ft-space">
              <h3>Quick Links</h3>
              <ul>
                <li className="nav-item">
                  <a href="/remote-job">
                    <FaBriefcase className="mr-2" /> Remote Jobs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/ai">
                    <FaRobot className="mr-2" /> AI
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/movies&series">
                    <FaFilm className="mr-2" /> Movie/Series
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/extensions">
                    <FaTools className="mr-2" /> Extension
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/ui-designs">
                    <FaLaptopCode className="mr-2" /> UI Design
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 col-12 ft-2 ft-last">
              <h3>Explore</h3>
              <ul>
                <li className="nav-item">
                  <a href="/front-end-tools">
                    <FaTools className="mr-2" /> Frontend Tools
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/ethical-hacking">
                    <FaLock className="mr-2" /> Ethical Hacking
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/coding-platform">
                    <BsCodeSlash className="mr-2" /> Coding Platforms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="Last-footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-12 ft-1">
              <div className="text-center fs-6 my-3">
                COPYRIGHT © Devlabs 2024 | <br /> MAINTAINED BY HIMANSHU NARWARE
              </div>
              <div className="text-center mb-2">
                <a
                  href="https://github.com/sponsors/HimanshuNarware"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://badgen.net/badge/icon/github?icon=github&label=Sponsor&color=orange"
                    alt="Sponsor Me on GitHub"
                    style={{ height: "30px", width: "auto" }}
                  />
                </a>
              </div>
              <div className="outerD gap-4 md:gap-2">
                <span className="icons">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <AiOutlineInstagram
                      color="white"
                      fontSize={25}
                      className="ico"
                    />
                  </a>
                </span>
                <span className="icons">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <AiOutlineTwitter
                      color="white"
                      fontSize={25}
                      className="ico"
                    />
                  </a>
                </span>
                <span className="icons">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <BsYoutube color="white" fontSize={25} className="ico" />
                  </a>
                </span>

                <span className="icons">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn color="white" fontSize={25} className="ico" />
                  </a>
                </span>
                <span className="icons">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF color="white" fontSize={25} className="ico" />
                  </a>

                </span>
                <span className="icons">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <FaGithubSquare

                      color="white"
                      fontSize={25}
                      className="ico"
                    />
                  </a>
                </span>
                <span className="icons">
                  <a
                    href="mailto:example@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  
                    <AiOutlineMail
                      color="white"
                      fontSize={25}
                      className="ico"
                    />
                  </a>
                </span>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
