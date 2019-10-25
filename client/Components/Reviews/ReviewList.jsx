import React from "react";
import ReviewEntry from "./ReviewEntry.jsx";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LoadReview from "./LoadReview.jsx";

<<<<<<< HEAD
const ReviewList = ({ reviewList, handleClickMoreReview }) => (
  <div>
    <div className="review-reviewList">
      {reviewList.map(review => {
        return <ReviewEntry review={review} key={review.review_id} />;
      })}
    </div>
    <div>
      <Grid container justify="flex-start">
        <Grid item xs={2}>
          <LoadReview handleClickMoreReview={handleClickMoreReview} />
        </Grid>
        <Grid item xs={2}>
          <Button size="small" variant="outlined">
            Add a Reviews
          </Button>
        </Grid>
      </Grid>
    </div>
||||||| merged common ancestors
const ReviewList = ({ reviewList }) => (
  <div className="review-reviewList">
    {reviewList.map(review => {
      return <ReviewEntry review={review} key={review.review_id} />;
    })}
=======
const ReviewList = ({ reviewList, productId }) => (
  <div className="review-reviewList">
    {console.log(productId)}
    {reviewList.map(review => {
      return <ReviewEntry review={review} key={review.review_id} />;
    })}
>>>>>>> staging
  </div>
);

export default ReviewList;
