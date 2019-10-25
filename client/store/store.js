import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./../reducers/main.js";

//ACTIONS GO HERE
import changeRating from "../actions/Reviews/changeRating";
import changePageNum from "../actions/Reviews/changePageNum.js";
import changeReviewList from "../actions/Reviews/changeReviewList";
import questionsAction from "../actions/QA/questionsAction";
import getProductData from "../actions/Overview/getProductData.js";
//EXTERNAL FUNCTIONS
const fetchQuestions = require("./QuestionsAnswers/QuestionsAnswers.js");
const {
  getInitialReviewsMeta,
  getInitialReviewsList
} = require("./Reviews/getInitialReviews.js");
const getProductStyles = require("./Overview/getProductStyles.js");
const getProductDetails = require("./Overview/getProductDetails.js");

//START BELOW, CREATE STORE

const store = createStore(rootReducer, applyMiddleware(thunk));

//getting the product id from window

let productId = window.location.href.split("/").pop();

//intialize data
store.dispatch({
  type: "CHANGE_PRODUCT_ID",
  productId: productId
});
store.dispatch(changePageNum(0));

getInitialReviewsMeta(productId).then(avg_rating => {
  store.dispatch(changeRating(avg_rating));
});

fetchQuestions(productId).then(data => {
  store.dispatch(questionsAction(data));
});

getInitialReviewsList(productId).then(reviewList => {
  store.dispatch(changeReviewList(reviewList));
});

getProductStyles(productId).then(productData => {
  store.dispatch(getProductData(productData));
});

getProductDetails(productId).then(productDetails => {
  store.dispatch(getProductDetails(productDetails));
});

export default store;
