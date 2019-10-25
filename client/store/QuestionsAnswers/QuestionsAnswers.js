const axios = require("axios");

const fetchQuestions = product_id => {
  return axios.get(`http://18.223.1.30/qa/${product_id}`).then(({ data }) => {
    console.log(data);
    return data.results;
  });
};

module.exports = fetchQuestions;
