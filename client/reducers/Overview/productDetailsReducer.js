import Redux from "redux";

const productDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_PRODUCT_DETAILS":
      return action.productDetails;
    default:
      return state;
  }
};

export default productDetailsReducer;
