const axios = require("axios");

const getInitialReviewsMeta = product_id => {
  return axios
    .get(`http://18.223.1.30/reviews/${product_id}/meta`)
    .then(({ data }) => {
      return data;
    });
};

const getInitialReviewsList = product_id => {
  return axios
    .get(`http://18.223.1.30/reviews/${product_id}/list`, {
      params: { count: 100000, sort: "relevant" }
    })
    .then(({ data }) => {
      console.log(data.results);
      return data.results;
    })
    .catch(e => {
      console.log(e);
    });
};

module.exports = { getInitialReviewsMeta, getInitialReviewsList };
