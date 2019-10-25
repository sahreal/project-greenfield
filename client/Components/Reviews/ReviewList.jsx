import React from "react";
import ReviewEntry from "./ReviewEntry.jsx";

const ReviewList = ({ reviewList, productId }) => (
  <div className="review-reviewList">
    {console.log(productId)}
    {reviewList.map(review => {
      return <ReviewEntry review={review} key={review.review_id} />;
    })}
  </div>
);

export default ReviewList;
