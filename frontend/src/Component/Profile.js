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
  // Load profile data from localStorage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("profileData");
    if (savedData) {
      setProfileData(JSON.parse(savedData));
      setIsSubmitted(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("profileData", JSON.stringify(profileData));
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
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
      </div>
    );
  }

  return (
    <div className="profile__container">
      <h1>Edit Profile</h1>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="profile__form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={profileData.bio}
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>
        <div className="profile__form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="profile__form-group">
          <label htmlFor="github">GitHub URL:</label>
          <input
            type="url"
            id="github"
            name="github"
            value={profileData.github}
            onChange={handleChange}
          />
        </div>
        <div className="profile__form-group">
          <label htmlFor="website">Website:</label>
          <input
            type="url"
            id="website"
            name="website"
            value={profileData.website}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="profile__submit-btn">Save Profile</button>
      </form>
    </div>
  );
}

export default Profile;
