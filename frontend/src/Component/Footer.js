import React from "react";
import logo from "../image/logo1.png";
import "../style/Footer.css";

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className='Footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-lg-4 col-12 ft-1'>
              <a href='https://www.devlabsstore.tech/'>
                <img width={209} src={logo} alt='devlabs' />
              </a>
              <h5>
                Facing an issue or just <br />
                enjoying the site?{" "}
              </h5>
              <button>
                <Link to="/review">Tell us now</Link>
              </button>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Company</h5>
              <ul>
                
                <li className="nav-item">
                  </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Quick Links</h5>
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
                  <a href="/ui-design">UI Design</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 col-12 ft-4">
              <h5>Explore</h5>
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
              <div className="footer-icon mb-2">
                <a
                  href="https://www.linkedin.com/in/himanshunarware/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaLinkedin className="text-white mx-1 fs-4" />
                </a>
                <a
                  href="https://twitter.com/N_Himanshu_/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaSquareXTwitter className="text-white mx-1 fs-4" />
                </a>
                <a
                  href="mailto:himanshunarware77@gmail.com"
                  rel="noreferrer"
                >
                  <SiGmail className="text-white mx-1 fs-4" />
                </a>
                <a
                  href="https://github.com/HimanshuNarware/Devlabs"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaGithubSquare className="text-white mx-1 fs-4" />
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
