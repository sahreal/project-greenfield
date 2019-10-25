import React from "react";
import ReviewEntry from "./ReviewEntry.jsx";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LoadReview from "./LoadReview.jsx";

const ReviewList = ({ reviewList, handleClickMoreReview, productId }) => (
  <div>
    <div className="review-reviewList">
      {reviewList.map(review => {
        return <ReviewEntry review={review} key={review.review_id} />;
      })}
    </div>
    <div>
      <Grid container justify="flex-start">
        <Grid item xs={2}>
          <LoadReview
            handleClickMoreReview={handleClickMoreReview}
            productId={productId}
          />
        </Grid>
        <Grid item xs={2}>
          <Button size="small" variant="outlined">
            Add a Reviews
          </Button>
        </Grid>
      </Grid>
    </div>
  </div>
);

export default ReviewList;
