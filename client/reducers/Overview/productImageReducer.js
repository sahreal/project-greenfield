import Redux from "redux";

const productImageReducer = (state = [], action) => {
  switch (action.type) {
    case "CHANGE_PRODUCT_DATA":
      return action.productData;
    default:
      return state;
  }
};

export default productImageReducer;
