import React, { useState } from "react";
import "./../style/Rateus.css";

function RateUsComponent({ previousContent }) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleStarClick = (star) => {
    setRating(star);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    // Check if both rating and feedback are provided
    if (rating !== 0 && feedback.trim() !== "") {
      // Reset the state after submitting
      setRating(0);
      setFeedback("");
    } 
  };

  return (
    <div className="rate-us-page">
      <div className="rate-us-container">
        <h2 className="rate-us-heading">Rate Our Website</h2>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? "star filled" : "star"}
              onClick={() => handleStarClick(star)}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          className="feedback-textarea"
          placeholder="Write your feedback here..."
          value={feedback}
          onChange={handleFeedbackChange}
        ></textarea>
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
export default RateUsComponent;
