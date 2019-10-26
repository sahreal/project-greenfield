import React from "react";
import Grid from "@material-ui/core/Grid";
import StarReviews from "./StarReviews.jsx";

const ReviewMeta = ({ avg_rating, metaData }) => (
  <div className="review-meta">
    {console.log(metaData, avg_rating)}
    <div className="review-overview">
      <div className="review-avg-rating-number">{avg_rating}</div>
      <div className="review-avg-rating-star">
        <StarReviews avg_rating={avg_rating} />
      </div>
    </div>
    <div className="review-rating-breakdown">rating breakdown</div>
    <div className="review-rating-factor">rating factor</div>
  </div>
);

export default ReviewMeta;
