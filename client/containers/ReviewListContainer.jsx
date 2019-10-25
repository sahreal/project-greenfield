import { connect } from "react-redux";
import ReviewList from "../Components/Reviews/ReviewList";

let mapStatetoProps = store => {
  return {
    reviewList: store.reviewList
  };
};

const ReviewListContainer = connect(mapStatetoProps)(ReviewList);

export default ReviewListContainer;
