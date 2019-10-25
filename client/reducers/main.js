import { combineReducers } from "redux";
import avgRatingReducer from "./Reviews/avgRating.js";
import reviewListReducer from "./Reviews/reviewList.js";
import productImageReducer from "./Overview/productImageReducer";
import productDetailsReducer from "./Overview/productDetailsReducer";

const rootReducer = combineReducers({
  avg_rating: avgRatingReducer,
  reviewList: reviewListReducer,
  productData: productImageReducer,
  productDetails: productDetailsReducer
});

export default rootReducer;
