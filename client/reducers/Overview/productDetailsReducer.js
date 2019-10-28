import Redux from "redux";

const productDetailsReducer = (
  state = [
    {
      name: "",
      original_price: "",
      photos: [{ url: "" }],
      sale_price: "",
      skus: {},
      style_id: 0
    }
  ],
  action
) => {
  switch (action.type) {
    case "CHANGE_PRODUCT_DETAILS":
      return action.productDetails;
    default:
      return state;
  }
};

export default productDetailsReducer;
