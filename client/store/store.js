import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./../reducers/main.js";
import changeRating from "../actions/Reviews/changeRating";
const getInitialReviews = require("./Reviews/getInitialReviews.js");

const store = createStore(rootReducer, applyMiddleware(thunk));

getInitialReviews(1).then(avg_rating => {
  store.dispatch(changeRating(avg_rating));
});

export default store;
