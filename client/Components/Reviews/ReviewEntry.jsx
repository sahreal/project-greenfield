import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import StarReviews from "./StarReviews.jsx";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./reviews.css";

const DATE_OPTIONS = {
  year: "numeric",
  month: "short",
  day: "numeric"
};
const ReviewEntry = ({ review }) => (
  <div className="review-entry">
    <Grid container justify="space-around">
      <Grid item xs={12} className="review-username">
        <AccountCircleIcon /> {review.reviewer_name}
      </Grid>
      <Grid item xs={6}>
        <StarReviews avg_rating={review.rating} />
      </Grid>
      <Grid item xs={6}>
        <div className="review-name-and-date">
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
        <div>Helpful? Yes</div>
      </Grid>
      <Grid item xs={3}>
        <div>Report</div>
      </Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  </div>
);

export default ReviewEntry;
