import React from "react";
import Grid from "@material-ui/core/Grid";
import ReviewListContainer from "../../containers/ReviewListContainer.jsx";
import ReviewMetaContainer from "../../containers/ReviewMetaContainer.jsx";

const Reviews = () => (
  <Grid container spacing={3} className="reviews">
    <Grid item xs={4}>
      <ReviewMetaContainer />
    </Grid>
    <Grid item xs={8}>
      <ReviewListContainer />
    </Grid>
  </Grid>
);

export default Reviews;
