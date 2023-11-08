import React, { useState } from 'react';
import '../style/Review.css';

function Review() {
	const [reviewData, setReviewData] = useState({name: "", email: "", review: ""});

	const onChangeHandler = (event) => {
		setReviewData({...reviewData, [event.target.id]: event.target.value});
	}
	
	const onSumbitHandler = (event) => {
		event.preventDefault();
		alert(`${JSON.stringify(reviewData)}\nForm Submitted!\nWorking On Sending Mail!`);
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
				<input
					className="form-input-field input-name"
					placeholder="Your Name"
					type="text"
					id="name"
					value={reviewData.name}
					onChange={onChangeHandler}
					required
				/>
				<input
					className="form-input-field input-email"
					placeholder="Your Email"
					type="email"
					id="email"
					value={reviewData.email}
					onChange={onChangeHandler}
					required
				/>
				<textarea
					className="form-input-field input-review"
					placeholder="Your Message"
					id="review"
					cols="30"
					rows="5"
					value={reviewData.review}
					onChange={onChangeHandler}
					required
				/>
				<div className="form-div">
					<button className="form-button">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}


export default Review;