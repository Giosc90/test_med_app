// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';
import './GiveReview.css';

const GiveReview = ({ onSubmit, doctorName }) => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, review, rating });
    setName('');
    setReview('');
    setRating(0);
  };


  return (
    <div className="give-review-container">
      <h3>Provide a review for {doctorName}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          ></textarea>
        </div>
    <div className="form-group">
  <label>Rating:</label>
  <div className="star-rating">
    {[1, 2, 3, 4, 5].map((starValue) => (
      <span
        key={starValue}
        className={`star ${(hoverRating || rating) >= starValue ? 'filled' : ''}`}
        onClick={() => setRating(starValue)}
        onMouseEnter={() => setHoverRating(starValue)}
        onMouseLeave={() => setHoverRating(0)}
      >
        ★
      </span>
    ))}
          </div>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default GiveReview;