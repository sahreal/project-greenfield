import React from "react";
import { question, answer } from "./dummydata";

import "./QuestionAnswerCard.css";

const QuestionAnswerCard = () => {
  return (
    <div className="QuestionAnswerCard-container">
      <div className="QACard-question">
        <p className="text-left">
          <strong>Q: {question.question_body}</strong>
        </p>
        <p className="qacard-helpful text-right">
          Helpful ? <a>Yes</a>({question.question_helpfulness}) |{" "}
          <a>Add Answer</a>
        </p>
      </div>
      <div className="QACard-answer">
        {answer.count > 0 ? (
          answer.results.map(ans => (
            <div>
              <p>
                <strong>A: </strong>
                {ans.body}
              </p>
              {ans.photos.length > 0
                ? ans.photos.map(pic => <img src={pic.url} />)
                : null}
              <p>
                by {ans.answerer_name} {ans.date} | Helpful ? <a>Yes</a>(
                {ans.helpfulness}) | <a>Report</a>
              </p>
            </div>
          ))
        ) : (
          <div>No Answer</div>
        )}
        <input type="button" value="Load More Answers" />
      </div>
    </div>
  );
};

export default QuestionAnswerCard;
