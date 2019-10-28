import React from "react";
import Button from "@material-ui/core/Button";

const LoadReview = ({ handleClickMoreReview }) => (
  <div>
    <Button
      onClick={() => {
        handleClickMoreReview();
      }}
      size="small"
      variant="outlined"
    >
      More Reviews
    </Button>
  </div>
);

export default LoadReview;
