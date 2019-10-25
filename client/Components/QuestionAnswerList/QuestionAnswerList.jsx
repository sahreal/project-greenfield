import React from "react";

import QuestionAnswerCard from "../QuestionAnswerCard/QuestionAnswerCard.jsx";

const QuestionAnswerList = ({ questions }) => {
  return (
    <div className="QuestionAnswerList-container">
      <QuestionAnswerCard question={questions[0]} />
      <input type="button" value="MORE ANSWER QUESTIONS" />
      <input type="button" value="ADD A QUESTION + " />
    </div>
  );
};

export default QuestionAnswerList;
