import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./../reducers/main.js";
import changeRating from "../actions/Reviews/changeRating";
const {
  getInitialReviewsMeta,
  getInitialReviewsList
} = require("./Reviews/getInitialReviews.js");

const store = createStore(rootReducer, applyMiddleware(thunk));

getInitialReviewsMeta(1).then(avg_rating => {
  store.dispatch(changeRating(avg_rating));
});
getInitialReviewsList(1).then(reviewList => {
  store.dispatch(changeReviewList(reviewList));
});

export default store;
