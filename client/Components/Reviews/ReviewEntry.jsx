import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import StarReviews from "./StarReviews.jsx";
import { makeStyles } from "@material-ui/core/styles";
import "./reviews.css";

const DATE_OPTIONS = {
  year: "numeric",
  month: "short",
  day: "numeric"
};
const ReviewEntry = ({ review }) => (
  <React.Fragment>
    <Grid container justify="space-around">
      <Grid item xs={6}>
        <StarReviews avg_rating={review.rating} />
      </Grid>
      <Grid item xs={6}>
        <div className="review-name-and-date">
          {review.reviewer_name},
          {new Date(review.date).toLocaleDateString("en-US", DATE_OPTIONS)}
        </div>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12}>
        <div className="review-summary">{review.summary}</div>
      </Grid>
      <Grid item xs={12}>
        <div>{review.body}</div>
      </Grid>
      <Grid item xs={12}>
        {review.recommend ? <div>I recommend this product</div> : null}
      </Grid>
      <Grid item xs={12}>
        {review.response ? <div>Response:</div> : null}
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={3}>
        <div>Helper? Yes</div>
      </Grid>
      <Grid item xs={3}>
        <div>Report</div>
      </Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  </React.Fragment>
);

export default ReviewEntry;
