import { connect } from "react-redux";
import ProductDetails from "../Components/Overview/ProductDetails/ProductDetails";

let mapStatetoProps = store => {
  return {
    productDetails: store.productDetails
  };
};

const ProductDetailsContainer = connect(
  mapStatetoProps,
  null
)(ProductDetails);

export default ProductDetailsContainer;
