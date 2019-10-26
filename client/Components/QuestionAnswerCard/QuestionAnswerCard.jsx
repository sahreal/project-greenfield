import React from "react";
// import { question, answer } from "./dummydata";

import "./QuestionAnswerCard.css";

const convertDate = dateString => {
  const date = new Date(dateString);
  return date.toLocaleString("default", {
    month: "long",
    year: "numeric",
    day: "numeric"
  });
};

const QuestionAnswerCard = ({ question }) => {
  return question ? (
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
      <div className="QACard-answer_outer">
        {Object.keys(question.answers).map(answer => (
          <div key={answer} className="QACard-answer_inner">
            <p>
              <strong>A: </strong>
              {question.answers[answer].body}
            </p>
            {question.answers[answer].photos.length > 0
              ? question.answers[answer].photos.map(pic => (
                  <img src={pic.url} key={pic.id} />
                ))
              : null}
            <p>
              by {question.answers[answer].answerer_name}{" "}
              {convertDate(question.answers[answer].date)} | Helpful ?{" "}
              <a> Yes </a> ({question.answers[answer].helpfulness}) |{" "}
              <a> Report </a>
            </p>
          </div>
        ))}
        <input type="button" value="Load More Answers" />
      </div>
    </div>
  ) : null;
};

export default QuestionAnswerCard;
