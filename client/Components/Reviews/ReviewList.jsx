import React from "react";
import ReviewEntry from "./ReviewEntry.jsx";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LoadReview from "./LoadReview.jsx";
import axios from "axios";

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
      sortBy: "relevant",
      reviewList: []
    };
    this.handleClickMoreReview = this.handleClickMoreReview.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.fetchReviews = this.fetchReviews.bind(this);
    this.handleSortBy = this.handleSortBy.bind(this);
  }
  componentDidMount() {
    this.fetchReviews();
  }
  updatePage() {
    let newPageNum = this.state.pageNum + 1;
    this.setState({ pageNum: newPageNum });
  }
  fetchReviews() {
    axios
      .get(`http://18.223.1.30/reviews/${this.props.productId}/list`, {
        params: { page: this.state.pageNum, count: 2, sort: this.state.sortBy }
      })
      .then(({ data }) => {
        let currentReviewList = this.state.reviewList;
        let newReviewList = currentReviewList.concat(data.results);
        this.setState({ reviewList: newReviewList });
      })
      .catch(e => {
        console.log(e);
      });
  }
  handleClickMoreReview() {
    Promise.resolve(this.updatePage())
      .then(this.fetchReviews)
      .catch(err => {
        console.log(err);
      });
  }
  handleSortBy(e) {
    Promise.resolve(
      this.setState({ reviewList: [], pageNum: 1, sortBy: e.target.value })
    )
      .then(() => {
        this.fetchReviews();
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log("props", this.props);
    console.log("filter Array in reviewlist", this.props.filterArray);
    if (this.props.filterOn) {
      var allReviews = this.props.reviewList;
      var filterReviewList = [];
      for (let i = 0; i < this.props.filterArray.length; i++) {
        let filterR = allReviews.filter(review => {
          return review.rating + "" === this.props.filterArray[i];
        });
        filterReviewList = [...filterReviewList, ...filterR];
      }
      console.log("filterlist", filterReviewList);
    }
    return (
      <div>
        <div>
          <p>{this.props.reviewList.length} Reviews, sorted by</p>
          <select value={this.state.sortBy} onChange={this.handleSortBy}>
            <option value="relevant">Relevant</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <div className="review-reviewList">
          {this.props.filterOn
            ? filterReviewList.map(review => {
                return <ReviewEntry review={review} key={review.review_id} />;
              })
            : this.state.reviewList.map(review => {
                return <ReviewEntry review={review} key={review.review_id} />;
              })}
        </div>
        <div>
          <Grid container justify="flex-start">
            <Grid item xs={2}>
              <LoadReview handleClickMoreReview={this.handleClickMoreReview} />
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
  }
}
export default ReviewList;
