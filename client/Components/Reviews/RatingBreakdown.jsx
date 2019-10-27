import React from "react";
import RatingBreakdownEntry from "./RatingBreakdownEntry.jsx";

const RatingBreakdown = ({ metaData }) => {
  let totalRatings = Object.values(metaData).reduce(
    (partial_sum, a) => partial_sum + a,
    0
  );
  console.log(totalRatings);

  return (
    <div>
      {Object.keys(metaData.ratings).map(rating => {
        return (
          <RatingBreakdownEntry
            rating={rating}
            percentage={metaData.ratings[rating] / totalRatings}
            numOfRating={metaData.ratings[rating]}
          />
        );
      })}
    </div>
  );
};

export default RatingBreakdown;
