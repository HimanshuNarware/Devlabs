import React, { useState, useEffect } from "react";
import "../style/Profile.css";

function Profile() {
  const [profileData, setProfileData] = useState({
    name: "",
    bio: "",
    email: "",
    github: "",
    website: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true); // Toggle between login and signup
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("profileData");
    if (savedData) {
      setProfileData(JSON.parse(savedData));
      setIsSubmitted(true);
    }
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("profileData", JSON.stringify(profileData));
    setIsSubmitted(true);
  };

  const handleAuthChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    } else {
      setError("Please fill out all fields.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setIsSubmitted(false);
  };

  const handleAuthSwitch = () => {
    setShowLogin(prev => !prev);
    setError("");
  };

  if (!isLoggedIn) {
    return showLogin ? (
      <div className="auth__container">
        <h1>Login</h1>
        <form className="auth__form" onSubmit={handleAuthSubmit}>
          <div className="auth__form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleAuthChange}
              required
            />
          </div>
          <div className="auth__form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleAuthChange}
              required
            />
          </div>
          {error && <p className="auth__error">{error}</p>}
          <button type="submit" className="auth__submit-btn">Login</button>
          <p className="auth__switch-container">
            Don't have an account? <button className="signup-btn-switch" onClick={handleAuthSwitch}>Signup</button>
          </p>
        </form>
      </div>
    ) : (
      <div className="auth__container">
        <h1>Sign Up</h1>
        <form className="auth__form" onSubmit={handleAuthSubmit}>
          <div className="auth__form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleAuthChange}
              required
            />
          </div>
          <div className="auth__form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleAuthChange}
              required
            />
          </div>
          <div className="auth__form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleAuthChange}
              required
            />
          </div>
          {error && <p className="auth__error">{error}</p>}
          <button type="submit" className="auth__submit-btn">Sign Up</button>
          <p className="auth__switch-container">
            Already have an account? <button className="login-btn-switch" onClick={handleAuthSwitch}>Login</button>
          </p>
        </form>
      </div>
    );
  }

  return isSubmitted ? (
    <div className="profile__container">
      <div className="profile__avatar">
        <div className="profile__avatar-placeholder">
          {profileData.name.charAt(0).toUpperCase()}
        </div>
      </div>
      <h2 className="profile__name">{profileData.name}</h2>
      <p className="profile__bio">{profileData.bio}</p>
      <div className="profile__info">
        <p><strong>Email:</strong> {profileData.email}</p>
        {profileData.github && (
          <p><strong>GitHub:</strong> <a href={profileData.github} target="_blank" rel="noreferrer">{profileData.github}</a></p>
        )}
        {profileData.website && (
          <p><strong>Website:</strong> <a href={profileData.website} target="_blank" rel="noreferrer">{profileData.website}</a></p>
        )}
      </div>
      <button className="profile__edit-btn" onClick={() => setIsSubmitted(false)}>Edit Profile</button>
      <button className="profile__logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  ) : (
    <div className="profile__container">
      <h1>Edit Profile</h1>
      <form className="profile__form" onSubmit={handleProfileSubmit}>
        <div className="profile__form-group">
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            required
            placeholder="enter your name"
          />
        </div>
        <div className="profile__form-group">
          <label htmlFor="bio">Bio:</label><br />
          <textarea
            id="bio"
            name="bio"
            value={profileData.bio}
            onChange={handleChange}
            rows="3"
            placeholder="enter your bio"
          ></textarea>
        </div>
        <div className="profile__form-group">
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            required
            placeholder="enter your email"
          />
        </div>
        <div className="profile__form-group">
          <label htmlFor="github">GitHub URL:</label><br />
          <input
            type="url"
            id="github"
            name="github"
            value={profileData.github}
            onChange={handleChange}
            placeholder="enter your github url"
          />
        </div>
        <div className="profile__form-group">
          <label htmlFor="website">Website:</label><br />
          <input
            type="url"
            id="website"
            name="website"
            value={profileData.website}
            onChange={handleChange}
            placeholder="enter your personal website url"
          />
        </div>
        <button type="submit" className="profile__submit-btn">Save Profile</button>
      </form>
    </div>
  );
}

export default Profile;
