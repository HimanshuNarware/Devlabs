import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Rate.css';

const Rate = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false); 
  const [errorMessage, setErrorMessage] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    if (!rating || !feedback) {
      setErrorMessage('Please fill all the details.');
      return;
    }

    setRating(null);
    setFeedback('');
    setSubmitted(true);
    setErrorMessage(''); 
  };

 
  const preventClose = (event) => {
    event.stopPropagation(); 
  };

  return (
    <div className='rate-container'>
      {!submitted && (
        <div className={`rate-card`} onClick={preventClose}>
          <div className='rating-container'>
            {[...Array(5)].map((_, index) => {
              const currentRating = index + 1;
              return (
                <label key={index}>
                  <input
                    type='radio'
                    name='rating'
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                  />
                  <FaStar
                    className='star'
                    size={50}
                    color={currentRating <= (hover || rating) ? '#0739ff' : '#e4e5e9'}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
            <p className='rating-text'>Your Rating is {rating} out of 5.</p>
          </div>
          <div className='feedback-container'>
            <label className='feedback-label'>Give Feedback:</label>
            <input
              type='text'
              className='feedback-input'
              value={feedback}
              onChange={handleFeedbackChange}
              placeholder='Write your feedback...'
              onClick={preventClose}
            />
            <button className='submit-button' onClick={handleSubmit}>
              Submit
            </button>
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
          </div>
        </div>
      )}
      {submitted && (
        <div className={`rate-card submitted`}>
          <p className='submitted-message'>Thank you for your feedback!</p>
        </div>
      )}
    </div>
  );
};

export default Rate;
