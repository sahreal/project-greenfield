import React from "react";
import ImageList from "./ImageList";

const ImageGallery = productData => {
  return (
    <div>
      ImageGallery
      <ImageList productData={productData} />
    </div>
  );
};
export default ImageGallery;
