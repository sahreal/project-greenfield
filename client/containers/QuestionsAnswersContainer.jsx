import { connect } from "react-redux";
import QuestionAnswerList from "../Components/QuestionAnswerList/QuestionAnswerList.jsx";

let mapStatetoProps = store => {
  return {
    questions: store.questions
  };
};

const QuestionsAnswersContainer = connect(
  mapStatetoProps,
  null
)(QuestionAnswerList);

export default QuestionsAnswersContainer;
