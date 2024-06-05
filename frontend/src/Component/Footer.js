import React from "react";
import logo from "../image/logo.png";
import "../style/Footer.css";
import { FaGithubSquare, FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
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
                <img width={209} src={logo} alt='devlaps' />
              </a>
              <h5>
                Facing an issue or just <br />
                enjoying the site?
              </h5>
              <button>
                <Link to="/review">Tell us now</Link>
              </button>
            </div>
            <div className='col-md-6 col-lg-3 col-12 ft-2'>
              <h5>Company</h5>
              <ul>
                <li>
                  <a href="https://www.devlabsstore.tech/">Home</a>
                </li>
                <li>
                  <a href="https://www.devlabsstore.tech/about">About Us</a>
                </li>
                <li>
                  <a href="https://www.devlabsstore.tech/bookmark">Bookmark</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/himanshunarware/">Contact</a>
                </li>
                <li>
                  <a href="https://www.devlabsstore.tech/open-source">Open Source</a>
                </li>
                <li>
                  <a href="https://github.com/HimanshuNarware/Devlabs">Contribute Here</a>
                </li>
              </ul>
            </div>
            <div className='col-md-6 col-lg-3 col-12 ft-3'>
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <Link to='/remote-jobs'>Remote Jobs</Link>
                </li>
                <li>
                  <Link to='/ai'>AI</Link>
                </li>
                <li>
                  <Link to='/movies-series'>Movie/Series</Link>
                </li>
                <li>
                  <Link to='/extension'>Extension</Link>
                </li>
                <li>
                  <Link to='/ui-design'>UI Design</Link>
                </li>
              </ul>
            </div>
            <div className='col-md-6 col-lg-2 col-12 ft-4'>
              <h5>Explore</h5>
              <ul>
                <li>
                  <Link to='/front-end-tools'>Frontend Tools</Link>
                </li>
                <li>
                  <Link to='/ethical-hacking'>Ethical Hacking</Link>
                </li>
                <li>
                  <Link to='/coding-platform'>Coding Platforms</Link>
                </li>
                <li>
                  <Link to='/courses-platform'>Course Platforms</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='Last-footer'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6 col-12 ft-1'>
              <p className='text-center fs-6'>
                COPYRIGHT © Devlaps 2024 | <br /> MAINTAINED BY HIMANSHU NARWARE
              </p>
              <div className='footer-icon mb-2'>
                <a href='https://www.linkedin.com/in/himanshunarware/' target='_blank' rel='noreferrer'>
                  <BsLinkedin className='text-white mx-1 fs-4' />
                </a>
                <a href='https://twitter.com/N_Himanshu_/' target='_blank' rel='noreferrer'>
                  <FaTwitter className='text-white mx-1 fs-4' />
                </a>
                <a href='mailto:himanshunarware77@gmail.com' rel='noreferrer'>
                  <SiGmail className='text-white mx-1 fs-4' />
                </a>
                <a href='https://github.com/HimanshuNarware/Devlabs' target='_blank' rel='noreferrer'>
                  <FaGithubSquare className='text-white mx-1 fs-4' />
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
