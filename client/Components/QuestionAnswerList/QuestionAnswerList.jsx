import React from "react";

import QuestionAnswerCard from "../QuestionAnswerCard/QuestionAnswerCard.jsx";
import QuestionModal from "../QuestionModal/QuestionModal.jsx";

export default class QuestionAnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isClicked: false,
      questionLimit: 4,
      modal: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleClick() {
    this.setState({ questionLimit: this.state.questionLimit + 2 });
  }

  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <div className="QuestionAnswerList-container">
        <QuestionModal show={this.state.modal} toggleModal={this.toggleModal} />
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
                //   this.state.isClicked &&
                //   Object.keys(question.answers).length > 0
                // ) {
                //   return (
                //     <QuestionAnswerCard
                //       question={question}
                //       key={question.question_id}
                //     />
                //   );
                // } else if (
                index < this.state.questionLimit &&
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
        {this.props.questions.length > this.state.questionLimit ? (
          <input
            type="button"
            value="MORE ANSWERED QUESTIONS"
            onClick={this.handleClick}
          />
        ) : null}
        <input
          type="button"
          value="ADD A QUESTION + "
          onClick={this.toggleModal}
        />
      </div>
    );
  }
}
