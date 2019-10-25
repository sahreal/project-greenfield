import { connect } from "react-redux";
import ReviewList from "../Components/Reviews/ReviewList";
import loadMoreReview from "../actions/Reviews/loadMoreReview.js";
import changePageNum from "../actions/Reviews/changePageNum";

let mapStatetoProps = store => {
  return {
    reviewList: store.reviewList,
    productId: store.productId
  };
};
let mapDispatchToProps = (dispatch, ownProps) => {
  console.log("ownProps", ownProps);
  return {
    handleClickMoreReview: () => {
      dispatch(changePageNum);
      console.log("in review container", ownProps.pageNum);
      dispatch(loadMoreReview(ownProps.productId));
    }
  };
};

const ReviewListContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(ReviewList);

export default ReviewListContainer;
