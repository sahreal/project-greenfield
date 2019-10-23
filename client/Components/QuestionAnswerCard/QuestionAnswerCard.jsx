import React from "react";
import { data } from "./dummydata";

const QuestionAnswerCard = () => {
  return (
    <div className="QuestionAnswerCard-container">
      <div className="QACard-question">
        <h6>Q: {data.question_body}</h6>
        <span>
          Helpful ? <a>Yes</a>({data.question_helpfulness}) | <a>Add Answer</a>
        </span>
      </div>
    </div>
  );
};

export default QuestionAnswerCard;
