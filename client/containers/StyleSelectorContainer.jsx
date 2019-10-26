import { connect } from "react-redux";
import StyleSelector from "../Components/Overview/ProductDetails/StyleSelector";
import getProductData from "../actions/Overview/getProductData";

let mapStatetoProps = store => {
  return {
    image: store.image,
    productDetails: store.productDetails,
    productData: store.productData
  };
};

var mapDispatchToProps = dispatch => ({
  handleStyleClick: image => {
    dispatch(getProductData(image));
  }
});

const StyleSelectorContainer = connect(
  mapStatetoProps,
  mapDispatchToProps,
  null
)(StyleSelector);

export default StyleSelectorContainer;
