import React from "react";

import QuestionAnswerCard from "../QuestionAnswerCard/QuestionAnswerCard.jsx";

export default class QuestionAnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }
  render() {
    return (
      <div className="QuestionAnswerList-container">
        {this.props.questions.map((question, index) =>
          !this.state.isClicked && index < 4 ? (
            <QuestionAnswerCard
              question={question}
              key={question.question_id}
            />
          ) : (
            <QuestionAnswerCard
              question={question}
              key={question.question_id}
            />
          )
        )}
        {/* <QuestionAnswerCard question={questions[0]} /> */}
        <input type="button" value="MORE ANSWER QUESTIONS" />
        <input type="button" value="ADD A QUESTION + " />
      </div>
    );
  }
}
