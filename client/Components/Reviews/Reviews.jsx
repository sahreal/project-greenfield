import React from "react";
import Grid from "@material-ui/core/Grid";
import ReviewListContainer from "../../containers/ReviewListContainer.jsx";
import ReviewMetaContainer from "../../containers/ReviewMetaContainer.jsx";

const Reviews = () => (
  <div className="reviews">
    <p className="review-title">Ratings & Reviews</p>
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <ReviewMetaContainer />
      </Grid>
      <Grid item xs={8}>
        <ReviewListContainer />
      </Grid>
    </Grid>
  </div>
);

export default Reviews;
