import { combineReducers } from "redux";
import avgRatingReducer from "./Reviews/avgRating.js";
import reviewListReducer from "./Reviews/reviewList.js";

const rootReducer = combineReducers({
  avg_rating: avgRatingReducer,
  reviewList: reviewListReducer
});

export default rootReducer;
