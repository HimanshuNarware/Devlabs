import React from "react";
import { Link } from "react-router-dom";

import logo from "../image/logo.png";
import "../style/Footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import CustomLogo from "../icons/x-logo-b.webp";
import { PiXLogo } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";

function Footer() {
  return (
    <footer>
      <div className="card">
        <div className="card-body">
          <table style={{ width: "100%"}}><tr>
            <td><img width={450} alt={"DevLaps"} src={logo} /></td>
            <td><h4 className="card-title">Contact us</h4></td>
          </tr>
          <tr><td></td>
          <td>
          <div className="contact-link">
            <div className="cntc-link">
              <a
                href="https://www.linkedin.com/in/himanshunarware/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="cntc-link">
              <a
                href="https://twitter.com/N_Himanshu_\"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                {/* <img src={CustomLogo} alt="Twitter" height="21px" width="21" /> */}
                <BiLogoTwitter />
              </a>
            </div>
            <div className="cntc-link">
              <a
                href="https://github.com/HimanshuNarware/Devlabs"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <BsGithub />
              </a>
            </div>
            <div className="cntc-link">
              <a
                href="mailto:himanshunarware77@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                {/* <AiTwotoneMail /> */}
                <BiLogoGmail />
              </a>
            </div>
          </div>
          </td>
          </tr></table>
        </div>  
        <div className="card-body">
          Facing an issue or just enjoying the site ? Tell us now via the
          <Link className="card-link" to="/review">
            {" "}
            Review Page
          </Link>
          .
        </div>
        <div className="card-body copyright">
          COPYRIGHT © Devlaps 2024 | MAINTAINED BY HIMANSHU NARWARE
        </div>
      </div>
    </footer>
  );
}

export default Footer;
