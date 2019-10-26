const axios = require("axios");

const getProductStyles = (product_id = 1) => {
  return axios
    .get(`http://18.223.1.30/products/${product_id}/styles`)
    .then(({ data }) => {
      let products = Object.values(data.results);
      console.log(products, "axios call getProductStyles");
      return products;
    });
};

module.exports = getProductStyles;
