import { combineReducers } from "redux";
import avgRatingReducer from "./Reviews/avgRating.js";

const rootReducer = combineReducers({
  avg_rating: avgRatingReducer
});

export default rootReducer;
