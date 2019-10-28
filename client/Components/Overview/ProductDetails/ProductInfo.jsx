import React from "react";

const ProductInfo = props => {
  return (
    <div>
      <h1 className="ProductName">{props.productDetails[1]}</h1>
      <div className="Category">{props.productDetails[4]}</div>
      <div className="Price">{props.productDetails[5]}</div>
    </div>
  );
};

export default ProductInfo;
