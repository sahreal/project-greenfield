import { connect } from "react-redux";
import ReviewList from "../Components/Reviews/ReviewList";
import loadMoreReview from "../actions/Reviews/loadMoreReview.js";

let mapStatetoProps = store => {
  return {
    reviewList: store.reviewList
  };
};
let mapDispatchToProps = dispatch => {
  return { handleClickMoreReview: () => dispatch(loadMoreReview()) };
};

const ReviewListContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(ReviewList);

export default ReviewListContainer;
