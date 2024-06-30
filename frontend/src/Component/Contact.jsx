import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Lottie from "lottie-react";
import animationData from "../lottie/contact.json"; 
import "../style/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">

      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-description">
        Please fill out the form below to get in touch with us.
      </p>
      <form className="contact-form">
        <div className="contact-form__group">
          <label htmlFor="name" className="contact-form__label">
            Name:
          </label>
          <input type="text" id="name" name="name" className="contact-form__input" />
        </div>

        <div className="contact-form__group">
          <label htmlFor="email" className="contact-form__label">
            Email:
          </label>
          <input type="email" id="email" name="email" className="contact-form__input" />
        </div>

        <div className="contact-form__group">
          <label htmlFor="message" className="contact-form__label">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="contact-form__textarea"
          />
        </div>

      <div className="lottie-container">
        <Lottie animationData={animationData} loop={true} style={{height:'500px'}}/>
      </div>
      <div className="contact-content">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-description">
          Please fill out the form below to get in touch with us.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input type="text" id="name" name="name" className="form-input" />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input type="email" id="email" name="email" className="form-input" />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="form-textarea"
            />
          </div>


          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>


      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/himanshunarware/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FontAwesomeIcon icon={faLinkedin} className="social-link__icon" />
        </a>
        <a
          href="https://github.com/HimanshuNarware/Devlabs"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FontAwesomeIcon icon={faGithub} className="social-link__icon" />
        </a>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/himanshunarware/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
          <a
            href="https://github.com/HimanshuNarware/Devlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;
