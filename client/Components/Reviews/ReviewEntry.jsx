import React from "react";
import Grid from "@material-ui/core/Grid";
import StarReviews from "./StarReviews.jsx";
import "./reviews.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import axios from "axios";

class ReviewEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulClicked: false,
      helpful: 0,
      reportClicked: false
    };
    this.handleClickHelpful = this.handleClickHelpful.bind(this);
    this.handleClickReport = this.handleClickReport.bind(this);
  }
  handleClickHelpful() {
    if (!this.state.helpfulClicked) {
      axios.put(
        `http://18.223.1.30/reviews/helpful/${this.props.review.review_id}`
      );
      this.setState({ helpful: this.props.review.helpfulness + 1 });
    }
    this.setState({
      helpfulClicked: true
    });
  }
  handleClickReport() {
    if (!this.state.reportClicked) {
      axios.put(
        `http://18.223.1.30/reviews/report/${this.props.review.review_id}`
      );
    }
    this.setState({
      reportClicked: true
    });
  }
  render() {
    return (
      <div className="review-entry">
        <Grid container justify="space-around">
          <Grid item xs={12} className="review-username">
            <AccountCircleIcon /> {this.props.review.reviewer_name}
          </Grid>
          <Grid item xs={6}>
            <StarReviews avg_rating={this.props.review.rating} />
          </Grid>
          <Grid item xs={6}>
            <div className="review-name-and-date">
              {new Date(this.props.review.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric"
              })}
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <div className="review-summary">{this.props.review.summary}</div>
          </Grid>
          <Grid item xs={12}>
            <div>{this.props.review.body}</div>
          </Grid>
          <Grid item xs={12}>
            {this.props.review.recommend ? (
              <div>I recommend this product</div>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            {this.props.review.response ? <div>Response:</div> : null}
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <div className="review-helpful">
              Helpful?{" "}
              <span
                className="review-helpful-yes"
                onClick={() => {
                  this.handleClickHelpful;
                }}
              >
                Yes
              </span>
              <span className="review-helpful-count">
                {this.state.helpfulClicked
                  ? `(${this.state.helpful})`
                  : `(${this.props.review.helpfulness})`}
              </span>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div
              className="review-report"
              onClick={() => {
                this.handleClickReport();
              }}
            >
              {this.state.reportClicked ? "Reported" : "Report"}
            </div>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </div>
    );
  }
}

export default ReviewEntry;
