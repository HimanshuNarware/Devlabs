import React from "react";
import logo from "../image/logo.png";
import "../style/Footer.css";
import {FaGithubSquare, FaLinkedin, FaTwitter} from "react-icons/fa";
import {BsLinkedin} from "react-icons/bs";
import {SiGmail} from "react-icons/si";

function Footer() {
  return (
    <footer>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 col-12 ft-1">
              <a href="https://www.devlabsstore.tech/">
                <img width={209} src={logo} alt="devlaps"></img>
              </a>
              <h5>
                Facing an issue or just <br />
                enjoying the site ?{" "}
              </h5>
              <a href="https://www.devlabsstore.tech/review">
                <button>Tell us now</button>
              </a>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Company</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="https://www.devlabsstore.tech/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="https://www.devlabsstore.tech/about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="https://www.devlabsstore.tech/bookmark">
                    Bookmark
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=""
                    href="https://www.linkedin.com/in/himanshunarware/"
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=""
                    href="https://www.devlabsstore.tech/open-source"
                  >
                    Open Source
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Quick Links</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/">
                    Remote Jobs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    AI
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Movie/Series
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Extension
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Ui Design
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 col-12 ft-4">
              <ul>
                <li className="nav-item">
                  <a className="" href="/">
                    Fronted Tools
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Ethical Hacking
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Coding Platforms
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Course Platforms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 ft-1">
              <p>COPYRIGHT © Devlaps 2024 | MAINTAINED BY HIMANSHU NARWARE</p>
            </div>
            <div className="col-md-6 col-12 ft-1">
              <div className="footer-icons " >
                <a
                  href="https://www.linkedin.com/in/himanshunarware/"
                  rel="noreferrer"
                >
                  <BsLinkedin className="text-dark mx-1"/>
                </a>
                <a href="https://twitter.com/N_Himanshu_\" rel="noreferrer">
                  <FaTwitter className="text-dark mx-1"/>
                </a>
                <a href="mailto:himanshunarware77@gmail.com" rel="noreferrer">
                  <SiGmail className="text-dark mx-1"/>
                </a>
                <a
                  href="https://github.com/HimanshuNarware/Devlabs"
                  rel="noreferrer"
                >
                  <FaGithubSquare className="text-dark mx-1"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
