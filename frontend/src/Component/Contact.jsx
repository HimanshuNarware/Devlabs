import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Lottie from "lottie-react";
import animationData from "../lottie/contact.json";
import "../style/Contact.css";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(value));
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all fields are filled
    if (!name || !email || !message) {
      setErrorMessage('Please fill all the fields');

      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      return;
    }

    // Show thank you message
    setFormMessage('Thank you! We will connect soon.');
    setErrorMessage('');

    // Clear the message and reset form after 3 seconds
    setTimeout(() => {
      setFormMessage('');
      setName('');
      setEmail('');
      setMessage('');
      event.target.reset();
    }, 3000);
  };

  return (
    <div className="contact-container">
      <div className="lottie-container">
        <Lottie animationData={animationData} loop={true} style={{ height: '500px' }} />
      </div>
      <div className="contact-content">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-description">
          Please fill out the form below to get in touch with us.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input type="text" id="name" name="name" className="form-input" onChange={handleNameChange} />
            <input type="text" id="name" name="name" className="form-input" placeholder="Full name" />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input type="email" id="email" name="email" className="form-input" onChange={handleEmailChange} />
            <input type="email" id="email" name="email" className="form-input" onChange={handleEmailChange} placeholder="example@example.com"/>
            {message && (
          <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.25rem' }}>
            {message}
          </p>
        )}
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

              onChange={handleMessageChange}

              placeholder="Write here something..."
            />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>

        {errorMessage && (
          <p className="error-message">
            {errorMessage}
          </p>
        )}

        {formMessage && (
          <p className="success-message">
            {formMessage}
          </p>
        )}

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
    <div className="outer-contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="image-container">
            <Lottie
              animationData={animationData}
              loop={true}
              className="lottie-animation"
            />
          </div>
          <div className="form-container">
            <h2 className="contact-heading">Contact Us</h2>
            <p className="contact-description">
              Please fill out the form below to get in touch with us.
            </p>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-input ${isValid ? "" : "invalid"}`}
                  onChange={handleEmailChange}
                  placeholder="example@example.com"
                />
                {!isValid && (
                  <p className="error-message">
                    Please enter a valid email address.
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  rows="4"
                  placeholder="Write your message..."
                ></textarea>
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
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
