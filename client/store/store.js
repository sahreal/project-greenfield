import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./../reducers/main.js";
import changeRating from "../actions/Reviews/changeRating";
import questionsAction from "../actions/QA/questionsAction";

const getInitialReviews = require("./Reviews/getInitialReviews.js");
const fetchQuestions = require("./QuestionsAnswers/QuestionsAnswers.js");

const store = createStore(rootReducer, applyMiddleware(thunk));

getInitialReviews(1).then(avg_rating => {
  store.dispatch(changeRating(avg_rating));
});
fetchQuestions(1).then(data => {
  store.dispatch(questionsAction(data));
});

export default store;
