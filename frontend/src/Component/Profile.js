import React, { useEffect, useState } from "react";
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
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);


  // Le data from localStorage when the component mounts
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true); // Toggle between login and signup
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
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
      if (validatePassword(formData.password)) {
        localStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);
        setError(""); // Clear any previous errors
      } else {
        setPasswordError("Password must be a valid hexadecimal string with at least 6 characters.");
      }
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

  const [password, setPassword] = useState("");

  const validatePassword = (password) => {
    const Pattern = /^[0-9a-fA-F]+$/;
    return Pattern.test(password) && password.length >= 6;
  }


  if (!isLoggedIn) {
    return showLogin ? (
      <div className="auth__container">
        <h1>LOGIN</h1>
        <form className="auth__form" onSubmit={handleAuthSubmit}>
          <div className="auth__form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="youremail@mail.com"
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
            {passwordError && <p className="auth__error">{passwordError}</p>}
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
              placeholder="Your Name"
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
              placeholder="youremail@mail.com"
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
          {passwordError && <p className="auth__error">{passwordError}</p>}
          {error && <p className="auth__error">{error}</p>}
          <div className="signup__form-group">
            <label>
              <input
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
              />
              Subscribe to promotions and newsletter
            </label>
          </div>
          <button type="submit" className="auth__submit-btn">Sign Up</button>
          <p className="auth__terms">By creating this account, you agree to our <a>terms & conditions</a>.</p>
          <p className="auth__switch-container">
            Already have an account? <button className="login-btn-switch" onClick={handleAuthSwitch}>Login</button>
          </p>
        </form>
      </div>
    );
  }

  return isSubmitted ? (
    <div className="profile__container">
      <div className="profile__row">

        <div>
          <div className="profile__avatar">
            <div className="profile__avatar-placeholder">
              {preview ? (
                <img src={preview} alt="Profile" className="profile__avatar-img" />
              ) : (
                <div className="profile__avatar-placeholder">
                  {profileData.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </div>
          <h2 className="profile__name">{profileData.name}</h2>
        </div>

        <div className="profile__right">
          <div className="profile__details">
            <p className="profile__bio">{profileData.bio}</p>
            <div className="profile__info">
              <p><span><i class="fa-solid fa-envelope"></i> </span><strong>Email:</strong> {profileData.email}</p>
              {profileData.github && (
                <p><span><i class="fa-brands fa-github-alt"></i> </span><strong>GitHub:</strong> <a href={profileData.github} target="_blank" rel="noreferrer">{profileData.github}</a></p>
              )}
              {profileData.website && (
                <p><span><i class="fa-solid fa-link"></i> </span><strong>Website:</strong> <a href={profileData.website} target="_blank" rel="noreferrer">{profileData.website}</a></p>
              )}
            </div>
          </div>
          <div className="profile__buttons">
            <button className="profile__edit-btn" onClick={() => setIsSubmitted(false)}>Edit Profile</button>
            <button className="profile__logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>

      </div>
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
            placeholder="Enter your name"
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
            placeholder="Enter your bio"
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
            placeholder="youremail@mail.com"
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
            placeholder="Enter your github url"
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
            placeholder="Enter your personal website url"
          />
        </div>
        <div className="profile__form-group">
          <label htmlFor="profileImage">Profile Image:</label>
          <br />
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>
        <button type="submit" className="profile__submit-btn">Save Profile</button>
      </form>
    </div>
  );
}

export default Profile;
