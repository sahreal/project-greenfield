import { connect } from "react-redux";
import StyleSelector from "../Components/Overview/ProductDetails/StyleSelector";

let mapStatetoProps = store => {
  return {
    image: store.image
  };
};

const StyleSelectorContainer = connect(
  mapStatetoProps,
  null
)(StyleSelector);

export default StyleSelectorContainer;
