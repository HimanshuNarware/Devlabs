import React from "react";
import { Link } from "react-router-dom";

import logo from "../image/logo.png";
import "../style/Footer.css";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
function Footer() {
    return (
        <footer>
            <div className="card">
                <div className="card-header">
                    <img width={300} alt={"DevLaps"} src={logo} />
                </div>
                <div className="card-body">
                    <h4 className="card-title ">Contact us</h4>
                    <div className="contact-link">
                        <div className="cntc-link">
                            <a href="https://www.linkedin.com/in/himanshunarware/" target="_blank" rel="noreferrer" >
                                <FaLinkedinIn />
                            </a>
                        </div>
                        <div className="cntc-link">
                            <a href="https://twitter.com/N_Himanshu_\" target="_blank" rel="noreferrer" >
                                {" "}
                                <FaTwitter />
                            </a>
                        </div>
                        <div className="cntc-link">
                            <a href="https://github.com/HimanshuNarware" target="_blank" rel="noreferrer" >
                                {" "}
                                <BsGithub />
                            </a>
                        </div>
                        <div className="cntc-link">
                            <a href="mailto:himanshunarware77@gmail.com" target="_blank" rel="noreferrer" >
                                {" "}
                                <AiTwotoneMail />
                            </a>
                        </div>
                    </div>
                </div>
				<div className="card-header">
					Facing an issue or just enjoying the site ? Tell us now via the
					<Link className="card-link" to="/review"> Review Page</Link>.
				</div>
                <div className="card-header copyright">
                    COPYRIGHT © Devlaps 2023 | MAINTAINED BY HIMANSHU NARWARE
                </div>
            </div>
        </footer>
    );
}

export default Footer;
