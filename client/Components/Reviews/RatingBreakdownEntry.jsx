import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const RatingBreakdownEntry = ({ rating, percentage, numOfRating }) => (
  <div>
    <div className="rating-star">{rating} stars</div>
    <div className="review-rating-prograss-bar">
      <ProgressBar now={percentage} />
    </div>
    <div className="rating-amount">{numOfRating}</div>
  </div>
);

export default RatingBreakdownEntry;
