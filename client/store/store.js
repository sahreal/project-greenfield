import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./../reducers/main.js";
import changeRating from "../actions/Reviews/changeRating";
import getProductData from "../actions/Overview/getProductData.js";
const getInitialReviews = require("./Reviews/getInitialReviews.js");
const getProductStyles = require("./Overview/getProductStyles.js");
const getProductDetails = require("./Overview/getProductDetails.js");

const store = createStore(rootReducer, applyMiddleware(thunk));

getInitialReviews(1).then(avg_rating => {
  store.dispatch(changeRating(avg_rating));
});

getProductStyles(1).then(productData => {
  store.dispatch(getProductData(productData));
});

getProductDetails(1).then(productDetails => {
  store.dispatch(getProductDetails(productDetails));
});

export default store;
