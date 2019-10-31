import React from "react";
import { Button } from "react-bootstrap";

const LoadReview = ({ handleClickMoreReview }) => (
  <div>
    <Button
      size="sm"
      variant="outline-dark"
      onClick={() => {
        handleClickMoreReview();
      }}
    >
      More Reviews
    </Button>
  </div>
);

export default LoadReview;
