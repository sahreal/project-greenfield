import Redux from "redux";
//import { CardActions } from "@material-ui/core";

const productImageReducer = (state = null, action) => {
  switch (action.type) {
    case "CHANGE_PRODUCTDATA":
      return action.productData;
    default:
      return state;
  }
};

export default productImageReducer;
