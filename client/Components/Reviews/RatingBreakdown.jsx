import React from "react";
import RatingBreakdownEntry from "./RatingBreakdownEntry.jsx";

const RatingBreakdown = ({ metaData }) => {
  let totalRatings = Object.values(metaData.ratings).reduce(
    (partial_sum, a) => partial_sum + a,
    0
  );

  return (
    <div>
      {Object.keys(metaData.ratings).map(rating => {
        return (
          <RatingBreakdownEntry
            rating={rating}
            percentage={metaData.ratings[rating] / totalRatings}
            numOfRating={metaData.ratings[rating]}
            key={rating}
          />
        );
      })}
    </div>
  );
};

export default RatingBreakdown;
