import React from "react";
import Reviews from "../Reviews/Reviews.jsx";
import OverView from "../Overview/Overview.jsx";
import QuestionAnswer from "../QuestionAnswer/QuestionAnswer.jsx";
import "./Homepage.css";
import QuestionsAnswersContainer from "../../containers/QuestionsAnswersContainer.jsx";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "10px 0",
          backgroundColor: "black",
          alignItems: "center",
          color: "white"
        }}
      >
        <p>YOU GOT THIS FASHION</p>
        <span className="text-right">________________________</span>
      </header>
      <OverView />
      {/* <QuestionAnswer /> */}
      <QuestionsAnswersContainer />
      <Reviews />
    </div>
  );
};

export default Homepage;
