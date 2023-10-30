import React from 'react';
import '../style/Review.css';
import { useState } from 'react';

function Review() {
	const [reviewData, setReviewData] = useState({email: "", review: ""});

	const onChangeHandler = (event) => {
		setReviewData({...reviewData, [event.target.id]: event.target.value});
	}
	
	const onSumbitHandler = (event) => {
		event.preventDefault();
		alert("Form Submitted!\nWorking On Sending Mail!");
		window.location.reload();
	};

	return (
		<div>
			<h2 className="form-header">Here's the Review Form</h2>
			<div>
				<p className="form-subtext">
					Thank you for visiting the website! Please tell us how can we improve your experience. Provide your email in case you want the owner to contact you.
				</p>
			</div>
			<form className='review-form' onSubmit={onSumbitHandler}>
				<div className='form-div'>
					<label
						className="form-input-label"
					>
						your Email Here
					</label>
					<input
						className="form-input-field input-email"
						placeholder="Your Email"
						type="email"
						id="email"
						value={reviewData.email}
						onChange={onChangeHandler}
						required={false}
					/>
				</div>
				<div className='form-div'>
					<label
						className="form-input-label"
					>
						Your Review Here
					</label>
					<textarea
						className="form-input-field input-review"
						placeholder="review"
						id="review"
						cols="30"
						rows="5"
						value={reviewData.review}
						onChange={onChangeHandler}
						required
					/>
				</div>
				<button className="form-button">
					Send
				</button>
			</form>
		</div>
	);
}


export default Review;