import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import "./Rate.css";

const Rate = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showDialog, setShowDialog] = useState(true);

  const handleSubmit = () => {
    if (rating && feedback) {
      alert(`Rating: ${rating}\nFeedback: ${feedback}`);
      setShowDialog(false); // Close the dialog
    } else {
      alert("Please provide a rating and feedback before submitting.");
    }
  };
  return (
    showDialog && (
      <div className='rate-us'>
        <div className='rate-us__container rate-us__container--hover'>
          <h2 className='rate-us__heading'>Rate Us</h2>
          <div className='rate-us__icon-rating'>
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name='rating'
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                    style={{ display: 'none' }}
                  />
                  <FaStar
                    className={`star rate-us__icon ${currentRating <= (hover || rating) ? 'rate-us__icon--selected' : ''}`}
                    size={50}
                    color={currentRating <= (hover || rating) ? "#ffd700" : "#e4e5e9"}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
          <p className='rate-us__text'>Your Rating is {rating} out of 5.</p>
          <textarea
      
      
            className='rate-us__feedback-textarea'
            placeholder='Leave your feedback here...'
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <button className='rate-us__submit-button rate-us__submit-button--hover' onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    )
  );
};

export default Rate;
