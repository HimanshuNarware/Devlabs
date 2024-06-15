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
  });
  const [processingMail, setProcessingMail] = useState(false);

  const onChangeHandler = (event) => {
    setReviewData({ ...reviewData, [event.target.id]: event.target.value });
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
    if (response.data.success) toast.done("Mail Sent Successfully!!");
    else if (response.data && response.data.errors) {
      toast.error(response.data.errors.join("\n"));
    } else {
      toast.error("An unknown error occurred.");
    }
    window.location.reload();
  };

  return (
    <div>
      <h2 className='form-header'>Here's the Review Form</h2>
      <div>
        <p className='form-subtext'>
          Thank you for visiting the website! Please tell us how can we improve
          your experience. Provide your email in case you want the owner to
          contact you.
        </p>
      </div>
      <form className='review-form' onSubmit={onSubmitHandler}>
        <input
          className='form-input-field input-name'
          placeholder='Your Name'
          type='text'
          id='name'
          value={reviewData.name}
          onChange={onChangeHandler}
          required
        />
        <input
          className='form-input-field input-email'
          placeholder='Your Email'
          type='email'
          id='email'
          value={reviewData.email}
          onChange={onChangeHandler}
          required
        />
        <textarea
          className='form-input-field input-review'
          placeholder='Your Message'
          id='review'
          cols='30'
          rows='5'
          value={reviewData.review}
          onChange={onChangeHandler}
          required
        />
        
        <div className='form-div'>
          <button className='form-button'>
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
      <h3>Rate us:</h3>
        <Rate rating={rating} setRating={setRating} />
    </div>
  );
}

export default Review;
