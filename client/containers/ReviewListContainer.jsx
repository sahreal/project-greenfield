import { connect } from "react-redux";
import ReviewList from "../Components/Reviews/ReviewList";

let mapStatetoProps = (store, ownProps) => {
  console.log("list ownProps", ownProps);
  return {
    reviewList: store.reviewList,
    productId: store.productId,
    filterOn: ownProps.filterOn,
    filterArray: ownProps.filterArray
  };
};

const ReviewListContainer = connect(mapStatetoProps)(ReviewList);

export default ReviewListContainer;
