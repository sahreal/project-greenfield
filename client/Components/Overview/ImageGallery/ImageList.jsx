import React from "react";
import ImageListEntry from "./ImageListEntry";
import getProductData from "../../../actions/Overview/getProductData";

const ImageList = ({ productData }) => {
  console.log(productData.productData, "productData");

  return (
    <div>
      ImageList
      {productData.productData[0].photos.map(image => {
        return (
          <ImageListEntry
            key={image.style_id}
            imageThumbnail={image.thumbnail_url}
          />
        );
      })}
    </div>
  );
};

export default ImageList;
