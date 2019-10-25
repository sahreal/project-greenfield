const axios = require("axios");

const getInitialReviewsMeta = product_id => {
  return axios
    .get(`http://18.223.1.30/reviews/${product_id}/meta`)
    .then(({ data }) => {
      let ratings = Object.values(data.ratings);
      // console.log(ratings);
      let rating =
        ratings.reduce((partial_sum, a) => partial_sum + a, 0) / ratings.length;
      let avg_rating = (Math.round(rating * 10) / 10).toFixed(1);
      console.log(avg_rating);
      return avg_rating;
    });
};

const getInitialReviewsList = product_id => {
  return axios
    .get(`http://18.223.1.30/reviews/${product_id}/list`, {
      params: { count: 2, sort: "relevant" }
    })
    .then(({ data }) => {
      // console.log(data);
      return data.results;
    })
    .catch(e => {
      console.log(e);
    });
};

module.exports = { getInitialReviewsMeta, getInitialReviewsList };
