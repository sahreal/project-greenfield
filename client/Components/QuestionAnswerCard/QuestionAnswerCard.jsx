import React from "react";
// import { question, answer } from "./dummydata";

import "./QuestionAnswerCard.css";

export default class QuestionAnswerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.convertDate = this.convertDate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.displayButton = this.displayButton.bind(this);
  }

  convertDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString("default", {
      month: "long",
      year: "numeric",
      day: "numeric"
    });
  }

  handleClick(e) {
    // e.preventDefault();
    this.setState({ isClicked: !this.state.isClicked });
  }

  displayButton() {
    if (
      !this.state.isClicked &&
      Object.keys(this.props.question.answers).length > 2
    ) {
      return (
        <input
          type="button"
          value="Load More Answers"
          onClick={this.handleClick}
        />
      );
    } else if (this.state.isClicked) {
      return (
        <input
          type="button"
          value="Collaspe Answers"
          onClick={this.handleClick}
        />
      );
    }
  }

  render() {
    const { question } = this.props;

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
          {Object.keys(question.answers)
            .sort(
              (a, b) =>
                question.answers[b].helpfulness -
                question.answers[a].helpfulness
            )
            .map((answer, index) => {
              if (this.state.isClicked) {
                return (
                  <div key={answer} className="QACard-answer_inner">
                    <p>
                      {index === 0 ? <strong>A: </strong> : null}
                      {question.answers[answer].body}
                    </p>
                    {question.answers[answer].photos.length > 0 ? (
                      <div className="answer-photo-container">
                        {question.answers[answer].photos.map((pic, index) => (
                          <div className="answer-photo">
                            <img
                              src={pic}
                              key={`question-answer-photo${index}`}
                            />
                          </div>
                        ))}
                      </div>
                    ) : null}
                    <p>
                      by {question.answers[answer].answerer_name}{" "}
                      {this.convertDate(question.answers[answer].date)} |
                      Helpful ? <a> Yes </a> (
                      {question.answers[answer].helpfulness}) | <a> Report </a>
                    </p>
                  </div>
                );
              } else if (index < 2) {
                return (
                  <div key={answer} className="QACard-answer_inner">
                    <p>
                      {index === 0 ? <strong>A: </strong> : null}
                      {question.answers[answer].body}
                    </p>
                    {question.answers[answer].photos.length > 0 ? (
                      <div className="answer-photo-container">
                        {question.answers[answer].photos.map((pic, index) => (
                          <div
                            className="answer-photo"
                            key={`answer-photo${index}`}
                          >
                            <img
                              src={pic}
                              key={`question-answer-photo${index}`}
                            />
                          </div>
                        ))}
                      </div>
                    ) : null}
                    <p>
                      by {question.answers[answer].answerer_name}{" "}
                      {this.convertDate(question.answers[answer].date)} |
                      Helpful ? <a> Yes </a> (
                      {question.answers[answer].helpfulness}) | <a> Report </a>
                    </p>
                  </div>
                );
              }
            })}
          {this.displayButton()}
        </div>
      </div>
    ) : null;
  }
}

// export default QuestionAnswerCard;
