import React from "react";

import "./QuestionAnswerSearchForm.css";

const QuestionAnswerSearchForm = () => {
  return (
    <div className="QASearch-container">
      <form className="QASearch-form">
        <div className="QASearch-form_inner">
          <input
            type="text"
            className="QA-form_input"
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          />
        </div>
      </form>
    </div>
  );
};

export default QuestionAnswerSearchForm;
