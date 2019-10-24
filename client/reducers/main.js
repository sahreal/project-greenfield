import { combineReducers } from "redux";
import avgRatingReducer from "./Reviews/avgRating.js";
import productImageReducer from "./Overview/productImageReducer";
import productDetailsReducer from "./Overview/productDetailsReducer";

const rootReducer = combineReducers({
  avg_rating: avgRatingReducer,
  productData: productImageReducer,
  productDetails: productDetailsReducer
});

export default rootReducer;
