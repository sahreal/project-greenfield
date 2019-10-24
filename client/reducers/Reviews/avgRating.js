import Redux from "redux";

const avgRatingReducer = (state = 3.0, action) => {
  switch (action.type) {
    case "CHANGE_RATING":
      return action.avg_rating;
    default:
      return state;
  }
};

export default avgRatingReducer;
