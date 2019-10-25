import Redux from "redux";
//import { CardActions } from "@material-ui/core";

const productDetailsReducer = (state = null, action) => {
  switch (action.type) {
    case "CHANGE_PRODUCTDETAILS":
      return action.productDetails;
    default:
      return state;
  }
};

export default productDetailsReducer;
