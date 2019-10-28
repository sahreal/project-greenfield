import React from "react";
import Reviews from "../Reviews/Reviews.jsx";
import OverView from "../Overview/Overview.jsx";
import QuestionAnswer from "../QuestionAnswer/QuestionAnswer.jsx";
import "./Homepage.css";
import QuestionsAnswersContainer from "../../containers/QuestionsAnswersContainer.jsx";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <OverView />
      <Reviews />
      {/* <QuestionAnswer /> */}
      <QuestionsAnswersContainer />
    </div>
  );
};

export default Homepage;
