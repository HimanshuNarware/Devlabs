import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./../style/Rateus.css";

function RateUsComponent({ previousContent }) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleEmojiClick = (emojiIndex) => {
    setRating(emojiIndex);
  };

  const handleSubmit = () => {
    if (rating !== 0 && feedback.trim() !== "") {
      setRating(0);
      setFeedback("");
      toast.success("Thanks For Your Feedback :)", {
        position: "top-center"
      });
    } else {
      toast.error("Please Enter All Details :(", {
        position: "top-center"
      });
    }
  };

  const emojis = ["😢", "😟", "😐", "😊", "😍"];

  return (
    <>
      <div className="rate-us-page">
        <div className="rate-us-container">
          <h2 className="rate-us-heading">Rate Our Website</h2>
          <div className="emoji-rating">
            {emojis.map((emoji, index) => (
              <span
                key={index}
                className={index + 1 === rating ? "emoji selected" : "emoji"}
                onClick={() => handleEmojiClick(index + 1)}
              >
                {emoji}
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
  
