import { combineReducers } from "redux";
import avgRatingReducer from "./Reviews/avgRating.js";
import questionsReducer from "./QA/questionsReducer.js";

const rootReducer = combineReducers({
  avg_rating: avgRatingReducer,
  questions: questionsReducer
});

export default rootReducer;
