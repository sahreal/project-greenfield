import React from "react";
import ImageList from "./ImageList";
//import { createSocket } from "dgram";

const ImageGallery = productData => {
  // console.log(productData, "JDFJSJJDJFSD");
  return (
    <div>
      ImageGallery
      <ImageList productData={productData} />
    </div>
  );
};
export default ImageGallery;
