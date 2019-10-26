import Redux from "redux";

const reviewListReducer = (state = [], action) => {
  switch (action.type) {
    case "CHANGE_REVIEW_LIST":
      console.log(action);
      return action.reviewList;
    default:
      return state;
  }
};
export default reviewListReducer;
