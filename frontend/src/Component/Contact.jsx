import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
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
      </div>
    </div>
  );
};

export default Contact;
