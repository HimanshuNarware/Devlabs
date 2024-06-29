import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./../style/Rateus.css";

function RateUsComponent({ previousContent }) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleIconClick = (iconIndex) => {
    setRating(iconIndex + 1);
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
      // Show success toast message
      toast.success("Thanks For Your Feedback :)", {
        position: "top-center"
      });
    } else {
      toast.error("Please Enter All Details :(", {
        position: "top-center"
      });
    }
  };

  return (
    <>
      <div className="rate-us-page">
        <div className="rate-us-container">
          <h2 className="rate-us-heading">Rate Our Website</h2>
          <div className="icon-rating">
            {[0, 1, 2, 3, 4].map((index) => (
              <span
                key={index}
                className={`icon ${index === rating - 1 ? "selected" : ""}`}
                onClick={() => handleIconClick(index)}
              >
                {index === 0 && "😞"}
                {index === 1 && "😐"}
                {index === 2 && "😊"}
                {index === 3 && "😃"}
                {index === 4 && "😍"}
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
      <ToastContainer />
    </>
  );
}

export default RateUsComponent;
