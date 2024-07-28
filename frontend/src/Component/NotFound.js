import React from "react";
import { Link } from "react-router-dom";
import "../style/NotFound.css"; 
function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-heading">404 - Page Not Found</h1>
        <p className="not-found-text">
          The page you are looking for does not exist. It may have been moved or deleted.
        </p>
        <Link to="/" className="not-found-button">
          Go back to the Home page
        </Link>
        <img
          src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" 
          alt="404 Error"
          className="not-found-image"
        />
      </div>
    </div>
  );
}
export default NotFound;


