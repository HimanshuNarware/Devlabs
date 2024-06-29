import React, { useState } from "react";
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
      // Show success message (console.log or any other method you prefer)
      console.log("Thanks For Your Feedback :)");
    } else {
      console.error("Please Enter All Details :(");
    }
  };

  return (
    <>
      <div className="rate-us">
    <div className="rate-us__container">
        <h2 className="rate-us__heading">Rate Our Website</h2>
        <div className="rate-us__icon-rating">
            {[0, 1, 2, 3, 4].map((index) => (
                <span
                    key={index}
                    className={`rate-us__icon ${index === rating - 1 ? "rate-us__icon--selected" : ""}`}
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
            className="rate-us__feedback"
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={handleFeedbackChange}
        ></textarea>
        <button className="rate-us__submit" onClick={handleSubmit}>
            Submit
        </button>
    </div>
</div>

    </>
  );
}

export default RateUsComponent;
