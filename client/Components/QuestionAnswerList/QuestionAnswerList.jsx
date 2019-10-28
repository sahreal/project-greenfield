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
        {this.props.questions
          .sort((a, b) => b.question_helpfulness - a.question_helpfulness)
          .map((question, index) =>
            // !this.state.isClicked && index < 4 ? (
            //   <QuestionAnswerCard
            //     question={question}
            //     key={question.question_id}
            //   />
            // ) : (
            //   <QuestionAnswerCard
            //     question={question}
            //     key={question.question_id}
            //   />
            // )
            {
              if (
                this.state.isClicked &&
                Object.keys(question.answers).length > 0
              ) {
                return (
                  <QuestionAnswerCard
                    question={question}
                    key={question.question_id}
                  />
                );
              } else if (
                index < 4 &&
                Object.keys(question.answers).length > 0
              ) {
                return (
                  <QuestionAnswerCard
                    question={question}
                    key={question.question_id}
                  />
                );
              }
            }
          )}
        {/* <QuestionAnswerCard question={questions[0]} /> */}
        <input type="button" value="MORE ANSWERED QUESTIONS" />
        <input type="button" value="ADD A QUESTION + " />
      </div>
    );
  }
}
