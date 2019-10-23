import React from "react";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const StarReviews = () => (
  <div>
    <Rating
      name="customized-empty"
      value={2}
      precision={0.5}
      emptyIcon={<StarBorderIcon fontSize="inherit" />}
    />
  </div>
);

export default StarReviews;
