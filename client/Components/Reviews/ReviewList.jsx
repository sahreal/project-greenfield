import React from "react";
import ReviewEntry from "./ReviewEntry.jsx";
import LoadReview from "./LoadReview.jsx";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import "./reviews.css";
import ReviewModal from "./ReviewModal.jsx";

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
      sortBy: "relevant",
      reviewList: [],
      modalShow: false
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
    this.setState(
      { reviewList: [], pageNum: 1, sortBy: e.target.value },
      () => {
        this.fetchReviews();
      }
    );
  }

  render() {
    if (this.props.filterOn) {
      console.log("inside reviewlist", this.props.filterArray);
      var allReviews = this.props.reviewList;
      var filterReviewList = [];
      for (let i = 0; i < this.props.filterArray.length; i++) {
        let filterR = allReviews.filter(review => {
          return review.rating + "" === this.props.filterArray[i];
        });
        filterReviewList = [...filterReviewList, ...filterR];
        console.log(filterReviewList);
      }
    }
    return (
      <div className="review-list">
        <Row className="review-sortBy">
          <Col>
            <p>{this.props.reviewList.length} Reviews, sorted by</p>
            <select
              value={this.state.sortBy}
              onChange={this.handleSortBy}
              className="sortBy-select"
            >
              <option value="relevant">Relevant</option>
              <option value="helpful">Helpful</option>
              <option value="newest">Newest</option>
            </select>
          </Col>
        </Row>
        <Row className="review-reviewList">
          {this.props.filterOn
            ? filterReviewList.map(review => {
                return <ReviewEntry review={review} key={review.review_id} />;
              })
            : this.state.reviewList.map(review => {
                return <ReviewEntry review={review} key={review.review_id} />;
              })}
        </Row>
        <Row className="review-buttons mt-5">
          <Col xs={3}>
            <LoadReview handleClickMoreReview={this.handleClickMoreReview} />
          </Col>
          <Col x3={3}>
            <ButtonToolbar>
              <Button
                size="md"
                variant="outline-dark"
                onClick={() => {
                  this.setState({ modalShow: true });
                }}
              >
                Add a Reviews
              </Button>
              <ReviewModal
                productid={this.props.productId}
                metadata={this.props.metaData}
                show={this.state.modalShow}
                onHide={() => {
                  this.setState({ modalShow: false });
                }}
              />
            </ButtonToolbar>
          </Col>
        </Row>
      </div>
    );
  }
}
export default ReviewList;
