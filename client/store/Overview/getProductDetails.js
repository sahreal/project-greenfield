const axios = require("axios");

const getProductDetails = product_id => {
  return axios.get(`http://18.223.1.30/products/${product_id}/`).then(data => {
    let details = Object.values(data.data);
    //console.log(data.data, "WHAAAAT");
    return details;
  });
};

module.exports = getProductDetails;
