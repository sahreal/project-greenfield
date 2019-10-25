import { connect } from "react-redux";
import ProductDetails from "../Components/Overview/ProductDetails/ProductDetails";

let mapStatetoProps = store => {
  return {
    productDetails: store.productDetails,
    productData: store.productData
  };
};

const ProductDetailsContainer = connect(
  mapStatetoProps,
  null
)(ProductDetails);

export default ProductDetailsContainer;
