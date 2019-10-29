import React from "react";
import ReviewFactorEntry from "./ReviewFactorEntry";

const ReviewFactor = ({ characteristics }) => (
  <div>
    {Object.keys(characteristics).map(factor => {
      return (
        <ReviewFactorEntry
          factor={characteristics[factor]}
          factor_name={factor}
          key={factor.id}
        />
      );
    })}
  </div>
);

export default ReviewFactor;
