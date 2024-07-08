import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "../style/Review.css";
import axios from "axios";
import Rate from "./Rate";
import { toast } from "react-toastify";

const BACKEND = process.env.REACT_APP_BACKEND;

function Review() {
  const [rating, setRating] = useState(0);
  const [reviewData, setReviewData] = useState({
    name: "",
    email: "",
    review: "",
    feedbackType: "",
    otherFeedback: ""
  });
  const [processingMail, setProcessingMail] = useState(false);

  const onChangeHandler = (event) => {
    setReviewData({ ...reviewData, [event.target.id]: event.target.value });
  };

  const onFeedbackTypeChange = (event) => {
    setReviewData({ ...reviewData, feedbackType: event.target.value, otherFeedback: "" });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._-]+@gmail.com$/;
    const email = document.getElementById("email").value;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    else{
      toast.success("Review Submitted");
    }

    setProcessingMail(true);
    const response = await axios
      .post(`${BACKEND}/special/mail`, reviewData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .catch((error) => {
        return error.response;
      });

    setProcessingMail(false);
    if (response.data.success) toast.success("Mail Sent Successfully!!");
    else if (response.data && response.data.errors) {
      toast.error(response.data.errors.join("\n"));
    } else {
      toast.error("An unknown error occurred.");
    }
    window.location.reload();
  };

  return (
    <div>
      <h2 className='review__form-header'>Here's the Review Form</h2>
      <div>
        <p className='review__form-subtext'>
          Thank you for visiting the website! Please tell us how we can improve
          your experience. Provide your email in case you want the owner to
          contact you.
        </p>
      </div>
      <form className='review__form' onSubmit={onSubmitHandler}>
        <input
          className='review__form-input review__input-name'
          placeholder='Your Name'
          type='text'
          id='name'
          value={reviewData.name}
          onChange={onChangeHandler}
          required
        />
        <input
          className='review__form-input review__input-email'
          placeholder='Your Email'
          type='email'
          id='email'
          value={reviewData.email}
          onChange={onChangeHandler}
          required
        />
        <div className='review__form-input' style={{ align: 'Left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <label htmlFor='feedbackType' style={{ marginBottom: '10px' }}>Feedback Type:</label>
          <select
            id='feedbackType'
            value={reviewData.feedbackType}
            onChange={onFeedbackTypeChange}
            style={{ width: '100%' }}
            required
          >
            <option value=''>Select feedback type</option>
            <option value='complaint'>Complaint</option>
            <option value='suggestion'>Suggestion</option>
            <option value='question'>Question</option>
            <option value='other'>Other</option>
          </select>
        </div>
        {reviewData.feedbackType === 'other' && (
          <input
            className='review__form-input'
            placeholder='Please specify'
            type='text'
            id='otherFeedback'
            value={reviewData.otherFeedback}
            onChange={onChangeHandler}
            required
          />
        )}
        <textarea
          className='review__form-input review__input-review'
          placeholder='Your Message'
          id='review'
          cols='30'
          rows='5'
          value={reviewData.review}
          onChange={onChangeHandler}
          required
        />
        
        <h3>Rate us:</h3>
        <Rate rating={rating} setRating={setRating} />
        <div className='review__form-div'>
          <button className='review__form-button'>
            {processingMail ? (
              <ClipLoader
                color='#a0a0a0'
                loading={processingMail}
                size={20}
                aria-label='Loading Spinner'
                data-testid='loader'
              />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Review;
