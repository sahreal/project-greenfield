const axios = require("axios");

const getInitialReviews = product_id => {
  return axios
    .get(`http://18.223.1.30/reviews/${product_id}/meta`)
    .then(({ data }) => {
      console.log("request made");
      let ratings = Object.values(data.ratings);
      console.log(ratings);
      let rating =
        ratings.reduce((partial_sum, a) => partial_sum + a, 0) / ratings.length;
      console.log(rating);
      let avg_rating = Math.round(rating * 10) / 10;
      console.log(avg_rating);
      return avg_rating;
    });
};

module.exports = getInitialReviews;
