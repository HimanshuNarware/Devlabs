import React from "react";
import logo from "../image/logo1.png";
import "../style/Footer.css";

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';


function Footer() {
  const divStyle = {
    color: "white",
    backgroundColor: "black",
    padding: "20px",
    fontFamily: "Arial",
    textAlign: "center",
    animation: "colorChange 2s infinite",
  };
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
                created by the incredible open-source community. On DevLaps, you
                can discover a collection of free tools that can assist you in
                various aspects of your life.{" "}
              </p>
              <h3>
                Facing an issue or just enjoying the site?{" "}
              </h3>
              {/* <style>
                {`
          @keyframes colorChange {
            0% { color: white; }
            50% { color: red; }
            100% { color: blue; }
          }
        `}
              </style> */}
              <button>
                <Link to="/review">Tell us Now</Link>
              </button>
            </div>
            <div className="col-md-6 col-lg-2 col-12 ft-2 ft-space">
              <h3>Company</h3>
              <ul>
                <li class="nav-item">
                  <a href="https://www.devlabsstore.tech/">Home</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.devlabsstore.tech/about">About Us</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.devlabsstore.tech/bookmark">Bookmark</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.linkedin.com/in/himanshunarware/">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a href="https://www.devlabsstore.tech/open-source">
                    Open Source
                  </a>
                </li>
                <li class="nav-item">
                  <a href="https://github.com/HimanshuNarware/Devlabs">
                    Contribute Here
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 col-12 ft-2 ft-space">
              <h3>Quick Links</h3>
              <ul>
                <li className="nav-item">
                  <a href="/remote-jobs">Remote Jobs</a>
                </li>
                <li className="nav-item">
                  <a href="/ai">AI</a>
                </li>
                <li className="nav-item">
                  <a href="/movies-series">Movie/Series</a>
                </li>
                <li className="nav-item">
                  <a href="/extension">Extension</a>
                </li>
                <li className="nav-item">
                  <a href="/ui-designs">UI Design</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 col-12 ft-2 ft-last">
              <h3>Explore</h3>
              <ul>
                <li className="nav-item">
                  <a href="/front-end-tools">Frontend Tools</a>
                </li>
                <li className="nav-item">
                  <a href="/ethical-hacking">Ethical Hacking</a>
                </li>
                <li className="nav-item">
                  <a href="/coding-platform">Coding Platforms</a>
                </li>
                <li className="nav-item">
                  <a href="/courses-platform">Course Platforms</a>
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
              <div className="text-center fs-6 my-3 ">
                COPYRIGHT © Devlaps 2024 | <br /> MAINTAINED BY HIMANSHU NARWARE
              </div>

              <div className="text-center mb-2">
                <a href="https://github.com/sponsors/HimanshuNarware" target="_blank">
                  <img
                    src="https://badgen.net/badge/icon/github?icon=github&label=Sponsor&color=orange"
                    alt="Sponsor Me on GitHub"
                    style={{ height: '30px', width: 'auto' }}
                  />
                </a>
              </div>
              <div className='outerD  gap-4 md:gap-2'>
        <span className='icons'>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                > <AiOutlineInstagram
                color="white"
                fontSize={25}
                className="ico "
              /></a></span>
                <span  className='icons'><a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter color="white" fontSize={25} className="ico" />

                </a></span>
                <span  className='icons'><a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsYoutube  className="ico" />
                </a></span>
                <span  className='icons'> <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="ico " />
                </a></span>
                <span  className='icons'><a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="ico " />
                </a></span> 
        </div>
             
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
