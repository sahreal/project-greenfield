import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./../reducers/main.js";

//ACTIONS GO HERE
import changeRating from "../actions/Reviews/changeRating";
import questionsAction from "../actions/QA/questionsAction";
import changeReviewList from "../actions/Reviews/changeReviewList";
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

getInitialReviewsMeta(1).then(avg_rating => {
  store.dispatch(changeRating(avg_rating));
});

fetchQuestions(1).then(data => {
  store.dispatch(questionsAction(data));
});

getInitialReviewsList(1).then(reviewList => {
  store.dispatch(changeReviewList(reviewList));
});

getProductStyles(1).then(productData => {
  store.dispatch(getProductData(productData));
});

getProductDetails(1).then(productDetails => {
  store.dispatch(getProductDetails(productDetails));
});

export default store;
