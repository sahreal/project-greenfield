import React from "react";

import QuestionAnswerSearchForm from "../QuestionAnswerSearchForm/QuestionAnswerSearchForm.jsx";
import QuestionAnswerList from "../QuestionAnswerList/QuestionAnswerList.jsx";

import "./QuestionAnswer.css";

const QuestionAnswer = ({ questions }) => {
  return (
    <div className="QuestionAnswer-container">
      <QuestionAnswerSearchForm />
      <QuestionAnswerList questions={questions} />
    </div>
  );
};

export default QuestionAnswer;
