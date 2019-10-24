import { connect } from "react-redux";
import ImageGallery from "../Components/Overview/ImageGallery/ImageGallery";

let mapStatetoProps = store => {
  return {
    productData: store.productData
  };
};

const ImageGalleryContainer = connect(
  mapStatetoProps,
  null
)(ImageGallery);

export default ImageGalleryContainer;
